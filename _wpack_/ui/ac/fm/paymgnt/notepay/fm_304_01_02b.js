/*amd /ui/ac/fm/paymgnt/notepay/fm_304_01_02b.xml 17966 0683b5c1113c9bce9e17f7c14fcf1c8982fb2cf624e1b8ad5521aa2bff4d66c0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'draftCheckClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prtBank',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'recStDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'recEndDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dueStDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dueEndDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftCheckNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftStsCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_draftCheck',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'recdt',name:'수취일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'issueBankNm',name:'은행',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftcheckclscd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recept',name:'수령',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unrecept',name:'미사용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'genuin',name:'진성',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accomo',name:'융통',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blank',name:'견질',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expiration',name:'만기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'disuse',name:'폐기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankcd',name:'은행코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDraft',action:'/ac.fm.paymgnt.notepay.RetrieveDraftCheckReceiveAndPayContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_draftCheck","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_draftCheck","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDraft_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBank',action:'',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수 선언
//-------------------------------------------------------------------------
scwin.strCurDate = WebSquare.date.getCurrentServerDate();
scwin.strFromDate = scwin.strCurDate.substring(0, 6) + "01";
scwin.strToDate = scwin.strCurDate;
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.strBasSdId = "/ui/ac/fm/paymgnt/notepay/fm_304_01_03p.xml"; //아직 작업이 안됨

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FM012",
    compID: "gr_rcpay:draftcheckclscd"
  }, {
    grpCd: "FM012",
    compID: "lc_draft_check_cls_cd",
    opt: {
      'range': '1,10'
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  ed_startprtDt.setValue(scwin.strFromDate);
  ed_endprtDt.setValue(scwin.strToDate);
  // scwin.f_bankcd_Retrieve();
};

//-------------------------------------------------------------------------
// 은행코드조회
//-------------------------------------------------------------------------
//   function f_bankcd_Retrieve() {  
// 	ds_bankcd.DataID = "/ac.fm.stdinfomgnt.RetrieveBankCMD.do";
//     ds_bankcd.Reset();
// 	cfCopyDataSet(ds_bankcd, ds_bankcd1);
//   }
// 서미미션에 banknm 존재

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  // ds_condition.setUseChangeInfo(false)
  $c.sbm.execute($p, sbm_retrieveDraft);
};

//-------------------------------------------------------------------------
// 상세
//-------------------------------------------------------------------------
scwin.f_Detail = function (rowIndex, columnId) {
  let recDt = ds_draftCheck.getCellData(rowIndex, 'recdt');
  let issueBankNm = ds_draftCheck.getCellData(rowIndex, 'issueBankNm');
  let issueBankCd = ds_draftCheck.getCellData(rowIndex, 'bankcd');
  let draftCheckClsCd = ds_draftCheck.getCellData(rowIndex, 'draftcheckclscd');
  let draftStsCd = "";
  switch (columnId) {
    case "unrecept":
      draftStsCd = "01";
      break;
    case "genuin":
      draftStsCd = "02";
      break;
    case "blank":
      draftStsCd = "03";
      break;
    case "accomo":
      draftStsCd = "04";
      break;
    case "expiration":
      draftStsCd = "05";
      break;
    case "disuse":
      draftStsCd = "06";
      break;
  }
  let data = {
    recDt: recDt,
    issueBankNm: issueBankNm,
    issueBankCd: issueBankCd,
    draftCheckClsCd: draftCheckClsCd,
    draftStsCd: draftStsCd
  };
  let opts = {
    id: "fm_304_01_03p",
    popupName: "어음수표번호",
    modal: true,
    type: "browserPopup",
    title: "",
    width: "430",
    height: "480",
    scrollbars: "no"
  };
  $c.win.openPopup($p, scwin.strBasSdId, opts, data);
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sPopupCls) {
  let rtnList = null;
  let sCmdName = "";
  let name = "";
  let code = txtCode.getValue();
  if (txtName == null) {
    name = "";
  } else {
    name = txtName.getValue();
  }
  switch (select_code) {
    // 은행 PopUp 호출
    case '1':
      udc_bankInfo.cfCommonPopUp(scwin.udc_bankInfo_callBackFunc, code, name, sPopupCls, null, null, null, null, null, null, null, null, null); // 차입기관
      break;
    // 차입번호 PopUp 호출
    // case '2' :
    //     rtnList = udc_borrLedgNoInfo.cfCommonPopUp(scwin.udc_borrLedgNoInfo_callBackFunc, code,name,sPopupCls,null,null,null,null,null,null,null,null,null); // 차입번호

    //     break;
  }

  // if ( rtnList != null ) {
  //     if (rtnList[0] == "N/A") return;
  //     txtCode.setValue(rtnList[0]);	 // 코드
  //     if ( txtName != null )
  //     {
  //         txtName.setValue(rtnList[1]);	 // 코드명
  //     }
  //     txtCode.options.hidVal = rtnList[0]; // 코드
  // } else {
  //     txtCode.setValue("");	 // 코드
  //     if ( txtName != null )
  //     {
  //         txtName.setValue("");	 // 코드명
  //     }
  //     txtCode.options.hidVal = ""; // 코드
  // }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_bankInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    ed_bankCd.setValue(rtnList[0]);
    ed_bankNm.setValue(rtnList[1]);
    ed_bankCd.options.hidVal = rtnList[0];
  } else {
    ed_bankCd.setValue("");
    ed_bankNm.setValue("");
    ed_bankCd.options.hidVal = "";
  }
};

// scwin.udc_borrLedgNoInfo_callBackFunc = function(rtnList) {

// };

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd._wTagName.toUpperCase() == "INPUT") {
    if (orgObjCd.getValue() != orgObjCd.options.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
  } else if (orgObjCd._wTagName.toUpperCase() == "OBJECT") {
    if (orgObjCd.getValue() != orgObjCd.options.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
    }
  }
};

//-------------------------------------------							
// 그리드 데이터 엑셀로 다운					
//-------------------------------------------
scwin.f_runExcel = async function () {
  if (ds_draftCheck.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let fileName = '어음수표수불조회';
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_rcpay, {
      fileName: fileName + ".xlsx",
      sheetName: fileName
    });
  }
};

//-------------------------------------------------------------------------
//script
//-------------------------------------------------------------------------
scwin.gr_rcpay_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "recDt" || columnId == "issueBankNm" || columnId == "draftCheckClsCd") {} else {
    scwin.f_Detail(rowIndex, columnId);
  }
};
scwin.sbm_retrieveDraft_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_draftCheck.getRowCount());
  let rowCnt = ds_draftCheck.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
};
scwin.udc_bankInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_bankCd, ed_bankNm, '1');
};
scwin.udc_bankInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_bankCd, ed_bankNm, 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'recStDt',refDataMap:'dma_condition',style:'',id:'udc_fromToCalendar1',refEdDt:'recEndDt',edFromId:'ed_startprtDt',edToId:'ed_endprtDt',objTypeFrom:'data',objTypeTo:'data',objTypeBtn:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'은행',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveBankInfo',codeId:'ed_bankCd',popupTitle:'은행조회,은행코드,은행명',nameId:'ed_bankNm',style:'',btnId:'btn_bank',popupGridHeadTitle:'은행코드,은행명',code:'prtBank',refDataCollection:'dma_condition',objTypeName:'data',objTypeCode:'data',maxlengthCode:'6',allowCharCode:'0-9',id:'udc_bankInfo','ev:onblurCodeEvent':'scwin.udc_bankInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bankInfo_onclickEvent',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_draft_check_cls_cd',style:'',submenuSize:'auto',objType:'data',ref:'data:dma_condition.draftCheckClsCd',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_rcpay',gridUpYn:'N',gridDownFn:'scwin.f_runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_draftCheck',id:'gr_rcpay',style:'',dataDragSelectAutoScroll:'true',readOnly:'true','ev:oncellclick':'scwin.gr_rcpay_oncellclick',focusMode:'cell',visibleRowNumFix:'true',visibleRowNum:'15'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column1',value:'수취일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'은행',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'수령',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column11',value:'미사용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column9',value:'진성',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'융통',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'견질',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column7',value:'만기',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'폐기',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'100',editFormat:'####/##/##',inputType:'text',style:'',id:'recdt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'issueBankNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'draftcheckclscd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'recept',value:'',class:'underline',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'unrecept',value:'',class:'underline',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'genuin',value:'',class:'underline',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'accomo',value:'',class:'underline',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'blank',value:'',class:'underline',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'expiration',value:'',class:'underline',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'disuse',value:'',class:'underline',displayMode:'label',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})