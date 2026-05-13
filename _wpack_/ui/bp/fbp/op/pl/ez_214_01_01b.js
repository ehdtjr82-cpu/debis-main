/*amd /ui/bp/fbp/op/pl/ez_214_01_01b.xml 18522 c2a61421162a82a0111d8315b6cc9eef9c8bd871a80b99407416af733d635128 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'type1',name:'타입1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'type2',name:'타입2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'onplace',name:'상차지권역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'offplace',name:'하차지권역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tons',name:'톤수1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tone',name:'톤수 2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dates',name:'조회기간1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'datee',name:'조회기간2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'사용자ID',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'onplace',name:'상차지권역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'offplace',name:'하차지권역',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchCnt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dates',name:'조회기간1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'datee',name:'조회기간2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_openfl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'regDd',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regCnt',name:'등록건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ofcNm',name:'영업소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocTyp',name:'배차타입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispPhoneNo',name:'문의전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocateYn',name:'배차여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goods',name:'품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ton',name:'톤',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPosNm',name:'상차지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onDt',name:'상차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPosNm',name:'하차지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDt',name:'하차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expDt',name:'수출일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmOrdNo',name:'동부에서 의뢰한 화물의 오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez214Idx',name:'공개화물인덱스',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_openflCnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cnt1',name:'건수1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt2',name:'건수2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt3',name:'건수3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/ncall.bp.fbp.op.pl.RetrieveFlPoolCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_search',target:'data:json,{"id":"ds_openfl","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveCnt',action:'/ncall.bp.fbp.op.pl.RetrieveFlPoolCntCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_searchCnt',target:'data:json,{"id":"ds_openflCnt","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveCnt_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 1. TOBE : ez_215_01_01p.jsp 삭제되어서 운송신청 버튼 삭제 함

scwin.UserID = $c.data.getMemInfo($p, "userId"); //사용자ID
scwin.vToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); //현재일자

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    ed_dates1.setValue(scwin.vToDate);
    ed_dates2.setValue(scwin.vToDate);

    //테스트 데이터
    // ed_dates1.setValue("20260301");
    // ed_dates2.setValue("20260311");

    scwin.SearchData('1');
  }, {
    "delay": 100
  });
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.SearchData = function (type) {
  if (ed_dates1.getValue() > ed_dates2.getValue()) {
    $c.win.alert($p, "조회 기간 설정이 잘못되었습니다.");
    return;
  }

  // 화물수조회
  scwin.SearchDataCnt();
  ds_openfl.setJSON([]);
  dma_search.set("type1", type);
  dma_search.set("type2", "");

  // 상차지권역
  if (dma_search2.get("onplace") == "1") {
    // udc_commonCombo에 없는값을 SET 할수 없기때문에 dataMap을 하나더 생성함
    dma_search.set("onplace", "0");
  }

  // 하차지권역
  if (dma_search2.get("offplace") == "1") {
    dma_search.set("offplace", "0");
  }

  // 화물톤수
  if (ed_tons1.getValue() != "" && ed_tons2.getValue() != "") {
    dma_search.set("tons", parseInt(ed_tons1.getValue() * 1000));
    dma_search.set("tone", parseInt(ed_tons2.getValue() * 1000));
  }
  dma_search.set("userId", scwin.UserID);

  //테스트 데이터
  dma_search.set("userId", "pjk1030"); // 사용자 아이디

  $c.sbm.execute($p, sbm_Retrieve);
};

//-------------------------------------------------------------------------
// 화물수조회
//-------------------------------------------------------------------------
scwin.SearchDataCnt = function () {
  ds_openflCnt.setJSON([]);
  dma_searchCnt.set("dates", ed_dates1.getValue().substring(0, 6) + "01");
  dma_searchCnt.set("datee", ed_dates2.getValue().substring(0, 6) + "31");
  $c.sbm.execute($p, sbm_RetrieveCnt);
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_Retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows.setValue(ds_openfl.getRowCount());

  // 미배차일때 폰트 색상을 blue로 SET
  var allocateYn = "";
  for (var row = 0; row < ds_openfl.getRowCount(); row++) {
    allocateYn = ds_openfl.getCellData(row, "allocateYn");
    for (var col = 0; col < ds_openfl.getTotalCol(); col++) {
      if (allocateYn == "미배차") {
        gr_fl.setCellStyle(row, col, "color", "blue");
      } else {
        gr_fl.setCellStyle(row, col, "color", "black");
      }
    }
  }
};

//-------------------------------------------------------------------------
// 화물수조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_RetrieveCnt_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var cnt1 = 0;
  var cnt2 = 0;
  var cnt3 = 0;
  if (ds_openflCnt.getRowCount() > 0) {
    cnt1 = ds_openflCnt.getCellData(0, "cnt1");
    cnt2 = ds_openflCnt.getCellData(0, "cnt2");
    cnt3 = ds_openflCnt.getCellData(0, "cnt3");
  }
  tbx_yearMonth.setValue(ed_dates1.getValue().substring(0, 4) + "년 " + ed_dates1.getValue().substring(4, 6) + "월");
  var allOpen = "";
  if (ed_dates1.getValue().substring(0, 6) == ed_dates2.getValue().substring(0, 6)) {
    allOpen = "전체 공개 화물 수 : ";
  } else {
    allOpen = "부터  ";
    allOpen += ed_dates2.getValue().substring(0, 4) + "년" + ed_dates2.getValue().substring(4, 6) + "월";
    allOpen += "까지  ";
    allOpen += "전체 공개 화물 수 : ";
  }
  tbx_allOpen.setValue(allOpen); // 전체 공개 화물 수 타이틀
  tbx_allOpenCnt.setValue(cnt1); // 전체 공개 화물 수
  tbx_unAlloccarCnt.setValue(cnt2); // 미배정 화물 수
  tbx_alloccarCnt.setValue(cnt3); // 배정 화물 수
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_commonCombo',type:'page',variableClone:'true',src:'/cm/udc/commonCombo.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상차지권역',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_commonCombo',A:{code:'onplace',cond:'onOffDistrict',id:'udc_prefDistrict1',refDataCollection:'dma_search2',style:'width:250px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물톤수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_tons1',placeholder:'',style:'width:70px;',maxlength:'4'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_tons2',placeholder:'',style:'width:70px;',maxlength:'4'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'톤(ton)',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하차지권역',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_commonCombo',A:{code:'offplace',cond:'onOffDistrict',id:'udc_prefDistrict2',refDataCollection:'dma_search2',style:'width:250px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_dates',refDataMap:'dma_search',refEdDt:'datee',refStDt:'dates',style:'',objTypeTo:'Data',objTypeFrom:'Data',edFromId:'ed_dates1',edToId:'ed_dates2'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물검색',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_retrieve',type:'button',class:'btn','ev:onclick':'scwin.SearchData(\'1\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체 공개화물'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_retrieveUnAlloccar',type:'button',class:'btn','ev:onclick':'scwin.SearchData(\'2\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미배차 공개화물'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_retrieveAlloccar',type:'button',class:'btn','ev:onclick':'scwin.SearchData(\'3\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배차된 공개화물'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_yearMonth',label:'',class:''}},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_allOpen',label:'전체 공개 화물 수 :',class:''}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_allOpenCnt',label:'0',class:'',dataType:'number',displayFormat:'#,##0'}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_unAlloccar',label:'미배정 화물 수 :',class:''}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_unAlloccarCnt',label:'0',class:'',dataType:'number',displayFormat:'#,##0'}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_alloccar',label:'배정 화물 수 :',class:''}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_alloccarCnt',label:'0',class:'',dataType:'number',displayFormat:'#,##0'}}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'gr_fl',style:'',templateYn:'N',gridUpYn:'N',gridID:'gr_fl',grdDownOpts:'{"fileName":"공개화물목록.xlsx","sheetName":"공개화물목록"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_openfl',style:'',autoFit:'allColumn',id:'gr_fl',visibleRowNum:'15',class:'wq_gvw',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column1',value:'상태',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column17',value:'소속점',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column15',value:'상차지',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column13',value:'하차지',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column11',value:'신청',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'상차일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'하차일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'마감일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column7',value:'톤수<br/>(T)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',value:'담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'문의전화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'화물종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'동부오더No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column23',value:'품목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'등록일',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'allocateYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'ofcNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'offPosNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'onPosNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'regCnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'expDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ton',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'picNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dispPhoneNo ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'allocTyp',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dmOrdNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'goods',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'picNm2',displayMode:'label',expression:'display(\'picNm\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regDd',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]}]}]}]})