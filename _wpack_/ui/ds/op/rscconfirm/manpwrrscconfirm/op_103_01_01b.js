/*amd /ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_01b.xml 37101 1d3d96501730683bc80ea2078c224ea62359caac07d98519fc3c06afaf98ac81 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_commSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'그룹코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtlOccptypeCd',name:'세부직종',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'사번',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryYm',name:'조회년월',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vacaRsn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'grpCd',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'코드영어명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ssn',name:'주민등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ssn1',name:'주민등록번호1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'직종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm',name:'상세직종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jsNm',name:'사업부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'entDt',name:'입사일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retireDt',name:'퇴사일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'houseTelNo',name:'자택전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chiefYn',name:'반장여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salYn',name:'급여여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sal',name:'급여',dataType:'text'}},{T:1,N:'w2:column',A:{id:'daypayAmt',name:'일당금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'servCtrtTmnYn',name:'용역계약해지여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptStDt',name:'적용시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tocYn',name:'TOC여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedArrangeYn',name:'고정배치여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeClsCd',name:'직종구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'managerYn',name:'소장여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asistYn',name:'사무장여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vacation',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vacaRsnCd',name:'휴무사유코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vacaRsnNm',name:'휴무사유명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vacaIntendStDt',name:'휴무예정시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vacaIntendEndDt',name:'휴무예정종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_commCode',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_commSearch","key":"IN_DS1"}',target:'data:json,{"id":"ds_vacaRsn","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveEmp',action:'/ds.op.RetrieveFormalityFunctionEmployeeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_emp","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_emp","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveEmp_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveVaction',action:'/ds.op.RetrieveVacationIntendCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"ds_vacation","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_vacation","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveVaction_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.SaveVacationIntendCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_vacation","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.memInfo = $c.data.getMemInfo($p);
  scwin.curDate = $c.date.getServerDateTime($p);
  scwin.cmd = "";

  //점소 조회
  $c.sbm.execute($p, sbm_lobran);

  //공통코드 조회(휴무사유)
  const codeOptions = [{
    grpCd: "OP164",
    compID: "gr_vacation:vacaRsnCd"
  }, {
    grpCd: "OP161",
    compID: "co_lc_lob"
  }];
  $c.data.setCommonCode($p, codeOptions, function () {
    dlt_commonCodeOP164.sort("cd", 0);
    dlt_commonCodeOP161.setRowJSON(0, {
      cd: "",
      cdNm: "전체",
      fltrCd2: "02"
    }, false);
    $c.data.dataListFilter($p, dlt_commonCodeOP161, "fltrCd2=='02'");
  });
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  em_qryYm.setValue(scwin.curDate);
  $c.gus.cfDisableKey($p);
};

//-------------------------------------------------------------------------
// 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  em_qryYm.setValue(scwin.curDate);
  co_lc_lobran.setValue(scwin.memInfo.loUpperLobranCd);
  ed_dept_01.setValue(co_lc_lobran.getValue());
  ed_dept_02.setValue(co_lc_lobran.getText(true));
  co_lc_lobran.focus();
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// 사원조회
//-------------------------------------------------------------------------
scwin.f_retrieveEmp = async function () {
  //조회 필수 조건 check
  if (!(await $c.gus.cfValidate($p, [tbl_search], null, true))) {
    return;
  }
  ds_vacation.removeAll();
  dma_search.set("lobranCd", ed_dept_01.getValue());
  dma_search.set("wrkPlCd", ed_works_01.getValue());
  dma_search.set("dtlOccptypeCd", co_lc_lob.getValue());
  dma_search.set("staffNo", ed_emp_01.getValue());
  $c.sbm.execute($p, sbm_retrieveEmp);
};

//-------------------------------------------------------------------------
// 휴무조회
//-------------------------------------------------------------------------
scwin.f_retrieveVacation = async function () {
  //조회 필수 조건 check
  if (!(await $c.gus.cfValidate($p, [tbl_search], null, true))) {
    return;
  }
  ds_vacation.removeAll();
  dma_search.set("lobranCd", ed_dept_01.getValue());
  dma_search.set("wrkPlCd", ed_works_01.getValue());
  dma_search.set("dtlOccptypeCd", co_lc_lob.getValue());
  dma_search.set("staffNo", ed_emp_01.getValue());
  $c.sbm.execute($p, sbm_retrieveVaction);
};

//-------------------------------------------------------------------------
// 공통팝업 호출
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    // inObj가 코드 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 공통 팝업 호출
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      //부서
      var lobranCd = co_lc_lobran.getValue();
      udc_dept_01.cfCommonPopUp(scwin.callBackDept, pCode, pName, pClose, null, null, null, null, lobranCd, null, null, null, null);
      break;
    case 2:
      //작업장
      if (!(await $c.gus.cfValidate($p, [ed_dept_01], null, true))) {
        return;
      }
      var lobranCd = co_lc_lobran.getValue();
      var paramList = "," + lobranCd;
      udc_works_01.cfCommonPopUp(scwin.callBackWrkPl, pCode, pName, pClose, null, null, null, null, paramList, null, null, null, null);
      break;
    case 3:
      //인원
      udc_emp_01.cfCommonPopUp(scwin.callBackEmp, pCode, pName, pClose, null, null, null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
//부서
scwin.callBackDept = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dept_01, ed_dept_02);
};

//작업장
scwin.callBackWrkPl = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_works_01, ed_works_02);
};

//인원
scwin.callBackEmp = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_emp_01, ed_emp_02);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_addRow = async function () {
  if (ds_emp.getRowCount() == 0) {
    return;
  }
  let chkVal = await $c.gus.cfValidate($p, [gr_vacation], null, true);
  if (!chkVal) {
    return;
  }
  let chkDate = await scwin.f_checkVacationDate();
  if (!chkDate) {
    return;
  }
  let row = ds_vacation.insertRow();
  gr_vacation.setFocusedCell(row, 0);
  ds_vacation.setCellData(row, "staffNo", ed_staffNo.getValue());
};

//-------------------------------------------------------------------------
// CheckVacation
//-------------------------------------------------------------------------
scwin.f_checkVacationDate = async function () {
  var sStDt = "";
  var sEndDt = "";
  var tStDt = "";
  var tEndDt = "";
  var cnt = 0;
  for (var i = 0; i < ds_vacation.getRowCount(); i++) {
    sStDt = ds_vacation.getCellData(i, "vacaIntendStDt");
    sEndDt = ds_vacation.getCellData(i, "vacaIntendEndDt");
    if (sStDt > sEndDt) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      return false;
    }
    for (var j = i + 1; j < ds_vacation.getRowCount(); j++) {
      cnt = 0;
      tStDt = ds_vacation.getCellData(j, "vacaIntendStDt");
      tEndDt = ds_vacation.getCellData(j, "vacaIntendEndDt");
      if (sStDt > tStDt && sStDt > tEndDt) {
        cnt = 1;
      } else if (sEndDt < tStDt && sEndDt < tEndDt) {
        cnt = 1;
      }
      if (eval(cnt) == 0) {
        $c.win.alert($p, "기존에 입력하신 휴가계획과 중복됩니다.");
        gr_vacation.setFocusedCell(j, "vacaIntendStDt");
        return false;
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_save = async function () {
  //변경한 데이터가 있는지 체크한다. 
  if (ds_vacation.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["휴무정보"]);
    return;
  }
  if (!(await $c.gus.cfValidate($p, [gr_vacation], null, true))) {
    return;
  }
  if (!(await scwin.f_checkVacationDate())) {
    return;
  }

  //저장하시겠습니까?
  if (await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_001))) {
    $c.sbm.execute($p, sbm_save);
  }
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//점소조회 완료
scwin.sbm_lobran_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  }
  scwin.f_defaultValue();
};

//사원조회 완료
scwin.sbm_retrieveEmp_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  }
  var rowCnt = ds_emp.getRowCount();
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }
  }
  txt_totalRow1.setValue(rowCnt);
  gr_emp.setFocusedCell(0, 0);
  scwin.gr_emp_oncellclick(0);
  scwin.cmd = "R";
};

//휴무조회 완료
scwin.sbm_retrieveVaction_submitdone = function (e) {
  console.log("scwin.sbm_retrieveVaction_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  }
  var rowCnt = ds_vacation.getRowCount();
  txt_totalRow2.setValue(rowCnt);
  if (rowCnt == 0) {
    if (scwin.cmd != "S") {
      $c.win.alert($p, "휴무정보가 존재하지 않습니다.");
      return;
    }
  } else {
    gr_vacation.setFocusedCell(0, 0);
  }
};

//저장 완료
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  }
  await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_INF_001));
  scwin.f_retrieveVacation();
  scwin.cmd = "S";
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//점소코드 소문자 입력 > 대문자 변경
scwin.co_lc_lobran_oneditenter = function () {
  $c.gus.cfToUpper($p, co_lc_lobran);
};

//점소 blur > 사업부서 값 설정
scwin.co_lc_lobran_onviewchange = function (e) {
  ed_dept_01.setValue(co_lc_lobran.getValue());
  ed_dept_02.setValue(co_lc_lobran.getText(true));
};

//사업부서 찾기 버튼
scwin.udc_dept_01_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(1, ed_dept_01.getValue(), ed_dept_02.getValue(), 'F', 'F');
};
scwin.udc_dept_01_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dept_01, ed_dept_02, 1);
};
scwin.udc_dept_01_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_dept_02, ed_dept_01, 1, false);
};

//작업장 찾기 버튼
scwin.udc_works_01_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(2, ed_works_01.getValue(), ed_works_02.getValue(), 'F', 'F');
};
scwin.udc_works_01_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_works_01, ed_works_02, 2);
};
scwin.udc_works_01_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_works_02, ed_works_01, 2, false);
};

//사원 찾기 버튼
scwin.udc_emp_01_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(3, ed_emp_01.getValue(), "", 'F', 'F');
};
scwin.udc_emp_01_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_emp_01, ed_emp_02, 3);
};
scwin.udc_emp_01_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_emp_02, ed_emp_01, 3, false);
};

//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  scwin.f_fieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  scwin.f_retrieveEmp();
};

// 사원 그리드 클릭 > 휴무정보 조회
scwin.gr_emp_oncellclick = function (rowIndex, columnIndex, columnId) {
  dma_search2.set("staffNo", ds_emp.getCellData(rowIndex, "staffNo").trim());
  dma_search2.set("qryYm", em_qryYm.getValue().trim());
  scwin.f_retrieveVacation();
};

//저장 버튼
scwin.btn_upt_onclick = function (e) {
  scwin.f_save();
};
scwin.gr_vacation_oncellclick = function (row, col, colid) {
  let readonly = true;
  if (ds_vacation.getRowStatus(row) == "C") {
    readonly = false;
  }
  gr_vacation.setCellReadOnly(row, "vacaIntendStDt", readonly);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:45px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_lc_lobran',search:'start',style:'width:200px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_search.lobranCd',searchTarget:'value','ev:oneditenter':'scwin.co_lc_lobran_oneditenter',visibleRowNum:'10','ev:onviewchange':'scwin.co_lc_lobran_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'pop_dept01',style:'',class:'col7',codeId:'ed_dept_01',maxlengthCode:'4',UpperFlagCode:'1',nameId:'ed_dept_02',id:'udc_dept_01',btnId:'btn_dept_01',mandatoryCode:'true',mandatoryName:'true',objTypeCode:'data',validExpCode:'사업부서:yes',validExpName:'사업부서:yes',selectID:'retrieveOpDeptCdInfo','ev:onclickEvent':'scwin.udc_dept_01_onclickEvent',popupGridHeadTitle:'부서코드, 부서명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupTitle:'부서조회, 부서코드, 부서명','ev:onblurCodeEvent':'scwin.udc_dept_01_onblurCodeEvent',refDataCollection:'dma_search',validTitle:'사업부서','ev:onviewchangeNameEvent':'scwin.udc_dept_01_onviewchangeNameEvent',allowCharCode:'0-9A-Za-z',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조회년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'em_qryYm',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM',validExp:'조회년월:yes:date=YYYYMM',ref:'',editType:'select'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직종 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_lc_lob',search:'start',style:'width:200px;',submenuSize:'auto',ref:'data:dma_search.dtlOccptypeCd',visibleRowNum:'10'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{class:'col7',popupID:'pop_works_01',style:'',codeId:'ed_works_01',objTypeName:'data',objTypeCode:'data',UpperFlagCode:'1',maxlengthCode:'5',nameId:'ed_works_02',id:'udc_works_01',btnId:'btn_works_01',selectID:'retrieveWrkPlInfo',refDataCollection:'dma_search',code:'wrkPlCd','ev:onclickEvent':'scwin.udc_works_01_onclickEvent',popupTitle:'작업장조회, 작업장코드, 작업장명',popupGridHeadTitle:'작업장코드, 작업장명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10','ev:onblurCodeEvent':'scwin.udc_works_01_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_works_01_onviewchangeNameEvent',allowCharCode:'0-9A-Za-z',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사원 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'col7',popupID:'pop_emp_01',style:'',codeId:'ed_emp_01',maxlengthCode:'6',objTypeCode:'data',nameId:'ed_emp_02',UpperFlagCode:'1',id:'udc_emp_01',btnId:'btn_emp_01',selectID:'retrieveOpEmpCdInfo',refDataCollection:'dma_search',code:'staffNo','ev:onclickEvent':'scwin.udc_emp_01_onclickEvent',popupGridHeadTitle:'정규직원코드, 정규직원명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupTitle:'정규직조회, 정규직원코드, 정규직원명','ev:onblurCodeEvent':'scwin.udc_emp_01_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_emp_01_onviewchangeNameEvent',allowCharCode:'0-9A-Za-z',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'사원',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_leftGrd',grdDownOpts:'{"fileName":"사원.xlsx", "sheetName" : "사원", "type":"4+8+16"}',gridID:'gr_emp',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw ',dataList:'data:ds_emp',id:'gr_emp',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'','ev:oncellclick':'scwin.gr_emp_oncellclick',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'사업부서'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'120',value:'작업장'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'세부직종'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'80',value:'직급'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'사번',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'사원명',width:'80'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'jsNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkPlNm',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'dtlOccptypeNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'occpgrdNm',inputType:'text',removeBorderStyle:'false',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNo',inputType:'text',style:'',value:'',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNm',inputType:'text',style:'',value:'',width:'80',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'txt_totalRow1',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사원번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_staffNo',placeholder:'',style:'width:150px;',minByteLength:'10',objType:'key',ref:'data:ds_emp.staffNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사원명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_staffNm',placeholder:'',style:'width:150px;',maxlength:'10',objType:'key',ref:'data:ds_emp.staffNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주민등록번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_ssn',placeholder:'',style:'width:150px;',maxlength:'10',objType:'key',ref:'data:ds_emp.ssn'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직급',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_occpgrdNm',placeholder:'',style:'width:150px;',maxlength:'10',objType:'key',ref:'data:ds_emp.occpgrdNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세부직종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_dtlOccptypeNm',placeholder:'',style:'width:150px;',maxlength:'10',objType:'key',ref:'data:ds_emp.dtlOccptypeNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lodeptNm',placeholder:'',style:'width:150px;',maxlength:'10',objType:'key',ref:'data:ds_emp.jsNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_wrkPlNm',placeholder:'',style:'width:150px;',maxlength:'10',objType:'key',ref:'data:ds_emp.wrkPlNm'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'휴무정보',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"휴무정보.xlsx", "sheetName" : "휴무정보", "type":"4+8+16"}',gridUpYn:'N',grp:'grd_section2',style:'',id:'udc_rightGrd',gridID:'gr_vacation',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',editModeEvent:'onclick',scrollByColumn:'false',checkReadOnlyOnPasteEnable:'',rowStatusVisible:'true',visibleRowNumFix:'true',dataList:'data:ds_vacation',style:'',autoFit:'allColumn',id:'gr_vacation',visibleRowNum:'9',class:'wq_gvw',rowStatusWidth:'20','ev:oncellclick':'scwin.gr_vacation_oncellclick',dataName:'휴무정보',validFeatures:'ignoreStatus=no',validExp:'vacaRsnCd:휴무사유:yes,vacaIntendStDt:휴무예정시작일:yes:date=YYYYMMDD,vacaIntendEndDt:휴무예정종료일:yes:date=YYYYMMDD'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column13',value:'휴무사유코드',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'휴무사유',blockSelect:'false',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column11',value:'휴무시작일자',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column10',value:'휴무종료일자',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column9',value:'비고',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'staffNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{ref:'',removeBorderStyle:'false',chooseOption:'',width:'100',inputType:'select',id:'vacaRsnCd',allOption:'',blockSelect:'false',displayMode:'label',mandatory:'true',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_vacaRsn'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',displayFormat:'yyyy/MM/dd',inputType:'calendar',id:'vacaIntendStDt',blockSelect:'false',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',displayFormat:'yyyy/MM/dd',inputType:'calendar',id:'vacaIntendEndDt',blockSelect:'false',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'120',inputType:'text',id:'rmk',blockSelect:'false',displayMode:'label',maxByteLength:'60'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'txt_totalRow2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_vacation',id:'udc_btGrdBtn',rowAddUserAuth:'C',rowDelUserAuth:'D',rowAddFunction:'scwin.f_addRow',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',EngYn:'N'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_upt',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_upt_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})