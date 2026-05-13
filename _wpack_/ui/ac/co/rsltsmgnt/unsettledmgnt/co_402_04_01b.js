/*amd /ui/ac/co/rsltsmgnt/unsettledmgnt/co_402_04_01b.xml 30527 eeeb5ca612f5734e37f240111b6d0c8ef2e1eb633cc183c7e9cdffe6eebedf59 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsSellClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befMmRamt',name:'전월잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisMmDcsnAmt',name:'당월;확정금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisMmUnsettledAmt',name:'당월;미확정금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisMmRamt',name:'당월잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisMmRsltsAmt',name:'당월;반영금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구;거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약;거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineClntNm',name:'Line;거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체;거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsNm',name:'운송;화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNm',name:'장비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNm',name:'기준작업;경로번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsNm',name:'수입수출;내수구분',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.co.rsltsmgnt.unsettledmgnt.RetrieveUnsettledResultsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : co_402_04_01b
// 이름     : 미확정실적조회
// 경로     : 회계/관리회계/실적관리/미확정관리/
// 작 성 자 : 오영재
// 작 업 일 : 2025-12-22
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================

scwin.vLoginCoCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd"); // 소속 자회사  
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd"); //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 
scwin.today = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.isSubCompany = false;

//hidden
scwin.txtCoClsCd = "";
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FI019",
    compID: "rd_pchsSellClsCd"
  }];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};
scwin.sortType = "";
scwin.sortOrder = "";
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ed_srchCloseYm]);
  scwin.f_SetSrchDefault();
};
scwin.ondataload = function () {
  $c.gus.cfDisableKey($p);
  scwin.f_FieldClear();
  //gr_master.TitleHeight = 30;
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  $c.gus.cfInitHidVal($p, tbl_search);
  rd_pchsSellClsCd.setValue(1);
  ed_srchCloseYm.setValue(scwin.today);
  ed_srchCloseYm.focus();
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
  $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
};
scwin.udc_coCd_onclickEvent = function (e) {
  scwub.f_PopUpCompanyInfo('T');
};
scwin.udc_srchAcctDeptCd_onclickEvent = function (e) {
  scwin.f_deptPopUp('F');
};
scwin.btn_reset_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 엑셀 Download
//-------------------------------------------------------------------------
scwin.f_Export = function () {
  if (ds_master.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }

  //let fileName = '미확정실적_' + ed_srchCloseYm.getValue() + "_" + ed_srchAcctDeptNm.getValue() + "_" + rd_pchsSellClsCd.getValue();
  //$c.gus.cfGridToExcel(gr_master,fileName,fileName,2+8+16);

  let sheetTitle = "미확정실적_" + ed_srchCloseYm.getValue() + "_" + ed_srchAcctDeptNm.getValue() + "_" + rd_pchsSellClsCd.getText();
  ;
  let gridId = gr_master;
  let infoArr = [];
  let options = {
    fileName: sheetTitle + ".xlsx",
    // + ".xls",
    sheetName: sheetTitle
    // fileName : "총계정원장집계표(외화).xls" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
  };
  $c.data.downloadGridViewExcel($p, gridId, options, infoArr);
};
scwin.udc_coCd_cb = function (rtnList) {
  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
  }
  if (ed_coCd.getValue() > ACConstants.CO_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_coCd.setSelectId("retrieveDongbuGroupCompanyInfo");
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_cb, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret;
  ret = await $c.gus.cfValidate($p, [ed_srchCloseYm, ed_srchAcctDeptCd]);
  if (!ret) return;
  if (ed_srchAcctDeptCd.getValue() != ed_srchAcctDeptCd.options.hidVal) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["부서"]);
    ed_srchAcctDeptCd.focus();
    return;
  }

  //ds_search.UseChangeInfo = false;
  //tr_search.post();

  /*
  <w2:key id="closeYm"         name="" dataType="text"/>
  <w2:key id="acctDeptCd"      name="" dataType="text"/>
  <w2:key id="pchsSellClsCd"   name="" dataType="text"/>
  <w2:key id="coCd"            name="" dataType="text"/>
  */
  dma_search.set("closeYm", ed_srchCloseYm.getValue());
  dma_search.set("acctDeptCd", ed_srchAcctDeptCd.getValue());
  dma_search.set("pchsSellClsCd", rd_pchsSellClsCd.getValue());
  dma_search.set("coCd", ed_coCd.getValue());
  var tmpSort = gr_master.getSortableStatus();
  if (tmpSort.length > 0) {
    scwin.sortType = tmpSort[0].colID;
    scwin.sortOrder = tmpSort[0].sortOrder;
  } else {
    scwin.sortType = "";
    scwin.sortOrder = "";
  }
  $c.sbm.execute($p, sbm_search);
};
scwin.sbm_search_submitdone = function (e) {
  //cfHideDSWaitMsg(gr_master);
  //cfShowTotalRows(totalRows, rowCnt);
  ed_totalRows.setValue(ds_master.getRowCount());
  if (ds_master.getRowCount() == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
  } else {
    if (scwin.sortType != "") {
      var sortType = scwin.sortOrder == -1 ? 1 : 0; //1 내림차순 0 오름차순
      ds_master.sort(scwin.sortType, sortType);
    } else {
      ds_master.sort('acctDeptNm', 0);
    }
    gr_master.focus();
  }
};
scwin.sbm_search_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.udc_srchAcctDeptCd_onblurCodeEvent = function (e) {
  if (scwin.f_IsPopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm)) scwin.f_deptPopUp('T', 'F');
};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = function (inObj, ...pairObjs) {
  let inValue = $c.gus.cfGetValue($p, inObj);
  if (!inObj.options) inObj.options = {};
  let hidValue = inObj.options.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.options.hidVal = "";
    for (let i = 0; i < pairObjs.length; i++) {
      $c.gus.cfSetValue($p, pairObjs[i], "");
    }
    return false;
  }
  if (inValue == hidValue) return false;
  return true;
};

//-------------------------------------------------------------------------
// 부서코드팝업
//-------------------------------------------------------------------------
scwin.f_deptPopUp = function (pWinCloseTF, pAllSearchTF) {
  let rtnList = "";
  pWinCloseTF = pWinCloseTF ? pWinCloseTF : 'F';
  //<-- <수정_070105_신종민> 귀속변경에 따른 병행처리 수정 
  if (ed_srchCloseYm.getValue().substring(0, 4).trim() == '2006') {
    rtnList = scwin.f_PopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm, 'retrieveAcctDeptCdInfoBef', null, '410', pWinCloseTF, pAllSearchTF);
  } else {
    let pWhere = ",,,,,,,,," + ed_coCd.getValue();
    rtnList = scwin.f_PopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm, 'retrieveAcctDeptCdInfo', pWhere, '410', pWinCloseTF, pAllSearchTF);
  }
  //-->
};
scwin.udc_srchAcctDeptCd_cb = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_srchAcctDeptCd.setValue(rtnList[0]);
    ed_srchAcctDeptCd.options.hidVal = rtnList[0];
    ed_srchAcctDeptNm.setValue(rtnList[1]);
  } else {
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptCd.options.hidVal = "";
    ed_srchAcctDeptNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_PopUp = function (cdObj, nmObj, sQueryID, sWhere, sWidth, pWinCloseTF, pAllSearchTF) {
  udc_srchAcctDeptCd.setSelectId(sQueryID);
  udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_cb, cdObj.getValue(), "", pWinCloseTF, null, null, null, null, sWhere, null, null, null, null, null, pAllSearchTF);
};
scwin.udc_coCd_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 15%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 15%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{class:'col8',popupID:'',style:'',codeId:'ed_coCd',nameId:'ed_coNm',id:'udc_coCd',mandatoryCode:'true',objTypeCode:'data',objTypeName:'data',btnId:'btn_company','ev:onclickEvent':'scwin.udc_coCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'마감년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ed_srchCloseYm',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM',title:'예산년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'col8',popupID:'',style:'',codeId:'ed_srchAcctDeptCd',id:'udc_srchAcctDeptCd',nameId:'ed_srchAcctDeptNm','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_srchAcctDeptCd_onblurCodeEvent',mandatoryCode:'true',validTitle:'부서',allowCharCode:'0-9',maxlengthCode:'5',skipOnBlurCodeValueEmpty:'N',objTypeCode:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_pchsSellClsCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'xf:value'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'미확정실적내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_Export',gridUpYn:'N',gridDownYn:'Y',templateYn:'N',gridID:'gr_master',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'cell',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'12',visibleRowNumFix:'true',rowStatusVisible:'true',readOnly:'true',fixedColumn:'7',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'귀속부서',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'120',value:'거래처',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'110',value:'전월잔액',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'110',value:'당월<br/>확정금액',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'당월<br/>미확정금액',width:'110',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'당월잔액',width:'110',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'당월<br/>반영금액',width:'110',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'계정코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'계정명',width:'120'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column43',value:'모선',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column41',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'청구<br/>거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'계약<br/>거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'Line<br/>거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'헙력업체<br/>거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'운송<br/>화물구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column29',value:'장비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',value:'작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',value:'항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'기준작업<br/>경로번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'작업단계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'수입수출<br/>내수구분',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctDeptNm',inputType:'text',removeBorderStyle:'false',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'reqClntNm',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'befMmRamt',inputType:'',removeBorderStyle:'false',width:'110',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'thisMmDcsnAmt',inputType:'',removeBorderStyle:'false',width:'110',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisMmUnsettledAmt',inputType:'',width:'110',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisMmRamt',inputType:'',width:'110',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisMmRsltsAmt',inputType:'',width:'110',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'vsslNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'commNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lineClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'copCoClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transCargoClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'eqNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'lobranNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'portcnt',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stdWrkPathNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkStpNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'impExpDomesticClsNm',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'acctDeptNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column92',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column91',value:'부서계',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column90',value:'',displayMode:'label',expression:'sum(\'befMmRamt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column89',value:'',displayMode:'label',expression:'sum(\'thisMmDcsnAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column88',value:'',displayMode:'label',expression:'sum(\'thisMmUnsettledAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column87',value:'',displayMode:'label',expression:'sum(\'thisMmRamt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column86',value:'',displayMode:'label',expression:'sum(\'thisMmRsltsAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column83',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column68',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'befMmRamt\')'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column67',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'thisMmDcsnAmt\')'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column66',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'thisMmUnsettledAmt\')'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column65',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'thisMmRamt\')'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column64',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'thisMmRsltsAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'info-list',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt-black',id:'',label:'미확정 : 이전 포함하여 당월까지의 매출/매입 실적중 확정하지 않은 건 (미확인, 확인,계산서작성) 또는 당월 이후 회계처리된 전표확정 건 또는 당월 이후 회계처리된 전표취소 건',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'txt-black',id:'',label:'당월미확정 : 당월의 매출/매입 실적중 확정하지 않은 건 (미확인, 확인,계산서작성) 또는 당월 이후 회계처리된 전표확정 건 또는 당월 이후 회계처리된 전표취소 건',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'txt-black',id:'',label:'당월반영 (당월실적 손익반영) : 당월잔액 - 전월잔액',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'txt-black',id:'',label:'당월잔액 : 전월잔액 + 당월미확정 - 당월확정',style:'',tagname:'p'}}]}]}]}]}]}]})