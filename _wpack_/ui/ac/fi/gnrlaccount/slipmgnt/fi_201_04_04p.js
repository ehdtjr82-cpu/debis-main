/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_04_04p.xml 29190 8c6c53f98363e8e6a54d77fe8ea9aab71fc9f3b8142881cef0c7822208b0770c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidence',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_evidence_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'row',name:'ROW',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSellCls',name:'매입매출구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'증빙구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsNm',name:'공제구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxClsCd',name:'영세율구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'부가세관리귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',name:'부가세신고귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatCrn',name:'부가세사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatCrnNm',name:'부가세사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplierCrn',name:'공급자사업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplierCrnNm',name:'공급자사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'계산서금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cardNo',name:'카드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNm',name:'카드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recverCrn',name:'공급받는자사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recverCrnNm',name:'공급받는자사업자명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.vatctrl.RetrieveEvidenceContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_evidence","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_evidence","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.taxbiz.vatctrl.UpdateSlipEvidenceContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_evidence","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_201_04_04b
// 이름     : 증빙내역조회
// 경로     : 재무회계/일반회계/전표관리/
// 사용계정 : 내부
// 비고     :
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//            회계/재무회계/일반회계/전표관리/전표조회수정삭제(fi_201_04_01b)에서 호출
//            회계/재무회계/일반회계/전표관리/전표조회수정삭제전표내역조회(fi_201_04_02p)에서 호출
//            회계/재무회계/일반회계/전표관리/경비전표입력전표내역조회(fi_201_04_06p)에서 호출
//==================================================================================================================

// 로그인사용자 정보
scwin.vLoginCoCd = ""; // 소속 자회사 
scwin.vLoginCoClsCd = ""; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.privAdmin = ""; // 어드민권한
scwin.userId = ""; // 사용자ID
scwin.vCoCd = ""; // 회사코드
scwin.empNo = ""; // 사원번호

scwin.slipNo = ""; // 전표번호
scwin.slipSeq = ""; // 전표순번

// KYU_NEW : 미사용 전역변수 : 직접 데이타를 옮기는 식으로 변경
scwin.txt_vatCrn = "";
scwin.txt_vatCrnNm = "";
scwin.old_summary = ""; // 최초적요 (적요변경여부)

scwin.onpageload = function () {
  console.log("====== onpageload ==================");

  // 회원정보를 json 데이터로 모두 받음
  let memJson = $c.data.getMemInfo($p);

  // 로그인 정보 추출
  let coCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd");
  let coClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd");
  let userHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드
  let userId = $c.data.getMemInfo($p, "userId");
  let privAdmin = $c.data.getMemInfo($p, "privAdmin");
  let empNo = $c.data.getMemInfo($p, "empNo");
  scwin.vLoginCoCd = coCd;
  scwin.vLoginCoClsCd = coClsCd;
  scwin.vUserHomeClsCd = userHomeClsCd;
  scwin.vCoCd = coCd; // 동일
  scwin.userId = userId;
  scwin.privAdmin = privAdmin;
  scwin.empNo = empNo;
  scwin.vCoClsCd = coClsCd;
  console.log("▶▶ vLoginCoCd : " + scwin.vLoginCoCd + "   loginCoClsCd : " + scwin.vLoginCoClsCd);
  console.log("▶▶ vCoCd      : " + scwin.vCoCd + "   vCoClsCd : " + scwin.vCoClsCd + "   empNo : " + scwin.empNo);
  console.log("▶▶ userHomeClsCd : " + scwin.vUserHomeClsCd + "   userId : " + scwin.userId + "   privAdmin : " + scwin.privAdmin);
  console.log("▶▶ memJson : " + JSON.stringify(memJson));
  scwin.slipNo = $c.data.getParameter($p, "slipNo") == null ? "" : $c.data.getParameter($p, "slipNo");
  scwin.slipSeq = $c.data.getParameter($p, "slipSeq") == null ? "" : $c.data.getParameter($p, "slipSeq");
  console.log("  slipNo : " + scwin.slipNo + "   slipSeq : " + scwin.slipSeq);
  const codeOptions = [{
    grpCd: "FI019",
    compID: "lc_pchsSellCls"
  } // 셀렉트
  , {
    grpCd: "FI004",
    compID: "gr_evidence:zeroTaxClsCd"
  } // 영세율구분코드
  //         { grpCd : "OP533", compID : "acb_autoComplete2" }, // 오토컴플리트
  ];
  console.log("  codeOptions : " + JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    // 수정체크 (수정체크 - 버튼 히든, 적요 빨강)
    scwin.f_ModCheck();

    //        scwin.f_Header();
    scwin.f_Retrieve();
    // cfDisableKeyData();
    $c.gus.cfDisableKeyData($p);
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 수정체크
//-------------------------------------------------------------------------
scwin.f_ModCheck = function () {
  console.log("=== f_ModCheck (수정체크 - 버튼 히든, 적요 빨강)");

  // 회계처리가 '처리'되었거나 전표종류가 수정불가일경우 체크
  //  	if(valueObject.postYn=="1" || valueObject.modPsblYn=="0"){
  if ($c.data.getParameter($p, "postYn") == "1" ||
  // 회계처리여부 (1: 회계처리됨, 0: 회계처리안됨)
  $c.data.getParameter($p, "modPsblYn") == "0") {
    // 수정가능여부 (1: 수정가능, 0: 수정불가능)

    console.log("  -- 회계처리되거나 수정 불가능 일 때...");

    //  	   btUpdate.style.visibility = "hidden";
    //  	   btSave.style.visibility = "hidden";

    btn_btUpdate.hide();
    btn_btSave.hide();
  } else {
    console.log("  -- 회계처리 안되었거나 수정 가능 일 때...");

    //  	   btUpdate.style.visibility = "visible";
    //  	   btSave.style.visibility = "visible";

    btn_btUpdate.show("");
    btn_btSave.show("");

    //  	   txt_rmk.insertAdjacentHTML("afterEnd", "<font color=red><b>*</b></font>");
    ed_rmk.setStyle("color", "#FF0000"); // red
    ed_rmk.setStyle("font-weight", "bold");
  }
};

/*
//-------------------------------------------------------------------------
// function name : f_Header
// function desc : 헤더생성
//-------------------------------------------------------------------------
function f_Header() {  
	
	   var EVIDAC_HEADER    =     "slipNo:STRING(10)"                  // 거래번호
	   						     +"pchsEivdNo(10)"
								 +"sellVatNo(10)";
								 
	ds_search.SetDataHeader(EVIDAC_HEADER);
	ds_search.AddRow();
	//cfDisableObjects([txt_reqEmpNm,txt_reqAcctDeptNm]);
	//lc_susPayClsCd.focus();
}
*/

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  console.log("====== f_Retrieve ==================");

  //ds_search.NameValue(1,"slipNo") = valueObject.slipNo;
  ds_search.set("slipNo", scwin.slipNo);
  var dcJSON = ds_search.getJSON();
  console.log(" ==== ds_search : " + JSON.stringify(dcJSON));

  //tr_search.Action="/ac.fi.taxbiz.vatctrl.RetrieveEvidenceContentsCMD.do";
  //tr_search.post();

  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = async function (e) {
  console.log("▷ sbm_search_submitdone ==================");
  /*
   language=JavaScript for=ds_evidence event=OnLoadError()>
  	cfHideDSWaitMsg(gr_evidence);  // sbm . processMsg = "none"
  	cfShowError(ds_evidence);      // TOBE 미사용
  
  <script language=JavaScript for=ds_evidence event=OnLoadStarted()>
  	cfShowDSWaitMsg(gr_evidence);  // 웹스퀘어 내장 함수 사용
  
  <script language=JavaScript for=ds_evidence event=OnLoadCompleted(rowCnt)>
    cfHideDSWaitMsg(gr_evidence);   // TOBE 미사용
    cfShowTotalRows(totalRows, rowCnt);
      if( rowCnt == 0 ){
  		cfAlertMsg(MSG_CM_WRN_002);
  		window.returnValue=null; 
  		window.close();
  	}else{
  			cfDisableBtn([bSave]);	
  				txt_cardNm.value = ds_evidence.NameValue(rowCnt,"cardNm")+"/"+ds_evidence.NameValue(rowCnt,"cardEmpNm");	
  	}
  */
  if (e.responseJSON.resultDataSet[0].Code != 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  var rowCnt = ds_evidence.getTotalRow();
  ed_totalRows.setValue(rowCnt);

  // 포지션을 지정해줘야 값이 적용됨

  var rowPos = 0;

  //var dcJSON = ds_evidence.getAllArray();
  //console.log(" ==== ds_slipcontents : "+ JSON.stringify(dcJSON));

  // ds_evidence.setRowPosition(rowPos);

  if (rowCnt == 0) {
    console.log("  -- 건수 없음, 메시지 후 화면 닫기");

    //alert(MSG_CM_WRN_002);
    var ltn = await $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    // $c.gus.cfAlertMsg(MSG_CM_WRN_002);          // 이 방식으로는 메시지 안뜸

    //window.returnValue=null; 
    //window.close();

    $c.win.closePopup($p, ["N/A"]);
  } else {
    console.log("  -- 건수 있음, 수정버튼 활성화");
    //cfDisableBtn([bSave]);	
    //	txt_cardNm.value = ds_evidence.NameValue(rowCnt,"cardNm")+"/"+ds_evidence.NameValue(rowCnt,"cardEmpNm");
    $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bSave')]);
    ed_cardNm.value = ds_evidence.getCellData(0, "cardNm") + "/" + ds_evidence.getCellData(rowCnt, "cardEmpNm");
  }
  gr_evidence.setFocusedCell(0, 0, false);
};

//-------------------------------------------------------------------------
// 매입매출구분 dataFormatter
//-------------------------------------------------------------------------
scwin.pchsSellClsExp = function (data) {
  return $c.gus.decode($p, data, "2", "매입", "1", "매출");
};

//-------------------------------------------------------------------------
// 그리드 position 변경
//  txt_vatCrn, txt_vatCrnNm 미사용
//-------------------------------------------------------------------------
scwin.ds_evidence_onrowpositionchange = function (info) {
  console.log("--- OnRowPosChanged   old [" + info.oldRowIndex + "]  new [" + info.newRowIndex + "]");

  // var row = info.oldRowIndex;
  var row = info.newRowIndex;

  /*
  <!-- 데이타셋 속성제어-->
  <script language=JavaScript for=ds_evidence event=OnRowPosChanged(row)>
  	// 매출일경우
  	if(lc_pchsSellCls.BindColVal=="1"){
  			ds_evidence.NameValue(row,"supplierCrn") = txt_vatCrn.value ;
  			ds_evidence.NameValue(row,"supplierCrnNm") = txt_vatCrnNm.value ;
  	// 매입일경우
  	}else{
  			ds_evidence.NameValue(row,"recverCrn") = txt_vatCrn.value ;
  			ds_evidence.NameValue(row,"recverCrnNm") = txt_vatCrnNm.value ;
  	}	
  	 ds_evidence.ResetStatus();
  	 cfDisableKeyData();
  	 cfDisableBtn([bSave]);	 
  */
  // var row = info;
  console.log(" lc_pchsSellCls [" + lc_pchsSellCls.getValue() + "]  ds.pchsSellCls [" + ds_evidence.getCellData(row, "pchsSellCls") + "]");

  // 매출일경우
  // if ( lc_pchsSellCls.getValue() == "1" ) {
  if (ds_evidence.getCellData(row, "pchsSellCls") == "1") {
    console.log("  --- 1 매출");
    ds_evidence.setCellData(row, "supplierCrn", ds_evidence.getCellData(row, "vatCrn"));
    ds_evidence.setCellData(row, "supplierCrnNm", ds_evidence.getCellData(row, "vatCrnNm"));
    // 매입일경우
  } else {
    console.log("  --- 2 매입");
    ds_evidence.setCellData(row, "recverCrn", ds_evidence.getCellData(row, "vatCrn"));
    ds_evidence.setCellData(row, "recverCrnNm", ds_evidence.getCellData(row, "vatCrnNm"));
  }
  //ds_evidence.ResetStatus();

  ds_evidence.initRowStatus();
  $c.gus.cfDisableKeyData($p);
  // $c.gus.cfDisableBtn([$c.global.bSave]);
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bSave')]);
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function (e) {
  //cfEnableObj(txt_rmk, true);
  //cfDisableBtn([bUpdate]);
  $c.gus.cfEnableObj($p, ed_rmk, true);
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bUpdate')]);
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  console.log("=== f_Save (저장버튼 클릭)");
  console.log(" ds_evidence.getModifiedIndex()  : " + ds_evidence.getModifiedIndex());

  //if(ds_evidence.isUpdated==false){
  if (ds_evidence.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  // 체크
  // if (!scwin.f_Validation())
  // let rtn = await scwin.f_Validation();

  // 2026-02-24 : 직접 호출
  let rtn = await $c.gus.cfValidate($p, [ed_rmk]);
  if (!rtn) return;
  let rtn2 = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (rtn2) {
    //tr_save.Action = "/ac.fi.taxbiz.vatctrl.UpdateSlipEvidenceContentsCMD.do";
    //tr_save.Post();
    $c.sbm.execute($p, sbm_save);
  }
};

// //-------------------------------------------------------------------------
// // 체크
// //-------------------------------------------------------------------------
// scwin.f_Validation = function(){
//     console.log("=== f_Validation");

// 	if (!$c.gus.cfValidate([ed_rmk]))
//   		return false;

// 	  return true;
// }

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  console.log("▷ sbm_save_submitdone ==================");
  /*
  <!-- 저장 TR -->         
  <script language=JavaScript for=tr_save event=OnFail()>
      cfShowError(tr_save);
      cfDisableKeyData();
  	cfDisableBtn([bSave]);	 
  <script language=JavaScript for=tr_save event=OnSuccess()>
      cfAlertMsg(MSG_CM_INF_001);
      f_Header();
      f_Retrieve() ;
      cfDisableKeyData();
  	cfDisableBtn([bSave]);	  
  */
  if (e.responseJSON.resultDataSet[0].Code != 0) {
    console.log("   --- tr_save - OnFail ");
    //cfShowError(tr_save);   // 공통에서 뿌림
    $c.gus.cfDisableKeyData($p);
    //$c.gus.cfDisableBtnOnly([bnt_btSave]);
    $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bSave')]);
  } else {
    // console.log("   --- tr_save - OnSuccess ");
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    //f_Header();
    scwin.f_Retrieve();
    $c.gus.cfDisableKeyData($p);
    //$c.gus.cfDisableBtnOnly([btn_btSave]);
    $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bSave')]);
  }
};

//-------------------------------------------------------------------------
// 닫기 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p, ["N/A"]);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{oddEvenColorDisplay:'true',rowNumVisible:'true',showSortableImage:'true',rowNumHeaderValue:'순번',sortable:'true',defaultCellHeight:'24',rowNumWidth:'40',visibleRowNumFix:'false',checkAllType:'false',dataList:'data:ds_evidence',evenRowBackgroundColor:'#F8FFF8',autoFit:'allColumn',id:'gr_evidence',visibleRowNum:'9',class:'wq_gvw',readOnly:'true',focusMode:'cell'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column2',value:'매입매출구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'증빙구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'공제구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'영세율구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'공급일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'공급금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'부가세',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsSellCls',value:'',displayMode:'label',displayFormatter:'scwin.pchsSellClsExp',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'evidClsNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'deductClsNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'zeroTaxClsCd',class:'',displayMode:'value delim label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'spplyDt',class:'',displayMode:'label',dataType:'date',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd',textAlign:'center'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'spplyAmt',class:'',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',style:'',id:'vat',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column20',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column18',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column16',value:'',displayMode:'label',dataType:'number',expression:'sum(\'spplyAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column15',value:'',displayMode:'label',dataType:'number',expression:'sum(\'vat\')',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'매입/매출구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_pchsSellCls',class:'form-control w100',direction:'auto',objType:'data',ref:'data:ds_evidence.pchsSellCls'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'증빙구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_evidClsNm',placeholder:'',class:'form-control ',objType:'data',ref:'data:ds_evidence.evidClsNm'}},{T:1,N:'xf:input',A:{style:'',id:'ed_deductClsNm',placeholder:'',class:'form-control ',objType:'data',ref:'data:ds_evidence.deductClsNm'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'공급일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control w100',id:'ed_spplyDt',placeholder:' ',style:'',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:ds_evidence.spplyDt',dataType:'date'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'부가세신고부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w100',id:'ed_vatDeclarAcctDeptCd',placeholder:'',style:'',objType:'data',allowChar:'0-9',ref:'data:ds_evidence.vatDeclarAcctDeptCd'}},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_vatDeclarAcctDeptNm',placeholder:'',style:'',objType:'data',ref:'data:ds_evidence.vatDeclarAcctDeptNm'}},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_vatCrn',placeholder:'',style:'',objType:'data',ref:'data:ds_evidence.vatCrn'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'공급하는자<br/>사업자번호',class:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w100',id:'ed_supplierCrn',placeholder:'',style:'',objType:'data',ref:'data:ds_evidence.supplierCrn'}},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_supplierCrnNm',placeholder:'',style:'',objType:'data',ref:'data:ds_evidence.supplierCrnNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'공급받는자<br/>사업자번호',class:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w100',id:'ed_recverCrn',placeholder:'',style:'',objType:'data',ref:'data:ds_evidence.recverCrn'}},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_recverCrnNm',placeholder:'',style:'',objType:'data',ref:'data:ds_evidence.recverCrnNm'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'카드번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_cardNo',placeholder:'',class:'form-control ',objType:'data',displayFormat:'####-####-####-####',maxlength:'12',ref:'data:ds_evidence.cardNo'}},{T:1,N:'xf:input',A:{style:'',id:'ed_cardNm',placeholder:'',class:'form-control ',objType:'data',ref:'data:ds_evidence.cardNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'부가세',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vat',placeholder:'',style:';text-align:right;',objType:'data',ref:'data:ds_evidence.vat',displayFormat:'#,###',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'공급금액',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:';text-align:right;',id:'ed_spplyAmt',placeholder:'',class:'',objType:'data',maxlength:'13',ref:'data:ds_evidence.spplyAmt',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'적요',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_rmk',placeholder:'',style:'',objType:'data',maxlength:'100',validExp:'적요:yes:maxByteLength=100',maxByteLength:'100',ref:'data:ds_evidence.rmk'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.btn_close_onclick',id:'btn_close',style:'',type:'button',disabled:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_Update',style:'',id:'btn_btUpdate',type:'button',class:'btn',objType:'bUpdate',disabled:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Save',id:'btn_btSave',objType:'bSave',style:'',type:'button',disabled:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})