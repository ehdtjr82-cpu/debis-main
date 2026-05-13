/*amd /ui/ac/fm/fundemployenterprise/fundemployent/fm_204_01_03b.xml 42620 8fcead7ffe3af357501b713f52f3305cba16c00326df93f8a1c9a9632642c4f9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'borrClntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'borrNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'flag',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'borrAcctCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rPayDateStDt',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rPayDateEndDt',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rpayDt',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_master_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'borrClntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'corRegCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rpayDt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salPayClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'code1',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rpayAmt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'code2',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'intAmt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrAmt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumRpayAmt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preRpayAmt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisRpayAmt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdYm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrNo',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrDt',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrAcctCd',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrSlipNo',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrSlipDt',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstRpayDt',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lastRpayDt',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'intRt',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstIntDt',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'callableRpayDt',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certfNo',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lastIntDt',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptBankbookNo',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrRamt',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrSeq',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDtCls',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDtChk',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msg',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtn',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befRpayDt',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'name42',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fm.fundemployenterprise.fundemployent.RetrieveBorrowRepayContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"} ',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fm.fundemployenterprise.fundemployent.SaveBorrowRepayContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_processBorrow',action:'/ac.fm.fundemployenterprise.fundemployent.ProcessBorrowRepaySlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_processBorrow_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancelBorrow',action:'/ac.fm.fundemployenterprise.fundemployent.CancelBorrowRepaySlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_cancelBorrow_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_createBorrow',action:'/ac.fm.fundemployenterprise.fundemployent.CreateBorrowRepayContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_createBorrow_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.sysAdminYn = scwin.login.sysAdminYn;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vCoCd = scwin.login.coCd;
scwin.vCoClsCd = scwin.login.coClsCd;
scwin.vAcctDeptCd = scwin.login.acctDeptCd;
scwin.isSubCompany = false;
scwin.check_select = true; // 전표종류  false일 경우는 재조회 및 엑셀파일 재 Import하여야 함.

scwin.onpageload = function () {};
scwin.onUdcCompleted = async function () {
  let today = $c.date.getServerDateTime($p);
  let closeYm = today.substring(0, 6);
  let lastDD = $c.date.getLastDateOfMonth($p, closeYm);
  ed_rPayDateStDt.setValue(closeYm + "01");
  ed_rPayDateEndDt.setValue(closeYm + lastDD);
  ica_rpayDt.setValue(closeYm + "25");
  $c.gus.cfDisableObjects($p, [btn_Save, btn_Process, btn_Cancel]);
};

// 조회
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_rPayDateStDt, ed_rPayDateEndDt]))) {
    return true;
  }
  if (ed_rPayDateStDt.getValue() == "" || ed_rPayDateEndDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "일자는 필수 입력 항목입니다.");
    return;
  }

  // if (!cfIsAfterDate(ed_rPayDateStDt.text.trim(), ed_rPayDateEndDt.text.trim())) {
  //     cfAlertMsg(MSG_CM_ERR_039); 
  //     ed_rPayDateStDt.Focus();
  //     return false;
  // }

  if (!$c.gus.cfIsNull($p, ed_rPayDateStDt.getValue()) && !$c.gus.cfIsNull($p, ed_rPayDateEndDt.getValue())) {
    if (WebSquare.date.dateDiff(ed_rPayDateStDt.getValue(), ed_rPayDateEndDt.getValue()) < 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      ed_rPayDateStDt.focus();
      return false;
    }
  }
  dma_search.set("flag", acb_flag.getValue());
  dma_search.set("borrAcctCd", acb_borrAcctCd.getValue());
  dma_search.set("rpayDt", ica_rpayDt.getValue());
  $c.sbm.execute($p, sbm_search);
};

// 저장시
scwin.f_Save = async function () {
  //	필수입력사항 확인
  if (!$c.gus.cfValidate($p, [gr_master])) {
    return;
  }

  //	변경된 사항이 있는지 확인.
  if (ds_master.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getRowStatus(i) != "D" && ds_master.getRowStatus(i) != "R") {
      // 					if ( ds_master.NameValue(i,"rpayDt") == null || ds_master.NameValue(i,"rpayDt") == "" ) {
      // 						await $c.win.alert((i + 1)+"번째열에 지급일자를 입력하십시오");
      // 						return false;
      // 					}

      if (ds_master.getCellData(i, "thisRpayAmt") <= 0) {
        await $c.win.alert($p, i + 1 + "번째열에 금액이 0은 입력할수 없습니다.");
        return false;
      }
      if (ds_master.getCellData(i, "borrSeq") != "1") {
        //최초상환이 아닐 경우 잔액 체크
        if (Number(ds_master.getCellData(i, "thisRpayAmt")) > Number(ds_master.getCellData(i, "preRpayAmt"))) {
          await $c.win.alert($p, i + 1 + "번째열에 잔액이 상환원금보다 적을 수 없습니다.");
          return false;
        }
      }
      if (ds_master.getCellData(i, "dueDtChk") == "Y") {
        //만기상환년월 일경우
        if (!(ds_master.getCellData(i, "thisRpayAmt") == ds_master.getCellData(i, "preRpayAmt"))) {
          await $c.win.alert($p, i + 1 + "번째열 만기상환일입니다. 상환액이 전월잔액보다 적을 수 없습니다.");
          return false;
        }
      }
      if (!(ds_master.getCellData(i, "slipNo") == null || ds_master.getCellData(i, "slipNo") == "")) {
        await $c.win.alert($p, i + 1 + "번째열은 이미 전표처리된 내역입니다.");
        return false;
      }
    }
  }
  if (await $c.win.confirm($p, "저장하시겠습니까?")) {
    $c.sbm.execute($p, sbm_save);
  }
};

// 전표처리
scwin.f_SlipProcess = async function () {
  if (ds_master.getRowCount() <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("대출상환등록"));
    return false;
  }
  let stop = true;
  //그리드 check
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "chk") == "T") {
      stop = false;
    }
  }
  if (stop) {
    await $c.win.alert($p, "전표처리할 내역을 선택하십시오");
    return false;
  }
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getRowStatus(i) != "D" && ds_master.getRowStatus(i) != "R") {
      if (ds_master.getCellData(i, "chk") == "T") {
        if (!(ds_master.getCellData(i, "slipNo") == null || ds_master.getCellData(i, "slipNo") == "")) {
          await $c.win.alert($p, i + 1 + "번째열은 이미 전표처리된 내역입니다.");
          return false;
        }

        // 					if ( ds_master.NameValue(i,"rpayDt") == null || ds_master.NameValue(i,"rpayDt") == "" ) {
        // 						await $c.win.alert((i + 1) + "번째열에 지급일자를 입력하십시오");
        // 						return false;
        // 					}

        if (ds_master.getCellData(i, "thisRpayAmt") <= 0) {
          await $c.win.alert($p, i + 1 + "번째열에 금액이 0은 입력할수 없습니다.");
          return false;
        }
        if (ds_master.getCellData(i, "borrSeq") != "1") {
          //최초상환이 아닐 경우 잔액 체크
          if (Number(ds_master.getCellData(i, "thisRpayAmt")) > Number(ds_master.getCellData(i, "preRpayAmt"))) {
            await $c.win.alert($p, i + 1 + "번째열에 잔액이 상환원금보다 적을 수 없습니다.");
            return false;
          }
        }
        if (ds_master.getCellData(i, "dueDtChk") == "Y") {
          //만기상환년월 일경우
          if (!(ds_master.getCellData(i, "thisRpayAmt") == ds_master.getCellData(i, "preRpayAmt"))) {
            await $c.win.alert($p, i + "번째열에 만기상환일입니다. 상환액이 전월잔액보다 적을 수 없습니다.");
            return false;
          }
        }
      }
    }
  }
  if (!$c.gus.cfValidate($p, [gr_master])) {
    return false;
  }
  if (!(await $c.win.confirm($p, "전표를 처리하시겠습니까?"))) {
    return false;
  }
  $c.sbm.execute($p, sbm_processBorrow);
};

// 전표취소
scwin.f_SlipCancel = async function () {
  if (ds_master.getRowCount() <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("대출상환등록"));
    return false;
  }
  let stop = true;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "chk") == "T") {
      stop = false;
      if (ds_master.getCellData(i, "slipNo") == null || ds_master.getCellData(i, "slipNo") == "") {
        await $c.win.alert($p, i + 1 + "번째열은 전표처리가 안된내역입니다.");
        return false;
      }
    }
  }
  if (stop) {
    await $c.win.alert($p, "전표취소할 자료를 선택하십시오");
    return false;
  }
  if ((await $c.win.confirm($p, "전표를 취소하시겠습니까?")) == true) {
    $c.sbm.execute($p, sbm_cancelBorrow);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sFlag) {
  let name;
  let code = txtCode.getValue();
  if (txtName == null) {
    name = "";
  } else {
    name = txtName.getValue();
  }
  switch (select_code) {
    // 조회조건 대출거래처  PopUp 호출
    case '1':
      ed_empNo.setValue("");
      sCmdName = "retrieveClntList2";
      rtnList = udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc, code, name, sFlag, null, null, null, null, ",,,025", null, null, null, null); // 대출거래처
      break;
    // 대출번호 PopUp 호출
    case '2':
      sCmdName = "retrieveBorrNoInfo";
      rtnList = udc_borrNo.cfCommonPopUp(scwin.udc_borrNo_callBackFunc, code, name, sFlag, null, null, null, null, null, null, null, null, null); // 대출번호
      break;
  }
};
scwin.udc_clntNo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_borrClntNo.setValue(rtnList[0]); // 코드
    ed_borrClntNm.setValue(rtnList[1]); // 코드명
    ed_borrClntNo.options.hidVal = rtnList[0]; // 코드
    ed_empNo.setValue(rtnList[4]);
    ; // 코드
  } else {
    ed_borrClntNo.setValue(""); // 코드
    ed_borrClntNm.setValue(""); // 코드명
    ed_borrClntNo.options.hidVal = ""; // 코드
    ed_empNo.value.setValue(""); // 코드
  }
};
scwin.udc_borrNo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_borrNo.setValue(rtnList[0]); // 코드
  } else {
    ed_borrNo.setValue(""); // 코드
  }
};

// 생성
scwin.f_Create = async function () {
  let chkConfirm = "";
  let borrAcctCd = acb_borrAcctCd.getValue();
  let rpayDt = ica_rpayDt.getValue().substring(0, 4) + "년" + ica_rpayDt.getValue().substring(4, 6) + "월" + ica_rpayDt.getValue().substring(6, 8) + "일";
  if (borrAcctCd == "1") {
    chkConfirm = "사무직 " + rpayDt + " 자료를 생성 하시겠습니까?";
  } else if (borrAcctCd == "2") {
    chkConfirm = "기능직 " + rpayDt + " 자료를 생성 하시겠습니까?";
  } else {
    await $c.win.alert($p, "계정구분 선택은 필수입니다.");
    acb_borrAcctCd.focus();
    return;
  }
  if (ica_rpayDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "지급일자는 필수 입력 항목입니다.");
    ica_rpayDt.focus();
    return;
  }
  if ((await $c.win.confirm($p, chkConfirm)) == true) {
    dma_search.set("flag", acb_flag.getValue());
    dma_search.set("borrAcctCd", acb_borrAcctCd.getValue());
    dma_search.set("rpayDt", ica_rpayDt.getValue());
    $c.sbm.execute($p, sbm_createBorrow);
  }
};

// 조회조건 구분값 변경에 따라 버튼 제어
scwin.f_ChgFlag = function () {
  let _flag = acb_flag.getValue();
  if (ds_master.getRowCount() > 0) {
    if (_flag == "1") {
      //정리
      $c.gus.cfDisableObjects($p, [btn_Save, btn_Process]);
      $c.gus.cfEnableObjects($p, [btn_Cancel]);
    } else if (_flag == "0") {
      //미정리
      $c.gus.cfEnableObjects($p, [btn_Save, btn_Process]);
      $c.gus.cfDisableObjects($p, [btn_Cancel]);
    } else {
      //전체
      $c.gus.cfEnableObjects($p, [btn_Save, btn_Process, btn_Cancel]);
    }
  } else {
    $c.gus.cfDisableObjects($p, [btn_Save, btn_Process, btn_Cancel]);
  }
};

// 엑셀 Download
scwin.f_Excel = async function () {
  if (ds_master.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let options = {
    fileName: "대출상환 내역",
    // + ".xls",
    sheetName: "대출상환 내역",
    type: 1,
    headerColor: "#eeeeee",
    //"#E8E8E8", //연한회색 #33CCCC
    startRowIndex: 3
  };
  //그리드에 대한 내용을 추가 옵션
  let infoArr = [
  //제목
  {
    // rowIndex: 0               //제목을 표시할 행 index
    // , colIndex: 0               //제목을 표시할 열 index
    // , text: "대출상환 내역"          //표시할 내용(제목)
    // , textAlign: "center"       //표시할 내용의 정렬 방법(left, center, right)
    // , fontSize: "18px"          //폰트 size
    // , fontName: "돋움체"        //폰트이름 
    // , drawBorder: false         //cell의 border 지정(true, false)
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 14,
    text: "대출상환 내역",
    textAlign: "center",
    fontSize: 15,
    drawBorder: false
  }];
  $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_borrClntNo, ed_borrClntNm, 'F');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_openPopUp('1', ed_borrClntNo, ed_borrClntNm, 'F');
};
scwin.udc_clntNo_onblurNameEvent = function (e) {
  // scwin.f_openPopUp('1',ed_srchBorrClntNo,ed_srchClntNm,'F');
};
scwin.udc_borrNo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_borrNo, null, 'F');
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_processBorrow_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_createBorrow_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_cancelBorrow_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_search_submitdone = async function (e) {
  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  let rowCnt = ds_master.getRowCount();
  ed_totalRow.setValue(rowCnt.toString());
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
  scwin.f_ChgFlag();
  // 저장가능상태로 Flag변경함.
  scwin.check_select = true;
};
scwin.ds_master_oncelldatachange = function (info) {
  let rowIndex = info.rowIndex;
  let colId = info.colID;
  if (ds_master.getCellData(rowIndex, "slipNo") == "") {
    if (colId == "rpayDt") {
      let borrAmt = ds_master.getCellData(rowIndex, "borrAmt"); // 대출금액
      let rpaytDt = ds_master.getCellData(rowIndex, "rpayDt"); //상환일
      let befRpayDt = ds_master.getCellData(rowIndex, "befRpayDt"); //직전상환일
      let borrDt = ds_master.getCellData(rowIndex, "borrDt"); //대출시작일
      let preRpayAmt = ds_master.getCellData(rowIndex, "preRpayAmt"); //전월잔액
      let intAmt = 0; //이자

      //이자계산 
      if (ds_master.getCellData(rowIndex, "borrSeq") == 1) {
        //1회차일때
        intAmt = Math.round(borrAmt * (Number(ds_master.getCellData(rowIndex, "intRt")) / 100) * WebSquare.date.dateDiff(borrDt, rpaytDt) / 365);
      } else {
        //2회차부터
        intAmt = Math.round(preRpayAmt * (Number(ds_master.getCellData(rowIndex, "intRt")) / 100) * WebSquare.date.dateDiff(befRpayDt, rpaytDt) / 365);
      }
      ds_master.setCellData(rowIndex, "intAmt", intAmt);
    }
  }
};
scwin.gr_master_oncellclick = function (row, columnIndex, colid) {
  // 전표번호클릭시 
  let _slipNo = ds_master.getCellData(row, "slipNo");
  if (colid == "slipNo" && _slipNo != "") {
    $c.gus.cfShowSlipInfo($p, _slipNo);
    return;
  }
  switch (colid) {
    case "thisRpayAmt": //상환금액
    case "rpayDt": //지급일자
    case "intAmt":
      //이자금액
      if (_slipNo == "" || _slipNo == null) {
        gr_master.setReadOnly("cell", row, colid, false);
      } else {
        gr_master.setReadOnly("cell", row, colid, true);
      }
      break;
  }
};
scwin.gr_master_onafteredit = function (rowIndex, columnIndex, value) {
  const colid = gr_master.getColumnID(columnIndex);
  switch (colid) {
    case "thisRpayAmt": //상환금액
    case "rpayDt": //지급일자
    case "intAmt":
      //이자금액
      if (value == "" || isNaN(value)) {
        ds_master.setCellData(rowIndex, colid, "0");
      }
      break;
  }
};
scwin.btn_clear_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1);
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_Process_onclick = function (e) {
  scwin.f_SlipProcess();
};
scwin.btn_Cancel_onclick = function (e) {
  scwin.f_SlipCancel();
};
scwin.btn_Creat_onclick = function (e) {
  scwin.f_Create();
};
scwin.sumCustomFormat = function (data, formattedData, rowIndex, colIndex) {
  let value = Number(ds_master.getCellData(rowIndex, "thisRpayAmt")) + Number(ds_master.getCellData(rowIndex, "intAmt"));
  return $c.num.formatNumber($p, value);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveClntList2popup',style:'',selectID:'retrieveClntList2',id:'udc_clntNo',nameId:'ed_borrClntNm',codeId:'ed_borrClntNo',btnId:'btn_clntNo',maxlengthCode:'6',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',allowCharCode:'0-9',refDataCollection:'dma_search',code:'borrClntNo','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',codeWidth:'60'}},{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_empNo',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대출번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveBorrNoInfopopup',style:'',selectID:'retrieveBorrNoInfo',id:'udc_borrNo',nameId:'',codeId:'ed_borrNo',btnId:'btn_borrNo',maxlengthCode:'6',objTypeCode:'data',allowCharCode:'0-9',refDataCollection:'dma_search',code:'borrNo',hideName:'true','ev:onclickEvent':'scwin.udc_borrNo_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',codeWidth:'60'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_borrAcctCd',style:'width: 170px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기대여금-일반(사무직)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기대여금-기타(기능직)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상환일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'rPayDateStDt',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar3',refEdDt:'rPayDateEndDt',edFromId:'ed_rPayDateStDt',edToId:'ed_rPayDateEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_flag',style:'width: 110px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미정리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_master',gridDownFn:'scwin.f_Excel',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'cell',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'12',visibleRowNumFix:'true',fixedColumn:'5',rowStatusVisible:'true',fixedColumnNoMove:'true','ev:oncellclick':'scwin.gr_master_oncellclick',rowStatusWidth:'20',columnMoveWithFooter:'true','ev:onafteredit':'scwin.gr_master_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'checkbox',style:'',value:'',width:'30',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'거래처번호',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'법인코드',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'사번',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'성명',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'30'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'',width:'30'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'',width:'30'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'',width:'30'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column55',value:'지급일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column49',value:'급여구분',displayMode:'label',class:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column82',value:'대출상환액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column79',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column76',value:'대출이자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column73',value:'대출금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column70',value:'누적상환액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column67',value:'전월잔액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column64',value:'당월상환액',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column58',value:'대출이자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column61',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column106',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column103',value:'대출순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column100',value:'만기기간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column97',value:'만기기간체크',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column94',value:'직전상환일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column85',value:'대출시작일',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'30',fixColumnWidth:'true',readOnly:'false',valueType:'other',trueValue:'T',falseValue:'F'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrClntNo',inputType:'text',style:'',value:'',width:'110',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'corRegCd',inputType:'text',style:'',value:'',width:'90',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empNo',inputType:'text',style:'',value:'',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empNm',inputType:'text',style:'',value:'',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empty1',inputType:'text',style:'',value:'',width:'30',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empty2',inputType:'text',style:'',value:'',width:'30',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empty3',inputType:'text',style:'',value:'',width:'30',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empty4',inputType:'text',style:'',value:'',width:'30',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'rpayDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'salPayClsCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'code1',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rpayAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'code2',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'intAmt2',value:'',displayMode:'label',textAlign:'right',hidden:'true',readOnly:'true',displayFormat:'#,###',dataType:'number',expression:'datalist(\'intAmt\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'borrAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sumRpayAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'preRpayAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'thisRpayAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',class:'',allowChar:'0-9',maxLength:'13',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'intAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',readOnly:'true',textAlign:'right',class:'',allowChar:'0-9',maxLength:'13',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'sumAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',readOnly:'true',textAlign:'right',excelCellType:'number',expression:'Number(datalist(\'thisRpayAmt\'))+Number(datalist(\'intAmt\'))'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',style:'',id:'slipNo',value:'',displayMode:'label',readOnly:'true',class:'linktype'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'borrSeq',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'dueDtCls',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'dueDtChk',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'befRpayDt',value:'',displayMode:'label',hidden:'true',readOnly:'true',dataType:'date'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'borrDt',value:'',displayMode:'label',hidden:'true',readOnly:'true',dataType:'date'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'30',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'30',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'30',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'30',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'30',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column84',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'rpayAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column78',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'intAmt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column75',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'borrAmt\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column72',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'sumRpayAmt\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column69',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'preRpayAmt\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column66',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'thisRpayAmt\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column60',value:'0',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'sum(\'intAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column63',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'sum(\'thisRpayAmt\')+sum(\'intAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column108',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column102',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn  white',id:'btn_Process',style:'',type:'button','ev:onclick':'scwin.btn_Process_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표처리'}]}]},{T:1,N:'xf:trigger',A:{class:'btn  white',id:'btn_Cancel',style:'',type:'button','ev:onclick':'scwin.btn_Cancel_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표취소'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'지급일자',class:'req'}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_rpayDt',class:'',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Creat',style:'',type:'button','ev:onclick':'scwin.btn_Creat_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]}]}]}]}]}]}]}]})