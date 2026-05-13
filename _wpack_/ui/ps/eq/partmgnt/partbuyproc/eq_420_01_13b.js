/*amd /ui/ps/eq/partmgnt/partbuyproc/eq_420_01_13b.xml 20554 9629bf5d670474dfb5b50f3fd0e7cb9ad87a9170c0ce556235fc3d0e5ff09d71 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClsCd',name:'소속',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inDtFrom',name:'입고일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inDtTo',name:'입고일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inClsCd',name:'입고구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'계정',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq420',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unit',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputOutput',name:'입/출고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspectionNo',name:'검수번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAcctNm',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inUpr',name:'입고단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inQty',name:'입고수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAmt',name:'입고금액',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_combo',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'sysCd',name:'sysCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'queryId',name:'queryId'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param1',name:'param1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param2',name:'param2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param3',name:'param3'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_combo3',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'code'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'name'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_combo2',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'code'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'name'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ps.eq.partmgnt.partbuyproc.RetrievePartsAccountEachInPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"IN_DS1"},{"id":"ds_eq420","key":"OUT_DS1"}',target:'data:json,{"id":"ds_eq420","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchCombo3',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_combo',target:'data:json,{"id":"ds_combo3","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.vEqHomeClsCd = scwin.memJson.eqHomeClsCd; //정비소속구분코드
scwin.currDateFrom = WebSquare.date.getFormattedDate(new Date(), "yyyyMM") + "01";
scwin.currDate = WebSquare.date.getFormattedDate(new Date(), "yyyyMMdd");
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "EQ017",
    compID: "lc_inClsCd"
  }, {
    grpCd: "EQ029",
    compID: "lc_acctCd",
    opt: {
      "range": "1,1"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
  dma_search.set("inDtFrom", scwin.currDateFrom);
  dma_search.set("inDtTo", scwin.currDate);
};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {
  if ("" == scwin.vEqHomeClsCd) {} else {
    lc_homeClsCd.setValue(scwin.vEqHomeClsCd);
  }
  scwin.f_searchCombo3(lc_homeClsCd.getValue());
  lc_homeClsCd.focus();
};

// UDC 셋팅이 이후..
scwin.onUdcCompleted = function () {};
scwin.f_searchCombo3 = function (param1) {
  dma_combo.set("sysCd", "PsCommonEBC");
  dma_combo.set("queryId", "retriveWrkplList");
  dma_combo.set("param1", param1);
  $c.sbm.execute($p, sbm_searchCombo3);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 필수입력항목 체크	  
  let ret = await $c.gus.cfValidate($p, [lc_homeClsCd, lc_fixWrkPlCd, ica_inDtFrom, ica_inDtTo]);
  if (!ret) {
    return false;
  }

  // if( ! await $c.gus.cfIsAfterDate(ica_inDtFrom.getValue(), ica_inDtTo.getValue()) ) {
  // 	$c.win.alert(MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
  // 	ica_inDtFrom.focus();
  // 	return;
  // }

  $c.sbm.execute($p, sbm_search);
};
scwin.sbm_search_submitdone = function (e) {
  var rowCnt = ds_eq420.getRowCount();
  spanTotal.setLabel(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  } else {
    gr_eq420.setFocusedCell(0, 0);
  }
};

//------------------------------------------------------------------------
// 리포트 출력 버튼
//------------------------------------------------------------------------  
///var PGM_ID ="eq_420_01_13b.jsp";
scwin.f_OzReport = async function () {
  //필수입력항목 체크	  
  let ret = await $c.gus.cfValidate($p, [lc_homeClsCd, lc_fixWrkPlCd, ica_inDtFrom, ica_inDtTo]);
  if (!ret) {
    return false;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_inDtFrom.getValue(), ica_inDtTo.getValue())) {
    await $c.win.alert($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ica_inDtFrom.focus();
    return false;
  }
  var data = {
    reportName: "/ps/eq/partmgnt/partbuyproc/eq_420_01_13.ozr",
    odiParam: {
      homeClsCd: lc_homeClsCd.getValue(),
      homeClsNm: lc_homeClsCd.getText(true),
      wrkPlCd: lc_fixWrkPlCd.getValue(),
      wrkPlNm: lc_fixWrkPlCd.getText(true),
      inDtFrom: ica_inDtFrom.getValue(),
      inDtTo: ica_inDtTo.getValue(),
      inClsCd: lc_inClsCd.getValue(),
      inClsNm: lc_inClsCd.getText(true),
      acctCd: lc_acctCd.getValue(),
      acctNm: lc_acctCd.getText(true)
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      printcommand: true,
      zoom: 90 // 배율 설정
    },
    formParam: {}
  };
  scwin.openPopup(data);
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};
scwin.f_Excel = function () {
  let sheetTitle = "부품 계정별 입고현황";
  const options = {
    fileName: sheetTitle + ".xlsx",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_eq420, options);
};
scwin.lc_homeClsCd_onchange = function (info) {
  var vhomeClsCd = info.newValue;
  scwin.f_searchCombo3(vhomeClsCd);
};
scwin.btn_search1_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'',submenuSize:'auto',ref:'data:dma_search.homeClsCd',mandatory:'true','ev:onchange':'scwin.lc_homeClsCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'LO'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고속'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'TR'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixWrkPlCd',style:'',submenuSize:'auto',ref:'data:dma_search.wrkPlCd',mandatory:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_combo3'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'inDtFrom',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar1',refEdDt:'inDtTo',edFromId:'ica_inDtFrom',edToId:'ica_inDtTo',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입고구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_inClsCd',style:'',submenuSize:'auto',ref:'data:dma_search.inClsCd',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_acctCd',style:'',submenuSize:'auto',ref:'data:dma_search.acctCd',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.btn_search1_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'부품계정별입고 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_gr_eq420',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_Excel',gridID:'gr_eq420'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_eq420',id:'gr_eq420',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',fixedColumn:'4',fixedColumnNoMove:'true',autoFit:'none'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'부품코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'부품명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'장비모델명',width:'220'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'입/</br>출고',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'검수번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'계정코드',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'계정',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'거래처',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'거래처명',width:'220'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'입고일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column40',value:'입고단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'입고수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column34',value:'입고금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'partCd',inputType:'text',style:'',value:'',width:'100',textAlign:'left',colMerge:'true',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partNm',inputType:'text',style:'',value:'',width:'200',textAlign:'left',colMerge:'true',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unit',inputType:'text',style:'',value:'',width:'70',textAlign:'center',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelNm',inputType:'text',style:'',value:'',width:'220',textAlign:'left',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inputOutput',inputType:'text',style:'',value:'',width:'60',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inspectionNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inAcctCd',inputType:'text',style:'',value:'',width:'80',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inAcctNm',inputType:'text',style:'',value:'',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'80',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'220',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inDt',value:'',displayMode:'label',textAlign:'center',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'inUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inQty',value:'',displayMode:'label',displayFormat:'#,###,###,###',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'inAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###',dataType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',displayFormat:'#,###,###,###',dataType:'number',textAlign:'right',expression:'sum(\'inUpr\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column39',value:'',displayMode:'label',displayFormat:'#,###,###,###',dataType:'number',textAlign:'right',expression:'sum(\'inQty\')'}},{T:1,N:'w2:column',A:{width:'140',inputType:'expression',style:'',id:'column36',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###',dataType:'number',expression:'sum(\'inAmt\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spanTotal',label:'0',style:'',tagname:'span',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'[단위 : 원]',class:''}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.f_OzReport'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력'}]}]}]}]}]}]}]}]}]})