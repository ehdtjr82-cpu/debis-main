/*amd /ui/ds/op/wrkplan/stvwrkplan/op_204_03_02b.xml 44915 995971381a9cdb808136ba6b0406faae8de183495ce95a734531a69111fafc2e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobranCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_main',saveRemovedData:'true','ev:ondataload':'scwin.ds_main_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIntendDt',name:'작업투입예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'SHIFT구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStTm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndTm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdYn',name:'연장여부',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'ealyAtdYn',name:'조기출근여부',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'completeProcYn',name:'완료처리여부',dataType:'bigDecimal'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIntendDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shiftClsCd',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_shiftBasisHour',saveRemovedData:'true','ev:ondataload':'scwin.ds_shiftBasisHour_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStDt',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_staff1',saveRemovedData:'true','ev:ondataload':'scwin.ds_staff1_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmanYn',name:'CHIEF포맨여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tableFlag',name:'',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_staff2',saveRemovedData:'true','ev:ondataload':'scwin.ds_staff2_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급명',dataType:'text',length:'30'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'cfmanYn',name:'CHIEF포맨여부',dataType:'number',length:'1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_staff3',saveRemovedData:'true','ev:ondataload':'scwin.ds_staff3_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lunionInputCnt',name:'',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'servPstInputYn',name:'용역직투입여부',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'hveqDuseCnt',name:'중기일용수',dataType:'bigDecimal'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_heavy1',saveRemovedData:'true','ev:ondataload':'scwin.ds_heavy1_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'중기번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'code',name:'중기종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'규격;(ton)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'소속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo1',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNm1',name:'이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo2',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNm2',name:'이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnSeq',name:'배정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'existRow',name:'기존Row',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nesEqNrmCd',name:'필요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tformEqKndCd',name:'필요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputHveqCnt',name:'name25',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_heavy2',saveRemovedData:'true','ev:ondataload':'scwin.ds_heavy2_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nesEqNrmCd',name:'필요규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nesEqNrmNm',name:'필요규격;(ton)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnSeq',name:'배정순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqHveqCnt',name:'배정대수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inputHveqCnt',name:'투입대수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'existRow',name:'기존Row',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col17',name:'name17',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_completeYN'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkIndictNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'completeProcYn',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_delete'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkIndictNo',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobranCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.wrkplan.stvwrkplan.cmd.RetrieveWorkPlaceWorkPlanCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_shiftBasisHour","key":"OUT_DS1"},{"id":"ds_main","key":"OUT_DS2"},{"id":"ds_staff1","key":"OUT_DS3"},{"id":"ds_staff2","key":"OUT_DS4"},{"id":"ds_staff3","key":"OUT_DS5"},{"id":"ds_heavy1","key":"OUT_DS6"},{"id":"ds_heavy2","key":"OUT_DS7"},{"id":"dma_search","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_shiftBasisHour","key":"OUT_DS1"},{"id":"ds_main","key":"OUT_DS2"},{"id":"ds_staff1","key":"OUT_DS3"},{"id":"ds_staff2","key":"OUT_DS4"},{"id":"ds_staff3","key":"OUT_DS5"},{"id":"ds_heavy1","key":"OUT_DS6"},{"id":"ds_heavy2","key":"OUT_DS7"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_mainSave',action:'/ds.op.wrkplan.stvwrkplan.cmd.SaveWorkPlaceWorkPlanBasisInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_main","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_mainSave_submitDone','ev:submiterror':'scwin.sbm_mainSave_error',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_completeY',action:'/ds.op.wrkplan.stvwrkplan.cmd.CompletePlanCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_completeYN","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_completeY_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_completeN',action:'/ds.op.wrkplan.stvwrkplan.cmd.CompletePlanCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_completeYN","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_completeN_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ds.op.wrkplan.stvwrkplan.cmd.DeleteWorkPlaceWorkPlanCMD.do',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면내 사용 전역변수
//-------------------------------------------------------------------------
scwin.loginDto = $c.data.getMemInfo($p);
scwin.lobran = $c.data.getMemInfo($p, "loUpperLobranCd");
scwin.sCurrDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환

//-------------------------------------------------------------------------
// 탭 화면에 보내줘야할 사용 전역변수 셋팅
//-------------------------------------------------------------------------
scwin.lc_lobranCd = ""; //점소코드
scwin.lc_lobranNm = ""; //점소명
scwin.txtWrkStpCd = "";
scwin.txt_completeProcYn = "";
scwin.txtCfmanYn = "";
scwin.hid_txt_wrkCd = "";
scwin.hid_txt_inqDt = "";
scwin.hid_txt_lobranCd = "";
scwin.hid_txt_shiftClsCd = "";

// 탭1화면에서 사용할 데이터 선언 추후에 완료시 이벤트마다 전역변수에 값을 넣어주도록 설정해야함
scwin.searchKind = "";
scwin.acb_lobranCd = "";
scwin.acb_lobranNm = "";
scwin.txtWrkIndictNo = "";
scwin.p_staff1RowCnt = "";
scwin.p_staff2RowCnt = "";

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  tab_Control.activateTab(1);
  tab_Control.activateTab(0);
  //공통코드데이터 호출
  const codeOptions = [{
    grpCd: "OP117",
    compID: "acb_inqShift"
  } // 셀렉트
  ];
  $c.data.setCommonCode($p, codeOptions);
  $c.sbm.execute($p, sbm_lobran);
  btn_Complete.setStyle("display", "none");
  btn_Cancel.setStyle("display", "none");
  ica_inqDt.setValue(scwin.sCurrDate);
  $c.gus.cfEnableObj($p, ed_txtWrkIndictNo, false);
  scwin.f_objControl();
};

//-------------------------------------------------------------------------
// OBJ Disable
//-------------------------------------------------------------------------
scwin.f_objControl = function () {
  $c.gus.cfEnableObj($p, ica_wrkDt, false);
  $c.gus.cfEnableObj($p, ica_wrkStDt, false);
  $c.gus.cfEnableObj($p, ica_wrkStHh, false);
  $c.gus.cfEnableObj($p, ica_wrkEndDt, false);
  $c.gus.cfEnableObj($p, ica_wrkEndHh, false);
  $c.gus.cfEnableObj($p, cbx_extdYn, false);
  $c.gus.cfEnableObj($p, cbx_ealyAtdYn, false);
  $c.gus.cfEnableObj($p, btn_mainSave, false);
  $c.gus.cfEnableObj($p, btn_deleteAll, false);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_Onclick = async function () {
  scwin.acb_lobranCd = acb_lobranCd.getValue();
  // scwin.acb_lobranNm
  scwin.acb_lobranNm = acb_lobranCd.getText(true);
  if (!(await await $c.gus.cfValidate($p, [search_cond]))) {
    return;
  }
  if (acb_inqShift.getValue() != "D" && ica_inqDt.getValue() == "99999999") {
    $c.win.alert($p, "9999/99/99일자는 Shift가 주간인 경우만 조회가능합니다");
    return;
  }
  if (ica_inqDt.getValue() != "99999999") {
    // if(!$c.gus.cfValidateValue(ica_inqDt.getValue(),"date=YYYYMMDD")){
    if (!(await $c.date.isDate($p, ica_inqDt.getValue()))) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_018, "작업일자"));
      return false;
    }
  }
  ds_shiftBasisHour.removeAll();
  ds_main.removeAll();
  ds_staff1.removeAll();
  ds_staff2.removeAll();
  ds_staff3.removeAll();
  ds_heavy1.removeAll();
  ds_heavy2.removeAll();
  dma_search.undo();
  scwin.hid_txt_wrkCd = ed_works_01.getValue();
  scwin.hid_txt_inqDt = ica_inqDt.getValue();
  scwin.hid_txt_lobranCd = acb_lobranCd.getValue();
  scwin.hid_txt_shiftClsCd = acb_inqShift.getValue();
  dma_search.set("lobranCd", acb_lobranCd.getValue());
  dma_search.set("wrkPlCd", ed_works_01.getValue());
  dma_search.set("wrkIntendDt", ica_inqDt.getValue());
  dma_search.set("shiftClsCd", acb_inqShift.getValue());
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회 성공시
//-------------------------------------------------------------------------
scwin.sbm_search_submitDone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// Main저장 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_mainSave_onClick = async function () {
  let mainWrkStDtm = ica_wrkStDt.getValue() + ica_wrkStHh.getValue();
  let mainWrkEndDtm = ica_wrkEndDt.getValue() + ica_wrkEndHh.getValue();
  let wrkStDtm;
  let wrkEndDtm;
  if (!(await $c.gus.cfValidate($p, [ica_wrkStDt, ica_wrkStHh, ica_wrkEndDt, ica_wrkEndHh]))) {
    return;
  }
  if (ica_wrkEndDt.getValue() != "99999999") {
    if (!(await $c.date.isDate($p, ica_wrkEndDt.getValue()))) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_018, "작업시간"));
      return false;
    } else {
      $c.gus.cfValidate($p, ica_wrkEndDt.getValue(), "date=YYYYMMDD");
    }
  }

  //작업일자 Check	
  if (ica_wrkStDt.getValue() != "" && ica_wrkEndDt.getValue() != "") {
    if (!(await $c.gus.cfIsAfterDate($p, ica_wrkStDt.getValue(), ica_wrkEndDt.getValue(), false))) {
      $c.win.alert($p, MSG_CM_ERR_039);
      return;
    }
  }
  if (ica_wrkEndDt.getValue() != "99999999") {
    let diffDay = $c.date.diffDate($p, ica_wrkStDt.getValue(), ica_wrkEndDt.getValue());
    if (diffDay > 1) {
      $c.win.alert($p, "작업시간의 종료일자는 하루를 초과할 수 없습니다.");
      ica_wrkEndDt.focus();
      return;
    }
  }
  for (i = 0; i < ds_heavy1.getTotalRow(); i++) {
    wrkStDtm = ds_heavy1.getCellData(i, "wrkStDt") + ds_heavy1.getCellData(i, "wrkStHh");
    wrkEndDtm = ds_heavy1.getCellData(i, "wrkEndDt") + ds_heavy1.getCellData(i, "wrkEndHh");
    if (parseInt(wrkStDtm) < parseInt(mainWrkStDtm)) {
      $c.win.alert($p, "중기작업시간이 기본작업시간을 초과합니다.");
      return;
    }
    if (parseInt(wrkEndDtm) > parseInt(mainWrkEndDtm)) {
      $c.win.alert($p, "중기작업시간이 기본작업시간을 초과합니다.");
      return;
    }
  }
  for (i = 0; i < ds_heavy2.getTotalRow(); i++) {
    wrkStDtm = ds_heavy2.getCellData(i, "wrkStDt") + ds_heavy2.getCellData(i, "wrkStHh");
    wrkEndDtm = ds_heavy2.getCellData(i, "wrkEndDt") + ds_heavy2.getCellData(i, "wrkEndHh");
    if (parseInt(wrkStDtm) < parseInt(mainWrkStDtm)) {
      $c.win.alert($p, "중기작업시간이 기본작업시간을 초과합니다.");
      return;
    }
    if (parseInt(wrkEndDtm) > parseInt(mainWrkEndDtm)) {
      $c.win.alert($p, "중기작업시간이 기본작업시간을 초과합니다.");
      return;
    }
  }

  // ds_main.removeAll();

  // let insertRow = ds_main.insertRow();

  if (cbx_extdYn.getValue() == "") {
    ds_main.setCellData(0, "extdYn", "0"); // 연장여부
  }
  if (ds_main.getTotalRow() == 0) {
    ds_main.insertRow();
  }
  ds_main.setCellData(0, "wrkIndictNo", ed_txtWrkIndictNo.getValue());
  ds_main.setCellData(0, "wrkIntendDt", ica_wrkDt.getValue()); // 작업일자
  ds_main.setCellData(0, "shiftClsCd", scwin.hid_txt_shiftClsCd == "" ? acb_inqShift.getValue() : scwin.hid_txt_shiftClsCd); // SHIFT구분코드; 조회조건으로 set;
  ds_main.setCellData(0, "wrkStDt", ica_wrkStDt.getValue()); // 작업시작일시
  ds_main.setCellData(0, "wrkEndDt", ica_wrkEndDt.getValue()); // 작업종료일시
  ds_main.setCellData(0, "wrkStTm", ica_wrkStHh.getValue());
  ds_main.setCellData(0, "wrkEndTm", ica_wrkEndHh.getValue());
  ds_main.setCellData(0, "ealyAtdYn", cbx_ealyAtdYn.getValue()); // 조기출근여부
  ds_main.setCellData(0, "completeProcYn", scwin.txt_completeProcYn); // 완료처리여부
  // ds_main.setCellData(0,"completeProcYn", "1");  // 완료처리여부
  ds_main.setCellData(0, "wrkPlCd", scwin.hid_txt_wrkCd == "" ? ed_works_01.getValue() : scwin.hid_txt_wrkCd); // 작업장코드;조회조건으로 set;

  if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) {
    return;
  } else {
    await $c.sbm.execute($p, sbm_mainSave);
  }
};

//-------------------------------------------------------------------------
// ds_main 로드 완료시 탭화면들 Shift에 접근
//-------------------------------------------------------------------------
scwin.f_RetrievePierCd = function (wrkPlCd, wrkDt) {
  let tab1Index = tab_Control.getTabIndex("tabs1");
  let tab2Index = tab_Control.getTabIndex("tabs2");
  tab_Control.activateTab(tab1Index);
  tab_Control.activateTab(tab2Index);
  tab_Control.getWindow(tab1Index).scwin.shift(wrkPlCd, wrkDt);
  tab_Control.getWindow(tab2Index).scwin.shift(wrkPlCd, wrkDt);
};

//-------------------------------------------------------------------------
// 계획완료 버튼클릭
//-------------------------------------------------------------------------
scwin.f_completeY = async function () {
  if (scwin.searchKind == "" && ed_txtWrkIndictNo.getValue() == "") {
    $c.win.alert($p, "먼저 기본정보를 조회해 주십시오.");
    return;
  } else if (scwin.searchKind == "E") {
    $c.win.alert($p, "기본 정보를 등록하십시오.");
    return;
  }
  if ((await $c.win.confirm($p, "완료처리 하시겠습니까?")) == false) {
    return;
  }
  dma_completeYN.set("wrkIndictNo", ed_txtWrkIndictNo.getValue());
  dma_completeYN.set("completeProcYn", "1");
  $c.sbm.execute($p, sbm_completeY);
};

//-------------------------------------------------------------------------
// 계획취소 버튼클릭
//-------------------------------------------------------------------------
scwin.f_completeN = async function () {
  if (scwin.searchKind == "" && scwin.txtWrkIndictNo == "") {
    $c.win.alert($p, "먼저 기본정보를 조회해 주십시오.");
    return;
  } else if (scwin.searchKind == "E") {
    $c.win.alert($p, "기본 정보를 등록하십시오.");
    return;
  }
  if ((await $c.win.confirm($p, "취소처리 하시겠습니까?")) == false) {
    return;
  }
  dma_completeYN.set("wrkIndictNo", scwin.txtWrkIndictNo);
  dma_completeYN.set("completeProcYn", "0");
  $c.sbm.execute($p, sbm_completeN);
};

//-------------------------------------------------------------------------
// 전체삭제 처리
//-------------------------------------------------------------------------
scwin.btn_deleteAll_onClick = async function () {
  if (scwin.searchKind == "" && scwin.txtWrkIndictNo == "") {
    $c.win.alert($p, "먼저 기본정보를 조회해 주십시오.");
    return;
  } else if (scwin.searchKind == "E") {
    $c.win.alert($p, "기본 정보를 등록하십시오.");
    return;
  }
  let indictNo = scwin.txtWrkIndictNo;
  let result = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (!result) {
    return;
  } else {
    $c.sbm.setAction($p, sbm_delete, "/ds.op.wrkplan.stvwrkplan.cmd.DeleteWorkPlaceWorkPlanCMD.do?wrkIndictNo=" + indictNo);
    $c.sbm.execute($p, sbm_delete);
  }
  ;
};

//-------------------------------------------------------------------------
// tabs1에서 쓸 데이터
//-------------------------------------------------------------------------
scwin.acb_lobranCd_onChange = function (info) {
  scwin.acb_lobranCd = acb_lobranCd.getValue();
};

//-------------------------------------------------------------------------
// 조회 조건 초기화
//-------------------------------------------------------------------------
scwin.btn_init_onClick = function (e) {
  acb_lobranCd.setValue(scwin.lobran);
  acb_inqShift.setValue("");
  ed_works_02.setValue("");
  ica_inqDt.setValue(scwin.sCurrDate);
  $c.gus.cfInitObjects($p, [ed_works_01]);
  acb_lobranCd.focus();
};
scwin.sbm_lobran_submitDone = function (e) {
  acb_lobranCd.setValue(scwin.lobran);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (작업장)
//-------------------------------------------------------------------------
scwin.udc_comCode_ed_works_onClick = function (e) {
  scwin.f_openCommonPopUp(1, ed_works_01.getValue(), ed_works_02.getValue(), 'F', 'F');
};
scwin.udc_comCode_ed_works_onBlur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_works_01, ed_works_02, 1);
};
scwin.udc_comCode_ed_works_onChangeName = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_works_02, ed_works_01, 1, false);
};
scwin.udc_comCode_ed_works_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_works_01, ed_works_02);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      var wrkPlGbCd = "4";
      var lodeptCd = acb_lobranCd.getValue();
      var paramList = "," + lodeptCd + "," + wrkPlGbCd;
      udc_comCode_ed_works.cfCommonPopUp(scwin.udc_comCode_ed_works_callBackFunc, pCode, pName, pClose, null, null, null, null, paramList, null, null, null, null); // 작업장

      break;
  }
};

//-------------------------------------------------------------------------
// 전체저장 성공시
//-------------------------------------------------------------------------
scwin.sbm_mainSave_submitDone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) {
      return; //onFail
    }
    await $c.win.alert($p, MSG_CM_INF_001);
    scwin.searchKind = "S";
    scwin.btn_retrieve_Onclick();
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 계획저장 성공시
//-------------------------------------------------------------------------
scwin.sbm_completeY_submitDone = function (e) {
  btn_Complete.setStyle("display", "none");
  btn_Cancel.setStyle("display", "block");
  $c.win.alert($p, MSG_CM_INF_001);
};

//-------------------------------------------------------------------------
// 계획취소 성공시
//-------------------------------------------------------------------------
scwin.sbm_completeN_submitDone = function (e) {
  btn_Complete.setStyle("display", "block");
  btn_Cancel.setStyle("display", "none");
  $c.win.alert($p, MSG_CM_INF_001);
};

//-------------------------------------------------------------------------
// 삭제 성공시
//-------------------------------------------------------------------------
scwin.sbm_delete_submitDone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    ds_main.removeAll();
    ds_staff1.removeAll();
    ds_staff2.removeAll();
    ds_staff3.removeAll();
    ds_staff1.removeAll();
    btn_Complete.setStyle("display", "none");
    btn_Cancel.setStyle("display", "none");
    scwin.f_objControl();
    acb_lobranCd.focus();
    scwin.searchKind = "";
    scwin.txtWrkIndictNo = "";
    ed_txtWrkIndictNo.setValue("");
    ica_wrkDt.setValue("");
    ica_wrkEndDt.setValue("");
    ica_wrkEndHh.setValue("");
    ica_wrkStDt.setValue("");
    ica_wrkStHh.setValue("");
    tab_Control.getWindow(0).scwin.shift();
    tab_Control.getWindow(1).scwin.shift();
    await $c.win.alert($p, MSG_CM_INF_004);
  } catch (e) {
    console.log("sbm_delete_submitDone : " + e);
  }
};

//-------------------------------------------------------------------------
// 점소 변경시
//-------------------------------------------------------------------------
scwin.lobranCd_OnviewChange = function (info) {
  //2020.04.07 대구지점의 하위 CY는 7C04가 유일함 
  //박현동 주임 > 요청자에 의해 대구지점이면 해당 작업장으로 자동 세팅
  if (acb_lobranCd.getValue() == "7CC") {
    ed_works_01.setValue("7C04");
    ed_works_01.focus();
  } else {
    ed_works_01.setValue("");
    ed_works_02.setValue("");
  }
};
scwin.sbm_mainSave_error = function (e) {};
scwin.txtWrkIndictNo_change = function (info) {
  scwin.txtWrkIndictNo = ed_txtWrkIndictNo.getValue();
};
scwin.ica_inqDt_onblur = function (e) {
  let dateStr = ica_inqDt.getValue();
  let minY = 1900;
  let maxY = 2099;
  let strY = dateStr.substring(0, 4);

  // 형식 체크
  if (!$c.date.isDate($p, dateStr) && dateStr.length == 8 || parseInt(strY) < minY || parseInt(strY) > maxY) {
    $c.win.alert($p, "날짜 형식이 올바르지 않습니다.", function () {
      ica_inqDt.setValue("");
      ica_inqDt.focus();
      return;
    });
  }
};

//-------------------------------------------------------------------------
// 탭 화면 첫번째 데이터셋 로드시 (그리드로는 오른쪽 그리드)
//-------------------------------------------------------------------------
scwin.ds_staff1_ondataload = function () {
  tab_Control.getWindow(0).spa_totalRow1.setValue(ds_staff1.getTotalRow());
  tab_Control.getWindow(0).gr_staff1.refreshColumn("wrkStpCd");
  ds_staff1.undoAll();
  scwin.p_staff1RowCnt = ds_staff1.getTotalRow();
  tab_Control.getWindow(0).gr_staff1.setFocusedCell(0, 0);
};

//-------------------------------------------------------------------------
// 탭 화면 첫번째 데이터셋 로드시 (그리드로는 왼쪽 그리드)
//-------------------------------------------------------------------------
scwin.ds_staff2_ondataload = function () {
  tab_Control.getWindow(0).spa_totalRow2.setValue(ds_staff2.getTotalRow());
  tab_Control.getWindow(0).gr_staff2.refreshColumn("wrkStpCd");
  ds_staff1.undoAll();
  scwin.p_staff2RowCnt = ds_staff2.getTotalRow();
  if (scwin.p_staff1RowCnt + scwin.p_staff2RowCnt == 0 && tab_Control.getWindow(1).scwin.p_shiftSearch == "Y") {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
  tab_Control.getWindow(0).gr_staff2.setFocusedCell(0, 0);
};

//-------------------------------------------------------------------------
// 메인화면 메인 데이터셋 로드시
//-------------------------------------------------------------------------
scwin.ds_main_ondataload = function () {
  scwin.txtWrkIndictNo = ds_main.getCellData(0, "wrkIndictNo");
  ed_txtWrkIndictNo.setValue(ds_main.getCellData(0, "wrkIndictNo"));
  scwin.txt_completeProcYn = ds_main.getCellData(0, "completeProcYn");

  // tab_Control.getWindow(0).scwin.onpageload();
  // tab_Control.getWindow(1).scwin.onpageload();

  if (scwin.searchKind == "E") {
    //+ds_shiftBasisHour.getCellData(0, "wrkStHh")
    ica_wrkStDt.setValue(ds_shiftBasisHour.getCellData(0, "wrkStDt"));
    ica_wrkStHh.setValue(ds_shiftBasisHour.getCellData(0, "wrkStHh"));
    ica_wrkEndDt.setValue(ds_shiftBasisHour.getCellData(0, "wrkEndDt"));
    ica_wrkEndHh.setValue(ds_shiftBasisHour.getCellData(0, "wrkEndHh"));
  }
  let mainTotal = ds_main.getTotalRow();
  if (mainTotal == 0) {
    scwin.searchKind = "E";
    tab_Control.getWindow(0).ed_lunionInputCnt.setValue("");
    tab_Control.getWindow(0).ed_hveqDuseCnt.setValue("");
    $c.win.alert($p, MSG_CM_WRN_002);
    ica_wrkDt.setValue(ica_inqDt.getValue());
    $c.gus.cfEnableObj($p, ica_wrkDt, false);
    $c.gus.cfEnableObj($p, ica_wrkStDt, false);
    $c.gus.cfEnableObj($p, ica_wrkStHh, true);
    $c.gus.cfEnableObj($p, ica_wrkEndDt, true);
    $c.gus.cfEnableObj($p, ica_wrkEndHh, true);
    $c.gus.cfEnableObj($p, cbx_extdYn, true);
    $c.gus.cfEnableObj($p, cbx_ealyAtdYn, true);
    $c.gus.cfEnableObj($p, btn_mainSave, true);
    $c.gus.cfEnableObj($p, btn_deleteAll, true);
    $c.gus.cfEnableObj($p, tab_Control.getWindow(0).acb_planList, false);
    $c.gus.cfEnableObj($p, tab_Control.getWindow(1).acb_planList, false);
    $c.gus.cfEnableObj($p, tab_Control.getWindow(0).btn_shift, false);
    $c.gus.cfEnableObj($p, tab_Control.getWindow(1).btn_shift, false);
  } else {
    scwin.searchKind = "Q";
    ed_txtWrkIndictNo.setValue(ds_main.getCellData(0, "wrkIndictNo"));
    ica_wrkDt.setValue(ds_main.getCellData(0, "wrkIntendDt"));
    ica_wrkStDt.setValue(ds_main.getCellData(0, "wrkStDt"));
    ica_wrkStHh.setValue(ds_main.getCellData(0, "wrkStTm"));
    ica_wrkEndDt.setValue(ds_main.getCellData(0, "wrkEndDt"));
    ica_wrkEndHh.setValue(ds_main.getCellData(0, "wrkEndTm"));
    $c.gus.cfEnableObj($p, ica_wrkDt, false);
    $c.gus.cfEnableObj($p, ica_wrkStDt, false);
    $c.gus.cfEnableObj($p, ica_wrkStHh, true);
    $c.gus.cfEnableObj($p, ica_wrkEndDt, true);
    $c.gus.cfEnableObj($p, ica_wrkEndHh, true);
    $c.gus.cfEnableObj($p, cbx_extdYn, true);
    $c.gus.cfEnableObj($p, cbx_ealyAtdYn, true);
    $c.gus.cfEnableObj($p, btn_mainSave, true);
    $c.gus.cfEnableObj($p, btn_deleteAll, true);
    $c.gus.cfEnableObj($p, tab_Control.getWindow(0).acb_planList, true);
    $c.gus.cfEnableObj($p, tab_Control.getWindow(1).acb_planList, true);
    $c.gus.cfEnableObj($p, tab_Control.getWindow(0).btn_shift, true);
    $c.gus.cfEnableObj($p, tab_Control.getWindow(1).btn_shift, true);
    scwin.f_RetrievePierCd(ed_works_01.getValue(), ica_inqDt.getValue());
  }
  if (ds_main.getCellData(0, "completeProcYn") == 0) {
    btn_Complete.setStyle("display", "block");
    btn_Cancel.setStyle("display", "none");
  } else if (ds_main.getCellData(0, "completeProcYn") == 1) {
    btn_Complete.setStyle("display", "none");
    btn_Cancel.setStyle("display", "block");
  }
  tab_Control.getWindow(0).scwin.searchKind = scwin.searchKind;
  tab_Control.getWindow(1).scwin.searchKind = scwin.searchKind;
  cbx_extdYn.setValue(ds_main.getCellData(0, "extdYn"));
  cbx_ealyAtdYn.setValue(ds_main.getCellData(0, "ealyAtdYn"));
};

//-------------------------------------------------------------------------
// 두번째 탭 화면 데이터셋 로드시 (상단그리드)
//-------------------------------------------------------------------------
scwin.ds_heavy1_ondataload = function () {
  tab_Control.getWindow(1).spa_totalRows1.setValue(ds_heavy1.getTotalRow());
  tab_Control.getWindow(1).scwin.heqKndCd = ds_heavy1.getCellData(0, "eqKndCd");
  tab_Control.getWindow(1).scwin.heqKndNm = ds_heavy1.getCellData(0, "eqKndNm");
  tab_Control.getWindow(1).gr_heavy1.setFocusedCell(0, 0);
};

//-------------------------------------------------------------------------
// 두번째 탭 화면 데이터셋 로드시 (하단그리드)
//-------------------------------------------------------------------------
scwin.ds_heavy2_ondataload = function () {
  tab_Control.getWindow(1).spa_totalRows2.setValue(ds_heavy2.getTotalRow());
  tab_Control.getWindow(1).gr_heavy2.setFocusedCell(0, 0);
};
scwin.ds_staff3_ondataload = function () {
  tab_Control.getWindow(0).ed_lunionInputCnt.setValue(ds_staff3.getCellData(0, "lunionInputCnt"));
  tab_Control.getWindow(0).ed_hveqDuseCnt.setValue(ds_staff3.getCellData(0, "hveqDuseCnt"));
};
scwin.tab_Control_onchange = function (tabId, index, userTabId) {
  tab_Control.activateTab(index);
};
scwin.ds_shiftBasisHour_ondataload = function () {
  ica_wrkStDt.setValue(ds_shiftBasisHour.getCellData(0, "wrkStDt"));
  ica_wrkStHh.setValue(ds_shiftBasisHour.getCellData(0, "wrkStHh"));
  ica_wrkEndDt.setValue(ds_shiftBasisHour.getCellData(0, "wrkEndDt"));
  ica_wrkEndHh.setValue(ds_shiftBasisHour.getCellData(0, "wrkEndHh"));
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'search_cond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:' w200',editType:'select',id:'acb_lobranCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'','ev:onviewchange':'scwin.lobranCd_OnviewChange',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobranCd'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_works_01',nameId:'ed_works_02',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'5',objTypeCode:'data',validExpCode:'작업장:yes',mandatoryName:'true',validExpName:'작업장:yes',id:'udc_comCode_ed_works','ev:onclickEvent':'scwin.udc_comCode_ed_works_onClick','ev:onblurCodeEvent':'scwin.udc_comCode_ed_works_onBlur','ev:onviewchangeNameEvent':'scwin.udc_comCode_ed_works_onChangeName',selectID:'retrieveWrkPlInfo',mandatoryCode:'true',validTitle:'작업장'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_inqDt',style:'',objType:'data',mandatory:'true',editType:'select',title:'작업일자','ev:onblur':'scwin.ica_inqDt_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Shift',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w100',editType:'select',id:'acb_inqShift',search:'start',style:'',submenuSize:'auto',delimiter:'-',displayMode:'value delim label','ev:onchange':'scwin.acb_lobranCd_onChange'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onClick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_Onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'기본정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 20%;'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업지시번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w150',id:'ed_txtWrkIndictNo',placeholder:'',style:'',ref:'','ev:onchange':'scwin.txtWrkIndictNo_change'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업일자 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_wrkDt',class:' cal',objType:'data',calendarValueType:'yearMonthDate',ref:''}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Complete',type:'button',class:'btn',userAuth:'U','ev:onclick':'scwin.f_completeY'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계획완료'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_completeN'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계획취소'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업시간 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'group1',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkStDt',style:''}},{T:1,N:'xf:input',A:{class:'w50 tac',dataType:'time',id:'ica_wrkStHh',style:''}},{T:1,N:'xf:group',A:{class:'form-group',id:'group2',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkEndDt',style:''}},{T:1,N:'xf:input',A:{class:'w50 tac',dataType:'time',id:'ica_wrkEndHh',style:''}}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',disabled:'',style:'',id:'cbx_extdYn',rows:'',selectedindex:'1',class:'chk-grp',renderType:'checkboxgroup'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'연장'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'cbx_ealyAtdYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_mainSave',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_mainSave_onClick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_deleteAll',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_deleteAll_onClick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]},{T:1,N:'xf:group',A:{class:' tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'tab_Control',style:'','ev:onchange':'scwin.tab_Control_onchange'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'인원투입계획',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'중기투입계획',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:'',src:'/ui/ds/op/wrkplan/stvwrkplan/op_204_03_06b.xml'}},{T:1,N:'w2:content',A:{id:'content2',style:'',src:'/ui/ds/op/wrkplan/stvwrkplan/op_204_03_07b.xml',alwaysDraw:'false'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:';visibility:hidden;',id:'btn_1',label:'저장',type:'button',class:'btn',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:3,text:'작업일보'}]}]},{T:1,N:'xf:trigger',A:{style:';visibility:hidden;',id:'btn_2',label:'저장',type:'button',class:'btn',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:3,text:'중기운행일보'}]}]},{T:1,N:'xf:trigger',A:{style:';visibility:hidden;',id:'btn_3',label:'저장',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'작업계획서 및 안전교육일지'}]}]}]}]}]}]}]}]}]})