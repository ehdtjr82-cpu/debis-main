/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_03_11b.xml 149371 fa486c0cf477d47e17cd29612e1c7228e75cbe5cd83fb96b828830b21b7a0c13 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobran',name:'점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'작업시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'작업종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkCls',name:'작업구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcScKnd',name:'할증종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarPic',name:'배차담당',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발지코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgMchtCd',name:'청구화주코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoCd',name:'협력업체코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selConfirm',name:'담당자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcScRegId',name:'할증등록자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkClsCd',name:'작업구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcScAmtRate',name:'할증비율',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtGubun',name:'일자구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStDt',name:'출발시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptEndDt',name:'출발종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptGubun',name:'출발구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reeferYn',name:'냉동여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrBox',name:'컨테이너박스',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKnd',name:'오더종류',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'che',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'내부매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCdNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCdNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtm',name:'출발일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtm',name:'도착일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'CNTR/No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'Sz',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'Tp',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellDcScNm',name:'할인할증사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcSellAmt',name:'할인할증금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcScTotal',name:'매입액합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkstpseq',name:'wrkstpseq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcScAmt',name:'할증금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'할증항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScAmtRate',name:'할증률',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmYn',name:'확인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'확인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnYn',name:'확정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'transRsltsSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCd',name:'dcScCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkCls',name:'wrkCls',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScRegNm',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocaNm',name:'배차등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkClsCd',name:'작업구간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'매입순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkQty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkWt',name:'중량',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_joblevel'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dcScKnd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dcScKnd2'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveTransDiscountSurchargeResultsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_emp","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_emp","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_saveEmp',action:'',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_emp","key":"IN_DS1", "action":"modified"},{"id":"dma_retrieve","key":"IN_DS2"},{"id":"ds_emp","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_emp","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_saveEmp_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteEmp',action:'',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_emp","key":"IN_DS1", "action" : "modified"},{"id":"dma_retrieve","key":"IN_DS2"},{"id":"ds_emp","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_emp","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_deleteEmp_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_joblevel',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'',target:'data:json,{"id":"ds_joblevel","key":"GAUCE"}','ev:submitdone':'scwin.sbm_joblevel_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_dcScKnd',action:'/ds.co.RetreiveDcScKndCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'',target:'data:json,{"id":"ds_dcScKnd","key":"GAUCE"}','ev:submitdone':'scwin.sbm_dcScKnd_submitdone','ev:submiterror':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 세션정보 가져오기

scwin.userId = "";
scwin.vCurDate = "";
scwin.strDate = "";
scwin.sLobranCd = "";
scwin.cheCnt = "0";
scwin.vehclNoCd = "";
scwin.strTomorrow = "";
scwin.chb_sell_cd = ["2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028"];
scwin.chb_sell_nm = ["중량1톤초과", "중량2톤초과", "중량3톤초과", "중량4톤초과", "중량5톤초과", "냉동할증", "활대품10cm초과", "활대품20cm초과", "활대품30cm초과", "활대품40cm초과", "활대품50cm초과", "휴일할증", "플랙시백", "탱크할증", "험로할증", "덤프할증", "심야할증", "검색기", "밥테일1회왕복", "밥테일2회왕복", "위험물", "화약류", "방사성", "기타"];
scwin.chb_sell_value = [10, 20, 30, 40, 50, 30, 10, 20, 30, 40, 50, 20, 20, 30, 20, 25, 20, 96000, 100, 200, 30, 100, 200, 0];
scwin.DELETE_AUTH = $p.top().scwin.globalVal.DELETE_AUTH;
scwin.CREATE_AUTH = $p.top().scwin.globalVal.CREATE_AUTH;
scwin.UPDATE_AUTH = $p.top().scwin.globalVal.UPDATE_AUTH;
scwin.PRINT_AUTH = $p.top().scwin.globalVal.PRINT_AUTH;

// 현재 보여지는 Grid 저장
scwin.curshowGrid = null;
let memJson = $c.data.getMemInfo($p);
scwin.onpageload = async function () {
  scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재 날짜 반환
  scwin.strDate = scwin.vCurDate;
  scwin.strTomorrow = $c.date.addDate($p, scwin.vCurDate, 1);
  scwin.userId = $c.data.getMemInfo($p, "userId") ?? "";
  scwin.sLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd") == null ? "" : $c.data.getMemInfo($p, "loUpperLobranCd");

  //공통코드 적용()
  const codeOptions = [{
    grpCd: "OP101",
    compID: "lc_cntrSizCd"
  }, {
    grpCd: "OP190",
    compID: "co_lc_workGubun"
  }];
  $c.data.setCommonCode($p, codeOptions, function () {
    // 작업구분 초기화
    co_lc_workGubun.setValue("C");
    scwin.f_createGrid();
  });
  lc_dtGubun.setValue("1");
  //co_lc_workGubun.setValue("B");

  $c.sbm.execute($p, sbm_joblevel);
  $c.sbm.execute($p, sbm_dcScKnd);
  $c.gus.cfEnableBtnOnly($p, [btn_Del, btn_Dcsn]);
};
scwin.onUdcCompleted = async function () {
  udc_wrkDt.setInitDate(scwin.strDate, scwin.strDate);
  ed_allCopCoConfirmDt.setValue(scwin.vCurDate);
  if (scwin.DELETE_AUTH == "") {
    $c.gus.cfDisableBtn($p, [btn_Del]);
  }
  if (scwin.CREATE_AUTH == "") {
    $c.gus.cfDisableBtn($p, [btn_Add]);
  }
  if (scwin.PRINT_AUTH == "") {
    $c.gus.cfDisableBtn($p, [btn_Dcsn, btn_DcsnChoice]);
  }
  $c.gus.cfDisableObjects($p, [ica_dptStDt, ica_dptEndDt, udc_dptDt]);
};
scwin.sbm_joblevel_submitdone = async function (e) {
  ds_joblevel.sort("lobranNm", 0);
  let sLoUpperLobranCd = scwin.sLobranCd;
  let found = false;
  for (let i = 0; i < ds_joblevel.getRowCount(); i++) {
    if (ds_joblevel.getCellData(i, "lobranCd") == sLoUpperLobranCd) {
      co_lc_logisticsBranch.setValue(sLoUpperLobranCd);
      found = true;
      break;
    }
  }
  if (!found) {
    co_lc_logisticsBranch.setSelectedIndex(0);
  }
};
scwin.sbm_dcScKnd_submitdone = function (e) {
  ds_dcScKnd.insertRow(0);
  ds_dcScKnd.setCellData(0, "cd", "0001");
  ds_dcScKnd.setCellData(0, "cdNm", "전체");

  //co_lc_workGubun.setValue("");
  $c.gus.cfCopyDataSet($p, ds_dcScKnd, ds_dcScKnd2, "copyHeader=Yes");
  co_lc_dcScKndn.setValue("");
};

//-------------------------------------------------------------------------
// 헤더셋팅
//-------------------------------------------------------------------------
scwin.f_HeaderCreate = async function () {
  dma_retrieve.set("regId", scwin.userId);
  dma_retrieve.set("lobran", co_lc_logisticsBranch.getValue());
  dma_retrieve.set("lobranCd", co_lc_logisticsBranch.getValue()); // DataMap 키 — 서버 필터에 사용
  dma_retrieve.set("wrkStDt", ica_wrkStDt.getValue());
  dma_retrieve.set("wrkEndDt", ica_wrkEndDt.getValue());
  dma_retrieve.set("cntrNo", ed_cntrNo.getValue());
  dma_retrieve.set("vehclNo", ed_vehclNo.getValue());
  dma_retrieve.set("odrNo", ed_odrNo.getValue());
  dma_retrieve.set("odrKnd", ed_odrNo.getValue()); // DataMap 키 — odrNo 와 동일값
  dma_retrieve.set("wrkCls", co_lc_workGubun.getValue());
  dma_retrieve.set("dcScKnd", co_lc_dcScKndn.getValue());
  dma_retrieve.set("alloccarPic", em_alloccarPicId.getValue()); // DataMap 키 — 배차담당
  dma_retrieve.set("dcScRegId", em_alloccarPicId.getValue()); // 할증등록자ID
  dma_retrieve.set("dptWrkPlCd", dptWrkPlCd.getValue());
  dma_retrieve.set("arvWrkPlCd", arvWrkPlCd.getValue());
  dma_retrieve.set("bilgMchtCd", bilgMchtCd.getValue());
  dma_retrieve.set("copCoCd", copCoCd.getValue());
  dma_retrieve.set("selConfirm", selConfirm.getValue());
  //20170529 황창기 작업구분조회조건 조회속도 문제로 조회조건에서 빼고 필터로 처리함
  dma_retrieve.set("wrkClsCd", "");
  dma_retrieve.set("transWrkIndictNo", "");
  dma_retrieve.set("dcScAmtRate", ed_dcScAmtRate.getValue());
  dma_retrieve.set("cntrSizCd", lc_cntrSizCd.getValue());
  dma_retrieve.set("lineCd", ed_lineCd.getValue());
  dma_retrieve.set("dtGubun", lc_dtGubun.getValue());
  dma_retrieve.set("dptStDt", ica_dptStDt.getValue());
  dma_retrieve.set("dptEndDt", ica_dptEndDt.getValue());
  dma_retrieve.set("dptGubun", lc_dptGubun.getValue());
  dma_retrieve.set("reeferYn", lc_reeferYn.getValue());
  dma_retrieve.set("cntrBox", "");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  scwin.f_HeaderCreate();
  $c.gus.cfEnableBtnOnly($p, [btn_Dcsn, btn_DcsnChoice]);
  scwin.cheCnt = "0";
  lc_wrkClsCd.setValue("");
  lc_pusanClsCd.setValue("");
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  var result = e.responseJSON?.resultDataSet?.[0];
  if (!result) return;
  if (result.Msg === "SUCC") {
    if (ds_emp.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
    }
    totalCnt.setValue(ds_emp.getRowCount());
    scwin.f_createGrid();
    scwin.f_resetChk();
  }
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = async function () {
  ds_emp.insertRow();
  $c.gus.cfEnableKeyData($p);
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = async function () {
  if (ds_emp.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
    return;
  }
  $c.gus.cfDisableKey($p);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let chkModified = ds_emp.getModifiedIndex().length;
  if (chkModified <= 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  let chk = await $c.win.confirm($p, "저장하시겠습니까?");
  if (chk) {
    await $c.sbm.execute($p, sbm_saveEmp);
  }
  $c.gus.cfDisableKeyData($p);
};
scwin.f_openPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let param;
  switch (disGubun) {
    case "1":
      // 차량번호
      udc_eq.setSelectId("retrieveVehiclesNo");
      udc_eq.cfCommonPopUp(scwin.udc_eq_callbackFunc // 
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "차량번호,차량코드,차량번호명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case "2":
      // 작업장
      param = "";
      udc_dptWrkPl.setSelectId("retrieveWrkPlInfo");
      udc_dptWrkPl.cfCommonPopUp(scwin.udc_dptWrkPl_callbackFunc, pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , param // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "출발지,출발지코드,출발지명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case "3":
      param = "";
      udc_arvWrkPl.setSelectId("retrieveWrkPlInfo");
      udc_arvWrkPl.cfCommonPopUp(scwin.udc_arvWrkPl_callbackFunc, pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , param // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "도착지,도착지코드,도착지명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case "4":
      udc_bilgMcht.setSelectId('retrieveBilgMchtList'); // XML상의 SELECT ID  
      udc_bilgMcht.cfCommonPopUp(scwin.udc_bilgMcht_callbackFunc, pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "청구화주,청구화주코드,청구화주명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case "5":
      udc_copCo.setSelectId('retrieveCoopList'); // XML상의 SELECT ID  
      udc_copCo.cfCommonPopUp(scwin.udc_copCo_callbackFunc, pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "협력업체,협력업체코드,협력업체명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case "6":
      udc_alloccarPic.setSelectId('retrieveUserInfo'); // XML상의 SELECT ID  
      udc_alloccarPic.cfCommonPopUp(scwin.udc_alloccarPic_callbackFunc, pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case "7":
      udc_line.setSelectId('retrieveLineInfo');
      udc_line.cfCommonPopUp(scwin.udc_line_callbackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};
scwin.udc_eq_callbackFunc = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_eqCd, ed_vehclNo);
};
scwin.udc_dptWrkPl_callbackFunc = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, dptWrkPlCd, dptWrkPlNm);
};
scwin.udc_arvWrkPl_callbackFunc = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, arvWrkPlCd, arvWrkPlNm);
};
scwin.udc_bilgMcht_callbackFunc = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, bilgMchtCd, bilgMcht);
};
scwin.udc_copCo_callbackFunc = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, copCoCd, copCoNm);
};
scwin.udc_alloccarPic_callbackFunc = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, em_alloccarPicId, txt_alloccarPicNm);
};
scwin.udc_line_callbackFunc = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd, txt_lineNm);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  await $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openPopUp(disGubun, pVal, "", "T", "T");
  } else {
    scwin.f_openPopUp(disGubun, "", pVal, "T", "T");
  }
};

//-------------------------------------------------------------------------
// 등록
//-------------------------------------------------------------------------
scwin.f_Register = async function () {
  let k = 0;
  let chkModified = ds_emp.getModifiedIndex().length;
  if (chkModified <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_001, ["Data"]);
    return;
  }
  if (scwin.CREATE_AUTH == "") {
    await $c.gus.cfAlertMsg($p, "등록 권한이 없습니다.");
    return;
  }
  let chkValidate = await $c.gus.cfValidate($p, [ed_allCopCoConfirmDt]);
  if (!chkValidate) {
    return;
  }
  for (let i = ds_emp.getRowCount() - 1; i >= 0; i--) {
    if (ds_emp.getCellData(i, "che") == "1") {
      k++;
      if (ds_emp.getCellData(i, "dcScNm") == "") {
        ds_emp.setRowPosition(i);
        await $c.gus.cfAlertMsg($p, i + 1 + "번째 등록이 되지 않았습니다. \n 할인할증사유를 먼저 선택 해주세요");
        scwin.curshowGrid.setFocusedCell(i, "dcScNm");
        return;
      }
      if (ed_allCopCoConfirmDt.getValue().trim() != "") {
        ds_emp.setCellData(i, "regDtm", ed_allCopCoConfirmDt.getValue());
        ds_emp.setCellData(i, "confirmDt", ed_allCopCoConfirmDt.getValue());
      }
    } else {
      if (ds_emp.getRowStatus(i) === "C") {
        ds_emp.removeRow(i);
      } else {
        ds_emp.undoRow(i);
      }
    }
  }
  if (k == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["항목"]);
    return;
  }

  // Grid의 필수 입력 항목에 대해서 Check 한다.
  let chkGrid = await $c.gus.cfValidate($p, [scwin.curshowGrid]);
  if (!chkGrid) {
    return;
  }
  let chk = await $c.win.confirm($p, MSG_CM_CRM_002);
  if (chk) {
    scwin.f_HeaderCreate();
    sbm_saveEmp.action = "/ds.op.wrkrslts.transwrkrslts.RegistSurchargeInformationCMD.do?pageGubun=1";
    await $c.sbm.execute($p, sbm_saveEmp);
  }
};

//-------------------------------------------------------------------------
// 확정
//-------------------------------------------------------------------------
scwin.f_Dcsn = async function () {
  let chkModified = ds_emp.getModifiedIndex().length;
  if (chkModified <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_001, ["Data"]);
    return;
  }

  // Grid의 필수 입력 항목에 대해서 Check 한다.
  let chkGrid = await $c.gus.cfValidate($p, [scwin.curshowGrid]);
  if (!chkGrid) {
    return;
  }
  let chkDt = await $c.gus.cfValidate($p, [ed_allCopCoConfirmDt]);
  if (!chkDt) {
    return;
  }
  let j = 0;
  for (let i = ds_emp.getRowCount() - 1; i >= 0; i--) {
    if (ds_emp.getCellData(i, "che") == "1") {
      j++;
      if (ds_emp.getCellData(i, "dcsnDt") != "" && ds_emp.getCellData(i, "regDtm") > ds_emp.getCellData(i, "dcsnDt")) {
        ds_emp.setRowPosition(i);
        await $c.gus.cfAlertMsg($p, "확정일자는 등록일자보다 빠를수 없습니다.");
        scwin.curshowGrid.setFocusedCell(i, "dcsnDt", true);
        return;
      }
      if (ed_allCopCoConfirmDt.getValue().trim() != "") {
        ds_emp.setCellData(i, "regDtm", ed_allCopCoConfirmDt.getValue());
      }
    } else {
      if (ds_emp.getRowStatus(i) === "C") {
        ds_emp.removeRow(i);
      } else {
        ds_emp.undoRow(i);
      }
    }
  }
  if (j == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["Data"]);
    return;
  }
  let chk = await $c.win.confirm($p, "확정하시겠습니까");
  if (chk) {
    scwin.f_HeaderCreate();
    sbm_saveEmp.action = "/ds.op.wrkrslts.transwrkrslts.RegistSurchargeDecisionCMD.do?pageGubun=1";
    await $c.sbm.execute($p, sbm_saveEmp);
  }
};
scwin.sbm_saveEmp_submitdone = async function (e) {
  var result = e.responseJSON?.resultDataSet?.[0];

  // 결과 없거나 실패 시 종료
  if (!result || result.Msg !== "SUCC") return;
  if (scwin.UPDATE_AUTH == "") {
    //20150209 jisoo,확인버튼삭제//cfDisableBtn([btn_Upt, btn_UptChoice]);
  } else {
    //20150209 jisoo,확인버튼삭제//cfEnableBtnOnly([btn_Upt, btn_UptChoice]);
  }
  if (scwin.PRINT_AUTH == "") {
    $c.gus.cfDisableBtn($p, [btn_Dcsn, btn_DcsnChoice]);
  } else {
    $c.gus.cfEnableBtnOnly($p, [btn_Dcsn, btn_DcsnChoice]);
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회 조건 Reset
//-------------------------------------------------------------------------
scwin.f_Reset = function () {
  // 일반 컴포넌트(input, select, autoComplete 등) 초기화
  $c.gus.cfInitObjects($p, tb_searchCondition);

  // udc_comCode 내부 입력 필드 수동 초기화
  ed_eqCd.setValue("");
  ed_vehclNo.setValue("");
  dptWrkPlCd.setValue("");
  dptWrkPlNm.setValue("");
  arvWrkPlCd.setValue("");
  arvWrkPlNm.setValue("");
  em_alloccarPicId.setValue("");
  txt_alloccarPicNm.setValue("");
  bilgMchtCd.setValue("");
  bilgMcht.setValue("");
  copCoCd.setValue("");
  copCoNm.setValue("");
  ed_lineCd.setValue("");
  txt_lineNm.setValue("");

  // udc_fromToCalendar 초기화
  udc_wrkDt.setInitDate(scwin.strDate, scwin.strDate);
  ica_dptStDt.setValue("");
  ica_dptEndDt.setValue("");

  // 그 외 기본값 복원
  co_lc_workGubun.setValue("B");
};
scwin.f_resetChk = async function () {
  for (let i = 1; i <= 24; i++) {
    let chbId = "chb_sell" + i;
    let chbComp = $p.getComponentById(chbId);
    if (chbComp) {
      chbComp.setValue("0");
    }
  }
  chb_sell24_value.setValue("");
};

//-------------------------------------------------------------------------
// List 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_toExcel1 = async function () {
  $c.data.downloadGridViewExcel($p, scwin.curshowGrid, {
    fileName: "오더 정보.xlsx",
    sheetName: "오더 정보",
    useDataFormat: "true",
    useHeaderCheckBoxLabel: "true"
  }, 29);
};

//-------------------------------------------------------------------------
// 작업구분별 grid 그리기
//-------------------------------------------------------------------------
scwin.f_createGrid = function () {
  if (ds_emp.getCellData(0, "wrkCls") === "C" || co_lc_workGubun.getValue() === "C") {
    if (co_lc_logisticsBranch.getValue() === "6AA") {
      gr_emp_A.show();
      gr_emp_B.hide();
      gr_emp_C.hide();
      udc_section1.setGridId("gr_emp_A");
      scwin.curshowGrid = gr_emp_A;
    } else {
      gr_emp_A.hide();
      gr_emp_B.show();
      gr_emp_C.hide();
      udc_section1.setGridId("gr_emp_B");
      scwin.curshowGrid = gr_emp_B;
    }
  } else {
    gr_emp_A.hide();
    gr_emp_B.hide();
    gr_emp_C.show();
    udc_section1.setGridId("gr_emp_C");
    scwin.curshowGrid = gr_emp_C;
  }
};

// 일괄취소
scwin.f_Undo = function () {
  // f_Batch로 삽입된 "I" 상태 행 명시적 삭제 (뒤에서부터 순회해야 index 안 밀림)
  for (let i = ds_emp.getRowCount() - 1; i >= 0; i--) {
    if (ds_emp.getRowStatus(i) === "C") {
      ds_emp.removeRow(i);
    }
  }
  ds_emp.undoAll();
};

//-------------------------------------------------------------------------
// 작업구분별 grid 그리기
// (일괄적용)
//-------------------------------------------------------------------------
scwin.f_Batch = async function () {
  let j = 0;
  let flag = false;
  let topValue = 0;
  let topValueCd = "";
  for (let i = 0; i < 24; i++) {
    let chbId = "chb_sell" + (i + 1);
    let chbComp = $p.getComponentById(chbId);
    if (chbComp.getValue() === "1") {
      flag = true;
      if (topValue < Number(scwin.chb_sell_value[i]) && i + 1 != 18 && i + 1 != 24) {
        //검색기, 기타는 별도 계산
        topValue = scwin.chb_sell_value[i];
        topValueCd = scwin.chb_sell_cd[i];
      }
    }
  }
  if (!flag) {
    await $c.gus.cfAlertMsg($p, "일괄적용 할증종류가 선택 되지 않았습니다. \n 확인을 먼저 해주세요");
    return;
  }
  let totalRow = ds_emp.getRowCount();
  let lastAddIndex = 0;
  for (let i = 0; i < totalRow; i++) {
    if (ds_emp.getCellData(i, "che") === "1" && ds_emp.getRowStatus(i) !== "C") {
      for (let jj = 0; jj < 24; jj++) {
        let chbComp = $p.getComponentById("chb_sell" + (jj + 1));
        if (chbComp.getValue() === "1") {
          let newRow = ds_emp.insertRow(ds_emp.getRowCount());
          ds_emp.setRowJSON(newRow, ds_emp.getRowJSON(i), true);
          if ("2022" == scwin.chb_sell_cd[jj] || "2028" == scwin.chb_sell_cd[jj]) {
            //검색기, 기타는 별도 계산
            //검색기, 기타는 별도 계산
            ds_emp.setCellData(newRow, "dcScNm", scwin.chb_sell_nm[jj]);
            ds_emp.setCellData(newRow, "dcScCd", scwin.chb_sell_cd[jj]);
            if ("2022" === scwin.chb_sell_cd[jj]) {
              ds_emp.setCellData(newRow, "dcScAmt", scwin.chb_sell_value[jj] != "" ? scwin.chb_sell_value[jj] : "0"); // 고정금액 96000
            } else {
              ds_emp.setCellData(newRow, "dcScAmt", chb_sell24_value.getValue() != "" ? chb_sell24_value.getValue() : "0"); // 사용자 입력
            }
            ds_emp.setCellData(newRow, "dcScAmtRate", "0");
            ds_emp.setCellData(newRow, "regDtm", ed_allCopCoConfirmDt.getValue());
            ds_emp.setCellData(newRow, "confirmDt", ed_allCopCoConfirmDt.getValue());
            ds_emp.setCellData(newRow, "dcsnYn", "0");
            ds_emp.setCellData(newRow, "dcsnDt", "");
            ds_emp.setCellData(newRow, "dcScRegNm", "");
          } else {
            // 비율 계산
            ds_emp.setCellData(newRow, "dcScNm", scwin.chb_sell_nm[jj]);
            ds_emp.setCellData(newRow, "dcScCd", scwin.chb_sell_cd[jj]);
            let sellVal = scwin.chb_sell_value[jj] != "" ? scwin.chb_sell_value[jj] : "0";
            let pchsAmtVal = ds_emp.getCellData(i, "pchsAmt");
            if (topValueCd == scwin.chb_sell_cd[jj]) {
              // 가장 높은 할증: 100% 적용
              ds_emp.setCellData(newRow, "dcScAmt", Math.round(pchsAmtVal * (sellVal / 100) / 100) * 100); // 십단위에서 반올림
              ds_emp.setCellData(newRow, "dcScAmtRate", sellVal); //할증율이 가장 큰 항목 할증율 * 100% 할증율 적용, 
            } else {
              ds_emp.setCellData(newRow, "dcScAmt", Math.round(pchsAmtVal * (sellVal / 200) / 100) * 100); //십단위에서 반올림
              ds_emp.setCellData(newRow, "dcScAmtRate", sellVal / 2); //그 외 항목 할증율 * 50% 할증율 적용
            }
            ds_emp.setCellData(newRow, "regDtm", ed_allCopCoConfirmDt.getValue());
            ds_emp.setCellData(newRow, "confirmDt", ed_allCopCoConfirmDt.getValue());
            ds_emp.setCellData(newRow, "dcsnYn", "0");
            ds_emp.setCellData(newRow, "dcsnDt", "");
            ds_emp.setCellData(newRow, "dcScRegNm", "");
          }

          // 마지막에 추가된 행에 focus
          lastAddIndex = newRow;
        }
      }
      ds_emp.setCellData(i, "che", "0");
    }
  }
  scwin.curshowGrid.setFocusedCell(lastAddIndex, "che", true);
  var options = {};
  options.sortIndex = "odrNo wrkstpseq";
  options.sortOrder = "1 1"; // 내림차순 (DESC): -1, 오름차순 (ASC): 1
  ds_emp.multisort(options);
  await $c.gus.cfAlertMsg($p, "일괄적용이 완료되었습니다.");
};
scwin.sbm_deleteEmp_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, "성공적으로 삭제하였습니다.");
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 할인할증자료 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  let icnt = 0;
  let chkModified = ds_emp.getModifiedIndex();
  if (chkModified.length <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_001, ["Data"]);
    return;
  }
  if (scwin.DELETE_AUTH == "") {
    await $c.gus.cfAlertMsg($p, "삭제 권한이 없습니다.");
    return;
  }
  for (let i = 0; i < ds_emp.getRowCount(); i++) {
    if (ds_emp.getCellData(i, "che") == "1") {
      icnt++;
      if (ds_emp.getCellData(i, "dcsnYn") == "2" && ds_emp.getCellData(i, "dcsnDt").trim() != "") {
        await $c.gus.cfAlertMsg($p, "확정되었으므로 삭제할 수 없습니다.");
        return;
      }
    }
  }
  if (icnt > 0) {
    let chk = await $c.win.confirm($p, "삭제하시겠습니까?");
    if (chk) {
      scwin.f_HeaderCreate();
      sbm_deleteEmp.action = "/ds.op.wrkrslts.transwrkrslts.DeleteDiscountSurchargeCMD.do?pageGubun=1";
      await $c.sbm.execute($p, sbm_deleteEmp);
    }
  } else {
    await $c.gus.cfAlertMsg($p, "삭제할 자료가 없습니다.");
    return;
  }
};

// 확인선택 >> 해당 컴포넌트 주석으로 미사용
scwin.f_ConfirmChoice = async function () {
  if (scwin.cheCnt == "1") {
    ds_emp.undoAll();
    if (scwin.PRINT_AUTH == "") {
      $c.gus.cfDisableBtn($p, [btn_Dcsn, btn_DcsnChoice]);
    } else {
      $c.gus.cfEnableBtnOnly($p, [btn_Dcsn, btn_DcsnChoice]);
    }
    for (let i = 0; i < ds_emp.getRowCount(); i++) {
      ds_emp.setCellData(i, "che", "0");
      ds_emp.setCellData(i, "confirmYn", ds_emp.getOriginalCellData(i, "confirmYn"));
      ds_emp.setCellData(i, "confirmDt", ds_emp.getOriginalCellData(i, "confirmDt"));
    }
    scwin.cheCnt = "0";
  } else {
    $c.gus.cfDisableBtn($p, [btn_Dcsn, btn_DcsnChoice]);
    for (let i = 0; i < ds_emp.getRowCount(); i++) {
      if (ds_emp.getOriginalCellData(i, "regDtm") != "" && ds_emp.getOriginalCellData(i, "dcsnYn") != "2") {
        ds_emp.setCellData(i, "che", "1");
        ds_emp.setCellData(i, "confirmYn", "2");
        if (ed_allCopCoConfirmDt.getValue() == "") {
          ds_emp.setCellData(i, "confirmDt", scwin.vCurDate);
        } else {
          ds_emp.setCellData(i, "confirmDt", ed_allCopCoConfirmDt.getValue());
        }
      }
    }
    scwin.cheCnt = "1";
  }
};

// 확인해제 >> 해당 컴포넌트 주석으로 미사용
scwin.f_CancelChoice = async function () {
  for (let i = 0; i < ds_emp.getRowCount(); i++) {
    if (ds_emp.getOriginalCellData(i, "regDtm") != "" && ds_emp.getOriginalCellData(i, "confirmYn") == "2" && ds_emp.getOriginalCellData(i, "dcsnYn") == "0") {
      ds_emp.setCellData(i, "che", "1");
      ds_emp.setCellData(i, "confirmYn", "0");
      ds_emp.setCellData(i, "confirmDt", "");
    }
  }
};

// 확정해제
scwin.f_CancelDcsn = async function () {
  for (let i = 0; i < ds_emp.getRowCount(); i++) {
    let regDtm = ds_emp.getRowStatus(i) === "C" ? ds_emp.getCellData(i, "regDtm") : ds_emp.getOriginalCellData(i, "regDtm");
    let dcsnYn = ds_emp.getRowStatus(i) === "C" ? ds_emp.getCellData(i, "dcsnYn") : ds_emp.getOriginalCellData(i, "dcsnYn");
    if (ds_emp.getCellData(i, "che") === "1" && regDtm != "" && dcsnYn === "2") {
      // dcsnYn:2 (승인)
      ds_emp.setCellData(i, "dcsnYn", "0");
      ds_emp.setCellData(i, "dcsnDt", "");

      //20150209 지수, 확정해제시 confirmYn 2(미확인)으로 dtm null으로,
      ds_emp.setCellData(i, "confirmYn", "2");
      ds_emp.setCellData(i, "confirmDt", "");
    }
  }
};

// 확정선택
scwin.f_DcsnChoice = async function () {
  if (scwin.cheCnt === "1") {
    scwin.f_undoAll();
    for (let i = 0; i < ds_emp.getRowCount(); i++) {
      ds_emp.setCellData(i, "che", "0");
      ds_emp.setCellData(i, "dcsnYn", ds_emp.getOriginalCellData(i, "dcsnYn"));
      ds_emp.setCellData(i, "dcsnDt", ds_emp.getOriginalCellData(i, "dcsnDt"));
    }
    scwin.cheCnt = "0";
  } else {
    // 적용: che=1 이고 실적일자 있고 아직 미확정인 행에 dcsnYn=2 세팅
    for (let i = 0; i < ds_emp.getRowCount(); i++) {
      let regDtm = ds_emp.getRowStatus(i) === "C" ? ds_emp.getCellData(i, "regDtm") : ds_emp.getOriginalCellData(i, "regDtm");
      let dcsnYn = ds_emp.getRowStatus(i) === "C" ? ds_emp.getCellData(i, "dcsnYn") : ds_emp.getOriginalCellData(i, "dcsnYn");
      if (ds_emp.getCellData(i, "che") === "1" && regDtm !== "" && dcsnYn !== "2") {
        ds_emp.setCellData(i, "dcsnYn", "2");
        ds_emp.setCellData(i, "dcsnDt", ed_allCopCoConfirmDt.getValue() == "" ? scwin.vCurDate : ed_allCopCoConfirmDt.getValue());
      }
    }
    scwin.cheCnt = "1";
  }
};
scwin.lc_wrkClsCd_onchange = function (e) {
  scwin.f_filterDs();
  $c.gus.cfShowTotalRows($p, totalCnt, ds_emp.getRowCount());
};
scwin.lc_pusanClsCd_onchange = function (e) {
  lc_wrkClsCd.setValue("");
  scwin.f_filterDs();
  $c.gus.cfShowTotalRows($p, totalCnt, ds_emp.getRowCount());
};
scwin.f_filterDs = async function () {
  let temp = lc_wrkClsCd.getValue();
  let pusanClsCd = lc_pusanClsCd.getValue();
  if (temp != "" || pusanClsCd != "") {
    let filterExpr = "";
    if (temp != "") {
      let mappedVal = "";
      if (temp == "S") {
        mappedVal = "셔틀";
      } else if (temp == "L") {
        mappedVal = "로컬";
      } else if (temp == "J") {
        mappedVal = "중장거리";
      }
      if (mappedVal != "") {
        filterExpr = "wrkClsCd == '" + mappedVal + "'";
      }
    }
    if (pusanClsCd != "") {
      let districtCode = "";
      if (pusanClsCd == "01") {
        districtCode = "GMN";
      } else if (pusanClsCd == "02") {
        districtCode = "JRB";
      } else if (pusanClsCd == "03") {
        districtCode = "GCN";
      } else if (pusanClsCd == "04") {
        districtCode = "NEW_PORT";
      }
      if (districtCode != "") {
        let pusanFilter = "(dptDistrictCd == '" + districtCode + "' || arvDistrictCd == '" + districtCode + "')";
        if (filterExpr != "") {
          filterExpr = filterExpr + " && " + pusanFilter;
        } else {
          filterExpr = pusanFilter;
        }
      }
    }
    if (filterExpr != "") {
      ds_emp.setFilterExpression(filterExpr);
      ds_emp.filter();
    } else {
      ds_emp.removeColumnFilterAll();
    }
  } else {
    ds_emp.removeColumnFilterAll();
  }
};

// 출발일시 콤보 변경시
scwin.lc_dptGubun_onchange = async function (e) {
  let val = lc_dptGubun.getValue(); // 전체
  if (val == "") {
    ica_dptStDt.setValue("");
    ica_dptEndDt.setValue("");
  } else if (val == "01" || val == "02") {
    ica_dptStDt.setValue(ica_wrkStDt.getValue());
    ica_dptEndDt.setValue(ica_wrkEndDt.getValue());
  }
};

// 오더일자 등 EMEdit Focus 이동시 
scwin.udc_wrkDt_onBlur = function (e) {
  if (lc_dptGubun.getValue() != "") {
    ica_dptStDt.setValue(ica_wrkStDt.getValue());
    ica_dptEndDt.setValue(ica_wrkEndDt.getValue());
  }
};
scwin.udc_wrkDt_onBlurTo = function (e) {
  if (lc_dptGubun.getValue() != "") {
    ica_dptStDt.setValue(ica_wrkStDt.getValue());
    ica_dptEndDt.setValue(ica_wrkEndDt.getValue());
  }
};

// 조회 버튼
scwin.btn_Retrieve_onclick = async function (e) {
  scwin.f_Retrieve();
};
// 휴지통 버튼
scwin.btn_Reset_onclick = async function (e) {
  scwin.f_Reset();
};

// 초기화 버튼
scwin.btn_resetChk_onclick = async function (e) {
  scwin.f_resetChk();
};

// 일괄적용 버튼
scwin.btn_com_onclick = async function (e) {
  scwin.f_Batch();
};

// 일괄취소 버튼
scwin.btn_Undo_onclick = async function (e) {
  scwin.f_Undo();
};

// 삭제 버튼
scwin.btn_Del_onclick = async function (e) {
  scwin.f_Delete();
};
// 등록 버튼
scwin.btn_Add_onclick = async function (e) {
  scwin.f_Register();
};

// 확정 버튼
scwin.btn_Dcsn_onclick = async function (e) {
  scwin.f_Dcsn();
};

// 확정선택
scwin.btn_DcsnChoice_onclick = async function (e) {
  scwin.f_DcsnChoice();
};

// 확정해제
scwin.btn_CancelDcsn_onclick = async function (e) {
  scwin.f_CancelDcsn();
};

// 조회조건 udc EMEdit Focus 이동시
scwin.udc_eq_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_eqCd, ed_vehclNo, "1");
};
scwin.udc_eq_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_vehclNo, ed_eqCd, "1", false);
};
scwin.udc_eq_onclickEvent = function (e) {
  scwin.f_openPopUp("1", ed_eqCd.getValue(), ed_vehclNo.getValue(), "F", "F");
};
scwin.udc_dptWrkPl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(dptWrkPlCd, dptWrkPlNm, "2");
};
scwin.udc_dptWrkPl_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(dptWrkPlNm, dptWrkPlCd, "2", false);
};
scwin.udc_dptWrkPl_onclickEvent = function (e) {
  scwin.f_openPopUp("2", dptWrkPlCd.getValue(), dptWrkPlNm.getValue(), "F", "F");
};
scwin.udc_arvWrkPl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(arvWrkPlCd, arvWrkPlNm, "3");
};
scwin.udc_arvWrkPl_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(arvWrkPlNm, arvWrkPlCd, "3", false);
};
scwin.udc_arvWrkPl_onclickEvent = function (e) {
  scwin.f_openPopUp("3", arvWrkPlCd.getValue(), arvWrkPlNm.getValue(), "F", "F");
};
scwin.udc_alloccarPic_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(em_alloccarPicId, txt_alloccarPicNm, "6");
};
scwin.udc_alloccarPic_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_alloccarPicNm, em_alloccarPicId, "6", false);
};
scwin.udc_alloccarPic_onclickEvent = function (e) {
  scwin.f_openPopUp('6', em_alloccarPicId.getValue(), txt_alloccarPicNm.getValue(), "F", "F");
};
scwin.udc_bilgMcht_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(bilgMchtCd, bilgMcht, "4");
};
scwin.udc_bilgMcht_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(bilgMcht, bilgMchtCd, "4", false);
};
scwin.udc_bilgMcht_onclickEvent = function (e) {
  scwin.f_openPopUp('4', bilgMchtCd.getValue(), bilgMcht.getValue(), "F", "F");
};
scwin.udc_copCo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(copCoCd, copCoNm, "5");
};
scwin.udc_copCo_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(copCoNm, copCoCd, "5", false);
};
scwin.udc_copCo_onclickEvent = function (e) {
  scwin.f_openPopUp("5", copCoCd.getValue(), copCoNm.getValue(), "F", "F");
};
scwin.udc_line_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, txt_lineNm, "7");
};
scwin.udc_line_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_lineNm, ed_lineCd, "7", false);
};
scwin.udc_line_onclickEvent = function (e) {
  scwin.f_openPopUp("7", ed_lineCd.getValue(), txt_lineNm.getValue(), "F", "T");
};

// grid 헤더 체크박스 클릭시 공통함수
scwin.gr_emp_onheaderclick = function (grid, headerId) {
  var curVal = grid.getHeaderValue(headerId);
  if (scwin.cheCnt == "1") {
    scwin.f_undoAll(ds_emp);
    scwin.cheCnt = "0";
  } else {
    for (let i = 0; i < ds_emp.getRowCount(); i++) {
      let regDtm = ds_emp.getRowStatus(i) === "C" ? ds_emp.getCellData(i, "regDtm") : ds_emp.getOriginalCellData(i, "regDtm");
      if (regDtm == "") {
        ds_emp.setCellData(i, "che", "1");
      }
    }
    scwin.cheCnt = "1";
  }
};

// DataSet 변경사항 전체 되돌리기 (undoAll)
scwin.f_undoAll = function (ds) {
  // 신규 삽입("C") 행은 undoAll 대상이 아니므로 명시적으로 삭제 (뒤에서부터 순회하여 index 밀림 방지)
  for (var i = ds_emp.getRowCount() - 1; i >= 0; i--) {
    if (ds_emp.getRowStatus(i) === "C") {
      ds_emp.removeRow(i);
    }
  }
  // 나머지 변경사항 전체 되돌리기
  ds_emp.undoAll();
};
scwin.gr_emp_A_onheaderclick = function (headerId) {
  if (headerId === "A_che_h") {
    scwin.gr_emp_onheaderclick(gr_emp_A, headerId);
  }
};
scwin.gr_emp_B_onheaderclick = function (headerId) {
  if (headerId === "B_che_h") {
    scwin.gr_emp_onheaderclick(gr_emp_B, headerId);
  }
};
scwin.gr_emp_C_onheaderclick = function (headerId) {
  if (headerId === "C_che_h") {
    scwin.gr_emp_onheaderclick(gr_emp_C, headerId);
  }
};
scwin.gr_emp_B_ontextimageclick = async function (rowIndex, columnIndex) {
  let colid = $c.util.getComponent($p, this.id).getColumnID(columnIndex);
  switch (colid) {
    case "dcScNm":
      var paramObject = new Object();
      paramObject.ds_emp = ds_emp.getAllJSON();
      paramObject.curRow = ds_emp.getRowPosition();
      let win_url = "/ui/ds/op/wrkrslts/transwrkrslts/op_304_03_03p.xml";
      let data = {};
      let opts = {
        id: "smpPop",
        popupName: "할증할인선택",
        modal: true,
        type: "browserPopup",
        width: 375,
        height: 600,
        title: "할증할인선택"
      };
      let rtnList = await $c.win.openPopup($p, win_url, opts, paramObject);
      if (rtnList) {
        ds_emp.setJSON(rtnList.getAllJSON());
        for (let i = 0; i < ds_emp.getRowCount(); i++) {
          if (ds_emp.getCellData(i, "che") == "1") {
            ds_emp.setCellData(i, "regDtm", scwin.vCurDate);
          }
        }
        gr_emp_B.refresh();
        gr_emp_B.setSortable("odrNo", 1);
        gr_emp_B.refresh();
        gr_emp_B.setFocusedCell(rowIndex, columnIndex, true);
      }
      break;
    default:
      break;
  }
};
scwin.gr_emp_A_ontextimageclick = async function (rowIndex, columnIndex) {
  let colid = $c.util.getComponent($p, this.id).getColumnID(columnIndex);
  switch (colid) {
    case "dcScNm":
      var paramObject = new Object();
      paramObject.ds_emp = ds_emp.getAllJSON();
      paramObject.curRow = ds_emp.getRowPosition();
      let win_url = "/ui/ds/op/wrkrslts/transwrkrslts/op_304_03_03p.xml";
      let data = {};
      let opts = {
        id: "smpPop",
        popupName: "할증할인선택",
        modal: true,
        type: "browserPopup",
        width: 375,
        height: 600,
        title: "할증할인선택"
      };
      let rtnList = await $c.win.openPopup($p, win_url, opts, paramObject);
      if (rtnList) {
        ds_emp.setJSON(rtnList.getAllJSON());
        for (let i = 0; i < ds_emp.getRowCount(); i++) {
          if (ds_emp.getCellData(i, "che") == "1") {
            ds_emp.setCellData(i, "regDtm", scwin.vCurDate);
          }
        }
        gr_emp_A.refresh();
        gr_emp_A.setSortable("odrNo", 1);
        gr_emp_A.refresh();
        gr_emp_A.setFocusedCell(rowIndex, columnIndex, true);
      }
      break;
    default:
      break;
  }
};
scwin.gr_emp_C_ontextimageclick = async function (rowIndex, columnIndex) {
  let colid = $c.util.getComponent($p, this.id).getColumnID(columnIndex);
  switch (colid) {
    case "dcScNm":
      var paramObject = new Object();
      paramObject.ds_emp = ds_emp.getAllJSON();
      paramObject.curRow = ds_emp.getRowPosition();
      let win_url = "/ui/ds/op/wrkrslts/transwrkrslts/op_304_03_03p.xml";
      let data = {};
      let opts = {
        id: "smpPop",
        popupName: "할증할인선택",
        modal: true,
        type: "browserPopup",
        width: 375,
        height: 600,
        title: "할증할인선택"
      };
      let rtnList = await $c.win.openPopup($p, win_url, opts, paramObject);
      if (rtnList) {
        ds_emp.setJSON(rtnList.getAllJSON());
        for (let i = 0; i < ds_emp.getRowCount(); i++) {
          if (ds_emp.getCellData(i, "che") == "1") {
            ds_emp.setCellData(i, "regDtm", scwin.vCurDate);
          }
        }
        gr_emp_C.refresh();
        gr_emp_C.setSortable("odrNo", 1);
        gr_emp_C.refresh();
        gr_emp_C.setFocusedCell(rowIndex, columnIndex, true);
      }
      break;
    default:
      break;
  }
};
scwin.programNm = "운송할인할증(건별)";
scwin.mdiTitle = "운송할인할증등록";
scwin.gr_emp_B_oncellclick = async function (rowIndex, columnIndex, columnId) {
  let t = 0;
  let p = 0;
  let cur = 0;
  if (columnId !== "dcScNm") {
    var infoC = {
      inputType: "text" // ← 실제 이미지 타입
    };
    gr_emp_B.setCellInputType(rowIndex, "dcScNm", infoC);
  } else {
    var infoC = {
      inputType: "textImage",
      // ← 실제 이미지 타입
      options: {
        viewType: "icon"
      }
    };
    gr_emp_B.setCellInputType(rowIndex, "dcScNm", infoC);
  }
  if (columnId == "commNm") {
    if (ds_emp.getCellData(rowIndex, "commNm") != "") {
      // 할인할증등록화면으로 전환
      let url = "/ui/ds/op/wrkrslts/transwrkrslts/op_304_03_01b.xml";
      if (ds_emp.getRowCount() < 1) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
        return;
      }
      let param = {
        transWrkIndictNo: ds_emp.getCellData(rowIndex, "transWrkIndictNo"),
        lobranCd: co_lc_logisticsBranch.getValue(),
        wrkStDt: ica_wrkStDt.getValue(),
        wrkCls: "B"
      };
      $c.win.openMenu($p, scwin.programNm, url, "op_304_03_01b.xml", param, {
        openAction: "exist",
        mdiTitle: scwin.mdiTitle
      });
    } else if (ds_emp.getCellData(rowIndex, "commNm") == "") {
      await $c.gus.cfAlertMsg($p, "품명이 있는 항목을 선택하세요");
      return;
    }
  } else if (columnId == "cntrNo") {
    if (ds_emp.getCellData(rowIndex, "cntrNo") != "") {
      // 할인할증등록화면으로 전환
      let url = "/ui/ds/op/wrkrslts/transwrkrslts/op_304_03_01b.xml";
      if (ds_emp.getRowCount() < 1) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
        return;
      }
      let param = {
        transWrkIndictNo: ds_emp.getCellData(rowIndex, "transWrkIndictNo"),
        lobranCd: co_lc_logisticsBranch.getValue(),
        wrkStDt: ica_wrkStDt.getValue(),
        wrkCls: "C",
        cntrNo: ds_emp.getCellData(rowIndex, "cntrNo")
      };
      $c.win.openMenu($p, scwin.programNm, url, "op_304_03_01b.xml", param, {
        openAction: "exist",
        mdiTitle: scwin.mdiTitle
      });
    }
  }
  if (columnId == "dcScNm") {
    //할인할증사유
    if (btn_Add.getStyle("display") == "none") {
      if (await $c.gus.cfAlertMsg($p, "등록 권한이 없습니다.")) {
        gr_emp_B.setCellDisableEdit(rowIndex, "dcScNm", "none");
        return;
      }
    }
    for (let i = 0; i < ds_emp.getRowCount(); i++) {
      if (ds_emp.getCellData(i, "transWrkIndictNo") == ds_emp.getCellData(rowIndex, "transWrkIndictNo") && ds_emp.getCellData(i, "transRsltsSeq") == ds_emp.getCellData(rowIndex, "transRsltsSeq")) {
        t++;
        p = i;
      }
    }
    cur = p - t + 1;
    if (cur != rowIndex) {
      await $c.gus.cfAlertMsg($p, "추가된 항목이므로 더 이상 추가할 수 없습니다.");
      gr_emp_B.setCellDisableEdit(rowIndex, "dcScNm", "none");
      return;
    }
  } else if (columnId == "dcsnYn") {
    if (btn_Del.getStyle("display") == "none") {
      await $c.gus.cfAlertMsg($p, "확인 권한이 없습니다.");
      gr_emp_B.setCellDisableEdit(ds_emp.getRowPosition(), "dcScNm", "none");
      return;
    }
  } else if (columnId == "odrNo") {
    let hrefaddress = "/ui/ds/op/wrkrslts/transwrkrslts/op_304_01_04b.xml";
    var odrNo = ds_emp.getCellData(rowIndex, "odrNo");
    let param = {
      odrNo,
      paramOdrNo: odrNo
    };
    $c.win.openMenu($p, "오더완료처리", hrefaddress, "op_304_01_04b.xml", param, {
      openAction: "exist"
    });
  }
};
scwin.gr_emp_A_oncellclick = async function (rowIndex, columnIndex, columnId) {
  let t = 0;
  let p = 0;
  let cur = 0;
  if (columnId !== "dcScNm") {
    var infoC = {
      inputType: "text" // ← 실제 이미지 타입
    };
    gr_emp_A.setCellInputType(rowIndex, "dcScNm", infoC);
  } else {
    var infoC = {
      inputType: "textImage",
      // ← 실제 이미지 타입
      options: {
        viewType: "icon"
      }
    };
    gr_emp_A.setCellInputType(rowIndex, "dcScNm", infoC);
  }
  if (columnId == "commNm") {
    if (ds_emp.getCellData(rowIndex, "commNm") != "") {
      // 할인할증등록화면으로 전환
      let url = "/ui/ds/op/wrkrslts/transwrkrslts/op_304_03_01b.xml";
      if (ds_emp.getRowCount() < 1) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
        return;
      }
      let param = {
        transWrkIndictNo: ds_emp.getCellData(rowIndex, "transWrkIndictNo"),
        lobranCd: co_lc_logisticsBranch.getValue(),
        wrkStDt: ica_wrkStDt.getValue(),
        wrkCls: "B"
      };
      $c.win.openMenu($p, scwin.programNm, url, "op_304_03_01b.xml", param, {
        openAction: "exist",
        mdiTitle: scwin.mdiTitle
      });
    } else if (ds_emp.getCellData(rowIndex, "commNm") == "") {
      await $c.gus.cfAlertMsg($p, "품명이 있는 항목을 선택하세요");
      return;
    }
  } else if (columnId == "cntrNo") {
    if (ds_emp.getCellData(rowIndex, "cntrNo") != "") {
      // 할인할증등록화면으로 전환
      let url = "/ui/ds/op/wrkrslts/transwrkrslts/op_304_03_01b.xml";
      if (ds_emp.getRowCount() < 1) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
        return;
      }
      let param = {
        transWrkIndictNo: ds_emp.getCellData(rowIndex, "transWrkIndictNo"),
        lobranCd: co_lc_logisticsBranch.getValue(),
        wrkStDt: ica_wrkStDt.getValue(),
        wrkCls: "C",
        cntrNo: ds_emp.getCellData(rowIndex, "cntrNo")
      };
      $c.win.openMenu($p, scwin.programNm, url, "op_304_03_01b.xml", param, {
        openAction: "exist",
        mdiTitle: scwin.mdiTitle
      });
    } else if (ds_emp.getCellData(rowIndex, "commNm") == "") {
      await $c.gus.cfAlertMsg($p, "품명이 있는 항목을 선택하세요");
      return;
    }
  }
  if (columnId == "dcScNm") {
    //할인할증사유
    if (btn_Add.getStyle("display") == "none") {
      if (await $c.gus.cfAlertMsg($p, "등록 권한이 없습니다.")) {
        gr_emp_A.setCellDisableEdit(rowIndex, "dcScNm", "none");
        return;
      }
    }
    for (let i = 0; i < ds_emp.getRowCount(); i++) {
      if (ds_emp.getCellData(i, "transWrkIndictNo") == ds_emp.getCellData(rowIndex, "transWrkIndictNo") && ds_emp.getCellData(i, "transRsltsSeq") == ds_emp.getCellData(rowIndex, "transRsltsSeq")) {
        t++;
        p = i;
      }
    }
    cur = p - t + 1;
    if (cur != rowIndex) {
      await $c.gus.cfAlertMsg($p, "추가된 항목이므로 더 이상 추가할 수 없습니다.");
      gr_emp_A.setCellDisableEdit(rowIndex, "dcScNm", "none");
      return;
    }
  } else if (columnId == "dcsnYn") {
    if (btn_Del.getStyle("display") == "none") {
      await $c.gus.cfAlertMsg($p, "확인 권한이 없습니다.");
      gr_emp_A.setCellDisableEdit(ds_emp.getRowPosition(), "dcScNm", "none");
      return;
    }
  } else if (columnId == "odrNo") {
    let hrefaddress = "/ui/ds/op/wrkrslts/transwrkrslts/op_304_01_04b.xml";
    var odrNo = ds_emp.getCellData(rowIndex, "odrNo");
    let param = {
      odrNo,
      paramOdrNo: odrNo
    };
    $c.win.openMenu($p, "오더완료처리", hrefaddress, "op_304_01_04b.xml", param, {
      openAction: "exist"
    });
  }
};
scwin.gr_emp_C_oncellclick = async function (rowIndex, columnIndex, columnId) {
  let t = 0;
  let p = 0;
  let cur = 0;
  if (columnId !== "dcScNm") {
    var infoC = {
      inputType: "text" // ← 실제 이미지 타입
    };
    gr_emp_C.setCellInputType(rowIndex, "dcScNm", infoC);
  } else {
    var infoC = {
      inputType: "textImage",
      // ← 실제 이미지 타입
      options: {
        viewType: "icon"
      }
    };
    gr_emp_C.setCellInputType(rowIndex, "dcScNm", infoC);
  }
  if (columnId == "commNm") {
    if (ds_emp.getCellData(rowIndex, "commNm") != "") {
      // 할인할증등록화면으로 전환
      let url = "/ui/ds/op/wrkrslts/transwrkrslts/op_304_03_01b.xml";
      if (ds_emp.getRowCount() < 1) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
        return;
      }
      let param = {
        transWrkIndictNo: ds_emp.getCellData(rowIndex, "transWrkIndictNo"),
        lobranCd: co_lc_logisticsBranch.getValue(),
        wrkStDt: ica_wrkStDt.getValue(),
        wrkCls: "B"
      };
      $c.win.openMenu($p, scwin.programNm, url, "op_304_03_01b.xml", param, {
        openAction: "exist",
        mdiTitle: scwin.mdiTitle
      });
    } else if (ds_emp.getCellData(rowIndex, "commNm") == "") {
      await $c.gus.cfAlertMsg($p, "품명이 있는 항목을 선택하세요");
      return;
    }
  } else if (columnId == "cntrNo") {
    if (ds_emp.getCellData(rowIndex, "cntrNo") != "") {
      // 할인할증등록화면으로 전환
      let url = "/ui/ds/op/wrkrslts/transwrkrslts/op_304_03_01b.xml";
      if (ds_emp.getRowCount() < 1) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
        return;
      }
      let param = {
        transWrkIndictNo: ds_emp.getCellData(rowIndex, "transWrkIndictNo"),
        lobranCd: co_lc_logisticsBranch.getValue(),
        wrkStDt: ica_wrkStDt.getValue(),
        wrkCls: "C",
        cntrNo: ds_emp.getCellData(rowIndex, "cntrNo")
      };
      $c.win.openMenu($p, scwin.programNm, url, "op_304_03_01b.xml", param, {
        openAction: "exist",
        mdiTitle: scwin.mdiTitle
      });
    } else if (ds_emp.getCellData(rowIndex, "commNm") == "") {
      await $c.gus.cfAlertMsg($p, "품명이 있는 항목을 선택하세요");
      return;
    }
  }
  if (columnId == "dcScNm") {
    //할인할증사유
    if (btn_Add.getStyle("display") == "none") {
      if (await $c.gus.cfAlertMsg($p, "등록 권한이 없습니다.")) {
        gr_emp_C.setCellDisableEdit(rowIndex, "dcScNm", "none");
        return;
      }
    }
    for (let i = 0; i < ds_emp.getRowCount(); i++) {
      if (ds_emp.getCellData(i, "transWrkIndictNo") == ds_emp.getCellData(rowIndex, "transWrkIndictNo") && ds_emp.getCellData(i, "transRsltsSeq") == ds_emp.getCellData(rowIndex, "transRsltsSeq")) {
        t++;
        p = i;
      }
    }
    cur = p - t + 1;
    if (cur != rowIndex) {
      await $c.gus.cfAlertMsg($p, "추가된 항목이므로 더 이상 추가할 수 없습니다.");
      gr_emp_C.setCellDisableEdit(rowIndex, "dcScNm", "none");
      return;
    }
  } else if (columnId == "dcsnYn") {
    if (btn_Del.getStyle("display") == "none") {
      await $c.gus.cfAlertMsg($p, "확인 권한이 없습니다.");
      gr_emp_C.setCellDisableEdit(ds_emp.getRowPosition(), "dcScNm", "none");
      return;
    }
  } else if (columnId == "odrNo") {
    let hrefaddress = "/ui/ds/op/wrkrslts/transwrkrslts/op_304_01_04b.xml";
    var odrNo = ds_emp.getCellData(rowIndex, "odrNo");
    let param = {
      odrNo,
      paramOdrNo: odrNo
    };
    $c.win.openMenu($p, "오더완료처리", hrefaddress, "op_304_01_04b.xml", param, {
      openAction: "exist"
    });
  }
};

// gr_empA,B,C 공통 적용
scwin.gr_emp_oneditend = function (rowIndex, columnId, value) {
  switch (columnId) {
    case "confirmYn":
      if (ds_emp.getCellData(rowIndex, "confirmYn") == "0") {
        ds_emp.setCellData(rowIndex, "confirmDt", "");
      } else {
        ds_emp.setCellData(rowIndex, "confirmDt", scwin.vCurDate);
      }
      if (ds_emp.getOriginalCellData(rowIndex, columnId) != ds_emp.getCellData(rowIndex, columnId)) {
        ds_emp.setCellData(rowIndex, "che", "1");
      } else {
        ds_emp.setCellData(rowIndex, "che", "0");
      }
      break;
    case "dcsnYn":
      // 확정, 등록
      if (value == "0") {
        ds_emp.setCellData(rowIndex, "dcsnDt", "");
      } else {
        ds_emp.setCellData(rowIndex, "dcsnDt", scwin.vCurDate);
      }
      if (ds_emp.getOriginalCellData(rowIndex, columnId) !== value) {
        ds_emp.setCellData(rowIndex, "che", "1");
      } else {
        ds_emp.setCellData(rowIndex, "che", "0");
      }
      break;
    case "regDtm":
    case "dcsnDt":
      if (ds_emp.getOriginalCellData(rowIndex, columnId) !== value) {
        ds_emp.setCellData(rowIndex, "che", "1");
      }
      break;
    default:
      break;
  }
};
scwin.gr_emp_A_oneditend = function (rowIndex, columnIndex, value) {
  scwin.gr_emp_oneditend(rowIndex, gr_emp_A.getColumnID(columnIndex), value);
};
scwin.gr_emp_B_oneditend = function (rowIndex, columnIndex, value) {
  scwin.gr_emp_oneditend(rowIndex, gr_emp_B.getColumnID(columnIndex), value);
};
scwin.gr_emp_C_oneditend = function (rowIndex, columnIndex, value) {
  scwin.gr_emp_oneditend(rowIndex, gr_emp_C.getColumnID(columnIndex), value);
};

// 대문자 변환
scwin.f_Upper = function (value) {
  return value.toUpperCase();
};

// 
scwin.gr_emp_CustomFormatter = function (data, formattedData, rowIndex, colIndex) {
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  let val = data;
  if (columnId == "dcScAmt") {
    if (ds_emp.getCellData(rowIndex, "dcScNm") === "") {
      val = ds_emp.getCellData(rowIndex, "pchsAmt");
    } else {
      val = ds_emp.getCellData(rowIndex, "dcScAmt");
    }
    val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else if (columnId == "dcScTotal") {
    let dcScAmtVal = ds_emp.getCellData(rowIndex, "dcScAmt");
    let pchsAmtVal = ds_emp.getCellData(rowIndex, "pchsAmt");
    if (dcScAmtVal === "" || dcScAmtVal === null || Number(dcScAmtVal) === 0) {
      val = pchsAmtVal;
    } else {
      val = Number(pchsAmtVal) + Number(dcScAmtVal);
    }
    val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return val;
};
scwin.gr_emp_A_onbeforeedit = function (rowIndex, columnIndex, value) {
  if (gr_emp_A.getColumnID(columnIndex) === "dcScNm") {
    return false;
  }
};
scwin.gr_emp_B_onbeforeedit = function (rowIndex, columnIndex, value) {
  if (gr_emp_B.getColumnID(columnIndex) === "dcScNm") {
    return false;
  }
};
scwin.gr_emp_C_onbeforeedit = function (rowIndex, columnIndex, value) {
  if (gr_emp_C.getColumnID(columnIndex) === "dcScNm") {
    return false;
  }
};
scwin.gr_emp_A_onrowindexchange = function (rowIndex, oldRow) {
  var infoC = {
    inputType: "text" // ← 실제 이미지 타입
  };
  gr_emp_A.setCellInputType(oldRow, "dcScNm", infoC);
};
scwin.gr_emp_B_onrowindexchange = function (rowIndex, oldRow) {
  var infoC = {
    inputType: "text" // ← 실제 이미지 타입
  };
  gr_emp_B.setCellInputType(oldRow, "dcScNm", infoC);
};
scwin.gr_emp_C_onrowindexchange = function (rowIndex, oldRow) {
  var infoC = {
    inputType: "text" // ← 실제 이미지 타입
  };
  gr_emp_C.setCellInputType(oldRow, "dcScNm", infoC);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'text-align: right;',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledclass:'selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 230px;',allOption:'',id:'co_lc_logisticsBranch',class:'',direction:'auto',ref:'',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_joblevel'},E:[{T:1,N:'xf:label',A:{ref:'lobranNm'}},{T:1,N:'xf:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{submenuSize:'fixed',chooseOption:'',style:'width: 100px;',allOption:'',id:'lc_dtGubun',class:'',editType:'select',search:'start',ref:'',displayMode:'value delim label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'실적일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회계일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_wrkDt',refEdDt:'',edFromId:'ica_wrkStDt',edToId:'ica_wrkEndDt','ev:onBlur':'scwin.udc_wrkDt_onBlur','ev:onBlurTo':'scwin.udc_wrkDt_onBlurTo',objTypeFrom:'Data',objTypeTo:'Data',objTypeBtn:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',style:'text-align: right;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_lc_workGubun',search:'start',style:'width: 110px;',submenuSize:'auto',displayMode:'value delim label'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th',style:'text-align: right;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할증종류',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',class:'',editType:'select',id:'co_lc_dcScKndn',ref:'',search:'start',style:'width:150px;',submenuSize:'auto',chooseOptionLabel:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_dcScKnd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th',style:'text-align: right;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CNTR번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',style:'width:100px;',maxlength:'11',allowChar:'a-zA-Z0-9',mandatory:'false',displayFormatter:'scwin.f_Upper',applyFormat:'all',validExp:'컨테이너번호:yes'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',style:'text-align: right;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',style:'width: 200px;',mandatory:'false',validExp:'오더번호:yes',maxlength:'13',allowChar:'a-zA-Z0-9',displayFormatter:'scwin.f_Upper',applyFormat:'all'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',style:'text-align: right;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_eq',codeId:'ed_eqCd',nameId:'ed_vehclNo',popupID:'',selectID:'',style:'',validTitle:'차량번호','ev:onblurCodeEvent':'scwin.udc_eq_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_eq_onblurNameEvent','ev:onclickEvent':'scwin.udc_eq_onclickEvent',maxlengthCode:'4',allowCharCode:'a-zA-Z0-9',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th',style:'text-align: right;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_dptWrkPl',codeId:'dptWrkPlCd',selectID:'',popupID:'',validTitle:'출발지',nameId:'dptWrkPlNm',style:'','ev:onblurCodeEvent':'scwin.udc_dptWrkPl_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dptWrkPl_onclickEvent','ev:onblurNameEvent':'scwin.udc_dptWrkPl_onblurNameEvent',maxlengthCode:'7',allowCharCode:'a-zA-Z0-9',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'-',class:''}},{T:1,N:'w2:udc_comCode',A:{id:'udc_arvWrkPl',codeId:'arvWrkPlCd',selectID:'',popupID:'',validTitle:'도착지',nameId:'arvWrkPlNm',style:'','ev:onblurCodeEvent':'scwin.udc_arvWrkPl_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_arvWrkPl_onblurNameEvent','ev:onclickEvent':'scwin.udc_arvWrkPl_onclickEvent',maxlengthCode:'7',allowCharCode:'a-zA-Z0-9',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th',style:'text-align: right;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledclass:'selectbox_disabled',id:'selConfirm',style:'width: 100px;',submenuSize:'fixed',ref:'',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'반려'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정대상'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',style:'text-align: right;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_alloccarPic',popupID:'',selectID:'',codeId:'em_alloccarPicId',validTitle:'',nameId:'txt_alloccarPicNm',style:'','ev:onblurCodeEvent':'scwin.udc_alloccarPic_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_alloccarPic_onblurNameEvent','ev:onclickEvent':'scwin.udc_alloccarPic_onclickEvent',maxlengthCode:'8',allowCharCode:'a-zA-Z0-9',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',style:'text-align: right;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구거래처 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgMcht',codeId:'bilgMchtCd',nameId:'bilgMcht',popupID:'',selectID:'',style:'',validTitle:'청구거래처','ev:onblurCodeEvent':'scwin.udc_bilgMcht_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bilgMcht_onblurNameEvent','ev:onclickEvent':'scwin.udc_bilgMcht_onclickEvent',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th',style:'text-align: right;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입거래처 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]}]},{T:1,N:'w2:udc_comCode',A:{id:'udc_copCo',codeId:'copCoCd',nameId:'copCoNm',popupID:'',selectID:'',style:'',validTitle:'매입거래처','ev:onblurCodeEvent':'scwin.udc_copCo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_copCo_onblurNameEvent','ev:onclickEvent':'scwin.udc_copCo_onclickEvent',maxlengthCode:'6',objTypeCode:'data',objTypeName:'data',allowCharCode:'a-zA-Z0-9',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th',style:'text-align: right;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구간 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',class:'',id:'lc_wrkClsCd',style:'width: 100px;',submenuSize:'fixed',editType:'select',search:'start',ref:'',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'셔틀'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부산로컬'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부산로컬제외'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'J'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',style:'text-align: right;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할증비율 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_dcScAmtRate',style:'width: 70px;',maxlength:'3',allowChar:'0-9'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'%이상',style:'margin-left: 7px;'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',style:'text-align: right;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SIZE/냉동 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{submenuSize:'fixed',chooseOption:'true',style:'width: 100px;',allOption:'',id:'lc_cntrSizCd',class:'',editType:'select',search:'start',chooseOptionLabel:'전체',ref:'',displayMode:'value delim label'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:autoComplete',A:{submenuSize:'fixed',chooseOption:'true',style:'width: 100px;',allOption:'',id:'lc_reeferYn',class:'',editType:'select',search:'start',ref:'',displayMode:'value delim label',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y(냉동)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th',style:'text-align: right;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]}]},{T:1,N:'w2:udc_comCode',A:{id:'udc_line',codeId:'ed_lineCd',nameId:'txt_lineNm',popupID:'',selectID:'',style:'',validTitle:'','ev:onblurCodeEvent':'scwin.udc_line_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_line_onblurNameEvent','ev:onclickEvent':'scwin.udc_line_onclickEvent',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4',UpperFlagCode:'1',objTypeName:'data',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th',style:'text-align: right;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부산구간 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',class:'',id:'lc_pusanClsCd',style:'width: 100px;',submenuSize:'fixed',editType:'select',search:'start',ref:'',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'감만권역'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부두권역'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'감천부두'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'신항권역'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',style:'text-align: right;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발일시 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{submenuSize:'fixed',chooseOption:'',style:'width: 150px;',allOption:'',id:'lc_dptGubun',class:'',editType:'select',search:'start',ref:'',displayMode:'value delim label','ev:onchange':'scwin.lc_dptGubun_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'주간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'야간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_dptDt',refEdDt:'',edFromId:'ica_dptStDt',edToId:'ica_dptEndDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th',style:'text-align: right;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Reset',style:'',type:'button','ev:onclick':'scwin.btn_Reset_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'클리어'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button','ev:onclick':'scwin.btn_Retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'할증처리 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_resetChk',style:'',type:'button','ev:onclick':'scwin.btn_resetChk_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac',style:'width:40px;'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할인종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할증',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac',style:'width:40px;'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할인종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할증',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac',style:'width:40px;'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할인종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할증',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac',style:'width:40px;'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할인종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할증',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell1',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중량1톤초과',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'10%',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell7',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'활대품10cm초과',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'10%',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell13',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'플랙시백',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'20%',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell19',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'밥태일1회왕복',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'100%',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell2',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중량2톤초과',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'20%',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell8',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'활대품20cm초과',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'20%',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell14',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TANK',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'30%',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell20',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'밥태일2회왕복',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'200%',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell3',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중량3톤초과',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'30%',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell9',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'활대품30cm초과',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'30%',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell15',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'험로',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'20%',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell21',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'위험물',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'30%',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell4',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중량4톤초과',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'40%',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell10',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'활대품40cm초과',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'40%',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell16',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'덤프',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'25%',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell22',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화약류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'100%',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell5',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중량5톤초과',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'50%',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell11',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'활대품50cm초과',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'50%',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell17',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'심야',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'20%',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell23',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'방사성',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'200%',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell6',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'냉동',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'30%',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell12',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'휴일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'20%',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell18',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'검색기',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'96,000원',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac',style:'width:50px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sell24',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'chb_sell24_value',style:'',mandatory:'false',validExp:'기타금액:yes',maxlength:'13',allowChar:'0-9',displayFormat:'#,##0',dataType:'number',title:'기타금액'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'margin-top: 16px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더정보 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'일괄적용 일자',class:''}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_allCopCoConfirmDt',class:'',calendarValueType:'yearMonthDate',objType:'data'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_com',type:'button',class:'btn','ev:onclick':'scwin.btn_com_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄적용'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Undo',type:'button',class:'btn','ev:onclick':'scwin.btn_Undo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄취소'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',templateYn:'N',id:'udc_section1',gridDownFn:'scwin.f_toExcel1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_emp',focusMode:'cell',id:'gr_emp_A',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'7',visibleRowNumFix:'true',rowStatusVisible:'true','ev:oncellclick':'scwin.gr_emp_A_oncellclick','ev:onheaderclick':'scwin.gr_emp_A_onheaderclick','ev:onviewchange':'',fixedColumn:'2',fixedColumnNoMove:'true','ev:ontextimageclick':'scwin.gr_emp_A_ontextimageclick','ev:oneditend':'scwin.gr_emp_A_oneditend','ev:onbeforeedit':'scwin.gr_emp_A_onbeforeedit',setCellInputTypeCustom:'true','ev:onafteredit':'scwin.gr_emp_A_onafteredit','ev:onrowindexchange':'scwin.gr_emp_A_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header3',style:''},E:[{T:1,N:'w2:row',A:{id:'row6',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'A_che_h',value:'',displayMode:'label',fixColumnWidth:'true',trueValue:'1',falseValue:'0',defaultValue:'0',emptyValue:'0',valueType:'text'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'A_column2',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column3',value:'출발권역',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column4',value:'도착권역',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'A_column5',value:'작업지시번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column6',value:'청구거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'A_column7',value:'출발지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'A_column8',value:'도착지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'A_column9',value:'출발일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'A_column10',value:'도착일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'A_column11',value:'차량No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'A_column12',value:'LINE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column13',value:'CNTR</br>/No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'A_column14',value:'Sz',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'A_column15',value:'Tp',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column16',value:'매입거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column17',value:'매출액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column18',value:'할인할증</br>사유',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column19',value:'할인할증</br>금액',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column20',value:'매입액(총)',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'A_column21',value:'매입액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column22',value:'할증금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column23',value:'할증항목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column24',value:'할증률(%)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column25',value:'실적일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'A_column26',value:'확정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column27',value:'확정일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'A_column28',value:'등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'A_column29',value:'배차</br>등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column30',value:'작업구간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'A_column31',value:'매입순번',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row7',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'che',value:'',displayMode:'label',fixColumnWidth:'true',trueValue:'1',falseValue:'0',defaultValue:'0',emptyValue:'0',valueType:'text'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:';color:#0000FF;',id:'odrNo',value:'',displayMode:'label',class:'underline',colMerge:'true',upperColumn:'bilgClntNm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptDistrictCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvDistrictCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'transWrkIndictNo',value:'',displayMode:'label',hidden:'true',textAlign:'left',colMerge:'true',upperColumn:'odrNo',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgClntNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dptWrkPlCdNm',value:'',displayMode:'label',textAlign:'left',colMerge:'true',readOnly:'true',upperColumn:'vehclNo,odrNo'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arvWrkPlCdNm',value:'',displayMode:'label',textAlign:'left',colMerge:'true',readOnly:'true',upperColumn:'vehclNo'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptDtm',value:'',displayMode:'label',colMerge:'true',readOnly:'true',upperColumn:'vehclNo,odrNo',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvDtm',value:'',displayMode:'label',displayFormat:'####/##/## ##:##',colMerge:'true',readOnly:'true',upperColumn:'vehclNo,odrNo'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vehclNo',value:'',displayMode:'label',colMerge:'true',upperColumn:'dptWrkPlCdNm,odrNo',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lineCd',value:'',displayMode:'label',maxLength:'5'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:';color:#0000FF;',id:'cntrNo',value:'',displayMode:'label',colMerge:'true',textAlign:'left',readOnly:'true',class:'underline',upperColumn:'odrNo'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrSizCd',value:'',displayMode:'label',colMerge:'true',readOnly:'true',upperColumn:'cntrNo'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrTypCd',value:'',displayMode:'label',colMerge:'true',upperColumn:'cntrNo',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'copCoClntNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmt',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellDcScNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcSellAmt',value:'',displayMode:'label',hidden:'true',textAlign:'right',readOnly:'true',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcScTotal',value:'',displayMode:'label',readOnly:'true',hidden:'true',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',colMerge:'true',upperColumn:'vehclNo',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcScAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'custom',style:'',id:'dcScNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcScAmtRate',value:'',displayMode:'label',readOnly:'true',displayFormat:'#0.00',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'regDtm',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'dcsnYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'승인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'반려'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'dcsnDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dcScRegNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'allocaNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsSeq',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer_A'},E:[{T:1,N:'w2:row',A:{style:'',id:'row_A'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'A_column45',value:'',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'A_column44',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column100',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column101',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'A_column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'A_column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'A_column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column38',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'A_column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'A_column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'A_column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'A_column66',value:'',displayMode:'label',expression:'SUM("pchsAmt") + SUM("dcScAmt")',excelCellType:'number',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'A_column63',value:'',displayMode:'label',excelCellType:'number',expression:'SUM("pchsAmt")',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'A_column60',value:'',displayMode:'label',excelCellType:'number',expression:'SUM("dcScAmt")',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'A_column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'A_column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'A_column98',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'A_column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'A_column98b',value:'',displayMode:'label'}}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_emp',focusMode:'cell',id:'gr_emp_B',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:onviewchange':'','ev:onheaderclick':'scwin.gr_emp_B_onheaderclick','ev:oncellclick':'scwin.gr_emp_B_oncellclick',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_emp_B_ontextimageclick',fixedColumn:'2',fixedColumnNoMove:'true','ev:oneditend':'scwin.gr_emp_B_oneditend','ev:onbeforeedit':'scwin.gr_emp_B_onbeforeedit',setCellInputTypeCustom:'true','ev:onrowindexchange':'scwin.gr_emp_B_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'B_che_h',value:'',displayMode:'label',fixColumnWidth:'true',trueValue:'1',falseValue:'0',defaultValue:'0',emptyValue:'0',valueType:'text'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column2',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'작업지시번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column4',value:'청구거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'출발지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column6',value:'도착지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column7',value:'출발일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column8',value:'도착일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column9',value:'차량No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column10',value:'매입거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column11',value:'LINE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column12',value:'CNTR</br>/No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'Sz',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column14',value:'Tp',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'매출액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column16',value:'할인할증</br>사유',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'할인할증</br>금액',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column18',value:'매입액(총)',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'매입액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column20',value:'할증금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'할증항목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column22',value:'할증률(%)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'실적일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'확정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'확정일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column26',value:'등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'배차</br>등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'작업구간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'출발권역',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'도착권역',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2_B',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'che',value:'',displayMode:'label',fixColumnWidth:'true',trueValue:'1',falseValue:'0',defaultValue:'0',emptyValue:'0',valueType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:';color:#0000FF;',id:'odrNo',value:'',displayMode:'label',class:'underline',colMerge:'true',upperColumn:'bilgClntNm'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'transWrkIndictNo',value:'',displayMode:'label',hidden:'true',textAlign:'left',colMerge:'true',upperColumn:'odrNo',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgClntNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dptWrkPlCdNm',value:'',displayMode:'label',textAlign:'left',colMerge:'true',readOnly:'true',upperColumn:'vehclNo,odrNo'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arvWrkPlCdNm',value:'',displayMode:'label',textAlign:'left',colMerge:'true',readOnly:'true',upperColumn:'vehclNo'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptDtm',value:'',displayMode:'label',colMerge:'true',readOnly:'true',upperColumn:'vehclNo,odrNo',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvDtm',value:'',displayMode:'label',displayFormat:'####/##/## ##:##',colMerge:'true',readOnly:'true',upperColumn:'vehclNo,odrNo'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vehclNo',value:'',displayMode:'label',colMerge:'true',upperColumn:'dptWrkPlCdNm,odrNo',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'copCoClntNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lineCd',value:'',displayMode:'label',maxLength:'5'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:';color:#0000FF;',id:'cntrNo',value:'',displayMode:'label',colMerge:'true',textAlign:'left',readOnly:'true',class:'underline',upperColumn:'odrNo'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrSizCd',value:'',displayMode:'label',colMerge:'true',readOnly:'true',upperColumn:'cntrNo'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrTypCd',value:'',displayMode:'label',colMerge:'true',upperColumn:'cntrNo',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmt',value:'',displayMode:'label',readOnly:'true',upperColumn:'cntrNo',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellDcScNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcSellAmt',value:'',displayMode:'label',hidden:'true',textAlign:'right',readOnly:'true',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcScTotal',value:'',displayMode:'label',readOnly:'true',hidden:'true',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0',customFormatter:'scwin.gr_emp_CustomFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',colMerge:'true',upperColumn:'vehclNo',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcScAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',excelCellType:'number',displayFormat:'#,##0',customFormatter:'scwin.gr_emp_CustomFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'custom',style:'',id:'dcScNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcScAmtRate',value:'',displayMode:'label',readOnly:'true',displayFormat:'#0.00',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'regDtm',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'dcsnYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'승인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'반려'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'dcsnDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dcScRegNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'allocaNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptDistrictCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvDistrictCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer_B'},E:[{T:1,N:'w2:row',A:{style:'',id:'row_B'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'B_column45',value:'',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'B_column44',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'B_column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'B_column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'B_column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'B_column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'B_column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'B_column38',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'B_column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'B_column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'B_column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'B_column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'B_column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'B_column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'B_column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'B_column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'B_column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'B_column66',value:'',displayMode:'label',excelCellType:'number',expression:'SUM("pchsAmt") + SUM("dcScAmt")',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'B_column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'B_column60',value:'',displayMode:'label',textAlign:'right',expression:'SUM("dcScAmt")',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'B_column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'B_column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'B_column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'B_column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'B_column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'B_column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'B_column98',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'B_column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'B_column100',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'B_column101',value:'',displayMode:'label'}}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_emp',focusMode:'cell',id:'gr_emp_C',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_emp_C_oncellclick','ev:onheaderclick':'scwin.gr_emp_C_onheaderclick','ev:onviewchange':'',rowStatusVisible:'true',fixedColumn:'2',fixedColumnNoMove:'true','ev:ontextimageclick':'scwin.gr_emp_C_ontextimageclick','ev:oneditend':'scwin.gr_emp_C_oneditend','ev:onbeforeedit':'scwin.gr_emp_C_onbeforeedit',setCellInputTypeCustom:'true','ev:onrowindexchange':'scwin.gr_emp_C_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption_C',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header_C',style:''},E:[{T:1,N:'w2:row',A:{id:'row_C1',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'C_che_h',value:'',displayMode:'label',fixColumnWidth:'true',trueValue:'1',falseValue:'0',defaultValue:'0',emptyValue:'0',valueType:'text',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'C_odrNo_h',value:'오더번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'C_transWrkIndictNo_h',value:'작업지시번호',displayMode:'label',hidden:'true',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'C_bilgClntNm_h',value:'청구거래처',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_dptWrkPlCdNm_h',value:'출발지',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_arvWrkPlCdNm_h',value:'도착지',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'C_dptDtm_h',value:'출발일시',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'C_arvDtm_h',value:'도착일시',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'C_vehclNo_h',value:'차량No',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'C_copCoClntNm_h',value:'매입거래처',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'C_lineCd_h',value:'LINE',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_commNm_h',value:'품명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_wrkQty_h',value:'수량',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_wrkWt_h',value:'중량',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{inputType:'text',style:'',id:'C_sellGrp_h',value:'매출액',displayMode:'label',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{inputType:'text',style:'',id:'C_pchsGrp_h',value:'하불임',displayMode:'label',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_regDtm_h',value:'등록',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_dcsnYn_h',value:'확정',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_dcsnDt_h',value:'확정일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_transRsltsSeq_h',value:'transRsltsSeq',displayMode:'label',hidden:'true',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_dcScCd_h',value:'dcScCd',displayMode:'label',hidden:'true',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_wrkCls_h',value:'wrkCls',displayMode:'label',hidden:'true',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'C_dcScRegNm_h',value:'등록자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'C_allocaNm_h',value:'배차</br>등록자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'C_wrkClsCd_h',value:'작업구간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'C_dptDistrictCd_h',value:'출발권역',displayMode:'label',hidden:'true',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'C_arvDistrictCd_h',value:'도착권역',displayMode:'label',hidden:'true',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{id:'row_C2',style:''},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_sellAmt_h',value:'매출액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'C_sellDcScNm_h',value:'할인할증사유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'C_dcSellAmt_h',value:'할인할증액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_pchsAmt_h',value:'매입액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'C_dcScNm_h',value:'할증할인사유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'C_dcScAmt_h',value:'할인할증액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_dcScTotal_h',value:'합계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody_C',style:''},E:[{T:1,N:'w2:row',A:{id:'row_C3',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'che',value:'',displayMode:'label',fixColumnWidth:'true',trueValue:'1',falseValue:'0',defaultValue:'0',emptyValue:'0',valueType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:';color:#0000FF;',id:'odrNo',value:'',displayMode:'label',class:'underline',colMerge:'true',upperColumn:'bilgClntNm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'transWrkIndictNo',value:'',displayMode:'label',hidden:'true',textAlign:'left',colMerge:'true',upperColumn:'odrNo',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bilgClntNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'dptWrkPlCdNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'arvWrkPlCdNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'dptDtm',value:'',displayMode:'label',readOnly:'true',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'arvDtm',value:'',displayMode:'label',displayFormat:'####/##/## ##:##',readOnly:'true',expression:'Decode(arvDtm,null,\'\',arvDtm)'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'vehclNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'copCoClntNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'lineCd',value:'',displayMode:'label',readOnly:'true',maxLength:'5'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:';color:#0000FF;',id:'commNm',value:'',displayMode:'label',class:'underline',textAlign:'left',readOnly:'true',expression:'Decode(commNm,null,\'\',commNm)'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'wrkQty',value:'',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'wrkWt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'sellAmt',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellDcScNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcSellAmt',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'pchsAmt',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'custom',style:'',id:'dcScNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcScAmt',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'dcScTotal',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0',customFormatter:'scwin.gr_emp_CustomFormatter'}},{T:1,N:'w2:column',A:{width:'80',inputType:'calendar',style:'',id:'regDtm',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',style:'',id:'dcsnYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'승인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'반려'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'calendar',style:'',id:'dcsnDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'transRsltsSeq',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'dcScCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'wrkCls',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'dcScRegNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'allocaNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'dptDistrictCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'arvDistrictCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer_C'},E:[{T:1,N:'w2:row',A:{style:'',id:'row_CF'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'C_column1',value:'',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'C_column2',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'C_column3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'C_column4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_column5',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_column6',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_column7',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_column8',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_column9',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'C_column10',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'C_column11',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_column12',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_column13',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_column14',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_column15',value:'',displayMode:'label',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'C_column16',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'C_column17',value:'',displayMode:'label',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'C_column18',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',excelCellType:'number',expression:'SUM("pchsAmt")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'C_column19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'C_column20',value:'',displayMode:'label',displayFormat:'#,##0',excelCellType:'number',expression:'SUM("dcScAmt")',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'C_column21',value:'',displayMode:'label',summaryExpression:'sum(pchsAmt)+sum(dcScAmt)',displayFormat:'#,##0',expression:'SUM("pchsAmt") + SUM("dcScAmt")',excelCellType:'number',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'C_column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'C_column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'C_column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'C_column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'C_column31',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'C_column32',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalCnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:'margin-top: 8px;'},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_DcsnChoice',style:'',type:'button','ev:onclick':'scwin.btn_DcsnChoice_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정선택'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_CancelDcsn',style:'',type:'button','ev:onclick':'scwin.btn_CancelDcsn_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정해제'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_Del',type:'button',class:'btn','ev:onclick':'scwin.btn_Del_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Add',type:'button',class:'btn','ev:onclick':'scwin.btn_Add_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Dcsn',style:'',type:'button','ev:onclick':'scwin.btn_Dcsn_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]}]}]}]}]}]}]}]}]})