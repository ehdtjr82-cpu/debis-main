/*amd /ui/ac/fi/taxbiz/tempjob/fi_405_01_03p.xml 11045 36f87ba1bb89841a29921cf7aca099a1eacde805852288c2c89dfe1698efdda5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payGbn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_create',action:'/ac.fi.taxbiz.tempjob.cmd.CreateTempJobAdjmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_create_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.valueObject;
scwin.ds_parent;
scwin.UserDeptCd; // 부모창에서 넘어온 Data Set
scwin.UserDeptNm;
scwin.UserCoCd;
scwin.UserCoNm;
scwin.UserCoClsCd;
scwin.PayYm;
scwin.txtCoClsCd;
scwin.onpageload = function () {
  scwin.valueObject = $c.data.getParameter($p);
  scwin.ds_parent = $c.data.getParameter($p, "prov");
  scwin.UserDeptCd = $c.data.getParameter($p, "UserDeptCd"); // 부모창에서 넘어온 Data Set
  scwin.UserDeptNm = $c.data.getParameter($p, "UserDeptNm");
  scwin.UserCoCd = $c.data.getParameter($p, "UserCoCd");
  scwin.UserCoNm = $c.data.getParameter($p, "UserCoNm");
  scwin.UserCoClsCd = $c.data.getParameter($p, "UserCoClsCd");
  scwin.PayYm = $c.data.getParameter($p, "PayYm");
};
scwin.onUdcCompleted = async function () {
  const codeOptions = [{
    grpCd: "FI115",
    compID: "acb_payGbn"
  }];
  $c.data.setCommonCode($p, codeOptions);
  ed_coCd.setValue(scwin.UserCoCd);
  ed_coNm.setValue(scwin.UserCoNm);
  scwin.txtCoClsCd = scwin.UserCoClsCd;
  $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm]);
  ed_acctDeptCd.setValue(scwin.UserDeptCd);
  ed_acctDeptNm.setValue(scwin.UserDeptNm);

  // 동원로엑스 - HR팀, 재경팀은 모든 귀속부서 조회가능
  // 넥스트로 - 기획관리팀(넥스트로) 모든 귀속부서 조회가능
  if (scwin.UserDeptCd == "00006" || scwin.UserDeptCd == "00009" || scwin.UserDeptCd == "01387") {
    $c.gus.cfEnableObjects($p, [ed_acctDeptCd, ed_acctDeptNm, btn_PopUp3]);
    ed_acctDeptCd.focus();
  } else {
    $c.gus.cfDisableObjects($p, [ed_acctDeptCd, ed_acctDeptNm, btn_PopUp3]);
  }
  ica_stdDt.setValue(scwin.PayYm);

  //  f_DefultSetting();	// 조회조건 기본값 셋팅
};

// 조회조건 기본값 셋팅
scwin.f_DefultSetting = function () {
  dma_search.set("stdYm", ds_parent.getCellData(0, "payYm"));
  dma_search.set("payGbn", ds_parent.getCellData(0, "payGbn"));
};

// 생성
scwin.f_Create = async function () {
  //생성조건 입력여부 및 형식 체크
  if (!(await $c.gus.cfValidate($p, [ica_stdDt, ed_acctDeptCd]))) return;
  debugger;
  $c.sbm.execute($p, sbm_create);
};

// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  var rtnList = "";
  switch (disGubun) {
    case 1:
      // 성명
      var param = "," + ed_coCd.getValue();
      rtnList = udc_StaffList.cfCommonPopUp(scwin.udc_StaffList_callBack, pCode, pName, pClose, null, null, null, null, param, null, null, null, null); //직원
      // cfSetReturnValue(rtnList, ed_staffNo, txt_staffNm);
      break;
    case 2:
      // 부서
      var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",";
      rtnList = udc_retrieveAcctDept.cfCommonPopUp(scwin.udc_retrieveAcctDept_callBack, pCode, pName, pClose, null, null, null, null, param, null, null, null, null); // 부서
      // cfSetReturnValue(rtnList, ed_acctDeptCd, txt_acctDeptNm);
      break;
    default:
      return;
  }
};
scwin.udc_StaffList_callBack = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_staffNo, ed_staffNm);
};
scwin.udc_retrieveAcctDept_callBack = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_acctDeptCd, ed_acctDeptNm);
};
scwin.btn_create_onclick = function (e) {
  scwin.f_Create();
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.udc_retrieveAcctDept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
};
scwin.udc_retrieveAcctDept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_acctDeptCd, ed_acctDeptNm, 2);
};
scwin.udc_retrieveAcctDept_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_acctDeptNm, ed_acctDeptCd, 33, false);
};
scwin.udc_StaffList_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_staffNo.getValue(), ed_staffNm.getValue(), 'F', 'F');
};
scwin.udc_StaffList_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_staffNo, ed_staffNm, 1);
};
scwin.udc_StaffList_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_staffNm, ed_staffNo, 1, false);
};
scwin.sbm_create_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'급여년월',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_stdDt',style:'',mandatory:'true',title:'급여년월',ref:'data:dma_search.stdYm',displayFormat:'yyyy/MM'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_coCd',class:'',mandatory:'true',title:'회사코드'}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_coNm',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo6',codeId:'ed_acctDeptCd',validTitle:'',nameId:'ed_acctDeptNm',style:'',objTypeCode:'key',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_retrieveAcctDept',refDataCollection:'dma_search',maxlengthName:'30',code:'acctDeptCd','ev:onclickEvent':'scwin.udc_retrieveAcctDept_onclickEvent',btnId:'btn_PopUp3',mandatoryCode:'true',objTypeName:'key','ev:onblurCodeEvent':'scwin.udc_retrieveAcctDept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_retrieveAcctDept_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'급여구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_payGbn',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:dma_search.payGbn'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사원',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveStaffListForDayLaborers',codeId:'ed_staffNo',validTitle:'',nameId:'ed_staffNm',style:'',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_StaffList',refDataCollection:'dma_search',maxlengthName:'30',code:'staffNo',mandatoryCode:'true',btnId:'btn_PopUp1','ev:onclickEvent':'scwin.udc_StaffList_onclickEvent','ev:onblurCodeEvent':'scwin.udc_StaffList_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_StaffList_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_create',style:'',type:'button','ev:onclick':'scwin.btn_create_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]}]}]}]}]}]})