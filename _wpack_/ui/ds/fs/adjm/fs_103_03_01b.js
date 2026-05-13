/*amd /ui/ds/fs/adjm/fs_103_03_01b.xml 62450 bf8bf13e2e4b75a01652a67b7d6d0e5c6e08fd92377db05a6a3eddb5be639ea0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ed_pchsIntendDt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'from',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'to',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_purchaseCertiQueryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'협력회사',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDtSt',name:'공급일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDtEnd',name:'공급일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsDeptCd',name:'매입부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repBilgClntNo',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseEvidenceList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsVatNo',name:'계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmDept',name:'정산부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecAuthTrgtYn',name:'전자인증',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호(명세서출력)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'공급받는자(동부)E-MAIL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarExceptYn',name:'신고제외여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarSts',name:'신고상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repBilgClntNo',name:'회사',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseCertiList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매입항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsIntendDt',name:'매입예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'작성귀속부서명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseEvidenceDTO',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_purchaseCerti'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adjmDept',name:'정산부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'evidKndClsCd',name:'증빙종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNo',name:'작성자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawAcctDeptCd',name:'작성귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'busiNo',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vat',name:'부가세',dataType:'text'}},{T:1,N:'w2:key',A:{id:'elecAuthTrgtYn',name:'전자인증여부(전자세금계산서)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repBilgClntNo',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_duplication',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pchsIntendDt',name:'매입예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_purchaseCertiQueryConditionDTO',action:'/ds.fs.adjm.pchsadjmdcsn.RetrieveTaxInvoiceRegistPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_purchaseCertiQueryConditionDTO","key":"IN_DS1"},{"id":"ds_purchaseEvidenceList","key":"OUT_DS1"},{"id":"ds_purchaseCertiList","key":"OUT_DS2"},{"id":"ds_purchaseEvidenceDTO","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_purchaseEvidenceList","key":"OUT_DS1"},{"id":"ds_purchaseCertiList","key":"OUT_DS2"},{"id":"ds_purchaseEvidenceDTO","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_purchaseCertiQueryConditionDTO_submit','ev:submitdone':'scwin.sbm_purchaseCertiQueryConditionDTO_submitdone',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveRegistPurchaseEvidence',action:'/ds.fs.adjm.pchsadjmdcsn.RegistCompanyPurchaseEvidenceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_purchaseCerti","key":"IN_DS1"},{"id":"ds_purchaseCertiList","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_saveRegistPurchaseEvidence_submit','ev:submitdone':'scwin.sbm_saveRegistPurchaseEvidence_submitdone',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveRegistTaxInvoiceHistory',action:'/ds.fs.adjm.pchsadjmdcsn.SaveTaxInvoiceHistoryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_purchaseEvidenceDTO","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveRegistTaxInvoiceHistory_submitdone',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = async function () {
  await scwin.globalVars();
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  const loginDTO = $c.data.getMemInfo($p); // 공통 세션 변수
  scwin.userClsCd = loginDTO.userClsCd ?? ''; // 사용자구분코드(02:협력업체(운송))
  scwin.loginClntNo = loginDTO.clntNo ?? '';
  scwin.loginClntNm = loginDTO.clntNm ?? '';
  const vCurDate = $c.date.getServerDateTime($p, 'yyyyMMdd'); // 서버를 기준으로 현재 날짜 반환
  const yearMonth = vCurDate.slice(0, 6);
  scwin.vQryStDt = yearMonth + '01'; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
  scwin.vQryEndDt = yearMonth + $c.date.getLastDateOfMonth($p, yearMonth); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

  // 조회조건용 - dma_purchaseCertiQueryConditionDTO
  // 세금계산서 접수 저장 - dma_purchaseCerti
  // 중복체크 - ds_duplication
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  scwin.f_SetDefaultData();

  // todo - asis에선 btn_Print이 동일 이름으로 존재하여 작동 안하는 것으로 보임
  $c.gus.cfDisableBtnOnly($p, [btn_Save]);

  // 테스트데이터
  // ed_pchsClntNo.setValue('529135');
  // dma_ed_pchsIntendDt.set('from', '20250101');
};

/**
 * @method 
 * @name f_OnLoad 
 * @description Default Data Setting
 */
scwin.f_SetDefaultData = function () {
  dma_ed_pchsIntendDt.set('from', scwin.vQryStDt); // 공급일자시작
  dma_ed_pchsIntendDt.set('to', scwin.vQryEndDt); // 공급일자종료

  if (scwin.userClsCd != '01') {
    ed_pchsClntNo.setValue(scwin.loginClntNo);
    txt_pchsClntNm.setValue(scwin.loginClntNm);
    ed_pchsClntNo.setDisabled(true);
    txt_pchsClntNm.setDisabled(true);
    btn_pchsClntNo.setDisabled(true);
    btn_Print_v3.hide();
  } else {
    ed_pchsClntNo.focus();
    btn_Print_v3.show('');
  }
  ;
};

/**
 * @method 
 * @name f_RetrieveTaxInvoiceRegistPresent 
 * @description 세금계산서등록현황 조회
 */
scwin.f_RetrieveTaxInvoiceRegistPresent = async function () {
  // 검색조건 필수 입력 체크, 동일 날짜 포함 여부 체크
  let validVal = await $c.gus.cfValidate($p, [ed_pchsClntNo, ed_pchsIntendDtSt, ed_pchsIntendDtEnd]);
  if (!validVal) return;
  if (!$c.gus.cfIsAfterDate($p, dma_ed_pchsIntendDt.get('from'), dma_ed_pchsIntendDt.get('to'))) {
    $c.gus.cfAlertMsg($p, '조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.');
    ed_pchsIntendDtSt.focus();
    return;
  }
  ;
  gr_purchaseCertiList._dataList.setBroadcast(false);
  $c.sbm.execute($p, sbm_purchaseCertiQueryConditionDTO);
};

/**
 * @method 
 * @name f_PrintElecAuth 
 * @description 전자세금계산서 발행
 */
scwin.f_PrintElecAuth = function () {
  let printCnt = 0;
  let rowPosition = 0; // 선택된 RowPosition
  let rowCnt = ds_purchaseEvidenceList.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    if (ds_purchaseEvidenceList.getCellData(i, 'chk') == 'T') {
      rowPosition = i;
      printCnt++;
    }
    ;
  }
  ;
  if (printCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ['발행할 세금계산서']); // @을(를) 선택하십시오.
    return;
  }
  ;
  let focusedIdx = ds_purchaseEvidenceList.getRowPosition();
  if (ds_purchaseEvidenceList.getCellData(focusedIdx, 'elecAuthTrgtYn') == 0) {
    ds_purchaseEvidenceList.setCellData('chk', 'F');
    $c.gus.cfAlertMsg($p, '전자인증이 Y인 경우만 발행 가능합니다.');
    return;
  }
  ;
  let pchsVatNo = ds_purchaseEvidenceList.getCellData(rowPosition, 'pchsVatNo');
  let url = '/ds.fs.adjm.pchsadjmdcsn.cmd.PrintTaxInvoiceCMD.do?purchaseEvidenceNumber=' + pchsVatNo;
  iframe1.setSrc(url);
};

/**
 * @method 
 * @name f_Print 
 * @description 세금계산서 출력
 */
scwin.f_Print = async function () {
  // btn_Print1
  let param = '';
  let printCnt = 0;
  let rowCnt = ds_purchaseEvidenceList.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    if (ds_purchaseEvidenceList.getCellData(i, 'chk') == 'T') {
      param = param + ',TO_CHAR(' + ds_purchaseEvidenceList.getCellData(i, 'pchsVatNo') + ')'; // 계산서번호
      printCnt++;
    }
    ;
  }
  ;
  if (printCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ['발행할 세금계산서']); // @을(를) 선택하십시오.
    return;
  }
  ;
  let data = {
    reportName: '/ac/fi/taxbiz/vatctrl/fi_401_01_09p.ozr',
    // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
    odiParam: {
      pchsSellCls: param.slice(1)
    },
    // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
    viewerParam: {
      mode: 'preview'
    },
    // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
    formParam: {}
  };
  let options = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", options, data);

  //세금계산서출력후 이력생성
  // TODO - UseChangeInfo >> action all 확인해야함
  // ds_purchaseEvidenceList.UseChangeInfo = false;
  $c.sbm.execute($p, sbm_saveRegistTaxInvoiceHistory);
};

/**
 * @method 
 * @name f_RegistPurchaseEvidence 
 * @description 세금계산서 접수
 */
scwin.f_RegistPurchaseEvidence = async function () {
  // btn_Save
  // Data 변경 여부 조회
  if (ds_purchaseCertiList.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ['목록']); // 선택된 @이(가) 없습니다.
    return;
  }
  ;
  ds_duplication.removeAll();

  // 매입예정일자와 매입부서가 같은 목록만 가능
  let rowCnt = ds_purchaseCertiList.getRowCount();
  let jsonData = [];
  for (let i = 0; i < rowCnt; i++) {
    const rowData = ds_purchaseCertiList.getRowJSON(i);
    if (rowData['chk'] == 'T') {
      jsonData.push({
        'pchsIntendDt': rowData['pchsIntendDt'],
        // 매입예정일자
        'pchsDeptCd': rowData['pchsDeptCd'] // 매입부서
      });
    }
    ;
  }
  ;
  ds_duplication.setJSON(jsonData);
  let val0 = '',
    val1 = '',
    val3 = '',
    val4 = '';
  rowCnt = ds_duplication.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    if (i == rowCnt) continue;
    const currentRowData = ds_duplication.getRowJSON(i);
    const afterRowData = ds_duplication.getRowJSON(i);
    let row1 = currentRowData['pchsIntendDt'];
    let row2 = afterRowData['pchsIntendDt'];
    let key1 = currentRowData['pchsDeptCd'];
    let key2 = afterRowData['pchsDeptCd'];
    if (row1 != null && row2 != null && key1 != null && key2 != null) {
      val0 = row1;
      val1 = row2;
      val3 = key1;
      val4 = key2;
    } else {
      val0 = currentRowData['pchsIntendDt'];
      val1 = afterRowData['pchsIntendDt'];
      val3 = currentRowData['pchsDeptCd'];
      val4 = afterRowData['pchsDeptCd'];
    }
    ;
    if (val0 != val1 || val3 != val4) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ['선택된 매입예정일자와 매입부서']); // @을(를) 확인하여 주십시오.
      return;
    }
    ;
  }
  ;

  // 선택건의 공급가액, 부가세 합계 계산
  let spplyAmt = 0,
    vat = 0;
  rowCnt = ds_purchaseCertiList.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    const rowData = ds_purchaseCertiList.getRowJSON(i);
    if (rowData['chk'] == 'T') {
      spplyAmt += $c.num.parseInt($p, rowData['spplyAmt']);
      vat += $c.num.parseInt($p, rowData['vat']);
    }
    ;
  }
  ;

  // 적요
  let summaryValid = await $c.gus.cfValidate($p, [txt_summary, ed_drawEmpNo, ed_drawAcctDeptCd]);
  if (!summaryValid) return;
  const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_001); // 저장하시겠습니까?
  if (!retConfirm) return;
  const focusedIdx = ds_purchaseEvidenceDTO.getRowPosition();
  dma_purchaseCerti.set('busiNo', ds_purchaseEvidenceDTO.getCellData(focusedIdx, 'busiNo')); // 사업자번호
  dma_purchaseCerti.set('elecAuthTrgtYn', 1); // 전자인증여부(전자세금계산서)-적용
  dma_purchaseCerti.set('spplyAmt', spplyAmt); // 공급금액
  dma_purchaseCerti.set('vat', vat); // 부가세

  $c.sbm.execute($p, sbm_saveRegistPurchaseEvidence);
};

/**
 * @method 
 * @name f_SetDrawInfo 
 * @description 작성자, 작성부서 세팅
 * @param {string} value
 */
scwin.f_SetDrawInfo = function (value) {
  switch (value) {
    case 'SET':
      let row = -1;
      let rowCnt = ds_purchaseCertiList.getRowCount();
      for (let i = 0; i < rowCnt; i++) {
        if (ds_purchaseCertiList.getCellData(i, 'chk') == 'T') {
          row = i;
        }
        ;
      }
      ;
      if (row == -1) {
        ed_drawEmpNo.setValue(''); // 작성자코드
        txt_drawEmpNm.setValue(''); // 작성자명
        ed_drawAcctDeptCd.setValue(''); // 작성귀속부서코드
        txt_drawAcctDeptNm.setValue(''); // 작성귀속부서명
      } else {
        const rowData = ds_purchaseCertiList.getRowJSON(row);
        ed_drawEmpNo.setValue(rowData['drawEmpNo']); // 작성자코드
        txt_drawEmpNm.setValue(rowData['drawEmpNm']); // 작성자명
        ed_drawAcctDeptCd.setValue(rowData['drawAcctDeptCd']); // 작성귀속부서코드
        txt_drawAcctDeptNm.setValue(rowData['drawAcctDeptNm']); // 작성귀속부서명
      }
      ;
      break;
    case 'CLEAR':
      ed_drawEmpNo.setValue(''); // 작성자코드
      txt_drawEmpNm.setValue(''); // 작성자명
      ed_drawAcctDeptCd.setValue(''); // 작성귀속부서코드
      txt_drawAcctDeptNm.setValue(''); // 작성귀속부서명
      break;
    default:
      break;
  }
  ;
};

/**
 * @method 
 * @name f_SetDrawInfo 
 * @description 거래명세서 출력(전표번호)
 * @param {number} Row
 * @param {string} slipNo
 * @param {string} repBilgClntNo
 */
scwin.f_PrintSlipNo = async function (Row, slipNo, repBilgClntNo) {
  let v_loginClntNo = scwin.loginClntNo;
  let data;

  // 협력업체인지 체크하여 거래명세양식 따로 발행 2009.06.09
  if (ed_pchsClntNo.getValue() == v_loginClntNo) {
    $c.win.alert($p, ed_pchsClntNo.getValue());
    $c.win.alert($p, v_loginClntNo);
    if (ds_purchaseEvidenceList.getCellData(Row, 'repBilgClntNo') == '124992') {
      data = {
        reportName: '/ds/fs/adjm/fs_401_01_08_v3p.ozr',
        // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
        odiParam: {
          slipNo: slipNo
        },
        // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
        viewerParam: {
          mode: 'preview',
          // 미리보기
          debug: 'true' // 디버깅
        },
        // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
        formParam: {}
      };
    } else {
      data = {
        reportName: '/ds/fs/adjm/fs_401_01_08p.ozr',
        // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
        odiParam: {
          slipNo: slipNo
        },
        // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
        viewerParam: {
          mode: 'preview' // 미리보기
        },
        // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
        formParam: {}
      };
    }
    ;
  } else {
    if (ds_purchaseEvidenceList.getCellData(Row, 'repBilgClntNo') == '124992') {
      data = {
        reportName: '/ds/fs/adjm/fs_401_01_09p.ozr',
        // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
        odiParam: {
          slipNo: slipNo
        },
        // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
        viewerParam: {
          mode: 'preview',
          // 미리보기
          debug: 'true' // 디버깅
        },
        // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
        formParam: {}
      };
    } else {
      data = {
        reportName: '/ds/fs/adjm/fs_401_01_06p.ozr',
        // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
        odiParam: {
          slipNo: slipNo
        },
        // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
        viewerParam: {
          mode: 'preview' // 미리보기
        },
        // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
        formParam: {}
      };
    }
    ;
  }
  ;
  let options = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", options, data);
};

/**
 * @method 
 * @name f_PrintSlipNo_v2 
 * @description 거래명세서 출력(전표번호) /
 * 2019.10.11 부산지사 이소현 요청사항 : 거래명세서 여러 건 한번에 발행할수 있게 조치
 */
scwin.f_PrintSlipNo_v2 = async function () {
  // btn_Print_v2
  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  let param = '';
  let printCnt = 0;

  //거래처번호: 124992 ->  동부제철(주)
  let yCount = 0; //repBilgClntNo(124992) 인 count
  let nCount = 0; //repBilgClntNo(124992) 제외 count

  if (ds_purchaseEvidenceList.getRowCount() > 0) {
    const rowCnt = ds_purchaseEvidenceList.getRowCount();
    for (let i = 0; i < rowCnt; i++) {
      const rowData = ds_purchaseEvidenceList.getRowJSON(i);
      if (rowData['chk'] == 'T') {
        printCnt++;
        param = param + ',' + rowData['slipNo']; // 전표번호
        rowData['repBilgClntNo'] == '124992' ? yCount++ : nCount++;
      }
      ;
    }
    ;
  }
  ;
  if (printCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ['발행할 거래명세서']); // @을(를) 선택하십시오.
    return;
  } else {
    if (yCount > 0 && nCount > 0) {
      $c.win.alert($p, '명세서 발행시 한건씩 발행 가능합니다.');
      return;
    }
    ;
  }
  ;
  let odiName = reportName = '';
  let odiParam = {};
  let viewerParam = {};
  if (yCount > 0) {
    odiName = 'fs_401_01_06_v3p';
    reportName = '/ds/fs/adjm/fs_401_01_06_v3p.ozr';
    odiParam = {
      'slipNo': param.slice(1)
    };
    viewerParam = {
      mode: 'preview'
    }; // 미리보기
  }
  ;
  if (nCount > 0) {
    odiName = 'fs_401_01_06_v2p';
    reportName = '/ds/fs/adjm/fs_401_01_06_v2p.ozr';
    odiParam = {
      'slipNo': param.slice(1)
    };
    viewerParam = {
      mode: 'preview'
    }; // 미리보기
  }
  ;
  const data = {
    odiName: odiName,
    reportName: reportName,
    // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
    odiParam: odiParam,
    // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
    viewerParam: viewerParam,
    // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
    formParam: {}
  };
  let options = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", options, data);
};

/**
 * @method 
 * @name f_PrintSlipNo_v3 
 * @description 거래명세서 출력(전표번호) /
 * 2019.10.11 2021.11.18 부산지사 이소현 요청사항 : 거래명세서 양식변경 컨테이너 총금액(기본금+할증금액)표시
 */
scwin.f_PrintSlipNo_v3 = async function () {
  // btn_Print_v3
  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  let param = '';
  let printCnt = 0;

  //거래처번호: 124992 ->  동부제철(주)
  let yCount = 0; //repBilgClntNo(124992) 인 count
  let nCount = 0; //repBilgClntNo(124992) 제외 count

  if (ds_purchaseEvidenceList.getRowCount() > 0) {
    const rowCnt = ds_purchaseEvidenceList.getRowCount();
    for (let i = 0; i < rowCnt; i++) {
      const rowData = ds_purchaseEvidenceList.getRowJSON(i);
      if (rowData['chk'] == 'T') {
        printCnt++;
        param = param + ',' + rowData['slipNo']; // 전표번호

        rowData['repBilgClntNo'] == '124992' ? yCount++ : nCount++;
      }
      ;
    }
    ;
  }
  ;
  if (printCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ['발행할 거래명세서']); // @을(를) 선택하십시오.
    return;
  } else {
    if (yCount > 0 && nCount > 0) {
      $c.win.alert($p, '명세서 발행시 한건씩 발행 가능합니다.');
      return;
    }
  }
  ;
  let reportName = '';
  let odiParam = {};
  let viewerParam = {};
  let odiName = {};
  if (yCount > 0) {
    odiName = "fs_401_01_06_v3p", reportName = '/ds/fs/adjm/fs_401_01_06_v3p.ozr';
    odiParam = {
      'slipNo': param.slice(1)
    };
    viewerParam = {
      mode: 'preview'
    }; // 미리보기
  }
  ;
  if (nCount > 0) {
    odiName = "fs_401_01_06_v2p", reportName = '/ds/fs/adjm/fs_401_01_06_v5p.ozr';
    odiParam = {
      'slipNo': param.slice(1)
    };
    viewerParam = {
      mode: 'preview'
    }; // 미리보기
  }
  ;
  const data = {
    odiName: odiName,
    reportName: reportName,
    // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
    odiParam: odiParam,
    // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
    viewerParam: viewerParam,
    // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
    formParam: {}
  };
  let options = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", options, data);
};

/**
 * @method 
 * @name f_PrintSlipNo_v2 
 * @description 거래명세서 출력(전표번호) -- 신대양 제지용 거래명세서 발행 
 */
scwin.f_PrintSlipNoDaeYang = async function () {
  let vCount = 0;
  if (ds_purchaseEvidenceList.getRowCount() > 0) {
    const rowCnt = ds_purchaseEvidenceList.getRowCount();
    for (let i = 0; i < rowCnt; i++) {
      if (ds_purchaseEvidenceList.getCellData(i, 'chk') == 'T') {
        vCount++;
        if (vCount > 1) {
          $c.win.alert($p, '명세서 발행시 한건씩 발행 가능합니다.');
          return;
        }
        ;
      }
      ;
    }
    ;
    let slipNo;
    for (let i = 0; i < rowCnt; i++) {
      if (ds_purchaseEvidenceList.getCellData(i, 'chk') == 'T') {
        slipNo = ds_purchaseEvidenceList.getCellData(i, 'slipNo'); //선택된 ROW
        break;
      }
      ;
    }
    ;
    const data = {
      reportName: '/ds/fs/adjm/fs_401_01_07p.ozr',
      // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
      odiParam: {
        slipNo: slipNo
      },
      // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
      viewerParam: {
        mode: 'preview' // 미리보기
      },
      // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
      formParam: {}
    };
    let options = {
      id: "ozReportPopup",
      popupName: "오즈 리포트",
      modal: true,
      type: "browserPopup",
      width: 1000,
      height: 600,
      title: "오즈 리포트"
    };
    await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", options, data);
  }
  ;
};

/**
 * @method 
 * @name f_PrintSlipNo_v2 
 * @description 거래명세서 출력(전표번호) -- 복화  거래명세서 발행 / 
 * 2019.04.10 부산지사 이소현 요청사항 : 거래명세서 여러 건 한번에 발행할수 있게 조치
 */
scwin.f_PrintSlipNoBokhwa = async function () {
  // btn_Print
  let param = '';
  let printCnt = 0;

  //거래처번호: 124992 ->  동부제철(주)
  let yCount = 0; //repBilgClntNo(124992) 인 count
  let nCount = 0; //repBilgClntNo(124992) 제외 count

  const rowCnt = ds_purchaseEvidenceList.getRowCount();
  if (rowCnt == 0) return;
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_purchaseEvidenceList.getRowJSON(i);
    if (rowData['chk'] == 'T') {
      printCnt++;
      param = param + ',' + rowData['slipNo']; // 전표번호

      rowData['repBilgClntNo'] == '124992' ? yCount++ : nCount++;
    }
    ;
  }
  ;
  if (printCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ['발행할 거래명세서']); // @을(를) 선택하십시오.
    return;
  } else {
    if (yCount > 0 && nCount > 0) {
      $c.win.alert($p, '명세서 발행시 한건씩 발행 가능합니다.');
      return;
    }
    ;
  }
  ;
  let reportName = '';
  let odiParam = {};
  let viewerParam = {};
  if (yCount > 0) {
    reportName = '/ds/fs/adjm/fs_401_01_08_v3p.ozr';
    odiParam = {
      'slipNo': param.slice(1)
    };
    viewerParam = {
      mode: 'preview'
    }; // 미리보기
  }
  ;
  if (nCount > 0) {
    reportName = '/ds/fs/adjm/fs_401_01_08p.ozr';
    odiParam = {
      'slipNo': param.slice(1)
    };
    viewerParam = {
      mode: 'preview'
    }; // 미리보기
  }
  ;
  const data = {
    reportName: reportName,
    // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
    odiParam: odiParam,
    // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
    viewerParam: viewerParam,
    // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
    formParam: {}
  };
  let options = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", options, data);
};

/**
 * @method 
 * @name f_RunExcel 
 * @description 엑셀 다운로드
 */
scwin.f_RunExcel = async function (value) {
  switch (value) {
    case 'A':
      let countA = ds_purchaseEvidenceList.getRowCount();
      if (!(countA > 0)) {
        $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
        return;
      }
      ;
      break;
    case 'B':
      let countB = ds_purchaseCertiList.getRowCount();
      if (!(countB > 0)) {
        $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
        return;
      }
      break;
    default:
      break;
  }
  ;
  let opt = {
    callBackParam: {
      excelValue: value
    }
  };
  const retConfirm = await $c.win.confirm($p, 'EXCEL로 다운로드 받으시겠습니까?');
  if (!retConfirm) return;
  let gridComp = {}; // 그리드ID
  let sheetName = ''; // 생성될 엑셀 파일의 쉬트명

  switch (value) {
    case 'A':
      gridComp = gr_purchaseEvidenceList;
      sheetName = '접수완료 세금계산서';
      break;
    case 'B':
      gridComp = gr_purchaseCertiList;
      sheetName = '세금계산서 미접수 거래명세서';
      break;
    default:
      break;
  }
  ;
  let infoArr = [{
    text: sheetName,
    rowIndex: 0,
    colSpan: gridComp.getTotalCol(),
    textAlign: 'center',
    fontSize: '12px',
    fontName: '돋움체',
    color: 'black',
    bgColor: '#ffffff'
  }];
  const options = {
    sheetName: sheetName,
    fileName: sheetName + ".xlsx",
    startRowIndex: 2,
    useHeaderCheckBoxLabel: true
  };
  $c.data.downloadGridViewExcel($p, gridComp, options, infoArr);
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
  let comCodeComp, codeNameArray;
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
  switch (disGubun) {
    case 1:
      // 협력회사 팝업
      comCodeComp = udc_pchsClnt;
      codeNameArray = [ed_pchsClntNo, txt_pchsClntNm]; // 협력회사코드, 협력회사명
      break;
    case 2:
      // 매입부서 팝업
      comCodeComp = udc_pchsDept;
      codeNameArray = [ed_pchsDeptCd, txt_pchsDeptNm]; // 매입부서코드, 매입부서명
      break;
    case 3:
      // 작성자 팝업
      comCodeComp = udc_drawEmp;
      codeNameArray = [ed_drawEmpNo, txt_drawEmpNm]; // 사원번호, 사원명
      break;
    case 4:
      // 작성귀속부서 팝업
      comCodeComp = udc_drawAcctDept;
      codeNameArray = [ed_drawAcctDeptCd, txt_drawAcctDeptNm]; // 작성귀속부서코드, 작성귀속부서명
      break;
    default:
      break;
  }
  ;
  comCodeComp.cfCommonPopUp(rtnList => {
    $c.gus.cfSetReturnValue($p, rtnList, codeNameArray[0], codeNameArray[1]);
  }, pCode.trim(), pName, pClose, pDispCnt, pTitle, pWidth, pHidden, pWhere, pW, pH, pTop, pLeft, pExistTF, pAllSearch, pWtitleSearch, pNoDataCloseTF);
};

/**
 * @method 
 * @name f_chkOpenCommonPopUp 
 * @description 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 * @param {object} inObj
 * @param {object} pairObj
 * @param {number} disGubun
 * @param {string} isCode
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

/**
 * @method 
 * @name f_openCommPopUpGrid 
 * @description Grid Popup : 송화주
 */
scwin.f_openCommPopUpGrid = function (disGubun, row, pClose) {
  // 선언부
  let rtnList = new Array(); // 공통POP-UP -> 요청화면
  let pCode = '';
  let pName = '';
  const rowData = ds_purchaseEvidenceList.getRowJSON(row);
  switch (disGubun) {
    case 1:
      //email
      pCode = rowData['pchsClntNo'];
      pName = rowData['email'];
      let where = '';
      let check = 'F';
      gridComcode.setSelectId('retrieveClntEmail');
      rtnList = gridComcode.cfCommonPopUp(rtnList => {
        if (rtnList != null && rtnList[0] != 'N/A') {
          ds_purchaseEvidenceList.setCellData(row, 'email', rtnList[0]);
        }
        ;
      }, pCode, pName, check, null, null, null, null, where, null, null, null, null);
      break;
  }
  ;
};

/**
 * @method 
 * @name f_regstEmail 
 * @description e-mail등록
 */
scwin.f_regstEmail = function () {
  // TODO - asis는 공통에서 처리하는 것으로 보임
  const menuCode = 'fi_100_01_03b.xml;';
  const fileURL = '/ui/ac/fi/stdinfomgnt/fi_100_01_03b.xml';
  const tabTitle = '전자세금계산서거래처관리';
  $c.win.openMenu($p, tabTitle, fileURL, menuCode);
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name sbm_purchaseCertiQueryConditionDTO_submit 
 * @description 세금계산서등록현황 조회 요청 전
 */
scwin.sbm_purchaseCertiQueryConditionDTO_submit = function (e) {
  dma_purchaseCertiQueryConditionDTO.set('pchsClntNo', ed_pchsClntNo.getValue());
  dma_purchaseCertiQueryConditionDTO.set('pchsIntendDtSt', ed_pchsIntendDtSt.getValue());
  dma_purchaseCertiQueryConditionDTO.set('pchsIntendDtEnd', ed_pchsIntendDtEnd.getValue());
  dma_purchaseCertiQueryConditionDTO.set('pchsDeptCd', ed_pchsDeptCd.getValue());
};

/**
 * @event 
 * @name sbm_purchaseCertiQueryConditionDTO_submiterror 
 * @description 세금계산서등록현황 조회 정상
 */
scwin.sbm_purchaseCertiQueryConditionDTO_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  let rowCnt;

  // 매입증빙목록
  // 총 조회건수 표시
  rowCnt = ds_purchaseEvidenceList.getRowCount();
  totalRowsTop.setValue(rowCnt);
  if (rowCnt == 0) {
    // $c.gus.cfDisableBtnOnly([btn_Print]);
    await $c.gus.cfAlertMsg($p, '접수완료 세금계산서 조회결과가 존재하지 않습니다.');
  } else {
    // $c.gus.cfEnableBtnOnly([btn_Print]);
  }
  ;
  gr_purchaseCertiList._dataList.setBroadcast(true, true);

  // 미접수거래명세서목록
  // 총 조회건수 표시
  rowCnt = ds_purchaseCertiList.getRowCount();
  totalRowsBottom.setValue(rowCnt);
  txt_summary.setValue(''); // 적요
  ed_drawEmpNo.setValue(''); // 작성자코드
  txt_drawEmpNm.setValue(''); // 작성자명
  ed_drawAcctDeptCd.setValue(''); // 작성귀속부서코드
  txt_drawAcctDeptNm.setValue(''); // 작성귀속부서명

  if (rowCnt == 0) {
    $c.gus.cfDisableBtnOnly($p, [btn_Save]);
    $c.gus.cfAlertMsg($p, '세금계산서 미접수 거래명세서 조회결과가 존재하지 않습니다.');
  } else {
    $c.gus.cfEnableBtnOnly($p, [btn_Save]);
  }
  ;
};

/**
 * @event 
 * @name sbm_purchaseCertiQueryConditionDTO_submiterror 
 * @description 세금계산서등록현황 조회 오류
 */
scwin.sbm_purchaseCertiQueryConditionDTO_submiterror = function (e) {
  // $c.gus.cfAlertMsg(sbm_purchaseCertiQueryConditionDTO.ErrorMsg);
};

/**
 * @event 
 * @name sbm_saveRegistTaxInvoiceHistory_submitdone 
 * @description 세금계산서이력 등록 정상
 */
scwin.sbm_saveRegistTaxInvoiceHistory_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  // sbm_saveRegistTaxInvoiceHistory.UseChangeInfo = true;
};

/**
 * @event 
 * @name sbm_saveRegistPurchaseEvidence_submit 
 * @description 세금계산서 접수 요청 전
 */
scwin.sbm_saveRegistPurchaseEvidence_submit = function (e) {
  dma_purchaseCerti.set('pchsClntNo', ed_pchsClntNo.getValue());
  dma_purchaseCerti.set('summary', txt_summary.getValue());
  dma_purchaseCerti.set('drawEmpNo', ed_drawEmpNo.getValue());
  dma_purchaseCerti.set('drawAcctDeptCd', ed_drawAcctDeptCd.getValue());
};

/**
 * @event 
 * @name sbm_saveRegistTaxInvoiceHistory_submitdone 
 * @description 세금계산서 접수 정상
 */
scwin.sbm_saveRegistPurchaseEvidence_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  scwin.f_RetrieveTaxInvoiceRegistPresent();
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name gr_purchaseEvidenceList_oncellclick 
 * @description 셀이 클릭된 경우 발생
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @param {string} columnId
 */
scwin.gr_purchaseEvidenceList_oncellclick = function (rowIndex, columnIndex, columnId) {
  // 계산서 출력시 1건만 선택
  //그리드클릭 이벤트처리(거래영세서 출력)
  if (rowIndex == -1) return;
  const rowData = ds_purchaseEvidenceList.getRowJSON(rowIndex);
  if (columnId == 'slipNo' && rowData['slipNo'] != '') {
    scwin.f_PrintSlipNo(rowIndex, rowData['slipNo'], rowData['repBilgClntNo']);
  }
  ;
};

/**
 * @event 
 * @name gr_purchaseCertiList_onheaderclick 
 * @description 헤더가 클릭된 경우 발생
 * @param {string} headerId
 */
scwin.gr_purchaseCertiList_onheaderclick = function (headerId) {
  if (headerId != 'chkHeader') return;

  // 미접수거래명세서목록 전체선택 / 전체취소
  let chkVal = gr_purchaseCertiList.getHeaderValue('chkHeader');
  chkVal == '1' ? scwin.f_SetDrawInfo('SET') : scwin.f_SetDrawInfo('CLEAR');
};

/**
 * @event 
 * @name gr_purchaseCertiList_oncellclick 
 * @description 셀이 클릭된 경우 발생
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @param {string} columnId
 */
scwin.gr_purchaseCertiList_oncellclick = function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    // 작성자, 작성부서 세팅
    case 'chk':
      scwin.f_SetDrawInfo("SET");
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name udc_pchsClnt_onblurCodeEvent 
 * @description 매입거래처 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_pchsClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNo, txt_pchsClntNm, 1);
};

/**
 * @event 
 * @name udc_pchsClnt_onblurCodeEvent 
 * @description 매입거래처 name 컴포넌트의 value가 변경되었을 때 발생한다.
 */
scwin.udc_pchsClnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_pchsClntNm, ed_pchsClntNo, 1, false);
};

/**
 * @event 
 * @name udc_pchsClnt_onclickEvent 
 * @description 매입거래처 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생.
 */
scwin.udc_pchsClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_pchsClntNo.getValue(), txt_pchsClntNm.getValue(), 'F', 'F');
};

/**
 * @event 
 * @name udc_pchsDept_onblurCodeEvent 
 * @description 매입부서 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_pchsDept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptCd, txt_pchsDeptNm, 2);
};

/**
 * @event 
 * @name udc_pchsDept_onviewchangeNameEvent 
 * @description 매입부서 name 컴포넌트의 value가 변경되었을 때 발생한다.
 */
scwin.udc_pchsDept_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_pchsDeptNm, ed_pchsDeptCd, 2, false);
};

/**
 * @event 
 * @name udc_pchsDept_onclickEvent 
 * @description 매입부서 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생.
 */
scwin.udc_pchsDept_onclickEvent = function (e) {
  f_openCommonPopUp(2, ed_pchsDeptCd.getValue(), txt_pchsDeptNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_drawEmp_onblurCodeEvent 
 * @description 작성자 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_drawEmp_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_drawEmpNo, txt_drawEmpNm, 3);
};

/**
 * @event 
 * @name udc_pchsDept_onviewchangeNameEvent 
 * @description 작성자 name 컴포넌트의 value가 변경되었을 때 발생한다.
 */
scwin.udc_drawEmp_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_drawEmpNm, ed_drawEmpNo, 3, false);
};

/**
 * @event 
 * @name udc_drawEmp_onclickEvent 
 * @description 작성자 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생.
 */
scwin.udc_drawEmp_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_drawEmpNo.getValue(), txt_drawEmpNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_drawAcctDept_onblurCodeEvent 
 * @description 작성귀속부서 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_drawAcctDept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_drawAcctDeptCd, txt_drawAcctDeptNm, 4);
};

/**
 * @event 
 * @name udc_drawAcctDept_onviewchangeNameEvent 
 * @description 작성부서 name 컴포넌트의 value가 변경되었을 때 발생한다.
 */
scwin.udc_drawAcctDept_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_drawAcctDeptNm, ed_drawAcctDeptCd, 4, false);
};

/**
 * @event 
 * @name udc_drawAcctDept_onclickEvent 
 * @description 작성부서 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생.
 */
scwin.udc_drawAcctDept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_drawAcctDeptCd.getValue(), txt_drawAcctDeptNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name excelDownTop 
 * @description 상단 그리드 엑셀 다운로드
 */
scwin.excelDownTop = function () {
  scwin.f_RunExcel('A');
};

/**
 * @event 
 * @name excelDownTop 
 * @description 하단 그리드 엑셀 다운로드
 */
scwin.excelDownBottom = function () {
  scwin.f_RunExcel('B');
};

// scwin.f_regstEmail ???
/**
 * @method 
 * @name gridFormat
 * @description 그리드 customFormatter
 */
scwin.gridFormat = function (data, formattedData, rowIndex, colIndex) {
  let colID = this.getColumnID(colIndex);
  let gridDlt = $p.getComponentById(this.getDataList());
  switch (colID) {
    case 'sumAmt':
      let rowData = gridDlt.getRowJSON(rowIndex);
      let totalVal = $c.num.parseInt($p, rowData['spplyAmt']) + $c.num.parseInt($p, rowData['vat']);
      return $c.num.formatNumber($p, totalVal);
    default:
      break;
  }
  ;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'group3',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'협력회사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'section flex-col',id:''},E:[{T:1,N:'xf:group',A:{class:'sch-box',id:''}}]},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'0',allowCharCode:'0-9',codeId:'ed_pchsClntNo',id:'udc_pchsClnt',mandatoryCode:'true',mandatoryName:'false',maxlengthCode:'6',nameId:'txt_pchsClntNm',objTypeCode:'Data',objTypeName:'data',popupID:'',selectID:'retrieveClntList',style:'',validExpCode:'협력회사:yes',validTitle:'협력회사','ev:onblurCodeEvent':'scwin.udc_pchsClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_pchsClnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_pchsClnt_onclickEvent',label:'test',btnId:'btn_pchsClntNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공급일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ed_pchsIntendDtSt',edToId:'ed_pchsIntendDtEnd',id:'udc_fromToCalendar1',mandatoryFrom:'true',mandatoryTo:'true',objType:'Data',objTypeBtn:'data',objTypeFrom:'Data',objTypeTo:'Data',refDataMap:'dma_ed_pchsIntendDt',refEdDt:'to',refStDt:'from',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'section flex-col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'sch-box',id:''}}]},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',codeId:'ed_pchsDeptCd',id:'udc_pchsDept',mandatoryCode:'false',mandatoryName:'false',maxlengthCode:'4',nameId:'txt_pchsDeptNm',objTypeCode:'Data',objTypeName:'Data',popupID:'',selectID:'retrieveLobranInfo',style:'',validExpCode:'매입부서:yes',validTitle:'','ev:onblurCodeEvent':'scwin.udc_pchsDept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_pchsDept_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_pchsDept_onclickEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'trigger5',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false','ev:onclick':'scwin.f_RetrieveTaxInvoiceRegistPresent',id:'trigger6',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'접수완료 세금계산서',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_purchaseEvidenceList',gridDownFn:'excelDownTop',gridDownYn:'Y',btnUser:'Y',btnPlusYn:'Y',gridUpYn:'N',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',columnMove:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true',dataList:'data:ds_purchaseEvidenceList',defaultCellHeight:'24',editModeEvent:'onclick',id:'gr_purchaseEvidenceList',rowNumWidth:'40',sortable:'true',sortedIconPosition:'left',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_purchaseEvidenceList_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption16',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'chkHeader',inputType:'checkbox',sortable:'false',width:'50',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'계산서번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'공급일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'정산부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',sortable:'false',value:'적요',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',sortable:'false',value:'공급금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',sortable:'false',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',sortable:'false',value:'합계금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',sortable:'false',value:'전자인증',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',escape:'false',id:'column32',inputType:'text',value:'전표번호<br/>(명세서출력)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',escape:'false',id:'column35',inputType:'text',sortable:'false',value:'공급받는자<br/>(동부)E-MAIL',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',sortable:'false',value:'신고제외여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',value:'신고상태',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',value:'회사',width:'70',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',falseValue:'F',fixColumnWidth:'true',id:'chk',inputType:'checkbox',trueValue:'T',width:'50',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsVatNo',inputType:'text',readOnly:'true',textAlign:'center',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyDt',inputType:'calendar',ioFormat:'yyyy/MM/dd',readOnly:'true',textAlign:'center',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'adjmDept',inputType:'text',readOnly:'true',textAlign:'center',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'summary',inputType:'text',readOnly:'true',textAlign:'left',width:'140'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'spplyAmt',readOnly:'true',textAlign:'right',width:'100',displayFormatter:'$c.num.formatNumber',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'vat',inputType:'text',readOnly:'true',textAlign:'right',width:'100',displayFormatter:'$c.num.formatNumber',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumAmt',inputType:'text',readOnly:'true',textAlign:'right',width:'100',displayFormatter:'$c.num.formatNumber',dataType:'number',customFormatter:'scwin.gridFormat',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',expression:'$c.gus.decode(\'elecAuthTrgtYn\', 1, "Y", 0, "N")',id:'elecAuthTrgtYn',inputType:'expression',readOnly:'true',textAlign:'center',width:'100'}},{T:1,N:'w2:column',A:{class:'underline',displayMode:'label',id:'slipNo',inputType:'text',readOnly:'true',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'email',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'declarExceptYn',inputType:'select',textAlign:'center',width:'100'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'No'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarSts',inputType:'text',readOnly:'true',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'repBilgClntNo',inputType:'text',readOnly:'true',textAlign:'left',width:'70',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRowsTop',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'w2:button',A:{class:'btn link',id:'button22',label:'E-mail등록',style:'','ev:onclick':'scwin.f_regstEmail'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:button',A:{class:'btn white','ev:onclick':'scwin.f_PrintSlipNo_v3',id:'btn_Print_v2',label:'거래명세서 출력',style:'',userAuth:'P'}},{T:1,N:'w2:button',A:{class:'btn white','ev:onclick':'scwin.f_PrintSlipNo_v2',id:'btn_Print_v3',label:'할증포함 거래명세서',style:'',userAuth:'P'}},{T:1,N:'w2:button',A:{class:'btn white','ev:onclick':'scwin.f_PrintSlipNoBokhwa',id:'btn_Print',label:'협력업체 거래명세서',style:'',userAuth:'P'}},{T:1,N:'w2:button',A:{class:'btn white','ev:onclick':'scwin.f_Print',id:'btn_Print1',label:'세금계산서 출력',style:'',userAuth:'P'}}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'세금계산서 미접수 거래명세서',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_purchaseCertiList',gridDownFn:'excelDownBottom',templateYn:'N',gridUpYn:'N',gridDownYn:'Y',btnUser:'Y',btnPlusYn:'Y',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',columnMove:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true',dataList:'data:ds_purchaseCertiList',editModeEvent:'onclick',id:'gr_purchaseCertiList',rowNumWidth:'40',sortable:'true',sortedIconPosition:'left',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:onheaderclick':'scwin.gr_purchaseCertiList_onheaderclick','ev:oncellclick':'scwin.gr_purchaseCertiList_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption17',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',falseValue:'F',fixColumnWidth:'true',id:'chkHeader',inputType:'checkbox',sortable:'false',trueValue:'T',value:' ',width:'50',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'거래명세서번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'매입항목',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'매입예정일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'매입부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'비고',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'공급금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'합계금액',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',falseValue:'F',fixColumnWidth:'t',id:'chk',inputType:'checkbox',trueValue:'T',value:'',width:'50',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',readOnly:'true',textAlign:'center',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',readOnly:'true',textAlign:'center',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'pchsIntendDt',inputType:'calendar',ioFormat:'yyyy/MM/dd',readOnly:'true',textAlign:'center',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'pchsDeptCd',inputType:'text',textAlign:'center',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'rmk',inputType:'text',readOnly:'true',textAlign:'left',width:'140'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'spplyAmt',inputType:'text',readOnly:'true',textAlign:'right',width:'100',displayFormatter:'$c.num.formatNumber',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat',inputType:'text',readOnly:'true',style:'',textAlign:'right',value:'',width:'100',displayFormatter:'$c.num.formatNumber',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumAmt',inputType:'',readOnly:'true',style:'',textAlign:'right',value:'',width:'100',customFormatter:'scwin.gridFormat',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRowsBottom',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control col6','ev:onkeyup':'scwin.txt_summary_onkeyup',id:'txt_summary',mandatory:'true',style:'',validExp:'적요:yes'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'sch-box',id:'',style:''}},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'0',allowCharCode:'0-9',codeId:'ed_drawEmpNo',id:'udc_drawEmp',mandatoryCode:'true',mandatoryName:'false',maxlengthCode:'6',maxlengthName:'50',nameId:'txt_drawEmpNm',objTypeCode:'Data',objTypeName:'data',popupID:'',selectID:'retrieveEmpInfo',style:'',validExpCode:'작성자:yes',validTitle:'','ev:onblurCodeEvent':'scwin.udc_drawEmp_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_drawEmp_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_drawEmp_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'sch-box',id:'',style:''}},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',codeId:'ed_drawAcctDeptCd',id:'udc_drawAcctDept',mandatoryCode:'true',mandatoryName:'false',maxlengthCode:'5',nameId:'txt_drawAcctDeptNm',objTypeCode:'Data',objTypeName:'Data',popupID:'',selectID:'retrieveAcctDeptCdInfo',style:'width:%; height:px; ',validExpCode:'작성부서:yes',validTitle:'','ev:onblurCodeEvent':'scwin.udc_drawAcctDept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_drawAcctDept_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_drawAcctDept_onclickEvent'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:button',A:{class:'btn white','ev:onclick':'scwin.f_RegistPurchaseEvidence',id:'btn_Save',label:'세금계산서 접수',objType:'ctrlBtn',style:'',userAuth:'U'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:''},E:[{T:1,N:'w2:iframe',A:{src:'',style:'width:500px; height:1000px;display: none;',id:'iframe1'}}]},{T:1,N:'xf:group',A:{style:'display: none;',id:'hideGroup',class:''},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'',codeId:'',popupID:'',validTitle:'',nameId:'',style:'width:%; height:px; ',id:'gridComcode'}}]}]}]}]})