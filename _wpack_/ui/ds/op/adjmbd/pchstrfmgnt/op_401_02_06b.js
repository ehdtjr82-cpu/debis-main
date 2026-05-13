/*amd /ui/ds/op/adjmbd/pchstrfmgnt/op_401_02_06b.xml 41758 cdc1af936c35c6b29ba9afed01591ba50f9b8843182d234080d3c6dc99c79af9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_QueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'railStnCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'railStnNm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_StationCharge',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptStDt',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptEndDt',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hndlRateClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hndlRate20Empty',name:'name5',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hndlRate20Full',name:'name6',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hndlRate40Empty',name:'name7',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hndlRate40Full',name:'name8',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hndlRate45Empty',name:'name9',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hndlRate45Full',name:'name10',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pchsClntCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStnOutbrYn',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnOutbrYn',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stnCd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stnNm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hndlRateClsNm',name:'name28',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_combo_workPrice'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo_workPrice',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ProcedureCall',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prtn2',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lastAdptStDtFind',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'value',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_lastAdptStDtFind'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'railStation',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_adptDate'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'from',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'to',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_combo_workPrice',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_combo_workPrice',target:'data:json,{"id":"ds_combo_workPrice","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveStationEachHandlingCharge',action:'/ds.op.adjmbd.pchstrfmgnt.RetrieveStationEachHandlingChargeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_QueryCondition","key":"IN_DS1"},{"id":"ds_StationCharge","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_StationCharge","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ProcedureCall',action:'/ds.op.adjmbd.pchstrfmgnt.ExecuteDistanceEachRailroadTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_ProcedureCall","key":"OUT_DS1"}',target:'data:json,{"id":"ds_ProcedureCall","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lastAdptStDtFind',action:'/ds.op.adjmbd.pchstrfmgnt.RetrieveNewFinalAdoptionDateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_lastAdptStDtFind","key":"IN_DS1"},{"id":"ds_lastAdptStDtFind","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_lastAdptStDtFind","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_SaveStationEachHandlingCharge',action:'/ds.op.adjmbd.pchstrfmgnt.SaveStationEachHandlingChargeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_StationCharge","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = function () {};

/**
 * @event 
 * @name onUdcCompleted 
 * @description UDC 완료
 */
scwin.onUdcCompleted = async function () {};

/**
 * @event 
 * @name ondataload 
 * @description 코드 완료
 */
scwin.ondataload = function () {
  scwin.globalVars();
  scwin.f_OnLoad();
};

/**
 * @event 
 * @name f_OnLoad 
 * @description 화면 로딩시
 */
scwin.f_OnLoad = async function () {
  ica_BaseDate.setValue(scwin.g_sCurrDate);

  // f_RetrieveWorkPrice
  dma_combo_workPrice.set("sysCd", "CooperationCompanyEquipmentEBC");
  dma_combo_workPrice.set("queryId", "retrivecComboOneGrp");
  dma_combo_workPrice.set("param1", "OP229"); //param
  await scwin.submitdone(sbm_combo_workPrice);
  $c.gus.cfDisableBtnOnly($p, [btn_New, btn_Modify, btn_Save, btn_Delete, btn_Proc]);
  ed_trainWorkPlaceCd.focus();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  /*년월 setting*/
  scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd"); //현재시간분

  // 상태값
  scwin.act_status = ""; // C:신규,  U:수정,  D:삭제

  //hidden컬럼
  scwin.hid_txt_trainWorkPlaceCd = "";
  scwin.hid_txt_adptStDt = "";

  //tobe추가
  scwin.code = "";
  scwin.name = "";
  scwin.preCode = "";
  scwin.searchYN = false;
};

/**
 * @method 
 * @name f_qeryList 
 * @description 조회
 */
scwin.f_qeryList = async function (e) {
  //tobe추가 : 조회버튼 클릭했는지 체크
  scwin.searchYN = true;
  scwin.act_status = "";

  // 적용일자
  if (!(await $c.gus.cfValidate($p, [ica_BaseDate]))) return;
  if (ed_trainWorkPlaceCd.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["역명"]);
    ed_trainWorkPlaceCd.focus();
    return;
  }
  ;
  dma_QueryCondition.setEmptyValue();

  /*dataMap 정의*/
  dma_QueryCondition.set("railStnCd", ed_trainWorkPlaceCd.getValue()); // 역코드
  dma_QueryCondition.set("railStnNm", "");
  dma_QueryCondition.set("qryStDt", ica_BaseDate.getValue()); // 적용일자
  dma_QueryCondition.set("qryEndDt", "");
  scwin.hid_txt_trainWorkPlaceCd = ed_trainWorkPlaceCd.getValue();
  await scwin.submitdone(sbm_RetrieveStationEachHandlingCharge);
  ica_adptStDt.setReadOnly(true);
  ed_trainWorkPlaceCd.focus();

  //버튼제어
  const adptEndDt = ds_StationCharge.getCellData(0, "adptEndDt");
  const rowCnt = ds_StationCharge.getRowCount();
  const targetBtns = [btn_New, btn_Modify, btn_Save, btn_Delete, btn_Proc, btn_AddRow, btn_DelRow, btn_CanRow];
  if (adptEndDt == "99999999") {
    $c.gus.cfEnableBtnOnly($p, targetBtns);
    $c.gus.cfDisableBtnOnly($p, [btn_Save]);
  } else if (adptEndDt != "99999999" && rowCnt != 0) {
    $c.gus.cfDisableBtnOnly($p, targetBtns);
  } else if (rowCnt == 0) {
    $c.gus.cfEnableBtnOnly($p, targetBtns);
    $c.gus.cfDisableBtnOnly($p, [btn_Modify, btn_Save, btn_Delete, btn_Proc]);
  }
  ;

  //gr_StationEachContainerEachHandlingCharge.Editable = false;
  scwin.columnReadOnly(true);
};

/**
 * @method 
 * @name f_openCommonPopUp 
 * @description 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
 */
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 역명 팝업	
      udc_trainWorkPlace.cfCommonPopUp(function (rtnList) {
        //도착지코드          도착지명
        $c.gus.cfSetReturnValue($p, rtnList, ed_trainWorkPlaceCd, ed_trainWorkPlaceNm);
      }, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "역명조회,작업장코드,작업장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 매입거래처구분조회 팝업	
      let row = ds_StationCharge.getRowPosition();
      ds_StationCharge.setCellData(row, "pchsClntCd", "");
      ds_StationCharge.setCellData(row, "pchsClntNm", "");
      udc_gr_pchsClntCd.cfCommonPopUp(function (rtnList) {
        ds_StationCharge.setCellData(row, "pchsClntCd", rtnList[0]);
        ds_StationCharge.setCellData(row, "pchsClntNm", rtnList[1]);
      }, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , '06,' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "매입거래처조회,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
  ;
};

/**
 * @method 
 * @name f_FieldClear 
 * @description 초기화
 */
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
  ed_trainWorkPlaceCd.focus();
};

/**
 * @method 
 * @name f_chkOpenCommonPopUp 
 * @description 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 */
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 
  // 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
  ;
};

/**
 * @method 
 * @name f_gridAddRow 
 * @description 한행 추가
 */
scwin.f_gridAddRow = async function () {
  let rowIndex = ds_StationCharge.getRowPosition();
  if (!scwin.searchYN) {
    await $c.gus.cfAlertMsg($p, "행추가시 먼저 조회 조회 버튼을 선택하십시오");
    return;
  }
  if (!(scwin.act_status == "C" || scwin.act_status == "U")) {
    await $c.gus.cfAlertMsg($p, "행추가시  먼저 신규/수정 버튼을 선택하십시오.");
    ed_trainWorkPlaceCd.focus();
    return;
  }
  if (ica_adptStDt.getValue() == "") {
    await $c.win.alert($p, "적용시작일자를 입력하세요");
    return;
  }
  ;
  if (!(await $c.gus.cfValidate($p, [gr_StationEachContainerEachHandlingCharge]))) return;
  const insertIdx = ds_StationCharge.insertRow();
  ds_StationCharge.setCellData(insertIdx, "stnCd", ed_trainWorkPlaceCd.getValue());
  ds_StationCharge.setCellData(insertIdx, "adptStDt", ica_adptStDt.getValue());
  ds_StationCharge.setCellData(insertIdx, "adptDt", ica_BaseDate.getValue());
  ds_StationCharge.setCellData(insertIdx, "adptEndDt", ica_adptEndDt.getValue());
};

/**
 * @method 
 * @name f_gridAddRow 
 * @description 한행 삭제
 */
scwin.f_gridDelRow = async function () {
  let rowIndex = ds_StationCharge.getRowPosition();
  if (!(scwin.act_status == "C" || scwin.act_status == "U")) {
    await $c.gus.cfAlertMsg($p, "행삭제시 신규, 수정 버튼을 누르고 삭제해 주십시오.");
    ed_trainWorkPlaceCd.focus();
    return;
  }
  ;
  $c.data.deleteRow($p, ds_StationCharge);
  const focusIdx = rowIndex - 1 < 0 ? 0 : rowIndex - 1;
  scwin.gridSetFocus(ds_StationCharge, 'hndlRateClsCd', focusIdx, gr_StationEachContainerEachHandlingCharge, totalRows);
};

/**
 * @event 
 * @name f_gridUndo 
 * @description 그리드 행 취소
 */
scwin.f_gridUndo = function () {
  $c.data.undoRow($p, gr_StationEachContainerEachHandlingCharge);
};

/**
 * @method 
 * @name f_doubleChk 
 * @description 조작료구분 중복입력 차단
 */
scwin.f_doubleChk = async function (baseRow, baseColumn) {
  const total_cnt = ds_StationCharge.getRowCount();
  const baseRateClsCd = ds_StationCharge.getCellData(baseRow, "hndlRateClsCd");
  for (let i = 0; i < total_cnt; i++) {
    if (i == baseRow) continue;
    if (baseRateClsCd == ds_StationCharge.getCellData(i, "hndlRateClsCd")) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, ["조작료구분"]);
      ds_StationCharge.setCellData(baseRow, "hndlRateClsCd", -1);
      return;
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name f_Save 
 * @description 저장
 */
scwin.f_Save = async function (e) {
  dma_lastAdptStDtFind.set("railStation", ed_trainWorkPlaceCd.getValue());
  await scwin.submitdone(sbm_lastAdptStDtFind);
  if (!scwin.searchYN) {
    //ds_StationCharge.text==""
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    ed_trainWorkPlaceCd.focus();
    return;
  }
  ;
  if (ed_trainWorkPlaceCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["역명"]);
    ed_trainWorkPlaceCd.focus();
    return;
  }
  ;
  if (!["C", "U", "D"].includes(scwin.act_status)) {
    await $c.gus.cfAlertMsg($p, "저장시에 신규, 수정  버튼을 선택하고 저장하십시오.");
    ed_trainWorkPlaceCd.focus();
    return;
  }
  ;
  if (!(await $c.gus.cfValidate($p, [ica_adptStDt]))) return;
  let total_cnt = ds_StationCharge.getRowCount();
  if (total_cnt == 0) return;
  const lastAdptVal = ds_lastAdptStDtFind.getCellData(0, "value");
  switch (scwin.act_status) {
    case "C":
      if (lastAdptVal != "Y" && lastAdptVal >= ica_adptStDt.getValue()) {
        await $c.gus.cfAlertMsg($p, "입력한 적용시작일자가 마지막 적용일자[" + lastAdptVal + "] 보다 작거나 같습니다.");
        ica_adptEndDt.focus();
        return;
      }
      ;
      break;
    case "U":
      // 서버에서 2번째 날짜
      if (lastAdptVal != "Y" && lastAdptVal > ica_adptStDt.getValue()) {
        await $c.gus.cfAlertMsg($p, "수정한 적용시작일자가 마지막 적용일자[" + lastAdptVal + "] 보다 작습니다.");
        ica_adptStDt.focus();
        return;
      }
      break;
  }
  ;
  if (scwin.hid_txt_adptStDt != ica_adptStDt.getValue()) {
    for (let i = 0; i < ds_StationCharge.getRowCount(); i++) {
      ds_StationCharge.setCellData(i, "adptStDt", ica_adptStDt.getValue());
    }
    ;
  }
  ;

  // 필수사항 체크 For Start --------------------------------------------------
  for (let i = 0; i < total_cnt; i++) {
    const rowData = ds_StationCharge.getRowJSON(i);
    const cntIdx = i + 1;
    if (rowData.hndlRateClsCd == -1) {
      await $c.gus.cfAlertMsg($p, "[" + cntIdx + " 번째 줄] " + MSG_CM_ERR_002, ["조작료구분"]);
      return;
    }
    ;
    if (rowData.pchsClntNm == "") {
      await $c.gus.cfAlertMsg($p, "[" + cntIdx + " 번째 줄] " + MSG_CM_ERR_002, ["매입거래처명"]);
      return;
    }
    ;
    if (rowData.pchsClntCd == "") {
      await $c.gus.cfAlertMsg($p, "[" + cntIdx + " 번째 줄] " + MSG_CM_ERR_002, ["매입거래처코드"]);
      return;
    }
    ;
  } // 필수사항 체크 For End --------------------------------------------------

  let retConfirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!retConfirm) return;
  if (scwin.act_status == "C") {
    for (let i = 0; i < ds_StationCharge.getRowCount(); i++) {
      ds_StationCharge.setCellData(i, "adptStDt", ica_adptStDt.getValue());
      ds_StationCharge.setCellData(i, "adptDt", ica_adptStDt.getValue());
    }
    ;
  }
  ;

  // act_status 
  const targetSbm = sbm_SaveStationEachHandlingCharge;
  targetSbm.action = "/ds.op.adjmbd.pchstrfmgnt.SaveStationEachHandlingChargeCMD.do?" + "saveWorkClassification=" + scwin.act_status;
  scwin.submitdone(targetSbm);
};

/**
 * @method 
 * @name f_Create 
 * @description 신규 버튼 처리
 */
scwin.f_Create = async function (e) {
  if (!scwin.searchYN) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    ed_trainWorkPlaceCd.focus();
    return;
  }
  ;
  if (ed_trainWorkPlaceCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["역명"]);
    ed_trainWorkPlaceCd.focus();
    return;
  }
  ;
  scwin.act_status = "C";
  ica_adptStDt.setReadOnly(false);
  dma_adptDate.set('from', "");
  dma_adptDate.set('to', "99999999");

  //버튼제어
  $c.gus.cfEnableBtnOnly($p, [btn_New, btn_Modify, btn_Save, btn_Delete, btn_Proc]);
  $c.gus.cfDisableBtnOnly($p, [btn_New, btn_Modify, btn_Delete, btn_Proc]);
  ds_StationCharge.removeAll();
  scwin.columnReadOnly(false);
  ica_adptStDt.focus();
};

/**
 * @method 
 * @name f_Update 
 * @description 수정버튼 처리 
 */
scwin.f_Update = function (e) {
  scwin.act_status = "U";

  //버튼제어
  $c.gus.cfEnableBtnOnly($p, [btn_New, btn_Modify, btn_Save, btn_Delete, btn_Proc]);
  $c.gus.cfDisableBtnOnly($p, [btn_New, btn_Modify, btn_Delete, btn_Proc]);
  if (ica_adptEndDt.getValue() == "99999999") {
    ica_adptStDt.setReadOnly(false);
    scwin.columnReadOnly(false);
  } else {
    $c.gus.cfDisableBtnOnly($p, [btn_Save]);
  }
  ;
};

/**
 * @method 
 * @name f_Delete 
 * @description 삭제버튼 처리 
 */
scwin.f_Delete = async function (e) {
  if (!scwin.searchYN) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    ed_trainWorkPlaceCd.focus();
    return;
  }
  ;
  if (ed_trainWorkPlaceCd.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["역명"]);
    ed_trainWorkPlaceCd.focus();
    return;
  }
  ;
  scwin.act_status = "D";
  ds_StationCharge.modifyRowStatus(ds_StationCharge.getRowPosition(), 'D');
  let retConfirm = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (!retConfirm) return;
  const targetSbm = sbm_SaveStationEachHandlingCharge;
  targetSbm.action = "/ds.op.adjmbd.pchstrfmgnt.DeleteStationEachHandlingChargeCMD.do?" + "adoptionDate=" + ica_adptStDt.getValue() + "&modifyBeforeAdoptionDate=" + ds_StationCharge.getCellData(0, "adptStDt") + "&saveWorkClassification=" + scwin.act_status;
  scwin.submitdone(targetSbm);
};

/**
 * @method 
 * @name f_ProcedureCall 
 * @description 요율생성 
 */
scwin.f_ProcedureCall = async function (e) {
  let retConfirm = await $c.win.confirm($p, "요율을 생성하시겠습니까?");
  if (!retConfirm) return;
  await scwin.submitdone(sbm_ProcedureCall);
};

/**
 * @method 
 * @name columnReadOnly 
 * @description
 */
scwin.columnReadOnly = function (readOnly) {
  let colId = gr_StationEachContainerEachHandlingCharge.getColumnOrder(true);
  for (let i = 0; i < colId.length; i++) {
    gr_StationEachContainerEachHandlingCharge.setColumnReadOnly(colId[i], readOnly);
  }
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @method 
 * @name submitdone 
 * @description submission 처리 
 */
scwin.submitdone = async function (sbmObj) {
  let e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg != "SUCC") return;

  //조회 후처리
  switch (sbmObj) {
    case sbm_RetrieveStationEachHandlingCharge:
      // for="ds_StationCharge" event="OnLoadCompleted(rowCnt)"
      let nRow = ds_StationCharge.getRowCount();
      if (nRow == 0) {
        await $c.gus.cfAlertMsg($p, "[역별조작료등록] " + MSG_CM_ERR_003);
        return;
      }
      totalRows.setValue(nRow);
      const rowData = ds_StationCharge.getRowJSON(0);
      scwin.hid_txt_adptStDt = ds_StationCharge.getCellData(0, "adptStDt");
      dma_adptDate.set('from', rowData.adptStDt);
      dma_adptDate.set('to', rowData.adptEndDt);
      ica_adptEndDt.setReadOnly(true);
      gr_StationEachContainerEachHandlingCharge.setFocusedCell(0, 0); //그리드 초기포커스
      break;
    case sbm_SaveStationEachHandlingCharge:
      if (e.responseJSON.resultDataSet[0].Code == -1) return;
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
      scwin.f_qeryList();
      break;
    case sbm_ProcedureCall:
      //for=ds_ProcedureCall event=OnLoadCompleted(rowCnt)
      await $c.win.alert($p, ds_ProcedureCall.getCellData(0, "prtn2"));
      break;
    default:
      break;
  }
  ;
};

/**
 * @method 
 * @name dlt_onload 
 * @description DataList의 데이터가 전체적으로 변경(set)되는 경우 발생
 */
scwin.dlt_onload = function () {
  if (this.getRowPosition() == null) {
    this.setRowPosition(0);
    scwin.gridSetFocus(this, 'offDayYn', 0, gr_RailroadMisosukList, totalRows);
  }
  ;
};

/**
 * @method 
 * @name dlt_oninsertrow 
 * @description 새로운 행이 추가된 후에 발생 (여러 행이 동시에 추가되면 한번만 발생)
 */
scwin.dlt_oninsertrow = function (info) {
  if (Object.keys(info.insertedDataObj).length < 1) return;
  const rowIdx = Object.keys(info.insertedDataObj)[0] ?? 0;
  this.setRowPosition(rowIdx);
  scwin.gridSetFocus(this, 'hndlRateClsCd', rowIdx, gr_StationEachContainerEachHandlingCharge, totalRows);
};

/**
 * @method 
 * @name dlt_onremoverow 
 * @description 행이 제거된 후에 발생 (여러 행이 동시에 제거되면 한번만 발생)
 */
scwin.dlt_onremoverow = function (info) {
  if (Object.keys(info.removedDataObj).length < 1) return;
  const rowIdx = Number(Object.keys(info.removedDataObj)[0]) - 1;
  const clacIdx = rowIdx == -1 ? 0 : rowIdx;
  this.setRowPosition(clacIdx);
  scwin.gridSetFocus(this, 'hndlRateClsCd', clacIdx, gr_StationEachContainerEachHandlingCharge, totalRows);
};

/**
 * @method 
 * @name gridSetFocus 
 * @description dataList 이벤트 후 그리드 실제 포커스 처리
 */
scwin.gridSetFocus = function (dataList, defaultCol, rowIndex, targetGrid, targetRows) {
  if (dataList != targetGrid._dataList) return;
  const focusCol = targetGrid.getFocusedColumnID() ?? defaultCol;
  targetGrid.setFocusedCell(rowIndex, focusCol);
  targetRows.setValue(dataList.getRowCount());
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name gr_StationEachContainerEachHandlingCharge_ontextimageclick 
 * @description inputType이 textImage인 경우 이미지가 클릭됐을 때 발생
 * @asis for=gr_StationEachContainerEachHandlingCharge event=OnPopup(row,colid,data)
 */
scwin.gr_StationEachContainerEachHandlingCharge_ontextimageclick = function (rowIndex, columnIndex) {
  let colid = this.getColumnID(columnIndex);
  switch (colid) {
    case "pchsClntCd":
      scwin.f_openCommonPopUp(2, scwin.code, scwin.name, 'F', 'T');
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name gr_StationEachContainerEachHandlingCharge_onafteredit 
 * @description 셀의 편집모드가 종료되어 포커스가 빠져나온 경우에 발생 (oneditend 이벤트 이후 발생)
 * @asis for=gr_StationEachContainerEachHandlingCharge event=OnExit(row,colid,olddata)
 * @asis for=gr_StationEachContainerEachHandlingCharge event=OnCloseUp(row,colid)
 */
scwin.gr_StationEachContainerEachHandlingCharge_onafteredit = function (rowIndex, columnIndex, value) {
  const colid = this.getColumnID(columnIndex);
  const rowData = ds_StationCharge.getRowJSON(rowIndex);
  switch (colid) {
    case "pchsClntCd":
    case "pchsClntNm":
      ds_StationCharge.setCellData(rowIndex, colid, value.toUpperCase());
      let v_pchsClntCd = rowData.pchsClntCd;
      let v_pchsClntNm = rowData.pchsClntNm;

      // tobe추가 : ontextimageclick 이벤트에 값 가지고 가기
      scwin.code = v_pchsClntCd;
      scwin.name = v_pchsClntNm;

      //인서트일때 왼쪽 데이터가 바뀌면 오른쪽 그리드에도 적용해야한다
      if (scwin.preCode == value) return;
      if (colid == "pchsClntCd") {
        //중기번호
        ds_StationCharge.setCellData(rowIndex, "pchsClntNm", "");
        v_pchsClntCd = value;
        scwin.f_chkOpenCommonPopUp(v_pchsClntCd, v_pchsClntNm, 2, true);
      } else if (colid == "pchsClntNm") {
        //단축코드
        ds_StationCharge.setCellData(rowIndex, "pchsClntCd", "");
        v_pchsClntNm = value;
        scwin.f_chkOpenCommonPopUp(v_pchsClntCd, v_pchsClntNm, 2, true);
      }
      break;

    // OnCloseUp
    case "hndlRateClsCd":
      scwin.f_doubleChk(rowIndex, colid);
      break;
    default:
      break;
  }
};

/**
 * @event 
 * @name gr_StationEachContainerEachHandlingCharge_oneditend 
 * @description tobe추가 : 그리드 pchsClntCd의 전값 체크 셋팅 
 */
scwin.gr_StationEachContainerEachHandlingCharge_oneditend = function (rowIndex, columnIndex, value) {
  let colid = gr_StationEachContainerEachHandlingCharge.getColumnID(columnIndex);
  if (colid == "pchsClntCd") {
    scwin.preCode = ds_StationCharge.getCellData(rowIndex, "pchsClntCd");
  }
};

/**
 * @event 
 * @name gr_StationEachContainerEachHandlingCharge_oncellindexchange 
 * @description 셀의 편집모드가 종료되어 포커스가 빠져나온 경우에 발생 (oneditend 이벤트 이후 발생)
 * @asis for=gr_StationEachContainerEachHandlingCharge event=OnClick(Row,Colid)
 */
scwin.gr_StationEachContainerEachHandlingCharge_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  const readOnly = ds_StationCharge.getRowStatus(rowIndex) != "C";
  gr_StationEachContainerEachHandlingCharge.setColumnReadOnly("hndlRateClsCd", readOnly);
};

/**
 * @event 
 * @name udc_trainWorkPlace_onblurCodeEvent 
 * @description [역명]
 */
scwin.udc_trainWorkPlace_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_trainWorkPlaceCd, ed_trainWorkPlaceNm, 1);
};

/**
 * @event 
 * @name udc_trainWorkPlace_onviewchangeNameEvent 
 * @description [역명]
 */
scwin.udc_trainWorkPlace_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_trainWorkPlaceNm, ed_trainWorkPlaceCd, 1, false);
};

/**
 * @event 
 * @name udc_trainWorkPlace_onclickEvent 
 * @description [역명]
 */
scwin.udc_trainWorkPlace_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_trainWorkPlaceCd.getValue(), ed_trainWorkPlaceNm.getValue(), 'F', 'T');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'역별조작료등록 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'shbox ',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'역명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveTrainWorkPlace',codeId:'ed_trainWorkPlaceCd',validTitle:'역명',popupTitle:'',nameId:'ed_trainWorkPlaceNm',style:'',id:'udc_trainWorkPlace',mandatoryCode:'true',objTypeCode:'Key',UpperFlagCode:'1',maxlengthCode:'6',objTypeName:'data',mandatoryName:'true','ev:onblurCodeEvent':'scwin.udc_trainWorkPlace_onblurCodeEvent','ev:onclickEvent':'scwin.udc_trainWorkPlace_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_trainWorkPlace_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ica_BaseDate',style:'',displayFormat:'yyyy/MM/dd',mandatory:'true',validExp:'적용일자:yes:date=YYYYMMDD" mandatory="true',title:'적용일자'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_FieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_qeryList',style:'',type:'button','ev:onclick':'scwin.f_qeryList',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'적용시작일자 ',class:'req'}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_adptStDt',class:'form-control cal',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd',validExp:'적용일자:yes:date=YYYYMMDD',mandatory:'true',readOnly:'true',ref:'data:dma_adptDate.from'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용종료일자 ',style:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ica_adptEndDt',style:'',displayFormat:'yyyy/MM/dd',readOnly:'true',mandatory:'true',keepInvalidDate:'true',dateValidCheck:'false',displaymessage:'false',ref:'data:dma_adptDate.to'}}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_StationCharge',id:'gr_StationEachContainerEachHandlingCharge',style:'',visibleRowNum:'13',visibleRowNumFix:'true',rowStatusVisible:'true',focusMode:'row',focusMove:'true','ev:oncellclick':'scwin.gr_StationEachContainerEachHandlingCharge_oncellclick',gridName:'철도역별 조작료율 등록 수정 조회','ev:onafteredit':'scwin.gr_StationEachContainerEachHandlingCharge_onafteredit','ev:ontextimageclick':'scwin.gr_StationEachContainerEachHandlingCharge_ontextimageclick','ev:oncellindexchange':'scwin.gr_StationEachContainerEachHandlingCharge_oncellindexchange','ev:oneditend':'scwin.gr_StationEachContainerEachHandlingCharge_oneditend'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'적용일자(key)',width:'130',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'적용시작일자',width:'130',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'적용종료일자',width:'130',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'조작료구분',width:'120',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'20E',width:'70',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'20F',width:'70',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'40E',width:'70',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'40F',width:'70',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'45E',width:'70',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'45F',width:'70',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column37',value:'매입거래처',displayMode:'label',colSpan:'2',rowSpan:'',class:'col-type1',sortable:'false'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column34',value:'발생여부',displayMode:'label',colSpan:'2',rowSpan:'',class:'col-type2',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column38',value:'코드',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column32',value:'이름',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'출발역',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'도착역',displayMode:'label',class:'col-type2'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'text',style:'',value:'',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptStDt',inputType:'text',style:'',value:'',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptEndDt',inputType:'text',style:'',value:'',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hndlRateClsCd',inputType:'select',style:'',value:'',width:'120',textAlign:'left',allOption:'',chooseOption:'',ref:'',emptyItem:'true',emptyValue:'-1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo_workPrice'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'hndlRate20Empty',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hndlRate20Full',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hndlRate40Empty',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hndlRate40Full',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hndlRate45Empty',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hndlRate45Full',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'pchsClntCd',value:'',displayMode:'label',textAlign:'center',viewType:'default',viewTypeIconImage:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsClntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',style:'',id:'dptStnOutbrYn',value:'',displayMode:'label',textAlign:'center',trueValue:'1',falseValue:'0',emptyValue:'0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',style:'',id:'arvStnOutbrYn',value:'',displayMode:'label',textAlign:'center'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',rowAddFunction:'scwin.f_gridAddRow',gridID:'gr_StationEachContainerEachHandlingCharge',id:'udc_bottomGrdBtn',rowDelFunction:'scwin.f_gridDelRow',btnRowAddObj:'btn_AddRow',btnRowDelObj:'btn_DelRow',btnCancelObj:'btn_CanRow',btnDelYn:'N',btnRowDelYn:'Y',cancelFunction:'scwin.f_gridUndo',rowDelUserAuth:'D',rowAddUserAuth:'C',cancelUserAuth:'R'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_New',style:'',type:'button','ev:onclick':'scwin.f_Create',objType:'bCreate',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Modify',style:'',type:'button','ev:onclick':'scwin.f_Update',objType:'bUpdate',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.f_Delete',objType:'bDelete',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white','ev:onclick':'scwin.f_ProcedureCall',id:'btn_Proc',style:'',type:'button',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'요율생성'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'hideGroup',style:'display: none;'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',UpperFlagCode:'1',codeId:'gr_pchsClntCd',selectID:'retrieveClntNoInfo',popupTitle:'',validTitle:'',nameId:'gr_pchsClntNm',style:'',id:'udc_gr_pchsClntCd'}}]}]}]}]})