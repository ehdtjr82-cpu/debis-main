/*amd /AI/op_304_01_16b.xml 14883 b443c3c42c28c84c184bfe65a5b37cf1a90496724cdbe5a809988d7690e07234 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_chassisCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'chassisNo',name:'샤시번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'chk',name:'기간조회여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_chassisPresent',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtm',name:'출발일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtm',name:'도착일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStsNm',name:'작업상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'len',name:'장비길이',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nrm',name:'장비규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'knd',name:'장비종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curPos',name:'현위치',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveChassisMovePresentConditionCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_chassisCond","key":"IN_DS1"},{"id":"ds_chassisPresent","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_chassisPresent","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  txt_chassisNo.setFocus();
  scwin.f_control();
};
scwin.onUdcCompleted = function () {
  udc_Dt.setInitDate(scwin.vCurDate, scwin.vCurDate);
};
scwin.f_control = function () {
  if (chb_chkYn.getValue() != "") {
    udc_Dt.setVisible(true);
  } else {
    udc_Dt.setVisible(false);
  }
};
scwin.chb_chkYn_onchange = function (e) {
  scwin.f_control();
};
scwin.f_Retrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [txt_chassisNo]);
  if (!chk) {
    return;
  }
  if (chb_chkYn.getValue() != "") {
    let chk2 = await $c.gus.cfValidate($p, [ica_stDt, ica_endDt]);
    if (!chk2) {
      return;
    }
    if (!$c.gus.cfIsAfterDate($p, ica_stDt.getValue(), ica_endDt.getValue())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      return;
    }
    if ($c.date.diffDate($p, ica_stDt.getValue(), ica_endDt.getValue()) > 370) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["조회기간", "1년이상"]);
      ica_stDt.setFocus();
      return;
    }
  }
  dma_chassisCond.set("chassisNo", txt_chassisNm.getValue());
  dma_chassisCond.set("chk", chb_chkYn.getValue() != "" ? "1" : "0");
  dma_chassisCond.set("stDt", ica_stDt.getValue());
  dma_chassisCond.set("endDt", ica_endDt.getValue());
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_cntrWrkRslts);
  let rowCnt = ds_chassisPresent.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
  }
  $c.gus.cfShowTotalRows($p, spa_totalRow, rowCnt);
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_cntrWrkRslts);
  $c.gus.cfShowError($p, e);
};
scwin.f_openPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  udc_chassis.ilCommonPopUp(scwin.callbackChassis, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "샤시번호,샤시코드,샤시명");
};
scwin.callbackChassis = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, txt_chassisNo, txt_chassisNm);
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openPopUp(disGubun, pVal, "", "T", "T");
  } else {
    scwin.f_openPopUp(disGubun, "", pVal, "T", "T");
  }
};
scwin.txt_chassisNo_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_chassisNo, txt_chassisNm, "1");
};
scwin.txt_chassisNm_onchange = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_chassisNm, txt_chassisNo, "", false);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_Reset();
};
scwin.f_Reset = function () {
  $c.gus.cfInitObjects($p, [txt_chassisNo, txt_chassisNm, chb_chkYn, ica_stDt, ica_endDt]);
  scwin.f_control();
};
scwin.f_toExcel = function () {
  $c.data.downloadGridViewExcel($p, gr_cntrWrkRslts, {
    fileName: "샤시이동현황.xlsx",
    sheetName: "샤시이동현황"
  });
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기간조회',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_chkYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_Dt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_stDt',edToId:'ica_endDt'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'샤시번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_chassis',codeId:'txt_chassisNo',nameId:'txt_chassisNm',hideName:'Y',popupID:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비길이',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비규',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'현위치',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_len',placeholder:'',style:'width:150px;',ref:'data:ds_chassisPresent.len'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_nrm',placeholder:'',style:'width:150px;',ref:'data:ds_chassisPresent.nrm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_knd',placeholder:'',style:'width:150px;',ref:'data:ds_chassisPresent.knd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_curPos',placeholder:'',style:'width:150px;',ref:'data:ds_chassisPresent.curPos'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_vehclNo',placeholder:'',style:'width:150px;',ref:'data:ds_chassisPresent.vehclNo'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_chassisPresent',style:'',autoFit:'allColumn',id:'gr_cntrWrkRslts',visibleRowNum:'15',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpNm',value:'작업단계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',value:'협력업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrNo',value:'컨테이너번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptWrkPlNm',value:'출발지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvWrkPlNm',value:'도착지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptDtm',value:'출발일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvDtm',value:'도착일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStsNm',value:'작업상태',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptWrkPlNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptDtm',displayMode:'label',readOnly:'true',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvDtm',displayMode:'label',readOnly:'true',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStsNm',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]}]}]}]})