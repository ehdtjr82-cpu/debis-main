/*amd /AI/se_208_01_01b.xml 8615 6c59fe74ea6c17159a184dd9649d06ef92a2fba08120fbd34e72922c97b5d58e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_houseList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.hd_kcomcd = "DBEX";
scwin.userId = "";
scwin.loginClntNo = "";
scwin.loginClntNm = "";
scwin.userClsCd = "";
scwin.vCurDate = "";
scwin.strPreDate = "";
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strPreDate = $c.date.addDate($p, scwin.vCurDate, -2);
  scwin.userId = $c.ses.getUserId();
  scwin.loginClntNo = $c.ses.getClntNo() == null ? "" : $c.ses.getClntNo();
  scwin.loginClntNm = $c.ses.getClntNm();
  scwin.userClsCd = $c.ses.getUserClsCd();
};
scwin.onUdcCompleted = function () {
  rd_hhio.setValue("I");
  udc_hheta.setInitDate(scwin.strPreDate, scwin.vCurDate);
  lc_prttype.setValue("");
};
scwin.f_PopUp = function (disGubun, chgGubun) {
  let rtnList = [];
  switch (disGubun) {
    case "Customer":
      udc_hhactcust.ilCommonPopUp(scwin.callbackCustomer, ed_hhactcust.getValue().trim(), txt_hhactcustnm.getValue(), chgGubun, '10', 'Customer Code,Customer Name,Address1,Address2,Address3,Address4,Tel,,,CRN', '140,300,100,100,100,100,100,,,100', '8,9', null, '500', '500', null, null, null, "F", 'Customer search,Customer Code,Customer Name');
      break;
    case "Liner":
      udc_hhliner.ilCommonPopUp(scwin.callbackLiner, ed_hhliner.getValue().trim(), txt_hhlinernm.getValue(), chgGubun, '10', 'Liner Code,Liner Name,Address1,Address2,Address3,Address4,Tel,,,CRN', '140,300,100,100,100,100,100,,,100', '8,9', null, '500', '500', null, null, null, "F", 'Liner search,Liner Code,Liner Name');
      break;
  }
};
scwin.callbackCustomer = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_hhactcust, txt_hhactcustnm);
};
scwin.callbackLiner = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_hhliner, txt_hhlinernm);
};
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  let rtnList = [];
  switch (gubun1) {
    case "Salesman":
      udc_hhsales.ilCommonPopUp(scwin.callbackSalesman, ed_hhsales.getValue().trim(), txt_hhsalesnm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Salesman,Code,Name", pNoDataCloseTF);
      break;
  }
};
scwin.callbackSalesman = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_hhsales, txt_hhsalesnm);
};
scwin.btn_Print_onclick = async function (e) {
  await scwin.f_Print();
};
scwin.f_Print = async function () {
  if (ica_hhetaFrom.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["ETA From"]);
    ica_hhetaFrom.setFocus();
    return false;
  }
  if (ica_hhetaTo.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["ETA To"]);
    ica_hhetaTo.setFocus();
    return false;
  }
  let odiParam = new ODIParam("se_110_01_01");
  odiParam.add("KCOMCD", scwin.hd_kcomcd);
  odiParam.add("IOGB", rd_hhio.getValue());
  odiParam.add("FROM_DATE", ica_hhetaFrom.getValue());
  odiParam.add("TO_DATE", ica_hhetaTo.getValue());
  odiParam.add("TYPE", lc_prttype.getValue());
  odiParam.add("CUSTOMER", ed_hhactcust.getValue());
  odiParam.add("LINER", ed_hhliner.getValue());
  odiParam.add("SALES", ed_hhsales.getValue());
  odiParam.add("USERID", scwin.userId);
  let formParam = new FormParam();
  let viewerParam = new ViewerParam();
  viewerParam.add("viewer.useprogressbar", "false");
  $c.gus.cfOZPreview($p, "/il/seaout/se_110_01_01.ozr", odiParam, viewerParam, formParam);
};
scwin.ed_hhactcust_onblur = function (e) {
  let strClntNo = "";
  strClntNo = ed_hhactcust.getValue().trim();
  if (strClntNo.length > 0) {
    txt_hhactcustnm.setValue("");
    scwin.f_PopUp('Customer', 'T');
  } else {
    txt_hhactcustnm.setValue("");
  }
};
scwin.ed_hhliner_onblur = function (e) {
  let strClntNo = "";
  strClntNo = ed_hhliner.getValue().trim();
  if (strClntNo.length > 0) {
    txt_hhlinernm.setValue("");
    scwin.f_PopUp('Liner', 'T');
  } else {
    txt_hhlinernm.setValue("");
  }
};
scwin.ed_hhsales_onblur = function (e) {
  let strClntNo = "";
  strClntNo = ed_hhsales.getValue().trim();
  if (strClntNo.length > 0) {
    txt_hhsalesnm.setValue("");
    scwin.f_OpenCommonPopUp("Salesman", "T", "F", "F");
  } else {
    txt_hhsalesnm.setValue("");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_hhio',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',mandatory:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETA',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_hheta',refDataMap:'',refEdDt:'ica_hhetaTo',refStDt:'ica_hhetaFrom',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_prttype',search:'start',style:'width:150px;',submenuSize:'auto',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_hhactcust',nameId:'txt_hhactcustnm',popupID:'',selectID:'',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Liner',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_hhliner',nameId:'txt_hhlinernm',popupID:'',selectID:'',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Salesman',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_hhsales',nameId:'txt_hhsalesnm',popupID:'',selectID:'',style:'',validTitle:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Print','ev:onclick':'scwin.btn_Print_onclick',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Print'}]}]}]}]}]}]}]}]}]})