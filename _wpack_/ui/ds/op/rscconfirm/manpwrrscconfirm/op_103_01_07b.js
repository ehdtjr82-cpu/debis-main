/*amd /ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_07b.xml 33090 66fe9b009d79c7aa1fbe019c9b8079f342286569ccefd53aa68c31869a6de315 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClntNo',name:'소속거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'occptypeCd',name:'직종코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkShiftCnt',name:'작업SHIFT수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sal',name:'급여',dataType:'number'}},{T:1,N:'w2:column',A:{id:'food',name:'식대',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trffcCost',name:'교통비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etc',name:'기타',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sum',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'purchaseYn',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranClsCd',name:'물류점소구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.rscconfirm.manpwrrscconfirm.RetrieveServicePostPaymentAmountCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveServiceCostPrimeCost',action:'/ds.fs.adjm.adjmbdcalc.RegistServiceCostPrimeCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_master","key":"IN_DS1"},{"id":"dma_search","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveServiceCostPrimeCost_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteServiceCostPrimeCost',action:'/ds.fs.adjm.adjmbdcalc.DeleteServiceCostPrimeCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_master","key":"IN_DS1"},{"id":"dma_search","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_deleteServiceCostPrimeCost_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.loUpperLobranCd = memJson.loUpperLobranCd;
  scwin.loUpperLobranNm = memJson.loUpperLobranNm;
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    ica_QryStDt.setValue(scwin.vQryStDt);
    ica_QryEndDt.setValue(scwin.vQryEndDt);
    lc_lobran.setValue(scwin.loUpperLobranCd);
    ed_LodeptCd.setValue(ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranCd"));
    ed_LodeptNm.setValue(ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranNm"));

    ///임시
    /*
    ica_QryStDt.setValue("20100101");
    ica_QryEndDt.setValue("20100301");
    */
    ///임시

    scwin.retrieveLobran();
    lc_lobran.focus();
  }, {
    "delay": 100
  });
};
scwin.retrieveLobran = function () {
  $c.sbm.execute($p, sbm_lobran);
};

//-------------------------------------------------------------------------
// 조회;
//-------------------------------------------------------------------------
scwin.f_retrieve = function () {
  if (ed_LodeptCd.getValue().trim() == "") {
    $c.win.alert($p, "소속부서를 입력하십시오");
    ed_LodeptCd.focus();
    return;
  }
  if (ica_QryStDt.getValue().trim() == "") {
    $c.win.alert($p, "조회 시작일을 입력하십시오");
    ica_QryStDt.focus();
    return;
  }
  if (ica_QryEndDt.getValue().trim() == "") {
    $c.win.alert($p, "조회 종료일을 입력하십시오");
    ica_QryEndDt.focus();
    return;
  }
  if (ica_QryStDt.getValue().trim() > ica_QryEndDt.getValue().trim()) {
    $c.win.alert($p, "조회 시작일이 조회 종료일보다 큽니다");
    ica_QryEndDt.focus();
    return;
  }

  //dma_search.setEmptyValue(); //조회 DataSet 초기화;

  dma_search.set("lobranCd", ed_LodeptCd.getValue());
  dma_search.set("homeClntNo", ed_ClntNo.getValue());
  dma_search.set("occptypeCd", lc_occptypeCd.getValue());
  dma_search.set("qryStDt", ica_QryStDt.getValue());
  dma_search.set("qryEndDt", ica_QryEndDt.getValue());
  console.log(dma_search.getJSON());
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 용역비원가등록
//-------------------------------------------------------------------------
scwin.f_RegistServiceCostPrimeCost = async function () {
  // 점소, 조회기간	
  var chkLodept = await $c.gus.cfValidate($p, [ed_LodeptCd, ica_QryStDt, ica_QryEndDt]);
  if (!chkLodept) {
    return;
  }
  // 조회일자 from ~ to 체크	
  var chkDate = await $c.gus.cfIsAfterDate($p, ica_QryStDt.getValue(), ica_QryEndDt.getValue());
  if (!chkDate) {
    $c.win.alert($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ica_QryStDt.focus();
    return;
  }
  if (ds_master.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  }

  // Data 변경 여부 조회
  if (ds_master.getModifiedIndex().length == 0) {
    $c.win.alert($p, "매입등록 목록을(를) 선택하십시오."); // @을(를) 선택하십시오.
    return;
  }

  // 매입등록이 N인 경우만 선택 가능
  for (var i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "chk") == "T") {
      if (ds_master.getCellData(i, "purchaseYn") == "Y") {
        $c.win.alert($p, "매입등록이 N인 경우만 선택 가능합니다.");
        return;
      }
    }
  }
  var chkAlert = await $c.win.confirm($p, "용역비원가를 생성하시겠습니까?");
  if (chkAlert) {
    // @을(를) 생성하시겠습니까?

    //dma_search.setEmptyValue();

    dma_search.set("lobranCd", ed_LodeptCd.getValue()); // 소속부서
    dma_search.set("qryStDt", ica_QryStDt.getValue()); // 조회기간 시작일
    dma_search.set("qryEndDt", ica_QryEndDt.getValue()); // 조회기간 완료일

    $c.sbm.execute($p, sbm_saveServiceCostPrimeCost);
  }
};

//-------------------------------------------------------------------------
// 용역비원가삭제
//-------------------------------------------------------------------------
scwin.f_DeleteServiceCostPrimeCost = async function () {
  // 점소, 조회기간
  var chkLodept = await $c.gus.cfValidate($p, [ed_LodeptCd, ica_QryStDt, ica_QryEndDt]);
  if (!chkLodept) {
    return;
  }

  // 조회일자 from ~ to 체크	
  var chkDate = await $c.gus.cfIsAfterDate($p, ica_QryStDt.getValue(), ica_QryEndDt.getValue());
  if (!chkDate) {
    $c.win.alert($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ica_QryStDt.focus();
    return;
  }
  if (ds_master.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  }

  // Data 변경 여부 조회
  if (ds_master.getModifiedIndex().length == 0) {
    $c.win.alert($p, "매입등록취소 목록을(를) 선택하십시오."); // @을(를) 선택하십시오.
    return;
  }

  // 매입등록이 Y인 경우만 선택 가능
  for (var i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "chk") == "T") {
      if (ds_master.getCellData(i, "purchaseYn") == "N") {
        $c.win.alert($p, "매입등록이 Y인 경우만 선택 가능합니다.");
        return;
      }
    }
  }
  var chkAlert = await $c.win.confirm($p, "용역비원가를 삭제하시겠습니까?");
  if (chkAlert) {
    // @을(를) 삭제하시겠습니까?
    //dma_search.setEmptyValue();
    //dma_search.AddRow();

    dma_search.set("lobranCd", ed_LodeptCd.getValue()); // 소속부서
    dma_search.set("qryStDt", ica_QryStDt.getValue()); // 조회기간 시작일
    dma_search.set("qryEndDt", ica_QryEndDt.getValue()); // 조회기간 완료일

    $c.sbm.execute($p, sbm_deleteServiceCostPrimeCost);
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  /*
  if (!$c.gus.cfCanOpenPopup(inObj, pairObj))
      return;
  */
  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면

  var SELID;
  var pWhere;
  var pWidth;
  switch (disGubun) {
    case 1:
      //사업부서;
      SELID = 'retrieveOpDeptCdInfo';
      pWhere = lc_lobran.getValue() + ",,,";
      udc_LodeptCd.cfCommonPopUp(scwin.callbackRetrieveOpDeptCdInfo // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , pWidth // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , disGubun == 2 ? "소속업체,소속코드,소속명" : null);
      break;
    case 2:
      //거래업체;
      SELID = 'retrieveClntNoInfo';
      pWhere = "05";
      pWidth = '420';
      udc_ClntNo.cfCommonPopUp(scwin.callbackRetrieveClntNoInfo // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , pWidth // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , disGubun == 2 ? "소속업체,소속코드,소속명" : null);
      break;
  }

  /*
  switch (disGubun) {
  	
  	case 1: //사업부서;
  		cfSetReturnValue(rtnList, ed_LodeptCd, txt_LodeptNm);
  	break;
  	case 2: //거래업체;
  	    cfSetReturnValue(rtnList, ed_ClntNo, txt_ClntNm);
  	break;
  	
  }			
  */
};
scwin.callbackRetrieveOpDeptCdInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_LodeptCd, ed_LodeptNm);
};
scwin.callbackRetrieveClntNoInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_ClntNo, ed_ClntNm);
};

//-------------------------------------------------------------------------
// 조건부 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  lc_lobran.setSelectedIndex(0);
  ed_LodeptCd.setValue(""); // 작업장코드;
  ed_LodeptNm.setValue("");
  ed_ClntNo.setValue(""); // 작업장코드;
  ed_ClntNm.setValue("");

  //ed_QryStDt.text = new Date().format("YYYYMMDD").substring(0,6) + "01";
  //ed_QryEndDt.text = new Date().format("YYYYMMDD").substring(0,6) + "31";
  var dt = new Date();
  /*
  ed_QryStDt.text  = dt.firstDate().format("YYYYMMDD");
  ed_QryEndDt.text = dt.lastDate().format("YYYYMMDD");
  */

  ica_QryStDt.setValue(scwin.vQryStDt);
  ica_QryEndDt.setValue(scwin.vQryEndDt);
  lc_lobran.focus();
};
scwin.f_OpenCal = function () {
  //cfOpenCalendar(ed_QryStDt);

  var ym = ica_QryStDt.getValue();
  ym = ym.substring(0, 6) + "01";
  //ym = ym.toDate("YYYYMMDD");
  //ym = ym.lastDate().format("YYYYMMDD");
  ym = ym.substring(0, 6) + new Date(ym.substring(0, 4), ym.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
  ica_QryEndDt.setValue(ym);
};
scwin.btn_init_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_retrieve();
};
scwin.btn_del_onclick = function (e) {
  scwin.f_DeleteServiceCostPrimeCost();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_RegistServiceCostPrimeCost();
};
scwin.sbm_lobran_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_lobran.setJSON(e.responseJSON.GAUCE);
    var cnt = ds_lobran.getRowCount();
    if (cnt == 0) {
      $c.win.alert($p, "점소 자료 조회에 실패하였습니다");
      return;
    } else {
      lc_lobran.setValue(scwin.loUpperLobranCd);
      ed_LodeptCd.setValue(scwin.loUpperLobranCd);
      ed_LodeptNm.setValue(scwin.loUpperLobranNm);
    }
  }
};
scwin.udc_fromToCalendar3_onBlur = function () {
  scwin.f_OpenCal();
};
scwin.udc_LodeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_LodeptCd.getValue(), ed_LodeptNm.getValue(), 'F', 'T');
};
scwin.udc_LodeptCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_LodeptCd, ed_LodeptNm, 1);
};
scwin.udc_LodeptCd_onviewchangeNameEvent = function (info) {
  if (ed_LodeptNm.getValue() == "") {
    ed_LodeptCd.setValue("");
  } else {
    scwin.f_chkOpenCommonPopUp(ed_LodeptNm, ed_LodeptCd, 1, false);
  }
};
scwin.udc_ClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_ClntNo.getValue(), ed_ClntNm.getValue(), 'F', 'T');
};
scwin.udc_ClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_ClntNo, ed_ClntNm, 2);
};
scwin.udc_ClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_ClntNm, ed_ClntNo, 2, false);
};
scwin.lc_lobran_onviewchange = function (info) {
  ed_LodeptCd.setValue(lc_lobran.getValue());
  //ed_LodeptNm.setValue(lc_lobran.getText().substring(6,lc_lobran.getText().length));
  ed_LodeptNm.setValue($c.win.getComboLabel($p, lc_lobran));
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_master.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
  spa_cnt.setValue(ds_master.getRowCount());
};
scwin.sbm_saveServiceCostPrimeCost_submitdone = async function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_retrieve();
  }
};
scwin.sbm_deleteServiceCostPrimeCost_submitdone = async function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_retrieve();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{editType:'select',id:'lc_lobran',style:'width:200px;',submenuSize:'auto',search:'start',allOption:'',ref:'data:dma_search.lobranCd','ev:onviewchange':'scwin.lc_lobran_onviewchange',chooseOption:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{style:'',popupID:'',codeId:'ed_LodeptCd',nameId:'ed_LodeptNm',btnId:'btn_LodeptCd',editTypeCode:'select',UpperFlagCode:'1',allowCharCode:'a-z,A-Z,0-9',objTypeName:'Data',maxlengthCode:'6',mandatoryCode:'true',objTypeCode:'Data',validExpCode:'소속부서:yes',id:'udc_LodeptCd',selectID:'retrieveOpDeptCdInfo',refDataCollection:'dma_search','ev:onclickEvent':'scwin.udc_LodeptCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_LodeptCd_onviewchangeNameEvent',validTitle:'소속부서','ev:onblurCodeEvent':'scwin.udc_LodeptCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속업체',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_ClntNo',nameId:'ed_ClntNm',btnId:'btn_ClntNo',objTypeCode:'Data',allowCharCode:'0-9,A-Z,a-z',editTypeCode:'select',maxlengthCode:'6',UpperFlagCode:'1',objTypeName:'Data',selectID:'retrieveClntNoInfo',id:'udc_ClntNo',code:'homeClntNo',refDataCollection:'dma_search','ev:onclickEvent':'scwin.udc_ClntNo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_ClntNo_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_ClntNo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직종 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'lc_occptypeCd',style:'width:100px;',submenuSize:'auto',search:'start',chooseOption:'true',ref:'',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'일용직'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'용역직'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조회기간',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar3',refDataMap:'dma_search',refEdDt:'qryEndDt',refStDt:'qryStDt',style:'',mandatory:'true',edToId:'ica_QryEndDt',edFromId:'ica_QryStDt',mandatoryFrom:'true',mandatoryTo:'true','ev:onBlur':'scwin.udc_fromToCalendar3_onBlur',titleFrom:'조회시작일',titleTo:'조회종료일'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'용역비지급액 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',grdDownOpts:'{"fileName":"용역비지급액조회.xlsx","sheetName" : "용역비지급액조회", "type":"4+8+16"}',gridID:'grd_master'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'grd_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',resize:'true',columnMove:'true',readOnly:'false',editModeEvent:'onclick'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',style:'',id:'column83',displayMode:'label',value:' '}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'column59',value:'소속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'column58',value:'사원번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'사원명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'직종',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'소속업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'작업Shift수',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'급여',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'식대',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'교통비',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column60',value:'기타',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'합계',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'매입등록',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',style:'',id:'chk',value:'',displayMode:'label',trueValue:'T',falseValue:'F',checkAlways:'true',valueType:'other'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'lobranNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'staffNo',value:'',displayMode:'label',readOnly:'true',readOnlyClass:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'staffNm',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true',readOnlyClass:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'occptypeNm',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true',readOnlyClass:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'homeClntNm',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true',readOnlyClass:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkShiftCnt',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'sal',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'food',inputType:'text',removeBorderStyle:'false',width:'100',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'trffcCost',value:'',displayMode:'label',readOnly:'true',readOnlyClass:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'etc',value:'',displayMode:'label',readOnly:'true',readOnlyClass:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sum',value:'',displayMode:'label',readOnly:'true',readOnlyClass:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'purchaseYn',value:'',displayMode:'label',readOnly:'true',readOnlyClass:'true',sortable:'false'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column82',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column76',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'sal\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column75',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'food\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column74',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'trffcCost\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column73',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'etc\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'sum\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'spa_cnt',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'삭제',style:'',type:'button',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'매입생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_del',label:'삭제',style:'',type:'button',userAuth:'U',objType:'ctrlBtn','ev:onclick':'scwin.btn_del_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'매입삭제'}]}]}]}]}]}]}]}]}]})