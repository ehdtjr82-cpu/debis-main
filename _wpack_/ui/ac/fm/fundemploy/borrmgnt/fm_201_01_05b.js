/*amd /ui/ac/fm/fundemploy/borrmgnt/fm_201_01_05b.xml 5948 779f7089f28d983695202a6bcf3dfbaca8e34d41be84d4fbfdbea633f1f0eb2b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.todayYearMonth = $c.date.getServerDateTime($p, "yyyyMM"); // 현재 년월
scwin.strFromDate = scwin.todayYearMonth + "01"; //현재 년월의 시작일자
scwin.strToDate = scwin.todayYearMonth + $c.date.getLastDateOfMonth($p, scwin.todayYearMonth); // 현재 년월의 끝날짜

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ed_startprtDt.setValue(scwin.strFromDate);
  ed_endprtDt.setValue(scwin.strToDate);
  ed_startprtDt.focus();
};

//-------------------------------------------------------------------------
// 오즈 검색 후 결과를 화면 하단에 표시
//-------------------------------------------------------------------------
scwin.f_Search = async function (e) {
  if (!(await $c.gus.cfIsAfterDate($p, ed_startprtDt.getValue().trim(), ed_endprtDt.getValue().trim()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_startprtDt.focus();
    return false;
  }
  var odiParam = "";
  var reportParam = "";
  if (lc_prtOrd.getValue() == "01") {
    reportParam = "/ac/fm/fundemploy/borrmgnt/fm_201_01_05_01.ozr";
    odiParam = "fm_201_01_05";
  } else if (lc_prtOrd.getValue() == "02") {
    reportParam = "/ac/fm/fundemploy/borrmgnt/fm_201_01_05_02.ozr";
    odiParam = "fm_201_01_05_02";
  }
  let data = {
    odiName: odiParam,
    reportName: reportParam,
    odiParam: {
      dateFrom: ed_startprtDt.getValue(),
      dateTo: ed_endprtDt.getValue()
    },
    viewerParam: {
      useprogressbar: true,
      // 프로그레스바 쓸지 말지
      mode: "silent"
    },
    formParam: {}
  };
  wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:40px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',style:'',id:'udc_prtDt',refEdDt:'',refDataMap:'',edFromId:'ed_startprtDt',edToId:'ed_endprtDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발행순서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col5'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 200px;',allOption:'',id:'lc_prtOrd',class:'',direction:'auto',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'은행별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기간별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Search',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame ',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''}}]}]}]}]}]}]})