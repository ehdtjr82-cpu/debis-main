/*amd /ui/ac/fm/collmoneymgnt/collmoneymgnt/fm_501_01_06b.xml 52931 dd182b490bf32686234cb7e4149499882d0e4ef2f27fb0bf529b21dc8621bf94 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchCollmoneyRcptDca'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'수금귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyFromDate',name:'입금일 시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyToDate',name:'입금일 종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankCd',name:'은행명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcptrNm',name:'입금자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcptDca',name:'가상계좌',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyCntSht',name:'계정',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_addCollMoney'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'initAmt',name:'선수금',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'commiSsionAmt',name:'수수료(원)',dataType:'number'}},{T:1,N:'w2:key',A:{id:'commiSsionAmtFcrc',name:'수수료(외)',dataType:'number'}},{T:1,N:'w2:key',A:{id:'collMoneyTotAmt',name:'입금총액',dataType:'number'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchStDate',name:'부서검색시 이용되는 기준날짜',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchEndDate',name:'부서검색시 이용되는 기준날짜',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_collmoneyRcptDca',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_collmoneyRcptDca_oncelldatachange','ev:onrowpositionchange':'scwin.ds_collmoneyRcptDca_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'accountItem',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvClntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvOutbrDt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvSlipNo',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvTotAmt',name:'name8',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctRecvTotAmtFcrc',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'name10',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'name17',dataType:'number'}},{T:1,N:'w2:column',A:{id:'billRecvAcctCd',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvKey',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvStsCd',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptCd',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyIntendDt',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commiSsionAmt',name:'name28',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cumBilgAmt',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cumSetlAmt',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubun',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'initAmt',name:'name35',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'num',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ramt',name:'name38',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramtFcrc',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptDca',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptPrcsDtm',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptrNm',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remainAmt',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remainAmtFcrc',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptCd',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmt',name:'name46',dataType:'number'}},{T:1,N:'w2:column',A:{id:'setlAmtCheck',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmtFcrc',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmtFcrcCheck',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtAcctCd',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtOutbrDt',name:'name53',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchCollmoneyRcptDca',action:'/ac.fm.collmoneymgnt.collmoneymgnt.RetrieveRcptDcaCollectionOfMoneyListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchCollmoneyRcptDca","key":"IN_DS1"},{"id":"ds_collmoneyRcptDca","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_collmoneyRcptDca","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchCollmoneyRcptDca_submitdone','ev:submiterror':'scwin.sbm_searchCollmoneyRcptDca_submitdone',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveAcctRecvCollMoney',action:'/ac.fm.collmoneymgnt.collmoneymgnt.RegistCollectionOfMoneyRcptDcaCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_addCollMoney","key":"IN_DS2"},{"action":"modified","id":"ds_collmoneyRcptDca","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_collmoneyRcptDca","key":"IN_DS1"},{"id":"dma_addCollMoney","key":"IN_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveAcctRecvCollMoney_submitdone','ev:submiterror':'scwin.sbm_saveAcctRecvCollMoney_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fm_501_01_06b
// 이름     : 가상계좌 수금등록 (요청)
// 경로     : 회계 > 자금관리 > 수금관리 > 수금관리 > 수금사항등록
// 작 성 자 : 오영재
// 작 업 일 : 2025-11-10
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================

// 로그인사용자 정보
scwin.vLoginCoCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd"); // 소속 자회사 
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd"); // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "userHomeClsCd")) ? '' : $c.data.getMemInfo($p, "userHomeClsCd");
; // 사용자소속구분코드 

scwin.privAdmin = ""; // 어드민권한
scwin.userId = ""; // 사용자ID
scwin.vCoCd = ""; // 회사코드
scwin.empNo = ""; // 사원번호
scwin.isSubCompany = "1"; // 자회사여부

scwin.pageNumber = "1"; // 페이지번호 (추가조회용)

scwin.txtCoClsCd = ""; // 회사구분코드
scwin.txt_pageNumber = "0"; // 페이지번호
scwin.hd_acctCdGbn = ""; // 계정과목구분
scwin.hd_acctDeptCdGbn = ""; // 귀속부서구분
scwin.checkSearch;
scwin.checkRetrieveSave = "F"; // 저장에 의한 수금목록 재조회인지 여부 판단 T:저장에 의한 자동 재조회, F:조회버튼에 의한 재조회
scwin.dateStr = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.isSubCompany = false; // 자회사여부
scwin.sortType = "";
scwin.sortOrder = "";
scwin.onpageload = function () {
  ed_wrkDt.setValue(scwin.dateStr);
  const params = {
    collMoneyFromDate: scwin.dateStr.substr(0, 6) + "01",
    collMoneyToDate: scwin.dateStr
  };
  dma_searchCollmoneyRcptDca.setJSON(params);
  $c.gus.cfDisableObjects($p, [ed_selectAmtAcctRecv]); //선택금액 disabled
};
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_coCd]);
  if (!ret) {
    return false;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_collMoneyFromDate.getValue(), ed_collMoneyToDate.getValue())) {
    $c.gus.cfAlertMsg($p, "입금일자 시작일자는 만기일자보다 이전 날짜 이어야 합니다.");
    ed_collMoneyToDate.focus();
    return;
  }
  ret = await $c.gus.cfValidate($p, [ed_collMoneyFromDate, ed_collMoneyToDate, ed_acctDeptCd]);
  if (!ret) {
    return;
  }
  const params = {
    coCd: ed_coCd.getValue() // 회사코드
    ,
    acctDeptCd: ed_acctDeptCd.getValue() // 청구부서
    ,
    collMoneyFromDate: ed_collMoneyFromDate.getValue() // 입금시작
    ,
    collMoneyToDate: ed_collMoneyToDate.getValue() // 입금종료
    ,
    clntNo: ed_clntNo.getValue()
  };

  //저장시 bind param
  dma_addCollMoney.set('queryDeptSearchStDate', ed_collMoneyFromDate.getValue());
  dma_addCollMoney.set('queryDeptSearchEndDate', ed_collMoneyToDate.getValue());

  // map 데이터셋에 정보설정
  dma_searchCollmoneyRcptDca.setJSON(params);
  var sortArr = gr_collmoneyRcptDcaRcptDca.getSortableStatus();
  for (var idx = 0; idx < sortArr; idx++) {
    if (idx != 0) {
      scwin.sortType += " ";
      scwin.sortOrder += " ";
    }
    scwin.sortType += sortArr[idx].colID;
    scwin.sortOrder += sortArr[idx].sortOrder;
  }
  $c.sbm.execute($p, sbm_searchCollmoneyRcptDca);
};

//---------------------------------------------------------------------
// 수금등록 저장시
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  // $c.gus.cfAlertMsg("f_Save ===>");
  //변경한 데이터가 있는지 체크한다. 
  if (ds_collmoneyRcptDca.getModifiedIndex().length < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("데이타"));
    return;
  }

  // 저장시 필수 입력 사항 Check
  let ret;
  ret = await $c.gus.cfValidate($p, [ed_coCd, ed_wrkDt]);
  if (!ret) {
    return;
  }
  // 필수 조건 입력 여부 Check (부서 날짜 검색시 이용됨)
  ret = await $c.gus.cfValidate($p, [ed_collMoneyFromDate, ed_collMoneyToDate]);
  if (!ret) {
    return;
  }
  let totCommiSsionAmt = 0;
  let totCommAmt = 0;
  let totInitAmt = 0;
  let totAcctRecvAmt = 0;
  let befClntNo = "";
  let totSetlAmt = 0;
  let totAcctRecvAmt1 = 0;
  let check = 0;
  for (var i = 0; i < ds_collmoneyRcptDca.getRowCount(); i++) {
    if (ds_collmoneyRcptDca.getCellData(i, "num") == "T") {
      let ChkRcpt = ds_collmoneyRcptDca.getCellData(i, "rcptDca");
      let ChkSetlAmt = ds_collmoneyRcptDca.getCellData(i, "setlAmt");
      for (var j = 0; j < ds_collmoneyRcptDca.getRowCount(); j++) {
        if (ds_collmoneyRcptDca.getCellData(j, "num") == "T") {
          if (ds_collmoneyRcptDca.getCellData(j, "rcptDca") == ChkRcpt) {
            totAcctRecvAmt1 = totAcctRecvAmt1 + parseFloat(ds_collmoneyRcptDca.getCellData(j, "ramt"));
          }
          check++;
        }
      }
      if (check > 1) {
        if (ChkSetlAmt < totAcctRecvAmt1) {
          $c.win.alert($p, "청구잔액이 입금잔액보다 클 수 없습니다.");
          return false;
        }
        totAcctRecvAmt1 = 0;
      }
    }

    //if (ds_collmoneyRcptDca.getCellData(i, "num") == "T") {
    if (ds_collmoneyRcptDca.getCellData(i, "num") == "T") {
      if (ds_collmoneyRcptDca.getCellData(i, "clntNo") != befClntNo) {
        totSetlAmt = totSetlAmt + ds_collmoneyRcptDca.getCellData(i, "setlAmt");
      }
      totCommiSsionAmt = totCommiSsionAmt + parseFloat(ds_collmoneyRcptDca.getCellData(i, "commiSsionAmt"));
      totInitAmt = totInitAmt + parseFloat(ds_collmoneyRcptDca.getCellData(i, "initAmt"));
      totAcctRecvAmt = totAcctRecvAmt + parseFloat(ds_collmoneyRcptDca.getCellData(i, "ramt"));
      befClntNo = ds_collmoneyRcptDca.getCellData(i, "clntNo");
    }
  }
  if (totCommiSsionAmt > 0 || totInitAmt > 0) {
    if (totSetlAmt + totCommiSsionAmt != totAcctRecvAmt + totInitAmt) {
      $c.win.alert($p, "선수금이나 수수료입력시는 청구잔액과 입금잔액이 동일하여야 합니다.");
      return false;
    }
  }
  ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret == true) {
    for (var i = 0; i < ds_collmoneyRcptDca.getRowCount(); i++) {
      totCommAmt = totCommAmt + parseFloat(ds_collmoneyRcptDca.getCellData(i, "commiSsionAmt"));
    }
    dma_addCollMoney.set("acctDeptCd", ds_collmoneyRcptDca.getCellData(0, "bilgAcctDeptCd"));
    dma_addCollMoney.set("commiSsionAmt", totCommiSsionAmt);
    if (totCommiSsionAmt == 0 && totInitAmt == 0) {
      dma_addCollMoney.set("collMoneyTotAmt", totAcctRecvAmt);
    } else if (totCommiSsionAmt > 0 || totInitAmt > 0) {
      dma_addCollMoney.set("collMoneyTotAmt", totSetlAmt);
    } else {
      $c.win.alert($p, "-금액은 입력할 수 없습니다.");
      return false;
    }
    console.log(dma_addCollMoney.getJSON());
    console.log(ds_collmoneyRcptDca.getAllJSON());
    //tr_saveAcctRecvCollMoney.Post();
    $c.sbm.execute($p, sbm_saveAcctRecvCollMoney);
  }
};

//-------------------------------------------------------------------------
// 조회(입금내역 조회) submitdone
//-------------------------------------------------------------------------
scwin.sbm_searchCollmoneyRcptDca_submitdone = function (e) {
  //console.log("▷▷ sbm_search_submitdone");
  //console.log( "dma_searchCollmoneyRcptDca => " + dma_searchCollmoneyRcptDca );
  //debugger;
  //if( e.responseJSON.resultDataSet[0].Code != 0 ) return;

  //if(e.responseJSON.GAUCE) {
  //ds_master.setJSON(e.responseJSON.GAUCE);
  //}

  let rowCnt = ds_collmoneyRcptDca.getRowCount();
  if (rowCnt < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    //cfHideDSWaitMsg(gr_collmoneyRcptDcaRcptDca);
    $c.gus.cfDisableBtnOnly($p, [btn_save]);
    return false;
  } else {
    if (scwin.sortType != "") {
      var sortOption = {
        sortIndex: scwin.sortType,
        sortOrder: scwin.sortOrder
      };
      ds_collmoneyRcptDca.multisort(sortOption);
      ds_collmoneyRcptDca.reform();
    } else {
      var sortOption = {
        sortIndex: "clntNo billRecvKey",
        sortOrder: "1 1"
      };
      ds_collmoneyRcptDca.multisort(sortOption);
      ds_collmoneyRcptDca.reform();
    }
  }
  //cfHideDSWaitMsg(gr_collmoneyRcptDcaRcptDca);
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
  ed_selectAmtAcctRecv.setValue(0);
  scwin.checkSearch = true; // 정상 조회 되었음.

  ed_totalRows.setValue(rowCnt);
};
scwin.sbm_searchCollmoneyRcptDca_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  scwin.f_setCompanyInfo();

  //2026.04.02 자회사이면 회사코드 검색 창 비활성화
  if (scwin.vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    $c.gus.cfDisableObjects($p, [udc_companyInfo]);
  }

  //디버깅용
  //ed_collMoneyFromDate.setValue("20050701");
  //ed_collMoneyToDate.setValue("20100731");
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  console.log("=== f_setCompanyInfo (자회사 회계 시스템 추가에 따른 설정)");

  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
  if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
    //udc_companyInfo.readOnlyCode = false;
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    // $c.gus.cfDisableObjects([udc_companyInfo ]);   
    // UDC 를 disable 처리
    //udc_companyInfo.readOnlyCode = true;
  }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_companyInfo.cfCommonPopUp(scwin.udc_companyInfo_callbackfunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_companyInfo_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (ed_coCd.options.hidVal != rtnList[0]) {
      scwin.f_initObj();
    }
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    ed_coCd.options.hidVal = rtnList[0];
    scwin.txtCoClsCd = rtnList[1];
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_acctDeptCd, ed_acctDeptNm]); //  귀속부서      
  $c.gus.cfInitObjects($p, [ed_clntNo, ed_clntNm]); //거래처    
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_companyInfo_onblurNameEvent = function (e) {
  ed_coCd.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
  console.log("====== udc_coCd_onclickEvent ==================");
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.gr_collmoneyRcptDcaRcptDca_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "num") {
    // 체크박스 클릭시 이벤트 처리(금액계산)
    scwin.collMoneyCheck(rowIndex);
    if (ds_collmoneyRcptDca.getCellData(rowIndex, "num") != "T") {
      //gr_collmoneyRcptDcaRcptDca.ColumnProp("commiSsionAmt", "Edit") = "None";
      //gr_collmoneyRcptDcaRcptDca.ColumnProp("initAmt", "Edit") = "None";
      gr_collmoneyRcptDcaRcptDca.setCellDisableEdit(rowIndex, "commiSsionAmt", true);
      gr_collmoneyRcptDcaRcptDca.setCellDisableEdit(rowIndex, "initAmt", true);
    } else {
      //gr_collmoneyRcptDcaRcptDca.ColumnProp("commiSsionAmt", "Edit") = "Numeric";
      //gr_collmoneyRcptDcaRcptDca.ColumnProp("initAmt", "Edit") = "Numeric";

      gr_collmoneyRcptDcaRcptDca.setCellDisableEdit(rowIndex, "commiSsionAmt", false);
      gr_collmoneyRcptDcaRcptDca.setCellDisableEdit(rowIndex, "initAmt", false);
      ed_wrkDt.setValue(ds_collmoneyRcptDca.getCellData(rowIndex, "susRecvInitamtOutbrDt"));
      scwin.f_JobCloseYN(ed_wrkDt);
    }
  }
  if (columnId == "slipNo" && rowIndex > 0) {
    if (!(ds_collmoneyRcptDca.getCellData(rowIndex, "slipNo") == null || ds_collmoneyRcptDca.getCellData(rowIndex, "slipNo") == "")) $c.gus.cfShowSlipInfo($p, ds_collmoneyRcptDca.getCellData(rowIndex, "slipNo"));
  }
  if (columnId == "acctRecvSlipNo" && rowIndex > 0) {
    if (!(ds_collmoneyRcptDca.getCellData(rowIndex, "acctRecvSlipNo") == null || ds_collmoneyRcptDca.getCellData(rowIndex, "acctRecvSlipNo") == "")) $c.gus.cfShowSlipInfo($p, ds_collmoneyRcptDca.getCellData(rowIndex, "acctRecvSlipNo"));
  }
};

//-------------------------------------------------------------------------
// 마감체크
//-------------------------------------------------------------------------
scwin.f_JobCloseYN = async function (ed_wrkDt) {
  var fromDate = "";
  var wrkNo = "";
  wrkNo = ACConstants.CLOSE_MONTH;
  fromDate = ed_wrkDt.getValue();
  fromDate = fromDate.substring(0, 6);

  //cfJobCloseYN(마감요청구분,마감년월,마감일,작업번호,관리번호,리턴구분);
  //var isClose = cfJobCloseYN("CUR",fromDate,"00",wrkNo,"0","ARR","N", ed_coCd.text);
  let isClose = await udc_closeYn.cfJobCloseYN("CUR", fromDate, "00", wrkNo, "0", "ARR", "N", ed_coCd.getValue());
  if (!isClose) {
    return; // 오류시 공통오류를 뱉어 주기에 return;
  }

  // 마감작업 조회시 해당값이 없을경우 오류 발생
  if (isClose[0] == "DNF") {
    ed_wrkDt.setValue(scwin.dateStr);
  }

  // 해당마감 작업에 대한 검사
  if (isClose[3] == "CUR") {
    if (isClose[0] == "0") {
      ed_wrkDt.setValue(scwin.dateStr);
    } else if (isClose[0] == "2") {
      ed_wrkDt.setValue(scwin.dateStr);
    } else {
      return true;
    }
  }
};

//-------------------------------------------------------------------------
// 체크박스 클릭이벤트 발생시 해당 금액을 화면에 표시하는 함수(수금대상)
//-------------------------------------------------------------------------
scwin.collMoneyCheck = function (rowIndex) {
  var totCommiSsionAmt = 0; // 총잔액
  var totAcctRecvAmt = 0; // 총채권금액

  for (var i = 0; i < ds_collmoneyRcptDca.getRowCount(); i++) {
    if (rowIndex != i && ds_collmoneyRcptDca.getCellData(i, "num") == "T") {
      if (ds_collmoneyRcptDca.getCellData(rowIndex, "acctRecvNo") == ds_collmoneyRcptDca.getCellData(i, "acctRecvNo")) {
        $c.gus.cfAlertMsg($p, "같은 채권내역을 두번이상 선택할 수 없습니다. 수금사항등록화면에서 수금등록하십시오");
        ds_collmoneyRcptDca.setCellData(rowIndex, "num", "0");
        return false;
      }
    }
  }
  if (ds_collmoneyRcptDca.getCellData(rowIndex, "num") == "T" && ds_collmoneyRcptDca.getCellData(rowIndex, "checkNum") == "F") {
    ed_selectAmtAcctRecv.setValue(parseInt(ed_selectAmtAcctRecv.getValue()) + parseInt(ds_collmoneyRcptDca.getCellData(rowIndex, "ramt")));
    ds_collmoneyRcptDca.setCellData(rowIndex, "checkNum", "T");
  } else if (ds_collmoneyRcptDca.getCellData(rowIndex, "num") == "F" && ds_collmoneyRcptDca.getCellData(rowIndex, "checkNum") == "T") {
    ed_selectAmtAcctRecv.setValue(parseInt(ed_selectAmtAcctRecv.getValue()) - parseInt(ds_collmoneyRcptDca.getCellData(rowIndex, "ramt")));
    ds_collmoneyRcptDca.setCellData(rowIndex, "initAmt", 0);
    ds_collmoneyRcptDca.setCellData(rowIndex, "commiSsionAmt", 0);
    ds_collmoneyRcptDca.setCellData(rowIndex, "checkNum", "F");
  }
};
scwin.ds_collmoneyRcptDca_oncelldatachange = function (info) {
  //console.log('1');
  //console.log(info);

  /*
  if ( colid == "initAmt") {
      if ( ds_collmoneyRcptDca.NameValue(row,"commiSsionAmt") > 0 )
      {
          alert("선수금입력시에는 수수료를 입력할 수 없습니다.")
          return false
      }
  }else if( colid == "commiSsionAmt") {
      if ( ds_collmoneyRcptDca.NameValue(row,"initAmt") > 0 )
      {
          alert("수수료입력시에는 선수금를 입력할 수 없습니다.")
          return false
      }
  }
  */

  var rowIndex = info.rowIndex;
  var colid = info.colID;
  //console.log(rowIndex);
  //console.log(info);

  if (colid == "initAmt") {
    if (ds_collmoneyRcptDca.getCellData(rowIndex, "commiSsionAmt") > 0) {
      $c.gus.cfAlertMsg($p, "선수금입력시에는 수수료를 입력할 수 없습니다.");
      return false;
    }
  } else if (colid == "commiSsionAmt") {
    if (ds_collmoneyRcptDca.getCellData(rowIndex, "initAmt") > 0) {
      $c.gus.cfAlertMsg($p, "수수료입력시에는 선수금를 입력할 수 없습니다.");
      return false;
    }
  }
};
scwin.ds_collmoneyRcptDca_onrowpositionchange = function (info) {
  /*
  if ( ds_collmoneyRcptDca.NameValue(row,"num" ) != "T" )
  {
       gr_collmoneyRcptDcaRcptDca.ColumnProp("commiSsionAmt", "Edit") = "None"
       gr_collmoneyRcptDcaRcptDca.ColumnProp("initAmt", "Edit") = "None"
  } else {
       gr_collmoneyRcptDcaRcptDca.ColumnProp("commiSsionAmt", "Edit") = "Numeric"
       gr_collmoneyRcptDcaRcptDca.ColumnProp("initAmt", "Edit") = "Numeric"
  }
  */

  var rowIndex = info.newRowIndex;
  if (ds_collmoneyRcptDca.getCellData(rowIndex, "num") != "T") {
    gr_collmoneyRcptDcaRcptDca.setCellReadOnly(rowIndex, "commiSsionAmt", true);
    gr_collmoneyRcptDcaRcptDca.setCellReadOnly(rowIndex, "initAmt", true);
    //gr_collmoneyRcptDcaRcptDca.setCellDisableEdit(rowIndex, "commiSsionAmt", true);
    //gr_collmoneyRcptDcaRcptDca.setCellDisableEdit(rowIndex, "initAmt", true);
  } else {
    gr_collmoneyRcptDcaRcptDca.setCellReadOnly(rowIndex, "commiSsionAmt", false);
    gr_collmoneyRcptDcaRcptDca.setCellReadOnly(rowIndex, "initAmt", false);
    //gr_collmoneyRcptDcaRcptDca.setCellDisableEdit(rowIndex, "commiSsionAmt", false);
    //gr_collmoneyRcptDcaRcptDca.setCellDisableEdit(rowIndex, "initAmt", false);
  }
};
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_acctDeptCd, ed_acctDeptNm, '2', 'ALL');
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->거래처, 2:조회->수금귀속부서, 3:조회->통장번호
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  if (select_code == '1' || select_code == '2') {
    let ret;
    ret = $c.gus.cfValidate($p, [ed_coCd]);
    if (!ret) {
      return;
    }
  }

  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  if (flag == "ALL") {
    cd = "";
    nm = "";
  } else {
    cd = orgObjCd.getValue();
    nm = orgObjNm.getValue();
  }
  switch (select_code) {
    // 조회조건용 거래처 PopUp 호출
    case '1':
      var param = "" + ed_coCd.getValue(); //자회사 회계시스템 추가사항
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callbackfunc, cd, nm, "T", null, null, null, null, param, null, null, null, null); // 거래처(모든 거래처를 다 조회한다.)
      //f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      scwin.checkSearch = false; // 정상조회여부 확인
      break;
    // 조회조건용 수금부서 PopUp 호출
    case '2':
      var param = ed_collMoneyFromDate.getValue().trim() + "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",,,"; //자회사 회계시스템 추가사항
      udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callbackfunc, cd, nm, "T", null, null, null, null, param, "450", "500", null, null); // 귀속부서			
      //f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      scwin.checkSearch = false; // 정상조회여부 확인
      break;
    case '3':
      udc_bankCd.cfCommonPopUp(scwin.udc_bankCd_callbackfunc, cd, nm, "T", null, null, null, null, null, null, null, null, null); // 통장명
      //통장은 2번째에 통장명이 있기 때문에 1번째와 2번째의 위치를 변경해서 넘겨준다.
      //f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      break;
    case '4':
      // 사업자번호
      udc_crn.cfCommonPopUp(scwin.udc_crn_callbackfunc, cd, nm, "T", null, null, null, null, null, null, null, null, null); //사업자번호
      //f_resultPopUp(orgObjCd,orgObjNm,rtnList);
      break;
    default:
      $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};
scwin.udc_bankCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_bankCd, ed_bankNm, '3', 'ALL');
};
scwin.udc_crn_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_crn, ed_crnNm, '4', 'ALL');
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_clntNo, ed_clntNm, '1', 'ALL');
};
scwin.btn_reset_onclick = function (e) {
  scwin.f_InitObjects();
};

//-------------------------------------------------------------------------
// 초기화 시킬 내역들 정의
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, table1, []);
  scwin.f_setCompanyInfo();
};
scwin.udc_clntNo_callbackfunc = function (rtnList) {
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntNo.setValue(rtnList[0]); // 코드값
    ed_clntNm.setValue(rtnList[1]); // 코드명
    ed_clntNo.options.hidVal = rtnList[0]; // HIDDEN 코드값
    ed_clntNm.options.hidVal = rtnList[1]; // HIDDEN 코드명
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
    ed_clntNo.options.hidVal = "";
    ed_clntNm.options.hidVal = "";
  }
};
scwin.udc_acctDeptCd_callbackfunc = function (rtnList) {
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_acctDeptCd.setValue(rtnList[0]); // 코드값
    ed_acctDeptNm.setValue(rtnList[1]); // 코드명
    ed_acctDeptCd.options.hidVal = rtnList[0]; // HIDDEN 코드값
    ed_acctDeptNm.options.hidVal = rtnList[1]; // HIDDEN 코드명
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
    ed_acctDeptCd.options.hidVal = "";
    ed_acctDeptNm.options.hidVal = "";
  }
};
scwin.udc_bankCd_callbackfunc = function (rtnList) {
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_bankCd.setValue(rtnList[0]); // 코드값
    ed_bankNm.setValue(rtnList[1]); // 코드명
    ed_bankCd.options.hidVal = rtnList[0]; // HIDDEN 코드값
    ed_bankNm.options.hidVal = rtnList[1]; // HIDDEN 코드명
  } else {
    ed_bankCd.setValue("");
    ed_bankNm.setValue("");
    ed_bankCd.options.hidVal = "";
    ed_bankNm.options.hidVal = "";
  }
};
scwin.udc_crn_callbackfunc = function (rtnList) {
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_crn.setValue(rtnList[0]); // 코드값
    ed_crnNm.setValue(rtnList[1]); // 코드명
    ed_crn.options.hidVal = rtnList[0]; // HIDDEN 코드값
    ed_crnNm.options.hidVal = rtnList[1]; // HIDDEN 코드명
  } else {
    ed_crn.setValue("");
    ed_crnNm.setValue("");
    ed_crn.options.hidVal = "";
    ed_crnNm.options.hidVal = "";
  }
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '1', 'CD');
};
scwin.udc_clntNo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '1', 'NM');
};
scwin.udc_crn_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_crnNm, '4', 'CD');
};
scwin.udc_crn_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_crnNm, '4', 'NM');
};
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '2', 'CD');
};
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '2', 'NM');
};
scwin.udc_bankCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_bankCd, ed_bankNm, '3', 'CD');
};
scwin.udc_bankCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_bankCd, ed_bankNm, '3', 'NM');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.options.hidVal) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.options.hidVal) {
      return;
    } else {
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
  }

  // 정상조회여부 확인
  if (select_code != "3") scwin.checkSearch = false;
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjNm.getValue().trim() != "" || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.options.hidVal = "";
  }
};
scwin.sbm_saveAcctRecvCollMoney_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == "0") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.checkRetrieveSave = "T";
    scwin.f_Retrieve();
    ed_wrkDt.setValue(scwin.dateStr); // 추가내역 작업일자 초기    
  }
};
scwin.f_GridToExcel = async function () {
  var fName = '가상계좌수금조회';
  if (ds_collmoneyRcptDca.getRowCount() <= 0) {
    $c.win.alert($p, "가상계좌수금내역이 존재하지않습니다.");
    return false;
  }
  await $c.data.downloadGridViewExcel($p, gr_collmoneyRcptDcaRcptDca, {
    fileName: fName + ".xlsx",
    sheetName: "가상계좌수금조회",
    type: "8+16"
  });
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'true',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'table1',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:75px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th '},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'회사코드',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',btnId:'btn_company',code:'coCd',codeId:'ed_coCd',id:'udc_companyInfo',mandatoryCode:'true',maxlengthCode:'3',name:'coNm',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'data',onloadCallbackFunc:'',popupGridHeadTitle:'회사코드,회사명',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',popupID:'retrieveDongbuGroupCompanyInfoPopup',popupTitle:'회사조회,회사코드,회사명',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validExpCode:'회사코드:yes','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'계정',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'lc_collMoneyCntSht',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_searchCollmoneyRcptDca.collMoneyCntSht'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'가수금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'선수금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'입금일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'collMoneyFromDate',refDataMap:'dma_searchCollmoneyRcptDca',style:'',id:'udc_collMoneyDate',refEdDt:'collMoneyToDate',edFromId:'ed_collMoneyFromDate',objTypeTo:'data',edToId:'ed_collMoneyToDate',objTypeFrom:'data',mandatoryFrom:'true',mandatoryTo:'true',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'가상계좌',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_rcptDca',placeholder:'',class:'form-control',ref:'data:dma_searchCollmoneyRcptDca.rcptDca'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'은행',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_bankCd',maxlengthCode:'2',allowCharCode:'0-9',nameId:'ed_bankNm',mandatoryName:'false',maxlengthName:'20',UpperFlagCode:'1',objTypeCode:'data',id:'udc_bankCd','ev:onclickEvent':'scwin.udc_bankCd_onclickEvent',selectID:'retrieveBankCdInfo','ev:onblurCodeEvent':'scwin.udc_bankCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bankCd_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'송금인',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_rcptrNm',placeholder:'',class:'form-control w150',objType:'data',maxlength:'50',ref:'data:dma_searchCollmoneyRcptDca.rcptrNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사업자번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_crn',allowCharCode:'0-9',maxlengthCode:'10',mandatoryCode:'true',mandatoryName:'false',objTypeName:'data',UpperFlagCode:'1',validExpCode:'사업자번호:yes:format=0000000000',validExpName:'사업자명:no:maxLength=70&notAllowed',maxlengthName:'50',nameId:'ed_crnNm',id:'udc_crn','ev:onclickEvent':'scwin.udc_crn_onclickEvent',selectID:'retrieveCrnInfo','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_crn_onblurNameEvent',refDataCollection:'dma_searchCollmoneyRcptDca',code:'crn',name:'crnNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_clntNo',objTypeCode:'data',validExpCode:'거래처번호:yes:format=000000',allowCharCode:'0-9',maxlengthCode:'6',mandatoryName:'false',mandatoryCode:'true',maxlengthName:'50',objTypeName:'data',validExpName:'거래처명:no:maxLength=70&notAllowed',nameId:'ed_clntNm',id:'udc_clntNo','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',selectID:'retrieveClntEmpNoList','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent',refDataCollection:'dma_searchCollmoneyRcptDca',code:'clntNo',name:'clntNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'청구부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_acctDeptCd',objTypeCode:'data',mandatoryCode:'true',validExpCode:'청구(수금)부서:yes:format=00000',maxlengthCode:'5',allowCharCode:'0-9',nameId:'ed_acctDeptNm',mandatoryName:'false',maxlengthName:'50',objTypeName:'data',id:'udc_acctDeptCd','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',selectID:'retrieveAcctDeptCdInfo6','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent',validTitle:'청구부서'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_reset',type:'button',class:'btn ico refresh','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_search',type:'button',class:'btn_cm sch',escape:'false',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_collmoneyRcptDcaRcptDca',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',dataList:'data:ds_collmoneyRcptDca',scrollByColumn:'false',style:'',id:'gr_collmoneyRcptDcaRcptDca',class:'wq_gvw',checkReadOnlyOnPasteEnable:'','ev:oncellclick':'scwin.gr_collmoneyRcptDcaRcptDca_oncellclick',visibleRowNum:'12',rowStatusVisible:'true',fixedColumn:'2',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'입금일자',blockSelect:'false',displayMode:'label',fixColumnWidth:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column11',value:'입금자명',blockSelect:'false',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',value:'사업자번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column9',value:'거래처명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column8',value:'거래처번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column7',value:'입금액',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column6',value:'입금잔액',blockSelect:'false',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'60',inputType:'text',id:'column5',value:'선택',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column4',value:'채권총액(미정리)',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column3',value:'청구금액',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'청구잔액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'수수료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'선수금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'청구일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'청구부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'매출부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'세금계산서번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'가상계좌번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'은행',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'susRecvInitamtOutbrDt',blockSelect:'false',displayMode:'label',readOnly:'true',colMerge:'true',upperColumn:'rcptrNm'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'rcptrNm',blockSelect:'false',displayMode:'label',colMerge:'true',readOnly:'true',upperColumn:'susRecvInitamtOutbrDt'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'crn',blockSelect:'false',displayMode:'label',colMerge:'true',readOnly:'true',upperColumn:'susRecvInitamtOutbrDt'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'clntNm',blockSelect:'false',displayMode:'label',colMerge:'true',textAlign:'left',upperColumn:'clntNo'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'clntNo',blockSelect:'false',displayMode:'label',colMerge:'true',readOnly:'true',textAlign:'left',upperColumn:'susRecvInitamtOutbrDt'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',width:'100',inputType:'text',id:'amt',blockSelect:'false',displayMode:'label',colMerge:'true',readOnly:'true',dataType:'number',displayFormat:'#,##0',upperColumn:'susRecvInitamtOutbrDt'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',width:'100',inputType:'text',id:'setlAmt',blockSelect:'false',displayMode:'label',colMerge:'true',displayFormat:'#,##0',dataType:'number',upperColumn:'susRecvInitamtOutbrDt'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'60',inputType:'checkbox',id:'num',blockSelect:'false',displayMode:'label',trueValue:'T',falseValue:'F',dataType:'text',valueType:'other'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',width:'150',inputType:'text',id:'acctRecvTotAmt',blockSelect:'false',displayMode:'label',colMerge:'true',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',width:'100',inputType:'text',id:'bilgAmt',blockSelect:'false',displayMode:'label',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'ramt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'commiSsionAmt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'initAmt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctRecvOutbrDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgAcctDeptNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAcctDeptCd',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mgntNo',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rcptDca',value:'',displayMode:'label',readOnly:'true',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bankNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left',colMerge:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{tagname:'ul',id:'',class:'amt-wrap'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'작업일자',class:'req'}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_wrkDt',class:'form-control cal',calendarValueType:'yearMonthDate',mandatory:'true',objType:'data',displayFormat:'yyyy/MM/dd',placeholder:' ',ref:'data:dma_addCollMoney.wrkDt',title:'작업일자'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'선택금액(원)',class:'req'}},{T:1,N:'xf:input',A:{style:'',id:'ed_selectAmtAcctRecv',placeholder:'',class:'form-control amt tar',mandatory:'true',objType:'key',displayFormat:'#,###',maxlength:'20',dataType:'number'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_save',label:'수금등록',class:'btn ',userAuth:'C','ev:onclick':'scwin.btn_save_onclick'}}]},{T:1,N:'w2:udc_comChkRes',A:{codeId:'',id:'udc_closeYn',nameId:'',selectID:'',style:'width:%; height:px; ;visibility:hidden;',class:'dsN'}}]}]}]}]}]})