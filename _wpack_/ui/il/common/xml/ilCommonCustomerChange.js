/*amd /ui/il/common/xml/ilCommonCustomerChange.xml 7602 0a6ab75de616bcd8d19848f1bf2098c4dcc7672c7a79b916f425f57d25863e51 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  scwin.f_FieldClear();
};
scwin.f_PopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var rtnList = new Array();
  switch (disGubun) {
    case "oldCustomer":
      //거래처 팝업(Search Shipper)
      udc_oldCustomer.ilCommonPopUp(scwin.udc_oldCustomer_callBackFunc, ed_oldCustCd.getValue().trim(), ed_oldCustNm.getValue(), pWinCloseTF, '6',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Customer',
      // Title순서	                                                           
      '140,300',
      // 보여주는 각 컬럼들의 폭	                                               
      null,
      // 컬럼중에서 숨기는	컬럼 지정	                                       
      null,
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
      '500',
      // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
      '500',
      // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
      null,
      // 윈도우 위치 Y좌표	                                                   
      null,
      // 윈도우 위치 X좌표                                                       
      null,
      // 중복체크여부	("F")                                                      
      pAllSearchTF,
      // 전체검색허용여부	("F")                                                  
      null,
      // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")  
      pNoDataCloseTF);
      break;
    case "newCustomer":
      //거래처 팝업(Search Shipper)
      udc_newCustomer.ilCommonPopUp(scwin.udc_newCustomer_callBackFunc, ed_newCustCd.getValue().trim(), ed_newCustNm.getValue(), pWinCloseTF, '6',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Customer',
      // Title순서	                                                           
      '140,300',
      // 보여주는 각 컬럼들의 폭	                                               
      null,
      // 컬럼중에서 숨기는	컬럼 지정	                                       
      null,
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
      '500',
      // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
      '500',
      // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
      null,
      // 윈도우 위치 Y좌표	                                                   
      null,
      // 윈도우 위치 X좌표                                                       
      null,
      // 중복체크여부	("F")                                                      
      pAllSearchTF,
      // 전체검색허용여부	("F")                                                  
      null,
      // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")  
      pNoDataCloseTF);
      break;
    default:
      break;
  }
};
scwin.udc_oldCustomer_callBackFunc = function (ref) {
  if (ref == null || ref == "N/A" || ref[0] == "N/A") {
    if (ed_oldCustCd.getValue() == "N/A") {
      ed_oldCustCd.setValue("");
    }
    ed_oldCustNm.setValue("");
    return;
  }
  if (ref != null) {
    ed_oldCustCd.setValue(ref[0]);
    ed_oldCustNm.setValue(ref[1]);
  }
};
scwin.udc_newCustomer_callBackFunc = function (ref) {
  if (ref == null || ref == "N/A" || ref[0] == "N/A") {
    if (ed_newCustCd.getValue() == "N/A") {
      ed_newCustCd.setValue("");
    }
    ed_newCustNm.setValue("");
    return;
  }
  if (ref != null) {
    ed_newCustCd.setValue(ref[0]);
    ed_newCustNm.setValue(ref[1]);
  }
};
scwin.udc_oldCustomer_onclickEvent = function (e) {
  scwin.f_PopUp("oldCustomer", "T", "F", "F");
};
scwin.udc_newCustomer_onclickEvent = function (e) {
  scwin.f_PopUp("newCustomer", "T", "F", "F");
};
scwin.f_FieldClear = function (e) {
  // 옵션이 Disable이면 종료
  // if (bOptDisableTF === "T") return;

  // 포커스 이동
  // ed_oldCustCd.focus();
};
scwin.f_WinClose = function (e) {
  var arrRtnVal = [];
  arrRtnVal[0] = "N/A";
  arrRtnVal[1] = ed_oldCustCd.getValue();
  arrRtnVal[2] = ed_oldCustNm.getValue();
  arrRtnVal[3] = ed_newCustCd.getValue();
  arrRtnVal[4] = ed_newCustNm.getValue();

  // WebSquare 팝업 반환
  $c.win.closePopup($p, arrRtnVal);
};
scwin.btn_close_onclick = function (e) {
  scwin.f_WinClose();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Old Customer',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_oldCustCd',nameId:'ed_oldCustNm',popupID:'',selectID:'retrieveEngClntInfo',style:'',validTitle:'',pTitle:'Customer',id:'udc_oldCustomer','ev:onclickEvent':'scwin.udc_oldCustomer_onclickEvent',code:'oldCustCd',name:'oldCustNm',btnId:'btn_oldCustCd',setNameOnBlurCode:'Y',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',allowCharCodeLength:'0',maxlengthCode:'6'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'New Customer',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_newCustCd',nameId:'ed_newCustNm',popupID:'',selectID:'retrieveEngClntInfo',style:'',validTitle:'',pTitle:'Customer',id:'udc_newCustomer','ev:onclickEvent':'scwin.udc_newCustomer_onclickEvent',code:'newCustCd',name:'newCustNm',btnId:'btn_newCustCd',setNameOnBlurCode:'Y',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',allowCharCodeLength:'0',maxlengthCode:'6'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'close'}]}]}]}]}]}]}]})