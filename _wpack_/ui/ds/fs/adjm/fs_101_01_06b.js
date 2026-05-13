/*amd /ui/ds/fs/adjm/fs_101_01_06b.xml 10764 1b7573247188c668af30be25a03037e5444856c31e982cc3478cd3b48f582c32 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkDtSt',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_opAmt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptYm',name:'적용년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opAmt',name:'운영원가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'regId',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.adjm.adjmbdcalc.RetrieveSupplyAmtListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryCond","key":"IN_DS1"},{"id":"dma_queryCond","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_opAmt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.fs.adjm.adjmbdcalc.SaveSupplyAmtListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_opAmt","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strYear = scwin.strCurDate.substring(0, 4);
scwin.strEx = scwin.strCurDate.substring(4);
scwin.strMonth = scwin.strEx.substring(0, 2);
scwin.login = $c.data.getMemInfo($p, "userId");

//-------------------------------------------------------------------------
// 화면 로드시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 호출
  const codeOptions = [{
    grpCd: "FS402",
    compID: "gr_opAmtList:selpchItemCd"
  } // 셀렉트
  ];
  $c.data.setCommonCode($p, codeOptions);
  ica_adptYm.setValue(scwin.strYear + scwin.strMonth);

  // dma_queryCond.set("wrkDtSt", ica_adptYm.getValue());

  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = function (e) {
  dma_queryCond.set("wrkDtSt", ica_adptYm.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.btn_Create_onClick = function (e) {
  for (i = 0; i < ds_opAmt.getTotalRow(); i++) {
    if (ds_opAmt.getCellData(i, "adptYm").trim() == null || ds_opAmt.getCellData(i, "adptYm") == "") {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_003, "적용년월"));
      return false;
    }
    if (ds_opAmt.getCellData(i, "selpchItemCd").trim() == null || ds_opAmt.getCellData(i, "selpchItemCd").trim() == "") {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_003, "매입항목"));
      return false;
    }
    ds_opAmt.setCellData(i, "regId", scwin.login);
  }
  $c.sbm.execute($p, sbm_save);
};
scwin.sbm_save_submitDone = function (e) {
  $c.win.alert($p, MSG_CM_INF_001);
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitDone = function (e) {
  let totalrow = ds_opAmt.getTotalRow();
  spa_totalRow.setValue(totalrow);
};
scwin.rowDelFunction = function () {
  let row = gr_opAmtList.getFocusedRowIndex();
  if (ds_opAmt.getRowStatus(row) == "C") {
    ds_opAmt.removeRow(row);
  } else {
    ds_opAmt.modifyRowStatus(row, "D");
  }
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.runExcel = async function () {
  let options = {
    fileName: "운영원가 내역.xlsx",
    sheetName: "운영원가 내역"
  };
  let grdObj = gr_opAmtList;
  let infoArr = {};
  if (ds_opAmt.getTotalRow() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_adptYm',style:'',objType:'Data',mandatory:'true',validExp:'배차일자시작:yes:length=8',editType:'select'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 운영원가 내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrdBtn',gridID:'gr_opAmtList',gridDownYn:'Y',gridDownFn:'scwin.runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_opAmt',id:'gr_opAmtList',style:'',visibleRowNum:'5',visibleRowNumFix:'true',resize:'true',columnMove:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'적용년월',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'매입항목',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'운영원가',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'regId',width:'70',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'adptYm',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##',maxLength:'6'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'select',style:'',value:'',width:'100',viewType:'icon'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'opAmt',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',dataType:'number',defaultValue:'0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',dataType:'number',defaultValue:'0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',style:'',value:'',width:'70',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udcGrdBottomBtn1',gridID:'gr_opAmtList',addFunction:'scwin.f_add',rowAddUserAuth:'C',rowDelUserAuth:'D',btnDelYn:'N',btnRowDelYn:'Y',rowDelFunction:'scwin.rowDelFunction'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',style:'',type:'button',userAuth:'C',objType:'ctrlBtn','ev:onclick':'scwin.btn_Create_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})