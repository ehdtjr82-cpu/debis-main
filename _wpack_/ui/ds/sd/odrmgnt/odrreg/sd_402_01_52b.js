/*amd /ui/ds/sd/odrmgnt/odrreg/sd_402_01_52b.xml 25374 927505f10a47a2621e59d72fe7b86b77fe62e7c9f97fdc4c39cfc4cd9e3c7bd7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellItemCd',name:'매출코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderSellingAddingUp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'매출순번',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'mergeSellSeq',name:'매출병합seq',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',length:'70'}},{T:1,N:'w2:column',A:{id:'sellGoodsPatternCd',name:'매출품목유형코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text',length:'100'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'dcScCd',name:'할인할증코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'할인율명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'sellVol',name:'매출물량',dataType:'text',length:'18'}},{T:1,N:'w2:column',A:{id:'sellUnitCd',name:'매출단위코드',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'매출단가',dataType:'text',length:'15'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'매출금액외화',dataType:'text',length:'15'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'sumSellUpr',name:'매출단가합계',dataType:'text',length:'18'}},{T:1,N:'w2:column',A:{id:'sumSellAmtFcrc',name:'매출금액외화합계',dataType:'text',length:'18'}},{T:1,N:'w2:column',A:{id:'sumSellAmt',name:'매출액합계',dataType:'text',length:'18'}},{T:1,N:'w2:column',A:{id:'sumVatAmt',name:'부가세합계',dataType:'text',length:'20'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retreiveOrderSellingAddingUpList',action:'/ds.sd.odrmgnt.odrreg.RetrieveUnitySellingAddingUpListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_orderSellingAddingUp","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_orderSellingAddingUp","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retreiveOrderSellingAddingUpList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ds.sd.odrmgnt.odrreg.RegistUnitySellingAddingUpCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveOrderSellingAddingUpList_submitdone','ev:submiterror':'',id:'sbm_saveOrderSellingAddingUpList',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,{"action":"modified","id":"ds_orderSellingAddingUp","key":"IN_DS1"}',replace:'',target:'',style:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("scwin.onpageload");
  scwin.strCurDate = $c.date.getServerDateTime($p);
  scwin.strPreDate = $c.date.addDate($p, scwin.strCurDate, -1);
  scwin.isCopy;
  scwin.MSG_SD_WRN_001 = "병합하고자 하는 아이템은 2개이상 선택되어야 합니다.";
  $c.gus.cfDisableBtnOnly($p, [btn_save]);
  ed_odrNo.focus();
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  console.log("scwin.f_fieldClear");
  $c.gus.cfInitObjects($p, tbl_search);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  console.log("scwin.f_retrieve");
  //조회 필수 조건 check 
  let chkVal = await $c.gus.cfValidate($p, [ed_odrNo]);
  if (!chkVal) return;
  $c.sbm.execute($p, sbm_retreiveOrderSellingAddingUpList);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_save = async function () {
  //선택행 2개이상 check
  if (gr_orderSellingAddingUp.getCheckedIndex("choice").length < 2) {
    $c.gus.cfAlertMsg($p, scwin.MSG_SD_WRN_001);
    return;
  }
  let conf = await $c.win.confirm($p, "선택한 매출을 병합 하시겠습니까?");
  if (!conf) return;
  $c.sbm.execute($p, sbm_saveOrderSellingAddingUpList);
};

//-------------------------------------------------------------------------
// 공통 팝업 호출
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 청구거래처 팝업
      udc_bilgClntNo.cfCommonPopUp(scwin.callBackClnt, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      // 매출입항목 팝업
      udc_sellItemCd.cfCommonPopUp(scwin.callBackSelpchItem, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 CallBack
//-------------------------------------------------------------------------
scwin.callBackClnt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgClntNo, ed_bilgClntNm); //거래처 코드, 거래처명		
};
scwin.callBackSelpchItem = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_sellItemCd, ed_sellItemNm); //차량단축코드, 차량번호
};

//-------------------------------------------------------------------------
// 삭제이력조회 팝업 호출
//-------------------------------------------------------------------------
scwin.f_retrieveDeleteHistory = function () {
  var arrParam = new Array();
  arrParam[0] = new Array("");
  arrParam[1] = new Array("");
  arrParam[2] = new Array("");
  arrParam[3] = new Array("매출");
  arrParam[4] = new Array(ed_odrNo.getValue());
  var opts = {
    id: "fs_204_02_04p",
    popupName: "삭제이력조회팝업",
    modal: true,
    type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    ,
    title: "삭제이력조회팝업" //Layer pop
    ,
    width: 1200,
    height: 800
  };
  $c.win.openPopup($p, "/ui/ds/fs/bilg/fs_204_02_04p.xml", opts, arrParam);
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retreiveOrderSellingAddingUpList_submitdone = function (e) {
  console.log("scwin.sbm_retreiveOrderSellingAddingUpList_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_orderSellingAddingUp.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  if (rowCnt == 0) $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
};

//저장 완료
scwin.sbm_saveOrderSellingAddingUpList_submitdone = function (e) {
  console.log("scwin.sbm_saveOrderSellingAddingUpList_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  scwin.f_retrieve();
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//오더번호 입력 소문자 > 대문자
scwin.ed_odrNo_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, ed_odrNo);
};

//청구거래처 udc 관련 이벤트
scwin.udc_bilgClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgClntNo.getValue(), ed_bilgClntNm.getValue(), 'F', 'F');
};
scwin.udc_bilgClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, ed_bilgClntNm, 1);
};
scwin.udc_bilgClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNm, ed_bilgClntNo, 1, false);
};

//매출항목 udc 관련 이벤트
scwin.udc_sellItemCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_sellItemCd.getValue(), ed_sellItemNm.getValue(), 'F', 'F');
};
scwin.udc_sellItemCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_sellItemCd, ed_sellItemNm, 2);
};
scwin.udc_sellItemCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_sellItemNm, ed_sellItemCd, 2, false);
};

//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  console.log("scwin.btn_clear_onclick");
  scwin.f_fieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  console.log("scwin.btn_search_onclick");
  scwin.f_retrieve();
};

//삭제이력 버튼
scwin.btn_retDelHistory_onclick = function (e) {
  scwin.f_retrieveDeleteHistory();
};

//저장 버튼
scwin.btn_save_onclick = function (e) {
  scwin.f_save();
};

//오더통합매출병합 그리드 항목 선택
scwin.gr_orderSellingAddingUp_oncellclick = function (rowIndex, columnIndex, columnId) {
  let rowJson = ds_orderSellingAddingUp.getRowJSON(rowIndex);
  if (rowJson.choice == "F") {
    $c.gus.cfDisableBtnOnly($p, [btn_save]);
  } else {
    $c.gus.cfEnableBtnOnly($p, [btn_save]);
  }

  //병합된 row 전체 선택
  for (var i = 0; i < ds_orderSellingAddingUp.getTotalRow(); i++) {
    if (ds_orderSellingAddingUp.getCellData(i, "odrNo") == rowJson.odrNo && ds_orderSellingAddingUp.getCellData(i, "mergeSellSeq") == rowJson.mergeSellSeq) {
      ds_orderSellingAddingUp.setCellData(i, "choice", rowJson.choice);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width: 150px;',validExp:'오더번호:yes',allowChar:'0-9A-Za-z',maxlength:'15',ref:'data:dma_queryCondition.odrNo',mandatory:'true',title:'오더번호','ev:oneditkeyup':'scwin.ed_odrNo_oneditkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupBilgClntNo',style:'',codeId:'ed_bilgClntNo',btnId:'btn_bilgClntNo',id:'udc_bilgClntNo',nameId:'ed_bilgClntNm',refDataCollection:'dma_queryCondition',code:'bilgClntNo',selectID:'retrieveClntInfo','ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bilgClntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_bilgClntNo_onviewchangeNameEvent',UpperFlagCode:'1',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출항목 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupSellItemCd',style:'',codeId:'ed_sellItemCd',btnId:'btn_sellItemCd',id:'udc_sellItemCd',nameId:'ed_sellItemNm',refDataCollection:'dma_queryCondition',code:'sellItemCd',selectID:'retrieveSelpchItemInfo','ev:onclickEvent':'scwin.udc_sellItemCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_sellItemCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_sellItemCd_onviewchangeNameEvent',UpperFlagCode:'1',maxlengthCode:'6'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더 통합매출 병합',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridUpYn:'N',templateYn:'N',gridID:'gr_orderSellingAddingUp',grdDownOpts:'{"fileName":"오더 통합매출 병합.xlsx", "sheetName" : "오더 통합매출 병합", "type":"2+4+8+16", "bodyWordwrap" : "true", "hiddenVisible" : "true"}',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_orderSellingAddingUp',id:'gr_orderSellingAddingUp',style:'',visibleRowNum:'15',visibleRowNumFix:'true',dataDragDrop:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true','ev:oncellclick':'scwin.gr_orderSellingAddingUp_oncellclick',resize:'true',readOnly:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'선택',width:'50',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'병합<br/>순번',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'매출<br/>항목명',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'할인<br/>할증명',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'청구처명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'CNTR-NO<br/>/품명코드',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'품명명',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'매출<br/>물량',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'매출<br/>단위',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'통화<br/>코드',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column61',value:'병합전',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column52',value:'병합후',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column43',value:'부가세',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'실적일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'품목<br/>유형',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column34',value:'BL/NO',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'품명코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'매출항목<br/>코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'할인할증<br/>코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column73',value:'부가세',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column70',value:'오더번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'매출<br/>순번',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column64',value:'청구처<br/>코드',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column62',displayMode:'label',value:'매출단가'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',displayMode:'label',value:'매출금액'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column56',displayMode:'label',value:'매출금액<br/>(외화)'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',displayMode:'label',value:'매출단가'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column50',displayMode:'label',value:'매출금액'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',displayMode:'label',value:'매출금액<br/>(외화)'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',width:'50',falseValue:'F',trueValue:'T',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mergeSellSeq',inputType:'text',width:'70',colMerge:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',width:'80',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcScNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellCommNo',inputType:'text',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellVol',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###.##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUnitCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellUpr',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmtFcrc',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.#0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sumSellUpr',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sumSellAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sumSellAmtFcrc',displayMode:'label',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',hidden:'true',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rsltsStdDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellGoodsPatternCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'blNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellItemCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcScCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'sumVatAmt',value:'',displayMode:'label',textAlign:'right',hidden:'true',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'odrNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sellSeq',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'bilgClntNo',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_retDelHistory',label:'저장',style:'',type:'button',objType:'ctrlBtn',userAuth:'R','ev:onclick':'scwin.btn_retDelHistory_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제이력'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})