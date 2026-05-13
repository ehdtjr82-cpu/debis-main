/*amd /ui/ps/eq/adjmmgnt/fixrslts/eq_530_02_03b.xml 40824 d358797c5600b4e5f0ca71b9431611f1966abfcceb2f10c5ffe1aecf13f823e9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'termFrom',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'termTo',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'사업부문',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lorryCdYn',name:'화물자동차여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'termPassClsCd',name:'기간경과구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inspKndCd',name:'검사종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqClssCd',name:'장비분류코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_send'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rmk',name:'발송사유',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'배정점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranNm',name:'배정점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClssCd',name:'장비분류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelCd',name:'장비모델코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlNm',name:'정비작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspKndCd',name:'검사종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspKndNm',name:'검사종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lastInspDt',name:'최종검사일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'유효기간종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireStDt',name:'유효기간시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stDt',name:'검사기간시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'edDt',name:'검사기간종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pastDayCnt',name:'경과일수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pastAmt',name:'예상과태료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regRgnCd',name:'등록지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carAgeYear',name:'차령',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carAgeMon',name:'차령(월)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'firstRegDt',name:'최초등록일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrNo',name:'차대번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'makerCd',name:'제조사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rglintInspExpireDt',name:'검사만료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixPlanNo',name:'정비계획번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkNo',name:'정비작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_wrkPlCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_RetrieveLobranCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobranCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkPlCd',saveRemovedData:'true','ev:ondataload':'scwin.ds_wrkPlCd_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_RetrieveHomeClsCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'key1',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key2',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ps.eq.adjmmgnt.fixrslts.RetrieveLegalInspectionIntendDayCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_wrkPlCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_wrkPlCd","key":"IN_DS1"},{"id":"ds_wrkPlCd","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_wrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_wrkPlCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_send',action:'/ps.eq.adjmmgnt.fixrslts.SendInspMailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_send","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_send_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 법적검사 예정일 조회 (eq_530_02_03b)
// 작성자 : 송정희
// 최초작성일자 : 2026-01-24
//------------------------------------------------------------------------
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strFromDate = scwin.strCurDate.substring(0, 6) + "01";
scwin.strToDate = scwin.strCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.strCurDate);
scwin.G_userId = "";
scwin.G_eqHomeClsCd = "";
scwin.G_acctDeptCd = "";
scwin.G_fixWrkPlCd = "";
scwin.data = {};
scwin.opts = {};
scwin.data1 = {};
scwin.opts1 = {};
scwin.data2 = {};
scwin.opts2 = {};
scwin.tLorryCdYn = 0;
scwin.onpageload = function () {
  grd_section1.hide();
  grd_section2.hide();

  //공통코드값
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "lc_homeClsCd",
    opt: {
      "range": "1,EQ"
    }
  },
  // 정비소속구분(사업부문)
  {
    grpCd: "ZZ203",
    compID: "gr_master:posnClsCd"
  },
  // 소유구분
  {
    grpCd: "ZZ202",
    compID: "lc_eqClssCd,gr_master:eqClssCd"
  },
  // 장비분류
  {
    grpCd: "EQ006",
    compID: "lc_inspKndCd,gr_master:inspKndCd"
  },
  // 검사종류
  {
    grpCd: "EQ020",
    compID: "gr_master:passYn"
  },
  // 검사결과
  {
    grpCd: "ZZ210",
    compID: "gr_master:eqKndCd"
  },
  // 장비종류
  {
    grpCd: "ZZ105",
    compID: "gr_master:regRgnCd"
  },
  // 등록지역
  {
    grpCd: "ZZ609",
    compID: "gr_master:makerCd"
  } // 제조사
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};
scwin.callBackCommonCode = function () {
  // 로그인 정보 추출
  scwin.G_userId = $c.data.getMemInfo($p, "userId");
  scwin.G_acctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
  scwin.G_eqHomeClsCd = $c.data.getMemInfo($p, "eqHomeClsCd"); // 사용자소속구분코드
  scwin.G_fixWrkPlCd = $c.data.getMemInfo($p, "fixWrkPlCd");
  scwin.f_AdminAuth();
  chk_lorryCdYn.checkAll(false);
  scwin.f_RetrieveLobranCd(); //지점(점소)    

  scwin.f_RetrieveWrkPlCd(scwin.G_eqHomeClsCd); // 작업장

  // 그리드 항목 조정 - 화물자동차 체크시
  scwin.f_onClicklorryCdYn();
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  ed_wrkStDt.setValue(scwin.strFromDate);
  ed_wrkEndDt.setValue(scwin.strToDate);
  lc_homeClsCd.setValue(scwin.G_eqHomeClsCd); // 정비소속구분코드

  if (lc_homeClsCd.getValue() == scwin.G_eqHomeClsCd) {
    lc_wrkPlCd.setValue(scwin.G_fixWrkPlCd); // 정비작업장코드
  }
};

//------------------------------------------------------------------------
// [지점(점소)  콤보 조회
//------------------------------------------------------------------------
scwin.f_RetrieveLobranCd = async function () {
  //    let params = {
  //        sysCd: "PsCommonEBC", 
  //        queryId: "retriveBranchCd"
  //    };
  //    dma_RetrieveLobranCd.setJSON(params);
  //    $c.sbm.execute(sbm_lobranCd);       

  var param = [{
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retriveBranchCd",
    compID: "lc_lobranCd"
  }, {
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retriveBranchCd",
    compID: "lc_lobranCdMail"
  }];
  await $c.data.setGauceUtil($p, param);
};

//------------------------------------------------------------------------
// [대표정비작업장  콤보 조회] 소속 구분에 따른 작업장 리스트 콤보 변경 ( 조회조건 LuxCombo )
//------------------------------------------------------------------------
scwin.f_RetrieveWrkPlCd = function (homeClsCd) {
  dma_wrkPlCd.set("sysCd", "PsCommonEBC");
  dma_wrkPlCd.set("queryId", "retriveWrkplList");
  dma_wrkPlCd.set("param1", homeClsCd);
  $c.sbm.execute($p, sbm_wrkPlCd);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [tb_wrk], null, true))) return;
  if (ed_wrkStDt.getValue() > ed_wrkEndDt.getValue()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_wrkStDt.focus();
    return;
  }
  if ($c.gus.cfIsNull($p, lc_homeClsCd.getValue())) {
    $c.win.alert($p, "사업부문은 필수입력항목입니다.");
    return;
  }
  dma_search.set("termFrom", ed_wrkStDt.getValue()); // 시작일자
  dma_search.set("termTo", ed_wrkEndDt.getValue()); // 종료일자
  dma_search.set("fixWrkPlCd", lc_wrkPlCd.getValue()); // 정비작업장
  dma_search.set("homeClsCd", lc_homeClsCd.getValue()); // 사업부문

  dma_search.set("lorryCdYn", scwin.tLorryCdYn); // 화물자동차여부

  dma_search.set("lobranCd", lc_lobranCd.getValue()); // 점소코드
  dma_search.set("inspKndCd", lc_inspKndCd.getValue()); // 검사종류
  dma_search.set("assgnLobranCd", lc_lobranCd.getValue()); // 점소코드
  dma_search.set("eqClssCd", lc_eqClssCd.getValue()); // 장비분류코드
  dma_search.set("termPassClsCd", lc_termPassClsCd.getValue()); // 기간경과구분

  gr_master.initGrid();
  $c.sbm.execute($p, sbm_master);
};

//-------------------------------------------------------------------------
// 화물자동차 체크시- 항목 display 확인
//-------------------------------------------------------------------------
scwin.f_onClicklorryCdYn = function () {
  if (scwin.tLorryCdYn == 1) {
    // 화물자동차 체크시

    lc_termPassClsCd.setDisabled(false);
    btnGrpGrdSection1.show();
    btnGrpGrdSection2.hide();
    grd_section1.show();
    grd_section2.hide();
  } else {
    lc_termPassClsCd.setValue("");
    lc_termPassClsCd.setDisabled(true);
    btnGrpGrdSection1.hide();
    btnGrpGrdSection2.show();
    grd_section1.hide();
    grd_section2.show();
  }
};

//-------------------------------------------------------------------------
// 메일발송 버튼 권한 관리 
//-------------------------------------------------------------------------
scwin.f_AdminAuth = function () {
  if (scwin.G_acctDeptCd == "00240") {
    $c.gus.cfEnableObjects($p, [btn_Init]);
  } else {
    $c.gus.cfDisableObjects($p, [btn_Init]);
  }
};

//-------------------------------------------------------------------------
// 엑셀 Download
//-------------------------------------------------------------------------
scwin.f_runExcel = function (varGrNm) {
  const options = {
    fileName: "법적검사 예정일 조회.xlsx",
    sheetName: "법적검사 예정일 조회",
    startRowIndex: 0,
    startColumnIndex: 0,
    type: 1
  };
  if (scwin.tLorryCdYn == 1) {
    // 화물자동차 체크시
    $c.data.downloadGridViewExcel($p, gr_master, options, {});
  } else {
    $c.data.downloadGridViewExcel($p, gr_master2, options, {});
  }
};
scwin.ds_master_ondataload = function () {
  let rowCnt = ds_master.getTotalRow();
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  }
  if (rowCnt > 0) {
    totalRows.setValue(rowCnt);

    //column style 지정
    for (scwin.i = 0; scwin.i < rowCnt; scwin.i++) {
      gr_master.setCellStyle(scwin.i, "vehclNo", "text-decoration", "underline");
      gr_master.setCellStyle(scwin.i, "vehclNo", "cursor", "pointer");
      gr_master.setCellColor(scwin.i, "vehclNo", "blue");
      gr_master.setCellStyle(scwin.i, "fixPlanNo", "text-decoration", "underline"); // 정비계획번호
      gr_master.setCellStyle(scwin.i, "fixPlanNo", "cursor", "pointer");
      gr_master.setCellColor(scwin.i, "fixPlanNo", "blue");
      gr_master.setCellStyle(scwin.i, "fixWrkNo", "text-decoration", "underline"); // 정비작업번호
      gr_master.setCellStyle(scwin.i, "fixWrkNo", "cursor", "pointer");
      gr_master.setCellColor(scwin.i, "fixWrkNo", "blue");

      //Row Color
      if (ds_master.getCellData(scwin.i, "pastDayCnt") > 0) {
        gr_master.setRowBackgroundColor(scwin.i, "#FFDEAD");
      } else {
        gr_master.setRowBackgroundColor(scwin.i, "#FFFFFF");
      }
      gr_master2.setCellStyle(scwin.i, "vehclNo", "text-decoration", "underline");
      gr_master2.setCellStyle(scwin.i, "vehclNo", "cursor", "pointer");
      gr_master2.setCellColor(scwin.i, "vehclNo", "blue");
    }
  }
};

//-------------------------------------------------------------------------
// 메일발송
//-------------------------------------------------------------------------
scwin.f_send = async function () {
  if (ed_rmk.getValue() == "") {
    await $c.win.alert($p, "메일발송사유를 작성해주세요");
    return;
  }
  if (!(await $c.win.confirm($p, "메일을 발송하시겠습니까?"))) {
    return;
  }
  $c.sbm.execute($p, sbm_send);
};
scwin.btn_Search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_Init_onclick = function (e) {
  scwin.f_send();
};
scwin.lc_homeClsCd_onviewchange = function (info) {
  var luxIndex = lc_homeClsCd.getValue();
  // 작업장콤보 조회
  scwin.f_RetrieveWrkPlCd(luxIndex);
};
scwin.chk_lorryCdYn_onlabelclick = function (index, checked, value) {
  if (checked) {
    scwin.tLorryCdYn = 1;
  } else {
    scwin.tLorryCdYn = 0;
  }
  ;
  scwin.f_onClicklorryCdYn();

  //조회
  scwin.f_Retrieve();
};
scwin.sbm_wrkPlCd_submitdone = function (e) {
  if (lc_homeClsCd.getValue() == scwin.G_eqHomeClsCd) {
    lc_wrkPlCd.setValue(scwin.G_fixWrkPlCd); // 정비작업장코드
  }
};
scwin.ds_wrkPlCd_ondataload = function () {
  if (lc_homeClsCd.getValue() == scwin.G_eqHomeClsCd) {
    lc_wrkPlCd.setValue(scwin.G_fixWrkPlCd); // 정비작업장코드
  }
};
scwin.sbm_send_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.win.alert($p, "메일이 성공적으로 전송되었습니다.");
};

// =======================================================
// 계약 상세 탭 오픈 공통
// =======================================================
scwin.cfTabMenuAdd = function (url, name) {
  var sURL = url.split("?")[0];
  var dataString = url.split("?")[1];
  var data = {};
  var ctrtNo = "";
  if (dataString) {
    dataString.split("&").forEach(function (param) {
      var kv = param.split("=");
      var key = kv[0];
      var value = kv[1];
      data[key] = value;
      if (key === "ctrtNo") ctrtNo = value;
    });
  }

  // 신규면 menuCode 비움
  var menuCode = data.mode === "NEW" ? "" : ctrtNo;

  // openMenu(name, url, jspName, paramData, options)
  $c.win.openMenu($p, name, sURL, sURL.substring(sURL.lastIndexOf("/") + 1).replace(/.xml/g, "") + ".jsp", data, {
    menuCode: menuCode
  });
};
scwin.gr_master_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "vehclNo") {
    scwin.f_MoveEqRegist(rowIndex); // 장비등록
  }
};
scwin.gr_master2_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "vehclNo") {
    scwin.f_MoveEqRegist(rowIndex); //장비등록
  } else if (columnId == "fixPlanNo") {
    var fixPlanNo = ds_master.getCellData(rowIndex, "fixPlanNo");
    var checkDate = ds_master.getCellData(rowIndex, "rglintInspExpireDt");
    var pStandDate1 = checkDate.substring(0, 6) + "01";
    var pStandDate2 = checkDate;
    var pHomeClsCd = dma_search.get("homeClsCd");
    var pOutbrRsnCd = dma_search.get("wrkPlCd");
    scwin.data1 = {
      fixPlanNo: fixPlanNo,
      homeClsCd: pHomeClsCd,
      outbrRsnCd: pOutbrRsnCd,
      standDate1: pStandDate1,
      standDate2: pStandDate2
    };
    scwin.opts1 = {
      id: "popeq3100101p",
      title: "작업계획등록",
      popupName: "작업계획등록",
      modal: true,
      center: "yes",
      type: "browserPopup",
      width: "1200px",
      height: "400px",
      scroll: "yes",
      resizable: "yes",
      status: "no"
    };
    var data = {
      "fixPlanNo": fixPlanNo,
      "&homeClsCd": pHomeClsCd,
      "&outbrRsnCd": pOutbrRsnCd,
      "&standDate1": pStandDate1,
      "&standDate2": pStandDate2
    };
    scwin.url = "/ui/ps/eq/fixwrkmgnt/fixwrkplanmgnt/eq_310_01_01b.xml";
    $c.win.openMenu($p, "작업계획등록", scwin.url, "eq_310_01_01b.xml", data);
  } else if (columnId == "fixWrkNo") {
    var pFixWrkNo = ds_master.getCellData(rowIndex, "fixPlanNo"); // 정비작업번호
    var pHomeClsCd = dma_search.get("homeClsCd"); // 
    var pfixWrkPlCd = dma_search.get("fixWrkPlCd"); // 정비작업장코드 

    scwin.data2 = {
      homeClsCd: pHomeClsCd,
      fixWrkPlCd: pfixWrkPlCd,
      fixPlanNo: pFixWrkNo
    };
    scwin.opts2 = {
      id: "popeq3300104p",
      title: "작업결과등록",
      popupName: "작업결과등록",
      modal: true,
      type: "browserPopup",
      width: 1400,
      height: 700,
      scrollbars: false
    };
    scwin.url = "/ui/ps/eq/fixwrkmgnt/fixwrkmgnt/eq_330_01_04b.xml";
    $c.win.openPopup($p, scwin.url, scwin.opts2, scwin.data2);
  }
};

//-------------------------------------------------------------------------
// 장비등록화면으로 이동
//-------------------------------------------------------------------------
scwin.f_MoveEqRegist = async function (rowIndex) {
  var pVehclNo = ds_master.getCellData(rowIndex, "vehclNo");
  var pEqCd = ds_master.getCellData(rowIndex, "eqCd");
  var pLegal = "T";
  var data = {
    "vehclNo": pVehclNo,
    "eqCd": pEqCd,
    "legal": pLegal
  };
  scwin.url = "/ui/cm/bc/eq/eqmgnt/zz_310_01_00b.xml";
  $c.win.openMenu($p, "장비관리", scwin.url, "zz_310_01_00b", data);
};
scwin.btn_Clear_onclick = function (e) {
  scwin.f_fieldClear();
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  $c.gus.cfInitObjects($p, tb_wrk, null);
  lc_homeClsCd.setValue(scwin.G_eqHomeClsCd); // 정비소속구분코드
  if (lc_homeClsCd.getValue() == scwin.G_eqHomeClsCd) {
    lc_wrkPlCd.setValue(scwin.G_fixWrkPlCd); // 정비작업장코드
  }
  scwin.f_RetrieveWrkPlCd("LO");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_wrk',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'검사예정기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'termFrom',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar3',refEdDt:'termTo',edFromId:'ed_wrkStDt',edToId:'ed_wrkEndDt',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'일자',titleTo:'일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.homeClsCd',chooseOptionLabel:'선택',sortMethod:'ascending',sortOption:'value','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange',emptyItem:'true',validExp:'사업부문:yes:',mandatory:'true'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정비작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.fixWrkPlCd',chooseOptionLabel:'전체',sortMethod:'ascending',sortOption:'value',visibleRowNum:'15'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_wrkPlCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물자동차 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_lorryCdYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'0',style:'',falseValue:'0','ev:onlabelclick':'scwin.chk_lorryCdYn_onlabelclick'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_lobranCd',style:'width: 208px;',submenuSize:'fixed',ref:'data:dma_search.lobranCd',chooseOptionLabel:'전체',sortMethod:'ascending',sortOption:'value',visibleRowNum:'24'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비분류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_eqClssCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.eqClssCd',chooseOptionLabel:'전체',sortMethod:'ascending',sortOption:'value',visibleRowNum:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'검사종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_inspKndCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.inspKndCd',chooseOptionLabel:'전체',sortMethod:'ascending',sortOption:'value',visibleRowNum:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기간경과 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'true',disabledClass:'w2selectbox_disabled',id:'lc_termPassClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.termPassClsCd',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미경과'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'경과'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.btn_Clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.btn_Search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{btnUser:'Y',gridDownFn:'scwin.f_runExcel',gridDownUserAuth:'X',gridID:'gr_master',gridUpYn:'N',grp:'grd_section1',style:'',id:'btnGrpGrdSection1'}},{T:1,N:'w2:udc_topGrdBtn',A:{btnUser:'Y',gridDownFn:'scwin.f_runExcel',gridDownUserAuth:'X',gridID:'gr_master2',gridUpYn:'N',grp:'grd_section2',id:'btnGrpGrdSection2',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'13',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_master_oncelldblclick',readOnly:'true',fixedColumn:'3',validExp:'vehclNo:장비번호:yes',dataName:'장비번호',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column43',value:'소유<br/>구분',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'배정점소',width:'120',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'장비<br/>분류',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'장비<br/>종류',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'검사종류',width:'90',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'최종<br/>검사일',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',value:'유효기간<br/>시작일',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'유효기간<br/>종료일',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'검사기간<br/>시작일',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'검사기간<br/>종료일',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column55',value:'경과<br/>일수',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',value:'예상과태료',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'등록지역',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column101',value:'모델명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column98',value:'최초등록일',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'차령',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'정비작업장',width:'120',hidden:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column71',value:'차령(월)',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column85',value:'거래처번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column83',value:'장비모델코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column81',value:'자산번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',value:'단축코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column89',value:'차대번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column96',value:'점소코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column91',value:'제조사',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'장비코드',width:'100',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'posnClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnLobranNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'eqClssCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'eqKndCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inspKndCd',inputType:'select',width:'90'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'lastInspDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'expireStDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'expireDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'stDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'edDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pastDayCnt',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pastAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'regRgnCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'eqModelNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'firstRegDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'carAgeYear',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlNm',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'carAgeMon',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'eqModelCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fixedAsetNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclShortCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'drcrNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'assgnLobranCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'makerCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',width:'100',hidden:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{id:'gr_master2',dataList:'data:ds_master',class:'wq_gvw',autoFit:'allColumn',visibleRowNum:'13',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_master2_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column10',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column9',value:'배정장소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column8',value:'장비모델',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column7',value:'정비작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column6',value:'검사<br/>종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column5',value:'검사만료일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column4',value:'정비계획번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column3',value:'정비작업번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column2',value:'장비코드',displayMode:'label',hidden:'true',falseValue:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column1',value:'배정점소코드',displayMode:'label',hidden:'true',falseValue:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:28px;',id:'vehclNo',value:'',displayMode:'label',hiddenClass:'vehclNo'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'left',id:'assgnLobranNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'eqModelNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'fixWrkPlNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'inspKndNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'calendar',style:'',id:'rglintInspExpireDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'fixPlanNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fixWrkNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'eqCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'assgnLobranCd',value:'',displayMode:'label',hidden:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'점소 ',class:''}},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'width: 150px;',allOption:'false',id:'lc_lobranCdMail',class:'',direction:'auto',sortMethod:'ascending',sortOption:'value',chooseOptionLabel:'전체',visibleRowNum:'20',ref:'data:dma_send.lobranCd'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발송사유 ',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_rmk',style:'width: 300px;',ref:'data:dma_send.rmk'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Init',style:'',type:'button','ev:onclick':'scwin.btn_Init_onclick',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'메일발송'}]}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'txt-dot txt-blue',id:'',label:'메일발송은 지사별 검사지연/당월검사대상/익월검사대상 장비 목록을 지사운송담당자에게 발송합니다.(물류운영팀만 발송 가능) ',style:''}}]}]}]}]}]})