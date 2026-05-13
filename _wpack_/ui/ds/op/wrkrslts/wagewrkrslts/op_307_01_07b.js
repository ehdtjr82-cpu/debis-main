/*amd /ui/ds/op/wrkrslts/wagewrkrslts/op_307_01_07b.xml 11807 d97c10f9cb6cdfaaea33ed558865ff4bac2af75d0bf04382c8c1bdd3341ff522 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_creationConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'branCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStYmDd',name:'작업년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tskClsCd',name:'업무구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_creationConsequenceDTO',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'conseCntn',name:'결과내용',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_pierPierInnerWagesCreation',action:'/ds.op.wrkrslts.wagewrkrslts.CreatePierPierInsideMonthPublicChargesCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_creationConditionDTO","key":"IN_DS1"},{"id":"ds_creationConsequenceDTO","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_creationConsequenceDTO","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_pierPierInnerWagesCreation_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 물류/작업실적/노임/월제세공과금생성 - 부두

scwin.memJson = $c.data.getMemInfo($p);
scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.vQryStDt = scwin.vCurDate.substring(0, 6);

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // scwin.f_SetDataHeader();
  scwin.f_SetDefaultData();
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  // lc_branCd.MaxLength = "1";
  lc_branCd.setSelectedIndex(0);
  ed_wrkStYmDd.setValue(scwin.vQryStDt); // 작업년월
  // cfSetIMEModeActiveObjects([txt_wrkPlNm]);  // IME 한글입력

  // lc_branCd.Index = lc_branCd.IndexOfColumn("code", "<%= DCheckIf.isNullToBlank(loginDTO.getLobranCd()) %>");
  if (scwin.memJson.lobranCd != "") {
    lc_branCd.setValue(scwin.memJson.lobranCd);
  }
  lc_branCd.focus();
};

//-------------------------------------------------------------------------
// 항차 조회(선박 선택시)
//-------------------------------------------------------------------------
scwin.f_RetrievePortCount = function () {
  // ds_portcntList.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=WorkPlaceEachGoodsEBC&queryId=retrivecPortcntList&param1=" + ed_vsslCd.text;
  // ds_portcntList.Reset();
  ds_portcntList.set("param1", ed_vsslCd.getValue());
};

//-------------------------------------------------------------------------
// 부두부두내월제세공과금생성
//-------------------------------------------------------------------------
scwin.f_RegistWagesCreationPierPierInside = async function () {
  if (!(await $c.gus.cfValidate($p, [lc_branCd, ed_wrkStYmDd]))) {
    return;
  }
  ds_creationConditionDTO.set("tskClsCd", "A"); // 업무구분코드

  if (await $c.win.confirm($p, "월제세공과금(부두)을(를) 생성하시겠습니까?")) {
    // @을(를) 생성하시겠습니까?
    $c.gus.cfEnableObj($p, btn_Save, false);
    // cfShowDSWaitMsg(tr_pierPierInnerWagesCreation, 290, 200);
    await $c.sbm.execute($p, sbm_pierPierInnerWagesCreation);
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      // 작업장 팝업
      udc_wrkPlCd.setSelectId("retrieveWrkPlInfo");
      udc_wrkPlCd.cfCommonPopUp(scwin.udc_wrkPlCd_callBackFun, pCode.trim(), pName, pClose, null, null, null, null, ',' + lc_branCd.getValue() + '', null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      // 선박 팝업
      rtnList = cfCommonPopUp('retrieveVsslCdInfo', pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      cfSetReturnValue(rtnList, ed_vsslCd, txt_vsslNm); // 선박코드, 선박명
      f_RetrievePortCount(); // 항차 조회
      break;
    default:
      break;
  }
};
scwin.udc_wrkPlCd_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, txt_wrkPlNm); // 작업장코드, 작업장명
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    // inObj가 코드 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};
scwin.sbm_pierPierInnerWagesCreation_submitdone = async function (e) {
  // cfHideDSWaitMsg(tr_pierPierInnerWagesCreation, 290, 200);
  var conseCntn = ds_creationConsequenceDTO.getCellData(0, "conseCntn"); // 결과내용
  await $c.gus.cfAlertMsg($p, conseCntn.simpleReplace("##", "<br>"));
  $c.gus.cfEnableObj($p, btn_Save, true);
};

// <!-- 작업장 공통POP-UP -->
scwin.udc_wrkPlCd_onblurCodeEvent = function (e) {
  // for=ed_wrkPlCd event=onKillFocus()
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, txt_wrkPlNm, 1);
};
scwin.udc_wrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_wrkPlNm, ed_wrkPlCd, 1, false);
};
scwin.udc_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_wrkPlCd.getValue(), txt_wrkPlNm.getValue(), 'F', 'T');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_RegistWagesCreationPierPierInside',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:180px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:180px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_branCd',search:'start',style:'',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'data:ds_creationConditionDTO.branCd',visibleRowNum:'15',mandatory:'true',title:'점소',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부산지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'울산지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6BB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'충남지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전남지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'동해지점'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2AA'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_wrkPlCd',codeId:'ed_wrkPlCd',btnId:'btn_wrkPlCd',nameId:'txt_wrkPlNm',selectID:'retrieveWrkPlInfo','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent',refDataCollection:'ds_creationConditionDTO',code:'wrkPlCd',objTypeCode:'data',maxlengthCode:'5',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',objTypeName:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업년월',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_wrkStYmDd',style:'',pickerType:'dynamic',ref:'data:ds_creationConditionDTO.wrkStYmDd',mandatory:'true',title:'작업년월',objType:'data'}}]}]}]}]}]}]}]}]}]})