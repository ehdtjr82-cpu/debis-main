/*amd /ui/il/airout/aobl/ar_104_01_03b.xml 15497 e70679c2c48a00c65429ab4e675774ee3cd645414e992ebc985fa339254625f4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_HouseDimensionSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'Consol No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'B/L번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_HouseDimensionInfo',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_HouseDimensionInfo_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'Consol No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'widt',name:'',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'leng',name:'',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'heig',name:'',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pkgs',name:'',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vwht',name:'',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'입력일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'0',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.airout.aobl.RetrieveAirExpHouseDimensionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_HouseDimensionSearch","key":"IN_DS1"},{"id":"ds_HouseDimensionInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_HouseDimensionInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.airout.aobl.SaveAirExpHouseDimensionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_HouseDimensionInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
//scwin.strPreDate = WebSquare.date.dateAdd(scwin.vCurDate, -2);
scwin.strPreDate = $c.date.addMonth($p, scwin.vCurDate, -1);
scwin.hid_kcomcd = "DBEX";
scwin.hid_mhno = "DBEX";
scwin.userId = "";
scwin.blno = "";
scwin.mhno = "";
scwin.onpageload = function () {
  console.log($c.data.getParameter($p));
  scwin.params = $c.data.getParameter($p);
  scwin.blno = scwin.params.blno;
  scwin.mhno = scwin.params.mhno;
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.userId = memJson.userId;
  cnd_ed_blno.setValue(scwin.blno);
  //임시
  //test houst b/l : DBE0011480
  //test scwin.mhno = "DBE0011480";
  //임시
  scwin.f_Set("Init");
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.ds_HouseDimensionInfo_oncelldatachange = function (info) {
  // {realRowIndex: 2, rowIndex: 2, colID: 'leng', oldValue: '4', newValue: '5'}
  console.log(info);
  var row = ds_HouseDimensionInfo.getRowPosition();
  var varWidt = ds_HouseDimensionInfo.getCellData(row, "widt");
  var varHeig = ds_HouseDimensionInfo.getCellData(row, "heig");
  var varLeng = ds_HouseDimensionInfo.getCellData(row, "leng");
  var varPkgs = ds_HouseDimensionInfo.getCellData(row, "pkgs");
  console.log(varWidt + "    " + varHeig + "    " + varLeng + "    " + varPkgs);
  console.log(parseFloat(varWidt * varHeig * varLeng * varPkgs) / 6000);
  ds_HouseDimensionInfo.setCellData(row, "vwht", parseFloat(varWidt * varHeig * varLeng * varPkgs) / 6000);
};

//---------------------------------------------------------
// 화면세팅
//---------------------------------------------------------
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "Init":
      //초기화,신규            	
      //$c.gus.cfDisableBtnOnly([btn_Save, btn_AddRow, btn_DeleteRow, btn_UndoRow]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, udc_row]);
      cnd_ed_blno.focus();
      break;
    case "Retrieve":
      //조회모드	
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_AddRow, btn_DeleteRow, btn_UndoRow]);
      break;
    case "Save":
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_AddRow, btn_DeleteRow, btn_UndoRow]);
      break;
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  // HBLTEST0032
  dma_HouseDimensionSearch.set("kcomcd", scwin.hid_kcomcd);
  dma_HouseDimensionSearch.set("blno", cnd_ed_blno.getValue().trim());
  //ds.NameValue(ds.RowPosition,"mhno") = hid_mhno.value.trim();
  //tr_retrieve.post();
  $c.sbm.execute($p, sbm_retrieve);
};

//---------------------------------------------------------
// 저장
//---------------------------------------------------------  
scwin.f_Save = async function () {
  //scwin.f_Retrieve();
  var chk = await scwin.f_ReqFieldChk();
  if (chk) {
    //tr_save.Post();
    $c.sbm.execute($p, sbm_save);
    //$c.win.alert(E_MSG_CM_INF_001);   //성공적으로 저장했습니다.
    //$c.win.alert("Data was saved successfully.");
  }
};

//-------------------------------------------------------------------------
// Validate check
//-------------------------------------------------------------------------
scwin.f_ReqFieldChk = async function () {
  var chk = await $c.gus.cfValidate($p, [tb_retrieve]);
  if (!chk) {
    return false;
  }
  return true;
};

//행추가
scwin.f_AddRow = function () {
  ds_HouseDimensionInfo.insertRow();
  gr_masterList.setFocusedCell(ds_HouseDimensionInfo.getRowCount() - 1, 0);
  ds_HouseDimensionInfo.setCellData(ds_HouseDimensionInfo.getRowPosition(), "kcomcd", scwin.hid_kcomcd);
  ds_HouseDimensionInfo.setCellData(ds_HouseDimensionInfo.getRowPosition(), "blno", cnd_ed_blno.getValue());
  ds_HouseDimensionInfo.setCellData(ds_HouseDimensionInfo.getRowPosition(), "mhno", scwin.mhno);
  ds_HouseDimensionInfo.setCellData(ds_HouseDimensionInfo.getRowPosition(), "updid", scwin.userId);
};

//-------------------------------------------------------------------------
// function name : f_DelRow
// function desc : 그리드  행삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = function () {
  if (ds_HouseDimensionInfo.getRowStatus(ds_HouseDimensionInfo.getRowPosition()) == "C") {
    ds_HouseDimensionInfo.removeRow(ds_HouseDimensionInfo.getRowPosition());
    ds_HouseDimensionInfo.setRowPosition(ds_HouseDimensionInfo.getRowCount() - 1);
  } else {
    var row = ds_HouseDimensionInfo.getRowPosition();
    ds_HouseDimensionInfo.deleteRow(ds_HouseDimensionInfo.getRowPosition());
    ds_HouseDimensionInfo.setRowPosition(row);
  }
};

//행취소
scwin.f_UndoRow = function () {
  if (ds_HouseDimensionInfo.getRowStatus(ds_HouseDimensionInfo.getRowPosition()) == "C") {
    ds_HouseDimensionInfo.removeRow(ds_HouseDimensionInfo.getRowPosition());
  } else {
    ds_HouseDimensionInfo.undoRow(ds_HouseDimensionInfo.getRowPosition());
  }
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.sbm_retrieve_submitdone = function (e) {
  spa_cnt.setValue(ds_HouseDimensionInfo.getRowCount());
};
scwin.sbm_save_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, E_MSG_CM_INF_001); //성공적으로 저장했습니다.
    scwin.f_Retrieve();
  }
};
scwin.excelDown = async function () {
  const options = {
    fileName: "프로그램목록.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "프로그램목록",
    startRowIndex: 0,
    startColumnIndex: 0,
    rowNumVisible: true
  };

  // 타이틀
  const infoArr = [];
  var chk = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (chk) {
    $c.data.downloadGridViewExcel($p, gr_masterList, options, infoArr);
  }
};
scwin.btn_trigger1_onclick = function (e) {
  cnd_ed_blno.setValue("");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_blno',placeholder:'',style:'width:150px;','ev:onkeyup':'scwin.onkeyup',allowChar:'0-9.A-Z,a-z',maxlength:'20'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.btn_trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Dimension',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_masterList',gridDownFn:'scwin.excelDown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_HouseDimensionInfo',id:'gr_masterList',style:'',visibleRowNum:'8',visibleRowNumFix:'true',rowNumVisible:'true',rowNumHeaderValue:'SEQ',rowStatusVisible:'true',rowStatusWidth:'30'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Width',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'Length',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'Height',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'Quantity',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'Weight',width:'140'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'widt',inputType:'text',width:'120',dataType:'float',maxLength:'4.1',textAlign:'right',allowChar:'0-9,.',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'leng',inputType:'text',width:'120',dataType:'float',maxLength:'4.1',textAlign:'right',allowChar:'0-9,.',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'heig',inputType:'text',width:'120',dataType:'float',maxLength:'4.1',textAlign:'right',allowChar:'0-9,.',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pkgs',inputType:'text',width:'120',dataType:'float',maxLength:'4.1',textAlign:'right',allowChar:'0-9,.',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vwht',inputType:'text',width:'140',dataType:'float',maxLength:'13.3',textAlign:'right',displayFormat:'#,##0.000',allowChar:'0-9,.'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label',value:'Total'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'expression',id:'column25',displayMode:'label',class:'',expression:'sum(\'vwht\')',textAlign:'right',displayFormat:'#,##0.000'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',EngYn:'Y',gridID:'gr_masterList',btnCancelYn:'Y',btnDelYn:'N',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DeleteRow',cancelFunction:'scwin.f_UndoRow',id:'udc_row',btnRowAddObj:'btn_AddRow',btnRowDelObj:'btn_DeleteRow',btnCancelObj:'btn_UndoRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]}]}]}]}]}]}]}]})