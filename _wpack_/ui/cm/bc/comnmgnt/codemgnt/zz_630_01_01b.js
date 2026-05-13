/*amd /ui/cm/bc/comnmgnt/codemgnt/zz_630_01_01b.xml 13898 813baf16135ece6906d5c35fa8c271f028ffe733c9a2da932442c989597c8831 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_countryCode',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntyCd',name:'국가코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntyNm',name:'국가명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntyEngNm',name:'국가영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntyEngCd',name:'국가영문코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntyDesc',name:'국가설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_countryCode',action:'/cm.bc.comnmgnt.codemgnt.RetrieveCountryCodeListCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_countryCode","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_countryCode_submitdone','ev:submiterror':'scwin.sbm_countryCode_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveCountryCode',action:'/cm.bc.comnmgnt.codemgnt.SaveCountryCodeListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified", "id":"ds_countryCode", "key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveCountryCode_submitdone','ev:submiterror':'scwin.sbm_saveCountryCode_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.prevRow = 0;
scwin.txt_homeCls = "0";
scwin.txt_qryCond = "0";
scwin.txt_countRow = "0";
scwin.txt_saveType = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.f_Retrieve();
  gr_countryCode.setReadOnly(true);
};

/**
 * UDC 셋팅이 이후..
 */
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableBtn($p, [btn_Save]);
  btn_RowAdd.setDisabled(true);
  btn_RowDel.setDisabled(true);
  ed_qryCntn.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  // ed_qryCntn.setDisabled()
  var arrJson = {
    homeCls: scwin.txt_homeCls,
    qryCond: lc_LupCond.getValue(),
    qryCntn: ed_qryCntn.getValue()
  };
  $c.sbm.execute($p, sbm_countryCode, arrJson);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  scwin.txt_saveType = "0"; // 0:신규, 1:수정, 2:조회, 3: 삭제
  var rowIndex = ds_countryCode.getTotalRow();
  ds_countryCode.insertRow(rowIndex);
  gr_countryCode.setReadOnly(false);
  gr_countryCode.setCellReadOnly(rowIndex, "cntyCd", false);
  gr_countryCode.setFocusedCell(rowIndex, "cntyCd", true);
  $c.gus.cfEnableAllBtn($p);
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_delMarked = function () {
  let row = ds_countryCode.getRowPosition();
  if (ds_countryCode.getRowStatus(row) == "C") {
    ds_countryCode.removeRow(row);
  } else {
    ds_countryCode.deleteRow(row);
  }
  scwin.txt_saveType = "3"; // 0:신규, 1:수정, 2:조회, 3: 삭제
  $c.gus.cfEnableAllBtn($p);
  gr_countryCode.setFocusedCell(row, "cntyCd", true);
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  $c.data.undoRow($p, ds_countryCode, "Y");
  gr_countryCode.setReadOnly(true);
  $c.gus.cfEnableAllBtn($p);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  var vSaveType = scwin.txt_saveType;

  //변경한 데이터가 있는지 체크한다. 	
  if (ds_countryCode.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }

  // 신규등록인 경우 국가코드 입력체크
  if (vSaveType == "0") {
    var rowIndex = ds_countryCode.getRowPosition();
    var vCntyCd = ds_countryCode.getCellData(rowIndex, "cntyCd");
    if (vCntyCd.trimAll() == "") {
      await $c.win.alert($p, "국가코드는 필수 입력사항입니다.");
      gr_countryCode.setFocusedCell(rowIndex, "cntyCd", true);
      return false;
    }
  }
  let validArry = [{
    id: "cntyCd",
    name: "국가코드",
    key: true
  }];
  let gridName = "국가코드관리";
  if (!(await $c.gus.cfValidateGrid($p, gr_countryCode, null, null, validArry, gridName))) {
    return false;
  }
  if (vSaveType == "3") {
    let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirmResult) {
      $c.sbm.execute($p, sbm_saveCountryCode);
    }
  } else if (await $c.gus.cfValidate($p, [gr_countryCode])) {
    let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirmResult) {
      $c.sbm.execute($p, sbm_saveCountryCode);
    }
  }
};

// 바이트 크기 체크
//그리드 높이 늘리기

scwin.f_downExcelSheet = function () {
  let sheetTitle = "국가코드목록";
  const options = {
    fileName: sheetTitle + ".xlsx",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_countryCode, options);
};
scwin.sbm_countryCode_submitdone = function (e) {
  gr_countryCode.setReadOnly(true);
  var rowCnt = ds_countryCode.getRowCount();
  gr_countryCode_spanTotal.setLabel(rowCnt);
  if (rowCnt > 0) {
    $c.gus.cfDisableBtn($p, [btn_Save]);
    btn_RowAdd.setDisabled(false);
    btn_RowDel.setDisabled(false);
  } else {
    $c.gus.cfDisableBtn($p, [btn_Save]);
    btn_RowAdd.setDisabled(true);
    btn_RowDel.setDisabled(true);
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    ed_qryCntn.focus();
  }
  $c.gus.cfDisableBtn($p, [btn_Save]);
  gr_countryCode.setFocusedCell(scwin.prevRow, 0);
  // $c.gus.cfGoPrevPosition(ds_countryCode, scwin.prevRow);
};
scwin.sbm_countryCode_submiterror = function (e) {};
scwin.sbm_saveCountryCode_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};
scwin.sbm_saveCountryCode_submiterror = function (e) {};
scwin.btn_search1_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1);
};
scwin.ed_qryCntn_onkeydown = function (e) {
  if (e.keyCode == "13") {
    scwin.f_Retrieve();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'검색조건 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',class:'',editType:'select',id:'lc_LupCond',mandatory:'true',ref:'',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'15',chooseOption:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'국가코드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'국가코드명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'국가영문명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'국가영문코드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'검색내용',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_qryCntn',style:'','ev:onkeydown':'scwin.ed_qryCntn_onkeydown'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.btn_search1_init_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'국가코드관리',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'Y',templateYn:'N',gridID:'gr_countryCode',gridDownFn:'scwin.f_downExcelSheet',id:'udc_gr_countryCode'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_countryCode',id:'gr_countryCode',style:'',visibleRowNum:'16',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'30'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'국가코드',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'국가명',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'국가영문명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'국가영문코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'설명',width:'300'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntyCd',inputType:'text',style:'',value:'',width:'120',readOnly:'true',allowChar:'A-Z',maxLength:'3',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntyNm',inputType:'text',style:'',value:'',width:'160',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntyEngNm',inputType:'text',style:'',value:'',width:'200',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntyEngCd',inputType:'text',style:'',value:'',width:'120',maxLength:'2',allowChar:'A-Z',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntyDesc',inputType:'text',style:'',value:'',width:'300',textAlign:'left',readOnly:'false'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'gr_countryCode_spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',btnDelYn:'N',style:'',cancelFunction:'scwin.f_Undo',rowDelFunction:'scwin.f_delMarked',rowAddFunction:'scwin.f_AddRow',btnCancelObj:'btn_Cancel',btnRowAddObj:'btn_RowAdd',btnRowDelObj:'btn_RowDel'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})