/*amd /ui/ac/co/rsltsmgnt/unsettledmgnt/co_402_04_03b.xml 34197 81ee8f0d2527bb97a7a18442c99b9e4568ee5634e1bd9ca9b403d9903b780b0f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsSellClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsDt',name:'발생일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befMmRamt',name:'전월잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisMmUnsettledAmt',name:'당월;미확정금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisMmRamt',name:'당월잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisMmRsltsAmt',name:'당월;반영금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisMmDcsnAmt',name:'당월;확정금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선;관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'입항일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구;거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약;거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineClntNm',name:'Line;거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'헙력업체;거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsNm',name:'운송;화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNm',name:'장비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNm',name:'기준작업;경로번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsNm',name:'수입수출;내수구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pic',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'국제;BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'국제;SHIPPING',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.co.rsltsmgnt.unsettledmgnt.RetrieveUnsettledForOdrResultsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : co_402_04_03b
// 이름     : 미확정실적상세내역조회(오더별)
// 경로     : 회계/자금관리/채권관리/채권내역관리/
// 작 성 자 : 오영재
// 작 업 일 : 2025-11-25
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================

// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd;
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.isSubCompany = false;
scwin.checkSearch;
scwin.dateStr = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.sortType = "";
scwin.sortOrder = "";
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FI019",
    compID: "rd_pchsSellClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.gus.cfDisableKey($p);
};

//-------------------------------------------------------------------------
// CommonCode 세팅 후 초기화
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  scwin.f_FieldClear();
  scwin.f_setCompanyInfo();
  var options = {};
  options.sortIndex = "cd";
  options.sortOrder = "1 1"; //오른차순:"1", 내림차순"-1"
  dlt_commonCodeFI019.multisort(options);
  dlt_commonCodeFI019.reform();
  rd_pchsSellClsCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ed_srchCloseYm]);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  $c.gus.cfInitHidVal($p, tbl_search);
  rd_pchsSellClsCd.setValue(1);
  ed_srchCloseYm.setValue(scwin.dateStr);
  ed_srchAcctDeptCd.setValue("00000");
  //ed_srchAcctDeptNm.setValue("전사");
  ed_srchAcctDeptCd.trigger('onblur');
  ed_srchCloseYm.focus();
};
scwin.onUdcCompleted = function () {
  //rd_pchsSellClsCd.setSelectedIndex(1);
  //rd_pchsSellClsCd.setValue("1");
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

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  // SET
  console.log(rtnList);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명
  } else {
    ed_coNm.setValue("");
    ed_coCd.setValue("");
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};
scwin.udc_dongbuGroupCompanyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F', ed_coCd, ed_coNm);
};

//-------------------------------------------------------------------------
// 회사코드 입력시
//-------------------------------------------------------------------------
scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회(미확정거래내역집계)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret;
  //ed_srchCloseYm 제외 : invalidMessage 설정하는 곳이 없어 cfValidate 에 넣어 사용할 수 없다.
  ret = await $c.gus.cfValidate($p, [ed_srchCloseYm, ed_srchAcctDeptCd]);
  if (!ret) {
    return false;
  }
  if (ed_srchAcctDeptCd.getValue() != ed_srchAcctDeptCd.options.hidVal) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["부서"]);
    ed_srchAcctDeptCd.focus();
    return false;
  }

  //ds_search.UseChangeInfo = false;
  //tr_search.post();

  //소스에서 바인딩 하는게 더 수월
  dma_search.set("closeYm", ed_srchCloseYm.getValue()); //마감년월
  dma_search.set("acctDeptCd", ed_srchAcctDeptCd.getValue()); // 부서
  dma_search.set("pchsSellClsCd", rd_pchsSellClsCd.getValue()); // 매출입구분
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
// 부서코드팝업
//-------------------------------------------------------------------------
scwin.f_deptPopUp = function (pWinCloseTF, pAllSearchTF) {
  //<-- <수정_070105_신종민> 귀속변경에 따른 병행처리 수정 
  if (ed_srchCloseYm.getValue().substring(0, 4).trim() == '2006') {
    scwin.f_PopUp('retrieveAcctDeptCdInfoBef', null, null, pWinCloseTF, pAllSearchTF);
  } else {
    var pWhere = ",,,,,,,,," + ed_coCd.getValue();
    scwin.f_PopUp('retrieveAcctDeptCdInfo', pWhere, null, pWinCloseTF, pAllSearchTF);
  }
  //-->
};

//-------------------------------------------------------------------------
// 팝업(부서)
//-------------------------------------------------------------------------
scwin.f_PopUp = function (sQueryID, sWhere, sWidth, pWinCloseTF, pAllSearchTF) {
  udc_srchAcctDeptCd.setSelectId(sQueryID);
  udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_callBackFunc, ed_srchAcctDeptCd.getValue(), ed_srchAcctDeptNm.getValue(), pWinCloseTF, null, null, null, null, sWhere, sWidth, null, null, null, null, pAllSearchTF);
};
scwin.udc_srchAcctDeptCd_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_srchAcctDeptCd.setValue(rtnList[0]);
    ed_srchAcctDeptNm.setValue(rtnList[1]);
    ed_srchAcctDeptCd.options.hidVal = rtnList[0];
  } else {
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptNm.setValue("");
    ed_srchAcctDeptCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = function (inObj, pairObj) {
  let inValue = $c.gus.cfGetValue($p, inObj);
  if (!inObj.options) inObj.options = {};
  let hidValue = inObj.options.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.options.hidVal = "";
    let obj = $c.gus.object($p, pairObj);
    obj.setValue("");
    return false;
  }
  if (inValue == hidValue) return false;
  return true;
};
scwin.udc_srchAcctDeptCd_onclickEvent = function (e) {
  scwin.f_deptPopUp('F', 'T');
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_master.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let filename = '미확정실적_' + ed_srchCloseYm.getValue() + "_" + ed_srchAcctDeptNm.getValue() + "_" + rd_pchsSellClsCd.getText();
  const options = {
    fileName: filename + ".xlsx",
    sheetName: filename
  };
  $c.data.downloadGridViewExcel($p, gr_master, options);
};
scwin.btn_reset_onclick = function (e) {
  //$c.gus.cfInitObjects(tbl_search, null);
  scwin.f_FieldClear();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 15%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 15%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',btnId:'btn_company',class:'',code:'coCd',codeId:'ed_coCd','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent',id:'udc_dongbuGroupCompanyInfo',mandatoryCode:'true',maxlengthCode:'3',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'dma_search',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validExpCode:'회사코드:yes',name:'coNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'마감년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'form-control cal',displayFormat:'yyyy/MM',editType:'focus',id:'ed_srchCloseYm',mandatory:'true',objType:'data',placeholder:' ',ref:'data:dma_search.closeYm',style:'',validateOnInput:'true',title:'예산년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',class:'col8',code:'acctDeptCd',codeId:'ed_srchAcctDeptCd',editTypeCode:'focus','ev:onblurCodeEvent':'scwin.udc_srchAcctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent',id:'udc_srchAcctDeptCd',mandatoryCode:'true',mandatoryName:'false',maxlengthCode:'5',maxlengthName:'15',name:'acctDeptNm',nameId:'ed_srchAcctDeptNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'dma_search',style:'',validExpCode:'부서:yes:length=5',validTitle:'부서',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_pchsSellClsCd',mandatory:'false',objType:'data',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'xf:value'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'미확정실적 상세내역(오더별)',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownUserAuth:'X',gridID:'gr_master',id:'udc_topGrd',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',fixedColumn:'7',focusMode:'cell',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true',readOnly:'true',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'귀속부서',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'발생일자',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'거래처',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'전월잔액',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'당월<br/>미확정금액',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'당월잔액',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'당월<br/>반영금액',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'당월<br/>확정금액',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'계정코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column39',inputType:'text',value:'계정명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column37',inputType:'text',value:'모선',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column35',inputType:'text',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',value:'본선<br/>관리번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column31',inputType:'text',value:'입항일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',value:'품명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',value:'청구<br/>거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',value:'계약<br/>거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',value:'Line<br/>거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column61',inputType:'text',value:'헙력업체<br/>거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column59',inputType:'text',value:'운송화물<br/>구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column57',inputType:'text',value:'장비',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column55',inputType:'text',value:'작업장',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column53',inputType:'text',value:'항차',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column51',inputType:'text',value:'기준작업<br/>경로번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',value:'작업단계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',value:'수입수출<br/>내수구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',value:'담당자',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',value:'국제<br/>BL번호',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',value:'국제<br/>SHIPPING',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctDeptNm',inputType:'text',removeBorderStyle:'false',width:'100',colMerge:'true',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'rsltsDt',inputType:'calendar',removeBorderStyle:'false',width:'100',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'reqClntNm',inputType:'text',removeBorderStyle:'false',textAlign:'left',width:'120',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'befMmRamt',inputType:'text',removeBorderStyle:'false',textAlign:'right',width:'110',displayFormat:'#,##0',dataType:'number',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisMmUnsettledAmt',inputType:'text',textAlign:'right',width:'110',displayFormat:'#,##0',dataType:'number',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisMmRamt',inputType:'text',textAlign:'right',width:'110',displayFormat:'#,##0',dataType:'number',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisMmRsltsAmt',inputType:'text',textAlign:'right',width:'110',displayFormat:'#,##0',dataType:'number',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisMmDcsnAmt',inputType:'text',textAlign:'right',width:'110',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',textAlign:'left',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',textAlign:'left',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrvlportDt',inputType:'calendar',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtClntNm',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineClntNm',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'copCoClntNm',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transCargoClsNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNm',inputType:'text',textAlign:'left',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',textAlign:'left',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portcnt',inputType:'text',textAlign:'left',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stdWrkPathNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpNm',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpDomesticClsNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pic',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seaAirCls',inputType:'text',width:'100'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'acctDeptNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column120',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column119',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column118',value:'부서계',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column117',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum(\'befMmRamt\')'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column116',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum(\'thisMmUnsettledAmt\')'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column115',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum(\'thisMmRamt\')'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column114',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum(\'thisMmRsltsAmt\')'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column113',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum(\'thisMmDcsnAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column112',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column111',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column110',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column109',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column108',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column107',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column106',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column104',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column103',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column102',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column101',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column100',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column98',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column95',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column94',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column92',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column91',inputType:'text',style:'',value:'합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column90',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column89',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column88',inputType:'expression',style:'',value:'',width:'110',displayFormat:'#,##0',dataType:'number',expression:'sum(\'befMmRamt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column87',inputType:'expression',style:'',value:'',width:'110',displayFormat:'#,##0',dataType:'number',expression:'sum(\'thisMmUnsettledAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column86',inputType:'expression',style:'',value:'',width:'110',displayFormat:'#,##0',dataType:'number',expression:'sum(\'thisMmRamt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column85',inputType:'expression',style:'',value:'',width:'110',displayFormat:'#,##0',dataType:'number',expression:'sum(\'thisMmRsltsAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column84',inputType:'expression',style:'',value:'',width:'110',displayFormat:'#,##0',dataType:'number',expression:'sum(\'thisMmDcsnAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column83',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column82',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column81',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column80',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column79',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column78',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column77',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column76',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column75',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column74',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column73',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column72',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column71',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column70',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column69',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column68',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column67',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column66',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column65',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column64',inputType:'text',style:'',value:'',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column63',inputType:'text',style:'',value:'',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'info-list',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:' 당월확정금액 = 전월잔액+ 당월미확정금액-당월잔액',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당월확정금액이 마이너스일 경우는 전월 미확정 금액을 당월 마감 돌릴때 미확정으로 잡은 것이고, 당월 미확정 금액은 아님',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당월확정금액에는 실제로 확정된 금액과 물류 통합매출입에서 수정하여 삭제된 차액분이 더해진 것임',style:'',tagname:'p'}}]}]}]}]}]}]})