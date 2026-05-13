/*amd /ui/ac/fm/paymgnt/notepay/fm_304_05_01b.xml 25043 deb8745502105c754d39e4f6489a9dfaa75a37ec59314b4110d0d9a4d6f5a916 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payCond',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'SEQ',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'payAcctDeptCd',name:'지급부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAcctDeptNm',name:'지급부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급화폐',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySeq',name:'name9',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'payPayAcctDeptCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDraftDdCntCd',name:'name12',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payPayCrcCd',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryCntn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntLupCond',name:'거래처 번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrievePayDraft',action:'/ac.fm.paymgnt.notepay.RetrievePayDraftListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_payCond","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_payCond","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrievePayDraft_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_savePayDraft',action:'/ac.fm.paymgnt.notepay.SavePayDraftListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_payCond","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_savePayDraft_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수 선언
//-------------------------------------------------------------------------
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.txtCoClsCd = "";
scwin.hid_coCd = "";
scwin.pos_clnt = 0;
scwin.pos_groupCode = 0;
scwin.isSubCompany = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ006",
    compID: "gr_payCond:payPayCrcCd,gr_payCond:payCrcCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  scwin.f_setCompanyInfo();
  udc_gr_acctDeptCdInfo6.hide();
  udc_gr_clntCrnList.hide();
};

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
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_companyInfo.cfCommonPopUp(scwin.udc_companyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo("F");
};
scwin.udc_companyInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    ed_coCd.options.hidVal = rtnList[0];
    scwin.txtCoClsCd = rtnList[1];
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
  if (scwin.isChecked == true) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
  scwin.isChecked = false;
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  }
};
scwin.udc_companyInfo_onviewchangeNameEvent = function (info) {
  ed_coCd.setValue("");
  if (ed_coNm.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  }
};

//-------------------------------------------------------------------------
// 지급조건 조회
//-------------------------------------------------------------------------

scwin.f_RetrievePayDraft = async function () {
  qryCntn = ed_qryCntn.getValue().trimAll();
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return;
  if (ed_reqStartDt.getValue().trim() != "" && ed_reqEndDt.getValue().trim() != "") {
    if (ed_reqStartDt.getValue().trim() > ed_reqEndDt.getValue().trim()) {
      await $c.win.alert($p, MSG_CM_ERR_039);
      ed_reqStartDt.focus();
      return false;
    }
  }
  $c.sbm.execute($p, sbm_RetrievePayDraft);
};

// 행추가
//-------------------------------------------------------------------------

scwin.f_AddRow = function () {
  let rowIndex = ds_payCond.getRowCount();
  ds_payCond.insertRow(rowIndex);
  if (rowIndex > 0) {
    ds_payCond.setCellData(rowIndex, "seq", "0");
    ds_payCond.setCellData(rowIndex, "draftDdCntCd", "0");
    ds_payCond.setCellData(rowIndex, "paySeq", "0");
  }
  gr_payCond.setCellReadOnly(rowIndex, "clntNo", false);
};

//-------------------------------------------------------------------------
// 행 취소
//-------------------------------------------------------------------------
// scwin.f_UndoAll = function() {
//     $c.data.undoAll(ds_payCond);
// };

//-------------------------------------------------------------------------
// 행 삭제
//-------------------------------------------------------------------------
// scwin.f_DeleteRow = function() {
//     var rowIndex = ds_payCond.getRowPosition();
//     if (rowIndex >= 0) {
//         ds_payCond.deleteRow(rowIndex);
//     }
// };

//-------------------------------------------------------------------------
// 귀속부서팝업
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다. 
  if (ds_payCond.getModifiedIndex().length > 0 == false) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }

  // 저장확인 
  if ((await $c.win.confirm($p, "저장하시겠습니까?")) == true) {
    $c.sbm.execute($p, sbm_savePayDraft);
  }
};

//-------------------------------------------------------------------------
// 귀속부서팝업
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName) {
  // 선언부
  let rtnList; // 공통POP-UP -> 요청화면 
  let param = "";
  switch (disGubun) {
    case '1':
      // 귀속부서 팝업
      pCode = ds_payCond.getCellData(ds_payCond.getRowPosition(), "payAcctDeptCd");
      pParam = ds_payCond.getCellData(ds_payCond.getRowPosition(), "adptDt");
      param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ","; //자회사 회계시스템 추가사항

      udc_gr_acctDeptCdInfo6.cfCommonPopUp(scwin.udc_gr_acctDeptCdInfo6_callBackFunc, pCode, '', 'F', null, null, null, null, param, null, null, null, null); // 귀속부서				
      ds_payCond.setCellData(ds_payCond.getRowPosition(), "payAcctDeptCd", "");
      ds_payCond.setCellData(ds_payCond.getRowPosition(), "payAcctDeptNm", "");
      // $c.gus.cfSetGridReturnValue(rtnList, ds_payCond, ds_payCond.getRowPosition(),"payAcctDeptCd", "payAcctDeptNm");	
      break;
    case '2':
      // 거래처 팝업
      pCode = ds_payCond.getCellData(ds_payCond.getRowPosition(), "clntNo");
      param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ","; //자회사 회계시스템 추가사항
      udc_gr_clntCrnList.cfCommonPopUp(scwin.udc_gr_clntCrnList_callBackFunc, pCode, '', 'F', null, null, null, null, param, null, null, null, null); // 거래처		
      ds_payCond.setCellData(ds_payCond.getRowPosition(), "clntNo", "");
      ds_payCond.setCellData(ds_payCond.getRowPosition(), "clntNm", "");
      ds_payCond.setCellData(ds_payCond.getRowPosition(), "crn", "");
      // $c.gus.cfSetGridReturnValue(rtnList, ds_payCond, ds_payCond.getRowPosition(),"clntNo", "clntNm");	
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_gr_acctDeptCdInfo6_callBackFunc = function (rtnList) {
  const idx = gr_payCond.getFocusedRowIndex();
  if (rtnList[0] == 'N/A') {
    ds_payCond.setCellData(idx, "payAcctDeptCd", "");
    ds_payCond.setCellData(idx, "payAcctDeptNm", "");
  } else {
    ds_payCond.setCellData(idx, "payAcctDeptCd", rtnList[0]);
    ds_payCond.setCellData(idx, "payAcctDeptNm", rtnList[1]);
  }
};
scwin.udc_gr_clntCrnList_callBackFunc = function (rtnList) {
  const idx = gr_payCond.getFocusedRowIndex();
  if (rtnList[0] == 'N/A') {
    ds_payCond.setCellData(idx, "clntNo", "");
    ds_payCond.setCellData(idx, "clntNm", "");
    ds_payCond.setCellData(idx, "crn", "");
  } else {
    ds_payCond.setCellData(idx, "clntNo", rtnList[0]);
    ds_payCond.setCellData(idx, "clntNm", rtnList[1]);
    ds_payCond.setCellData(idx, "crn", rtnList[2]);
  }
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  let cntRow = ds_payCond.getRowCount();
  if (cntRow <= 0) {
    $c.win.alert($p, "조회내역이 존재하지않습니다.");
    return;
  }
  let fileName = '거래처별어음일수';
  let sheetTitle = "거래처별어음일수";
  await $c.data.downloadGridViewExcel($p, gr_payCond, {
    fileName: fileName + ".xlsx",
    sheetName: sheetTitle
  });
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
scwin.sbm_RetrievePayDraft_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_payCond.getRowCount());
  scwin.gridRowFm();
};
scwin.gridRowFm = function () {
  for (let i = 0; i < ds_payCond.getRowCount(); i++) {
    let payVal = ds_payCond.getCellData(i, "payDraftDdCntCd");
    let draftVal = ds_payCond.getCellData(i, "draftDdCntCd");
    if (payVal !== draftVal) {
      var styleInfo = {
        styleName: "background-color",
        styleValue: "#6495ed",
        type: "row",
        target: "all",
        rowIndex: i
      };
      gr_payCond.setStyleAll(styleInfo);
    } else {
      gr_payCond.setRowBackgroundColor(i, "");
    }
  }
};
scwin.gr_payCond_ontextimageclick = function (rowIndex, columnIndex) {
  let data = ds_payCond.getCellData(rowIndex, columnIndex);
  if (columnIndex == 4) {
    scwin.f_openCommonPopUp('1', data, '');
  }
  if (columnIndex == 1) {
    scwin.f_openCommonPopUp('2', data, '');
  }
};
scwin.lc_clntLupCond_onviewchange = function (info) {
  if (info.newValue == "0") {
    ed_qryCntn.setMaxLength(70);
  } else if (info.newValue == "1") {
    ed_qryCntn.setMaxLength(6);
  } else {
    ed_qryCntn.setMaxLength(14);
  }
};
scwin.sbm_savePayDraft_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_RetrievePayDraft();
};
scwin.gr_payCond_onviewchange = function (info) {
  if (info.colId == 'draftDdCntCd') {
    scwin.gridRowFm();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm',style:'',code:'coCd',name:'coNm',refDataCollection:'dma_search',btnId:'btn_company',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',validExpCode:'회사코드:yes',maxlengthName:'65',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회조건',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_group2',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_clntLupCond',class:'form-control w150',direction:'auto',ref:'data:dma_search.clntLupCond','ev:onviewchange':'scwin.lc_clntLupCond_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사업자번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'xf:input',A:{style:'',id:'ed_qryCntn',class:'form-control w150',ref:'data:dma_search.qryCntn'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'어음일수 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'sch-box',id:'grp_group3',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control num',id:'ed_reqStartDt',style:'',maxlength:'3',mandatory:'true',ref:'data:dma_search.qryStDt',allowChar:'0-9'}},{T:1,N:'w2:span',A:{label:'-',style:'',id:'spa_span1'}},{T:1,N:'xf:input',A:{class:'form-control num',id:'ed_reqEndDt',style:'',maxlength:'3',mandatory:'true',objType:'data',ref:'data:dma_search.qryEndDt',allowChar:'0-9'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_RetrievePayDraft'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처별 어음지급조건',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_payCond',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_payCond',id:'gr_payCond',style:'',visibleRowNumFix:'true',fixedColumn:'12',autoFit:'allColumn','ev:oncellclick':'scwin.gr_payCond_oncellclick',setCellInputTypeCustom:'true','ev:ontextimageclick':'scwin.gr_payCond_ontextimageclick','ev:onviewchange':'scwin.gr_payCond_onviewchange',editModeEvent:'onclick',visibleRowNum:'15',rowStatusWidth:'15',rowStatusVisible:'true',fixedColumnNoMove:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'사업자번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'거래처번호',width:'100',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'거래처명',width:'300',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'어음정보',width:'500',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'지급정보',width:'340',colSpan:'4',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column26',value:'지급부서코드',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'계약부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column24',value:'어음일수',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column23',value:'지급화폐',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'지급부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column35',value:'어음일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column32',value:'지급화폐',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',style:'',value:'',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',maxLength:'6'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'300',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAcctDeptCd',inputType:'textImage',style:'',value:'',width:'100',readOnly:'false',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',maxLength:'5',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAcctDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'draftDdCntCd',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',readOnly:'false',maxLength:'3',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payCrcCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'paySeq',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payPayAcctDeptCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'payDraftDdCntCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'payPayCrcCd',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',btnCancelYn:'Y',gridID:'gr_payCond',addFunction:'scwin.f_AddRow',id:'udc_grid',rowAddFunction:'scwin.f_AddRow',btnRowDelYn:'N',rowAddUserAuth:'C',cancelUserAuth:'D'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_company',codeId:'ed_payAcctDeptCd','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent',id:'udc_gr_acctDeptCdInfo6',nameId:'ed_payAcctDeptNm',onloadCallbackFunc:'',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',popupID:'popupMgntClntNo',popupTitle:'회사조회,회사코드,법인명',selectID:'retrieveAcctDeptCdInfo6',style:'visibility: hidden;'}},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_company',codeId:'ed_payAcctDeptCd','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent',id:'udc_gr_clntCrnList',nameId:'ed_payAcctDeptNm',onloadCallbackFunc:'',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',popupID:'popupMgntClntNo',popupTitle:'회사조회,회사코드,법인명',selectID:'retrieveClntCrnList',style:'visibility: hidden;'}}]}]}]}]}]})