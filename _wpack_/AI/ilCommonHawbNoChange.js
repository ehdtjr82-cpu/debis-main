/*amd /AI/ilCommonHawbNoChange.xml 3926 eb82711fe152755ff33047883a788d0297777cf613e94b35ea7053c4b81457e9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.arrRtnVal = [];
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.pBlno = scwin.params != null && scwin.params["pBlno"] ? scwin.params["pBlno"] : "";
  ed_oldBlno.setValue(scwin.pBlno);
};
scwin.f_FieldClear = function () {
  if (scwin.bOptDisableTF == "T") return;
  $c.gus.cfInitObjects($p, tbl_search, null);
  txt_Condition2.setFocus();
};
scwin.f_WinClose = function () {
  scwin.arrRtnVal[0] = "N/A";
  scwin.arrRtnVal[1] = ed_newBlno.getValue();
  $c.win.closePopup($p, scwin.arrRtnVal);
};
scwin.btn_trigger2_onclick = function (e) {
  scwin.f_WinClose();
};
scwin.f_PopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  let rtnList = [];
  switch (disGubun) {
    case "oldCustomer":
      udc_comCode_Grid.ilCommonPopUp(scwin.callbackOldCustomer, ed_oldCust.getValue(), txt_oldCustnm.getValue(), pWinCloseTF, '6', 'Customer', '140,300', null, null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
      break;
    case "newCustomer":
      udc_comCode_Grid.ilCommonPopUp(scwin.callbackNewCustomer, ed_newCust.getValue().trim(), txt_newCustnm.getValue(), pWinCloseTF, '6', 'Customer', '140,300', null, null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
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
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:200px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Old House B/L No',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_oldBlno',style:'',readOnly:'true',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'New House B/L No',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_newBlno',style:'',mandatory:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})