/*amd /ui/to/in/bulk/tmlbulk/in_201_02_14p.xml 4630 3eba2cc6864a8af87c6036c0e0c38624d6fc89734e8c44931ae3ff21f8379ac1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// AS-IS 에 선언되어 있지만 사용하지 않고 있어서 주석 처리 (26.04.08)
// scwin.empNo = $c.data.getMemInfo("userId");

scwin.onpageload = function () {
  // 부모창에서 받아오는 파라미터
  scwin.params = $c.data.getParameter($p);

  // 작업시프트
  const codeOptions = [{
    grpCd: "TB005",
    compID: "lc_wrkShift"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.commonCodeCallbackFunc);
};

//-------------------------------------------------------------------------
// 공통 코드 콜백함수 - 작업시프트(lc_wrkShift)
//-------------------------------------------------------------------------
scwin.commonCodeCallbackFunc = function () {
  $c.gus.cfSetValue($p, ed_wrkDt, scwin.params.ica_wrkDt);
  $c.gus.cfSetValue($p, lc_wrkShift, scwin.params.lc_wrkShift);
};

//-------------------------------------------------------------------------
// Windows Close
//-------------------------------------------------------------------------
scwin.f_WinClose = function () {
  $c.win.closePopup($p, "");
};

//-------------------------------------------------------------------------
// Windows Return
//-------------------------------------------------------------------------
scwin.f_Apply = async function () {
  // ValidExp Setting
  $c.gus.setValidExp($p, ed_wrkDt, "작업일자:yes:length=8");
  $c.gus.setValidExp($p, lc_wrkShift, "작업일자:yes");
  let chk = await $c.gus.cfValidate($p, [ed_wrkDt, lc_wrkShift], null, true);
  if (!chk) return;
  let returnValue = {
    "wrkDt": ed_wrkDt.getValue(),
    "wrkShift": lc_wrkShift.getValue()
  };
  $c.win.closePopup($p, returnValue);
};

// 적용 버튼
scwin.btn_apply_onclick = function (e) {
  scwin.f_Apply();
};

// 닫기 버튼
scwin.btn_close_onclick = function (e) {
  scwin.f_WinClose();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'content'},E:[{T:1,N:'w2:wframe',A:{id:'sp_title',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작업일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_wrkDt',class:'w150',calendarValueType:'yearMonthDate',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작업시프트',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'fixed',editType:'select',style:'',id:'lc_wrkShift',class:'w150',mandatory:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'pop-btnbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_apply',type:'button',class:'btn','ev:onclick':'scwin.btn_apply_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'적용'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_close',type:'button',class:'btn','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]}]})