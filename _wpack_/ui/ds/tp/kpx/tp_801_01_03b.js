/*amd /ui/ds/tp/kpx/tp_801_01_03b.xml 41768 b1f0dd96f8a0913a32b1d13e360105c6a7fd7f25b2db12d5ca0a806be56907ae */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrFromDt',name:'화주오더일자FROM',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrToDt',name:'화주오더일자TO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mcomOdrNo',name:'동부오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtOdrNo',name:'화주오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'자회사',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gubun',name:'구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmYn',name:'확정여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtOdrKndCd',name:'화주오더종류코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_result_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text',defaultValue:'',length:'5'}},{T:1,N:'w2:column',A:{id:'coNm',name:'업체명',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'발주일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'mchtOdrNo',name:'오더번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'tplMchtReqDt',name:'3자물류화주의뢰일자',dataType:'text',defaultValue:'',length:'15'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'도착예정일자',dataType:'text',defaultValue:'',length:'14'}},{T:1,N:'w2:column',A:{id:'bizLongNm',name:'사업장명',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'tplZipNm',name:'착지명',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'companyCd',name:'회사코드',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'custGrp',name:'거래처그룹',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'orderDate',name:'예정일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'orderNo',name:'예정번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'orderDepoSeq',name:'오더배정번호',dataType:'number',defaultValue:'0',length:'6'}},{T:1,N:'w2:column',A:{id:'baechaSeq',name:'배차 일련번호',dataType:'number',defaultValue:'0',length:'6'}},{T:1,N:'w2:column',A:{id:'baechaDt',name:'배차일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'workNo',name:'작업지시번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'upDate',name:'상차(입차) 일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'uptime',name:'상차(입차) 시간',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'downDate',name:'하차(납품) 일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'dwtime',name:'하차(납품)시간',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'lentcarNo',name:'차량번호',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'lentcarDrvNm',name:'운전자명',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'lentcarDrvTel',name:'운전자연락처',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'lentcarCd',name:'운송사코드',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'carKindCd',name:'차종',dataType:'text',defaultValue:'',length:'5'}},{T:1,N:'w2:column',A:{id:'fromLocCd',name:'상차지(데포,반출)',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'toLocCd',name:'착지코드',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'fromCyCd',name:'상차지역(CY개념)',dataType:'text',defaultValue:'',length:'5'}},{T:1,N:'w2:column',A:{id:'toCyCd',name:'착지항구코드',dataType:'text',defaultValue:'',length:'5'}},{T:1,N:'w2:column',A:{id:'cnNo',name:'컨테이너번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'sealNo1',name:'봉인번호1',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'sealNo2',name:'봉인번호2',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'sealNo3',name:'봉인번호3',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'sealNo4',name:'SEAL번호4',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'sealNo5',name:'SEAL번호5',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'sealNo6',name:'SEAL번호6',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'cnType',name:'컨테이너 종류',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'cnQty',name:'CONT 수량',dataType:'number',defaultValue:'0',length:'12'}},{T:1,N:'w2:column',A:{id:'baechaQty',name:'출고수량',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'blno',name:'B/L번호',dataType:'text',defaultValue:'',length:'25'}},{T:1,N:'w2:column',A:{id:'realWeight',name:'실계근량',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'realDnWeight',name:'하차계근량',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'remark',name:'비고',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'confirmYn',name:'확정여부',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'mcomOdrNo',name:'당사오더번호',dataType:'text',defaultValue:'',length:'13'}},{T:1,N:'w2:column',A:{id:'shipName',name:'선명',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'shipComp',name:'선사',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'forwarder',name:'포워더',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'sendDate',name:'전송일',dataType:'text',defaultValue:'',length:'14'}},{T:1,N:'w2:column',A:{id:'befCargo',name:'이전화물',dataType:'text',defaultValue:'',length:'20'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ediMappingSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'docCd',name:'문서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'itemCd',name:'항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'osideCd',name:'외부코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_coCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'osideCd',name:'외부코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideCdNm',name:'외부코드명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_reterieve',action:'/ncall.ds.tp.kpx.RetrieveKpxAlloccarInfoSndCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_reterieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBizLondCd',action:'/ncall.ds.tp.kpx.RetrieveEdiMappingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_ediMappingSearch","key":"IN_DS1"},{"id":"ds_coCd","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_coCd","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveBizLondCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.ds.tp.kpx.SaveKpxAlloccarInfoSndCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_result","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_confirm',action:'/ncall.ds.tp.kpx.SaveKpxAlloccarInfoSndConfirmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_result","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_confirm_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); //현재일자
scwin.strPreDate = $c.date.addDate($p, scwin.strCurDate, -7); //1주전

scwin.docCd = "COMPANY_001"; // 문서코드 - 자회사종류
scwin.wrkPlCd = "999"; // 작업장코드 
scwin.itemCd = "COMPANY"; // 항목코드 
scwin.clntNo = "247741";
scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자 구분코드

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // EDI MAPPING 조회 조건 SET(TOBE : 바뀌지 않는 정보라 한번만 실행되도록 위치 이동)
  dma_ediMappingSearch.set("clntNo", scwin.clntNo); // 거래처번호
  dma_ediMappingSearch.set("docCd", scwin.docCd); // 문서코드
  dma_ediMappingSearch.set("wrkPlCd", scwin.wrkPlCd); // 작업장코드
  dma_ediMappingSearch.set("itemCd", scwin.itemCd); // 항목코드

  $c.sbm.execute($p, sbm_retrieveBizLondCd); //자회사코드조회

  scwin.acb_confirmYn_onchange();
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    // 초기화
    scwin.f_defaultValue();

    // 테스트 데이터
    // ed_odrFromDt.setValue("20150101");
    // ed_odrToDt.setValue("20150101");
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  // 조회 조건 초기화
  scwin.f_FieldClear();
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 오더기간 From - To 입력 확인
  let ret = await $c.gus.cfValidate($p, [ed_odrFromDt, ed_odrToDt]);
  if (!ret) {
    return;
  }

  // 오더기간 범위 확인
  if (!$c.gus.cfIsAfterDate($p, ed_odrFromDt.getValue(), ed_odrToDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_048, new Array("오더일자 From", "오더일자 To"));
    ed_odrFromDt.focus();
    return false;
  }
  var diffObj = $c.gus.cfDifferBetween($p, ed_odrFromDt.getValue(), ed_odrToDt.getValue());

  // 오더기간이 1달 이상인경우 확인
  if (diffObj.year > 0 || diffObj.month > 0) {
    let confirm = await $c.win.confirm($p, "오더기간 이 1개월이 넘습니다.조회하시겠습니까?");
    if (!confirm) {
      ed_odrFromDt.focus();
      return false;
    }
  }
  dma_retrieve.set("clntNo", scwin.clntNo); // 거래처번호

  $c.sbm.execute($p, sbm_reterieve);
};

//-------------------------------------------------------------------------
// 조회 조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_searchCondition);
  ed_odrFromDt.setValue(scwin.strPreDate);
  ed_odrToDt.setValue(scwin.strCurDate);
};

//-------------------------------------------------------------------------
// 미확정저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //저장 여부 확인
  let ret = await $c.win.confirm($p, "미확정저장하시겠습니까?");
  if (ret) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 확정저장
//-------------------------------------------------------------------------
scwin.f_Confirm = async function () {
  for (var i = 0; i < ds_result.getRowCount(); i++) {
    var chk = ds_result.getCellData(i, "chk");
    if (chk == "T") {
      var baechaQty = ds_result.getCellData(i, "baechaQty");
      var downDate = ds_result.getCellData(i, "downDate");
      var dwtime = ds_result.getCellData(i, "dwtime");
      if (baechaQty == 0) {
        $c.win.alert($p, i + "번째 라인에 출고수량이 0 입니다.");
        return;
      }
      if (downDate == "") {
        $c.win.alert($p, i + "번째 라인에 하차일자가 없습니다.");
        return;
      }
      if (dwtime == "") {
        $c.win.alert($p, i + "번째 라인에 하차시간이 없습니다.");
        return;
      }
    }
  }

  //저장 여부 확인
  let ret = await $c.win.confirm($p, "확정저장하시겠습니까?");
  if (ret) {
    $c.sbm.execute($p, sbm_confirm);
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 이전화물 팝업
      udc_comCode1.setSelectId("retrieveKpxPop_tpro"); // XML상의 SELECT ID
      udc_comCode1.cfCommonPopUp(scwin.udc_udc_comCode1_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
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
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_reterieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_result.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, new Array("조회결과"));
  } else {
    var confirmYn = "";
    var arvIntendDt = "";
    var downDt = "";
    for (var row = 0; row < gr_result.getTotalRow(); row++) {
      confirmYn = ds_result.getCellData(row, "confirmYn");
      arvIntendDt = ds_result.getCellData(row, "arvIntendDt");
      downDt = ds_result.getCellData(row, "downDate") + ds_result.getCellData(row, "dwtime");
      for (var col = 0; col < gr_result.getTotalCol(); col++) {
        // 미확정일때 그리드 cell color SET
        if (confirmYn == "0") {
          gr_result.setCellStyle(row, col, "color", "blue");
        } else {
          gr_result.setCellStyle(row, col, "color", "black");
        }
        if (arvIntendDt < downDt) {
          gr_result.setCellStyle(row, col, "background-color", "orange");
        } else {
          gr_result.setCellStyle(row, col, "background-color", "white");
        }
      }
    }
  }
  tbx_totalRows.setValue(ds_result.getRowCount());
};

//-------------------------------------------------------------------------
// 자회사 콤보박스 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieveBizLondCd_submitdone = function (e) {
  if (ds_coCd.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_052, new Array("자회사종류"));
  } else {
    ds_coCd.insertRow(0);
    ds_coCd.setCellData(0, "osideCd", "");
    ds_coCd.setCellData(0, "osideCdNm", "전체");
    lc_coCd.setSelectedIndex(0);
  }
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 확정 submitdone
//-------------------------------------------------------------------------
scwin.sbm_confirm_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회조건 초기화 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// 확정여부 콤보박스 값변경
//-------------------------------------------------------------------------
scwin.acb_confirmYn_onchange = function (info) {
  if (acb_confirmYn.getValue() == "0") {
    //미확정만 보이게
    btn_save1.setDisabled(true);
    btn_save2.setDisabled(false);
  } else if (acb_confirmYn.getValue() == "1") {
    //확정만 보이게
    btn_save1.setDisabled(false);
    btn_save2.setDisabled(true);
  } else {
    //미확정, 확정 둘다 보이게
    btn_save1.setDisabled(true);
    btn_save2.setDisabled(true);
  }
};

//-------------------------------------------------------------------------
// 그리드 onrowpositionchange
// ASIS : ds_result OnRowPosChanged(row)
//-------------------------------------------------------------------------
scwin.ds_result_onrowpositionchange = function (info) {
  // 확정후에는 그리드 수정 불가
  if (ds_result.getCellData(info.newRowIndex, "confirmYn") == "1") {
    gr_result.setReadOnly("column", "upDate", true);
    gr_result.setReadOnly("column", "uptime", true);
    gr_result.setReadOnly("column", "downDate", true);
    gr_result.setReadOnly("column", "dwtime", true);
    gr_result.setReadOnly("column", "realWeight", true);
    gr_result.setReadOnly("column", "realDnWeight", true);
    gr_result.setReadOnly("column", "fromCycd", true);
    gr_result.setReadOnly("column", "toCycd", true);
    gr_result.setReadOnly("column", "sealNo1", true);
    gr_result.setReadOnly("column", "shipName", true);
    gr_result.setReadOnly("column", "shipComp", true);
    gr_result.setReadOnly("column", "forwarder", true);
    gr_result.setReadOnly("column", "blno", true);
    gr_result.setReadOnly("column", "befCargo", true);
  } else {
    gr_result.setReadOnly("column", "upDate", false);
    gr_result.setReadOnly("column", "uptime", false);
    gr_result.setReadOnly("column", "downDate", false);
    gr_result.setReadOnly("column", "dwtime", false);
    gr_result.setReadOnly("column", "realWeight", false);
    gr_result.setReadOnly("column", "realDnWeight", false);
    gr_result.setReadOnly("column", "fromCycd", false);
    gr_result.setReadOnly("column", "toCycd", false);
    gr_result.setReadOnly("column", "sealNo1", false);
    gr_result.setReadOnly("column", "shipName", false);
    gr_result.setReadOnly("column", "shipComp", false);
    gr_result.setReadOnly("column", "forwarder", false);
    gr_result.setReadOnly("column", "blno", false);
    gr_result.setReadOnly("column", "befCargo", false);
  }
};

//-------------------------------------------------------------------------
// 그리드 이전화물 검색 버튼 클릭
//-------------------------------------------------------------------------
scwin.gr_result_ontextimageclick = function (rowIndex, columnIndex) {
  switch (columnIndex) {
    case 51:
      // 이전화물(befCargo)
      if (gr_result.getReadOnly("column", rowIndex, "befCargo") == true) {
        // ReadOnly 상태일때는 팝업 띄우지 않기
        return;
      }
      scwin.f_openCommonPopUp(1, ds_result.getCellData(rowIndex, "befCargo"), "", "F", "F");
      break;
  }
};

//-------------------------------------------------------------------------
// 그리드 이전화물 공통코드 콜백
//-------------------------------------------------------------------------
scwin.udc_udc_comCode1_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    ds_result.setCellData(ds_result.getRowPosition(), 'befCargo', rtnList[2]);
  }
};

//-------------------------------------------------------------------------
// 그리드 : 확정여부 컬럼 displayFormatter
//-------------------------------------------------------------------------
scwin.confirmYnExp = function (data) {
  return $c.gus.decode($p, data, "0", "미확정", "확정");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자회사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',chooseOptionLabel:'전체',class:'col5',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'value delim label',id:'lc_coCd',objType:'data',ref:'data:dma_retrieve.coCd',style:'width:150px;',submenuSize:'auto',sortOption:'value'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_coCd'},E:[{T:1,N:'xf:label',A:{ref:'osideCdNm'}},{T:1,N:'xf:value',A:{ref:'osideCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'acb_gubun',search:'start',style:'width:110px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_retrieve.gubun'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'입차요청일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'dma_retrieve',refEdDt:'odrToDt',refStDt:'odrFromDt',style:'',edFromId:'ed_odrFromDt',edToId:'ed_odrToDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',objTypeBtn:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동부오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mcomOdrNo',placeholder:'',style:'width:150px;',maxlength:'20',objType:'Data',ref:'data:dma_retrieve.mcomOdrNo'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mchtOdrNo',placeholder:'',style:'width:150px;',maxlength:'20',objType:'Data',ref:'data:dma_retrieve.mchtOdrNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_confirmYn',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_retrieve.confirmYn','ev:onchange':'scwin.acb_confirmYn_onchange',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_mchtOdrKndCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_retrieve.mchtOdrKndCd',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'카고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'c'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'탱크로리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'s'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'KPX배차정보전송',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"KPX배차정보전송.xlsx","sheetName":"KPX배차정보전송","rowNumVisible":"true","type":"4+8+16"}',gridID:'gr_result',gridUpYn:'N',templateYn:'N',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_result',id:'gr_result',style:'',visibleRowNum:'15',visibleRowNumFix:'true',fixedColumn:'1',readOnly:'true','ev:ontextimageclick':'scwin.gr_result_ontextimageclick',rowNumVisible:'true',rowNumHeaderValue:'순번'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',checkboxLabel:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'자회사',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'오더일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'화주오더번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'입차요청일시',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'하차요청일시',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'출지명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'착지명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'동부오더번호',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column106',value:'회사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column124',value:'자회사구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column122',value:'오더일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column120',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column118',value:'오더배정번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column116',value:'배차일련번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column114',value:'상차일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column112',value:'상차시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column110',value:'하차일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column108',value:'하차시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'상차일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column41',value:'하차일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'운전자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column126',value:'운전자연락처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column128',value:'운송사<br/>코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'차종',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column132',value:'상차지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column130',value:'하차지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',value:'출고<br/>수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',value:'상차<br/>계근량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',value:'하차<br/>계근량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column91',value:'상차<br/>CY',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column89',value:'하차<br/>CY',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column87',value:'CONT<br/>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column85',value:'CONT<br/>종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column83',value:'CONT<br/>수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column81',value:'SEAL<br/>번호1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column134',value:'SEAL<br/>번호2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column144',value:'SEAL<br/>번호3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column142',value:'SEAL번호4',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column140',value:'SEAL번호5',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column138',value:'SEAL번호6',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column65',value:'선명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column67',value:'선사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column69',value:'포워더',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column105',value:'BL NO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column146',value:'배차주의사항',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column101',value:'배차일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column99',value:'작업지시번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column97',value:'확정<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column93',value:'전송일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column95',value:'이전화물',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',readOnly:'false',trueValue:'T',valueType:'other',falseValue:'F',checkboxLabel:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrDt',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtOdrNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tplMchtReqDt',inputType:'text',width:'120',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvIntendDt',inputType:'text',width:'120',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizLongNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tplZipNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mcomOdrNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'companyCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'custGrp',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'orderDate',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'orderNo',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'orderDepoSeq',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'baechaSeq',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'upDate',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'uptime',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'downDate',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dwtime',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'upDtm',displayMode:'label',displayFormat:'####/##/## ##:##',expression:'datalist(\'upDate\')+datalist(\'uptime\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'downDtm',displayMode:'label',displayFormat:'####/##/## ##:##',expression:'datalist(\'downDate\')+datalist(\'dwtime\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lentcarNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lentcarDrvNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lentcarDrvTel',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lentcarCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'carKindCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fromLocCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'toLocCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'baechaQty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'realWeight',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'realDnWeight',displayMode:'label',textAlign:'right',displayFormat:'#,##0.0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fromCyCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'toCyCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cnNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cnType',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cnQty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sealNo1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sealNo2',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sealNo3',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sealNo4',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sealNo5',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sealNo6',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'shipName',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'shipComp',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'forwarder',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'blno',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'remark',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'baechaDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'workNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'confirmYn',displayMode:'label',displayFormatter:'scwin.confirmYnExp'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sendDate',displayMode:'label',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'befCargo',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_save1',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bUpdate',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:3,text:'미확정저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_save2',style:'',type:'button','ev:onclick':'scwin.f_Confirm',objType:'bUpdate',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확정저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',codeId:'',id:'udc_comCode1',nameId:'',popupID:'',style:'display:none'}}]}]}]}]}]})