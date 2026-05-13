/*amd /ui/ds/op/wrkrslts/stvwrkrslts/op_306_01_01b.xml 98804 a6f29bfef04523cbdff4957b66c36d06009fb08feb753270a5aca37080860cca */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_DailyWorkVolumePlan',saveRemovedData:'true','ev:ondataload':'scwin.ds_DailyWorkVolumePlan_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'holdNo',name:'H#',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlanQty',name:'수량',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'wrkPlanWt',name:'중량',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'wrkPlanCbm',name:'CBM',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'cnt',name:'건수',dataType:'bigDecimal'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_StevedoringVolumeResults',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdNo',name:'H#',dataType:'text'}},{T:1,N:'w2:column',A:{id:'volSeq',name:'물량순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrBulkClsCd',name:'컨테이너벌크구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkQty',name:'작업실적_수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkWt',name:'작업실적_중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkCbm',name:'작업실적_CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPlanQty',name:'작업계획수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPlanWt',name:'작업계획중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPlanCbm',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'시작_일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'시작_시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd1',name:'작업 단계1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd2',name:'작업 단계2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd3',name:'작업 단계3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd4',name:'작업 단계4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm3',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm4',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'date'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ShiftStevedoringVolumeResults',saveRemovedData:'true','ev:ondataload':'scwin.ds_ShiftStevedoringVolumeResults_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdNo',name:'H#',dataType:'text'}},{T:1,N:'w2:column',A:{id:'volSeq',name:'물량순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrBulkClsCd',name:'CNTR/BILK 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkQty',name:'수량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkWt',name:'중량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkCbm',name:'CBM',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkPlanQty',name:'작업계획수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPlanWt',name:'작업계획중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPlanCbm',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'시작_일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'시작_시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:' 종료_일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'종료_시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd1',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd2',name:'작업단계코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd3',name:'작업단계코드3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd4',name:'작업단계코드4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm3',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm4',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'date'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shiftClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stvWrkIndictNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rmk',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wkrStp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_carryingVesselBasisInfo',saveRemovedData:'true','ev:ondataload':'scwin.ds_carryingVesselBasisInfo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoNm',name:'선사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repKcg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierCd',name:'부두코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprtportDtm',name:'출항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'freeTradRgnYn',name:'자유무역지역여부',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'cvsslCompleteYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslCompleteDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslCompleteTm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperWrkPlCd',name:'상위작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alngpierDt',name:'접안일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alngpierHh',name:'접안시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offpierDt',name:'이안일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offpierHh',name:'이안시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dchrDropRgn',name:'양적하지',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_DailyCarryingVesselWorkPlanBasisInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'SHIFT구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ealyAtdYn',name:'조기출근여부',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'extdYn',name:'연장여부',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'cvsslShiftingCd',name:'본선SHIFTING코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictKndCd',name:'작업지시종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeProcYn',name:'완료처리여부',dataType:'bigDecimal'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_HoldGoodsEachUnitWeight',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'holdNo',name:'HOLD번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goodsCd',name:'품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitWt',name:'',dataType:'bigDecimal'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_wrkStp',action:'/cm.zz.RetrieveComboCMD.do?sysCd=WrkStpEBC&queryId=retreiveWrkStpL4',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_wkrStp","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_carryingVesselBasisInfo',action:'/di.ds.tp.dongbusteel.SendDongbusteelStevedoringInfo.do',method:'post',mediatype:'application/json',ref:'data:json,ds_carryingVesselBasisInfo',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveStevedoringVolumeResults',action:'/ds.op.wrkrslts.stvwrkrslts.RetrieveStevedoringVolumeResultsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_carryingVesselBasisInfo","key":"OUT_DS1"},{"id":"ds_DailyCarryingVesselWorkPlanBasisInfo","key":"OUT_DS2"},{"id":"ds_StevedoringVolumeResults","key":"OUT_DS3"},{"id":"ds_ShiftStevedoringVolumeResults","key":"OUT_DS4"},{"id":"ds_HoldGoodsEachUnitWeight","key":"OUT_DS5"},{"id":"ds_DailyWorkVolumePlan","key":"OUT_DS6"}]',target:'data:json,[{"id":"ds_carryingVesselBasisInfo","key":"OUT_DS1"},{"id":"ds_DailyCarryingVesselWorkPlanBasisInfo","key":"OUT_DS2"},{"id":"ds_StevedoringVolumeResults","key":"OUT_DS3"},{"id":"ds_ShiftStevedoringVolumeResults","key":"OUT_DS4"},{"id":"ds_HoldGoodsEachUnitWeight","key":"OUT_DS5"},{"id":"ds_DailyWorkVolumePlan","key":"OUT_DS6"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveStevedoringVolumeResults_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.stvwrkrslts.SaveStevedoringVolumeResultsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_StevedoringVolumeResults","key":"IN_DS1"},{"id":"ds_ShiftStevedoringVolumeResults","key":"IN_DS2"},{"id":"dma_condition","key":"IN_DS3"},{"id":"ds_carryingVesselBasisInfo","key":"IN_DS4"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수 , hidden 컴포넌트 선언
//-------------------------------------------------------------------------
scwin.hcommCd = "";
scwin.hcommNm = "";
scwin.hcntrBulkClsCd = "";
scwin.sCurrDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); // 회원 점소 데이터
scwin.loUpperLobranNm = $c.data.getMemInfo($p, "loUpperLobranNm");
scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자구분코드(02:협력업체(운송))

scwin.gr_shift_oldData = "";
scwin.gr_Steve_oldData = "";
scwin.eventCnt = 0;

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "SD060",
    compID: "acb_expClsCd"
  },
  // 셀렉트
  {
    grpCd: "OP117",
    compID: "acb_shiftCd"
  },
  // 셀렉트
  {
    grpCd: "OP190",
    compID: "gr_ShiftStevedoringVolumeResults:cntrBulkClsCd"
  } // 셀렉트
  ];
  $c.data.setCommonCode($p, codeOptions);
  ed_cvsslMgntNo.focus();
  ica_wrkDt.setValue(scwin.sCurrDate);
  $c.sbm.execute($p, sbm_wrkStp);
  if (scwin.loUpperLobranCd == "3AA") {
    btn_steel.setDisabled(false);
  } else {
    btn_steel.setDisabled(true);
    return;
  }

  // scwin.f_DivHoldEachWorkPlanList();
};

//-------------------------------------------------------------------------
// 대문자 변환
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 제철 인터 페이스 f_SendSteelInfo
//-------------------------------------------------------------------------
scwin.btn_steel_onClick = async function (e) {
  if (!(await $c.win.confirm($p, "본선/물량/중기 정보를 제철에게 전송합니다.<br>당진평택지사 직원이 아니라면 취소를 눌러주세요."))) {
    return;
  }
  if (ds_carryingVesselBasisInfo.getCellData(0, "cvsslMgntNo") == "") {
    $c.win.alert($p, "본선정보가 없습니다. <br> 조회 후 전송해 주세요");
    return;
  }
  ds_carryingVesselBasisInfo.setCellData(0, "cvsslMgntNo", ds_carryingVesselBasisInfo.getCellData(0, "cvsslMgntNo"));
  $c.sbm.execute($p, sbm_carryingVesselBasisInfo);
  $c.win.alert($p, "정보가 전송되었습니다.");
};

//-------------------------------------------------------------------------
// 조회
//------------------------------------------------------------------------- 
scwin.btn_retrieveButton_onClick = async function (e) {
  // 검색조건 필수 입력 체크
  if (!(await $c.gus.cfValidate($p, [ed_cvsslMgntNo, ica_wrkDt]))) {
    return;
  }

  // $c.sbm.execute(sbm_RetrieveStevedoringVolumeResults);

  dma_condition.set("cvsslMgntNo", ed_cvsslMgntNo.getValue());
  dma_condition.set("impExpClsCd", acb_expClsCd.getValue());
  dma_condition.set("wrkDt", ica_wrkDt.getValue());
  dma_condition.set("shiftClsCd", acb_shiftCd.getValue());
  dma_condition.set("rmk", txa_rmk.getValue());
  $c.sbm.execute($p, sbm_RetrieveStevedoringVolumeResults);
};

///-------------------------------------------------------------------------
// 저장
//------------------------------------------------------------------------- 
scwin.btn_save_onClick = async function (e) {
  if (!$c.gus.cfValidate($p, [gr_StevedoringVolumeResults, gr_ShiftStevedoringVolumeResults])) {
    return;
  }
  if (ds_StevedoringVolumeResults.getModifiedIndex().length == 0 && ds_ShiftStevedoringVolumeResults.getModifiedIndex().length == 0) {
    if (txa_rmk.getValue() == ds_StevedoringVolumeResults.getCellData(0, "rmk")) {
      $c.win.alert($p, "변경된 사항이 없습니다.");
      return;
    }
  }
  let numbercheck = "";
  for (i = 0; i < ds_StevedoringVolumeResults.getTotalRow(); i++) {
    numbercheck = Number(ds_StevedoringVolumeResults.getCellData(i, "holdNo"));
    // 해당 분법 먹는지 체크 필요
    if (typeof numbercheck != "number") {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_007, i + 1 + "번째 홀드번호"));
      return;
    }
    if (ds_StevedoringVolumeResults.getCellData(i, "wrkQty") + ds_StevedoringVolumeResults.getCellData(i, "wrkWt") + ds_StevedoringVolumeResults.getCellData(i, "wrkCbm") == 0) {
      alert("하역실적 물량중 수량,중량,CBM중 하나는 0보다 커야 합니다.");
      ds_StevedoringVolumeResults.setRowPosition(i);
      gr_StevedoringVolumeResults.setFocusedCell(i, "wrkQty");
      return;
    }
    if (Number(ds_StevedoringVolumeResults.getCellData(i, "wrkStHh").substring(0, 2)) > 23) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_043, "시작시간")); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      gr_StevedoringVolumeResults.setFocusedCell(i, "wrkStHh");
      return;
    }
    if (Number(ds_StevedoringVolumeResults.getCellData(i, "wrkStHh").substring(2, 2)) > 59) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_043, "시작시간")); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      gr_StevedoringVolumeResults.setFocusedCell(i, "wrkStHh");
      return;
    }
    if (ds_StevedoringVolumeResults.getCellData(i, "wrkStHh").trim().length != 4) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_055, "시작시간에 대해 시간형식"));
      gr_StevedoringVolumeResults.setFocusedCell(i, "wrkStHh");
      return false;
    }
    if (Number(ds_StevedoringVolumeResults.getCellData(i, "wrkEndHh").substring(0, 2)) > 24) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_043, "종료시간")); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      gr_StevedoringVolumeResults.setFocusedCell(i, "wrkEndHh");
      return;
    }
    if (ds_StevedoringVolumeResults.getCellData(i, "wrkEndHh").substring(0, 2) == "00" && ds_StevedoringVolumeResults.getCellData(i, "wrkEndHh").substring(2, 2) == "00") {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_043, "종료시간")); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      gr_StevedoringVolumeResults.setFocusedCell(i, "wrkEndHh");
      return;
    }
    if (ds_StevedoringVolumeResults.getCellData(i, "wrkEndHh").substring(0, 2) == "24" && Number(ds_StevedoringVolumeResults.getCellData(i, "wrkEndHh").substring(2, 2)) > 00) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_043, "종료시간")); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      gr_StevedoringVolumeResults.setFocusedCell(i, "wrkEndHh");
      return;
    }
    if (Number(ds_StevedoringVolumeResults.getCellData(i, "wrkEndHh").substring(2, 2)) > 59) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_043, "종료시간")); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      gr_StevedoringVolumeResults.setFocusedCell(i, "wrkEndHh");
      gr_StevedoringVolumeResults.focus();
      return;
    }
    if (ds_StevedoringVolumeResults.getCellData(i, "wrkEndHh").trim().length != 4) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_055, "종료시간에 대해  시간형식"));
      gr_StevedoringVolumeResults.setFocusedCell(i, "wrkEndHh");
      return false;
    }
    if (ds_StevedoringVolumeResults.getCellData(i, "wrkStDt") + ds_StevedoringVolumeResults.getCellData(i, "wrkStHh") > ds_StevedoringVolumeResults.getCellData(i, "wrkEndDt") + ds_StevedoringVolumeResults.getCellData(i, "wrkEndHh")) {
      $c.win.alert($p, $c.data.getMessage($p, "시작일시가 종료일시 이전이어야 합니다."));
      gr_StevedoringVolumeResults.setFocusedCell(i, "wrkStDt");
      return;
    }
    if (ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd3") != "" && ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd2") == "") {
      $c.win.alert($p, "작업단계2가 없습니다.");
      gr_StevedoringVolumeResults.setFocusedCell(i, "wrkStpCd2");
      return;
    }
    if (ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd4") != "" && ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd2") == "") {
      $c.win.alert($p, "작업단계2가 없습니다.");
      gr_StevedoringVolumeResults.setFocusedCell(i, "wrkStpCd2");
      return;
    }
    if (ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd4") != "" && ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd3") == "") {
      $c.win.alert($p, "작업단계3이 없습니다.");
      gr_StevedoringVolumeResults.setFocusedCell(i, "wrkStpCd3");
      return;
    }
    if (ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd1") == ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd2") || ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd1") == ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd3") || ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd1") == ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd4")) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_032, "작업단계"));
      return false;
    }
    if (ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd2") != "") {
      if (ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd2") == ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd3") || ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd2") == ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd4")) {
        $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_032, "작업단계"));
        return false;
      }
    }
    if (ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd3") != "" && ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd3") == ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd4")) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_032, "작업단계"));
      return false;
    }
  }
  for (let i = 0; i < ds_ShiftStevedoringVolumeResults.getTotalRow(); i++) {
    if (ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkQty") + ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkWt") + ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkCbm") == 0) {
      $c.win.alert($p, "Shifting실적 물량중 수량,중량,CBM중 하나는 0보다 커야 합니다.");
      gr_ShiftStevedoringVolumeResults.setFocusedCell(i, "wrkQty");
      return;
    }
    if (ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkStHh").trim().length != 4) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_055, "시간형식"));
      gr_ShiftStevedoringVolumeResults.setFocusedCell(i, "wrkStHh");
      return false;
    }
    if (Number(ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkStHh").substring(0, 2)) > 23) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_043, "시작시간")); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      gr_ShiftStevedoringVolumeResults.setFocusedCell(i, "wrkStHh");
      return;
    }
    if (Number(ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkStHh").substring(2, 2)) > 59) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_043, "시작시간")); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      gr_ShiftStevedoringVolumeResults.setFocusedCell(i, "wrkStHh");
      return;
    }
    if (ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkEndHh").trim().length != 4) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_055, "시간형식"));
      gr_ShiftStevedoringVolumeResults.setFocusedCell(i, "wrkEndHh");
      return false;
    }
    if (Number(ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkEndHh").substring(0, 2)) > 24) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_043, "종료시간")); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      gr_ShiftStevedoringVolumeResults.setFocusedCell(i, "wrkEndHh");
      return;
    }
    if (ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkEndHh").substring(0, 2) == "00" && ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkEndHh").substring(2, 2) == "00") {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_043, "종료시간")); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      gr_ShiftStevedoringVolumeResults.setFocusedCell(i, "wrkEndHh");
      return;
    }
    if (ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkEndHh").substring(0, 2) == "24" && ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkEndHh").substring(2, 2) > "00") {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_043, "종료시간")); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      gr_ShiftStevedoringVolumeResults.setFocusedCell(i, "wrkEndHh");
      return;
    }
    if (Number(ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkEndHh").substring(2, 2)) > 59) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_043, "종료시간")); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      gr_ShiftStevedoringVolumeResults.setFocusedCell(i, "wrkEndHh");
      return;
    }
    if (Number(ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkStDt") + ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkStHh")) > Number(ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkEndDt") + ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkEndHh"))) {
      //cfAlertMsg(MSG_CM_ERR_039);
      $c.win.alert($p, "시작일시가 종료일시 이전이어야 합니다.");
      gr_ShiftStevedoringVolumeResults.setFocusedCell(i, "wrkStDt");
      return;
    }
  }
  for (i = 0; i < ds_StevedoringVolumeResults.getTotalRow(); i++) {
    if ((ds_StevedoringVolumeResults.getRowStatus(i) == "U" || ds_StevedoringVolumeResults.getRowStatus(i) == "C") && ds_StevedoringVolumeResults.getCellData(i, "wrkStDt") < dma_condition.get("wrkDt")) {
      $c.win.alert($p, i + 1 + "번째 하역실적물량 데이터의 시작일자는 작업일자 이후이어야 합니다.");
      return false;
    }
  }
  for (i = 0; i < ds_ShiftStevedoringVolumeResults.getTotalRow(); i++) {
    if ((ds_ShiftStevedoringVolumeResults.getRowStatus(i) == "U" || ds_ShiftStevedoringVolumeResults.getRowStatus(i) == "C") && ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkStDt") < dma_condition.get("wrkDt")) {
      $c.win.alert($p, i + 1 + "번째 Shifting실적물량 데이터의 시작일자는 작업일자 이후이어야 합니다.");
      return false;
    }
  }
  for (i = 0; i < ds_StevedoringVolumeResults.getTotalRow(); i++) {
    for (j = 0; j < ds_StevedoringVolumeResults.getTotalRow(); j++) {
      if (i == j || j < i) {
        continue;
      } else {
        if (ds_StevedoringVolumeResults.getCellData(i, "holdNo") == ds_StevedoringVolumeResults.getCellData(j, "holdNo") && ds_StevedoringVolumeResults.getCellData(i, "commCd") == ds_StevedoringVolumeResults.getCellData(j, "commCd")) {
          if (ds_StevedoringVolumeResults.getCellData(i, "wrkEndDt") + ds_StevedoringVolumeResults.getCellData(i, "wrkEndHh") > ds_StevedoringVolumeResults.getCellData(j, "wrkStDt") + ds_StevedoringVolumeResults.getCellData(j, "wrkStHh")) {
            $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_057, j + 1 + "번째 하역실적물량 데이타에서 시작시간", +(i + 1) + "번째 종료시간(날짜)"));
            return false;
          }
        }
      }
    }
  }
  for (i = 0; i < ds_ShiftStevedoringVolumeResults.getTotalRow(); i++) {
    for (j = 0; j < ds_ShiftStevedoringVolumeResults.getTotalRow(); j++) {
      if (i == j || j < i) {
        continue;
      } else {
        if (ds_ShiftStevedoringVolumeResults.getCellData(i, "holdNo") == ds_ShiftStevedoringVolumeResults.getCellData(j, "holdNo") && ds_ShiftStevedoringVolumeResults.getCellData(i, "commCd") == ds_ShiftStevedoringVolumeResults.getCellData(j, "commCd")) {
          if (ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkEndDt") + ds_ShiftStevedoringVolumeResults.getCellData(i, "wrkEndHh") > ds_ShiftStevedoringVolumeResults.getCellData(j, "wrkStDt") + ds_ShiftStevedoringVolumeResults.getCellData(j, "wrkStHh")) {
            $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_057, j + 1 + "번째 Shifting실적물량 데이타에서 시작시간", +(i + 1) + "번째 종료시간(날짜)"));
            return false;
          }
        }
      }
    }
  }
  for (i = 0; i < ds_StevedoringVolumeResults.getTotalRow(); i++) {
    if (ds_StevedoringVolumeResults.getCellData(i, "commNm") == "20E" || ds_StevedoringVolumeResults.getCellData(i, "commNm") == "20F" || ds_StevedoringVolumeResults.getCellData(i, "commNm") == "40E" || ds_StevedoringVolumeResults.getCellData(i, "commNm") == "40F" || ds_StevedoringVolumeResults.getCellData(i, "commNm") == "45E" || ds_StevedoringVolumeResults.getCellData(i, "commNm") == "45F") {
      if (ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd1") != "0006" && ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd2") != "0006" && ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd3") != "0006" && ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd4") != "0006") {
        $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_007, i + 1 + "번째 품목이 컨테이너입니다.<br>품목이 컨테이너인 경우에는 반드시 선내 작업단계"));
        return false;
      }
    }
  }
  for (i = 0; i < ds_StevedoringVolumeResults.getTotalRow(); i++) {
    ds_StevedoringVolumeResults.setCellData(i, "rmk", txa_rmk.getValue());
  }
  let count = 0;
  if (await $c.win.confirm($p, "저장하시겠습니까?")) {
    for (i = 0; i < ds_StevedoringVolumeResults.getTotalRow(); i++) {
      if (ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd1") != "" && ds_StevedoringVolumeResults.getRowStatus(i) == "U" || ds_StevedoringVolumeResults.getRowStatus(i) == "D") {
        count = 1;
        break;
      }
    }
    for (i = 0; i < ds_StevedoringVolumeResults.getTotalRow(); i++) {
      if (ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd1") == "") {
        // ds_StevedoringVolumeResults.modifyRowStatus(i, "C");
      }
    }

    // sysstatus=0인것도 update상태로 넘기기(통합매출때문에) 
    if (count > 0) {
      for (i = 0; i < ds_StevedoringVolumeResults.getTotalRow(); i++) {
        if (ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd1") != "" && (ds_StevedoringVolumeResults.getRowStatus(i) == "U" || ds_StevedoringVolumeResults.getRowStatus(i) == "R")) {
          //update
          ds_StevedoringVolumeResults.setCellData(i, "commNm", ds_StevedoringVolumeResults.getCellData(i, "commNm") + " ");
        }
      }
    }
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 본선관리번호 팝업 클릭시
//-------------------------------------------------------------------------
scwin.btn_cvsslMgntNo_onClick = async function (e) {
  //팝업 화면에 데이터 보내는 방법 1. json형태로 팝업화면에서 getParameter로 받기
  let args = new Array();
  args[0] = ed_cvsslMgntNo.getValue(); //본선관리번호
  args[1] = ""; //수출입구분코드

  // let args = {
  //     cvsslMgntNo: ed_cvsslMgntNo.getValue()		// 화면에서의 ??? Code Element의	Value
  // };

  // 팝업 옵션 설정
  let options = {
    id: "taxPop",
    popupName: "본선관리번호검색팝업",
    width: 1100,
    height: 650
  };

  //상세화면 호출
  let rtn = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", options, args);
  $c.gus.cfSetReturnValue($p, rtn, ed_cvsslMgntNo);

  //rtnValues[0];  본선관리번호
  //rtnValues[1];  선박코드
  //rtnValues[2];  선박명
  //rtnValues[3];  마감일자
  //rtnValues[4];  마감시간
  //rtnValues[5];  도착(입항)일자
  //rtnValues[6];  도착(입항)시간
  //rtnValues[7];  출발(출항)일자
  //rtnValues[8];  출발(출항)시간
  //rtnValues[9];  선사항차
  //rtnValues[10]; 항로
  //rtnValues[11]; 항구코드
  //rtnValues[12]; 부두코드
  //rtnValues[13]; 부두코드명
};

//-------------------------------------------------------------------------
// 본선관리번호 kill focus
//-------------------------------------------------------------------------
scwin.ed_cvsslMgntNo_onBlur = async function (e) {
  if (ed_cvsslMgntNo.getValue() == "") {
    return;
  }

  //팝업 화면에 데이터 보내는 방법 1. json형태로 팝업화면에서 getParameter로 받기
  // let args = {
  //     cvsslMgntNo: ed_cvsslMgntNo.getValue()		// 화면에서의 ??? Code Element의	Value
  // };

  let args = new Array();
  args[0] = ed_cvsslMgntNo.getValue(); //본선관리번호
  args[1] = ""; //수출입구분코드

  // 팝업 옵션 설정
  let options = {
    id: "taxPop",
    popupName: "본선관리번호검색팝업",
    width: 1100,
    height: 650
  };

  //상세화면 호출
  let rtn = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", options, args);
  $c.gus.cfSetReturnValue($p, rtn, ed_cvsslMgntNo);

  //rtnValues[0];  본선관리번호
  //rtnValues[1];  선박코드
  //rtnValues[2];  선박명
  //rtnValues[3];  마감일자
  //rtnValues[4];  마감시간
  //rtnValues[5];  도착(입항)일자
  //rtnValues[6];  도착(입항)시간
  //rtnValues[7];  출발(출항)일자
  //rtnValues[8];  출발(출항)시간
  //rtnValues[9];  선사항차
  //rtnValues[10]; 항로
  //rtnValues[11]; 항구코드
  //rtnValues[12]; 부두코드
  //rtnValues[13]; 부두코드명
};

//-------------------------------------------------------------------------
// 본선작업계획상세조회 테이블 생성
//-------------------------------------------------------------------------
scwin.f_DivHoldEachWorkPlanList = function () {
  ed_vsslNm.setValue(ds_carryingVesselBasisInfo.getCellData(0, "vsslNm"));
  ed_lineNm.setValue(ds_carryingVesselBasisInfo.getCellData(0, "lineNm"));
  ed_shpCoNm.setValue(ds_carryingVesselBasisInfo.getCellData(0, "shpCoNm"));
  ed_portcnt.setValue(ds_carryingVesselBasisInfo.getCellData(0, "portcnt"));
  ed_repKcg.setValue(ds_carryingVesselBasisInfo.getCellData(0, "repKcg"));
  ed_expClsCd.setValue(acb_expClsCd.getText(true));
  ed_wrkPlNm.setValue(ds_carryingVesselBasisInfo.getCellData(0, "wrkPlNm"));
  ed_arrvlportDtm.setValue(ds_carryingVesselBasisInfo.getCellData(0, "arrvlportDtm"));
  ed_deprtportDtm.setValue(ds_carryingVesselBasisInfo.getCellData(0, "deprtportDtm"));
  ed_cvsslCompleteYn.setValue(ds_carryingVesselBasisInfo.getCellData(0, "cvsslCompleteYn"));
  if (ed_cvsslCompleteYn.getValue() == "0") {
    ed_cvsslCompleteYn.setValue("N");
  } else {
    ed_cvsslCompleteYn.setValue("Y");
  }
  if (ds_carryingVesselBasisInfo.getCellData(0, "cvsslCompleteDt") == "") {
    ed_cvsslCompleteDt.setValue("");
  } else {
    ed_cvsslCompleteDt.setValue(ds_carryingVesselBasisInfo.getCellData(0, "cvsslCompleteDt"));
  }
  if (ds_DailyCarryingVesselWorkPlanBasisInfo.getTotalRow() == 0) {
    ed_dailyWorkPlan.setValue("NO");
  } else {
    ed_dailyWorkPlan.setValue("YES");
  }
  ed_dchrDropRgn.setValue(ds_carryingVesselBasisInfo.getCellData(0, "dchrDropRgn"));
};

//-------------------------------------------------------------------------
// 저장 성공
//-------------------------------------------------------------------------
scwin.sbm_save_submitDone = function (e) {
  $c.win.alert($p, MSG_CM_INF_001);
  scwin.btn_retrieveButton_onClick();
};

//-------------------------------------------------------------------------
// 본선 기본 정보 DataSet
//-------------------------------------------------------------------------
scwin.ds_carryingVesselBasisInfo_ondataload = function () {
  let rowCnt = ds_carryingVesselBasisInfo.getTotalRow();
  // 여긴 데이터를 찾기가 복잡해서 더미로 넣고 추후에 삭제 예정
  // ds_carryingVesselBasisInfo.setCellData(0, "cvsslCompleteYn", "0");

  if (rowCnt > 0) {
    if (ds_carryingVesselBasisInfo.getCellData(0, "cvsslCompleteYn") == "0") {
      if (ds_carryingVesselBasisInfo.getCellData(0, "wrkPlNm") == "") {
        $c.win.alert($p, "본선스케줄에 선석정보가 존재하지 않습니다.<br>본선스케줄을 수정하시고 실적등록을 해 주시기 바랍니다.");
        $c.gus.cfDisableBtn($p, [btn_save, udc_ShiftStevedoringVolumeResults_bottom, udc_StevedoringVolumeResults_bottom]);
        gr_StevedoringVolumeResults.setGridReadOnly(true);
        gr_ShiftStevedoringVolumeResults.setGridReadOnly(true);
        txa_rmk.setReadOnly(true);
      } else {
        // $c.gus.cfDisableBtn([btn_save, udc_ShiftStevedoringVolumeResults_bottom, udc_StevedoringVolumeResults_bottom]);
        $c.gus.cfEnableObjects($p, [btn_save, udc_ShiftStevedoringVolumeResults_bottom, udc_StevedoringVolumeResults_bottom]);
        gr_StevedoringVolumeResults.setGridReadOnly(false);
        gr_ShiftStevedoringVolumeResults.setGridReadOnly(false);
        txa_rmk.setReadOnly(false);
      }
    } else {
      $c.gus.cfDisableBtn($p, [btn_save, udc_ShiftStevedoringVolumeResults_bottom, udc_StevedoringVolumeResults_bottom]);
      gr_StevedoringVolumeResults.setGridReadOnly(true);
      gr_ShiftStevedoringVolumeResults.setGridReadOnly(true);
      txa_rmk.setReadOnly(true);
    }
  }
  scwin.f_DivHoldEachWorkPlanList();
};

//-------------------------------------------------------------------------
// 본선 기본 정보 DataSet
//-------------------------------------------------------------------------
scwin.ds_DailyCarryingVesselWorkPlanBasisInfo_ondataload = async function () {
  let rowCnt = ds_DailyCarryingVesselWorkPlanBasisInfo.getTotalRow();
  if (rowCnt == 0) {
    await $c.win.alert($p, "하역일일작업계획이 수립되지 않았습니다. 하역일일작업계획을 먼저 수립해 주십시오.");
    $c.gus.cfDisableBtn($p, [btn_save, udc_ShiftStevedoringVolumeResults_bottom, udc_StevedoringVolumeResults_bottom]);
    gr_StevedoringVolumeResults.setGridReadOnly(true);
    gr_ShiftStevedoringVolumeResults.setGridReadOnly(true);
    txa_rmk.setReadOnly(true);
    return;
  } else {
    if (ds_carryingVesselBasisInfo.getCellData(0, "cvsslCompleteYn") == "0") {
      if (ds_carryingVesselBasisInfo.getCellData(0, "wrkPlNm") == "") {
        $c.gus.cfDisableBtn($p, [btn_save, udc_ShiftStevedoringVolumeResults_bottom, udc_StevedoringVolumeResults_bottom]);
        gr_StevedoringVolumeResults.setGridReadOnly(true);
        gr_ShiftStevedoringVolumeResults.setGridReadOnly(true);
        txa_rmk.setReadOnly(true);
      } else {
        $c.gus.cfEnableObjects($p, [btn_save, udc_ShiftStevedoringVolumeResults_bottom, udc_StevedoringVolumeResults_bottom]);
        gr_StevedoringVolumeResults.setGridReadOnly(false);
        gr_ShiftStevedoringVolumeResults.setGridReadOnly(false);
        txa_rmk.setReadOnly(false);
      }
    } else {
      $c.gus.cfDisableBtn($p, [btn_save, udc_ShiftStevedoringVolumeResults_bottom, udc_StevedoringVolumeResults_bottom]);
      gr_StevedoringVolumeResults.setGridReadOnly(true);
      gr_ShiftStevedoringVolumeResults.setGridReadOnly(true);
      txa_rmk.setReadOnly(true);
    }
  }
  scwin.f_DivHoldEachWorkPlanList();
};

//-------------------------------------------------------------------------
// 본선 기본 정보 DataSet
//-------------------------------------------------------------------------
scwin.ds_StevedoringVolumeResults_ondataload = async function () {
  let rowCnt = ds_StevedoringVolumeResults.getTotalRow();
  spa_totalRows2.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다	
    return;
  }
  if (ds_StevedoringVolumeResults.getCellData(0, "wrkStpCd1") == "") {
    await $c.win.alert($p, "등록된 하역실적물량이 없습니다.");
    return;
  }
  if (rowCnt > 0) {
    for (i = 0; i < rowCnt; i++) {
      for (j = 0; j < ds_wkrStp.getTotalRow(); j++) {
        if (ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd1") == ds_wkrStp.getCellData(j, "wrkStpCd")) {
          ds_StevedoringVolumeResults.setCellData(i, "wrkStpNm1", ds_wkrStp.getCellData(j, "wrkStpNm"));
        } else if (ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd2") == ds_wkrStp.getCellData(j, "wrkStpCd")) {
          ds_StevedoringVolumeResults.setCellData(i, "wrkStpNm2", ds_wkrStp.getCellData(j, "wrkStpNm"));
        } else if (ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd3") == ds_wkrStp.getCellData(j, "wrkStpCd")) {
          ds_StevedoringVolumeResults.setCellData(i, "wrkStpNm3", ds_wkrStp.getCellData(j, "wrkStpNm"));
        } else if (ds_StevedoringVolumeResults.getCellData(i, "wrkStpCd4") == ds_wkrStp.getCellData(j, "wrkStpCd")) {
          ds_StevedoringVolumeResults.setCellData(i, "wrkStpNm4", ds_wkrStp.getCellData(j, "wrkStpNm"));
        }
      }
      ds_StevedoringVolumeResults.modifyRowStatus(i, "R");
    }
    for (i = 0; i < rowCnt; i++) {
      if (ds_StevedoringVolumeResults.getCellData(i, "wrkStDt") == "") {
        ds_StevedoringVolumeResults.setCellData(i, "wrkStDt", dma_condition.get("wrkDt"));
      }
      if (ds_StevedoringVolumeResults.getCellData(i, "wrkEndDt") == "") {
        ds_StevedoringVolumeResults.setCellData(i, "wrkEndDt", dma_condition.get("wrkDt"));
      }
      if (ds_StevedoringVolumeResults.getCellData(i, "stvWrkIndictNo") == "") {
        // ds_StevedoringVolumeResults.modifyRowStatus(i, "C");
      }
    }
  }
  txa_rmk.setValue("");
  if (rowCnt > 0) {
    for (i = 0; i < ds_StevedoringVolumeResults.getTotalRow(); i++) {
      if (ds_StevedoringVolumeResults.getCellData(0, "rmk") != "") {
        txa_rmk.setValue(ds_StevedoringVolumeResults.getCellData(0, "rmk"));
      } else {
        txa_rmk.setValue("");
      }
    }
  } else {
    txa_rmk.setValue("");
  }

  // ds_StevedoringVolumeResults.ResetStatus(); 
};

//-------------------------------------------------------------------------
// 본선 기본 정보 DataSet
//-------------------------------------------------------------------------
scwin.ds_ShiftStevedoringVolumeResults_ondataload = function () {
  spa_totalRows3.setValue(ds_ShiftStevedoringVolumeResults.getTotalRow());
  let row = ds_ShiftStevedoringVolumeResults.getRowPosition();
  scwin.hcommCd = ds_ShiftStevedoringVolumeResults.getCellData(row, "commCd");
  scwin.hcommNm = ds_ShiftStevedoringVolumeResults.getCellData(row, "commNm");
};

//-------------------------------------------------------------------------
// 작업계획 물량 데이터셋 로드시
//-------------------------------------------------------------------------
scwin.ds_DailyWorkVolumePlan_ondataload = function () {
  spa_totalRows1.setValue(ds_DailyWorkVolumePlan.getTotalRow());
};

//-------------------------------------------------------------------------
// 하역실적물량 그리드 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  if (ds_StevedoringVolumeResults.getTotalRow() == 0) {
    return;
  }
  ds_StevedoringVolumeResults.insertRow();
  gr_StevedoringVolumeResults.setFocusedCell(ds_StevedoringVolumeResults.getTotalRow() - 1, 0);
  ds_StevedoringVolumeResults.setCellData(ds_StevedoringVolumeResults.getRowPosition(), "stvWrkIndictNo", ds_DailyCarryingVesselWorkPlanBasisInfo.getCellData(0, "wrkIndictNo"));
  ds_StevedoringVolumeResults.setCellData(ds_StevedoringVolumeResults.getRowPosition(), "impExpClsCd", dma_condition.get("impExpClsCd"));
  ds_StevedoringVolumeResults.setCellData(ds_StevedoringVolumeResults.getRowPosition(), "wrkStDt", dma_condition.get("wrkDt"));
  ds_StevedoringVolumeResults.setCellData(ds_StevedoringVolumeResults.getRowPosition(), "wrkEndDt", dma_condition.get("wrkDt"));
  ds_StevedoringVolumeResults.setCellData(ds_StevedoringVolumeResults.getRowPosition(), "wrkQty", Number(ds_StevedoringVolumeResults.getCellData(0, "wrkPlanQty")));
  ds_StevedoringVolumeResults.setCellData(ds_StevedoringVolumeResults.getRowPosition(), "wrkWt", Number(ds_StevedoringVolumeResults.getCellData(0, "wrkPlanWt")));
  ds_StevedoringVolumeResults.setCellData(ds_StevedoringVolumeResults.getRowPosition(), "wrkCbm", Number(ds_StevedoringVolumeResults.getCellData(0, "wrkPlanCbm")));
  if (dma_condition.get("shiftClsCd") == "D") {
    ds_StevedoringVolumeResults.setCellData(ds_StevedoringVolumeResults.getRowPosition(), "wrkStHh", "0800");
    ds_StevedoringVolumeResults.setCellData(ds_StevedoringVolumeResults.getRowPosition(), "wrkEndHh", "1700");
    ds_StevedoringVolumeResults.setCellData(ds_StevedoringVolumeResults.getRowPosition(), "wrkStpCd1", "0006");
  }
};

//-------------------------------------------------------------------------
// shift 물량 그리드 행 추가
//-------------------------------------------------------------------------
scwin.f_AddRowShift = function () {
  if (ds_StevedoringVolumeResults.getTotalRow() == 0) {
    return;
  }
  let row = ds_ShiftStevedoringVolumeResults.insertRow();
  gr_ShiftStevedoringVolumeResults.setFocusedCell(row, 0);
  ds_ShiftStevedoringVolumeResults.setCellData(row, "stvWrkIndictNo", ds_DailyCarryingVesselWorkPlanBasisInfo.getCellData(0, "wrkIndictNo"));
  ds_ShiftStevedoringVolumeResults.setCellData(row, "impExpClsCd", dma_condition.get("impExpClsCd"));
  ds_ShiftStevedoringVolumeResults.setCellData(row, "wrkStDt", dma_condition.get("wrkDt"));
  ds_ShiftStevedoringVolumeResults.setCellData(row, "wrkEndDt", dma_condition.get("wrkDt"));
};

//-------------------------------------------------------------------------
// 하역실적물량 그리드 행삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = function () {
  if (ds_StevedoringVolumeResults.getCellData(ds_StevedoringVolumeResults.getRowPosition(), "wrkStpCd1") == "") {
    ds_StevedoringVolumeResults.removeRow(ds_StevedoringVolumeResults.getRowPosition());
  } else {
    // ds_StevedoringVolumeResults.ViewDeletedRow = true;
    ds_StevedoringVolumeResults.deleteRow(ds_StevedoringVolumeResults.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// 하역실적물량 그리드 행삭제 
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onClick = function (e) {
  $c.gus.cfInitObjects($p, search_cond, null);
  dma_condition.set("wrkDt", scwin.sCurrDate);
  ica_wrkDt.setValue(scwin.sCurrDate);
};

//--------------------------------------------------------------------
// shift 그리드 품목 팝업 클릭시
//--------------------------------------------------------------------
scwin.gr_shift_onPopup = function () {
  let evNm = arguments[1] || "";
  if (evNm && $c.win.getEventList($p, gr_ShiftStevedoringVolumeResults, evNm)) {
    scwin.eventCnt++;
  }
  $p.setTimeout(function () {
    scwin.eventCnt = 0;
  }, {
    delay: 1500
  });
  let row = gr_ShiftStevedoringVolumeResults.getFocusedRowIndex();
  if (ds_ShiftStevedoringVolumeResults.getCellData(row, "cntrBulkClsCd") == "") {
    ds_ShiftStevedoringVolumeResults.setCellData(row, "cntrBulkClsCd", "C");
  }
  if (ds_ShiftStevedoringVolumeResults.getCellData(row, "cntrBulkClsCd") == "B") {
    clsCd = "B4";
  } else {
    clsCd = "C";
  }
  let code = ds_ShiftStevedoringVolumeResults.getCellData(row, "commCd"); // 화면에서의 ??? Code Element의	Value
  let name = ds_ShiftStevedoringVolumeResults.getCellData(row, "commNm"); // 화면에서의 ??? Name Element의	Value

  ds_ShiftStevedoringVolumeResults.setCellData(row, "commCd", "");
  ds_ShiftStevedoringVolumeResults.setCellData(row, "commNm", "");
  if (scwin.eventCnt == 1) {
    udc_Shift_grid.setSelectId("retrieveCommInfo");
    rtnList = udc_Shift_grid.cfCommonPopUp(scwin.udc_Shift_grid_callback // XML상의 SELECT ID	
    , code // 화면에서의 ??? Code Element의	Value
    , name // 화면에서의 ??? Name Element의	Value
    , "T" // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    , "3" // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    , "코드,명,레벨" // Title순서	
    , "80,195,50" // 보여주는 각 컬럼들의 폭	
    , "4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
    //,",,3,"+ds_ShiftStevedoringVolumeResults.NameValue(row,"cntrBulkClsCd")	//컨테이너 벌크구분을 넘김
    , ",,," + clsCd //컨테이너 벌크구분을 넘김
    , null // POP-UP뛰을때 원도우의	사용자 정의	폭
    , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
    , null // 윈도우 위치 Y좌표	
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , "F" // 전체검색허용여부	("F")
    , "품목,품목코드,품목" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
};

//--------------------------------------------------------------------
// shift 그리드 품목코드 입력후 Focus 이동시 
//--------------------------------------------------------------------
scwin.f_commCdPopup = function (row) {
  let evNm = arguments[1] || "";
  if (evNm && $c.win.getEventList($p, gr_StevedoringVolumeResults, evNm)) {
    scwin.eventCnt++;
  }
  $p.setTimeout(function () {
    scwin.eventCnt = 0;
  }, {
    delay: 1500
  });
  let code = ds_StevedoringVolumeResults.getCellData(row, "commCd");
  let name = ds_StevedoringVolumeResults.getCellData(row, "commNm");
  ds_StevedoringVolumeResults.setCellData(row, "commCd", "");
  ds_StevedoringVolumeResults.setCellData(row, "commNm", "");
  udc_steve_grid.setSelectId("retrieveCommInfo");
  if (scwin.eventCnt == 1) {
    rtnList = udc_steve_grid.cfCommonPopUp(scwin.udc_steve_grid_callback // XML상의 SELECT ID	
    , code // 화면에서의 ??? Code Element의	Value
    , name // 화면에서의 ??? Name Element의	Value
    , "T" // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    , "3" // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    , "코드,명,레벨" // Title순서	
    , "80,195,50" // 보여주는 각 컬럼들의 폭	
    , "4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
    , ",,,A4" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의	사용자 정의	폭
    , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
    , null // 윈도우 위치 Y좌표	
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , "F" // 전체검색허용여부	("F")
    , "품목,품목코드,품목" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
};

//--------------------------------------------------------------------
// shift 그리드 품목 팝업 콜백
//--------------------------------------------------------------------
scwin.udc_Shift_grid_callback = function (ret) {
  let row = gr_ShiftStevedoringVolumeResults.getFocusedRowIndex();
  if (ret != null) {
    $c.gus.cfSetGridReturnValue($p, ret, ds_ShiftStevedoringVolumeResults, row, "commCd", "commNm");
  }
};

//--------------------------------------------------------------------
// steve 그리드 품목 팝업 콜백
//--------------------------------------------------------------------
scwin.udc_steve_grid_callback = function (ret) {
  let row = gr_StevedoringVolumeResults.getFocusedRowIndex();
  if (ret != null) {
    $c.gus.cfSetGridReturnValue($p, ret, ds_StevedoringVolumeResults, row, "commCd", "commNm");
  }
};

//--------------------------------------------------------------------
// shift 그리드 Cell image Click
//--------------------------------------------------------------------
scwin.gr_shift_imageClick = function (rowIndex, columnIndex) {
  scwin.gr_shift_onPopup(rowIndex, "ontextimageclick");
};

//--------------------------------------------------------------------
// shift 그리드 Cell kill focus
//--------------------------------------------------------------------
scwin.gr_shift_AfterEdit = function (row, colIndex, value) {
  let colid = gr_ShiftStevedoringVolumeResults.getColumnID(colIndex);
  if (row >= 0 && ds_ShiftStevedoringVolumeResults.getTotalRow() > row) {
    if (colid == "commNm") {
      if (ds_ShiftStevedoringVolumeResults.getCellData(row, colid) != "" && ds_ShiftStevedoringVolumeResults.getCellData(row, colid) != scwin.gr_shift_oldData) {
        ds_ShiftStevedoringVolumeResults.setCellData(row, "commCd", "");
        if (ds_ShiftStevedoringVolumeResults.getCellData(row, "cntrBulkClsCd") == "") {
          ds_ShiftStevedoringVolumeResults.setCellData(row, "cntrBulkClsCd", "C");
        }
        scwin.gr_shift_onPopup(row, "onafteredit");
        // scwin.f_cntrBulk(row, "onafteredit");
      } else if (ds_ShiftStevedoringVolumeResults.getCellData(row, colid) == "") {
        ds_ShiftStevedoringVolumeResults.setCellData(row, "commCd", "");
        ds_ShiftStevedoringVolumeResults.setCellData(row, "commNm", "");
      }

      //for=gr_ShiftStevedoringVolumeResults event=OnCloseUp(row,colid)
    } else if (colid == "cntrBulkClsCd") {
      if (scwin.hcntrBulkClsCd != ds_ShiftStevedoringVolumeResults.getCellData(row, colid)) {
        ds_ShiftStevedoringVolumeResults.setCellData(row, "commCd", "");
        ds_ShiftStevedoringVolumeResults.setCellData(row, "commNm", "");
      }
      scwin.hcommCd = "";
      scwin.hcommNm = "";
      scwin.f_cntrBulk(row);
    }
  }
  if (Number(ds_ShiftStevedoringVolumeResults.getCellData(ds_ShiftStevedoringVolumeResults.getRowPosition(), "wrkWt")) < 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_007, "중량"));
    ds_ShiftStevedoringVolumeResults.setCellData(ds_ShiftStevedoringVolumeResults.getRowPosition(), "wrkWt", scwin.gr_shift_oldData);
    return false;
  }
  if (Number(ds_ShiftStevedoringVolumeResults.getCellData(ds_ShiftStevedoringVolumeResults.getRowPosition(), "wrkCbm")) < 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_007, "CBM"));
    ds_ShiftStevedoringVolumeResults.setCellData(ds_ShiftStevedoringVolumeResults.getRowPosition(), "wrkCbm", scwin.gr_shift_oldData);
    return false;
  }
  if (acb_shiftCd.getValue() == "D") {
    if (ds_ShiftStevedoringVolumeResults.getCellData(row, "wrkStDt").trim().length > 0 && ds_ShiftStevedoringVolumeResults.getCellData(row, "wrkStDt") != dma_condition.get("wrkDt")) {
      $c.win.alert($p, MSG_CM_ERR_030 + "작업일자와 같은날만 가능합니다", ["주간의 작업시작일자"]);
      ds_ShiftStevedoringVolumeResults.setCellData(row, "wrkStDt", dma_condition.get("wrkDt"));
      return false;
    }
  } else {
    if (ds_ShiftStevedoringVolumeResults.getCellData(row, "wrkStDt").trim().length > 0 && (ds_ShiftStevedoringVolumeResults.getCellData(row, "wrkStDt") < dma_condition.get("wrkDt") || ds_ShiftStevedoringVolumeResults.getCellData(row, "wrkStDt") > dma_condition.get("wrkDt").toDate("YYYYMMDD").after(0, 0, 1).format("YYYYMMDD"))) {
      $c.win.alert($p, MSG_CM_ERR_030 + "작업일자 하루이후까지만 가능합니다", ["야간/심야의 작업시작일자"]);
      ds_ShiftStevedoringVolumeResults.setCellData(row, "wrkStDt", "");
      return false;
    }
    if (ds_ShiftStevedoringVolumeResults.getCellData(row, "wrkEndDt") == dma_condition.get("wrkDt").toDate("YYYYMMDD").after(0, 0, 1).format("YYYYMMDD")) {
      if (ds_ShiftStevedoringVolumeResults.getCellData(row, "wrkEndHh").trim() > "0700") {
        $c.win.alert($p, "야간/심야의 작업종료시간은 07시 이전이어야 합니다.");
        ds_ShiftStevedoringVolumeResults.setCellData(row, "wrkEndHh", "");
        return;
      }
    }
    if (lc_shiftCd.BindColVal == "N" && ds_ShiftStevedoringVolumeResults.getCellData(row, "wrkStDt") == dma_condition.get("wrkDt")) {
      // 야간 shift이면 
      if (ds_ShiftStevedoringVolumeResults.getCellData(row, "wrkStHh") < 1700 && ds_ShiftStevedoringVolumeResults.getCellData(row, "wrkStHh") != "") {
        $c.win.alert($p, "야간 Shift실적 시작시간은 17시 이후부터 입력이 가능합니다.");
        ds_ShiftStevedoringVolumeResults.setCellData(row, "wrkStHh", "");
        return false;
      }
    }
  }
};
//-------------------------------------------------------------------------
// Shift 실적 물량 그리드 콤보박스 값 변경시
//-------------------------------------------------------------------------
scwin.f_cntrBulk = function (row) {
  // 해당 화면 초기 개발자가 어떠한 이유로 아래소스를 구현햇는지는 모르겠으나, asis에는 아래 소스 미존재하므로 주석처리.
  // let evNm = arguments[1] || "";

  // if (evNm && $c.win.getEventList(gr_ShiftStevedoringVolumeResults, evNm)) {
  //     scwin.eventCnt++;
  // }

  // $p.setTimeout(function () {
  //     scwin.eventCnt = 0;
  // }, { delay: 1500 });

  // let row = row;
  let clsCd = "";
  if (ds_ShiftStevedoringVolumeResults.getCellData(row, "cntrBulkClsCd") == "B") {
    clsCd = "B4";
  } else {
    clsCd = "C";
  }
  let code = ds_ShiftStevedoringVolumeResults.getCellData(row, "commCd"); // 화면에서의 ??? Code Element의	Value
  let name = ds_ShiftStevedoringVolumeResults.getCellData(row, "commNm"); // 화면에서의 ??? Name Element의	Value

  udc_Shift_grid.setSelectId("retrieveCommInfo");
  ds_ShiftStevedoringVolumeResults.setCellData(row, "commCd", "");
  ds_ShiftStevedoringVolumeResults.setCellData(row, "commNm", "");
  rtnList = udc_Shift_grid.cfCommonPopUpAsync(scwin.udc_Shift_grid_callback // callback	
  , code // 화면에서의 ??? Code Element의	Value
  , name // 화면에서의 ??? Name Element의	Value
  , "T" // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , "3" // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , "코드,명,레벨" // Title순서	
  , "80,195,50" // 보여주는 각 컬럼들의 폭	
  , "4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
  //,",,3,"+ds_ShiftStevedoringVolumeResults.NameValue(row,"cntrBulkClsCd")	//컨테이너 벌크구분을 넘김
  , ",,," + clsCd //컨테이너 벌크구분을 넘김
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , "F" // 전체검색허용여부	("F")
  , "품목,품목코드,품목" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ds_ShiftStevedoringVolumeResults.setCellData(row, "commCd", scwin.hcommCd);
      ds_ShiftStevedoringVolumeResults.setCellData(row, "commNm", scwin.hcommNm);
    } else {
      scwin.hcommCd = ds_ShiftStevedoringVolumeResults.getCellData(row, "commCd");
      scwin.hcommNm = ds_ShiftStevedoringVolumeResults.getCellData(row, "commNm");
    }
  } else {
    ds_ShiftStevedoringVolumeResults.setCellData(row, "commCd", "");
    ds_ShiftStevedoringVolumeResults.setCellData(row, "commNm", "");
  }
  scwin.hcntrBulkClsCd = ds_ShiftStevedoringVolumeResults.getCellData(row, "cntrBulkClsCd");
};

//--------------------------------------------------------------------
// steve 그리드 image Click
//--------------------------------------------------------------------
scwin.gr_Steve_imageClick = function (rowIndex, columnIndex) {
  scwin.f_commCdPopup(rowIndex, "ontextimageclick");
};

//--------------------------------------------------------------------
// steve 그리드 Cell kill focus
//--------------------------------------------------------------------
scwin.gr_Steve_AfterEdit = async function (row, colIndex, value) {
  let colid = gr_StevedoringVolumeResults.getColumnID(colIndex);
  if (row >= 0 && ds_StevedoringVolumeResults.getTotalRow() > row) {
    if (colid == "commNm") {
      //case "commCd":
      if (ds_StevedoringVolumeResults.getCellData(row, colid) != "" && ds_StevedoringVolumeResults.getCellData(row, colid) != scwin.gr_Steve_oldData) {
        ds_StevedoringVolumeResults.setCellData(row, "commCd", "");
        scwin.f_commCdPopup(row, "onafteredit");
      } else if (ds_StevedoringVolumeResults.getCellData(row, colid) == "") {
        ds_StevedoringVolumeResults.setCellData(row, "commCd", "");
        ds_StevedoringVolumeResults.setCellData(row, "commNm", "");
      }
    }
  }
  if (colid == "wrkQty" && scwin.gr_Steve_oldData != ds_StevedoringVolumeResults.getCellData(row, "wrkQty")) {
    if (ds_StevedoringVolumeResults.getCellData(row, colid) == 0) {
      ds_StevedoringVolumeResults.setCellData(row, "wrkWt", 0);
      ds_StevedoringVolumeResults.setCellData(row, "wrkCbm", 0);
      return;
    } else {
      let qty = 0;
      let wt = 0;
      let cbm = 0;
      for (i = 0; i < ds_DailyWorkVolumePlan.getTotalRow(); i++) {
        if (ds_DailyWorkVolumePlan.getCellData(i, "commCd") == ds_StevedoringVolumeResults.getCellData(row, "commCd")) {
          qty = qty + ds_DailyWorkVolumePlan.getCellData(i, "wrkPlanQty");
          wt = wt + ds_DailyWorkVolumePlan.getCellData(i, "wrkPlanWt");
          cbm = cbm + ds_DailyWorkVolumePlan.getCellData(i, "wrkPlanCbm");
        }
      }
      if (qty > 0) {
        let vs = qty / Number(ds_StevedoringVolumeResults.getCellData(row, colid));
        ds_StevedoringVolumeResults.setCellData(row, "wrkWt", Math.round(wt / vs * 1000) / 1000);
        ds_StevedoringVolumeResults.setCellData(row, "wrkCbm", Math.round(cbm / vs * 1000) / 1000);
      }
    }
  }
  if (Number(ds_StevedoringVolumeResults.getCellData(ds_ShiftStevedoringVolumeResults.getRowPosition(), "wrkWt")) < 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_007, "중량"));
    ds_StevedoringVolumeResults.setCellData(ds_StevedoringVolumeResults.getRowPosition(), "wrkWt", scwin.gr_Steve_oldData);
    return false;
  }
  if (Number(ds_StevedoringVolumeResults.getCellData(ds_ShiftStevedoringVolumeResults.getRowPosition(), "wrkCbm")) < 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_007, "CBM"));
    ds_StevedoringVolumeResults.setCellData(ds_StevedoringVolumeResults.getRowPosition(), "wrkCbm", scwin.gr_Steve_oldData);
    return false;
  }
  if (acb_shiftCd.getValue() == "D") {
    if (ds_StevedoringVolumeResults.getCellData(row, "wrkStDt").trim().length > 0 && ds_StevedoringVolumeResults.getCellData(row, "wrkStDt") != dma_condition.get("wrkDt")) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_030 + "작업일자와 같은날만 가능합니다", ["주간의 작업시작일자"]));
      ds_StevedoringVolumeResults.setCellData(row, "wrkStDt", dma_condition.get("wrkDt"));
      return false;
    }
  } else {
    if (ds_StevedoringVolumeResults.getCellData(row, "wrkStDt").trim().length > 0 && (ds_StevedoringVolumeResults.getCellData(row, "wrkStDt") < dma_condition.get("wrkDt") || ds_StevedoringVolumeResults.getCellData(row, "wrkStDt") > dma_condition.get("wrkDt").toDate("YYYYMMDD").after(0, 0, 1).format("YYYYMMDD"))) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_030 + "작업일자 하루이후까지만 가능합니다", ["야간/심야의 작업시작일자"]));
      ds_StevedoringVolumeResults.setCellData(row, "wrkStDt", "");
      return false;
    }
    if (ds_StevedoringVolumeResults.getCellData(row, "wrkEndDt") == dma_condition.get("wrkDt").toDate("YYYYMMDD").after(0, 0, 1).format("YYYYMMDD")) {
      if (ds_StevedoringVolumeResults.getCellData(row, "wrkEndHh").trim() > "0700") {
        $c.win.alert($p, "야간/심야의 작업종료시간은 07시 이전이어야 합니다.");
        ds_StevedoringVolumeResults.setCellData(row, "wrkEndHh", "");
        return;
      }
    }
    if (acb_shiftCd.getValue() == "N" && ds_StevedoringVolumeResults.getCellData(row, "wrkStDt") == dma_condition.get("wrkDt")) {
      // 야간 shift이면 
      if (Number(ds_StevedoringVolumeResults.getCellData(row, "wrkStHh")) < 1700 && ds_StevedoringVolumeResults.getCellData(row, "wrkStHh") != "") {
        $c.win.alert($p, "야간 Shift실적 시작시간은 17시 이후부터 입력이 가능합니다.");
        ds_StevedoringVolumeResults.setCellData(row, "wrkStHh", "");
        return false;
      }
    }
  }
};

//--------------------------------------------------------------------
// shift 그리드 Cell 편집시 기존 데이터 전역변수 할당
//--------------------------------------------------------------------
scwin.gr_shift_beforeEdit = function (rowIndex, columnIndex, value) {
  scwin.gr_shift_oldData = value;
};
scwin.sbm_RetrieveStevedoringVolumeResults_submitdone = async function (e) {
  await scwin.ds_DailyCarryingVesselWorkPlanBasisInfo_ondataload();
  await scwin.ds_StevedoringVolumeResults_ondataload();
};

//--------------------------------------------------------------------
// 하역 실적 물량 그리드 엑셀 
//--------------------------------------------------------------------
scwin.runExcel1 = function () {
  let options = {
    fileName: "하역실적물량조회.xlsx",
    sheetName: "하역실적물량조회"
  };
  let grdObj = gr_StevedoringVolumeResults;
  let infoArr = {};
  if (ds_StevedoringVolumeResults.getTotalRow() == 0) {
    return;
  } else {
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};

//--------------------------------------------------------------------
// Shift 실적 물량 그리드 엑셀 
//--------------------------------------------------------------------
scwin.runExcel2 = function () {
  let options = {
    fileName: "shifting실적물량조회.xlsx",
    sheetName: "shifting실적물량조회"
  };
  let grdObj = gr_ShiftStevedoringVolumeResults;
  let infoArr = {};
  if (ds_ShiftStevedoringVolumeResults.getTotalRow() == 0) {
    return;
  } else {
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};

//수정전의 값 담기도록 추가.
scwin.gr_StevedoringVolumeResults_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.gr_Steve_oldData = value;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'search_cond',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width: 100px;',mandatory:'true',maxlength:'8',editType:'select',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.onkeyup',objType:'data',title:'본선관리번호'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_expClsCd',search:'start',style:'width:100px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkDt',pickerType:'dynamic',style:'',title:'작업일자',delimiter:'/',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Shift ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_shiftCd',search:'start',style:'width:100px;',submenuSize:'auto'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieveButton',style:'',type:'button','ev:onclick':'scwin.btn_retrieveButton_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'ed_vsslNm',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_lineNm',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_shpCoNm',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'ed_portcnt',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표화종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_repKcg',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_expClsCd',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_wrkPlNm',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입항(예정)일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_arrvlportDtm',label:'',style:'',displayFormat:'####/##/## ##:##'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출항(예정)일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_deprtportDtm',label:'',style:'',displayFormat:'####/##/## ##:##'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선작업완료여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_cvsslCompleteYn',label:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선작업완료일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_cvsslCompleteDt',label:'',style:'',displayFormat:'####/##/##'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일일하역작업계획여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_dailyWorkPlan',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'양적하지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'ed_dchrDropRgn',label:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'grd_section1',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 30%;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'작업계획물량 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_DailyWorkVolumePlan',style:'',autoFit:'allColumn',id:'gr_DailyWorkVolumePlan',visibleRowNum:'10',class:'wq_gvw',resize:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column1',value:'H#',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column17',value:'품목명',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column15',value:'작업계획',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column38',value:'수량',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'중량<br/>(TON)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column36',value:'CBM',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'holdNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'commNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkPlanQty',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkPlanWt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',displayFormat:'#,##0.000',maxLength:'0.3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkPlanCbm',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',displayFormat:'#,##0.000[floor]',maxLength:'0.3'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column29',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column28',value:'',displayMode:'label',textAlign:'right',expression:'sum("wrkPlanQty")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column27',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.000[floor]',maxLength:'0.3',expression:'sum("wrkPlanWt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.000[floor]',maxLength:'0.3',expression:'sum("wrkPlanCbm")'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spa_totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'하역실적물량 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_StevedoringVolumeResults',gridDownFn:'scwin.runExcel1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_StevedoringVolumeResults',id:'gr_StevedoringVolumeResults',style:'',visibleRowNum:'10',visibleRowNumFix:'true',columnMove:'true',resize:'true',validExp:'holdNo:HOLD번호:yes:AlphaNum&commCd:품목코드:yes:&wrkStDt:시작일자:yes:date=YYYYMMDD&wrkStHh:시작시간:yes&wrkEndDt:종료일자:yes:date=YYYYMMDD&wrkEndHh:종료시간:yes&wrkStpCd1:작업단계1:yes',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_Steve_AfterEdit','ev:ontextimageclick':'scwin.gr_Steve_imageClick','ev:onbeforeedit':'scwin.gr_StevedoringVolumeResults_onbeforeedit'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'H#',width:'50',colSpan:'',rowSpan:'2',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'품목명',width:'80',colSpan:'',rowSpan:'2',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'품목코드',width:'100',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'작업실적',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'시작',width:'140',colSpan:'2',rowSpan:'',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'종료',width:'140',colSpan:'2',rowSpan:'',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column57',value:'작업<br/>단계1',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'작업<br/>단계2',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'작업<br/>단계3',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'작업<br/>단계4',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'특이사항',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'수량',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column36',value:'중량<br/>(TON)',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'CBM',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column34',value:'일자',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column33',value:'시간',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column32',value:'일자',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column31',value:'시간',displayMode:'label',class:'txt-red',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'holdNo',inputType:'text',style:'',value:'',width:'50',maxByteLength:'2',maxLength:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'textImage',style:'',value:'',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkQty',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkWt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'float',displayFormat:'#,###.##0',maxLength:'18.3',autoDecimalPoint:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkCbm',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'float',displayFormat:'#,##0.000[floor]',maxLength:'18.3',autoDecimalPoint:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'calendar',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStHh',inputType:'text',style:'',value:'',width:'60',displayFormat:'##:##',maxLength:'4',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndDt',inputType:'calendar',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndHh',inputType:'text',style:'',value:'',width:'60',displayFormat:'##:##',maxLength:'4',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'wrkStpCd1',value:'',displayMode:'label',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wkrStp'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'wrkStpCd2',value:'',displayMode:'label',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wkrStp'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'wrkStpCd3',value:'',displayMode:'label',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wkrStp'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'wrkStpCd4',value:'',displayMode:'label',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wkrStp'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'합계',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'expression',style:'',value:'',width:'70',textAlign:'right',expression:'sum("wrkQty")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'expression',style:'',value:'',width:'70',textAlign:'right',expression:'sum("wrkWt")',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'expression',style:'',value:'',width:'70',textAlign:'right',expression:'sum("wrkCbm")',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'',width:'60'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_StevedoringVolumeResults_bottom',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',gridID:'gr_StevedoringVolumeResults',rowAddFunction:'scwin.f_AddRow'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Shifting실적물량',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_ShiftStevedoringVolumeResults',gridDownFn:'scwin.runExcel2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_ShiftStevedoringVolumeResults',id:'gr_ShiftStevedoringVolumeResults',style:'',visibleRowNum:'10',visibleRowNumFix:'true',validExp:'holdNo:HOLD번호:yes:AlphaNum&commCd:품목코드:yes:&wrkStDt:시작일자:yes:date=YYYYMMDD&wrkStHh:시작시간:yes&wrkEndDt:종료일자:yes:date=YYYYMMDD&wrkEndHh:종료시간:yes&wrkStpCd1:작업단계1:yes&wrkQty:수량:yes:minNumber:0.000',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_shift_AfterEdit','ev:onbeforeedit':'scwin.gr_shift_beforeEdit','ev:ontextimageclick':'scwin.gr_shift_imageClick'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'H#',width:'50',colSpan:'',rowSpan:'2',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'CNTR/<br/>BULK구분',width:'100',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'품목명',width:'100',colSpan:'',rowSpan:'2',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'품목코드',width:'100',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'수량',width:'70',colSpan:'',rowSpan:'2',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'중량<br/>(TON)',width:'100',colSpan:'',rowSpan:'2',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'CBM',width:'100',colSpan:'',rowSpan:'2',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'시작',width:'140',colSpan:'2',rowSpan:'',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'종료',width:'140',colSpan:'2',rowSpan:'',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'작업단계',width:'100',colSpan:'',rowSpan:'2',class:'txt-red',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'일자',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'시간',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'일자',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column46',value:'시간',displayMode:'label',class:'txt-red',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'holdNo',inputType:'text',width:'50',maxByteLength:'2',maxLength:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrBulkClsCd',inputType:'select',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'textImage',width:'100',textAlign:'left',imageClickFunction:'scwin.gr_shift_onPopup'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkQty',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkWt',inputType:'text',width:'100',textAlign:'right',dataType:'float',displayFormat:'#,###.##0',maxLength:'18.3',autoDecimalPoint:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkCbm',inputType:'text',width:'100',textAlign:'right',dataType:'float',displayFormat:'#,###.##0',maxLength:'18.3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'calendar',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkStHh',value:'',displayMode:'label',displayFormat:'##:##',maxByteLength:'4',maxLength:'4',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndDt',inputType:'calendar',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkEndHh',value:'',displayMode:'label',displayFormat:'##:##',maxByteLength:'4',maxLength:'4',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd1',inputType:'select',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SHIFTING1'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0007'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SHIFTING2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0008'}]}]}]}]}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',width:'100',value:'합계'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'expression',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("wrkQty")'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'expression',width:'100',textAlign:'right',dataType:'float',expression:'sum("wrkWt")',displayFormat:'#,##0.000',maxLength:'18.3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'expression',width:'100',textAlign:'right',expression:'sum("wrkCbm")',dataType:'float',displayFormat:'#,##0.000',maxLength:'18.3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_ShiftStevedoringVolumeResults_bottom',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',gridID:'gr_ShiftStevedoringVolumeResults',rowAddFunction:'scwin.f_AddRowShift'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_steel',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_steel_onClick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'제철정보전송'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onClick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'특이사항 ',class:'tit'}}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txa_rmk',style:'height: 120px;',objType:'data'}}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_Shift_grid'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_steve_grid'}}]}]}]}]}]})