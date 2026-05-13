/*amd /ui/ds/fs/adjm/fs_102_01_13b.xml 68774 f6aca138afceda7e9f78bccd3d5c1bad9cf43c8091966888e952606b39a53cca */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchHeavyEquipLoanChargeList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'admitPic',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtCls',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoConfirmDtSt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoConfirmDtEnd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtSt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtEnd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsCertiNo',name:'매입거래명세서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoConfirmClsCd',name:'협력업체확인구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsAdmitClsCd',name:'매입승인구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'unconfirmedIncluYn',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'unAdmitIncluYn',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'incluYn',name:'포함여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoClntNo',name:'협력업체거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_heavyEquipLoanChargeList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNm',name:'장비명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totInputHhCnt',name:'총투입시간수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realOprtHhCnt',name:'실가동시간수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptHhCnt',name:'매입적용시간수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsUpr',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hveqLoanAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prtgCost',name:'운반비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsPcostOp',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prtgCostOp',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'copCoConfirmClsCd',name:'협력업체확인구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoConfirmClsNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoConfirmDt',name:'협력업체확인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdmitClsCd',name:'매입승인구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdmitClsNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCertiNo',name:'매입거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCertiNoSeq',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsIntendDt',name:'매입예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsEvidYn',name:'매입증빙여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dissent',name:'이의',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pstpnRsn',name:'연기사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nesEqNrmCd',name:'필요장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nesEqNrmNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tformWrkImpleKndCd',name:'변형작업도구종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tformWrkImpleKndNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'매입순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_purchaseCerti'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDt',name:'매입예정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsGoodsPatternCd',name:'매입품목유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_purchasePostpone'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'pstpnRsn',name:'연기사유',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchHeavyEquipLoanChargeList',action:'/ds.fs.adjm.pchscerticoll.RetrieveHeavyEquipLoanChargeAdmissionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchHeavyEquipLoanChargeList","key":"IN_DS1"},{"id":"ds_heavyEquipLoanChargeList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_heavyEquipLoanChargeList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchHeavyEquipLoanChargeList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_NewPurchaseAdmission',action:'/ds.fs.adjm.pchscerticoll.RegistNewPurchaseAdmissionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_purchaseCerti","key":"IN_DS1"},{"action":"modified","id":"ds_heavyEquipLoanChargeList","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_NewPurchaseAdmission_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_AdditionPurchaseAdmission',action:'/ds.fs.adjm.pchscerticoll.RegistAdditionPurchaseAdmissionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_purchaseCerti","key":"IN_DS1"},{"action":"modified","id":"ds_heavyEquipLoanChargeList","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_AdditionPurchaseAdmission_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_PurchasePostpone',action:'/ds.fs.adjm.pchscerticoll.RegistPurchasePostponeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_heavyEquipLoanChargeList","key":"IN_DS1"},{"id":"dma_purchasePostpone","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_PurchasePostpone_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_PurchaseAdmissionCancel',action:'/ds.fs.adjm.pchscerticoll.RegistPurchaseAdmissionCancelCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_heavyEquipLoanChargeList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_PurchaseAdmissionCancel_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
//scwin.strPreDate = WebSquare.date.dateAdd(scwin.vCurDate, -2);
scwin.strPreDate = $c.date.addMonth($p, scwin.vCurDate, -1);
scwin.lobranCd = "";
scwin.lobranNm = "";

// TEST 매입거래처 641204

scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FS262",
    compID: "lc_pchsAdmitClsCd"
  }
  //{ grpCd : "LO102", compID : "gr_conversionUnitDTOList:basisUnit", opt : {"range" : "2,L"}},
  ];
  $c.data.setCommonCode($p, codeOptions);
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.lobranCd = memJson.lobranCd;
  scwin.lobranNm = memJson.lobranNm;
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    lc_dtCls.setSelectedIndex(1); // 일자구분
    scwin.f_SelWrkDt();
    lay_gubun7.setStyle("display", "none");
    //lay_gubun8.setStyle("display", "none");
    scwin.f_SetDefaultData();
    $c.gus.cfDisableAllBtn($p);
    ///임시
    /*
    ica_wrkDtSt.setValue("20210701");
    ica_wrkDtEnd.setValue("20210801");
     ed_pchsClntNo.setValue("641204");
    */
    ///임시        
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  scwin.f_GetPchsAdmitCntTotAmt(); // 건수/총금액 계산

  ica_copCoConfirmDtSt.setValue(scwin.vQryStDt); // 업체확인일자시작
  ica_copCoConfirmDtEnd.setValue(scwin.vQryEndDt); // 업체확인일자종료	
  ica_wrkDtSt.setValue(scwin.vQryStDt);
  ; // 운송일자시작		
  ica_wrkDtEnd.setValue(scwin.vQryEndDt); // 운송일자종료
  ica_pchsIntendDt.setValue(scwin.vCurDate); // 매입예정일자		

  $c.gus.cfDisableObjects($p, [ica_pchsIntendDt, ed_rmk, ed_certiNo, btn_certiNo, ed_hid_rmk, ed_pstpnRsn]);
  lc_wrkPlClsCd.setSelectedIndex(0); // 작업장구분

  ed_pchsDeptCd.setValue(scwin.lobranCd);
  ed_pchsDeptNm.setValue(scwin.lobranNm);
  ed_pchsDeptCd.focus();
};

//-------------------------------------------------------------------------
// 중기임차료승인 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveHeavyEquipLoanChargeList = async function () {
  // 검색조건 필수 입력 체크, 동일 날짜 포함 여부 체크
  if (lc_dtCls.getValue() == "01") {
    // 업체확인일자 기준			
    var chk01 = await $c.gus.cfValidate($p, [ed_pchsDeptCd, ed_pchsClntNo, ica_copCoConfirmDtSt, ica_copCoConfirmDtEnd]);
    if (!chk01) {
      return;
    }
    if (!(await $c.gus.cfIsAfterDate($p, ica_copCoConfirmDtSt.getValue(), ica_copCoConfirmDtEnd.getValue()))) {
      $c.win.alert($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
      ica_copCoConfirmDtSt.focus();
      return;
    }
  } else if (lc_dtCls.getValue() == "02") {
    // 작업일자 기준
    var chk02 = await $c.gus.cfValidate($p, [ed_pchsDeptCd, ed_pchsClntNo, ica_wrkDtSt, ica_wrkDtEnd]);
    //var chk02 = await $c.gus.cfValidate([tb_mainData]);

    if (!chk02) {
      return;
    }
    if (!(await $c.gus.cfIsAfterDate($p, ica_wrkDtSt.getValue(), ica_wrkDtEnd.getValue()))) {
      $c.win.alert($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
      ica_wrkDtSt.focus();
      return;
    }
  }

  // 구분(미확인포함여부/미승인포함여부)- 쿼리문에서 사용

  //if (/*chb_unconfirmedIncluYn.checked == false && */ chb_unAdmitIncluYn.getValue() == false) {
  if (chb_unAdmitIncluYn.getValue() == "false") {
    dma_searchHeavyEquipLoanChargeList.set("incluYn", "N");
  } else {
    dma_searchHeavyEquipLoanChargeList.set("incluYn", "Y");
  }

  //tr_searchHeavyEquipLoanChargeList.post();
  $c.sbm.execute($p, sbm_searchHeavyEquipLoanChargeList);
};

//-------------------------------------------------------------------------
// 신규매입승인 등록
//-------------------------------------------------------------------------
scwin.f_NewPurchaseAdmission = async function () {
  // Data 변경 여부 조회
  if (ds_heavyEquipLoanChargeList.getModifiedIndex().length == 0) {
    //cfAlertMsg(MSG_CM_ERR_001, ["자료"]);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
    return;
  }

  // 매입승인구분(FS262)이 02:승인이 아닌 경우
  var copCoConfirmClsCd = "";
  var pchsAdmitClsCd = "";
  for (var i = 0; i < ds_heavyEquipLoanChargeList.getRowCount(); i++) {
    copCoConfirmClsCd = ds_heavyEquipLoanChargeList.getCellData(i, "copCoConfirmClsCd");
    pchsAdmitClsCd = ds_heavyEquipLoanChargeList.getCellData(i, "pchsAdmitClsCd");
    if (ds_heavyEquipLoanChargeList.getCellData(i, "chk") == "T") {
      if (copCoConfirmClsCd != "02") {
        $c.win.alert($p, "업체확인이 확인인 경우만 가능합니다.");
        return;
      }
      if (pchsAdmitClsCd == "02") {
        $c.win.alert($p, "매입승인이 미승인, 보류인 경우만 가능합니다.");
        return;
      }
    }
  }

  // 매입예정일자 체크
  if (!(await $c.gus.cfValidate($p, [ica_pchsIntendDt]))) {
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    // 저장하시겠습니까?		
    dma_purchaseCerti.set("selpchItemCd", "0121"); // 매출입항목코드(중기임차료)
    dma_purchaseCerti.set("pchsGoodsPatternCd", "03"); // 매입품목유형코드(중기)

    dma_purchaseCerti.set("certiNo", ed_certiNo.getValue());
    dma_purchaseCerti.set("pchsDeptCd", ed_pchsDeptCd.getValue());
    dma_purchaseCerti.set("pchsClntNo", ed_pchsClntNo.getValue());
    dma_purchaseCerti.set("pchsIntendDt", ica_pchsIntendDt.getValue());
    dma_purchaseCerti.set("rmk", ed_rmk.getValue());
    /*
    tr_saveHeavyEquipLoanChargeList.KeyValue = "Servlet(I:IN_DS1=dma_purchaseCerti, I:IN_DS2=ds_heavyEquipLoanChargeList)";
    tr_saveHeavyEquipLoanChargeList.Action = "/ds.fs.adjm.pchscerticoll.RegistNewPurchaseAdmissionCMD.do";								
    tr_saveHeavyEquipLoanChargeList.Post();				    
    */
    $c.sbm.execute($p, sbm_NewPurchaseAdmission);
  }
};

//-------------------------------------------------------------------------
// 추가매입승인 등록
//-------------------------------------------------------------------------
scwin.f_AdditionPurchaseAdmission = async function () {
  // Data 변경 여부 조회
  if (ds_heavyEquipLoanChargeList.getModifiedIndex().length == 0) {
    //cfAlertMsg(MSG_CM_ERR_001, ["자료"]);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
    return;
  }

  // 매입승인구분(FS262)이 02:승인이 아닌 경우
  var copCoConfirmClsCd = "";
  var pchsAdmitClsCd = "";
  for (var i = 0; i < ds_heavyEquipLoanChargeList.getRowCount(); i++) {
    copCoConfirmClsCd = ds_heavyEquipLoanChargeList.getCellData(i, "copCoConfirmClsCd");
    pchsAdmitClsCd = ds_heavyEquipLoanChargeList.getCellData(i, "pchsAdmitClsCd");
    if (ds_heavyEquipLoanChargeList.getCellData(i, "chk") == "T") {
      if (copCoConfirmClsCd != "02") {
        $c.win.alert($p, "업체확인이 확인인 경우만 가능합니다.");
        return;
      }
      if (pchsAdmitClsCd == "02") {
        $c.win.alert($p, "매입승인이 미승인, 보류인 경우만 가능합니다.");
        return;
      }
    }
  }

  // 거래명세서번호 체크
  if (!(await $c.gus.cfValidate($p, [ed_certiNo]))) {
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    // 저장하시겠습니까?		
    dma_purchaseCerti.set("selpchItemCd", "0121"); // 매출입항목코드(중기임차료)
    dma_purchaseCerti.set("pchsGoodsPatternCd", "03"); // 매입품목유형코드(중기)

    dma_purchaseCerti.set("certiNo", ed_certiNo.getValue());
    dma_purchaseCerti.set("pchsDeptCd", ed_pchsDeptCd.getValue());
    dma_purchaseCerti.set("pchsClntNo", ed_pchsClntNo.getValue());
    dma_purchaseCerti.set("pchsIntendDt", ica_pchsIntendDt.getValue());
    dma_purchaseCerti.set("rmk", ed_rmk.getValue());
    /*
    tr_saveHeavyEquipLoanChargeList.KeyValue = "Servlet(I:IN_DS1=dma_purchaseCerti, I:IN_DS2=ds_heavyEquipLoanChargeList)";
    tr_saveHeavyEquipLoanChargeList.Action = "/ds.fs.adjm.pchscerticoll.RegistAdditionPurchaseAdmissionCMD.do";								
    tr_saveHeavyEquipLoanChargeList.Post();				    
    */
    $c.sbm.execute($p, sbm_AdditionPurchaseAdmission);
  }
};

//-------------------------------------------------------------------------
// 매입승인보류 등록
//-------------------------------------------------------------------------
scwin.f_PurchasePostpone = async function () {
  // Data 변경 여부 조회
  if (ds_heavyEquipLoanChargeList.getModifiedIndex().length == 0) {
    //cfAlertMsg(MSG_CM_ERR_001, ["자료"]);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
    return;
  }

  // 매입승인구분(FS262)이 01:미승인인 경우
  var pchsAdmitClsCd = "";
  for (var i = 0; i < ds_heavyEquipLoanChargeList.getRowCount(); i++) {
    pchsAdmitClsCd = ds_heavyEquipLoanChargeList.getCellData(i, "pchsAdmitClsCd");
    if (ds_heavyEquipLoanChargeList.getCellData(i, "chk") == "T") {
      if (pchsAdmitClsCd != "01") {
        $c.win.alert($p, "매입승인이 미승인인 경우만 가능합니다.");
        return;
      }
    }
  }

  // 보류사유 체크
  if (!(await $c.gus.cfValidate($p, [ed_pstpnRsn]))) {
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    // 저장하시겠습니까?	
    /*	
        tr_saveHeavyEquipLoanChargeList.KeyValue = "Servlet(I:IN_DS1=ds_heavyEquipLoanChargeList, I:IN_DS2=ds_purchasePostpone)";
        tr_saveHeavyEquipLoanChargeList.Action = "/ds.fs.adjm.pchscerticoll.RegistPurchasePostponeCMD.do";								
        tr_saveHeavyEquipLoanChargeList.Post();				    
    */
    $c.sbm.execute($p, sbm_PurchasePostpone);
  }
};

//-------------------------------------------------------------------------
// 매입승인취소 등록
//-------------------------------------------------------------------------
scwin.f_PurchaseAdmissionCancel = async function () {
  // Data 변경 여부 조회
  if (ds_heavyEquipLoanChargeList.getModifiedIndex().length == 0) {
    //cfAlertMsg(MSG_CM_ERR_001, ["자료"]);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
    return;
  }

  // 매입승인구분(FS262)이 02:승인인 경우와 매입확정 이전인 경우
  var pchsAdmitClsCd = "";
  var pchsEvidYn = "";
  for (var i = 0; i < ds_heavyEquipLoanChargeList.getRowCount(); i++) {
    pchsAdmitClsCd = ds_heavyEquipLoanChargeList.getCellData(i, "pchsAdmitClsCd");
    pchsEvidYn = ds_heavyEquipLoanChargeList.getCellData(i, "pchsEvidYn");
    if (ds_heavyEquipLoanChargeList.getCellData(i, "chk") == "T") {
      if (pchsAdmitClsCd != "02") {
        $c.win.alert($p, "매입승인이 승인인 경우만 가능합니다.");
        return;
      }
      if (pchsEvidYn == "Y") {
        $c.win.alert($p, "매입확정 이전인 경우만 가능합니다.");
        return;
      }
    }
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    // 저장하시겠습니까?	
    /*
        tr_saveHeavyEquipLoanChargeList.KeyValue = "Servlet(I:IN_DS1=ds_heavyEquipLoanChargeList)";
        tr_saveHeavyEquipLoanChargeList.Action = "/ds.fs.adjm.pchscerticoll.RegistPurchaseAdmissionCancelCMD.do";								
        tr_saveHeavyEquipLoanChargeList.Post();				    
    */
    $c.sbm.execute($p, sbm_PurchaseAdmissionCancel);
  }
};

//-------------------------------------------------------------------------
// 거래명세서번호 검색
//------------------------------------------------------------------------- 
scwin.f_OpenCertiNoPopUp = async function () {
  var args = new Array();
  if (ds_heavyEquipLoanChargeList.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_ERR_003);
    return;
  }
  if (!(await $c.gus.cfValidate($p, [ed_pchsDeptCd, ed_pchsClntNo]))) {
    return;
  }
  /*
  args["pchsDeptCd"] = ed_pchsDeptCd.Text;  // 매입부서
  args["pchsClntNo"] = ed_pchsClntNo.Text;  // 매입거래처
  args["selpchItemCd"] = "0121";  // 매출입항목코드(중기임차료)
  args["pchsGoodsPatternCd"] = "03";  // 매입품목유형코드(중기)		
  args["pchsIntendDtSt"] = ds_heavyEquipLoanChargeList.NameMin('wrkDt',0,0).toDate().firstDate().format("YYYYMMDD");  // 운송일자 Min(특정일자의 첫번째 날 리턴)
  args["pchsIntendDtEnd"] = ds_heavyEquipLoanChargeList.NameMax('wrkDt',0,0).toDate().lastDate().format("YYYYMMDD");  // 운송일자 Max(특정일자의 마지막 날 리턴)
   var popupResult = window.showModalDialog('/ds/fs/adjm/fs_102_01_16p.jsp?paramTitle=거래명세서번호 검색',args,"dialogWidth:500px;dialogHeight:550px;status:No");
  */
  var pchsIntendDtSt = 99999999;
  var pchsIntendDtEnd = 0;
  for (var i = 0; i < ds_heavyEquipLoanChargeList.getRowCount(); i++) {
    if (ds_heavyEquipLoanChargeList.getCellData(i, "wrkDt") < pchsIntendDtSt) {
      pchsIntendDtSt = ds_heavyEquipLoanChargeList.getCellData(i, "wrkDt");
      console.log("getCellData1 : " + ds_heavyEquipLoanChargeList.getCellData(i, "wrkDt"));
      console.log("pchsIntendDtSt1 : " + pchsIntendDtSt);
    }
    if (ds_heavyEquipLoanChargeList.getCellData(i, "wrkDt") > pchsIntendDtEnd) {
      pchsIntendDtEnd = ds_heavyEquipLoanChargeList.getCellData(i, "wrkDt");
      console.log("getCellData2 : " + ds_heavyEquipLoanChargeList.getCellData(i, "wrkDt"));
      console.log("pchsIntendDtSt2 : " + pchsIntendDtSt);
    }
  }
  if (pchsIntendDtSt == 0) pchsIntendDtSt = "";
  if (pchsIntendDtEnd == 0) pchsIntendDtEnd = "";
  var win_url = "/ui/ds/fs/adjm/fs_102_01_16p.xml";
  var opts = scwin.opts || {};
  opts.modal = true;
  opts.type = "browserPopup";
  opts.id = scwin.popupID || "pupup";
  opts.width = 900;
  opts.height = 400;
  opts.popupName = '거래명세서번호 검색';
  var param = {
    pchsDeptCd: ed_pchsDeptCd.getValue(),
    pchsClntNo: ed_pchsClntNo.getValue(),
    selpchItemCd: "0121",
    pchsGoodsPatternCd: "03",
    pchsIntendDtSt: pchsIntendDtSt,
    pchsIntendDtEnd: pchsIntendDtEnd
  };
  rtnList = await $c.win.openPopup($p, win_url, opts, param);
  console.log("rtnList : ", rtnList);

  // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
  if (rtnList != null) {
    ed_certiNo.setValue(rtnList.certiNo);
    ed_hid_rmk.setValue(rtnList.rmk);
  }
};

//-------------------------------------------------------------------------
// 조회건수/조회총금액, 매입승인건수/매입승인총금액 계산
//------------------------------------------------------------------------- 
scwin.f_GetPchsAdmitCntTotAmt = function () {
  // 사용료 + 운반비
  var qryCnt = 0;
  var qryTotAmt = 0;
  if (ds_heavyEquipLoanChargeList.getRowCount() > 0) {
    qryCnt = ds_heavyEquipLoanChargeList.getRowCount();
    /*
    qryTotAmt = ds_heavyEquipLoanChargeList.NameSum("hveqLoanAmt",0,0) + 
                ds_heavyEquipLoanChargeList.NameSum("prtgCost",0,0);
    */

    for (var i = 0; i < ds_heavyEquipLoanChargeList.getRowCount(); i++) {
      qryTotAmt += parseInt(ds_heavyEquipLoanChargeList.getCellData(i, "hveqLoanAmt"));
      qryTotAmt += parseInt(ds_heavyEquipLoanChargeList.getCellData(i, "prtgCost"));
    }
  }

  //lay_qryCnt.innerHTML = "&nbsp;<font color=\"blue\">" + cfInsertComma(qryCnt + "") + "</font>";		
  //lay_qryTotAmt.innerHTML = "&nbsp;<font color=\"blue\">" + cfInsertComma(qryTotAmt + "") + "</font>";
  spa_qryCnt.setValue(qryCnt);
  spa_qryTotAmt.setValue(qryTotAmt);

  // 매입승인구분이 승인(02)인 경우만 사용료 + 운반비 계산		
  var pchsAdmitCnt = 0;
  var pchsAdmitTotAmt = 0;
  for (var i = 0; i < ds_heavyEquipLoanChargeList.getRowCount(); i++) {
    if (ds_heavyEquipLoanChargeList.getCellData(i, "pchsAdmitClsCd") == "02") {
      //pchsAdmitTotAmt += ds_heavyEquipLoanChargeList.getCellData(i, "hveqLoanAmt") + ds_heavyEquipLoanChargeList.getCellData(i, "prtgCost");
      pchsAdmitTotAmt += parseInt(ds_heavyEquipLoanChargeList.getCellData(i, "hveqLoanAmt"));
      pchsAdmitTotAmt += parseInt(ds_heavyEquipLoanChargeList.getCellData(i, "prtgCost"));
      pchsAdmitCnt++;
    }
  }

  //lay_pchsAdmitCnt.innerHTML = "&nbsp;<font color=\"blue\">" + cfInsertComma(pchsAdmitCnt + "") + "</font>";		
  //lay_pchsAdmitTotAmt.innerHTML = "&nbsp;<font color=\"blue\">" + cfInsertComma(pchsAdmitTotAmt + "") + "</font>";
  spa_pchsAdmitCnt.setValue(pchsAdmitCnt);
  spa_pchsAdmitTotAmt.setValue(pchsAdmitTotAmt);
};

//-------------------------------------------------------------------------
// 업체확인일자 선택
//------------------------------------------------------------------------- 
scwin.f_SelCopCoConfirmDt = function () {
  //lay_gubun1.style.display = "block";
  //udc_copCoConfirmDt.setStyle("display","block");
  udc_copCoConfirmDt.show();
  udc_wrkDt.hide();
  //lay_gubun2.style.display = "none";
  //lay_gubun3.style.position = "relative";  // 매입승인구분 위치 가변
  //lay_gubun3.style.left = "0px";  // 매입승인구분 left 위치 지정			
  //lay_gubun3.style.display = "block";			
  //lay_gubun4.style.display = "none";	
  //udc_wrkDt.setStyle("display","none");
  //lay_gubun5.style.display = "none";
  //lay_gubun6.style.position = "relative";  // 일자범위이전 동부미승인 포함 위치 가변
  //lay_gubun6.style.left = "0px";  // 일자범위이전 동부미승인 포함 left 위치 지정			
  //lay_gubun6.style.display = "block";	
};

//-------------------------------------------------------------------------
// 운송일자 선택
//------------------------------------------------------------------------- 
scwin.f_SelWrkDt = function () {
  //lay_gubun1.style.display = "none";
  //udc_copCoConfirmDt.setStyle("display","none");
  udc_copCoConfirmDt.hide();
  udc_wrkDt.show();
  //lay_gubun2.style.display = "block";
  //lay_gubun3.style.position = "relative";  // 매입승인구분 위치 가변
  //lay_gubun3.style.left = "220px";  // 매입승인구분 left 위치 지정						
  //lay_gubun3.style.display = "block";			
  //lay_gubun4.style.display = "block";
  //udc_wrkDt.setStyle("display","block");
  //lay_gubun5.style.display = "block";
  //lay_gubun6.style.position = "relative";  // 일자범위이전 동부미승인 포함 위치 가변
  //lay_gubun6.style.left = "220px";  // 일자범위이전 동부미승인 포함 left 위치 지정						
  //lay_gubun6.style.display = "block";	
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      // 점소 팝업			
      rtnList = udc_pchsDeptCd.cfCommonPopUp(scwin.callbackLobranInfo, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //cfSetReturnValue(rtnList, ed_pchsDeptCd, ed_pchsDeptNm);  // 점소코드, 점소명
      break;
    case 2:
      // 협력회사 팝업			
      rtnList = udc_pchsClntNo.cfCommonPopUp(scwin.callbackClntList1, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //cfSetReturnValue(rtnList, ed_pchsClntNo, ed_pchsClntNm);  // 협력회사코드, 협력회사명				
      break;
    case 3:
      // 작업장 팝업			
      rtnList = udc_wrkPlCd.cfCommonPopUp(scwin.callbackWrkPlInfo, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //cfSetReturnValue(rtnList, ed_wrkPlCd, ed_wrkPlNm);  // 작업장코드, 작업장명					  				  									
      break;
    case 4:
      // 장비 팝업			
      rtnList = udc_vehclShortCd.cfCommonPopUp(scwin.callbackKndVehclListInfo, pCode.trim(), pName, pClose, '2', null, null, '3,4,5,6,7,8,9,10', 'LO,LH', null, null, null, null, null, pAllSearch, null);

      //cfSetReturnValue(rtnList, ed_vehclShortCd, ed_vehclNo);  // 차량번호, 차량단축코드
      break;
    case 5:
      // 승인담당자 팝업		
      rtnList = udc_admitPic.fCommonPopUp(scwin.callbackEmpInfo, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //cfSetReturnValue(rtnList, ed_admitPic, ed_admitPicNm);  // 사번, 성명				
      break;
    case 9:
      //본선관리번호
      /*
      var args = new Array();
      args[0] = ed_cvsslMgntNo.getValue(); //본선관리번호
              
      var rtnValues = window.showModalDialog('/ds/op/wrkplan/stvwrkplan/op_204_01_07p.jsp?paramTitle=본선관리번호검색팝업'
                                              ,args
                                              ,"dialogWidth:900px; dialogHeight:400px; status:No");
      */
      var win_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
      var opts = scwin.opts || {};
      opts.modal = true;
      opts.type = "browserPopup";
      opts.id = scwin.popupID || "pupup";
      opts.width = 900;
      opts.height = 400;
      opts.popupName = '본선관리번호검색팝업';
      var param = {
        cvsslMgntNo: ed_cvsslMgntNo.getValue()
      };
      rtnList = await $c.win.openPopup($p, win_url, opts, param);
      console.log("rtnList : ", rtnList);
      if (rtnList != null) {
        ed_cvsslMgntNo.setValue(rtnList[0]);
      }
      break;
    case 10:
      // 협력회사 팝업			
      rtnList = udc_copCoClntNo.cfCommonPopUp(scwin.callbackClntList2, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //cfSetReturnValue(rtnList, ed_copCoClntNo, ed_copCoClntNm);  // 협력회사코드, 협력회사명				
      break;
    default:
      break;
  }
};
scwin.callbackLobranInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_pchsDeptCd, ed_pchsDeptNm); // 점소코드, 점소명
};
scwin.callbackClntList1 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_pchsClntNo, ed_pchsClntNm); // 협력회사코드, 협력회사명				
};
scwin.callbackWrkPlInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, ed_wrkPlNm); // 작업장코드, 작업장명					  				  									
};
scwin.callbackKndVehclListInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_vehclShortCd, ed_vehclNo); // 차량번호, 차량단축코드
};
scwin.callbackEmpInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_admitPic, ed_admitPicNm); // 사번, 성명				
};
scwin.callbackClntList2 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_copCoClntNo, ed_copCoClntNm); // 협력회사코드, 협력회사명				
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
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  var dtCls = lc_dtCls.getValue();
  $c.gus.cfInitObjects($p, tb_mainData);
  lc_dtCls.setValue(dtCls);
  scwin.f_SetDefaultData();
};
scwin.udc_pchsDeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_pchsDeptCd.getValue(), ed_pchsDeptNm.getValue(), 'F', 'T');
};
scwin.udc_pchsDeptCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptCd, ed_pchsDeptNm, 1);
};
scwin.udc_pchsDeptCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptNm, ed_pchsDeptCd, 1, false);
};
scwin.udc_pchsClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_pchsClntNo.getValue(), ed_pchsClntNm.getValue(), 'F', 'F');
};
scwin.udc_pchsClntNo_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNo, ed_pchsClntNm, 2);
};
scwin.udc_pchsClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNm, ed_pchsClntNo, 2, false);
};
scwin.udc_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'F', 'T');
};
scwin.udc_wrkPlCd_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlNm, 3);
};
scwin.udc_wrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 3, false);
};
scwin.udc_vehclShortCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_vehclShortCd.getValue(), ed_vehclNo.getValue(), 'F', 'F');
};
scwin.udc_vehclShortCd_onviewchangeCodeEvent = function (info) {};
scwin.udc_vehclShortCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_vehclNo, ed_vehclShortCd, 4, false);
};
scwin.udc_admitPic_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_admitPic.getValue(), ed_admitPicNm.getValue(), 'F', 'T');
};
scwin.udc_admitPic_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_admitPic, ed_admitPicNm, 5);
};
scwin.udc_admitPic_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_admitPicNm, ed_admitPic, 5, false);
};
scwin.btn_cvsslMgntNo_onclick = function (e) {
  scwin.f_openCommonPopUp(9, 'F');
};
scwin.udc_copCoClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(10, ed_copCoClntNo.getValue(), ed_copCoClntNm.getValue(), 'F', 'F');
};
scwin.udc_copCoClntNo_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_copCoClntNo, ed_copCoClntNm, 10);
};
scwin.udc_copCoClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_copCoClntNm, ed_copCoClntNo, 10, false);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_RetrieveHeavyEquipLoanChargeList();
};
scwin.btn_Create1_onclick = function (e) {
  scwin.f_PurchasePostpone();
};
scwin.btn_Create2_onclick = function (e) {
  scwin.f_PurchaseAdmissionCancel();
};
scwin.btn_Create3_onclick = function (e) {
  scwin.f_NewPurchaseAdmission();
};
scwin.btn_Create4_onclick = function (e) {
  scwin.f_AdditionPurchaseAdmission();
};
scwin.btn_certiNo_onclick = function (e) {
  scwin.f_OpenCertiNoPopUp();
};
scwin.sbm_searchHeavyEquipLoanChargeList_submitdone = function (e) {
  // 총 조회건수 표시
  var rowCnt = ds_heavyEquipLoanChargeList.getRowCount();
  spa_cnt.setValue(rowCnt);

  // 건수/총금액 계산
  scwin.f_GetPchsAdmitCntTotAmt();

  //gr_heavyEquipLoanChargeList.ColumnProp('chk','HeadCheck') = "false";
  ica_pchsIntendDt.setValue(scwin.vCurDate); // 매입예정일자
  ed_rmk.setValue(""); // 비고
  ed_certiNo.setValue(""); // 거래명세서번호
  ed_hid_rmk.setValue(""); // 비고		
  ed_pstpnRsn.setValue(""); // 보류사유

  if (rowCnt == 0) {
    $c.gus.cfDisableAllBtn($p);
    $c.gus.cfDisableObjects($p, [ica_pchsIntendDt, ed_rmk, ed_certiNo, btn_certiNo, ed_hid_rmk, ed_pstpnRsn]);
    $c.win.alert($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  } else {
    $c.gus.cfEnableAllBtn($p);
    $c.gus.cfEnableObjects($p, [ica_pchsIntendDt, ed_rmk, btn_certiNo, ed_pstpnRsn]);
  }
};
scwin.sbm_NewPurchaseAdmission_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    scwin.f_RetrieveHeavyEquipLoanChargeList();
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  } else {
    if (e.responseJSON.resultDataSet[1] != null && e.responseJSON.resultDataSet[1].Msg != null && e.responseJSON.resultDataSet[1].Msg != "") {
      $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    }
  }
};
scwin.sbm_AdditionPurchaseAdmission_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    scwin.f_RetrieveHeavyEquipLoanChargeList();
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  } else {
    if (e.responseJSON.resultDataSet[1] != null && e.responseJSON.resultDataSet[1].Msg != null && e.responseJSON.resultDataSet[1].Msg != "") {
      $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    }
  }
};
scwin.sbm_PurchasePostpone_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    scwin.f_RetrieveHeavyEquipLoanChargeList();
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  } else {
    if (e.responseJSON.resultDataSet[1] != null && e.responseJSON.resultDataSet[1].Msg != null && e.responseJSON.resultDataSet[1].Msg != "") {
      $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    }
  }
};
scwin.sbm_PurchaseAdmissionCancel_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    scwin.f_RetrieveHeavyEquipLoanChargeList();
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  } else {
    if (e.responseJSON.resultDataSet[1] != null && e.responseJSON.resultDataSet[1].Msg != null && e.responseJSON.resultDataSet[1].Msg != "") {
      $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    }
  }
};
scwin.lc_wrkPlClsCd_onviewchange = function (info) {
  ed_wrkPlCd.setValue(""); // 작업장코드
  ed_wrkPlNm.setValue(""); // 작업장명		

  if (lc_wrkPlClsCd.getValue() == "C" || lc_wrkPlClsCd.getValue() == "F" || lc_wrkPlClsCd.getValue() == "E") {
    lay_gubun7.setStyle("display", "block");
    //lay_gubun7.style.display = "block";	
    //lay_gubun8.style.display = "block";	
  } else if (lc_wrkPlClsCd.getValue() == "" || lc_wrkPlClsCd.getValue() == "P" || lc_wrkPlClsCd.getValue() == "W") {
    lay_gubun7.setStyle("display", "none");
    //lay_gubun7.style.display = "none";						
    //lay_gubun8.style.display = "none";						
  }
};
scwin.lc_dtCls_onviewchange = function (info) {};
scwin.lc_dtCls_onchange = function (info) {
  if (lc_dtCls.getValue() == "01") {
    // 업체확인일자 선택
    scwin.f_SelCopCoConfirmDt();
  } else if (lc_dtCls.getValue() == "02") {
    // 작업일자 선택
    scwin.f_SelWrkDt();
  }
};
scwin.excelDown = function () {
  const options = {
    fileName: "중기임차료 매입 승인.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "중기임차료 매입 승인",
    startRowIndex: 2,
    startColumnIndex: 0
  };

  // 타이틀
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 9,
    text: "중기임차료 매입 승인",
    textAlign: "center",
    drawBorder: false,
    fontSize: "18px"
  }, {
    rowIndex: 1,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 9,
    textAlign: "left",
    drawBorder: false
  }];
  $c.data.downloadGridViewExcel($p, gr_heavyEquipLoanChargeList, options, infoArr);
};
scwin.format = function () {
  return "";
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_pchsDeptCd',nameId:'ed_pchsDeptNm',id:'udc_pchsDeptCd',btnId:'btn_pchsDeptCd',selectID:'retrieveLobranInfo','ev:onclickEvent':'scwin.udc_pchsDeptCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_pchsDeptCd_onviewchangeNameEvent',mandatoryCode:'true',validExpCode:'매입부서:yes',objTypeCode:'Data',objTypeName:'Data',refDataCollection:'dma_searchHeavyEquipLoanChargeList',code:'pchsDeptCd',UpperFlagCode:'1',allowCharCode:'0-9,A-Z,a-z',validTitle:'매입부서','ev:onblurCodeEvent':'scwin.udc_pchsDeptCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'width: 0',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'lc_dtCls',search:'start',style:'width:120px;',submenuSize:'auto',objType:'data',allOption:'',chooseOption:'',ref:'data:dma_searchHeavyEquipLoanChargeList.dtCls','ev:onviewchange':'scwin.lc_dtCls_onviewchange','ev:onchange':'scwin.lc_dtCls_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'업체확인일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'작업일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'width: 260px;',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_copCoConfirmDt',refDataMap:'dma_searchHeavyEquipLoanChargeList',refEdDt:'copCoConfirmDtEnd',refStDt:'copCoConfirmDtSt',style:'',edToId:'ica_copCoConfirmDtEnd',edFromId:'ica_copCoConfirmDtSt',objTypeFrom:'Data',objTypeTo:'Data',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data',titleFrom:'업체확인일자시작',titleTo:'업체확인일자종료',validChkYn:'Y'}},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_wrkDt',refDataMap:'dma_searchHeavyEquipLoanChargeList',refEdDt:'wrkDtEnd',refStDt:'wrkDtSt',style:'',edFromId:'ica_wrkDtSt',edToId:'ica_wrkDtEnd',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'작업일자시작',titleTo:'작업일자종료',validChkYn:'Y'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',style:'width: 0',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래명세서번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_pchsCertiNo',placeholder:'',style:'width:230px;',maxlength:'12',validExp:'거래명세서번호:yes',objType:'Data',ref:'data:dma_searchHeavyEquipLoanChargeList.pchsCertiNo'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_pchsClntNo',btnId:'btn_pchsClntNo',id:'udc_pchsClntNo',nameId:'ed_pchsClntNm',mandatoryCode:'true',validExpCode:'매입거래처:yes',objTypeCode:'Data',objTypeName:'data','ev:onclickEvent':'scwin.udc_pchsClntNo_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_pchsClntNo_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_pchsClntNo_onviewchangeNameEvent',refDataCollection:'dma_searchHeavyEquipLoanChargeList',code:'pchsClntNo',selectID:'retrieveClntList',validTitle:'매입거래처',allowCharCode:'0-9',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입승인구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:autoComplete',A:{chooseOption:'true',chooseOptionLabel:'전체',class:'',displayMode:'value delim label',editType:'select',id:'lc_pchsAdmitClsCd',ref:'data:dma_searchHeavyEquipLoanChargeList.pchsAdmitClsCd',search:'start',style:'width:183px;',submenuSize:'auto',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'name'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'code'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',disabled:'',falseValue:'false',id:'chb_unAdmitIncluYn',objType:'data',ref:'data:dma_searchHeavyEquipLoanChargeList.unAdmitIncluYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일자범위이전 매입 미승인 포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'true'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_wrkPlClsCd',search:'start',style:'width:230px;',submenuSize:'auto',chooseOption:'true',allOption:'',ref:'data:dma_searchHeavyEquipLoanChargeList.wrkPlClsCd',validExp:'작업장구분:yes',objType:'Data','ev:onviewchange':'scwin.lc_wrkPlClsCd_onviewchange',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'본선 부두 작업'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'P'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CY 작업'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CFS 작업'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자사작업장(임대포함) 작업'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'타창고 작업'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'W'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'lay_gubun7'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',ref:'',style:'width: 130px;',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_wrkPlCd',btnId:'btn_wrkPlCd',id:'udc_wrkPlCd',nameId:'ed_wrkPlNm',objTypeCode:'data',objTypeName:'data',maxlengthCode:'5','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_wrkPlCd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent',refDataCollection:'dma_searchHeavyEquipLoanChargeList',code:'wrkPlCd',selectID:'retrieveWrkPlInfo'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_vehclShortCd',btnId:'btn_vehclShortCd',id:'udc_vehclShortCd',nameId:'ed_vehclNo','ev:onclickEvent':'scwin.udc_vehclShortCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_vehclShortCd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_vehclShortCd_onviewchangeNameEvent',objTypeCode:'data',objTypeName:'data',maxlengthName:'12',maxlengthCode:'7',refDataCollection:'dma_searchHeavyEquipLoanChargeList',selectID:'retrieveKndVehclListInfo',name:'vehclNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인담당자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_admitPic',btnId:'btn_admitPic',id:'udc_admitPic',nameId:'ed_admitPicNm',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_admitPic_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_admitPic_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_admitPic_onviewchangeNameEvent',refDataCollection:'dma_searchHeavyEquipLoanChargeList',code:'admitPic',selectID:'retrieveEmpInfo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width: 85px;',objType:'data',validExp:'본선관리번호:yes',maxlength:'8',ref:'data:dma_searchHeavyEquipLoanChargeList.cvsslMgntNo'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_copCoClntNo',btnId:'btn_copCoClntNo',id:'udc_copCoClntNo',validExpCode:'협력회사:yes',mandatoryCode:'Data',objTypeName:'data',nameId:'ed_copCoClntNm','ev:onclickEvent':'scwin.udc_copCoClntNo_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_copCoClntNo_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_copCoClntNo_onviewchangeNameEvent',refDataCollection:'dma_searchHeavyEquipLoanChargeList',code:'copCoClntNo',selectID:'retrieveClntList'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_heavyEquipLoanChargeList',gridUpYn:'N',gridDownObjType:'X',gridDownFn:'scwin.excelDown',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_heavyEquipLoanChargeList',id:'gr_heavyEquipLoanChargeList',style:'',visibleRowNum:'10',visibleRowNumFix:'true',fixedColumn:'1',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column12345',inputType:'checkbox',width:'50',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'매입부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'장비번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'장비명',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'작업장',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'적용규격',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'경과시간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'가동시간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'적용시간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'단가',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'총사용료<br/>(매입액)',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'운반비',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'매입원가',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'운반비',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'업체확인',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column47',value:'업체확인일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'매입승인',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'거래명세서번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column41',value:'매입예정일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column39',value:'비고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'매입증빙',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column35',value:'이의처리',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column33',value:'보류사유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'작업단계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'시작시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'종료시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',value:'실규격',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'변형장비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'본선관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'협력업체',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',valueType:'other',trueValue:'T',falseValue:'F',checkAlways:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsDeptCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNm',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'nesEqNrmNm',inputType:'text',width:'70',readOnly:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totInputHhCnt',inputType:'text',width:'70',readOnly:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realOprtHhCnt',inputType:'text',width:'70',readOnly:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAdptHhCnt',inputType:'text',width:'70',readOnly:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsUpr',inputType:'text',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,###',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hveqLoanAmt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prtgCost',displayMode:'label',textAlign:'right',readOnly:'true',sortable:'false',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsPcostOp',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prtgCostOp',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vat',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'copCoConfirmClsNm',displayMode:'label',readOnly:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'copCoConfirmDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsAdmitClsNm',displayMode:'label',readOnly:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsCertiNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'pchsIntendDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left',readOnly:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsEvidYn',displayMode:'label',readOnly:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'dissent',displayMode:'label',textAlign:'left',readOnly:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'pstpnRsn',displayMode:'label',textAlign:'left',readOnly:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkStpNm',displayMode:'label',readOnly:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkStHh',displayMode:'label',readOnly:'true',displayFormat:'####/##/## ##:##',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkEndHh',displayMode:'label',readOnly:'true',displayFormat:'####/##/## ##:##',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'eqNrmNm',displayMode:'label',readOnly:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'tformWrkImpleKndNm',displayMode:'label',readOnly:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'copCoClntNm',displayMode:'label',textAlign:'left',readOnly:'true',sortable:'false'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회건수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'spa_qryCnt',label:'0',style:'',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회총금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'spa_qryTotAmt',label:'0',style:'',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인건수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'spa_pchsAdmitCnt',label:'0',style:'',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인총금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'spa_pchsAdmitTotAmt',label:'0',style:'',displayFormat:'#,###',dataType:'number'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입예정일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_pchsIntendDt',pickerType:'dynamic',style:'',mandatory:'true',objType:'data',validExp:'매입예정일자:yes:length=8'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_rmk',placeholder:'',style:'',validExp:'비고:yes',objType:'Data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래명세서번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_certiNo',placeholder:'',style:'width: 120px;',maxlength:'11',mandatory:'true',validExp:'거래명세서번호:yes',objType:'Data',ref:'data:ds_purchaseCerti.certiNo',title:'거래명세서'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_certiNo',style:'',type:'button','ev:onclick':'scwin.btn_certiNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_hid_rmk',placeholder:'',style:'',validExp:'비고:yes'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'보류사유',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_pstpnRsn',placeholder:'',style:'',mandatory:'true',validExp:'보류사유:yes',objType:'Data',ref:'data:dma_purchasePostpone.pstpnRsn',title:'보류사유'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Create1',label:'저장',style:'',type:'button',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.btn_Create1_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'매입 승인 보류'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Create2',label:'저장',style:'',type:'button',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.btn_Create2_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'매입 승인 취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Create3',label:'저장',style:'',type:'button',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.btn_Create3_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규 매입 승인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Create4',label:'저장',style:'',type:'button',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.btn_Create4_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'추가 매입 승인'}]}]}]}]}]}]}]}]}]})