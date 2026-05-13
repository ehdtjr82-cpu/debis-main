/*amd /ui/ds/fs/bilg/fs_204_02_31b.xml 65000 b936985c0ddc99c1fbaf36936534bb5f72348b5fbbc492a09c0dca663301dd2b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ds_queryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'deptCdGubun',name:'청구물류부서코드, 매출물류부서코드 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'청구(매출)물류부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDtNoGubun',name:'오더일자/오더번호 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrStDt',name:'오더시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrEndDt',name:'오더종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'onWrkPlCd',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'offWrkPlCd',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellYn',name:'매출구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tsCvsslMgntNo',name:'TS본번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellClntClsCd',name:'거래처구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgVolStd',name:'청구물량기준',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfClsCd',name:'자가구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mcomAssgnClsCd',name:'배정구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarPicId',name:'배차담당자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'orderPicId',name:'오더담당자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCdI',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCdO',name:'수입수출내수구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderEachWorkVolumeAggregationList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odr20fCnt',name:'오더물량20f',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odr20eCnt',name:'오더물량20e',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odr40fCnt',name:'오더물량40f',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odr40eCnt',name:'오더물량40e',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrReeferCnt',name:'오더물량RF',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNotReeferCnt',name:'오더물량DC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloc20fCnt',name:'배차(작업)물량20f',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloc20eCnt',name:'배차(작업)물량20e',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloc40fCnt',name:'배차(작업)물량40f',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloc40eCnt',name:'배차(작업)물량40e',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrk20fCnt',name:'완료(협정)물량20f',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrk20eCnt',name:'완료(협정)물량20e',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrk40fCnt',name:'완료(협정)물량40f',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrk40eCnt',name:'완료(협정)물량40e',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteDt',name:'오더완료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'오더담당',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicNm',name:'배차담당',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sell20fCnt',name:'매출물량20F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sell20eCnt',name:'매출물량20E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sell40fCnt',name:'매출물량40F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sell40eCnt',name:'매출물량40E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgCnt',name:'청구물량청구',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unBilgCnt',name:'청구물량미청구',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsNm',name:'자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'Certi No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billNo',name:'Bill No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inout',name:'최종반출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDtt',name:'도착일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'Door상세명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsNm',name:'당사배정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'모선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BL-NO(Booking)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsNm',name:'수입/수출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslCd',name:'모선2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslNm',name:'모선명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortcnt',name:'항차2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sell20fCntColor',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sell20eCntColor',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sell40fCntColor',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sell40eCntColor',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unBilgCntColor',name:'name57',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_odrDt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ed_odrStDt',name:'From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ed_odrEndDt',name:'To',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_queryConditionDTO',action:'/ds.fs.bilg.bilgrsltsmgnt.RetrieveOrderEachWorkVolumeAggregationListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_ds_queryConditionDTO","key":"IN_DS1"},{"id":"ds_orderEachWorkVolumeAggregationList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_orderEachWorkVolumeAggregationList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_queryConditionDTO_submit','ev:submitdone':'','ev:submiterror':'scwin.sbm_queryConditionDTO_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',type:'text/javascript',scopeVariable:'DsConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = function () {};

/**
 * @event 
 * @name onUdcCompleted 
 * @description UDC 완료
 */
scwin.onUdcCompleted = async function () {
  const param = [{
    compID: "acb_lc_selfClsCd",
    method: "getCodeList",
    param1: "SD114",
    param2: 1,
    param3: DsConstants.ODR_ALL,
    outputFields: ["CD", "CD_NM"]
  }, {
    compID: "acb_lc_selfClsCd",
    method: "getCodeList",
    param1: "SD114",
    param2: 1,
    param3: DsConstants.ODR_CNTR,
    outputFields: ["CD", "CD_NM"]
  }];
  $c.data.setDsCommonUtil($p, param, () => {
    acb_lc_selfClsCd.addItem('전체', '', null, 0);
    acb_lc_selfClsCd.setSelectedIndex(0);
  });
  const codeOptions = [{
    grpCd: "SD113",
    compID: "acb_lc_odrKndCd"
  }, {
    grpCd: "LO111",
    compID: "acb_lc_sellClntClsCd"
  }, {
    grpCd: "SD144",
    compID: "acb_lc_mcomAssgnClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, () => {
    acb_lc_odrKndCd.addItem('전체', '', null, 0);
    acb_lc_odrKndCd.setSelectedIndex(0);
    acb_lc_sellClntClsCd.addItem('전체', '', null, 0);
    acb_lc_sellClntClsCd.setSelectedIndex(0);
    acb_lc_mcomAssgnClsCd.addItem('전체', '', null, 0);
    acb_lc_mcomAssgnClsCd.setSelectedIndex(0);
  });
};

/**
 * @event 
 * @name ondataload 
 * @description 코드 완료
 */
scwin.ondataload = async function () {
  await scwin.globalVars();
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  const vCurDate = $c.date.getServerDateTime($p, 'yyyyMMdd'); // 서버를 기준으로 현재 날짜 반환
  scwin.vQryStDt = vCurDate.slice(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
  scwin.vQryEndDt = vCurDate;
  scwin.CvsslMgntNo = $c.data.getParameter($p, "cvsslMgntNo") ?? '';
  scwin.Flag = $c.data.getParameter($p, "flag") ?? '';
  scwin.OdrKndCd = $c.data.getParameter($p, "odrKndCd") ?? '';
  scwin.ArvIntendDt = $c.data.getParameter($p, "arvIntendDt") ?? '';
  scwin.DptIntendDt = $c.data.getParameter($p, "dptIntendDt") ?? '';
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  scwin.f_SetDefaultData();
  if (scwin.CvsslMgntNo != "undefined" && scwin.CvsslMgntNo != null && scwin.CvsslMgntNo != "") {
    acb_lc_odrDtNoGubun.setSelectedIndex(0); // 오더일자/오더번호 구분
    acb_lc_odrKndCd.setValue(scwin.OdrKndCd); // 오더일자/오더번호 구분

    if (scwin.OdrKndCd == "CT") {
      ds_queryConditionDTO.set("tsCvsslMgntNo", scwin.CvsslMgntNo);
    } else {
      ds_queryConditionDTO.set("cvsslMgntNo", scwin.CvsslMgntNo);
    }
    ;
    ds_queryConditionDTO.set("ordKndCd", scwin.OdrKndCd);
    ds_queryConditionDTO.set("odrStDt", scwin.ArvIntendDt);
    ds_queryConditionDTO.set("odrEndDt", scwin.DptIntendDt);
    scwin.btn_retrieve_onclick();
  }
  ;
};

/**
 * @method 
 * @name f_SetDefaultData 
 * @description 기본값 세팅
 */
scwin.f_SetDefaultData = function () {
  // 컬럼 배경색 설정
  let columnIds = ['odr20fCnt', 'odr20eCnt', 'alloc20fCnt', 'alloc20eCnt', 'wrk20fCnt', 'wrk20eCnt', 'sell20fCnt', 'sell20eCnt', 'bilgCnt', 'unBilgCnt'];
  for (let i = 0; i < columnIds.length; i++) {
    gr_orderEachWorkVolumeAggregationList.setColumnBackgroundColor(columnIds[i], '#D4E4E3');
  }
  ;

  // 컬럼 수정 설정
  let colCnt = gr_orderEachWorkVolumeAggregationList.getTotalCol();
  for (let i = 0; i < colCnt; i++) {
    gr_orderEachWorkVolumeAggregationList.setColumnReadOnly(i, true);
  }
  ;
  acb_lc_deptCdGubun.setSelectedIndex(0); // 청구물류부서코드, 매출물류부서코드 구분
  acb_lc_odrDtNoGubun.setSelectedIndex(0); // 오더일자/오더번호 구분

  div_qryConKnd1.show(""); // 오더일자
  div_qryConKnd2.hide(); // 오더번호

  dma_odrDt.set("ed_odrStDt", scwin.vQryStDt); // 전표일자시작
  dma_odrDt.set("ed_odrEndDt", scwin.vQryEndDt); // 전표일자종료

  acb_lc_odrKndCd.setSelectedIndex(0); // 오더종류
  acb_lc_sellYn.setSelectedIndex(0); // 전체,매출오더,무매출 오더
  acb_lc_bilgVolStd.setSelectedIndex(0); // 청구물량기준

  // TODO - com_code UDC의 이름 입력란 IME 한글입력 설정
  // cfSetIMEModeActiveObjects([
  //     txt_bilgLodeptNm, 
  //     txt_bilgClntNm, 
  //     txt_onWrkPlNm, 
  //     txt_offWrkPlNm, 
  //     txt_lineNm, 
  //     txt_alloccarPicNm
  // ]);  // IME 한글입력

  acb_lc_deptCdGubun.focus();
};

/**
 * @method 
 * @name f_openPopUp
 * @description 본선관리번호검색 팝업창 띄우기
 */
scwin.f_openPopUp = async function (iVal) {
  let args = new Array();
  if (iVal == 1) {
    args[0] = ed_cvsslMgntNo.getValue(); //본선관리번호
  } else if (iVal == 2) {
    args[0] = ed_tsCvsslMgntNo.getValue(); //TS본번
  }
  ;
  args[1] = ""; //수출입구분코드

  let url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
  let options = {
    width: 1200,
    height: 620,
    type: "browserPopup",
    popupName: "본선관리번호검색화면"
  };
  const rtnValues = await $c.win.openPopup($p, url, options, args);
  if (rtnValues != null) {
    if (iVal == 1) {
      ed_cvsslMgntNo.setValue(rtnValues[0]); //본선관리번호
    } else if (iVal == 2) {
      ed_tsCvsslMgntNo.setValue(rtnValues[0]); //TS본번
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name f_RunExcel
 * @description 엑셀다운로드
 */
scwin.f_RunExcel = function () {
  let rowCnt = ds_orderEachWorkVolumeAggregationList.getRowCount();
  if (rowCnt < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  }
  ;
  const infoArr = [];
  const options = {
    fileName: "오더별 작업물량 집계표(CNTR).xlsx"
  };
  $c.data.downloadGridViewExcel($p, gr_orderEachWorkVolumeAggregationList, options, infoArr);
};

/**
 * @method 
 * @name f_openCommonPopUp
 * @description 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
 * @param {Number} disGubun
 * @param {String} pCode
 * @param {String} pName
 * @param {String} pClose
 * @param {String} pAllSearch
 */
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let callBackFunc;
  let udcComp = {};
  let pDispCnt = null;
  let pHidden = null;
  switch (disGubun) {
    case 1:
      // 청구부서코드
      callBackFunc = scwin.callbackBilgClnt;
      udcComp = udc_bilgLodept;
      break;
    case 2:
      // 청구처
      callBackFunc = scwin.callbackBilgLodept;
      udcComp = udc_bilgClnt;
      break;
    case 4:
      // 출발작업장
      callBackFunc = scwin.callbackOnWrkPl;
      udcComp = udc_onWrkPl;
      break;
    case 5:
      // Line
      callBackFunc = scwin.callbackLine;
      pDispCnt = "2";
      pHidden = "3,4,5,6,7,8,9,10";
      udcComp = udc_line;
      break;
    case 6:
      // 도착작업장
      callBackFunc = scwin.callbackOffWrkPl;
      udcComp = udc_offWrkPl;
      break;
    case 7:
      // 배차담당자
      callBackFunc = scwin.callbackAlloccarPic;
      udcComp = udc_alloccarPic;
      break;
    case 8:
      // 오더담당자
      callBackFunc = scwin.callbackOrderPic;
      udcComp = udc_orderPic;
      break;
    default:
      break;
  }
  ;
  await udcComp.cfCommonPopUp(callBackFunc, pCode, pName, pClose, pDispCnt, null, null, pHidden, null, null, null, null, null, null, pAllSearch, null, null);
};

/**
 * @method 
 * @name callbackBilgClnt
 * @description 청구처 팝업 콜백
 */
scwin.callbackBilgClnt = function (rtnList) {
  // 매입거래처코드, 매입거래처명
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLodeptCd, txt_bilgLodeptNm);
};

/**
 * @method 
 * @name callbackBilgLodept
 * @description 청구부서코드 팝업 콜백
 */
scwin.callbackBilgLodept = function (rtnList) {
  // 청구부서코드, 청구부서명
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgClntNo, txt_bilgClntNm);
};

/**
 * @method 
 * @name callbackOnWrkPl
 * @description 출발작업장 팝업 콜백
 */
scwin.callbackOnWrkPl = function (rtnList) {
  // 작업장코드, 작업장명
  $c.gus.cfSetReturnValue($p, rtnList, ed_onWrkPlCd, txt_onWrkPlNm);
};

/**
 * @method 
 * @name callbackLine
 * @description LINE 팝업 콜백
 */
scwin.callbackLine = function (rtnList) {
  // LINE코드, LINE명
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd, txt_lineNm);
};

/**
 * @method 
 * @name callbackOffWrkPl
 * @description 도착작업장 팝업 콜백
 */
scwin.callbackOffWrkPl = function (rtnList) {
  // 작업장코드, 작업장명
  $c.gus.cfSetReturnValue($p, rtnList, ed_offWrkPlCd, txt_offWrkPlNm);
};

/**
 * @method 
 * @name callbackAlloccarPic
 * @description 배차담당자 팝업 콜백
 */
scwin.callbackAlloccarPic = function (rtnList) {
  // 사번, 성명
  $c.gus.cfSetReturnValue($p, rtnList, ed_alloccarPicId, txt_alloccarPicNm);
};

/**
 * @method 
 * @name callbackOrderPic
 * @description 오더담당자 팝업 콜백
 */
scwin.callbackOrderPic = function (rtnList) {
  // 사번, 성명
  $c.gus.cfSetReturnValue($p, rtnList, ed_orderPicId, txt_orderPicNm);
};

/**
 * @method 
 * @name f_chkOpenCommonPopUp
 * @description 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함
 * @param {Object} inObj
 * @param {Object} pairObj
 * @param {Number} disGubun
 * @param {Boolean} isCode
 */
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  pairObj.setValue("");

  // 검색어 세팅
  let pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

/**
 * @event 
 * @name upperFlag 
 * @description 소문자 입력 시 대문자로 변경
 */
scwin.upperFlag = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-----------------------------------------------------------------------------
//    G A U C E   C O M P O N E N T' S   E V E N T S
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name sbm_queryConditionDTO_submitdone
 * @description Submission 요청 전 선처리 return false시 submission 수행 안함
 */
scwin.sbm_queryConditionDTO_submit = function (e) {
  let preData = {
    "deptCdGubun": acb_lc_deptCdGubun.getValue(),
    // 청구물류부서코드, 매출물류부서코드 구분
    "bilgLodeptCd": ed_bilgLodeptCd.getValue(),
    // 청구(매출)물류부서코드
    "bilgClntNo": ed_bilgClntNo.getValue(),
    // 청구거래처번호
    "odrDtNoGubun": acb_lc_odrDtNoGubun.getValue(),
    // 오더일자/오더번호 구분
    "odrStDt": dma_odrDt.get("ed_odrStDt"),
    // 오더시작일자
    "odrEndDt": dma_odrDt.get("ed_odrEndDt"),
    // 오더종료일자
    "odrNo": ed_odrNo.getValue(),
    // 오더번호
    "onWrkPlCd": ed_onWrkPlCd.getValue(),
    // 출발작업장
    "offWrkPlCd": ed_offWrkPlCd.getValue(),
    // 도착작업장
    "odrKndCd": acb_lc_odrKndCd.getValue(),
    // 오더종류
    "sellYn": acb_lc_sellYn.getValue(),
    // 매출구분
    "lineCd": ed_lineCd.getValue(),
    // LINE
    "cvsslMgntNo": ed_cvsslMgntNo.getValue(),
    // 본선관리번호
    "tsCvsslMgntNo": ed_tsCvsslMgntNo.getValue(),
    // TS본번
    "sellClntClsCd": acb_lc_sellClntClsCd.getValue(),
    // 거래처구분
    "bilgVolStd": acb_lc_bilgVolStd.getValue(),
    // 청구물량기준
    "selfClsCd": acb_lc_selfClsCd.getValue(),
    // 자가구분
    "mcomAssgnClsCd": acb_lc_mcomAssgnClsCd.getValue(),
    // 배정구분
    "alloccarPicId": ed_alloccarPicId.getValue(),
    // 배차담당자
    "orderPicId": ed_orderPicId.getValue() // 오더담당자
  };
  dma_ds_queryConditionDTO.setJSON(preData);
};

/**
 * @event 
 * @name sbm_queryConditionDTO_submitdone
 * @description Response Status 코드 값이 정상 일 경우 동작
 */
scwin.sbm_queryConditionDTO_submitdone = async function (e) {
  // 총 조회건수 표시
  let rowCnt = ds_orderEachWorkVolumeAggregationList.getRowCount();
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  }
  ;
  totalRows.setValue(rowCnt);
};

/**
 * @event 
 * @name sbm_queryConditionDTO_submitdone
 * @description Response Status 코드가 오류 (200 미만 300 이상) 일 경우 동작.
 */
scwin.sbm_queryConditionDTO_submiterror = function (e) {};

/**
 * @event 
 * @name btn_retrieve_onclick
 * @description 조회버튼 클릭 이벤트
 */
scwin.btn_retrieve_onclick = async function (e) {
  // f_RetrieveOrderEachWorkVolumeAggregationList
  // 오더별작업물량집계표 CNTR 조회

  // 오더일자/오더번호 구분
  if (acb_lc_odrDtNoGubun.getValue() == "DT") {
    if (!(await $c.gus.cfValidate($p, [ed_odrStDt, ed_odrEndDt]))) return;
    if (!$c.gus.cfIsAfterDate($p, dma_odrDt.get("ed_odrStDt"), dma_odrDt.get("ed_odrEndDt"))) {
      $c.gus.cfAlertMsg($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
      ed_odrStDt.focus();
      return;
    }
    ;
  } else {
    if (!(await $c.gus.cfValidate($p, [ed_odrNo]))) return;
  }
  ;

  // 수출입구분
  if (chb_impExpDomesticClsCdI.getValue() == "T") {
    dma_ds_queryConditionDTO.set("impExpDomesticClsCdI", "I");
  }
  if (chb_impExpDomesticClsCdO.getValue() == "T") {
    dma_ds_queryConditionDTO.set("impExpDomesticClsCdO", "O");
  }
  ;

  // gr_orderEachWorkVolumeAggregationList.ReDraw = "false";
  const retObj = await $c.sbm.execute($p, sbm_queryConditionDTO);
  if (retObj.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    await scwin.sbm_queryConditionDTO_submitdone(retObj);
  }
  ;
};

/**
 * @event 
 * @name btn_img_PopUp3_onclick
 * @description 오더번호 검색버튼 클릭 이벤트
 */
scwin.btn_img_PopUp3_onclick = async function (e) {
  // f_openOdrNoPopUp - 오더번호검색 팝업창 띄우기

  let args = [];
  args[0] = ""; //오더번호

  let url = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_26p.xml";
  let options = {
    popupName: '오더번호검색',
    width: 1200,
    height: 510,
    type: "browserPopup"
  };
  const rtnValues = await $c.win.openPopup($p, url, options, args);
  if (rtnValues != null) {
    ed_odrNo.setValue(rtnValues[0]); // 오더번호
  }
  ;
};

/**
 * @event 
 * @name btn_cvsslMgntNo_onclick
 * @description 본선관리번호 검색버튼 클릭 이벤트
 */
scwin.btn_cvsslMgntNo_onclick = function (e) {
  scwin.f_openPopUp(1);
};

/**
 * @event 
 * @name btn_tsCvsslMgntNo_onclick
 * @description TS본번 검색버튼 클릭 이벤트
 */
scwin.btn_tsCvsslMgntNo_onclick = function (e) {
  scwin.f_openPopUp(2);
};

/**
 * @event 
 * @name udc_bilgLodept_onclickEvent
 * @description 청구부서코드 팝업
 */
scwin.udc_bilgLodept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgLodeptCd.getValue(), txt_bilgLodeptNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_bilgClnt_onclickEvent
 * @description 청구처 팝업
 */
scwin.udc_bilgClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_bilgClntNo.getValue(), txt_bilgClntNm.getValue(), 'F', 'F');
};

/**
 * @event 
 * @name udc_onWrkPl_onclickEvent
 * @description 출발작업장 팝업
 */
scwin.udc_onWrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_onWrkPlCd.getValue(), txt_onWrkPlNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_onWrkPl_onclickEvent
 * @description 도착작업장 팝업
 */
scwin.udc_offWrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_offWrkPlCd.getValue(), txt_offWrkPlNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_line_onclickEvent
 * @description LINE 팝업
 */
scwin.udc_line_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_lineCd.getValue(), txt_lineNm.getValue(), 'F', 'F');
};

/**
 * @event 
 * @name udc_alloccarPic_onclickEvent
 * @description 배차담당자 팝업
 */
scwin.udc_alloccarPic_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_alloccarPicId.getValue(), txt_alloccarPicNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_orderPic_onclickEvent
 * @description 오더담당자 팝업
 */
scwin.udc_orderPic_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, ed_orderPicId.getValue(), txt_orderPicNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name btn_fieldClear_onclick
 * @description 초기화버튼 클릭
 */
scwin.btn_fieldClear_onclick = function (e) {
  // 검색영역 Field Clear함.(f_InitObjects);
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};

/**
 * @event 
 * @name acb_lc_odrDtNoGubun_onchange
 * @description 오더일자/오더번호 사용자가 선택 항목을 변경할 경우 발생.
 */
scwin.acb_lc_odrDtNoGubun_onchange = function (info) {
  if (acb_lc_odrDtNoGubun.getValue() == "NO") {
    div_qryConKnd1.hide();
    div_qryConKnd2.show("");
  } else {
    div_qryConKnd1.show("");
    div_qryConKnd2.hide();
  }
  ;
};

/**
 * @event 
 * @name udc_bilgLodept_onblurCodeEvent
 * @description 매출/청구 물류부서 code 포커스를 잃었을 때 발생.
 */
scwin.udc_bilgLodept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, txt_bilgLodeptNm, 1);
};

/**
 * @event 
 * @name udc_bilgClnt_onblurCodeEvent
 * @description 청구처 code 포커스를 잃었을 때 발생.
 */
scwin.udc_bilgClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, txt_bilgClntNm, 2);
};

/**
 * @event 
 * @name udc_bilgClnt_onblurCodeEvent
 * @description 출발작업장 code 포커스를 잃었을 때 발생.
 */
scwin.udc_onWrkPl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_onWrkPlCd, txt_onWrkPlNm, 4);
};

/**
 * @event 
 * @name udc_bilgClnt_onblurCodeEvent
 * @description 도착작업장 code 포커스를 잃었을 때 발생.
 */
scwin.udc_offWrkPl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_offWrkPlCd, txt_offWrkPlNm, 6);
};

/**
 * @event 
 * @name udc_line_onblurCodeEvent
 * @description Line code 포커스를 잃었을 때 발생.
 */
scwin.udc_line_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, txt_lineNm, 5);
};

/**
 * @event 
 * @name udc_alloccarPic_onblurCodeEvent
 * @description 배차담당자 포커스를 잃었을 때 발생.
 */
scwin.udc_alloccarPic_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_alloccarPicId, txt_alloccarPicNm, 7);
};

/**
 * @event 
 * @name udc_orderPic_onblurCodeEvent
 * @description 오더담당자 포커스를 잃었을 때 발생.
 */
scwin.udc_orderPic_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_orderPicId, txt_orderPicNm, 8);
};

/**
 * @event 
 * @name gr_orderEachWorkVolumeAggregationList_oncelldblclick
 * @description 셀이 더블 클릭된 경우 발생
 */
scwin.gr_orderEachWorkVolumeAggregationList_oncelldblclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "odrNo") {
    let strOrderDetailUrl = DsConstants.URL_CONTAINER_ORDER_WORK_PRESENTDETAIL;
    let paramData = {
      "odrNo": ds_orderEachWorkVolumeAggregationList.getCellData(rowIndex, 'odrNo')
    };
    $c.win.openMenu($p, "오더별컨테이너작업현황", '/ui' + strOrderDetailUrl, "as_102_01_06b", paramData);
  }
  ;
};

/**
 * @method 
 * @name gridFormat
 * @description grid customFormatter
 */
scwin.gridFormat = function (data, formattedData, rowIndex, colIndex) {
  let colID = this.getColumnID(colIndex);
  switch (colID) {
    case 'sell20fCnt':
    case 'sell20eCnt':
    case 'sell40fCnt':
    case 'sell40eCnt':
    case 'unBilgCntColor':
      let fontColor = this.getCellData(rowIndex, colID + 'Color');
      this.setCellColor(rowIndex, colID, fontColor);
      if (data == "0") return "";else return formattedData;
    default:
      // zeroNotDisplay
      if (data == "0") return "";else return formattedData;
  }
  ;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_deptCdGubun',search:'start',style:'width:105px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'매출물류부서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SELL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'청구물류부서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BILG'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'img_PopUp1',style:'',codeId:'ed_bilgLodeptCd',nameId:'txt_bilgLodeptNm',id:'udc_bilgLodept','ev:onclickEvent':'scwin.udc_bilgLodept_onclickEvent',selectID:'retrieveOpDeptCdInfo','ev:onblurCodeEvent':'scwin.udc_bilgLodept_onblurCodeEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4',maxlengthName:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_impExpDomesticClsCdI',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'F'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_impExpDomesticClsCdO',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'F'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'img_PopUp2',style:'',nameId:'txt_bilgClntNm',codeId:'ed_bilgClntNo',id:'udc_bilgClnt','ev:onclickEvent':'scwin.udc_bilgClnt_onclickEvent',selectID:'retrieveClntInfo','ev:onblurCodeEvent':'scwin.udc_bilgClnt_onblurCodeEvent',allowCharCode:'0-9',maxlengthCode:'6',validTitle:'매입거래처',UpperFlagCode:'0',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'acb_lc_odrDtNoGubun',search:'start',style:'width:85px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'','ev:onchange':'scwin.acb_lc_odrDtNoGubun_onchange',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'NO'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'div_qryConKnd1'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'ed_odrStDt',refDataMap:'dma_odrDt',style:'',id:'udc_odrDt',refEdDt:'ed_odrEndDt',edFromId:'ed_odrStDt',edToId:'ed_odrEndDt',objTypeFrom:'Data',mandatoryFrom:'true',objTypeTo:'Data',mandatoryTo:'true',titleTo:'오더종료일자',titleFrom:'오더시작일자'}}]},{T:1,N:'xf:group',A:{class:'form-group',id:'div_qryConKnd2',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width: 150px;',title:'오더번호',mandatory:'true',maxlength:'13',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.upperFlag'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_img_PopUp3',style:'',type:'button','ev:onclick':'scwin.btn_img_PopUp3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장(구간)',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'img_PopUp4',style:'',hideName:'Y',nameId:'txt_onWrkPlNm',codeId:'ed_onWrkPlCd',selectID:'retrieveWrkPlInfo',id:'udc_onWrkPl','ev:onclickEvent':'scwin.udc_onWrkPl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_onWrkPl_onblurCodeEvent',maxlengthCode:'5',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthName:'50'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'~',class:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'img_PopUp6',style:'',hideName:'Y',nameId:'txt_offWrkPlNm',codeId:'ed_offWrkPlCd',id:'udc_offWrkPl','ev:onclickEvent':'scwin.udc_offWrkPl_onclickEvent',selectID:'retrieveWrkPlInfo','ev:onblurCodeEvent':'scwin.udc_offWrkPl_onblurCodeEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',maxlengthName:'50'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_odrKndCd',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'img_PopUp5',style:'',nameId:'txt_lineNm',codeId:'ed_lineCd',id:'udc_line','ev:onclickEvent':'scwin.udc_line_onclickEvent',selectID:'retrieveLineInfo','ev:onblurCodeEvent':'scwin.udc_line_onblurCodeEvent',maxlengthCode:'5',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width:120px;',maxlength:'8','ev:onkeyup':'scwin.upperFlag',title:'본선관리번호',mandatory:'true',allowChar:'a-zA-Z0-9'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:' TS본번',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_tsCvsslMgntNo',placeholder:'',style:'width:120px;',title:'TS본번',maxlength:'8',allowChar:'a-zA-Z0-9',mandatory:'true','ev:onkeyup':'scwin.upperFlag'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_tsCvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_tsCvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_sellClntClsCd',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가/배정구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group',style:'width: 230px;'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'acb_lc_selfClsCd',class:'',allOption:'',chooseOption:'',ref:'',sortOption:'value',sortMethod:'ascending'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'acb_lc_mcomAssgnClsCd',class:'',allOption:'',chooseOption:'',ref:'',visibleRowNum:'10'},E:[{T:1,N:'w2:choices'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구물량기준',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_bilgVolStd',search:'start',style:'width:145px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'일치'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'불일치'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_sellYn',search:'start',style:'width:145px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'매출오더'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'무매출오더'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차담당자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'img_PopUp7',style:'',nameId:'txt_alloccarPicNm',codeId:'ed_alloccarPicId',selectID:'retrieveUserInfo',id:'udc_alloccarPic','ev:onclickEvent':'scwin.udc_alloccarPic_onclickEvent','ev:onblurCodeEvent':'scwin.udc_alloccarPic_onblurCodeEvent',allowCharCode:'0-9',UpperFlagCode:'0',maxlengthCode:'6',maxlengthName:'20'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더담당자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'img_PopUp8',style:'',selectID:'retrieveUserInfo',codeId:'ed_orderPicId',nameId:'txt_orderPicNm',id:'udc_orderPic','ev:onclickEvent':'scwin.udc_orderPic_onclickEvent','ev:onblurCodeEvent':'scwin.udc_orderPic_onblurCodeEvent',allowCharCode:'0-9',maxlengthCode:'6',UpperFlagCode:'0',maxlengthName:'20'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{class:'info-list row',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차물량 : 최초 운송단계 출발기준',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'완료물량 : 최종 운송단계 도착기준',style:'',tagname:'p'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'f_RunExcel',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',btnUser:'Y',gridID:'gr_orderEachWorkVolumeAggregationList'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_orderEachWorkVolumeAggregationList',id:'gr_orderEachWorkVolumeAggregationList',style:'',visibleRowNum:'12',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_orderEachWorkVolumeAggregationList_oncelldblclick',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'오더<br/>종류',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'오더번호',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'구간',width:'280',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'오더물량',width:'420',colSpan:'6',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'배차(작업)물량',width:'280',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'완료(협정)물량',width:'280',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'LINE',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'청구거래처',width:'140',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'오더완료일',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'오더담당',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',value:'배차담당',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column76',value:'매출물량',displayMode:'label',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column73',value:'청구물량',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',value:'매출금액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'매입금액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',value:'자가구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'Certi No',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'Bill No',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'최종반출',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'출발일시',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'도착일시',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column46',value:'Door상세명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'특이사항',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',value:'당사배정구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'모선',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',value:'모선명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',value:'항차',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column97',value:'BL-NO<br/>(Booking)',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column94',value:'수입/수출',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column91',value:'목적항',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column88',value:'모선2',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column82',value:'모선명2',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column85',value:'항차2',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column130',value:'출발코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column142',value:'출발지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column138',value:'도착코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column134',value:'도착지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column129',value:'20F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column162',value:'20E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column158',value:'40F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column154',value:'40E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column150',value:'RF',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column146',value:'DC',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column128',value:'20F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column174',value:'20E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column170',value:'40F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column166',value:'40E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column127',value:'20F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column186',value:'20E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column182',value:'40F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column178',value:'40E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column125',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column190',value:'명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column121',value:'20F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column202',value:'20E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column198',value:'40F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column194',value:'40E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column120',value:'청구',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column206',value:'미청구',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCd',inputType:'text',width:'70',sortable:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'link',width:'100',sortable:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odr20fCnt',inputType:'text',width:'70',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'odr20eCnt',displayMode:'label',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'odr40fCnt',displayMode:'label',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'odr40eCnt',displayMode:'label',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'odrReeferCnt',displayMode:'label',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'odrNotReeferCnt',displayMode:'label',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'alloc20fCnt',inputType:'text',width:'70',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'alloc20eCnt',displayMode:'label',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'alloc40fCnt',displayMode:'label',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'alloc40eCnt',displayMode:'label',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrk20fCnt',inputType:'text',width:'70',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrk20eCnt',displayMode:'label',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrk40fCnt',displayMode:'label',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrk40eCnt',displayMode:'label',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',width:'70',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrCompleteDt',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'alloccarPicNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sell20fCnt',displayMode:'label',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sell20eCnt',displayMode:'label',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sell40fCnt',displayMode:'label',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sell40eCnt',displayMode:'label',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bilgCnt',displayMode:'label',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'unBilgCnt',displayMode:'label',textAlign:'right',customFormatter:'scwin.gridFormat',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',sortable:'false',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'selfClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'certiNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'billNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inout',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStDt',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkEndDtt',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvDtl',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcomAssgnClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vsslCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'portcnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bookingNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'impExpDomesticClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'destPortCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'tsVsslCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'tsVsslNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'tsPortcnt',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column144',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column140',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column136',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column27',displayMode:'label',textAlign:'right',expression:'sum(\'odr20fCnt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column164',displayMode:'label',textAlign:'right',expression:'sum(\'odr20eCnt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column160',displayMode:'label',textAlign:'right',expression:'sum(\'odr40fCnt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column156',displayMode:'label',textAlign:'right',expression:'sum(\'odr40eCnt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column152',displayMode:'label',textAlign:'right',expression:'sum(\'odrReeferCnt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column148',displayMode:'label',textAlign:'right',expression:'sum(\'odrNotReeferCnt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',expression:'sum(\'alloc20fCnt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column176',displayMode:'label',textAlign:'right',expression:'sum(\'alloc20eCnt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column172',displayMode:'label',textAlign:'right',expression:'sum(\'alloc40fCnt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column168',displayMode:'label',textAlign:'right',expression:'sum(\'alloc40eCnt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',expression:'sum(\'wrk20fCnt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column188',displayMode:'label',textAlign:'right',expression:'sum(\'wrk20eCnt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column184',displayMode:'label',textAlign:'right',expression:'sum(\'wrk40fCnt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column180',displayMode:'label',textAlign:'right',expression:'sum(\'wrk40eCnt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column192',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column78',displayMode:'label',textAlign:'right',expression:'sum(\'sell20fCnt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column204',displayMode:'label',textAlign:'right',expression:'sum(\'sell20eCnt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column200',displayMode:'label',textAlign:'right',expression:'sum(\'sell40fCnt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column196',displayMode:'label',textAlign:'right',expression:'sum(\'sell40eCnt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column75',displayMode:'label',textAlign:'right',expression:'sum(\'bilgCnt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column208',displayMode:'label',textAlign:'right',expression:'sum(\'unBilgCnt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column72',displayMode:'label',textAlign:'right',expression:'sum(\'sellAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column69',displayMode:'label',textAlign:'right',expression:'sum(\'pchsAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column99',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column96',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column93',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column90',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column84',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column87',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})