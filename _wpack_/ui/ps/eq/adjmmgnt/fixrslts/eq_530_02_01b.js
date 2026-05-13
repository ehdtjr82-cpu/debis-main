/*amd /ui/ps/eq/adjmmgnt/fixrslts/eq_530_02_01b.xml 14620 d645e53a8f815a2acc21a36fdc653e68f74706060430fa42d7b2c5aa8d11bdfa */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lc_wrkPlCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_work_list_crs',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixKndCd',name:'정비종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixKndCdSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'day0',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'day1',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'day2',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'day3',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'day4',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'day5',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'day6',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fix_work_re'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'termFrom',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_lc_wrkPlCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_work_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dt',name:'날짜',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixKndCdSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixKndCd',name:'정비종류',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.adjmmgnt.fixrslts.RetrieveDayFixVehiclesCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_fix_work_re","key":"IN_DS1"},{"id":"ds_fix_work_list","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_fix_work_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retriveWrkplList',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_lc_wrkPlCd',target:'data:json,{"id":"ds_lc_wrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retriveWrkplList_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  for (let i = 0; i < 7; i++) {
    gr_work_pl.setColumnVisible("day" + i, false);
  }
  let codeOptions = [{
    grpCd: "ZZ205",
    compID: "lc_homeClsCd",
    opt: {
      "range": "1,EQ"
    }
  }, {
    grpCd: "EQ010",
    compID: "gr_work_pl:fixKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  ica_wrkStDt.setValue($c.date.getServerDateTime($p, "yyyyMM") + "01");
};
scwin.ondataload = function () {
  lc_homeClsCd.setValue(scwin.memJson.eqHomeClsCd); // 정비소속구분코드

  scwin.retriveWrkplList();
  ica_wrkStDt.focus();
};
scwin.retriveWrkplList = function () {
  let params = {
    sysCd: "PsCommonEBC",
    queryId: "retriveWrkplList",
    param1: lc_homeClsCd.getValue()
  };

  //데이터셋에 정보설정
  dma_lc_wrkPlCd.setJSON(params);
  $c.sbm.execute($p, sbm_retriveWrkplList);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [tb_wrk]);
  if (!ret) {
    return false;
  }
  ds_fix_work_list_crs.removeAll();
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_wrk, null);
  lc_homeClsCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// List 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_toExcel1 = async function () {
  let options = {
    fileName: '주간정비차량 조회.xlsx',
    sheetName: '주간정비차량 조회'
  };
  $c.data.downloadGridViewExcel($p, gr_work_pl, options);
};

//-------------------------------------------------------------------------
// 데이터 피봇 가공
//-------------------------------------------------------------------------
scwin.f_pivot = async function () {
  let originData = ds_fix_work_list.getAllJSON();
  if (originData.length == 0) return;
  let dateSet = new Set();
  originData.forEach(function (row) {
    dateSet.add(row.dt);
  });
  let dateArr = Array.from(dateSet).sort();
  for (let i = 3; i < 10; i++) {
    gr_work_pl.setHeaderValue("column" + i, dateArr[i - 3]);
  }
  let pivotMap = {};
  originData.forEach(function (row) {
    let rowKey = row.fixKndCd + "_" + row.fixKndCdSeq;
    if (!pivotMap[rowKey]) {
      pivotMap[rowKey] = {
        "fixKndCd": row.fixKndCd,
        "fixKndCdSeq": row.fixKndCdSeq
      };
    }
    let dateIdx = dateArr.indexOf(row.dt);
    if (dateIdx > -1) {
      pivotMap[rowKey]["day" + dateIdx] = row.vehclNo;
    }
  });
  let resultData = [];
  for (let key in pivotMap) {
    resultData.push(pivotMap[key]);
  }
  resultData.sort(function (a, b) {
    if (a.fixKndCd === b.fixKndCd) {
      return parseInt(a.fixKndCdSeq) - parseInt(b.fixKndCdSeq);
    }
    return a.fixKndCd < b.fixKndCd ? -1 : 1;
  });
  await ds_fix_work_list_crs.setJSON(resultData);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_fix_work_list.getRowCount();
  if (rowCnt == 0) {
    for (let i = 0; i < 7; i++) {
      gr_work_pl.setColumnVisible("day" + i, false);
    }
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
    return;
  } else {
    scwin.f_pivot();
    for (let i = 0; i < 7; i++) {
      gr_work_pl.setColumnVisible("day" + i, true);
    }
    gr_work_pl.setColumnVisible("column3", false);
    gr_work_pl.setColumnVisible("column4", false);
    gr_work_pl.setColumnVisible("column5", false);
    gr_work_pl.setColumnVisible("column6", false);
    gr_work_pl.setColumnVisible("column7", false);
    gr_work_pl.setColumnVisible("column8", false);
    gr_work_pl.setColumnVisible("column9", false);
    totalRows.setValue(gr_work_pl.getTotalRow());
  }
};
scwin.sbm_retriveWrkplList_submitdone = function (e) {
  lc_wrkPlCd.setSelectedIndex(0);
  if (lc_homeClsCd.getValue() == scwin.memJson.eqHomeClsCd) {
    lc_wrkPlCd.setValue(scwin.memJson.fixWrkPlCd); // 정비작업장코드
  }
};
scwin.lc_homeClsCd_onchange = function (info) {
  scwin.retriveWrkplList();
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'sp_title',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_wrk',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조회기준일 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkStDt',style:'',mandatory:'true',displayFormat:'yyyy/MM/dd',editType:'select',ref:'data:dma_fix_work_re.termFrom',title:'조회기준일'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 150px;',submenuSize:'fixed',mandatory:'true','ev:onchange':'scwin.lc_homeClsCd_onchange',chooseOptionLabel:'$blank',ref:'',title:'사업부문',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정비작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlCd',style:'width: 150px;',submenuSize:'fixed',mandatory:'true',ref:'data:dma_fix_work_re.fixWrkPlCd',title:'정비작업장',visibleRowNum:'25'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_lc_wrkPlCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',btnUser:'N',gridID:'gr_work_pl',gridDownFn:'scwin.f_toExcel1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_fix_work_list_crs',id:'gr_work_pl',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'17',visibleRowNumFix:'true',readOnly:'true',fixedColumn:'1',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',value:'정비종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column38',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column3',value:'day1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column4',value:'day2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'day3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column6',value:'day4',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column7',value:'day5',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column8',value:'day6',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'day7',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'select',id:'fixKndCd',displayMode:'value delim label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'fixKndCdSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'day0',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'day1',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'day2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'day3',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'day4',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'day5',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'day6',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})