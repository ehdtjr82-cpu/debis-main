/*amd /ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml 31883 3684522e1f8dd768c88727cf38ead914ee4bf69353baa4194ee2a3c41af156da */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vesselMng',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'impExpClsNm',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text',length:'11'}},{T:1,N:'w2:column',A:{id:'vsslPurpsCd',name:'선박용도코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'vsslPurpsNm',name:'',dataType:'text',length:'300'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'마감일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'마감시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'도착시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'dptHh',name:'출발시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'shpCoPortcnt',name:'선사항차',dataType:'text',length:'21'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'pierCd',name:'부두코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'pierNm',name:'부두명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'arvIntendDtm',name:'도착예정일시',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'planPrscond',name:'',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'odrCreateYn',name:'',dataType:'text',length:'7'}}]},{T:1,N:'w2:data',A:{use:'true'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true','ev:ondataload':'scwin.ds_lobran_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vssl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pCode',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pName',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_shp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pCode',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pName',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shpCoClntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qyrEndDt',name:'name8',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.wrkplan.stvwrkplan.RetrieveCarryingVesselManagementNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_vesselMng","key":"OUT_DS1"},{"id":"dma_retrieve","key":"IN_DS1"}]',target:'data:json,{"id":"ds_vesselMng","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_lobran_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*session login Info get*/
scwin.userClsCd = ""; // 사용자구분코드
scwin.clntNo = ""; // 거래처번호
scwin.clntNm = ""; // 거래처명
scwin.params = "";
scwin.lobranCd = "";
scwin.loUpperLobranCd = "";
scwin.impExpClsCd;
scwin.cvsslMgntNo = ""; // 본선관리 번호 

// 최초 진입시 데이터 호출 시점에 차이가 있어서 해당 분기를 통해 점소 데이터 리스트 load후 최초 조회 가능하도록 하기위함
scwin.count = 0;
//-------------------------------------------------------------------------
// 날짜 세팅
//-------------------------------------------------------------------------
scwin.vCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

//-------------------------------------------------------------------------
// 화면 로딩시 서브미션 1회 수행
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // 호출에서 전달받는 파라미터 재할당
  scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자구분코드
  scwin.clntNo = $c.data.getMemInfo($p, "clntNo"); // 거래처번호
  scwin.clntNm = $c.data.getMemInfo($p, "clntNm"); // 거래처명
  scwin.lobranCd = $c.data.getMemInfo($p, "lobranCd");
  scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd");
  scwin.params = [];
  scwin.params = $p.getAllParameter()?.paramData?.data || [];
  scwin.cvsslMgntNo = scwin.params[0] || "";
  scwin.impExpClsCd = scwin.params[1] || "";

  // 점소 데이터 호출
  $c.sbm.execute($p, sbm_ds_lobran);
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  ed_cvsslMgntNo.setValue(scwin.cvsslMgntNo);
  acb_impExpClsCd.setValue(scwin.impExpClsCd);

  // 점소 데이터 호출
  // $c.sbm.execute(sbm_ds_lobran);

  scwin.f_setDate();

  // 내부 사용자가 아니라면
  if (scwin.userClsCd != "01") {
    ed_con_shpCo.setValue(scwin.clntNo);
    ed_con_shpCoNm.setValue(scwin.clntNm);
    $c.gus.cfDisableObjects($p, [ed_con_shpCo, ed_con_shpCoNm]);
  }
  let dateStr = scwin.vCurDate.substring(0, 6);
  let firstDate = "";
  let endDay = "";
  let endDt = "";
  if (scwin.cvsslMgntNo && scwin.cvsslMgntNo.length > 4) {
    if ($c.num.isNumber($p, scwin.cvsslMgntNo.substring(1, 4))) {
      let yearPrefix = dateStr.substring(0, 2); // "20"
      let raw = scwin.cvsslMgntNo.substring(1, 5); // "1234"

      let year = parseInt(yearPrefix + raw.substring(0, 2)); // 2012
      let month = parseInt(raw.substring(2, 4)); // 45

      // GAUCE처럼 보정
      if (month > 12) {
        month = month % 12 + 1;
        if (month === 0) {
          month = 12;
        } else {
          month = month;
        }
      }

      // 2자리 맞추기
      month = month.toString().padStart(2, '0');
      dateStr = year + month;
      firstDate = dateStr + "01";
      endDay = $c.date.getLastDateOfMonth($p, firstDate);
      endDt = dateStr + endDay;
      udc_fromToCalendar.setInitDate(firstDate, endDt);
    } else {
      udc_fromToCalendar.setInitDate("", "");
      ed_qryStDt.setValue("");
      ed_qryEndDt.setValue("");
      $c.sbm.execute($p, sbm_search);
      return;
    }
  }
  let firstCheck = $c.num.isNumber($p, firstDate);
  let endCheck = $c.num.isNumber($p, endDt);
  if (!firstCheck) {
    if (!$c.date.isDate($p, firstDate)) {
      dma_retrieve.set("qryStDt", "");
      scwin.cvsslMgntNo = "";
    }
  } else {
    dma_retrieve.set("qryStDt", firstDate);
  }
  if (!endCheck) {
    if (!$c.date.isDate($p, endDt)) {
      dma_retrieve.set("qyrEndDt", "");
      scwin.cvsslMgntNo = "";
    }
  } else {
    dma_retrieve.set("qyrEndDt", endDt);
  }
  dma_retrieve.set("impExpClsCd", scwin.impExpClsCd);
  dma_retrieve.set("cvsslMgntNo", scwin.cvsslMgntNo);
  if (scwin.cvsslMgntNo == null || scwin.cvsslMgntNo == "" || scwin.cvsslMgntNo == undefined) {
    dma_retrieve.set("lobranCd", scwin.loUpperLobranCd);
  }

  // scwin.f_Retrieve();
  // // $c.sbm.execute(sbm_search); 체크
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------      
scwin.f_Retrieve = function () {
  // 조회시 시작일자는 인식하나 종료일자는 인식하지 못함
  //submission
  dma_retrieve.set("lobranCd", acb_lobran.getValue());
  dma_retrieve.set("mrn", ed_mrn.getValue());
  dma_retrieve.set("impExpClsCd", acb_impExpClsCd.getValue());
  dma_retrieve.set("vsslCd", ed_vsslCd.getValue());
  dma_retrieve.set("cvsslMgntNo", ed_cvsslMgntNo.getValue());
  dma_retrieve.set("shpCoClntNo", ed_con_shpCo.getValue());
  dma_retrieve.set("qryStDt", ed_qryStDt.getValue());
  dma_retrieve.set("qyrEndDt", ed_qryEndDt.getValue());

  // 서브미션 실행
  $c.sbm.execute($p, sbm_search);
};

// 조회버튼 서브미션 성공시
scwin.sbm_search_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    let rowCnt = ds_vesselMng.getRowCount();
    spa_rowCount.setValue(rowCnt);
    if (rowCnt == 0) {
      $c.win.alert($p, MSG_CM_WRN_002);
      // ed_cvsslMgntNo.setValue(scwin.cvsslMgntNo);
      return;
    } else if (rowCnt == 1 && scwin.params[0] == ds_vesselMng.getCellData(0, "cvsslMgntNo")) {
      let rtnValues = [];
      rtnValues[0] = ds_vesselMng.getCellData(0, "cvsslMgntNo"); //본선관리번호
      rtnValues[1] = ds_vesselMng.getCellData(0, "vsslCd"); //선박코드
      rtnValues[2] = ds_vesselMng.getCellData(0, "vsslNm"); //선박명
      rtnValues[3] = ds_vesselMng.getCellData(0, "closeDt"); //마감일자
      rtnValues[4] = ds_vesselMng.getCellData(0, "closeHh"); //마감시간
      rtnValues[5] = ds_vesselMng.getCellData(0, "arvDt"); //도착(입항)일자
      rtnValues[6] = ds_vesselMng.getCellData(0, "arvHh"); //도착(입항)시간
      rtnValues[7] = ds_vesselMng.getCellData(0, "dptDt"); //출발(출항)일자
      rtnValues[8] = ds_vesselMng.getCellData(0, "dptHh"); //출발(출항)시간
      rtnValues[9] = ds_vesselMng.getCellData(0, "shpCoPortcnt"); //선사항차
      rtnValues[10] = ""; //항로
      rtnValues[11] = ds_vesselMng.getCellData(0, "portCd"); //항구코드
      rtnValues[12] = ds_vesselMng.getCellData(0, "pierCd"); //부두코드
      rtnValues[13] = ds_vesselMng.getCellData(0, "pierNm"); //부두코드명
      rtnValues[14] = ds_vesselMng.getCellData(0, "lineCd"); //LINE 코드
      $c.win.closePopup($p, rtnValues);
    }
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
  //조회 완료 후 총 검색 수 하단 노출

  // 조회결과가 1건인 경우 값넣고 자동으로 데이터 넘기고 팝업 종료 

  // if(rowCnt == 1 && ed_cvsslMgntNo.getValue() == ds_vesselMng.getCellData(0, "cvsslMgntNo")){
  //     let rtnValues = "";
  //     rtnValues = ds_vesselMng.getCellData(0, "cvsslMgntNo");
  //     let rt = [rtnValues];
  //     $c.win.closePopup(rt);
  // };
};

// 데이터 조회시
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};

//팝업 데이타 그리드 조회 후 선택된 데이타 부모창에 return 처리
scwin.gr_vesselMng_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  let rtnValues = [];
  rtnValues[0] = ds_vesselMng.getCellData(rowIndex, "cvsslMgntNo"); //본선관리번호
  rtnValues[1] = ds_vesselMng.getCellData(rowIndex, "vsslCd"); //선박코드
  rtnValues[2] = ds_vesselMng.getCellData(rowIndex, "vsslNm"); //선박명
  rtnValues[3] = ds_vesselMng.getCellData(rowIndex, "closeDt"); //마감일자
  rtnValues[4] = ds_vesselMng.getCellData(rowIndex, "closeHh"); //마감시간
  rtnValues[5] = ds_vesselMng.getCellData(rowIndex, "arvDt"); //도착(입항)일자
  rtnValues[6] = ds_vesselMng.getCellData(rowIndex, "arvHh"); //도착(입항)시간
  rtnValues[7] = ds_vesselMng.getCellData(rowIndex, "dptDt"); //출발(출항)일자
  rtnValues[8] = ds_vesselMng.getCellData(rowIndex, "dptHh"); //출발(출항)시간
  rtnValues[9] = ds_vesselMng.getCellData(rowIndex, "shpCoPortcnt"); //선사항차
  rtnValues[10] = ""; //항로
  rtnValues[11] = ds_vesselMng.getCellData(rowIndex, "portCd"); //항구코드
  rtnValues[12] = ds_vesselMng.getCellData(rowIndex, "pierCd"); //부두코드
  rtnValues[13] = ds_vesselMng.getCellData(rowIndex, "pierNm"); //부두코드명
  rtnValues[14] = ds_vesselMng.getCellData(rowIndex, "lineCd"); //LINE 코드

  $c.win.alert($p, rtnValues);
  $c.win.closePopup($p, rtnValues);
};
scwin.btn_closeBtn_onclick = function (e) {
  $c.win.closePopup($p);
};

//-------------------------------------------------------------------------
// 초기화 버튼 클릭시 
//-------------------------------------------------------------------------
scwin.btn_init_f_FieldClear = function (e) {
  if (scwin.userClsCd != "01") {
    $c.gus.cfInitObjects($p, [acb_lobran, ed_vsslCd, ed_vsslNm, acb_impExpClsCd]);
  } else {
    $c.gus.cfInitObjects($p, [acb_lobran, ed_vsslCd, ed_vsslNm, acb_impExpClsCd, ed_con_shpCo, ed_con_shpCoNm]);
  }
  if (scwin.cvsslMgntNo == "" || scwin.cvsslMgntNo == null) {
    acb_lobran.setValue(scwin.loUpperLobranCd);
  } else {
    acb_lobran.setValue("");
  }

  // scwin.onUdcCompleted();
  scwin.f_setDate();
  acb_lobran.focus();
};

//-------------------------------------------------------------------------
// 날짜세팅
//-------------------------------------------------------------------------
scwin.f_setDate = function () {
  let dateStr = scwin.vCurDate.substring(0, 6);
  ``;
  if (scwin.cvsslMgntNo != "" && scwin.cvsslMgntNo != null) {
    if (scwin.cvsslMgntNo.length > 4) {
      dateStr = dateStr.substring(0, 2) + scwin.cvsslMgntNo.substring(1, 5);
    }
  }
  let firstDate = dateStr + "01";
  let endDt = $c.date.getLastDateOfMonth($p, firstDate);
  endDt = dateStr + endDt;

  //udc 달력 from ~ to 세팅정보
  //udc 스크립트 안에 validation 이미 존재
  udc_fromToCalendar.setInitDate(firstDate, endDt);
};
scwin.displayFm = function (data) {
  return $c.gus.decode($p, data, "I/", "수입", "/O", "수출", "I/O", "수입/수출", "");
};
scwin.displayFm2 = function (data) {
  return $c.gus.decode($p, data, "/", "", data);
};

//-------------------------------------------------------------------------
// 선사 팝업
//-------------------------------------------------------------------------
scwin.udc_comCode_shp_onclickEvent = function (e) {
  scwin.f_chkOpenCommonPopUpEmEdit(0, ed_con_shpCo, ed_con_shpCoNm, 2, 'F');
};
scwin.udc_comCode_shp_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUpEmEdit(1, ed_con_shpCo, ed_con_shpCoNm, 2, 'F');
};
scwin.udc_comCode_shp_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUpEmEdit(2, ed_con_shpCo, ed_con_shpCoNm, 2, 'F');
};

//-------------------------------------------------------------------------
// 선박 팝업
//-------------------------------------------------------------------------
scwin.udc_vssl_onclickEvent = function (e) {
  scwin.f_chkOpenCommonPopUpEmEdit(0, ed_vsslCd, ed_vsslNm, 1, 'F');
};
scwin.udc_vssl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUpEmEdit(1, ed_vsslCd, ed_vsslNm, 1, 'F');
};
scwin.udc_vssl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUpEmEdit(2, ed_vsslCd, ed_vsslNm, 1, 'F');
};

//-------------------------------------------------------------------------
// EMEDIT 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUpEmEdit = async function (gubun, chkObj, txtObj, disGubun, pAllSearch) {
  let pCode = "";
  let pName = "";
  if (disGubun == 2) {
    // 선석팝업을 띠우면
    if (scwin.userClsCd != '01') {
      return; // 사용자구분이 내부사용자가 아니면
    }
  }
  if (gubun == 1) {
    $c.gus.cfSetValue($p, txtObj, "");
    if ((await $c.gus.cfGetValue($p, chkObj)) == "") {
      txtObj.setValue("");
      return;
    }
  } else if (gubun == 2) {
    $c.gus.cfSetValue($p, chkObj, "");
    if ((await $c.gus.cfGetValue($p, txtObj)) == "") {
      chkObj.setValue("");
      return;
    }
  }
  pCode = $c.gus.cfGetValue($p, chkObj);
  pName = $c.gus.cfGetValue($p, txtObj);
  scwin.f_openCommonPopUp(disGubun, pCode, pName, 'T', pAllSearch);
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 선박 팝업
      udc_vssl.cfCommonPopUp(scwin.udc_vssl_CallBack, pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, pAllSearch);
      break;
    case 2:
      // 선사 팝업
      udc_comCode_shp.cfCommonPopUp(scwin.udc_shp_CallBack, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , 'SHP' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "선사,선사코드,선사명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};
scwin.udc_vssl_CallBack = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_vsslCd, ed_vsslNm);
};
scwin.udc_shp_CallBack = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_con_shpCo, ed_con_shpCoNm);
};

//-------------------------------------------------------------------------
// 점소 데이터 로드시
//-------------------------------------------------------------------------
scwin.ds_lobran_ondataload = function () {
  let rowCnt = ds_lobran.getTotalRow();
  if (rowCnt == 0) {
    return;
  }
  if (scwin.cvsslMgntNo == "" || scwin.cvsslMgntNo == null) {
    acb_lobran.setValue(scwin.loUpperLobranCd);
  } else {
    acb_lobran.setValue("");
  }
  if (scwin.count == 0) {
    dma_retrieve.set("impExpClsCd", scwin.impExpClsCd);
    dma_retrieve.set("cvsslMgntNo", scwin.cvsslMgntNo);
    if (scwin.cvsslMgntNo == null || scwin.cvsslMgntNo == "" || scwin.cvsslMgntNo == undefined) {
      dma_retrieve.set("lobranCd", scwin.loUpperLobranCd);
    }
    scwin.f_Retrieve();
    scwin.count = 1;
  }
};
scwin.sbm_ds_lobran_submitdone = function (e) {
  acb_lobran.focus();
  // acb_lobran.setValue(scwin.loUpperLobranCd);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'acb_lobran',chooseOption:'true',style:'width:150px;',submenuSize:'auto',allOption:'false',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',class:'',displayMode:'value delim label',textAlign:'left',ref:'',chooseOptionLabel:'전체',visibleRowNum:'10'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'xf:label',A:{ref:'lobranNm'}},{T:1,N:'xf:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'btn_PopUp2',style:'',codeId:'ed_con_shpCo',nameId:'ed_con_shpCoNm',id:'udc_comCode_shp',UpperFlagCode:'1',objTypeCode:'Data',objTypeName:'Data',popupTitle:'선사,선사코드,선사명',popupGridHeadTitle:'거래처코드,거래처명,거래처구분,거래처구분명,거래처주소,"","","","",""',selectID:'retrieveClntInfo',popupGridHiddenColumn:'6,7,8,9,10',validTitle:'선사','ev:onclickEvent':'scwin.udc_comCode_shp_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_shp_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_shp_onviewchangeNameEvent',class:'col7'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width:85px;',objType:'Data',mandatory:'true',maxlength:'8',displayFormat:'###########',readOnly:'false','ev:onkeyup':'scwin.onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'width:85px;',mandatory:'false',maxlength:'8',displayFormat:'########',objType:'Data',readOnly:'false'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_impExpClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',displayMode:'value delim label',objType:'data',delimiter:'-',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'btn_PopUp1',style:'',codeId:'ed_vsslCd',nameId:'ed_vsslNm',id:'udc_vssl',UpperFlagCode:'1',objTypeCode:'Data',popupTitle:'선박정보,선박코드,선박명',popupGridHeadTitle:'선박코드,선박명,"","","","","","","",""',selectID:'retrieveVsslCdInfo',code:'pCode',name:'pName',refDataCollection:'ds_vssl',editTypeCode:'select',allowCharCode:'A-Z0-9',maxlengthCode:'4',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',validTitle:'선박','ev:onclickEvent':'scwin.udc_vssl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_vssl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_vssl_onviewchangeNameEvent',class:'col7'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입항예정일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_qryStDt',edToId:'ed_qryEndDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_vesselMng',id:'gr_vesselMng',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_vesselMng_oncelldblclick',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'본선<br/>관리번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'선박명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'MRN'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'100',value:'선박용도'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'LINE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'항차',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'입항일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'관리<br/>점소',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'수출입<br/>구분',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'본선<br/>계획현황',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'오더여부<br/>수입/수출',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cvsslMgntNo',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'vsslNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mrn',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'vsslPurpsNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',style:'',value:'',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shpCoPortcnt',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'left',displayFormatter:'scwin.displayFm2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvIntendDtm',inputType:'text',style:'',value:'',width:'100',textAlign:'center',readOnly:'true',displayFormat:'yyyy/MM/dd',dataType:'date',ioFormat:'yyyyMMddHHii'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',style:'',value:'',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'text',style:'',value:'',width:'100',textAlign:'center',readOnly:'true',displayFormatter:'scwin.displayFm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'planPrscond',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrCreateYn',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_rowCount',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_closeBtn',style:'',type:'button','ev:onclick':'scwin.btn_closeBtn_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})