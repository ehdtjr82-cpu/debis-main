/*amd /ui/ds/op/wrkrslts/cfsexprslts/op_309_02_01b.xml 63940 b073ca6f48888a055e3c161a0bcb6b1426f42df6bc38d81ef1b710cc944e1930 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'입고일자 From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'completeDt',name:'입고일자 To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'Line',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inOutClsCd',name:'입출고 상태',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'inStdDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfsLineCd',name:'라인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'LINE명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfsMchtClntNo',name:'실화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfsMchtNm',name:'실화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioNo',name:'입고/번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfsInMgntNo',name:'입고/관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outStsCd',name:'입출고/상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockMgntNo',name:'재고/관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockClntNo',name:'청구거래처/코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockClntNm',name:'청구거래처/명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsQty',name:'수량',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'중량/(kg)',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rsltsCbm',name:'용적',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rsltsRton',name:'RTON',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfsUnitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'conClntNo',name:'콘솔업체코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'conClntNm',name:'콘솔업체명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'재고/수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'재고/중량(kg)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockCbm',name:'재고/용적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lblock',name:'BLOCK',dataType:'text'}},{T:1,N:'w2:column',A:{id:'measureYn',name:'측정/여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransDeclarYn',name:'신고/여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clpNo',name:'clpNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selcYn',name:'selcYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inQty',name:'inQty',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inWt',name:'inWt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inCbm',name:'inCbm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkQty',name:'wrkQty',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkWt',name:'wrkWt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkCbm',name:'wrkCbm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inNo',name:'inNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'odrNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'commSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'wrkPathSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'wrkStpSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dvnRateStdRgn',name:'dvnRateStdRgn',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_lBlock'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'blckCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_cndCtrtNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtClntNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieveBlockCMD'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultBlockCMD',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.cfsexprslts.RegistCfsExportStockCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_results","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_save_submit','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.cfsexprslts.RetrieveCfsExportStockCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_retrieve_submit','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtNo2',action:'/ds.sd.odrmgnt.odrreg.RetrieveBilgClntNoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cndCtrtNo","key":"IN_DS1"},{"id":"ds_ctrtNo2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrtNo2","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_retrieveCtrtNo2_submit','ev:submitdone':'scwin.sbm_retrieveCtrtNo2_submitdone','ev:submiterror':'scwin.sbm_retrieveCtrtNo2_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBlockCmd',action:'/ds.op.wrkrslts.cfsexprslts.RetrieveBlockCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_retrieveBlockCMD',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveBlockCmd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_309_02_01b
// 이름     : CFS수출입고등록
// 경로     : 물류/작업실적/CFS/
// 작 성 자 : 조성빈
// 작 업 일 : 2025-12-10
// 사용계정 : 
// 비고     : 
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//            op_302_01_16b(세관 반입 신고 등록) - 보세운송반입신고 버튼 클릭
//            op_309_02_05p() - 그리드 더블 클릭
//==================================================================================================================
// 6F02 2020/01/01 2020/01/02 EAS
scwin.gap;
scwin.row_gap;
scwin.arrRtnVal;
scwin.dateStrMonth;
scwin.dateStrDay;
scwin.save_del_gubun;
scwin.loginId;
scwin.onpageload = function () {
  scwin.gap = false;
  scwin.row_gap = false;
  scwin.arrRtnVal = new Array(); // Return Value
  scwin.dateStrMonth = $c.date.getServerDateTime($p, "yyyyMM");
  scwin.dateStrDay = $c.date.getServerDateTime($p, "YYYYMMdd");
  scwin.save_del_gubun = "";
  scwin.loginId = $c.data.getMemInfo($p, "userId");
  const codeOptions = [{
    grpCd: "LO102",
    compID: "gr_results:cfsUnitCd",
    useLocalCache: true
  } // 단위
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_createSearchHeader();
    scwin.f_EventInit();
    scwin.f_FieldClear();
    ds_search.set("stDt", scwin.dateStrMonth + "01");
    ds_search.set("completeDt", scwin.dateStrDay);
    ed_wrkPlCd.focus();

    // $p.setTimeout(function() {
    //     // ed_wrkPlCd.setValue("6F02")
    //     // ed_stDt.setValue("20181001")
    //     // ed_completeDt.setValue("20181030")

    //     ed_wrkPlCd.setValue("6F02")
    //     ed_stDt.setValue("20200101")
    //     ed_completeDt.setValue("20200102")
    //     ed_lineCd.setValue("EAS")
    // }, {"delay":50});
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// function name : f_createSearchHeader
// function desc : 조회조건 Header정보 Setting
//-------------------------------------------------------------------------
scwin.f_createSearchHeader = function () {
  ds_search.set("stDt", scwin.dateStrMonth + "01");
  ds_search.set("completeDt", scwin.dateStrDay);
  ds_search.set("wrkPlCd", "");
  ds_search.set("lineCd", "");
  ds_search.set("inOutClsCd", "");
};

//-------------------------------------------------------------------------
// 버튼 감추기
//-------------------------------------------------------------------------
scwin.f_EventInit = function () {
  $c.gus.cfDisableBtnOnly($p, [btn_save, btn_addRow, btn_deleteRow, btn_cancel, btn_ediCall, btn_copyRow]);
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  //lc_wrkPlCd.Index = 0;
  ed_wrkPlCd.setValue("");
  ds_search.set("stDt", scwin.dateStrMonth + "01");
  ds_search.set("completeDt", scwin.dateStrDay);
  ed_stDt.focus();
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  var row = $c.data.insertRow($p, gr_results);
  ds_results.setCellData(row, "inStdDt", scwin.dateStrDay);
  ds_results.setCellData(row, "wrkPlCd", ed_wrkPlCd.getValue());
  ds_results.setCellData(row, "outStsCd", "0");
  ds_results.setCellData(row, "commCd", "30000042");
  ds_results.setCellData(row, "commNm", "팔레트기타");
  ds_results.setCellData(row, "cfsUnitCd", "E/A");
  ds_results.setCellData(row, "rsltsQty", "0");
  ds_results.setCellData(row, "rsltsWt", "0");
  ds_results.setCellData(row, "rsltsCbm", "0");
  ds_results.setCellData(row, "rsltsRton", "0");
  ds_results.setCellData(row, "stockQty", "0");
  ds_results.setCellData(row, "stockWt", "0");
  ds_results.setCellData(row, "stockCbm", "0");

  //그리드 활성화 여부
  scwin.f_Visibility(row);
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = async function () {
  var row = ds_results.getRowPosition();
  if (ds_results.getCellData(row, "outStsCd") == "1") {
    await $c.win.alert($p, "출고진행 건은 삭제할 수 없습니다");
    return;
  } else if (ds_results.getCellData(row, "outStsCd") == "2") {
    await $c.win.alert($p, "출고완료되었습니다");
    return;
  } else {
    $c.data.deleteRow($p, ds_results);
  }
  //황창기        
  if (ds_results.getCellData(row, "measureYn") == "1") {
    await $c.win.alert($p, "Console용 규격이 존재합니다. \n Console용 규격등록 팝업창에서 삭제 하세요 ");
    ds_results.undoRow(row);
    return;
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  ds_results.undoAll();
  //f_switchObjMode(7);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  var sEd_stDt = ed_stDt.getValue();
  var sEd_completeDt = ed_completeDt.getValue();
  if (ed_wrkPlCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["작업장 "]);
    return;
  }
  if (!$c.gus.cfValidate($p, sEd_stDt, "minNumber=19000101")) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["작업일자From"]); //을(를) 입력하십시오.
    ed_stDt.setValue("");
    ed_stDt.focus();
    return;
  }
  if (!$c.gus.cfValidate($p, sEd_completeDt, "minNumber=19000101")) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["작업일자To"]); //을(를) 입력하십시오.
    ed_completeDt.setValue("");
    ed_completeDt.focus();
    return;
  }
  if (sEd_stDt > sEd_completeDt) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); //시작일자를 종료일자 이전으로 선택[입력]하여주십시요.
    ds_search.set("stDt", scwin.dateStrMonth + "01");
    ds_search.set("completeDt", scwin.dateStrDay);
    ed_stDt.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
//저장 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_results.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_001, ["CFS수출재고정보"]);
    return;
  }
  // 필수 입력 체크
  // ,rsltsCbm:용적:yes::
  // ,rsltsQty:수량:yes::
  var valRs = await $c.gus.cfValidate($p, [gr_results]);
  if (!valRs) {
    return;
  }
  //황창기 콘솔업체명이 존재할경우 수량,용적 없이도 저장가능
  for (var i = 0; i < ds_results.getRowCount(); i++) {
    //입력이나 수정시 알톤저장 쿼리로?
    if (ds_results.getRowStatus(i) == "C" || ds_results.getRowStatus(i) == "U") {
      if (ds_results.getCellData(i, "outStsCd") == "1") {
        await $c.win.alert($p, "출고진행 건은 수정 할 수 없습니다");
        return;
      } else if (ds_results.getCellData(i, "outStsCd") == "2") {
        await $c.win.alert($p, "출고완료되었습니다");
        return;
      }
      if (!$c.gus.cfValidate($p, ds_results.getCellData(i, "inStdDt"), "minNumber=19000101")) {
        await $c.win.alert($p, "입고일자 형식이 잘못되었습니다.");
        return;
      }
      if ($c.gus.cfIsNull($p, ds_results.getCellData(i, "conClntNm"))) {
        if ($c.gus.cfIsNull($p, ds_results.getCellData(i, "rsltsQty"))) {
          await $c.win.alert($p, i + "번째의  수량은 필수입력값입니다.");
          return;
        }
        if ($c.gus.cfIsNull($p, ds_results.getCellData(i, "rsltsCbm"))) {
          await $c.win.alert($p, i + "번째의  용적은 필수입력값입니다.");
          return;
        }
        if (ds_results.getCellData(i, "rsltsQty") <= 0 || ds_results.getCellData(i, "rsltsWt") <= 0 || ds_results.getCellData(i, "rsltsCbm") <= 0) {
          await $c.win.alert($p, "수량,중량,용적은 0  이하를  입력할 수 없습니다.");
          return;
        }
      } else {
        if (ds_results.getCellData(i, "rsltsWt") <= 0) {
          await $c.win.alert($p, "중량 0 이하를  입력할 수 없습니다.");
          return;
        }
        //if(ds_results.rowStatus(i )== "1"){
        //	if(ds_results.NameValue(i, "rsltsQty") == "0" ){
        //		ds_results.NameValue(i,"rsltsQty") = "1";
        //	}
        //	if(ds_results.NameValue(i,"rsltsCbm") == "0"){
        //		ds_results.NameValue(i,"rsltsCbm") = "1";	
        //	}
        //}
      }
    }
  }
  var ret = await $c.win.confirm($p, "저장하시겠습니까?");
  if (ret) {
    // pos_groupCode = ds_results.RowPosition;  // 저장 전의 위치 저장
    //dataSetDebug(ds_results, true);
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  switch (disGubun) {
    case 1:
      // LINE
      udc_lineCd.cfCommonPopUp(scwin.udc_lineCd_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , "T" // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
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
      , "LINE,LINE코드,LINE명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // LINE
      pCode = ds_results.getCellData(ds_results.getRowPosition(), "cfsLineCd").replace(/\s*$/, '');
      pName = ds_results.getCellData(ds_results.getRowPosition(), "lineNm").replace(/\s*$/, '');
      param = "";
      // retrieveLineInfoList                
      udc_gridCfsLine.cfCommonPopUp(scwin.udc_gridCfsLine_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , "T" // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
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
      , "LINE,LINE코드,LINE명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // // 청구처
      pCode = ds_results.getCellData(ds_results.getRowPosition(), "stockClntNo").replace(/\s*$/, '');
      pName = ds_results.getCellData(ds_results.getRowPosition(), "stockClntNm").replace(/\s*$/, '');
      //alert(' length:' + pName.length);
      if (pName.length = $c.gus.cfisNumberCnt($p, pName)) {
        pCode = ds_results.getCellData(ds_results.getRowPosition(), "stockClntNm").replace(/\s*$/, '');
        pName = "";
      }
      param = "";
      // retrieveClntInfo
      udc_gridStockClnt.cfCommonPopUp(scwin.udc_gridStockClnt_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , "T" // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '9', "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,", '100,100,0,120,100,0,100,100,100,0', "3,10", 'LOGISCLNT1,,CTRT,0', '800', '600', null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")
      , null
      //,"청구거래처,거래처코드,거래처명"				// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      //품명(grid)
      pCode = ds_results.getCellData(ds_results.getRowPosition(), "commCd").replace(/\s*$/, '');
      pName = ds_results.getCellData(ds_results.getRowPosition(), "commNm").replace(/\s*$/, '');
      param = "2,4,,,,C1";
      /*
       *			파라메터명		  설명														Default		(예)
       *			-----------------------------------------------------------------------------------------------------
       *			1)  pSelectID  		: XML상의 SELECT ID											NotNull		"retrieveClntInfo"
       *			2)  pCode			: 화면에서의 ??? Code Element의	Value						null		"1234"
       *			3)  pName			: 화면에서의 ??? Name Element의	Value						null		"동부"
       *			4)  pWinCloseTF		: 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)	null(F)		"T","F"
       *			5)  pDispCnt		: 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10			null(2)		"5"
       *			6)  pTitle			: Title명's													null		"100,200"
       *			7)  pWidth			: 보여주는 각 컬럼들의 폭											null		"100,200"
       *			8)  pHidden			: 컬럼중에서 숨기는	컬럼 지정										null		"7,8,9,10"
       *			9)  pWhere			: SQL절의 WHERE절에	원하는 조건을 선택함 MAX:6개까지 가능			null		"SHIP"
       *			10) pW				: POP-UP뛰을때 원도우의	사용자 정의	폭							null		"500"
       *			11) pH				: POP-UP뛰을때 우도우의	사용자 정의	높이							null		"600"
       *			12) pTop			: 윈도우 위치 Y좌표												null		"10"
       *			13) pLeft			: 윈도우 위치 X좌표												null		"10"
       *			14) pExistTF		: 중복체크여부													null		"F"
       *			15) pAllSearchTF	: 전체검색허용여부												null		"F"
       *			16) pWtitleSearch	: POP-UP Window Title 검색어1,2(각화면에서 변경할경우)   			null		"Win타이틀,검색어1,검색어2"
       */
      // retrieveCommInfo                
      udc_gridComm.cfCommonPopUp(scwin.udc_gridComm_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , 'T' // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '3' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , '품목／품명코드,품목／품명,구분' // Title순서	
      , '120,170,70' // 보여주는 각 컬럼들의 폭	
      , '4,5,6,7,8,9,10' // 컬럼중에서 숨기는	컬럼 지정	
      , param // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '440' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null, 'F', '품목／품명,품목／품명코드,품목／품명');
      break;
    case 7:
      //작업장코드
      udc_wrkPlCd.cfCommonPopUp(scwin.udc_wrkPlCd_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의    Value
      , pName // 화면에서의 ??? Name Element의    Value
      , "T" // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는    컬럼 지정
      , 'F' // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의    사용자 정의 폭
      , null // POP-UP뛰을때 우도우의    사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 5:
      //황창기  콘솔업체
      pCode = ds_results.getCellData(ds_results.getRowPosition(), "conClntNo").replace(/\s*$/, '');
      pName = ds_results.getCellData(ds_results.getRowPosition(), "conClntNm").replace(/\s*$/, '');
      //alert(' length:' + pName.length);
      if (pName.length = $c.gus.cfisNumberCnt($p, pName)) {
        pCode = ds_results.getCellData(ds_results.getRowPosition(), "conClntNm").replace(/\s*$/, '');
        pName = "";
      }
      param = "";
      // retrieveClntInfo
      udc_gridConClnt.cfCommonPopUp(scwin.udc_gridConClnt_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , "T" // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '9', "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,", '100,100,0,120,100,0,100,100,100,0', "3,10", 'LOGISCLNT1,,CTRT,0', '800', '600', null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")
      , null
      //,"청구거래처,거래처코드,거래처명"				// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  //alert(cfCanOpenPopup(inObj, pairObj) + "/" + inObj.hidVal + "/" + pairObj.hidVal);
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
// 그리드 visibility 
//-------------------------------------------------------------------------
scwin.f_Visibility = function (row) {
  if (ds_results.getCellData(row, "outStsCd") != "0") {
    gr_results.setReadOnly("cell", row, 'stockMgntNo', true);
    gr_results.setReadOnly("cell", row, 'outStsCd', true);
    gr_results.setReadOnly("cell", row, 'inStdDt', true);
    gr_results.setReadOnly("cell", row, 'commNm', true);
    gr_results.setReadOnly("cell", row, 'stockClntNm', true);
    gr_results.setReadOnly("cell", row, 'rsltsQty', true);
    gr_results.setReadOnly("cell", row, 'rsltsWt', true);
    gr_results.setReadOnly("cell", row, 'rsltsCbm', true);
    gr_results.setReadOnly("cell", row, 'cfsUnitCd', true);
    gr_results.setReadOnly("cell", row, 'cfsInMgntNo', true);
    gr_results.setReadOnly("cell", row, 'lineNm', true);
    gr_results.setReadOnly("cell", row, 'lblock', true);
    gr_results.setReadOnly("cell", row, 'cfsMchtNm', true);
    gr_results.setReadOnly("cell", row, 'bondTransDeclarYn', true);
    gr_results.setReadOnly("cell", row, 'blNo', true);
    gr_results.setReadOnly("cell", row, 'conClntNm', true);
    gr_results.setReadOnly("cell", row, 'rmk', true);
  } else {
    gr_results.setReadOnly("cell", row, 'stockMgntNo', true);
    gr_results.setReadOnly("cell", row, 'outStsCd', true);
    gr_results.setReadOnly("cell", row, 'inStdDt', false);
    gr_results.setReadOnly("cell", row, 'commNm', false);
    gr_results.setReadOnly("cell", row, 'stockClntNm', false);
    gr_results.setReadOnly("cell", row, 'rsltsQty', false);
    gr_results.setReadOnly("cell", row, 'rsltsWt', false);
    gr_results.setReadOnly("cell", row, 'rsltsCbm', false);
    gr_results.setReadOnly("cell", row, 'cfsUnitCd', false);
    // gr_results.setReadOnly("column", 'cfsInMgntNo','Edit')	= "Upper";
    // gr_results.setReadOnly("column", 'lineNm','Edit')		= "Upper";
    gr_results.setReadOnly("cell", row, 'cfsInMgntNo', false);
    gr_results.setReadOnly("cell", row, 'lineNm', false);
    gr_results.setReadOnly("cell", row, 'lblock', false);
    gr_results.setReadOnly("cell", row, 'cfsMchtNm', false);
    gr_results.setReadOnly("cell", row, 'bondTransDeclarYn', false);
    // gr_results.setReadOnly("column", 'blNo','Edit');		= "Upper";
    gr_results.setReadOnly("cell", row, 'blNo', 'Edit', false);
    gr_results.setReadOnly("cell", row, 'conClntNm', false);
    gr_results.setReadOnly("cell", row, 'rmk', false);

    //황창기 measureYn = 1 이면  수량용적 수정못하게 막는다
    if (ds_results.getCellData(row, 'measureYn') == 1) {
      gr_results.setReadOnly("cell", row, 'rsltsQty', true);
      gr_results.setReadOnly("cell", row, 'rsltsCbm', true);
    } else {
      gr_results.setReadOnly("cell", row, 'rsltsQty', false);
      gr_results.setReadOnly("cell", row, 'rsltsCbm', false);
    }
  }
};

//-------------------------------------------------------------------------
// EDI 호출
//-------------------------------------------------------------------------
scwin.f_EdiCall = function () {
  // var row = ds_results.RowPosition;
  var row = ds_results.getRowPosition();
  if (ds_results.getCellData(row, "bondTransDeclarYn") == "1") {
    //신고 완료 
    $c.win.alert($p, "이미 신고를 했습니다.");
    return;
  } else {
    /*if(ds_results.NameValue( row, "blNo" ) == ""){
        alert("BL번호를 넣어주십시오.");
        return;
    }*/
    // var win_url = "/ds/op/wrkrslts/yardwrkrslts/op_302_01_16b.jsp?"
    //     + "odrNo=&mrn=&msn=&hsn=" 
    //     + "&blNo="    + ds_results.NameValue( row, "blNo" )
    //     + "&wrkPlCd=" + ed_wrkPlCd.Text
    //     + "&wrkPlNm=" + ed_wrkPlNm.value
    //     + "&cntrBulk=B"   ;//컨테이너/벌크여부
    // var xwidth  = "1000";
    // var yheight = "550";
    // var xloc = screen.width/2 - xwidth/2;
    // var yloc = screen.height/2 - yheight/2;
    //var win_style = "left="+xloc+",top="+yloc+",toolbar=no, location=no, directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width="+xwidth+",height="+yheight;
    // var win_name = "POPUPWIN";
    //win = window.open(win_url, win_name, win_style);
    // var rtnValues = window.showModalDialog (win_url, "", "dialogWidth:1010px; dialogHeight:580px; status:No");

    let win_url = "/ui/ds/op/wrkrslts/yardwrkrslts/op_302_01_16b.xml";
    let data = {
      "odrNo": "",
      "mrn": "",
      "msn": "",
      "hsn": "",
      "blNo": ds_results.getCellData(row, "blNo"),
      "wrkPlCd": ed_wrkPlCd.getValue(),
      "wrkPlNm": ed_wrkPlNm.getValue(),
      "cntrBulk": "B" //컨테이너/벌크여부
    };
    let opts = {
      id: "ediCallPop",
      popupName: "세관 반입 신고 등록",
      modal: true,
      type: "browserPopup",
      width: 1300,
      height: 700,
      title: "세관 반입 신고 등록"
    };
    $c.win.openPopup($p, win_url, opts, data);
  } //end if~else
};

//-------------------------------------------------------------------------
// LBolck 가져오기
//-------------------------------------------------------------------------
scwin.f_retrieveGridLookup = function () {
  ds_retrieveBlockCMD.set("wrkPlCd", ed_wrkPlCd.getValue());
  $c.sbm.execute($p, sbm_retrieveBlockCmd);
  //컨테이너 SIZE
  // ds_lBlock.DataID = "/ds.op.wrkrslts.cfsexprslts.RetrieveBlockCMD.do?wrkPlCd="+ed_wrkPlCd.text;
  // ds_lBlock.Reset();
};

//---------------------------------------------------------------------------------
// 청구처 조회해서 관리거래처 체크 
//---------------------------------------------------------------------------------
scwin.f_retrieveCtrtNo2 = function () {
  // 청구거래처 번호
  ds_cndCtrtNo.set("ctrtClntNo", "");
  //검색조건값 세팅
  //청구거래처
  ds_cndCtrtNo.set("ctrtClntNo", ds_results.getCellData(ds_results.getRowPosition(), "stockClntNo").replace(/\s*$/, ''));

  //조회	
  $c.sbm.execute($p, sbm_retrieveCtrtNo2);
};
scwin.f_openConsolItem = async function (qStr, wpc, stats, commcd) {
  let win_url = "/ui/ds/op/wrkrslts/cfsexprslts/op_309_02_05p.xml";
  let data = {
    wrkPlCd: wpc,
    commCd: commcd,
    ioNo: qStr,
    outStsCd: stats
  };
  let opts = {
    id: "Pop",
    popupName: "",
    modal: true,
    type: "browserPopup",
    width: 840,
    height: 400,
    title: ""
  };
  // 2026-04-10 박주령PM님
  // 해당팝업화면 호출이 2024년 2월이 마지막이력으로 확인됩니다.
  // TOBE에서는 메인화면에서 팝업이 호출되지 않게 변경합니다.
  // var rtnVal = await $c.win.openPopup(win_url, opts, data);
  // if(rtnVal){
  //     scwin.f_Retrieve();
  // }
};

//-------------------------------------------------------------------------
// 행복사 황창기
//-------------------------------------------------------------------------
scwin.f_copyRow = function () {
  let row = ds_results.getRowPosition();
  ds_results.setRowData(ds_results.getRowCount(), ds_results.getRowData(row), false);
  ds_results.setRowPosition(ds_results.getRowCount() - 1);
  ds_results.setCellData(ds_results.getRowPosition(), "inStdDt", scwin.dateStrDay);
  ds_results.setCellData(ds_results.getRowPosition(), "measureYn", 0);
  ds_results.setCellData(ds_results.getRowPosition(), "ioNo", "");
  ds_results.setCellData(ds_results.getRowPosition(), "outStsCd", 0);
  ds_results.setCellData(ds_results.getRowPosition(), "rsltsQty", 0);
  ds_results.setCellData(ds_results.getRowPosition(), "rsltsWt", 0);
  ds_results.setCellData(ds_results.getRowPosition(), "rsltsCbm", 0);
  ds_results.setCellData(ds_results.getRowPosition(), "stockQty", 0);
  ds_results.setCellData(ds_results.getRowPosition(), "stockWt", 0);
  ds_results.setCellData(ds_results.getRowPosition(), "stockCbm", 0);
  ds_results.setCellData(ds_results.getRowPosition(), "rsltsRton", 0);
};
scwin.udc_wrkPlCd_onviewchangeNameEvent = async function (info) {
  await $c.gus.cfLimitByteLength($p, ed_wrkPlNm, 50);
  scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 7, false);
};
scwin.udc_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'F', 'T');
};
scwin.udc_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlNm, 7, true);
};
scwin.udc_wrkPlCd_callBackFunc = function (ref) {
  $c.gus.cfSetReturnValue($p, ref, ed_wrkPlCd, ed_wrkPlNm);
};
scwin.udc_lineCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lineNm, ed_lineCd, 1, false);
};
scwin.udc_lineCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_lineCd.getValue(), ed_lineNm.getValue(), 'F', 'F');
};
scwin.udc_lineCd_callBackFunc = function (ref) {
  $c.gus.cfSetReturnValue($p, ref, ed_lineCd, ed_lineNm);
};
scwin.udc_lineCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, ed_lineNm, 1, true);
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_copyRow_onclick = function (e) {
  scwin.f_copyRow();
};
scwin.btn_ediCall_onclick = function (e) {
  scwin.f_EdiCall();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.sbm_save_submit = function (e) {};
scwin.sbm_save_submitdone = async function (e) {
  rowFlag = ""; // 초기화	
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {};
scwin.sbm_retrieve_submit = function (e) {
  // ds_search.set("stDt", ed_stDt.getValue());
  // ds_search.set("completeDt", ed_completeDt.getValue());
  ds_search.set("wrkPlCd", ed_wrkPlCd.getValue());
  ds_search.set("lineCd", ed_lineCd.getValue());
  // ds_search.set("stockClntNo", ed_stockClntNo.getValue());
  ds_search.set("inOutClsCd", acb_inOutClsCd.getValue());
};
scwin.sbm_retrieve_submitdone = async function (e) {
  // cfHideDSWaitMsg(gr_results);
  var rowCnt = ds_results.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
  } else {
    gr_results.setFocusedCell(0, 0);
    ds_results.setRowPosition(0);
  }
  //황창기
  //else{
  //	for(var i=0 ; i <= ds_results.CountRow ; i++){
  //		if(cfIsNull(ds_results.NameValue(i, "rsltsRton")) || ds_results.NameValue(i, "rsltsRton") == 0){
  //			if(ds_results.NameValue(i, "rsltsWt")/1000 > ds_results.NameValue(i, "rsltsCbm")){
  //				ds_results.NameValue(i, "rsltsRton") = ds_results.NameValue(i,"rsltsWt")/1000;
  //			}else{
  //				ds_results.NameValue(i, "rsltsRton") = ds_results.NameValue(i,"rsltsCbm");
  //			}				
  //		}
  //	}		
  //}
  scwin.f_retrieveGridLookup();

  //황창기 최웅식과장님 요청으로 'c111111'아이디 보세운송신고등록 막음
  if (scwin.loginId == 'c111111') {
    $c.gus.cfEnableBtnOnly($p, [btn_save, btn_addRow, btn_deleteRow, btn_cancel, btn_copyRow]);
  } else {
    $c.gus.cfEnableBtnOnly($p, [btn_save, btn_addRow, btn_deleteRow, btn_cancel, btn_ediCall, btn_copyRow]);
  }
  //카운터 
  totalRows1.setValue(rowCnt);
  gr_results.setColumnStyle("ioNo", "text-decoration", "underline");
  gr_results.setColumnStyle("ioNo", "color", "blue");
  // gr_results.setColumnStyle("ioNo", "cursor", "pointer");

  // cfShowTotalRows(totalRows1, ds_results.CountRow);    
  // ds_search.UserStatus(1) = 1;
};
scwin.sbm_retrieve_submiterror = function (e) {
  // cfHideDSWaitMsg(gr_results);
};
scwin.gr_results_oncelldblclick = function (row, columnIndex, colid) {
  // OnDblClick(row,colid)
  // 황창기 현업요청으로 콘솔업체명 등록안해도 입력가능하게 수정 다시 살림
  if ($c.gus.cfIsNull($p, ds_results.getCellData(row, "conClntNm"))) {
    return;
  }
  var v_ioNo = ds_results.getCellData(row, "ioNo");
  var v_outStsCd = ds_results.getCellData(row, "outStsCd");
  var v_commCd = ds_results.getCellData(row, "commCd");
  //alert(v_ioNo);
  switch (colid) {
    case "ioNo":
      if (!$c.gus.cfIsNull($p, ds_results.getCellData(row, "ioNo"))) {
        scwin.f_openConsolItem(v_ioNo, ed_wrkPlCd.getValue(), v_outStsCd, v_commCd);
      }
      break;
  }
};
scwin.sbm_retrieveCtrtNo2_submit = function (e) {};
scwin.sbm_retrieveCtrtNo2_submitdone = function (e) {
  var ctrtNoRows = ds_ctrtNo2.getRowCount();
  if (ctrtNoRows > 0) {
    //관리거래처 체크
    var sameYn = "N";
    for (i = 0; i < ctrtNoRows; i++) {
      if (1 == ds_ctrtNo2.getCellData(i, "mgntTrgtClntYn")) {
        sameYn = "Y";
        break;
      }
    }
    if (sameYn == "Y") {
      $c.gus.cfAlertMsg($p, "청구처가 관리대상 거래처 입니다.\n사업자번호로 거래처 상태를 확인하시고, 처리 하십시요!");
      //var msg = "관리거래처입니다\n\n관리거래처 변경으로 문제발생 시 책임을 물을 수 있습니다.\n\n책임을 물어도 변경하시겠습니까?";
      //if (!confirm(msg)){
      ds_results.setCellData(ds_results.RowPosition, "stockClntNo", ""); //청구거래처코드
      ds_results.setCellData(ds_results.RowPosition, "stockClntNm", ""); //청구거래처
      //}
    }
  }
};
scwin.sbm_retrieveCtrtNo2_submiterror = function (e) {};
scwin.gr_results_measureYn_formatter = function (data) {
  // value={decode(measureYn,0,"N","Y")}
  return $c.gus.decode($p, data, 0, "N", "Y");
};
scwin.gr_results_bondTransDeclarYn_formatter = function (data) {
  // value={decode(bondTransDeclarYn,0,"N","Y")}
  return $c.gus.decode($p, data, 0, "N", "Y");
};
scwin.sbm_retrieveBlockCmd_submitdone = function (e) {};
scwin.gr_results_ontextimageclick = function (row, columnIndex) {
  ds_results.setRowPosition(row);
  // OnPopup(row,colid,data)
  var colid = gr_results.getColumnID(columnIndex);
  //품명
  if (colid == "commNm") {
    ds_results.setCellData(row, "commCd", "");
    scwin.f_openCommonPopUp(4);
    //청구 거래처	
    /*}else if(colid == "lineNm"){
        	ds_results.NameValue(row, "cfsLineCd") = "";
    	scwin.f_openCommonPopUp(2);*/
  } else if (colid == "cfsLineCd") {
    ds_results.setCellData(row, "lineNm", "");
    scwin.f_openCommonPopUp(2);
  } else if (colid == "stockClntNm") {
    ds_results.setCellData(row, "stockClntNo", "");
    scwin.f_openCommonPopUp(3);
  } else if (colid == "conClntNm") {
    ds_results.setCellData(row, "conClntNo", "");
    scwin.f_openCommonPopUp(5);
  }
};
scwin.gr_results_oneditend = async function (row, columnIndex, value) {
  ds_results.setRowPosition(row);
  // OnExit(row,colid,olddata)
  var colid = gr_results.getColumnID(columnIndex);
  var olddata = ds_results.getCellData(row, colid);
  if (value != olddata) {
    if (colid == "commNm") {
      await ds_results.setCellData(row, "commNm", value);
      await ds_results.setCellData(row, "commCd", "");
      scwin.f_openCommonPopUp(4);
    } else if (colid == "cfsLineCd") {
      await ds_results.setCellData(row, "cfsLineCd", value);
      await ds_results.setCellData(row, "lineNm", "");
      scwin.f_openCommonPopUp(2);
    } else if (colid == "stockClntNm") {
      await ds_results.setCellData(row, "stockClntNm", value);
      await ds_results.setCellData(row, "stockClntNo", "");
      scwin.f_openCommonPopUp(3);
    } else if (colid == "conClntNm") {
      await ds_results.setCellData(row, "conClntNm", value);
      await ds_results.setCellData(row, "conClntNo", "");
      scwin.f_openCommonPopUp(5);
    }
  }
};
scwin.gr_results_onafteredit = function (row, columnIndex, value) {
  var colid = gr_results.getColumnID(columnIndex);
  if (colid == "cfsInMgntNo") {
    var c = value.substring(0, 1).charCodeAt(0);
    if (!(65 <= c && c <= 90)) {
      $c.win.alert($p, "첫자리는 영문대문자입니다..!!! ");
      ds_results.setCellData(row, "cfsInMgntNo", "");
      return;
    }
  }
  if (colid == "rsltsQty" && ds_results.getCellData(row, "rsltsQty") == "") {
    ds_results.setCellData(row, "rsltsQty", 0);
  } else if (colid == "rsltsWt" && ds_results.getCellData(row, "rsltsWt") == "") {
    ds_results.setCellData(row, "rsltsWt", 0);
  } else if (colid == "rsltsCbm" && ds_results.getCellData(row, "rsltsCbm") == "") {
    ds_results.setCellData(row, "rsltsCbm", 0);
  }
};
scwin.udc_gridStockClnt_callBackFunc = function (ref) {
  if (ref != null) {
    ds_results.setCellData(ds_results.getRowPosition(), "stockClntNo", ref[0]); //청구거래처코드
    ds_results.setCellData(ds_results.getRowPosition(), "stockClntNm", ref[1]); //청구거래처
    // 2008.04.15 관리거래처체크 추가 
    scwin.f_retrieveCtrtNo2(); // 불량거래처 조회
  } else {
    ds_results.setCellData(ds_results.getRowPosition(), "stockClntNo", ""); //청구거래처코드
    ds_results.setCellData(ds_results.getRowPosition(), "stockClntNm", ""); //청구거래처
  }
};
scwin.udc_gridCfsLine_callBackFunc = function (ref) {
  if (ref != null) {
    ds_results.setCellData(ds_results.getRowPosition(), "cfsLineCd", ref[0]);
    ds_results.setCellData(ds_results.getRowPosition(), "lineNm", ref[1]);
  } else {
    ds_results.setCellData(ds_results.getRowPosition(), "cfsLineCd", "");
    ds_results.setCellData(ds_results.getRowPosition(), "lineNm", "");
  }
};
scwin.udc_gridComm_callBackFunc = function (ref) {
  if (ref != null) {
    ds_results.setCellData(ds_results.getRowPosition(), "commCd", ref[0]); //품목코드
    ds_results.setCellData(ds_results.getRowPosition(), "commNm", ref[1]); //품목
  } else {
    ds_results.setCellData(ds_results.getRowPosition(), "commCd", ""); //품목코드
    ds_results.setCellData(ds_results.getRowPosition(), "commNm", ""); //품목
  }
};
scwin.udc_gridConClnt_callBackFunc = function (ref) {
  if (ref != null) {
    ds_results.setCellData(ds_results.getRowPosition(), "conClntNo", ref[0]); //콘솔거래처코드
    ds_results.setCellData(ds_results.getRowPosition(), "conClntNm", ref[1]); //콘솔거래처명
    // 2008.04.15 관리거래처체크 추가 
    scwin.f_retrieveCtrtNo2(); // 불량거래처 조회
  } else {
    ds_results.setCellData(ds_results.getRowPosition(), "conClntNo", ""); //콘솔거래처코드
    ds_results.setCellData(ds_results.getRowPosition(), "conClntNm", ""); //콘솔거래처명
  }
};
scwin.excelDown = function () {
  // {"fileName":"CFS수출입고등록.xlsx","type":"4+8+16"}
  const infoArr = [];
  const options = {
    fileName: "CFS수출입고등록.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "CFS수출입고등록",
    // startRowIndex: 2,
    type: "1",
    // removeColumns: "0,21",
    // hiddenVisible : true,
    oddRowBackgroundColor: "",
    // excel파일에서 그리드 body의 홀수줄의 배경색
    evenRowBackgroundColor: "#F5FFF5" // excel파일에서 그리드 body의 짝수줄의 배경색
  };
  $c.data.downloadGridViewExcel($p, gr_results, options, infoArr);
};
scwin.gr_results_onrowindexchange = function (row, oldRow) {
  scwin.f_Visibility(row);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_inOutClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'입고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'출고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',id:'udc_wrkPlCd',mandatoryCode:'true',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent',mandatoryName:'true','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent',selectID:'retrieveWrkPlInfo',btnId:'btn_wrkPlCd',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',editTypeCode:'select',maxlengthCode:'5',objTypeCode:'data',objTypeName:'data',UpperFlag:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_dt',refDataMap:'ds_search',refEdDt:'completeDt',refStDt:'stDt',style:'',edFromId:'ed_stDt',edToId:'ed_completeDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_lineCd',id:'udc_lineCd',nameId:'ed_lineNm','ev:onviewchangeNameEvent':'scwin.udc_lineCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_lineCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lineCd_onblurCodeEvent',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',maxlengthCode:'5',editTypeCode:'select',objTypeName:'data',btnId:'btn_lineCd',selectID:'retrieveLineInfoList',UpperFlag:'1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'display: none;',class:'',id:'udc_gridStockClnt',codeId:'',nameId:'',selectID:'retrieveClntInfo',UpperFlagCode:'1',editTypeCode:'select',maxlengthCode:'5',objTypeCode:'data',objTypeName:'data'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'display: none;',class:'',id:'udc_gridCfsLine',codeId:'',nameId:'','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent',selectID:'retrieveLineInfoList',UpperFlagCode:'1',editTypeCode:'select',maxlengthCode:'5',objTypeCode:'data',objTypeName:'data'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'display: none;',class:'',id:'udc_gridComm',codeId:'',nameId:'','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent',selectID:'retrieveCommInfo',UpperFlagCode:'1',editTypeCode:'select',maxlengthCode:'5',objTypeCode:'data',objTypeName:'data'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'display: none;',class:'',id:'udc_gridConClnt',codeId:'',nameId:'','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent',selectID:'retrieveClntInfo',UpperFlagCode:'1',editTypeCode:'select',maxlengthCode:'5',objTypeCode:'data',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'title row-gap-8'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'CFS 수출입고등록 ',class:'tit'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridUpYn:'N',gridID:'gr_results',grdDownOpts:'{"fileName":"CFS수출입고등록.xlsx","type":"4+8+16"}',gridDownYn:'Y',btnUser:'Y',btnPlusYn:'Y',templateYn:'N',gridDownFn:'scwin.excelDown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',dataList:'data:ds_results',scrollByColumn:'false',style:'',id:'gr_results',visibleRowNum:'15',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',fixedColumn:'0',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_results_oncelldblclick',columnMove:'true','ev:ontextimageclick':'scwin.gr_results_ontextimageclick','ev:onafteredit':'scwin.gr_results_onafteredit','ev:oneditend':'scwin.gr_results_oneditend',rowStatusVisible:'true','ev:onrowindexchange':'scwin.gr_results_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'입고일자',blockSelect:'false',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column11',value:'라인',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column113',value:'LINE명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column110',value:'실화주코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',value:'실화주명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'입고번호',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column9',value:'입고<br/>관리번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column19',value:'입출고<br/>상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column119',value:'재고<br/>관리번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column116',value:'품명코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'품명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column122',value:'청구거래처<br/>코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',id:'column39',value:'청구거래처명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column44',value:'수량',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column60',value:'중량<br/>(㎏)',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column62',value:'용적',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column40',value:'RTON',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column77',value:'단위',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column80',value:'콘솔업체명',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column83',value:'BL번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column86',value:'비고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column98',value:'재고<br/>수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column95',value:'재고<br/>중량(㎏)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column89',value:'재고<br/>용적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column92',value:'BLOCK',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column101',value:'측정<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column107',value:'신고<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column104',value:'작업장',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'inStdDt',blockSelect:'false',displayMode:'label',dataType:'date',readOnly:'true',dateValidCheck:'true',dateValidSet:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'textImage',id:'cfsLineCd',blockSelect:'false',displayMode:'label',allowChar:'A-Z',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lineNm',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cfsMchtClntNo',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'cfsMchtNm',blockSelect:'false',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ioNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'cfsInMgntNo',blockSelect:'false',displayMode:'label',textAlign:'left',readOnly:'true',dataType:'text'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'outStsCd',displayMode:'label',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'출고완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부분출고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'입고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockMgntNo',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label',readOnly:'true',hidden:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'commNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockClntNo',displayMode:'label',readOnly:'true',hidden:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'stockClntNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rsltsQty',displayMode:'label',dataType:'float',displayFormat:'#,###',textAlign:'right',maxLength:'15',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rsltsWt',displayMode:'label',displayFormat:'#,##0.000',dataType:'float',textAlign:'right',maxLength:'15.3',readOnly:'true',mandatory:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rsltsCbm',displayMode:'label',dataType:'float',displayFormat:'#,##0.000',textAlign:'right',maxLength:'15.3',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rsltsRton',displayMode:'label',displayFormat:'#,##0.000',dataType:'float',textAlign:'right',maxLength:'15.3',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'cfsUnitCd',displayMode:'label',textAlign:'left',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'conClntNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'blNo',displayMode:'label',maxLength:'20',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rmk',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'stockQty',displayMode:'label',dataType:'float',displayFormat:'#,###',textAlign:'right',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockWt',displayMode:'label',dataType:'float',displayFormat:'#,##0.000',textAlign:'right',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'stockCbm',displayMode:'label',dataType:'float',displayFormat:'#,##0.000',textAlign:'right',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'lblock',displayMode:'label',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_resultBlockCMD'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'measureYn',displayMode:'label',displayFormatter:'scwin.gr_results_measureYn_formatter',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bondTransDeclarYn',displayMode:'label',displayFormatter:'scwin.gr_results_bondTransDeclarYn_formatter',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkPlCd',displayMode:'label',hidden:'true',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows1',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_copyRow',label:'삭제',style:'',type:'button','ev:onclick':'scwin.btn_copyRow_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',EngYn:'N',btnRowDelYn:'Y',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',btnRowAddObj:'btn_addRow',btnRowDelObj:'btn_deleteRow',btnCancelObj:'btn_cancel',gridID:'gr_results',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DeleteRow'}},{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_ediCall',label:'삭제',style:'',type:'button','ev:onclick':'scwin.btn_ediCall_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보세운송반입신고'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:group',A:{class:'info-list txt-red',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'콘솔업체 등록시 입고번호 더블클릭으로 조회되는 팝업창에서 콘솔용 규격정보 등록하세요.',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'콘솔업체 등록시 수정, 삭제는 팝업창 에서만 가능합니다. ',style:'',tagname:'p'}}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn',id:'btn_save',label:'저장',style:'','ev:onclick':'scwin.btn_save_onclick',userAuth:'C'}}]}]}]}]}]}]}]})