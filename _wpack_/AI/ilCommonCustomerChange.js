/*amd /AI/ilCommonCustomerChange.xml 4792 f20519824a19582c35d02399fb0d169b288f6cdeb7a971a16c0d772959a6d5d8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.arrRtnVal = [];
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
};
scwin.onUdcCompleted = function () {
  if (scwin.params != null && !$c.gus.cfIsNull($p, scwin.params["oldCust"])) {
    ed_oldCust.setValue(scwin.params["oldCust"]);
  }
  if (scwin.params != null && !$c.gus.cfIsNull($p, scwin.params["oldCustnm"])) {
    txt_oldCustnm.setValue(scwin.params["oldCustnm"]);
  }
};
scwin.f_FieldClear = function () {
  if (scwin.bOptDisableTF == "T") return;
  $c.gus.cfInitObjects($p, tbl_search, null);
  ed_newCust.setFocus();
};
scwin.f_WinClose = function () {
  scwin.arrRtnVal[0] = "N/A";
  scwin.arrRtnVal[1] = ed_oldCust.getValue();
  scwin.arrRtnVal[2] = txt_oldCustnm.getValue();
  scwin.arrRtnVal[3] = ed_newCust.getValue();
  scwin.arrRtnVal[4] = txt_newCustnm.getValue();
  $c.win.closePopup($p, scwin.arrRtnVal);
};
scwin.f_PopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  switch (disGubun) {
    case "oldCustomer":
      udc_oldCust.ilCommonPopUp(scwin.callbackOldCustomer, ed_oldCust.getValue(), txt_oldCustnm.getValue(), pWinCloseTF, '6', 'Customer', '140,300', null, null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
      break;
    case "newCustomer":
      udc_newCust.ilCommonPopUp(scwin.callbackNewCustomer, ed_newCust.getValue().trim(), txt_newCustnm.getValue(), pWinCloseTF, '6', 'Customer', '140,300', null, null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
      break;
    default:
      break;
  }
};
scwin.callbackOldCustomer = function (rtnList) {
  if (typeof rtnList != "undefined") {
    if (rtnList[0] != "N/A") {
      $c.gus.cfSetReturnValue($p, rtnList, ed_oldCust, txt_oldCustnm);
    }
  }
};
scwin.callbackNewCustomer = function (rtnList) {
  if (typeof rtnList != "undefined") {
    if (rtnList[0] != "N/A") {
      $c.gus.cfSetReturnValue($p, rtnList, ed_newCust, txt_newCustnm);
    }
  }
};
scwin.ed_oldCust_onblur = function (e) {
  let strClntNo = ed_oldCust.getValue().trim();
  if (strClntNo.length > 0) {
    txt_oldCustnm.setValue("");
    scwin.f_PopUp("oldCustomer", "T", "F", "F");
  }
};
scwin.ed_newCust_onblur = function (e) {
  let strClntNo = ed_newCust.getValue().trim();
  if (strClntNo.length > 0) {
    txt_newCustnm.setValue("");
    scwin.f_PopUp("newCustomer", "T", "F", "F");
  }
};
scwin.btn_trigger2_onclick = function (e) {
  scwin.f_WinClose();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/cm/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Old Customer',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{id:'udc_oldCust',codeId:'ed_oldCust',nameId:'txt_oldCustnm',popupID:'',selectID:'',style:'',validTitle:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'New Customer',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{id:'udc_newCust',codeId:'ed_newCust',nameId:'txt_newCustnm',popupID:'',selectID:'',style:'',validTitle:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})