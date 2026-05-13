/*amd /ui/ac/fi/taxbiz/tempjob/fi_405_01_02b.xml 89924 ef1b1017c1697378e062ac8144e4fa039d9a64ece68ef8cea5a48caf22dc482d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'acctDeptCd',name:'acctDeptCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'outbrStDt',name:'outbrStDt'}},{T:1,N:'w2:key',A:{dataType:'text',id:'outbrEndDt',name:'outbrEndDt'}},{T:1,N:'w2:key',A:{dataType:'text',id:'gubun',name:'gubun'}},{T:1,N:'w2:key',A:{dataType:'text',id:'state',name:'state'}},{T:1,N:'w2:key',A:{dataType:'text',id:'staffNo',name:'staffNo'}},{T:1,N:'w2:key',A:{dataType:'text',id:'workStsCd',name:'workStsCd'}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload','ev:oncelldatachange':'scwin.ds_master_oncelldatachange','ev:onbeforecelldatachange':'scwin.ds_master_onbeforecelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'chk',name:'선택'}},{T:1,N:'w2:column',A:{dataType:'text',id:'workStsCd',name:'상태'}},{T:1,N:'w2:column',A:{dataType:'text',id:'staffNo',name:'사원;번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'staffNm',name:'성명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'occptypeCd',name:'직종'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dtlOccptypeCd',name:'상세;직종'}},{T:1,N:'w2:column',A:{dataType:'text',id:'occpgrdCd',name:'직급'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptCd',name:'부서;코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptNm',name:'부서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'annualYn',name:'연차;여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'offDayYn',name:'휴일;여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mealTimeYn',name:'중식;여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'workStDt',name:'시작;일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'workStHh',name:'시작;시간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'workEndDt',name:'종료;일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'workEndHh',name:'종료;시간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reworkStDt',name:'시작;일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reworkStHh',name:'시작;시간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reworkEndDt',name:'종료;일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reworkEndHh',name:'종료;시간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rltWorkHh',name:'근무;시간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'extdWorkHh',name:'연장;시간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ngtWorkHh',name:'야간;시간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'offWorkHh',name:'휴일;시간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'daySalaryAmt',name:'일;급여액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'foodYn',name:'식대'}},{T:1,N:'w2:column',A:{dataType:'text',id:'etcAlowAmt',name:'기타;소득'}},{T:1,N:'w2:column',A:{dataType:'text',id:'etcDedtAmt',name:'기타;공제'}},{T:1,N:'w2:column',A:{dataType:'text',id:'summary',name:'적요'}},{T:1,N:'w2:column',A:{dataType:'text',id:'payGbn',name:'급여;구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'payAmt',name:'월정액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dayPayAmt',name:'일당'}},{T:1,N:'w2:column',A:{dataType:'text',id:'timePayAmt',name:'시급액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'standFoodAmt',name:'기준;식대'}},{T:1,N:'w2:column',A:{dataType:'text',id:'foodAmt',name:'식대'}},{T:1,N:'w2:column',A:{dataType:'text',id:'extdScRt',name:'연장;할증률'}},{T:1,N:'w2:column',A:{dataType:'text',id:'offDayScRt',name:'휴일;할증률'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ngtDayScRt',name:'야간;할증률'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWorkHh',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workDt',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'name43',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payYm',name:'payYm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'staffNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'staffNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'occpgrdCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'occptypeCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'dtlOccptypeCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'acctDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payGbn',name:'payGbn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workDd',name:'workDd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWorkHh',name:'totWorkHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totRltWorkHh',name:'totRltWorkHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totExtdWorkHh',name:'totExtdWorkHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totNgtWorkHh',name:'totNgtWorkHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totOffWorkHh',name:'totOffWorkHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totFoodAmt',name:'totFoodAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'payAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAlowAmt',name:'etcAlowAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPayAmt',name:'totPayAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxFreeAmt',name:'taxFreeAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workTax',name:'workTax',dataType:'text'}},{T:1,N:'w2:column',A:{id:'localTax',name:'localTax',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pensionDedtAmt',name:'pensionDedtAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'healthDedtAmt',name:'healthDedtAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unempDedtAmt',name:'unempDedtAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcDedtAmt',name:'etcDedtAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totDedtAmt',name:'totDedtAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'slipNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weekAmt',name:'weekAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'annualAmt',name:'annualAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weekHh',name:'weekHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weekCnt',name:'weekCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBasicDay',name:'payBasicDay',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'mgntClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realCost',name:'realCost',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd1',name:'acctCd1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd2',name:'acctCd2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd3',name:'acctCd3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd4',name:'acctCd4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd5',name:'acctCd5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd6',name:'acctCd6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd7',name:'acctCd7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxChk',name:'taxChk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workSiteCd',name:'workSiteCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workSiteNm',name:'workSiteNm',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.tempjob.cmd.RetrieveDayLaborersAttendanceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"action":"modified","id":"ds_master","key":"OUT_DS1"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_search_submitdone',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.taxbiz.tempjob.cmd.SaveDayLaborersAttendanceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_master","key":"IN_DS1"},{"action":"modified","id":"ds_out","key":"OUT_DS1"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_save_submitdone',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}'}},{T:1,N:'xf:submission',A:{id:'sbm_cancel',action:'/ac.fi.taxbiz.tempjob.cmd.CancelDayLaborersAttendanceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_master","key":"IN_DS1"},{"action":"modified","id":"ds_out","key":"OUT_DS1"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_cancel_submitdone',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}'}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ac.fi.taxbiz.tempjob.cmd.DeleteDayLaborersAttendanceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_master","key":"IN_DS1"},{"action":"modified","id":"ds_out","key":"OUT_DS1"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_delete_submitdone',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*
    회계/재무회계/세무/일용직관리/일용직근태등록

    ▶ 조회조건
     회사코드 : 029 (넥스트로 주식회사)
     부서코드 : 01392 (울산2물류)
     기간 : 2024-01-01 ~ 2024-12-31
     급여구분 : 전체
     상태 : 전체
*/

scwin.gv_CurDate;
scwin.gv_FirstDate;
scwin.privAdmin;
scwin.sChk = 0; // 미선택 : 0,  미등록/대기 선택 : 1, 등록 선택 : 2
scwin.nNgtWorkStHh = 2200; // 야간근로시작시간
scwin.nNgtWorkEndHh = 600; // 야간근로종료시간
scwin.nStandardWorkHh = 8; // 기본근로시간
scwin.ValidChkFlag = false;
scwin.vCoCd;
scwin.vUserHomeClsCd;
scwin.isSubCompany = false;
scwin.chkHistory = new Map();

//히든컴포넌트
scwin.txtCoClsCd = "";

/**
 * event
 * @name onpageload
 * @description 페이지오픈
 */
scwin.onpageload = function () {
  scwin.gv_CurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.gv_FirstDate = scwin.gv_CurDate.substring(0, 6) + "01";
  scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin") ?? ""; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님
  scwin.vCoCd = $c.data.getMemInfo($p, "coCd") ?? ""; // 소속 자회사
  scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd") ?? ""; // 사용자소속구분코드

  const codeOptions = [{
    grpCd: "FI115",
    compID: "acb_retrieve_gubun, gr_master:payGbn"
  }, {
    grpCd: "FI405",
    compID: "acb_workStsCd, gr_master:workStsCd"
  }, {
    grpCd: "OP160",
    compID: "gr_master:occptypeCd"
  }, {
    grpCd: "OP161",
    compID: "gr_master:dtlOccptypeCd"
  }, {
    grpCd: "OP268",
    compID: "gr_master:occpgrdCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

/**
 * event
 * @name onUdcCompleted
 * @description
 */
scwin.onUdcCompleted = function () {
  scwin.f_FieldClear();

  // 동원로엑스 - HR팀, 재경팀은 모든 귀속부서 조회가능
  // 넥스트로 - 기획관리팀(넥스트로) 모든 귀속부서 조회가능
  switch (ed_acctDeptCd.getValue()) {
    case "00006":
    case "00009":
    case "01387":
      $c.gus.cfEnableObjects($p, [ed_acctDeptCd, ed_acctDeptNm, btn_acctDeptCd]);
      ed_acctDeptCd.focus();
      break;
    default:
      $c.gus.cfDisableObjects($p, [ed_acctDeptCd, ed_acctDeptNm, btn_acctDeptCd]);
      em_retrieve_outbrStDt.focus();
      break;
  }
  scwin.f_setCompanyInfo();
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Cancel, btn_Del, btn_Mod]);
};

/**
 * method
 * @name f_FieldClear
 * @description 화면초기화
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, grp_searchCondition, [ed_coCd, ed_coNm]);
  em_retrieve_outbrStDt.setValue(scwin.gv_CurDate);
  em_retrieve_outbrEndDt.setValue(scwin.gv_CurDate);
  let acctDeptCd = $c.data.getMemInfo($p, "acctDeptCd") ?? "";
  ed_acctDeptCd.options.hidVal = acctDeptCd;
  ed_acctDeptCd.setValue(acctDeptCd);
  let acctDeptNm = $c.data.getMemInfo($p, "acctDeptNm") ?? "";
  ed_acctDeptNm.setValue(acctDeptNm);
  ed_acctDeptNm.options.hidVal = acctDeptNm;
  chk_lowerDeptIncluYn.setValue("0");
};

/**
 * method
 * @name f_Retrieve
 * @description 조회
 */
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [grp_searchCondition]))) {
    return;
  }
  $c.sbm.execute($p, sbm_search);
};

/**
 * method
 * @name f_Save
 * @description 확정처리
 */
scwin.f_Save = async function () {
  if (!ds_master.getMatchedIndex("chk", "1").length) {
    await $c.win.alert($p, "선택한 내역이 존재하지 않습니다.");
    return;
  }

  // 작업시간 Validation
  if (!(await scwin.f_checkVacationDate())) {
    return;
  }
  if (await $c.win.confirm($p, "확정 처리하시겠습니까?")) {
    ds_out.removeAll();
    $c.sbm.execute($p, sbm_save);
  }
};

/**
 * method
 * @name f_Cancel
 * @description 미확정처리
 */
scwin.f_Cancel = async function () {
  if (!ds_master.getMatchedIndex("chk", "1").length) {
    await $c.win.alert($p, "선택한 내역이 존재하지 않습니다.");
    return;
  }

  // 작업시간 Validation
  if (!(await scwin.f_checkVacationDate())) {
    return;
  }
  if (await $c.win.confirm($p, "미확정 처리하시겠습니까?")) {
    ds_out.removeAll();
    $c.sbm.execute($p, sbm_cancel);
  }
};

/**
 * method
 * @name f_Delete
 * @description 삭제
 */
scwin.f_Delete = async function () {
  if (!ds_master.getMatchedIndex("chk", "1").length) {
    await $c.win.alert($p, "선택한 내역이 존재하지 않습니다.");
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_004)) {
    ds_out.removeAll();
    $c.sbm.execute($p, sbm_delete);
  }
};

/**
 * method
 * @name f_checkVacationDate
 * @description 작업시간 Validation
 */
scwin.f_checkVacationDate = async function () {
  let allData = ds_master.getAllJSON();
  for (let idx = 0; idx < allData.length; ++idx) {
    let rowObj = allData[idx];
    if (rowObj.rowStatus !== "U") {
      continue;
    }
    //수정 상태일경우

    if (rowObj.workStDt == "") {
      await $c.win.alert($p, idx + 1 + "번째 행의 근무 시작일자을(를) 입력하십시오.");
      gr_master.setFocusedCell(idx, "workStDt", true);
      return false;
    }
    if (!scwin.cfValidateValue({
      isDate: true
    }, rowObj.workStDt)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["근무 시작일자"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      gr_master.setFocusedCell(idx, "workStDt", true);
      return false;
    }
    //연차가 아닌경우
    if (rowObj.annualYn != "1") {
      if (rowObj.workStHh == "") {
        await $c.win.alert($p, idx + 1 + "번째 행의 근무 시작시간을(를) 입력하십시오.");
        gr_master.setFocusedCell(idx, "workStHh", true);
        return false;
      }
      if (!scwin.cfValidateValue({
        isTime: true
      }, rowObj.workStHh)) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["근무 시작시간"]);
        gr_master.setFocusedCell(idx, "workStHh", true);
        return false;
      }
      if (rowObj.workEndDt == "") {
        await $c.win.alert($p, idx + 1 + "번째 행의 근무 종료일자을(를) 입력하십시오.");
        gr_master.setFocusedCell(idx, "workEndDt", true);
        return false;
      }
      if (!scwin.cfValidateValue({
        isDate: true
      }, rowObj.workEndDt)) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["근무 종료일자"]);
        gr_master.setFocusedCell(idx, "workEndDt", true);
      }
      if (rowObj.workEndHh == "") {
        await $c.win.alert($p, idx + 1 + "번째 행의 근무 종료시간을(를) 입력하십시오.");
        gr_master.setFocusedCell(idx, "workEndHh", true);
        return false;
      }
      if (rowObj.workEndHh.substring(0, 2) > "24") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["근무 종료시간"]);
        gr_master.setFocusedCell(idx, "workEndHh", true);
        return false;
      }
      if (rowObj.workEndHh.substring(0, 2) == "00" && rowObj.workEndHh.substring(2, 4) == "00") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["근무 종료시간"]);
        gr_master.setFocusedCell(idx, "workEndHh", true);
        return false;
      }
      if (rowObj.workEndHh.substring(0, 2) == "24" && rowObj.workEndHh.substring(2, 4) > "00") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["근무 종료시간"]);
        gr_master.setFocusedCell(idx, "workEndHh", true);
        return false;
      }
      if (rowObj.workEndHh.substring(2, 4) > "59") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["근무 종료시간"]);
        gr_master.setFocusedCell(idx, "workEndHh", true);
        return false;
      }

      // 두 날짜가 서로 상이한 경우
      if ((await scwin.cfDaysBetween(rowObj.workStDt, rowObj.workEndDt)) > 1 || (await scwin.cfDaysBetween(rowObj.workStDt, rowObj.workEndDt)) < 0) {
        await $c.win.alert($p, idx + 1 + "번째 행의 시작일자와 종료일자의 차이는 최대 1일입니다. 올바른 일자를 입력하세요");
        gr_master.setFocusedCell(idx, "workEndDt", true);
        return false;
      }

      // 두 날짜가 서로 상이한 경우
      if ((await scwin.cfDaysBetween(rowObj.workStDt, rowObj.workEndDt)) == 1) {
        if (parseFloat(rowObj.workEndHh) / 100 > 6 && !$c.gus.cfIsNull($p, rowObj.workEndHh)) {
          await $c.win.alert($p, idx + 1 + "번째 행의 근무종료시간은 06:00 이후로 설정할 수 없습니다.");
          gr_master.setFocusedCell(idx, "workEndHh", true);
          return false;
        }
      }
    }

    // 적요체크
    if ((rowObj.etcAlowAmt != 0 || rowObj.etcDedtAmt != 0) && rowObj.summary == "") {
      await $c.win.alert($p, idx + 1 + "번째 행의 적요를 입력하세요");
      gr_master.setFocusedCell(idx, "summary", true);
      return false;
    }
  }
  return true;
};

/**
* method
* @name cfDaysBetween
* @description
*/
scwin.cfDaysBetween = async function (stDt, endDt) {
  let v_daysBetween = 0;
  if (!$c.date.isDate($p, stDt)) {
    await $c.win.alert($p, "시작일자는 'YYYYMMDD' 형식이어야 합니다.");
  } else if (!$c.date.isDate($p, endDt)) {
    await $c.win.alert($p, "종료일자는 'YYYYMMDD' 형식이어야 합니다.");
  } else {
    v_daysBetween = $c.date.diffDate($p, stDt, endDt);
  }
  return v_daysBetween;
};

/**
 * method
 * @name f_chkOpenCommonPopUp
 * @params {Object} inObj       코드값
 * @params {Object} pairObj     코드명
 * @params {Number} disGubun    구분
 * @params {Boolean} isCode     코드구분(코드 true, 명칭 false)
 * @description 공통 팝업 오픈
 *  팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 */
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    // inObj가 코드 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

/**
 * method
 * @name f_openCommonPopUp
 * @params {Number} disGubun    구분
 * @params {String} pCode       코드
 * @params {String} pName       코드명
 * @params {String} pClose      창여부  (T,F)
 * @params {String} pAllSearch  전체허용여부 (T,F)
 * @description 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
 */
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch, callBackFunc) {
  switch (disGubun) {
    case 1:
      // 귀속부서udc
      udc_acctDeptCd.cfCommonPopUp(rtnList => $c.gus.cfSetReturnValue($p, rtnList, ed_acctDeptCd, ed_acctDeptNm), pCode, pName, pClose, null, null, null, null, "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",", null, null, null, null); //부서
      break;
    case 2:
      // 일용직 사원정보 (성명 udc)
      udc_staffNo.cfCommonPopUp(rtnList => $c.gus.cfSetReturnValue($p, rtnList, ed_staffNo, ed_staffNm), pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는    컬럼 지정
      , "1" // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이
      , "," + ed_coCd.getValue() // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "인원,사번,인원명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      //회사 입력 팝업
      if (callBackFunc === undefined) {
        callBackFunc = scwin.udc_coCd_callBackFun;
      }
      udc_coCd.cfCommonPopUp(callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null);
      break;
  }
};

/**
 * method
 * @name f_toExcel
 * @description 엑셀다운로드
 */
scwin.f_toExcel = async function () {
  let fileName = "일용직근태내역";
  await $c.data.downloadGridViewExcel($p, gr_master, {
    fileName: fileName + ".xlsx",
    sheetName: fileName
  });
};

/**
 * method
 * @name f_chekGridTime
 * @params {String} aTime 시간(HHmm)
 * @description 그리드 시간체크
 */
scwin.f_chekGridTime = async function (aTime) {
  if (aTime == "") {
    return false;
  }
  if (aTime.length != 4) {
    await $c.win.alert($p, "시간은  4자리로 입력해야 합니다");
    return false;
  }
  if (aTime.substring(0, 2) > "24") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["근무시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
    return false;
  }
  if (aTime.substring(0, 2) == "24" && aTime.substring(0, 2).substring(2, 4) > "00") {
    await $c.win.alert($p, "시간은 0~24 까지 입력 가능합니다.");
    return false;
  }
  if (!(aTime.substring(2, 3) == "0" || aTime.substring(2, 3) == "3") || aTime.substring(3, 4) != "0") {
    await $c.win.alert($p, "분은 30분 단위로  입력 가능합니다.");
    return false;
  }
  return true;
};

/**
 * method
 * @name f_chekGridDay
 * @params {Number} wrkClsCd    구분
 * @params {String} fromYmd     시작일자
 * @params {String} toYmd       종료일자
 * @description 그리드 날짜체크
 */
scwin.f_chekGridDay = async function (wrkClsCd, fromYmd, toYmd) {
  switch (wrkClsCd) {
    case 1:
      if (toYmd < fromYmd) {
        await $c.win.alert($p, "종료일자는 시작일자보다 크거나 같아야 합니다.");
        return false;
      }
      if ((await scwin.cfDaysBetween(fromYmd, toYmd)) < 0 || (await scwin.cfDaysBetween(fromYmd, toYmd)) > 1) {
        await $c.win.alert($p, "시작일자와 종료일자의 차이는 최대 1일입니다. 올바른 일자를 입력하세요");
        return false;
      }
      break;
  }
  return true;
};

/**
 * method
 * @name f_chekGridMove
 * @params {Number} row     행
 * @params {String} colid   컬럼
 * @description 그리드 값체크
 */
scwin.f_chekGridMove = async function (row, colid) {
  switch (colid) {
    case "workStHh":
    case "workEndHh":
    case "workStDt":
    case "workEndDt":
      break;
    default:
      return true;
  }

  // 시작일자, 종료일자, 시작시간, 종료시간 변경 시

  let nTempWorkHh = 0; // 임의 근무시간 계산분
  let nEndHhBetweenStHh = 0; // 시작시간과 종료시간 차이시간
  let rowObj = ds_master.getRowJSON(row);

  // 시작일자, 종료일자, 시작시간, 종료시간이 NULL 이 아닐 경우
  if (!$c.gus.cfIsNull($p, rowObj.workStHh) && !$c.gus.cfIsNull($p, rowObj.workEndHh) && !$c.gus.cfIsNull($p, rowObj.workStDt) && !$c.gus.cfIsNull($p, rowObj.workEndDt)) {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 정규근무시간 계산(임의분)
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (rowObj.workStDt == rowObj.workEndDt) {
      // 시작일자와 종료일자가 동일한 경우
      nEndHhBetweenStHh = (parseFloat(rowObj.workEndHh) - parseFloat(rowObj.workStHh)) / 100;

      // 30분 존재하지 않을경우!!!
      if (nEndHhBetweenStHh - Math.floor(nEndHhBetweenStHh) == 0) {
        nTempWorkHh = Math.floor(nEndHhBetweenStHh);
        // 30분이 존재하는 경우!!!
      } else {
        nTempWorkHh = Math.floor(nEndHhBetweenStHh) + 0.5;
      }
    } else {
      // 시작일자와 종료일자가 상이한 경우
      // step 1
      // 시작일자의 시간 계산분
      nEndHhBetweenStHh = (2400 - parseFloat(rowObj.workStHh)) / 100;

      // 30분 존재하지 않을경우!!!
      if (nEndHhBetweenStHh - Math.floor(nEndHhBetweenStHh) == 0) {
        nTempWorkHh = Math.floor(nEndHhBetweenStHh);
        // 30분이 존재하는 경우!!!
      } else {
        nTempWorkHh = Math.floor(nEndHhBetweenStHh) + 0.5;
      }

      // step 2
      // 종료일자의 시간 계산분
      nEndHhBetweenStHh = parseFloat(rowObj.workEndHh) / 100;

      // 30분 존재하지 않을경우!!!
      if (nEndHhBetweenStHh - Math.floor(nEndHhBetweenStHh) == 0) {
        nTempWorkHh = parseFloat(nTempWorkHh) + Math.floor(nEndHhBetweenStHh);
        // 30분이 존재하는 경우!!!
      } else {
        nTempWorkHh = parseFloat(nTempWorkHh) + Math.floor(nEndHhBetweenStHh) + 0.5;
      }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 정규근무시간 계산(임의분) END
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  }
  switch (colid) {
    case "workStHh":
    case "workEndHh":
      // 시작시간, 종료시간 변경 시 (시간이 올바른지 체크)
      if (!(await scwin.f_chekGridTime(rowObj[colid]))) {
        ds_master.setCellData(row, colid, "");
        gr_master.setFocusedCell(row, colid, true);
        return false;
      }

      // 시작일자, 종료일자가 모두 NULL이 아닐경우에만 체크
      if (!$c.gus.cfIsNull($p, rowObj.workStHh) && !$c.gus.cfIsNull($p, rowObj.workEndHh)) {
        if (parseFloat(rowObj.workStHh) >= parseFloat(rowObj.workEndHh)) {
          // 시작일자, 종료일자가 모두 NULL이 아닐경우에만 체크
          if (!$c.gus.cfIsNull($p, rowObj.workStDt) && !$c.gus.cfIsNull($p, rowObj.workEndDt)) {
            // 시작일자와 근무일자가 동일한 경우
            if ((await scwin.cfDaysBetween(rowObj.workStDt, rowObj.workEndDt)) == 0) {
              await $c.win.alert($p, "근무시작일과 종료일이 동일한 경우 종료시간은 시작시간 이후여야 합니다.");
              ds_master.setCellData(row, colid, "");
              gr_master.setFocusedCell(row, colid, true);
              return false;
            }
          }
        }
      }

      // 종료시간 변경 시
      if (colid == "workEndHh") {
        // 시작일자, 종료일자가 모두 NULL이 아닐경우에만 체크
        if (!$c.gus.cfIsNull($p, rowObj.workStDt) && !$c.gus.cfIsNull($p, rowObj.workEndDt)) {
          // 시작일자와 근무일자가 서로 다를 경우
          if ((await scwin.cfDaysBetween(rowObj.workStDt, rowObj.workEndDt)) != 0) {
            if (parseFloat(rowObj.workEndHh) / 100 > 6 && !$c.gus.cfIsNull($p, rowObj.workEndHh)) {
              await $c.win.alert($p, "근무시작일과 종료일이 상이한 경우 근무종료시간은 06:00 이후로 설정할 수 없습니다.");
              ds_master.setCellData(row, colid, "");
              gr_master.setFocusedCell(row, colid, true);
              return false;
            }
          }
        }
      }
      break;
    case "workStDt":
    case "workEndDt":
      // 시작일자, 종료일자 변경 시 (시간이 올바른지 체크)
      // 시작일자, 종료일자가 모두 NULL이 아닐경우에만 체크
      if (!$c.gus.cfIsNull($p, rowObj.workStDt) && !$c.gus.cfIsNull($p, rowObj.workEndDt)) {
        // 날짜 간격 체크
        if (!(await scwin.f_chekGridDay(1, rowObj.workStDt, rowObj.workEndDt))) {
          ds_master.setCellData(row, "workEndDt", "");
          gr_master.setFocusedCell(row, "workEndDt", true);
          return false;
        }

        // 시작일자와 근무일자가 서로 다를 경우
        if ((await scwin.cfDaysBetween(rowObj.workStDt, rowObj.workEndDt)) != 0) {
          // 종료시간이 NULL이 아니고, 06:00보다 크게 설정되었을경우
          if (parseFloat(rowObj.workEndHh) / 100 > 6 && !$c.gus.cfIsNull($p, rowObj.workEndHh)) {
            await $c.win.alert($p, "근무시작일과 종료일이 상이한 경우 근무종료시간은 06:00 이후로 설정할 수 없습니다.");
            ds_master.setCellData(row, "workEndHh", "");
            gr_master.setFocusedCell(row, "workEndHh", true);
            return false;
          }
        } else {
          // 시작시간, 종료시간가 모두 NULL이 아닐경우에만 체크
          if (!$c.gus.cfIsNull($p, rowObj.workStHh) && !$c.gus.cfIsNull($p, rowObj.workEndHh)) {
            // 시작시간 >= 종료시간 인 경우 체크
            if (parseFloat(rowObj.workStHh) >= parseFloat(rowObj.workEndHh)) {
              await $c.win.alert($p, "근무시작일과 종료일이 동일한 경우 종료시간은 시작시간 이후여야 합니다.");
              ds_master.setCellData(row, "workEndHh", "");
              gr_master.setFocusedCell(row, "workEndHh", true);
              return false;
            }
          }
        }
      }
      break;
  }
  return true;
};

/**
 * method
 * @name f_Modify
 * @description 일괄적용함수
 */
scwin.f_Modify = async function () {
  if (!ds_master.getRowCount()) {
    await $c.win.alert($p, "자료가 존재하지 않습니다.");
    return false;
  }
  let checked = ds_master.getMatchedIndex("chk", "1", true);
  const stHh = ed_stHh.getValue();
  const endHh = ed_endHh.getValue();
  ds_master.setEventPause("oncelldatachange", true);
  for (let i of checked) {
    if (stHh != "") {
      ds_master.setCellData(i, "workStHh", stHh);
      await scwin.f_calcMaster(i, "workStHh", stHh);
      scwin.ValidChkFlag = false;
    }
    if (endHh != "") {
      ds_master.setCellData(i, "workEndHh", endHh);
      await scwin.f_calcMaster(i, "workEndHh", endHh);
      scwin.ValidChkFlag = false;
    }
  }
  ds_master.setEventPause("oncelldatachange", false);
  if (!checked.length) {
    await $c.win.alert($p, "선택된 자료가 존재하지 않습니다.");
    return false;
  }
};

/**
 * method
 * @name f_setCompanyInfo
 * @description 자회사 회계 시스템 추가에 따른 설정
 */
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vCoCd = ACConstants.CO_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vCoCd);
  scwin.f_openCommonPopUp(3, ed_coCd.getValue(), ed_coNm.getValue(), 'T', 'T', scwin.udc_coCd_callBackFun2);
};

/**
 * method
 * @name f_calcMaster
 * @description 그리드 값 계산
 */
scwin.f_calcMaster = async function (row, colid, value) {
  if ($c.gus.cfIsNull($p, value)) {
    switch (colid) {
      case "etcAlowAmt":
      case "etcDedtAmt":
        ds_master.setCellData(row, colid, "0");
        break;
    }
    scwin.ValidChkFlag = false;
    return;
  }
  switch (colid) {
    case "rltWorkHh":
    case "extdWorkHh":
    case "ngtWorkHh":
    case "offWorkHh":
    case "daySalaryAmt":
      return;
  }
  if (!scwin.ValidChkFlag) {
    scwin.ValidChkFlag = true;
    if (!(await scwin.f_chekGridMove(row, colid))) {
      ds_master.setCellData(row, "rltWorkHh", "0");
      ds_master.setCellData(row, "extdWorkHh", "0");
      ds_master.setCellData(row, "ngtWorkHh", "0");
      ds_master.setCellData(row, "offWorkHh", "0");
      ds_master.setCellData(row, "daySalaryAmt", "0");
      return;
    }
  }
  scwin.ValidChkFlag = false;
  switch (colid) {
    case "workStDt": //시작일자
    case "workEndDt": //종료일자
    case "workStHh": //시작시간
    case "workEndHh": //종료시간
    case "offDayYn": //휴일여부
    case "mealTimeYn": //중식여부
    case "foodYn": //식대여부
    case "etcAlowAmt": //기타소득
    case "etcDedtAmt": //기타공제
    case "annualYn":
      //연차여부
      break;
    default:
      // 시작일자, 종료일자, 종료시간, 시작시간, 휴일여부, 중식여부, 식대여부, 기타소득, 기타공제 , 연차여부 변경이 아니면 종료
      return;
  }
  // 시작일자, 종료일자, 종료시간, 시작시간, 휴일여부, 중식여부, 식대여부, 기타소득, 기타공제 , 연차여부 변경 시

  let nEndHhBetweenStHh = 0; // 시작시간과 종료시간 차이시간
  let nNgtWorkHhSum = 0; // 야간시간 계산분

  let nDayPayAmtDivEight = 0; // 일급여 / 8
  let nTimePayAmt = 0; // 시간제 금액
  let nSumDaySalaryAmt = 0; // 급여액 합산

  let nExtdScRt = parseFloat(ds_master.getCellData(row, "extdScRt")) * 0.01; // 연장할증률
  let nOffDayScRt = parseFloat(ds_master.getCellData(row, "offDayScRt")) * 0.01; // 휴일할증률
  let nNgtDayScRt = parseFloat(ds_master.getCellData(row, "ngtDayScRt")) * 0.01; // 야간할증률

  // 시작일자, 종료일자, 시작시간, 종료시간이 NULL이 아니면
  if (!$c.gus.cfIsNull($p, ds_master.getCellData(row, "workStDt")) && !$c.gus.cfIsNull($p, ds_master.getCellData(row, "workEndDt")) && !$c.gus.cfIsNull($p, ds_master.getCellData(row, "workStHh")) && !$c.gus.cfIsNull($p, ds_master.getCellData(row, "workEndHh"))) {
    // 정상근무시간
    ds_master.setCellData(row, "rltWorkHh", "0");
    // 연장근무시간
    ds_master.setCellData(row, "extdWorkHh", "0");
    // 야간근무시간
    ds_master.setCellData(row, "ngtWorkHh", "0");
    // 휴일근무시간
    ds_master.setCellData(row, "offWorkHh", "0");
    // 일 급여액
    ds_master.setCellData(row, "daySalaryAmt", "0");

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 정규근무시간 계산
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (ds_master.getCellData(row, "workStDt") == ds_master.getCellData(row, "workEndDt")) {
      // 시작일자와 종료일자가 동일한 경우
      nEndHhBetweenStHh = (parseFloat(ds_master.getCellData(row, "workEndHh")) - parseFloat(ds_master.getCellData(row, "workStHh"))) / 100;

      // 30분 존재하지 않을경우!!!
      if (nEndHhBetweenStHh - Math.floor(nEndHhBetweenStHh) == 0) {
        ds_master.setCellData(row, "rltWorkHh", String(Math.floor(nEndHhBetweenStHh)));
        // 30분이 존재하는 경우!!!
      } else {
        ds_master.setCellData(row, "rltWorkHh", String(Math.floor(nEndHhBetweenStHh) + 0.5));
      }
    } else {
      // 시작일자와 종료일자가 상이한 경우
      // step 1
      // 시작일자의 시간 계산분
      nEndHhBetweenStHh = (2400 - parseFloat(ds_master.getCellData(row, "workStHh"))) / 100;

      // 30분 존재하지 않을경우!!!
      if (nEndHhBetweenStHh - Math.floor(nEndHhBetweenStHh) == 0) {
        ds_master.setCellData(row, "rltWorkHh", String(Math.floor(nEndHhBetweenStHh)));
        // 30분이 존재하는 경우!!!
      } else {
        ds_master.setCellData(row, "rltWorkHh", String(Math.floor(nEndHhBetweenStHh) + 0.5));
      }

      // step 2
      // 종료일자의 시간 계산분
      nEndHhBetweenStHh = parseFloat(ds_master.getCellData(row, "workEndHh")) / 100;

      // 30분 존재하지 않을경우!!!
      if (nEndHhBetweenStHh - Math.floor(nEndHhBetweenStHh) == 0) {
        ds_master.setCellData(row, "rltWorkHh", parseFloat(ds_master.getCellData(row, "rltWorkHh")) + String(Math.floor(nEndHhBetweenStHh)));
        // 30분이 존재하는 경우!!!
      } else {
        ds_master.setCellData(row, "rltWorkHh", parseFloat(ds_master.getCellData(row, "rltWorkHh")) + String(Math.floor(nEndHhBetweenStHh) + 0.5));
      }
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 휴일근무시간 계산
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 휴일여부가 Y 일 경우!!!
    if (ds_master.getCellData(row, "offDayYn") == 1) {
      // 중식시간 계산
      ds_master.setCellData(row, "rltWorkHh", parseFloat(ds_master.getCellData(row, "rltWorkHh")) - parseFloat(ds_master.getCellData(row, "mealTimeYn")));
      // 휴일근무일 경우 휴일로 모두 근무시간 이전
      ds_master.setCellData(row, "offWorkHh", ds_master.getCellData(row, "rltWorkHh"));
    } else {
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // 야간근무시간 계산
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      if (ds_master.getCellData(row, "workStDt") == ds_master.getCellData(row, "workEndDt")) {
        // 시작일자와 종료일자가 동일한 경우
        // 종료시간이 nNgtWorkStHh(22:00) 보다 큰경우에 야간근무시간 존재함!!!
        if (parseFloat(ds_master.getCellData(row, "workEndHh")) > scwin.nNgtWorkStHh) {
          // 종료시간 - 22:00
          nNgtWorkHhSum = (parseFloat(ds_master.getCellData(row, "workEndHh")) - scwin.nNgtWorkStHh) / 100;
          // 30분 존재하지 않을경우!!!
          if (nNgtWorkHhSum - Math.floor(nNgtWorkHhSum) == 0) {
            ds_master.setCellData(row, "ngtWorkHh", String(Math.floor(nNgtWorkHhSum)));
            // 30분 존재 할 경우!!!
          } else {
            ds_master.setCellData(row, "ngtWorkHh", String(Math.floor(nNgtWorkHhSum) + 0.5));
          }
        }

        // 시작시간 nNgtWorkStHh(22:00) 보다 큰경우에 야간근무시간에서 차이분만큼 빼줘야 함!!!
        if (parseFloat(ds_master.getCellData(row, "workStHh")) > scwin.nNgtWorkStHh) {
          // 22:00 - 시작시간
          nNgtWorkHhSum = (parseFloat(ds_master.getCellData(row, "workStHh")) - scwin.nNgtWorkStHh) / 100;
          // 30분 존재하지 않을경우!!!
          if (nNgtWorkHhSum - Math.floor(nNgtWorkHhSum) == 0) {
            ds_master.setCellData(row, "ngtWorkHh", String(parseFloat(ds_master.getCellData(row, "ngtWorkHh")) - Math.floor(nNgtWorkHhSum)));
            // 30분 존재 할 경우!!!
          } else {
            ds_master.setCellData(row, "ngtWorkHh", String(parseFloat(ds_master.getCellData(row, "ngtWorkHh")) - Math.floor(nNgtWorkHhSum) - 0.5));
          }
        }
      } else {
        // 시작일자와 종료일자가 상이한 경우
        if (parseFloat(ds_master.getCellData(row, "workEndHh")) > scwin.nNgtWorkEndHh) {
          // 종료시간이 nNgtWorkEndHh(06:00) 보다 큰경우에 야간근무시간 MAX(06:00)로 계산함!!!
          // 야간근무시간을 08:00으로 셋팅
          nNgtWorkHhSum = scwin.nStandardWorkHh;
          // 야간근무시간
          ds_master.setCellData(row, "ngtWorkHh", String(Math.floor(nNgtWorkHhSum)));

          // 시작시간 nNgtWorkStHh(22:00) 보다 큰경우에 야간근무시간에서 차이분만큼 빼줘야 함!!!
          if (parseFloat(ds_master.getCellData(row, "workStHh")) > scwin.nNgtWorkStHh) {
            // 22:00 - 시작시간
            nNgtWorkHhSum = (parseFloat(ds_master.getCellData(row, "workStHh")) - scwin.nNgtWorkStHh) / 100;
            // 30분 존재하지 않을경우!!!
            if (nNgtWorkHhSum - Math.floor(nNgtWorkHhSum) == 0) {
              ds_master.setCellData(row, "ngtWorkHh", String(parseFloat(ds_master.getCellData(row, "ngtWorkHh")) - Math.floor(nNgtWorkHhSum)));
              // 30분 존재 할 경우!!!
            } else {
              ds_master.setCellData(row, "ngtWorkHh", String(parseFloat(ds_master.getCellData(row, "ngtWorkHh")) - Math.floor(nNgtWorkHhSum) - 0.5));
            }
          }
        } else {
          // 종료시간이 nNgtWorkEndHh(06:00) 보다 작은경우는 종료시간을 모두 야간근무시간으로 계산함!!!
          // 야간근무시간에 종료시간 + 2(전날야간시간) 합산해서 넣어줌!!
          nNgtWorkHhSum = parseFloat(ds_master.getCellData(row, "workEndHh")) / 100 + 2;
          // 30분 존재하지 않을경우!!!
          if (nNgtWorkHhSum - Math.floor(nNgtWorkHhSum) == 0) {
            ds_master.setCellData(row, "ngtWorkHh", String(Math.floor(nNgtWorkHhSum)));
            // 30분 존재 할 경우!!!
          } else {
            ds_master.setCellData(row, "ngtWorkHh", String(Math.floor(nNgtWorkHhSum) + 0.5));
          }

          // 시작시간 nNgtWorkStHh(22:00) 보다 큰경우에 야간근무시간에서 차이분만큼 빼줘야 함!!!
          if (parseFloat(ds_master.getCellData(row, "workStHh")) > scwin.nNgtWorkStHh) {
            // 22:00 - 시작시간
            nNgtWorkHhSum = (parseFloat(ds_master.getCellData(row, "workStHh")) - scwin.nNgtWorkStHh) / 100;
            if (nNgtWorkHhSum - Math.floor(nNgtWorkHhSum) == 0) {
              // 30분 존재하지 않을경우!!!
              ds_master.setCellData(row, "ngtWorkHh", String(parseFloat(ds_master.getCellData(row, "ngtWorkHh")) - Math.floor(nNgtWorkHhSum)));
            } else {
              // 30분 존재 할 경우!!!
              ds_master.setCellData(row, "ngtWorkHh", String(parseFloat(ds_master.getCellData(row, "ngtWorkHh")) - Math.floor(nNgtWorkHhSum) - 0.5));
            }
          }
        }
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // 연장근무시간 계산
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      // 정상근무시간이 > 8(기본근로시간) 보다 큰경우 연장근무시간이 존재함!!!
      if (parseFloat(ds_master.getCellData(row, "rltWorkHh")) > scwin.nStandardWorkHh) {
        ds_master.setCellData(row, "extdWorkHh", parseFloat(ds_master.getCellData(row, "rltWorkHh")) - scwin.nStandardWorkHh);
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // 중식여부시간 계산
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      // 중식여부가 체크되어 있으면
      if (ds_master.getCellData(row, "mealTimeYn") == "1") {
        // 정상근무시간
        ds_master.setCellData(row, "rltWorkHh", parseFloat(ds_master.getCellData(row, "rltWorkHh")) - parseFloat(ds_master.getCellData(row, "mealTimeYn")));

        // 연장근무시간(1보가 크거나 같은 경우)
        if (parseFloat(ds_master.getCellData(row, "extdWorkHh")) >= 1) {
          // 연장근무시간에서 제외
          ds_master.setCellData(row, "extdWorkHh", parseFloat(ds_master.getCellData(row, "extdWorkHh")) - parseFloat(ds_master.getCellData(row, "mealTimeYn")));
          // 연장근무시간(0보가 크고 1보다 작은경우) - 30분으로 존재하는 경우
        } else if (parseFloat(ds_master.getCellData(row, "extdWorkHh")) > 0 && parseFloat(ds_master.getCellData(row, "extdWorkHh")) < 1) {
          // 연장근무시간은 0으로 만듬!!!
          ds_master.setCellData(row, "extdWorkHh", "0");

          // 야간근무시간이 0보다 큰경우!!
          if (parseFloat(ds_master.getCellData(row, "ngtWorkHh")) > 0) {
            ds_master.setCellData(row, "ngtWorkHh", String(parseFloat(ds_master.getCellData(row, "ngtWorkHh")) - 0.5));
          }
          // 연장근무시간이 존재하지 않는 경우!!!
        } else {
          if (parseFloat(ds_master.getCellData(row, "ngtWorkHh")) >= 1) {
            // 연장근무시간에서 제외
            ds_master.setCellData(row, "ngtWorkHh", parseFloat(ds_master.getCellData(row, "ngtWorkHh")) - parseFloat(ds_master.getCellData(row, "mealTimeYn")));
            // 야간근무시간(0보가 크고 1보다 작은경우) - 30분으로 존재하는 경우
          } else if (parseFloat(ds_master.getCellData(row, "ngtWorkHh")) > 0 && parseFloat(ds_master.getCellData(row, "ngtWorkHh")) < 1) {
            // 연장근무시간은 0으로 만듬!!!
            ds_master.setCellData(row, "ngtWorkHh", "0");
          }
        }
      }
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //시간이 (-)로 계산되었을 경우 0으로 조정해줌!!!!
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 정상근무시간
    if (parseFloat(ds_master.getCellData(row, "rltWorkHh")) < 0) {
      ds_master.setCellData(row, "rltWorkHh", "0");
    }
    // 연장근무시간
    if (parseFloat(ds_master.getCellData(row, "extdWorkHh")) < 0) {
      ds_master.setCellData(row, "extdWorkHh", "0");
    }
    // 야간근무시간
    if (parseFloat(ds_master.getCellData(row, "ngtWorkHh")) < 0) {
      ds_master.setCellData(row, "ngtWorkHh", "0");
    }
    // 휴일근무시간
    if (parseFloat(ds_master.getCellData(row, "offWorkHh")) < 0) {
      ds_master.setCellData(row, "offWorkHh", "0");
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //시간별 일급여액 계산
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    switch (ds_master.getCellData(row, "payGbn")) {
      case "10":
        // 일급여 구분이 01 : 월급제
        // 일급여액
        nSumDaySalaryAmt = Math.floor(parseFloat(ds_master.getCellData(row, "payAmt")) * 0.1) * 10;
        break;
      case "02":
        // 일급여 구분이 02 : 일당제
        // 월급제 시간당 금액
        nDayPayAmtDivEight = parseFloat(ds_master.getCellData(row, "dayPayAmt")) / 8;
        // 정상근무시간분
        nSumDaySalaryAmt += Math.floor(nDayPayAmtDivEight * parseFloat(ds_master.getCellData(row, "rltWorkHh")) * 0.1) * 10;
        // 연장근무시간분
        nSumDaySalaryAmt += Math.floor(nDayPayAmtDivEight * parseFloat(ds_master.getCellData(row, "extdWorkHh")) * nExtdScRt * 0.1) * 10;
        // 야간근무시간분
        nSumDaySalaryAmt += Math.floor(nDayPayAmtDivEight * parseFloat(ds_master.getCellData(row, "ngtWorkHh")) * nNgtDayScRt * 0.1) * 10;
        // 휴일근무시간분
        nSumDaySalaryAmt += Math.floor(nDayPayAmtDivEight * parseFloat(ds_master.getCellData(row, "offWorkHh")) * nOffDayScRt * 0.1) * 10;
        break;
      case "03":
        // 일급여 구분이 03 : 시급제
        // 시간제 금액
        nTimePayAmt = parseFloat(ds_master.getCellData(row, "timePayAmt"));
        // 정상근무시간분
        nSumDaySalaryAmt += Math.floor(nTimePayAmt * parseFloat(ds_master.getCellData(row, "rltWorkHh")) * 0.1) * 10;
        // 연장근무시간분
        nSumDaySalaryAmt += Math.floor(nTimePayAmt * parseFloat(ds_master.getCellData(row, "extdWorkHh")) * nExtdScRt * 0.1) * 10;
        // 야간근무시간분
        nSumDaySalaryAmt += Math.floor(nTimePayAmt * parseFloat(ds_master.getCellData(row, "ngtWorkHh")) * nNgtDayScRt * 0.1) * 10;
        // 휴일근무시간분
        nSumDaySalaryAmt += Math.floor(nTimePayAmt * parseFloat(ds_master.getCellData(row, "offWorkHh")) * nOffDayScRt * 0.1) * 10;
        break;
      default:
        nSumDaySalaryAmt = 0;
        break;
    }
    let sSumDaySalaryAmt = String(nSumDaySalaryAmt);
    // 식대여부가 체크되어 있으면
    if (ds_master.getCellData(row, "foodYn") == 1) {
      // 기준식대금액을 넣어줌
      ds_master.setCellData(row, "foodAmt", ds_master.getCellData(row, "standFoodAmt"));
      // 식대금액을 합산해줌!!!!
      sSumDaySalaryAmt = String(nSumDaySalaryAmt + Math.floor(parseFloat(ds_master.getCellData(row, "foodAmt")) * 0.1) * 10);
    } else {
      // 식대금액을 0으로 만듦
      ds_master.setCellData(row, "foodAmt", "0");
    }

    //기타소득분
    let etcAlowAmt = $w.bigDecimal(ds_master.getCellData(row, "etcAlowAmt"));
    let temp = etcAlowAmt.divide(10).toString(); // * 0.1
    let find = temp.indexOf(".");
    if (find >= 0) {
      temp = temp.substring(0, find); //Math.floor
    }
    etcAlowAmt = $w.bigDecimal(temp).times(10); // * 10

    //기타공제분
    let etcDedtAmt = $w.bigDecimal(ds_master.getCellData(row, "etcDedtAmt"));
    temp = etcDedtAmt.divide(10).toString(); // * 0.1
    find = temp.indexOf(".");
    if (find >= 0) {
      temp = temp.substring(0, find); //Math.floor
    }
    etcDedtAmt = $w.bigDecimal(temp).times(10); // * 10

    //급여금액 = 기타소득분 - 기타공제분 + 급여금액
    sSumDaySalaryAmt = etcAlowAmt.minus(etcDedtAmt).plus(sSumDaySalaryAmt).toString();
    // 급여금액을 넣어줌!!!!
    ds_master.setCellData(row, "daySalaryAmt", sSumDaySalaryAmt);
  } else if (ds_master.getCellData(row, "annualYn") == "1") {
    // 연차여부가 Y 일 경우!!!
    ds_master.setCellData(row, "rltWorkHh", "8"); //기본 근무시간 8시간 셋팅
    switch (ds_master.getCellData(row, "payGbn")) {
      case "10":
        // 일급여 구분이 01 : 월급제
        // 일급여액
        nSumDaySalaryAmt = Math.floor(parseFloat(ds_master.getCellData(row, "payAmt")) * 0.1) * 10;
        break;
      case "02":
        // 일급여 구분이 02 : 일당제
        // 월급제 시간당 금액
        nDayPayAmtDivEight = parseFloat(ds_master.getCellData(row, "dayPayAmt")) / 8;
        // 정상근무시간분
        nSumDaySalaryAmt += Math.floor(nDayPayAmtDivEight * parseFloat(ds_master.getCellData(row, "rltWorkHh")) * 0.1) * 10;
        break;
      case "03":
        // 일급여 구분이 03 : 시급제
        // 시간제 금액
        nTimePayAmt = parseFloat(ds_master.getCellData(row, "timePayAmt"));
        // 정상근무시간분
        nSumDaySalaryAmt += Math.floor(nTimePayAmt * parseFloat(ds_master.getCellData(row, "rltWorkHh")) * 0.1) * 10;
        break;
      default:
        nSumDaySalaryAmt = 0;
        break;
    }
    ds_master.setCellData(row, "daySalaryAmt", String(nSumDaySalaryAmt));
  } else {
    // 정상근무시간
    ds_master.setCellData(row, "rltWorkHh", "0");
    // 연장근무시간
    ds_master.setCellData(row, "extdWorkHh", "0");
    // 야간근무시간
    ds_master.setCellData(row, "ngtWorkHh", "0");
    // 휴일근무시간
    ds_master.setCellData(row, "offWorkHh", "0");
  }
  switch (colid) {
    case "etcAlowAmt":
    case "etcDedtAmt":
      scwin.setSumFooter([colid, "daySalaryAmt"]);
      break;
  }
};

/**
 * method
 * @name udc_coCd_callBackFun
 * @description
 */
scwin.udc_coCd_callBackFun = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명
    ed_coCd.options.hidVal = rtnList[0]; // 히든값
    ed_coNm.options.hidVal = rtnList[5]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    ed_coNm.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};

/**
 * method
 * @name udc_coCd_callBackFun2
 * @description f_setCompanyInfo함수에서 f_openCommonPopUp함수 호출시 콜백함수
 */
scwin.udc_coCd_callBackFun2 = function (rtnList) {
  scwin.udc_coCd_callBackFun(rtnList);
  if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
  }
};

/**
 * event
 * @name sbm_save_submitdone
 * @description
 */
scwin.sbm_save_submitdone = async function (e) {
  await $c.win.alert($p, "성공적으로 확정 처리하였습니다.");
  scwin.f_Retrieve();
  let staffNo = ds_out.getCellData(0, "staffNo");
  if (staffNo != "") {
    await $c.win.alert($p, "사원번호 : " + staffNo + "\n은(는) 이미 급여정산내역이 집계되어 있습니다.\n급여정산 재집계하시기 바랍니다.");
  }
};

/**
 * event
 * @name sbm_cancel_submitdone
 * @description
 */
scwin.sbm_cancel_submitdone = async function (e) {
  await $c.win.alert($p, "성공적으로 미확정 처리하였습니다.");
  scwin.f_Retrieve();
  let staffNo = ds_out.getCellData(0, "staffNo");
  if (staffNo != "") {
    await $c.win.alert($p, "사원번호 : " + staffNo + "\n은(는) 이미 급여정산내역이 집계되어 있습니다.\n급여정산 재집계하시기 바랍니다.");
  }
};

/**
 * event
 * @name sbm_delete_submitdone
 * @description
 */
scwin.sbm_delete_submitdone = async function (e) {
  await $c.win.alert($p, MSG_CM_INF_004); //"성공적으로 삭제하였습니다."
  scwin.f_Retrieve();
  let staffNo = ds_out.getCellData(0, "staffNo");
  if (staffNo != "") {
    await $c.win.alert($p, "사원번호 : " + staffNo + "\n은(는) 이미 급여정산내역이 집계되어 있습니다.\n급여정산 재집계하시기 바랍니다.");
  }
};

/**
 * event
 * @name sbm_search_submitdone
 * @description 
 */
scwin.sbm_search_submitdone = async function (e) {
  // 시작일자 column setColor
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    let rmkVal = ds_master.getCellData(i, "rmk");
    if (rmkVal == "토요일") {
      gr_master.setCellColor(i, "workStDt", "blue");
    } else if (rmkVal == "일요일" || rmkVal == "공휴일") {
      gr_master.setCellColor(i, "workStDt", "red");
    }
  }
  scwin.setSumFooter(["etcAlowAmt", "etcDedtAmt", "daySalaryAmt"]);
};

/**
 * event
 * @name udc_coCd_onblurCodeEvent
 * @description
 */
scwin.udc_coCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_coCd, ed_coNm, 3);
};

/**
 * event
 * @name udc_coCd_onviewchangeNameEvent
 * @description
 */
scwin.udc_coCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_coNm, ed_coCd, 3, false);
};

/**
 * event
 * @name udc_coCd_onclickEvent
 * @description
 */
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_coCd.getValue(), ed_coNm.getValue(), 'F', 'T');
};

/**
 * event
 * @name udc_acctDeptCd_onblurCodeEvent
 * @description
 */
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_acctDeptCd, ed_acctDeptNm, 1);
};

/**
 * event
 * @name udc_acctDeptCd_onviewchangeNameEvent
 * @description
 */
scwin.udc_acctDeptCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_acctDeptNm, ed_acctDeptCd, 1, false);
};

/**
 * event
 * @name udc_acctDeptCd_onclickEvent
 * @description
 */
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'T');
};

/**
 * event
 * @name udc_staffNo_onblurCodeEvent
 * @description
 */
scwin.udc_staffNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_staffNo, ed_staffNm, 2);
};

/**
 * event
 * @name udc_staffNo_onviewchangeNameEvent
 * @description
 */
scwin.udc_staffNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_staffNm, ed_staffNo, 2, false);
};

/**
 * event
 * @name udc_staffNo_onclickEvent
 * @description
 */
scwin.udc_staffNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_staffNo.getValue(), ed_staffNm.getValue(), 'F', 'T');
};

/**
 * event
 * @name ds_master_ondataload
 * @description 직근태 조회 완료 후
 */
scwin.ds_master_ondataload = async function () {
  let rowCnt = ds_master.getRowCount();
  tbx_totalRows.setValue(rowCnt);
  if (!rowCnt) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Cancel, btn_Del, btn_Mod]);
    return;
  }
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Cancel, btn_Del, btn_Mod]);
  scwin.sChk = 0;
  scwin.ValidChkFlag = false;
};

/**
 * event
 * @name ds_master_oncelldatachange
 * @description
 */
scwin.ds_master_oncelldatachange = function (info) {
  scwin.f_calcMaster(info.rowIndex, info.colID, info.newValue);
};

/**
 * event
 * @name ds_master_oncelldatachange
 * @description
 */
scwin.ds_master_onbeforecelldatachange = function (info) {
  let colid = info.colID;
  if (colid !== "chk") {
    return;
  }
  let row = info.rowIndex;
  let workStsCd = ds_master.getCellData(row, "workStsCd");
  const colidArr = ["annualYn", "offDayYn", "mealTimeYn", "workStHh", "workEndDt", "workEndHh", "foodYn", "etcAlowAmt", "etcDedtAmt", "summary"];
  if (workStsCd != "3") {
    let readOnly = info.newValue != "1";
    for (let colid of colidArr) {
      gr_master.setCellReadOnly(row, colid, readOnly);
    }
  }
  if (workStsCd !== "1" && workStsCd !== "2") {
    scwin.chkHistory.set(row, info.oldValue);
  }
  return true;
};

/**
 * event
 * @name gr_master_onheaderclick
 * @description
 */
scwin.gr_master_onheaderclick = function (headerId) {
  if (headerId === "chkHeader") {
    scwin.sChk = gr_master.getHeaderValue("chkHeader") ? 1 : 0;
    for (let item of scwin.chkHistory) {
      ds_master.setCellData(item[0], "chk", item[1]);
    }
  }
  scwin.chkHistory.clear();
  let unchecked = ds_master.getUnmatchedIndex("chk", "1", true);
  for (let idx of unchecked) {
    ds_master.undoRow(idx);
  }
};

/**
 * event
 * @name gr_master_oncellclick
 * @description
 */
scwin.gr_master_oncellclick = async function (row, col, colid) {
  scwin.chkHistory.clear();
  if (colid !== "chk") {
    return;
  }
  if (ds_master.getCellData(row, "chk") != "1") {
    ds_master.undoRow(row);
  }
  let checked = false;
  let oldChk = scwin.sChk;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "chk") == "1") {
      checked = true;
      break;
    }
  }
  if (!checked) {
    scwin.sChk = 0; //미선택
  } else {
    if (ds_master.getCellData(row, "chk") == "1") {
      if (ds_master.getCellData(row, "workStsCd") == "1" || ds_master.getCellData(row, "workStsCd") == "2") {
        scwin.sChk = 1; // 미등록/대기 선택
      } else {
        scwin.sChk = 2; // 등록 선택
      }
    }
  }
  if (oldChk == 1) {
    if (scwin.sChk == 2) {
      ds_master.setCellData(row, "chk", "0");
      scwin.sChk = 1;
      await $c.win.alert($p, "미등록/대기 상태와 등록 상태는 함께 선택불가합니다.");
      return;
    }
  } else if (oldChk == 2) {
    if (scwin.sChk == 1) {
      ds_master.setCellData(row, "chk", "0");
      scwin.sChk = 2;
      await $c.win.alert($p, "등록상태와 미등록/대기 상태는 함께 선택불가합니다.");
      return;
    }
  }
};

/**
 * method
 * @name cfValidateValue
 * @description
 */
scwin.cfValidateValue = function (valInfo, value) {
  if (valInfo.isTime) {
    if (value.length < 5) {
      value = scwin.gv_CurDate + value;
    }
    return $c.date.isDate($p, value, true);
  }
  let msgInfo = $c.data.getValResultMsg($p, valInfo, value);
  if (msgInfo.message === "") {
    return true;
  }
  return false;
};

/**
* method
* @name setSumFooter
* @description
*/
scwin.setSumFooter = function (colidArr) {
  if (typeof colidArr === "string") {
    colidArr = [colidArr];
  }
  let allData = ds_master.getAllJSON();
  for (let colid of colidArr) {
    let val = allData.reduce((sum, item) => sum.plus(item[colid]), $w.bigDecimal("0"));
    gr_master.setFooterData(colid + "Sum", val);
  }
};

/**
 * event
 * @name btn_Mod_onclick
 * @description
 */
scwin.btn_Mod_onclick = async function (e) {
  await scwin.f_Modify();
};

/**
 * event
 * @name btn_fieldClear_onclick
 * @description
 */
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

/**
 * event
 * @name btn_retrieve_onclick
 * @description
 */
scwin.btn_retrieve_onclick = async function (e) {
  await scwin.f_Retrieve();
};

/**
 * event
 * @name btn_Create_onclick
 * @description
 */
scwin.btn_Create_onclick = async function (e) {
  await scwin.f_Save();
};

/**
 * event
 * @name btn_Cancel_onclick
 * @description
 */
scwin.btn_Cancel_onclick = async function (e) {
  await scwin.f_Cancel();
};

/**
 * event
 * @name btn_Del_onclick
 * @description
 */
scwin.btn_Del_onclick = async function (e) {
  await scwin.f_Delete();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'grp_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'회사코드',nameId:'ed_coNm',style:'',id:'udc_coCd',btnId:'btn_coCd','ev:onclickEvent':'scwin.udc_coCd_onclickEvent',refDataCollection:'dma_search',allowCharCode:'0-9',mandatoryCode:'true',validExpCode:'회사코드:yes',UpperFlagCode:'1',maxlengthCode:'3',codeWidth:'40','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_coCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'',selectID:'retrieveAcctDeptCdInfo6',style:'',validTitle:'귀속부서',id:'udc_acctDeptCd',btnId:'btn_acctDeptCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',refDataCollection:'dma_search',code:'acctDeptCd',objTypeCode:'data',validExpCode:'귀속부서:yes',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',mandatoryName:'true',validExpName:'귀속부서:yes',mandatoryCode:'true',maxlengthCode:'5',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_lowerDeptIncluYn',ref:'data:dma_search.lowerDeptIncluYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위부서포함 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'성명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_staffNo',nameId:'ed_staffNm',popupID:'',selectID:'retrieveStaffListForDayLaborers',style:'',validTitle:'성명',id:'udc_staffNo',btnId:'btn_staffNo','ev:onblurCodeEvent':'scwin.udc_staffNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_staffNo_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_staffNo_onclickEvent',refDataCollection:'dma_search',code:'staffNo',objTypeCode:'data',validExpCode:'성명:no:string=6',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',objTypeName:'data',codeWidth:'50'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'outbrStDt',refDataMap:'dma_search',style:'',id:'udcCal',refEdDt:'outbrEndDt',edToId:'em_retrieve_outbrEndDt',edFromId:'em_retrieve_outbrStDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'급여구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select','ev:onselected':'scwin.acb_districtCd_onselected',id:'acb_retrieve_gubun',ref:'data:dma_search.gubun',search:'start',style:'width: 230px;',submenuSize:'auto',visibleRowNum:'15',chooseOption:'true',chooseOptionLabel:'전체'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{chooseOption:'true',chooseOptionLabel:'전체',class:'',editType:'select','ev:onselected':'scwin.acb_districtCd_onselected',id:'acb_workStsCd',ref:'data:dma_search.workStsCd',search:'start',style:'width: 230px;',submenuSize:'auto',visibleRowNum:'15'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'일용직 근태등록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'시작시간',class:''}},{T:1,N:'xf:input',A:{dataType:'number',style:'',id:'ed_stHh',class:'w50 tac',maxlength:'5',editFormat:'##:##',displayFormat:'##:##'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'종료시간',style:''}},{T:1,N:'xf:input',A:{class:'w50 tac',dataType:'number',id:'ed_endHh',style:'',displayFormat:'##:##',editFormat:'##:##',maxlength:'5'}}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Mod',style:'',type:'button','ev:onclick':'scwin.btn_Mod_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄적용'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_toExcel',gridID:'gr_master',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'9',visibleRowNumFix:'true',fixedColumn:'4','ev:oncellclick':'scwin.gr_master_oncellclick',readOnly:'true',rowStatusVisible:'true','ev:onviewchange':'scwin.gr_master_onviewchange',columnMove:'true',columnMoveWithFooter:'true',fixedColumnNoMove:'true',focusFlow:'linear',readOnlyTabIgnore:'true',rowStatusWidth:'20','ev:onheaderclick':'scwin.gr_master_onheaderclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chkHeader',inputType:'checkbox',width:'20',value:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'상태',width:'60',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column78',value:'사원</br>번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column74',value:'성명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column70',value:'직종',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column66',value:'상세</br>직종',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column62',value:'직급 ',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column58',value:'부서</br>코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'부서명',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'연차</br>여부',width:'60',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'휴일</br>여부',width:'60',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'중식</br>여부',width:'60',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'근무',width:'280',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column102',value:'재근무',displayMode:'label',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column82',value:'근무</br>시간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column86',value:'연장</br>시간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column118',value:'야간</br>시간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column110',value:'휴일</br>시간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column134',value:'일</br>급여액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column130',value:'식대',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column126',value:'기타</br>소득',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column122',value:'기타</br>공제',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column114',value:'적요',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column158',value:'급여</br>구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column154',value:'월정액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column150',value:'일당',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column146',value:'시급액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column138',value:'기준</br>식대',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column142',value:'식대',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column174',value:'연장</br>할증률',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column162',value:'휴일</br>할증률',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column166',value:'야간</br>할증률',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'시작</br>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column50',value:'시작</br>시간',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'종료</br>일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column107',value:'종료</br>시간',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column103',value:'시작</br>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column99',value:'시작</br>시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column95',value:'종료</br>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column91',value:'종료</br>시간',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workStsCd',inputType:'select',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNo',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNm',inputType:'text',readOnly:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occptypeCd',inputType:'select',readOnly:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dtlOccptypeCd',inputType:'select',readOnly:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdCd',inputType:'select',hidden:'true',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',readOnly:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'annualYn',inputType:'checkbox',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offDayYn',inputType:'checkbox',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mealTimeYn',inputType:'checkbox',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workStDt',inputType:'calendar',readOnly:'true',sortable:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workStHh',inputType:'text',sortable:'true',dataType:'time',maxByteLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workEndDt',inputType:'calendar',sortable:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workEndHh',inputType:'text',sortable:'true',dataType:'time',maxByteLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reworkStDt',inputType:'calendar',sortable:'true',dataType:'date',displayFormat:'yyyy/MM/dd',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reworkStHh',inputType:'text',hidden:'true',sortable:'true',dataType:'time',maxByteLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reworkEndDt',inputType:'calendar',sortable:'true',dataType:'date',displayFormat:'yyyy/MM/dd',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reworkEndHh',inputType:'text',hidden:'true',sortable:'true',dataType:'time',maxByteLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rltWorkHh',inputType:'text',readOnly:'true',textAlign:'right',sortable:'true',dataType:'number',displayFormat:'#,###.#',excelFormat:'#,##0.#',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'extdWorkHh',inputType:'text',readOnly:'true',textAlign:'right',sortable:'true',dataType:'number',displayFormat:'#,###.#',excelFormat:'#,##0.#',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ngtWorkHh',inputType:'text',readOnly:'true',textAlign:'right',sortable:'true',dataType:'number',displayFormat:'#,###.#',excelFormat:'#,##0.#',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offWorkHh',inputType:'text',readOnly:'true',textAlign:'right',sortable:'true',dataType:'number',displayFormat:'#,###.#',excelFormat:'#,##0.#',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'daySalaryAmt',inputType:'text',readOnly:'true',textAlign:'right',sortable:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'foodYn',inputType:'checkbox',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'etcAlowAmt',inputType:'text',textAlign:'right',sortable:'true',dataType:'float',displayFormat:'#,###.#############',excelFormat:'#,##0',excelCellType:'number',maxLength:'25.13'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'etcDedtAmt',inputType:'text',textAlign:'right',sortable:'true',dataType:'float',displayFormat:'#,###.#############',excelFormat:'#,##0',excelCellType:'number',maxLength:'25.13'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payGbn',inputType:'select',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAmt',inputType:'text',readOnly:'true',textAlign:'right',sortable:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dayPayAmt',inputType:'text',readOnly:'true',textAlign:'right',sortable:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'timePayAmt',inputType:'text',readOnly:'true',textAlign:'right',sortable:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'standFoodAmt',inputType:'text',readOnly:'true',hidden:'true',textAlign:'right',sortable:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'foodAmt',inputType:'text',readOnly:'true',textAlign:'right',sortable:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'extdScRt',inputType:'text',readOnly:'true',textAlign:'right',sortable:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offDayScRt',inputType:'text',readOnly:'true',textAlign:'right',sortable:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ngtDayScRt',inputType:'text',readOnly:'true',textAlign:'right',sortable:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number',excelFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column47',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column77',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column73',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column65',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column61',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column44',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column43',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column109',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column105',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column101',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column97',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column93',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column85',displayMode:'label',dataType:'number',displayFormat:'#,###.#',textAlign:'right',expression:'sum(\'rltWorkHh\')',excelFormat:'#,##0.#',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column89',displayMode:'label',dataType:'number',displayFormat:'#,###.#',textAlign:'right',expression:'sum(\'extdWorkHh\')',excelFormat:'#,##0.#',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column121',displayMode:'label',dataType:'number',displayFormat:'#,###.#',textAlign:'right',expression:'sum(\'ngtWorkHh\')',excelFormat:'#,##0.#',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column113',displayMode:'label',dataType:'number',displayFormat:'#,###.#',textAlign:'right',expression:'sum(\'offWorkHh\')',excelFormat:'#,##0.#',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'daySalaryAmtSum',displayMode:'label',textAlign:'right',dataType:'bigDecimal',displayFormat:'#,##0',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column133',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etcAlowAmtSum',displayMode:'label',dataType:'bigDecimal',displayFormat:'#,##0.#############',textAlign:'right',excelFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etcDedtAmtSum',displayMode:'label',dataType:'bigDecimal',displayFormat:'#,##0.#############',textAlign:'right',excelFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column117',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column161',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column157',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'payAmt\')',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column153',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'dayPayAmt\')',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column149',displayMode:'label',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column141',displayMode:'label',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column145',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'foodAmt\')',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column177',displayMode:'label',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column165',displayMode:'label',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column169',displayMode:'label',excelCellType:'number',excelFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'info-list'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'근무종료시간 : 익일 06:00 까지 입력 가능합니다. ',class:'txt-dot txt-red'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'확정 : 일용직 정산 시 금액이 반영됩니다. <br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 확정상태 후 수정은 미확정 처리 후 가능합니다. <br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 정산전표 생성 시 확정처리 및 삭제가 불가능합니다.',class:'txt-dot txt-red',escape:'false'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'미확정 : 일용직 정산 시 금액이 미반영됩니다.(임시저장상태)',class:'txt-dot txt-red'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'삭제 : 입력된 일용직 내역을 삭제합니다.(Defalut상태로 조회 됨)',class:'txt-dot txt-red'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',style:'',type:'button',objType:'bCreate','ev:onclick':'scwin.btn_Create_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',style:'',type:'button',objType:'bCancel','ev:onclick':'scwin.btn_Cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Del',style:'',type:'button',objType:'bSave','ev:onclick':'scwin.btn_Del_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})