/*amd /ui/ds/lo/edimgnt/lo_300_01_01p.xml 15045 f79b74163ab58080864ac61858a589b7cf15823ee90c0d22d4f15b20e615d8d4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'mrn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msn',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hsn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryoutAdmitPattern',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mrn',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'name2',dataType:'number',defaultValue:'0',nullYN:'false'}},{T:1,N:'w2:column',A:{id:'hsn',name:'name3',dataType:'number',defaultValue:'0',nullYN:'false'}},{T:1,N:'w2:column',A:{id:'blNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutAdmitNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutAdmitPattern',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reportDtm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondZoneCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'boneZoneCdNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name12',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.edimgnt.RetrieveCrryOutAdmitInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.edimgnt.SaveCrryOutAdmitInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 회원정보를 json 데이터로 모두 받음
//let memJson = $c.data.getMemInfo();
scwin.userId = $c.data.getMemInfo($p, "userId");
scwin.empNo = $c.data.getMemInfo($p, "empNo ");

//alert(scwin.userId);

scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "OP134",
    compID: "acb_lc_crryoutAdmitPattern,gr_master:crryoutAdmitPattern"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.setCommonCodeCallBack);
};
scwin.setCommonCodeCallBack = function () {
  acb_lc_crryoutAdmitPattern.addItem("", "", null, 0);
  acb_lc_crryoutAdmitPattern.setSelectedIndex(0);
  scwin.setParentParamSettion();
};
scwin.setParentParamSettion = function () {
  //부모로부터 전달받은 데이타셋
  const arg = $p.getAllParameter();
  const arg2 = arg.paramData.data;
  // debugger;
  //  console.log(arg2);

  if (!$c.gus.cfIsNull($p, arg2[0])) {
    //데이타 mpa에 세팅
    dma_search.set("mrn", arg2[0]);
    dma_search.set("msn", arg2[1]);
    dma_search.set("hsn", arg2[2]);
    dma_search.set("blNo", arg2[3]);
    dma_search.set("crryoutAdmitPattern", arg2[4]);
    $c.sbm.execute($p, sbm_retrieve);
  }
};

//조회
scwin.btn_retrieve_onclick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ed_mrn], null, true))) {
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//조회 callback 
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let nCnt = ds_master.getRowCount();
  total.setValue(nCnt);
  if (nCnt == 0) {
    await $c.gus.cfAlertMsg($p, "[반출 승인 강제등록]이 존재하지 않습니다.");
    return;
  }

  // 그리드 첫째 행 index선택
  gr_master.setFocusedCell(0, 0);
};

//close
scwin.btn_Close_onclick = function (e) {
  $c.win.closePopup($p);
};

//저장
scwin.btn_save_onclick = async function (e) {
  let isInsert = false;
  if (!(await $c.gus.cfValidate($p, [gr_master], null, true))) {
    //grid 전체 안먹음
    return;
  }
  for (var i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getRowStatus(i) == "C" || ds_master.getRowStatus(i) == "D") {
      if (ds_master.getCellData(i, "msn") == "") {
        await $c.gus.cfAlertMsg($p, i + 1 + "번째 데이터에서 MSN은 필수입력값입니다.");
        return;
      }
      isInsert = true;
    }
  }
  if (isInsert) {
    $c.sbm.execute($p, sbm_save);
  } else {
    await $c.gus.cfAlertMsg($p, "저장할 데이터가 없습니다.");
    return;
  }
  ;
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

  scwin.btn_retrieve_onclick();
};

//add
scwin.f_addRow = function (e) {
  //$c.data.insertRow(gr_master);

  let lastRow = ds_master.getRowCount();
  ds_master.insertRow(lastRow);
  ds_master.setCellData(lastRow, "regId", scwin.userId);
  ds_master.setCellData(lastRow, "crryoutAdmitPattern", "55");
  ds_master.setCellData(lastRow, "bondZoneCd", "03077083");
  ds_master.setCellData(lastRow, "msn", 0);
  ds_master.setCellData(lastRow, "hsn", 0);
  gr_master.setFocusedCell(lastRow, "mrn");
};
scwin.oneditkeyup = function (info, e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_searchCondition);
  scwin.setParentParamSettion();
};
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_master.getRowStatus(rowIndex) == "C") {
    gr_master.setReadOnly("row", rowIndex, false);
  } else {
    gr_master.setReadOnly("row", rowIndex, true);
  }
};
scwin.gr_master_onafteredit = function (rowIndex, columnIndex, value) {
  var columnName = gr_master.getColumnID(columnIndex);
  if (columnName == "mrn" || columnName == "blNo" || columnName == "crryoutAdmitNo") {
    ds_master.setCellData(rowIndex, columnName, value.toUpperCase());
  }
  if (columnName == "msn" || columnName == "hsn") {
    if ($c.gus.cfIsNull($p, ds_master.getCellData(rowIndex, columnName))) {
      ds_master.setCellData(rowIndex, columnName, 0);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tb_searchCondition',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'MRN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',style:'width:150px;',mandatory:'true',maxlength:'11',objType:'data','ev:oneditkeyup':'scwin.oneditkeyup',allowChar:'0-9a-zA-Z',ref:'data:dma_search.mrn',validExp:'MRN:yes'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MSN-HSN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_msn',placeholder:'',style:'width:50px;',maxlength:'4',allowChar:'0-9',objType:'data',ref:'data:dma_search.msn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_hsn',placeholder:'',style:'width:50px;',objType:'data',maxlength:'4',mandatory:'false',allowChar:'0-9',ref:'data:dma_search.hsn'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BL NO',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_blNo',style:'width:150px;',objType:'data',maxlength:'20','ev:oneditkeyup':'scwin.oneditkeyup',allowChar:'0-9a-zA-Z',ref:'data:dma_search.blNo'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반출승인유형',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_crryoutAdmitPattern',search:'start',style:'width:200px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_search.crryoutAdmitPattern',visibleRowNum:'10',chooseOptionLabel:'  '},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_master',id:'udc_topGrdBtn',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',grdDownOpts:'{"fileName":"반출승인강제등록","sheetName":"반출승인강제등록","type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'10',visibleRowNumFix:'true',focusMove:'true',rowStatusVisible:'true',validExp:'mrn:MRN:yes:maxLength=11,msn:MSN:yes:maxLength=4,hsn:HSN:no:maxLength=4,crryoutAdmitNo:반출승인번호:yes:,crryoutAdmitPattern:반출승인유형:yes:','ev:oncellclick':'scwin.gr_master_oncellclick','ev:onafteredit':'scwin.gr_master_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'MRN',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'MSN',width:'70',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'HSN',width:'70',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'BL NO',width:'120',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'반출승인번호',width:'120',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'반출승인유형',width:'150',class:'col-type1'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',width:'100',textAlign:'center',maxLength:'11',allowChar:'0-9a-zA-Z'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'msn',inputType:'text',width:'70',textAlign:'center',displayFormat:'#,##0',dataType:'number',allowChar:'0-9',maxLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hsn',inputType:'text',width:'70',textAlign:'center',dataType:'number',allowChar:'0-9',maxLength:'4',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',width:'100',textAlign:'left',maxLength:'20',allowChar:'0-9a-zA-Z'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryoutAdmitNo',inputType:'text',width:'120',textAlign:'left',maxLength:'20',allowChar:'0-9a-zA-Z'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'crryoutAdmitPattern',inputType:'select',width:'150',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'total',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_master',id:'udc_bottomGrdBtn',rowAddFunction:'scwin.f_addRow',btnDelYn:'N',btnCancelYn:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Close',style:'',type:'button','ev:onclick':'scwin.btn_Close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})