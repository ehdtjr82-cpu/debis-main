/*amd /ui/ja/ds/fs/bilg/ja_fs_204_02_04p.xml 30481 8cd328c0116a93dadf0ab4cdd5676eec069f6c23dca5d9500ced9aea33909478 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieveConds'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryLodeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCondDtFm',name:'시작일시',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCondDtTo',name:'종료일시',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryOdrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryDeleteDtFm',name:'시작일시',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryDeleteDtTo',name:'종료일시',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryClsCd',name:'매출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveRslts',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLodeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLodeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNo',name:'품번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upr',name:'금액_단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액_금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'금액_VAT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'금액_합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDst',name:'작업구간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'삭제정보_이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'삭제정보_일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainMainRsn',name:'삭제정보_사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsNm',name:'확정구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_calendar'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryCondDtFm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCondDtTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryDeleteDtFm',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryDeleteDtTo',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_co',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bilgLodept',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ja.ds.fs.bilg.bilgrsltsmgnt.JaRetrieveDeleteHistoryListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieveConds","key":"IN_DS1"},{"id":"ds_retrieveRslts","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieveRslts","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회 중','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/* 
설명 - 삭제이력조회 팝업
 */
// 회원정보를 json 데이터로 모두 받음
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin"); // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님
scwin.crn = $c.data.getParameter($p, "crn");
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자
scwin.strPreDate = $c.date.getServerDateTime($p, "yyyyMM") + "01"; // 해당 월 1일

// 소속 자회사
scwin.vLoginCoCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd");
// 회계_회사구분 ('CO035' : 0:동부 EXPRESS)
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd");
// 사용자소속구분코드
scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd");
scwin.isSubCompany = false;
scwin.quantityOfRows;
scwin.pageNumber = "1";
scwin.vCoCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd"); // 소속 자회사
// 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vCoClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd");
scwin.vQryConDtFm;
scwin.vQryConDtTo;
scwin.strBilgLodeptCd;
scwin.strBilgLodeptNm;
scwin.qryClsCd;
scwin.qryConKnd;
scwin.txtCoClsCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);

  /* 조회 조건 TEST START */
  scwin.strBilgLodeptCd = scwin.params.bilgLodeptCd;
  scwin.strBilgLodeptNm = scwin.params.bilgLodeptNm;
  scwin.vQryConDtFm = scwin.params.qryConDtFm;
  scwin.vQryConDtTo = scwin.params.qryConDtTo;
  scwin.qryClsCd = scwin.params.gubun; // - 매출/매입
  scwin.qryConKnd = scwin.params.coCd; //- 오더번호의 값/실적은 null (실제로는 회사코드를 넘기고 있음) 미사용

  btn_retrieve.focus();

  // 달력 버튼 포커스 방지
  setTimeout(function () {
    document.querySelectorAll('.w2inputCalendar_div_img button').forEach(function (btn) {
      btn.tabIndex = -1;
    });
  }, 0);

  /* 조회 조건 TEST(todo: 4b에서 보내는 파라미터 확인)
  
  let paramObj = {
      bilgLodeptCd:  "01449",
      qryConDtFm: "20240201",
      qryConDtTo: "20240228",
      gubun: "매출",
      coCd:  "N2502210001",
      bilgLodeptNm: ""
  };
  */
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  // udc_fromToCalendar UDC 에 있는 setInitDate 호출
  // udc_qryConDt.setInitDate(scwin.vQryConDtFm, scwin.vQryConDtTo);

  ed_qryConDtFm.setValue(scwin.vQryConDtFm);
  ed_qryConDtTo.setValue(scwin.vQryConDtTo);
  scwin.f_setCompanyInfo();
  ed_bilgLodeptCd.setValue(scwin.strBilgLodeptCd);
  txt_bilgLodeptNm.setValue(scwin.strBilgLodeptNm);
  if (scwin.qryClsCd == "매출") {
    dma_retrieveConds.set("qryClsCd", "매출");
  } else {
    dma_retrieveConds.set("qryClsCd", "매입");
  }

  // if (scwin.qryConKnd != "") {
  //     lc_qryConKnd.setValue("오더번호");

  //     udc_qryConDt.hide();
  //     ed_qryOdrNo.show("block");
  //     udc_qryDeleteDt.show("none");

  //     udc_qryConDt.setInitDate("", "");
  //     udc_qryDeleteDt.setInitDate("", "");

  //     ed_qryOdrNo.setValue(scwin.qryConKnd);
  // }
  // else {
  //     lc_qryConKnd.setValue("실적");

  //     udc_qryConDt.show();
  //     ed_qryOdrNo.show("none");
  //     udc_qryDeleteDt.show("none");
  // }
  // 실제로 확인해보니 04b 에서 넘기는 데이터가 오더번호가 아니라 회사코드라 사용이 불가하여 실적일자로 고정
  lc_qryConKnd.setValue("실적");
  udc_qryConDt.show();
  ed_qryOdrNo.show("none");
  udc_qryDeleteDt.show("none");
};

//-------------------------------------------------------------------------
// 회사 정보 세팅
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  $c.gus.cfDisableObjects($p, [ed_coCd, btn_co, txt_coNm]);
  scwin.f_PopUpCompanyInfo('T');
};
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  scwin.f_openCommonPopUp(2, ed_coCd.getValue(), txt_coNm.getValue(), pWinCloseTF, null);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = function (e) {
  if (ed_bilgLodeptCd.getValue() == "") {
    $c.win.alert($p, '부서는 필수입력 사항입니다.');
    return false;
  }
  if (lc_qryConKnd.getValue() == "오더번호") {
    if (ed_qryOdrNo.getValue() == "") {
      $c.win.alert($p, '오더번호는  필수입력 사항입니다.');
      ed_qryOdrNo.focus();
      return false;
    }
  } else if (lc_qryConKnd.getValue() == "실적") {
    if (ed_qryConDtFm.getValue() == "" || ed_qryConDtTo.getValue() == "") {
      $c.win.alert($p, '실적일자는  필수입력 사항입니다.');
      if (ed_qryConDtFm.getValue() == "") {
        ed_qryConDtFm.focus();
      } else {
        ed_qryConDtTo.focus();
      }
      return false;
    }
  } else if (lc_qryConKnd.getValue() == "삭제") {
    if (ed_qryDeleteDtFm.getValue() == "" || ed_qryDeleteDtTo.getValue() == "") {
      $c.win.alert($p, '삭제일자는  필수입력 사항입니다.');
      if (ed_qryDeleteDtFm.getValue() == "") {
        ed_qryDeleteDtFm.focus();
      } else {
        ed_qryDeleteDtTo.focus();
      }
      return false;
    }
  }
  debugger;
  dma_retrieveConds.set("coCd", ed_coCd.getValue()); // 회사코드

  dma_retrieveConds.set("qryLodeptCd", ed_bilgLodeptCd.getValue()); // 부서코드
  dma_retrieveConds.set("qryCondDtFm", ed_qryConDtFm.getValue()); // 시작일시
  dma_retrieveConds.set("qryCondDtTo", ed_qryConDtTo.getValue()); // 종료일시
  dma_retrieveConds.set("qryOdrNo", ed_qryOdrNo.getValue()); // 오더번호
  dma_retrieveConds.set("qryDeleteDtFm", ed_qryDeleteDtFm.getValue()); // 시작일시
  dma_retrieveConds.set("qryDeleteDtTo", ed_qryDeleteDtTo.getValue()); // 종료일시

  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  totalRows.setValue(ds_retrieveRslts.getRowCount());
  if (ds_retrieveRslts.getRowCount() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
};
//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// function name : f_openPopUp
// function desc : popup
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      //청구부서코드팝업		
      udc_bilgLodept.setSelectId("retrieveAcctDeptCdInfo");
      udc_bilgLodept.cfCommonPopUp(scwin.udc_bilgLodept_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      // 회사코드
      udc_co.setSelectId("retrieveDongbuGroupCompanyInfo");
      udc_co.cfCommonPopUp(scwin.udc_co_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null);
      break;
    case 3:
      // 부서 팝업 (f_openPopUp flag='3' 변환) - retrieveAcctDeptCdInfo10, qryYear 포함
      var qryYear = ed_qryConDtFm.getValue().trim().substring(0, 4);
      var param3 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      debugger;
      udc_bilgLodept.setSelectId("retrieveAcctDeptCdInfo10");
      udc_bilgLodept.cfCommonPopUp(scwin.udc_bilgLodept_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, param3, null, null, null, null, null, null, null, null, null, qryYear);
      break;
    case 4:
      // 부서 팝업 (f_deptPopUp 변환) - retrieveAcctDeptCdInfo6, strCurDate 포함
      var param4 = scwin.strCurDate;
      if (scwin.vCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
        // 자회사 회계 시스템
        param4 = param4 + "," + scwin.vCoCd + "," + scwin.vCoClsCd;
      }
      udc_bilgLodept.setSelectId("retrieveAcctDeptCdInfo6");
      udc_bilgLodept.cfCommonPopUp(scwin.udc_bilgLodept_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, param4);
      break;
    default:
      break;
  }
};

// 부서코드 팝업 callback
scwin.udc_bilgLodept_callBackFunc = function (rtnList) {
  txt_bilgLodeptNm.setValue("");
  if (rtnList != null && rtnList[0] != "N/A") {
    $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLodeptCd, txt_bilgLodeptNm); // 청구부서코드, 청구부서명
  }
};

// 회사코드 팝업 callback
scwin.udc_co_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_coCd.setValue(rtnList[0]); // 코드
    txt_coNm.setValue(rtnList[5]); // 회사명
    ed_coCd.hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분
  } else {
    ed_coCd.setValue(""); // 코드
    txt_coNm.setValue(""); // 회사명
    ed_coCd.hidVal = ""; // 히든값
    scwin.txtCoClsCd = ""; // 회사구분
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};

//-------------------------------------------------------------------------
// 회사코드 UDC 호출
//-------------------------------------------------------------------------
scwin.udc_co_onblurCodeEvent = function (e) {
  if (ed_coCd.getValue() === "") {
    txt_coNm.setValue("");
  } else {
    scwin.f_openCommonPopUp(2, ed_coCd.getValue(), txt_coNm.getValue(), "T");
  }
};
scwin.udc_co_onviewchangeNameEvent = function (info) {
  if (txt_coNm.getValue() === "") {
    ed_coCd.setValue("");
  } else {
    scwin.f_openCommonPopUp(2, ed_coCd.getValue(), txt_coNm.getValue(), "T");
  }
};
scwin.udc_co_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(2, ed_coCd.getValue(), txt_coNm.getValue(), "T");
};

//-------------------------------------------------------------------------
// 부서 UDC 호출
//-------------------------------------------------------------------------
scwin.udc_bilgLodept_onblurCodeEvent = function (e) {
  if (ed_bilgLodeptCd.getValue() == "") {
    txt_bilgLodeptNm.setValue("");
  } else {
    if (scwin.f_IsPopUp(ed_bilgLodeptCd, txt_bilgLodeptNm)) {
      scwin.f_openCommonPopUp(4, ed_bilgLodeptCd.getValue(), txt_bilgLodeptNm.getValue(), "T");
    }
  }
};
scwin.udc_bilgLodept_onviewchangeNameEvent = function (info) {
  if (txt_bilgLodeptNm.getValue() == "") {
    ed_bilgLodeptCd.setValue("");
  } else {
    scwin.f_openCommonPopUp(3, ed_bilgLodeptCd.getValue(), txt_bilgLodeptNm.getValue(), "T");
  }
};
scwin.udc_bilgLodept_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(4, ed_bilgLodeptCd.getValue(), txt_bilgLodeptNm.getValue(), "F");
};
scwin.f_IsPopUp = function (inObj, pairObj) {
  let inValue = $c.gus.cfGetValue($p, inObj);
  if ($c.gus.cfIsNull($p, inValue)) {
    if (pairObj) {
      $c.gus.cfSetValue($p, pairObj, "");
    }
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.f_runExcel = async function (grdObj) {
  let totCnt = gr_retrieveRslts.getRowCount();
  let sheetTitle = "삭제이력";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle + ".xls",
        sheetName: sheetTitle
      };
      $c.data.downloadGridViewExcel($p, gr_retrieveRslts, options);
    }
  } else {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 콤보박스 이벤트 처리
//-------------------------------------------------------------------------
scwin.lc_qryConKnd_onchange = function (info) {
  if (info.newValue == "오더번호") {
    udc_qryConDt.show("none");
    ed_qryOdrNo.show("block");
    udc_qryDeleteDt.show("none");
    udc_qryConDt.setInitDate("", "");
    udc_qryDeleteDt.setInitDate("", "");
  } else if (info.newValue == "실적") {
    udc_qryConDt.show("block");
    ed_qryOdrNo.show("none");
    udc_qryDeleteDt.show("none");
    udc_qryConDt.setInitDate(scwin.vQryConDtFm, scwin.vQryConDtTo);
    ed_qryOdrNo.setValue("");
    udc_qryDeleteDt.setInitDate("", "");
  } else if (info.newValue == "삭제") {
    udc_qryConDt.show("none");
    ed_qryOdrNo.show("none");
    udc_qryDeleteDt.show("block");
    udc_qryConDt.setInitDate("", "");
    ed_qryOdrNo.setValue("");
    udc_qryDeleteDt.setInitDate(scwin.vQryConDtFm, scwin.vQryConDtTo);
  }
};

// 대문자 입력
scwin.capitalMask = function (value) {
  return value.toUpperCase();
};

// "일자" display 포맷 적용
scwin.parseDate = function (value) {
  if (!value) return "";

  // 초(ss)가 포함된 입력값(예: 20240423193055)
  var dateObj = $p.parseDate(value, "yyyyMMddHHmmss");

  // 변환된 Date 객체에서 초를 제외하고 원하는 포맷으로 문자열 변환
  return $p.getFormattedDate(dateObj, "yyyy/MM/dd HH:mm");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_co',code:'code',name:'name',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',nameId:'txt_coNm','ev:onclickEvent':'scwin.udc_co_onclickEvent','ev:onblurCodeEvent':'scwin.udc_co_onblurCodeEvent',popupTitle:'회사조회,회사코드,법인명',popupGridHeadTitle:'회사코드,,,,,회사명,,,',refDataCollection:'ds_co',btnId:'btn_co',popupGridHiddenColumn:'2,3,4,5,7,8,9,10','ev:onviewchangeNameEvent':'scwin.udc_co_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9',maxlengthCode:'3'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_bilgLodept',codeId:'ed_bilgLodeptCd',nameId:'txt_bilgLodeptNm',selectID:'retrieveAcctDeptCdInfo6',code:'code',name:'name','ev:onblurCodeEvent':'scwin.udc_bilgLodept_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bilgLodept_onclickEvent',popupTitle:'귀속부서조회, 귀속부서코드, 귀속부서명',popupGridHeadTitle:'귀속코드, 부서명',refDataCollection:'ds_bilgLodept',btnId:'btn_bilgLodept',popupGridHiddenColumn:'3,4,5,6,7,8,9,10','ev:onviewchangeNameEvent':'scwin.udc_bilgLodept_onviewchangeNameEvent',maxlengthCode:'5',allowCharCode:'a-zA-Z0-9',validTitle:'부서',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'lc_qryConKnd',search:'start',style:'width: 140px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',displayMode:'label','ev:onchange':'scwin.lc_qryConKnd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'실적일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'실적'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'오더번호'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'삭제'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_qryConDt',refDataMap:'dma_calendar',refEdDt:'qryCondDtFm',refStDt:'qryCondDtTo',style:'',edFromId:'ed_qryConDtFm',edToId:'ed_qryConDtTo'}},{T:1,N:'xf:input',A:{class:'',id:'ed_qryOdrNo',placeholder:'',style:'width: 150px;',title:'오더번호',maxlength:'15',allowChar:'a-zA-Z0-9',applyFormat:'all',displayFormatter:'scwin.capitalMask'}},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ed_qryDeleteDtFm',edToId:'ed_qryDeleteDtTo',id:'udc_qryDeleteDt',refDataMap:'dma_calendar',refEdDt:'qryDeleteDtFm',refStDt:'qryDeleteDtTo',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'삭제이력 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_group',style:'',gridID:'gr_retrieveRslts',id:'udc_topGrd',gridUpYn:'N',grdDownOpts:'{"fileName" : "삭제이력.xlsx","sheetName": "삭제이력", "type" : "4+8+16"}',gridDownFn:'scwin.f_runExcel',gridDownUserAuth:'X',btnPlusYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrieveRslts',id:'gr_retrieveRslts',style:'',visibleRowNumFix:'false',readOnly:'true',focusMode:'cell'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'오더번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'부서',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'항목',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'청구거래처',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'품명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'품번',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'금액',width:'350',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column34',value:'작업구간',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'실적일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column52',value:'삭제정보',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'확정구분',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column22',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'외화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'VAT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'이름',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column50',value:'일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'사유',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',style:';background-color:#FFFFFF;',value:'',width:'100',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkLodeptCd',inputType:'text',style:'',value:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkLodeptNm',inputType:'text',style:'',value:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNo',inputType:'text',style:'',value:'',width:'100',textAlign:'left',sortable:'true',sortLabel:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upr',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtFcrc',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vatAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'totAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'transDst',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rsltsStdDt',value:'',displayMode:'label',textAlign:'left',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'empNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'modDtm',value:'',displayMode:'label',textAlign:'left',displayFormatter:'scwin.parseDate'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mainMainRsn',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcsnClsNm',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})