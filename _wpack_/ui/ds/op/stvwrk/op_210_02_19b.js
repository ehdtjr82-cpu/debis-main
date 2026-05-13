/*amd /ui/ds/op/stvwrk/op_210_02_19b.xml 62116 322d41781b10e66a3246da2ac10bec067d2a27ddf1027f991331646497d945c3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_commSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',name:'sysCd',id:'sysCd'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'인원',dataType:'text'}},{T:1,N:'w2:key',A:{id:'version',name:'버전',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmYn',name:'확정여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYmEnd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'workStDt',name:'작업년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'workEndDt',name:'작업년월',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_confirm',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'인원',dataType:'text'}},{T:1,N:'w2:key',A:{id:'version',name:'버전',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmYn',name:'확정여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYmEnd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'workStDt',name:'작업년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'workEndDt',name:'작업년월',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobranCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'label',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_present',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totDay',name:'총일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'day1',name:'주휴일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'day2',name:'유휴일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'day3',name:'정근일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workTime',name:'근무시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ecsWorkTime',name:'익일연근시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'morningEarlyTime',name:'조촐시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdTime',name:'연장시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngtTime2',name:'야간특근시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngtTime',name:'야간시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDayExtdTime',name:'휴일연장시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paidLeave',name:'유급휴가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unpaidLeave',name:'무급휴일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'foodDay',name:'식대발생일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDayAllowDay',name:'휴일수당일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allNightDay',name:'철야일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overtime40',name:'40초과 연장시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'annualDay',name:'연차일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmYn',name:'확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saveYn',name:'판매여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDayAllowTime',name:'name28',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_upSellPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totDay',name:'총일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'day1',name:'주휴일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'day2',name:'유휴일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'day3',name:'정근일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workTime',name:'근무시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ecsWorkTime',name:'익일연근시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'morningEarlyTime',name:'조촐시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdTime',name:'연장시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngtTime2',name:'야간특근시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngtTime',name:'야간시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDayExtdTime',name:'휴일연장시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paidLeave',name:'유급휴가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unpaidLeave',name:'무급휴일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'foodDay',name:'식대발생일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDayAllowDay',name:'휴일수당일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allNightDay',name:'철야일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overtime40',name:'40초과 연장시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'annualDay',name:'연차일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmYn',name:'확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saveYn',name:'판매여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDayAllowTime',name:'name28',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_commonPopup',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_commSearch',target:'data:json,{"id":"ds_lobranCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_commonPopup_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_present","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_present","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.stvwrk.MergeFuncPostWrkCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_present","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_confirm',action:'/ds.op.stvwrk.ConfirmWrkResultCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_confirm","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'                                                            ','ev:submitdone':'scwin.sbm_confirm_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.memInfo = $c.data.getMemInfo($p);
  scwin.userAcctDeptCd = scwin.memInfo.acctDeptCd;
  scwin.lobranCd = $c.gus.cfIsNull($p, scwin.memInfo.lobranCd) ? "" : scwin.memInfo.lobranCd; // 물류 점소 코드
  scwin.loUpperLobranCd = $c.gus.cfIsNull($p, scwin.memInfo.loUpperLobranCd) ? "" : scwin.memInfo.loUpperLobranCd; // 물류 점소 코드

  scwin.vCurDate = $c.date.getServerDateTime($p); // 서버를 기준으로 현재 날짜 반환
  scwin.closeYm = scwin.vCurDate.substring(0, 6);
  scwin.vWrkStDt = scwin.closeYm + "01"; // 현재 날짜가 포함된 달의 시작 일자
  scwin.vWrkEndDt = scwin.closeYm + $c.date.getLastDateOfMonth($p, scwin.closeYm); // 현재 날짜가 포함된 달의 마지막 일자

  //공통코드 조회
  const codeOptions = [{
    grpCd: "FI052",
    compID: "lc_version"
  }, {
    grpCd: "FS920",
    compID: "lc_confirmYn"
  }];
  $c.data.setCommonCode($p, codeOptions);
  const comboOptions = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    compID: "lc_lobranCd"
  }];
  $c.data.setGauceUtil($p, comboOptions);
  lc_lobranCd.setValue(scwin.loUpperLobranCd);
  lc_version.setSelectedIndex(0);
  lc_lobranCd.focus();
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ed_workStDt.setUserData("validExp", "작업일자:yes:date=YYYYMMDD");
  ed_workEndDt.setUserData("validExp", "작업일자:yes:date=YYYYMMDD");
  udc_fromToCalendar.setInitDate(scwin.vWrkStDt, scwin.vWrkEndDt);
  $c.gus.cfDisableObjects($p, [btn_cancel, btn_save, btn_confirm, btn_confirmCancel]);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  $c.gus.cfInitObjects($p, [tbl_search]);
  ds_present.removeAll();
  lc_lobranCd.setValue(scwin.memInfo.loUpperLobranCd);
  ed_workStDt.setValue(scwin.vWrkStDt);
  ed_workEndDt.setValue(scwin.vWrkEndDt);
  ed_staffNo.setValue("");
  ed_staffNm.setValue("");
  lc_version.setSelectedIndex(0);
  lc_confirmYn.setSelectedIndex(0);
  lc_lobranCd.focus();
};
//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  ds_present.removeAll();
  let check = lc_version.getValue();
  scwin.hid_workStDt = ed_workStDt.getValue();
  scwin.hid_workEndDt = ed_workEndDt.getValue();
  if (!$c.gus.cfIsAfterDate($p, ed_workStDt.getValue(), ed_workEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_workStDt.focus();
    return;
  }
  if (check == "0") {
    //원본인경우
    if (!(await $c.gus.cfValidate($p, [lc_lobranCd, ed_workStDt, ed_workEndDt, lc_version], null, true))) {
      return;
    }
    dma_search.set("closeYm", scwin.hid_workEndDt.substring(0, 6));
    dma_search.set("closeYmEnd", "");
    $c.sbm.setAction($p, sbm_retrieve, "/ds.op.stvwrk.RetrieveFuncPostWrkOriCMD.do");
    $c.sbm.execute($p, sbm_retrieve);
  } else {
    if (!(await $c.gus.cfValidate($p, [ed_workStDt, lc_version, ed_workEndDt], null, true))) {
      return;
    }
    dma_search.set("closeYm", scwin.hid_workStDt.substring(0, 6));
    dma_search.set("closeYmEnd", scwin.hid_workEndDt.substring(0, 6));
    $c.sbm.setAction($p, sbm_retrieve, "/ds.op.stvwrk.RetrieveFuncPostWrkEdtCMD.do");
    $c.sbm.execute($p, sbm_retrieve);
  }
  scwin.hid_lobranCd = lc_lobranCd.getValue();
  scwin.hid_closeYm = ed_workStDt.getValue().substring(0, 6);
  scwin.hid_staffNo = ed_staffNo.getValue();
};

//-------------------------------------------------------------------------
// 수정본만 수정,등록을 할 수있다.
//-------------------------------------------------------------------------
scwin.f_verCheck = function () {
  if (lc_version.getValue() == "0") {
    // 원본
    $c.gus.cfDisableObjects($p, [btn_cancel, btn_confirm, btn_confirmCancel]);
    gr_InIntendInformation.setReadOnly("grid", true);
    $c.gus.cfEnableObjects($p, [btn_save]);
    if (ds_present.getRowCount() == 0) {
      $c.gus.cfDisableObjects($p, [btn_save]);
    } else {
      if (ed_workStDt.getValue().substring(0, 6) != ed_workEndDt.getValue().substring(0, 6)) {
        if (ed_workStDt.getValue().substring(0, 6) == "202509") {
          $c.gus.cfEnableObjects($p, [btn_save]);
        } else {
          $c.gus.cfDisableObjects($p, [btn_save]);
        }
      } else {
        $c.gus.cfEnableObjects($p, [btn_save]);
      }
    }
  } else {
    // 수정본
    if (lc_lobranCd.getValue() == "") {
      //전체조회일경우 버튼 비활성화
      $c.gus.cfDisableObjects($p, [btn_cancel, btn_save, btn_confirm, btn_confirmCancel]);
      gr_InIntendInformation.setReadOnly("grid", true);
    } else {
      if (ed_workStDt.getValue().substring(0, 6) == ed_workEndDt.getValue().substring(0, 6)) {
        //작업년월이 같은 경우 버튼 활성화
        if (ds_present.getCellData(0, "confirmYn") == "0") {
          //미확정인경우
          $c.gus.cfEnableObjects($p, [btn_cancel, btn_confirm, btn_save]);
          $c.gus.cfDisableObjects($p, [btn_confirmCancel]);
          gr_InIntendInformation.setReadOnly("grid", false);
        } else {
          $c.gus.cfDisableObjects($p, [btn_cancel, btn_confirm, btn_save, btn_confirmCancel]);
          if (scwin.userAcctDeptCd == "01541") {
            //귀속부서 HR > 조직소통팀 변경 2025.10.16
            $c.gus.cfEnableObjects($p, [btn_confirmCancel]);
          }
          gr_InIntendInformation.setReadOnly("grid", true);
        }
      } else {
        $c.gus.cfDisableObjects($p, [btn_cancel, btn_confirm, btn_save, btn_confirmCancel]);
        gr_InIntendInformation.setReadOnly("grid", true);
      }
    }
    if (ds_present.getRowCount() == 0) {
      $c.gus.cfDisableObjects($p, [btn_cancel, btn_confirm, btn_confirmCancel]);
    }
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_save = async function () {
  let msg = "";
  //체크
  if (lc_version.getValue() == "0") {
    if (ds_present.getCellData(0, "saveYn") == "Y") {
      await $c.win.alert($p, "이미 등록된 수정본이 있습니다. 원본 저장이 불가합니다.");
      return;
    }
    let _workStYm = scwin.hid_workStDt.substring(0, 6);
    let _workEndYm = scwin.hid_workEndDt.substring(0, 6);
    if (_workEndYm == "202509") {
      if (scwin.hid_workStDt == "20250901" && scwin.hid_workEndDt != "20250928") {
        await $c.win.alert($p, "2025년9월 실적은 2025.09.01~2025.09.28 조회 후 저장 가능합니다.");
        return;
      }
    } else if (_workEndYm == "202510") {
      if (scwin.hid_workStDt == "20251031" && scwin.hid_workEndDt != "20250929") {
        await $c.win.alert($p, "2025년10월 실적은  2025.09.29~2025.10.31 조회 후 저장 가능합니다.");
        return;
      }
    } else if (_workStYm != _workEndYm) {
      await $c.win.alert($p, "작업 시작년월과 종료년월이 다릅니다.");
      return;
    }
    msg = "원본 데이터 기준으로 " + ed_workEndDt.getValue().substring(0, 4) + "년" + ed_workEndDt.getValue().substring(4, 6) + "월 최종자료가 생성됩니다. ";
  } else {
    if (!$c.data.isModified($p, ds_present)) {
      await $c.win.alert($p, "변경된 사항이 없습니다.");
      return;
    }
  }
  if (ds_present.getCellData(0, "confirmYn") == "1") {
    await $c.win.alert($p, "확정된 건은 변경할 수 없습니다");
    return;
  }
  if (!(await $c.gus.cfValidate($p, [lc_lobranCd, ed_workStDt, lc_version], null, true))) {
    return false;
  }
  if (await $c.win.confirm($p, msg + MSG_CM_CRM_001)) {
    if (await $c.gus.cfValidate($p, [gr_InIntendInformation], null, true)) {
      for (i = 0; i < ds_present.getRowCount(); i++) {
        ds_present.setCellData(i, "closeYm", ed_workStDt.getValue().substring(0, 6));
      }
      $c.sbm.execute($p, sbm_save);
    }
  }
};

//-------------------------------------------------------------------------
// 확정
//-------------------------------------------------------------------------
scwin.f_confirm = async function (gubun) {
  //수정본 체크
  if (lc_version.getValue() == "1") {
    let msg = "";
    if (gubun == "1") {
      msg = "확정하시겠습니까?";
      if (ds_present.getCellData(0, "confirmYn") == "1") {
        await $c.win.alert($p, "이미 확정처리 되었습니다.");
        return;
      }
    } else {
      msg = "확정취소하시겠습니까?";
      if (ds_present.getCellData(0, "confirmYn") == "0") {
        await $c.win.alert($p, "확정취소 불가합니다.");
        return;
      }
    }
    if (!(await $c.gus.cfValidate($p, [lc_lobranCd, ed_workEndDt], null, true))) {
      return false;
    }
    let conf = await $c.win.confirm($p, ed_workEndDt.getValue().substring(0, 4) + "년 " + ed_workEndDt.getValue().substring(4, 6) + "월 내역을 " + msg);
    if (conf) {
      dma_confirm.set("lobranCd", lc_lobranCd.getValue());
      dma_confirm.set("closeYm", ed_workEndDt.getValue().substring(0, 6));
      dma_confirm.set("confirmYn", gubun); //확정:1, 확정취소:0
      $c.sbm.execute($p, sbm_confirm);
    }
  }
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  switch (disGubun) {
    case 1:
      let lodeptCd = lc_lobranCd.getValue();
      if (lodeptCd == "") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["점소"]);
        lc_lobranCd.focus();
        return;
      }
      udc_staffNo.cfCommonPopUp(rtnList => $c.gus.cfSetReturnValue($p, rtnList, ed_staffNo, ed_staffNm), pCode, pName, pClose, null, null, null, null, lodeptCd, "420", null, null, null); // 사원
      break;
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openlobPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  let curDate = $c.date.getServerDateTime($p).substring(0, 6);
  switch (disGubun) {
    case 1:
      let arrParam = new Array();
      arrParam[0] = pCode; //사번
      arrParam[1] = pName; //사원명
      arrParam[2] = lc_lobranCd.getValue(); //점소코드
      arrParam[3] = lc_lobranCd.getText(true); //점소명
      arrParam[4] = ''; //작업장코드
      arrParam[5] = ''; //직종  (정규직)
      arrParam[6] = ''; //상세직종코드
      arrParam[7] = ''; //직급
      arrParam[8] = ''; //작업일
      arrParam[9] = ''; //배치가능여부
      arrParam[10] = 'T'; //WINDOW CLOSE 여부
      arrParam[11] = "1"; //상세직종Flag
      arrParam[13] = curDate + "01";
      arrParam[14] = curDate + $c.date.getLastDateOfMonth($p, curDate);
      let opts = {
        id: "op_103_01_10p",
        popupName: "인력검색",
        modal: true,
        type: "browserPopup",
        title: "인력검색",
        width: 1000,
        height: 550
      };
      let rtnList = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml", opts, arrParam);

      //(0)직종코드
      //(1)직종명
      //(2)인원번호
      //(3)인원명
      //(4)직급
      //(5)직급명
      //(6)물류점소코드
      //(7)물류점소명
      //(8)상세직종코드
      //(9)상세직종명
      //(10)배치가능여부
      //(11)본사계약직여부
      //(12)연근여부

      if (rtnList != null) {
        ed_staffNo.setValue(rtnList[2]); //사원코드
        ed_staffNm.setValue(rtnList[3]); //사원명
      } else {
        ed_staffNo.setValue(""); //사원코드
        ed_staffNm.setValue(""); //사원명
      }
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
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
    await scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    await scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 엑셀 파일 업로드/다운로드
//-------------------------------------------------------------------------
// UDC 파일 업로드 function
scwin.f_upload = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_workStDt], null, true))) {
    return;
  }
  let msg = ed_workStDt.getValue().substring(0, 4) + "년 " + ed_workStDt.getValue().substring(4, 6) + "월로 엑셀파일 Import를 하시겠습니까?";
  if (!(await $c.win.confirm($p, msg))) {
    return;
  }
  ds_present.removeAll();
  ds_upSellPlan.removeAll();
  let options = {
    "status": "C",
    "headerExist": 1,
    "useMaxByteLength": ",",
    "type": "1",
    "startRowIndex": 0
  };
  if (udc_topGrd.getUpExt() == "1") {
    // csv 선택값
    options = {
      "status": "C",
      "headerExist": 1,
      "header": 1,
      "type": "1",
      "startRowIndex": 0
    };
  }
  udc_topGrd.uploadGridViewExcel(gr_excel, options);
};

// 그리드에 엑셀 업로드 후 실행
scwin.gr_excel_onfilereadend = function (value) {
  scwin.f_import();
};

// 엑셀 그리드 > main 그리드
scwin.f_import = async function () {
  // 파일의 마지막 행에 합계행이 있을경우 삭제 경고 메세지 출력후 종료
  if (ds_upSellPlan.getCellData(ds_upSellPlan.getRowCount() - 1, "staffNo") == "합계") {
    await $c.gus.cfAlertMsg($p, "업로드 형식이 잘못되었습니다." + "\n사용하신 파일의 마지막 합계행을 제거하고," + "\n다시 사용하시길 바랍니다.");
    return;
  }
  let staffNo = null;
  for (let i = 0; i < ds_upSellPlan.getRowCount(); i++) {
    let insRow = ds_present.insertRow();
    staffNo = ds_upSellPlan.getCellData(i, "staffNo");
    // 사원번호 자릿수 검사
    switch (staffNo.length) {
      case 6:
        ds_present.setCellData(insRow, "staffNo", staffNo);
        break;
      case 8:
        ds_present.setCellData(insRow, "staffNo", staffNo.substring(2, 8));
        break;
      case 5:
      case 4:
      case 3:
      case 2:
      case 1:
        ds_present.setCellData(insRow, "staffNo", $c.str.rpad($p, staffNo, 6, "0"));
        break;
    }
    ds_present.setCellData(insRow, "staffNm", ds_upSellPlan.getCellData(i, "staffNm").trim());
    ds_present.setCellData(insRow, "deptNm", ds_upSellPlan.getCellData(i, "deptNm").trim());
    ds_present.setCellData(insRow, "occpgrdNm", ds_upSellPlan.getCellData(i, "occpgrdNm").trim());
    ds_present.setCellData(insRow, "totDay", ds_upSellPlan.getCellData(i, "totDay").trim());
    ds_present.setCellData(insRow, "day1", ds_upSellPlan.getCellData(i, "day1").trim());
    ds_present.setCellData(insRow, "day2", ds_upSellPlan.getCellData(i, "day2").trim());
    ds_present.setCellData(insRow, "day3", ds_upSellPlan.getCellData(i, "day3").trim());
    ds_present.setCellData(insRow, "workTime", ds_upSellPlan.getCellData(i, "workTime").trim());
    ds_present.setCellData(insRow, "ecsWorkTime", ds_upSellPlan.getCellData(i, "ecsWorkTime").trim());
    ds_present.setCellData(insRow, "extdTime", ds_upSellPlan.getCellData(i, "extdTime").trim());
    ds_present.setCellData(insRow, "ngtTime", ds_upSellPlan.getCellData(i, "ngtTime").trim());
    ds_present.setCellData(insRow, "offDayAllowTime", ds_upSellPlan.getCellData(i, "offDayAllowTime").trim());
    ds_present.setCellData(insRow, "offDayExtdTime", ds_upSellPlan.getCellData(i, "offDayExtdTime").trim());
    ds_present.setCellData(insRow, "paidLeave", ds_upSellPlan.getCellData(i, "paidLeave").trim());
    ds_present.setCellData(insRow, "unpaidLeave", ds_upSellPlan.getCellData(i, "unpaidLeave").trim());
    ds_present.setCellData(insRow, "foodDay", ds_upSellPlan.getCellData(i, "foodDay").trim());
    ds_present.setCellData(insRow, "allNightDay", ds_upSellPlan.getCellData(i, "allNightDay").trim());
    ds_present.setCellData(insRow, "overtime40", ds_upSellPlan.getCellData(i, "overtime40").trim());
    ds_present.setCellData(insRow, "annualDay", ds_upSellPlan.getCellData(i, "annualDay").trim());
    ds_present.setCellData(insRow, "closeYm", ed_workStDt.getValue().substring(0, 6));
    ds_present.setCellData(insRow, "confirmYn", "0");

    // 사원번호에 null이나 공백이 있을경우 경고메세지 출력후 종료
    if (staffNo == "") {
      await $c.gus.cfAlertMsg($p, "업로드 파일의 데이터가 잘못되었습니다." + "\n[" + (i + 1) + "] 번째 행의 [사원번호] 값이 없습니다.\n사용하신 파일의 데이터를 확인 후,\n다시 업로드하시길 바랍니다.");
      return;
    }
  }

  // 엑셀파일 Import가 정상종료시 조회년월,버전에 대한 Hidden값 및 저장가능여부 True로 변경
  scwin.hid_lobranCd = lc_lobranCd.getValue();
  scwin.hid_closeYm = ed_workStDt.getValue();
  scwin.hid_staffNo = ed_staffNo.getValue();
  ds_upSellPlan.removeAll();
  spn_totalRow.setValue(ds_present.getRowCount());
};
scwin.f_down = async function () {
  let totCnt = ds_present.getRowCount();
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      let options = {
        fileName: "기능직근태조회및수정.xlsx",
        sheetName: "기능직근태조회및수정",
        type: "4+8+16",
        useSubTotal: "true",
        useSubTotalData: "true"
      };
      $c.data.downloadGridViewExcel($p, gr_InIntendInformation, options);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  }
  let rowCnt = ds_present.getRowCount();
  spn_totalRow.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  } else {
    $c.gus.cfEnableAllBtn($p);
  }
  scwin.f_verCheck();
};

//저장
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  }
  await $c.gus.cfAlertMsg($p, "성공적으로 저장되었습니다");
  $c.gus.cfEnableObjects($p, [lc_lobranCd, lc_version, ed_workStDt]);
  scwin.f_retrieve();
};

//확정
scwin.sbm_confirm_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  }
  await $c.gus.cfAlertMsg($p, "성공적으로 처리되었습니다");
  $c.gus.cfEnableObjects($p, [lc_lobranCd, lc_version, ed_workStDt]);
  scwin.f_retrieve();
};
/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S
-----------------------------------------------------------------------------*/
//작업일자 날짜 변경 (202509)
scwin.udc_fromToCalendar_onBlurFrom = function (e) {
  let chkWorkYm = ed_workStDt.getValue().substring(0, 6);
  if (chkWorkYm == "202509") {
    ed_workStDt.setValue("20250901");
    ed_workEndDt.setValue("20250928");
  } else if (chkWorkYm == "202510") {
    ed_workStDt.setValue("20250929");
  }
};

//조회조건 clear 버튼
scwin.btn_refresh_onclick = function (e) {
  scwin.f_fieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  scwin.f_retrieve();
};

//인원 찾기 버튼
scwin.udc_staffNo_onclickEvent = function (e) {
  scwin.f_openlobPopUp(1, ed_staffNo.getValue(), ed_staffNm.getValue(), 'F', 'F');
};
scwin.udc_staffNo_onblurCodeEvent = function (e) {
  scwin.f_openlobPopUp(1, ed_staffNo.getValue(), "", 'T', 'F');
};
scwin.udc_staffNo_onblurNameEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_staffNm, ed_staffNo, 1, false);
};

//사원명 클릭 > 팝업 호출
scwin.gr_InIntendInformation_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "staffNm") {
    let opts = {
      id: "popup",
      popupName: "기능직근태인원별상세조회",
      modal: true,
      type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
      ,

      width: "1200",
      height: "700",
      title: "기능직근태인원별상세조회"
    };
    let data = {
      pLobranCd: lc_lobranCd.getValue(),
      pWorkStDt: ed_workStDt.getValue(),
      pWorkEndDt: ed_workEndDt.getValue(),
      pStaffNo: ds_present.getCellData(rowIndex, "staffNo"),
      pStaffNm: ds_present.getCellData(rowIndex, "staffNm")
    };
    $c.win.openPopup($p, "/ui/ds/op/stvwrk/op_210_02_19p.xml", opts, data);
  }
};
scwin.gr_InIntendInformation_onafteredit = function (rowIndex, columnIndex, value) {
  let colid = gr_InIntendInformation.getColumnID(columnIndex);
  switch (colid) {
    case "totDay":
    case "day1":
    case "day2":
    case "day3":
    case "workTime":
    case "ecsWorkTime":
    case "extdTime":
    case "ngtTime":
    case "offDayAllowTime":
    case "offDayExtdTime":
    case "paidLeave":
    case "unpaidLeave":
    case "foodDay":
    case "allNightDay":
    case "overtime40":
    case "annualDay":
      if (value == "" || isNaN(value)) {
        ds_present.setCellData(rowIndex, colid, "0");
      }
      break;
  }
};

//저장 버튼
scwin.btn_save_onclick = function (e) {
  scwin.f_save();
};

//확정 버튼
scwin.btn_confirm_onclick = function (e) {
  scwin.f_confirm(1);
};

//확정취소 버튼
scwin.btn_confirmCancel_onclick = function (e) {
  scwin.f_confirm(0);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:50px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:65px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_lobranCd',style:'width:200px;',submenuSize:'auto',mandatory:'true',ref:'data:dma_search.lobranCd',chooseOptionLabel:'-전체-',visibleRowNum:'20',validExp:'점소:yes'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'의왕'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4BB'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'동해'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2AA'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6AA'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'버전',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_version',style:'width:120px;',submenuSize:'auto',mandatory:'true',objType:'data',ref:'data:dma_search.version',validExp:'버전:yes:number'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원본'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정본'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'dma_search',refEdDt:'workEndDt',refStDt:'workStDt',style:'',edFromId:'ed_workStDt',objTypeFrom:'data',mandatoryFrom:'true',objTypeBtn:'data',edToId:'ed_workEndDt',objTypeTo:'data',mandatoryTo:'true','ev:onBlurFrom':'scwin.udc_fromToCalendar_onBlurFrom'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인원',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_staffNo',objTypeName:'data',objTypeCode:'data',UpperFlagCode:'1',maxlengthCode:'6',nameId:'ed_staffNm',id:'udc_staffNo',btnId:'btn_staffNo','ev:onclickEvent':'scwin.udc_staffNo_onclickEvent',refDataCollection:'dma_search',code:'staffNo','ev:onblurCodeEvent':'scwin.udc_staffNo_onblurCodeEvent',selectID:'retrieveOpEmpCdInfo','ev:onblurNameEvent':'scwin.udc_staffNo_onblurNameEvent',allowCharCode:'a-zA-Z0-9',codeWidth:'60',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_confirmYn',search:'start',style:'width: 120px;',submenuSize:'auto',ref:'data:dma_search.confirmYn',allOption:'',chooseOption:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.btn_refresh_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'기능직 근태 조회 및 수정',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridID:'gr_InIntendInformation',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'Y',templateYn:'N',gridDownUserAuth:'X',gridUpFn:'scwin.f_upload',gridDownFn:'scwin.f_down',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:oncellclick':'scwin.gr_InIntendInformation_oncellclick',fixedColumnNoMove:'true',readOnlyTabIgnore:'true',scrollByColumnAdaptive:'false',editModeEvent:'onclick',scrollByColumn:'false',focusFlow:'linear',columnMoveWithFooter:'true','ev:onfilereadend':'scwin.gr_InIntendInformation_onfilereadend',checkReadOnlyOnPasteEnable:'',rowStatusVisible:'true',initFixedHeightByRowNum:'12',visibleRowNumFix:'true',fixedColumn:'4',dataList:'data:ds_present',style:'',autoFit:'none',id:'gr_InIntendInformation',class:'wq_gvw','ev:onbodymouseover':'scwin.gr_InIntendInformation_onbodymouseover','ev:onafteredit':'scwin.gr_InIntendInformation_onafteredit',readOnly:'true',rowStatusWidth:'20',dataName:'기능직 근태 조회 및 수정',validFeatures:'ignoreStatus=no'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'column12',value:'사원번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'column11',value:'사원명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'200',inputType:'text',id:'column10',value:'부서',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',id:'column9',value:'직급',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column21',value:'총일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column19',value:'주휴일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'유휴일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'정근일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column15',value:'실근무시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column50',value:'연근시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column44',value:'연장시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column38',value:'야간시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column80',value:'휴일근무시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column32',value:'휴일연장시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'유급휴가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column68',value:'무급휴일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column65',value:'식대발생일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'철야일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column56',value:'40초과연장시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'연차일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column71',value:'확정여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column77',value:'작업년월',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',readOnly:'true',id:'staffNo',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'link',readOnly:'true',id:'staffNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'200',inputType:'text',readOnly:'true',id:'deptNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',readOnly:'true',id:'occpgrdNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'110',excelCellType:'number',displayFormat:'#,##0',inputType:'text',id:'totDay',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'110',excelCellType:'number',displayFormat:'#,##0',inputType:'text',id:'day1',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'120',excelCellType:'number',displayFormat:'#,##0',inputType:'text',id:'day2',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'120',excelCellType:'number',displayFormat:'#,##0',inputType:'text',id:'day3',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'float',width:'110',displayFormat:'#,##0.0',excelCellType:'number',inputType:'text',id:'workTime',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'float',width:'100',displayFormat:'#,##0.0',excelCellType:'number',inputType:'text',id:'ecsWorkTime',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'float',width:'120',displayFormat:'#,##0.0',excelCellType:'number',inputType:'text',id:'extdTime',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'float',width:'70',displayFormat:'#,##0.0',excelCellType:'number',inputType:'text',id:'ngtTime',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'float',width:'120',displayFormat:'#,##0.0',excelCellType:'number',inputType:'text',id:'offDayAllowTime',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'float',width:'70',displayFormat:'#,##0.0',excelCellType:'number',inputType:'text',id:'offDayExtdTime',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',excelCellType:'number',displayFormat:'#,##0',inputType:'text',id:'paidLeave',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',excelCellType:'number',displayFormat:'#,##0',inputType:'text',id:'unpaidLeave',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',excelCellType:'number',displayFormat:'#,##0',inputType:'text',id:'foodDay',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',excelCellType:'number',displayFormat:'#,###',inputType:'text',id:'allNightDay',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'float',width:'70',displayFormat:'#,##0.0',excelCellType:'number',inputType:'text',id:'overtime40',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'float',width:'70',displayFormat:'#,##0.00',excelCellType:'number',inputType:'text',id:'annualDay',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'confirmYn',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'closeYm',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column31',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'totDay\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'day1\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',id:'column43',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'day2\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'day3\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',id:'column34',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'workTime\')',textAlign:'right',dataType:'number',width:'110',displayFormat:'#,##0.0',inputType:'expression',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'ecsWorkTime\')',textAlign:'right',dataType:'number',width:'110',displayFormat:'#,##0.0',inputType:'expression',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'extdTime\')',textAlign:'right',dataType:'number',width:'120',displayFormat:'#,##0.0',inputType:'expression',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'ngtTime\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0.0',inputType:'expression',id:'column52',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'offDayAllowTime\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0.0',inputType:'expression',id:'column82',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'offDayExtdTime\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0.0',inputType:'expression',id:'column49',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'paidLeave\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',id:'column37',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'unpaidLeave\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',id:'column70',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'foodDay\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',id:'column67',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'allNightDay\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',id:'column61',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'overtime40\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0.0',inputType:'expression',id:'column58',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'annualDay\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0.00',inputType:'expression',id:'column55',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column73',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column79',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spn_totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'N',btnRowDelYn:'N',style:'',btnCancelObj:'btn_cancel',gridID:'gr_InIntendInformation'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{tagname:'ol',style:'',id:'',class:'info-list'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'수정본내역이 없을 경우 원본기준으로 최초 저장이 가능합니다.',class:''}}]},{T:1,N:'xf:group',A:{tagname:'li',style:'',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'수정본으로 조회 후 엑셀업로드 및 데이터 수정이 가능합니다.',class:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수정본 기준으로 인사시스템에 최종자료가 전송됩니다.',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정처리된 내역은 수정이 불가합니다.',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{id:'',class:'sub_contents'},E:[{T:1,N:'xf:group',A:{tagname:'ul',style:'',id:'',class:'info-list'},E:[{T:1,N:'xf:group',A:{style:'',id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'',class:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'* 확정취소는 HR담당자만 가능합니다.',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'* 원본은 작업일자, 수정본은 작업년월을 기준으로 조회됩니다.',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',class:'btn',userAuth:'U','ev:onclick':'scwin.btn_save_onclick',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_confirm',style:'',userAuth:'U',disabled:'true','ev:onclick':'scwin.btn_confirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'true',id:'btn_confirmCancel',style:'',userAuth:'U','ev:onclick':'scwin.btn_confirmCancel_onclick',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확정취소'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:''},E:[{T:1,N:'w2:gridView',A:{'ev:oncellclick':'scwin.gr_InIntendInformation_oncellclick',fixedColumnNoMove:'true',readOnlyTabIgnore:'true',scrollByColumnAdaptive:'false',editModeEvent:'onclick',scrollByColumn:'false',focusFlow:'linear',columnMoveWithFooter:'true','ev:onfilereadend':'scwin.gr_excel_onfilereadend',checkReadOnlyOnPasteEnable:'',rowStatusVisible:'true',visibleRowNumFix:'true',fixedColumn:'4',dataList:'data:ds_upSellPlan',style:'display:none;',autoFit:'none',id:'gr_excel',visibleRowNum:'13',class:'wq_gvw','ev:onbodymouseover':'scwin.gr_InIntendInformation_onbodymouseover'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'column12',value:'사원번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'column11',value:'사원명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',value:'부서',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',id:'column9',value:'직급',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column21',value:'총일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column19',value:'주휴일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'유휴일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'정근일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column15',value:'실근무시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column50',value:'연근시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column44',value:'연장시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column38',value:'야간시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column80',value:'휴일근무시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column32',value:'휴일연장시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'유급휴가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column68',value:'무급휴일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column65',value:'식대발생일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'철야일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column56',value:'40초과연장시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'연차일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column71',value:'확정여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column77',value:'작업년월',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',readOnly:'true',id:'staffNo',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'link',readOnly:'true',id:'staffNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',readOnly:'true',id:'deptNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',readOnly:'true',id:'occpgrdNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'110',excelCellType:'number',displayFormat:'#,##0',inputType:'text',id:'totDay',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'110',excelCellType:'number',displayFormat:'#,##0',inputType:'text',id:'day1',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'120',excelCellType:'number',displayFormat:'#,##0',inputType:'text',id:'day2',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'120',excelCellType:'number',displayFormat:'#,##0',inputType:'text',id:'day3',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'float',width:'110',displayFormat:'#,##0.0',excelCellType:'number',inputType:'text',id:'workTime',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'float',width:'100',displayFormat:'#,##0.0',excelCellType:'number',inputType:'text',id:'ecsWorkTime',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'float',width:'120',displayFormat:'#,##0.0',excelCellType:'number',inputType:'text',id:'extdTime',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'float',width:'70',displayFormat:'#,##0.0',excelCellType:'number',inputType:'text',id:'ngtTime',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'float',width:'120',displayFormat:'#,##0.0',excelCellType:'number',inputType:'text',id:'offDayAllowTime',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'float',width:'70',displayFormat:'#,##0.0',excelCellType:'number',inputType:'text',id:'offDayExtdTime',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',excelCellType:'number',displayFormat:'#,##0',inputType:'text',id:'paidLeave',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',excelCellType:'number',displayFormat:'#,##0',inputType:'text',id:'unpaidLeave',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',excelCellType:'number',displayFormat:'#,##0',inputType:'text',id:'foodDay',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',excelCellType:'number',displayFormat:'#,###',inputType:'text',id:'allNightDay',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'float',width:'70',displayFormat:'#,##0.0',excelCellType:'number',inputType:'text',id:'overtime40',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'float',width:'70',displayFormat:'#,##0.00',excelCellType:'number',inputType:'text',id:'annualDay',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'confirmYn',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'closeYm',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column31',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'totDay\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'day1\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',id:'column43',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'day2\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'day3\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',id:'column34',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'workTime\')',textAlign:'right',dataType:'float',width:'110',displayFormat:'#,##0.0',inputType:'expression',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'ecsWorkTime\')',textAlign:'right',dataType:'float',width:'110',displayFormat:'#,##0.0',inputType:'expression',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'extdTime\')',textAlign:'right',dataType:'float',width:'120',displayFormat:'#,##0.0',inputType:'expression',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'ngtTime\')',textAlign:'right',dataType:'float',width:'100',displayFormat:'#,##0.0',inputType:'expression',id:'column52',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'offDayAllowTime\')',textAlign:'right',dataType:'float',width:'70',displayFormat:'#,##0.0',inputType:'expression',id:'column82',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'offDayExtdTime\')',textAlign:'right',dataType:'float',width:'70',displayFormat:'#,##0.0',inputType:'expression',id:'column49',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'paidLeave\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',id:'column37',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'unpaidLeave\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',id:'column70',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'foodDay\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',id:'column67',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'allNightDay\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,###',inputType:'expression',id:'column61',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'overtime40\')',textAlign:'right',dataType:'float',width:'70',displayFormat:'#,##0.0',inputType:'expression',id:'column58',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'annualDay\')',textAlign:'right',dataType:'float',width:'70',displayFormat:'#,##0.00',inputType:'expression',id:'column55',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column73',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column79',displayMode:'label'}}]}]}]}]}]}]}]}]}]})