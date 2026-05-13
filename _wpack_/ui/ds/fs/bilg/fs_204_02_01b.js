/*amd /ui/ds/fs/bilg/fs_204_02_01b.xml 52455 fbd542c4816e5f6a5b4605ce24754ed4209d7a93b34eaee717b0468dd0233b35 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryDtConKnd',name:'청구물류부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'조회 시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'조회 종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'myModId',name:'청구담당자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_cashCreditSales',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cashSellAmt',name:'현금매출금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'susRecvSellAmt',name:'가수금매출금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'initamtGrtDrAmt',name:'선수금보증차변금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc',name:'청구금액_외화',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'cashPldgAmt',name:'현금담보금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'susRecvPldgAmt',name:'가수금담보금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'initamtGrtCrAmt',name:'선수금보증대변금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'susRecvRtnDrAmt',name:'가수금무통장환불금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'initamtGrtRtnDrAmt',name:'선수금보증환불차변금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cashRtnAmt',name:'현금환불금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fireInsrRateAmt',name:'화재보험료금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'총합계금액',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_accountEachSelling',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출귀속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'일반매출액_원화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'일반매출액_외화',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'trustSpplyAmt',name:'위탁매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'facilitiesSpplyAmt',name:'시설임대;매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'equipLocSpplyAmt',name:'장비임대료;매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumSpplyAmt',name:'매출액 합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세예수금_일반',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trustVatAmt',name:'부가세예수금_위탁',dataType:'number'}},{T:1,N:'w2:column',A:{id:'facilitiesVatAmt',name:'부가세예수금_시설임대',dataType:'number'}},{T:1,N:'w2:column',A:{id:'equipLocVatAmt',name:'부가세예수금_장비임대',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumVatAmt',name:'부가세예수금_합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'총합계금액',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_generalSelling',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출귀속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomNm',name:'사업영역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impSpplyAmt',name:'수출입구분별_수입',dataType:'number'}},{T:1,N:'w2:column',A:{id:'expSpplyAmt',name:'수출입구분별_수출',dataType:'number'}},{T:1,N:'w2:column',A:{id:'domesticSpplyAmt',name:'수출입구분별_내수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrSpplyAmt',name:'화물구분별_CNTR',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bulkSpplyAmt',name:'화물구분별_벌크',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vsslSpplyAmt',name:'거래처별_선사',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mchtSpplyAmt',name:'거래처별_화주',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellClntSumSpplyAmt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급금액_외화',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'impExpSumSpplyAmt',name:'원화;매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'transCargoSumSpplyAmt',name:'외화;매출액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세;예수금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'총합계금액',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cashCreditSum',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cashAmtSum',name:'현금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'susRecvAmtSum',name:'가수금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'initamtDrAmtSum',name:'담보-선수(차변)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'initamtCrAmtSum',name:'담보-선수(대변)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'외상매출금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cashRtnAmt',name:'전도현금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fireInsrRateAmt',name:'예수금',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.bilg.bilgrsltsmgnt.RetrieveBillingDecisionContentsCMD.do   ',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_queryCondition","key":"IN_DS1"},{"id":"ds_cashCreditSales","key":"OUT_DS1"},{"id":"ds_accountEachSelling","key":"OUT_DS2"},{"id":"ds_generalSelling","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_cashCreditSales","key":"OUT_DS1"},{"id":"ds_accountEachSelling","key":"OUT_DS2"},{"id":"ds_generalSelling","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  scwin.f_OnLoad();
};

//var pgmId          	= "fs_204_02_01b.jsp"; // 프로그램ID           

//String 값 trim
//String.prototype.trim = function() {
//	return this.replace(/(^\s*)|(\s*$)/g,"");
//}

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//------------------------------------------------------------------------- 
scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.
scwin.strFromDate = $c.date.addDate($p, scwin.vCurDate, -7); // 일주일

scwin.f_OnLoad = function () {
  //parent.tabFrame.f_FoldMenu(true);
  //ica_qryConDtFm.setValue(scwin.strFromDate);
  //ica_qryConDtTo.setValue(scwin.vCurDate);

  //rd_dcsnClsCd.setValue('');
  //rd_fmlaClsCd.setValue('');
  //ed_bilgLodeptCd.setFocus();

  //f_Retrieve();
};

//UDC 정보가 처리 완료된 후 처리(TOBE scwin.onpageload밑에 정의)
scwin.onUdcCompleted = function () {
  //parent.tabFrame.f_FoldMenu(true);
  ica_qryConDtFm.setValue(scwin.strFromDate);
  ica_qryConDtTo.setValue(scwin.vCurDate);
  rd_dcsnClsCd.setValue('');
  rd_fmlaClsCd.setValue('');
  ed_bilgLodeptCd.focus();
};

//-------------------------------------------------------------------------
// 조회조건 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ed_bilgLodeptCd, ed_bilgLodeptNm]);
  ica_qryConDtFm.setValue(scwin.strFromDate);
  ica_qryConDtTo.setValue(scwin.vCurDate);
  rd_dcsnClsCd.setValue('');
  rd_fmlaClsCd.setValue('');
  ed_bilgLodeptCd.focus();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //validation check     

  /*
      	//if(!$c.gus.cfValidate([ed_bilgLodeptCd,ica_qryConDtFm,ica_qryConDtTo])){
      	if(! await $c.gus.cfValidate([ed_bilgLodeptCd])){
  console.log(444444);
      		return;
      	}
  */

  let ret = await $c.gus.cfValidate($p, [ed_bilgLodeptCd, ica_qryConDtFm, ica_qryConDtTo]);
  if (!ret) {
    console.log(444);
    return false;
  }
  console.log(5555555555);

  //조회시작일자가 더 클경우 체크
  if (!(await $c.gus.cfIsAfterDate($p, ica_qryConDtFm.getValue(), ica_qryConDtTo.getValue()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    console.log(66666);
    return;
  }
  console.log(66666666666666);

  //var dsHeader = "bilgLodeptCd:STRING,qryDtConKnd:STRING,qryConDtFm:STRING,qryConDtTo:STRING,"+
  //               "myModId:STRING,dcsnClsCd:STRING,fmlaClsCd:STRING";
  //ds_queryCondition.SetDataHeader(dsHeader);
  //ds_queryCondition.AddRow();

  /*
  ds_queryCondition.insertRow(0);
  ds_queryCondition.setCellData(0, "bilgLodeptCd", ed_bilgLodeptCd.getValue());
  ds_queryCondition.setCellData(0, "qryDtConKnd", lc_qryDtConKnd.getValue());
  ds_queryCondition.setCellData(0, "qryConDtFm", ica_qryConDtFm.getValue());
  ds_queryCondition.setCellData(0, "qryConDtTo", ica_qryConDtTo.getValue());
  ds_queryCondition.setCellData(0, "myModId", ed_myModId.getValue()); 
  ds_queryCondition.setCellData(0, "dcsnClsCd", rd_dcsnClsCd.getValue());
  ds_queryCondition.setCellData(0, "fmlaClsCd", rd_fmlaClsCd.getValue());
  */

  /*
          ds_queryCondition.set("bilgLodeptCd", ed_bilgLodeptCd.getValue());
       	ds_queryCondition.set("qryDtConKnd", lc_qryDtConKnd.getValue());
       	ds_queryCondition.set("qryConDtFm", ica_qryConDtFm.getValue());
       	ds_queryCondition.set("qryConDtTo", ica_qryConDtTo.getValue());
       	ds_queryCondition.set("myModId", ed_myModId.getValue()); 
       	ds_queryCondition.set("dcsnClsCd", rd_dcsnClsCd.getValue());
       	ds_queryCondition.set("fmlaClsCd", rd_fmlaClsCd.getValue());
  		*/

  //상세화면 데이타 Clear
  ds_cashCreditSales.setJSON([]);
  ds_accountEachSelling.setJSON([]);
  ds_generalSelling.setJSON([]);
  ds_cashCreditSum.setJSON([]);

  //$c.gus.cfShowTotalRows(tbx_totalRows1, 0);
  //$c.gus.cfShowTotalRows(tbx_totalRows2, 0);
  //$c.gus.cfShowTotalRows(tbx_totalRows3, 0);

  $c.sbm.execute($p, sbm_retrieve);

  //tr_retrieve.Action = "/ds.fs.bilg.bilgrsltsmgnt.RetrieveBillingDecisionContentsCMD.do";
  //tr_retrieve.Post();
};
//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      //청구부서코드팝업			  			
      udc_bilgLodeptCd.setSelectId('retrieveOpDeptCdInfo');
      rtnList = udc_bilgLodeptCd.cfCommonPopUp(scwin.udc_bilgLodeptCdCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      //청구담당자코드팝업
      udc_myModId.setSelectId('retrieveEmpInfo');
      rtnList = udc_myModId.cfCommonPopUp(scwin.ed_myModIdCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.udc_bilgLodeptCdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLodeptCd, ed_bilgLodeptNm); // 청구부서코드, 청구부서명
};
scwin.ed_myModIdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_myModId, ed_empNm); // 청구담당자코드, 청구담당자명	
};

//-------------------------------------------------------------------------
//엑셀 다운로드
//-------------------------------------------------------------------------		
scwin.f_downExcelSheet1 = async function () {
  var sheetTitle = "외상매출금외";
  var cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    const options = {
      fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      ,

      sheetName: sheetTitle //엑셀내 시트명 지정필요시
    };
    const infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_cashCreditSales, options, infoArr);
  }
};

//-------------------------------------------------------------------------
//엑셀 다운로드
//-------------------------------------------------------------------------		
scwin.f_downExcelSheet2 = async function (arg) {
  var sheetTitle = "매출액";
  var cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    const options = {
      fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      ,

      sheetName: sheetTitle //엑셀내 시트명 지정필요시
    };
    const infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_accountEachSelling, options, infoArr);
  }
};

//-------------------------------------------------------------------------
//엑셀 다운로드
//-------------------------------------------------------------------------		
scwin.f_downExcelSheet3 = async function (arg) {
  var sheetTitle = "일반매출액";
  var cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    const options = {
      fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      ,

      sheetName: sheetTitle //엑셀내 시트명 지정필요시
    };
    const infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_generalSelling, options, infoArr);
  }
};

//-------------------------------------------------------------------------
//가수금처리내역팝업
//-------------------------------------------------------------------------	
scwin.f_SuspensePopup = function () {
  /*
  			  var forwardPage  = "/ds/fs/bilg/fs_204_02_01p.jsp?bilgLodeptCd="+ed_bilgLodeptCd.getValue()
  			  forwardPage 		+= "&qryDtConKnd="+lc_qryDtConKnd.getValue;
  			  forwardPage 		+= "&qryConDtFm="+ica_qryConDtFm.getValue();
  			  forwardPage 		+= "&qryConDtTo="+ica_qryConDtTo.getValue();
  			  forwardPage 		+= "&myModId="+ed_myModId.getValue();
  			  forwardPage 		+= "&dcsnClsCd="+rd_dcsnClsCd.getValue();
  			  forwardPage 		+= "&fmlaClsCd="+rd_fmlaClsCd.getValue();
  		      window.showModalDialog(forwardPage,"Suspense",  "dialogWidth:1000px; dialogHeight:670px; status:no; scroll:yes" ) ;
  */
  let opt = {};
  let data = {
    bilgLodeptCd: ed_bilgLodeptCd.getValue(),
    qryDtConKnd: lc_qryDtConKnd.getValue(),
    qryConDtFm: ica_qryConDtFm.getValue(),
    qryConDtTo: ica_qryConDtTo.getValue(),
    myModId: ed_myModId.getValue(),
    dcsnClsCd: rd_dcsnClsCd.getValue(),
    fmlaClsCd: rd_fmlaClsCd.getValue()
  };
  console.log('scwin.f_SuspensePopup~~~~');
  console.log(data);
  opt.width = "950";
  opt.height = "580";
  opt.id = "pop1";
  opt.title = "가수금처리내역";
  opt.popupName = "가수금 처리 내역";

  //as-is window.showModalDialog(...
  $c.win.openPopup($p, "/ui/ds/fs/bilg/fs_204_02_01p.xml", opt, data);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_retrieve_submitdone = function (e) {
  //cfShowTotalRows(totalRows1, rowcnt);
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    var rowcnt = ds_cashCreditSales.getRowCount();
    if (rowcnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    } else {
      ds_cashCreditSum.insertRow(0);

      /*
      ds_cashCreditSum.setCellData(0, "cashAmtSum",ds_cashCreditSales.getCellData(0, "cashSellAmt") + ds_cashCreditSales.getCellData(0, "cashPldgAmt"));
      ds_cashCreditSum.setCellData(0, "susRecvAmtSum",ds_cashCreditSales.getCellData(0, "susRecvSellAmt") + ds_cashCreditSales.getCellData(0, "susRecvPldgAmt") + ds_cashCreditSales.getCellData(0, "susRecvRtnDrAmt"));
      ds_cashCreditSum.setCellData(0, "initamtDrAmtSum",ds_cashCreditSales.getCellData(0, "initamtGrtCrAmt")) ;
      ds_cashCreditSum.setCellData(0, "initamtCrAmtSum",ds_cashCreditSales.getCellData(0, "cashPldgAmt") + ds_cashCreditSales.getCellData(0, "susRecvPldgAmt"));
      ds_cashCreditSum.setCellData(0, "bilgAmt",ds_cashCreditSales.getCellData(0, "bilgAmt")); 
      ds_cashCreditSum.setCellData(0, "cashRtnAmt",ds_cashCreditSales.getCellData(0, "cashRtnAmt"));
      ds_cashCreditSum.setCellData(0, "fireInsrRateAmt",ds_cashCreditSales.getCellData(0, "fireInsrRateAmt"));
      */

      ds_cashCreditSum.setCellData(0, "cashAmtSum", parseInt(ds_cashCreditSales.getCellData(0, "cashSellAmt")) + parseInt(ds_cashCreditSales.getCellData(0, "cashPldgAmt")));
      ds_cashCreditSum.setCellData(0, "susRecvAmtSum", parseInt(ds_cashCreditSales.getCellData(0, "susRecvSellAmt")) + parseInt(ds_cashCreditSales.getCellData(0, "susRecvPldgAmt")) + parseInt(ds_cashCreditSales.getCellData(0, "susRecvRtnDrAmt")));
      ds_cashCreditSum.setCellData(0, "initamtDrAmtSum", ds_cashCreditSales.getCellData(0, "initamtGrtCrAmt"));
      ds_cashCreditSum.setCellData(0, "initamtCrAmtSum", parseInt(ds_cashCreditSales.getCellData(0, "cashPldgAmt")) + parseInt(ds_cashCreditSales.getCellData(0, "susRecvPldgAmt")));
      ds_cashCreditSum.setCellData(0, "bilgAmt", ds_cashCreditSales.getCellData(0, "bilgAmt"));
      ds_cashCreditSum.setCellData(0, "cashRtnAmt", ds_cashCreditSales.getCellData(0, "cashRtnAmt"));
      ds_cashCreditSum.setCellData(0, "fireInsrRateAmt", ds_cashCreditSales.getCellData(0, "fireInsrRateAmt"));
      console.log("ds_cashCreditSales.getRowCount5() == >> " + ds_cashCreditSum.getCellData(0, "susRecvAmtSum"));
    }
    tbx_totalRows.setValue(ds_cashCreditSum.getRowCount());
    tbx_totalRows1.setValue(ds_cashCreditSales.getRowCount());
    tbx_totalRows2.setValue(ds_accountEachSelling.getRowCount());
    tbx_totalRows3.setValue(ds_generalSelling.getRowCount());
    gr_cashCreditSum.setFocusedCell(0, "cashAmtSum", true);
    gr_cashCreditSales.setFocusedCell(0, "cashSellAmt", true);
    gr_accountEachSelling.setFocusedCell(0, "lobranNm", true);
    gr_generalSelling.setFocusedCell(0, "lobranNm", true);
  } catch (e) {
    console.log("sbm_retrieve_submitdone : " + e);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {};
scwin.gr_cashCreditSum_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "susRecvAmtSum") {
    scwin.f_SuspensePopup();
  }
};
scwin.ed_bilgLodept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, ed_bilgLodeptNm, 1);
};
scwin.ed_bilgLodept_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptNm, ed_bilgLodeptCd, 1, false);
};
scwin.ed_bilgLodept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgLodeptCd.getValue(), ed_bilgLodeptNm.getValue(), 'F', 'F');
};
scwin.udc_myModId_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_myModId.getValue(), '', 'F', 'F');
};

/**
 * 대문자처리
 */
scwin.validatorToUpperCase = function (val) {
  if ($c.gus.cfIsNull($p, val)) {
    return "";
  }
  return val.toUpperCase();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:'overflow: visible;'},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'pop_bilgLodeptNm',style:'',id:'udc_bilgLodeptCd',codeId:'ed_bilgLodeptCd',nameId:'ed_bilgLodeptNm',validExpCode:'청구부서:yes',maxlengthCode:'4',maxlengthName:'50',mandatoryCode:'true',objTypeCode:'Data',UpperFlagCode:'1',refDataCollection:'ds_queryCondition',code:'bilgLodeptCd',validTitle:'청구부서',objTypeName:'key',allowCharCode:'A-Za-z0-9','ev:onblurCodeEvent':'scwin.ed_bilgLodept_onblurCodeEvent','ev:onblurNameEvent':'scwin.ed_bilgLodept_onblurNameEvent','ev:onclickEvent':'scwin.ed_bilgLodept_onclickEvent',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'form-control w100 req',editType:'select',id:'lc_qryDtConKnd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_queryCondition.qryDtConKnd',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회계처리일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'POST'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전표일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SLIP'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'qryConDt',refDataMap:'ds_queryCondition',refEdDt:'qryConDtTo',refStDt:'qryConDtFm',style:'',edFromId:'ica_qryConDtFm',edToId:'ica_qryConDtTo',objTypeFrom:'data',objTypeTo:'data',mandatoryTo:'true',mandatoryFrom:'true',titleFrom:'조회 시작일자',titleTo:'조회 종료일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구담당자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_myModId',codeId:'ed_myModId',validTitle:'청구담당자',refDataCollection:'ds_queryCondition',code:'myModId',nameId:'ed_empNm',hideName:'true',objTypeCode:'Data',maxlengthCode:'8',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_myModId_onclickEvent'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정상구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_dcsnClsCd',ref:'data:ds_queryCondition.dcsnClsCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정상'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'8'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구서유형 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_fmlaClsCd',ref:'data:ds_queryCondition.fmlaClsCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래명세서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BILL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'외상매출금외',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_cashCreditSum',focusMode:'row',id:'gr_cashCreditSum',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'1',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_cashCreditSum_oncellclick',rowStatusVisible:'true',rowStatusWidth:'20',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',width:'140',value:'현금'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',width:'140',value:'가수금'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',width:'130',value:'담보-선수(차변)'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',width:'130',value:'담보-선수(대변)'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'외상매출금',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'전도현금',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'예수금',width:'140'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cashAmtSum',inputType:'text',width:'140',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'susRecvAmtSum',inputType:'text',width:'140',textAlign:'right',displayFormat:'#,##0',readOnly:'true',class:'underline'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'initamtDrAmtSum',inputType:'text',width:'130',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'initamtCrAmtSum',inputType:'text',width:'130',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAmt',inputType:'text',style:'',value:'',width:'140',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cashRtnAmt',inputType:'text',style:'',value:'',width:'140',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fireInsrRateAmt',inputType:'text',style:'',value:'',width:'140',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_cashCreditSales',id:'udc_topGrdBtn1',gridDownFn:'scwin.f_downExcelSheet1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_cashCreditSales',focusMode:'row',id:'gr_cashCreditSales',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'1',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',width:'350',value:'매출(A)',colSpan:'5',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'합계<br/>(A-B)',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'담보',width:'210',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column41',value:'환불',displayMode:'label',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column38',value:'예수금기타<br/>(B)',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'현금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',value:'가수금(무통장)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'담보-선수(차변)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',value:'외상매출금(원화)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'외상매출금(외화)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'담보-선수(차변)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',value:'현금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'가수금(무통장)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',value:'가수금(무통장)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'담보-선수(차변)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',value:'전도현금',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cashSellAmt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'susRecvSellAmt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'initamtGrtDrAmt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bilgAmt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAmtFcrc',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0.00',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'initamtGrtCrAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cashPldgAmt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'susRecvPldgAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'susRecvRtnDrAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'initamtGrtRtnDrAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cashRtnAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fireInsrRateAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows1',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매출액',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn align',id:'btn_trigger1',style:'display:none',title:'엑셀 UP',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정렬'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_accountEachSelling',id:'udc_topGrdBtn2',gridDownFn:'scwin.f_downExcelSheet2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_accountEachSelling',focusMode:'row',id:'gr_accountEachSelling',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'2',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',width:'100',value:'매출부서',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',width:'140',value:'일반매출액',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',width:'100',value:'위탁매출액',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'시설임대<br/>매출액',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'장비임대료<br/>매출액',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'매출액<br/>합계',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'부가세예수금',width:'350',colSpan:'5',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'전체합계',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'원화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column38',value:'외화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'일반',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column32',value:'위탁',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',value:'시설임대',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',value:'장비임대',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'합계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'lobranNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true',dataType:'text'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'spplyAmt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'spplyAmtFcrc',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0.00',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'trustSpplyAmt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'facilitiesSpplyAmt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'equipLocSpplyAmt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumSpplyAmt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatAmt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trustVatAmt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'facilitiesVatAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'equipLocVatAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sumVatAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sumAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column30',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'spplyAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column29',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00',dataType:'number',expression:'sum(\'spplyAmtFcrc\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column28',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'trustSpplyAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column27',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'facilitiesSpplyAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'equipLocSpplyAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'sumSpplyAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'vatAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'trustVatAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column56',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'facilitiesVatAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column44',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'equipLocVatAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'sumVatAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column52',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'sumAmt\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'일반매출액',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn align',id:'btn_trigger2',style:'display:none',title:'엑셀 UP',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정렬'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridUpYn:'N',gridID:'gr_generalSelling',id:'udc_topGrdBtn3',gridDownFn:'scwin.f_downExcelSheet3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_generalSelling',focusMode:'row',id:'gr_generalSelling',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'2',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'매출부서',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'사업영역',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column38',value:'수출입구분별',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column35',value:'화물구분별',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column33',value:'거래처별',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'원화<br/>매출액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'외화<br/>매출액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'부가세<br/>예수금',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'합계',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',width:'100',value:'수입'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',width:'100',value:'수출'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'내수',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'CNTR',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'벌크',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'선사',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'화주',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'lobranNm',inputType:'text',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bizDomNm',inputType:'text',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'impSpplyAmt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'expSpplyAmt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'domesticSpplyAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSpplyAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bulkSpplyAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslSpplyAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'mchtSpplyAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'impExpSumSpplyAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'spplyAmtFcrc',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vatAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sumAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column29',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'impSpplyAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column28',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'expSpplyAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column27',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'domesticSpplyAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'cntrSpplyAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column25',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'bulkSpplyAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column24',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'vsslSpplyAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'mchtSpplyAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column56',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'impExpSumSpplyAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column52',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00',dataType:'number',expression:'sum(\'spplyAmtFcrc\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column48',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'vatAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column44',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'sumAmt\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows3',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})