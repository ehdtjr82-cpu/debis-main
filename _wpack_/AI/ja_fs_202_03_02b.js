/*amd /AI/ja_fs_202_03_02b.xml 73277 a6667cc2ea4ba06f1b22ac48b1680ae92bd0d242aee86d53e69dda8872c7009d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_order',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'청구부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgOdrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCreatYn',name:'매입생성여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자체구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'환종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'오더삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'order',name:'오더',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_certiCommon',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'세금계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'환종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fireInsrRateAmt',name:'기타금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wcrcDcsnClsCd',name:'원화확정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc',name:'청구금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcrcBilgAmt',name:'외화청구금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급가액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCertiNo',name:'상위거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiPatternCd',name:'거래명세서유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmId',name:'프로그램ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiCreatYn',name:'거래명세서생성여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaPatternCd',name:'기재서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseCerti',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptNm',name:'매입부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매입거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급가액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_unitySelling',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellSeq',name:'매출순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNM',name:'매출귀속부서명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemNm',name:'매출항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출원화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'매출외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'매출부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsVatAmt',name:'매입부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totSellAmt',name:'매출합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totPchsAmt',name:'매입합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'매입순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNoQry',name:'매출품명번호조회',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'환종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급가액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적기준일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgTrgtYn',name:'청구대상여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wtUnitCd',name:'중량단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitClsCd',name:'단위구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiInscrpSellItemNm',name:'기재매출항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCdDesc',name:'매출귀속부서설명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderNum',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fmlapattern',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaNm',name:'서식명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tempExcel',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출원화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'매출외화',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excel',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출원화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'매출외화',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveGeneralBillingOrder',action:'/ja.ds.fs.bilg.bilg.JaRetrieveGeneralBillingOrderCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_order","key":"OUT_DS1"},{"id":"ds_certiCommon","key":"OUT_DS2"},{"id":"ds_purchaseCerti","key":"OUT_DS3"},{"id":"ds_unitySelling","key":"OUT_DS4"}]',target:'data:json,[{"id":"ds_order","key":"OUT_DS1"},{"id":"ds_certiCommon","key":"OUT_DS2"},{"id":"ds_purchaseCerti","key":"OUT_DS3"},{"id":"ds_unitySelling","key":"OUT_DS4"}]','ev:submitdone':'scwin.sbm_retrieveGeneralBillingOrder_submitdone','ev:submiterror':'scwin.sbm_retrieveGeneralBillingOrder_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_registGeneralBillingOrder',action:'/ja.ds.fs.bilg.bilg.JaRegistGeneralBillingOrderCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_order","key":"IN_DS1"},{"id":"ds_unitySelling","key":"IN_DS2"},{"id":"ds_certiCommon","key":"IN_DS3"},{"id":"ds_purchaseCerti","key":"IN_DS4"},{"id":"ds_orderNum","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_orderNum","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_registGeneralBillingOrder_submitdone','ev:submiterror':'scwin.sbm_registGeneralBillingOrder_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_deleteGeneralBillingOrder',action:'/ja.ds.fs.bilg.bilg.JaDeleteGeneralBillingOrderCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_order","key":"IN_DS1"},{"id":"ds_unitySelling","key":"IN_DS2"},{"id":"ds_certiCommon","key":"IN_DS3"},{"id":"ds_purchaseCerti","key":"IN_DS4"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_deleteGeneralBillingOrder_submitdone','ev:submiterror':'scwin.sbm_deleteGeneralBillingOrder_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveFmlaPattern',action:'/ja.ds.fs.bilg.bilg.JaRetrieveProgramEachCertiFormulaCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[]',target:'data:json,[{"id":"ds_fmlapattern","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveFmlaPattern_submitdone','ev:submiterror':'scwin.sbm_retrieveFmlaPattern_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vLoginCoCd = "";
scwin.vLoginCoClsCd = "";
scwin.vUserHomeClsCd = "";
scwin.isSubCompany = false;
scwin.quantityOfRows = "";
scwin.pageNumber = "1";
scwin.vCoCd = "";
scwin.vCoClsCd = "";
scwin.txtCoClsCd = "";
scwin.hd_acctCdGbn = "";
scwin.hd_acctDeptCdGbn = "";
scwin.MSG_FS_WRN_020 = "통합매출입 정보를 생성해야 합니다.";
scwin.MSG_FS_WRN_021 = "CNTR-NO를 입력해야 합니다.";
scwin.MSG_FS_WRN_022 = "품명(장비)코드를 입력해야 합니다.";
scwin.pgmId = "ja_fs_202_03_02b.xml";
scwin.dcsnClsCd = "2";
scwin.arg = "NEW";
scwin.vCurDate = "";
scwin.empNo = "";
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.empNo = $c.ses.getUserId();
  let params = $c.data.getParameter($p);
  if (params != null) {
    if (params["flag"] != null && params["flag"] != "") {
      scwin.arg = params["flag"];
    }
    if (params["odrNo"] != null) {
      scwin.paramOdrNo = params["odrNo"];
    } else {
      scwin.paramOdrNo = "";
    }
  } else {
    scwin.paramOdrNo = "";
  }
  scwin.vLoginCoCd = $c.ses.getCoCd() || "";
  scwin.vLoginCoClsCd = $c.ses.getCoClsCd() || "";
  scwin.vUserHomeClsCd = $c.ses.getUserHomeClsCd() || "";
  scwin.vCoCd = scwin.vLoginCoCd;
  scwin.vCoClsCd = scwin.vLoginCoClsCd;
  scwin.f_Set("INIT");
};
scwin.onUdcCompleted = function () {
  scwin.f_Clear();
  scwin.f_setCompanyInfo();
  scwin.f_RetrieveFmalPattern();
  scwin.f_GetSellItemCd();
  scwin.f_Retrieve(scwin.arg);
  $c.gus.cfDisableObjects($p, [bSave, bDelete]);
};
scwin.f_Set = function (mode) {
  if (mode == "INIT") {}
};
scwin.f_Retrieve = async function (arg) {
  let odrNo;
  if (arg == "DETAIL") {
    ed_odrNo.setValue(scwin.paramOdrNo);
    odrNo = scwin.paramOdrNo;
  } else if (arg == "REFERENCE") {
    odrNo = scwin.paramOdrNo;
  } else if (arg == "INPUT") {
    scwin.arg = arg;
    let chk = await $c.gus.cfValidate($p, [ed_odrNo]);
    if (!chk) {
      return;
    }
    odrNo = ed_odrNo.getValue();
  } else {
    odrNo = "";
  }
  dma_queryCondition.set("odrNo", odrNo);
  dma_queryCondition.set("coCd", ed_coCd.getValue());
  scwin.f_Clear();
  await $c.sbm.execute($p, sbm_retrieveGeneralBillingOrder);
};
scwin.f_RetrieveFmalPattern = function () {
  let p_bilgLodeptCd = scwin.vCoCd;
  let p_pgmId = "ja_fs_202_03_02b.xml";
  let p_fmlaClsCd = lc_fmlaClsCd.getValue();
  sbm_retrieveFmlaPattern.action = "/ja.ds.fs.bilg.bilg.JaRetrieveProgramEachCertiFormulaCMD.do?sysCd=JaCertiFormulaEBC&queryId=jaRetrieveProgramEachCertiFormulaList&bilgLodeptCd=" + p_bilgLodeptCd + "&pgmId=" + p_pgmId + "&fmlaClsCd=" + p_fmlaClsCd + "&coCd=" + scwin.vCoCd;
  $c.sbm.execute($p, sbm_retrieveFmlaPattern);
};
scwin.f_OdrNORetrieve = async function () {
  scwin.arg = "INPUT";
  dma_queryCondition.set("coCd", ed_coCd.getValue());
  let odrNoVal = dtl_odrNo.getValue();
  if (odrNoVal != null && odrNoVal != "") {
    dma_queryCondition.set("odrNo", odrNoVal);
  } else {
    dma_queryCondition.set("odrNo", ds_orderNum.getCellData(0, "odrNo"));
  }
  await $c.sbm.execute($p, sbm_retrieveGeneralBillingOrder);
};
scwin.f_AddRow = async function () {
  if (lc_crcCd.getValue() != "KRW" && (lc_sellTaxnClsCd.getValue() == "01" || lc_sellTaxnClsCd.getValue() == "04")) {
    await $c.win.alert($p, "환종이 외화일경우 과세일 수 없습니다.");
    lc_sellTaxnClsCd.setFocus();
    return;
  }
  let old_rowposition = ds_unitySelling.getRowPosition();
  ds_unitySelling.insertRow(ds_unitySelling.getRowCount());
  $c.gus.cfEnableObjects($p, [bSave, bDelete]);
  let curRow = ds_unitySelling.getRowPosition();
  if (ds_unitySelling.getRowCount() == 1) {
    lc_odrKndCd.setDisabled(true);
    lc_fmlaClsCd.setDisabled(true);
    lc_fmlaPatternCd.setDisabled(true);
    lc_crcCd.setDisabled(true);
    lc_sellTaxnClsCd.setDisabled(true);
    lc_pchsTaxnClsCd.setDisabled(true);
    ds_unitySelling.setCellData(curRow, "sellSeq", 1);
  } else {
    let maxSellSeq = 0;
    for (let r = 0; r < ds_unitySelling.getRowCount(); r++) {
      let v = Number(ds_unitySelling.getCellData(r, "sellSeq")) || 0;
      if (v > maxSellSeq) maxSellSeq = v;
    }
    ds_unitySelling.setCellData(curRow, "sellSeq", maxSellSeq + 1);
    ds_unitySelling.setCellData(curRow, "sellItemCd", ds_unitySelling.getCellData(old_rowposition, "sellItemCd"));
    ds_unitySelling.setCellData(curRow, "sellItemNm", ds_unitySelling.getCellData(old_rowposition, "sellItemNm"));
    ds_unitySelling.setCellData(curRow, "sellCommNo", ds_unitySelling.getCellData(old_rowposition, "sellCommNo"));
    ds_unitySelling.setCellData(curRow, "sellCommNoQry", ds_unitySelling.getCellData(old_rowposition, "sellCommNoQry"));
    ds_unitySelling.setCellData(curRow, "commCd", ds_unitySelling.getCellData(old_rowposition, "commCd"));
    ds_unitySelling.setCellData(curRow, "sellAmt", ds_unitySelling.getCellData(old_rowposition, "sellAmt"));
    ds_unitySelling.setCellData(curRow, "sellAmtFcrc", ds_unitySelling.getCellData(old_rowposition, "sellAmtFcrc"));
    ds_unitySelling.setCellData(curRow, "vatAmt", ds_unitySelling.getCellData(old_rowposition, "vatAmt"));
    ds_unitySelling.setCellData(curRow, "pchsAmt", ds_unitySelling.getCellData(old_rowposition, "pchsAmt"));
    ds_unitySelling.setCellData(curRow, "pchsVatAmt", ds_unitySelling.getCellData(old_rowposition, "pchsVatAmt"));
    ds_unitySelling.setCellData(curRow, "totSellAmt", ds_unitySelling.getCellData(old_rowposition, "totSellAmt"));
    ds_unitySelling.setCellData(curRow, "totPchsAmt", ds_unitySelling.getCellData(old_rowposition, "totPchsAmt"));
  }
  scwin.f_SetSellYn(ds_unitySelling.getCellData(curRow, "sellItemCd"), curRow);
  if (rd_pchsCreatYn.getValue() == "1") {
    ds_unitySelling.setCellData(curRow, "pchsSeq", ds_unitySelling.getCellData(curRow, "sellSeq"));
  }
  scwin.f_SumAmt();
};
scwin.f_SetSellYn = function (pSellItemCd, curRow) {
  if (pSellItemCd == "0375") {
    ds_unitySelling.setCellData(curRow, "sellYn", "0");
  } else {
    ds_unitySelling.setCellData(curRow, "sellYn", "1");
  }
  scwin.f_mathAmt(curRow, "sellItemCd");
};
scwin.f_DeleteRow = function () {
  let checkedIdx = ds_unitySelling.getMatchedIndex("chk", "1", true);
  if (checkedIdx && checkedIdx.length > 0) {
    for (let i = checkedIdx.length - 1; i >= 0; i--) {
      ds_unitySelling.removeRow(checkedIdx[i]);
    }
  } else {
    let pos = ds_unitySelling.getRowPosition();
    if (pos >= 0) {
      ds_unitySelling.removeRow(pos);
    }
  }
  if (ds_unitySelling.getRowCount() == 0) {
    lc_odrKndCd.setDisabled(false);
    lc_fmlaClsCd.setDisabled(false);
    lc_fmlaPatternCd.setDisabled(false);
    lc_crcCd.setDisabled(false);
    lc_sellTaxnClsCd.setDisabled(false);
    lc_pchsTaxnClsCd.setDisabled(false);
  }
  scwin.f_SumAmt();
};
scwin.f_Save = async function () {
  if (!ds_order.isUpdated() && !ds_certiCommon.isUpdated() && !ds_purchaseCerti.isUpdated() && !ds_unitySelling.isUpdated()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["일반청구오더 관리"]);
    return;
  }
  if (rd_pchsCreatYn.getValue() == "1") {
    let chk = await $c.gus.cfValidate($p, [ed_bilgLodeptCd, ed_bilgClntNo, ed_pchsDeptCd, ed_pchsClntNo]);
    if (!chk) return;
  } else {
    let chk = await $c.gus.cfValidate($p, [ed_bilgLodeptCd, ed_bilgClntNo]);
    if (!chk) return;
  }
  if (lc_crcCd.getValue() != "KRW") {
    let chk = await $c.gus.cfValidate($p, [ed_adptExchRt]);
    if (!chk) return;
  }
  if (ds_unitySelling.getRowCount() < 1) {
    await $c.win.alert($p, scwin.MSG_FS_WRN_020);
    return;
  }
  let chkGrid = await $c.gus.cfValidate($p, [gr_unitySelling]);
  if (!chkGrid) {
    return;
  }
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!confirmResult) return;
  if (lc_sellTaxnClsCd.getValue() == "01" || lc_sellTaxnClsCd.getValue() == "04") {
    for (let i = 0; i < ds_unitySelling.getRowCount(); i++) {
      if (Number(ds_unitySelling.getCellData(i, "vatAmt")) == 0) {
        await $c.win.alert($p, "매출순번 " + (i + 1) + "번의 부가세를 입력해주세요.");
        return;
      }
    }
  }
  if (lc_sellTaxnClsCd.getValue() == "02" || lc_sellTaxnClsCd.getValue() == "03") {
    for (let i = 0; i < ds_unitySelling.getRowCount(); i++) {
      if (Number(ds_unitySelling.getCellData(i, "vatAmt")) > 0) {
        await $c.win.alert($p, "매출순번 " + (i + 1) + "번의 부가세를 확인해주세요.");
        return;
      }
    }
  }
  scwin.f_OrderDataSet();
  scwin.f_CertiCommonDataSet();
  scwin.f_PurchaseCertiDataSet();
  scwin.f_UnitySellingDataSet();
  await $c.sbm.execute($p, sbm_registGeneralBillingOrder);
};
scwin.f_Delete = async function () {
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (confirmResult == true) {
    ds_order.setCellData(0, "odrDelYn", "1");
    ds_unitySelling.setCellData(0, "delYn", "1");
    ds_order.setCellData(0, "coCd", ed_coCd.getValue());
    ds_certiCommon.setCellData(0, "coCd", ed_coCd.getValue());
    ds_purchaseCerti.setCellData(0, "coCd", ed_coCd.getValue());
    for (let i = 0; i < ds_unitySelling.getRowCount(); i++) {
      ds_unitySelling.setCellData(i, "coCd", ed_coCd.getValue());
    }
    await $c.sbm.execute($p, sbm_deleteGeneralBillingOrder);
  }
};
scwin.f_OrderDataSet = function () {
  ds_order.removeAll();
  ds_order.insertRow(0);
  ds_order.setCellData(0, "coCd", ed_coCd.getValue());
  ds_order.setCellData(0, "order", dtl_odrNo.getValue());
  ds_order.setCellData(0, "bilgLodeptCd", ed_bilgLodeptCd.getValue());
  ds_order.setCellData(0, "bilgOdrKndCd", lc_odrKndCd.getValue());
  ds_order.setCellData(0, "bilgClntNo", ed_bilgClntNo.getValue());
  ds_order.setCellData(0, "pchsCreatYn", rd_pchsCreatYn.getValue());
  ds_order.setCellData(0, "selfClsCd", "LI");
  ds_order.setCellData(0, "sellLodeptCd", ed_bilgLodeptCd.getValue());
  ds_order.setCellData(0, "sellYn", "1");
  ds_order.setCellData(0, "crcCd", lc_crcCd.getValue());
  ds_order.setCellData(0, "adptExchRt", ed_adptExchRt.getValue());
};
scwin.f_CertiCommonDataSet = function () {
  ds_certiCommon.removeAll();
  ds_certiCommon.insertRow(0);
  ds_certiCommon.setCellData(0, "coCd", ed_coCd.getValue());
  ds_certiCommon.setCellData(0, "bilgLodeptCd", ed_bilgLodeptCd.getValue());
  ds_certiCommon.setCellData(0, "certiNo", txt_sellCertiNo.getValue());
  ds_certiCommon.setCellData(0, "sellVatNo", txt_sellVatNo.getValue());
  ds_certiCommon.setCellData(0, "crcCd", lc_crcCd.getValue());
  ds_certiCommon.setCellData(0, "adptExchRt", ed_adptExchRt.getValue());
  ds_certiCommon.setCellData(0, "taxnClsCd", lc_sellTaxnClsCd.getValue());
  ds_certiCommon.setCellData(0, "fmlaClsCd", lc_fmlaClsCd.getValue());
  ds_certiCommon.setCellData(0, "fmlaPatternCd", lc_fmlaPatternCd.getValue());
  ds_certiCommon.setCellData(0, "spplyAmt", ed_sellAmt.getValue());
  ds_certiCommon.setCellData(0, "vatAmt", ed_vatAmt.getValue());
  ds_certiCommon.setCellData(0, "totAmt", ed_totSellAmt.getValue());
  ds_certiCommon.setCellData(0, "fireInsrRateAmt", ed_fireInsrRateAmt.getValue());
  if (lc_crcCd.getValue() == "KRW") {
    let bilgAmt = Number(ds_certiCommon.getCellData(0, "spplyAmt")) + Number(ds_certiCommon.getCellData(0, "vatAmt")) + Number(ds_certiCommon.getCellData(0, "fireInsrRateAmt"));
    ds_certiCommon.setCellData(0, "bilgAmt", bilgAmt);
    ds_certiCommon.setCellData(0, "wcrcDcsnClsCd", "01");
  } else {
    ds_certiCommon.setCellData(0, "bilgAmtFcrc", ed_sellAmtFcrc.getValue());
    ds_certiCommon.setCellData(0, "fcrcBilgAmt", ed_sellAmt.getValue());
    ds_certiCommon.setCellData(0, "wcrcDcsnClsCd", "02");
    ds_certiCommon.setCellData(0, "spplyAmtFcrc", ed_sellAmtFcrc.getValue());
  }
  ds_certiCommon.setCellData(0, "upperCertiNo", "0");
  if (scwin.vCoCd == "029") {
    if (lc_fmlaClsCd.getValue() == "01") {
      ds_certiCommon.setCellData(0, "certiPatternCd", "V");
    } else {
      ds_certiCommon.setCellData(0, "certiPatternCd", "C");
    }
  } else if (scwin.vCoCd == "028") {
    if (lc_fmlaClsCd.getValue() == "01") {
      ds_certiCommon.setCellData(0, "certiPatternCd", "H");
    } else {
      ds_certiCommon.setCellData(0, "certiPatternCd", "E");
    }
  }
  ds_certiCommon.setCellData(0, "confirmDt", ed_confirmDt.getValue());
  ds_certiCommon.setCellData(0, "bilgClntNo", ed_bilgClntNo.getValue());
  ds_certiCommon.setCellData(0, "dcsnClsCd", scwin.dcsnClsCd);
  ds_certiCommon.setCellData(0, "pgmId", scwin.pgmId);
  ds_certiCommon.setCellData(0, "certiCreatYn", rd_certiCreatYn.getValue());
};
scwin.f_PurchaseCertiDataSet = function () {
  ds_purchaseCerti.removeAll();
  ds_purchaseCerti.insertRow(0);
  ds_purchaseCerti.setCellData(0, "coCd", ed_coCd.getValue());
  ds_purchaseCerti.setCellData(0, "pchsDeptCd", ed_pchsDeptCd.getValue());
  ds_purchaseCerti.setCellData(0, "pchsClntNo", ed_pchsClntNo.getValue());
  ds_purchaseCerti.setCellData(0, "pchsAmt", ed_pchsAmt.getValue());
  ds_purchaseCerti.setCellData(0, "vat", ed_pchsVatAmt.getValue());
};
scwin.f_UnitySellingDataSet = function () {
  for (let i = 0; i < ds_unitySelling.getRowCount(); i++) {
    ds_unitySelling.setCellData(i, "coCd", ed_coCd.getValue());
    ds_unitySelling.setCellData(i, "sellCommNo", ds_unitySelling.getCellData(i, "sellItemCd"));
    ds_unitySelling.setCellData(i, "commCd", "");
    ds_unitySelling.setCellData(i, "crcCd", lc_crcCd.getValue());
    ds_unitySelling.setCellData(i, "spplyAmtFcrc", ds_unitySelling.getCellData(i, "sellAmtFcrc"));
    ds_unitySelling.setCellData(i, "spplyAmt", ds_unitySelling.getCellData(i, "sellAmt"));
    ds_unitySelling.setCellData(i, "dcsnClsCd", "1");
    ds_unitySelling.setCellData(i, "wrkStDt", ed_rsltsStdDt.getValue());
    ds_unitySelling.setCellData(i, "rsltsStdDt", ed_rsltsStdDt.getValue());
    ds_unitySelling.setCellData(i, "bilgTrgtYn", "1");
    ds_unitySelling.setCellData(i, "taxnClsCd", lc_sellTaxnClsCd.getValue());
    ds_unitySelling.setCellData(i, "odrDt", scwin.vCurDate);
    ds_unitySelling.setCellData(i, "pchsSeq", ds_unitySelling.getCellData(i, "sellSeq"));
    if (ds_unitySelling.getCellData(i, "wtUnitCd") == "TON") {
      ds_unitySelling.setCellData(i, "unitClsCd", "02");
    } else {
      ds_unitySelling.setCellData(i, "unitClsCd", "01");
    }
    ds_unitySelling.setCellData(i, "bilgLodeptCd", ed_bilgLodeptCd.getValue());
    ds_unitySelling.setCellData(i, "bilgClntNo", ed_bilgClntNo.getValue());
    if (ds_unitySelling.getCellData(i, "sellYn") == "0") {
      ds_unitySelling.setCellData(i, "taxnClsCd", "3");
    }
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList = new Array();
  let qryYear = ed_confirmDt.getValue().trim().substring(0, 4);
  switch (disGubun) {
    case 1:
      let param1 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveAcctDeptCdInfo6", ed_bilgLodeptCd.getValue().trim(), txt_bilgLodeptNm.getValue(), "T", null, null, null, null, param1, null, null, null, null, null, null, null, null, null, qryYear);
      scwin.f_resultPopEd(ed_bilgLodeptCd, txt_bilgLodeptNm, rtnList);
      break;
    case 2:
      let param2 = ",,," + ed_coCd.getValue();
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveClntList2", ed_bilgClntNo.getValue().trim(), txt_bilgClntNm.getValue(), "T", null, null, null, null, param2, null, null, null, null);
      scwin.f_resultPopEd(ed_bilgClntNo, txt_bilgClntNm, rtnList);
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      let param7 = ",,," + ed_coCd.getValue();
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveClntList2", ed_pchsClntNo.getValue().trim(), txt_pchsClntNm.getValue(), "T", null, null, null, null, param7, null, null, null, null);
      scwin.f_resultPopEd(ed_pchsClntNo, txt_pchsClntNm, rtnList);
      break;
    case 8:
      let param8 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveAcctDeptCdInfo6", ed_pchsDeptCd.getValue().trim(), txt_pchsDeptNm.getValue(), "T", null, null, null, null, param8, null, null, null, null, null, null, null, null, null, qryYear);
      scwin.f_resultPopEd(ed_pchsDeptCd, txt_pchsDeptNm, rtnList);
      break;
    default:
      break;
  }
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");else scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
};
scwin.f_grdHeight = function (size) {
  let strHeight = gr_unitySelling.style.height;
  let intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    gr_unitySelling.style.height = intHeight + "px";
  }
};
scwin.f_downExcelSheet = async function () {
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    $c.data.downloadGridViewExcel($p, gr_unitySelling, {
      fileName: "통합매출입내역.xlsx",
      sheetName: "통합매출입내역"
    });
  }
};
scwin.f_SumAmt = function () {
  let sellAmtFcrc = 0;
  let sellAmt = 0;
  let totSellAmt = 0;
  let pchsAmt = 0;
  let totPchsAmt = 0;
  let fireInsrRateAmt = 0;
  for (let i = 0; i < ds_unitySelling.getRowCount(); i++) {
    if (ds_unitySelling.getCellData(i, "sellYn") == "1") {
      sellAmtFcrc = sellAmtFcrc + Number(ds_unitySelling.getCellData(i, "sellAmtFcrc"));
      sellAmt = sellAmt + Number(ds_unitySelling.getCellData(i, "sellAmt"));
      totSellAmt = totSellAmt + Number(ds_unitySelling.getCellData(i, "totSellAmt"));
      pchsAmt = pchsAmt + Number(ds_unitySelling.getCellData(i, "pchsAmt"));
      totPchsAmt = totPchsAmt + Number(ds_unitySelling.getCellData(i, "totPchsAmt"));
      ds_unitySelling.setCellData(i, "vatAmt", Number(ds_unitySelling.getCellData(i, "totSellAmt")) - Number(ds_unitySelling.getCellData(i, "sellAmt")));
      ds_unitySelling.setCellData(i, "pchsVatAmt", Number(ds_unitySelling.getCellData(i, "totPchsAmt")) - Number(ds_unitySelling.getCellData(i, "pchsAmt")));
    } else {
      fireInsrRateAmt = fireInsrRateAmt + Number(ds_unitySelling.getCellData(i, "sellAmt"));
      ds_unitySelling.setCellData(i, "vatAmt", 0);
      ds_unitySelling.setCellData(i, "pchsVatAmt", 0);
    }
  }
  ed_sellAmtFcrc.setValue(sellAmtFcrc);
  ed_sellAmt.setValue(sellAmt);
  ed_totSellAmt.setValue(totSellAmt);
  ed_vatAmt.setValue(totSellAmt - sellAmt);
  ed_pchsAmt.setValue(pchsAmt);
  ed_totPchsAmt.setValue(totPchsAmt);
  ed_pchsVatAmt.setValue(totPchsAmt - pchsAmt);
  ed_fireInsrRateAmt.setValue(fireInsrRateAmt);
};
scwin.f_GetSellItemCd = function () {
  // TODO: 그리드 sellItemCd 컬럼의 select 선택지를 회사코드(vCoCd)에 따라 공통코드 JA001로 설정
  let codeOptions = [];
  if (scwin.vCoCd == "028") {
    codeOptions = [{
      grpCd: "JA001",
      compID: "gr_unitySelling:sellItemCd",
      opt: {
        "range": "028"
      }
    }];
  } else if (scwin.vCoCd == "029") {
    codeOptions = [{
      grpCd: "JA001",
      compID: "gr_unitySelling:sellItemCd",
      opt: {
        "range": "029"
      }
    }];
  }
  if (codeOptions.length > 0) {
    $c.data.setCommonCode($p, codeOptions);
  }
};
scwin.f_Clear = function () {
  $c.gus.cfInitObjects($p, tbl_order);
  $c.gus.cfInitObjects($p, tbl_certiCommon);
  $c.gus.cfInitObjects($p, tbl_purchaseCerti);
  ds_order.removeAll();
  ds_certiCommon.removeAll();
  ds_purchaseCerti.removeAll();
  ds_unitySelling.removeAll();
  lc_odrKndCd.setDisabled(false);
  lc_fmlaClsCd.setDisabled(false);
  lc_fmlaPatternCd.setDisabled(false);
  lc_crcCd.setDisabled(false);
  lc_sellTaxnClsCd.setDisabled(false);
  lc_pchsTaxnClsCd.setDisabled(false);
  ed_confirmDt.setValue(scwin.vCurDate);
  ed_rsltsStdDt.setValue(scwin.vCurDate);
  rd_pchsCreatYn.setValue("0");
  rd_pchsCreatYn.setDisabled(true);
  rd_certiCreatYn.setValue("1");
  ed_adptExchRt.setValue("0");
  $c.gus.cfEnableBtnOnly($p, [bSave]);
  $c.gus.cfDisableObjects($p, [ed_adptExchRt]);
  txt_sellCertiNo.setDisabled(true);
  txt_sellVatNo.setDisabled(true);
  ed_sellAmt.setDisabled(true);
  ed_vatAmt.setDisabled(true);
  ed_totSellAmt.setDisabled(true);
  ed_sellAmtFcrc.setDisabled(true);
  ed_fireInsrRateAmt.setDisabled(true);
};
scwin.f_ChangeCrcCd = function () {
  if (lc_crcCd.getValue() == "KRW") {
    $c.gus.cfDisableObjects($p, [ed_adptExchRt]);
    ed_adptExchRt.mandatory = "false";
    gr_unitySelling.setColumnProperty("sellAmtFcrc", "readOnly", true);
    gr_unitySelling.setColumnProperty("sellAmt", "readOnly", false);
  } else {
    $c.gus.cfEnableObjects($p, [ed_adptExchRt]);
    ed_adptExchRt.mandatory = "true";
    gr_unitySelling.setColumnProperty("sellAmtFcrc", "readOnly", false);
    gr_unitySelling.setColumnProperty("sellAmt", "readOnly", false);
  }
  $c.gus.cfRefreshMandSign($p);
};
scwin.f_ChangePchsCreatYn = function () {
  if (rd_pchsCreatYn.getValue() == "1") {
    gr_unitySelling.setColumnProperty("pchsAmt", "readOnly", true);
    gr_unitySelling.setColumnProperty("pchsVatAmt", "readOnly", true);
    gr_unitySelling.setColumnProperty("totPchsAmt", "readOnly", false);
    ed_pchsDeptCd.mandatory = "true";
  } else {
    for (let i = 0; i < ds_unitySelling.getRowCount(); i++) {
      ds_unitySelling.setCellData(i, "pchsAmt", 0);
      ds_unitySelling.setCellData(i, "pchsVatAmt", 0);
      ds_unitySelling.setCellData(i, "totPchsAmt", 0);
    }
    gr_unitySelling.setColumnProperty("pchsAmt", "readOnly", true);
    gr_unitySelling.setColumnProperty("pchsVatAmt", "readOnly", true);
    gr_unitySelling.setColumnProperty("totPchsAmt", "readOnly", true);
    ed_pchsDeptCd.mandatory = "false";
  }
  $c.gus.cfRefreshMandSign($p);
};
scwin.f_mathAmt = function (row, colid) {
  let sellAmt = Number(ds_unitySelling.getCellData(row, "sellAmt")) || 0;
  let sellAmtFcrc = Number(ds_unitySelling.getCellData(row, "sellAmtFcrc")) || 0;
  let pchsAmt = Number(ds_unitySelling.getCellData(row, "pchsAmt")) || 0;
  let vatAmt = Number(ds_unitySelling.getCellData(row, "vatAmt")) || 0;
  let pchsVatAmt = Number(ds_unitySelling.getCellData(row, "pchsVatAmt")) || 0;
  let totSellAmt = 0;
  let totPchsAmt = 0;
  let adptExchRt = Number(ed_adptExchRt.getValue()) || 0;
  if (lc_crcCd.getValue() == "KRW") {
    if (!(colid == "vatAmt" || colid == "pchsVatAmt")) {
      if (ds_unitySelling.getCellData(row, "sellYn") == "1") {
        vatAmt = lc_sellTaxnClsCd.getValue() == "01" || lc_sellTaxnClsCd.getValue() == "04" ? Math.round(sellAmt / 10) : 0;
        pchsVatAmt = lc_pchsTaxnClsCd.getValue() == "01" || lc_sellTaxnClsCd.getValue() == "04" ? Math.round(pchsAmt / 10) : 0;
      } else {
        vatAmt = 0;
        pchsVatAmt = 0;
      }
    }
  } else {
    if (colid != "sellAmt") {
      sellAmt = Math.floor(sellAmtFcrc * adptExchRt);
      vatAmt = 0;
    }
    if (colid != "pchsVatAmt") {
      if (ds_unitySelling.getCellData(row, "sellYn") == "1") {
        pchsVatAmt = lc_pchsTaxnClsCd.getValue() == "01" ? Math.round(pchsAmt / 10) : 0;
      } else {
        pchsVatAmt = 0;
      }
    }
  }
  totSellAmt = sellAmt + vatAmt;
  totPchsAmt = pchsAmt + pchsVatAmt;
  ds_unitySelling.setCellData(row, "sellAmt", sellAmt);
  ds_unitySelling.setCellData(row, "sellAmtFcrc", sellAmtFcrc);
  ds_unitySelling.setCellData(row, "pchsAmt", pchsAmt);
  ds_unitySelling.setCellData(row, "vatAmt", vatAmt);
  ds_unitySelling.setCellData(row, "pchsVatAmt", pchsVatAmt);
  ds_unitySelling.setCellData(row, "totSellAmt", totSellAmt);
  ds_unitySelling.setCellData(row, "totPchsAmt", totPchsAmt);
  scwin.f_SumAmt();
};
scwin.f_mathAdptExchRt = function () {
  let sellAmtFcrc = 0;
  let sellAmt = 0;
  let adptExchRt = Number(ed_adptExchRt.getValue()) || 0;
  let sellAmtTot = 0;
  for (let i = 0; i < ds_unitySelling.getRowCount(); i++) {
    sellAmtFcrc = Number(ds_unitySelling.getCellData(i, "sellAmtFcrc")) || 0;
    sellAmt = Math.floor(sellAmtFcrc * adptExchRt);
    let totSellAmt = sellAmt;
    ds_unitySelling.setCellData(i, "sellAmt", sellAmt);
    sellAmtTot = sellAmtTot + sellAmt;
  }
  ed_sellAmt.setValue(sellAmtTot);
  ed_totSellAmt.setValue(sellAmtTot);
};
scwin.f_SlipPopUp = async function () {
  if (txt_sellCertiNo.getValue().length < 1) {
    await $c.win.alert($p, "거래명세서가 존재하지 않습니다.");
    return;
  }
  if (ds_certiCommon.getCellData(0, "upperCertiNo") != "" && ds_certiCommon.getCellData(0, "upperCertiNo") != "0") {
    await $c.win.alert($p, "BILL이 생성된 CERIT는 세금계산서를 작성 할 수 없습니다.");
    return;
  }
  let obj = {
    ds_certiCommon: ds_certiCommon,
    sellItemNm: ds_unitySelling.getCellData(0, "sellItemNm")
  };
  let returnValue = await $c.win.openPopup($p, "/ui/ja/ds/fs/bilg/ja_fs_202_06_03p.xml", {
    width: 630,
    height: 710,
    modal: true,
    data: obj
  });
  if (returnValue != null) {
    if (returnValue[0] != undefined) {
      txt_sellVatNo.setValue(returnValue[0]);
    }
    if (returnValue[1] == "TRUE") {
      scwin.f_OdrNORetrieve();
    }
  }
};
scwin.f_Print = async function (arg) {
  if (txt_sellCertiNo.getValue().length < 1) {
    await $c.win.alert($p, "거래명세서가 존재하지 않습니다.");
    return;
  }
  let confirmPrint = await $c.win.confirm($p, "인쇄하시겠습니까?");
  if (!confirmPrint) return;

  // TODO: OZ Report 연동 - 원본 f_Print 로직 참조
  let odi1 = "01";
  let odi2 = ds_certiCommon.getCellData(0, "inscrpFmlaPatternCd");
  // TODO: ODIParam, FormParam, ViewerParam, cfOZReport 호출 구현 필요
};
scwin.f_regstEmail = function () {
  let fileURL = "/ui/ac/fi/stdinfomgnt/fi_100_01_03b.xml";
  let tabTitle = "전자세금계산서거래처관리";
  $c.win.openMenu($p, tabTitle, fileURL, "fi_100_01_03b.xml");
};
scwin.f_deptPopUp = function (deptCd, deptNm) {
  let param = scwin.vCurDate;
  if (Number(scwin.vCoClsCd) > 0) {
    param = param + "," + scwin.vCoCd + "," + scwin.vCoClsCd;
  }
  let paramArray = {};
  paramArray.pSelectID = "retrieveAcctDeptCdInfo6";
  paramArray.pCode = deptCd;
  paramArray.pName = deptNm;
  paramArray.pWhere = param;
  scwin.f_PopUp2(paramArray);
};
scwin.f_Popup = function (disGubun) {
  let rtnList = new Array();
  let pCode = "";
  let pName = "";
  let qryYear = ed_confirmDt.getValue().trim().substring(0, 4);
  switch (disGubun) {
    case 1:
      let param1 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      pCode = (ds_unitySelling.getCellData(ds_unitySelling.getRowPosition(), "sellLodeptCd") || "").replace(/\s*$/, "");
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveAcctDeptCdInfo6", pCode, pName, "T", null, null, null, null, param1, null, null, null, null, null, null, null, null, null, qryYear);
      if (rtnList != null && rtnList[0] != "N/A") {
        ds_unitySelling.setCellData(ds_unitySelling.getRowPosition(), "sellLodeptCd", rtnList[0]);
        ds_unitySelling.setCellData(ds_unitySelling.getRowPosition(), "sellLodeptNM", rtnList[1]);
      } else {
        ds_unitySelling.setCellData(ds_unitySelling.getRowPosition(), "sellLodeptCd", "");
        ds_unitySelling.setCellData(ds_unitySelling.getRowPosition(), "sellLodeptNM", "");
      }
      break;
    default:
      break;
  }
};
scwin.f_PopUp2 = function (paramArray) {
  let codeObj = paramArray.pCode;
  let nameObj = paramArray.pName;
  let rtnList = $c.gus.cfCommonPopUp($p, paramArray.pSelectID, $c.gus.cfGetValue($p, codeObj), "", scwin.f_EventCheck(), paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      $c.gus.cfSetValue($p, codeObj, rtnList[0]);
      $c.gus.cfSetValue($p, nameObj, rtnList[1]);
    }
  } else {
    $c.gus.cfSetValue($p, codeObj, "");
    $c.gus.cfSetValue($p, nameObj, "");
  }
  return rtnList;
};
scwin.f_openPopUp = function (flag, check) {
  let qryYear = ed_confirmDt.getValue().trim().substring(0, 4);
  let rtnList = new Array();
  switch (flag) {
    case "3":
      let param3 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveAcctDeptCdInfo10", ed_bilgLodeptCd.getValue().trim(), txt_bilgLodeptNm.getValue(), check, null, null, null, null, param3, null, null, null, null, null, null, null, null, null, qryYear);
      scwin.f_resultPopEd(ed_bilgLodeptCd, txt_bilgLodeptNm, rtnList);
      break;
    case "4":
      let param4 = ",,," + ed_coCd.getValue();
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveClntList2", ed_bilgClntNo.getValue().trim(), txt_bilgClntNm.getValue(), check, null, null, null, null, param4, null, null, null, null);
      scwin.f_resultPopEd(ed_bilgClntNo, txt_bilgClntNm, rtnList);
      break;
    case "5":
      break;
    case "6":
      let param6 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveAcctDeptCdInfo10", ed_pchsDeptCd.getValue().trim(), txt_pchsDeptNm.getValue(), check, null, null, null, null, param6, null, null, null, null, null, null, null, null, null, qryYear);
      scwin.f_resultPopEd(ed_pchsDeptCd, txt_pchsDeptNm, rtnList);
      break;
    case "7":
      let param7p = ",,," + ed_coCd.getValue();
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveClntList2", ed_pchsDeptCd.getValue().trim(), txt_pchsDeptNm.getValue(), check, null, null, null, null, param7p, null, null, null, null);
      scwin.f_resultPopEd(ed_pchsDeptCd, txt_pchsDeptNm, rtnList);
      break;
    default:
      break;
  }
};
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    strCd.setValue(rtnList[0]);
    strNm.setValue(rtnList[1]);
  } else {
    strCd.setValue("");
    strNm.setValue("");
  }
};
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  let rtnList = $c.gus.cfCommonPopUp($p, "retrieveDongbuGroupCompanyInfo", ed_coCd.getValue(), txt_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    scwin.f_initObj();
    ed_coCd.setValue(rtnList[0]);
    txt_coNm.setValue(rtnList[5]);
    scwin.txtCoClsCd = rtnList[1];
  } else {
    ed_coCd.setValue("");
    txt_coNm.setValue("");
    scwin.txtCoClsCd = "";
  }
  if (Number(scwin.txtCoClsCd) > 0) {
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_bilgLodeptCd, txt_bilgLodeptNm]);
  $c.gus.cfInitObjects($p, [ed_bilgClntNo, txt_bilgClntNm]);
};
scwin.f_EventCheck = function () {
  return "T";
};
scwin.f_setCompanyInfo = function () {
  if (scwin.vUserHomeClsCd != "SA") {
    scwin.vLoginCoCd = "029";
    scwin.vLoginCoClsCd = "0";
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo("T");
  $c.gus.cfDisableObjects($p, [ed_coCd, txt_coNm]);
};
scwin.f_upload = async function () {
  if (ds_excel.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
    return;
  }
  if (scwin.f_AddRowUploaded()) {
    await $c.win.alert($p, "업로드작업이 완료되었습니다.");
    if (ds_unitySelling.getRowCount() > 0) {
      $c.gus.cfEnableBtnOnly($p, [bSave]);
    }
  }
};
scwin.f_AddRowUploaded = function () {
  if (ds_excel.getRowCount() > 0) {
    ds_unitySelling.removeAll();
    for (let i = 0; i < ds_excel.getRowCount(); i++) {
      ds_unitySelling.insertRow(ds_unitySelling.getRowCount());
      let curRow = ds_unitySelling.getRowCount() - 1;
      ds_unitySelling.setCellData(curRow, "sellSeq", i + 1);
      let sellLodeptCdVal = (ds_excel.getCellData(i, "sellLodeptCd") || "").trim();
      let lengthOfSellLodeptCd = sellLodeptCdVal.length;
      if (lengthOfSellLodeptCd == 5) {
        ds_unitySelling.setCellData(curRow, "sellLodeptCd", sellLodeptCdVal);
      } else if (lengthOfSellLodeptCd == 4) {
        ds_unitySelling.setCellData(curRow, "sellLodeptCd", "0" + sellLodeptCdVal);
      } else if (lengthOfSellLodeptCd == 3) {
        ds_unitySelling.setCellData(curRow, "sellLodeptCd", "00" + sellLodeptCdVal);
      } else if (lengthOfSellLodeptCd == 2) {
        ds_unitySelling.setCellData(curRow, "sellLodeptCd", "000" + sellLodeptCdVal);
      } else if (lengthOfSellLodeptCd == 1) {
        ds_unitySelling.setCellData(curRow, "sellLodeptCd", "0000" + sellLodeptCdVal);
      } else {
        ds_unitySelling.setCellData(curRow, "sellLodeptCd", sellLodeptCdVal.substring(0, 5));
      }
      if (ds_unitySelling.getCellData(curRow, "sellLodeptCd") != "") {
        scwin.f_Popup(1);
      }
      let sellItemCdVal = (ds_excel.getCellData(i, "sellItemCd") || "").trim();
      let lengthOfSellItemCd = sellItemCdVal.length;
      if (lengthOfSellItemCd != 4) {
        alert("매출항목 코드의 자릿수가 맞지 않습니다. 4자리로 입력하세요(ex: 0001)");
        return false;
      }
      scwin.f_SetSellYn(ds_unitySelling.getCellData(curRow, "sellItemCd"), curRow);
      ds_unitySelling.setCellData(curRow, "sellItemCd", sellItemCdVal);
      ds_unitySelling.setCellData(curRow, "sellAmt", ds_excel.getCellData(i, "sellAmt"));
      ds_unitySelling.setCellData(curRow, "sellAmtFcrc", ds_excel.getCellData(i, "sellAmtFcrc"));
      scwin.f_mathAmt(curRow, "sellAmt");
      if (Number(ds_unitySelling.getCellData(curRow, "sellAmtFcrc")) != 0) {
        scwin.f_mathAmt(curRow, "sellAmtFcrc");
      }
      scwin.f_SumAmt();
    }
  }
  return true;
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve("INPUT");
};
scwin.bCreate_onclick = function (e) {
  scwin.f_Clear();
};
scwin.bSave_onclick = function (e) {
  scwin.f_Save();
};
scwin.bDelete_onclick = function (e) {
  scwin.f_Delete();
};
scwin.sbm_retrieveGeneralBillingOrder_submitdone = async function (e) {
  if (scwin.arg == "REFERENCE") {
    dtl_odrNo.setValue("");
    lc_odrKndCd.setDisabled(false);
    lc_fmlaClsCd.setDisabled(false);
    lc_fmlaPatternCd.setDisabled(false);
    lc_crcCd.setDisabled(false);
    lc_sellTaxnClsCd.setDisabled(false);
    lc_pchsTaxnClsCd.setDisabled(false);
    $c.gus.cfDisableBtn($p, [bSave, bDelete]);
    if (txt_sellCertiNo.getValue().length < 1) {
      rd_certiCreatYn.setValue("0");
    } else {
      rd_certiCreatYn.setValue("1");
    }
    for (let i = 0; i < ds_unitySelling.getRowCount(); i++) {
      ds_unitySelling.setCellData(i, "certiNo", "");
    }
  }
  if (ds_certiCommon.getRowCount() == 0 && ds_order.getRowCount() != 0) {
    txt_sellCertiNo.setValue("");
    txt_sellVatNo.setValue("");
    lc_crcCd.setValue(ds_unitySelling.getCellData(0, "crcCd"));
    ed_adptExchRt.setValue(ds_unitySelling.getCellData(0, "adptExchRt"));
    lc_sellTaxnClsCd.setValue(ds_unitySelling.getCellData(0, "taxnClsCd"));
    lc_fmlaClsCd.setValue("01");
    if ($c.gus.cfIsNull($p, ds_certiCommon.getCellData(0, "fmlaPatternCd"))) {
      lc_fmlaPatternCd.setValue("01");
    } else {
      lc_fmlaPatternCd.setValue(ds_certiCommon.getCellData(0, "fmlaPatternCd"));
    }
    scwin.f_ChangeCrcCd();
  }
  if (ds_order.getRowCount() > 0) {
    dtl_odrNo.setValue(ds_order.getCellData(0, "odrNo"));
    ed_bilgLodeptCd.setValue(ds_order.getCellData(0, "bilgLodeptCd"));
    txt_bilgLodeptNm.setValue(ds_order.getCellData(0, "bilgLodeptNm"));
    lc_odrKndCd.setValue(ds_order.getCellData(0, "bilgOdrKndCd"));
    ed_bilgClntNo.setValue(ds_order.getCellData(0, "bilgClntNo"));
    txt_bilgClntNm.setValue(ds_order.getCellData(0, "bilgClntNm"));
    rd_pchsCreatYn.setValue(ds_order.getCellData(0, "pchsCreatYn"));
    scwin.f_ChangePchsCreatYn();
    $c.gus.cfEnableAllBtn($p);
    if (ds_order.getCellData(0, "odrNo") != null && ds_order.getCellData(0, "odrNo") != "") {
      $c.gus.cfEnableBtnOnly($p, [bSave, bDelete]);
    } else {
      $c.gus.cfDisableBtn($p, [bSave, bDelete]);
    }
  } else {
    $c.gus.cfDisableBtn($p, [bSave, bDelete]);
  }
  if (ds_certiCommon.getRowCount() > 0) {
    if (scwin.arg == "REFERENCE") {
      ds_certiCommon.setCellData(0, "certiNo", "");
      ds_certiCommon.setCellData(0, "slipNo", "");
      ds_certiCommon.setCellData(0, "sellVatNo", "");
    }
    txt_sellCertiNo.setValue(ds_certiCommon.getCellData(0, "certiNo"));
    txt_sellVatNo.setValue(ds_certiCommon.getCellData(0, "sellVatNo"));
    lc_crcCd.setValue(ds_certiCommon.getCellData(0, "crcCd"));
    ed_adptExchRt.setValue(ds_certiCommon.getCellData(0, "adptExchRt"));
    lc_sellTaxnClsCd.setValue(ds_certiCommon.getCellData(0, "taxnClsCd"));
    ed_sellAmt.setValue(ds_certiCommon.getCellData(0, "spplyAmt"));
    ed_vatAmt.setValue(ds_certiCommon.getCellData(0, "vatAmt"));
    ed_totSellAmt.setValue(ds_certiCommon.getCellData(0, "totAmt"));
    ed_confirmDt.setValue(ds_certiCommon.getCellData(0, "confirmDt"));
    ed_sellAmtFcrc.setValue(ds_certiCommon.getCellData(0, "spplyAmtFcrc"));
    lc_fmlaClsCd.setValue(ds_certiCommon.getCellData(0, "fmlaClsCd"));
    lc_fmlaPatternCd.setValue(ds_certiCommon.getCellData(0, "fmlaPatternCd"));
    scwin.f_ChangeCrcCd();
  }
  if (ds_purchaseCerti.getRowCount() > 0) {
    ed_pchsDeptCd.setValue(ds_purchaseCerti.getCellData(0, "pchsDeptCd"));
    txt_pchsDeptNm.setValue(ds_purchaseCerti.getCellData(0, "pchsDeptNm"));
    ed_pchsClntNo.setValue(ds_purchaseCerti.getCellData(0, "pchsClntNo"));
    txt_pchsClntNm.setValue(ds_purchaseCerti.getCellData(0, "pchsClntNm"));
    ed_pchsAmt.setValue(ds_purchaseCerti.getCellData(0, "spplyAmt"));
    ed_pchsVatAmt.setValue(ds_purchaseCerti.getCellData(0, "vat"));
  }
  if (ds_unitySelling.getRowCount() > 0) {
    scwin.f_GetSellItemCd();
    lc_odrKndCd.setDisabled(true);
    lc_fmlaClsCd.setDisabled(true);
    lc_fmlaPatternCd.setDisabled(true);
    lc_crcCd.setDisabled(true);
    lc_sellTaxnClsCd.setDisabled(true);
    lc_pchsTaxnClsCd.setDisabled(true);
    ed_rsltsStdDt.setValue(ds_unitySelling.getCellData(0, "rsltsStdDt"));
  } else {
    lc_odrKndCd.setDisabled(false);
    lc_fmlaClsCd.setDisabled(false);
    lc_fmlaPatternCd.setDisabled(false);
    lc_crcCd.setDisabled(false);
    lc_sellTaxnClsCd.setDisabled(false);
    lc_pchsTaxnClsCd.setDisabled(false);
  }
  scwin.f_SumAmt();
};
scwin.sbm_retrieveGeneralBillingOrder_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_registGeneralBillingOrder_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.arg = "INPUT";
  scwin.f_OdrNORetrieve();
};
scwin.sbm_registGeneralBillingOrder_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_deleteGeneralBillingOrder_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
  scwin.f_Clear();
  $c.gus.cfDisableBtn($p, [bSave, bDelete]);
};
scwin.sbm_deleteGeneralBillingOrder_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveFmlaPattern_submitdone = function (e) {};
scwin.sbm_retrieveFmlaPattern_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ed_bilgLodeptCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, txt_bilgLodeptNm, 1, true);
  if (txt_bilgLodeptNm.getValue() != "") {
    ed_pchsDeptCd.setValue(ed_bilgLodeptCd.getValue());
    txt_pchsDeptNm.setValue(txt_bilgLodeptNm.getValue());
  }
};
scwin.ed_bilgClntNo_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, txt_bilgClntNm, 2);
};
scwin.ed_pchsDeptCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptCd, txt_pchsDeptNm, 8);
};
scwin.ed_pchsClntNo_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNo, txt_pchsClntNm, 7);
};
scwin.ed_adptExchRt_onblur = function (e) {
  scwin.f_mathAdptExchRt();
};
scwin.gr_unitySelling_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "sellLodeptCd") {
    scwin.f_Popup(1);
  }
};
scwin.ds_unitySelling_oneditend = async function (info) {
  let row = info.rowIndex;
  let colid = info.columnId;
  let olddata = info.oldValue;
  if (ds_unitySelling.getCellData(row, colid) == olddata) return;
  if (colid == "sellAmt" || colid == "sellAmtFcrc" || colid == "pchsAmt" || colid == "vatAmt" || colid == "pchsVatAmt") {
    if (lc_crcCd.getValue() != "KRW" && (ed_adptExchRt.getValue().length < 1 || Number(ed_adptExchRt.getValue()) == 0)) {
      await $c.win.alert($p, "먼저 환율을 입력하세요");
      ds_unitySelling.setCellData(row, colid, olddata);
      ed_adptExchRt.setFocus();
      return;
    }
    scwin.f_mathAmt(row, colid);
  }
  switch (colid) {
    case "sellItemCd":
      scwin.f_SetSellYn(ds_unitySelling.getCellData(row, "sellItemCd"), row);
      break;
    case "sellLodeptCd":
      scwin.f_Popup(1);
      break;
  }
};
scwin.gr_unitySelling_oncloseup = function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "sellItemCd":
      scwin.f_SetSellYn(ds_unitySelling.getCellData(rowIndex, "sellItemCd"), rowIndex);
      break;
  }
};
scwin.lc_fmlaClsCd_onchange = function (e) {
  scwin.f_RetrieveFmalPattern();
};
scwin.rd_pchsCreatYn_onviewchange = function (e) {
  scwin.f_ChangePchsCreatYn();
};
scwin.lc_odrKndCd_onchange = function (e) {
  scwin.f_GetSellItemCd();
  if (lc_odrKndCd.getValue() == "10") {
    lc_fmlaPatternCd.setValue("Y1");
  } else {
    lc_fmlaPatternCd.setValue("01");
  }
};
scwin.lc_crcCd_onchange = function (e) {
  scwin.f_ChangeCrcCd();
};
scwin.btn_slipPopUp_onclick = function (e) {
  scwin.f_SlipPopUp();
};
scwin.btn_addRow_onclick = function (e) {
  scwin.f_AddRow();
};
scwin.btn_deleteRow_onclick = function (e) {
  scwin.f_DeleteRow();
};
scwin.btn_cancelRow_onclick = function (e) {
  let pos = ds_unitySelling.getRowPosition();
  if (pos >= 0) {
    ds_unitySelling.undoRow(pos);
  }
};
scwin.btn_trigger1_onclick = function (e) {
  $c.gus.cfDownloadFile($p, "일반청구오더등록_템플릿.xls", "ja/ds/fs/bilg/ja_fs_202_03_02b_sample.csv");
};
scwin.btn_trigger2_onclick = function (e) {
  $c.gus.cfShowSortPopup($p, gr_unitySelling);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_co',codeId:'ed_coCd',nameId:'txt_coNm',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_odrNo',placeholder:'',style:'',mandatory:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8 flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더정보 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'dtl_odrNo',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgLodept',codeId:'ed_bilgLodeptCd',nameId:'txt_bilgLodeptNm',popupID:'',popupTitle:'',selectID:'',style:'',validTitle:'',class:'w250'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래명세서 생성여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_certiCreatYn',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일반청구오더종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_odrKndCd',search:'start',style:'',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgClnt',codeId:'ed_bilgClntNo',nameId:'txt_bilgClntNm',popupID:'',popupTitle:'',selectID:'',style:'',validTitle:'',class:'w250'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입생성여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_pchsCreatYn',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8 flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매출정보 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래명세서번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'txt_sellCertiNo',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세금계산서번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'txt_sellVatNo',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_confirmDt',style:'',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래명세서유형구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_fmlaClsCd',search:'start',style:'',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래명세서유형',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_fmlaPatternCd',search:'start',style:'',submenuSize:'auto',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_rsltsStdDt',style:'',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'환종/환율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group w250'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'lc_crcCd',class:' w85 flex_no'}},{T:1,N:'xf:input',A:{style:'',id:'ed_adptExchRt',placeholder:'',class:' tar',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w85',editType:'select',id:'lc_sellTaxnClsCd',search:'start',style:'',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_sellAmt',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'외화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_sellAmtFcrc',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_vatAmt',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'합계금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_totSellAmt',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_fireInsrRateAmt',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn template',id:'btn_trigger1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'템플릿 다운로드'}]}]},{T:1,N:'xf:trigger',A:{class:'btn align',id:'btn_trigger2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정렬'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group4',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_unitySelling',id:'gr_unitySelling',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'sellSeq',inputType:'text',rowSpan:'2',style:'',value:'매출</br>순번',width:'70'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sellLodeptCd',value:'매출귀속부서',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'sellLodeptNm',value:'매출귀속부서명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{class:'col-type1',colSpan:'',displayMode:'label',id:'sellItemCd',inputType:'text',rowSpan:'2',style:'',value:'매출항목',width:'150'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'sellAmt',value:'공급금액',displayMode:'label',colSpan:'3',rowSpan:'',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'sellAmtFcrc',value:'부가세',displayMode:'label',colSpan:'2',rowSpan:'',class:'col-type1'}},{T:1,N:'w2:column',A:{colSpan:'2',displayMode:'label',id:'pchsAmt',inputType:'text',rowSpan:'',style:'',value:'금액',width:'140'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'vatAmt',inputType:'text',rowSpan:'2',style:'',value:'매입</br>순번',width:'70',hidden:'true'}}]},{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellSeq',value:'매출원화',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellLodeptCd',value:'매출외화',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellLodeptNm',value:'매입금액',displayMode:'label',hidden:'true',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellItemCd',value:'매출(부)',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmt',value:'매입(부)',displayMode:'label',hidden:'true',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmtFcrc',inputType:'text',style:'',value:'매출',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',style:'',value:'매입',width:'100',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sellSeq',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',style:'',id:'sellLodeptCd',value:'',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'sellLodeptNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemCd',inputType:'select',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmtFcrc',value:'',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vatAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsVatAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totSellAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totPchsAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSeq',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',btnDelYn:'Y',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',title:'엑셀 UP',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세금계산서 생성'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'bCreate',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'bSave',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'bDelete',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})