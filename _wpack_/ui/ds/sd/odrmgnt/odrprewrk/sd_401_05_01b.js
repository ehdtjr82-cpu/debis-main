/*amd /ui/ds/sd/odrmgnt/odrprewrk/sd_401_05_01b.xml 107696 dc5eddc6f0571afa59fb8ff1a3e38a5f595c57469b809437cf77a292efe8e3c2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'arrvlportDt',name:'arrvlportDt'}},{T:1,N:'w2:key',A:{dataType:'text',id:'vsslCd',name:'vsslCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'portCd',name:'portCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'portcnt',name:'portcnt'}},{T:1,N:'w2:key',A:{dataType:'text',id:'cvsslMgntNo',name:'cvsslMgntNo'}},{T:1,N:'w2:key',A:{dataType:'text',id:'hblNo',name:'hblNo'}},{T:1,N:'w2:key',A:{dataType:'text',id:'mrn',name:'mrn'}},{T:1,N:'w2:key',A:{dataType:'text',id:'msn',name:'msn'}},{T:1,N:'w2:key',A:{dataType:'text',id:'hsn',name:'hsn'}},{T:1,N:'w2:key',A:{dataType:'text',id:'procClsCd',name:'procClsCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'declarDt',name:'declarDt'}},{T:1,N:'w2:key',A:{dataType:'text',id:'declarEndDt',name:'declarEndDt'}},{T:1,N:'w2:key',A:{dataType:'text',id:'regId',name:'regId'}},{T:1,N:'w2:key',A:{dataType:'text',id:'bran',name:'bran'}},{T:1,N:'w2:key',A:{dataType:'text',id:'chargeId',name:'chargeId'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_searchAttachFile',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'mrn',name:'mrn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'msn',name:'msn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'hsn',name:'hsn'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_master_onrowpositionchange','ev:oncelldatachange':'scwin.ds_master_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'selcYn',name:'selcYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'inspMthd',name:'검사통보'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvRepoYn',name:'도착;보고'}},{T:1,N:'w2:column',A:{dataType:'text',id:'procClsCd',name:'처리;구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrNo',name:'컨테이너번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chargeNm',name:'배차;담당자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'attachYn',name:'Image;여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mrn',name:'MRN'}},{T:1,N:'w2:column',A:{dataType:'text',id:'msn',name:'MSN'}},{T:1,N:'w2:column',A:{dataType:'text',id:'hsn',name:'HSN'}},{T:1,N:'w2:column',A:{dataType:'text',id:'hblNo',name:'B/L'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvBondZoneCd',name:'보세구역;코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvBondZoneNm',name:'보세구역명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'declarAdmitClsCd',name:'구;분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'declarDt',name:'신고;일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'declarSeq',name:'신고;순번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'declarNo',name:'신고번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mainMainSeq',name:'정정;차수'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transPrd',name:'운송;기한'}},{T:1,N:'w2:column',A:{dataType:'text',id:'inDtm',name:'반입일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'outDtm',name:'반출일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arrowDdCnt',name:'경과;일수'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mblNo',name:'M'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arrvlportDt',name:'입항;일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslCd',name:'선박;코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portcnt',name:'항차'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portCd',name:'항구;코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cvsslMgntNo',name:'본선;관리번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rofPicCd',name:'귀책자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mainMainRsn',name:'정정사유'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commNm',name:'품명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrCnt',name:'컨테;이너'}},{T:1,N:'w2:column',A:{dataType:'text',id:'packUnitCd',name:'포장;단위'}},{T:1,N:'w2:column',A:{dataType:'text',id:'packCnt',name:'포장;개수'}},{T:1,N:'w2:column',A:{dataType:'text',id:'totWt',name:'총중량;(KG)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mchtNm',name:'화주명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chargeNm',name:'배차;담당자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'attachYn',name:'Image;여부'}},{T:1,N:'w2:column',A:{id:'attachYnDisplay',name:'Image;여부 for display',dataType:'text'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mainMainRsnCd',name:'오류내용'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regNm',name:'보세운송신고자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sndDtm',name:'전송일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dsmbrkBondZoneCd',name:'발송지코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dsmbrkBondZoneNm',name:'발송지'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mainMainClsCd',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'mainMainRsnCd',name:'오류내용'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_loBran'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'lobranCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'lobranNm',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_port'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'COL1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL2',name:'COL2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_attach'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'attachFileId',name:'첨부파일ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFileNm',name:'첨부파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFileDesc',name:'첨부파일설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFileSiz',name:'첨부파일SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFilePath',name:'첨부파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'mrn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'msn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'hsn',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_send'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'declarDt',name:'declarDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarSeq',name:'declarSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainMainSeq',name:'mainMainSeq',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.sd.odrmgnt.odrprewrk.RetrieveBondedTransTargetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_search_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_searchAttach',action:'/ds.sd.odrmgnt.odrprewrk.RetrieveBondedTransTargetFileCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchAttachFile","key":"IN_DS1"},{"id":"ds_attach","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_attach","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_searchAttach_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_send',action:'/ds.sd.odrmgnt.odrprewrk.SaveBondedTransWholeSendCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_send","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_send_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.odrmgnt.odrprewrk.SaveBondedTransArrivalReportCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_master","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_save_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_saveFile',action:'/ds.sd.odrmgnt.odrprewrk.SaveBondedTransTargetFileCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_attach","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_saveFile_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_loBran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_port',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_port","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_port_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/cm/fw/constants/DFWConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ds/co/constants/SdConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/cm/fw/constants/DGlobalValue.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  // 세션 정보
  scwin.loginDTO = $c.data.getMemInfo($p);
  scwin.loUpperLobranCd = scwin.loginDTO.loUpperLobranCd; // 점소
  scwin.userClsCd = scwin.loginDTO.userClsCd; // 사용자구분코드(01:그룹사구분코드(01:그룹사, 02:협력업체(운송), 03:선사, 04:화주, 05:자가운송업체, 06:렌터카(고객),  (고객))
  scwin.lobranCd = scwin.loginDTO.lobranCd; // 점소명

  //	파일 업로드 위치
  scwin.systemPathKey = DFWConstants.FILE_UPLOAD_SYSTEM_PATH;
  scwin.systemPathVal = "/cm/bc/cstmrcardmgnt/cstmrcardmgnt";

  // 신고승인구분
  scwin.BONDED_TRANS_DECLAR = SdConstants.BONDED_TRANS_DECLAR; // 신고
  scwin.BONDED_TRANS_ADMIT = SdConstants.BONDED_TRANS_ADMIT; // 승인

  // EDI 구분
  scwin.EDI_DOC_DECLAR = SdConstants.EDI_DOC_DECLAR; // 신고
  scwin.EDI_DOC_ADMIT = SdConstants.EDI_DOC_ADMIT; // 승인
  scwin.EDI_DOC_MAIN_MAIN = SdConstants.EDI_DOC_MAIN_MAIN; // 정정

  // 연계 화면 URL
  scwin.TARGET_ADMIT_URL = "/ui/ds/sd/odrmgnt/odrprewrk/sd_401_05_02b.xml"; //보세운송승인등록
  scwin.TARGET_DECLAR_URL = "/ui/ds/sd/odrmgnt/odrprewrk/sd_401_05_03b.xml"; //보세운송신고등록

  // 처리구분
  scwin.PROC_CLS_NOT_SEND = SdConstants.EDI_PROC_CLS_NOT_SEND; // 미전송
  scwin.PROC_CLS_SEND_COMPLETE = SdConstants.EDI_PROC_CLS_SEND_COMPLETE; // 전송완료
  scwin.PROC_CLS_ACCEPT = SdConstants.EDI_PROC_CLS_ACCEPT; // 접수
  scwin.PROC_CLS_DENIED = SdConstants.EDI_PROC_CLS_DENIED; // 거절
  scwin.PROC_CLS_ERROR = SdConstants.EDI_PROC_CLS_ERROR; // 오류
  scwin.PROC_CLS_REPAIR = SdConstants.EDI_PROC_CLS_REPAIR; // 수리
  scwin.PROC_CLS_OK = SdConstants.EDI_PROC_CLS_OK; // 승인
  scwin.PROC_CLS_REJECT = SdConstants.EDI_PROC_CLS_REJECT; // 기각
  scwin.PROC_CLS_SUSPEND = SdConstants.EDI_PROC_CLS_SUSPEND; // 보류

  // 선택구분
  scwin.IS_SELECTED = DGlobalValue.TRUE;
  scwin.NOT_SELECTED = DGlobalValue.FALSE;

  // 조회 필드 Clear
  scwin.f_FieldClear();
  $c.gus.cfDisableKey($p);
  ed_arrvlportDt.focus();

  // 인쇄옵션, 미리보기 기본 체크되도록
  chb_printCheck.setValue("1");
  chb_previewCheck.setValue("1");

  // get 공통코드
  scwin.getCode();
  await $c.sbm.execute($p, sbm_lobran);
};

//-------------------------------------------------------------------------
// UDC값 초기화(scwin.onpageload 이후 세팅)
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 공통코드 가져오기
//-------------------------------------------------------------------------
scwin.getCode = function () {
  const codeOptions = [{
    grpCd: "OP479",
    compID: "gr_master:inspMthd"
  },
  // 그리드:검사통보
  {
    grpCd: "SD103",
    compID: "gr_master:procClsCd"
  },
  // 그리드:처리구분
  {
    grpCd: "SD139",
    compID: "gr_master:declarAdmitClsCd"
  }, {
    grpCd: "SD217",
    compID: "gr_master2:mainMainRsnCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  const gauceUtilOptions = [{
    method: "getCodeList",
    param1: "SD103",
    compID: "lc_procClsCd"
  } // 처리구분
  ];
  $c.data.setGauceUtil($p, gauceUtilOptions);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  $c.gus.cfInitHidVal($p, tbl_search);
  ed_arrvlportDt.focus();
};

//-------------------------------------------------------------------------
// 조회 : 데이터를 조회한다.
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (scwin.f_IsAllEmpty([ed_arrvlportDt, ed_vsslCd, ed_portcnt, ed_portCd, ed_cvsslMgntNo, ed_hblNo, ed_mrn, ed_msn, ed_hsn, lc_con_bran, ed_regId, ed_cntrNo, lc_procClsCd, ed_declarDt, ed_declarEndDt, ed_chargeId])) {
    await $c.gus.cfAlertMsg($p, "조회조건을 하나 이상 입력해 주십시요.");
    ed_arrvlportDt.focus();
    return;
  }
  if (!(await $c.gus.cfValidate($p, [tbl_search]))) {
    return;
  }

  // 선박, 항차, 항구는 Null 또는 같이 입려되어야 한다.
  if (!($c.gus.cfIsNull($p, ed_vsslCd.getValue()) && $c.gus.cfIsNull($p, ed_portcnt.getValue()) && $c.gus.cfIsNull($p, ed_portCd.getValue()))) {
    let msg = "<br/><br/>선박/항차/항구 조회조건은 함께 지정되어야 합니다.";
    if ($c.gus.cfIsNull($p, ed_vsslCd.getValue())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_053 + msg, ["선박코드"]);
      ed_vsslCd.focus();
      return;
    }
    if ($c.gus.cfIsNull($p, ed_portcnt.getValue())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_053 + msg, ["항차"]);
      ed_vsslCd.focus();
      return;
    }
    if ($c.gus.cfIsNull($p, ed_portCd.text)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_053 + msg, ["항구"]);
      ed_vsslCd.focus();
      return;
    }
  }

  //코드 유효성 검증
  if (!(await scwin.f_CheckHidVal([ed_vsslCd, ed_portCd, ed_regId]))) {
    return;
  }
  ds_search.set("arrvlportDt", ed_arrvlportDt.getValue().trim());
  scwin.f_SetGridFormat();
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회 : 데이터를 조회한다.
//-------------------------------------------------------------------------
scwin.f_RetrieveAttach = function () {
  if (hid_mrn.getValue() != "" && hid_mrn.getValue() != "undefined") {
    // $c.sbm.execute(sbm_searchAttach); // TODO: AS-IS도 어차피 안됨 주석처리
  }
};

//-------------------------------------------------------------------------
// 테이블 또는 Objects 중 조회조건이 하나라도 입력되었는 지 여부를 반환
//-------------------------------------------------------------------------
scwin.f_IsAllEmpty = function (inObj) {
  let objArray = scwin.f_IsArray(inObj) ? inObj : inObj.all;
  for (var i = 0; i < objArray.length; i++) {
    switch ($c.gus.cfGetElementType($p, objArray[i])) {
      case "inputCalendar":
      case "input":
      case "autoComplete":
      case "selectbox":
        if (!$c.gus.cfIsNull($p, $c.gus.cfGetValue($p, objArray[i]))) return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_CallCommonPopUp = function (paramArray, userPopGubun) {
  if ($c.gus.cfIsNull($p, paramArray.pName)) {
    paramArray.pName = "";
  }
  switch (paramArray.pSelectID) {
    case "retrievePortInfo":
      udc_port.cfCommonPopUp(scwin.portPopup_callback, paramArray.pCode, paramArray.pName, paramArray.pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch, null);
      break;
    case "retrieveUserEmpInfo":
      if (userPopGubun == "user") {
        udc_user.cfCommonPopUp(scwin.userPopup_callback, paramArray.pCode, paramArray.pName, paramArray.pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch, null);
      } else if (userPopGubun == "charge") {
        udc_charge.cfCommonPopUp(scwin.chargePopup_callback, paramArray.pCode, paramArray.pName, paramArray.pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch, null);
      }
      break;
    case "retrieveBLContainerInfo":
      udc_cntr.cfCommonPopUp(scwin.cntrPopup_callback, paramArray.pCode, paramArray.pName, paramArray.pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 항구 팝업 callback
//-------------------------------------------------------------------------
scwin.portPopup_callback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_portCd, ed_portNm);
};

//-------------------------------------------------------------------------
// 담당자 팝업 callback
//-------------------------------------------------------------------------
scwin.userPopup_callback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_regId, ed_userNm);
};

//-------------------------------------------------------------------------
// 배차 담당자 팝업 callback
//-------------------------------------------------------------------------
scwin.chargePopup_callback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_chargeId, ed_chargeNm);
};

//-------------------------------------------------------------------------
// 컨테이너 팝업 callback
//-------------------------------------------------------------------------
scwin.cntrPopup_callback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cntrNo, ed_mrn, [ed_msn, ed_hsn,,,,,, ed_hblNo]);
};

//-------------------------------------------------------------------------
// 팝업 이벤트에 따라 팝업창의 자동닫기 여부를 반환(이게 필요한가?)
//-------------------------------------------------------------------------
scwin.f_EventCheck = function () {
  if (window.event == null) {
    return 'F';
  }
  let tagName = window.event.srcElement.tagName.toUpperCase();
  if (tagName == "IMG" || tagName == "A") return 'F';else return 'T';
};

//-------------------------------------------------------------------------
// 팝업 여부 체크(필요한가 이게..?)
//-------------------------------------------------------------------------
scwin.f_CanOpenPopup = function (codeObj, nameObj) {
  if (scwin.f_EventCheck() == 'F') return true;
  if (window.event.srcElement.id == codeObj.id) {
    return $c.gus.cfCanOpenPopup($p, codeObj, nameObj);
  } else {
    return $c.gus.cfCanOpenPopup($p, nameObj, codeObj);
  }
};

//-------------------------------------------------------------------------
// Array 여부를 반환
//-------------------------------------------------------------------------
scwin.f_IsArray = function (inObj) {
  return inObj instanceof Array;
};

//-------------------------------------------------------------------------
// 코드와 Hidden 값이 같은 지 여부를 반환
//-------------------------------------------------------------------------
scwin.f_CheckHidVal = async function (inObj) {
  if (scwin.f_IsArray(inObj)) {
    for (let i = 0; i < inObj.length; i++) {
      if (!scwin.f_CheckHidVal(inObj[i])) {
        return;
      }
    }
  } else {
    let objName;
    if (inObj.validExp == null) {
      objName = "";
    } else {
      objName = "코드";
    }
    if ($c.gus.cfIsNull($p, $c.gus.cfGetValue($p, inObj))) {
      return true;
    }
    if ($c.gus.cfGetValue($p, inObj) != $c.gus.cfGetHiddenValue($p, inObj)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, objName);
      inObj.focus();
      return;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// Object 의 값을 대문자로 변환
//-------------------------------------------------------------------------
scwin.f_ToUpper = function (inObj) {
  return $c.gus.cfSetValue($p, inObj, $c.gus.cfGetValue($p, inObj).toUpperCase());
};

//-------------------------------------------------------------------------
// 선박코드팝업
//-------------------------------------------------------------------------
scwin.f_vsslPopUp = async function () {
  /* 
  if (scwin.f_EventCheck() == 'T' && !scwin.f_CanOpenPopup(codeObj,nameObj)) {
      return;
  } 
  */

  let data = {
    callbackFn: scwin.vsslPopUp_callback,
    vsslCls: "1"
  };
  let opts = {
    id: "vsslPop",
    popupName: "선명항차조회",
    width: "950px",
    height: "500px",
    title: "선명항차조회"
  };
  ed_vsslCd.setValue("");
  ed_vsslNm.setValue("");
  let ret = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/transrscconfirm/op_101_02_05p.xml?vsslCls=1", opts, data);
};

//-------------------------------------------------------------------------
// 선박코드팝업 callback
//-------------------------------------------------------------------------
scwin.vsslPopUp_callback = function (rtnList) {
  let codeVal;
  let nameVal;
  if (rtnList == null) {
    codeVal = "";
    nameVal = "";
  } else {
    codeVal = rtnList[0];
    nameVal = rtnList[14];
    ed_portcnt.setValue(rtnList[2]);
    ed_portCd.setValue(rtnList[5]);
    $c.gus.cfSetHiddenValue($p, ed_portCd, rtnList[5]);
    ed_portNm.setValue(rtnList[15]);
    $c.gus.cfSetHiddenValue($p, ed_portNm, rtnList[15]);
  }
  ed_vsslCd.setValue(codeVal);
  $c.gus.cfSetHiddenValue($p, ed_vsslCd, codeVal);
  ed_vsslNm.setValue(nameVal);
  $c.gus.cfSetHiddenValue($p, ed_vsslNm, nameVal);
};

//-------------------------------------------------------------------------
// 항구코드팝업
//-------------------------------------------------------------------------
scwin.f_portPopUp = function () {
  let codeObj = ed_portCd;
  let nameObj = ed_portNm;
  let paramArray = new Object();
  paramArray.pSelectID = "retrievePortInfo";
  paramArray.pCode = codeObj.getValue();
  paramArray.pName = nameObj.getValue();
  paramArray.pWinCloseTF = scwin.f_EventCheck();
  paramArray.pAllSearchTF = 'F';
  paramArray.pW = "735";
  scwin.f_CallCommonPopUp(paramArray);
};

//-------------------------------------------------------------------------
// 담당자 코드팝업
//-------------------------------------------------------------------------
scwin.f_userPopUp = function () {
  let paramArray = new Object();
  paramArray.pSelectID = "retrieveUserEmpInfo";
  paramArray.pCode = $c.gus.cfGetValue($p, ed_regId);
  paramArray.pName = $c.gus.cfGetValue($p, ed_userNm);
  paramArray.pWinCloseTF = scwin.f_EventCheck();
  paramArray.pAllSearchTF = 'F';
  scwin.f_CallCommonPopUp(paramArray, "user");
};

//-------------------------------------------------------------------------
// 배차담당자 코드팝업
//-------------------------------------------------------------------------
scwin.f_chargePopUp = function () {
  let paramArray = new Object();
  paramArray.pSelectID = "retrieveUserEmpInfo";
  paramArray.pCode = $c.gus.cfGetValue($p, ed_chargeId);
  paramArray.pName = $c.gus.cfGetValue($p, ed_chargeNm);
  paramArray.pWinCloseTF = scwin.f_EventCheck();
  paramArray.pAllSearchTF = 'F';
  scwin.f_CallCommonPopUp(paramArray, "charge");
};

//-------------------------------------------------------------------------
// 컨테이너번호팝업
//-------------------------------------------------------------------------
scwin.f_cntrNoPopUp = function (e, pWinCloseTF) {
  if (pWinCloseTF) {
    pWinCloseTF = "T";
  }
  let codeObj = ed_cntrNo;
  let nameObj = ed_mrn;
  let paramArray = new Object();
  paramArray.pSelectID = "retrieveBLContainerInfo";
  paramArray.pCode = $c.gus.cfGetValue($p, codeObj);
  paramArray.pName = $c.gus.cfGetValue($p, nameObj);
  paramArray.pWinCloseTF = pWinCloseTF;
  paramArray.pAllSearchTF = 'F';
  scwin.f_CallCommonPopUp(paramArray);
};

//-------------------------------------------------------------------------
// 항국 데이터셋을 리셋
//-------------------------------------------------------------------------
scwin.f_ResetPort = function (code) {
  sbm_port.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" + "&queryId=retrievePortInfo" + "&param1=" + code + "&param2=";
  $c.sbm.execute($p, sbm_port);
};

//-------------------------------------------------------------------------
// 본선관리번호가 입력되면 MRN, MSN, HSN 을 NULL
//-------------------------------------------------------------------------
scwin.f_CheckCvsslMgntNo = async function (inObj) {
  if ($c.gus.cfIsNull($p, $c.gus.cfGetValue($p, inObj))) {
    return;
  }
  if (!($c.gus.cfIsNull($p, ed_mrn.getValue()) && $c.gus.cfIsNull($p, ed_mrn.getValue()) && $c.gus.cfIsNull($p, ed_hsn.getValue()))) {
    let msg = "본선관리번호와 MRN/MSN/HSN은 동시에 입력할 수 없습니다.<br/><br/>입력된 MRN/MSN/HSN을 지우시겠습니까?";
    let ret = await $c.win.confirm($p, msg);
    if (ret) {
      ed_mrn.setValue("");
      ed_msn.setValue("");
      ed_hsn.setValue("");
    } else {
      $c.gus.cfSetValue($p, inObj, "");
    }
  }
};

//-------------------------------------------------------------------------
// MRN, MSN, HSN가 입력되면  본선관리번호를 NULL
//-------------------------------------------------------------------------
scwin.f_CheckMrnMsnHsn = async function (inObj) {
  if ($c.gus.cfIsNull($p, $c.gus.cfGetValue($p, inObj))) {
    return;
  }
  if (!$c.gus.cfIsNull($p, ed_cvsslMgntNo.getValue())) {
    let msg = "본선관리번호와 MRN/MSN/HSN은 동시에 입력할 수 없습니다.<br/><br/>입력된 본선관리번호를 지우시겠습니까?";
    let ret = await $c.win.confirm($p, msg);
    if (ret) {
      ed_cvsslMgntNo.setValue("");
    } else {
      $c.gus.cfSetValue($p, inObj, "");
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 포맷설정
//-------------------------------------------------------------------------
scwin.f_SetGridFormat = function () {
  if ($c.gus.cfIsNull($p, ed_cvsslMgntNo.getValue())) {
    gr_master.setColumnVisible("cvsslMgntNo", false);
  } else {
    gr_master.setColumnVisible("cvsslMgntNo", true);
  }
};

//-------------------------------------------------------------------------
// 보세운송승인등록
//-------------------------------------------------------------------------
scwin.f_RegistAdmit = async function () {
  let selectedCnt = scwin.f_CountSelected();
  if (selectedCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["자료"]);
    return;
  } else if (selectedCnt > 1) {
    await $c.gus.cfAlertMsg($p, "한번에 하나의 자료만 승인등록할 수 있습니다.");
    return;
  }
  let row = scwin.f_GetTopMarkRow();
  let declarAdmitClsCd = ds_master.getCellData(row, "declarAdmitClsCd");
  if (declarAdmitClsCd == scwin.BONDED_TRANS_DECLAR) {
    await $c.gus.cfAlertMsg($p, "등록된 보세운송 신고 자료는 선택할 수 없습니다.");
    return;
  }
  let url = scwin.TARGET_ADMIT_URL;
  let bondZoneCd = "";
  let bondZoneNm = "";
  let key = "";
  if (scwin.f_IsRegisted(row)) {
    await $c.gus.cfAlertMsg($p, "이미 등록된 자료입니다.");
    return;
  } else {
    bondZoneCd = ds_master.getCellData(row, "dsmbrkBondZoneCd");
    bondZoneNm = ds_master.getCellData(row, "dsmbrkBondZoneNm");
    key = scwin.f_CreatTransferKey();
    scwin.f_TransferAdmitData(key);
    url += "?bondZoneCd=" + bondZoneCd + "&bondZoneNm=" + bondZoneNm + "&key=" + key;
  }
  let paramObj = {
    bondZoneCd: bondZoneCd,
    bondZoneNm: bondZoneNm,
    key: key
  };
  $c.win.openMenu($p, "보세운송승인등록", url, "sd_401_05_02b.jsp", paramObj);
};

//-------------------------------------------------------------------------
// 보세운송신고등록
//-------------------------------------------------------------------------
scwin.f_RegistDeclar = function () {
  if (!scwin.f_CheckTransferData()) {
    return;
  }
  let url = scwin.TARGET_DECLAR_URL;
  let row = scwin.f_GetTopMarkRow();
  let bondZoneCd = ds_master.getCellData(row, "dsmbrkBondZoneCd");
  let bondZoneNm = ds_master.getCellData(row, "dsmbrkBondZoneNm");
  let key = scwin.f_CreatTransferKey();
  let cnt = scwin.f_TransferDeclarData(key);
  url += "?bondZoneCd=" + bondZoneCd + "&bondZoneNm=" + bondZoneNm + "&key=" + key + "&cnt=" + cnt;
  let paramObj = {
    bondZoneCd: bondZoneCd,
    bondZoneNm: bondZoneNm,
    key: key,
    cnt: cnt
  };
  $c.win.openMenu($p, "보세운송신고등록", url, "sd_401_05_03b.jsp", paramObj);
};

//-------------------------------------------------------------------------
// 보세운송신고등록
//-------------------------------------------------------------------------
scwin.f_OpenDetail = function (row) {
  if (row < 0) {
    return;
  }
  let url;
  let tabTitle;
  let pgmId;
  if (scwin.f_IsAdmitData(row)) {
    url = scwin.TARGET_ADMIT_URL;
    tabTitle = "보세운송승인등록";
    pgmId = "sd_401_05_02b.jsp";
  } else {
    url = scwin.TARGET_DECLAR_URL;
    tabTitle = "보세운송신고등록";
    pgmId = "sd_401_05_03b.jsp";
  }
  let declarNo = ds_master.getCellData(row, "declarNo");
  let declarDt = ds_master.getCellData(row, "declarDt");
  let declarSeq = ds_master.getCellData(row, "declarSeq");
  url += "?declarNo=" + declarNo + "&declarDt=" + declarDt + "&declarSeq=" + declarSeq;
  let paramObj = {
    declarNo: declarNo,
    declarDt: declarDt,
    declarSeq: declarSeq,
    closeCurrentTabYn: "Y"
  };
  $c.win.openMenu($p, tabTitle, url, pgmId, paramObj, {
    menuCode: declarNo,
    openAction: "select"
  }); // exist 는 기존 탭을 갱신, new 는 항상 새로, select는 동일 id 가 존재하면 선택, last: 기존 tab을 마지막 tab으로 이동후 선택
};

//-------------------------------------------------------------------------
// 현재 선택된 행의 보세운송 승인대상 데이터를 Map에 넣고 키를반환
//-------------------------------------------------------------------------
scwin.f_TransferAdmitData = function (key) {
  $c.gus.putMapValue($p, key + "_mrn", ds_master.getCellData(ds_master.getRowPosition(), "mrn"));
  $c.gus.putMapValue($p, key + "_msn", ds_master.getCellData(ds_master.getRowPosition(), "msn"));
  $c.gus.putMapValue($p, key + "_hsn", ds_master.getCellData(ds_master.getRowPosition(), "hsn"));
  $c.gus.putMapValue($p, key + "_mblNo", ds_master.getCellData(ds_master.getRowPosition(), "mblNo"));
  $c.gus.putMapValue($p, key + "_hblNo", ds_master.getCellData(ds_master.getRowPosition(), "hblNo"));
  $c.gus.putMapValue($p, key + "_commNm", ds_master.getCellData(ds_master.getRowPosition(), "commNm"));
  $c.gus.putMapValue($p, key + "_packUnitCd", ds_master.getCellData(ds_master.getRowPosition(), "packUnitCd"));
  $c.gus.putMapValue($p, key + "_packCnt", ds_master.getCellData(ds_master.getRowPosition(), "packCnt"));
  $c.gus.putMapValue($p, key + "_totWt", ds_master.getCellData(ds_master.getRowPosition(), "totWt"));
};

//-------------------------------------------------------------------------
// 현재 선택된 행의 보세운송 신고대상 데이터를 Map에 넣고 행 Count를반환
//-------------------------------------------------------------------------
scwin.f_TransferDeclarData = function (key) {
  let transferCnt = 0;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (scwin.f_IsSelected(i)) {
      transferCnt++;
      $c.gus.putMapValue($p, key + "_" + transferCnt + "_mrn", ds_master.getCellData(i, "mrn"));
      $c.gus.putMapValue($p, key + "_" + transferCnt + "_msn", ds_master.getCellData(i, "msn"));
      $c.gus.putMapValue($p, key + "_" + transferCnt + "_hsn", ds_master.getCellData(i, "hsn"));
      $c.gus.putMapValue($p, key + "_" + transferCnt + "_mblNo", ds_master.getCellData(i, "mblNo"));
      $c.gus.putMapValue($p, key + "_" + transferCnt + "_hblNo", ds_master.getCellData(i, "hblNo"));
      $c.gus.putMapValue($p, key + "_" + transferCnt + "_commNm", ds_master.getCellData(i, "commNm"));
      $c.gus.putMapValue($p, key + "_" + transferCnt + "_packUnitCd", ds_master.getCellData(i, "packUnitCd"));
      $c.gus.putMapValue($p, key + "_" + transferCnt + "_packCnt", ds_master.getCellData(i, "packCnt"));
      $c.gus.putMapValue($p, key + "_" + transferCnt + "_totWt", ds_master.getCellData(i, "totWt"));
      $c.gus.putMapValue($p, key + "_" + transferCnt + "_arvBondZoneCd", ds_master.getCellData(i, "arvBondZoneCd"));
      $c.gus.putMapValue($p, key + "_" + transferCnt + "_arvBondZoneNm", ds_master.getCellData(i, "arvBondZoneNm"));
      $c.gus.putMapValue($p, key + "_" + transferCnt + "_ucomWrkPlApprNo", ds_master.getCellData(i, "ucomWrkPlApprNo"));
    }
  }
  return transferCnt;
};

//-------------------------------------------------------------------------
// 데이터 전달을 위한 Map 키를반환
//-------------------------------------------------------------------------
scwin.f_CreatTransferKey = function () {
  return $c.date.getServerDateTime($p, "yyyyMMddHHmmss");
};

//-------------------------------------------------------------------------
// 선택된 데이터 Row Count를 반환
//-------------------------------------------------------------------------
scwin.f_CountSelected = function () {
  let cnt = 0;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (scwin.f_IsSelected(i)) {
      cnt++;
    }
  }
  return cnt;
};

//-------------------------------------------------------------------------
// 선택된 데이터 행 가운데 등록된 Row Count를 반환
//-------------------------------------------------------------------------
scwin.f_CountRegisted = function () {
  let cnt = 0;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (scwin.f_IsSelected(i) && scwin.f_IsRegisted(i)) {
      cnt++;
    }
  }
  return cnt;
};

//-------------------------------------------------------------------------
// 등록된 데이터 여부를 반환
//-------------------------------------------------------------------------
scwin.f_IsRegisted = function (row) {
  return !$c.gus.cfIsNull($p, ds_master.getCellData(row, "declarNo"));
};

//-------------------------------------------------------------------------
// 선택된 행이 전부 미등록된 데이터인지 여부를 반환
//-------------------------------------------------------------------------
scwin.f_IsAllUnRegisted = function () {
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (scwin.f_IsSelected(i)) {
      if (scwin.f_IsRegisted(i)) {
        return false;
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 현재 선택된 행의 보세운송 신고대상 데이터 검사
//-------------------------------------------------------------------------
scwin.f_CheckTransferData = async function () {
  let totCnt = scwin.f_CountSelected();
  let regCnt = scwin.f_CountRegisted();

  // 선택된 자료가 있는 지 검사
  if (totCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["자료"]);
    return false;
  }
  let admitRow = scwin.f_GetAdmitDataRow();
  if (admitRow > 0) {
    await $c.gus.cfAlertMsg($p, "선택된 자료 중 이미 [승인등록]된 자료가 있습니다.");
    ds_master.setRowPosition(admitRow);
    return false;
  }

  // 미등록 자료와 등록 자료와 함께 선택되었는 지 검사
  if (!scwin.f_IsAllUnRegisted()) {
    await $c.gus.cfAlertMsg($p, "미등록자료만 선택해주세요.");
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 선택된 데이터 가운데 승인등록된 데이터가 있는 지 여부를 반환
//-------------------------------------------------------------------------
scwin.f_GetAdmitDataRow = function () {
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (scwin.f_IsSelected(i)) {
      if (ds_master.getCellData(i, "declarAdmitClsCd") == scwin.BONDED_TRANS_ADMIT) {
        return i;
      }
    }
  }
  return 0;
};

//-------------------------------------------------------------------------
// 선택된 데이터 가운데 첫번째 데이터의 RowPosition을 반환
//-------------------------------------------------------------------------
scwin.f_GetTopMarkRow = function () {
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (scwin.f_IsSelected(i)) {
      return i;
    }
  }
  return 0;
};

//-------------------------------------------------------------------------
// 신고등록된 자료여부를 반환
//-------------------------------------------------------------------------
scwin.f_IsAdmitData = function (row) {
  console.log("[sd_401_05_01b > scwin.f_IsAdmitDta]", ds_master.getCellData(row, "declarAdmitClsCd") == scwin.BONDED_TRANS_ADMIT);
  return ds_master.getCellData(row, "declarAdmitClsCd") == scwin.BONDED_TRANS_ADMIT;
};

//-------------------------------------------------------------------------
// 선택된 행인지 여부를 반환
//-------------------------------------------------------------------------
scwin.f_IsSelected = function (row) {
  if (row < 0) {
    return false;
  }
  return ds_master.getCellData(row, "selcYn") == scwin.IS_SELECTED;
};

//-------------------------------------------------------------------------
// 미전송 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_IsNotSend = function (procClsCd) {
  return procClsCd == scwin.PROC_CLS_NOT_SEND;
};

//-------------------------------------------------------------------------
// 전송 오류 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_IsProcErr = function (procClsCd) {
  return procClsCd == scwin.PROC_CLS_ERROR;
};

//-------------------------------------------------------------------------
// 전송 기각 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_IsProcReject = function (procClsCd) {
  return procClsCd == scwin.PROC_CLS_REJECT;
};

//-------------------------------------------------------------------------
// 전송 기각 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_IsProcDenied = function (procClsCd) {
  return procClsCd == scwin.PROC_CLS_DENIED;
};

//-------------------------------------------------------------------------
// 전송 수리 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_IsProcRepair = function (procClsCd) {
  return procClsCd == scwin.PROC_CLS_REPAIR;
};

//-------------------------------------------------------------------------
// 전송 승인 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_IsProcOk = function (procClsCd) {
  return procClsCd == scwin.PROC_CLS_OK;
};

//-------------------------------------------------------------------------
// 처리구분을 반환한다.
//-------------------------------------------------------------------------
scwin.f_GetProcCls = function (row) {
  return ds_master.getCellData(row, "procClsCd");
};

//-------------------------------------------------------------------------
// 발행이 가능한 데이터인지 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_IsPrintableRow = function (row) {
  let procCls = scwin.f_GetProcCls(row);
  if (ds_master.getCellData(row, "mainMainSeq") > 0) {
    return true;
  }
  if (scwin.f_IsProcOk(procCls) || scwin.f_IsProcRepair(procCls)) {
    return true;
  }
  return false;
};

//-------------------------------------------------------------------------
// 일괄 전송
//-------------------------------------------------------------------------
scwin.f_Send = async function () {
  let dataSet = ds_master;
  let dataSet2 = ds_send;
  dataSet2.removeAll();
  if (scwin.f_CountSelected() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["자료"]);
    return false;
  }
  for (let i = 0; i < dataSet.getRowCount(); i++) {
    if (scwin.f_IsSelected(i)) {
      if (scwin.f_IsRegisted(i) && scwin.f_IsNotSend(scwin.f_GetProcCls(i))) {
        let dataArray = new Array();
        dataArray[0] = dataSet.getCellData(i, "declarDt");
        dataArray[1] = dataSet.getCellData(i, "declarSeq");
        dataArray[2] = dataSet.getCellData(i, "mainMainSeq");
        dataSet2.insertRow();
        dataSet2.setCellData(dataSet2.getRowPosition(), "declarDt", dataArray[0]);
        dataSet2.setCellData(dataSet2.getRowPosition(), "declarSeq", dataArray[1]);
        dataSet2.setCellData(dataSet2.getRowPosition(), "mainMainSeq", dataArray[2]);
      } else {
        dataSet.setCellData(i, "selcYn", scwin.NOT_SELECTED);
      }
    }
  }
  if (scwin.f_CountSelected() == 0) {
    await $c.gus.cfAlertMsg($p, "전송 대상 자료가 존재하지 않습니다.");
    return false;
  }
  let ret = await $c.win.confirm($p, "선택된 자료를 전송하시겠습니까?");
  if (ret) {
    $c.sbm.execute($p, sbm_send);
  }
};

//-------------------------------------------------------------------------
// 엑셀 Download
//-------------------------------------------------------------------------
scwin.f_Export = function () {
  if (ds_master.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  gr_master2.setColumnVisible("selcYn", false);
  const grdObj = gr_master2;
  const infoArr = [];
  const options = {
    fileName: "보세운송신고 정정 및 취하 관리대장.xlsx",
    sheetName: "보세운송신고 정정 및 취하 관리대장",
    type: "8+16"
  };
  $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  gr_master2.setColumnVisible("selcYn", true);
};

//-------------------------------------------------------------------------
// 오류 상세내역 조회 팝업
//-------------------------------------------------------------------------
scwin.f_errorPopUp = function (row) {
  let procCls = scwin.f_GetProcCls(row);
  if (!(scwin.f_IsProcErr(procCls) || scwin.f_IsProcDenied(procCls) || scwin.f_IsProcReject(procCls))) {
    return;
  }
  let declarAdmitClsCd = ds_master.getCellData(ds_master.getRowPosition(), "declarAdmitClsCd");
  let declarNo = ds_master.getCellData(ds_master.getRowPosition(), "declarNo");
  let mainMainSeq = ds_master.getCellData(ds_master.getRowPosition(), "mainMainSeq");
  let procClsCd = ds_master.getCellData(ds_master.getRowPosition(), "procClsCd");
  let docCd = scwin.f_GetDocCd(mainMainSeq, declarAdmitClsCd);
  let strUrl = "/ui/ds/sd/odrmgnt/odrprewrk/sd_401_05_04p.xml?deg=" + mainMainSeq + "&declarNo=" + declarNo + "&docCd=" + docCd + "&procClsCd=" + procClsCd;
  let opts = {
    id: "pop_usablecar",
    popupName: "보세운송오류내역상세조회",
    width: "860px",
    height: "580px"
  };
  let data = {
    deg: mainMainSeq,
    declarNo: declarNo,
    docCd: docCd,
    procClsCd: procClsCd
  };
  $c.win.openPopup($p, strUrl, opts, data);
};

//-------------------------------------------------------------------------
// EDI 문서코드를 반환
//-------------------------------------------------------------------------
scwin.f_GetDocCd = function (mainMainSeq, declarAdmitClsCd) {
  if ($c.gus.cfIsNull($p, mainMainSeq) || mainMainSeq == "0") {
    return declarAdmitClsCd == scwin.BONDED_TRANS_DECLAR ? scwin.EDI_DOC_DECLAR : scwin.EDI_DOC_ADMIT;
  } else {
    return scwin.EDI_DOC_MAIN_MAIN;
  }
};

//-------------------------------------------------------------------------
// 발행(발행은 무조건 0, fax 전송은 1인데, fax 전송이 없어짐.)
//-------------------------------------------------------------------------
scwin.f_OzReport = async function (gubun) {
  if (scwin.f_CountSelected() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["자료"]);
    return false;
  }

  //첫번째 발행대상을 찾는다.
  let targetRow = 0,
    targetDeclarNo = "";
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (!scwin.f_IsSelected(i)) {
      continue;
    }
    if (!scwin.f_IsRegisted(i)) {
      await $c.gus.cfAlertMsg($p, "등록된 자료만 발행하실 수 있습니다.");
      ds_master.setRowPosition(i);
      return;
    } else {
      targetRow = i;
      targetDeclarNo = ds_master.getCellData(i, "declarNo");
      break;
    }
  }
  let ayrow = new Array();
  let rerow = new Array();
  let realrow = 0;
  for (let row = 0; row < ds_master.getRowCount(); row++) {
    let farow = new Array();
    if (ds_master.getCellData(row, "selcYn") == "1") {
      let c = 0;
      for (let brow = 0; brow < ayrow.length; brow++) {
        if (ayrow[brow - 1] == ds_master.getCellData(row, "declarNo")) {
          c = 1;
          //break;					
        }
      }
      if (c == 0) {
        ayrow[realrow] = ds_master.getCellData(row, "declarNo");
        farow[0] = ds_master.getCellData(row, "declarNo");
        farow[1] = ds_master.getCellData(row, "declarDt");
        farow[2] = ds_master.getCellData(row, "declarSeq");
        rerow[realrow] = farow;
        realrow += 1;
      }
    }
  }
  for (let i = 0; i < rerow.length; i++) {
    // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
    let row = i;
    let odiName = scwin.f_IsAdmitData(row) ? "sd_401_05_02" : "sd_401_05_01";
    let formParamObj = {};
    let viewParamObj = {};
    viewParamObj.viewer = {};
    let reportname;
    if (gubun == 0) {
      viewParamObj.viewer.useprogressbar = "false";
      viewParamObj.viewer.ismultidocassub = "false";
      viewParamObj.viewer.smartframesize = "true";
      viewParamObj.viewer.showtree = "true";
      formParamObj.dispName0 = "";
      formParamObj.dispName1 = "신청인용";
      formParamObj.dispName2 = "반입신고용";
      formParamObj.dispName3 = "보관용";
      if (scwin.f_IsAdmitData(row)) {
        reportname = "/ds/sd/odrmgnt/odrprewrk/sd_401_05_02_1.ozr;" + "/ds/sd/odrmgnt/odrprewrk/sd_401_05_02_2.ozr;" + "/ds/sd/odrmgnt/odrprewrk/sd_401_05_02_3.ozr";
      } else {
        reportname = "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_1.ozr;" + "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_2.ozr;" + "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_3.ozr";
      }
    } else {
      // FAX버튼 눌렀을때
      // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
      viewParamObj.viewer.useprogressbar = "false";
      viewParamObj.viewer.ismultidocassub = "false";
      viewParamObj.viewer.smartframesize = "true";
      viewParamObj.viewer.showtree = "false";
      if (scwin.f_IsAdmitData(row)) {
        reportname = "/ds/sd/odrmgnt/odrprewrk/sd_401_05_02_2.ozr";
      } else {
        reportname = "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_2.ozr";
      }
    }

    // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
    let data = {
      reportName: reportname,
      odiName: odiName,
      odiParam: {
        sysPath: "dbl.ds.sd.odrmgnt.odrprewrk",
        declarDt: rerow[row][1],
        declarSeq: rerow[row][2]
      },
      viewerParam: {
        viewParamObj
      },
      formParam: {
        formParamObj
      }
    };
    let opts = {
      id: "ozReportPopup",
      popupName: "오즈 리포트",
      modal: true,
      type: "browserPopup",
      width: 1000,
      height: 600,
      title: "오즈 리포트"
    };
    if (chb_printCheck.getValue() == "1" && chb_previewCheck.getValue() == "1") {
      await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
    } else if (chb_previewCheck.getValue() == "1") {
      await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
    } else if (chb_printCheck.getValue() == "1") {
      //출력
      //await $c.ext.printOzReport(data);
      await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
    }
  }
};

//-------------------------------------------------------------------------
// FAX2
//-------------------------------------------------------------------------
scwin.f_OzReport2 = async function () {
  if (scwin.f_CountSelected() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["자료"]);
    return false;
  }

  // 첫번째 발행대상을 찾는다.
  let targetRow = 0,
    targetDeclarNo = "";
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (!scwin.f_IsSelected(i)) {
      continue;
    }
    if (!scwin.f_IsRegisted(i)) {
      await $c.gus.cfAlertMsg($p, "등록된 자료만 발행하실 수 있습니다.");
      ds_master.setRowPosition(i);
      return;
    } else {
      targetRow = i;
      targetDeclarNo = ds_master.getCellData(i, "declarNo");
      break;
    }
  }

  // FAX2용
  let paramString = "";
  let tmpRow = "";
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    let declarDt = "";
    let declarSeq = "";
    let declarDt2 = "";
    let declarSeq2 = "";
    if (ds_master.getCellData(i, "selcYn") == "1") {
      declarDt = ds_master.getCellData(i, "declarDt");
      declarSeq = ds_master.getCellData(i, "declarSeq");

      // 순번 자리수
      if (declarSeq.length == 1) {
        declarSeq = "00" + declarSeq;
      } else if (declarSeq.length == 2) {
        declarSeq = "0" + declarSeq;
      }
      let errCnt = 0; // 중복자료 확인변수

      for (let j = i + 1; j < ds_master.getRowCount(); j++) {
        if (ds_master.getCellData(j, "selcYn") == "1") {
          declarDt2 = ds_master.getCellData(j, "declarDt");
          declarSeq2 = ds_master.getCellData(j, "declarSeq");

          // 순번 자리수2
          if (declarSeq2.length == 1) {
            declarSeq2 = "00" + declarSeq2;
          } else if (declarSeq2.length == 2) {
            declarSeq2 = "0" + declarSeq2;
          }
          if (declarDt == declarDt2) {
            if (declarSeq == declarSeq2) {
              errCnt++;
            }
          }
        }
      }
      if (errCnt == 0) {
        paramString += declarDt;
        paramString += declarSeq;
      }
      tmpRow = i;
    }
  }

  // 신고(0) => sd_401_05_01_f.ozr
  // 승인(1) => sd_401_05_02_f.ozr

  let declarAdmitClsCd = ds_master.getCellData(tmpRow, "declarAdmitClsCd");
  let reportname;
  let odiName;
  let viewParamObj = {};
  viewParamObj.viewer = {};
  if (declarAdmitClsCd == 0) {
    // 신고
    reportname = "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_f.ozr";
    odiName = "sd_401_05_01_f";
  } else if (declarAdmitClsCd == 1) {
    // 승인
    reportname = "/ds/sd/odrmgnt/odrprewrk/sd_401_05_02_f.ozr";
    odiName = "sd_401_05_02_f";
  }
  viewParamObj.viewer.useprogressbar = "false";
  viewParamObj.viewer.ismultidocassub = "false";
  viewParamObj.viewer.smartframesize = "true";
  viewParamObj.viewer.showtree = "false";
  formParamObj = {};

  // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  let data = {
    reportName: reportname,
    odiName: odiName,
    odiParam: {
      sysPath: "dbl.ds.sd.odrmgnt.odrprewrk",
      cond: paramString
    },
    viewerParam: {
      viewParamObj
    },
    formParam: {
      formParamObj
    }
  };

  // let opts = {
  //     id: "ozReportPopup",
  //     popupName: "오즈 리포트",
  //     modal: true,
  //     type: "browserPopup",
  //     width: 1000,
  //     height: 600,
  //     title: "오즈 리포트"
  // };

  // await $c.win.openPopup("/ui/cm/zz/ozreportPopup.xml", opts, data);

  var opts = {
    type: 'viewer',
    // viewer, print, download
    printMode: 'view',
    // silent, view
    exportMode: 'view',
    // silent, view
    exportFilename: '보세운송신고필증',
    exportPath: 'C:\\OZExport',
    exportFormat: 'pdf'
  };
  $c.ext.openOzReport($p, data, opts);
};

//-------------------------------------------------------------------------
// FAX3_황창기_20150729_반입일시가 있고 반입일시에 괄호가 풀려있는건만 출력_김시영부장님 요청
//-------------------------------------------------------------------------
scwin.f_OzReport3 = async function () {
  if (scwin.f_CountSelected() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["자료"]);
    return false;
  }

  //첫번째 발행대상을 찾는다.
  let targetRow = 0,
    targetDeclarNo = "";
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (!scwin.f_IsSelected(i)) {
      continue;
    }
    if (!scwin.f_IsRegisted(i)) {
      await $c.gus.cfAlertMsg($p, "등록된 자료만 발행하실 수 있습니다.");
      ds_master.setRowPosition(i);
      return;
    } else {
      targetRow = i;
      targetDeclarNo = ds_master.getCellData(i, "declarNo");
      break;
    }
  }

  // FAX3용
  let paramString = "";
  let tmpRow = "";
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    let declarDt = "";
    let declarSeq = "";
    let declarDt2 = "";
    let declarSeq2 = "";
    if (ds_master.getCellData(i, "selcYn") == "1") {
      declarDt = ds_master.getCellData(i, "declarDt");
      declarSeq = ds_master.getCellData(i, "declarSeq");
      // 순번 자리수
      if (declarSeq.length == 1) {
        declarSeq = "00" + declarSeq;
      } else if (declarSeq.length == 2) {
        declarSeq = "0" + declarSeq;
      }
      let errCnt = 0; // 중복자료 확인변수
      for (let j = i + 1; j < ds_master.getRowCount(); j++) {
        if (ds_master.getCellData(j, "selcYn") == "1") {
          declarDt2 = ds_master.getCellData(j, "declarDt");
          declarSeq2 = ds_master.getCellData(j, "declarSeq");

          // 순번 자리수2
          if (declarSeq2.length == 1) {
            declarSeq2 = "00" + declarSeq2;
          } else if (declarSeq2.length == 2) {
            declarSeq2 = "0" + declarSeq2;
          }
          if (declarDt == declarDt2) {
            if (declarSeq == declarSeq2) {
              errCnt++;
            }
          }
        }
      }
      if (errCnt == 0) {
        // 20150731_황창기_반입일시가 있고 반입일시에 괄호가 풀려있는건만 출력_김시영부장님 요청					
        if (!$c.gus.cfIsNull($p, ds_master.getCellData(i, "inDtm")) && ds_master.getCellData(i, "inDtm").substr(0, 1) != '(') {
          paramString += declarDt;
          paramString += declarSeq;
        } else {
          // 출력 대상에서 제외된건들은 체크박스 체크품
          ds_master.setCellData(i, "selcYn", scwin.NOT_SELECTED);
        }
      }
      tmpRow = i;
    }
  }
  if ($c.gus.cfIsNull($p, paramString)) {
    await $c.gus.cfAlertMsg($p, "반입이 되지 않아 첨부된 보세운송신고필증이 없습니다.");
    return;
  }

  // 신고(0) => sd_401_05_01_f.ozr
  // 승인(1) => sd_401_05_02_f.ozr
  let declarAdmitClsCd = ds_master.getCellData(tmpRow, "declarAdmitClsCd");
  let reportname;
  let odiName;
  let viewParamObj = {};
  viewParamObj.viewer = {};
  if (declarAdmitClsCd == 0) {
    // 신고
    reportname = "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_f2.ozr";
    odiName = "sd_401_05_01_f2";
  } else if (declarAdmitClsCd == 1) {
    // 승인
    reportname = "/ds/sd/odrmgnt/odrprewrk/sd_401_05_02_f2.ozr";
    odiName = "sd_401_05_02_f2";
  }
  viewParamObj.viewer.useprogressbar = "false";
  viewParamObj.viewer.ismultidocassub = "false";
  viewParamObj.viewer.smartframesize = "true";
  viewParamObj.viewer.showtree = "false";

  // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  let data = {
    reportName: reportname,
    odiName: odiName,
    odiParam: {
      sysPath: "dbl.ds.sd.odrmgnt.odrprewrk",
      cond: paramString
    },
    viewerParam: {
      viewParamObj
    },
    formParam: {
      formParamObj
    }
  };
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    sysPath: "dbl.ds.sd.odrmgnt.odrprewrk",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_save = async function () {
  let ret = await $c.win.confirm($p, MSG_CM_CRM_001); // 저장하시겠습니까?
  if (ret) {
    debugger;
    if (ds_master.getModifiedIndex().length > 0) {
      if ($c.gus.cfValidate($p, [gr_master])) {
        $c.sbm.execute($p, sbm_save);
      }
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["도착보고"]); // @은(는) 변경된 사항이 없습니다.
    }
  }
};

//-------------------------------------------------------------------------
// 파일을 업로드한다. (TODO)
//-------------------------------------------------------------------------
scwin.f_Submit = function () {
  let intFileCnt = 0;

  // TODO: cfUploadFile( formObj , fileUploadGDS, "uploadComplete" );   
};

//-------------------------------------------------------------------------
// function name : uploadComplete
// function desc : Upload File complete 
//-------------------------------------------------------------------------
scwin.uploadComplete = function () {
  // TODO: fileUploadGDS는 수정 필요
  fileUploadGDS.SortExpr = "+fileId";
  fileUploadGDS.Sort();
  for (i = 0; i < fileUploadGDS.getRowCount(); i++) {
    ds_attach.insertRow();
    if (ds_attach.getRowCount() != 1) {
      let fltNxtSeq = Number(ds_attach.getCellData(ds_attach.getRowCount() - 1, "attachFileId")) + 1;
      let strNxtSeq = "000" + fltNxtSeq;
      strNxtSeq = strNxtSeq.substr(strNxtSeq.length - 4, strNxtSeq.length);
      ds_attach.setCellData(ds_attach.getRowCount() - 1, "attachFileId", strNxtSeq);
    } else {
      ds_attach.setCellData(ds_attach.getRowCount() - 1, "attachFileId", "0001");
    }
    ds_attach.setCellData(ds_attach.getRowCount() - 1, "attachFileNm", fileUploadGDS.getCellData(i, "filename")); // 파일명
    ds_attach.setCellData(ds_attach.getRowCount() - 1, "attachFileDesc", fileUploadGDS.getCellData(i, "filename")); // 파일설명
    ds_attach.setCellData(ds_attach.getRowCount() - 1, "attachFileSiz", fileUploadGDS.getCellData(i, "fileSize")); // 파일SIZE
    ds_attach.setCellData(ds_attach.getRowCount() - 1, "attachFilePath", fileUploadGDS.getCellData(i, "filepath")); // 파일경로
    ds_attach.setCellData(ds_attach.getRowCount() - 1, "mrn", ds_master.getCellData(ds_master.getRowPosition(), "mrn"));
    ds_attach.setCellData(ds_attach.getRowCount() - 1, "msn", ds_master.getCellData(ds_master.getRowPosition(), "msn"));
    ds_attach.setCellData(ds_attach.getRowCount() - 1, "hsn", ds_master.getCellData(ds_master.getRowPosition(), "hsn"));
  }
  scwin.f_saveFile(1);
};
scwin.f_saveFile = async function (gubun) {
  let str = "";
  if (ds_attach.getRowCount() == 0) {
    return;
  }
  for (let i = 0; i < ds_attach.getRowCount(); i++) {
    if (ds_attach.getCellData(i, "mrn") == "") {
      await $c.win.alert($p, "2첨부된 내용이 없습니다. Upload후 저장해 주세요");
      return false;
      break;
    }
  }
  if (gubun == 1) {
    str = "저장";
  } else {
    str = "삭제";
  }
  let ret = await $c.win.confirm($p, str + " 하시겠습니까?");
  if (ret) {
    // $c.sbm.execute(sbm_saveFile); // AS-IS도 어차피 안됨 주석처리
  }
};

//-------------------------------------------------------------------------
// 부산지사(6AA)는 조회기간 필수입력처리
//-------------------------------------------------------------------------
scwin.f_changeMandi = function (iVal) {
  if (iVal == 1) {
    udc_fromToCalendar.setMandatoryFrom("true");
    udc_fromToCalendar.setMandatoryTo("true");
  } else {
    udc_fromToCalendar.setMandatoryFrom("false");
    udc_fromToCalendar.setMandatoryTo("false");
  }

  // cfRefreshMandSign(); TODO: 이놈 뭐하는 놈이지?
};

//-------------------------------------------------------------------------
// 조회 성공
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = function (e) {
  let rowCnt = ds_master.getRowCount();
  tbx_totalRows.setValue(rowCnt);

  /** 조회 후 데이터에 의존하여 변경되는 그리드 셀속성들 정리 */
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if ($c.util.isEmpty($p, ds_master.getCellData(i, "declarNo"))) {
      ds_master.setCellData(i, "procClsCd", "");
    }
    if (ds_master.getCellData(i, "declarSeq") == "0") {
      ds_master.setCellData(i, "declarSeq", "");
    }
    if (ds_master.getCellData(i, "procClsCd") == "E" || ds_master.getCellData(i, "procClsCd") == "D" || ds_master.getCellData(i, "procClsCd") == "2") {
      gr_master.setCellStyle(i, "declarNo", "text-decoration", "underline");
      gr_master.setCellStyle(i, "declarNo", "cursor", "pointer");
      gr_master2.setCellStyle(i, "declarNo", "text-decoration", "underline");
      gr_master2.setCellStyle(i, "declarNo", "cursor", "pointer");
    }
    if (ds_master.getCellData(i, "mainMainSeqNo") == "0") {
      ds_master.setCellData(i, "mainMainSeqNo", "");
    }
    if (!$c.gus.cfIsNull($p, ds_master.getCellData(i, "arrvlportDt")) && ds_master.getCellData(i, "arrvlportDt").length < 8) {
      gr_master.setCellDisplayFormat(i, "arrvlportDt", "yy/MM/dd");
    }
    if (ds_master.getCellData(i, "attachYn") == "0") {
      ds_master.setCellData(i, "attachYnDisplay", "미첨부");
      gr_master2.setCellColor(i, "attachYnDisplay", "red");
    } else {
      ds_master.setCellData(i, "attachYnDisplay", "첨부");
      gr_master2.setCellColor(i, "attachYnDisplay", "blue");
    }
  }
  ds_master.initRowStatus();
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p)) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
  } else {
    gr_master.focus();
  }
};

//-------------------------------------------------------------------------
// 파일 조회 성공
//-------------------------------------------------------------------------
scwin.sbm_searchAttach_submitdone = function (e) {};

//-------------------------------------------------------------------------
// 일괄전송 성공
//-------------------------------------------------------------------------
scwin.sbm_send_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 저장 성공
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 파일업로드 성공
//-------------------------------------------------------------------------
scwin.sbm_saveFile_submitdone = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 지사 조회 성공
//-------------------------------------------------------------------------
scwin.sbm_lobran_submitdone = function (e) {
  if (scwin.lobranCd == "4AA") {
    // 인천지사의 경우 전체로 표시
    lc_con_bran.setValue("");
  } else {
    lc_con_bran.setValue(scwin.lobranCd);
  }
};

//-------------------------------------------------------------------------
// 항구 조회 성공
//-------------------------------------------------------------------------
scwin.sbm_port_submitdone = function (e) {
  if (ds_port.getRowCount() > 0) {
    $c.gus.cfSetValue($p, ed_portCd, ds_port.getCellData(ds_port.getRowPosition(), "COL1"));
    $c.gus.cfSetValue($p, txt_portNm, ds_port.getCellData(ds_port.getRowPosition(), "COL2"));
    $c.gus.cfSetHiddenValue($p, ed_portCd, ds_port.getCellData(ds_port.getRowPosition(), "COL1"));
    $c.gus.cfSetHiddenValue($p, txt_portNm, ds_port.getCellData(ds_port.getRowPosition(), "COL2"));
  }
};

//-------------------------------------------------------------------------
// ds_master row 위치 변경
//-------------------------------------------------------------------------
scwin.ds_master_onrowpositionchange = function (info) {
  let row = info.newRowIndex;
  if (row < 0) return;
  if (ds_master.getCellData(row, 'inspMthd') == 'S' && ds_master.getCellData(row, 'arvRepoYn') == 0) {
    gr_master.setColumnReadOnly('arvRepoYn', false);
  } else {
    gr_master.setColumnReadOnly('arvRepoYn', true);
  }
  hid_mrn.setValue(ds_master.getCellData(row, "mrn"));
  hid_msn.setValue(ds_master.getCellData(row, "msn"));
  hid_hsn.setValue(ds_master.getCellData(row, "hsn"));
  scwin.f_RetrieveAttach();
};

//-------------------------------------------------------------------------
// gr_master 그리드 oncellclick
//-------------------------------------------------------------------------
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  let row = rowIndex;
  let colid = columnId;
  if (colid == "declarNo") {
    if (!$c.gus.cfIsNull($p, ds_master.getCellData(row, colid))) {
      scwin.f_errorPopUp(row);
    }
  }
  hid_mrn.setValue(ds_master.getCellData(row, "mrn"));
  hid_msn.setValue(ds_master.getCellData(row, "msn"));
  hid_hsn.setValue(ds_master.getCellData(row, "hsn"));
  scwin.f_RetrieveAttach();
};

//-------------------------------------------------------------------------
// gr_master 그리드 oncelldblclick
//-------------------------------------------------------------------------
scwin.gr_master_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  let row = rowIndex;
  let colid = columnId;
  if (row < 0) {
    return;
  }
  if (!scwin.f_IsRegisted(row)) {
    $c.gus.cfAlertMsg($p, "등록되지 않은 자료입니다.");
    return;
  } else {
    if (colid != "arvRepoYn") {
      scwin.f_OpenDetail(row);
    }
  }
};

//-------------------------------------------------------------------------
// ds_master oncelldatachange
//-------------------------------------------------------------------------
scwin.ds_master_oncelldatachange = function (info) {
  // console.log("[sd_401_05_01b > scwin.ds_master_oncelldatachange] : ", info);
  let colid = info.colID;
  let row = info.rowIndex;
  if (colid == "selcYn" || colid == "attachYn") {
    let declarNo = ds_master.getCellData(row, "declarNo");
    if (!$c.gus.cfIsNull($p, declarNo)) {
      for (let i = 0; i < ds_master.getRowCount(); i++) {
        if (row == i) {
          continue;
        }
        if (declarNo == ds_master.getCellData(i, "declarNo")) {
          ds_master.setCellData(i, colid, info.newValue);
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// btn_search onclick
//-------------------------------------------------------------------------
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 컨테이너 UDC onblurCodeEvent
//-------------------------------------------------------------------------
scwin.udc_cntr_onblurCodeEvent = function (e) {
  // 검색조건 컨테이너번호 입력 체크
  if (!$c.gus.cfIsNull($p, ed_cntrNo.getValue().trim())) {
    scwin.f_cntrNoPopUp(e, 'T');
  }
};

//-------------------------------------------------------------------------
// 지사별 onchange
//-------------------------------------------------------------------------
scwin.lc_con_bran_onchange = function (info) {
  if (lc_con_bran.getValue() == "6AA") {
    scwin.f_changeMandi(1);
  } else {
    scwin.f_changeMandi(0);
  }
};

//-------------------------------------------------------------------------
// 신고번호 displayFormmatter
//-------------------------------------------------------------------------
scwin.declarNoDisplayFormatter = function (value) {
  if (!$c.gus.cfIsNull($p, value)) {
    const raw = String(value);
    const format = [{
      len: 5
    },
    // XXXXX
    {
      len: 6
    },
    // XXXXXX
    {
      len: 1
    },
    // X
    {
      len: 8
    } // XXXXXXXX
    ];
    let index = 0;
    return format.map(f => {
      const part = raw.substr(index, f.len);
      index += f.len;
      return part.padEnd(f.len, " ");
    }).join("-");
  } else {
    return "";
  }
};

//-------------------------------------------------------------------------
// 검색조건 휴지통 버튼 onclick
//-------------------------------------------------------------------------
scwin.btn_reset_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
};

//-------------------------------------------------------------------------
// 발행 버튼 onclick
//-------------------------------------------------------------------------
scwin.btn_print_onclick = function (e) {
  scwin.f_OzReport(0);
};

//-------------------------------------------------------------------------
// 항차, 본선관리번호, B/L 번호 onkeyup
//-------------------------------------------------------------------------
scwin.alphaUpper = function (e) {
  if (!e?.target) return;
  const v = e.target.value || "";
  const u = v.toUpperCase();
  if (v !== u) e.target.value = u;
};

//-------------------------------------------------------------------------
// 본선관리번호 onchange
//-------------------------------------------------------------------------
scwin.ed_cvsslMgntNo_onchange = function (info) {
  scwin.f_CheckCvsslMgntNo(ed_cvsslMgntNo);
};

//-------------------------------------------------------------------------
// mrn onchange
//-------------------------------------------------------------------------
scwin.ed_mrn_onchange = function (info) {
  scwin.f_CheckMrnMsnHsn(ed_mrn);
};

//-------------------------------------------------------------------------
// msn onchange
//-------------------------------------------------------------------------
scwin.ed_msn_onchange = function (info) {
  scwin.f_CheckMrnMsnHsn(ed_msn);
};

//-------------------------------------------------------------------------
// hsn onchange
//-------------------------------------------------------------------------
scwin.ed_hsn_onchange = function (info) {
  scwin.f_CheckMrnMsnHsn(ed_hsn);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'true',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:65px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:8%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 45px;'}},{T:1,N:'xf:group',A:{style:'width:8%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입항일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_arrvlportDt',style:'',displayFormat:'yyyy/MM/dd',ref:'data:ds_search.arrvlportDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_vsslCd',objTypeCode:'data',validExpCode:'선박:no',maxlengthCode:'4',nameId:'ed_vsslNm',objTypeName:'data',id:'udc_vssl',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.f_vsslPopUp','ev:onclickEvent':'scwin.f_vsslPopUp','ev:onblurNameEvent':'scwin.f_vsslPopUp',refDataCollection:'ds_search',code:'vsslCd',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_portcnt',placeholder:'',style:'width:150px;',objType:'data',maxlength:'11',allowChar:'a-zA-Z0-9',ref:'data:ds_search.portcnt','ev:onkeyup':'scwin.alphaUpper'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항구 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_portCd',objTypeCode:'data',validExpCode:'항구:no',maxlengthCode:'5',UpperFlagCode:'1',nameId:'ed_portNm',maxlengthName:'30',id:'udc_port',selectID:'retrievePortInfo','ev:onblurCodeEvent':'scwin.f_portPopUp','ev:onblurNameEvent':'scwin.f_portPopUp','ev:onclickEvent':'scwin.f_portPopUp',code:'portCd',refDataCollection:'ds_search',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width:204px;',maxlength:'8',allowChar:'a-zA-Z0-9',ref:'data:ds_search.cvsslMgntNo','ev:onkeyup':'scwin.alphaUpper','ev:onchange':'scwin.ed_cvsslMgntNo_onchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' ',id:'ed_hblNo',placeholder:'',style:'width: 230px;',objType:'data',maxlength:'20',allowChar:'a-zA-Z0-9',ref:'data:ds_search.hblNo','ev:onkeyup':'scwin.alphaUpper'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'width:150px;',objType:'data',maxlength:'11',allowChar:'a-zA-Z0-9',ref:'data:ds_search.mrn','ev:onkeyup':'scwin.alphaUpper','ev:onchange':'scwin.ed_mrn_onchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MSN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_msn',placeholder:'',style:'width:70px;',objType:'data',allowChar:'0-9',maxlength:'4',ref:'data:ds_search.msn','ev:onchange':'scwin.ed_msn_onchange'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'HSN',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_hsn',placeholder:'',style:'width:70px;',objType:'data',maxlength:'4',allowChar:'0-9',ref:'data:ds_search.hsn','ev:onchange':'scwin.ed_hsn_onchange'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지사별 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_con_bran',search:'start',style:'width:204px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:ds_search.bran',chooseOptionLabel:'전체','ev:onchange':'scwin.lc_con_bran_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_loBran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자ID ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_regId',maxlengthCode:'8',nameId:'ed_userNm',id:'udc_user',maxlengthName:'20',objTypeCode:'data',objTypeName:'data',selectID:'retrieveUserEmpInfo','ev:onblurCodeEvent':'scwin.f_userPopUp','ev:onclickEvent':'scwin.f_userPopUp','ev:onblurNameEvent':'scwin.f_userPopUp',refDataCollection:'ds_search',code:'regId',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveBLContainerInfo',codeId:'ed_cntrNo',validTitle:'',nameId:'',style:'width: %;height: px;',id:'udc_cntr',hideName:'true','ev:onclickEvent':'scwin.f_cntrNoPopUp','ev:onblurCodeEvent':'scwin.udc_cntr_onblurCodeEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'처리구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' col6',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_procClsCd',style:'width: 230px;',submenuSize:'auto',ref:'data:ds_search.procClsCd',chooseOptionLabel:'전체',visibleRowNum:'13'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신고일자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'ds_search',refEdDt:'declarEndDt',refStDt:'declarDt',style:'',edFromId:'ed_declarDt',edToId:'ed_declarEndDt',titleTo:'조회종료일',titleFrom:'조회시작일',validChkYn:'Y',mandatoryFrom:'Y',mandatoryTo:'Y'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차담당자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_chargeId',objTypeCode:'data',maxlengthCode:'8',nameId:'ed_chargeNm',id:'udc_charge',maxlengthName:'20',objTypeName:'data',selectID:'retrieveUserEmpInfo','ev:onblurCodeEvent':'scwin.f_chargePopUp','ev:onclickEvent':'scwin.f_chargePopUp','ev:onblurNameEvent':'scwin.f_chargePopUp',refDataCollection:'ds_search',code:'chargeId',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',templateYn:'N',id:'udc_topGrdBtn',gridID:'gr_master',gridDownFn:'scwin.f_Export',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_master_oncellclick','ev:oncelldblclick':'scwin.gr_master_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'checkbox',removeBorderStyle:'false',width:'50',value:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'검사통보'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'도착보고'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'100',value:'처리구분'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'컨테이너번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'배차담당자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'Image여부',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'MRN',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'MSN',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'HSN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column47',value:'B/L',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'보세구역코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column43',value:'보세구역명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'신고일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'신고순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'190',inputType:'text',style:'',id:'column35',value:'신고번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'정정차수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'운송기한',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'반입일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'반출일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'경과일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'M B/L',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'입항일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'선박코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column59',value:'항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column57',value:'항구코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column51',value:'본선관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'귀책자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'column55',value:'정정사유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column73',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'컨테이너',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column65',value:'포장단위',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column67',value:'포장개수',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column69',value:'총중량(KG)',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selcYn',inputType:'checkbox',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inspMthd',inputType:'select',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvRepoYn',inputType:'checkbox',readOnly:'true',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'procClsCd',inputType:'select',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chargeNm',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachYn',inputType:'checkbox',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',readOnly:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'msn',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hsn',inputType:'text',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblNo',inputType:'text',textAlign:'left',sortable:'true',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvBondZoneCd',inputType:'text',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvBondZoneNm',inputType:'text',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarAdmitClsCd',inputType:'select',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarDt',inputType:'text',readOnly:'true',sortable:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarSeq',inputType:'text',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarNo',inputType:'text',readOnly:'true',sortable:'true',displayFormatter:'scwin.declarNoDisplayFormatter',width:'190'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mainMainSeqNo',inputType:'text',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transPrd',inputType:'text',readOnly:'true',sortable:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inDtm',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outDtm',inputType:'text',readOnly:'true',sortable:'true',displayFormat:'yyyy/MM/dd HH:mm',calendarValueType:'yearMonthDateTime',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrowDdCnt',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mblNo',inputType:'text',readOnly:'true',hidden:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrvlportDt',inputType:'text',readOnly:'true',sortable:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslCd',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portcnt',inputType:'text',readOnly:'true',sortable:'true',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portCd',inputType:'text',readOnly:'true',sortable:'true',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rofPicCd',inputType:'text',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mainMainRsn',inputType:'text',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrCnt',inputType:'text',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'packUnitCd',inputType:'text',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'packCnt',inputType:'text',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totWt',inputType:'text',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###.###',excelCellType:'number',excelFormat:'#,##0.##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column109',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column108',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column107',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column106',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column104',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column103',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column102',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column101',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column100',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column98',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column95',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column94',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column92',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column91',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column89',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column88',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column86',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column83',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'sum_cntrCnt',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'cntrCnt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'sum_packCnt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'packCnt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'sum_totWt',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'totWt\')',dataType:'number',displayFormat:'#,###.###'}}]}]}]},{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master2',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'display: none;',visibleRowNum:'10',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'날짜',width:'105'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'화주명',width:'82'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'배차담당자',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'Image여부',width:'93'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'MRN',width:'100'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column49',value:'MSN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column47',value:'HSN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column45',value:'B/L 번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'보세구역코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column41',value:'보세구역명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column39',value:'신고번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'운송기한',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column35',value:'반입일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column33',value:'반출일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'85',inputType:'text',style:'',id:'column31',value:'경과일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'230',inputType:'text',style:'',id:'column29',value:'오류내용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'230',inputType:'text',style:'',id:'column23',value:'발생사유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'귀책자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column27',value:'보세운송신고자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column63',value:'전송일시',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'declarDt',inputType:'text',readOnly:'true',sortable:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtNm',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chargeNm',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachYnDisplay',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',readOnly:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'msn',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hsn',inputType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblNo',inputType:'text',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvBondZoneCd',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvBondZoneNm',inputType:'text',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarNo',inputType:'text',readOnly:'true',sortable:'true',displayFormatter:'scwin.declarNoDisplayFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transPrd',inputType:'text',readOnly:'true',sortable:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inDtm',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outDtm',inputType:'calendar',readOnly:'true',sortable:'true',dataType:'date',calendarValueType:'yearMonthDateTime',displayFormat:'yyyy/MM/dd HH:mm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrowDdCnt',inputType:'text',readOnly:'true',sortable:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mainMainRsnCd',inputType:'select',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mainMainRsn',inputType:'text',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rofPicCd',inputType:'text',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regNm',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sndDtm',inputType:'calendar',sortable:'true',dataType:'date',calendarValueType:'yearMonthDateTimeSec',displayFormat:'yyyy/MM/dd HH:mm:SS',excelFormat:'yyyy/MM/dd HH:mm:SS'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column83',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column82',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column81',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column80',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column79',value:'합계'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column78',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column77',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column76',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column75',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column74',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column73',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column72',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column71',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column70',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column69',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column68',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column67',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column66',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column65',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column64',value:''}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_send',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_Send'},E:[{T:1,N:'xf:label',E:[{T:3,text:'일괄전송'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_registDeclar',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_RegistDeclar'},E:[{T:1,N:'xf:label',E:[{T:3,text:'보세운송신고'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_registAdmit',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_RegistAdmit'},E:[{T:1,N:'xf:label',E:[{T:3,text:'보세운송승인'}]}]}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print1',label:'저장',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.f_OzReport2'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Fax전송'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print2',label:'저장',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.f_OzReport3'},E:[{T:1,N:'xf:label',E:[{T:3,text:'보세운송신고필증(반입완료)'}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_printCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',value:'1',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',value:'1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print',label:'저장',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.btn_print_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'file-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'첨부파일',style:'',tagname:'h3'}}]}]},{T:1,N:'w2:udc_fileMultiUpload',A:{fileGrpSeq:'',filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',maxFileSize:'536870912',style:'',totalFileSize:'2009715200',id:'gr_attachFile',subDir:'/cm/bc/cstmrcardmgnt/cstmrcardmgnt',saveButtonName:'업로드'}}]},{T:1,N:'xf:input',A:{id:'hid_mrn',style:'display:none;'}},{T:1,N:'xf:input',A:{id:'hid_msn',style:'display:none;'}},{T:1,N:'xf:input',A:{id:'hid_hsn',style:'display:none;'}}]}]}]}]}]})