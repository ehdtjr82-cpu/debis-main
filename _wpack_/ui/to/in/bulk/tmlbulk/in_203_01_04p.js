/*amd /ui/to/in/bulk/tmlbulk/in_203_01_04p.xml 39739 ad9cc0d674a54280669442f571c1518ff2b17b05ff5bf7c3078c6820187ed89a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stStockInoutDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'edStockInoutDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tmlStockMgntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repKcgCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blBkNo',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'tmlStockMgntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blBkNo',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockStdAdptDt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strRateAdptDt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preInfoQty',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preInfoWt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preInfoCbm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'restQty',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'restWt',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'restCbm',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrBulkClsCd',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkCargoPatternCd',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'name26',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_condition',action:'/to.in.bulk.tmlbulk.RetrieveBulkStockMgntStdLupContCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_condition_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.g_tmlStockMgntNo;
scwin.g_closeTF;

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  var param = $c.data.getParameter($p);
  scwin.g_tmlStockMgntNo = param.tmlStockMgntNo || "";
  scwin.g_closeTF = param.closeTF || "T";
  $c.gus.cfTurnCreateFlag($p, true);
  scwin.f_FieldClear();
  var codeOptions = [{
    grpCd: "TB040",
    compID: "lc_wrkPlCd"
  } // 셀렉트
  , {
    grpCd: "SD060",
    compID: "gr_master:impExpClsCd"
  } // 셀렉트
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_retrieveOnInit();
};
scwin.f_retrieveOnInit = function () {
  ed_tmlStockMgntNo.setValue(scwin.g_tmlStockMgntNo);
  scwin.f_retrieve();
};
scwin.f_retrieve = function (e) {
  if (!$c.gus.cfValidate($p, tb_searchCondition)) {
    return;
  }
  dma_condition.set("clntNo", ed_clntNo.getValue());
  dma_condition.set("repKcgCd", lc_repKcgCd.getValue());
  dma_condition.set("commCd", ed_commCd.getValue());
  dma_condition.set("tmlStockMgntNo", ed_tmlStockMgntNo.getValue());
  dma_condition.set("lineCd", ed_lineCd.getValue());
  dma_condition.set("blBkNo", ed_blBkNo.getValue());
  dma_condition.set("cvsslMgntNo", ed_cvsslMgntNo.getValue());
  dma_condition.set("wrkPlCd", lc_wrkPlCd.getValue());
  $c.sbm.execute($p, sbm_condition);
};
scwin.sbm_condition_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowCnt = ds_master.getRowCount();
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다	
    } else if (rowCnt == 1 && scwin.g_closeTF == "T") {
      var rtnValues = {};
      rtnValues[0] = ds_master.getCellData(0, "tmlStockMgntNo"); // 터미널재고관리번호
      rtnValues[1] = ds_master.getCellData(0, "clntNo"); // 화주 코드
      rtnValues[2] = ds_master.getCellData(0, "clntNm"); // 화주 이름
      rtnValues[3] = ds_master.getCellData(0, "commCd"); //화종 코드
      rtnValues[4] = ds_master.getCellData(0, "commNm"); // 화종 이름
      rtnValues[5] = ds_master.getCellData(0, "cvsslMgntNo"); // 본선관리번호
      rtnValues[6] = ds_master.getCellData(0, "lineCd"); // 라인코드
      rtnValues[7] = ds_master.getCellData(0, "blBkNo"); // BL/BK번호
      rtnValues[8] = ds_master.getCellData(0, "impExpClsCd"); // 수입수출구분코드
      rtnValues[9] = ds_master.getCellData(0, "stockStdAdptDt"); // 재고기준적용일자
      rtnValues[10] = ds_master.getCellData(0, "strRateAdptDt"); // 보관료적용일자
      rtnValues[11] = ds_master.getCellData(0, "preInfoQty"); // 사전정보수량
      rtnValues[12] = ds_master.getCellData(0, "preInfoWt"); // 사전정보중량
      rtnValues[13] = ds_master.getCellData(0, "preInfoCbm"); // 사전정보CBM
      rtnValues[14] = ds_master.getCellData(0, "restQty"); // 현정보수량
      rtnValues[15] = ds_master.getCellData(0, "restWt"); // 현정보중량
      rtnValues[16] = ds_master.getCellData(0, "restCbm"); // 현정보CBM
      rtnValues[17] = ds_master.getCellData(0, "cntrBulkClsCd"); // 컨테이너벌크 구분 코드
      rtnValues[18] = ds_master.getCellData(0, "bulkCargoPatternCd"); // 벌크화물패턴코드
      rtnValues[19] = ds_master.getCellData(0, "mrn"); // MRN
      rtnValues[20] = ds_master.getCellData(0, "msn"); // MSN
      rtnValues[21] = ds_master.getCellData(0, "hsn"); // HSN
      rtnValues[22] = ds_master.getCellData(0, "vsslCd"); // 선박코드
      rtnValues[23] = ds_master.getCellData(0, "portcnt"); // 항차
      rtnValues[24] = ds_master.getCellData(0, "wrkPlCd"); // 작업장코드
      rtnValues[25] = ds_master.getCellData(0, "wrkPlNm"); // 작업장

      $c.win.closePopup($p, rtnValues);
    }
    totalRows.setValue(rowCnt);
  }
};
scwin.f_openKcgCdPopUp = async function () {
  var inObj = ed_commCd;
  var pairObj = ed_commNm;

  //if(!await scwin.f_canOpenPopUp(inObj, pairObj)) return;

  var win_url = "/ui/to/in/bulk/tmlbulk/in_201_02_10p.xml";
  var opts = scwin.opts || {};
  opts.modal = true;
  opts.type = "browserPopup";
  opts.id = "pupup";
  opts.width = 1000;
  opts.height = 630;
  opts.popupName = '품목검색';
  var param = {
    repKcgCd: lc_repKcgCd.getValue(),
    cd: $c.gus.cfGetValue($p, inObj),
    nm: $c.gus.cfGetValue($p, ed_commNm),
    closeTF: "T"
  };
  var rtnList = await $c.win.openPopup($p, win_url, opts, param);
  if (rtnList[0] == "N/A" || $c.gus.cfIsNull($p, rtnList)) {
    ed_commCd.setValue(rtnList[0] || "");
    ed_commNm.setValue("undefined");
    lc_repKcgCd.setValue("");
  } else {
    ed_commCd.setValue(rtnList[0]);
    ed_commNm.setValue(rtnList[1]);
    lc_repKcgCd.setValue(rtnList[2]);
  }
};

//-----------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel = async function () {
  var totCnt = ds_master.getRowCount();
  if (totCnt != 0) {
    var cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      var options = {
        fileName: "벌크재고관리번호내역.xlsx",
        sheetName: "벌크재고관리번호내역",
        startRowIndex: 0,
        startColumnIndex: 0,
        type: 1,
        evenRowBackgroundColor: "#f5fff5" //excel파일에서 그리드 body의 짝수줄의 배경색
      };
      $c.data.downloadGridViewExcel($p, gr_master, options);
    }
  }
};

//-------------------------------------------------------------------------
// 팝업 버튼에 의한 팝업호출 여부 리턴
//-------------------------------------------------------------------------
scwin.f_isPopUpClicked = function () {};

//-------------------------------------------------------------------------
// 팝업 여부 체크
//-------------------------------------------------------------------------
scwin.f_canOpenPopUp = function (inObj, pairObj) {};

//-------------------------------------------------------------------------
// 팝업 검색결과가 한건일 경우 기본 처리방법
//-------------------------------------------------------------------------
scwin.f_getDefaultAutoClose = function () {};

//-------------------------------------------------------------------------
// 본선관리번호검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openCvsslMgntNoPopUp = async function () {
  var inObj = ed_cvsslMgntNo;

  //if(!scwin.f_canOpenPopUp(inObj, null)) return;

  var win_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
  var opts = scwin.opts || {};
  opts.modal = true;
  opts.type = "browserPopup";
  opts.id = "pupup";
  opts.width = 1000;
  opts.height = 630;
  opts.popupName = '본선관리번호검색팝업';
  var param = new Array();
  param[0] = ed_cvsslMgntNo.getValue(); //본선관리번호

  var rtnList = await $c.win.openPopup($p, win_url, opts, param);
  if (!$c.gus.cfIsNull($p, rtnList)) {
    $c.gus.cfSetValue($p, inObj, "");
    $c.gus.cfSetHiddenValue($p, inObj, "");
  } else {
    if (rtnList) {
      // tobe추가 : rtnList가 null일시 아래 로직 타는데 null이므로 rtnList[0] 존재하지 않아 오류 남.
      if (rtnList[0] == "N/A") {
        $c.gus.cfSetValue($p, inObj, $c.gus.cfGetHiddenValue($p, inObj));
      } else {
        $c.gus.cfSetValue($p, inObj, rtnList[0]);
        $c.gus.cfSetHiddenValue($p, inObj, rtnList[0]);
      }
    }
  }
};

//-------------------------------------------------------------------------
// BL/BK 검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openBlBkNoPopUp = async function () {
  var inObj = ed_blBkNo;

  //if(!f_canOpenPopUp(inObj)) return;

  // var rtnList = window.showModalDialog('/to/in/bulk/tmlbulk/in_201_02_04p.jsp?paramTitle=BL/BK검색팝업&blBkNo=' + cfGetValue(inObj)
  //                                         ,null//paramArray
  //                                         ,"dialogWidth:870px; dialogHeight:620px; status:No");

  var win_url = "/ui/to/in/bulk/tmlbulk/in_201_02_04p.xml";
  var opts = scwin.opts || {};
  opts.modal = true;
  opts.type = "browserPopup";
  opts.id = "pupup";
  opts.width = 1100;
  opts.height = 600;
  opts.popupName = '벌크사전정보검색';
  var param = {
    blBkNo: $c.gus.cfGetValue($p, inObj)
  };
  var rtnList = await $c.win.openPopup($p, win_url, opts, param);
  if ($c.gus.cfIsNull($p, rtnList)) {
    ed_blBkNo.setValue("");
    $c.gus.cfSetHiddenValue($p, inObj, "");
  } else {
    if (rtnList[0] == "N/A") {
      ed_blBkNo.setValue("");
      $c.gus.cfSetHiddenValue($p, inObj, "");
      //$c.gus.cfSetValue(inObj, $c.gus.cfGetHiddenValue(inObj));
    } else {
      $c.gus.cfSetValue($p, inObj, rtnList[12]);
      $c.gus.cfSetHiddenValue($p, inObj, rtnList[12]);
    }
  }
};

//-------------------------------------------------------------------------
// Line 코드 검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openLinePopUp = async function (pAllSearch) {
  var inObj = ed_lineCd;
  var pairObj = ed_lineNm;
  var pAutoClose = scwin.f_getDefaultAutoClose();

  //if(!scwin.f_canOpenPopUp(inObj, pairObj)) return;

  //마스터 LINE 팝업
  await udc_lineCd.cfCommonPopUp(function (rtnList) {
    $c.gus.cfSetReturnValue($p, rtnList, inObj, pairObj);
  }, $c.gus.cfGetValue($p, inObj) // 화면에서의 ??? Code Element의	Value
  , $c.gus.cfGetValue($p, pairObj) // 화면에서의 ??? Name Element의	Value
  , pAutoClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
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
  , 'F' // 전체검색허용여부	("F")
  , "LINE,LINE코드,LINE명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};

//-------------------------------------------------------------------------
// 화주 검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openClntPopUp = async function (closeTF) {
  //(pAllSearch) {
  var inObj = ed_clntNo;
  var pairObj = ed_clntNm;
  var pAutoClose = closeTF || "F"; //scwin.f_getDefaultAutoClose();

  //if(!f_canOpenPopUp(inObj, pairObj)) return;

  //디테일 수입 대표거래처 팝업
  await udc_clntNo.cfCommonPopUp(function (rtnList) {
    $c.gus.cfSetReturnValue($p, rtnList, inObj, pairObj);
  }, $c.gus.cfGetValue($p, inObj) // 화면에서의 ??? Code Element의	Value
  , $c.gus.cfGetValue($p, pairObj) // 화면에서의 ??? Name Element의	Value
  , pAutoClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
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
  , 'F' // 전체검색허용여부	("F")
  , "대표거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};

//-------------------------------------------------------------------------
// 닫기 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_WinClose = function (e) {
  $c.win.closePopup($p);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tb_searchCondition);
  $c.gus.cfInitHidVal($p, tb_searchCondition);
  lc_repKcgCd.setSelectedIndex(0);
};
scwin.udc_commCd_onblurCodeEvent = function (e) {
  scwin.f_openKcgCdPopUp(ed_commNm);
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_openClntPopUp("T");
};
scwin.udc_lineCd_onblurCodeEvent = function (e) {
  scwin.f_openLinePopUp("T");
};
scwin.ed_blBkNo_onblur = function (e) {
  scwin.f_openBlBkNoPopUp();
};
scwin.gr_master_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  var rtnValues = {};
  rtnValues[0] = ds_master.getCellData(rowIndex, "tmlStockMgntNo"); // 터미널재고관리번호
  rtnValues[1] = ds_master.getCellData(rowIndex, "clntNo"); // 화주 코드
  rtnValues[2] = ds_master.getCellData(rowIndex, "clntNm"); // 화주 이름
  rtnValues[3] = ds_master.getCellData(rowIndex, "commCd"); //화종 코드
  rtnValues[4] = ds_master.getCellData(rowIndex, "commNm"); // 화종 이름
  rtnValues[5] = ds_master.getCellData(rowIndex, "cvsslMgntNo"); // 본선관리번호
  rtnValues[6] = ds_master.getCellData(rowIndex, "lineCd"); // 라인코드
  rtnValues[7] = ds_master.getCellData(rowIndex, "blBkNo"); // BL/BK번호
  rtnValues[8] = ds_master.getCellData(rowIndex, "impExpClsCd"); // 수입수출구분코드
  rtnValues[9] = ds_master.getCellData(rowIndex, "stockStdAdptDt"); // 재고기준적용일자
  rtnValues[10] = ds_master.getCellData(rowIndex, "strRateAdptDt"); // 보관료적용일자
  rtnValues[11] = ds_master.getCellData(rowIndex, "preInfoQty"); // 사전정보수량
  rtnValues[12] = ds_master.getCellData(rowIndex, "preInfoWt"); // 사전정보중량
  rtnValues[13] = ds_master.getCellData(rowIndex, "preInfoCbm"); // 사전정보CBM
  rtnValues[14] = ds_master.getCellData(rowIndex, "restQty"); // 현정보수량
  rtnValues[15] = ds_master.getCellData(rowIndex, "restWt"); // 현정보중량
  rtnValues[16] = ds_master.getCellData(rowIndex, "restCbm"); // 현정보CBM
  rtnValues[17] = ds_master.getCellData(rowIndex, "cntrBulkClsCd"); // 컨테이너벌크 구분 코드
  rtnValues[18] = ds_master.getCellData(rowIndex, "bulkCargoPatternCd"); // 벌크화물패턴코드
  rtnValues[19] = ds_master.getCellData(rowIndex, "mrn"); // MRN
  rtnValues[20] = ds_master.getCellData(rowIndex, "msn"); // MSN
  rtnValues[21] = ds_master.getCellData(rowIndex, "hsn"); // HSN
  rtnValues[22] = ds_master.getCellData(rowIndex, "vsslCd"); // 선박코드
  rtnValues[23] = ds_master.getCellData(rowIndex, "portcnt"); // 항차
  rtnValues[24] = ds_master.getCellData(rowIndex, "wrkPlCd"); // 작업장코드
  rtnValues[25] = ds_master.getCellData(rowIndex, "wrkPlNm"); // 작업장

  $c.win.closePopup($p, rtnValues);
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  if (ed_clntNm.getValue() == "") {
    ed_clntNo.setValue("");
    return;
  } else {
    scwin.f_openClntPopUp("T");
  }
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openClntPopUp("F");
};
scwin.udc_commCd_onviewchangeCodeEvent = function (info) {
  scwin.f_openKcgCdPopUp();
};
scwin.udc_commCd_onclickEvent = function (e) {
  scwin.f_openKcgCdPopUp();
};
scwin.btn_cvsslMgntNo_onclick = function (e) {
  scwin.f_openCvsslMgntNoPopUp();
};
scwin.udc_lineCd_onviewchangeNameEvent = function (info) {
  scwin.f_openLinePopUp("T");
};
scwin.udc_lineCd_onclickEvent = function (e) {
  scwin.f_openLinePopUp("F");
};
scwin.btn_PopUp2_onclick = function (e) {
  scwin.f_openBlBkNoPopUp();
};

//그리드 재고기준 적용일자, 보관료 적용일자 날짜 포멧
scwin.date_displayFormatter = function (data) {
  return $c.date.formatDate($p, data, "slash");
};
scwin.ed_tmlStockMgntNo_onkeyup = function (e) {
  $c.gus.cfToUpper($p, ed_tmlStockMgntNo);
};
scwin.ed_cvsslMgntNo_onkeyup = function (e) {
  $c.gus.cfToUpper($p, ed_cvsslMgntNo);
};
scwin.ed_blBkNo_onkeyup = function (e) {
  $c.gus.cfToUpper($p, ed_blBkNo);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'재고관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_tmlStockMgntNo',placeholder:'',style:'width:150px;',objType:'data',maxlength:'13',maxByteLength:'13',UpperFlag:'1',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_tmlStockMgntNo_onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',objTypeCode:'data',maxlengthCode:'8',UpperFlagCode:'1',nameId:'ed_clntNm',objTypeName:'data',btnId:'btn_clntNo',codeId:'ed_clntNo',id:'udc_clntNo','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',selectID:'retrieveCoopList','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent',allowCharCode:'a-zA-Z0-9','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_repKcgCd',search:'start',style:'width:80px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',emptyItem:'true',emptyIndex:'-1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'화종'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'품목'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'품명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_commCd',id:'udc_commCd','ev:onviewchangeCodeEvent':'scwin.udc_commCd_onviewchangeCodeEvent',objTypeCode:'data',objTypeName:'data',maxlengthCode:'8',UpperFlagCode:'1',nameId:'ed_commNm',btnId:'btn_PopUp3','ev:onclickEvent':'scwin.udc_commCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_commCd_onblurCodeEvent',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_wrkPlCd',search:'start',style:'width:165px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체',displayMode:'value delim label'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width: 150px;',objType:'data',maxByteLength:'8',maxlength:'8',UpperFlag:'1','ev:onkeyup':'scwin.ed_cvsslMgntNo_onkeyup',allowChar:'a-zA-Z0-9'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lineCd',id:'udc_lineCd',objTypeCode:'data',maxlengthCode:'8',UpperFlagCode:'1',btnId:'btn_lineCd','ev:onclickEvent':'scwin.udc_lineCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_lineCd_onviewchangeNameEvent',nameId:'ed_lineNm',selectID:'retrieveTmlLineInfo','ev:onblurCodeEvent':'scwin.udc_lineCd_onblurCodeEvent',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BL/BK 번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_blBkNo',placeholder:'',style:'width: 150px;',objType:'data',maxByteLength:'16',maxlength:'16',UpperFlag:'1','ev:onblur':'scwin.ed_blBkNo_onblur','ev:onkeyup':'scwin.ed_blBkNo_onkeyup',allowChar:'a-zA-Z0-9'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_PopUp2',style:'',type:'button','ev:onclick':'scwin.btn_PopUp2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'벌크재고관리번호내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_runExcel',gridID:'gr_master'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_master_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'재고관리번호',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'재고관리기준',width:'630',colSpan:'9',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'수출입<br/>구분',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'재고기준<br/>적용일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'보관료<br/>적용일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'사전정보',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'현재재고',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'ETC',width:'490',colSpan:'7',rowSpan:'',hidden:'true',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'화주코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column70',value:'화주',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'품명코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'화종',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'작업장코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column54',value:'작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column50',value:'본선관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column46',value:'Line',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column42',value:'BL/BK',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column78',value:'중량(톤)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column34',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column86',value:'중량(톤)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column82',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column33',value:'컨테이너벌크 구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column32',value:'벌크화물패턴코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'MRN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column102',value:'MSN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column98',value:'HSN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'선박코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column94',value:'항차',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'tmlStockMgntNo',inputType:'text',width:'120',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'commCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'commNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkPlCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'wrkPlNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'cvsslMgntNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lineCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'blBkNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'select',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockStdAdptDt',inputType:'text',width:'100',dataType:'date',displayFormatter:'scwin.date_displayFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'strRateAdptDt',inputType:'text',width:'100',dataType:'date',displayFormatter:'scwin.date_displayFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'preInfoQty',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'preInfoWt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.###',excelCellType:'number',excelFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'preInfoCbm',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'restQty',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'restWt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.###',excelCellType:'number',excelFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'restCbm',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrBulkClsCd',inputType:'text',width:'180',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bulkCargoPatternCd',inputType:'text',width:'180',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'msn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'hsn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vsslCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'portcnt',value:'',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("preInfoQty")'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column80',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.###',expression:'SUM("preInfoWt")',excelCellType:'#,###.###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column76',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("preInfoCbm")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("restQty")'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column88',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.###',expression:'SUM("restWt")',excelCellType:'#,###.###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column84',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("restCbm")'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column104',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column100',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column92',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_WinClose'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})