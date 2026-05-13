/*amd /AI/ja_401_01_05b.xml 59915 d2cee44d8d37509ec9359ccecfe75c07f57bd7d19d47b05fa3acf173f9ccf7bd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchClsCd',name:'지급공제구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptYm',name:'적용년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'madeYn',name:'생성여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsStdDtSt',name:'실적시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsStdDtEnd',name:'실적종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCdYn',name:'매입세액제외',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upperClntNo',name:'상위거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsMgntNo',name:'실적관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptYm',name:'적용년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemSeq',name:'매출입항목순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVat',name:'매출부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsVat',name:'매입부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClsCd',name:'지급공제구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsSeq',name:'실적순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNo',name:'소속거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNm',name:'소속거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'매니저번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'매니저명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntVat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNo',name:'매출거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNm',name:'매출거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매입거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'매출순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'매입순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hirecarCls',name:'용차구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsnCd',name:'사유코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsn',name:'사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsYn',name:'매입여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductYn',name:'공제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnYn',name:'확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lastDay',name:'최종일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlMgntNo',name:'상세관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'calculator',name:'계산기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYn',name:'마감여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cond_deductPchsAmt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptYm',name:'적용년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNoCd',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'매입거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_deductPchsAmt'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fileUp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNo',name:'소속거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'매니저',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClsCd',name:'지급공제구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntVat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Tmp_FillUse',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNo',name:'소속거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'매니저',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClsCd',name:'지급공제구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntVat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ja.dn.workrslts.RetrieveTrnasFeeAndExpensesCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_results","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ja.dn.workrslts.SaveTrnasFeeAndExpensesCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_results","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_deductPchsAmt',action:'/ja.dn.workrslts.RetrieveSalPrscondCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_cond_deductPchsAmt","key":"IN_DS1"},{"id":"ds_deductPchsAmt","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_deductPchsAmt","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_deductPchsAmt_submitdone','ev:submiterror':'scwin.sbm_retrieve_deductPchsAmt_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.adptYm = "";
scwin.vCurDate = "";
scwin.strStartDate = "";
scwin.strFirstDate = "";
scwin.em_adptYm = "";
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strStartDate = $c.date.addDate($p, scwin.vCurDate, -2);
  scwin.strFirstDate = scwin.vCurDate.substring(0, 6) + "01";
  scwin.adptYm = scwin.vCurDate;
  lux_madeYn.setValue("0");
  lux_selpchClsCd.setValue("1");
  scwin.em_adptYm = scwin.adptYm.substring(0, 6);
  $c.gus.cfDisableBtn($p, [chb_selpchItemCdYn]);
};
scwin.onUdcCompleted = function () {
  udc_rsltsStdDt.setInitDate(scwin.vCurDate, scwin.vCurDate);
};
scwin.btn_Srch_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_copyRow_onclick = function (e) {
  scwin.f_copyRow();
};
scwin.btn_adptAmt_onclick = function (e) {
  scwin.f_adaptAmt();
};
scwin.btn_adaptRsltsStdDt_onclick = function (e) {
  scwin.f_adaptRsltsStdDt();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_addRow_onclick = function (e) {
  scwin.f_addRow();
};
scwin.btn_deleteRow_onclick = function (e) {
  scwin.f_deleteRow();
};
scwin.btn_cancelRow_onclick = function (e) {
  scwin.f_cancelRow();
};
scwin.f_Retrieve = async function () {
  let rsltsStdDtSt = ica_rsltsStdDtSt.getValue();
  let rsltsStdDtEnd = ica_rsltsStdDtEnd.getValue();
  let rsltsStdDtStSub = rsltsStdDtSt.substring(0, 6);
  let rsltsStdDtEndSub = rsltsStdDtEnd.substring(0, 6);
  let madeYnVal = lux_madeYn.getValue();
  if (madeYnVal == "1") {
    if (rsltsStdDtSt == "" || rsltsStdDtEnd == "") {
      await $c.win.alert($p, "실적기간은 필수 입력 항목입니다.");
      return false;
    }
    if (!$c.gus.cfIsAfterDate($p, rsltsStdDtSt, rsltsStdDtEnd)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      return;
    }
  } else if (madeYnVal == "2") {
    if (em_selpchItemCd.getValue() == "" || txt_selpchItemNm.getValue() == "") {
      await $c.win.alert($p, "매출입항목은 필수 입력 항목입니다.");
      return false;
    }
    if (rsltsStdDtSt == "") {
      await $c.win.alert($p, "실적기간은 필수 입력 항목입니다.");
      return false;
    }
  } else {
    if (rsltsStdDtSt == "") {
      await $c.win.alert($p, "실적기간은 필수 입력 항목입니다.");
      return false;
    }
  }
  if (rsltsStdDtStSub != rsltsStdDtEndSub) {
    await $c.win.alert($p, "실적기간 조회 기간은  같은 월 이어야 합니다.");
    return false;
  }
  dma_condition.set("adptYm", rsltsStdDtSt.substring(0, 6));
  dma_condition.set("clntNo", ed_clntNo.getValue());
  dma_condition.set("selpchClsCd", lux_selpchClsCd.getValue());
  dma_condition.set("selpchItemCd", em_selpchItemCd.getValue());
  dma_condition.set("vehclNo", txt_cond_vehclNo.getValue());
  dma_condition.set("madeYn", lux_madeYn.getValue());
  dma_condition.set("rsltsStdDtSt", rsltsStdDtSt);
  dma_condition.set("rsltsStdDtEnd", rsltsStdDtEnd);
  if (chb_selpchItemCdYn.getValue() != "") {
    dma_condition.set("selpchItemCdYn", "1");
  } else {
    dma_condition.set("selpchItemCdYn", "0");
  }
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowcnt = ds_results.getRowCount();
  spa_totalRow.setValue(rowcnt);
  if (rowcnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    let madeYnVal = lux_madeYn.getValue();
    if (madeYnVal == "2") {
      for (let i = 0; i < rowcnt; i++) {
        ds_results.setCellData(i, "rsltsStdDt", ica_rsltsStdDtSt.getValue());
        ds_results.setCellData(i, "selpchItemCd", em_selpchItemCd.getValue());
        ds_results.setCellData(i, "selpchItemNm", txt_selpchItemNm.getValue());
        if (ds_results.getCellData(i, "selpchClsCd") == "1") {
          ds_results.setCellData(i, "clntNo", ds_results.getCellData(i, "sellClntNo"));
          ds_results.setCellData(i, "clntNm", ds_results.getCellData(i, "sellClntNm"));
          ds_results.setCellData(i, "clntAmt", ds_results.getCellData(i, "sellAmt"));
          ds_results.setCellData(i, "clntVat", ds_results.getCellData(i, "sellVat"));
        } else if (ds_results.getCellData(i, "selpchClsCd") == "2") {
          ds_results.setCellData(i, "clntNo", ds_results.getCellData(i, "pchsClntNo"));
          ds_results.setCellData(i, "clntNm", ds_results.getCellData(i, "pchsClntNm"));
          ds_results.setCellData(i, "clntAmt", ds_results.getCellData(i, "pchsAmt"));
          ds_results.setCellData(i, "clntVat", ds_results.getCellData(i, "pchsVat"));
        }
      }
    } else {
      for (let i = 0; i < rowcnt; i++) {
        if (ds_results.getCellData(i, "selpchClsCd") == "1") {
          ds_results.setCellData(i, "clntNo", ds_results.getCellData(i, "sellClntNo"));
          ds_results.setCellData(i, "clntNm", ds_results.getCellData(i, "sellClntNm"));
          ds_results.setCellData(i, "clntAmt", ds_results.getCellData(i, "sellAmt"));
          ds_results.setCellData(i, "clntVat", ds_results.getCellData(i, "sellVat"));
        } else if (ds_results.getCellData(i, "selpchClsCd") == "2") {
          ds_results.setCellData(i, "clntNo", ds_results.getCellData(i, "pchsClntNo"));
          ds_results.setCellData(i, "clntNm", ds_results.getCellData(i, "pchsClntNm"));
          ds_results.setCellData(i, "clntAmt", ds_results.getCellData(i, "pchsAmt"));
          ds_results.setCellData(i, "clntVat", ds_results.getCellData(i, "pchsVat"));
        }
      }
    }
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_Save = async function () {
  let checkedCnt = 0;
  for (let i = 0; i < ds_results.getRowCount(); i++) {
    if (ds_results.getCellData(i, "chk") == "1") {
      let rowStatus = ds_results.getRowStatus(i);
      if (rowStatus == "U") {
        if (ds_results.getCellData(i, "adptYm") == "") {
          ds_results.setCellData(i, "adptYm", ds_results.getCellData(i, "rsltsStdDt").substring(0, 6));
        } else {
          if (ds_results.getCellData(i, "adptYm") != ds_results.getCellData(i, "rsltsStdDt").substring(0, 6)) {
            await $c.win.alert($p, i + 1 + "행의 실적일자는 " + ds_results.getCellData(i, "adptYm").substring(0, 4) + "년" + ds_results.getCellData(i, "adptYm").substring(4, 6) + "월 " + "적용년월 기간내여야 합니다.");
            return false;
          }
        }
        if (ds_results.getCellData(i, "selpchClsCd") == "1") {
          ds_results.setCellData(i, "sellYn", 1);
          ds_results.setCellData(i, "pchsYn", 0);
          ds_results.setCellData(i, "deductYn", 1);
          ds_results.setCellData(i, "sellClntNo", ds_results.getCellData(i, "clntNo"));
          ds_results.setCellData(i, "sellAmt", ds_results.getCellData(i, "clntAmt"));
          ds_results.setCellData(i, "sellVat", ds_results.getCellData(i, "clntVat"));
          ds_results.setCellData(i, "pchsClntNo", "");
          ds_results.setCellData(i, "pchsAmt", "");
          ds_results.setCellData(i, "pchsVat", "");
        } else if (ds_results.getCellData(i, "selpchClsCd") == "2") {
          ds_results.setCellData(i, "sellYn", 0);
          ds_results.setCellData(i, "pchsYn", 1);
          ds_results.setCellData(i, "deductYn", 0);
          ds_results.setCellData(i, "pchsClntNo", ds_results.getCellData(i, "clntNo"));
          ds_results.setCellData(i, "pchsAmt", ds_results.getCellData(i, "clntAmt"));
          ds_results.setCellData(i, "pchsVat", ds_results.getCellData(i, "clntVat"));
          ds_results.setCellData(i, "sellClntNo", "");
          ds_results.setCellData(i, "sellAmt", "");
          ds_results.setCellData(i, "sellVat", "");
        }
        if (ds_results.getCellData(i, "homeClntNo") == "") {
          ds_results.setCellData(i, "homeClntNo", ds_results.getCellData(i, "sellClntNo"));
        }
        if (ds_results.getCellData(i, "closeYn") == "1") {
          await $c.gus.cfAlertMsg($p, i + 1 + "번째 실적은 마감처리되어 수정,삭제 할 수 없습니다.");
          return;
        }
        if (ds_results.getCellData(i, "dcsnYn") == "2") {
          await $c.gus.cfAlertMsg($p, i + 1 + "번째 실적은 거래명세서생성 상태여서 수정,삭제 할 수 없습니다.");
          return;
        }
        if (ds_results.getCellData(i, "dcsnYn") == "3") {
          await $c.gus.cfAlertMsg($p, i + 1 + "번째 실적은 계산서생성 상태여서 수정,삭제 할 수 없습니다.");
          return;
        }
        if (ds_results.getCellData(i, "dcsnYn") == "4") {
          await $c.gus.cfAlertMsg($p, i + 1 + "번째 실적은 전표확정 상태여서 수정,삭제 할 수 없습니다.");
          return;
        }
        if ($c.gus.cfIsNull($p, ds_results.getCellData(i, "vehclNo"))) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["차량번호 "]);
          return false;
        }
        if ($c.gus.cfIsNull($p, ds_results.getCellData(i, "homeClntNm"))) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["소속거래처 "]);
          return false;
        }
        if ($c.gus.cfIsNull($p, ds_results.getCellData(i, "clntNm"))) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["매니저 "]);
          return false;
        }
        if ($c.gus.cfIsNull($p, ds_results.getCellData(i, "rsltsStdDt"))) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["실적일자 "]);
          return false;
        }
        if (!$c.gus.cfValidateValue($p, ds_results.getCellData(i, "rsltsStdDt"), "date=YYYYMMDD")) {
          await $c.gus.cfAlertMsg($p, i + 1 + "번째 데이터의 실적일자는 유효한 날짜 형식이 아닙니다.");
          return;
        }
        checkedCnt++;
      }
      if (rowStatus == "C") {
        ds_results.setCellData(i, "chk", "1");
        if (ds_results.getCellData(i, "adptYm") == "") {
          ds_results.setCellData(i, "adptYm", ds_results.getCellData(i, "rsltsStdDt").substring(0, 6));
        } else {
          if (ds_results.getCellData(i, "adptYm") != ds_results.getCellData(i, "rsltsStdDt").substring(0, 6)) {
            await $c.win.alert($p, i + 1 + "행의 실적일자는 " + ds_results.getCellData(i, "adptYm").substring(0, 4) + "년" + ds_results.getCellData(i, "adptYm").substring(4, 6) + "월 " + "적용년월 기간내여야 합니다.");
            return false;
          }
        }
        if (ds_results.getCellData(i, "selpchClsCd") == "1") {
          ds_results.setCellData(i, "sellYn", 1);
          ds_results.setCellData(i, "pchsYn", 0);
          ds_results.setCellData(i, "deductYn", 1);
          ds_results.setCellData(i, "sellClntNo", ds_results.getCellData(i, "clntNo"));
          ds_results.setCellData(i, "sellAmt", ds_results.getCellData(i, "clntAmt"));
          ds_results.setCellData(i, "sellVat", ds_results.getCellData(i, "clntVat"));
        } else if (ds_results.getCellData(i, "selpchClsCd") == "2") {
          ds_results.setCellData(i, "sellYn", 0);
          ds_results.setCellData(i, "pchsYn", 1);
          ds_results.setCellData(i, "deductYn", 0);
          ds_results.setCellData(i, "sellClntNo", "");
          ds_results.setCellData(i, "pchsClntNo", ds_results.getCellData(i, "clntNo"));
          ds_results.setCellData(i, "pchsAmt", ds_results.getCellData(i, "clntAmt"));
          ds_results.setCellData(i, "pchsVat", ds_results.getCellData(i, "clntVat"));
        }
        if (ds_results.getCellData(i, "homeClntNo") == "") {
          ds_results.setCellData(i, "homeClntNo", ds_results.getCellData(i, "sellClntNo"));
        }
        if (ds_results.getCellData(i, "vehclNo") == "") {
          await $c.win.alert($p, i + 1 + "행의 차량번호는 필수 입력 항목 입니다.");
          return false;
        }
        if (ds_results.getCellData(i, "homeClntNm") == "") {
          await $c.win.alert($p, i + 1 + "행의 소속거래처는 필수 입력 항목 입니다.");
          return false;
        }
        if (ds_results.getCellData(i, "clntNm") == "") {
          await $c.win.alert($p, i + 1 + "행의 매니저는 필수 입력 항목 입니다.");
          return false;
        }
        if (ds_results.getCellData(i, "rsltsStdDt") == "") {
          await $c.win.alert($p, i + 1 + "행의 실적일자는 필수 입력 항목 입니다.");
          return false;
        }
        if (!$c.gus.cfValidateValue($p, ds_results.getCellData(i, "rsltsStdDt"), "date=YYYYMMDD")) {
          await $c.gus.cfAlertMsg($p, i + 1 + "번째 데이터의 실적일자는 유효한 날짜 형식이 아닙니다.");
          return;
        }
        checkedCnt++;
      }
      if (rowStatus == "D") {
        if (ds_results.getCellData(i, "closeYn") == "1") {
          await $c.gus.cfAlertMsg($p, i + 1 + "번째 실적은 마감처리되어 삭제할 수 없습니다.");
          return;
        }
        if (ds_results.getCellData(i, "dcsnYn") == "2") {
          await $c.gus.cfAlertMsg($p, i + 1 + "번째 실적은 거래명세서생성 상태여서 삭제할 수 없습니다.");
          return;
        }
        if (ds_results.getCellData(i, "dcsnYn") == "3") {
          await $c.gus.cfAlertMsg($p, i + 1 + "번째 실적은 계산서생성 상태여서 삭제할 수 없습니다.");
          return;
        }
        if (ds_results.getCellData(i, "dcsnYn") == "4") {
          await $c.gus.cfAlertMsg($p, i + 1 + "번째 실적은 전표확정 상태여서 삭제할 수 없습니다.");
          return;
        }
        checkedCnt++;
      }
    }
  }
  if (checkedCnt == 0) {
    await $c.win.alert($p, "체크된 데이터가 없습니다. 수정하려는 Row의 첫 열의 체크박스를 선택해 주십시오.");
    return false;
  }
  let chk = await $c.gus.cfConfirmMsg($p, MSG_CM_CRM_001);
  if (chk) {
    await $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve_deductPchsAmt_submitdone = function (e) {};
scwin.sbm_retrieve_deductPchsAmt_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_FieldClear = function () {
  ed_clntNo.setValue("");
  txt_clntNm.setValue("");
  em_selpchItemCd.setValue("");
  txt_selpchItemNm.setValue("");
  vehclNoCd.setValue("");
  txt_cond_vehclNo.setValue("");
  lux_madeYn.setValue("0");
  lux_selpchClsCd.setValue("1");
  udc_rsltsStdDt.setInitDate(scwin.vCurDate, scwin.vCurDate);
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch, row) {
  switch (disGubun) {
    case 1:
      let condition = "";
      if (chb_repClntYn.getValue() != "") {
        condition = "RP";
      }
      udc_clnt.ilCommonPopUp(scwin.callbackClnt, pCode, pName, pClose, '5', null, '150,170', null, condition, null, null, null, null, null, pAllSearch, "거래처,거래처코드,거래처명");
      break;
    case 2:
      pCode = em_selpchItemCd.getValue();
      pName = txt_selpchItemNm.getValue();
      udc_selpchItem.ilCommonPopUp(scwin.callbackSelpchItem, pCode, pName, 'T', null, null, null, null, ',,,,,,', null, null, null, null, null, null, null);
      break;
    case 3:
      udc_vehclNo.ilCommonPopUp(scwin.callbackVehclNo, pCode, pName, pClose, null, null, null, null, null, "400", null, null, null, null, 'T', "차량번호,차량단축코드,차량번호");
      break;
    case 4:
      scwin._popupRow = row;
      udc_comCode_Grid.ilCommonPopUp(scwin.callbackGridVehclNo, pCode, pName, pClose, null, null, null, null, null, "400", null, null, null, null, 'T', "차량번호,차량단축코드,차량번호");
      break;
    case 5:
      scwin._popupRow = row;
      udc_comCode_Grid.ilCommonPopUp(scwin.callbackGridHomeClnt, pCode, pName, 'T', '5', null, '150,170', null, null, null, null, null, null, null, 'T', "거래처,거래처코드,거래처명");
      break;
    case 6:
      scwin._popupRow = row;
      udc_comCode_Grid.ilCommonPopUp(scwin.callbackGridClnt, pCode, pName, 'T', '5', null, '150,170', null, null, null, null, null, null, null, 'T', "거래처,거래처코드,거래처명");
      break;
    case 7:
      scwin._popupRow = row;
      udc_comCode_Grid.ilCommonPopUp(scwin.callbackGridSelpchItem, pCode, pName, 'T', null, null, null, null, ',,,,,,', null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.callbackClnt = function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, txt_clntNm);
    dma_condition.set("upperClntNo", rtnList[5]);
  }
};
scwin.callbackSelpchItem = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    $c.gus.cfSetReturnValue($p, rtnList, em_selpchItemCd, txt_selpchItemNm);
  }
};
scwin.callbackVehclNo = function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, vehclNoCd, txt_cond_vehclNo);
    ed_clntNo.setValue(rtnList[3]);
    txt_clntNm.setValue(rtnList[4]);
  }
};
scwin.callbackGridVehclNo = function (rtnList) {
  let row = scwin._popupRow;
  if (rtnList != null) {
    ds_results.setCellData(row, "vehclNo", rtnList[1]);
    ds_results.setCellData(row, "homeClntNo", rtnList[3]);
    ds_results.setCellData(row, "homeClntNm", rtnList[4]);
    ds_results.setCellData(row, "clntNo", rtnList[5]);
    ds_results.setCellData(row, "clntNm", rtnList[6]);
    ds_results.setCellData(row, "eqCd", rtnList[7]);
    gr_results.setFocusedCell(row, "rsltsStdDt");
  } else {
    ds_results.setCellData(row, "vehclNo", "");
    ds_results.setCellData(row, "homeClntNo", "");
    ds_results.setCellData(row, "homeClntNm", "");
    ds_results.setCellData(row, "clntNo", "");
    ds_results.setCellData(row, "clntNm", "");
    ds_results.setCellData(row, "eqCd", "");
  }
};
scwin.callbackGridHomeClnt = function (rtnList) {
  let row = scwin._popupRow;
  if (rtnList != null) {
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_results, row, "homeClntNo", "homeClntNm");
  } else {
    ds_results.setCellData(row, "homeClntNo", "");
    ds_results.setCellData(row, "homeClntNm", "");
  }
};
scwin.callbackGridClnt = function (rtnList) {
  let row = scwin._popupRow;
  if (rtnList != null) {
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_results, row, "clntNo", "clntNm");
  } else {
    ds_results.setCellData(row, "clntNo", "");
    ds_results.setCellData(row, "clntNm", "");
  }
};
scwin.callbackGridSelpchItem = function (rtnList) {
  let row = scwin._popupRow;
  if (rtnList != null && rtnList[0] != "N/A") {
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_results, row, "selpchItemCd", "selpchItemNm");
    if (rtnList[2] == 0) {
      ds_results.setCellData(row, "taxnClsCd", "03");
      ds_results.setCellData(row, "clntVat", 0);
    } else {
      ds_results.setCellData(row, "taxnClsCd", "01");
    }
  } else {
    ds_results.setCellData(row, "selpchItemCd", "");
    ds_results.setCellData(row, "selpchItemNm", "");
  }
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_copyRow = function () {
  let targetRow = ds_results.getRowPosition();
  if (targetRow < 0) return;
  scwin.f_addRow();
  let addedRow = ds_results.getRowPosition();
  ds_results.setCellData(addedRow, "chk", ds_results.getCellData(targetRow, "chk"));
  ds_results.setCellData(addedRow, "vehclNo", ds_results.getCellData(targetRow, "vehclNo"));
  ds_results.setCellData(addedRow, "homeClntNo", ds_results.getCellData(targetRow, "homeClntNo"));
  ds_results.setCellData(addedRow, "homeClntNm", ds_results.getCellData(targetRow, "homeClntNm"));
  ds_results.setCellData(addedRow, "clntNo", ds_results.getCellData(targetRow, "clntNo"));
  ds_results.setCellData(addedRow, "clntNm", ds_results.getCellData(targetRow, "clntNm"));
  ds_results.setCellData(addedRow, "sellClntNo", ds_results.getCellData(targetRow, "sellClntNo"));
  ds_results.setCellData(addedRow, "sellClntNm", ds_results.getCellData(targetRow, "sellClntNm"));
  ds_results.setCellData(addedRow, "pchsClntNo", ds_results.getCellData(targetRow, "pchsClntNo"));
  ds_results.setCellData(addedRow, "pchsClntNm", ds_results.getCellData(targetRow, "pchsClntNm"));
  ds_results.setCellData(addedRow, "rsltsStdDt", ds_results.getCellData(targetRow, "rsltsStdDt"));
  ds_results.setCellData(addedRow, "selpchItemCd", ds_results.getCellData(targetRow, "selpchItemCd"));
  ds_results.setCellData(addedRow, "selpchItemNm", ds_results.getCellData(targetRow, "selpchItemNm"));
  ds_results.setCellData(addedRow, "selpchClsCd", ds_results.getCellData(targetRow, "selpchClsCd"));
  ds_results.setCellData(addedRow, "clntAmt", ds_results.getCellData(targetRow, "clntAmt"));
  ds_results.setCellData(addedRow, "sellAmt", ds_results.getCellData(targetRow, "sellAmt"));
  ds_results.setCellData(addedRow, "pchsAmt", ds_results.getCellData(targetRow, "pchsAmt"));
  ds_results.setCellData(addedRow, "clntVat", ds_results.getCellData(targetRow, "clntVat"));
  ds_results.setCellData(addedRow, "sellVat", ds_results.getCellData(targetRow, "sellVat"));
  ds_results.setCellData(addedRow, "pchsVat", ds_results.getCellData(targetRow, "pchsVat"));
  ds_results.setCellData(addedRow, "taxnClsCd", ds_results.getCellData(targetRow, "taxnClsCd"));
  ds_results.setCellData(addedRow, "hirecarCls", ds_results.getCellData(targetRow, "hirecarCls"));
  ds_results.setCellData(addedRow, "dcsnYn", "1");
  ds_results.setCellData(addedRow, "odrNo", ds_results.getCellData(targetRow, "odrNo"));
  ds_results.setCellData(addedRow, "rmk", ds_results.getCellData(targetRow, "rmk"));
  ds_results.setCellData(addedRow, "closeYn", "0");
  ds_results.setCellData(addedRow, "rsltsSeq", ds_results.getCellData(targetRow, "rsltsSeq"));
  ds_results.setCellData(addedRow, "selpchItemSeq", ds_results.getCellData(targetRow, "selpchItemSeq"));
  ds_results.setCellData(addedRow, "eqCd", ds_results.getCellData(targetRow, "eqCd"));
  ds_results.setCellData(addedRow, "sellSeq", ds_results.getCellData(targetRow, "sellSeq"));
  ds_results.setCellData(addedRow, "pchsSeq", ds_results.getCellData(targetRow, "pchsSeq"));
  ds_results.setCellData(addedRow, "rsnCd", ds_results.getCellData(targetRow, "rsnCd"));
  ds_results.setCellData(addedRow, "sellYn", ds_results.getCellData(targetRow, "sellYn"));
  ds_results.setCellData(addedRow, "pchsYn", ds_results.getCellData(targetRow, "pchsYn"));
  ds_results.setCellData(addedRow, "deductYn", ds_results.getCellData(targetRow, "deductYn"));
};
scwin.f_addRow = function () {
  ds_results.insertRow();
  let row = ds_results.getRowPosition();
  ds_results.setCellData(row, "chk", "1");
  ds_results.setCellData(row, "rsltsStdDt", ica_rsltsStdDtSt.getValue());
  ds_results.setCellData(row, "selpchItemCd", em_selpchItemCd.getValue());
  ds_results.setCellData(row, "selpchItemNm", txt_selpchItemNm.getValue());
  ds_results.setCellData(row, "sellClntNo", ed_clntNo.getValue());
  ds_results.setCellData(row, "sellClntNm", txt_clntNm.getValue());
  ds_results.setCellData(row, "selpchClsCd", lux_selpchClsCd.getValue());
  ds_results.setCellData(row, "vehclNo", txt_cond_vehclNo.getValue());
  ds_results.setCellData(row, "dcsnYn", "1");
  spa_totalRow.setValue(ds_results.getTotalRow());
};
scwin.f_deleteRow = function () {
  for (let i = 0; i < ds_results.getRowCount(); i++) {
    if (ds_results.getCellData(i, "chk") == "1") {
      ds_results.setRowStatus(i, "D");
    }
  }
};
scwin.f_cancelRow = function () {
  let row = ds_results.getRowPosition();
  if (row >= 0) {
    ds_results.undoRow(row);
  }
};
scwin.f_adaptAmt = async function () {
  let clntAmt = 0;
  let clntVat = 0;
  let amtCnt = 0;
  let selpchClsCd = "";
  for (let i = 0; i < ds_results.getRowCount(); i++) {
    if (ds_results.getCellData(i, "chk") == "1") {
      if (ds_results.getCellData(i, "clntAmt") > 0) {
        clntAmt = ds_results.getCellData(i, "clntAmt");
        selpchClsCd = ds_results.getCellData(i, "selpchClsCd");
        amtCnt++;
      } else {
        ds_results.setCellData(i, "clntAmt", clntAmt);
      }
      if (ds_results.getCellData(i, "clntVat") > 0) {
        clntVat = ds_results.getCellData(i, "clntVat");
        selpchClsCd = ds_results.getCellData(i, "selpchClsCd");
        amtCnt++;
      } else {
        ds_results.setCellData(i, "clntVat", clntVat);
      }
      ds_results.setCellData(i, "selpchClsCd", selpchClsCd);
    }
  }
  if (amtCnt == 0) {
    await $c.win.alert($p, "선택된 행들은 입력된 금액이 모두 0원 입니다.");
    return false;
  }
};
scwin.f_adaptRsltsStdDt = async function () {
  let chkCnt = 0;
  let rsltsStdDt = "";
  for (let i = 0; i < ds_results.getRowCount(); i++) {
    if (ds_results.getCellData(i, "chk") == "1") {
      if (ds_results.getCellData(i, "rsltsStdDt") != "") {
        rsltsStdDt = ds_results.getCellData(i, "rsltsStdDt");
        chkCnt++;
      } else {
        ds_results.setCellData(i, "rsltsStdDt", rsltsStdDt);
      }
    }
  }
  if (chkCnt == 0) {
    await $c.win.alert($p, "선택된 행이 없습니다. 일괄적용할 행들을 선택해 주십시오.");
    return false;
  }
};
scwin.f_goDtlAmtPop = async function () {
  let row = ds_results.getRowPosition();
  if (row < 0) return;
  let obj = {
    paramTitle: "상세금액입력",
    dtlMgntNo: ds_results.getCellData(row, "dtlMgntNo")
  };
  let rtnList = await $c.win.openPopup($p, "/ui/ja/dn/workrslts/ja_401_01_05p.xml", {
    width: 200,
    height: 480,
    modal: true,
    data: obj
  });
  if (rtnList != null && rtnList.rowPosition > 0) {
    if (rtnList.totDtlAmt != "") {
      ds_results.setCellData(ds_results.getRowPosition(), "clntAmt", rtnList.totDtlAmt);
      ds_results.setCellData(ds_results.getRowPosition(), "dtlMgntNo", rtnList.dtlMgntNo);
      gr_results.setFocusedCell(ds_results.getRowPosition(), "clntAmt");
    }
  }
};
scwin.f_Upload = function () {
  ds_results.removeAll();
  ds_Tmp_FillUse.removeAll();
  ds_fileUp.removeAll();
  // TODO: 엑셀 업로드 처리 - cfDrmUploadFile 및 fileUploadGDS 관련 로직은 WebSquare 파일업로드 UDC로 대체 필요
};
scwin.f_Import = function () {
  for (let i = 0; i < ds_Tmp_FillUse.getRowCount(); i++) {
    ds_results.insertRow();
    ds_results.setCellData(i, "rsltsStdDt", ds_Tmp_FillUse.getCellData(i, "rsltsStdDt"));
    ds_results.setCellData(i, "vehclNo", ds_Tmp_FillUse.getCellData(i, "vehclNo"));
    scwin.f_openCommonPopUp(4, "", ds_results.getCellData(i, "vehclNo"), 'T', 'T', i);
    ds_results.setCellData(i, "homeClntNo", ds_Tmp_FillUse.getCellData(i, "homeClntNo"));
    scwin.f_openCommonPopUp(5, ds_results.getCellData(i, "homeClntNo"), "", 'T', 'T', i);
    ds_results.setCellData(i, "clntNo", ds_Tmp_FillUse.getCellData(i, "clntNo"));
    scwin.f_openCommonPopUp(6, ds_results.getCellData(i, "clntNo"), "", 'T', 'T', i);
    ds_results.setCellData(i, "selpchItemCd", ds_Tmp_FillUse.getCellData(i, "selpchItemCd"));
    scwin.f_openCommonPopUp(7, ds_results.getCellData(i, "selpchItemCd"), "", 'T', 'T', i);
    ds_results.setCellData(i, "selpchClsCd", ds_Tmp_FillUse.getCellData(i, "selpchClsCd"));
    ds_results.setCellData(i, "clntAmt", ds_Tmp_FillUse.getCellData(i, "clntAmt"));
    ds_results.setCellData(i, "clntVat", ds_Tmp_FillUse.getCellData(i, "clntVat"));
    ds_results.setCellData(i, "taxnClsCd", ds_Tmp_FillUse.getCellData(i, "taxnClsCd"));
    ds_results.setCellData(i, "rmk", ds_Tmp_FillUse.getCellData(i, "rmk"));
    ds_results.setCellData(i, "certiNo", ds_Tmp_FillUse.getCellData(i, "certiNo"));
    ds_results.setCellData(i, "dcsnYn", "1");
  }
};
scwin.f_CheckFileExt = function (ext, path) {
  ext = ext.toUpperCase();
  path = path.toUpperCase();
  let elen = ext.length;
  let flen = path.length;
  return ext == path.substring(flen - elen, flen);
};
scwin.gr_results_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_results.getCellData(rowIndex, "closeYn") == "1") {
    gr_results.setColumnReadOnly("vehclNo", true);
    gr_results.setColumnReadOnly("homeClntNm", true);
    gr_results.setColumnReadOnly("clntNm", true);
    gr_results.setColumnReadOnly("rsltsStdDt", true);
    gr_results.setColumnReadOnly("selpchItemCd", true);
    gr_results.setColumnReadOnly("clntAmt", true);
    gr_results.setColumnReadOnly("calculator", true);
    gr_results.setColumnReadOnly("clntVat", true);
    gr_results.setColumnReadOnly("taxnClsCd", true);
    gr_results.setColumnReadOnly("hirecarCls", true);
    gr_results.setColumnReadOnly("rmk", true);
  } else {
    gr_results.setColumnReadOnly("vehclNo", false);
    gr_results.setColumnReadOnly("homeClntNm", false);
    gr_results.setColumnReadOnly("clntNm", false);
    gr_results.setColumnReadOnly("rsltsStdDt", false);
    gr_results.setColumnReadOnly("selpchItemCd", false);
    gr_results.setColumnReadOnly("clntAmt", false);
    gr_results.setColumnReadOnly("calculator", false);
    gr_results.setColumnReadOnly("clntVat", false);
    gr_results.setColumnReadOnly("taxnClsCd", false);
    gr_results.setColumnReadOnly("hirecarCls", false);
    gr_results.setColumnReadOnly("rmk", false);
  }
};
scwin.gr_results_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "vehclNo") {
    let vehclNo = ds_results.getCellData(rowIndex, "vehclNo");
    scwin.f_openCommonPopUp(4, "", vehclNo, 'F', 'F', rowIndex);
  } else if (columnId == "homeClntNo" || columnId == "homeClntNm") {
    let homeClntNm = ds_results.getCellData(rowIndex, "homeClntNm");
    scwin.f_openCommonPopUp(5, "", homeClntNm, 'F', 'F', rowIndex);
  } else if (columnId == "clntNo" || columnId == "clntNm") {
    let clntNm = ds_results.getCellData(rowIndex, "clntNm");
    scwin.f_openCommonPopUp(6, "", clntNm, 'F', 'F', rowIndex);
  } else if (columnId == "selpchItemCd") {
    let selpchItemCd = ds_results.getCellData(rowIndex, "selpchItemCd");
    scwin.f_openCommonPopUp(7, selpchItemCd, "", 'F', 'F', rowIndex);
  } else if (columnId == "calculator") {
    scwin.f_goDtlAmtPop();
  }
};
scwin.gr_results_oneditend = function (rowIndex, columnIndex, columnId, oldValue, newValue) {
  if (columnId == "vehclNo") {
    let vehclNo = ds_results.getCellData(rowIndex, "vehclNo");
    if (vehclNo == "") {
      return;
    }
    scwin.f_openCommonPopUp(4, "", vehclNo, "T", "T", rowIndex);
  } else if (columnId == "homeClntNm") {
    let homeClntNm = ds_results.getCellData(rowIndex, "homeClntNm");
    if (homeClntNm == "") {
      return;
    }
    scwin.f_openCommonPopUp(5, "", homeClntNm, "T", "T", rowIndex);
  } else if (columnId == "clntNm") {
    let clntNm = ds_results.getCellData(rowIndex, "clntNm");
    if (clntNm == "") {
      return;
    }
    scwin.f_openCommonPopUp(6, "", clntNm, "T", "T", rowIndex);
  } else if (columnId == "selpchItemCd") {
    let selpchItemCd = ds_results.getCellData(rowIndex, "selpchItemCd");
    if (selpchItemCd == "") {
      return;
    }
    scwin.f_openCommonPopUp(7, selpchItemCd, "", "T", "T", rowIndex);
  } else if (columnId == "clntAmt") {
    if (ds_results.getCellData(rowIndex, "taxnClsCd") == "01") {
      ds_results.setCellData(rowIndex, "clntVat", ds_results.getCellData(rowIndex, "clntAmt") * 0.1);
      gr_results.setFocusedCell(rowIndex, "taxnClsCd");
    }
  }
};
scwin.gr_results_oncloseup = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "selpchClsCd") {
    if (ds_results.getCellData(rowIndex, "selpchClsCd") == "1") {
      if (ds_results.getCellData(rowIndex, "sellClntNo") == "") {
        await $c.win.alert($p, "청구거래처를 등록해 주십시오.");
        return false;
      }
    }
    if (ds_results.getCellData(rowIndex, "selpchClsCd") == "2") {
      if (ds_results.getCellData(rowIndex, "pchsClntNo") == "") {
        await $c.win.alert($p, "정산거래처를 등록해 주십시오.");
        return false;
      }
    }
    if (ds_results.getCellData(rowIndex, "selpchClsCd") == "3") {
      if (ds_results.getCellData(rowIndex, "pchsClntNo") == "" || ds_results.getCellData(rowIndex, "sellClntNo") == "") {
        await $c.win.alert($p, "청구, 정산거래처를 모두 등록해 주십시오.");
        return false;
      }
    }
  } else if (columnId == "deductYn") {
    dma_cond_deductPchsAmt.set("adptYm", ds_results.getCellData(rowIndex, "adptYm"));
    dma_cond_deductPchsAmt.set("vehclNoCd", ds_results.getCellData(rowIndex, "vehclNo"));
    dma_cond_deductPchsAmt.set("pchsClntNo", ds_results.getCellData(rowIndex, "sellClntNo"));
    await $c.sbm.execute($p, sbm_retrieve_deductPchsAmt);
  } else if (columnId == "taxnClsCd") {
    if (ds_results.getCellData(rowIndex, "taxnClsCd") == "03") {
      ds_results.setCellData(rowIndex, "clntVat", 0);
    } else {
      ds_results.setCellData(rowIndex, "clntVat", ds_results.getCellData(rowIndex, "clntAmt") * 0.1);
    }
  }
};
scwin.gr_results_onheaderclick = function (columnIndex, columnId) {
  if (columnId == "chk") {
    let allChecked = true;
    for (let i = 0; i < ds_results.getRowCount(); i++) {
      if (ds_results.getCellData(i, "chk") != "1") {
        allChecked = false;
        break;
      }
    }
    if (allChecked) {
      for (let i = 0; i < ds_results.getRowCount(); i++) {
        ds_results.setCellData(i, "chk", "0");
      }
    } else {
      for (let i = 0; i < ds_results.getRowCount(); i++) {
        ds_results.setCellData(i, "chk", "1");
      }
    }
  }
};
scwin.ed_clntNo_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, txt_clntNm, 1);
};
scwin.em_selpchItemCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(em_selpchItemCd, txt_selpchItemNm, 2);
};
scwin.vehclNoCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(vehclNoCd, txt_cond_vehclNo, 3);
};
scwin.lux_madeYn_onchange = function (e) {
  if (lux_madeYn.getValue() == "1") {
    $c.gus.cfEnableBtnOnly($p, [chb_selpchItemCdYn]);
  } else {
    $c.gus.cfDisableBtn($p, [chb_selpchItemCdYn]);
  }
};
scwin._popupRow = -1;
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_clnt',codeId:'ed_clntNo',nameId:'txt_clntNm',popupID:'',style:'',hideName:'Y'}},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_repClntYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대표거래처'}]},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급공제구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lux_selpchClsCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_condition.selpchClsCd',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_selpchItem',codeId:'em_selpchItemCd',nameId:'txt_selpchItemNm',hideName:'Y',popupID:'',style:''}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_selpchItemCdYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입세액제외'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_rsltsStdDt',edFromId:'ica_rsltsStdDtSt',edToId:'ica_rsltsStdDtEnd',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'생성여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lux_madeYn',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_condition.madeYn'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_vehclNo',codeId:'vehclNoCd',nameId:'txt_cond_vehclNo',hideName:'Y',popupID:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Srch','ev:onclick':'scwin.btn_Srch_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'공제정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:anchor',A:{id:'btn_anchor1',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'SAMPLE'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_results',id:'gr_results',style:'',visibleRowNum:'11',visibleRowNumFix:'true',autoFitMinWidth:'1700',fixedColumn:'1',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',value:'차량번호',width:'100',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClntNo',inputType:'text',value:'소속거래처코드',width:'120',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClntNm',inputType:'text',value:'소속거래처명',width:'120',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',value:'매니저코드',width:'100',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',value:'매니저',width:'100',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'text',value:'실적일자',width:'100',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',value:'매출입항목',width:'140',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',value:'지급공제<br/>구분',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'selpchClsCd',value:'금액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'clntAmt',value:'계산기',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'calculator',value:'부가세',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntVat',value:'과세<br/>구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'taxnClsCd',value:'용차<br/>구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'hirecarCls',value:'마감<br/>여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'closeYn',value:'확정<br/>여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcsnYn',value:'비고',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rmk',value:'거래명세서<br/>번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'certiNo',value:'전표번호',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'chk',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vehclNo',value:'명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'textImage',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClntNo',inputType:'textImage',width:'120',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClntNm',inputType:'textImage',width:'120',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',width:'100',textAlign:'left',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'textImage',width:'100',textAlign:'left',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'calendar',width:'100',allowChar:'0-9',maxLength:'8',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'textImage',width:'70',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchClsCd',inputType:'text',width:'100',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지급'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'공제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'clntAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'textImage',id:'calculator',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'clntVat',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'taxnClsCd',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'과세'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'비과세'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'hirecarCls',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'용차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'closeYn',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'No'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'YES'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dcsnYn',displayMode:'label',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'거래명세서생성'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'계산서생성'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전표확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전표취소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'certiNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column54',displayMode:'label',textAlign:'right',expression:'sum(\'clntAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',expression:'sum(\'clntVat\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_copyRow','ev:onclick':'scwin.btn_copyRow_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'Y',btnRowDelYn:'N'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_adptAmt','ev:onclick':'scwin.btn_adptAmt_onclick',label:'저장',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'금액 일괄적용'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_adaptRsltsStdDt','ev:onclick':'scwin.btn_adaptRsltsStdDt_onclick',label:'저장',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'실적일자 일괄적용'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save','ev:onclick':'scwin.btn_save_onclick',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'info-list txt-black',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'월 고정비용 생성 : 차량별 부대비용 등록된 월 고정 비용에 대한 생성',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'조회/개별 비용 : 등록된 비용 조회 및 개별 비용 생성',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'전체 차량 생성 : 전체 차량의 일괄 비용 생성',style:'',tagname:'p'}}]}]}]}]}]}]})