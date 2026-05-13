/*amd /ui/ac/fi/fixedaset/fi_100_08_02b.xml 53903 1c5842a8cb86adda3a61c8256b78921d678d438d6ab5ff70272ab712665b760d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'asetPatternCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetKndCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_account',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_account_onrowpositionchange','ev:onbeforerowpositionchange':'scwin.ds_account_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetKndCd',name:'자산종류코드',dataType:'text',length:'',defaultValue:'',ignoreStatus:'',useFilter:'',valueType:'',nullYN:''}},{T:1,N:'w2:column',A:{id:'asetKndNm',name:'자산종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternCd',name:'자산유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'자산유형명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAsetKndCd',name:'상위자산종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAsetKndNm',name:'상위자산종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprMthdCd',name:'상각방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxLawDeprMthdCd',name:'세법감가상각방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcLife',name:'내용연수',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'svcLifeMonth',name:'내용월수',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'taxLawSvcLife',name:'세법내용연수',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'deprRt',name:'상각율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'taxLawDeprRt',name:'세법상각율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'insPsblYn',name:'입력가능여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'treeNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperMgntAcctCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkLevel',name:'name18',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.fixedaset.RetrieveAssetsKindContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_account","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_account","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveAccount',action:'/ac.fi.fixedaset.SaveAssetsKindContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_account","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveAccount_submitdone','ev:submiterror':'scwin.sbm_saveAccount_submiterror',abortTrigger:'scwin.sbm_saveAccount_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_100_08_02b
// 이름     : 고정자산종류관리
// 경로     : 회계/재무회계/고정자산
// 작 성 자 : 오영재
// 작 업 일 : 2025-11-26
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================

scwin.tr_actionKind; //조회/수정 구별하기 위한 변수
scwin.load_row = ""; //조회후 focus가게 할  row
scwin.currentRowPosition = 0;
scwin.onpageload = function () {
  $c.gus.cfDisableBtn($p, [btn_update, btn_save]);
  const codeOptions = [{
    grpCd: "FI017",
    compID: "lc_deprMthdCd,lc_taxLawDeprMthdCd"
  }, {
    grpCd: "FI024",
    compID: "lc_useYn"
  }];
  $c.data.setCommonCode($p, codeOptions);

  //scwin.f_HeaderCreate();
};
scwin.onUdcCompleted = function () {
  //ed_srchAsetPatternCd.focus();

  $c.gus.cfDisableKeyData($p);
  scwin.f_ToggleImgBtn(false);
  $c.gus.cfDisableAllBtn($p);
  //cfDisableKeyData 에서 udc 입력항목은 disabled 안되는 것 같아서 cfDisableObjects 로 처리
  //$c.gus.cfDisableObjects([ed_asetPatternCd, ed_asetPatternNm, ed_upperAsetKndCd, ed_upperAsetKndNm]);
};

//-------------------------------------------------------------------------
// 조회 데이터셋 헤더 생성
//-------------------------------------------------------------------------
scwin.f_HeaderCreate = function () {
  //$c.data.createDataMap(dma_search, ["asetPatternCd", "asetKndCd", "useYn"]);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  scwin.tr_actionKind = "SEARCH";
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, searchTb, null);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddItem = function () {
  scwin.tr_actionKind = "INSERT";
  if (scwin.f_IsUpdated() == true) return;
  //입력가능여부 체크
  //if (f_IsInsPsblYn()==true) return;

  let Tmp_String = "";
  let row = 0;
  let countRow = ds_account.getRowCount();

  //let checkLevel = parseInt(tv_treeView.getSelectedElement().checkLevel) +1;
  row = ds_account.getRowPosition();

  //let checkLevel = Number(ds_account.getCellData(row,"checkLevel"))+1; // 이건 선택 level에 붙고
  let checkLevel = tv_treeView.getSelectedNode().depth + 1; // 이건 하위에 붙는다.
  let upperAsetKndCd = ds_account.getCellData(row, "asetKndCd");
  let upperAsetKndNm = ds_account.getCellData(row, "asetKndNm");
  let asetPatternCd = ds_account.getCellData(row, "asetPatternCd");
  let asetPatternNm = ds_account.getCellData(row, "asetPatternNm");

  /*
  let rowJson = ds_account.getRowJSON(row);
  rowJson.checkLevel = checkLevel;
  rowJson.treeNm = "ADD";
  rowJson.upperAsetKndCd = upperAsetKndCd;
  rowJson.upperAsetKndNm = upperAsetKndNm;
  */

  let newIndex = 0;
  if (row == countRow || countRow == 0) {
    newIndex = ds_account.insertRow();
  } else {
    newIndex = ds_account.insertRow(row + 1);
  }
  ds_account.setCellData(newIndex, "checkLevel", checkLevel);
  ds_account.setCellData(newIndex, "treeNm", "ADD");
  ds_account.setCellData(newIndex, "upperAsetKndCd", upperAsetKndCd);
  ds_account.setCellData(newIndex, "upperAsetKndNm", upperAsetKndNm);
  ds_account.setCellData(newIndex, "asetPatternCd", asetPatternCd);
  ds_account.setCellData(newIndex, "asetPatternNm", asetPatternNm);
  scwin.currentRowPosition = ds_account.getRowCount();
  //ds_account.setRowJSON(row, rowJson, true);

  tv_treeView.findNodeByIndex(newIndex + 1, true);
  lc_insPsblYn.setSelectedIndex(1);
  lc_useYn.setSelectedIndex(0);
  lc_deprMthdCd.setSelectedIndex(0);
  lc_taxLawDeprMthdCd.setSelectedIndex(0);
  $c.gus.cfEnableKeyData($p);
  //$c.gus.cfDisableBtn([$c.global.bUpdate]);
  $c.gus.cfDisableBtn($p, [btn_update]);
  $c.gus.cfEnableObjects($p, [btn_save]);
  $c.gus.cfDisableObjects($p, [ed_deprRt, ed_asetPatternCd, asertPatternCdImg]);
  ed_asetKndNm.focus();
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  scwin.tr_actionKind = "UPDATE";
  if (scwin.f_IsUpdated() == true) return;

  // disable 처리
  $c.gus.cfDisableKey($p);
  //$c.gus.cfDisableBtn([$c.global.bUpdate]);
  $c.gus.cfDisableBtn($p, [btn_update]);
  $c.gus.cfEnableObjects($p, [btn_save]);
  scwin.f_ToggleImgBtn(true);

  //focus 설정
  ed_asetKndNm.focus();
  scwin.currentRowPosition = ds_account.getRowPosition();
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  $c.gus.cfDisableKeyData($p);
  //$c.gus.cfDisableBtn($c.global.bSave);
  $c.gus.cfEnableObjects($p, [btn_update]);
  $c.gus.cfDisableBtn($p, [btn_save]);
  scwin.f_ToggleImgBtn(false);
  scwin.currentRowPosition = 0;
  $c.data.undoRow($p, ds_account, "Y");

  //취소 후 R
  ds_account.modifyRowStatus(ds_account.getRowPosition(), "R");
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let count = 0;
  let ret;

  //Mandatory 항목이 누락하지 않았는지 체크한다.
  ret = await $c.gus.cfValidate($p, [tb_acct]);
  if (!ret) return;
  if (ed_asetKndCd.getValue().trim() == ed_upperAsetKndCd.getValue().trim()) {
    $c.gus.cfAlertMsg($p, "계정코드와 상위계정코드는 동일할수 없습니다.");
    ed_upperAsetKndCd.focus();
    return;
  }

  //상각율 유효성 체크
  if (ed_deprRt.getValue() != "") {
    if (parseInt(ed_deprRt.getValue()) >= 1) {
      $c.gus.cfAlertMsg($p, "상각율은 1보다 작아야 합니다.");
      ed_deprRt.focus();
      return;
    }
  }

  //세법상각율 유효성 체크
  if (ed_taxLawDeprRt.getValue() != "") {
    if (parseInt(ed_taxLawDeprRt.getValue()) >= 1) {
      $c.gus.cfAlertMsg($p, "세법상각율은 1보다 작아야 합니다.");
      ed_taxLawDeprRt.focus();
      return;
    }
  }

  //변경한 데이터가 있는지 체크한다.
  if (ds_account.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("자산종류 관리"));
    return;
  }
  ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    //load_row = ds_account.RowPosition;
    scwin.load_row = ds_account.getCellData(ds_account.getRowPosition(), "asetKndCd");
    $c.sbm.execute($p, sbm_saveAccount); //tr_saveAccount.Post();

    // disable 처리
    $c.gus.cfDisableKeyData($p);
    scwin.f_ToggleImgBtn(false);
    $c.gus.cfDisableBtn($p, [btn_save]);
  }
};

//-------------------------------------------------------------------------
// 데이터 변경 체크
//-------------------------------------------------------------------------
scwin.f_IsUpdated = function () {
  if (ds_account.getModifiedIndex().length == 0) return false;
  $c.gus.cfAlertMsg($p, "저장되지 않은 데이타가 있습니다");
  let row = scwin.f_GetChangedRow(ds_account);
  tv_treeView.focus();
  tv_treeView.findNodeByIndex(row + 1, true);
  //tv_treeView.index = row;

  return true;
};

//-------------------------------------------------------------------------
// 팝업
//------------------------------------------------------------------------- 
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  //값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  //if (!$c.gus.cfCanOpenPopup(inObj, pairObj))
  //    return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//검색 : 자산유형
scwin.udc_srchAsetPatternCd_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_srchAsetPatternCd.setValue(rtnList[0]); // 코드
    ed_srchAsetPatternNm.setValue(rtnList[1]); // 명
    ed_srchAsetPatternCd.options.hidVal = rtnList[0];
  } else {
    ed_srchAsetPatternCd.setValue("");
    ed_srchAsetPatternNm.setValue("");
    ed_srchAsetPatternCd.options.hidVal = "";
  }
};
//검색 : 자산종류
scwin.udc_srchAsetKndCd_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_srchAsetKndCd.setValue(rtnList[0]); // 코드
    ed_srchAsetKndNm.setValue(rtnList[1]); // 명
    ed_srchAsetKndCd.options.hidVal = rtnList[0];
  } else {
    ed_srchAsetKndCd.setValue("");
    ed_srchAsetKndNm.setValue("");
    ed_srchAsetKndCd.options.hidVal = "";
  }
};
//자산유형
scwin.udc_asetPatternCd_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_asetPatternCd.setValue(rtnList[0]); // 코드
    ed_asetPatternNm.setValue(rtnList[1]); // 명
    ed_asetPatternCd.options.hidVal = rtnList[0];
  } else {
    ed_asetPatternCd.setValue("");
    ed_asetPatternNm.setValue("");
    ed_asetPatternCd.options.hidVal = "";
  }
};
//상위 자산종류
scwin.udc_upperAsetKndCd_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_upperAsetKndCd.setValue(rtnList[0]); // 코드
    ed_upperAsetKndNm.setValue(rtnList[1]); // 명
    ed_upperAsetKndCd.options.hidVal = rtnList[0];
  } else {
    ed_upperAsetKndCd.setValue("");
    ed_upperAsetKndNm.setValue("");
    ed_upperAsetKndCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  let rtnList; // 공통POP-UP -> 요청화면 
  var pWhere = "";
  switch (disGubun) {
    case 1:
      // 자산유형팝업(검색)	
      // rtnList = cfCommonPopUp('retrieveFixedAsetPatternCdInfo'	// XML상의 SELECT ID	
      //                         ,pCode.trim()			// 화면에서의 ??? Code Element의	Value
      //                         ,pName					// 화면에서의 ??? Name Element의	Value
      //                         ,pClose					// 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      //                         ,null					// 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      //                         ,null					// Title순서	
      //                         ,null					// 보여주는 각 컬럼들의 폭	
      //                         ,null					// 컬럼중에서 숨기는	컬럼 지정	
      //                         ,"1"	// SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      //                         //, null                  // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      //                         ,null					// POP-UP뛰을때 원도우의	사용자 정의	폭
      //                         ,null					// POP-UP뛰을때 우도우의	사용자 정의	높이	
      //                         ,null					// 윈도우 위치 Y좌표	
      //                         ,null					// 윈도우 위치 X좌표
      //                         ,null					// 중복체크여부	("F")
      //                         ,pAllSearch				// 전체검색허용여부	("F")
      //                         ,"자산유형관리,유형코드,유형명"	// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      //                         );

      udc_srchAsetPatternCd.cfCommonPopUp(scwin.udc_srchAsetPatternCd_callBackFunc // 콜백 함수
      , ed_srchAsetPatternCd.getValue() // 화면에서의 ??? Code Element의 Value
      , ed_srchAsetPatternNm.getValue() // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , "1" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "자산유형관리,유형코드,유형명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    case 2:
      // 자산종류팝업(검색)
      // rtnList = cfCommonPopUp('retrieveAsetKndInfo'	// XML상의 SELECT ID	
      //                         ,pCode.trim()			// 화면에서의 ??? Code Element의	Value
      //                         ,pName					// 화면에서의 ??? Name Element의	Value
      //                         ,pClose					// 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      //                         ,null					// 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      //                         ,null					// Title순서	
      //                         ,null					// 보여주는 각 컬럼들의 폭	
      //                         ,null					// 컬럼중에서 숨기는	컬럼 지정	
      //                         ,""				// SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      //                         //, null                  // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      //                         ,null					// POP-UP뛰을때 원도우의	사용자 정의	폭
      //                         ,null					// POP-UP뛰을때 우도우의	사용자 정의	높이	
      //                         ,null					// 윈도우 위치 Y좌표	
      //                         ,null					// 윈도우 위치 X좌표
      //                         ,null					// 중복체크여부	("F")
      //                         ,pAllSearch				// 전체검색허용여부	("F")
      //                         ,"자산종류관리,유형코드,유형명"	// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      //                         );

      udc_srchAsetKndCd.cfCommonPopUp(scwin.udc_srchAsetKndCd_callBackFunc // 콜백 함수
      , ed_srchAsetKndCd.getValue() // 화면에서의 ??? Code Element의 Value
      , ed_srchAsetKndNm.getValue() // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , "" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "자산종류관리,유형코드,유형명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    case 3:
      // 자산유형팝업			
      // rtnList = cfCommonPopUp('retrieveFixedAsetPatternCdInfo'	// XML상의 SELECT ID	
      //                         ,pCode.trim()			// 화면에서의 ??? Code Element의	Value
      //                         ,pName					// 화면에서의 ??? Name Element의	Value
      //                         ,pClose					// 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      //                         ,null					// 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      //                         ,null					// Title순서	
      //                         ,null					// 보여주는 각 컬럼들의 폭	
      //                         ,null					// 컬럼중에서 숨기는	컬럼 지정	
      //                         ,"1"					// SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      //                         //, null                  // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      //                         ,null					// POP-UP뛰을때 원도우의	사용자 정의	폭
      //                         ,null					// POP-UP뛰을때 우도우의	사용자 정의	높이	
      //                         ,null					// 윈도우 위치 Y좌표	
      //                         ,null					// 윈도우 위치 X좌표
      //                         ,null					// 중복체크여부	("F")
      //                         ,pAllSearch				// 전체검색허용여부	("F")
      //                         ,"자산유형관리,유형코드,유형명"	// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      //                         );

      udc_asetPatternCd.cfCommonPopUp(scwin.udc_asetPatternCd_callBackFunc // 콜백 함수
      , ed_asetPatternCd.getValue() // 화면에서의 ??? Code Element의 Value
      , ed_asetPatternCd.getValue() // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , "1" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "자산유형관리,유형코드,유형명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    case 4:
      // 상위종류팝업	
      // rtnList = cfCommonPopUp('retrieveAsetKndInfo'	// XML상의 SELECT ID	
      //                         ,pCode.trim()			// 화면에서의 ??? Code Element의	Value
      //                         ,pName					// 화면에서의 ??? Name Element의	Value
      //                         ,pClose					// 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      //                         ,null					// 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      //                         ,null					// Title순서	
      //                         ,null					// 보여주는 각 컬럼들의 폭	
      //                         ,null					// 컬럼중에서 숨기는	컬럼 지정	
      //                         ,",,0,"						// SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      //                         //, null                  // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      //                         ,null					// POP-UP뛰을때 원도우의	사용자 정의	폭
      //                         ,null					// POP-UP뛰을때 우도우의	사용자 정의	높이	
      //                         ,null					// 윈도우 위치 Y좌표	
      //                         ,null					// 윈도우 위치 X좌표
      //                         ,null					// 중복체크여부	("F")
      //                         ,pAllSearch				// 전체검색허용여부	("F")
      //                         ,"자산종류관리,유형코드,유형명"	// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      //                         );

      udc_upperAsetKndCd.cfCommonPopUp(scwin.udc_upperAsetKndCd_callBackFunc // 콜백 함수
      , ed_upperAsetKndCd.getValue() // 화면에서의 ??? Code Element의 Value
      , ed_upperAsetKndNm.getValue() // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , "" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "자산종류관리,유형코드,유형명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
  }
};

//-------------------------------------------------------------------------
// 상각방법 / 세법상각방법 상호간 데이터 연동
//-------------------------------------------------------------------------
scwin.f_deprMthdCdChange = function (sIsEvent) {
  switch (sIsEvent) {
    case '1':
      lc_taxLawDeprMthdCd.setSelectedIndex(lc_deprMthdCd.getSelectedIndex());
      break;
    case '2':
      //lc_deprMthdCd.index = lc_taxLawDeprMthdCd.index;
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 내용연수 / 세법내용연수 상호간 데이터 연동
//-------------------------------------------------------------------------
scwin.f_svcLifeChange = function (sIsEvent) {
  let value = "";
  let result = 0;
  switch (sIsEvent) {
    case '1':
      txt_taxLawSvcLife.getValue(txt_svcLife.getValue());
      value = txt_svcLife.getValue();
      break;
    case '2':
      //txt_svcLife.value = txt_taxLawSvcLife.value;
      //value = txt_taxLawSvcLife.value
      break;
    default:
      break;
  }

  //값이 존재하면 상각율 계산 (계산식 : 1 / 내용연수)
  //내용연수값이 변경될때만 적용
  if (value.trim() != "" && sIsEvent == "1") {
    if (value > 0) {
      result = parseFloat(1 / value).toFixed(4);
    }
    ds_account.setCellData(ds_account.getRowPosition(), "deprRt", result);
    ds_account.setCellData(ds_account.getRowPosition(), "taxLawDeprRt", result);
  } else if (sIsEvent == "1") {
    //초기화
    ed_deprRt.setValue(0);
    ed_taxLawDeprRt.setValue(0);
  }
};

//-------------------------------------------------------------------------
// 상각율 / 세법상각율 상호간 데이터 연동
//-------------------------------------------------------------------------
scwin.f_deprRtChange = function (sIsEvent) {
  switch (sIsEvent) {
    case '1':
      ed_taxLawDeprRt.getValue(ed_deprRt.getValue());
      break;
    case '2':
      //ed_deprRt.text = ed_taxLawDeprRt.text;
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 이미지 버튼의 Enable/Disable
//-------------------------------------------------------------------------
scwin.f_ToggleImgBtn = function (mode) {
  if (mode == true) {
    $c.gus.cfEnableObjects($p, [upperAsetKndCdImg, asertPatternCdImg]);
  } else {
    $c.gus.cfDisableObjects($p, [upperAsetKndCdImg, asertPatternCdImg]);
  }
};

//-------------------------------------------------------------------------
// 이미지 버튼의 Enable/Disable
//-------------------------------------------------------------------------
scwin.f_ToggleAddDelBtn = function (mode) {
  if (mode == true) {
    $c.gus.cfEnableObjects($p, [btn_add, btn_delete]);
  } else {
    $c.gus.cfDisableObjects($p, [btn_add, btn_delete]);
  }
};

//-------------------------------------------------------------------------
// 데이터셋의 Row가 업데이트 되었는 지 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_IsUpdateRow = function (dataSet, row) {
  return dataSet.getRowStatus(row) == "U";
};

//-------------------------------------------------------------------------
// 데이터셋의 Row가 추가 되었는 지 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_IsInsertRow = function (dataSet, row) {
  return dataSet.getRowStatus(row) == "C";
};

//-------------------------------------------------------------------------
// 데이터셋의 Row가 삭제되었는 지 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_IsDeleteRow = function (dataSet, row) {
  return dataSet.getRowStatus(row) == "D";
};

//-------------------------------------------------------------------------
// Insert 또는 Update 또는 Delete된 Row를 반환한다.
//-------------------------------------------------------------------------
scwin.f_GetChangedRow = function (dataSet) {
  for (let i = 1; i <= dataSet.getRowCount(); i++) {
    if (scwin.f_IsInsertRow(dataSet, i) || scwin.f_IsUpdateRow(dataSet, i)) return i;
  }
  return dataSet.getRowPosition();
};

// 트리 클릭시
scwin.ds_account_onrowpositionchange = function (info) {
  //let row = info.newRowIndex;
  //if (row < 1) return;
  //console.log( ds_account.getAllJSON() );
  //status 가 U 로 변경되는 것 막기
  //$c.gus.cfSetHiddenValue(ed_upperAsetKndCd, ds_account.getCellData(row, "upperAsetKndCd"));
  //ed_upperAsetKndCd.options.hidVal = ds_account.getCellData(info.newRowIndex, "upperAsetKndCd");    

  //let asetKndCd = ds_account.getCellData(row,"asetKndCd");
  //console.log(scwin.f_IsInsertRow(this,row));    
  //console.log(scwin.f_IsUpdateRow(this,row));

  /*
     	if(scwin.f_IsInsertRow(this,row)) {
     		$c.gus.cfEnableKeyData();
          $c.gus.cfDisableBtn([btn_update]);
     		scwin.f_ToggleImgBtn(true);
     	} else if (scwin.f_IsUpdateRow(this,row)) {
     		$c.gus.cfDisableKey();
          $c.gus.cfDisableBtn([btn_update]);
     		scwin.f_ToggleImgBtn(true)
     	} else {
     		$c.gus.cfDisableKeyData();
          $c.gus.cfEnableObjects([btn_update]);
          $c.gus.cfDisableBtn([btn_save]);
     		scwin.f_ToggleImgBtn(false);
     	}
  */
  // rowChange 에는 상태값 안변하게
  //ds_account.modifyAllStatus('R');

  ed_upperAsetKndCd.options.hidVal = ds_account.getCellData(info.newRowIndex, "upperAsetKndCd");
  if (ds_account.getRowStatus(info.newRowIndex) == "C") {
    ed_upperAsetKndCd.options.hidVal = "";
    $c.gus.cfEnableKeyData($p);
    $c.gus.cfDisableBtn($p, [btn_update]);
    scwin.f_ToggleImgBtn(true);
  } else if (ds_account.getRowStatus(info.newRowIndex) == "U") {
    $c.gus.cfDisableKey($p);
    $c.gus.cfDisableBtn($p, [btn_update]);
    scwin.f_ToggleImgBtn(true);
    scwin.f_Update();
  } else {
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfEnableObjects($p, [btn_update]);
    $c.gus.cfDisableBtn($p, [btn_save]);
    scwin.f_ToggleImgBtn(false);
  }
};

// 자산유형조회(검색)
/*
scwin.ed_srchAsetPatternCd_onblur = function (e) {
    scwin.f_chkOpenCommonPopUp(this, ed_srchAsetPatternNm, 1);
};
*/

// 자산유형조회(검색)
/*
scwin.btn_srchAsetPattern_onclick = function (e) {
    scwin.f_openCommonPopUp(1, ed_srchAsetPatternCd.getValue(), ed_srchAsetPatternNm.getValue(), 'F', 'T');
};
*/

// 자산유형조회(검색)
/*
scwin.ed_srchAsetPatternNm_onchange = function (info) {
    scwin.f_chkOpenCommonPopUp(this, ed_srchAsetPatternCd, 1, false);
};
*/

// 자산종류조회(검색)
/*
scwin.ed_srchAsetKindCd_onblur = function (e) {
    scwin.f_chkOpenCommonPopUp(this, txt_srchAsetKindNm, 2);
};
*/

// 자산종류조회(검색)
/*
scwin.btn_srchAsetKind_onclick = function (e) {
    scwin.f_openCommonPopUp(2, ed_srchAsetKindCd.getValue(), txt_srchAsetKindNm.getValue(), 'F', 'T');
};
*/

// 자산종류조회(검색)
/*
scwin.txt_srchAsetKindNm_onchange = function (info) {
    scwin.f_chkOpenCommonPopUp(this, ed_srchAsetKindCd, 2, false);
};
*/

scwin.btn_clear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_search_onclick = function (e) {
  // console.log( dma_search.getJSON() );
  // console.log( ds_account.getModifiedIndex() );
  // ds_account.setRowPosition(3);
  scwin.f_Retrieve();
};

// 자산유형조회
/*
scwin.ed_asetPatternCd_onblur = function (e) {
    scwin.f_chkOpenCommonPopUp(this, txt_asetPatternNm, 3);
};
// 자산유형조회
scwin.asertPatternCdImg_onclick = function (e) {
    scwin.f_openCommonPopUp(3, ed_asetPatternCd.getValue(), txt_asetPatternNm.getValue(), 'F', 'T');
};
*/

// 상위자산종류조회
/*
scwin.ed_upperAsetKndCd_onblur = function (e) {
    scwin.f_chkOpenCommonPopUp(this, txt_upperAsetKndNm, 4);
};
*/

// 상위자산종류조회
/*
scwin.upperAsetKndCdImg_onclick = function (e) {
    scwin.f_openCommonPopUp(4, ed_upperAsetKndCd.getValue(), txt_upperAsetKndNm.getValue(), 'F', 'T');
};
*/

// 상각방법 변경이벤트
scwin.lc_deprMthdCd_onchange = function (info) {
  scwin.f_deprMthdCdChange('1');
};

// 세법상각방법 변경이벤트
scwin.lc_taxLawDeprMthdCd_onchange = function (info) {
  //f_deprMthdCdChange('2'); ---------------------
};

// 내용연수 변경이벤트
scwin.txt_svcLife_onviewchange = function (info) {
  scwin.f_svcLifeChange('1');
};

// 세법내용연수 변경이벤트
scwin.txt_taxLawSvcLife_onviewchange = function (info) {
  scwin.f_svcLifeChange('2');
};

// 상각율 변경이벤트
scwin.ed_deprRt_onblur = function (e) {
  scwin.f_deprRtChange('1');
};

// 세법상각율 변경이벤트
scwin.ed_taxLawDeprRt_onblur = function (e) {
  //f_deprRtChange('2'); ---------------------
};

// 행추가
scwin.btn_add_onclick = function (e) {
  scwin.f_AddItem();
};

// 행취소
scwin.btn_delete_onclick = function (e) {
  scwin.f_Cancel();
};

// 수정
scwin.btn_update_onclick = function (e) {
  scwin.f_Update();
};

// 저장
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.sbm_search_submitdone = function (e) {
  if (ds_account.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    //tv_treeView.ClearAll();
    return;
  }
  //tree에 focus주기
  scwin.currentRowPosition = ds_account.getMatchedIndex("asetKndCd", scwin.load_row);
  tv_treeView.focus();
  let row = scwin.currentRowPosition == 0 ? 1 : scwin.currentRowPosition;
  tv_treeView.findNodeByIndex(row, true);
  scwin.f_ToggleImgBtn(false);

  //ds_account.modifyAllStatus('R'); // 모든 행의 상태를 삭제('R')로 변경
};
scwin.sbm_search_submiterror = function (e) {};
scwin.sbm_saveAccount_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_saveAccount_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

//고정자산유형
scwin.udc_asetPatternCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_asetPatternCd.getValue(), ed_asetPatternNm.getValue(), 'F', 'T');
};
scwin.udc_asetPatternCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_asetPatternCd, ed_asetPatternNm, 3);
};

//고정자산종류
scwin.udc_asetKindCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_asetKindCd.getValue(), ed_asetPatternNm.getValue(), 'F', 'T');
};
scwin.udc_asetKindCd_onblurNameEvent = function (e) {};
scwin.udc_asetKindCd_onblurCodeEvent = function (e) {};

//검색 : 자산유형
scwin.udc_srchAsetPatternCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_srchAsetPatternCd.getValue(), ed_srchAsetPatternNm.getValue(), 'F', 'T');
};

//검색 : 자산유형
scwin.udc_srchAsetPatternCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_srchAsetPatternCd, ed_srchAsetPatternNm, 1);
};
scwin.udc_srchAsetPatternCd_onblurNameEvent = function (e) {};

//검색 : 고정자산종류
scwin.udc_srchAsetKndCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_srchAsetKndCd.getValue(), ed_srchAsetKndNm.getValue(), 'F', 'T');
};

//상위자산종류
scwin.udc_upperAsetKndCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_upperAsetKndCd.getValue(), ed_upperAsetKndNm.getValue(), 'F', 'T');
};
scwin.btn_reset_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.udc_srchAsetKndCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_srchAsetKndCd, ed_srchAsetKndNm, 2);
};
scwin.udc_upperAsetKndCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_upperAsetKndCd, ed_upperAsetKndNm, 4);
};
scwin.ds_account_onbeforerowpositionchange = function (info) {};
}}}]},{T:1,N:'style',E:[{T:3,text:'\n    		.guide-wrap{overflow:hidden} .guide-con .tabbox > .wq_tab .w2tabcontrol_container{height: calc(100% - 60px)!important;}\n    		.guide-con .tab-flex{display:flex;height:calc(100vh - 100px);} .guide-con .tab-flex .page{overflow:hidden;} .guide-con .tab-flex\n    		.w2tabcontrol{width:100%;box-sizing:border-box} .guide-con{background:#F3F5F6;padding:20px} .guide-con .tab\n    		li{background:#E6EAED;} .guide-con .wq_tab_sub{padding:0 20px} .guide-wrap h2{height:60px;color:#fff;font-size:20px;padding: 0\n    		20px;font-weight:400;box-sizing:border-box;background:#20242B url(\'../../cm/images/base/logo.png\')no-repeat 10px center;display:\n    		flex;} .guide-wrap h2 span{padding: 12px 0 0 150px;font-weight: 600;align-items: center;display: flex;} .guide-con\n    		h3{font-size:16px;font-weight:400} .guide-con .round-box{border:1px solid #E6E9EE;padding:20px;border-radius:20px} .guide-con\n    		.tabbox .wq_tab .w2tabcontrol_contents_wrapper .wq_tab_sub .w2tabcontrol_contents_wrapper{padding:20px 0}\n\n    	'}]},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',class:''},E:[{T:1,N:'xf:group',A:{id:'',class:'sub_contents'},E:[{T:1,N:'w2:wframe',A:{style:'',id:'',src:'/cm/xml/contentHeader.xml'}},{T:1,N:'xf:group',A:{class:'shbox w-auto',id:'searchTb',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산유형 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',class:'',code:'asetPatternCd',codeId:'ed_srchAsetPatternCd',id:'udc_srchAsetPatternCd',mandatoryCode:'true',mandatoryName:'true',maxlengthCode:'5',maxlengthName:'20',name:'asetPatternNm',nameId:'ed_srchAsetPatternNm',popupID:'',selectID:'retrieveFixedAsetPatternCdInfo',style:'',validTitle:'고정자산유형코드','ev:onclickEvent':'scwin.udc_srchAsetPatternCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_srchAsetPatternCd_onblurCodeEvent',refDataCollection:'dma_search'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',class:'',code:'asetKndCd',codeId:'ed_srchAsetKndCd',id:'udc_srchAsetKndCd',mandatoryCode:'true',mandatoryName:'true',maxlengthCode:'5',maxlengthName:'20',name:'asetKndNm',nameId:'ed_srchAsetKndNm',popupID:'',selectID:'retrieveAsetKndInfo',style:'',validTitle:'고정자산종류코드','ev:onclickEvent':'scwin.udc_srchAsetKndCd_onclickEvent',refDataCollection:'dma_search','ev:onblurCodeEvent':'scwin.udc_srchAsetKndCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchUseYn',ref:'data:dma_search.useYn',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'lybox wfix'},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 600px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_add',style:'',type:'button','ev:onclick':'scwin.btn_add_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.btn_delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'N',gridDownYn:'N',gridUpYn:'N',btnPlusYn:'N'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'tvw-wrap'},E:[{T:1,N:'w2:treeview',A:{tooltipGroupClass:'false',dataType:'listed',style:'min-height:400px;',id:'tv_treeView',renderType:'virtual',showTreeDepth:'2',class:'h-full'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_account'},E:[{T:1,N:'w2:label',A:{ref:'treeNm'}},{T:1,N:'w2:value',A:{ref:'upperAsetKndCd'}},{T:1,N:'w2:depth',A:{ref:'checkLevel'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]},{T:1,N:'xf:input',A:{id:'ed_asetKndCd',style:'width: 144px;height: 21px;display: none;',ref:'data:ds_account.asetKndCd','data-length':'',maxByteLength:''}}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tb_acct',style:'width:100%; ',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'코드명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control full',id:'ed_asetKndNm',style:'',maxlength:'50',validExp:'코드명:yes:maxByteLength=50',mandatory:'true',objType:'data',ref:'data:ds_account.asetKndNm',title:'코드명'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'자산유형',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'section flex-col col6 sch-box',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',class:'',code:'asetPatternCd',codeId:'ed_asetPatternCd','ev:onblurCodeEvent':'scwin.udc_asetPatternCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_asetPatternCd_onclickEvent',id:'udc_asetPatternCd',mandatoryCode:'true',mandatoryName:'true',maxlengthCode:'5',maxlengthName:'20',name:'asetPatternNm',nameId:'ed_asetPatternNm',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'retrieveFixedAsetPatternCdInfo',style:'',validTitle:'고정자산유형코드',btnId:'asertPatternCdImg',refDataCollection:'ds_account'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상위종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'section flex-col col6 sch-box',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',class:'',code:'upperAsetKndCd',codeId:'ed_upperAsetKndCd',id:'udc_upperAsetKndCd',mandatoryCode:'true',mandatoryName:'true',maxlengthCode:'5',maxlengthName:'20',name:'upperAsetKndNm',nameId:'ed_upperAsetKndNm',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'retrieveAsetKndInfo',style:'',validTitle:'고정자산종류코드','ev:onclickEvent':'scwin.udc_upperAsetKndCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_upperAsetKndCd_onblurCodeEvent',btnId:'upperAsetKndCdImg',refDataCollection:'ds_account'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상각방법',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_deprMthdCd',ref:'data:ds_account.deprMthdCd',renderType:'component',style:'',submenuSize:'auto',class:'form-control',mandatory:'true',objType:'data',validExp:'상각방법:yes','ev:onchange':'scwin.lc_deprMthdCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_FI017'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세법상각방법',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_taxLawDeprMthdCd',ref:'data:ds_account.taxLawDeprMthdCd',renderType:'component',style:'',submenuSize:'auto',objType:'data','ev:onchange':'scwin.lc_taxLawDeprMthdCd_onchange',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_FI017'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'내용연수',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control right tar',id:'txt_svcLife',style:'',objType:'data',validExp:'내용연수:yes',mandatory:'true',ref:'data:ds_account.svcLife',invalidMessage:'내용연수','ev:onviewchange':'scwin.txt_svcLife_onviewchange'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'내용월수',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control tar',id:'txt_svcLifeMonth',style:'',objType:'data',validExp:'내용월수:No',ref:'data:ds_account.svcLifeMonth',invalidMessage:'내용월수'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세법내용연수',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control tar',id:'txt_taxLawSvcLife',style:'',objType:'data',ref:'data:ds_account.taxLawSvcLife',invalidMessage:'세법내용연수','ev:onviewchange':'scwin.txt_taxLawSvcLife_onviewchange'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상각율',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control tar',id:'ed_deprRt',style:'',objType:'key',mandatory:'true',validExp:'상각율:yes',editType:'select',dataType:'float','ev:onblur':'scwin.ed_deprRt_onblur',displayFormat:' #,###.####',maxlength:'5.4',ref:'data:ds_account.deprRt',invalidMessage:'상각율'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세법상각율',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control tar',id:'ed_taxLawDeprRt',style:'',dataType:'float',maxlength:'5.4',mandatory:'true',objType:'data','ev:onblur':'scwin.ed_taxLawDeprRt_onblur',displayFormat:' #,###.####',ref:'data:ds_account.taxLawDeprRt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입력가능여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_insPsblYn',ref:'data:ds_account.insPsblYn',renderType:'component',style:'',submenuSize:'auto',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'불가능'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'입력가능'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_useYn',ref:'data:ds_account.useYn',renderType:'component',style:'',submenuSize:'auto',objType:'data'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_update',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.btn_update_onclick',objType:'bUpdate',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.btn_save_onclick',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})