/*amd /ui/ds/op/adjmbd/costingproc/op_501_01_03b.xml 77627 2fc9afe2ca53bba449c7f7f5d3810e1bf1b1b4825fe1783f67c5c25e4cb8269c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_search',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'lineCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'etaStDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'etaEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'portCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'portNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'setoffClntNo'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vesselInfoList',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_vesselInfoList_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'portCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'portNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'vsslCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'vsslNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'portcnt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'setoffClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'setoffSlipNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'recvSetoffSlipNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'seq'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_exchRtSearch',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'crcCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'stdDt'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipHeader',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'slipNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'slipDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'postDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'amt',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'amtFcrc',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'mediateTrustAmt',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'mediateTrustAmtFcrc',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'crcCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'exchRt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'nypayAmt',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name11',id:'nypayAmtFcrc',defaultValue:''}},{T:1,N:'w2:column',A:{dataType:'text',name:'name12',id:'clntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name13',id:'postAcctDeptCd'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exchRt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'stdExchRt'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_searchDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'seq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'setoffClntNo'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseTrust',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'choice'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'bilgLodeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'slipKndNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'slipNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'slipDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'postDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'acctNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'crcCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'exchRt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'amtFcrc'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name11',id:'amt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name12',id:'acctDeptNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name13',id:'summary'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name14',id:'acctCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name15',id:'acctDeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name16',id:'mgntClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name17',id:'clntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name18',id:'taxinvcDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name19',id:'acctRecvNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name20',id:'seq'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellingTrust',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'choice'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'bilgLodeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'slipKndNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'slipNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'slipDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'postDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'acctNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'crcCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'exchRt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'amtFcrc'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name11',id:'amt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name12',id:'acctDeptNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name13',id:'summary'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name14',id:'acctCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name15',id:'acctDeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name16',id:'clntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name17',id:'taxinvcDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name18',id:'acctRecvNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name19',id:'seq'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_remainAmt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'amt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'amtFcrc'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'slipNo'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseTrustSlipContents',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'acctCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'acctNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'crcCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'exchRt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'amtFcrc'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'amt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'acctDeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'acctDeptNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'bilgLodeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'mgntClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name11',id:'taxinvcDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name12',id:'slipNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name13',id:'mgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name14',id:'seq'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellingTrustSlipContents',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'acctCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'acctNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'crcCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'exchRt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'amtFcrc'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'amt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'acctDeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'acctDeptNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'bilgLodeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'mgntClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name11',id:'taxinvcDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name12',id:'slipNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name13',id:'mgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name14',id:'seq'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_exchRt',encoding:'UTF-8',mediatype:'application/json',action:'/ac.fm.stdinfomgnt.RetrieveExchangeRateCMD.do',ref:'data:json,[{"id":"ds_exchRtSearch","key":"IN_DS1"},{"id":"ds_exchRt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_exchRt","key":"OUT_DS1"}','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_retrieveVesselInfoList',encoding:'UTF-8',mediatype:'application/json',action:'/ds.op.adjmbd.costingproc.RetrieveVesselInfoListCMD.do',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_vesselInfoList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_vesselInfoList","key":"OUT_DS1"}','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_retrieveVesselEdiateTrustList',encoding:'UTF-8',mediatype:'application/json',action:'/ds.op.adjmbd.costingproc.RetrieveVesselEdiateTrustListCMD.do',ref:'data:json,[{"id":"ds_searchDetail","key":"IN_DS1"},{"id":"ds_purchaseTrust","key":"OUT_DS1"},{"id":"ds_sellingTrust","key":"OUT_DS2"},{"id":"ds_remainAmt","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_purchaseTrust","key":"OUT_DS1"},{"id":"ds_sellingTrust","key":"OUT_DS2"},{"id":"ds_remainAmt","key":"OUT_DS3"}]','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_retrieveConsignmentSetoff',encoding:'UTF-8',mediatype:'application/json',action:'/ds.op.adjmbd.costingproc.RetrieveMediateTrustSetoffCMD.do',ref:'data:json,[{"id":"ds_slipNo","key":"IN_DS1"},{"id":"ds_slipHeader","key":"OUT_DS1"},{"id":"ds_purchaseTrustSlipContents","key":"OUT_DS2"},{"id":"ds_sellingTrustSlipContents","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_slipHeader","key":"OUT_DS1"},{"id":"ds_purchaseTrustSlipContents","key":"OUT_DS2"},{"id":"ds_sellingTrustSlipContents","key":"OUT_DS3"}]','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_save',encoding:'UTF-8',mediatype:'application/json',action:'/ds.op.adjmbd.costingproc.CreateVesselEdiateTrustSetoffCMD.do',ref:'data:json,[{"action":"modified","id":"ds_purchaseTrustSlipContents","key":"IN_DS1"},{"action":"modified","id":"ds_sellingTrustSlipContents","key":"IN_DS2"},{"action":"modified","id":"ds_slipHeader","key":"IN_DS3"},{"id":"ds_slipNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_slipNo","key":"OUT_DS1"}','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_delete',encoding:'UTF-8',mediatype:'application/json',action:'/ds.op.adjmbd.costingproc.DeleteVesselEdiateTrustSetoffCMD.do',ref:'data:json,{"action":"modified","id":"ds_slipHeader","key":"IN_DS1"}','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_accRecSetoffSave',encoding:'UTF-8',mediatype:'application/json',action:'/ds.op.adjmbd.costingproc.CreateAccountReceivableSetoffCMD.do',ref:'data:json,[{"action":"modified","id":"ds_purchaseTrustSlipContents","key":"IN_DS1"},{"action":"modified","id":"ds_sellingTrustSlipContents","key":"IN_DS2"},{"action":"modified","id":"ds_slipHeader","key":"IN_DS3"},{"id":"ds_slipNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_slipNo","key":"OUT_DS1"}','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_accRecSetoffDelete',encoding:'UTF-8',mediatype:'application/json',action:'/ds.op.adjmbd.costingproc.DeleteAccountReceivableSetoffCMD.do',ref:'data:json,{"action":"modified","id":"ds_slipHeader","key":"IN_DS1"}','ev:submitdone':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'ACConstants',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_sCurrDate = $c.date.getServerDateTime($p);
scwin.stDt = $c.date.getDateAddMonthDirection($p, scwin.g_sCurrDate, 0, "F");
scwin.purchaseAmt = 0;
scwin.sellingAmt = 0;
scwin.chk = false;
scwin.hdn_slipNo = "";
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ006",
    compID: "acb_crcCd,gr_purchaseTrust:crcCd,gr_sellingTrust:crcCd",
    opt: {
      "range": "1"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.setHeader();
    acb_lineCd.setValue("AAL");
    ed_etaStDt.setValue(scwin.stDt);
    ed_etaEndDt.setValue(scwin.g_sCurrDate);
    acb_crcCd.setValue(ACConstants.KOREA_WON);
    $c.gus.cfDisableObjects($p, [ica_postDt, ed_mediateTrustAmt, ed_mediateTrustAmtFcrc, ed_amt, ed_amtFcrc]);
    $c.gus.cfEnableObjects($p, [btn_create]);
    $c.gus.cfDisableObjects($p, [btn_delete, btn_setoff]);

    // 테스트데이터 
    //ed_etaStDt.setValue("20150207");
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// Function
//-------------------------------------------------------------------------
scwin.setHeader = function () {
  ds_search.insertRow(0);
  ds_search.setRowPosition(0);
  ds_searchDetail.insertRow(0);
  ds_searchDetail.setRowPosition(0);
  ds_slipNo.insertRow(0);
  ds_slipNo.setRowPosition(0);
  ds_purchaseTrustSlipContents.insertRow(0);
  ds_purchaseTrustSlipContents.setRowPosition(0);
  ds_sellingTrustSlipContents.insertRow(0);
  ds_sellingTrustSlipContents.setRowPosition(0);
  ds_slipHeader.insertRow(0);
  ds_slipHeader.setRowPosition(0);
  ds_exchRtSearch.insertRow(0);
  ds_exchRtSearch.setRowPosition(0);
};

// 팝업조회
scwin.f_openPopUp = function (disGubun, pCode, pName, sFlag) {
  var param;
  switch (disGubun) {
    case '1':
      // 항구팝업
      udc_portCd.setSelectId("retrievePortInfo");
      udc_portCd.cfCommonPopUp(scwin.udc_portCd_callBackFunc, pCode, pName, sFlag, null, null, null, null, null, null, null, null, null, null, "F", null, null); // 항구
      break;
    case '3':
      // 거래처 팝업
      udc_clntNo.setSelectId("retrieveClntInfo2");
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc, pCode, pName, sFlag, null, null, null, null, null, null, null, null, null, null, "F", null, null); // 거래처
      break;
    case '4':
      // 전표번호 팝업
      param = ACConstants.SLIPKNDCD_PAYM_COST_REMIT;
      udc_gridComCode1.setSelectId("retrieveConsignmentSetoffSlipNo");
      udc_gridComCode1.cfCommonPopUp(scwin.udc_grid_setoffSlipNo_callBackFunc, pCode, pName, sFlag, null, null, null, null, param, null, null, null, null, null, "F", null, null); // 전표번호
      break;
    case '5':
      // 채권상계 전표번호 팝업
      param = ACConstants.SLIPKNDCD_ACCT_RECEI_SETOFF;
      udc_gridComCode1.setSelectId("retrieveConsignmentSetoffSlipNo");
      udc_gridComCode1.cfCommonPopUp(scwin.udc_grid_recvSetoffSlipNo_callBackFunc, pCode, pName, sFlag, null, null, null, null, param, null, null, null, null, null, "F", null, null); // 전표번호
      break;
  }
};

// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
scwin.f_CheckPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    // inObj가 코드 필드일 경우 팝업
    scwin.f_openPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

// 조회
scwin.f_Retrieve = async function () {
  if (!(await scwin.f_Validation("Search"))) {
    return;
  }
  let e = await $c.sbm.execute($p, sbm_retrieveVesselInfoList);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_retrieveVesselInfoList_submitdone(e);
  }
};

// 조회 조건 검증
scwin.f_Validation = async function (sType) {
  var vslipHeader = ds_slipHeader.getRowCount();
  var vpurchaseTrustSlipContents = ds_purchaseTrustSlipContents.getRowCount();
  var vsellingTrustSlipContents = ds_sellingTrustSlipContents.getRowCount();
  if (sType == "Search") {
    if (!(await $c.gus.cfValidate($p, [tbl_search]))) {
      return false;
    }

    // 취득 일자 체크
    if ($c.gus.cfIsNull($p, ed_etaStDt.getValue())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["ETA"]);
      ed_etaStDt.focus();
      return false;
    }
    if ($c.gus.cfIsNull($p, ed_etaEndDt.getValue())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["ETA"]);
      ed_etaEndDt.focus();
      return false;
    }
    if (!$c.gus.cfIsNull($p, ed_etaStDt.getValue()) && !$c.gus.cfIsNull($p, ed_etaEndDt.getValue())) {
      if (!(await $c.gus.cfIsAfterDate($p, ed_etaStDt.getValue(), ed_etaEndDt.getValue()))) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
        ed_etaStDt.focus();
        return false;
      }
    }
  } else if (sType == "Save") {
    if (!(await $c.gus.cfValidate($p, [tbl_input]))) {
      return false;
    }
    if (vpurchaseTrustSlipContents <= 0) {
      await $c.gus.cfAlertMsg($p, "알선매입수탁전표내역이 없습니다.");
      return false;
    }
    if (vsellingTrustSlipContents <= 0) {
      await $c.gus.cfAlertMsg($p, "알선매출수탁전표내역이 없습니다.");
      return false;
    }
  } else if (sType == "Delete") {
    if (!(await $c.gus.cfValidate($p, [ed_slipDt]))) {
      return false;
    }
    if (vpurchaseTrustSlipContents <= 0) {
      await $c.gus.cfAlertMsg($p, "알선매입수탁전표내역이 없습니다.");
      return false;
    }
    if (vpurchaseTrustSlipContents <= 0) {
      await $c.gus.cfAlertMsg($p, "알선매출수탁전표내역이 없습니다.");
      return false;
    }
  }
  return true;
};

// 신규
scwin.f_Create = async function () {
  ds_purchaseTrustSlipContents.removeAll();
  ds_sellingTrustSlipContents.removeAll();
  ds_slipHeader.removeAll();
  ds_slipHeader.insertRow();
  ds_slipHeader.setRowPosition(0);
  acb_crcCd.setValue(ACConstants.KOREA_WON);
  ed_clntNo.setValue("");
  ed_clntNm.setValue("");
  $c.gus.cfEnableObjects($p, [acb_crcCd, ed_exchRt, ed_nypayAmt, btn_create, btn_new, btn_rowDelete1, btn_rowDelete2]);
  $c.gus.cfDisableObjects($p, [btn_delete, btn_setoff]);
};

// 알선수탁내역 조회
scwin.f_RetrieveVesselEdiateTrustList = async function (Row) {
  ds_searchDetail.setCellData(0, "seq", ds_vesselInfoList.getCellData(Row, "seq")); //순번
  ds_searchDetail.setCellData(0, "setoffClntNo", ds_vesselInfoList.getCellData(Row, "setoffClntNo")); //상계거래처

  let e = await $c.sbm.execute($p, sbm_retrieveVesselEdiateTrustList);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_retrieveVesselEdiateTrustList_submitdone(e);
  }
};

// 전표 내역조회
scwin.f_slipRetrieve = async function (Row) {
  if (!(ed_slipNo.getValue() == null || ed_slipNo.getValue().trim() == "")) {
    if (!(await $c.gus.cfValidate($p, [ed_slipNo]))) {
      return false;
    }
    ds_slipNo.setCellData(0, "slipNo", ed_slipNo.getValue());
    let e = await $c.sbm.execute($p, sbm_retrieveConsignmentSetoff);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_retrieveConsignmentSetoff_submitdone(e);
    }
  }
};

// 조회 기본값 Setting
scwin.f_defaultValue = function () {
  acb_lineCd.setValue("AAL");
  ed_etaStDt.setValue(scwin.stDt);
  ed_etaEndDt.setValue(scwin.g_sCurrDate);
};

// 매입 이동
scwin.f_PurchaseMoveDown = function () {
  ds_purchaseTrustSlipContents.removeAll();
  if (ds_purchaseTrust.getRowCount() > 0) {
    for (var i = 0; i <= ds_purchaseTrust.getRowCount(); i++) {
      if (ds_purchaseTrust.getCellData(i, "choice") == 1) {
        var insertRow = ds_purchaseTrustSlipContents.insertRow();
        ds_purchaseTrustSlipContents.setCellData(insertRow, "acctCd", ds_purchaseTrust.getCellData(i, "acctCd"));
        ds_purchaseTrustSlipContents.setCellData(insertRow, "acctNm", ds_purchaseTrust.getCellData(i, "acctNm"));
        ds_purchaseTrustSlipContents.setCellData(insertRow, "crcCd", ds_purchaseTrust.getCellData(i, "crcCd"));
        ds_purchaseTrustSlipContents.setCellData(insertRow, "exchRt", ds_purchaseTrust.getCellData(i, "exchRt"));
        ds_purchaseTrustSlipContents.setCellData(insertRow, "amtFcrc", ds_purchaseTrust.getCellData(i, "amtFcrc"));
        ds_purchaseTrustSlipContents.setCellData(insertRow, "amt", ds_purchaseTrust.getCellData(i, "amt"));
        ds_purchaseTrustSlipContents.setCellData(insertRow, "acctDeptCd", ds_purchaseTrust.getCellData(i, "acctDeptCd"));
        ds_purchaseTrustSlipContents.setCellData(insertRow, "acctDeptNm", ds_purchaseTrust.getCellData(i, "acctDeptNm"));
        ds_purchaseTrustSlipContents.setCellData(insertRow, "bilgLodeptCd", ds_purchaseTrust.getCellData(i, "bilgLodeptCd"));
        ds_purchaseTrustSlipContents.setCellData(insertRow, "mgntClntNo", ds_purchaseTrust.getCellData(i, "clntNo"));
        ds_purchaseTrustSlipContents.setCellData(insertRow, "slipNo", ds_purchaseTrust.getCellData(i, "slipNo"));
        ds_purchaseTrustSlipContents.setCellData(insertRow, "taxinvcDt", ds_purchaseTrust.getCellData(i, "taxinvcDt"));
        ds_purchaseTrustSlipContents.setCellData(insertRow, "mgntNo", ds_purchaseTrust.getCellData(i, "acctRecvNo"));
        ds_purchaseTrustSlipContents.setCellData(insertRow, "seq", ds_purchaseTrust.getCellData(i, "seq"));
      }
    }
  }

  // 상계금액
  ds_slipHeader.setCellData(ds_slipHeader.getRowPosition(), "amt", gr_sellingTrustSlipContents.getFooterData("totAmt"));

  // 상계금액_외화
  ds_slipHeader.setCellData(ds_slipHeader.getRowPosition(), "amtFcrc", gr_sellingTrustSlipContents.getFooterData("totAmtFcrc"));

  // 미지급금액
  ds_slipHeader.setCellData(ds_slipHeader.getRowPosition(), "nypayAmt", gr_purchaseTrustSlipContents.getFooterData("totAmt") - ds_slipHeader.getCellData(ds_slipHeader.getRowPosition(), "amt"));
  if (acb_crcCd.getValue() != ACConstants.KOREA_WON && acb_crcCd.getValue() != "") {
    ds_slipHeader.setCellData(ds_slipHeader.getRowPosition(), "nypayAmtFcrc", gr_purchaseTrustSlipContents.getFooterData("totAmtFcrc") - ds_slipHeader.getCellData(ds_slipHeader.getRowPosition(), "amtFcrc")); // 미지급금액_외화 
  }
  totalRows3.setValue(ds_purchaseTrustSlipContents.getRowCount());
};

// 매출 이동
scwin.f_SellMoveDown = function () {
  ds_sellingTrustSlipContents.removeAll();
  let sumAmt = 0;
  let sumAmtFcrc = 0;
  if (ds_sellingTrust.getRowCount() > 0) {
    for (var i = 0; i < ds_sellingTrust.getRowCount(); i++) {
      if (ds_sellingTrust.getCellData(i, "choice") == 1) {
        var insertRow = ds_sellingTrustSlipContents.insertRow();
        ds_sellingTrustSlipContents.setCellData(insertRow, "acctCd", ds_sellingTrust.getCellData(i, "acctCd"));
        ds_sellingTrustSlipContents.setCellData(insertRow, "acctNm", ds_sellingTrust.getCellData(i, "acctNm"));
        ds_sellingTrustSlipContents.setCellData(insertRow, "crcCd", ds_sellingTrust.getCellData(i, "crcCd"));
        ds_sellingTrustSlipContents.setCellData(insertRow, "exchRt", ds_sellingTrust.getCellData(i, "exchRt"));
        ds_sellingTrustSlipContents.setCellData(insertRow, "amtFcrc", ds_sellingTrust.getCellData(i, "amtFcrc"));
        ds_sellingTrustSlipContents.setCellData(insertRow, "amt", ds_sellingTrust.getCellData(i, "amt"));
        ds_sellingTrustSlipContents.setCellData(insertRow, "acctDeptCd", ds_sellingTrust.getCellData(i, "acctDeptCd"));
        ds_sellingTrustSlipContents.setCellData(insertRow, "acctDeptNm", ds_sellingTrust.getCellData(i, "acctDeptNm"));
        ds_sellingTrustSlipContents.setCellData(insertRow, "bilgLodeptCd", ds_sellingTrust.getCellData(i, "bilgLodeptCd"));
        ds_sellingTrustSlipContents.setCellData(insertRow, "mgntClntNo", ds_sellingTrust.getCellData(i, "clntNo"));
        ds_sellingTrustSlipContents.setCellData(insertRow, "slipNo", ds_sellingTrust.getCellData(i, "slipNo"));
        ds_sellingTrustSlipContents.setCellData(insertRow, "taxinvcDt", ds_sellingTrust.getCellData(i, "taxinvcDt"));
        ds_sellingTrustSlipContents.setCellData(insertRow, "mgntNo", ds_sellingTrust.getCellData(i, "acctRecvNo"));
        ds_sellingTrustSlipContents.setCellData(insertRow, "seq", ds_sellingTrust.getCellData(i, "seq"));
        sumAmt = sumAmt + Number(ds_sellingTrustSlipContents.getCellData(insertRow, "amt"));
        sumAmtFcrc = sumAmtFcrc + Number(ds_sellingTrustSlipContents.getCellData(insertRow, "amtFcrc"));
      }
    }
  }

  // 상계금액
  ds_slipHeader.setCellData(ds_slipHeader.getRowPosition(), "amt", gr_sellingTrustSlipContents.getFooterData("totAmt"));

  // 상계금액_외화
  ds_slipHeader.setCellData(ds_slipHeader.getRowPosition(), "amtFcrc", gr_sellingTrustSlipContents.getFooterData("totAmtFcrc"));
  ds_slipHeader.setCellData(ds_slipHeader.getRowPosition(), "nypayAmt", gr_purchaseTrustSlipContents.getFooterData("totAmt") - ds_slipHeader.getCellData(ds_slipHeader.getRowPosition(), "amt")); // 미지급금액		
  if (acb_crcCd.getValue() != ACConstants.KOREA_WON && acb_crcCd.getValue() != "") {
    ds_slipHeader.setCellData(ds_slipHeader.getRowPosition(), "nypayAmtFcrc", gr_purchaseTrustSlipContents.getFooterData("totAmtFcrc") - ds_slipHeader.getCellData(ds_slipHeader.getRowPosition(), "amtFcrc")); // 미지급금액_외화
  }
  totalRows4.setValue(ds_sellingTrustSlipContents.getRowCount());
};

// 매입 행삭제
scwin.f_Purchase_rowDel = function () {
  scwin.f_DeleteRow(ds_purchaseTrustSlipContents, totalRows3);
};

// 매출 행삭제
scwin.f_Selling_rowDel = function () {
  scwin.f_DeleteRow(ds_sellingTrustSlipContents, totalRows4);
};

// 행삭제
scwin.f_DeleteRow = function (DataSetNm, totalRowsObj) {
  dataListObj = DataSetNm;
  var currentIndex = dataListObj.getRowPosition();
  dataListObj.removeRow(currentIndex);
  ds_slipHeader.setCellData(ds_slipHeader.getRowPosition(), "amt", gr_sellingTrustSlipContents.getFooterData("totAmt")); // 상계금액
  ds_slipHeader.setCellData(ds_slipHeader.getRowPosition(), "amtFcrc", gr_sellingTrustSlipContents.getFooterData("totAmtFcrc")); // 상계금액_외화

  ds_slipHeader.setCellData(ds_slipHeader.getRowPosition(), "nypayAmt", Number(gr_purchaseTrustSlipContents.getFooterData("totAmt")) - Number(ds_slipHeader.getCellData(ds_slipHeader.getRowPosition(), "amt"))); // 미지급금액
  ds_slipHeader.setCellData(ds_slipHeader.getRowPosition(), "nypayAmtFcrc", Number(gr_purchaseTrustSlipContents.getFooterData("totAmtFcrc")) - Number(ds_slipHeader.getCellData(ds_slipHeader.getRowPosition(), "amtFcrc"))); // 미지급금액_외화						

  console.log("totAmtFcrc : " + Number(gr_purchaseTrustSlipContents.getFooterData("totAmtFcrc")));
  console.log("totAmtFcrc : " + Number(ds_slipHeader.getCellData(ds_slipHeader.getRowPosition(), "amtFcrc")));
  console.log("totAmtFcrc : " + Number(ds_slipHeader.getOriginalCellData(ds_slipHeader.getRowPosition(), "amtFcrc")));
  totalRowsObj.setValue(dataListObj.getRowCount());
};

// 통화코드변경시
scwin.f_crcCdChange = async function () {
  if (acb_crcCd.getValue() == "" || acb_crcCd.getValue() == ACConstants.KOREA_WON) {
    ed_exchRt.setValue("");
    ed_nypayAmtFcrc.setValue("");
    $c.gus.cfEnableObj($p, ed_nypayAmtFcrc, false);

    // 미지급금액
    ds_slipHeader.setCellData(ds_slipHeader.getRowPosition(), "nypayAmt", gr_purchaseTrustSlipContents.getFooterData("totAmt") - ds_slipHeader.getCellData(ds_slipHeader.getRowPosition(), "amt"));
  } else {
    // 자금의 환율테이블 조회(통화코드,작성일자)
    // 통화코드가 외화일경우 외화금액 필수
    $c.gus.cfEnableObjects($p, ed_exchRt);
    ds_exchRtSearch.setCellData(0, "crcCd", acb_crcCd.getValue());
    ds_exchRtSearch.setCellData(0, "stdDt", ica_slipDt.getValue());
    let e = await $c.sbm.execute($p, sbm_exchRt);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_exchRt_submitdone(e);
    }
    if (!scwin.chk) {
      // 미지급금액_외화
      ds_slipHeader.setCellData(ds_slipHeader.getRowPosition(), "nypayAmtFcrc", gr_purchaseTrustSlipContents.getFooterData("totAmtFcrc") - gr_sellingTrustSlipContents.getFooterData("totAmtFcrc"));
      ed_nypayAmt.setValue(Math.round(ed_nypayAmtFcrc.getValue().trim() * ed_exchRt.getValue().trim()));
    }
  }
};

// 채권상계전표삭제
scwin.f_SetoffDelete = async function () {
  if (!$c.gus.cfIsNull($p, ds_vesselInfoList.getCellData(ds_vesselInfoList.getRowPosition(), "setoffSlipNo")) || $c.gus.cfIsNull($p, ds_vesselInfoList.getCellData(ds_vesselInfoList.getRowPosition(), "recvSetoffSlipNo"))) {
    await $c.gus.cfAlertMsg($p, "채권 상계삭제가 불가능 합니다.");
  }

  // 삭제확인
  let vConfirm = await $c.win.confirm($p, "채권 상계전표를 삭제하시겠습니까?");
  if (vConfirm) {
    let e = await $c.sbm.execute($p, sbm_accRecSetoffDelete);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_accRecSetoffDelete_submitdone(e);
    }
  }
};

// 채권 상계
scwin.f_AccRecSetoff = async function () {
  if (ds_sellingTrustSlipContents.getRowCount() > 0) {
    for (var i = 0; i < ds_sellingTrustSlipContents.getRowCount(); i++) {
      if (ds_sellingTrustSlipContents.getCellData(i, "acctCd") != "1110410") {
        await $c.gus.cfAlertMsg($p, "계정이 외상매출금-일반만 채권상계가 가능합니다.");
        return;
      }
    }
  }
  if (!(await scwin.f_Validation("Save"))) {
    return;
  }
  let vConfirm = await $c.win.confirm($p, "채권 상계를 하시겠습니까?");
  if (vConfirm) {
    ds_slipHeader.setCellData(0, "clntNo", ed_clntNo.getValue());
    ds_slipHeader.setCellData(0, "postAcctDeptCd", ds_purchaseTrustSlipContents.getCellData(ds_purchaseTrustSlipContents.getRowPosition(), "acctDeptCd"));
    let e = await $c.sbm.execute($p, sbm_accRecSetoffSave);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_accRecSetoffSave_submitdone(e);
    }
  }
};

// 전표삭제
scwin.f_Delete = async function () {
  if (!(await scwin.f_Validation("Delete"))) {
    return;
  }

  // 삭제확인
  let vConfirm = await $c.win.confirm($p, "전표를 삭제하시겠습니까?");
  if (vConfirm) {
    let e = await $c.sbm.execute($p, sbm_delete);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_delete_submitdone(e);
    }
  }
};

// 저장
scwin.f_Save = async function () {
  if (!(await scwin.f_Validation("Save"))) {
    return;
  }

  // 저장확인 
  let vConfirm = await $c.win.confirm($p, "전표를 생성하시겠습니까?");
  if (vConfirm) {
    ds_slipHeader.setCellData(0, "clntNo", ed_clntNo.getValue());
    ds_slipHeader.setCellData(0, "postAcctDeptCd", ds_purchaseTrustSlipContents.getCellData(ds_purchaseTrustSlipContents.getRowPosition(), "acctDeptCd"));
    let e = await $c.sbm.execute($p, sbm_save);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_save_submitdone(e);
    }
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
// 항구
scwin.udc_portCd_callBackFunc = function (ret) {
  if (ret != null) {
    if (ret[0] != "N/A") {
      ed_portCd.setValue(ret[0]);
      ed_portNm.setValue(ret[1]);
    }
  } else {
    ed_portCd.setValue("");
    ed_portNm.setValue("");
  }
};

// 채권상계 전표번호
scwin.udc_grid_recvSetoffSlipNo_callBackFunc = function (ret) {
  if (ret != null) {
    if (ret[0] != "N/A") {
      ed_slipNo.setValue(ret[0]);
      scwin.hdn_slipNo = ret[1];
    }
  } else {
    ed_slipNo.setValue("");
    scwin.hdn_slipNo = "";
  }
};

// 전표번호
scwin.udc_grid_setoffSlipNo_callBackFunc = function (ret) {
  if (ret != null) {
    if (ret[0] != "N/A") {
      ed_slipNo.setValue(ret[0]);
      scwin.hdn_slipNo = ret[1];
    }
  } else {
    ed_slipNo.setValue("");
    scwin.hdn_slipNo = "";
  }
};

// 거래처
scwin.udc_clntNo_callBackFunc = function (ret) {
  if (ret != null) {
    if (ret[0] != "N/A") {
      ed_clntNo.setValue(ret[0]);
      ed_clntNm.setValue(ret[1]);
    }
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// Sbm submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieveVesselInfoList_submitdone = async function (e) {
  totalRows.setValue(ds_vesselInfoList.getRowCount());
  if (ds_vesselInfoList.getRowCount() == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
  } else {
    scwin.f_Create();
    scwin.f_RetrieveVesselEdiateTrustList(0); // 알선수탁내역 조회
  }
};
scwin.sbm_retrieveVesselEdiateTrustList_submitdone = function (e) {
  scwin.chk = false;
  totalRows1.setValue(ds_purchaseTrust.getRowCount());
  totalRows3.setValue(ds_purchaseTrustSlipContents.getRowCount());
  totalRows2.setValue(ds_sellingTrust.getRowCount());
  totalRows4.setValue(ds_sellingTrustSlipContents.getRowCount());
  if (ds_remainAmt.getRowCount() > 0) {
    ds_slipHeader.setCellData(ds_slipHeader.getRowPosition(), "mediateTrustAmt", ds_remainAmt.getCellData(0, "amt"));
    ds_slipHeader.setCellData(ds_slipHeader.getRowPosition(), "mediateTrustAmtFcrc", ds_remainAmt.getCellData(0, "amtFcrc"));
  }
};
scwin.sbm_exchRt_submitdone = function (e) {
  ed_exchRt.setValue(ds_exchRt.getCellData(0, "stdExchRt"));
};
scwin.sbm_accRecSetoffDelete_submitdone = async function (e) {
  if (await $c.gus.cfAlertMsg($p, MSG_CM_INF_004)) {
    // 성공적으로 삭제하였습니다
    scwin.f_Create();
    scwin.f_Retrieve();
  }
};
scwin.sbm_accRecSetoffSave_submitdone = async function (e) {
  if (await $c.gus.cfAlertMsg($p, MSG_CM_INF_001)) {
    // 성공적으로 저장하였습니다
    if (ds_slipNo.getCellData(ds_slipNo.getRowPosition(), "slipNo") != "") {
      scwin.f_showSlipInfo(ds_slipNo.getCellData(ds_slipNo.getRowPosition(), "slipNo"));
    }
    scwin.f_Create();
    scwin.f_Retrieve();
  }
};
scwin.sbm_delete_submitdone = async function (e) {
  if (await $c.gus.cfAlertMsg($p, MSG_CM_INF_004)) {
    // 성공적으로 삭제하였습니다
    scwin.f_Create();
    scwin.f_Retrieve();
  }
  ;
};
scwin.sbm_save_submitdone = async function (e) {
  if (await $c.gus.cfAlertMsg($p, MSG_CM_INF_001)) {
    // 성공적으로 저장하였습니다
    if (ds_slipNo.getCellData(ds_slipNo.getRowPosition(), "slipNo") != "") {
      scwin.f_showSlipInfo(ds_slipNo.getCellData(ds_slipNo.getRowPosition(), "slipNo"));
    }
    scwin.f_Create();
    scwin.f_Retrieve();
  }
};
scwin.sbm_retrieveConsignmentSetoff_submitdone = function (e) {
  totalRows3.setValue(ds_purchaseTrustSlipContents.getRowCount());
  totalRows4.setValue(ds_sellingTrustSlipContents.getRowCount());
  if (ds_slipHeader.getRowCount() <= 0) {
    $c.gus.cfEnableObjects($p, [ed_nypayAmt, btn_create, btn_new, btn_rowDelete1, btn_rowDelete2]);
    $c.gus.cfDisableObjects($p, [btn_delete, btn_setoff]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_nypayAmt, btn_create, btn_rowDelete1, btn_rowDelete2]);
    $c.gus.cfEnableObjects($p, [btn_delete, btn_new, btn_setoff]);
  }
};

//-------------------------------------------------------------------------
// Event onClick
//-------------------------------------------------------------------------
// 항구 찾기 클릭이벤트
scwin.udc_portCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_portCd.getValue(), ed_portNm.getValue(), 'F');
};

// 조회 클릭이벤트
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

// 초기화 클릭이벤트
scwin.btn_clear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.f_defaultValue();
};

// 알선수탁 화살표 클릭이벤트
scwin.btn_purchaseDown_onclick = function (e) {
  scwin.f_PurchaseMoveDown();
};

// 외상매출수탁/대급금 등 화살표 클릭이벤트
scwin.btn_sellDown_onclick = function (e) {
  scwin.f_SellMoveDown();
};

// 전표번호 클릭 이벤트
scwin.btn_slipNo_onclick = function (e) {
  scwin.f_openPopUp('4', ed_slipNo.getValue(), scwin.hdn_slipNo, 'F');
};

// 거래처 클릭 이벤트
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_clntNo.getValue(), ed_clntNm.getValue(), 'F');
};

// 상계삭제 클릭 이벤트
scwin.btn_setoff_onclick = function (e) {
  scwin.f_SetoffDelete();
};

// 채권상계 클릭 이벤트
scwin.btn_bond_onclick = function (e) {
  scwin.f_AccRecSetoff();
};

// 전표삭제 클릭 이벤트
scwin.btn_delete_onclick = function (e) {
  scwin.f_Delete();
};

// 전표생성 클릭 이벤트
scwin.btn_create_onclick = function (e) {
  scwin.f_Save();
};

// 신규 클릭 이벤트
scwin.btn_new_onclick = function (e) {
  scwin.f_Create();
};

//-------------------------------------------------------------------------
// Event onchange
//-------------------------------------------------------------------------
// 통화코드/환율 변경 시
scwin.acb_crcCd_onchange = function (info) {
  scwin.f_crcCdChange();
};

//-------------------------------------------------------------------------
// Event onblur
//-------------------------------------------------------------------------
// 항구 코드 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_portCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_portCd, ed_portNm, '1');
};

// 전표번호 Onbluer(onKillFocus) 이벤트 발생시
scwin.ed_slipNo_onblur = function (e) {
  scwin.f_openPopUp('4', ed_slipNo.getValue(), scwin.hdn_slipNo, 'F');
  scwin.chk = true;
  scwin.f_slipRetrieve();
  scwin.chk = false;
};

// 거래처 코드 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '3');
};

// 거래처 명 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_clntNo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNm, ed_clntNo, '3', false);
};

// 미지금급액 외화 Onbluer(onKillFocus) 이벤트 발생시
scwin.ed_nypayAmtFcrc_onblur = function (e) {
  ed_nypayAmt.setValue(Math.round(ed_nypayAmtFcrc.getValue().trim() * ed_exchRt.getValue().trim()));
};

//-------------------------------------------------------------------------
// Event onviewchange
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// DataSet 이벤트
//-------------------------------------------------------------------------
scwin.ds_vesselInfoList_onrowpositionchange = function (info) {
  if (info.newRowIndex > -1) {
    scwin.f_Create();
    scwin.f_RetrieveVesselEdiateTrustList(ds_vesselInfoList.getRowPosition()); // 알선수탁내역 조회
  }
};

//-------------------------------------------------------------------------
// 그리드 이벤트
//-------------------------------------------------------------------------
// 선박정보 cellClick
scwin.gr_vesselInfoList_oncellclick = async function (rowIndex, columnIndex, columnId) {
  // 전표번호 선택 시
  if (columnId == "setoffSlipNo" && !$c.gus.cfIsNull($p, ds_vesselInfoList.getCellData(rowIndex, "setoffSlipNo"))) {
    await $c.gus.cfShowSlipInfo($p, ds_vesselInfoList.getCellData(rowIndex, "setoffSlipNo"));
  } else if (columnId == "recvSetoffSlipNo" && !$c.gus.cfIsNull($p, ds_vesselInfoList.getCellData(rowIndex, "recvSetoffSlipNo"))) {
    await $c.gus.cfShowSlipInfo($p, ds_vesselInfoList.getCellData(rowIndex, "recvSetoffSlipNo"));
  }
  if (!$c.gus.cfIsNull($p, ds_vesselInfoList.getCellData(rowIndex, columnId))) {
    if (columnId == "setoffSlipNo") {
      ed_slipNo.setValue(ds_vesselInfoList.getCellData(rowIndex, "setoffSlipNo"));
      scwin.f_openPopUp('4', ed_slipNo.getValue(), scwin.hdn_slipNo, 'T');
      scwin.chk = true;
      scwin.f_slipRetrieve();
      scwin.chk = false;
      $c.gus.cfEnableObjects($p, [btn_new, btn_delete]);
      $c.gus.cfDisableObjects($p, [btn_create, btn_setoff, btn_bond]);
    } else {
      ed_slipNo.setValue(ds_vesselInfoList.getCellData(rowIndex, "recvSetoffSlipNo"));
      scwin.f_openPopUp('5', ed_slipNo.getValue(), scwin.hdn_slipNo, 'T');
      scwin.chk = true;
      scwin.f_slipRetrieve();
      scwin.chk = false;
      $c.gus.cfEnableObjects($p, [btn_create, btn_setoff]);
      $c.gus.cfDisableObjects($p, [btn_bond, btn_delete, btn_new]);
    }
  } else {
    $c.gus.cfEnableObjects($p, [btn_bond, btn_create]);
    $c.gus.cfDisableObjects($p, [btn_setoff, btn_delete, btn_new]);
  }
  scwin.hdn_slipNo = '';
};

// 알선수탁 cellClick
scwin.gr_purchaseTrust_oncellclick = async function (rowIndex, columnIndex, columnId) {
  // 전표번호 선택 시
  if (columnId == "slipNo" && !$c.gus.cfIsNull($p, ds_purchaseTrust.getCellData(rowIndex, "slipNo"))) {
    await $c.gus.cfShowSlipInfo($p, ds_purchaseTrust.getCellData(rowIndex, "slipNo"));
  }
};

// 외상매출수탁/대급금 등  cellClick
scwin.gr_sellingTrust_oncellclick = async function (rowIndex, columnIndex, columnId) {
  // 전표번호 선택 시
  if (columnId == "slipNo" && !$c.gus.cfIsNull($p, ds_sellingTrust.getCellData(rowIndex, "slipNo"))) {
    await $c.gus.cfShowSlipInfo($p, ds_sellingTrust.getCellData(rowIndex, "slipNo"));
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'LINE ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lineCd',search:'start',style:'width:150px;',submenuSize:'auto',mandatory:'true',allOption:'',chooseOption:'',ref:'data:ds_search.lineCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'AAL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'AAL'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'ETA ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_search',refEdDt:'etaEndDt',refStDt:'etaStDt',style:'',edFromId:'ed_etaStDt',edToId:'ed_etaEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항구',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_portCd',nameId:'ed_portNm',id:'udc_portCd',btnId:'btn_portCd',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_portCd_onclickEvent',refDataCollection:'ds_search',code:'portCd',name:'portNm','ev:onblurCodeEvent':'scwin.udc_portCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_portCd_onblurNameEvent',allowCharCode:' a-zA-Z'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_clear',type:'button',class:'btn ico refresh','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no wfix',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 25%;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'선박정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwflex',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_vesselInfoList',id:'gr_vesselInfoList',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_vesselInfoList_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'항구Id',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'항구',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'모선Id',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'모선',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column19',value:'항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'상계거래처',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'상계<br/>전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'채권상계<br/>전표번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'portCd',inputType:'text',textAlign:'left',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portNm',inputType:'text',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslCd',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'portcnt',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'setoffClntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'setoffSlipNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:';cursor:default;',id:'recvSetoffSlipNo',value:'',displayMode:'label',readOnly:'true',class:'underline txt-blue'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'알선수탁',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'N',gridDownYn:'N',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_purchaseTrust',id:'gr_purchaseTrust',style:'',visibleRowNum:'3',visibleRowNumFix:'true','ev:onheaderclick':'scwin.gr_purchaseTrust_onheaderclick','ev:oncellclick':'scwin.gr_purchaseTrust_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'부서',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'전표종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'전표일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'회계처리일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'계정',width:'150'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'통화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'환율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'외화금액',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'금액',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'귀속부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'적요',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bilgLodeptCd',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100',readOnly:'true',class:'underline txt-blue',style:';cursor:default;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'calendar',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'calendar',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',textAlign:'left',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'crcCd',value:'',displayMode:'value',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'exchRt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###.0',dataType:'float'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'amtFcrc',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###.0[floor]',dataType:'float'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',textAlign:'right',width:'80',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',textAlign:'left',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',textAlign:'left',width:'200',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'50'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'totAmtFcrc',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###.0[floor]',expression:'sum(\'amtFcrc\')',dataType:'float'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totAmt',inputType:'expression',textAlign:'right',width:'80',displayFormat:'#,##0',expression:'sum(\'amt\')',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',width:'200'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'shattle ',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico btn-double-down',id:'btn_purchaseDown',style:'',type:'button','ev:onclick':'scwin.btn_purchaseDown_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'맨이후'}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_purchaseTrustSlipContents',id:'gr_purchaseTrustSlipContents',style:'',visibleRowNum:'3',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'계정',width:'150'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'통화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column34',value:'환율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'외화금액',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'귀속부서',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',textAlign:'left',value:'',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crcCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'exchRt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###.0',dataType:'float'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'amtFcrc',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',displayFormat:'#,###.0[floor]'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',textAlign:'right',value:'',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',textAlign:'left',value:'',width:'120',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'합계',width:'150'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column36',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'totAmtFcrc',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###.0[floor]',expression:'sum(\'amtFcrc\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totAmt',inputType:'expression',style:'',textAlign:'right',value:'',width:'100',dataType:'number',displayFormat:'#,##0',expression:'sum(\'amt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'120'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',btnRowAddYn:'N',btnRowDelYn:'Y',btnCancelYn:'N',EngYn:'N',btnRowDelObj:'btn_rowDelete1',gridID:'gr_purchaseTrustSlipContents',rowDelFunction:'scwin.f_Purchase_rowDel'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'외상매출수탁/대급금 등 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',btnUser:'N',gridDownYn:'N',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_sellingTrust',id:'gr_sellingTrust',style:'',visibleRowNum:'3',visibleRowNumFix:'true','ev:onheaderclick':'scwin.gr_sellingTrust_onheaderclick','ev:oncellclick':'scwin.gr_sellingTrust_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption7',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column31',inputType:'text',style:'',value:'부서',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'전표종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'전표일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'회계처리일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'계정',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column40',inputType:'text',style:'',value:'통화',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column37',inputType:'text',style:'',value:'환율',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'외화금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'금액',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'귀속부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'적요',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgLodeptCd',inputType:'text',style:'',textAlign:'left',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndNm',inputType:'text',textAlign:'left',width:'100',readOnly:'true',style:';cursor:;',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100',readOnly:'true',class:'underline txt-blue',style:';cursor:default;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'calendar',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'calendar',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',textAlign:'left',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'crcCd',inputType:'select',style:'',value:'',width:'70',readOnly:'true',displayMode:'value'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'exchRt',inputType:'text',style:'',textAlign:'right',value:'',width:'70',readOnly:'true',displayFormat:'#,###.0',dataType:'float'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtFcrc',inputType:'text',style:'',textAlign:'right',value:'',width:'100',readOnly:'true',dataType:'float',displayFormat:'#,###.0[floor]'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',textAlign:'right',width:'80',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',textAlign:'left',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',textAlign:'left',width:'200',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',style:'',value:'합계',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column39',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totAmtFcrc',inputType:'expression',style:'',textAlign:'right',value:'',width:'100',dataType:'float',displayFormat:'#,###.0[floor]',expression:'sum(\'amtFcrc\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totAmt',inputType:'expression',textAlign:'right',width:'80',dataType:'number',displayFormat:'#,##0',expression:'sum(\'amt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',width:'200'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'shattle ',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico btn-double-down',id:'btn_sellDown',style:'',type:'button','ev:onclick':'scwin.btn_sellDown_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'맨이후'}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_sellingTrustSlipContents',id:'gr_sellingTrustSlipContents',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption8',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'계정',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column37',inputType:'text',style:'',value:'통화',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'환율',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column31',inputType:'text',style:'',value:'외화금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'귀속부서',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',textAlign:'left',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'exchRt',inputType:'text',style:'',textAlign:'right',value:'',width:'70',dataType:'float',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtFcrc',inputType:'text',style:'',textAlign:'right',value:'',width:'100',dataType:'float',displayFormat:'#,###.0[floor]'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',textAlign:'right',value:'',width:'100',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',textAlign:'left',value:'',width:'120'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'합계',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column39',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totAmtFcrc',inputType:'expression',style:'',textAlign:'right',value:'',width:'100',dataType:'float',displayFormat:'#,###.0[floor]',expression:'sum(\'amtFcrc\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totAmt',inputType:'expression',style:'',textAlign:'right',value:'',width:'100',dataType:'number',displayFormat:'#,##0',expression:'sum(\'amt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'120'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows4',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',EngYn:'N',btnCancelYn:'N',btnDelYn:'N',btnRowAddYn:'N',btnRowDelYn:'Y',btnRowDelObj:'btn_rowDelete2',gridID:'gr_sellingTrustSlipContents',rowDelFunction:'scwin.f_Selling_rowDel'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_input',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:170px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:170px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_slipNo',placeholder:'',style:'width:120px;',objType:'data','ev:onblur':'scwin.ed_slipNo_onblur',ref:'data:ds_slipHeader.slipNo',allowChar:'0-9'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_slipNo',style:'',type:'button','ev:onclick':'scwin.btn_slipNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표일자/회계처리일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ica_slipDt',class:'',calendarValueType:'yearMonthDate',mandatory:'true',ref:'data:ds_slipHeader.slipDt',validExp:'전표일자:yes:length=8',title:'전표일자',calendarDisplayFormat:'yyyy/MM/dd',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'/',class:''}},{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ica_postDt',class:'',calendarValueType:'yearMonthDate',ref:'data:ds_slipHeader.postDt',calendarDisplayFormat:'yyyy/MM/dd',displayFormat:'yyyy/MM/dd'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상계금액(원화/외화)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_amt',placeholder:'',style:'width:120px;',objType:'data',maxlength:'13',allowChar:'0-9',ref:'data:ds_slipHeader.amt',validExp:'상계금액(원화):no',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'/',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_amtFcrc',placeholder:'',style:'width:120px;',objType:'data',maxlength:'13',allowChar:'0-9',ref:'data:ds_slipHeader.amtFcrc',validExp:'상계금액(외화):no',displayFormat:'#,##0[floor]',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'알선수탁금 잔액(원화/외화)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_mediateTrustAmt',placeholder:'',style:'width:120px;',maxlength:'13',allowChar:'0-9',objType:'data',ref:'data:ds_slipHeader.mediateTrustAmt',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'/',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_mediateTrustAmtFcrc',placeholder:'',style:'width:120px;',maxlength:'13',allowChar:'0-9',ref:'data:ds_slipHeader.mediateTrustAmtFcrc',displayFormat:'#,##0[floor]',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'통화코드/환율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:120px;',id:'acb_crcCd',class:'',mandatory:'true',ref:'data:ds_slipHeader.crcCd','ev:onchange':'scwin.acb_crcCd_onchange',displayMode:'label'}},{T:1,N:'xf:input',A:{style:'width:100px;',id:'ed_exchRt',placeholder:'',class:'',allowChar:'0-9',ref:'data:ds_slipHeader.exchRt'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'미지급금액(원화/외화)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_nypayAmt',placeholder:'',style:'width:120px;',allowChar:'-0-9',ref:'data:ds_slipHeader.nypayAmt',dataType:'number',maxlength:'14',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'/',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_nypayAmtFcrc',placeholder:'',style:'width:120px;',maxlength:'13',allowChar:'0-9',readOnly:'true',ref:'data:ds_slipHeader.nypayAmtFcrc',dataType:'number',displayFormat:'#,###.##[floor]','ev:onblur':'scwin.ed_nypayAmtFcrc_onblur'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width: 250px;',codeId:'ed_clntNo',nameId:'ed_clntNm',id:'udc_clntNo',btnId:'btn_clntNo',objTypeName:'data',mandatoryName:'true','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent',code:'clntNo',name:'clntNm',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',mandatoryCode:'true',validTitle:'거래처',objTypeCode:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_setoff',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_setoff_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'상계삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_bond',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_bond_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'채권상계'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전표삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_create',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_create_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전표생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_new',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_new_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',codeId:'',id:'udc_gridComCode1',nameId:'',popupID:'',style:'visibility:hidden;'}}]}]}]}]}]})