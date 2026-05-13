/*amd /ui/ds/op/adjmbd/pchstrfmgnt/op_401_05_01b.xml 33875 66ed92b54f480d7a3e32d25b74eac162e742d3aa66087507b7532393fe2830ca */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryDt',name:'조회일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_WelfareSalaryStandard',saveRemovedData:'true',rowNumData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'branchOfcCd',name:'#N/A',dataType:'text',length:'32'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'insAdptDt',name:'#N/A',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급코드',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급명',dataType:'text',length:'30'}},{T:1,N:'w2:column',A:{id:'welsalKndCd',name:'복리후생비종류코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'welsalKndGrpCd',name:'#N/A',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'allDeleteYn',name:'#N/A',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'만료일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'stHh',name:'시작시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'welsalAdptStdCd',name:'복리후생비적용기준코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'endHh',name:'종료시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'atdLeaveClsCd',name:'출근퇴근구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'midngtLeaveYn',name:'심야퇴근여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'결제원금',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'ecsYn',name:'연근여부',dataType:'text',length:'1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_allDelCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'branchOfcCd',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'welsalKndGrpCd',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allDeleteYn',name:'#N/A',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveWelfareSalaryStandard',action:'/ds.op.adjmbd.pchstrfmgnt.RetrieveWelfareSalaryStandardCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_WelfareSalaryStandard","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_WelfareSalaryStandard","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveWelfareSalaryStandard_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_SaveWelfareSalaryStandard',action:'/ds.op.adjmbd.pchstrfmgnt.SaveWelfareSalaryStandardCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_WelfareSalaryStandard","key":"IN_DS1"},{"id":"ds_allDelCd","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_SaveWelfareSalaryStandard_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("scwin.onpageload");
  scwin.dateStr = $c.date.getServerDateTime($p);
  scwin.memInfo = $c.data.getMemInfo($p);
  scwin.lyr = 1;
  scwin.f_defaultValue(); // 물류점소 조회
  co_lc_logisticsBranch.focus();
  em_qryDt.setValue(scwin.dateStr);
  const codeOptions = [{
    grpCd: "OP165",
    compID: "gr_WelfareSalaryStandard:welsalKndCd"
  }, {
    grpCd: "OP113",
    compID: "gr_WelfareSalaryStandard:welsalAdptStdCd"
  }, {
    grpCd: "OP233",
    compID: "gr_WelfareSalaryStandard:atdLeaveClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  console.log("scwin.f_defaultValue");
  let params = {
    sysCd: "CooperationCompanyEquipmentEBC",
    queryId: "retrivecComboLobranCdList",
    param2: "A",
    param3: "B"
  };
  scwin.f_srchCMDOption(params, "/cm.zz.RetrieveComboCMD.do", "ds_lobranCd");
  co_lc_logisticsBranch.setNodeSet("data:ds_lobranCd", "name", "code");
};
scwin.f_srchCMDOption = function (params, url, dsName) {
  let dmaName = "dma_srch" + dsName.split("_")[1];
  if (params != null) {
    //조회용 datamap 생성
    let paramKey = Object.keys(params);
    let paramVal = Object.values(params);
    let dmaId = [],
      dmaValue = [],
      dmaType = [];
    for (let i = 0; i < paramKey.length; i++) {
      dmaId.push(paramKey[i]);
      dmaValue.push(paramVal[i]);
      dmaType.push("text");
    }
    $c.data.createDataMap($p, dmaName, dmaId, dmaType);

    //조회용 datamap에 값 설정 
    for (let i = 0; i < paramKey.length; i++) {
      $c.util.getComponent($p, dmaName).setJSON(params);
    }
  }

  //submission 동적 생성 
  let sbmOption = {
    id: dsName,
    action: url,
    isProcessMsg: false
  };
  if (params != null) {
    $c.sbm.executeDynamic($p, sbmOption, $c.util.getComponent($p, dmaName).getJSON()).then(e => {
      console.log("c.sbm.executeDynamic f_srchCMDOption");
      if (e.responseJSON.resultDataSet[0].Code < 0) return;

      //dataList 동적 생성 
      const dcoptions = {
        baseNode: "list",
        repeatNode: "map",
        saveRemovedData: "true"
      };
      let dsKeys = Object.keys(e.responseJSON.GAUCE[0]);
      let dsId = [],
        dsType = [];
      for (var i = 0; i < dsKeys.length; i++) {
        dsId.push(dsKeys[i]);
        dsType.push("text");
      }
      $c.data.createDataList($p, dsName, dsId, dsType, dcoptions);
      $c.util.getComponent($p, dsName).setJSON(e.responseJSON.GAUCE);
    });
  }
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  console.log("scwin.f_FieldClear");
  $c.gus.cfInitObjects($p, tbl_search);
  em_qryDt.setValue(scwin.dateStr);
  co_lc_logisticsBranch.setValue(scwin.memInfo.loUpperLobranCd);
  co_lc_logisticsBranch.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("scwin.f_Retrieve");
  let chkVal = await $c.gus.cfValidate($p, [co_lc_logisticsBranch, em_qryDt]);
  if (!chkVal) return;
  $c.sbm.execute($p, sbm_RetrieveWelfareSalaryStandard);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  console.log("scwin.f_AddRow");
  var insRow = ds_WelfareSalaryStandard.insertRow();
  var copyJson = {};
  if (insRow > 0) copyJson = ds_WelfareSalaryStandard.getRowJSON(ds_WelfareSalaryStandard.getRowPosition());
  ds_WelfareSalaryStandard.setRowJSON(insRow, copyJson, true);
  gr_WelfareSalaryStandard.setFocusedCell(insRow, 0);
  gr_WelfareSalaryStandard.setReadOnly("cell", insRow, "lobranCd", false);
  gr_WelfareSalaryStandard.setReadOnly("cell", insRow, "occpgrdCd", false);
  gr_WelfareSalaryStandard.setReadOnly("cell", insRow, "welsalKndCd", false);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_save = async function () {
  let chkVal = await $c.gus.cfValidate($p, [gr_WelfareSalaryStandard]);
  if (!chkVal) return;

  //중복확인
  for (var i = 0; i < ds_WelfareSalaryStandard.getTotalRow(); i++) {
    let condArr = [{
      columnId: "adptDt",
      operator: "==",
      value: ds_WelfareSalaryStandard.getCellData(i, "adptDt")
    }, {
      columnId: "lobranCd",
      operator: "==",
      value: ds_WelfareSalaryStandard.getCellData(i, "lobranCd"),
      logical: "&&"
    }, {
      columnId: "occpgrdCd",
      operator: "==",
      value: ds_WelfareSalaryStandard.getCellData(i, "occpgrdCd"),
      logical: "&&"
    }, {
      columnId: "welsalKndCd",
      operator: "==",
      value: ds_WelfareSalaryStandard.getCellData(i, "welsalKndCd"),
      logical: "&&"
    }];
    let json = $c.data.getMatchedJSON($p, ds_WelfareSalaryStandard, condArr);
    debugger;
    if (json.length > 1) {
      $c.win.alert($p, "복리후생비기준의 " + json[1].rowNum + "번째 데이터에서 적용일자, 물류점소, 직급, 종류은(는) 중복될 수 없습니다.");
      return;
    }
  }
  for (var i = 0; i < ds_WelfareSalaryStandard.getTotalRow(); i++) {
    if (ds_WelfareSalaryStandard.getCellData(i, "atdLeaveClsCd") == "1") {
      //출근
      if (ds_WelfareSalaryStandard.getCellData(i, "stHh").substr(0, 2) > "23") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["시작시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
        gr_WelfareSalaryStandard.setFocusedCell(i, "stHh");
        return;
      }
      if (ds_WelfareSalaryStandard.getCellData(i, "stHh").substr(2, 2) > "59") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["시작시간"]);
        gr_WelfareSalaryStandard.setFocusedCell(i, "stHh");
        return;
      }
      if (ds_WelfareSalaryStandard.getCellData(i, "endHh") != "") {
        if (ds_WelfareSalaryStandard.getCellData(i, "endHh").substr(0, 2) > "23") {
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]);
          gr_WelfareSalaryStandard.setFocusedCell(i, "endHh");
          return;
        }
        if (ds_WelfareSalaryStandard.getCellData(i, "endHh").substr(2, 2) > "59") {
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]);
          gr_WelfareSalaryStandard.setFocusedCell(i, "endHh");
          return;
        }
      }
    } else {
      if (ds_WelfareSalaryStandard.getCellData(i, "stHh").substr(0, 2) > "24") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["시작시간"]);
        gr_WelfareSalaryStandard.setFocusedCell(i, "stHh");
        return;
      }
      if (ds_WelfareSalaryStandard.getCellData(i, "stHh").substr(0, 2) == "00" && ds_WelfareSalaryStandard.getCellData(i, "stHh").substr(2, 2) == "00") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["시작시간"]);
        gr_WelfareSalaryStandard.setFocusedCell(i, "stHh");
        return;
      }
      if (ds_WelfareSalaryStandard.getCellData(i, "stHh").substr(0, 2) == "24" && ds_WelfareSalaryStandard.getCellData(i, "stHh").substr(2, 2) > "00") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["시작시간"]);
        gr_WelfareSalaryStandard.setFocusedCell(i, "stHh");
        return;
      }
      if (ds_WelfareSalaryStandard.getCellData(i, "stHh").substr(2, 2) > "59") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["시작시간"]);
        gr_WelfareSalaryStandard.setFocusedCell(i, "stHh");
        return;
      }
      if (ds_WelfareSalaryStandard.getCellData(i, "endHh") != "") {
        if (ds_WelfareSalaryStandard.getCellData(i, "endHh").substr(0, 2) > "24") {
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]);
          gr_WelfareSalaryStandard.setFocusedCell(i, "endHh");
          return;
        }
        if (ds_WelfareSalaryStandard.getCellData(i, "endHh").substr(0, 2) == "00" && ds_WelfareSalaryStandard.getCellData(i, "endHh").substr(2, 2) == "00") {
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]);
          gr_WelfareSalaryStandard.setFocusedCell(i, "endHh");
          return;
        }
        if (ds_WelfareSalaryStandard.getCellData(i, "endHh").substr(0, 2) == "24" && ds_WelfareSalaryStandard.getCellData(i, "endHh").substr(2, 2) > "00") {
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]);
          gr_WelfareSalaryStandard.setFocusedCell(i, "endHh");
          return;
        }
        if (ds_WelfareSalaryStandard.getCellData(i, "endHh").substr(2, 2) > "59") {
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]);
          gr_WelfareSalaryStandard.setFocusedCell(i, "endHh");
          return;
        }
      }
    }
  }
  if (!$c.data.isModified($p, ds_WelfareSalaryStandard)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["복리후생비기준"]);
    return;
  }
  var welsalKndGrpCd;
  var adptDt;
  var deleteAll = "N";
  for (var i = 0; i < ds_WelfareSalaryStandard.getTotalRow(); i++) {
    welsalKndGrpCd = ds_WelfareSalaryStandard.getCellData(i, "welsalKndGrpCd");
    adptDt = ds_WelfareSalaryStandard.getCellData(i, "adptDt");
    debugger;
    if (ds_WelfareSalaryStandard.getCellData(i, "payAmt") == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, ["지급액", "0"]);
      gr_WelfareSalaryStandard.setFocusedCell(i, "payAmt");
      return;
    }
    if (ds_WelfareSalaryStandard.getCellData(i, "endHh") != "" && ds_WelfareSalaryStandard.getCellData(i, "stHh") > ds_WelfareSalaryStandard.getCellData(i, "endHh")) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_058);
      gr_WelfareSalaryStandard.setFocusedCell(i, "stHh");
      return;
    }
    for (var j = i + 1; j < ds_WelfareSalaryStandard.getTotalRow(); j++) {
      if (welsalKndGrpCd == ds_WelfareSalaryStandard.getCellData(j, "welsalKndGrpCd")) {
        debugger;
        if (adptDt != ds_WelfareSalaryStandard.getCellData(j, "adptDt")) {
          $c.win.alert($p, "복리후생비종류구분이 같을때에는 적용일자가 같아야 합니다.");
          return;
        }
      }
    }

    //전체 삭제 여부
    if (ds_WelfareSalaryStandard.getRowStatus(i) == "D") {
      deleteAll = "Y";
      for (var k = 0; k < ds_WelfareSalaryStandard.getTotalRow(); k++) {
        if (welsalKndGrpCd == ds_WelfareSalaryStandard.getCellData(k, "welsalKndGrpCd")) {
          if (ds_WelfareSalaryStandard.getRowStatus(k) != "D") {
            deleteAll = "N";
          }
        }
      }
    }
    if (deleteAll == "Y" && ds_allDelCd.getCellData("welsalKndGrpCd", welsalKndGrpCd) == 0) {
      let row = ds_allDelCd.insertRow();
      ds_allDelCd.setCellData(row, "branchOfcCd", ds_WelfareSalaryStandard.getCellData(i, "branchOfcCd"));
      ds_allDelCd.setCellData(row, "adptDt", ds_WelfareSalaryStandard.getCellData(i, "adptDt"));
      ds_allDelCd.setCellData(row, "welsalKndGrpCd", welsalKndGrpCd);
      ds_allDelCd.setCellData(row, "allDeleteYn", deleteAll);
    }
    deleteAll = "N"; //초기화
  }
  let conf = await $c.win.confirm($p, "저장하시겠습니까?");
  if (conf) $c.sbm.execute($p, sbm_SaveWelfareSalaryStandard);
};

//-------------------------------------------------------------------------
// 공통 코드 팝업 호출
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = function (row, pClose, colid) {
  ds_WelfareSalaryStandard.setCellData(row, colid, ds_WelfareSalaryStandard.getCellData(row, colid).toUpperCase());

  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  var pCode = ds_WelfareSalaryStandard.getCellData(row, colid);
  var pName = "";
  switch (colid) {
    case "lobranCd":
      udc_comCode.setSelectId("retrieveOpDeptCdInfo");
      udc_comCode.cfCommonPopUp(scwin.callBackDeptCd, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , dma_condition.get("lobranCd") // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , null // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case "occpgrdCd":
      udc_comCode.setSelectId("retrieveOccpgrd");
      udc_comCode.cfCommonPopUp(scwin.callBackOccp, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , null // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};
scwin.callBackDeptCd = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_WelfareSalaryStandard, ds_WelfareSalaryStandard.getRowPosition(), "lobranCd", "lobranNm");
};
scwin.callBackOccp = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_WelfareSalaryStandard, ds_WelfareSalaryStandard.getRowPosition(), "occpgrdCd", "occpgrdNm");
};

//-------------------------------------------------------------------------
// Formatter
//-------------------------------------------------------------------------
scwin.f_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  if ($c.gus.cfIsNull($p, data)) return;
  let colId = gr_WelfareSalaryStandard.getColumnID(colIndex);
  if (colId == "welsalAdptStdCd") {
    let label = dlt_commonCodeOP113.getMatchedJSON("cd", data, true)[0].cdNm;
    return "[" + data + "] " + label;
  } else if (colId == "atdLeaveClsCd") {
    let label = dlt_commonCodeOP233.getMatchedJSON("cd", data, true)[0].cdNm;
    return "[" + data + "] " + label;
  }
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_RetrieveWelfareSalaryStandard_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_WelfareSalaryStandard.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
  } else {
    gr_WelfareSalaryStandard.setDisabled("grid", false);
    gr_WelfareSalaryStandard.setReadOnly("column", "lobranCd", true);
    gr_WelfareSalaryStandard.setReadOnly("column", "lobranNm", true);
    gr_WelfareSalaryStandard.setReadOnly("column", "occpgrdCd", true);
    gr_WelfareSalaryStandard.setReadOnly("column", "occpgrdNm", true);
    gr_WelfareSalaryStandard.setReadOnly("column", "welsalKndCd", true);
    gr_WelfareSalaryStandard.setFocusedCell(0, 0);
  }

  //신규버튼
  if ($c.util.isEmpty($p, dma_condition.get("qryDt"))) {
    em_qryDt.setValue(scwin.dateStr);
    gr_WelfareSalaryStandard.setDisabled("grid", false);
  }
};

//저장 완료
scwin.sbm_SaveWelfareSalaryStandard_submitdone = function (e) {
  console.log("scwin.sbm_SaveWelfareSalaryStandard_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//점소코드 값 변경
scwin.co_lc_logisticsBranch_onchange = function (info) {
  if (info.oldValue == null) {
    co_lc_logisticsBranch.setValue(scwin.memInfo.loUpperLobranCd);
  }
};

//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  console.log("scwin.btn_clear_onclick");
  scwin.f_FieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  console.log("scwin.btn_search_onclick");
  scwin.f_Retrieve();
};

//신규 버튼
scwin.btn_create_onclick = function (e) {
  console.log("scwin.btn_create_onclick");
  dma_condition.set("qryDt", "");
  $c.sbm.execute($p, sbm_RetrieveWelfareSalaryStandard);
  /*.then((e) => {
      if (e.responseJSON.resultDataSet[0].Code < 0) return; 
      debugger;
      em_qryDt.setValue(scwin.dateStr);
      gr_WelfareSalaryStandard.setReadOnly("column", "lobranCd"   , false);
      gr_WelfareSalaryStandard.setReadOnly("column", "lobranNm"   , false);
      gr_WelfareSalaryStandard.setReadOnly("column", "occpgrdCd"  , false);
      gr_WelfareSalaryStandard.setReadOnly("column", "occpgrdNm"  , false);
      gr_WelfareSalaryStandard.setReadOnly("column", "welsalKndCd", false);
  });*/
};

//저장 버튼
scwin.btn_save_onclick = function (e) {
  console.log("scwin.btn_save_onclick");
  scwin.f_save();
};

//그리드 클릭 > 공통 팝업 호출
scwin.gr_WelfareSalaryStandard_ontextimageclick = function (rowIndex, columnIndex) {
  let colid = gr_WelfareSalaryStandard.getColumnID(columnIndex);
  switch (colid) {
    case "lobranCd":
      scwin.f_openCommPopUpGrid(rowIndex, 'F', colid);
      break;
    case "occpgrdCd":
      scwin.f_openCommPopUpGrid(rowIndex, 'F', colid);
      break;
  }
};
scwin.gr_WelfareSalaryStandard_onviewchange = function (info) {
  let colid = info.colId;
  let row = info.rowIndex;
  switch (colid) {
    case "lobranCd":
      if (ds_WelfareSalaryStandard.getCellData(row, colid) != "" && ds_WelfareSalaryStandard.getCellData(row, colid) != info.oldValue) {
        ds_WelfareSalaryStandard.setCellData(row, "lobranNm", "");
        scwin.f_openCommPopUpGrid(row, 'T', colid);
      } else if (ds_WelfareSalaryStandard.getCellData(row, colid) == "") {
        ds_WelfareSalaryStandard.setCellData(row, "lobranCd", "");
        ds_WelfareSalaryStandard.setCellData(row, "lobranNm", "");
      }
      break;
    case "occpgrdCd":
      if (ds_WelfareSalaryStandard.getCellData(row, colid) != "" && ds_WelfareSalaryStandard.getCellData(row, colid) != info.oldValue) {
        ds_WelfareSalaryStandard.setCellData(row, "occpgrdNm", "");
        scwin.f_openCommPopUpGrid(row, 'T', colid);
      } else if (ds_WelfareSalaryStandard.getCellData(row, colid) == "") {
        ds_WelfareSalaryStandard.setCellData(row, "occpgrdCd", "");
        ds_WelfareSalaryStandard.setCellData(row, "occpgrdNm", "");
      }
      break;
    case "welsalKndCd":
      let data = ds_WelfareSalaryStandard.getCellData(row, "welsalKndCd");
      ds_WelfareSalaryStandard.setCellData(row, "welsalKndGrpCd", dlt_commonCodeOP165.getMatchedJSON("cd", data)[0].fltrCd1);
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_lc_logisticsBranch',search:'start',style:'width: 200px;',submenuSize:'auto',searchTarget:'value',sortOption:'value',objType:'key',ref:'data:dma_condition.lobranCd','ev:onchange':'scwin.co_lc_logisticsBranch_onchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조회일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'em_qryDt',style:'',validExp:'적용기준일자 시작일:yes:date=YYYYMMDD"',ref:'data:dma_condition.qryDt'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'복리후생비 기준등록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_grd',gridID:'gr_WelfareSalaryStandard',gridUpYn:'N',templateYn:'N',grdDownOpts:'{"fileName":"복리후생비기준등록.xlsx", "sheetName" : "복리후생비기준등록", "type":"4+8+16"}',btnPlusYn:'Y',gridDownYn:'Y',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_WelfareSalaryStandard',focusMode:'row',id:'gr_WelfareSalaryStandard',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true',resize:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true',rowStatusVisible:'true',readOnly:'false',editModeEvent:'onclick','ev:ontextimageclick':'scwin.gr_WelfareSalaryStandard_ontextimageclick','ev:onviewchange':'scwin.gr_WelfareSalaryStandard_onviewchange',gridName:'복리후생비 기준등록'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'적용일자',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'물류점소',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'120',value:'물류점소명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'70',value:'직급',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'직급명',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'종류',width:'70',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'시작시간',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'비교',width:'70',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'종료시간',width:'100',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column33',value:'출퇴근',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'익일퇴근',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'연근여부',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column23',value:'지급액',displayMode:'label',class:'col-type1'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'adptDt',inputType:'calendar',removeBorderStyle:'false',width:'100',displayFormat:'yyyy/MM/dd',textAlign:'left',mandatory:'true',maxLength:'8'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'lobranCd',inputType:'textImage',removeBorderStyle:'false',width:'100',textAlign:'left',mandatory:'true',maxLength:'4'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'lobranNm',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'occpgrdCd',inputType:'textImage',removeBorderStyle:'false',width:'70',textAlign:'left',mandatory:'true',maxLength:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdNm',inputType:'text',width:'90',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'welsalKndCd',inputType:'select',width:'70',allOption:'',chooseOption:'',ref:'',textAlign:'left',displayFormatter:'scwin.f_displayFormatter',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_kndCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'stHh',inputType:'text',width:'100',textAlign:'left',displayFormat:'##:##',mandatory:'true',maxLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'welsalAdptStdCd',inputType:'select',width:'70',textAlign:'left',customFormatter:'scwin.f_customFormatter',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'endHh',inputType:'text',width:'100',textAlign:'left',displayFormat:'##:##',maxLength:'4'}},{T:1,N:'w2:column',A:{width:'90',inputType:'select',id:'atdLeaveClsCd',displayMode:'label',textAlign:'left',delimiter:':',customFormatter:'scwin.f_customFormatter',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'midngtLeaveYn',displayMode:'label',falseValue:'0',valueType:'binary',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'ecsYn',displayMode:'label',valueType:'binary',falseValue:'0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'payAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',mandatory:'true',excelCellType:'number',maxLength:'13'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_WelfareSalaryStandard',id:'udc_bottomGrdBtn',btnDelYn:'N',btnCancelYn:'Y',rowAddFunction:'scwin.f_AddRow',EngYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_create',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_create_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_comCode',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'ed_comCodeNm',style:'width:%; height:px;display: none;',id:'udc_comCode',btnId:'btn_comCode'}}]}]}]}]}]})