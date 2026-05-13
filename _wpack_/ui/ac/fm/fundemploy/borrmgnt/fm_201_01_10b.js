/*amd /ui/ac/fm/fundemploy/borrmgnt/fm_201_01_10b.xml 5310 a9be6ea96f4b2c11613348b4b9614b9c098894f5469eb10fa4ff04bf640edeec */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'stDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'endDt',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.currDate = WebSquare.date.getFormattedDate(new Date(), "yyyyMMdd");
scwin.currYyyyMM = WebSquare.date.getFormattedDate(new Date(), "yyyyMM");
scwin.onpageload = function () {};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {};

/**
 * UDC 셋팅이 이후..
 */
scwin.onUdcCompleted = function () {
  ica_stDt.setValue(scwin.currYyyyMM + "01");
  ica_endDt.setValue(scwin.currYyyyMM + $c.date.getLastDateOfMonth($p, scwin.currYyyyMM));
};

//-------------------------------------------------------------------------
// 오즈 검색 후 결과를 화면 하단에 표시
//-------------------------------------------------------------------------
scwin.f_Search = async function () {
  // if (!$c.gus.cfValidate([tbl_search])) return;
  if (!(await $c.gus.cfValidate($p, [ica_stDt, ica_endDt]))) return;

  // // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  // var odiParam;
  // odiParam = new ODIParam("fm_201_01_10");

  // odiParam.add("ST_DT", ica_stDt.getValue());
  // odiParam.add("END_DT", ed_endDt.getValue());

  // // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  // var formParam = new FormParam() ;

  // // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  // var viewerParam = new ViewerParam();
  // viewerParam.add("print.mode","silent"); // 인쇄 옵션창 표시 없이 바로 출력

  // iframe     viewer        OZR 경로 및 파일명  ODI파라미터 뷰어파라미터       폼파라미터 
  // cfOZEmbedPreview("ozFrame", "myozviewer", "/ac/fm/fundemploy/borrmgnt/fm_201_01_10.ozr", odiParam, viewerParam, formParam);

  let data = {
    reportName: "/ac/fm/fundemploy/borrmgnt/fm_201_01_10.ozr",
    odiParam: {
      // 발행 일시도 명시적으로 전달 (OZ Viewer 기본 값 방지)
      ST_DT: ica_stDt.getValue(),
      END_DT: ica_endDt.getValue()
    },
    viewerParam: {
      mode: "silent"
    },
    formParam: {}
  };
  wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ica_stDt',edToId:'ica_endDt',id:'udc_stDt',mandatoryFrom:'true',mandatoryTo:'true',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.f_Search'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''}}]}]}]}]}]}]})