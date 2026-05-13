/*amd /ui/to/in/bulk/tmlbulk/in_201_02_09p.xml 17796 682df8c0179675b90c655cd34217db61fba31caadb69d1881d94d3cd0373640b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'tmlAdmitckCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tempBarcdVehclNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tempBarcdYn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tmlEqKndCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tempBarcdDrvNm',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tempBarcdTelNo',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_registBudget',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'tmlAdmitckCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlEqKndCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlEqKndCdNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempBarcdYn',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempBarcdVehclNo',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempBarcdDrvNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempBarcdTelNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqClntNo',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqTotWt',name:'name16',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_condition',action:'/to.in.bulk.tmlbulk.RetrieveBulkVehclLupContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_registBudget","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_registBudget","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson;
scwin.empNo;
scwin.arrParent;
scwin.g_tmlAdmitckCd;
scwin.g_closeTF;
scwin.CREATE_AUTH;
scwin.RETRIEVE_AUTH;
scwin.UPDATE_AUTH;
scwin.DELETE_AUTH;
scwin.PRINT_AUTH;
scwin.EXCEL_AUTH;
scwin.onpageload = async function () {
  //전역변수값 셋팅함수.
  scwin.initSetVal();
  const codeOptions = [{
    grpCd: "ZZ210",
    compID: "lc_tmlEqKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.commonCodeCallBack01);
};
scwin.initSetVal = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.empNo = scwin.memJson.userId;
  scwin.arrParent = $c.data.getParameter($p);
  if (scwin.arrParent.tmlAdmitckCd == undefined || scwin.arrParent.tmlAdmitckCd == null || scwin.arrParent.tmlAdmitckCd == "") {
    scwin.g_tmlAdmitckCd = "";
  } else {
    scwin.g_tmlAdmitckCd = scwin.arrParent.tmlAdmitckCd;
  }
  if (scwin.arrParent.closeTF == undefined || scwin.arrParent.closeTF == null || scwin.arrParent.closeTF == "") {
    scwin.g_closeTF = "T";
  } else {
    scwin.g_closeTF = scwin.arrParent.closeTF;
  }
  scwin.CREATE_AUTH = "C";
  scwin.RETRIEVE_AUTH = "R";
  scwin.UPDATE_AUTH = "U";
  scwin.DELETE_AUTH = "D";
  scwin.PRINT_AUTH = "P";
  scwin.EXCEL_AUTH = "X";
};
scwin.commonCodeCallBack01 = async function () {
  lc_tmlEqKndCd.setValue("");
  await scwin.f_OnLoad();
};
scwin.f_OnLoad = async function () {
  chb_tempBarcdYn.setValue("0");
  em_tmlAdmitckCd.setValue(scwin.g_tmlAdmitckCd);
  if (scwin.g_tmlAdmitckCd != "") {
    await scwin.f_Retrieve();
  }
};
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [tb_searchCondition]);
  if (!ret) {
    return;
  }

  //submit 처리.
  let objSubmit = await $c.sbm.execute($p, sbm_condition);
  if (objSubmit.responseJSON.resultDataSet[0].Msg == "SUCC") {
    await scwin.sbm_condition_submitdone();
  }
};
scwin.sbm_condition_submitdone = async function (e) {
  if (ds_registBudget.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다	
  } else if (ds_registBudget.getRowCount() == 1 && scwin.g_closeTF == "T") {
    var rtnValues = new Array();
    rtnValues.tmlAdmitckCd = ds_registBudget.getCellData(0, "tmlAdmitckCd");
    rtnValues.tmlEqKndCd = ds_registBudget.getCellData(0, "tmlEqKndCd");
    rtnValues.tmlEqKndCdNm = ds_registBudget.getCellData(0, "tmlEqKndCdNm");
    rtnValues.eqCd = ds_registBudget.getCellData(0, "eqCd");
    rtnValues.tmlInoutBarcdNo = ds_registBudget.getCellData(0, "tmlInoutBarcdNo");
    rtnValues.tempBarcdYn = ds_registBudget.getCellData(0, "tempBarcdYn");
    rtnValues.tempBarcdVehclNo = ds_registBudget.getCellData(0, "tempBarcdVehclNo");
    rtnValues.tempBarcdDrvNm = ds_registBudget.getCellData(0, "tempBarcdDrvNm");
    rtnValues.tempBarcdTelNo = ds_registBudget.getCellData(0, "tempBarcdTelNo");
    rtnValues.hveqClntNo = ds_registBudget.getCellData(0, "hveqClntNo");
    let rt = [rtnValues.tmlAdmitckCd, rtnValues.tmlEqKndCd, rtnValues.tmlEqKndCdNm, rtnValues.eqCd, rtnValues.tmlInoutBarcdNo, rtnValues.tempBarcdYn, rtnValues.tempBarcdVehclNo, rtnValues.tempBarcdDrvNm, rtnValues.tempBarcdTelNo, rtnValues.hveqClntNo];
    $c.win.closePopup($p, rt);
  }
  totalRows.setValue(ds_registBudget.getRowCount());
};

//-----------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_ExcelDown = async function () {
  await scwin.f_runExcel(gr_registBudget, 1);
};
scwin.f_runExcel = async function (gridObj, gubun) {
  var totCnt = ds_registBudget.getRowCount();
  var sheetTitle = "벌크 차량 정보";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      //cfGridToExcel(varGrNm, sheetTitle, sheetTitle+".xls", 4+8+16);	

      const options = {
        fileName: sheetTitle + ".xlsx",
        sheetName: sheetTitle
      };
      $c.data.downloadGridViewExcel($p, gridObj, options);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {};

//-------------------------------------------------------------------------
// Windows Close
//-------------------------------------------------------------------------
scwin.f_WinClose = function () {
  let rt = [];
  $c.win.closePopup($p, rt);
};
scwin.em_tmlAdmitckCd_onkeyup = function (e) {
  em_tmlAdmitckCd.setValue(em_tmlAdmitckCd.getValue().toUpperCase());
};
scwin.em_tempBarcdTelNo_onkeyup = function (e) {
  em_tempBarcdTelNo.setValue(em_tempBarcdTelNo.getValue().toUpperCase());
};
scwin.gr_registBudget_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  var row = rowIndex;
  var rtnValues = new Array();
  rtnValues.tmlAdmitckCd = ds_registBudget.getCellData(row, "tmlAdmitckCd");
  rtnValues.tmlEqKndCd = ds_registBudget.getCellData(row, "tmlEqKndCd");
  rtnValues.tmlEqKndCdNm = ds_registBudget.getCellData(row, "tmlEqKndCdNm");
  rtnValues.eqCd = ds_registBudget.getCellData(row, "eqCd");
  rtnValues.tmlInoutBarcdNo = ds_registBudget.getCellData(row, "tmlInoutBarcdNo");
  rtnValues.tempBarcdYn = ds_registBudget.getCellData(row, "tempBarcdYn");
  rtnValues.tempBarcdVehclNo = ds_registBudget.getCellData(row, "tempBarcdVehclNo");
  rtnValues.tempBarcdDrvNm = ds_registBudget.getCellData(row, "tempBarcdDrvNm");
  rtnValues.tempBarcdTelNo = ds_registBudget.getCellData(row, "tempBarcdTelNo");
  rtnValues.hveqClntNo = ds_registBudget.getCellData(row, "hveqClntNo");
  let rt = [rtnValues.tmlAdmitckCd, rtnValues.tmlEqKndCd, rtnValues.tmlEqKndCdNm, rtnValues.eqCd, rtnValues.tmlInoutBarcdNo, rtnValues.tempBarcdYn, rtnValues.tempBarcdVehclNo, rtnValues.tempBarcdDrvNm, rtnValues.tempBarcdTelNo, rtnValues.hveqClntNo];
  $c.win.closePopup($p, rt);
};
scwin.tbx_textbox1_onclick = function (e) {
  debugger;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_searchCondition',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_textbox1',label:'출입증코드 ',style:'','ev:onclick':'scwin.tbx_textbox1_onclick'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'em_tmlAdmitckCd',style:'width: 150px;',maxlength:'8',allowChar:'0-9a-zA-Z','ev:onkeyup':'scwin.em_tmlAdmitckCd_onkeyup',ref:'data:dma_condition.tmlAdmitckCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_tempBarcdVehclNo',style:'',title:'차량번호',maxByteLength:'20',ref:'data:dma_condition.tempBarcdVehclNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'임시바코드여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_tempBarcdYn',ref:'data:dma_condition.tempBarcdYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_tmlEqKndCd',search:'start',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_condition.tmlEqKndCd',displayMode:'value delim label',emptyItem:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운전기사명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_tempBarcdDrvNm',style:'',title:'운전기사명',maxByteLength:'20',ref:'data:dma_condition.tempBarcdDrvNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전화번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'em_tempBarcdTelNo',style:'',maxlength:'8',allowChar:'0-9a-zA-Z','ev:onkeyup':'scwin.em_tempBarcdTelNo_onkeyup',ref:'data:dma_condition.tempBarcdTelNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'trigger7',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'trigger8',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'벌크 차량 검색 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridID:'gr_registBudget',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_ExcelDown',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_registBudget',id:'gr_registBudget',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_registBudget_oncelldblclick',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'출입증코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'장비종류',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'임시바코드여부',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'운전기사명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'전화번호',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'등록일시',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'tmlAdmitckCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tempBarcdVehclNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tmlEqKndCdNm',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tempBarcdYn',inputType:'expression',style:'',value:'',width:'120',expression:'dataList("tempBarcdYn") == "1"?"Y":"N"'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tempBarcdDrvNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tempBarcdTelNo',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'regDtm',value:'',displayMode:'label',dataType:'date',excelCellType:'text',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column20',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_WinClose'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})