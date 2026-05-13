/*amd /ui/ac/fi/stdinfomgnt/fi_100_11_01b.xml 63677 0beae4ccdef27da59550235a5c1b4ef4c83beecc518b99693dd9a9ae658de088 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptYr',name:'적용년도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatDeclarAcctDeptCd',name:'부가세관리부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatDeclarAcctDeptNm',name:'부가세관리부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vatDeclar',saveRemovedData:'false','ev:onbeforerowpositionchange':'scwin.ds_vatDeclar_onbeforerowpositionchange','ev:onrowpositionchange':'scwin.ds_vatDeclar_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'적용일자',id:'dt',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'부가세관리귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',name:'부가세신고귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxOfficeCd',name:'세무서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'사업부명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxOfficeNm',name:'세무서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarDeptYn',name:'부가세신고부서여부여',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizUnitTaxnAdmitNo',name:'사업자단위과세승인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subWkPlaceNo',name:'단위사업장적용번호종사업장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subWkPlaceNm',name:'상호명법인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcondNm',name:'업태명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'biztypeNm',name:'종목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'newZip',name:'신우편번호도로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'newAddr1',name:'신주소1도로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'newAddr2',name:'신주소2도로명',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.stdinfomgnt.RetrieveValueAddedTaxDeclarationDepartmentListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_vatDeclar","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_vatDeclar", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.stdinfomgnt.SaveValueAddedTaxDeclarationDepartmentCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_vatDeclar","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 부가세관리부서등록
 * 메뉴경로 : 회계/재무회계/기준정보/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/fi/stdinfomgnt/fi_100_11_01b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-10-29
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항 : 
 *    1. 그리드.setNoResultMessageVisible(false) 설정해줘야 그리드에 데이터없음 안보임
 *    2. ☏ onbeforerowpositionchange 이벤트에 $c.gus.cfValidate([tbl_save]) 처리 안됨
 *    ☞ 일단 scwin.f_ValidationSync() 만들어서 처리(scwin.setInit()에 ds_list.reform() 필수, 조회 시 이벤트 안태움)
 *    3. ☏ UDC 행추가, 취소가 나와야 하는데 안됨
 *    4. "hiddenVisible":true 되어 있는 항목 일단 false 처리[hiddenCol="false" => hiddenCol="false"]
 * 수정이력 :
 *    - 2025-10-29      배기원    최초작성
 */
//hidden 값
scwin.hid_seq = ""; //우편번호에 있는데 소스에서 처리안함
scwin.txtCoClsCd = ""; //회사구분코드(hidden, 회사팝업호출 시)

//로그인 정보
scwin.memJson;
scwin.vLoginCoCd; //소속자회사
scwin.vLoginCoClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd; //사용자소속구분코드
scwin.isSubCompany;
scwin.privAdmin;
scwin.initJson = {}; //초기세팅값(TOBE)
scwin.first = 0;

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson["coCd"]) ? "" : scwin.memJson["coCd"]; //소속자회사
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson["coClsCd"]) ? "" : scwin.memJson["coClsCd"]; //회계_회사구분('CO035' : 0:동부 EXPRESS)
  scwin.vUserHomeClsCd = $c.gus.cfIsNull($p, scwin.memJson["userHomeClsCd"]) ? "" : scwin.memJson["userHomeClsCd"]; //사용자소속구분코드
  scwin.isSubCompany = false;
  scwin.privAdmin = $c.gus.cfIsNull($p, scwin.memJson["privAdmin"]) ? "" : scwin.memJson["privAdmin"]; //ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님
  scwin.first = 0;

  /**
   * TODO : 임시로 회사코드 초기값 가지고 있기 위해 처리
   * 로드 시 마지막으로 처리되는 로직
   */
  const codeOptions = [{
    grpCd: "EQ055",
    compID: ""
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};

/**
 * $c.data.setCommonCode 함수의 콜백함수
 */
scwin.callBackCommonCode = function () {
  scwin.initJson = dma_search.getJSON();
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  ed_vatDeclarAcctDeptCd.hidVal = ""; //부가세관리부서(저장)
  ed_crn.hidVal = ""; //사업자번호(저장)
  ed_taxOfficeCd.hidVal = ""; //세무서코드(저장)

  $c.gus.cfDisableObjects($p, grp_save1); //부가세관리부서정보
  $c.gus.cfDisableObjects($p, grp_save2); //사업자정보
  $c.gus.cfDisableBtn($p, [btn_update, btn_save]);
  gr_vatDeclarAcctDept.setNoResultMessageVisible(false);
  ds_vatDeclar.reform();
  ds_vatDeclar.removeAll();
  totalRows.setValue("0");
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  scwin.f_FieldClear();
  scwin.f_setCompanyInfo();
  c_vatDeclarAcctDeptCd.focus();
  ed_adptYr.setValue($c.date.getServerDateTime($p, "yyyy"));
};

/**
 * 조회필드 CLEAR
 */
scwin.f_FieldClear = function () {
  ed_coCd.hidVal = ""; //회사코드(조회)    
  //데이터맵의 초기값으로 세팅 시(예: 회사코드값 세팅)
  //dma_search.setJSON(scwin.initJson);
  c_vatDeclarCrn.setValue("");
};

/**
 * 자회사 회계 시스템 추가에 따른 설정 
 */
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를 '동부 EXPRESS'로 Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
  // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
  if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  }
};

/**
 * 조회
 */
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [tbl_search]);
  if (!ret) {
    return false;
  }
  scwin.setInit();
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_vatDeclarAcctDept.setNoResultMessageVisible(true);
  let rowCnt = ds_vatDeclar.getRowCount();
  totalRows.setValue(rowCnt);
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    } else {
      //조회된 결과 정렬(asis:<param name=SortExpr 참조)
      ds_vatDeclar.sort("vatDeclarAcctDeptCd", 0);
      for (var i = 0; i < rowCnt; i++) {
        var stDt = $c.date.formatDate($p, ds_vatDeclar.getCellData(i, "stDt"), "date");
        var endDt = $c.date.formatDate($p, ds_vatDeclar.getCellData(i, "endDt"), "date");
        if (!$c.util.isEmpty($p, stDt)) {
          ds_vatDeclar.setCellData(i, "dt", stDt + "~" + endDt);
        }
      }
      ds_vatDeclar.reform();
      gr_vatDeclarAcctDept.setFocusedCell(0, 0);
      $c.gus.cfDisableBtn($p, [btn_save]);
    }
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 행추가
 */
scwin.f_Create = async function () {
  if (ds_vatDeclar.getInsertedIndex().length > 0) {
    let ret = await scwin.f_Validation();
    if (!ret) {
      return false;
    }
  }
  let row = ds_vatDeclar.insertRow();
  gr_vatDeclarAcctDept.setFocusedCell(row, 0, false);
  //disable 처리
  //$c.gus.cfEnableKeyData();
  $c.gus.cfDisableBtn($p, [btn_update, btn_create]);
  $c.gus.cfEnableObjects($p, grp_save1);
  $c.gus.cfDisableObjects($p, [ica_endDt]);
  $c.gus.cfEnableObjects($p, grp_save2);
  $c.gus.cfDisableObjects($p, [ed_vatDeclarAcctDeptNm, ed_busiNm, ed_taxOfficeNm, ed_bankAcntNo]);
  lc_useYn.setValue(1);
  lc_vatDeclarDeptYn.setValue(1);
  ica_endDt.setValue('99991231');
  ed_vatDeclarAcctDeptCd.focus();
};

/**
 * 취소
 */
scwin.f_Cancel = function (e) {
  $c.data.undoRow($p, ds_vatDeclar, "N");
  $c.gus.cfDisableObjects($p, grp_save1); //부가세관리부서정보
  $c.gus.cfDisableObjects($p, grp_save2); //사업자정보
  $c.gus.cfDisableBtn($p, [btn_save]);
};

/**
 * 수정버튼
 */
scwin.f_Update = function (e) {
  // disable 처리
  $c.gus.cfDisableBtn($p, [btn_update]);
  // $c.gus.cfDisableObjects([ed_vatDeclarAcctDeptNm, ed_busiNm, ed_taxOfficeNm, ed_bankAcntNo, ed_crn, btn_create]);
  //부가세신고여부, 사업자단위과세승인번호, 세무서코드, 세무서코드버튼, 우편번호버튼, 우편번호new버튼
  $c.gus.cfEnableObjects($p, [lc_vatDeclarDeptYn, ed_bizUnitTaxnAdmitNo, ed_taxOfficeCd, btn_taxOfficeCd, btn_zip, btn_busiZip]);
  $c.gus.cfEnableObjects($p, [grp_save2]);
  $c.gus.cfDisableObjects($p, [ed_bankAcntNo, ed_taxOfficeNm]);
};

/**
 * 저장 시 입력 Validation
 */
scwin.f_Validation = async function () {
  // 기본필수체크
  let ret = await $c.gus.cfValidate($p, [ed_vatDeclarAcctDeptCd, ed_taxOfficeCd, ed_crn, ed_busiNm
  /*, ed_bankAcntNo
  , ed_telNo*/]);
  if (!ret) {
    return false;
  }
  ed_subWkPlaceNo.setMandatory(false);
  ed_subWkPlaceNm.setMandatory(false);
  ed_bizcondNm.setMandatory(false);
  ed_biztypeNm.setMandatory(false);
  // 회사코드가 000이면 사업장번호, 사업장명, 업태, 종목, 주소 or 신주소 필수
  if (ed_coCd.getValue() == "000") {
    ed_subWkPlaceNo.setMandatory(true);
    ed_subWkPlaceNm.setMandatory(true);
    ed_bizcondNm.setMandatory(true);
    ed_biztypeNm.setMandatory(true);
    ret = await $c.gus.cfValidate($p, [ed_subWkPlaceNo, ed_subWkPlaceNm, ed_bizcondNm, ed_biztypeNm]);
    if (!ret) {
      return false;
    }
    if ($c.gus.cfIsNull($p, ed_zip.getValue()) && $c.gus.cfIsNull($p, ed_newZip.getValue())) {
      await $c.gus.cfAlertMsg($p, "주소나 신주소는 필수 입력 항목입니다.");
      return false;
    }
    if (!$c.gus.cfIsNull($p, ed_zip.getValue()) || !$c.gus.cfIsNull($p, ed_newZip.getValue())) {
      if ($c.gus.cfIsNull($p, ed_addr2.getValue()) && $c.gus.cfIsNull($p, ed_newAddr2.getValue())) {
        await $c.gus.cfAlertMsg($p, "나머지주소를 입력하세요.");
        return false;
      }
    }
  }

  // 사업장번호가 0000이면 사업자단위과세승인번호 필수
  if (ed_subWkPlaceNo.getValue() == "0000") {
    ret = await $c.gus.cfValidate($p, [ed_bizUnitTaxnAdmitNo]);
    if (!ret) {
      return false;
    }
  }
  return true;
};

/**
 * scwin.f_ValidationSync 사용하기 위한 함수
 */
scwin.myCfValidate = function (oElement) {
  let obj = $c.gus.object($p, oElement);
  if (obj.length != null) {
    for (var i = 0; i < obj.length; i++) {
      let id = obj[i];
      if ($c.gus.cfIsNull($p, id.getValue())) {
        $c.win.alert($p, id.options.title + "은(는) 필수 입력 항목입니다.");
        id.focus();
        return false;
      }
    }
  }
  return true;
};

/**
 * onbeforerowpositionchange 사용을 위한 validation 체크
 */
scwin.f_ValidationSync = function () {
  let ret;
  //필수값 임의로 체크(부가세관리부서, 부가세신고부서여부, 적용일자, 사업자번호, 사용여부)    
  ret = scwin.myCfValidate([ed_vatDeclarAcctDeptCd, lc_vatDeclarDeptYn, ed_taxOfficeCd, ed_crn, ed_busiNm]);
  if (!ret) {
    return false;
  }
  ed_subWkPlaceNo.setMandatory(false);
  ed_subWkPlaceNm.setMandatory(false);
  ed_bizcondNm.setMandatory(false);
  ed_biztypeNm.setMandatory(false);
  // 회사코드가 000이면 사업장번호, 사업장명, 업태, 종목, 주소 or 신주소 필수
  if (ed_coCd.getValue() == "000") {
    ed_subWkPlaceNo.setMandatory(true);
    ed_subWkPlaceNm.setMandatory(true);
    ed_bizcondNm.setMandatory(true);
    ed_biztypeNm.setMandatory(true);
    ret = scwin.myCfValidate([ed_subWkPlaceNo, ed_subWkPlaceNm, ed_bizcondNm, ed_biztypeNm]);
    if (!ret) {
      return false;
    }
    if ($c.gus.cfIsNull($p, ed_zip.getValue()) && $c.gus.cfIsNull($p, ed_newZip.getValue())) {
      $c.win.alert($p, "주소나 신주소는 필수 입력 항목입니다.");
      return false;
    }
    if (!$c.gus.cfIsNull($p, ed_zip.getValue()) || !$c.gus.cfIsNull($p, ed_newZip.getValue())) {
      if ($c.gus.cfIsNull($p, ed_addr2.getValue()) && $c.gus.cfIsNull($p, ed_newAddr2.getValue())) {
        $c.win.alert($p, "나머지주소를 입력하세요.");
        return false;
      }
    }
  }

  // 사업장번호가 0000이면 사업자단위과세승인번호 필수
  if (ed_subWkPlaceNo.getValue() == "0000") {
    if ($c.gus.cfIsNull($p, ed_bizUnitTaxnAdmitNo.getValue())) {
      $c.win.alert($p, "사업자단위과세승인번호은(는) 필수 입력 항목입니다.");
      ed_bizUnitTaxnAdmitNo.focus();
      return false;
    }
  }
  return true;
};

/**
 * 저장버튼
 */
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다.
  // if (ds_vatDeclar.IsUpdated == false) {
  if (ds_vatDeclar.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이타"]);
    return;
  }

  //입력 Validation
  if (!(await scwin.f_Validation())) {
    return;
  }
  let ret = await $c.gus.cfValidate($p, [gr_vatDeclarAcctDept]);
  if (!ret) {
    return false;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    sbm_save.userData1 = "noError";
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    ds_vatDeclar.reform();
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 팝업호출
 */
scwin.f_openPopUp = function (flag, check) {
  //asis 소스
  // var rtnList = new Array();
  // switch (flag) {

  //     case "1":
  //         // 부가세관리부서조회
  //         var param = ",,,,," + ed_adptYr.getValue();
  //         if (scwin.isSubCompany)// 자회사 회계 시스템
  //         {
  //             param = ",,," + ed_coCd.getValue() + "," + txtCoClsCd.value + "," + ed_adptYr.getValue();
  //         }

  //         rtnList = cfCommonPopUp('retrieveVatDeclarAcctDeptCd', c_vatDeclarAcctDeptCd.text.trim(), c_vatDeclarAcctDeptNm.value, check, null, null, null, null, param, null, null, null, null);
  //         scwin.f_resultPopEd(c_vatDeclarAcctDeptCd, c_vatDeclarAcctDeptNm, rtnList);
  //         if (rtnList != null) {
  //             if (rtnList[0] == "N/A") {
  //                 return;
  //             }
  //             c_vatDeclarAcctDeptCd.text = rtnList[2]; //부가세부서코드
  //             c_vatDeclarAcctDeptNm.value = rtnList[3]; //부가세부서명
  //             c_vatDeclarCrn.value = rtnList[5]; //부가세사업자번호
  //             c_vatDeclarAcctDeptCd.hidVal = rtnList[2]; //히든값
  //         } else {
  //             c_vatDeclarAcctDeptCd.text = "";
  //             c_vatDeclarAcctDeptNm.value = "";
  //             c_vatDeclarCrn.value = "";
  //             c_vatDeclarAcctDeptCd.hidVal = "";
  //         }
  //         break;

  //     case "2":
  //         // 부서조회
  //         var param = ",,,0,";
  //         if (scwin.isSubCompany)// 자회사 회계 시스템
  //             param = "," + ed_coCd.getValue() + "," + txtCoClsCd.value + ",0";

  //         rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6', ed_vatDeclarAcctDeptCd.getValue().trim(), ed_vatDeclarAcctDeptNm.value, check, null, null, null, null, param, null, null, null, null);
  //         scwin.f_resultPopEd(ed_vatDeclarAcctDeptCd, ed_vatDeclarAcctDeptNm, rtnList);
  //         break;

  //     case "3":
  //         // 사업자번호
  //         var selectID = 'retrieveCrnInfo';
  //         var param = "";

  //         if (scwin.isSubCompany)// 자회사 회계 시스템
  //         {
  //             selectID = 'retrieveCrnClntInfo';
  //             param = ',' + ed_coCd.getValue();
  //         }
  //         rtnList = cfCommonPopUp(selectID, ed_crn.getValue().trim(), ed_busiNm.value.trim(), check, null, null, null, null, param, null, null, null, null);
  //         scwin.f_resultPopEd(ed_crn, ed_busiNm, rtnList);
  //         break;

  //     case '4':
  //         // 세무서코드조회
  //         rtnList = cfCommonPopUp('retrieveTaxInfo', ed_taxOfficeCd.getValue().trim(), ed_taxOfficeNm.value.trim(), check, null, null, null, null, "FI040", null, null, null, null);
  //         if (rtnList != null) {
  //             if (rtnList[0] == "N/A") {
  //                 return;
  //             }
  //             ed_taxOfficeCd.setValue = rtnList[0]; // 코드
  //             ed_taxOfficeNm.value = rtnList[1]; // 명
  //             ed_bankAcntNo.value = rtnList[2]; // 계좌번호
  //             ed_taxOfficeCd.hidVal = rtnList[0]; // 히든값
  //         } else {
  //             ed_taxOfficeCd.setValue = "";
  //             ed_taxOfficeNm.value = "";
  //             ed_bankAcntNo.value = "";
  //             ed_taxOfficeCd.hidVal = "";
  //         }
  //         break;

  //     default:
  //         break;
  // }

  //tobe 수정
  switch (flag) {
    case "1":
      // 부가세관리부서조회
      //일단 주석처리...팝업에 코드값이 안넘어가져서 수정
      // var param = ",,,,," + ed_adptYr.getValue();
      var param = "," + c_vatDeclarAcctDeptCd.getValue() + ",,,," + ed_adptYr.getValue();
      // 자회사 회계 시스템
      if (scwin.isSubCompany) {
        param = ",,," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + "," + ed_adptYr.getValue();
      }
      udc_c_vatDeclarAcctDeptCd.cfCommonPopUp(scwin.udc_c_vatDeclarAcctDeptCd_callBackFunc, c_vatDeclarAcctDeptCd.getValue(), c_vatDeclarAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, null, null, null);
      break;
    case "2":
      // 부서조회
      var param = ",,,0,";
      // 자회사 회계 시스템
      if (scwin.isSubCompany) {
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      }
      udc_vatDeclarAcctDeptCd.cfCommonPopUp(scwin.udc_vatDeclarAcctDeptCd_callBackFunc, ed_vatDeclarAcctDeptCd.getValue(), ed_vatDeclarAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, null, null, null);
      break;
    case "3":
      // 사업자번호
      var selectID = 'retrieveCrnInfo';
      var param = "";

      // 자회사 회계 시스템
      if (scwin.isSubCompany) {
        selectID = 'retrieveCrnClntInfo';
        param = ',' + ed_coCd.getValue();
      }
      udc_crn.setSelectId(selectID);
      udc_crn.cfCommonPopUp(scwin.udc_crn_callBackFunc, ed_crn.getValue(), ed_busiNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, null, null, null);
      break;
    case '4':
      // 세무서코드조회
      udc_taxOfficeCd.cfCommonPopUp(scwin.udc_taxOfficeCd_callBackFunc, ed_taxOfficeCd.getValue(), ed_taxOfficeNm.getValue(), check, null, null, null, null, "FI040", null, null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};

/**
 * 부가세관리부서 팝업 callBack
 */
scwin.udc_c_vatDeclarAcctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    c_vatDeclarAcctDeptCd.setValue(ret[2]); // 부가세관리부서코드
    c_vatDeclarAcctDeptNm.setValue(ret[3]); // 부가세관리부서명
    c_vatDeclarCrn.setValue(ret[5]); // 부가세사업자번호
    c_vatDeclarAcctDeptCd.hidVal = ret[2]; // 히든값
  } else {
    c_vatDeclarAcctDeptCd.setValue(""); // 부가세관리부서코드
    c_vatDeclarAcctDeptNm.setValue(""); // 부가세관리부서명
    c_vatDeclarCrn.setValue(""); // 부가세사업자번호
    c_vatDeclarAcctDeptCd.hidVal = ""; // 히든값
  }
};

/**
 * 부서 팝업 callBack
 */
scwin.udc_vatDeclarAcctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_vatDeclarAcctDeptCd.setValue(ret[0]); // 부가세관리부서코드
    ed_vatDeclarAcctDeptNm.setValue(ret[1]); // 부가세관리부서명
    ed_vatDeclarAcctDeptCd.hidVal = ret[0]; // 히든값
  } else {
    ed_vatDeclarAcctDeptCd.setValue(""); // 부가세관리부서코드
    ed_vatDeclarAcctDeptNm.setValue(""); // 부가세관리부서명
    ed_vatDeclarAcctDeptCd.hidVal = ""; // 히든값
  }
};

/**
 * 사업자번호 팝업 callBack
 */
scwin.udc_crn_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_crn.setValue(ret[0]); // 사업자번호
    ed_busiNm.setValue(ret[1]); // 사업자명
    ed_crn.hidVal = ret[0]; // 히든값
  } else {
    ed_crn.setValue(""); // 사업자번호
    ed_busiNm.setValue(""); // 사업자명
    ed_crn.hidVal = ""; // 히든값
  }
};

/**
 * 세무서코드 팝업 callBack
 */
scwin.udc_taxOfficeCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_taxOfficeCd.setValue(ret[0]); // 세무서코드
    ed_taxOfficeNm.setValue(ret[1]); // 세무서명
    ed_bankAcntNo.setValue(ret[2]); // 계좌번호
    ed_taxOfficeCd.hidVal = ret[0]; // 히든값
  } else {
    ed_taxOfficeCd.setValue(""); // 세무서코드
    ed_taxOfficeNm.setValue(""); // 세무서명
    ed_bankAcntNo.setValue(""); // 계좌번호
    ed_taxOfficeCd.hidVal = ""; // 히든값
  }
};

/**
 * 팝업호출
 * tobe에서 사용안함(UDC udc_callBackFunc 사용)
 */
// scwin.f_checkPopEd = function (strCd, strNm, flag) {

//     if (strCd.text.trim() == strCd.hidVal)
//         return;

//     strNm.value = "";
//     strCd.hidVal = "";
//     if (strCd.text.trim() != "") scwin.f_openPopUp(flag, 'T');

// };

/**
 * 팝업결과
 * tobe에서 사용안함(UDC udc_callBackFunc 사용)
 */
// scwin.f_resultPopEd = function (strCd, strNm, rtnList) {

//     if (rtnList != null) {
//         if (rtnList[0] == "N/A") {
//             return;
//         }
//         strCd.Text = rtnList[0]; // 코드
//         strNm.value = rtnList[1]; // 명
//         strCd.hidVal = rtnList[0]; // 히든값
//     } else {
//         strCd.Text = "";
//         strNm.value = "";
//         strCd.hidVal = "";
//     }

// };

// scwin.f_openPopUp2 = function (check, flag) {
//     var rtnList = new Array();
//     var popupResult = window.showModalDialog("/cm/zz/newzipcodePopup.jsp", "",
//         "dialogHeight:400px;dialogWidth:530px;center:yes;scroll:no;status:no;help:no");

//     // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
//     if (popupResult != null) {
//         if (rtnList[0] == "N/A") return;

//         if (flag == "1") {
//             ed_zip.setValue = popupResult.zip;
//             ed_addr1.value = popupResult.addr1;
//             ed_addr2.focus();
//         } else {
//             ed_newZip.setValue = popupResult.zip;
//             ed_newAddr1.value = popupResult.addr1;
//             ed_newAddr2.focus();
//         }
//     }
//     // 입력값이 없는경우 삭제
//     else {
//         if (flag == "1") {
//             ed_zip.setValue = "";
//             ed_addr1.value = "";
//         } else {
//             ed_newZip.setValue = "";
//             ed_newAddr1.value = "";
//         }
//     }
// };

/**
 * 우편번호 팝업
 */
//scwin.f_openPopUp2 = function (check, flag) {
scwin.f_openPopUp2 = function (e) {
  let zipId = this.getID();
  let zip = "";
  if (zipId.indexOf("btn_zip") > 0) {
    zip = ed_zip.getValue();
    ed_zip.setValue("");
    ed_addr1.setValue("");
  } else {
    zip = ed_newZip.getValue();
    ed_newZip.setValue("");
    ed_newAddr1.setValue("");
  }
  var data = {
    zip: zip,
    callbackFn: zipId.indexOf("btn_zip") > 0 ? scwin.btn_zip_callBackFunc : scwin.btn_newZip_callBackFunc
  };
  var opts = {
    id: "pupup",
    popupName: "우편번호 검색",
    modal: true,
    type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    ,
    title: "우편번호 검색",
    width: 500,
    height: 550
  };
  $c.win.openPopup($p, "/ui/cm/zz/newzipcodePopup.xml", opts, data);
};

/**
 * 우편번호 callBack함수
 */
scwin.btn_zip_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_zip.setValue(ret.zip);
    ed_addr1.setValue(ret.addr1);
    ed_addr2.focus();
  } else {
    ed_zip.setValue("");
    ed_addr1.setValue("");
    ed_zip.focus();
  }
};

/**
 * 우편번호new callBack함수
 */
scwin.btn_newZip_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_newZip.setValue(ret.zip);
    ed_newAddr1.setValue(ret.addr1);
    ed_newAddr2.focus();
  } else {
    ed_newZip.setValue("");
    ed_newAddr1.setValue("");
    ed_newAddr2.focus();
  }
};

/**
 * 엑셀파일 다운로드
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
// scwin.f_Excel = function() {
//     if ($c.win.confirm("Excel로 다운로드 하시겠습니까?")) {
//         $c.data.downloadGridViewExcel(objGridName, "부가세관리부서조회", "부가세관리부서조회.xls", 2 + 8 + 16);
//     }
// };

// scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
//     var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
//         , ed_coCd.text, ed_coNm.value
//         , pWinCloseTF, null, null, null, null
//         , null, null, null, null, null);
//     // SET
//     if (rtnList != null) {
//         if (rtnList[0] == "N/A") return;
//         if (ed_coCd.hidVal != rtnList[0]) // 회사코드를 다르게 선택한 경우
//             scwin.f_setInitObj();
//         ed_coCd.setValue = rtnList[0]; // 코드
//         ed_coNm.value = rtnList[5]; // 회사명
//         ed_coCd.hidVal = rtnList[0]; // 히든값
//         scwin.txtCoClsCd = rtnList[1]; // 회사구분
//     } else {
//         ed_coCd.setValue = "";
//         ed_coNm.value = "";
//         ed_coCd.hidVal = "";
//         scwin.txtCoClsCd = "";
//     }

//     if (scwin.txtCoClsCd > 'scwin.ACConstants.CO_CLS_CD_DONGBU') { // 자회사 회계 시스템
//         scwin.isSubCompany = true;
//     } else {
//         scwin.isSubCompany = false;
//     }
// };

/**
 * 회사코드 팝업호출(UDC)
 */
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_comCode.cfCommonPopUp(scwin.udc_comCode_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, null);
};

/**
 * 회사코드 팝업 callBack
 */
scwin.udc_comCode_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    // 회사코드를 다르게 선택한 경우
    if (scwin.hid_coCd != ret[0]) {
      scwin.f_setInitObj();
    }
    ed_coCd.setValue(ret[0]); // 코드
    ed_coNm.setValue(ret[5]); // 회사명
    ed_coCd.hidVal = ret[0]; // 히든값
    scwin.txtCoClsCd = ret[1]; // 회사구분
  } else {
    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명
    ed_coCd.hidVal = ""; // 히든값
    scwin.txtCoClsCd = ""; // 회사구분
  }

  //TODO : 처음 로딩 시 한번만 처리(웹스퀘어 UDC 싱크....)
  if (scwin.first == 0) {
    // 자회사 회계 시스템
    if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
      scwin.isSubCompany = true;
    } else {
      scwin.isSubCompany = false;
    }
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
  scwin.first++;
};
scwin.f_setInitObj = function () {
  $c.gus.cfInitObjects($p, [c_vatDeclarAcctDeptCd, c_vatDeclarAcctDeptNm, c_vatDeclarCrn]); // 조회조건 - 부가세 신고부서
  if (ds_vatDeclar.IsUpdated)
    //
    {
      $c.gus.cfInitObjects($p, [ed_vatDeclarAcctDeptCd, ed_vatDeclarAcctDeptNm]); // Grid- 부가세 신고부서
      $c.gus.cfInitObjects($p, [ed_crn, ed_busiNm]); // Grid- 사업자번호
    }
};

/**
 * 그리드 높이 늘리기
 * TOBE 사용안함(UDC +-버튼사용, udc_topGrdBtn)
 */
// scwin.f_grdHeiht = function (objGrd, size) {
//     var objGrd = eval(objGrd);
//     var strHeight = objGrd.style.height;
//     var intHeight = parseInt(strHeight.replace("px", ""));

//     intHeight = intHeight + size;

//     if (intHeight > 0) {
//         objGrd.style.height = intHeight + "px";
//     }
// };

/**
 * 그리드컬럼 값 보여주기
 */
scwin.decodeYnExp = function (data) {
  return $c.gus.decode($p, data, "1", "Y", "0", "N", "");
};

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
 * 회사코드(조회영역) 팝업 호출
 */
scwin.udc_comCode_onclickEvent = function (e) {
  if (ed_coCd.hidVal != ed_coCd.getValue()) {
    ed_coNm.setValue("");
  }
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_comCode_onviewchangeCodeEvent = function (info) {
  ed_coNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_coCd.getValue())) {
    scwin.f_PopUpCompanyInfo('T');
  }
};

/**
 * 부가세관리부서(조회영역) 팝업 호출
 */
scwin.udc_c_vatDeclarAcctDeptCd_onclickEvent = function (e) {
  if (c_vatDeclarAcctDeptCd.hidVal != c_vatDeclarAcctDeptCd.getValue()) {
    c_vatDeclarAcctDeptNm.setValue("");
    c_vatDeclarCrn.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, c_vatDeclarAcctDeptCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openPopUp("1", close);
};
scwin.udc_c_vatDeclarAcctDeptCd_onviewchangeCodeEvent = function (info) {
  c_vatDeclarAcctDeptNm.setValue("");
  c_vatDeclarCrn.setValue("");
  if (!$c.gus.cfIsNull($p, c_vatDeclarAcctDeptCd.getValue())) {
    scwin.f_openPopUp("1", "T");
  }
};

/**
 * 부가세관리부서(저장영역) 팝업 호출
 */
scwin.udc_vatDeclarAcctDeptCd_onclickEvent = function (e) {
  if (ed_vatDeclarAcctDeptCd.hidVal != ed_vatDeclarAcctDeptCd.getValue()) {
    ed_vatDeclarAcctDeptNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_vatDeclarAcctDeptCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openPopUp("2", close);
};
scwin.udc_vatDeclarAcctDeptCd_onviewchangeCodeEvent = function (info) {
  ed_vatDeclarAcctDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_vatDeclarAcctDeptCd.getValue())) {
    scwin.f_openPopUp("2", "T");
  }
};

/**
 * 사업자번호(저장영역) 팝업 호출
 */
scwin.udc_crn_onclickEvent = function (e) {
  if (ed_crn.hidVal != ed_crn.getValue()) {
    ed_busiNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_crn.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openPopUp("3", close);
};
scwin.udc_crn_onviewchangeCodeEvent = function (info) {
  ed_busiNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_crn.getValue())) {
    scwin.f_openPopUp("3", "T");
  }
};

/**
 * 세무서코드(저장영역) 팝업 호출
 */
scwin.udc_taxOfficeCd_onclickEvent = function (e) {
  if (ed_taxOfficeCd.hidVal != ed_taxOfficeCd.getValue()) {
    ed_taxOfficeNm.setValue("");
    ed_bankAcntNo.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_taxOfficeCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openPopUp("4", close);
};
scwin.udc_taxOfficeCd_onviewchangeCodeEvent = function (info) {
  ed_taxOfficeNm.setValue("");
  ed_bankAcntNo.setValue("");
  if (!$c.gus.cfIsNull($p, ed_taxOfficeCd.getValue())) {
    scwin.f_openPopUp("4", "T");
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * DataList의 rowPosition이 변경된 경우 발생
 */
scwin.ds_vatDeclar_onrowpositionchange = function (info) {
  if (ds_vatDeclar.getRowStatus(info.newRowIndex) == "C") {
    $c.gus.cfEnableKeyData($p);
    ed_vatDeclarAcctDeptCd.hidVal = ""; //부가세관리부서(저장)
    ed_crn.hidVal = ""; //사업자번호(저장)
    ed_taxOfficeCd.hidVal = ""; //세무서코드(저장)
  } else {
    //기타 데이타 -> 초기화, 수정, 삭제버튼 활성화
    $c.gus.cfDisableObjects($p, grp_save1); //부가세관리부서정보
    $c.gus.cfDisableObjects($p, grp_save2); //사업자정보
    $c.gus.cfDisableBtn($p, [btn_save]);
    ed_vatDeclarAcctDeptCd.hidVal = ds_vatDeclar.getCellData(info.newRowIndex, "vatDeclarAcctDeptCd");
    ed_crn.hidVal = ds_vatDeclar.getCellData(info.newRowIndex, "crn");
    ed_taxOfficeCd.hidVal = ds_vatDeclar.getCellData(info.newRowIndex, "taxOfficeCd");
  }
};

/**
* DataList의 rowPosition이 변경되기 직전에 발생하며 rowPosition의 변경 적용 여부를 결정
* asis : 그리드 로우를 변경하려고 할 경우 - 필수항목 체크
* tobe : 현재 $c.gus.cfValidate 사용 시 async라 이벤트에 async주면 return false안먹힘
*/
scwin.ds_vatDeclar_onbeforerowpositionchange = function (info) {
  if (ds_vatDeclar.getRowStatus(info.oldRowIndex) == "C" || ds_vatDeclar.getRowStatus(info.oldRowIndex) == "U") {
    return scwin.f_ValidationSync();
  }
};
scwin.ica_stDt_onblur = function (e) {
  if (!$c.gus.cfIsNull($p, ica_stDt.getValue())) {
    ed_dt.setValue(ica_stDt.getValue() + "~" + ica_endDt.getValue());
  } else {
    ed_dt.setValue(ica_endDt.getValue() + "~");
  }
};
scwin.ica_endDt_onchange = function () {
  if (!$c.gus.cfIsNull($p, ica_endDt.getValue())) {
    ed_dt.setValue(ica_stDt.getValue() + "~" + ica_endDt.getValue());
  } else {
    ed_dt.setValue(ica_endDt.getValue() + "~");
  }
};

/**
 * 그리드 적용일자 보이기
 * TODO : 가끔 20260101~99999999 로 들어오는 값 때문어
 */
scwin.decodeDisplay = function (data) {
  let val = data;
  if (data.length == 17) {
    const [start, end] = data.split("~");
    let st = $c.date.formatDate($p, start, "date");
    let et = $c.date.formatDate($p, end, "date");
    val = st + "~" + et;
  }
  return val;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용년도',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w50',id:'ed_adptYr',style:'',title:'적용년도',ref:'data:dma_search.adptYr',editFormat:'####'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_comCode',btnId:'btn_company',codeId:'ed_coCd',nameId:'ed_coNm',popupID:'popupCocd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo',refDataCollection:'dma_search',code:'coCd',name:'coNm',maxlengthCode:'3',objTypeCode:'data',mandatoryCode:'true',allowCharCode:'0-9',validExpCode:'회사코드',editTypeCode:'select',maxlengthName:'30',objTypeName:'key','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCode_onviewchangeCodeEvent',style:'',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세관리부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_c_vatDeclarAcctDeptCd',btnId:'btn_c_vatDeclarAcctDeptCd',codeId:'c_vatDeclarAcctDeptCd',nameId:'c_vatDeclarAcctDeptNm',popupID:'popup_c_vatDeclarAcctDeptCd',validTitle:'부가세관리부서',selectID:'retrieveVatDeclarAcctDeptCd',refDataCollection:'dma_search',code:'vatDeclarAcctDeptCd',name:'vatDeclarAcctDeptNm',maxlengthCode:'5',objTypeCode:'data',allowCharCode:'0-9',editTypeCode:'select',validExpCode:'부가세관리부서',maxlengthName:'30',objTypeName:'key','ev:onclickEvent':'scwin.udc_c_vatDeclarAcctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_c_vatDeclarAcctDeptCd_onviewchangeCodeEvent',style:'',skipOnBlurCodeValueEmpty:'N',codeWidth:'50'}},{T:1,N:'xf:input',A:{ref:'',editFormat:'#############',style:'',id:'c_vatDeclarCrn',title:'부가세사업자번호',class:'form-control w80'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'c_useYn',ref:'data:dma_search.useYn',style:'',submenuSize:'auto',title:'사용여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 850px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"부가세관리부서조회.xlsx", "sheetName":"부가세관리부서조회", "type":"1", "hiddenVisible":false}',templateYn:'N',gridUpYn:'N',gridID:'gr_vatDeclarAcctDept',id:'udc_excel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_vatDeclar',id:'gr_vatDeclarAcctDept',style:'',rowStatusVisible:'true',readOnly:'true',rowStatusWidth:'20',focusMode:'row',visibleRowNumFix:'true',sortable:'true',visibleRowNum:'17',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column2',value:'적용일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column1',value:'부가세관리귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column17',value:'부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column13',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'세무서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column5',value:'세무서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column7',value:'계좌번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column11',value:'전화번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column9',value:'사용여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'시작일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column22',value:'종료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'사업장번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column26',value:'사업장명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'업태명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'종목명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'dt',value:'',displayMode:'label',displayFormatter:'scwin.decodeDisplay'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vatDeclarAcctDeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'vatDeclarAcctDeptNm',value:'',displayMode:'label',class:'',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'crn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'taxOfficeCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'taxOfficeNm',value:'',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bankAcntNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'telNo',value:'',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'useYn',value:'',displayMode:'label',displayFormatter:'scwin.decodeYnExp',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stDt',value:'',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'endDt',value:'',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'subWkPlaceNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'subWkPlaceNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bizcondNm',value:'',displayMode:'label',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'biztypeNm',value:'',displayMode:'label',hidden:'true',hiddenCol:'false'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn',gridID:'gr_vatDeclarAcctDept',btnCancelYn:'Y',btnRowDelYn:'N',btnDelYn:'N',btnRowAddYn:'N',cancelFunction:'scwin.f_Cancel'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'grp_save1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부가세관리부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_vatDeclarAcctDeptCd',btnId:'btn_vatDeclarAcctDeptCd',codeId:'ed_vatDeclarAcctDeptCd',nameId:'ed_vatDeclarAcctDeptNm',popupID:'popup_vatDeclarAcctDeptCd',validTitle:'부가세관리부서',selectID:'retrieveAcctDeptCdInfo6',refDataCollection:'ds_vatDeclar',code:'vatDeclarAcctDeptCd',name:'vatDeclarAcctDeptNm',mandatoryCode:'true',maxlengthCode:'5',objTypeCode:'data',validExpCode:'부가세관리부서코드',allowCharCode:'0-9',editTypeCode:'select',mandatoryName:'true',maxlengthName:'30',objTypeName:'key',validExpName:'부가세관리부서명','ev:onclickEvent':'scwin.udc_vatDeclarAcctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_vatDeclarAcctDeptCd_onviewchangeCodeEvent',style:'',codeWidth:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부가세신고부서여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_vatDeclarDeptYn',style:'',submenuSize:'auto',title:'부가세신고부서여부',ref:'data:ds_vatDeclar.vatDeclarDeptYn',emptyItem:'true',mandatory:'true',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_stDt',class:'form-control cal',calendarValueType:'yearMonthDate',ref:'data:ds_vatDeclar.stDt',title:'마감일자',objType:'data','ev:onblur':'scwin.ica_stDt_onblur',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'~',class:''}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_endDt',class:'form-control cal',calendarValueType:'yearMonthDate',ref:'data:ds_vatDeclar.endDt',disabled:'true',objType:'data',displayFormat:'yyyy/MM/dd','ev:onchange':'scwin.ica_endDt_onchange'}},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_dt',objType:'data',ref:'data:ds_vatDeclar.dt',style:'display:none',title:'적용일자'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업자번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_crn',btnId:'btn_crn',codeId:'ed_crn',nameId:'ed_busiNm',popupID:'popup_crn',validTitle:'사업자번호',selectID:'retrieveCrnInfo',refDataCollection:'ds_vatDeclar',code:'crn',name:'busiNm',mandatoryCode:'true',maxlengthCode:'13',objTypeCode:'data',validExpCode:'사업자번호',allowCharCode:'0-9',editTypeCode:'select',mandatoryName:'true',maxlengthName:'30',objTypeName:'key',validExpName:'사업자','ev:onclickEvent':'scwin.udc_crn_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_crn_onviewchangeCodeEvent',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자단위과세승인번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_bizUnitTaxnAdmitNo',style:'',title:'사업자단위과세승인번호',ref:'data:ds_vatDeclar.bizUnitTaxnAdmitNo',editFormat:'#######',mandatory:'true',objType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'사업장정보 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'grp_save2',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:150.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업장번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{ref:'data:ds_vatDeclar.subWkPlaceNo',editFormat:'####',style:'',id:'ed_subWkPlaceNo',title:'사업장번호',class:'form-control w150',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업장명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{ref:'data:ds_vatDeclar.subWkPlaceNm',maxByteLength:'150',style:'',id:'ed_subWkPlaceNm',title:'사업장명',class:'form-control w300',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'업태',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_vatDeclar.bizcondNm',maxlength:'30',style:'',id:'ed_bizcondNm',title:'업태',class:'form-control w150',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'종목',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_vatDeclar.biztypeNm',maxlength:'30',style:'',id:'ed_biztypeNm',title:'종목',class:'form-control w150',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'우편번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_vatDeclar.zip',editFormat:'######',style:'',id:'ed_zip',placeholder:'',class:'form-control w100',objType:'data'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_openPopUp2',style:'',id:'btn_zip',type:'button',class:'btn ico sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'주소1',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{ref:'data:ds_vatDeclar.addr1',maxByteLength:'150',style:'',id:'ed_addr1',title:'주소1',class:'form-control ',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'주소2',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{ref:'data:ds_vatDeclar.addr2',maxByteLength:'150',style:'',id:'ed_addr2',title:'주소2',class:'form-control ',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'신우편번호(도로명)',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_vatDeclar.newZip',editFormat:'######',style:'',id:'ed_newZip',placeholder:'',title:'신우편번호(도로명)',class:'form-control w100',objType:'data'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_openPopUp2',style:'',id:'btn_busiZip',type:'button',class:'btn ico sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'신주소1(도로명)',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{ref:'data:ds_vatDeclar.newAddr1',maxByteLength:'150',style:'',id:'ed_newAddr1',title:'신주소1(도로명)',class:'form-control ',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'신주소2(도로명)',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{ref:'data:ds_vatDeclar.newAddr2',maxByteLength:'150',style:'',id:'ed_newAddr2',title:'신주소2(도로명)',class:'form-control ',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'세무서코드',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_taxOfficeCd',btnId:'btn_taxOfficeCd',codeId:'ed_taxOfficeCd',nameId:'ed_taxOfficeNm',popupID:'popuptaxOfficeCd',validTitle:'세무서코드',selectID:'retrieveTaxInfo',refDataCollection:'ds_vatDeclar',code:'taxOfficeCd',name:'taxOfficeNm',mandatoryCode:'true',maxlengthCode:'3',objTypeCode:'data',validExpCode:'세무서코드',allowCharCode:'0-9',editTypeCode:'select',mandatoryName:'true',objTypeName:'key',validExpName:'부가세관리부서명','ev:onclickEvent':'scwin.udc_taxOfficeCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_taxOfficeCd_onviewchangeCodeEvent',style:'',codeWidth:'50'}},{T:1,N:'xf:input',A:{ref:'data:ds_vatDeclar.bankAcntNo',style:'',readOnly:'true',id:'ed_bankAcntNo',title:'계좌번호',class:'form-control w80'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'전화번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{ref:'data:ds_vatDeclar.telNo',inputMode:'tel',style:'',id:'ed_telNo',title:'전화번호',class:'form-control w150',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사용여부',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{submenuSize:'auto',chooseOption:'',allOption:'',title:'사용여부',mandatory:'true',ref:'data:ds_vatDeclar.useYn',appearance:'minimal',disabledClass:'w2selectbox_disabled',emptyItem:'true',disabled:'false',style:'',id:'lc_useYn',class:'form-control w150',objType:'data',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Create',id:'btn_create',objType:'bCreate',style:'',type:'button',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Update',id:'btn_update',objType:'bUpdate',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Save',id:'btn_save',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]}]}]})