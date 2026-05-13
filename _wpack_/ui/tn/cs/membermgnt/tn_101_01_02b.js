/*amd /ui/tn/cs/membermgnt/tn_101_01_02b.xml 65294 7c6e3be44ab2532607598a629ad988abba82705b2ee2c87d90b5a1a4e8821bdd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'startDt',name:'시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mbrId',name:'회원ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'busiNm',name:'사업부명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'admitYn',name:'승인여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_comSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_clnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_master_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mbrId',name:'회원ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbrNm',name:'회원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'passwd',name:'비밀번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'faxNo',name:'팩스번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitYn',name:'승인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'appDt',name:'신청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiSeq',name:'사업자순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'사업부명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiClsCd',name:'사업자구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'대표자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'biztypeNm',name:'종목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcondNm',name:'업태명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiZip',name:'사업자우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiAddr',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiAddr1',name:'사업자주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiAddr2',name:'사업자주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mailZip',name:'우편물우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mailAddr',name:'우편물주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mailAddr1',name:'우편물주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mailAddr2',name:'우편물주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbrClsCd',name:'회원구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbrClsCdNm',name:'회원구분코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrYn',name:'컨테이너여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkYn',name:'벌크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKndCd',name:'차량종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKndCdNm',name:'차량종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmCd',name:'차량규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmCdNm',name:'차량규격명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransLcnsStDt',name:'보세운송면허시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransLcnsEndDt',name:'보세운송면허종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefKcgCd1',name:'선호화종코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefKcgCd2',name:'선호화종코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefKcgCd3',name:'선호화종코드3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefDtcClsCd',name:'선호거리구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unqItm',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lbsYn',name:'LBS관제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdmaNo',name:'CDMA번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pdaNo',name:'PDANO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntCrn',name:'거래처사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'privGrpId',name:'권한그룹ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefKcgNm1',name:'선호화종1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefKcgNm2',name:'선호화종2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefKcgNm3',name:'선호화종3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainDst1',name:'주요구간1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainDst2',name:'주요구간2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainDst3',name:'주요구간3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKindCd1',name:'차량종류코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmCd1',name:'차량규격코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKindNm1',name:'차량종류명1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmNm1',name:'차량규격명1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclCnt1',name:'차량대수1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKindCd2',name:'차량종류코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmCd2',name:'차량규격코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKindNm2',name:'차량종류명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmNm2',name:'차량규격명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclCnt2',name:'차량대수2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKindCd3',name:'차량종류코드3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmCd3',name:'차량규격코드3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKindNm3',name:'차량종류명3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmNm3',name:'차량규격명3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclCnt3',name:'차량대수3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKindCd4',name:'차량종류코드4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmCd4',name:'차량규격코드4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKindNm4',name:'차량종류명4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmNm4',name:'차량규격명4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclCnt4',name:'차량대수4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKindCd5',name:'차량종류코드5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmCd5',name:'차량규격코드5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKindNm5',name:'차량종류명5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmNm5',name:'차량규격명5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclCnt5',name:'차량대수5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKindNm1',name:'장비종류명1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm1',name:'장비규격명1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKindNm2',name:'장비종류명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm2',name:'장비규격명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKindNm3',name:'장비종류명3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm3',name:'장비규격명3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKindNm4',name:'장비종류명4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm4',name:'장비규격명4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKindNm5',name:'장비종류명5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm5',name:'장비규격명5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCnt1',name:'장비대수1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCnt2',name:'장비대수2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCnt3',name:'장비대수3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCnt4',name:'장비대수4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCnt5',name:'장비대수5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'baseAddr',name:'보유거점주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsNm',name:'거점형태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spc',name:'거점평수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lggRptLmt',name:'적재물배상책임한도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col103',name:'name103',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_comSearch',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_comSearch',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.cs.membermgnt.RetrieveMbrAdmitAppPrsCondCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.tn.cs.membermgnt.SaveTmcMbrAdmitInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_master","key":"IN_DS3"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.appDt = ""; //신청일자
scwin.busiNm = ""; //회사명
scwin.admitYn = ""; //조회

//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.appDt = $c.util.isEmpty($p, $c.data.getParameter($p, "appDt")) ? "" : $c.data.getParameter($p, "appDt"); //신청일자
  scwin.busiNm = $c.util.isEmpty($p, $c.data.getParameter($p, "busiNm")) ? "" : $c.data.getParameter($p, "busiNm"); //회사명
  scwin.admitYn = $c.util.isEmpty($p, $c.data.getParameter($p, "admitYn")) ? "" : $c.data.getParameter($p, "admitYn"); //조회
  scwin.prevRow = 0;
  scwin.CNST_MBR_CLS_MB = "05"; //MB차주

  //공통코드 조회
  const codeOptions = [{
    grpCd: "TN001",
    compID: "acb_searchMbrId,gr_master:mbrClsCd"
  }, {
    grpCd: "TN002",
    compID: "lc_privGrpId"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackSetCommonCode);
  const comboOptions = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "acb_lobranCd"
  }];
  $c.data.setGauceUtil($p, comboOptions, function () {
    $c.gus.cfTurnCreateFlag($p, true);
    //$c.gus.cfInitHidVal([ed_clntNo, ed_clntCrn]);
    //scwin.f_setDefaultData();
    scwin.f_contentsDisable();
    if (!$c.gus.cfIsNull($p, scwin.busiNm)) {
      ed_searchBusiNm.setValue(scwin.busiNm);
    }
    if (!$c.gus.cfIsNull($p, scwin.admitYn)) {
      acb_searchAdmitYn.setValue(scwin.admitYn);
      scwin.f_retrieve();
    }
  });
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.curDate = $c.date.getServerDateTime($p);
  udc_fromToCalendar.setInitDate(scwin.curDate, scwin.curDate);

  //acb_searchAdmitYn.setSelectedIndex(1);

  if (!$c.gus.cfIsNull($p, scwin.appDt)) {
    ed_startDt.setValue(scwin.appDt);
    ed_endDt.setValue(scwin.appDt);
  }
  $c.data.setPopupTitle($p, "회원승인");
};

//-------------------------------------------------------------------------
// 항목 Disable 초기화
//-------------------------------------------------------------------------
scwin.f_contentsDisable = function () {
  $c.gus.cfDisableObjects($p, [tbl_mbrInfo, tbl_mbrDetailInfo, tbl_vehclInf, tbl_confirm]);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  let chkVal = await $c.gus.cfValidate($p, [tbl_search]);
  if (!chkVal) return;
  if (!$c.gus.cfIsAfterDate($p, ed_startDt.getValue(), ed_endDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_startDt.Focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 회원정보-거래처 확인
//-------------------------------------------------------------------------
scwin.f_checkMbrClntLnkYn = function (clntNo) {
  if ($c.gus.cfIsNull($p, clntNo)) return;
  dma_comSearch.set("sysCd", "MemberEBC");
  dma_comSearch.set("queryId", "checkMbrClntLnkYn");
  dma_comSearch.set("param1", clntNo);
  $c.sbm.execute($p, sbm_comSearch).then(function (e) {
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_clnt.setJSON(e.responseJSON.GAUCE);
    dma_comSearch.setEmptyValue();
    if (ds_clnt.getTotalRow() != 0) {
      $c.gus.cfAlertMsg($p, "회원ID [" + ds_clnt.getTotalRow(0, 'col1') + "]에 이미 연결된 거래처입니다.");
      $c.gus.cfInitObjects($p, [ed_clntNo, ed_clntNm, ed_clntCrn]);
      ed_clntCrn.setValue("");
      ed_clntNo.focus();
    }
  });
};

//-------------------------------------------------------------------------
// 거래처팝업
//-------------------------------------------------------------------------
scwin.f_openClntPopUp = function (pWinCloseTF) {
  if (pWinCloseTF == 'T' && $c.gus.cfCanOpenPopup($p, ed_clntNo, ed_clntNm) == false) {
    if (ed_clntNo.getValue() == "") $c.gus.cfInitObjects($p, tbl_confirm);
    scwin.f_setClntBtnTitle();
    return;
  }
  udc_clntNo.cfCommonPopUp(scwin.callBackClntList, ed_clntNo.getValue(), ed_clntNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, "F", "거래처,거래처코드/명");
};
scwin.callBackClntList = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    if ($c.gus.cfIsNull($p, rtnList[4])) {
      ed_clntCrn.setDisplayFormat("");
    } else {
      switch (rtnList[4].length) {
        case 10:
          ed_clntCrn.setDisplayFormat("###-##-#####");
          break;
        case 13:
          ed_clntCrn.setDisplayFormat("######-#######");
          break;
        default:
          ed_clntCrn.setDisplayFormat("");
      }
    }
    $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm, ["", "", ed_clntCrn]);
    scwin.f_checkMbrClntLnkYn(ed_clntNo.getValue());
    scwin.f_setClntBtnTitle();
  } else {
    if (ed_clntNo.getValue() != "") {
      scwin.f_checkMbrClntLnkYn(ed_clntNo.getValue());
    }
    ed_clntCrn.setValue("");
  }
};

//-------------------------------------------------------------------------
// 거래처팝업(사업자등록)
//-------------------------------------------------------------------------
scwin.f_openClntCrnPopUp = function (pWinCloseTF) {
  if (pWinCloseTF == 'T' && $c.gus.cfCanOpenPopup($p, ed_clntCrn, ed_clntNm) == false) {
    if (ed_clntCrn.getValue() == "") $c.gus.cfInitObjects($p, tbl_confirm);
    scwin.f_setClntBtnTitle();
    return;
  }
  udc_clntCrn.cfCommonPopUp(scwin.callBackClntInfo, ed_clntCrn.getValue(), "", pWinCloseTF, null, null, null, null, null, null, null, null, null, null, "F", "거래처사업자(주민)번호팝업, 사업자(주민)번호");
};
scwin.callBackClntInfo = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    if ($c.gus.cfIsNull($p, rtnList[0])) {
      ed_clntCrn.setDisplayFormat("");
    } else {
      switch (rtnList[0].length) {
        case 10:
          ed_clntCrn.setDisplayFormat("###-##-#####");
          break;
        case 13:
          ed_clntCrn.setDisplayFormat("######-#######");
          break;
        default:
          ed_clntCrn.setDisplayFormat("");
      }
    }
    $c.gus.cfSetReturnValue($p, rtnList, ed_clntCrn, ed_clntNm, [ed_clntNo]);
    scwin.f_checkMbrClntLnkYn(ed_clntCrn.getValue());
    scwin.f_setClntBtnTitle();
  } else {
    if (ed_clntCrn.getValue() == "") {
      ed_clntNo.setValue("");
      ed_clntNm.setValue("");
    } else {
      var curRow = ds_master.getRowPosition() == "" ? 0 : ds_master.getRowPosition();
      if (ed_clntCrn.getValue() == ds_master.getCellData(curRow, "crn")) {
        ds_master.modifyRowStatus(curRow, "R");
      }
    }
  }
};

//-------------------------------------------------------------------------
// 거래처등록
//-------------------------------------------------------------------------
scwin.f_openClntRegYnPopup = function () {
  var data = {
    clntNo: ed_clntNo.getValue(),
    mode: $c.gus.cfIsNull($p, ed_clntNo.getValue()) ? "convert" : "admitYn",
    mbrId: ed_mbrId.getValue()
  };
  var opts = {
    id: "tn_101_01_06b",
    popupName: "거래처등록",
    modal: true,
    type: "browserPopup",
    title: "거래처등록",
    width: 1600,
    height: 900,
    scroll: true
  };
  var rtnList = $c.win.openPopup($p, "/ui/tn/cs/clntmgnt/tn_101_01_06b.xml", opts, data);
  if (rtnList != null) {
    $c.gus.cfSetValue($p, ed_clntNo, rtnList.clntNo);
    $c.gus.cfSetValue($p, ed_clntNm, rtnList.clntNm);
    if (rtnList.crn) {
      switch (rtnList.crn.trim().length) {
        case 10:
          ed_clntCrn.setDisplayFormatter("###-##-#####");
          break;
        case 13:
          ed_clntCrn.setDisplayFormatter("######-#######");
          break;
        default:
          ed_clntCrn.setDisplayFormatter("");
      }
    }
    $c.gus.cfSetValue($p, ed_clntCrn, rtnList.crn);
  }
  scwin.f_setClntBtnTitle();
  $c.gus.cfPrepareObjectHidVal($p, ds_master, ds_master.getRowPosition(), ["clntNo", "clntNm", "clntCrn"], [ed_clntNo, ed_clntNm, ed_clntCrn]);
};

//-------------------------------------------------------------------------
// 회원 가입 등록
//-------------------------------------------------------------------------
scwin.f_save = async function () {
  let chkVal = await scwin.f_validate();
  if (!chkVal) return;

  //번호확인
  /*if(scwin.f_chkPhone()){
      return;
  }*/

  let conf = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_001));
  if (conf) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// validate check
//-------------------------------------------------------------------------
scwin.f_validate = async function () {
  if (!$c.data.isModified($p, ds_master)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["회원승인신청현황"]);
    return false;
  }
  var json = ds_master.getUpdatedIndex();
  for (var row = 0; row < json.length; row++) {
    var i = json[row];

    //if(ds_master.getRowStatus(i) == "R" || ds_master.getRowStatus(i) == "D") continue;

    if ($c.gus.cfIsNull($p, ds_master.getCellData(i, "clntNo"))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["거래처번호"]);
      return false;
    }
    if (ds_master.getCellData(i, "crn").replace("-", "").replace("-", "").trim() != ds_master.getCellData(i, "clntCrn")) {
      await $c.gus.cfAlertMsg($p, "회원정보와 거래처정보의 사업자번호가 일치하지 않습니다");
      await $c.win.alert($p, "crn : " + ds_master.getCellData(i, "crn").replace("-", "").replace("-", "").trim());
      await $c.win.alert($p, "clntCrn : " + ds_master.getCellData(i, "clntCrn"));
      return false;
    }
    if (chk_admitYn.getValue() == "1" && $c.gus.cfIsNull($p, ds_master.getCellData(i, "privGrpId"))) {
      await $c.gus.cfAlertMsg($p, "권한그룹을 선택하십시오.");
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 전화번호 check
//-------------------------------------------------------------------------
scwin.f_chkPhone = async function () {
  var rtnVal = false;
  for (var i = 0; i < ds_master.getTotalRow(); i++) {
    if (ds_master.getRowStatus(i) == "C" || ds_master.getRowStatus(i) == "U") {
      var mpChk = scwin.f_phoneChkSave(ds_master.getCellData(i, "mpNo"), "휴대폰");
      if (mpChk) {
        rtnVal = true;
        ds_master.setRowPosition(i);
        break;
      }
      var pdaChk = scwin.f_phoneChkSave(ds_master.getCellData(i, "pdaNo"), "PDA");
      if (pdaChk) {
        rtnVal = true;
        ds_master.setRowPosition(i);
        break;
      }
    }
  }
  return rtnVal;
};
scwin.f_phoneChkSave = function (num, str) {
  var rtnChk = false;
  if (num == "") return false;
  var phonestr = /^0\d{1,2}-\d{3,4}-\d{4}$/;
  if (num != "") {
    /* 20080916
    if (!num.match(phonestr))
    {
        alert(str+"번호 형식이 올바르지 않거나 '-'를 생략하셨습니다.");
        rtnChk = true;       
        return rtnChk;         
    }        
    
         var str = num.substr(1,2) 
    
    if (!(str == "10" || str == "11" || str == "13" || str == "16" || str == "17" || str == "18" || str == "19" || str == "2-" || str == "31" || str == "32" || str == "33" || str == "41"|| str =="42" || str == "43" || str == "51" || str == "52" || str == "53"|| str == "54" || str =="55" || str =="61" || str =="62" || str =="63"  || str =="64")) {
        alert("지역 번호를 정확하게 입력하세요.");
        rtnChk = true;
        return rtnChk;
    }
    */
  }
  return rtnChk;
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_deleteRow = function () {
  if (ds_master.getRowStatus(ds_master.getRowPosition()) == "R" && ds_master.getCellData(ds_master.getRowPosition(), "admitYn") == "1") {
    $c.gus.cfAlertMsg($p, "승인된 회원은 삭세할 수 없습니다.");
    return false;
  }
  var rowidx = ds_master.getRowPosition();
  ds_master.deleteRow(rowidx);
  gr_master.setFocusedCell(rowidx, 0);
  $c.gus.cfPrepareObjectHidVal($p, ds_master, ds_master.getRowPosition(), ["clntNo", "clntNm", "clntCrn"], [ed_clntNo, ed_clntNm, ed_clntCrn]);
  scwin.f_setClntBtnTitle();
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_cancelRow = function () {
  ds_master.undoRow(ds_master.getRowPosition());
  $c.gus.cfPrepareObjectHidVal($p, ds_master, ds_master.getRowPosition(), ["clntNo", "clntNm", "clntCrn"], [ed_clntNo, ed_clntNm, ed_clntCrn]);
  scwin.f_setClntBtnTitle();
};
scwin.isMB = function (row) {
  return ds_master.getCellData(row, "mbrClsCd") == scwin.CNST_MBR_CLS_MB;
};

//-------------------------------------------------------------------------
// 버튼 값 설정
//-------------------------------------------------------------------------
scwin.f_setClntBtnTitle = function () {
  btn_clntReg.setLabel($c.gus.cfIsNull($p, ed_clntNo.getValue()) ? "거래처등록" : "거래처조회");
};

//-------------------------------------------------------------------------
// Object enable/disbale
//-------------------------------------------------------------------------
scwin.f_toggleObj = function (mode, obj) {
  if ($c.gus.cfIsNull($p, obj)) return;
  mode == true ? $c.gus.cfEnableObjects($p, obj) : $c.gus.cfDisableObjects($p, obj);
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_master.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  } else {
    gr_master.setFocusedCell(0, 0);
    ds_master.setRowJSON(0);
  }
  $c.gus.cfDisableObjects($p, [tbl_mbrInfo, tbl_mbrDetailInfo, tbl_vehclInf, ed_clntNm, ica_admitDt]);
  scwin.f_toggleObj(acb_searchAdmitYn.getValue() == "0", [ed_clntNo, btn_clntNo, ed_clntCrn, btn_clntCrn, btn_clntReg, chk_admitYn]);
  scwin.f_toggleObj(acb_searchAdmitYn.getValue() == "0", [btn_deleteRow, btn_cancelRow, btn_save]);
  $c.gus.cfSetHiddenValue($p, ed_clntNo, ed_clntNo.getValue());
  $c.gus.cfSetHiddenValue($p, ed_clntCrn, ed_clntCrn.getValue());
  $c.gus.cfGoPrevPosition($p, gr_master, scwin.prevRow);

  //승인버튼 타이틀 변경
  if (acb_searchAdmitYn.getValue() == "0") {
    //미승인
    btn_clntReg.setLabel("거래처등록");
  } else {
    //승인
    btn_clntReg.setDisabled(false);
    btn_clntReg.setLabel("거래처조회");
    btn_clntReg.setDisabled(true);
  }
};

//저장 완료
scwin.sbm_save_submitdone = function (e) {
  console.log("scwin.sbm_save_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_retrieve();
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//조회 버튼
scwin.btn_search_onclick = function (e) {
  $c.sbm.execute($p, sbm_retrieve);
};

//거래처 찾기 버튼
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openClntPopUp('F');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_openClntPopUp('T');
};

//거래처사업자번호 찾기 버튼
scwin.udc_clntCrn_onclickEvent = function (e) {
  scwin.f_openClntCrnPopUp('F');
};
scwin.udc_clntCrn_onblurCodeEvent = function (e) {
  scwin.f_openClntCrnPopUp('T');
};

//거래처 등록 버튼
scwin.btn_clntReg_onclick = function (e) {
  scwin.f_openClntRegYnPopup();
};

//승인여부 값 변경 > 날짜 설정 및 권한 활성화
scwin.chk_admitYn_onviewchange = function (info) {
  if (info.checked == true) {
    ica_admitDt.setValue($c.date.getServerDateTime($p));
    lc_privGrpId.setDisabled(false);
  } else {
    ica_admitDt.setValue("");
    lc_privGrpId.setDisabled(true);
  }
};

//저장 버튼
scwin.btn_save_onclick = function (e) {
  scwin.f_save();
};

//그리드 row 변경
scwin.gr_master_onrowindexchange = function (rowIndex, oldRow) {
  scwin.f_toggleObj(scwin.isMB(rowIndex) && acb_searchAdmitYn.getValue() == "0", [chk_lbsYn, ed_pdaNo]);
  scwin.f_toggleObj(acb_searchAdmitYn.getValue() == "0" && chk_admitYn.getValue() == "1", [lc_privGrpId]);
  scwin.f_toggleObj(ds_master.getRowStatus(rowIndex) != "D" && ds_master.getCellData(rowIndex, "admitYn") == "0", [ed_clntNo, btn_clntNo, ed_clntCrn, btn_clntCrn, btn_clntReg, chk_admitYn]);
  scwin.f_setClntBtnTitle();

  //권한 그룹 콤보값 셋팅
  lc_privGrpId.setValue(ds_master.getCellData(rowIndex, "privGrpId"));

  //$c.gus.cfPrepareObjectHidVal(this, rowIndex, ["clntNo", "clntNm", "clntCrn"], [ed_clntNo, ed_clntNm, ed_clntCrn]);
};
scwin.chk_admitYn_onchange = function (info) {};
scwin.ds_master_oncelldatachange = function (info) {
  if (info.colID == "admitYn") {
    if (info.newValue == "") {
      ds_master.setCellData(info.rowIndex, info.colID, "0");
    }
  }
};

//권한그룹 onViewChange
scwin.lc_privGrpId_onviewchange = function (info) {
  var curRow = ds_master.getRowPosition() == "" ? 0 : ds_master.getRowPosition();
  ds_master.setCellData(curRow, "privGrpId", lc_privGrpId.getValue());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobranCd',search:'start',style:'width:150px;',submenuSize:'auto',validExp:'신청점소:no',searchTarget:'value',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.lobranCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'dma_search',refEdDt:'endDt',refStDt:'startDt',style:'',edFromId:'ed_startDt',edToId:'ed_endDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'Data',objTypeTo:'Data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회원구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_searchMbrId',search:'start',style:'width:150px;',submenuSize:'auto',searchTarget:'value',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.mbrId'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회사명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_searchBusiNm',placeholder:'',style:'width:150px;',ref:'data:dma_search.busiNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_searchAdmitYn',search:'start',style:'width:150px;',submenuSize:'auto',searchTarget:'value',allOption:'',chooseOption:'',ref:'data:dma_search.admitYn',emptyItem:'true',emptyIndex:'1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'승인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미승인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'회원승인 신청현황',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox gvwflex'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_master',style:'',autoFit:'allColumn',id:'gr_master',visibleRowNum:'34',class:'wq_gvw',rowStatusVisible:'true','ev:onrowindexchange':'scwin.gr_master_onrowindexchange',dataDragSelect:'false',dataDragDrop:'true',readOnly:'true',focusMode:'both'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column1',value:'승인여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'회원ID',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column15',value:'회원구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'회사명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column11',value:'사업자(주민)번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'회원신청일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'신청지사',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'admitYn',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mbrId',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'mbrClsCd',displayMode:'label',textAlign:'left',customFormatter:'scwin.f_customFormatter'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'busiNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'crn',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'appDt',displayMode:'label',textAlign:'left',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lobranNm',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spn_totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnRowDelObj:'btn_deleteRow',btnCancelObj:'btn_cancelRow',EngYn:'N',btnCancelYn:'Y',btnRowDelYn:'Y',btnRowAddYn:'N',btnDelYn:'N',rowDelObjType:'ctrlBtn',cancelObjType:'ctrlBtn',rowDelFunction:'scwin.f_deleteRow',cancelFunction:'scwin.f_cancelRow'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'회원정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_mbrInfo',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'아이디',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mbrId',placeholder:'',style:'width:150px;',ref:'data:ds_master.mbrId'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'회원구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mbrClsCdNm',placeholder:'',style:'width:150px;',ref:'data:ds_master.mbrClsCdNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'회사명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_busiNm',placeholder:'',style:'width:150px;',ref:'data:ds_master.busiNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업자등록번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_crn',placeholder:'',style:'width:150px;',objType:'Data',maxlength:'13',ref:'data:ds_master.crn'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'대표자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_repstNm',placeholder:'',style:'width:150px;',ref:'data:ds_master.repstNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_busiAddr',placeholder:'',style:'',ref:'data:ds_master.busiAddr'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차담당자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mbrNm',placeholder:'',style:'width:150px;',ref:'data:ds_master.mbrNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'휴대전화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mpNo',placeholder:'',style:'width:150px;',ref:'data:ds_master.mpNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유선전화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_telNo',placeholder:'',style:'width:150px;',ref:'data:ds_master.telNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'팩스번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_faxNo',placeholder:'',style:'width:150px;',ref:'data:ds_master.faxNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이메일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_email',placeholder:'',style:'width:150px;',ref:'data:ds_master.email'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'data:ds_master.bulkYn',appearance:'full',style:'',id:'chk_bulkYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'data:ds_master.cntrYn',appearance:'full',style:'',id:'chk_cntrYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상세정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_mbrDetailInfo',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유차량1',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group',style:''},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_vehclKindNm1',placeholder:'',class:'',ref:'data:ds_master.vehclKindNm1'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_vehclNrmNm1',placeholder:'',class:'',ref:'data:ds_master.vehclNrmNm1'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_vehclCnt1',placeholder:'',class:'',ref:'data:ds_master.vehclCnt1'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유차량2',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_vehclKindNm2',placeholder:'',class:'',ref:'data:ds_master.vehclKindNm2'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_vehclNrmNm2',placeholder:'',class:'',ref:'data:ds_master.vehclNrmNm2'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_vehclCnt2',placeholder:'',class:'',ref:'data:ds_master.vehclCnt2'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유차량3',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_vehclKindNm3',placeholder:'',class:'',ref:'data:ds_master.vehclKindNm3'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_vehclNrmNm3',placeholder:'',class:'',ref:'data:ds_master.vehclNrmNm3'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_vehclCnt3',placeholder:'',class:'',ref:'data:ds_master.vehclCnt3'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유차량4',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_vehclKindNm4',placeholder:'',class:'',ref:'data:ds_master.vehclKindNm4'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_vehclNrmNm4',placeholder:'',class:'',ref:'data:ds_master.vehclNrmNm4'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_vehclCnt4',placeholder:'',class:'',ref:'data:ds_master.vehclCnt4'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유차량5',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_vehclKindNm5',placeholder:'',class:'',ref:'data:ds_master.vehclKindNm5'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_vehclNrmNm5',placeholder:'',class:'',ref:'data:ds_master.vehclNrmNm5'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_vehclCnt5',placeholder:'',class:'',ref:'data:ds_master.vehclCnt5'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선호화종1',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_prefKcgNm1',placeholder:'',style:'width:150px;',ref:'data:ds_master.prefKcgNm1'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선호화종2',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_prefKcgNm2',placeholder:'',style:'width:150px;',ref:'data:ds_master.prefKcgNm2'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선호화종3',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_prefKcgNm3',placeholder:'',style:'width:150px;',ref:'data:ds_master.prefKcgNm3'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선호구간1',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mainDst1',placeholder:'',style:'width:150px;',ref:'data:ds_master.mainDst1'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선호구간2',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mainDst2',placeholder:'',style:'width:150px;',ref:'data:ds_master.mainDst2'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선호구간3',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_mainDst3',placeholder:'',style:'width:150px;',ref:'data:ds_master.mainDst3'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적재물배상 책임한도',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_lggRptLmt',placeholder:'',class:'tar',ref:'data:ds_master.lggRptLmt'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'백만원',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유장비1',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_eqKindNm1',placeholder:'',style:'width:150px;',ref:'data:ds_master.eqKindNm1'}},{T:1,N:'xf:input',A:{class:'',id:'ed_eqNrmNm1',placeholder:'',style:'width:150px;',ref:'data:ds_master.eqNrmNm1'}},{T:1,N:'xf:input',A:{class:'',id:'ed_eqCnt1',placeholder:'',style:'width:150px;',ref:'data:ds_master.eqCnt1'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유장비2',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_eqKindNm2',placeholder:'',style:'width:150px;',ref:'data:ds_master.eqKindNm2'}},{T:1,N:'xf:input',A:{class:'',id:'ed_eqNrmNm2',placeholder:'',style:'width:150px;',ref:'data:ds_master.eqNrmNm2'}},{T:1,N:'xf:input',A:{class:'',id:'ed_eqCnt2',placeholder:'',style:'width:150px;',ref:'data:ds_master.eqCnt2'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유장비3',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_eqKindNm3',placeholder:'',style:'width:150px;',ref:'data:ds_master.eqKindNm3'}},{T:1,N:'xf:input',A:{class:'',id:'ed_eqNrmNm3',placeholder:'',style:'width:150px;',ref:'data:ds_master.eqNrmNm3'}},{T:1,N:'xf:input',A:{class:'',id:'ed_eqCnt3',placeholder:'',style:'width:150px;',ref:'data:ds_master.eqCnt3'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유장비4',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_eqKindNm4',placeholder:'',style:'width:150px;',ref:'data:ds_master.eqKindNm4'}},{T:1,N:'xf:input',A:{class:'',id:'ed_eqNrmNm4',placeholder:'',style:'width:150px;',ref:'data:ds_master.eqNrmNm4'}},{T:1,N:'xf:input',A:{class:'',id:'ed_eqCnt4',placeholder:'',style:'width:150px;',ref:'data:ds_master.eqCnt4'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유장비5',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_eqKindNm5',placeholder:'',style:'width:150px;',ref:'data:ds_master.eqKindNm5'}},{T:1,N:'xf:input',A:{class:'',id:'ed_eqNrmNm5',placeholder:'',style:'width:150px;',ref:'data:ds_master.eqNrmNm5'}},{T:1,N:'xf:input',A:{class:'',id:'ed_eqCnt5',placeholder:'',style:'width:150px;',ref:'data:ds_master.eqCnt5'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유거점주소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_baseAddr',placeholder:'',style:'',ref:'data:ds_master.baseAddr'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거점형태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_wrkPlClsNm',placeholder:'',style:'width:150px;',ref:'data:ds_master.wrkPlClsNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'평수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_spc',placeholder:'',style:'width:100px;',ref:'data:ds_master.spc'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'평',ref:'',style:'',userData2:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'차량정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_vehclInf',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNo',placeholder:'',style:'width:150px;',ref:'data:ds_master.vehclNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclKndCdNm',placeholder:'',style:'width:150px;',ref:'data:ds_master.vehclKndCdNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'규격',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNrmCdNm',placeholder:'',style:'width:150px;',ref:'data:ds_master.vehclNrmCdNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LBS여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_lbsYn',ref:'data:ds_master.lbsYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'스마트폰번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_pdaNo',placeholder:'',style:'width:150px;',ref:'data:ds_master.pdaNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'특이사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txt_unqItm',style:'',ref:'data:ds_master.unqItm'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'확인내역',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_confirm',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'N',popupID:'pop_clntNo',style:'width: 250px;',btnId:'btn_clntNo',codeId:'ed_clntNo',id:'udc_clntNo',nameId:'ed_clntNm',objTypeCode:'data',mandatoryCode:'true',validExpCode:'거래처번호:yes',refDataCollection:'ds_master',code:'clntNo',name:'clntNm',readOnlyName:'true','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',selectID:'retrieveClntList_tpro','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent',keepCodeSwitch:'Y',keepNameSwitch:'Y'}},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_clntCrn',codeId:'ed_clntCrn',hideName:'true',id:'udc_clntCrn',nameId:'ed_clntCrnNm',objTypeCode:'data',popupID:'pop_clntCrn',readOnlyName:'true',refDataCollection:'ds_master',style:'width: 250px;',selectID:'retrieveClntCrnInfo_tpro','ev:onblurCodeEvent':'scwin.udc_clntCrn_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntCrn_onclickEvent',codeDisplayFormat:'###-##-#####',code:'clntCrn',keepCodeSwitch:'Y',keepNameSwitch:'Y'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_clntReg',style:'',type:'button','ev:onclick':'scwin.btn_clntReg_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처등록'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인여부/승인일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select',A:{ref:'data:ds_master.admitYn',appearance:'full',style:'',id:'chk_admitYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'','ev:onchange':'scwin.chk_admitYn_onchange','ev:onviewchange':'scwin.chk_admitYn_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ica_admitDt',class:'',calendarValueType:'yearMonthDate',objType:'data',ref:'data:ds_master.admitDt'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'권한그룹',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_privGrpId',style:'width:150px;',submenuSize:'fixed',ref:'',chooseOptionLabel:'',emptyItem:'true','ev:onviewchange':'scwin.lc_privGrpId_onviewchange'},E:[{T:1,N:'xf:choices'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})