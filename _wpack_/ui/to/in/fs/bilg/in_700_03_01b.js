/*amd /ui/to/in/fs/bilg/in_700_03_01b.xml 17079 1eefed9c2c93146a8376aec6771408bbaa4aad77d4a08bd8e08b866b5b145896 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'brthngRateStDt',name:'입항시작일자'}},{T:1,N:'w2:key',A:{dataType:'text',id:'brthngRateEndDt',name:'입항종료일자'}},{T:1,N:'w2:key',A:{dataType:'text',id:'brthngPortCd',name:'적용항구코드'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_brthngRate',saveRemovedData:'true','ev:ondataload':'scwin.ds_brthngRate_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'alngpierPortCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alngpierTrfClsCd',name:'요율구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptTonCd',name:'적용톤수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptHhCd',name:'적용시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insideOcshipClsCd',name:'내외항선구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alngpierAdptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trf',name:'요율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'orAlngpierTrfClsCd',name:'접안요율구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orAdptTonCd',name:'적용톤코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orAdptHhCd',name:'적용시간코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orInsideOcshipClsCd',name:'내외항선구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orAlngpierAdptDt',name:'접안적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orTrf',name:'요율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_condition',action:'/to.in.fs.bilg.RetrieveBrthngRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_brthngRate","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_brthngRate","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submitdone':'scwin.sbm_condition_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/to.in.fs.bilg.SaveBrthngRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_brthngRate","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.empNo = "";
scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate();
; // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.empNo = memJson.userId;
  const codeOptions = [
  //{ grpCd : "A1041", compID : "gr_gridView2:cdNm" } // 그리드
  {
    grpCd: "TB031",
    compID: "lc_brthngPortCd,gr_brthngRate:alngpierPortCd"
  }, {
    grpCd: "TB032",
    compID: "gr_brthngRate:alngpierTrfClsCd"
  }, {
    grpCd: "TB033",
    compID: "gr_brthngRate:adptTonCd"
  }, {
    grpCd: "TB034",
    compID: "gr_brthngRate:adptHhCd"
  }, {
    grpCd: "TB035",
    compID: "gr_brthngRate:insideOcshipClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_SetDefaultData();
  }, {
    "delay": 50
  });
};
scwin.f_SetDefaultData = function () {
  ed_brthngRateStDt.setValue(scwin.vQryStDt); // 적용일자시작
  ed_brthngRateEndDt.setValue(scwin.vQryEndDt); // 적용일자종료	

  ////임시
  //ed_brthngRateStDt.setValue('20010101');
  //ed_brthngRateEndDt.setValue('20080601');
  ////임시	
};
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_brthngRateStDt, ed_brthngRateEndDt]))) {
    return;
  }
  /*
  ds_condition.NameValue(1, 'brthngRateStDt') = ed_brthngRateStDt.Text;
  ds_condition.NameValue(1, 'brthngRateEndDt') = ed_brthngRateEndDt.Text;
  ds_condition.NameValue(1, 'brthngPortCd') = lux_brthngPortCd.BindColVal;		
  */
  $c.sbm.execute($p, sbm_condition);
};
scwin.f_Save = async function () {
  var row = ds_brthngRate.getRowPosition();
  var chkGrd = await $c.gus.cfValidate($p, [gr_brthngRate]);
  if (!chkGrd) {
    return false;
  }
  var chkAlert = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (chkAlert == true) {
    $c.sbm.execute($p, sbm_save);
    //scwin.f_Retrieve();
  }
};

// ----------------------------------------------------------------------
//행 삭제
//-----------------------------------------------------------------------
scwin.f_delRow = function () {
  if (ds_brthngRate.getRowCount() == 0) {
    $c.win.alert($p, "삭제할 데이타가 없습니다");
  } else {
    //ds_brthngRate.removeRow(gr_brthngRate.getFocusedRowIndex());
    ds_brthngRate.deleteRow(gr_brthngRate.getFocusedRowIndex());
  }
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  ed_brthngRateStDt.setValue(scwin.vQryStDt); // 적용일자시작
  ed_brthngRateEndDt.setValue(scwin.vQryEndDt); // 적용일자종료	
  lc_brthngPortCd.setValue("");
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.sbm_save_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  }
};
scwin.ds_brthngRate_ondataload = function () {
  spa_cnt.setValue(ds_brthngRate.getRowCount());
};
scwin.f_AddRow = function () {
  var selectRow = ds_brthngRate.getRowPosition();
  ds_brthngRate.insertRow();
  ds_brthngRate.setRowPosition(ds_brthngRate.getRowCount() - 1);

  // 행  copy
  ds_brthngRate.setCellData(ds_brthngRate.getRowCount() - 1, "alngpierPortCd", "");
  ds_brthngRate.setCellData(ds_brthngRate.getRowCount() - 1, "alngpierTrfClsCd", "");
  ds_brthngRate.setCellData(ds_brthngRate.getRowCount() - 1, "adptTonCd", "");
  ds_brthngRate.setCellData(ds_brthngRate.getRowCount() - 1, "adptHhCd", "");
  ds_brthngRate.setCellData(ds_brthngRate.getRowCount() - 1, "insideOcshipClsCd", "");
  ds_brthngRate.setCellData(ds_brthngRate.getRowCount() - 1, "alngpierAdptDt", "");
  ds_brthngRate.setCellData(ds_brthngRate.getRowCount() - 1, "trf", "");
  ds_brthngRate.setCellData(ds_brthngRate.getRowCount() - 1, "orAlngpierTrfClsCd", "");
  ds_brthngRate.setCellData(ds_brthngRate.getRowCount() - 1, "orAdptTonCd", "");
  ds_brthngRate.setCellData(ds_brthngRate.getRowCount() - 1, "orAdptHhCd", "");
  ds_brthngRate.setCellData(ds_brthngRate.getRowCount() - 1, "orAlngpierAdptDt", "");
  ds_brthngRate.setCellData(ds_brthngRate.getRowCount() - 1, "delYn", 0);
  spa_cnt.setValue(ds_brthngRate.getRowCount());
};
scwin.f_delRow = function () {
  if (ds_brthngRate.getRowStatus(ds_brthngRate.getRowPosition()) == "C") {
    var row = ds_brthngRate.getRowPosition();
    ds_brthngRate.removeRow(ds_brthngRate.getRowPosition());
    ds_brthngRate.setRowPosition(row - 1);
  } else {
    var row = ds_brthngRate.getRowPosition();
    ds_brthngRate.deleteRow(ds_brthngRate.getRowPosition());
    ds_brthngRate.setRowPosition(row);
  }
};
scwin.f_cancelRow = function () {
  if (ds_brthngRate.getRowStatus(ds_brthngRate.getRowPosition()) == "C") {
    ds_brthngRate.removeRow(ds_brthngRate.getRowPosition());
  } else {
    var row = ds_brthngRate.getRowPosition();
    ds_brthngRate.undoRow(ds_brthngRate.getRowPosition());
    ds_brthngRate.setRowPosition(row);
  }
};
scwin.sbm_condition_submitdone = function (e) {
  if (ds_brthngRate.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_ERR_003);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_cal',refDataMap:'dma_condition',refEdDt:'brthngRateEndDt',refStDt:'brthngRateStDt',style:'',edFromId:'ed_brthngRateStDt',edToId:'ed_brthngRateEndDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data',objTypeFrom:'data',objTypeTo:'data',titleFrom:'적용일자시작',titleTo:'적용일자종료'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용항구 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'lc_brthngPortCd',search:'start',style:'',submenuSize:'auto',ref:'data:dma_condition.brthngPortCd',allOption:'',chooseOption:'true',chooseOptionLabel:'선택'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'접안료요율등록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_brthngRate',grdDownOpts:'{"fileName":"접안료요율현황.xlsx","sheetName" : "접안료요율현황", "type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_brthngRate',id:'gr_brthngRate',style:'',visibleRowNum:'10',rowStatusVisible:'true',gridName:'접안료요율등록'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'항구',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'요율구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'적용톤수(t)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'적용시간(hr)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'내외항선구분',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'적용일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'요율',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'삭제여부',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'OR요율구분',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'OR적용톤수(t)',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',value:'OR적용시간(hr)',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'OR내외항선구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'OR적용일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'OR요율',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'alngpierPortCd',inputType:'select',width:'150',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'alngpierTrfClsCd',inputType:'select',width:'100',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptTonCd',inputType:'select',width:'100',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptHhCd',inputType:'select',width:'100',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'insideOcshipClsCd',inputType:'select',width:'120',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'alngpierAdptDt',inputType:'calendar',width:'100',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trf',inputType:'text',width:'100',textAlign:'left',allowChar:'0-9,.',maxLength:'9.3',displayFormat:'#,###.###',dataType:'number',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'delYn',inputType:'text',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'orAlngpierTrfClsCd',inputType:'text',width:'120',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'orAdptTonCd',inputType:'text',width:'120',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'orAdptHhCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'orInsideOcshipClsCd',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'orAlngpierAdptDt',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'orTrf',displayMode:'label',textAlign:'right',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_brthngRate',id:'udc_bottomGrdBtn',btnCancelYn:'Y',btnDelYn:'N',rowAddUserAuth:'C',rowDelUserAuth:'D',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_delRow',cancelFunction:'scwin.f_cancelRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})