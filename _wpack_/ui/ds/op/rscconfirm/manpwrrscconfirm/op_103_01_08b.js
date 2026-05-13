/*amd /ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_08b.xml 18406 78173b612b3278a705ea7f18707217395ba56a532af84084a5a1af2e3d7afc4b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtlOccptypeCd',name:'상세직종코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_WelfareSalaryPresentCondition',saveRemovedData:'true','ev:ondataload':'scwin.ds_WelfareSalaryPresentCondition_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'foodAmt',name:'식대',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trffcCostAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bfeeAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etc1Amt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etc2Amt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'overtimeAmt',name:'특근비금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'총합계금액',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranClsCd',name:'물류점소구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveWelfareSalaryPresentCondition',action:'/ds.op.rscconfirm.manpwrrscconfirm.RetrieveWelfareSalaryPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_WelfareSalaryPresentCondition","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_WelfareSalaryPresentCondition","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveWelfareSalaryPresentCondition_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

scwin.loUpperLobranCd = "";
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.loUpperLobranCd = memJson.loUpperLobranCd;
  const codeOptions = [{
    grpCd: "OP161",
    compID: "lc_occptypeCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  lc_lobran.setValue(scwin.loUpperLobranCd);
  lc_lobran.focus();
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    ///임시

    ///임시
    ed_FromDate.setValue(scwin.vQryStDt);
    ed_ToDate.setValue(scwin.vCurDate);
    scwin.retrieveLobran();
  }, {
    "delay": 50
  });
};
scwin.retrieveLobran = function () {
  $c.sbm.execute($p, sbm_lobran);
};

//-------------------------------------------------------------------------
// RETRIEVE
//-------------------------------------------------------------------------
scwin.f_qeryList = async function () {
  //점소, 직종코드, 조회기간(from ~ to);
  var chk = await $c.gus.cfValidate($p, [lc_lobran, lc_occptypeCd, ed_FromDate, ed_ToDate]);
  if (!chk) {
    return;
  }

  //Data check
  if (ed_FromDate.getValue() > ed_ToDate.getValue()) {
    $c.win.alert($p, MSG_CM_ERR_039);
    ed_ToDate.focus();
    return;
  }

  //lobran check
  if (lc_lobran.getValue() == null || lc_lobran.getValue() == "") {
    $c.win.alert($p, MSG_CM_ERR_039);
    return;
  }

  //Save Seach Condition at DataSet;
  dma_search.setEmptyValue();
  //ds_search.AddRow();

  dma_search.set("lobranCd", lc_lobran.getValue()); //점소;
  dma_search.set("dtlOccptypeCd", lc_occptypeCd.getValue()); //직종;
  dma_search.set("qryStDt", ed_FromDate.getValue()); // 조회기간 시작일;
  dma_search.set("qryEndDt", ed_ToDate.getValue()); // 조회기간 완료일;

  $c.sbm.execute($p, sbm_RetrieveWelfareSalaryPresentCondition);
};

//-------------------------------------------------------------------------
// FIELD CLEAR
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  lc_lobran.focus(); //점소;
};
scwin.sbm_lobran_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_lobran.setJSON(e.responseJSON.GAUCE);
    var cnt = ds_lobran.getRowCount();
    if (cnt == 0) {
      $c.win.alert($p, "점소 자료 조회에 실패하였습니다");
      return;
    } else {
      lc_lobran.setValue(scwin.loUpperLobranCd);
    }
  }
};
scwin.btn_init_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_qeryList();
};
scwin.sbm_RetrieveWelfareSalaryPresentCondition_submitdone = function (e) {
  if (ds_WelfareSalaryPresentCondition.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, "[기능직직종별복리후생비현황조회] " + MSG_CM_ERR_003);
    return;
  }
  spa_cnt.setValue(ds_WelfareSalaryPresentCondition.getRowCount());
};
scwin.ds_WelfareSalaryPresentCondition_ondataload = function () {
  var options = {};
  options.sortIndex = "lobranNm dtlOccptypeNm";
  options.sortOrder = "1 1"; //오른차순:"1", 내림차순"-1"
  ds_WelfareSalaryPresentCondition.multisort(options);
  //ds_master.reform();	
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{editType:'select',id:'lc_lobran',style:'width:200px;',submenuSize:'auto',search:'start',allOption:'',chooseOption:'',ref:'',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직종 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'lc_occptypeCd',style:'width:150px;',submenuSize:'auto',search:'start',chooseOption:'true',ref:'',disabled:'false',chooseOptionLabel:'전체',allOption:''},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조회기간 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'qryStDt',style:'',id:'udc_fromToCalendar3',refEdDt:'qryEndDt',refDataMap:'',edFromId:'ed_FromDate',edToId:'ed_ToDate',mandatoryFrom:'true',mandatoryTo:'true',validChkYn:'Y',titleFrom:'조회기간시작일',titleTo:'조회기간종료일'}},{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'기능직직종별복리후생비현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_WelfareSalaryPresentCondition',grdDownOpts:'{"fileName":"기능직직종별복리후생비현황.xlsx","sheetName" : "기능직직종별복리후생비현황", "type":"4+8+16","useSubTotal":"true", "useSubTotalData" : "true"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_WelfareSalaryPresentCondition',focusMode:'row',id:'gr_WelfareSalaryPresentCondition',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',columnMove:'false',resize:'true',readOnly:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'점소',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'직종',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column1',inputType:'text',removeBorderStyle:'false',width:'600',value:'복리후생비',colSpan:'6',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'식대',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'교통비',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'목욕비',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'기타1',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'기타2',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'합계',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'lobranNm',value:'',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'dtlOccptypeNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'foodAmt',inputType:'text',removeBorderStyle:'false',width:'100',sortable:'false',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'trffcCostAmt',inputType:'text',removeBorderStyle:'false',width:'100',sortable:'false',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bfeeAmt',inputType:'text',removeBorderStyle:'false',width:'100',sortable:'false',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'etc1Amt',inputType:'text',removeBorderStyle:'false',width:'100',sortable:'false',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'etc2Amt',inputType:'text',removeBorderStyle:'false',width:'100',sortable:'false',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'sumAmt',inputType:'text',removeBorderStyle:'false',width:'100',sortable:'false',dataType:'number',displayFormat:'#,##0',textAlign:'right'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'lobranNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row9'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column80',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column79',value:'',displayMode:'label',expression:'sum(\'foodAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column78',value:'',displayMode:'label',expression:'sum(\'trffcCostAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',expression:'sum(\'bfeeAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column76',value:'',displayMode:'label',expression:'sum(\'etc1Amt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column75',value:'',displayMode:'label',expression:'sum(\'etc2Amt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column74',value:'',displayMode:'label',expression:'sum(\'sumAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row8'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column73',value:'총계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column71',value:'',displayMode:'label',expression:'sum(\'foodAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column70',value:'',displayMode:'label',expression:'sum(\'trffcCostAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',expression:'sum(\'bfeeAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column68',value:'',displayMode:'label',expression:'sum(\'etc1Amt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column67',value:'',displayMode:'label',expression:'sum(\'etc2Amt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column66',value:'',displayMode:'label',expression:'sum(\'sumAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_cnt',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})