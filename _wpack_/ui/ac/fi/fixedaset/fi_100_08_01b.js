/*amd /ui/ac/fi/fixedaset/fi_100_08_01b.xml 41797 462596f440d76c2884e7c1a5a7d839fc9e90deb5df3fb940af118818c5988166 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_master',repeatNode:'map',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_master_onrowpositionchange','ev:onbeforerowpositionchange':'scwin.ds_master_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetPatternCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternClsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'areaMgntYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetAcqAcctCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetAcqAcctNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetAcqAcct',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'provAcctCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'provAcctNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'provAcct',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprAcctCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprAcctNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprAcct',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprAcctCdPcost',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprAcctCdPcostNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprAcctPcost',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'asetPatternCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetPatternNm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetPatternClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_asetPatternClsCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ac.fi.fixedaset.RetreiveFixedAsetPatternListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"}]',target:'data:json,{"id":"ds_master","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_master_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_master_save',action:'/ac.fi.fixedaset.CUDFixedAsetPatternCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_master","key":"IN_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_master_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// id       : fi_100_08_01b
// 이름     : 고정자산유형관리
// 경로     : 회계/재무회계/고정자산/
// 작 성 자 : 오영재
// 작 업 일 : 2025-11-19
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================
scwin.bEdit = false;
scwin.pCode = "";
scwin.pName = "";
scwin.onpageload = function () {
  $c.gus.cfDisableObjects($p, [tbl_asetPattern, btn_addRow, btn_cancelRow]);
  $c.gus.cfDisableBtn($p, [bUpdate, bSave]);
  scwin.f_FieldClear();
  const codeOptions1 = [{
    grpCd: "FI025",
    compID: "lc_srchAsetPatternClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions1, scwin.callBackSetCommonCode);
  //$c.data.setCommonCode(codeOptions2);
};
scwin.callBackSetCommonCode = function () {
  var itemCnt = lc_srchAsetPatternClsCd.getItemCount();
  for (i = 1; i < itemCnt; i++) {
    lc_srchAsetPatternClsCd.setSelectedIndex(i);
    var val = lc_srchAsetPatternClsCd.getValue();
    var txt = lc_srchAsetPatternClsCd.getText().replaceAll("&amp;nbsp;", "").replaceAll(val + ":", "");

    // 입력필드 콤보세팅
    lc_asetPatternClsCd.addItem(val, txt);

    // 그리드 콤보세팅
    ds_asetPatternClsCd.insertRow(i - 1);
    ds_asetPatternClsCd.setCellData(i - 1, "cd", val);
    ds_asetPatternClsCd.setCellData(i - 1, "cdNm", txt);
    gr_master.setColumnNodeSet("asetPatternClsCd", "data:ds_asetPatternClsCd", "cdNm", "cd");
  }
  lc_srchAsetPatternClsCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
  $c.gus.cfInitHidVal($p, tbl_search);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function (e) {
  lc_srchAsetPatternClsCd.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  //console.log(ds_master.getRowCount());
  //console.log(ds_master.getModifiedJSON().length);
  //console.log(scwin.bEdit);
  if (ds_master.getRowCount() > 0 && ds_master.getModifiedJSON().length > 0 && scwin.bEdit) {
    if ((await $c.win.confirm($p, MSG_CM_CRM_005)) == false) return;
  }
  scwin.bEdit = false;
  dma_search.set("asetPatternCd", ed_srchAsetPatternCd.getValue());
  dma_search.set("asetPatternNm", ed_srchAsetPatternNm.getValue());
  dma_search.set("asetPatternClsCd", lc_srchAsetPatternClsCd.getValue());
  dma_search.set("useYn", lc_srchUseYn.getValue());
  await $c.sbm.execute($p, sbm_master);
};
scwin.sbm_master_submitdone = async function (e) {
  var rowCnt = ds_master.getRowCount();
  ed_totalRows.setValue(rowCnt);
  scwin.bEdit = false;
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    await $c.gus.cfDisableObjects($p, tbl_asetPattern);
    await $c.gus.cfEnableObjects($p, [bUpdate]);
    await $c.gus.cfDisableBtn($p, [bSave]);

    //datalist reform
    for (i = 0; i < ds_master.getRowCount(); i++) {
      ds_master.setCellData(i, "asetAcqAcct", ds_master.getCellData(i, "asetAcqAcctCd") != "" ? "[" + ds_master.getCellData(i, "asetAcqAcctCd") + "]" + ds_master.getCellData(i, "asetAcqAcctNm") : "");
      ds_master.setCellData(i, "provAcct", ds_master.getCellData(i, "provAcctCd") != "" ? "[" + ds_master.getCellData(i, "provAcctCd") + "]" + ds_master.getCellData(i, "provAcctNm") : "");
      ds_master.setCellData(i, "deprAcct", ds_master.getCellData(i, "deprAcctCd") != "" ? "[" + ds_master.getCellData(i, "deprAcctCd") + "]" + ds_master.getCellData(i, "deprAcctNm") : "");
      ds_master.setCellData(i, "deprAcctPcost", ds_master.getCellData(i, "deprAcctCdPcost") != "" ? "[" + ds_master.getCellData(i, "deprAcctCdPcost") + "]" + ds_master.getCellData(i, "deprAcctCdPcostNm") : "");
    }
    ds_master.setRowPosition(0);
    ds_master.modifyAllStatus("R");
  }
  await $c.gus.cfEnableObjects($p, [btn_addRow, btn_cancelRow]);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  if (ds_master.getModifiedData().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("자료"));
  } else {
    if (!(await scwin.f_Validate())) return;
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      //중복체크 추가
      let chkArry = [];
      for (let i = 0; i < ds_master.getRowCount(); i++) {
        let cd = ds_master.getCellData(i, "asetPatternCd");
        if (chkArry.indexOf(cd) > -1) {
          await $c.gus.cfAlertMsg($p, "고정자산유형관리의 " + (i + 1) + "번째 데이터에서 고정자산유형코드은(는) 중복될 수 없습니다.");
          return false;
        }
        chkArry.push(cd);
      }
      await $c.sbm.execute($p, sbm_master_save);
    }
  }
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_master_save_submitdone = async function (e) {
  //cfHideWaitMsg();
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.bEdit = false;
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function (e) {
  $c.gus.cfEnableObjects($p, tbl_asetPattern);
  //$c.gus.cfDisableKey();
  $c.gus.cfDisableObjects($p, [ed_asetPatternCd]); //코드 비활성화

  if (ds_master.getCellData(ds_master.getRowPosition(), "asetPatternNm") == "토지") {
    $c.gus.cfEnableObjects($p, [ed_asetAcqAcctCd]);
    $c.gus.cfDisableObjects($p, [ed_provAcctCd, ed_deprAcctCd, ed_deprAcctCdPcost]);
  } else {
    $c.gus.cfEnableObjects($p, [ed_asetAcqAcctCd, ed_provAcctCd, ed_deprAcctCd, ed_deprAcctCdPcost]);
  }
  $c.gus.cfDisableBtn($p, [bUpdate]);
  $c.gus.cfEnableObjects($p, [bSave]);
  scwin.bEdit = true;

  //유형명
  ed_asetPatternNm.focus();
};

//-------------------------------------------------------------------------
// 저장 시 입력 Validation
//-------------------------------------------------------------------------
scwin.f_Validate = async function (e) {
  //그리드 위 바인딩 되는 테이블
  if (!(await $c.gus.cfValidate($p, [tbl_asetPattern]))) return false;
  if (!(await $c.gus.cfValidate($p, [ed_asetPatternCd, ed_asetPatternNm, ed_asetAcqAcctCd, ed_provAcctCd, ed_deprAcctCd, ed_deprAcctCdPcost]))) return false;
  if (ed_asetPatternNm.getValue() == "토지") {
    if (!$c.gus.cfIsNull($p, ed_provAcctCd.getValue())) {
      $c.gus.cfAlertMsg($p, "토지는 충당금계정을 설정하실 수 없습니다.");
      ed_provAcctCd.focus();
      return false;
    }
    if (!(await $c.gus.cfIsNull($p, ed_deprAcctCd.getValue()))) {
      $c.gus.cfAlertMsg($p, "토지는 감가상각비계정(원가)을 설정하실 수 없습니다.");
      ed_deprAcctCd.focus();
      return false;
    }
    if (!(await $c.gus.cfIsNull($p, ed_deprAcctCdPcost.getValue()))) {
      $c.gus.cfAlertMsg($p, "토지는 감가상각비계정(판관비)을 설정하실 수 없습니다.");
      ed_deprAcctCdPcost.focus();
      return false;
    }
  }

  //console.log( "ed_asetAcqAcctCd.getValue() =>" + ed_asetAcqAcctCd.getValue() );
  //console.log( "ed_asetAcqAcctCd.hidVal =>" + ed_asetAcqAcctCd.options.hidVal );

  if (ed_asetAcqAcctCd.getValue() != ed_asetAcqAcctCd.options.hidVal) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["취득계정코드"]);
    ed_asetAcqAcctCd.focus();
    return false;
  }
  if (!(await $c.gus.cfIsNull($p, ed_provAcctCd.getValue())) && ed_provAcctCd.getValue() != ed_provAcctCd.options.hidVal) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["충당금계정코드"]);
    ed_provAcctCd.focus();
    return false;
  }
  if (!(await $c.gus.cfIsNull($p, ed_deprAcctCd.getValue())) && ed_deprAcctCd.getValue() != ed_deprAcctCd.options.hidVal) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["감가상각비계정(원가)코드"]);
    ed_deprAcctCd.focus();
    return false;
  }
  if (!(await $c.gus.cfIsNull($p, ed_deprAcctCdPcost.getValue())) && ed_deprAcctCdPcost.getValue() != ed_deprAcctCdPcost.options.hidVal) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["감가상각비계정(판관비)코드"]);
    ed_deprAcctCdPcost.focus();
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 행 추가
//-------------------------------------------------------------------------
scwin.f_Add = function (e) {
  let row = ds_master.insertRow();
  //alert( row );
  ds_master.setRowPosition(row);
  gr_master.setFocusedCell(row, 0, false);
  $c.gus.cfDisableKey($p);
  $c.gus.cfEnableObjects($p, tbl_asetPattern);
  $c.gus.cfEnableObjects($p, ed_asetPatternCd);
  $c.gus.cfDisableBtn($p, [bUpdate]);
  scwin.bEdit = true;
  $c.gus.cfEnableObjects($p, [bSave]); //저장버튼살리기

  ds_master.setCellData(row, "useYn", 1);
  //lc_srchAsetPatternClsCd.Index = 0;
  //lc_areaMgntYn.Index = 0;

  lc_asetPatternClsCd.setSelectedIndex(0);
  lc_areaMgntYn.setSelectedIndex(0);
  ed_asetPatternCd.focus();
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function (e) {
  //ds_master.Undo(ds_master.RowPosition);
  $c.data.undoRow($p, ds_master, "Y");
  let row = ds_master.getRowPosition();
  if (row >= 0) {
    ds_master.undoRow(row);
  }
};

//취득계정 callBackFunc 1
scwin.udc_asetAcqAcctCd_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_asetAcqAcctCd.setValue(rtnList[0]); // 코드
    ed_asetAcqAcctNm.setValue(rtnList[1]); // 회사명
    ed_asetAcqAcctCd.options.hidVal = rtnList[0];
  } else {
    ed_asetAcqAcctCd.setValue("");
    ed_asetAcqAcctNm.setValue("");
    ed_asetAcqAcctCd.options.hidVal = "";
  }
};
//판관비 callBackFunc 2
scwin.udc_deprAcctCdPcost_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_deprAcctCdPcost.setValue(rtnList[0]); // 코드
    ed_deprAcctCdPcostNm.setValue(rtnList[1]); // 회사명
    ed_deprAcctCdPcost.options.hidVal = rtnList[0];
  } else {
    ed_deprAcctCdPcost.setValue("");
    ed_deprAcctCdPcostNm.setValue("");
    ed_deprAcctCdPcost.options.hidVal = "";
  }
};

//충당금 callBackFunc 3
scwin.udc_provAcctCd_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    //console.log(rtnList);
    ed_provAcctCd.setValue(rtnList[0]); // 코드
    ed_provAcctNm.setValue(rtnList[1]); // 명
    ed_provAcctCd.options.hidVal = rtnList[0];
  } else {
    ed_provAcctCd.setValue("");
    ed_provAcctNm.setValue("");
    ed_provAcctCd.options.hidVal = "";
  }
};

//원가 callBackFunc 4
scwin.udc_deprAcctCd_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    //console.log(rtnList);
    ed_deprAcctCd.setValue(rtnList[0]); // 코드
    ed_deprAcctNm.setValue(rtnList[1]); // 명
    ed_deprAcctCd.options.hidVal = rtnList[0];
  } else {
    ed_deprAcctCd.setValue("");
    ed_deprAcctNm.setValue("");
    ed_deprAcctCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 계정코드 팝업
//-------------------------------------------------------------------------
scwin.f_acctPopUp = function (sGubun, pWinCloseTF) {
  var params = lc_srchUseYn.getValue();
  switch (sGubun) {
    case '1':
      //취득계정
      scwin.pCode = ed_asetAcqAcctCd;
      scwin.pName = ed_asetAcqAcctNm;
      udc_asetAcqAcctCd.cfCommonPopUp(scwin.udc_asetAcqAcctCd_callBackFunc // 콜백 함수
      , ed_asetAcqAcctCd.getValue() // 화면에서의 ??? Code Element의 Value
      , ed_asetAcqAcctNm.getValue() // 화면에서의 ??? Name Element의 Value
      , pWinCloseTF // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , params // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , null // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    case '2':
      //감가상각계정(판관비)
      scwin.pCode = ed_deprAcctCdPcost;
      scwin.pName = ed_deprAcctCdPcostNm;
      udc_deprAcctCdPcost.cfCommonPopUp(scwin.udc_deprAcctCdPcost_callBackFunc // 콜백 함수
      , ed_deprAcctCdPcost.getValue() // 화면에서의 ??? Code Element의 Value
      , ed_deprAcctCdPcostNm.getValue() // 화면에서의 ??? Name Element의 Value
      , pWinCloseTF // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , params // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , null // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    case '3':
      //충당금계정
      scwin.pCode = ed_provAcctCd;
      scwin.pName = ed_provAcctNm;
      udc_provAcctCd.cfCommonPopUp(scwin.udc_provAcctCd_callBackFunc // 콜백 함수
      , ed_provAcctCd.getValue() // 화면에서의 ??? Code Element의 Value
      , ed_provAcctNm.getValue() // 화면에서의 ??? Name Element의 Value
      , "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , params // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , null // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    case '4':
      //감가상각계정(원가)
      scwin.pCode = ed_deprAcctCd;
      scwin.pName = ed_deprAcctNm;
      udc_deprAcctCd.cfCommonPopUp(scwin.udc_deprAcctCd_callBackFunc // 콜백 함수
      , ed_deprAcctCd.getValue() // 화면에서의 ??? Code Element의 Value
      , ed_deprAcctNm.getValue() // 화면에서의 ??? Name Element의 Value
      , "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , params // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , null // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
  }
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.customAsetAcqAcctCd = function (data, formattedData, rowIndex, colIndex) {
  if (data[rowIndex]["asetAcqAcctCd"] != "") {
    return "[" + data[rowIndex]["asetAcqAcctCd"] + "] " + data[rowIndex]["asetAcqAcctNm"];
  }
};
scwin.bUpdate_onclick = function (e) {
  scwin.f_Update();
};
scwin.bSave_onclick = function (e) {
  scwin.f_Save();
};

//-------------------------------------------------------------------------
// 그리드 로우 변경시 필수항목 쓰기속성 제어
//-------------------------------------------------------------------------
scwin.ds_master_onrowpositionchange = function (info) {
  //헤더클릭체크
  let row = info.oldRowIndex;
  if (row < 1) return;
  //console.log("row=>" + row);
  //console.log(info);
  //console.log(ds_master.getRowStatus(row));
  if (ds_master.getRowStatus(row) == "C") {
    //Insert
    $c.gus.cfEnableKeyData($p);
    $c.gus.cfInitHidVal($p, tbl_asetPattern);
    //$c.gus.cfEnableObjects([tbl_asetPattern]);
  } else {
    //cfEnableObjects(tbl_asetPattern);
    //cfDisableKey();

    //코드 검증용 Hidden 초기화
    ed_asetAcqAcctCd.options.hidVal = ds_master.getCellData(row, "asetAcqAcctCd");
    ed_provAcctCd.options.hidVal = ds_master.getCellData(row, "provAcctCd");
    ed_deprAcctCd.options.hidVal = ds_master.getCellData(row, "deprAcctCd");
    ed_deprAcctCdPcost.options.hidVal = ds_master.getCellData(row, "deprAcctCdPcost");

    //console.log(bUpdate)
    //console.log("============"+scwin.bEdit);

    if (scwin.bEdit) {
      if (ds_master.getCellData(row, "asetPatternNm") == "토지") {
        $c.gus.cfEnableObjects($p, [ed_asetAcqAcctCd]);
        $c.gus.cfDisableObjects($p, [ed_provAcctCd, ed_deprAcctCd, ed_deprAcctCdPcost]);
      } else {
        $c.gus.cfEnableObjects($p, [ed_asetAcqAcctCd, ed_provAcctCd, ed_deprAcctCd, ed_deprAcctCdPcost]);
      }
    } else {
      $c.gus.cfEnableObjects($p, [bUpdate]);
      $c.gus.cfDisableObjects($p, tbl_asetPattern);
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 로우를 변경하려고 할 경우 - 필수항목 체크
//-------------------------------------------------------------------------
scwin.ds_master_onbeforerowpositionchange = async function (info) {
  if (scwin.bEdit) {
    if (ds_master.getRowStatus(info.oldRowIndex) == "C" || ds_master.getRowStatus(info.oldRowIndex) == "U") {
      return scwin.f_ValidationSync();
    }
  }
};

/**
 * scwin.f_ValidationSync 사용하기 위한 함수
 */
scwin.myCfValidate = function (oElement) {
  let obj = $c.gus.object($p, oElement);
  if (obj.length != null) {
    for (var i = 0; i < obj.length; i++) {
      let id = obj[i];
      if ($c.gus.cfIsNull($p, id.getValue())) {
        $c.win.alert($p, id.options.title + "은(는) 필수 입력 항목입니다.");
        id.focus();
        return false;
      }
    }
  }
  return true;
};

/**
 * onbeforerowpositionchange 사용을 위한 validation 체크
 */
scwin.f_ValidationSync = function () {
  //필수값 임의로 체크(증빙구분코드, 증빙명, 한도금액)
  let ret = scwin.myCfValidate([ed_asetPatternCd, ed_asetPatternNm, ed_asetAcqAcctCd]);
  if (!ret) {
    return false;
  }
  return true;
};

//취득계정
scwin.udc_asetAcqAcctCd_onblurCodeEvent = function (e) {
  scwin.f_acctPopUp('1', 'T');
};
scwin.udc_asetAcqAcctCd_callBackFunc = function (rtnList) {
  scwin.udc_callBackFunc(rtnList);
};

// 판관비
scwin.udc_deprAcctCdPcost_onblurCodeEvent = function (e) {
  scwin.f_acctPopUp('2', 'T');
};
scwin.udc_deprAcctCdPcost_callBackFunc = function (rtnList) {
  scwin.udc_callBackFunc(rtnList);
};

//충당금
scwin.udc_provAcctCd_onblurCodeEvent = function (e) {
  scwin.f_acctPopUp('3', 'T');
};
scwin.udc_provAcctCd_callBackFunc = function (rtnList) {
  scwin.udc_callBackFunc(rtnList);
};

// 원가
scwin.udc_deprAcctCd_onblurCodeEvent = function (e) {
  scwin.f_acctPopUp('4', 'T');
};
scwin.udc_deprAcctCd_callBackFunc = function (rtnList) {
  scwin.udc_callBackFunc(rtnList);
};

//고정자한유형 팝업
scwin.udc_asetPatternCd_onclickEvent = function (e) {
  scwin.asetPatternCdPopup();
};
scwin.udc_asetPatternCd_onblurCodeEvent = function (e) {
  scwin.asetPatternCdPopup();
};
scwin.asetPatternCdPopup = function () {
  scwin.pCode = ed_srchAsetPatternCd;
  scwin.pName = ed_srchAsetPatternNm;
  udc_asetPatternCd.cfCommonPopUp(scwin.udc_asetPatternCd_callBackFunc // 콜백 함수
  , ed_srchAsetPatternCd.getValue() // 화면에서의 ??? Code Element의 Value
  , ed_srchAsetPatternNm.getValue() // 화면에서의 ??? Name Element의 Value
  , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , lc_srchUseYn.getValue() // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , 'F' // 전체검색허용여부	("F")
  , "자산유형관리,유형코드,유형명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
  );
};
scwin.udc_asetPatternCd_callBackFunc = function (rtnList) {
  scwin.udc_callBackFunc(rtnList);
};
scwin.udc_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    scwin.pCode.setValue(rtnList[0]); // 코드
    scwin.pName.setValue(rtnList[1]); // 명
    scwin.pCode.options.hidVal = rtnList[0];
  } else {
    scwin.pCode.setValue("");
    scwin.pName.setValue("");
    scwin.pCode.options.hidVal = "";
  }
};

//검색 조건 초기화
scwin.btn_reset_onclick = function (e) {
  scwin.f_FieldClear();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유무형구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchAsetPatternClsCd',style:'',submenuSize:'auto',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산유형 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',class:'',code:'asetPatternCd',codeId:'ed_srchAsetPatternCd',id:'udc_asetPatternCd',mandatoryCode:'true',mandatoryName:'true',maxlengthCode:'2',maxlengthName:'20',name:'asetPatternNm',nameId:'ed_srchAsetPatternNm',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'retrieveFixedAsetPatternCdInfo',style:'',validTitle:'고정자산유형코드','ev:onclickEvent':'scwin.udc_asetPatternCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_asetPatternCd_onblurNameEvent','ev:onblurCodeEvent':'scwin.udc_asetPatternCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchUseYn',style:'',submenuSize:'auto',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용안함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_asetPattern',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_asetPatternCd',style:'',ref:'data:ds_master.asetPatternCd',mandatory:'true',label:'고정자산유형코드',invalidMessage:'고정자산유형코드',title:'고정자산유형코드',allowChar:'0-9',maxlength:'2'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'유형명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w300',id:'ed_asetPatternNm',style:'',ref:'data:ds_master.asetPatternNm',mandatory:'true',invalidMessage:'고정자산유형명',title:'고정자산유형명'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'유무형구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_asetPatternClsCd',style:'',submenuSize:'auto',ref:'data:ds_master.asetPatternClsCd',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'면적관리여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_areaMgntYn',style:'',submenuSize:'auto',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'관리안함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'관리함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'취득계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',class:'',code:'asetAcqAcctCd',codeId:'ed_asetAcqAcctCd',id:'udc_asetAcqAcctCd',mandatoryCode:'true',mandatoryName:'true',maxlengthCode:'7',maxlengthName:'20',name:'asetAcqAcctNm',nameId:'ed_asetAcqAcctNm',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'retrieveAcctCdInfo',style:'',validTitle:'취득계정',refDataCollection:'ds_master','ev:onclickEvent':'scwin.udc_asetAcqAcctCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_asetAcqAcctCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'충당금계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',class:'',code:'provAcctCd',codeId:'ed_provAcctCd',id:'udc_provAcctCd',mandatoryCode:'false',mandatoryName:'false',maxlengthCode:'7',maxlengthName:'20',name:'provAcctNm',nameId:'ed_provAcctNm',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'retrieveAcctCdInfo',style:'',validTitle:'충당금계정',refDataCollection:'ds_master','ev:onclickEvent':'scwin.udc_provAcctCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_provAcctCd_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'감가상각비계정(원가)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',class:'',code:'deprAcctCd',codeId:'ed_deprAcctCd',id:'udc_deprAcctCd',mandatoryCode:'false',mandatoryName:'false',maxlengthCode:'7',maxlengthName:'20',name:'deprAcctNm',nameId:'ed_deprAcctNm',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'retrieveAcctCdInfo',style:'',validTitle:'감가상각비계정(원가)',refDataCollection:'ds_master','ev:onclickEvent':'scwin.udc_deprAcctCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_deprAcctCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'감가상각비계정(판관비)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',class:'',code:'deprAcctCdPcost',codeId:'ed_deprAcctCdPcost',id:'udc_deprAcctCdPcost',mandatoryCode:'false',mandatoryName:'false',maxlengthCode:'7',maxlengthName:'20',name:'deprAcctCdPcostNm',nameId:'ed_deprAcctCdPcostNm',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'retrieveAcctCdInfo',style:'',validTitle:'감가상각비계정(판관비)',refDataCollection:'ds_master','ev:onclickEvent':'scwin.udc_deprAcctCdPcost_onclickEvent','ev:onblurCodeEvent':'scwin.udc_deprAcctCdPcost_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_UseYn',style:'',submenuSize:'auto',ref:'data:ds_master.useYn'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용안함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'13',visibleRowNumFix:'true','ev:onbeforecolumnmove':'scwin.gr_master_onbeforecolumnmove',focusMode:'cell'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'코드',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'자산유형',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'자산취득계정',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'충당금계정',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'감가상각비계정(원가) ',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'감가상각비계정(판관비)',width:'200'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column18',value:'사용여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'asetPatternClsCd',inputType:'select',style:'',value:'',width:'70',readOnly:'true'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'asetPatternCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'asetPatternNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'asetAcqAcct',inputType:'text',style:'',value:'',width:'130',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'provAcct',inputType:'text',style:'',value:'',width:'130',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deprAcct',inputType:'text',style:'',value:'',width:'200',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deprAcctPcost',inputType:'text',style:'',value:'',width:'200',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'useYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용안함'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn sm',id:'btn_addRow',label:'행추가',style:'','ev:onclick':'scwin.f_Add',userAuth:'C'}},{T:1,N:'w2:button',A:{class:'btn sm',id:'btn_cancelRow',label:'취소',style:'','ev:onclick':'scwin.f_Cancel'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'bUpdate',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.bUpdate_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'bSave',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.bSave_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})