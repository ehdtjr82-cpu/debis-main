/*amd /ui/ds/op/wrkrslts/yardwrkrslts/op_320_01_01b.xml 44071 2e2c6666ede661ee368529eedb19d399826b69f9734f6c134e303c9d82bf9d66 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_RetrieveInoutIntendCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ioClsCd',name:'입출고 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ioIntendTermFrom',name:'입출고예정기간 시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ioIntendTermTo',name:'입출고예정기간 완료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqMchtCd',name:'요청화주',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rltNo',name:'관련번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ourcoYn',name:'자사여부, 운송주체',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoClntNo',name:'협력업체거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RetrieveInoutIntendList',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_RetrieveInoutIntendList_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ioClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'comm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'I/O',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioIntendDt',name:'예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioIntendHh',name:'예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsCbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retNo',name:'관련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realClntNm',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioIntendNo',name:'name24',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RetrieveInoutIntendEquipment',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqBizNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCarNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'차종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vechlCnt',name:'대수',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_RetrieveInoutIntendEquipmentList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'inoutIntendNumber',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveInoutIntendList',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveInoutIntendInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_RetrieveInoutIntendCondition","key":"IN_DS1"},{"id":"ds_RetrieveInoutIntendList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RetrieveInoutIntendList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveInoutIntendList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveInoutIntendEquipmentList',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveInoutIntendEquipmentCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_RetrieveInoutIntendEquipmentList","key":"IN_DS1"},{"id":"ds_RetrieveInoutIntendEquipment","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RetrieveInoutIntendEquipment","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveInoutIntendEquipmentList_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.today = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP228",
    compID: "co_acb_srchCode1"
  },
  //입출고 구분
  {
    grpCd: "OP194",
    compID: "co_acb_srchCode2"
  },
  //수출입 구분
  {
    grpCd: "ZZ505",
    compID: "co_acb_srchCode3"
  },
  //자사/타사구분
  {
    grpCd: "ZZ210",
    compID: "gr_selfInoutList2:eqKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.gus.cfSetIMEModeActiveObjects($p, [ed_retBizNm, ed_retrieveClntNm, ed_reqMchtNm, ed_empNm, ed_vsslNm]);
};
scwin.onUdcCompleted = function () {
  ed_srchFromDate.setValue(scwin.today);
  ed_srchToDate.setValue(scwin.today);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  co_acb_srchCode1.focus();
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 작업장 팝업	
      udc_comCodeClnt.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_retrieveClntNo, ed_retrieveClntNm);
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
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 요청화주=요청거래처 팝업	
      udc_comCodeReqMcht.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_reqMchtCd, ed_reqMchtNm);
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
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // 품명 팝업			
      udc_comCodeEmp.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_empNo, ed_empNm);
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
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      // 모선명 팝업	
      udc_comCodeVss.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_vsslCd, ed_vsslNm);
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
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 5:
      // 협력업체 팝업	
      udc_retBiz.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_retBizNo, ed_retBizNm);
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
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

//-------------------------------------------------------------------------
// 입출고 예정정보 조회
//-------------------------------------------------------------------------
scwin.f_qeryList = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_srchFromDate, ed_srchToDate]))) {
    //  입출고예정시작일자, 입출고예정끝일자.
    return;
  }
  if (!(await $c.gus.cfValidate($p, ed_srchFromDate)) || !(await $c.gus.cfValidate($p, ed_srchToDate))) {
    return;
  }
  if (!(await $c.gus.cfIsAfterDate($p, ed_srchFromDate.getValue(), ed_srchToDate.getValue()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_srchFromDate.focus();
    return;
  }
  if (ed_retrieveClntNo.getValue() == null || ed_retrieveClntNo.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "작업장을 선택하지 않으셨습니다."); // 작업장선택
    ed_retrieveClntNo.focus();
    return;
  }
  dma_RetrieveInoutIntendCondition.setEmptyValue();
  dma_RetrieveInoutIntendCondition.set("ioClsCd", co_acb_srchCode1.getValue()); // 입출고 구분
  dma_RetrieveInoutIntendCondition.set("wrkPlCd", ed_retrieveClntNo.getValue()); // 작업장
  dma_RetrieveInoutIntendCondition.set("ioIntendTermFrom", ed_srchFromDate.getValue()); // 입출고예정기간 시작일
  dma_RetrieveInoutIntendCondition.set("ioIntendTermTo", ed_srchToDate.getValue()); // 입출고예정기간 완료일
  dma_RetrieveInoutIntendCondition.set("impExpClsCd", co_acb_srchCode2.getValue()); // 수출입구분
  dma_RetrieveInoutIntendCondition.set("reqMchtCd", ed_reqMchtCd.getValue()); // 요청화주
  dma_RetrieveInoutIntendCondition.set("commCd", ed_empNo.getValue()); // 품명
  dma_RetrieveInoutIntendCondition.set("odrNo", ed_ordNo.getValue()); // 오더번호
  dma_RetrieveInoutIntendCondition.set("rltNo", ed_otherNo.getValue()); // 관련번호
  dma_RetrieveInoutIntendCondition.set("vsslCd", ed_vsslCd.getValue()); // 선박코드
  dma_RetrieveInoutIntendCondition.set("ourcoYn", co_acb_srchCode3.getValue()); // 자사여부, 운송주체
  dma_RetrieveInoutIntendCondition.set("copCoClntNo", ed_retBizNo.getValue()); // 협력업체거래처번호

  $c.sbm.execute($p, sbm_RetrieveInoutIntendList);
};

//-------------------------------------------------------------------------
// 메인 리스트에서 선택시 화면 좌측아래의 입출고예정정보 추가사항들 InerHtml
//-------------------------------------------------------------------------
scwin.f_setUnderDraw = function (cur_Row) {
  odrNo.setValue(ds_RetrieveInoutIntendList.getCellData(cur_Row, "odrNo").trim());
  rtnNo.setValue(ds_RetrieveInoutIntendList.getCellData(cur_Row, "retNo"));
  vsslNm.setValue(ds_RetrieveInoutIntendList.getCellData(cur_Row, "vsslNm"));
  portcnt.setValue(ds_RetrieveInoutIntendList.getCellData(cur_Row, "portcnt"));
  dptWrkPlNm.setValue(ds_RetrieveInoutIntendList.getCellData(cur_Row, "dptWrkPlNm"));
  arvWrkPlNm.setValue(ds_RetrieveInoutIntendList.getCellData(cur_Row, "arvWrkPlNm"));
  reqClntMgntNm.setValue(ds_RetrieveInoutIntendList.getCellData(cur_Row, "reqClntNm"));
  realClntMgntNm.setValue(ds_RetrieveInoutIntendList.getCellData(cur_Row, "realClntNm"));
  wrkStDt.setValue(scwin.f_dateForm(ds_RetrieveInoutIntendList.getCellData(cur_Row, "wrkStDt"), "B"));
  wrkEndDt.setValue(scwin.f_dateForm(ds_RetrieveInoutIntendList.getCellData(cur_Row, "wrkEndDt"), "B"));
  rmk.setValue(ds_RetrieveInoutIntendList.getCellData(cur_Row, "rmk"));
};

//-------------------------------------------------------------------------
// 우하단 투입예정차량정보 리스트 조회
//-------------------------------------------------------------------------
scwin.f_InoutIntendEquipmentList = function (cur_Row) {
  dma_RetrieveInoutIntendEquipmentList.set("inoutIntendNumber", ds_RetrieveInoutIntendList.getCellData(cur_Row, "ioIntendNo"));
  $c.sbm.execute($p, sbm_RetrieveInoutIntendEquipmentList);
};

//-------------------------------------------------------------------------		
// 텍스트 날짜를 YYYY/MM/DD HH:mm 으로  바꾸는 함수		
//-------------------------------------------------------------------------		
scwin.f_dateForm = function (sdate, kind) {
  if (sdate == "") {
    return return_value;
  }
  var tYYYY = sdate.substring(0, 4);
  var tMM = sdate.substring(4, 6);
  var tDD = sdate.substring(6, 8);
  if (kind == "A") {
    var tHH = sdate.substring(8, 10);
    var tmm = sdate.substring(10, 12);
    var return_value = tYYYY + "/" + tMM + "/" + tDD + " " + tHH + ":" + tmm;
  }
  if (kind == "B") {
    var return_value = tYYYY + "/" + tMM + "/" + tDD;
  }
  return return_value;
};

///////////////////////////////////////////// S U B M I S S I O N    E V E N T /////////////////////////////////////////

scwin.sbm_RetrieveInoutIntendList_submitdone = function (e) {
  if (ds_RetrieveInoutIntendList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
  totalRows.setValue(ds_RetrieveInoutIntendList.getRowCount());
  gr_selfInoutList.setFocusedCell(0, "ioClsCd", true);
  ds_RetrieveInoutIntendList.setRowPosition(0);
};
scwin.sbm_RetrieveInoutIntendEquipmentList_submitdone = async function (e) {
  if (ds_RetrieveInoutIntendEquipment.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, "[투입예정차량정보]" + MSG_CM_ERR_003);
  }
  totalRows2.setValue(ds_RetrieveInoutIntendEquipment.getRowCount());
};

///////////////////////////////////////////// C O M P O N E N T   E V E N T /////////////////////////////////////////

scwin.gr_selfInoutList_oncellclick = async function (rowIndex, columnIndex, columnId) {
  await scwin.f_InoutIntendEquipmentList(rowIndex);
  scwin.f_setUnderDraw(rowIndex);
};

// scwin.ds_RetrieveInoutIntendList_onrowpositionchange = function (info) {
//     debugger;
//     scwin.f_InoutIntendEquipmentList(info.newRowIndex);
//     scwin.f_setUnderDraw(info.newRowIndex);
// };

///////////////////////////////////////////// U D C   E V E N T /////////////////////////////////////////

scwin.udc_comCodeClnt_onblurCodeEvent = function (e) {
  if (ed_retrieveClntNo.getValue() != "") {
    scwin.f_openCommonPopUp(1, ed_retrieveClntNo.getValue().trim(), ed_retrieveClntNm.getValue().trim(), 'T', 'T');
  }
};
scwin.udc_comCodeReqMcht_onblurCodeEvent = function (e) {
  if (ed_reqMchtCd.getValue() != "") {
    scwin.f_openCommonPopUp(2, ed_reqMchtCd.getValue().trim(), ed_reqMchtNm.getValue().trim(), 'T', 'T');
  }
};
scwin.udc_comCodeEmp_onblurCodeEvent = function (e) {
  if (ed_empNo.getValue() != "") {
    scwin.f_openCommonPopUp(3, ed_empNo.getValue().trim(), ed_empNm.getValue().trim(), 'T', 'T');
  }
};
scwin.udc_comCodeVss_onblurCodeEvent = function (e) {
  if (ed_vsslCd.getValue() != "") {
    scwin.f_openCommonPopUp(4, ed_vsslCd.getValue().trim(), ed_vsslNm.getValue().trim(), 'T', 'T');
  }
};
scwin.udc_retBiz_onblurCodeEvent = function (e) {
  if (ed_retBizNo.getValue() != "") {
    scwin.f_openCommonPopUp(5, ed_retBizNo.getValue().trim(), ed_retBizNm.getValue().trim(), 'T', 'T');
  }
};
scwin.udc_comCodeClnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_retrieveClntNm, ed_retrieveClntNo, 1, false);
};

//작업장 코드
scwin.udc_comCodeClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_retrieveClntNo.getValue(), ed_retrieveClntNm.getValue(), 'F', 'T');
};
scwin.udc_comCodeReqMcht_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_reqMchtNm, ed_reqMchtCd, 2, false);
};

//요청 거래처
scwin.udc_comCodeReqMcht_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_reqMchtCd.getValue(), ed_reqMchtNm.getValue(), 'F', 'T');
};
scwin.udc_comCodeEmp_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_empNm, ed_empNo, 3, false);
};

//품명
scwin.udc_comCodeEmp_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_empNo.getValue(), ed_empNm.getValue(), 'F', 'T');
};
scwin.udc_comCodeVss_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_vsslNm, ed_vsslCd, 4, false);
};

//선박명
scwin.udc_comCodeVss_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_vsslCd.getValue(), ed_vsslNm.getValue(), 'F', 'T');
};
scwin.udc_retBiz_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_retBizNm, ed_retBizNo, 5, false);
};

//협력업체
scwin.udc_retBiz_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_retBizNo.getValue(), ed_retBizNm.getValue(), 'F', 'T');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입출고 구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_acb_srchCode1',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',displayMode:'value delim label',mandatory:'true',title:'입출고 구분'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_retrieveClntNo',objTypeCode:'Data',objTypeName:'Data',mandatoryCode:'true',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',nameId:'ed_retrieveClntNm',id:'udc_comCodeClnt','ev:onclickEvent':'scwin.udc_comCodeClnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeClnt_onblurCodeEvent',selectID:'retrieveWrkPlInfo',refDataCollection:'dma_RetrieveInoutIntendCondition',validTitle:'작업장코드','ev:onviewchangeNameEvent':'scwin.udc_comCodeClnt_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입출고예정',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_srchFromDate',mandatoryFrom:'true',mandatoryTo:'true',edToId:'ed_srchToDate',titleFrom:'입출고 요청기간 시작일자',titleTo:'입출고 요청기간 종료일자'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입 구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_acb_srchCode2',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',displayMode:'value delim label'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청 거래처',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',objTypeName:'Data',objTypeCode:'Data',codeId:'ed_reqMchtCd',nameId:'ed_reqMchtNm',id:'udc_comCodeReqMcht',maxlengthCode:'7',maxlengthName:'20','ev:onclickEvent':'scwin.udc_comCodeReqMcht_onclickEvent',selectID:'retrieveClntInfo',refDataCollection:'dma_RetrieveInoutIntendCondition',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9','ev:onviewchangeNameEvent':'scwin.udc_comCodeReqMcht_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_comCodeReqMcht_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_empNo',nameId:'ed_empNm',id:'udc_comCodeEmp',objTypeCode:'Data',objTypeName:'Data',maxlengthCode:'8',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_comCodeEmp_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeEmp_onblurCodeEvent',selectID:'retrieveCommInfo',refDataCollection:'dma_RetrieveInoutIntendCondition','ev:onviewchangeNameEvent':'scwin.udc_comCodeEmp_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_ordNo',style:'',maxlength:'13',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자사/타사구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_acb_srchCode3',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',displayMode:'value delim label'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_retBizNo',maxlengthCode:'7',objTypeName:'data',objTypeCode:'data',maxlengthName:'20',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',nameId:'ed_retBizNm',id:'udc_retBiz','ev:onclickEvent':'scwin.udc_retBiz_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retBiz_onblurCodeEvent',selectID:'retrieveBuyClntList',refDataCollection:'dma_RetrieveInoutIntendCondition','ev:onviewchangeNameEvent':'scwin.udc_retBiz_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박명',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_vsslCd',nameId:'ed_vsslNm',id:'udc_comCodeVss',maxlengthName:'20',maxlengthCode:'7',objTypeName:'data',objTypeCode:'data','ev:onclickEvent':'scwin.udc_comCodeVss_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeVss_onblurCodeEvent',selectID:'retrieveVsslCdInfo',refDataCollection:'dma_RetrieveInoutIntendCondition',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9','ev:onviewchangeNameEvent':'scwin.udc_comCodeVss_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관련번호(B/L등)',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_otherNo',style:'',maxlength:'20',objType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_qeryList'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'입출력 예정 정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_RetrieveInoutIntendList',id:'gr_selfInoutList',style:'',visibleRowNum:'7',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_selfInoutList_oncellclick',readOnly:'true',fixedColumn:'4',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'구분',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'품명',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'요청화주명',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'I/O',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'예정일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'예정시간',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'예정물량',width:'370',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'실적물량',width:'240',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column80',value:'작업지시번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column76',value:'오더번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column72',value:'관련번호',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ioClsCd',inputType:'',width:'80',textAlign:'center',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'입고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'출고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'comm',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNm',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'text',width:'80',textAlign:'center',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'출고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'입고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'ioIntendDt',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ioIntendHh',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',width:'100',dataType:'number',displayFormat:'#,##0.000',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cbm',inputType:'text',width:'100',dataType:'number',displayFormat:'#,##0.000',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsQty',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rsltsWt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rsltsCbm',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'transWrkIndictNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'odrNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'retNo',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox wfix',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'odrNo',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관련번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'rtnNo',label:'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'vsslNm',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'portcnt',label:'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'dptWrkPlNm',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'arvWrkPlNm',label:'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청화주',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'reqClntMgntNm',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실화주',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'realClntMgntNm',label:'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발예정일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'wrkStDt',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착예정일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'wrkEndDt',label:'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'특기사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'rmk',label:'',ref:'',style:'height: 60px;overflow: auto;',userData2:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'투입 예정 차량 정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_RetrieveInoutIntendEquipment',id:'gr_selfInoutList2',style:'',visibleRowNum:'4',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'협력업체',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'차종',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'대수',width:'80'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'eqBizNm',inputType:'text',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCarNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'select',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vechlCnt',inputType:'text',textAlign:'center',width:'80'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]})