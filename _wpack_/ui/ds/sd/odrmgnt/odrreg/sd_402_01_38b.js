/*amd /ui/ds/sd/odrmgnt/odrreg/sd_402_01_38b.xml 38620 43c22f82824ccdfb657f2c13d8f7224bb3f3e57ddb0cf3408f53f62a65396c56 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cndInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lineCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarReqDtFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarReqDtTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bookingNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmCls',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrCreatCls',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cfsYn',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'periods',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ediYn',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shpCo',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shpCoNm',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bookingInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selcYn',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pickupdt',name:'PICK-UP;일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BK',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqMchtNm',name:'Shipper',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'printYn',name:'발행여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorWrkPlNm',name:'DOOR장소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdPortcnt',name:'선박/항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDtm',name:'Closing;Time',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDtm',name:'확인일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomOdrNo',name:'당사오더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomOdrCreateDtm',name:'당사오더;생성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomOdrDcsnYn',name:'확정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomOdrDcsnDtm',name:'확정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomOdrCompleteYn',name:'완료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomOdrCompleteDtm',name:'완료일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDtm',name:'수신일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gateQty',name:'반출수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remainQty',name:'잔량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediYn',name:'name24',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_LineList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_OzReportList',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lineCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row'}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrreg.RetrieveBookingPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cndInfo","key":"IN_DS1"},{"id":"ds_bookingInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_bookingInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_updateOzReportYn',action:'/ds.sd.odrmgnt.odrreg.UpdateOzReportYnConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_OzReportList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 세션정보 가져오기
scwin.loginDTO = {};
scwin.loginClntNo = "";
scwin.loginClntNm = "";
scwin.userClsCd = "";
scwin.userId = "";
scwin.shpCo = ""; // 선사거래처
scwin.shpCoNm = ""; // 선사거래처명

// 초기값 설정 - 날짜 (현재 날짜, 1주일 전 날짜)
scwin.strCurDate = "";
scwin.strPreDate = "";

// 화면로딩시
scwin.onpageload = function () {
  scwin.loginDTO = $c.data.getMemInfo($p);
  scwin.loginClntNo = scwin.loginDTO.clntNo || "";
  scwin.loginClntNm = scwin.loginDTO.clntNm || "";
  scwin.userClsCd = scwin.loginDTO.userClsCd || "";
  scwin.userId = scwin.loginDTO.userId || "";
  scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.strPreDate = $c.date.addDate($p, scwin.strCurDate, -7);
};
scwin.onUdcCompleted = function () {
  dma_cndInfo.set("ediYn", "0"); // edi여부 세팅

  scwin.f_FieldClear();

  // 사용자가 협력업체 일때
  if (scwin.userClsCd != "01") {
    ed_shpCo.setValue(scwin.loginClntNo);
    txt_shpCoNm.setValue(scwin.loginClntNm);
    ed_shpCo.setReadOnly(true);
    txt_shpCoNm.setDisabled(true);
    $c.gus.cfDisableObjects($p, [img_PopUp1]);
    scwin.f_setLine();
    ed_lineCd.focus();
  } else {
    scwin.f_setLine();
    ed_shpCo.focus();
  }

  // TMSC 라인일때 - 2017.11.23 서동원 추가 
  if (scwin.userId == "dwstms") {
    ed_lineCd.setValue("TMSC");
    txt_lineNm.setValue("DOOWOO SHIPPING CO.,LTD");
    ed_lineCd.setReadOnly(true);
    txt_lineNm.setDisabled(true);
    $c.gus.cfDisableObjects($p, [img_PopUp2]);
  }
};

// 조회 조건 초기화
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_cndArea);
  if (scwin.userClsCd != "01") {
    //사용자가 그룹사가 아닐때
    $c.gus.cfInitObjects($p, tbl_cndArea);
    ed_shpCo.setValue(scwin.loginClntNo);
    txt_shpCoNm.setValue(scwin.loginClntNm);
    ed_alloccarReqDtFrom.setValue(scwin.strPreDate);
    ed_alloccarReqDtTo.setValue(scwin.strCurDate);
    ed_lineCd.focus();
  } else {
    $c.gus.cfInitObjects($p, tbl_cndArea);
    ed_alloccarReqDtFrom.setValue(scwin.strPreDate);
    ed_alloccarReqDtTo.setValue(scwin.strCurDate);
    ed_shpCo.focus();
  }
};

// 조회
scwin.f_Retrieve = async function () {
  // 수신기간 From - To 입력 확인
  let chk1 = await $c.gus.cfValidate($p, [ed_alloccarReqDtFrom, ed_alloccarReqDtTo]);
  if (!chk1) {
    return;
  }

  // LINE 입력확인
  if ($c.gus.cfIsNull($p, ed_lineCd.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["LINE"]);
    ed_lineCd.focus();
    return;
  }

  // 수신기간 From - To 기간 범위 확인
  if (!(await $c.gus.cfIsAfterDate($p, ed_alloccarReqDtFrom.getValue(), ed_alloccarReqDtTo.getValue()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_048, ["수신기간 From", "수신기간 To"]);
    ed_alloccarReqDtFrom.focus();
    return;
  }
  let chk2 = await $c.gus.cfValidate($p, [tbl_cndArea]);
  if (chk2) {
    $c.sbm.execute($p, sbm_retrieve);
  }
};

// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함
scwin.f_ChkOpenCommonPopUp = function (data, disGubun, isCode) {
  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_OpenCommonPopUp(disGubun, data, "", "T", "T");
  } else {
    //inObj가 코드명 필드일 경우 팝업
    scwin.f_OpenCommonPopUp(disGubun, "", data, "T", "T");
  }
};

// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다
scwin.f_OpenCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 선박코드 조회
      udc_comCode.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_vsslCd, txt_vsslNm);
      } // XML상의 SELECT ID  
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "선박,선박코드,선박명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // 선사 팝업
      udc_comCode1.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_shpCo, txt_shpCoNm);
        f_setLine();
      } // XML상의 SELECT ID    
      , pCode // 화면에서의 ??? Code Element의    Value
      , pName // 화면에서의 ??? Name Element의    Value
      , pClose // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서    
      , null // 보여주는 각 컬럼들의 폭  
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , "SHP" // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의    사용자 정의 폭
      , null // POP-UP뛰을때 우도우의    사용자 정의 높이    
      , null // 윈도우 위치 Y좌표    
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "선사,선사코드,선사명" // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 5:
      let pCode = ed_lineCd.getValue();
      let pName = txt_lineNm.getValue().toUpperCase();
      udc_comCode2.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd, txt_lineNm);
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
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
      , "LINE,LINE코드,LINE명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

// Booking세부사항
scwin.f_BookingDetail = function (gubun) {
  let rowJson = ds_bookingInfo.getRowJSON(ds_bookingInfo.getRowPosition());
  let varShpCo = scwin.shpCo;
  let varShpCoNm = scwin.shpCoNm;
  let lineCd = rowJson.lineCd;
  let lineNm = rowJson.lineNm;
  let bookingNo = rowJson.bookingNo;
  let url = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_37b.xml";
  let copy = "";
  if (gubun == "copy") copy = "1";else copy = "0";
  let param = {
    "shpCo": varShpCo,
    "shpCoNm": varShpCoNm,
    "lineCd": lineCd,
    "bookingNo": bookingNo,
    "lineNm": lineNm,
    "type": "B",
    "copy": copy
  };
  let options = {
    exist: true
  };
  $c.win.openMenu($p, "오더요청등록", url, "sd_402_01_37b.xml", param, options);
};

//-------------------------------------------------------------------------
// 라인콤보 조회 
//-------------------------------------------------------------------------
scwin.f_setLine = async function () {
  let sbm_LineList = {};
  sbm_LineList.action = "/cm.zz.RetrieveComboCMD.do?sysCd=LineEBC&queryId=retrieveLineEachShpCoCdCombo" + "&param1=" + scwin.loginClntNo + "&param2=" + scwin.userClsCd + "&param3=" + ed_shpCo.getValue();
  let e = await $c.sbm.executeDynamic($p, sbm_LineList);
  ds_LineList.setJSON(e.responseJSON.GAUCE);
};

//-------------------------------------------------------------------------
// OZ발행
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  let chk = await scwin.f_CountSelected();
  if (chk == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["자료"]);
    return false;
  }
  let dataList = [];
  let opts = {};
  if (chb_previewCheck.getValue() == "1") {
    opts.type = "viewer";
    opts.printMode = "view";
  } else {
    opts.type = "print";
    opts.printMode = "view";
  }
  for (let i = 0; i < ds_bookingInfo.getRowCount(); i++) {
    let rowJson = ds_bookingInfo.getRowJSON(i);
    if (rowJson.selcYn == "1") {
      scwin.f_SetDataSet(i);
      let mode = "print";
      if (chb_previewCheck.getValue() == "1") {
        mode = "preview";
      }
      let odiName = "";
      let reportName = "";
      let userId = scwin.userId;
      let bookingNo = rowJson.bookingNo;
      let lineCd = rowJson.lineCd;
      let ediYn = rowJson.ediYn;
      if (rowJson.lineCd == "SITC") {
        odiName = "sd_402_01_38b";
        reportName = "/ds/sd/odrmgnt/odrreg/sd_402_01_38b.ozr";
      } else {
        odiName = "sd_402_01_38a";
        reportName = "/ds/sd/odrmgnt/odrreg/sd_402_01_38a.ozr";
      }
      ;
      let data = {
        odiName: odiName,
        reportName: reportName,
        odiParam: {
          sysPath: "dbl.ds.sd.odrmgnt.odrreg",
          bookingNo: bookingNo,
          lineCd: lineCd,
          ediYn: ediYn,
          userId: userId
        },
        viewerParam: {
          "useprogressbar": false,
          "ismultidocassub": false,
          "smartframesize": true,
          "mode": mode
        },
        formParam: {
          dispName0: "",
          dispName1: "WEB오더요청현황"
        }
      };
      if (chb_previewCheck.getValue() != "1") {
        $c.ext.printOzReport($p, data, opts);
      } else {
        dataList.push(data);
      }
    }
    if (i == ds_bookingInfo.getRowCount() - 1) {
      $c.ext.openBatchOzReport($p, dataList, opts);
    }
  }
};

//-------------------------------------------------------------------------
// 선택된 데이터 Row Count를 반환
//-------------------------------------------------------------------------
scwin.f_CountSelected = async function () {
  return gr_bookingInfo.getCheckedIndex("selcYn").length;
};

//-------------------------------------------------------------------------
// Save or Del DataSet Setting
//-------------------------------------------------------------------------
scwin.f_SetDataSet = function (row) {
  let rowJson = ds_bookingInfo.getRowJSON(row);
  ds_OzReportList.setCellData(0, "lineCd", rowJson.lineCd);
  ds_OzReportList.setCellData(0, "bookingNo", rowJson.bookingNo);

  // 세금계산서출력후 이력생성
  $c.sbm.execute($p, sbm_updateOzReportYn);
};

// 240530) 체크한 오더를 복사
scwin.f_Copy = async function () {
  let chkIdx = gr_bookingInfo.getCheckedIndex("selcYn");
  if (chkIdx.length == 0) {
    await $c.win.alert($p, "복사할 오더를 선택해주세요.");
    return;
  } else if (chkIdx.length > 1) {
    await $c.win.alert($p, "복사할 오더는 하나만 선택해주세요.");
    return;
  }
  scwin.f_BookingDetail("copy");
};

// 조회 콜백
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;

  // 조회후, 화면 넘어갈 때 보내기 위한 선사거래처/명 세팅
  scwin.shpCo = ed_shpCo.getValue().trim();
  scwin.shpCoNm = txt_shpCoNm.getValue().trim();
  let cnt = ds_bookingInfo.getRowCount();
  if (cnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, ["조회결과"]);
  } else {
    for (let i = 0; i < ds_bookingInfo.getRowCount(); i++) {
      let rowJson = ds_bookingInfo.getRowJSON(i);
      ds_bookingInfo.setCellData(i, "remainQty", rowJson.qty - rowJson.gateQty);
    }
  }
  totalRows.setValue(cnt);
};
scwin.gr_bookingInfo_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  // Booking세부사항 조회 
  scwin.f_BookingDetail();
};
scwin.udc_comCode_onblurCodeEvent = function (e) {
  if (ed_vsslCd.originalValue == ed_vsslCd.getValue()) {
    return;
  }
  scwin.f_ChkOpenCommonPopUp(ed_vsslCd.getValue(), 1);
};
scwin.ed_bookingNo_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.udc_comCode1_onblurCodeEvent = function (e) {
  if (ed_shpCo.originalValue == ed_shpCo.getValue()) {
    return;
  }
  scwin.f_ChkOpenCommonPopUp(ed_shpCo.getValue(), 3);
};
scwin.udc_comCode2_onblurCodeEvent = function (e) {
  if (ed_lineCd.originalValue == ed_lineCd.getValue()) {
    return;
  }
  scwin.f_ChkOpenCommonPopUp(ed_lineCd.getValue(), 5);
};
scwin.udc_comCode1_onblurNameEvent = function (e) {
  if (txt_shpCoNm.originalValue == txt_shpCoNm.getValue()) return;
  if (txt_shpCoNm.getValue() == "") {
    ed_shpCo.setValue("");
    return;
  }
  scwin.f_ChkOpenCommonPopUp(txt_shpCoNm.getValue(), 3, false);
};
scwin.udc_comCode1_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp(3, ed_shpCo.getValue(), txt_shpCoNm.getValue(), "F", "F");
};
scwin.udc_comCode2_onblurNameEvent = function (e) {
  if (txt_lineNm.originalValue == txt_lineNm.getValue()) return;
  if (txt_lineNm.getValue() == "") {
    ed_lineCd.setValue("");
    return;
  }
  scwin.f_ChkOpenCommonPopUp(txt_lineNm.getValue(), 5, false);
};
scwin.udc_comCode2_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp(5, ed_lineCd.getValue(), txt_lineNm.getValue(), "F", "F");
};
scwin.udc_comCode_onblurNameEvent = function (e) {
  if (txt_vsslNm.originalValue == txt_vsslNm.getValue()) return;
  if (txt_vsslNm.getValue() == "") {
    ed_vsslCd.setValue("");
    return;
  }
  scwin.f_ChkOpenCommonPopUp(txt_vsslNm.getValue(), 1, false);
};
scwin.udc_comCode_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp(1, ed_vsslCd.getValue(), txt_vsslNm.getValue(), "F", "F");
};
scwin.customFormatter = function (data, formattedData, rowIndex, columnIndex) {
  let columnId = this.getColumnID(columnIndex);
  if (columnId == "printYn") {
    let value = "";
    if (data == "1") {
      value = "YES";
    } else {
      value = "NO";
    }
    return value;
  } else if (columnId == "mcomOdrDcsnYn") {
    let value = "";
    if (data == "1") {
      value = "확정";
    } else {
      this.setCellColor(rowIndex, columnId, "red");
      value = "미확정";
    }
    return value;
  } else if (columnId == "mcomOdrCompleteYn") {
    let value = "";
    if (data == "1") {
      value = "완료";
    } else {
      if (this.getCellData(rowIndex, "mcomOdrDcsnYn") == "1") {
        this.setCellColor(rowIndex, columnId, "red");
      }
      value = "미완료";
    }
    return value;
  }
};
scwin.gr_bookingInfo_oneditend = function (rowIndex, columnIndex, value) {
  let colId = gr_bookingInfo.getColumnID(columnIndex);

  // 수량
  if (colId == "qty") {
    let gateQtyVal = ds_bookingInfo.getCellData(rowIndex, "gateQty");
    ds_bookingInfo.setCellData(rowIndex, "remainQty", value - gateQtyVal);
  }

  // 반출수량
  if (colId == "gateQty") {
    let qty = ds_bookingInfo.getCellData(rowIndex, "qty");
    ds_bookingInfo.setCellData(rowIndex, "remainQty", qty - value);
  }
};
scwin.fn_excelDown = function () {
  let options = {
    fileName: "오더요청현황" + ".xlsx",
    sheetName: "오더요청현황"
  };
  $c.data.downloadGridViewExcel($p, gr_bookingInfo, options);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_cndArea',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',codeId:'ed_shpCo','ev:onblurCodeEvent':'scwin.udc_comCode1_onblurCodeEvent','ev:onclickEvent':'scwin.udc_comCode1_onclickEvent',id:'udc_comCode1',maxlengthCode:'6',nameId:'txt_shpCoNm',onloadCallbackFunc:'',popupID:'btn_PopUp1',popupTitle:'선사,선사코드,선사명',selectID:'retrieveClntInfo',style:'',popupGridHeadTitle:'거래처코드,거래처명,거래처구분,거래처구분명,거래처주소,\'\',\'\',\'\',\'\',\'\'',popupGridHiddenColumn:'6,7,8,9,10','ev:onblurNameEvent':'scwin.udc_comCode1_onblurNameEvent',allowCharCode:'a-zA-Z0-9',btnId:'img_PopUp1',code:'shpCo',name:'shpCoNm',refDataCollection:'dma_cndInfo',objTypeCode:'Data',objTypeName:'Data',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'LINE ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',codeId:'ed_lineCd','ev:onblurCodeEvent':'scwin.udc_comCode2_onblurCodeEvent','ev:onclickEvent':'scwin.udc_comCode2_onclickEvent',id:'udc_comCode2',maxlengthCode:'6',nameId:'txt_lineNm',objTypeName:'Data',onloadCallbackFunc:'',popupGridHeadTitle:'LINE코드,LINE명,COL3,COL4,COL5,\'\',\'\',\'\',\'\',\'\'',popupID:'btn_PopUp2',popupTitle:'LINE,LINE코드,LINE명',selectID:'retrieveLineInfo',style:'',objTypeCode:'Data',popupGridHiddenColumn:'6,7,8,9,10',code:'lineCd',refDataCollection:'dma_cndInfo','ev:onblurNameEvent':'scwin.udc_comCode2_onblurNameEvent',btnId:'img_PopUp2',allowCharCode:'a-zA-Z0-9',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td pl0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width:130px;',allOption:'',id:'lc_periods',class:'req',direction:'auto',objType:'data',ref:'data:dma_cndInfo.periods',sortOption:'value'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'PICK-UP기간'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수신기간'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td pl0'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ed_alloccarReqDtFrom',edToId:'ed_alloccarReqDtTo',id:'udc_fromToCalendar_pick',mandatoryFrom:'true',mandatoryTo:'true',refDataMap:'dma_cndInfo',refEdDt:'alloccarReqDtTo',refStDt:'alloccarReqDtFrom',style:'',objTypeFrom:'Data',objTypeTo:'Data',titleFrom:'요청기간 From',titleTo:'요청기간 To'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td pl0'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CFS여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td pl0'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_cfsYn',objType:'data',ref:'data:dma_cndInfo.cfsYn',style:'width: 120px;',submenuSize:'auto',sortOption:'value'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NO'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'YES'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Booking 번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_bookingNo',placeholder:'',style:'width: 230px;',objType:'data',validExp:'Booking번호:no:maxLength=20',allowChar:'a-zA-Z0-9',ref:'data:dma_cndInfo.bookingNo','ev:onkeyup':'scwin.ed_bookingNo_onkeyup',maxlength:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',codeId:'ed_vsslCd','ev:onblurCodeEvent':'scwin.udc_comCode_onblurCodeEvent','ev:onclickEvent':'scwin.udc_comCode_onclickEvent',id:'udc_comCode',maxlengthCode:'4',nameId:'txt_vsslNm',onloadCallbackFunc:'',popupGridHeadTitle:'선박코드,선박명,\'\',\'\',\'\',\'\',\'\',\'\',\'\',\'\'',popupID:'btn_vsslCd',popupTitle:'선박,선박코드,선박명',selectID:'retrieveVsslCdInfo',style:'',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',code:'vsslCd',refDataCollection:'dma_cndInfo','ev:onblurNameEvent':'scwin.udc_comCode_onblurNameEvent',allowCharCode:'a-zA-Z0-9',validExpCode:'선박:no:length=4',objTypeCode:'data',objTypeName:'data',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확인 ',style:''}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_confirmCls',style:'width:120px;',submenuSize:'auto',objType:'data',ref:'data:dma_cndInfo.confirmCls',sortOption:'value'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미확인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더생성',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_odrCreatCls',style:'width:120px;',submenuSize:'auto',objType:'data',ref:'data:dma_cndInfo.odrCreatCls',sortOption:'value'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미생성'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'오더요청현황',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',style:'',gridID:'gr_bookingInfo',gridDownFn:'scwin.fn_excelDown',gridDownYn:'Y',btnPlusYn:'Y',btnUser:'Y',templateYn:'N',id:'udc_top',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',dataList:'data:ds_bookingInfo',scrollByColumn:'false',style:'',id:'gr_bookingInfo',visibleRowNum:'14','ev:oncelldblclick':'scwin.gr_bookingInfo_oncelldblclick',class:'wq_gvw',checkReadOnlyOnPasteEnable:'','ev:oneditend':'scwin.gr_bookingInfo_oneditend',columnMove:'true',fixedColumn:'3',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'checkbox',id:'column12',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',id:'column11',value:'PICK-UP<br/>일자',blockSelect:'false',displayMode:'label',skipKeyMoveEditMode:'false'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column10',value:'LINE',blockSelect:'false',displayMode:'label',skipKeyMoveEditMode:'false'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column9',value:'BK',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'Shipper',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',value:'출발작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'발행여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'DOOR장소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'도착작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column41',value:'선박/항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'Closing<br/>Time',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'확인일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'당사오더',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'당사오더<br/>생성일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column31',value:'확정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'확정일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column27',value:'완료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'완료일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column51',value:'수신일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column49',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'반출수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column45',value:'잔량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column47',value:'특이사항',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'checkbox',id:'selcYn',blockSelect:'false',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',id:'pickupdt',blockSelect:'false',displayMode:'label',class:'linktype',style:'',readOnly:'true',displayFormat:'####/##/##',skipKeyMoveEditMode:'false'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'lineCd',blockSelect:'false',displayMode:'label',readOnly:'true',skipKeyMoveEditMode:'false'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'bookingNo',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'reqMchtNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',id:'dptWrkPlNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'printYn',displayMode:'label',readOnly:'true',customFormatter:'scwin.customFormatter',textAlign:'left'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',id:'doorWrkPlNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',id:'arvWrkPlNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',id:'vsslCdPortcnt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'closeDtm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'confirmDtm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mcomOdrNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcomOdrCreateDtm',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd HH:mm',ioFormat:'yyyyMMddHHmmss',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'mcomOdrDcsnYn',displayMode:'label',readOnly:'true',customFormatter:'scwin.customFormatter'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcomOdrDcsnDtm',displayMode:'label',displayFormat:'yyyy/MM/dd HH:mm',dataType:'date',ioFormat:'yyyyMMddHHmmss',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'mcomOdrCompleteYn',displayMode:'label',readOnly:'true',customFormatter:'scwin.customFormatter'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcomOdrCompleteDtm',displayMode:'label',displayFormat:'yyyy/MM/dd HH:mm',dataType:'date',ioFormat:'yyyyMMddHHmmss',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rcvDtm',displayMode:'label',ioFormat:'yyyyMMddHHmmss',dataType:'date',displayFormat:'yyyy/MM/dd HH:mm',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'qty',displayMode:'label',dataType:'number',displayFormat:'#,###',allowChar:'0-9',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'gateQty',displayMode:'label',dataType:'number',displayFormat:'#,###',allowChar:'0-9',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'',id:'remainQty',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',allowChar:'0-9',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'rmk',displayMode:'label',readOnly:'false'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',disabled:'',style:'',id:'chb_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'0',class:'chk-grp',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',disabled:'',style:'',id:'chb_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'0',class:'chk-grp',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_Copy',style:'',id:'btn_copy',type:'button',class:'btn white'},E:[{T:1,N:'xf:label',E:[{T:3,text:'오더복사'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'P','ev:onclick':'scwin.f_OzReport',style:'',id:'btn_print',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]}]}]}]}]}]}]}]})