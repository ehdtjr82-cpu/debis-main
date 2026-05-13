/*amd /ui/ds/op/adjmbd/pchsadjmproc/op_402_04_01b.xml 20700 c90bcedf1d482fa3e2ec5873e1e7682e5c2e01cf942f34e30496fa114caa54a6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_HeavyEquipKindEachPurchase',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqKndNm',name:'중기종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqNrmNm',name:'규격(ton)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputHveqCnt',name:'중기수량;(대)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inputShiftCnt',name:'투입Shift;(건)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totInputHh',name:'시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totInputMint',name:'분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totNetOprtHh',name:'시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totNetOprtMint',name:'분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsAdptHh',name:'총 매입;적용시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsPcost',name:'총매입액',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.adjmbd.pchsadjmproc.cmd.RetrieveCooperationCompanyEachHeavyEquipKindEachPurchaseCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_HeavyEquipKindEachPurchase","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_HeavyEquipKindEachPurchase","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_402_04_01b
// 이름     : 협력업체별중기종류별매입조회
// 경로     : 물류/실적현황/작업장 하역/협력업체별중기종류별매입조회
// 작 성 자 : 최지수
// 작 업 일 : 2026-02-27
//==================================================================================================================
scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.lobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); //  물류상위점소코드

scwin.onpageload = function () {
  udc_fromToCalendar.setInitDate(scwin.strCurDate, scwin.strCurDate); //udc달력 형식

  //점소콤보 
  $c.sbm.execute($p, sbm_lobran);
};

//점소콤보 callback
scwin.sbm_lobran_submitdone = function () {
  /*권한으로 변경 -> loginDTO.getLoUpperLobranCd()*/
  // ds_lobran.setCellData(0, "lobranCd", "2AA");
  // ds_lobran.setCellData(0, "lobranNm", "동해지사");
  // acb_lc_lobran.setSelectedIndex(7);
  //매출점소
  acb_lc_lobran.setValue(scwin.lobranCd);
};

//협력업체pop
scwin.udc_comCode_heavy_onclickEvent = function (e) {
  udc_comCode_heavy.cfCommonPopUp(scwin.udc_comCode_heavy_callBackFunc, ed_heavyMachineryClntNo.getValue(), ed_heavyMachineryClntNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
};
//pop callback
scwin.udc_comCode_heavy_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_heavyMachineryClntNo, ed_heavyMachineryClntNm);
  console.log(ret);
};

//udc code 에서 onblur 이벤트
scwin.udc_comCode_heavy_onblurCodeEvent = function (e) {
  var v = (ed_heavyMachineryClntNo.getValue() || "").trim();

  // 값이 없으면 이름 초기화하고 끝
  if (v === "") {
    ed_heavyMachineryClntNm.setValue("");
    return;
  }

  // 값이 있으면(1글자여도) blur 시 자동 검색(버튼 클릭)
  setTimeout(function () {
    btn_triggerU.click();
  }, 0);
};

//udc name 에서 onblur 이벤트
scwin.udc_comCode_heavy_onblurNameEvent = function (e) {
  var v = (ed_heavyMachineryClntNm.getValue() || "").trim();

  // 값 없으면 검색 안 함
  if (v === "") return;
  setTimeout(function () {
    btn_triggerU.click();
  }, 0);
};

//udc name 에서 onviewchange
scwin.udc_comCode_heavy_onviewchangeNameEvent = function (info) {
  var v = (ed_heavyMachineryClntNm.getValue() || "").trim();

  // 이름이 비어있으면 코드 초기화
  if (v === "") {
    ed_heavyMachineryClntNo.setValue("");
    return;
  }
  setTimeout(function () {
    btn_triggerU.click();
  }, 0);
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  // $c.gus.cfInitObjects([cond]);
  //현재날짜 셋팅
  // ed_qryStDt.setValue(scwin.strCurDate);
  // ed_qryEndDt.setValue(scwin.strCurDate);
  //loginDTO.getLoUpperLobranCd() -> 권한
  // acb_lc_lobran.setValue("6AA");
  // acb_lc_lobran.focus();

  //매출점소
  acb_lc_lobran.setValue(scwin.lobranCd);
  $c.gus.cfInitObjects($p, cond, [acb_lc_lobran]);
  udc_fromToCalendar.setInitDate(scwin.strCurDate, scwin.strCurDate); //udc달력 형식
};

//조회
scwin.btn_retrieve_onclick = function (e) {
  var from = (ed_qryStDt.getValue() || "").trim();
  var to = (ed_qryEndDt.getValue() || "").trim();
  if (from === "") {
    $c.gus.cfAlertMsg($p, "작업일자(FROM)은 필수 입력 항목 입니다.");
    ed_qryStDt.focus();
    return;
  }
  if (to === "") {
    $c.gus.cfAlertMsg($p, "작업일자(TO)은 필수 입력 항목 입니다.");
    ed_qryEndDt.focus();
    return;
  }
  if (ed_qryStDt.getValue() != "" && ed_qryEndDt.getValue() != "") {
    if (!$c.gus.cfIsAfterDate($p, ed_qryStDt.getValue(), ed_qryEndDt.getValue(), false)) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      ed_qryStDt.focus();
      return;
    }
  }
  //dataMap set
  dma_search.set("lobranCd", acb_lc_lobran.getValue());
  dma_search.set("clntNo", ed_heavyMachineryClntNo.getValue());
  dma_search.set("qryStDt", ed_qryStDt.getValue());
  dma_search.set("qryEndDt", ed_qryEndDt.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
//조회callback
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_HeavyEquipKindEachPurchase.getRowCount();
  if (nCnt == 0) {
    ds_HeavyEquipKindEachPurchase.removeAll();
    total.setValue(0);
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  } else {
    gr_HeavyEquipKindEachPurchase.setFocusedCell(0, 0);
    total.setValue(nCnt);
  }
};

/** 
 * method
 * @name f_runExcel
 * @description Excel 
 * @param 
 */
scwin.f_runExcel = async function () {
  debugger;
  if (gr_HeavyEquipKindEachPurchase.getRowCount()) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, gr_HeavyEquipKindEachPurchase, {
        fileName: '협력업체별중기종류별매입조회.xlsx',
        sheetName: '협력업체별중기종류별매입조회',
        type: '1',
        removeColumns: '2',
        useDataFormat: true
      });
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'cond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_lobran',search:'start',style:'width:200px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',visibleRowNum:'15'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_qryStDt',edToId:'ed_qryEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_heavyMachineryClntNo',nameId:'ed_heavyMachineryClntNm',id:'udc_comCode_heavy',maxlengthCode:'6',UpperFlagCode:'1',objTypeCode:'data',selectID:'retrieveHeavyMachineryClntInfo','ev:onclickEvent':'scwin.udc_comCode_heavy_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_heavy_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_heavy_onviewchangeNameEvent',refDataCollection:'ds_lobran',code:'lobranCd',btnId:'btn_triggerU',name:'lobranNm','ev:onblurNameEvent':'scwin.udc_comCode_heavy_onblurNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'협력업체별 중기종류별 매입조회',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_HeavyEquipKindEachPurchase',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridDownFn:'scwin.f_runExcel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_HeavyEquipKindEachPurchase',id:'gr_HeavyEquipKindEachPurchase',style:'',visibleRowNum:'5',visibleRowNumFix:'true',focusMode:'row',focusMove:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'협력업체',width:'160',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'중기종류',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'display: none;',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'규격(ton)',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'중기수량<br/>(대)',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'투입Shift<br/>(건)',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'총 투입시간',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'총 순가동시간',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'총 매입<br/>적용시간',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'총매입액',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'display: none;',id:'column64',value:'',displayMode:'label',display:'none'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column51',value:'시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'분',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hveqKndNm',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'display: none;',id:'column65',value:'',displayMode:'label',expression:'display(\'clntNm\') + display(\'hveqKndNm\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hveqNrmNm',inputType:'text',width:'120',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inputHveqCnt',inputType:'text',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inputShiftCnt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totInputHh',inputType:'text',width:'70',textAlign:'right',displayFormat:'H'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totInputMint',inputType:'text',width:'70',textAlign:'right',displayFormat:'M'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totNetOprtHh',inputType:'text',width:'70',textAlign:'right',displayFormat:'H'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totNetOprtMint',inputType:'text',width:'70',textAlign:'right',displayFormat:'M'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totPchsAdptHh',inputType:'text',width:'100',textAlign:'right',displayFormat:'H'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totPchsPcost',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'column65',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'display: none;',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column58',value:'',displayMode:'label',expression:'SUM(\'inputShiftCnt\')',textAlign:'right',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'totInputHh\') + SUM(\'totInputMint\' / 60) + \'H\''}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column56',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'totInputMint\') - SUM((\'totInputMint\' / 60) * 60) + \'M\''}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column55',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'totNetOprtHh\') + SUM(\'totNetOprtMint\' / 60) + \'H\''}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'totNetOprtMint\') + SUM((\'totInputMint\' / 60) * 60) + \'M\''}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column53',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'totPchsAdptHh\') + \'H\''}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column52',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'totPchsPcost\')',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'display: none;',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',expression:'SUM(\'inputShiftCnt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column25',displayMode:'label',value:'',expression:'SUM(\'totInputHh\') + \'H\''}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column24',displayMode:'label',value:'',expression:'SUM(\'totInputMint\') + \'M\''}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column23',displayMode:'label',value:'',expression:'SUM(\'totNetOprtHh\') + \'H\''}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column22',displayMode:'label',value:'',expression:'SUM(\'totNetOprtMint\') + \'M\''}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column21',displayMode:'label',value:'',expression:'SUM(\'totPchsAdptHh\') + \'H\''}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column42',displayMode:'label',textAlign:'right',expression:'SUM(\'totPchsPcost\')',dataType:'number',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})