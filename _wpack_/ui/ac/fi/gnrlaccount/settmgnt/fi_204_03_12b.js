/*amd /ui/ac/fi/gnrlaccount/settmgnt/fi_204_03_12b.xml 16810 c4b7fd11f05be6b5bad7b3f45a1228862bb1a0fdb075b946fa7d450231f71089 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm1',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYm2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYm3',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'type',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'compYm1',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'compYm2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'compYm3',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'flag',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bizCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_ds_bizCd',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_bizCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_bizCd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 사업영역별 손익계산서
 * 메뉴경로 : 회계/재무회계/일반회계/결산관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ac/fi/gnrlaccount/settmgnt/fi_204_03_12b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-19
 * 수정이력  :
 *    - 2025-12-19      정승혜    최초작성
 *    - 2026-01-30      정승혜    기타수정
 * 메모 : 
 */
scwin.memJson = $c.data.getMemInfo($p);
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사  
scwin.vCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)

scwin.strToDay = $c.date.getServerDateTime($p, "yyyyMMdd");

// hidden
scwin.txtCoClsCd = "";
scwin.txtCoCd = "";
scwin.txt_deptNm = "";
scwin.txt_closeYm1 = "";
scwin.txt_closeYm3 = "";
scwin.txt_compYm1 = "";
scwin.txt_compYm3 = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // getCodeList
  const codeOptions = [{
    grpCd: "CO022",
    compID: "lc_flag"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  scwin.f_Header();
  rd_type.setValue("2");
  lc_flag.setSelectedIndex(0);
  //날짜셋팅
  ed_closeYm2.setValue(scwin.strToDay);
  ed_compYm2.setValue($c.date.addMonth($p, scwin.strToDay, -12).substring(0, 6));
  if (scwin.vCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사인 경우에만  회사코드 check
    scwin.txtCoCd = scwin.vCoCd;
    scwin.txtCoClsCd = scwin.vCoClsCd;
  }
  scwin.f_setBizCd();
  ed_closeYm2.focus();
};
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// 날짜셋팅 
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  let imsi_date1 = ed_closeYm2.getValue().trim() + "01";
  let imsi_date2 = ed_compYm2.getValue().trim() + "01";
  if (imsi_date1.substring(4, 6) == "01" || imsi_date1.substring(4, 6) == "00") {
    scwin.txt_closeYm1 = imsi_date1.substring(0, 4) + "00";
  } else {
    scwin.txt_closeYm1 = imsi_date1.toDate().after(0, -1, 0).format("YYYYMM");
  }
  if (imsi_date2.substring(4, 6) == "01" || imsi_date2.substring(4, 6) == "00") {
    scwin.txt_compYm1 = imsi_date2.substring(0, 4) + "00";
  } else {
    scwin.txt_compYm1 = imsi_date2.toDate().after(0, -1, 0).format("YYYYMM");
  }
  scwin.txt_closeYm3 = ed_closeYm2.getValue().substring(0, 4);
  scwin.txt_compYm3 = ed_compYm2.getValue().substring(0, 4);
};

//-------------------------------------------------------------------------
// 손익계산서 발행 
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_closeYm2, rd_type, lc_deptCd, ed_compYm2]);
  if (!ret) {
    return;
  }
  scwin.f_Setting();

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)	
  let data = {
    reportName: "/ac/fi/gnrlaccount/settmgnt/fi_204_03_12p.ozr",
    odiParam: {
      sysPath: "dbl.ac.fi.gnrlaccount.settmgnt",
      closeYm1: scwin.txt_closeYm1,
      closeYm2: ed_closeYm2.getValue(),
      closeYm3: scwin.txt_closeYm3,
      type: rd_type.getValue().trim(),
      bizDomCd: ed_BizDomCd.getValue(),
      deptCd: lc_deptCd.getValue().trim(),
      deptNm: scwin.txt_deptNm,
      compYm1: scwin.txt_compYm1,
      compYm2: ed_compYm2.getValue(),
      compYm3: scwin.txt_compYm3,
      flag: lc_flag.getValue().trim(),
      coCd: scwin.txtCoCd,
      coClsCd: scwin.txtCoClsCd
    },
    viewerParam: {
      showtree: false,
      zoom: 100,
      useprogressbar: false
    },
    formParam: {
      //
    }
  };
  wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
};

//-------------------------------------------------------------------------
//사업부 조회 
//------------------------------------------------------------------------- 
scwin.f_setBizCd = function () {
  //사업부 조회 
  if (scwin.vCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사인 경우 
    sbm_ds_bizCd.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" + "&queryId=retrieveAcctDeptCdInfo2&param1=&param2=&param7=" + scwin.vCoCd + "&param8=" + scwin.vCoClsCd + "&param9=1";
  } else {
    sbm_ds_bizCd.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" + "&queryId=retrieveAcctDeptCdInfo2&param1=&param2=&param9=1";
  }
  $c.sbm.execute($p, sbm_ds_bizCd);
};

//-------------------------------------------------------------------------
// 콤보데이터 검증
//------------------------------------------------------------------------- 
scwin.f_CheckComboData = function () {};

//-------------------------------------------------------------------------
// 사업영역코드팝업
//-------------------------------------------------------------------------    
scwin.f_BizDomPopUp = function (key) {
  let paramArray = new Object();
  udc_bizDomCdInfo.setSelectId("retrieveBizDomCdInfo");
  paramArray.pCode = ed_BizDomCd;
  paramArray.pName = ed_BizDomNm;
  paramArray.pW = "410";
  paramArray.key = key;
  scwin.f_PopUp(paramArray);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_PopUp = async function (paramArray) {
  let codeObj = paramArray.pCode;
  let nameObj = paramArray.pName;
  let key = "F";
  if (paramArray.key == "onblur") {
    key = "T";
  }
  udc_bizDomCdInfo.cfCommonPopUp(scwin.udc_bizDomCdInfo_callBackFunc, codeObj.getValue(), "", key, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
};
scwin.udc_bizDomCdInfo_callBackFunc = function (rtnList) {
  if (rtnList) {
    if (rtnList[0] == "N/A") return;
    ed_BizDomCd.setValue(rtnList[0]);
    ed_BizDomNm.setValue(rtnList[1]);
    ed_BizDomCd.options.hidVal = rtnList[0];
  } else {
    ed_BizDomCd.setValue("");
    ed_BizDomNm.setValue("");
    ed_BizDomCd.options.hidVal = "";
  }
};
scwin.udc_bizDomCdInfo_onclickEvent = function (e) {
  //if (scwin.f_IsPopUp(ed_BizDomCd, ed_BizDomNm) == false) return;
  scwin.f_BizDomPopUp("click");
};
scwin.udc_bizDomCdInfo_onblurCodeEvent = function (e) {
  //if (scwin.f_IsPopUp(ed_BizDomCd, ed_BizDomNm) == false) return;
  scwin.f_BizDomPopUp("onblur");
};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = function (inObj) {
  let inValue = $c.gus.cfGetValue($p, inObj);
  let hidValue = inObj.options.hidVal;
  if (ed_BizDomCd.getValue() == "") {
    ed_BizDomCd.options.hidVal = "";
  }
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.options.hidVal = "";
    for (let i = 0; i < scwin.f_IsPopUp.arguments.length; i++) {
      $c.gus.cfSetValue($p, scwin.f_IsPopUp.arguments[i], "");
    }
    return false;
  }
  if (inValue == hidValue) return false;
  return true;
};

//-------------------------------------------------------------------------
// 팝업 이벤트에 따라 팝업창의 자동닫기 여부를 반환
//-------------------------------------------------------------------------
scwin.f_EventCheck = function () {};

// 서브미션
scwin.sbm_ds_bizCd_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_bizCd.sort("col1", 0);
  lc_deptCd.setSelectedIndex(0);
  scwin.txt_deptNm = lc_deptCd.getText(true);
  dma_search.set("deptNm", scwin.txt_deptNm);
};
scwin.lc_deptCd_onviewchange = function (info) {
  scwin.txt_deptNm = lc_deptCd.getText(true);
  dma_search.set("deptNm", scwin.txt_deptNm);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'결산년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_closeYm2',style:'width:100px;',displayFormat:'yyyy/MM',ref:'data:dma_search.closeYm2',mandatory:'true',title:'결산년월',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'비교년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_compYm2',style:'width:100px;',ref:'data:dma_search.compYm2',displayFormat:'yyyy/MM',mandatory:'true',title:'비교년월',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_flag',style:'width: 100px;',submenuSize:'fixed',ref:'data:dma_search.flag',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_type',ref:'data:dma_search.type',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조정전'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조정반영'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업영역 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_BizDomCd','ev:onclickEvent':'scwin.udc_bizDomCdInfo_onclickEvent',id:'udc_bizDomCdInfo',nameId:'ed_BizDomNm',popupID:'',selectID:'retrieveBizDomCdInfo',style:'',validTitle:'','ev:onblurCodeEvent':'scwin.udc_bizDomCdInfo_onblurCodeEvent',objTypeCode:'data',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_deptCd',ref:'data:dma_search.deptCd',style:'width: 200px;',submenuSize:'fixed',visibleRowNum:'25',mandatory:'true',title:'사업부',objType:'data','ev:onviewchange':'scwin.lc_deptCd_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_bizCd'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_OzReport',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame ',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''}}]}]}]}]}]}]})