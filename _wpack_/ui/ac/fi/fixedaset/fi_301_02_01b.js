/*amd /ui/ac/fi/fixedaset/fi_301_02_01b.xml 97856 3f5a22c9fbfedf36214af7848191d6cd0c6321dcacae1bad45152cd5addab648 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'ds_master',baseNode:'list',repeatNode:'map',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_master_onbeforerowpositionchange','ev:onrowpositionchange':'scwin.ds_master_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixedAsetNo',dataType:'text',name:'자산;번호'}},{T:1,N:'w2:column',A:{id:'orgFixedAsetNo',dataType:'text',name:'최초;고정자산번호'}},{T:1,N:'w2:column',A:{id:'fixedAsetNm',dataType:'text',name:'자산명'}},{T:1,N:'w2:column',A:{id:'asetKndCd',dataType:'text',name:'자산;종류'}},{T:1,N:'w2:column',A:{id:'asetKndNm',dataType:'text',name:'자산;종류명'}},{T:1,N:'w2:column',A:{id:'acqAmt',dataType:'number',name:'취득;가액'}},{T:1,N:'w2:column',A:{id:'acqDt',dataType:'text',name:'취득;일자'}},{T:1,N:'w2:column',A:{id:'qty',dataType:'number',name:'수량'}},{T:1,N:'w2:column',A:{id:'svcLife',dataType:'number',name:'내용;년수'}},{T:1,N:'w2:column',A:{id:'svcLifeMonth',dataType:'number',name:'내용;월수'}},{T:1,N:'w2:column',A:{id:'asetPatternCd',dataType:'text',name:'자산유형'}},{T:1,N:'w2:column',A:{id:'asetPatternNm',dataType:'text',name:'자산유형명'}},{T:1,N:'w2:column',A:{id:'crcCd',dataType:'text',name:'환종'}},{T:1,N:'w2:column',A:{id:'exchRt',dataType:'number',name:'환율'}},{T:1,N:'w2:column',A:{id:'acqAmtFcrc',dataType:'number',name:'외화금액'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',dataType:'text',name:'귀속부서'}},{T:1,N:'w2:column',A:{id:'dispAmt',dataType:'number',name:'매각금액'}},{T:1,N:'w2:column',A:{id:'disuseAmt',dataType:'number',name:'폐기금액'}},{T:1,N:'w2:column',A:{id:'tranAmt',dataType:'number',name:'이관금액'}},{T:1,N:'w2:column',A:{id:'capExpdAmt',dataType:'number',name:'자본적지출'}},{T:1,N:'w2:column',A:{id:'address',dataType:'text',name:'소재지'}},{T:1,N:'w2:column',A:{id:'tempTaxDeductYn',dataType:'text',name:'임시투자세액공제여부'}},{T:1,N:'w2:column',A:{id:'rmk',dataType:'text',name:'비고'}},{T:1,N:'w2:column',A:{id:'area',dataType:'number',name:'취득면적'}},{T:1,N:'w2:column',A:{id:'realArea',dataType:'number',name:'실면적'}},{T:1,N:'w2:column',A:{id:'pyCnt',dataType:'number',name:'평수'}},{T:1,N:'w2:column',A:{id:'ancdLpr',dataType:'number',name:'공시지가'}},{T:1,N:'w2:column',A:{id:'ancdLprStdDt',dataType:'text',name:'공시지가기준일'}},{T:1,N:'w2:column',A:{id:'clntNo1',dataType:'text',name:'거래처번호'}},{T:1,N:'w2:column',A:{id:'zip',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siteAddr1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siteAddr2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNm2',name:'고정자산명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acqDtStDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDtEndDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'orgFixedAsetNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetPatternCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetKndCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'retrieveClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'procDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqRegNo',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_removeAset'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixedAsetNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'removeDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rmk',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_landinfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lotNoSeq',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lotNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'landCat',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lotArea',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lotAcqAmt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempAsetNo',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_aset',baseNode:'list',repeatNode:'map',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_aset_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetPatternCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetAcqAcctCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetKndNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcLife',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcLifeMonth',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgAcqAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqAmtFcrc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siteAddr1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siteAddr2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempTaxDeductYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eachRegYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'area',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realArea',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pyCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ancdLpr',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ancdLprStdDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'capExpdAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'disuseAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reappraiseAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprCumAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqCls',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsStdt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsEnddt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lsClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lsClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranBfFixedAsetNo',name:'name45',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_asetPattern',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'areaMgntYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetAcqAcctCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetAcqAcctNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprAcctCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprAcctCdPcost',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprAcctCdPcostNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprAcctNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'provAcctCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'provAcctNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_asetPattern',action:'/ac.fi.fixedaset.RetreiveFixedAsetPatternListCMD.do?useYn=1',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_asetPattern","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_asetPattern_submitdone','ev:submiterror':'scwin.sbm_asetPattern_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_asetKnd',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_asetKnd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_asetKnd_submitdone','ev:submiterror':'scwin.sbm_asetKnd_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.fixedaset.RetrieveAssetsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_aset',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_aset","key":"OUT_DS1"},{"id":"ds_landinfo","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_aset","key":"OUT_DS1"},{"id":"ds_landinfo","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ac.fi.fixedaset.ChangeAssetsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_aset","key":"OUT_DS1"}, {"id":"ds_landinfo","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_aset","key":"OUT_DS1"}, {"id":"ds_landinfo","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_master_submitdone','ev:submiterror':'scwin.sbm_master_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_removeAset',action:'/ac.fi.fixedaset.RemoveAssetsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_removeAset","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_removeAset_submitdone','ev:submiterror':'scwin.sbm_removeAset_submiterror',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_301_02_01b
// 이름     : 고정자산조회및변경
// 경로     : 회계/재무회계/고정자산/
// 작 성 자 : 오영재
// 작 업 일 : 2025-12-15
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================

// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.KOREA_WON = ACConstants.KOREA_WON; //원화코드
scwin.isInPost = false; //TR 컴포넌트가 데이터를 Post 중인지 여부
scwin.vCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd;
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.isSubCompany = false;
scwin.today = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.vAcctDeptCd = scwin.memJson.acctDeptCd;
scwin.vEmpNo = scwin.memJson.empNo;
scwin.hid_srchAcctDeptCd = "";
//hidden
scwin.hid_asetKndCd = "";
scwin.hid_asetKndNm = "";
scwin.hid_asetPatternNm = "";
scwin.hid_asetAcqAcctCd = "";
scwin.hid_clntNo1 = "";
scwin.hid_clntNm1 = "";
scwin.hid_lsClntNo = "";
scwin.hid_asetAcctDeptCd = "";
scwin.onpageload = function () {
  $c.gus.cfDisableBtn($p, [btn_update, btn_save, btn_removeAset, ed_removeDt]);
  const codeOptions = [{
    grpCd: "FI028",
    compID: "lc_acqCls"
  }, {
    grpCd: "ZZ006",
    compID: "lc_crcCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  //자산유형 조회
  $c.sbm.execute($p, sbm_asetPattern);
  scwin.f_setFileUpDownFrame('1', '1', '1', '1', '1', '1');
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ed_acqDtStDt, ed_acqDtEndDt, chb_areaMgntYn]);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  ed_acqDtStDt.setValue(scwin.today.substring(0, 6) + "01");
  ed_acqDtEndDt.setValue(scwin.today);
  ed_acqDtStDt.focus();
  chk_IncluYn.setValue(1);
};
scwin.onUdcCompleted = function () {
  scwin.f_FieldClear();
  $c.gus.cfTurnCreateFlag($p, true);
  $c.gus.cfDisableKey($p);
  scwin.f_AsetOnOff(false); //자산입력 disable
  scwin.f_AreaMgntOnOff(false);
  scwin.f_setCompanyInfo();
};

/**
 * 자회사 회계 시스템 추가에 따른 설정 
 */
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를 '동부 EXPRESS'로 Default set
  if (scwin.vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.isSubCompany = true;
  } else {
    scwin.vCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  scwin.txtCoCd = scwin.vCoCd;
  scwin.txtCoClsCd = scwin.vCoClsCd;
  scwin.f_PopUpCompanyInfo('T'); //최상위 부서 조회
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }

  // 회사코드가 바뀌면 귀속부서에 해당 회사의 최상위레벨 부서를 셋팅한다.
  if (scwin.isSubCompany == true) {
    let acctYear = ""; //결산년월
    let coCd = ""; //회사코드

    coCd = scwin.txtCoCd;

    //결산년월 (회계년도)
    if (ed_acqDtEndDt.getValue() != "") {
      acctYear = ed_acqDtEndDt.getValue().substring(0, 4);
    } else {
      acctYear = scwin.today.substring(0, 4);
    }

    // 최상위부서조회
    udc_srchAcctDeptCd.setSelectId("retrieveUppermostAcctDeptCdInfo");
    udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_callbackfunc, scwin.txtCoCd, acctYear, pWinCloseTF, null, null, null, null, null, null, null, null, null);
  } else {
    ed_srchAcctDeptCd.setValue("00000");
    scwin.hid_srchAcctDeptCd = "00000";
    scwin.f_srchDeptPopUp('T');
  }
};
scwin.sbm_search_submitdone = function (e) {
  //$c.gus.cfAlertMsg(MSG_CM_INF_001);
  let rowCnt = ds_master.getRowCount();
  if (rowCnt > 0) {
    ds_master.sort('fixedAsetNo', 0);
    ds_master.setRowPosition(0);
  }
  ed_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    ds_aset.removeAll();
    ds_landinfo.removeAll();
    $c.gus.cfDisableBtn($p, [btn_update, btn_save, btn_removeAset, ed_removeDt]);
    lc_asetPatternCd.setRef("");
  } else {
    scwin.f_AsetOnOff(false);
    scwin.f_AreaMgntOnOff(false);
    $c.gus.cfDisableBtn($p, [btn_save]);
    scwin.f_SrchAsetKnd('');
    scwin.f_SrchAsetContent();
    gr_master.setFocusedCell(0, 0, false);
    scwin.setParam();
  }
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
  }
  if (rowCnt == 0) {
    scwin.f_setFileUpDownFrame('1', '1', '1', '1', '1', '1');
  } else {
    let fixedAsetNo = ds_master.getCellData(ds_master.getRowPosition(), "fixedAsetNo");
    let fixedAsetHistClsCd = ds_master.getCellData(ds_master.getRowPosition(), "fixedAsetHistClsCd");
    let slipNo = ds_master.getCellData(ds_master.getRowPosition(), "slipNo");
    let slipKndCd = ds_master.getCellData(ds_master.getRowPosition(), "slipKndCd");
    let apprvReqNo = ds_master.getCellData(ds_master.getRowPosition(), "apprvReqNo");
    let fixedAsetApprvYn = ds_master.getCellData(ds_master.getRowPosition(), "fixedAsetApprvYn");
    //12.16 임시 주석
    scwin.f_setFileUpDownFrame(fixedAsetNo, fixedAsetHistClsCd, slipNo, slipKndCd, apprvReqNo, fixedAsetApprvYn);
  }
  var idx = lc_srchAsetPatternCd.getSelectedIndex();
  chb_areaMgntYn.setValue(ds_asetPattern.getCellData(idx, 'areaMgntYn'));
};
scwin.sbm_search_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.sbm_removeAset_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_removeAset_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret;
  ret = await scwin.f_RetrieveValidate();
  if (!ret) {
    return false;
  }
  if (chk_IncluYn.getValue() == "1") {
    dma_search.set("retrieveClsCd", "1");
  } else {
    dma_search.set("retrieveClsCd", "");
  }

  //ds_search.UseChangeInfo = false;

  dma_search.set("acqDtStDt", ed_acqDtStDt.getValue()); //취득일자(부터)
  dma_search.set("acqDtEndDt", ed_acqDtEndDt.getValue()); // 취득일자(까지)
  dma_search.set("asetPatternCd", lc_srchAsetPatternCd.getValue()); // 유형 
  //dma_search.set("acctDeptCd", scwin.hid_srchAcctDeptCd);            // 부서 코드-->
  dma_search.set("acctDeptCd", ed_srchAcctDeptCd.getValue()); //부서 코드--> 2026.04.04 수정
  dma_search.set("acctDeptNm", ed_srchAcctDeptNm.getValue()); // 부서명 -->
  dma_search.set("fixedAsetNo", ed_srchFixedAsetNo.getValue()); //고정자산번호 -->	
  dma_search.set("orgFixedAsetNo", ed_srchOrgFixedAsetNo.getValue()); // 고정자산번호
  dma_search.set("coCd", scwin.txtCoCd); // 회사코드
  dma_search.set("coClsCd", scwin.txtCoClsCd); // 회사 구분 코드
  dma_search.set("eqRegNo", ed_eqRegNo.getValue()); // 차량번호

  //tr_search.post();
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회 검증
//-------------------------------------------------------------------------
scwin.f_RetrieveValidate = async function () {
  let ret;
  ret = await $c.gus.cfValidate($p, [ed_acqDtStDt, ed_acqDtEndDt, ed_srchAcctDeptCd]);
  if (!ret) {
    return;
  }
  if (ds_aset.getRowCount() > 0 && ds_aset.getModifiedIndex().length > 0) {
    ret = await $c.win.confirm($p, MSG_CM_CRM_005 + "1");
    if (ret == false) return false;
  }
  if (ds_landinfo.getRowCount() > 0 && ds_landinfo.getModifiedIndex().length > 0) {
    ret = await $c.win.confirm($p, MSG_CM_CRM_005 + "2");
    if (ret == false) return false;
  }
  ret = await $c.gus.cfValidate($p, [tbl_search]);
  if (!ret) {
    return false;
  }

  //취득 일자 체크
  if ($c.gus.cfIsNull($p, ed_acqDtStDt.getValue()) && !$c.gus.cfIsNull($p, ed_acqDtEndDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["취득일자"]);
    ed_acqDtStDt.focus();
    return false;
  }
  if (!$c.gus.cfIsNull($p, ed_acqDtStDt.getValue()) && $c.gus.cfIsNull($p, ed_acqDtEndDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["취득일자"]);
    ed_acqDtEndDt.focus();
    return false;
  }
  if (!$c.gus.cfIsNull($p, ed_acqDtStDt.getValue()) && !$c.gus.cfIsNull($p, ed_acqDtEndDt.getValue())) {
    //if (!$c.gus.cfValidateValue(ed_acqDtEndDt.getValue(),"minDate=" + ed_acqDtStDt.getValue())) {
    if ($c.date.diffDate($p, ed_acqDtStDt.getValue(), ed_acqDtEndDt.getValue()) < 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      ed_acqDtStDt.focus();
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let ret;
  if (ds_aset.getModifiedIndex().length < 1 && ds_landinfo.getModifiedIndex().length < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("자료"));
  } else {
    //입력 validation
    ret = await scwin.f_Validation();
    if (!ret) {
      return;
    }
    ret = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (ret) {
      scwin.isInPost = true;
      //tr_master.post();
      $c.sbm.execute($p, sbm_master);
      scwin.isInPost = false;
    }
  }
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  scwin.f_AsetOnOff(true);
  var flag = false;
  if (chb_areaMgntYn.getValue() == '1') {
    flag = true;
  }
  scwin.f_AreaMgntOnOff(flag); //지번지목입력 enable
  $c.gus.cfEnableObjects($p, [btn_asetHistory, btn_deprHistory]); //자산이력,감가상각이력조회 버튼 enable
  $c.gus.cfDisableBtn($p, [btn_update]);
  ed_fixedAsetNm.focus();
};

//-------------------------------------------------------------------------
// 입력 Validation
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  let ret;
  ret = await scwin.f_ValidateAset();
  if (ret == false) return false;
  ret = await scwin.f_ValidateAreaMgnt();
  if (ret == false) return false;
  return true;
};

//-------------------------------------------------------------------------
// 자산입력 Validation
//-------------------------------------------------------------------------
scwin.f_ValidateAset = async function () {
  let ret;
  ret = await $c.gus.cfValidate($p, [ed_fixedAsetNm]);
  if (!ret) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 면적관리 입력 Validation
//-------------------------------------------------------------------------
scwin.f_ValidateAreaMgnt = async function () {
  //면적관리를 하지 않으면 리턴
  if (chb_areaMgntYn.getValue() == 0) return true;
  if ($c.gus.cfIsNull($p, ed_zip.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["우편번호"]);
    ed_zip.focus();
    return false;
  }
  if ($c.gus.cfIsNull($p, ed_siteAddr1.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["주소"]);
    ed_zip.focus();
    return false;
  }
  if ($c.gus.cfIsNull($p, ed_siteAddr2.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["상세주소"]);
    ed_siteAddr2.focus();
    return false;
  }
  if ($c.gus.cfIsNull($p, ed_area.getValue()) || parseInt(ed_area.getValue()) <= 0) {
    $c.gus.cfAlertMsg($p, "면적은 0보다 큰 값이어야 합니다.");
    ed_area.focus();
    return false;
  }
  if ($c.gus.cfIsNull($p, ed_pyCnt.getValue()) || parseInt(ed_pyCnt.getValue()) <= 0) {
    $c.gus.cfAlertMsg($p, "평수는 0보다 큰 값이어야 합니다.");
    ed_pyCnt.focus();
    return false;
  }
  let validArray = [{
    id: "lotNo",
    name: "지번",
    mandatory: true,
    maxByteLength: 100
  }, {
    id: "landCat",
    name: "지목",
    mandatory: true,
    maxByteLength: 100
  }, {
    id: "area",
    name: "면적",
    mandatory: true
  }, {
    id: "acqAmt",
    name: "취득가액",
    mandatory: true,
    valid: "AlphaNum"
  }];

  //if (!$c.gus.cfValidate([gr_landinfo])) return false;

  var res = await $c.gus.cfValidateGrid($p, gr_landinfo, null, null, validArray, "지번지목리스트");
  if (!res) {
    return false;
  }
  if (ds_landinfo.getRowCount() < 1) {
    $c.gus.cfAlertMsg($p, "지번_지목 내역을 한 행이상 입력해야 합니다.");
    return false;
  }
  let lotAreaSum = 0;
  for (let i = 0; i < ds_landinfo.getRowCount(); i++) {
    lotAreaSum += Number(ds_landinfo.getCellData(i, "lotArea") || 0);
  }

  //if (ds_landinfo.NameSum("lotArea", 0, 0) != parseInt(ed_area.text)) {
  if (lotAreaSum != parseInt(ed_area.getValue())) {
    $c.gus.cfAlertMsg($p, "면적과 지번면적 합계가 틀립니다.");
    ed_area.focus();
    return false;
  }
  let lotAcqAmtSum = 0;
  for (let i = 0; i < ds_landinfo.getRowCount(); i++) {
    lotAcqAmtSum += Number(ds_landinfo.getCellData(i, "lotAcqAmt") || 0);
  }

  //if (ds_landinfo.NameSum("lotAcqAmt", 0, 0) != parseInt(ed_acqAmt.text)) {
  if (lotAcqAmtSum != parseInt(ed_acqAmt.getValue())) {
    $c.gus.cfAlertMsg($p, "취득가액과  지번취득가액 합계가 틀립니다.");
    ed_acqAmt.focus();
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 지번지목  Dataset RowPosition 검색
//-------------------------------------------------------------------------
scwin.f_FindLandInfo = function (fixedAsetNo) {
  if ($c.gus.cfIsNull($p, fixedAsetNo)) return 0;

  //return ds_landinfo.NameValueRow("fixedAsetNo",fixedAsetNo)
  return ds_landinfo.getMatchedIndex("fixedAsetNo", fixedAsetNo, true);
};

//-------------------------------------------------------------------------
// 자산내역 조회
//-------------------------------------------------------------------------
scwin.f_SrchAsetContent = async function () {
  let rowPosi = ds_master.getRowPosition();
  let fixedAsetNo = ds_master.getCellData(rowPosi, "fixedAsetNo");
  let assetCoCd = ds_master.getCellData(rowPosi, "coCd");
  let assetCoClsCd = ds_master.getCellData(rowPosi, "coClsCd");
  if (fixedAsetNo != "") {
    if (assetCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
      // 자회사인 경우에만  회사코드 check
      /*
      tr_aset.Action = "/ac.fi.fixedaset.RetrieveAssetsContentsCMD.do"
                  + "?fixedAsetNo=" + fixedAsetNo +"&coCd="+assetCoCd +"&coClsCd="+assetCoClsCd; 
      */
      sbm_aset.action = "/ac.fi.fixedaset.RetrieveAssetsContentsCMD.do?fixedAsetNo=" + fixedAsetNo + "&coCd=" + assetCoCd + "&coClsCd=" + assetCoClsCd;
    } else {
      /*
      tr_aset.Action = "/ac.fi.fixedaset.RetrieveAssetsContentsCMD.do"
                  + "?fixedAsetNo=" + fixedAsetNo;  
      */
      sbm_aset.action = "/ac.fi.fixedaset.RetrieveAssetsContentsCMD.do?fixedAsetNo=" + fixedAsetNo;
    }
    ds_aset.removeAll();
    ds_landinfo.removeAll();

    //tr_aset.Post();
    var res = await $c.sbm.execute($p, sbm_aset);
    ds_aset.setRowPosition(0);
    ds_aset.modifyAllStatus("R");
    if (ds_aset.getTotalRow() > 0) {
      lc_asetPatternCd.setRef("data:ds_aset.asetPatternCd");
    } else {
      lc_asetPatternCd.setRef("");
    }
    dma_removeAset.set("fixedAsetNo", "");
    ed_removeDt.setValue("");
    scwin.f_checkRemoveBtn(); //무형자산제거버튼 활성화 체크
  }

  /*
  ds_aset.DataID = "/ac.fi.fixedaset.RetrieveAssetsContentsCMD.do"
                              + "?fixedAsetNo=" + ds_master.NameString(ds_master.RowPosition,"fixedAsetNo");
  ds_aset.Reset();
  */
};

//-------------------------------------------------------------------------
// 고정자산 입력 Enable/Disable
//-------------------------------------------------------------------------
scwin.f_AsetOnOff = function (bEnable) {
  //(bEnable==true) ? cfEnableObjects(tbl_aset) : cfDisableObjects(tbl_aset);
  if (bEnable) {
    $c.gus.cfEnableObjects($p, [ed_fixedAsetNm, ed_zip, ed_siteAddr2, chb_tempTaxDeductYn, ed_rmk, ed_clntNo1, lc_acqCls, ed_acqClsStdt, ed_acqClsEnddt]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_fixedAsetNm, ed_zip, ed_siteAddr2, chb_tempTaxDeductYn, ed_rmk, ed_clntNo1, lc_acqCls, ed_acqClsStdt, ed_acqClsEnddt, ed_lsClntNo, btn_lsClntNm]);
  }
  //txt_svcLife.value = "";
};

//-------------------------------------------------------------------------
// 면적관리자산일 경우에  입력 컨트롤 Enable/Disable
//-------------------------------------------------------------------------
scwin.f_AreaMgntOnOff = function (bEnable) {
  if (bEnable) {
    $c.gus.cfEnableObjects($p, [ed_area, ed_pyCnt, ed_ancdLpr, ed_ancdLprStdDt, btn_addLandRow, btn_delLandRow, btn_cancelLandRow, gr_landinfo]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_area, ed_realArea, ed_pyCnt, ed_ancdLpr, ed_ancdLprStdDt, btn_addLandRow, btn_delLandRow, btn_cancelLandRow, gr_landinfo]);
  }
};

//-------------------------------------------------------------------------
// 자산종류 조회
//-------------------------------------------------------------------------
scwin.f_SrchAsetKnd = function (asetKndCd) {
  /*
  ds_asetKnd.DataID = "/ac.fi.fixedaset.RetrieveFixedAsetKndListCMD.do"
                          + "?asetPatternCd=" + f_GetPatternCd(lc_asetPatternCd.Index)
                          + "&asetKndCd=" + asetKndCd;
  ds_asetKnd.Reset();
  */

  let strAction = "/ac.fi.fixedaset.RetrieveFixedAsetKndListCMD.do?asetPatternCd=" + lc_asetPatternCd.getValue() + "&asetKndCd=" + asetKndCd;
  console.log("strAction =>" + strAction);
  sbm_asetKnd.action = strAction;
  $c.sbm.execute($p, sbm_asetKnd);
};
scwin.sbm_asetKnd_submitdone = function (e) {};
scwin.sbm_asetKnd_submiterror = function (e) {};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_PopUp = function (flag, cdObj, nmObj, hidObj, nextObj, sIsEvent, sQueryID, sWhere, sWidth) {
  let param1, param2;
  if (cdObj.getValue() != "") {
    param1 = sIsEvent == 'T' ? cdObj.getValue().trim() : "";
    param2 = "";
    //bReverse = false;
  } else {
    param1 = "";
    param2 = sIsEvent == 'T' ? nmObj.getValue() : "";
    //bReverse = true;
  }
  if (flag == "1") {
    //귀속부서 
    udc_srchAcctDeptCd.setSelectId(sQueryID);
    udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_callbackfunc, param1, param2, sIsEvent, null, null, null, null, sWhere, sWidth, null, null, null);
  } else if (flag == "1-1") {
    //귀속부서 : 데이터
    ed_acqAcctDeptCd.setSelectId(sQueryID);
    ed_acqAcctDeptCd.cfCommonPopUp(scwin.udc_acqAcctDeptCd_callbackfunc, param1, param2, sIsEvent, null, null, null, null, sWhere, sWidth, null, null, null);
  } else if (flag == "2") {
    //리스거래처
    udc_lsClntNo.setSelectId(sQueryID);
    udc_lsClntNo.cfCommonPopUp(scwin.udc_lsClntNo_callbackfunc, param1, param2, sIsEvent, null, null, null, null, sWhere, sWidth, null, null, null);
  }
};

//귀속부서 : 데이터
scwin.udc_acqAcctDeptCd_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_acqAcctDeptCd.setValue(rtnList[0]);
    ed_acqAcctDeptNm.setValue(rtnList[1]);
    ed_acqAcctDeptCd.options.hidVal = rtnList[0];
  } else {
    ed_acqAcctDeptCd.setValue("");
    ed_acqAcctDeptNm.setValue("");
    ed_acqAcctDeptCd.options.hidVal = "";
  }
};
//리스거래처
scwin.udc_lsClntNo_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_lsClntNo.setValue(rtnList[0]);
    ed_lsClntNm.setValue(rtnList[1]);
    ed_lsClntNo.options.hidVal = rtnList[0];
  } else {
    ed_lsClntNo.setValue("");
    ed_lsClntNm.setValue("");
    ed_lsClntNo.options.hidVal = "";
  }
};
scwin.udc_eqRegNo_callbackfunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_eqRegCd, ed_eqRegNo);
};

//-------------------------------------------------------------------------
// 자산 귀속부서코드 팝업(from)
//-------------------------------------------------------------------------
scwin.f_asetDeptPopUp = function (sIsEvent) {
  let param = "";
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사인 경우에만  회사코드 check
    param = "," + scwin.txtCoCd + "," + scwin.txtCoClsCd;
  }
  scwin.f_PopUp("1-1", ed_acqAcctDeptCd, ed_acqAcctDeptNm, scwin.hid_asetAcctDeptCd, ed_zip, sIsEvent, "retrieveAcctDeptCdInfo6", param, "410");
};

//-------------------------------------------------------------------------
// 조회 귀속부서코드 팝업
//-------------------------------------------------------------------------
scwin.f_srchDeptPopUp = function (sIsEvent) {
  let param = "";
  // 자회사 회계 시스템인 경우에는 자회사 소속 귀속부서만 조회   
  if (scwin.isSubCompany) {
    param = "," + scwin.vCoCd + "," + scwin.vCoClsCd;
  }
  scwin.f_PopUp('1', ed_srchAcctDeptCd, ed_srchAcctDeptNm, scwin.hid_srchAcctDeptCd, ed_srchAcctDeptCd, sIsEvent, "retrieveAcctDeptCdInfo6", param, "410");

  //txt_srchAcctDeptNm.Focus();
  ed_srchAcctDeptNm.focus();
};

//-------------------------------------------------------------------------
// 우편번호팝업
//-------------------------------------------------------------------------
scwin.f_zipPopUp = async function (ed_zip, addr1, addr2) {
  /*
  var rtnList = new Array();
  var popupResult = window.showModalDialog("/cm/zz/newzipcodePopup.jsp", "",
          "dialogHeight:400px;dialogWidth:530px;center:yes;scroll:no;status:no;help:no");
   // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
  if (popupResult != null) {
      ed_zip.Text = popupResult.zip;
      txt_addr1.value = popupResult.addr1;
      txt_addr2.focus();
  } else {
      ed_zip.Text = "";
      txt_addr1.value = "";
      txt_addr2.value = "";
      ed_zip.focus();
  }
  */

  let data = {};
  let popupResult;
  const options = {
    id: "newzipcodePopup",
    type: "browserPopup",
    modal: true,
    popupName: "우편번호",
    width: 530,
    height: 400
  };
  popupResult = await $c.win.openPopup($p, "/ui/cm/zz/newzipcodePopup.xml", options, data);
  if (popupResult != null) {
    ed_zip.setValue(popupResult.zip);
    ed_siteAddr1.setValue(popupResult.addr1);
    ed_siteAddr2.focus();
  } else {
    ed_zip.setValue("");
    ed_siteAddr1.setValue("");
    ed_siteAddr2.setValue("");
    ed_zip.focus();
  }
};

//-------------------------------------------------------------------------
// 자산변경이력 팝업
//-------------------------------------------------------------------------
scwin.f_PopUpAsetHistory = async function () {
  //if (ds_master.getRowPosition() < 0) {
  if (ds_master.getTotalRow() < 1) {
    $c.gus.cfAlertMsg($p, "선택된 행이 없습니다.");
    return;
  }

  //var width = "996", height = "590";
  //var sFeature = "center:yes;dialogwidth:"+width+"px;dialogheight:"+height+"px;"
  //+ "scroll:no;resizable:no;status:yes;";

  let sURL = "/ui/ac/fi/fixedaset/fi_301_02_03p.xml";
  //+ "?fixedAsetNo=" + ds_master.getCellData(ds_master.getRowPosition(),"fixedAsetNo")
  //+ "&fixedAsetNm=" + ds_master.getCellData(ds_master.getRowPosition(),"fixedAsetNm");
  //var returnValue = window.showModalDialog(sURL,'',sFeature);

  let data = {
    "fixedAsetNo": ds_master.getCellData(ds_master.getRowPosition(), "fixedAsetNo"),
    "fixedAsetNm": ds_master.getCellData(ds_master.getRowPosition(), "fixedAsetNm")
  };
  const options = {
    id: "fi_301_02_03p",
    type: "browserPopup",
    modal: true,
    popupName: "자산변경이력조회",
    width: 996,
    height: 590
  };
  let returnValue = await $c.win.openPopup($p, sURL, options, data);

  /*
  sURL = "/ac/fi/fixedaset/fi_301_02_03p.jsp"
          + "?fixedAsetNo=" + ds_master.NameString(ds_master.RowPosition,"fixedAsetNo")
          + "&fixedAsetNm=" + ds_master.NameString(ds_master.RowPosition,"fixedAsetNm");
   //debug
  cfOpen(width, height, 5, sURL);
  */
};

//-------------------------------------------------------------------------
// 상각이력 팝업
//-------------------------------------------------------------------------
scwin.f_PopUpDeprHistory = async function () {
  //if (ds_master.getRowPosition() < 0) { null 체크 못함
  if (ds_master.getTotalRow() < 1) {
    $c.gus.cfAlertMsg($p, "선택된 행이 없습니다.");
    return;
  }

  //var width = "996", height = "590";
  //var sFeature = "center:yes;dialogwidth:"+width+"px;dialogheight:"+height+"px;"
  //                + "scroll:no;resizable:no;status:yes;";
  let sURL = "/ui/ac/fi/fixedaset/fi_301_02_04p.xml";
  //+ "?fixedAsetNo=" + ds_master.NameString(ds_master.RowPosition,"fixedAsetNo")
  //+ "&fixedAsetNm=" + ds_master.NameString(ds_master.RowPosition,"fixedAsetNm");
  //var returnValue = window.showModalDialog(sURL,'',sFeature);

  let data = {
    "fixedAsetNo": ds_master.getCellData(ds_master.getRowPosition(), "fixedAsetNo"),
    "fixedAsetNm": ds_master.getCellData(ds_master.getRowPosition(), "fixedAsetNm")
  };
  const options = {
    id: "fi_301_02_04p",
    type: "browserPopup",
    modal: true,
    popupName: "자산월별상각내역조회",
    width: 996,
    height: 590
  };
  let returnValue = await $c.win.openPopup($p, sURL, options, data);

  /*
  sURL = "/ac/fi/fixedaset/fi_301_02_04p.jsp"
          + "?fixedAsetNo=" + ds_master.NameString(ds_master.RowPosition,"fixedAsetNo")
          + "&fixedAsetNm=" + ds_master.NameString(ds_master.RowPosition,"fixedAsetNm");
   //debug
  cfOpen(width, height, 5, sURL);
  */
};
scwin.udc_srchAcctDeptCd_callbackfunc = function (rtnAcctDeptList) {
  if (rtnAcctDeptList != null) {
    if (rtnAcctDeptList[0] == "N/A") return;

    //회사 정보 set
    scwin.txtCoCd = rtnAcctDeptList[8]; //회사코드 
    scwin.txtCoClsCd = rtnAcctDeptList[9]; //회사구분코드  

    if (rtnAcctDeptList[1] == "N/A") return;
    ed_srchAcctDeptCd.setValue(rtnAcctDeptList[0]); // 최상위 부서코드
    ed_srchAcctDeptNm.setValue(rtnAcctDeptList[1]);
  }

  // 귀속부서 조회
  //scwin.f_srchDeptPopUp('T');
};
scwin.sbm_asetPattern_submitdone = function (e) {};
scwin.sbm_asetPattern_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.btn_reset_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  /*
  if (ds_master.getRowCount() < 1) {
      $c.gus.cfAlertMsg(MSG_CM_WRN_002);  //"조회결과가 존재하지 않습니다."
      return;
  } else {
      ret = $c.win.confirm("Excel로 다운로드 하시겠습니까?");
      if (ret) {
          $c.gus.cfGridToExcel(gr_master, "고정자산조회","고정자산조회.xls",2+8+16);
      }		
  }
  */

  if (ds_master.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  var sheetTitle = "고정자산조회";
  let ret = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (ret) {
    let options = {
      fileName: sheetTitle,
      // + ".xls",
      sheetName: sheetTitle
    };
    //그리드에 대한 내용을 추가 옵션
    let infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
  }
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel2 = async function () {
  if (ds_landinfo.getTotalRow() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  var sheetTitle = "지번지목리스트";
  let ret = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (ret) {
    let options = {
      fileName: sheetTitle,
      // + ".xls",
      sheetName: sheetTitle
    };
    //그리드에 대한 내용을 추가 옵션
    let infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_landinfo, options, infoArr);
  }
};
scwin.btn_removeAset_onclick = function (e) {
  scwin.f_removeAset();
};

//-------------------------------------------------------------------------
// 엔터쳤을시 조회
//-------------------------------------------------------------------------
scwin.jsEnterKey = function (e) {
  if (e.keyCode == 13) {
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 행 추가(지번-지목)
//-------------------------------------------------------------------------
scwin.f_Add = function () {
  let row = ds_landinfo.insertRow();
  ds_landinfo.setCellData(row, "fixedAsetNo", ds_aset.getCellData(ds_aset.getRowPosition(), "fixedAsetNo"));
  ed_totalRows3.setValue(ds_landinfo.getRowCount());
  //cfShowTotalRows(totalRows3, ds_landinfo.CountRow);
};

//-------------------------------------------------------------------------
// 행 삭제(지번-지목)
//-------------------------------------------------------------------------
scwin.f_Delete = function () {
  let rowCnt = 0;
  for (var i = 0; i < ds_landinfo.getRowCount(); i++) {
    if (ds_landinfo.getRowStatus(i) == 2) rowCnt++;
  }
  if (ds_landinfo.getRowCount() - rowCnt == 1) {
    $c.gus.cfAlertMsg($p, "마지막 행은 삭제할 수 없습니다.");
    return;
  }
  //ds_landinfo.DeleteMarked();
  $c.data.deleteRow($p, ds_landinfo);
};

//-------------------------------------------------------------------------
// 취소(지번-지목)
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  //ds_landinfo.Undo(ds_landinfo.RowPosition);
  $c.data.undoRow($p, ds_landinfo, "Y");

  //cfShowTotalRows(totalRows3, ds_landinfo.CountRow);
  ed_totalRows3.setValue(ds_landinfo.getRowCount());
};

//-------------------------------------------------------------------------
// 거래처 코드팝업
//-------------------------------------------------------------------------
scwin.f_clntPopUp = function (sIsEvent, flag) {
  let param = ",,,000";
  switch (flag) {
    case '1':
      scwin.f_PopUp(ed_clntNo1, txt_clntNm1, hid_clntNo1, ed_zip, sIsEvent, "retrieveClntList", param, null);
      break;
    case '3':
      //리스거리처
      scwin.f_PopUp('2', ed_lsClntNo, ed_lsClntNm, scwin.hid_lsClntNo, ed_zip, sIsEvent, "retrieveClntList", param, null);
      break;
    default:
      scwin.f_PopUp(ed_clntNo1, txt_clntNm1, hid_clntNo1, ed_zip, sIsEvent, "retrieveClntList", param, null);
      break;
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  //var rtnList;  // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      udc_eqRegNo.setSelectId("retrieveVehclListInfo");
      udc_eqRegNo.cfCommonPopUp(scwin.udc_eqRegNo_callbackfunc // XML상의 SELECT ID	
      , ed_eqRegCd.getValue() // 화면에서의 Code Element의	Value
      , ed_eqRegNo.getValue().trim() // 화면에서의 Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , '3,4,5,6,7,8,9,10' // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "차량정보,차량번호,장비코드" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );

      //$c.gus.cfSetReturnValue(rtnList,  txt_eqRegCd, txt_eqRegNo);
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = function (inObj, ...pairObjs) {
  let inValue = $c.gus.cfGetValue($p, inObj);
  if (!inObj.options) inObj.options = {};
  let hidValue = inObj.options.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.options.hidVal = "";
    for (let i = 0; i < pairObjs.length; i++) {
      $c.gus.cfSetValue($p, pairObjs[i], "");
    }
    return false;
  }
  if (inValue == hidValue) return false;
  return true;
};

//-------------------------------------------------------------------------
// 첨부화일정보
//-------------------------------------------------------------------------
scwin.f_setFileUpDownFrame = function (fixedAsetNo, fixedAsetHistClsCd, slipNo, slipKndCd, apprvReqNo, fixedAsetApprvYn) {
  var obj = {
    "dataObject": {
      "type": "json",
      "name": "wframeParam",
      "data": {
        "fixedAsetNo": fixedAsetNo,
        "fixedAsetHistClsCd": fixedAsetHistClsCd,
        "slipNo": slipNo,
        "slipKndCd": slipKndCd,
        "apprvReqNo": apprvReqNo,
        "fixedAsetApprvYn": fixedAsetApprvYn
      }
    }
  };
  let url = "/ui/ac/fi/fixedaset/fi_301_02_05p.xml";
  FileUpDownFrame.setSrc(url, obj);
};

//-------------------------------------------------------------------------
// 무형자산제거버튼 활성화 체크
//-------------------------------------------------------------------------
scwin.f_checkRemoveBtn = function () {
  let vAcctDeptCd = scwin.vAcctDeptCd; // 소속 부서코드  
  let vEmpNo = scwin.vEmpNo; // 사용자아이디  

  if (vAcctDeptCd == "00009" || vEmpNo == "198015" || vEmpNo == "198078" || vEmpNo == "171577") {
    //권한 체크(재경팀일때만 가능), BIDC 이재설과장, 최현주 대리 추가 (박경진대리 퇴사로 최현주 대리 변경)
    if (ds_aset.getCellData(ds_aset.getRowPosition(), "bookAmt") == 0 && ds_master.getCellData(ds_master.getRowPosition(), "qty") != 0) {
      //장부가액이 0이고 수량이 0이 아닐때
      //무형자산제거 버튼 셋팅
      if (ds_master.getCellData(ds_master.getRowPosition(), "asetPatternCd") == "76" || ds_master.getCellData(ds_master.getRowPosition(), "asetPatternCd") == "78" || ds_master.getCellData(ds_master.getRowPosition(), "asetPatternCd") == "80" || ds_master.getCellData(ds_master.getRowPosition(), "asetPatternCd") == "82" || ds_master.getCellData(ds_master.getRowPosition(), "asetPatternCd") == "84" || ds_master.getCellData(ds_master.getRowPosition(), "asetPatternCd") == "88") {
        //자산유형
        $c.gus.cfEnableObjects($p, [btn_removeAset, ed_removeDt]); //자산이력,감가상각이력조회 버튼 enable
      } else {
        $c.gus.cfDisableBtn($p, [btn_removeAset, ed_removeDt]);
      }
    } else {
      $c.gus.cfDisableBtn($p, [btn_removeAset, ed_removeDt]);
    }
  } else {
    $c.gus.cfDisableBtn($p, [btn_removeAset, ed_removeDt]);
  }
};

//-------------------------------------------------------------------------
// 무형자산제거
//-------------------------------------------------------------------------
scwin.f_removeAset = async function () {
  if (ed_removeDt.getValue() == "") {
    //날짜 체크
    $c.win.alert($p, "무형자산제거일자는 필수 입력입니다.");
    return;
  }
  let ret;
  ret = await $c.gus.cfValidate($p, [ed_removeDt]);
  if (!ret) {
    return;
  }
  if (!$c.gus.cfIsNull($p, ed_removeDt.getValue())) {
    //ret = await $c.gus.cfValidateValue(ed_removeDt.getValue(),"minDate=" + ds_master.getCellData(ds_master.getRowPosition(),"acqDt"));

    var diff = $c.date.diffDate($p, ed_removeDt.getValue(), ds_master.getCellData(ds_master.getRowPosition(), "acqDt"));
    if (diff > 0) {
      $c.gus.cfAlertMsg($p, "무형자산제거일자는 취득일자 이후이어야 합니다.");
      ed_removeDt.focus();
      return false;
    }
  }
  dma_removeAset.set("fixedAsetNo", ds_master.getCellData(ds_master.getRowPosition(), "fixedAsetNo")); //자산번호
  dma_removeAset.set("removeDt", ed_removeDt.getValue()); //제거일자
  dma_removeAset.set("rmk", "무형자산제거 처리"); //비고

  ret = await $c.win.confirm($p, "선택한 무형자산을 제거하시겠습니까?");
  if (ret) {
    //tr_removeAset.post();
    $c.sbm.execute($p, sbm_removeAset);
  }
};
scwin.sbm_master_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    ds_aset.reform();
    ds_landinfo.reform();
    scwin.f_Retrieve();
  }
};
scwin.sbm_master_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/*
<script language=JavaScript for=ds_master event=CanRowPosChange(row)>
*/
scwin.ds_master_onbeforerowpositionchange = async function (info) {
  // 첫조회 와 첫 포지션 세팅에 걸려서 예외 처리
  if ($c.gus.cfIsNull($p, info.oldRowIndex) || $c.gus.cfIsNull($p, info.newRowIndex)) {
    return true;
  }
  if (scwin.isInPost == true) return true;
  let ret;
  if (ds_aset.getModifiedIndex().length > 0 || ds_landinfo.getModifiedIndex().length > 0) {
    ret = await $c.win.confirm($p, MSG_CM_CRM_005);
    if (ret == true) return true;else return false;
  } else {
    return true;
  }
};

/*
<script language=JavaScript for=ds_master event=OnRowPosChanged(row)>
*/
scwin.ds_master_onrowpositionchange = function (info) {};

/*
<!-- 그리드클릭 이벤트처리() -->
<script language=JavaScript for=gr_master event=OnClick(row,colid)>
*/
scwin.gr_master_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if ($c.gus.cfCheckCreateFlag($p) == true) return;
  await scwin.f_SrchAsetContent();

  //let row = info.newRowIndex;
  let row = ds_master.getRowPosition();
  let fixedAsetNo = ds_master.getCellData(row, "fixedAsetNo");
  let fixedAsetHistClsCd = ds_master.getCellData(row, "fixedAsetHistClsCd");
  let slipNo = ds_master.getCellData(row, "slipNo");
  let slipKndCd = ds_master.getCellData(row, "slipKndCd");
  let apprvReqNo = ds_master.getCellData(row, "apprvReqNo");
  let fixedAsetApprvYn = ds_master.getCellData(row, "fixedAsetApprvYn");

  // 임시주석
  scwin.f_setFileUpDownFrame(fixedAsetNo, fixedAsetHistClsCd, slipNo, slipKndCd, apprvReqNo, fixedAsetApprvYn);
};
scwin.btn_update_onclick = function (e) {
  scwin.f_Update();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.udc_srchAcctDeptCd_onclickEvent = function (e) {
  scwin.f_srchDeptPopUp('T');
};

/*
<!-- 조회 귀속부서 EMEDIT -->
<script language=JavaScript for=ed_srchAcctDeptCd event=OnKillFocus()>
*/
scwin.udc_srchAcctDeptCd_onblurCodeEvent = function (e) {
  if ($c.gus.cfIsNull($p, ed_srchAcctDeptCd.getValue())) {
    ed_srchAcctDeptNm.setValue("");
    scwin.hid_srchAcctDeptCd = "";
    return;
  }
  if (ed_srchAcctDeptCd.getValue().trim() == scwin.hid_srchAcctDeptCd) return;
  scwin.f_srchDeptPopUp('T');
};

//차량번호
scwin.udc_eqRegNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_eqRegNo.getValue(), ed_eqRegCd.getValue(), 'F', 'F');
};
scwin.udc_eqRegNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_eqRegNo, ed_eqRegCd, 1, false);
};
scwin.udc_eqRegNo_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_eqRegCd, ed_eqRegNo, 1, false);
};
scwin.udc_lsClntNo_onclickEvent = function (e) {
  scwin.f_clntPopUp('F', '3');
};

//소재지
scwin.udc_zip_onclickEvent = function (e) {
  scwin.f_zipPopUp(ed_zip, ed_siteAddr1, ed_siteAddr2);
};

/*
<!-- 자산 귀속부서(From) EMEDIT -->
<script language=JavaScript for=ed_acqAcctDeptCd event=OnKillFocus()>
*/
scwin.ed_acqAcctDeptCd_onblur = function (e) {
  if (ed_acqAcctDeptCd.getValue().trim() == "") return;
  if (ed_acqAcctDeptCd.getValue().trim() == scwin.hid_asetAcctDeptCd) return;
  scwin.f_asetDeptPopUp('T');
};
scwin.btn_deprHistory_onclick = function (e) {
  scwin.f_PopUpDeprHistory();
};
scwin.btn_asetHistory_onclick = function (e) {
  scwin.f_PopUpAsetHistory();
};

/*
chb_areaMgntYn 숨은 체크박스 제어를 위해
*/
/* 
scwin.lc_srchAsetPatternCd_onchange = function (info) {
    debugger;
    //ds_asetPattern.setRowPosition(info.newRowIndex);
    chb_areaMgntYn.checked  .setValue(true);
};
*/

scwin.setParam = function () {
  var tr = ds_master.getTotalRow();
  for (var idx = 0; idx < tr; idx++) {
    var tmpAddr = ds_master.getCellData(idx, "zip") + " " + ds_master.getCellData(idx, "siteAddr1") + " " + ds_master.getCellData(idx, "siteAddr2");
    ds_master.setCellData(idx, "address", tmpAddr);
    ds_master.setCellData(idx, "fixedAsetNm2", ds_master.getCellData(idx, "fixedAsetNm")); // ToBe 동일키 못줌
  }
  ds_master.reform();
};
scwin.lc_srchAsetPatternCd_onchange = function (info) {
  lc_asetPatternCd.setValue(lc_srchAsetPatternCd.getValue());
};
scwin.ed_srchOrgFixedAsetNo_onblur = function (e) {
  let n_fixedNo = ed_srchOrgFixedAsetNo.getValue();
  if (n_fixedNo == "") return;
  ed_srchOrgFixedAsetNo.setValue(String(n_fixedNo).padStart(10, '0'));
};
scwin.ed_srchFixedAsetNo_onblur = function (e) {
  let n_fixedAsetNo = ed_srchFixedAsetNo.getValue();
  if (n_fixedAsetNo == "") return;
  ed_srchFixedAsetNo.setValue(String(n_fixedAsetNo).padStart(10, '0'));
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'취득일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar1',refEdDt:'',edFromId:'ed_acqDtStDt',edToId:'ed_acqDtEndDt',objTypeFrom:'data',objTypeTo:'data',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'취득일자',titleTo:'취득일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_srchAcctDeptCd',nameId:'ed_srchAcctDeptNm',popupID:'',popupTitle:'',selectID:'',style:'',id:'udc_srchAcctDeptCd','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_srchAcctDeptCd_onblurCodeEvent',objTypeCode:'data',objTypeName:'data',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9',maxlengthCode:'5',mandatoryCode:'true',mandatoryName:'true',validExpCode:'귀속부서:yes:length=5',validExpName:'귀속부서명:no:maxByteLength=30',validTitle:'귀속부서'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최초자산번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_srchOrgFixedAsetNo',style:'',objType:'data',maxlength:'10',allowChar:'0-9','ev:onblur':'scwin.ed_srchOrgFixedAsetNo_onblur'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_srchFixedAsetNo',objType:'data',style:'',maxlength:'10',allowChar:'0-9','ev:onblur':'scwin.ed_srchFixedAsetNo_onblur'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산유형 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchAsetPatternCd',style:'width: 208px;',submenuSize:'auto',ref:'',objType:'data','ev:onchange':'scwin.lc_srchAsetPatternCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_asetPattern'},E:[{T:1,N:'xf:label',A:{ref:'asetPatternNm'}},{T:1,N:'xf:value',A:{ref:'asetPatternCd'}}]}]}]},{T:1,N:'xf:select',A:{selectedindex:'',id:'chb_areaMgntYn',appearance:'full',style:'display:none;',ref:'',cols:'',rows:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'토지관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비토지관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_eqRegNo','ev:onblurCodeEvent':'scwin.udc_eqRegNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_eqRegNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_eqRegNo_onclickEvent',id:'udc_eqRegNo',nameId:'ed_eqRegCd',popupID:'',popupTitle:'',selectID:'',style:'',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상각진행여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchDeprCd',ref:'',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'진행'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'완료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chk_IncluYn',ref:'data:dma_search.retrieveClsCd',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매각/폐기/이관포함 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'자산',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_Excel',gridID:'gr_master',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_master',style:'',autoFit:'allColumn',id:'gr_master',visibleRowNum:'23',class:'wq_gvw','ev:oncellclick':'scwin.gr_master_oncellclick',readOnly:'true',rowStatusVisible:'true',autoFitCellMinWidth:'100'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column1',value:'자산</br>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column17',value:'최초</br>고정자산번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'자산명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column64',value:'자산</br>종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column13',value:'자산</br>종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'취득</br>가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column3',value:'취득</br>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column61',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column70',value:'내용</br>년수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column73',value:'내용</br>월수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column106',value:'자산유형',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'자산유형',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column139',value:'고정자산명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column136',value:'환종',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column133',value:'환율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column130',value:'외화금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column127',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column124',value:'매각금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column121',value:'폐기금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column118',value:'이관금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column115',value:'자본적지출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column112',value:'소재지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column109',value:'임시투자세액공제여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column157',value:'비고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column154',value:'취득면적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column151',value:'실면적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column148',value:'평수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column145',value:'공시지가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column142',value:'공시지가기준일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column58',value:'거래처번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fixedAsetNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'orgFixedAsetNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fixedAsetNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'asetKndCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'102',inputType:'text',id:'asetKndNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'acqAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',minWidth:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'acqDt',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'svcLife',displayMode:'label',hidden:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'svcLifeMonth',displayMode:'label',hidden:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'asetPatternCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'asetPatternNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fixedAsetNm2',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crcCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'exchRt',displayMode:'label',hidden:'true',dataType:'float',displayFormat:'#,##0.0000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'acqAmtFcrc',displayMode:'label',hidden:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'acctDeptNm',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dispAmt',displayMode:'label',hidden:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'disuseAmt',displayMode:'label',hidden:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'tranAmt',displayMode:'label',hidden:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'capExpdAmt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'address',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'tempTaxDeductYn',displayMode:'label',hidden:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rmk',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'area',displayMode:'label',hidden:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'realArea',displayMode:'label',hidden:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pyCnt',displayMode:'label',hidden:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ancdLpr',displayMode:'label',hidden:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ancdLprStdDt',displayMode:'label',hidden:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'clntNo1',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column30',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'102',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column25',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'acqAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',displayMode:'label',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column108',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column141',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column138',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column135',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column132',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column129',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column126',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column123',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column120',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column117',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column114',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column111',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column159',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column156',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column153',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column150',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column147',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column144',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column60',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnDelYn:'N',btnRowAddYn:'N',btnRowDelYn:'N',EngYn:'N'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_removeDt',class:'',calendarValueType:'yearMonthDate'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_removeAset',type:'button',class:'btn','ev:onclick':'scwin.btn_removeAset_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산제거'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산유형',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_asetPatternCd',style:'',submenuSize:'auto',ref:'',refreshSelectedIndex:'true',objType:'key'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_asetPattern'},E:[{T:1,N:'xf:label',A:{ref:'asetPatternNm'}},{T:1,N:'xf:value',A:{ref:'asetPatternCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_asetKndNm',style:'',ref:'data:ds_aset.asetKndNm',objType:'key'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'고정자산명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'ed_fixedAsetNm',style:'',ref:'data:ds_aset.fixedAsetNm',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'리스거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_lsClntNo',nameId:'ed_lsClntNm',popupID:'',popupTitle:'',selectID:'',style:'',id:'udc_lsClntNo',btnId:'btn_lsClntNm','ev:onclickEvent':'scwin.udc_lsClntNo_onclickEvent',refDataCollection:'ds_master',code:'lsClntNo',name:'lsClntNm',objTypeCode:'data',objTypeName:'key'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'취득구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_acqCls',style:'',submenuSize:'auto',ref:'data:ds_aset.acqCls',emptyItem:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'acqClsEnddt',refDataMap:'ds_aset',style:'',id:'udc_fromToCalendar2',refEdDt:'acqClsStdt',edFromId:'ed_acqClsStdt',edToId:'ed_acqClsEnddt',objTypeFrom:'data',objTypeTo:'data'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'(금융리스, 할부금융)',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'취득일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_acqDt',style:'',ref:'data:ds_aset.acqDt',displayFormat:'yyyy/MM/dd',objType:'key'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원취득액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_orgAcqAmt',style:'',ref:'data:ds_aset.orgAcqAmt',displayFormat:'#,##0',dataType:'number',objType:'key'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'환종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w100',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_crcCd',style:'',submenuSize:'auto',ref:'data:ds_aset.crcCd',objType:'key',emptyItem:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'환율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w100 tar',id:'ed_exchRt',style:'',ref:'data:ds_aset.exchRt',objType:'key'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'취득가액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_acqAmt',style:'',ref:'data:ds_aset.acqAmt',displayFormat:'#,##0',dataType:'number',objType:'key'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_qty',style:'',ref:'data:ds_aset.qty',objType:'key',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'외화금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_acqAmtFcrc',style:'',ref:'data:ds_aset.acqAmtFcrc',dataType:'number',objType:'key',displayFormat:'#,##0'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장부가액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_bookAmt',style:'',ref:'data:ds_aset.bookAmt',objType:'key',displayFormat:'#,##0',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'감가상각누계액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_deprCumAmt',style:'',ref:'data:ds_aset.deprCumAmt',objType:'key',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'내용년수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_svcLife',style:'',ref:'data:ds_aset.svcLife',objType:'key'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'내용월',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w100 tar',id:'ed_svcLifeMonth',style:'',ref:'data:ds_aset.svcLifeMonth',objType:'key'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회계처리일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_postDt',style:'',ref:'data:ds_aset.postDt',displayFormat:'yyyy/MM/dd',objType:'key'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_acqAcctDeptCd',class:' w100','ev:onblur':'scwin.ed_acqAcctDeptCd_onblur',ref:'data:ds_aset.acctDeptCd',objType:'key'}},{T:1,N:'xf:input',A:{style:'',id:'ed_acqAcctDeptNm',class:' w150',ref:'data:ds_aset.acctDeptNm',objType:'key'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매각금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_dispAmt',style:'',ref:'data:ds_aset.dispAmt',objType:'key',displayFormat:'#,###',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'폐기금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_disuseAmt',style:'',ref:'data:ds_aset.disuseAmt',objType:'key',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이관금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_tranAmt',style:'',ref:'data:ds_aset.tranAmt',objType:'key',displayFormat:'#,###',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자본적지출',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_capExpdAmt',style:'',ref:'data:ds_aset.capExpdAmt',objType:'key',dataType:'number',displayFormat:'#,###'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'재평가금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_reappraiseAmt',style:'',ref:'data:ds_aset.reappraiseAmt',displayFormat:'#,##0',dataType:'number',objType:'key'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소재지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td pr0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{refDataCollection:'ds_aset',objTypeCode:'data',popupID:'',code:'zip',btnId:'btn_zip','ev:onclickEvent':'scwin.udc_zip_onclickEvent',codeId:'ed_zip',selectID:'',popupTitle:'',name:'siteAddr1',objTypeName:'key',nameId:'ed_siteAddr1',style:'',id:'udc_zip'}},{T:1,N:'xf:input',A:{ref:'data:ds_aset.siteAddr2',style:'width: 145px;',id:'ed_siteAddr2',class:'',objType:'data'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'임시투자세<br/>액공제여부',ref:'',style:'',userData2:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_tempTaxDeductYn',ref:'data:ds_aset.tempTaxDeductYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'ed_rmk',style:'',ref:'data:ds_aset.rmk',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'취득면적',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w100 tar',id:'ed_area',style:'',ref:'data:ds_aset.area',objType:'data',displayFormat:'#,###.#',dataType:'float',maxlength:'13.2'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실면적',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w100 tar',id:'ed_realArea',style:'',ref:'data:ds_aset.realArea',objType:'data',displayFormat:'#,###.#',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'평수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w100 tar',id:'ed_pyCnt',style:'',ref:'data:ds_aset.pyCnt',objType:'data',dataType:'number',displayFormat:'#,###.#',allowChar:'0-9',maxlength:'13'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공시지가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_ancdLpr',style:'',ref:'data:ds_aset.ancdLpr',displayFormat:'#,##0',objType:'data',dataType:'number',maxlength:'13',allowChar:'0-9'}},{T:1,N:'xf:input',A:{class:'',id:'ed_clntNo1',style:'width:0;'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공시지가기준일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_ancdLprStdDt',style:'',ref:'data:ds_aset.ancdLprStdDt',displayFormat:'yyyy/MM/dd',objType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'지번지목리스트 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_landinfo',gridDownFn:'scwin.f_Excel2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_landinfo',style:'',autoFit:'allColumn',id:'gr_landinfo',visibleRowNum:'5',class:'wq_gvw',gridName:'지번지목리스트'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column1',value:'고정자산번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'지번순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'지번',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'지목',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column11',value:'면적',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column9',value:'취득가액',class:'txt-red',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'fixedAsetNo',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'lotNoSeq',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lotNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'landCat',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lotArea',value:'',displayMode:'label',readOnly:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'lotAcqAmt',value:'',displayMode:'label',readOnly:'true',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column28',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRows3',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',EngYn:'N',btnRowAddObj:'btn_addLandRow',btnRowDelObj:'btn_delLandRow',rowAddFunction:'scwin.f_Add',rowDelFunction:'scwin.f_Delete',cancelFunction:'scwin.f_Cancel',btnCancelObj:'btn_cancelLandRow'}}]}]}]}]}]}]},{T:1,N:'w2:wframe',A:{style:'',id:'FileUpDownFrame',class:'row-gap-8'}},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link white',id:'btn_asetHistory',style:'',type:'button','ev:onclick':'scwin.btn_asetHistory_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'변경이력조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link white',id:'btn_deprHistory',style:'',type:'button','ev:onclick':'scwin.btn_deprHistory_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상각이력조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_update',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_update_onclick',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})