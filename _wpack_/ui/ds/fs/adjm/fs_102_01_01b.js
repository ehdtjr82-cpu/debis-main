/*amd /ui/ds/fs/adjm/fs_102_01_01b.xml 79157 6fa600e9007eca9b985031b66ab7b4ef3d534e19ee4ea60bf0cb00ba453ba6c5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_wrkDt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ed_wrkDtSt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ed_wrkDtEnd',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_copCoConfirmDt',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'ed_copCoConfirmDtSt',name:'name1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'ed_copCoConfirmDtEnd',name:'name2'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchContainerTpchsList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'매입거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsDeptCd',name:'매입부서코드(물류점소)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtCls',name:'일자구분(실적일자/확인일자)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtSt',name:'실적일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtEnd',name:'실적일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoConfirmDtSt',name:'협력업체확인일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoConfirmDtEnd',name:'협력업체확인일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoConfirmClsCd',name:'협력업체확인구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsAdmitClsCd',name:'매입승인구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'unconfirmedIncluYn',name:'미확인포함여부',dataType:'number',defaultValue:'',encYN:'',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'unAdmitIncluYn',name:'미승인포함여부',dataType:'number'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'realMchtClntNo',name:'화주거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrBox',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'incluYn',name:'구분(미확인포함여부/미승인포함여부)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modId',name:'수정자id(담당자)',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_containerTpchsList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'운송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호(화물추적 링크)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrInfo',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondNm',name:'운송조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'basisTpchs',name:'기본하불',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScAmt',name:'할증금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScItem',name:'할증항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoConfirmDt',name:'확인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPic',name:'배차담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmpstcrgKndNm',name:'복화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoConfirmClsNm',name:'확인구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdmitClsNm',name:'동부승인구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdmitClsCd',name:'동부승인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dissent',name:'이의처리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pstpnRsn',name:'보류사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoConfirmClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'btn',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmpstcrgKndCd',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsPic',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'name57',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cntrBox','ev:onkeyset':'scwin.dma_cntrBox_onkeyset'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'value',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_saveContainerTpchsList',action:'/ds.fs.adjm.pchscerticoll.RegistCooperationCompanyConfirmationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_containerTpchsList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchContainerTpchsList',action:'/ds.fs.adjm.pchscerticoll.RetrieveContainerTpchsListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchContainerTpchsList","key":"IN_DS1"},{"id":"ds_containerTpchsList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_containerTpchsList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.submitPre','ev:submiterror':'scwin.sbm_searchContainerTpchsList_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
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
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: 'FS262',
    compID: 'acb_pchsAdmitClsCd'
  }, {
    grpCd: 'SD113',
    compID: 'acb_odrKndCd'
  }, {
    grpCd: 'FS261',
    compID: 'acb_copCoConfirmClsCd'
  }];
  $c.data.setCommonCode($p, codeOptions, () => {
    acb_copCoConfirmClsCd.addItem('전체', '', '', 0);
    acb_pchsAdmitClsCd.addItem('전체', '', '', 0);
    acb_odrKndCd.addItem('전체', '', '', 0);
  });
};

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
  const loginDTO = $c.data.getMemInfo($p); // 공통 세션 변수
  scwin.userClsCd = loginDTO.userClsCd; // 사용자구분코드(02:협력업체(운송))
  scwin.loginClntNo = loginDTO.clntNo;
  scwin.loginClntNm = loginDTO.clntNm;
  scwin.vCurDate = $c.date.getServerDateTime($p, 'yyyyMMdd'); // 서버를 기준으로 현재 날짜 반환
  scwin.vQryStDt = scwin.vCurDate.slice(0, 6) + '01'; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
  scwin.vQryEndDt = scwin.vCurDate.slice(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vQryStDt); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

  scwin.pchsSelAmt = 0;
  scwin.pchsSelCount = 0;
  scwin.pchsDcScSelAmt = 0;
};

/**
 * @method 
 * @name f_OnLoad
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  acb_dtCls.setSelectedIndex(0); // 일자구분
  scwin.f_SelWrkDt();
  scwin.f_SetDefaultData();
  $c.gus.cfDisableAllBtn($p);
  $c.gus.cfDisableObjects($p, [ica_allCopCoConfirmDt]);

  // 테스트 데이터
  // ed_pchsClntNo.setValue('101323');
  // dma_wrkDt.set('ed_wrkDtSt', '20250101');
};

/**
 * @method 
 * @name f_SetDefaultData
 * @description Default Data Setting
 */
scwin.f_SetDefaultData = function () {
  scwin.f_GetConfirmCntTotAmt(); // 건수/총금액 계산

  dma_wrkDt.set('ed_wrkDtSt', scwin.vQryStDt); // 실적일자시작		
  dma_wrkDt.set('ed_wrkDtEnd', scwin.vQryEndDt); // 실적일자종료

  dma_wrkDt.set('ed_copCoConfirmDtSt', scwin.vQryStDt); // 확인일자시작
  dma_wrkDt.set('ed_copCoConfirmDtEnd', scwin.vQryEndDt); // 확인일자종료

  // IME관련 사용불가
  // cfSetIMEModeActiveObjects([txt_pchsDeptNm, txt_vehclNo, txt_pchsClntNm, txt_realMchtClntNm, txt_dptWrkPlNm, txt_arvWrkPlNm]);  // IME 한글입력
  acb_copCoConfirmClsCd.setSelectedIndex(0);
  acb_pchsAdmitClsCd.setSelectedIndex(0);
  acb_odrKndCd.setSelectedIndex(0);
  if (scwin.userClsCd != '01') {
    // 내부사용자가 아니면
    ed_pchsClntNo.setValue(scwin.loginClntNo);
    txt_pchsClntNm.setValue(scwin.loginClntNm);
    ed_pchsClntNo.setDisabled(true);
    txt_pchsClntNm.setDisabled(true);
    img_PopUp1.setDisabled(true);
  } else {
    ed_pchsClntNo.focus();
  }
  ;
};

/**
 * @method 
 * @name f_RetrieveContainerTpchsList
 * @description 컨테이너하불목록 조회
 */
scwin.f_RetrieveContainerTpchsList = async function () {
  //컨테이너 넘버를 노란색 필드와 하얀색 모두 입력했을 시
  if (dma_cntrBox.get('value') != '' && ed_cntrNo.getValue() != '') {
    $c.win.alert($p, '컨테이너 다중검색의 경우 앞의 하얀 컨테이너박스의 내용을 삭제해주세요.');
    return;
  }
  ;

  // 검색조건 필수 입력 체크, 동일 날짜 포함 여부 체크
  if (['01', '03'].includes(acb_dtCls.getValue())) {
    // 실적일자/운송일자 기준			
    if (!(await $c.gus.cfValidate($p, [ed_pchsClntNo, ed_wrkDtSt, ed_wrkDtEnd]))) {
      return;
    }
    ;
    if (!$c.gus.cfIsAfterDate($p, ed_wrkDtSt.getValue(), ed_wrkDtEnd.getValue())) {
      $c.gus.cfAlertMsg($p, '조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.');
      ed_wrkDtSt.focus();
      return;
    }
    ;
  } else if (acb_dtCls.getValue() == '02') {
    // 확인일자 기준
    if (!$c.gus.cfValidate($p, [ed_pchsClntNo, ed_copCoConfirmDtSt, ed_copCoConfirmDtEnd])) {
      return;
    }
    ;
    if (!$c.gus.cfIsAfterDate($p, dma_copCoConfirmDt.get('ed_copCoConfirmDtSt'), dma_copCoConfirmDt.get('ed_copCoConfirmDtEnd'))) {
      $c.gus.cfAlertMsg($p, '조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.');
      ed_copCoConfirmDtSt.focus();
      return;
    }
    ;
  }
  ;

  // 구분(미확인포함여부/미승인포함여부)- 쿼리문에서 사용
  let data = 'Y';
  if (cbx_unconfirmedIncluYn.getValue() == '0' && cbx_unAdmitIncluYn.getValue() == '0') {
    data = 'N';
  }
  ;
  dma_searchContainerTpchsList.set('incluYn', data);
  await scwin.submitExcute(sbm_searchContainerTpchsList);
};

/**
 * @method 
 * @name f_Confirm
 * @description 컨테이너하불 확인
 */
scwin.f_Confirm = function () {
  let rowCnt;

  // Data 변경 여부 조회
  if (!ds_containerTpchsList.getModifiedIndex().length) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['자료']);
    return;
  }
  ;

  // 협력업체확인구분(FS261)이 01:미확인, 03:이의신청, 04:이의거부, 05:이의수용
  rowCnt = ds_containerTpchsList.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    const rowData = ds_containerTpchsList.getRowJSON(i);
    if (rowData.chk == 'T') {
      if (rowData.copCoConfirmClsCd == '02') {
        $c.gus.cfAlertMsg($p, '이미 확인된 건이 포함되어 있습니다.');
        return;
      }
      ;
    }
    ;
  }
  ;

  // 일괄적용 확인일자
  let allCopCoConfirmDt = ica_allCopCoConfirmDt.getValue(); // 해당 컴포넌트 미존재
  if ($c.gus.cfIsNull($p, allCopCoConfirmDt) || allCopCoConfirmDt == '') {
    allCopCoConfirmDt = scwin.vCurDate;
  }
  ;
  rowCnt = ds_containerTpchsList.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    if (ds_containerTpchsList.getCellData(i, 'chk') == 'T') {
      ds_containerTpchsList.setCellData(i, 'copCoConfirmClsCd', '02');
      ds_containerTpchsList.setCellData(i, 'copCoConfirmClsNm', '확인');
      ds_containerTpchsList.setCellData(i, 'copCoConfirmDt', allCopCoConfirmDt); // 일괄적용 확인일자
      ds_containerTpchsList.setCellData(i, 'btn', 'T');
      ds_containerTpchsList.setCellData(i, 'chk', 'F');
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name f_ConfirmDtUpdate
 * @description 컨테이너하불 확인일자 수정
 */
scwin.f_ConfirmDtUpdate = function () {
  // Data 변경 여부 조회
  if (ds_containerTpchsList.getModifiedIndex().length <= 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['자료']);
    return;
  }
  ;

  // 협력업체확인구분(FS261)이 02:확인 이면서 매입승인구분(FS262)이 01:미승인, 03:보류
  const rowCnt = ds_containerTpchsList.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    const rowData = ds_containerTpchsList.getRowJSON(i);
    if (rowData.chk == 'T') {
      if (rowData.copCoConfirmClsCd != '02') {
        $c.gus.cfAlertMsg($p, '미확인인 건이 포함되어 있습니다.');
        return;
      }
      ;
      if (rowData.pchsAdmitClsCd == '02') {
        $c.gus.cfAlertMsg($p, '이미 동부 승인이 이루어진 건이 포함되어 있습니다.');
        return;
      }
      ;
    }
    ;
  }
  ;

  // 일괄적용 확인일자
  let allCopCoConfirmDt = ica_allCopCoConfirmDt.getValue();
  if ($c.gus.cfIsNull($p, allCopCoConfirmDt) || allCopCoConfirmDt == '') {
    allCopCoConfirmDt = scwin.vCurDate;
  }
  ;
  for (let i = 0; i < rowCnt; i++) {
    if (ds_containerTpchsList.getCellData(i, 'chk') == 'T') {
      ds_containerTpchsList.setCellData(i, 'copCoConfirmDt', allCopCoConfirmDt); // 일괄적용 확인일자
      ds_containerTpchsList.setCellData(i, 'btn', 'T');
      ds_containerTpchsList.setCellData(i, 'chk', 'F');
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name f_ConfirmCancel
 * @description 컨테이너하불 확인 취소
 */
scwin.f_ConfirmCancel = function () {
  // Data 변경 여부 조회
  if (ds_containerTpchsList.getModifiedIndex().length <= 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['자료']);
    return;
  }
  ;

  // 협력업체확인구분(FS261)이 02:확인 이면서 매입승인구분(FS262)이 01:미승인
  const rowCnt = ds_containerTpchsList.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    const rowData = ds_containerTpchsList.getRowJSON(i);
    if (rowData.chk == 'T') {
      if (rowData.copCoConfirmClsCd != '02') {
        $c.gus.cfAlertMsg($p, '미확인인 건이 포함되어 있습니다.');
        return;
      }
      ;
      if (rowData.pchsAdmitClsCd != '01') {
        $c.gus.cfAlertMsg($p, '이미 동부 승인이 이루어진 건이 포함되어 있습니다.');
        return;
      }
      ;
    }
    ;
  }
  ;
  for (let i = 0; i < rowCnt; i++) {
    if (ds_containerTpchsList.getCellData(i, 'chk') == 'T') {
      ds_containerTpchsList.setCellData(i, 'copCoConfirmClsCd', '01');
      ds_containerTpchsList.setCellData(i, 'copCoConfirmClsNm', '미확인');
      ds_containerTpchsList.setCellData(i, 'copCoConfirmDt', '');
      ds_containerTpchsList.setCellData(i, 'rsltsPic', ''); // 실적담당자
      ds_containerTpchsList.setCellData(i, 'btn', 'T');
      ds_containerTpchsList.setCellData(i, 'chk', 'F');
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name f_DissentApply
 * @description 컨테이너하불 이의제기
 */
scwin.f_DissentApply = function () {
  // Data 변경 여부 조회
  if (ds_containerTpchsList.getModifiedIndex().length <= 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['자료']);
    return;
  }
  ;

  // 협력업체확인구분(FS261)이 01:미확인, 04:이의거부, 05:이의수용
  const rowCnt = ds_containerTpchsList.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    const rowData = ds_containerTpchsList.getRowJSON(i);
    if (rowData.chk == 'T') {
      if (['02', '03'].includes(rowData.copCoConfirmClsCd)) {
        $c.gus.cfAlertMsg($p, '확인된 건이 포함되어 있습니다.\n해당건은 먼저 확인취소를 해야 합니다.');
        return;
      }
      ;
    }
    ;
  }
  ;
  for (let i = 0; i < rowCnt; i++) {
    if (ds_containerTpchsList.getCellData(i, 'chk') == 'T') {
      ds_containerTpchsList.setCellData(i, 'copCoConfirmClsCd', '03');
      ds_containerTpchsList.setCellData(i, 'copCoConfirmClsNm', '이의신청');
      ds_containerTpchsList.setCellData(i, 'copCoConfirmDt', '');
      ds_containerTpchsList.setCellData(i, 'dissent', '이의 내용을 입력하십시오.');
      ds_containerTpchsList.setCellData(i, 'btn', 'T');
      ds_containerTpchsList.setCellData(i, 'chk', 'F');
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name f_Cancel
 * @description 취소
 */
scwin.f_Cancel = function () {
  // Data 변경 여부 조회
  if (ds_containerTpchsList.getModifiedIndex().length <= 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['자료']);
    return;
  }
  ;

  // 취소할 목록 선택
  const rowCnt = ds_containerTpchsList.getRowCount();
  let cnt = 0;
  for (let i = 0; i < rowCnt; i++) {
    // 3 - 삭제	
    if (
    // ds_containerTpchsList.getRowStatusValue(i) == 3 &&
    ds_containerTpchsList.getCellData(i, 'chk') == 'T') {
      cnt++;
    }
    ;
  }
  ;
  if (cnt == 0) {
    $c.gus.cfAlertMsg($p, '취소할 목록을 선택하십시오.');
    return;
  }
  ;

  // 원래값 복원
  for (let i = 0; i < rowCnt; i++) {
    if (
    // ds_containerTpchsList.getRowStatusValue(i) == 3 &&
    ds_containerTpchsList.getCellData(i, 'chk') == 'T') {
      $c.data.undoRow($p, ds_containerTpchsList, "Y"); // 해당 DataSet의 Row를 원래값(=Original Data)로 복원
      ds_containerTpchsList.setCellData(i, 'btn', 'F');
      ds_containerTpchsList.setCellData(i, 'chk', 'F');
    }
  }
  gr_containerTpchsList.setColumnReadOnly('copCoConfirmDt', true); // 입력불가
};

/**
 * @method 
 * @name f_Save
 * @description 저장
 */
scwin.f_Save = async function () {
  // Data 변경 여부 조회
  if (ds_containerTpchsList.getModifiedIndex().length <= 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['자료']);
    return;
  }
  ;

  // 처리버튼 클릭여부
  const rowCnt = ds_containerTpchsList.getRowCount();
  let cnt = 0;
  for (let i = 0; i < rowCnt; i++) {
    if (ds_containerTpchsList.getCellData(i, 'btn') == 'T') {
      cnt++;
    }
    ;
  }
  ;
  if (cnt == 0) {
    $c.gus.cfAlertMsg($p, '처리할 업무을 선택하십시오.');
    return;
  }
  ;

  // 확인 날짜입력시 validate 체크
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_containerTpchsList.getRowJSON(i);
    if (rowData.btn == 'T' && rowData.copCoConfirmClsCd == '02') {
      if ($c.data.validateGroup($p, grd_section1, {
        id: 'copCoConfirmDt'
      })) {
        if (!$c.date.isDate($p, rowData.copCoConfirmDt, false)) {
          $c.gus.cfAlertMsg($p, i + 1 + '번째 데이타에서 확인일자는 "YYYYMMDD" 형식이어야 합니다.');
          ds_containerTpchsList.setRowPosition(i);
          return;
        }
      }

      // 이의신청시 이의처리/보류사유 입력
      let dissent = ds_containerTpchsList.getCellData(i, 'dissent');
      if (rowData.copCoConfirmClsCd == '03') {
        if (dissent.length == 0 || dissent == null || dissent == '이의 내용을 입력하십시오.') {
          $c.gus.cfAlertMsg($p, i + '번째 데이타에서 이의처리/보류사유를 입력하십시오.');
          ds_containerTpchsList.setRowPosition(i);
          return;
        }
        ;
      }
      ;
    }
    ;
  }
  ;

  // 저장하시겠습니까?
  const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!retConfirm) return;
  scwin.submitExcute(sbm_saveContainerTpchsList);
};

/**
 * @method 
 * @name f_RetrieveDissentApplyHistory
 * @description 이의신청 이력 수정
 * @param {string} row
 */
scwin.f_RetrieveDissentApplyHistory = async function (row) {
  // 팝업화면에게 key 정보인 오더번호와 매입순번을 넘겨준다.
  const rowJSON = ds_containerTpchsList.getRowJSON(row);
  let data = {
    odrNo: rowJSON.odrNo,
    // 오더번호
    pchsSeq: rowJSON.pchsSeq // 매입순번
  };
  const options = {
    type: 'browserPopup',
    width: '825px',
    height: '520px'
  };
  const url = '/ui/ds/fs/adjm/fs_102_01_01p.xml';
  // TODO - fs_102_01_01p 해당 팝업 미존재
  // 이의신청 이력 화면 호출
  await $c.win.openPopup($p, url, options, data);

  // 다시 조회함 
  scwin.f_RetrieveContainerTpchsList();
};

/**
 * @method 
 * @name f_GetConfirmCntTotAmt
 * @description 조회건수/조회총금액, 확인건수/확인총금액 계산
 */
scwin.f_GetConfirmCntTotAmt = function () {
  // 기본하불 + 할증금액	
  let qryCnt = 0;
  let qryTotAmt = 0;
  const rowCnt = ds_containerTpchsList.getRowCount();
  if (rowCnt > 0) {
    qryCnt = rowCnt;
    for (let i = 0; i < rowCnt; i++) {
      const rowData = ds_containerTpchsList.getRowJSON(i);
      qryTotAmt = qryTotAmt + ($c.num.parseInt($p, rowData.basisTpchs) + $c.num.parseInt($p, rowData.dcScAmt));
    }
    ;
  }
  ;
  lay_qryCnt.setValue($c.gus.cfInsertComma($p, qryCnt));
  lay_qryTotAmt.setValue($c.gus.cfInsertComma($p, qryTotAmt));

  // 확인구분이 확인(02)인 경우만 기본하불 + 할증금액 계산
  let confirmCnt = 0;
  let confirmTotAmt = 0;
  for (let i = 0; i < rowCnt; i++) {
    const rowData = ds_containerTpchsList.getRowJSON(i);
    if (rowData.copCoConfirmClsCd == '02') {
      confirmTotAmt += $c.num.parseInt($p, rowData.basisTpchs) + $c.num.parseInt($p, rowData.dcScAmt);
      confirmCnt++;
    }
    ;
  }
  ;
  lay_confirmCnt.setValue($c.gus.cfInsertComma($p, confirmCnt));
  lay_confirmTotAmt.setValue($c.gus.cfInsertComma($p, confirmTotAmt));
};

/**
 * @method 
 * @name f_GetConfirmCntTotAmt
 * @description 실적일자/운송일자 선택
 */
scwin.f_SelWrkDt = function () {
  lay_gubun.show('');
  txt_gubun.show('');
  lay_gubun2.show('');
  txt_gubun2.show('');
  udc_copCoConfirmDt.hide();
  udc_wrkDt.show('');
};

/**
 * @method 
 * @name f_SelCopCoConfirmDt
 * @description 확인일자 선택
 */
scwin.f_SelCopCoConfirmDt = function () {
  lay_gubun.hide();
  txt_gubun.hide();
  lay_gubun2.hide();
  txt_gubun2.hide();
  udc_copCoConfirmDt.show('');
  udc_wrkDt.hide();
};

/**
 * @method 
 * @name f_Print
 * @description 컨테이너 하불내역 확인 장표 발행
 */
scwin.f_Print = async function () {
  let data = {
    odiName: 'fs_102_01_01p',
    reportName: '/ds/fs/adjm/fs_102_01_01p.ozr',
    // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
    odiParam: {
      sysPath: 'fs_102_01_01p',
      pchsClntNo: ed_pchsClntNo.getValue().trim(),
      vehclNo: txt_vehclNo.getValue().trim(),
      frWrkDt: ed_wrkDtSt.getValue().trim(),
      toWrkDt: ed_wrkDtEnd.getValue().trim(),
      pchsClntNm: txt_pchsClntNm.getValue().trim(),
      pchsAdmitClsCd: acb_pchsAdmitClsCd.getValue(),
      //20170531 화주, 오더번호 추가
      realMchtClntNo: ed_realMchtClntNo.getValue().trim(),
      realMchtClntNm: txt_realMchtClntNm.getValue().trim(),
      odrNo: ed_odrNo.getValue().trim(),
      //20180709 매입점소추가
      pchsDeptCd: ed_pchsDeptCd.getValue().trim()
    },
    viewerParam: {
      zoom: 100
    },
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

  // 체크 값 반영
  let modeVal = '';
  if (cbx_printCheck.getValue() == '1') modeVal = 'print';
  if (cbx_previewCheck.getValue() == '1') modeVal = 'preview';
  data['viewerParam']['mode'] = modeVal;
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", options, data);
};

/**
 * @method 
 * @name f_Print
 * @description GRID에서 선택된 cntrNo 세부정보 확인 : 해당 cntrNo 페이지로 이동
 * @param {string} cntrNo
 */
scwin.f_CntrNoDetail = function (cntrNo) {
  let paramData = {
    cntrNo: cntrNo
  };
  let menuCode = 'as_102_01_02b.xml';
  let url = '/ds/as/cstmrsrvc/coafmgnt/' + menuCode;
  let menuNm = '컨테이너 화물추적';
  $c.win.openMenu($p, menuNm, url, menuCode, paramData);
};

/**
 * @method 
 * @name f_Print
 * @description GRID에서 선택된 cntrNo 세부정보 확인 : 해당 cntrNo 페이지로 이동
 */
scwin.f_CntrNoDetail2 = function () {
  let row = ds_containerTpchsList.getRowPosition();
  let paramData = {
    'cntrNo': ds_containerTpchsList.getCellData(row, 'cntrNo'),
    'wrkStDt': ed_wrkDtSt.getValue(),
    'wrkDtEnd': ed_wrkDtEnd.getValue()
  };
  let menuCode = 'op_304_03_01b.jsp';
  let url = '/ds/op/wrkrslts/transwrkrslts/' + menuCode;
  let menuNm = '컨테이너 하불내역 확인';
  $c.win.openMenu($p, menuNm, url, menuCode, paramData);
};

/**
 * @method 
 * @name f_RunExcel
 * @description 엑셀 다운로드
 */
scwin.f_RunExcel = function () {
  let count = ds_containerTpchsList.getRowCount();
  if (!(count > 0)) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  }
  ;
  let columnIds = ['chk', 'transCondNm', 'copCoConfirmDt', 'alloccarPic', 'odrKndCd', 'cmpstcrgKndNm', 'copCoConfirmClsNm', 'pchsAdmitClsNm', 'dissent', 'pchsDeptCd', 'rsltsStdDt'];
  for (let i = 0; i < columnIds.length; i++) {
    gr_containerTpchsList.setColumnVisible(columnIds[i], false);
  }
  ;

  // gr_containerTpchsList.SetExcelTitle(1, 'value:컨테이너 하불 내역 확인;'  // 표시할 타이틀
  //                                         + 'font-face:'돋움체';' // 폰트
  //                                         + 'font-size:12pt;'    // 폰트 크기
  //                                         + 'font-color:black;'  // 폰트 색깔
  //                                         + 'bgcolor:#ffffff;'   // 배경 색깔
  //                                         + 'align:center;'      // 정렬
  //                                         + 'line-color:white;'  // 타이틀 부분 테두리선 색깔
  //                                         + 'line-width:0pt;'    // 타이틀 테두리선 굵기
  //                                         + 'skiprow:1;');       // 타이틀 다음 떼는 로우 수

  // cfGridToExcel(그리드ID, '엑셀 파일의 쉬트명', '엑셀 파일명', 저장 옵션);

  let excelName = "컨테이너 하불 내역 확인";
  let options = {
    sheetName: excelName,
    fileName: excelName + ".xlsx",
    startRowIndex: 2,
    useHeaderCheckBoxLabel: true
  };
  let infoArr = [{
    text: excelName,
    rowIndex: 0,
    colSpan: 12,
    textAlign: 'center',
    fontSize: '12px',
    fontName: '돋움체',
    color: 'black',
    bgColor: '#ffffff'
  }];
  $c.data.downloadGridViewExcel($p, gr_containerTpchsList, options, infoArr);
  for (let i = 0; i < columnIds.length; i++) {
    gr_containerTpchsList.setColumnVisible(columnIds[i], true);
  }
  ;
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
  let compObj,
    codeObj,
    nameObj,
    pDispCnt = null,
    pHidden = null,
    pWtitleSearch = null;
  switch (disGubun) {
    case 1:
      // 협력회사 팝업
      compObj = udc_pchsClnt;
      codeObj = ed_pchsClntNo; // 협력회사코드
      nameObj = txt_pchsClntNm; // 협력회사명
      break;
    case 2:
      // 차량번호 팝업		
      compObj = udc_vehcl;
      codeObj = ed_vehclShortCd;
      nameObj = txt_vehclNo;
      pDispCnt = '2';
      pHidden = '3,4,5,6,7,8,9,10';
      break;
    case 3:
      // 점소 팝업
      compObj = udc_pchsDept;
      codeObj = ed_pchsDeptCd; // 점소코드
      nameObj = txt_pchsDeptNm; // 점소명	
      break;
    case 4:
      // 화주 팝업	
      compObj = udc_realMchtClnt;
      codeObj = ed_realMchtClntNo; // 화주코드
      nameObj = txt_realMchtClntNm; // 화주명                     
      break;
    case 5:
      // 출발지 팝업	
      compObj = udc_dptWrkPl;
      codeObj = ed_dptWrkPlCd; // 출발지코드
      nameObj = txt_dptWrkPlNm; // 출발지명                                 
      break;
    case 6:
      // 도착지 팝업	
      compObj = udc_arvWrkPl;
      codeObj = ed_arvWrkPlCd; // 도착지코드
      nameObj = txt_arvWrkPlNm; // 도착지명
      break;
    case 7:
      // 담당자
      compObj = udc_mod;
      pWtitleSearch = '등록자,사용자ID,사용자명';
      codeObj = ed_modId;
      nameObj = txt_modNm;
      break;
    default:
      break;
  }
  ;
  rtnList = compObj.cfCommonPopUp(rtnList => {
    $c.gus.cfSetReturnValue($p, rtnList, codeObj, nameObj);
  }, pCode.trim(), pName, pClose, pDispCnt, null, null, pHidden, null, null, null, null, null, null, pAllSearch, pWtitleSearch);
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
  $c.gus.cfInitObjects($p, tb_mainData, [acb_dtCls]);
  scwin.f_SetDefaultData();
};

/**
 * @method 
 * @name f_viewSelAmount
 * @description 매입승인 조회된 건수 표시
 */
scwin.f_viewSelAmount = function () {
  // 선택한 금액  표시
  ed_selectCount.setValue($c.gus.cfInsertComma($p, scwin.pchsSelCount));
  ed_selectAmount.setValue($c.gus.cfInsertComma($p, scwin.pchsSelAmt));
  ed_selectDcScAmount.setValue($c.gus.cfInsertComma($p, scwin.pchsDcScSelAmt));
  ed_selectAllAmount.setValue($c.gus.cfInsertComma($p, scwin.pchsSelAmt + scwin.pchsDcScSelAmt));
};

/**
 * @method 
 * @name upperFlag 
 * @description 소문자 입력 시 대문자로 변경
 */
scwin.upperFlag = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    if (e.responseJSON.resultDataSet[0].Code == -1) return;
    await scwin.submitdone(e);
  }
  ;
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name submitPre 
 * @description submit 요청전
 */
scwin.submitPre = function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    // 컨테이너하불목록 조회
    case sbm_searchContainerTpchsList:
      dma_searchContainerTpchsList.set('pchsClntNo', ed_pchsClntNo.getValue()); // 매입거래처번호 
      dma_searchContainerTpchsList.set('vehclNo', txt_vehclNo.getValue()); // 차량번호 
      dma_searchContainerTpchsList.set('pchsDeptCd', ed_pchsDeptCd.getValue()); // 매입부서코드(물류점소) 
      dma_searchContainerTpchsList.set('dtCls', acb_dtCls.getValue()); // 일자구분(실적일자/확인일자) 
      dma_searchContainerTpchsList.set('wrkDtSt', dma_wrkDt.get('ed_wrkDtSt')); // 실적일자시작 
      dma_searchContainerTpchsList.set('wrkDtEnd', dma_wrkDt.get('ed_wrkDtEnd')); // 실적일자종료
      dma_searchContainerTpchsList.set('copCoConfirmDtSt', dma_copCoConfirmDt.get('ed_copCoConfirmDtSt')); // 협력업체확인일자시작 
      dma_searchContainerTpchsList.set('copCoConfirmDtEnd', dma_copCoConfirmDt.get('ed_copCoConfirmDtEnd')); // 협력업체확인일자종료 
      dma_searchContainerTpchsList.set('copCoConfirmClsCd', acb_copCoConfirmClsCd.getValue()); // 협력업체확인일자종료 
      dma_searchContainerTpchsList.set('pchsAdmitClsCd', acb_pchsAdmitClsCd.getValue()); // 매입승인구분코드 
      dma_searchContainerTpchsList.set('unconfirmedIncluYn', cbx_unconfirmedIncluYn.getValue()); // 미승인포함여부 
      dma_searchContainerTpchsList.set('unAdmitIncluYn', cbx_unAdmitIncluYn.getValue()); // 미승인포함여부 
      dma_searchContainerTpchsList.set('odrNo', ed_odrNo.getValue()); // 오더번호	 
      dma_searchContainerTpchsList.set('odrKndCd', acb_odrKndCd.getValue()); // 오더종류코드 
      dma_searchContainerTpchsList.set('realMchtClntNo', ed_realMchtClntNo.getValue()); // 실화주거래처번호 
      dma_searchContainerTpchsList.set('dptWrkPlCd', ed_dptWrkPlCd.getValue()); // 출발작업장코드 
      dma_searchContainerTpchsList.set('arvWrkPlCd', ed_arvWrkPlCd.getValue()); // 도착작업장코드 
      dma_searchContainerTpchsList.set('cntrNo', ed_cntrNo.getValue()); // 컨테이너번호 
      dma_searchContainerTpchsList.set('cntrBox', dma_cntrBox.get('value')); // 다중컨테이너번호 
      dma_searchContainerTpchsList.set('modId', ed_modId.getValue()); // 수정자 
      break;
    default:
      break;
  }
};

/**
 * @event 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  debugger;
  switch (submitObj) {
    // 컨테이너하불목록 조회
    case sbm_searchContainerTpchsList:
      // 총 조회건수 표시
      const rowCnt = ds_containerTpchsList.getRowCount();
      totalRows.setValue(rowCnt);

      // 건수/총금액 계산
      scwin.f_GetConfirmCntTotAmt();
      gr_containerTpchsList.setHeaderValue('chkHeader', false);
      if (rowCnt == 0) {
        $c.gus.cfDisableAllBtn($p);
        $c.gus.cfDisableObjects($p, [ica_allCopCoConfirmDt]);
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
      } else {
        $c.gus.cfEnableAllBtn($p);
        $c.gus.cfEnableObjects($p, [ica_allCopCoConfirmDt]);
      }
      ;
      scwin.pchsSelAmt = 0;
      scwin.pchsSelCount = 0;
      scwin.pchsDcScSelAmt = 0;
      scwin.f_viewSelAmount();
      break;
    case sbm_saveContainerTpchsList:
      await scwin.f_RetrieveContainerTpchsList();
      $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
      break;
    default:
      break;
  }
};

/**
 * @event 
 * @name sbm_searchContainerTpchsList_submiterror
 * @description 컨테이너하불목록 조회) Response Status 코드가 오류 (200 미만 300 이상) 일 경우 동작.
 */
scwin.sbm_searchContainerTpchsList_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseText);
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name gr_containerTpchsList_onheaderclick
 * @description 헤더가 클릭된 경우 발생
 * @param {string} headerId
 */
scwin.gr_containerTpchsList_onheaderclick = function (headerId) {
  // 전체선택 / 전체취소
  let i = 0;
  if (headerId == 'chkHeader') {
    const rowCnt = ds_containerTpchsList.getRowCount();
    if (gr_containerTpchsList.getHeaderValue(headerId)) {
      for (i = 0; i < rowCnt; i++) {
        const rowData = ds_containerTpchsList.getRowJSON(i);
        scwin.pchsSelAmt = $c.num.parseInt($p, scwin.pchsSelAmt) + $c.num.parseInt($p, rowData.basisTpchs);
        scwin.pchsDcScSelAmt = $c.num.parseInt($p, scwin.pchsDcScSelAmt) + $c.num.parseInt($p, rowData.dcScAmt);
        scwin.pchsSelCount = $c.num.parseInt($p, scwin.pchsSelCount) + 1;
      }
      ;
    } else {
      scwin.pchsSelAmt = 0;
      scwin.pchsSelCount = 0;
      scwin.pchsDcScSelAmt = 0;
    }
    ;

    // 선택한 금액  표시
    scwin.f_viewSelAmount();
  }
  ;
};

/**
 * @event 
 * @name gr_containerTpchsList_oncellclick
 * @description 셀이 클릭된 경우 발생
 * @param {string} rowIndex
 * @param {string} columnIndex
 * @param {string} columnId
 */
scwin.gr_containerTpchsList_oncellclick = function (rowIndex, columnIndex, columnId) {
  // OnCheckClick
  const rowData = ds_containerTpchsList.getRowJSON(rowIndex);
  if (columnId == 'chk') {
    if (rowData.chk == 'T') {
      scwin.pchsSelAmt = $c.num.parseInt($p, scwin.pchsSelAmt) + $c.num.parseInt($p, rowData.basisTpchs);
      scwin.pchsDcScSelAmt = $c.num.parseInt($p, scwin.pchsDcScSelAmt) + $c.num.parseInt($p, rowData.dcScAmt);
      scwin.pchsSelCount = $c.num.parseInt($p, scwin.pchsSelCount) + 1;
    } else {
      scwin.pchsSelAmt = $c.num.parseInt($p, scwin.pchsSelAmt) - $c.num.parseInt($p, rowData.basisTpchs);
      scwin.pchsDcScSelAmt = $c.num.parseInt($p, scwin.pchsDcScSelAmt) - $c.num.parseInt($p, rowData.dcScAmt);
      scwin.pchsSelCount = $c.num.parseInt($p, scwin.pchsSelCount) - 1;
    }
    ;

    // 선택한 금액  표시
    scwin.f_viewSelAmount();
  }
  ;

  // 그리드 편집
  let btn = rowData.btn;
  let copCoConfirmClsCd = rowData.copCoConfirmClsCd; // 확인

  if (columnId == 'copCoConfirmDt' && btn == 'T' && copCoConfirmClsCd != '03') {
    gr_containerTpchsList.setColumnReadOnly('copCoConfirmDt', false);
  } else {
    gr_containerTpchsList.setColumnReadOnly('copCoConfirmDt', true);
  }
  ;

  // 미확인
  if (columnId == 'copCoConfirmDt' && btn == 'T' && copCoConfirmClsCd == '01') {
    gr_containerTpchsList.setColumnReadOnly('copCoConfirmDt', true);
  }
  ;

  // 이의처리/보류사유
  if (columnId == 'dissent' && btn == 'T' && copCoConfirmClsCd == '03') {
    gr_containerTpchsList.setColumnReadOnly('dissent', false);
  } else {
    gr_containerTpchsList.setColumnReadOnly('dissent', true);
  }
  ;

  // 이의신청 이력 수정
  if (columnId == 'dissent' && rowData.dissent != '' && ds_containerTpchsList.getRowStatusValue(rowIndex) == '0') {
    scwin.f_RetrieveDissentApplyHistory(rowIndex);
  }
  ;
};

/**
 * @event 
 * @name gr_containerTpchsList_oneditdblclick
 * @description 편집 중인 셀에 더블클릭 시 발생
 * @param {string} rowIndex
 * @param {string} columnIndex
 * @param {string} columnId
 */
scwin.gr_containerTpchsList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  // 컨테이너 화물추적 화면으로 이동
  if (rowIndex > -1) {
    const rowData = ds_containerTpchsList.getRowJSON(rowIndex);
    if (columnId == 'cntrNo' && rowData['cntrNo'] != '') {
      scwin.f_CntrNoDetail(rowData.cntrNo);
    }
    ;
    if (columnId == 'cntrInfo' && rowData.cntrInfo != '') {
      scwin.f_CntrNoDetail2();
    }
    ;
  }
  ;
};

/**
 * @event 
 * @name gr_containerTpchsList_oneditend
 * @description 셀의 편집이 끝난 경우 발생하며, onafteredit보다 먼저 발생
 * @param {string} rowIndex
 * @param {string} columnIndex
 * @param {string} value
 */
scwin.gr_containerTpchsList_oneditend = function (rowIndex, columnIndex, value) {
  // 확인 날짜입력시 validation 체크
  const colId = gr_containerTpchsList.getColumnID(columnIndex);
  if (colId == 'copCoConfirmDt') {
    if ($c.num.isNumber($p, value)) {
      if (!$c.date.isDate($p, value, false)) {
        $c.gus.cfAlertMsg($p, '확인일자는 "YYYYMMDD" 형식이어야 합니다.');
        return;
      }
    } else {
      let oldData = ds_containerTpchsList.getCellData(rowIndex, colId);
      ds_containerTpchsList.setCellData(rowIndex, 'copCoConfirmDt', oldData);
      $c.gus.cfAlertMsg($p, '확인일자를 다시 입력하십시오.');
      return;
    }
    ;
  }
  ;
};

/**
 * @event 
 * @name acb_dtCls_onchange
 * @description 실적일자/운송일자/확인일자 사용자가 선택 항목을 변경할 경우 발생.
 * @param {object} info
 * @param {string} info.oldValue
 * @param {string} info.newValue
 */
scwin.acb_dtCls_onchange = function (info) {
  // 조회조건(실적일자 / 운송일자 / 확인일자) 선택
  if (['01', '03'].includes(acb_dtCls.getValue())) {
    scwin.f_SelWrkDt();
  } else if (acb_dtCls.getValue() == '02') {
    scwin.f_SelCopCoConfirmDt();
  }
  ;
};

/**
 * @event 
 * @name udc_pchsClnt_onblurCodeEvent
 * @description code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_pchsClnt_onblurCodeEvent = function (e) {
  // 협력회사 EMEdit Focus 이동시
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNo, txt_pchsClntNm, 1);
};

/**
 * @event 
 * @name udc_pchsClnt_onviewchangeNameEvent
 * @description name 컴포넌트의 value가 변경되었을 때 발생하는 이벤트
 */
scwin.udc_pchsClnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_pchsClntNm, ed_pchsClntNo, 1, false);
};

/**
 * @event 
 * @name udc_pchsClnt_onclickEvent
 * @description 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생. 
 */
scwin.udc_pchsClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_pchsClntNo.getValue(), txt_pchsClntNm.getValue(), 'F', 'F');
};

/**
 * @event 
 * @name udc_vehcl_onblurCodeEvent
 * @description code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_vehcl_onblurCodeEvent = function (e) {
  // 차량번호 EMEdit Focus 이동시
  scwin.f_chkOpenCommonPopUp(ed_vehclShortCd, txt_vehclNo, 2);
};

/**
 * @event 
 * @name udc_vehcl_onviewchangeNameEvent
 * @description name 컴포넌트의 value가 변경되었을 때 발생하는 이벤트
 */
scwin.udc_vehcl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_vehclNo, ed_vehclShortCd, 2, false);
};

/**
 * @event 
 * @name udc_vehcl_onclickEvent
 * @description 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생.
 */
scwin.udc_vehcl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_vehclShortCd.getValue(), txt_vehclNo.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_pchsDept_onblurCodeEvent
 * @description code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_pchsDept_onblurCodeEvent = function (e) {
  // 점소 EMEdit Focus 이동시
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptCd, txt_pchsDeptNm, 3);
};

/**
 * @event 
 * @name udc_pchsDept_onviewchangeNameEvent
 * @description name 컴포넌트의 value가 변경되었을 때 발생하는 이벤트
 */
scwin.udc_pchsDept_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_pchsDeptNm, ed_pchsDeptCd, 3, false);
};

/**
 * @event 
 * @name udc_pchsDept_onviewchangeNameEvent
 * @description 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생.
 */
scwin.udc_pchsDept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_pchsDeptCd.getValue(), txt_pchsDeptNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_realMchtClnt_onblurCodeEvent
 * @description code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_realMchtClnt_onblurCodeEvent = function (e) {
  // 화주 EMEdit Focus 이동시
  scwin.f_chkOpenCommonPopUp(ed_realMchtClntNo, txt_realMchtClntNm, 4);
};

/**
 * @event 
 * @name udc_realMchtClnt_onviewchangeNameEvent
 * @description name 컴포넌트의 value가 변경되었을 때 발생하는 이벤트
 */
scwin.udc_realMchtClnt_onviewchangeNameEvent = function (info) {
  swcin.f_chkOpenCommonPopUp(txt_realMchtClntNm, ed_realMchtClntNo, 4, false);
};

/**
 * @event 
 * @name udc_realMchtClnt_onclickEvent
 * @description 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생.
 */
scwin.udc_realMchtClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_realMchtClntNo.getValue(), txt_realMchtClntNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_dptWrkPl_onblurCodeEvent
 * @description code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_dptWrkPl_onblurCodeEvent = function (e) {
  // 출발지 EMEdit Focus 이동시
  scwin.f_chkOpenCommonPopUp(ed_dptWrkPlCd, txt_dptWrkPlNm, 5);
};

/**
 * @event 
 * @name udc_dptWrkPl_onviewchangeNameEvent
 * @description name 컴포넌트의 value가 변경되었을 때 발생하는 이벤트
 */
scwin.udc_dptWrkPl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_dptWrkPlNm, ed_dptWrkPlCd, 5, false);
};

/**
 * @event 
 * @name udc_dptWrkPl_onviewchangeNameEvent
 * @description 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생.
 */
scwin.udc_dptWrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_dptWrkPlCd.getValue(), txt_dptWrkPlNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_arvWrkPl_onblurCodeEvent
 * @description code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_arvWrkPl_onblurCodeEvent = function (e) {
  // 도착지 EMEdit Focus 이동시
  scwin.f_chkOpenCommonPopUp(ed_arvWrkPlCd, txt_arvWrkPlNm, 6);
};

/**
 * @event 
 * @name udc_arvWrkPl_onviewchangeNameEvent
 * @description name 컴포넌트의 value가 변경되었을 때 발생하는 이벤트
 */
scwin.udc_arvWrkPl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_arvWrkPlNm, ed_arvWrkPlCd, 6, false);
};

/**
 * @event 
 * @name udc_arvWrkPl_onclickEvent
 * @description 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생.
 */
scwin.udc_arvWrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_arvWrkPlCd.getValue(), txt_arvWrkPlNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_mod_onblurCodeEvent
 * @description code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_mod_onblurCodeEvent = function (e) {
  // 오더담당자 EMEdit Focus 이동시
  scwin.f_chkOpenCommonPopUp(ed_modId, txt_modNm, 7);
};

/**
 * @event 
 * @name udc_mod_onviewchangeNameEvent
 * @description name 컴포넌트의 value가 변경되었을 때 발생하는 이벤트
 */
scwin.udc_mod_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_modNm, ed_modId, 11, false);
};

/**
 * @event 
 * @name udc_mod_onclickEvent
 * @description 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생.
 */
scwin.udc_mod_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_modId.getValue(), txt_modNm.getValue(), 'F', 'F');
};

/**
 * @event 
 * @name dma_cntrBox_onkeyset
 * @description set API를 호출하는 경우 매번 발생하는 이벤트
 */
scwin.dma_cntrBox_onkeyset = function (info) {
  if (ds_containerTpchsList.getRowCount() > 0) {
    dma_searchContainerTpchsList.set('cntrBox', dma_cntrBox.get('value'));
  }
  ;
};

/**
 * @event 
 * @name dma_cntrBox_onkeyset
 * @description 조회버튼 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생. 
 */
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_RetrieveContainerTpchsList();
};

/**
 * @event 
 * @name btn_fieldClear_onclick
 * @description 조회조건 초기화 버튼 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생. 
 */
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};

/**
 * @event 
 * @name btn_print_onclick
 * @description 발행버튼 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생. 
 */
scwin.btn_print_onclick = function (e) {
  scwin.f_Print();
};

/**
 * @event 
 * @name btn_Confirm_onclick
 * @description 확인버튼 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생. 
 */
scwin.btn_Confirm_onclick = function (e) {
  scwin.f_Confirm();
};

/**
 * @event 
 * @name btn_Confirm_onclick
 * @description 확인일자 수정버튼 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생. 
 */
scwin.btn_ConfirmDtUpdate_onclick = function (e) {
  scwin.f_ConfirmDtUpdate();
};

/**
 * @event 
 * @name btn_ConfirmCancel_onclick
 * @description 확인 취소버튼 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생. 
 */
scwin.btn_ConfirmCancel_onclick = function (e) {
  scwin.f_ConfirmCancel();
};

/**
 * @event 
 * @name btn_ConfirmCancel_onclick
 * @description 이의제기버튼 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생. 
 */
scwin.btn_DissentApply_onclick = function (e) {
  scwin.f_DissentApply();
};

/**
 * @event 
 * @name btn_Cancel_onclick
 * @description 취소버튼 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생. 
 */
scwin.btn_Cancel_onclick = function (e) {
  scwin.f_Cancel();
};

/**
 * @event 
 * @name btn_save_onclick
 * @description 저장버튼 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생. 
 */
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'',src:'/cm/udc/schInput.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'협력회사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_pchsClntNo',nameId:'txt_pchsClntNm',btnId:'img_PopUp1',id:'udc_pchsClnt',selectID:'retrieveClntList','ev:onblurCodeEvent':'scwin.udc_pchsClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_pchsClnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_pchsClnt_onclickEvent',allowCharCode:'0-9',maxlengthCode:'6',mandatoryCode:'true',UpperFlagCode:'1',objTypeCode:'Data',mandatoryName:'false',objTypeName:'data',maxlengthName:'50',validTitle:'협력회사'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'acb_dtCls',search:'start',style:'width:90px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'','ev:onchange':'scwin.acb_dtCls_onchange',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'실적일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확인일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_wrkDt',refDataMap:'dma_wrkDt',refEdDt:'ed_wrkDtEnd',refStDt:'ed_wrkDtSt',style:'',edFromId:'ed_wrkDtSt',edToId:'ed_wrkDtEnd',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'Data',objTypeTo:'Data',objTypeBtn:'data',titleFrom:'실적(운송)일자시작',titleTo:'실적(운송)일자종료'}},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ed_copCoConfirmDtSt',edToId:'ed_copCoConfirmDtEnd',id:'udc_copCoConfirmDt',refDataMap:'dma_copCoConfirmDt',refEdDt:'ed_copCoConfirmDtEnd',refStDt:'ed_copCoConfirmDtSt',style:'',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'Data',objTypeTo:'Data',objTypeBtn:'data',titleFrom:'확인일자시작',titleTo:'확인일자종료'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'txt_gubun2',label:'확인구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'lay_gubun2',style:''},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',id:'acb_copCoConfirmClsCd',objType:'data',ref:'',search:'start',searchTarget:'value',style:'width: 120px;',submenuSize:'auto',visibleRowNum:'6'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',disabled:'',falseValue:'0',id:'cbx_unconfirmedIncluYn',objType:'data',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일자범위 이전 미확인 포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_gubun',label:'동부승인구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'lay_gubun',style:''},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',id:'acb_pchsAdmitClsCd',ref:'',search:'start',searchTarget:'value',style:'width: 120px;',submenuSize:'auto'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',disabled:'',falseValue:'0',id:'cbx_unAdmitIncluYn',objType:'data',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일자범위 동부 미승인 포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',selectID:'retrieveVehiclesNo',codeId:'ed_vehclShortCd',nameId:'txt_vehclNo',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',maxlengthName:'12',objTypeName:'Data',mandatoryName:'false',id:'udc_vehcl','ev:onblurCodeEvent':'scwin.udc_vehcl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_vehcl_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_vehcl_onclickEvent',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',selectID:'retrieveLobranInfo',codeId:'ed_pchsDeptCd',nameId:'txt_pchsDeptNm',objTypeCode:'Data',mandatoryCode:'false',maxlengthCode:'4',allowCharCode:'a-zA-Z0-9',objTypeName:'Data',maxlengthName:'50',mandatoryName:'false',id:'udc_pchsDept','ev:onblurCodeEvent':'scwin.udc_pchsDept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_pchsDept_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_pchsDept_onclickEvent',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th',style:'width:0;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width: 120px;',allowChar:'a-zA-Z0-9',maxlength:'13',mandatory:'true',title:'오더번호','ev:onkeyup':'scwin.upperFlag'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th',style:'width:0;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_odrKndCd',search:'start',style:'width:230px;',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',selectID:'retrieveClntList',codeId:'ed_realMchtClntNo',nameId:'txt_realMchtClntNm',maxlengthCode:'6',mandatoryCode:'false',maxlengthName:'15',objTypeName:'data',mandatoryName:'false',id:'udc_realMchtClnt','ev:onblurCodeEvent':'scwin.udc_realMchtClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_realMchtClnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_realMchtClnt_onclickEvent',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발지',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',selectID:'retrieveWrkPlInfo',codeId:'ed_dptWrkPlCd',nameId:'txt_dptWrkPlNm',maxlengthCode:'6',mandatoryCode:'true',allowCharCode:'a-zA-Z0-9',maxlengthName:'15',mandatoryName:'false',objTypeName:'data',id:'udc_dptWrkPl','ev:onblurCodeEvent':'scwin.udc_dptWrkPl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_dptWrkPl_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_dptWrkPl_onclickEvent',validTitle:'출발지',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착지',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_arvWrkPlCd',nameId:'txt_arvWrkPlNm',maxlengthCode:'6',mandatoryCode:'false',allowCharCode:'a-zA-Z0-9',maxlengthName:'50',objTypeName:'data',mandatoryName:'false',id:'udc_arvWrkPl',selectID:'retrieveWrkPlInfo','ev:onblurCodeEvent':'scwin.udc_arvWrkPl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_arvWrkPl_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_arvWrkPl_onclickEvent',validTitle:'도착지',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CNTR-NO',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group',style:''},E:[{T:1,N:'xf:input',A:{style:'width:113px;',id:'ed_cntrNo',placeholder:'',class:'',maxlength:'12',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.upperFlag'}},{T:1,N:'w2:udc_schInput',A:{style:'width:113px;',id:'ed_cntrBox','ev:ondblclick':'scwin.ed_cntrBox_ondblclick',refDataMap:'dma_cntrBox',iptNm:'value',iptObjType:'Data'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_modId',validExpCode:'담당자:no',mandatoryCode:'false',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',maxlengthName:'50',objTypeName:'data',mandatoryName:'false',nameId:'txt_modNm',id:'udc_mod',selectID:'retrieveUserInfo','ev:onblurCodeEvent':'scwin.udc_mod_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_mod_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_mod_onclickEvent',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'f_RunExcel',gridID:'gr_containerTpchsList',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_containerTpchsList',style:'',id:'gr_containerTpchsList',visibleRowNum:'10',class:'wq_gvw',fixedColumn:'1','ev:onheaderclick':'scwin.gr_containerTpchsList_onheaderclick','ev:oncellclick':'scwin.gr_containerTpchsList_oncellclick','ev:oneditend':'scwin.gr_containerTpchsList_oneditend','ev:oncelldblclick':'scwin.gr_containerTpchsList_oncelldblclick',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'chkHeader',displayMode:'label',valueType:'boolean'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'운송일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'컨테이너번호<br/>(화물추적 링크)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column13',value:'규격',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'운송조건',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'출발지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'도착지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'기본하불',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'할증금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'할증항목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',value:'확인일자',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'배차담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column64',value:'화주',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'오더종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'복화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'확인구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column46',value:'동부승인구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column43',value:'이의처리',class:'txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'180',inputType:'text',id:'column40',value:'보류사유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column34',value:'실적기준일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'담당자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'chk',displayMode:'label',valueType:'other',trueValue:'T',falseValue:'F'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkDt',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cntrInfo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'transCondNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'dptWrkPlNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'arvWrkPlNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'basisTpchs',displayMode:'label',dataType:'number',readOnly:'true',excelCellType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'dcScAmt',displayMode:'label',dataType:'number',readOnly:'true',excelCellType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcScItem',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'copCoConfirmDt',displayMode:'label',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'alloccarPic',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'180',inputType:'text',id:'clntNm',displayMode:'label',readOnly:'true',colMerge:'true',upperColumn:'wrkDt'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label',readOnly:'true',colMerge:'true',upperColumn:'clntNm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrKndCd',displayMode:'label',readOnly:'true',colMerge:'true',upperColumn:'clntNm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',readOnly:'true',colMerge:'true',upperColumn:'clntNm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cmpstcrgKndNm',displayMode:'label',readOnly:'true',colMerge:'true',upperColumn:'clntNm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'copCoConfirmClsNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsAdmitClsNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'180',inputType:'text',id:'dissent',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'180',inputType:'text',id:'pstpnRsn',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsDeptCd',displayMode:'label',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rsltsStdDt',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'modId',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',id:'column23',displayMode:'label',expression:'sum(\'basisTpchs\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',id:'column22',displayMode:'label',expression:'sum(\'dcScAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]},{T:1,N:'xf:group',A:{tagname:'ul',style:'',id:'',class:'amt-wrap'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'선택 건수',class:'txt-num'}},{T:1,N:'xf:input',A:{style:'',id:'ed_selectCount',placeholder:'',class:'tar txt-blue',disabled:'true',initValue:'0'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'선택 하불금액',class:'txt-num num2'}},{T:1,N:'xf:input',A:{style:'',id:'ed_selectAmount',placeholder:'',class:'tar txt-blue',disabled:'true',initValue:'0'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'선택 할증금액',class:'txt-num num3'}},{T:1,N:'xf:input',A:{style:'',id:'ed_selectDcScAmount',placeholder:'',class:'tar txt-blue',disabled:'true',initValue:'0'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'하불+할증',class:'txt-num num4'}},{T:1,N:'xf:input',A:{style:'',id:'ed_selectAllAmount',placeholder:'',class:'tar txt-blue',disabled:'true',initValue:'0'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'조회건수',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'lay_qryCnt',label:'0',class:'txt-blue'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'조회총금액',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'lay_qryTotAmt',label:'0',class:'txt-blue'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'확인건수',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'lay_confirmCnt',label:'0',class:'txt-blue'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'확인총금액',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'lay_confirmTotAmt',label:'0',class:'txt-blue'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'일괄적용 확인일자',class:''}},{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ica_allCopCoConfirmDt',class:'',calendarValueType:'yearMonthDate',title:'확인일자일괄적용',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'0',class:'',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'0',class:'',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_print',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_print_onclick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_Confirm',label:'저장',type:'button',class:'btn ','ev:onclick':'scwin.btn_Confirm_onclick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확인'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_ConfirmDtUpdate',label:'저장',type:'button',class:'btn white','ev:onclick':'scwin.btn_ConfirmDtUpdate_onclick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확인일자 수정'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_ConfirmCancel',label:'저장',type:'button',class:'btn white',userAuth:'U','ev:onclick':'scwin.btn_ConfirmCancel_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확인 취소'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_DissentApply',label:'저장',type:'button',class:'btn white',userAuth:'U','ev:onclick':'scwin.btn_DissentApply_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'이의제기'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Cancel',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_Cancel_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_save_onclick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]}]})