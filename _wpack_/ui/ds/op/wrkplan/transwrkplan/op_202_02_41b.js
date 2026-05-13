/*amd /ui/ds/op/wrkplan/transwrkplan/op_202_02_41b.xml 83314 682001c71a36bca5e5d21363ebb87481bf2e221070ed33742daf79017c21d009 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'배차점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'선박명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDistrictCd',name:'출발지권역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvDistrictCd',name:'도착지권역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'출발예정일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'도착예정일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtClsCd',name:'일자구분조건',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarPicId',name:'배차담당자아이디',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'라인',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptNowWrkPlCd',name:'현위치',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclClntNo',name:'협력업체',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_results_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'twinkleYn',name:'반짝임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'하선마감일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDepPortDd',name:'입출항일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opswgDd',name:'야적일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picConfirmYn',name:'확인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'출발예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'도착예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'도착예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd1',name:'오더20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd2',name:'오더40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd3',name:'배차20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd4',name:'배차40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd5',name:'잔량20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd6',name:'잔량40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd7',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd8',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd_portcnt',name:'선박항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlPortcnt',name:'양하선박항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cyShippingCd',name:'CY선적코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ts_vsslCd_portcnt',name:'TS선박항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslNm',name:'TS선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortcnt',name:'TS항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rettlYn',name:'검색기포함여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkSt',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'name41',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKnd',name:'차량종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrm',name:'차량규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisKnd',name:'샤시종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'소속구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictNm',name:'권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trsNo',name:'TRS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'휴대폰',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisNo',name:'샤시번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrSeq',name:'SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'CNTR NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yardLoc',name:'야드위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'SEAL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weight',name:'WEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xrayLupTrgtYn',name:'검색기대상',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rettlYn',name:'검색기오더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'socYn',name:'SOC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'leaseYn',name:'LES',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'PORT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosNm',name:'현재위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtYn',name:'반납여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtCopinoYn',name:'반납COPINO전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temper',name:'온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dangerCd',name:'위험물',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipCd',name:'모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'operCd',name:'선사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curStat',name:'상태',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_save',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excelTmp'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yardLoc',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'operCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curStat',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excel'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yardLoc',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'operCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curStat',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_HlcContainerList'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seq',name:'SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yardLoc',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'operCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curStat',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_hiddenSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'배차점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'선박명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDistrictCd',name:'출발지권역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvDistrictCd',name:'도착지권역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'출발예정일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'도착예정일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtClsCd',name:'일자구분조건',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarPicId',name:'배차담당자아이디',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'라인',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptNowWrkPlCd',name:'현위치',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclClntNo',name:'협력업체',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptNowWrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclClntNo',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.ds.op.wrkplan.transwrkplan.RetrieveShuttleTransWorkVolumeClntCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_results","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.ds.op.wrkplan.transwrkplan.SaveContainerAssignInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_save","key":"IN_DS1"}]',target:'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_upload_save',action:'/ncall.ds.op.wrkplan.transwrkplan.SaveContainerYardLocationInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_excelTmp","key":"IN_DS1"}]',target:'','ev:submitdone':'scwin.sbm_upload_save_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveContainer',action:'/ncall.ds.op.wrkplan.transwrkplan.RetrieveShuttleContainerInformationClntCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"ds_results2","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_results2","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveContainer_submitdone','ev:submiterror':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',scopeVariable:'DsConstants',type:'text/javascript'}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// NTIS/배차관리/컨테이너 운송지시/셔틀운송작업물량조회(협력업체)
/*
    조회조건
    배차점소 6AA 부산지사
    오더확정일 2022/01/01 ~ 2022/03/30
    협력업체 266209 (주)이지스
    
    운송물량 297건
*/

scwin.btnFlag = "";
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
scwin.em_wrkStDt = "";
scwin.em_wrkEndDt = "";
scwin.em_dptWrkPlCd = "";
scwin.em_arvWrkPlCd = "";
scwin.em_odrNo = "";
scwin.em_vsslCd = "";
scwin.em_portcnt = "";
scwin.em_dptNowWrkPlCd = "";
scwin.em_alloccarPicId = "";
scwin.lc_dptDistrictCd = "";
scwin.lc_arvDistrictCd = "";
scwin.dateStr = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.firstDateStr = scwin.dateStr.substring(0, 6) + "01";
scwin.memJson = $c.data.getMemInfo($p);
scwin.gv_userClsCd = scwin.memJson.userClsCd;
scwin.gv_clntNo = scwin.memJson.clntNo;
scwin.gv_clntNm = scwin.memJson.clntNm;
scwin.gv_loabranCd = scwin.memJson.loUpperLobranCd;

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP190",
    compID: "lc_cargoClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, function () {
    //작업구분
    lc_cargoClsCd.setValue(DsConstants.CARGO_CLS_CD_CONTAINER);
  });
  const param = [{
    method: "getLuxeComboDataNcall",
    param1: "NcallWorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "lc_lobranCd"
  }];
  $c.data.setGauceUtil($p, param, function () {
    //배차점소
    lc_lobranCd.setValue(scwin.gv_loabranCd);
    if ($c.gus.cfIsNull($p, lc_lobranCd.getValue())) {
      lc_lobranCd.setValue(DsConstants.UPPER_LOBRAN_CD_BUSAN);
    }
    if (lc_lobranCd.getValue() == DsConstants.UPPER_LOBRAN_CD_BUSAN) {
      //부산매입권역
      scwin.f_districtSearch("2");
    } else {
      scwin.f_districtSearch("1");
    }
  });
  scwin.f_switchObjMode(1);
};
scwin.onUdcCompleted = function () {
  //출발예정일
  udc_wrkDt.setInitDate(scwin.dateStr, scwin.dateStr);
  if (scwin.gv_userClsCd != "01") {
    em_vehclClntNo.setValue(scwin.gv_clntNo);
    txt_vehclClntNm.setValue(scwin.gv_clntNm);
    $c.gus.cfDisableObjects($p, [em_vehclClntNo, txt_vehclClntNm, img_vehclClntNo]);
  }
  em_wrkStDt.focus();

  // scwin.colorChangeInterval = setInterval(function() { scwin.colorChange(); }, 1000);
};

//-------------------------------------------------------------------------
// 화면구성요소 제어(버튼 입력박스등등 disable, enable)
//-------------------------------------------------------------------------
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

//-------------------------------------------------------------------------
// 협력업체차량작업지시등록 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.excel0 = async function () {
  await scwin.f_emclntExcel();
};
scwin.excel1 = async function () {
  await scwin.f_emclntExcel(1);
};
scwin.excel2 = async function () {
  await scwin.f_emclntExcel(2);
};
scwin.f_emclntExcel = async function (gubun) {
  var fileName = "셔틀운송작업물량차량조회";
  if (gubun == null || gubun == "" || gubun == 0) {
    await $c.data.downloadGridViewExcel($p, gr_results, {
      fileName: fileName + ".xlsx",
      sheetName: fileName
    });
  } else if (gubun == 1) {
    await $c.data.downloadGridViewExcel($p, gr_results1, {
      fileName: fileName + ".xlsx",
      sheetName: fileName
    });
  } else if (gubun == 2) {
    await $c.data.downloadGridViewExcel($p, gr_excelResults, {
      fileName: fileName + ".xlsx",
      sheetName: fileName
    });
  }
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (gubun) {
  if (gubun == null || gubun == "" || gubun == 0) {
    let chkValid = await $c.gus.cfValidate($p, [em_wrkStDt, em_wrkEndDt]);
    if (!chkValid) {
      return;
    }
    if (!(await $c.gus.cfIsAfterDate($p, em_wrkStDt.getValue(), em_wrkEndDt.getValue()))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
      return;
    }
    if (em_vehclClntNo.getValue() == "") {
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
    dma_search.set("dptDistrictCd", scwin.lc_dptDistrictCd);
    dma_search.set("arvDistrictCd", scwin.lc_arvDistrictCd);
    dma_search.set("dptWrkPlCd", scwin.em_dptWrkPlCd);
    dma_search.set("dptNowWrkPlCd", scwin.em_dptNowWrkPlCd);
    dma_search.set("arvWrkPlCd", scwin.em_arvWrkPlCd);
    dma_search.set("wrkStDt", em_wrkStDt.getValue());
    dma_search.set("wrkEndDt", em_wrkEndDt.getValue());
    dma_search.set("wrkDtClsCd", lc_wrkDtClsCd.getValue());
    dma_search.set("alloccarPicId", scwin.em_alloccarPicId);
    dma_search.set("lineCd", ed_lineCd.getValue().trim());
    dma_search.set("vehclClntNo", em_vehclClntNo.getValue().trim());
    scwin.btnFlag = "";
    scwin.rowFlag = "";
    scwin.isRetrieve = true;
    $c.sbm.execute($p, sbm_retrieve);
  } else if (gubun == 2) {
    let rowPos = ds_results.getRowPosition();
    if (rowPos < 0) {
      return;
    }

    //합계행 선택시 오더넘버가 없이 조회해서 sql오류발생 오더넘버가 없는 합계행은 조회안하도록 수정
    let odrNoVal = ds_results.getCellData(rowPos, "odrNo");
    if (odrNoVal == null || odrNoVal == "") {
      return;
    }
    dma_search2.set("odrNo", odrNoVal);
    dma_search2.set("dptNowWrkPlCd", dma_search.get("dptNowWrkPlCd"));
    dma_search2.set("vehclClntNo", dma_search.get("vehclClntNo"));
    $c.sbm.execute($p, sbm_retrieveContainer);
  }
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = function () {};

//-------------------------------------------------------------------------
// function name : f_Delete
// function desc : 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = function () {};

//-------------------------------------------------------------------------
// function name : f_Cancel
// function desc : 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    // case 1:
    //     udc_line.cfCommonPopUp(scwin.callbackVsslCd,
    //         pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
    //     break;

    // case 2:
    //     udc_line.cfCommonPopUp(scwin.callbackDptWrkPl,
    //         pCode, pName, pClose, null, null, null, null, ",,,,,2", null, null, null, null, null, pAllSearch, null);
    //     break;

    // case 3:
    //     udc_line.cfCommonPopUp(scwin.callbackArvWrkPl,
    //         pCode, pName, pClose, null, null, null, null, ",,,,,2", null, null, null, null, null, pAllSearch, null);
    //     break;

    case 4:
      udc_line.cfCommonPopUp(scwin.callbackLineCd, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "LINE조회,LINE코드,");
      break;

    // case 5:
    //     udc_line.cfCommonPopUp(scwin.callbackAlloccarPic,
    //         pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
    //     break;

    // case 6:
    //     udc_line.cfCommonPopUp(scwin.callbackDptNowWrkPl,
    //         pCode, pName, pClose, null, null, null, null, ",,,,,2", null, null, null, null, null, pAllSearch, null);
    //     break;

    case 7:
      // 협력업체(차량매입) 계약승인 조회
      udc_vehclClnt.cfCommonPopUp(scwin.callbackVehclClnt, pCode, pName, pClose, null, null, null, null, DsConstants.PCHS_CLNT_CLS_CD_HIRECAR, null, null, null, null, null, pAllSearch, "협력업체,협력업체코드/명,");
      break;
  }
};
scwin.callbackVsslCd = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, em_vsslCd, txt_vsslNm);
};
scwin.callbackDptWrkPl = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, em_dptWrkPlCd, txt_dptWrkPlNm);
};
scwin.callbackArvWrkPl = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, em_arvWrkPlCd, txt_arvWrkPlNm);
};
scwin.callbackLineCd = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd, txt_lineNm);
};
scwin.callbackAlloccarPic = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, em_alloccarPicId, txt_alloccarPicNm);
};
scwin.callbackDptNowWrkPl = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, em_dptNowWrkPlCd, txt_dptNowWrkPlNm);
};
scwin.callbackVehclClnt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, em_vehclClntNo, txt_vehclClntNm);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
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

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  lc_cargoClsCd.setValue("");
  lc_lobranCd.setValue("");
  lc_odrKndCd.setValue("");
  lc_wrkDtClsCd.setValue("");
  scwin.lc_dptDistrictCd = "";
  scwin.lc_arvDistrictCd = "";
  em_vehclClntNo.setValue("");
  ed_lineCd.setValue("");
  txt_vehclClntNm.setValue("");
  txt_lineNm.setValue("");
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

//-------------------------------------------------------------------------
// 권역콤보
//-------------------------------------------------------------------------
scwin.f_districtSearch = function (gubun) {
  // lc_dptDistrictCd, lc_arvDistrictCd 컴포넌트가 X > 전역변수로 ""값세팅
  if (gubun == "1") {
    // scwin.setDistrictCd("1");
  } else if (gubun == "2") {
    // scwin.setDistrictCd("2");
  } else {
    // scwin.setDistrictCd("1");
  }
};
scwin.setDistrictCd = function (gubun) {
  if (gubun == "1") {
    //복화권역
    const param = [{
      method: "getLuxeComboDataNcall",
      param1: "NcallDsCommonEBC",
      param2: "retriveWrkDistrictCdCombo",
      param3: ["CMP"],
      compID: "lc_dptDistrictCd, lc_arvDistrictCd"
    }];
    $c.data.setGauceUtil($p, param, function () {
      dlt_gauceUtil_lc_dptDistrictCd_lc_arvDistrictCd.setRowJSON(0, {
        "code": "",
        "name": "전체"
      }, false);
      lc_dptDistrictCd.setSelectedIndex(0);
      lc_arvDistrictCd.setSelectedIndex(0);
    });
  } else if (gubun == "2") {
    //부산매입권역
    const param = [{
      method: "getLuxeComboDataNcall",
      param1: "NcallDsCommonEBC",
      param2: "retriveWrkRgnCdCombo",
      param3: ["PUS"],
      compID: "lc_dptDistrictCd, lc_arvDistrictCd"
    }];
    $c.data.setGauceUtil($p, param, function () {
      lc_dptDistrictCd.setSelectedIndex(0);
      lc_arvDistrictCd.setSelectedIndex(0);
    });
  }
};

//-------------------------------------------------------------------------
// 셔틀운송작업지시등록 링크
//-------------------------------------------------------------------------
scwin.f_goWrkIndict = async function () {
  if (ds_results.getRowCount() == 0 || ds_results.getRowPosition() < 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["오더"]);
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
    $c.win.openMenu($p, "셔틀운송작업지시등록(컨테이너)", DsConstants.URL_CONTAINER_SHUTTLE_TRANS_VOLUME, "op_202_02_07b.xml", param);
  }
};

//-------------------------------------------------------------------------
// 신규 프린트
// 오더SHEET는 현재 화면에서 진행하므로 이전 함수 호출
// CNTR LOADING LIST, CNTR DISCHARGING LIST는 팝업화면으로 파라메터 전달
//-------------------------------------------------------------------------
scwin.f_printNew = async function (gubun) {
  let checkCnt = 0; //체크박스 체크개수
  let batchYn = 0; //일괄여부
  let v_odrNo = "";
  let tmpStr = "";
  let pURL = ""; //page경로

  if (ds_results.getRowCount() == 0 || ds_results.getRowPosition() < 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["오더"]);
    return;
  } else {
    let tmpOdr = "";
    //일괄발행시 적용할 오더번호 추출
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
        //오더SHEET
        if (batchYn) {
          scwin.f_print(4); //일괄print (viewer띄우지 않고 print)
        } else {
          scwin.f_print(3); //개별print (viewer띄어서 print)
        }
        break;
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
// 파일 확장자 체크
//-------------------------------------------------------------------------
scwin.f_CheckFileExt = function (ext, path) {
  ext = ext.toUpperCase();
  path = path.toUpperCase();
  let elen = ext.length;
  let flen = path.length;
  return ext == path.substring(flen - elen, flen);
};

//-------------------------------------------------------------------------
// 파일 업로드
//-------------------------------------------------------------------------
scwin.f_upload = async function () {
  //TODO 업로드 기능 있는지 확인필요함

  ds_excel.removeAll();
  ds_excelTmp.removeAll();

  // UDC_ID.uploadGridViewExcel(gr_tariff, options)

  $c.gus.cfProgressWinClose($p);
  let chk = await $c.win.confirm($p, "업로드작업이 완료되었습니다. 저장하시겠습니까?");
  if (chk) {
    await $c.sbm.execute($p, sbm_upload_save);
  }
};

//-------------------------------------------------------------------------
// 프린트
//-------------------------------------------------------------------------
scwin.f_print = async function (gubun) {
  if (ds_results.getRowCount() == 0 || ds_results.getRowPosition() < 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["오더"]);
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
        let data = {
          odiName: "op_202_02_03r",
          reportName: "/ds/op/wrkplan/transwrkplan/op_202_02_03r.ozr",
          odiParam: {
            odrNo: v_odrNo
          },
          viewerParam: {
            zoom: 100 // 배율 설정
          },
          formParam: {}
        };
        scwin.openPopup(data);
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
            let data = {
              odiName: "op_202_02_03r",
              reportName: "/ds/op/wrkplan/transwrkplan/op_202_02_03r.ozr",
              odiParam: {
                odrNo: v_odrNo
              },
              viewerParam: {
                zoom: 100,
                // 배율 설정
                mode: "print",
                useprogressbar: false,
                // 프로그레스바 쓸지 말지
                printmode: "silent"
              },
              formParam: {}
            };
            scwin.openPopup(data);
            printCnt++;
          }
        }
        // $c.gus.OZExecuteBatch();
        if (printCnt == 1) await $c.win.alert($p, firstOdrNo + "의 오더Sheet를 프린터로 전송했습니다.");
        if (printCnt > 1) await $c.win.alert($p, firstOdrNo + "외에 " + (printCnt - 1) + "건의 오더Sheet를 프린터로 전송했습니다.");
        break;
      default:
        break;
    }
  }
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// 선택된 행인지 여부를 반환
//-------------------------------------------------------------------------
scwin.f_IsSelected = function (row) {
  if (row < 0) {
    return false;
  }
  if (ds_results.getCellData(row, "chk") == "T") {
    return true;
  } else {
    return false;
  }
};

//-------------------------------------------------------------------------
//셔틀윤송잔여물량조회
//-------------------------------------------------------------------------
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
    args.dptDistrictCd = scwin.lc_dptDistrictCd;
    args.arvDistrictCd = scwin.lc_arvDistrictCd;
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

//-------------------------------------------------------------------------
// 인바운드리스트 팝업
//-------------------------------------------------------------------------
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

//-------------------------------------------------------------------------
// submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

  // odrNo 정렬
  var json = ds_results.getAllJSON();
  json.sort(function (a, b) {
    return a.odrNo.localeCompare(b.odrNo);
  });
  ds_results.setJSON(json);
  let rowCnt = ds_results.getRowCount();
  if (rowCnt == 0) {
    totalRows.setValue("0");
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  totalRows.setValue(rowCnt);
  scwin.isRetrieve = false;
  $c.gus.cfGoPrevPosition($p, gr_results, scwin.pos_groupCode);
  scwin.f_switchObjMode(5); //조회완료

  // 현재의 조회조건을 저장을 위해 복사해둔다
  // $c.gus.cfCopyDataMap(dma_search, dma_hiddenSearch);

  for (var i = 0; i < rowCnt; i++) {
    //background
    if (ds_results.getCellData(i, "picConfirmYn") == "1") {
      gr_results.setCellBackgroundColor(i, "odrNo", "yellow");
    }
    var val = ds_results.getCellData(i, "odrKndCd");
    var cd7 = Number(ds_results.getCellData(i, "cntrSizCd7"));
    var cd8 = Number(ds_results.getCellData(i, "cntrSizCd8"));
    if (val == "C1" || val == "C7" || val == "CS") {
      if (cd7 + cd8 != 0) {
        gr_results.setCellBackgroundColor(i, "arvDistrictNm", "red");
      }
    }
    if (ds_results.getCellData(i, "wrkStDt") != "") {
      ds_results.setCellData(i, "wrkSt", ds_results.getCellData(i, "wrkStDt") + ds_results.getCellData(i, "wrkStHh"));
    }
    if (ds_results.getCellData(i, "wrkEndDt") != "") {
      ds_results.setCellData(i, "wrkDt", ds_results.getCellData(i, "wrkEndDt") + ds_results.getCellData(i, "wrkEndHh"));
    }
    if (ds_results.getCellData(i, "portcnt") != "") {
      ds_results.setCellData(i, "vsslCd_portcnt", ds_results.getCellData(i, "vsslNm") + "/" + ds_results.getCellData(i, "portcnt"));
    }
    if (ds_results.getCellData(i, "tsPortcnt") != "") {
      ds_results.setCellData(i, "ts_vsslCd_portcnt", ds_results.getCellData(i, "tsVsslNm") + "/" + ds_results.getCellData(i, "tsPortcnt"));
    }
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

  scwin.rowFlag = "";
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_upload_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

  scwin.rowFlag = "";
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_retrieveContainer_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

  ds_results2.setJSON(e.responseJSON.GAUCE);
  scwin.ds_results2_OnLoadCompleted();
};

// for=gr_results event=OnClick(row,colid)
scwin.gr_results_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_results.getRowCount() == 0) {
    return;
  }
};

// for=ds_results event=OnRowPosChanged(row)
scwin.ds_results_onrowpositionchange = function (rowIndex, oldRow) {
  if (ds_results.getRowCount() == 0) {
    return;
  }
  if (scwin.isRetrieve) {
    return;
  }
  scwin.f_Retrieve(2);
};

// ?
scwin.ds_results1_OnLoadCompleted = function () {
  var rowCnt = ds_results1.getTotalRow();
  if (rowCnt == 0) {
    totalRows1.setValue("0");
    return;
  }
  totalRows1.setValue(rowCnt);
};
scwin.ds_results2_OnLoadCompleted = function () {
  var rowCnt = ds_results2.getTotalRow();
  if (rowCnt == 0) {
    totalRows2.setValue("0");
    return;
  }
  totalRows2.setValue(rowCnt);
  gr_results2.setFocusedCell(0, "cntrNo");
  gr_results.focus();
};
scwin.lc_lobranCd_onviewchange = function (info) {
  if (lc_lobranCd.getValue() == DsConstants.UPPER_LOBRAN_CD_BUSAN) {
    scwin.f_districtSearch("2");
  } else {
    scwin.f_districtSearch("1");
  }
};

// scwin.lc_dptDistrictCd_onchange = function(e) {
//     ds_results.setFilterBypass(function(rowData) {
//         return scwin.f_onFilterRow(rowData);
//     });
// };

// scwin.lc_arvDistrictCd_onchange = function(e) {
//     ds_results.setFilterBypass(function(rowData) {
//         return scwin.f_onFilterRow(rowData);
//     });
// };

// scwin.f_onFilterRow = function(rowData) {
//     // TODO: WebSquare 필터 API로 대체 - 원본 OnFilter 로직 참고
//     return true;
// };

scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_print3_onclick = function (e) {
  scwin.f_printNew(3);
};
scwin.udc_vehclClnt_onclickEvent = function (e) {
  if (scwin.gv_userClsCd == '01') {
    scwin.f_openCommonPopUp(7, em_vehclClntNo.getValue(), txt_vehclClntNm.getValue(), 'F', 'F');
  }
};
scwin.udc_vehclClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(em_vehclClntNo, txt_vehclClntNm, 7);
};
scwin.udc_line_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, txt_lineNm, 4, true);
};
scwin.udc_line_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_lineNm, ed_lineCd, 4, false);
};
scwin.udc_line_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_lineCd.getValue(), txt_lineNm.getValue(), 'F', 'T');
};
scwin.grdFormatter_date = function (data) {
  if (data == "") {
    return data;
  }
  var val = data.substring(2, 4) + "-" + data.substring(4, 6) + "-" + data.substring(6, 8) + " " + data.substring(8, 10) + ":" + data.substring(10, 12);
  return $c.gus.decode($p, data, "", "", val);
};
scwin.grdFormatter_yn = function (data) {
  return $c.gus.decode($p, data, 1, "Y", "N");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_cargoClsCd',search:'start',style:'width:150px;',submenuSize:'auto',disabled:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배차점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lobranCd',search:'start',style:'width:150px;',submenuSize:'auto',mandatory:'true',title:'배차점소','ev:onviewchange':'scwin.lc_lobranCd_onviewchange',visibleRowNum:'15',emptyItem:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_odrKndCd',search:'start',style:'width:200px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너 수입일반'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너 수출일반'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'POSITION'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C7'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'lc_wrkDtClsCd',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더확정일'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'작업예정일'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_wrkDt',refDataMap:'',refEdDt:'ica_wrkEndDt',refStDt:'ica_wrkStDt',style:'',edFromId:'em_wrkStDt',mandatoryTo:'true',mandatoryFrom:'true',edToId:'em_wrkEndDt',titleFrom:'작업예정일 조회 시작일자',titleTo:'작업예정일 조회 종료일자'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'협력업체',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_vehclClnt',codeId:'em_vehclClntNo',nameId:'txt_vehclClntNm',hideName:'Y',popupID:'',style:'',mandatoryCode:'true',btnId:'img_vehclClntNo','ev:onclickEvent':'scwin.udc_vehclClnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_vehclClnt_onblurCodeEvent',selectID:'retrieveCarKindClntInfo_tpro'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자확인',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_picConfirmYn',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'완료여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_completeYn',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_line',codeId:'ed_lineCd',nameId:'txt_lineNm',hideName:'Y',popupID:'',style:'','ev:onblurCodeEvent':'scwin.udc_line_onblurCodeEvent',maxlengthCode:'4',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',objTypeName:'data','ev:onblurNameEvent':'scwin.udc_line_onblurNameEvent',btnId:'img_srchLineCd','ev:onclickEvent':'scwin.udc_line_onclickEvent',selectID:'retrieveLineInfo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'운송물량',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.excel0',gridID:'gr_results',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_results',style:'',id:'gr_results',visibleRowNum:'4',class:'wq_gvw',fixedColumn:'1','ev:oncellclick':'scwin.gr_results_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column1',displayMode:'label',colSpan:'',rowSpan:'2',value:' '}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'오더종류',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'오더번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column13',value:'출발지',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column11',value:'도착지',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column9',value:'반짝임',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'하선마감일',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'입출항일',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'야적일',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column19',value:'담당자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column65',value:'확인',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'출발예정<br/>일시',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'도착예정<br/>일시',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column53',value:'오더',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column41',value:'배차',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column117',value:'잔량',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column109',value:'LINE',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column105',value:'선박항차',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column101',value:'양하선박항차',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column97',value:'CY선적코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column93',value:'TS선박항차',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column89',value:'검색기<br/>포함여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column85',value:'MRN',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'출발권역',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'도착권역',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column54',displayMode:'label',value:'20'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column50',displayMode:'label',value:'40'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column42',displayMode:'label',value:'20'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column46',displayMode:'label',value:'40'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column118',value:'20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column114',value:'40',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndNm',inputType:'text',readOnly:'true',hidden:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',readOnly:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',readOnly:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'twinkleYn',inputType:'text',readOnly:'true',hidden:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrvlportDt',inputType:'text',readOnly:'true',textAlign:'left',sortable:'true',displayFormat:'yyyy-MM-dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arDepPortDd',inputType:'text',readOnly:'true',hidden:'true',textAlign:'left',sortable:'true',dataType:'date',displayFormatter:'scwin.grdFormatter_date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'opswgDd',inputType:'text',readOnly:'true',textAlign:'right',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'alloccarPicId',inputType:'text',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'picConfirmYn',inputType:'checkbox',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkSt',inputType:'',readOnly:'true',textAlign:'left',sortable:'true',dataType:'date',displayFormatter:'scwin.grdFormatter_date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'',readOnly:'true',textAlign:'left',sortable:'true',dataType:'date',displayFormatter:'scwin.grdFormatter_date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd1',inputType:'text',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd2',inputType:'text',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd3',inputType:'text',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd4',inputType:'text',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd5',inputType:'text',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd6',inputType:'text',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',readOnly:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslCd_portcnt',inputType:'text',readOnly:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tmlPortcnt',inputType:'text',readOnly:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cyShippingCd',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ts_vsslCd_portcnt',inputType:'text',readOnly:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rettlYn',inputType:'text',readOnly:'true',sortable:'true',displayFormatter:'scwin.grdFormatter_yn'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',readOnly:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictNm',inputType:'text',readOnly:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'text',readOnly:'true',textAlign:'left',sortable:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'odrKndNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column148',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column147',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column146',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column145',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column144',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column143',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column142',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column141',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column140',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column139',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column138',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column137',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column136',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column135',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd1\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column134',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd2\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column133',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd3\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column132',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd4\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column131',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd5\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column130',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd6\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column129',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column128',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column127',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column126',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column125',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column124',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column123',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column122',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column121',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column68',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column56',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd1\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column52',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd2\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column44',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd3\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd4\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column120',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd5\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column116',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd6\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column112',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column108',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column104',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column100',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column92',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column88',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'컨테이너',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_results2',gridDownFn:'scwin.excel2',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results2',id:'gr_results2',style:'',visibleRowNum:'5',visibleRowNumFix:'true',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',value:'SEQ',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',value:'CNTR NO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'yardLoc',inputType:'text',value:'야드위치',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo',inputType:'text',value:'SEAL NO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',value:'B/L NO',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',value:'SIZE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',value:'TYPE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',value:'F/E',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'weight',inputType:'text',value:'WEIGHT',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'xrayLupTrgtYn',inputType:'text',value:'검색기<br/>대상',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rettlYn',value:'검색기<br/>오더',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'socYn',value:'SOC',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'leaseYn',value:'LES',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'destPortCd',value:'PORT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'currPosNm',value:'현재위치',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rtYn',value:'반납<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rtCopinoYn',value:'반납COPINO<br/>전송여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'temper',value:'온도',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dangerCd',value:'위험물',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptDistrictNm',value:'출발권역',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvDistrictNm',value:'도착권역',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'dptWrkPlNm',value:'출발지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'arvWrkPlNm',value:'도착지',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',hidden:'true',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'yardLoc',inputType:'text',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo',inputType:'text',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'weight',inputType:'text',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'xrayLupTrgtYn',inputType:'text',displayFormatter:'scwin.grdFormatter_yn',readOnly:'true',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rettlYn',inputType:'text',displayFormatter:'scwin.grdFormatter_yn',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'socYn',inputType:'text',displayFormatter:'scwin.grdFormatter_yn',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'leaseYn',inputType:'text',displayFormatter:'scwin.grdFormatter_yn',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'destPortCd',inputType:'text',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currPosNm',inputType:'text',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rtYn',inputType:'text',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rtCopinoYn',inputType:'text',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'temper',inputType:'text',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dangerCd',inputType:'text',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictNm',inputType:'text',readOnly:'true',hidden:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'text',readOnly:'true',hidden:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',readOnly:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',readOnly:'true',textAlign:'left',sortable:'true'}}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results2',id:'gr_excelResults',style:'display: none;',visibleRowNum:'5',visibleRowNumFix:'true',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',value:'SEQ',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',value:'CNTR NO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'yardLoc',inputType:'text',value:'야드위치',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'shipCd',value:'모선항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'operCd',value:'선사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'curStat',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo',inputType:'text',value:'SEAL NO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',value:'B/L NO',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',value:'SIZE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',value:'TYPE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',value:'F/E',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'weight',inputType:'text',value:'WEIGHT',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'xrayLupTrgtYn',inputType:'text',value:'검색기<br/>대상',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rettlYn',inputType:'text',value:'검색기<br/>오더',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'socYn',inputType:'text',value:'SOC',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'leaseYn',inputType:'text',value:'LES',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'destPortCd',inputType:'text',value:'PORT',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currPosNm',inputType:'text',value:'현재위치',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'temper',inputType:'text',value:'온도',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dangerCd',inputType:'text',value:'위험물',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'dptDistrictNm',inputType:'text',value:'출발권역',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'arvDistrictNm',inputType:'text',value:'도착권역',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',value:'출발지',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',value:'도착지',width:'80'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'yardLoc',inputType:'text',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shipCd',inputType:'text',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'operCd',inputType:'text',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'curStat',inputType:'text',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo',inputType:'text',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'weight',inputType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'xrayLupTrgtYn',inputType:'text',class:'txt-red',displayFormatter:'scwin.grdFormatter_yn'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rettlYn',inputType:'text',displayFormatter:'scwin.grdFormatter_yn'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'socYn',inputType:'text',displayFormatter:'scwin.grdFormatter_yn'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'leaseYn',inputType:'text',displayFormatter:'scwin.grdFormatter_yn'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'destPortCd',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currPosNm',inputType:'text',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'temper',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dangerCd',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictNm',inputType:'text',readOnly:'true',hidden:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'text',readOnly:'true',hidden:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',readOnly:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',readOnly:'true',textAlign:'left',sortable:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_print3',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_print3_onclick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:3,text:'오더SHEET'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8',style:'display: none;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'운송차량',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridDownFn:'scwin.excel1',gridID:'gr_results1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_results1',style:'',autoFit:'allColumn',id:'gr_results1',visibleRowNum:'5',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',value:'협력업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclKnd',value:'차량종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNrm',value:'차량규격',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'chassisKnd',value:'샤시종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'posnClsNm',value:'소속구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'logisWrkDistrictNm',value:'권역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'drvNm',value:'기사명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'trsNo',value:'TRS',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mpNo',value:'휴대폰',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'chassisNo',value:'샤시번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclKnd',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNrm',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chassisKnd',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnClsNm',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'logisWrkDistrictNm',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvNm',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trsNo',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mpNo',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chassisNo',inputType:'text',sortable:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]}]}]}]})