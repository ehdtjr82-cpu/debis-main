export default {
  "WebSquare": {
    "dataPrefix": {
      "@value": "true"
    },
    "wpack": {
      "contextRoot": {
        "@value": "/"
      },
      "srcExtension": {
        "@value": "xml"
      },
      "destExtension": {
        "@value": "js"
      },
      "destRoot": {
        "@value": "_wpack_"
      },
      "babelDestRoot": {
        "@value": "_wpackbabel_"
      },
      "loadingMode": {
        "@value": "wpack"
      },
      "common": {
        "@name": "",
        "@value": ""
      },
      "excludePrefix": {
        "@value": "__"
      }
    },
    "allValue": {
      "@value": "all"
    },
    "docType": {
      "@value": "standard"
    },
    "debug": {
      "@errorConsole": "true",
      "@remoteConsole": "false",
      "@value": "false"
    },
    "debugKey": {
      "@value": ""
    },
    "language": {
      "@value": "ko"
    },
    "useItemLocale": {
      "@value": "false"
    },
    "date": {
      "serverDate": {
        "@autoupdateinterval": "3600",
        "@enable": "true"
      }
    },
    "deprecated": {
      "sync": {
        "@value": ""
      }
    },
    "exceptionHandler": {
      "@value": "websquare"
    },
    "debugMenu": {
      "@value": "block"
    },
    "welcome-file": {},
    "postDrawMode": {
      "@value": "synchronous"
    },
    "forcedValueSetting": {
      "@value": "true"
    },
    "processMsgHeight": {
      "@value": "81"
    },
    "processMsgWidth": {
      "@value": "295"
    },
    "processMsgBackground": {
      "@backgroundColor": "#112233",
      "@value": "true"
    },
    "byteCheckEncoding": {
      "@value": "euc-kr"
    },
    "initScript": {
      "#cdata": function() {  
        $c.hkey.init($p);
        if(location.host.indexOf("ebiz.") == -1 && typeof $p.getAllParameter().paramData !== "undefined" && typeof $p.getAllParameter().paramData.messageType == "undefined") {
            $c.win.setPgmProc($p);
        } else {
            $c.win.setHistoryBackEvent();
        }
        $c.data.createHolidayDataList($p); 
	 
         
        },
      "@value": "true"
    },
    "postScript": {
      "#cdata": function() {  
        if(location.host.indexOf("ebiz.") == -1 && typeof $p.getAllParameter().paramData !== "undefined" && typeof $p.getAllParameter().paramData.messageType == "undefined") {
            if($p.isPopup() && !$p.isWFramePopup()) {
                $c.win.setPgmProc($p);
            }
            if(typeof scwin.onUdcCompleted !== "undefined") {
                scwin.onUdcCompleted();
            }
        }
        $c.win.processCommonData($p);
	 
         
        },
      "@value": "true"
    },
    "wframe": {
      "mode": {
        "@value": "async"
      },
      "scope": {
        "@value": "true"
      },
      "popupAutoClose": {
        "@value": "true"
      },
      "initScript": {
        "#cdata": function() {  
            if($p.getFrame().parentControl.options.pluginName == "tabControl") {
                var initParamData = $p.getParameter("paramData") || {};
                var initMenuInfo = initParamData.menuInfo || {};
                var parentPgmId = "";
                try {
                    parentPgmId = $c.win._getPgmId($p.getFrame()) || "";
                } catch (e) {}
                var initPgmId = initMenuInfo.refreshPid || initMenuInfo.pgmId || parentPgmId || $p.getFrame().options.src.substring($p.getFrame().options.src.lastIndexOf("/")+1).replace(/.xml/g,".jsp");
                $p.top().dma_mem.set("pgmId", initPgmId);
                $p.top().scwin.setUserAuth();
            }
         
         
        },
        "@value": "true"
      },
      "postScript": {
        "#cdata": function() {  
            if($p.getFrame().org_id !== "wfm_header" && $p.getFrame().org_id !== 'wfm_side' && $p.getFrame().getSrc().indexOf("contentHeader.xml") < 0 && $p.getFrame().options.src.indexOf("auth_failed.xml") == -1) {
                if($p.getFrame().options.src.indexOf("userFilter") == -1 && !location.href.includes("/ui/member")) {
                    var frameSrc = "";
                    var isAuthFreePage = false;
                    var isUploadLayerPopup = false;
                    var initParamData = $p.getParameter("paramData") || {};
                    var allParam = {};
                    var allParamData = {};
                    var initMenuInfo = initParamData.menuInfo || {};
                    var isAuthBypassMenu = false;
                    try {
                        allParam = $p.getAllParameter() || {};
                        allParamData = allParam.paramData || {};
                    } catch (e) {}
                    if (!initMenuInfo.authBypassYn && allParamData.menuInfo) {
                        initMenuInfo = allParamData.menuInfo;
                    }
                    if (!initMenuInfo.authBypassYn && allParamData.data && allParamData.data.menuInfo) {
                        initMenuInfo = allParamData.data.menuInfo;
                    }
                    if (!initMenuInfo.authBypassYn && allParam.dataObject && allParam.dataObject.data && allParam.dataObject.data.menuInfo) {
                        initMenuInfo = allParam.dataObject.data.menuInfo;
                    }
                    try {
                        if (!initMenuInfo.authBypassYn && $p.top().dma_mem) {
                            isAuthBypassMenu = $p.top().dma_mem.get("authBypassYn") === "Y";
                        }
                    } catch (e) {}
                    isAuthBypassMenu = isAuthBypassMenu || initMenuInfo.authBypassYn === "Y";
                    try {
                        frameSrc = $p.getFrame().getSrc() || $p.getFrame().options.src || "";
                    } catch (e) {
                        frameSrc = $p.getFrame().options.src || "";
                    }
                    isAuthFreePage = $c.win.isAuthFreePage(frameSrc)
                        || $c.win.isAuthFreePage($p.getFrame().options.src)
                        || $c.win.isAuthFreePage(initMenuInfo.src)
                        || $c.win.isAuthFreePage(initMenuInfo.refreshPid)
                        || $c.win.isAuthFreePage(initMenuInfo.pgmId);
                    try {
                        isUploadLayerPopup = $p.isWFramePopup() && (
                            isAuthFreePage
                            || typeof $p.getParameter("popupParam") !== "undefined"
                            || typeof $p.getParameter("csvPopupParam") !== "undefined"
                        );
                    } catch (e) {}
                    if($p.top().$p.isPopup() || isAuthFreePage || isUploadLayerPopup || isAuthBypassMenu || location.href.indexOf("externalSabunLoginPopup") > -1) {
                        $c.win.setPgmProc($p);
                        if(typeof scwin.onUdcCompleted !== "undefined" ) {
                            scwin.onUdcCompleted();
                        }
                        $c.win.processCommonData($p);
                    } else {
                            var postParamData = $p.getParameter("paramData") || {};
                            var postMenuInfo = postParamData.menuInfo || {};
                            var parentPgmId = "";
                            try {
                                parentPgmId = $c.win._getPgmId($p.getFrame()) || "";
                            } catch (e) {}
                            var postPgmId = postMenuInfo.refreshPid || postMenuInfo.pgmId || parentPgmId || $p.getFrame().options.src.substring($p.getFrame().options.src.lastIndexOf("/")+1).replace(/.xml/g,".jsp");
                            $p.top().dma_mem.set("pgmId", postPgmId);
                            $p.top().scwin.setUserAuth().then(function(ret) {
                                if (ret === false) {
                                    var authFailedUrl = $c.sbm.getContextPath() + "/cm/xml/auth_failed.xml";
                                    $p.getFrame().setSrc(authFailedUrl, {
                                        dataObject : {
                                            type : "json",
                                            name : "paramData",
                                            data : {
                                                menuInfo : {
                                                    menuNm : "권한없음",
                                                    pgmNm : "권한없음",
                                                    pgmId : "auth_failed.jsp",
                                                    src : authFailedUrl
                                                }
                                            }
                                        }
                                    });
                                    return false;
                                }
                                $c.win.setPgmProc($p);
                                if(typeof scwin.onUdcCompleted !== "undefined" ) {
                                    scwin.onUdcCompleted();
                                }
                                $c.win.processCommonData($p);
                            });
                    }
                }
            };
		 
         
        },
        "@value": "true"
      }
    },
    "pageFrame": {
      "initScript": {
        "#cdata": function() {     
            if(typeof $p.getAllParameter().paramData !== "undefined" && typeof $p.getAllParameter().paramData.messageType == "undefined") {
               // $c.win.setPgmProc($p);
            }
         
         
        },
        "@value": "true"
      },
      "postScript": {
        "#cdata": function() {  
            if(typeof $p.getAllParameter().paramData.messageType == "undefined") {
                $c.win.setPgmProc($p);
                if(typeof scwin.onUdcCompleted !== "undefined" ) {
                    scwin.onUdcCompleted();
                }
            }
            $c.win.processCommonData($p);
		 
         
        },
        "@value": "true"
      }
    },
    "clearMemory": {
      "@value": "false"
    },
    "stylesheet": {
      "@earlyImportList": "/cm/css/style.css,/cm/css/base.css,/cm/css/contents.css",
      "@enable": "true",
      "@import": "link",
      "@value": "stylesheet_ext.css"
    },
    "style": {
      "removeDefaultClass": {
        "@value": "true"
      }
    },
    "engine": {
      "module": [
        {
          "@src": "/cm/js/hotfix.js"
        },
        {
          "@src": "/websquare/externalJS/big/big.min.js"
        }
      ]
    },
    "ModelUtil": {
      "copyChildrenNodes": {
        "@refresh": "false"
      }
    },
    "preProcessor": {
      "systemPreProcessor": {
        "@value": ""
      },
      "businessPreProcessor": {
        "@value": ""
      }
    },
    "workflow": {
      "processMsg": {
        "@value": ""
      },
      "makeGlobalObject": {
        "@value": "true"
      }
    },
    "submission": {
      "processMsg": {
        "@value": "처리중"
      },
      "showSubmissionTime": {
        "@value": "true"
      },
      "preSubmitFunction": {
        "@value": "$c.sbm.__preSubmitFunction"
      },
      "callbackSubmitFunction": {
        "@value": "$c.sbm.__callbackSubmitFunction"
      },
      "requestID": {
        "@value": ""
      },
      "makeGlobalObject": {
        "@value": "true"
      },
      "submitErrorHandler": {
        "@value": "$c.sbm.__submitErrorHandler"
      }
    },
    "visibleHelper": {
      "targetHandler": {
        "@value": ""
      }
    },
    "spa": {
      "onpageunload": {
        "@value": ""
      },
      "variable": {
        "@value": "scwin"
      },
      "scriptCache": {
        "@value": "true"
      },
      "autoReload": {
        "@count": "50",
        "@value": "true"
      }
    },
    "scriptLoading": {
      "@merge": "true"
    },
    "scriptPrecedence": {
      "@value": "true"
    },
    "strictMode": {
      "@id": "mf",
      "@value": "true"
    },
    "engineCache": {
      "@compression": "true",
      "@enable": "true",
      "@postfix": "month"
    },
    "userAgentPattern": {
      "@XPathParser": "Edge|Trident|MSIE"
    },
    "preserveWhiteSpace": {
      "@value": "false"
    },
    "environment": {
      "@cache": "cache",
      "@mode": "production",
      "@postfix": "day"
    },
    "script": {
      "@postfix": "environment"
    },
    "emptyTag": {
      "@value": "area,base,basefont,br,col,frame,hr,img,input,link,meta,param"
    },
    "engineLoadingMode": {
      "@android": "0",
      "@chrome": "0",
      "@ie": "0",
      "@iphone": "0",
      "@moz": "0",
      "@opera": "0",
      "@safari": "0"
    },
    "dataList": {
      "removeDummyRowStatus": {
        "@value": "true"
      },
      "removedDataMatch": {
        "@value": "true"
      },
      "saveRemovedDataDeletedInsertedRow": {
        "@value": "false"
      },
      "keepFilter": {
        "@value": "true"
      }
    },
    "grid": {
      "contentCellClick": {
        "@value": "true"
      },
      "noSelect": {
        "@value": "true"
      },
      "rowNumStatusUniqueId": {
        "@value": "true"
      },
      "drilldownRealRowIndexAll": {
        "@value": "true"
      },
      "collectGarbage": {
        "@value": "none"
      },
      "fastScroll": {
        "@value": "true"
      },
      "dataType": {
        "date": {
          "@displayFormat": "yyyy-MM-dd"
        }
      },
      "editType": {
        "@value": "focus"
      },
      "rowNumBackgroundColor": {
        "@value": "#e5eff7"
      },
      "rowNumRowMouseOverColor": {
        "@value": "true"
      },
      "selectedRowColor": {
        "@value": "#fcf8e3"
      },
      "oddEvenColorDisplay": {
        "@value": "true"
      },
      "evenRowBackgroundColor": {
        "@value": "#f5f5f5"
      },
      "oddRowBackgroundColor": {
        "@value": "#ffffff"
      },
      "rowMouseOver": {
        "@value": "true"
      },
      "rowMouseOverColor": {
        "@value": "#edf3fb"
      },
      "tooltipStyle": {
        "@value": "padding:1px 3px 0;line-height:14px;font-size:12px;border:0;background-color:#5c85d4;color:#fff"
      },
      "noResultMessageVisible": {
        "@value": "true"
      },
      "noResultMessage": {
        "@value": "데이터가 없음"
      },
      "noResultMessageStyle": {
        "@value": "position:absolute; left:40%; width:20%; top:40%; border:1px solid #b3b3b3; color:#383d41; font-size:12px; padding:5px; text-align:center; background:#fafafa"
      },
      "pasteMessage": {
        "@value": "데이터 붙이는 중"
      },
      "getColumnVisible": {
        "@useRealColIndex": "true"
      },
      "colIdToColIndex": {
        "@value": "true"
      },
      "checkDisabledOnPaste": {
        "@value": "true"
      },
      "checkReadOnlyOnPaste": {
        "@value": "true"
      },
      "column": [
        {
          "@inputType": "text",
          "editType": {
            "@value": "select"
          }
        },
        {
          "@inputType": "select",
          "chooseOptionLabel": {
            "@value": ""
          }
        },
        {
          "@inputType": "calendar",
          "dataType": {
            "@value": "date"
          },
          "displayFormat": [
            {
              "@value": "yyyy/MM",
              "@valueType": "yearMonth"
            },
            {
              "@value": "yyyy/MM/dd",
              "@valueType": "yearMonthDate"
            },
            {
              "@value": "yyyy/MM/dd HH:mm",
              "@valueType": "yearMonthDateTime"
            },
            {
              "@value": "yyyy/MM/dd HH:mm:SS",
              "@valueType": "yearMonthDateTimeSec"
            }
          ]
        }
      ]
    },
    "gridView": {
      "noSelect": {
        "@value": "false"
      },
      "drilldownFooterExpressionAllData": {
        "@value": "true"
      },
      "rowNumStatusUniqueId": {
        "@value": "true"
      },
      "preventMultipleClick": {
        "@value": "true"
      },
      "drilldownRealRowIndexAll": {
        "@value": "true"
      },
      "collectGarbage": {
        "@value": "none"
      },
      "fastScroll": {
        "@value": "true"
      },
      "dataType": {
        "date": {
          "@displayFormat": "yyyy/MM/dd"
        }
      },
      "editType": {
        "@value": "focus"
      },
      "rowNumBackgroundColor": {
        "@value": "#e5eff7"
      },
      "rowNumRowMouseOverColor": {
        "@value": "true"
      },
      "selectedRowColor": {
        "@value": "#fcf8e3"
      },
      "selectedCellColor": {
        "@value": "#fcf8e3"
      },
      "oddEvenColorDisplay": {
        "@value": "true"
      },
      "evenRowBackgroundColor": {
        "@value": "#F8FFF8"
      },
      "oddRowBackgroundColor": {
        "@value": "#ffffff"
      },
      "rowMouseOver": {
        "@value": "false"
      },
      "rowMouseOverColor": {
        "@value": ""
      },
      "tooltipStyle": {
        "@value": "padding:1px 3px 0;line-height:14px;font-size:12px;border:0;background-color:#5c85d4;color:#fff"
      },
      "noResultMessageVisible": {
        "@value": "true"
      },
      "noResultMessage": {
        "@value": "데이터가 없음"
      },
      "noResultMessageStyle": {
        "@value": "position:absolute; left:40%; width:20%; top:40%; border:1px solid #b3b3b3; color:#383d41; font-size:12px; padding:5px; text-align:center; background:#fafafa"
      },
      "pasteMessage": {
        "@value": "데이터 붙이는 중"
      },
      "getColumnVisible": {
        "@useRealColIndex": "true"
      },
      "colIdToColIndex": {
        "@value": "true"
      },
      "checkDisabledOnPaste": {
        "@value": "true"
      },
      "checkReadOnlyOnPaste": {
        "@value": "true"
      },
      "useDataDragDropGuideLine": {
        "@value": "true"
      },
      "editFormatGetCellDisplayData": {
        "@value": "true"
      },
      "sortEvent": {
        "@value": "onclick"
      },
      "sortable": {
        "@value": "true"
      },
      "hcolumn": [
        {
          "@inputType": "checkbox",
          "sortable": {
            "@value": "false"
          }
        },
        {
          "sortable": {
            "@value": "true"
          }
        }
      ],
      "column": [
        {
          "@inputType": "checkbox",
          "noDisabledOnReadOnly": {
            "@value": "true"
          }
        },
        {
          "@inputType": "text",
          "editType": {
            "@value": "select"
          }
        },
        {
          "@inputType": "textImage",
          "viewType": {
            "@value": "default"
          },
          "imageWidth": {
            "@value": "20"
          },
          "imageSrc": {
            "@value": "/cm/images/base/g_btn_search.png"
          }
        },
        {
          "@inputType": "custom",
          "viewType": {
            "@value": "default"
          },
          "imageWidth": {
            "@value": "20"
          },
          "imageSrc": {
            "@value": "/cm/images/base/g_btn_search.png"
          },
          "delimiter": {
            "@value": " : "
          },
          "copyOption": {
            "@value": "display"
          }
        },
        {
          "@inputType": "select",
          "chooseOptionLabel": {
            "@value": ""
          },
          "eventPriority": {
            "@value": "oneditend"
          },
          "editType": {
            "@value": "select"
          },
          "delimiter": {
            "@value": " : "
          },
          "copyOption": {
            "@value": "display"
          }
        },
        {
          "@inputType": "autoComplete",
          "copyOption": {
            "@value": "display"
          }
        },
        {
          "@inputType": "calendar",
          "dataType": {
            "@value": "date"
          },
          "dateValidCheck": {
            "@value": "false"
          },
          "pickerType": {
            "@value": "dynamic"
          },
          "displayFormat": [
            {
              "@value": "yyyy",
              "@valueType": "year"
            },
            {
              "@value": "yyyy/MM",
              "@valueType": "yearMonth"
            },
            {
              "@value": "yyyy/MM/dd",
              "@valueType": "yearMonthDate"
            },
            {
              "@value": "yyyy/MM/dd HH:mm",
              "@valueType": "yearMonthDateTime"
            },
            {
              "@value": "yyyy/MM/dd HH:mm:SS",
              "@valueType": "yearMonthDateTimeSec"
            }
          ]
        }
      ],
      "useFilterList": {
        "@value": "true"
      },
      "showSortableUseFilter": {
        "@value": "true"
      },
      "showSortableImage": {
        "@value": "true"
      },
      "dataDragSelect": {
        "@value": "true"
      },
      "useShiftKey": {
        "@value": "true"
      },
      "focusMode": {
        "@value": "both"
      },
      "visibleRowNumFix": {
        "@value": "true"
      },
      "columnMove": {
        "@value": "true"
      },
      "columnMoveWithFooter": {
        "@value": "true"
      },
      "enterKeyMove": {
        "@value": "edit"
      },
      "editModeEvent": {
        "@value": "onclick"
      },
      "focusFlow": {
        "@value": "linear"
      },
      "filterFocusMode": {
        "@value": "fixScrollX"
      }
    },
    "inputCalendar": {
      "validCheck": {
        "@value": "true"
      },
      "dataType": {
        "@value": "date"
      },
      "delimiter": {
        "@value": "-"
      },
      "validator": {
        "@value": "$c.date.__validDate"
      },
      "pickerType": {
        "@value": "dynamic"
      },
      "displayFormat": [
        {
          "@defaultValue": "yyyy",
          "@valueType": "year"
        },
        {
          "@defaultValue": "yyyy/MM",
          "@valueType": "yearMonth"
        },
        {
          "@defaultValue": "yyyy/MM/dd",
          "@valueType": "yearMonthDate"
        },
        {
          "@defaultValue": "yyyy/MM/dd HH:mm",
          "@valueType": "yearMonthDateTime"
        },
        {
          "@defaultValue": "yyyy/MM/dd HH:mm:SS",
          "@valueType": "yearMonthDateTimeSec"
        },
        {
          "@defaultValue": "yyyy/MM/dd HH",
          "@valueType": "yearMonthDateHour"
        }
      ],
      "delimiterLocaleKey": {
        "@value": "IC_Delimiter"
      },
      "maskLocaleKey": {
        "@value": "IC_Mask"
      },
      "calendarImage": {
        "@value": ""
      },
      "calendarImageOver": {
        "@value": ""
      },
      "validateOnInput": {
        "@value": "true"
      },
      "allowChar": {
        "@value": '0-9'
      },
      "ignoreChar": {
        "@value": '가-힣'
      },
      "fixedDate": {
        "@value": "today"
      }
    },
    "input": {
      "focusStyle": {
        "@value": ""
      },
      "dateMask": {
        "@value": "yyyy/MM/dd"
      },
      "timeMask": {
        "@value": "HH:mm"
      },
      "focusCalcSize": {
        "@value": "false"
      },
      "editFormatPartialMask": {
        "@value": "true"
      },
      "editType": {
        "@value": "select"
      },
      "validateOnInput": {
        "@value": "true"
      }
    },
    "calendar": {
      "minYear": {
        "@value": "1978"
      },
      "maxYear": {
        "@value": "2099"
      }
    },
    "selectbox": {
      "visibleRowNum": {
        "@value": "5"
      },
      "dataListAutoRefresh": {
        "@value": "true"
      },
      "textAlign": {
        "@value": "left"
      },
      "delimiter": {
        "@value": "  :  "
      },
      "escape": {
        "@value": "false"
      },
      "displayMode": {
        "@value": "value delim label"
      }
    },
    "selectbox_native": {
      "visibleRowNum": {
        "@value": "5"
      },
      "dataListAutoRefresh": {
        "@value": "true"
      }
    },
    "tabControl": {},
    "treeview": {
      "tooltipGroupClass": {
        "@value": "false"
      }
    },
    "trigger": {
      "preventMultipleClick": {
        "@value": "true"
      }
    },
    "anchor": {
      "preventMultipleClick": {
        "@value": "true"
      }
    },
    "windowContainer": {
      "tooltipGroupClass": {
        "@value": "false"
      },
      "getWindow": {
        "@searchTarget": "windowId"
      },
      "displayOnlyTopWindow": {
        "@value": "true"
      }
    },
    "pageList": {},
    "radio": {
      "nameScope": {
        "@value": "true"
      }
    },
    "popup": {
      "popupCenter": {
        "@value": "false"
      }
    },
    "body": {
      "tooltipSec": {
        "@value": "1"
      }
    },
    "editor": {
      "version": {
        "@value": "5.41.1"
      }
    },
    "fusionchart": {
      "version": {
        "@value": "3.23"
      }
    },
    "scheduleCalendar": {
      "version": {
        "@value": "6.1.11"
      }
    },
    "autoComplete": {
      "blurEventControl": {
        "@value": "true"
      },
      "editType": {
        "@value": "select"
      },
      "textAlign": {
        "@value": "left"
      },
      "delimiter": {
        "@value": "  :  "
      },
      "escape": {
        "@value": "false"
      },
      "displayMode": {
        "@value": "value delim label"
      },
      "searchTarget": {
        "@value": "both"
      },
      "caseSensitive": {
        "@value": "false"
      }
    },
    "projectCommon": {
      "module": [
        {
          "@name": "$c.data",
          "@src": "/cm/gcc/data.xml"
        },
        {
          "@name": "$c.date",
          "@src": "/cm/gcc/date.xml"
        },
        {
          "@name": "$c.ext",
          "@src": "/cm/gcc/ext.xml"
        },
        {
          "@name": "$c.hkey",
          "@src": "/cm/gcc/hkey.xml"
        },
        {
          "@name": "$c.num",
          "@src": "/cm/gcc/num.xml"
        },
        {
          "@name": "$c.sbm",
          "@src": "/cm/gcc/sbm.xml"
        },
        {
          "@name": "$c.str",
          "@src": "/cm/gcc/str.xml"
        },
        {
          "@name": "$c.util",
          "@src": "/cm/gcc/util.xml"
        },
        {
          "@name": "$c.win",
          "@src": "/cm/gcc/win.xml"
        },
        {
          "@name": "$c.gus",
          "@src": "/cm/gcc/gauss.xml"
        },
        {
          "@name": "$c.global",
          "@src": "/cm/gcc/global.xml"
        },
        {
          "@name": "$c.comm",
          "@src": "/cm/gcc/popupdefine.xml"
        },
        {
          "@name": "$c.ilcomm",
          "@src": "/ui/il/common/xml/ilpopupdefine.xml"
        }
      ]
    },
    "languagePack": {
      "@useLanguagePack": "true",
      "url": {
        "@lang": "ko",
        "@value": "/cm/js/message.js"
      }
    },
    "xhr": {
      "@useActiveXObject": "false"
    },
    "license": {
      "@value": "true"
    },
    "requirejs": {
      "@timeout": "20"
    },
    "disableDuplicateIdAlert": {
      "@value": "false"
    }
  }
}