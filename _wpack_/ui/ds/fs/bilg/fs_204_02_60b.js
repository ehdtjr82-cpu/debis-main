/*amd /ui/ds/fs/bilg/fs_204_02_60b.xml 57517 91b5b8a066ddae4fcb15b54345fb361c9a76517ddc06a68456115703dd2109cd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_odrSt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ed_odrStDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ed_odrEndDt',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'deptCdGubun',name:'청구물류부서코드, 매출물류부서코드 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'청구(매출)물류부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCdI',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCdO',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDtNoGubun',name:'오더일자/오더번호 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrStDt',name:'오더시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrEndDt',name:'오더종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'onWrkPlCd',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'offWrkPlCd',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellClntClsCd',name:'거래처구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellYn',name:'무매출오더',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfClsCd',name:'자가구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mcomAssgnClsCd',name:'배정구분',dataType:'',defaultValue:''}},{T:1,N:'w2:key',A:{id:'bilgVolStd',name:'청구물량기준',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarPicId',name:'배차담당ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'orderPicId',name:'오더담당ID',dataType:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderEachWorkVolumeAggregationList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteDt',name:'오더완료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicNm',name:'배차담당',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrGrossWt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocGrossWt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocCbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUnitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVol',name:'물량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgCnt',name:'청구',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unBilgCnt',name:'미청구',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsNm',name:'자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDtt',name:'도착일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'Door상세명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsNm',name:'당사배정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'모선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BL-NO(Booking)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsNm',name:'수입/수출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unBilgCntColor',name:'미청구글씨색',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_queryConditionDTO',action:'/ds.fs.bilg.bilgrsltsmgnt.RetrieveOrderEachWorkVolumeAggregationListBulkCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryConditionDTO","key":"IN_DS1"},{"id":"ds_orderEachWorkVolumeAggregationList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_orderEachWorkVolumeAggregationList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_queryConditionDTO_submit','ev:submitdone':'scwin.sbm_queryConditionDTO_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
* @event 
* @name onpageload 
* @description 화면 초기화
*/
scwin.onpageload = async function () {};

/**
 * @event 
 * @name onUdcCompleted 
 * @description UDC 완료
 */
scwin.onUdcCompleted = function () {
  scwin.globalVars();
  scwin.dsCommonSetCodeList();
  const codeOptions = [{
    grpCd: 'SD113',
    compID: 'acb_odrKndCd'
  }, {
    grpCd: 'LO111',
    compID: 'acb_sellClntClsCd'
  }, {
    grpCd: 'SD144',
    compID: 'lc_mcomAssgnClsCd'
  }];
  $c.data.setCommonCode($p, codeOptions, () => {
    acb_odrKndCd.addItem('전체', '', null, 0);
    acb_odrKndCd.setSelectedIndex(0);
    acb_sellClntClsCd.addItem('전체', '', null, 0);
    acb_sellClntClsCd.setSelectedIndex(0);
    lc_mcomAssgnClsCd.addItem('', '전체', 0);
    lc_mcomAssgnClsCd.setSelectedIndex(0);
  });
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  const vCurDate = $c.date.getServerDateTime($p, 'yyyyMMdd'); // 서버를 기준으로 현재 날짜 반환
  scwin.vQryStDt = vCurDate.slice(0, 6) + '01'; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
  scwin.vQryEndDt = vCurDate;
};

/**
 * @method 
 * @name dsCommonSetCodeList 
 * @description DsCommonUtil 코드 리스트 설정
 */
scwin.dsCommonSetCodeList = async function () {
  // lc_selfClsCd
  const param = [{
    compID: "lc_selfClsCd",
    method: "getCodeList",
    param1: "SD114",
    param2: 1,
    param3: DsConstants.ODR_CNTR,
    outputFields: ["CD", "CD_NM"]
  }, {
    compID: "lc_selfClsCd",
    method: "getCodeList",
    param1: "SD114",
    param2: 1,
    param3: DsConstants.ODR_ALL,
    outputFields: ["CD", "CD_NM"]
  }];
  await $c.data.setDsCommonUtil($p, param, () => {
    lc_selfClsCd.addItem('', '전체', 0);
    lc_selfClsCd.setSelectedIndex(0);
  });
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  acb_sellYn.addItem('오더전체', '', null, 0);
  acb_sellYn.setSelectedIndex(0);
  scwin.f_SetDefaultData();

  // 테스트 데이터
  // ed_odrStDt.setValue('20200101');
  // ed_odrEndDt.setValue('20200102');
  // ed_bilgLodeptCd.setValue('6AA');

  // ed_odrStDt.setValue('20200218');
  // ed_odrEndDt.setValue('20201231');
  // ed_bilgLodeptCd.setValue('2AA');
};

/**
 * @method 
 * @name f_SetDefaultData 
 * @description Default Data Setting
 */
scwin.f_SetDefaultData = function () {
  // 그리드 컬럼 배경색 설정
  const columnIds = ['bilgCnt', 'unBilgCnt'];
  for (let i = 0; i < columnIds.length; i++) {
    gr_orderEachWorkVolumeAggregationList.setColumnBackgroundColor(columnIds[i], '#D4E4E3');
  }
  ;
  acb_deptCdGubun.setSelectedIndex(0); // 청구물류부서코드, 매출물류부서코드 구분
  acb_odrDtNoGubun.setSelectedIndex(0); // 오더일자/오더번호 구분
  udc_odrSt.show(''); // 오더일자
  div_qryConKnd2.hide(); // 오더번호

  dma_odrSt.set('ed_odrStDt', scwin.vQryStDt); // 전표일자시작
  dma_odrSt.set('ed_odrEndDt', scwin.vQryEndDt); // 전표일자종료

  acb_odrKndCd.setSelectedIndex(0); // 오더종류
  acb_bilgVolStd.setSelectedIndex(0); // 청구물량기준

  // TODO - IME 지원안함
  // cfSetIMEModeActiveObjects([txt_bilgLodeptNm, txt_bilgClntNm, txt_onWrkPlNm, txt_offWrkPlNm, txt_lineNm, txt_alloccarPicNm]);  // IME 한글입력

  acb_deptCdGubun.focus();
};

/**
 * @method 
 * @name f_RetrieveOrderEachWorkVolumeAggregationList 
 * @description 오더별작업물량집계표 CNTR 조회
 */
scwin.f_RetrieveOrderEachWorkVolumeAggregationList = async function () {
  // 검색조건 필수 입력 체크, 동일 날짜 포함 여부 체크
  if (!(await $c.gus.cfValidate($p, [ed_bilgLodeptCd]))) {
    return;
  }

  // 오더일자/오더번호 구분
  if (acb_odrDtNoGubun.getValue() == 'DT') {
    if (!(await $c.gus.cfValidate($p, [ed_odrStDt, ed_odrEndDt]))) {
      return;
    }
    ;
    if (!$c.gus.cfIsAfterDate($p, dma_odrSt.get('ed_odrStDt'), dma_odrSt.get('ed_odrEndDt'))) {
      $c.gus.cfAlertMsg($p, '조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.');
      ed_odrStDt.focus();
      return;
    }
    ;
  } else {
    if (!(await $c.gus.cfValidate($p, [ed_odrNo]))) return;
  }
  ;

  // 수출입구분
  dma_queryConditionDTO.set('impExpDomesticClsCdI', chk_impExpDomesticClsCd.getValue());
  $c.sbm.execute($p, sbm_queryConditionDTO);
};

/**
 * @method 
 * @name f_openOdrNoPopUp 
 * @description 오더번호검색 팝업창 띄우기
 */
scwin.f_openOdrNoPopUp = async function () {
  let args = new Array();
  args[0] = ''; //오더번호

  const url = '/ui/ds/sd/odrmgnt/odrreg/sd_402_01_26p.jsp';
  const options = {
    type: 'pageFramePopup',
    width: '820px',
    height: '510px'
  };
  let rtnValues = await $c.win.openPopup($p, url, options, args);
  if (rtnValues != null) {
    ed_odrNo.setValue(rtnValues[0]); // 오더번호
  }
  ;
};

/**
 * @method 
 * @name f_openPopUp 
 * @description 본선관리번호검색 팝업창 띄우기
 */
scwin.f_openPopUp = async function () {
  let args = new Array();
  args[0] = ed_cvsslMgntNo.getValue(); //본선관리번호
  args[1] = ''; //수출입구분코드

  const url = '/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml';
  const options = {
    type: 'browserPopup',
    width: '900px',
    height: '400px',
    title: '본선관리번호검색팝업'
  };
  let rtnValues = await $c.win.openPopup($p, url, options, args);
  if (rtnValues != null) {
    ed_cvsslMgntNo.setValue(rtnValues[0]); //본선관리번호
  }
  ;
};

/**
 * @method 
 * @name f_RunExcel 
 * @description 엑셀 다운로드
 */
scwin.f_RunExcel = function () {
  let count = ds_orderEachWorkVolumeAggregationList.getRowCount();
  if (!(count > 0)) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  }
  ;

  // gr_orderEachWorkVolumeAggregationList.SetExcelTitle(1, 'value:오더별 작업물량 집계표(BULK);'  // 표시할 타이틀
  //     + 'font-face:'돋움체';' // 폰트
  //     + 'font-size:12pt;'    // 폰트 크기
  //     + 'font-color:black;'  // 폰트 색깔
  //     + 'bgcolor:#ffffff;'   // 배경 색깔
  //     + 'align:center;'      // 정렬
  //     + 'line-color:white;'  // 타이틀 부분 테두리선 색깔
  //     + 'line-width:0pt;'    // 타이틀 테두리선 굵기
  // + 'skiprow:1;');       // 타이틀 다음 떼는 로우 수

  // // cfGridToExcel(그리드ID, '엑셀 파일의 쉬트명', '엑셀 파일명', 저장 옵션);

  const grdObj = gr_orderEachWorkVolumeAggregationList;
  const sheetStr = '오더별 작업물량 집계표(BULK)';
  const options = {
    sheetName: sheetStr,
    fileName: sheetStr + '.xlsx'
  };
  $c.data.downloadGridViewExcel($p, grdObj, options);
};

/**
 * @method 
 * @name f_RunExcel 
 * @description 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
 * @param {number} disGubun
 * @param {string} pCode
 * @param {string} pName
 * @param {string} pClose
 * @param {string} pAllSearch
 */
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  let codeObj,
    selectID,
    rtnValArray,
    pHidden = null;
  switch (disGubun) {
    case 1:
      // 청구부서코드 팝업
      codeObj = udc_bilgLodept;
      selectID = 'retrieveOpDeptCdInfo';
      rtnValArray = [ed_bilgLodeptCd, txt_bilgLodeptNm]; // 청구부서코드, 청구부서명
      break;
    case 2:
      // 청구처 팝업
      codeObj = udc_bilgClnt;
      selectID = 'retrieveClntInfo';
      rtnValArray = [ed_bilgClntNo, txt_bilgClntNm]; // 매입거래처코드, 매입거래1
      break;
    case 4:
      // 출발작업장 팝업
      codeObj = udc_onWrkPl;
      selectID = 'retrieveWrkPlInfo';
      rtnValArray = [ed_onWrkPlCd, txt_onWrkPlNm]; // 작업장코드, 작업장명			  				  									
      break;
    case 5:
      // LINE코드 팝업
      codeObj = udc_line;
      selectID = 'retrieveLineInfo';
      rtnValArray = [ed_lineCd, txt_lineNm]; // LINE코드, LINE명
      break;
    case 6:
      // 도착작업장 팝업
      codeObj = udc_offWrkPl;
      selectID = 'retrieveWrkPlInfo';
      rtnValArray = [ed_offWrkPlCd, txt_offWrkPlNm]; // 작업장코드, 작업장명
      break;
    case 7:
      // 배차담당자  팝업			
      codeObj = udc_alloccarPic;
      selectID = 'retrieveUserInfo';
      rtnValArray = [ed_alloccarPicId, txt_alloccarPicNm]; // 사번, 성명
      break;
    case 8:
      // 오더담당자 팝업		
      codeObj = udc_alloccarPic;
      selectID = 'retrieveUserInfo';
      rtnValArray = [ed_orderPicId, txt_orderPicNm]; // 사번, 성명
      break;
    default:
      break;
  }
  ;
  codeObj.setSelectId(selectID);
  codeObj.cfCommonPopUp(rtnList => {
    $c.gus.cfSetReturnValue($p, rtnList, rtnValArray[0], rtnValArray[1]);
  }, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
};

/**
 * @method 
 * @name f_RunExcel 
 * @description 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 * @param {object} inObj
 * @param {object} pairObj
 * @param {number} disGubun
 * @param {boolean} isCode
 */
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

/**
 * @method 
 * @name f_InitObjects 
 * @description 검색영역 Field Clear함.
 */
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name sbm_queryConditionDTO_submit 
 * @description Submission 요청 전 선처리. return false시 submission 수행 안함.
 */
scwin.sbm_queryConditionDTO_submit = function (e) {
  dma_queryConditionDTO.set("deptCdGubun", acb_deptCdGubun.getValue()); // 청구물류부서코드, 매출물류부서코드 구분
  dma_queryConditionDTO.set("bilgLodeptCd", ed_bilgLodeptCd.getValue()); // 청구(매출)물류부서코드
  dma_queryConditionDTO.set("bilgClntNo", ed_bilgClntNo.getValue()); // 청구거래처번호
  dma_queryConditionDTO.set("odrDtNoGubun", acb_odrDtNoGubun.getValue()); // 오더일자/오더번호 구분
  dma_queryConditionDTO.set("odrStDt", dma_odrSt.get('ed_odrStDt')); // 오더시작일자
  dma_queryConditionDTO.set("odrEndDt", dma_odrSt.get('ed_odrEndDt')); // 오더종료일자
  dma_queryConditionDTO.set("odrNo", ed_odrNo.getValue()); // 오더번호
  dma_queryConditionDTO.set("onWrkPlCd", ed_onWrkPlCd.getValue()); // 출발작업장
  dma_queryConditionDTO.set("offWrkPlCd", ed_offWrkPlCd.getValue()); // 도착작업장
  dma_queryConditionDTO.set("odrKndCd", acb_odrKndCd.getValue()); // 오더종류
  dma_queryConditionDTO.set("sellYn", acb_sellYn.getValue()); // 매출구분
  dma_queryConditionDTO.set("lineCd", ed_lineCd.getValue()); // LINE
  dma_queryConditionDTO.set("cvsslMgntNo", ed_cvsslMgntNo.getValue()); // 본선관리번호
  dma_queryConditionDTO.set("sellClntClsCd", acb_sellClntClsCd.getValue()); // 거래처구분
  dma_queryConditionDTO.set("bilgVolStd", acb_bilgVolStd.getValue()); // 청구물량기준
  dma_queryConditionDTO.set("selfClsCd", lc_selfClsCd.getValue()); // 자가구분
  dma_queryConditionDTO.set("mcomAssgnClsCd", lc_mcomAssgnClsCd.getValue()); // 배정구분
  dma_queryConditionDTO.set("alloccarPicId", ed_alloccarPicId.getValue()); // 배차담당자
  dma_queryConditionDTO.set("orderPicId", ed_orderPicId.getValue()); // 오더담당자
};

/**
 * @event 
 * @name sbm_queryConditionDTO_submiterror 
 * @description Response Status 코드가 오류 (200 미만 300 이상) 일 경우 동작.
 */
scwin.sbm_queryConditionDTO_submitdone = function (e) {
  const rowCnt = ds_orderEachWorkVolumeAggregationList.getRowCount();

  // 총 조회건수 표시
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  }
  ;
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name acb_odrDtNoGubun_onchange 
 * @description 오더일자 / 오더번호 구분 사용자가 선택 항목을 변경할 경우 발생.
 */
scwin.acb_odrDtNoGubun_onchange = function (info) {
  if (acb_odrDtNoGubun.getValue() == 'NO') {
    udc_odrSt.hide();
    div_qryConKnd2.show('');
  } else {
    udc_odrSt.show('');
    div_qryConKnd2.hide();
  }
  ;
};

/**
 * @event 
 * @name udc_bilgLodept_onblurCodeEvent 
 * @description 청구부서 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_bilgLodept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, txt_bilgLodeptNm, 1);
};

/**
 * @event 
 * @name udc_bilgLodept_onviewchangeNameEvent 
 * @description 청구부서 name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_bilgLodept_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_bilgLodeptNm, ed_bilgLodeptCd, 1, false);
};

/**
 * @event 
 * @name udc_bilgLodept_onclickEvent 
 * @description 청구부서 검색버튼 클릭
 */
scwin.udc_bilgLodept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgLodeptCd.getValue(), txt_bilgLodeptNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_bilgClnt_onblurCodeEvent 
 * @description 청구처 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_bilgClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, txt_bilgClntNm, 2);
};

/**
 * @event 
 * @name udc_bilgClnt_onviewchangeNameEvent 
 * @description 청구처 name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_bilgClnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_bilgClntNm, ed_bilgClntNo, 2, false);
};

/**
 * @event 
 * @name udc_bilgClnt_onclickEvent 
 * @description 청구처 검색버튼 클릭
 */
scwin.udc_bilgClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_bilgClntNo.getValue(), txt_bilgClntNm.getValue(), 'F', 'F');
};

/**
 * @event 
 * @name btn_PopUp3_onclick 
 * @description 오더번호 검색버튼 클릭
 */
scwin.btn_PopUp3_onclick = function (e) {
  scwin.f_openOdrNoPopUp();
};

/**
 * @event 
 * @name udc_onWrkPl_onblurCodeEvent 
 * @description 출발작업장 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_onWrkPl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_onWrkPlCd, txt_onWrkPlNm, 4);
};

/**
 * @event 
 * @name udc_onWrkPl_onviewchangeNameEvent 
 * @description 출발작업장 name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_onWrkPl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_onWrkPlNm, ed_onWrkPlCd, 4, false);
};

/**
 * @event 
 * @name udc_onWrkPl_onblurCodeEvent 
 * @description 출발작업장 검색버튼 클릭
 */
scwin.udc_onWrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_onWrkPlCd.getValue(), txt_onWrkPlNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_line_onblurCodeEvent 
 * @description LINE code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_line_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, txt_lineNm, 5);
};

/**
 * @event 
 * @name udc_line_onviewchangeNameEvent 
 * @description LINE name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_line_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_lineNm, ed_lineCd, 5, false);
};

/**
 * @event 
 * @name udc_line_onclickEvent 
 * @description LINE 검색버튼 클릭
 */
scwin.udc_line_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_lineCd.getValue(), txt_lineNm.getValue(), 'F', 'F');
};

/**
 * @event 
 * @name btn_PopUp6_onclick 
 * @description 본선관리번호 검색버튼 클릭
 */
scwin.btn_PopUp6_onclick = function (e) {
  scwin.f_openPopUp();
};

/**
 * @event 
 * @name udc_offWrkPl_onblurCodeEvent 
 * @description 도착작업장 name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_offWrkPl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_offWrkPlCd, txt_offWrkPlNm, 6);
};

/**
 * @event 
 * @name udc_offWrkPl_onviewchangeNameEvent 
 * @description 도착작업장 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_offWrkPl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_offWrkPlNm, ed_offWrkPlCd, 6, false);
};

/**
 * @event 
 * @name udc_offWrkPl_onclickEvent 
 * @description 도착작업장 검색버튼 클릭
 */
scwin.udc_offWrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_offWrkPlCd.getValue(), txt_offWrkPlNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_alloccarPic_onblurCodeEvent 
 * @description 배차담당자 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_alloccarPic_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_alloccarPicId, txt_alloccarPicNm, 7);
};

/**
 * @event 
 * @name udc_alloccarPic_onviewchangeNameEvent 
 * @description 배차담당자 name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_alloccarPic_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_alloccarPicNm, ed_alloccarPicId, 7, false);
};

/**
 * @event 
 * @name udc_alloccarPic_onclickEvent 
 * @description 배차담당자 검색버튼 클릭
 */
scwin.udc_alloccarPic_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_alloccarPicId.getValue(), txt_alloccarPicNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_orderPic_onblurCodeEvent 
 * @description 오더담당자 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_orderPic_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_orderPicId, txt_orderPicNm, 8);
};

/**
 * @event 
 * @name udc_orderPic_onviewchangeNameEvent 
 * @description 오더담당자 name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_orderPic_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_orderPicNm, ed_orderPicId, 8, false);
};

/**
 * @event 
 * @name udc_orderPic_onclickEvent 
 * @description 오더담당자 검색버튼 클릭
 */
scwin.udc_orderPic_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, ed_orderPicId.getValue(), txt_orderPicNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name gr_orderEachWorkVolumeAggregationList_oncelldblclick 
 * @description 셀이 더블 클릭된 경우 발생
 */
scwin.gr_orderEachWorkVolumeAggregationList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  // TODO - 확인필요
  if (columnId == 'odrNo') {
    let v_odrNo = ds_orderEachWorkVolumeAggregationList.getCellData(rowIndex, 'odrNo');
    let v_tabSeq = '1';
    const menuNm = '오더별컨테이너작업현황';
    const url = DsConstants.URL_CONTAINER_ORDER_WORK_PRESENTDETAIL;
    let splitUrl = url.split('/');
    const menuCode = splitUrl[splitUrl.length - 1];
    const paramObj = {
      'odrNo': v_odrNo,
      'tabSeq': v_tabSeq,
      'type': 'retrieve'
    };
    // const options = { menuType: 'retrieve' }

    $c.win.openMenu($p, menuNm, '/ui' + url, menuCode, paramObj);
  }
  ;
};

/**
 * @event 
 * @name btn_init_onclick 
 * @description 검색조건 초기화 버튼 클릭
 */
scwin.btn_init_onclick = function (e) {
  scwin.f_InitObjects();
};

/**
 * @event 
 * @name btn_search_onclick 
 * @description 조회 버튼 클릭
 */
scwin.btn_search_onclick = function (e) {
  scwin.f_RetrieveOrderEachWorkVolumeAggregationList();
};

/**
 * @event 
 * @name gridFooterFormat 
 * @description Grid Footer Format
 */
scwin.gridFooterFormat = function (data, formattedData, rowIndex, colIndex) {
  if (data === "") return 0;
  return $c.num.formatNumber($p, data);
};

/**
 * @method 
 * @name gridFormat
 * @description 그리드 customFormatter
 */
scwin.gridFormat = function (data, formattedData, rowIndex, colIndex) {
  let colID = this.getColumnID(colIndex);
  switch (colID) {
    // case 'unBilgCnt':
    //     const color = ds_orderEachWorkVolumeAggregationList.getCellData(rowIndex, 'unBilgCntColor');
    //     gr_orderEachWorkVolumeAggregationList.setCellColor(rowIndex, colID, color);
    //     break;

    default:
      // zeroNotDisplay
      if (data == "0") return "";else return formattedData;
  }
  ;
};
}}}]},{T:1,N:'style',E:[{T:3,text:'\n    		.guide-wrap{overflow:hidden}\n\n    	'}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'sub_contents'},E:[{T:1,N:'w2:wframe',A:{src:'/cm/xml/contentHeader.xml',style:'',id:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{editType:'select',id:'acb_deptCdGubun',style:'width:142px;',submenuSize:'auto',search:'start',chooseOption:'',ref:'',class:'req',emptyItem:'true',emptyIndex:'-1',displayMode:'value delim label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'매출물류부서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SELL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'청구물류부서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BILG'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',objTypeCode:'Data',codeId:'ed_bilgLodeptCd',nameId:'txt_bilgLodeptNm',id:'udc_bilgLodept',objTypeName:'Data',UpperFlagCode:'1',btnId:'btn_bilgLodept',mandatoryName:'false',mandatoryCode:'true',maxlengthCode:'4',maxlengthName:'15','ev:onblurCodeEvent':'scwin.udc_bilgLodept_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bilgLodept_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_bilgLodept_onviewchangeNameEvent',validTitle:'물류부서',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',cols:'1',id:'chk_impExpDomesticClsCd',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',class:'chk-grp'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'O'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'btn_PopUp2',style:'',codeId:'ed_bilgClntNo',objTypeCode:'Data',validExpCode:'매입거래처:yes',nameId:'txt_bilgClntNm',objTypeName:'data',id:'udc_bilgClnt',mandatoryCode:'false',mandatoryName:'false','ev:onblurCodeEvent':'scwin.udc_bilgClnt_onblurCodeEvent',UpperFlagCode:'0','ev:onclickEvent':'scwin.udc_bilgClnt_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_bilgClnt_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',disabled:'false',displayMode:'value delim label',editType:'select',emptyIndex:'-1',emptyItem:'true','ev:onchange':'scwin.acb_odrDtNoGubun_onchange',id:'acb_odrDtNoGubun',ref:'',search:'start',style:'width:115px;',submenuSize:'auto',class:'req'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'NO'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ed_odrStDt',edToId:'ed_odrEndDt',id:'udc_odrSt',mandatory:'true',mandatoryFrom:'true',mandatoryTo:'true',objType:'Data',objTypeFrom:'Data',objTypeTo:'Data',refDataMap:'dma_odrSt',refEdDt:'ed_odrEndDt',refStDt:'ed_odrStDt',style:'',titleFrom:'오더시작일자',titleTo:'오더종료일자'}},{T:1,N:'xf:group',A:{class:'form-group',id:'div_qryConKnd2',style:''},E:[{T:1,N:'xf:input',A:{UpperFlag:'1',class:'','ev:onviewchange':'scwin.ed_input1_onviewchange',id:'ed_odrNo',mandatory:'true',maxlength:'13',objType:'Data',style:'width: 85px;',title:'오더번호'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch','ev:onclick':'scwin.btn_PopUp3_onclick',id:'btn_PopUp3',style:'',title:'Search',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장(구간)',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td',style:'dis'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',codeId:'ed_onWrkPlCd','ev:onblurCodeEvent':'scwin.udc_onWrkPl_onblurCodeEvent','ev:onclickEvent':'scwin.udc_onWrkPl_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_onWrkPl_onviewchangeNameEvent',id:'udc_onWrkPl',mandatoryCode:'false',mandatoryName:'false',maxlengthCode:'5',maxlengthName:'9',nameId:'txt_onWrkPlNm',objTypeCode:'Data',objTypeName:'Data',popupID:'',style:''}},{T:1,N:'w2:span',A:{id:'spa_span1',label:'-',style:''}},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',codeId:'ed_offWrkPlCd','ev:onblurCodeEvent':'scwin.udc_offWrkPl_onblurCodeEvent','ev:onclickEvent':'scwin.udc_offWrkPl_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_offWrkPl_onviewchangeNameEvent',id:'udc_offWrkPl',mandatoryCode:'false',mandatoryName:'false',maxlengthCode:'5',maxlengthName:'9',nameId:'txt_offWrkPlNm',objTypeCode:'data',objTypeName:'data',popupID:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'acb_odrKndCd',style:'width:230px;',submenuSize:'auto',search:'start',objType:'data',allOption:'',chooseOption:'',ref:'',visibleRowNum:'25'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:''},E:[{T:1,N:'w2:label',A:{ref:''}},{T:1,N:'w2:value',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',codeId:'ed_lineCd','ev:onblurCodeEvent':'scwin.udc_line_onblurCodeEvent','ev:onclickEvent':'scwin.udc_line_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_line_onviewchangeNameEvent',id:'udc_line',mandatoryCode:'false',mandatoryName:'false',maxlengthCode:'5',maxlengthName:'15',nameId:'txt_lineNm',popupID:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',displayFormat:'########',id:'ed_cvsslMgntNo',mandatory:'false',maxlength:'8',objType:'Data',style:'width: 125px;',validExp:'본선관리번호:yes'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch','ev:onclick':'scwin.btn_PopUp6_onclick',id:'btn_PopUp6',style:'',title:'Search',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',editType:'select',id:'acb_sellClntClsCd',ref:'',search:'start',style:'width:143px;',submenuSize:'auto'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가/배정구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width:230px;'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_selfClsCd',objType:'data',ref:'',renderType:'',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_mcomAssgnClsCd',objType:'data',ref:'',renderType:'',style:'',submenuSize:'auto',visibleRowNum:'25'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구물량기준 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',displayMode:'value delim label',editType:'select',id:'acb_bilgVolStd',ref:'',search:'start',style:'width:110px;',submenuSize:'auto'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'일치'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'불일치'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',displayMode:'value delim label',editType:'select',id:'acb_sellYn',ref:'',search:'start',style:'width:150px;',submenuSize:'auto'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'매출오더'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'무매출오더'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차담당자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'0',codeId:'ed_alloccarPicId','ev:onblurCodeEvent':'scwin.udc_alloccarPic_onblurCodeEvent','ev:onclickEvent':'scwin.udc_alloccarPic_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_alloccarPic_onviewchangeNameEvent',id:'udc_alloccarPic',mandatoryCode:'false',mandatoryName:'false',maxlengthCode:'6',maxlengthName:'20',nameId:'txt_alloccarPicNm',objTypeCode:'data',objTypeName:'data',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더담당자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'0',codeId:'ed_orderPicId','ev:onblurCodeEvent':'scwin.udc_orderPic_onblurCodeEvent','ev:onclickEvent':'scwin.udc_orderPic_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_orderPic_onviewchangeNameEvent',id:'udc_orderPic',mandatoryCode:'false',mandatoryName:'false',maxlengthCode:'6',maxlengthName:'20',nameId:'txt_orderPicNm',objTypeCode:'data',objTypeName:'data',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrBtn',gridDownFn:'f_RunExcel',gridID:'gr_orderEachWorkVolumeAggregationList',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownUserAuth:'X',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_orderEachWorkVolumeAggregationList',scrollByColumn:'false',style:'',id:'gr_orderEachWorkVolumeAggregationList',visibleRowNum:'12',class:'wq_gvw',checkReadOnlyOnPasteEnable:'','ev:oncelldblclick':'scwin.gr_orderEachWorkVolumeAggregationList_oncelldblclick',mergeCells:'byrestriccol',mergeCol:'odrKndCd,lineCd,odrNo',mergeExcludeValue:'$blank, ',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'오더종류',blockSelect:'false',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column11',value:'LINE',blockSelect:'false',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column74',value:'오더번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{hidden:'false',width:'200',inputType:'text',id:'column57',value:'청구거래처',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column79',value:'품명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column59',value:'오더',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',id:'column80',value:'배차담당',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{hidden:'false',width:'310',inputType:'text',id:'column81',value:'구간',displayMode:'label',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column111',value:'오더물량',displayMode:'label',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column99',value:'배차(작업)물량',displayMode:'label',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column127',value:'매출물량',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column115',value:'청구물량',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column143',value:'매출금액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column139',value:'매입금액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column131',value:'자가구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column135',value:'출발일시',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column159',value:'도착일시',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column147',value:'Door상세명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column151',value:'특이사항',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column179',value:'당사배정구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column155',value:'모선',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column163',value:'항차',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column167',value:'BL-NO(Booking)',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column171',value:'수입/수출',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column175',value:'목적항',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'명',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column61',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column83',value:'출발지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column87',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',id:'column90',value:'도착지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column112',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column108',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column104',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column100',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column92',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column96',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column128',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column124',value:'물량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column116',value:'청구',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column120',value:'미청구',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'odrKndCd',blockSelect:'false',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'lineCd',blockSelect:'false',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',id:'odrNo',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'bilgClntNo',blockSelect:'false',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'bilgClntNm',blockSelect:'false',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrCompleteDt',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'alloccarPicNm',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlCd',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dptWrkPlNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arvWrkPlCd',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'odrQty',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormatter:'$c.num.formatNumber',customFormatter:'scwin.gridFormat'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'odrGrossWt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormatter:'$c.num.formatNumber',customFormatter:'scwin.gridFormat'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'odrCbm',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormatter:'$c.num.formatNumber',customFormatter:'scwin.gridFormat'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'allocQty',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormatter:'$c.num.formatNumber',customFormatter:'scwin.gridFormat'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'allocGrossWt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormatter:'$c.num.formatNumber',customFormatter:'scwin.gridFormat'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'allocCbm',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormatter:'$c.num.formatNumber',customFormatter:'scwin.gridFormat'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellUnitCd',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormatter:'$c.num.formatNumber',customFormatter:'scwin.gridFormat'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellVol',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormatter:'$c.num.formatNumber',customFormatter:'scwin.gridFormat'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bilgCnt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormatter:'$c.num.formatNumber',customFormatter:'scwin.gridFormat'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'unBilgCnt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormatter:'$c.num.formatNumber',customFormatter:'scwin.gridFormat'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormatter:'$c.num.formatNumber'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormatter:'$c.num.formatNumber'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'selfClsNm',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkStDt',displayMode:'label',textAlign:'center',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkEndDtt',displayMode:'label',textAlign:'center',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arvDtl',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcomAssgnClsNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vsslCd',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'portcnt',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'bookingNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'impExpDomesticClsNm',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'destPortCd',displayMode:'label',textAlign:'center',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column77',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column71',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column68',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column67',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column89',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column85',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column65',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column114',displayMode:'label',dataType:'number',expression:'sum(\'odrQty\')',displayFormatter:'scwin.gridFooterFormat',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column110',displayMode:'label',dataType:'number',expression:'sum(\'odrGrossWt\')',displayFormatter:'scwin.gridFooterFormat',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column106',displayMode:'label',dataType:'number',expression:'sum(\'odrCbm\')',displayFormatter:'scwin.gridFooterFormat',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column102',displayMode:'label',dataType:'number',expression:'sum(\'allocQty\')',displayFormatter:'scwin.gridFooterFormat',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column94',displayMode:'label',dataType:'number',expression:'sum(\'allocGrossWt\')',displayFormatter:'scwin.gridFooterFormat',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column98',displayMode:'label',dataType:'number',expression:'sum(\'allocCbm\')',displayFormatter:'scwin.gridFooterFormat',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column130',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column126',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column118',displayMode:'label',dataType:'number',expression:'sum(\'bilgCnt\')',displayFormatter:'scwin.gridFooterFormat',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column122',displayMode:'label',dataType:'number',expression:'sum(\'unBilgCnt\')',displayFormatter:'scwin.gridFooterFormat',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column146',displayMode:'label',expression:'sum(\'sellAmt\')',displayFormatter:'scwin.gridFooterFormat',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column142',displayMode:'label',expression:'sum(\'pchsAmt\')',displayFormatter:'scwin.gridFooterFormat',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column134',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column138',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column162',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column150',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column154',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column182',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column158',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column166',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column170',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column174',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column178',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]}]}]})