/*amd /ui/ac/co/rsltsmgnt/rsltsanl/co_404_01_28_02p.xml 24539 39fecbae97696757db71c68b1150a1b25528ddb088ee7f3020dc09b94d28fbcc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctCd',name:'계정',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'사업영역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctNm',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_detail',saveRemovedData:'true','ev:ondataload':'scwin.ds_detail_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCdNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCdNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'corRegNo',name:'법인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfyyThisAmt',name:'누계전기',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bfyyThisUnAmt',name:'미확정누계전기',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisRsltsAmt',name:'누계실적',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisUnRsltsAmt',name:'미확정누계당월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisDiffer',name:'누계증감',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisUnDiffer',name:'미확정누계증감',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumDiffer',name:'계',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_detail',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveBizDomPlanSumDifferDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_detail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_detail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 사업영역별계획대비실적상세4 (co_404_01_28_02p) - 전기대비증감 - 누계
// 작성자 : 송정희
// 최초작성일자 : 2026-11-26
//-------------------------------------------------------------------------

scwin.p_closeYm = "";
scwin.p_acctDeptCd = "";
scwin.p_acctDeptNm = "";
scwin.p_mgntAcctCd = "";
scwin.p_mgntAcctNm = "";
scwin.p_coCd = "";
scwin.p_coNm = "";
scwin.p_bizDomCd = "";
scwin.p_bizDomNm = "";
scwin.data = {};
scwin.opts = {};
scwin.url = {};
scwin.vLoginCoCd;
scwin.vLoginCoClsCd;
scwin.vUserHomeClsCd;
scwin.isSubCompany;
scwin.privAdmin = "F"; // 로그인 정보에서 권한을 받아와야 함 (가우스 login.getPrivAdmin())

scwin.onpageload = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
  scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드 
  scwin.isSubCompany = false;
  scwin.params = $c.data.getParameter($p);
  scwin.p_closeYm = scwin.params.closeYm;
  scwin.p_acctDeptCd = scwin.params.acctDeptCd;
  scwin.p_acctDeptNm = scwin.params.acctDeptNm;
  scwin.p_mgntAcctCd = scwin.params.acctCd;
  scwin.p_mgntAcctNm = scwin.params.acctNm;
  scwin.p_coCd = scwin.params.coCd;
  scwin.p_coNm = scwin.params.coNm;
  scwin.p_bizDomCd = scwin.params.bizDomCd;
  scwin.p_bizDomNm = scwin.params.bizDomNm;
  ed_closeYm.setValue(scwin.p_closeYm);
  dma_search.set("closeYm", scwin.p_closeYm);
  dma_search.set("acctDeptCd", scwin.p_acctDeptCd);
  dma_search.set("mgntAcctCd", scwin.p_mgntAcctCd);
  dma_search.set("bizDomCd", scwin.p_bizDomCd);
  dma_search.set("coCd", scwin.p_coCd || scwin.vLoginCoCd); // 없으면 로그인 법인으로 세팅

  $c.gus.cfDisableObjects($p, [ed_closeYm, udc_acctCd, udc_deptCd]);
  $p.setTimeout(async function () {
    await scwin.f_setCompanyInfo();
    await $c.sbm.execute($p, sbm_detail);
    scwin.f_openPopUp('1', 'T');
    scwin.f_openPopUp('2', 'T');
  }, 100);
};
scwin.ondataload = function () {};
scwin.f_openPopUp = function (flag, check) {
  switch (flag) {
    case '1':
      // 계정조회
      var temp = ",,";
      udc_acctCd.cfCommonPopUp(scwin.udc_acctCd_callBackFunc, scwin.p_mgntAcctCd, "", check, null, null, null, null, temp, null, null, null, null, null, null, null, null, null, null);
      break;
    case '2':
      // 부서
      var temp = ",,";
      udc_deptCd.cfCommonPopUp(scwin.udc_deptCd_callBackFunc, scwin.p_acctDeptCd, "", check, null, null, null, null, temp, null, null, null, null, null, null, null, null, null, null);
      break;
  }
};
scwin.udc_acctCd_callBackFunc = function (rtnList) {
  console.log("▲ udc_acctCd_callBackFunc (계정 조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  dma_search.set("mgntAcctCd", rtnList[0]);
  dma_search.set("mgntAcctNm", rtnList[1]);
};
scwin.udc_deptCd_callBackFunc = function (rtnList) {
  console.log("▲ udc_deptCd_callBackFunc (부서 조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  dma_search.set("acctDeptCd", rtnList[0]);
  dma_search.set("acctDeptNm", rtnList[1]);
};
scwin.f_Excel = function () {
  const options = {
    fileName: "누계전기대비증감.xlsx",
    sheetName: "누계전기대비증감"
  };
  $c.data.downloadGridViewExcel($p, gr_detail, options);
};

//자회사 회계 시스템 추가에 따른 설정 
scwin.f_setCompanyInfo = async function () {
  //사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  await scwin.f_PopUpCompanyInfo('T');
  if (ibx_txtCoClsCd.getValue() > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
};

// 회사 입력 팝업 
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  await udc_comCode.cfCommonPopUp(scwin.udc_comCode_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_comCode_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명
    ibx_txtCoClsCd.setValue(rtnList[1]); // 회사구분 
  } else {
    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명
    ibx_txtCoClsCd.setValue("");
  }
};
//-------------------------------------------------------------------------
// 팝업 호출 (사업자별 누계팝업)
//-------------------------------------------------------------------------
scwin.btn_detail_onclick = async function () {
  let closeYm = ed_closeYm.getValue();
  let acctDeptCd = scwin.p_acctDeptCd;
  let acctCd = scwin.p_mgntAcctCd;
  let acctDeptNm = dma_search.get("acctDeptNm");
  let acctNm = dma_search.get("mgntAcctNm");
  let bizDomCd = scwin.p_bizDomCd; // 파라미터에서 받아온 값 그대로 사용
  let coCd = dma_search.get("coCd");
  let coNm = ed_coNm.getValue();
  let popData = {
    "closeYm": closeYm,
    "acctDeptCd": acctDeptCd,
    "acctCd": acctCd,
    "bizDomCd": bizDomCd,
    "coCd": coCd,
    "coNm": coNm,
    "acctNm": acctNm,
    "acctDeptNm": acctDeptNm
  };
  const options = {
    id: "co_404_01_28_03p",
    type: "popup",
    modal: true,
    popupName: "사업자별 누계",
    width: 1460,
    type: "browserPopup",
    height: 730
  };
  await $c.win.openPopup($p, "/ui/ac/co/rsltsmgnt/rsltsanl/co_404_01_28_03p.xml", options, popData);
};

//-------------------------------------------------------------------------
// 화면 닫기
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function () {
  $c.win.closePopup($p);
};
scwin.udc_comCode_onblurCodeEvent = async function (e) {
  ed_coNm.setValue("");
  await scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_comCode_onclickEvent = async function (e) {
  await scwin.f_PopUpCompanyInfo('F');
};
scwin.ds_detail_ondataload = function () {
  let rowCount = ds_detail.getRowCount();
  totalRows.setValue(rowCount);
  if (scwin.p_mgntAcctCd == "4101010") {
    gr_detail.setColumnVisible("bfyyThisUnAmt", true);
    gr_detail.setColumnVisible("thisUnRsltsAmt", true);
    gr_detail.setColumnVisible("thisUnDiffer", true);
    gr_detail.setColumnVisible("sumDiffer", true);
    gr_detail.setHeaderValue("h_thisDiffer", "매출누계증감");
  } else {
    gr_detail.setColumnVisible("bfyyThisUnAmt", false);
    gr_detail.setColumnVisible("thisUnRsltsAmt", false);
    gr_detail.setColumnVisible("thisUnDiffer", false);
    gr_detail.setColumnVisible("sumDiffer", false);
    gr_detail.setHeaderValue("h_thisDiffer", "누계증감");
  }
};
/**
 * 그리드 팝업호출
 */
scwin.f_GridPop = async function (colId, row, data, close) {
  scwin.f_commCdPopupRow = row;
  let sqlId = "";
  //관리계정
  if (colId == "mgntAcctCd") {
    scwin.txt_costClsCd = "04";
    ds_expn.setCellData(row, "mgntAcctCd", "");
    ds_expn.setCellData(row, "mgntAcctNm", "");
    let param = "T," + ",,,," + scwin.txt_costClsCd;
    udc_comCode_Grid.setSelectId("retrieveAcctCdInfo");
    //조회조건 9번째, 전체검색허용여부 15번째
    await udc_comCode_Grid.cfCommonPopUp(scwin.udc_comCode_Grid_mgntAcctCd_callBackFunc, data, "", close, null, null, null, null, param, null, null, null, null, null, "F", null);
  }
};

/**
 * 계정코드(그리드팝업)
 */
scwin.udc_comCode_Grid_mgntAcctCd_callBackFunc = function (ret) {
  // let rowIdx = gr_expn.getFocusedRowIndex();
  let rowIdx = scwin.f_commCdPopupRow;
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ds_expn.setCellData(rowIdx, "mgntAcctCd", ret[0]); //계정코드
    ds_expn.setCellData(rowIdx, "mgntAcctNm", ret[1]); //계정명
  } else {
    ds_expn.setCellData(rowIdx, "mgntAcctCd", ""); //계정코드
    ds_expn.setCellData(rowIdx, "mgntAcctNm", ""); //계정명
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{btnId:'btn_company',code:'coCd',codeId:'ed_coCd','ev:onblurCodeEvent':'scwin.udc_comCode_onblurCodeEvent','ev:onclickEvent':'scwin.udc_comCode_onclickEvent',id:'udc_comCode',mandatoryCode:'true',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'data',popupID:'',popupTitle:'',refDataCollection:'dma_search',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validTitle:'회사코드'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_acctDeptCdSt',code:'acctDeptCd',codeId:'ed_acctDeptCdSt','ev:onblurCodeEvent':'scwin.ed_acctDeptCdSt_onblurCodeEvent','ev:onclickEvent':'scwin.ed_acctDeptCdSt_onclickEvent',id:'udc_deptCd',maxlengthCode:'5',maxlengthName:'50',name:'acctDeptNm',nameId:'ed_acctDeptNmSt',objTypeCode:'data',objTypeName:'data',popupID:'retrieveAcctDeptCdInfoPopup',refDataCollection:'dma_search',selectID:'retrieveAcctDeptCdInfo',skipOnBlurCodeValueEmpty:'N',style:'',validTitle:'부서From'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_closeYm',style:'',disabled:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_acctCdSt',code:'mgntAcctCd',codeId:'ed_acctCdSt','ev:onblurCodeEvent':'scwin.udc_acctCdSt_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctCdSt_onclickEvent',id:'udc_acctCd',maxlengthCode:'7',maxlengthName:'50',name:'mgntAcctNm',nameId:'ed_acctNmSt',objTypeCode:'data',objTypeName:'data',popupID:'retrieveAcctCdInfopopup',refDataCollection:'dma_search',selectID:'retrieveAcctCdInfo',skipOnBlurCodeValueEmpty:'N',style:'',validTitle:'계정From'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''}}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'누계전기대비증감 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_detail',gridUpYn:'N',gridDownUserAuth:'X',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_detail',focusMode:'row',id:'gr_detail',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'116',inputType:'text',style:'',id:'column80',value:'계정코드',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column77',value:'계정명',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column74',value:'귀속부서',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column71',value:'귀속부서명',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column68',value:'법인번호',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column65',value:'사업자번호',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column62',value:'거래처번호',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column59',value:'거래처명',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column56',value:'누계전기',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column53',value:'미확정누계전기',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column47',value:'누계실적',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column50',value:'미확정누계당월',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'h_thisDiffer',value:'매출누계증감',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column83',value:'미확정누계증감',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column86',value:'계',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'116',inputType:'text',style:'',id:'mgntAcctCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:';text-align:left;',id:'mgntAcctCdNm',value:'',displayMode:'label',readOnly:'true',dataType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:';text-align:left;',id:'acctDeptCdNm',value:'',displayMode:'label',readOnly:'true',dataType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'corRegNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:';text-align:left;',id:'clntNm',value:'',displayMode:'label',readOnly:'true',dataType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'bfyyThisAmt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'bfyyThisUnAmt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'thisRsltsAmt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'thisUnRsltsAmt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'thisDiffer',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'thisUnDiffer',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'sumDiffer',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{width:'116',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'expression',style:'',id:'column58',value:'',displayMode:'label',expression:'sum(\'bfyyThisAmt\')',displayFormat:'#,##0',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'140',inputType:'expression',style:'',id:'column55',value:'',displayMode:'label',expression:'sum(\'bfyyThisUnAmt\')',displayFormat:'#,##0',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'140',inputType:'expression',style:'',id:'column49',value:'',displayMode:'label',expression:'sum(\'thisRsltsAmt\')',displayFormat:'#,##0',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'140',inputType:'expression',style:'',id:'column52',value:'',displayMode:'label',expression:'sum(\'thisUnRsltsAmt\')',displayFormat:'#,##0',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'140',inputType:'expression',style:'',id:'column91',value:'',displayMode:'label',expression:'sum(\'thisDiffer\')',displayFormat:'#,##0',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'140',inputType:'expression',style:'',id:'column85',value:'',displayMode:'label',expression:'sum(\'thisUnDiffer\')',displayFormat:'#,##0',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'140',inputType:'expression',style:'',id:'column88',value:'',displayMode:'label',expression:'sum(\'sumDiffer\')',displayFormat:'#,##0',textAlign:'right',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'group2',style:'display:none;'},E:[{T:1,N:'xf:input',A:{id:'ibx_hid_coClsCd',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'ibx_txtCoClsCd',style:'width:144px; height:21px; '}}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_detail',style:'',type:'button','ev:onclick':'scwin.btn_detail_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사업자별집계'}]}]}]}]}]}]}]})