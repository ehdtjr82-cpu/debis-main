/*amd /AI/op_202_02_41b.xml 64841 ef62bf64fedfc9ce8910d93e47f15ea77d038672065c9888ccb951bff6df79c7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'배차점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'선박명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDistrictCd',name:'출발지권역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvDistrictCd',name:'도착지권역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'출발예정일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'도착예정일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtClsCd',name:'일자구분조건',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarPicId',name:'배차담당자아이디',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'라인',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptNowWrkPlCd',name:'현위치',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclClntNo',name:'협력업체',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'twinkleYn',name:'반짝임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'하선마감일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDepPortDd',name:'입출항일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opswgDd',name:'야적일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picConfirmYn',name:'확인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'출발예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'도착예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'도착예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd1',name:'오더20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd2',name:'오더40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd3',name:'배차20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd4',name:'배차40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd5',name:'잔량20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd6',name:'잔량40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd7',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd8',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd_portcnt',name:'선박항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlPortcnt',name:'양하선박항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cyShippingCd',name:'CY선적코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ts_vsslCd_portcnt',name:'TS선박항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslNm',name:'TS선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortcnt',name:'TS항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rettlYn',name:'검색기포함여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKnd',name:'차량종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrm',name:'차량규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisKnd',name:'샤시종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'소속구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictNm',name:'권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trsNo',name:'TRS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'휴대폰',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisNo',name:'샤시번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrSeq',name:'SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'CNTR NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yardLoc',name:'야드위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'SEAL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weight',name:'WEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xrayLupTrgtYn',name:'검색기대상',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rettlYn',name:'검색기오더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'socYn',name:'SOC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'leaseYn',name:'LES',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'PORT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosNm',name:'현재위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtYn',name:'반납여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtCopinoYn',name:'반납COPINO전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temper',name:'온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dangerCd',name:'위험물',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipCd',name:'모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'operCd',name:'선사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curStat',name:'상태',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_save',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excelTmp'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yardLoc',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'operCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curStat',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excel'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yardLoc',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'operCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curStat',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_HlcContainerList'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seq',name:'SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yardLoc',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'operCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curStat',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_hiddenSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'배차점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'선박명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDistrictCd',name:'출발지권역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvDistrictCd',name:'도착지권역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'출발예정일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'도착예정일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtClsCd',name:'일자구분조건',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarPicId',name:'배차담당자아이디',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'라인',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptNowWrkPlCd',name:'현위치',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclClntNo',name:'협력업체',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkplan.transwrkplan.RetrieveShuttleTransWorkVolumeClntCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_results","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkplan.transwrkplan.SaveContainerAssignInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_save","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_upload_save',action:'/ds.op.wrkplan.transwrkplan.SaveContainerYardLocationInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_excelTmp","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_upload_save_submitdone','ev:submiterror':'scwin.sbm_upload_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveContainer',action:'/ds.op.wrkplan.transwrkplan.RetrieveShuttleContainerInformationClntCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_results2","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_results2","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveContainer_submitdone','ev:submiterror':'scwin.sbm_retrieveContainer_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.btnFlag = "";
scwin.rowFlag = "";
scwin.pos_groupCode = 0;
scwin.dateStr = "";
scwin.firstDateStr = "";
scwin.gv_userClsCd = "";
scwin.gv_clntNo = "";
scwin.gv_clntNm = "";
scwin.gv_loabranCd = "";
scwin.isRetrieve = false;
scwin.count = 0;
scwin.colorChangeInterval = null;
scwin.CARGO_CLS_CD_CONTAINER = "C";
scwin.UPPER_LOBRAN_CD_BUSAN = "PUS";
scwin.PCHS_CLNT_CLS_CD_HIRECAR = "H";
scwin.ODR_KND_CD_IMP_CVSSL_CNTR_ODR = "C1";
scwin.ODR_KND_CD_EXP_CVSSL_CNTR_ODR = "C3";
scwin.ODR_KND_CD_TS_ODR = "CT";
scwin.ODR_KND_CD_CY_IMP_TS_ODR = "CS";
scwin.ODR_KND_CD_CY_EXP_TS_ODR = "CW";
scwin.URL_CONTAINER_SHUTTLE_TRANS_VOLUME = "/ui/ds/op/wrkplan/transwrkplan/op_202_02_07b.xml";
scwin.strBulkOrderUrl = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_02t.xml";
scwin.strContainerOrderUrl = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_11t.xml";
scwin.txt_vsslNm = "";
scwin.txt_dptWrkPlNm = "";
scwin.txt_arvWrkPlNm = "";
scwin.txt_dptNowWrkPlNm = "";
scwin.txt_alloccarPicNm = "";
scwin.txt_vehclClntNm = "";
scwin.txt_lineNm = "";
scwin.em_wrkStDt = "";
scwin.em_wrkEndDt = "";
scwin.em_dptWrkPlCd = "";
scwin.em_arvWrkPlCd = "";
scwin.em_odrNo = "";
scwin.em_vsslCd = "";
scwin.em_portcnt = "";
scwin.em_dptNowWrkPlCd = "";
scwin.em_alloccarPicId = "";
scwin.onpageload = function () {
  scwin.dateStr = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.firstDateStr = scwin.dateStr.substring(0, 6) + "01";
  scwin.gv_userClsCd = $c.ses.getUserClsCd();
  scwin.gv_clntNo = $c.ses.getClntNo();
  scwin.gv_clntNm = $c.ses.getClntNm();
  scwin.gv_loabranCd = $c.ses.getLoUpperLobranCd();
  scwin.f_switchObjMode(1);
};
scwin.onUdcCompleted = function () {
  udc_wrkDt.setInitDate(scwin.dateStr, scwin.dateStr);
  lc_cargoClsCd.setValue(scwin.CARGO_CLS_CD_CONTAINER);
  lc_lobranCd.setValue(scwin.gv_loabranCd);
  if ($c.gus.cfIsNull($p, lc_lobranCd.getValue())) {
    lc_lobranCd.setValue(scwin.UPPER_LOBRAN_CD_BUSAN);
  }
  if (lc_lobranCd.getValue() == scwin.UPPER_LOBRAN_CD_BUSAN) {
    scwin.f_districtSearch("2");
  } else {
    scwin.f_districtSearch("1");
  }
  if (scwin.gv_userClsCd != "01") {
    em_vehclClntNo.setValue(scwin.gv_clntNo);
    scwin.txt_vehclClntNm = scwin.gv_clntNm;
    $c.gus.cfDisableObjects($p, [em_vehclClntNo]);
  }
  scwin.colorChangeInterval = setInterval(function () {
    scwin.colorChange();
  }, 1000);
};
scwin.f_switchObjMode = function (gubun) {
  switch (gubun) {
    case 1:
      break;
    case 2:
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
      break;
    case 8:
      break;
    default:
      break;
  }
};
scwin.f_grdHeiht = function (objGrdId, size) {
  let objGrd = WebSquare.util.getComponentById(objGrdId);
  if (objGrd) {
    let strHeight = objGrd.getStyle("height");
    let intHeight = parseInt(strHeight.replace("px", ""));
    intHeight = intHeight + size;
    if (intHeight > 0) {
      objGrd.setStyle("height", intHeight + "px");
    }
  }
};
scwin.f_emclntExcel = function (gubun) {
  if (gubun == null || gubun == "" || gubun == 0) {
    $c.data.downloadGridViewExcel($p, gr_results, {
      "fileName": "셔틀운송작업물량차량조회.xlsx",
      "sheetName": "셔틀운송작업물량차량조회"
    });
  } else if (gubun == 1) {
    $c.data.downloadGridViewExcel($p, gr_excelResults, {
      "fileName": "셔틀운송작업물량차량조회.xlsx",
      "sheetName": "셔틀운송작업물량차량조회"
    });
  } else if (gubun == 2) {
    $c.data.downloadGridViewExcel($p, gr_results2, {
      "fileName": "셔틀운송작업물량차량조회.xlsx",
      "sheetName": "셔틀운송작업물량차량조회"
    });
  }
};
scwin.f_Retrieve = async function (gubun) {
  if (gubun == null || gubun == "" || gubun == 0) {
    let chkValid = await $c.gus.cfValidate($p, [udc_wrkDt]);
    if (!chkValid) {
      return;
    }
    let stDt = udc_wrkDt.getFromValue();
    let edDt = udc_wrkDt.getToValue();
    if (!$c.gus.cfIsAfterDate($p, stDt, edDt)) {
      await $c.gus.cfAlertMsg($p, "MSG_CM_ERR_039");
      return;
    }
    if (em_vehclClntNo.getValue().trim() == "") {
      await $c.win.alert($p, "협력업체 정보를 입력하여 주십시오.");
      return;
    }
    ds_results.removeAll();
    ds_results1.removeAll();
    ds_results2.removeAll();
    dma_search.set("cargoClsCd", lc_cargoClsCd.getValue());
    dma_search.set("lobranCd", lc_lobranCd.getValue());
    dma_search.set("odrKndCd", lc_odrKndCd.getValue());
    dma_search.set("odrNo", scwin.em_odrNo);
    dma_search.set("vsslCd", scwin.em_vsslCd);
    dma_search.set("portcnt", scwin.em_portcnt);
    dma_search.set("dptDistrictCd", lc_dptDistrictCd.getValue());
    dma_search.set("arvDistrictCd", lc_arvDistrictCd.getValue());
    dma_search.set("dptWrkPlCd", scwin.em_dptWrkPlCd);
    dma_search.set("dptNowWrkPlCd", scwin.em_dptNowWrkPlCd);
    dma_search.set("arvWrkPlCd", scwin.em_arvWrkPlCd);
    dma_search.set("wrkStDt", stDt);
    dma_search.set("wrkEndDt", edDt);
    dma_search.set("wrkDtClsCd", lc_wrkDtClsCd.getValue());
    dma_search.set("alloccarPicId", scwin.em_alloccarPicId);
    dma_search.set("lineCd", ed_lineCd.getValue().trim());
    dma_search.set("vehclClntNo", em_vehclClntNo.getValue().trim());
    scwin.btnFlag = "";
    scwin.rowFlag = "";
    scwin.isRetrieve = true;
    await $c.sbm.execute($p, sbm_retrieve);
  } else if (gubun == 2) {
    let rowPos = ds_results.getRowPosition();
    if (rowPos < 0) {
      return;
    }
    let odrNoVal = ds_results.getCellData(rowPos, "odrNo");
    if (odrNoVal == null || odrNoVal == "") {
      return;
    }
    dma_search.set("odrNo", odrNoVal);
    dma_search.set("dptNowWrkPlCd", scwin.em_dptNowWrkPlCd);
    dma_search.set("vehclClntNo", em_vehclClntNo.getValue().trim());
    await $c.sbm.execute($p, sbm_retrieveContainer);
  }
};
scwin.f_Save = function () {};
scwin.f_Delete = function () {};
scwin.f_Cancel = function () {};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList;
  switch (disGubun) {
    case 1:
      udc_line.ilCommonPopUp(scwin.callbackVsslCd, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      udc_line.ilCommonPopUp(scwin.callbackDptWrkPl, pCode, pName, pClose, null, null, null, null, ",,,,,2", null, null, null, null, null, pAllSearch, null);
      break;
    case 3:
      udc_line.ilCommonPopUp(scwin.callbackArvWrkPl, pCode, pName, pClose, null, null, null, null, ",,,,,2", null, null, null, null, null, pAllSearch, null);
      break;
    case 4:
      udc_line.ilCommonPopUp(scwin.callbackLineCd, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 5:
      udc_line.ilCommonPopUp(scwin.callbackAlloccarPic, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 6:
      udc_line.ilCommonPopUp(scwin.callbackDptNowWrkPl, pCode, pName, pClose, null, null, null, null, ",,,,,2", null, null, null, null, null, pAllSearch, null);
      break;
    case 7:
      udc_vehclClnt.ilCommonPopUp(scwin.callbackVehclClnt, pCode, pName, pClose, null, null, null, null, scwin.PCHS_CLNT_CLS_CD_HIRECAR, null, null, null, null, null, pAllSearch, "협력업체,협력업체코드/명,");
      break;
  }
};
scwin.callbackVsslCd = function (rtnList) {
  if (rtnList && rtnList.length > 0) {
    scwin.em_vsslCd = rtnList[0] || "";
    scwin.txt_vsslNm = rtnList[1] || "";
  }
};
scwin.callbackDptWrkPl = function (rtnList) {
  if (rtnList && rtnList.length > 0) {
    scwin.em_dptWrkPlCd = rtnList[0] || "";
    scwin.txt_dptWrkPlNm = rtnList[1] || "";
  }
};
scwin.callbackArvWrkPl = function (rtnList) {
  if (rtnList && rtnList.length > 0) {
    scwin.em_arvWrkPlCd = rtnList[0] || "";
    scwin.txt_arvWrkPlNm = rtnList[1] || "";
  }
};
scwin.callbackLineCd = function (rtnList) {
  if (rtnList && rtnList.length > 0) {
    ed_lineCd.setValue(rtnList[0] || "");
    scwin.txt_lineNm = rtnList[1] || "";
  }
};
scwin.callbackAlloccarPic = function (rtnList) {
  if (rtnList && rtnList.length > 0) {
    scwin.em_alloccarPicId = rtnList[0] || "";
    scwin.txt_alloccarPicNm = rtnList[1] || "";
  }
};
scwin.callbackDptNowWrkPl = function (rtnList) {
  if (rtnList && rtnList.length > 0) {
    scwin.em_dptNowWrkPlCd = rtnList[0] || "";
    scwin.txt_dptNowWrkPlNm = rtnList[1] || "";
  }
};
scwin.callbackVehclClnt = function (rtnList) {
  if (rtnList && rtnList.length > 0) {
    em_vehclClntNo.setValue(rtnList[0] || "");
    scwin.txt_vehclClntNm = rtnList[1] || "";
  }
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObjVal, disGubun, isCode) {
  let pVal = "";
  if (isCode == null || isCode == true) {
    if (typeof inObj === "string") {
      pVal = inObj;
    } else if (inObj && typeof inObj.getValue === "function") {
      pVal = inObj.getValue();
    } else {
      pVal = inObj || "";
    }
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    pVal = pairObjVal || "";
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_AddRow = function (gubun) {};
scwin.f_DeleteRow = function (gubun) {};
scwin.f_CancelRow = function (gubun) {};
scwin.f_FieldClear = function () {
  lc_cargoClsCd.setValue("");
  lc_lobranCd.setValue("");
  lc_odrKndCd.setValue("");
  lc_wrkDtClsCd.setValue("");
  lc_dptDistrictCd.setValue("");
  lc_arvDistrictCd.setValue("");
  em_vehclClntNo.setValue("");
  ed_lineCd.setValue("");
  scwin.txt_vehclClntNm = "";
  scwin.txt_lineNm = "";
  scwin.em_vsslCd = "";
  scwin.txt_vsslNm = "";
  scwin.em_dptWrkPlCd = "";
  scwin.txt_dptWrkPlNm = "";
  scwin.em_arvWrkPlCd = "";
  scwin.txt_arvWrkPlNm = "";
  scwin.em_odrNo = "";
  scwin.em_portcnt = "";
  scwin.em_dptNowWrkPlCd = "";
  scwin.txt_dptNowWrkPlNm = "";
  scwin.em_alloccarPicId = "";
  scwin.txt_alloccarPicNm = "";
  scwin.em_wrkStDt = "";
  scwin.em_wrkEndDt = "";
  scwin.onUdcCompleted();
};
scwin.f_orderDetail = function () {};
scwin.f_districtSearch = function (gubun) {
  // TODO: 권역콤보 데이터 동적 변경 - 서버 공통코드 연동 필요
  if (gubun == "1") {
    lc_dptDistrictCd.setSelectedIndex(0);
    lc_arvDistrictCd.setSelectedIndex(0);
  } else if (gubun == "2") {
    lc_dptDistrictCd.setSelectedIndex(0);
    lc_arvDistrictCd.setSelectedIndex(0);
  } else {
    lc_dptDistrictCd.setSelectedIndex(0);
    lc_arvDistrictCd.setSelectedIndex(0);
  }
};
scwin.f_goWrkIndict = async function () {
  if (ds_results.getRowCount() == 0 || ds_results.getRowPosition() < 0) {
    await $c.gus.cfAlertMsg($p, "MSG_CM_ERR_056", ["오더"]);
    return;
  } else {
    let rowPos = ds_results.getRowPosition();
    let v_lobranCd = lc_lobranCd.getValue();
    let v_wrkStDt = ds_results.getCellData(rowPos, "wrkStDt");
    let v_wrkEndDt = ds_results.getCellData(rowPos, "wrkEndDt");
    let v_odrNo = ds_results.getCellData(rowPos, "odrNo");
    if ($c.gus.cfIsNull($p, v_odrNo)) {
      await $c.gus.cfAlertMsg($p, "오더를 선택하십시요");
      return;
    }
    let param = {
      odrNo: v_odrNo,
      lobranCd: v_lobranCd,
      wrkStDt: v_wrkStDt,
      wrkEndDt: v_wrkEndDt
    };
    $c.win.openMenu($p, "셔틀운송작업지시등록(컨테이너)", scwin.URL_CONTAINER_SHUTTLE_TRANS_VOLUME, "op_202_02_07b.xml", param);
  }
};
scwin.f_printNew = async function (gubun) {
  let checkCnt = 0;
  let batchYn = 0;
  let v_odrNo = "";
  let tmpStr = "";
  let pURL = "";
  if (ds_results.getRowCount() == 0 || ds_results.getRowPosition() < 0) {
    await $c.gus.cfAlertMsg($p, "MSG_CM_ERR_056", ["오더"]);
    return;
  } else {
    let tmpOdr = "";
    for (let i = 0; i < ds_results.getRowCount(); i++) {
      if (scwin.f_IsSelected(i)) {
        if (checkCnt == 0) {
          tmpStr = tmpStr + ds_results.getCellData(i, "odrNo");
        } else {
          if (tmpOdr != ds_results.getCellData(i, "odrNo")) {
            tmpStr = tmpStr + "," + ds_results.getCellData(i, "odrNo");
          }
        }
        tmpOdr = ds_results.getCellData(i, "odrNo");
        checkCnt++;
      }
    }
    if (checkCnt > 1) {
      batchYn = 1;
      v_odrNo = tmpStr;
    } else {
      let rowPos = ds_results.getRowPosition();
      v_odrNo = ds_results.getCellData(rowPos, "odrNo");
    }
    switch (gubun) {
      case 1:
        pURL = "/ui/ds/op/wrkplan/transwrkplan/op_202_02_05r.xml";
        await $c.win.openPopup($p, pURL, {
          width: 530,
          height: 300,
          modal: true,
          data: {
            odrNo: v_odrNo,
            batchYn: batchYn
          }
        });
        break;
      case 2:
        pURL = "/ui/ds/op/wrkplan/transwrkplan/op_202_02_04r.xml";
        await $c.win.openPopup($p, pURL, {
          width: 530,
          height: 300,
          modal: true,
          data: {
            odrNo: v_odrNo,
            batchYn: batchYn
          }
        });
        break;
      case 3:
        if (batchYn) {
          scwin.f_print(4);
        } else {
          scwin.f_print(3);
        }
        break;
      default:
        break;
    }
  }
};
scwin.f_CheckFileExt = function (ext, path) {
  ext = ext.toUpperCase();
  path = path.toUpperCase();
  let elen = ext.length;
  let flen = path.length;
  return ext == path.substring(flen - elen, flen);
};
scwin.f_upload = async function () {
  // TODO: 파일 업로드 기능은 WebSquare 파일 업로드 컴포넌트로 대체 필요
  ds_excel.removeAll();
  ds_excelTmp.removeAll();

  // TODO: inputF.Open() → WebSquare 파일 선택 컴포넌트 사용
  let path = "";
  if (scwin.f_CheckFileExt("CSV", path) == false) {
    await $c.gus.cfAlertMsg($p, "파일이 CSV인 것만 Import가 가능합니다.\n엑셀 파일을 CSV로 변환 하시어 Import하시기 바랍니다.");
    return;
  }
  $c.gus.cfProgressWinOpen($p);

  // TODO: CSV 파일 데이터 로딩 → WebSquare 엑셀 업로드 API 사용

  if (ds_excel.getRowCount() == 0) {
    $c.gus.cfProgressWinClose($p);
    await $c.gus.cfAlertMsg($p, "MSG_CM_ERR_003");
    return;
  }
  $c.gus.cfProgressWinClose($p);
  let chk = await $c.win.confirm($p, "업로드작업이 완료되었습니다. 저장하시겠습니까?");
  if (chk) {
    await $c.sbm.execute($p, sbm_upload_save);
  }
};
scwin.f_print = async function (gubun) {
  if (ds_results.getRowCount() == 0 || ds_results.getRowPosition() < 0) {
    await $c.gus.cfAlertMsg($p, "MSG_CM_ERR_056", ["오더"]);
    return;
  } else {
    let rowPos = ds_results.getRowPosition();
    let v_odrNo = ds_results.getCellData(rowPos, "odrNo");
    switch (gubun) {
      case 1:
        if ($c.gus.cfIsNull($p, v_odrNo)) {
          await $c.gus.cfAlertMsg($p, "오더를 선택하십시요");
          return;
        }
        let pURL1 = "/ui/ds/op/wrkplan/transwrkplan/op_202_02_05r.xml";
        await $c.win.openPopup($p, pURL1, {
          width: 530,
          height: 300,
          modal: true,
          data: {
            odrNo: v_odrNo
          }
        });
        break;
      case 2:
        if ($c.gus.cfIsNull($p, v_odrNo)) {
          await $c.gus.cfAlertMsg($p, "오더를 선택하십시요");
          return;
        }
        let pURL2 = "/ui/ds/op/wrkplan/transwrkplan/op_202_02_04r.xml";
        await $c.win.openPopup($p, pURL2, {
          width: 530,
          height: 300,
          modal: true,
          data: {
            odrNo: v_odrNo
          }
        });
        break;
      case 3:
        if ($c.gus.cfIsNull($p, v_odrNo)) {
          await $c.gus.cfAlertMsg($p, "오더를 선택하십시요");
          return;
        }
        let odiParam3 = {
          reportId: "op_202_02_03r",
          odrNo: v_odrNo
        };
        let viewerParam3 = {
          "viewer.zoom": "100"
        };
        $c.gus.cfOZPreview($p, "/ds/op/wrkplan/transwrkplan/op_202_02_03r.ozr", odiParam3, viewerParam3, {});
        break;
      case 4:
        let checkCnt4 = 0;
        for (let i = 0; i < ds_results.getRowCount(); i++) {
          if (scwin.f_IsSelected(i)) checkCnt4++;
        }
        if (checkCnt4 == 0) {
          await $c.gus.cfAlertMsg($p, "일괄 발행할 오더를 선택하십시요.");
          return;
        }
        $c.gus.OZStartBatch($p);
        let printCnt = 0;
        let firstOdrNo = "";
        let chkOdrNo = "";
        for (let i = 0; i < ds_results.getRowCount(); i++) {
          if (ds_results.getCellData(i, "chk") == "T") {
            let batchOdrNo = ds_results.getCellData(i, "odrNo");
            if (printCnt == 0) firstOdrNo = batchOdrNo;
            if (chkOdrNo == batchOdrNo) continue;
            if (chkOdrNo !== batchOdrNo) chkOdrNo = batchOdrNo;
            let odiParam4 = {
              reportId: "op_202_02_03r",
              odrNo: batchOdrNo
            };
            let viewerParam4 = {
              "viewer.zoom": "100",
              "print.mode": "silent",
              "viewer.mode": "print",
              "viewer.useprogressbar": "false"
            };
            $c.gus.cfOZPreview($p, "/ds/op/wrkplan/transwrkplan/op_202_02_03r.ozr", odiParam4, viewerParam4, {});
            printCnt++;
          }
        }
        $c.gus.OZExecuteBatch($p);
        if (printCnt == 1) await $c.win.alert($p, firstOdrNo + "의 오더Sheet를 프린터로 전송했습니다.");
        if (printCnt > 1) await $c.win.alert($p, firstOdrNo + "외에 " + (printCnt - 1) + "건의 오더Sheet를 프린터로 전송했습니다.");
        break;
      default:
        break;
    }
  }
};
scwin.f_IsSelected = function (row) {
  if (row < 0) return false;
  if (ds_results.getCellData(row, "chk") == "T") {
    return true;
  } else {
    return false;
  }
};
scwin.f_retrievePopup = async function () {
  if (ds_results.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, "셔틀운송작업물량차량조회를 먼저 하십시요");
  } else {
    let args = {};
    args.cargoClsCd = lc_cargoClsCd.getValue();
    args.lobranCd = lc_lobranCd.getValue();
    args.odrKndCd = lc_odrKndCd.getValue();
    args.odrNo = scwin.em_odrNo;
    args.vsslCd = scwin.em_vsslCd;
    args.portcnt = scwin.em_portcnt;
    args.dptDistrictCd = lc_dptDistrictCd.getValue();
    args.arvDistrictCd = lc_arvDistrictCd.getValue();
    args.dptWrkPlCd = scwin.em_dptWrkPlCd;
    args.arvWrkPlCd = scwin.em_arvWrkPlCd;
    args.wrkStDt = udc_wrkDt.getFromValue();
    args.wrkEndDt = udc_wrkDt.getToValue();
    args.wrkDtClsCd = lc_wrkDtClsCd.getValue();
    args.alloccarPicId = scwin.em_alloccarPicId;
    args.lineCd = ed_lineCd.getValue().trim();
    args.dptNowWrkPlCd = scwin.em_dptNowWrkPlCd;
    args.picConfirmYn = "";
    await $c.win.openPopup($p, "/ui/ds/op/wrkplan/transwrkplan/op_202_02_07p.xml", {
      width: 700,
      height: 420,
      modal: true,
      data: args
    });
  }
};
scwin.f_inboundPopup = async function () {
  let v_lobranCd = lc_lobranCd.getValue();
  let v_completeYn = "";
  let v_arvWrkPlCd = scwin.em_arvWrkPlCd;
  let v_wrkStDt = udc_wrkDt.getFromValue();
  let v_wrkEndDt = udc_wrkDt.getToValue();
  await $c.win.openPopup($p, "/ui/ds/op/wrkplan/transwrkplan/op_202_02_40p.xml", {
    width: 1000,
    height: 700,
    modal: true,
    data: {
      lobranCd: v_lobranCd,
      completeYn: v_completeYn,
      arvWrkPlCd: v_arvWrkPlCd,
      wrkStDt: v_wrkStDt,
      wrkEndDt: v_wrkEndDt
    }
  });
};
scwin.colorChange = function () {
  // TODO: 그리드 셀 배경색 깜빡임 효과 - WebSquare gridView에서는 displayFormatter 또는 CSS 애니메이션으로 대체 필요
  scwin.count++;
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_results.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, "MSG_CM_WRN_002");
    return;
  }
  scwin.f_switchObjMode(5);
  $c.gus.cfCopyDataMap($p, dma_search, dma_hiddenSearch);
  scwin.isRetrieve = false;
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save_submitdone = async function (e) {
  scwin.rowFlag = "";
  await $c.gus.cfAlertMsg($p, "MSG_CM_INF_001");
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_upload_save_submitdone = async function (e) {
  scwin.rowFlag = "";
  await $c.gus.cfAlertMsg($p, "MSG_CM_INF_001");
  scwin.f_Retrieve();
};
scwin.sbm_upload_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveContainer_submitdone = function (e) {
  let rowCnt = ds_results2.getRowCount();
  if (rowCnt == 0) {
    return;
  }
};
scwin.sbm_retrieveContainer_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.gr_results_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_results.getRowCount() == 0) {
    return;
  }
};
scwin.gr_results_oncelldblclick = function (rowIndex, columnIndex, columnId) {};
scwin.ds_results_onrowpositionchange = function (rowIndex, oldRow) {
  if (ds_results.getRowCount() == 0) {
    return;
  }
  if (scwin.isRetrieve) {
    return;
  }
  scwin.f_Retrieve(2);
};
scwin.lc_lobranCd_onchange = function (e) {
  if (lc_lobranCd.getValue() == scwin.UPPER_LOBRAN_CD_BUSAN) {
    scwin.f_districtSearch("2");
  } else {
    scwin.f_districtSearch("1");
  }
};
scwin.lc_dptDistrictCd_onchange = function (e) {
  ds_results.setFilterBypass(function (rowData) {
    return scwin.f_onFilterRow(rowData);
  });
};
scwin.lc_arvDistrictCd_onchange = function (e) {
  ds_results.setFilterBypass(function (rowData) {
    return scwin.f_onFilterRow(rowData);
  });
};
scwin.f_onFilterRow = function (rowData) {
  // TODO: WebSquare 필터 API로 대체 - 원본 OnFilter 로직 참고
  return true;
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_print3_onclick = function (e) {
  scwin.f_printNew(3);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_cargoClsCd',search:'start',style:'width:150px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배차점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lobranCd',search:'start',style:'width:150px;',submenuSize:'auto',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_odrKndCd',search:'start',style:'width:200px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'lc_wrkDtClsCd',search:'start',style:'width:120px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_wrkDt',refDataMap:'',refEdDt:'ica_wrkEndDt',refStDt:'ica_wrkStDt',style:''}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'협력업체',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_vehclClnt',codeId:'em_vehclClntNo',nameId:'txt_vehclClntNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자확인',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_dptDistrictCd',search:'start',style:'width:150px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'완료여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_arvDistrictCd',search:'start',style:'width:150px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_line',codeId:'ed_lineCd',nameId:'txt_lineNm',hideName:'Y',popupID:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'운송물량',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_excelTmp',style:'',id:'gr_results',visibleRowNum:'4',class:'wq_gvw',fixedColumn:'1',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'cntrNo',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'yardLoc',value:'오더종류',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'operCd',value:'오더번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'curStat',value:'출발지',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'arvWrkPlNm',value:'도착지',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'twinkleYn',value:'반짝임',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arrvlportDt',value:'하선마감일',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arDepPortDd',value:'입출항일',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'opswgDd',value:'야적일',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'alloccarPicId',value:'담당자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'picConfirmYn',value:'확인',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStDt',value:'출발예정<br/>일시',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkEndDt',value:'도착예정<br/>일시',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column53',value:'오더',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column41',value:'배차',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column117',value:'잔량',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'lineCd',value:'LINE',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'vsslCd_portcnt',value:'선박항차',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'tmlPortcnt',value:'양하선박항차',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cyShippingCd',value:'CY선적코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ts_vsslCd_portcnt',value:'TS선박항차',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rettlYn',value:'검색기<br/>포함여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'mrn',value:'MRN',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptDistrictNm',value:'출발권역',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvDistrictNm',value:'도착권역',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrNo',displayMode:'label',value:'20'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'yardLoc',displayMode:'label',value:'40'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'operCd',displayMode:'label',value:'20'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'curStat',displayMode:'label',value:'40'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrSizCd5',value:'20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrSizCd6',value:'40',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'cntrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'yardLoc',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'operCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'curStat',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'twinkleYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arrvlportDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arDepPortDd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'opswgDd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'alloccarPicId',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'picConfirmYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkEndDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSizCd1',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSizCd2',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSizCd3',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSizCd4',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrSizCd5',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrSizCd6',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'lineCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'vsslCd_portcnt',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'tmlPortcnt',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cyShippingCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ts_vsslCd_portcnt',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rettlYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'mrn',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptDistrictNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvDistrictNm',value:'',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column68',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column56',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column52',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column44',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column120',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column116',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column112',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column108',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column104',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column100',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column92',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column88',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'컨테이너',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_results2',id:'gr_results2',style:'',visibleRowNum:'5',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',value:'SEQ',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',value:'CNTR NO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'yardLoc',inputType:'text',value:'야드위치',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo',inputType:'text',value:'SEAL NO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',value:'B/L NO',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',value:'SIZE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',value:'TYPE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',value:'F/E',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'weight',inputType:'text',value:'WEIGHT',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'xrayLupTrgtYn',inputType:'text',value:'검색기<br/>대상',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rettlYn',value:'검색기<br/>오더',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'socYn',value:'SOC',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'leaseYn',value:'LES',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'destPortCd',value:'PORT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'currPosNm',value:'현재위치',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rtYn',value:'반납<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rtCopinoYn',value:'반납COPINO<br/>전송여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'temper',value:'온도',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dangerCd',value:'위험물',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptDistrictNm',value:'출발권역',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvDistrictNm',value:'도착권역',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'dptWrkPlNm',value:'출발지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'arvWrkPlNm',value:'도착지',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'yardLoc',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'weight',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'xrayLupTrgtYn',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rettlYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'socYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'leaseYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'destPortCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'currPosNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rtYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rtCopinoYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'temper',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dangerCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptDistrictNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvDistrictNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'dptWrkPlNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_results2',id:'gr_excel',style:'',visibleRowNum:'5',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',value:'SEQ',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',value:'CNTR NO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'yardLoc',inputType:'text',value:'야드위치',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'shipCd',value:'모선항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'operCd',value:'선사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'curStat',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo',inputType:'text',value:'SEAL NO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',value:'B/L NO',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',value:'SIZE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',value:'TYPE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',value:'F/E',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'weight',inputType:'text',value:'WEIGHT',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'xrayLupTrgtYn',inputType:'text',value:'검색기<br/>대상',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rettlYn',inputType:'text',value:'검색기<br/>오더',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'socYn',inputType:'text',value:'SOC',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'leaseYn',inputType:'text',value:'LES',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'destPortCd',inputType:'text',value:'PORT',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currPosNm',inputType:'text',value:'현재위치',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'temper',inputType:'text',value:'온도',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dangerCd',inputType:'text',value:'위험물',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'dptDistrictNm',inputType:'text',value:'출발권역',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'arvDistrictNm',inputType:'text',value:'도착권역',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',value:'출발지',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',value:'도착지',width:'80'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'yardLoc',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'shipCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'operCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'curStat',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'weight',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'xrayLupTrgtYn',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rettlYn',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'socYn',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'leaseYn',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'destPortCd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currPosNm',inputType:'text',textAlign:'left',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'temper',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dangerCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictNm',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',textAlign:'left',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',textAlign:'left',width:'80'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_print3',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_print3_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'오더SHEET'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'운송차량',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_results1',style:'',autoFit:'allColumn',id:'gr_excelResults',visibleRowNum:'5',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',value:'협력업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclKnd',value:'차량종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNrm',value:'차량규격',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'chassisKnd',value:'샤시종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'posnClsNm',value:'소속구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'logisWrkDistrictNm',value:'권역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'drvNm',value:'기사명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'trsNo',value:'TRS',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mpNo',value:'휴대폰',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'chassisNo',value:'샤시번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclKnd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNrm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'chassisKnd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'posnClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'logisWrkDistrictNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'drvNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'trsNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mpNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'chassisNo',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]}]}]}]})