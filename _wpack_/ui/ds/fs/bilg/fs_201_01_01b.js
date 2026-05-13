/*amd /ui/ds/fs/bilg/fs_201_01_01b.xml 49216 b904ee4b70f80bd8596f444715a357e7ce88535ce6cd868a622dcfe7310738ff */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_clntlist',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_clntlist_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_clntlist_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_billingpattern_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_billingpattern',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntPatternCd',name:'청구거래처유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impCstmclrncReceptClntYn',name:'수입통관수령거래처여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpTransReceptClntYn',name:'수출입운송수령거래처여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yardStrRateReceptClntYn',name:'장치장보관료수령거래처여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtImpTransOdrBilgYn',name:'화주수입운송오더청구여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expMchtStvCvsslCompleteYn',name:'수출화주하역본선완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expMchtCntrtransBilgStdCd',name:'수출화주CNTR운송청구기준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpCvsslBilgStdDdCnt',name:'수출입본선청구기준일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtBulkStvBilgStdCd',name:'화주벌크하역청구기준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDd1',name:'기준일1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDd2',name:'기준일2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDd3',name:'기준일3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDd4',name:'기준일4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDd5',name:'기준일5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lstDdYn',name:'말일여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'balUnpaidProcUnitClsCd',name:'끝전처리단위구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'balUnpaidRndClsCd',name:'끝전반올림구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtRndClsCd',name:'공급금액반올림구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntGrp',name:'거래처그룹',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtProcUnitClsCd',name:'공급금액처리단위구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtInscrpNm',name:'금액표기명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcrcInscrpNm',name:'외화표기명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnvrsnAmtInscrpClsCd',name:'환산금액표기구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billAmtInscrpCrcCd',name:'BILL금액표기통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmstrRatestdDd1',name:'월보관료기준일1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmstrRatelstDdYn',name:'월말관료말일여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_billingpattern_retrieve',action:'/ds.fs.bilg.bilgcomncdmgnt.RetrieveBillingPatternCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_billingpattern_con","key":"IN_DS1"},{"id":"ds_billingpattern","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_billingpattern","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_billingpattern_retrieve_submitdone','ev:submiterror':'scwin.sbm_billingpattern_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_billingpattern_save',action:'/ds.fs.bilg.bilgcomncdmgnt.UpdateBillingPatternCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_billingpattern","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_billingpattern_save_submitdone','ev:submiterror':'scwin.sbm_billingpattern_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_clntlist_retrieve',action:'/ds.fs.bilg.bilgcomncdmgnt.RetrieveBillingPatternCustomerListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_clntlist_con","key":"IN_DS1"},{"id":"ds_clntlist","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_clntlist","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_clntlist_retrieve_submitdone','ev:submiterror':'scwin.sbm_clntlist_retrieve_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//물류>청구>청구공통코드관리>청구PATTERN등록
//조회조건 - 청구부서 : 6AA

//메세지용 전역변수 SETTING
scwin.MSG_FS_WRN_004 = "저장되지 않은 건입니다.";
scwin.MSG_FS_WRN_005 = "공통코드는 삭제할 수 없습니다.";
scwin.MSG_FS_WRN_022 = "30일 이상은 입력할 수 없습니다.";
scwin.addflag = ""; // 신규입력/수정 구분자
scwin.delflag = ""; // 삭제 구분자        
scwin.condition = ""; // DataSet 구분자    	

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {};
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "FS264",
    compID: "acb_cnvrsnAmtInscrpClsCd"
  } //환산금액표기구분
  ];
  $c.data.setCommonCode($p, codeOptions);
  ed_bilgLoofcCd.focus();
  scwin.fn_setDefaultData();
  $c.gus.cfDisableAllBtn($p);
  $c.gus.cfDisableObjects($p, [btn_addRow, btn_cancelRow]);
};
scwin.fn_setDefaultData = function () {
  rd_bilgClntPatternCd.setValue("01");
  rd_mchtImpTransOdrBilgYn.setValue("0");
  rd_expMchtCntrtransBilgStdCd.setValue("01");
  rd_mchtBulkStvBilgStdCd.setValue("01");
  scwin.f_chkBilgClntPatternCd();
};

//-------------------------------------------------------------------------
// 조건에 따라 DataSet 가져오기
//-------------------------------------------------------------------------
scwin.f_GetDataSet = function (condition, row) {
  //ds_clntlist.setJSON([]);
  if (condition == "CLNT_CON") {
    ds_clntlist.setJSON([]);
    ds_clntlist_con.set("bilgLoofcCd", ed_bilgLoofcCd.getValue());
    $c.sbm.setAction($p, sbm_clntlist_retrieve, "/ds.fs.bilg.bilgcomncdmgnt.RetrieveBillingPatternCustomerListCMD.do");
    $c.sbm.execute($p, sbm_clntlist_retrieve);
  } else if (condition == "BILLING_CON") {
    ds_billingpattern.setJSON([]);
    ds_billingpattern_con.set("bilgLoofcCd", ds_clntlist.getCellData(0, "bilgLoofcCd"));
    ds_billingpattern_con.set("clntNo", ds_clntlist.getCellData(row, "clntNo"));

    //청구패턴 DataSet(공통코드)
    if (row == "0") {
      $c.sbm.setAction($p, sbm_billingpattern_retrieve, "/ds.fs.bilg.bilgcomncdmgnt.RetrieveBillingPatternCMD.do");
      //청구패턴 DataSet(해당코드)
    } else {
      $c.sbm.setAction($p, sbm_billingpattern_retrieve, "/ds.fs.bilg.bilgcomncdmgnt.RetrieveBillingPatternCMD.do");
    }
    $c.sbm.execute($p, sbm_billingpattern_retrieve);
  }
};
//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_bilgLoofcCd]))) return;

  //조건에 따라 DataSet 가져오기 함수
  scwin.f_GetDataSet("CLNT_CON");
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //validation check        
  if (!(await $c.gus.cfValidate($p, [gr_clntlist, cbx_lstDdYn, cbx_impCstmclrncReceptClntYn, cbx_expimpTransReceptClntYn, cbx_yardStrRateReceptClntYn, cbx_expMchtStvCvsslCompleteYn]))) return;

  //if (! $c.gus.cfValidateValue(ed_stdDd1.getValue(),"maxNumber=29")) {
  if (!scwin.fn_validateValue(ed_stdDd1.getValue(), "29")) {
    await $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_022);
    ed_stdDd1.focus();
    return false;
  }
  if (!scwin.fn_validateValue(ed_stdDd2.getValue(), "29")) {
    await $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_022);
    ed_stdDd2.focus();
    return false;
  }
  if (!scwin.fn_validateValue(ed_stdDd3.getValue(), "29")) {
    await $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_022);
    ed_stdDd3.focus();
    return false;
  }
  if (!scwin.fn_validateValue(ed_stdDd4.getValue(), "29")) {
    await $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_022);
    ed_stdDd4.focus();
    return false;
  }
  if (!scwin.fn_validateValue(ed_stdDd5.getValue(), "29")) {
    await $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_022);
    ed_stdDd5.focus();
    return false;
  }

  //if(!await $c.win.cfConfirmMsg(MSG_CM_CRM_001))
  if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) return;
  ds_billingpattern.setCellData(0, "bilgLoofcCd", ds_clntlist.getCellData(0, "bilgLoofcCd"));
  ds_billingpattern.setCellData(0, "clntNo", ds_clntlist.getCellData(ds_clntlist.getRowPosition(), "clntNo"));

  //체크박스
  ds_billingpattern.setCellData(0, "impCstmclrncReceptClntYn", cbx_impCstmclrncReceptClntYn.getSelectedIndex().length > 0 ? "1" : "0");
  ds_billingpattern.setCellData(0, "expimpTransReceptClntYn", cbx_expimpTransReceptClntYn.getSelectedIndex().length > 0 ? "1" : "0");
  ds_billingpattern.setCellData(0, "yardStrRateReceptClntYn", cbx_yardStrRateReceptClntYn.getSelectedIndex().length > 0 ? "1" : "0");
  ds_billingpattern.setCellData(0, "expMchtStvCvsslCompleteYn", cbx_expMchtStvCvsslCompleteYn.getSelectedIndex().length > 0 ? "1" : "0");
  ds_billingpattern.setCellData(0, "lstDdYn", cbx_lstDdYn.getSelectedIndex().length > 0 ? "1" : "0");
  ds_billingpattern.setCellData(0, "mmstrRatelstDdYn", cbx_mmstrRatelstDdYn.getSelectedIndex().length > 0 ? "1" : "0");
  console.log("======================================================");
  console.log(ds_billingpattern.getCellData(0, "impCstmclrncReceptClntYn"));
  console.log(ds_billingpattern.getCellData(0, "expimpTransReceptClntYn"));
  console.log(ds_billingpattern.getCellData(0, "yardStrRateReceptClntYn"));
  console.log(ds_billingpattern.getCellData(0, "expMchtStvCvsslCompleteYn"));
  console.log(ds_billingpattern.getCellData(0, "lstDdYn"));
  console.log(ds_billingpattern.getCellData(0, "mmstrRatelstDdYn"));
  console.log("======================================================");

  //삭제구분
  scwin.delflag = "";

  //신규 입력
  if (scwin.addflag == "REG") {
    $c.sbm.setAction($p, sbm_billingpattern_save, "/ds.fs.bilg.bilgcomncdmgnt.RegistBillingPatternCMD.do");
    //수정
  } else if (scwin.addflag == "" || scwin.addflag == "MOD") {
    $c.sbm.setAction($p, sbm_billingpattern_save, "/ds.fs.bilg.bilgcomncdmgnt.UpdateBillingPatternCMD.do");
  }
  $c.sbm.execute($p, sbm_billingpattern_save);
};
scwin.fn_validateValue = function (val, len) {
  if (val.length > 0) {
    if (parseInt(val) > len) {
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 그리드 추가
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  //var rowCount = ds_clntlist.getRowCount();

  var chk = ds_clntlist.getInsertedJSON().length;
  if (chk > 0) {
    if ((await $c.win.confirm($p, "저장하지 않은 데이타를 취소하시겠습니까?")) == true) {
      ds_clntlist.undoAll();
    }
    scwin.f_Popup();
    return;
  }
  ds_clntlist.setEventPause(true);
  var row = ds_clntlist.insertRow();
  scwin.f_Popup();
  //조건에 따라 DataSet 가져오기 함수
  scwin.f_GetDataSet("BILLING_CON", "0"); //첫라인

  scwin.fn_setDefaultData();
  scwin.f_Editable("true");
  scwin.addflag = "REG";
  gr_clntlist.setFocusedCell(row, "clntNo", false);
  ds_clntlist.setEventPause(false);
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  //if(ds_clntlist.RowStatus(ds_clntlist.getRowPosition()) == 1){
  if (ds_clntlist.getRowStatus(ds_clntlist.getRowPosition()) == "C") {
    await $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_004);
    return;
  } else {
    //if (ds_clntlist.getCellData(ds_clntlist.getRowPosition(), "clntNo") == "0000"){
    if (ds_clntlist.getCellData(ds_clntlist.getRowPosition(), "clntNo") == "000000") {
      await $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_005);
      return;
    }

    //if(await $c.gus.cfConfirmMsg(MSG_CM_CRM_004) == true){
    if ((await $c.win.confirm($p, MSG_CM_CRM_004)) == true) {
      ds_clntlist.deleteRow(ds_clntlist.getRowPosition());
      ds_billingpattern.deleteRow(ds_billingpattern.getRowPosition());

      //ds_billingpattern.deleteRow(ds_billingpattern.getRowPosition());
      //ds_billingpattern.UseChangeInfo = "true";

      //DataSet의 Change Information을 이용하여 Data를 전송할 것인가 여부를 정한다.
      //BOOLbValue : Row Status 사용 여부 (true : RowStatus 사용 / false : 모두 Insert 처리).

      scwin.delflag = "DEL";
      $c.sbm.setAction($p, sbm_billingpattern_save, "/ds.fs.bilg.bilgcomncdmgnt.DeleteBillingPatternCMD.do");
      $c.sbm.execute($p, sbm_billingpattern_save);
    }
  }
};

//-------------------------------------------------------------------------
// Disable 처리
//-------------------------------------------------------------------------
scwin.f_Editable = function (edit) {
  if (edit == "true") {
    gr_clntlist.setCellReadOnly(ds_clntlist.getRowPosition(), "clntNo", false);
  } else {
    gr_clntlist.setCellReadOnly(ds_clntlist.getRowPosition(), "clntNo", true);
  }
};

//-------------------------------------------------------------------------
// Checkbox Value 값 가져오기
//-------------------------------------------------------------------------	
/* 	scwin.f_GetChkValue = function(chk) {
        if ( chk.checked ) return 1;
        else return 0;
	};
 */
//-------------------------------------------------------------------------
// Checkbox Value 값 세팅
//-------------------------------------------------------------------------	

scwin.f_SetChkValue = function (ds_id, row, id) {
  if (ds_id.getCellData(row, id) == 1) return true;else return false;
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------	
scwin.f_Cancel = function () {
  //ds_clntlist.undoAll();
  $c.data.undoAll($p, ds_clntlist);
  scwin.addflag = "MOD";
};

//-------------------------------------------------------------------------
// 팝업창 띄우기
//-------------------------------------------------------------------------	
scwin.f_Popup = function () {
  // 선언부
  //var rtnList  = new Array();  // 공통POP-UP -> 요청화면 
  var pCode = "";
  var pName = "";

  // 거래처번호팝업			
  //pCode = ds_clntlist.getCellData(ds_clntlist.getRowPosition(),"clntNo").replace(/\s*$/, '');		// 거래처번호
  udc_comCodeGrid.setSelectId("retrieveClntList");
  rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridCallback // XML상의 SELECT ID	
  , pCode // 화면에서의 ??? Code Element의	Value
  , pName // 화면에서의 ??? Name Element의	Value
  , 'F' // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서	
  , null // 보여주는 각 컬럼들의 폭	
  , null // 컬럼중에서 숨기는	컬럼 지정	
  , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부
  , 'F' // 전체검색허용여부
  , null // POP-UP Window Title 검색어1,2(각화면에서 변경할경우)	  							
  );
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      //청구지점코드팝업			
      udc_bilgLoofcCd.setSelectId("retrieveOpDeptCdInfo");
      rtnList = udc_bilgLoofcCd.cfCommonPopUp(scwin.udc_bilgLoofcCdCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 청구거래처유형 - 확인선택시에만 날짜 활성화시킨다
//-------------------------------------------------------------------------
scwin.f_chkBilgClntPatternCd = function () {
  if (rd_bilgClntPatternCd.getValue() == "02") {
    ed_stdDd1.setReadOnly(true);
    ed_stdDd2.setReadOnly(true);
    ed_stdDd3.setReadOnly(true);
    ed_stdDd4.setReadOnly(true);
    ed_stdDd5.setReadOnly(true);
    cbx_lstDdYn.setDisabled(true);

    //cbx_lstDdYn.disabled = true;
    ed_stdDd1.setValue("");
    ed_stdDd2.setValue("");
    ed_stdDd3.setValue("");
    ed_stdDd4.setValue("");
    ed_stdDd5.setValue("");
    cbx_lstDdYn.setValue("0");
  } else {
    ed_stdDd1.setReadOnly(false);
    ed_stdDd2.setReadOnly(false);
    ed_stdDd3.setReadOnly(false);
    ed_stdDd4.setReadOnly(false);
    ed_stdDd5.setReadOnly(false);
    cbx_lstDdYn.setDisabled(false);
  }
};
scwin.btn_retrieve_onclick = function (e) {
  //console.log("scwin.btn_retrieve_onclick ~~~~!!");
  scwin.f_Retrieve();
};
scwin.btn_addRow_onclick = function (e) {
  scwin.f_AddRow();
};
scwin.btn_cancelRow_onClick = function (e) {
  scwin.f_Cancel();
};
scwin.btn_edit_onclick = function (e) {
  //as-is 수정버튼 사용안함.
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_delete_onclick = function (e) {
  scwin.f_Delete();
};
scwin.udc_bilgLoofcCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLoofcCd, ed_bilgLoofcNm, 1);
};
scwin.udc_bilgLoofcCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLoofcNm, ed_bilgLoofcCd, 1, false);
};
scwin.udc_bilgLoofcCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgLoofcCd.getValue(), ed_bilgLoofcNm.getValue(), 'F', 'F');
};
scwin.sbm_clntlist_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_clntlist.getRowCount();
  if (rowcnt == 0) {
    $c.gus.cfInitObjects($p, tbl_search);
    $c.gus.cfDisableAllBtn($p);
    $c.gus.cfDisableObjects($p, [btn_addRow, btn_cancelRow]);
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    $c.gus.cfEnableAllBtn($p);
    $c.gus.cfEnableObjects($p, [btn_addRow, btn_cancelRow]);

    //조건에 따라 DataSet 가져오기 함수
    scwin.f_GetDataSet("BILLING_CON", "0");

    //edit 불가능하게 처리
    scwin.f_Editable("false");
    gr_clntlist.setFocusedCell(0, "clntNo", false);
  }
  tbx_totalRows.setValue(rowcnt);
};
scwin.sbm_clntlist_retrieve_submiterror = function (e) {};
scwin.sbm_billingpattern_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  if (ds_billingpattern.getRowCount() == 0) {
    ds_billingpattern.insertRow();
    scwin.fn_setDefaultData();
  } else {
    /*
            //청구패턴 DataSet 화면에 세팅하기
            rd_bilgClntPatternCd.CodeValue                = ds_billingpattern.getCellData(0,"bilgClntPatternCd"); 
            chb_impCstmclrncReceptClntYn.checked          = scwin.f_SetChkValue(ds_billingpattern,0,"impCstmclrncReceptClntYn");
            chb_expimpTransReceptClntYn.checked           = scwin.f_SetChkValue(ds_billingpattern,0,"expimpTransReceptClntYn");
            chb_yardStrRateReceptClntYn.checked		      = scwin.f_SetChkValue(ds_billingpattern,0,"yardStrRateReceptClntYn");
            rd_mchtImpTransOdrBilgYn.CodeValue            = ds_billingpattern.getCellData(0,"mchtImpTransOdrBilgYn");
            chb_expMchtStvCvsslCompleteYn.checked         = scwin.f_SetChkValue(ds_billingpattern,0,"expMchtStvCvsslCompleteYn");
            rd_expMchtCntrtransBilgStdCd.CodeValue		  = ds_billingpattern.getCellData(0,"expMchtCntrtransBilgStdCd");
            ed_expimpCvsslBilgStdDdCnt.text               = ds_billingpattern.getCellData(0,"expimpCvsslBilgStdDdCnt");
            rd_mchtBulkStvBilgStdCd.CodeValue		      = ds_billingpattern.getCellData(0,"mchtBulkStvBilgStdCd");
            ed_stdDd1.text                                = ds_billingpattern.getCellData(0,"stdDd1");
            ed_stdDd2.text                                = ds_billingpattern.getCellData(0,"stdDd2");
            ed_stdDd3.text                                = ds_billingpattern.getCellData(0,"stdDd3");
            ed_stdDd4.text                                = ds_billingpattern.getCellData(0,"stdDd4");
            ed_stdDd5.text							      =	ds_billingpattern.getCellData(0,"stdDd5"); 
            chb_lstDdYn.checked		                      = scwin.f_SetChkValue(ds_billingpattern,0,"lstDdYn");
            lc_balUnpaidProcUnitClsCd.BindColVal     	  = ds_billingpattern.getCellData(0,"balUnpaidProcUnitClsCd");
            lc_balUnpaidRndClsCd.BindColVal     	      = ds_billingpattern.getCellData(0,"balUnpaidRndClsCd");
            lc_spplyAmtRndClsCd.BindColVal     			  =	ds_billingpattern.getCellData(0,"spplyAmtRndClsCd");
            txt_clntGrp.value                  			  =	ds_billingpattern.getCellData(0,"clntGrp"); 	
            lc_spplyAmtProcUnitClsCd.BindColVal     	  =	ds_billingpattern.getCellData(0,"spplyAmtProcUnitClsCd"); 			
            txt_amtInscrpNm.value              			  =	ds_billingpattern.getCellData(0,"amtInscrpNm"); 	
            txt_fcrcInscrpNm.value             			  =	ds_billingpattern.getCellData(0,"fcrcInscrpNm"); 			
            lc_cnvrsnAmtInscrpClsCd.BindColVal     	      =	ds_billingpattern.getCellData(0,"cnvrsnAmtInscrpClsCd"); 			
            lc_billAmtInscrpCrcCd.BindColVal     	      =	ds_billingpattern.getCellData(0,"billAmtInscrpCrcCd");					
            
            ed_mmstrRatestdDd1.text                       = ds_billingpattern.getCellData(0,"mmstrRatestdDd1");
            chb_mmstrRatelstDdYn.checked          		  = scwin.f_SetChkValue(ds_billingpattern,0,"mmstrRatelstDdYn");
    */
    //체크박스
    cbx_impCstmclrncReceptClntYn.checkAll(scwin.f_SetChkValue(ds_billingpattern, 0, "impCstmclrncReceptClntYn"));
    cbx_expimpTransReceptClntYn.checkAll(scwin.f_SetChkValue(ds_billingpattern, 0, "expimpTransReceptClntYn"));
    cbx_yardStrRateReceptClntYn.checkAll(scwin.f_SetChkValue(ds_billingpattern, 0, "yardStrRateReceptClntYn"));
    cbx_expMchtStvCvsslCompleteYn.checkAll(scwin.f_SetChkValue(ds_billingpattern, 0, "expMchtStvCvsslCompleteYn"));
    cbx_lstDdYn.checkAll(scwin.f_SetChkValue(ds_billingpattern, 0, "lstDdYn"));
    cbx_mmstrRatelstDdYn.checkAll(scwin.f_SetChkValue(ds_billingpattern, 0, "mmstrRatelstDdYn"));
  }
  ds_billingpattern.setRowPosition(0);
};
scwin.sbm_billingpattern_retrieve_submiterror = function (e) {};
scwin.sbm_billingpattern_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

  scwin.addflag = "MOD";
  if (scwin.delflag == "DEL") {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  }
  scwin.f_Retrieve();
  // ds_billingpattern.reform();
};
scwin.sbm_billingpattern_save_submiterror = function (e) {};
scwin.udc_bilgLoofcCdCallback = function (ret) {
  scwin.f_setUdcPopCallback(ret, ed_bilgLoofcCd, ed_bilgLoofcNm);
};
scwin.udc_comCodeGridCallback = function (rtnList) {
  //console.log("scwin.udc_comCodeGridCallback~~~");

  if (rtnList != null && rtnList[0] != "N/A") {
    //return value Assign
    ds_clntlist.setCellData(ds_clntlist.getRowPosition(), "clntNo", rtnList[0]); //거래처번호
    ds_clntlist.setCellData(ds_clntlist.getRowPosition(), "clntNm", rtnList[1]); //거래처명					
  }
};

//udc팝업공통 콜백처리
scwin.f_setUdcPopCallback = function (ret, objCode, objName) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        objCode.setValue("");
        objName.setValue("");
        objCode.hidVal = "";
        return;
      }
      objCode.setValue(rtnList[0]); // 코드값
      objName.setValue(rtnList[1]); // 코드명
      objCode.hidVal = rtnList[0]; // 코드값
    } else {
      objCode.setValue("");
      objName.setValue("");
      objCode.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};
scwin.ds_clntlist_onrowpositionchange = async function (info) {
  var rowIndex = info.newRowIndex;
  var oldRow = info.oldRowIndex;
  if (!(await scwin.fn_onbeforerowpositionchange(rowIndex, oldRow))) {
    return;
  }
  ;

  //console.log('ds_clntlist_onrowpositionchange1~~');
  //console.log(await scwin.fn_onbeforerowpositionchange(rowIndex, oldRow));

  var row = info.newRowIndex;
  //ds_billingpattern.setJSON([]);
  if (ds_clntlist.getRowStatus(ds_clntlist.getRowPosition()) != "C") {
    //조건에 따라 DataSet 가져오기 함수
    scwin.f_GetDataSet("BILLING_CON", row);
    scwin.addflag = "MOD";
    scwin.f_Editable("false");
  } else {
    if (ds_billingpattern.getRowCount() < 1) {
      ds_billingpattern.insertRow();
      scwin.fn_setDefaultData();
    }
    scwin.f_Editable("true");
    scwin.addflag = "REG";
  }
  scwin.f_chkBilgClntPatternCd();
};
scwin.fn_onbeforerowpositionchange = async function (newRow, oldRow) {
  //var newRow = rowIndex;
  if (oldRow != null && newRow != null && ds_clntlist.getRowStatus(oldRow) == 'C') {
    //저장하지않은 상태로 로우 변경 체크
    var chk = ds_clntlist.getInsertedJSON().length;
    if (chk > 0) {
      if (await $c.win.confirm($p, "저장하지 않은 데이타를 취소하시겠습니까?")) {
        //ds_clntlist.undoAll();
        for (var i = 0; i < ds_clntlist.getRowCount(); i++) {
          if (ds_clntlist.getRowStatus(i) == "C") {
            ds_clntlist.removeRow(i);
          }
        }
        return true;
      } else {
        ds_clntlist.setEventPause(true);
        gr_clntlist.setFocusedCell(oldRow, "clntNo", false);
        ds_clntlist.setEventPause(false);
        return false;
      }
    } else {
      return true;
    }
  } else {
    return true;
  }
};
scwin.rd_bilgClntPatternCd_onviewchange = function (info) {
  //console.log("scwin.rd_bilgClntPatternCd_onviewchange~~!");
  scwin.f_chkBilgClntPatternCd();
};
scwin.f_wonTxt = function (value) {
  if (!$c.gus.cfIsNull($p, value.trim())) {
    //'￦'
    value = value.replace(/\\/gi, '￦');
  }
  return value;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_bilgLoofcCd',codeId:'ed_bilgLoofcCd',btnId:'btn_bilgLoofcCd',nameId:'ed_bilgLoofcNm',maxlengthCode:'4',UpperFlagCode:'1',selectID:'retrieveOpDeptCdInfo',code:'bilgLoofcCd',name:'bilgLoofcNm',validExpName:'청구부서',validExpCode:'청구부서',validTitle:'청구부서',objTypeCode:'Data',objTypeName:'key','ev:onblurCodeEvent':'scwin.udc_bilgLoofcCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bilgLoofcCd_onclickEvent',refDataCollection:'ds_clntlist_con',mandatoryCode:'true','ev:onviewchangeNameEvent':'scwin.udc_bilgLoofcCd_onblurNameEvent',allowCharCode:'A-Za-z0-9'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{style:'width: 40%;',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox gvwflex'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_clntlist',style:'',autoFit:'allColumn',id:'gr_clntlist',class:'wq_gvw',rowStatusVisible:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',style:'',id:'column1',value:'청구부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column17',value:'거래처',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column15',value:'거래처명',class:'txt-red',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bilgLoofcCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',maxLength:'6',mandatory:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnRowAddObj:'btn_addRow',btnCancelObj:'btn_cancelRow',btnDelYn:'N',btnRowDelYn:'N',rowAddFunction:'scwin.btn_addRow_onclick',cancelFunction:'scwin.btn_cancelRow_onClick',btnCancelYn:'Y',gridID:'gr_clntlist',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_search',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구거래처<br/>유형',ref:'',style:'',userData2:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td '},E:[{T:1,N:'xf:group',A:{class:'tbbox no-border',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 170px;'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'flex-row',cols:'',id:'rd_bilgClntPatternCd',ref:'data:ds_billingpattern.bilgClntPatternCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onviewchange':'scwin.rd_bilgClntPatternCd_onviewchange',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수시->청구예정일에 즉시 청구 가능'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인->거래처와 별도 확인 후 청구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'col-gap-14',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매월',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_stdDd1',placeholder:'',style:'width:30px;',ref:'data:ds_billingpattern.stdDd1',allowChar:'0-9',maxlength:'2'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_stdDd2',placeholder:'',style:'width:30px;',ref:'data:ds_billingpattern.stdDd2',allowChar:'0-9',maxlength:'2'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_stdDd3',placeholder:'',style:'width:30px;',ref:'data:ds_billingpattern.stdDd3',allowChar:'0-9',maxlength:'2'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_stdDd4',placeholder:'',style:'width:30px;',ref:'data:ds_billingpattern.stdDd4',allowChar:'0-9',maxlength:'2'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_stdDd5',placeholder:'',style:'width:30px;',ref:'data:ds_billingpattern.stdDd5',allowChar:'0-9',maxlength:'2'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_lstDdYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'말일여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 그룹',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_clntGrp',placeholder:'',style:'width:150px;',ref:'data:ds_billingpattern.clntGrp',maxByteLength:'20'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-4'},E:[{T:1,N:'xf:group',A:{id:'',class:'col-gap-16 vab'}},{T:1,N:'xf:group',A:{id:'',class:'form-group'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'영수 거래처 여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_impCstmclrncReceptClntYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입통관'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_expimpTransReceptClntYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출입운송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_yardStrRateReceptClntYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장치장보관료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'화주수입운송<br/>오더단위청구여부',class:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_mchtImpTransOdrBilgYn',ref:'data:ds_billingpattern.mchtImpTransOdrBilgYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'YES'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NO'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출화주하역<br/>청구인식기준',ref:'',style:'',userData2:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_expMchtStvCvsslCompleteYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'본선작업 완료시'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출화주운송<br/>청구인식기준',ref:'',style:'',userData2:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_expMchtCntrtransBilgStdCd',ref:'data:ds_billingpattern.expMchtCntrtransBilgStdCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실적일'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화주Door회수시'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화물선적시'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입본선<br/>청구인식기준',ref:'',style:'',userData2:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'입출항일로 부터',class:''}},{T:1,N:'xf:input',A:{style:'width:30px;',id:'ed_expimpCvsslBilgStdDdCnt',placeholder:'',class:'tar',ref:'data:ds_billingpattern.expimpCvsslBilgStdDdCnt',maxlength:'2',allowChar:'0-9'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'일',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수입<br/>화주벌크하역<br/>청구인식기준',ref:'',style:'',userData2:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td pt8 pb8'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'flex-row',cols:'',id:'rd_mchtBulkStvBilgStdCd',ref:'data:ds_billingpattern.mchtBulkStvBilgStdCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더 물량 출고 완료시 하역료와 보관료 일괄 청구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하역료 실적 기준 청구 후 보관료 출고량 기준 청구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하역료와 보관료 출고량 기준 동시 청구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하역료와 보관료 월 청구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BILL 관련 기타',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'tbbox no-border',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:110px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 170px;'}},{T:1,N:'xf:group',A:{style:'width: 100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원화 표기 기호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_amtInscrpNm',placeholder:'',style:'width:150px;',ref:'data:ds_billingpattern.amtInscrpNm',maxByteLength:'20',escape:'false',displayFormatter:'scwin.f_wonTxt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'외화 표기 기호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_fcrcInscrpNm',placeholder:'',style:'width:150px;',ref:'data:ds_billingpattern.fcrcInscrpNm',maxByteLength:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'환산금액표기구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cnvrsnAmtInscrpClsCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_billingpattern.cnvrsnAmtInscrpClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'벌크보관료 월 생성<br/>기준일',ref:'',style:'',userData2:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'매월',class:''}},{T:1,N:'xf:input',A:{style:'width:30px;',id:'ed_mmstrRatestdDd1',placeholder:'',class:'tar',ref:'data:ds_billingpattern.mmstrRatestdDd1',maxlength:'2',allowChar:'0-9'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'일',class:''}}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_mmstrRatelstDdYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'말일여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_edit',label:'수정',style:'display:none',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',label:'삭제',style:'',type:'button','ev:onclick':'scwin.btn_delete_onclick',userAuth:'D',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_gridTariff',codeId:'','ev:onblurCodeEvent':'scwin.udc_ctrtClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_ctrtClntNo_onclickEvent(\'F\')','ev:onviewchangeNameEvent':'scwin.udc_ctrtClntNo_onviewchangeNameEvent',id:'udc_comCodeGrid',nameId:'',objTypeCode:'data',popupID:'gridTariffPopup',selectID:'retrieveClntInfo',style:'display:none;'}}]}]}]})