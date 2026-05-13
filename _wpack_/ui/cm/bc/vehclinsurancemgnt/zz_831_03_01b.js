/*amd /ui/cm/bc/vehclinsurancemgnt/zz_831_03_01b.xml 124475 9752a76ebeae8112f244cb46a99e18ebd5f017ef181d9c83c745f320ac01db88 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'chkNewDataYn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqApplyStdDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqApplyEndDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqVehclNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDrcrNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqWrkClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqPossessCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqApprvStsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqIndDistrDrvNm',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ElectronicApprvList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chkBox',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'차량보험관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'applyDt',name:'신청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkClsCd',name:'작업;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkClsNm',name:'작업;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptCd',name:'지사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptNm',name:'지사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'possessCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'possessNm',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrNo',name:'차대번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclTypeCd',name:'차량형식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclTypeNm',name:'차량형식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxPayloadCd',name:'최대;적재량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxPayloadNm',name:'최대;적재량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'releaseYear',name:'차량;년식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileRegYn',name:'첨부;파일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carInsuranceYearStdDt',name:'시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carInsuranceYearEndDt',name:'종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'objectLimitCd',name:'대물한도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'objectLimitNm',name:'대물한도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'driverAge2',name:'운전자;연령',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfVehclYn2',name:'자차;가입여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sfdmgVehclYn2',name:'자손;가입여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'specialContractList1',name:'특약사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'luggageInsuranceYearStdDt',name:'시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'luggageInsuranceYearEndDt',name:'종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'guaranteeLimitCd',name:'보상;한도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'guaranteeLimitNm',name:'보상;한도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'glassYn2',name:'유리;가입여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frizYn2',name:'냉동;가입여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'specialContractList2',name:'특약사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indDistrWrkClsCd',name:'산재작업구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indDistrWrkClsNm',name:'산재;작업구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indDistrStdDt',name:'입직일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indDistrEndDt',name:'이직/;적용제외일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'umbrellaPolicyYn2',name:'기업포괄;가입여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'specialContractList',name:'특약사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgWrkCd',name:'변경내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgWrkNm',name:'변경내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pastData',name:'변경전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currentData',name:'변경후',dataType:'text'}},{T:1,N:'w2:column',A:{id:'changeDataDetail',name:'변경전후데이터',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cancelCd',name:'해지;사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cancelNm',name:'해지사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재;요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재;진행상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsNm',name:'결재;진행상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNm',name:'결재자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileClsCd',name:'name51',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkSeq',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSeq',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'frmReqApprove'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprvDocKndCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqUserId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'epUserId',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvTitle',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDtlInfo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntNoInfoList',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkSeqInfoList',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifylines',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifybody',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifyattach',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'target',name:'name11',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_create',action:'/cm.bc.vehclinsurancemgnt.cmd.CreateAttachFil2CMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"fileUploadGDS","key":"IN_DS1"},{"id":"ds_ElectronicApprvList","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_create_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_search',action:'/cm.bc.vehclinsurancemgnt.cmd.RetrieveElectronicApprvListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_ElectronicApprvList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ElectronicApprvList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_frmReqApprove',action:'/cm.bc.vehclinsurancemgnt.cmd.RequestVehclInsuranceApproveInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"frmReqApprove","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_frmReqApprove_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 차량보험전자결재관리
 * 메뉴경로 : 공통/차량보험관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/vehclinsurancemgnt/zz_831_03_01b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-10
 * 수정이력  :
 *    - 2025-12-10      정승혜    최초작성
 *    - 2026-01-26      정승혜    zz_831_01_01b 처리
 *    - 2026-03-03      정승혜    기타수정
 * 메모 : 20100101/대기 조회
 * 해야할리스트 : 
 * 
 */
scwin.sDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strFromDate = scwin.sDate.substring(0, 6) + "01";
scwin.strToDate = scwin.sDate.substring(0, 6) + new Date(scwin.sDate.substring(0, 4), scwin.sDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId; // 사원ID   
scwin.epId = scwin.memJson.epId; // 다이렉트 아이디   

// 전자결재 관련 환경 설정
scwin.vUserId = scwin.userId;
scwin.vEpUserId = scwin.epId;
scwin.epSlipKndCd = "";
scwin.sEmpNo = scwin.memJson.empNo; //사원번호

// 파일 업로드 위치
// String systemPathKey =  DFWConstants.FILE_UPLOAD_SYSTEM_PATH ;
scwin.systemPathVal = "FI" + "/vehclinsurancemgnt/";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // getCodeList
  const codeOptions = [{
    grpCd: "ZZ831",
    compID: "lc_reqWrkClsCd"
  }, {
    grpCd: "ZZ832",
    compID: "lc_reqPossessCd"
  }, {
    grpCd: "ZZ021",
    compID: "lc_reqApprvStsCd"
  }, {
    grpCd: "ZZ838",
    compID: "lc_fileClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_HeaderCreate();
};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  const param = [{
    method: "getLuxeComboDataNoSort",
    param1: "VehclInsuranceMgntEBC",
    param2: "retriveLobranCodeList",
    compID: "lc_reqDeptCd"
  }];
  $c.data.setGauceUtil($p, param);
  ed_reqApplyStdDt.setValue(scwin.strFromDate);
  ed_reqApplyEndDt.setValue(scwin.strToDate);
  rd_chkNewDataYn.setValue("02");
};

//-------------------------------------------------------------------------
// 조회조건헤더생성
//-------------------------------------------------------------------------
scwin.f_HeaderCreate = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ed_reqApplyStdDt.getValue() == "" || ed_reqApplyEndDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["신청일자"]);
    ed_reqApplyStdDt.focus();
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_reqApplyStdDt.getValue(), ed_reqApplyEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  $c.sbm.execute($p, sbm_tr_search);
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, table1, [rd_chkNewDataYn]);
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
// 엑셀다운 4+8+16
scwin.f_GridToExcel = async function () {
  if (ds_ElectronicApprvList.getRowCount() <= 0) {
    await $c.win.alert($p, "전자결재관리 내역이 존재하지않습니다.");
    return false;
  }
  let sheetTitle = "전자결재관리";
  $c.data.downloadGridViewExcel($p, gr_ElectronicApprvList, {
    fileName: sheetTitle + ".xlsx",
    sheetName: sheetTitle
  });
};

//-------------------------------------------------------------------------
// 전자결재 요청 : 결재 내역 생성 후 전자결재 처리
//-------------------------------------------------------------------------
scwin.f_ElectricApprove = async function () {
  if (ds_ElectronicApprvList.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "전자결재 상신할 사항이 없습니다.");
    return;
  }
  if (apprvTitle.getValue == '') {
    await $c.win.alert($p, "전자결재요청제목 을 입력 해야 합니다.");
    apprvTitle.focus();
    return;
  }

  //2024.08.27 결재제목 체크로직 추가 
  let vReqApprvTitle = apprvTitle.getValue();
  if (vReqApprvTitle.indexOf("&") >= 0) {
    //특수문자 &입력 시 오류가 발생함에 따라 상신 전 제목 체크
    await $c.win.alert($p, "제목에 특수문자 &를 입력할 수 없습니다.\n수정 후 다시 결재 요청 하시길 바랍니다.");
    apprvTitle.focus();
    return false;
  }
  if (vReqApprvTitle.trim() != "") {
    let gByte = 0;
    for (let i = 0; i < vReqApprvTitle.length; ++i) {
      // 기본 한글 2바이트 처리
      vReqApprvTitle.charCodeAt(i) > 127 ? gByte += 2 : gByte++;
    }
    if (gByte > 80) {
      await $c.win.alert($p, "전표결재요청제목이 80byte를 초과합니다. 제목을 줄여주세요.");
      apprvTitle.focus();
      return false;
    }
  }
  let chkCountk = 0;
  let chkRenewal = 0;
  for (i = 0; i < ds_ElectronicApprvList.getRowCount(); i++) {
    if (ds_ElectronicApprvList.getCellData(i, "chkBox") == "T") {
      chkCountk++;
    }
    if (ds_ElectronicApprvList.getCellData(i, "wrkClsCd") == "04") {
      chkRenewal++;
    }
  }
  if (chkRenewal == 0) {
    if (chkCountk > 10) {
      await $c.win.alert($p, "10건 이상의 데이터는 10건 까지만 전자결재 화면에 표시가 됩니다.\n\n" + "그 이외의 건은 '총 전자결재 요청 건수' 에 포함이 됩니다.");
    }
  }
  if ((await $c.win.confirm($p, "선택하신 " + chkCountk + "건을 전자결재 상신 하시겠습니까?")) == true) {
    let countRow = ds_ElectronicApprvList.getRowCount();
    let apprvStsCd = "";
    let apprvCnt = 0;
    let vApprvTitle = "";
    if (apprvCnt > 1) {
      apprvCnt = apprvCnt - 1;
      vApprvTitle = vApprvTitle + " 외 " + apprvCnt + " 건";
    }
    scwin.f_RequestElectronicApprove();
  }
};

//-------------------------------------------------------------------------
// 전자결재요청 Tray Component에서 EP 사용자 ID가져오기
//-------------------------------------------------------------------------	

scwin.f_getSSOInfo = function () {
  // 호출되는곳 없음
};

//-------------------------------------------------------------------------
// 전자결재요청
//-------------------------------------------------------------------------
scwin.f_RequestElectronicApprove = async function () {
  try {
    let vReqApprvDocKndCd = "034"; // 결재문서종류 
    let vReqUserId = scwin.vUserId; // 결재요청자 ID
    let vEpUsrId = scwin.epId; // EP사용자 ID
    let chkWrkClsNm = '';
    for (t = 0; t < ds_ElectronicApprvList.getRowCount(); t++) {
      if (ds_ElectronicApprvList.getCellData(t, "chkBox") == 'T') {
        chkWrkClsNm = ds_ElectronicApprvList.getCellData(t, "wrkClsNm");
      }
    }
    let vReqApprvTitle = "차량보험관리(" + chkWrkClsNm + ")[" + apprvTitle.getValue() + "]"; //결재제목 

    //2024.08.27 결재제목 체크로직 추가 
    let gByte = 0;
    for (let i = 0; i < vReqApprvTitle.length; ++i) {
      // 기본 한글 2바이트 처리
      vReqApprvTitle.charCodeAt(i) > 127 ? gByte += 2 : gByte++;
    }
    if (gByte > 100) {
      await $c.win.alert($p, "전표결재요청제목이 100byte를 초과합니다. 제목을 줄여주세요\n\n" + vReqApprvTitle);
      apprvTitle.focus();
      return false;
    }
    if (scwin.vEpUserId == "") {}
    let fineInfo1 = scwin.f_getFineItemList1(); // 결재대상(차량관리번호)
    let fineInfo2 = scwin.f_getFineItemList2(); // 결재대상(순번)

    // 결재상세정보
    let vApprvDtlInfo = scwin.f_MakeHtml();
    frmReqApprove.set("apprvDocKndCd", vReqApprvDocKndCd); // 문서종류
    frmReqApprove.set("reqUserId", vReqUserId); // 결재요청자 ID
    frmReqApprove.set("epUserId", vEpUsrId); // EP사용자 ID
    frmReqApprove.set("apprvTitle", vReqApprvTitle); // 제목
    frmReqApprove.set("apprvDtlInfo", vApprvDtlInfo); // 결재본문내용
    frmReqApprove.set("mgntNoInfoList", fineInfo1); // 결재대상(차량관리번호)
    frmReqApprove.set("wrkSeqInfoList", fineInfo2); // 결재대상(순번)
    frmReqApprove.set("bmodifylines", "Y"); // 문서정보 변경 가능 여부
    frmReqApprove.set("bmodifybody", "Y"); // 문서 본문 수정 여부
    frmReqApprove.set("bmodifyattach", "Y"); // 상신시 첨부파일 수정 여부
    frmReqApprove.set("target", "test111.jsp");
    //$c.sbm.execute(sbm_frmReqApprove);

    let url = "/cm.bc.vehclinsurancemgnt.cmd.RequestVehclInsuranceApproveInfoCMD.do";
    let targetName = "aprvPopup"; // 고정 이름(재사용)

    let data = frmReqApprove.getJSON() || {};
    const form = document.createElement("form");
    form.method = "POST";
    form.action = url;
    form.target = targetName;

    // 팝업 차단 회피: 사용자 클릭 이벤트 안에서 실행되어야 함
    const win = window.open("", targetName); // about:blank 대신 빈 문자열로 재사용
    // 팝업이 막히면 win이 null일 수 있음
    if (!win) {
      // 여기서 그냥 location 이동하거나 alert 처리 등
      console.warn("Popup blocked");
    }
    Object.keys(data).forEach(key => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = (data[key] ?? "").toString();
      form.appendChild(input);
    });
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  } catch (e) {}
};

//-------------------------------------------------------------------------
// 전자결재를 위한 차량관리번호 목록을 리턴한다
//-------------------------------------------------------------------------
scwin.f_getFineItemList1 = function () {
  let itemList1 = "";
  for (i = 0; i < ds_ElectronicApprvList.getRowCount(); i++) {
    if (ds_ElectronicApprvList.getCellData(i, "chkBox") == 'T') {
      itemList1 += ds_ElectronicApprvList.getCellData(i, "mgntNo") + "_";
    }
  }
  return itemList1;
};

//-------------------------------------------------------------------------
// 전자결재를 위한 순번 목록을 리턴한다
//-------------------------------------------------------------------------
scwin.f_getFineItemList2 = function () {
  let itemList2 = "";
  for (i = 0; i < ds_ElectronicApprvList.getRowCount(); i++) {
    if (ds_ElectronicApprvList.getCellData(i, "chkBox") == 'T') {
      itemList2 += ds_ElectronicApprvList.getCellData(i, "wrkSeq") + "_";
    }
  }
  return itemList2;
};

//-------------------------------------------------------------------------
// 결재내용 생성(HTML)
//-------------------------------------------------------------------------	

scwin.f_MakeHtml = function () {
  let chkWrkClsCd = '';
  let chkWrkClsNm = '';
  let chkTrueCount = 0;
  for (let t = 0; t < ds_ElectronicApprvList.getRowCount(); t++) {
    if (ds_ElectronicApprvList.getCellData(t, "chkBox") == 'T') {
      chkWrkClsCd = ds_ElectronicApprvList.getCellData(t, "wrkClsCd");
      chkWrkClsNm = ds_ElectronicApprvList.getCellData(t, "wrkClsNm");
      chkTrueCount++;
    }
  }
  chkTrueCount = 0;
  chkWrkClsNm = '';
  for (let t = 0; t < ds_ElectronicApprvList.getRowCount(); t++) {
    if (ds_ElectronicApprvList.getCellData(t, "chkBox") == 'T') {
      chkTrueCount++;
      chkWrkClsNm = ds_ElectronicApprvList.getCellData(t, "wrkClsNm");
    }
  }
  let vApprvDtlInfo = "<table cellpadding='0' cellspacing='0' border='0' width='1100'>";
  vApprvDtlInfo += " <tr><td height='2px'></td></tr>";
  vApprvDtlInfo += " <tr valign='top' align='center'>";
  vApprvDtlInfo += "   <td>";
  vApprvDtlInfo += "     <table cellpadding='0' cellspacing='0' border='0' width='990'>";
  vApprvDtlInfo += "		<tr valign='middle'>";
  vApprvDtlInfo += "           <table width='100%'>                                                                                                                    ";
  vApprvDtlInfo += "               <tr>                                                                                                                                ";
  vApprvDtlInfo += "                   <td style='font-size: 15px; font-weight: bold; color: black; font-family: 돋움체;' align='left'><전자결재 요청 정보></td>                        ";
  vApprvDtlInfo += "                   <td align='right' style='padding: 0px 12px 0px 0px;font-size: 12px; vertical-align: bottom;' valign='bottom'></td>     ";
  vApprvDtlInfo += "               </tr>                                                                                                                               ";
  vApprvDtlInfo += "           </table>                                                                                                                                ";
  vApprvDtlInfo += "		</tr>";
  vApprvDtlInfo += "       <tr valign='top'>";
  vApprvDtlInfo += "           <table cellpadding='0' cellspacing='0' border='1' width='400' bordercolor='black' style='table-layout:fixed;border:2 solid black;border-collapse:collapse'>";
  vApprvDtlInfo += "             <col width='40%'>";
  vApprvDtlInfo += "             <col width='60%'>";
  vApprvDtlInfo += "             <tr height='30' valign='middle' >";
  vApprvDtlInfo += "					<td align=center style='padding:0 0 5px 23px;font-size:15px;font-weight:bold;color:black;font-family:돋움체;'>신청내용</td>";
  vApprvDtlInfo += "					<td align=center style='padding:0 0 5px 23px;font-size:15px;font-weight:bold;color:black;font-family:돋움체;'>총 전자결재 요청 건수</td>";
  vApprvDtlInfo += "             </tr>";
  vApprvDtlInfo += "             <tr height='30' align='left'>";
  vApprvDtlInfo += "					<td align=center style='padding:0 0 5px 23px;font-size:15px;font-weight:bold;color:black;font-family:돋움체;'>";
  vApprvDtlInfo += chkWrkClsNm;
  vApprvDtlInfo += "					</td>";
  vApprvDtlInfo += "					<td align=center style='padding:0 0 5px 23px;font-size:15px;font-weight:bold;color:black;font-family:돋움체;'>";
  vApprvDtlInfo += chkTrueCount + '건';
  vApprvDtlInfo += "					</td>";
  vApprvDtlInfo += "             </tr>";
  vApprvDtlInfo += "           </table>";
  vApprvDtlInfo += "       </tr>";
  vApprvDtlInfo += "     </table>";
  vApprvDtlInfo += "   </td>";
  vApprvDtlInfo += " </tr>";
  vApprvDtlInfo += " <br>";

  // 가입 및 해지의 경우	
  if (chkWrkClsCd == '01' || chkWrkClsCd == '05') {
    vApprvDtlInfo += " <tr><td height='120px'></td></tr>";
    vApprvDtlInfo += " <tr valign='top' align='center'>";
    vApprvDtlInfo += "   <td>";
    vApprvDtlInfo += "     <table cellpadding='0' cellspacing='0' border='0' width='1100'>";
    vApprvDtlInfo += "		<tr valign='middle'>";
    vApprvDtlInfo += "           <table width='100%'>                                                                                                                    ";
    vApprvDtlInfo += "               <tr>                                                                                                                                ";
    if (chkWrkClsCd == '01') {
      vApprvDtlInfo += "                   <td style='font-size: 15px; font-weight: bold; color: black; font-family: 돋움체;' align='left'><가입건 전자결재 요청정보 상세></td>                        ";
    } else if (chkWrkClsCd == '05') {
      vApprvDtlInfo += "                   <td style='font-size: 15px; font-weight: bold; color: black; font-family: 돋움체;' align='left'><해지건 전자결재 요청정보 상세></td>                        ";
    }
    vApprvDtlInfo += "                   <td align='right' style='padding: 0px 12px 0px 0px;font-size: 12px; vertical-align: bottom;' valign='bottom'></td>     ";
    vApprvDtlInfo += "               </tr>                                                                                                                               ";
    vApprvDtlInfo += "           </table>                                                                                                                                ";
    vApprvDtlInfo += "		</tr>";
    vApprvDtlInfo += "       <tr valign='middle'>";
    vApprvDtlInfo += "         <td background='http://ebiz.debis.co.kr/common/images/boxM890.gif' width='1100' style='padding:0 0 5px 10px' align= 'center'>";
    vApprvDtlInfo += "           <table cellpadding='0' cellspacing='0' border='1' bordercolor='black' width='1100' style='table-layout:fixed;border:2 solid black;border-collapse:collapse'>";
    vApprvDtlInfo += "             <col width='30'>"; // 순번
    vApprvDtlInfo += "             <col width='70'>"; // 신청일
    vApprvDtlInfo += "             <col width='80'>"; // 지사       
    vApprvDtlInfo += "             <col width='60'>"; // 소유구분
    vApprvDtlInfo += "             <col width='100'>"; // 차량번호
    vApprvDtlInfo += "             <col width='145'>"; // 차대번호
    vApprvDtlInfo += "             <col width='73'>"; // 시작일(자동차)
    vApprvDtlInfo += "             <col width='73'>"; // 종료일
    vApprvDtlInfo += "             <col width='70'>"; // 특약
    vApprvDtlInfo += "             <col width='73'>"; // 시작일(적재물)
    vApprvDtlInfo += "             <col width='73'>"; // 종료일
    vApprvDtlInfo += "             <col width='70'>"; // 특약
    vApprvDtlInfo += "             <col width='90'>"; // 산재작업구분(산재)
    vApprvDtlInfo += "             <col width='73'>"; // 입직일
    vApprvDtlInfo += "             <col width='73'>"; // 이직/적용제외일
    vApprvDtlInfo += "             <col width='60'>"; // 첨부파일

    if (chkWrkClsCd == '05') {
      vApprvDtlInfo += "             <col width='80'>"; // 비고
    }
    vApprvDtlInfo += "             <tr height='20' align='center'>";
    vApprvDtlInfo += "               <td colspan=6; style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 차량기본정보";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td colspan=3; style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 자동차보험";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td colspan=3; style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 적재물보험";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td colspan=3; style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 산재보험";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td rowspan=2; style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 첨부파일";
    vApprvDtlInfo += "               </td>";
    if (chkWrkClsCd == '05') {
      vApprvDtlInfo += "               <td rowspan=2 style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
      vApprvDtlInfo += "                 해지사유";
      vApprvDtlInfo += "               </td>";
    }
    vApprvDtlInfo += "             </tr>";
    vApprvDtlInfo += "             <tr height='30' align='center'>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 순번";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 신청일";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 지사";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 소유구분";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 차량번호";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 차대번호";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 시작일";
    vApprvDtlInfo += "               </td>";
    if (chkWrkClsCd == '01') {
      vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
      vApprvDtlInfo += "                 종료일";
      vApprvDtlInfo += "               </td>";
    } else if (chkWrkClsCd == '05') {
      vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
      vApprvDtlInfo += "                 해지일";
      vApprvDtlInfo += "               </td>";
    }
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 특약";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 시작일";
    vApprvDtlInfo += "               </td>";
    if (chkWrkClsCd == '01') {
      vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
      vApprvDtlInfo += "                 종료일";
      vApprvDtlInfo += "               </td>";
    } else if (chkWrkClsCd == '05') {
      vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
      vApprvDtlInfo += "                 해지일";
      vApprvDtlInfo += "               </td>";
    }
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 특약";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 산재작업구분";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 입직일";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 이직/적용제외일";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "             </tr>";
    let chkCount = 0;
    let chkFileRegYn = '';
    let chkApplyDt = '';
    let chkDeptCd = '';
    let chkVehclNo = '';
    let chkDrcrNo = '';
    for (let m = 0; m < ds_ElectronicApprvList.getRowCount(); m++) {
      // 데이터를 10개 까지만 표시를 해달라는 요구조건에 있었음
      if (chkCount < 10) {
        if (ds_ElectronicApprvList.getCellData(m, "chkBox") == 'T') {
          chkCount++;
          chkFileRegYn = ds_ElectronicApprvList.getCellData(m, "fileRegYn");
          chkApplyDt = ds_ElectronicApprvList.getCellData(m, "applyDt");
          chkDeptCd = ds_ElectronicApprvList.getCellData(m, "deptCd");
          chkVehclNo = ds_ElectronicApprvList.getCellData(m, "vehclNo");
          chkDrcrNo = ds_ElectronicApprvList.getCellData(m, "drcrNo");
          vApprvDtlInfo += "             <tr height='25' align='center'>";
          vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; //순번
          vApprvDtlInfo += chkCount;
          vApprvDtlInfo += "				</td>";
          vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; //신청일
          vApprvDtlInfo += $c.gus.cfGetFormatStr($p, ds_ElectronicApprvList.getCellData(m, "applyDt"), "####/##/##");
          vApprvDtlInfo += "     			</td>";
          vApprvDtlInfo += "      		<td style='font-size:13px;font-weight;'align='left'>"; //지사
          vApprvDtlInfo += ds_ElectronicApprvList.getCellData(m, "deptNm");
          vApprvDtlInfo += "     			</td>";
          vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='left'>"; //소유구분
          vApprvDtlInfo += ds_ElectronicApprvList.getCellData(m, "possessNm");
          vApprvDtlInfo += "        		</td>";
          vApprvDtlInfo += "         		<td style='font-size:13px;font-weight;'align='left'>"; //차량번호
          vApprvDtlInfo += ds_ElectronicApprvList.getCellData(m, "vehclNo");
          vApprvDtlInfo += "         		</td>";
          vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='left'>"; //차대번호
          vApprvDtlInfo += ds_ElectronicApprvList.getCellData(m, "drcrNo");
          vApprvDtlInfo += "         		</td>";
          vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; //시작일(자동차)
          vApprvDtlInfo += $c.gus.cfGetFormatStr($p, ds_ElectronicApprvList.getCellData(m, "carInsuranceYearStdDt"), "####/##/##");
          vApprvDtlInfo += "     			</td>";
          vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; //종료일(자동차)
          vApprvDtlInfo += $c.gus.cfGetFormatStr($p, ds_ElectronicApprvList.getCellData(m, "carInsuranceYearEndDt"), "####/##/##");
          vApprvDtlInfo += "     			</td>";
          vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='left'>"; //특약
          vApprvDtlInfo += ds_ElectronicApprvList.getCellData(m, "specialContractList1");
          vApprvDtlInfo += "        		</td>";
          vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; //시작일(자동차)
          vApprvDtlInfo += $c.gus.cfGetFormatStr($p, ds_ElectronicApprvList.getCellData(m, "luggageInsuranceYearStdDt"), "####/##/##");
          vApprvDtlInfo += "     			</td>";
          vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; //종료일(자동차)
          vApprvDtlInfo += $c.gus.cfGetFormatStr($p, ds_ElectronicApprvList.getCellData(m, "luggageInsuranceYearEndDt"), "####/##/##");
          vApprvDtlInfo += "     			</td>";
          vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='left'>"; //특약
          vApprvDtlInfo += ds_ElectronicApprvList.getCellData(m, "specialContractList2");
          vApprvDtlInfo += "        		</td>";
          vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='left'>"; //산재작업구분
          vApprvDtlInfo += ds_ElectronicApprvList.getCellData(m, "indDistrWrkClsNm");
          vApprvDtlInfo += "        		</td>";
          vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; //입직일
          vApprvDtlInfo += $c.gus.cfGetFormatStr($p, ds_ElectronicApprvList.getCellData(m, "indDistrStdDt"), "####/##/##");
          vApprvDtlInfo += "     			</td>";
          vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; //이직/적용제외일
          vApprvDtlInfo += $c.gus.cfGetFormatStr($p, ds_ElectronicApprvList.getCellData(m, "indDistrEndDt"), "####/##/##");
          vApprvDtlInfo += "     			</td>";
          vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; //파일첨부
          if (chkFileRegYn != '0') {
            vApprvDtlInfo += "                  <a href='http://ebiz.debis.co.kr/cm/bc/vehclinsurancemgnt/zz_831_01_01b.jsp?pDeptCd=" + chkDeptCd + "&pApplyDt=" + chkApplyDt + "&pVehchlNo=" + chkVehclNo + "&pDrcrNo=" + chkDrcrNo + "&pPorteYn=Y' target='_blank'> " + chkFileRegYn + " </a> ";
          } else if (chkFileRegYn == '0') {
            vApprvDtlInfo += chkFileRegYn;
          }
          vApprvDtlInfo += "        		</td>";
          if (chkWrkClsCd == '05') {
            vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='left'>"; //해지사유
            vApprvDtlInfo += ds_ElectronicApprvList.getCellData(m, "cancelNm");
            vApprvDtlInfo += "        		</td>";
          }
          vApprvDtlInfo += "             </tr>";
        }
      }
    }
  }

  // 변경 및 대차의 경우
  else if (chkWrkClsCd == '02' || chkWrkClsCd == '03') {
    vApprvDtlInfo += " <tr><td height='120px'></td></tr>";
    vApprvDtlInfo += " <tr valign='top' align='center'>";
    vApprvDtlInfo += "   <td>";
    vApprvDtlInfo += "     <table cellpadding='0' cellspacing='0' border='0' width='1200'>";
    vApprvDtlInfo += "		<tr valign='middle'>";
    vApprvDtlInfo += "           <table width='100%'>                                                                                                                    ";
    vApprvDtlInfo += "               <tr>                                                                                                                                ";
    if (chkWrkClsCd == '02') {
      vApprvDtlInfo += "                   <td style='font-size: 15px; font-weight: bold; color: black; font-family: 돋움체;' align='left'><변경건 전자결재 요청정보 상세></td>                        ";
    } else if (chkWrkClsCd == '03') {
      vApprvDtlInfo += "                   <td style='font-size: 15px; font-weight: bold; color: black; font-family: 돋움체;' align='left'><대차건 전자결재 요청정보 상세></td>                        ";
    }
    vApprvDtlInfo += "                   <td align='right' style='padding: 0px 12px 0px 0px;font-size: 12px; vertical-align: bottom;' valign='bottom'></td>     ";
    vApprvDtlInfo += "               </tr>                                                                                                                               ";
    vApprvDtlInfo += "           </table>                                                                                                                                ";
    vApprvDtlInfo += "		</tr>";
    vApprvDtlInfo += "       <tr valign='middle'>";
    vApprvDtlInfo += "         <td background='http://ebiz.debis.co.kr/common/images/boxM890.gif' width='1200' style='padding:0 0 5px 10px' align= 'center'>";
    vApprvDtlInfo += "           <table cellpadding='0' cellspacing='0' border='1' bordercolor='black' width='1200' style='table-layout:fixed;border:2 solid black;border-collapse:collapse'>";
    vApprvDtlInfo += "             <col width='30'>"; // 순번
    vApprvDtlInfo += "             <col width='73'>"; // 신청일
    vApprvDtlInfo += "             <col width='80'>"; // 지사       
    vApprvDtlInfo += "             <col width='70'>"; // 소유구분
    vApprvDtlInfo += "             <col width='100'>"; // 차량번호
    vApprvDtlInfo += "             <col width='145'>"; // 차대번호
    vApprvDtlInfo += "             <col width='73'>"; // 시작일(자동차)
    vApprvDtlInfo += "             <col width='73'>"; // 종료일
    vApprvDtlInfo += "             <col width='73'>"; // 시작일(적재물)
    vApprvDtlInfo += "             <col width='73'>"; // 종료일
    vApprvDtlInfo += "             <col width='90'>"; // 산재작업구분(산재)
    vApprvDtlInfo += "             <col width='73'>"; // 입직일
    vApprvDtlInfo += "             <col width='73'>"; // 이직/적용제외일
    vApprvDtlInfo += "             <col width='115'>"; // 변경내역
    vApprvDtlInfo += "             <col width='125'>"; // 변경전
    vApprvDtlInfo += "             <col width='125'>"; // 변경후
    vApprvDtlInfo += "             <col width='60'>"; // 첨부파일

    vApprvDtlInfo += "             <tr height='20' align='center'>";
    vApprvDtlInfo += "               <td colspan=6; style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 차량기본정보";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td colspan=2; style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 자동차보험";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td colspan=2; style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 적재물보험";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td colspan=3; style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 산재보험";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td colspan=3; style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 변경내역";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td rowspan=2; style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 첨부파일";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "             </tr>";
    vApprvDtlInfo += "             <tr height='30' align='center'>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 순번";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 신청일";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 지사";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 소유구분";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 차량번호";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 차대번호";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 시작일";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 종료일";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 시작일";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 종료일";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 산재작업구분";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 입직일";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 이직/적용제외일";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 변경내역";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 변경전";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 변경후";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "             </tr>";
    let chkCount = 0;
    let chkFileRegYn = '';
    let chkApplyDt = '';
    let chkDeptCd = '';
    let chkVehclNo = '';
    let chkDrcrNo = '';
    for (let m = 0; m < ds_ElectronicApprvList.getRowCount(); m++) {
      // 데이터를 10개 까지만 표시를 해달라는 요구조건에 있었음
      if (chkCount < 10) {
        if (ds_ElectronicApprvList.getCellData(m, "chkBox") == 'T') {
          chkCount++;
          chkFileRegYn = ds_ElectronicApprvList.getCellData(m, "fileRegYn");
          chkApplyDt = ds_ElectronicApprvList.getCellData(m, "applyDt");
          chkDeptCd = ds_ElectronicApprvList.getCellData(m, "deptCd");
          chkVehclNo = ds_ElectronicApprvList.getCellData(m, "vehclNo");
          chkDrcrNo = ds_ElectronicApprvList.getCellData(m, "drcrNo");
          vApprvDtlInfo += "             <tr height='25' align='center'>";
          vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; //순번
          vApprvDtlInfo += chkCount;
          vApprvDtlInfo += "				</td>";
          vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; //신청일
          vApprvDtlInfo += $c.gus.cfGetFormatStr($p, ds_ElectronicApprvList.getCellData(m, "applyDt"), "####/##/##");
          vApprvDtlInfo += "     			</td>";
          vApprvDtlInfo += "      		<td style='font-size:13px;font-weight;'align='left'>"; //지사
          vApprvDtlInfo += ds_ElectronicApprvList.getCellData(m, "deptNm");
          vApprvDtlInfo += "     			</td>";
          vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='left'>"; //소유구분
          vApprvDtlInfo += ds_ElectronicApprvList.getCellData(m, "possessNm");
          vApprvDtlInfo += "        		</td>";
          vApprvDtlInfo += "         		<td style='font-size:13px;font-weight;'align='left'>"; //차량번호
          vApprvDtlInfo += ds_ElectronicApprvList.getCellData(m, "vehclNo");
          vApprvDtlInfo += "         		</td>";
          vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='left'>"; //차대번호
          vApprvDtlInfo += ds_ElectronicApprvList.getCellData(m, "drcrNo");
          vApprvDtlInfo += "         		</td>";
          vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; //시작일(자동차)
          vApprvDtlInfo += $c.gus.cfGetFormatStr($p, ds_ElectronicApprvList.getCellData(m, "carInsuranceYearStdDt"), "####/##/##");
          vApprvDtlInfo += "     			</td>";
          vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; //종료일(자동차)
          vApprvDtlInfo += $c.gus.cfGetFormatStr($p, ds_ElectronicApprvList.getCellData(m, "carInsuranceYearEndDt"), "####/##/##");
          vApprvDtlInfo += "     			</td>";
          vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; //시작일(적재물)
          vApprvDtlInfo += $c.gus.cfGetFormatStr($p, ds_ElectronicApprvList.getCellData(m, "luggageInsuranceYearStdDt"), "####/##/##");
          vApprvDtlInfo += "     			</td>";
          vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; //종료일(적재물)
          vApprvDtlInfo += $c.gus.cfGetFormatStr($p, ds_ElectronicApprvList.getCellData(m, "luggageInsuranceYearEndDt"), "####/##/##");
          vApprvDtlInfo += "     			</td>";
          vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='left'>"; //산재작업구분
          vApprvDtlInfo += ds_ElectronicApprvList.getCellData(m, "indDistrWrkClsNm");
          vApprvDtlInfo += "         		</td>";
          vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; //입직일
          vApprvDtlInfo += $c.gus.cfGetFormatStr($p, ds_ElectronicApprvList.getCellData(m, "indDistrStdDt"), "####/##/##");
          vApprvDtlInfo += "     			</td>";
          vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; //이직/적용제외일
          vApprvDtlInfo += $c.gus.cfGetFormatStr($p, ds_ElectronicApprvList.getCellData(m, "indDistrEndDt"), "####/##/##");
          vApprvDtlInfo += "     			</td>";
          vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; //변경내역
          vApprvDtlInfo += ds_ElectronicApprvList.getCellData(m, "chgWrkNm");
          vApprvDtlInfo += "     			</td>";
          vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='left'>"; //변경전
          vApprvDtlInfo += ds_ElectronicApprvList.getCellData(m, "pastData");
          vApprvDtlInfo += "     			</td>";
          vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='left'>"; //변경후
          vApprvDtlInfo += ds_ElectronicApprvList.getCellData(m, "currentData");
          vApprvDtlInfo += "        		</td>";
          vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; //파일첨부
          if (chkFileRegYn != '0') {
            vApprvDtlInfo += "                  <a href='http://ebiz.debis.co.kr/cm/bc/vehclinsurancemgnt/zz_831_01_01b.jsp?pDeptCd=" + chkDeptCd + "&pApplyDt=" + chkApplyDt + "&pVehchlNo=" + chkVehclNo + "&pDrcrNo=" + chkDrcrNo + "&pPorteYn=Y' target='_blank'> " + chkFileRegYn + " </a> ";
            //vApprvDtlInfo += "                  <a href='http://172.21.1.85:8004/cm/bc/vehclinsurancemgnt/zz_831_01_01b.jsp?pDeptCd="+chkDeptCd+"&pApplyDt="+chkApplyDt+"&pVehchlNo="+chkVehclNo+"&pDrcrNo="+chkDrcrNo+"&pPorteYn=Y' target='_blank'> " + chkFileRegYn + " </a> ";
            //vApprvDtlInfo += "                  <a href='http://127.0.0.1:7001/cm/bc/vehclinsurancemgnt/zz_831_01_01b.jsp?pDeptCd="+chkDeptCd+"&pApplyDt="+chkApplyDt+"&pVehchlNo="+chkVehclNo+"&pDrcrNo="+chkDrcrNo+"&pPorteYn=Y' target='_blank'> " + chkFileRegYn + " </a> ";
          } else if (chkFileRegYn == '0') {
            vApprvDtlInfo += chkFileRegYn;
          }
          vApprvDtlInfo += "        		</td>";
          vApprvDtlInfo += "             </tr>";
        }
      }
    }
  }

  // 갱신의 경우
  else if (chkWrkClsCd == '04') {
    vApprvDtlInfo += " <tr><td height='120px'></td></tr>";
    vApprvDtlInfo += " <tr valign='top' align='center'>";
    vApprvDtlInfo += "   <td>";
    vApprvDtlInfo += "     <table cellpadding='0' cellspacing='0' border='0' width='900'>";
    vApprvDtlInfo += "		<tr valign='middle'>";
    vApprvDtlInfo += "           <table width='100%'>                                                                                                                    ";
    vApprvDtlInfo += "               <tr>                                                                                                                                ";
    vApprvDtlInfo += "                   <td style='font-size: 15px; font-weight: bold; color: black; font-family: 돋움체;' align='left'><지사 및 소유 구분별 갱신건 전자결재 요청 수></td>                        ";
    vApprvDtlInfo += "                   <td align='right' style='padding: 0px 12px 0px 0px;font-size: 12px; vertical-align: bottom;' valign='bottom'></td>     ";
    vApprvDtlInfo += "               </tr>                                                                                                                               ";
    vApprvDtlInfo += "           </table>                                                                                                                                ";
    vApprvDtlInfo += "		</tr>";
    vApprvDtlInfo += "       <tr valign='middle'>";
    vApprvDtlInfo += "         <td background='http://ebiz.debis.co.kr/common/images/boxM890.gif' width='900' style='padding:0 0 5px 10px' align= 'center'>";
    vApprvDtlInfo += "           <table cellpadding='0' cellspacing='0' border='1' bordercolor='black' width='900' style='table-layout:fixed;border:2 solid black;border-collapse:collapse'>";
    vApprvDtlInfo += "             <col width='70'>"; // 구분
    vApprvDtlInfo += "             <col width='60'>"; // 위수탁
    vApprvDtlInfo += "             <col width='60'>"; // 지입     
    vApprvDtlInfo += "             <col width='60'>"; // 지입용차
    vApprvDtlInfo += "             <col width='60'>"; // KPX운송
    vApprvDtlInfo += "             <col width='60'>"; // 지입협력
    vApprvDtlInfo += "             <col width='60'>"; // 계

    vApprvDtlInfo += "             <tr height='30' align='center'>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 구분";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 위수탁";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 지입";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 지입용차";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 KPX운송";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 지입협력";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 계";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "             </tr>";

    // count1: 위수탁
    // count2: 지입
    // count3: 지입용차
    // count4: KPX운송
    // count5: 지입협력
    // count6: 지사별 계
    // exits : 해당 지사가 존재 하는지 확인 하고, 1건 이상 이라도 존재 한다면 html에 그려준다.

    // 부산지사
    let chkBuSanCount1 = 0;
    let chkBuSanCount2 = 0;
    let chkBuSanCount3 = 0;
    let chkBuSanCount4 = 0;
    let chkBuSanCount5 = 0;
    let chkBuSanCount6 = 0;
    let chkBusanExist = 0;

    // 인천지사
    let chkInCheonCount1 = 0;
    let chkInCheonCount2 = 0;
    let chkInCheonCount3 = 0;
    let chkInCheonCount4 = 0;
    let chkInCheonCount5 = 0;
    let chkInCheonCount6 = 0;
    let chkInCheonExist = 0;

    // 전남지사
    let chkJeonNamCount1 = 0;
    let chkJeonNamCount2 = 0;
    let chkJeonNamCount3 = 0;
    let chkJeonNamCount4 = 0;
    let chkJeonNamCount5 = 0;
    let chkJeonNamCount6 = 0;
    let chkJeonNamExist = 0;

    // 영남지사
    let chkYoungNamCount1 = 0;
    let chkYoungNamCount2 = 0;
    let chkYoungNamCount3 = 0;
    let chkYoungNamCount4 = 0;
    let chkYoungNamCount5 = 0;
    let chkYoungNamCount6 = 0;
    let chkYoungNamExist = 0;

    // 대구지점
    let chkDaeGuCount1 = 0;
    let chkDaeGuCount2 = 0;
    let chkDaeGuCount3 = 0;
    let chkDaeGuCount4 = 0;
    let chkDaeGuCount5 = 0;
    let chkDaeGuCount6 = 0;
    let chkDaeGuExist = 0;

    // 포항지점
    let chkPoHangCount1 = 0;
    let chkPoHangCount2 = 0;
    let chkPoHangCount3 = 0;
    let chkPoHangCount4 = 0;
    let chkPoHangCount5 = 0;
    let chkPoHangCount6 = 0;
    let chkPoHangExist = 0;

    // 당진평택지사
    let chkDangJinCount1 = 0;
    let chkDangJinCount2 = 0;
    let chkDangJinCount3 = 0;
    let chkDangJinCount4 = 0;
    let chkDangJinCount5 = 0;
    let chkDangJinCount6 = 0;
    let chkDangJinExist = 0;

    // 경기지사
    let chkKyungKiCount1 = 0;
    let chkKyungKiCount2 = 0;
    let chkKyungKiCount3 = 0;
    let chkKyungKiCount4 = 0;
    let chkKyungKiCount5 = 0;
    let chkKyungKiCount6 = 0;
    let chkKyungKiExist = 0;

    // 중부지사
    let chkJungBuCount1 = 0;
    let chkJungBuCount2 = 0;
    let chkJungBuCount3 = 0;
    let chkJungBuCount4 = 0;
    let chkJungBuCount5 = 0;
    let chkJungBuCount6 = 0;
    let chkJungBuExist = 0;

    // 전북지점
    let chkJeonBukCount1 = 0;
    let chkJeonBukCount2 = 0;
    let chkJeonBukCount3 = 0;
    let chkJeonBukCount4 = 0;
    let chkJeonBukCount5 = 0;
    let chkJeonBukCount6 = 0;
    let chkJeonBukExist = 0;

    // 동해지사
    let chkDongHaeCount1 = 0;
    let chkDongHaeCount2 = 0;
    let chkDongHaeCount3 = 0;
    let chkDongHaeCount4 = 0;
    let chkDongHaeCount5 = 0;
    let chkDongHaeCount6 = 0;
    let chkDongHaeExist = 0;

    // 소유구분 별 Count
    let totalCount1 = 0; // 위수탁 합계
    let totalCount2 = 0; // 지입 합계
    let totalCount3 = 0; // 지입용차 합계
    let totalCount4 = 0; // KPX운송 합계
    let totalCount5 = 0; // 지입협력 합계
    let totalCount6 = 0; // 총 합계 (전자결재 요청 건수와 같아야 한다.)

    // 그리드를 돌면서 ~ 체크된 애들만 검사
    for (let m = 0; m < ds_ElectronicApprvList.getRowCount(); m++) {
      if (ds_ElectronicApprvList.getCellData(m, "chkBox") == 'T') {
        let chkDeptCd = ds_ElectronicApprvList.getCellData(m, "deptCd"); // 지사 체크
        let chkPossessCd = ds_ElectronicApprvList.getCellData(m, "possessCd"); // 소유구분 체크

        // 6AA: 부산지사
        if (chkDeptCd == '6AA') {
          if (chkPossessCd == '01') {
            chkBuSanCount1++;
          } else if (chkPossessCd == '02') {
            chkBuSanCount2++;
          } else if (chkPossessCd == '03') {
            chkBuSanCount3++;
          } else if (chkPossessCd == '04') {
            chkBuSanCount4++;
          } else if (chkPossessCd == '05') {
            chkBuSanCount5++;
          }
          chkBusanExist++;
        }

        // 4AA: 인천지사
        else if (chkDeptCd == '4AA') {
          if (chkPossessCd == '01') {
            chkInCheonCount1++;
          } else if (chkPossessCd == '02') {
            chkInCheonCount2++;
          } else if (chkPossessCd == '03') {
            chkInCheonCount3++;
          } else if (chkPossessCd == '04') {
            chkInCheonCount4++;
          } else if (chkPossessCd == '05') {
            chkInCheonCount5++;
          }
          chkInCheonExist++;
        }

        // 5AA: 전남지사
        else if (chkDeptCd == '5AA') {
          if (chkPossessCd == '01') {
            chkJeonNamCount1++;
          } else if (chkPossessCd == '02') {
            chkJeonNamCount2++;
          } else if (chkPossessCd == '03') {
            chkJeonNamCount3++;
          } else if (chkPossessCd == '04') {
            chkJeonNamCount4++;
          } else if (chkPossessCd == '05') {
            chkJeonNamCount5++;
          }
          chkJeonNamExist++;
        }

        // 6BB: 영남지사
        else if (chkDeptCd == '6BB') {
          if (chkPossessCd == '01') {
            chkYoungNamCount1++;
          } else if (chkPossessCd == '02') {
            chkYoungNamCount2++;
          } else if (chkPossessCd == '03') {
            chkYoungNamCount3++;
          } else if (chkPossessCd == '04') {
            chkYoungNamCount4++;
          } else if (chkPossessCd == '05') {
            chkYoungNamCount5++;
          }
          chkYoungNamExist++;
        }

        // 7CC: 대구지점
        else if (chkDeptCd == '7CC') {
          if (chkPossessCd == '01') {
            chkDaeGuCount1++;
          } else if (chkPossessCd == '02') {
            chkDaeGuCount2++;
          } else if (chkPossessCd == '03') {
            chkDaeGuCount3++;
          } else if (chkPossessCd == '04') {
            chkDaeGuCount4++;
          } else if (chkPossessCd == '05') {
            chkDaeGuCount5++;
          }
          chkDaeGuExist++;
        }

        // 7AA: 포항지점
        else if (chkDeptCd == '7AA') {
          if (chkPossessCd == '01') {
            chkPoHangCount1++;
          } else if (chkPossessCd == '02') {
            chkPoHangCount2++;
          } else if (chkPossessCd == '03') {
            chkPoHangCount3++;
          } else if (chkPossessCd == '04') {
            chkPoHangCount4++;
          } else if (chkPossessCd == '05') {
            chkPoHangCount5++;
          }
          chkPoHangExist++;
        }

        // 3AA: 당진평택지사
        else if (chkDeptCd == '3AA') {
          if (chkPossessCd == '01') {
            chkDangJinCount1++;
          } else if (chkPossessCd == '02') {
            chkDangJinCount2++;
          } else if (chkPossessCd == '03') {
            chkDangJinCount3++;
          } else if (chkPossessCd == '04') {
            chkDangJinCount4++;
          } else if (chkPossessCd == '05') {
            chkDangJinCount5++;
          }
          chkDangJinExist++;
        }

        // 4BB: 부산지사 의왕지점
        else if (chkDeptCd == '4BB') {
          if (chkPossessCd == '01') {
            chkKyungKiCount1++;
          } else if (chkPossessCd == '02') {
            chkKyungKiCount2++;
          } else if (chkPossessCd == '03') {
            chkKyungKiCount3++;
          } else if (chkPossessCd == '04') {
            chkKyungKiCount4++;
          } else if (chkPossessCd == '05') {
            chkKyungKiCount5++;
          }
          chkKyungKiExist++;
        }
        // 4HH: 중부지사 경기지점
        else if (chkDeptCd == '4HH') {
          if (chkPossessCd == '01') {
            chkKyungKiCount1++;
          } else if (chkPossessCd == '02') {
            chkKyungKiCount2++;
          } else if (chkPossessCd == '03') {
            chkKyungKiCount3++;
          } else if (chkPossessCd == '04') {
            chkKyungKiCount4++;
          } else if (chkPossessCd == '05') {
            chkKyungKiCount5++;
          }
          chkKyungKiExist++;
        }

        // 3CC: 중부지사
        else if (chkDeptCd == '3CC') {
          if (chkPossessCd == '01') {
            chkJungBuCount1++;
          } else if (chkPossessCd == '02') {
            chkJungBuCount2++;
          } else if (chkPossessCd == '03') {
            chkJungBuCount3++;
          } else if (chkPossessCd == '04') {
            chkJungBuCount4++;
          } else if (chkPossessCd == '05') {
            chkJungBuCount5++;
          }
          chkJungBuExist++;
        }

        // 5CC: 전북지점
        else if (chkDeptCd == '5CC') {
          if (chkPossessCd == '01') {
            chkJeonBukCount1++;
          } else if (chkPossessCd == '02') {
            chkJeonBukCount2++;
          } else if (chkPossessCd == '03') {
            chkJeonBukCount3++;
          } else if (chkPossessCd == '04') {
            chkJeonBukCount4++;
          } else if (chkPossessCd == '05') {
            chkJeonBukCount5++;
          }
          chkJeonBukExist++;
        }

        // 2AA: 동해지사
        else if (chkDeptCd == '2AA') {
          if (chkPossessCd == '01') {
            chkDongHaeCount1++;
          } else if (chkPossessCd == '02') {
            chkDongHaeCount2++;
          } else if (chkPossessCd == '03') {
            chkDongHaeCount3++;
          } else if (chkPossessCd == '04') {
            chkDongHaeCount4++;
          } else if (chkPossessCd == '05') {
            chkDongHaeCount5++;
          }
          chkDongHaeExist++;
        }
      } // end of if
    } // end of for

    // 지사별 합계
    chkBuSanCount6 = chkBuSanCount1 + chkBuSanCount2 + chkBuSanCount3 + chkBuSanCount4 + chkBuSanCount5;
    chkInCheonCount6 = chkInCheonCount1 + chkInCheonCount2 + chkInCheonCount3 + chkInCheonCount4 + chkInCheonCount5;
    chkJeonNamCount6 = chkJeonNamCount1 + chkJeonNamCount2 + chkJeonNamCount3 + chkJeonNamCount4 + chkJeonNamCount5;
    chkYoungNamCount6 = chkYoungNamCount1 + chkYoungNamCount2 + chkYoungNamCount3 + chkYoungNamCount4 + chkYoungNamCount5;
    chkDaeGuCount6 = chkDaeGuCount1 + chkDaeGuCount2 + chkDaeGuCount3 + chkDaeGuCount4 + chkDaeGuCount5 + chkDaeGuCount6;
    chkPoHangCount6 = chkPoHangCount1 + chkPoHangCount2 + chkPoHangCount3 + chkPoHangCount4 + chkPoHangCount5;
    chkDangJinCount6 = chkDangJinCount1 + chkDangJinCount2 + chkDangJinCount3 + chkDangJinCount4 + chkDangJinCount5;
    chkKyungKiCount6 = chkKyungKiCount1 + chkKyungKiCount2 + chkKyungKiCount3 + chkKyungKiCount4 + chkKyungKiCount5;
    chkJungBuCount6 = chkJungBuCount1 + chkJungBuCount2 + chkJungBuCount3 + chkJungBuCount4 + chkJungBuCount5;
    chkJeonBukCount6 = chkJeonBukCount1 + chkJeonBukCount2 + chkJeonBukCount3 + chkJeonBukCount4 + chkJeonBukCount5;
    chkDongHaeCount6 = chkDongHaeCount1 + chkDongHaeCount2 + chkDongHaeCount3 + chkDongHaeCount4 + chkDongHaeCount5;

    // 구분별 합계
    totalCount1 = chkBuSanCount1 + chkInCheonCount1 + chkJeonNamCount1 + chkYoungNamCount1 + chkDaeGuCount1 + chkPoHangCount1 + chkDangJinCount1 + chkKyungKiCount1 + chkJungBuCount1 + chkJeonBukCount1 + chkDongHaeCount1;
    totalCount2 = chkBuSanCount2 + chkInCheonCount2 + chkJeonNamCount2 + chkYoungNamCount2 + chkDaeGuCount2 + chkPoHangCount2 + chkDangJinCount2 + chkKyungKiCount2 + chkJungBuCount2 + chkJeonBukCount2 + chkDongHaeCount2;
    totalCount3 = chkBuSanCount3 + chkInCheonCount3 + chkJeonNamCount3 + chkYoungNamCount3 + chkDaeGuCount3 + chkPoHangCount3 + chkDangJinCount3 + chkKyungKiCount3 + chkJungBuCount3 + chkJeonBukCount3 + chkDongHaeCount3;
    totalCount4 = chkBuSanCount4 + chkInCheonCount4 + chkJeonNamCount4 + chkYoungNamCount4 + chkDaeGuCount4 + chkPoHangCount4 + chkDangJinCount4 + chkKyungKiCount4 + chkJungBuCount4 + chkJeonBukCount4 + chkDongHaeCount4;
    totalCount5 = chkBuSanCount5 + chkInCheonCount5 + chkJeonNamCount5 + chkYoungNamCount5 + chkDaeGuCount5 + chkPoHangCount5 + chkDangJinCount5 + chkKyungKiCount5 + chkJungBuCount5 + chkJeonBukCount5 + chkDongHaeCount5;
    totalCount6 = totalCount1 + totalCount2 + totalCount3 + totalCount4 + totalCount5;

    // 하부 html
    // 부산지사 체크 여부 확인 후 그리기
    if (chkBusanExist != 0) {
      vApprvDtlInfo += "             <tr height='25' align='center'>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight:bold;'align='center'>"; // 구분
      vApprvDtlInfo += '부산지사';
      vApprvDtlInfo += "				</td>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; // 위수탁
      if (chkBuSanCount1 != 0) {
        vApprvDtlInfo += chkBuSanCount1;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "      		<td style='font-size:13px;font-weight;'align='center'>"; // 지입
      if (chkBuSanCount2 != 0) {
        vApprvDtlInfo += chkBuSanCount2;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입용차
      if (chkBuSanCount3 != 0) {
        vApprvDtlInfo += chkBuSanCount3;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "        		</td>";
      vApprvDtlInfo += "         		<td style='font-size:13px;font-weight;'align='center'>"; // KPX운송
      if (chkBuSanCount4 != 0) {
        vApprvDtlInfo += chkBuSanCount4;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입협력
      if (chkBuSanCount5 != 0) {
        vApprvDtlInfo += chkBuSanCount5;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 계
      if (chkBuSanCount6 != 0) {
        vApprvDtlInfo += chkBuSanCount6 + '건';
      } else {
        vApprvDtlInfo += '0건';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "             </tr>";
    }

    // 인천지사 체크 여부 확인 후 그리기
    if (chkInCheonExist != 0) {
      vApprvDtlInfo += "             <tr height='25' align='center'>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight:bold;'align='center'>"; // 구분
      vApprvDtlInfo += '인천지사';
      vApprvDtlInfo += "				</td>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; // 위수탁
      if (chkInCheonCount1 != 0) {
        vApprvDtlInfo += chkInCheonCount1;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "      		<td style='font-size:13px;font-weight;'align='center'>"; // 지입
      if (chkInCheonCount2 != 0) {
        vApprvDtlInfo += chkInCheonCount2;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입용차
      if (chkInCheonCount3 != 0) {
        vApprvDtlInfo += chkInCheonCount3;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "        		</td>";
      vApprvDtlInfo += "         		<td style='font-size:13px;font-weight;'align='center'>"; // KPX운송
      if (chkInCheonCount4 != 0) {
        vApprvDtlInfo += chkInCheonCount4;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입협력
      if (chkInCheonCount5 != 0) {
        vApprvDtlInfo += chkInCheonCount5;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 계
      if (chkInCheonCount6 != 0) {
        vApprvDtlInfo += chkInCheonCount6 + '건';
      } else {
        vApprvDtlInfo += '0건';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "             </tr>";
    }

    // 전남지사 체크 여부 확인 후 그리기
    if (chkJeonNamExist != 0) {
      vApprvDtlInfo += "             <tr height='25' align='center'>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight:bold;'align='center'>"; // 구분
      vApprvDtlInfo += '전남지사';
      vApprvDtlInfo += "				</td>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; // 위수탁
      if (chkJeonNamCount1 != 0) {
        vApprvDtlInfo += chkJeonNamCount1;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "      		<td style='font-size:13px;font-weight;'align='center'>"; // 지입
      if (chkJeonNamCount2 != 0) {
        vApprvDtlInfo += chkJeonNamCount2;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입용차
      if (chkJeonNamCount3 != 0) {
        vApprvDtlInfo += chkJeonNamCount3;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "        		</td>";
      vApprvDtlInfo += "         		<td style='font-size:13px;font-weight;'align='center'>"; // KPX운송
      if (chkJeonNamCount4 != 0) {
        vApprvDtlInfo += chkJeonNamCount4;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입협력
      if (chkJeonNamCount5 != 0) {
        vApprvDtlInfo += chkJeonNamCount5;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 계
      if (chkJeonNamCount6 != 0) {
        vApprvDtlInfo += chkJeonNamCount6 + '건';
      } else {
        vApprvDtlInfo += '0건';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "             </tr>";
    }

    // 영남지사 체크 여부 확인 후 그리기
    if (chkYoungNamExist != 0) {
      vApprvDtlInfo += "             <tr height='25' align='center'>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight:bold;'align='center'>"; // 구분
      vApprvDtlInfo += '영남지사';
      vApprvDtlInfo += "				</td>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; // 위수탁
      if (chkYoungNamCount1 != 0) {
        vApprvDtlInfo += chkYoungNamCount1;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "      		<td style='font-size:13px;font-weight;'align='center'>"; // 지입
      if (chkYoungNamCount2 != 0) {
        vApprvDtlInfo += chkYoungNamCount2;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입용차
      if (chkYoungNamCount3 != 0) {
        vApprvDtlInfo += chkYoungNamCount3;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "        		</td>";
      vApprvDtlInfo += "         		<td style='font-size:13px;font-weight;'align='center'>"; // KPX운송
      if (chkYoungNamCount4 != 0) {
        vApprvDtlInfo += chkYoungNamCount4;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입협력
      if (chkYoungNamCount5 != 0) {
        vApprvDtlInfo += chkYoungNamCount5;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 계
      if (chkYoungNamCount6 != 0) {
        vApprvDtlInfo += chkYoungNamCount6 + '건';
      } else {
        vApprvDtlInfo += '0건';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "             </tr>";
    }

    // 대구지점 체크 여부 확인 후 그리기
    if (chkDaeGuExist != 0) {
      vApprvDtlInfo += "             <tr height='25' align='center'>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight:bold;'align='center'>"; // 구분
      vApprvDtlInfo += '대구지점';
      vApprvDtlInfo += "				</td>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; // 위수탁
      if (chkDaeGuCount1 != 0) {
        vApprvDtlInfo += chkDaeGuCount1;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "      		<td style='font-size:13px;font-weight;'align='center'>"; // 지입
      if (chkDaeGuCount2 != 0) {
        vApprvDtlInfo += chkDaeGuCount2;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입용차
      if (chkDaeGuCount3 != 0) {
        vApprvDtlInfo += chkDaeGuCount3;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "        		</td>";
      vApprvDtlInfo += "         		<td style='font-size:13px;font-weight;'align='center'>"; // KPX운송
      if (chkDaeGuCount4 != 0) {
        vApprvDtlInfo += chkDaeGuCount4;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입협력
      if (chkDaeGuCount5 != 0) {
        vApprvDtlInfo += chkDaeGuCount5;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 계
      if (chkDaeGuCount6 != 0) {
        vApprvDtlInfo += chkDaeGuCount6 + '건';
      } else {
        vApprvDtlInfo += '0건';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "             </tr>";
    }

    // 포항지점 체크 여부 확인 후 그리기
    if (chkPoHangExist != 0) {
      vApprvDtlInfo += "             <tr height='25' align='center'>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight:bold;'align='center'>"; // 구분
      vApprvDtlInfo += '포항지점';
      vApprvDtlInfo += "				</td>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; // 위수탁
      if (chkPoHangCount1 != 0) {
        vApprvDtlInfo += chkPoHangCount1;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "      		<td style='font-size:13px;font-weight;'align='center'>"; // 지입
      if (chkPoHangCount2 != 0) {
        vApprvDtlInfo += chkPoHangCount2;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입용차
      if (chkPoHangCount3 != 0) {
        vApprvDtlInfo += chkPoHangCount3;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "        		</td>";
      vApprvDtlInfo += "         		<td style='font-size:13px;font-weight;'align='center'>"; // KPX운송
      if (chkPoHangCount4 != 0) {
        vApprvDtlInfo += chkPoHangCount4;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입협력
      if (chkPoHangCount5 != 0) {
        vApprvDtlInfo += chkPoHangCount5;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 계
      if (chkPoHangCount6 != 0) {
        vApprvDtlInfo += chkPoHangCount6 + '건';
      } else {
        vApprvDtlInfo += '0건';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "             </tr>";
    }

    // 당진평택지사 체크 여부 확인 후 그리기
    if (chkDangJinExist != 0) {
      vApprvDtlInfo += "             <tr height='25' align='center'>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight:bold;'align='center'>"; // 구분
      vApprvDtlInfo += '당진평택지사';
      vApprvDtlInfo += "				</td>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; // 위수탁
      if (chkDangJinCount1 != 0) {
        vApprvDtlInfo += chkDangJinCount1;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "      		<td style='font-size:13px;font-weight;'align='center'>"; // 지입
      if (chkDangJinCount2 != 0) {
        vApprvDtlInfo += chkDangJinCount2;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입용차
      if (chkDangJinCount3 != 0) {
        vApprvDtlInfo += chkDangJinCount3;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "        		</td>";
      vApprvDtlInfo += "         		<td style='font-size:13px;font-weight;'align='center'>"; // KPX운송
      if (chkDangJinCount4 != 0) {
        vApprvDtlInfo += chkDangJinCount4;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입협력
      if (chkDangJinCount5 != 0) {
        vApprvDtlInfo += chkDangJinCount5;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 계
      if (chkDangJinCount6 != 0) {
        vApprvDtlInfo += chkDangJinCount6 + '건';
      } else {
        vApprvDtlInfo += '0건';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "             </tr>";
    }

    // 경기지사 체크 여부 확인 후 그리기
    if (chkKyungKiExist != 0) {
      vApprvDtlInfo += "             <tr height='25' align='center'>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight:bold;'align='center'>"; // 구분
      vApprvDtlInfo += '경기지사';
      vApprvDtlInfo += "				</td>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; // 위수탁
      if (chkKyungKiCount1 != 0) {
        vApprvDtlInfo += chkKyungKiCount1;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "      		<td style='font-size:13px;font-weight;'align='center'>"; // 지입
      if (chkKyungKiCount2 != 0) {
        vApprvDtlInfo += chkKyungKiCount2;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입용차
      if (chkKyungKiCount3 != 0) {
        vApprvDtlInfo += chkKyungKiCount3;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "        		</td>";
      vApprvDtlInfo += "         		<td style='font-size:13px;font-weight;'align='center'>"; // KPX운송
      if (chkKyungKiCount4 != 0) {
        vApprvDtlInfo += chkKyungKiCount4;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입협력
      if (chkKyungKiCount5 != 0) {
        vApprvDtlInfo += chkKyungKiCount5;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 계
      if (chkKyungKiCount6 != 0) {
        vApprvDtlInfo += chkKyungKiCount6 + '건';
      } else {
        vApprvDtlInfo += '0건';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "             </tr>";
    }

    // 중부지사 체크 여부 확인 후 그리기
    if (chkJungBuExist != 0) {
      vApprvDtlInfo += "             <tr height='25' align='center'>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight:bold;'align='center'>"; // 구분
      vApprvDtlInfo += '중부지사';
      vApprvDtlInfo += "				</td>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; // 위수탁
      if (chkJungBuCount1 != 0) {
        vApprvDtlInfo += chkJungBuCount1;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "      		<td style='font-size:13px;font-weight;'align='center'>"; // 지입
      if (chkJungBuCount2 != 0) {
        vApprvDtlInfo += chkJungBuCount2;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입용차
      if (chkJungBuCount3 != 0) {
        vApprvDtlInfo += chkJungBuCount3;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "        		</td>";
      vApprvDtlInfo += "         		<td style='font-size:13px;font-weight;'align='center'>"; // KPX운송
      if (chkJungBuCount4 != 0) {
        vApprvDtlInfo += chkJungBuCount4;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입협력
      if (chkJungBuCount5 != 0) {
        vApprvDtlInfo += chkJungBuCount5;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 계
      if (chkJungBuCount6 != 0) {
        vApprvDtlInfo += chkJungBuCount6 + '건';
      } else {
        vApprvDtlInfo += '0건';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "             </tr>";
    }

    // 전북지점 체크 여부 확인 후 그리기
    if (chkJeonBukExist != 0) {
      vApprvDtlInfo += "             <tr height='25' align='center'>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight:bold;'align='center'>"; // 구분
      vApprvDtlInfo += '전북지점';
      vApprvDtlInfo += "				</td>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; // 위수탁
      if (chkJeonBukCount1 != 0) {
        vApprvDtlInfo += chkJeonBukCount1;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "      		<td style='font-size:13px;font-weight;'align='center'>"; // 지입
      if (chkJeonBukCount2 != 0) {
        vApprvDtlInfo += chkJeonBukCount2;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입용차
      if (chkJeonBukCount3 != 0) {
        vApprvDtlInfo += chkJeonBukCount3;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "        		</td>";
      vApprvDtlInfo += "         		<td style='font-size:13px;font-weight;'align='center'>"; // KPX운송
      if (chkJeonBukCount4 != 0) {
        vApprvDtlInfo += chkJeonBukCount4;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입협력
      if (chkJeonBukCount5 != 0) {
        vApprvDtlInfo += chkJeonBukCount5;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 계
      if (chkJeonBukCount6 != 0) {
        vApprvDtlInfo += chkJeonBukCount6 + '건';
      } else {
        vApprvDtlInfo += '0건';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "             </tr>";
    }

    // 동해지사 체크 여부 확인 후 그리기
    if (chkDongHaeExist != 0) {
      vApprvDtlInfo += "             <tr height='25' align='center'>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight:bold;'align='center'>"; // 구분
      vApprvDtlInfo += '동해지사';
      vApprvDtlInfo += "				</td>";
      vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; // 위수탁
      if (chkDongHaeCount1 != 0) {
        vApprvDtlInfo += chkDongHaeCount1;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "      		<td style='font-size:13px;font-weight;'align='center'>"; // 지입
      if (chkDongHaeCount2 != 0) {
        vApprvDtlInfo += chkDongHaeCount2;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "     			</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입용차
      if (chkDongHaeCount3 != 0) {
        vApprvDtlInfo += chkDongHaeCount3;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "        		</td>";
      vApprvDtlInfo += "         		<td style='font-size:13px;font-weight;'align='center'>"; // KPX운송
      if (chkDongHaeCount4 != 0) {
        vApprvDtlInfo += chkDongHaeCount4;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입협력
      if (chkDongHaeCount5 != 0) {
        vApprvDtlInfo += chkDongHaeCount5;
      } else {
        vApprvDtlInfo += '-';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 계
      if (chkDongHaeCount6 != 0) {
        vApprvDtlInfo += chkDongHaeCount6 + '건';
      } else {
        vApprvDtlInfo += '0건';
      }
      vApprvDtlInfo += "         		</td>";
      vApprvDtlInfo += "             </tr>";
    }

    // 총 계를 표시
    vApprvDtlInfo += "             <tr height='25' align='center'>";
    vApprvDtlInfo += "				<td style='font-size:13px;font-weight:bold;'align='center'>"; // 계
    vApprvDtlInfo += '계';
    vApprvDtlInfo += "				</td>";
    vApprvDtlInfo += "				<td style='font-size:13px;font-weight;'align='center'>"; // 위수탁
    if (totalCount1 != 0) {
      vApprvDtlInfo += totalCount1 + '건';
    } else {
      vApprvDtlInfo += '0건';
    }
    vApprvDtlInfo += "     			</td>";
    vApprvDtlInfo += "      		<td style='font-size:13px;font-weight;'align='center'>"; // 지입
    if (totalCount2 != 0) {
      vApprvDtlInfo += totalCount2 + '건';
    } else {
      vApprvDtlInfo += '0건';
    }
    vApprvDtlInfo += "     			</td>";
    vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입용차
    if (totalCount3 != 0) {
      vApprvDtlInfo += totalCount3 + '건';
    } else {
      vApprvDtlInfo += '0건';
    }
    vApprvDtlInfo += "        		</td>";
    vApprvDtlInfo += "         		<td style='font-size:13px;font-weight;'align='center'>"; // KPX운송
    if (totalCount4 != 0) {
      vApprvDtlInfo += totalCount4 + '건';
    } else {
      vApprvDtlInfo += '0건';
    }
    vApprvDtlInfo += "         		</td>";
    vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 지입협력
    if (totalCount5 != 0) {
      vApprvDtlInfo += totalCount5 + '건';
    } else {
      vApprvDtlInfo += '0건';
    }
    vApprvDtlInfo += "         		</td>";
    vApprvDtlInfo += "        		<td style='font-size:13px;font-weight;'align='center'>"; // 계
    if (totalCount6 != 0) {
      vApprvDtlInfo += totalCount6 + '건';
    } else {
      vApprvDtlInfo += '0건';
    }
    vApprvDtlInfo += "         		</td>";
    vApprvDtlInfo += "             </tr>";
  }
  vApprvDtlInfo += "           </table>";
  vApprvDtlInfo += "         </td>";
  vApprvDtlInfo += "       </tr>";
  vApprvDtlInfo += "     </table>";
  vApprvDtlInfo += "   </td>";
  vApprvDtlInfo += " </tr>";
  vApprvDtlInfo += "</table>";
  return vApprvDtlInfo;
};

//-------------------------------------------------------------------------
// 결재내용 생성(HTML)
//-------------------------------------------------------------------------	
scwin.f_MakeHtml1 = function () {
  // 호출되는곳 없음
};

//-------------------------------------------------------------------------
// 차량보험관리 팝업
//-------------------------------------------------------------------------  	
scwin.f_evidPopUp = function () {
  let data = {
    pDeptCd: ds_ElectronicApprvList.getCellData(ds_ElectronicApprvList.getRowPosition(), "deptCd"),
    pApplyDt: ds_ElectronicApprvList.getCellData(ds_ElectronicApprvList.getRowPosition(), "applyDt"),
    pVehchlNo: ds_ElectronicApprvList.getCellData(ds_ElectronicApprvList.getRowPosition(), "vehclNo"),
    pDrcrNo: ds_ElectronicApprvList.getCellData(ds_ElectronicApprvList.getRowPosition(), "drcrNo"),
    pPorteYn: "Y",
    className: "view_pop"
  };
  let opt = {
    id: "smpPop",
    popupName: "차량보험신청관리",
    modal: true,
    title: "Win pop",
    width: "1500",
    height: "800"
  };
  let url = "/ui/cm/bc/vehclinsurancemgnt/zz_831_01_01b.xml";
  $c.win.openPopup($p, url, opt, data);
};

//-------------------------------------------------------------------------
// 첨부파일 일괄 업로드
//-------------------------------------------------------------------------  	
scwin.fileSubmit = async function () {
  let countChk = 0;
  for (let i = 0; i < ds_ElectronicApprvList.getRowCount(); i++) {
    if (ds_ElectronicApprvList.getCellData(i, "chkBox") == "T") {
      countChk++;
    }
  }
  if (countChk == 0) {
    await $c.win.alert($p, "선택한 데이터가 없습니다.");
    return;
  }
  if (lc_fileClsCd.getValue() == "") {
    await $c.win.alert($p, "첨부파일 종류를 선택해 주시기 바랍니다. ('일괄 업로드' 버튼 옆)");
    return;
  }
  if (!(await $c.win.confirm($p, "첨부파일 일괄 업로드 하시겠습니까?)"))) {
    return;
  }
  fileUploadGDS.removeAll();
  udc_fielUpload.setSubDir(scwin.systemPathVal);
  udc_fielUpload.startFileUpload();
  scwin.saveDone();
};
scwin.saveDone = function () {
  //$c.win.alert("파일이 저장되었습니다.");
};

// uploadComplete
scwin.udc_fielUpload_onFileUploadDone = async function (isSuccess) {
  if (!isSuccess) {
    return;
  }
  ;
  let data = udc_fielUpload.getData();
  for (let i = 0; i < data.length; i++) {
    fileUploadGDS.insertRow(i);
    fileUploadGDS.setCellData(i, "fileClsCd", lc_fileClsCd.getValue());
    fileUploadGDS.setCellData(i, "fileName", data[i].ORIGIN_FILE_NM);
    fileUploadGDS.setCellData(i, "filePath", data[i].FILE_STORED_PATH + data[i].STORED_FILE_NM);
    fileUploadGDS.setCellData(i, "fileSize", data[i].FILE_SIZE);
  }
  await scwin.f_saveFile();
};
scwin.uploadComplete = function () {
  //udc_fielUpload_onFileUploadDone
};
scwin.f_saveFile = function () {
  let mgntNo = '';
  let wrkSeq = '';
  for (i = 0; i < ds_ElectronicApprvList.getRowCount(); i++) {
    let fileClsCd = lc_fileClsCd.getValue();
    if (ds_ElectronicApprvList.getCellData(i, "chkBox") == 'T') {
      mgntNo = ds_ElectronicApprvList.getCellData(i, "mgntNo");
      wrkSeq = ds_ElectronicApprvList.getCellData(i, "wrkSeq");
      for (let i = 0; i < fileUploadGDS.getRowCount(); i++) {
        fileUploadGDS.setCellData(i, "mgntNo", mgntNo);
        fileUploadGDS.setCellData(i, "wrkSeq", wrkSeq);
        fileUploadGDS.setCellData(i, "fileClsCd", fileClsCd);
      }
      $c.sbm.execute($p, sbm_tr_create);
    }
  }
};

// 서브미션
scwin.sbm_tr_create_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, "업로드가 완료 되었습니다.");
  udc_fielUpload.setGridClear();
  scwin.f_Retrieve();
};

// 서브미션
scwin.sbm_tr_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_ElectronicApprvList.getRowCount());
  gr_ElectronicApprvList.setFocusedCell(0, "applyDt", false);
  if (ds_ElectronicApprvList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, "조회결과가 존재하지 않습니다.");
    return;
  } else {
    apprvTitle.setValue("");
  }
};

// 서브미션
scwin.sbm_frmReqApprove_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
};
scwin.gr_ElectronicApprvList_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "fileRegYn") {
    if (ds_ElectronicApprvList.getCellData(rowIndex, "fileRegYn") > 0) {
      scwin.f_evidPopUp();
    }
  }
  if (columnId == "chkBox") {
    if (ds_ElectronicApprvList.getCellData(rowIndex, "chkBox") == "T") {
      // 작업구분에 따른 전자결제 체크 확인	
      let chkWrkClsCd1 = ds_ElectronicApprvList.getCellData(rowIndex, "wrkClsCd");
      let chkWrkClsCd2 = '';
      let countWrkClsCd = 0;
      for (t = 0; t < ds_ElectronicApprvList.getRowCount(); t++) {
        if (ds_ElectronicApprvList.getCellData(t, "chkBox") == "T") {
          chkWrkClsCd2 = ds_ElectronicApprvList.getCellData(t, "wrkClsCd");
          if (chkWrkClsCd1 != chkWrkClsCd2) {
            countWrkClsCd++;
          }
        }
      }
      if (countWrkClsCd != 0) {
        await $c.win.alert($p, "작업구분이 같은 상태의 Data 로만 전자결재 요청 가능합니다.");
        for (i = 0; i < ds_ElectronicApprvList.getRowCount(); i++) {
          ds_ElectronicApprvList.setCellData(i, "chkBox", "F");
        }
        return;
      }

      // 전자결재 상태에 따른 체크
      if (ds_ElectronicApprvList.getCellData(rowIndex, "apprvReqNo") != '') {
        let chkApprvStsCd = ds_ElectronicApprvList.getCellData(rowIndex, "apprvStsCd");
        if (chkApprvStsCd == '02') {
          await $c.win.alert($p, "선택하신 건은 전자결재 상신 상태 입니다.");
          ds_ElectronicApprvList.setCellData(rowIndex, "chkBox", "F");
          return;
        } else if (chkApprvStsCd == '04') {
          await $c.win.alert($p, "선택하신 건은 전자결재 중간승인 상태 입니다.");
          ds_ElectronicApprvList.setCellData(rowIndex, "chkBox", "F");
          return;
        } else if (chkApprvStsCd == '05') {
          await $c.win.alert($p, "선택하신 건은 전자결재 완료 상태 입니다.");
          ds_ElectronicApprvList.setCellData(rowIndex, "chkBox", "F");
          return;
        }
      }
    } else if (ds_ElectronicApprvList.getCellData(t, "chkBox") == "F") {
      // 같은 차량보험관리번호 & 순번 이면 같은 데이터 전부 다 체크 해제 해주기
      chkMgntNo = ds_ElectronicApprvList.getCellData(rowIndex, "mgntNo");
      chkWrkSeq = ds_ElectronicApprvList.getCellData(rowIndex, "wrkSeq");
    }
  }
};
scwin.gr_ElectronicApprvList_onheaderclick = async function (headerId) {
  if ("chkBox_head" == headerId) {
    for (t = 0; t < ds_ElectronicApprvList.getRowCount(); t++) {
      if (ds_ElectronicApprvList.getCellData(t, "chkBox") == "T") {
        if (ds_ElectronicApprvList.getCellData(t, "apprvReqNo") != '') {
          let chkApprvStsCd = ds_ElectronicApprvList.getCellData(t, "apprvStsCd");
          if (chkApprvStsCd == '02') {
            await $c.win.alert($p, t + "번째 행 자료는 전자결재 상신 상태 입니다.");
            ds_ElectronicApprvList.undoAll();
            return;
          } else if (chkApprvStsCd == '04') {
            await $c.win.alert($p, t + "번째 행 자료는 전자결재 중간승인 상태 입니다.");
            ds_ElectronicApprvList.undoAll();
            return;
          } else if (chkApprvStsCd == '05') {
            await $c.win.alert($p, t + "번째 행 자료는 전자결재 완료 상태 입니다.");
            ds_ElectronicApprvList.undoAll();
            return;
          }
        }
      }
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:60.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_chkNewDataYn',ref:'data:dma_condition.chkNewDataYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'최신'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'reqApplyStdDt',refDataMap:'dma_condition',style:'',id:'udc_fromToCalendar1',refEdDt:'reqApplyEndDt',edFromId:'ed_reqApplyStdDt',edToId:'ed_reqApplyEndDt',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'신청일자',titleTo:'신청일자',objTypeTo:'data',objTypeFrom:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_reqVehclNo',style:'width: 150px;',ref:'data:dma_condition.reqVehclNo',maxlength:'20'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차대번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_reqDrcrNo',style:'width: 150px;',ref:'data:dma_condition.reqDrcrNo',maxlength:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운전자명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_reqIndDistrDrvNm',style:'width: 150px;',ref:'data:dma_condition.reqIndDistrDrvNm',maxlength:'20'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속지사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_reqDeptCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_condition.reqDeptCd',chooseOptionLabel:'전체지사'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_reqWrkClsCd',style:'width: 208px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:dma_condition.reqWrkClsCd'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소유구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_reqPossessCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:dma_condition.reqPossessCd'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전자결재상태',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_reqApprvStsCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:dma_condition.reqApprvStsCd'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전자결재관리',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'전자결재요청제목',class:'req'}},{T:1,N:'xf:input',A:{style:'width: 200px;',id:'apprvTitle',class:'',mandatory:'true',title:'전자결재요청제목',objType:'ctrlBtn'}}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Request',style:'',type:'button','ev:onclick':'scwin.f_ElectricApprove'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전자결재요청'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_ElectronicApprvList',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_ElectronicApprvList',id:'gr_ElectronicApprvList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.gr_ElectronicApprvList_oncellclick','ev:onheaderclick':'scwin.gr_ElectronicApprvList_onheaderclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'chkBox_head',value:'',displayMode:'label',colSpan:'',rowSpan:'2',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'1540',inputType:'text',style:'',id:'column76',value:'기본정보',displayMode:'label',colSpan:'17',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'800',inputType:'text',style:'',id:'column26',value:'자동차보험 정보',displayMode:'label',colSpan:'8',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'640',inputType:'text',style:'',id:'column109',value:'적재물보험 정보',displayMode:'label',colSpan:'7',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'460',inputType:'text',style:'',id:'column142',value:'산재보험 내역',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column130',value:'기업포괄</br>가입여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column127',value:'특약사항',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'530',inputType:'text',style:'',id:'column124',value:'변경 및 대차 내역 정보',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column157',value:'해지</br>사유',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column148',value:'해지사유',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'400',inputType:'text',style:'',id:'column151',value:'전자결재 정보',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column77',value:'차량보험관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'신청일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'작업</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column65',value:'작업</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'지사명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'지사명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'소유구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'소유구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column53',value:'차대번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'차량형식',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'차량형식',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'최대</br>적재량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'최대</br>적재량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'차량</br>년식',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'첨부</br>파일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'시작일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column92',value:'종료일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column89',value:'대물한도',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'대물한도',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column83',value:'운전자</br>연령',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column86',value:'자차</br>가입여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column116',value:'자손</br>가입여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column113',value:'특약사항',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column110',value:'시작일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column107',value:'종료일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column104',value:'보상</br>한도',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column95',value:'보상</br>한도',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column98',value:'유리</br>가입여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column101',value:'냉동</br>가입여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column146',value:'특약사항',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column143',value:'산재작업구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column140',value:'산재</br>작업구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column137',value:'입직일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column134',value:'이직/</br>적용제외일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column125',value:'변경내역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column119',value:'변경내역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column122',value:'변경전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column164',value:'변경후',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column161',value:'변경전후데이터',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column152',value:'결재</br>요청번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column155',value:'결재</br>진행상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column173',value:'결재</br>진행상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column167',value:'결재자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'chkBox',value:'',displayMode:'label',fixColumnWidth:'true',readOnly:'false',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'mgntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkSeq',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'applyDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkClsCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkClsNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'deptCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'deptNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'possessCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'possessNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vehclNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'drcrNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vehclTypeCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vehclTypeNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'maxPayloadCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'maxPayloadNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'releaseYear',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:';color:blue;',id:'fileRegYn',value:'',displayMode:'label',class:'underline'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'carInsuranceYearStdDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'carInsuranceYearEndDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'objectLimitCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'objectLimitNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'driverAge2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'selfVehclYn2',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sfdmgVehclYn2',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'specialContractList1',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'luggageInsuranceYearStdDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'luggageInsuranceYearEndDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'guaranteeLimitCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'guaranteeLimitNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'glassYn2',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'frizYn2',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'specialContractList2',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'indDistrWrkClsCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'indDistrWrkClsNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'indDistrStdDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'indDistrEndDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'umbrellaPolicyYn2',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'specialContractList',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'chgWrkCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'chgWrkNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pastData',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'currentData',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'changeDataDetail',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cancelCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cancelNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'apprvReqNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'apprvStsCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'apprvStsNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'apprvEmpNm',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'file-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:' 첨부파일 일괄 업로드 ',class:'tit',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'첨부파일종류',class:''}},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'width: 200px;     margin-right: 50px;',allOption:'',id:'lc_fileClsCd',class:'',direction:'auto',chooseOptionLabel:'선택',ref:''},E:[{T:1,N:'xf:choices'}]}]}]}]},{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',style:'',totalFileSize:'2009715200',maxFileSize:'536870912',fileGrpSeq:'',saveButtonName:'일괄업로드',saveFn:'scwin.fileSubmit',id:'udc_fielUpload','ev:onFileUploadDone':'scwin.udc_fielUpload_onFileUploadDone'}}]}]}]}]}]}]})