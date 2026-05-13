/*amd /AI/ilCommonResultDateChange.xml 4088 2834072ea53f25f8995f91603876fb7d446e9f278373569876edd5c38f5eab93 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.arrRtnVal = [];
scwin.bOptDisableTF = "";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  if (scwin.params != null) {
    if (scwin.params.bOptDisableTF != null) {
      scwin.bOptDisableTF = scwin.params.bOptDisableTF;
    }
  }
};
scwin.f_FieldClear = function () {
  if (scwin.bOptDisableTF == "T") return;
  $c.gus.cfInitObjects($p, tbl_search, null);
  ed_resultdt.setFocus();
};
scwin.f_WinClose = function () {
  scwin.arrRtnVal[0] = "N/A";
  scwin.arrRtnVal[1] = ed_resultdt.getValue().trim();
  $c.win.closePopup($p, scwin.arrRtnVal);
};
scwin.f_OpenCommonPopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  let rtnList = [];
  switch (disGubun) {
    case "oldDepartmentA":
      udc_olddept.ilCommonPopUp(scwin.callbackOldDepartmentA, ed_olddept.getValue().trim(), txt_olddeptnm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Department,Code,Name", pNoDataCloseTF);
      break;
    case "newDepartment":
      udc_newdept.ilCommonPopUp(scwin.callbackNewDepartment, ed_newdept.getValue().trim(), txt_newdeptnm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Department,Code,Name", pNoDataCloseTF);
      break;
    default:
      break;
  }
};
scwin.callbackOldDepartmentA = function (rtnList) {
  if (typeof rtnList != "undefined") {
    if (rtnList[0] != "N/A") {
      $c.gus.cfSetReturnValue($p, rtnList, ed_olddept, txt_olddeptnm);
    }
  }
};
scwin.callbackNewDepartment = function (rtnList) {
  if (typeof rtnList != "undefined") {
    if (rtnList[0] != "N/A") {
      $c.gus.cfSetReturnValue($p, rtnList, ed_newdept, txt_newdeptnm);
    }
  } else {
    ed_newdept.setValue("");
    txt_newdeptnm.setValue("");
  }
};
scwin.ed_newdept_onblur = function (e) {
  let strClntNo = ed_newdept.getValue().trim();
  if (strClntNo.length > 0) {
    txt_newdeptnm.setValue("");
    scwin.f_OpenCommonPopUp("newDepartment", "T", "F", "F");
  } else {
    txt_newdeptnm.setValue("");
  }
};
scwin.btn_trigger2_onclick = function (e) {
  scwin.f_WinClose();
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt-dot mb16',escape:'false',id:'',label:'B/L Result Date는 반드시 해당 B/L 화면에서 직접 수정 하셔야 합니다.',style:''}},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:200px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'New Result Date',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_resultdt',style:'',mandatory:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})