/*amd /ui/cm/bc/rentloan/zz_900_01_09b.xml 9716 e7d675f1d1be2be4cce22c58fff5b1d3a50d5ed470a26752b2af8d2a6915a8f4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'userIdentifier',name:'userIdentifier',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanNo',name:'rentloanNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanSeq',name:'rentloanSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'clntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'userNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanStDt',name:'rentloanStDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanEndDt',name:'rentloanEndDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmdrDdCnt',name:'rmdrDdCnt',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/cm.bc.rentloan.RetrieveContractExpirationListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_ctrt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/cm.bc.rentloan.UpdateContractExpirationStatusCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_ctrt","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId;
//scwin.userId = "010811";

//메세지용 전역변수 SETTING
//-------------------------------------------------------------------------
// scwin.name : f_OnLoad
// scwin.desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.onpageload = function () {
  scwin.f_defaultValue();
  scwin.f_createHeader();
  scwin.f_Retrieve();
  $c.data.setPopupTitle($p, "계약 만료 내역");
};

//-------------------------------------------------------------------------
// scwin.name : f_defaultValue
// scwin.desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {};

//-------------------------------------------------------------------------
// scwin.name : f_createHeader
// scwin.desc : Grid Header정보 Setting
//-------------------------------------------------------------------------
scwin.f_createHeader = function () {};

//-------------------------------------------------------------------------
//scwin.name : f_Save
//scwin.desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  var cnt = 0;
  for (var i = 0; i <= ds_ctrt.getRowCount(); i++) {
    if (ds_ctrt.getCellData(i, "chk") == "T") {
      cnt++;
    }
  }
  if (cnt > 0) {
    let confirmResult = await $c.win.confirm($p, "확인하시겠습니까?");
    if (confirmResult) {
      $c.sbm.execute($p, sbm_save);
    } else {
      return;
    }
  } else {
    await $c.win.alert($p, "계약변경내역을 선택하세요.");
    return;
  }
};

//-------------------------------------------------------------------------
// scwin.name : f_Retrieve
// scwin.desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  dma_search.set("userIdentifier", scwin.userId);
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  let rowCnt = ds_ctrt.getRowCount();
  spanTotal.setValue(rowCnt);
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.cfGridToExcel = async function () {
  //계약만료현황     
  let result = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (!result) {
    return;
  }
  const options = {
    fileName: "계약만료현황.xlsx",
    sheetName: "계약만료현황"
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_ctrt, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계약 만료 내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_ctrt',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',id:'udc_gr_ctrt',gridDownUserAuth:'X',gridDownFn:'scwin.cfGridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw gvw fix',dataList:'data:ds_ctrt',id:'gr_ctrt',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'30',fixedColumnNoMove:'false',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',value:'선택',width:'70',colSpan:'',rowSpan:'2',checkboxLabel:'선택',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'계약번호',width:'100',colSpan:'',rowSpan:'2',fixColumnWidth:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'거래처번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'거래처명',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'계약등록자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'계약기간',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'계약잔여일수',width:'120',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'시작일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column20',value:'종료일',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'70',fixColumnWidth:'true',readOnly:'false',trueValue:'T',falseValue:'0',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanStDt',inputType:'text',width:'100',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanEndDt',inputType:'text',width:'100',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmdrDdCnt',inputType:'text',width:'120',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확인'}]}]}]}]}]}]}]}]}]})