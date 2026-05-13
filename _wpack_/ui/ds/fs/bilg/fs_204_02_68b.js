/*amd /ui/ds/fs/bilg/fs_204_02_68b.xml 33419 b666d9ca61daea1d885e7db75fe07a8ed439e8b5eef5a77c36570557c25f7ca6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryConditionDTO','ev:onmodelchange':'scwin.dma_queryConditionDTO_onmodelchange'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrRegBranCd',name:'청구(매출)물류부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'오더시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'오더종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shpCoClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryBaseMth',name:'기준월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'allYn',name:'전체선택',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryGubun',name:'반출구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrStrRateWrkRsltsList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubun',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellOdrNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlTerm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinDt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutDt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inTerm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmTerm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'leaseYn',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCdNm',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'socYn',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'freeday',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'name29',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_qryDt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'from',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'to',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_queryConditionDTO',action:'/ds.fs.bilg.bilgrsltsmgnt.RetrieveBilgCntrStrRateWrkRsltsListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryConditionDTO","key":"IN_DS1"},{"id":"ds_cntrStrRateWrkRsltsList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cntrStrRateWrkRsltsList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.fs.bilg.bilgrsltsmgnt.RegistCntrStrRateSellingContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cntrStrRateWrkRsltsList","key":"IN_DS1"},{"id":"dma_queryConditionDTO","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
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
scwin.onUdcCompleted = function () {};

/**
 * @event 
 * @name ondataload 
 * @description 코드 완료
 */
scwin.ondataload = function () {
  scwin.globalVars();
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  const vCurDate = $c.date.getServerDateTime($p, 'yyyyMM'); // 서버를 기준으로 현재 날짜 반환
  scwin.vQryStDt = vCurDate + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
  scwin.vQryBaseMth = vCurDate; // 기준월 
  scwin.vQryEndDt = vCurDate + $c.date.getLastDateOfMonth($p, vCurDate); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

  // 세션정보 가져오기
  scwin.loginDTO = $c.data.getMemInfo($p);
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  udc_qryDt.setDisabled(true);
  scwin.f_SetDefaultData();
};

/**
 * @method 
 * @name f_SetDefaultData 
 * @description Default Data Setting
 */
scwin.f_SetDefaultData = function () {
  udc_qryDt.show(''); // 오더일자

  ed_qryStDt.setValue(scwin.vQryStDt);
  ed_qryEndDt.setValue(scwin.vQryEndDt);
  ed_qryBaseMth.setValue(scwin.vQryBaseMth); // 기준월 
  ed_odrRegBranCd.setValue(scwin.loginDTO.loUpperLobranCd);
  scwin.f_chkOpenCommonPopUp(ed_odrRegBranCd, txt_odrRegBranNm, 1);
  ed_shpCoClntNo.focus();
  acb_qryGubun.setSelectedIndex(0);

  // 테스트 데이터
  // ed_odrRegBranCd.setValue('6AA');
  // ed_qryBaseMth.setValue('202409');
  // ed_shpCoClntNo.setValue('246307');
};

/**
 * @method 
 * @name f_Retrieve 
 * @description 경과보관료실적   조회
 */
scwin.f_Retrieve = async function () {
  // 검색조건 필수 입력 체크, 동일 날짜 포함 여부 체크
  if ((await $c.gus.cfValidate($p, [tb_mainData])) == false) return;
  gr_cntrStrRateWrkRsltsList.setHeaderValue('chkHeader', "");
  // gr_cntrStrRateWrkRsltsList.setHeaderClass('chkHeader', 'dis-none');

  dma_queryConditionDTO.set("allYn", chb_allYn.getValue() == 1 ? 'Y' : 'N');

  // 검색조건 필수 입력 체크, 동일 날짜 포함 여부 체크
  scwin.submitExcute(sbm_queryConditionDTO);
};

/**
 * @method 
 * @name f_RunExcel 
 * @description 엑셀 다운로드
 */
scwin.f_RunExcel = function () {
  let count = ds_cntrStrRateWrkRsltsList.getRowCount();
  if (!(count > 0)) {
    $c.gus.cf$c.win.alertMsg(MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  }
  ;
  let excelName = '선사별 경과보관료 실적현황';
  let colSpan = gr_cntrStrRateWrkRsltsList.hiddenList.filter(val => val === false).length;
  let options = {
    sheetName: excelName,
    fileName: excelName + ".xlsx",
    startRowIndex: 2,
    useHeaderCheckBoxLabel: true
  };
  let infoArr = [{
    text: '선사별 경과보관료 실적현황',
    rowIndex: 0,
    colSpan: colSpan,
    textAlign: 'center',
    fontSize: '12px',
    fontName: '돋움체',
    color: 'black',
    bgColor: '#ffffff'
  }];
  $c.data.downloadGridViewExcel($p, gr_cntrStrRateWrkRsltsList, options, infoArr);
};

/**
 * @method 
 * @name f_openCommonPopUp 
 * @description 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
 * @param {number} disGubun
 * @param {string} pCode
 * @param {string} pName
 * @param {string} pClose
 * @param {string} pAllSearch
 */
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let pDispCnt = null,
    pTitle = null,
    pWidth = null,
    pHidden = null,
    pWhere = null,
    pW = null,
    pH = null,
    pTop = null,
    pLeft = null,
    pExistTF = null,
    pWtitleSearch = null,
    pNoDataCloseTF = null;
  let comCodeComp, codeNameArray;
  switch (disGubun) {
    case 1:
      // 부서코드 팝업
      comCodeComp = udc_odrRegBranCd;
      codeNameArray = [ed_odrRegBranCd, txt_odrRegBranNm]; // 청구부서코드 / 청구부서명
      break;
    case 2:
      // 선사거래처 팝업
      comCodeComp = udc_shpCoClntNo;
      codeNameArray = [ed_shpCoClntNo, txt_shpCoClntNm]; // 선사거래처코드 / 선사거래처명
      break;
    default:
      break;
  }
  ;
  comCodeComp.cfCommonPopUp(rtnList => {
    $c.gus.cfSetReturnValue($p, rtnList, codeNameArray[0], codeNameArray[1]);
  }, pCode, pName, pClose, pDispCnt, pTitle, pWidth, pHidden, pWhere, pW, pH, pTop, pLeft, pExistTF, pAllSearch, pWtitleSearch, pNoDataCloseTF);
};

/**
 * @method 
 * @name f_openCommonPopUp 
 * @description 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 * @param {object} inObj
 * @param {object} pairObj
 * @param {number} disGubun
 * @param {string} isCode
 */
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
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
  scwin.f_setQryDt();
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

/**
 * @method 
 * @name f_InitObjects 
 * @description GRID에서 선택된 오더 세부정보 확인 : 해당 오더유형별 페이지로 이동
 * @param {string} arg
 */
scwin.f_sellItemDetail = function (arg) {
  let menuNm = "통합매출/입관리";
  let url = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_26b.xml";
  let menuCode = "sd_402_01_26b.xml";
  let paramObj = {
    'odrNo': arg
  };
  let option = {
    menuType: 'retrieve'
  };
  $c.win.openMenu($p, menuNm, url, menuCode, paramObj, option);
};

/**
 * @method 
 * @name f_InitObjects 
 * @description GRID에서 선택된 오더 세부정보 확인 : 해당 오더유형별 페이지로 이동
 * @param {string} arg
 */
scwin.f_ctrtDetail = function (arg) {
  let menuNm = "신규 계약등록";
  let url = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_02b.xml";
  let menuCode = "sd_202_01_02b.xml";
  let paramObj = {
    'ctrtNo': arg
  };
  $c.win.openMenu($p, menuNm, url, menuCode, paramObj);
};

/**
 * @method 
 * @name f_InitObjects 
 * @description 컨테이너 화물 추적으로 이동  
 * @param {string} cntrNo
 */
scwin.f_cntrNoDetail = function (cntrNo) {
  if (cntrNo == "") return;
  let menuNm = "컨테이너  화물추적";
  let url = "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_02b.xml";
  let menuCode = "as_102_01_02b.xml";
  let paramObj = {
    'cntrNo': cntrNo
  };
  $c.win.openMenu($p, menuNm, url, menuCode, paramObj);
};

/**
 * @method 
 * @name f_totalSellingSearch 
 * @description 통합 매출 확정/미확정 화면으로 이동 
 */
scwin.f_totalSellingSearch = function () {
  let focusedIdx = ds_cntrStrRateWrkRsltsList.getRowPosition();
  let menuNm = "통합매출 확정/미확정 조회";
  let url = "/ui/ds/fs/bilg/fs_204_02_04b.xml";
  let menuCode = "fs_204_02_04b.xml";
  let paramObj = {
    'bizDom': 'fs_204_02_68b',
    'bilgLodeptCd': '6C11',
    'bilgClntNo': ds_cntrStrRateWrkRsltsList.getCellData(focusedIdx, "shpCoClntNo"),
    'qryConDtFm': ed_qryStDt.getValue(),
    'qryConDtTo': ed_qryEndDt.getValue()
  };
  $c.win.openMenu($p, menuNm, url, menuCode, paramObj);
};

/**
 * @method 
 * @name f_Create 
 * @description 경과보관료 매출생성 
 */
scwin.f_Create = async function () {
  let v_isChecked = false;
  let rowCnt = ds_cntrStrRateWrkRsltsList.getRowCount();
  let rowData = null;
  if (rowCnt > 0) {
    for (let i = 0; i < rowCnt; i++) {
      rowData = ds_cntrStrRateWrkRsltsList.getRowJSON(i);
      if (rowData.chk == 1 && rowData.gubun == "미반출") {
        $c.win.alert($p, '미반출 건은 오더 생성할 수 없습니다.\n미반출건을 제외해주세요.');
        return;
      }
      ;
      if (rowData.chk == 1 && rowData.sellOdrNo != "") {
        $c.win.alert($p, i + "번째 ROW는 이미 오더/매출이 생성되어 있습니다.\n");
        ds_cntrStrRateWrkRsltsList.setCellData(i, "chk", 0);
        return;
      }
      ;
      if (rowData.chk == 1) {
        v_isChecked = true;
        break;
      }
      ;
    }
    ;
  }
  ;
  if (!v_isChecked) {
    $c.win.alert($p, '선택된 실적현황이 없습니다.');
    return;
  }
  ;
  const retConfirm = await $c.win.confirm($p, "선택하신 건으로 오더생성및 매출등록하시겠습니까?");
  if (!retConfirm) return;
  scwin.submitExcute(sbm_save);
};

/**
 * @method 
 * @name f_setQryDt 
 * @description
 */
scwin.f_setQryDt = function () {
  let inputDate = ed_qryBaseMth.getValue();
  ed_qryStDt.setValue(inputDate + '01');
  ed_qryEndDt.setValue(inputDate + $c.date.getLastDateOfMonth($p, inputDate));
};

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    await scwin.submitdone(e);
  }
  ;
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_queryConditionDTO:
      if (e.responseJSON.resultDataSet[0].Code == -1) return;

      // 총 조회건수 표시
      let rowCnt = ds_cntrStrRateWrkRsltsList.getRowCount();
      totalRows.setValue(rowCnt);
      if (rowCnt == 0) $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
      // TODO - asis는 안 없어짐 확인 필요
      // gr_cntrStrRateWrkRsltsList.setHeaderClass('chkHeader', 'dis-none'); 
      break;
    case sbm_queryConditionDTO:
      if (e.responseJSON.resultDataSet[0].Code == -1) {
        $c.gus.cfAlertMsg($p, "에러발생되었습니다");
        return;
      }
      ;
      $c.win.alert($p, "성공적으로 처리되었습니다.");
      scwin.f_Retrieve();
      break;
    default:
      break;
  }
  ;
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name gr_cntrStrRateWrkRsltsList_oncelldblclick 
 * @description 거래처별 경과보관료 실적현황 그리드 셀 더블클릭
 */
scwin.gr_cntrStrRateWrkRsltsList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  let rowData = ds_cntrStrRateWrkRsltsList.getRowJSON(rowIndex);

  //화물추적  링크
  switch (columnId) {
    case 'cntrNo':
      // 컨테이너 화물 추적 
      scwin.f_cntrNoDetail(rowData.cntrNo);
      break;
    case 'sellOdrNo':
      // 통합 매출입 관리 (오더번호 )
      if (rowData.sellOdrNo != "") {
        scwin.f_sellItemDetail(rowData.sellOdrNo);
      }
      ;
      break;
    case 'ctrtNo':
      // 통합 매출입 관리 (오더번호 )
      scwin.f_ctrtDetail(rowData.ctrtNo);
      break;
    default:
      if (rowData.sellOdrNo == "") return;
      scwin.f_totalSellingSearch();
      break;
  }
  ;
};

/**
 * @event 
 * @name ed_qryBaseMth_onblur 
 * @description 기준월 포커스를 잃었을 때 발생
 */
scwin.ed_qryBaseMth_onblur = function (e) {
  scwin.f_setQryDt();
};

/**
 * @event 
 * @name dma_queryConditionDTO_onmodelchange 
 * @description 특정 키(Key)에 대한 값(Value)이 변경된 이후에 발생
 * @param {string} info.key
 * @param {string} info.oldValue
 * @param {string} info.newValue
 */
scwin.dma_queryConditionDTO_onmodelchange = function (info) {
  if (info.key == "qryBaseMth") scwin.f_setQryDt();
};

/**
 * @event 
 * @name udc_odrRegBranCd_onblurCodeEvent 
 * @description 점소 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_odrRegBranCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_odrRegBranCd, txt_odrRegBranNm, 1);
};

/**
 * @event 
 * @name udc_odrRegBranCd_onviewchangeNameEvent 
 * @description 점소 name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_odrRegBranCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_odrRegBranNm, ed_odrRegBranCd, 1, false);
};

/**
 * @event 
 * @name udc_odrRegBranCd_onclickEvent 
 * @description 점소 검색버튼 클릭 시 발생
 */
scwin.udc_odrRegBranCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_odrRegBranCd.getValue(), txt_odrRegBranNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_odrRegBranCd_onblurCodeEvent 
 * @description 거래처코드 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_shpCoClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_shpCoClntNo, txt_shpCoClntNm, 2);
};

/**
 * @event 
 * @name udc_shpCoClntNo_onviewchangeNameEvent 
 * @description 거래처코드 name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_shpCoClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_shpCoClntNm, ed_shpCoClntNo, 2, false);
};

/**
 * @event 
 * @name udc_shpCoClntNo_onclickEvent 
 * @description 거래처코드 검색버튼 클릭 시 발생
 */
scwin.udc_shpCoClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_shpCoClntNo.getValue(), txt_shpCoClntNm.getValue(), 'F', 'F');
};
}}}]},{T:1,N:'style',E:[{T:3,text:'\n    		.guide-wrap{overflow:hidden}\n\n    	'}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'sub_contents'},E:[{T:1,N:'w2:wframe',A:{src:'/cm/xml/contentHeader.xml',style:'',id:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_odrRegBranCd',mandatoryCode:'true',maxlengthCode:'4',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',objTypeCode:'Data',nameId:'txt_odrRegBranNm',maxlengthName:'50',objTypeName:'Data',mandatoryName:'false',btnId:'img_PopUp1',id:'udc_odrRegBranCd','ev:onclickEvent':'scwin.udc_odrRegBranCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_odrRegBranCd_onviewchangeNameEvent',selectID:'retrieveOpDeptCdInfo','ev:onblurCodeEvent':'scwin.udc_odrRegBranCd_onblurCodeEvent',refDataCollection:'dma_queryConditionDTO',code:'odrRegBranCd',validTitle:'점소코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_qryBaseMth',style:'',objType:'Data',mandatory:'true','ev:onblur':'scwin.ed_qryBaseMth_onblur',ref:'data:dma_queryConditionDTO.qryBaseMth',title:'기준월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_shpCoClntNo',mandatoryCode:'true',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',objTypeCode:'Data',nameId:'txt_shpCoClntNm',mandatoryName:'false',objTypeName:'data',btnId:'btn_PopUp2',id:'udc_shpCoClntNo','ev:onviewchangeNameEvent':'scwin.udc_shpCoClntNo_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_shpCoClntNo_onclickEvent',selectID:'retrieveClntInfo','ev:onblurCodeEvent':'scwin.udc_shpCoClntNo_onblurCodeEvent',refDataCollection:'dma_queryConditionDTO',code:'shpCoClntNo',validTitle:'거래처코드'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'반출기간 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_qryDt',refDataMap:'dma_queryConditionDTO',refEdDt:'qryEndDt',refStDt:'qryStDt',style:'',class:'',edFromId:'ed_qryStDt',edToId:'ed_qryEndDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'Data',objTypeTo:'Data'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반출구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_qryGubun',search:'start',style:'width: 120px;',submenuSize:'auto',objType:'key',mandatory:'true',allOption:'',chooseOption:'',ref:'data:dma_queryConditionDTO.qryGubun',displayMode:'value delim label',title:'구분'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'반출완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미반출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',cols:'1',id:'chb_allYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처별 경과 대상 전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처별 경과보관료 실적현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',templateYn:'N',gridDownFn:'scwin.f_RunExcel',gridDownUserAuth:'X',gridID:'gr_cntrStrRateWrkRsltsList'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',dataList:'data:ds_cntrStrRateWrkRsltsList',scrollByColumn:'false',style:'',autoFit:'lastColumn',id:'gr_cntrStrRateWrkRsltsList',visibleRowNum:'15',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',fixedColumn:'8',columnMove:'true',resize:'true','ev:oncelldblclick':'scwin.gr_cntrStrRateWrkRsltsList_oncelldblclick',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',id:'chkHeader',displayMode:'label',value:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column12',value:'구분',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column11',value:'작업장코드',blockSelect:'false',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column71',value:'작업장명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column68',value:'라인코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column74',value:'컨테이너',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column83',value:'SIZE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column80',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column77',value:'F/E',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column57',value:'TYPE',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',id:'column59',value:'입항일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column62',value:'입항일경과일수',displayMode:'label',hidden:'true',hiddenClass:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column102',value:'반입일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column100',value:'반출일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column98',value:'경과일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column96',value:'매출일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column112',value:'통화코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column110',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column108',value:'매출액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column104',value:'LEASE여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column106',value:'오더종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column129',value:'수입/수출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column116',value:'수입/수출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column114',value:'SOC여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column126',value:'비고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column124',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column122',value:'계약번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column120',value:'기본일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column118',value:'과세구분',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'chk',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'gubun',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'wrkPlCd',blockSelect:'false',displayMode:'label',readOnly:'true',hidden:'true',fixPickerStatus:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkPlNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lineCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'link',id:'cntrNo',displayMode:'label',readOnly:'true',class:'linktype'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSizCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'link',id:'sellOdrNo',displayMode:'label',readOnly:'true',class:'linktype'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fullEmptyClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'cntrTypCd',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arrvlportDt',displayMode:'label',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arrvlTerm',displayMode:'label',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'crryinDt',displayMode:'label',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'crryoutDt',displayMode:'label',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'inTerm',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mmTerm',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'crcCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ctrtTrf',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellAmt',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'leaseYn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'odrKndNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'impExpClsCd',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'impExpClsCdNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'socYn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rmk',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'shpCoClntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'link',id:'ctrtNo',displayMode:'label',readOnly:'true',class:'linktype'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'freeday',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'taxnClsCd',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn',id:'btn_save',label:'매출생성',style:'',objType:'bSave',userAuth:'C','ev:onclick':'scwin.f_Create'}}]}]}]}]}]}]}]})