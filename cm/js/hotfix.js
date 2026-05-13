(function(){
    var _wg = WebSquare;
    var core = WebSquare.core;
    var exception = WebSquare.exception;
    var event = WebSquare.event;
    var util = WebSquare.util;
    var logger = WebSquare.logger;
    var language = WebSquare.language;
    var xfControl = WebSquare.xfControl;    
    var gridView = WebSquare.uiplugin.gridView;
	var cellInfo = WebSquare.uiplugin.cellInfo;
	var input = WebSquare.uiplugin.input;
	var inputCalendar = WebSquare.uiplugin.inputCalendar;
	var selectbox = WebSquare.uiplugin.selectbox;
	var autoComplete = WebSquare.uiplugin.autoComplete;
	var dataList = WebSquare.DataCollection.dataList;
	var validator = WebSquare.validator;
	
	cellInfo.prototype.defaultOptions.useEditFormat = false;
    gridView.prototype.handleResize = function(options) {
        try {
            var opt = options || {};
            var nWidth = this.render.offsetWidth;
            var nHeight = this.render.offsetHeight;
            if (nWidth > 0 && nHeight > 0) {
                if (this.delayedDrawObj) {
                    this.resizeObj = {
                        width: nWidth,
                        height: nHeight,
                        scrollLeft: this.resizeObj.scrollLeft,
                        scrollTop: this.resizeObj.scrollTop,
                        clientWidth: this.resizeObj.clientWidth
                    };
                    this.setRedrawStatus("draw");
                } else {
                    var changedWidth = nWidth - this.resizeObj.width;
                    var changedHeight = nHeight - this.resizeObj.height;
                    var resizeGroupbyZone = false;
                    var bCellHidden = this.hiddenCellObj.length > 0;
                    if (this._isHybridScroll() === true && changedHeight !== 0) {
                        this.setScrollYHeightHybrid();
                    } else if (changedHeight > 0) {
                        if (this.options.adaptive) {
                            var adaptiveThreshold = parseInt(this.options.adaptiveThreshold) || 480;
                            if (!(util.isIE() && parseInt(core.browserVersion(), 10) < 10)) {
                                if (util._getBrowserWidth() <= adaptiveThreshold) {
                                    return;
                                }
                            }
                        }
                        if (opt.changedVisibleRowNum) {
                            this._onSetHeight = true;
                            this.lastTopRowIndex = null;
                        } else {
                            this._setGridHeightBefore();
                        }
                        resizeGroupbyZone = true;
                        var dataLength = this.getDataLength();
                        var oldDrawedRowLength = this.drawedRowLength;
                        this.lastTopRowIndex = null;
                        this.setDataTable();
                        this.setScrollYHeight();
                        var visibleLastIndex = this._getVisibleLastIndex(this.lastIndex + 1);
                        if (dataLength <= 0) {
                        } else if (this.rowIndex + visibleLastIndex - 1 + this.drawedRowLength - oldDrawedRowLength < dataLength) {
                            var hiddenRowCnt = dataLength - this.drawedRowLength + 1;
                            var newRowIndex = this.rowIndex;
                            if (this.rowIndex + 1 > hiddenRowCnt && hiddenRowCnt >= -1) { 
                                if (hiddenRowCnt >= 0) {
                                    newRowIndex = hiddenRowCnt;
                                } else {
                                    newRowIndex = 0;
                                }
                            }
                            if (bCellHidden) {
                                this.rowIndex = newRowIndex;
                                this._setCellVisibleRefresh();
                            } else {
                                this.drawData(newRowIndex, 0, null, null, {noApplyRealFocus: true});
                            }
                        } else {
                            var newRowIndex = dataLength - this.drawedRowLength > 0 ? dataLength - this.drawedRowLength : 0;
                            var endRowIndex;
                            if (newRowIndex == this.rowIndex) {
                                endRowIndex = visibleLastIndex - 1;
                            } else {
                                this.scrollEvent = false;
                                this.checkScrollEnd = true; 
                                var scrollY = this.getElementById(this.id + "_scrollY_div");
                                scrollY.scrollTop = this.oneRowScrollHeight * this._getScrollRowIndex(newRowIndex);
                            }
                            if (bCellHidden) {
                                this.rowIndex = newRowIndex;
                                this._setCellVisibleRefresh();
                            } else {
                                var startPoint;
                                if (opt.startPoint) {
                                    startPoint = parseInt(opt.startPoint);
                                    if (!isNaN(startPoint)) {
                                        endRowIndex = startPoint;
                                    }
                                }
                                this.drawData(newRowIndex, endRowIndex, null, null, {noApplyRealFocus: true});
                            }
                        }
                        this._setGridHeightAfter();
                    } else if (changedHeight < 0 && this.options.visibleRowNum != "all") {
                        if (opt.changedVisibleRowNum !== true) {
                            this._setGridHeightBefore();
                        }
                        this._setGridHeightAfter();
                        resizeGroupbyZone = true;
                        var bodyTable = this.getElementById(this.id + "_body_table");
                        this.dataLayerHeight = bodyTable.parentNode.offsetHeight;
                        var limit = Number(this.options.visibleRowNum);
                        var showed = this.getVisibleRowNum();
                        if (bCellHidden) {
                            this._setCellVisibleRefresh();
                        } else {
                            if (!isNaN(limit) && limit > 0 && limit >= showed) {
                                if (opt.changedVisibleRowNum === true) {
                                    this.cutGridBottom(this.lastIndex);
                                }
                                this.setScrollYHeight();
                            } else {
                                this.lastTopRowIndex = null;
                                this.cutGridBottom(this.lastIndex);
                                this.setScrollYHeight();
                            }
                        }
                    }
                    if (changedWidth != 0) {
                        resizeGroupbyZone = true;
                        this.resizeObj.clientWidth = this.render.clientWidth;
                        this.setScrollYHeight();
                        if (!this.options.autoFit) {
                            this.setOverflowX();
                        }
                        this._handleScrollX();
                        if (this.options.autoFit) {
                            this.autoFitFunc();
                        }
                        if (bCellHidden) {
                            this._setCellVisibleRefresh();
                        }
                        this.displayFixedColumnLine();
                        util.setTimeout(this._setRedrawTextAreaColumn, {
                            "key": this.id + "_setRedrawTextAreaColumn",
                            "caller": this,
                            "delay": 100,
                            "args": [null, true]
                        });
                    }
                    if (resizeGroupbyZone && this.groupbyZoneStatus.groupbyZoneRender) {
                        this.resizeGroupbyZone();
                    }
                }
            } else {
                this.setRedrawStatus("stop");
            }
            if (this.groupbyZoneStatus.groupbyZoneRender && !this.adjustGroupbyZone) {
                this.adjustGroupbyZone = true;
                this.resizeGroupbyZone();
            }
            this.resizeObj = {
                width: nWidth,
                height: nHeight,
                scrollLeft: this.resizeObj.scrollLeft,
                scrollTop: this.resizeObj.scrollTop,
                clientWidth: this.resizeObj.clientWidth
            };
            if (this.resizeObj.width > 0 && this.resizeObj.height > 0) {
                this.resizeObj.scrollLeft = this.getElementById(this.id + "_scrollX_right").scrollLeft;
                this.resizeObj.scrollTop = this.getElementById(this.id + "_scrollY_div").scrollTop;
            }
        } catch (e) {
            exception.printStackTrace(e, null, this);
        }
    };
    gridView.prototype.setVisibleRowNum = function(rowCount) {
        try {
            rowCount = parseInt(rowCount, 10);
            if (isNaN(rowCount) || rowCount <= 0) {
                return false;
            }
            if (this.options.initFixedHeightByRowNum > -1) {
                this.options.initFixedHeightByRowNum = rowCount;
            }
            var originVisibleRowNum = this.options.visibleRowNum;
            var currentColumnOrder = this.getColumnOrder();
            var colCnt = this.getColCnt();
            var originalColumnorder = [];
            for (var i = 0; i < colCnt; i++) {
                originalColumnorder.push(i);
            }
            var rowCountChange = false;
            var columnOrderEqual = true;
            if (originVisibleRowNum == "all" || originVisibleRowNum == "") {
                rowCountChange = true;
            } else if (parseInt(originVisibleRowNum, 10)) {
                rowCountChange = true;
            }
            for (var i = 0; i < currentColumnOrder.length; i++) {
                if (currentColumnOrder[i] !== originalColumnorder[i]) {
                    columnOrderEqual = false; 
                    break;
                }
            }
            this.options.visibleRowNum = rowCount;
            this._dynamicVisibleRowNum = rowCount;
            if (!columnOrderEqual && rowCountChange) {
                this.setColumnOrder(originalColumnorder);
            }
            var newGridHeight = this._getVisibleRowNumHeight(true);
            this.setTrRowTable();
            if (this.getScrollTop() > 0) {
                this.setSize(null, newGridHeight);
                //this.handleResize({startPoint:"0"});
                this.scrollEvent = false;   
                this.skipScrollEndEvent = true;
                this.skipScrollStartEvent = true;
            } else {
                this.setSize(null, newGridHeight);
            }
            if (!columnOrderEqual && rowCountChange) {
                this.setColumnOrder(currentColumnOrder);
            }
            if (this.hasSubtotal) {
                if (this.options.initFixedHeightByRowNum > -1) {
                    this.handleResize({changedVisibleRowNum:true});
                }
            }
        } catch (e) {
            exception.printStackTrace(e, null, this);
        }
    };
    gridView.prototype.getDrawedSubtotalCount = function() {
        try {
            if (!this.hasSubtotal) {
                return 0;
            }
            var drawedSubtotalRowCount = 0;
            for (var targetColumnID in this.subtotalRowHash) {
                for (var i = 0; i < this.subtotalRowHash[targetColumnID].length; i++) {
                    var subtotalRow = this.subtotalRowHash[targetColumnID][i];
                    if (subtotalRow.style.display != "none") {
                        drawedSubtotalRowCount++;
                    }
                }
            }
            return drawedSubtotalRowCount;
        } catch (e) {
            exception.printStackTrace(e, null, this);
        }
    };
	
	gridView.prototype.setColumnEditFormat = function(colIndex, format) {
	    try {
	        colIndex = this.getColumnIndex(colIndex);
	        var cellInfo = this.getCellInfo(colIndex);
	        var colId = cellInfo.id;
	        var inputType = cellInfo.options.inputType;
	        if (!(inputType == "text" || inputType == "input")) {
	            logger.printLog("Invalid cell input type.");
	            return false;
	        } else {
	            var td = this.data_td_list[colIndex];
	            var input = this.getInput(cellInfo, td);
	            if (input && input.options && (input.options.pluginName === "input")) {
	                cellInfo.options.editFormat = format;
	                var totalRow = this.getTotalRow();
	                for (var i = 0; i < totalRow; i++) {
	                    var value = this.dataList.getCellData(i, colId);
	                    td = this.data_td_list[colIndex + i * this.oneRowDataLength];
	                    input = this.getInput(cellInfo, td);
	                    input.setEditFormat(format); 
	                    if (format && format.length > 0) {
	                        if (input.options.editPlaceholderChar) {
	                            var maskOptions = {
	                                value: value,
	                                mask: input._editFormat[0],
	                                editFormatInfo: input._editFormatInfo,
	                                linkedList: WebSquare.text.linkedList()
	                            };
	                            var maskValueObj = WebSquare.text.maskit3(maskOptions);
	                        } else {
	                            var mask = WebSquare.text.whichMask(value, input.removeSignToken);
	                            var maskValueObj = WebSquare.text.maskit2(value, mask, input._editFormatInfo, WebSquare.text.linkedList(), null);
	                        }
	                        this.dataList.setCellData(i, colId, maskValueObj.orgValue);
	                    }
	                }
	                this.drawColumnData(colIndex);
	            }
	        }
	    } catch (e) {
	        exception.printStackTrace(e, null, this);
	    }
	}
	gridView.prototype.setColumnUseEditFormat = function(colIndex, useEditFormat) {
	    try {
	        colIndex = this.getColumnIndex(colIndex);
	        var cellInfo = this.getCellInfo(colIndex);
	        if (cellInfo.options.inputType !== "calendar") {
	            logger.printLog("Invalid cell input type. setColumnUseEditFormat is only for calendar inputType.");
	            return false;
	        }
	        useEditFormat = util.getBoolean(useEditFormat);
	        cellInfo.options.useEditFormat = useEditFormat;
	        var td = this.data_td_list[colIndex];
	        var inputCalendar = this.getInput(cellInfo, td);
	        if (inputCalendar && inputCalendar.options && inputCalendar.options.pluginName === "inputCalendar") {
	            var totalRow = this.getTotalRow();
	            for (var i = 0; i < totalRow; i++) {
	                td = this.data_td_list[colIndex + i * this.oneRowDataLength];
	                inputCalendar = this.getInput(cellInfo, td);
	                inputCalendar.setUseEditFormat(useEditFormat);
	            }
	            this.drawColumnData(colIndex);
	        }
	    } catch (e) {
	        exception.printStackTrace(e, null, this);
	    }
	}
	gridView.prototype.getColumnUseEditFormat = function(colIndex) {
	    try {
	        colIndex = this.getColumnIndex(colIndex);
	        var cellInfo = this.getCellInfo(colIndex);
	        if (cellInfo.options.inputType !== "calendar") {
	            logger.printLog("Invalid cell input type. getColumnUseEditFormat is only for calendar inputType.");
	            return false;
	        }
	        return util.getBoolean(cellInfo.options.useEditFormat);
	    } catch (e) {
	        exception.printStackTrace(e, null, this);
	    }
	}
	gridView.prototype.setColumnDisplayFormat = function(colIndex, displayFormat) {
	    try {
	        var cellInfo = this.getCellInfo(colIndex);
	        cellInfo.options.displayFormat = displayFormat;
	        cellInfo._changeDisplayFormat = true;
	        var calendarEditFormat = (cellInfo.options.inputType == "calendar" && cellInfo.options.useEditFormat);
	        if (cellInfo.options.embeddedInput) {
	            var formatter = WebSquare.format.createFormatter(cellInfo.options.dataType, cellInfo.options.displayFormat, cellInfo.options.displayFormatter, cellInfo.options.ioFormat, null, null, cellInfo.mainGrid.scope_id, cellInfo.mainGrid.id);
	            for (var i = 0; i < cellInfo.mainGrid.getDataLength(); i++) {
	                var data = cellInfo.mainGrid.dataList._getCellData(i, colIndex);
	                colIndex = cellInfo.mainGrid.getColumnIndex(colIndex);
	                var td = cellInfo.mainGrid._getTDByIndex(colIndex + i * cellInfo.mainGrid.oneRowDataLength);
	                var input = cellInfo.mainGrid.getInput(cellInfo, td, data);
	                if (input) {
	                    input.formatter = formatter;
	                    if (calendarEditFormat) {
	                        input._editFormat = displayFormat.replace(/[a-zA-Z]/g, "#").split("||");
	                        input.options.displayFormat = displayFormat;
	                    }
	                }
	            }
	        } else {
	            if (calendarEditFormat) {
	                var input = this.getInput(cellInfo);
	                input._editFormat = displayFormat.replace(/[a-zA-Z]/g, "#").split("||");
	            }
	        }
	        cellInfo.initFormatter();
	        this.drawColumnData(colIndex);
	        return;
	    } catch (e) {
	        exception.printStackTrace(e, null, this);
	    }
	};
	cellInfo.text.prototype.setEditMode = function(td, rowIndex) {
	    ["WebSquare.uiplugin.cellInfo.text.prototype.setEditMode"];
	    try {
	        if (this.options.embeddedInput) {
	            return;
	        }
	        this.editRowIndex = rowIndex;
	        this.editTd = td;
	        if (this.internal) {
	            this.parentColumnInfo.editRowIndex = rowIndex;
	            this.parentColumnInfo.editTd = td;
	        }
	        this.setPosition();
	        var input = this.mainGrid.getInput(this);
	        this.comp = input;
	        if (!(this.options.maskFormat && this.options.displayFormat)) {
	            input.formatter = (this.options.applyFormat == "all" || this._changeDisplayFormat === true || this.options.dataType == "date") ? this.formatter : this.emptyFormatter;
	            input.options.applyFormat = this.options.applyFormat;
	        }
	        var data = this.mainGrid.dataList._getCellData(rowIndex, this.colID);
	        if (this.options.applyFormat === "all" && this.options.displayFormat && !(this.options.dataType == "text" || this.options.dataType == "date" || this.options.dataType == "time")) {
	            var decimalDelimiter = this.options.decimalDelimeter || '.';
	            var tempData = data + "";
	            var number = tempData.split(decimalDelimiter);
	            if (number[1] && parseInt(number[1]) == 0) {
	                data = number[0];
	            }
	        }
	        if (this.options.editFormat && this.options.editPlaceholderChar) {
	            var _col = this.mainGrid._dataList.getColumnIndex(this.colID);
	            var _realRow = this.mainGrid._grid.getRealRowIndex(rowIndex);
	            input.linkedList = this.mainGrid._linkedListArr[_realRow * this.mainGrid._dataList.getColumnCount() + _col].clone();
	            data = "";
	            var options = { "setEditMode": true };
	        }
	        input.setValue(data, options);
	        if (document.activeElement != input.render) {
	            input.focus();
	        }
	        if (this.mainGrid._isBrowserScroll() !== true ) {
	            this.mainGrid.render.scrollLeft = 0;
	            this.mainGrid.render.scrollTop = 0;
	        }
	        if (input.options.editType == "select") {
	            input.select();
	        } else if (input.options.editType == "focus" && (util.isIEAllVersion() || util.isFF() || util.isSpartan())) {
	            WebSquare.text.setCaretPos(input.render, input.render.value.length);
	        }
	    } catch (e) {
	        exception.printStackTrace(e, null, this);
	    }
	};
	cellInfo.calendar.prototype.setInnerHTML = function(td, data, rowIndex, colIndex, options) {
	    try {
	        var wrapperCell = this.mainGrid._getWrapperCell(td, rowIndex);
	        if (this.options.embeddedInput) {
	            var inputCalendar = this.mainGrid.getInput(this, td, data);
	            if (inputCalendar.render && this.mainGrid._getWrapperTD(inputCalendar.render.parentNode) == null) {
	                wrapperCell.textContent = "";
	                wrapperCell.appendChild(inputCalendar.render);
	            }
	            var height = 0;
	            var width = 0;
	            var displayFlag = false;
	            if (td.parentNode.style.display == "none") {
	                td.parentNode.style.display = "";
	                displayFlag = true;
	            }
	            if (!this.mainGrid.embeddedCalendarStyleObj) {
	                this.mainGrid.embeddedCalendarStyleObj = {
	                    top: parseInt(WebSquare.style.getStyle(td, "padding-top"), 10),
	                    bottom: parseInt(WebSquare.style.getStyle(td, "padding-bottom"), 10),
	                    left: parseInt(WebSquare.style.getStyle(td, "padding-left"), 10),
	                    right: parseInt(WebSquare.style.getStyle(td, "padding-right"), 10)
	                };
	            }
	            height = td.getBoundingClientRect().height - parseFloat(WebSquare.style.getStyle(td, "border-top-width")) - parseFloat(WebSquare.style.getStyle(td, "border-bottom-width"));        
	            height -= (this.mainGrid.embeddedCalendarStyleObj["top"] + this.mainGrid.embeddedCalendarStyleObj["bottom"]);
	            if (!this.mainGrid.embeddedWidthObj[colIndex] || this.mainGrid.embeddedWidthObj[colIndex]["isChanged"]) {
	                this.mainGrid.embeddedWidthObj[colIndex] = {
	                    isChanged: false,
	                    width: td.clientWidth
	                };
	            }
	            width = this.mainGrid.embeddedWidthObj[colIndex]["width"]; 
	            width -= (this.mainGrid.embeddedCalendarStyleObj["left"] + this.mainGrid.embeddedCalendarStyleObj["right"]);
	            if (displayFlag) {
	                td.parentNode.style.display = "none";
	            } else {
	                if (util.isIE("6 7")) {
	                    height -= 2;
	                }
	            }
	            var dataRowindex = util.getDataPrefix("rowindex");
	            inputCalendar.setSize(width - 2, height);
	            inputCalendar.render.setAttribute(dataRowindex, rowIndex);
	            if (this.options.useEditFormat) {
	                this._editFormat = inputCalendar._editFormat;
	                this._editFormatInfo = inputCalendar._editFormatInfo;
	                if (this.options.editPlaceholderChar) {
	                    var isEmptyValue = (this.options.editPlaceholderCharHideWhenEmptyValue && !data) ? true : false; 
	                    var endEdit = (options && options.endEdit === true);
	                    var _value = endEdit ? inputCalendar.linkedList.print('formatted').join('') : data; 
	                    var maskOptions = {
	                        value: _value,
	                        mask: this._editFormat[0],
	                        editFormatInfo: this._editFormatInfo,
	                        linkedList: WebSquare.text.linkedList(), 
	                    };
	                    var maskValueObj = WebSquare.text.maskit3(maskOptions);
	                    if (endEdit) {
	                        inputCalendar.linkedList.clear();
	                    }
	                } else {
	                    var maskValueObj = WebSquare.text.dynamicMask(data, this._editFormat, this._editFormatInfo.editTokens);
	                }
	                if (util.isEmptyObject(maskValueObj) !== true) {
	                    data = isEmptyValue ? "" : maskValueObj.value;
	                    inputCalendar._editValue = maskValueObj.orgValue;
	                    inputCalendar.removeSignValue = maskValueObj.orgValue;
	                }
	            }
	            inputCalendar._setValue(data, {
	                "skipValidate": true
	            });
	            if (this.mainGrid.__getEditReadOnly(td, rowIndex) || this.mainGrid._getEditDisabled(rowIndex, colIndex)) {
	                inputCalendar.setDisabled(true);
	            } else {
	                inputCalendar.setDisabled(false);
	            }
	            td.removeAttribute("tabIndex");
	        } else {
	            if (this.getEscape()) {
	                data = WebSquare.xml._encode(data + "");
	            }
	            if (this.options.useMonthYearFormat) {
	                data = WebSquare.date.getIOFormatDate(data, this.options.ioFormat, this.options.calendarValueType);
	            }
	            if (this.options.useEditFormat) {
	                var inputCalendar = this.mainGrid.getInput(this, td, data);
	                this._editFormat = inputCalendar._editFormat;
	                this._editFormatInfo = inputCalendar._editFormatInfo;
	                if (this.options.editPlaceholderChar) {
	                    var isEmptyValue = (this.options.editPlaceholderCharHideWhenEmptyValue && !data) ? true : false; 
	                    inputCalendar.linkedList = inputCalendar.linkedList || WebSquare.text.linkedList(); 
	                    var endEdit = (options && options.endEdit === true);
	                    var _value = endEdit ? inputCalendar.linkedList.print('formatted').join('') : data; 
	                    var maskOptions = {
	                        value: _value,
	                        mask: this._editFormat[0],
	                        editFormatInfo: this._editFormatInfo,
	                        linkedList: inputCalendar.linkedList 
	                    };
	                    var maskValueObj = WebSquare.text.maskit3(maskOptions);
	                    if (!this.mainGrid._linkedListArr) {
	                        this.mainGrid._linkedListArr = [];
	                    }
	                    var _col = this.mainGrid._dataList.getColumnIndex(this.colID);
	                    var _realRow = this.mainGrid._grid.getRealRowIndex(rowIndex);
	                    this.mainGrid._linkedListArr[_realRow * this.mainGrid._dataList.getColumnCount() + _col] = inputCalendar.linkedList.clone(); 
	                    inputCalendar.linkedList.clear();
	                } else {
	                    var maskValueObj = WebSquare.text.dynamicMask(data, this._editFormat, this._editFormatInfo.editTokens);
	                }
	                if (util.isEmptyObject(maskValueObj) !== true) {
	                    data = isEmptyValue ? "" : maskValueObj.value;
	                    inputCalendar._editValue = maskValueObj.orgValue;
	                    inputCalendar.removeSignValue = maskValueObj.orgValue;
	                }
	            }
	            var resultData = this.getDisplayData(data);
	            var realRowIndex = this.mainGrid._dataList.filteredRowIndexArr[rowIndex];
	            var viewType = this.mainGrid.getCellOption(realRowIndex, colIndex, "viewType");
	            var dataRowIndex = util.getDataPrefix("rowIndex");
	            var dataColIndex = util.getDataPrefix("colIndex");
	            var dataCol_id = util.getDataPrefix("col_id");
	            if (viewType == "icon" && this.options.viewTypeIconImage == "true") {
	                wrapperCell.innerHTML = [
	                    "<table style='border-collapse:collapse; border-spacing:0px; width:100%; table-layout:fixed;'>",
	                    "<td " + dataCol_id + "='" + this.colID + "' " + dataRowIndex + "='" + rowIndex + "' " + dataColIndex + "='" + colIndex + "' class='" + this.mainGrid.options.bodyTdClass + "_calendar_table' style='width:90%; overflow:hidden; text-overflow:ellipsis;'>",
	                    this.mainGrid.dataTagOpen + resultData + this.mainGrid.dataTagClose,
	                    "</td>",
	                    "<td " + dataCol_id + "='" + this.colID + "' " + dataRowIndex + "='" + rowIndex + "'  " + dataColIndex + "='" + colIndex + "' class='" + this.mainGrid.options.bodyTdClass + "_calendar_img" + "'>",
	                    "<div class='" + this.mainGrid.options.bodyTdClass + "_calendar_div_img' />",
	                    "</td>",
	                    "</table>"
	                ].join("");
	                var _this = this;
	                var img = wrapperCell.getElementsByTagName("div")[0];
	                var imageClickEvent = function(e) {
	                    if (!_this.mainGrid._getEditDisabled(rowIndex, colIndex) && !_this.mainGrid.___getEditReadOnly(rowIndex, colIndex)) {
	                        _this.calendarImageClicked = true;
	                    }
	                };
	                event.addListener(img, "onclick", imageClickEvent);
	            } else {
	                var dataEditModeEvent = util.getDataPrefix("editModeEvent");
	                wrapperCell.innerHTML = this.mainGrid.dataTagOpen + resultData + this.mainGrid.dataTagClose;
	                if (viewType == "icon" || (viewType == "" && this.options.dataType == "own")) {
	                    this.mainGrid.addClass(td, this.mainGrid.options.bodyTdClass + "_calendar");
	                    td.setAttribute(dataEditModeEvent, this.options.editModeEventIcon);
	                } else {
	                    this.mainGrid.removeClass(td, this.mainGrid.options.bodyTdClass + "_calendar");
	                }
	            }
	        }
	        var titleStr;
	        if (this.mainGrid.options.titleFormatter) {
	            try {
	                if (typeof this.mainGrid.options.titleFormatter != "function") {
	                    var titleFormatter = util.getGlobalFunction(this.mainGrid.options.titleFormatter, this.scope_id);
	                    if (typeof titleFormatter === "function") {
	                        this.mainGrid.options.titleFormatter = titleFormatter;
	                        titleStr = titleFormatter.call(this, rowIndex, colIndex, data);
	                    }
	                } else {
	                    titleStr = this.mainGrid.options.titleFormatter.call(this, rowIndex, colIndex, data);
	                }
	            } catch (e) {
	                exception.printStackTrace(e, null, this);
	            }
	        }
	        var title = titleStr || this.options.title || "";
	        if (title) {
	            td.setAttribute('title', title);
	        }
	    } catch (e) {
	        exception.printStackTrace(e, null, this);
	    }
	};
	cellInfo.calendar.prototype.setEditMode = function(td, rowIndex) {
	    try {
	        if (this.options.embeddedInput) {
	            return;
	        }
	        var wrapperCell = this.mainGrid._getWrapperCell(td, rowIndex);
	        if (this.options.viewTypeIconImage == "true") {
	            var img = wrapperCell.getElementsByTagName("div")[0];
	            this.mainGrid.removeClass(img, this.mainGrid.options.bodyTdClass + "_calendar_div_img");
	        } else {
	            this.mainGrid.removeClass(td, this.mainGrid.options.bodyTdClass + "_calendar");
	        }
	        this.editTd = td;
	        this.editRowIndex = rowIndex;
	        if (this.internal) {
	            this.parentColumnInfo.editRowIndex = rowIndex;
	            this.parentColumnInfo.editTd = td;
	        }
	        this.setPosition();
	        var inputCalendar = this.mainGrid.getInput(this);
	        this.comp = inputCalendar;
	        var targetFirstChildNode = wrapperCell.firstChild;
	        for (var node = targetFirstChildNode; node != null; node = node.nextSibling) {
	            if (node.nodeName.toUpperCase() == "NOBR" || (node.nodeName.toUpperCase() == "SPAN" && node.className.indexOf("w2grid_span") > -1)) {
	                WebSquare.style.setStyle(node, "visibility", "hidden");
	                break;
	            }
	        }
	        if (inputCalendar.options.renderDiv == true || inputCalendar.options.renderDiv == "true") {
	            var inputCalendarDom = document.getElementById(this.mainGridId + this.id);
	            var cellWidth = td.offsetWidth - 6;
	            var cellHeight = td.offsetHeight;
	            var divInput = document.getElementById(this.mainGridId + this.id + "_div_input");
	            var divWidth = cellWidth - 18 - 5; 
	            var divHeight = cellHeight - 3; 
	            var input = document.getElementById(this.mainGridId + this.id + "_input");
	            var bR = parseInt(WebSquare.style.getStyle(input, "border-right-width"), 10);
	            var bL = parseInt(WebSquare.style.getStyle(input, "border-left-width"), 10);
	            var pR = parseInt(WebSquare.style.getStyle(input, "padding-right"), 10);
	            var pL = parseInt(WebSquare.style.getStyle(input, "padding-left"), 10);
	            var inputWidth = divWidth - (bR + bL + pR + pL);
	            var inputHeight = divHeight - 2; 
	            var divImg = document.getElementById(this.mainGridId + this.id + "_img");
	            var setTop = (divHeight / 2) - (divImg.offsetHeight / 2);
	            if (this.options.useAnchor == true || this.options.useAnchor == "true") {
	                var divA = document.getElementById(this.mainGridId + this.id + "_a");
	                WebSquare.style.setStyle(divA, "top", setTop + "px");
	            } else {
	                WebSquare.style.setStyle(divImg, "top", setTop + "px");
	            }
	            WebSquare.style.setStyle(inputCalendarDom, "width", Math.max(cellWidth, 0) + "px");
	            WebSquare.style.setStyle(divInput, "width", Math.max(divWidth, 0) + "px");
	            WebSquare.style.setStyle(input, "width", Math.max(inputWidth, 0) + "px");
	            WebSquare.style.setStyle(inputCalendarDom, "height", Math.max(cellHeight - 3, 0) + "px");
	            WebSquare.style.setStyle(divInput, "height", Math.max(divHeight, 0) + "px");
	            WebSquare.style.setStyle(input, "height", Math.max(inputHeight, 0) + "px");
	        }
	        var value = this.mainGrid.dataList._getCellData(rowIndex, this.colID);
	        if (this.options.useMonthYearFormat) {
	            value = WebSquare.date.getIOFormatDate(value, this.options.ioFormat, this.options.calendarValueType);
	        }
	        var options = {};
	        if (this.options.useEditFormat) {
	            if (this.options.editPlaceholderChar) {
	                var _col = this.mainGrid._dataList.getColumnIndex(this.colID);
	                var _realRow = this.mainGrid._grid.getRealRowIndex(rowIndex);
	                inputCalendar.linkedList = this.mainGrid._linkedListArr[_realRow * this.mainGrid._dataList.getColumnCount() + _col].clone();
	                value = "";
	                options.setEditMode = true;
	            }
	        } else {
	            options.noFormat = true;
	            options.skipValidate = true;
	        }
	        var customModelUnformatter = util.getGlobalFunction(this.options.customModelUnformatter, this.scope_id);
	        if (typeof customModelUnformatter == "function") {
	            value = customModelUnformatter.call(this, value);
	        }
	        inputCalendar._setValue(value, options);
	        if (this.options.viewType == 'icon' && this.options.viewTypeIconImage == 'true' && this.calendarImageClicked == true) {
	            this.calendarImageClicked = false;
	            inputCalendar.toggle();
	        } else {
	            inputCalendar.focus(); 
	            if (inputCalendar.options.editType == "select") {
	                inputCalendar.select();
	            }
	        }
	        if (this.mainGrid._isBrowserScroll() !== true ) {
	            this.mainGrid.render.scrollLeft = 0;
	            this.mainGrid.render.scrollTop = 0;
	        }
	    } catch (e) {
	        exception.printStackTrace(e, null, this);
	    }
	};
	input.prototype.setAction = function() {
	    ["WebSquare.uiplugin.input.setAction"];
	    try {
	        if (this.options.nextTabID) {
	            this.setNextTabID(this.options.nextTabID, this.scope_id);
	        }
	        if (this.options.initStyle) {
	            var inlineStyleText = document.getElementById(this.id).style.cssText;
	            var className = document.getElementById(this.id).getAttribute('class');
	            WebSquare.initStyle[this.id] = {
	                style: inlineStyleText,
	                className: className
	            };
	        }
	        if (this.options.useVerticalAlign) {
	            this.setVerticalAlign();
	        }
	        if (this.options.initValue) {
	            this._setValue(this.options.initValue);
	        }
	        if (this.modelControl.isBinded()) {
	            var value = this.modelControl.getData();
	            var customModelUnformatter = util.getGlobalFunction(this.options.customModelUnformatter, this.scope_id);
	            if (typeof customModelUnformatter == "function") {
	                value = customModelUnformatter.call(this, value, this.getDisplayValue());
	            }
	            if (this.options.useMonthYearFormat && this.options.dataType === "date") {
	                value = WebSquare.date.getIOFormatDate(value, this.options.ioFormat);
	            }
	            if (this._getMaskFormat()) {
	                value = this.maskFormatModelUnFormat(value);
	                this.modelControl.setData(value);
	            }
	            this.setValueNM(value);
	        }
	        if (!this.options.initValue && !value && this._editFormat && this.options.editPlaceholderChar) {
	            this._setValue(""); 
	        }
	        if (this.options.placeholder && !this.supportPlaceholder) {
	            if (this.realValue.length == 0) {
	                this.render.value = this.options.placeholder;
	                this.addClass("w2input_placeholder");
	            }
	        }
	        if (this._editFormat) {
	            this.setActionEditFormat();
	            return;
	        }
	        this._setAction();
	    } catch (e) {
	        exception.printStackTrace(e, null, this);
	    }
	};
	input.prototype._setAction = function() {
	    try {
	        var _this = this;
	        this.addEvent("oneditend", function() {
	            var value = "";
	            var wq_trimValue = _this.render.value.wq_trim();
	            if (_this.options.dataType == "number" || _this.options.dataType == "float" || _this.useBigDecimalFloat ||
	                _this.options.dataType == "euro" || _this.options.dataType == "rupee" || _this.options.dataType == "tenge"
	            ) {
	                if (wq_trimValue === "." || wq_trimValue === "-" || wq_trimValue === "+" ||
	                    wq_trimValue === "," ||
	                    wq_trimValue === "+" + this.options.decimalDelimiter ||
	                    wq_trimValue === "-" + this.options.decimalDelimiter
	                ) {
	                    _this.render.value = "";
	                }
	            }
	            if (_this.options.applyFormat == "all" || _this._editFormat) {
	                if (_this._getMaskFormat()) {
	                    value = _this.render.value;
	                } else {
	                    value = _this._getValue();
	                }
	            } else {
	                value = _this.render.value;
	            }
	            value = _this.validator.validateString(value);
	            if (_this.options.placeholder && !this.supportPlaceholder) {
	                if (_this.realValue.length == 0 && this.render.className.match("w2input_placeholder")) {
	                    return;
	                }
	            }
	            _this.setValueNM(value, true);
	        });
	        if (util.isIEAllVersion() || util.isSpartan()) {
	            this.event.addListener(this.render, "onfocusin", this.event.bindAsEventListener(this, this.handleFocusinEvent));
	            this.event.addListener(this.render, "onbeforeeditfocus", this.event.bindAsEventListener(this, this.handleBeforeFocusEvent));
	        }
	        this.event.addListener(this.render, "onfocus", this.event.bindAsEventListener(this, this.handleFocusValueEventAdv, {
	            "eventonreadonly": true
	        }));
	        if (this.getReadOnly() == true) {
	            this.inputEvented = true;
	            this.event.addListener(this.render, "onblur", this.event.bindAsEventListener(this, this.handleBlurEventBasic, {
	                "eventonreadonly": true
	            }));
	            this.event.addListener(this.render, "onkeyup", this.event.bindAsEventListener(this, this.handleKeyupEvent));
	            this.event.addListener(this.render, "onkeypress", this.event.bindAsEventListener(this, this.handleKeypressEvent));
	            this.event.addListener(this.render, "onkeydown", this.event.bindAsEventListener(this, this.handleKeydownEvent));
	            if (this.options.validateOnInput) {
	                this.event.addListener(this.render, "oninput", this.event.bindAsEventListener(this, this.handleInputValidator));
	                this.event.addListener(this.render, "onpaste", this.event.bindAsEventListener(this, this.handlePasteValidator));
	            }
	            if (core.browserCheck.android && core.browserVersion() >= 5.0) { 
	                this.event.addListener(this.render, "oninput", this.event.bindAsEventListener(this, this.handleInputEvent));
	            }
	            if (this._getMaskFormat() && !this.useBigDecimalFloat) {
	                this.event.addListener(this.render, "oninput", this.event.bindAsEventListener(this, this.handleInputMask));
	            }
	            if (util.isFF()) {
	                this.event.addListener(this.render, "oninput", this.event.bindAsEventListener(this, this.checkMaxByteLength));
	            }
	            if (this.options.dataType == "number") {
	                this.setStyle("imeMode", "disabled");
	            }
	        }
	        if (util.isIEAllVersion()) {
	            this.event.addListener(this.render, "onmousedown", this.event.bindAsEventListener(this, function(e) {
	                if (document.activeElement != this.render) {
	                    this.focus();
	                }
	            }));
	        } else if (util.isOpera()) {
	            if (this.options.preventCopyPaste || this.options.preventCopy || this.options.preventPaste) {
	                this.event.addListener(this.render, "onmousedown", this.event.bindAsEventListener(this, function(e) {
	                    event.stopEvent(e);
	                    this.focus();
	                }));
	            }
	        }
	        if (this.options.copyOnReadOnly == "noFormat") {
	            if (util.isIEAllVersion()) {
	                this.event.addListener(this.render, "oncopy", this.event.bindAsEventListener(this, function(e) {
	                    if (this.options.readOnly && this.options.copyOnReadOnly == "noFormat") {
	                        event.preventDefault(e);
	                    }
	                }));
	                this.event.addListener(this.render, "onkeydown", this.event.bindAsEventListener(this, function(e) {
	                    if (e.keyCode == 67 && (e.ctrlKey || e.metaKey)) { 
	                        this.handleCopyEvent({});
	                    }
	                }));
	            } else {
	                this.event.addListener(this.render, "oncopy", this.event.bindAsEventListener(this, this.handleCopyEvent));
	            }
	        } else {
	            if (this.options.preventCopyPaste || this.options.preventCopy) {
	                this.event.addListener(this.render, "oncopy", this.event.bindAsEventListener(this, function(e) {
	                    if (this.options.readOnly) {
	                        event.preventDefault(e);
	                    }
	                }, {
	                    "eventonreadonly": true
	                }));
	            }
	        }
	        if (this.options.type == "color" && !util.isIEAllVersion() && !util.isSpartan()) {
	            this.event.addListener(this.render, "oninput", this.event.bindAsEventListener(this, this.handleColorChangeEvent));
	        }
	        if (this.options.maxlength >= 0 && !this.options.useMaxLength) {
	            this.render.maxLength = this.options.maxlength;
	            this.originalMaxLength = this.options.maxlength;
	        }
	        if (this.options.mandatory) {
	            this.onPropertyChange("mandatory", util.getBoolean(this.options.mandatory));
	        }
	        if ((this.options.preventCopyPaste || this.options.preventCopy || this.options.preventPaste) && (this.options.readOnly || this.options.disabled)) {
	            this.setStyle("pointerEvents", "none");
	        }
	    } catch (e) {
	        exception.printStackTrace(e, null, this);
	    }
	};
	input.prototype.setEditFormat = function(format) {
	    try {
	        if (typeof format !== "string") {
	            return;
	        }
	        if (format.length < 1) {
	            if (!this._editFormat) {
	                return; 
	            }
	            var value = this.getValue();
	            this.event.removeEvent(this.render, "onkeydown");
	            this.event.removeEvent(this.render, "oncompositionstart");
	            this.event.removeEvent(this.render, "oninput");
	            this.event.removeEvent(this.render, "onkeyup");
	            this.event.removeEvent(this.render, "onblur");
	            this.event.removeEvent(this.render, "onfocus");
	            this._editFormat = null;
	            this._editFormatInfo = {
	                editTokens: this._editFormatInfo.editTokens
	            };
	            this.removeSignValue = "";
	            this.removeSignToken = {};
	            this.__currentFormatTokens = "";
	            this.linkedList = null;
	            this.options.editFormat = "";
	            this.unbind(); 
	            this.setUserAction(); 
	            this._setAction(); 
	            this.render.value = value;
	            this._setValue(value);
	            return;
	        }
	        this.options.editFormat = format;
	        if (!this._editFormat) {
	            this.event.removeEvent(this.render, "onblur");
	            this.event.removeEvent(this.render, "onkeyup");
	            this.event.removeEvent(this.render, "onkeydown");
	            this.event.removeEvent(this.render, "onkeypress");
	            this.event.removeEvent(this.render, "oninput");
	            this.event.removeEvent(this.render, "onpaste");
	            this.unbind(); 
	            this.setUserAction(); 
	            this.setActionEditFormat();
	        } else { 
	            this.event.removeEvent(this.render, "onkeydown");
	            this.event.removeEvent(this.render, "oncompositionstart");
	            this.event.removeEvent(this.render, "oninput");
	            this.event.removeEvent(this.render, "onkeyup");
	            this.event.removeEvent(this.render, "onblur");
	            this.event.removeEvent(this.render, "onfocus");
	            this.unbind();
	            this.setUserAction();
	            this.setActionEditFormat();
	        }
	        var value = this.getValue();
	        var saveEditFormat = this._editFormat;
	        this._preEditFormat(format, this.options.editDisplayChar);
	        var editFormatLength = this.removeSignToken[this._editFormat[this._editFormat.length - 1]].length; 
	        if (value.length > editFormatLength) {
	            value = value.substring(0, editFormatLength);
	        }
	        if (!saveEditFormat && !this.linkedList) {
	            this.linkedList = WebSquare.text.linkedList();
	        }
	        this.removeSignValue = value;
	        var result = this._checkValueEditFormat(this.removeSignValue);
	        if (result !== true) {
	            this._preEditFormat(saveEditFormat.join('||'), this.options.editDisplayChar);
	            value = this.removeSignValue;
	        }
	        this._setValue(value);
	    } catch (e) {
	        exception.printStackTrace(e, null, this);
	    }
	};
	inputCalendar.prototype.setUseEditFormat = function(useEditFormat) {
	    try {
	        useEditFormat = util.getBoolean(useEditFormat);
	        if (this.options.useEditFormat === useEditFormat) {
	            return;
	        }
	        var value = this._getValue();
	        if (useEditFormat) {
	            this.options.useEditFormat = true;
	            var editFormat = this._getEditFormatString();
	            var maskFormat = editFormat.replace(/[a-zA-Z]/g, "#");
	            this._editFormat = maskFormat.split("||");
	            if (this.options.editPlaceholderChar && !this.linkedList) {
	                this.linkedList = WebSquare.text.linkedList();
	            }
	            if (!this.options.validateOnInput && !this._editFormatOninputAdded) {
	                this.event.addListener(this.render, "oninput", this.event.bindAsEventListener(this, this.handleInputValidator));
	                this._editFormatOninputAdded = true;
	            }
	        } else {
	            this.options.useEditFormat = false;
	            this._editFormat = null;
	            this._editValue = "";
	            if (this.evented && !this._editFormatKeyupAdded) {
	                this.event.addListener(this.dom.input, "onkeyup", this.event.bindAsEventListener(this, this.handleKeyupEvent));
	                this._editFormatKeyupAdded = true;
	            }
	        }
	        this.setValueNM(value);
	    } catch (e) {
	        exception.printStackTrace(e, null, this);
	    }
	};
	inputCalendar.prototype.getUseEditFormat = function() {
	    try {
	        return this.options.useEditFormat;
	    } catch (e) {
	        exception.printStackTrace(e, null, this);
	    }
	};
	inputCalendar.prototype._getEditFormatString = function() {
	    try {
	        if (this.options.editPlaceholderChar) {
	            return this.options.displayFormat;
	        }
	        var d = this.options.delimiter;
	        switch (this.options.calendarValueType) {
	            case "yearMonthDate": return "yyyy" + d + "MM" + d + "dd";
	            case "yearMonth": return "yyyy" + d + "MM";
	            case "yearMonthDateHour": return "yyyy" + d + "MM" + d + "dd" + " HH";
	            case "yearMonthDateTime": return "yyyy" + d + "MM" + d + "dd" + " HH:mm";
	            case "yearMonthDateTimeSec": return "yyyy" + d + "MM" + d + "dd" + " HH:mm:SS";
	            case "year": return "yyyy";
	            default: return "";
	        }
	    } catch (e) {
	        exception.printStackTrace(e, null, this);
	    }
	};
	inputCalendar.prototype.setValueNM = function(value, options) {
	    ["WebSquare.uiplugin.inputCalendar.setValueNM"];
	    try {
	        if (util.isNull(value)) return;
	        value = value.toString();
	        if (options && options.noFormat === true) {
	            this.dom.input.value = value;
	        } else {
	            if (this.options.useEditFormat) {
	                if (this.options.editPlaceholderChar) {
	                    var isEmptyValue = (this.options.editPlaceholderCharHideWhenEmptyValue && !value) ? true : false; 
	                    this.linkedList = this.linkedList ||  WebSquare.text.linkedList(); 
	                    var blurFlag = (options && options.eventType === "blur") || (options && options.setEditMode);
	                    var oldLinkedList = blurFlag ? this.linkedList.toArray() : null; 
	                    this.linkedList.clear();
	                    var _value = blurFlag ? "" : value; 
	                    var maskOptions = {
	                        value: _value,
	                        mask: this._editFormat[0],
	                        editFormatInfo: this._editFormatInfo,
	                        linkedList: this.linkedList,
	                        oldLinkedList: oldLinkedList
	                    };
	                    var maskValueObj = WebSquare.text.maskit3(maskOptions);
	                    if (util.isEmptyObject(maskValueObj) !== true) {
	                        this._editValue = maskValueObj.orgValue;
	                        value = isEmptyValue ? "" : maskValueObj.value;
	                    }
	                } else {
	                    this._editValue = value;
	                }
	            }
	            var blurFormat = this.options.applyFormat == "all" && (options && options.eventType === "blur");
	            value = (document.activeElement == this.dom.input && !blurFormat) ? value : this.formatter.format(value);
	            if (this.options.placeholder && !this.supportPlaceholder) {
	                if (value.length == 0) {
	                    if (!this.hasClass(this.dom.input, "w2inputCalendar_placeholder")) {
	                        this.addClass(this.dom.input, "w2inputCalendar_placeholder");
	                    }
	                    this.dom.input.value = this.options.placeholder;
	                } else {
	                    this.removeClass(this.dom.input, "w2inputCalendar_placeholder");
	                    this.dom.input.value = value;
	                }
	            } else {
	                this.dom.input.value = value;
	            }
	        }
	        this.realValue = value;
	    } catch (e) {
	        exception.printStackTrace(e, null, this);
	    }
	};
	inputCalendar.prototype.handleBlurEvent = function(e) {
	    try {
	        this.removeClass(this.dom.input, "w2inputCalendar_focus");
	        var historyData = WebSquare.historyManager.get(this.options.pluginName, this.id);
	        var orgValue = this._getValue();
	        var value;
	        if (this.parentControl && this.parentControl.options &&
	            (this.parentControl.options.pluginName === "grid" || this.parentControl.options.pluginName === "gridView")) {
	            value = orgValue;
	        } else {
	            value = this.validator.validateString(orgValue);
	        }
	        value = this.sub_validator.validateString(value);
	        if (orgValue != value) {
	            this.setValueNM(value); 
	        }
	        var options = {
	            "skipValidate": true,
	            "eventType": e.type
	        };
	        this._setValue(value, options);
	        if (this.formatter.unformat(historyData.value) != this._getValue()) {
	            event.fireEvent(this, "onchange");
	            var newValue = this._getValue();
	            event.fireEvent(this, "onviewchange", {
	                "oldValue": historyData.value,
	                "newValue": newValue
	            });
	        }
	        if (util.getBoolean(this.options.dateValidSet) && this._skipDateValidSet !== true) {
	            if (this.validate()) {
	                this._setValue(value, options);
	            } else {
	                if (this.options.dateValidSetCustom !== true && historyData.value != undefined) {
	                    this._setValue(historyData.value, options);
	                }
	            }
	        }
	        if (this.options.disableDateValidSet) {
	            var inputVal = this._getValue();
	            if (this.disableValidate(inputVal)) {
	                if (historyData.value != undefined) {
	                    this._setValue(historyData.value, options);
	                }
	            } else {
	                this._setValue(inputVal, options);
	            }
	        }
	        if (this.options.outsideClickEvent == true) {
	            if (this.calendar && WebSquare.style.getStyle(this.calendar.render,"display") !== "none") {
	                this.hideCalendar();
	            }
	        } else {
	            this.hideCalendar();
	        }
	        event.fireEvent(this, "onblur");
	        if (this.options.placeholder && !this.supportPlaceholder) {
	            if (this.realValue.length == 0) {
	                this.dom.input.value = this.options.placeholder;
	                this.addClass("w2inputCalendar_placeholder");
	            }
	        }
	        if (util.isEmptyObject(this.beforeBlockSelection) !== true) {
	            this.beforeBlockSelection = {};
	        }
	    } catch (e) {
	        exception.printStackTrace(e, null, this);
	    }
	};
	// 0407_eaea 718
	selectbox.prototype._getLabel = function(label) {
	        try {
	            var ret = label;
	            if (util.isIE() && parseInt(core.browserVersion(), 10) < 10) {
	                if (ret.indexOf("&") > -1) {
	                    ret = ret.wq_replaceAll("&", "&amp;");
	                }
	                if (this.options.escape) {
	                    ret = WebSquare.xml._encode(ret);
	                } else {
	                    ret = ret.wq_replaceAll("&amp;nbsp;", "&nbsp;").wq_replaceAll("&amp;nbsp", "&nbsp;");
	                }
	            } else {
	                if (this.options.escape) {
	                    ret = WebSquare.xml._encode(ret);
	                } else {
	                    ret = WebSquare.xml.decode(ret);
	                }
	            }
	            return ret;
	        } catch (e) {
	            exception.printStackTrace(e);
	        }
	    };
	    autoComplete.prototype.arrowHandle = function(e) {
	        try {
	            var keyCode = (e.charCode) ? e.charCode : e.keyCode;
	            if (this.itemTable == null) {
	                return;
	            }
	            if (this.editmode || this.findkeymode) {
	                if (this.dom.input.value == "" || this.viewArr.length == 0) {
	                    event.stopEvent(e);
	                    return;
	                }
	            }
	            var viewIdx = 0;
	            for (var i = 0; i < this.viewArr.length; i++) {
	                if (this.selectedItem.orgLabel == this.viewArr[i].orgLabel) {
	                    viewIdx = i;
	                    break;
	                }
	            }
	            if (keyCode == 9 || (keyCode == 9 && e.shiftKey)) {
	                this.setSelectedIndex1(this.viewArr[viewIdx].index);
	            } else {
	                this.itemTable.handleKeydownEvent(e);
	            }
	            if (this.viewArr.length > 0) {
	                var label = "";
	                if (this.options.searchTarget == "value") {
	                    label = this.viewArr[viewIdx].value;
	                } else {
	                    label = this.viewArr[viewIdx].label;
	                }
	                if (this.options.useKeywordHighlight) {
	                    label = label.wq_replaceAll("<span class='w2autoComplete_keyword'>", "").wq_replaceAll("</span>", "");
	                }
	                this.dom.input.value = this.options.escape === false ? WebSquare.xml.__decode2(label) : label;
	                this.selectedItem = {
	                    text: label,
	                    value: this.viewArr[viewIdx].value,
	                    orgLabel: this.viewArr[viewIdx].orgLabel
	                };
	                this.itemTable.setSelectedIndex(viewIdx);
	            }
	            this.mozTrickBuffer = ""; 
	            return;
	        } catch (e) {
	            exception.printStackTrace(e, null, this);
	        }
	    };
	    autoComplete.prototype.setSubLayer = function() {
	        try {
	            if (this.itemTable == null) {
	                var _this = this;
	                if (this.itemTableMode == "grid") {
	                    this.itemTable = new WebSquare.uiplugin.gridItemTable(this.id + "_gridItemTable", {
	                        itemsetObj: this.itemsetObj,
	                        className: this.options.className,
	                        gridOptions: this.gridOptions,
	                        visibleRowNum: this.options.visibleRowNum,
	                        findItemKor: this.options.findItemKor,
	                        findItemFirstKey: this.options.findItemFirstKey,
	                        parent_uuid: this.uuid
	                    });
	                    this.itemTable.writeTo(WebSquare.getBody(), null, this.parentFrame);
	                    this.itemTable.activate();
	                    this.itemTable.grid.addEvent("oncellclick", function(row, col) {
	                        _this.findStop = true;
	                        if (_this.editmode || _this.findkeymode) {
	                            _this.mozTrickBuffer = "";
	                        }
	                        _this.focus();
	                        if (_this.gridOptions.dataComp.initializeType === "dataList") {
	                            row = this.getRealRowIndex(row);
	                        }
	                        _this.setSelectedIndex1(_this.viewArr[row].index);
	                    });
	                    this.event.addListener(this.itemTable.grid.render, "onkeydown", this.event.bindAsEventListener(this.itemTable.grid, function(e) {
	                        var keyCode = (e.charCode) ? e.charCode : e.keyCode;
	                        if (keyCode == 13) {
	                            _this.focus();
	                            var row = this.getFocusedRowIndex();
	                            if (_this.gridOptions.dataComp.initializeType === "dataList") {
	                                row = this.getRealRowIndex(row);
	                            }
	                            _this.setSelectedIndex1(_this.viewArr[row].index);
	                        } else if (keyCode == 27) {
	                            _this._closeSubLayer();
	                            _this.showEditMode(false);
	                            _this.focus();
	                        }
	                    }));
	                    if (this.itemArr.length === 0) {
	                        this.itemTable.hide();
	                    }
	                } else if (this.itemTableMode == "gridView") {
	                    if (this.options.submenuSize == "auto") {
	                        if (!this.gridViewOptions.width) {
	                            this.gridViewOptions.parentWidth = this.render.offsetWidth;
	                        }
	                        this.gridViewOptions.autoFit = "allColumn";
	                    }
	                    this.itemTable = new WebSquare.uiplugin.gridViewItemTable(this.id + "_gridViewItemTable", {
	                        itemsetObj: this.itemsetObj,
	                        className: this.options.className,
	                        gridViewOptions: this.gridViewOptions,
	                        visibleRowNum: this.options.visibleRowNum,
	                        findItemKor: this.options.findItemKor,
	                        findItemFirstKey: this.options.findItemFirstKey,
	                        parent_uuid: this.uuid
	                    });
	                    this.itemTable.writeTo(WebSquare.getBody(), null, this.parentFrame);
	                    this.itemTable.activate();
	                    this.itemTable.gridView.addEvent("oncellclick", function(row, col) {
	                        _this.findStop = true;
	                        if (_this.editmode || _this.findkeymode) {
	                            _this.mozTrickBuffer = "";
	                        }
	                        _this.itemTable._focus();
	                        _this._focusSkip = true;
	                        var searchText = _this.viewArr[row].orgLabel + "|" + _this.viewArr[row].value;
	                        var idx = _this.findinItemArr(searchText, WebSquare.allValue || "all");
	                        _this.setSelectedIndex1(idx);
	                    });
	                    this.event.addListener(this.itemTable.gridView.render, "onkeydown", this.event.bindAsEventListener(this.itemTable.gridView, function(e) {
	                        var keyCode = (e.charCode) ? e.charCode : e.keyCode;
	                        if (keyCode == 13) {
	                            _this.itemTable._focus();
	                            _this._focusSkip = true;
	                            var row = this.getFocusedRowIndex();
	                            if (_this.gridViewOptions.dataComp.initializeType === "dataList") {
	                                row = this.getRealRowIndex(row);
	                            }
	                            _this.setSelectedIndex1(_this.viewArr[row].index);
	                        } else if (keyCode == 27) {
	                            _this._closeSubLayer();
	                            _this.showEditMode(false);
	                            _this.itemTable._focus();
	                            _this._focusSkip = true;
	                        }
	                    }));
	                    if (this.itemArr.length === 0) {
	                        this.itemTable.hide();
	                    }
	                } else {
	                    var itemTableTmpOpts = {
	                        row: this.options.visibleRowNum,
	                        col: 1,
	                        submenuSize: this.options.submenuSize,
	                        style: "",
	                        defaultStyle: "text-align:" + this.options.textAlign + ";" + this.options.defaultStyle,
	                        className: "w2input_table " + this.options.className,
	                        w2table: "w2input_table_sb",
	                        w2table_main: "w2input_table_sb_main",
	                        w2table_row: "w2input_table_sb_row",
	                        w2table_col: "w2input_table_sb_col",
	                        w2table_col_over: "w2input_table_sb_col_over",
	                        escape: this.options.escape,
	                        wheelRows: this.options.wheelRows,
	                        parent_uuid: this.uuid,
	                        itemClassFormatter : this.options.itemClassFormatter,
	                        _parent_scope_id : this.scope_id,
	                        selectByTabKey : this.options.selectByTabKey
	                    };
	                    if (this.options.renderType === "native" || this.options.renderType === "input") {
	                        itemTableTmpOpts.className = "w2table " + this.options.className;
	                        itemTableTmpOpts.w2table = "w2table_sb";
	                        itemTableTmpOpts.w2table_main = "w2table_sb_ul_main";
	                        itemTableTmpOpts.w2table_row = "w2table_sb_ul_row";
	                        itemTableTmpOpts.w2table_col = "w2table_sb_ul_col";
	                        itemTableTmpOpts.tableRender = "ul";
	                        itemTableTmpOpts.noUseUpDownKey = false;
	                        itemTableTmpOpts.noUseTabKeyByMove = true;
	                    }
	                    if (this.options.renderType === "native") {
	                        itemTableTmpOpts.w2table_col_over = "w2table_sb_ul_col_over";
	                    } else if (this.options.renderType === "input") {
	                        itemTableTmpOpts.w2table_col_over = "w2table_sb_ul_col_over2";
	                        itemTableTmpOpts.parentPluginName = "autoComplete_input";
	                        itemTableTmpOpts.defaultStyle = (this.options.textAlign == "") ? this.options.defaultStyle : "text-align:" + this.options.textAlign  + ";" + this.options.defaultStyle;
	                    } else {
	                        itemTableTmpOpts.useFindItemFirstKeyChar = this.options.useFindItemFirstKeyChar;
	                    }
	                    if (this._itemTableRenderPosition == "component") {
	                        itemTableTmpOpts.w2table = "w2table_sb_fixed";
	                    }
	                    this.itemTable = new WebSquare.uiplugin.itemTable(this.id + "_itemTable", itemTableTmpOpts);
	                    if (this._itemTableRenderPosition == "component") {
	                        this.itemTable.writeTo(this, null, this.parentFrame);
	                    } else {
	                        this.itemTable.writeTo(WebSquare.getBody(), null, this.parentFrame);
	                    }
	                    this.itemTable.activate();
	                    if (this.options.renderType === "input") {
	                        this.itemTable.addMouseOverEventListener(
	                            function(e) {
	                                ["WebSquare.uiplugin.autoComplete.itemTable.handleMouseOverEvent"];
	                                if (this.selectedCell) {
	                                    _this.dom.input.setAttribute("aria-activedescendant",this.selectedCell.id);
	                                }
	                            }
	                        );
	                        this.itemTable.addMouseLeaveEventListener(
	                            function(e) {
	                                ["WebSquare.uiplugin.autoComplete.itemTable.handleMouseLeaveEvent"];
	                                _this.dom.input.removeAttribute("aria-activedescendant");
	                            }
	                        );                   
	                    }
	                    this.itemTable.addClickEventListener(
	                        function(e, index) {
	                            ["WebSquare.uiplugin.autoComplete.itemTable.addClickEventListener"];
	                            if (_this.options.renderType === "input") {
	                                if (!index) return;
	                            }
	                            event.fireEvent(_this, "onitemclick", index);
	                            _this.findStop = true;
	                            var oldIndex = _this.selectedIndex;
	                            var oldValue = _this.getValue();
	                            if (_this.editmode || _this.findkeymode) {
	                                _this.mozTrickBuffer = ""; 
	                                var label = _this.viewArr[index].label;
	                                if (_this.options.useKeywordHighlight) {
	                                    label = label.wq_replaceAll("<span class='w2autoComplete_keyword'>", "").wq_replaceAll("</span>", "");
	                                }
	                                _this.dom.input.value = _this.options.escape === false ? WebSquare.xml.__decode2(label) : label;
	                                _this.selectedItem = {
	                                    text: label,
	                                    value: _this.viewArr[index].value,
	                                    orgLabel: _this.viewArr[index].orgLabel
	                                };
	                                var searchText = _this.selectedItem.orgLabel + "|" + _this.selectedItem.value;
	                                var idx = _this.findinItemArr(searchText, WebSquare.allValue || "all");
	                                _this.setSelectedIndex1(idx, true);
	                                if (_this.options.renderType != "input") {
	                                    _this.focus();
	                                }
	                                _this.closeTable();
	                            } else {
	                                var label = _this.viewArr[index].label;
	                                if (_this.options.useKeywordHighlight) {
	                                    label = label.wq_replaceAll("<span class='w2autoComplete_keyword'>", "").wq_replaceAll("</span>", "");
	                                }
	                                _this.dom.input.value = _this.options.escape === false ? WebSquare.xml.__decode2(label) : label;
	                                _this.selectedItem = {
	                                    text: label,
	                                    value: _this.viewArr[index].value,
	                                    orgLabel: _this.viewArr[index].orgLabel
	                                };
	                                if (_this.options.renderType === "native") {
	                                    if (_this.options.itemEnterHandleMode == "arrow") { 
	                                        _this.setSelectedIndex1(_this.viewArr[index].index);
	                                        _this.dom.imgArrow.focus(); 
	                                    } else if (_this.options.itemEnterHandleMode == "edit") { 
	                                        _this.setSelectedIndex1(_this.viewArr[index].index);
	                                        _this.focus();
	                                    } else {
	                                        _this.focus();
	                                        _this.setSelectedIndex1(_this.viewArr[index].index); 
	                                    }
	                                } else if(_this.options.renderType === "input") {
	                                    _this.setSelectedIndex1(index);
	                                    if (_this.options.accessibility === true && util.isMobile()) {
	                                        var list = this.render.querySelectorAll('.'+this.options.w2table_col);
	                                        for (i = 0 ; i < list.length ; i++) {
	                                            this.removeClass(list[i], this.options.w2table_col_over);
	                                        }
	                                        this.selectedCell = null;
	                                    }
	                                } else {
	                                    _this.setSelectedIndex1(index);
	                                    _this.focus();
	                                    _this.closeTable();
	                                }
	                            }
	                            var info = {
	                                "oldValue": oldValue,
	                                "newValue": _this.getValue(),
	                                "oldSelectedIndex": oldIndex,
	                                "newSelectedIndex": _this.selectedIndex
	                            };
	                            event.fireEvent(_this, "onselected", info);
	                        }
	                    );
	                    this.itemTable.addKeyDownEventListener(
	                        function(e) {
	                            var keyCode = (e.charCode) ? e.charCode : e.keyCode;
	                            if (this.options.renderType !== "input") {
	                                if (this.options.tableRender == "ul" && _this.itemTable.endReached) {
	                                    if (this.getItemCount() == 1 && keyCode == 13) {
	                                        _this.enterHandle(e);
	                                    } else if (keyCode == 9) {
	                                        _this.closeSubLayer();
	                                        _this.dom.imgArrow.focus(); 
	                                        _this.itemTable.endReached = false;
	                                    }
	                                    return;
	                                }
	                            }
	                            if (util.isIEAllVersion()) {
	                                if (e.srcElement.parentElement != this.render) {
	                                    return;
	                                }
	                            } else if (event.getTarget(e) !== this.render) {
	                                if (this.options.tableRender == "ul") {
	                                    if (keyCode == 9) {
	                                        _this._setLabel(_this.viewArr[this.getSelectedIndex()].index);
	                                        _this.showEditMode(false);
	                                    }
	                                }
	                                return;
	                            }
	                            if (keyCode == 27) {
	                                _this._closeSubLayer();
	                                if (this.options.renderType !== "input") {
	                                    _this.showEditMode(false);
	                                }
	                                _this.focus();
	                                return;
	                            }
	                            if (_this.options.customToggleKey == keyCode) {
	                                _this._closeSubLayer();
	                                _this.focus();
	                                return;
	                            }
	                            if (_this.options.findItemFirstKey) {
	                                return;
	                            }
	                            if (_this.interactionMode == true || _this.editmode || _this.findkeymode) {
	                                var viewIdx = 0;
	                                var searchText = _this.selectedItem.orgLabel + "|" + _this.selectedItem.value;
	                                for (var i = 0; i < _this.viewArr.length; i++) {
	                                    if (searchText == _this.viewArr[i].orgLabel + "|" + _this.viewArr[i].value) {
	                                        viewIdx = i;
	                                        break;
	                                    }
	                                }
	                                if (keyCode == 13 || (_this.options.selectByTabKey && keyCode == 9)) {
	                                    if (_this.viewArr.length == 0) {
	                                        return;
	                                    }
	                                } else if ((keyCode == 38) || (keyCode == 9 && e.shiftKey)) { 
	                                    if (viewIdx == 0) {
	                                        return;
	                                    }
	                                    viewIdx = viewIdx - 1;
	                                } else if ((keyCode == 40) || (keyCode == 9)) { 
	                                    if ((viewIdx + 1) == _this.viewArr.length) {
	                                        return;
	                                    }
	                                    viewIdx = viewIdx + 1;
	                                } else if (keyCode == 35) { 
	                                    viewIdx = _this.viewArr.length - 1;
	                                } else if (keyCode == 36) { 
	                                    viewIdx = 0;
	                                } else if (keyCode == 33) { 
	                                    viewIdx = viewIdx - _this.viewArr.length;
	                                    if (viewIdx < 0) {
	                                        viewIdx = 0;
	                                    }
	                                } else if (keyCode == 34) { 
	                                    viewIdx = viewIdx + _this.viewArr.length;
	                                    if (viewIdx >= _this.viewArr.length) {
	                                        viewIdx = _this.viewArr.length - 1;
	                                    }
	                                }
	                                if (_this.viewArr.length > viewIdx) {
	                                    var label = _this.viewArr[viewIdx].label;
	                                    if (_this.options.useKeywordHighlight) {
	                                        label = label.wq_replaceAll("<span class='w2autoComplete_keyword'>", "").wq_replaceAll("</span>", "");
	                                    }
	                                    _this.dom.input.value = _this.options.escape === false ? WebSquare.xml.__decode2(label) : label;
	                                    _this.selectedItem = {
	                                        text: label,
	                                        value: _this.viewArr[viewIdx].value,
	                                        orgLabel: _this.viewArr[viewIdx].orgLabel
	                                    };
	                                    _this.itemTable.setSelectedIndex(viewIdx);
	                                }
	                            } else {
	                                var selectedIndex = -1;
	                                selectedIndex = _this.getSelectedIndex();
	                                if ((keyCode == 38) || (keyCode == 9 && e.shiftKey)) { 
	                                    if (selectedIndex > 0) {
	                                        selectedIndex = selectedIndex - 1;
	                                    }
	                                } else if ((keyCode == 40) || (keyCode == 9)) { 
	                                    if (selectedIndex + 1 < _this.getItemCount()) {
	                                        selectedIndex = selectedIndex + 1;
	                                    }
	                                } else if (keyCode == 35) { 
	                                    selectedIndex = _this.getItemCount() - 1;
	                                } else if (keyCode == 36) { 
	                                    selectedIndex = 0;
	                                } else if (keyCode == 33) { 
	                                    selectedIndex = selectedIndex - _this.itemTable.rowCount;
	                                    if (selectedIndex < 0) {
	                                        selectedIndex = 0;
	                                    }
	                                } else if (keyCode == 34) { 
	                                    selectedIndex = selectedIndex + _this.itemTable.rowCount;
	                                    if (selectedIndex >= _this.itemTable.getItemCount()) {
	                                        selectedIndex = _this.itemTable.getItemCount() - 1;
	                                    }
	                                } else {
	                                }
	                                _this.setSelectedIndex1(selectedIndex, true);
	                                _this.itemTable.setSelectedIndex(selectedIndex);
	                            }
	                        }
	                    );
	                    var comp = WebSquare.idCache[this.uuid];
	                    var closeonmouseleave = this.options.closeonmouseleave;
	                    var itemTooltipDisplay = this.options.itemTooltipDisplay;
	                    if (closeonmouseleave || itemTooltipDisplay) {
	                        this.itemTable.addMouseLeaveEventListener(
	                            function(e) {
	                                if (closeonmouseleave) {
	                                    var compHeight = _this.render.offsetHeight;
	                                    var compTop = _this.getAbsolutePosition("top");
	                                    if (!(e.clientY >= compTop && e.clientY <= (compTop + compHeight))) {
	                                        _this.closeSubLayer();
	                                    }
	                                }
	                                if (itemTooltipDisplay) {
	                                    comp.hideTooltip();
	                                }
	                            }
	                        );
	                    }
	                    if (itemTooltipDisplay) {
	                        this.itemTable.addMouseOverEventListener(
	                            function(element) {
	                                var dataIndex = util.getDataPrefix("index");
	                                var elem = element;
	                                var left = WebSquare.style.getAbsoluteLeft(elem) + 20;
	                                var top = WebSquare.style.getAbsoluteTop(elem) + elem.offsetHeight + 3;
	                                var label = comp.options.tableRender === "ul" ? elem.innerText : elem.innerHTML;
	                                if (comp.itemTooltipFormatter && typeof comp.itemTooltipFormatter === 'function') {
	                                    var index = parseInt(elem.getAttribute(dataIndex), 10);
	                                    label = comp.itemTooltipFormatter(label, index, comp.options._rowIndex, comp.options._colIndex);
	                                }
	                                comp.showTooltip(left, top, label);
	                            }
	                        );
	                    }
	                    if (this.editmode && this.viewArr.length > 0) {
	                        this.setItemTable();
	                        if (this.options.renderType != "native" && this.options.renderType != "input") {
	                            this.itemTable.setSelectedIndex(0);
	                        }
	                    } else if (this.itemArr != null && this.itemArr.length > 0) {
	                        this.setItemTable();
	                    } else {
	                        this.itemTable.hide();
	                        if (this.itemTable.mainTable != null && this.itemTable.render.firstChild) {
	                            this.setItemTable();
	                        } else {
	                            $l("this.itemTable.mainTable is null." + "[" + this.id + "]");
	                        }
	                    }
	                }
	                if (this.options.renderType === "native" || this.options.renderType === "input") {
	                    var ariaControlInput = this.dom.input;
	                    if (ariaControlInput) {
	                        ariaControlInput.setAttribute("aria-controls", this.id + "_itemTable_main");
	                    }
	                }
	                if (this.options.renderType === "native") {
	                    var ariaControlArrow = this.dom.imgArrow;
	                    if (ariaControlArrow) {
	                        ariaControlArrow.setAttribute("aria-controls", this.id + "_itemTable_main");
	                    }
	                }
	                this.isOpen = true;
	                this.closeSubLayer();
	            }
	        } catch (e) {
	            exception.printStackTrace(e, null, this);
	        }
	    };
	    autoComplete.prototype.setSelectedIndexNM = function(idx, allowInit) {
	        try {
	            this.dummyData = null;
	            idx = parseInt(idx);
	            if (isNaN(idx)) {
	                return false;
	            }
	            if (this.options.emptyItem && (idx < 0 || idx >= this.getItemCount())) {
	                this.selectedIndex = -1;
	                this.dom.label.textContent = "";
	                this.dom.input.value = "";
	                if (this.itemTable) {
	                    this.itemTable.setSelectedIndex(0);
	                }
	                this.selectedItem = {
	                    text: "",
	                    value: "",
	                    orgLabel: ""
	                };
	                if (this.options.renderType != "input") {
	                    this.showEditMode(false);
	                }
	            } else {
	                if (isNaN(idx) || idx >= this.getItemCount()) {
	                    return false;
	                }
	                if (idx < 0 && !allowInit) {
	                    return false;
	                }
	                this.selectedIndex = idx;
	                if (idx > -1) {
	                    if (this.itemTableMode == "grid") {
	                        if (this.gridOptions.dataComp) {
	                            this.selectedGridRowObj = this.gridOptions.dataComp.getRowArray(idx);
	                        } else {
	                            this.selectedGridRowObj = this.gridRowItemArr[idx];
	                        }
	                    } else if (this.itemTableMode == "gridView") {
	                        if (this.gridViewOptions.dataComp) {
	                            this.selectedGridViewRowObj = this.gridViewOptions.dataComp.getRowArray(idx);
	                        }
	                    }
	                    var label = this.itemArr[idx].label;
	                    this._setLabel(idx);
	                    if (this.options.renderType != "input") {
	                        this.dom.input.style.display = "none";
	                        this.dom.input.style.visibility = "hidden";
	                        this.dom.label.style.display = "block";
	                        this.dom.label.style.visibility = "visible";
	                        this.dom.input.value = this.options.escape === false ? WebSquare.xml.__decode2(label) : label;
	                    }
	                    this.selectedItem = {
	                        text: label,
	                        value: this.itemArr[idx].value,
	                        orgLabel: this.itemArr[idx].orgLabel
	                    };
	                    if (this.itemTable) {
	                        if (this.options.renderType != "input") {
	                            this.render.setAttribute("aria-activedescendant", this.itemTable.id + "_" + idx);
	                        } else if (this.options.renderType == "input") {
	                            this.dom.input.setAttribute("aria-activedescendant",this.itemTable.id + "_option" + ((idx*1)+1));
	                        }
	                    }
	                } else {
	                    if (idx == -1 && this.itemTableMode === "gridView" && this.options.selectedData === false && this.options.noResult === 'useData') {
	                        if (this.itemTableMode == "gridView") {
	                            if (this.gridViewOptions.dataComp) {
	                                this.selectedGridViewRowObj = this.gridViewOptions.dataComp.getRowArray(idx);
	                            }
	                        }
	                        core._fastInnerHTML(this.dom.label, this._domInputValue);
	                        this.dom.label.style.display = "block";
	                        this.dom.label.style.visibility = "visible";
	                        this.dom.input.value = this._domInputValue;
	                        this.selectedItem = {
	                            text: this._domInputValue
	                        };
	                        if (this.itemTable) {
	                            this.render.setAttribute("aria-activedescendant", this.itemTable.id + "_" + idx);
	                        }
	                    } else {
	                        this.dom.label.textContent = "";
	                        this.dom.input.value = "";
	                        if (this.options.renderType != "input") {
	                            this.showEditMode(false);
	                        }
	                    }
	                }
	            }
	            return true;
	        } catch (e) {
	            exception.printStackTrace(e, null, this);
	        }
	    };
	    autoComplete.prototype.handleMousewheelEvent = function(e) {
	        try {
	            if (this.options.preventWheelEvent) {
	                return;
	            }
	            event.stopEvent(e);
	            if (!this.options.useMousewheel) {
	                return;
	            }
	            var it = this.event.getTargetIterator(e, this.render);
	            while (it.next()) {
	                if (it.match("w2autoComplete_selected")) {
	                    if (!this.isOpen) {
	                        var selectedIndex = this.getSelectedIndex();
	                        if (e.wheelDelta > 0 || e.detail < 0) {
	                            this.setSelectedIndex1(selectedIndex - 1);
	                        } else {
	                            if (selectedIndex < this.getItemCount() - 1) {
	                                this.setSelectedIndex1(selectedIndex + 1);
	                            }
	                        }
	                    } else if (this.itemTableMode != "grid" && this.itemTableMode != "gridView") {
	                        if (this.itemTable.selectedCell) { 
	                            var selectedIndex = this.itemTable.selectedCell.index; 
	                            if (typeof selectedIndex == "undefined") {
	                                selectedIndex = this.itemTable.selectedCell.getAttribute("index");
	                                var label = this.viewArr[selectedIndex].label;
	                                this.dom.input.value = this.options.escape === false ? WebSquare.xml.__decode2(label) : label;
	                            }
	                            this.itemTable.setSelectedIndex(selectedIndex);
	                        }
	                    }
	                }
	            }
	            it = null;
	        } catch (e) {
	            exception.printStackTrace(e, null, this);
	        }
	    };
	    autoComplete.prototype.endEdit = function(options) {
	        try {
	            var value = this.dom.input.value;
	            var noEvent = options && options.noEvent === true;
	            event.fireEvent(this, "oneditend", value);
	            if (this.mytime) {
	                window.clearTimeout(this.mytime);
	            }
	            if (this.hideTime) {
	                window.clearTimeout(this.hideTime);
	            }
	            var idx;
	            var str = this.dom.input.value;
	            var target = this.options.searchTarget;
	            var compareAll = false;
	            var arr;
	            var _esc = this.options.escape === false;
	            var delimiter = _esc ? WebSquare.xml.__decode2(this.options.delimiter) : this.options.delimiter;
	            if (this.options.displayMode == 1) {
	                arr = str.split(delimiter);
	                if (target == "value") {
	                    str = arr[0];
	                } else if (target == "label") {
	                    str = arr[1];
	                    if (str == undefined || str === "") {
	                        str = arr[0];
	                    }
	                } else if (target == "both") {
	                    if (arr[0] && arr[1]) {
	                        str = arr[1] + "|" + arr[0];
	                        compareAll = true;
	                    } else {
	                        str = arr[1];
	                        if (str == undefined || str === "") {
	                            str = arr[0];
	                        }
	                    }
	                } else if (target == "all") {
	                    if (arr[1] == undefined && arr.length == 1) {
	                        arr[1] = arr[0];
	                        arr[0] = "";
	                    }
	                    str = arr[1] + "|" + arr[0];
	                }
	            } else if (this.options.displayMode == 2) {
	                arr = str.split(delimiter);
	                if (target == "value") {
	                    str = arr[1];
	                    if (str == undefined || str === "") {
	                        str = arr[0];
	                    }
	                } else if (target == "label" || target == "both") {
	                    str = arr[0];
	                } else if (target == "all") {
	                    if (arr[1] == undefined) {
	                        arr[1] = "";
	                    }
	                    str = arr[0] + "|" + arr[1];
	                }
	            }
	            str = str.replace(/\u00a0/g, "&nbsp;");
	            var cItem = this.itemArr[this.selectedIndex];
	            if (cItem != undefined && (
	                    ((target === "value" || target === "both") && str === cItem.value) ||
	                    ((target === "label" || target === "both") && str === cItem.orgLabel) ||
	                    (target === "all" && str === cItem.orgLabel + "|" + cItem.value)
	                )) {
	                idx = this.selectedIndex;
	            } else {
	                idx = this.findinItemArr(str, this.options.searchTarget, compareAll);
	            }
	            if (idx != undefined) {
	                if (this.noResult === "useData" && !noEvent) {
	                    this.setSelectedIndex1(idx, true);
	                } else if (this.noResult === "clear") {
	                    if (noEvent) {
	                        this.setSelectedIndex(idx, true);
	                    } else {
	                        this.setSelectedIndex1(idx, true, true);
	                    }
	                } else {
	                    if (this.otherClicked === true) {
	                        if (this.options.handleOtherClick === true) {
	                            this.setSelectedIndex1(idx, true);
	                        }
	                        this.otherClicked = false;
	                    } else {
	                        this.setSelectedIndex(idx);
	                    }
	                }
	            } else if (this.noResult === "useData") {
	                if (this.options.allOption == true || this.options.chooseOption == true) {
	                    idx = 1;
	                } else {
	                    idx = 0;
	                }
	                if (!(this.options.ignoreBlankOnNoResult && this.dom.input.value === "")) {
	                    if (this.itemTableMode === 'gridView') {
	                        var newItemObj = {
	                            label: this.dom.input.value,
	                            value: this.dom.input.value,
	                            orgLabel: this.dom.input.value
	                        };
	                        this.dummyGridItemArr.push(newItemObj);
	                    }
	                    if (target === "all" && arr.length === 2) {
	                        if (this.options.interactionMode) {
	                            this.dummyItemArr.push({
	                                label: arr[0],
	                                value: arr[0],
	                                orgLabel: arr[0]
	                            })
	                        }
	                        if (this.options.displayMode == 1) {
	                            this.addItem(arr[1], arr[0], null, idx);
	                        } else {
	                            this.addItem(arr[0], arr[1], null, idx);
	                        }
	                    } else {
	                        if (this.options.interactionMode) {
	                            this.dummyItemArr.push({
	                                label: this.dom.input.value,
	                                value: this.dom.input.value,
	                                orgLabel: this.dom.input.value
	                            })
	                        }
	                        this.addItem(this.dom.input.value, this.dom.input.value, null, idx);
	                    }
	                } else {
	                    idx = 0;
	                }
	                if (noEvent) {
	                    {
	                        this.setSelectedIndex(idx);
	                    }
	                } else {
	                    this.setSelectedIndex1(idx, true);
	                }
	            } else if (this.noResult === "clear") {
	                if (this.options.allOption == true || this.options.chooseOption == true) {
	                    idx = 0;
	                } else {
	                    idx = -1;
	                }
	                if (noEvent) {
	                    this.setSelectedIndex(idx, true);
	                } else {
	                    this.setSelectedIndex1(idx, true, true);
	                }
	            } else if (this.noResult === "keepValue") {
	                if (this.modelControl.isBinded()) {
	                    this.modelControl.setData(value);
	                }
	                this._setValueNotInList(value);
	            }
	            var label = "";
	            var bRollback = this.modelControl.isBinded() && idx !== this.getSelectedIndex();
	            if (this.dom.input != null && this.itemArr != null && this.selectedIndex != -1 && !bRollback) {
	                if (this.options.customLabelFormatter) {
	                    this.customLabelFormatter = util.getGlobalFunction(this.options.customLabelFormatter, this.scope_id);
	                }
	                if (this.selectedItem.text == this.dom.input.value && this.dom.input.value != "") {
	                    if (typeof this.customLabelFormatter === 'function') {
	                        label = this._getLabel(this.selectedIndex);
	                    } else {
	                        label = (this.options.escape) ? this._encode(this.selectedItem.text) : this.selectedItem.text;
	                        label = this.getFormattedValue(this.selectedIndex, label);
	                    }
	                    core._fastInnerHTML(this.dom.label, label);
	                } else {
	                    if (this.itemArr && this.itemArr[this.selectedIndex]) {
	                        if (typeof this.customLabelFormatter === 'function') {
	                            label = this._getLabel(this.selectedIndex);
	                        } else {
	                            label = (this.options.escape) ? this._encode(this.itemArr[this.selectedIndex].label) : this.itemArr[this.selectedIndex].label;
	                            label = this.getFormattedValue(this.selectedIndex, label);
	                        }
	                        core._fastInnerHTML(this.dom.label, label);
	                        this.selectedItem = {
	                            text: label,
	                            value: this.itemArr[this.selectedIndex].value,
	                            orgLabel: this.itemArr[this.selectedIndex].orgLabel
	                        };
	                    } else {
	                        this.dom.label.textContent = "";
	                    }
	                }
	            }
	            if (this.options.renderType != "input") {
	                this.showEditMode(false);
	            }
	            this.mozTrickBuffer = "";
	            if (core.browserCheck.moz || core.browserCheck.opera) {
	                this.findStop = true;
	                util.clearInterval(this.id + "_mozTrickCompare");
	            }
	        } catch (e) {
	            exception.printStackTrace(e, null, this);
	        }
	    };
	    autoComplete.prototype.find = function(noAutoFocus, showSubLayer) {
	        try {
	            var searchStr = this.dom.input.value;
	            searchStr = searchStr.replace(/\u00a0/g, "&nbsp;");
	            if (typeof this.customSearchStrArrFunction === 'function') {
	                this._findInSearchStrArr();
	                return;
	            }
	            if (searchStr == "" && !showSubLayer) {
	                this.mozTrickBuffer = searchStr;
	                if (this.itemTable != null) {
	                    this.closeSubLayer();
	                }
	                return;
	            }
	            if (this.mozTrickBuffer == searchStr) {
	                this.mozTrickBuffer = searchStr;
	                return;
	            } else {
	                this.mozTrickBuffer = searchStr;
	            }
	            if (this.isOpen) {
	                this.closeSubLayer();
	            }
	            this.viewArr = [];
	            if (!this.options.caseSensitive) {
	                searchStr = searchStr.toLowerCase();
	            }
	            var bAutoFocus = false;
	            if (this._showItemTableByFocus && showSubLayer) {
	                for (var i = 0; i < this.itemArr.length; i++) {
	                    this.viewArr.push({
	                        label: this.itemArr[i].label,
	                        value: this.itemArr[i].value,
	                        orgLabel: this.itemArr[i].orgLabel,
	                        index: i,
	                        _hidden: this.itemArr[i]._hidden,
	                        _disabled: this.itemArr[i]._disabled
	                    });
	                }
	            } else {
	                for (var i = 0; i < this.itemArr.length; i++) {
	                    if (this.itemArr[i].noItem) {
	                        continue;
	                    }
	                    var result = false;
	                    if (!this.itemArr[i].orgLabel) {
	                        this.itemArr[i].orgLabel = this.itemArr[i].label;
	                        this.itemArr[i].label = this.getItemText(i);
	                    }
	                    var serchTagetColumnValueObj = {};
	                    if (!result && (this.options.searchTarget == "label" || this.options.searchTarget == "both" || this.options.searchTarget == "all")) {
	                        var label = (this.options.caseSensitive) ? this.itemArr[i].orgLabel : this.itemArr[i].orgLabel.toLowerCase();
	                        if (this.options.searchTarget == "all") {
	                            label = (this.options.caseSensitive) ? this.itemArr[i].label : this.itemArr[i].label.toLowerCase();
	                        }
	                        if (this.search == "contain") {
	                            result = this.myhelper.containWith(label, searchStr);
	                        } else if (this.search == "start") {
	                            result = this.myhelper.startWith(label, searchStr);
	                        } else if (this.search == "none") {
	                            if (label == searchStr) {
	                                result = true;
	                            } else {
	                                result = false;
	                            }
	                        }
	                        if (label == searchStr) {
	                            bAutoFocus = true;
	                        }
	                        if (this.itemTableMode == "gridView" && this.options.searchTarget == "label" && this.options.useKeywordHighlight) {
	                            this.serchTagetColumns.push(this.itemsetObj.label);
	                            serchTagetColumnValueObj[this.itemsetObj.label] = this.itemArr[i].label;
	                        }
	                    }
	                    if (!result && (this.options.searchTarget == "value" || this.options.searchTarget == "both" || this.options.searchTarget == "all")) {
	                        var value = (this.options.caseSensitive) ? this.itemArr[i].value : this.itemArr[i].value.toLowerCase();
	                        if (this.search == "contain") {
	                            result = this.myhelper.containWith(value, searchStr);
	                        } else if (this.search == "start") {
	                            result = this.myhelper.startWith(value, searchStr);
	                        } else if (this.search == "none") {
	                            if (value == searchStr) {
	                                result = true;
	                            } else {
	                                result = false;
	                            }
	                        }
	                        if (value == searchStr) {
	                            bAutoFocus = true;
	                        }
	                    }
	                    if (!result && (this.options.searchTarget == "itemColumns") && this.itemTableMode == "gridView") {
	                        var label = (this.options.caseSensitive) ? this.itemArr[i].orgLabel : this.itemArr[i].orgLabel.toLowerCase();
	                        if (this.gridViewItemArrSerchTargetColumns) {
	                            for (var j = 0; j < this.gridViewItemArrSerchTargetColumns.length; j++) {
	                                if (this.gridViewItemArrSerchTargetColumns[j].row == i) {
	                                    for (var key in this.gridViewItemArrSerchTargetColumns[j]) {
	                                        if (key !== "row") {
	                                            var columnValue = (this.options.caseSensitive) ? this.gridViewItemArrSerchTargetColumns[j][key] : this.gridViewItemArrSerchTargetColumns[j][key].toLowerCase();
	                                            if (this.search == "contain") {
	                                                result = this.myhelper.containWith(columnValue, searchStr);
	                                            } else if (this.search == "start") {
	                                                result = this.myhelper.startWith(columnValue, searchStr);
	                                            } else if (this.search == "none") {
	                                                if (columnValue == searchStr) {
	                                                    result = true;
	                                                } else {
	                                                    result = false;
	                                                }
	                                            }
	                                            if (result) {
	                                                this.serchTagetColumns.push(key);
	                                                serchTagetColumnValueObj[key] = this.gridViewItemArrSerchTargetColumns[j][key];
	                                                break;
	                                            }
	                                        }
	                                    }
	                                    break;
	                                }
	                            }
	                        }
	                    }
	                    if (result) {
	                        if (this.options.useKeywordHighlight && (this.itemTableMode == "gridView")) {
	                            this.viewArr.push({
	                                label: this.itemArr[i].label,
	                                value: this.itemArr[i].value,
	                                orgLabel: this.itemArr[i].orgLabel,
	                                index: i,
	                                searchStr: this.options.caseSensitive ? this.dom.input.value : this.dom.input.value.toLowerCase(),
	                                serchTagetColumnValueObj: serchTagetColumnValueObj,
	                                _hidden: this.itemArr[i]._hidden,
	                                _disabled: this.itemArr[i]._disabled
	                            });
	                        } else if (this.options.useKeywordHighlight) {
	                            this.viewArr.push({
	                                label: this.itemArr[i].label,
	                                value: this.itemArr[i].value,
	                                orgLabel: this.itemArr[i].orgLabel,
	                                index: i,
	                                searchStr: this.options.caseSensitive ? this.dom.input.value : this.dom.input.value.toLowerCase(),
	                                _hidden: this.itemArr[i]._hidden,
	                                _disabled: this.itemArr[i]._disabled
	                            });
	                        } else {
	                            this.viewArr.push({
	                                label: this.itemArr[i].label,
	                                value: this.itemArr[i].value,
	                                orgLabel: this.itemArr[i].orgLabel,
	                                index: i,
	                                _hidden: this.itemArr[i]._hidden,
	                                _disabled: this.itemArr[i]._disabled
	                            });
	                        }
	                    }
	                }
	            }
	            if (this.viewArr.length == 0 && !showSubLayer) {
	                if (this.options.noResult == "clear" || this.options.noResult == "useData") {
	                    this.mozTrickBuffer = "";
	                }
	                if (this.itemTable != null) {
	                    this.closeSubLayer();
	                }
	            } else {
	                if (!noAutoFocus) {
	                    if (bAutoFocus) {
	                        this.setItemTable();
	                    } else {
	                        this.setItemTable();
	                    }
	                } else {
	                    this.setItemTable();
	                }
	                this.openTable();
	            }
	        } catch (e) {
	            exception.printStackTrace(e, null, this);
	        }
	    };
	    autoComplete.prototype.changeMode = function(options) {
	        try {
	            if (this.options.editable === false) {
	                return;
	            }
	            if (typeof options === "undefined" || options == null) {
	                options = {};
	            }
	            this.editmode = true;
	            this.findStop = false;
	            if (this.dom.input.style.display != "block") {
	                var inputValue = "";
	                if (this.noResult === "keepValue") {
	                    inputValue = this.options.escape ? this._encode(this.dom.label.textContent) : this.dom.label.textContent;
	                } else if (this.selectedIndex === -1 && this.itemTableMode === "gridView" && this.options.selectedData === false && this.options.noResult === 'useData') {
	                    inputValue = this.selectedItem.text;
	                } else {
	                    if (this.options.searchTarget === "both" && this.options.displayModeSync) {
	                        inputValue = this.selectedItem.text;
	                    } else if (this.options.searchTarget == "value") {
	                        inputValue = this.selectedItem.value;
	                    } else if (this.options.searchTarget == "label" || this.options.searchTarget == "both") {
	                        inputValue = this.selectedItem.orgLabel;
	                    } else if (this.options.searchTarget == "all") {
	                        inputValue = this.selectedItem.text;
	                    } else {
	                        inputValue = this.selectedItem.orgLabel;
	                    }
	                }
	                if (this.options.trimOnFocus) {
	                    inputValue = inputValue.trim();
	                }
	                if (this.options.editType == "focus") {
	                    this.showEditMode(true);
	                    if (document.activeElement != this.dom.input) {
	                        if (options.noFocus !== true) {
	                            this.setfFocus();
	                        }
	                    }
	                    var decodedValue = WebSquare.xml.__decode2(inputValue + '');
	                    this.dom.input.value = decodedValue;
	                    if (util.isOpera() || util.isFF()) {
	                        this.dom.input.setSelectionRange(decodedValue.length, decodedValue.length);
	                    }
	                } else {
	                    this.dom.input.value = WebSquare.xml.__decode2(inputValue + '');
	                    this.showEditMode(true);
	                    if (options.noFocus !== true && this.options.renderType !== "input") {
	                        this.dom.input.select();
	                        this.setfFocus();
	                    }
	                }
	            }
	            if (this.options.renderType === "input" && options.noFocus !== true) {
	                if (this.options.editType == "select") {
	                    this.dom.input.select();
	                }
	                this.setfFocus();
	            }
	            if (!this.interactionMode && (this.options.renderType != "native" && this.options.renderType != "input") && options.noFocus !== true && options.skipFind !== true) {
	                if (this.itemArr.length > 0 && options.hideListOnFocus !== true) {
	                    var _this = this;
	                    if (this._showItemTableByFocus) {
	                        if (this.mytime) {
	                            clearTimeout(this.mytime);
	                        }
	                        this.mytime = setTimeout(function() {
	                            _this.find(true, true);
	                        }, 100);
	                    } else if (this.dom.input.value &&
	                        this.dom.input.value !== this.defaultAllOptionLabel &&
	                        this.dom.input.value !== this._getChooseOptionLabel()
	                    ) {
	                        if (this.mytime) {
	                            clearTimeout(this.mytime);
	                        }
	                        this.mytime = setTimeout(function() {
	                            _this.find(true, true);
	                        }, 100);
	                    }
	                }
	            }
	        } catch (e) {
	            exception.printStackTrace(e, null, this);
	        }
	    };
		gridView.prototype.initializeEvent = function() {
			        try {
			            this.otherClickEvent();
			            this.checkResize(); 
			            this.event.addListener(this.render, "ondblclick", this.event.bindAsEventListener(this, this.handleDblClickEvent));
			            this.event.addListener(this.render, "onclick", this.event.bindAsEventListener(this, this.handleClickEvent));
			            if (!util.isIEAllVersion()) {
			                if (core.browserCheck.safari) {
			                    this.event.addListener(WebSquare.getBody().render, "onbeforecopy", this.event.bindAsEventListener(this, this.handleBeforeCopyEvent));
			                    this.event.addListener(WebSquare.getBody().render, "oncopy", this.event.bindAsEventListener(this, this.handleCopyEvent));
			                    this.event.addListener(WebSquare.getBody().render, "onbeforecut", this.event.bindAsEventListener(this, this.handleBeforeCutEvent));
			                    this.event.addListener(WebSquare.getBody().render, "oncut", this.event.bindAsEventListener(this, this.handleCutEvent));
			                    this.event.addListener(this.render, "onpaste", this.event.bindAsEventListener(this, this.handlePasteEvent));
			                } else {
			                    if (util.isExecCommandSupported() === false) {
			                        this.event.addListener(this.render, "oncopy", this.event.bindAsEventListener(this, this.handleCopyEvent));
			                        this.event.addListener(this.render, "oncut", this.event.bindAsEventListener(this, this.handleCutEvent));
			                        this.event.addListener(this.render, "onpaste", this.event.bindAsEventListener(this, this.handlePasteEvent));
			                    }
			                }
			            } else if (util.isIEAllVersion()) {
			                this.event.addListener(this.render, "oncopy", this.event.bindAsEventListener(this, function(e) {
			                    if (!this.options.preventCopy && !this.editedCell && this.options.copyType !== "native") { 
			                        event.preventDefault(e);
			                    }
			                }));
			                this.event.addListener(this.render, "oncut", this.event.bindAsEventListener(this, function(e) {
			                    if (!this.options.preventCopy && !this.editedCell && this.options.copyType !== "native") {
			                        event.preventDefault(e);
			                    }
			                }));
			                this.event.addListener(this.render, "onpaste", this.event.bindAsEventListener(this, function(e) {
			                    if (this.options.preventPaste && !this.editedCell && this.options.copyType !== "native") {
			                        event.preventDefault(e);
			                    }
			                }));
			                if (this.options.noSelect === true) {
			                    var mainDiv = document.getElementById(this.id + "_main_div");
			                    mainDiv.onselectstart = function(ev) {
			                        if (util.isIEAllVersion()) {
			                            if (ev && ev.srcElement) {
			                                var srcElem = ev.srcElement;
			                                if (srcElem.tagName === "INPUT" || srcElem.tagName === "TEXTAREA") {
			                                    return true;
			                                }
			                            }
			                        }
			                        return false;
			                    };
			                } else if (this.options.preventCopy === true) {
			                    this.render.onselectstart = function() {
			                        return false;
			                    };
			                }
			            }
			            if (!this.isMobile) {
			                this.event.addListener(this.getElementById(this.id + "_head_table"), "onmouseover", this.event.bindAsEventListener(this, this.gridDataLayerOut));
			                this.event.addListener(this.getElementById(this.id + "_scrollX_div"), "onmouseover", this.event.bindAsEventListener(this, this.gridDataLayerOut));
			                this.event.addListener(this.getElementById(this.id + "_scrollY_div"), "onmouseover", this.event.bindAsEventListener(this, this.gridDataLayerOut));
			                this.event.addListener(this.getElementById(this.id + "_dataLayer"), "onmouseover", this.event.bindAsEventListener(this, this.gridOver));
			                if (this.options.useMoreButton) {
			                    this.event.addListener(this.getElementById(this.id + "_grid_more_button"), "onclick", this.event.bindAsEventListener(this, function(e) {
			                        WebSquare.event.fireEvent(this, "onscrollend");
			                    }));
			                }
			                if (this.hasFooter) {
			                    this.event.addListener(this.getElementById(this.id + "_foot_table"), "onmouseover", this.event.bindAsEventListener(this, this.gridOver));
			                }
			            }
			            var useHammer = this.isHammerEnabled();
			            this.event.addListener(this.getElementById(this.id + "_dataLayer"), "oncontextmenu", this.event.bindAsEventListener(this, this.clickRightButtonCell));
			            this.event.addListener(this.render, "onmouseleave", this.event.bindAsEventListener(this, function (e) {WebSquare.event.fireEvent(this, "ongridmouseleave", e);}));
			            this.event.addListener(this.render, "onmouseenter", this.event.bindAsEventListener(this, function (e) {WebSquare.event.fireEvent(this, "ongridmouseenter", e);}));
			            if (!useHammer) {
			                this.event.addListener(this.render, "onmouseout", this.event.bindAsEventListener(this, this.gridOut));
			                this.event.addListener(this.getElementById(this.id + "_head_table"), "onmouseout", this.event.bindAsEventListener(this, this.gridHeaderOut));
			            }
			            this.event.addListener(this.render, "onkeydown", this.event.bindAsEventListener(this, this.handleKeyDownEvent));
			            this.event.addListener(this.render, "onkeyup", this.event.bindAsEventListener(this, this.handleKeyUpEvent));
			            if (util.isOpera()) {
			                this.event.addListener(this.render, "onkeypress", function(e) {
			                    if (e.keyCode == 9 || e.keyCode == 27) {
			                        event.preventDefault(e);
			                    }
			                });
			            }
			            if (this.options.dataDragDrop || this.options.dataDragDropSelf || this.options.dataDragDropOther || this.options.dataDragDropCell) {
			                if (this.isMobile == true) {
			                    if (useHammer) {
			                        var promiseObj = Promise.resolve();
			                        if (typeof Hammer === "undefined" || Hammer == null) {
			                            promiseObj = inquires("externalJS/hammer.min.js");
			                        }
			                        var comp_uuid = this.uuid;
			                        promiseObj.then(function(resolve, reject) {
			                            var comp = WebSquare.idCache[comp_uuid];
			                            comp._manager = new Hammer.Manager(comp.getElementById(comp.id + "_dataLayer"));
			                            comp._manager.add(new Hammer.Press({
			                                "time": comp.options.hammerPressTime
			                            }));
			                            comp._manager.on("press", comp.event.bindAsEventListener(comp, function(e) {
			                                comp.handleDragEvent(e);
			                            }));
			                            comp._bindPressEvent = true;
			                        });
			                    }
			                } else {
			                    this.event.addListener(this.render, "onmousedown", this.event.bindAsEventListener(this, this.handleDragEvent));
			                    this._bindDrag = true;
			                }
			                if (!this.options.dataDragDropOther && !this.options.dataDragDropSelf) {
			                    this._useShiftKey = true;
			                }
			            } else if (!this.options.dataDragDrop && !this.options.dataDragDropSelf && !this.options.dataDragDropOther && !this.options.dataDragDropCell && this.options.dataDragSelect) {
			                if (!this.isMobile) {
			                    this.event.addListener(this.render, "onmousedown", this.event.bindAsEventListener(this, this.handleDragSelectEvent));
			                }
			            }
			            core.setTimer(function() {
			                this.event.addListener(this.render, "onmousedown", this.event.bindAsEventListener(this, function(e) {
			                    var layerListener = WebSquare.getBody().getLayerListener();
			                    if (layerListener.layers[this.id]) {
			                        var component = layerListener.layers[this.id].component;
			                        var excludeObj = {};
			                        while (component.parentControl) {
			                            component = component.parentControl;
			                            for (var id in layerListener.useOtherComponentId) {
			                                if (layerListener.useOtherComponentId[id] == component.id) {
			                                    excludeObj[id] = true;
			                                }
			                            }
			                        }
			                        WebSquare.getBody().getLayerListener().hideAll(excludeObj);
			                    }
			                    if (!this.parentControl || !this.parentControl.options || (this.parentControl.options.pluginName != "gridItemTable" && this.parentControl.options.pluginName != "gridViewItemTable")) {
			                        event.stopPropagation(e);
			                    }
			                    if (this.options.focusFlow == "linear" && this.options.focusMode != "none") {
			                        var tdElem = event.getTarget(e);
			                        while (tdElem && tdElem.parentNode && tdElem.tagName != "BODY" && tdElem.tagName != "TD" && !this.hasClass(tdElem, this.options.bodyTdClass)) {
			                            tdElem = tdElem.parentNode;
			                        }
			                        if (tdElem && tdElem.tagName == "TD" && this.hasClass(tdElem, this.options.bodyTdClass)) {
			                            this._focusByClick = true;
			                            util.setTimeout(function() {
			                                delete this._focusByClick;
			                            }, {
			                                "key": this.id + "_focusByClick",
			                                "caller": this,
			                                "delay": 1000
			                            });
			                        }
			                    }
			                }));
			            }, {
			                key: this.id + "initializeEvent",
			                caller: this,
			                delay: 100
			            });
			            if (this._isBrowserScroll() === true && this.options.scrollXNative) {
			            } else if ((util.isTouchDevice() || this.isMobile) && !window.navigator.msPointerEnabled) {
			                this.iScroll = {};
			                this.event.addListener(this.render, "ontouchstart", this.event.bindAsEventListener(this, this.handleTouchStart));
			                this.event.addListener(this.render, "ontouchmove", this.event.bindAsEventListener(this, this.handleTouchMove));
			                this.event.addListener(this.render, "ontouchend", this.event.bindAsEventListener(this, this.handleTouchEnd));
			            } else if (window.navigator.msPointerEnabled && window.navigator.userAgent.toLowerCase().indexOf("touch") != -1) { 
			                this.iScroll = {};
			                this.render.style.touchAction = "none";
			                this.event.addListener(this.render, "onMSPointerDown", this.event.bindAsEventListener(this, this.handleTouchStart));
			                this.event.addListener(this.render, "onMSPointerMove", this.event.bindAsEventListener(this, this.handleTouchMove));
			                this.event.addListener(this.render, "onMSPointerUp", this.event.bindAsEventListener(this, this.handleTouchEnd));
			            } else if (this._isBrowserScroll() === true) {
			            } else if (this.options.senseReader) {
			                if (this.options.useStartEndDiv) {
			                    this.event.addListener(this.getElementById(this.id + "_gridstart_div"), "onfocus", this.event.bindAsEventListener(this, this.handleStartDivFocus));
			                    this.event.addListener(this.getElementById(this.id + "_gridstart_div"), "onkeydown", this.event.bindAsEventListener(this, this.handleStartDivKeyDown));
			                    this.event.addListener(this.getElementById(this.id + "_gridend_div"), "onfocus", this.event.bindAsEventListener(this, this.handleEndDivFocus));
			                    this.event.addListener(this.getElementById(this.id + "_gridend_div"), "onkeyup", this.event.bindAsEventListener(this, this.handleEndDivKeyUp));
			                }
			                if (this.options.scrollFocus) {
			                    this.event.addListener(this.getElementById(this.id + "_scrollY_div"), "onkeydown", this.event.bindAsEventListener(this, this.handleScrollDivKeyDown));
			                } else {
			                    if (this.options.useStartEndDiv) {
			                        this.event.addListener(this.getElementById(this.id + "_gridend_div"), "onkeydown", this.event.bindAsEventListener(this, this.handleEndDivKeyDown));
			                    }
			                }
			            } else {
			                if (this.options.scrollFocus) {
			                    this.event.addListener(this.getElementById(this.id + "_scrollY_div"), "onkeydown", this.event.bindAsEventListener(this, this.handleScrollDivKeyDown));
			                }
			            }
			            if (useHammer && !this._bindPressEvent) {
			                try {
			                    var promiseObj = Promise.resolve();
			                    if (typeof Hammer === "undefined" || Hammer == null) {
			                        promiseObj = inquires("externalJS/hammer.min.js");
			                    }
			                    var comp_uuid = this.uuid;
			                    promiseObj.then(function(resolve, reject) {
			                        var comp = WebSquare.idCache[comp_uuid];
			                        comp._manager = new Hammer.Manager(comp.render);
			                        comp._manager.add(new Hammer.Press({
			                            "time": comp.options.hammerPressTime
			                        }));
			                        comp._manager.on("press", comp.event.bindAsEventListener(comp, function(e) {
			                            if (comp._bindPressEvent) {
			                                return;
			                            }
			                            var srcElem = event.getTarget(e);
			                            var rowPosition = -1;
			                            var tdElem;
			                            while (srcElem && srcElem.tagName != "BODY") {
			                                if (srcElem.tagName == "TD" && comp.hasClass(srcElem, comp.options.bodyTdClass)) {
			                                    rowPosition = comp.getElemRowIndex(srcElem);
			                                    tdElem = srcElem;
			                                    break;
			                                }
			                                srcElem = srcElem.parentNode;
			                            }
			                            comp.removeFocusedCell(); 
			                            comp._dataList.setRowPosition(rowPosition);
			                            if (tdElem) {
			                                comp.__setFocusedCell({}, tdElem, {
			                                    editMode: "none"
			                                });
			                            }
			                            comp.handleDblClickEvent(e);
			                            event.fireEvent(comp, "ondblclick", e);
			                        }));
			                    });
			                } catch (e) {
			                    exception.printStackTrace(e, null, this);
			                }
			            }
			            if (this._isNativeScroll("both")) {
			                var dataLayer = document.getElementById(this.id + "_dataLayer");
			                var comp_uuid = this.uuid;
			                if (dataLayer) {
			                    dataLayer.onscroll = function(e) {
			                        var comp = WebSquare.idCache[comp_uuid];
			                        comp._endEdit();
			                        var dataLayer = document.getElementById(comp.id + "_dataLayer");
			                        var scrollTop = dataLayer.scrollTop;
			                        var dataLayerHeight = dataLayer.offsetHeight;
			                        var scrollLeft = dataLayer.scrollLeft;
			                        if (!comp._nativeScrollInfo) {
			                            comp._nativeScrollInfo = {
			                                "x": 0,
			                                "y": 0
			                            };
			                        }
			                        var deltaX = scrollLeft - comp._nativeScrollInfo.x;
			                        var deltaY = scrollTop - comp._nativeScrollInfo.y;
			                        if (Math.abs(deltaY) > 0 && comp._isNativeScroll() === true ) {
			                            if (WebSquare.util.isIEAllVersion()) {
			                                var headElem = document.getElementById(comp.id + "_head_table");
			                                var thArr = headElem.getElementsByTagName("th");
			                                var scrollTopPx = scrollTop + "px";
			                                for (var i = 0; i < thArr.length; i++) {
			                                    var thElem = thArr[i];
			                                    if (thElem.style.position != "relative") {
			                                        thElem.style.position = "relative";
			                                    }
			                                    thElem.style.top = scrollTopPx;
			                                }
			                            }
			                            if (dataLayerHeight + scrollTop >= dataLayer.scrollHeight) {
			                                event.fireEvent(comp, "onscrollend");
			                            }
			                            event.fireEvent(comp, "onscrolly", e);
			                        }
			                        if (Math.abs(deltaX) > 0 && comp.options.scrollXNative === true) {
			                            event.fireEvent(comp, "onscrollx", e);
			                        }
			                        comp._nativeScrollInfo = {
			                            "x": scrollLeft,
			                            "y": scrollTop
			                        };
			                    }
			                }
			            }
			            if (this.options.focusFlow == "linear" && this.options.focusMode != "none") {
			                this.event.addListener(this.render, "onfocusin", this.event.bindAsEventListener(this, this.handleTdFocus));
			            }
			            this.initializeLayoutEvents();
			            xfControl.addCheckResize(this.uuid, "checkResize");
			        } catch (e) {
			            exception.printStackTrace(e, null, this);
			        }
			    };
			    gridView.prototype.handleTdFocus = function(e, options) {
			        try {
			            if (this._focusByClick) {
			                return;
			            }
			            var td = event.getTarget(e);
			            while (td && td.parentNode && td.tagName != "BODY" && td.tagName != "TD" && !this.hasClass(td, this.options.bodyTdClass)) {
			                td = td.parentNode;
			            }
			            var lastFocusedCell = this.getLastFocusedCell();
			            var _editedCell;
			            if (td.tagName == "TD" && this.hasClass(td, this.options.bodyTdClass) && lastFocusedCell.focusedTd != td && !this.focusedByApi) {
			                var _row;
			                var _col;
			                var gridCol;
			                var _realRow;
			                var oldValue;
			                var oldSelectedIndex;
			                var skipHash = {
			                    "link": true,
			                    "button": true,
			                    "image": true,
			                    "user": true
			                }
			                var cellInfo = this.getCellInfo(td);
			                try {
			                    var elemRowIndex = this.getElemRowIndex(td);
			                    var bReadOnly = this.___getEditReadOnly(elemRowIndex, cellInfo.id);
			                    var valid = !(cellInfo.options.embeddedInput && !bReadOnly)
			                        && !(cellInfo.options.inputType == "custom" && this.options.senseReader == true && !bReadOnly)
			                        && skipHash[cellInfo.options.inputType] !== true 
			                        && cellInfo.options.tableRender != "ul";
			                    if (!valid) {
			                        return;
			                    }
			                } catch(err) {
			                    exception.printStackTrace(err, null, this);
			                }
			                if (e.type === "focusin" && this.focusedCell.length > 1) {
			                    return;
			                }
			                if (this.options.focusFlow === "linear") {
			                    _editedCell = this.editedCell != null;
			                    if (_editedCell) {
			                        var cellInfo2 = this.getCellInfo(this.editedCell.colID);
			                        _row = cellInfo2.editRowIndex;
			                        _col = this._dataList.getColumnIndex(cellInfo2.id);
			                        gridCol = this.getColumnIndex(cellInfo2.id);
			                        _realRow = this.getRealRowIndex(_row);
			                        oldValue = this._dataList.dataArr[_realRow * this._dataList.getColumnCount() + _col];
			                        oldSelectedIndex = cellInfo2.comp && cellInfo2.comp.selectedIndex;
			                    }
			                }
			                var tempOptions = {
			                    editMode: cellInfo.options.focusMode == "none",
			                    dont_fixScroll: this.options.CellClickFixScrollX
			                };
			                this.__setFocusedCell(e, td, tempOptions);
			                if (_editedCell) {
			                    var newValue = this._dataList.dataArr[_realRow * this._dataList.getColumnCount() + _col];
			                    if (oldValue === 0) {
			                        oldValue = "0";
			                    }
			                    if (newValue === 0) {
			                        newValue = "0";
			                    }
			                    if (oldValue != newValue) {
			                        var infoObj = {
			                            "oldValue": oldValue,
			                            "newValue": newValue,
			                            "rowIndex": _row,
			                            "colIndex": gridCol,
			                            "colId": this.getColumnID(gridCol)
			                        };
			                        if (!isNaN(oldSelectedIndex)) {
			                            infoObj.oldSelectedIndex = oldSelectedIndex;
			                            infoObj.newSelectedIndex = cellInfo && cellInfo.comp && cellInfo.comp.selectedIndex;
			                        }
			                        event.fireEvent(this, "onviewchange", infoObj);
			                    }
			                }
			            }
			            this.focusedByApi = false;
			        } catch(e) {
			            exception.printStackTrace(e, null, this);
			        }
			    };
			    gridView.prototype.handleClickEvent = function(e) {
			        try {
			            this.lastEvent = event.getInfo(e);
			            event.fireEvent(this, "onclick", e);
			            if (this.isMobile) {
			                if (this.iScroll && this.iScroll.moveDirection && this.iScroll.moveDistance > 10) {
			                    return;
			                }
			            }
			            var it = this.event.getTargetIterator(e, this.render);
			            var _editedCell = (this.editedCell != null);
			            var _row, _col, gridCol, _realRow, oldValue, oldSelectedIndex, cellInfo;
			            var lastEvent = this.lastEvent;
			            if (_editedCell) {
			                _row = this.editedCell.editRowIndex;
			                _col = this._dataList.getColumnIndex(this.editedCell.id);
			                cellInfo = this.getCellInfo(this.editedCell.id);
			                gridCol = this.getColumnIndex(this.editedCell.id); 
			                _realRow = this._grid.getRealRowIndex(_row);
			                oldValue = this._dataList.dataArr[_realRow * this._dataList.getColumnCount() + _col]; 
			                oldSelectedIndex = cellInfo.comp && cellInfo.comp.selectedIndex;
			            }
			            var checkSubtotalClassList = function(it, comp) {
			                var subtotalClickTemp = false;
			                if (comp.subtotalClassList) {
			                    for (var i = 0; i < comp.subtotalClassList.length; i++) {
			                        if (comp.subtotalClassList[i].length > 0 && it.match(comp.subtotalClassList[i])) {
			                            subtotalClickTemp = true;
			                            break;
			                        }
			                    }
			                }
			                return subtotalClickTemp;
			            };
			            var flag = false;
			            while (it.next()) {
			                if (it.match(this.options.bodyTdClass)) {
			                    flag = true;
			                    this.bodyClick(e, it.getElement(), {
			                        from_handleClickEvent: true
			                    });
			                    break;
			                } else if (it.match(this.options.headerTdClass)) {
			                    flag = true;
			                    this.headerClick(e, it.getElement(), {
			                        from_handleClickEvent: true
			                    });
			                    if (_editedCell && this.editedCell == null) { 
			                        _row = this.getDisplayRowIndex(_realRow);
			                    }
			                    break;
			                } else if (this.hasFooter && it.match(this.options.footerTdClass)) {
			                    flag = true;
			                    this.footerClick(e, it.getElement(), {
			                        from_handleClickEvent: true
			                    });
			                    break;
			                } else if (this.hasSubtotal && (it.match(this.options.subtotalTdClass) || checkSubtotalClassList(it, this))) {
			                    flag = true;
			                    this.subtotalClick(e, it.getElement(), {
			                        from_handleClickEvent: true
			                    });
			                    break;
			                } else if (this.isMine(e)) {
			                } else if (it.match(this.options.headerTableClass)) {
			                    break;
			                } else if (it.getElement().getAttribute("id") == this.id + "_dataLayer") {
			                    flag = true;
			                    if (this.editedCell != null) {
			                        this.editedCell.handleEndEdit(e, undefined, {
			                            from_handleClickEvent: true
			                        });
			                    }
			                    event.fireEvent(this, "onblankclick", e);
			                    break;
			                }
			            }
			            if (_editedCell) {
			                var newValue = this._dataList.dataArr[_realRow * this._dataList.getColumnCount() + _col]; 
			                if (oldValue === 0) {
			                    oldValue = "0";
			                }
			                if (newValue === 0) {
			                    newValue = "0";
			                }
			                if (oldValue != newValue) {
			                    var infoObj = {
			                        "oldValue": oldValue,
			                        "newValue": newValue,
			                        "rowIndex": _row,
			                        "colIndex": gridCol,
			                        "colId": this.getColumnID(gridCol)
			                    };
			                    if (!isNaN(oldSelectedIndex)) {
			                        infoObj.oldSelectedIndex = oldSelectedIndex;
			                        infoObj.newSelectedIndex = cellInfo && cellInfo.comp && cellInfo.comp.selectedIndex;
			                    }
			                    event.fireEvent(this, "onviewchange", infoObj);
			                }
			                var aGroupbyDisplayRowIndex = this._getGroupbyDisplayRowIndex(_row);
			                if (this.options.viewChangeAfterEdit && flag) {
			                    event.fireEvent(this, "onafteredit", aGroupbyDisplayRowIndex, gridCol, newValue, lastEvent);
			                }
			            }
			        } catch (e) {
			            exception.printStackTrace(e, null, this);
			        }
			    };
			    gridView.prototype.bodyClick = function(e, srcElem, options) {
			        try {
			            var bFocusByClick = this._focusByClick;
			            delete this._focusByClick;
			            var oldFocusedTd = this.getLastFocusedCell().focusedTd;
			            if (this.options.rowMouseOver) {
			                this.removeRowOverStyle(this.lastOverSrc, "grid_body_row_over", "grid_body_row");
			            }
			            var dataTdIndex = util.getDataPrefix("tdIndex");
			            var dataCol_id = util.getDataPrefix("col_id");
			            var dataColIndex = util.getDataPrefix("colIndex");
			            var originalRowIndex = this.rowIndex;
			            var tdIndex = parseInt(srcElem.getAttribute(dataTdIndex));
			            var trIndex = parseInt(tdIndex / this.realRowDataLength);
			            var displayRowIndex = trIndex + this.rowIndex;
			            var colIndex = srcElem.getAttribute(dataCol_id);
			            var oldRowIndex = this._dataList.getRowPosition();
			            var oldColIndex = this.getColumnIndex(this._dataList.getColumnPosition());
			            var newRowIndex = trIndex + originalRowIndex;
			            var newColIndex = tdIndex % this.realRowDataLength - (this.realRowDataLength - this.oneRowDataLength);
			            var cellInfo;
			            if (colIndex) {
			                cellInfo = this.getCellInfo(colIndex);
			            }
			            var realRowIndex = this.dataList.getRealRowIndex(displayRowIndex); 
			            if (typeof realRowIndex != "number") {
			                if (realRowIndex && realRowIndex.type == "header") {
			                    this.toggleGroup(realRowIndex.groupId);
			                }
			                return;
			            }
			            if (this.options.focusDefaultColumn) {
			                var attrID = srcElem.getAttribute("id") || "";
			                var isRowNum = attrID.slice(0, "_headerRowNumber".length) === "_headerRowNumber";
			                var isRowStatus = attrID.slice(0, "_headerRowStatus".length) === "_headerRowStatus";
			                if (this.options.rowNumStatusUniqueId) {
			                    isRowNum = attrID.replace(this.id,'').slice(0, "_headerRowNumber".length) === "_headerRowNumber";
			                    isRowStatus = attrID.replace(this.id,'').slice(0, "_headerRowStatus".length) === "_headerRowStatus";
			                }
			                if (isRowNum || isRowStatus) {
			                    this.__setFocusedCell(e, srcElem, {
			                        editMode: false
			                    });
			                    if (isRowStatus) {
			                        event.fireEvent(this, "onrowstatusclick", newRowIndex);
			                    } else {
			                        event.fireEvent(this, "onrownumclick", newRowIndex);
			                    }
			                    return;
			                }
			            }
			            if (colIndex == null) {
			                return;
			            }
			            this.moveDirection = null;
			            var colDiff = oldColIndex - newColIndex;
			            var rowDiff = oldRowIndex - newRowIndex;
			            if (colDiff == 0 && rowDiff == 0) {
			                this.moveDirection = "none";
			            } else if ((colDiff > 0 || colDiff < 0) && (rowDiff > 0 || rowDiff < 0)) {
			                this.moveDirection = "both";
			            } else if (colDiff > 0 || colDiff < 0) {
			                this.moveDirection = "column";
			            } else if (rowDiff > 0 || rowDiff < 0) {
			                this.moveDirection = "row";
			            }
			            var dataEditModeEvent = util.getDataPrefix("editModeEvent");
			            var editModeEvent = srcElem.getAttribute(dataEditModeEvent) || "";
			            var useSecondClick = false;
			            if ((editModeEvent != "" && editModeEvent.toLowerCase() == "onsecondclick") || (editModeEvent == "" && this.options.editModeEvent.toLowerCase() == "onsecondclick")) {
			                for (var i = 0; i < this.focusedCell.length; i++) {
			                    if (this.focusedCell[i].focusedRowIndex == newRowIndex && this.focusedCell[i].focusedColIndex == newColIndex) {
			                        useSecondClick = true;
			                    }
			                }
			            }
			            cellInfo = this.getCellInfo(srcElem);
			            var customInputType = "";
			            var cellInfo2;
			            if (cellInfo.options.inputType === "custom") {
			                cellInfo2 = cellInfo.cellManagerHashByRowIndex[this.getRealRowIndex(newRowIndex)] ? cellInfo.cellManagerHashByRowIndex[this.getRealRowIndex(newRowIndex)] : cellInfo;
			                customInputType = cellInfo2.options.inputType;
			            }
			            var focusValid = true;  
			            var target = event.getTarget(e);
			            if (!cellInfo.options.blockSelect &&
			                ((cellInfo.options.inputType !== "button" && customInputType !== "button") || ((cellInfo.options.inputType === "button" || customInputType === "button") && target && target.tagName === "TD"))) {
			                var focusedCell = true;
			                if (this.options.focusFlow === "linear") { 
			                    if (cellInfo.options.inputType !== "link" && e && e.isTrusted === true && !bFocusByClick) { 
			                        focusedCell = false;
			                    }
			                }
			                if (this.options.preventMultipleClick) {
			                    if (cellInfo.options.inputType === "checkbox" && target && target.tagName === "LABEL") {
			                        focusedCell = false;
			                    }
			                }
			                var tempFocusValid;
			                if (focusedCell) {
			                    if (this.options.drilldownToggle === "enter" && this.isMobile && this.isHammerEnabled()) {
			                        if (this.focusedCell.length == 1) {
			                            var cellInfo = this.getCellInfo(this.focusedCell[0].focusedColIndex);
			                            if (cellInfo && cellInfo.options.inputType == "drilldown") {
			                                var tdIndex = parseInt(srcElem.getAttribute(dataTdIndex));
			                                var trIndex = parseInt(tdIndex / this.realRowDataLength);
			                                var colIndex = parseInt(srcElem.getAttribute(dataColIndex));
			                                var newRowIndex = this._getGroupbyDisplayRowIndex(trIndex + originalRowIndex);
			                                var newColIndex = tdIndex % this.realRowDataLength - (this.realRowDataLength - this.oneRowDataLength);
			                                var focusedColIndex = this.focusedCell[0].focusedColIndex;
			                                var focusedRowIndex = this.focusedCell[0].focusedRowIndex;
			                                if (newRowIndex === focusedRowIndex && newColIndex === focusedColIndex) {
			                                    var realRowIndex = this.dataList.getRealRowIndex(focusedRowIndex);
			                                    this.toggle(realRowIndex);
			                                }
			                            }
			                        }
			                    }
			                    var tempOptions = {
			                        editMode: cellInfo.options.focusMode == "none",
			                        dont_fixScroll: this.options.CellClickFixScrollX
			                    };
			                    _wg.extend(tempOptions, options);
			                    tempFocusValid = this.__setFocusedCell(e, srcElem, tempOptions);
			                }
			                if (tempFocusValid === "multiCell") {
			                   focusValid = false;
			                }
			                if (cellInfo.options.embeddedInput) {
			                    this.focusedByApi = false;
			                }
			            }
			            if (e.altKey) {
			                if (this.options.contextMenuAltClick === true) {
			                    this.clickRightButtonCell(e);
			                    return;
			                }
			            }
			            var startPoint;
			            var doClick = true;
			            if (util.isIE()) {
			                startPoint = e.srcElement;
			            } else {
			                startPoint = e.target;
			            }
			            var checkOnCellClickFlag = false; 
			            switch (cellInfo.options.inputType) {
			                case "radio":
			                case "checkbox":
			                    if (startPoint.tagName != "INPUT") {
			                        if (this.options.checkOnCellClick && startPoint.tagName != "LABEL" && !this._getEditDisabled(newRowIndex, newColIndex) && !this.___getEditReadOnly(newRowIndex, newColIndex)) {
			                            var targetCheckbox = srcElem.getElementsByTagName("input")[0];
			                            if (targetCheckbox && (cellInfo.options.inputType == "checkbox" || !targetCheckbox.checked)) {
			                                targetCheckbox.checked = !targetCheckbox.checked;
			                            }
			                            checkOnCellClickFlag = true;
			                        } else {
			                            doClick = false;
			                        }
			                    }
			                    if (this.options.checkboxRadioOnCellClick) {
			                        if ((startPoint.tagName == "LABEL" || startPoint.tagName == "TD") && !this._getEditDisabled(newRowIndex, newColIndex) && this.___getEditReadOnly(newRowIndex, newColIndex)) {
			                            doClick = true;
			                            checkOnCellClickFlag = true;
			                        }
			                    }
			                    break;
			                case "drilldown":
			                    if (this.options.ignoreToggleOnDisabled && this._getEditDisabled(displayRowIndex, colIndex)) {
			                        doClick = false;
			                    }
			            }
			            var fireCellClick = false;
			            var clickFlag;
			            var ignoreReadOnlyCellClick = this.options.ignoreReadOnlyCellClick && this.___getEditReadOnly(newRowIndex, newColIndex);
			            var useHammer = this.isHammerEnabled();
			            if (doClick) {
			                clickFlag = this.setCellClickEdit(srcElem); 
			                if (!clickFlag) {
			                    var editModeEvent = srcElem.getAttribute(dataEditModeEvent) || cellInfo.options.editModeEvent || "";
			                    var isFocusUnchanged = (oldFocusedTd != undefined && oldFocusedTd === srcElem);
			                    var isEditOnClick = (editModeEvent != "" && editModeEvent.toLowerCase() == "onclick") || (editModeEvent == "" && this.options.editModeEvent.toLowerCase() == "onclick") || useSecondClick;
			                    if ((!useHammer || isFocusUnchanged) && isEditOnClick) {
			                        if (!this._getEditDisabled(displayRowIndex, colIndex)) {
			                            var tdIndex = parseInt(srcElem.getAttribute(dataTdIndex));
			                            var trIndex = parseInt(tdIndex / this.realRowDataLength);
			                            var colIndex = parseInt(srcElem.getAttribute(dataColIndex));
			                            var colID = srcElem.getAttribute(dataCol_id);
			                            var newRowIndex = this._getGroupbyDisplayRowIndex(trIndex + originalRowIndex);
			                            var newColIndex = tdIndex % this.realRowDataLength - (this.realRowDataLength - this.oneRowDataLength);
			                            this.hideTooltip();
			                            var cellInfo = this.getCellInfo(newColIndex);
			                            var flag1 = ignoreReadOnlyCellClick || cellInfo.options.inputType === "button" || (!cellInfo.options.embeddedInput && (cellInfo.options.inputType === "checkbox" || cellInfo.options.inputType === "radio") && this.options.preventMultipleClick);
			                            if (!flag1) {
			                                var isBtn = false;
			                                if (cellInfo.internal == false && cellInfo.options.inputType == "custom") {
			                                    var flag2 = cellInfo2.options.inputType === "button" || (!cellInfo2.options.embeddedInput && (cellInfo2.options.inputType === "checkbox" || cellInfo2.options.inputType === "radio") && this.options.preventMultipleClick);
			                                    if (flag2) {
			                                        isBtn = true;
			                                    }
			                                }
			                                if (!isBtn) {
			                                    if (cellInfo.options.inputType == "drilldown" && this.options.ignoreCellClick) {
			                                        if (!clickFlag) {
			                                            event.fireEvent(this, "oncellclick", newRowIndex, newColIndex, colID);
			                                        }
			                                    } else {
			                                        event.fireEvent(this, "oncellclick", newRowIndex, newColIndex, colID);
			                                    }
			                                }
			                            }
			                            fireCellClick = true;
			                        }
			                        if (focusValid) {
			                            this.setEditMode(srcElem);
			                        }
			                    }
			                } else if (checkOnCellClickFlag && !ignoreReadOnlyCellClick) {
			                    var colID = srcElem.getAttribute(dataCol_id);
			                    event.fireEvent(this, "oncellclick", newRowIndex, newColIndex, colID);
			                }
			            }
			            if (!fireCellClick && !this._getEditDisabled(displayRowIndex, colIndex)) {
			                var tdIndex = parseInt(srcElem.getAttribute(dataTdIndex));
			                var trIndex = parseInt(tdIndex / this.realRowDataLength);
			                var colIndex = parseInt(srcElem.getAttribute(dataColIndex));
			                var colID = srcElem.getAttribute(dataCol_id);
			                var newRowIndex = trIndex + originalRowIndex;
			                var newColIndex = tdIndex % this.realRowDataLength - (this.realRowDataLength - this.oneRowDataLength);
			                if (useHammer || (this.options.tooltipDisplay && this.isMobile)) {
			                    this.bodyOver(e, srcElem);
			                } else {
			                    this.hideTooltip();
			                }
			                var cellInfo = this.getCellInfo(newColIndex);
			                var flag1 = ignoreReadOnlyCellClick || cellInfo.options.inputType === "button" ||
			                    (!cellInfo.options.embeddedInput && (cellInfo.options.inputType === "checkbox" || cellInfo.options.inputType === "radio") &&
			                        this.options.preventMultipleClick && !(this.options.checkOnCellClick && startPoint.tagName != "LABEL"));
			                if (!flag1) {
			                    if (cellInfo.internal == false && cellInfo.options.inputType == "custom") {
			                        var flag2 = cellInfo2.options.inputType === "button" || (!cellInfo2.options.embeddedInput && cellInfo2.options.inputType === "checkbox" && this.options.preventMultipleClick);
			                        if (flag2) {
			                            return;
			                        }
			                    }
			                    newRowIndex = this._getGroupbyDisplayRowIndex(newRowIndex);
			                    if (cellInfo.options.inputType == "drilldown" && this.options.ignoreCellClick) {
			                        if (!clickFlag) {
			                            event.fireEvent(this, "oncellclick", newRowIndex, newColIndex, colID);
			                        }
			                    } else {
			                        if (((cellInfo.options.inputType === "radio" || cellInfo.options.inputType === "checkbox") && (startPoint.tagName === "LABEL" || startPoint.tagName === "TD"))
			                            || (cellInfo.options.inputType === "link" && this.options.contentCellClick && startPoint.tagName !== "A")
			                            || (cellInfo.options.inputType === "link" && this.options.useMobileTooltip && (useHammer || (this.options.tooltipDisplay && this.isMobile)))
			                            || (cellInfo.options.inputType === "image" && this.options.contentCellClick && startPoint.tagName !== "IMG")) {
			                        } else {
			                            event.fireEvent(this, "oncellclick", newRowIndex, newColIndex, colID);
			                        }
			                    }
			                }
			            }
			        } catch (e) {
			            exception.printStackTrace(e, null, this);
			        }
			    };
			    dataList.prototype._insertData = function(filteredRowIndex, arrData, direction, options) {
			        try {
			            if (arrData == null) {
			                $l("data is null");
			                return;
			            }
			            var colCnt = this.getColumnCount();
			            var rowCnt = arrData.length / this.getColumnCount();
			            if (arrData) {
			                if (!(arrData instanceof Array)) {
			                    return;
			                }
			                if (!util.isInteger(rowCnt)) {
			                    logger.printLog("[WebSquare.DataCollection.dataController.getMappingData] Inconsistent array. Array length[" + arrData.length + "] is not a multiple of column length[" + colCnt + "].[" + this.id + "]");
			                    return;
			                }
			            }
			            this.broadcast({
			                "gridView": ["notifyBeforeInsertedRow", [filteredRowIndex]]
			            });
			            var insertedDataObj = {};
			            var insertedRowList = [];
			            var start = rowCnt;
			            var end = 0;
			            var d = 1;
			            if (direction < 0) {
			                start = 1;
			                end = rowCnt + 1;
			                d = -1;
			            }
			            var totalRows = this.getTotalRow();
			            var realRowIndex = filteredRowIndex;
			            var bFiltered = this.filterManager.useFilter();
			            if (bFiltered) {
			                realRowIndex = totalRows;
			            } else if (realRowIndex > totalRows) {
			                realRowIndex = totalRows;
			            }
			            if (!this.options.depthColumn && filteredRowIndex > totalRows) {
			                filteredRowIndex = totalRows;
			            }
			            var insertIdx = realRowIndex * colCnt;
			            var insertedData = [];
			            insertedData.length = arrData.length;
			            util.insertArray(this.dataArr, insertedData, insertIdx);
			            util.insertArray(this.originalDataArr, insertedData, insertIdx);
			            var displayRowIndex = this.filteredRowIndexArr.length;
			            if (this.options.depthColumn) { 
			                for (var i = 0; i < this.filteredRowIndexArr.length; i++) {
			                    if (this.filteredRowIndexArr.length == 1) {
			                        if (this.filteredRowIndexArr[i] == realRowIndex) {
			                            displayRowIndex = i;
			                        } else {
			                            displayRowIndex = i + 1;
			                        }
			                    } else if (this.filteredRowIndexArr[i] <= realRowIndex && realRowIndex < this.filteredRowIndexArr[i + 1]) {
			                        displayRowIndex = i;
			                        break;
			                    } else if (realRowIndex == this.filteredRowIndexArr[i + 1]) {
			                        displayRowIndex = i + 1;
			                        break;
			                    }
			                }
			            } else {
			                displayRowIndex = filteredRowIndex;
			            }
			            for (var i = 0; i < this.filteredRowIndexArr.length; i++) {
			                if (this.filteredRowIndexArr[i] >= realRowIndex) {
			                    this.filteredRowIndexArr[i] += rowCnt;
			                }
			            }
			            var insertedFilteredArr = [];
			            var insertedStatusArr = [];
			            for (var i = 0; i < rowCnt; i++) {
			                var idx = realRowIndex + i;
			                if (bFiltered) {
			                    idx = realRowIndex + rowCnt - i - 1;
			                }
			                insertedFilteredArr.push(idx);
			                if (!this.options.ignoreStatus) {
			                    insertedStatusArr.push("C");
			                }
			            }
			            util.insertArray(this.filteredRowIndexArr, insertedFilteredArr, displayRowIndex);
			            if (!this.options.ignoreStatus) {
			                util.insertArray(this.rowStatusArr, insertedStatusArr, realRowIndex);
			            }
			            for (var row = start; row * d > end * d; row -= d) {
			                var insertedRowIndex = filteredRowIndex + row - 1;
			                insertedDataObj[insertedRowIndex] = [];
			                insertedRowList.push(insertedRowIndex);
			                for (var col = 0; col < colCnt; col++) {
			                    var value = arrData[colCnt * (row - 1) + col];
			                    this._setCellData({
			                        filteredRowIndex: insertedRowIndex,
			                        colID: col,
			                        value: value,
			                        noEvent: true
			                    });
			                    insertedDataObj[insertedRowIndex].push(value);
			                }
			            }
			            this.broadcast({
			                "gridView": ["notifyAfterInsertedRowArr", [filteredRowIndex, rowCnt]],
			                "_bForceBroadcast": true
			            });
			            var gridOpt = {};
			            if (options && options.fixScroll === true) {
			                gridOpt.refreshScroll = false;
			                gridOpt.keepTop = true;
			            } else {
			                gridOpt.refreshScroll = true;
			            }
			            var realRowIndex = this.filteredRowIndexArr[filteredRowIndex];
			            this.broadcast({
			                "gridView": ["notifyDataChanged", [gridOpt]],
			                "linkedDataList": ["notifyRowInserted", [realRowIndex, insertedRowList]],
			                "fusionChart": ["refresh"],
			                "fwFunnelChart": ["refresh"],
			                "fwSparkChart": ["refresh"],
			                "fwPyramidChart": ["refresh"],
			                "fwGanttChart": ["refresh"],
			                "pivot": ["refreshItemset", [{
			                    type: "render",
			                    refresh: true
			                }]],
			                "treeview" : ["notifyInsertData", [insertedRowList.join(","), !this._getBroadcastAll()]],
			                "realtimeView": ["notifyRowInserted", [realRowIndex, insertedRowList]],
			                "generalComp": "both"
			            });
			            event.fireEvent(this, "oninsertrow", {
			                "insertedDataObj": insertedDataObj
			            });
			        } catch (e) {
			            exception.printStackTrace(e);
			        }
			    };	
				// 20260330 waea_715
				/*
						util._getStyleNameConvert = function(style, infoArr) {
						        try {
						            var ret = {};
						            if (!infoArr) {
						                return ret;
						            }
						            var keyMap = {
						                backgroundColor: "background-color",
						                textAlign: "text-align",
						                color: "color",
						                fontSize: "font-size",
						                fontWeight: "font-weight",
						                fontFamily: "font-family",
						                borderLeft: "border-left",
						                borderRight: "border-right",
						                "text-decoration": "text-decoration"
						            };
						            for (var l = 0; l < infoArr.length; l++) {
						                var origKey = infoArr[l];
						                if (!origKey) continue;
						                if (!(origKey in keyMap)) continue;
						                var val = style[origKey];
						                if (!val) continue;
						                var key = keyMap[origKey];
						                var retVal = val;
						                if (origKey === "text-decoration") {
						                    if (val !== "underline" && val !== "line-through") {
						                        continue;
						                    }
						                }
						                if (retVal) {
						                    ret[key] = retVal;
						                }
						            }
						            return ret;
						        } catch (e) {
						            exception.printStackTrace(e, null, this);
						        }
						    };
						    util.getStyleFromCssStrWithSpecificity = function(cssStr, infoArr) {
						        try {
						            if (!infoArr) return null;
						            var ret = {};
						            var cssArr = cssStr.split(" ");
						            for (var l = 0; l < cssArr.length; l++) {
						                var className = cssArr[l];
						                if (!className) continue;
						                for (var i = 0; i < document.styleSheets.length; i++) {
						                    var sheet = document.styleSheets[i];
						                    var rules;
						                    try {
						                        rules = sheet.cssRules || sheet.rules;
						                    } catch (e) {
						                        continue;
						                    }
						                    if (!rules) continue;
						                    for (var j = 0; j < rules.length; j++) {
						                        var rule = rules[j];
						                        var selectorText = rule.selectorText;
						                        if (!selectorText) continue;
						                        var selectors = selectorText.split(",");
						                        for (var s = 0; s < selectors.length; s++) {
						                            var sel = selectors[s].replace(/^\s+|\s+$/g, "");
						                            if (sel.indexOf("." + className) === -1) continue;
						                            var idCount = 0, classCount = 0, elementCount = 0;
						                            for (var c = 0; c < sel.length; c++) {
						                                var ch = sel.charAt(c);
						                                if (ch === "#") idCount++;
						                                else if (ch === ".") classCount++;
						                                else if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) elementCount++;
						                            }
						                            var specificity = idCount * 100 + classCount * 10 + elementCount;
						                            if (!rule._specificity || specificity >= rule._specificity) {
						                                rule._specificity = specificity;
						                                for (var k = 0; k < infoArr.length; k++) {
						                                    var styleName = infoArr[k];
						                                    var val = rule.style[styleName];
						                                    if (val && val !== "") {
						                                        ret[styleName] = val;
						                                    }
						                                }
						                            }
						                        }
						                    }
						                }
						            }
						            ret = util._getStyleNameConvert(ret, infoArr);
						            return Object.keys(ret).length > 0 ? ret : null;
						        } catch (e) {
						            exception.printStackTrace(e, null, this);
						        }
						    };
						    gridView.prototype._getExcelStyle = function(options) {
						        try {
						            var excelClassStyleInfoArr = ["backgroundColor","color","textAlign","fontSize","fontWeight","fontFamily","text-decoration","borderLeft","borderRight"];
						            var colStyleData = {};
						            var rowStyleData = {};
						            var cellStyleData = {};
						            var headerStyleData = {};
						            var footerStyleData = {};
						            var _getClassStyleValue = function(classStyle, camelKey, dashKey) {
						                if (!classStyle) {
						                    return "";
						                }
						                return classStyle[camelKey] || classStyle[dashKey] || "";
						            };
						            var _getClassStyle = function(classStyle, styleObj) {
						                var backgroundColor = _getClassStyleValue(classStyle, "backgroundColor", "background-color");
						                var color = _getClassStyleValue(classStyle, "color", "color");
						                var textAlign = _getClassStyleValue(classStyle, "textAlign", "text-align");
						                var fontSize = _getClassStyleValue(classStyle, "fontSize", "font-size");
						                var fontWeight = _getClassStyleValue(classStyle, "fontWeight", "font-weight");
						                var fontFamily = _getClassStyleValue(classStyle, "fontFamily", "font-family");
						                var textDecoration = _getClassStyleValue(classStyle, "text-decoration", "text-decoration");
						                var borderLeft = _getClassStyleValue(classStyle, "borderLeft", "border-left");
						                var borderRight = _getClassStyleValue(classStyle, "borderRight", "border-right");
						                if (backgroundColor) {
						                    styleObj["background-color"] = backgroundColor;
						                }
						                if (color) {
						                    styleObj["color"] = color;
						                }
						                if (textAlign) {
						                    styleObj["text-align"] = textAlign;
						                }
						                if (fontSize) {
						                    styleObj["font-size"] = fontSize;
						                }
						                if (fontWeight) {
						                    styleObj["font-weight"] = fontWeight;
						                }
						                if (fontFamily) {
						                    styleObj["font-family"] = fontFamily;
						                }
						                if (textDecoration == "underline" || textDecoration == "line-through") {
						                    styleObj["text-decoration"] = textDecoration;
						                }
						                if (borderLeft) {
						                    styleObj["border-left"] = borderLeft;
						                }
						                if (borderRight) {
						                    styleObj["border-right"] = borderRight;
						                }
						            };
						            var colCnt = this.getColumnCount();
						            if (options.useClass == true) {
						                for (var i = 0; i < colCnt; i++) {
						                    var cellInfo = this.getCellInfo(i);
						                    var colClassName = cellInfo.options.className;
						                    if (colClassName) {
						                        var classStyle = util.getStyleFromCssStrWithSpecificity(colClassName, excelClassStyleInfoArr);
						                        if (classStyle) {
						                            if (colStyleData[i] === undefined) {
						                                colStyleData[i] = {};
						                            }
						                            _getClassStyle(classStyle, colStyleData[i]);
						                        }
						                    }
						                }
						            }
						            var tempColumStylekey = 0;
						            for (var i = 0 ;i <this.struct.body.rowArr.length ; i++) {
						                for (var j=0 ; j<this.struct.body.rowArr[i].length ; j++) {
						                    var cell = this.struct.body.rowArr[i][j];
						                    if (cell['textAlign']) {
						                        tempColumStylekey++;
						                        continue;
						                    }
						                    if (!cell['inputType']) {
						                        tempColumStylekey++;
						                        continue;
						                    }
						                    var cellInfo = this.getCellInfo(parseInt(tempColumStylekey, 10));
						                    if (cellInfo && cellInfo.options.textAlign) {
						                        var val = cellInfo.options.textAlign;
						                        if (val && val !="") {
						                            var tempColumStyleInfo = {};
						                            tempColumStyleInfo["text-align"] = val;
						                            tempColumStyleInfo["style"] = 'text-align:' + val;
						                            if (!(tempColumStylekey in this.columnStyleValueObj)) {
						                               this.columnStyleValueObj[tempColumStylekey] = tempColumStyleInfo
						                            }
						                        }
						                    }
						                    tempColumStylekey++;
						                }
						            }
						            for (var i in this.columnStyleValueObj) {
						                var styleObj = {};
						                for (var j in this.columnStyleValueObj[i]) {
						                    if (j != "style") {
						                        styleObj[j] = this.columnStyleValueObj[i][j];
						                    }
						                }
						                var cellInfo = this.getCellInfo(parseInt(i, 10));
						                if (cellInfo) {
						                    var txtDecoration = this.getColumnStyleValue(parseInt(i, 10), "text-decoration");
						                    if (txtDecoration == "underline" || txtDecoration == "line-through") {
						                        styleObj["text-decoration"] = txtDecoration;
						                    }
						                }
						                if (cellInfo && cellInfo.options.textAlign) {
						                    var txtAlign = "";
						                    txtAlign = this.getColumnStyleValue(parseInt(i, 10), "text-align");
						                    if (txtAlign == "") {
						                        txtAlign = cellInfo.options.textAlign;
						                        if (txtAlign == "") {
						                            txtAlign = "center";
						                        }
						                    }
						                    styleObj["text-align"] = txtAlign;
						                }
						                if (colStyleData[i] === undefined) {
						                    colStyleData[i] = styleObj;
						                } else {
						                    for (var j in styleObj) {
						                        colStyleData[i][j] = styleObj[j];
						                    }
						                }
						            }
						            for (var i = 0; i < this.rowStyleArr.length; i++) {
						                if (this.rowStyleArr[i]) {
						                    var styleObj = {};
						                    for (var j in this.rowStyleValueObj[this.rowStyleArr[i]]) {
						                        if (j != "style") {
						                            styleObj[j] = this.rowStyleValueObj[this.rowStyleArr[i]][j];
						                        }
						                    }
						                    var displayRowIndex = this.getDisplayRowIndex(i);
						                    if (!isNaN(displayRowIndex)) {
						                        rowStyleData[displayRowIndex] = styleObj;
						                    }
						                }
						            }
						            for (var item in this.cellStyleArr) {
						                if (this.cellStyleArr[item] && !isNaN(item)) {
						                    var styleObj = {};
						                    var realRowIndex = parseInt(item / this.oneRowDataLength, 10);
						                    var displayRowIndex = this.getDisplayRowIndex(realRowIndex);
						                    var colIndex = item % this.oneRowDataLength;
						                    for (var j in this.cellStyleValueObj[this.cellStyleArr[item]]) {
						                        if (j != "style") {
						                            if (this.cellStyleValueObj[this.cellStyleArr[item]][j]) {
						                                styleObj[j] = this.cellStyleValueObj[this.cellStyleArr[item]][j];
						                            }
						                        }
						                    }
						                    cellStyleData[displayRowIndex + "," + colIndex] = styleObj;
						                }
						            }
						            var _getClassStyle = function(classStyle, styleObj) {
						                if (classStyle.backgroundColor) {
						                    styleObj["background-color"] = classStyle.backgroundColor;
						                }
						                if (classStyle.color) {
						                    styleObj["color"] = classStyle.color;
						                }
						                if (classStyle.textAlign) {
						                    styleObj["text-align"] = classStyle.textAlign;
						                }
						                if (classStyle.fontSize) {
						                    styleObj["font-size"] = classStyle.fontSize;
						                }
						                if (classStyle.fontWeight) {
						                    styleObj["font-weight"] = classStyle.fontWeight;
						                }
						                if (classStyle.fontFamily) {
						                    styleObj["font-family"] = classStyle.fontFamily;
						                }
						                if (classStyle["text-decoration"] == "underline" || classStyle["text-decoration"] == "line-through") {
						                    styleObj["text-decoration"] = classStyle["text-decoration"];
						                }
						                if (classStyle.borderLeft) {
						                    styleObj["border-left"] = classStyle.borderLeft;
						                }
						                if (classStyle.borderRight) {
						                    styleObj["border-right"] = classStyle.borderRight;
						                }
						            };
						            if (options.useClass == true) {
						                for (var i = 0; i < this.cellClassArr.length; i++) {
						                    if (this.cellClassArr[i]) {
						                        var styleObj = {};
						                        var realRowIndex = parseInt(i / this.oneRowDataLength, 10);
						                        var displayRowIndex = this.getDisplayRowIndex(realRowIndex);
						                        var colIndex = i % this.oneRowDataLength;
						                        var classStyle = WebSquare.util.getStyleFromCssStr(this.cellClassArr[i], ["backgroundColor","color","textAlign","fontSize","fontWeight","fontFamily","text-decoration","borderLeft","borderRight"]);
						                        if (cellStyleData[displayRowIndex + "," + colIndex]) {
						                            styleObj = cellStyleData[displayRowIndex + "," + colIndex];
						                        }
						                        if (classStyle) {
						                            _getClassStyle(classStyle, styleObj);
						                        }
						                        if (Object.keys(styleObj).length !== 0) {
						                            cellStyleData[displayRowIndex + "," + colIndex] = styleObj;
						                        }
						                    }
						                }
						                for (var i = 0; i < this.rowClassArr.length; i++) {
						                    if (this.rowClassArr[i]) {
						                        var styleObj = {};
						                        var displayRowIndex = this.getDisplayRowIndex(i);
						                        var classStyle = WebSquare.util.getStyleFromCssStr(this.rowClassArr[i], ["backgroundColor","color","textAlign","fontSize","fontWeight","fontFamily","text-decoration","borderLeft","borderRight"]);
						                        if (rowStyleData[displayRowIndex]) {
						                            styleObj = rowStyleData[displayRowIndex];
						                        }
						                        if (classStyle) {
						                            _getClassStyle(classStyle, styleObj);
						                        }
						                        if (Object.keys(styleObj).length !== 0) {
						                            rowStyleData[displayRowIndex] = styleObj;
						                        }
						                    }
						                }
						            }
						            if (this.options.disabledBackgroundColor || this.options.disabledFontColor) {
						                var styleObj = {};
						                if (this.options.disabledBackgroundColor) {
						                    styleObj["background-color"] = this.options.disabledBackgroundColor;
						                }
						                if (this.options.disabledFontColor) {
						                    styleObj["color"] = this.options.disabledFontColor;
						                }
						                var colCnt = this.getColumnCount();
						                var rowCnt = this.getRowCount();
						                var useDrilldown = !!(this.isDrillDown && this._dataList.options.depthColumn);
						                for (var i = 0; i < rowCnt; i++) {
						                    for (var j = 0; j < colCnt; j++) {
						                        if (this._getEditDisabled(i, j, useDrilldown)) {
						                            if (cellStyleData[i + "," + j]) {
						                                if (this.options.disabledBackgroundColor) {
						                                    cellStyleData[i + "," + j]["background-color"] = this.options.disabledBackgroundColor;
						                                }
						                                if (this.options.disabledFontColor) {
						                                    cellStyleData[i + "," + j]["color"] = this.options.disabledFontColor;
						                                }
						                            } else {
						                                cellStyleData[i + "," + j] = styleObj;
						                            }
						                        }
						                    }
						                }
						            }
						            var dataHeader_id = util.getDataPrefix("header_id");
						            var headerBackColor = "";
						            var headTds = this.getDomList("head_tds", "th", this.getElementById(this.id + "_head_table"));
						            for (var i = this.defaultColCnt; i < headTds.length; i++) {
						                var resultStr = "";
						                var headerColId = headTds[i].id.replace(this.id + "_", "");
						                var headerObj = this.headerCellStyleValueObj[headerColId];
						                if (headerObj && headerObj["background-color"]) {
						                    headerBackColor = headerObj["background-color"];
						                } else if (options.headerColor) {
						                    headerBackColor = options.headerColor;
						                } else {
						                    headerBackColor = WebSquare.style.getStyle(headTds[i], "background-color");
						                }
						                resultStr += ("color:" + WebSquare.style.getStyle(headTds[i], "color") + ";");
						                resultStr += ("background-color:" + headerBackColor + ";");
						                resultStr += ("font-weight:" + WebSquare.style.getStyle(headTds[i], "font-weight") + ";");
						                resultStr += ("font-family:" + WebSquare.style.getStyle(headTds[i], "font-family") + ";");
						                resultStr += ("text-align:" + WebSquare.style.getStyle(headTds[i], "text-align") + ";");
						                var txtDecoration = WebSquare.style.getStyle(headTds[i], "text-decoration");
						                if (txtDecoration == "underline" || txtDecoration == "line-through") {
						                    resultStr += "text-decoration:underline;";
						                }
						                headerStyleData[headTds[i].getAttribute(dataHeader_id)] = resultStr;
						            }
						            if (this.hasFooter) {
						                var dataFooter_id = util.getDataPrefix("footer_id");
						                var footTds = this.getDomList("foot_tds", "th", this.getElementById(this.id + "_foot_table"));
						                for (var i = this.defaultColCnt; i < footTds.length; i++) {
						                    var resultStr = "";
						                    resultStr += ("color:" + WebSquare.style.getStyle(footTds[i], "color") + ";");
						                    resultStr += ("background-color:" + WebSquare.style.getStyle(footTds[i], "background-color") + ";");
						                    resultStr += ("font-weight:" + WebSquare.style.getStyle(footTds[i], "font-weight") + ";");
						                    resultStr += ("font-family:" + WebSquare.style.getStyle(footTds[i], "font-family") + ";");
						                    resultStr += ("text-align:" + WebSquare.style.getStyle(footTds[i], "text-align") + ";");
						                    var txtDecoration = WebSquare.style.getStyle(footTds[i], "text-decoration");
						                    if (txtDecoration == "underline" || txtDecoration == "line-through") {
						                        resultStr += "text-decoration:underline;";
						                    }
						                    footerStyleData[footTds[i].getAttribute(dataFooter_id)] = resultStr;
						                }
						            }
						            var styleData = JSON.stringify({
						                row: rowStyleData,
						                col: colStyleData,
						                cell: cellStyleData,
						                header: headerStyleData,
						                footer: footerStyleData
						            });
						            return styleData;
						        } catch (e) {
						            exception.printStackTrace(e, null, this);
						        }
						    };		
							*/
	// 2026.04.03 waea_729	
	selectbox.prototype.setSelectItemArr = function() {
	        try {
	            // sort
	            if (this.options.sortOption != "") {
	                var sortedArr = [];
	                var toStringFunc = null;
	                if (this.options.sortOption == "label") {
	                    toStringFunc = function() {
	                        return this.label;
	                    };
	                } else if (this.options.sortOption == "value") {
	                    toStringFunc = function() {
	                        return this.value;
	                    };
	                }
	                for (var i = 0; i < this.itemArr.length; i++) {
	                    var item = this.itemArr[i];
	                    item.toString = toStringFunc;
	                    sortedArr.push(item);
	                }
	                sortedArr.sort();
	                if (this.options.sortMethod == "descending") {
	                    sortedArr.reverse();
	                }
	                this.itemArr = sortedArr;
	            }
	            for (var i = 0; i < this.itemArr.length; i++) {
	                this.itemArr[i].orgLabel = this.itemArr[i].orgLabel || this.itemArr[i].label;
	                this.itemArr[i].label = this.getItemText(i);
	            }
	            // allOption & chooseOption
	            if (this.options.optionOrder == "all") {
	                if (this.options.chooseOption == true) {
	                    var label = this._getChooseOptionLabel();
	                    label = _wg.xml.decode(label).replace("&nbsp;", " ");
	                    this.itemArr = [{
	                        label: label,
	                        value: this.options.chooseOptionValue,
	                        orgLabel: label
	                    }].concat(this.itemArr);
	                }
	                if (this.options.allOption == true) {
	                    this.itemArr = [{
	                        label: this.defaultAllOptionLabel,
	                        value: _wg.allValue,
	                        orgLabel: this.defaultAllOptionLabel
	                    }].concat(this.itemArr);
	                }
	            } else {
	                if (this.options.allOption == true) {
	                    this.itemArr = [{
	                        label: this.defaultAllOptionLabel,
	                        value: _wg.allValue,
	                        orgLabel: this.defaultAllOptionLabel
	                    }].concat(this.itemArr);
	                }
	                if (this.options.chooseOption == true) {
	                    var label = this._getChooseOptionLabel();
	                    label = _wg.xml.decode(label).replace("&nbsp;", " ");
	                    this.itemArr = [{
	                        label: label,
	                        value: this.options.chooseOptionValue,
	                        orgLabel: label
	                    }].concat(this.itemArr);
	                }
	            }
	        } catch (e) {
	            exception.printStackTrace(e, null, this);
	        }
	    };				
		// 20260406 waea 707 bigdecimall 패치
		gridView.prototype._footercolsum = function(colID, conditionColumn, operator, conditionValue) {
		        try {
		            if (!this.footerTempSum) {
		                this.footerTempSum = [];
		            }
		            var columnID = colID;
		            if (!this.options.groupbyStatus && (conditionColumn && conditionColumn.length > 0) && (conditionValue && conditionValue.length > 0)) {
		                columnID = colID + "_" + conditionValue.join();
		            }
		            if (!this.footerTempSum[columnID]) {
		                this.footerTempSum[columnID] = {};
		            }
		            if (this.footerTempSum[columnID].sum === undefined || this.footerTempSum[columnID].sum === "") {
		                var retValue = "";
		                var rowCount = 5000;
		                if (this.groupbyStatus.grouped) {
		                    retValue = this.groupExpression(this._dataList.filteredRowIndexArr, 0, this._dataList.filteredRowIndexArr.length - 1, "SUM('" + colID + "')");
		                } else {
		                    var targetInfo = {};
		                    if (!this.options.groupbyStatus) {
		                        targetInfo = {
		                            conditionColumn: conditionColumn,
		                            operator: operator,
		                            conditionValue: conditionValue,
		                            blank: false,
		                        };
		                    }
		                    var dataArr = this.getColumnAllDataArray(colID, targetInfo);
		                    var dataType = this.getColumnOption(colID, "dataType");
		                    var isBigDecimal = false;
		                    if (dataType === "bigDecimal" || dataType === "euro" || dataType === "tenge" || dataType == "rupee") {
		                        isBigDecimal = true;
		                    }
		                    if (!isBigDecimal) {
		                        try {
		                            var dlDataType = this._dataList.getCellInfo(colID).options.dataType;
		                            if (dlDataType === "bigDecimal" || dlDataType === "euro" || dlDataType === "tenge" || dlDataType === "rupee") {
		                                isBigDecimal = true;
		                            }
		                        } catch (e) {}
		                    }
		                    if (dataArr.length > 0 && (isBigDecimal || this.options.useCurrency === "true")) {
		                        var bigValue = WebSquare.bigDecimal("0");
		                        for (var i = 0; i < dataArr.length; i++) {
		                            if (dataArr[i].replace(/^\s+|\s+$/g, "") == "") {
		                                dataArr[i] = "0";
		                            }
		                        }
		                        for (var j = 0; j < dataArr.length; j++) {
		                            dataArr[j] = WebSquare.bigDecimal(dataArr[j]);
		                            bigValue = bigValue.plus(dataArr[j]);
		                        }
		                        retValue = bigValue.toString();
		                    } else if (dataArr.length > 0) {
		                        if (dataArr.length > rowCount) {
		                            var sliceCount = Math.ceil((dataArr.length / rowCount));
		                            var count = 0;
		                            var slicevalue;
		                            retValue = 0;
		                            for (var i = 0; i < sliceCount; i++) {
		                                var sliceArr = dataArr.slice(count, rowCount * (i + 1));
		                                for (var s = 0; s < sliceArr.length; s++) {
		                                    if (sliceArr[s].replace(/^\s+|\s+$/g, "") == "") {
		                                        sliceArr[s] = "0";
		                                    }
		                                    sliceArr[s] = (sliceArr[s] - 0) + "";
		                                }
		                                slicevalue = util.sum(sliceArr);
		                                count = parseInt(count, 10) + parseInt(sliceArr.length, 10);
		                                retValue = parseFloat(retValue, 10) + parseFloat(slicevalue, 10);
		                            }
		                        } else {
		                            retValue = util.sum(dataArr);
		                        }
		                    }
		                }
		                this.footerTempSum[columnID].sum = retValue;
		            }
		            return util.setPrecision(this.footerTempSum[columnID].sum);
		        } catch (e) {
		            exception.printStackTrace(e, null, this);
		        }
		    };
		    gridView.prototype.footercolavg = function(colID) {
		        try {
		            var dataArr = this.getColumnAllDataArray(colID);
		            if (!this.footerTempSum) {
		                this.footerTempSum = [];
		            }
		            if (!this.footerTempSum[colID]) {
		                this.footerTempSum[colID] = {};
		            }
		            var retValue = "";
		            var rowCount = 5000;
		            if (this.groupbyStatus.grouped) {
		                retValue = this.groupExpression(this._dataList.filteredRowIndexArr, 0, this._dataList.filteredRowIndexArr.length - 1, "AVG('" + colID + "')");
		                return retValue;
		            } else {
		                if (this.footerTempSum[colID].sum === undefined || this.footerTempSum[colID].sum === "") {
		                    var dataType = this.getColumnOption(colID, "dataType");
		                    var isBigDecimal = (dataType == "bigDecimal");
		                    if (!isBigDecimal) {
		                        try {
		                            var dlDataType = this._dataList.getCellInfo(colID).options.dataType;
		                            if (dlDataType === "bigDecimal") {
		                                isBigDecimal = true;
		                            }
		                        } catch (e) {}
		                    }
		                    if (dataArr.length > 0 && (isBigDecimal || this.options.useCurrency === "true")) {
		                        var bigValue = WebSquare.bigDecimal("0");
		                        for (var i = 0; i < dataArr.length; i++) {
		                            if (dataArr[i].replace(/^\s+|\s+$/g, "") == "") {
		                                dataArr[i] = "0";
		                            }
		                        }
		                        for (var j in dataArr) {
		                            dataArr[j] = WebSquare.bigDecimal(dataArr[j]);
		                            bigValue = bigValue.plus(dataArr[j]);
		                        }
		                        return bigValue.divide(WebSquare.bigDecimal(dataArr.length)).toString();
		                    } else if (dataArr.length > 0) {
		                        if (dataArr.length > rowCount) {
		                            var sliceCount = Math.ceil((dataArr.length / rowCount));
		                            var count = 0;
		                            var slicevalue;
		                            retValue = 0;
		                            for (var i = 0; i < sliceCount; i++) {
		                                var sliceArr = dataArr.slice(count, rowCount * (i + 1));
		                                for (var s = 0; s < sliceArr.length; s++) {
		                                    if (sliceArr[s].replace(/^\s+|\s+$/g, "") == "") {
		                                        sliceArr[s] = "0";
		                                    }
		                                }
		                                slicevalue = util.sum(sliceArr);
		                                count = parseInt(count, 10) + parseInt(sliceArr.length, 10);
		                                retValue = parseFloat(retValue, 10) + parseFloat(slicevalue, 10);
		                            }
		                        } else {
		                            retValue = util.sum(dataArr);
		                        }
		                    }
		                    this.footerTempSum[colID].sum = retValue;
		                }
		                if (this.footerTempSum[colID].sum === "") {
		                    return "";
		                } else {
		                    if (this.cellInfoHash[colID] && this.cellInfoHash[colID].options.dataType == "bigDecimal") {
		                        retValue = WebSquare.bigDecimal(this.footerTempSum[colID].sum).divide(WebSquare.bigDecimal(dataArr.length)).toString();
		                    } else {
		                        retValue = this.footerTempSum[colID].sum / dataArr.length;
		                    }
		                    return retValue;
		                }
		            }
		        } catch (e) {
		            exception.printStackTrace(e, null, this);
		        }
		    };
		    gridView.prototype.footercolmax = function(colID) {
		        try {
		            if (!this.footerTempSum) {
		                this.footerTempSum = [];
		            }
		            if (!this.footerTempSum[colID]) {
		                this.footerTempSum[colID] = {};
		            }
		            if (this.footerTempSum[colID].max === undefined || this.footerTempSum[colID].max === "") {
		                var max = null;
		                if (this.groupbyStatus.grouped) {
		                    max = this.groupExpression(this._dataList.filteredRowIndexArr, 0, this._dataList.filteredRowIndexArr.length - 1, "MAX('" + colID + "')");
		                } else {
		                    var dataArr = this.getColumnAllDataArray(colID);
		                    var dataType = this.getColumnOption(colID, "dataType");
		                    var isBigDecimal = (dataType == "bigDecimal");
		                    if (!isBigDecimal) {
		                        try {
		                            var dlDataType = this._dataList.getCellInfo(colID).options.dataType;
		                            if (dlDataType === "bigDecimal") {
		                                isBigDecimal = true;
		                            }
		                        } catch (e) {}
		                    }
		                    if (dataArr.length > 0 && (isBigDecimal || this.options.useCurrency === "true")) {
		                        var bigValue;
		                        for (var i = 0; i < dataArr.length; i++) {
		                            if (dataArr[i].replace(/^\s+|\s+$/g, "") == "") {
		                                dataArr[i] = "0";
		                            }
		                        }
		                        for (var j in dataArr) {
		                            dataArr[j] = WebSquare.bigDecimal(dataArr[j]);
		                            bigValue = (bigValue == null) ? dataArr[j] : bigValue.compare(dataArr[j], false);
		                        }
		                        max = bigValue.toString();
		                    } else {
		                        for (var i = 0; i < dataArr.length; i++) {
		                            var data = parseFloat(dataArr[i]);
		                            if (!isNaN(data)) {
		                                if (max == null || max < data) {
		                                    max = data;
		                                }
		                            }
		                        }
		                        max = (max == null) ? "" : max;
		                        max = util.setPrecision(max);
		                    }
		                    this.footerTempSum[colID].max = max;
		                }
		            }
		            return this.footerTempSum[colID].max;
		        } catch (e) {
		            exception.printStackTrace(e, null, this);
		        }
		    };
		    gridView.prototype.footercolmin = function(colID) {
		        try {
		            if (!this.footerTempSum) {
		                this.footerTempSum = [];
		            }
		            if (!this.footerTempSum[colID]) {
		                this.footerTempSum[colID] = {};
		            }
		            if (this.footerTempSum[colID].min === undefined || this.footerTempSum[colID].min === "") {
		                var min = null;
		                if (this.groupbyStatus.grouped) {
		                    min = this.groupExpression(this._dataList.filteredRowIndexArr, 0, this._dataList.filteredRowIndexArr.length - 1, "MIN('" + colID + "')");
		                } else {
		                    var dataArr = this.getColumnAllDataArray(colID);
		                    var dataType = this.getColumnOption(colID, "dataType");
		                    var isBigDecimal = (dataType == "bigDecimal");
		                    if (!isBigDecimal) {
		                        try {
		                            var dlDataType = this._dataList.getCellInfo(colID).options.dataType;
		                            if (dlDataType === "bigDecimal") {
		                                isBigDecimal = true;
		                            }
		                        } catch (e) {}
		                    }
		                    if (dataArr.length > 0 && (isBigDecimal || this.options.useCurrency === "true")) {
		                        var bigValue;
		                        for (var i = 0; i < dataArr.length; i++) {
		                            if (dataArr[i].replace(/^\s+|\s+$/g, "") == "") {
		                                dataArr[i] = "0";
		                            }
		                        }
		                        for (var j in dataArr) {
		                            dataArr[j] = WebSquare.bigDecimal(dataArr[j]);
		                            bigValue = (bigValue == null) ? dataArr[j] : bigValue.compare(dataArr[j], true);
		                        }
		                        min = bigValue.toString();
		                    } else {
		                        for (var i = 0; i < dataArr.length; i++) {
		                            var data = parseFloat(dataArr[i]);
		                            if (!isNaN(data)) {
		                                if (min == null || min > data) {
		                                    min = data;
		                                }
		                            }
		                        }
		                        min = (min == null) ? "" : min;
		                        min = util.setPrecision(min);
		                    }
		                    this.footerTempSum[colID].min = min;
		                }
		            }
		            return this.footerTempSum[colID].min;
		        } catch (e) {
		            exception.printStackTrace(e, null, this);
		        }
		    };
		    gridView.prototype._initFooterFormatter = function(colID, dataType, displayFormat, displayFormatter, scope_id, id, changeCurrency) {
		        try {
		            if (colID) {
		                var cellInfo = this.getCellInfo(colID);
		                var footerDataType = dataType ? dataType : cellInfo.options.dataType;
		                var format = displayFormat;
		                var defaultDelimiter;
		                var defaultDecimalDelimiter;
		                if (footerDataType == "euro") {
		                    if (!displayFormat) {
		                        format = this.options.euroMask || core.getConfiguration('/WebSquare/' + this.options.pluginName + '/column[@inputType="text"]/dataType[@valueType="' + footerDataType + '"]/euroMask/@value') || "";
		                    }
		                    defaultDelimiter = ".";
		                    defaultDecimalDelimiter = ","
		                } else if (footerDataType == "rupee") {
		                    if (!displayFormat) {
		                        format = this.options.rupeeMask || core.getConfiguration('/WebSquare/' + this.options.pluginName + '/column[@inputType="text"]/dataType[@valueType="' + footerDataType + '"]/rupeeMask/@value') || "";
		                    }
		                    defaultDelimiter = ",";
		                    defaultDecimalDelimiter = "."
		                } else if (footerDataType == "tenge") {
		                    if (!displayFormat) {
		                        format = this.options.tengeMask || core.getConfiguration('/WebSquare/' + this.options.pluginName + '/column[@inputType="text"]/dataType[@valueType="' + footerDataType + '"]/tengeMask/@value') || "";
		                    }
		                    defaultDelimiter = " ";
		                    defaultDecimalDelimiter = ","
		                } else if (changeCurrency && (footerDataType === "number" || footerDataType === "float" || footerDataType === "bigDecimal")) {
		                    if (!displayFormat) {
		                        format = this.options.numberMask || core.getConfiguration('/WebSquare/input/dataType[@valueType="' + footerDataType + '"]/numberMask/@value') || "";
		                    }
		                    defaultDelimiter = ",";
		                    defaultDecimalDelimiter = "."
		                }
		                return WebSquare.format.createFormatter(dataType, format, displayFormatter, defaultDelimiter || null, defaultDecimalDelimiter || null, null, scope_id, id);
		            } else {
		                return WebSquare.format.createFormatter(dataType, displayFormat, displayFormatter, null, null, null, scope_id, id);
		            }
		        } catch (e) {
		            exception.printStackTrace(e, null, this);
		        }
		    };			
			// 0415 waea_748
			gridView.prototype.setColumnOrder = function(newColumnOrder) {
			        try {
			            if (this.userEventList.length > 0) {
			                var bSkip;
			                for (var i = this.userEventList.length - 1; i >= 0; i--) {
			                    if (this.userEventList[i].name == "ongroupby") {
			                        bSkip = true;
			                        break;
			                    }
			                }
			                if (bSkip === true) {
			                    return;
			                }
			            }
			            var hasRowSpanOnlyMerge = false;
			            if (!util.isEmptyObject(this.cellMergeInfo)) {
			                hasRowSpanOnlyMerge = true;
			                for (var key in this.cellMergeInfo) {
			                    if (this.cellMergeInfo[key].colSpan > 1) {
			                        hasRowSpanOnlyMerge = false;
			                        logger.printLog("warning : setColumnOrder refused due to mergeCells. [" + this.id + "]");
			                        return;
			                    }
			                }
			            }
			            var newColumnOrder = newColumnOrder.slice();
			            if (!this.render || (this.render.offsetHeight === 0 && this.render.offsetWidth === 0)) {
			                this.resizeObj = {
			                    width: 0,
			                    height: 0
			                };
			                this.setRedrawStatus("stop");
			                this.delayedDraw({
			                    newColumnOrder: newColumnOrder
			                });
			                return;
			            }
			            var colCnt = this.getColCnt();
			            var checkArr = [];
			            if (typeof newColumnOrder == "string") {
			                newColumnOrder = newColumnOrder.split(",");
			            }
			            for (var i = 0; i < newColumnOrder.length; i++) {
			                if (this.bodyIdColIndexMap[newColumnOrder[i]] != null) {
			                    newColumnOrder[i] = this.bodyIdColIndexMap[newColumnOrder[i]];
			                }
			                newColumnOrder[i] = Number(newColumnOrder[i]);
			                if (typeof newColumnOrder[i] != "number") {
			                    $l(this.id + ".setColumnOrder : wrong column order array.");
			                    return;
			                }
			                checkArr[newColumnOrder[i]] = true;
			            }
			            var newLen = newColumnOrder.length;
			            if (colCnt > newLen) {
			                var colSpanArr = [];
			                for (var i = 0; i < newLen; i++) {
			                    var colSpan = this.getCellInfo(newColumnOrder[i]).options.colSpan;
			                    if (colSpan > 1) {
			                        colSpanArr.push([i, colSpan]);
			                    }
			                }
			                for (var i = 0; i < newLen; i++) {
			                    newColumnOrder[i] = this.colIndexes.bodyColInfo.colIndexArr[newColumnOrder[i] + this.defaultColCnt] - this.defaultColCnt;
			                }
			                var extraIdx = 0;
			                for (var i = 0; i < colSpanArr.length; i++) {
			                    var colSpanInfo = colSpanArr[i];
			                    var spanIdx = colSpanInfo[0];
			                    var colSpan = colSpanInfo[1];
			                    for (var j = 1; j < colSpan; j++) {
			                        extraIdx++;
			                        newColumnOrder.splice(spanIdx + extraIdx, 0, newColumnOrder[spanIdx + extraIdx - 1] + 1);
			                    }
			                }
			                for (var i = 0; i < newColumnOrder.length; i++) {
			                    checkArr[newColumnOrder[i]] = true;
			                }
			            }
			            for (var i = newColumnOrder.length - 1; i >= 0; i--) {
			                for (var j = i - 1; j >= 0; j--) {
			                    if (newColumnOrder[i] === newColumnOrder[j]) {
			                        newColumnOrder.splice(i, 1);
			                    }
			                }
			            }
			            for (var i = 0; i < colCnt; i++) {
			                if (!checkArr[i]) {
			                    newColumnOrder.push(i);
			                }
			            }
			            if (colCnt != newColumnOrder.length) {
			                $l(this.id + ".setColumnOrder : wrong column order array.");
			                return false;
			            }
			            var tempColumnOrder = [];
			            for (var i = 0; i < newColumnOrder.length; i++) {
			                for (var j = 0; j < this.columnOrder.length; j++) {
			                    if (this.columnOrder[j] == newColumnOrder[i]) {
			                        tempColumnOrder[i] = j;
			                        break;
			                    }
			                }
			            }
			            var bMoveFooter = this.hasFooter && this.options.columnMoveWithFooter;
			            this._swapItem(this.colIndexes.bodyColInfo.colIndexMatch, tempColumnOrder, this.defaultColCnt);
			            this._swapItem(this.colIndexes.headerColInfo.colIndexMatch, tempColumnOrder, this.defaultColCnt);
			            if (bMoveFooter) {
			                this._swapItem(this.colIndexes.footerColInfo.colIndexMatch, tempColumnOrder, this.defaultColCnt);
			            }
			            this._swapItem(this.colWidthList, tempColumnOrder, this.defaultColCnt);
			            this.initialColWidthList = this.colWidthList.slice();
			            this._swapItem(this.hiddenList, tempColumnOrder, this.defaultColCnt);
			            if (this.options.autoFit === "allColumn") {
			                this._swapItem(this.autoFitColWidthList, tempColumnOrder, this.defaultColCnt);
			            }
			            if (this.options.drawTypeX === "hybrid") {
			                return this._setColumnOrder_hybrid(newColumnOrder);
			            }
			            for (var i = 0; i < this.tdIdList.length; i++) {
			                for (var j = 0; j < newColumnOrder.length; j++) {
			                    if (i == newColumnOrder[j]) {
			                        this.colMoveIndexMap[this.tdIdList[i]] = j;
			                        this.colMoveHeaderIndexMap[this.thIdList[i]] = j;
			                        break;
			                    }
			                }
			            }
			            if (this.checkRefreshAdaptive() === true) {
			                this.removeAdaptive();
			            }
			            this.columnOrder = tempColumnOrder.slice(0);
			            if (this.drawedRowLength <= 0) {
			                this.drawDataTable();
			            }
			            if (hasRowSpanOnlyMerge) {
			                this.cellMergeInfo = {};
			                this.cellMergeRealInfo = {};
			                this.dynamicMergeHTML();
			            }
			            this._moveColumnByOrder(this.id + "_body_tbody", this.htmlInfo.body.rowArr);
			            this._moveColumnByOrder(this.id + "_head_table", this.htmlInfo.head.rowArr);
			            if (bMoveFooter) {
			                var footTable = document.getElementById(this.id + "_foot_table").getElementsByTagName("tbody")[0];
			                this._moveColumnByOrder(footTable.getAttribute("id"), this.htmlInfo.foot.rowArr, tempColumnOrder);
			            }
			            if (this.initVisibilityArr != undefined) {
			                var temp = [];
			                for (var i = 0; i < this.initVisibilityArr.length - this.defaultColCnt; i++) {
			                    var qx = Math.floor(i / tempColumnOrder.length);
			                    var rx = i % tempColumnOrder.length;
			                    var idx = (qx * tempColumnOrder.length) + tempColumnOrder[rx] + this.defaultColCnt;
			                    temp.push(this.initVisibilityArr[idx]);
			                }
			                for (var i = 0; i < temp.length; i++) {
			                    this.initVisibilityArr[i + this.defaultColCnt] = temp[i];
			                }
			            }
			            this.columnOrder = newColumnOrder.slice(0);
			            this.arrangeOverflowXScroll();
			            this._handleScrollX();
			            if (this.checkRefreshAdaptive() === true) {
			                this.addAdaptive();
			            }
			            if (hasRowSpanOnlyMerge) {
			                this._mergeRefresh();
			                this.dynamicMergeHTML();
			            }
			            return true;
			        } catch (e) {
			            exception.printStackTrace(e, null, this);
			            return false;
			        }
			    };
			// 0416_waea738
			gridView.prototype.createBlockedHeaderInfo = function() {
			        try {
			            this.columnBlock = {
			                "info": {},
			                "hash": {}
			            };
			            var columnArr = [];
			            var columnStartArr = [];
			            var colCnt = this.getColCnt();
			            for (var i = 0; i < colCnt; i++) {
			                columnArr.push(1);
			                columnStartArr.push(i);
			            }
			            for (var item in this.struct) {
			                var _rowArr;
			                if (item === "subtotalArr") {
			                    _rowArr = this.struct[item][0].rowArr;
			                } else if (!this.struct[item] || !this.struct[item].rowArr) {
			                    continue;
			                } else {
			                    _rowArr = this.struct[item].rowArr;
			                }
			                for (var rowIndex = 0; rowIndex < _rowArr.length; rowIndex++) {
			                    for (var colIndex = 0; colIndex < _rowArr[rowIndex].length; colIndex++) {
			                        var cell = _rowArr[rowIndex][colIndex];
			                        var realColIndex = cell["@col"] || 0;
			                        var colSpan = parseInt(cell.colSpan, 10) || 1;
			                        if (colSpan > 1) {
			                            for (var i = 1; i < colSpan; i++) {
			                                columnArr[realColIndex + i] = 0;
			                                if (columnStartArr[realColIndex + i] > realColIndex) {
			                                    columnStartArr[realColIndex + i] = realColIndex;
			                                }
			                            }
			                        }
			                    }
			                }
			            }
			            for (var i = 0; i < columnArr.length; i++) {
			                var value = columnArr[i];
			                if (value === 1) {
			                    this.columnBlock["info"][i] = [i];
			                    this.columnBlock["hash"][i] = i;
			                } else if (value === 0) {
			                    var startIdx = columnStartArr[i];
			                    while (columnArr[startIdx] === 0 && startIdx < columnArr.length) {
			                        startIdx = columnStartArr[startIdx];
			                    }
			                    if (!this.columnBlock["info"][startIdx]) {
			                        this.columnBlock["info"][startIdx] = [startIdx];
			                    }
			                    this.columnBlock["info"][startIdx].push(i);
			                    this.columnBlock["hash"][i] = startIdx;
			                }
			            }
			        } catch (e) {
			            exception.printStackTrace(e, null, this);
			        }
			    };

			    gridView.prototype.moveColumnByHeaderId = function(fromId, toId) {
			        try {
			            if (!fromId || !toId || fromId === toId) {
			                return false;
			            }
			            var fromColIndex = this.getHeaderColIndex(fromId);
			            var toColIndex = this.getHeaderColIndex(toId);
			            if (isNaN(fromColIndex) || isNaN(toColIndex)) {
			                return false;
			            }
			            var fromIndex = this.columnBlock.hash[fromColIndex - this.defaultColCnt];
			            var toIndex = this.columnBlock.hash[toColIndex - this.defaultColCnt];
			            if (fromIndex === toIndex) {
			                return false;
			            }
			            var fixedIndex = this.getFixedColumnLastIndex();
			            if (this.options.fixedColumnNoMove && (fixedIndex > fromIndex + this.defaultColCnt || fixedIndex > toIndex + this.defaultColCnt)) {
			                return false;
			            }
			            var fromRenderIdx = -1;
			            var toRenderIdx = -1;
			            for (var i = 0; i < this.columnOrder.length; i++) {
			                var renderIdx = this.columnOrder[i];
			                if (renderIdx === fromIndex) {
			                    fromRenderIdx = i;
			                }
			                if (renderIdx === toIndex) {
			                    toRenderIdx = i;
			                }
			                if (fromRenderIdx > -1 && toRenderIdx > -1) {
			                    break;
			                }
			            }
			            var bodyFromId = this.headerToBodyRelation[fromId];
			            var bodyToId = this.headerToBodyRelation[toId]
			            var evRet = event.fireEvent(this, "onbeforecolumnmove", {
			                "startColumnID": bodyFromId,
			                "startColumnIndex": fromRenderIdx,
			                "endColumnID": bodyToId,
			                "endColumnIndex": toRenderIdx
			            });
			            if (evRet === false) {
			                return false;
			            }
			            if (!this.columnBlock) {
			                this.createBlockedHeaderInfo();
			            }
			            var oldColumnOrder = this.getColumnOrder();
			            var fromOrder = -1;
			            var toOrder = -1;
			            for (var i = 0; i < oldColumnOrder.length; i++) {
			                var idx = oldColumnOrder[i];
			                if (idx === fromIndex) {
			                    fromOrder = i;
			                } else if (idx === toIndex) {
			                    toOrder = i;
			                }
			                if (fromOrder !== -1 && toOrder !== -1) {
			                    break;
			                }
			            }
			            var fromArr = this.columnBlock.info[fromIndex];
			            var toArr = this.columnBlock.info[toIndex];
			            var _tco = oldColumnOrder.slice(0);
			            _tco.splice(fromOrder, fromArr.length);
			            var direction = fromOrder < toOrder ? toArr.length - fromArr.length : 0;
			            var insertIdx = toOrder + direction;
			            var newColumnOrder = _tco.slice(0, insertIdx).concat(fromArr).concat(_tco.slice(insertIdx));
			            var result = this.setColumnOrder(newColumnOrder);
			            event.fireEvent(this, "onaftercolumnmove", {
			                "startColumnID": bodyFromId,
			                "startColumnIndex": fromRenderIdx,
			                "endColumnID": bodyToId,
			                "endColumnIndex": toRenderIdx
			            });
			            return result;
			        } catch (e) {
			            exception.printStackTrace(e, null, this);
			        }
			    };
		// waea_761 bigdecimal		
		cellInfo.prototype._hasDecimalDisplayFormat = function() {
		        var displayFormat = (this.options.displayFormat || "") + "";
		        var decimalDelimiter = (this.options.decimalDelimiter || ".") + "";
		        var decimalIndex = displayFormat.lastIndexOf(decimalDelimiter);
		        if (decimalIndex < 0 && decimalDelimiter !== ".") {
		            decimalIndex = displayFormat.lastIndexOf(".");
		        }
		        return decimalIndex > -1 && /[0#]/.test(displayFormat.slice(decimalIndex + decimalDelimiter.length));
		    };
		    cellInfo.prototype._isBigDecimalFloatMaxLength = function(len) {
		        try {
		            if (this.options.dataType !== "bigDecimal") {
		                return false;
		            }
		            var maxLengthStr = ((len != null) ? len : (this.options._floatMaxLength || this.options.maxLength || this.options.maxlength)) + "";
		            var displayFormat = (this.options.displayFormat || "") + "";
		            return parseFloat(maxLengthStr) > 0 && maxLengthStr.indexOf(".") > -1 &&
		                (this.options.useBigDecimalFloat === true || this.options.useBigDecimalFloat === "true" || !displayFormat || this._hasDecimalDisplayFormat());
		        } catch (e) {
		            exception.printStackTrace(e, null, this);
		            return false;
		        }
		    };
		    cellInfo.prototype._clearBigDecimalFloatMaxLength = function(inputComp) {
		        try {
		            delete this.options._floatMaxLength;
		            this.options.useBigDecimalFloat = false;
		            if (inputComp) {
		                if (inputComp.validator) {
		                    inputComp.validator.removeCommand(new _wg.validator.maxFloatLengthCommand(inputComp.floatMaxlength, inputComp.options.decimalDelimiter, inputComp.options.delimiter));
		                }
		                inputComp.floatMaxlength = "-1";
		                inputComp.useBigDecimalFloat = false;
		                if (inputComp.options) {
		                    inputComp.options.useBigDecimalFloat = false;
		                }
		            }
		        } catch (e) {
		            exception.printStackTrace(e, null, this);
		        }
		    };

		    gridView.prototype.getInput = function(cellInfo, render, data) {
		        var inputType = cellInfo.options.inputType || "text";
		        var embeddedInput = cellInfo.options.embeddedInput;
		        var dataType = this.getColumnOption(cellInfo.id, "dataType");
		        if (inputType === "text" && dataType === "number" && this.options.floatNumber === "true") {
		            dataType = "float";
		            cellInfo.options.dataType = "float";
		        }
		        var isbigDecimalType = (dataType == "bigDecimal") ? true : false;
		        var _this = this;
		        var titleStr;
		        if (this.options.titleFormatter && render) {
		            try {
		                if (typeof this.options.titleFormatter != "function") {
		                    var titleFormatter = util.getGlobalFunction(this.options.titleFormatter, this.scope_id);
		                    if (typeof titleFormatter === "function") {
		                        this.options.titleFormatter = titleFormatter;
		                        titleStr = titleFormatter.call(this, this.getElemRowIndex(render), this.getColumnIndex(cellInfo.id), data);
		                    }
		                } else {
		                    titleStr = this.options.titleFormatter.call(this, this.getElemRowIndex(render), this.getColumnIndex(cellInfo.id), data);
		                }
		            } catch (e) {
		                exception.printStackTrace(e, null, this);
		            }
		        }
		        var dataCol_id = util.getDataPrefix("col_id");
		        var dataRowIndex = util.getDataPrefix("rowIndex");
		        var dataRowindex = util.getDataPrefix("rowindex");
		        var wrapperCell;
		        if (render && render instanceof HTMLElement) {
		            wrapperCell = this._getWrapperCell(render, render.getAttribute(dataRowindex));
		        }
		        if (embeddedInput) {
		            // embeddedInput인 경우는 td마다 1개씩 입력 컴포넌트가 필요하기 때문에 td의 id를 식별자로 이용한다
		            var input_id;
		            if (cellInfo.options.inputType == "custom" && !cellInfo.internal) {
		                var realRowIndex = this.getElemRowIndex(render);
		                if (this.isDrillDown && this._dataList.options.depthColumn) {
		                    realRowIndex = this.getRealRowIndex(realRowIndex);
		                }
		                cellInfo = cellInfo.cellManagerHashByRowIndex[realRowIndex] ? cellInfo.cellManagerHashByRowIndex[realRowIndex] : cellInfo;
		            }
		            if (cellInfo.parentColumnInfo) {
		                input_id = this.id + "_" + cellInfo.id;
		            } else {
		                if (render) {
		                    input_id = render.getAttribute("id") + "_" + inputType;
		                } else {
		                    if (inputType === "calendar") { //render가 없는 상태의 임시 input
		                        input_id = this.id + "_cell_0_0_" + inputType;
		                    }
		                }
		            }
		            if (!this.fakeInput && (inputType == "text" || inputType == "secret" || inputType == "calendar" || inputType == "textImage")) {
		                this.makeFakeInput = function() {
		                    this.fakeInput = new WebSquare.uiplugin.input(this.id + "_fakeInput", {
		                        style: "visibility:hidden;position:absolute;z-index:100;background-color:" + this.options.selectedCellColor,
		                        className: "w2grid_embedded_input",
		                        ioFormat: "$blank",
		                        ioFormatter: "$blank",
		                        displayFormat: "$blank",
		                        displayFormatter: "$blank",
		                        readOnly: "$blank",
		                        disabled: "$blank",
		                        useKeyupBlur: false,
		                        xmlEvents: [{
		                            name: "onmousedown",
		                            action: "script",
		                            param: {
		                                handler: function(e) {
		                                    _this.lastEvent = event.getInfo(e);
		                                    // fakeInput은 포커스를 가지는 등의 마우스 조작이 불가능함
		                                    event.stopEvent(e);
		                                    // fakeInput이 클릭되어 원래 input의 포커스가 빠지게 될경우 다시 포커스를 준다
		                                    var __this = this;
		                                    setTimeout(function() {
		                                        __this.lastInput.focus();
		                                    }, 1);
		                                }
		                            }
		                        }, {
		                            name: "oncontextmenu",
		                            action: "script",
		                            param: {
		                                handler: function(e) {
		                                    _this.lastEvent = event.getInfo(e);
		                                    // fakeInput을 오른쪽 클릭했을때 이벤트 처리 필요시 사용
		                                    //event.stopEvent(e);
		                                }
		                            }
		                        }, {
		                            name: "ondblclick",
		                            action: "script",
		                            param: {
		                                handler: function(e) {
		                                    _this.lastEvent = event.getInfo(e);
		                                    _this.hideFakeInput(this);
		                                    event.stopPropagation(e);
		                                    // F2Mode 모드로 설정하고 커서를 맨 끝으로 보낸다
		                                    _this.F2Mode = true;
		                                    WebSquare.text.setCaretPos(this.lastInput.render, this.lastInput.render.value.length);
		                                }
		                            }
		                        }]
		                    });
		                    this.fakeInput.setAction = function() {};
		                    this.fakeInput.writeTo(this.render);
		                    this.fakeInput.activate();
		                    this.fakeInput.render.parentNode.removeChild(this.fakeInput.render);
		                    var tdOffsetFix = null;
		                    this.showFakeInput = function(input) {
		                        var td = this._getWrapperTD(input.render.parentNode);
		                        this.render.appendChild(this.fakeInput.render);
		                        if (!tdOffsetFix) {
		                            var td0 = this._getTDByIndexAll(0);
		                            tdOffsetFix = 1 - td0.offsetLeft;
		                        }
		                        var dataLayer = this.getElementById(this.id + "_dataLayer");
		                        this.fakeInput.setPosition(td.offsetLeft + tdOffsetFix - dataLayer.scrollLeft, td.offsetTop + tdOffsetFix - dataLayer.scrollTop);
		                        this.fakeInput.setSize(td.clientWidth, td.clientHeight);
		                        if (util.isIE()) {
		                            // FF에서 input창이 계속 커지는 현상 발생하여 IE로 제한함
		                            this.fakeInput.setVerticalAlign();
		                        }
		                        this.fakeInput.lastInput = input;
		                        var textAlign = input.getStyle("text-align");
		                        if (textAlign) {
		                            this.fakeInput.setStyle("text-align", textAlign);
		                        } else {
		                            this.fakeInput.setStyle("text-align", "");
		                        }
		                    };
		                    this.hideFakeInput = function(input) {
		                        if (this.fakeInput.render.parentNode) {
		                            this.fakeInput.render.parentNode.removeChild(this.fakeInput.render);
		                        }
		                    };
		                };
		            }
		        } else {
		            var input_id = cellInfo.mainGridId + cellInfo.id;
		        }
		        var input = this.dom[input_id];
		        var isExist = !!input;
		        //if(input && !input.render && input.ownerDocument && !input.parentNode) {
		        //    isExist = false; // embeddedinput에서 간헐적으로 scroll 시 dom fragment가 발생함. 원인은 불명.
		        //}
		        if (input) {
		            if (input.render) {
		                if (inputType == "select" && embeddedInput && !input.render.parentElement && !this.groupbyStatus.grouped) {
		                    isExist = false;
		                }
		            } else {
		                if (input.ownerDocument && !input.parentNode) {
		                    isExist = false; // embeddedinput에서 간헐적으로 scroll 시 dom fragment가 발생함. 원인은 불명.
		                }
		            }
		        }

		        if (isExist && (titleStr !== "" && titleStr != undefined)) {
		            if (inputType == "text") {
		                input.render.setAttribute("title", titleStr);
		            } else {
		                input.setAttribute("title", titleStr);
		            }
		        }
		        var dataDateValidCheck = util.getDataPrefix("dateValidCheck");
		        if (!isExist) {
		            if ((inputType == "text" || inputType == "secret" || inputType == "textImage") && embeddedInput) {
		                var title = titleStr || cellInfo.options.title || "";
		                var headerTitle = this.getHeaderValue(this.bodyToHeaderRelation[cellInfo.id]) || "";
		                if (!title) {
		                    if (this.options.titleAuto) {
		                        if ((inputType == "text") && (data !== "")) {
		                            title = headerTitle + " " + data;
		                        } else if ((inputType == "text") && (data == "")) {
		                            title = headerTitle;
		                        } else if (inputType == "secret") {
		                            title = headerTitle;
		                        }
		                    }
		                }
		                var type = !cellInfo.options.type ? "text" : cellInfo.options.type;
		                var className = "w2grid_embedded_input";
		                if (inputType == "secret") {
		                    type = "password";
		                    // IE에서는 "돋움" 때문에 특문이 매우 커보이므로 font-family에 "돋움"을 제외한 w2grid_secret을 추가하고,
		                    // 비IE에서는 애초에 font-family가 없는 클래스를 넣어준다.(font-family가 한번이라도 적용된 상태에서는 나중에 초기화하더라도 크기가 이상하게 됨)
		                    if (util.isIEAllVersion()) {
		                        className += " w2grid_secret";
		                    } else {
		                        className = "w2grid_embedded_secret";
		                    }
		                }
		                var maxLength = cellInfo.options._floatMaxLength || cellInfo.options.maxLength || cellInfo.options.maxlength || -1;
		                var inputOptions = {
		                    className: className,
		                    style: "$blank",
		                    ioFormat: "$blank",
		                    ioFormatter: "$blank",
		                    //displayFormat : "$blank",
		                    //displayFormatter : "$blank",
		                    readOnly: "$blank",
		                    disabled: "$blank",
		                    hidden: "$blank",
		                    title: title,
		                    type: type,
		                    maxlength: maxLength,
		                    useBigDecimalFloat: cellInfo._isBigDecimalFloatMaxLength && cellInfo._isBigDecimalFloatMaxLength(maxLength),
		                    adjustMaxLength: cellInfo.options.adjustMaxLength,
		                    useMaxLength: cellInfo.options.useMaxLength,
		                    useKeyupBlur: false,
		                    accessibility: this.options.accessibility,
		                    xmlEvents: [{
		                        name: "onclick",
		                        action: "script",
		                        param: {
		                            handler: function(e) {
		                                // bodyClick 이벤트가 발생하지 않도록 처리
		                                var newRowIndex = parseInt(this.render.getAttribute(dataRowIndex), 10);
		                                var colID = _this._getWrapperTD(this.render.parentNode).getAttribute(dataCol_id);
		                                var newColIndex = _this.getColumnIndex(colID);
		                                event.fireEvent(_this, "oncellclick", newRowIndex, newColIndex, colID);
		                                event.stopPropagation(e);
		                            }
		                        }
		                    }, {
		                        name: "oncopy",
		                        action: "script",
		                        param: {
		                            handler: function(e) {
		                                // gridView에 등록된 oncopy 이벤트가 발생하지 않도록 처리
		                                event.stopPropagation(e);
		                            }
		                        }
		                    }, {
		                        name: "onpaste",
		                        action: "script",
		                        param: {
		                            handler: function(e) {
		                                // gridView에 등록된 onpaste 이벤트가 발생하지 않도록 처리
		                                event.stopPropagation(e);
		                            }
		                        }
		                    }, {
		                        name: "oncut",
		                        action: "script",
		                        param: {
		                            handler: function(e) {
		                                // gridView에 등록된 oncut 이벤트가 발생하지 않도록 처리
		                                event.stopPropagation(e);
		                            }
		                        }
		                    }, {
		                        name: "onkeydown",
		                        action: "script",
		                        param: {
		                            handler: function(e) {
		                                this._SenSeReaderBeforeEditValue = null;
		                                var info = {};
		                                var colID = _this._getWrapperTD(this.render.parentNode).getAttribute(dataCol_id);
		                                info.rowIndex = parseInt(this.render.getAttribute(dataRowIndex), 10);
		                                info.colIndex = _this.getColumnIndex(colID);
		                                info.colID = colID;
		                                info.keyCode = (e.charCode) ? e.charCode : e.keyCode;
		                                this._SenSeReaderBeforeEditValue = this.render.value;
		                                info.oldValue = this.render.value;
		                                event.fireEvent(_this, "oneditkeydown", info);
		                                // handleKeydown에서 처리하므로 여기선 하지 않음
		                                //event.stopPropagation(e);
		                            }
		                        }
		                    }, {
		                        name: "onkeyup",
		                        action: "script",
		                        param: {
		                            handler: function(e) {
		                                var keyCode = (e.charCode) ? e.charCode : e.keyCode;
		                                var colID = _this._getWrapperTD(this.render.parentNode).getAttribute(dataCol_id);
		                                var info = {
		                                    "rowIndex": parseInt(this.render.getAttribute(dataRowIndex), 10),
		                                    "colIndex": _this.getColumnIndex(colID),
		                                    "colID": colID,
		                                    "oldValue": this._SenSeReaderBeforeEditValue || "",
		                                    "newValue": this.render.value,
		                                    "inputType": "text",
		                                    "keyCode": keyCode
		                                };
		                                this._SenSeReaderBeforeEditValue = null;
		                                event.fireEvent(_this, "oneditkeyup", info);
		                                // gridView에 등록된 이벤트가 발생하지 않도록 처리
		                                //event.stopPropagation(e);
		                            }
		                        }
		                    }]
		                };
		                if (this._isBrowserScroll() !== true ) {
		                    inputOptions.xmlEvents.unshift({
		                        name: "onmousedown",
		                        action: "script",
		                        param: {
		                            handler: function(e) {
		                                // 외곽 div에 걸쳐진 row를 클릭했을때 1줄 아래로 스크롤 될 수 있도록 처리
		                                var row = parseInt(this.render.getAttribute(dataRowIndex), 10);
		                                var col = _this._getWrapperTD(this.render.parentNode).getAttribute(dataCol_id);
		                                if (row - _this.rowIndex >= _this.lastIndex + 1) {
		                                    event.stopEvent(e);
		                                    _this.addGridScroll(1);
		                                    _this._setFocusedCell(row, col, true);
		                                    return;
		                                }
		                            }
		                        }
		                    });
		                }
		                if (cellInfo.options.dataType === "float") {
		                    inputOptions['dataType'] = cellInfo.options.dataType;
		                }
		                cellInfo.options.delimiter = ""; //delimeter에서 delimeter로 변경해서 기존에 사용하고 있던 delimiter 초기화 필요함.
		                input = new WebSquare.uiplugin.input(input_id, _wg.extend(_wg.extend({}, cellInfo.options), inputOptions));
		                if (inputType === "textImage") {
		                    var textImageInputDiv = render.getElementsByClassName("w2grid_textImage_div_input")[0];
		                    input.writeTo(textImageInputDiv);
		                } else {
		                    wrapperCell.textContent = "";
		                    input.writeTo(wrapperCell);
		                }
		                // SH: 누가 이렇게 구데기가 같이 짰는지는 모르겠는데.. input객체에 delegate 해야 한다. (== input의 옵션으로 dataType을 넘겨야 한다.)
		                //     하지만 180109 시점에 이미 이런 코드들이 흩어져 있어서 input에 dataType 속성을 넘기면 어떤 일이 생길지 모르겠다..
		                if (cellInfo.options.dataType == "number") {
		                    if (cellInfo.options.displayFormat == "") {
		                        input.validator.addCommand(new WebSquare.validator.allowCharCommand("+\\-.0-9"));
		                    } else {
		                        input.validator.addCommand(new WebSquare.validator.numberCommand());
		                    }
		                }
		                if (util.isIE()) {
		                    // FF에서 input창이 계속 커지는 현상 발생하여 IE로 제한함
		                    input.setVerticalAlign();
		                }
		                input.setVerticalAlign = function() {}; // TODO : ff에서 verticalAlign 구현 필요
		                var _handleBlurEventBasic = WebSquare.uiplugin.input.prototype.handleBlurEventBasic;
		                var comp_uuid = this.uuid;
		                input.handleBlurEventBasic = function(e) {
		                    var rowIndex = parseInt(this.render.getAttribute(dataRowindex), 10);
		                    var groupbyDisplayRowIndex = _this._getGroupbyDisplayRowIndex(rowIndex);
		                    var parentNode = this.render.parentNode;
		                    if (inputType == "textImage") {
		                        parentNode = this.render.parentNode.parentNode;
		                    }
		                    var col_id = _this._getWrapperTD(parentNode).getAttribute(dataCol_id);
		                    var colIndex = _this._dataList.getColumnIndex(col_id);
		                    var gridCol = _this.getColumnIndex(col_id); // dataList의 column와 gridView의 column 순서가 다를 수 있으므로 _col과 구분하여 따로 가져온다.
		                    var value = input.validator.validateString(this.getValue());
		                    var ret = event.fireEvent(_this, "oneditend", groupbyDisplayRowIndex, gridCol, value, e);
		                    if (ret + "" == "false") {
		                        _this.editEndFlag = true;
		                        this.reFocus = true;
		                        if (_this.fakeInput.lastInput == this) {
		                            this.focus();
		                        }
		                        var lastFocusedCell = _this.getLastFocusedCell();
		                        if (lastFocusedCell.focusedTd != _this._getWrapperTD(this.render.parentNode)) {
		                            _this._setFocusedCell(rowIndex, col_id);
		                        }
		                        event.stopEvent(e);
		                        return false;
		                    }
		                    _this.editEndFlag = false;
		                    _handleBlurEventBasic.call(this, e, {skipEditEnd:true});
		                    var cellInfo = _this.getCellInfo(col_id);
		                    var dataType = _this.getColumnOption(cellInfo.id, "dataType");
		                    if (this._isNumberType(dataType)) {
		                        var wq_trimValue = value.wq_trim();
		                        if (wq_trimValue === "." || wq_trimValue === "-" || wq_trimValue === "+"
		                            || wq_trimValue === ","
		                            || wq_trimValue === "+" + cellInfo.options.decimalDelimiter
		                            || wq_trimValue === "-" + cellInfo.options.decimalDelimiter
		                            ) {
		                            value = "";
		                        }
		                    }
		                    var useDrilldown = !!(_this.isDrillDown && _this._dataList.options.depthColumn);
		                    var tempRowIndex = rowIndex;
		                    var realRowIndex = _this._dataList.getRealRowIndex(tempRowIndex);
		                    if (useDrilldown) {
		                        tempRowIndex = realRowIndex;
		                    }
		                    var oldValue = _this._dataList.dataArr[realRowIndex * _this._dataList.getColumnCount() + colIndex];
		                    _this.dataList.__setCellData(rowIndex, col_id, value);
		                    value = _this._dataList.getCellData(tempRowIndex, col_id); // onchange에서 setCellData등을 하며 값이 변경 될 경우를 대비하기 위해 다시 get해줌. 
		                    if (cellInfo.options.applyFormat != "all" && !this.options.displayFormat && !this.options.displayFormatter && !cellInfo._changeDisplayFormat) {
		                        value = cellInfo.getDisplayData(value);
		                    }
		                    this.setValue(value);
		                    var comp = WebSquare.idCache[comp_uuid];
		                    if (comp.options.senseReader && this.options.customFormatter) {
		                        var customFormatter = null;
		                        try {
		                            if (typeof this.options.customFormatter == "function") {
		                                customFormatter = this.options.customFormatter;
		                            } else {
		                                customFormatter = util.getGlobalFunction(this.options.customFormatter, this.scope_id);
		                                if (typeof customFormatter === "function") {
		                                    this.options.customFormatter = customFormatter;
		                                }
		                            }
		                        } catch (e) {
		                            customFormatter = null;
		                        }
		                        var formattedData = value;
		                        var useFormatter = this.options.displayFormat || this.options.displayFormatter || this.options.ioFormat;
		                        if (this.formatter && useFormatter) {
		                            formattedData = this.formatter.format(value);
		                        }
		                        if (typeof customFormatter == "function") {
		                            this.useCustomFormatter = true;
		                            var resultData = customFormatter.call(this.mainGrid, value, formattedData, groupbyDisplayRowIndex, colIndex);
		                            this.render.value = resultData;
		                        }
		                    }
		                    // TODO: onafteredit의 반환값을 어디서 참조하고 있는지 확인 필요
		                    var ret = event.fireEvent(_this, "onafteredit", groupbyDisplayRowIndex, gridCol, value, _this.lastEvent);
		                    if (oldValue != value) {
		                        event.fireEvent(_this, "onviewchange", {
		                            "oldValue": oldValue,
		                            "newValue": value,
		                            "rowIndex": groupbyDisplayRowIndex,
		                            "colIndex": gridCol,
		                            "colId": _this.getColumnID(gridCol)
		                        });
		                    }
		                    _this.hideFakeInput(input);
		                    _this.F2Mode = false;
		                };
		                var handleFocusValueEventAdv = WebSquare.uiplugin.input.prototype.handleFocusValueEventAdv;
		                input.handleFocusValueEventAdv = function(e) {
		                    if (_this.editEndFlag && _this.fakeInput.lastInput != this) {
		                        event.stopEvent(e);
		                        return false;
		                    }
		                    var rowIndex = parseInt(this.render.getAttribute(dataRowindex), 10);
		                    var groupbyDisplayRowIndex = _this._getGroupbyDisplayRowIndex(rowIndex);
		                    var col_id = _this._getWrapperTD(this.render.parentNode).getAttribute(dataCol_id);
		                    _this.lastEvent = event.getInfo(e);
		                    var lastFocusedCell = _this.getLastFocusedCell();
		                    var useDrilldown = !!(_this.isDrillDown && _this._dataList.options.depthColumn);
		                    if (useDrilldown) {
		                        rowIndex = _this._dataList.getRealRowIndex(rowIndex);
		                    }
		                    var success;
		                    if (lastFocusedCell.focusedTd != _this._getWrapperTD(this.render.parentNode)) {
		                        //focusedByApi가 초기화되지 않은 경우에 focusedcell 값 비교해서 내부 focus만 처리하기 위해 editMode false로 넘겨준다.
		                        if (_this.focusedByApi && (lastFocusedCell.focusedRowIndex !== rowIndex || lastFocusedCell.focusedColIndex !== _this.getColumnIndex(col_id))) {
		                            success = _this._setFocusedCell(rowIndex, col_id, false);
		                        } else {
		                            success = _this._setFocusedCell(rowIndex, col_id);    
		                        }
		                    }
		                    if (success !== false) {
		                        var reFocus = this.reFocus;
		                        handleFocusValueEventAdv.call(this, e);
		                        this.reFocus = reFocus;
		                        _this.focusedByApi = false;
		                        if (!this.reFocus) {
		                            var data = _this._dataList.getCellData(rowIndex, col_id);
		                            //input setValueNM에서 activeElement 체크 로직 때문에 click해서 focus 들어가면 applyFormat all인 경우 format이 사라진다.
		                            if (data !== this.getValue()) {
		                                if (this.formatter && this.options.applyFormat === "all") {
		                                    data = this.formatter.format(data);
		                                }
		                                this.setValue(data); // 왜 setValue를 해야 하는지 모르겠음.
		                            }
		                            _this.showFakeInput(this);
		                            _this.fakeInput.setValue(this.getValue());
		                            if (this.options.editType === "select") {
		                                this.select();
		                            }
		                            this.focus();

		                            // safari에서 바로 focus가 되어서 setTimeout을 제외. 문제가 발견될 경우, 롤백해야함.
		                            // TODO: safari에서 바로 focus가 안되기 때문에 setTimeout을 사용하였다. 할수 있다면 제거 필요
		                            // var __this = this;
		                            // setTimeout(function(){
		                            // 	__this.focus();
		                            // }, 1);
		                            if (_this.fakeInput.render.parentNode) {
		                                var colIndex = _this.getColumnIndex(col_id);
		                                event.fireEvent(_this, "onbeforeedit", groupbyDisplayRowIndex, colIndex, _this._dataList.getCellData(rowIndex, colIndex));
		                            }
		                        }
		                        _this.F2Mode = false;
		                        this.reFocus = false;
		                    }
		                };
		                var _handleKeydownEvent = WebSquare.uiplugin.input.prototype.handleKeydownEvent;
		                input.handleKeydownEvent = function(e) {
		                    _this.lastEvent = event.getInfo(e);
		                    _handleKeydownEvent.call(this, e);
		                    switch (e.keyCode) {
		                        case 46: // del
		                            // TODO: del키를 입력했을때는 onchage 이벤트만 발생하고 있다. onbeforeedit, oneditend, onafteredit 이벤트도 발생해야 함
		                            event.stopPropagation(e);
		                            return;
		                        case 27: // ESC
		                            // 값을 원복하고 input.select()를 호출한다
		                            _this.F2Mode = false;
		                            _this.showFakeInput(this);
		                            this.setValue(_this.dataList.getCellData(_this._getFocusedRowIndex(), _this.getFocusedColumnIndex()));
		                            this.select();
		                            event.stopPropagation(e);
		                            return;
		                        case 113: // F2
		                            // F2Mode 모드로 설정하고 커서를 맨 끝으로 보낸다
		                            _this.F2Mode = true;
		                            WebSquare.text.setCaretPos(this.render, this.render.value.length);
		                            _this.hideFakeInput(this);
		                            event.stopPropagation(e);
		                            return;
		                        case 9: //tab
		                            var it = this.event.getTargetIterator(e, this.render);
		                            while (it.next()) {
		                                if (it.match("w2inputCalendar_divInput")) {
		                                    event.stopPropagation(e);
		                                    break;
		                                }
		                            }
		                            return;
		                    }
		                    var keyCode = e.which || e.keyCode;
		                    if (_this.nonCharKeys[keyCode]) {
		                        // 문자 입력 키가 아니라면 아무것도 하지 않는다
		                        return;
		                    }
		                    if (keyCode == 32) {
		                        // space는 문자 입력 키로 분류되어 아래 로직을 타기 때문에 따로 분기처리한다.
		                        event.stopPropagation(e);
		                        return;
		                    }
		                    if (_this.fakeInput.render.parentNode) {
		                        var rowIndex = this.render.getAttribute(dataRowindex);
		                        var groupbyDisplayRowIndex = _this._getGroupbyDisplayRowIndex(rowIndex);
		                        var col_id = _this._getWrapperTD(this.render.parentNode).getAttribute(dataCol_id);
		                        var colIndex = _this.getColumnIndex(col_id);
		                        event.fireEvent(_this, "onbeforeedit", groupbyDisplayRowIndex, colIndex, _this.dataList._getCellData(rowIndex, colIndex));
		                        _this.hideFakeInput(this);
		                    }
		                    event.stopPropagation(e);
		                };
		                input.activate();
		                if (!this.fakeInput) {
		                    this.makeFakeInput();
		                }
		            } else if (inputType == "select" && embeddedInput) {
		                var selectTitle = titleStr || cellInfo.options.title || "";
		                if (this.options.titleAuto && !selectTitle) {
		                    var headerTitle = this.getHeaderValue(this.bodyToHeaderRelation[cellInfo.id]) || "";
		                    if (data !== "" && data != undefined) {
		                        selectTitle = headerTitle + " " + (this.changeItemValue("label", cellInfo.id, [data])[0] || data);
		                    } else {
		                        selectTitle = headerTitle + WebSquare.language.getMessage("Grid_select");
		                    }
		                }
		                input = new WebSquare.uiplugin.selectbox_native(input_id, {
		                    className: "w2grid_embedded_select",
		                    style: "$blank",
		                    pluginName: "selectbox",
		                    renderType: "native",
		                    title: selectTitle,
		                    emptyItem: cellInfo.options.emptyItem,
		                    chooseOption: cellInfo.options.chooseOption,
		                    chooseOptionLabel: cellInfo.options.chooseOptionLabel,
		                    _scope_obj_uuid: cellInfo.options._scope_obj_uuid,
		                    accessibility: this.options.accessibility,
		                    xmlEvents: [{
		                        name: "onmousedown",
		                        action: "script",
		                        param: {
		                            handler: function(e) {
		                                var colID = this.render.parentNode.getAttribute(dataCol_id);
		                                var cellInfo = _this.getCellInfo(colID);
		                                if (cellInfo.options.noDisabledOnReadOnly && this.getReadOnly()) {
		                                    event.preventDefault(e);
		                                } else {
		                                    // 클릭 했을 때 select가 닫히는 것을 막기 위함
		                                    event.stopPropagation(e);
		                                }
		                                //							this.opened = false;
		                            }
		                        }
		                    /* }, {
		                        name: "onclick", //여길 타지않아도 gridview이벤트를 발생시키므로 필요가 없다고 판단
		                        action: "script",
		                        param: {
		                            handler: function(e) {
		                                var newRowIndex = parseInt(this.render.getAttribute(dataRowIndex), 10);
		                                var colID = this.render.parentNode.getAttribute(dataCol_id);
		                                var newColIndex = _this.getColumnIndex(colID);
		                                _this._setFocusedCell(newRowIndex, colID);
		                                event.fireEvent(_this, "oncellclick", newRowIndex, newColIndex, colID);
		                                event.stopPropagation(e);
		                            }
		                        } */
		                    }, {
		                        name: "onkeydown",
		                        action: "script",
		                        param: {
		                            handler: function(e) {
		                                // select 셀에서는 위 아래 방향키로  셀 이동 대신 아이템 선택을 한다
		                                /*
		                                                            if(util.isIE() && e.keyCode == 40 && e.altKey) {
		                                                                this.opened = true;
		                                                                
		                                                            }
		                                */
		                                switch (e.keyCode) {
		                                    case 38: // up
		                                    case 40: // down
		                                    case 27: // esc
		                                        event.stopPropagation(e);
		                                        return;
		                                        /*
		                                                                        case 13:    // enter
		                                                                            if(this.opened) {
		                                                                                event.stopPropagation(e);
		                                                                                this.opened = false;
		                                                                                return;
		                                                                            }
		                                        */
		                                }
		                            }
		                        }
		                    }]
		                }, cellInfo.xml);
		                wrapperCell.innerHTML = input.toHTML();
		                var _handleOnchange = WebSquare.uiplugin.selectbox_native.prototype.handleOnchange;
		                input.handleOnchange = function(e) {
		                    var colID = _this._getWrapperTD(this.render.parentNode).getAttribute(dataCol_id);
		                    var rowIndex = parseInt(this.render.getAttribute(dataRowindex), 10);
		                    var groupbyDisplayRowIndex = _this._getGroupbyDisplayRowIndex(rowIndex);
		                    var gridCol = _this.getColumnIndex(colID);
		                    var oldIndex = this.selectedIndex;
		                    var oldValue = this.getValue();
		                    _handleOnchange.call(this, e);
		                    _this.dataList.__setCellData(rowIndex, colID, this.getValue());
		                    _this._dataList.setRowPosition(rowIndex);
		                    if (oldIndex != this.selectedIndex) {
		                        var info = {
		                            "oldValue": oldValue,
		                            "newValue": this.getValue(),
		                            "oldSelectedIndex": oldIndex,
		                            "newSelectedIndex": this.selectedIndex,
		                            "rowIndex": rowIndex,
		                            "colIndex": gridCol,
		                            "colId": _this.getColumnID(gridCol)
		                        };
		                        event.fireEvent(_this, "onviewchange", info);
		                    }
		                    // senseReader일 경우 selectbox onchange에 onafteredit event 추가
		                    event.fireEvent(_this, "onafteredit", groupbyDisplayRowIndex, gridCol, this.getValue(), e);
		                };
		                var _refreshItemset = WebSquare.uiplugin.selectbox.prototype.refreshItemset;
		                input.refreshItemset = function(e) {
		                    var colID = _this._getWrapperTD(this.render.parentNode).getAttribute(dataCol_id);
		                    var rowIndex = parseInt(this.render.getAttribute(dataRowindex), 10);
		                    _refreshItemset.call(this, e);
		                    var data = _this._dataList.getCellData(rowIndex, colID);
		                    this.setValueNM(data);
		                };
		                input.activate();
		                var input_uuid = input.uuid;
		                input.event.addListener2(input.dom.select, "onfocus", function(e) {
		                    _this.lastEvent = event.getInfo(e);
		                    var inputComp = WebSquare.idCache[input_uuid];
		                    // setFocusedCell을 호출하기 전에 lastFocusedTdByApi 값을 저장하고 초기화 한다
		                    var lastFocusedCell = _this.getLastFocusedCell();
		                    if (lastFocusedCell.focusedTd != _this._getWrapperTD(inputComp.render.parentNode) && !_this.focusedByApi) {
		                        _this._setFocusedCell(inputComp.render.getAttribute(dataRowindex), _this._getWrapperTD(inputComp.render.parentNode).getAttribute(dataCol_id));
		                    }
		                    _this.focusedByApi = false;
		                });
		            } else if (inputType == "checkbox" && embeddedInput) {
		                var htmlStr;
		                if (cellInfo.options.checkboxLabel || cellInfo.options.checkboxLabelColumn || cellInfo.options.checkboxLabelFormatter) {
		                    var rowIndex = this.getElemRowIndex(render);
		                    var groupbyDisplayRowIndex = this._getGroupbyDisplayRowIndex(rowIndex);
		                    var checkboxName = cellInfo.mainGridId + "_checkbox_" + cellInfo.id;
		                    var checkboxId = checkboxName + "_" + rowIndex;
		                    var checkboxLabel = cellInfo.options.checkboxLabel || "";
		                    if (cellInfo.options.checkboxLabelColumn) {
		                        var tempColArr = cellInfo.options.checkboxLabelColumn.split(",");
		                        var tempLabel = "";
		                        var labelDelimiter = cellInfo.options.checkboxLabelDelimiter || this.options.labelDelimiter || " ";
		                        for (var i = 0; i < tempColArr.length; i++) {
		                            var tempHeaderId = this.bodyToHeaderRelation[tempColArr[i]];
		                            if (i === tempColArr.length - 1) {
		                                if (this.options.showCheckboxLabelUserFormat) {
		                                    tempLabel += " " + this.getHeaderValue(tempHeaderId) + " " + this._getCellDisplayData(rowIndex, tempColArr[i], {removeTag:true});
		                                } else {
		                                    tempLabel += this._getCellDisplayData(rowIndex, tempColArr[i], {removeTag:true});
		                                }
		                            } else {
		                                if (this.options.showCheckboxLabelUserFormat) {
		                                    var rowMsg = WebSquare.language.getMessage("Grid_row") || "row";
		                                    var rowIndexStr = (i === 0) ? (rowIndex + 1) + rowMsg + labelDelimiter : "";
		                                    tempLabel += rowIndexStr + " " + this.getHeaderValue(tempHeaderId) + " " + this._getCellDisplayData(rowIndex, tempColArr[i], {removeTag:true}) + labelDelimiter;
		                                } else {
		                                    tempLabel += this._getCellDisplayData(rowIndex, tempColArr[i], {removeTag:true}) + labelDelimiter;
		                                }
		                            }
		                        }
		                        if (checkboxLabel) {
		                            checkboxLabel = tempLabel + labelDelimiter + checkboxLabel;
		                        } else {
		                            checkboxLabel = tempLabel;
		                        }
		                    }
		                    if (cellInfo.options.checkboxLabelFormatter) {
		                        try {
		                            var checkboxLabelFormatter = util.getGlobalFunction(cellInfo.options.checkboxLabelFormatter, cellInfo.scope_id);
		                            if (typeof checkboxLabelFormatter === "function") {
		                                checkboxLabel = checkboxLabelFormatter.call(this, groupbyDisplayRowIndex, this.getColumnIndex(cellInfo.colID), checkboxLabel);
		                            }
		                        } catch (e) {
		                            logger.printLog(this.id + "_" + cellInfo.id + " checkboxLabelFormatter error : " + e.message);
		                        }
		                    }
		                    htmlStr = "<INPUT style='border-width:0px;' type='checkbox' class='w2grid_embedded_check' " + " id='" + checkboxId + "' name='" + checkboxName + "'/>";
		                    if (cellInfo.getEscape()) {
		                        checkboxLabel = WebSquare.xml._encode(checkboxLabel + "");
		                    }
		                    var labelStr = "<label class='w2checkbox_label ' for='" + checkboxId + "'>" + checkboxLabel + "</label>";
		                    if (cellInfo.options.checkboxLabelPosition === "left") {
		                        htmlStr = labelStr + htmlStr;
		                    } else {
		                        htmlStr = htmlStr + labelStr;
		                    }
		                    wrapperCell.innerHTML = htmlStr;
		                    var input = wrapperCell.getElementsByTagName("input")[0];
		                } else {
		                    htmlStr = "<INPUT style='border-width:0px;' type='checkbox' class='w2grid_embedded_check' />";
		                    wrapperCell.innerHTML = htmlStr;
		                    // senseReader에서 createElement로 만든 체크박스는 "체크 상자"라고 읽지 못하고 "입력 창"이라고 읽는 버그가 있어서 innerHTML을 이용하도록 수정
		                    var input = wrapperCell.getElementsByTagName("input")[0];
		                    if (titleStr) {
		                        input.title = titleStr;
		                    } else if (cellInfo.options.title) {
		                        input.title = cellInfo.options.title;
		                    } else if (this.options.titleAuto) {
		                        var headerTitle = this.getHeaderValue(this.bodyToHeaderRelation[cellInfo.id]) || "";
		                        if (data) {
		                            input.title = headerTitle + WebSquare.language.getMessage("Grid_title");
		                        } else {
		                            input.title = headerTitle + WebSquare.language.getMessage("Grid_title_not_choose");
		                        }
		                        if (checkboxLabel) {
		                            input.title = input.title + checkboxLabel;
		                        }
		                    }
		                }
		                this.event.addListener(input, "onclick", this.event.bindAsEventListener(this, function(e) {
		                    var target = event.getTarget(e);
		                    this.lastEvent = event.getInfo(e);
		                    // setFocusedCell을 호출하기 전에 lastFocusedTdByApi 값을 저장하고 초기화 한다
		                    var lastFocusedCell = this.getLastFocusedCell();
		                    var elem = target.parentNode;
		                    var rowIndex = this.getElemRowIndex(elem);
		                    var cellInfo = this.getCellInfo(elem);
		                    var colId = cellInfo.id;
		                    var colIndex = this.getColumnIndex(colId);
		                    if (this.options.useShiftKeyCheck === true && e.shiftKey) {
		                        var afterChecked = {
		                            "td": elem,
		                            "rowIndex": rowIndex,
		                            "checked": target.checked
		                        }
		                        this._ShiftKeyMultiCheck(this, afterChecked, elem);
		                    }
		                    if (this.options.useShiftKeyCheck === true) {
		                        this.beforeChecked = {
		                            "td": elem,
		                            "rowIndex": rowIndex,
		                            "checked": target.checked
		                        }
		                    }
		                    if (lastFocusedCell.focusedTd != target.parentNode && !this.focusedByApi) {
		                        this._setFocusedCell(rowIndex, colId);
		                    }
		                    this.focusedByApi = false;
		                    if (cellInfo.options.noDisabledOnReadOnly && this._getEditReadOnly(rowIndex, colIndex)) {
		                        event.preventDefault(e);
		                    }
		                }));
		                if (cellInfo.options.noDisabledOnReadOnly) {
		                    var rowIndex = this.getElemRowIndex(render);
		                    if (this._getEditReadOnly(rowIndex, cellInfo.id)) {
		                        this.addClass(input, this.options.readOnlyClass + "_nodisabled");
		                    } else {
		                        this.removeClass(input, this.options.readOnlyClass + "_nodisabled");
		                    }
		                }
		            } else if (inputType == "radio" && embeddedInput) {
		                var htmlStr;
		                if (cellInfo.options.radioLabel || cellInfo.options.radioLabelColumn || cellInfo.options.radioLabelFormatter) {
		                    var rowIndex = this.getElemRowIndex(render);
		                    var groupbyDisplayRowIndex = this._getGroupbyDisplayRowIndex(rowIndex);
		                    var radioName = cellInfo.mainGridId + "_radio_" + cellInfo.id;
		                    var radioId = radioName + "_" + rowIndex;
		                    var radioLabel = cellInfo.options.radioLabel || "";
		                    if (cellInfo.options.radioLabelColumn) {
		                        var tempColArr = cellInfo.options.radioLabelColumn.split(",");
		                        var tempLabel = "";
		                        var labelDelimiter = cellInfo.options.radioLabelDelimiter || this.options.labelDelimiter || " ";
		                        for (var i = 0; i < tempColArr.length; i++) {
		                            var tempHeaderId = this.bodyToHeaderRelation[tempColArr[i]];
		                            if (i === tempColArr.length - 1) {
		                                if (this.options.showRadioLabelUserFormat) {
		                                    tempLabel += " " + this.getHeaderValue(tempHeaderId) + " " + this._getCellDisplayData(rowIndex, tempColArr[i], {removeTag:true});
		                                } else {
		                                    tempLabel += this._getCellDisplayData(rowIndex, tempColArr[i], {removeTag:true});
		                                }
		                            } else {
		                                if (this.options.showRadioLabelUserFormat) {
		                                    var rowMsg = WebSquare.language.getMessage("Grid_row") || "row";
		                                    var rowIndexStr = (i === 0) ? (rowIndex + 1) + rowMsg + labelDelimiter : "";
		                                    tempLabel += rowIndexStr + " " + this.getHeaderValue(tempHeaderId) + " " + this._getCellDisplayData(rowIndex, tempColArr[i], {removeTag:true}) + labelDelimiter;
		                                } else {
		                                    tempLabel += this._getCellDisplayData(rowIndex, tempColArr[i], {removeTag:true}) + labelDelimiter;
		                                }
		                            }
		                        }
		                        if (radioLabel) {
		                            radioLabel = tempLabel + labelDelimiter + radioLabel;
		                        } else {
		                            radioLabel = tempLabel;
		                        }
		                    }
		                    if (cellInfo.options.radioLabelFormatter) {
		                        try {
		                            var radioLabelFormatter = util.getGlobalFunction(cellInfo.options.radioLabelFormatter, cellInfo.scope_id);
		                            if (typeof radioLabelFormatter === "function") {
		                                radioLabel = radioLabelFormatter.call(this, groupbyDisplayRowIndex, this.getColumnIndex(cellInfo.colID), radioLabel);
		                            }
		                        } catch (e) {
		                            logger.printLog(this.id + "_" + cellInfo.id + " radioLabelFormatter error : " + e.message);
		                        }
		                    }
		                    htmlStr = "<INPUT style='border-width:0px;' type='radio' class='w2grid_embedded_radio' " + " id='" + radioId + "' name='" + radioName + "'/>";
		                    if (cellInfo.getEscape()) {
		                        radioLabel = WebSquare.xml._encode(radioLabel + "");
		                    }
		                    var labelStr = "<label class='w2radio_label ' for='" + radioId + "'>" + radioLabel + "</label>";
		                    if (cellInfo.options.radioLabelPosition === "left") {
		                        htmlStr = labelStr + htmlStr;
		                    } else {
		                        htmlStr = htmlStr + labelStr;
		                    }
		                    wrapperCell.innerHTML = htmlStr;
		                    var input = wrapperCell.firstChild;
		                } else {
		                    var name = cellInfo.mainGridId + "_radio_" + cellInfo.id;
		                    htmlStr = "<INPUT style='border-width:0px;' type='radio' name='" + name + "' class='w2grid_embedded_radio' />";
		                    wrapperCell.innerHTML = htmlStr;
		                    var input = wrapperCell.firstChild;
		                    if (titleStr) {
		                        input.title = titleStr;
		                    } else if (cellInfo.options.title) {
		                        input.title = cellInfo.options.title;
		                    } else if (this.options.titleAuto) {
		                        var headerTitle = this.getHeaderValue(this.bodyToHeaderRelation[cellInfo.id]) || "";
		                        if (data) {
		                            input.title = headerTitle + WebSquare.language.getMessage("Grid_title");
		                        } else {
		                            input.title = headerTitle + WebSquare.language.getMessage("Grid_title_not_choose");
		                        }
		                        if (radioLabel) {
		                            input.title = input.title + radioLabel;
		                        }
		                    }
		                }
		                // senseReader에서 createElement로 만든 체크박스는 "체크 상자"라고 읽지 못하고 "입력 창"이라고 읽는 버그가 있어서 innerHTML을 이용하도록 수정
		                this.event.addListener(input, "onclick", this.event.bindAsEventListener(this, function(e) {
		                    var target = event.getTarget(e);
		                    this.lastEvent = event.getInfo(e);
		                    // setFocusedCell을 호출하기 전에 lastFocusedTdByApi 값을 저장하고 초기화 한다
		                    var lastFocusedCell = this.getLastFocusedCell();
		                    var elem = target.parentNode;
		                    var rowIndex = this.getElemRowIndex(elem);
		                    var cellInfo = this.getCellInfo(elem);
		                    var colId = cellInfo.id;
		                    var colIndex = this.getColumnIndex(colId);
		                    if (lastFocusedCell.focusedTd != target.parentNode && !this.focusedByApi) {
		                        this._setFocusedCell(rowIndex, colId);
		                    }
		                    this.focusedByApi = false;
		                    if (cellInfo.options.noDisabledOnReadOnly && this._getEditReadOnly(rowIndex, colIndex)) {
		                        event.preventDefault(e);
		                    }
		                }));
		                if (cellInfo.options.noDisabledOnReadOnly) {
		                    var rowIndex = this.getElemRowIndex(render);
		                    if (this._getEditReadOnly(rowIndex, cellInfo.id)) {
		                        this.addClass(input, this.options.readOnlyClass + "_nodisabled");
		                    } else {
		                        this.removeClass(input, this.options.readOnlyClass + "_nodisabled");
		                    }
		                }
		            } else if (inputType == "calendar" && embeddedInput) {
		                var title = titleStr || cellInfo.options.title || "";
		                if (this.options.titleAuto && !title) {
		                    var headerTitle = this.getHeaderValue(this.bodyToHeaderRelation[cellInfo.id]) || "";
		                    if (data !== "") {
		                        title = headerTitle + " " + data;
		                    } else {
		                        title = headerTitle + WebSquare.language.getMessage("Grid_calendar");
		                    }
		                }
		                var ioFormat = cellInfo.options.ioFormat;
		                var _opts = {
		                    style: "width:0px; height:0px;",
		                    delimiter: "$blank",
		                    calendarValueType: cellInfo.options.calendarValueType,
		                    calendarClass: cellInfo.options.calendarClass || "class1",
		                    ioFormat: ioFormat,
		                    ioFormatter: "$blank",
		                    displayFormat: cellInfo.options.displayFormat || ioFormat,
		                    displayFormatter: cellInfo.options.displayFormatter,
		                    displayFormatFunc: cellInfo.options.displayFormatFunc,
		                    calendarDisplayFormatFunc: cellInfo.options.calendarDisplayFormatFunc,
		                    footerDiv: true,
		                    renderDiv: true,
		                    keepFocusSelect: true,
		                    focusOnOuterDiv: true,
		                    renderType: "native",
		                    readOnly: "$blank",
		                    disabled: "$blank",
		                    title: title,
		                    validCheck: false,
		                    _scope_obj_uuid: cellInfo.options._scope_obj_uuid,
		                    senseReader: cellInfo.options.senseReader,
		                    accessibility: this.options.accessibility,
		                    disableAfterDate: cellInfo.options.disableAfterDate,
		                    disableBeforeDate: cellInfo.options.disableBeforeDate,
		                    xmlEvents: [{
		                        name: "onclick",
		                        action: "script",
		                        param: {
		                            handler: function(e) {
		                                var newRowIndex = parseInt(this.render.getAttribute(dataRowIndex), 10);
		                                var colID = _this._getWrapperTD(this.render.parentNode).getAttribute(dataCol_id);
		                                var newColIndex = _this.getColumnIndex(colID);
		                                var ignoreReadOnlyCellClick = _this.options.ignoreReadOnlyCellClick && _this.___getEditReadOnly(newRowIndex, newColIndex);
		                                if (!ignoreReadOnlyCellClick) {
		                                    event.fireEvent(_this, "oncellclick", newRowIndex, newColIndex, colID);
		                                }
		                                // bodyClick 이벤트가 발생하지 않도록 처리
		                                event.stopPropagation(e);
		                            }
		                        }
		                    }, {
		                        name: "onafterviewchange",
		                        action: "script",
		                        param: {
		                            handler: function(info) {
		                                var rowIndex = parseInt(this.render.getAttribute(dataRowindex), 10);
		                                var groupbyDisplayRowIndex = _this._getGroupbyDisplayRowIndex(rowIndex);
		                                var gridCol = _this.getColumnIndex(_this._getWrapperTD(this.render.parentNode).getAttribute(dataCol_id));
		                                if (info.oldValue != info.newValue) {
		                                    event.fireEvent(_this, "onviewchange", {
		                                        "oldValue": info.oldValue,
		                                        "newValue": info.newValue,
		                                        "rowIndex": groupbyDisplayRowIndex,
		                                        "colIndex": gridCol,
		                                        "colId": _this.getColumnID(gridCol)
		                                    });
		                                }
		                            }
		                        }
		                    }, {
		                        name: "ondateselect",
		                        action: "script",
		                        param: {
		                            handler: function(formattedValue, dateObj) {
		                                if (this.options.senseReader) {
		                                    //focus를 주게되면 inputCalendar의 click이벤트가 발생하는 버그가 IE브라우저에서 생긴다. 
		                                    //var tempElem = document.getElementById(this.id + "_img");
		                                    //if(tempElem != null) {
		                                    //tempElem.focus();
		                                    //}
		                                } else {
		                                    this.dom.input.blur();
		                                }
		                                var rowIndex = this.render.getAttribute(dataRowindex);
		                                var col_id = _this._getWrapperTD(this.render.parentNode).getAttribute(dataCol_id);
		                                //var value = input.validator.validateString(this.getValue());
		                                var value = this.getValue();
		                                _this.dataList.__setCellData(rowIndex, col_id, value);
		                                rowIndex = parseInt(rowIndex, 10);
		                                var colIndex = _this.getColumnIndex(col_id);
		                                event.fireEvent(_this, "ondateselect", rowIndex, colIndex, formattedValue, dateObj);
		                            }
		                        }
		                    }, {
		                        name: "onconfirm",
		                        action: "script",
		                        param: {
		                            handler: function() {
		                                if (this.options.senseReader) {
		                                    //focus를 주게되면 inputCalendar의 click이벤트가 발생하는 버그가 IE브라우저에서 생긴다. 
		                                    //var tempElem = document.getElementById(this.id + "_img");
		                                    //if(tempElem != null) {
		                                    //tempElem.focus();
		                                    //}
		                                } else {
		                                    this.dom.input.blur();
		                                }
		                                var rowIndex = this.render.getAttribute(dataRowindex);
		                                var col_id = _this._getWrapperTD(this.render.parentNode).getAttribute(dataCol_id);
		                                var value = input.validator.validateString(this.getValue());
		                                _this.dataList.__setCellData(rowIndex, col_id, value);
		                            }
		                        }
		                    }, {
		                        name: "onyearselect",
		                        action: "script",
		                        param: {
		                            handler: function(e) {
		                                var rowIndex = parseInt(this.render.getAttribute(dataRowindex), 10);
		                                var colIndex = _this.getColumnIndex(_this._getWrapperTD(this.render.parentNode).getAttribute(dataCol_id));
		                                event.fireEvent(_this, "onyearselect", rowIndex, colIndex, {
		                                    "oldValue": e.oldValue,
		                                    "newValue": e.newValue
		                                });
		                            }
		                        }
		                    }, {
		                        name: "onmonthselect",
		                        action: "script",
		                        param: {
		                            handler: function(e) {
		                                var rowIndex = parseInt(this.render.getAttribute(dataRowindex), 10);
		                                var colIndex = _this.getColumnIndex(_this._getWrapperTD(this.render.parentNode).getAttribute(dataCol_id));
		                                event.fireEvent(_this, "onmonthselect", rowIndex, colIndex, {
		                                    "oldValue": e.oldValue,
		                                    "newValue": e.newValue
		                                });
		                            }
		                        }
		                    }, {
		                        name: "onbeforepaste",
		                        action: "script",
		                        param: {
		                            handler: function(data) {
		                                var rowIndex = parseInt(this.render.getAttribute(dataRowindex), 10);
		                                var colIndex = _this.getColumnIndex(this.render.parentNode.getAttribute(dataCol_id));
		                                var info = {
		                                    "rowIndex": rowIndex,
		                                    "colIndex": colIndex,
		                                    "data": [[data]] 
		                                };
		                                return event.fireEvent(_this, "onbeforepaste", info);
		                            }
		                        }
		                    }]
		                };
		                var input = new WebSquare.uiplugin.inputCalendar(input_id, _opts, cellInfo.element);
		                try {
		                    if (cellInfo.element && !cellInfo.element.getAttribute("dateValidCheck")) {
		                        input.options.dateValidCheck = core.getConfiguration('/WebSquare/' + this.options.pluginName + '/column[@inputType="calendar"]/dateValidCheck/@value') || "false";
		                    }
		                } catch (e) {
		                    exception.printStackTrace(e, null, this);
		                }
		                if (embeddedInput && !render) {
		                    return input;
		                }
		                wrapperCell.textContent = "";
		                input.writeTo(wrapperCell);
		                if (!input.parentControl) {
		                    this.addControl(input)
		                }
		                if (ioFormat != input.options.ioFormat) {
		                    cellInfo.options.ioFormat = input.options.ioFormat;
		                    cellInfo.initFormatter();
		                }
		                input.setVerticalAlign = function() {}; //TODO : ff에서 verticalAlign 구현 필요
		                input.handleKeyupEvent = function() {}; //TODO : display="all"일때 구현이 빠지게됨
		                var _handleFocusEvent = WebSquare.uiplugin.inputCalendar.prototype.handleFocusEvent;
		                input.handleFocusEvent = function(e) {
		                    if (_this.editEndFlag && _this.fakeInput.lastInput != this) {
		                        event.stopEvent(e);
		                        return false;
		                    }
		                    var rowIndex = this.render.getAttribute(dataRowindex);
		                    var groupbyDisplayRowIndex = _this._getGroupbyDisplayRowIndex(rowIndex);
		                    var col_id = _this._getWrapperTD(this.render.parentNode).getAttribute(dataCol_id);
		                    _this.lastEvent = event.getInfo(e);
		                    var lastFocusedCell = _this.getLastFocusedCell();
		                    if (lastFocusedCell.focusedTd != _this._getWrapperTD(this.render.parentNode) && !_this.focusedByApi) {
		                        _this._setFocusedCell(rowIndex, col_id);
		                    }
		                    _handleFocusEvent.call(this, e);
		                    _this.focusedByApi = false;
		                    if (!this.reFocus) {
		                        _this.showFakeInput(this);
		                        _this.fakeInput.setValue(this.getValue());
		                        this.select();
		                        this.focus();
		                        if (_this.fakeInput.render.parentNode) {
		                            var colIndex = _this.getColumnIndex(col_id);
		                            event.fireEvent(_this, "onbeforeedit", groupbyDisplayRowIndex, colIndex, _this._dataList.getCellData(rowIndex, colIndex));
		                        }
		                    }
		                    _this.F2Mode = false;
		                    this.reFocus = false;
		                };
		                var _handleKeyEvent = WebSquare.uiplugin.inputCalendar.prototype.handleKeyEvent;
		                input.handleKeyEvent = function(e) {
		                    _this.lastEvent = event.getInfo(e);
		                    _handleKeyEvent.call(this, e);
		                    var _inputRender = this.dom[input.id + "_input"];
		                    switch (e.keyCode) {
		                        case 46: // del
		                            // TODO: del키를 입력했을때는 onchage 이벤트만 발생하고 있다. onbeforeedit, oneditend, onafteredit 이벤트도 발생해야 함
		                            event.stopPropagation(e);
		                            return;
		                        case 27: // ESC
		                            // 값을 원복하고 input.select()를 호출한다
		                            _this.F2Mode = false;
		                            _this.showFakeInput(this);
		                            this.setValue(_this.dataList.getCellData(_this._getFocusedRowIndex(), _this.getFocusedColumnIndex()));
		                            this.select();
		                            event.stopPropagation(e);
		                            return;
		                        case 113: // F2
		                            // F2Mode 모드로 설정하고 커서를 맨 끝으로 보낸다
		                            _this.F2Mode = true;
		                            WebSquare.text.setCaretPos(_inputRender, _inputRender.value.length);
		                            _this.hideFakeInput(this);
		                            event.stopPropagation(e);
		                            return;
		                        case 9: //tab
		                            var it = this.event.getTargetIterator(e, this.render);
		                            while (it.next()) {
		                                if (it.match("w2inputCalendar_divInput")) {
		                                    event.stopPropagation(e);
		                                    break;
		                                }
		                                if (it.match("w2inputCalendar_button") && e.shiftKey) {
		                                    event.stopPropagation(e);
		                                    break;
		                                }
		                            }
		                            return;
		                    }
		                    var keyCode = e.which || e.keyCode;
		                    if (_this.nonCharKeys[keyCode]) {
		                        // 문자 입력 키가 아니라면 아무것도 하지 않는다
		                        return;
		                    }
		                    if (keyCode == 32) {
		                        // space는 문자 입력 키로 분류되어 아래 로직을 타기 때문에 따로 분기처리한다.
		                        event.stopPropagation(e);
		                        return;
		                    }
		                    if (_this.fakeInput.render.parentNode) {
		                        _this.hideFakeInput(this);
		                    }
		                    event.stopPropagation(e);
		                };
		                var _handleBlurEvent = WebSquare.uiplugin.inputCalendar.prototype.handleBlurEvent;
		                input.handleBlurEvent = function(e) {
		                    var rowIndex = this.render.getAttribute(dataRowindex);
		                    var groupbyDisplayRowIndex = _this._getGroupbyDisplayRowIndex(rowIndex);
		                    var col_id = _this._getWrapperTD(this.render.parentNode).getAttribute(dataCol_id);
		                    var colIndex = _this.getColumnIndex(col_id);
		                    var value = input.validator.validateString(this.getValue());
		                    var historyData = WebSquare.historyManager.get(this.options.pluginName, this.id);
		                    var oldValue;
		                    if (historyData) {
		                        oldValue = historyData.value;
		                    }
		                    if (this.options.disableDateValidSet && this.disableValidate(value)) {
		                        if (historyData.value != undefined) {
		                            this._setValue(historyData.value, {
		                                "skipValidate" : true
		                            });
		                        }
		                        return false;
		                    } else if (this.validate(value) === false && value != "") {
		                        if (this.options.dateValidSet && this.options.dateValidSetCustom) {
		                            //var historyData = WebSquare.historyManager.get(this.options.pluginName, this.id);
		                            //if (historyData.value != undefined) {
		                            //    this._setValue(historyData.value, {
		                            //        "skipValidate" : true
		                            //    });
		                            // }
		                        } else {
		                            if (this.options.dateValidSet) {
		                                if (historyData.value != undefined) {
		                                    this._setValue(historyData.value, {
		                                        "skipValidate" : true
		                                    });
		                                }
		                            }
		                            if (this.options.displaymessage !== "false") {
		                                var invalidMessage = WebSquare.language.getMessage("IC_invalidCalendarSelect") || "Invalid date format";
		                                if (!this.options.invalidMessageFunc) {
		                                    alert(invalidMessage);
		                                }
		                            }
		                        }
		                        return false;
		                    }
		                    var ret = event.fireEvent(_this, "oneditend", groupbyDisplayRowIndex, colIndex, value, e);
		                    if (ret + "" == "false") {
		                        _this.editEndFlag = true;
		                        this.reFocus = true;
		                        if (_this.fakeInput.lastInput == this) {
		                            this.focus();
		                        }
		                        var lastFocusedCell = _this.getLastFocusedCell();
		                        if (lastFocusedCell.focusedTd != _this._getWrapperTD(this.render.parentNode)) {
		                            _this._setFocusedCell(rowIndex, col_id);
		                        }
		                        event.stopEvent(e);
		                        return false;
		                    }
		                    _this.editEndFlag = false;
		                    _handleBlurEvent.call(this, e);
		                    var cellInfo = _this.getCellInfo(col_id);
		                    _this.dataList.__setCellData(rowIndex, col_id, value);
		                    value = _this._dataList.getCellData(rowIndex, col_id); // onchange에서 setCellData등을 하며 값이 변경 될 경우를 대비하기 위해 다시 get해줌.
		                    //if (cellInfo.options.applyFormat != "all" && !this.options.displayFormat) {
		                    //    value = cellInfo.getDisplayData(value);
		                    //}
		                    //this.setValue(value);
		                    var unformattedValue = input.sub_validator.validateString(value);
		                    this._setValue(unformattedValue, {"skipValidate" : true});
		                    // TODO: onafteredit의 반환값을 어디서 참조하고 있는지 확인 필요
		                    event.fireEvent(this, "onafterviewchange", {
		                        "oldValue": oldValue,
		                        "newValue": value
		                    });
		                    var ret = event.fireEvent(_this, "onafteredit", rowIndex, colIndex, value, _this.lastEvent);
		                    _this.F2Mode = false;
		                };
		                input.setStyle("z-index", "10"); // inputCalendar는 position과 size 관련 이외의 style은 내부의 input으로 넘겨버리기 때문에 z-index를 동적으로 setting 해 주었다
		                input.activate();
		                if (!this.fakeInput) {
		                    this.makeFakeInput();
		                }
		            } else if (inputType == "text" || inputType == "textImage" || inputType == "drilldown" || inputType == "secret") {
		                var type = !cellInfo.options.type ? "text" : cellInfo.options.type;
		                var title = titleStr || "";
		                if (inputType == "secret") {
		                    type = "password";
		                }
		                if (isbigDecimalType) {
		                    dataType = "bigDecimal";
		                }
		                // [SKT-507] inputType custom 에서 동적으로 생성되는 경우 동적으로 설정되는 옵션에 대해서 extend를 받는다.
		                var maxLength = cellInfo.options._floatMaxLength || cellInfo.options.maxLength || cellInfo.options.maxlength || -1;
		                var inputOptions = {
		                    style: "position:absolute;display:none;border:1px solid " + this.options.selectedCellColor + ";outline:none;z-index:10;",
		                    ioFormat: "$blank",
		                    ioFormatter: "$blank",
		                    displayFormat: cellInfo.options.applyFormat == "all" ? "" : "$blank", //applyFormat이 all인경우에 문제
		                    displayFormatter: "$blank",
		                    readOnly: "$blank",
		                    disabled: "$blank",
		                    title: title,
		                    type: type,
		                    dataType: dataType,
		                    editType: cellInfo.options.editType,
		                    byteCheckIgnoreChar: cellInfo.options.byteCheckIgnoreChar,
		                    maxlength: maxLength,
		                    useBigDecimalFloat: cellInfo._isBigDecimalFloatMaxLength && cellInfo._isBigDecimalFloatMaxLength(maxLength),
		                    maskFormat: cellInfo.options.maskFormat,
		                    maskFormatModelNumber: cellInfo.options.maskFormatModelNumber,
		                    customModelFormatter: cellInfo.options.customModelFormatter,
		                    customModelUnformatter: cellInfo.options.customModelUnformatter,
		                    customPasteFormatter: this.options.customPasteFormatter,
		                    useMaxLength: cellInfo.options.useMaxLength,
		                    adjustMaxLength: cellInfo.options.adjustMaxLength,
		                    useKeyupBlur: false,
		                    inputMode: cellInfo.options.inputMode || "",
		                    _scope_obj_uuid: cellInfo.options._scope_obj_uuid,
		                    xmlEvents: [{
		                        name: "ondblclick",
		                        action: "script",
		                        param: {
		                            handler: function(e) {
		                                var rowIndex = cellInfo.editRowIndex;
		                                var colIndex = _this.getColumnIndex(cellInfo.id);
		                                event.fireEvent(_this, "oneditdblclick", rowIndex, colIndex, cellInfo.id);
		                            }
		                        }
		                    }]
		                };
		                if (cellInfo.options.maskFormat && cellInfo.options.applyFormat == "display") {
		                    inputOptions.displayFormat = cellInfo.options.displayFormat;
		                }
		                if (cellInfo.internal) {
		                    inputOptions = _wg.extend(_wg.extend(inputOptions, cellInfo.initializeInfo.options));
		                }
		                if (cellInfo.options.dataType === "float") {
		                    inputOptions['dataType'] = cellInfo.options.dataType;
		                }
		                input = new WebSquare.uiplugin.input(input_id, inputOptions, cellInfo.element);
		                input.writeTo(this);
		                if (this.options.editInputClass && inputType == "text") {
		                    this.addClass(input.render, this.options.editInputClass);
		                }
		                input.event.addListener(input.render, "oncopy", this.event.bindAsEventListener(this, function(e) { // gridView에 등록된 oncopy 이벤트가 발생하지 않도록 처리
		                    event.stopPropagation(e);
		                }));
		                input.event.addListener(input.render, "onpaste", this.event.bindAsEventListener(this, function(e) { // gridView에 등록된 onpaste 이벤트가 발생하지 않도록 처리
		                    event.stopPropagation(e);
		                }));
		                //          input.event.addListener( input.render , "onclick" , this.event.bindAsEventListener(this, function(e) {
		                //              _this._endEdit();
		                //          }));
		                input.activate();
		                if (cellInfo.options.dataType == "number") {
		                    if (cellInfo.options.displayFormat == "") {
		                        input.validator.addCommand(new WebSquare.validator.allowCharCommand("+\\-.0-9"));
		                    } else if (!(cellInfo.options.maskFormat && cellInfo.options.displayFormat)) {
		                        input.validator.addCommand(new WebSquare.validator.numberCommand());
		                    }
		                } else if (cellInfo.options.dataType == "euro") {
		                    input.validator.addCommand(new WebSquare.validator.euroCommand(input.options.delimiter, input.options.decimalDelimiter));
		                } else if (cellInfo.options.dataType == "text") {
		                    if (!(cellInfo.options.maskFormat && cellInfo.options.displayFormat)) {
		                        cellInfo.options.applyFormat = "display";
		                    }
		                }
		                input.setVerticalAlign = function() {}; //TODO : ff에서 verticalAlign 구현 필요
		                //input.handleKeyDownEventBasic = function(){};
		                this._moveKeyEdit(input.uuid, "handleKeydownEvent", {
		                    oldMode: true
		                });
		            } else if (inputType == "textarea") {
		                if (embeddedInput) {
		                    var rowIndex;
		                    var colIndex;
		                    var disabled;
		                    var readOnly;
		                    if (render) {
		                        rowIndex = this.getElemRowIndex(render);
		                        colIndex = this.getColumnIndex(render.getAttribute(dataCol_id));
		                        disabled = this._getEditDisabled(rowIndex, colIndex);
		                        readOnly = this.___getEditReadOnly(rowIndex, colIndex);
		                    }
		                    //var heightStr = cellInfo.options.height ? "height:" + cellInfo.options.height + "px;" : "height:60px;";
		                    var styleStr = "position:relative;display:none;width:150px;height:60px;resize:none;";
		                    if (this.options.accessibility !== true) {
		                        styleStr = styleStr + "z-index:1000;";
		                    }
		                    input = new WebSquare.uiplugin.textarea(input_id, {
		                        style: styleStr,
		                        className: "$blank",
		                        readOnly: readOnly === true ? readOnly : "$blank",
		                        disabled: disabled === true ? disabled : "$blank",
		                        maxlength: cellInfo.options.maxLength || -1,
		                        _scope_obj_uuid: cellInfo.options._scope_obj_uuid,
		                        accessibility: this.options.accessibility,
		                        xmlEvents: [{
		                            name: "onkeydown",
		                            action: "script",
		                            param: {
		                                handler: function(e) {
		                                    // handleBodyKeyDown 이벤트가 발생하지 않도록 처리
		                                    var keyCode = (e.charCode) ? e.charCode : e.keyCode;
		                                    if (keyCode !== 9 && keyCode !== 35 && keyCode !== 36) {
		                                        event.stopPropagation(e);
		                                    }
		                                }
		                            }
		                        }]
		                    }, cellInfo.element);
		                    var _handleBlurEvent = WebSquare.uiplugin.textarea.prototype.handleBlurEvent;
		                    input.handleBlurEvent = function(e) {
		                        _handleBlurEvent.call(this, e);
		                        //var tdIndex = parseInt(this.render.parentNode.getAttribute("tdIndex"));
		                        //var trIndex = parseInt(tdIndex / _this.realRowDataLength);
		                        //var rowIndex = trIndex + _this.rowIndex;
		                        var rowIndex = parseInt(this.render.getAttribute(dataRowindex), 10);
		                        var col_id = _this._getWrapperTD(this.render.parentNode).getAttribute(dataCol_id);
		                        var cellInfo = _this.getCellInfo(col_id);
		                        var value = this.getValue();
		                        var dataType = cellInfo.mainGrid.getColumnOption(cellInfo.options.col_id, "dataType");
		                        if (dataType == "number") {
		                            if (value != "") {
		                                value = Number(value);
		                            }
		                        }
		                        cellInfo.mainGrid.dataList.__setCellData(rowIndex, col_id, value);
		                    };
		                } else {
		                    var _opts = {
		                        style: "position:absolute;display:none;width:150px;height:60px;z-index:1000;resize:none;",
		                        className: "$blank",
		                        readOnly: "$blank",
		                        disabled: "$blank",
		                        maxlength: cellInfo.options.maxLength || -1,
		                        _scope_obj_uuid: cellInfo.options._scope_obj_uuid
		                    };
		                    if (cellInfo.options.keepCellClass === true) {
		                        _opts.className = "";
		                    }
		                    if (cellInfo.internal) {
		                        _opts = _wg.extend(_wg.extend(_opts, cellInfo.initializeInfo.options));
		                    }
		                    input = new WebSquare.uiplugin.textarea(input_id, _opts, cellInfo.element);
		                }
		                input.writeTo(this);
		                input.event.addListener(input.render, "oncopy", this.event.bindAsEventListener(this, function(e) { // gridView에 등록된 oncopy 이벤트가 발생하지 않도록 처리
		                    event.stopPropagation(e);
		                }));
		                input.event.addListener(input.render, "onpaste", this.event.bindAsEventListener(this, function(e) { // gridView에 등록된 onpaste 이벤트가 발생하지 않도록 처리
		                    event.stopPropagation(e);
		                }));
		                this._moveKeyEdit(input.uuid, "handleKeydownEvent");
		                input.activate();
		            } else if (inputType == "calendar") {
		                var ioFormat = cellInfo.options.ioFormat;
		                var _opts = {
		                    style: "position:absolute;display:none;border:1px solid " + this.options.selectedCellColor + ";outline:none;",
		                    delimiter: "$blank",
		                    calendarValueType: cellInfo.options.calendarValueType,
		                    calendarClass: cellInfo.options.calendarClass || "class1",
		                    ioFormat: ioFormat,
		                    ioFormatter: "$blank",
		                    displayFormat: cellInfo.options.displayFormat || ioFormat,
		                    applyFormat: cellInfo.options.applyFormat || "display",
		                    displayFormatter: "$blank",
		                    holidayRef: cellInfo.options.holidayRef || "",
		                    keepFocusSelect: true,
		                    focusOnOuterDiv: true,
		                    footerDiv: cellInfo.options.footerDiv,
		                    _scope_obj_uuid: cellInfo.options._scope_obj_uuid,
		                    readOnly: "$blank",
		                    disabled: "$blank",
		                    validCheck: false,
		                    renderDiv: true,
		                    inputReadOnly: cellInfo.options.inputReadOnly,
		                    unformatOnPaste: cellInfo.options.unformatOnPaste,
		                    pickerType: cellInfo.options.pickerType,
		                    fixPickerStatus: cellInfo.options.fixPickerStatus,
		                    xmlEvents: [{
		                        name: "ondateselect",
		                        action: "script",
		                        param: {
		                            handler: function(formattedValue, dateObj) {
		                                var rowIndex = cellInfo.editRowIndex;
		                                var colIndex = _this.getColumnIndex(cellInfo.id);
		                                event.fireEvent(_this, "ondateselect", rowIndex, colIndex, formattedValue, dateObj);
		                            }
		                        }
		                    }, {
		                        name: "onmonthselect",
		                        action: "script",
		                        param: {
		                            handler: function(e) {
		                                var rowIndex = cellInfo.editRowIndex;
		                                var colIndex = _this.getColumnIndex(cellInfo.id);
		                                event.fireEvent(_this, "onmonthselect", rowIndex, colIndex, {
		                                    "oldValue": e.oldValue,
		                                    "newValue": e.newValue
		                                });
		                            }
		                        }
		                    }, {
		                        name: "onyearselect",
		                        action: "script",
		                        param: {
		                            handler: function(e) {
		                                var rowIndex = cellInfo.editRowIndex;
		                                var colIndex = _this.getColumnIndex(cellInfo.id);
		                                event.fireEvent(_this, "onyearselect", rowIndex, colIndex, {
		                                    "oldValue": e.oldValue,
		                                    "newValue": e.newValue
		                                });
		                            }
		                        }
		                    }, {
		                        name: "onbeforepaste",
		                        action: "script",
		                        param: {
		                            handler: function(data) {
		                                var rowIndex = cellInfo.editRowIndex;
		                                var colIndex = _this.getColumnIndex(cellInfo.id);
		                                var info = {
		                                    "rowIndex": rowIndex,
		                                    "colIndex": colIndex,
		                                    "data": [[data]]
		                                };
		                                return event.fireEvent(_this, "onbeforepaste", info);
		                            }
		                        }
		                    }]
		                }
		                if (cellInfo.internal) {
		                    _opts = _wg.extend(_wg.extend(_opts, cellInfo.initializeInfo.options));
		                }
		                var input = new WebSquare.uiplugin.inputCalendar(input_id, _opts, cellInfo.element);
		                try {
		                    if (cellInfo.internal == false) {
		                        if (cellInfo.element && !cellInfo.element.getAttribute("dateValidCheck")) {
		                            input.options.dateValidCheck = core.getConfiguration('/WebSquare/' + this.options.pluginName + '/column[@inputType="calendar"]/dateValidCheck/@value') || "false";
		                        }
		                    } else if (cellInfo.options.dateValidCheck == true || cellInfo.options.dateValidCheck == "true") {
		                        input.options.dateValidCheck = "true";
		                    }
		                } catch (e) {
		                    exception.printStackTrace(e, null, this);
		                }
		                input.writeTo(this);
		                input.event.addListener(input.render, "oncopy", this.event.bindAsEventListener(this, function(e) { // gridView에 등록된 oncopy 이벤트가 발생하지 않도록 처리
		                    event.stopPropagation(e);
		                }));
		                input.event.addListener(input.render, "onpaste", this.event.bindAsEventListener(this, function(e) { // gridView에 등록된 onpaste 이벤트가 발생하지 않도록 처리
		                    event.stopPropagation(e);
		                }));
		                if (ioFormat != input.options.ioFormat) {
		                    cellInfo.options.ioFormat = input.options.ioFormat;
		                    cellInfo.initFormatter();
		                }
		                this._moveKeyEdit(input.uuid, "handleKeyEvent");
		                input.activate();
		                input.setVerticalAlign = function() {}; //TODO : ff에서 verticalAlign 구현 필요
		                if (cellInfo.options.applyFormat === "display") {
		                    input.handleKeyupEvent = function() {}; //TODO : display="all"일때 구현이 빠지게됨
		                }
		                input.setStyle("z-index", "10"); // inputCalendar는 position과 size 관련 이외의 style은 내부의 input으로 넘겨버리기 때문에 z-index를 동적으로 setting 해 주었다
		                if (input.options.dateValidSet && input.options.dateValidSetCustom) {
		                    input._skipDateValidSet = true;
		                }
		            } else if (inputType == "autoComplete" && embeddedInput) {
		                var _opts = {};
		                _opts.titleStr = titleStr;
		                _opts.input_id = input_id;
		                _opts.dataRowIndex = dataRowIndex;
		                _opts.dataCol_id = dataCol_id;
		                input = cellInfo.getInput(cellInfo, render, data, _opts);            
		            }
		            this.dom[input_id] = input;
		            if (embeddedInput) {
		                this.adaptiveEmbeddedInputIdList.push(input_id);
		            }
		        } else {
		            if (inputType == "checkbox" && embeddedInput) {
		                if (cellInfo.options.checkboxLabel || cellInfo.options.checkboxLabelColumn || cellInfo.options.checkboxLabelFormatter) {
		                    var rowIndex = this.getElemRowIndex(render);
		                    var groupbyDisplayRowIndex = this._getGroupbyDisplayRowIndex(rowIndex);
		                    var checkboxName = cellInfo.mainGridId + "_checkbox_" + cellInfo.id;
		                    var checkboxId = checkboxName + "_" + rowIndex;
		                    var checkboxLabel = cellInfo.options.checkboxLabel || "";
		                    if (cellInfo.options.checkboxLabelColumn) {
		                        var tempColArr = cellInfo.options.checkboxLabelColumn.split(",");
		                        var tempLabel = "";
		                        var labelDelimiter = cellInfo.options.checkboxLabelDelimiter || this.options.labelDelimiter || " ";
		                        for (var i = 0; i < tempColArr.length; i++) {
		                            var tempHeaderId = this.bodyToHeaderRelation[tempColArr[i]];
		                            if (i === tempColArr.length - 1) {
		                                if (this.options.showCheckboxLabelUserFormat) {
		                                    tempLabel += " " + this.getHeaderValue(tempHeaderId) + " " + this._getCellDisplayData(rowIndex, tempColArr[i], {removeTag:true});
		                                } else {
		                                    tempLabel += this._getCellDisplayData(rowIndex, tempColArr[i], {removeTag:true});
		                                }
		                            } else {
		                                if (this.options.showCheckboxLabelUserFormat) {
		                                    var rowMsg = WebSquare.language.getMessage("Grid_row") || "row";
		                                    var rowIndexStr = (i === 0) ? (rowIndex + 1) + rowMsg + labelDelimiter : "";
		                                    tempLabel += rowIndexStr + " " + this.getHeaderValue(tempHeaderId) + " " + this._getCellDisplayData(rowIndex, tempColArr[i], {removeTag:true}) + labelDelimiter;
		                                } else {
		                                    tempLabel += this._getCellDisplayData(rowIndex, tempColArr[i], {removeTag:true}) + labelDelimiter;
		                                }
		                            }
		                        }
		                        if (checkboxLabel) {
		                            checkboxLabel = tempLabel + labelDelimiter + checkboxLabel;
		                        } else {
		                            checkboxLabel = tempLabel;
		                        }
		                    }
		                    if (cellInfo.options.checkboxLabelFormatter) {
		                        try {
		                            var checkboxLabelFormatter = util.getGlobalFunction(cellInfo.options.checkboxLabelFormatter, cellInfo.scope_id);
		                            if (typeof checkboxLabelFormatter === "function") {
		                                checkboxLabel = checkboxLabelFormatter.call(this, groupbyDisplayRowIndex, this.getColumnIndex(cellInfo.colID), checkboxLabel);
		                            }
		                        } catch (e) {
		                            logger.printLog(this.id + "_" + cellInfo.id + " checkboxLabelFormatter error : " + e.message);
		                        }
		                    }
		                    if (cellInfo.getEscape()) {
		                        checkboxLabel = WebSquare.xml._encode(checkboxLabel + "");
		                    }
		                    var label = render.getElementsByTagName("label")[0];
		                    if (label) {
		                        core._fastInnerHTML(label, checkboxLabel);
		                    }
		                }
		            } else if (inputType == "radio" && embeddedInput) {
		                if (cellInfo.options.radioLabel || cellInfo.options.radioLabelColumn || cellInfo.options.radioLabelFormatter) {
		                    var rowIndex = this.getElemRowIndex(render);
		                    var groupbyDisplayRowIndex = this._getGroupbyDisplayRowIndex(rowIndex);
		                    var radioName = cellInfo.mainGridId + "_radio_" + cellInfo.id;
		                    var radioId = radioName + "_" + rowIndex;
		                    var radioLabel = cellInfo.options.radioLabel || "";
		                    if (cellInfo.options.radioLabelColumn) {
		                        var tempColArr = cellInfo.options.radioLabelColumn.split(",");
		                        var tempLabel = "";
		                        var labelDelimiter = cellInfo.options.radioLabelDelimiter || this.options.labelDelimiter || " ";
		                        for (var i = 0; i < tempColArr.length; i++) {
		                            var tempHeaderId = this.bodyToHeaderRelation[tempColArr[i]];
		                            if (i === tempColArr.length - 1) {
		                                if (this.options.showRadioLabelUserFormat) {
		                                    tempLabel += " " + this.getHeaderValue(tempHeaderId) + " " + this._getCellDisplayData(rowIndex, tempColArr[i], {removeTag:true});
		                                } else {
		                                    tempLabel += this._getCellDisplayData(rowIndex, tempColArr[i], {removeTag:true});
		                                }
		                            } else {
		                                if (this.options.showRadioLabelUserFormat) {
		                                    var rowMsg = WebSquare.language.getMessage("Grid_row") || "row";
		                                    var rowIndexStr = (i === 0) ? (rowIndex + 1) + rowMsg + labelDelimiter : "";
		                                    tempLabel += rowIndexStr + " " + this.getHeaderValue(tempHeaderId) + " " + this._getCellDisplayData(rowIndex, tempColArr[i], {removeTag:true}) + labelDelimiter;
		                                } else {
		                                    tempLabel += this._getCellDisplayData(rowIndex, tempColArr[i], {removeTag:true}) + labelDelimiter;
		                                }
		                            }
		                        }
		                        if (radioLabel) {
		                            radioLabel = tempLabel + labelDelimiter + radioLabel;
		                        } else {
		                            radioLabel = tempLabel;
		                        }
		                    }
		                    if (cellInfo.options.radioLabelFormatter) {
		                        try {
		                            var radioLabelFormatter = util.getGlobalFunction(cellInfo.options.radioLabelFormatter, cellInfo.scope_id);
		                            if (typeof radioLabelFormatter === "function") {
		                                radioLabel = radioLabelFormatter.call(this, groupbyDisplayRowIndex, this.getColumnIndex(cellInfo.colID), radioLabel);
		                            }
		                        } catch (e) {
		                            logger.printLog(this.id + "_" + cellInfo.id + " radioLabelFormatter error : " + e.message);
		                        }
		                    }
		                    if (cellInfo.getEscape()) {
		                        radioLabel = WebSquare.xml._encode(radioLabel + "");
		                    }
		                    var label = render.getElementsByTagName("label")[0];
		                    if (label) {
		                        core._fastInnerHTML(label, radioLabel);
		                    }
		                }
		            } else if ((inputType == "text") && embeddedInput) {
		                var title = titleStr || cellInfo.options.title || "";
		                if (!title) {
		                    var headerTitle = this.getHeaderValue(this.bodyToHeaderRelation[cellInfo.id]) || "";
		                    if (this.options.titleAuto) {
		                        if( data == "" || data == undefined) {
		                            title = headerTitle
		                        } else {
		                            title = headerTitle + " " + data;
		                        }
		                        input.render.title = title;
		                    }
		                }
		            }
		            if (this.options.titleFormatter && embeddedInput) {
		                if (titleStr && input.title !== titleStr) {
		                    input.title = titleStr;
		                }
		            }
		        }
		        return input;
		    };


		    cellInfo.prototype.setMaxLength = function(len) {
		        try {
		            var clearBigDecimalFloat = this.options.dataType === "bigDecimal" && !this._isBigDecimalFloatMaxLength(len);
		            if (clearBigDecimalFloat) {
		                delete this.options._floatMaxLength;
		                this.options.useBigDecimalFloat = false;
		            }
		            this.options.maxlength = this.options.maxLength = len;
		            if (this.options.inputType == "autoComplete") {
		                if (this.autoComplete) {
		                    this.autoComplete.setMaxLength(len);
		                }
		            } else if ((this.options.inputType === "text" || this.options.inputType === "secret") && this.options.embeddedInput == true) {
		                var text;
		                var oneRowDataLength = this.mainGrid.tdIdList.length;
		                var colIndex = this.mainGrid.getColumnIndex(this.options.id);
		                var rowCount = this.mainGrid.getRowCount();
		                for (var i = 0; i < rowCount; i++) {
		                    text = this.mainGrid.getInput(this, this.mainGrid.data_td_list[i * oneRowDataLength + colIndex]);
		                    if (clearBigDecimalFloat) {
		                        this._clearBigDecimalFloatMaxLength(text);
		                    }
		                    text.setMaxLength(len);
		                }
		            } else {
		                var inputComp = this.mainGrid.getInput(this);
		                if (clearBigDecimalFloat) {
		                    this._clearBigDecimalFloatMaxLength(inputComp);
		                }
		                inputComp.setMaxLength(len);
		            }
		        } catch (e) {
		            exception.printStackTrace(e, null, this);
		        }
		    };


		    cellInfo.prototype.setFloatMaxLength = function(len) {
		        try {
		            this.options.maxlength = this.options.maxLength = "-1";
		            this.options._floatMaxLength = len;
		            if (this._isBigDecimalFloatMaxLength(len)) {
		                this.options.useBigDecimalFloat = true;
		            }
		            if ((this.options.inputType === "text" || this.options.inputType === "secret") && this.options.embeddedInput == true) {
		                var text;
		                var oneRowDataLength = this.mainGrid.tdIdList.length;
		                var colIndex = this.mainGrid.getColumnIndex(this.options.id);
		                var rowCount = this.mainGrid.getRowCount();
		                for (var i = 0; i < rowCount; i++) {
		                    text = this.mainGrid.getInput(this, this.mainGrid.data_td_list[i * oneRowDataLength + colIndex]);
		                    text.setFloatMaxLength(len);
		                }
		            } else {
		                var inputComp = this.mainGrid.getInput(this);
		                inputComp.setFloatMaxLength(len);
		            }
		        } catch (e) {
		            exception.printStackTrace(e, null, this);
		        }
		    };


		    gridView.prototype._validateAndFormat = function(newValue, gridCellInfo, targetGrid, gridColId, dataColIndex, gridColIndex) {
		        try {
		            // option 처리 (maxLength, maxByteLength, allowChar, ignoreChar, isEscape)
		            if (gridCellInfo.options._floatMaxLength) {
		                var useFloatMaxLength = gridCellInfo.options.dataType == "float" ||
		                    (gridCellInfo._isBigDecimalFloatMaxLength && gridCellInfo._isBigDecimalFloatMaxLength(gridCellInfo.options._floatMaxLength));
		                if (useFloatMaxLength) {
		                    var maxFloatLengthValidator = new WebSquare.validator.maxFloatLengthCommand(gridCellInfo.options._floatMaxLength, gridCellInfo.options.decimalDelimiter, gridCellInfo.options.delimiter);
		                    newValue = maxFloatLengthValidator.executeValidateString(newValue); // 초과하는 뒷부분 자르기
		                }
		            } else if (gridCellInfo.options.maxLength) {
		                var useFloatMaxLength = gridCellInfo.options.dataType == "float" ||
		                    (gridCellInfo._isBigDecimalFloatMaxLength && gridCellInfo._isBigDecimalFloatMaxLength(gridCellInfo.options.maxLength));
		                if (useFloatMaxLength) {
		                    var maxFloatLengthValidator = new WebSquare.validator.maxFloatLengthCommand(gridCellInfo.options.maxLength, gridCellInfo.options.decimalDelimiter, gridCellInfo.options.delimiter);
		                    newValue = maxFloatLengthValidator.executeValidateString(newValue); // 초과하는 뒷부분 자르기
		                } else if (gridCellInfo.options.dataType == "number" || gridCellInfo.options.dataType == "bigDecimal") {
		                    var maxLengthValidator = new WebSquare.validator.maxLengthCommand(gridCellInfo.options.maxLength);
		                    newValue = maxLengthValidator.executeValidateString(newValue); // 초과하는 뒷부분 자르기
		                } else {
		                    var len = parseInt(gridCellInfo.options.maxLength);
		                    if (!isNaN(len)) {
		                        newValue = newValue.slice(0, len); // 초과하는 뒷부분 자르기
		                    }
		                }
		            } else if (gridCellInfo.options.maxByteLength) {
		                if (gridCellInfo.options.dataType == "number" || gridCellInfo.options.dataType == "bigDecimal") {
		                    var maxByteLengthValidator = new WebSquare.validator.maxByteLengthCommand(gridCellInfo.options.maxByteLength, gridCellInfo.options.byteCheckIgnoreChar);
		                    newValue = maxByteLengthValidator.executeValidateString(newValue); // 초과하는 뒷부분 자르기
		                }
		            }
		            var gridColAllowChar = gridCellInfo.options.allowChar;
		            if (!gridCellInfo.options.allowChar && (gridCellInfo.options.dataType == "float" || gridCellInfo.options.dataType == "number" || gridCellInfo.options.dataType == "bigDecimal")) {
		                gridColAllowChar = "0-9+-" + gridCellInfo.options.decimalDelimiter;
		            }
		            if (gridColAllowChar) {
		                if (typeof gridColAllowChar != 'undefined' && gridColAllowChar != null && gridColAllowChar != "") {
		                    var re = new RegExp("[" + gridColAllowChar + "]");
		                    var matched = true;
		                    for (var k = 0; k < newValue.length; k++) {
		                        var s = newValue.charAt(k);
		                        if (s.match(re) == null) {
		                            matched = false;
		                            break;
		                        }
		                    }
		                    if (matched === false) {
		                        newValue = ""; // 한글자라도 허용하지않는 문자가 있으면 빈 값을 세팅
		                    }
		                }
		            }
		            if (gridCellInfo.options.ignoreChar) {
		                var ignoreValidator = new WebSquare.validator.ignoreCharCommand(gridCellInfo.options.ignoreChar);
		                newValue = ignoreValidator.executeValidateString(newValue); // ignoreChar만 제거한 값 세팅
		            }
		            var isEscape = (gridCellInfo.options.escape !== "") ? gridCellInfo.options.escape : targetGrid.options.escape;
		            if (isEscape + "" === "true") {
		                newValue = WebSquare.xml.decode(newValue);
		            }

		            // inputType별 처리 (inputType="custom" 인 경우 복사한 inputType으로 바뀜) 
		            if (gridCellInfo.options.inputType === "radio" && gridCellInfo.options.trueValue === newValue) {
		                var checkedRadioIdxArr = targetGrid.getCheckedIndex(gridColIndex);
		                for (var idx = 0; idx < checkedRadioIdxArr.length; idx++) { //radio check 값이 2개 이상으로 잘못된 경우에도 전부 초기화
		                    targetGrid._dataList.setCellData(checkedRadioIdxArr[idx], dataColIndex, gridCellInfo.options.falseValue);
		                }
		            }
		            if (gridCellInfo.options.inputType === "text" || gridCellInfo.options.inputType === "textImage") {
		                var customModelFormatter = util.getGlobalFunction(gridCellInfo.options.customModelFormatter, targetGrid.scope_id);
		                if (typeof customModelFormatter == "function") {
		                    targetGrid.useCustomModelFormatter = true;
		                    newValue = customModelFormatter.call(targetGrid, newValue, newValue, gridCellInfo.editRowIndex, gridCellInfo.getColumnIndex(gridColId));
		                } else {
		                    targetGrid.useCustomModelFormatter = false;
		                }
		            }
		            if (gridCellInfo.options.inputType === "text" && gridCellInfo.options.dataType === "float") {
		                if (newValue.charAt(newValue.length - 1) === gridCellInfo.options.decimalDelimiter) {
		                    newValue = newValue.substr(0, newValue.length - 1); // 맨 마지막 소수점 구분자 제거 (100. -> 100)
		                }
		            }
		            return newValue;
		        } catch (e) {
		            exception.printStackTrace(e, null, this);
		        }
		    };


		    gridView.prototype.setMaxLength = function(colIndex, maxLength) {
		        ["WebSquare.uiplugin.gridViewApiController.prototype.setMaxLength"];
		        try {
		            var cellInfo = this.getCellInfo(colIndex);
		            var inputType = cellInfo.options.inputType;
		            if (!(inputType == "text" || inputType == "textarea" || inputType == "input" || inputType == "textImage" || inputType == "secret" || inputType == "autoComplete")) {
		                return;
		            }
		            var useFloatMaxLength = cellInfo.options.dataType == "float" || (cellInfo._isBigDecimalFloatMaxLength && cellInfo._isBigDecimalFloatMaxLength(maxLength));
		            if (inputType == "text" && useFloatMaxLength) {
		                cellInfo.setFloatMaxLength(maxLength);
		            } else {
		                cellInfo.setMaxLength(maxLength);
		            }
		        } catch (e) {
		            exception.printStackTrace(e, null, this);
		        }
		    };
			
			//waea_743 subtotalstyle ==> 2026-05-06 WAEA 743
			util._getStyleNameConvert = function(style, infoArr) {
			    try {
			        var ret = {};
			        if (!infoArr) {
			            return ret;
			        }

			        
			        var keyMap = {
			            backgroundColor: "background-color",
			            textAlign: "text-align",
			            color: "color",
			            fontSize: "font-size",
			            fontWeight: "font-weight",
			            fontFamily: "font-family",
			            borderLeft: "border-left",
			            borderRight: "border-right",
			            "text-decoration": "text-decoration"
			        };
			        for (var l = 0; l < infoArr.length; l++) {
			            var origKey = infoArr[l];
			            if (!origKey) continue;
			            if (!(origKey in keyMap)) continue;
			            var val = style[origKey];
			            if (!val) continue;

			            var key = keyMap[origKey];
			            var retVal = val;

			            
			            if (origKey === "text-decoration") {
			                if (val !== "underline" && val !== "line-through") {
			                    continue;
			                }
			            }

			            if (retVal) {
			                ret[key] = retVal;
			            }
			        }
			        return ret;
			    } catch (e) {
			        exception.printStackTrace(e, null, this);
			    }
			};

			util.getStyleFromCssStrWithSpecificity = function(cssStr, infoArr) {
			    try {
			        if (!infoArr) return null;

			        var ret = {};
			        var cssArr = cssStr.split(" ");

			        
			        for (var l = 0; l < cssArr.length; l++) {
			            var className = cssArr[l];
			            if (!className) continue;

			            
			            for (var i = 0; i < document.styleSheets.length; i++) {
			                var sheet = document.styleSheets[i];
			                var rules;
			                try {
			                    rules = sheet.cssRules || sheet.rules; 
			                } catch (e) {
			                    continue; 
			                }
			                if (!rules) continue;

			                for (var j = 0; j < rules.length; j++) {
			                    var rule = rules[j];
			                    var selectorText = rule.selectorText;
			                    if (!selectorText) continue;

			                    
			                    var selectors = selectorText.split(",");
			                    for (var s = 0; s < selectors.length; s++) {
			                        var sel = selectors[s].replace(/^\s+|\s+$/g, ""); 

			                        
			                        if (sel.indexOf("." + className) === -1) continue;

			                        
			                        var idCount = 0, classCount = 0, elementCount = 0;
			                        for (var c = 0; c < sel.length; c++) {
			                            var ch = sel.charAt(c);
			                            if (ch === "#") idCount++;
			                            else if (ch === ".") classCount++;
			                            else if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) elementCount++;
			                        }
			                        var specificity = idCount * 100 + classCount * 10 + elementCount;

			                        
			                        if (!rule._specificity || specificity >= rule._specificity) {
			                            rule._specificity = specificity;

			                            
			                            for (var k = 0; k < infoArr.length; k++) {
			                                var styleName = infoArr[k];
			                                var val = rule.style[styleName];
			                                if (val && val !== "") {
			                                    ret[styleName] = val;
			                                }
			                            }
			                        }
			                    }
			                }
			            }
			        }
			        ret = util._getStyleNameConvert(ret,infoArr);
			        return Object.keys(ret).length > 0 ? ret : null;

			    } catch (e) {
			        exception.printStackTrace(e, null, this);
			    }
			};

			gridView.prototype.sendExcelData = function(options, infoArr, finalstr) {
			    try {
			        if (typeof options.useFooter == "boolean") {
			            options.useFooter = options.useFooter + "";
			        }
			        var fileName = WebSquare.xml.encode(options.fileName) || "excel";
			        var extension = options.extension || "";
			        if (fileName.indexOf(".") == -1 && extension != "") {
			            fileName = fileName + "." + extension;
			        }
			        var sheetName = options.sheetName || "sheet";
			        var type = options.type || "0";
			        var footerType = (typeof options.footerType == "undefined") ? "1" : (options.footerType + "");
			        var multipleSheet = "false";
			        if (options.multiexcel == true) {
			            var multiopt = options.multipleSheet;
			            if (typeof options.multipleSheet == "undefined") {
			                multiopt = "";
			            }
			            multipleSheet = (multiopt + "") == "true" || (multiopt + "") == "" ? "true" : "false"; 
			        } else {
			            multipleSheet = "false";
			        }
			        var removeColumns = options.removeColumns || "";
			        var removeHeaderRows = options.removeHeaderRows || "";
			        var foldColumns = options.foldColumns || "";
			        var excludeFoldColumnsWordWrap = options.excludeFoldColumnsWordWrap || "";
			        var excludeColumnsWordWrap = options.excludeColumnsWordWrap || "";
			        var stRowIndex = options.startRowIndex || "0";
			        var stColumnIndex = options.startColumnIndex || "0";
			        var headerColor = options.headerColor || "";
			        var headerFontName = options.headerFontName || "";
			        var headerFontSize = options.headerFontSize || "";
			        var headerFontColor = options.headerFontColor || "";
			        var headerFontBold = options.headerFontBold || "";
			        var bodyColor = options.bodyColor || "";
			        var bodyFontName = options.bodyFontName || "";
			        var bodyFontSize = options.bodyFontSize || "";
			        var bodyFontColor = options.bodyFontColor || "";
			        var bodyFontBold = options.bodyFontBold || "";
			        var footerColor = options.footerColor || "";
			        var footerFontName = options.footerFontName || "";
			        var footerFontSize = options.footerFontSize || "";
			        var footerFontColor = options.footerFontColor || "";
			        var footerFontBold = options.footerFontBold || "";
			        var subTotalColor = options.subTotalColor || "";
			        var subTotalFontName = options.subTotalFontName || "";
			        var subTotalFontSize = options.subTotalFontSize || "";
			        var subTotalFontColor = options.subTotalFontColor || "";
			        var subTotalFontBold = options.subTotalFontBold || "";
			        var rowNumHeaderColor = options.rowNumHeaderColor || "";
			        var rowNumHeaderFontName = options.rowNumHeaderFontName || "";
			        var rowNumHeaderFontSize = options.rowNumHeaderFontSize || "";
			        var rowNumHeaderFontColor = options.rowNumHeaderFontColor || "";
			        var rowNumBodyColor = options.rowNumBodyColor || "";
			        var rowNumBodyFontName = options.rowNumBodyFontName || "";
			        var rowNumBodyFontSize = options.rowNumBodyFontSize || "";
			        var rowNumBodyFontColor = options.rowNumBodyFontColor || "";
			        var rowNumFooterColor = options.rowNumFooterColor || "";
			        var rowNumFooterFontName = options.rowNumFooterFontName || "";
			        var rowNumFooterFontSize = options.rowNumFooterFontSize || "";
			        var rowNumFooterFontColor = options.rowNumFooterFontColor || "";
			        var rowNumSubTotalColor = options.rowNumSubTotalColor || "";
			        var rowNumSubTotalFontName = options.rowNumSubTotalFontName || "";
			        var rowNumSubTotalFontSize = options.rowNumSubTotalFontSize || "";
			        var rowNumSubTotalFontColor = options.rowNumSubTotalFontColor || "";

			        var groupbyColor = options.groupbyColor || "";
			        options.groupbyColor = groupbyColor;
			        var groupbyFontName = options.groupbyFontName || "";
			        options.groupbyFontName = groupbyFontName;
			        var groupbyFontSize = options.groupbyFontSize || "";
			        options.groupbyFontSize = groupbyFontSize;
			        var groupbyFontColor = options.groupbyFontColor || "";
			        options.groupbyFontColor = groupbyFontColor;

			        var dataProvider = options.dataProvider || "";
			        var footerDataProvider = options.footerDataProvider || "";
			        var splitProvider = options.splitProvider || "";
			        var providerRequestXml = options.providerRequestXml || "";
			        var userDataXml = options.userDataXml || "";
			        var optionParam = options.optionParam || "";
			        var bodyWordwrap = options.bodyWordwrap || "";
			        var subtotalWordwrap = options.subtotalWordwrap || "";
			        var footerWordwrap = options.footerWordwrap || "";
			        var useEuroLocale = options.useEuroLocale || "false";
			        var numberLocale = options.numberLocale || "";
			        var useHeader = options.useHeader || "true";
			        var useSubTotal = options.useSubTotal || "false";
			        var useFooter = options.useFooter || "true";
			        options.printSet = options.printSet || {};
			        var fitToPage = options.printSet.fitToPage || "false";
			        var landScape = options.printSet.landScape || "false";
			        var fitWidth = options.printSet.fitWidth || "1";
			        var fitHeight = options.printSet.fitHeight || "1";
			        var scale = options.printSet.scale || "100";
			        var pageSize = options.printSet.pageSize || "A4";
			        var separator = options.separator || ",";
			        var subTotalScale = options.subTotalScale || -1;
			        var subTotalRoundingMode = options.subTotalRoundingMode || "";
			        var footerScale = options.footerScale || -1;
			        var footerRoundingMode = options.footerRoundingMode || "";
			        var useStyle = ((options.useStyle + "") == "true") ? true : false;
			        var useClass = ((options.useClass + "") == "true") ? true : false;
			        options.useClass = useClass;
			        var setFontSize = ((options.setFontSize + "") == "true") ? true : false;
			        var freezePane = options.freezePane || "";
			        var autoSizeColumn = options.autoSizeColumn || "false";
			        var autoSizeAdjustWith = options.autoSizeAdjustWith || 512;
			        var displayGridlines = options.displayGridlines || "";
			        var colMerge = options.colMerge || "false";
			        var colMergeValue = options.colMergeValue || "false";
			        var colMergeTextAlign = options.colMergeTextAlign || "center";
			        var useDataFormat = options.useDataFormat || "false";
			        var useHeaderDataFormat = options.useHeaderDataFormat || "";
			        var applyDataFormat = options.applyDataFormat || "false";
			        var customToDataType = options.customToDataType || "false";
			        var useSubTotalData = ((options.useSubTotalData + "") == "true") ? true : false;
			        var useSubTotalColumnClass = (options.useSubTotalColumnClass !== undefined) ? options.useSubTotalColumnClass : core.getConfiguration("/WebSquare/gridView/excel/download/@useSubTotalColumnClass");
			        useSubTotalColumnClass = ((useSubTotalColumnClass + "") == "true") ? true : false;
			        options.useSubTotalColumnClass = useSubTotalColumnClass;
			        var useFooterData = ((options.useFooterData + "") == "true") ? true : false;
			        var calcFooter = ((options.calcFooter + "") == "true") ? true : false;
			        var columnMove = ((options.columnMove + "") == "true") ? true : false;
			        var columnOrder = options.columnOrder || "";
			        if (calcFooter) {
			            columnMove = false;
			        }
			        var columnMoveWithSubTotal = options.columnMoveWithSubTotal || "";
			        var columnMoveWithFooter = options.columnMoveWithFooter || "";
			        var oddRowBgColor = options.oddRowBackgroundColor || "";
			        var evenRowBgColor = options.evenRowBackgroundColor || "";
			        var indent = options.indent || "0";
			        var rowNumHeaderValue = WebSquare.xml.encode(this.options.rowNumHeaderValue) || options.rowNumHeaderValue || ""; 
			        if (this.options.useLocale && this.options.rowNumLocaleRef) {
			            var localeValue = this.getLocaleValue(this.options.rowNumLocaleRef);
			            if (localeValue) {
			                rowNumHeaderValue = localeValue;
			            }
			        }
			        var rowNumVisible = ((options.rowNumVisible + "") == "true") ? true : false;
			        var startRowNumber = this.options.startRowNumber || "1";
			        var bodyNumberDefaultValue = options.bodyNumberDefaultValue || "";
			        var numberToText = options.numberToText || "false";
			        var rowHeight = options.rowHeight || "-1";
			        var headerRowHeight = options.headerRowHeight || "-1";
			        var maxDataSize = options.maxDataSize || -1;
			        maxDataSize = parseInt(maxDataSize, 10);
			        var pwd = options.pwd || "";
			        var useImage = options.useImage || "false";
			        var headerAutoFilter = options.headerAutoFilter || "false";
			        var filterRowIndex = options.filterRowIndex || "-1";
			        var mergeCell = ((options.mergeCell + "") == "true") ? true : false;
			        var noMerge = ((options.noMerge + "") == "true") ? true : false;
			        options.httpReadOnly = ((options.httpReadOnly + "") == "true") ? true : false;
			        var advancedExcelDownloadURL = options.advancedExcelDownloadURL || options.action || "";
			        var useXHR = this.options.useXHR == true ? this.options.useXHR : options.useXHR || "false";
			        options.useXHR = ((useXHR + "") == "true") ? true : false;
			        var openFile = options.openFile || "false";
			        var macroFileName = options.macroFileName || "";
			        var useMacro = options.useMacro || "false";
			        var showDialog = options.showDialog || "false";
			        var dialogFilter = options.dialogFilter || "";
			        var keepType = options.keepType || "false";
			        var useHeaderCheckBoxLabel = ((options.useHeaderCheckBoxLabel + "") == "true") ? true : false;
			        var lazyInfoArr = options.lazyInfoArr || "false";
			        var decimal = options.decimal || "";
			        var sameSite = options.sameSite || "";
			        var customProvider = options.customProvider || "";
			        var customProviderIndex = options.customProviderIndex || "";
			        var rowAccessWindowSize = options.rowAccessWindowSize || "";
			        var trim = options.trim || "";
			        var desc = options.desc || "";
			        var footerTop = options.footerTop || "";
			        var msaName = options.msaName || "";
			        var innerBorder = ((options.innerBorder + "") == "false") ? "false" : "";

			        var chart = options.chart || {};
			        if (chart.chartName) {
			            var c_chartName = chart.chartName || "line"; 
			            var c_chartType = chart.chartType || "";
			            var c_title = chart.title || "";
			            var c_xTitle = chart.xTitle || "";
			            var c_yTitle = chart.yTitle || "";
			            var c_startRowIndex = chart.startRowIndex || 0;
			            var c_startColIndex = chart.startColIndex || 0;
			            var c_endRowIndex = chart.endRowIndex || 0;
			            var c_endColIndex = chart.endColIndex || 0;
			            var c_serAxis = chart.serAxis || "true";
			            var c_catAxis = chart.catAxis || "true";
			            var c_catAxisRange = chart.catAxisRange || {}; 
			            var c_catAxisStartX = c_catAxisRange.startColIndex || 0;
			            var c_catAxisStartY = c_catAxisRange.startRowIndex || 0;
			            var c_catAxisEndX = c_catAxisRange.endColIndex || 0;
			            var c_catAxisEndY = c_catAxisRange.endRowIndex || 0;
			            var c_serAxisRange = chart.serAxisRange || {}; 
			            var c_serAxisStartX = c_serAxisRange.startColIndex || 0;
			            var c_serAxisStartY = c_serAxisRange.startRowIndex || 0;
			            var c_serAxisEndX = c_serAxisRange.endColIndex || 0;
			            var c_serAxisEndY = c_serAxisRange.endRowIndex || 0;
			            var c_dataAxisRange = chart.dataAxisRange || {}; 
			            var c_dataAxisStartX = c_dataAxisRange.startColIndex || 0;
			            var c_dataAxisStartY = c_dataAxisRange.startRowIndex || 0;
			            var c_dataAxisEndX = c_dataAxisRange.endColIndex || 0;
			            var c_dataAxisEndY = c_dataAxisRange.endRowIndex || 0;
			            var c_catGridLines = chart.catGridLines || "true"; 
			            var c_serGridLines = chart.serGridLines || "true"; 
			            var c_legend = chart.legend || "true";
			            var c_legendPosition = chart.legendPosition || "bottom";
			        }
			        var columnOrderArr;
			        if (columnMove) {
			            if (columnOrder == "") {
			                columnOrderArr = this.getColumnOrder() || "";
			            } else {
			                columnOrderArr = columnOrder.split(",");
			            }
			        }
			        
			        if (removeColumns != "") {
			            removeColumns = this._getExcelRemoveColumns(removeColumns, columnMove);
			        }
			        var headers = WebSquare.Elem.api.getElementsByTagName(this.element, "w2:header");
			        var headXml = headers[0];
			        var columns = WebSquare.Elem.api.getElementsByTagName(headXml, "w2:column");
			        for (var i = 0; i < columns.length; i++) {
			            var col = columns[i];
			            if (col.getAttribute("inputType") === "checkbox" && useHeaderCheckBoxLabel === true) {
			                var checkboxLabel = col.getAttribute("checkboxLabel") || col.getAttribute("value");
			                var localeRef = col.getAttribute("localeRef");
			                if (this.options.useLocale && localeRef) {
			                    var localeValue = this.getLocaleValue(localeRef);
			                    if (localeValue) {
			                        checkboxLabel = localeValue;
			                    }
			                }
			                col.setAttribute("value", checkboxLabel + "");
			            } else {
			                var colId = col.getAttribute("id");
			                col.setAttribute("value", this.getHeaderValue2(colId) + "");
			            }
			            var excelCellType = col.getAttribute("excelCellType");
			            if (excelCellType == "definedFormat") {
			                var excelCellTypeStr = "definedFormat" + this._getDefinedFormatIndex(col.getAttribute("excelFormat")); 
			                col.setAttribute("excelCellType", excelCellTypeStr);
			            }
			        }
			        var bodys = WebSquare.Elem.api.getElementsByTagName(this.element, "w2:gBody");
			        var toTextIgnoreFormatJsonObj = options.toTextIgnoreFormat;
			        var isToTextIgnoreFormat = false;
			        if (bodys.length > 0) {
			            var bodyXml = bodys[0];
			            var rows = WebSquare.Elem.api.getElementsByTagName(bodyXml, "w2:row");
			            for (var i = 0; i < rows.length; i++) {
			                var columns = WebSquare.Elem.api.getElementsByTagName(rows[i], "w2:column");
			                for (var j = 0; j < columns.length; j++) {
			                    var col = columns[j];
			                    var colId = col.getAttribute("id");
			                    var cellInfo = this.getCellInfo(colId);
			                    if (cellInfo.options.displayFormat) {
			                        col.setAttribute("displayFormat", cellInfo.options.displayFormat);
			                    }
			                    var excelCellType = col.getAttribute("excelCellType");
			                    var dataTypeStr = "";
			                    isToTextIgnoreFormat = false;
			                    if (toTextIgnoreFormatJsonObj && toTextIgnoreFormatJsonObj.hasOwnProperty('colID')) {
			                        var colIDs = toTextIgnoreFormatJsonObj.colID.split(',');
			                        isToTextIgnoreFormat = (colIDs.indexOf(colId) !== -1);
			                    }
			                    if (isToTextIgnoreFormat) {
			                        col.setAttribute("displayFormat", "");
			                    }
			                    if (excelCellType == null || excelCellType == "" || typeof excelCellType == "undefined") {
			                        dataTypeStr = this._dataList.getColumnOption(colId, "dataType");
			                        if (isToTextIgnoreFormat) {
			                            dataTypeStr = "text";
			                        }
			                    } else {
			                        dataTypeStr = excelCellType;
			                    }
			                    if (dataTypeStr) {
			                        col.setAttribute("dataType", dataTypeStr);
			                    } else {
			                        col.setAttribute("dataType", "text");
			                    }
			                    var excellFormatterStr = col.getAttribute("excelFormatter");
			                    var excelFormatter = util.getGlobalFunction(excellFormatterStr, this.scope_id);
			                    if (excelFormatter) {
			                        var excelFormat = excelFormatter.call(this, colId);
			                        col.setAttribute("excelFormat", excelFormat);
			                    }
			                    if (excelCellType == "definedFormat") {
			                        var excelCellTypeStr = "definedFormat" + this._getDefinedFormatIndex(col.getAttribute("excelFormat")); 
			                        col.setAttribute("excelCellType", excelCellTypeStr);
			                    }
			                }
			            }
			        }
			        var subTotals = WebSquare.Elem.api.getElementsByTagName(this.element, "w2:subTotal");
			        var subTotalTable;
			        var dataDataType = util.getDataPrefix("dataType");
			        var dataDisplayFormat = util.getDataPrefix("displayFormat");        
			        for (var i = 0; i < subTotals.length; i++) {
			            rows = WebSquare.Elem.api.getElementsByTagName(subTotals[i], "w2:row");
			            subTotalTable = this.subtotalTableList[subTotals[i].getAttribute("targetColumnID")];
			            for (var j = 0; j < rows.length; j++) {
			                var columns = WebSquare.Elem.api.getElementsByTagName(rows[j], "w2:column");
			                var subtotalTds = (subTotalTable) ? subTotalTable.rows[j].getElementsByTagName("td") : "";
			                for (var k = 0; k < columns.length; k++) {
			                    var col = columns[k];
			                    var colId = col.getAttribute("id");
			                    
			                    var subtotalTd = "";
			                    for (var p = 0; p < subtotalTds.length; p++) {
			                        if (subtotalTds[p].id === colId) {
			                            subtotalTd = subtotalTds[p];
			                        }
			                    }
			                    isToTextIgnoreFormat = false;
			                    if (toTextIgnoreFormatJsonObj && toTextIgnoreFormatJsonObj.hasOwnProperty('subtotalColID')) {
			                        var colIDs = toTextIgnoreFormatJsonObj.subtotalColID.split(',');
			                        isToTextIgnoreFormat = (colIDs.indexOf(colId) !== -1);
			                    }
			                    if (isToTextIgnoreFormat) {
			                        
			                        col.setAttribute("displayFormat", "");
			                        col.setAttribute("dataType", "text");
			                    } else {
			                        if (subtotalTd) {
			                            
			                            if (subtotalTd.getAttribute(dataDisplayFormat) && (subtotalTd.getAttribute(dataDisplayFormat) != col.getAttribute("displayFormat"))) {
			                                col.setAttribute("displayFormat", subtotalTd.getAttribute(dataDisplayFormat));
			                            }
			                            
			                            if (subtotalTd.getAttribute(dataDataType) && (subtotalTd.getAttribute(dataDataType) == "number") &&(subtotalTd.getAttribute(dataDataType) != col.getAttribute("dataType"))) {
			                                col.setAttribute("dataType", subtotalTd.getAttribute(dataDataType));
			                            }
			                        }
			                    }                    
			                    var excellFormatterStr = col.getAttribute("excelFormatter");
			                    var excelFormatter = util.getGlobalFunction(excellFormatterStr, this.scope_id);
			                    if (excelFormatter) {
			                        var excelFormat = excelFormatter.call(this, colId);
			                        col.setAttribute("excelFormat", excelFormat);
			                    }
			                    var excelCellType = col.getAttribute("excelCellType");
			                    if (excelCellType == "definedFormat") {
			                        var excelCellTypeStr = "definedFormat" + this._getDefinedFormatIndex(col.getAttribute("excelFormat")); 
			                        col.setAttribute("excelCellType", excelCellTypeStr);
			                    }
			                }
			            }
			        }
			        var footers = WebSquare.Elem.api.getElementsByTagName(this.element, "w2:footer");
			        var footerTable = this.getElementById(this.id + "_foot_table");
			        if (footers.length > 0) {
			            var footerXml = footers[0];
			            rows = WebSquare.Elem.api.getElementsByTagName(footerXml, "w2:row");
			            for (var i = 0; i < rows.length; i++) {
			                var columns = WebSquare.Elem.api.getElementsByTagName(rows[i], "w2:column");
			                var footerTds = footerTable.rows[i].getElementsByTagName("td")
			                var dataFooter_id = util.getDataPrefix("footer_id");                
			                for (var j = 0; j < columns.length; j++) {
			                    var col = columns[j];
			                    var colId = col.getAttribute("id");
			                    
			                    var footerTd = "";
			                    for (var p = 0; p < footerTds.length; p++) {
			                        if (footerTds[p].getAttribute(dataFooter_id) === colId) {
			                            footerTd = footerTds[p];
			                        }
			                    }
			                    isToTextIgnoreFormat = false;
			                    if (toTextIgnoreFormatJsonObj && toTextIgnoreFormatJsonObj.hasOwnProperty('footerColID')) {
			                        var colIDs = toTextIgnoreFormatJsonObj.footerColID.split(',');
			                        isToTextIgnoreFormat = (colIDs.indexOf(colId) !== -1);
			                    }
			                    if (isToTextIgnoreFormat) {
			                        col.setAttribute("displayFormat", "");
			                        col.setAttribute("dataType", "text");
			                    } else {
			                        if (footerTd) {
			                            
			                            if (footerTd.getAttribute(dataDisplayFormat) && (footerTd.getAttribute(dataDisplayFormat) != col.getAttribute("displayFormat"))) {
			                                col.setAttribute("displayFormat", footerTd.getAttribute(dataDisplayFormat));
			                            }
			                            
			                            if (footerTd.getAttribute(dataDataType) && (footerTd.getAttribute(dataDataType) == "number") &&(footerTd.getAttribute(dataDataType) != col.getAttribute("dataType"))) {
			                                col.setAttribute("dataType", footerTd.getAttribute(dataDataType));
			                            }
			                        }
			                    }                    
			                    var excellFormatterStr = col.getAttribute("excelFormatter");
			                    var excelFormatter = util.getGlobalFunction(excellFormatterStr, this.scope_id);
			                    if (excelFormatter) {
			                        var excelFormat = excelFormatter.call(this, colId);
			                        col.setAttribute("excelFormat", excelFormat);
			                    }
			                    var excelCellType = col.getAttribute("excelCellType");
			                    if (excelCellType == "definedFormat") {
			                        var excelCellTypeStr = "definedFormat" + this._getDefinedFormatIndex(col.getAttribute("excelFormat")); 
			                        col.setAttribute("excelCellType", excelCellTypeStr);
			                    }
			                }
			            }
			        }
			        
			        var sendArray = [];
			        sendArray.push("<vector result='1'>"); 
			        sendArray.push("<data vectorkey='0'><hashtable>"); 
			        var elemType = this.element._elementType;
			        var gridStyle = "";
			        if (elemType === "json") {
			            gridStyle = WebSquare.xmljs.json2xml(this.element._element, {
			                "changeKey": {
			                    "w2:select": "w2:column"
			                }
			            });
			        } else {
			            gridStyle = WebSquare.xml.serialize(this.element._element);
			        }
			        sendArray.push("<data hashkey='style'>" + gridStyle + "</data>");
			        options.dataHandler = options.dataHandler || "";
			        if (options.dataHandler != "") {
			            var dataHandler = WebSquare.util.getGlobalFunction(options.dataHandler, this.scope_id);
			            if (typeof dataHandler == "function") {
			                var excelData = dataHandler.call(this, this.id);
			                var separator = options.separator || ",";
			                finalstr = '<array><![CDATA[["' + excelData.join('"' + separator + '"') + '"]]]></array>';
			            }
			        }
			        sendArray.push("<data hashkey='data'>" + finalstr + "</data>");
			        if (this.startedDisplayNone || this.resizeObj.width == 0 || this.resizeObj.height == 0) {
			            this.drawFooter();
			        }
			        
			        sendArray.push("<data hashkey='groupby' value='" + this.groupbyStatus.grouped + "'/>");
			        if (this.groupbyStatus.grouped) {
			            sendArray.push("<data hashkey='groupbyStyle'>" + this.getExcelGroupbyStyle() + "</data>");
			            sendArray.push("<data hashkey='groupbyHeaderValue'>" + this.getExcelGroupbyHeaderValue(separator) + "</data>");
			            sendArray.push("<data hashkey='groupbyFooterValue'>" + this.getExcelGroupbyFooterValue(separator) + "</data>");
			            sendArray.push("<data hashkey='groupbyStatusValue'>" + this.getExcelGroupbyStatusValue(separator) + "</data>");
			            sendArray.push("<data hashkey='groupbyStyleData'>" + this.getExcelGroupbyStyleData(options) + "</data>");
			            sendArray.push("<data hashkey='rowNumVisible' value='" + this.options.rowNumVisible + "'/>");
			            sendArray.push("<data hashkey='rowStatusVisible' value='" + this.options.rowStatusVisible + "'/>");
			            groupbyColor != "" ? sendArray.push("<data hashkey='groupbyColor' value='" + groupbyColor + "'/>") : "";
			            groupbyFontName != "" ? sendArray.push("<data hashkey='groupbyFontName' value='" + groupbyFontName + "'/>") : "";
			            groupbyFontSize != "" ? sendArray.push("<data hashkey='groupbyFontSize' value='" + groupbyFontSize + "'/>") : "";
			            groupbyFontColor != "" ? sendArray.push("<data hashkey='groupbyFontColor' value='" + groupbyFontColor + "'/>") : "";
			            if (!util.isEmptyObject(this.groupbyDisplayOptions.rowNumHeader) || !util.isEmptyObject(this.groupbyDisplayOptions.rowStatusHeader)) {
			                sendArray.push("<data hashkey='rowNone' value='true'/>");
			            }
			        } else {
			            sendArray.push("<data hashkey='rowNumVisible' value='" + rowNumVisible + "'/>");
			        }
			        sendArray.push("<data hashkey='footer_data'>" + this._getExcelFooterData(separator, footerType, type, options.footerConvertIndex) + "</data>");
			        sendArray.push("<data hashkey='fileName' value='" + fileName + "'/>");
			        sendArray.push("<data hashkey='sheetName' value='" + sheetName + "'/>");
			        sendArray.push("<data hashkey='multipleSheet' value='" + multipleSheet + "'/>");
			        sendArray.push("<data hashkey='stRowIndex' value='" + stRowIndex + "'/>");
			        sendArray.push("<data hashkey='stColIndex' value='" + stColumnIndex + "'/>");
			        sendArray.push("<data hashkey='removeColumns' value='" + removeColumns + "'/>");
			        sendArray.push("<data hashkey='removeHeaderRows' value='" + removeHeaderRows + "'/>");
			        sendArray.push("<data hashkey='foldColumns' value='" + foldColumns + "'/>");
			        sendArray.push("<data hashkey='excludeFoldColumnsWordWrap' value='" + excludeFoldColumnsWordWrap + "'/>");
			        sendArray.push("<data hashkey='excludeColumnsWordWrap' value='" + excludeColumnsWordWrap + "'/>");
			        sendArray.push("<data hashkey='headerColor' value='" + headerColor + "'/>");
			        sendArray.push("<data hashkey='headerFontName' value='" + headerFontName + "'/>");
			        sendArray.push("<data hashkey='headerFontSize' value='" + headerFontSize + "'/>");
			        sendArray.push("<data hashkey='headerFontColor' value='" + headerFontColor + "'/>");
			        sendArray.push("<data hashkey='headerFontBold' value='" + headerFontBold + "'/>");
			        sendArray.push("<data hashkey='bodyColor' value='" + bodyColor + "'/>");
			        sendArray.push("<data hashkey='bodyFontName' value='" + bodyFontName + "'/>");
			        sendArray.push("<data hashkey='bodyFontSize' value='" + bodyFontSize + "'/>");
			        sendArray.push("<data hashkey='bodyFontColor' value='" + bodyFontColor + "'/>");
			        bodyFontBold != "" ? sendArray.push("<data hashkey='bodyFontBold' value='" + bodyFontBold + "'/>") : "";
			        sendArray.push("<data hashkey='footerColor' value='" + footerColor + "'/>");
			        sendArray.push("<data hashkey='footerFontName' value='" + footerFontName + "'/>");
			        sendArray.push("<data hashkey='footerFontSize' value='" + footerFontSize + "'/>");
			        sendArray.push("<data hashkey='footerFontColor' value='" + footerFontColor + "'/>");
			        footerFontBold != "" ? sendArray.push("<data hashkey='footerFontBold' value='" + footerFontBold + "'/>") : "";
			        sendArray.push("<data hashkey='subTotalColor' value='" + subTotalColor + "'/>");
			        sendArray.push("<data hashkey='subTotalFontName' value='" + subTotalFontName + "'/>");
			        sendArray.push("<data hashkey='subTotalFontSize' value='" + subTotalFontSize + "'/>");
			        sendArray.push("<data hashkey='subTotalFontColor' value='" + subTotalFontColor + "'/>");
			        subTotalFontBold != "" ? sendArray.push("<data hashkey='subTotalFontBold' value='" + subTotalFontBold + "'/>") : "";
			        if (rowNumVisible) {
			            sendArray.push("<data hashkey='rowNumHeaderColor' value='" + rowNumHeaderColor + "'/>");
			            sendArray.push("<data hashkey='rowNumHeaderFontName' value='" + rowNumHeaderFontName + "'/>");
			            sendArray.push("<data hashkey='rowNumHeaderFontSize' value='" + rowNumHeaderFontSize + "'/>");
			            sendArray.push("<data hashkey='rowNumHeaderFontColor' value='" + rowNumHeaderFontColor + "'/>");
			            sendArray.push("<data hashkey='rowNumBodyColor' value='" + rowNumBodyColor + "'/>");
			            sendArray.push("<data hashkey='rowNumBodyFontName' value='" + rowNumBodyFontName + "'/>");
			            sendArray.push("<data hashkey='rowNumBodyFontSize' value='" + rowNumBodyFontSize + "'/>");
			            sendArray.push("<data hashkey='rowNumBodyFontColor' value='" + rowNumBodyFontColor + "'/>");
			            sendArray.push("<data hashkey='rowNumFooterColor' value='" + rowNumFooterColor + "'/>");
			            sendArray.push("<data hashkey='rowNumFooterFontName' value='" + rowNumFooterFontName + "'/>");
			            sendArray.push("<data hashkey='rowNumFooterFontSize' value='" + rowNumFooterFontSize + "'/>");
			            sendArray.push("<data hashkey='rowNumFooterFontColor' value='" + rowNumFooterFontColor + "'/>");
			            sendArray.push("<data hashkey='rowNumSubTotalColor' value='" + rowNumSubTotalColor + "'/>");
			            sendArray.push("<data hashkey='rowNumSubTotalFontName' value='" + rowNumSubTotalFontName + "'/>");
			            sendArray.push("<data hashkey='rowNumSubTotalFontSize' value='" + rowNumSubTotalFontSize + "'/>");
			            sendArray.push("<data hashkey='rowNumSubTotalFontColor' value='" + rowNumSubTotalFontColor + "'/>");
			        }
			        sendArray.push("<data hashkey='footerDataProvider' value='" + footerDataProvider + "'/>");
			        sendArray.push("<data hashkey='dataProvider' value='" + dataProvider + "'/>");
			        sendArray.push("<data hashkey='userDataXml' value=''>" + userDataXml + "</data>");
			        sendArray.push("<data hashkey='optionParam' value='" + optionParam + "'/>");
			        bodyWordwrap != "" ? sendArray.push("<data hashkey='bodyWordwrap' value='" + bodyWordwrap + "'/>") : "";
			        subtotalWordwrap != "" ? sendArray.push("<data hashkey='subtotalWordwrap' value='" + subtotalWordwrap + "'/>") : "";
			        footerWordwrap != "" ? sendArray.push("<data hashkey='footerWordwrap' value='" + footerWordwrap + "'/>") : "";
			        sendArray.push("<data hashkey='useEuroLocale' value='" + useEuroLocale + "'/>");
			        sendArray.push("<data hashkey='numberLocale' value='" + numberLocale + "'/>");
			        sendArray.push("<data hashkey='useHeader' value='" + useHeader + "'/>");
			        sendArray.push("<data hashkey='useSubTotal' value='" + useSubTotal + "'/>");
			        sendArray.push("<data hashkey='useFooter' value='" + useFooter + "'/>");
			        sendArray.push("<data hashkey='fitToPage' value='" + fitToPage + "'/>");
			        sendArray.push("<data hashkey='landScape' value='" + landScape + "'/>");
			        sendArray.push("<data hashkey='fitWidth' value='" + fitWidth + "'/>");
			        sendArray.push("<data hashkey='fitHeight' value='" + fitHeight + "'/>");
			        sendArray.push("<data hashkey='scale' value='" + scale + "'/>");
			        sendArray.push("<data hashkey='pageSize' value='" + pageSize + "'/>");
			        sendArray.push("<data hashkey='separator' value='" + separator + "'/>");
			        sendArray.push("<data hashkey='subTotalScale' value='" + subTotalScale + "'/>");
			        sendArray.push("<data hashkey='subTotalRoundingMode' value='" + subTotalRoundingMode + "'/>");
			        sendArray.push("<data hashkey='footerScale' value='" + footerScale + "'/>");
			        sendArray.push("<data hashkey='footerRoundingMode' value='" + footerRoundingMode + "'/>");
			        sendArray.push("<data hashkey='useStyle' value='" + useStyle + "'/>");
			        if (setFontSize == true) {
			            sendArray.push("<data hashkey='setFontSize' value='" + useStyle + "'/>");
			        }
			        sendArray.push("<data hashkey='freezePane' value='" + freezePane + "'/>");
			        sendArray.push("<data hashkey='autoSizeColumn' value='" + autoSizeColumn + "'/>");
			        sendArray.push("<data hashkey='autoSizeAdjustWith' value='" + autoSizeAdjustWith + "'/>");
			        sendArray.push("<data hashkey='displayGridlines' value='" + displayGridlines + "'/>");
			        sendArray.push("<data hashkey='colMerge' value='" + colMerge + "'/>");
			        sendArray.push("<data hashkey='colMergeValue' value='" + colMergeValue + "'/>");
			        sendArray.push("<data hashkey='colMergeTextAlign' value='" + colMergeTextAlign + "'/>");
			        sendArray.push("<data hashkey='useDataFormat' value='" + useDataFormat + "'/>");
			        useHeaderDataFormat != "" ? sendArray.push("<data hashkey='useHeaderDataFormat' value='" + useHeaderDataFormat + "'/>") : "";
			        sendArray.push("<data hashkey='customToDataType' value='" + customToDataType + "'/>");
			        sendArray.push("<data hashkey='applyDataFormat' value='" + applyDataFormat + "'/>");
			        sendArray.push("<data hashkey='useSubTotalData' value='" + useSubTotalData + "'/>");
			        sendArray.push("<data hashkey='useSubTotalColumnClass' value='" + useSubTotalColumnClass + "'/>");
			        sendArray.push("<data hashkey='useFooterData' value='" + useFooterData + "'/>");
			        sendArray.push("<data hashkey='calcFooter' value='" + calcFooter + "'/>");
			        sendArray.push("<data hashkey='columnMove' value='" + columnMove + "'/>");
			        sendArray.push("<data hashkey='columnOrder' value='" + columnOrderArr + "'/>");
			        columnMoveWithSubTotal != "" ? sendArray.push("<data hashkey='columnMoveWithSubTotal' value='" + columnMoveWithSubTotal + "'/>") : "";
			        columnMoveWithFooter != "" ? sendArray.push("<data hashkey='columnMoveWithFooter' value='" + columnMoveWithFooter + "'/>") : "";
			        sendArray.push("<data hashkey='oddRowBgColor' value='" + oddRowBgColor + "'/>");
			        sendArray.push("<data hashkey='evenRowBgColor' value='" + evenRowBgColor + "'/>");
			        sendArray.push("<data hashkey='indent' value='" + indent + "'/>");
			        sendArray.push("<data hashkey='rowNumHeaderValue' value='" + rowNumHeaderValue + "'/>");
			        sendArray.push("<data hashkey='startRowNumber' value='" + startRowNumber + "'/>");
			        sendArray.push("<data hashkey='bodyNumberDefaultValue' value='" + bodyNumberDefaultValue + "'/>");
			        sendArray.push("<data hashkey='numberToText' value='" + numberToText + "'/>");
			        sendArray.push("<data hashkey='rowHeight' value='" + rowHeight + "'/>");
			        if (headerRowHeight && typeof headerRowHeight == "object") {
			            headerRowHeight = JSON.stringify(headerRowHeight);
			        }
			        sendArray.push("<data hashkey='headerRowHeight' value='" + headerRowHeight + "'/>");
			        sendArray.push("<data hashkey='pwd' value='" + pwd + "'/>");
			        sendArray.push("<data hashkey='useImage' value='" + useImage + "'/>");
			        sendArray.push("<data hashkey='headerAutoFilter' value='" + headerAutoFilter + "'/>");
			        sendArray.push("<data hashkey='filterRowIndex' value='" + filterRowIndex + "'/>");
			        sendArray.push("<data hashkey='mergeCell' value='" + mergeCell + "'/>");
			        sendArray.push("<data hashkey='noMerge' value='" + noMerge + "'/>");
			        if (useStyle) {
			            sendArray.push("<data hashkey='styleData'><array><![CDATA[[" + this._getExcelStyle(options) + "]]]></array></data>");
			        }
			        if (parseInt(indent, 10) != 0) {
			            






			            sendArray.push("<data hashkey='depthColumnInfo' value='" + this._getExcelDepthColumn(separator,options) + "'></data>");
			            sendArray.push("<data hashkey='depthColumnData'><array><![CDATA[[" + this._getExcelDepthColumnData(separator,options) + "]]]></array></data>");
			        }
			        if (useSubTotalData) {
			            sendArray.push("<data hashkey='subtotalData'><array><![CDATA[[" + this._getExcelSubtotalData(separator) + "]]]></array></data>");
			        }
			        var excelMergeInfo = "";
			        var mergeCellHeaderInfo = options.mergeCellHeaderInfo || "";
			        if (mergeCell) {
			            useSubTotal = util.getBoolean(useSubTotal);
			            excelMergeInfo = this.getMergeAll(removeColumns, useSubTotal);
			        }
			        sendArray.push("<data hashkey='mergeCellInfo'><array><![CDATA[[" + excelMergeInfo + "]]]></array></data>");
			        sendArray.push("<data hashkey='mergeCellHeaderInfo'><array><![CDATA[[" + mergeCellHeaderInfo + "]]]></array></data>");
			        sendArray.push("<data hashkey='openFile' value='" + openFile + "'/>");
			        sendArray.push("<data hashkey='macroFileName' value='" + macroFileName + "'/>");
			        sendArray.push("<data hashkey='useMacro' value='" + useMacro + "'/>");
			        sendArray.push("<data hashkey='showDialog' value='" + showDialog + "'/>");
			        sendArray.push("<data hashkey='dialogFilter' value='" + dialogFilter + "'/>");
			        sendArray.push("<data hashkey='keepType' value='" + keepType + "'/>");
			        sendArray.push("<data hashkey='lazyInfoArr' value='" + lazyInfoArr + "'/>");
			        sendArray.push("<data hashkey='decimal' value='" + decimal + "'/>");
			        if (sameSite != "") {
			            sendArray.push("<data hashkey='sameSite' value='" + sameSite + "'/>");
			        }
			        sendArray.push("<data hashkey='customProvider' value='" + customProvider + "'/>");
			        sendArray.push("<data hashkey='customProviderIndex' value='" + customProviderIndex + "'/>");
			        sendArray.push("<data hashkey='rowAccessWindowSize' value='" + rowAccessWindowSize + "'/>");
			        sendArray.push("<data hashkey='trim' value='" + trim + "'/>");
			        innerBorder != ""   ? sendArray.push("<data hashkey='innerBorder' value='" + innerBorder + "'/>") : "";
			        
			        msaName = msaName || this._getMsaName() || "";
			        if (msaName != "") {
			            useXHR = "true";
			        }
			        sendArray.push("<data hashkey='useXHR' value='" + useXHR + "'/>");
			        sendArray.push("<data hashkey='desc' value='" + desc + "'/>");
			        footerTop != ""   ? sendArray.push("<data hashkey='footerTop' value='" + footerTop + "'/>") : "";

			        msaName != ""   ? sendArray.push("<data hashkey='msaName' value='" + msaName + "'/>") : "";

			        
			        if (chart.chartName) {
			            sendArray.push("<data hashkey='c_chartName' value='" + c_chartName + "'/>");
			            sendArray.push("<data hashkey='c_chartType' value='" + c_chartType + "'/>");
			            sendArray.push("<data hashkey='c_title' value='" + c_title + "'/>");
			            sendArray.push("<data hashkey='c_xTitle' value='" + c_xTitle + "'/>");
			            sendArray.push("<data hashkey='c_yTitle' value='" + c_yTitle + "'/>");
			            sendArray.push("<data hashkey='c_startRowIndex' value='" + c_startRowIndex + "'/>");
			            sendArray.push("<data hashkey='c_startColIndex' value='" + c_startColIndex + "'/>");
			            sendArray.push("<data hashkey='c_endRowIndex' value='" + c_endRowIndex + "'/>");
			            sendArray.push("<data hashkey='c_endColIndex' value='" + c_endColIndex + "'/>");
			            sendArray.push("<data hashkey='c_serAxis' value='" + c_serAxis + "'/>");
			            sendArray.push("<data hashkey='c_catAxis' value='" + c_catAxis + "'/>");
			            sendArray.push("<data hashkey='c_catAxisStartX' value='" + c_catAxisStartX + "'/>");
			            sendArray.push("<data hashkey='c_catAxisStartY' value='" + c_catAxisStartY + "'/>");
			            sendArray.push("<data hashkey='c_catAxisEndX' value='" + c_catAxisEndX + "'/>");
			            sendArray.push("<data hashkey='c_catAxisEndY' value='" + c_catAxisEndY + "'/>");
			            sendArray.push("<data hashkey='c_serAxisStartX' value='" + c_serAxisStartX + "'/>");
			            sendArray.push("<data hashkey='c_serAxisStartY' value='" + c_serAxisStartY + "'/>");
			            sendArray.push("<data hashkey='c_serAxisEndX' value='" + c_serAxisEndX + "'/>");
			            sendArray.push("<data hashkey='c_serAxisEndY' value='" + c_serAxisEndY + "'/>");
			            sendArray.push("<data hashkey='c_dataAxisStartX' value='" + c_dataAxisStartX + "'/>");
			            sendArray.push("<data hashkey='c_dataAxisStartY' value='" + c_dataAxisStartY + "'/>");
			            sendArray.push("<data hashkey='c_dataAxisEndX' value='" + c_dataAxisEndX + "'/>");
			            sendArray.push("<data hashkey='c_dataAxisEndY' value='" + c_dataAxisEndY + "'/>");
			            sendArray.push("<data hashkey='c_catGridLines' value='" + c_catGridLines + "'/>");
			            sendArray.push("<data hashkey='c_serGridLines' value='" + c_serGridLines + "'/>");
			            sendArray.push("<data hashkey='c_legend' value='" + c_legend + "'/>");
			            sendArray.push("<data hashkey='c_legendPosition' value='" + c_legendPosition + "'/>");
			        }
			        
			        if (infoArr == null || typeof infoArr == "undefined") {
			            infoArr = [];
			        }
			        sendArray.push("<data hashkey='information'><vector result='" + infoArr.length + "'>");
			        for (var i = 0; i < infoArr.length; i++) {
			            var obj = infoArr[i];
			            sendArray.push("<data vectorkey='" + i + "'><hashtable>");
			            for (var prop in obj) {
			                if (prop == "text") {
			                    sendArray.push("<data hashkey='" + prop + "' value='" + WebSquare.xml.encode(obj[prop]) + "'/>");
			                } else {
			                    sendArray.push("<data hashkey='" + prop + "' value='" + obj[prop] + "'/>");
			                }
			            }
			            sendArray.push("</hashtable></data>");
			        }
			        sendArray.push("</vector></data>");
			        if (options.multiexcel == false) {
			            
			            sendArray.push("<data hashkey='splitProvider' value='" + splitProvider + "'/>");
			            sendArray.push("<data hashkey='providerRequestXml' value=''>" + providerRequestXml + "</data>");
			            sendArray.push("</hashtable></data>");
			            sendArray.push("</vector>");
			            var serializedTxt = sendArray.join("");
			            if (maxDataSize != -1) {
			                var byteLen = util.getByteLengthUtf8(serializedTxt);
			                if (maxDataSize < byteLen) {
			                    var gridMsg = WebSquare.language.getMessage("Grid_warning9", maxDataSize) || "The data size has exceeded the limit.\n The current limit is : " + maxDataSize + " byte";
			                    if (options.showProcess === false) {
			                        WebSquare.getBody().hideModal(true);
			                    } else if (options.showConfirm === true) {
			                        this.hideDownloadLayer();
			                    } else {
			                        WebSquare.layer.hideProcessMessage({
			                            scope: this.scope_id || ""
			                        });
			                    }
			                    alert(gridMsg);
			                    return;
			                }
			            }

			            if (msaName != "") {
			                var sendAction = "";
			                if (advancedExcelDownloadURL != "") {
			                    sendAction = advancedExcelDownloadURL;
			                }
			                
			                advancedExcelDownloadURL = core.getServletURL(this, msaName, "xmlToExcel2.wq", sendAction);

			                options.useXHR = true;
			                options.userExcel = true;
			            }

			            if (advancedExcelDownloadURL == "") {
			                advancedExcelDownloadURL = this.options.advancedExcelDownloadURL;
			            }

			            options.scopeId = this.scope_id || "";
			            core.excelDownload(advancedExcelDownloadURL, serializedTxt, "post", options);
			            if (this._dataList.options.depthColumn && options.spanAll == "true") { 
			                this.drilldown.statusArr = this.orgStatusArr;
			                this._dataList.filteredRowIndexArr = this.orgFilteredRowIndexArr;
			                this.showDepth = this.orgShowDepth;
			                this.orgStatusArr = null;
			                this.orgFilteredRowIndexArr = null;
			                this.orgShowDepth = null;
			                this.drawData(this.rowIndex, 0);
			            }
			            this.xmlData = null;
			            if (options.showProcess === false) {
			                WebSquare.getBody().hideModal(true);
			            } else if (options.showConfirm === true) {
			                this.hideDownloadLayer();
			            }
			        } else {
			            
			            sendArray.push("<data hashkey='splitProvider' value='" + splitProvider + "'/>");
			            sendArray.push("<data hashkey='providerRequestXml' value=''>" + providerRequestXml + "</data>");
			            sendArray.push("</hashtable></data>");
			            sendArray.push("</vector>");
			            return sendArray;
			        }
			    } catch (e) {
			        throw e;
			    }
			};

			gridView.prototype._getExcelStyle = function(options) {
			    try {
			        var colStyleData = {};
			        var rowStyleData = {};
			        var cellStyleData = {};
			        var headerStyleData = {};
			        var footerStyleData = {};
			        var subtotalCellStyleData = {};
			        var subtotalColStyleData = {};
			        var subtotalRowStyleData = {};
			        
			        var colCnt = this.getColumnCount();
			        if (options.useClass == true) {
			            for (var i = 0; i < colCnt; i++) {
			                var cellInfo = this.getCellInfo(i);
			                var colClassName = cellInfo.options.className;
			                if (colClassName) {
			                    var elem = document.querySelector("." + colClassName);
			                    if (elem) {
			                        var sTextAlign = WebSquare.style.getComputedStyle(elem, "text-align");
			                        var sBgColor = WebSquare.style.getComputedStyle(elem, "background-color");
			                        var sColor = WebSquare.style.getComputedStyle(elem, "color");
			                        var sFontWeight = WebSquare.style.getComputedStyle(elem, "font-weight");
			                        var sFontFamily =  WebSquare.style.getComputedStyle(elem, "font-family");
			                        var sFontSize = WebSquare.style.getComputedStyle(elem, "font-size");
			                        var classBackgroundStyle = util.getStyleFromCssStr(colClassName,["backgroundColor"]);
			                        var cssRuleBackgroundColor = classBackgroundStyle && classBackgroundStyle.backgroundColor;
			                        if (!cssRuleBackgroundColor && !elem.style.backgroundColor) {
			                            sBgColor = sBgColor.replace("rgba(0, 0, 0, 0)","");
			                        }
			                        if (colStyleData[i] === undefined) {
			                            colStyleData[i] = {};
			                        }

			                        if (sTextAlign != "") {
			                            colStyleData[i]["text-align"] = sTextAlign;  
			                        }
			                        if (sBgColor != "") {
			                            colStyleData[i]["background-color"] = sBgColor;
			                        }
			                        if (sColor != "") {
			                            colStyleData[i]["color"] = sColor;
			                        }
			                        if (sFontWeight != "") {
			                            colStyleData[i]["font-weight"] = sFontWeight;
			                        }
			                        if (sFontFamily != "") {
			                            colStyleData[i]["font-family"] = sFontFamily;
			                        }
			                        if (sFontSize != "") {
			                            colStyleData[i]["font-size"] = sFontSize;
			                        }
			                        
			                        var txtDecoration = WebSquare.style.getComputedStyle(elem, "text-decoration");
			                        if (txtDecoration == "underline" || txtDecoration == "line-through") {
			                            colStyleData[i]["text-decoration"] = txtDecoration;
			                        }
			                    }
			                }
			            }
			        }
			        
			        var tempColumStylekey = 0; 
			        for (var i = 0 ;i <this.struct.body.rowArr.length ; i++) {
			            for (var j=0 ; j<this.struct.body.rowArr[i].length ; j++) {
			                var cell = this.struct.body.rowArr[i][j];
			                
			                if (cell['textAlign']) {
			                    tempColumStylekey++;
			                    continue;
			                }
			                
			                if (!cell['inputType']) {
			                    tempColumStylekey++;
			                    continue;
			                }
			                var cellInfo = this.getCellInfo(parseInt(tempColumStylekey, 10));
			                if (cellInfo && cellInfo.options.textAlign) {
			                    var val = cellInfo.options.textAlign;
			                    if (val && val !="") {
			                        var tempColumStyleInfo = {};
			                        tempColumStyleInfo["text-align"] = val;
			                        tempColumStyleInfo["style"] = 'text-align:' + val;
			                        
			                        if (!(tempColumStylekey in this.columnStyleValueObj)) {
			                           this.columnStyleValueObj[tempColumStylekey] = tempColumStyleInfo
			                        }
			                    }
			                }
			                tempColumStylekey++;
			            }
			        }
			        
			        for (var i in this.columnStyleValueObj) {
			            var styleObj = {};
			            for (var j in this.columnStyleValueObj[i]) {
			                if (j != "style") {
			                    styleObj[j] = this.columnStyleValueObj[i][j];
			                }
			            }

			            var cellInfo = this.getCellInfo(parseInt(i, 10));
			            if (cellInfo) {
			                var txtDecoration = this.getColumnStyleValue(parseInt(i, 10), "text-decoration"); 
			                if (txtDecoration == "underline" || txtDecoration == "line-through") {
			                    styleObj["text-decoration"] = txtDecoration;
			                }
			            }

			            if (cellInfo && cellInfo.options.textAlign) {
			                var txtAlign = "";
			                txtAlign = this.getColumnStyleValue(parseInt(i, 10), "text-align");
			                if (txtAlign == "") {
			                    txtAlign = cellInfo.options.textAlign;
			                    if (txtAlign == "") {
			                        txtAlign = "center";
			                    }
			                }
			                styleObj["text-align"] = txtAlign;
			            }

			            if (colStyleData[i] === undefined) {
			                colStyleData[i] = styleObj;
			            } else {
			                for (var j in styleObj) {
			                    colStyleData[i][j] = styleObj[j];
			                }
			            }   
			        }
			        
			        for (var i = 0; i < this.rowStyleArr.length; i++) {
			            if (this.rowStyleArr[i]) {
			                var styleObj = {};
			                for (var j in this.rowStyleValueObj[this.rowStyleArr[i]]) {
			                    if (j != "style") {
			                        styleObj[j] = this.rowStyleValueObj[this.rowStyleArr[i]][j];
			                    }
			                }
			                var displayRowIndex = this.getDisplayRowIndex(i);
			                if (!isNaN(displayRowIndex)) {
			                    rowStyleData[displayRowIndex] = styleObj;
			                }
			            }
			        }
			        
			        for (var item in this.cellStyleArr) {
			            if (this.cellStyleArr[item] && !isNaN(item)) {
			                var styleObj = {};
			                var realRowIndex = parseInt(item / this.oneRowDataLength, 10);
			                var displayRowIndex = this.getDisplayRowIndex(realRowIndex);
			                var colIndex = item % this.oneRowDataLength;
			                for (var j in this.cellStyleValueObj[this.cellStyleArr[item]]) {
			                    if (j != "style") {
			                        if (this.cellStyleValueObj[this.cellStyleArr[item]][j]) {
			                            styleObj[j] = this.cellStyleValueObj[this.cellStyleArr[item]][j];
			                        }
			                    }
			                }
			                cellStyleData[displayRowIndex + "," + colIndex] = styleObj;
			            }
			        }
			        var _getClassStyle = function(classStyle, styleObj) {
			            if (classStyle.backgroundColor) {
			                styleObj["background-color"] = classStyle.backgroundColor;
			            }
			            if (classStyle.color) {
			                styleObj["color"] = classStyle.color;
			            }
			            if (classStyle.textAlign) {
			                styleObj["text-align"] = classStyle.textAlign;
			            }
			            if (classStyle.fontSize) {
			                styleObj["font-size"] = classStyle.fontSize;
			            }
			            if (classStyle.fontWeight) {
			                styleObj["font-weight"] = classStyle.fontWeight;
			            }
			            if (classStyle.fontFamily) {
			                styleObj["font-family"] = classStyle.fontFamily;
			            }
			            if (classStyle["text-decoration"] == "underline" || classStyle["text-decoration"] == "line-through") {
			                styleObj["text-decoration"] = classStyle["text-decoration"];
			            }
			            if (classStyle.borderLeft) {
			                styleObj["border-left"] = classStyle.borderLeft;
			            }
			            if (classStyle.borderRight) {
			                styleObj["border-right"] = classStyle.borderRight;
			            }
			        };
			        
			        if (options.useClass == true) {
			            for (var i = 0; i < this.cellClassArr.length; i++) {
			                if (this.cellClassArr[i]) {
			                    var styleObj = {};
			                    var realRowIndex = parseInt(i / this.oneRowDataLength, 10);
			                    var displayRowIndex = this.getDisplayRowIndex(realRowIndex);
			                    var colIndex = i % this.oneRowDataLength;
			                    var classStyle = WebSquare.util.getStyleFromCssStr(this.cellClassArr[i], ["backgroundColor","color","textAlign","fontSize","fontWeight","fontFamily","text-decoration","borderLeft","borderRight"]);
			                    if (cellStyleData[displayRowIndex + "," + colIndex]) {
			                        styleObj = cellStyleData[displayRowIndex + "," + colIndex];
			                    }
			                    if (classStyle) {
			                        _getClassStyle(classStyle, styleObj);
			                    }
			                    if (Object.keys(styleObj).length !== 0) {
			                        cellStyleData[displayRowIndex + "," + colIndex] = styleObj;
			                    }
			                }
			            }
			            for (var i = 0; i < this.rowClassArr.length; i++) {
			                if (this.rowClassArr[i]) {
			                    var styleObj = {};
			                    var displayRowIndex = this.getDisplayRowIndex(i);
			                    var classStyle = WebSquare.util.getStyleFromCssStr(this.rowClassArr[i], ["backgroundColor","color","textAlign","fontSize","fontWeight","fontFamily","text-decoration","borderLeft","borderRight"]);
			                    if (rowStyleData[displayRowIndex]) {
			                        styleObj = rowStyleData[displayRowIndex];
			                    }
			                    if (classStyle) {
			                        _getClassStyle(classStyle, styleObj);
			                    }
			                    if (Object.keys(styleObj).length !== 0) {
			                        rowStyleData[displayRowIndex] = styleObj;
			                    }
			                }
			            }
			        }
			        if (this.options.disabledBackgroundColor || this.options.disabledFontColor) {
			            var styleObj = {};
			            if (this.options.disabledBackgroundColor) {
			                styleObj["background-color"] = this.options.disabledBackgroundColor;
			            }
			            if (this.options.disabledFontColor) {
			                styleObj["color"] = this.options.disabledFontColor;
			            }
			            var colCnt = this.getColumnCount();
			            var rowCnt = this.getRowCount();
			            var useDrilldown = !!(this.isDrillDown && this._dataList.options.depthColumn);
			            for (var i = 0; i < rowCnt; i++) {
			                for (var j = 0; j < colCnt; j++) {
			                    if (this._getEditDisabled(i, j, useDrilldown)) {
			                        if (cellStyleData[i + "," + j]) {
			                            if (this.options.disabledBackgroundColor) {
			                                cellStyleData[i + "," + j]["background-color"] = this.options.disabledBackgroundColor;
			                            }
			                            if (this.options.disabledFontColor) {
			                                cellStyleData[i + "," + j]["color"] = this.options.disabledFontColor;
			                            }
			                        } else {
			                            cellStyleData[i + "," + j] = styleObj;
			                        }
			                    }
			                }
			            }
			        }
			        
			        var dataHeader_id = util.getDataPrefix("header_id");
			        var headerBackColor = "";
			        var headTds = this.getDomList("head_tds", "th", this.getElementById(this.id + "_head_table"));
			        for (var i = this.defaultColCnt; i < headTds.length; i++) {
			            var resultStr = "";
			            var headerColId = headTds[i].id.replace(this.id + "_", "");
			            var headerObj = this.headerCellStyleValueObj[headerColId];
			            if (headerObj && headerObj["background-color"]) {
			                headerBackColor = headerObj["background-color"];
			            } else if (options.headerColor) {
			                headerBackColor = options.headerColor;
			            } else {
			                headerBackColor = WebSquare.style.getStyle(headTds[i], "background-color");
			            }
			            resultStr += ("color:" + WebSquare.style.getStyle(headTds[i], "color") + ";");
			            resultStr += ("background-color:" + headerBackColor + ";");
			            resultStr += ("font-weight:" + WebSquare.style.getStyle(headTds[i], "font-weight") + ";");
			            resultStr += ("font-family:" + WebSquare.style.getStyle(headTds[i], "font-family") + ";");
			            resultStr += ("text-align:" + WebSquare.style.getStyle(headTds[i], "text-align") + ";");
			            var txtDecoration = WebSquare.style.getStyle(headTds[i], "text-decoration");
			            if (txtDecoration == "underline" || txtDecoration == "line-through") {
			                resultStr += "text-decoration:underline;";
			            }
			            headerStyleData[headTds[i].getAttribute(dataHeader_id)] = resultStr;
			        }
			        
			        if (this.hasFooter) {
			            var dataFooter_id = util.getDataPrefix("footer_id");
			            var footTds = this.getDomList("foot_tds", "th", this.getElementById(this.id + "_foot_table"));
			            for (var i = this.defaultColCnt; i < footTds.length; i++) {
			                var resultStr = "";
			                resultStr += ("color:" + WebSquare.style.getStyle(footTds[i], "color") + ";");
			                resultStr += ("background-color:" + WebSquare.style.getStyle(footTds[i], "background-color") + ";");
			                resultStr += ("font-weight:" + WebSquare.style.getStyle(footTds[i], "font-weight") + ";");
			                resultStr += ("font-family:" + WebSquare.style.getStyle(footTds[i], "font-family") + ";");
			                resultStr += ("text-align:" + WebSquare.style.getStyle(footTds[i], "text-align") + ";");
			                var txtDecoration = WebSquare.style.getStyle(footTds[i], "text-decoration");
			                if (txtDecoration == "underline" || txtDecoration == "line-through") {
			                    resultStr += "text-decoration:underline;";
			                }
			                
			                footerStyleData[footTds[i].getAttribute(dataFooter_id)] = resultStr;
			            }
			        }
			        
			        if (options.useSubTotalColumnClass == true) {
			            
			            var _getSubtotalClassByTargetColumnId = function(data, targetColumnId) {
			                if (!data || !data.length) return null;

			                for (var i = 0; i < data.length; i++) {
			                    var attr = data[i].attr;
			                    if (attr && attr.targetColumnID === targetColumnId) {
			                        return attr.subtotalClass || null;
			                    }
			                }
			                return null;
			            };
			            var _hasStyleProperty = function(styleObj) {
			                for (var key in styleObj) {
			                    if (styleObj.hasOwnProperty(key)) {
			                        return true;
			                    }
			                }
			                return false;
			            };
			            var _getSubtotalStyleFormatter = function(gv) {
			                var subtotalStyleFormatter = null;
			                if (gv.options.subtotalStyleFormatter) {
			                    try {
			                        if (typeof gv.options.subtotalStyleFormatter == "function") {
			                            subtotalStyleFormatter = gv.options.subtotalStyleFormatter;
			                        } else {
			                            subtotalStyleFormatter = util.getGlobalFunction(gv.options.subtotalStyleFormatter, gv.scope_id);
			                            if (subtotalStyleFormatter != null) {
			                                gv.options.subtotalStyleFormatter = subtotalStyleFormatter;
			                            }
			                        }
			                    } catch (e) {
			                        subtotalStyleFormatter = null;
			                    }
			                }
			                return subtotalStyleFormatter;
			            };
			            var _appendSubtotalRowStyleData = function(gv, rowIndex, targetID) {
			                if (targetID) {
			                    var rowClass = _getSubtotalClassByTargetColumnId(gv.struct.subtotalArr, targetID);
			                    var rowclassStyle = "";
			                    var rowstyleObj = {};
			                    if (rowClass) {
			                        rowclassStyle = WebSquare.util.getStyleFromCssStr(rowClass, ["backgroundColor","color","textAlign","fontSize","fontWeight","fontFamily","text-decoration","borderLeft","borderRight"]);
			                    }
			                    
			                    if (rowclassStyle) {
			                        _getClassStyle(rowclassStyle, rowstyleObj);
			                    }

			                    subtotalRowStyleData[rowIndex] = rowstyleObj;
			                }
			            };
			            var _appendSubtotalCellStyleData = function(gv, rowIndex, cellIndex, className) {
			                if (!className) {
			                    return;
			                }
			                var diffStr = className;
			                if (diffStr.indexOf(gv.options.subtotalTdClass) > -1) {
			                    
			                    diffStr = diffStr.replace(gv.options.subtotalTdClass, "");
			                    diffStr = diffStr.replace("  ", " ");
			                }
			                var styleObj = util.getStyleFromCssStrWithSpecificity(diffStr, ["backgroundColor","color","textAlign","fontSize","fontWeight","fontFamily","text-decoration","borderLeft","borderRight"]);
			                if (styleObj && _hasStyleProperty(styleObj)) {
			                    var newColIndex = (gv.options.rowNumVisible == true) ? (cellIndex - 1) : cellIndex;
			                    newColIndex = (gv.options.rowStatusVisible == true) ? (newColIndex - 1) : newColIndex;
			                    subtotalCellStyleData[rowIndex + "," + newColIndex] = styleObj;
			                }
			            };

			            var drawedSubtotalIndex = 0;
			            var drawedSubtotalRowIndex = 0;
			            if (this.options.drawType == "virtual") {
			                var subtotalStyleFormatter = _getSubtotalStyleFormatter(this);
			                var dataLength = this.getDataLength();
			                for (var displayRowIndex = 0; displayRowIndex < dataLength; displayRowIndex++) {
			                    for (var targetID in this.subtotalTableList) {
			                        var nowValue = this.dataList._getCellData(displayRowIndex, targetID);
			                        var nextValue = nowValue + "_12";
			                        if (displayRowIndex < dataLength - 1) {
			                            nextValue = this.dataList._getCellData(displayRowIndex + 1, targetID);
			                        }
			                        if (nowValue != nextValue) {
			                            var subTotalTable = this.subtotalTableList[targetID];
			                            var subtotalData = this.subtotalDataArr[targetID + "_" + nowValue];
			                            if (subtotalData == null) {
			                                subtotalData = this.getSubtotalData(subTotalTable, targetID, nowValue, displayRowIndex);
			                            }
			                            _appendSubtotalRowStyleData(this, drawedSubtotalRowIndex, targetID);

			                            var subTds = subTotalTable.getElementsByTagName("td");
			                            for (var n = 0; n < subTds.length; n++) {
			                                var elem = subTds[n];
			                                var className = elem.getAttribute("class") || "";
			                                var subTdId = elem.getAttribute("id");
			                                if (subtotalStyleFormatter && subtotalData && subtotalData[subTdId] != null) {
			                                    var data = subtotalData[subTdId];
			                                    var orgData = subtotalData[subTdId + "_org"];
			                                    if (orgData == undefined) {
			                                        orgData = data;
			                                    }
			                                    var formatterClass = subtotalStyleFormatter(orgData, data, subTdId);
			                                    if (formatterClass) {
			                                        className += " " + formatterClass;
			                                    }
			                                }
			                                _appendSubtotalCellStyleData(this, drawedSubtotalRowIndex, n, className);
			                            }
			                            drawedSubtotalRowIndex++;
			                        }
			                    }
			                }
			            } else {
			                for (var x = 0 ; x < this.drawedSubtotal.length ; x++) {
			                    var subtotalGroup = this.drawedSubtotal[x];
			                    var oldTargetID ="";
			                    for (var y = 0 ; y < subtotalGroup.length ; y++) {
			                        var subtotalTr = subtotalGroup[y];
			                        
			                        _appendSubtotalRowStyleData(this, drawedSubtotalRowIndex, subtotalGroup.targetID);

			                        if (!subtotalTr.getAttribute("data-subtotalrowindex")){
			                            continue;
			                        }
			                        
			                        for (var n = 0 ; n < subtotalTr.childNodes.length ; n++) {
			                            var elem = subtotalTr.childNodes[n];
			                            _appendSubtotalCellStyleData(this, drawedSubtotalRowIndex, n, elem.getAttribute("class"));
			                        }
			                        if (subtotalGroup.targetID != oldTargetID) {
			                            drawedSubtotalRowIndex++;
			                        }
			                        oldTargetID = subtotalGroup.targetID;
			                        drawedSubtotalIndex++;
			                    }
			                }
			            }
			        }
			        
			        
			        var styleData = JSON.stringify({
			            row: rowStyleData,
			            col: colStyleData,
			            cell: cellStyleData,
			            header: headerStyleData,
			            footer: footerStyleData,
			            subtotalCol: subtotalColStyleData,
			            subtotalCell: subtotalCellStyleData,
			            subtotalRow: subtotalRowStyleData
			        });
			        return styleData;    
			    } catch (e) {
			        exception.printStackTrace(e, null, this);
			    }
			};
})()