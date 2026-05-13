/*amd /ui/ac/fi/taxbiz/vatctrl/fi_401_01_08b.xml 41321 081754649fc96d22a567a96dc9c03d0ca0c3ddf12e43d94aa3c8192d7c500a91 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vat',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'recverCrn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'발행일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'환종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'외화금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'증빙번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroElecCnt',name:'전자세금계산서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paperTaxCnt',name:'종이세금계산서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroTaxCnt',name:'전자계산서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paperCnt',name:'종이계산서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paperTaxRpaCnt',name:'종이세금계산서(RPA)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcCnt',name:'기타',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'spplyDtSt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyDtEnd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatDeclarAcctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatDeclarAcctDeptNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crnNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postYn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'zeroTaxClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.vatctrl.RetrieveValueAddedTaxZeroTaxListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_vat","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_vat","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p); // 로그인 정보를 가져온다.
scwin.privAdmin = scwin.memJson.privAdmin; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님 

scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; // //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드
scwin.isSubCompany = false;
scwin.txtCoClsCd = "";
scwin.g_sLoginDept = scwin.memJson.acctDeptCd;
scwin.isStart = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FI008",
    compID: "lc_postYn"
  }, {
    grpCd: "FI004",
    compID: "lc_zeroTaxClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  cbx_printCheck.setValue(1);
};
scwin.ondataload = function () {
  dlt_commonCodeFI008.insertRow(0);
  dlt_commonCodeFI008.setCellData(0, "cd", "-1");
  dlt_commonCodeFI008.setCellData(0, "cdNm", "전체");
  lc_postYn.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// UDC 로딩 완료 후
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_changed();
  scwin.f_setCompanyInfo();
  scwin.f_Setting();

  // 재경팀만 증빙인쇄 가능
  if (scwin.g_sLoginDept !== "00009") {
    $c.gus.cfDisableObjects($p, [btn_ozReport3]);
  } else {
    $c.gus.cfEnableObjects($p, [btn_ozReport3]);
  }
};

//-------------------------------------------------------------------------
// 재조회
//-------------------------------------------------------------------------
scwin.f_SearchClear = function () {
  $c.gus.cfInitObjects($p, searchTable);
  scwin.f_Setting();
};

//-------------------------------------------------------------------------
// 조회조건 셋팅
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  lc_postYn.setSelectedIndex(0);
  lc_zeroTaxClsCd.setSelectedIndex(0);
  ica_spplyDtSt.setValue($c.date.getServerDateTime($p, "yyyyMM") + "01");
  ica_spplyDtEnd.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  ica_spplyDtSt.focus();
  lc_printGb.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를 '동부 EXPRESS'로 Default set
  if (scwin.vUserHomeClsCd !== ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.isStart = true;
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 조회(거래목록)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_spplyDtSt, ica_spplyDtEnd, lc_zeroTaxClsCd]);
  if (!ret) {
    return false;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_spplyDtSt.getValue(), ica_spplyDtEnd.getValue())) {
    await $c.win.alert($p, MSG_CM_ERR_039);
    ica_spplyDtSt.focus();
    return false;
  }
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (flag, check) {
  // 부가세신고부서조회
  let param = ",,," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + "," + ica_spplyDtSt.getValue().substring(0, 4);
  await udc_vatDeclarAcctDept.cfCommonPopUp(scwin.udc_vatDeclarAcctDept_callBackFunc, ed_vatDeclarAcctDeptCd.getValue().trim(), ed_vatDeclarAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
};
scwin.udc_vatDeclarAcctDept_callBackFunc = function (rtnList) {
  if (rtnList !== null) {
    if (rtnList[0] === "N/A") {
      return;
    }
    ed_vatDeclarAcctDeptCd.setValue(rtnList[2]); //부가세부서코드
    ed_vatDeclarAcctDeptNm.setValue(rtnList[3]); //부가세부서명
    ed_vatDeclarCrn.setValue(rtnList[5]); //부가세사업자번호
    if (!ed_vatDeclarAcctDeptCd.options) ed_vatDeclarAcctDeptCd.options = {};
    ed_vatDeclarAcctDeptCd.options.hidVal = rtnList[2]; //히든값
  } else {
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
    ed_vatDeclarCrn.setValue("");
    if (!ed_vatDeclarAcctDeptCd.options) ed_vatDeclarAcctDeptCd.options = {};
    ed_vatDeclarAcctDeptCd.options.hidVal = ""; //히든값
  }
};

//-------------------------------------------------------------------------
// 알람표발행
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  if (ed_vatDeclarAcctDeptCd.getValue() === "") {
    await $c.win.alert($p, "부가세귀속부서는 필수 항목입니다");
    return;
  }
  let data = {
    odiName: "fi_401_01_08p",
    reportName: "/ac/fi/taxbiz/vatctrl/fi_401_01_08p.ozr",
    odiParam: {
      spplyDtSt: ica_spplyDtSt.getValue().trim(),
      spplyDtEnd: ica_spplyDtEnd.getValue().trim(),
      vatDeclarAcctDeptCd: ed_vatDeclarAcctDeptCd.getValue().trim(),
      zeroTaxClsCd: lc_zeroTaxClsCd.getValue().trim(),
      postYn: lc_postYn.getValue().trim(),
      coCd: ed_coCd.getValue(),
      //
      coClsCd: scwin.txtCoClsCd
    },
    viewerParam: {
      viewer: 100,
      useprogressbar: false
    },
    formParam: {}
  };
  if (cbx_printCheck.getValue() == "1" && cbx_previewCheck.getValue() == "0") {
    let opts = {
      type: 'print',
      // viewer, print, download
      printMode: 'view' // silent, view
    };
    $c.ext.printOzReport($p, data, opts);
  } else if (cbx_printCheck.getValue() == "0" && cbx_previewCheck.getValue() == "1" || cbx_printCheck.getValue() == "1" && cbx_previewCheck.getValue() == "1") {
    let opts = {
      type: 'viewer',
      // viewer, print, download
      printMode: 'view' // silent, view
    };
    $c.ext.openOzReport($p, data, opts);
  } else {
    let opts = {
      filename: 'fi_401_01_08p',
      exportMode: 'view'
    };
    $c.ext.downloadOzReport($p, data, opts);
  }
};

//-------------------------------------------------------------------------
// 수출실적명세서 OZ 추가 (f_OzReport2 대체)
//-------------------------------------------------------------------------
scwin.f_OzReport2 = async function () {
  let data = {
    odiName: "fi_401_01_08_02p",
    reportName: "/ac/fi/taxbiz/vatctrl/fi_401_01_08_02p.ozr",
    odiParam: {
      spplyDtSt: ica_spplyDtSt.getValue().trim(),
      spplyDtEnd: ica_spplyDtEnd.getValue().trim(),
      vatDeclarAcctDeptCd: ed_vatDeclarAcctDeptCd.getValue().trim(),
      zeroTaxClsCd: lc_zeroTaxClsCd.getValue().trim(),
      postYn: lc_postYn.getValue().trim(),
      coCd: ed_coCd.getValue(),
      coClsCd: scwin.txtCoClsCd
    },
    viewerParam: {
      viewer: 100,
      useprogressbar: false // PROGRESSBAR 안보이게
    },
    formParam: {}
  };
  if (cbx_printCheck.getValue() == "1" && cbx_previewCheck.getValue() == "0") {
    let opts = {
      type: 'print',
      // viewer, print, download
      printMode: 'view' // silent, view
    };
    $c.ext.printOzReport($p, data, opts);
  } else if (cbx_printCheck.getValue() == "0" && cbx_previewCheck.getValue() == "1" || cbx_printCheck.getValue() == "1" && cbx_previewCheck.getValue() == "1") {
    let opts = {
      type: 'viewer',
      // viewer, print, download
      printMode: 'view' // silent, view
    };
    $c.ext.openOzReport($p, data, opts);
  } else {
    let opts = {
      filename: 'fi_401_01_08_02p',
      exportMode: 'view'
    };
    $c.ext.downloadOzReport($p, data, opts);
  }
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    const options = {
      fileName: '부가세영세율목록조회.xlsx',
      sheetName: '부가세영세율목록조회',
      useSubTotal: true,
      colMerge: true,
      colMergeTextAlign: "top"
    };
    $c.data.downloadGridViewExcel($p, gr_vat, options);
  }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  await udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  if (rtnList !== null) {
    if (rtnList[0] === "N/A") return;
    if (ed_coCd.options.hidVal !== rtnList[0]) {
      scwin.f_initObj();
    }
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    if (!ed_coCd.options) ed_coCd.options = {};
    ed_coCd.options.hidVal = rtnList[0];
    scwin.txtCoClsCd = rtnList[1];
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    if (!ed_coCd.options) ed_coCd.options = {};
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isStart == true) {
    if (scwin.privAdmin === 'T' || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
  scwin.isStart = false;
};
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_vatDeclarAcctDeptCd, ed_vatDeclarAcctDeptNm, ed_vatDeclarCrn]);
};

//-------------------------------------------------------------------------
// 수출실적명세서  OZ 추가 (20120913) : 영세율구분에따른 셋팅 -> 수출식적명세서 버튼 
//-------------------------------------------------------------------------
scwin.f_changed = function () {
  if (lc_zeroTaxClsCd.getValue() === "" || lc_zeroTaxClsCd.getValue() === "1") {
    $c.gus.cfDisableObjects($p, [btn_ozReport2]);
  } else if (lc_zeroTaxClsCd.getValue() === "2") {
    $c.gus.cfEnableObjects($p, [btn_ozReport2]);
  }
};

//-------------------------------------------------------------------------
// 부가세 e세로 대사 팝업
//-------------------------------------------------------------------------
scwin.f_evidPopUp = async function () {
  let slipNo = ds_vat.getCellData(ds_vat.getRowPosition(), "slipNo");
  const valueObject = {
    slipNo: slipNo
  };
  const options = {
    popupName: "증빙등록조회",
    id: "fi_403_01_02b_pop",
    width: 1450,
    height: 1000,
    title: "증빙등록조회"
  };
  await $c.win.openPopup($p, "/ui/ac/fi/taxbiz/evidmgnt/fi_403_01_02b.xml", options, valueObject);
};

//일괄다운 - 부가세신고 증빙제출용
scwin.f_print_certi = async function () {
  let diffObj = await $c.gus.cfDifferBetween($p, ica_spplyDtSt.getValue(), ica_spplyDtEnd.getValue());

  // 물류 거래명세서 선택 시 오더기간이 1달 이상인경우 확인
  if ((diffObj.year > 0 || diffObj.month > 0) && lc_printGb.getValue() == "01") {
    await $c.win.alert($p, "조회기간이 한달이 넘습니다. 일괄 다운이 불가합니다.");
    return;
  }
  if (cbx_previewCheck.getValue() != 1) {
    if (!(await $c.win.confirm($p, " 공급일자  " + ica_spplyDtSt.getValue() + "~" + ica_spplyDtEnd.getValue() + "에 해당하는 \n (매출 영세율-기타) 증빙을 일괄 다운하시겠습니까?"))) {
      return;
    }
  }
  if (lc_printGb.getValue() == "01") {
    //물류-거래명세서
    let data = {
      odiName: "fs_202_06_10_01_02",
      reportName: "/ds/fs/fs_202_06_10_01_02_all.ozr",
      odiParam: {
        spplyDtSt: ica_spplyDtSt.getValue(),
        spplyDtEnd: ica_spplyDtEnd.getValue(),
        ozNo: "01",
        //증빙등록조회 fi_403_01_02b.jsp 기본 셋팅 동일하게 적용
        sumGbn: "N",
        //할증 합계 표시 유무
        wtGbn: "N",
        //거래명세서 실작업중량 표기 유무
        blGbn: "N",
        //거래명세서 항목란에 B/L 표기 유무
        inscrpFmlaPatternCd: "02",
        fmlaClsCd: "01",
        spplyFg: "receive"
      },
      viewerParam: {},
      formParam: {}
    };
    if (cbx_printCheck.getValue() == "1" && cbx_previewCheck.getValue() == "0") {
      let opts = {
        type: 'print',
        // viewer, print, download
        printMode: 'silent' // silent, view
      };
      $c.ext.printOzReport($p, data, opts);
    } else if (cbx_printCheck.getValue() == "0" && cbx_previewCheck.getValue() == "1" || cbx_printCheck.getValue() == "1" && cbx_previewCheck.getValue() == "1") {
      let opts = {
        type: 'viewer',
        // viewer, print, download
        printMode: 'view' // silent, view
      };
      $c.ext.openOzReport($p, data, opts);
    }
    if (cbx_previewCheck.getValue() == "0") {
      let opts = {
        filename: "매출 영세율-기타 증빙(물류)" + "_" + ica_spplyDtSt.getValue() + "_" + ica_spplyDtEnd.getValue(),
        exportMode: 'silent'
      };
      $c.ext.downloadOzReport($p, data, opts);
    }
  } else if (lc_printGb.getValue() == "02") {
    //국제-INVOICE(A)
    let data = {
      odiName: "ac_101_01_01_air",
      reportName: "/il/acc/ac_101_01_01_air_all.ozr",
      odiParam: {
        SPPLY_DT_ST: ica_spplyDtSt.getValue(),
        SPPLY_DT_END: ica_spplyDtEnd.getValue(),
        KCOMCD: "DBEX",
        USER_ID: scwin.memJson.userId,
        TYPE: "5",
        RMK: "Y",
        ENG: "1",
        PIC: "2"
      },
      viewerParam: {},
      // 아래 조건문에서 설정
      formParam: {}
    };
    if (cbx_printCheck.getValue() == "1" && cbx_previewCheck.getValue() == "0") {
      let opts = {
        type: 'print',
        // viewer, print, download
        printMode: 'silent' // silent, view
      };
      $c.ext.printOzReport($p, data, opts);
    } else if (cbx_printCheck.getValue() == "0" && cbx_previewCheck.getValue() == "1" || cbx_printCheck.getValue() == "1" && cbx_previewCheck.getValue() == "1") {
      let opts = {
        type: 'viewer',
        // viewer, print, download
        printMode: 'view' // silent, view
      };
      $c.ext.openOzReport($p, data, opts);
    }
    if (cbx_previewCheck.getValue() == "0") {
      let opts = {
        filename: "매출 영세율-기타 증빙(" + lc_printGb.getValue() + ")" + "_" + ica_spplyDtSt.getValue() + "_" + ica_spplyDtEnd.getValue(),
        exportMode: 'silent'
      };
      $c.ext.downloadOzReport($p, data, opts);
    }
  } else if (lc_printGb.getValue() == "03") {
    //국제-INVOICE(S)
    let data = {
      odiName: "ac_101_01_01_sea",
      reportName: "/il/acc/ac_101_01_01_sea_all.ozr",
      odiParam: {
        SPPLY_DT_ST: ica_spplyDtSt.getValue(),
        SPPLY_DT_END: ica_spplyDtEnd.getValue(),
        KCOMCD: "DBEX",
        SEAAIR: "S",
        USER_ID: scwin.memJson.userId,
        TYPE: "5",
        RMK: "Y",
        ENG: "1",
        PIC: "2"
      },
      viewerParam: {},
      // 아래 조건문에서 설정
      formParam: {}
    };
    if (cbx_printCheck.getValue() == "1" && cbx_previewCheck.getValue() == "0") {
      let opts = {
        type: 'print',
        // viewer, print, download
        printMode: 'silent' // silent, view
      };
      $c.ext.printOzReport($p, data, opts);
    } else if (cbx_printCheck.getValue() == "0" && cbx_previewCheck.getValue() == "1" || cbx_printCheck.getValue() == "1" && cbx_previewCheck.getValue() == "1") {
      let opts = {
        type: 'viewer',
        // viewer, print, download
        printMode: 'view' // silent, view
      };
      $c.ext.openOzReport($p, data, opts);
    }
    if (cbx_previewCheck.getValue() == "0") {
      let opts = {
        filename: "매출 영세율-기타 증빙(" + lc_printGb.getValue() + ")" + "_" + ica_spplyDtSt.getValue() + "_" + ica_spplyDtEnd.getValue(),
        exportMode: 'silent'
      };
      $c.ext.downloadOzReport($p, data, opts);
    }
  } else if (lc_printGb.getValue() == "04") {
    //국제-PARTNER
    let emp_no = scwin.memJson.empNo;
    let data = {
      odiName: "ac_104_01_01",
      reportName: "/il/acc/ac_104_01_01_all.ozr",
      odiParam: {
        SPPLY_DT_ST: ica_spplyDtSt.getValue(),
        SPPLY_DT_END: ica_spplyDtEnd.getValue(),
        KCOMCD: "DBEX",
        USER_ID: scwin.memJson.userId,
        TYPE: "0",
        EMP_NO: emp_no,
        PIC: "2"
      },
      viewerParam: {},
      // 아래 조건문에서 설정
      formParam: {}
    };
    if (cbx_printCheck.getValue() == "1" && cbx_previewCheck.getValue() == "0") {
      let opts = {
        type: 'print',
        // viewer, print, download
        printMode: 'silent' // silent, view
      };
      $c.ext.printOzReport($p, data, opts);
    } else if (cbx_printCheck.getValue() == "0" && cbx_previewCheck.getValue() == "1" || cbx_printCheck.getValue() == "1" && cbx_previewCheck.getValue() == "1") {
      let opts = {
        type: 'viewer',
        // viewer, print, download
        printMode: 'view' // silent, view
      };
      $c.ext.openOzReport($p, data, opts);
    }
    if (cbx_previewCheck.getValue() == "0") {
      let opts = {
        filename: "매출 영세율-기타 증빙(" + lc_printGb.getValue() + ")" + "_" + ica_spplyDtSt.getValue() + "_" + ica_spplyDtEnd.getValue(),
        exportMode: 'silent'
      };
      $c.ext.downloadOzReport($p, data, opts);
    }
  }
};
scwin.sbm_search_submitdone = async function (e) {
  if (ds_vat.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
  let options = {};
  options.sortIndex = "recverCrn spplyDt spplyAmt";
  options.sortOrder = "1 1 1";
  ds_vat.multisort(options);
  totalRows.setValue(ds_vat.getRowCount());
};
scwin.udc_vatDeclarAcctDept_onblurCodeEvent = function (e) {
  if (ed_vatDeclarAcctDeptCd.getValue().trim() == ed_vatDeclarAcctDeptCd.options.hidVal) {
    return;
  }
  ed_vatDeclarAcctDeptNm.setValue("");
  ed_vatDeclarCrn.setValue("");
  ed_vatDeclarAcctDeptCd.options.hidVal = "";
  if (ed_vatDeclarAcctDeptCd.getValue().trim() != "") scwin.f_openPopUp('', 'T');
};
scwin.gr_vat_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo" && rowIndex >= 0) {
    await $c.gus.cfShowSlipInfo($p, ds_vat.getCellData(rowIndex, columnId));
  }
  if ((columnId == "paperTaxRpaCnt" || columnId == "eseroElecCnt" || columnId == "paperTaxCnt" || columnId == "eseroTaxCnt" || columnId == "paperCnt" || columnId == "etcCnt" || columnId == "subTotalEseroElecCnt") && rowIndex >= 0) {
    scwin.f_evidPopUp();
  }
};
scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  } else {
    ed_coNm.setValue("");
  }
};
scwin.udc_fromToCalendar_onBlur = function () {
  if (ed_vatDeclarAcctDeptCd.getValue() == null || ed_vatDeclarAcctDeptCd.getValue() == "") {
    ed_vatDeclarAcctDeptCd.options.hidVal = '';
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
    ed_vatDeclarCrn.setValue("");
  } else {
    scwin.f_openPopUp('', 'T');
  }
};
scwin.lc_zeroTaxClsCd_onchange = function (info) {
  scwin.f_changed();
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_SearchClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_ozReport_onclick = function (e) {
  scwin.f_OzReport();
};
scwin.btn_ozReport2_onclick = function (e) {
  scwin.f_OzReport2();
};
scwin.btn_ozReport3_onclick = function (e) {
  scwin.f_print_certi();
};
scwin.udc_vatDeclarAcctDept_onclickEvent = function (e) {
  scwin.f_openPopUp('', 'F');
};
scwin.gr_vat_onsubtotalclick = function (info) {
  let colId = info.colID;
  if (colId == "subTotalEseroElecCnt" || colId == "subTotalPaperTaxCnt" || colId == "subTotalEseroTaxCnt" || colId == "subTotalPaperCnt" || colId == "subTotalPaperTaxRpaCnt" || colId == "subTotalEtcCnt") {
    scwin.f_evidPopUp();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'searchTable',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'회사코드',nameId:'ed_coNm',style:'',objTypeCode:'data',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',maxlengthCode:'3',UpperFlagCode:'1',objTypeName:'data',btnId:'btn_company',refDataCollection:'dma_search',code:'coCd',id:'udc_dongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세신고부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_vatDeclarAcctDeptCd',selectID:'retrieveVatDeclarAcctDeptCd',popupID:'',validTitle:'부가세신고부서',nameId:'ed_vatDeclarAcctDeptNm',style:'',objTypeCode:'data',validExpCode:'부가세신고부서:no:format=00000',allowCharCode:'0-9',maxlengthCode:'5',mandatoryCode:'false',UpperFlagCode:'1',objTypeName:'data',btnId:'btn_slipAcctDeptCdEnd',refDataCollection:'dma_search',code:'vatDeclarAcctDeptCd',name:'vatDeclarAcctDeptNm',id:'udc_vatDeclarAcctDept','ev:onblurCodeEvent':'scwin.udc_vatDeclarAcctDept_onblurCodeEvent','ev:onclickEvent':'scwin.udc_vatDeclarAcctDept_onclickEvent',skipOnBlurCodeValueEmpty:'N'}},{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_vatDeclarCrn',class:'',objType:'data',ref:'data:dma_search.crn',title:'사업자번호'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공급일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ica_spplyDtSt',edToId:'ica_spplyDtEnd','ev:onBlur':'scwin.udc_fromToCalendar_onBlur',id:'udc_fromToCalendar',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data',objTypeFrom:'data',objTypeTo:'data',refDataMap:'dma_search',refEdDt:'spplyDtEnd',refStDt:'spplyDtSt',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'가결구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',chooseOptionLabel:'전체',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_postYn',objType:'data',ref:'data:dma_search.postYn',style:'width: 100px;',submenuSize:'fixed',title:'가결구분'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'영세율 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled','ev:onchange':'scwin.lc_zeroTaxClsCd_onchange',id:'lc_zeroTaxClsCd',objType:'data',ref:'data:dma_search.zeroTaxClsCd',style:'width: 100px;',submenuSize:'fixed',title:'영세율'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'N',gridUpYn:'N',gridID:'gr_vat',gridDownUserAuth:'X',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_vat',id:'gr_vat',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'12',visibleRowNumFix:'true',columnMove:'true','ev:oncellclick':'scwin.gr_vat_oncellclick','ev:onsubtotalclick':'scwin.gr_vat_onsubtotalclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'사업자번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'사업자명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'거래처번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'발행일시',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'금액',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'환종',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'환율',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'외화금액',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'증빙번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'작성일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',value:'회계일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',value:'전자세금</br>계산서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'종이세금</br>계산서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column56',value:'전자</br>계산서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',value:'종이</br>계산서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column50',value:'종이세금</br>계산서(RPA)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column52',value:'기타',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'recverCrn',inputType:'text',width:'120',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNm',inputType:'text',width:'100',colMerge:'true',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'120',colMerge:'true',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'100',colMerge:'true',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyDt',inputType:'text',width:'100',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmt',inputType:'text',width:'70',readOnly:'true',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'exchRt',inputType:'text',width:'70',readOnly:'true',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmtFcrc',inputType:'text',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',id:'slipNo',displayMode:'label',readOnly:'true',class:'linktype'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellVatNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipDt',displayMode:'label',readOnly:'true',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'postDt',displayMode:'label',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',id:'eseroElecCnt',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number',class:'linktype',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',id:'paperTaxCnt',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number',class:'linktype',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',id:'eseroTaxCnt',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number',class:'linktype',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',id:'paperCnt',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number',class:'linktype',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'link',id:'paperTaxRpaCnt',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number',class:'linktype',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'link',id:'etcCnt',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number',class:'linktype',excelCellType:'number'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'recverCrn',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column77',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column76',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column74',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column72',displayMode:'label',dataType:'number',expression:'sum("spplyAmt")',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column71',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column70',displayMode:'label',dataType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column69',displayMode:'label',displayFormat:'#,##0.00',expression:'sum("spplyAmtFcrc")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column68',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'subTotalEseroElecCnt',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("eseroElecCnt")',style:';text-decoration:underline;cursor:pointer;color:;font-weight:normal;',class:'underline txt-black'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'subTotalPaperTaxCnt',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("paperTaxCnt")',style:';cursor:pointer;color:;text-decoration:underline;font-weight:normal;',class:'underline txt-black'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'subTotalEseroTaxCnt',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("eseroTaxCnt")',style:';cursor:pointer;color:;text-decoration:underline;font-weight:normal;',class:'underline txt-black'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'subTotalPaperCnt',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("paperCnt")',style:';cursor:pointer;color:;text-decoration:underline;font-weight:normal;',class:'underline txt-black'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'subTotalPaperTaxRpaCnt',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("paperTaxRpaCnt")',style:';cursor:pointer;color:;text-decoration:underline;font-weight:normal;',class:'underline txt-black'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'subTotalEtcCnt',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("etcCnt")',style:';cursor:pointer;color:;text-decoration:underline;font-weight:normal;',class:''}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_ozReport',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.btn_ozReport_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'알람표발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'true',id:'btn_ozReport2',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.btn_ozReport2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출실적명세서'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_printGb',style:'width: 150px;',submenuSize:'fixed',objType:'data',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류(거래명세서)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제(Invoce(A))'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제(Invoce(S))'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제(PARTNER)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_ozReport3',style:'',type:'button',userAttr1:'P','ev:onclick':'scwin.btn_ozReport3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출-영세율(기타)일괄 발행'}]}]}]}]}]}]}]}]}]})