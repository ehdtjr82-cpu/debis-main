/*amd /AI/ac_106_01_04b.xml 62819 c649955f931c5ca0eccabdb6e2d878d6b422a79059e51a75eef0f0e9f6a88eea */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_slip'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCd',name:'전표귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptNm',name:'전표귀속부서명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipcontents',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipSeq',name:'전표순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'drcrClsCd',name:'차대구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',name:'관리사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'관리거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'관리거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDt',name:'관리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',name:'관리기간시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',name:'관리기간종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNm',name:'관리번호명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizdivCd',name:'사업부코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'termMgntYn',name:'기간관리여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'clntMgntYn',name:'거래처관리여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'empMgntYn',name:'사원관리여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dtMgntYn',name:'일자관리여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mgntNoCd',name:'관리번호코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'요청방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payProcYn',name:'지급처리여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAcctCd',name:'지급계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsCd',name:'공제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excel'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'drcrClsCd',name:'차대구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payProcYn',name:'지급처리여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'관리거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDt',name:'관리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',name:'관리기간시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',name:'관리기간종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'요청방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsCd',name:'공제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_temp'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'drcrClsCd',name:'차대구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payProcYn',name:'지급처리여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'관리거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDt',name:'관리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',name:'관리기간시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',name:'관리기간종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'요청방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsCd',name:'공제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exchRt'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdExchRt',name:'기준환율',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_exchRtSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'기준일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_budgetCheck'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'budgetYm',name:'예산년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'budgetRsltsAmt',name:'예산실적금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_budget'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntlUnitClsCd',name:'통제단위구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetRsltsAmt',name:'예산실적금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetRsltsSettAmt',name:'예산실적정산금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_budget_temp'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retSlip'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidClsCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_purchaseSlip'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prtnGrpNo',name:'출력그룹번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyAmt',name:'공급가액',dataType:'number'}},{T:1,N:'w2:key',A:{id:'vat',name:'부가세',dataType:'number'}},{T:1,N:'w2:key',A:{id:'summary',name:'적요',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.gnrlaccount.slipmgnt.ProcessInternationalJournalizeSlipCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_slip","key":"IN_DS1"},{"id":"ds_slipcontents","key":"IN_DS2"},{"id":"dma_purchaseSlip","key":"IN_DS3"},{"id":"ds_retSlip","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_retSlip","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_exchRt',action:'/ac.fm.stdinfomgnt.RetrieveExchangeRateCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_exchRtSearch","key":"IN_DS1"},{"id":"ds_exchRt","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_exchRt","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_exchRt_submitdone','ev:submiterror':'scwin.sbm_exchRt_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_budgetRt',action:'/ac.co.budgetmgnt.ValidateBudgetRemainAmtCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_budgetCheck","key":"IN_DS1"},{"id":"ds_budget","key":"OUT_DS1"},{"id":"ds_budget_temp","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_budget","key":"OUT_DS1"},{"id":"ds_budget_temp","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_budgetRt_submitdone','ev:submiterror':'scwin.sbm_budgetRt_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_slipSave',action:'/il.acc.acpay.SaveSlipNoPaymentInvoiceCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_purchaseSlip","key":"IN_DS1"}]',target:'data:json,[]','ev:submiterror':'scwin.sbm_slipSave_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_evidClsCd',action:'/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=retrieveEvidInfo&param3=PCHS',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_evidClsCd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_evidClsCd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_evidClsCd_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.state = "Y";
scwin.delflag = "N";
scwin.ELECTRONICDRAFT = "40";
scwin.DRAFTCHECK = "50";
scwin.TRANSFER = "20";
scwin.ELECTRIC_CASH = "30";
scwin.olddata = 1;
scwin.cucd = "";
scwin.rate = "";
scwin.amt = "0";
scwin.vat = "0";
scwin.amtFcrc = "0";
scwin.certiNo = "";
scwin.prtnGrpNo = "";
scwin.pchsClntNo = "";
scwin.pchsClntNm = "";
scwin.fareEngCd = "";
scwin.acctDeptCd2 = "";
scwin.acctDeptCd = "";
scwin.acctDeptNm = "";
scwin.rmk = "";
scwin.pchsIntendDtSt = "";
scwin.txt_fareEngCd = "";
scwin.txt_evidClsNm = "";
scwin.txt_bizdivCd = "";
scwin.txt_bizDomCd = "";
scwin.txt_termMgntYn = "";
scwin.txt_clntMgntYn = "";
scwin.txt_empMgntYn = "";
scwin.txt_dtMgntYn = "";
scwin.txt_payAcctCd = "";
scwin.hidVal_slipAcctDeptCd = "";
scwin.hidVal_acctCd = "";
scwin.hidVal_acctDeptCd = "";
scwin.hidVal_mgntClntNo = "";
scwin.hidVal_mgntEmpNo = "";
scwin.hidVal_crn = "";
scwin.KOREA_WON = "KRW";
scwin.CREDIT = "C";
scwin.amtMinusVat = "0";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  if (scwin.params != null) {
    scwin.cucd = scwin.params.cucd || "";
    scwin.rate = scwin.params.rate || "";
    scwin.amt = scwin.params.amt || "0";
    scwin.vat = scwin.params.vat || "0";
    scwin.amtFcrc = scwin.params.amtFcrc || "0";
    scwin.certiNo = scwin.params.certiNo || "";
    scwin.prtnGrpNo = scwin.params.prtnGrpNo || "";
    scwin.pchsClntNo = scwin.params.pchsClntNo || "";
    scwin.pchsClntNm = scwin.params.pchsClntNm || "";
    scwin.fareEngCd = scwin.params.fareEngCd || "";
    scwin.acctDeptCd2 = scwin.params.acctDeptCd2 || "";
    scwin.acctDeptCd = scwin.params.acctDeptCd || "";
    scwin.acctDeptNm = scwin.params.acctDeptNm || "";
    scwin.rmk = scwin.params.rmk || "";
    scwin.pchsIntendDtSt = scwin.params.pchsIntendDtSt || "";
  }
  let amtNum = parseInt(scwin.amt, 10) || 0;
  let vatNum = parseInt(scwin.vat, 10) || 0;
  scwin.amtMinusVat = String(amtNum - vatNum);
  scwin.loginAcctDeptCd = $c.ses.getAcctDeptCd ? $c.ses.getAcctDeptCd() : "";
  scwin.loginAcctDeptNm = $c.ses.getAcctDeptNm ? $c.ses.getAcctDeptNm() : "";
  scwin.f_OnLoad();
};
scwin.onUdcCompleted = function () {};
scwin.f_OnLoad = async function () {
  scwin.state = "Y";
  scwin.f_Header();
  $c.gus.cfDisableBtnOnly($p, [btn_retrieve]);
  lc_reqPayMthdCd.setValue("");
  await $c.sbm.execute($p, sbm_evidClsCd);
  scwin.f_AddRow();
  lc_drcrClsCd.setValue("C");
  scwin.txt_fareEngCd = scwin.fareEngCd;
  scwin.f_openPopUp('7', 'C');
  if (ed_acctCd.getValue() == "1110121") {
    chb_payProcYn.setValue("");
  } else {
    chb_payProcYn.setValue("1");
  }
  scwin.f_CheckPayYn();
  lc_crcCd.setValue("KRW");
  ed_amtFcrc.setValue("");
  ed_amt.setValue(scwin.amt);
  ed_mgntClntNo.setValue(scwin.pchsClntNo);
  txt_mgntClntNm.setValue(scwin.pchsClntNm);
  txt_crnNm.setValue(scwin.pchsClntNm);
  scwin.f_openPopUp('4', 'T');
  ed_acctDeptCd.setValue(scwin.acctDeptCd);
  scwin.f_openPopUp('3', 'F');
  ed_mgntDt.setValue(scwin.pchsIntendDtSt);
  txt_summary.setValue(scwin.rmk);
  ed_acctCd.setFocus();
  lc_evidClsCd.setSelectedIndex(0);
  lc_deductClsCd.setValue("");
  $c.gus.cfDisableObjects($p, [lc_deductClsCd]);
};
scwin.f_Header = function () {
  dma_slip.set("slipDt", scwin.pchsIntendDtSt);
  dma_slip.set("slipAcctDeptCd", scwin.loginAcctDeptCd);
  dma_slip.set("slipAcctDeptNm", scwin.loginAcctDeptNm);
  scwin.hidVal_slipAcctDeptCd = dma_slip.get("slipAcctDeptCd");
};
scwin.f_CheckFileExt = function (ext, path) {
  ext = ext.toUpperCase();
  path = path.toUpperCase();
  let elen = ext.length;
  let flen = path.length;
  return ext == path.substring(flen - elen, flen);
};
scwin.f_Upload = async function () {
  ds_excel.removeAll();
  ds_temp.removeAll();

  // TODO: WebSquare file upload 방식으로 대체 필요
  await $c.win.alert($p, "CSV 파일 업로드 기능은 WebSquare 파일 업로드 방식으로 구현이 필요합니다.");
};
scwin.f_AddRowUploaded = function () {
  if (ds_temp.getRowCount() > 0) {
    ds_slipcontents.removeAll();
    for (let i = 0; i < ds_temp.getRowCount(); i++) {
      ds_slipcontents.insertRow();
      let row = ds_slipcontents.getRowCount() - 1;
      ds_slipcontents.setCellData(row, "drcrClsCd", ds_temp.getCellData(i, "drcrClsCd"));
      ds_slipcontents.setCellData(row, "acctCd", ds_temp.getCellData(i, "acctCd"));
      ds_slipcontents.setCellData(row, "payProcYn", ds_temp.getCellData(i, "payProcYn"));
      if (ds_slipcontents.getCellData(row, "drcrClsCd") == "C") {
        ds_slipcontents.setCellData(row, "payProcYn", "1");
      } else {
        ds_slipcontents.setCellData(row, "payProcYn", "0");
      }
      if (ds_slipcontents.getCellData(row, "payProcYn") == "1") {
        ds_slipcontents.setCellData(row, "payAcctCd", "1");
      }
      ds_slipcontents.setCellData(row, "crcCd", ds_temp.getCellData(i, "crcCd"));
      ds_slipcontents.setCellData(row, "exchRt", ds_temp.getCellData(i, "exchRt"));
      ds_slipcontents.setCellData(row, "amtFcrc", ds_temp.getCellData(i, "amtFcrc"));
      ds_slipcontents.setCellData(row, "amt", ds_temp.getCellData(i, "amt"));
      ds_slipcontents.setCellData(row, "mgntNo", ds_temp.getCellData(i, "mgntNo"));
      ds_slipcontents.setCellData(row, "acctDeptCd", ds_temp.getCellData(i, "acctDeptCd"));
      ds_slipcontents.setCellData(row, "mgntClntNo", ds_temp.getCellData(i, "mgntClntNo"));
      if (!(ds_slipcontents.getCellData(row, "mgntClntNo") == null || ds_slipcontents.getCellData(row, "mgntClntNo") == "")) {
        ds_slipcontents.setCellData(row, "clntMgntYn", "1");
      }
      ds_slipcontents.setCellData(row, "mgntDt", ds_temp.getCellData(i, "mgntDt"));
      ds_slipcontents.setCellData(row, "dtMgntYn", "1");
      ds_slipcontents.setCellData(row, "mgntTermStDt", ds_temp.getCellData(i, "mgntTermStDt"));
      ds_slipcontents.setCellData(row, "mgntTermEndDt", ds_temp.getCellData(i, "mgntTermEndDt"));
      if (!(ds_slipcontents.getCellData(row, "mgntTermStDt") == null || ds_slipcontents.getCellData(row, "mgntTermStDt") == "")) {
        ds_slipcontents.setCellData(row, "termMgntYn", "1");
      }
      ds_slipcontents.setCellData(row, "mgntEmpNo", ds_temp.getCellData(i, "mgntEmpNo"));
      if (!(ds_slipcontents.getCellData(row, "mgntEmpNo") == null || ds_slipcontents.getCellData(row, "mgntEmpNo") == "")) {
        ds_slipcontents.setCellData(row, "empMgntYn", "1");
      }
      ds_slipcontents.setCellData(row, "summary", ds_temp.getCellData(i, "summary"));
      ds_slipcontents.setCellData(row, "reqDt", ds_temp.getCellData(i, "reqDt"));
      ds_slipcontents.setCellData(row, "reqPayMthdCd", ds_temp.getCellData(i, "reqPayMthdCd"));
      ds_slipcontents.setCellData(row, "draftDdCntCd", ds_temp.getCellData(i, "draftDdCntCd"));
      ds_slipcontents.setCellData(row, "taxinvcDt", ds_temp.getCellData(i, "taxinvcDt"));
      ds_slipcontents.setCellData(row, "evidClsCd", ds_temp.getCellData(i, "evidClsCd"));
      ds_slipcontents.setCellData(row, "deductClsCd", ds_temp.getCellData(i, "deductClsCd"));
      ds_slipcontents.setCellData(row, "crn", ds_temp.getCellData(i, "crn"));
      ds_slipcontents.setCellData(row, "spplyAmt", ds_temp.getCellData(i, "spplyAmt"));
      scwin.hidVal_acctCd = ds_slipcontents.getCellData(row, "acctCd");
      scwin.hidVal_acctDeptCd = ds_slipcontents.getCellData(row, "acctDeptCd");
      scwin.hidVal_mgntClntNo = ds_slipcontents.getCellData(row, "mgntClntNo");
      scwin.hidVal_mgntEmpNo = ds_slipcontents.getCellData(row, "mgntEmpNo");
    }
  }
  $c.gus.cfShowTotalRows($p, totalRows, ds_slipcontents.getRowCount());
  return true;
};
scwin.f_EnableYn = function (str) {
  if (str == 1) {} else {}
};
scwin.f_DeleteRow = function () {
  scwin.state = "Y";
  scwin.delflag = "Y";
  ds_slipcontents.setRowPosition(0);
  let checkedRows = ds_slipcontents.getMatchedIndex("chk", "1", true);
  if (checkedRows && checkedRows.length > 0) {
    for (let i = checkedRows.length - 1; i >= 0; i--) {
      ds_slipcontents.removeRow(checkedRows[i]);
    }
  }
};
scwin.f_CancelRow = function () {
  scwin.state = "Y";
  scwin.delflag = "Y";
  let checkedRows = ds_slipcontents.getMatchedIndex("chk", "1", true);
  if (checkedRows && checkedRows.length > 0) {
    for (let i = checkedRows.length - 1; i >= 0; i--) {
      ds_slipcontents.removeRow(checkedRows[i]);
    }
  }
  let lastRow = ds_slipcontents.getRowCount() - 1;
  if (lastRow >= 0) {
    ds_slipcontents.setRowPosition(lastRow);
  }
};
scwin.f_AddRow = async function () {
  let chk = await $c.gus.cfValidate($p, [ed_slipDt, ed_slipAcctDeptCd]);
  if (!chk) return;
  if (!scwin.f_HiddenCheck(ed_slipAcctDeptCd, scwin.hidVal_slipAcctDeptCd, "발행부서")) return;
  if (scwin.state != "Y") {
    if (scwin.f_Validation() != true) return;
  }
  scwin.f_Add();
};
scwin.f_CopyRow = async function () {
  let flag = 0;
  let chk = await $c.gus.cfValidate($p, [ed_slipDt, ed_slipAcctDeptCd]);
  if (!chk) return;
  if (!scwin.f_HiddenCheck(ed_slipAcctDeptCd, scwin.hidVal_slipAcctDeptCd, "발행부서")) return;
  if (scwin.state != "Y") {
    if (scwin.f_Validation() != true) return;
  }
  scwin.f_Add();
  lc_crcCd.setValue("KRW");
  scwin.f_openPopUp('7', 'D');
  ed_amt.setValue(scwin.amtMinusVat);
  ed_acctDeptCd.setValue(scwin.acctDeptCd);
  scwin.f_openPopUp('3', 'F');
  let prevRow = ds_slipcontents.getRowCount() - 2;
  if (prevRow >= 0) {
    txt_summary.setValue(ds_slipcontents.getCellData(prevRow, "summary"));
    ed_taxinvcDt.setValue(ds_slipcontents.getCellData(prevRow, "taxinvcDt"));
    ed_mgntDt.setValue(ds_slipcontents.getCellData(prevRow, "mgntDt"));
  }
  let rdVal = rd_gb.getValue();
  if (rdVal == "1") {
    ed_acctCd.setValue("1111210");
    txt_acctNm.setValue("부가세대급금-일반");
    ed_amt.setValue(scwin.vat);
    ed_spplyAmt.setValue(scwin.amtMinusVat);
    lc_evidClsCd.setValue("10");
    lc_deductClsCd.setValue("1");
    ed_acctDeptCd.setValue("00009");
    txt_acctDeptNm.setValue("재무");
    if (prevRow >= 0) {
      ed_mgntClntNo.setValue(ds_slipcontents.getCellData(prevRow, "mgntClntNo"));
      scwin.f_openPopUp('4', 'T');
    }
    scwin.f_checkPopEd(ed_acctDeptCd, txt_acctDeptNm, scwin.hidVal_acctDeptCd, '3');
  } else if (rdVal == "2") {
    ed_acctCd.setValue("4202322");
    txt_acctNm.setValue("원)물류지급수수료-기타");
    ed_amt.setValue("");
    ed_spplyAmt.setValue("0");
    lc_evidClsCd.setValue("20");
    lc_deductClsCd.setValue("1");
    if (prevRow >= 0) {
      ed_mgntClntNo.setValue(ds_slipcontents.getCellData(prevRow, "mgntClntNo"));
      scwin.f_openPopUp('4', 'T');
    }
    scwin.f_checkPopEd(ed_acctDeptCd, txt_acctDeptNm, scwin.hidVal_acctDeptCd, '3');
  } else if (rdVal == "3") {
    lc_evidClsCd.setValue("20");
    lc_deductClsCd.setValue("1");
    if (prevRow >= 0) {
      ed_mgntClntNo.setValue(ds_slipcontents.getCellData(prevRow, "mgntClntNo"));
      scwin.f_openPopUp('4', 'T');
    }
    scwin.f_checkPopEd(ed_acctDeptCd, txt_acctDeptNm, scwin.hidVal_acctDeptCd, '3');
  }
  rd_gb.setValue("");
};
scwin.f_Add = function () {
  scwin.state = "N";
  scwin.delflag = "N";
  ds_slipcontents.insertRow();
  let lastRow = ds_slipcontents.getRowCount() - 1;
  ds_slipcontents.setCellData(lastRow, "dtMgntYn", "1");
  ds_slipcontents.setCellData(lastRow, "mgntDt", scwin.pchsIntendDtSt);
  lc_crcCd.setSelectedIndex(0);
  lc_drcrClsCd.setSelectedIndex(1);
  chb_payProcYn.setValue("");
  lc_evidClsCd.setSelectedIndex(0);
  lc_deductClsCd.setValue("");
  $c.gus.cfDisableObjects($p, [lc_deductClsCd]);
  $c.gus.cfEnableObjects($p, [udc_acctDept, udc_acct]);
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
  ed_amtFcrc.setDisabled(true);
  scwin.f_AcctCd('', 0, 0, 0, '', 0, '');
  scwin.f_ReadOnly();
  $c.gus.cfDisableObjects($p, [txt_acctNm, txt_acctDeptNm, txt_mgntClntNm, ed_crn, txt_crnNm, txt_mgntEmpNm, ed_reqDt, lc_reqPayMthdCd, ed_draftDdCntCd]);
  $c.gus.cfEnableObjects($p, [ed_mgntClntNo, ed_taxinvcDt, ed_mgntDt]);
  $c.gus.cfSetIMEModeActiveObjects($p, [txt_summary]);
  lc_reqPayMthdCd.setValue("");
  ed_acctCd.setFocus();
};
scwin.f_BudgetCheck = async function () {
  await $c.sbm.execute($p, sbm_budgetRt);
};
scwin.f_ReadOnly = function () {
  txt_mgntNm.setDisabled(true);
  txt_exchRt.setDisabled(true);
};
scwin.f_Save = async function () {
  if (ds_slipcontents.getUpdatedIndex().length == 0 && !dma_slip.isModified()) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if (ds_slipcontents.getRowCount() == 0) {
    await $c.win.alert($p, "데이타가 없습니다.");
    return;
  }
  if (scwin.f_Validation() == true) {
    dma_purchaseSlip.set("certiNo", scwin.certiNo);
    dma_purchaseSlip.set("prtnGrpNo", scwin.prtnGrpNo);
    dma_purchaseSlip.set("slipDt", ed_slipDt.getValue().trim());
    dma_purchaseSlip.set("acctDeptCd", scwin.acctDeptCd2);
    dma_purchaseSlip.set("pchsClntNo", scwin.pchsClntNo);
    dma_purchaseSlip.set("spplyDt", ed_mgntDt.getValue());
    dma_purchaseSlip.set("spplyAmt", scwin.amtMinusVat);
    dma_purchaseSlip.set("vat", scwin.vat);
    dma_purchaseSlip.set("summary", "대납금");
    let Dsum = 0;
    let Csum = 0;
    for (let i = 0; i < ds_slipcontents.getRowCount(); i++) {
      if (ds_slipcontents.getCellData(i, "drcrClsCd") == "D") {
        Dsum = Dsum + Number(ds_slipcontents.getCellData(i, "amt"));
      }
      if (ds_slipcontents.getCellData(i, "drcrClsCd") == "C") {
        Csum = Csum + Number(ds_slipcontents.getCellData(i, "amt"));
      }
    }
    if (Dsum != Csum) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["차변과 대변금액"]);
      ed_amt.setFocus();
      return;
    }
    let chkGrid = await $c.gus.cfValidate($p, [gr_slipcontents]);
    if (chkGrid) {
      let confirmResult = await $c.win.confirm($p, "발행하시겠습니까?");
      if (confirmResult == true) {
        await $c.sbm.execute($p, sbm_save);
      }
    }
  }
};
scwin.f_BizCheck = function () {
  if (ed_crn.getValue().length == 13) {
    // TODO: validExp 동적 변경 - 사업자번호:yes:ssn
  } else if (ed_crn.getValue().length == 10) {
    // TODO: validExp 동적 변경 - 사업자번호:yes:csn
  }
};
scwin.f_Validation = async function () {
  scwin.f_BizCheck();
  let chk = await $c.gus.cfValidate($p, [lc_drcrClsCd, lc_crcCd, txt_mgntNo, ed_slipDt, ed_slipAcctDeptCd, lc_drcrClsCd, ed_amt, ed_acctCd, ed_acctDeptCd, txt_mgntNo, ed_mgntClntNo, ed_mgntDt, ica_mgntTermStDt, ica_mgntTermEndDt, ed_mgntEmpNo, txt_summary, ed_amtFcrc]);
  if (!chk) return false;
  if (!$c.gus.cfIsAfterDate($p, ica_mgntTermStDt.getValue().trim(), ica_mgntTermEndDt.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ica_mgntTermStDt.setFocus();
    return false;
  }
  let payChecked = chb_payProcYn.getValue() == "1";
  if (payChecked) {
    if (ed_reqDt.getValue().trim() != "" && lc_reqPayMthdCd.getValue().trim() == "") {
      await $c.gus.cfAlertMsg($p, "지급일자를 입력하면 지급방법은 필수 항목입니다.");
      lc_reqPayMthdCd.setFocus();
      return false;
    }
    if (ed_reqDt.getValue().trim() == "" && lc_reqPayMthdCd.getValue().trim() != "") {
      await $c.gus.cfAlertMsg($p, "지급방법을 입력하면 지급일자는 필수 항목입니다.");
      ed_reqDt.setFocus();
      return false;
    }
    if (ed_reqDt.getValue().trim() == "" && ed_taxinvcDt.getValue().trim() == "") {
      await $c.gus.cfAlertMsg($p, "지급일자를 입력하지 않으면 세금계산서 일자는 필수 항목입니다.");
      ed_taxinvcDt.setFocus();
      return false;
    }
    if (lc_reqPayMthdCd.getValue() == scwin.ELECTRONICDRAFT || lc_reqPayMthdCd.getValue() == scwin.DRAFTCHECK) {
      let chkDraft = await $c.gus.cfValidate($p, [ed_draftDdCntCd]);
      if (!chkDraft) return false;
    }
  }
  if (!scwin.f_HiddenCheck(ed_slipAcctDeptCd, scwin.hidVal_slipAcctDeptCd, "발행부서")) return false;
  if (!scwin.f_HiddenCheck(ed_acctCd, scwin.hidVal_acctCd, "계정")) return false;
  if (!scwin.f_HiddenCheck(ed_acctDeptCd, scwin.hidVal_acctDeptCd, "귀속부서")) return false;
  if (!scwin.f_HiddenCheck(ed_mgntEmpNo, scwin.hidVal_mgntEmpNo, "사원번호")) return false;
  return true;
};
scwin.f_openPopUp = function (flag, check) {
  let rtnList = null;
  switch (flag) {
    case '1':
      let param1 = ed_slipDt.getValue().trim() + ",,,0,";
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveAcctDeptCdInfo', ed_slipAcctDeptCd.getValue().trim(), txt_slipAcctDeptNm.getValue(), check, null, null, null, null, param1, null, null, null, null);
      scwin.f_resultPopEd(ed_slipAcctDeptCd, txt_slipAcctDeptNm, rtnList, 'hidVal_slipAcctDeptCd');
      break;
    case '2':
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveAcctCdContentsInfo', ed_acctCd.getValue().trim(), txt_acctNm.getValue(), check, null, null, null, null, ed_slipDt.getValue().trim(), null, null, null, null);
      if (rtnList != null) {
        if (rtnList[0] == "N/A") {
          return;
        }
        ed_acctCd.setValue(rtnList[0]);
        txt_acctNm.setValue(rtnList[1]);
        scwin.hidVal_acctCd = rtnList[0];
        scwin.f_AcctCd(rtnList[4], rtnList[5], rtnList[6], rtnList[7], rtnList[8], rtnList[9], rtnList[10]);
      } else {
        ed_acctCd.setValue("");
        txt_acctNm.setValue("");
        txt_mgntNm.setValue("");
        scwin.hidVal_acctCd = "";
        scwin.txt_payAcctCd = "";
      }
      break;
    case '3':
      check = "T";
      let param3 = ed_slipDt.getValue().trim() + ",,,0,";
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveAcctDeptCdInfo', ed_acctDeptCd.getValue().trim(), txt_acctDeptNm.getValue(), check, null, null, null, null, param3, null, null, null, null);
      if (rtnList != null) {
        if (rtnList[0] == "N/A") {
          return;
        }
        ed_acctDeptCd.setValue(rtnList[0]);
        txt_acctDeptNm.setValue(rtnList[1]);
        scwin.txt_bizdivCd = rtnList[2];
        scwin.txt_bizDomCd = rtnList[3];
        scwin.hidVal_acctDeptCd = rtnList[0];
      } else {
        ed_acctDeptCd.setValue("");
        txt_acctDeptNm.setValue("");
        scwin.txt_bizdivCd = "";
        scwin.txt_bizDomCd = "";
        scwin.hidVal_acctDeptCd = "";
      }
      break;
    case '4':
      rtnList = $c.gus.ilCommonPopUp($p, 'retrieveClntEmpNoList', ed_mgntClntNo.getValue().trim(), txt_mgntClntNm.getValue(), check, null, null, null, null, null, null, null, null, null);
      if (rtnList != null) {
        if (rtnList[0] == "N/A") {
          return;
        }
        ed_mgntClntNo.setValue(rtnList[0]);
        txt_mgntClntNm.setValue(rtnList[1]);
        scwin.hidVal_mgntClntNo = rtnList[0];
        txt_crnNm.setValue(rtnList[1]);
        ed_crn.setValue(rtnList[4]);
        if (!ed_mgntEmpNo.getDisabled() && rtnList[10] == "EM") {
          ed_mgntEmpNo.setValue(rtnList[11]);
          txt_mgntEmpNm.setValue(rtnList[12]);
          scwin.hidVal_mgntEmpNo = rtnList[11];
        }
      } else {
        ed_mgntClntNo.setValue("");
        txt_mgntClntNm.setValue("");
        scwin.hidVal_mgntClntNo = "";
      }
      break;
    case '5':
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveAcEmpInfo', ed_mgntEmpNo.getValue().trim(), txt_mgntEmpNm.getValue(), check, null, null, null, null, null, null, null, null, null);
      scwin.f_resultPopEd(ed_mgntEmpNo, txt_mgntEmpNm, rtnList, 'hidVal_mgntEmpNo');
      break;
    case '6':
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveCrnInfo', ed_crn.getValue().trim(), txt_crnNm.getValue(), check, null, null, null, null, null, null, null, null, null);
      if (rtnList != null) {
        if (rtnList[0] == "N/A") {
          return;
        }
        ed_crn.setValue(rtnList[0]);
        txt_crnNm.setValue(rtnList[1]);
        scwin.hidVal_crn = rtnList[0];
      } else {
        ed_crn.setValue("");
        txt_crnNm.setValue("");
        scwin.hidVal_crn = "";
      }
      break;
    case '7':
      let pCode = scwin.txt_fareEngCd;
      let pName = "";
      let param7 = "," + check + ",,,";
      rtnList = $c.gus.ilCommonPopUp($p, 'retriveFreightPchsDrAcctCd', pCode, pName, "T", '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", param7, null, null, null, null, null, "F", "Freight,Code,Name", "T");
      if (rtnList != null) {
        if (rtnList[0] == "N/A") {
          return;
        }
        ed_acctCd.setValue(rtnList[0]);
        txt_acctNm.setValue(rtnList[1]);
        scwin.hidVal_acctCd = rtnList[0];
      } else {
        ed_acctCd.setValue("");
        txt_acctNm.setValue("");
        scwin.hidVal_acctCd = "";
      }
      break;
    default:
      break;
  }
};
scwin.f_HiddenCheck = async function (objCtrl, hidVal, msg) {
  if (objCtrl.getValue().trim() == "") return true;
  if (objCtrl.getValue().trim() != hidVal) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, [msg]);
    objCtrl.setFocus();
    return false;
  } else {
    return true;
  }
};
scwin.f_checkPopEd = function (strCd, strNm, hidVal, flag) {
  if (strCd.getValue().trim() == hidVal) return;
  strNm.setValue("");
  if (flag == '1') scwin.hidVal_slipAcctDeptCd = "";else if (flag == '2') scwin.hidVal_acctCd = "";else if (flag == '3') scwin.hidVal_acctDeptCd = "";else if (flag == '4') scwin.hidVal_mgntClntNo = "";else if (flag == '5') scwin.hidVal_mgntEmpNo = "";else if (flag == '6') scwin.hidVal_crn = "";
  if (strCd.getValue().trim() != "") scwin.f_openPopUp(flag, 'T');
};
scwin.f_resultPopEd = function (strCd, strNm, rtnList, hidValKey) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    strCd.setValue(rtnList[0]);
    strNm.setValue(rtnList[1]);
    scwin[hidValKey] = rtnList[0];
  } else {
    strCd.setValue("");
    strNm.setValue("");
    scwin[hidValKey] = "";
  }
};
scwin.f_AcctCd = function (r_mgntCd, r_clntMgntYn, r_termMgntYn, r_empMgntYn, r_mgntNm, r_dtMgntYn, r_payAcctCd) {
  scwin.txt_termMgntYn = r_termMgntYn;
  scwin.txt_clntMgntYn = r_clntMgntYn;
  scwin.txt_empMgntYn = r_empMgntYn;
  scwin.txt_dtMgntYn = r_dtMgntYn;
  scwin.txt_payAcctCd = r_payAcctCd;
  if (r_mgntCd != "" && r_mgntCd != "0" || r_mgntNm != "") {
    txt_mgntNm.setValue(r_mgntNm);
    txt_mgntNo.setDisabled(false);
    txt_mgntNm.setDisabled(true);
  } else {
    txt_mgntNo.setValue("");
    txt_mgntNm.setValue("");
    txt_mgntNo.setDisabled(true);
    txt_mgntNm.setDisabled(true);
  }
  if (r_termMgntYn == "1") {
    $c.gus.cfEnableObjects($p, [ica_mgntTermStDt, ica_mgntTermEndDt]);
  } else {
    ica_mgntTermStDt.setValue("");
    ica_mgntTermEndDt.setValue("");
    $c.gus.cfDisableObjects($p, [ica_mgntTermStDt, ica_mgntTermEndDt]);
  }
  if (r_empMgntYn == "1") {
    $c.gus.cfEnableObjects($p, [ed_mgntEmpNo, udc_mgntEmp]);
  } else {
    ed_mgntEmpNo.setValue("");
    txt_mgntEmpNm.setValue("");
    $c.gus.cfDisableObjects($p, [ed_mgntEmpNo, udc_mgntEmp]);
  }
  $c.gus.cfEnableObjects($p, [ed_mgntDt]);
  if (ed_taxinvcDt.getValue() == null || ed_taxinvcDt.getValue() == "") {
    ed_taxinvcDt.setValue(ed_mgntDt.getValue());
  }
  scwin.f_PayYn();
};
scwin.f_SlipCopy = async function () {
  let returnValue = await $c.win.openPopup($p, "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_03_03p.xml", {
    width: 420,
    height: 200,
    modal: true
  });
  if (returnValue != null) {
    $c.gus.cfEnableObjects($p, [ed_slipDt, ed_slipAcctDeptCd, txt_slipAcctDeptNm]);
    $c.gus.cfEnableKeyData($p);
    $c.gus.cfEnableBtnOnly($p, [btn_save]);
    ds_slipcontents.removeAll();
    // TODO: ds_slipcontents.ImportData(returnValue.slipcopy) 대체 필요

    for (let idx = 0; idx < ds_slipcontents.getRowCount(); idx++) {
      if (returnValue.copyKind == "2") {
        ds_slipcontents.setCellData(idx, "amt", -1 * Number(ds_slipcontents.getCellData(idx, "amt")));
      } else if (returnValue.copyKind == "3") {
        if (ds_slipcontents.getCellData(idx, "drcrClsCd") == "C") {
          ds_slipcontents.setCellData(idx, "drcrClsCd", "D");
        } else {
          ds_slipcontents.setCellData(idx, "drcrClsCd", "C");
        }
      }
    }
    scwin.f_ReadOnly();
  }
};
scwin.crcCdChange = async function () {
  if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == scwin.KOREA_WON) {
    txt_exchRt.setValue("");
    ed_amtFcrc.setValue("");
    ed_amtFcrc.setDisabled(true);
  } else {
    ed_amtFcrc.setDisabled(false);
    await $c.sbm.execute($p, sbm_exchRt);
  }
};
scwin.f_CheckComboData = async function (objCombo, comboTitle) {
  if (objCombo.getSelectedIndex() == -1 && !$c.gus.cfIsNull($p, objCombo.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, [comboTitle + "코드"]);
    objCombo.setFocus();
  }
};
scwin.f_CheckPayYn = function () {
  let payChecked = chb_payProcYn.getValue() == "1";
  if (payChecked) {
    $c.gus.cfEnableObjects($p, [ed_reqDt, lc_reqPayMthdCd, ed_draftDdCntCd, ed_taxinvcDt]);
  } else {
    ed_reqDt.setValue("");
    lc_reqPayMthdCd.setValue("");
    ed_draftDdCntCd.setValue("");
    $c.gus.cfDisableObjects($p, [ed_reqDt, lc_reqPayMthdCd, ed_draftDdCntCd]);
  }
};
scwin.f_PayYn = function () {
  if (scwin.txt_payAcctCd != "" && lc_drcrClsCd.getValue() == scwin.CREDIT) {
    $c.gus.cfEnableObjects($p, [ed_mgntClntNo, udc_mgntClnt]);
  } else {
    chb_payProcYn.setValue("");
    $c.gus.cfDisableObjects($p, [ed_reqDt, lc_reqPayMthdCd, ed_draftDdCntCd]);
  }
};
scwin.f_MoveToAddTax = function () {
  $c.win.openMenu($p, "부가세자료관리", "/ui/ac/fi/taxbiz/vatctrl/fi_401_01_01b.xml", "fi_401_01_01b.xml");
};
scwin.lc_drcrClsCd_onblur = async function (e) {
  await scwin.f_CheckComboData(lc_drcrClsCd, "차대구분");
};
scwin.ed_amt_onblur = function (e) {
  if (ed_acctCd.getValue() == "1111210" || ed_acctCd.getValue() == "2100710") {}
};
scwin.lc_reqPayMthdCd_onchange = function (e) {
  if (lc_reqPayMthdCd.getValue() == scwin.ELECTRONICDRAFT || lc_reqPayMthdCd.getValue() == scwin.DRAFTCHECK) {
    $c.gus.cfEnableObjects($p, [ed_draftDdCntCd]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_draftDdCntCd]);
  }
  if (lc_reqPayMthdCd.getValue() == scwin.ELECTRIC_CASH || lc_reqPayMthdCd.getValue() == scwin.TRANSFER) {
    let curRow = ds_slipcontents.getRowPosition();
    if (curRow >= 0) {
      let orgVal = ds_slipcontents.getOriginalCellData(curRow, "reqPayMthdCd");
      if (!(orgVal == scwin.ELECTRIC_CASH || orgVal == scwin.TRANSFER)) {
        lc_crcCd.setSelectedIndex(0);
      }
    }
    $c.gus.cfEnableObjects($p, [lc_crcCd]);
  } else {
    lc_crcCd.setSelectedIndex(0);
    $c.gus.cfDisableObjects($p, [lc_crcCd]);
  }
  ed_draftDdCntCd.setValue("0");
};
scwin.sbm_save_submitdone = function (e) {
  if (ds_retSlip.getRowCount() > 0 && ds_retSlip.getCellData(0, "slipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_retSlip.getCellData(0, "slipNo"));
  }
  scwin.state = "Y";
  scwin.delflag = "N";
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableAllBtn($p);
  ed_slipDt.setDisabled(false);
  ed_slipAcctDeptCd.setDisabled(false);
  txt_slipAcctDeptNm.setDisabled(false);
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_slipSave_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_exchRt_submitdone = function (e) {
  if (ds_exchRt.getRowCount() > 0) {
    txt_exchRt.setValue(ds_exchRt.getCellData(0, "stdExchRt"));
  }
  ed_amtFcrc.setDisabled(false);
  ed_amtFcrc.setFocus();
};
scwin.sbm_exchRt_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_budgetRt_submitdone = async function (e) {
  if (ds_budget.getRowCount() > 0 && ds_budget.getCellData(0, "cntlUnitClsCd") == "T") {
    scwin.f_Add();
  } else {
    if (ds_budget.getRowCount() > 0) {
      await $c.gus.cfAlertMsg($p, "예산잔액이 부족합니다. 예산잔액을 확인하시기 바랍니다.\n부서:" + ds_budget.getCellData(0, "acctDeptNm") + "\n계정:" + ds_budget.getCellData(0, "acctCd") + "\n남은예산금액:" + ds_budget.getCellData(0, "budgetRsltsAmt") + "\n사용요청금액:" + ds_budget.getCellData(0, "budgetRsltsSettAmt"));
    }
  }
};
scwin.sbm_budgetRt_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.lc_crcCd_onchange = function (e) {
  scwin.crcCdChange();
};
scwin.lc_drcrClsCd_onchange = function (e) {
  scwin.f_PayYn();
};
scwin.sbm_evidClsCd_submitdone = function (e) {
  ds_evidClsCd.insertRow();
  let lastRow = ds_evidClsCd.getRowCount() - 1;
  ds_evidClsCd.setCellData(lastRow, "col1", "");
  ds_evidClsCd.setCellData(lastRow, "col2", "없음");
};
scwin.ds_slipcontents_onrowpositionchange = function (rowIndex, oldRow) {
  scwin.hidVal_slipAcctDeptCd = dma_slip.get("slipAcctDeptCd");
  if (rowIndex >= 0) {
    scwin.hidVal_acctCd = ds_slipcontents.getCellData(rowIndex, "acctCd");
    scwin.hidVal_acctDeptCd = ds_slipcontents.getCellData(rowIndex, "acctDeptCd");
    scwin.hidVal_mgntClntNo = ds_slipcontents.getCellData(rowIndex, "mgntClntNo");
    scwin.hidVal_mgntEmpNo = ds_slipcontents.getCellData(rowIndex, "mgntEmpNo");
  }
};
scwin.ed_slipAcctDeptCd_onblur = function (e) {
  scwin.f_checkPopEd(ed_slipAcctDeptCd, txt_slipAcctDeptNm, scwin.hidVal_slipAcctDeptCd, '1');
};
scwin.ed_acctCd_onblur = function (e) {
  if (ed_acctCd.getValue().trim() == "") txt_mgntNm.setValue("");
  scwin.f_checkPopEd(ed_acctCd, txt_acctNm, scwin.hidVal_acctCd, '2');
};
scwin.ed_acctDeptCd_onblur = function (e) {
  scwin.f_checkPopEd(ed_acctDeptCd, txt_acctDeptNm, scwin.hidVal_acctDeptCd, '3');
};
scwin.ed_mgntClntNo_onblur = function (e) {
  scwin.f_checkPopEd(ed_mgntClntNo, txt_mgntClntNm, scwin.hidVal_mgntClntNo, '4');
};
scwin.ed_mgntEmpNo_onblur = function (e) {
  scwin.f_checkPopEd(ed_mgntEmpNo, txt_mgntEmpNm, scwin.hidVal_mgntEmpNo, '5');
};
scwin.ed_amtFcrc_onblur = function (e) {
  let amtFcrcVal = parseInt(ed_amtFcrc.getValue().trim()) || 0;
  let exchRtVal = parseInt(txt_exchRt.getValue().trim()) || 0;
  ed_amt.setValue(amtFcrcVal * exchRtVal);
};
scwin.lc_evidClsCd_onchange = function (e) {
  let rdVal = rd_gb.getValue();
  if (rdVal == "") {
    ed_spplyAmt.setValue("0");
    if (lc_evidClsCd.getValue() == "20") {
      ed_spplyAmt.setValue(ed_amt.getValue());
      $c.gus.cfDisableObjects($p, [lc_deductClsCd]);
      lc_deductClsCd.setValue("");
    }
    if (lc_evidClsCd.getValue() == "20" || lc_evidClsCd.getValue() == "30" || lc_evidClsCd.getValue() == "70" || lc_evidClsCd.getValue() == "99") {
      $c.gus.cfDisableObjects($p, [lc_deductClsCd]);
      lc_deductClsCd.setValue("");
    }
    if (lc_evidClsCd.getValue() == "40") {
      $c.gus.cfEnableObjects($p, [lc_deductClsCd]);
      lc_deductClsCd.setValue("2");
    }
    if (lc_evidClsCd.getValue() == "50") {
      $c.gus.cfEnableObjects($p, [lc_deductClsCd]);
      lc_deductClsCd.setValue("2");
    }
    if (lc_evidClsCd.getValue() == "60") {
      $c.gus.cfEnableObjects($p, [lc_deductClsCd]);
      lc_deductClsCd.setValue("2");
    }
    if (lc_evidClsCd.getValue() == "10") {
      $c.gus.cfEnableObjects($p, [lc_deductClsCd]);
      lc_deductClsCd.setValue("1");
    }
  }
  scwin.olddata = lc_evidClsCd.getSelectedIndex();
};
scwin.chb_payProcYn_onviewchange = function (e) {
  scwin.f_CheckPayYn();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_Upload();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_CopyRow();
};
scwin.btn_cancel_onclick = function (e) {
  scwin.f_CancelRow();
};
scwin.btn_edit_onclick = function (e) {
  scwin.f_MoveToAddTax();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/cm/udc/ilcomCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_slipDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_budgetCheck.budgetYm',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'발행부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_slipAcctDeptCd',nameId:'txt_slipAcctDeptNm',popupID:'',selectID:'',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_gb',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부가세'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'면제'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영세'}]},{T:1,N:'xf:value'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차대구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_drcrClsCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_slipcontents.drcrClsCd',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계정',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_acct',codeId:'ed_acctCd',nameId:'txt_acctNm',popupID:'',style:'',hideName:'Y'}},{T:1,N:'xf:select',A:{ref:'data:ds_slipcontents.payProcYn',appearance:'full',style:'',id:'chb_payProcYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지급처리여부'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'통화코드/환율',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'lc_crcCd',class:'',ref:'data:ds_exchRtSearch.crcCd',mandatory:'true'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_exchRt',placeholder:'',class:'',ref:'data:ds_slipcontents.exchRt'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'외화금액',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_amtFcrc',placeholder:'',style:'width:150px;',ref:'data:ds_slipcontents.amtFcrc'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'금액',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_amt',placeholder:'',style:'width:150px;',ref:'data:ds_budgetCheck.budgetRsltsAmt',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공급금액',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_spplyAmt',placeholder:'',class:'',ref:'data:ds_slipcontents.spplyAmt',mandatory:'true'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'면제 = 0',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'증빙종류',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'lc_evidClsCd',class:'',ref:'data:ds_slipcontents.evidClsCd',mandatory:'true'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'lc_deductClsCd',class:'',ref:'data:ds_slipcontents.deductClsCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_mgntClnt',codeId:'ed_mgntClntNo',nameId:'txt_mgntClntNm',hideName:'Y',popupID:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계산서일자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_taxinvcDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_slipcontents.taxinvcDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_crn',placeholder:'',style:'width: 120px;',ref:'data:ds_slipcontents.crn'}},{T:1,N:'xf:input',A:{class:'',id:'txt_crnNm',placeholder:'',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_acctDept',codeId:'ed_acctDeptCd',nameId:'txt_acctDeptNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_mgntNm',placeholder:'',style:'width: 100px;',ref:'data:ds_slipcontents.mgntNm'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mgntNo',placeholder:'',style:'',ref:'data:ds_slipcontents.mgntNo'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'관리일자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_mgntDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_slipcontents.mgntDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리기간',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_mgntTerm',edFromId:'ica_mgntTermStDt',edToId:'ica_mgntTermEndDt',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사원번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_mgntEmp',codeId:'ed_mgntEmpNo',nameId:'txt_mgntEmpNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적요',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_summary',placeholder:'',style:'',ref:'data:ds_slipcontents.summary'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급일자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_reqDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_slipcontents.reqDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급방법',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_reqPayMthdCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_slipcontents.reqPayMthdCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'어음일수',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_draftDdCntCd',placeholder:'',style:'width:150px;',ref:'data:ds_slipcontents.draftDdCntCd',mandatory:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_slipcontents',id:'gr_slipcontents',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'num',inputType:'text',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payProcYn',inputType:'text',value:'지급',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',value:'계정',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',value:'계정명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',value:'귀속부서',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',value:'부서명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'Damt',inputType:'text',value:'차변금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'Camt',inputType:'text',value:'대변금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNo',inputType:'text',value:'거래처',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNm',inputType:'text',value:'거래처명',width:'130'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'crn',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'summary',value:'적요',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'num',inputType:'text',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payProcYn',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'Damt',inputType:'select',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'amt'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'0'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'Camt',inputType:'select',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'amt'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'0'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNm',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'crn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'summary',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label',value:'{Sum(decode(drcrClsCd,'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label',value:'{Sum(decode(drcrClsCd,'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column36',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnRowDelYn:'N',btnDelYn:'N',btnCancelYn:'N'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancel',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_edit',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'부가세자료관리'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]}]}]}]}]}]}]}]})