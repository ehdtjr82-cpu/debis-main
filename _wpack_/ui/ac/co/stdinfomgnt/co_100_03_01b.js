/*amd /ui/ac/co/stdinfomgnt/co_100_03_01b.xml 68764 654e4d27ff6fbdfe44547da5aca72d4ff8cb04e0a653262783c2817be5c0c96f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_dept',repeatNode:'map',saveRemovedData:'true',style:'','ev:ondataload':'scwin.ds_dept_ondataload','ev:onrowpositionchange':'scwin.ds_dept_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'upperAcctDeptCd',name:'상위귀속부서코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'upperAcctDeptNm',name:'#N/A',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'acctDeptEngNm',name:'귀속부서영문명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'comCostClsCd',name:'공통비구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'비용구분코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'bizdivCd',name:'사업부문코드',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'budgetCntlAcctDeptCd',name:'예산통제귀속부서코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'budgetCntlAcctDeptNm',name:'예산통제귀속부서명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'advcdExecAcctDeptCd',name:'전도금집행귀속부서코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'advcdExecAcctDeptNm',name:'전도금집행귀속부서명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'fundExecAcctDeptCd',name:'자금집행귀속부서코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'fundExecAcctDeptNm',name:'자금집행귀속부서명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'asetAcctDeptCd',name:'자산귀속부서코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'asetAcctDeptNm',name:'자산귀속부서명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'withholdDofficeCd',name:'원천세구청코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'withholdDofficeNm',name:'원천세구청명',dataType:'text',length:'30'}},{T:1,N:'w2:column',A:{id:'advcdExecDeptYn',name:'전도금집행부서여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'fundDeptYn',name:'자금부서여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'aggrDeptYn',name:'집계부서여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'adptStDt',name:'적용시작일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'adptEndDt',name:'적용종료일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text',length:'14'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text',length:'14'}},{T:1,N:'w2:column',A:{id:'checkLevel',name:'트리레벨',dataType:'number',length:'38'}},{T:1,N:'w2:column',A:{id:'acctDeptLvl',name:'귀속부서레벨',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'정렬번호',dataType:'number',length:'5'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'부가세관리귀속부서',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',name:'부가세신고귀속부서명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'budgetDeptYn',name:'예산부서여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'elecApprvTrgtYn',name:'전자결재대상여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'virtureDeptYn',name:'가상부서여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'corRegNm',name:'법인등록명',dataType:'text',length:'70'}},{T:1,N:'w2:column',A:{id:'bizTaxAggrPatternCd',name:'사업소세집계유형코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'bizTaxAggrExceptYn',name:'사업소세집계제외여부(1:제외)',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'branchAggrDeptCd',name:'지사/집계부서코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'branchAggrDeptNm',name:'0',dataType:'text',length:'50'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_srchUseYn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_bizdom_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bizdom',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'col2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'col3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'col4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'col5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'col6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'col7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'col8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'col9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'col10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_bizdiv_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bizdiv',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bizdivCd',name:'사업부문코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizdivNm',name:'사업부명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperBizdivCd',name:'상위사업부코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperBizdivNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkLevel',name:'트리레벨',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'number',length:'1'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text',length:'3'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text',length:'1'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.co.stdinfomgnt.SaveAccountDepartmentCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_dept","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_srchBizdiv',action:'/ac.co.stdinfomgnt.RetrieveBusinessDivisionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_bizdiv_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_bizdom',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_bizdom_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.co.stdinfomgnt.RetrieveAccountDepartmentCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_dept","key":"OUT_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DGlobalValue.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 귀속부서등록 (co_100_03_01b)
// 작성자 : 송정희
// 최초작성일자 : 2026-10-14
//-------------------------------------------------------------------------

scwin.load_row = "";
scwin.modifiedRowIndex = "";
scwin.onpageload = function () {
  const {
    coCd,
    coClsCd
  } = $c.data.getMemInfo($p);
  scwin.vCoCd = $c.util.isEmpty($p, coCd) ? "" : coCd; // 소속 자회사
  scwin.vCoClsCd = $c.util.isEmpty($p, coClsCd) ? "" : coClsCd; // 회계_회사구분

  scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");
  const codeOptions = [{
    grpCd: "CO016",
    compID: "lc_comCostClsCd"
  } // 공통비구분
  , {
    grpCd: "CO026",
    compID: "lc_acctDeptLvl"
  } // 귀속부서레벨            
  , {
    grpCd: "FI042",
    compID: "lc_costClsCd"
  } // 비용구분
  , {
    grpCd: "FI089",
    compID: "lc_bizTaxAggrPatternCd"
  } // 사업소세집계유형
  , {
    grpCd: "CO035",
    compID: "lc_coClsCd"
  } // 자회사구분
  ];
  $c.data.setCommonCode($p, codeOptions);

  // 사용여부
  var useYn_jsonData = [{
    code: DGlobalValue.ALL,
    name: "전체"
  }, {
    code: DGlobalValue.FALSE,
    name: "사용안함"
  }, {
    code: DGlobalValue.TRUE,
    name: "사용"
  }];
  ds_srchUseYn.setJSON(useYn_jsonData);

  // 사용여부 : 사용
  lc_srchUseYn.setValue(DGlobalValue.TRUE);

  // 자회사인 경우에만  회사코드 check
  if (scwin.vCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    ds_search.set("coCd", scwin.vCoCd);
    ds_search.set("coClsCd", scwin.vCoClsCd);
  }
};

/**
 * UDC onload
 */
scwin.onUdcCompleted = function () {};

/**
 * data onload
 */
scwin.ondataload = function () {
  // 사업영역 selectbox
  scwin.set_bizdom();

  // 사업부 selectbox
  scwin.set_bizdiv();

  // setting
  scwin.f_ToggleImgBtn(false);

  // 조회전 비활성화 - 행추가/취소/수정/저장 비활성화
  btn_Add.setDisabled(true);
  btn_Cancel.setDisabled(true);
  btn_Upt.setDisabled(true);
  btn_Save.setDisabled(true);

  // focus
  ed_srchAcctDeptCd.focus();
};

/**
 * 사업영역 selectbox
 */
scwin.set_bizdom = async function () {
  ds_bizdom_search.set("sysCd", "CommonEBC");
  ds_bizdom_search.set("queryId", "retrieveBizDomCdInfo2");
  ds_bizdom_search.set("param1", "");
  ds_bizdom_search.set("param2", "");
  ds_bizdom_search.set("param3", "1");
  let rs = await $c.sbm.execute($p, sbm_bizdom);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_bizdom.setJSON(rs.responseJSON.GAUCE);
    ds_bizdom.sort("col1", 0);
  }
  ;
};

/**
 * 사업부 selectbox
 */
scwin.set_bizdiv = async function () {
  ds_bizdiv_search.set("useYn", "1");
  let rs = await $c.sbm.execute($p, sbm_srchBizdiv);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_bizdiv.setJSON(rs.responseJSON.GAUCE);
    ds_bizdiv.sort("bizdivCd", 0);
  }
  ;
};

/**
 * 조회
 */
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  $c.gus.cfDisableKey($p);
  scwin.f_ToggleImgBtn(false);
  $c.gus.cfDisableBtn($p, [btn_Save]);
  $c.sbm.execute($p, sbm_search);
};

/**
 * 조회 - callback
 */
scwin.sbm_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    ds_dept.setJSON(e.responseJSON.OUT_DS1);

    // 펼치기
    tv_treeView.expandNode(1, true);

    // focus
    tv_treeView.findNodeByIndex(scwin.modifiedRowIndex, true);
  }
};

/**
 * 귀속부서 ondataload
 */
scwin.ds_dept_ondataload = function () {
  var rowCnt = ds_dept.getRowCount();
  if (rowCnt == 0) {
    // 조회결과가 존재하지 않습니다.
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }

  // as-is 그대로 변환
  // 회사코드가 있으면 팝업 호출
  if (!$c.util.isEmpty($p, ed_coCd.getValue())) {
    scwin.f_PopUpCompanyInfo();
  }
  let rowIdx;
  if ($c.util.isEmpty($p, scwin.load_row)) {
    rowIdx = 1;
  } else {
    // 저장 후 조회
    rowIdx = scwin.load_row;
    scwin.modifiedRowIndex = "";
    scwin.load_row = "";
  }

  // tree focus
  tv_treeView.findNodeByIndex(rowIdx, true);
};

/**
 * 귀속부서 row change - tree label 변경 시와 동일
 */
scwin.ds_dept_onrowpositionchange = function (info) {
  // scwin.f_SetHidVal(info.newRowIndex);
};

/**
 * 코드검증 Hidden 값 설정 - 사용안함
 */
scwin.f_SetHidVal = function (row) {
  const {
    ...data
  } = ds_dept.getRowJSON(row);
  ed_upperAcctDeptCd.setUserData("hidVal", data.upperAcctDeptCd);
  ed_budgetCntlAcctDeptCd.setUserData("hidVal", data.budgetCntlAcctDeptCd);
  ed_vatDeclarAcctDeptCd.setUserData("hidVal", data.vatDeclarAcctDeptCd);
};

/**
 * 행추가
 */
scwin.f_AddItem = function () {
  const modiArray = ds_dept.getModifiedIndex();
  if (modiArray.length) {
    $c.win.alert($p, "저장되지 않은 데이타가 있습니다").then(() => {
      tv_treeView.findNodeByIndex(modiArray[0] + 1, true);
      $c.gus.cfDisableKey($p);
      scwin.f_ToggleImgBtn(true);
      $c.gus.cfDisableBtn($p, [btn_Upt]);
      ed_acctDeptNm.focus();
    });
  } else {
    const realIdx = tv_treeView.getSelectedIndex() - 1;
    const addIdx = ds_dept.getTotalRow() == 0 ? 0 : ds_dept.getRowPosition() + 1;
    const {
      aggrDeptYn,
      checkLevel,
      acctDeptCd,
      acctDeptNm,
      acctDeptLvl
    } = ds_dept.getRowJSON(realIdx);
    if (ds_dept.getTotalRow() != 0 && aggrDeptYn == 0) {
      $c.gus.cfAlertMsg($p, "집계부서가 아니므로 하위에 부서를 생성할수 없습니다.");
      return;
    }
    $c.gus.cfDisableKey($p);
    scwin.f_ToggleImgBtn(true);
    $c.gus.cfDisableBtn($p, [btn_Upt]);
    let data = {
      checkLevel: String(Number(checkLevel) + 1),
      upperAcctDeptCd: acctDeptCd,
      upperAcctDeptNm: acctDeptNm,
      adptStDt: $c.date.getServerDateTime($p),
      adptEndDt: "99991231",
      acctDeptLvl: String(Number(acctDeptLvl) + 1),
      useYn: 1
    };
    ds_dept.setRowJSON(addIdx, data);
    scwin.modifiedRowIndex = addIdx + 1;
    $c.gus.cfDisableBtn($p, [btn_Upt]);
    tv_treeView.findNodeByIndex(addIdx + 1, true);
    ed_acctDeptNm.focus();
  }
};

/**
 * 취소
 */
scwin.f_Cancel = function () {
  const modiIdx = ds_dept.getModifiedIndex()[0];
  const rowStatus = ds_dept.getRowStatus(modiIdx);
  if (modiIdx) {
    if (rowStatus == "U") {
      ds_dept.undoRow(modiIdx);
    }
    if (rowStatus == "C") {
      ds_dept.removeRow(modiIdx);
    }

    // 접기
    tv_treeView.collapseNode(0, true);

    // 펼치기
    tv_treeView.expandNode(modiIdx + 1, true);

    // focus
    tv_treeView.findNodeByIndex(modiIdx + 1, true);
  }
  $c.gus.cfDisableKey($p);
  scwin.f_ToggleImgBtn(false);
  $c.gus.cfDisableBtn($p, [btn_Save]);
  scwin.modifiedRowIndex = "";
  scwin.load_row = "";
};

/**
 * 수정
 */
scwin.f_Update = function () {
  const modiArray = ds_dept.getModifiedIndex();
  if (modiArray.length) {
    $c.win.alert($p, "저장되지 않은 데이타가 있습니다").then(() => {
      tv_treeView.findNodeByIndex(modiArray[0] + 1, true);
    });
    return;
  } else {
    scwin.modifiedRowIndex = tv_treeView.getSelectedNode().index;

    // focus 설정
    ed_acctDeptNm.focus();
  }

  // disable 처리
  $c.gus.cfDisableKey($p);
  scwin.f_ToggleImgBtn(true);
  $c.gus.cfDisableBtn($p, [btn_Upt]);
};

/**
 * 데이터 변경 체크
 */
scwin.f_IsUpdated = function () {
  for (var j = 0; j <= ds_dept.getRowCount(); j++) {
    //if(ds_dept.getRowStatus(j)==1 || ds_dept.getRowStatus(j)==3 ){
    if (ds_dept.getModifiedIndex().length == 0) {
      //$c.gus.cfAlertMsg("저장되지 않은 데이타가 있습니다");
      tv_treeView.focus();
      tv_treeView.index = j;
      $c.gus.cfDisableKey($p);
      scwin.f_ToggleImgBtn(true);
      $c.gus.cfDisableBtn($p, [btn_Upt]);
      return false;
    }
  }
  return true;
};

/**
 * 저장
 */
scwin.f_Save = async function () {
  // Validation check
  if (!(await $c.gus.cfValidate($p, [grp_deptInfo]))) return;
  const rowIdx = ds_dept.getRowPosition();

  // 상위귀속체크
  if (ds_dept.getCellData(rowIdx, "checkLevel") != '0' && ed_upperAcctDeptCd.getValue().trim() == '') {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["상위귀속부서"]).then(() => {
      ed_upperAcctDeptCd.focus();
    });
    return;
  }
  if (ed_acctDeptCd.getValue().trim() == ed_upperAcctDeptCd.getValue().trim()) {
    $c.gus.cfAlertMsg($p, "귀속코드와 상위귀속코드는 동일할수 없습니다.").then(() => {
      ed_upperAcctDeptCd.focus();
    });
    return;
  }

  // 시작일자가 종료일자 이전인지 check
  if (!$c.gus.cfIsAfterDate($p, ed_adptStDt.getValue(), ed_adptEndDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039).then(() => {
      ed_adptStDt.focus();
    });
    return;
  }

  // 변경한 데이터가 있는지 체크한다. 확인필요
  if (ds_dept.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("귀속부서정보"));
    return;
  }
  if (scwin.vCoClsCd > '1') {
    // as-is 소스 비어있음
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    scwin.load_row = tv_treeView.getSelectedIndex();
    $c.sbm.execute($p, sbm_save);
  }
};

/**
 * 저장 callback
 */
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    // 접기
    tv_treeView.collapseNode(0, true);
    await $c.win.alert($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};

/**
 * treeView label click
 */
scwin.tv_treeView_onlabelclick = function (value, node, index) {
  scwin.load_row = index;
  $c.gus.cfDisableKey($p);
  scwin.f_ToggleImgBtn(false);
  $c.gus.cfDisableBtn($p, [btn_Save]);
  if (scwin.modifiedRowIndex) {
    // 직전에 수정버튼 눌렀던 index
    if (scwin.modifiedRowIndex == index) {
      $c.gus.cfDisableKey($p);
      scwin.f_ToggleImgBtn(true);
      $c.gus.cfDisableBtn($p, [btn_Upt]);
    }
  }
};

/**
 * 부서명 변경
 */
scwin.ed_acctDeptNm_onkeyup = function (e) {
  const tvIdx = tv_treeView.getSelectedIndex();
  tv_treeView.setLabelByIndex(tvIdx, this.getValue());
};

/**
 * udc 팝업 호출
 */
scwin.f_PopUp = function (paramArray) {
  const {
    udcObj,
    callback,
    pSelectID,
    pCode,
    pName,
    pOneResultShowYn,
    pWhere,
    pSearchAll
  } = paramArray;
  udcObj.setSelectId(pSelectID);
  udcObj.cfCommonPopUp(callback, $c.gus.cfGetValue($p, pCode), "", pOneResultShowYn // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , pWhere // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , pSearchAll // 전체검색허용여부	("F")
  , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
  , null);
};

/**
 * 귀속부서코드 udc - code code onviewchange
 */
scwin.udc_acctDeptCd_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_srchAcctDeptNm.setValue("");
  }
  if (oldValue != newValue) {
    scwin.f_deptCdPopUp();
  }
};

/**
 * 귀속부서코드 udc - name change
 */
scwin.udc_acctDeptCd_onviewchangeNameEvent = function (info) {
  // scwin.f_deptCdPopUp();
};

/**
 * 귀속부서코드 udc - button click
 */
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_deptCdPopUp("click");
};

/**
 * 귀속부서코드 udc
 */
scwin.f_deptCdPopUp = function (type) {
  const today = $c.date.getServerDateTime($p);
  let param = today;

  // 자회사 회계 시스템
  if (scwin.vCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    param = `${param},${scwin.vCoCd},${scwin.vCoClsCd}`;
  }
  const paramArray = {
    udcObj: udc_acctDeptCd,
    callback: scwin.udc_acctDeptCd_callBackFunc,
    pSelectID: "retrieveAcctDeptCdInfo6",
    pCode: ed_srchAcctDeptCd,
    pName: ed_srchAcctDeptNm,
    pOneResultShowYn: type == "click" ? "F" : "T",
    pWhere: param,
    pSearchAll: type == "click" ? "T" : "F"
  };
  scwin.f_PopUp(paramArray);
};

/**
 * 귀속부서코드 udc - callback
 */
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_srchAcctDeptCd.setValue(ret[0]);
    ed_srchAcctDeptNm.setValue(ret[1]);
  } else {
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptNm.setValue("");
  }
};

/**
 * 상위귀속부서코드 udc - code onviewchange
 */
scwin.udc_upperAcctDeptCd_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_upperAcctDeptNm.setValue("");
  }
  if (oldValue != newValue) {
    scwin.f_upperAcctDeptCdPopup();
  }
};

/**
 * 상위귀속부서코드 udc - click
 */
scwin.udc_upperAcctDeptCd_onclickEvent = function (e) {
  scwin.f_upperAcctDeptCdPopup("click");
};

/**
 * 상위귀속부서코드 udc
 */
scwin.f_upperAcctDeptCdPopup = function (type) {
  let param = ds_dept.getCellData(ds_dept.getRowPosition(), "acctDeptCd");

  // 자회사 회계 시스템
  if (scwin.vCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    param = `${param},,,,${scwin.vCoCd},${scwin.vCoClsCd}`;
  }
  const paramArray = {
    udcObj: udc_upperAcctDeptCd,
    callback: scwin.udc_upperAcctDeptCd_callBackFunc,
    pSelectID: "retrieveAcctDeptCdInfo2",
    pCode: ed_upperAcctDeptCd,
    pName: ed_upperAcctDeptNm,
    pOneResultShowYn: type == "click" ? "F" : "T",
    pWhere: param,
    pSearchAll: type == "click" ? "T" : "F"
  };
  scwin.f_PopUp(paramArray);
};

/**
 * 상위귀속부서코드 udc - callback
 */
scwin.udc_upperAcctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_upperAcctDeptCd.setValue(ret[0]);
    ed_upperAcctDeptNm.setValue(ret[1]);
  } else {
    ed_upperAcctDeptCd.setValue("");
    ed_upperAcctDeptNm.setValue("");
  }
};

/**
 * 예산통제부서 udc - code code onviewchange
 */
scwin.udc_budgetCntlAcctDeptCd_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_budgetCntlAcctDeptNm.setValue("");
  }
  if (oldValue != newValue) {
    scwin.f_budgetCntlAcctDeptCdPopUp();
  }
};

/**
 * 예산통제부서 udc - click
 */
scwin.udc_budgetCntlAcctDeptCd_onclickEvent = function (e) {
  scwin.f_budgetCntlAcctDeptCdPopUp("click");
};

/**
 * 예산통제부서 udc - callback
 */
scwin.f_budgetCntlAcctDeptCdPopUp = function (type) {
  let param = "";

  // 자회사 회계 시스템
  if (scwin.vCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    param = `${param},${scwin.vCoCd},${scwin.vCoClsCd}`;
  }
  const paramArray = {
    udcObj: udc_budgetCntlAcctDeptCd,
    callback: scwin.udc_budgetCntlAcctDeptCd_callBackFunc,
    pSelectID: "retrieveAcctDeptCdInfo2",
    pCode: ed_budgetCntlAcctDeptCd,
    pName: ed_budgetCntlAcctDeptNm,
    pOneResultShowYn: type == "click" ? "F" : "T",
    pWhere: param,
    pSearchAll: type == "click" ? "T" : "F"
  };
  scwin.f_PopUp(paramArray);
};

/**
 * 예산통제부서 udc - callback
 */
scwin.udc_budgetCntlAcctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_budgetCntlAcctDeptCd.setValue(ret[0]);
    ed_budgetCntlAcctDeptNm.setValue(ret[1]);
  } else {
    ed_budgetCntlAcctDeptCd.setValue("");
    ed_budgetCntlAcctDeptNm.setValue("");
  }
};

/**
 * 부가세귀속부서 udc - code code onviewchange
 */
scwin.udc_vatDeclarAcctDeptCd_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_vatDeclarAcctDeptNm.setValue("");
  }
  if (oldValue != newValue) {
    scwin.f_vatDeclarAcctDeptCdPopUp();
  }
};

/**
 * 부가세귀속부서 udc - click
 */
scwin.udc_vatDeclarAcctDeptCd_onclickEvent = function (e) {
  scwin.f_vatDeclarAcctDeptCdPopUp("click");
};

/**
 * 부가세귀속부서 udc
 */
scwin.f_vatDeclarAcctDeptCdPopUp = function (type) {
  let param = ",,1,,";
  const paramArray = {
    udcObj: udc_vatDeclarAcctDeptCd,
    callback: scwin.udc_vatDeclarAcctDeptCd_callBackFunc,
    pSelectID: "retrieveVatDeclarAcctDeptCd",
    pCode: ed_vatDeclarAcctDeptCd,
    pName: ed_vatDeclarAcctDeptNm,
    pOneResultShowYn: type == "click" ? "F" : "T",
    pWhere: param,
    pSearchAll: type == "click" ? "T" : "F",
    pW: "410"
  };
  scwin.f_PopUp(paramArray);
};

/**
 * 부가세귀속부서 udc - callback
 */
scwin.udc_vatDeclarAcctDeptCd_callBackFunc = function (ret) {
  if (ret == null) {
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
  } else if (ret[0] == "N/A") {
    // 원복
    ed_vatDeclarAcctDeptCd.setValue(ed_vatDeclarAcctDeptCd.getUserData("hidVal"));
    ed_vatDeclarAcctDeptNm.setValue(ed_vatDeclarAcctDeptCd.getUserData("hidVal"));
  } else {
    ed_vatDeclarAcctDeptCd.setValue(ret[2]);
    ed_vatDeclarAcctDeptNm.setValue(ret[3]);
    ed_vatDeclarAcctDeptCd.setUserData("hidVal", ret[2]);
    ed_vatDeclarAcctDeptNm.setUserData("hidVal", ret[3]);
  }
};

/**
 * 전도금집행부서 udc - code onviewchange
 */
scwin.udc_advcdExecAcctDeptCd_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_advcdExecAcctDeptNm.setValue("");
  }
  if (oldValue != newValue) {
    scwin.f_advcdExecAcctDeptCdPopUp();
  }
};

/**
 * 전도금집행부서 udc - click
 */
scwin.udc_advcdExecAcctDeptCd_onclickEvent = function (e) {
  scwin.f_advcdExecAcctDeptCdPopUp("click");
};

/**
 * 전도금집행부서 udc - callback
 */
scwin.f_advcdExecAcctDeptCdPopUp = function (type) {
  let param = "";

  // 자회사 회계 시스템
  if (scwin.vCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    param = `${param},${scwin.vCoCd},${scwin.vCoClsCd}`;
  }
  const paramArray = {
    udcObj: udc_advcdExecAcctDeptCd,
    callback: scwin.udc_advcdExecAcctDeptCd_callBackFunc,
    pSelectID: "retrieveAcctDeptCdInfo6",
    pCode: ed_advcdExecAcctDeptCd,
    pName: ed_advcdExecAcctDeptNm,
    pOneResultShowYn: type == "click" ? "F" : "T",
    pWhere: param,
    pSearchAll: type == "click" ? "T" : "F"
  };
  scwin.f_PopUp(paramArray);
};

/**
 * 전도금집행부서 udc - callback
 */
scwin.udc_advcdExecAcctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_advcdExecAcctDeptCd.setValue(ret[0]);
    ed_advcdExecAcctDeptNm.setValue(ret[1]);
  } else {
    ed_advcdExecAcctDeptCd.setValue("");
    ed_advcdExecAcctDeptNm.setValue("");
  }
};

/**
 * 자금집행부서 udc - code onviewchange
 */
scwin.udc_fundExecAcctDeptCd_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_fundExecAcctDeptNm.setValue("");
  }
  if (oldValue != newValue) {
    scwin.f_fundExecAcctDeptCdPopUp();
  }
};

/**
 * 자금집행부서 udc - click
 */
scwin.udc_fundExecAcctDeptCd_onclickEvent = function (e) {
  scwin.f_fundExecAcctDeptCdPopUp("click");
};

/**
 * 자금집행부서 udc
 */
scwin.f_fundExecAcctDeptCdPopUp = function (type) {
  let param = "";

  // 자회사 회계 시스템
  if (scwin.vCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    param = `${param},${scwin.vCoCd},${scwin.vCoClsCd}`;
  }
  const paramArray = {
    udcObj: udc_fundExecAcctDeptCd,
    callback: scwin.udc_fundExecAcctDeptCd_callBackFunc,
    pSelectID: "retrieveAcctDeptCdInfo6",
    pCode: ed_fundExecAcctDeptCd,
    pName: ed_fundExecAcctDeptNm,
    pOneResultShowYn: type == "click" ? "F" : "T",
    pWhere: param,
    pSearchAll: type == "click" ? "T" : "F"
  };
  scwin.f_PopUp(paramArray);
};

/**
 * 자금집행부서 udc - callback
 */
scwin.udc_fundExecAcctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_fundExecAcctDeptCd.setValue(ret[0]);
    ed_fundExecAcctDeptNm.setValue(ret[1]);
  } else {
    ed_fundExecAcctDeptCd.setValue("");
    ed_fundExecAcctDeptNm.setValue("");
  }
};

/**
 * 원천세신고구청 udc - code onviewchange
 */
scwin.udc_withholdDofficeCd_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_withholdDofficeNm.setValue("");
  }
  if (oldValue != newValue) {
    scwin.f_withholdDofficeCdPopUp();
  }
};

/**
 * 원천세신고구청 udc - click
 */
scwin.udc_withholdDofficeCd_onclickEvent = function (e) {
  scwin.f_withholdDofficeCdPopUp("click");
};

/**
 * 원천세신고구청 udc
 */
scwin.f_withholdDofficeCdPopUp = function (type) {
  let param = "1";
  const paramArray = {
    udcObj: udc_withholdDofficeCd,
    callback: scwin.udc_withholdDofficeCd_callBackFunc,
    pSelectID: "retrieveDOfficeCdInfo",
    pCode: ed_withholdDofficeCd,
    pName: ed_withholdDofficeNm,
    pOneResultShowYn: type == "click" ? "F" : "T",
    pWhere: param,
    pSearchAll: type == "click" ? "T" : "F"
  };
  scwin.f_PopUp(paramArray);
};

/**
 * 원천세신고구청 udc - callback
 */
scwin.udc_withholdDofficeCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_withholdDofficeCd.setValue(ret[0]);
    ed_withholdDofficeNm.setValue(ret[1]);
  } else {
    ed_withholdDofficeCd.setValue("");
    ed_withholdDofficeNm.setValue("");
  }
};

/**
 * 자산귀속부서 udc - code onviewchange
 */
scwin.udc_asetAcctDeptCd_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_asetAcctDeptNm.setValue("");
  }
  if (oldValue != newValue) {
    scwin.f_asetAcctDeptCdPopUp();
  }
};

/**
 * 자산귀속부서 udc - click
 */
scwin.udc_asetAcctDeptCd_onclickEvent = function (e) {
  scwin.f_asetAcctDeptCdPopUp("click");
};

/**
 * 자산귀속부서 udc
 */
scwin.f_asetAcctDeptCdPopUp = function (type) {
  let param = "";

  // 자회사 회계 시스템
  if (scwin.vCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    param = `${param},${scwin.vCoCd},${scwin.vCoClsCd},0`;
  }
  const paramArray = {
    udcObj: udc_asetAcctDeptCd,
    callback: scwin.udc_asetAcctDeptCd_callBackFunc,
    pSelectID: "retrieveAcctDeptCdInfo6",
    pCode: ed_asetAcctDeptCd,
    pName: ed_asetAcctDeptNm,
    pOneResultShowYn: type == "click" ? "F" : "T",
    pWhere: param,
    pSearchAll: type == "click" ? "T" : "F"
  };
  scwin.f_PopUp(paramArray);
};

/**
 * 자산귀속부서 udc - callback
 */
scwin.udc_asetAcctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_asetAcctDeptCd.setValue(ret[0]);
    ed_asetAcctDeptNm.setValue(ret[1]);
  } else {
    ed_asetAcctDeptCd.setValue("");
    ed_asetAcctDeptNm.setValue("");
  }
};

/**
 * 관리손익집계부서 udc - code onviewchange
 */
scwin.udc_mgntPrfLossAggrDeptCd_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_mgntPrfLossAggrDeptNm.setValue("");
  }
  if (oldValue != newValue) {
    scwin.f_mgntPrfLossAggrDeptCdPopUp();
  }
};

/**
 * 관리손익집계부서 udc - click
 */
scwin.udc_mgntPrfLossAggrDeptCd_onclickEvent = function (e) {
  scwin.f_mgntPrfLossAggrDeptCdPopUp("click");
};

/**
 * 관리손익집계부서 udc
 */
scwin.f_mgntPrfLossAggrDeptCdPopUp = function (type) {
  const today = $c.date.getServerDateTime($p);
  let param = today;

  // 자회사 회계 시스템
  if (scwin.vCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    param = `${param},${scwin.vCoCd},${scwin.vCoClsCd}`;
  }
  const paramArray = {
    udcObj: udc_mgntPrfLossAggrDeptCd,
    callback: scwin.udc_mgntPrfLossAggrDeptCd_callBackFunc,
    pSelectID: "retrieveAcctDeptCdInfo6",
    pCode: ed_mgntPrfLossAggrDeptCd,
    pName: ed_mgntPrfLossAggrDeptNm,
    pOneResultShowYn: type == "click" ? "F" : "T",
    pWhere: param,
    pSearchAll: type == "click" ? "T" : "F"
  };
  scwin.f_PopUp(paramArray);
};

/**
 * 관리손익집계부서 udc - callback
 */
scwin.udc_mgntPrfLossAggrDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_mgntPrfLossAggrDeptCd.setValue(ret[0]);
    ed_mgntPrfLossAggrDeptNm.setValue(ret[1]);
  } else {
    ed_mgntPrfLossAggrDeptCd.setValue("");
    ed_mgntPrfLossAggrDeptNm.setValue("");
  }
};

/**
 * 지사/집계부서 udc - code onviewchange
 */
scwin.udc_branchAggrDeptCd_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_branchAggrDeptNm.setValue("");
  }
  if (oldValue != newValue) {
    scwin.f_branchAggrDeptCdPopUp();
  }
};

/**
 * 지사/집계부서 udc - click
 */
scwin.udc_branchAggrDeptCd_onclickEvent = function (e) {
  scwin.f_branchAggrDeptCdPopUp("click");
};

/**
 * 지사/집계부서 udc
 */
scwin.f_branchAggrDeptCdPopUp = function (type) {
  const paramArray = {
    udcObj: udc_branchAggrDeptCd,
    callback: scwin.udc_branchAggrDeptCd_callBackFunc,
    pSelectID: "retrieveAcctDeptCdInfo6",
    pCode: ed_branchAggrDeptCd,
    pName: ed_branchAggrDeptNm,
    pOneResultShowYn: type == "click" ? "F" : "T",
    pWhere: "",
    pSearchAll: type == "click" ? "T" : "F"
  };
  scwin.f_PopUp(paramArray);
};

/**
 * 지사/집계부서 udc - callback
 */
scwin.udc_branchAggrDeptCd_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[8] != 1) {
      $c.win.alert($p, "지사/집계부서는 집계부서인 경우만 선택이 가능합니다.").then(() => {
        ed_branchAggrDeptCd.setValue("");
        ed_branchAggrDeptNm.setValue("");
      });
      return;
    } else {
      ed_branchAggrDeptCd.setValue(rtnList[0]);
      ed_branchAggrDeptNm.setValue(rtnList[1]);
    }
  } else {
    ed_branchAggrDeptCd.setValue("");
    ed_branchAggrDeptNm.setValue("");
  }
};

/**
 * 회사코드 udc - code onviewchange
 */
scwin.udc_coCd_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_coNm.setValue("");
  }
  if (oldValue != newValue) {
    scwin.f_PopUpCompanyInfo();
  }
};

/**
 * 회사코드 udc - click
 */
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo("click");
};

/**
 * 회사코드 udc
 */
scwin.f_PopUpCompanyInfo = function (type) {
  const paramArray = {
    udcObj: udc_coCd,
    callback: scwin.udc_coCd_callBackFunc,
    pSelectID: "retrieveDongbuGroupCompanyInfo",
    pCode: ed_coCd,
    pName: ed_coNm,
    pOneResultShowYn: "T",
    pWhere: "",
    pSearchAll: type == "click" ? "T" : "F"
  };
  scwin.f_PopUp(paramArray);
};

/**
 * 회사코드 udc - callback
 */
scwin.udc_coCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_coCd.setValue(ret[0]);
    ed_coNm.setValue(ret[5]);
    lc_coClsCd.setValue(ret[1]);
    chb_virtureDeptYn.setValue(ret[1]);
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    lc_coClsCd.setValue("");
    chb_virtureDeptYn.setValue("");
  }
};

/**
 * 이미지 버튼의 Enable/Disable
 */
scwin.f_ToggleImgBtn = function (mode) {
  if (mode) {
    grp_deptInfo.setDisabled(false);
    $c.gus.cfEnableObjects($p, [ed_adptStDt, ed_adptEndDt]);
    $c.gus.cfEnableObjects($p, [ed_upperAcctDeptCd, ed_upperAcctDeptNm, btn_upperAcctDept]);
    $c.gus.cfEnableObjects($p, [ed_budgetCntlAcctDeptCd, ed_budgetCntlAcctDeptNm, btn_budgetCntlAcctDept]);
    $c.gus.cfEnableObjects($p, [ed_vatDeclarAcctDeptCd, ed_vatDeclarAcctDeptNm, btn_vatDeclarAcctDept]);
    $c.gus.cfEnableObjects($p, [ed_advcdExecAcctDeptCd, ed_advcdExecAcctDeptNm, btn_advcdExecAcctDept]);
    $c.gus.cfEnableObjects($p, [ed_fundExecAcctDeptCd, ed_fundExecAcctDeptNm, btn_fundExecAcctDept]);
    $c.gus.cfEnableObjects($p, [ed_withholdDofficeCd, ed_withholdDofficeNm, btn_withholdDoffice]);
    $c.gus.cfEnableObjects($p, [ed_asetAcctDeptCd, ed_asetAcctDeptNm, btn_asetAcctDeptCd]);
    $c.gus.cfEnableObjects($p, [ed_mgntPrfLossAggrDeptCd, ed_mgntPrfLossAggrDeptNm, btn_mgntPrfLossAggrDept]);
    $c.gus.cfEnableObjects($p, [ed_branchAggrDeptCd, ed_branchAggrDeptNm, btn_branchAggrDept]);
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    // $c.gus.cfEnableObjects([lc_coClsCd]);
    // $c.gus.cfEnableObjects([chb_virtureDeptYn]);
  } else {
    grp_deptInfo.setDisabled(true);
    $c.gus.cfDisableObjects($p, [ed_adptStDt, ed_adptEndDt]);
    $c.gus.cfDisableObjects($p, [ed_upperAcctDeptCd, ed_upperAcctDeptNm, btn_upperAcctDept]);
    $c.gus.cfDisableObjects($p, [ed_budgetCntlAcctDeptCd, ed_budgetCntlAcctDeptNm, btn_budgetCntlAcctDept]);
    $c.gus.cfDisableObjects($p, [ed_vatDeclarAcctDeptCd, ed_vatDeclarAcctDeptNm, btn_vatDeclarAcctDept]);
    $c.gus.cfDisableObjects($p, [ed_advcdExecAcctDeptCd, ed_advcdExecAcctDeptNm, btn_advcdExecAcctDept]);
    $c.gus.cfDisableObjects($p, [ed_fundExecAcctDeptCd, ed_fundExecAcctDeptNm, btn_fundExecAcctDept]);
    $c.gus.cfDisableObjects($p, [ed_withholdDofficeCd, ed_withholdDofficeNm, btn_withholdDoffice]);
    $c.gus.cfDisableObjects($p, [ed_asetAcctDeptCd, ed_asetAcctDeptNm, btn_asetAcctDeptCd]);
    $c.gus.cfDisableObjects($p, [ed_mgntPrfLossAggrDeptCd, ed_mgntPrfLossAggrDeptNm, btn_mgntPrfLossAggrDept]);
    $c.gus.cfDisableObjects($p, [ed_branchAggrDeptCd, ed_branchAggrDeptNm, btn_branchAggrDept]);
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    // $c.gus.cfDisableObjects([lc_coClsCd]);
    // $c.gus.cfDisableObjects([chb_virtureDeptYn]);
  }

  // 자회사여부, 자회사구분
  chb_virtureDeptYn.setDisabled(true);
  lc_coClsCd.setDisabled(true);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:65px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:65px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'귀속코드',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',class:'w250',codeId:'ed_srchAcctDeptCd',maxlengthCode:'5',nameId:'ed_srchAcctDeptNm',popupID:'',selectID:'',style:'',validTitle:'',btnId:'btn_dept',id:'udc_acctDeptCd','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_acctDeptCd_onviewchangeCodeEvent',refDataCollection:'ds_search',code:'acctDeptCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사용여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:ds_search.useYn',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_srchUseYn',renderType:'',class:'form-control w100',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_srchUseYn'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_search',type:'button',class:'btn sch',escape:'false',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'lybox wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 450px;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'귀속부서 Tree',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_Add',label:'행추가',class:'btn ',objType:'bCreate',userAuth:'C','ev:onclick':'scwin.f_AddItem'}},{T:1,N:'w2:button',A:{style:'',id:'btn_Cancel',label:'취소',class:'btn ',objType:'bDelete','ev:onclick':'scwin.f_Cancel'}}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'N',gridID:'',btnUser:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'grd_section1',class:'tvw-wrap '},E:[{T:1,N:'w2:treeview',A:{tooltipGroupClass:'false',dataType:'listed',style:'height:542px;',id:'tv_treeView',renderType:'virtual',showTreeDepth:'8','ev:onlabelclick':'scwin.tv_treeView_onlabelclick',dynamicAppend:'true'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_dept'},E:[{T:1,N:'w2:label',A:{ref:'acctDeptNm'}},{T:1,N:'w2:value',A:{ref:'upperAcctDeptCd'}},{T:1,N:'w2:depth',A:{ref:'checkLevel'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox mt32'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'grp_deptInfo',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'귀속코드',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'ed_acctDeptCd',placeholder:'',class:'form-control w110',objType:'key',allowChar:'0-9',ref:'data:ds_dept.acctDeptCd',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'부서명',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'ed_acctDeptNm',placeholder:'',class:'form-control w180',objType:'data',maxlength:'50',mandatory:'true',maxByteLength:'50',ref:'data:ds_dept.acctDeptNm',title:'부서명','ev:onkeyup':'scwin.ed_acctDeptNm_onkeyup',editType:'focus'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'영문명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_acctDeptEngNm',placeholder:'',class:'',objType:'data',maxlength:'50',maxByteLength:'50',ref:'data:ds_dept.acctDeptEngNm',ignoreChar:'ㄱ-ㅎㅏ-ㅣ가-힣',validateOnInput:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업영역',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'minimal',chooseOption:'',chooseOptionLabel:'전체',class:'form-control w150',id:'acb_srchBizdom',objType:'data',ref:'data:ds_dept.bizDomCd',renderType:'',style:'',title:'사업영역',mandatory:'true',allOption:'',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_bizdom'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',chooseOptionLabel:'전체',class:'form-control w150',id:'acb_srchBizdiv',mandatory:'true',objType:'data',ref:'data:ds_dept.bizdivCd',renderType:'',style:'',title:'사업부',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_bizdiv'},E:[{T:1,N:'xf:label',A:{ref:'bizdivNm'}},{T:1,N:'xf:value',A:{ref:'bizdivCd'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공통비구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_comCostClsCd',mandatory:'true',objType:'data',ref:'data:ds_dept.comCostClsCd',renderType:'',style:'',submenuSize:'auto',title:'공통비구분',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서레벨',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_acctDeptLvl',mandatory:'true',objType:'data',ref:'data:ds_dept.acctDeptLvl',renderType:'',style:'',submenuSize:'auto',chooseOptionLabel:'전체',title:'귀속부서레벨',emptyItem:'true',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상위귀속부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'w300',codeId:'ed_upperAcctDeptCd',objTypeCode:'data',allowCharCode:'0-9',UpperFlagCode:'',maxlengthCode:'5',nameId:'ed_upperAcctDeptNm',objTypeName:'key',btnId:'btn_upperAcctDept',id:'udc_upperAcctDeptCd',code:'upperAcctDeptCd',refDataCollection:'ds_dept',selectID:'','ev:onviewchangeCodeEvent':'scwin.udc_upperAcctDeptCd_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_upperAcctDeptCd_onclickEvent',name:'upperAcctDeptNm',validTitle:'상위귀속부서',readOnlyName:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'예산통제부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{class:'w300',popupID:'',style:'',id:'udc_budgetCntlAcctDeptCd',codeId:'ed_budgetCntlAcctDeptCd',objTypeCode:'data',allowCharCode:'0-9',nameId:'ed_budgetCntlAcctDeptNm',objTypeName:'key',btnId:'btn_budgetCntlAcctDept',refDataCollection:'ds_dept',selectID:'',code:'budgetCntlAcctDeptCd','ev:onviewchangeCodeEvent':'scwin.udc_budgetCntlAcctDeptCd_onviewchangeCodeEvent',name:'budgetCntlAcctDeptNm',maxlengthCode:'5',readOnlyName:'true','ev:onclickEvent':'scwin.udc_budgetCntlAcctDeptCd_onclickEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'부가세관리부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{class:'w300',popupID:'',style:'',id:'udc_vatDeclarAcctDeptCd',codeId:'ed_vatDeclarAcctDeptCd',objTypeCode:'data',allowCharCode:'0-9',nameId:'ed_vatDeclarAcctDeptNm',objTypeName:'key',btnId:'btn_vatDeclarAcctDept',refDataCollection:'ds_dept',selectID:'',code:'vatDeclarAcctDeptCd','ev:onviewchangeCodeEvent':'scwin.udc_vatDeclarAcctDeptCd_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_vatDeclarAcctDeptCd_onclickEvent',name:'vatDeclarAcctDeptNm',maxlengthCode:'5',readOnlyName:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'전도금집행부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{class:'w300',popupID:'',style:'',id:'udc_advcdExecAcctDeptCd',codeId:'ed_advcdExecAcctDeptCd',objTypeCode:'data',allowCharCode:'0-9',nameId:'ed_advcdExecAcctDeptNm',objTypeName:'key',btnId:'btn_advcdExecAcctDept',refDataCollection:'ds_dept',selectID:'',code:'advcdExecAcctDeptCd','ev:onclickEvent':'scwin.udc_advcdExecAcctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_advcdExecAcctDeptCd_onviewchangeCodeEvent',name:'advcdExecAcctDeptNm',maxlengthCode:'5',readOnlyName:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'자금집행부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{class:'w300',popupID:'',style:'',id:'udc_fundExecAcctDeptCd',codeId:'ed_fundExecAcctDeptCd',objTypeCode:'data',allowCharCode:'0-9',nameId:'ed_fundExecAcctDeptNm',btnId:'btn_fundExecAcctDept',refDataCollection:'ds_dept',selectID:'',code:'fundExecAcctDeptCd','ev:onviewchangeCodeEvent':'scwin.udc_fundExecAcctDeptCd_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_fundExecAcctDeptCd_onclickEvent',name:'fundExecAcctDeptNm',maxlengthCode:'5',readOnlyName:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'원천세신고구청',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{class:'w300',popupID:'',style:'',id:'udc_withholdDofficeCd',codeId:'ed_withholdDofficeCd',objTypeCode:'data',mandatoryCode:'true',allowCharCode:'0-9',nameId:'ed_withholdDofficeNm',objTypeName:'key',btnId:'btn_withholdDoffice',refDataCollection:'ds_dept',selectID:'',code:'withholdDofficeCd','ev:onviewchangeCodeEvent':'scwin.udc_withholdDofficeCd_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_withholdDofficeCd_onclickEvent',name:'withholdDofficeNm',maxlengthCode:'5',validTitle:'원천세신고구청',readOnlyName:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'자산귀속부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{class:'w300',popupID:'',style:'',id:'udc_asetAcctDeptCd',codeId:'ed_asetAcctDeptCd',mandatoryCode:'true',objTypeCode:'data',maxlengthCode:'5',allowCharCode:'0-9',nameId:'ed_asetAcctDeptNm',objTypeName:'key',btnId:'btn_asetAcctDeptCd',refDataCollection:'ds_dept',selectID:'',code:'asetAcctDeptCd','ev:onviewchangeCodeEvent':'scwin.udc_asetAcctDeptCd_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_asetAcctDeptCd_onclickEvent',name:'asetAcctDeptNm',validTitle:'자산귀속부서',readOnlyName:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'관리손익집계부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{class:'w300',popupID:'',style:'',id:'udc_mgntPrfLossAggrDeptCd',codeId:'ed_mgntPrfLossAggrDeptCd',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'5',nameId:'ed_mgntPrfLossAggrDeptNm',btnId:'btn_mgntPrfLossAggrDept',refDataCollection:'ds_dept',selectID:'',code:'mgntPrfLossAggrDeptCd','ev:onviewchangeCodeEvent':'scwin.udc_mgntPrfLossAggrDeptCd_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_mgntPrfLossAggrDeptCd_onclickEvent',name:'mgntPrfLossAggrDeptNm',readOnlyName:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지사/집계부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{class:'w300',popupID:'',style:'',id:'udc_branchAggrDeptCd',codeId:'ed_branchAggrDeptCd',objTypeCode:'data',allowCharCode:'0-9',nameId:'ed_branchAggrDeptNm',btnId:'btn_branchAggrDept',refDataCollection:'ds_dept',selectID:'',code:'branchAggrDeptCd','ev:onviewchangeCodeEvent':'scwin.udc_branchAggrDeptCd_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_branchAggrDeptCd_onclickEvent',name:'branchAggrDeptNm',maxlengthCode:'5',readOnlyName:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'비용구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{ref:'data:ds_dept.costClsCd',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'',id:'lc_costClsCd',renderType:'',class:'form-control w150',direction:'auto',objType:'data',mandatory:'false',title:'비용구분',chooseOptionLabel:'$blank',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'adptStDt',refDataMap:'ds_dept',style:'',id:'udc_fromToCalendar1',refEdDt:'adptEndDt',mandatory:'true',edFromId:'ed_adptStDt',edToId:'ed_adptEndDt',objTypeFrom:'data',mandatoryFrom:'true',objTypeTo:'data',mandatoryTo:'true',objTypeBtn:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'예산부서여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{ref:'data:ds_dept.budgetDeptYn',appearance:'full',style:'',id:'chb_budgetDeptYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',objType:'data','ev:oncheckboxclick':'scwin.chb_budgetDeptYn_oncheckboxclick','ev:onlabelclick':'scwin.chb_budgetDeptYn_onlabelclick',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'전도부서여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{ref:'data:ds_dept.advcdExecDeptYn',appearance:'full',style:'',id:'chb_advcdExecDeptYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',objType:'data','ev:oncheckboxclick':'scwin.chb_advcdExecDeptYn_oncheckboxclick','ev:onlabelclick':'scwin.chb_advcdExecDeptYn_onlabelclick',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'자금부서여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{ref:'data:ds_dept.fundDeptYn',appearance:'full',style:'',id:'chb_fundDeptYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',objType:'data','ev:oncheckboxclick':'scwin.chb_fundDeptYn_oncheckboxclick','ev:onlabelclick':'scwin.chb_fundDeptYn_onlabelclick',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'집계부서여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{ref:'data:ds_dept.aggrDeptYn',appearance:'full',style:'',id:'chb_aggrDeptYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',objType:'data','ev:oncheckboxclick':'scwin.chb_aggrDeptYn_oncheckboxclick','ev:onlabelclick':'scwin.chb_aggrDeptYn_onlabelclick',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업소세집계유형',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:ds_dept.bizTaxAggrPatternCd',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'',id:'lc_bizTaxAggrPatternCd',renderType:'',class:'form-control w150',direction:'auto',objType:'data',mandatory:'true',title:'사업소세집계유형',chooseOptionLabel:'선택'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업소세집계제외',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{ref:'data:ds_dept.bizTaxAggrExceptYn',appearance:'full',style:'',id:'chb_bizTaxAggrExceptYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',objType:'data','ev:oncheckboxclick':'scwin.chb_bizTaxAggrExceptYn_oncheckboxclick','ev:onlabelclick':'scwin.chb_bizTaxAggrExceptYn_onlabelclick',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사용여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{ref:'data:ds_dept.useYn',appearance:'full',style:'',id:'chb_useYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',objType:'data','ev:oncheckboxclick':'scwin.chb_useYn_oncheckboxclick','ev:onlabelclick':'scwin.chb_useYn_onlabelclick',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'정렬순번',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_sortSeq',placeholder:'',class:'form-control w110',objType:'data',allowChar:'0-9',maxlength:'5',ref:'data:ds_dept.sortSeq'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'전자결재여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{ref:'data:ds_dept.elecApprvTrgtYn',appearance:'full',style:'',id:'chb_elecApprvTrgtYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',objType:'data','ev:oncheckboxclick':'scwin.chb_elecApprvTrgtYn_oncheckboxclick','ev:onlabelclick':'scwin.chb_elecApprvTrgtYn_onlabelclick',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'자회사여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{ref:'data:ds_dept.virtureDeptYn',appearance:'full',style:'',id:'chb_virtureDeptYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',falseValue:'0','ev:oncheckboxclick':'scwin.chb_virtureDeptYn_oncheckboxclick','ev:onlabelclick':'scwin.chb_virtureDeptYn_onlabelclick'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'회사코드',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'w250',popupID:'',style:'',id:'udc_coCd',codeId:'ed_coCd',objTypeCode:'data',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',maxlengthCode:'3',nameId:'ed_coNm',objTypeName:'data',btnId:'btn_company',selectID:'',code:'coCd',name:'corRegNm',refDataCollection:'ds_dept','ev:onviewchangeCodeEvent':'scwin.udc_coCd_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent',validTitle:'회사코드',readOnlyName:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'자회사구분',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:ds_dept.coClsCd',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',style:'',allOption:'false',id:'lc_coClsCd',renderType:'',class:'form-control w150',direction:'auto',mandatory:'true',validExp:'자회사구분:no',chooseOptionLabel:'선택',title:'자회사구분'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]}]}]}]}]}]}]},{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'[관리손익집계부서] 관리손익 화면에서 집계부서로 사용함',class:'info-txt txt-red'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_Upt',label:'수정',class:'btn',objType:'bUpdate',userAuth:'U','ev:onclick':'scwin.f_Update'}},{T:1,N:'w2:button',A:{style:'',id:'btn_Save',label:'저장',class:'btn',objType:'bSave',userAuth:'C','ev:onclick':'scwin.f_Save'}}]}]}]}]}]}]})