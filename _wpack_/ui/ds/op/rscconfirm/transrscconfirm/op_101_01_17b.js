/*amd /ui/ds/op/rscconfirm/transrscconfirm/op_101_01_17b.xml 39441 06098b6ce463f2fefe1fce4743bf7ffec8348da95799cc9d3c18b125c65404b8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_QueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqNo',name:'장비번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RetrieveSpotVehicles',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_RetrieveSpotVehicles_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'clntKndCd',name:'거래처종류코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'장비규격명',dataType:'text',defaultValue:'',length:'5'}},{T:1,N:'w2:column',A:{id:'eqNo',name:'장비번호',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축코드',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'trsNo',name:'TRSNO',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'장비종류명',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'vehclDrv',name:'기사명',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'연락처',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'homeCoNm',name:'소속업체명',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'vehclIdCardNo',name:'차량ID번호',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'bondTransStDt',name:'보세운송시작일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'bondTransEndDt',name:'보세운송종료일자',dataType:'text',defaultValue:'',length:'8'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vehclKnd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_vehclKnd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_combo_carnrm'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라미터1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo_carnrm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'상위코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_conNrm'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라미터1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_conNrm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:linkedDataList',A:{bind:'ds_combo_carnrm',id:'ldt_eqNrmCd'},E:[{T:1,N:'w2:condition',A:{type:'filter'}},{T:1,N:'w2:condition',A:{type:'sort'}}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveSpotVehicles',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveSpotVehiclesCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_QueryCondition","key":"IN_DS1"},{"id":"ds_RetrieveSpotVehicles","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RetrieveSpotVehicles","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveSpotVehicles_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_SaveSpotVehicles',action:'/ds.op.rscconfirm.transrscconfirm.SaveSpotVehiclesCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_RetrieveSpotVehicles","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_SaveSpotVehicles_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getVehclKnd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_vehclKnd',target:'data:json,{"id":"ds_vehclKnd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getCarnrm',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_combo_carnrm',target:'data:json,{"id":"ds_combo_carnrm","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getConNrm',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_conNrm',target:'data:json,{"id":"ds_conNrm","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.toDay = $c.date.getServerDateTime($p, "yyyyMMdd"); //현재일자
scwin.sUserClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자 구분코드
scwin.sClntNo = $c.data.getMemInfo($p, "clntNo");
scwin.sClntNm = $c.data.getMemInfo($p, "clntNm");

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // 입력 그리드 maxlength 설정
  scwin.f_SetGridColumnMaxLength(gr_RetrieveSpotVehicles);
  scwin.f_comboValue();
  scwin.f_RetrieveCommonUpperCd();
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //소스
    ed_reqMchtCd.focus();
    $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bUpdate')]);
    if (scwin.sUserClsCd != "01") {
      ed_reqMchtCd.setValue(scwin.sClntNo);
      ed_reqMchtNm.setValue(scwin.sClntNm);
      $c.gus.cfEnableObj($p, ed_reqMchtCd, false);
      $c.gus.cfEnableObj($p, ed_reqMchtNm, false);
    }

    //테스트 데이터
    //ds_QueryCondition.set("clntNo", "113809");
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 입력 그리드 maxlength 설정
//-------------------------------------------------------------------------
scwin.f_SetGridColumnMaxLength = function (gridViewObj) {
  for (let i = 0; i < gridViewObj.getTotalCol(); i++) {
    let colNm = gridViewObj.getColumnID(i);
    let dataObj = $c.gus.object($p, gridViewObj.getDataList());
    let colInfo = dataObj.getColumnInfo(colNm);
    if (typeof colInfo != "undefined") {
      gridViewObj.setMaxLength(i, colInfo.length);
    }
  }
};

//-------------------------------------------------------------------------
// 중기 투입 요청 현황 , 중기 배정 결과 조회
//-------------------------------------------------------------------------
scwin.f_qeryList = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_reqMchtCd]);
  if (!ret) {
    // 거래처번호(협력업체)
    return;
  }
  $c.sbm.execute($p, sbm_RetrieveSpotVehicles);
};

//-------------------------------------------------------------------------
//  차량코드를 받아 차량코드명을 반환하는 함수
//-------------------------------------------------------------------------
scwin.f_eqKndNmReturn = function (eqKndCd) {
  var total_cnt = ds_combo_carknd.getRowCount();
  for (var i = 0; i < total_cnt; i++) {
    if (ds_combo_carknd.getCellData(i, "Code") == eqKndCd) return ds_combo_carknd.getCellData(i, "Name");
  }
};

//-------------------------------------------------------------------------
// 차량번호  중복입력을 체크하는 함수 ; 리턴값-->  F = 실행중지, T = 진행가능
//-------------------------------------------------------------------------
scwin.f_doubleChk = function (cur_row, eqNo) {
  var rowState = 0;
  var total_cnt = ds_RetrieveSpotVehicles.getRowCount();
  var s_carNo = ds_RetrieveSpotVehicles.getCellData(cur_row, "eqNo");
  for (var i = 0; i < total_cnt; i++) {
    rowState = ds_RetrieveSpotVehicles.getRowStatus(i);
    if (rowState == "D") continue; // 해당 Row 가 삭제상태일 경우 무시함.
    if (i == cur_row) continue; // 해당 Row 가 현재 Row의 차량번호일 경우 무시함..

    if (ds_RetrieveSpotVehicles.getCellData(i, "eqNo") == s_carNo) {
      return "F";
    }
  }
  return "T";
};

//-------------------------------------------------------------------------
// 저장버튼 처리 
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  for (var i = 0; i < ds_RetrieveSpotVehicles.getRowCount(); i++) {
    if (ds_RetrieveSpotVehicles.getCellData(i, "eqNo").trim() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["차량번호"]);
      ds_RetrieveSpotVehicles.setFocusedCell(i, "eqNo", true); //edit : true
      return;
    }
    if (ds_RetrieveSpotVehicles.getCellData(i, "eqKndCd").trim() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, [i + " 번째줄의 차량종류코드"]);
      ds_RetrieveSpotVehicles.setFocusedCell(i, "eqKndCd", true); //edit : true
      return;
    }
    if (ds_RetrieveSpotVehicles.getCellData(i, "vehclDrv").trim() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, [i + " 번째줄의 기사명"]);
      ds_RetrieveSpotVehicles.setFocusedCell(i, "vehclDrv", true); //edit : true
      return;
    }
    if (ds_RetrieveSpotVehicles.getCellData(i, "mpNo").trim() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, [i + " 번째줄의 핸드폰번호"]);
      ds_RetrieveSpotVehicles.setFocusedCell(i, "mpNo", true); //edit : true
      return;
    }
    if (ds_RetrieveSpotVehicles.getCellData(i, "bondTransStDt") != "" && ds_RetrieveSpotVehicles.getCellData(i, "bondTransEndDt") != "") {
      if (ds_RetrieveSpotVehicles.getCellData(i, "bondTransStDt") > ds_RetrieveSpotVehicles.getCellData(i, "bondTransEndDt")) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_018, ["보세운송기간"]);
        ds_RetrieveSpotVehicles.setFocusedCell(i, "bondTransStDt", true); //edit : true
        return;
      }
    }
    if (ds_RetrieveSpotVehicles.getCellData(i, "bondTransStDt") != "" && ds_RetrieveSpotVehicles.getCellData(i, "bondTransEndDt") == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_018, ["보세운송기간"]);
      ds_RetrieveSpotVehicles.setFocusedCell(i, "bondTransStDt", true); //edit : true
      return;
    }
    if (ds_RetrieveSpotVehicles.getCellData(i, "bondTransStDt") == "" && ds_RetrieveSpotVehicles.getCellData(i, "bondTransEndDt") != "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_018, ["보세운송기간"]);
      ds_RetrieveSpotVehicles.setFocusedCell(i, "bondTransStDt", true); //edit : true
      return;
    }
  }
  let ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    $c.sbm.execute($p, sbm_SaveSpotVehicles);
  }
};

//-------------------------------------------------------------------------
// SPOT 차량  행추가  처리 
//-------------------------------------------------------------------------
scwin.f_inputGridAddrow = function () {
  if (ed_reqMchtCd.getValue() == "") {
    $c.gus.cfAlertMsg($p, "협력업체를 먼저 선택하세요.");
    ed_reqMchtCd.focus();
    return;
  }
  var newRow = ds_RetrieveSpotVehicles.insertRow();
  ds_RetrieveSpotVehicles.setRowPosition(newRow);
  ds_RetrieveSpotVehicles.setCellData(ds_RetrieveSpotVehicles.getRowPosition(), "clntNo", ds_QueryCondition.get("clntNo")); // 거래처번호 협력업체 코드
  ds_RetrieveSpotVehicles.setCellData(ds_RetrieveSpotVehicles.getRowPosition(), "clntNm", ed_reqMchtNm.getValue()); // 거래처번호 = 협력업체  이름

  $c.gus.cfDisableBtn($p, []);
};

//-------------------------------------------------------------------------
// SPOT 차량  행삭제  처리 
//-------------------------------------------------------------------------
scwin.f_inputGridDelrow = function () {
  if (ds_RetrieveSpotVehicles.getRowStatus(ds_RetrieveSpotVehicles.getRowPosition()) == "C") {
    ds_RetrieveSpotVehicles.removeRow(ds_RetrieveSpotVehicles.getRowPosition());
  } else {
    let row = ds_RetrieveSpotVehicles.getRowPosition();
    ds_RetrieveSpotVehicles.deleteRow(ds_RetrieveSpotVehicles.getRowPosition());
    ds_RetrieveSpotVehicles.setRowPosition(row);
  }
  if (ds_RetrieveSpotVehicles.getRowCount() == 0) {
    $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bUpdate')]);
  }
};

//-------------------------------------------------------------------------
// SPOT 차량 행취소 처리 
//-------------------------------------------------------------------------
scwin.f_inputGridCancelrow = function () {
  $c.data.undoRow($p, ds_RetrieveSpotVehicles, false);
  ds_RetrieveSpotVehicles.undoRow(ds_RetrieveSpotVehicles.getRowPosition());
  if (ds_RetrieveSpotVehicles.getRowCount() > 0) {
    ds_RetrieveSpotVehicles.setRowPosition(0);
  }
  if (ds_RetrieveSpotVehicles.getRowCount() == 0) {
    $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bUpdate')]);
  }
};

//-------------------------------------------------------------------------
// 차량종류 콤보박스 조회
//-------------------------------------------------------------------------
scwin.f_comboValue = function () {
  // 차량종류 콤보박스 조회
  dma_vehclKnd.set("sysCd", "CooperationCompanyEquipmentEBC");
  dma_vehclKnd.set("queryId", "retriveCarKindCodeListCombo");
  $c.sbm.execute($p, sbm_getVehclKnd);

  //그리드 차량종류 - TOBE에서 한개만 조회해서 사용가능
  //ds_combo_carknd.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=CooperationCompanyEquipmentEBC&queryId=retriveCarKindCodeListCombo";
  //ds_combo_carknd.Reset();
};

//-------------------------------------------------------------------------
// 차량규격 콤보박스 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveSecond = function (param1) {
  dma_conNrm.set("sysCd", "CooperationCompanyEquipmentEBC");
  dma_conNrm.set("queryId", "retrivecComboNrmCodeList");
  dma_conNrm.set("param1", param1);
  $c.sbm.execute($p, sbm_getConNrm);
};

//-------------------------------------------------------------------------
// 그리드 : 차량규격 콤보박스 조회 
//-------------------------------------------------------------------------
scwin.f_RetrieveCommonUpperCd = function () {
  dma_combo_carnrm.set("sysCd", "CooperationCompanyEquipmentEBC");
  dma_combo_carnrm.set("queryId", "retrivecComboNrmAllList");
  dma_combo_carnrm.set("param1", "ZZ208");
  $c.sbm.execute($p, sbm_getCarnrm);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var ser_name;

  // 협력업체가 로그인했을시에 팝업을 띄우지 않는다.
  if (disGubun == 1 && scwin.sUserClsCd != "01") {
    return;
  }
  switch (disGubun) {
    case 1:
      // 협력업체 (차량) 팝업
      udc_reqMchtCd.setSelectId("retrieveCarKindClntInfo"); // XML상의 SELECT ID
      udc_reqMchtCd.cfCommonPopUp(scwin.udc_reqMchtCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , '01' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "차량 협력업체조회,협력업체코드,협력업체명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 차량번호검색 팝업
      if (ed_pressNo.getValue() != "") {
        ser_name = ed_pressNo.getValue();
      } else {
        ser_name = ed_vehclNm.getValue();
      }
      udc_pressNo.setSelectId("retrieveSpotCarInfo"); // XML상의 SELECT ID
      udc_pressNo.cfCommonPopUp(scwin.udc_pressNo_callBackFunc // 콜백 함수
      , ed_reqMchtCd.getValue().trim() // 화면에서의 ??? Code Element의 Value
      , ser_name // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , '150,200' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , '01' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , '440' // POP-UP뛰을때 원도우의 사용자 정의 폭
      , '500' // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  if (scwin.sUserClsCd != "01") {
    ed_reqMchtCd.setValue(scwin.sClntNo);
    ed_reqMchtNm.setValue(scwin.sClntNm);
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

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
// 엑셀다운로드
//-------------------------------------------------------------------------
scwin.f_runExcel = async function (varGrNm) {
  var sheetTitle = "SPOT 차량정보 현황";
  if (ds_RetrieveSpotVehicles.getRowCount() > 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        ,
        sheetName: sheetTitle //엑셀내 시트명 지정필요시
      };
      const infoArr = [];
      $c.data.downloadGridViewExcel($p, gr_RetrieveSpotVehicles, options, infoArr);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//----------------------------------------------------------------------------
// 보세운송 시작일자<= 보세운송종료일자  유지 컨트롤
//----------------------------------------------------------------------------
scwin.f_dateChk = function (BaseRow) {
  if (ds_RetrieveSpotVehicles.getCellData(BaseRow, "bondTransStDt") != "" && ds_RetrieveSpotVehicles.getCellData(BaseRow, "bondTransEndDt") != "") {
    if (ds_RetrieveSpotVehicles.getCellData(BaseRow, "bondTransStDt") > ds_RetrieveSpotVehicles.getCellData(BaseRow, "bondTransEndDt")) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_018, ["보세운송기간"]);
    }
  }
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_RetrieveSpotVehicles_submitdone = function (e) {
  if (ds_RetrieveSpotVehicles.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, "[SPOT 차량정보 정보] " + MSG_CM_ERR_003);
  } else {
    $c.gus.cfDisableBtn($p, []);
  }
  tbx_totalRows.setValue(ds_RetrieveSpotVehicles.getRowCount());
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_SaveSpotVehicles_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_002);
  ds_RetrieveSpotVehicles.removeAll();
  scwin.f_qeryList();
};

//-------------------------------------------------------------------------
// 협력업체 UDC START
//-------------------------------------------------------------------------
scwin.btn_reqMchtCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_reqMchtCd.getValue(), ed_reqMchtNm.getValue(), 'F', 'T');
};
scwin.btn_reqMchtCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_reqMchtCd, ed_reqMchtNm, 1);
};
scwin.btn_reqMchtCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_reqMchtNm, ed_reqMchtCd, 1, false);
};
scwin.udc_reqMchtCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_reqMchtCd, ed_reqMchtNm);
};
//-------------------------------------------------------------------------
// 협력업체명 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// SPOT 차량번호 UDC START
//-------------------------------------------------------------------------
scwin.udc_pressNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_pressNo.getValue(), ed_vehclNm.getValue(), 'F', 'T');
};
scwin.udc_pressNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pressNo, ed_vehclNm, 2);
};
scwin.udc_pressNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_pressNo, ed_pressNo, 2, false);
};
scwin.udc_pressNo_callBackFunc = function (ret) {
  if (ret != null) {
    if (ret[0] != "N/A") {
      ed_vehclNm.setValue(ret[0]);
      var eqNo_len = ret[0].length;
      if (eqNo_len > 4) {
        var oBufferEqNo = ret[0].substring(eqNo_len - 4, eqNo_len);
        if (oBufferEqNo >= 0 && oBufferEqNo <= 9999) {
          ed_pressNo.setValue(oBufferEqNo);
        }
      }
    }
  }
};
//-------------------------------------------------------------------------
// SPOT 차량번호 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 그리드 oncellclick
//-------------------------------------------------------------------------
scwin.gr_RetrieveSpotVehicles_oncellclick = function (rowIndex, columnIndex, columnId) {
  var status = ds_RetrieveSpotVehicles.getRowStatus(rowIndex);

  //gr_RetrieveSpotVehicles.ColumnProp("eqNo", "Language") = "1"; //대체 함수 없음  

  if (columnId == "eqNo") {
    if (status == "R" || status == "D") {
      gr_RetrieveSpotVehicles.setCellReadOnly(rowIndex, columnId, true);
    } else if (status == "C") {
      gr_RetrieveSpotVehicles.setCellReadOnly(rowIndex, columnId, false);
    }
  }
  if (columnId == "eqNrmCd" && ds_RetrieveSpotVehicles.getCellData(ds_RetrieveSpotVehicles.getRowPosition(), "eqKndCd") != "") {
    //var eqKndCd = ds_RetrieveSpotVehicles.getCellData(ds_RetrieveSpotVehicles.getRowPosition(), "eqKndCd");
    //ds_combo_carnrm.removeColumnFilterAll();
    //$c.data.dataListFilter(ds_combo_carnrm, "upperCd=='" + eqKndCd + "'");
    ldt_eqNrmCd.setCondition("filter", "upperCd==ref('ds_RetrieveSpotVehicles.eqKndCd')"); // 차량규격에 필터를 걸면 다른ROW 데이터까지 바뀜
  }
};

//-------------------------------------------------------------------------
// 그리드 onafteredit
// ASIS : gr_RetrieveSpotVehicles OnExit(row,colid,olddata)
//-------------------------------------------------------------------------
scwin.gr_RetrieveSpotVehicles_onafteredit = function (rowIndex, columnIndex, value) {
  var oBufferEqNo = "";
  var oShortYn = "N";
  if (columnIndex == 2) {
    //eqNo
    if (scwin.f_doubleChk(rowIndex, ds_RetrieveSpotVehicles.getCellData(rowIndex, "eqNo")) == "F") {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_011, ["차량번호"]);
      ds_RetrieveSpotVehicles.setCellData(rowIndex, "eqNo", "");
    }
    eqNo_len = ds_RetrieveSpotVehicles.getCellData(rowIndex, "eqNo").length;
    if (eqNo_len > 4) {
      oBufferEqNo = ds_RetrieveSpotVehicles.getCellData(rowIndex, "eqNo").substring(eqNo_len - 4, eqNo_len);
      if (oBufferEqNo >= 0 && oBufferEqNo <= 9999) {
        ds_RetrieveSpotVehicles.setCellData(rowIndex, "vehclShortCd", oBufferEqNo);
        oShortYn = "Y";
      }
    }
    if (oShortYn == "N") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["차량번호"]);
      ds_RetrieveSpotVehicles.setCellData(rowIndex, "eqNo", "");
    }
  } else if (columnIndex == 10 || columnIndex == 11) {
    //10:bondTransStDt, 11:bondTransEndDt
    scwin.f_dateChk(rowIndex);
  }
};

//-------------------------------------------------------------------------
// 데이터셋 oncelldatachange
// ASIS : gr_RetrieveSpotVehicles onColumnChanged(row,colid,olddata)
//-------------------------------------------------------------------------
scwin.ds_RetrieveSpotVehicles_oncelldatachange = function (info) {
  // 차량종류가 변경되면 차량규격을 필터링하고 첫번째 데이터로 SET
  if (info.colID == "eqKndCd" && ds_RetrieveSpotVehicles.getCellData(info.rowIndex, "eqKndCd") != "") {
    // var eqKndCd = ds_RetrieveSpotVehicles.getCellData(info.rowIndex, "eqKndCd");
    // ds_combo_carnrm.removeColumnFilterAll();
    // $c.data.dataListFilter(ds_combo_carnrm, "upperCd=='" + eqKndCd + "'");
    ldt_eqNrmCd.setCondition("filter", "upperCd==ref('ds_RetrieveSpotVehicles.eqKndCd')"); // 차량규격에 필터를 걸면 다른ROW 데이터까지 바뀜

    if (ldt_eqNrmCd.getRowCount() > 0) {
      ds_RetrieveSpotVehicles.setCellData(info.rowIndex, "eqNrmCd", ldt_eqNrmCd.getCellData(0, "code"));
      ds_RetrieveSpotVehicles.setCellData(info.rowIndex, "eqNrmNm", ldt_eqNrmCd.getCellData(0, "name"));
    } else {
      ds_RetrieveSpotVehicles.setCellData(info.rowIndex, "eqNrmCd", "");
      ds_RetrieveSpotVehicles.setCellData(info.rowIndex, "eqNrmNm", "");
      ldt_eqNrmCd;
    }
  }
};

//-------------------------------------------------------------------------
// 차량종류 onviewchange
// ASIS : lc_con_vehclKnd OnSelChange()
//-------------------------------------------------------------------------
scwin.acb_con_vehclKnd_onviewchange = function (info) {
  scwin.f_RetrieveSecond(acb_con_vehclKnd.getValue());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'협력업체',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_reqMchtCd',nameId:'ed_reqMchtNm',btnId:'btn_reqMchtCd',id:'udc_reqMchtCd',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'7','ev:onclickEvent':'scwin.btn_reqMchtCd_onclickEvent','ev:onblurCodeEvent':'scwin.btn_reqMchtCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.btn_reqMchtCd_onviewchangeNameEvent',code:'clntNo',refDataCollection:'ds_QueryCondition',validTitle:'협력업체',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_con_vehclKnd',search:'start',style:'width:200px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:ds_QueryCondition.eqKndCd','ev:onviewchange':'scwin.acb_con_vehclKnd_onviewchange',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_vehclKnd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량규격 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_con_nrm',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_QueryCondition.eqNrmCd',allOption:'',chooseOption:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_conNrm'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SPOT 차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',refDataCollection:'ds_QueryCondition',codeId:'ed_pressNo',nameId:'ed_vehclNm',btnId:'btn_pressNo',id:'udc_pressNo','ev:onclickEvent':'scwin.udc_pressNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_pressNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_pressNo_onviewchangeNameEvent',name:'eqNo',maxlengthCode:'7',allowCharCode:'a-zA-Z0-9'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_qeryList',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'SPOT 차량정보 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_runExcel',gridID:'gr_RetrieveSpotVehicles',gridUpYn:'N',templateYn:'N',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_RetrieveSpotVehicles',id:'gr_RetrieveSpotVehicles',style:'',visibleRowNum:'16',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_RetrieveSpotVehicles_oncellclick','ev:onafteredit':'scwin.gr_RetrieveSpotVehicles_onafteredit',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'차량종류',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'차량규격',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'차량번호',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'단축<br/>번호',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'기사명',width:'90',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'전화번호',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'TRS번호',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'휴대폰번호',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'소속업체',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'ID카드번호',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'보세운송<br/>시작일자',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'보세운송<br/>종료일자',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'select',width:'100',chooseOption:'true',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_vehclKnd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'select',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ldt_eqNrmCd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclShortCd',inputType:'text',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclDrv',inputType:'text',width:'90',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'telNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trsNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mpNo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeCoNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclIdCardNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'bondTransStDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'bondTransEndDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',cancelFunction:'scwin.f_inputGridCancelrow',rowAddFunction:'scwin.f_inputGridAddrow',gridID:'gr_RetrieveSpotVehicles',rowAddUserAuth:'C',rowDelUserAuth:'D',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',rowDelFunction:'scwin.f_inputGridDelrow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',objType:'bUpdate','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})