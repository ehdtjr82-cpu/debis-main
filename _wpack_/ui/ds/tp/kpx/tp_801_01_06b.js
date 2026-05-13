/*amd /ui/ds/tp/kpx/tp_801_01_06b.xml 34167 21b95021696d605ecade049db794196460dd33c89dd83acf42624dd5ed7fe17d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromDt',name:'FROM일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDt',name:'TO 일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'yn',name:'yn여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'custInternalCd',name:'거래처내부코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ediMappingSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'docCd',name:'문서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'itemCd',name:'항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'osideCd',name:'외부코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'동원로엑스_거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'countBaecha',name:'배차건수_합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'countY',name:'배차건수_일치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'countN',name:'배차건수_불일치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'동원로엑스_중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'동원로엑스_운송매출액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAmt',name:'동원로엑스_추가비용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalAmt',name:'동원로엑스_합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kpxClntNm',name:'KPX_거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hamulTpNm',name:'KPX_화물종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWeight',name:'KPX_총중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'relWeight',name:'KPX_실제중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'KPX_운송비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addAmt',name:'KPX_추가비용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'KPX_합계',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'transWrkRsltsNo',name:'동원로엑스_작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'동원로엑스_거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'동원로엑스_실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'동원로엑스_차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발권역코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'동원로엑스_도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orderNo',name:'동원로엑스_오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kpxDlvynm',name:'동원로엑스_납품처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'동원로엑스_중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'동원로엑스_운송매출액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAmt',name:'동원로엑스_추가비용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalAmt',name:'동원로엑스_합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kpxClntNm',name:'KPX_거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'baechaDt',name:'KPX_배차일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workNo',name:'KPX_작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hamulTpNm',name:'KPX_화물종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lentcarNo',name:'KPX_차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toLocNm',name:'KPX_도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toCyNm',name:'KPX_도착CY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWeight',name:'KPX_총중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'relWeight',name:'KPX_총실중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'KPX_운송비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addAmt',name:'KPX_추가비용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'KPX_합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yn',name:'yn여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_coCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'internalCd',name:'내부코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideCdNm',name:'외부코드명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.ds.tp.kpx.RetrieveKpxCalculateInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Query","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDetail',action:'/ncall.ds.tp.kpx.RetrieveKpxCalculateInfoDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Query","key":"IN_DS1"},{"id":"ds_resultDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_resultDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDetail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBizLondCd',action:'/ncall.ds.tp.kpx.RetrieveEdiMappingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_ediMappingSearch","key":"IN_DS1"},{"id":"ds_coCd","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_coCd","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveBizLondCd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자

scwin.docCd = "COMPANY_001"; // 문서코드 - 자회사종류
scwin.wrkPlCd = "999"; // 작업장코드 
scwin.itemCd = "COMPANY"; // 항목코드 
scwin.clntNo = "247741";
scwin.onpageload = function () {
  // EDI MAPPING 조회 조건 SET
  dma_ediMappingSearch.set("clntNo", scwin.clntNo); // 거래처번호
  dma_ediMappingSearch.set("docCd", scwin.docCd); // 문서코드
  dma_ediMappingSearch.set("wrkPlCd", scwin.wrkPlCd); // 작업장코드
  dma_ediMappingSearch.set("itemCd", scwin.itemCd); // 항목코드

  $c.sbm.execute($p, sbm_retrieveBizLondCd); //자회사코드조회
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    ed_fromDt.setValue(scwin.sCurDate);
    ed_toDt.setValue(scwin.sCurDate);

    // 테스트 데이터
    // ed_fromDt.setValue("20150101");
    // ed_toDt.setValue("20150131");
    // lc_coCd.setSelectedIndex(1);
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------  
scwin.f_FieldClear = function () {
  ed_fromDt.setValue(scwin.sCurDate);
  ed_toDt.setValue(scwin.sCurDate);
  lc_coCd.setValue("");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  if (!$c.gus.cfIsAfterDate($p, ed_fromDt.getValue(), ed_toDt.getValue())) {
    $c.gus.cfAlertMsg($p, "비용정산일 조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ed_fromDt.focus();
    return;
  }
  if (ed_fromDt.getValue() == "" || ed_toDt.getValue() == "") {
    $c.win.alert($p, "적용기간을 입력하세요");
    return;
  }
  if (lc_coCd.getValue() == "") {
    $c.win.alert($p, "거래처를 선택하세요");
    return;
  }
  ds_resultDetail.removeAll();
  $c.sbm.execute($p, sbm_retrieve);
  $c.sbm.execute($p, sbm_retrieveDetail);
};

//-------------------------------------------------------------------------    
// 상세조회
//-------------------------------------------------------------------------    
scwin.f_RetrieveDetail = function () {
  $c.sbm.execute($p, sbm_retrieveDetail);
};

//-------------------------------------------------------------------------
// KPX실적비교자료조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows1.setValue(ds_result.getRowCount());
  if (ds_result.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  } else {
    let countBaecha = 0;
    let countY = 0;
    let countN = 0;

    // 0건보다 크면 언더라인 표시
    for (let i = 0; i < ds_result.getRowCount(); i++) {
      countBaecha = ds_result.getCellData(i, "countBaecha");
      if (countBaecha > 0) {
        gr_result.setCellClass(i, "countBaecha", "underline");
      }
      countY = ds_result.getCellData(i, "countY");
      if (countY > 0) {
        gr_result.setCellClass(i, "countY", "underline");
      }
      countN = ds_result.getCellData(i, "countN");
      if (countN > 0) {
        gr_result.setCellClass(i, "countN", "underline");
      }
    }
  }
};

//-------------------------------------------------------------------------
// KPX실적비교자료상세조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieveDetail_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows2.setValue(ds_resultDetail.getRowCount());
  if (ds_resultDetail.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
};

//-------------------------------------------------------------------------
// 자회사종류 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieveBizLondCd_submitdone = function (e) {
  if (ds_coCd.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_052, new Array("자회사종류"));
  } else {
    ds_coCd.insertRow(0);
    ds_coCd.setCellData(0, "osideCd", "");
    ds_coCd.setCellData(0, "osideCdNm", "선택");
    lc_coCd.setSelectedIndex(0);
  }
};

//-------------------------------------------------------------------------
// 월별 Summary 현황 그리드 셀 더블클릭
//-------------------------------------------------------------------------
scwin.gr_result_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "countN") {
    dma_Query.set("yn", "N");
  } else if (columnId == "countY") {
    dma_Query.set("yn", "Y");
  } else {
    dma_Query.set("yn", "");
  }
  if (ds_result.getCellData(rowIndex, "clntNm") != "" && ds_result.getCellData(rowIndex, "kpxClntNm") != "") {
    dma_Query.set("custInternalCd", "1");
  } else if (ds_result.getCellData(rowIndex, "clntNm") == "") {
    dma_Query.set("custInternalCd", "2");
  } else if (ds_result.getCellData(rowIndex, "kpxClntNm") == "") {
    dma_Query.set("custInternalCd", "3");
  }
  scwin.f_RetrieveDetail();
};

//-------------------------------------------------------------------------
// 월별 정산비교 상세현황 그리드 : 추가비용 검색 클릭
//-------------------------------------------------------------------------
scwin.gr_resultDetail_ontextimageclick = function (rowIndex, columnIndex) {
  switch (columnIndex) {
    case 9:
      //etcAmt
      let win_url = "/ui/ds/tp/kpx/tp_801_01_06p.xml";
      let opts = {
        id: "tp_801_01_06p",
        popupName: "정산추가금액입력",
        modal: false,
        type: "browserPopup",
        width: 900,
        height: 480,
        title: "정산추가금액입력"
      };
      let paramObj = {
        transWrkRsltsNo: ds_resultDetail.getCellData(rowIndex, "transWrkRsltsNo"),
        clntNm: ds_resultDetail.getCellData(rowIndex, "clntNm"),
        rsltsStdDt: ds_resultDetail.getCellData(rowIndex, "rsltsStdDt"),
        vehclNo: ds_resultDetail.getCellData(rowIndex, "vehclNo"),
        etcAmt: ds_resultDetail.getCellData(rowIndex, "etcAmt"),
        bilgClntNo: ds_resultDetail.getCellData(rowIndex, "bilgClntNo")
      };
      $c.win.openPopup($p, win_url, opts, paramObj);
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_coCd',style:'width:150px;',submenuSize:'auto',chooseOptionLabel:'선택',ref:'data:dma_Query.bilgClntNo'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_coCd'},E:[{T:1,N:'xf:label',A:{ref:'osideCdNm'}},{T:1,N:'xf:value',A:{ref:'internalCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'dma_Query',refEdDt:'toDt',refStDt:'fromDt',style:'',edFromId:'ed_fromDt',edToId:'ed_toDt',mandatoryFrom:'true',mandatoryTo:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'월별 Summary 현황 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',style:'',templateYn:'N',gridID:'gr_result',grdDownOpts:'{"fileName":"월별 Summary 현황.xlsx","sheetName":"월별 Summary 현황","type":"4+8+16"}',id:'udc_topGrdBtn1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_result',style:'',autoFit:'allColumn',id:'gr_result',visibleRowNum:'4',class:'wq_gvw',readOnly:'true','ev:oncelldblclick':'scwin.gr_result_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column1',value:'배차건수',displayMode:'label',colSpan:'3'}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',id:'column13',value:'동원로엑스',displayMode:'label',colSpan:'5'}},{T:1,N:'w2:column',A:{width:'490',inputType:'text',id:'column7',value:'KPX',displayMode:'label',colSpan:'7'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column40',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',value:'일치',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column38',value:'불일치',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',value:'운송매출액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column34',value:'추가비용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column32',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'화물종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column66',value:'총중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column62',value:'실제중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column58',value:'운송비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column42',value:'추가비용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column46',value:'합계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'countBaecha',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'countY',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'countN',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etcAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'totalAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'kpxClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'hamulTpNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'totWeight',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'relWeight',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'payAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'addAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'totAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column26',displayMode:'label',expression:'sum(\'wt\')',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column25',displayMode:'label',expression:'sum(\'sellAmt\')',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column24',displayMode:'label',expression:'sum(\'etcAmt\')',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column23',displayMode:'label',expression:'sum(\'totalAmt\')',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column68',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum(\'totWeight\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column64',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum(\'relWeight\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column60',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum(\'payAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column44',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum(\'addAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column48',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum(\'totAmt\')',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'월별 정산비교 상세현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section2',style:'',templateYn:'N',gridID:'gr_resultDetail',id:'udc_topGrdBtn2',grdDownOpts:'{"fileName":"월별 정산비교 상세현황.xlsx","sheetName":"월별 정산비교 상세현황","type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_resultDetail',id:'gr_resultDetail',style:'',visibleRowNum:'6',visibleRowNumFix:'true',readOnly:'true','ev:ontextimageclick':'scwin.gr_resultDetail_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'동원로엑스',width:'770',colSpan:'11'}},{T:1,N:'w2:column',A:{width:'840',inputType:'text',id:'column85',value:'KPX',displayMode:'label',colSpan:'12'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column40',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column39',value:'실적<br/>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column38',value:'작업<br/>지시<br/>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'차량<br/>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column36',value:'도착지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'오더<br/>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column34',value:'납품처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column33',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column32',value:'운송<br/>매출액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'추가<br/>비용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column90',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column86',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column82',value:'배차<br/>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column78',value:'작업<br/>지시<br/>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column74',value:'화물<br/>종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',value:'차량<br/>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column66',value:'도착지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column62',value:'도착<br/>CY',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column58',value:'총중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column54',value:'총실중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column42',value:'운송비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column46',value:'추가<br/>비용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column50',value:'합계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transWrkRsltsNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'orderNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'kpxDlvynm',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',width:'90',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',width:'90',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'etcAmt',inputType:'textImage',width:'100',readOnly:'false',dataType:'number',displayFormat:'#,##0',textAlign:'right',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'totalAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'kpxClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'baechaDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'workNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hamulTpNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lentcarNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'toLocNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'toCyNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'totWeight',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'relWeight',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'payAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'addAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'totAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column23',displayMode:'label',expression:'sum(\'wt\')',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column22',displayMode:'label',expression:'sum(\'sellAmt\')',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column21',displayMode:'label',expression:'sum(\'etcAmt\')',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column92',displayMode:'label',expression:'sum(\'totalAmt\')',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column88',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column84',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column80',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column76',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column68',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column64',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column60',displayMode:'label',expression:'sum(\'totWeight\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column56',displayMode:'label',expression:'sum(\'relWeight\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column44',displayMode:'label',expression:'sum(\'payAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column48',displayMode:'label',expression:'sum(\'addAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column52',displayMode:'label',expression:'sum(\'totAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})