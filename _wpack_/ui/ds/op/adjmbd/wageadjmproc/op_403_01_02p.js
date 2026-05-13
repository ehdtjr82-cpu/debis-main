/*amd /ui/ds/op/adjmbd/wageadjmproc/op_403_01_02p.xml 16208 aa2477297d04cbf9cea67d8cf6b7b49f3f5b2e2648c3841da272c6a2f1042ad0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_results'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'districtCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkMthdCd',name:'작업방법코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'causeWageAgrmntDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'goodsCd',name:'품목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'goodsNm',name:'품목명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'causeAdptStDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'destWageAgrmntDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'destAdptStDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rasingRt',name:'인상율',dataType:'text',defaultValue:'0'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.adjmbd.wageadjmproc.SaveStevedoringWagesBasisTariffCopyCMD.do',method:'post',mediatype:'application/json',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone',abortTrigger:'',ref:'data:json,{"id":"dma_results","key":"IN_DS1"}'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.districtCd = "";
scwin.wrkMthdCd = "";
scwin.causeWageAgrmntDt = "";
scwin.goodsCd = "";
scwin.goodsNm = "";
scwin.causeAdptStDt = "";
scwin.onpageload = function () {
  ed_causeAdptStDt.hide();
  var params = $c.data.getParameter($p);
  scwin.districtCd = params.districtCd;
  scwin.wrkMthdCd = params.wrkMthdCd;
  scwin.causeWageAgrmntDt = params.wageAgrmntDt;
  scwin.goodsCd = params.goodsCd;
  scwin.goodsNm = params.goodsNm;
  scwin.causeAdptStDt = params.adptStDt;
  console.log(params);
  const codeOptions = [{
    grpCd: "OP241",
    compID: "lc_wrkMthdCd"
  }
  //,{ grpCd : "TB032", compID : "gr_brthngRate:alngpierTrfClsCd" }
  ];
  $c.data.setCommonCode($p, codeOptions);
  const codeOptions2 = [{
    method: "getLuxeComboData",
    param1: "GoodsSurchargeWorkStepEBC",
    param2: "retriveDistrictCodeList",
    //param3: ["CMP"],
    compID: "lc_districtCd"
  }];
  $c.data.setGauceUtil($p, codeOptions2, scwin.callbackCode);
};
scwin.callbackCode = function () {
  if (scwin.districtCd != "" && scwin.districtCd != null) {
    lc_districtCd.setValue(scwin.districtCd);
  }
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    if (scwin.causeWageAgrmntDt == undefined || scwin.causeWageAgrmntDt == null) {
      scwin.causeWageAgrmntDt = "";
    }
    if (scwin.causeAdptStDt == undefined || scwin.causeAdptStDt == null) {
      scwin.causeAdptStDt = "";
    }
    ed_goodsCd.setValue(scwin.goodsCd);
    ed_goodsNm.setValue(scwin.goodsNm);
    lc_districtCd.setValue(scwin.districtCd);
    lc_wrkMthdCd.setValue(scwin.wrkMthdCd);
    //////임시
    /*
    scwin.causeWageAgrmntDt = '20060316';
    scwin.causeAdptStDt = '20061001';
     ed_goodsCd.setValue('30000054');
    ed_goodsNm.setValue('고무');
    */
    //// end
    ed_causeWageAgrmntDt.setValue(scwin.causeWageAgrmntDt);
    ed_causeAdptStDt.setValue(scwin.causeAdptStDt);
    $c.gus.cfDisableKeyData($p);
  }, {
    "delay": 50
  });
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면

  switch (disGubun) {
    case 1:
      // 품명 조건검색 팝업
      rtnList = udc_comCodeGoods.cfCommonPopUp(scwin.callbackCommGoodsInfo, pCode.trim(), pName, pClose, null, null, null, null, ",,,T", null, null, null, null, null, pAllSearch, null);
      //rtnList = await udc_comCodeGoods.openPopup(pCode,pName);

      //$c.gus.cfSetReturnValue(rtnList, ed_goodsCd, ed_goodsNm);  // 품명코드, 품명
      break;

    /*
    // disgubun 2 로 호출하는 경우 없음
    case 2:
        // 품명 조건검색 팝업
        //rtnList = cfCommonPopUp('retrieveCommGoodsInfo',pCode.trim(),pName,pClose,null,null,null,null,",,,T",null,null,null,null,null,pAllSearch,null);
        rtnList = await udc_comCodeGoods.openPopup(pCode,pName);
         if ( rtnList != null ) {
            ds_retrieveStevedoring.NameValue(ds_retrieveStevedoring.RowPosition, "goodsCd")   = rtnList[0];
            ds_retrieveStevedoring.NameValue(ds_retrieveStevedoring.RowPosition, "goodsNm")   = rtnList[1];
            ds_retrieveStevedoring.NameValue(ds_retrieveStevedoring.RowPosition, "upGoodsNm") = rtnList[5];
             var row = ds_retrieveStevedoring.NameValueRow("selpchItemCd",rtnList[0]);
             if ( row != "" ) {
                if ( ds_retrieveStevedoring.RowPosition != row ) {
                    cfAlertMsg(row+"째 Row에 중복된 노임항목이 존재합니다.");
                    ds_retrieveStevedoring.NameValue(ds_retrieveStevedoring.RowPosition, "goodsCd")   = "";
                    ds_retrieveStevedoring.NameValue(ds_retrieveStevedoring.RowPosition, "goodsNm")   = "";
                    ds_retrieveStevedoring.NameValue(ds_retrieveStevedoring.RowPosition, "upGoodsNm") = "";
                }
            }
        } else {
            ds_retrieveStevedoring.NameValue(ds_retrieveStevedoring.RowPosition, "goodsCd")   = "";
            ds_retrieveStevedoring.NameValue(ds_retrieveStevedoring.RowPosition, "goodsNm")   = "";
            ds_retrieveStevedoring.NameValue(ds_retrieveStevedoring.RowPosition, "upGoodsNm") = "";
        }
         break;
    */
    default:
      break;
  }
};
scwin.callbackCommGoodsInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_goodsCd, ed_goodsNm); // 품명코드, 품명
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  /*
  if (!$c.gus.cfCanOpenPopup(inObj, pairObj)){
      return;
  }
  */
  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  }
  // inObj가 코드명 필드일 경우 팝업
  else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.udc_comCodeGoods_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_goodsCd.getValue(), ed_goodsNm.getValue(), 'T', 'T');
};
scwin.udc_comCodeGoods_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_goodsNm, ed_goodsCd, 1, false);
};
scwin.btn_copy_onclick = function (e) {
  scwin.f_Save();
};
scwin.f_Save = async function () {
  var causeWageAgrmntDt = ed_causeWageAgrmntDt.getValue();
  var destWageAgrmntDt = ed_destWageAgrmntDt.getValue();
  var destAdptStDt = ed_destAdptStDt.getValue();
  var rasingRt = ed_rasingRt.getValue();

  //if (!cfValidateValue(ed_destWageAgrmntDt, "minNumber=19000101")) {
  //let rtn = await $c.gus.cfValidate([ed_destWageAgrmntDt]);
  //console.log(rtn);
  //if (!rtn) {
  if (destWageAgrmntDt == "" || destWageAgrmntDt == null || destWageAgrmntDt < 19000101) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["노임협약일자"]); //을(를) 입력하십시오.
    ed_destWageAgrmntDt.setValue("");
    ed_destWageAgrmntDt.focus();
    return;
  }
  if (causeWageAgrmntDt >= destWageAgrmntDt) {
    $c.win.alert($p, "노임협약일자를 원 노임협약일자 이후로 입력하십시오.");
    ed_destWageAgrmntDt.focus();
    return;
  }

  //if (!$c.gus.cfValidateValue(destAdptStDt, "minNumber=19000101")) {
  //let rtn2 = $c.gus.cfValidate(ed_destAdptStDt);
  //if (!rtn2) {
  if (destAdptStDt == "" || destAdptStDt == null || destAdptStDt < 19000101) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["적용시작일자"]); //을(를) 입력하십시오.

    ed_destAdptStDt.setValue("");
    ed_destAdptStDt.focus();
    return;
  }

  /*
  if (!$c.gus.cfIsAfterDate(destWageAgrmntDt, destAdptStDt)) {        
      alert("적용시작일자를 노임협약일자 이후로 입력하십시오.");
      return;
  }
  */
  if (destWageAgrmntDt > destAdptStDt) {
    $c.win.alert($p, "적용시작일자를 노임협약일자 이후로 입력하십시오.");
    ed_destWageAgrmntDt.focus();
    return;
  }

  //let rtn3 = !$c.gus.cfValidate(ed_rasingRt);
  //if (rtn3) {
  if (rasingRt == "" || rasingRt == null) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["인상율"]); //을(를) 입력하십시오.

    ed_rasingRt.setValue("");
    ed_rasingRt.focus();
    return;
  }
  //$c.sbm.execute(sbm_save, {"IN_DS1":[dma_results.getJSON()]});
  $c.sbm.execute($p, sbm_save);
};
scwin.sbm_save_submitdone = function (e) {
  //$c.win.alert(MSG_CM_INF_001);
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  } else {
    //$c.win.alert(e.responseJSON.resultDataSet[1].Msg);
  }
};
scwin.udc_comCodeGoods_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_goodsCd, ed_goodsNm, 1);
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tb_info',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'권역코드',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',ref:'data:dma_results.districtCd',chooseOption:'',editType:'select',style:'width:150px;',id:'lc_districtCd',allOption:'',class:'',objType:'key',displayMode:'label'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작업방법',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',ref:'data:dma_results.wrkMthdCd',chooseOption:'',editType:'select',style:'width:150px;',id:'lc_wrkMthdCd',allOption:'',class:'',objType:'key',displayMode:'label'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'노임협약일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{ref:'data:dma_results.causeWageAgrmntDt',displayFormat:'yyyy/MM/dd',style:'',readOnly:'true',id:'ed_causeWageAgrmntDt',class:'',calendarValueType:'yearMonthDate'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'품목/품명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'8',refDataCollection:'dma_results','ev:onviewchangeNameEvent':'scwin.udc_comCodeGoods_onviewchangeNameEvent',popupID:'popupGoods',code:'goodsCd',UpperFlagCode:'1',btnId:'btn_goods','ev:onclickEvent':'scwin.udc_comCodeGoods_onclickEvent',allowCharCode:'0-9,A-Z,a-z',codeId:'ed_goodsCd',selectID:'retrieveCommGoodsInfo',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupGridHeadTitle:'코드,품목/품명',popupTitle:'거래처 품목/품명,코드,품목/품명',name:'goodsNm',nameId:'ed_goodsNm',style:'',id:'udc_comCodeGoods','ev:onblurCodeEvent':'scwin.udc_comCodeGoods_onblurCodeEvent',class:''}},{T:1,N:'xf:input',A:{ref:'data:dma_results.causeAdptStDt',style:'',id:'ed_causeAdptStDt'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'group1',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'노임협약일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_destWageAgrmntDt',style:'',mandatory:'true',ref:'data:dma_results.destWageAgrmntDt',title:'노임협약일자',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'→ 적용시작일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_destAdptStDt',style:'',mandatory:'true',ref:'data:dma_results.destAdptStDt',title:'적용시작일자',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'인상율',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_rasingRt',placeholder:'',style:'width: 100px;',mandatory:'true',maxlength:'3.2',dataType:'float',ref:'data:dma_results.rasingRt',title:'인상율'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'%',ref:'',style:'',userData2:''}}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_copy',style:'',type:'button','ev:onclick':'scwin.btn_copy_onclick',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'요율복사'}]}]}]}]}]}]}]})