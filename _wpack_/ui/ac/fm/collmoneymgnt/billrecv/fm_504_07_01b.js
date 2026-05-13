/*amd /ui/ac/fm/collmoneymgnt/billrecv/fm_504_07_01b.xml 30210 2327b026e768bc7f01b177df4a2b3a32b7470bb10d701745e59d67afda2c1a6f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchBillRecvDue'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromDate',name:'만기예정일자 시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDate',name:'만기예정일자 종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billRecvStsCd',name:'받을어음상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billRecvAcctCd',name:'받을어음계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billRecvNo',name:'어음번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctYear',name:'귀속부서기준년도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'allDept',name:'하위부서포함여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billRecvDue',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dueDt',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvNo',name:'어음번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtAmt',name:'총어음금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcAmt',name:'어음금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cmis',name:'수수료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trustBankbookNo',name:'수탁통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidTrustBankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustBankbookNm',name:'수탁통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvStsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procSlipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procDt',name:'처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recDt',name:'수취일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtDt',name:'발행일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col18',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtBankNm',name:'발행은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'obankCheckYn',name:'타수여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgRsn',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAcctDeptCd',name:'상위귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAcctDeptNm',name:'상위귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchgBfBillRecvNo',name:'교환전받을어음번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'어음관리번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchBillRecvDue',action:'/ac.fm.collmoneymgnt.billrecv.RetrieveBillReceivableTotalCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchBillRecvDue","key":"IN_DS1"},{"id":"ds_billRecvDue","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_billRecvDue","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchBillRecvDue_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.sDate = WebSquare.date.getCurrentServerDate();
scwin.strFromDate = scwin.sDate.substring(0, 6) + "01";
scwin.strToDate = scwin.sDate;
scwin.login = $c.data.getMemInfo($p);
//-------------------------------------------------------------------------
// 화면 전역변수 선언
//-------------------------------------------------------------------------
scwin.wrkNo = ""; // 작업구분코드
scwin.fromDate = ""; // 작업날짜
scwin.toDate = "";
//-------------------------------------------------------------------------
// 로그인 정보 전역 변수를 선언
//-------------------------------------------------------------------------
scwin.acctDeptCd = scwin.login.acctDeptCd;
scwin.acctDeptNm = scwin.login.acctDeptNm;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FM014",
    compID: "gr_billRecvDue:billRecvAcctCd,acb_billRecvAcctCd"
  }, {
    grpCd: "FM015",
    compID: "gr_billRecvDue:billRecvStsCd"
  }, {
    grpCd: "FM015",
    compID: "acb_billRecvStsCd",
    opt: {
      'range': '3,10'
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  ica_AcctYear.setValue(scwin.sDate.substring(0, 4));
  ed_FromDate.setValue(scwin.strFromDate);
  ed_ToDate.setValue(scwin.strToDate);
  ed_AcctDeptCd.setValue(scwin.acctDeptCd);
  ed_AcctDeptNm.setValue(scwin.acctDeptNm);
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->부서
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (flag, pCode, pName, pClose, pAllSearch) {
  switch (flag) {
    // 조회조건용 수금부서 PopUp 호출(물류 귀속부서만 POPUP에 포함)
    case 1:
      udc_dept.cfCommonPopUp(scwin.udc_dept_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null);
      break;
    case 2:
      udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null);
      break;
  }
};

//-------------------------------------------------------------------------
// function name : f_chkOpenPopUp
// function desc : 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
// function Parameter : inObj : 코드값, pairObj : 코드명, isCode : 코드구분(코드, 명칭)
//-------------------------------------------------------------------------
scwin.f_chkOpenPopUp = function (inObj, pairObj, flag, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  pairObj.setValue("");

  // 검색어 세팅
  let pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(flag, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(flag, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 귀속부서 관련 함수
//-------------------------------------------------------------------------
scwin.udc_dept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_AcctDeptCd.getValue(), ed_AcctDeptNm.getValue(), 'F', 'F');
};
scwin.udc_dept_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_AcctDeptCd.setValue(rtnList[0]);
    ed_AcctDeptNm.setValue(rtnList[1]);
    ed_AcctDeptCd.options.hidVal = rtnList[0];
    ed_AcctDeptNm.options.hidVal = rtnList[1];
  } else {
    ed_AcctDeptCd.setValue("");
    ed_AcctDeptNm.setValue("");
    ed_AcctDeptCd.options.hidVal = "";
    ed_AcctDeptNm.options.hidVal = "";
  }
};
scwin.udc_dept_onblurCodeEvent = function (e) {
  if (ed_AcctDeptCd.getValue() != "") {
    scwin.f_chkOpenPopUp(ed_AcctDeptCd, ed_AcctDeptNm, 1);
  } else {
    ed_AcctDeptNm.setValue("");
  }
};
scwin.udc_dept_onblurNameEvent = function (e) {
  if (ed_AcctDeptNm.getValue() != "") {
    scwin.f_chkOpenPopUp(ed_AcctDeptNm, ed_AcctDeptCd, 1, false);
  } else {
    ed_AcctDeptCd.setValue("");
  }
};

//-------------------------------------------------------------------------
// 거래처처 관련 함수
//-------------------------------------------------------------------------
scwin.udc_clntList_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_clntList_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntNo.setValue(rtnList[0]);
    ed_clntNm.setValue(rtnList[1]);
    ed_clntNo.options.hidVal = rtnList[0];
    ed_clntNm.options.hidVal = rtnList[1];
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
    ed_clntNo.options.hidVal = "";
    ed_clntNm.options.hidVal = "";
  }
};
scwin.udc_clntList_onblurCodeEvent = function (e) {
  if (ed_clntNo.getValue() !== "") {
    scwin.f_chkOpenPopUp(ed_clntNo, ed_clntNm, 2);
  } else {
    ed_clntNm.setValue("");
  }
};
scwin.udc_clntList_onblurNameEvent = function (e) {
  if (ed_clntNm.getValue() !== "") {
    scwin.f_chkOpenPopUp(ed_clntNm, ed_clntNo, 2, false);
  } else {
    ed_clntNo.setValue("");
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ed_FromDate.getValue() > ed_ToDate.getValue()) {
    await $c.win.alert($p, "조회 만기일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ed_FromDate.focus();
    return;
  }
  if (!(await $c.gus.cfValidate($p, [ed_AcctDeptCd, ica_AcctYear, ed_FromDate, ed_ToDate]))) return;
  if (cbx_allDept.getValue() == "1") {
    dma_searchBillRecvDue.set("allDept", "1");
  } else {
    dma_searchBillRecvDue.set("allDept", "0");
  }
  $c.sbm.execute($p, sbm_searchBillRecvDue);
};
scwin.sbm_searchBillRecvDue_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_billRecvDue.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
  }
  totalRows.setValue(rowCnt);
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_billRecvDue.getRowCount() <= 0) {
    await $c.win.alert($p, "받을어음총괄조회내역이 존재하지않습니다.");
    return;
  }
  let fileName = "받을어음총괄조회";
  $c.data.downloadGridViewExcel($p, gr_billRecvDue, {
    fileName: fileName + ".xlsx",
    sheetName: fileName
  });
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------

//init btn
scwin.bnt_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, searchBillRecvDue);
};

//전표번호
scwin.gr_billRecvDue_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "procSlipNo") {
    var slipNo = ds_billRecvDue.getCellData(rowIndex, "procSlipNo");
    if (slipNo != "") {
      let rtnList = await $c.gus.cfShowSlipInfo($p, slipNo);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'searchBillRecvDue',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'5',objTypeCode:'data',refDataCollection:'dma_searchBillRecvDue',popupID:'popupMgntClntNo',code:'acctDeptCd',validExpCode:'귀속부서:yes:maxLength=5',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_dept_onclickEvent',allowCharCode:'0-9',selectID:'retrieveAcctDeptCdInfo6',codeId:'ed_AcctDeptCd',popupTitle:'',validTitle:'귀속부서',objTypeName:'data',nameId:'ed_AcctDeptNm',style:'','ev:onblurNameEvent':'scwin.udc_dept_onblurNameEvent',id:'udc_dept','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent'}},{T:1,N:'xf:select',A:{falseValue:'0',ref:'data:dma_searchBillRecvDue.allDept',appearance:'full',style:'',id:'cbx_allDept',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp ml8',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위부서포함 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서기준년도',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:' cal',id:'ica_AcctYear',style:'',ref:'data:dma_searchBillRecvDue.acctYear',title:'귀속부서기준년도',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'만기예정일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'fromDate',refDataMap:'dma_searchBillRecvDue',style:'',id:'udc_fromToCalendar1',refEdDt:'toDate',edFromId:'ed_FromDate',edToId:'ed_ToDate',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data',objTypeFrom:'data',objTypeTo:'data',titleFrom:'만기예정시작일',validChkYn:'Y'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'mr16',id:'',label:'계정코드 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'전체',class:'',editType:'select',id:'acb_billRecvAcctCd',ref:'data:dma_searchBillRecvDue.billRecvAcctCd',search:'start',style:'width: 100px;',submenuSize:'auto',visibleRowNum:'20'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'어음번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_billRecvNo',style:'width: 230px',maxlength:'20',ref:'data:dma_searchBillRecvDue.billRecvNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'',popupTitle:'',selectID:'retrieveClntList',style:'',validTitle:'',refDataCollection:'dma_searchBillRecvDue',code:'clntNo',allowCharCode:'0-9',mandatoryCode:'false',maxlengthCode:'6',objTypeCode:'data',objTypeName:'data',id:'udc_clntList','ev:onblurCodeEvent':'scwin.udc_clntList_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clntList_onblurNameEvent','ev:onclickEvent':'scwin.udc_clntList_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'어음상태 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_billRecvStsCd',search:'start',style:'width:100px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_searchBillRecvDue.billRecvStsCd',chooseOptionValue:'-6',visibleRowNum:'20'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'bnt_init',style:'',type:'button','ev:onclick':'scwin.bnt_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcel',gridID:'gr_billRecvDue'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_billRecvDue',id:'gr_billRecvDue',style:'',visibleRowNum:'15',visibleRowNumFix:'true',columnMove:'true',dataDragSelect:'false',dataDragSelectAutoScroll:'true',readOnly:'true',columnMoveWithFooter:'true','ev:oncellclick':'scwin.gr_billRecvDue_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'만기일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'계정코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'어음번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'총어음금액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'어음금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'수수료',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'수탁통장번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'통장번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'수탁통장명',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'상태',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'전표일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'처리일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'수취일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'발행일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column55',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column52',value:'발행은행명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'타수여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column46',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column43',value:'귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column37',value:'상위귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column31',value:'상위귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column34',value:'관리사원번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column82',value:'교환전받을어음번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column79',value:'어음관리번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dueDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billRecvAcctCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billRecvNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prtAmt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cmis',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trustBankbookNo',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hidTrustBankbookNo',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trustBankbookNm',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billRecvStsCd',inputType:'select',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'color: blue;text-decoration: underline;',id:'procSlipNo',value:'',displayMode:'label',class:'underline'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'slipDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'procDt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'recDt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'prtDt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'col18',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'prtBankNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'obankCheckYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'chgRsn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'upperAcctDeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'upperAcctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'mgntEmpNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'exchgBfBillRecvNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'billRecvMgntNo',value:'',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column27',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM("prtAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM("dcAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column25',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM("cmis")'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})