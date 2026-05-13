/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_04_01b.xml 72805 dbae7db9a578f484d0c5420f9d2d7eb67f09923726d7ced73a7d00229ade2de0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_paymgnt','ev:ondataload':'scwin.ds_paymgnt_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'payAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmt2',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlip',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipDtSt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCdSt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtEnd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postYn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCdEnd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'elecApprvInfoYn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsEvidNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cancleApprvNoDel',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtClsCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_slipNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_txt','ev:ondataload':'scwin.ds_txt_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'apprvEmpNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoSlipYn',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cancelYn',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkYn',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csum',name:'name8',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsum',name:'name14',dataType:'number'}},{T:1,N:'w2:column',A:{id:'elecApprvInfoYn',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecStmtTrgtYn',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'name17',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fixedAsetApprvYn',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hpostDt',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modPsblYn',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postAcctDeptCd',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postAcctDeptNm',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postNo',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postYn',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtCnt',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDt',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reverseSlipNo',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnNo',name:'name33',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_getMaxCloseYm'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieveSlipResponseCheck'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'classcode',name:'',dataType:''}},{T:1,N:'w2:key',A:{id:'responsetype',name:'',dataType:''}},{T:1,N:'w2:key',A:{id:'taxbilltypecode',name:'',dataType:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveSlipResponseCheck',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'classcode',name:'classcode',dataType:'text'}},{T:1,N:'w2:column',A:{id:'responsetype',name:'responsetype',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxbilltypecode',name:'taxbilltypecode',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_getMaxCloseYm_submitdone','ev:submiterror':'scwin.sbm_getMaxCloseYm_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSlipResponseCheck',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"dma_retrieveSlipResponseCheck","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveSlipListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_txt","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_txt","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrievePaymgnt',action:'/ac.fm.paymgnt.paymgnt.RetrievePaymentContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_slipNo","key":"IN_DS1"},{"id":"ds_paymgnt","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_slipNo","key":"IN_DS1"},{"id":"ds_paymgnt","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_retrievePaymgnt_submitdone','ev:submiterror':'scwin.sbm_retrievePaymgnt_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ac.fi.gnrlaccount.slipmgnt.DeleteSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_txt","key":"IN_DS1"}',target:'data:json,[{"id":"ds_txt","key":"IN_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'scwin.sbm_delete_submiterror',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_201_04_01b
// 이름     : 전표조회수정삭제
// 경로     : 회계/재무회계/일반회계/전표관리/
// 작 성 자 : 오영재
// 작 업 일 : 2026-1-8
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================
scwin.load = true;
scwin.privAdmin = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "privAdmin")) ? '' : $c.data.getMemInfo($p, "privAdmin");
scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd");
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd");
scwin.vUserHomeClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "userHomeClsCd")) ? '' : $c.data.getMemInfo($p, "userHomeClsCd");
scwin.vCoCd = scwin.vLoginCoCd;
scwin.isSubCompany = false;

//hidden
scwin.txtCoClsCd = "";
scwin.bCheck = "1";
scwin.onpageload = function () {
  //f_Header(); 

  const codeOptions = [{
    grpCd: "FI008",
    compID: "lc_postYn",
    opt: {
      "range": "1"
    }
  }, {
    grpCd: "FM017",
    compID: "gr_payment:payStsCd"
  }, {
    grpCd: "FM018",
    compID: "gr_payment:payMthdCd"
  }];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {};
scwin.ondataload = function () {
  let dltStr = "dlt_commonCodeFI008"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  let dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체

  dlt.insertRow(0);
  dlt.setRowData(0, ["FI008", "-1", "전체", "", "", "-1", "", "R"], true);
  scwin.f_setCompanyInfo();
  scwin.f_Setting();

  /**
     "grpCd": "FI008",
      "cd": "0",
      "cdNm": "가결",
      "fltrCd1": "",
      "fltrCd2": "",
      "fltrCd3": "",
      "sortSeq": "0",
      "cdDesc": "",
      "rowStatus": "R"
       */
  //scwin.getMaxCloseYm(); //마감년월 가져오기   
  console.log('-------------------------------------------------');
  console.log(dma_search2.getJSON());
  dma_search2.set('coCd', scwin.vCoCd); // f_Header()Line 124
  $c.sbm.execute($p, sbm_getMaxCloseYm);
};
scwin.udc_slipKndCd_onclickEvent = function (e) {
  scwin.f_openPopUp('4', 'F');
};
scwin.udc_slipAcctDeptCdSt_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};
scwin.udc_drawEmpNo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'F');
};
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.btn_reset_onclick = function (e) {
  scwin.f_SearchClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.udc_slipAcctDeptCdSt_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_slipAcctDeptCdSt, ed_slipAcctDeptNmSt, '1');
};
scwin.udc_drawEmpNo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_drawEmpNo, ed_drawEmpNm, '3');
};
scwin.udc_slipKndCd_onblurCodeEvent = function (e) {
  ed_slipKndCd.setValue(ed_slipKndCd.getValue().trim().toUpperCase());
  scwin.f_checkPopEd(ed_slipKndCd, ed_slipKndNm, '4');
};

/*
<!-- 전표번호클릭시  -->   
<script language="javascript"  for=gr_txt event=OnClick(Row,Colid)>
*/
scwin.gr_txt_oncellclick = function (rowIndex, columnIndex, columnId) {
  let Colid = columnId;
  let Row = rowIndex;
  //if(Colid=="slipNo" && Row > 0){
  if (Colid == "slipNo") {
    $c.gus.cfShowSlipInfo($p, ds_txt.getCellData(Row, "slipNo"));
  }
  if (Colid == "reverseSlipNo") {
    $c.gus.cfShowSlipInfo($p, ds_txt.getCellData(Row, "reverseSlipNo"));
  }
  dma_slipNo.set("slipNo", ds_txt.getCellData(Row, "slipNo"));
  scwin.f_Payment();
  if (Colid == "evidenceCnt") {
    scwin.f_evidPopUp();
  }
};
scwin.udc_coCd_onblurCodeEvent = function (e) {
  ed_coNm.value = '';
  scwin.f_PopUpCompanyInfo('T');
};
scwin.gr_txt_onheaderclick = function (headerId) {
  let i = 0;
  if (headerId == "checkYn") {
    if (scwin.bCheck == "1") {
      for (i = 0; i < ds_txt.getRowCount(); i++) {
        ds_txt.setCellData(i, "checkYn", "1");
      }
      scwin.bCheck = "0";
    } else {
      for (i = 0; i < ds_txt.getRowCount(); i++) {
        ds_txt.setCellData(i, "checkYn", "0");
      }
      ds_txt.reform();
      scwin.bCheck = "1";
    }
  }
};
scwin.sbm_getMaxCloseYm_submitdone = function (e) {
  let thisYm = scwin.strToDate; // 오늘일자 가져오기
  //최소 미마감월이 당월이 아닐때

  if (ds_getMaxCloseYm.getCellData(0, "closeYm") != thisYm.substr(0, 6)) {
    let closeYm = ds_getMaxCloseYm.getCellData(0, "closeYm");
    let firstDay = closeYm.substr(0, 4) + closeYm.substr(4, 2) + "01"; // 1일
    let lastDay = closeYm.substr(0, 4) + closeYm.substr(4, 2) + new Date(closeYm.substr(0, 4), closeYm.substr(4, 2), 0).getDate(); // 마지막날
    ed_slipDtEnd.setValue(lastDay); //작성일자 셋팅
    ed_slipDtSt.setValue(firstDay);
  } else {
    let firstDay = thisYm.substr(0, 4) + thisYm.substr(4, 2) + "01"; //당월 1일
    let lastDay = thisYm.substr(0, 4) + thisYm.substr(4, 2) + new Date(thisYm.substr(0, 4), thisYm.substr(4, 2), 0).getDate(); //당월 마지막날
    ed_slipDtEnd.setValue(lastDay); //작성일자 셋팅
    ed_slipDtSt.setValue(firstDay);
  }
};
scwin.sbm_getMaxCloseYm_submiterror = function (e) {};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.load = true;
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 조회조건 셋팅 
//-------------------------------------------------------------------------

scwin.f_Setting = function () {
  lc_postYn.setSelectedIndex(1);
  ed_slipDtSt.setValue(scwin.strToDate.substring(0, 6) + "01");
  ed_slipDtEnd.setValue(scwin.strToDate);
  ed_slipDtSt.focus();
  chk_elecApprvInfoYn.setValue(0);
  chk_cancleApprvNoDel.setValue(0);
  chk_resignYn.setValue(0);
  chb_previewCheck.hide();
  ed_slipAcctDeptCdEnd.hide();
  lc_dtClsCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 재조회
//-------------------------------------------------------------------------
scwin.f_SearchClear = function () {
  $c.gus.cfInitObjects($p, searchTable);
  scwin.f_Setting();
};

//-------------------------------------------------------------------------
// 숫자차이체크
//-------------------------------------------------------------------------

scwin.f_BetweenCheck = function (str1, str2) {
  if (str1 == "" && str2 != "" || str1 != "" && str2 == "") {
    return false;
  }
  if (parseInt(str2) - parseInt(str1) < 0) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 조회(거래목록)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  ed_slipAcctDeptCdEnd.setValue(ed_slipAcctDeptCdSt.getValue().trim());
  if (!(await $c.gus.cfValidate($p, [ed_coCd, ed_slipDtSt, ed_slipDtEnd, ed_slipAcctDeptCdSt, ed_slipAcctDeptCdEnd, ed_drawEmpNo, ed_slipNo]))) return false;
  if (!(await scwin.f_BetweenCheck(ed_slipAcctDeptCdSt.getValue().trim(), ed_slipAcctDeptCdEnd.getValue().trim()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, Array("작성부서To", "작성부서From"));
    ed_slipAcctDeptCdSt.focus();
    return false;
  }
  //debugger;
  if (!(await $c.gus.cfIsAfterDate($p, ed_slipDtSt.getValue().trim(), ed_slipDtEnd.getValue().trim()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); //시작일자가 종료일자 이전이어야 합니다.
    ed_slipDtSt.focus();
    return false;
  }

  //ds_search.UseChangeInfo = false;
  //tr_search.Action="/ac.fi.gnrlaccount.slipmgnt.RetrieveSlipListCMD.do";
  //tr_search.post();
  dma_search.set("elecApprvInfoYn", chk_elecApprvInfoYn.getValue());
  dma_search.set("cancleApprvNoDel", chk_cancleApprvNoDel.getValue());
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회(지급)
//-------------------------------------------------------------------------
scwin.f_Payment = function () {
  //alert(ds_slipNo.NameValue(1,"slipNo"));
  //ds_slipNo.NameString(1,"slipNo") = "0000001625";
  if (dma_slipNo.get("slipNo") != "") {
    //ds_slipNo.UseChangeInfo = false;
    //tr_retrievePaymgnt.post();
    $c.sbm.execute($p, sbm_retrievePaymgnt);
  }
};

//-------------------------------------------------------------------------
// 거래삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  if (ds_txt.getModifiedIndex().length === 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["데이타"]);
    return;
  }

  // 회계처리가 처리되고 전표종류가 수정불가일경우 체크
  for (i = 0; i < ds_txt.getRowCount(); i++) {
    if (ds_txt.getCellData(i, "checkYn") == "T") {
      if (ds_txt.getCellData(i, "slipKndCd") == 'A05' // A05 : 대체전표
      || ds_txt.getCellData(i, "slipKndCd") == 'A13' // A13 : 대체전표(외부패키지)	
      || ds_txt.getCellData(i, "slipKndCd") == 'K02' // K02 : 자회사매출전표	
      || ds_txt.getCellData(i, "slipKndCd") == 'B03' // B03 : 자산매각	
      || ds_txt.getCellData(i, "slipKndCd") == 'B12' // B12 : 재고자산 매각	
      //|| (ds_txt.NameValue(i,"slipKndCd") == 'K02')		// A20 : 매출전표(임대차)	
      ) {
        //ds_retrieveSlipResponseCheck.SyncLoad = true;
        const checkSlipNo = ds_txt.getCellData(i, "slipNo");

        //ds_retrieveSlipResponseCheck.DataID = "/ac.fi.gnrlaccount.slipmgnt.RetrieveSlipResponseCheckCMD.do?slipNo="+checkSlipNo+"";
        //ds_retrieveSlipResponseCheck.Reset();
        console.log(checkSlipNo);
        sbm_retrieveSlipResponseCheck.action = "/ac.fi.gnrlaccount.slipmgnt.RetrieveSlipResponseCheckCMD.do?slipNo=" + checkSlipNo + "";
        let res = await $c.sbm.execute($p, sbm_retrieveSlipResponseCheck);
        if (res.responseJSON.resultDataSet[0].Msg == "SUCC") {
          dma_retrieveSlipResponseCheck.setJSON(res.responseJSON.GAUCE[0]);
        } else {
          return;
        }
        const checkClassCode = dma_retrieveSlipResponseCheck.get("classcode");
        const responseType = dma_retrieveSlipResponseCheck.get("responsetype");
        const taxbillTypeCode = dma_retrieveSlipResponseCheck.get("taxbilltypecode");
        console.log("checkClassCode=>");
        var ii = i + 1;
        if (checkClassCode != null) {
          if (checkClassCode == '05')
            // CLASSCODE - 05:신규발급 
            {
              if (taxbillTypeCode == '01')
                // 세금계산서
                {
                  if (responseType == 'A')
                    // A : KTNET접수
                    {
                      $c.win.alert($p, "선택한 " + ii + "번째 행 전표번호(" + ds_txt.getCellData(i, "slipNo") + ") 전자세금계산서 이력 정보\n\n" + "계산서 신고구분 : 신규발급\n" + "계산서 이력 : KT-NET 접수\n\n" + "계산서 이력이 KT-NET 접수일 경우 전표삭제 불가능 합니다.\n" + "전자세금계산서-삭제 화면에서 삭제전송 후 회계처리취소 가능 합니다.");
                      return;
                    } else if (responseType == 'D')
                    // D : 거부-화주
                    {
                      $c.win.alert($p, "선택한 " + ii + "번째 행 전표번호(" + ds_txt.getCellData(i, "slipNo") + ") 전자세금계산서 이력 정보\n\n" + "계산서 신고구분 : 신규발급\n" + "계산서 이력 : 거부-화주\n\n" + "계산서 이력이 거부-화주일 경우 전표삭제 불가능 합니다.\n" + "전자세금계산서-삭제 화면에서 삭제전송 후 회계처리취소 가능 합니다.");
                      return;
                    } else if (responseType == 'E')
                    // E : KT-NET오류
                    {
                      $c.win.alert($p, "선택한 " + ii + "번째 행 전표번호(" + ds_txt.getCellData(i, "slipNo") + ") 전자세금계산서 이력 정보\n\n" + "계산서 신고구분 : 신규발급\n" + "계산서 이력 : KT-NET오류\n\n" + "해당 전표는 회계처리취소를 먼저 진행 해야 합니다");
                      return;
                    } else if (responseType == 'X')
                    // X : 국세청오류
                    {
                      $c.win.alert($p, "선택한 " + ii + "번째 행 전표번호(" + ds_txt.getCellData(i, "slipNo") + ") 전자세금계산서 이력 정보\n\n" + "계산서 신고구분 : 신규발급\n" + "계산서 이력 : 국세청오류\n\n" + "해당 전표는 회계처리취소를 먼저 진행 해야 합니다");
                      return;
                    } else if (responseType == 'F')
                    // F : 국세청최종접수
                    {
                      $c.win.alert($p, "선택한 " + ii + "번째 행 전표번호(" + ds_txt.getCellData(i, "slipNo") + ") 전자세금계산서 이력 정보\n\n" + "계산서 신고구분 : 신규발급\n" + "계산서 이력 : 국세청 최종접수\n\n" + "계산서 이력이 국세청 최종접수일 경우 전표삭제 불가능 합니다.\n" + "전자세금계산서-삭제 화면에서 수정세금계산서를 보낸 후\n" + "수정세금계산서가 국세청최종접수 되어야 합니다.\n\n" + "수정세금계산서는 재경팀만 발급할 수 있습니다.\n" + "재경팀에 문의하시기 바랍니다.");
                      return;
                    } else if (responseType == 'L')
                    // L : 승인-화주
                    {
                      $c.win.alert($p, "선택한 " + ii + "번째 행 전표번호(" + ds_txt.getCellData(i, "slipNo") + ") 전자세금계산서 이력 정보\n\n" + "계산서 신고구분 : 신규발급\n" + "계산서 이력 : 승인-화주\n\n" + "계산서 이력이 승인-화주 상태일 경우 전표삭제 불가능 합니다.\n" + "국세청 응답 이력을 기다려야 합니다.");
                      return;
                    } else if (responseType == 'N')
                    // N : 이메일전송실패
                    {
                      $c.win.alert($p, "선택한 " + ii + "번째 행 전표번호(" + ds_txt.getCellData(i, "slipNo") + ") 전자세금계산서 이력 정보\n\n" + "계산서 신고구분 : 신규발급\n" + "계산서 이력 : 이메일전송실패\n\n" + "이력이 이메일전송실패 상태일 경우 전표삭제 불가능 합니다.\n" + "전자세금계산서-삭제 화면에서 삭제전송 후 회계처리취소 가능 합니다.");
                      return;
                    } else if (responseType == 'R')
                    // R : 이메일고객확인
                    {
                      $c.win.alert($p, "선택한 " + ii + "번째 행 전표번호(" + ds_txt.getCellData(i, "slipNo") + ") 전자세금계산서 이력 정보\n\n" + "계산서 신고구분 : 신규발급\n" + "계산서 이력 : 이메일고객확인\n\n" + "이력이 이메일고객확인 상태일 경우 전표삭제 불가능 합니다.\n" + "화주 응답 이력을 기다려야 합니다.");
                      return;
                    } else if (responseType == 'T')
                    // T : 국세청1차접수
                    {
                      $c.win.alert($p, "선택한 " + ii + "번째 행 전표번호(" + ds_txt.getCellData(i, "slipNo") + ") 전자세금계산서 이력 정보\n\n" + "계산서 신고구분 : 신규발급\n" + "계산서 이력 : 국세청1차접수\n\n" + "이력이 국세청1차접수 상태일 경우 전표삭제 불가능 합니다.\n" + "국세청 응답 이력을 기다려야 합니다.");
                      return;
                    }
                } else if (taxbillTypeCode == '02')
                // 수정세금계산서
                {
                  if (responseType == 'A')
                    // A : KTNET접수
                    {
                      $c.win.alert($p, "선택한 " + ii + "번째 행 전표번호(" + ds_txt.getCellData(i, "slipNo") + ") 전자세금계산서 이력 정보\n\n" + "계산서 신고구분 : 신규발급 (수정세금계산서)\n" + "계산서 이력 : KT-NET 접수\n\n" + "계산서 이력이 KT-NET 접수일 경우 전표삭제 불가능 합니다.\n" + "수정세금계산서 최종접수 후 전표삭제 하셔야 합니다.");
                      return;
                    } else if (responseType == 'D')
                    // D : 거부-화주
                    {
                      $c.win.alert($p, "선택한 " + ii + "번째 행 전표번호(" + ds_txt.getCellData(i, "slipNo") + ") 전자세금계산서 이력 정보\n\n" + "계산서 신고구분 : 신규발급 (수정세금계산서)\n" + "계산서 이력 : 거부-화주\n\n" + "계산서 이력이 거부-화주일 경우 전표삭제 불가능 합니다.\n" + "CNI에 전표삭제 관련 문의 하시기 바랍니다.");
                      return;
                    } else if (responseType == 'L')
                    // L : 승인-화주
                    {
                      $c.win.alert($p, "선택한 " + ii + "번째 행 전표번호(" + ds_txt.getCellData(i, "slipNo") + ") 전자세금계산서 이력 정보\n\n" + "계산서 신고구분 : 신규발급 (수정세금계산서)\n" + "계산서 이력 : 승인-화주\n\n" + "계산서 이력이 승인-화주 상태일 경우 전표삭제 불가능 합니다.\n" + "국세청 응답 이력을 기다려야 합니다.");
                      return;
                    } else if (responseType == 'N')
                    // N : 이메일전송실패
                    {
                      $c.win.alert($p, "선택한 " + ii + "번째 행 전표번호(" + ds_txt.getCellData(i, "slipNo") + ") 전자세금계산서 이력 정보\n\n" + "계산서 신고구분 : 신규발급 (수정세금계산서)\n" + "계산서 이력 : 이메일전송실패\n\n" + "이력이 이메일전송실패 상태일 경우 전표삭제 불가능 합니다.\n" + "CNI에 전표삭제 관련 문의 하시기 바랍니다.");
                      return;
                    } else if (responseType == 'R')
                    // R : 이메일고객확인
                    {
                      $c.win.alert($p, "선택한 " + ii + "번째 행 전표번호(" + ds_txt.getCellData(i, "slipNo") + ") 전자세금계산서 이력 정보\n\n" + "계산서 신고구분 : 신규발급 (수정세금계산서)\n" + "계산서 이력 : 이메일고객확인\n\n" + "이력이 이메일고객확인 상태일 경우 전표삭제 불가능 합니다.\n" + "화주 응답 이력을 기다려야 합니다.");
                      return;
                    } else if (responseType == 'T')
                    // T : 국세청1차접수
                    {
                      $c.win.alert($p, "선택한 " + ii + "번째 행 전표번호(" + ds_txt.getCellData(i, "slipNo") + ") 전자세금계산서 이력 정보\n\n" + "계산서 신고구분 : 신규발급 (수정세금계산서)\n" + "계산서 이력 : 국세청1차접수\n\n" + "이력이 국세청1차접수 상태일 경우 전표삭제 불가능 합니다.\n" + "국세청 응답 이력을 기다려야 합니다.");
                      return;
                    } else if (responseType == 'E')
                    // E : KT-NET오류
                    {
                      $c.win.alert($p, "선택한 " + ii + "번째 행 전표번호(" + ds_txt.getCellData(i, "slipNo") + ") 전자세금계산서 이력 정보\n\n" + "계산서 신고구분 : 신규발급 (수정세금계산서)\n" + "계산서 이력 : KT-NET오류\n\n" + "이력이 KT-NET오류 상태일 경우 전표삭제 불가능 합니다.\n" + "CNI에 전표삭제 관련 문의 하시기 바랍니다.");
                      return;
                    } else if (responseType == 'X')
                    // X : 국세청오류
                    {
                      $c.win.alert($p, "선택한 " + ii + "번째 행 전표번호(" + ds_txt.getCellData(i, "slipNo") + ") 전자세금계산서 이력 정보\n\n" + "계산서 신고구분 : 신규발급 (수정세금계산서)\n" + "계산서 이력 : 국세청오류\n\n" + "이력이 국세청오류 상태일 경우 전표삭제 불가능 합니다.\n" + "CNI에 전표삭제 관련 문의 하시기 바랍니다.");
                      return;
                    }
                }
            }
          if (checkClassCode == '07')
            // CLASSCODE - 05:신규발급 
            {
              $c.win.alert($p, "선택한 " + ii + "번째 행 전표번호(" + ds_txt.getCellData(i, "slipNo") + ") 전자세금계산서 이력 정보\n\n" + "계산서 신고구분 : 삭제발급\n\n" + "해당 전표는 회계처리취소를 먼저 진행 해야 합니다");
              return;
            }
        }

        // POST_YN이 1이고, 전자세금계산서 보낸 이력이 없으면
        if (ds_txt.getCellData(i, "postYn") == "1" && checkClassCode == null) {
          $c.win.alert($p, "전표번호[" + ds_txt.getCellData(i, "slipNo") + "]는 회계처리취소를 먼저 진행 해야 합니다.");
          return;
        }
      } else {
        // 대체전표가 아닐때
        if (ds_txt.getCellData(i, "postYn") == "1") {
          $c.gus.cfAlertMsg($p, "전표번호[" + ds_txt.getCellData(i, "slipNo") + "]는 이미 회계처리를 했습니다.");
          //ds_txt.Undo(i);
          $c.data.undoRow($p, ds_txt, "Y");
          return;
        }
      }
      if (ds_txt.getCellData(i, "cancelYn") == "N") {
        $c.gus.cfAlertMsg($p, "전표번호[" + ds_txt.getCellData(i, "slipNo") + "]는 사이버브랜치 자금전송이 완료되어 삭제 할 수 없습니다.");
        //ds_txt.Undo(i);
        //$c.data.undoRow(ds_txt, "Y");
        ds_txt.undoRow(i);
        return;
      }
    }
    if (ds_txt.getRowStatus(i) == "U" && ds_txt.getCellData(i, "modPsblYn") == "0") {
      $c.gus.cfAlertMsg($p, "전표번호[" + ds_txt.getCellData(i, "slipNo") + "]는 삭제할 수 없는 전표입니다.");
      //ds_txt.Undo(i);
      //$c.data.undoRow(ds_txt, "Y");
      ds_txt.undoRow(i);
      return;
    }
  }
  let ret;

  //ret = await $c.win.confirm(MSG_CM_CRM_008,"선택하신 전표");
  ret = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_008, "선택하신 전표"));
  if (ret == true) {
    //tr_delete.Post();
    $c.sbm.execute($p, sbm_delete);
  }
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCdSt_cb = function (rtnList) {
  scwin.f_resultPopEd(ed_slipAcctDeptCdSt, ed_slipAcctDeptNmSt, rtnList);
};
scwin.udc_drawEmpNo_cb = function (rtnList) {
  scwin.f_resultPopEd(ed_drawEmpNo, ed_drawEmpNm, rtnList);
};
scwin.udc_slipKndCd_cb = function (rtnList) {
  scwin.f_resultPopEd(ed_slipKndCd, ed_slipKndNm, rtnList);
};
scwin.f_openPopUp = function (flag, check) {
  let param, resignYn;
  switch (flag) {
    case '1':
      // 부서조회    
      param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      udc_slipAcctDeptCdSt.setSelectId("retrieveAcctDeptCdInfo6");
      udc_slipAcctDeptCdSt.cfCommonPopUp(scwin.udc_slipAcctDeptCdSt_cb, ed_slipAcctDeptCdSt.getValue().trim(), ed_slipAcctDeptNmSt.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '2':
      // 부서조회	   

      break;
    case '3':
      // 사원
      param = '';
      resignYn = '';
      if (chk_resignYn.getValue() == 1) {
        resignYn = 'Y';
      } else {
        resignYn = '';
      }
      param = ed_coCd.getValue() + "," + scwin.txtCoClsCd + "," + resignYn;
      udc_drawEmpNo.setSelectId("retrieveAcEmpInfo");
      udc_drawEmpNo.cfCommonPopUp(scwin.udc_drawEmpNo_cb, ed_drawEmpNo.getValue().trim(), ed_drawEmpNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, 'F');
      break;
    case '4':
      // 전표종류

      udc_slipKndCd.setSelectId("retrieveSlipKndCd");
      udc_slipKndCd.cfCommonPopUp(scwin.udc_slipKndCd_cb, ed_slipKndCd.getValue().trim(), ed_slipKndNm.getValue(), check, null, null, null, null, "0", null, null, null, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------

scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd.getValue().trim() == strCd.options.hidVal) return;
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") scwin.f_openPopUp(flag, 'T');
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------

scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명
    strCd.options.hidVal = rtnList[0]; // 히든값
    strNm.options.hidVal = rtnList[1];
  } else {
    strCd.setValue("");
    strNm.setValue("");
    strCd.options.hidVal = "";
    strNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 부가세 e세로 대사 팝업 
//-------------------------------------------------------------------------  	
scwin.f_evidPopUp = function () {
  let data = {
    "slipNo": ds_txt.getCellData(ds_txt.getRowPosition(), "slipNo")
  };

  /**
      const options = {
          id: "fi_403_01_02b",
          type: "popup",
          modal: true,
          popupName: "증빙등록조회",
          width: 870,
          height: 745,
      };
       */
  //2026-03-20 DT팀 권정민 책임님 요청
  var options = {
    id: "smpPop",
    popupName: "증빙등록조회" // 증빙등록조회
    ,
    modal: true,
    type: "browserPopup",
    width: 1450,
    height: 1000,
    title: true
  };
  $c.win.openPopup($p, "/ui/ac/fi/taxbiz/evidmgnt/fi_403_01_02b.xml", options, data);
};

//-------------------------------------------------------------------------
// 상세
//-------------------------------------------------------------------------
scwin.f_Detail = function (row) {
  if (row > -1) {
    /*
    var valueObject = new Object();
    valueObject.slipNo = ds_txt.NameValue(row, "slipNo");
     //상세화면 호출 
    var result = window.showModalDialog("fi_201_04_02p.jsp", valueObject, 
                    "dialogWidth:825px; dialogHeight:560px; status:no; scroll:no");
    */

    let data = {
      "slipNo": ds_txt.getCellData(row, "slipNo")
    };
    const options = {
      id: "fi_201_04_02p",
      type: "browserPopup",
      modal: true,
      popupName: "전표내역조회",
      width: 825,
      height: 800
    };
    $c.win.openPopup($p, "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_04_02p.xml", options, data);

    //다시 조회함 
    //f_Retrieve();
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, Array("Row"));
  }
};

//-------------------------------------------------------------------------
// 증빙내역
//-------------------------------------------------------------------------
scwin.f_Evidence = function (row) {
  if (row > -1) {
    /*
    var valueObject = new Object();
    valueObject.slipNo = ds_txt.NameValue(row, "slipNo");
    valueObject.postYn = ds_txt.NameValue(row,"postYn");
    valueObject.modPsblYn = ds_txt.NameValue(row,"modPsblYn");
     //증빙내역 호출 
    var result = window.showModalDialog("fi_201_04_04p.jsp", valueObject, 
                    "dialogWidth:825px; dialogHeight:600px; status:no; scroll:no");
    */

    let data = {
      "slipNo": ds_txt.getCellData(row, "slipNo"),
      "slpostYnipNo": ds_txt.getCellData(row, "postYn"),
      "modPsblYn": ds_txt.getCellData(row, "modPsblYn")
    };
    const options = {
      id: "fi_201_04_04p",
      type: "browserPopup",
      modal: true,
      popupName: "증빙내역조회",
      width: 825,
      height: 600
    };
    $c.win.openPopup($p, "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_04_04p.xml", options, data);

    //다시 조회함 
    //f_Retrieve();
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, Array("Row"));
  }
};

//분개내역  
scwin.btn_evid_onclick = function (e) {
  let rowPos = ds_txt.getRowPosition();
  if (!$c.gus.cfIsNull($p, rowPos)) {
    scwin.f_Detail(ds_txt.getRowPosition());
  } else {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_056, "Row"));
  }
  //scwin.f_Detail(ds_txt.getRowPosition());
};

//증빙내역  
scwin.btn_evid2_onclick = function (e) {
  let rowPos = ds_txt.getRowPosition();
  if (!$c.gus.cfIsNull($p, rowPos)) {
    scwin.f_Evidence(ds_txt.getRowPosition());
  } else {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_056, "Row"));
  }
  //scwin.f_Evidence(ds_txt.getRowPosition());
};

//-------------------------------------------------------------------------
//  회계전표발행 
//-------------------------------------------------------------------------

scwin.f_OzReport = function () {
  console.log('scwin.f_OzReport');
  console.log(ds_txt.getModifiedIndex().length);
  if (ds_txt.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, Array("데이타"));
    return;
  }

  //OZStartBatch();  
  //ROWSTATUS 
  //AsIs 0: Normal, 1: Insert, 2: Delete, 3: Update, 4: Logical
  //ToBe 초기상태:R, 갱신:U, 삽입:C, 삭제:D, 삽입 후 삭제:V
  let param = "";
  for (i = 0; i < ds_txt.getRowCount(); i++) {
    if (ds_txt.getRowStatus(i) == "U" && ds_txt.getCellData(i, "checkYn") == "T") {
      param = param + "," + ds_txt.getCellData(i, "slipNo");
    }
  }

  //let odiParam = new ODIParam("fi_201_04_02p");
  //odiParam.add("slipNo", param.substring(1));

  // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  //var formParam = new FormParam();

  // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  //var viewerParam = new ViewerParam();
  //viewerParam.add("viewer.zoom", "100");
  //viewerParam.add("viewer.useprogressbar", "false");		//PROGRESSBAR 안보이게....

  //$c.gus.cfOZReport("chb_printCheck", "chb_previewCheck", "/ac/fi/gnrlaccount/slipmgnt/fi_201_04_02p.ozr", odiParam, viewerParam, formParam);

  let data = {
    reportName: "/ac/fi/gnrlaccount/slipmgnt/fi_201_04_02p.ozr",
    odiParam: {
      //  sysPath             : "dbl.ac.fi.gnrlaccount.slipmgnt"
      slipNo: param.substring(1)
    },
    viewerParam: {
      viewer: 100 // 배율 설정
      ,
      useprogressbar: false // 프로그레스바 쓸지 말지
      // ,mode           : "print"  // 인쇄 옵션창 표시 없이 바로 출력
    },
    formParam: {}
  };
  console.log("  회계전표발행 (전표인쇄) data [" + JSON.stringify(data) + "]");

  // wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
//  openPopup 팝업 오픈
//-------------------------------------------------------------------------
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
//  회계전표발행 (계정합인쇄)
//-------------------------------------------------------------------------

scwin.f_OzReport1 = function () {
  if (ds_txt.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, Array("데이타"));
    return;
  }

  // 1. 계정합인쇄
  let param = "";
  for (i = 0; i < ds_txt.getRowCount(); i++) {
    if (ds_txt.getRowStatus(i) == "U" && ds_txt.getCellData(i, "checkYn") == "T") {
      param = param + "," + ds_txt.getCellData(i, "slipNo");
    }
  }

  //var odiParam = new ODIParam("fi_201_04_03p");
  //odiParam.add("slipNo", param.substring(1));
  // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  //var formParam = new FormParam();
  //formParam.add("form1","폼1");

  // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  //var viewerParam = new ViewerParam();
  //viewerParam.add("viewer.zoom", "100");
  //viewerParam.add("viewer.useprogressbar", "false");		//PROGRESSBAR 안보이게....

  //$c.gus.cfOZReport("chb_printCheck", "chb_previewCheck", "/ac/fi/gnrlaccount/slipmgnt/fi_201_04_03p.ozr", odiParam, viewerParam, formParam);

  let data = {
    reportName: "/ac/fi/gnrlaccount/slipmgnt/fi_201_04_03p.ozr",
    odiParam: {
      //  sysPath             : "dbl.ac.fi.gnrlaccount.slipmgnt"
      slipNo: param.substring(1)
    },
    viewerParam: {
      viewer: 100 // 배율 설정
      ,
      useprogressbar: false // 프로그레스바 쓸지 말지
      // ,mode           : "print"  // 인쇄 옵션창 표시 없이 바로 출력
    },
    formParam: {}
  };
  // wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  let sheetTitle = "전표내역";
  let ret;
  const gridId = gr_txt;
  const infoArr = [];
  const options = {
    fileName: '전표내역조회' + '.xlsx',
    // + ".xls",
    sheetName: sheetTitle
  };
  ret = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (ret) {
    let res = await $c.data.downloadGridViewExcel($p, gridId, options, infoArr);
    gr_txt.setColumnVisible('checkYn', true);
  }
};
scwin.f_Excel1 = async function () {
  let sheetTitle = "집행정보조회";
  let ret;
  const gridId = gr_payment;
  const infoArr = [];
  const options = {
    fileName: sheetTitle,
    // + ".xls",
    sheetName: sheetTitle,
    rowNumHeaderValue: " ",
    rowNumVisible: true
  };
  ret = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (ret) {
    gr_payment.setColumnVisible('paySlip', false);
    $c.data.downloadGridViewExcel($p, gridId, options, infoArr);
    gr_payment.setColumnVisible('paySlip', true);
  }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_slipAcctDeptCdSt, ed_slipAcctDeptNmSt]); //  작성부서   
  $c.gus.cfInitObjects($p, [ed_drawEmpNo, ed_drawEmpNm]); //  작성자 
};
scwin.udc_coCd_cb = function (rtnList) {
  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (ed_coCd.options.hidVal != rtnList[0]) scwin.f_initObj();
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    ed_coCd.options.hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분   
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.load) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
    scwin.load = false;
  }
};
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_coCd.setSelectId("retrieveDongbuGroupCompanyInfo");
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_cb, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};

//-------------------------------------------------------------------------
// 부가세번호 체크
// 사용안함
//-------------------------------------------------------------------------
scwin.getVatNo = function (slipNo) {
  // SELECT 절 
  /*
  let param1 = 
          " VAT_NO 			AS COL1 "
      + ",'' 				AS COL2 "
      + ",''   			AS COL3 "
      + ",''   			AS COL4 "
      + ",''  			AS COL5 "
      + ",'' 				AS COL6 "
      + ",'' 				AS COL7 "
      + ",'' 				AS COL8 "
      + ",'' 				AS COL9 "
      + ",'' 				AS COL10 "
      ;
  
  // 대상테이블 	
  let param2 = 		
          "(SELECT SELL_VAT_NO AS VAT_NO "
      + "   FROM TB_FI301 "
      + "  WHERE SLIP_NO = '" + slipNo + "'"
      + "	   AND DEL_YN = 0 "
      + "  UNION ALL "
      + " SELECT PCHS_EVID_NO AS VAT_NO "
      + "   FROM TB_FI304 "
      + "  WHERE SLIP_NO = '" + slipNo + "'"
      + "	   AND DEL_YN = 0) "
      ;
   // 조건절	  
  let param3 = 						  
          " AND 1=1 "
      ;
  
  // 정렬    
  let param4 = 	
          " COL1 "
      ;
      
  ds_getVatNo.DataId = 
      "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=dinymicQueryTest" + "&param1=" + param1 
                                                                                      + "&param2=" + param2
                                                                                      + "&param3=" + param3 
                                                                                      + "&param4=" + param4;		
  ds_getVatNo.Reset();  
  */
};
scwin.sbm_delete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == "0") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_004); // 성공적으로삭제하였습니다
    //ds_txt.ClearData();
    ds_txt.removeAll();

    //ds_paymgnt.ClearData();
    ds_paymgnt.removeAll();

    //ds_txtcontents.ClearData();
    //ds_txtcontents.removeAll();
    //ds_txtcontents 는 없음
    scwin.f_Retrieve();

    //gr_txt.ColumnProp('checkYn','HeadCheck')="false";
    //모두 언체크
    // dl_list는 그리드와 바인딩된 DataList ID입니다.
    let rowCount = ds_txt.getRowCount();
    for (var i = 0; i < rowCount; i++) {
      // 'checkYn' 컬럼의 값을 "0"(해제)으로 설정
      ds_txt.setCellData(i, "checkYn", "F");
    }
  } else {}
};
scwin.sbm_delete_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
  $c.gus.cfEnableKeyData($p);
};
scwin.sbm_search_submitdone = function (e) {
  let rowCount = ds_txt.getRowCount();
  ed_totalRows.setValue(rowCount);
  if (rowCount == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    dma_slipNo.set("slipNo", ds_txt.getCellData(0, "slipNo"));
    dma_slipNo.set("coCd", dma_search.get("coCd"));
    console.log("dma_slipNo.get('slipNo') =>" + dma_slipNo.get("slipNo"));
    scwin.f_Payment();
    gr_txt.setFocusedCell(0, 0, false);
  }
  for (var i = 0; i < rowCount; i++) {
    // 'checkYn' 컬럼의 값을 "0"(해제)으로 설정
    ds_txt.setCellData(i, "checkYn", "F");
  }
};
scwin.sbm_search_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.sbm_retrievePaymgnt_submitdone = function (e) {
  console.log('scwin.sbm_retrievePaymgnt_submitdone');
  console.log(e);
  ed_totalRows2.setValue(ds_paymgnt.getRowCount());
  //gr_payment.setFocusedCell(0, 0, false);    
};
scwin.sbm_retrievePaymgnt_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.btn_del_onclick = function (e) {
  scwin.f_Delete();
};
scwin.btn_print_onclick = function (e) {
  scwin.f_OzReport();
};
scwin.btn_print2_onclick = function (e) {
  scwin.f_OzReport1();
};
scwin.ds_paymgnt_ondataload = function () {
  //컬럼명 같은것 때문에 우회
  for (i = 0; i < ds_paymgnt.getRowCount(); i++) {
    ds_paymgnt.setCellData(i, "payAmt2", ds_paymgnt.getCellData(i, "payAmt"));
  }
  ds_paymgnt.reform();
};
scwin.postNoDisplayFormat = function (data) {
  return $c.gus.decode($p, data, 0, "", data);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'searchTable',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_company',code:'coCd',codeId:'ed_coCd','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent',id:'udc_coCd',mandatoryCode:'true',maxlengthCode:'3',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'dma_search',selectID:'',style:'',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'가결구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_postYn',style:'width: 150px;',submenuSize:'auto',ref:'data:dma_search.postYn',objType:'data',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'req',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dtClsCd',style:'width: 100px;',submenuSize:'auto',ref:'data:dma_search.dtClsCd',objType:'',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작성일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'slipDt'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'회계일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'postDt'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'regDt'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar3',refDataMap:'dma_search',refEdDt:'slipDtEnd',refStDt:'slipDtSt',style:'',edFromId:'ed_slipDtSt',edToId:'ed_slipDtEnd',objTypeFrom:'data',objTypeTo:'data','ev:onBlur':'scwin.udc_fromToCalendar3_onBlur',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_slipKndCd',nameId:'ed_slipKndNm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_slipKndCd',btnId:'btn_acctDeptCd',refDataCollection:'dma_search',code:'slipKndCd',objTypeName:'data',objTypeCode:'data','ev:onclickEvent':'scwin.udc_slipKndCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_slipKndCd_onblurCodeEvent',UpperFlagCode:'1',afterAllowCharCode:'0-9',allowCharCode:'A-Za-z0-9',allowCharCodeLength:'1',beforeAllowCharCode:'A-Za-z',maxlengthCode:'3',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_elecApprvInfoYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실물전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성부서',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_slipAcctDeptCdSt',code:'slipAcctDeptCdSt',codeId:'ed_slipAcctDeptCdSt','ev:onblurCodeEvent':'scwin.udc_slipAcctDeptCdSt_onblurCodeEvent','ev:onclickEvent':'scwin.udc_slipAcctDeptCdSt_onclickEvent',id:'udc_slipAcctDeptCdSt',maxlengthCode:'5',nameId:'ed_slipAcctDeptNmSt',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'dma_search',selectID:'',skipOnBlurCodeValueEmpty:'N',style:'',validTitle:''}},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_slipAcctDeptCdEnd',code:'slipAcctDeptCdEnd',codeId:'ed_slipAcctDeptCdEnd',id:'udc_slipAcctDeptCdEnd',nameId:'ed_slipAcctDeptNmEnd',popupID:'',refDataCollection:'dma_search',selectID:'',style:'display: none;',validTitle:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_slipNo',style:'width: 150px;',ref:'data:dma_search.slipNo',objType:'data',allowChar:'0-9',maxlength:'10'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',falseValue:'0',id:'chk_cancleApprvNoDel',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소상신 후 미삭제 전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_drawEmpNo',nameId:'ed_drawEmpNm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_drawEmpNo',btnId:'btn_drawEmpNo',refDataCollection:'dma_search',code:'drawEmpNo',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_drawEmpNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_drawEmpNo_onblurCodeEvent',allowCharCode:'0-9',maxlengthCode:'6',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_resignYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'퇴사자포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'전표정보',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_Excel',gridDownUserAuth:'X',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_txt'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_txt',style:'',id:'gr_txt',visibleRowNum:'10',class:'wq_gvw','ev:oncellclick':'scwin.gr_txt_oncellclick','ev:onheaderclick':'scwin.gr_txt_onheaderclick',rowStatusVisible:'true',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'column1',value:'',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',value:'요청번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column15',value:'작성일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column13',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column11',value:'역전표번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column9',value:'작성부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column3',value:'전표종류',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column5',value:'전표종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column7',value:'차변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'대변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'회계일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column35',value:'회계부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'회계차수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'작성자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'결재자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column27',value:'증빙개수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'생성일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'checkYn',value:'',displayMode:'label',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'apprvReqNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'slipDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'color:blue;',id:'slipNo',value:'',displayMode:'label',class:'linktype',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'reverseSlipNo',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'text',style:'',id:'drawAcctDeptNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'slipKndCd',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'slipKndNm',value:'',displayMode:'label',readOnly:'true',class:'tal'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',style:'',id:'dsum',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',style:'',id:'csum',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'postDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'postAcctDeptNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'postNo',value:'',displayMode:'label',readOnly:'true',displayFormatter:'scwin.postNoDisplayFormat'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'drawEmpNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'apprvEmpNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'color:blue',id:'evidenceCnt',value:'',displayMode:'label',class:'underline',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'regDt',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_evid',type:'button',class:'btn link',userAuth:'R','ev:onclick':'scwin.btn_evid_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'분개내역'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_evid2',type:'button',class:'btn link',userAuth:'R','ev:onclick':'scwin.btn_evid2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'증빙내역'}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_print',type:'button',class:'btn',userAuth:'P','ev:onclick':'scwin.btn_print_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표인쇄'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_print2',type:'button',class:'btn',userAuth:'P','ev:onclick':'scwin.btn_print2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계정합인쇄'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'display: none;',value:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'chb_previewCheck'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'true'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_printCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'display: none;',value:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'chb_printCheck'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'true'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_del',type:'button',class:'btn',userAuth:'D',objType:'bSave','ev:onclick':'scwin.btn_del_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표삭제'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'집행정보 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownFn:'scwin.f_Excel1',gridDownUserAuth:'X',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_payment'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_paymgnt',id:'gr_payment',style:'',visibleRowNum:'3',visibleRowNumFix:'true',rowNumVisible:'true',rowNumWidth:'50',readOnly:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'요청금액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'정산처',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'지급액',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'적요',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'지급상태',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'지급은행',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'지급계좌',width:'200'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column38',value:'지급전표',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'지불방법',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column37',inputType:'text',style:'',value:'요청일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column35',inputType:'text',style:'',value:'지급확정일',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'payAmt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAmt2',inputType:'text',style:'',value:'',width:'150',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outbrSummary',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payStsCd',inputType:'select',style:'',textAlign:'left',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankNm',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payBankAcntNo',inputType:'text',style:'',value:'',width:'200'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'paySlip',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payMthdCd',inputType:'select',style:'',textAlign:'right',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payDt',inputType:'text',style:'',value:'',width:'120',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnDt',inputType:'text',style:'',value:'',width:'150',displayFormat:'yyyy/MM/dd',dataType:'date'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'list-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'준비: ',class:'txt-dot dis-inline bold',escape:'false'}},{T:1,N:'w2:textbox',A:{style:'width: 430px;',id:'',label:'&nbsp;전표생성은 되었으나, 지급내역이 자금집행이 안된상태',class:'dis-inline',escape:'false'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'대기: ',class:'txt-dot dis-inline bold',escape:'false'}},{T:1,N:'w2:textbox',A:{class:'dis-inline',escape:'false',id:'',label:'&nbsp;자금집행이 되어, 지급내역이 자금팀 이관된 상태',style:''}}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'보류: ',class:'txt-dot dis-inline bold',escape:'false'}},{T:1,N:'w2:textbox',A:{style:'width: 430px;',id:'',label:'&nbsp;지급내역을 자금팀내에서 문제가 있는 내역으로 판단하여 묶어둔 상태 ',class:'dis-inline',escape:'false'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'가압류: ',class:'txt-dot dis-inline bold',escape:'false'}},{T:1,N:'w2:textbox',A:{class:'dis-inline',escape:'false',id:'',label:'&nbsp;가압류된 사업자일경우 지급내역이 가압류로 됨 <br/>',style:''}}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'결정: ',class:'txt-dot dis-inline bold',escape:'false'}},{T:1,N:'w2:textbox',A:{style:'width: 430px;',id:'',label:'&nbsp;지급내역을 자금팀에서 지불처리 할 것으로 결정한 상태 ',class:'dis-inline',escape:'false'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'확정: ',class:'txt-dot dis-inline bold',escape:'false'}},{T:1,N:'w2:textbox',A:{class:'dis-inline',escape:'false',id:'',label:'&nbsp;결정된 지급내역을 해당 거래처로 통장출금한 상태<br/>',style:''}}]},{T:1,N:'xf:group',A:{id:'',style:''},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'역전표: ',class:'txt-dot dis-inline bold',escape:'false'}},{T:1,N:'w2:textbox',A:{class:'dis-inline',escape:'false',id:'',label:'&nbsp;회계마감이 지난 전표내역을 취소 할경우,지급내역의 상태가 대기,준비이면 역전표상태로 변경된다.',style:''}}]}]}]}]}]}]}]}]})