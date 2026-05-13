/*amd /ui/ds/tp/kpx/tp_801_01_01b.xml 35818 6ca5eff76fbc691ae34304dc2099d7786411dedc203421ca26aa7ad21c9204e5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_orderSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrFromDt',name:'오더일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrToDt',name:'오더일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtOdrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtOdrKndCd',name:'화주오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gubun',name:'구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ediMappingSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'docCd',name:'문서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'itemCd',name:'항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'osideCd',name:'외부코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_coCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'internalCd',name:'내부코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideCd',name:'외부코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideCdNm',name:'외부코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrKndCd',name:'화주오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logSeq',name:'LOG순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'발주일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplMchtReqDt',name:'3자물류화주의뢰일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coNm',name:'업체명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'사업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongNm',name:'사업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptArvBizLongCd',name:'출발도착사업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'납품처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'julianArvIntendDt',name:'JULIAN도착예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'도착예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplZip',name:'3자물류우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplZipNm',name:'착지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlAddr1',name:'상세주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlAddr2',name:'상세주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accp',name:'인수자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplTelNo',name:'3자물류전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplAgrcoClsCd',name:'3자물류농협구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplClntMktDay',name:'3자물류거래처장날',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplClntOffDay',name:'3자물류거래처휴일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unqItm',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'발송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndHh',name:'전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retnRsnCd',name:'반품사유코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRecptDt',name:'오더접수일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRecptHh',name:'오더접수시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomOdrNo',name:'당사오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCreatDt',name:'오더생성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCreatId',name:'오더생성자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplErrMsg',name:'3자물류오류MSG',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplPgmId',name:'3자물류프로그램ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workstationId',name:'WORKSTATION_ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipTo',name:'SHIP TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'납품처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndTelNo',name:'수요가전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dlvyPlCd',name:'납품처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dlvyPlNm',name:'납품처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesPicNm',name:'영업담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesPicTelNo',name:'영업담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrUseClsCd',name:'오더사용구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCnt',name:'품명개수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transPath',name:'운송 경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'총중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transAgencyCoNo',name:'운송대행업체번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsClsCd',name:'상태구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spClsCd',name:'SP구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expCntyCd',name:'수출국코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expCntyNm',name:'수출국명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptPortCd',name:'출발항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptPortNm',name:'출발항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'forwardCoCd',name:'포워드사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onRealWt',name:'상차계근량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offRealWt',name:'하차계근량',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_updateOP323',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'docCd',name:'문서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemCd',name:'항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideCd',name:'외부코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.ds.tp.kpx.RetrieveKpxOrderPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_orderSearch","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBizLondCd',action:'/ncall.ds.tp.kpx.RetrieveEdiMappingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_ediMappingSearch","key":"IN_DS1"},{"id":"ds_coCd","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_coCd","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveBizLondCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_updateOP323',action:'/ncall.ds.tp.kpx.UpdateOP323CMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_updateOP323","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 간단하게 체크하면 그리드 컬럼이 동적으로 변경되어 개인화 버튼 안보이게 함

scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자
scwin.strPreDate = $c.date.addDate($p, scwin.strCurDate, -7); // 1주전

scwin.userId = $c.data.getMemInfo($p, "userId");
scwin.docCd = "COMPANY_001"; // 문서코드 - 자회사종류
scwin.wrkPlCd = "999"; // 작업장코드 
scwin.itemCd = "COMPANY"; // 항목코드 
scwin.clntNo = "247741";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // EDI MAPPING 조회 조건 SET
  dma_ediMappingSearch.set("clntNo", scwin.clntNo); // 거래처번호
  dma_ediMappingSearch.set("docCd", scwin.docCd); // 문서코드
  dma_ediMappingSearch.set("wrkPlCd", scwin.wrkPlCd); // 작업장코드
  dma_ediMappingSearch.set("itemCd", scwin.itemCd); // 항목코드

  $c.sbm.execute($p, sbm_retrieveBizLondCd); //자회사코드조회        
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    // 초기화
    scwin.f_defaultValue();

    // 테스트 데이터
    // ed_odrFromDt.setValue("20200101");
    // ed_odrToDt.setValue("20200101");
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
  var diffObj = await $c.gus.cfDifferBetween($p, ed_odrFromDt.getValue(), ed_odrToDt.getValue());

  // 오더기간이 1달 이상인경우 확인
  if (diffObj.year > 0 || diffObj.month > 0) {
    let confirm = await $c.win.confirm($p, "오더기간 이 1개월이 넘습니다.조회하시겠습니까?");
    if (!confirm) {
      ed_odrFromDt.focus();
      return false;
    }
  }
  dma_orderSearch.set("clntNo", scwin.clntNo); // 거래처번호

  $c.sbm.execute($p, sbm_retrieve);
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
// GRID에서 선택된 오더요청처리 : 해당 오더요청처리 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_orderRequestProcess = async function () {
  var row = ds_result.getRowPosition();
  var strOrderRequestProcessUrl = "/ui/ds/tp/kpx/tp_801_01_04b.xml"; //"KPX오더요청등록" // tp_801_01_01t 에서 tp_801_01_04b로 수정
  var strOrderRequestProcessUrl2 = "/ui/ds/tp/kpx/tp_801_01_05b.xml"; //"KPX수출일반 오더(C4)"
  var strOrderRequestProcessUrl3 = "/ui/ds/tp/kpx/tp_801_01_08b.xml"; // "KPX수입일반 오더(C2)"
  var pgmId1 = "tp_801_01_04b.jsp"; //"KPX오더요청등록"
  var pgmId2 = "tp_801_01_05b.jsp"; //"KPX수출일반 오더(C4)"
  var pgmId3 = "tp_801_01_08b.jsp"; // "KPX수입일반 오더(C2)"

  if (row > -1) {
    // 선택된 오더 정보 : 거래처, 화주오더종류, 화주오더번호, 당사오더번호
    var v_repClntNo = ds_result.getCellData(row, "repClntNo");
    var v_clntNo = ds_result.getCellData(row, "clntNo");
    var v_clntNm = ds_result.getCellData(row, "clntNm");
    var v_odrKndCd = ds_result.getCellData(row, "mchtOdrKndCd");
    var v_mchtOdrNo = ds_result.getCellData(row, "mchtOdrNo");
    var v_mcommchtOdrNo = ds_result.getCellData(row, "mcommchtOdrNo");
    var v_logSeq = ds_result.getCellData(row, "logSeq");
    var v_mcomOdrNo = ds_result.getCellData(row, "mcomOdrNo");
    var paramObj = null;

    //20171221 kpx tplAgrcoClsCd 1: 내수출고 / 4 : 수출출고 / 5 : 수입 / 7 : Local수출
    if (ds_result.getCellData(row, "mchtOdrKndCd") == "j" && ds_result.getCellData(row, "tplAgrcoClsCd") == "수입") {
      if ($c.gus.cfIsNull($p, v_repClntNo)) v_repClntNo = v_clntNo;
      paramObj = {
        repClntNo: v_repClntNo,
        clntNo: v_clntNo,
        mchtOdrNo: v_mchtOdrNo,
        mcomOdrNo: v_mcomOdrNo,
        type: "retrieve"
      };
      $c.win.openMenu($p, "KPX수입일반 오더(C2)", strOrderRequestProcessUrl3, pgmId3, paramObj);
    } else if (ds_result.getCellData(row, "mchtOdrKndCd") == "j") {
      if ($c.gus.cfIsNull($p, v_repClntNo)) v_repClntNo = v_clntNo;
      paramObj = {
        repClntNo: v_repClntNo,
        clntNo: v_clntNo,
        mchtOdrNo: v_mchtOdrNo,
        mcomOdrNo: v_mcomOdrNo,
        type: "retrieve"
      };
      $c.win.openMenu($p, "KPX수출일반 오더(C4)", strOrderRequestProcessUrl2, pgmId2, paramObj);
    } else {
      if ($c.gus.cfIsNull($p, v_repClntNo)) v_repClntNo = v_clntNo;
      paramObj = {
        repClntNo: v_repClntNo,
        clntNo: v_clntNo,
        clntNm: v_clntNm,
        mchtOdrKndCd: v_odrKndCd,
        mchtOdrNo: v_mchtOdrNo,
        mcommchtOdrNo: v_mcommchtOdrNo,
        logSeq: v_logSeq,
        //20171221 kpx logseq 관련 추가
        type: "retrieve"
      };

      //20150413 다음페이지에서 해당관련 오류가 발생하여, alert추가
      if ($c.gus.cfIsNull($p, v_clntNo)) {
        let ret = await $c.win.confirm($p, "출/도착코드에 관한 거래처가 등록되어있지 않습니다.<br>등록하시겠습니까?");
        if (ret) {
          scwin.f_UpdateOP323();
        } else {
          return;
        }
      }
      $c.win.openMenu($p, "KPX오더요청등록", strOrderRequestProcessUrl, pgmId1, paramObj);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("오더요청현황"));
    return;
  }
};

//-------------------------------------------------------------------------
// OP323 정보변경
//-------------------------------------------------------------------------
scwin.f_UpdateOP323 = function () {
  var osideCd = "";
  if (ds_result.getCellData(ds_result.getRowPosition(), "transAgencyCoNo") == "반품") {
    osideCd = ds_result.getCellData(ds_result.getRowPosition(), "tplZip"); //반품일경우 tplZip
  } else {
    osideCd = ds_result.getCellData(ds_result.getRowPosition(), "bizLongCd"); //아니면 bizLongCd
  }
  ds_updateOP323.setCellData(0, "docCd", "117299");
  ds_updateOP323.setCellData(0, "modId", scwin.userId);
  ds_updateOP323.setCellData(0, "clntNo", ds_result.getCellData(ds_result.getRowPosition(), "repClntNo"));
  ds_updateOP323.setCellData(0, "wrkPlCd", "999");
  ds_updateOP323.setCellData(0, "itemCd", "BIZ");
  ds_updateOP323.setCellData(0, "osideCd", osideCd);
  $c.sbm.execute($p, sbm_updateOP323);
};

//-------------------------------------------------------------------------
// GRID에서 선택된 오더별 작업현황  : 해당 화주오더별 작업현황 페이지로 이동 : 사용자 구분이 화주인 경우
//-------------------------------------------------------------------------
scwin.f_merchantOrderEachWorkPresentCondition = function () {
  var row = ds_result.getRowPosition();
  var strUrl = "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_01b.xml";
  var pgmId = "as_102_01_01b.jsp";
  if (row > 0) {
    var v_repClntNo = ds_result.getCellData(row, "repClntNo");
    var v_clntNo = ds_result.getCellData(row, "clntNo");
    var v_mchtOdrNo = ds_result.getCellData(row, "mchtOdrNo");
    var v_odrKndCd = ds_result.getCellData(row, "odrKndCd");
    if ($c.gus.cfIsNull($p, v_repClntNo)) {
      v_repClntNo = v_clntNo;
    }
    let paramObj = {
      clntNo: +v_repClntNo,
      mchtOdrNo: +v_mchtOdrNo,
      odrKndCd: +v_odrKndCd
    };
    $c.win.openMenu($p, "화주오더별작업현황", strUrl, pgmId, paramObj);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("오더요청현황"));
    return;
  }
};

//-------------------------------------------------------------------------
// 간단하게 체크 박스 클릭
//-------------------------------------------------------------------------
scwin.f_setGrid = function () {
  if (cbx_sp.getValue() == "1") {
    gr_result.setColumnVisible("salesPicTelNo", false);
    gr_result.setColumnVisible("mchtOdrKndCd", false);
    gr_result.setColumnVisible("coNm", false);
    gr_result.setColumnVisible("bizLongNm", false);
    gr_result.setColumnVisible("tplMchtReqDt", false);
    gr_result.setColumnVisible("arvIntendDt", false);
    gr_result.setColumnVisible("dtlAddr1", false);
    gr_result.setColumnVisible("accp", false);
    gr_result.setColumnVisible("tplTelNo", false);
  } else {
    gr_result.setColumnVisible("salesPicTelNo", true);
    gr_result.setColumnVisible("mchtOdrKndCd", true);
    gr_result.setColumnVisible("coNm", true);
    gr_result.setColumnVisible("bizLongNm", true);
    gr_result.setColumnVisible("tplMchtReqDt", true);
    gr_result.setColumnVisible("arvIntendDt", true);
    gr_result.setColumnVisible("dtlAddr1", true);
    gr_result.setColumnVisible("accp", true);
    gr_result.setColumnVisible("tplTelNo", true);
  }
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows.setValue(ds_result.getRowCount());
  if (ds_result.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, new Array("조회결과"));
  } else {
    var spClsCd = "";
    gr_result.setFocusedCell(0, 0, false); //edit : true

    for (var row = 0; row < gr_result.getTotalRow(); row++) {
      spClsCd = ds_result.getCellData(row, "spClsCd");
      for (var col = 0; col < gr_result.getTotalCol(); col++) {
        // 미확정일때 그리드 cell color SET
        if (spClsCd == "U") {
          gr_result.setCellStyle(row, col, "background-color", "orange");
        }
        if (spClsCd == "D") {
          gr_result.setCellStyle(row, col, "background-color", "#acacac"); // ASIS : gray 
        } else {
          gr_result.setCellStyle(row, col, "background-color", "white");
        }
      }
      var mcomOdrNo = ds_result.getCellData(row, "mcomOdrNo");
      if (mcomOdrNo == "") {
        gr_result.setCellStyle(row, "mchtOdrNo", "color", "red");
      } else {
        gr_result.setCellStyle(row, "mchtOdrNo", "color", "blue");
      }
    }
    ds_result.setRowPosition(0);
  }
};

//-------------------------------------------------------------------------
// 자회사종류 조회 submitdone
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
// 그리드 더블 클릭 
// ASIS : gr_result event=OnDblClick(row,colid)
//-------------------------------------------------------------------------
scwin.gr_result_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (ds_result.getCellData(rowIndex, "spClsCd") != "D") {
    scwin.f_orderRequestProcess();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자회사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',chooseOptionLabel:'전체',class:'col5',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'value delim label',id:'lc_coCd',objType:'data',ref:'data:dma_orderSearch.coCd',style:'width:150px;',submenuSize:'auto',sortOption:'value'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_coCd'},E:[{T:1,N:'xf:label',A:{ref:'osideCdNm'}},{T:1,N:'xf:value',A:{ref:'osideCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'acb_gubun',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_orderSearch.gubun'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'입차요청일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'dma_orderSearch',refEdDt:'odrToDt',refStDt:'odrFromDt',style:'',edFromId:'ed_odrFromDt',edToId:'ed_odrToDt',mandatoryTo:'true',mandatoryFrom:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mchtOdrNo',placeholder:'',style:'width:150px;',maxlength:'20',ref:'data:dma_orderSearch.mchtOdrNo'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_odrDcsnYn',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_orderSearch.odrDcsnYn',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_mchtOdrKndCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_orderSearch.mchtOdrKndCd',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'카고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'c'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'탱크로리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'s'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'j'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'택배'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'p'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_defaultValue'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더요청현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_sp',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onviewchange':'scwin.f_setGrid'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'간단하게'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',grdDownOpts:'{"fileName":"오더요청현황.xlsx","sheetName":"오더요청현황","type":"4+8+16"}',gridID:'gr_result',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_result',id:'gr_result',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_result_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'화주<br/>오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'오더<br/>순번',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'운송<br/>구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'운송<br/>구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'자회사명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'출지명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'착지명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'주문<br/>구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'오더일자',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column63',value:'입차요청일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column61',value:'하차요청일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'발주처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'납품처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'납품처주소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column53',value:'납품처담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column51',value:'납품처핸드폰',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column49',value:'제품명<br/>(포장수량/구분/단위명)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'출하수량<br/>(kg)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column45',value:'국가명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'선적항명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',value:'C/N<br/>종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',value:'C/N<br/>수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',value:'긴급<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',value:'작업<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'운송특이사항',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'동부오더<br/>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'동부오더<br/>생성일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',value:'동부오더<br/>생성ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'상차계근량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'하차계근량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'거래처명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtOdrNo',inputType:'text',width:'100',class:'underline',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'logSeq',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'salesPicTelNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtOdrKndCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmndTelNo',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coNm',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizLongNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tplZipNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tplAgrcoClsCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrDt',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'tplMchtReqDt',displayMode:'label',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvIntendDt',displayMode:'label',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tplClntMktDay',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dlvyPlNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dtlAddr1',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'accp',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'tplTelNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'commCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'grossWt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'expCntyNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptPortNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'tplPgmId',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'commCnt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'forwardCoCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'spClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'transPath',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mcomOdrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'odrCreatDt',displayMode:'label',displayFormat:'yyyy/MM/dd HH:mm',ioFormat:'yyyyMMddHHmmss',dataType:'date'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'odrCreatId',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onRealWt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offRealWt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'repClntNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})