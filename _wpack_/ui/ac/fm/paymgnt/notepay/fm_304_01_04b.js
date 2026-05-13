/*amd /ui/ac/fm/paymgnt/notepay/fm_304_01_04b.xml 10950 529ce5995ca017a9e46987701e841aa34a325464a7dc65a3d53683d6dc79d052 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수 선언
//-------------------------------------------------------------------------
scwin.strCurDate = WebSquare.date.getCurrentServerDate();
scwin.strFromDate = scwin.strCurDate.substring(0, 6) + "01";
scwin.strToDate = scwin.strCurDate;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
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
};

//-------------------------------------------------------------------------
// 은행코드조회 (사용안함)
//-------------------------------------------------------------------------
// function f_bankcd_Retrieve() {  
//     ds_bankcd.DataID = "/ac.fm.stdinfomgnt.RetrieveBankCMD.do";
//     ds_bankcd.Reset();
//     cfCopyDataSet(ds_bankcd, ds_bankcd1);
// }

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------

scwin.f_OzReport = function () {
  let data = {
    reportName: "/ac/fm/paymgnt/notepay/fm_304_01_01.ozr",
    odiName: "fm_304_01_01",
    odiParam: {
      // 발행 일시도 명시적으로 전달 (OZ Viewer 기본 값 방지)
      sysPath: "dbl.ac.fm.paymgnt.notepay",
      startprtDt: ed_startprtDt.getValue(),
      endprtDt: ed_endprtDt.getValue(),
      bankCd: ed_bankCd.getValue(),
      draftCheckClsCd: lc_draft_check_cls_cd.getValue(),
      setlCls: lc_setlCls.getValue()

      // mode : "silent"
      // isframe : false
      // configmode : "html"
      // printcommand : false
      // showTree : true,
    },
    viewerParam: {
      zoom: 100,
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      mode: "silent"
    },
    formParam: {}
  };
  wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
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
  if (rtnList[0] == "N/A") return;
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
    if (orgObjCd.getValue() != "") {
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
    if (orgObjCd.getValue() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
    }
  }
};
scwin.udc_bankInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_bankCd, ed_bankNm, '1');
};
scwin.udc_bankInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_bankCd, ed_bankNm, 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'은행',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveBankInfo',codeId:'ed_bankCd',popupTitle:'은행조회,은행코드,은행명',nameId:'ed_bankNm',style:'',btnId:'btn_bank',id:'udc_bankInfo',popupGridHeadTitle:'은행코드,은행명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',allowCharCode:'0-9',maxlengthCode:'6',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_bankInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bankInfo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_draft_check_cls_cd',style:'',submenuSize:'auto',objType:'data',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수취일자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ed_startprtDt',edToId:'ed_endprtDt',id:'udc_fromToCalendar1',objTypeFrom:'data',objTypeTo:'data',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정리구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_setlCls',objType:'data',ref:'',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'00'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미정리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_OzReport'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''}}]}]}]}]}]}]})