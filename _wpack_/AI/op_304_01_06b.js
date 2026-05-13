/*amd /AI/op_304_01_06b.xml 29661 56212f8d07f219446d2166f150bc79d597d14afa71664840cc52ee6725eb89bf */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'logisticsBranch',name:'점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'startDate',name:'시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDate',name:'종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'containerNumber',name:'송장번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'지시No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'CNTR/품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgItemNm',name:'변경내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgBfData',name:'변경전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgAfData',name:'변경후',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'처리자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'소속점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'소속팀',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empTelNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'처리일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_joblevel'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveWorkChangeContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_emp","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_emp","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveEmp',action:'/ds.op.SaveFormalityEmployeeCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_emp","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_saveEmp_submitdone','ev:submiterror':'scwin.sbm_saveEmp_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_joblevel',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_joblevel","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_joblevel","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_joblevel_submitdone','ev:submiterror':'scwin.sbm_joblevel_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sUserId = "";
scwin.sUserClsCd = "";
scwin.sClntNo = "";
scwin.sClntNm = "";
scwin.sLobranCd = "";
scwin.vCurDate = "";
scwin.strFromDate = "";
scwin.strToDate = "";
scwin.strDate = "";
scwin.sLoUpperLobranCd = "";
scwin.onpageload = function () {
  scwin.sUserId = $c.ses.getUserId();
  scwin.sUserClsCd = $c.ses.getUserClsCd();
  scwin.sClntNo = $c.ses.getClntNo();
  scwin.sClntNm = $c.ses.getClntNm();
  scwin.sLobranCd = $c.ses.getLoUpperLobranCd();
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strFromDate = scwin.vCurDate.substring(0, 8);
  scwin.strToDate = scwin.vCurDate;
  scwin.strDate = scwin.strFromDate + scwin.strToDate;
  scwin.f_OnLoad();
};
scwin.onUdcCompleted = function () {
  udc_Date.setInitDate(scwin.strFromDate, scwin.strToDate);
};
scwin.f_OnLoad = async function () {
  await $c.sbm.execute($p, sbm_joblevel);
  co_lc_logisticsBranch.setFocus();
};
scwin.f_Retrieve = async function () {
  dma_retrieve.set("logisticsBranch", co_lc_logisticsBranch.getValue());
  dma_retrieve.set("startDate", udc_Date.getFromValue());
  dma_retrieve.set("endDate", udc_Date.getToValue());
  dma_retrieve.set("containerNumber", containerNumber.getValue());
  dma_retrieve.set("odrNo", odrNo.getValue());
  await $c.sbm.execute($p, sbm_retrieve);
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_save]);
};
scwin.f_Create = function () {
  ds_emp.insertRow();
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_trigger1, btn_save]);
};
scwin.f_Update = async function () {
  if (ds_emp.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
    return;
  }
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtn($p, [btn_save]);
};
scwin.f_Save = async function () {
  if (!$c.gus.cfCheckMandatory($p)) {
    return;
  }
  if (ds_emp.isUpdated() == false) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  let chk = await $c.win.confirm($p, "저장하시겠습니까?");
  if (chk == true) {
    await $c.sbm.execute($p, sbm_saveEmp);
  }
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_save]);
};
scwin.f_Delete = async function () {
  if (ds_emp.getRowStatus(ds_emp.getRowPosition()) == "C") {
    await $c.win.alert($p, "저장되지 않은 건입니다.");
  } else {
    let chk = await $c.win.confirm($p, "삭제하시겠습니까?");
    if (chk == true) {
      ds_emp.removeRow(ds_emp.getRowPosition());
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtn($p, [btn_save]);
    }
  }
};
scwin.f_openPopUp = function (disGubun, val) {
  let rtnList = new Array();
  let lodeptCd = "";
  lodeptCd = co_lc_logisticsBranch.getValue();
  rtnList = $c.gus.cfCommonPopUp($p, 'retrieveOpEmpCdInfo', lodeptCd, '', "F", null, null, null, null, null, null, null, null, null);
  if (rtnList != null) {
    odrNo.setValue(rtnList[0]);
  }
};
scwin.f_defaultValue = function () {
  udc_Date.setInitDate(scwin.strFromDate, scwin.strFromDate);
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);
};
scwin.f_Reset = function () {
  $c.gus.cfInitObjects($p, [tb_searchCondition]);
  udc_Date.setInitDate(scwin.strFromDate, scwin.strToDate);
};
scwin.f_toExcel1 = function () {
  $c.data.downloadGridViewExcel($p, gr_emp, {
    fileName: "운송작업변경내역현황.xlsx",
    sheetName: "운송작업변경내역현황"
  });
};
scwin.sbm_saveEmp_submitdone = async function (e) {
  await $c.win.alert($p, "성공적으로 처리되었습니다.");
};
scwin.sbm_saveEmp_submiterror = async function (e) {
  await $c.win.alert($p, e.errorMsg);
};
scwin.sbm_retrieve_submitdone = function (e) {};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_joblevel_submitdone = function (e) {
  scwin.sLoUpperLobranCd = scwin.sLobranCd;
  let foundIdx = -1;
  for (let i = 0; i < ds_joblevel.getRowCount(); i++) {
    if (ds_joblevel.getCellData(i, "lobranCd") == scwin.sLoUpperLobranCd) {
      foundIdx = i;
      break;
    }
  }
  if (foundIdx > 0) {
    co_lc_logisticsBranch.setValue(ds_joblevel.getCellData(foundIdx, "lobranCd"));
  } else {
    co_lc_logisticsBranch.setSelectedIndex(0);
  }
};
scwin.sbm_joblevel_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_emp_onloadcompleted = async function (e) {
  let rowCnt = ds_emp.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  spa_totalRow.setValue(rowCnt);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_Reset();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'',src:'/cm/udc/schInput.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'co_lc_logisticsBranch',search:'start',style:'width: 204px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지시일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'udc_Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'odrNo',placeholder:'',style:'width: 150px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:''}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'송장번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:100px;',id:'containerNumber',placeholder:'',class:''}},{T:1,N:'w2:udc_schInput',A:{style:'width:100px;',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출도착등록여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'acb_autoComplete2',search:'start',style:'width: 120px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'실적정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'출발일시',class:''}},{T:1,N:'xf:input',A:{dataType:'time',style:'width: 50px;',id:'ed_input3',class:'tac'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger2',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄입력'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger3',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄삭제'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'ds_emp',id:'gr_emp',style:'',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'transWrkIndictNo',inputType:'checkbox',width:'50',fixColumnWidth:'true',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',value:'작업단계',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpNm',inputType:'text',value:'출발지',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',value:'도착지',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chgItemNm',inputType:'text',value:'소유<br/>구분',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chgBfData',inputType:'text',value:'차량번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chgAfData',inputType:'text',value:'협력사명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',value:'출발일자',width:'100',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNo',inputType:'text',value:'출발시간',width:'100',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empNm',inputType:'text',value:'도착일자',width:'100',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'empTelNo',value:'도착시간',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'regDtm',value:'이동<br/>경로',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regDtm',value:'품명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column55',value:'배차<br/>단위',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'송장번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column49',value:'정상(Kg)',displayMode:'label',colSpan:'3'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column40',value:'불량(Kg)',displayMode:'label',colSpan:'3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',value:'제품',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column205',value:'컬럼헤더명',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column201',value:'컬럼헤더명',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column197',value:'transRsltsSeq',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column193',value:'transWrkIndictNo',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column189',value:'commSeq',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column185',value:'오더번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column181',value:'eqCd',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column177',value:'copCoClntNo',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column173',value:'unitCd',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column169',value:'eqKndCd',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column165',value:'eqNrmCd',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column161',value:'internalSellLodeptCd',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column157',value:'dptWrkPlCd',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column153',value:'arvWrkPlCd',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column149',value:'pchsSeq',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column145',value:'vehclNo',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column141',value:'ioDptWrkPlCd',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column137',value:'ioArvWrkPlCd',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column133',value:'ctrtClntNo',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column129',value:'coshippingNo',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column125',value:'marvYn',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column121',value:'trfAdptYn',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column117',value:'minimumAdptYn',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column113',value:'특이사항',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column109',value:'중량 수정 사유',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'transWrkIndictNo',value:'물량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'odrNo',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkStpNm',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'commNm',value:'물량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'chgItemNm',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'chgBfData',value:'CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'transWrkIndictNo',inputType:'checkbox',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpNm',inputType:'text',width:'80',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'80',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chgItemNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chgBfData',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chgAfData',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'empTelNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'regDtm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regDtm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column56',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column50',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column47',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column44',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column32',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column38',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column207',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column203',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column199',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column195',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column191',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column187',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column183',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column179',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column175',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column171',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column167',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column163',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column159',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column155',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column151',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column147',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column143',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column139',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column135',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column131',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column127',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column123',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column119',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column115',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column111',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column51',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column42',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column208',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column204',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column200',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column196',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column192',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column188',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column184',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column180',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column176',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column172',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column168',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column164',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column160',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column156',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column152',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column148',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column144',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column140',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column136',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column132',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column128',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column124',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column120',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column116',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column112',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger1',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})