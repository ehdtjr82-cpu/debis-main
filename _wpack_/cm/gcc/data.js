/*amd /cm/gcc/data.xml 201931 5416c097960495b5f8c72e338605fa4e2f770db90f1f09c02dc7aaf1354c5d0c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMMON'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.getValResultMsg,scwin.setDownloadGridViewOption,scwin.loadMessage,scwin.initChangeCheckedDc,scwin.setChangeCheckedDc,scwin.getChangeCheckedMainFrame,scwin.setCommonCode,scwin.getCommonCodeDataList,scwin.executeCommonCode,scwin.getParameter,scwin.getColumnName,scwin.getDataCollection,scwin.getMessage,scwin.isModified,scwin.downloadMultipleDataList,scwin.downloadMultipleGridView,scwin.downloadGridViewExcel,scwin.downloadGridViewCSV,scwin.uploadGridViewExcel,scwin.uploadGridViewCSV,scwin.validateGroup,scwin.validateGridView,scwin.createDataList,scwin.createDataMap,scwin.undoAll,scwin.undoRow,scwin.undoGridView,scwin.deleteRow,scwin.insertRow,scwin.getMatchedJSON,scwin.setUserData,scwin.getUserData,scwin.createHolidayDataList,scwin.loadHoliday,scwin.setInitObj,scwin.dataListFilter,scwin.getMemInfo,scwin.getSysNm,scwin.isMenu1,scwin.setPopupTitle,scwin.deleteRows,scwin.setGauceUtil,scwin.setDsCommonUtil,scwin.getDMessage,scwin.cfAutoPopUpRun,scwin.setCommonComboUtil,scwin.cfNodeMoveChkOfTreeMenuRequest,scwin.fn_isBusiNoByValue,scwin.PhoneChk,scwin.fn_phoneChk,scwin.onlyNumber,scwin.applyGridViewGroupExpr,scwin.expandGridLayout,scwin.getGroupExprJson'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @component
 * @componentName udc_data
 * @pluginName
 * @company
 * @developer
 * @category /cm/gcc
 * @notSupportBrowser
 * @version
 * @htmlRender
 * @icon
 * @disableIcon
 * @description
 * @width
 * @height
 * @license
 * @imagePath
 * @homepage
 */

// 공통 코드 저장을 위한 DataList 속성 정보
scwin.DATA_PREFIX = "dlt_commonCode";
scwin.COMMON_CODE_INFO = {
  LABEL: "cdNm",
  VALUE: "cd",
  FILED_ARR: ["grpCd", "cd", "cdNm", "fltrCd1", "fltrCd2", "fltrCd3", "sortSeq", "cdDesc"]
};

// 공통 코드 데이터
scwin.commonCodeList = [];
scwin.onpageload = function ($p) {};

/**
 * @method 
 * @name getValResultMsg
 * @description 유효성 검사 결과 메시지를 반환한다.
 * @param {Object} valInfo 유효성 검사 옵션
 * @returns {Object} msgInfo 유효성 검사 결과 메시지 정보 
 * msgInfo.msgType {String} 메시지 타입("1": 기본 검사 항목, "2", 사용자 정의함수(valInfo) 검사항목)
 * msgInfo.message {String} 검사 결과 메시지 내용
 * @param {string} value 값
 * @param {Object} dataCollectionObj DataCollection 객체
 * @param {Number} rowIndex Row Index 값
 * @hidden N
 * @exception 
 * @example $c.data.getValResultMsg(valInfo, value);
 */
scwin.getValResultMsg = function ($p, valInfo, value, dataCollectionObj, rowIndex) {
  let msgInfo = {
    msgType: "1",
    message: ""
  };
  if (typeof valInfo.mandatory !== "undefined" && valInfo.mandatory === true && value != null && value.length === 0) {
    msgInfo.message = "필수 입력 항목 입니다.";
  } else if (typeof valInfo.minLength !== "undefined" && valInfo.minLength > 0 && value != null && value.length < valInfo.minLength) {
    msgInfo.message = "최소 길이 " + valInfo.minLength + "자리 이상으로 입력해야 합니다.";
  } else if (typeof valInfo.minByteLength !== "undefined" && valInfo.minByteLength > 0 && $c.str.getByteLength($p, value) < valInfo.minByteLength) {
    msgInfo.message = "최소 길이 " + valInfo.minByteLength + "자리 이상으로 입력해야 합니다.";
  } else if (typeof valInfo.isEmail !== "undefined" && valInfo.isEmail && $c.str.isEmail($p, value) === false) {
    msgInfo.message = "유효한 이메일 주소가 아닙니다.";
  } else if (typeof valInfo.isPhone !== "undefined" && valInfo.isPhone && value != null && $c.str.isPhone($p, value) === false) {
    msgInfo.message = "유효한 전화번호가 아닙니다.";
  } else if (typeof valInfo.isSSN !== "undefined" && valInfo.isSSN && value != null && $c.str.isSSN($p, value) === false) {
    msgInfo.message = "유효한 주민번호가 아닙니다.";
  } else if (typeof valInfo.isBizID !== "undefined" && valInfo.isBizID && value != null && $c.str.isBizID($p, value) === false) {
    msgInfo.message = "유효한 사업자번호가 아닙니다.";
  } else if (typeof valInfo.isDate !== "undefined" && valInfo.isDate && value != null && $c.date.isDate($p, value) === false) {
    msgInfo.message = "유효한 날짜형식이 아닙니다.";
  } else if (typeof valInfo.minNumber !== "undefined" && valInfo.minNumber && parseInt(valInfo.minNumber) > (parseInt(value) || 0)) {
    msgInfo.message = "최소 숫자는 " + valInfo.minNumber + " 입니다.";
  } else if (typeof valInfo.calendarLength !== "undefined" && value.length != valInfo.calendarLength) {
    msgInfo.message = valInfo.calendarLength + "자리수만큼 입력하십시오.";
  } else if (typeof valInfo.fixLength !== "undefined" && value.length != valInfo.fixLength) {
    msgInfo.message = valInfo.fixLength + "자리수만큼 입력하십시오.";
  } else if (typeof valInfo.notAllowed !== "undefined" && value == valInfo.notAllowed) {
    msgInfo.message = "다음 문자가 올 수 없습니다.<br/>" + valInfo.notAllowed;
  } else if (typeof valInfo.valFunc === "function") {
    let resultMsg = valInfo.valFunc(value, dataCollectionObj, rowIndex);
    if ($c.util.isEmpty($p, resultMsg) === false) {
      msgInfo.msgType = "2";
      msgInfo.message = resultMsg;
    }
  }
  return msgInfo;
};

/**
 * @method
 * @name setDownloadGridViewOption
 * @description 엑셀 다운로드 옵션을 설정한다.
 * @param {Object} grdObj GridView Object
 * @param {Object} options JSON형태로 저장된 그리드의 엑셀 다운로드 옵션
 * @hidden N
 * @exception 
 * @example $c.data.setDownloadGridViewOption(grdObj, options);
 */
scwin.setDownloadGridViewOption = function ($p, grdObj, options) {
  if (typeof options === "undefined") {
    options = {
      hiddenVisible: false
    };
  }
  let fileName = options.fileName;
  if ($c.util.isEmpty($p, fileName)) {
    let dataCollectionId = $c.data.getDataCollection($p, grdObj).id;
    if ($c.util.isEmpty($p, dataCollectionId) === false) {
      fileName = dataCollectionId;
    } else {
      fileName = "excel_download";
    }
    if (options.fileType == undefined || options.fileType == "") {
      fileName = fileName + ".xlsx";
    } else {
      fileName = fileName + "." + options.fileType;
    }
    options.fileName = fileName;
  }
  fileName = fileName.toLowerCase();
  if (options.useProvider == true) {
    options.dataProvider = "com.inswave.wrm.provider.ExcelDown";
  }
  if (options.useSplitProvider == true) {
    options.splitProvider = "com.inswave.wrm.provider.ExcelSplitDown";
  }
  if (options.useProvider || options.useSplitProvider) {
    const colCnt = grdObj.getColumnCount();
    let columnsIDArr = new Array();
    for (let i = 0; i < colCnt; i++) {
      let isRemoveCol = false;
      if (typeof options.excludeColumns != "undefined" && options.excludeColumns != null && options.excludeColumns.length > 0) {
        for (let k = 0; k < options.excludeColumns.length; k++) {
          if (grdObj.getColumnID(i) == options.excludeColumns[k]) {
            isRemoveCol = true;
            break;
          }
        }
      }
      if (isRemoveCol) {
        continue;
      }
      columnsIDArr.push(grdObj.getColumnID(i));
    }
    const xmlDoc = WebSquare.xml.parse(options.providerRequestXml, false);
    WebSquare.xml.setValue(xmlDoc, "data/keyMap", columnsIDArr.join(","));
    options.providerRequestXml = WebSquare.xml.serialize(xmlDoc);
    delete options.useProvider;
    delete options.useSplitProvider;
  }

  // options.hiddenVisible=true 설정 시 화면내의 hidden컬럼을 removeColumns에 포함시켜서 엑셀 다운로드를 하지 않도록 한다.
  if (typeof options.hiddenVisible === "undefined" || options.hiddenVisible == false) {
    const grdCnt = grdObj.getColCnt();
    let hiddenColIndex = [];
    for (let idx = 0; idx < grdCnt; idx++) {
      if (!grdObj.getColumnVisible(idx)) {
        hiddenColIndex.push(idx);
      }
    }
    if (hiddenColIndex.length > 0) {
      if (typeof options.removeColumns !== "undefined" && options.removeColumns.length > 0) {
        options.removeColumns = options.removeColumns + "," + hiddenColIndex.join(',');
      } else {
        options.removeColumns = hiddenColIndex.join(',');
      }

      // 중복 요소 제거
      let _removeColumnArr = options.removeColumns.split(",");
      options.removeColumns = _removeColumnArr.reduce(function (a, b) {
        if (a.indexOf(b) < 0) {
          a.push(b);
        }
        return a;
      }, []).join(',');
    }
  }

  // checkedColumnId, checkedData 옵션 처리 (데이터 필터링 후 엑셀 다운로드 기능 수행)
  if ($c.util.isEmpty($p, options.dataHandler) == true && options.checkedData) {
    options.dataHandler = function (gridViewId) {
      return getDataHandlerData($c.util.getComponent($p, gridViewId), options);
    };
  }
  ;
  function getDataHandlerData(grdObj, opts) {
    try {
      const type = parseInt(opts.type, 10); // exceldown 의 down type 설정
      const convertIdxList = opts.convertIndex.split(",") || []; // exceldown시 convertIndex 설정
      const colmId = opts.checkedColumnId || 'chk'; // 대상 컬럼의 id로 기본 값을 'chk'라고 설정
      const colInfo = grdObj.cellInfoHash[grdObj.getColumnID(colmId)]; // 해당 컬럼의 정보
      let arrIdx = [];
      if ("checkbox" == colInfo.options.inputType || "radio" == colInfo.options.inputType || "custom" == colInfo.options.inputType) {
        arrIdx = grdObj.getCheckedIndex(colmId);
      } else {
        const chkData = opts.checkedData || "";
        arrIdx = grdObj.getMatchedIndex(colmId, chkData);
      }
      return type == 0 || type == 1 || type == 2 ? getData(arrIdx, type, grdObj, convertIdxList) : grdObj.dataList.getAllData();
    } catch (ex) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_00067));
      console.error(ex.toString());
      throw ex;
    }
  }
  ;
  function getData(arrIdx, type, grdObj, convertIdxList) {
    let rtnData = [];
    arrIdx.forEach(function (dataIdx) {
      let displayType = type == 0 ? "realData" : "displayData";
      let rowData = grdObj.getRowData(dataIdx, displayType);
      convertIdxList.forEach(function (convertIdx) {
        if (convertIdx != "") {
          displayType = type != 0 ? "displayData" : "realData";
          rowData[convertIdx] = grdObj.getRowData(dataIdx, displayType)[convertIdx];
        }
      });
      rtnData.push(rowData);
    });
    return rtnData.map(function (item) {
      return Object.values(item);
    }).join().split(",");
  }
  ;
};

/**
 * @method
 * @name loadMessage
 * @description 다국어 메시지 데이터 배열을 전체조회 하여 전역객체 $c.msg에 넣는다.
 * @param
 * @hidden N
 * @exception 
 * @example $c.data.loadMessage();
 */
scwin.loadMessage = function ($p) {
  const lang = $c.util.isEmpty($p, $c.win.getLanguage($p)) ? "ko" : $c.win.getLanguage($p);
  const getMessageOption = {
    id: "_sbm_getLanguagePack",
    action: "/message/getAllMessage/" + lang,
    method: "get",
    submitDoneHandler: function (e) {
      WebSquare.WebSquareLang = e.responseJSON.message;
    },
    isProcessMsg: false
  };
  $c.sbm.executeDynamic($p, getMessageOption);
};

/**
 * @method
 * @name initChangeCheckedDc
 * @description 변경 검사 대상 Data Collection을 저장할 객체를 생성한다.
 * @hidden N
 * @exception 
 * @example $c.data.initChangeCheckedDc = function($p);
 */
scwin.initChangeCheckedDc = function ($p) {
  const scwinObj = $c.util.getObject($p, "scwin");
  if (!$c.util.isEmpty($p, $c.data.getParameter($p, "menuInfo"))) {
    scwinObj._changeCheckDcList = [];
  }
};

/**
 * @method
 * @name setChangeCheckedDc
 * @description 데이터가 수정되어있는 경우 창이 닫힐때 창을 닫을 지 여부를 묻는 컨펌창을 호출한다.
 * @param {Object} dcObjArr 창이 닫힐때 수정된 여부를 체크할 데이터컬렉션 객체(데이터 맵또는 데이터 리스트)
 * @returns {Object} topFrame 객체
 * @hidden N
 * @exception 
 * @example $c.win.setChangeCheckedDc([dma_sample, dlt_grdAllData]);
 */
scwin.setChangeCheckedDc = function ($p, dcObjArr) {
  const mainFrameScwin = $c.data.getChangeCheckedMainFrame($p);
  if (!$c.util.isEmpty($p, mainFrameScwin) && $c.util.isEmpty($p, mainFrameScwin._changeCheckDcList)) {
    if ($c.util.isArray($p, dcObjArr)) {
      for (let id in dcObjArr) {
        mainFrameScwin._changeCheckDcList.push(dcObjArr[id].getID());
      }
    } else {
      mainFrameScwin._changeCheckDcList.push(dcObjArr.getID());
    }
  }
};

/**
 * @method
 * @name getChangeCheckedMainFrame
 * @description 변경 검사 대상 Data Collection 정보를 저장하는 화면 메인 프레임을 반환한다.
 * @param {Object} scopeApi WFraqme Scope $p 객체
 * @returns {Object} topFrame topFrame 객체
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.getChangeCheckedMainFrame = function ($p, scopeApi) {
  if (typeof scopeApi == 'object') {
    return scwin.__getChangeCheckedMainFrame(scopeApi);
  }
  return scwin.__getChangeCheckedMainFrame($p);
};

/**
 * @method
 * @name __getChangeCheckedMainFrame
 * @description $p파라미터를 직접 받는 getChangeCheckedMainFrame
 * @param {Object} scopeApi pageFrame Scope $p
 * @returns {Object} 
 * @hidden Y
 * @exception
 * @example
 */
scwin.__getChangeCheckedMainFrame = function (scopeApi) {
  const $p = scopeApi;
  const scwinObj = $c.util.getObject($p, "scwin");
  if (typeof scwinObj._changeCheckDcList !== "undefined") {
    return scwinObj;
  } else if ($p.main().$p.getFrameId() !== $p.getFrameId()) {
    scopeApi = $p.parent().$p;
    return $c.data.getChangeCheckedMainFrame($p, scopeApi);
  } else {
    return null;
  }
};

/**
 * @method
 * @name setCommonCode
 * @description 코드성 데이터와 컴포넌트의 nodeSet(아이템 리스트) 연동 기능을 제공한다.
 * cdgrp별로 JSON객체를 생성하여 array에 담아 첫 번째 파라미터로 넘겨준다.
 * $c.data.setCommonCode 함수에서는 공통 코드 로딩을 위한 Submssion(_sbm_searchCode)을 생성만 한다.
 * Submssion(_sbm_searchCode)의 실행은 config.xml의 pageFrame > postScript에 정의된 $c.win.processCommonData 함수에서 실행한다.
 * @param {Object} codeOptions {"code" : "코드그룹", "compID" : "적용할 컴포넌트명", useLocalCache : "로컬 캐시 사용 여부"}
 * @param {String} codeOptions.code 공통 코드 그룹 코드
 * @param {String} codeOptions.compId 로딩한 공통 코드 데이터를 저장한 DataList와 바인딩할 컴포넌트 아이디
 * @param {Boolean} codeOptions.useLocalCache 로컬 캐시 사용 여부 (true[default] : 공통 코드 로컬 캐시 사용, false : 로컬 캐시에 공통 코드 데이터가 있는 경우 삭제하고 서버에서 공통 코드 데이터를 새로 받아옴
 * @param {requestCallback} callbackFunc 콜백 함수
 * @hidden N
 * @exception 
 * @example const codeOptions = [ { code : "00001", compID : "sbx_Duty" },
                    { code : "00002", compID : "sbx_Postion" },
                    { code : "00021", compID : "sbx_JoinClass" },
                    { code : "00005", compID : "sbx_CommCodePart1, sbx_CommCodePart2"},
                    { code : "00024", compID : "grd_CommCodeSample:JOB_CD", useLocalCache : false} ];
$c.data.setCommonCode(codeOptions);
 */
scwin.setCommonCode = function ($p, codeOptions, callbackFunc) {
  let codeOptionsLen = 0;
  if (codeOptions) {
    codeOptionsLen = codeOptions.length;
  } else {
    console.error("=== $c.setCommonCode Parameter Type Error ===\nex) $c.setCommonCode([{\"code:\":\"04\",\"compID\":\"sbx_Gender\"}],\"scwin.callbackFunction\")\n===================================");
    return;
  }
  let i,
    j,
    codeObj,
    dltId,
    dltIdArr = [],
    paramCode = "",
    compArr,
    compArrLen,
    tmpIdArr,
    submitOpt = [];
  const dataListOption = _getCodeDataListOptions(scwin.COMMON_CODE_INFO.FILED_ARR);
  for (i = 0; i < codeOptionsLen; i++) {
    codeObj = codeOptions[i];
    try {
      dltId = scwin.DATA_PREFIX + codeObj.grpCd;
      if (typeof scwin.commonCodeList[dltId] !== "undefined") {
        delete scwin.commonCodeList[dltId];
        $p.data.remove(dltId);
      }
      if (typeof scwin.commonCodeList[dltId] === "undefined") {
        dltIdArr.push(dltId);
        if (i > 0) {
          paramCode += ",";
        }
        paramCode += codeObj.grpCd;
        dataListOption.id = dltId;
        $p.data.create(dataListOption); // 동일한 id의 DataCollection이 존재할 경우, 삭제 후 재생성함
      } else {
        dataListOption.id = dltId;
        $p.data.create(dataListOption);
        let dataListObj = $p.getComponentById(dataListOption.id);
        dataListObj.setJSON(scwin.commonCodeList[dltId]);
      }
      if (codeObj.compID) {
        compArr = codeObj.compID.replaceAll(" ", "").split(",");
        compArrLen = compArr.length;
        for (j = 0; j < compArrLen; j++) {
          tmpIdArr = compArr[j].split(":");
          if (tmpIdArr.length === 1) {
            const comp = $c.util.getComponent($p, tmpIdArr[0]);
            if (!$c.util.isEmpty($p, comp)) {
              comp.setNodeSet("data:" + dltId, scwin.COMMON_CODE_INFO.LABEL, scwin.COMMON_CODE_INFO.VALUE);
            } else {
              console.warn("[$c.setCommonCode] Component(" + tmpIdArr[0] + ")를 찾을 수 없습니다.");
            }
          } else {
            let gridObj = $c.util.getComponent($p, tmpIdArr[0]);
            if (!$c.util.isEmpty($p, gridObj)) {
              gridObj.setColumnNodeSet(tmpIdArr[1], "data:" + dltId, scwin.COMMON_CODE_INFO.LABEL, scwin.COMMON_CODE_INFO.VALUE);
            } else {
              console.warn("[$c.data.setCommonCode] GridView(" + tmpIdArr[0] + ")를 찾을 수 없습니다.");
            }
          }
        }
      }
      if (codeObj.opt) {
        codeObj.opt.grpCd = codeObj.grpCd;
        submitOpt.push(codeObj.opt);
      }
    } catch (ex) {
      console.error(ex);
    }
  }
  const searchCodeGrpOption = {
    id: "_sbm_searchCode",
    action: "/cm.zz.RetrieveComboCMD.do",
    target: "data:json," + $c.str.serialize($p, dltIdArr),
    isProcessMsg: false
  };
  searchCodeGrpOption.submitDoneHandler = function (e) {
    try {
      //debugger;
      if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
        var comObjArr = "",
          sbmObj,
          rtSubmit,
          rtSubmitObj;
        sbmObj = $p.getComponentById(e.id);
        var rtSubmit = sbmObj.requestData.dma_commonCode.submitOpt;
        var frmObj;

        // if(typeof $p.top().ds_comCd !== "undefined") {
        frmObj = $c.win.getMainFrame($p);
        frmObj.ds_comCd.setJSON(e.responseJSON.GAUCE);
        comObjArr = sbmObj.target.replace("data:json,", "").split(",");
        // } else {
        // frmObj = $p.top().$p.parent();
        // frmObj.ds_comCd.setJSON(e.responseJSON.GAUCE);
        // comObjArr = sbmObj.target.replace("data:json,","").split(",");
        // }
        for (var idx in comObjArr) {
          var dsKey = "",
            rangeStr,
            rangeArr,
            rtSubmitObj,
            upper;
          if (comObjArr[idx]) {
            dsKey = comObjArr[idx].replace(scwin.DATA_PREFIX, "").trim();
            if (rtSubmit !== undefined) {
              rtSubmitObj = JSON.parse(rtSubmit);
              var flag = false;
              for (var key in rtSubmitObj) {
                if (rtSubmitObj[key].grpCd == dsKey) {
                  rangeStr = rtSubmitObj[key].range;
                  upper = rtSubmitObj[key].upperCd;
                  if (upper !== undefined) {
                    scwin.commonCodeList[dsKey] = $c.data.getMatchedJSON($p, frmObj.ds_comCd, [{
                      columnId: "grpCd",
                      operator: "==",
                      value: dsKey
                    }, {
                      columnId: "upperCd",
                      operator: "==",
                      value: upper.trim(),
                      logical: "&&"
                    }]);
                  } else {
                    rangeArr = rangeStr.split(",");
                    if (rangeArr[0] == "1") {
                      var oper = "";
                      var operVals = "";
                      if (rangeArr[1] == undefined) {
                        scwin.commonCodeList[dsKey] = $c.data.getMatchedJSON($p, frmObj.ds_comCd, [{
                          columnId: "grpCd",
                          operator: "==",
                          value: dsKey
                        }]);
                        scwin.commonCodeList[dsKey].sort((a, b) => parseInt(a.sortSeq) - parseInt(b.sortSeq));
                      } else {
                        scwin.commonCodeList[dsKey] = $c.data.getMatchedJSON($p, frmObj.ds_comCd, [{
                          columnId: "grpCd",
                          operator: "==",
                          value: dsKey
                        }, {
                          columnId: "fltrCd1",
                          operator: "==",
                          value: rangeArr[1].trim(),
                          operVal: "&&"
                        }]);
                      }
                    } else if (rangeArr[0] == "2") {
                      scwin.commonCodeList[dsKey] = $c.data.getMatchedJSON($p, frmObj.ds_comCd, [{
                        columnId: "grpCd",
                        operator: "==",
                        value: dsKey
                      }, {
                        columnId: "fltrCd2",
                        operator: "==",
                        value: rangeArr[1].trim(),
                        logical: "&&"
                      }]);
                    } else if (rangeArr[0] == "3") {
                      scwin.commonCodeList[dsKey] = $c.data.getMatchedJSON($p, frmObj.ds_comCd, [{
                        columnId: "grpCd",
                        operator: "==",
                        value: dsKey
                      }, {
                        columnId: "fltrCd3",
                        operator: "==",
                        value: rangeArr[1].trim(),
                        logical: "&&"
                      }]);
                    }
                  }
                  flag = true;
                  break;
                }
              }
              if (!flag) {
                scwin.commonCodeList[dsKey] = frmObj.ds_comCd.getMatchedJSON("grpCd", dsKey);
              }
            } else {
              scwin.commonCodeList[dsKey] = frmObj.ds_comCd.getMatchedJSON("grpCd", dsKey);
            }
            $p.getComponentById(comObjArr[idx]).setJSON(scwin.commonCodeList[dsKey]);
          }
        }
      }
    } catch (e) {
      console.log("##### catch ###" + e);
    }

    // for (let codeGrpDataListId in e.responseJSON.GAUCE) {

    //if (codeGrpDataListId.indexOf(scwin.DATA_PREFIX) > -1) {
    //      scwin.commonCodeList[codeGrpDataListId] = e.responseJSON[codeGrpDataListId];
    //}
    //  }

    if (typeof callbackFunc === "function") {
      callbackFunc();
    }
  };
  if (paramCode !== "") {
    if ($c.util.isEmpty($p, $c.util.getComponent($p, searchCodeGrpOption.id))) {
      $c.sbm.create($p, searchCodeGrpOption);
    } else {
      $p.deleteSubmission(searchCodeGrpOption.id);
      $c.sbm.create($p, searchCodeGrpOption);
    }
    let sbmObj = $c.util.getComponent($p, searchCodeGrpOption.id);
    submitOpt = submitOpt.length > 0 ? JSON.stringify(submitOpt) : undefined;
    const reqData = {
      "dma_commonCode": {
        "grpCd": paramCode,
        "queryId": "retrieveCodeListForCombo",
        "sysCd": "CommonEBC",
        "submitOpt": submitOpt,
        "DATA_PREFIX": scwin.DATA_PREFIX
      }
    };
    sbmObj.setRequestData(reqData);
  } else {
    if (typeof callbackFunc === "function") {
      callbackFunc();
    }
  }

  // dataList를 동적으로 생성하기 위한 옵션 정보를 반환한다.
  function _getCodeDataListOptions(infoArr) {
    const option = {
      "type": "dataList",
      "option": {
        "baseNode": "list",
        "repeatNode": "map"
      },
      "columnInfo": []
    };
    for (let idx in infoArr) {
      option.columnInfo.push({
        "id": infoArr[idx]
      });
    }
    return option;
  }
};

/**
 * @method
 * @name getCommonCodeDataList
 * @description 특정 공통 코드를 저장하는 DataList 객체를 반환한다.
 * 서버에서 전달된 데이터가 아닌 화면 상에서 데이터 가공이 필요한 경우 DataList 객체를 전달 받아서 필터링하거나 데이터를 조작할 수 있다.
 * @param {String} cdGrp 코드그룹
 * @hidden N
 * @exception 
 * @example 
 * const comDataList1 = $c.data.getCommonCodeDataList("00024");
 * comDataList1.setColumnFilter( 
 * 	{type:'regExp', colIndex:'COM_CD', key:/01|02|04|05/gi, condition:'and'}
 * );
 */
scwin.getCommonCodeDataList = function ($p, cdGrp) {
  return $c.util.getComponent($p, scwin.DATA_PREFIX + cdGrp);
};

/**
 * @method
 * @name executeCommonCode
 * @description 공통 코드를 로딩하는 Submission을 실행한다.
 * scwin.onpageload 이벤트에 정의된 $c.data.setCommonCode 함수를 통해서 생성된 공통 코드 조회 Submission은 scwin.ondataload 함수가 실행되기 전에 
 * UI 공통 프레임워크 내에서 자동으로 실행시켜 준다.
 * 하지만, TabControl의 alwaysDraw=false 등의 옵션 적용 등으로 인해서 화면이 로딩된 이후에 어떤 이벤트 시점 이후에 공통 코드를 로딩하려면
 * $c.data.executeCommonCode() 함수를 실행하면 된다.
 * @hidden N
 * @exception 
 * @example 
 * const codeOptions = [ 
 * 	{ code : "00002", compID : "sbx_Postion" },
 *	{ code : "00024", compID : "grd_CommCodeSample:JOB_CD"} ];
 *  $c.data.setCommonCode(codeOptions);
 *  $c.data.executeCommonCode();
 */
scwin.executeCommonCode = function ($p) {
  const sbmSearchCode = $c.util.getComponent($p, "_sbm_searchCode");
  $c.sbm.execute($p, sbmSearchCode);
};

/**
 * @method
 * @name getParameter
 * @description 파라미터를 읽어 온다.
 * @param {String} paramKey 파라미터 키
 * @param {Object} scopeObj scope정보를 가진 객체
 * @param {Object} scopeApi $p를 직접 정의한 경우의 scopeObj 값
 * @returns {Object} parameterValue 파라미터 값
 * @hidden N
 * @exception 
 * @example const code = $c.data.getParameter("code");  // 특정 파라미터 값을 얻어오기
const param = $c.data.getParameter();	   // 전체 파라미터 값을 얻어오기
 */
scwin.getParameter = function ($p, paramKey, scopeObj, scopeApi) {
  if (typeof paramKey != "string" && paramKey != undefined) {
    return scwin.__getParameter(paramKey, scopeObj, scopeApi);
  }
  return scwin.__getParameter($p, paramKey, scopeObj);
};

/**
 * @method
 * @name __getParameter
 * @description 파라미터를 읽어 온다.
 * @param {String} scopeApi 특정 window의 $p 값
 * @param {String} paramKey 파라미터 키
 * @param {String} scopeObj scope Object
 * @returns {Object} parameterValue 파라미터 값
 * @hidden Y
 * @exception 
 */
scwin.__getParameter = function (scopeApi, paramKey, scopeObj) {
  let $p = scopeApi;
  if (!$c.util.isEmpty($p, scopeObj)) {
    $p = scopeObj;
  }
  let paramData = "";
  try {
    paramData = $p.getParameter("paramData");
    if ($c.util.isEmpty($p, paramData) === false && $c.util.isJSON($p, paramData)) {
      if ($c.util.isEmpty($p, paramKey) === false) {
        return paramData[paramKey];
      } else {
        return paramData;
      }
    } else {
      paramData = getUrlParameter("paramData");
      if ($c.util.isEmpty($p, paramData) === false) {
        paramData = $c.util.getJSON($p, WebSquare.text.BASE64Decode(paramData));
        if ($c.util.isEmpty($p, paramKey) === false) {
          return paramData[paramKey];
        } else {
          return paramData;
        }
      }
    }
  } catch (ex) {
    console.error(ex);
    return "";
  }
  return paramData;
  function getUrlParameter(paramKey) {
    let param = [];
    const paramArray = location.search.split(/[\&\?\#]/);
    for (let i = 0; i < paramArray.length; i++) {
      if ($c.util.isEmpty($p, paramArray[i]) === false) {
        const valueIdx = paramArray[i].indexOf("=");
        if (valueIdx > 0) {
          const key = paramArray[i].substring(0, valueIdx);
          const value = paramArray[i].substring(valueIdx + 1);
          if (key === paramKey) {
            return value;
          }
        }
      }
    }
  }
};

/**
 * @method
 * @name getColumnName
 * @description 특정 컴포넌트에 바인딩된 DataList나 DataMap의 컬럼 이름을 반환한다.
 * @param {Object} comObj 컴포넌트 객체
 * @returns {String} 컬럼명 컬럼명인 String
 * @hidden N
 * @exception 
 * @example $c.data.getColumnName(ibx_name);
 */
scwin.getColumnName = function ($p, comObj) {
  try {
    let dataCollection = null;
    if (typeof comObj.getRef === "function") {
      const ref = comObj.getRef();
      const refArray = ref.substring(5).split(".");
      const dataCollectionName = refArray[0];
      const columnId = refArray[1];
      let dataType;
      if (typeof refArray !== "undefined" && refArray.length === 2) {
        dataCollection = comObj.getScopeWindow().$p.getComponentById(dataCollectionName);
        dataType = dataCollection.getObjectType().toLowerCase();
        if (dataType === "datamap") {
          return dataCollection.getName(columnId);
        } else if (dataType === 'datalist') {
          return dataCollection.getColumnName(columnId);
        }
      } else {
        return "";
      }
    }
  } catch (ex) {
    console.error(ex);
  } finally {
    dataCollection = null;
  }
};

/**
 * @method
 * @name getDataCollection
 * @description 특정 컴포넌트에 바인딩된 DataList나 DataMap의 정보를 반환한다.
 * @param {Object} comObj callerObj 컴포넌트 객체
 * @returns {Object} dataCollection 정보
 * @hidden N
 * @exception 
 * @example $c.data.getDataCollection(ibx_applUserId);
 */
scwin.getDataCollection = function ($p, comObj) {
  try {
    if (typeof comObj !== "undefined" && typeof comObj.getRef === "function") {
      if (comObj.getPluginName() === "gridView") {
        return comObj.getDataListInfo();
      } else {
        let ref = comObj.options.ref;
        if (typeof ref !== "undefined" && ref !== "") {
          let refArray = ref.substring(5).split(".");
          if (typeof refArray !== "undefined" && refArray.length === 2) {
            const dataObjInfo = {};
            dataObjInfo.runtimeDataCollectionId = comObj.getScopeWindow().$p.getFrameId() + "_" + refArray[0];
            dataObjInfo.dataColletionId = refArray[0];
            dataObjInfo.columnId = refArray[1];
            return dataObjInfo;
          } else {
            return null;
          }
        } else {
          return null;
        }
      }
    }
  } catch (e) {
    console.error("[$c.data.getDataCollection] Exception :: " + e.message);
  }
};

/**
 * @method
 * @name getMessage
 * @description 공통 메시지 코드에 해당하는 공통 메시지 코드를 반환합니다.
 * @param {String} msgId 메시지 ID , Array 형식인 경우는 첫번째 인덱스가 sysMsgId가 되고 두번째 인덱스부터 치환문자가 됨
 * @hidden N
 * @exception 
 * @example
 * $c.data.getMessage(MSG_CM_INF_001);  // "성공적으로 저장하였습니다"
 */
scwin.getMessage = function ($p, msgId) {
  let message = "";
  if ($c.util.isEmpty($p, msgId) === false) {
    // message = WebSquareLang[msgId];
    message = msgId;
  }
  if ($c.util.isEmpty($p, message) === false) {
    let tmpMessage = message;
    if (arguments.length > 1) {
      for (let i = 1; i < arguments.length; i++) {
        if ($c.util.isEmpty($p, arguments[i]) === false) {
          tmpMessage = tmpMessage.indexOf("%" + (i - 1)) != -1 ? $c.str.replaceAll($p, tmpMessage, "%" + (i - 1), arguments[i]) : tmpMessage;
        }
      }
      return tmpMessage;
    } else {
      return tmpMessage;
    }
  } else {
    return "";
  }
};

/**
 * @method
 * @name isModified
 * @description DataCollection 객체의 변경된 데이터가 있는지 검사한다.
 * @param {Object} dcObjArr DataCollection 또는 배열
 * @returns {Boolean} 검사결과
 * @hidden N
 * @exception 
 * @example if ($c.data.validateGridView(grd_indexPage, valInfo) && $c.data.isModified(dlt_grdAllData)) {
    $c.win.confirm("저장하시겠습니까?", "scwin.saveData");
};
 */
scwin.isModified = function ($p, dcObjArr) {
  let result = false;
  if ($c.util.getObjectType($p, dcObjArr) === "array") {
    for (let idx in dcObjArr) {
      if ($c.util.getObjectType($p, dcObjArr[idx]) === "object") {
        if (isModified(dcObjArr[idx]) === true) {
          result = true;
        }
      }
    }
  } else if ($c.util.getObjectType($p, dcObjArr) === "object") {
    result = isModified(dcObjArr);
  }
  return result;
  function isModified(dcObj) {
    if (typeof dcObj !== "undefined" && dcObj !== null) {
      const modifiedIndex = dcObj.getModifiedIndex();
      if (modifiedIndex.length === 0) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
};

/**
 * @method
 * @name downloadMultipleDataList
 * @description DataList의 데이터를 엑셀 파일로 저장한다.
 * @param {Object}	optionsParam							다운로드 옵션이 저장된 객체
 * @param {Object}	infoArrParam							추가 정보 삽입을 위한 infoArr 배열 객체
 * @param {Object}	options.common							JSON형태로 저장된 dataList의 엑셀 다운로드 옵션
 * @param {String}	options.common.fileName					[default: excel.xls] 다운로드하려는 파일의 이름
 * @param {Boolean} options.common.showProcess				[default: true] 다운로드 시 프로세스 창을 보여줄지 여부
 * @param {String}	options.common.multipleSheet			[default: true] 다운로드시 dataList별 sheet분리 출력유무
 * @param {Object}	options.common.printSet					JSON형태로 저장된 Excel Print관련 설정
 * @param {String}	options.common.printSet.fitToPage		[default: false] 엑셀 프린터 출력시 쪽맞춤 사용 유무
 * @param {String}	options.common.printSet.landScape		[default: false] 엑셀 프린터 출력시 가로 방향 출력 유무
 * @param {String}	options.common.printSet.fitWidth		[default: 1] 엑셀 프린터 출력시 용지너비
 * @param {String}	options.common.printSet.fitHeight		[default: 1] 엑셀 프린터 출력시 용지높이
 * @param {String}	options.common.printSet.scale			[default: 100] 엑셀 프린터 출력시 확대/축소 배율, scale을 사용할 경우 fitToPage는 false로 설정 해야 한다.
 * @param {String}	options.common.printSet.pageSize		[default: A4] 엑셀 프린터 출력시 인쇄 용지 크기 (예: "A3", "A4", "A5", "B4") 단, fitToPage: true 인 경우에만 유효.
 * @param {Array}	options.excelInfo						JSON형태로 저장된 dataList의 옵션 정보
 * @param {String}	options.excelInfo.dataListId			[default: 없음] excel의 sheet에 저장한 DataList의 아이디
 * @param {String}	options.excelInfo.sheetName				[default: sheet] excel의 sheet의 이름
 * @param {String}	options.excelInfo.removeColumns			[default: 없음] 다운로드시 excel에서 삭제하려는 열의 번호(여러 개일 경우 ,로 구분)
 * @param {String}	options.excelInfo.foldColumns			[default: 없음] 다운로드시 excel에서 fold하려는 열의 번호(여러 개일 경우 ,로 구분)
 * @param {Number}	options.excelInfo.startRowIndex			[default: 0] excel파일에서 dataList의 데이터가 시작되는 행의 번호(헤더 포함)
 * @param {Number}	options.excelInfo.startColumnIndex		[default: 0] excel파일에서 dataList의 데이터가 시작되는 열의 번호(헤더 포함)
 * @param {String}	options.excelInfo.headerColor			[default: #33CCCC] excel파일에서 dataList의 header부분의 색
 * @param {String}	options.excelInfo.headerFontName		[default: 없음] excel파일에서 dataList의 header부분의 font name
 * @param {String}	options.excelInfo.pageFrameId			[default: 현재 pageFrame Id] DataList가 위치한 pageFrame Id 정보
 * @param {Array}	options.excelInfo.infoArr				dataList에 대한 내용을 추가로 다른 셀에 표현하는 경우 사용하는 배열
 * @param {Number}	options.excelInfo.infoArr.rowIndex		내용을 표시할 행번호
 * @param {Number}	options.excelInfo.infoArr.colIndex		내용을 표시할 열번호
 * @param {Number}	options.excelInfo.infoArr.rowSpan		병합할 행의 수
 * @param {Number}	options.excelInfo.infoArr.colSpan		병합할 열의 수
 * @param {String}	options.excelInfo.infoArr.text			표시할 내용
 * @param {String}	options.excelInfo.infoArr.textAlign		표시할 내용의 정렬 방법 (left, center, right)
 * @param {String}	options.excelInfo.infoArr.fontSize		font size 설정 ( ex) "20px" )
 * @param {String}	options.excelInfo.infoArr.fontName		font name 설정
 * @param {String}	options.excelInfo.infoArr.color			font color 설정 ( ex) "red" )
 * @param {String}	options.excelInfo.infoArr.fontWeight	font weight 설정 ( ex) "bold" )
 * @param {String}	options.excelInfo.infoArr.drawBorder	cell의 border 지정 ( ex) true )
 * @param {String}	options.excelInfo.infoArr.wordWrap		cell의 줄 바꿈 기능 ( ex) "true" )
 * @hidden N
 * @exception 
 * @example
// id가 a,b,c,d,e인 5개 컬럼이 존재하는 DataList
const options = {
    common: {
        fileName : "excel_data.xlsx",
        showProcess : true,
        multipleSheet : true,
        printSet : {
            landScape : "true",
            fitToPage : "true",
            fitWidth : "1",
            fitHeight : "1",
            scale : "222"
        }
    },
    excelInfo: [
        {
            dataListId : "dlt_data1",
            sheetName : "첫번째 sheet",
            removeColumns : "1,3",
            foldColumns : "2",
            startRowIndex : 3,
            startColumnIndex : 0,
            headerColor : "#DBEEF3",
            bodyColor : "#92CDDC",
            infoArr : [
                {
                    rowIndex : 1, colIndex : 3, rowSpan : 1, colSpan : 2, text : "데이터표시" , textAlign : "center"
                }
            ]
        },
        {
            dataListId : "dlt_data2",
            sheetName : "두번째 sheet",
            removeColumns : "1,3",
            foldColumns : "2",
            startRowIndex : 3,
            startColumnIndex : 0,
            headerColor : "#DBEEF3",
            bodyColor : "#92CDDC",
            infoArr : [
                {
                    rowIndex : 1, colIndex : 3, rowSpan : 1, colSpan : 2, text : "데이터표시" , textAlign : "center"
                }
            ]
        }
    ]
};
$c.data.downloadMultipleDataList(options);
 */
scwin.downloadMultipleDataList = function ($p, optionsParam, infoArrParam) {
  const options = {
    common: {
      fileName: optionsParam.common.fileName || "dataList.xlsx",
      showProcess: optionsParam.common.showProcess || true,
      autoSizeColumn: optionsParam.common.autoSizeColumn || true,
      multipleSheet: optionsParam.common.multipleSheet || true,
      printSet: optionsParam.common.printSet || {}
    },
    excelInfo: []
  };
  if (optionsParam.excelInfo.length > 0) {
    let excelInfoCount = optionsParam.excelInfo.length;
    for (let idx = 0; idx < excelInfoCount; idx++) {
      const pageFrameId = optionsParam.excelInfo[idx].pageFrameId || $p.getFrameId();
      const dataListId = optionsParam.excelInfo[idx].dataListId;
      let dataListObj = null;
      if ($c.util.isEmpty($p, pageFrameId) === false) {
        dataListObj = $p.getComponentById(pageFrameId + "_" + dataListId);
      } else {
        dataListObj = $p.getComponentById(dataListId);
      }
      if (typeof dataListObj === "undefined") {
        console.warn("[$c.data.downloadMultipleDataList] excelInfo.dataListId에 설정된 DataList(" + dataListId + ")를 찾을 수 없습니다.");
        return;
      }
      const excelInfo = {
        dataListId: dataListId,
        sheetName: optionsParam.excelInfo[idx].sheetName || dataListId,
        removeColumns: optionsParam.excelInfo[idx].removeColumns || "",
        foldColumns: optionsParam.excelInfo[idx].foldColumns || "",
        startRowIndex: optionsParam.excelInfo[idx].startRowIndex || 0,
        startColumnIndex: optionsParam.excelInfo[idx].startColumnIndex || 0,
        headerColor: optionsParam.excelInfo[idx].headerColor || "#eeeeee",
        bodyColor: optionsParam.excelInfo[idx].bodyColor || "#FFFFFF",
        wframeId: pageFrameId,
        infoArr: optionsParam.excelInfo[idx].infoArr
      };
      options.excelInfo.push(excelInfo);
    }
  } else {
    console.warn("[$c.data.downloadMultipleDataList] options.excelInfo 정보가 입력되지 않았습니다.");
    return;
  }
  WebSquare.util.multipleDataListDownload(options, infoArrParam);
};

/**
 * @method
 * @name downloadMultipleGridView
 * @description gridView의 데이터를 액셀 다운로드 한다.
 * @param {Object}	optionsParam							다운로드 옵션을 가지고 있는 객체
 * @param {Object}	infoArrParam							추가 정보 삽입을 위한 infoArr 배열 객체
 * @param {Object}	options.common							JSON형태로 저장된 dataList의 엑셀 다운로드 옵션
 * @param {String}	options.common.fileName					[default: excel.xls] 다운로드하려는 파일의 이름
 * @param {Boolean} options.common.showProcess				[default: true] 다운로드 시 프로세스 창을 보여줄지 여부
 * @param {String}	options.common.multipleSheet			[default: true] 다운로드시 dataList별 sheet분리 출력유무
 * @param {Object}	options.common.printSet					JSON형태로 저장된 Excel Print관련 설정
 * @param {String}	options.common.printSet.fitToPage		[default: false] 엑셀 프린터 출력시 쪽맞춤 사용 유무
 * @param {String}	options.common.printSet.landScape		[default: false] 엑셀 프린터 출력시 가로 방향 출력 유무
 * @param {String}	options.common.printSet.fitWidth		[default: 1] 엑셀 프린터 출력시 용지너비
 * @param {String}	options.common.printSet.fitHeight		[default: 1] 엑셀 프린터 출력시 용지높이
 * @param {String}	options.common.printSet.scale			[default: 100] 엑셀 프린터 출력시 확대/축소 배율, scale을 사용할 경우 fitToPage는 false로 설정 해야 한다.
 * @param {String}	options.common.printSet.pageSize		[default: A4] 엑셀 프린터 출력시 인쇄 용지 크기 (예: "A3", "A4", "A5", "B4") 단, fitToPage: true 인 경우에만 유효.
 * @param {Array}	[options.excelInfo]						JSON형태로 저장된 dataList의 옵션 정보
 * @param {String}	options.excelInfo.gridId				[default: 없음] excel의 sheet에 저장한 GridView의 아이디
 * @param {String}	options.excelInfo.sheetName				[default: sheet] excel의 sheet의 이름
 * @param {String}	options.excelInfo.removeColumns			[default: 없음] 다운로드시 excel에서 삭제하려는 열의 번호(여러 개일 경우 ,로 구분)
 * @param {String}	options.excelInfo.foldColumns			[default: 없음] 다운로드시 excel에서 fold하려는 열의 번호(여러 개일 경우 ,로 구분)
 * @param {Number}	options.excelInfo.startRowIndex			[default: 0] excel파일에서 dataList의 데이터가 시작되는 행의 번호(헤더 포함)
 * @param {Number}	options.excelInfo.startColumnIndex		[default: 0] excel파일에서 dataList의 데이터가 시작되는 열의 번호(헤더 포함)
 * @param {String}	options.excelInfo.headerColor			[default: #33CCCC] excel파일에서 dataList의 header부분의 색
 * @param {String}	options.excelInfo.headerFontName		[default: 없음] excel파일에서 dataList의 header부분의 font name
 * @param {String}	options.excelInfo.pageFrameId			[default: 현재 pageFrame Id] DataList가 위치한 pageFrame Id 정보
 * @param {Array}	options.excelInfo.infoArr				dataList에 대한 내용을 추가로 다른 셀에 표현하는 경우 사용하는 배열
 * @param {Number}	options.excelInfo.infoArr.rowIndex		내용을 표시할 행번호
 * @param {Number}	options.excelInfo.infoArr.colIndex		내용을 표시할 열번호
 * @param {Number}	options.excelInfo.infoArr.rowSpan		병합할 행의 수
 * @param {Number}	options.excelInfo.infoArr.colSpan		병합할 열의 수
 * @param {String}	options.excelInfo.infoArr.text			표시할 내용
 * @param {String}	options.excelInfo.infoArr.textAlign		표시할 내용의 정렬 방법 (left, center, right)
 * @param {String}	options.excelInfo.infoArr.fontSize		font size 설정 ( ex) "20px" )
 * @param {String}	options.excelInfo.infoArr.fontName		font name 설정
 * @param {String}	options.excelInfo.infoArr.color			font color 설정 ( ex) "red" )
 * @param {String}	options.excelInfo.infoArr.fontWeight	font weight 설정 ( ex) "bold" )
 * @param {String}	options.excelInfo.infoArr.drawBorder	cell의 border 지정 ( ex) true )
 * @param {String}	options.excelInfo.infoArr.wordWrap		cell의 줄 바꿈 기능 ( ex) "true" )
 * @hidden N
 * @exception 
 * @example 

// id가 a,b,c,d,e인 5개 컬럼이 존재하는 DataList
const options = {
    common: {
        fileName : "excel_data.xlsx",
        showProcess : true,
        multipleSheet : true,
        printSet : {
            landScape : "true",
            fitToPage : "true",
            fitWidth : "1",
            fitHeight : "1",
            scale : "222"
        }
    },
    excelInfo: [
        {
            gridId : "grd_data1",
            sheetName : "첫번째 sheet",
            removeColumns : "1,3",
            foldColumns : "2",
            startRowIndex : 3,
            startColumnIndex : 0,
            headerColor : "#DBEEF3",
            bodyColor : "#92CDDC",
            infoArr : [
                {
                    rowIndex : 1, colIndex : 3, rowSpan : 1, colSpan : 2, text : "데이터표시" , textAlign : "center"
                }
            ]
        },
        {
            gridId : "grd_data2",
            sheetName : "두번째 sheet",
            removeColumns : "1,3",
            foldColumns : "2",
            startRowIndex : 3,
            startColumnIndex : 0,
            headerColor : "#DBEEF3",
            bodyColor : "#92CDDC",
            infoArr : [
                {
                    rowIndex : 1, colIndex : 3, rowSpan : 1, colSpan : 2, text : "데이터표시" , textAlign : "center"
                }
            ]
        }
    ]
};
$c.data.downloadMultipleGridView(options);
 */
scwin.downloadMultipleGridView = function ($p, optionsParam, infoArrParam) {
  //debugger;
  const options = {
    common: {
      fileName: optionsParam.common.fileName || "gridView.xlsx",
      showProcess: optionsParam.common.showProcess || true,
      autoSizeColumn: optionsParam.common.autoSizeColumn || "false",
      multipleSheet: optionsParam.common.multipleSheet == false ? optionsParam.common.multipleSheet : true,
      printSet: optionsParam.common.printSet || {},
      msaName: optionsParam.common.msaName || "",
      useStyle: optionsParam.common.useStyle || "",
      useDataFormat: optionsParam.common.useDataFormat || true,
      useHeader: optionsParam.common.useHeader || ""
    },
    excelInfo: []
  };
  if (optionsParam.excelInfo.length > 0) {
    let excelInfoCount = optionsParam.excelInfo.length;
    for (let idx = 0; idx < excelInfoCount; idx++) {
      const pageFrameId = optionsParam.excelInfo[idx].pageFrameId || $p.getFrameId();
      const gridId = optionsParam.excelInfo[idx].gridId;
      let gridObj = null;
      //if ($c.util.isEmpty(pageFrameId) === false) {
      //    gridObj = $p.getComponentById(pageFrameId + "_" + gridId);
      // } else {
      gridObj = $p.getComponentById(gridId);
      // }

      if (typeof optionsParam.hiddenVisible === "undefined" || optionsParam.hiddenVisible == false) {
        const grdCnt = gridObj.getColCnt();
        let hiddenColIndex = [];
        for (let idx = 0; idx < grdCnt; idx++) {
          if (!gridObj.getColumnVisible(idx)) {
            hiddenColIndex.push(idx);
          }
        }
        if (hiddenColIndex.length > 0) {
          if (typeof optionsParam.excelInfo[idx].removeColumns !== "undefined" && optionsParam.excelInfo[idx].removeColumns.length > 0) {
            optionsParam.excelInfo[idx].removeColumns = optionsParam.excelInfo[idx].removeColumns + "," + hiddenColIndex.join(',');
          } else {
            optionsParam.excelInfo[idx].removeColumns = hiddenColIndex.join(',');
          }

          // 중복 요소 제거
          let _removeColumnArr = optionsParam.excelInfo[idx].removeColumns.split(",");
          optionsParam.excelInfo[idx].removeColumns = _removeColumnArr.reduce(function (a, b) {
            if (a.indexOf(b) < 0) {
              a.push(b);
            }
            return a;
          }, []).join(',');
        }
      }
      if (typeof gridObj === "undefined") {
        console.warn("[$c.data.downloadMultipleDataList] excelInfo.gridId에 설정된 " + gridId + " GridView를 찾을 수 없습니다.");
        return;
      }
      const excelInfo = {
        gridId: gridId,
        sheetName: optionsParam.excelInfo[idx].sheetName || gridId,
        removeColumns: optionsParam.excelInfo[idx].removeColumns || "",
        foldColumns: optionsParam.excelInfo[idx].foldColumns || "",
        startRowIndex: optionsParam.excelInfo[idx].startRowIndex || 0,
        startColumnIndex: optionsParam.excelInfo[idx].startColumnIndex || 0,
        headerColor: optionsParam.excelInfo[idx].headerColor || "#eeeeee",
        bodyColor: optionsParam.excelInfo[idx].bodyColor || "#FFFFFF",
        pageFrameId: pageFrameId,
        bodyFontSize: optionsParam.excelInfo[idx].bodyFontSize || "10",
        infoArr: optionsParam.excelInfo[idx].infoArr
      };
      options.excelInfo.push(excelInfo);
    }
  } else {
    console.warn("[$c.data.downloadMultipleGridView] options.excelInfo 정보가 입력되지 않았습니다.");
    return;
  }
  WebSquare.util.multipleExcelDownload(options, infoArrParam);
};

/**
 * @method
 * @name downloadGridViewExcel
 * @description 설정된 옵션으로 엑셀을 다운로드 한다.
 * @param {Object} grdObj GridView 객체
 * @param {Object} options JSON형태로 저장된 그리드의 엑셀 다운로드 옵션
 * @param {Boolean} options.hiddenVisible			[default: false] GridView 내 Hidden 컬럼을 엑셀 다운로드 시 포함시킬지 여부 (true : 포함, false : 미포함)
 * @param {String} options.fileName					[default: excel.xls] 다운로드하려는 파일의 이름으로 필수 입력 값이다.
 * @param {String} options.sheetName				[default: sheet] excel의 sheet의 이름
 * @param {String} options.type						[default: 0] type이 0인 경우 실제 데이터 1인 경우 눈에 보이는 데이터를 2이면 들어가 있는 data 그대로(filter무시 expression 타입의 셀은 나오지 않음)
 * @param {String} options.removeColumns			[default: 없음] 다운로드시 excel에서 삭제하려는 열의 번호(여러 개일 경우 ,로 구분)
 * @param {String} options.removeHeaderRows			[default: 없음] 다운로드시 excel에서 삭제하려는 Header의 row index(여러 개일 경우 ,로 구분)
 * @param {String} options.foldColumns				[default: 없음] 다운로드시 excel에서 fold하려는 열의 번호(여러 개일 경우 ,로 구분)
 * @param {Number} options.startRowIndex			[default: 0] excel파일에서 그리드의 데이터가 시작되는 행의 번호(헤더 포함)
 * @param {Number} options.startColumnIndex			[default: 0] excel파일에서 그리드의 데이터가 시작되는 열의 번호(헤더 포함)
 * @param {String} options.headerColor				[default: #33CCCC] excel파일에서 그리드의 header부분의 색
 * @param {String} options.headerFontName			[default: 없음] excel파일에서 그리드의 header부분의 font name
 * @param {String} options.headerFontSize			[default: 10] excel파일에서 그리드의 header부분의 font size
 * @param {String} options.headerFontColor			[default: 없음] excel파일에서 그리드의 header부분의 font색
 * @param {String} options.bodyColor				[default: #FFFFFF] excel파일에서 그리드의 body부분의 색
 * @param {String} options.bodyFontName				[default: 없음] excel파일에서 그리드의 body부분의 font name
 * @param {String} options.bodyFontSize				[default: 10] excel파일에서 그리드의 body부분의 font size
 * @param {String} options.bodyFontColor			[default: 없음] excel파일에서 그리드의 body부분의 font색
 * @param {String} options.subTotalColor			[default: #CCFFCC] excel파일에서 그리드의 subtotal부분의 색
 * @param {String} options.subTotalFontName			[default: 없음] excel파일에서 그리드의 subtotal부분의 font name
 * @param {String} options.subTotalFontSize			[default: 10] excel파일에서 그리드의 subtotal부분의 font size
 * @param {String} options.subTotalFontColor		[default: 없음] excel파일에서 그리드의 subtotal부분의 font색
 * @param {String} options.footerColor				[default: #008000] excel파일에서 그리드의 footer부분의 색
 * @param {String} options.footerFontName			[default: 없음] excel파일에서 그리드의 footer부분의 font name
 * @param {String} options.footerFontSize			[default: 10] excel파일에서 그리드의 footer부분의 font size
 * @param {String} options.footerFontColor			[default: 없음] excel파일에서 그리드의 footer부분의 font색
 * @param {String} options.oddRowBackgroundColor	[default: 없음] excel파일에서 그리드 body의 홀수줄의 배경색
 * @param {String} options.evenRowBackgroundColor	[default: 없음] excel파일에서 그리드 body의 짝수줄의 배경색
 * @param {String} options.rowNumHeaderColor		[default: 없음] rowNumVisible 속성이 true인 경우 순서출력 header 영역의 배경색
 * @param {String} options.rowNumHeaderFontName		[default: 없음] rowNumVisible 속성이 true인 경우 순서출력 header 영역의 폰트이름
 * @param {String} options.rowNumHeaderFontSize		[default: 없음] rowNumVisible 속성이 true인 경우 순서출력 header 영역의 폰트크기
 * @param {String} options.rowNumHeaderFontColor	[default: 없음] rowNumVisible 속성이 true인 경우 순서출력 header 영역의 폰트색상
 * @param {String} options.rowNumBodyColor			[default: 없음] rowNumVisible 속성이 true인 경우 순서출력 Body 영역의 배경색
 * @param {String} options.rowNumBodyFontName		[default: 없음] rowNumVisible 속성이 true인 경우 순서출력 Body 영역의 폰트이름
 * @param {String} options.rowNumBodyFontSize		[default: 없음] rowNumVisible 속성이 true인 경우 순서출력 Body 영역의 폰트크기
 * @param {String} options.rowNumBodyFontColor		[default: 없음] rowNumVisible 속성이 true인 경우 순서출력 Body 영역의 폰트색상
 * @param {String} options.rowNumFooterColor		[default: 없음] rowNumVisible 속성이 true인 경우 순서출력 Footer 영역의 배경색
 * @param {String} options.rowNumFooterFontName		[default: 없음] rowNumVisible 속성이 true인 경우 순서출력 Footer 영역의 폰트이름
 * @param {String} options.rowNumFooterFontSize		[default: 없음] rowNumVisible 속성이 true인 경우 순서출력 Footer 영역의 폰트크기
 * @param {String} options.rowNumFooterFontColor	[default: 없음] rowNumVisible 속성이 true인 경우 순서출력 Footer 영역의 폰트색상
 * @param {String} options.rowNumSubTotalColor		[default: 없음] rowNumVisible 속성이 true인 경우 순서출력 Subtotal 영역의 배경색
 * @param {String} options.rowNumSubTotalFontName  	[default: 없음] rowNumVisible 속성이 true인 경우 순서출력 Subtotal 영역의 폰트이름
 * @param {String} options.rowNumSubTotalFontSize  	[default: 없음] rowNumVisible 속성이 true인 경우 순서출력 Subtotal 영역의 폰트크기
 * @param {String} options.rowNumSubTotalFontColor 	[default: 없음] rowNumVisible 속성이 true인 경우 순서출력 Subtotal 영역의 폰트색상
 * @param {String} options.rowNumHeaderValue		[default: 없음] rowNumVisible 속성이 true인 경우 순서출력 Header 영역의 출력값
 * @param {String} options.rowNumVisible			[default: false] 순서출력 유무
 * @param {Boolean} options.showProcess				[default: true] 다운로드 시 프로세스 창을 보여줄지 여부
 * @param {Boolean} options.massStorage				[default: true] 대용량 다운로드 여부 (default는 true 이 옵션을 true로 하고 showConfirm을 false로 한 경우에 IE에서 신뢰할만한 사이트를 체크하는 옵션이 뜬다.)
 * @param {Boolean} options.numberToText			[default: false] numberExtraction="true"이고 dataType="number"로 설정된 열의 데이터를 Excel 파일로 다운로드할 때 콤마 등 포맷에 포함된 기호를 유지.
 * @param {Boolean} options.showConfirm				[default: false] 다운로드 확인창을 띄울지 여부(옵션을 킨 경우 advancedExcelDownload를 호출후 사용자가 window의 버튼을 한번더 클릭해야 한다. massStorage는 자동으로 true가 된다)
 * @param {String} options.dataProvider				[default: 없음] 대량데이터 처리 및 사용자 데이터를 가공할 수 있는 Provider Package
 * @param {String} options.splitProvider			[default: 없음] 대량데이터 처리를 위해 데이터를 분할해서 처리할 수 있는 Provider Package
 * @param {String} options.providerRequestXml		[default: 없음] Provider 내부에서 사용할 XML 문자열
 * @param {String} options.userDataXml				[default: 없음] 사용자가 서버모듈 개발 시 필요한 데이터를 전송 할 수 있는 변수
 * @param {Boolean} options.bodyWordwrap			[default: false] 다운로드시 body의 줄 바꿈 기능
 * @param {Boolean} options.subtotalWordwrap		[default: false] 다운로드시 subtotal의 줄 바꿈 기능
 * @param {Boolean} options.footerWordwrap			[default: false] 다운로드시 footer의 줄 바꿈 기능
 * @param {String} options.useEuroLocale			[default: false] 다운로드시 유로화 처리 기능(,와 .이 반대인 경우처리)
 * @param {String} options.useHeader				[default: true] 다운로드시 Header를 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력)
 * @param {String} options.useSubTotal				[default: false] 다운로드시 SubTotal을 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력), expression을 지정한 경우 avg,sum,min,max,targetColValue,숫자를 지원 함.
 * @param {String} options.useFooter				[default: true] 다운로드시 Footer를 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력)
 * @param {String} options.useHeaderCheckBoxLabel	[default: false] 다운로드시 header가 checkbox인 경우 checked 값 대신 label을 출력 할지 여부( "true"인경우 header column value 출력, "false"인경우 checked값 출력)
 * @param {String} options.separator				[default: ,] 다운로드시 서버로 데이터 전송할때, 데이터를 구분짓는 구분자, default는 comma(,)
 * @param {Number} options.subTotalScale			[default: -1] 다운로드시 subTotal 평균계산시 소수점 자리수를 지정
 * @param {String} options.subTotalRoundingMode		[default: 없음] 다운로드시 subTotal 평균계산시 Round를 지정 한다. ("CEILING","FLOOR","HALF_UP")
 * @param {String} options.useStyle					[default: false] 다운로드시 css를 제외한, style을 excel에도 적용할 지 여부 (배경색,폰트)
 * @param {String} options.freezePane				[default: ""] 틀고정을 위한 좌표값 및 좌표값의 오픈셋 ( ex) freezePane="3,4" X축 3, Y축 4에서 틀고정, freezePane="0,1,0,5" X축 0, Y축 1에서 X축으로 0, Y축으로 5로 틀공정 )
 * @param {String} options.autoSizeColumn			[default: false] 너비자동맞춤 설정 유무
 * @param {String} options.displayGridlines			[default: false] 엑셀 전체 셀의 눈금선 제거 유무
 * @param {String} options.colMerge					[default: false] colMerge된 컬럼을 Merge해서 출력 할 지 여부
 * @param {String} options.colMergeTextAlign		[default: center] colMerge된 컬럼의 textAlign설정 (bottom, center, top 설정)
 * @param {String} options.mergeCell				[default: false] gridView mergeCell API로 cell 머지시, excel에도 동일하게 머지되어 다운로드 할지 여부
 * @param {String} options.useDataFormat			[default: 없음] "true"인 경우 dataType에 따라 Excel 파일에 표시 형식을 출력. dataType="text"인 셀은 Excel의 표시형식에 '텍스트' 출력, dataType="number" 혹은 "bigDecimal" 셀은 "숫자" 출력.
 * @param {String} options.indent					[default: 없음] 그리드 dataType이 drilldown인 경우, indent 표시를 위한 공백 삽입 개수, default값은 0
 * @param {String} options.columnMove				[default: false] 그리드 컬럼이동시 이동된 상태로 다운로드 유무 ( "true"인경우 컬럼이동 순서대로 출력 )
 * @param {String} options.columnOrder				[default: 없음] 엑셀 다운로드시 다운로드되는 컬럼 순서를 지정 할 수 있는 속성 ( ex) "0,3,2,1"로 지정시 지정한 순서로 다운로드된다 )
 * @param {String} options.columnMoveWithFooter		[default: 없음] 그리드 컬럼이동시 Footer영역이 이동된 상태로 다운로드 유무
 * @param {String} options.optionParam				[default: 없음] DRM 연계시 사용자 정의 class에 HashMap 인자로 전달할 값. key는 "optionParam"으로 참조한다.
 * @param {String} options.rowHeight				[default: 없음] 엑셀 파일로 다운로드 할 때 엑셀의 셀 높이. (단위: pixel)
 * @param {String} options.pwd						[default: 없음] 엑셀 파일로 다운로드할 때 비밀번호를 설정. 사용 조건: (1) 비밀번호는 BASE64로 인코딩후 전송해야 함. (2) websquare.xml에 <encrypt tempDir>을 설정해야 함. (3) POI 3.10으로 업그레이드 필요.
 * @param {String} options.maxCellCount				[default: 없음] 엑셀 다운로드를 제한할 셀 개수 ( ex) 1000 설정시 grid의 셀 개수가 1000개를 넘어가면 서버로 요청을 보내지 않는다. )
 * @param {String} options.maxRowCount			 	[default: 없음] 엑셀 다운로드를 제한할 행 개수 ( ex) 1000 설정시 grid의 행 개수가 1000개를 넘어가면 서버로 요청을 보내지 않는다. )
 * @param {String} options.headerAutoFilter			[default: false] Header에 filter를 적용할지 여부
 * @param {String} options.filterRowIndex			[default: -1] filter를 적용할 header의 row Index
 * @param {Object} options.printSet					JSON형태로 저장된 Excel Print관련 설정
 * @param {String} options.printSet.fitToPage		[default: false] 엑셀 프린터 출력시 쪽맞춤 사용 유무
 * @param {String} options.printSet.landScape		[default: false] 엑셀 프린터 출력시 가로 방향 출력 유무
 * @param {String} options.printSet.fitWidth		[default: 1] 엑셀 프린터 출력시 용지너비
 * @param {String} options.printSet.fitHeight		[default: 1] 엑셀 프린터 출력시 용지높이
 * @param {String} options.printSet.scale			[default: 100] 엑셀 프린터 출력시 확대/축소 배율, scale을 사용할 경우 fitToPage는 false로 설정 해야 한다.
 * @param {String} options.printSet.pageSize		[default: A4] 엑셀 프린터 출력시 인쇄 용지 크기 (예: "A3", "A4", "A5", "B4") 단, fitToPage: true 인 경우에만 유효.
 * @param {Number} options.timeout					[default: 없음] 요청 최대 대기시간. millisecond 단위. timeout까지 응답이 오지 않을 시 다운로드를 fail 처리한다.
 * @param {Number} options.checkInterval			[default: 1000] 응답 확인 간격. millisecond 단위. 지정된 주기마다 응답을 확인한다.
 * @param {Function} options.onSuccessCallback		[default: 없음] 요청 성공 시 불리는 callback 함수.
 * @param {Function} options.onFailureCallback		[default: 없음] 요청 실패 시 불리는 callback 함수.
 *
 * @param {Array} infoArr						subTotalFontName 그리드에 대한 내용을 추가로 다른 셀에 표현하는 경우 사용하는 배열
 * @param {Number} infoArr.rowIndex				내용을 표시할 행번호
 * @param {Number} infoArr.colIndex				내용을 표시할 열번호
 * @param {Number} infoArr.rowSpan				병합할 행의 수
 * @param {Number} infoArr.colSpan				병합할 열의 수
 * @param {String} infoArr.text					표시할 내용
 * @param {String} infoArr.textAlign			표시할 내용의 정렬 방법 (left, center, right)
 * @param {String} infoArr.fontSize				font size 설정 ( ex) "20px" )
 * @param {String} infoArr.fontName				font name 설정
 * @param {String} infoArr.color				font color 설정 ( ex) "red" )
 * @param {String} infoArr.fontWeight			font weight 설정 ( ex) "bold" )
 * @param {String} infoArr.drawBorder			cell의 border 지정 ( ex) true )
 * @param {String} infoArr.borderColor			cell의 border color를 지정 ( ex) "#FF0000", "red" )
 * @param {String} infoArr.borderWidth			cell의 border width 지정 ( "thin", "medium", "thick" )
 * @param {String} infoArr.wordWrap				cell의 줄 바꿈 기능 ( ex) "true" )
 * @param {String} infoArr.bgColor				cell의 배경 color 설정 ( ex) "red" )
 * @hidden N
 * @return {file} <b>Excel file</b>
 * @exception 
 * @example 
const gridId = "grd_advancedExcel";
const infoArr = [];
const options = {
   fileName : "downLoadExcel.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
};
$c.data.downloadGridViewExcel(grdObj, options, infoArr);
 */
scwin.downloadGridViewExcel = function ($p, grdObj, options, infoArr) {
  if ($c.util.isEmpty($p, options)) {
    options = {};
  }
  if (typeof infoArr === "undefined") {
    infoArr = [];
  }
  if (typeof options.sheetName !== "undefined") {
    let sheetNm = options.sheetName;
    options.sheetName = sheetNm.replace(/\//g, "_");
    if (sheetNm.length > 31) {
      $c.win.alert($p, "Excel-SheetName 길이가 31 이상이 될 수 없습니다.");
      return;
    }
  }
  if (typeof options.fileName !== "undefined") {
    let fnObj = options.fileName.split(".");
    if (fnObj.length == 1) {
      options.fileName = options.fileName + ".xlsx";
    } else if (fnObj[1] == "xls") {
      options.fileName = options.fileName.replace(/.xls/g, ".xlsx");
    }
  }
  const opts = {
    fileName: options.fileName || "excel.xlsx",
    //String, [defalut: excel.xlsx] 다운로드하려는 파일의 이름으로 필수 입력 값이다.
    sheetName: options.sheetName || "sheet",
    //String, [defalut: sheet] excel의 sheet의 이름
    type: options.type || "1",
    //String, [defalut: 0] type이 0인 경우 실제 데이터 1인 경우 눈에 보이는 데이터를  2이면 들어가 있는 data 그대로(filter무시 expression 타입의 셀은 나오지 않음)
    removeColumns: options.removeColumns || "",
    //String, [defalut: 없음] 다운로드시 excel에서 삭제하려는 열의 번호(여러 개일 경우 ,로 구분)
    convertIndex: options.convertIndex || "",
    // [default: 없음] type이 "0" 또는 "1"인 경우, 특정 컬럼만 type이 "1" 또는 "0"인 데이터로 다운로드. type="1"인 상태에서 convertIndex="0,2"인 경우, index가 0,2인 컬럼은 컬름은 type="1"로 다운로드.
    removeHeaderRows: options.removeHeaderRows || "",
    //String, [defalut: 없음]	다운로드시 excel에서 삭제하려는 Header의 row index(여러 개일 경우 ,로 구분)
    foldColumns: options.foldColumns || "",
    //String, [defalut: 없음] 다운로드시 excel에서 fold하려는 열의 번호(여러 개일 경우 ,로 구분)
    useHeaderCheckBoxLabel: options.useHeaderCheckBoxLabel || "true",
    // String, [default: false] 다운로드시 header가 checkbox인 경우 checked 값 대신 label을 출력 할지 여부 ("true"는 value를 출력, "false"는 checked 값 출력.)
    startRowIndex: options.startRowIndex || 0,
    //Number, excel파일에서 그리드의 데이터가 시작되는 행의 번호(헤더 포함)
    startColumnIndex: options.startColumnIndex || 0,
    //Number, excel파일에서 그리드의 데이터가 시작되는 열의 번호(헤더 포함)
    headerColor: options.headerColor || "#eeeeee",
    //String, excel파일에서 그리드의 header부분의 색

    headerFontName: options.headerFontName || "",
    //String, [defalut: 없음] excel파일에서 그리드의 header부분의 font name
    headerFontSize: options.headerFontSize || "9",
    //String, excel파일에서 그리드의 header부분의 font size
    headerFontColor: options.headerFontColor || "",
    //String, excel파일에서 그리드의 header부분의 font색
    bodyColor: options.bodyColor || "#FFFFFF",
    //String, excel파일에서 그리드의 body부분의 색
    bodyFontName: options.bodyFontName || "",
    //String, [defalut: 없음] excel파일에서 그리드의 body부분의 font name
    bodyFontSize: options.bodyFontSize || "10",
    //String, excel파일에서 그리드의 body부분의 font size
    bodyFontColor: options.bodyFontColor || "",
    //String, excel파일에서 그리드의 body부분의 font색
    subTotalColor: options.subTotalColor || "#d9e3ef",
    //String, [defalut: #CCFFCC] excel파일에서 그리드의 subtotal부분의 색
    subTotalFontName: options.subTotalFontName || "",
    //String, [defalut: 없음] excel파일에서 그리드의 subtotal부분의 font name
    subTotalFontSize: options.subTotalFontSize || "10",
    //String, [defalut: 10] excel파일에서 그리드의 subtotal부분의 font size
    subTotalFontColor: options.subTotalFontColor || "",
    //String, [defalut: 없음] excel파일에서 그리드의 subtotal부분의 font색
    footerColor: options.footerColor || "#e3fbf2",
    //String, [defalut: #008000] excel파일에서 그리드의 footer부분의 색
    footerFontName: options.footerFontName || "",
    //String, [defalut: 없음] excel파일에서 그리드의 footer부분의 font name
    footerFontSize: options.footerFontSize || "10",
    //String, [defalut: 10] excel파일에서 그리드의 footer부분의 font size
    footerFontColor: options.footerFontColor || "",
    //String, [defalut: 없음] excel파일에서 그리드의 footer부분의 font색
    oddRowBackgroundColor: options.oddRowBackgroundColor || "#ffffff",
    //String, excel파일에서 그리드 body의 홀수줄의 배경색
    evenRowBackgroundColor: options.evenRowBackgroundColor || "#F8FFF8",
    //String, [defalut: 없음] excel파일에서 그리드 body의 짝수줄의 배경색
    rowNumHeaderColor: options.rowNumHeaderColor || "",
    //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 header 영역의 배경색
    rowNumHeaderFontName: options.rowNumHeaderFontName || "",
    //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 header 영역의 폰트이름
    rowNumHeaderFontSize: options.rowNumHeaderFontSize || "",
    //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 header 영역의 폰트크기
    rowNumHeaderFontColor: options.rowNumHeaderFontColor || "",
    //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 header 영역의 폰트색상
    rowNumBodyColor: options.rowNumBodyColor || "",
    //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Body 영역의 배경색
    rowNumBodyFontName: options.rowNumBodyFontName || "",
    //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Body 영역의 폰트이름
    rowNumBodyFontSize: options.rowNumBodyFontSize || "",
    //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Body 영역의 폰트크기
    rowNumBodyFontColor: options.rowNumBodyFontColor || "",
    //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Body 영역의 폰트색상
    rowNumFooterColor: options.rowNumFooterColor || "",
    //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Footer 영역의 배경색
    rowNumFooterFontName: options.rowNumFooterFontName || "",
    //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Footer 영역의 폰트이름
    rowNumFooterFontSize: options.rowNumFooterFontSize || "",
    //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Footer 영역의 폰트크기
    rowNumFooterFontColor: options.rowNumFooterFontColor || "",
    //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Footer 영역의 폰트색상
    rowNumSubTotalColor: options.rowNumSubTotalColor || "",
    //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Subtotal 영역의 배경색
    rowNumSubTotalFontName: options.rowNumSubTotalFontName || "",
    //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Subtotal 영역의 폰트이름
    rowNumSubTotalFontSize: options.rowNumSubTotalFontSize || "",
    //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Subtotal 영역의 폰트크기
    rowNumSubTotalFontColor: options.rowNumSubTotalFontColor || "",
    //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Subtotal 영역의 폰트색상
    rowNumHeaderValue: options.rowNumHeaderValue || "",
    //String, [defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Header 영역의 출력값
    rowNumVisible: options.rowNumVisible || "false",
    //String, [defalut: false] 순서출력 유무
    showProcess: WebSquare.util.getBoolean(options.showProcess) || true,
    //Boolean, [defalut: true] 다운로드 시 프로세스 창을 보여줄지 여부
    massStorage: WebSquare.util.getBoolean(options.massStorage) || true,
    //Boolean, [defalut: true] 대용량 다운로드 여부 (default는 true 이 옵션을 true로 하고 showConfirm을 false로 한 경우에 IE에서 신뢰할만한 사이트를 체크하는 옵션이 뜬다.)
    showConfirm: WebSquare.util.getBoolean(options.showConfirm) || false,
    //Boolean, [defalut: false] 다운로드 확인창을 띄울지 여부(옵션을 킨 경우 advancedExcelDownload를 호출후 사용자가 window의 버튼을 한번더 클릭해야 한다. massStorage는 자동으로 true가 된다)
    useProvider: options.useProvider || false,
    //boolean, Provider 사용 여부 설정
    useSplitProvider: options.useSplitProvider || false,
    // boolean, split Provider 사용 여부 설정
    dataProvider: options.dataProvider || "",
    // String, ExcelHeaderDown 설정을 위한 속성
    providerRequestXml: options.providerRequestXml || "",
    //String, [defalut: 없음] Provider 내부에서 사용할 XML 문자열
    userDataXml: options.userDataXml || "",
    //String, [defalut: 없음] 사용자가 서버모듈 개발 시 필요한 데이터를 전송 할 수 있는 변수
    bodyWordwrap: WebSquare.util.getBoolean(options.bodyWordwrap) || true,
    //Boolean, [defalut: false] 다운로드시 바디의 줄 바꿈 기능
    useEuroLocale: options.useEuroLocale || "false",
    //String, [defalut: false] 다운로드시 유로화 처리 기능(,와 .이 반대인 경우처리)
    useHeader: options.useHeader || "true",
    //String, [defalut: true] 다운로드시 Header를 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력)
    useSubTotal: options.useSubTotal || "true",
    //String, [defalut: false] 다운로드시 SubTotal을 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력), expression을 지정한 경우 avg,sum,min,max,targetColValue,숫자를 지원 함.
    useSubTotalData: options.useSubTotalData || "true",
    //<String:N> [default: 없음] 기본은 서버에서 계산된 결과를 출력하지만 useSubTotalData="true"시 브라우저에 출력된 subTotal 데이터를 출력함.
    useFooter: options.useFooter || "true",
    //String, [defalut: true] 다운로드시 Footer를 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력)
    separator: options.separator || ",",
    //String, [defalut: ,] 다운로드시 서버로 데이터 전송할때, 데이터를 구분짓는 구분자, default는 comma(,)
    subTotalScale: options.subTotalScale || -1,
    //Number, [defalut: -1] 다운로드시 subTotal 평균계산시 소수점 자리수를 지정
    subTotalRoundingMode: options.subTotalRoundingMode || "",
    //String, [defalut: 없음] 다운로드시 subTotal 평균계산시 Round를 지정 한다. ("CEILING","FLOOR","HALF_UP")
    useStyle: options.useStyle || "true",
    //String, [defalut: false] 다운로드시 css를 제외한, style을 excel에도 적용할 지 여부 (배경색,폰트)
    useClass: options.useClass || "true",
    //String, [defalut: false] 다운로드시 css 
    freezePane: options.freezePane || "",
    //String, [defalut: ""] 틀고정을 위한 좌표값 및 좌표값의 오픈셋 ( ex) freezePane="3,4" X축 3, Y축 4에서 틀고정, freezePane="0,1,0,5" X축 0, Y축 1에서 X축으로 0, Y축으로 5로 틀공정  )
    autoSizeColumn: options.autoSizeColumn || "false",
    //String, [defalut: false] 너비자동맞춤 설정 유무 - 2016.08.18 옵션 설정을 true로 변경
    displayGridlines: options.displayGridlines || "",
    //String, [defalut: false] 엑셀 전체 셀의 눈금선 제거 유무
    colMerge: options.colMerge || "",
    //String, [defalut: false] colMerge된 컬럼을 Merge해서 출력 할 지 여부
    colMergeTextAlign: options.colMergeTextAlign || "center",
    //String, colMergeTextAlign
    mergeCell: options.mergeCell || "",
    useDataFormat: options.useDataFormat || "true",
    //String, [defalut: 없음] 그리드 dataType이 text인 경우, 엑셀의 표시형식 '텍스트' 출력 유무( "true"인 경우 표시형식 텍스트, "false"인 경우 표시형식 일반 출력)
    indent: options.indent || "",
    //String, [defalut: 없음] 그리드 dataType이 drilldown인 경우, indent 표시를 위한 공백 삽입 개수, default값은 0
    columnMove: options.columnMove || "true",
    //String, [defalut: false] 그리드 컬럼이동시 이동된 상태로 다운로드 유무 ( "true"인경우 컬럼이동 순서대로 출력 )
    columnOrder: options.columnOrder || "",
    //String, [defalut: 없음] 엑셀 다운로드시 다운로드되는 컬럼 순서를 지정 할 수 있는 속성 ( ex) "0,3,2,1"로 지정시 지정한 순서로 다운로드된다 )
    fitToPage: options.fitToPage || "false",
    //String, [defalut: false] 엑셀 프린터 출력시 쪽맞춤 사용 유무
    landScape: options.landScape || "false",
    //String, [defalut: false] 엑셀 프린터 출력시 가로 방향 출력 유무
    fitWidth: options.fitWidth || "1",
    //String, [defalut: 1] 엑셀 프린터 출력시 용지너비
    fitHeight: options.fitHeight || "1",
    //String, [defalut: 1] 엑셀 프린터 출력시 용지높이
    scale: options.scale || "100",
    //String, [defalut: 100] 엑셀 프린터 출력시 확대/축소 배율, scale을 사용할 경우 fitToPage는 false로 설정 해야 한다.
    pageSize: options.pageSize || "A4",
    //String, [defalut: A4] 엑셀 프린터 출력시 인쇄용지 설정 ( ex) "A3", "A4", "A5", "B4" )
    checkedData: options.checkedData || false,
    // check 되어있는 데이터만 내려받을것인가?
    dataHandler: options.dataHandler || "",
    // [default:없음] DataHandler 함수 정의
    checkedColumnId: options.checkedColumnId || "",
    // check를 확인하려는 대상의 컬럼 id default:chk 
    hiddenVisible: options.hiddenVisible || false,
    decimal: options.decimal || "",
    columnMoveWithFooter: options.useFooter == "false" ? "false" : options.columnMoveWithFooter || "true",
    columnMoveWithSubTotal: options.useSubTotal == "false" ? "false" : options.columnMoveWithSubtotal || "true",
    useSubTotalColumnClass: options.useSubTotalColumnClass || "",
    // subtotalStyle class 적용
    onSuccessCallback: options.onSuccessCallback || function (e) {},
    onFailureCallback: function (e) {}
  };

  //infoArr 처리
  // colIndex, rowIndex, rowSpan, colSpan의 값이 JSON에선 String으로 처리되기 때문에 Number로 형변환.
  if (infoArr != undefined && infoArr.length > 0) {
    infoArr[0].rowIndex = Number(infoArr[0].rowIndex) || 0; // Number [ default : 0 ] 
    infoArr[0].colIndex = Number(infoArr[0].colIndex) || 0; // Number [ default : 0 ] 
    infoArr[0].rowSpan = Number(infoArr[0].rowSpan) || 0; // Number [ default : 0 ] 
    infoArr[0].colSpan = Number(infoArr[0].colSpan) || 0; // Number [ default : 0 ] 
  }
  $c.data.setDownloadGridViewOption($p, grdObj, opts);
  grdObj.advancedExcelDownload(opts, infoArr);
};

/**
 * @method
 * @name downloadGridViewCSV
 * @description 설정된 옵션으로 CSV파일을 다운로드 한다.
 * @param {Object} grdObj GridView Object
 * @param {Object} options 					JSON형태로 저장된 그리드의 엑셀 다운로드 옵션
 * @param {String} options.fileName			[default: csvfile.csv] 엑셀파일 선택 대화상자가 나타날 때 기본으로 지정 될 파일 이름
 * @param {String} options.type				[default: 1, 0] Grid 저장 형태 (0이면 데이터 형태,1이면 표시 방식)
 * @param {String} options.delim			[default: ';'] CSV 파일에서 데이터를 구분할 구분자
 * @param {String} options.removeColumns	[default: 없음] 저장 하지 않을 columns index, 여러컬럼인 경우 콤마(,)로 구분해서 정의 한다.
 * @param {String} options.header			[default: 1, 0] 헤더의 저장 여부 (0 : 저장 하지 않음, 1 : 저장)
 * @param {Number} options.hidden			[default: 0, 1] Grid의 숨겨진 Column에 대한 저장 여부(0이면 저장 하지 않음,1이면 저장)
 * @param {String} options.checkButton		[default: 1, 0] Grid의 Control(Check, Radio, Button) Column에 대해 히든 여부 (0이면 control Coliumn히든,1이면 보여줌)
 * @param {Array} options.saveList			[default: 없음] hidden에 관계없이 최우선순위로 저장할 column id들의 array
 * @param {String} options.columnMove		[default: false] 그리드 컬럼이동시 이동된 상태로 다운로드 유무 ( "true"인경우 컬럼이동 순서대로 출력 )
 * @param {String} options.columnOrder		[default: 없음] csv 다운로드시 다운로드되는 컬럼 순서를 지정 할 수 있는 속성 ( ex) "0,3,2,1"로 지정시 지정한 순서로 다운로드된다 )
 * @param {String} options.spanAll			[default: false] drilldown gridView인 경우 전체목록을 펼쳐서 다운로드 할 수 있는 속성. (true이면 전체출력, false면 보여지는 목록만 출력)
 * @param {String} options.aposPrefixOnNum	[default: 0, 1] dataType이 number이고 length가 12자리이상인 경우 '(apos)를 붙일지 여부 (0 이면 apos를 붙이지않음, 1이면 붙임)
 * @param {String} options.ignoreSpan		[default: 0, 1] span되어 있는 경우 span을 무시하고 데이터를 채울지 여부 (0이면 저장하지 않음, 1이면 저장)
 * @param {String} options.removeQuotation	[default: 0, 1] value에 ", ' 가 들어있는 경우 ", '를 지울지 여부 (0이면 지원지 않음, 1이면 지움)
 * @param {String} options.removeNewLine	[default: 1, 0] value내에 \r\n이 있을 경우 삭제유무 (0이면 지원지 않음, 1이면 지움)
 * @param {String} options.optionParam		[default: 없음] DRM 연계시 사용자 정의 class에 HashMap 인자로 전달할 값. key는 "optionParam"으로 참조한다.
 * @hidden N
 * @exception 
 * @example 
 * const gridId = "grd_AdvancedExcel";
const options = {
    fileName : "downLoadCSV.csv" //[default : excel.csv] options.fileName 값이 없을 경우 default값 세팅
};
$c.data.downloadGridViewCSV(grdObj, options);
//return 예시) 엑셀 파일 다운로드
 */
scwin.downloadGridViewCSV = function ($p, grdObj, options) {
  if ($c.util.isEmpty($p, options)) {
    options = {};
  }
  $c.data.setDownloadGridViewOption($p, grdObj, options);
  const opts = {
    fileName: options.fileName || "excel.csv",
    //[default: excel.csv] 저장 될 파일 이름
    type: options.type || "1",
    //[default: 1] Grid 저장 형태 (0이면 데이터 형태,1이면 표시 방식)
    delim: options.delim || ",",
    //[default: ,] CSV 파일에서 데이터를 구분할 구분자
    removeColumns: options.removeColumns || "",
    //[default: 없음] 저장 하지 않을 columns index, 여러컬럼인 경우 콤마(,)로 구분해서 정의 한다.
    header: options.header || "1",
    //[default: 1, 0] [default: 1, 0] 헤더의 존재 여부 (0 : 헤더 행의 수 무시하고 전부 업로드, 1 : 헤더 행의 수 만큼 건너 뜀)
    hidden: options.hidden || 0,
    //[defalut: 0] Grid의 숨겨진 Column에 대한 저장 여부(0이면 저장 하지 않음,1이면 저장)
    checkButton: options.checkButton || "1",
    //[default: 1] Grid의 Control(Check, Radio, Button) Column에 대해 히든 여부 (0이면 control Column히든,1이면 보여줌)
    removeNewLine: options.removeNewLine || "1",
    //값에 \r\n이 있을 경우 삭제 유무 (0 : 안 지움, 1 : 지움)
    removeQuotation: options.removeQuotation || "0",
    //default: 0, 1] 값에 ", ' 가 들어있는 경우 ", '를 지울지 여부 (0 : 안 지움, 1 : 지움)
    columnMove: options.columnMove || "false",
    //컬럼 이동된 상태로 다운로드 유무 (false : 이동되지 않은 상태로 출력, true : 이동된 순서대로 출력 )
    saveList: options.saveList || "" //[default: 없음] hidden에 관계없이 저장할 column id들의 array
  };
  grdObj.saveCSV(opts);
};

/**
 * @method
 * @name uploadGridViewExcel
 * @description 엑셀 xls, xlsx 업로드
 * @param {Object} grdObj gridView 객체
 * @param {Object} options upload 옵션 정보를 가진 객체
 * @param {String} options.type					[default: 0] 1이면 엑셀 파일이 그리드의 보이는 결과로 만들어져있을때 0이면 엑셀 파일이 그리드의 실제 데이터로 구성되어있을때
 * @param {Number} options.sheetNo				[default: 0] excel파일에서 그리드의 데이터가 있는 sheet번호
 * @param {Number} options.startRowIndex		[default: 0] excel파일에서 그리드의 데이터가 시작되는 행의 번호(헤더 포함)
 * @param {Number} options.startColumnIndex		[default: 0] excel파일에서 그리드의 데이터가 시작되는 열의 번호
 * @param {Number} options.endColumnIndex		[default: 0] excel파일에서 그리드의 데이터가 끝나는 열의 index ( 엑셀컬럼수가 그리드컬럼수 보다 작은 경우 그리드 컬러수를 설정)
 * @param {String} options.headerExist			[default: 0] excel파일에서 그리드의 데이터에 header가 있는지 여부(1이면 header 존재 0이면 없음)
 * @param {String} options.footerExist			[default: 1] excel파일에서 그리드의 데이터에 footer가 있는지 여부(1이면 footer 존재 0이면 없음 기본값은 1 그리드에 footer가 없으면 적용되지 않음)
 * @param {String} options.append				[default: 0] excel파일에서 가져온 데이터를 그리드에 append시킬지 여부(1이면 현재 그리드에 데이터를 추가로 넣어줌 0이면 현재 그리드의 데이터를 삭제하고 넣음)
 * @param {String} options.hidden				[default: 0] 읽어들이려는 엑셀파일에 hidden column이 저장되어 있는지 여부를 설정하는 int형 숫자(0이면 엑셀파일에 hidden 데이터가 없으므로 그리드 hidden column에 빈 데이터를 삽입 1 : 엑셀파일에 hidden 데이터가 있으므로 엑셀 파일로부터 hidden 데이터를 삽입 )
 * @param {String} options.fillHidden			[default: 0] Grid에 hiddenColumn에 빈 값을 넣을지를 결정하기 위한 int형 숫자(1이면 hidden Column에 빈 값을 저장하지 않음,0이면 hidden column이 저장되어있지 않은 Excel File이라 간주하고 hidden Column에 빈 값을 넣어줌)(hidden이 0인 경우에는 fillhidden은 영향을 끼치지 않음)
 * @param {String} options.skipSpace			[default: 0] 공백무시 여부(1이면 무시 0이면 포함)
 * @param {Array} options.insertColumns			radio, checkbox와 같은 컬럼을 엑셀에서 받아 오지 않고, 사용자 컬럼 설정 으로 업로드 ( 데이터 구조 : [ { columnIndex:1, columnValue:"1" } ] )
 * @param {String} options.removeColumns		[default: 없음] 저장 하지 않을 column index, 여러컬럼인 경우 콤마(,)로 구분해서 정의 한다.
 * @param {String} options.popupUrl				업로드시에 호출할 popup의 url
 * @param {String} options.delim				업로드시 데이터를 구분하는 구분자 (default: , )
 * @param {String} options.status				[default: R]업로드된 데이터의 초기 상태값, 설정하지 않으면 "R"로 설정되며 "C"값을 설정 할 수 있다.
 * @param {String} options.pwd					엑셀파일에 암호가 걸려 있는 경우, 비밀번호
 * @param {String} options.optionParam			[default: 없음] DRM 연계시 사용자 정의 class에 HashMap 인자로 전달할 값. key는 "optionParam"으로 참조한다.
 * @param {String} options.cellDataConvertor	[default: true] 컬럼값을 사용자가 수정할수 있는 연계 클래스의 전체 패키지명. (AbstractCellDataProvider class를 상속후 convertValue method를 구현해야 함.
 * @param {String} options.decimal				[default: 4] 셀의 데이터가 소수인 경우, 최종 소수점 자리수. (기본값: 4) (예: 3인경우 4자리에서 반올림해서 3자리를 최종 표시.)
 * @param {String} options.useModalDisable		[default: false] 업로드 팝업창이 활성화 될때 부모창의 컴포넌트 disabled 처리 유무.
 * @param {String} options.useMaxByteLength		[default: false] ignoreChar 속성으로 설정한 문자를 제외하고 maxByteLength 속성으로 설정한 길이만큼의 데이터만 업로드.
 * @param {String} options.dateFormat			[default: yyyy-MM-dd] 엑셀의 셀포맷이 날짜형식으로 되어 있는경우 format. 기본값은 "yyyy-MM-dd"
 * @param {String} options.byteCheckEncoding	[default: EUC-KR] useMaxByteLength 설정되어 있는경우 byte처리시 지정할 인코딩. EUC-KR인경우 2byte처리 UTF-8일경우 3byte처리한다. (default는 EUC-KR)
 * @param {String} options.features				upload화면이 뜰 때 string 형식의 스타일 정보. 지정되지 않은경우 upload창이 기본 스타일로 생성
 * @hidden N
 * @exception 
 * @example const gridId = "grd_AdvancedExcel";
const type = "xlsx";
const options = {
    fileName : "gridDataUpload.xlsx" // default값이 존재하지 않으므로 꼭 fileName 값을 넣어야 한다.
};
$c.data.uploadGridViewExcel(grd_basicInfo,  options);
 */
scwin.getExcelUploadBaseOrigin = function ($p) {
  const host = window.location.hostname || "";
  if (host === "localhost" || host === "127.0.0.1") {
    return "https://newdevdebis.dongwon.com";
  }
  return window.location.origin;
};
scwin.resolveAdvancedExcelUploadOptions = function ($p, options) {
  const resolvedOptions = {
    advancedExcelUploadURL: options.advancedExcelUploadURL || "",
    postMsg: options.postMsg
  };
  const baseOrigin = scwin.getExcelUploadBaseOrigin($p);
  const appendPostMsg = function (url) {
    if ($c.util.isEmpty($p, url) || /(?:\?|&)postMsg=/i.test(url)) {
      return url;
    }
    return url + (url.indexOf("?") > -1 ? "&" : "?") + "postMsg=true";
  };
  if ($c.util.isEmpty($p, resolvedOptions.advancedExcelUploadURL) && baseOrigin !== window.location.origin) {
    resolvedOptions.advancedExcelUploadURL = appendPostMsg(baseOrigin + "/websquare/excelToGrid2.wq");
  }
  if (!$c.util.isEmpty($p, resolvedOptions.advancedExcelUploadURL)) {
    const isAbsoluteUrl = /^https?:\/\//i.test(resolvedOptions.advancedExcelUploadURL);
    const isCrossOrigin = isAbsoluteUrl && resolvedOptions.advancedExcelUploadURL.indexOf(window.location.origin) !== 0;
    if ((resolvedOptions.postMsg === "" || typeof resolvedOptions.postMsg === "undefined" || resolvedOptions.postMsg === null) && isCrossOrigin) {
      resolvedOptions.postMsg = true;
    }
    if (resolvedOptions.postMsg === true || resolvedOptions.postMsg === "true") {
      resolvedOptions.advancedExcelUploadURL = appendPostMsg(resolvedOptions.advancedExcelUploadURL);
    }
  }
  return resolvedOptions;
};
scwin.isLocalExcelUploadHost = function ($p) {
  const host = window.location.hostname || "";
  return host === "localhost" || host === "127.0.0.1";
};
scwin.isCrossOriginExcelUploadUrl = function ($p, url) {
  return /^https?:\/\//i.test(url || "") && url.indexOf(window.location.origin) !== 0;
};
scwin.shouldUseDirectExcelUpload = function ($p, options, advancedUploadOptions) {
  if (options.forcePopup === true || options.directUpload === false) {
    return false;
  }
  if (!window.FormData || !window.XMLHttpRequest) {
    return false;
  }
  if (!scwin.isCrossOriginExcelUploadUrl($p, advancedUploadOptions.advancedExcelUploadURL)) {
    return false;
  }
  return options.directUpload === true || scwin.isLocalExcelUploadHost($p);
};
scwin.getGridExcelUploadBodyRowCount = function ($p, grdObj) {
  try {
    const bodyNodes = WebSquare.Elem.api.getElementsByTagName(grdObj.element, "w2:gBody");
    if (bodyNodes && bodyNodes.length > 0) {
      const rowNodes = WebSquare.Elem.api.getElementsByTagName(bodyNodes[0], "w2:row");
      return rowNodes ? rowNodes.length : 0;
    }
  } catch (e) {
    WebSquare.exception.printStackTrace(e);
  }
  if (grdObj.struct && grdObj.struct.body && grdObj.struct.body.rowArr) {
    return grdObj.struct.body.rowArr.length;
  }
  return 0;
};
scwin.getGridExcelUploadStyle = function ($p, grdObj) {
  try {
    if (typeof grdObj.getExcelGridStyle === "function") {
      return grdObj.getExcelGridStyle();
    }
    if (grdObj.element._elementType === "json") {
      return WebSquare.xmljs.json2xml(grdObj.element._element, {
        changeKey: {
          "w2:select": "w2:column"
        }
      });
    }
    return WebSquare.xml.noNameSpaceSerialize(grdObj.element._element);
  } catch (e) {
    WebSquare.exception.printStackTrace(e);
  }
  return "";
};
scwin.getExcelUploadNodeText = function ($p, node) {
  if (!node) {
    return "";
  }
  if (WebSquare.xml && typeof WebSquare.xml.getTextNodeValue === "function") {
    const value = WebSquare.xml.getTextNodeValue(node);
    return typeof value === "undefined" || value == null ? "" : value;
  }
  return node.textContent || (node.firstChild ? node.firstChild.nodeValue : "") || "";
};
scwin.getExcelUploadErrorMessage = function ($p, doc) {
  const deniedCodeNode = doc.getElementsByTagName("deniedCodeList")[0];
  const deniedCode = scwin.getExcelUploadNodeText($p, deniedCodeNode);
  const codeMessageMap = {
    "101": "Upload_msg9",
    "102": "Upload_msg2",
    "200": "Upload_msg10",
    "201": "Upload_msg11",
    "202": "Upload_msg8",
    "203": "Upload_msg12",
    "204": "Upload_msg13",
    "205": "Upload_msg14",
    "206": "Upload_msg15",
    "207": "Upload_msg16",
    "208": "Upload_msg17",
    "209": "Upload_msg18"
  };
  if (codeMessageMap[deniedCode]) {
    return WebSquare.language.getMessage(codeMessageMap[deniedCode]) || WebSquare.language.getMessage("Upload_msg3") || "Upload failed.";
  }
  return scwin.getExcelUploadNodeText($p, doc.getElementsByTagName("message")[0]) || WebSquare.language.getMessage("Upload_msg3") || "Upload failed.";
};
scwin.normalizeExcelUploadResponse = function ($p, responseText) {
  if (typeof responseText !== "string") {
    return "";
  }
  const trimmedResponse = responseText.trim();
  if (trimmedResponse.charAt(0) === "<") {
    return trimmedResponse;
  }
  const firstQuoteIndex = responseText.indexOf("'");
  const lastQuoteIndex = responseText.lastIndexOf("'");
  if (firstQuoteIndex > -1 && lastQuoteIndex > firstQuoteIndex) {
    return responseText.substring(firstQuoteIndex + 1, lastQuoteIndex).replaceAll("\\\\n", "\\n");
  }
  return trimmedResponse;
};
scwin.applyExcelUploadResult = function ($p, grdObj, uploadInfo, responseText, fileName, options) {
  const normalizedResponse = scwin.normalizeExcelUploadResponse($p, responseText);
  const doc = WebSquare.xml.parse(normalizedResponse);
  const exceptionNodes = doc.getElementsByTagName("Exception");
  let append = uploadInfo.append;
  if (uploadInfo.chunkNum > 0) {
    append = true;
  }
  if (exceptionNodes.length > 0) {
    const failureMessage = scwin.getExcelUploadErrorMessage($p, doc);
    if (typeof options.onFailureCallback === "function") {
      options.onFailureCallback(uploadInfo.action, failureMessage);
    }
    alert(failureMessage);
    return false;
  }
  if (typeof append === "string") {
    append = WebSquare.util.getBoolean(append);
  }
  const arrayNode = doc.getElementsByTagName("array")[0];
  let uploadedData = arrayNode && arrayNode.firstChild ? arrayNode.firstChild.nodeValue : "";
  uploadedData = (uploadedData || "").replaceAll("\\n", "\n");
  if (uploadInfo.dataList !== "") {
    const dataComponent = WebSquare.util.getComponentById(uploadInfo.dataList);
    const beforeRowCount = dataComponent.getRowCount();
    const jsonArray = {
      columnInfo: uploadInfo.columnIds.split(","),
      data: uploadedData
    };
    if (uploadInfo.uploadType == 1 || uploadInfo.uploadType == 2) {
      if (uploadInfo.delim !== ",") {
        dataComponent.setArrayFile(jsonArray, append, uploadInfo.gridID, uploadInfo.uploadType, uploadInfo.delim);
      } else {
        dataComponent.setArrayFile(jsonArray, append, uploadInfo.gridID, uploadInfo.uploadType);
      }
    } else if (uploadInfo.uploadType == 0) {
      if (uploadInfo.delim !== ",") {
        dataComponent.setArray(jsonArray, append, null, null, uploadInfo.delim);
      } else {
        dataComponent.setArray(jsonArray, append);
      }
    }
    if (uploadInfo.status === "C") {
      const afterRowCount = dataComponent.getRowCount();
      if (append) {
        dataComponent.modifyRangeStatus(beforeRowCount, afterRowCount, "C");
      } else {
        dataComponent.modifyRangeStatus(0, afterRowCount, "C");
      }
    }
  } else {
    const beforeRowCount = grdObj.getRowCount();
    if (grdObj.options.ref && (uploadInfo.instanceBind === true || uploadInfo.instanceBind === "true")) {
      grdObj.options.instanceBindBySetData = true;
      if (uploadInfo.uploadType == 1 || uploadInfo.uploadType == 2) {
        grdObj.setDataFile(uploadedData, append);
      } else if (uploadInfo.uploadType == 0) {
        grdObj.setData(uploadedData, append);
      }
      grdObj.options.instanceBindBySetData = false;
    } else if (uploadInfo.uploadType == 1 || uploadInfo.uploadType == 2) {
      grdObj.setDataFile(uploadedData, append);
    } else if (uploadInfo.uploadType == 0) {
      grdObj.setData(uploadedData, append);
    }
    if (uploadInfo.status === "C") {
      const afterRowCount = grdObj.getRowCount();
      if (append) {
        grdObj.modifyRangeStatus(beforeRowCount, afterRowCount, "C");
      } else {
        grdObj.modifyRangeStatus(0, afterRowCount, "C");
      }
    }
  }
  grdObj._excelUploadInfo = "";
  grdObj.fireFileReadEnd(fileName);
  if (typeof options.onSuccessCallback === "function") {
    options.onSuccessCallback(uploadInfo.action);
  }
  return true;
};
scwin.directUploadGridViewExcel = function ($p, grdObj, opts, options) {
  if (typeof grdObj.getExcelUploadInfo !== "function") {
    grdObj.advancedExcelUpload(opts);
    return;
  }
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.style.display = "none";
  fileInput.accept = ".xls,.xlsx,.xlsm,.csv,.txt,.cell,.ods,.odt,.doc,.docx,.hwp";
  const removeFileInput = function () {
    if (fileInput.parentNode) {
      fileInput.parentNode.removeChild(fileInput);
    }
  };
  fileInput.addEventListener("change", function () {
    const selectedFile = fileInput.files && fileInput.files[0];
    removeFileInput();
    if (!selectedFile) {
      return;
    }
    const uploadInfo = grdObj.getExcelUploadInfo(opts);
    const requestOptions = {
      scope: grdObj.scope_id || ""
    };
    const processMessage = uploadInfo.processMsg ? WebSquare.text.BASE64URLDecoder(uploadInfo.processMsg) : "";
    const formData = new FormData();
    const bodyRows = scwin.getGridExcelUploadBodyRowCount($p, grdObj);
    const encodedPwd = uploadInfo.pwd ? WebSquare.text.BASE64Encoder(uploadInfo.pwd) : "";
    const requestFields = {
      filename: selectedFile,
      skip_space: uploadInfo.skipSpace,
      hidden: uploadInfo.hidden,
      fillHidden: uploadInfo.fillHidden,
      header: uploadInfo.header,
      footer: uploadInfo.footer,
      gridStartRow: uploadInfo.gridStartRow,
      gridStartCol: uploadInfo.gridStartCol,
      gridSheetNo: uploadInfo.gridSheetNo,
      pwd: encodedPwd,
      domain: uploadInfo.domain || "",
      columnNum: uploadInfo.columnNum,
      hiddenColumns: uploadInfo.hiddenColumns,
      removeColumns: uploadInfo.removeColumns,
      headerRows: uploadInfo.headerRows,
      bodyRows: bodyRows,
      delim: uploadInfo.delim,
      expressionColumns: uploadInfo.expressionColumns,
      gridStyle: scwin.getGridExcelUploadStyle($p, grdObj),
      insertColumns: uploadInfo.insertColumns,
      gridEndCol: uploadInfo.gridEndCol,
      ignoreStartRowIndexInSAX: uploadInfo.ignoreStartRowIndexInSAX,
      ignoreStartColumnIndexInSAX: uploadInfo.ignoreStartColumnIndexInSAX,
      loadingMode: uploadInfo.loadingMode,
      optionParam: uploadInfo.optionParam,
      cellDataConvertor: uploadInfo.cellDataConvertor,
      applyDecimal: uploadInfo.applyDecimal,
      decimal: uploadInfo.decimal,
      useMaxByteLength: uploadInfo.useMaxByteLength,
      dateFormat: uploadInfo.dateFormat,
      byteCheckEncoding: uploadInfo.byteCheckEncoding,
      columnOrder: uploadInfo.columnOrder,
      gridSheetName: uploadInfo.gridSheetName,
      activeSheet: uploadInfo.activeSheet,
      chunkNum: uploadInfo.chunkNum || 0,
      useXHR: "true",
      trim: String(uploadInfo.trim),
      uploadType: String(uploadInfo.uploadType || 0),
      filePath: uploadInfo.filePath || "",
      useDialog: String(uploadInfo.useDialog),
      countSkipRow: uploadInfo.countSkipRow || "",
      msaName: uploadInfo.msaName || "",
      readUntilEmptyRow: uploadInfo.readUntilEmptyRow
    };
    Object.keys(requestFields).forEach(function (fieldName) {
      const fieldValue = requestFields[fieldName];
      if (typeof fieldValue !== "undefined" && fieldValue !== null) {
        formData.append(fieldName, fieldValue);
      }
    });
    if (processMessage) {
      WebSquare.layer.showProcessMessage(processMessage, requestOptions);
    } else {
      WebSquare.layer.showProcessMessage("upload...", requestOptions);
    }
    const xhr = new XMLHttpRequest();
    let requestHandled = false;
    const handleFailure = function (message) {
      if (requestHandled) {
        return;
      }
      requestHandled = true;
      if (typeof options.onFailureCallback === "function") {
        options.onFailureCallback(uploadInfo.action, message);
      }
      WebSquare.layer.hideProcessMessage(requestOptions);
      alert(message);
    };
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4 || requestHandled) {
        return;
      }
      try {
        if (xhr.status !== 200) {
          handleFailure(WebSquare.language.getMessage("Upload_msg3") || "Upload failed.");
          return;
        }
        scwin.applyExcelUploadResult($p, grdObj, uploadInfo, xhr.responseText, selectedFile.name, options);
      } catch (e) {
        WebSquare.exception.printStackTrace(e);
        handleFailure(WebSquare.language.getMessage("Upload_msg3") || "Upload failed.");
        return;
      }
      requestHandled = true;
      WebSquare.layer.hideProcessMessage(requestOptions);
    };
    xhr.onerror = function () {
      handleFailure(WebSquare.language.getMessage("Upload_msg3") || "Upload failed.");
    };
    xhr.open("POST", uploadInfo.action, true);
    try {
      xhr.withCredentials = true;
    } catch (e) {
      WebSquare.exception.printStackTrace(e);
    }
    xhr.setRequestHeader("X-File-Name", encodeURIComponent(selectedFile.name));
    const requestHeaderFunctionName = WebSquare.core.getConfiguration("/WebSquare/handler/requestHeaderFunction/@value");
    if (requestHeaderFunctionName !== "") {
      const requestHeaderFunction = WebSquare.util.getGlobalFunction(requestHeaderFunctionName);
      if (requestHeaderFunction) {
        requestHeaderFunction(xhr, "excelupload");
      }
    }
    xhr.send(formData);
  }, {
    once: true
  });
  document.body.appendChild(fileInput);
  fileInput.click();
};
scwin.uploadGridViewExcel = function ($p, grdObj, options) {
  if ($c.util.isEmpty($p, options)) {
    options = {};
  }
  const width = "490";
  const height = "218";
  const top = document.body.offsetHeight / 2 - parseInt(height) / 2 + $(document).scrollTop();
  const left = document.body.offsetWidth / 2 - parseInt(width) / 2 + $(document).scrollLeft();
  const advancedUploadOptions = scwin.resolveAdvancedExcelUploadOptions($p, options);
  const features = options.features || "top=" + top + ",height=" + height + ",left=" + left + ",width=" + width + ",location=no,menubar=no,resizable=yes,scrollbars=auto,status=no,titlebar=yes,toolbar=no";
  const opts = {
    type: options.type || "0",
    // String, 1이면 엑셀 파일이 그리드의 보이는 결과로 만들어져있을때  0이면 엑셀 파일이 그리드의 실제 데이터로 구성되어있을때
    sheetNo: options.sheetNo || 0,
    // Number, excel파일에서 그리드의 데이터가 있는 sheet번호
    startRowIndex: options.startRowIndex ?? 1,
    // Number, [defalut:0] excel파일에서 그리드의 데이터가 시작되는 행의 번호(헤더 포함)
    startColumnIndex: options.startColumnIndex || 0,
    // Number, [defalut:0] excel파일에서 그리드의 데이터가 시작되는 열의 번호
    endColumnIndex: options.endColumnIndex || 0,
    // Number, [defalut: 0] excel파일에서 그리드의 데이터가 끝나는 열의 index
    //( 엑셀컬럼수가 그리드컬럼수 보다 작은 경우 그리드 컬러수를 설정)
    headerExist: options.headerExist || "0",
    // String, [defalut:0] excel파일에서 그리드의 데이터에 header가 있는지 여부
    // (1이면 header 존재 0이면 없음)
    footerExist: options.footerExist ?? "0",
    //String, [defalut: 1] excel파일에서 그리드의 데이터에 footer가 있는지 여부
    // (1이면 footer 존재 0이면 없음 기본값은 1 그리드에 footer가 없으면 적용되지 않음)
    append: options.append || "0",
    // String, [defalut: 0] excel파일에서 가져온 데이터를 그리드에 append시킬지 여부
    // (1이면 현재 그리드에 데이터를 추가로 넣어줌 0이면 현재 그리드의 데이터를 삭제하고 넣음)
    hidden: options.hidden || "0",
    // String, [defalut: 0] 읽어들이려는 엑셀파일에 hidden column이 저장되어 있는지 여부를 설정하는 int형 숫자(0이면
    // 엑셀파일에 hidden 데이터가 없으므로 그리드 hidden column에 빈 데이터를 삽입
    // 1 : 엑셀파일에 hidden 데이터가 있으므로 엑셀 파일로부터 hidden 데이터를 삽입 )
    fillHidden: options.fillHidden || "0",
    // String, [defalut: 0] Grid에 hiddenColumn에 빈 값을 넣을지를 결정하기
    // 위한 int형 숫자(1이면 hidden Column에 빈 값을 저장하지 않음,0이면 hidden
    // column이 저장되어있지 않은 Excel  File이라 간주하고 hidden Column에 빈
    // 값을 넣어줌)(hidden이 0인 경우에는 fillhidden은 영향을 끼치지 않음)
    skipSpace: options.skipSpace || "1",
    // String, [defalut: 0] 공백무시 여부(1이면 무시 0이면 포함)
    insertColumns: options.insertColumns || "",
    // Array, radio, checkbox와 같은 컬럼을 엑셀에서 받아 오지 않고
    // 사용자 컬럼 설정 으로 업로드 ( 데이터 구조 : [ { columnIndex:1, columnValue:"1" } ] )
    popupUrl: options.popupUrl || "",
    // String, 업로드시에 호출할 popup의 url
    status: options.status || "C",
    // String, [defalut: R]업로드된 데이터의 초기 상태값, 설정하지 않으면 "R"로 설정되며 "C"값을 설정 할 수 있다.
    pwd: options.pwd || "",
    // String, 엑셀파일에 암호가 걸려 있는 경우, 비밀번호
    advancedExcelUploadURL: advancedUploadOptions.advancedExcelUploadURL || "",
    postMsg: advancedUploadOptions.postMsg,
    msaName: options.msaName || "",
    loadingMode: options.loadingMode || "",
    cellDataConvertor: options.cellDataConvertor || "",
    decimal: options.decimal || "",
    useModalDisable: options.useModalDisable || "false",
    useMaxByteLength: options.useMaxByteLength || "false",
    dateFormat: options.dateFormat || "",
    byteCheckEncoding: options.byteCheckEncoding || "",
    trim: options.trim ?? false,
    useXHR: options.useXHR ?? false,
    filePath: options.filePath || "",
    countSkipRow: options.countSkipRow || "",
    readUntilEmptyRow: options.readUntilEmptyRow ?? false,
    features: features,
    wframe: true
  };
  if (scwin.shouldUseDirectExcelUpload($p, options, advancedUploadOptions)) {
    scwin.directUploadGridViewExcel($p, grdObj, opts, options);
    return;
  }
  grdObj.advancedExcelUpload(opts);
};

/**
 * @method
 * @name uploadGridViewCSV
 * @description 액셀 CSV 업로드
 * @param {string} grdObj 					gridView 객체
 * @param {string} options 					CSV 다운로드 옵션을 가진 객체
 * @param {String} options.type				[default: 1, 0]데이터 형태 (0이면 실 데이터 형태,1이면 display 표시 방식)
 * @param {String} options.header			[default: 1, 0]Grid header 존재 유무 (0이면 header row수를 무시하고 전부 업로드하고 1이면 header row수 만큼 skip한다.)
 * @param {String} options.delim			[default: ',']CSV 파일에서 데이터를 구분할 구분자
 * @param {String} options.escapeChar		CSV 데이터에서 제거해야 되는 문자셋 ( ex) '\'' )
 * @param {Number} options.startRowIndex 	[default: 0] csv파일에서 그리드의 데이터가 시작되는 행의 번호, startRowIndex가 설정되면, header 설정은 무시된다.
 * @param {String} options.append			[default: 0, 1]csv파일에서 가져온 데이터를 그리드에 append시킬지 여부(1이면 현재 그리드에 데이터를 추가로 넣어줌 0이면 현재 그리드의 데이터를 삭제하고 넣음)
 * @param {Number} options.hidden			[default: 0, 1]hidden Column에 대한 저장 여부(0이면 저장하지않음,1이면 저장)
 * @param {String} options.fillHidden		[default: 0, 1]hidden Column에 빈 값을 넣을지를 결정하기 위한 int형 숫자(1이면 hidden Column에 빈 값을 저장하지 않음,0이면 hidden column이 저장되어있지 않은 csv File이라 간주하고 hidden Column에 빈 값을 넣어줌)(hidden이 0인 경우에는 fillhidden은 영향을 끼치지 않음)
 * @param {String} options.skipSpace		[default: 0, 1]공백무시 여부(1이면 무시 0이면 포함)
 * @param {String} options.expression		[default: 1, 0]expression 컬럼 데이터를 포함하고 있는지 여부, 기본값은 미포함(1이면 미포함, 0이면 포함)
 * @param {String} options.popupUrl			업로드시에 호출할 popup의 url
 * @param {String} options.status			[default: R]업로드된 데이터의 초기 상태값, 설정하지 않으면 "R"로 설정되며 "C"값을 설정 할 수 있다.
 * @param {String} options.ignoreSpan		[default: 0, 1] span되어 있는 경우 span을 무시하고 데이터를 읽을지 여부 (0이면 머지되어 있는 컬럼을 하나로 본다, 1이면 머지되어 있는 컬럼을 각각읽는다)
 * @param {String} options.optionParam		[default: 없음] DRM 연계시 사용자 정의 class에 HashMap 인자로 전달할 값. key는 "optionParam"으로 참조한다.
 * @hidden N
 * @exception 
 * @example const gridId = "grd_advancedExcel";
const options = {};
$c.data.uploadGridViewCSV(gridId,  options);
// return 예시) 엑셀 파일(.CSV) 업로드
 */
scwin.uploadGridViewCSV = function ($p, grdObj, options) {
  if ($c.util.isEmpty($p, options)) {
    options = {};
  }
  const width = "490";
  const height = "218";
  const top = document.body.offsetHeight / 2 - parseInt(height) / 2 + $(document).scrollTop();
  const left = document.body.offsetWidth / 2 - parseInt(width) / 2 + $(document).scrollLeft();
  const opts = {
    type: options.type || "0",
    // String, [default: 1, 0]데이터 형태 (0이면 실 데이터 형태,1이면 display 표시 방식)
    status: options.status || "C",
    header: options.header || "0",
    // String, [default: 1, 0]Grid header 존재 유무 (0이면 header row수를 무시하고 전부 업로드하고 1이면 header row수 만큼 skip한다.)
    delim: options.delim || ",",
    // String, [default: ',']CSV 파일에서 데이터를 구분할 구분자
    escapeChar: options.escapeChar || "",
    // String, CSV 데이터에서 제거해야 되는 문자셋 ( ex) '\'' )
    startRowIndex: options.startRowIndex || 0,
    // Number, [defalut: 0] csv파일에서 그리드의 데이터가 시작되는 행의 번호, startRowIndex가 설정되면, header 설정은 무시된다.
    append: options.append || "0",
    // String, [defalut: 0, 1]csv파일에서 가져온 데이터를 그리드에 append시킬지 여부(1이면 현재 그리드에 데이터를 추가로 넣어줌 0이면 현재 그리드의 데이터를 삭제하고 넣음)
    hidden: options.hidden || "1",
    // String: [default: 0, 1] 숨김 컬럼에 대한 사용 여부 (0 : 사용하지 않음, 1 : 사용)
    fillHidden: options.fillHidden || "0",
    // String, [defalut: 0, 1]hidden Column에 빈 값을 넣을지를 결정하기 위한 int형 숫자(1이면 hidden Column에 빈 값을 저장하지 않음,0이면 hidden column이 저장되어있지 않은 csv File이라 간주하고 hidden Column에 빈 값을 넣어줌)(hidden이 0인 경우에는 fillhidden은 영향을 끼치지 않음)
    skipSpace: options.skipSpace || "0",
    // String, [defalut: 0, 1]공백무시 여부(1이면 무시 0이면 포함)
    expression: options.expression || "1",
    // String, [defalut: 1, 0]expression 컬럼 데이터를 포함하고 있는지 여부, 기본값은 미포함(1이면 미포함, 0이면 포함)
    popupUrl: options.popupUrl || "",
    // String, 업로드시에 호출할 popup의 url
    features: "top=" + top + ",height=" + height + ",left=" + left + ",width=" + width + ",location=no,menubar=no,resizable=yes,scrollbars=auto,status=no,titlebar=yes,toolbar=no",
    wframe: true
  };
  grdObj.readCSV(opts);
};

/**
 * @method
 * @name validateGroup
 * @description 그룹안에 포함된 컴포넌트의 입력 값에 대한 유효성을 검사한다.
 * 컴포넌트 속성 유효성 검사를 수행하고, valInfoArr 유효성 검사 옵션에 대해서 유효성 검사를 수행한다.
 * valInfoArr 유효성 검사 옵션 파라미터를 전달하지 않은 경우 컴포넌트 속성(mandatory, allowChar, ignoreChar, maxLength, maxByteLength, minLength, minByteLength)에 대해서만 유효성 검사를 수행한다.
 * 
 * @param {Object} grpObj 그룹 컴포넌트 객체
 * @param {Object[]} valInfoArr 유효성 검사 옵션
 * @param {String} options[].id 유효성 검사 대상 DataCollection 컬럼 아이디
 * @param {String} options[].label 유효성 검사 실패 시 출력할 레이블 명 (DataCollection 컬럼명을 참조하지 않고 싶은 경우 사용함)
 * @param {Boolean} options[].mandatory 필수 입력 값 여부
 * @param {Number} options[].minLength 최소 입력 자리수
 * @param {Number} options[].minByteLength 최소 입력 자리수 (Byte 단위)
 * @param {Boolean} options[].isEmail 이메일 유효성 검사 실행
 * @param {Boolean} options[].isPhone 전화번호 유효성 검사 수행
 * @param {requestCallback} options[].valFunc 사용자 유효성 검사 함수
 * @param {String} tacObj 그룹이 포함된 TabControl 컴포넌트 아이디
 * @param {String} tabId 그룹이 포함된 TabControl 컴포넌트의 Tab 아이디
 * @returns {Boolean} 유효성 검사 결과
 * @hidden N
 * @exception 
 * @example

if ($c.data.validateGroup(grp_LoginInfo)) {
    if (confirm("변경된 데이터를 저장하시겠습니까?")) {
        $c.sbm.execute(sbm_saveData);
    }
}

const valInfo = [ { id : "grpCd", mandatory : true, minLength : 5 },
                { id : "grpNm", mandatory : true } ];

if ($c.data.validateGroup(grp_LoginInfo, valInfo)) {
    if (confirm("변경된 데이터를 저장하시겠습니까?")) {
        $c.sbm.execute(sbm_saveCode);
    }
}

const valInfo = [ { id : "grpCd", label : "공통그룹코드", mandatory : true, minLength : 5 },
                { id : "grpNm", label : "공통그룹명", mandatory : true } ];

if ($c.data.validateGroup(grp_code, valInfo)) {
    if (win.$c.win.confirm("변경된 데이터를 저장하시겠습니까?")) {
        $c.sbm.execute(sbm_saveCode);
    }
};

const valInfo = [ { id : "prntMenuCd", mandatory : true },
                { id : "menuCd", mandatory : true,
                    valFunc : function($p, value) {
                        if (dmaMenu.get("prntMenuCd") == dmaMenu.get("menuCd")) {
                            return "상위 메뉴 코드와 메뉴 코드가 같아서는 안됩니다.";
                        }
                    } },
                 { id : "menuNm", mandatory : true },
                 { id : "menuLevel", mandatory : true },
                 { id : "menuSeq", mandatory : true },
                 { id : "urlPath", mandatory : true },
                 { id : "isUse", mandatory : true } ];

if ($c.data.validateGroup(tblMenuInfo, valInfo, tacMenuInfo, "tabMenuInfo1") == false) {
    return false;
} 

 * @description 그룹안에 포함된 컴포넌트의 입력 값에 대한 유효성을 검사한다.
 *
 * 컴포넌트 속성 유효성 검사를 수행하고, valInfoArr 유효성 검사 옵션에 대해서 유효성 검사를 수행한다.
 * valInfoArr 유효성 검사 옵션 파라미터를 전달하지 않은 경우 컴포넌트 속성(mandatory, allowChar, ignoreChar, maxLength, maxByteLength, minLength, minByteLength)에 대해서만 유효성 검사를 수행한다.
 * 
필수 입력, 입력 허용 문자, 입력 허용 불가 문자, 최대 입력 문자수 설정은 컴포넌트의 속성에서 설정한다. <br/>
- mandatory : 필수 입력 항목 여부 <br/>
- allowChar : 입력 허용 문자 <br/>
- ignoreChar : 입력 허용 불가 문자 <br/>
- maxLength : 최대 입력 문자수 <br/>
- maxByteLength : 최대 입력 바이트수 <br/>
 */
scwin.validateGroup = function ($p, grpObj, valInfoArr, tacObj, tabId) {
  if (!$c.util.isEmpty($p, tacObj) && tacObj.getPluginName() === 'tabControl') {
    grpObj = tacObj.getWindow(tabId)[grpObj];
  }
  let objArr = $c.util.getChildren($p, grpObj, {
    includePlugin: "checkbox checkcombobox datePicker editor input inputCalendar multiselect radio selectbox searchbox secret textarea",
    recursive: true
  });
  const errors = [];
  try {
    for (let objIdx in objArr) {
      const obj = objArr[objIdx];
      const dataObjInfo = $c.data.getDataCollection($p, obj);
      let dataCollection = null;
      let columnId = null;
      let value = null;
      if (dataObjInfo !== undefined && dataObjInfo !== null) {
        dataCollection = $p.getComponentById(dataObjInfo.runtimeDataCollectionId);
        columnId = dataObjInfo.columnId;
      }
      if (dataCollection !== null && dataCollection.getObjectType() === "dataMap") {
        value = dataCollection.get(dataObjInfo.columnId);
        if (typeof value === "string") {
          value = value.trim();
        }
      } else {
        let tempIdArr = obj.getID().split("_");
        if (obj.getPluginName() !== "editor") {
          if (typeof obj.getValue === "function") {
            value = obj.getValue();
            if (typeof value === "string") {
              value = value.trim();
            }
          } else {
            continue;
          }
        } else {
          value = obj.getHTML();
          if (typeof value === "string") {
            value = value.trim();
          }
        }
      }
      let valInfo = {
        id: columnId
      };
      let isVaild = false;
      for (let valIdx in valInfoArr) {
        if (typeof valInfoArr[valIdx].id !== "undefined" && valInfoArr[valIdx].id === columnId) {
          valInfo = valInfoArr[valIdx];
          isVaild = true;
          break;
        }
      }
      if (typeof objArr[objIdx].options.mandatory !== "undefined" && objArr[objIdx].options.mandatory) {
        valInfo.mandatory = true;
        isVaild = true;
      }
      if (typeof objArr[objIdx].options.minlength !== "undefined" && objArr[objIdx].options.minlength > 0 && objArr[objIdx].getPluginName() !== "inputCalendar") {
        valInfo.minLength = objArr[objIdx].options.minlength;
        isVaild = true;
      }
      if (typeof objArr[objIdx].options.minByteLength !== "undefined" && objArr[objIdx].options.minByteLength > 0 && objArr[objIdx].getPluginName() !== "inputCalendar") {
        valInfo.minByteLength = objArr[objIdx].options.minByteLength;
        isVaild = true;
      }
      if (isVaild === true) {
        _setResult(dataCollection, obj.getID(), valInfo, value);
      }
    }
    if (errors.length > 0) {
      if (typeof tacObj !== "undefined" && typeof tabId !== "undefined" && tabId !== "") {
        const tabIndex = tacObj.getTabIndex(tabId);
        Promise.resolve().then(function ($p) {
          return tacObj.setSelectedTabIndex(tabIndex);
        });
      }
      const option = {
        callBackParam: {
          "objId": errors[0].objId
        }
      };
      $c.win.alert($p, errors[0].message, function (param) {
        if (typeof param !== "undefined" && typeof param.objId !== "undefined") {
          const obj = $p.getComponentById(param.objId);
          obj.focus();
        }
      }, option);
      return false;
    } else {
      return true;
    }
    function _setResult(dataCollection, objId, valInfo, value) {
      const msgInfo = $c.data.getValResultMsg($p, valInfo, value);
      if ($c.util.isEmpty($p, msgInfo.message) === false) {
        const comObj = $p.getComponentById(objId);
        const errIdx = errors.length;
        errors[errIdx] = {};
        errors[errIdx].columnId = valInfo.id;
        errors[errIdx].objId = objId;
        if ($c.util.isEmpty($p, valInfo.label) === false) {
          errors[errIdx].columnName = valInfo.label;
        } else if ($c.util.isEmpty($p, dataCollection) === false) {
          // var scope = $c.win.getScope(dataCollection);
          errors[errIdx].columnName = $c.data.getColumnName($p, comObj);
        } else if (typeof comObj.getInvalidMessage === "function") {
          errors[errIdx].columnName = comObj.getInvalidMessage();
        }
        if (msgInfo.msgType == "2") {
          errors[errIdx].message = msgInfo.message;
        } else {
          if ($c.util.isEmpty($p, errors[errIdx].columnName) === false) {
            errors[errIdx].message = $c.str.attachPostposition($p, errors[errIdx].columnName) + " " + msgInfo.message;
          } else {
            errors[errIdx].message = msgInfo.message;
          }
        }
      }
    }
  } catch (ex) {
    console.error("Exception :: Object Id : " + obj.getID() + ", Plug-in Name: " + obj.getPluginName() + ", " + ex.message);
  } finally {
    objArr = null;
  }
};

/**
 * @method
 * @name validateGridView
 * @description GridView를 통해서 입력된 데이터에 대해서 유효성을 검증한다.
 * 입력 허용 문자, 입력 허용 불가 문자, 최대 입력 문자수 설정은 GridView의 Column의 속성에서 설정한다.
- allowChar : 입력 허용 문자
- ignoreChar : 입력 허용 불가 문자
- maxLength : 최대 입력 문자수
- maxByteLength : 최대 입력 바이트수
 * @param {Object} gridViewObj GridView 객체
 * @param {Object[]} valInfoArr 데이터 유효성 검증 옵션
 * @param {String} options[].id 유효성 검사 대상 DataCollection 컬럼 아이디
 * @param {Boolean} options[].mandatory 필수 입력 값 여부
 * @param {Number} options[].minLength 최소 입력 자리수
 * @param {Boolean} options[].isEmail 이메일 유효성 검사 실행
 * @param {Boolean} options[].isPhone 전화번호 유효성 검사 수행
 * @param {requestCallback} options[].valFunc 사용자 유효성 검사 함수
 * @param {Object} tacObj GridView가 포함된 TabControl 컴포넌트 객체
 * @param {String} tabId GridView가 포함된 TabControl 컴포넌트의 Tab 아이디
 * @returns {Boolean} 유효성 검사 결과
 * @hidden N
 * @exception 
 * @example const valInfo = [ {id: "grpCd", mandatory: true, minLength: 5},
               {id: "grpNm", mandatory: true} ];

if ($c.data.validateGridView(grd_MenuAuthority, valInfo)) {
   if (confirm("변경된 데이터를 저장하시겠습니까?")) {
       scwin.saveGroup();
   }
}

const valInfo = [ {id: "grpCd", label : "공통그룹코드", mandatory: true, minLength: 5},
               {id: "grpNm", label : "공통그룹명", mandatory: true} ];

if ($c.data.validateGridView(grd_MenuAuthority, valInfo)) {
   if (confirm("변경된 데이터를 저장하시겠습니까?")) {
       scwin.saveGroup();
   }
}

const valInfo = [ { id : "prntMenuCd", mandatory : true },
                { id : "menuCd", mandatory : true,
                  valFunc : function($p, value, dataCollectionObj, rowIndex) {
                    if (dmaMenu.get("prntMenuCd") == dmaMenu.get("menuCd")) {
                        return "상위 메뉴 코드와 메뉴 코드가 같아서는 안됩니다.";
                    }
                  }
                },
                { id : "menuNm", mandatory : true },
                { id : "menuLevel", mandatory : true },
                { id : "menuSeq", mandatory : true },
                { id : "urlPath", mandatory : true },
                { id : "isUse", mandatory : true } ];

if ($c.data.validateGridView(grd_MenuAuthority, valInfo, tacMenuInfo, "tabMenuInfo1") == false) {
   return false;
}
 */
scwin.validateGridView = function ($p, gridViewObj, valInfoArr, tacObj, tabId) {
  if (gridViewObj === null) {
    return false;
  }
  const dataList = $c.util.getGridViewDataList($p, gridViewObj);
  if (dataList === null) {
    return false;
  }
  const errors = [];
  try {
    const modifiedIdx = dataList.getModifiedIndex();
    for (let dataIdx = 0; dataIdx < modifiedIdx.length; dataIdx++) {
      let valInfo = {};
      let isVaild = false;
      let modifiedData = dataList.getRowJSON(modifiedIdx[dataIdx]);
      if (modifiedData.rowStatus === "D") {
        continue;
      }
      for (let valIdx in valInfoArr) {
        if (typeof valInfoArr[valIdx].id !== "undefined" && modifiedData[valInfoArr[valIdx].id] !== "undefined") {
          let value = modifiedData[valInfoArr[valIdx].id];
          if (typeof value === "string") {
            value = value.trim();
          }
          _setResult(modifiedIdx[dataIdx], dataList, gridViewObj.getID(), valInfoArr[valIdx], value);
        }
      }
    }
    if (errors.length > 0) {
      if (typeof tacObj !== "undefined" && typeof tabId !== "undefined" && tabId !== "") {
        const tabIndex = tacObj.getTabIndex(tabId);
        tacObj.setSelectedTabIndex(tabIndex);
      }
      const option = {
        callBackParam: {
          "objId": errors[0].objId,
          "columnId": errors[0].columnId,
          "rowIndex": errors[0].rowIndex
        }
      };
      $c.win.alert($p, errors[0].message, function (param) {
        if (typeof param !== "undefined" && typeof param.objId !== "undefined") {
          const grdiViewObj = $p.getComponentById(param.objId);
          grdiViewObj.setFocusedCell(param.rowIndex, param.columnId, true);
        }
      }, option);
      return false;
    } else {
      return true;
    }
    function _setResult(rowIndex, dataList, gridViewObjId, valInfo, value) {
      const msgInfo = $c.data.getValResultMsg($p, valInfo, value, dataList, rowIndex);
      if ($c.util.isEmpty($p, msgInfo.message) === false) {
        const errIdx = errors.length;
        errors[errIdx] = {};
        errors[errIdx].columnId = valInfo.id;
        errors[errIdx].objId = gridViewObjId;
        if ($c.util.isEmpty($p, valInfo.label) === false) {
          errors[errIdx].columnName = valInfo.label;
        } else {
          errors[errIdx].columnName = dataList.getColumnName(valInfo.id);
        }
        errors[errIdx].rowIndex = rowIndex;
        if (msgInfo.msgType == "2") {
          errors[errIdx].message = msgInfo.message;
        } else {
          errors[errIdx].message = $c.str.attachPostposition($p, errors[errIdx].columnName) + " " + msgInfo.message;
        }
      }
    }
  } catch (ex) {
    console.error(ex);
  }
};

/**
 * @method
 * @name createDataList
 * @description DataList를 동적으로 생성한다.
 * @param {String} dsId DataList의 아이디
 * @param {Array} colArr 컬럼정보
 * @param {Array} typeArr 컬럼들의 dataType 정의
 * @param {Object} options dataCollection의 속성[baseNode, repeatNode, saveRemovedData, scwinObj]
 * @returns {Object} 생성한 DataList 객체
 * @hidden N
 * @exception 
 * @example const dcoptions = {
    baseNode : "list",
    repeatNode : "map",
    saveRemovedData : "true"
};
const dlObj = $c.data.createDataList("dlt_code", ["cdGrp", "cd", "nm","ord"], ["text", "text", "text", "text"] , dcoptions);
 */
scwin.createDataList = function ($p, dsId, colArr, typeArr, options) {
  try {
    const dltObj = $c.util.getComponent($p, dsId);
    if (!$c.util.isEmpty($p, dltObj)) {
      $p.data.remove(dsId);
    }
    let colInfoJSON = [];
    if (typeof colArr !== "undefined") {
      colInfoJSON = [];
      for (let i = 0; i < colArr.length; i++) {
        let dataType = "text";
        if (typeof typeArr !== "undefined") {
          dataType = typeArr[i];
        }
        const colInfo = {
          "id": colArr[i],
          "dataType": dataType,
          "name": colArr[i]
        };
        colInfoJSON.push(colInfo);
      }
    }
    if (typeof options === "undefined") {
      options = {};
      options.baseNode = "list";
      options.repeatNode = "map";
      options.saveRemovedData = "true";
    }
    ;
    const dataCollectionJSON = {
      id: dsId,
      type: "dataList",
      option: {
        "baseNode": options.baseNode || "list",
        "repeatNode": options.repeatNode || "map",
        "saveRemovedData": options.saveRemovedData || "true"
      },
      columnInfo: colInfoJSON
    };
    const codeDataObj = $p.data.create(dataCollectionJSON);
    return $c.util.getComponent($p, dsId);
  } catch (ex) {
    console.error(ex);
  }
};

/**
 * @method
 * @name createDataMap
 * @description DataMap을 동적으로 생성한다.
 * @param {String} dsId dataMap 의 아이디
 * @param {Array} colArr 컬럼정보
 * @param {Object} typeArr dataCollection(dataMap) 타입 배열
 * @param {Object} options DataMap 생성 옵션
 * @returns {Object} 생성한 DataMap 객체
 * @hidden N
 * @exception 
 * @example const mapObj = $c.data.createDataMap("dma_test", ["col1", "col2", "col3"] , ["text", "text", "text"]);
 */
scwin.createDataMap = function ($p, dsId, colArr, typeArr, options) {
  try {
    const dltObj = $c.util.getComponent($p, dsId);
    if (!$c.util.isEmpty($p, dltObj)) {
      $p.data.remove(dsId);
    }
    let colInfoJSON = [];
    if (typeof colArr !== "undefined") {
      colInfoJSON = [];
      for (let i = 0; i < colArr.length; i++) {
        let dataType = "text";
        if (typeof typeArr !== "undefined") {
          dataType = typeArr[i];
        }
        const colInfo = {
          "id": colArr[i],
          "type": dataType,
          "name": colArr[i]
        };
        colInfoJSON.push(colInfo);
      }
    }
    if (typeof options === "undefined") {
      options = {
        "baseNode": "map"
      };
    }
    ;
    const dataCollectionJSON = {
      "id": dsId,
      "type": "dataMap",
      "option": {
        "baseNode": options.baseNode || "map"
      },
      "keyInfo": colInfoJSON
    };
    $p.data.create(dataCollectionJSON);
    return $c.util.getComponent($p, dsId);
  } catch (ex) {
    console.error(ex);
  }
};

/**
 * @method
 * @name undoAll
 * @description 전체 데이터를 초기 설정된 데이터(originalData)로 바꾸고 행의 상태를 초기화(R) 시킨다.
 * 초기 설정된 데이터란 setJSON, setXML 등과 같은 API들을 통해 설정된 데이터가 이에 속한다.
 * 추가(C)된 행은 제거한다
 * @param {Object} dltId 초기화하려는 DataCollection 객체
 * @hidden N
 * @exception 
 * @example $c.data.undoAll(dlt_grdAllData);
 */
scwin.undoAll = function ($p, dltId) {
  try {
    let dltObj = null;
    if (typeof dltId === "string") {
      dltObj = $c.util.getComponent($p, dltId);
    } else {
      dltObj = dltId;
    }

    // const rowCount = dltObj.getRowCount();
    const rowObj = dltObj.getModifiedIndex();
    const removeIdx = [];
    const undoIdx = [];

    // dltObj.setBroadcast(false);
    // for (let i = 0; i < rowCount; i++) {
    for (let i = 0; i < rowObj.length; i++) {
      if (dltObj.getRowStatus(rowObj[i]) == "C") {
        removeIdx.push(rowObj[i]);
        continue;
      }
      undoIdx.push(rowObj[i]);
    }
    dltObj.removeRows(removeIdx);
    dltObj.undoRows(undoIdx);

    // dltObj.setBroadcast(true, true);
  } catch (ex) {
    console.error(ex);
  }
};

/**
 * @method
 * @name undoRow
 * @description 지정한 GridView에 선택컬럼(chk)이 체크된 Row들을 취소(Undo) 처리한다.
 * @param {Object|String} dltId DataList 객체 또는 DatList 아이디
 * @hidden N
 * @exception 
 * @example $c.data.undoRow(dlt_data1);
 */
scwin.undoRow = function ($p, dltId, chkYn) {
  try {
    let dltObj = null;
    if (typeof dltId === "string") {
      dltObj = $c.util.getComponent($p, dltId);
    } else {
      dltObj = dltId;
    }
    if (typeof chkYn !== "undefined" && chkYn == "chk") {
      const checkedIdx = dltObj.getMatchedIndex("chk", "1");
      for (let idx = checkedIdx.length - 1; idx >= 0; idx--) {
        if (dltObj.getRowStatus(checkedIdx[idx]) == "C") {
          dltObj.removeRow(checkedIdx[idx]);
        } else {
          dltObj.undoRow(checkedIdx[idx]);
          dltObj.setRowPosition(checkedIdx[idx]);
        }
      }
    } else {
      if (typeof dltObj.getPluginName !== "undefined" && dltObj.getPluginName() == "gridView") {
        let rowIdxs = dltObj.getAllFocusedRowIndex();
        let removeIdx = [];
        let undoIdx = [];
        let onlyRFlag = false;
        for (let idx in rowIdxs) {
          var row = rowIdxs[idx];
          if (dltObj._dataList.getRowStatus(row) == "C") {
            removeIdx.push(row);
          } else {
            undoIdx.push(row);
          }
        }
        let tRemoveIdx = removeIdx.length;
        let tUndoIdx = undoIdx.length;
        if (removeIdx.length > 0) {
          onlyRFlag = true;
          dltObj._dataList.removeRows(removeIdx);
        }
        if (undoIdx.length > 0) {
          onlyRFlag = false;
          dltObj._dataList.undoRows(undoIdx);
          if (dltObj._dataList.getRowCount() > 0) {
            dltObj.setFocusedCell(undoIdx[tUndoIdx - 1], 0);
          }
        }
        if (onlyRFlag) {
          if (dltObj._dataList.getRowCount() > 0) {
            if (dltObj._dataList.getRowCount() - 1 < removeIdx[0]) {
              dltObj.setFocusedCell(dltObj._dataList.getRowCount() - 1, 0);
            } else {
              dltObj.setFocusedCell(removeIdx[0], 0);
            }
          }
        }
      } else {
        let row = dltObj.getRowPosition();
        if (dltObj.getRowStatus(row) == "C") {
          dltObj.removeRow(row);
          if (dltObj._dataList.getRowCount() > 0) {
            if (dltObj._dataList.getRowCount() - 1 < row) {
              dltObj.setFocusedCell(dltObj._dataList.getRowCount() - 1, 0);
            } else {
              dltObj.setFocusedCell(row, 0);
            }
          }
        } else {
          dltObj.undoRow(row);
          dltObj.setRowPosition(row);
        }
      }
    }
    return;
  } catch (ex) {
    console.error(ex);
  }
};

/**
 * @method
 * @name undoGridView
 * @description GridView와 바인된 DataList의 데이터의 변경된 데이터를 Undo 시킨다.
 * @param {Object|String} grdId GridView 객체 또는 GridView 아이디
 * @hidden N
 * @exception 
 * @example $c.data.undoGridView(dlt_grdAllData);
 */
scwin.undoGridView = async function ($p, grdId) {
  try {
    let grdObj = null;
    if (typeof grdId === "string") {
      grdObj = $c.util.getComponent($p, grdId);
    } else {
      grdObj = grdId;
    }
    if (typeof grdObj === "object" && grdObj !== "") {
      const dltObj = $c.util.getGridViewDataList($p, grdObj);
      if (dltObj === null) {
        return;
      }
      if ($c.data.isModified($p, dltObj)) {
        if (await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_00052))) {
          $c.data.undoAll($p, dltObj);
        }
        ;
      }
      ;
    }
  } catch (ex) {
    console.error(ex);
  }
};

/**
 * @method
 * @name deleteRow
 * @description 지정한 GridView에 선택컬럼(chk)이 체크된 Row들을 삭제(Delete) 처리한다.
 * @param {Object|String} dltId DataList 객체 또는 DataList 아이디
 * @hidden N
 * @exception 
 * @example $c.data.deleteRow(dlt_data1);
 */
scwin.deleteRow = function ($p, dltId) {
  try {
    let dltObj = null;
    if (typeof dltId === "string") {
      dltObj = $c.util.getComponent($p, dltId);
    } else {
      dltObj = dltId;
    }
    if (typeof dltObj.getPluginName !== "undefined" && dltObj.getPluginName() == "gridView") {
      let rowIdxs = dltObj.getAllFocusedRowIndex();
      let removeIdx = [];
      let undoIdx = [];
      let onlyRFlag = false;
      for (let idx in rowIdxs) {
        var row = rowIdxs[idx];
        if (dltObj._dataList.getRowStatus(row) == "C") {
          removeIdx.push(row);
        } else {
          undoIdx.push(row);
        }
      }
      let tRemoveIdx = removeIdx.length;
      let tUndoIdx = undoIdx.length;
      if (removeIdx.length > 0) {
        dltObj._dataList.removeRows(removeIdx);
        onlyRFlag = true;
      }
      if (undoIdx.length > 0) {
        dltObj._dataList.deleteRows(undoIdx);
        onlyRFlag = false;
        if (dltObj._dataList.getRowCount() > 0) {
          dltObj.setFocusedCell(undoIdx[tUndoIdx - 1], 0);
        }
      }
      if (onlyRFlag) {
        if (dltObj._dataList.getRowCount() > 0) {
          if (dltObj._dataList.getRowCount() - 1 < removeIdx[0]) {
            dltObj.setFocusedCell(dltObj._dataList.getRowCount() - 1, 0);
          } else {
            dltObj.setFocusedCell(removeIdx[0], 0);
          }
        }
      }
    } else {
      let row = dltObj.getRowPosition();
      if (dltObj.getRowStatus(row) == "C") {
        dltObj.removeRow(row);
        if (dltObj.getRowCount() > 0) {
          if (dltObj.getRowCount() - 1 < row) {
            dltObj.setFocusedCell(dltObj.getRowCount() - 1, 0);
          } else {
            dltObj.setFocusedCell(row, 0);
          }
        }
      } else {
        dltObj.deleteRow(row);
      }
      dltObj.setRowPosition(row, true);
    }
    return;

    // dltObj.setBroadcast(true, true);
  } catch (ex) {
    console.error(ex);
  }
};

/**
 * @method
 * @name insertRow
 * @description 지정한 GridView에 새로운 Row를 추가한다.
 * @param {Object|String} grdId GridView 객체 또는 GridView 아이디
 * @returns {Number} 새로 추가된 Row Index
 * @hidden N
 * @exception 
 * @example $c.data.insertRow(grd_data1);
 */
scwin.insertRow = function ($p, grdId) {
  try {
    let grdObj = null;
    if (typeof grdId === "string") {
      grdObj = $c.util.getComponent($p, grdId);
    } else {
      grdObj = grdId;
    }
    if (typeof grdObj === "object" && grdObj !== "") {
      const dltObj = $c.util.getGridViewDataList($p, grdObj);
      if (dltObj === null) {
        return;
      }
      let ret = null;
      ret = dltObj.insertRow();
      grdObj.setFocusedCell(ret, 0);
      return ret;
    }
  } catch (ex) {
    console.error(ex);
  }
};

/**
 * @method
 * @name getMatchedJSON
 * @description 검색 조건에 맞는 데이터를 반환한다.
 * @param {Object} dataListObj : DataList Id 또는 DataList 객체
 * @param {Array|Object} condArr 비교 조건
 * @param {String} condArr.columnId 컬럼 아이디
 * @param {String} condArr.operator 비교 연산자 ( ==, !=, >, <, >=, <=, LIKE )
 * @param {String|Number|Boolean} condArr.value 비교 값
 * @param {String} condArr.logical 논리 연산자 ( &&, ||)
 * @returns {Object} DataList데이터 DataList ID 또는 DataList 객체
 * @hidden N
 * @exception 
 * @example $c.data.getMatchedJSON(dlt_memberList, { columnId : "POSITION_CD", operator : "==", value : "03"});

$c.data.getMatchedJSON(dlt_memberList, [
    { columnId : "POSITION_CD", operator : "==", value : "03" },
    { columnId : "DUTY_CD", operator : "==", value : "02", logical : "&&" }
]);

$c.data.getMatchedJSON(dlt_memberList, [
    { columnId : "POSITION_CD", operator : "==", value : "03" },
    { columnId : "DUTY_CD", operator : "==", value : "02" }
]);

$c.data.getMatchedJSON(dlt_memberList, [
    { columnId : "POSITION_CD", operator : "==", value : "03"},
    { columnId : "DUTY_CD", operator : "LIKE", value : "0", logical : "||" }
]);
 */
scwin.getMatchedJSON = function ($p, dataListObj, condArr) {
  if (typeof dataListObj === "string") {
    dataListObj = $p.getComponentById(dataListObj);
  }
  const returnData = [];
  const allData = dataListObj.getAllJSON();
  if ($c.util.isArray($p, condArr) === false) {
    condArr = [condArr];
  }
  for (let idx = 0; idx < allData.length; idx++) {
    let result = true;
    for (let conIdx = 0; conIdx < condArr.length; conIdx++) {
      const colValue = allData[idx][condArr[conIdx].columnId.trim()];
      const value = condArr[conIdx].value;
      const operator = condArr[conIdx].operator.trim();
      const logical = (condArr[conIdx].logical || "&&").trim();
      if (operator === "==") {
        if (colValue == value) {
          if (logical === "||") {
            result = true;
            break;
          }
        } else {
          if (logical === "&&") {
            result = false;
          }
        }
      } else if (operator === "!=") {
        if (colValue != value) {
          if (logical === "||") {
            result = true;
            break;
          }
        } else {
          if (logical === "&&") {
            result = false;
          }
        }
      } else if (operator === ">") {
        if (colValue > value) {
          if (logical === "||") {
            result = true;
            break;
          }
        } else {
          if (logical === "&&") {
            result = false;
          }
        }
      } else if (operator === "<") {
        if (colValue < value) {
          if (logical === "||") {
            result = true;
            break;
          }
        } else {
          if (logical === "&&") {
            result = false;
          }
        }
      } else if (operator === ">=") {
        if (colValue >= value) {
          if (logical === "||") {
            result = true;
            break;
          }
        } else {
          if (logical === "&&") {
            result = false;
          }
        }
      } else if (operator === "<=") {
        if (colValue <= value) {
          if (logical === "||") {
            result = true;
            break;
          }
        } else {
          if (logical === "&&") {
            result = false;
          }
        }
      } else if (operator === "LIKE") {
        if (colValue.indexOf(value) > -1) {
          if (logical === "||") {
            result = true;
            break;
          }
        } else {
          if (logical === "&&") {
            result = false;
          }
        }
      } else {
        result = false;
      }
    }
    if (result === true) {
      returnData.push(allData[idx]);
    }
  }
  return returnData;
};

/**
 * @method
 * @name setUserData
 * @description 컴포넌트에 사용자 정의 데이터를 세팅한다.
 * @param {Object} comObj 컴포넌트 객체
 * @param {String} key 사용자 정의 데이터 key
 * @param {String} value 사용자 정의 데이터 value
 * @hidden N
 * @exception 
 * @example $c.data.setUserData(btn_search, "userId", "M000001");
 */
scwin.setUserData = function ($p, comObj, key, value) {
  comObj.setUserData("__" + key, value);
};

/**
 * @method
 * @name getUserData
 * @description 컴포넌트에 저장된 사용자 정의 데이터를 반환한다.
 * @param {Object} comObj 컴포넌트 객체
 * @param {String} key 사용자 정의 데이터 Key
 * @returns {String} 사용자 정의 데이터 value
 * @hidden N
 * @exception 
 * @example const userId = $c.data.getUserData(btn_search, "userId");
 */
scwin.getUserData = function ($p, comObj, key) {
  return comObj.getUserData("__" + key);
};

/**
 * @method
 * @name createHolidayDataList
 * @description 공휴일 데이터를 저장할 dlt_holiday DataList 객체를 생성하고 config.js 파일에 dlt_holiday DataList 객체 정보를 세팅한다.
 * @hidden N
 * @exception 
 * @example $c.data.createHolidayDataList($p);
 */
scwin.createHolidayDataList = function ($p) {
  const dcOption = {
    baseNode: "list",
    repeatNode: "map",
    saveRemovedData: "true"
  };
  $c.data.createDataList($p, "dlt_holiday", ["holiday", "holidayNm", "REST_CODE", "NOTE", "REST_SEQ"], ["text", "text", "text", "text", "text"], dcOption);

  // config.js 파일의 "inputCalendar/holidayRef/@value" 속성에 공휴일 데이터가 저장된 $p.top().dlt_holiday 정보를 세팅한다.
  // ※ 주의사항 
  // WebSquare.BootLoader.configurationJSON[0].WebSquare 정보에 직접 접근하는 방식은 비공개입니다.
  // WebSquare.BootLoader.configurationJSON[0].WebSquare 객체는 엔진 업데이트에 따라서 변경될 수 있으니, 공통 코드에서만 제한적으로 사용하시기 바랍니다.
  const webSquareConfig = WebSquare.BootLoader.configurationJSON[0].WebSquare;
  webSquareConfig.inputCalendar.holidayRef = {};
  webSquareConfig.inputCalendar.holidayRef["@value"] = "data:" + $p.top().$p.getFrameId() + "_dlt_holiday.holiday";
  webSquareConfig.calendar.holidayRef = {};
  webSquareConfig.calendar.holidayRef["@value"] = "data:" + $p.top().$p.getFrameId() + "_dlt_holiday.holiday";
};

/**
 * @method
 * @name loadHoliday
 * @description 공휴일 데이터를 조회해서 $p.top().dlt_holiday 객체에 저장한다.
 * @hidden N
 * @exception 
 * @example $c.data.loadHoliday($p);
 */
scwin.loadHoliday = function ($p) {
  const getHolidayOption = {
    id: "_sbm_getHoliday",
    action: "/holiday/selectHoliday",
    target: "data:json,dlt_holiday",
    method: "post",
    submitDoneHandler: function (e) {
      if (typeof $p.top().dlt_holiday === "object") {
        $p.top().dlt_holiday.setJSON(e.responseJSON.dlt_holiday);
      }
    },
    isProcessMsg: false
  };
  $c.sbm.executeDynamic($p, getHolidayOption, {});
};

/**
 * @method
 * @name setInitObj
 * @description 컴포넌트를 초기화 한다
 * @param {string} obj desc
 * @returns
 * @hidden N
 * @exception
 * @example
 */

scwin.setInitObj = function ($p, obj) {
  obj.init();
  const objArr = $c.util.getChildren($p, obj, {
    includePlugin: "autoComplete group",
    recursive: true
  });
  for (let i = 0; i < objArr.length; i++) {
    if (objArr[i].getPluginName() === "autoComplete") {
      objArr[i].setItem(objArr[i].selectedItem.orgLabel, objArr[i].selectedItem.value, objArr[i].itemsetObj.nodeset);
    } else {
      objArr[i].init();
    }
  }
};
/**
 * @method
 * @name dataListFilter
 * @description 데이터 리스트 필터 설정 함수
 * @param {string} _dataComp desc
 * @param {string} _condition desc
 * @param {string} _append desc
 * @param {string} options desc
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.dataListFilter = function ($p, _dataComp, _condition, _append, options) {
  try {
    var filterDs = $c.gus.object($p, _dataComp);
    var filterDsId = filterDs.getID();
    var conditions = _condition;
    var append = typeof _append == "undefined" ? true : _append;
    var cols = conditions.split(/\W+/g);
    var uniqCols = new Array();
    var sortArr = [];

    // 필터 컬럼 추출.
    $.each(cols, function (i, el) {
      if (el != "" && uniqCols.indexOf(el) == -1 && typeof filterDs.getColumnIndex(el) != "undefined") {
        uniqCols.push(el);
      }
    });

    // 문자열 길이로 재정렬
    uniqCols.sort(function (a, b) {
      if (a.length < b.length) return 1;
      if (a.length > b.length) return -1;
      return 0;
    });

    // 필터 설정 전 sort 상태 확인.
    if (filterDs && filterDs.sortStatusArr) {
      sortArr = filterDs.sortStatusArr;
    }

    // Like 필터 기능.
    if (typeof conditions == "string" && conditions.toUpperCase() == "LIKE") {
      if (options && typeof options.colId != "undefined" && typeof options.func != "undefined") {
        if (typeof filterDs.getColumnIndex(options.colId) == "undefined") {
          com.alert("like 사용자지정 필터 컬럼이 존재하지 않습니다.");
        } else if (typeof options.func == "function") {
          var isAppend = WebSquare.util.getBoolean(append) ? true : false;
          if (!isAppend) {
            filterDs.removeColumnFilterAll();
          }
          var func = options.func;
          if (typeof func == "function") {
            filterDs.setColumnFilter({
              type: 'func',
              colIndex: options.colId,
              key: func,
              condition: 'and'
            });
          }
        }
      } else {
        com.alert("like 사용자지정 필터 값이 잘못되었습니다.");
      }
    } else {
      // 일반필터 기능.
      var conditionArr = conditions.split(/[&]{2}|[|]{2}/);
      var conditionArr1 = new Array();
      var conditionArr2 = conditions.match(/[&]{2}|[|]{2}/g);

      // 필터조건 [|| , &&] 구분.
      for (var i = 0; i < conditionArr.length; i++) {
        if ((conditionArr[i] + "").trim() != "") {
          conditionArr1.push(conditionArr[i].trim());
        }
      }

      // 필터조건 정의.
      for (var i = 0; i < conditionArr1.length; i++) {
        var cond = conditionArr1[i];
        // cond = cond.replace(/\s/gi,"");
        var valArr = [cond];
        var xBy = "";
        if (cond.indexOf("==") > -1) {
          valArr = cond.split("==");
          xBy = "==";
        } else if (cond.indexOf("!=") > -1) {
          valArr = cond.split("!=");
          xBy = "!=";
        } else if (cond.indexOf(">") > -1) {
          valArr = cond.split(">");
          xBy = ">";
        } else if (cond.indexOf("<") > -1) {
          valArr = cond.split("<");
          xBy = "<";
        } else if (cond.indexOf(">=") > -1) {
          valArr = cond.split(">=");
          xBy = ">=";
        } else if (cond.indexOf("<=") > -1) {
          valArr = cond.split("<=");
          xBy = "<=";
        }
        for (var j = 0; j < valArr.length; j++) {
          var chgCnt = -1;
          for (var k = 0; k < uniqCols.length; k++) {
            var deQ = (valArr[j] + "").trim();
            if (deQ.indexOf(uniqCols[k]) > -1) {
              valArr[j] = valArr[j].replace(uniqCols[k], "####");
              chgCnt = k;
              break;
            }
          }
          if (chgCnt > -1) valArr[j] = valArr[j].replace(/####/g, filterDsId + ".getCellData(" + filterDsId + ".getFilteredRowIndex(rowIdx),'" + uniqCols[chgCnt] + "')");
        }
        if (xBy) {
          conditionArr1[i] = valArr[0] + xBy + valArr[1];
        } else {
          conditionArr1[i] = valArr[0];
        }
      }
      var returnConditions = "";
      if (conditionArr2 != null) {
        for (var i = 0; i < conditionArr1.length; i++) {
          if (typeof conditionArr2[i] !== "undefined") {
            if (typeof conditionArr1[i + 1] == "undefined" || conditionArr1[i + 1] == null || (conditionArr1[i + 1] + "").trim() == "") {
              returnConditions += conditionArr1[i];
            } else {
              returnConditions += conditionArr1[i] + conditionArr2[i];
            }
          } else {
            returnConditions += conditionArr1[i];
          }
        }
      } else {
        for (var i = 0; i < conditionArr1.length; i++) {
          returnConditions += conditionArr1[i];
        }
      }

      // 필터조건 새로정의 또는 필터 조건추가 여부.
      var isAppend = WebSquare.util.getBoolean(append) ? true : false;
      if (!isAppend) {
        filterDs.removeColumnFilterAll();
      }

      // 필터 설정.
      filterDs.setColumnFilter({
        type: 'func',
        colIndex: 0,
        key: function (cellData, tmpParam, rowIdx) {
          try {
            if (eval(returnConditions)) {
              return true;
            } else {
              return false;
            }
          } catch (e) {
            $p.log("[filter.setColumnFilter] Exception returnConditions :: " + returnConditions, e);
            return true;
          }
        },
        condition: 'and'
      });
    }

    // 정의 필터 이전 sort 재반영.
    if (sortArr.length > 1) {
      var sortIndex = "";
      var sortOrder = "";
      for (var i = 0; i < sortArr.length; i++) {
        var colId = sortArr[i].colID;
        var sortOrd = sortArr[i].sortOrder;
        if (filterDs.getColumnID(colId) && sortOrd) {
          if (sortIndex == "") {
            sortIndex += colId;
          } else {
            sortIndex += " " + colId;
          }
          if (sortOrder == "") {
            sortOrder += sortOrd;
          } else {
            sortOrder += " " + sortOrd;
          }
        }
      }
      filterDs.multisort({
        "sortIndex": sortIndex,
        "sortOrder": sortOrder
      });
    } else if (sortArr.length == 1) {
      var sortCol = sortArr[0].colID;
      var sortOrder = sortArr[0].sortOrder; // 1 : 오름차순, -1 : 내림차순
      if (sortOrder == 1) {
        sortOrder = 0;
      } else if (sortOrder == -1) {
        sortOrder = 1;
      } else {
        sortOrder = 2;
      }
      filterDs.sort(sortCol, sortOrder); // 0이면 오름차순 1이면 내림차순 2이면 정렬을 취소
    }
    return filterDs.getAllFilteredJSON();
  } catch (e) {
    console.log("==catch dataListFilter==");
  }
};

/**
 * @method
 * @name getMemInfo
 * @description 사용자 정보
 * @param {string} key desc
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.getMemInfo = function ($p, key) {
  try {
    let obj = "";
    let maxC = 0;
    if (typeof $p.top().tac_layout === "undefined") {
      let p = _getP($p.top());
      if (p != "") {
        obj = p.dma_memInfo;
      } else {
        obj = undefined;
      }
    } else {
      obj = $p.top().dma_memInfo;
    }
    if (typeof obj !== "undefined" && key) {
      return obj.get(key);
    } else if (typeof obj !== "undefined") {
      return obj.getJSON();
    } else {
      return "";
    }
    function _getP(f) {
      if (typeof f.tac_layout === "undefined") {
        if (maxC > 4) return "";
        maxC++;
        return _getP(f.$p.parent());
      } else {
        return f;
      }
    }
  } catch (e) {
    console.log("### getMemInfo");
    return "";
  }
};

/**
 * @method
 * @name getSysNm
 * @description 코드로 시스템 명 가져오기
 * @param {string} cd desc
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.getSysNm = function ($p, cd) {
  let ret = "";
  switch (cd) {
    case 'FW':
      ret = "국제물류";
      break;
    case 'CM':
      ret = "공통";
      break;
    case 'DS':
      ret = "물류";
      break;
    case 'AC':
      ret = "회계";
      break;
    case 'EQ':
      ret = "정비";
      break;
    default:
      ret = "";
      break;
  }
  return ret;
};

/**
 * @method
 * @name isMenu1
 * @description 1depth 메뉴 여부
 * @param {string} menuNm 메뉴명
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.isMenu1 = function ($p, menuNm) {
  let ret = false;
  switch (menuNm) {
    case '국제물류':
    case '물류':
    case '엔콜':
    case '정비':
    case '회계':
    case '공통':
      ret = true;
      break;
    default:
      ret = false;
      break;
  }
  return ret;
};
/**
 * @method
 * @name setPopupTitle
 * @description 팝업 타이틀 변경
 * @param {string} popNm 변경할 팝업 타이틀 명
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.setPopupTitle = function ($p, popNm) {
  try {
    let frm;
    if ($p.isWFramePopup() || typeof $p.top().tac_layout !== "undefined") {
      frm = $p.getFrame();
    } else {
      frm = WebSquare.getBody();
    }
    objArr = $c.util.getChildren($p, frm, {
      includePlugin: "textbox",
      recursive: true
    });
    let ret = false;
    for (var idx in objArr) {
      if (objArr[0].org_id == "txt_h1") {
        objArr[0].setValue(popNm);
        ret = true;
        break;
      }
    }
    return ret;
  } catch (e) {
    console.log("###### setPopupTitle ==>" + e);
  }
};

/**
 * @method
 * @name deleteRows
 * @description desc
 * @param {string} gridID 그리드 아이디
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.deleteRows = function ($p, gridID, chkCol) {
  try {
    let dltObj = null,
      grdObj = null,
      chkColumn = null;
    chkColumn = chkCol || "chk";
    if (typeof gridID === "string") {
      grdObj = $c.util.getComponent($p, gridID);
    } else {
      grdObj = gridID;
    }
    dltObj = $c.gus.object($p, grdObj.getDataList());
    let rows = grdObj.getCheckedIndex(chkColumn);
    for (var idx in rows) {
      if (grdObj.getRowStatus(rows[idx]) == "C") {
        dltObj.removeRow(rows[idx]);
      } else {
        dltObj.deleteRow(rows[idx]);
      }
    }
  } catch (ex) {
    console.error(ex);
  }
};

// GauceUtil 코드 리스트

scwin.gauceUtilList = [];
scwin.COMMON_CODE_INFO_UTIL = {
  LABEL: "name",
  VALUE: "code",
  FILED_ARR: ["code", "name"]
};

/**
 * @method
 * @name setGauceUtil
 * @description desc
 * @param {string} codeOptions desc
 * @param {string} callbackFunc desc
 * @hidden N
 * @exception 
 * @example $c.data.setGauceUtil
 */
/*
 * compID 기반으로 DataList를 생성하고, method/paramN만 전송하는 범용 공통코드 유틸
 * - codeOptions의 첫 번째 객체에서 통신 정보(method, paramN)를 가져옴
 * - compID를 DataList 생성의 기준 ID로 사용함
 */
scwin.setGauceUtil = function ($p, codeOptions, callbackFunc) {
  if (!codeOptions || codeOptions.length === 0) {
    if (typeof callbackFunc === "function") {
      callbackFunc();
    }
    return;
  }

  // 1. Array의 첫 번째 항목을 가져와 처리합니다. (배열에서 제거)
  const currentOption = codeOptions.shift();
  if (!currentOption) {
    if (typeof callbackFunc === "function") {
      callbackFunc();
    }
    return;
  }
  let dltId, compArr;

  // **Helper Function:** DataList 컬럼 정의 (유틸리티 내부에 두거나 별도 정의 필요)
  function _getCodeDataListOptions(infoArr) {
    const option = {
      "type": "dataList",
      "option": {
        "baseNode": "list",
        "repeatNode": "map"
      },
      "columnInfo": []
    };
    for (let idx in infoArr) {
      option.columnInfo.push({
        "id": infoArr[idx]
      });
    }
    return option;
  }

  // ----------------------------------------------------------------
  // 1. [UI 준비] DataList 생성 및 컴포넌트 바인딩
  // ----------------------------------------------------------------
  try {
    if (!currentOption.compID) {
      console.warn(`[$c.setGauceUtil] 항목에 compID가 없어 DataList를 생성할 수 없습니다.`);
      // compID가 없더라도 다음 항목 처리를 위해 재귀 호출
      scwin.setGauceUtil($p, codeOptions, callbackFunc);
      return;
    }

    // compID를 기준으로 DataList ID를 만듭니다.
    const uniqueCompId = currentOption.compID.replace(/[: ,]+/g, "_");
    ;
    // 지정한 DataList ID 접두사 사용: dlt_gauceUtil_컴포넌트ID
    dltId = "dlt_gauceUtil" + "_" + uniqueCompId;

    // 컬럼 정의 (scwin.COMMON_CODE_INFO_UTIL이 정의되어 있어야 함)
    const dataListOption = _getCodeDataListOptions(scwin.COMMON_CODE_INFO_UTIL.FILED_ARR);

    // 기존 DataList 정리 후 재생성
    if (typeof scwin.gauceUtilList[dltId] !== "undefined") {
      delete scwin.gauceUtilList[dltId];
      $p.data.remove(dltId);
    }

    // DataList 생성 (이 항목에 대한 DataList ID를 설정)
    dataListOption.id = dltId;
    $p.data.create(dataListOption);

    // 캐시 저장 공간 준비
    if (typeof scwin.gauceUtilList === "undefined") {
      scwin.gauceUtilList = {};
    }

    // 컴포넌트 바인딩
    compArr = currentOption.compID.replaceAll(" ", "").split(",");
    for (let j = 0; j < compArr.length; j++) {
      let tmpIdArr = compArr[j].split(":");
      if (tmpIdArr.length === 1) {
        // 단순 컴포넌트 (SelectBox 등)
        const comp = $c.util.getComponent($p, tmpIdArr[0]);
        if (comp) comp.setNodeSet("data:" + dltId, scwin.COMMON_CODE_INFO_UTIL.LABEL, scwin.COMMON_CODE_INFO_UTIL.VALUE);
      } else {
        // 그리드 컬럼
        let gridObj = $c.util.getComponent($p, tmpIdArr[0]);
        if (gridObj) gridObj.setColumnNodeSet(tmpIdArr[1], "data:" + dltId, scwin.COMMON_CODE_INFO_UTIL.LABEL, scwin.COMMON_CODE_INFO_UTIL.VALUE);
      }
    }
  } catch (ex) {
    console.error("[$c.setGauceUtil] UI Binding Error: ", ex);
    // 오류 발생 시에도 다음 항목 처리를 위해 재귀 호출
    scwin.setGauceUtil($p, codeOptions, callbackFunc);
    return;
  }

  // ----------------------------------------------------------------
  // 2. [Submission 설정 및 전송]
  // ----------------------------------------------------------------
  // Submission ID 충돌을 피하기 위해 고유 ID 사용
  const submissionId = "_sbm_searchGauce_" + dltId + "_" + Date.now();
  const searchCodeComboOption = {
    id: submissionId,
    action: "/GauceUtilService",
    target: "",
    isProcessMsg: false,
    submitDoneHandler: function (e) {
      // [응답 처리]
      try {
        if (e.responseStatusCode == 200) {
          const rawCodeString = e.responseText;
          if (typeof rawCodeString === 'string' && rawCodeString) {
            // 문자열 파싱 및 JSON 배열 생성
            const parsedData = rawCodeString.split(",").map(item => {
              const [code, name] = item.split(/[:^=]/);
              return {
                code: code || null,
                name: name || null
              };
            }).filter(obj => obj.code && obj.name);
            const dataListObj = $p.getComponentById(dltId); // 이 Submission이 처리할 DataList ID 사용

            if (dataListObj) {
              dataListObj.setJSON(parsedData);
              scwin.gauceUtilList[dltId] = parsedData;
            } else {
              console.error(`[gauceUtil] DataList ID ${dltId}를 찾을 수 없습니다. (compID 오류 가능성)`);
            }
          } else {
            console.warn(`[gauceUtil] 응답 텍스트가 비어있거나 유효한 문자열이 아닙니다. (ID: ${dltId})`);
          }
        }
      } catch (ex) {
        console.error("Submission Callback 처리 중 오류 발생:", ex);
      }

      // 3. [재귀 호출 및 콜백 처리]
      $p.deleteSubmission(submissionId); // Submission 객체 삭제

      if (codeOptions.length > 0) {
        // 남은 항목이 있으면 다음 항목을 처리하도록 재귀 호출
        scwin.setGauceUtil($p, codeOptions, callbackFunc);
      } else if (typeof callbackFunc === "function") {
        // 모든 항목 처리가 끝났으면 최종 콜백 실행
        callbackFunc();
      }
    }
  };

  // Submission 생성 및 전송 로직
  $c.sbm.create($p, searchCodeComboOption);
  let sbmObj = $c.util.getComponent($p, submissionId);

  // [데이터 전송 로직] - currentOption의 method, paramN만 포함된 JSON 생성
  const reqData = {
    "method": currentOption.method
  };
  for (let k = 1; k <= 6; k++) {
    let key = "param" + k;
    if (currentOption[key] !== undefined && currentOption[key] !== null) {
      reqData[key] = currentOption[key];
    }
  }
  sbmObj.setRequestData(reqData);
  $p.executeSubmission(submissionId);
};
scwin.DS_COMMON_INFO_UTIL = {
  // DataList에 사용할 레이블/값 컬럼 ID를 정의합니다.
  LABEL: "name",
  VALUE: "code",
  // DataList에 생성할 전체 컬럼 ID 배열입니다.
  FILED_ARR: ["code", "name", "etc1", "etc2"]
  // 실제 응답 데이터 구조에 따라 이 배열은 변경될 수 있습니다.
};

/**
 * @method
 * @name setDsCommonUtil
 * @description DsCommonUtil 대응 함수
 * @param
 * @returns
 * @hidden N
 * @exception
 * @example
 */

scwin.setDsCommonUtil = function ($p, codeOptions, callbackFunc) {
  // ===============================================
  // 1. 서버가 기대하는 상수 정의 (함수 내부 최상단)
  // ===============================================
  const DS_FIELD_CONSTANTS = {
    "CD": 1,
    "UPPER_CD": 2,
    "CD_NM": 3,
    "CD_ENG_NM": 4,
    "CD_NM_ABBR": 5,
    "CD_ENG_NM_ABBR": 6,
    "USE_YN": 7,
    "SORT_SEQ": 8,
    "CD_DESC": 9,
    "FLTR_CD_1": 10,
    "FLTR_CD_2": 11,
    "FLTR_CD_3": 12
    // 필요한 상수를 모두 정의합니다.
  };
  // ===============================================

  if (!codeOptions || codeOptions.length === 0) {
    if (typeof callbackFunc === "function") {
      callbackFunc();
    }
    return;
  }
  codeOptions = Array.isArray(codeOptions) ? codeOptions.slice() : [];

  // 1. Array의 첫 번째 항목을 가져와 처리합니다. (배열에서 제거)
  const currentOption = codeOptions.shift();
  if (!currentOption) {
    if (typeof callbackFunc === "function") {
      callbackFunc();
    }
    return;
  }
  let dltId, compArr;

  // **Helper Function:** DataList 컬럼 정의 (DS_COMMON_INFO_UTIL 사용)
  function _getDsDataListOptions(infoArr) {
    const option = {
      "type": "dataList",
      "option": {
        "baseNode": "list",
        "repeatNode": "map"
      },
      "columnInfo": []
    };
    for (let idx in infoArr) {
      option.columnInfo.push({
        "id": infoArr[idx]
      });
    }
    return option;
  }

  // ----------------------------------------------------------------
  // 1. [UI 준비] DataList 생성 및 컴포넌트 바인딩
  // ----------------------------------------------------------------
  try {
    if (!currentOption.compID) {
      console.warn(`[$c.setDsCommonUtil] 항목에 compID가 없어 DataList를 생성할 수 없습니다.`);
      scwin.setDsCommonUtil($p, codeOptions, callbackFunc);
      return;
    }
    const uniqueCompId = currentOption.compID.split(":")[0].split(",")[0].trim();
    dltId = "dlt_dsCommonUtil" + "_" + uniqueCompId;

    // DataList 컬럼 정의
    const existingDataList = $p.getComponentById(dltId);

    // DataList 생성 로직을 완전히 건너뜁니다.
    if (!existingDataList) {
      let dataListOption = _getDsDataListOptions(scwin.DS_COMMON_INFO_UTIL.FILED_ARR);
      dataListOption.id = dltId;
      $p.data.create(dataListOption);

      // dsCommonUtilList에 캐시 초기화 등 필요한 로직이 있다면 여기서 처리합니다.
      if (typeof scwin.dsCommonUtilList === "undefined") {
        scwin.dsCommonUtilList = {};
      }
    }

    // 컴포넌트 바인딩
    compArr = currentOption.compID.replaceAll(" ", "").split(",");
    for (let j = 0; j < compArr.length; j++) {
      let tmpIdArr = compArr[j].split(":");
      const LABEL_FIELD = scwin.DS_COMMON_INFO_UTIL.LABEL;
      const VALUE_FIELD = scwin.DS_COMMON_INFO_UTIL.VALUE;
      if (tmpIdArr.length === 1) {
        // 단순 컴포넌트 (SelectBox 등)
        const comp = $c.util.getComponent($p, tmpIdArr[0]);
        if (comp) comp.setNodeSet("data:" + dltId, LABEL_FIELD, VALUE_FIELD);
      } else {
        // 그리드 컬럼
        let gridObj = $c.util.getComponent($p, tmpIdArr[0]);
        if (gridObj) gridObj.setColumnNodeSet(tmpIdArr[1], "data:" + dltId, LABEL_FIELD, VALUE_FIELD);
      }
    }
  } catch (ex) {
    console.error("[$c.setDsCommonUtil] UI Binding Error: ", ex);
    scwin.setDsCommonUtil($p, codeOptions, callbackFunc);
    return;
  }

  // ----------------------------------------------------------------
  // 2. [Submission 설정 및 전송]
  // ----------------------------------------------------------------
  const submissionId = "_sbm_searchDsCommon_" + dltId + "_" + Date.now();
  const finalizeDsCommonSubmission = function () {
    try {
      $p.deleteSubmission(submissionId);
    } catch (deleteEx) {
      console.warn("[$c.setDsCommonUtil] Submission cleanup warning:", deleteEx);
    }
    if (codeOptions.length > 0) {
      scwin.setDsCommonUtil($p, codeOptions, callbackFunc);
    } else if (typeof callbackFunc === "function") {
      callbackFunc();
    }
  };
  const searchDsOption = {
    id: submissionId,
    action: "/DsUtilService",
    target: "",
    isProcessMsg: false,
    submitDoneHandler: function (e) {
      // [응답 처리]
      try {
        if (e.responseStatusCode == 200) {
          const rawCodeString = e.responseText;
          if (typeof rawCodeString === 'string' && rawCodeString) {
            // code, name, etc1, etc2 모두 필요한 경우가 있어서 추가
            let outputFields = JSON.parse(e.requestBody).param4;
            let parsedData = null;
            if (outputFields.length == 4) {
              // 응답 문자열 파싱 로직 (기존 GauceUtil 로직 유지)
              parsedData = rawCodeString.split(",").map(item => {
                const [code, name, etc1, etc2] = item.split(/[:^=]/);
                // DataList에 설정된 컬럼 ID에 맞게 키를 설정 (code, name)
                return {
                  code: code ?? null,
                  name: name ?? null,
                  etc1: etc1 ?? null,
                  etc2: etc2 ?? null
                };
              }).filter(obj => obj.code && obj.name);
              // code, name, etc1까지만 필요한 경우도 있을까해서 추가
            } else if (outputFields.length == 3) {
              // 응답 문자열 파싱 로직 (기존 GauceUtil 로직 유지)
              parsedData = rawCodeString.split(",").map(item => {
                const [code, name, etc1] = item.split(/[:^=]/);
                // DataList에 설정된 컬럼 ID에 맞게 키를 설정 (code, name)
                return {
                  code: code ?? null,
                  name: name ?? null,
                  etc1: etc1 ?? null
                };
              }).filter(obj => obj.code && obj.name);
            } else {
              // 응답 문자열 파싱 로직 (기존 GauceUtil 로직 유지)
              parsedData = rawCodeString.split(",").map(item => {
                const [code, name] = item.split(/[:^=]/);
                // DataList에 설정된 컬럼 ID에 맞게 키를 설정 (code, name)
                return {
                  code: code || null,
                  name: name || null
                };
              }).filter(obj => obj.code && obj.name);
            }
            const dataListObj = $p.getComponentById(dltId);
            if (dataListObj && Array.isArray(parsedData)) {
              dataListObj.setJSON(parsedData, true);
              scwin.dsCommonUtilList[dltId] = parsedData; // 캐시에 저장
            } else {
              console.error(`[dsCommonUtil] DataList ID ${dltId}를 찾을 수 없거나 응답이 유효한 배열이 아닙니다.`);
            }
          } else {
            console.warn(`[dsCommonUtil] 응답 텍스트가 비어있거나 유효한 문자열이 아닙니다. (ID: ${dltId})`);
          }
        }
      } catch (ex) {
        console.error("Submission Callback 처리 중 오류 발생:", ex);
      }

      // 3. [재귀 호출 및 콜백 처리]
      finalizeDsCommonSubmission();
    },
    submitErrorHandler: function (e) {
      console.error("[$c.setDsCommonUtil] Submission Error: ", e);
      finalizeDsCommonSubmission();
    }
  };

  // Submission 생성 및 전송 로직
  $c.sbm.create($p, searchDsOption);
  let sbmObj = $c.util.getComponent($p, submissionId);

  // [데이터 전송 로직] - currentOption의 method, paramN만 포함된 JSON 생성
  const reqData = {
    "method": currentOption.method
  };

  // 현재 currentOption에 정의된 param 중 가장 높은 인덱스를 찾습니다.
  let maxParamIndex = 0;
  for (let k = 1; k <= 6; k++) {
    let key = "param" + k;
    if (currentOption[key] !== undefined && currentOption[key] !== null) {
      reqData[key] = currentOption[key]; // 기존 param은 일단 reqData에 복사
      maxParamIndex = k;
    }
  }

  // === 핵심 로직: 문자열 배열을 숫자 상수 배열로 변환 후 마지막 param에 할당 ===
  if (Array.isArray(currentOption.outputFields) && currentOption.outputFields.length > 0) {
    const fieldConstants = [];
    currentOption.outputFields.forEach(fieldName => {
      const constantValue = DS_FIELD_CONSTANTS[fieldName];
      if (constantValue !== undefined) {
        fieldConstants.push(constantValue);
      } else {
        console.warn(`[setDsCommonUtil] 정의되지 않은 출력 필드 이름: ${fieldName}`);
      }
    });
    if (fieldConstants.length > 0) {
      // 마지막 인덱스 결정: maxParamIndex가 6보다 작으면 다음 인덱스에 추가
      const targetParamIndex = maxParamIndex < 6 ? maxParamIndex + 1 : maxParamIndex;
      const targetParamKey = "param" + targetParamIndex;

      // 변환된 숫자 배열을 targetParamKey에 할당/덮어씁니다.
      reqData[targetParamKey] = fieldConstants;
      console.log(`[setDsCommonUtil] Output Fields를 ${targetParamKey}에 할당했습니다. 값: `, fieldConstants);
    }
  }
  // =========================================================

  sbmObj.setRequestData(reqData);
  $p.executeSubmission(submissionId);
};

/**
 * @method
 * @name getDMessage
 * @description DMessage.getInstance().getMessage 대응 함수
 * @param {String} sysCode
 * @param {String} msgCode
 * @param {String[]} paramArray
 * @returns {String} DMessage
 * @hidden N
 * @exception
 * @example
 */
scwin.getDMessage = async function ($p, sysCode, msgCode, paramArray) {
  if ($c.util.isEmpty($p, sysCode)) {
    $c.win.alert($p, "시스템코드는 필수 값 입니다.");
  }
  if ($c.util.isEmpty($p, msgCode)) {
    $c.win.alert($p, "메세지코드는 필수 값 입니다.");
  }
  let paramJson = {
    "sysCode": sysCode,
    "msgCode": msgCode,
    "paramArray": paramArray
  };
  return new Promise(function (resolve, reject) {
    WebSquare.net.ajax({
      action: "/DMessage",
      method: "POST",
      mediatype: "application/json; charset=UTF-8",
      requestData: JSON.stringify(paramJson),
      // WebSquare 버전에 따라 responseJSON/responseText 등이 다를 수 있음
      success: function (e) {
        resolve(e.responseText);
      },
      error: function (e) {
        reject();
      }
    });
  });
};

/**
 * @method 조건에 해당하면 로그인후에 AUTO POP-UP 실행
 * @name cfAutoPopUpRun
 * @description desc
 * @param {string} pW desc
 * @param {string} pH desc
 * @param {string} pExpDay desc
 * @param {string} pSQLID desc
 * @param {string} pCallURL desc
 * @param {string} pUserId desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.cfAutoPopUpRun = async function ($p, pW, pH, pExpDay, pSQLID, pCallURL, pUserId, pSysCd) {
  let responseText = "";
  let data = null;
  try {
    responseText = await scwin.cfAutoPopUpRunRequest($p, pSQLID, pUserId, pSysCd);
    data = JSON.parse(responseText);
  } catch (ex) {
    console.error("[data cfAutoPopUpRun] popup lookup failed:", pSQLID, pSysCd || "CommonEBC", ex);
    return;
  }
  console.log("[data cfAutoPopUpRun] data: ", data);
  if (pW == "" || pH == "") {
    pW = 800;
    pH = 576;
  }
  const gauceList = data && Array.isArray(data.GAUCE) ? data.GAUCE : [];
  let nCnt = Number(gauceList[0] ? gauceList[0].col1 : 0);
  let vCallURL = "";
  console.log("[data cfAutoPopUpRun] nCnt: ", nCnt);
  if (nCnt > 0) {
    let saved = WebSquare.localStorage.getItem(pSQLID);
    let isBlocked = false;
    if (saved) {
      if (Number(saved) > new Date().getTime()) {
        isBlocked = true;
      }
    }
    if (!isBlocked) {
      vCallURL = "/ui/cm/bc/rentloan/AutoPopUp.xml?pCookieID=" + pSQLID + "&pCallURL=" + pCallURL + "&pExpDay=" + pExpDay;
      let now = new Date();
      let win_name = now.getHours().toString() + now.getMinutes().toString() + now.getSeconds().toString();
      let data = {
        pCookieID: pSQLID,
        pCallURL: pCallURL,
        pExpDay: pExpDay
      };
      let opts = {
        id: win_name,
        popupName: "Auto-PopUp",
        width: pW + "px",
        height: pH + "px"
      };
      await $c.win.openPopup($p, vCallURL, opts, data);
    }
  }
};

/**
 * @method
 * @name setCommonComboUtil
 * @description 그리드 내의 커먼콤보를 위한 set
 * @param
 * @returns
 * @hidden N
 * @exception
 * @migrationStatus
 * @example
 */
scwin.setCommonComboUtil = function ($p, comboOptions, callbackFunc) {
  if (!comboOptions || comboOptions.length === 0) {
    if (typeof callbackFunc === "function") callbackFunc();
    return;
  }
  const currentOption = comboOptions.shift();
  if (!currentOption) {
    if (typeof callbackFunc === "function") callbackFunc();
    return;
  }
  let dltId;
  let compArr;
  try {
    const uniqueCompId = currentOption.compID.split(":")[0].split(",")[0].trim();
    dltId = "dlt_commonCombo_" + uniqueCompId;
    const existingDataList = $p.getComponentById(dltId);
    if (!existingDataList) {
      let dataListOption = {
        id: dltId,
        type: "dataList",
        option: {
          baseNode: "list",
          repeatNode: "map"
        },
        columnInfo: [{
          id: "code",
          dataType: "text"
        }, {
          id: "name",
          dataType: "text"
        }, {
          id: "sub",
          dataType: "text"
        }]
      };
      $p.data.create(dataListOption);
    }
    compArr = currentOption.compID.replaceAll(" ", "").split(",");
    for (let j = 0; j < compArr.length; j++) {
      let tmpIdArr = compArr[j].split(":");
      if (tmpIdArr.length === 1) {
        const comp = $c.util.getComponent($p, tmpIdArr[0]);
        if (comp) comp.setNodeSet("data:" + dltId, "name", "code");
      } else {
        let gridObj = $c.util.getComponent($p, tmpIdArr[0]);
        if (gridObj) gridObj.setColumnNodeSet(tmpIdArr[1], "data:" + dltId, "name", "code");
      }
    }
  } catch (ex) {
    console.error("[setCommonComboUtil] UI Binding Error:", ex);
    scwin.setCommonComboUtil($p, comboOptions, callbackFunc);
    return;
  }
  const submissionId = "_sbm_commonCombo_" + dltId + "_" + Date.now();
  const searchOption = {
    id: submissionId,
    action: "/CommonComboService",
    target: "",
    isProcessMsg: false,
    submitDoneHandler: function (e) {
      try {
        if (e.responseStatusCode == 200) {
          const raw = e.responseText;
          if (!raw) return;
          let parsedData = [];

          // ===== OPTION HTML FORMAT =====
          if (raw.indexOf("<option") > -1) {
            raw.replace(/<option\s+value=["']?([^"'>]+)["']?>(.*?)<\/option>/gi, function (_, value, text) {
              parsedData.push({
                code: value || null,
                name: text || null,
                sub: null
              });
            });
          } else {
            // ===== code^name^sub FORMAT =====
            parsedData = raw.split(",").map(item => {
              const parts = item.split("^");
              return {
                code: parts[0] || null,
                name: parts[1] || null,
                sub: parts[2] || null
              };
            }).filter(obj => obj.code && obj.name);
          }
          const dataListObj = $p.getComponentById(dltId);
          if (dataListObj) {
            dataListObj.setJSON(parsedData, true);
          }
        }
      } catch (ex) {
        console.error("CommonCombo Callback Error:", ex);
      }
      $p.deleteSubmission(submissionId);
      if (comboOptions.length > 0) {
        scwin.setCommonComboUtil($p, comboOptions, callbackFunc);
      } else if (typeof callbackFunc === "function") {
        callbackFunc();
      }
    }
  };
  $c.sbm.create($p, searchOption);
  let sbmObj = $c.util.getComponent($p, submissionId);
  let reqData = {
    method: currentOption.method
  };
  for (let i = 1; i <= 6; i++) {
    let key = "param" + i;
    if (currentOption[key] !== undefined) {
      reqData[key] = currentOption[key];
    }
  }
  sbmObj.setRequestData(reqData);
  $p.executeSubmission(submissionId);
};

/**
 * @method
 * @name cfNodeMoveChkOfTreeMenuRequest
 * @description cfNodeMoveChkOfTreeMenuRequest 
 * @param
 * @returns
 * @hidden N
 * @exception
 * @migrationStatus
 * @example
 */
scwin.cfNodeMoveChkOfTreeMenuRequest = function ($p, pMenuID, pUpMenuID, pSQLID) {
  return new Promise(function (resolve, reject) {
    let pAction = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" + "&queryId=" + pSQLID + "&param1=" + pMenuID + "&param2=" + pUpMenuID + "&param3=" + "" + "&param4=" + "" + "&param5=" + "" + "&param6=" + "" + "&param7=" + "" + "&param8=" + "" + "&param9=" + "" + "&param10=" + "" + "&param11=" + "" + "&param12=" + "" + "&param13=" + "" + "&param14=" + "";
    WebSquare.net.ajax({
      action: pAction,
      method: "POST",
      mediatype: "application/json; charset=UTF-8",
      success: function (e) {
        resolve(e.responseText);
      },
      error: function (e) {
        reject(e);
      }
    });
  });
};

/**
 * @method
 * @name fn_isBusiNoByValue
 * @description fn_isBusiNoByValue
 * @param
 * @returns
 * @hidden N
 * @exception
 * @migrationStatus
 * @example
 */
scwin.fn_isBusiNoByValue = function ($p, strNo) {
  // 하이픈 제거
  strNo = String(strNo).replace(/-/g, "");

  // 사업자번호는 숫자 10자리
  if (!/^\d{10}$/.test(strNo)) {
    return false;
  }
  var sum = 0;
  var getlist = [];
  var chkvalue = [1, 3, 7, 1, 3, 7, 1, 3, 5];
  for (var i = 0; i < 10; i++) {
    getlist[i] = Number(strNo.substring(i, i + 1));
  }
  for (var j = 0; j < 9; j++) {
    sum += getlist[j] * chkvalue[j];
  }
  sum += parseInt(getlist[8] * 5 / 10, 10);
  var sidliy = sum % 10;
  var sidchk = 0;
  if (sidliy !== 0) {
    sidchk = 10 - sidliy;
  } else {
    sidchk = 0;
  }
  if (sidchk !== getlist[9]) {
    return false;
  }
  return true;
};

/**
 * @method
 * @name PhoneChk
 * @description PhoneChk
 * @param
 * @returns
 * @hidden N
 * @exception
 * @migrationStatus
 * @example
 */
scwin.PhoneChk = function ($p, obj) {
  if (obj == "") return;
  var value = obj;

  // 숫자만 체크 (기존 containsCharsOnly 대체)
  if (/^[0-9]+$/.test(value)) {
    switch (value.length) {
      case 11:
        if (value.substr(0, 2) == '02') {
          value = value.substr(0, 2) + '-' + value.substr(2, 4) + '-' + value.substr(6, 4);
        } else {
          value = value.substr(0, 3) + '-' + value.substr(3, 4) + '-' + value.substr(7, 4);
        }
        break;
      case 10:
        if (value.substr(0, 2) == '02') {
          value = value.substr(0, 2) + '-' + value.substr(2, 4) + '-' + value.substr(6, 4);
        } else {
          value = value.substr(0, 3) + '-' + value.substr(3, 3) + '-' + value.substr(6, 4);
        }
        break;
      case 9:
        if (value.substr(0, 2) == '02') {
          value = value.substr(0, 2) + '-' + value.substr(2, 3) + '-' + value.substr(5, 4);
        } else {
          value = value.substr(0, 3) + '-' + value.substr(3, 3) + '-' + value.substr(6, 4);
        }
        break;
      default:
        $c.win.alert($p, '전화번호 입력이 잘못되었습니다.');
        return;
    }
  }
  var phonestr = /^0\d{1,2}-\d{3,4}-\d{4}$/;
  if (value != "") {
    if (!value.match(phonestr)) {
      $c.win.alert($p, "번호 형식이 올바르지 않거나 '-'를 생략하셨습니다.");
      return false;
    }
    var str = value.substr(1, 2);
    if (!(str == "10" || str == "11" || str == "13" || str == "16" || str == "17" || str == "18" || str == "19" || str == "2-" || str == "31" || str == "32" || str == "33" || str == "41" || str == "42" || str == "43" || str == "51" || str == "52" || str == "53" || str == "54" || str == "55" || str == "61" || str == "62" || str == "63" || str == "64")) {
      $c.win.alert($p, "지역 번호를 정확하게 입력하세요.");
      return false;
    }
  }
  return value;
};

/**
 * @method
 * @name PhoneChk
 * @description PhoneChk
 * @param
 * @returns
 * @hidden N
 * @exception
 * @migrationStatus
 * @example
 */
scwin.fn_phoneChk = function ($p, obj) {
  if (obj == "") return;
  var value = obj.getValue();

  // 숫자만 체크 (기존 containsCharsOnly 대체)
  if (/^[0-9]+$/.test(value)) {
    switch (value.length) {
      case 11:
        if (value.substr(0, 2) == '02') {
          value = value.substr(0, 2) + '-' + value.substr(2, 4) + '-' + value.substr(6, 4);
        } else {
          value = value.substr(0, 3) + '-' + value.substr(3, 4) + '-' + value.substr(7, 4);
        }
        break;
      case 10:
        if (value.substr(0, 2) == '02') {
          value = value.substr(0, 2) + '-' + value.substr(2, 4) + '-' + value.substr(6, 4);
        } else {
          value = value.substr(0, 3) + '-' + value.substr(3, 3) + '-' + value.substr(6, 4);
        }
        break;
      case 9:
        if (value.substr(0, 2) == '02') {
          value = value.substr(0, 2) + '-' + value.substr(2, 3) + '-' + value.substr(5, 4);
        } else {
          value = value.substr(0, 3) + '-' + value.substr(3, 3) + '-' + value.substr(6, 4);
        }
        break;
      default:
        $c.win.alert($p, '전화번호 입력이 잘못되었습니다.');
        return;
    }
  }
  var phonestr = /^0\d{1,2}-\d{3,4}-\d{4}$/;
  if (value != "") {
    if (!value.match(phonestr)) {
      $c.win.alert($p, "번호 형식이 올바르지 않거나 '-'를 생략하셨습니다.");
      return false;
    }
    var str = value.substr(1, 2);
    if (!(str == "10" || str == "11" || str == "13" || str == "16" || str == "17" || str == "18" || str == "19" || str == "2-" || str == "31" || str == "32" || str == "33" || str == "41" || str == "42" || str == "43" || str == "51" || str == "52" || str == "53" || str == "54" || str == "55" || str == "61" || str == "62" || str == "63" || str == "64")) {
      $c.win.alert($p, "지역 번호를 정확하게 입력하세요.");
      return false;
    }
  }
  obj.setValue(value);
};

/**
 * @method
 * @name onlyNumber
 * @description onlyNumber
 * @param
 * @returns
 * @hidden N
 * @exception
 * @migrationStatus
 * @example
 */
scwin.onlyNumber = function ($p, e) {
  var key = e.keyCode || e.which;
  // 허용키
  if (key === 8 ||
  // backspace
  key === 9 ||
  // tab
  key === 13 ||
  // enter
  key === 46 ||
  // delete
  key >= 37 && key <= 40 // 방향키
  ) {
    return;
  }

  // 숫자
  if (key < 48 || key > 57) {
    e.preventDefault();
    return false;
  }
};

/**
 * @method
 * @name applyGridViewGroupExpr
 * @description applyGridViewGroupExpr
 * @param
 * @returns
 * @hidden N
 * @exception
 * @migrationStatus
 * @example
 */
scwin.applyGridViewGroupExpr = function ($p, dataComp, gViewComp, sGroupExpr, options) {
  try {
    let sGviewID = gViewComp.getOriginalID();

    // 순서 주의
    let oGroupExprArr = sGroupExpr.split(',');
    let oJsonArr = dataComp.getAllJSON();

    // 데이터가 없다면 초기화
    if (oJsonArr.length == 0) {
      let sDefStyle = gViewComp.getUserData('oDefStyle') || gViewComp.getGridStyle();
      gViewComp.setGridStyle(JSON.parse(sDefStyle));
      return;
    }
    let sGroupKeyArr = oGroupExprArr[0].split(':');
    let sCntKey = oGroupExprArr[1];
    let sIterKeyArr = oGroupExprArr[2].split(':');
    let oGroupExprJson = scwin.getGroupExprJson($p, oJsonArr, sGroupKeyArr, sCntKey, sIterKeyArr);
    let nGroupCnt = oGroupExprJson.nGroupCnt;
    let oCntKeyValArr = oGroupExprJson.oCntKeyValArr;
    let oRows = oGroupExprJson.oRows;
    let oColumnKeys = oGroupExprJson.oColumnKeys;

    // nGroupCnt 키 반복 데이터가 없으면 초기화
    if (nGroupCnt == 0) {
      let sDefStyle = gViewComp.getUserData('oDefStyle') || gViewComp.getGridStyle();
      gViewComp.setGridStyle(JSON.parse(sDefStyle));
      return;
    }
    let scopeObj = gViewComp.getScopeWindow().$p;

    // 1. DataList 생성.
    let oOriDataCompInfo = dataComp.getInfo();
    let oOriColumnInfo = oOriDataCompInfo.columnInfo;

    // let sDataCompID = dataComp.getID() + '_GroupExpr';
    let sDataCompID = dataComp.org_id + '_GroupExpr';
    scopeObj.data.remove(sDataCompID);
    let oColumnInfoArr = [];

    // sGroupKeyArr 정보를 담는다.
    for (let idx = 0, iCnt = sGroupKeyArr.length; idx < iCnt; idx++) {
      let sKey = sGroupKeyArr[idx];
      let oColInfo = oOriColumnInfo[sKey];
      let oTmpInfo;
      if (oColInfo) {
        oTmpInfo = {
          ...oColInfo
        };
      } else {
        oTmpInfo = {
          'id': sKey,
          'dataType': 'text'
        };
      }
      oColumnInfoArr.push(oTmpInfo);
    }

    // sGroupKeyArr 를 제외한 컬럼들
    for (let idx = 0, iCnt = oColumnKeys.length; idx < iCnt; idx++) {
      let sKey = oColumnKeys[idx];
      if (sGroupKeyArr.includes(sKey)) continue;

      // 넘버림 되지 않은 원본 컬럼을 찾는다.
      let oOriKey = sKey.replace(/_\d+$/, '');
      let oColInfo = oOriColumnInfo[oOriKey];
      let oTmpInfo;
      if (oColInfo) {
        oTmpInfo = {
          ...oColInfo
        };
        oTmpInfo['id'] = sKey;
      } else {
        oTmpInfo = {
          'id': sKey,
          'dataType': 'text'
        };
      }
      oColumnInfoArr.push(oTmpInfo);
    }
    scopeObj.data.create({
      'id': sDataCompID,
      'type': 'dataList',
      'option': {
        'baseNode': 'list',
        'repeatNode': 'map'
      },
      'columnInfo': oColumnInfoArr
    });
    scopeObj.getComponentById(sDataCompID).setJSON(oRows);

    // 2. GridView 생성.
    // 기준이 되는 정보 조회
    let sDefStyle = gViewComp.getUserData('oDefStyle') || gViewComp.getGridStyle();
    let oExStyle = scwin.expandGridLayout($p, sDefStyle, nGroupCnt, oCntKeyValArr, oColumnKeys, options);
    oExStyle.A.dataList = 'data:' + sDataCompID;
    gViewComp.setGridStyle(oExStyle);

    // setGridStyle 를 하면 gViewComp 는 바뀐다..
    let oGview = scopeObj.getComponentById(sGviewID);
    if (typeof oGview.getUserData('oDefStyle') == 'undefined') oGview.setUserData('oDefStyle', sDefStyle);
  } catch (e) {
    console.log(e);
  }
};

/**
 * @method
 * @name expandGridLayout
 * @description 가변형 그리드 레이아웃 확장 함수
 * @param {string|object} sLayoutStr - 그리드 레이아웃 JSON (문자열 또는 객체)
 * @param {number} nGroupCnt - 가로 확장 반복 횟수 (예: 5)
 * @param {array} oCntKeyValArr - 헤더 대분류($xkeyname_$$)에 들어갈 명칭 배열
 * @param {array} oColumnKeys - 바디 구성을 위한 실제 데이터 키 배열
 * @returns {object} 확장된 레이아웃 객체
 * @hidden N
 * @exception
 * @migrationStatus
 * @example
 */

scwin.expandGridLayout = function ($p, sLayoutStr, nGroupCnt, oCntKeyValArr, oColumnKeys, options = {}) {
  // 1. JSON 변환
  var layout = typeof sLayoutStr === 'string' ? JSON.parse(sLayoutStr) : sLayoutStr;

  // 반복횟수를 답아 Colspan 시 참조한다.
  options.nGroupCnt = nGroupCnt;

  // 2. 확장 처리 내부 함수
  var processExpansion = function (oRows, sType, options) {
    if (!oRows || !Array.isArray(oRows)) return;

    // adjust
    var nGroupCnt = options.nGroupCnt;
    var sFixColumnColSpanArr = options.fixColSpan || []; // 헤더가 두줄 이상일때 반복컬럼 상단 Row 의 ColSpan 처리가 필요하다. ColSapn 대상 컬럼을 지정한다.

    oRows.forEach(function (oRow) {
      var oOriCols = oRow.E || [];
      var oNewCols = [];
      var nStartIdx = -1;
      var nEndIdx = -1;

      // [A] 반복 대상 구간(Template Set) 찾기
      oOriCols.forEach(function (col, idx) {
        var id = col.A.id || "";
        var isTarget = false;
        if (sType === "header") {
          // 헤더는 기호 기준
          if (id.indexOf("$$") !== -1) isTarget = true;
        } else if (sType === "body") {
          // 바디는 oColumnKeys에 'ID_0' 형태로 존재하는지 확인
          // 템플릿의 ID가 'inAmt'라면 'inAmt_0'이 있는지 체크함
          if (oColumnKeys && oColumnKeys.indexOf(id + "_0") !== -1) {
            isTarget = true;
          } else if (oColumnKeys && oColumnKeys.indexOf(id) !== -1 && id.indexOf("_0") !== -1) {
            // 만약 템플릿 ID 자체가 'inAmt_0'인 경우에 대한 대비
            isTarget = true;
          }
        } else if (sType === "subTotal" || sType === "footer") {
          // 소계/푸터는 _$$ 기호 기준
          if (id.indexOf("_$$") !== -1) isTarget = true;
        }
        if (isTarget) {
          if (nStartIdx === -1) nStartIdx = idx;
          nEndIdx = idx;
        }
      });

      // [B] 반복 구간 확장 실행
      if (nStartIdx === -1) {
        for (var k = 0; k < oOriCols.length; k++) {
          // ColSpan 보정
          // oNewCols.push(oOriCols[k]);
          var temp = JSON.parse(JSON.stringify(oOriCols[k]));
          var tempId = temp.A.id || "";
          if (sFixColumnColSpanArr.includes(tempId)) {
            var nColSpan = parseInt(temp.A.colSpan || '1');
            // temp.A.colSpan = nColSpan * nGroupCnt + nCorrectionCount;
            temp.A.colSpan = nColSpan * nGroupCnt;
          }
          oNewCols.push(temp);
        }
      } else {
        var templateSet = oOriCols.slice(nStartIdx, nEndIdx + 1);

        // 1. 반복 구간 이전 삽입
        var preCols = oOriCols.slice(0, nStartIdx);
        for (var a = 0; a < preCols.length; a++) {
          oNewCols.push(preCols[a]);
        }

        // 2. nGroupCnt만큼 반복 확장
        for (var i = 0; i < nGroupCnt; i++) {
          templateSet.forEach(function (tmplCol) {
            var cloned = JSON.parse(JSON.stringify(tmplCol));
            var rawId = cloned.A.id || "";

            // ID 치환 로직 (+ 연산자 사용)
            var baseId = rawId.replace("$xkeyname_$$", "").replace("_$$", "");
            baseId = baseId.replace(/_\d+$/, ""); // 기존 숫자 제거 (_0 등)

            cloned.A.id = baseId + "_" + i;

            // Expression(수식) 내 ID 치환
            if (cloned.A.expression) {
              cloned.A.expression = cloned.A.expression.replace(/(['"])(.*?)(['"])/g, function (match, p1, p2, p3) {
                var cleanId = p2.replace(/_\d+$/, "");
                return p1 + cleanId + "_" + i + p3;
              });
            }

            // 헤더 값 처리
            if (sType === "header" && rawId.indexOf("$xkeyname_") !== -1) {
              cloned.A.value = oCntKeyValArr[i] || "";
            }
            oNewCols.push(cloned);
          });
        }

        // 3. 반복 구간 이후 삽입
        var postCols = oOriCols.slice(nEndIdx + 1);
        for (var b = 0; b < postCols.length; b++) {
          oNewCols.push(postCols[b]);
        }
      }
      oRow.E = oNewCols;
    });
  };

  // 3. 메인 섹션 순회
  if (layout.E && Array.isArray(layout.E)) {
    layout.E.forEach(function (node) {
      var nodeName = node.N || "";
      if (nodeName === "w2:header") processExpansion(node.E, "header", options);else if (nodeName === "w2:gBody") processExpansion(node.E, "body", options);else if (nodeName === "w2:subTotal") processExpansion(node.E, "subTotal", options);else if (nodeName === "w2:footer") processExpansion(node.E, "footer", options);
    });
  }
  return layout;
};

/**
 * @method
 * @name getGroupExprJson
 * @description 데이터를 기준에 따라 그룹화하고 반복 정보를 가로로 확장 한다.
 * @param
 * @returns
 * @hidden N
 * @exception
 * @migrationStatus
 * @example
 */
scwin.getGroupExprJson = function ($p, oJsonArr, sGroupKeyArr, sCntKey, sIterKeyArr) {
  // 1. 제외 컬럼(고정 컬럼) 추출
  let oTempKeyArr = new Set();
  oJsonArr.forEach(item => {
    Object.keys(item).forEach(sKey => {
      // 그룹키, 기준키(inDt), 반복키(inAmt)가 아닌 모든 컬럼을 고정 컬럼으로 간주
      if (!sGroupKeyArr.includes(sKey) && sKey !== sCntKey && !sIterKeyArr.includes(sKey)) {
        oTempKeyArr.add(sKey);
      }
    });
  });
  let oExColumnKeyArr = Array.from(oTempKeyArr);

  // 2. 기준 값(예: 날짜순) 정렬 및 인덱스 맵 생성
  let oCntKeyValArr = [...new Set(oJsonArr.map(item => item[sCntKey]).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'ko'));
  let oCntKeyMap = {};
  oCntKeyValArr.forEach((sKey, idx) => {
    oCntKeyMap[sKey] = idx;
  });

  // 3. 데이터 그룹화
  let oGroupedArr = oJsonArr.reduce((acc, curr) => {
    let sGroupKey = sGroupKeyArr.map(k => curr[k]).join('_');
    if (!acc[sGroupKey]) {
      acc[sGroupKey] = {};
      sGroupKeyArr.forEach(k => acc[sGroupKey][k] = curr[k]);
      // 고정 컬럼들(clntNo, fixWrkPlCd 등) 저장
      oExColumnKeyArr.forEach(k => acc[sGroupKey][k] = curr[k]);
      acc[sGroupKey]['_items'] = {};
    }
    if (curr[sCntKey]) {
      let nTarIdx = oCntKeyMap[curr[sCntKey]];
      acc[sGroupKey]._items[nTarIdx] = curr;
    }
    return acc;
  }, {});

  // 4. 최종 행(Row) 데이터 생성
  let oRows = Object.values(oGroupedArr).map(group => {
    let oRow = {};

    // 그룹 키 복사
    sGroupKeyArr.forEach(k => oRow[k] = group[k]);

    // 누락되었던 고정 컬럼들(oExColumnKeyArr) 복사
    oExColumnKeyArr.forEach(k => oRow[k] = group[k]);

    // 반복 컬럼 생성
    oCntKeyValArr.forEach((_, idx) => {
      let item = group._items[idx];
      sIterKeyArr.forEach(pk => {
        oRow[pk + '_' + idx] = item && item[pk] !== undefined ? item[pk] : '';
      });
      // 필요 시 날짜(inDt) 컬럼도 인덱스별로 생성 가능
      oRow[sCntKey + '_' + idx] = item ? item[sCntKey] : '';
    });
    return oRow;
  });

  // 5. 최상위 columnKeys 구성 (고정 컬럼 포함)
  let finalColumnKeys = [...sGroupKeyArr, ...oExColumnKeyArr]; // 고정 컬럼 추가
  oCntKeyValArr.forEach((_, idx) => {
    finalColumnKeys.push(sCntKey + '_' + idx);
    sIterKeyArr.forEach(pk => finalColumnKeys.push(pk + '_' + idx));
  });
  return {
    'oColumnKeys': finalColumnKeys,
    'nGroupCnt': oCntKeyValArr.length,
    'oCntKeyValArr': oCntKeyValArr,
    'oRows': oRows
  };
};

// 계약자에게 만기가 도래되는 계약현황을 DataSet을가져옴(cfAutoPopUpRun에서 사용)
scwin.cfAutoPopUpRunRequest = async function ($p, pSQLID, pUserId, pSysCd) {
  return new Promise(function (resolve, reject) {
    const sysCd = pSysCd || "CommonEBC";
    let pAction = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=" + sysCd + "&queryId=" + pSQLID + "&param1=" + pUserId + "&param2=" + "" + "&param3=" + "" + "&param4=" + "" + "&param5=" + "" + "&param6=" + "" + "&param7=" + "" + "&param8=" + "" + "&param9=" + "" + "&param10=" + "" + "&param11=" + "" + "&param12=" + "" + "&param13=" + "" + "&param14=" + "";
    WebSquare.net.ajax({
      action: pAction,
      method: "POST",
      mediatype: "application/json; charset=UTF-8",
      // WebSquare 버전에 따라 responseJSON/responseText 등이 다를 수 있음
      success: function (e) {
        resolve(e.responseText || "");
      },
      error: function (e) {
        reject(e);
      }
    });
  });
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'}}]}]})