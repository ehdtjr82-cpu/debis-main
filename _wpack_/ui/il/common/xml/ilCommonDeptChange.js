/*amd /ui/il/common/xml/ilCommonDeptChange.xml 7486 6e8e9abe40adbf5a5a7d2b9c6a73777661b692db69a04794f6729c2053f46cc3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_oldDept'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'oldDeptCd',name:'oldDeptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oldDeptCdNm',name:'oldDeptCdNm',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);

  // dma_oldDept.set("oldDeptCd"     , scwin.params.oldDeptCd);
  // dma_oldDept.set("oldDeptCdNm"   , scwin.params.oldDeptCdNm);
  dma_oldDept.set("oldDeptCd", scwin.params.pdept);
  dma_oldDept.set("oldDeptCdNm", scwin.params.pdeptnm);
};
scwin.onUdcCompleted = function () {
  ed_oldDeptCode.setReadOnly(true);
  btn_oldDept.setDisabled(true);
  ed_oldDeptCodeName.setReadOnly(true);
};
scwin.f_OpenCommonPopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  if (disGubun == "oldDepartmentA") {
    // udc_dept.setSelectId("retrieveOpDeptCdInfo"); // XML상의 SELECT ID
    udc_oldDept.ilCommonPopUp(scwin.udc_oldDept_callBackFunc // 콜백 함수
    , ed_oldDeptCode.getValue() // 화면에서의 ??? Code Element의 Value
    , ed_oldDeptCodeName.getValue() // 화면에서의 ??? Name Element의 Value
    , pWinCloseTF // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
    , "2" // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
    , "Code, Name" // Title순서
    , "80, 230" // 보여주는 각 컬럼들의 폭
    , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는 컬럼 지정
    , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의 사용자 정의 폭
    , null // POP-UP뛰을때 우도우의 사용자 정의 높이
    , null // 윈도우 위치 Y좌표
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부 ("F")
    , pAllSearchTF // 전체검색허용여부 ("F")
    , "DEPT,Code,Name" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    , pNoDataCloseTF);
  }
  if (disGubun == "newDepartment") {
    // udc_dept.setSelectId("retrieveOpDeptCdInfo"); // XML상의 SELECT ID
    udc_newDept.ilCommonPopUp(scwin.udc_newDept_callBackFunc // 콜백 함수
    , ed_newDeptCode.getValue() // 화면에서의 ??? Code Element의 Value
    , ed_newDeptCodeName.getValue() // 화면에서의 ??? Name Element의 Value
    , pWinCloseTF // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
    , "2" // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
    , "Code, Name" // Title순서
    , "80, 230" // 보여주는 각 컬럼들의 폭
    , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는 컬럼 지정
    , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의 사용자 정의 폭
    , null // POP-UP뛰을때 우도우의 사용자 정의 높이
    , null // 윈도우 위치 Y좌표
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부 ("F")
    , pAllSearchTF // 전체검색허용여부 ("F")
    , "DEPT,Code,Name" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    , pNoDataCloseTF);
  }
};
scwin.udc_oldDept_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp("oldDepartmentA", "F", "F", "F");
};
scwin.udc_newDept_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp("newDepartment", "F", "F", "F");
};
scwin.udc_oldDept_onviewchangeCodeEvent = function (info) {
  scwin.f_OpenCommonPopUp("newDepartment", "T", "F", "F");
};
scwin.udc_newDept_onviewchangeCodeEvent = function (info) {
  var strClntNo = ed_newDeptCode.getValue().trim();
  if (ed_newDeptCode.isModified()) {
    if (strClntNo.length > 0) {
      ed_newDeptCodeName.setValue("");
      scwin.f_OpenCommonPopUp("newDepartment", "T", "F", "F");
    } else {
      ed_newDeptCodeName.setValue("");
    }
  }
};
scwin.udc_oldDept_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_oldDeptCode, ed_oldDeptCodeName);
};
scwin.udc_newDept_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_newDeptCode, ed_newDeptCodeName);
};
scwin.btn_close_onclick = function (e) {
  var arrRtnVal = [];
  arrRtnVal[0] = "N/A";
  arrRtnVal[1] = ed_newDeptCode.getValue().trim();
  arrRtnVal[2] = ed_newDeptCodeName.getValue().trim();
  $c.win.closePopup($p, arrRtnVal);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Old Department',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_oldDeptCode',nameId:'ed_oldDeptCodeName',popupID:'',selectID:'retrieveOpDeptCdInfo',style:'',validTitle:'',id:'udc_oldDept',btnId:'btn_oldDept','ev:onclickEvent':'scwin.udc_oldDept_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_oldDept_onviewchangeCodeEvent',code:'oldDeptCd',refDataCollection:'dma_oldDept',name:'oldDeptCdNm',setNameOnBlurCode:'Y',UpperFlagCode:'1',maxlengthCode:'4'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'New Department',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_newDeptCode',nameId:'ed_newDeptCodeName',popupID:'',selectID:'retrieveOpDeptCdInfo',style:'',validTitle:'',id:'udc_newDept',btnId:'btn_newDept','ev:onclickEvent':'scwin.udc_newDept_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_newDept_onviewchangeCodeEvent',setNameOnBlurCode:'Y',UpperFlagCode:'1',allowCharCodeLength:'0',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Close'}]}]}]}]}]}]}]})