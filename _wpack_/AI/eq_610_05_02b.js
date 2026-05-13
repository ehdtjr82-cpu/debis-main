/*amd /AI/eq_610_05_02b.xml 73003 be52972deb05dd1f5262b67e9e6fbd27c093c3398abbcce6ed0df140ec38b519 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtClsCd',name:'일자구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilkndCd',name:'유종',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqSelfTransYn',name:'운송구분요청',dataType:'text'}},{T:1,N:'w2:key',A:{id:'realSelfTransYn',name:'운송구분실적',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tskClsCd',name:'업무구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqOilStatNo',name:'주유소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payClsCd',name:'거래구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'reqRegDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqSeq',name:'순번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_chkList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'reqRegDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqSeq',name:'순번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oilInOut',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'reqRegDt',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqSelfTransYn',name:'운송구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'재고량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realInQty',name:'실제입고수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realSelfTransYn',name:'실제자가운송',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqInDt',name:'요청입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqOilStatNm',name:'주유소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilkndCd',name:'유종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payClsCd',name:'거래구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilCoClntNo',name:'정유사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realInDt',name:'발주일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'주문번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transClntNo',name:'운송업체코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transClntNm',name:'운송업체명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transVehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqNm',name:'요청자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'휴대전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqInHm',name:'입고요청시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqInPlace',name:'요청주유소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc',name:'기타사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smsSendDt',name:'발주SMS일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inSmsSendDt',name:'입고SMS일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inQty',name:'입고수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inConfYn',name:'입고확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inYn',name:'입고요청여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqOilStatNo',name:'주유소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendNo',name:'발신번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oilInOutDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'reqRegDt',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inConfYn',name:'입고확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realInDt',name:'실제입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tskClsCd',name:'업무구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilCoClntNo',name:'입고정유사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilCoClntNm',name:'정유사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inQty',name:'입고수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realInQty',name:'실제입고수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatClntNo',name:'주유소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatClntNm',name:'주유소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payClsCd',name:'거래구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upr',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prePaySlipNo',name:'지급전표',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveFmsOilOrderContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_oilInOut","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_oilInOut","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDetail',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveFmsOilOrderContentsDetailCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search2","key":"IN_DS1"},{"id":"ds_oilInOutDetail","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_oilInOutDetail","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveDetail_submitdone','ev:submiterror':'scwin.sbm_retrieveDetail_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveOilOrder',action:'/ps.eq.fmsmgnt.fmsoilmgnt.SaveFmsOilOrderContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_oilInOut","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_saveOilOrder_submitdone','ev:submiterror':'scwin.sbm_saveOilOrder_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_approveSms',action:'/ps.eq.fmsmgnt.fmsoilmgnt.SendSmsFmsOilOrderContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_oilInOut","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_approveSms_submitdone','ev:submiterror':'scwin.sbm_approveSms_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_fixSms',action:'/ps.eq.fmsmgnt.fmsoilmgnt.SendFixSmsFmsOilOrderContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_oilInOut","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_fixSms_submitdone','ev:submiterror':'scwin.sbm_fixSms_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_approve',action:'/ps.eq.fmsmgnt.fmsoilmgnt.SaveFmsOilOrderContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_oilInOut","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_approve_submitdone','ev:submiterror':'scwin.sbm_approve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_storage',action:'/ps.eq.fmsmgnt.fmsoilmgnt.SaveFmsOilOrderContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_oilInOut","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_storage_submitdone','ev:submiterror':'scwin.sbm_storage_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_rescission',action:'/ps.eq.fmsmgnt.fmsoilmgnt.InitiateFmsOilOrderContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_oilInOut","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_rescission_submitdone','ev:submiterror':'scwin.sbm_rescission_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_fix',action:'/ps.eq.fmsmgnt.fmsoilmgnt.SaveFmsOilOrderContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_oilInOut","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_fix_submitdone','ev:submiterror':'scwin.sbm_fix_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_fixCancle',action:'/ps.eq.fmsmgnt.fmsoilmgnt.SaveFmsOilOrderContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_oilInOut","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_fixCancle_submitdone','ev:submiterror':'scwin.sbm_fixCancle_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveDetail',action:'/ps.eq.fmsmgnt.fmsoilmgnt.SaveFmsOilOrderContentsDetailCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_oilInOutDetail","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_saveDetail_submitdone','ev:submiterror':'scwin.sbm_saveDetail_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.clntNo = "";
scwin.clntNm = "";
scwin.vCurDate = "";
scwin.ed_stdDt_val = "";
scwin.txt_sendNo_val = "0263632659";
scwin.onpageload = async function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.ed_stdDt_val = scwin.vCurDate.substring(0, 6) + "01";
  scwin.clntNo = $c.ses.getClntNo();
  scwin.clntNm = $c.ses.getClntNm();
  acb_dtClsCd.setValue("0");
  acb_realSelfTransYn.setValue("2");
  acb_payClsCd.setValue("");
  txt_sendNo.setValue("0263632659");
  scwin.f_EventInit();
};
scwin.onUdcCompleted = async function () {
  ica_stdDt.setValue(scwin.ed_stdDt_val);
  ica_endDt.setValue(scwin.vCurDate);
  if (scwin.clntNo != null && scwin.clntNo != "") {
    ed_clntNo.setValue(scwin.clntNo);
    txt_clntNm.setValue(scwin.clntNm);
    $c.gus.cfDisableObjects($p, [ed_clntNo, txt_clntNm]);
  }
};
scwin.f_EventInit = async function () {
  $c.gus.cfDisableObjects($p, [btn_AddRow]);
  $c.gus.cfDisableObjects($p, [btn_CanRow]);
  $c.gus.cfDisableObjects($p, [btn_DelRow]);
  $c.gus.cfDisableObjects($p, [btn_Approve]);
  $c.gus.cfDisableObjects($p, [btn_Rescission]);
  $c.gus.cfDisableObjects($p, [btn_ApproveSms]);
  $c.gus.cfDisableObjects($p, [btn_FixSms]);
  $c.gus.cfDisableObjects($p, [btn_Storage]);
  $c.gus.cfDisableObjects($p, [btn_Fix]);
  $c.gus.cfDisableObjects($p, [btn_CancleFix]);
  $c.gus.cfDisableObjects($p, [btn_SaveDetail]);
};
scwin.f_EventSearch = async function () {
  $c.gus.cfEnableObjects($p, [btn_Approve]);
  $c.gus.cfEnableObjects($p, [btn_Rescission]);
  $c.gus.cfEnableObjects($p, [btn_ApproveSms]);
  $c.gus.cfEnableObjects($p, [btn_FixSms]);
  $c.gus.cfEnableObjects($p, [btn_Storage]);
  $c.gus.cfEnableObjects($p, [btn_Fix]);
  $c.gus.cfEnableObjects($p, [btn_CancleFix]);
};
scwin.f_Retrieve = async function () {
  let vChkVal = await scwin.f_CheckAdptDt();
  if (!vChkVal) {
    return false;
  }
  ds_search.set("reqSelfTransYn", "2");
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_RetrieveDetail = async function () {
  let row = ds_oilInOut.getRowPosition();
  ds_search2.set("reqRegDt", ds_oilInOut.getCellData(row, "reqRegDt"));
  ds_search2.set("clntNo", ds_oilInOut.getCellData(row, "clntNo"));
  ds_search2.set("reqSeq", ds_oilInOut.getCellData(row, "reqSeq"));
  await $c.sbm.execute($p, sbm_retrieveDetail);
};
scwin.f_Excel = async function () {
  if (ds_oilInOut.getRowCount() > 0) {
    $c.data.downloadGridViewExcel($p, gr_oilInOut, {
      fileName: "유류발주 입고내역.xlsx",
      sheetName: "유류발주 입고내역"
    });
  }
};
scwin.f_Excel2 = async function () {
  if (ds_oilInOutDetail.getRowCount() > 0) {
    $c.data.downloadGridViewExcel($p, gr_oilInOutDetail, {
      fileName: "유류입고 세부내역.xlsx",
      sheetName: "유류입고 세부내역"
    });
  }
};
scwin.f_CheckAdptDt = async function () {
  let vAdptStDt = ica_stdDt.getValue();
  let vAdptEndDt = ica_endDt.getValue();
  let vReturn = true;
  if (vAdptStDt == "" || vAdptStDt.length < 8) {
    await $c.win.alert($p, "적용시작일자를 정확하게 입력해주십시오.");
    ica_stdDt.setFocus();
    return false;
  }
  if (vAdptEndDt == "" || vAdptEndDt.length < 8) {
    await $c.win.alert($p, "적용종료일자를 정확하게 입력해주십시오.");
    ica_endDt.setFocus();
    return false;
  }
  let chk = await $c.gus.cfValidate($p, [ica_stdDt, ica_endDt]);
  if (!chk) {
    return false;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_stdDt.getValue(), ica_endDt.getValue(), false)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ica_stdDt.setFocus();
    return false;
  }
  return true;
};
scwin.f_Approve = async function () {
  if (!ds_oilInOut.isUpdated()) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }
  let chkValid = await $c.gus.cfValidate($p, [gr_oilInOut]);
  if (!chkValid) {
    return;
  }
  for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
    if (ds_oilInOut.getRowStatus(i) != "R") {
      if (ds_oilInOut.getCellData(i, "stsCd") != "1") {
        await $c.win.alert($p, i + 1 + "번째행은 요청상태가 아닙니다.");
        return;
      } else if (ds_oilInOut.getCellData(i, "realSelfTransYn") == "1") {
        if (ds_oilInOut.getCellData(i, "transClntNo") == "") {
          await $c.win.alert($p, i + 1 + "번째행 자가운송일때 운송업체는 필수입력입니다.");
          return;
        }
      } else if (ds_oilInOut.getCellData(i, "realSelfTransYn") == "0") {
        ds_oilInOut.setCellData(i, "transClntNo", "");
      }
    }
  }
  let cnt = 0;
  let chk = await $c.win.confirm($p, "발주 하시겠습니까?");
  if (chk == true) {
    for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
      if (ds_oilInOut.getCellData(i, "stsCd") == "1" && ds_oilInOut.getRowStatus(i) != "R") {
        ds_oilInOut.setCellData(i, "inYn", "A");
        cnt = cnt + 1;
      }
    }
    await $c.sbm.execute($p, sbm_approve);
  }
};
scwin.f_Storage = async function () {
  if (scwin.f_Chk() == false) {
    return;
  }
  if (!ds_oilInOut.isUpdated()) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }
  let chkValid = await $c.gus.cfValidate($p, [gr_oilInOut]);
  if (!chkValid) {
    return;
  }
  for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
    if (ds_oilInOut.getCellData(i, "chk") == "T" && ds_oilInOut.getCellData(i, "stsCd") != "2") {
      await $c.win.alert($p, i + 1 + "번째행은 발주상태가 아닙니다.");
      return false;
    }
  }
  let cnt = 0;
  let chk = await $c.win.confirm($p, "입고 하시겠습니까?");
  if (chk == true) {
    for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
      if (ds_oilInOut.getCellData(i, "chk") == "T" && ds_oilInOut.getCellData(i, "stsCd") == "2") {
        ds_oilInOut.setCellData(i, "inYn", "S");
        cnt = cnt + 1;
      }
    }
    await $c.sbm.execute($p, sbm_storage);
  }
};
scwin.f_Save = async function () {
  if (!ds_oilInOut.isUpdated()) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }
  let chkValid = await $c.gus.cfValidate($p, [gr_oilInOut]);
  if (!chkValid) {
    return;
  }
  for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
    if (ds_oilInOut.getCellData(i, "reqSelfTransYn") == "1" && ds_oilInOut.getCellData(i, "transVehclNo") == "") {
      await $c.win.alert($p, i + 1 + "번째행 자가운송일때 차량번호는 필수입력입니다.");
      return;
    }
  }
  let chk = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (chk == true) {
    for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
      if (ds_oilInOut.getCellData(i, "stsCd") == "0" && ds_oilInOut.getRowStatus(i) == "C") {
        ds_oilInOut.setCellData(i, "inYn", "B");
      }
    }
    await $c.sbm.execute($p, sbm_saveOilOrder);
  }
};
scwin.dataSetDebug = async function (dataList, isDebug) {
  if (isDebug == true) {
    let obj = dataList;
    let str = "[[[[" + obj.getID() + "]]]]]\n";
    let str2 = "";
    let colInfos = obj.getColumnIDs();
    for (let dsRow = 0; dsRow < obj.getRowCount(); dsRow++) {
      for (let dsCol = 0; dsCol < colInfos.length; dsCol++) {
        str2 = "[" + colInfos[dsCol] + "] " + obj.getCellData(dsRow, colInfos[dsCol]) + ", ";
        str += "[" + colInfos[dsCol] + "] " + obj.getCellData(dsRow, colInfos[dsCol]) + ", ";
      }
      str += "\n\n";
    }
    await $c.win.alert($p, str);
  }
};
scwin.f_SaveDetail = async function () {
  if (!ds_oilInOutDetail.isUpdated()) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }
  let chkValid = await $c.gus.cfValidate($p, [gr_oilInOutDetail]);
  if (!chkValid) {
    return;
  }
  let chk = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (chk == true) {
    scwin.f_chkInfo();
    await $c.sbm.execute($p, sbm_saveDetail);
  }
};
scwin.f_ApproveSms = async function () {
  if (scwin.f_Chk() == false) {
    return;
  }
  if (txt_sendNo.getValue() == "") {
    await $c.win.alert($p, "발신번호를 입력하세요.");
    return;
  }
  if (!$c.gus.cfSmsTelValidChk($p, txt_sendNo.getValue())) {
    return;
  }
  for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
    if (ds_oilInOut.getCellData(i, "chk") == "T" && ds_oilInOut.getCellData(i, "stsCd") != "2") {
      await $c.win.alert($p, i + 1 + "번째행은 발주상태가 아닙니다.");
      return false;
    }
  }
  for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
    if (ds_oilInOut.getCellData(i, "chk") == "T" && ds_oilInOut.getCellData(i, "mpNo") == "") {
      await $c.win.alert($p, i + 1 + "번째행은 전화번호가 비어있습니다.전화번호를 입력하세요");
      return false;
    }
  }
  let cnt = 0;
  let chk = await $c.win.confirm($p, "SMS를 전송 하시겠습니까?");
  if (chk == true) {
    let nowDtHm = WebSquare.date.getCurrentServerDate("yyyyMMddHHmm");
    for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
      if (ds_oilInOut.getCellData(i, "chk") == "T" && ds_oilInOut.getCellData(i, "stsCd") == "2") {
        ds_oilInOut.setCellData(i, "sendNo", txt_sendNo.getValue());
        ds_oilInOut.setCellData(ds_oilInOut.getRowPosition(), "smsSendDt", nowDtHm);
        cnt = cnt + 1;
      }
    }
    if (cnt > 0) {
      await $c.sbm.execute($p, sbm_approveSms);
    }
  }
};
scwin.f_FixSms = async function () {
  if (scwin.f_Chk() == false) {
    return;
  }
  if (txt_sendNo.getValue() == "") {
    await $c.win.alert($p, "발신번호를 입력하세요.");
    return;
  }
  if (!$c.gus.cfSmsTelValidChk($p, txt_sendNo.getValue())) {
    return;
  }
  for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
    if (ds_oilInOut.getCellData(i, "chk") == "T" && ds_oilInOut.getCellData(i, "stsCd") != "3") {
      await $c.win.alert($p, i + 1 + "번째행은 입고 상태가 아닙니다.");
      return;
    }
  }
  for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
    if (ds_oilInOut.getCellData(i, "chk") == "T" && ds_oilInOut.getCellData(i, "mpNo") == "") {
      await $c.win.alert($p, i + 1 + "번째행은 전화번호가 비어있습니다.전화번호를 입력하세요");
      return;
    }
  }
  let cnt = 0;
  let chk = await $c.win.confirm($p, "입고 SMS를 전송 하시겠습니까?");
  if (chk == true) {
    let nowDtHm = WebSquare.date.getCurrentServerDate("yyyyMMddHHmm");
    for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
      if (ds_oilInOut.getCellData(i, "chk") == "T" && ds_oilInOut.getCellData(i, "stsCd") == "3") {
        ds_oilInOut.setCellData(i, "sendNo", txt_sendNo.getValue());
        ds_oilInOut.setCellData(ds_oilInOut.getRowPosition(), "inSmsSendDt", nowDtHm);
        cnt = cnt + 1;
      }
    }
    if (cnt > 0) {
      await $c.sbm.execute($p, sbm_fixSms);
    }
  }
};
scwin.f_chkInfo = async function () {
  ds_chkList.removeAll();
  for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
    if (ds_oilInOut.getCellData(i, "chk") == "T") {
      let newRow = ds_chkList.insertRow();
      ds_chkList.setCellData(newRow, "reqRegDt", ds_oilInOut.getCellData(i, "reqRegDt"));
      ds_chkList.setCellData(newRow, "clntNo", ds_oilInOut.getCellData(i, "clntNo"));
      ds_chkList.setCellData(newRow, "reqSeq", ds_oilInOut.getCellData(i, "reqSeq"));
    }
  }
};
scwin.f_Chk = async function () {
  let newOrderFlag = "F";
  for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
    if (ds_oilInOut.getCellData(i, "chk") == "T") {
      newOrderFlag = "T";
    }
  }
  if (newOrderFlag == "F") {
    await $c.win.alert($p, "선택된 데이타가 존재하지 않습니다.");
    return false;
  }
};
scwin.f_Fix = async function () {
  if (scwin.f_Chk() == false) {
    return;
  }
  for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
    if (ds_oilInOut.getCellData(i, "chk") == "T" && ds_oilInOut.getCellData(i, "stsCd") != "3") {
      await $c.win.alert($p, i + 1 + "번째행은 입고상태가 아닙니다.");
      return false;
    }
  }
  let cnt = 0;
  let chk = await $c.win.confirm($p, "입고확정 하시겠습니까?");
  if (chk == true) {
    for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
      if (ds_oilInOut.getCellData(i, "chk") == "T" && ds_oilInOut.getCellData(i, "inConfYn") == "Y") {
        await $c.win.alert($p, "입고내역의 " + (i + 1) + "번째 행은 입고가 확정되어 있습니다.");
        return;
      } else if (ds_oilInOut.getCellData(i, "chk") == "T" && ds_oilInOut.getCellData(i, "inConfYn") == "N" && ds_oilInOut.getCellData(i, "stsCd") == "3") {
        ds_oilInOut.setCellData(i, "inYn", "Y");
        cnt = cnt + 1;
      }
    }
    if (cnt > 0) {
      await $c.sbm.execute($p, sbm_fix);
    }
  }
};
scwin.f_FixCancle = async function () {
  if (scwin.f_Chk() == false) {
    return;
  }
  let cnt = 0;
  let chk = await $c.win.confirm($p, "확정취소 하시겠습니까?");
  if (chk == true) {
    for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
      if (ds_oilInOut.getCellData(i, "chk") == "T" && ds_oilInOut.getCellData(i, "inConfYn") == "N") {
        await $c.win.alert($p, "입고내역의 " + (i + 1) + "번째 행은 입고확정 상태가 아닙니다.");
        return;
      } else if (ds_oilInOut.getCellData(i, "chk") == "T" && ds_oilInOut.getCellData(i, "inConfYn") == "Y") {
        ds_oilInOut.setCellData(i, "inYn", "N");
        cnt = cnt + 1;
      }
    }
    if (cnt > 0) {
      await $c.sbm.execute($p, sbm_fixCancle);
    }
  }
};
scwin.f_AddRow = async function () {
  let row = ds_oilInOut.getRowPosition();
  if (ds_oilInOut.getCellData(row, "inConfYn") == "Y") {
    await $c.win.alert($p, "유류입고 내역의 " + (row + 1) + "번째 행은 입고가 확정되어 수정할수 없습니다.");
    return;
  }
  let newRow = ds_oilInOutDetail.insertRow();
  ds_oilInOutDetail.setCellData(newRow, "reqRegDt", ds_oilInOut.getCellData(row, "reqRegDt"));
  ds_oilInOutDetail.setCellData(newRow, "realInDt", ds_oilInOut.getCellData(row, "realInDt"));
  ds_oilInOutDetail.setCellData(newRow, "clntNo", ds_oilInOut.getCellData(row, "clntNo"));
  ds_oilInOutDetail.setCellData(newRow, "clntNm", ds_oilInOut.getCellData(row, "clntNm"));
  ds_oilInOutDetail.setCellData(newRow, "realInQty", ds_oilInOut.getCellData(row, "realInQty"));
  ds_oilInOutDetail.setCellData(newRow, "tskClsCd", ds_oilInOut.getCellData(row, "tskClsCd"));
  ds_oilInOutDetail.setCellData(newRow, "inConfYn", ds_oilInOut.getCellData(row, "inConfYn"));
  ds_oilInOutDetail.setCellData(newRow, "reqSeq", ds_oilInOut.getCellData(row, "reqSeq"));
};
scwin.f_AddRowMaster = async function () {
  let newRow = ds_oilInOut.insertRow();
  let nowDt = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  ds_oilInOut.setCellData(newRow, "reqRegDt", nowDt);
  ds_oilInOut.setCellData(newRow, "reqInDt", nowDt);
  ds_oilInOut.setCellData(newRow, "stsCd", "0");
  ds_oilInOut.setCellData(newRow, "reqSelfTransYn", "0");
  ds_oilInOut.setCellData(newRow, "clntNo", ed_clntNo.getValue());
  ds_oilInOut.setCellData(newRow, "clntNm", txt_clntNm.getValue());
  ds_oilInOut.setCellData(newRow, "reqOilStatNo", ed_reqOilStatNo.getValue());
  ds_oilInOut.setCellData(newRow, "reqOilStatNm", txt_reqOilStatNm.getValue());
  if (ed_reqOilStatNo.getValue() != "") {
    let clntNoVal = "";
    let rtnList = $c.gus.cfCommonPopUp($p, "retrieveOilStatClntNo", ed_reqOilStatNo.getValue(), "", "T", null, null, null, null, clntNoVal, null, null, null, null);
    if (rtnList != null && rtnList[0] != "N/A") {
      ds_oilInOut.setCellData(newRow, "reqOilStatNo", rtnList[0]);
      ds_oilInOut.setCellData(newRow, "reqOilStatNm", rtnList[1]);
      ds_oilInOut.setCellData(newRow, "mpNo", rtnList[2]);
      ds_oilInOut.setCellData(newRow, "reqNm", rtnList[3]);
      if ("294371" == rtnList[0]) {
        ds_oilInOut.setCellData(newRow, "mpNo", "01034449364");
        ds_oilInOut.setCellData(newRow, "reqNm", "최은광");
      } else if ("262126" == rtnList[0]) {
        ds_oilInOut.setCellData(newRow, "mpNo", "01066696058");
        ds_oilInOut.setCellData(newRow, "reqNm", "오명근");
      }
    }
  }
  if (scwin.clntNo != null && scwin.clntNo != "") {
    ds_oilInOut.setCellData(newRow, "clntNo", scwin.clntNo);
    ds_oilInOut.setCellData(newRow, "clntNm", scwin.clntNm);
  }
};
scwin.f_Rescission = async function () {
  if (scwin.f_Chk() == false) {
    return;
  }
  for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
    if (ds_oilInOut.getCellData(i, "chk") == "T") {
      if (ds_oilInOut.getCellData(i, "stsCd") == "0" || ds_oilInOut.getCellData(i, "stsCd") == "1") {
        await $c.win.alert($p, i + 1 + "번째행은 입고 또는 발주상태가 아닙니다.");
        return;
      }
    }
  }
  let cnt = 0;
  let chk = await $c.win.confirm($p, "취소하시겠습니까?(입고일때  발주, 발주일때 요청 상태로 변경됩니다)");
  if (chk == true) {
    for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
      if (ds_oilInOut.getCellData(i, "chk") == "T" && ds_oilInOut.getCellData(i, "inConfYn") == "Y") {
        await $c.win.alert($p, "입고내역의 " + (i + 1) + "번째 행은 입고가 확정되어 삭제할수 없습니다.");
        return;
      } else if (ds_oilInOut.getCellData(i, "chk") == "T" && ds_oilInOut.getCellData(i, "inConfYn") == "N") {
        ds_oilInOut.setCellData(i, "inYn", "R");
        cnt = cnt + 1;
      }
    }
    if (cnt > 0) {
      await $c.sbm.execute($p, sbm_rescission);
    }
  }
};
scwin.f_DelRow = async function (row) {
  if (ds_oilInOutDetail.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  if (ds_oilInOutDetail.getCellData(row, "inConfYn") == "Y") {
    await $c.win.alert($p, "유류입고 세부내역의 " + (row + 1) + "번째 행은 입고가 확정되어 삭제할수 없습니다.");
    return;
  }
  ds_oilInOutDetail.removeRow(row);
};
scwin.f_DelRowMaster = async function (row) {
  if (ds_oilInOut.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let stsCd = ds_oilInOut.getCellData(row, "stsCd");
  if (stsCd == "3") {
    await $c.gus.cfAlertMsg($p, row + 1 + "번째 항목은 삭제 할 수 없습니다.\n발주상태를 확인해 주시기바랍니다.");
    return;
  }
  ds_oilInOut.removeRow(row);
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList = new Array();
  switch (disGubun) {
    case 1:
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveClntEmpNoList", pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, null, null);
      $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, txt_clntNm);
      break;
    case 2:
      let clntNoVal = "";
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveOilStatClntNo", pCode, pName, "T", null, null, null, null, clntNoVal, null, null, null, null);
      if (rtnList != null && rtnList[0] != "N/A") {
        $c.gus.cfSetReturnValue($p, rtnList, ed_reqOilStatNo, txt_reqOilStatNm);
      } else {
        ed_reqOilStatNo.setValue("");
        txt_reqOilStatNm.setValue("");
      }
      break;
    default:
      break;
  }
};
scwin.f_openPopUp = async function (row, colid, data) {
  let rtnList = new Array();
  let pCode = "";
  let pName = "";
  if (colid == "transClntNo") {
    pCode = ds_oilInOut.getCellData(row, "transClntNo");
    rtnList = $c.gus.cfCommonPopUp($p, "retrieveClntEmpNoList", pCode, "", "T", null, null, null, null, null, null, null, null, null);
    if (rtnList != null && rtnList[0] != "N/A") {
      ds_oilInOut.setCellData(row, "transClntNo", rtnList[0]);
      ds_oilInOut.setCellData(row, "transClntNm", rtnList[1]);
    } else {
      ds_oilInOut.setCellData(row, "transClntNo", "");
      ds_oilInOut.setCellData(row, "transClntNm", "");
    }
  }
  if (colid == "oilStatClntNo") {
    let vTskClsCd = ds_oilInOutDetail.getCellData(row, "tskClsCd");
    if (vTskClsCd == "") {
      await $c.win.alert($p, "업무구분을 먼저 선택하세요");
      return false;
    }
    let clntNoVal = "";
    rtnList = $c.gus.cfCommonPopUp($p, "retrieveOilStatClntNo", "", "", "T", null, null, null, null, vTskClsCd + "," + clntNoVal, null, null, null, null);
    if (rtnList != null && rtnList[0] != "N/A") {
      ds_oilInOutDetail.setCellData(row, "oilStatClntNo", rtnList[0]);
      ds_oilInOutDetail.setCellData(row, "oilStatClntNm", rtnList[1]);
    } else {
      ds_oilInOutDetail.setCellData(row, "oilStatClntNo", "");
      ds_oilInOutDetail.setCellData(row, "oilStatClntNm", "");
    }
  }
  if (colid == "clntNo") {
    pCode = ds_oilInOut.getCellData(row, "clntNo");
    rtnList = $c.gus.cfCommonPopUp($p, "retrieveClntEmpNoList", pCode, "", "T", null, null, null, null, null, null, null, null, null);
    if (rtnList != null && rtnList[0] != "N/A") {
      ds_oilInOut.setCellData(row, "clntNo", rtnList[0]);
      ds_oilInOut.setCellData(row, "clntNm", rtnList[1]);
    } else {
      ds_oilInOut.setCellData(row, "clntNo", "");
      ds_oilInOut.setCellData(row, "clntNm", "");
    }
  }
  if (colid == "reqOilStatNm") {
    let clntNoVal = "";
    rtnList = $c.gus.cfCommonPopUp($p, "retrieveOilStatClntNo", pCode, "", "T", null, null, null, null, clntNoVal, null, null, null, null);
    if (rtnList != null && rtnList[0] != "N/A") {
      ds_oilInOut.setCellData(row, "reqOilStatNo", rtnList[0]);
      ds_oilInOut.setCellData(row, "reqOilStatNm", rtnList[1]);
      ds_oilInOut.setCellData(row, "mpNo", rtnList[2]);
      ds_oilInOut.setCellData(row, "reqNm", rtnList[3]);
      if ("294371" == rtnList[0]) {
        ds_oilInOut.setCellData(ds_oilInOut.getRowPosition(), "mpNo", "01034449364");
        ds_oilInOut.setCellData(ds_oilInOut.getRowPosition(), "reqNm", "최은광");
      } else if ("262126" == rtnList[0]) {
        ds_oilInOut.setCellData(ds_oilInOut.getRowPosition(), "mpNo", "01066696058");
        ds_oilInOut.setCellData(ds_oilInOut.getRowPosition(), "reqNm", "오명근");
      }
    } else {
      ds_oilInOut.setCellData(row, "reqOilStatNo", "");
      ds_oilInOut.setCellData(row, "reqOilStatNm", "");
      ds_oilInOut.setCellData(row, "mpNo", "");
      ds_oilInOut.setCellData(row, "reqNm", "");
    }
  }
  return true;
};
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");
  } else {
    scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
  }
};
scwin.btn_retrieve_onclick = async function (e) {
  scwin.f_Retrieve();
};
scwin.btn_ApproveSms_onclick = async function (e) {
  scwin.f_ApproveSms();
};
scwin.btn_FixSms_onclick = async function (e) {
  scwin.f_FixSms();
};
scwin.btn_save_onclick = async function (e) {
  scwin.f_Save();
};
scwin.btn_Approve_onclick = async function (e) {
  scwin.f_Approve();
};
scwin.btn_Storage_onclick = async function (e) {
  scwin.f_Storage();
};
scwin.btn_Rescission_onclick = async function (e) {
  scwin.f_Rescission();
};
scwin.btn_Fix_onclick = async function (e) {
  scwin.f_Fix();
};
scwin.btn_CancleFix_onclick = async function (e) {
  scwin.f_FixCancle();
};
scwin.btn_AddRow_onclick = async function (e) {
  scwin.f_AddRow();
};
scwin.btn_DelRow_onclick = async function (e) {
  scwin.f_DelRow(ds_oilInOutDetail.getRowPosition());
};
scwin.btn_CanRow_onclick = async function (e) {
  ds_oilInOutDetail.undoAll();
};
scwin.btn_SaveDetail_onclick = async function (e) {
  scwin.f_SaveDetail();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_oilInOut.getRowCount();
  if (rowCnt == 0) {
    ds_oilInOutDetail.removeAll();
    scwin.f_EventInit();
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    scwin.f_EventSearch();
  }
};
scwin.sbm_retrieve_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveDetail_submitdone = async function (e) {};
scwin.sbm_retrieveDetail_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_saveOilOrder_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_saveOilOrder_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_approve_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_approve_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_rescission_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_rescission_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_saveDetail_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  await scwin.f_Retrieve();
  for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
    for (let j = 0; j < ds_chkList.getRowCount(); j++) {
      if (ds_chkList.getCellData(j, "reqRegDt") == ds_oilInOut.getCellData(i, "reqRegDt") && ds_chkList.getCellData(j, "clntNo") == ds_oilInOut.getCellData(i, "clntNo") && ds_chkList.getCellData(j, "reqSeq") == ds_oilInOut.getCellData(i, "reqSeq")) {
        ds_oilInOut.setCellData(i, "chk", "T");
      }
    }
  }
};
scwin.sbm_saveDetail_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_storage_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_storage_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_approveSms_submitdone = async function (e) {
  await $c.win.alert($p, "발주 SMS전송이 완료되었습니다.");
  scwin.f_Retrieve();
};
scwin.sbm_approveSms_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_fixSms_submitdone = async function (e) {
  await $c.win.alert($p, "입고 SMS전송이 완료되었습니다.");
  scwin.f_Retrieve();
};
scwin.sbm_fixSms_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_fix_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_fix_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_fixCancle_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_fixCancle_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_oilInOut_onrowpositionchange = async function (rowIndex, oldRowIndex) {
  if (ds_oilInOut.getRowCount() == 0) {
    ds_oilInOutDetail.removeAll();
    return;
  }
  scwin.f_RetrieveDetail();
};
scwin.ds_oilInOut_canrowpositionchange = async function (rowIndex, oldRowIndex) {
  if (ds_oilInOutDetail.isUpdated()) {
    await $c.gus.cfAlertMsg($p, "유류입고 세부내역이 수정중입니다. 수정을 완료하세요");
    return false;
  }
};
scwin.gr_oilInOut_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_openPopUp(rowIndex, columnId, "");
};
scwin.gr_oilInOutDetail_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_openPopUp(rowIndex, columnId, "");
};
scwin.gr_oilInOut_oncellclick = function (rowIndex, columnIndex, columnId) {
  let row = rowIndex;
  if (ds_oilInOut.getCellData(row, "stsCd") == "0" || ds_oilInOut.getCellData(row, "stsCd") == "1") {
    gr_oilInOut.setColumnReadOnly("realInDt", false);
    gr_oilInOut.setColumnReadOnly("oilCoClntNo", false);
    gr_oilInOut.setColumnReadOnly("realInQty", false);
    gr_oilInOut.setColumnReadOnly("realSelfTransYn", false);
    gr_oilInOut.setColumnReadOnly("odrNo", false);
    gr_oilInOut.setColumnReadOnly("transClntNo", false);
    gr_oilInOut.setColumnReadOnly("payClsCd", false);
    gr_oilInOut.setColumnReadOnly("reqInDt", false);
    gr_oilInOut.setColumnReadOnly("clntNo", false);
    gr_oilInOut.setColumnReadOnly("oilkndCd", false);
    gr_oilInOut.setColumnReadOnly("reqQty", false);
    gr_oilInOut.setColumnReadOnly("reqNm", false);
    gr_oilInOut.setColumnReadOnly("mpNo", false);
    gr_oilInOut.setColumnReadOnly("stockQty", false);
    gr_oilInOut.setColumnReadOnly("etc", false);
    gr_oilInOut.setColumnReadOnly("reqOilStatNm", false);
    gr_oilInOut.setColumnReadOnly("reqSelfTransYn", false);
    gr_oilInOut.setColumnReadOnly("transVehclNo", false);
    gr_oilInOut.setColumnReadOnly("reqInHm", false);
    gr_oilInOut.setColumnReadOnly("reqInPlace", false);
  } else {
    gr_oilInOut.setColumnReadOnly("realInDt", true);
    gr_oilInOut.setColumnReadOnly("oilCoClntNo", true);
    gr_oilInOut.setColumnReadOnly("realInQty", true);
    gr_oilInOut.setColumnReadOnly("realSelfTransYn", true);
    gr_oilInOut.setColumnReadOnly("odrNo", true);
    gr_oilInOut.setColumnReadOnly("transClntNo", true);
    gr_oilInOut.setColumnReadOnly("payClsCd", true);
    gr_oilInOut.setColumnReadOnly("reqInDt", true);
    gr_oilInOut.setColumnReadOnly("clntNo", true);
    gr_oilInOut.setColumnReadOnly("oilkndCd", true);
    gr_oilInOut.setColumnReadOnly("reqQty", true);
    gr_oilInOut.setColumnReadOnly("reqNm", true);
    gr_oilInOut.setColumnReadOnly("mpNo", true);
    gr_oilInOut.setColumnReadOnly("stockQty", true);
    gr_oilInOut.setColumnReadOnly("etc", true);
    gr_oilInOut.setColumnReadOnly("reqOilStatNm", true);
    gr_oilInOut.setColumnReadOnly("reqSelfTransYn", true);
    gr_oilInOut.setColumnReadOnly("transVehclNo", true);
    gr_oilInOut.setColumnReadOnly("reqInHm", true);
    gr_oilInOut.setColumnReadOnly("reqInPlace", true);
  }
  if (ds_oilInOut.getCellData(row, "stsCd") == "3" && ds_oilInOut.getCellData(row, "inConfYn") == "N") {
    $c.gus.cfEnableObjects($p, [btn_AddRow]);
    $c.gus.cfEnableObjects($p, [btn_CanRow]);
    $c.gus.cfEnableObjects($p, [btn_DelRow]);
    $c.gus.cfEnableObjects($p, [btn_SaveDetail]);
  } else {
    $c.gus.cfDisableObjects($p, [btn_AddRow]);
    $c.gus.cfDisableObjects($p, [btn_CanRow]);
    $c.gus.cfDisableObjects($p, [btn_DelRow]);
    $c.gus.cfDisableObjects($p, [btn_SaveDetail]);
  }
};
scwin.gr_oilInOutDetail_oncellclick = function (rowIndex, columnIndex, columnId) {
  let row = rowIndex;
  if (columnId == "prePaySlipNo" && ds_oilInOutDetail.getCellData(row, "prePaySlipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_oilInOutDetail.getCellData(row, "prePaySlipNo"));
  }
  if (ds_oilInOutDetail.getCellData(row, "inConfYn") == "Y") {
    gr_oilInOutDetail.setColumnReadOnly("tskClsCd", true);
    gr_oilInOutDetail.setColumnReadOnly("oilStatClntNo", true);
    gr_oilInOutDetail.setColumnReadOnly("inQty", true);
    gr_oilInOutDetail.setColumnReadOnly("inDt", true);
  } else if (ds_oilInOutDetail.getCellData(row, "inConfYn") == "N") {
    gr_oilInOutDetail.setColumnReadOnly("tskClsCd", false);
    gr_oilInOutDetail.setColumnReadOnly("oilStatClntNo", false);
    gr_oilInOutDetail.setColumnReadOnly("inQty", false);
    gr_oilInOutDetail.setColumnReadOnly("inDt", false);
  }
};
scwin.udc_clnt_onblurCode = function () {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, txt_clntNm, 1);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'req',id:'acb_dtClsCd',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_search.dtClsCd',editType:'select'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'등록일자'}]},{T:1,N:'w2:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_Dt',refEdDt:'',edFromId:'ica_stdDt',edToId:'ica_endDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_payClsCd',style:'width: 230px;',submenuSize:'fixed',ref:'data:ds_search.payClsCd',editType:'select'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_realSelfTransYn',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_search.realSelfTransYn',editType:'select'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_stsCd',style:'width: 80px;',submenuSize:'fixed',ref:'data:ds_search.stsCd',editType:'select'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_clntNo',validTitle:'',nameId:'txt_clntNm',style:'',id:'udc_clnt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주유소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_reqOilStatNo',nameId:'txt_reqOilStatNm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_reqOilStat'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업무구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_tskClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_search.tskClsCd',editType:'select'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'유류발주/입고내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'ds_oilInOut',focusMode:'row',id:'gr_oilInOut',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'7',visibleRowNumFix:'true',fixedColumn:'3',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'chk',value:'',displayMode:'label',colSpan:'',rowSpan:'2',fixColumnWidth:'true',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',value:'거래처<br/>코드',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNm',value:'거래처명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'530',inputType:'text',style:'',id:'reqInDt',value:'입고요청내역',displayMode:'label',colSpan:'5',rowSpan:'',class:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'reqOilStatNm',value:'입고</br>요청</br>시간',displayMode:'label',colSpan:'',rowSpan:'2',class:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'oilkndCd',value:'상태',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'560',inputType:'text',style:'',id:'reqQty',value:'주문발주내역',displayMode:'label',colSpan:'8',rowSpan:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqSelfTransYn',value:'자가운송',displayMode:'label',colSpan:'1',rowSpan:''}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'reqInHm',value:'발주자정보',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'stsCd',value:'요청<br/>주유소',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payClsCd',value:'기타사항',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'oilCoClntNo',value:'발주SMS<br/>일시',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'realInDt',value:'입고SMS<br/>일시',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'realInQty',value:'입고정보',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'odrNo',value:'순번',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'realSelfTransYn',value:'재고량',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'transClntNo',value:'합계리터<br/>(L)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'transClntNm',value:'입고확정여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'transVehclNo',value:'입고요청여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'reqNm',value:'입고주유소',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mpNo',value:'발신번호',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'text',style:'',value:'요청</br>일자',width:'100',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'입고주유소',width:'150',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'유종',width:'80'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqInDt',value:'수량<br/>(L)',displayMode:'label',class:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqOilStatNm',value:'자가<br/>운송',displayMode:'label',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilkndCd',inputType:'text',style:'',value:'거래<br/>구분',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqQty',inputType:'text',style:'',value:'정유사',width:'150',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'reqSelfTransYn',value:'발주<br/>일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqInHm',value:'수량<br/>(L)',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'stsCd',value:'주문<br/>번호',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payClsCd',value:'자가<br/>운송',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'oilCoClntNo',value:'운송<br/>업체',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'realInDt',value:'운송<br/>업체명',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realInQty',inputType:'text',style:'',value:'차량<br/>번호',width:'100'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',style:'',id:'odrNo',value:'요청자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'realSelfTransYn',value:'휴대전화',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'transClntNo',value:'입고<br/>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'transClntNm',value:'입고<br/>수량',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqInDt',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqOilStatNm',inputType:'text',style:'',value:'',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilkndCd',inputType:'text',style:'',value:'',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqQty',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqSelfTransYn',value:'',displayMode:'label',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정유사운송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자가운송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'reqInHm',value:'',displayMode:'label',readOnly:'true',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stsCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payClsCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilCoClntNo',inputType:'select',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',style:'',id:'realInDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'realInQty',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'realSelfTransYn',value:'',displayMode:'label',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정유사운송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자가운송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'150',inputType:'textImage',style:'',id:'transClntNo',value:'',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'transClntNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transVehclNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mpNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'reqInPlace',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'etc',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'smsSendDt',value:'',displayMode:'label',readOnly:'true',displayFormat:'####/##/##/##:##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'inSmsSendDt',value:'',displayMode:'label',readOnly:'true',displayFormat:'####/##/##/##:##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'inDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inQty',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'reqSeq',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'stockQty',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'inQty',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'inConfYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'inYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'reqOilStatNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sendNo',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column125',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column121',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column97',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'reqQty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column133',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column129',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'realInQty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column141',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column137',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column149',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column145',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column117',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column178',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column174',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column170',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column166',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column162',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column154',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column202',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'inQty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column198',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column194',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column190',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column186',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column182',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column158',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column214',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_ApproveSms',style:'',type:'button','ev:onclick':'scwin.btn_ApproveSms_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발주SMS전송'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_FixSms',style:'',type:'button','ev:onclick':'scwin.btn_FixSms_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'입고SMS전송'}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'발신번호 : ',class:''}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'txt_sendNo',class:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Approve',style:'',type:'button','ev:onclick':'scwin.btn_Approve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발주'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Storage',style:'',type:'button','ev:onclick':'scwin.btn_Storage_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'입고'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Rescission',style:'',type:'button','ev:onclick':'scwin.btn_Rescission_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Fix',style:'',type:'button','ev:onclick':'scwin.btn_Fix_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'입고확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_CancleFix',style:'',type:'button','ev:onclick':'scwin.btn_CancleFix_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'입고취소'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'유류입고 세부내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'true',dataList:'ds_oilInOutDetail',scrollByColumn:'false',style:'',id:'gr_oilInOutDetail',visibleRowNum:'5',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',autoFit:'lastColumn',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'4',width:'430',inputType:'text',style:'',id:'clntNo',class:'',value:'입고요청내역',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'5',width:'570',inputType:'text',style:'',id:'clntNm',value:'세부 입고 내역',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',style:'',id:'realInDt',value:'거래<br/>구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'realInQty',value:'단가',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'tskClsCd',value:'금액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'oilStatClntNo',value:'지급<br/>전표',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'oilStatClntNm',value:'확정<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'inDt',value:'등록',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'150',inputType:'text',style:'',id:'inQty',value:'순번',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',class:'',value:'거래처<br/>코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'clntNm',class:'',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'realInDt',value:'발주<br/>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'realInQty',class:'',value:'발주<br/>수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tskClsCd',class:'txt-red',value:'업무<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'oilStatClntNo',class:'txt-red',value:'주유소<br/>코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'oilStatClntNm',class:'',value:'주유소명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inDt',class:'txt-red',value:'입고<br/>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inQty',class:'txt-red',value:'입고<br/>수량',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'realInDt',value:'',displayMode:'label',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'realInQty',value:'',displayMode:'label',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'tskClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',style:'',id:'oilStatClntNo',value:'',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'oilStatClntNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'inDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inQty',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payClsCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'upr',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'amt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'prePaySlipNo',value:'',displayMode:'label',readOnly:'true',class:'underline'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inConfYn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'reqRegDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'reqSeq',value:'',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column133',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column129',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column141',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'inQty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column137',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column149',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column145',value:'',displayMode:'label',expression:'sum(\'amt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column117',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column178',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column174',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_SaveDetail',style:'',type:'button','ev:onclick':'scwin.btn_SaveDetail_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})