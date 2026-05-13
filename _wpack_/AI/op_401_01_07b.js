/*amd /AI/op_401_01_07b.xml 30414 17b824e7c3e0841c9b11e0394aa5410b685a5b8e073988ebcae51cf2765ddfb0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'alloccarBranCd',name:'배차점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtCheck',name:'계약체크',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtDtYn',name:'계약일자여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tariff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'alloccarBranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarBranNm',name:'점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfClsCd',name:'요율종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfClsNm',name:'요율구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkUnitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'차종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'newPchsAmt',name:'변경요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptCd',name:'요율적용코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp2'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_empCross2'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col0',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_joblevel'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excel'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'alloccarBranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarBranNm',name:'점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfClsCd',name:'요율종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfClsNm',name:'요율구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkUnitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'차종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'newPchsAmt',name:'변경요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptCd',name:'요율적용코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_temp'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'alloccarBranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarBranNm',name:'점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfClsCd',name:'요율종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfClsNm',name:'요율구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkUnitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'차종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'newPchsAmt',name:'변경요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptCd',name:'요율적용코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.adjmbd.pchstrfmgnt.RetrieveBulkTpchsTariffExcelUploadCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_tariff","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_tariff","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve2',action:'/ds.sd.odrmgnt.odrreg.RetrieveBulkContractNumberCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve2","key":"IN_DS1"},{"id":"ds_emp2","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_emp2","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve2_submitdone','ev:submiterror':'scwin.sbm_retrieve2_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_excelUpload',action:'/ds.op.adjmbd.pchstrfmgnt.SaveBulkTpchsTariffExcelUploadCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_tariff","key":"IN_DS1"},{"id":"dma_retrieve","key":"IN_DS2"}]',target:'','ev:submitdone':'scwin.sbm_excelUpload_submitdone','ev:submiterror':'scwin.sbm_excelUpload_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_update',action:'/ds.op.adjmbd.pchstrfmgnt.UpdateBulkTpchsTariffExcelUploadCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"}]',target:'','ev:submitdone':'scwin.sbm_update_submitdone','ev:submiterror':'scwin.sbm_update_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_joblevel',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_joblevel","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_joblevel","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_joblevel_submitdone','ev:submiterror':'scwin.sbm_joblevel_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sLoUpperLobranCd = "";
scwin.strDate = "";
scwin.GAUCE_DATASET_HEADER1 = "";
scwin.onpageload = async function () {
  scwin.sLoUpperLobranCd = $c.ses.getLoUpperLobranCd();
  scwin.strDate = WebSquare.date.getCurrentServerDate("yyyyMMdd") + WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.f_Set("INIT");
};
scwin.onUdcCompleted = async function () {
  await $c.sbm.execute($p, sbm_joblevel);
  bilgMchtCd.setFocus();
  $c.gus.cfDisableObjects($p, [btn_Upt]);
};
scwin.f_Set = async function (gubun) {
  if (gubun == "INIT") {
    // TODO: initial setup
  }
};
scwin.f_createHeader2 = function () {
  let headerStr = "";
  let colCount = ds_empCross2.getColumnCount();
  for (let i = 0; i < colCount; i++) {
    if (i > 0) {
      headerStr += ",";
    }
    headerStr += ds_empCross2.getColumnID(i) + ":text";
  }
  // TODO: ds_empCross2 헤더를 ds_empCross 텍스트 기반으로 동적 재설정 — 원본에서 ds_empCross 미정의로 정확한 매핑 불가
};
scwin.f_Retrieve = async function () {
  if (bilgMchtCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["화주코드"]);
    bilgMchtCd.setFocus();
    return;
  }
  if (bilgMcht.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["화주명"]);
    bilgMcht.setFocus();
    return;
  }
  if (ctrtNo.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["계약번호"]);
    bilgMchtCd.setFocus();
    return;
  }
  dma_retrieve.set("alloccarBranCd", co_lc_logisticsBranch.getValue());
  dma_retrieve.set("ctrtNo", ctrtNo.getValue());
  dma_retrieve.set("adptDt", scwin.strDate.substring(0, 8));
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_openPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  if (disGubun == "1") {
    udc_bilgMcht.ilCommonPopUp(scwin.callbackBilgMcht, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "화주,화주코드,화주명");
  }
};
scwin.callbackBilgMcht = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, bilgMchtCd, bilgMcht);
  if (rtnList != null) {
    dma_retrieve2.set("ctrtClntNo", rtnList[0]);
    dma_retrieve2.set("ctrtCheck", "0");
    dma_retrieve2.set("ctrtDtYn", "1");
    await $c.sbm.execute($p, sbm_retrieve2);
    ctrtNo.setDisabled(false);
  }
};
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    scwin.f_openPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_Reset = async function () {
  $c.gus.cfInitObjects($p, [tb_searchCondition]);
  ds_emp2.removeAll();
  gr_tariff.setColumnVisible("newPchsAmt", true);
};
scwin.f_toExcel = async function (argGrid) {
  if (ds_tariff.getRowCount() != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      let fileName = '벌크하불요율' + "_" + scwin.strDate.substring(0, 8);
      $c.data.downloadGridViewExcel($p, argGrid, {
        "fileName": fileName + ".xlsx",
        "sheetName": fileName
      });
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
};
scwin.f_DataFomatChg = function (value) {
  let temp = new String();
  temp = value;
  temp = temp.replace(/,/gi, "");
  temp = temp.replace(/ /gi, "");
  return temp;
};
scwin.drmFileSubmit = async function () {
  $c.gus.cfDrmUploadFile($p, null, fileUploadGDS, scwin.f_upload);
};
scwin.f_upload = async function () {
  ds_excel.removeAll();
  ds_temp.removeAll();

  // TODO: ds_excel.DataId = fileUploadGDS.getCellData(0, "filePath") — 엑셀 업로드 파일 경로 로딩
  $c.gus.cfProgressWinOpen($p);
  $p.setTimeout(scwin.f_Import, {
    "delay": 1000
  });
};
scwin.f_Import = async function () {
  if (ds_excel.getRowCount() == 0) {
    $c.gus.cfProgressWinClose($p);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }
  let cnt = 24;
  if (ds_excel.getColumnCount() < cnt) {
    $c.gus.cfProgressWinClose($p);
    await $c.win.alert($p, "업로드 cvs 파일의 형식이 잘못되었습니다." + "\n파일형식을 확인후 다시 업로드하시길 바랍니다." + "\n컬럼값이 상이합니다. [형식=" + cnt + "개] 입력한값 => " + ds_excel.getColumnCount());
    return;
  }
  let temp = new String();
  for (let i = 0; i < ds_excel.getRowCount(); i++) {
    ds_excel.setCellData(i, ds_excel.getColumnID(18), scwin.f_DataFomatChg(ds_excel.getCellData(i, ds_excel.getColumnID(18))));
    ds_excel.setCellData(i, ds_excel.getColumnID(19), scwin.f_DataFomatChg(ds_excel.getCellData(i, ds_excel.getColumnID(19))));
    if (ds_excel.getCellData(i, ds_excel.getColumnID(19)) == "" || ds_excel.getCellData(i, ds_excel.getColumnID(19)) == null) {
      $c.gus.cfProgressWinClose($p);
      await $c.win.alert($p, "업로드 cvs 파일의 데이터가 잘못되었습니다." + "\n[" + (i + 1) + "] 번째 행의 [변경요율] 값이 없습니다.\n사용하신 CVS파일의 데이터를 확인 후,\n다시 업로드하시길 바랍니다.");
      return;
    }
  }
  if (scwin.f_AddRowUploaded()) {
    $c.gus.cfProgressWinClose($p);
    await $c.win.alert($p, "업로드작업이 완료되었습니다.");
  }
  gr_tariff.refresh();
  await $c.sbm.execute($p, sbm_excelUpload);
};
scwin.f_AddRowUploaded = function () {
  ds_temp.removeAll();
  for (let i = 0; i < ds_excel.getRowCount(); i++) {
    ds_temp.insertRow();
    let tRow = ds_temp.getRowCount() - 1;
    let colIds = ["alloccarBranCd", "alloccarBranNm", "ctrtNo", "trfClsCd", "trfClsNm", "adptDt", "dptDistrictCd", "dptDistrictNm", "arvDistrictCd", "arvDistrictNm", "commCd", "commNm", "wrkUnitCd", "copCoClntNo", "eqKndCd", "eqNrmCd", "eqNrmNm", "pchsAmt", "newPchsAmt", "expireDt", "odrKndCd", "trfAdptCd", "wrkStHh", "wrkEndHh"];
    for (let c = 0; c < colIds.length; c++) {
      ds_temp.setCellData(tRow, colIds[c], ds_excel.getCellData(i, colIds[c]));
    }
  }
  if (ds_temp.getRowCount() > 0) {
    ds_tariff.removeAll();
    for (let i = 0; i < ds_temp.getRowCount(); i++) {
      ds_tariff.insertRow();
      let row = ds_tariff.getRowCount() - 1;
      ds_tariff.setCellData(row, "alloccarBranCd", ds_temp.getCellData(i, "alloccarBranCd"));
      ds_tariff.setCellData(row, "alloccarBranNm", ds_temp.getCellData(i, "alloccarBranNm"));
      ds_tariff.setCellData(row, "ctrtNo", ds_temp.getCellData(i, "ctrtNo"));
      ds_tariff.setCellData(row, "trfClsCd", ds_temp.getCellData(i, "trfClsCd"));
      ds_tariff.setCellData(row, "trfClsNm", ds_temp.getCellData(i, "trfClsNm"));
      ds_tariff.setCellData(row, "adptDt", ds_temp.getCellData(i, "adptDt"));
      ds_tariff.setCellData(row, "dptDistrictCd", ds_temp.getCellData(i, "dptDistrictCd"));
      ds_tariff.setCellData(row, "dptDistrictNm", ds_temp.getCellData(i, "dptDistrictNm"));
      ds_tariff.setCellData(row, "arvDistrictCd", ds_temp.getCellData(i, "arvDistrictCd"));
      ds_tariff.setCellData(row, "arvDistrictNm", ds_temp.getCellData(i, "arvDistrictNm"));
      ds_tariff.setCellData(row, "commCd", ds_temp.getCellData(i, "commCd"));
      ds_tariff.setCellData(row, "commNm", ds_temp.getCellData(i, "commNm"));
      ds_tariff.setCellData(row, "wrkUnitCd", ds_temp.getCellData(i, "wrkUnitCd"));
      ds_tariff.setCellData(row, "copCoClntNo", ds_temp.getCellData(i, "copCoClntNo"));
      ds_tariff.setCellData(row, "eqKndCd", ds_temp.getCellData(i, "eqKndCd"));
      ds_tariff.setCellData(row, "eqNrmCd", ds_temp.getCellData(i, "eqNrmCd"));
      ds_tariff.setCellData(row, "eqNrmNm", ds_temp.getCellData(i, "eqNrmNm"));
      ds_tariff.setCellData(row, "pchsAmt", ds_temp.getCellData(i, "pchsAmt"));
      ds_tariff.setCellData(row, "newPchsAmt", ds_temp.getCellData(i, "newPchsAmt"));
      ds_tariff.setCellData(row, "expireDt", ds_temp.getCellData(i, "expireDt"));
      ds_tariff.setCellData(row, "odrKndCd", ds_temp.getCellData(i, "odrKndCd"));
      ds_tariff.setCellData(row, "trfAdptCd", ds_temp.getCellData(i, "trfAdptCd"));
      ds_tariff.setCellData(row, "wrkStHh", ds_temp.getCellData(i, "wrkStHh"));
      ds_tariff.setCellData(row, "wrkEndHh", ds_temp.getCellData(i, "wrkEndHh"));
    }
  }
  return true;
};
scwin.f_Update = async function () {
  if (!ds_excel.isUpdated()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
    return;
  }
  let chk = await $c.gus.cfValidate($p, [gr_tariff]);
  if (!chk) {
    return;
  }
  let confirmResult = await $c.gus.cfConfirmMsg($p, MSG_CM_CRM_001);
  if (confirmResult == true) {
    dma_retrieve.set("ctrtNo", ctrtNo.getValue());
    await $c.sbm.execute($p, sbm_update);
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  $c.gus.cfEnableObjects($p, [btn_Upt]);
};
scwin.sbm_retrieve_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve2_submitdone = async function (e) {
  if (ds_emp2.getRowCount() > 0) {
    let choices = [];
    for (let i = 0; i < ds_emp2.getRowCount(); i++) {
      let ctrtNoVal = ds_emp2.getCellData(i, "ctrtNo");
      let clntPicNm = ds_emp2.getCellData(i, "clntPicNm");
      let ctrtEndDt = ds_emp2.getCellData(i, "ctrtEndDt");
      let labelText = ctrtNoVal + " (" + clntPicNm + "~" + ctrtEndDt + ")";
      choices.push({
        label: labelText,
        value: ctrtNoVal
      });
    }
    ctrtNo.setNodeSet("data:ds_emp2", "ctrtNo", "ctrtNo");
  }
};
scwin.sbm_retrieve2_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_excelUpload_submitdone = async function (e) {};
scwin.sbm_excelUpload_submiterror = async function (e) {};
scwin.sbm_update_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  gr_tariff.setColumnVisible("newPchsAmt", false);
  scwin.f_Retrieve();
};
scwin.sbm_update_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_joblevel_submitdone = async function (e) {
  if (ds_joblevel.getRowCount() > 0) {
    co_lc_logisticsBranch.setNodeSet("data:ds_joblevel", "lobranCd", "lobranCd");
    let foundIdx = -1;
    for (let i = 0; i < ds_joblevel.getRowCount(); i++) {
      if (ds_joblevel.getCellData(i, "lobranCd") == scwin.sLoUpperLobranCd) {
        foundIdx = i;
        break;
      }
    }
    if (foundIdx > 0) {
      co_lc_logisticsBranch.setSelectedIndex(foundIdx);
    } else {
      co_lc_logisticsBranch.setSelectedIndex(0);
    }
  }
};
scwin.sbm_joblevel_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_tariff_onloadcompleted = async function (e) {
  let rowCnt = ds_tariff.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
  }
  $c.gus.cfShowTotalRows($p, spa_totalRow, rowCnt);
};
scwin.bilgMchtCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(bilgMchtCd, bilgMcht, '1');
};
scwin.bilgMcht_onchange = function (e) {
  scwin.f_chkOpenCommonPopUp(bilgMcht, bilgMchtCd, '1', false);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_Reset();
};
scwin.btn_Upt_onclick = function (e) {
  scwin.f_Update();
};
scwin.btn_excel_onclick = function (e) {
  scwin.f_toExcel(gr_tariff);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_lc_logisticsBranch',search:'start',style:'width:200px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화주명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgMcht',codeId:'bilgMchtCd',nameId:'bilgMcht',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'ctrtNo',search:'start',style:'width:250px;',submenuSize:'auto',mandatory:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_tariff',id:'gr_tariff',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'alloccarBranCd',inputType:'text',value:'점소코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'alloccarBranNm',inputType:'text',value:'점소',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',value:'계약번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trfClsCd',inputType:'text',value:'요욜종류',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trfClsNm',inputType:'text',value:'요욜구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'text',value:'적용일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictCd',inputType:'text',value:'출발코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictNm',inputType:'text',value:'출발지명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictCd',inputType:'text',value:'도착코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'text',value:'도착지명',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',value:'품명코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'commNm',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkUnitCd',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'copCoClntNo',value:'협력업체코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqKndCd',value:'차종',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqNrmCd',value:'규격코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqNrmNm',value:'규격',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsAmt',value:'요율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'newPchsAmt',value:'변경요율',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'expireDt',value:'만기일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'odrKndCd',value:'오더종류코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'trfAdptCd',value:'요율적용코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStHh',value:'작업시작시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkEndHh',value:'작업종료시간',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'alloccarBranCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'alloccarBranNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trfClsCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trfClsNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictNm',inputType:'text',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'text',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'commCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'commNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkUnitCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'copCoClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqKndCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqNrmCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqNrmNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'newPchsAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'expireDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'odrKndCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'trfAdptCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkEndHh',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Upt','ev:onclick':'scwin.btn_Upt_onclick',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]}]}]}]}]}]}]}]})