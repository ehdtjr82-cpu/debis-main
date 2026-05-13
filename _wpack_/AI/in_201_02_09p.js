/*amd /AI/in_201_02_09p.xml 10865 0ba6634e315e09292a2f911f37d748a82b26554735ebfbc91be8cfa27166ee6e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'tmlAdmitckCd',name:'출입증코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tempBarcdVehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tempBarcdYn',name:'임시바코드여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tmlEqKndCd',name:'장비종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tempBarcdTelNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tempBarcdDrvNm',name:'운전기사명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_registBudget',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'tmlAdmitckCd',name:'출입증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempBarcdVehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlEqKndCdNm',name:'장비종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempBarcdYn',name:'임시바코드여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempBarcdDrvNm',name:'운전기사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempBarcdTelNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlEqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlInoutBarcdNo',name:'출입바코드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqClntNo',name:'보유장비거래처번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_condition',action:'/to.in.bulk.tmlbulk.RetrieveBulkVehclLupContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_registBudget","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_registBudget","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_condition_submitdone','ev:submiterror':'scwin.sbm_condition_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.CREATE_AUTH = "C";
scwin.RETRIEVE_AUTH = "R";
scwin.UPDATE_AUTH = "U";
scwin.DELETE_AUTH = "D";
scwin.PRINT_AUTH = "P";
scwin.EXCEL_AUTH = "X";
scwin.selectedRowIndex = 0;
scwin.g_tmlAdmitckCd = "";
scwin.g_closeTF = "T";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  if (scwin.params != null) {
    if (scwin.params["tmlAdmitckCd"] != null) {
      scwin.g_tmlAdmitckCd = scwin.params["tmlAdmitckCd"];
    }
    if (scwin.params["closeTF"] != null) {
      scwin.g_closeTF = scwin.params["closeTF"];
    }
  }
  em_tmlAdmitckCd.setValue(scwin.g_tmlAdmitckCd);
  if (scwin.g_tmlAdmitckCd != "") {
    scwin.f_Retrieve();
  }
};
scwin.f_Retrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [tb_searchCondition]);
  if (!chk) {
    return;
  }
  await $c.sbm.execute($p, sbm_condition);
};
scwin.f_runExcel = async function (varGrNm, gubun) {
  let totCnt = ds_registBudget.getRowCount();
  let sheetTitle = "벌크 차량 정보";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, varGrNm, {
        "fileName": sheetTitle + ".xls",
        "sheetName": sheetTitle
      });
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.f_FieldClear = function () {};
scwin.f_WinClose = function () {
  $c.win.closePopup($p, ["N/A"]);
};
scwin.sbm_condition_submitdone = async function (e) {
  let rowCnt = ds_registBudget.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  } else if (rowCnt == 1 && scwin.g_closeTF == "T") {
    let rtnValues = [];
    let row = 0;
    rtnValues[0] = ds_registBudget.getCellData(row, "tmlAdmitckCd");
    rtnValues[1] = ds_registBudget.getCellData(row, "tmlEqKndCd");
    rtnValues[2] = ds_registBudget.getCellData(row, "tmlEqKndCdNm");
    rtnValues[3] = ds_registBudget.getCellData(row, "eqCd");
    rtnValues[4] = ds_registBudget.getCellData(row, "tmlInoutBarcdNo");
    rtnValues[5] = ds_registBudget.getCellData(row, "tempBarcdYn");
    rtnValues[6] = ds_registBudget.getCellData(row, "tempBarcdVehclNo");
    rtnValues[7] = ds_registBudget.getCellData(row, "tempBarcdDrvNm");
    rtnValues[8] = ds_registBudget.getCellData(row, "tempBarcdTelNo");
    rtnValues[9] = ds_registBudget.getCellData(row, "hveqClntNo");
    $c.win.closePopup($p, rtnValues);
  }
  spa_totalRow.setValue(ds_registBudget.getRowCount());
};
scwin.sbm_condition_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.gr_registBudget_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex < 0) return;
  let rtnValues = [];
  rtnValues[0] = ds_registBudget.getCellData(rowIndex, "tmlAdmitckCd");
  rtnValues[1] = ds_registBudget.getCellData(rowIndex, "tmlEqKndCd");
  rtnValues[2] = ds_registBudget.getCellData(rowIndex, "tmlEqKndCdNm");
  rtnValues[3] = ds_registBudget.getCellData(rowIndex, "eqCd");
  rtnValues[4] = ds_registBudget.getCellData(rowIndex, "tmlInoutBarcdNo");
  rtnValues[5] = ds_registBudget.getCellData(rowIndex, "tempBarcdYn");
  rtnValues[6] = ds_registBudget.getCellData(rowIndex, "tempBarcdVehclNo");
  rtnValues[7] = ds_registBudget.getCellData(rowIndex, "tempBarcdDrvNm");
  rtnValues[8] = ds_registBudget.getCellData(rowIndex, "tempBarcdTelNo");
  rtnValues[9] = ds_registBudget.getCellData(rowIndex, "hveqClntNo");
  $c.win.closePopup($p, rtnValues);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_close_onclick = function (e) {
  scwin.f_WinClose();
};
scwin.btn_refresh_onclick = function (e) {
  scwin.f_FieldClear();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'fixed',editType:'select',style:'width:120px;',id:'lc_tmlEqKndCd',class:'',ref:'data:ds_condition.tmlEqKndCd'}},{T:1,N:'xf:input',A:{style:'width:120px;',id:'em_tmlAdmitckCd',class:'',ref:'data:ds_condition.tmlAdmitckCd'}},{T:1,N:'xf:input',A:{style:'width:200px;',id:'txt_tempBarcdVehclNo',class:'',ref:'data:ds_condition.tempBarcdVehclNo'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'trigger5',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'trigger6',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'품목 검색 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_registBudget',id:'gr_registBudget',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'tmlAdmitckCd',inputType:'text',style:'',value:'품명코드',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tempBarcdVehclNo',inputType:'text',style:'',value:'품명이름',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tmlEqKndCdNm',inputType:'text',style:'',value:'품목코드',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tempBarcdYn',inputType:'text',style:'',value:'품목이름',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tempBarcdDrvNm',inputType:'text',style:'',value:'화종코드',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tempBarcdTelNo',inputType:'text',style:'',value:'화종이름',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'tmlAdmitckCd',inputType:'text',style:'',value:'',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tempBarcdVehclNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tmlEqKndCdNm',inputType:'text',style:'',value:'',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tempBarcdYn',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tempBarcdDrvNm',inputType:'text',style:'',value:'',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tempBarcdTelNo',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})