/*amd /AI/fm_304_03_02b.xml 10983 68faae1664129740d27c20bfe87623e3f149d864e58b0c6042ba79ddbc3c5cc2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankcd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankcd1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_electricBank',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cdDesc',name:'코드설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_bankcd',action:'/ac.fm.stdinfomgnt.RetrieveBankCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_bankcd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_bankcd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_bankcd_submitdone','ev:submiterror':'scwin.sbm_bankcd_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_electricBank',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=FM063',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_electricBank","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_electricBank","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_electricBank_submitdone','ev:submiterror':'scwin.sbm_electricBank_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.ELECTRONICDRAFT = "02";
scwin.tmp_01 = "";
scwin.tmp_02 = "";
scwin.tmp_03 = "";
scwin.tmp_04 = "";
scwin.onpageload = function () {
  let codeOptions = [{
    grpCd: "FM048",
    compID: "lc_draft_check_cls_cd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_bankcd_Retrieve();
};
scwin.onUdcCompleted = function () {
  let sCurrDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  ica_startprtDt.setValue(sCurrDate.substring(0, 6) + "01");
  ica_endprtDt.setValue(sCurrDate);
  lc_draft_check_cls_cd.setValue("01");
  let setlChoices = [{
    label: "전체",
    value: "00"
  }, {
    label: "정리",
    value: "01"
  }, {
    label: "미정리",
    value: "02"
  }];
  lc_setlCls.removeAll();
  for (let i = 0; i < setlChoices.length; i++) {
    lc_setlCls.addItem(setlChoices[i].label, setlChoices[i].value);
  }
  lc_setlCls.setValue("00");
  let srcClsChoices = [{
    label: "전체",
    value: "00"
  }, {
    label: "만기",
    value: "01"
  }, {
    label: "할인",
    value: "02"
  }];
  lc_srcCls.removeAll();
  for (let i = 0; i < srcClsChoices.length; i++) {
    lc_srcCls.addItem(srcClsChoices[i].label, srcClsChoices[i].value);
  }
  lc_srcCls.setValue("00");
  scwin.f_retrieveElectricBank();
  $c.gus.cfDisableObjects($p, [lc_srcCls]);
  scwin.f_loadAcctCodes();
};
scwin.f_loadAcctCodes = function () {
  // TODO: FM048 코드의 cdDesc 값을 서버에서 조회하여 tmp_01~04에 세팅 필요
  // 원본 JSP에서는 서버사이드 CodeDTOCache로 직접 가져왔으나, 클라이언트에서는 별도 submission 필요
  scwin.tmp_01 = "";
  scwin.tmp_02 = "";
  scwin.tmp_03 = "";
  scwin.tmp_04 = "";
};
scwin.f_bankcd_Retrieve = async function () {
  await $c.sbm.execute($p, sbm_bankcd);
};
scwin.sbm_bankcd_submitdone = function (e) {
  $c.gus.cfCopyDataSet($p, ds_bankcd, ds_bankcd1);
};
scwin.sbm_bankcd_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_retrieveElectricBank = async function () {
  await $c.sbm.execute($p, sbm_electricBank);
};
scwin.sbm_electricBank_submitdone = function (e) {
  ds_electricBank.insertRow(0);
  ds_electricBank.setCellData(0, "cdDesc", "");
  ds_electricBank.setCellData(0, "cdNm", "전체");
  lc_bankCd.removeAll();
  for (let i = 0; i < ds_electricBank.getRowCount(); i++) {
    lc_bankCd.addItem(ds_electricBank.getCellData(i, "cdNm"), ds_electricBank.getCellData(i, "cdDesc"));
  }
  lc_bankCd.setSelectedIndex(0);
};
scwin.sbm_electricBank_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_OzReport = function () {
  let odiParam = new ODIParam("fm_304_03_01");
  odiParam.add("sysPath", "dbl.ac.fm.paymgnt.notepay");
  odiParam.add("startprtDt", ica_startprtDt.getValue().trim());
  odiParam.add("endprtDt", ica_endprtDt.getValue().trim());
  odiParam.add("draftCheckClsCd", lc_draft_check_cls_cd.getValue());
  odiParam.add("bankCd", lc_bankCd.getValue());
  let temp_val = "";
  if (lc_draft_check_cls_cd.getValue() == "01") {
    temp_val = scwin.tmp_01;
  }
  if (lc_draft_check_cls_cd.getValue() == "02") {
    temp_val = scwin.tmp_02;
  }
  if (lc_draft_check_cls_cd.getValue() == "03") {
    temp_val = scwin.tmp_03;
  }
  if (lc_draft_check_cls_cd.getValue() == "04") {
    temp_val = scwin.tmp_04;
  }
  odiParam.add("setlCls", lc_setlCls.getValue());
  odiParam.add("srcCls", lc_srcCls.getValue());
  odiParam.add("acctCd", temp_val);
  let formParam = new FormParam();
  let viewerParam = new ViewerParam();
  viewerParam.add("viewer.zoom", "100");
  viewerParam.add("viewer.useprogressbar", "false");
  $c.gus.cfOZEmbedPreview($p, "ozFrame", "myozviewer", "ac/fm/paymgnt/notepay/fm_304_03_01.ozr", odiParam, viewerParam, formParam);
};
scwin.f_openPopUp = function (select_code, txtCode, txtName, sPopupCls) {
  let rtnList = null;
  let sCmdName = "";
  let code = txtCode.getValue();
  let name = "";
  if (txtName != null) {
    name = txtName.getValue();
  }
  switch (select_code) {
    case '1':
      sCmdName = "retrieveBankInfo";
      rtnList = $c.gus.cfCommonPopUp($p, sCmdName, code, name, sPopupCls, null, null, null, null, null, null, null, null, null);
      break;
    case '2':
      sCmdName = "retrieveBorrLedgNoInfo";
      rtnList = $c.gus.cfCommonPopUp($p, sCmdName, code, name, sPopupCls, null, null, null, null, null, null, null, null, null);
      break;
  }
  if (rtnList != null) {
    txtCode.setValue(rtnList[0]);
    if (txtName != null) {
      txtName.setValue(rtnList[1]);
    }
  }
};
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd.getValue().trim() != "") {
    scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
  } else {
    if (orgObjNm != null) {
      orgObjNm.setValue("");
    }
    orgObjCd.setValue("");
  }
};
scwin.btn_trigger1_onclick = function (e) {
  scwin.f_OzReport();
};
scwin.lc_setlCls_onchange = function (e) {
  if (lc_setlCls.getValue() == "01" && (lc_draft_check_cls_cd.getValue() == "03" || lc_draft_check_cls_cd.getValue() == "04")) {
    $c.gus.cfEnableObjects($p, [lc_srcCls]);
  } else {
    $c.gus.cfDisableObjects($p, [lc_srcCls]);
  }
};
scwin.lc_draft_check_cls_cd_onchange = function (e) {
  if (lc_setlCls.getValue() == "01" && (lc_draft_check_cls_cd.getValue() == "03" || lc_draft_check_cls_cd.getValue() == "04")) {
    $c.gus.cfEnableObjects($p, [lc_srcCls]);
  } else {
    $c.gus.cfDisableObjects($p, [lc_srcCls]);
  }
  if (lc_draft_check_cls_cd.getValue() == scwin.ELECTRONICDRAFT) {
    lc_bankCd.setDisabled(false);
  } else {
    lc_bankCd.setSelectedIndex(0);
    lc_bankCd.setDisabled(true);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_draft_check_cls_cd',style:'width: 150px;',submenuSize:'fixed'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수취은행 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bankCd',style:'width: 150px;',submenuSize:'fixed'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'만기일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_prtDt',refEdDt:'',edFromId:'ica_startprtDt',edToId:'ica_endprtDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 150px;',allOption:'false',id:'lc_setlCls',class:'',direction:'auto'}},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 150px;',allOption:'false',id:'lc_srcCls',class:'',direction:'auto'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''}}]}]}]}]}]}]})