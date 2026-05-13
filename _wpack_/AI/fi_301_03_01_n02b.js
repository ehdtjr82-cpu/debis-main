/*amd /AI/fi_301_03_01_n02b.xml 60632 1d65b32a7c47a0857637f83d4fe13588a7010e18e9f85e1ae978a786f7cf40e8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acqDtStDt',name:'취득일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDtEndDt',name:'취득일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetNo',name:'고정자산번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetPatternCd',name:'자산유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetKndCd',name:'자산종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dispYn',name:'매각여부',dataType:'number'}},{T:1,N:'w2:key',A:{id:'procDt',name:'매각일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_exchRtSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'기준일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'procYn',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternCd',name:'자산유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNm',name:'자산명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqDt',name:'취득일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'재고수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'procQty',name:'매각수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acqAmt',name:'재고금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'procAmt',name:'매각액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dispFornAmt',name:'외화매각액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'procDifferAmt',name:'차이금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'procDt',name:'매각일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClsCd',name:'매출구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lentYn',name:'대여여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidence',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recverCrn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClsCd',name:'매출구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsCd',name:'공제구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxClsCd',name:'영세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'initamt',name:'선수금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'부가세관리부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',name:'부가세관리부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatSpplierCrn',name:'부가세사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarExceptYn',name:'신고제외여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipNo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_asetPattern'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetPatternCd',name:'자산유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'자산유형명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_clntNo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'COL1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL2',name:'COL2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_collMoney',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'remainAmt',name:'잔액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidClsCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'COL1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL2',name:'COL2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidClsCdExistsZeroTax'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'COL1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL2',name:'COL2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exchRt'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdExchRt',name:'기준환율',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_closeControl'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closePrgsStsCd',name:'마감진행상태코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.fixedaset.RetrieveStockAssetsInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ac.fi.fixedaset.CreateStockAssetsDispositionSlipCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_evidence","key":"IN_DS1"},{"id":"ds_master","key":"IN_DS2"},{"id":"ds_collMoney","key":"IN_DS3"},{"id":"ds_slipNo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_slipNo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_master_submitdone','ev:submiterror':'scwin.sbm_master_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_exchRt',action:'/ac.fm.stdinfomgnt.RetrieveExchangeRateCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_exchRtSearch","key":"IN_DS1"},{"id":"ds_exchRt","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_exchRt","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_exchRt_submitdone','ev:submiterror':'scwin.sbm_exchRt_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_asetPattern',action:'/ac.fi.fixedaset.RetreiveFixedAsetPatternListCMD.do?useYn=1',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_asetPattern","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_asetPattern","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_asetPattern_submitdone','ev:submiterror':'scwin.sbm_asetPattern_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_evidClsCd',action:'/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=retrieveEvidInfo',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_evidClsCd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_evidClsCd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_evidClsCd_submitdone','ev:submiterror':'scwin.sbm_evidClsCd_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_clntNo',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_clntNo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_clntNo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_clntNo_submitdone','ev:submiterror':'scwin.sbm_clntNo_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_closeControl',action:'/cm.bc.comnmgnt.closemgnt.RetrieveCloseControlListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_closeControl","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_closeControl","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_closeControl_submitdone','ev:submiterror':'scwin.sbm_closeControl_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.checkExchRt = 0;
scwin.vLoginCoCd = "";
scwin.vLoginCoClsCd = "";
scwin.vUserHomeClsCd = "";
scwin.isSubCompany = false;
scwin.sFlag = "Y";
scwin.user_id = "";
scwin.txtCoClsCd = "";
scwin.hid_recverCrnNm = "";
scwin.txt_evidClsNm = "";
scwin.KOREA_WON = "KRW";
scwin.CO_CD_DONGBU = "000";
scwin.CO_CLS_CD_DONGBU = "0";
scwin.SUBSIDIARY_USER_HOME_CLS_CD = "SA";
scwin.privAdmin = "F";
scwin.closeControlResult = true;
scwin.onpageload = function () {
  scwin.user_id = $c.ses.getUserId();
  scwin.privAdmin = $c.ses.getPrivAdmin();
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, $c.ses.getCoCd()) ? "" : $c.ses.getCoCd();
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, $c.ses.getCoClsCd()) ? "" : $c.ses.getCoClsCd();
  scwin.vUserHomeClsCd = $c.ses.getUserHomeClsCd();
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableObjects($p, [tbl_disp, tbl_evidence, ed_email]);
  scwin.f_FieldClear();
  scwin.f_setCompanyInfo();
};
scwin.onUdcCompleted = function () {
  scwin.f_SetSrchDefault();
};
scwin.dataSetDebug = async function (dataList, isDebug) {
  if (isDebug == true) {
    let obj = dataList;
    let str = "[[[[" + obj.getID() + "]]]]]\n";
    let colInfos = obj.getColumnIDs();
    for (let dsRow = 0; dsRow < obj.getRowCount(); dsRow++) {
      for (let dsCol = 0; dsCol < colInfos.length; dsCol++) {
        str += "[" + colInfos[dsCol] + "] " + obj.getCellData(dsRow, colInfos[dsCol]) + ", ";
      }
      str += "\n\n";
    }
    await $c.win.alert($p, str);
  }
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ed_procDt]);
  scwin.f_SetSrchDefault();
};
scwin.f_SetSrchDefault = function () {
  let curDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  udc_acqDt.setInitDate(curDate.substring(0, 6) + "01", curDate);
  lc_crcCd.setValue(scwin.KOREA_WON);
  lc_asetPatternCd.setSelectedIndex(5);
  $c.gus.cfDisableObjects($p, [lc_asetPatternCd]);
  lc_dispYn.setSelectedIndex(1);
};
scwin.f_setCompanyInfo = function () {
  if (scwin.vUserHomeClsCd != scwin.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = scwin.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = scwin.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo("T");
  if ("T" == scwin.privAdmin || !scwin.isSubCompany) {
    $c.gus.cfEnableObjects($p, [ed_coCd, txt_coNm, img_company, img_initAmt]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, txt_coNm, img_company, img_initAmt]);
  }
};
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  let rtnList = $c.gus.cfCommonPopUp($p, "retrieveDongbuGroupCompanyInfo", ed_coCd.getValue(), txt_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]);
    txt_coNm.setValue(rtnList[5]);
    ed_coCd.hidVal = rtnList[0];
    scwin.txtCoClsCd = rtnList[1];
    $c.gus.cfInitObjects($p, [ed_srchAcctDeptCd, txt_srchAcctDeptNm]);
  } else {
    ed_coCd.setValue("");
    txt_coNm.setValue("");
    ed_coCd.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > scwin.CO_CLS_CD_DONGBU) {
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};
scwin.f_Retrieve = async function () {
  if (!(await scwin.f_RetrieveValidate())) {
    return false;
  }
  gr_master.setColumnProp("procYn", "headCheck", false);
  ds_evidence.removeAll();
  ds_collMoney.removeAll();
  ds_search.set("coCd", ed_coCd.getValue());
  ds_search.set("coClsCd", scwin.txtCoClsCd);
  ds_search.set("acqDtStDt", ica_acqDtStDt.getValue());
  ds_search.set("acqDtEndDt", ica_acqDtEndDt.getValue());
  ds_search.set("asetPatternCd", lc_asetPatternCd.getValue());
  ds_search.set("acctDeptCd", ed_srchAcctDeptCd.getValue());
  ds_search.set("acctDeptNm", txt_srchAcctDeptNm.getValue());
  ds_search.set("fixedAsetNo", ed_srchFixedAsetNo.getValue());
  ds_search.set("procDt", ed_procDt.getValue());
  ds_search.set("dispYn", lc_dispYn.getValue());
  await $c.sbm.execute($p, sbm_search);
};
scwin.f_RetrieveValidate = async function () {
  if ($c.gus.cfIsNull($p, ica_acqDtStDt.getValue()) && $c.gus.cfIsNull($p, ica_acqDtEndDt.getValue()) && $c.gus.cfIsNull($p, lc_asetPatternCd.getValue()) && $c.gus.cfIsNull($p, ed_srchAcctDeptCd.getValue()) && $c.gus.cfIsNull($p, txt_srchAcctDeptNm.getValue()) && $c.gus.cfIsNull($p, ed_srchFixedAsetNo.getValue())) {
    await $c.gus.cfAlertMsg($p, "조회조건을 하나 이상 입력해 주세요.");
    ed_srchAcctDeptCd.setFocus();
    return false;
  }
  let chk = await $c.gus.cfValidate($p, [tbl_search]);
  if (!chk) {
    return false;
  }
  if ($c.gus.cfIsNull($p, ica_acqDtStDt.getValue()) && !$c.gus.cfIsNull($p, ica_acqDtEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["취득일자"]);
    ica_acqDtStDt.setFocus();
    return false;
  }
  if (!$c.gus.cfIsNull($p, ica_acqDtStDt.getValue()) && $c.gus.cfIsNull($p, ica_acqDtEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["취득일자"]);
    ica_acqDtEndDt.setFocus();
    return false;
  }
  if (!$c.gus.cfIsNull($p, ica_acqDtStDt.getValue()) && !$c.gus.cfIsNull($p, ica_acqDtEndDt.getValue())) {
    if (!$c.gus.cfValidateValue($p, ica_acqDtEndDt.getValue(), "minDate=" + ica_acqDtStDt.getValue())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      ica_acqDtStDt.setFocus();
      return false;
    }
  }
  return true;
};
scwin.f_OpenCalendar = function () {
  scwin.f_checkProcDt();
};
scwin.f_checkProcDt = async function () {
  let input_procDt = ed_procDt.getValue();
  let output_procDt = ed_procDt.getValue();
  if (ds_master.getRowCount() > 0) {
    for (let i = 0; i < 1; i++) {
      output_procDt = ds_master.getCellData(i, "procDt");
    }
  }
  if (input_procDt != output_procDt) {
    await $c.win.alert($p, "매각일자가 변경되어 재조회 됩니다.");
    scwin.f_Retrieve();
  }
};
scwin.f_CloseControlRetrieve = async function () {
  let coCd = ed_coCd.getValue();
  let qryStdt = ed_spplyDt.getValue().substring(0, 6);
  let wrkNo = "FI05";
  sbm_closeControl.action = "/cm.bc.comnmgnt.closemgnt.RetrieveCloseControlListCMD.do?coCd=" + coCd + "&qryStDt=" + qryStdt + "&wrkNo=" + wrkNo;
  await $c.sbm.execute($p, sbm_closeControl);
  if (ds_closeControl.getRowCount() > 0) {
    if (ds_closeControl.getCellData(0, "closePrgsStsCd") == "0") {
      await $c.win.alert($p, "[" + qryStdt + "] 월에 감가삼각마감이 진행중입니다.\n매각처리가 불가능합니다.\n재경팀의 문의하세요.");
      return false;
    }
    if (ds_closeControl.getCellData(0, "closePrgsStsCd") == "2") {
      await $c.win.alert($p, "[" + qryStdt + "] 월에 감가삼각마감이 마감완료되었습니다.\n매각처리가 불가능합니다.\n재경팀의 문의하세요.");
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};
scwin.f_Save = async function () {
  if (lc_crcCd.getValue() != scwin.KOREA_WON) {
    let changeExchRt = ds_master.getCellData(0, "adptExchRt");
    if (!$c.gus.cfCheckExchRt($p, scwin.checkExchRt, changeExchRt)) return;
  }
  if (ds_master.isUpdated() == false) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["매각자산"]);
    return;
  } else {
    if (chk_declarExceptYn.getValue() != "1") {
      if (ed_email.getValue() == "") {
        await $c.win.alert($p, "이메일을 입력하세요");
        return;
      }
    }
    let chkProcDt = await $c.gus.cfValidate($p, [ed_procDt]);
    if (!chkProcDt) return;
    if (!(await scwin.f_ValidateAset())) return;
    let chkEvid = await $c.gus.cfValidate($p, [tbl_evidence]);
    if (!chkEvid) return;
    if ($c.gus.cfIsNull($p, ed_clntNo.getValue())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_018, ["거래처번호", "사업자번호 확인"]);
      ed_recverCrn.setFocus();
      return;
    }
    if (!(await scwin.f_ValidateInitamt())) return;
    let rentCheck = 0;
    for (let i = 0; i < ds_master.getRowCount(); i++) {
      if (ds_master.getCellData(i, "procYn") == 1 && ds_master.getRowStatus(i) == "U") {
        if (ds_master.getCellData(i, "asetPatternCd") == "30") {
          if (ds_master.getCellData(i, "bizDomCd") == "220") {
            for (let j = 0; j < ds_master.getRowCount(); j++) {
              if (ds_master.getCellData(j, "procYn") == 1 || ds_master.getRowStatus(j) == "U") {
                if (ds_master.getCellData(j, "bizDomCd") != "220") {
                  rentCheck++;
                }
              }
            }
          }
        }
      }
    }
    if (rentCheck > 0) {
      await $c.win.alert($p, "렌터차량 매각은 사업영역이 렌터차량인 차량만 가능합니다.");
      return;
    }
    if (!(await scwin.f_CloseControlRetrieve())) {
      return;
    }
    let confirmResult = await $c.gus.cfConfirmMsg($p, MSG_CM_CRM_001);
    if (confirmResult) {
      scwin.sFlag = "N";
      for (let i = 0; i < ds_master.getRowCount(); i++) {
        if (ds_master.getCellData(i, "procYn") == 1 && ds_master.getRowStatus(i) == "U") {
          ds_master.setCellData(i, "procDt", ed_procDt.getValue());
          ds_master.setCellData(i, "sellClsCd", lc_sellClsCd.getValue());
        }
      }
      ds_evidence.setCellData(0, "coCd", ed_coCd.getValue());
      ds_evidence.setCellData(0, "coClsCd", scwin.txtCoClsCd);
      await $c.sbm.execute($p, sbm_master);
      scwin.sFlag = "Y";
    }
  }
};
scwin.f_ValidateAset = async function () {
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "procYn") == 1 && ds_master.getRowStatus(i) == "U") {
      if (ds_master.getCellData(i, "procAmt") <= 0) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["매각액"]);
        ds_master.setRowPosition(i);
        ed_amt.setFocus();
        return false;
      }
    }
  }
  return true;
};
scwin.f_ValidateInitamt = async function () {
  let initAmt = ds_evidence.getCellData(ds_evidence.getRowPosition(), "initamt");
  let settleAmtSum = scwin.f_GetSettleAmt();
  if (initAmt < 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, ["선수금액", "0"]);
    ed_initamt.setFocus();
    return false;
  }
  if (initAmt != settleAmtSum) {
    await $c.gus.cfAlertMsg($p, "입력한 선수금 금액과 정리금액이 다릅니다.\n\n정리금액 = " + $c.gus.cfInsertComma($p, settleAmtSum));
    ed_initamt.setFocus();
    return false;
  }
  let refundAmt = parseInt(ed_spplyAmt.getValue().trim()) + parseInt(ed_vat.getValue().trim()) - parseInt(initAmt);
  if (refundAmt < 0) {
    await $c.gus.cfAlertMsg($p, "미수금은 0보다 작을 수 없습니다.\n\n미수금 = " + refundAmt);
    gr_master.setFocusedCell(ds_master.getRowPosition(), "procAmt");
    return false;
  }
  return true;
};
scwin.f_GetSettleAmt = function () {
  let settleAmtSum = 0;
  if (ds_collMoney.getRowCount() > 0) {
    for (let i = 0; i < ds_collMoney.getRowCount(); i++) {
      settleAmtSum += ds_collMoney.getCellData(i, "remainAmt") * 1;
    }
  }
  return settleAmtSum;
};
scwin.f_GetObjValue = function (inObj) {
  return inObj.getValue();
};
scwin.f_SetObjValue = function (inObj, val) {
  if (inObj && typeof inObj.setValue === "function") {
    inObj.setValue(val);
  }
};
scwin.f_PopUp = function (codeObj, nameObj, sQueryID, sWhere, sWidth) {
  let rtnList = $c.gus.cfCommonPopUp($p, sQueryID, scwin.f_GetObjValue(codeObj), "", scwin.f_EventCheck(), null, null, null, null, sWhere, sWidth, null, null, null);
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      scwin.f_SetObjValue(codeObj, rtnList[0]);
      codeObj.hidVal = rtnList[0];
      scwin.f_SetObjValue(nameObj, rtnList[1]);
    }
  } else {
    scwin.f_SetObjValue(codeObj, "");
    codeObj.hidVal = "";
    scwin.f_SetObjValue(nameObj, "");
  }
  return rtnList;
};
scwin.f_IsPopUp = function (inObj) {
  let inValue = scwin.f_GetObjValue(inObj);
  let hidValue = inObj.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.hidVal = "";
    for (let i = 1; i < arguments.length; i++) {
      scwin.f_SetObjValue(arguments[i], "");
    }
    return false;
  }
  return true;
};
scwin.f_EventCheck = function () {
  return "T";
};
scwin.f_srchDeptPopUp = function () {
  let param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
  let rtnList = scwin.f_PopUp(ed_srchAcctDeptCd, txt_srchAcctDeptNm, "retrieveAcctDeptCdInfo6", param, "410");
};
scwin.f_crnPopUp = async function () {
  let selectID = "retrieveCrnInfo";
  let param = "";
  if (scwin.isSubCompany) {
    selectID = "retrieveCrnClntInfo";
    param = "," + ed_coCd.getValue();
  }
  let rtnList = scwin.f_PopUp(ed_recverCrn, {
    getValue: function () {
      return scwin.hid_recverCrnNm;
    },
    setValue: function (v) {
      scwin.hid_recverCrnNm = v;
    },
    hidVal: ""
  }, selectID, param, null);
  if (rtnList != null) {
    if (rtnList[0] != "" && rtnList[0] != "N/A") {
      sbm_clntNo.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=retrieveClntList&param1=&param2=&param3=" + rtnList[0] + "&param4=" + ed_coCd.getValue();
      await $c.sbm.execute($p, sbm_clntNo);
    }
  }
};
scwin.f_vatDeclarDeptPopUp = function () {
  let param = ",,," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + "," + ed_spplyDt.getValue().substring(0, 4);
  let rtnList = $c.gus.cfCommonPopUp($p, "retrieveVatDeclarAcctDeptCd", ed_vatDeclarAcctDeptCd.getValue(), "", scwin.f_EventCheck(), null, null, null, null, param, "410", null, null, null);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    scwin.f_SetObjValue(ed_vatDeclarAcctDeptCd, rtnList[2]);
    scwin.f_SetObjValue(txt_vatDeclarAcctDeptNm, rtnList[3]);
    scwin.f_SetObjValue(ed_vatSpplierCrn, rtnList[5]);
    ed_vatDeclarAcctDeptCd.hidVal = rtnList[2];
  } else {
    scwin.f_SetObjValue(ed_vatDeclarAcctDeptCd, "");
    scwin.f_SetObjValue(txt_vatDeclarAcctDeptNm, "");
    scwin.f_SetObjValue(ed_vatSpplierCrn, "");
    ed_vatDeclarAcctDeptCd.hidVal = "";
  }
};
scwin.f_CheckComboData = async function (objCombo, comboTitle) {
  if (objCombo.getSelectedIndex() == -1 && $c.gus.cfIsNull($p, objCombo.getValue()) == false) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, [comboTitle + "코드"]);
    objCombo.setFocus();
  }
};
scwin.f_initAmtPopUp = async function () {
  let sUrl = "/ui/ac/fm/collmoneymgnt/rcptmgnt/fm_502_03_00p.xml";
  let valueObject = {};
  valueObject.prov = ds_collMoney;
  let curDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  if (ed_procDt.getValue() == "") {
    valueObject.fromDate = curDate;
  } else {
    valueObject.fromDate = $c.date.addMonth($p, ed_procDt.getValue(), -1);
  }
  valueObject.toDate = ed_procDt.getValue();
  valueObject.clsCd = "2";
  valueObject.fcrcYn = "Y";
  valueObject.sellClsCd = lc_sellClsCd.getValue();
  valueObject.clntNo = ed_clntNo.getValue();
  valueObject.clntNm = txt_clntNm.getValue();
  let returnValue = await $c.win.openPopup($p, sUrl, {
    width: 825,
    height: 560,
    modal: true,
    data: valueObject
  });
  ed_initamt.setValue(scwin.f_GetSettleAmt());
};
scwin.f_openPopUp = function (flag, check) {
  let rtnList = [];
  switch (flag) {
    case "1":
      let where = "";
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveClntEmail", ed_clntNo.getValue().trim(), ed_email.getValue().trim(), check, null, null, null, null, where, null, null, null, null);
      if (rtnList != null) {
        if (rtnList[0] == "N/A") {
          return;
        }
        ed_email.setValue(rtnList[0]);
      } else {
        ed_email.setValue("");
      }
      break;
    default:
      break;
  }
};
scwin.f_chkClick = function () {
  if (chk_declarExceptYn.getValue() == "1") {
    ed_email.setValue("");
    $c.gus.cfEnableObj($p, img_email, false);
  } else {
    $c.gus.cfEnableObj($p, img_email, true);
  }
};
scwin.f_crcCdChange = async function () {
  if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == scwin.KOREA_WON) {
    ed_adjustExchRt.setValue("");
    ed_dispFornAmt.setValue("");
    $c.gus.cfEnableObj($p, ed_dispFornAmt, false);
    $c.gus.cfEnableObj($p, ed_adjustExchRt, false);
    $c.gus.cfEnableObj($p, ed_amt, true);
  } else {
    $c.gus.cfEnableObjects($p, [ed_adjustExchRt]);
    $c.gus.cfEnableObj($p, ed_amt, false);
    dma_exchRtSearch.set("crcCd", lc_crcCd.getValue());
    dma_exchRtSearch.set("stdDt", ed_spplyDt.getValue());
    await $c.sbm.execute($p, sbm_exchRt);
    scwin.checkExchRt = ds_master.getCellData(0, "adptExchRt");
  }
};
scwin.f_sellClsCd = function () {
  if (lc_sellClsCd.getValue() == "02") {
    lc_evidClsCd.setValue("20");
    $c.gus.cfDisableObjects($p, [lc_evidClsCd]);
  } else if (lc_sellClsCd.getValue() == "01") {
    lc_evidClsCd.setValue("10");
    $c.gus.cfEnableObjects($p, [lc_evidClsCd]);
  } else {
    lc_evidClsCd.setValue("10");
    $c.gus.cfEnableObjects($p, [lc_evidClsCd]);
  }
  if (ds_master.getCellData(ds_master.getRowPosition(), "procYn") == "1") {
    ed_spplyAmt.setValue(ds_master.getCellData(ds_master.getRowPosition(), "procAmt"));
  }
  if (lc_evidClsCd.getValue() == "20") {
    ed_vat.setValue("0");
  } else {
    ed_vat.setValue(Math.round(ed_spplyAmt.getValue().trim() * 0.1));
  }
};
scwin.f_EvidClsCd = function () {
  if (lc_evidClsCd.getValue() == "20") {
    $c.gus.cfEnableObjects($p, [lc_zeroTaxCls]);
    lc_zeroTaxCls.setSelectedIndex(1);
    ed_vat.setValue("0");
    $c.gus.cfDisableObjects($p, [ed_vat]);
  } else {
    lc_zeroTaxCls.setSelectedIndex(-1);
    $c.gus.cfDisableObjects($p, [lc_zeroTaxCls]);
    if (lc_sellClsCd.getValue() == "") {
      $c.gus.cfDisableObjects($p, [ed_vat]);
    } else {
      $c.gus.cfEnableObjects($p, [ed_vat]);
    }
  }
  if (ds_master.getCellData(ds_master.getRowPosition(), "procYn") == "1") {
    ed_spplyAmt.setValue(ds_master.getCellData(ds_master.getRowPosition(), "procAmt"));
  }
  if (lc_evidClsCd.getValue() == "20") {
    ed_vat.setValue("0");
  } else {
    ed_vat.setValue(Math.round(ed_spplyAmt.getValue().trim() * 0.1));
  }
};
scwin.sbm_search_submitdone = async function (e) {
  let rowCnt = ds_master.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    $c.gus.cfDisableObjects($p, [tbl_evidence, tbl_disp]);
    lc_sellClsCd.setSelectedIndex(-1);
    lc_evidClsCd.setSelectedIndex(-1);
    lc_deductClsCd.setSelectedIndex(-1);
  } else {
    scwin.f_EvidHeaderCreate();
    $c.gus.cfEnableObjects($p, [tbl_evidence]);
    $c.gus.cfDisableKey($p);
    gr_master.setFocus();
    $c.gus.cfDisableObjects($p, [ed_email]);
    lc_sellClsCd.setValue("02");
    scwin.f_sellClsCd();
    scwin.f_EvidClsCd();
    lc_deductClsCd.setValue("1");
  }
  $c.gus.cfDisableObjects($p, [lc_asetPatternCd]);
};
scwin.sbm_search_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_EvidHeaderCreate = function () {
  ds_evidence.removeAll();
  ds_evidence.insertRow(0);
};
scwin.sbm_master_submitdone = async function (e) {
  if (ds_slipNo.getCellData(0, "slipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_slipNo.getCellData(0, "slipNo"));
  }
  scwin.f_Retrieve();
};
scwin.sbm_master_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_exchRt_submitdone = function (e) {
  ed_adjustExchRt.setValue(ds_exchRt.getCellData(0, "stdExchRt"));
  $c.gus.cfEnableObj($p, ed_dispFornAmt, true);
  ed_dispFornAmt.setFocus();
};
scwin.sbm_exchRt_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_asetPattern_submitdone = function (e) {
  $c.sbm.execute($p, sbm_evidClsCd);
};
scwin.sbm_asetPattern_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_evidClsCd_submitdone = function (e) {};
scwin.sbm_evidClsCd_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_clntNo_submitdone = async function (e) {
  let rowCnt = ds_clntNo.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_052, ["거래처"]);
    ed_clntNo.setValue("");
    txt_clntNm.setValue("");
  } else {
    ed_clntNo.setValue(ds_clntNo.getCellData(0, "COL1"));
    txt_clntNm.setValue(ds_clntNo.getCellData(0, "COL2"));
  }
};
scwin.sbm_clntNo_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_closeControl_submitdone = function (e) {};
scwin.sbm_closeControl_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ed_coCd_onblur = function (e) {
  txt_coNm.setValue("");
  scwin.f_PopUpCompanyInfo("T");
};
scwin.img_company_onclick = function (e) {
  scwin.f_PopUpCompanyInfo("F");
};
scwin.lc_asetPatternCd_onchange = function (e) {
  scwin.f_CheckComboData(lc_asetPatternCd, "자산유형");
};
scwin.ed_srchAcctDeptCd_onblur = function (e) {
  if (scwin.f_IsPopUp(ed_srchAcctDeptCd, txt_srchAcctDeptNm)) {
    scwin.f_srchDeptPopUp();
  }
};
scwin.ed_srchFixedAsetNo_onblur = function (e) {
  if ($c.gus.cfIsNull($p, ed_srchFixedAsetNo.getValue())) return;
  ed_srchFixedAsetNo.setValue($c.gus.cfGetLeftPad($p, ed_srchFixedAsetNo.getValue(), 10));
};
scwin.ed_procDt_onchange = function (e) {
  scwin.f_checkProcDt();
};
scwin.lc_crcCd_onchange = function (e) {
  scwin.f_crcCdChange();
};
scwin.ed_dispFornAmt_onblur = function (e) {
  ed_amt.setValue(Math.round(ed_dispFornAmt.getValue().trim() * ed_adjustExchRt.getValue().trim()));
};
scwin.ed_adjustExchRt_onblur = function (e) {
  if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == scwin.KOREA_WON) {
    $c.gus.cfEnableObjects($p, [ed_amt]);
    $c.gus.cfDisableObjects($p, [ed_dispFornAmt]);
    ed_amt.setValue(ed_adjustExchRt.getValue().trim());
    return;
  }
  let changeExchRt = ds_master.getCellData(0, "adptExchRt");
  if (!$c.gus.cfCheckExchRt($p, scwin.checkExchRt, changeExchRt)) return;
};
scwin.ed_spplyDt_onchange = function (e) {
  if (ed_vatDeclarAcctDeptCd.getValue() == null || ed_vatDeclarAcctDeptCd.getValue() == "") {
    ed_vatDeclarAcctDeptCd.hidVal = "";
    ed_vatDeclarAcctDeptCd.setValue("");
    txt_vatDeclarAcctDeptNm.setValue("");
    ed_vatSpplierCrn.setValue("");
  } else {
    scwin.f_vatDeclarDeptPopUp();
  }
  scwin.f_crcCdChange();
};
scwin.ds_evidence_oncelldatachange = function (info) {
  let row = info.row;
  let colid = info.colId;
  if (colid == "spplyDt" && ds_evidence.getCellData(row, "spplyDt").length == 8) {
    if (ed_vatDeclarAcctDeptCd.getValue() == null || ed_vatDeclarAcctDeptCd.getValue() == "") {
      ed_vatDeclarAcctDeptCd.hidVal = "";
      ed_vatDeclarAcctDeptCd.setValue("");
      txt_vatDeclarAcctDeptNm.setValue("");
      ed_vatSpplierCrn.setValue("");
    } else {
      scwin.f_vatDeclarDeptPopUp();
    }
    scwin.f_crcCdChange();
  }
};
scwin.ed_recverCrn_onblur = function (e) {
  if (scwin.f_IsPopUp(ed_recverCrn, ed_clntNo, txt_clntNm)) scwin.f_crnPopUp();
};
scwin.img_recverCrn_onclick = function (e) {
  scwin.f_crnPopUp();
};
scwin.lc_sellClsCd_onchange = function (e) {
  scwin.f_sellClsCd();
};
scwin.lc_evidClsCd_onchange = function (e) {
  scwin.f_EvidClsCd();
};
scwin.ed_vatDeclarAcctDeptCd_onblur = function (e) {
  if (scwin.f_IsPopUp(ed_vatDeclarAcctDeptCd, txt_vatDeclarAcctDeptNm)) scwin.f_vatDeclarDeptPopUp();
};
scwin.gr_master_onheaderclick = function (columnIndex, columnId) {
  if (columnId == "procYn") {
    let bCheck = gr_master.getColumnProp("procYn", "headCheck");
    for (let i = 0; i < ds_master.getRowCount(); i++) {
      if (ds_master.getCellData(i, "lentYn") != "Yes") {
        ds_master.setCellData(i, "procYn", bCheck ? 1 : 0);
      }
    }
  }
};
scwin.ds_master_oncelldatachange = function (info) {
  let row = info.row;
  let colid = info.colId;
  if (colid == "procAmt") {
    ds_master.setCellData(row, "procDifferAmt", ds_master.getCellData(row, "procAmt") - ds_master.getCellData(row, "acqAmt"));
    if (ds_master.getCellData(ds_master.getRowPosition(), "procYn") == "1") {
      ed_spplyAmt.setValue(ds_master.getCellData(row, "procAmt"));
    }
    if (lc_evidClsCd.getValue() == "20") {
      ed_vat.setValue("0");
    } else {
      ed_vat.setValue(Math.round(ed_spplyAmt.getValue().trim() * 0.1));
    }
  }
  if (colid == "adptExchRt") {
    if (ds_master.getCellData(row, "dispFornAmt") != "") {
      ed_amt.setValue(Math.round(ed_dispFornAmt.getValue().trim() * ed_adjustExchRt.getValue().trim()));
    }
  }
};
scwin.ds_master_onrowpositionchange = function (rowIndex, oldRow) {
  let row = rowIndex;
  if (ds_master.getCellData(row, "procYn") == "1") {
    $c.gus.cfDisableObjects($p, [ed_dispFornAmt, ed_qty]);
    $c.gus.cfEnableObjects($p, [ed_amt, lc_crcCd, ed_adjustExchRt]);
  } else {
    $c.gus.cfDisableObjects($p, [tbl_disp]);
  }
};
scwin.ds_master_canrowposchange = async function (rowIndex) {
  let row = rowIndex;
  if (ds_master.getCellData(row, "procYn") == 1 && ds_master.getRowStatus(row) == "U" && scwin.sFlag == "Y") {
    let confirmResult = await $c.win.confirm($p, "행 변경 시 입력한 데이터가 초기화 됩니다.\n계속 진행하시겠습니까?");
    if (confirmResult) {
      ds_master.undoRow(row);
      return true;
    } else {
      ds_master.setRowPosition(row);
      return false;
    }
  }
  return true;
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.img_initAmt_onclick = function (e) {
  scwin.f_initAmtPopUp();
};
scwin.img_email_onclick = function (e) {
  scwin.f_openPopUp("1", "F");
};
scwin.chk_declarExceptYn_onchange = function (e) {
  scwin.f_chkClick();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'flex_gvw',id:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'content',id:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 10%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'sch-box ',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' num',id:'ed_coCd',placeholder:'',style:'',ref:'data:ds_search.coCd',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_company',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_coNm',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'취득일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_acqDt',edFromId:'ica_acqDtStDt',edToId:'ica_acqDtEndDt',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산유형',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w120',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_asetPatternCd',style:'',submenuSize:'auto',ref:'data:ds_search.asetPatternCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매각여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w100',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dispYn',style:'',submenuSize:'auto',ref:'data:ds_search.dispYn'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'sch-box ',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' num',id:'ed_srchAcctDeptCd',placeholder:'',style:'',ref:'data:ds_search.acctDeptCd'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_srchAcctDeptNm',placeholder:'',style:'',ref:'data:ds_search.acctDeptNm'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w120',id:'ed_srchFixedAsetNo',placeholder:'',style:'',ref:'data:ds_search.fixedAsetNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매각일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_procDt',style:'',ref:'data:ds_search.procDt',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'section row-gap-24',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-wrap',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'3',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'procYn',inputType:'text',removeBorderStyle:'false',value:'자산유형',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'asetPatternCd',inputType:'text',removeBorderStyle:'false',value:'귀속부서',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctDeptNm',inputType:'text',removeBorderStyle:'false',value:'자산번호',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'fixedAsetNo',inputType:'text',removeBorderStyle:'false',value:'자산명',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'fixedAsetNm',inputType:'text',removeBorderStyle:'false',value:'매각여부',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'procYn',inputType:'text',removeBorderStyle:'false',value:'취득일자',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acqDt',inputType:'text',removeBorderStyle:'false',value:'재고수량',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'qty',inputType:'text',removeBorderStyle:'false',value:'매각수량',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'procQty',inputType:'text',removeBorderStyle:'false',value:'재고금액',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acqAmt',inputType:'text',removeBorderStyle:'false',value:'매각액',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'procAmt',value:'통화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crcCd',value:'환율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'adptExchRt',value:'외화매각액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dispFornAmt',value:'차이금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'procYn',inputType:'checkbox',removeBorderStyle:'false',width:'100',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'asetPatternCd',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'asetPatternCd:asetPatternNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_asetPattern'}]}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctDeptNm',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'fixedAsetNo',inputType:'text',removeBorderStyle:'false',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'fixedAsetNm',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'procYn',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,###',style:'color:{if(procyn=1,;'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acqDt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'qty',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'procQty',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acqAmt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'procAmt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crcCd',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'adptExchRt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dispFornAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column22',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column20',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column18',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column16',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column15',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'qty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column14',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'procQty\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column13',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'acqAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column40',value:'',displayMode:'label',expression:'sum(\'procAmt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column34',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'adptExchRt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column25',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'dispFornAmt\')',dataType:'number',displayFormat:'#,###'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'section row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매각내역',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_disp',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'통화코드/환율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',class:' col2',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_crcCd',ref:'data:ds_master.crcCd',renderType:'',style:'',submenuSize:'auto',mandatory:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:input',A:{class:' col2',id:'ed_adjustExchRt',placeholder:'',style:'',ref:'data:ds_master.adptExchRt'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'외화금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' col2 tar',id:'ed_dispFornAmt',placeholder:'',style:'',ref:'data:ds_master.dispFornAmt',mandatory:'true'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' col2 tar',id:'ed_amt',placeholder:'',style:'',ref:'data:ds_master.procAmt',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매각수량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' col2 tar',id:'ed_qty',placeholder:'',style:'',ref:'data:ds_master.qty',mandatory:'true'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'section row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매출증빙내역',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_evidence',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'증빙일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_spplyDt',style:'',ref:'data:ds_evidence.spplyDt',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'sch-box col6',id:''},E:[{T:1,N:'xf:input',A:{class:' num',id:'ed_recverCrn',placeholder:'',style:'',ref:'data:ds_evidence.recverCrn',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_recverCrn',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{class:' w100',id:'ed_clntNo',placeholder:'',style:'',ref:'data:ds_evidence.clntNo'}},{T:1,N:'xf:input',A:{class:' ',id:'txt_clntNm',placeholder:'',style:'',ref:'data:ds_evidence.clntNm'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',class:' w100',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_sellClsCd',ref:'data:ds_evidence.sellClsCd',renderType:'',style:'',submenuSize:'auto',mandatory:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'증빙종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'form-group col6',id:''},E:[{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_evidClsCd',ref:'data:ds_evidence.evidClsCd',renderType:'',style:'',submenuSize:'auto',mandatory:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',class:' w110 shrink',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_deductClsCd',ref:'data:ds_evidence.deductClsCd',renderType:'',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',class:' w85 shrink',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_zeroTaxCls',ref:'data:ds_evidence.zeroTaxClsCd',renderType:'',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선수금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'sch-box col3',id:''},E:[{T:1,N:'xf:input',A:{class:' tar',id:'ed_initamt',placeholder:'',style:'',ref:'data:ds_evidence.initamt'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_initAmt',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공급금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' col2 tar',id:'ed_spplyAmt',placeholder:'',style:'',ref:'data:ds_evidence.spplyAmt'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부가세관리부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'sch-box col6',id:''},E:[{T:1,N:'xf:input',A:{class:' num',id:'ed_vatDeclarAcctDeptCd',placeholder:'',style:'',ref:'data:ds_evidence.vatDeclarAcctDeptCd',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'txt_vatDeclarAcctDeptNm',placeholder:'',style:'',ref:'data:ds_evidence.vatDeclarAcctDeptNm'}},{T:1,N:'xf:input',A:{class:' w100',id:'ed_vatSpplierCrn',placeholder:'',style:'',ref:'data:ds_evidence.vatSpplierCrn'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' col2 tar',id:'ed_vat',placeholder:'',style:'',ref:'data:ds_evidence.vat',mandatory:'true'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'E-mail',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'sch-box col6',id:''},E:[{T:1,N:'xf:input',A:{class:' ',id:'ed_email',placeholder:'',style:'',ref:'data:ds_evidence.email'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_email',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'비고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_rmk',placeholder:'',style:'',ref:'data:ds_evidence.rmk'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신고제외여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chk_declarExceptYn',ref:'data:ds_evidence.declarExceptYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn',id:'',label:'매각처리',style:''}}]}]}]}]}]}]}]}]}]})