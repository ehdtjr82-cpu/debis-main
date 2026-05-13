/*amd /ui/ds/op/wrkrslts/wagewrkrslts/op_307_01_06b.xml 25067 81f51069f2b4b3f8f9dad38053c2c5ab86e31610420eec17d99070c629a13139 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_portcntList',saveRemovedData:'true','ev:ondataload':'scwin.ds_portcntList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_creationConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'branCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'선박',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expimpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStYmDd',name:'작업시작년월일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndYmDd',name:'작업종료년원일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'nypayCreatYn',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ensureDailyWage',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_portcntList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:'WorkPlaceEachGoodsEBC'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:'retrivecPortcntList'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_creationConsequenceDTO',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'conseCntn',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wageRetroactTerm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_portcntList',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_portcntList',target:'data:json,{"id":"ds_portcntList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_pierPierInnerWagesCreation',action:'/ds.op.wrkrslts.wagewrkrslts.CreatePierPierInsideWagesCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_creationConditionDTO","key":"IN_DS1"},{"id":"ds_creationConsequenceDTO","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_creationConsequenceDTO","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_pierPierInnerWagesCreation_SubmitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_pierPierCrewsEach',action:'/ds.op.wrkrslts.wagewrkrslts.CreatePierPierInsideCrewsEachWagesCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_creationConditionDTO","key":"IN_DS1"},{"id":"ds_creationConsequenceDTO","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_creationConsequenceDTO","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_pierPierCrewsEach_SubmitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_wageRetroactTerm',action:'/cm.zz.RetrieveComboCMD.do?sysCd=WagesCreationPierPierInsideEBC&queryId=retriveWageRetroactTerm',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); // 회원 점소 데이터
scwin.vCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "SD060",
    compID: "acb_expimpClsCd"
  } // 셀렉트
  ];
  $c.data.setCommonCode($p, codeOptions, async () => {
    const r = await $c.sbm.execute($p, sbm_wageRetroactTerm);
    ds_wageRetroactTerm.setJSON(r.responseJSON.GAUCE);
    scwin.f_SetDefaultData();
  });
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  debugger;
  udc_calendar.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  if (scwin.f_IsWageRetroactTerm() == true) {
    // 노임 소급 기간
    cbx_nypayCreatYn.setValue("1");
  } else {
    cbx_nypayCreatYn.setValue("0");
  }
  acb_branCd.setValue(scwin.loUpperLobranCd);
};

//-------------------------------------------------------------------------
// 항차 조회(선박 선택시)
//-------------------------------------------------------------------------
scwin.f_RetrievePortCount = function () {
  dma_portcntList.set("param1", ed_vsslCd.getValue());
  $c.sbm.execute($p, sbm_portcntList);
};

//-------------------------------------------------------------------------
// 항차 조회(선박 선택시) f_RegistWagesCreationPierPierInside
//-------------------------------------------------------------------------
scwin.btn_save_onClick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [acb_branCd, ica_wrkStYmDd, ica_wrkEndYmDd]))) {
    return;
  }
  if (Number(ica_wrkStYmDd.getValue()) > Number(ica_wrkEndYmDd.getValue())) {
    await $c.win.alert($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ica_wrkStYmDd.focus();
    return;
  }
  dma_creationConditionDTO.set("branCd", acb_branCd.getValue());
  dma_creationConditionDTO.set("wrkPlCd", ed_wrkPlCd.getValue());
  dma_creationConditionDTO.set("vsslCd", ed_vsslCd.getValue());
  dma_creationConditionDTO.set("portcnt", acb_portcnt.getValue());
  dma_creationConditionDTO.set("expimpClsCd", acb_expimpClsCd.getValue());
  dma_creationConditionDTO.set("wrkStYmDd", ica_wrkStYmDd.getValue());
  dma_creationConditionDTO.set("wrkEndYmDd", ica_wrkEndYmDd.getValue());
  if (cbx_nypayCreatYn.getValue() == "1") {
    dma_creationConditionDTO.set("nypayCreatYn", 1);
  } else {
    dma_creationConditionDTO.set("nypayCreatYn", 0);
  }
  //일용보장 적용여부 
  dma_creationConditionDTO.set("ensureDailyWage", 0);
  if (await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_009, "노임(부두)"))) {
    // @을(를) 생성하시겠습니까?
    btn_save.setDisabled(true);
    $c.sbm.execute($p, sbm_pierPierInnerWagesCreation);
  }
};

//-------------------------------------------------------------------------
// 일용보장  노임 생성
//-------------------------------------------------------------------------
scwin.btn_Ensure_onClick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [acb_branCd, ica_wrkStYmDd, ica_wrkEndYmDd]))) {
    return;
  }
  if (!(await $c.gus.cfIsAfterDate($p, ica_wrkStYmDd.getValue(), ica_wrkEndYmDd.getValue()))) {
    $c.win.alert($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ica_wrkStYmDd.focus();
    return;
  }
  let check = acb_branCd.getValue();
  dma_creationConditionDTO.set("branCd", acb_branCd.getValue());
  dma_creationConditionDTO.set("wrkPlCd", ed_wrkPlCd.getValue());
  dma_creationConditionDTO.set("vsslCd", ed_vsslCd.getValue());
  dma_creationConditionDTO.set("portcnt", acb_portcnt.getValue());
  dma_creationConditionDTO.set("expimpClsCd", acb_expimpClsCd.getValue());
  dma_creationConditionDTO.set("wrkStYmDd", ica_wrkStYmDd.getValue());
  dma_creationConditionDTO.set("wrkEndYmDd", ica_wrkEndYmDd.getValue());
  if (check != "4AA") {
    $c.win.alert($p, " 일용보장 노임 생성은 인천지사만 가능 합니다.");
    return;
  }
  if (cbx_nypayCreatYn.getValue() == "1") {
    dma_creationConditionDTO.set("nypayCreatYn", "1");
  } else {
    dma_creationConditionDTO.set("nypayCreatYn", "0");
  }
  //일용보장 적용여부 
  dma_creationConditionDTO.set("ensureDailyWage", "1");
  if (await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_009, "일용보장 노임"))) {
    // @을(를) 생성하시겠습니까?
    btn_save.setDisabled(true);
    $c.sbm.execute($p, sbm_pierPierInnerWagesCreation);
  }
};

//-------------------------------------------------------------------------
// 반원별 노임 생성 / f_PierPierCrewsEach
//-------------------------------------------------------------------------
scwin.btn_SaveCrew_onClick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [acb_branCd, ica_wrkStYmDd, ica_wrkEndYmDd]))) {
    return;
  }
  if (!(await $c.gus.cfIsAfterDate($p, ica_wrkStYmDd.getValue(), ica_wrkEndYmDd.getValue()))) {
    $c.win.alert($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ica_wrkStYmDd.focus();
    return;
  }
  let check = acb_branCd.getValue();
  if (!(check == "4AA" || check == "3AA")) {
    $c.win.alert($p, " 반원별 노임 생성은 인천지사와 충남 지사만 가능 합니다.");
    return;
  }
  dma_creationConditionDTO.set("branCd", acb_branCd.getValue());
  dma_creationConditionDTO.set("wrkPlCd", ed_wrkPlCd.getValue());
  dma_creationConditionDTO.set("vsslCd", ed_vsslCd.getValue());
  dma_creationConditionDTO.set("portcnt", acb_portcnt.getValue());
  dma_creationConditionDTO.set("expimpClsCd", acb_expimpClsCd.getValue());
  dma_creationConditionDTO.set("wrkStYmDd", ica_wrkStYmDd.getValue());
  dma_creationConditionDTO.set("wrkEndYmDd", ica_wrkEndYmDd.getValue());
  if (await $c.win.confirm($p, " \"노조편성이력 등록\" 완료 후 진행하는 프로세스 입니다.<br> 계속하시겠습니까? ")) {
    // @을(를) 생성하시겠습니까?
    btn_save.setDisabled(true);
    $c.sbm.execute($p, sbm_pierPierCrewsEach);
  }
};

//-------------------------------------------------------------------------
// 노임소급기간 포함 여부
//-------------------------------------------------------------------------
scwin.f_IsWageRetroactTerm = function () {
  debugger;
  // 노임소급기간(OP280)
  let curDate = scwin.vCurDate.substring(4, 6);
  let fromMonth = ds_wageRetroactTerm.getCellData(0, "code");
  let toMonth = ds_wageRetroactTerm.getCellData(0, "name");
  if (Number(fromMonth) <= Number(curDate) && Number(toMonth) >= Number(curDate)) {
    return true;
  } else {
    return false;
  }
};

//-------------------------------------------------------------------------
// 소급분 미확정원가 생성 여부 체크시
//-------------------------------------------------------------------------
scwin.f_IsNypayCreatYn = async function (info) {
  if (scwin.f_IsWageRetroactTerm() == true && cbx_nypayCreatYn.getValue() == "0") {
    if (await $c.win.confirm($p, "미확정원가를 생성해야 되는 월입니다.<br>그래도 생성여부를 해제하시겠습니까?")) {
      cbx_nypayCreatYn.setValue("0");
    } else {
      cbx_nypayCreatYn.setValue("1");
    }
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (작업장)
//-------------------------------------------------------------------------
scwin.udc_wrkPl_onClick = async function (e) {
  scwin.f_openCommonPopUp(1, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'F', 'T');
};
scwin.udc_wrkPl_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlNm, 1);
};
scwin.udc_wrkPl_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 1, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(작업장)
//-------------------------------------------------------------------------
scwin.udc_wrkPl_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_wrkPlCd, ed_wrkPlNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (선박)
//-------------------------------------------------------------------------
scwin.udc_vssl_onClick = async function (e) {
  scwin.f_openCommonPopUp(2, ed_vsslCd.getValue(), ed_vsslNm.getValue(), 'F', 'T');
};
scwin.udc_vssl_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_vsslCd, ed_vsslNm, 2);
};
scwin.udc_vssl_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_vsslNm, ed_vsslCd, 2, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(선박)
//-------------------------------------------------------------------------
scwin.udc_vssl_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_vsslCd, ed_vsslNm);
  scwin.f_RetrievePortCount();
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  }
  // inObj가 코드명 필드일 경우 팝업
  else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
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
      udc_wrkPl.cfCommonPopUp(scwin.udc_wrkPl_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, ',' + acb_branCd.getValue() + '', null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      // 선박 팝업
      udc_vssl.cfCommonPopUp(scwin.udc_vssl_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.btn_init_onClick = function (e) {
  $c.gus.cfInitObjects($p, tb_mainData);
  ds_portcntList.removeAll();
  scwin.f_SetDefaultData();
};

//-------------------------------------------------------------------------
// 부두내 노임생성 성공시
//-------------------------------------------------------------------------
scwin.sbm_pierPierInnerWagesCreation_SubmitDone = function (e) {
  let conseCntn = ds_creationConsequenceDTO.getCellData(0, "conseCntn");
  $c.win.alert($p, $c.data.getMessage($p, conseCntn.simpleReplace("##", "<br>")));
  btn_save.setDisabled(false);
};

//-------------------------------------------------------------------------
// 반원별 노임생성 성공시
//-------------------------------------------------------------------------
scwin.sbm_pierPierCrewsEach_SubmitDone = function (e) {
  let conseCntn = ds_creationConsequenceDTO.getCellData(0, "conseCntn");
  $c.win.alert($p, conseCntn.simpleReplace("##", "<br>"));
  btn_save.setDisabled(false);
};

//-------------------------------------------------------------------------
// 선박 선택 후 항차 로드 완료시
//-------------------------------------------------------------------------
scwin.ds_portcntList_ondataload = function () {
  ds_portcntList.insertRow(0);
  ds_portcntList.setCellData(0, "name", "전체");
  ds_portcntList.setCellData(0, "code", "");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Ensure',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.btn_Ensure_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일용보장(인천)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_SaveCrew',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.btn_SaveCrew_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'반원별 노임 생성(인천)'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:180px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_branCd',search:'start',style:'',submenuSize:'fixed',mandatory:'true',validExp:'점소:yes',objType:'Data',allOption:'',chooseOption:'',ref:'data:dma_creationConditionDTO.branCd',chooseOptionLabel:'$blank',title:'점소',visibleRowNum:'6'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부산지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'울산지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6BB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'충남지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전남지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'동해지점'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2AA'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',id:'udc_wrkPl',selectID:'retrieveWrkPlInfo',btnId:'btn_wrkPl',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',objTypeCode:'Data',UpperFlagCode:'1',objTypeName:'data','ev:onclickEvent':'scwin.udc_wrkPl_onClick','ev:onblurCodeEvent':'scwin.udc_wrkPl_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_wrkPl_onChangeName'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_vsslCd',nameId:'ed_vsslNm',id:'udc_vssl',selectID:'retrieveVsslCdInfo',btnId:'btn_vssl',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4',objTypeCode:'Data',UpperFlagCode:'1',validExpCode:'선박:yes',maxlengthName:'50',objTypeName:'data',refDataCollection:'dma_creationConditionDTO','ev:onclickEvent':'scwin.udc_vssl_onClick','ev:onblurCodeEvent':'scwin.udc_vssl_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_vssl_onChangeName'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_portcnt',search:'start',style:'',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'',sortMethod:'ascending',sortOption:'value',visibleRowNum:'15'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_portcntList'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_expimpClsCd',search:'start',style:'',submenuSize:'fixed',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업월일 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_calendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_wrkStYmDd',edToId:'ica_wrkEndYmDd',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data',objTypeFrom:'Data',objTypeTo:'data',titleFrom:'작업시작년월일',titleTo:'작업종료년월일'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소급분 미확정원가 생성 여부 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_nypayCreatYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onchange':'scwin.f_IsNypayCreatYn',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]}]}]}]}]})