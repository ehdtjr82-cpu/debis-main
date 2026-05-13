/*amd /ui/ps/eq/fixwrkmgnt/fixwrkmgnt/eq_330_01_06b.xml 13095 e76f3fcb52ba464615287f777663aac0f069d75b15788fa0ac453edc5f0f08f7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_work_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'circulPartCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'circulPartNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'장비번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'탈착일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPfmYn',name:'정비여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fix_work_re'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStartDt',name:'탈착시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'탈착종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPfmYn',name:'정비완료여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_lc_wrkPlCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lux_wrkPlCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lc_wrkPlcd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_lc_wrkPlCd',target:'data:json,{"id":"ds_lux_wrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lc_wrkPlcd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.fixwrkmgnt.fixwrkmgnt.RetrieveRepairCircularPartsDetachListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_fix_work_re","key":"IN_DS1"},{"id":"ds_fix_work_list","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_fix_work_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "lc_homeClsCd",
    opt: {
      "range": "1,EQ"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.getWrkPlcd();
};
scwin.ondataload = function () {
  lc_homeClsCd.setSelectedIndex(-1);
  lc_homeClsCd.setValue(scwin.memJson.eqHomeClsCd);
};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  ica_wrkStDt.setValue(scwin.strCurDate);
  ica_wrkEndDt.setValue(scwin.strCurDate);
};
scwin.getWrkPlcd = function () {
  const params = {
    sysCd: "PsCommonEBC",
    queryId: "retriveWrkplList",
    param1: lc_homeClsCd.getValue()
  };

  //데이터셋에 정보설정
  dma_lc_wrkPlCd.setJSON(params);
  $c.sbm.execute($p, sbm_lc_wrkPlcd);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [tb_wrk]);
  if (!ret) return;
  let diff = $c.date.diffDate($p, ica_wrkStDt.getValue(), ica_wrkEndDt.getValue());
  if (diff > 30) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_041, ["조회기간"], ["한달이상"]));
    ica_wrkStDt.focus();
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_wrkStDt.getValue(), ica_wrkEndDt.getValue()) < 0) {
    await $c.win.alert($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ica_wrkStDt.focus();
    return;
  }
  await $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_wrk, null);
  lc_homeClsCd.setSelectedIndex(0);
  lc_wrkPlCd.setValue(scwin.memJson.fixWrkPlCd); // 정비작업장코드
};

//-------------------------------------------							
// 그리드 데이터 엑셀로 다운							
//-------------------------------------------
scwin.f_runExcel = async function () {
  let totCnt = ds_fix_work_list.getRowCount();
  let sheetTitle = "수리순환품탈착목록현황";
  if (totCnt != 0) {
    $c.data.downloadGridViewExcel($p, gr_work_pl, {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle
    });
  } else {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_retrieve_submitdone = function (e) {
  totalRows.setValue(ds_fix_work_list.getRowCount());
  if (ds_fix_work_list.CountRow > 0) {
    $c.gus.cfDisableBtn($p);
  }
};
scwin.sbm_lc_wrkPlcd_submitdone = function (e) {
  lc_wrkPlCd.setValue(scwin.memJson.fixWrkPlCd);
  if (lc_wrkPlCd.getSelectedIndex() == -1) {
    lc_wrkPlCd.setSelectedIndex(0);
  }
};
scwin.lc_homeClsCd_onchange = function (info) {
  scwin.getWrkPlcd();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_wrk',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'탈착일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'wrkStartDt',refDataMap:'dma_fix_work_re',style:'',id:'udc_fromToCalendar1',refEdDt:'wrkEndDt',edFromId:'ica_wrkStDt',mandatoryFrom:'true',edToId:'ica_wrkEndDt',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 150px;',submenuSize:'fixed',displayMode:'value delim label',ref:'',chooseOptionLabel:'$blank',title:'사업부문',emptyItem:'true','ev:onchange':'scwin.lc_homeClsCd_onchange'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정비작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlCd',style:'width: 150px;',submenuSize:'fixed',displayMode:'value delim label',ref:'data:dma_fix_work_re.fixWrkPlCd',title:'정비작업장',visibleRowNum:'25'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_lux_wrkPlCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정비완료여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPfmYn',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:dma_fix_work_re.wrkPfmYn',displayMode:'value delim label',title:'정비완료여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'수리순환품탈착목록 현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridUpYn:'N',gridDownFn:'scwin.f_runExcel',gridID:'gr_work_pl'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_fix_work_list',id:'gr_work_pl',style:'',visibleRowNum:'17',visibleRowNumFix:'true',readOnly:'true',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'부품코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'부품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'장비번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'탈착일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'정비여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'circulPartCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'circulPartNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vehclNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkEndDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fixWrkPfmYn',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})