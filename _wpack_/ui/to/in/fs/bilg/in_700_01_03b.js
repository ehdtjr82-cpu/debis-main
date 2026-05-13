/*amd /ui/to/in/fs/bilg/in_700_01_03b.xml 47114 63d02b8b9299b5e824d305e3eab347d58ec59a75042417b95418a4580ad38a73 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'confirmDtSt',name:'거래명세서일자(시작)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmDtEnd',name:'거래명세서일자(종료)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellYm',name:'매출년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtSt',name:'전표일자(시작)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtEnd',name:'전표일자(종료)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:key',A:{id:'docuStat',name:'처리여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_master_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'modCls',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcNo',name:'세금계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procYn',name:'처리여부',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'계산서금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'총합계금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellYm',name:'매출년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'확인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipClsCd',name:'전표구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDtOld',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'number'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debisSlipNo',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmId',name:'프로그램ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctYn',name:'#N/A',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_condition',action:'/to.in.fs.bilg.RetrieveDimtTaxinvcListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_condition_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/to.in.fs.bilg.SaveDimtTaxinvcCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_sumMaster',action:'/to.in.fs.bilg.SaveDimtTaxinvcUnityCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*
행추가삭제 udc 정상동작 안하여 임시로 버튼 세팅함. 차후 수정
f_canOpenPopUp 확인필요
*/

scwin.empNo = "";
scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
scwin.vQryEndMon = scwin.vQryEndDt.substring(0, 6);
scwin.currow = "";

//scwin.statusFlag = "";

scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  //console.log(memJson);
  scwin.empNo = memJson.userId;
  const codeOptions = [{
    grpCd: "FM052",
    compID: "lc_docuStat,gr_master:procYn"
  } // 처리여부
  ];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_SetDefaultData();

    //scwin.f_retrieve();
    udc_comm.hide();
  }, {
    "delay": 50
  });
};
scwin.f_SetDefaultData = function () {
  ed_confirmDtSt.setValue(scwin.vQryStDt); // 적용일자시작
  ed_confirmDtEnd.setValue(scwin.vQryEndDt); // 적용일자종료	
  ica_sellYm.setValue(scwin.vQryEndMon);
  ////임시
  /*
  ed_confirmDtSt.setValue('20250131');
  ed_confirmDtEnd.setValue('20250131');
  ica_sellYm.setValue("");
  */
  ////임시	
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition, [ed_confirmDtSt, ed_confirmDtEnd]);
  $c.gus.cfInitHidVal($p, tb_searchCondition);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  ed_confirmDtSt.setValue(scwin.vQryStDt); // 적용일자시작
  ed_confirmDtEnd.setValue(scwin.vQryEndDt); // 적용일자종료	
  ica_sellYm.setValue(scwin.vQryEndMon);
};
scwin.f_retrieve = async function () {
  //scwin.statusFlag = "RETRIEVE";	
  var chk = await $c.gus.cfValidate($p, tb_searchCondition);
  if (!chk) {
    return;
  }
  ed_confirmDtSt.setValue(ed_confirmDtSt.getValue().trim());
  ed_confirmDtEnd.setValue(ed_confirmDtEnd.getValue().trim());
  ica_sellYm.setValue(ica_sellYm.getValue().trim());
  ed_slipDtSt.setValue(ed_slipDtSt.getValue().trim());
  ed_slipDtEnd.setValue(ed_slipDtEnd.getValue().trim());
  if (ed_confirmDtSt.getValue() > ed_confirmDtEnd.getValue()) {
    $c.win.alert($p, "거래명세서일자 기간을 잘못 입력하셨습니다.");
    return;
  }
  if (ed_confirmDtSt.getValue().length == 8 && ed_confirmDtEnd.getValue().length == 8 || ica_sellYm.getValue().length == 6 || ed_slipDtSt.getValue().length == 8 && ed_slipDtEnd.getValue().length) {
    $c.sbm.execute($p, sbm_condition);
  } else {
    $c.win.alert($p, "거래명세서일자,매출년월,전표일자 중에 하나는 입력하여야 합니다.");
  }
};

//-------------------------------------------------------------------------
// 통합
//-------------------------------------------------------------------------
scwin.f_sumMaster = async function () {
  if (ds_master.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["세금계산서목록"]); // 은(는) 변경사항이 없습니다
    return;
  }
  var chk = await $c.gus.cfValidate($p, [gr_master]);
  if (!chk) {
    return;
  }
  var spplyDt = "";
  var slipDt = "";
  var bilgClntNo = "";
  var bilgClntNm = "";
  for (var row = 0; row <= ds_master.getRowCount(); row++) {
    if (ds_master.getRowStatus(row) == "C") {
      $c.win.alert($p, "저장하신 후 통합할 수 있습니다.");
      return;
    }
    if (ds_master.getCellData(row, "modCls") == "T") {
      if (spplyDt != "" && spplyDt != ds_master.getCellData(row, "spplyDt")) {
        $c.win.alert($p, "공급일자가 같아야 합니다.");
        return;
      }
      if (slipDt != "" && slipDt != ds_master.getCellData(row, "slipDt")) {
        $c.win.alert($p, "전표일자가 같아야 합니다.");
        return;
      }
      if (bilgClntNo != "" && bilgClntNo != ds_master.getCellData(row, "bilgClntNo")) {
        $c.win.alert($p, "청구거래처가 같아야 합니다.");
        return;
      }
      spplyDt = ds_master.getCellData(row, "spplyDt");
      slipDt = ds_master.getCellData(row, "slipDt");
      bilgClntNo = ds_master.getCellData(row, "bilgClntNo");
    }
  }
  var confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirm) {
    $c.sbm.execute($p, sbm_sumMaster);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  scwin.fncCheckAll(0);
  if (ds_master.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["세금계산서목록"]); // 은(는) 변경사항이 없습니다
    return;
  }
  var chk = await $c.gus.cfValidate($p, [gr_master], null, true);
  if (!chk) {
    return;
  }
  var confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirm) {
    $c.sbm.execute($p, sbm_save);
  }
};

//----------------------------------------------------------------------------
//   check function
//----------------------------------------------------------------------------  
scwin.fncCheckAll = function (isChecked) {
  var check = isChecked == 1 ? "T" : "";
  //gr_master.Redraw = false;
  for (row = 0; row <= ds_master.getRowCount(); row++) {
    //if(!(cfIsNull(ds_master.NameValue(row, "wrkIndictPrgsStsCd")) || ds_master.NameValue(row, "wrkIndictPrgsStsCd") == "<%=TOConstants.WRK_INDICT_PRGS_STS_INDICT%>")) {
    //}else{
    ds_master.setCellData(row, "modCls", check);
    //}
  }
  //gr_master.Redraw = true;
};

//----------------------------------------------------------------------------
//    인천북항 자회사 매출전표입력 팝업 호출. 자회사 회계시스템 추가사항.2016.10.25
//----------------------------------------------------------------------------  
scwin.f_certiNoDetail = function (row) {
  var pgmUrl = "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_01_09b.xml";
  var title = "인천북항 자회사 매출 전표 입력";
  var condition;
  var certiNo = ds_master.getCellData(row, "certiNo"); //거래명세서번호   
  var crn = ds_master.getCellData(row, "crn"); //사업자번호 
  var crnNm = ds_master.getCellData(row, "crnNm"); //사업자명
  var spplyAmt = ds_master.getCellData(row, "spplyAmt"); //공급가액 
  var vat = ds_master.getCellData(row, "vat"); //부가세   
  var bilgClntNo = ds_master.getCellData(row, "bilgClntNo"); //청구거래처 번호
  var bilgClntNm = ds_master.getCellData(row, "bilgClntNm"); //청구거래처명 
  var summary = ds_master.getCellData(row, "summary"); //적요  
  var spplyDt = ds_master.getCellData(row, "spplyDt"); //공급일자 (2017.01.12 추가)   		
  var slipDt = ds_master.getCellData(row, "slipDt"); //전표일자 (2017.01.12 추가)   
  var acctYn = ds_master.getCellData(row, "acctYn"); //항만안전관리비 계정여부 (2022.11.21 추가)   

  condition = {
    certiNo: certiNo,
    crn: crn,
    crnNm: crnNm,
    spplyAmt: spplyAmt,
    vat: vat,
    bilgClntNo: bilgClntNo,
    bilgClntNm: bilgClntNm,
    summary: summary,
    spplyDt: spplyDt,
    slipDt: slipDt,
    acctYn: acctYn
  };
  $c.win.openMenu($p, title, pgmUrl, "fi_201_01_09b", condition, {
    openAction: "exist"
  });
  /*
  condition = "?certiNo="+certiNo  
              + "&crn="+crn  
              + "&crnNm="+crnNm  
              + "&spplyAmt="+spplyAmt  
              + "&vat="+vat   
  // 		 		 	+ "&confirmDt="+confirmDt   
              + "&bilgClntNo="+bilgClntNo  
              + "&bilgClntNm="+bilgClntNm  
              + "&summary="+summary   
              + "&spplyDt="+spplyDt     		 		 	
              + "&slipDt="+slipDt     		  		 		 	
              + "&acctYn="+acctYn     		  		 		 	
              ;
  */
};
scwin.f_openBuyClntGridPopUp = function (dataSet, pWinCloseTF, colid, colArray, newData = null) {
  var row = dataSet.getRowPosition();
  if (row < 0) return;
  scwin.currow = row;
  if (newData == null) newData = dataSet.getCellData(row, colid);
  udc_comm.cfCommonPopUp(scwin.callbackDimtSellCertiList // XML상의 SELECT ID  
  , newData // 화면에서의 ??? Code Element의  Value
  , '' // 화면에서의 ??? Name Element의  Value
  , 'T' // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
  , null // 검색 결과  컬럼의 보여주는  개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서  
  , null // 보여주는 각 컬럼들의 폭  
  , null // 컬럼중에서 숨기는  컬럼 지정 
  , null // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
  , "700" // POP-UP뛰을때 원도우의 사용자 정의  폭
  , "400" // POP-UP뛰을때 우도우의 사용자 정의  높이  
  , null // 윈도우 위치 Y좌표 
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부 ("F")
  , 'F' // 전체검색허용여부 ("F")
  , null // POP-UP Window Title 검색어1,2  ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};
scwin.callbackDimtSellCertiList = function (rtnList) {
  if (rtnList == null) {
    return;
  }
  for (var i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "certiNo") == rtnList[0]) {
      return;
    }
  }
  //조회된 데이타를 컬럼에 적용한다.
  //console.log("rtnList : "+rtnList);
  $c.gus.f_SetGridReturnValue($p, rtnList, ds_master, scwin.currow, ["certiNo", "sellYm", "bilgClntNo", "bilgClntNm", "crn", "spplyAmt", "vat", "bilgLodeptCd", "confirmDt", "summary"]);
  scwin.f_calculationAmt(scwin.currow);
  //scwin.f_openBuyClntGridPopUp(ds_master, pAutoClostTF, colid, ["certiNo","sellYm","bilgClntNo","bilgClntNm","crn","spplyAmt","vat","bilgLodeptCd","confirmDt","summary"]);
  //조회된 데이타를 임시로 저장한다.
  //$c.gus.cfPrepareHidVal(dataSet, scwin.currow, $c.gus.f_GetColumnNames(dataSet));
};

//-------------------------------------------------------------------------
// 매입거래처 검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openPchsClntPopUp = function () {
  var inObj = ed_bilgClntNo;
  var pairObj = ed_bilgClntNm;
  //var pAutoClose = f_getDefaultAutoClose();
  var pAutoClose = "T";
  /*
      if(!scwin.f_canOpenPopUp(inObj, pairObj)) {
          return;
      }
  */
  //매입거래처 팝업
  udc_bilgClntNo.cfCommonPopUp(scwin.udc_bilgClntNo_callBackFunc // XML상의 SELECT ID	
  , $c.gus.cfGetValue($p, inObj) // 화면에서의 ??? Code Element의	Value
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
  , "매입거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  , null);
};
scwin.udc_bilgClntNo_callBackFunc = function (ret) {
  //$c.gus.cfSetReturnValue(rtnList, inObj, pairObj);

  if (ret != null && ret[0] != "") {
    ed_bilgClntNo.setValue(ret[0]);
    ed_bilgClntNm.setValue(ret[1]);
  }
};

//-------------------------------------------------------------------------
// 팝업 여부 체크
//-------------------------------------------------------------------------
scwin.f_canOpenPopUp = function (inObj, pairObj) {
  //cfCanOpenPopup
  //if (!f_isPopUpClicked()) {
  if ($c.gus.cfIsNull($p, pairObj)) {
    if ($c.gus.cfGetValue($p, inObj) == "") {
      $c.gus.cfClearPairObj($p, inObj);
      $c.gus.cfSetHiddenValue($p, inObj, "");
      return false;
    }
    if ($c.gus.cfGetValue($p, inObj) == $c.gus.cfGetHiddenValue($p, inObj)) {
      return false;
    }
    return true;
  } else {
    if (!$c.gus.cfIsNull($p, event)) {
      if (!$c.gus.cfCanOpenPopup($p, pairObj, inObj)) {
        return false;
      }
      $c.gus.cfClearPairObj($p, inObj);
    } else {
      if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
        return false;
      }
      $c.gus.cfClearPairObj($p, pairObj);
    }
  }
  //}
  return true;
};
scwin.chkGridValid = function (oldRowIndex, newRowIndex) {
  var chk = true;
  if (oldRowIndex != null && newRowIndex != null && oldRowIndex < ds_master.getRowCount()) {
    // 행삭제시에 chkGridValid 타는것 방지용

    if (oldRowIndex > -1) {
      if (ds_master.getCellData(oldRowIndex, "certiNo") == "") {
        $c.win.alert($p, "필수입력 에러:거래명세서번호");
        return false;
      }
      if (ds_master.getCellData(oldRowIndex, "spplyAmt") == "") {
        $c.win.alert($p, "필수입력 에러:공급가액");
        return false;
      }
      if (ds_master.getCellData(oldRowIndex, "vat") == "") {
        $c.win.alert($p, "필수입력 에러:부가세");
        return false;
      }
      if (ds_master.getCellData(oldRowIndex, "sumAmt") == "") {
        $c.win.alert($p, "필수입력 에러:합계");
        return false;
      }
      if (ds_master.getCellData(oldRowIndex, "spplyDt") == "") {
        $c.win.alert($p, "필수입력 에러:공급일자");
        return false;
      }
      if (ds_master.getCellData(oldRowIndex, "slipDt") == "") {
        $c.win.alert($p, "필수입력 에러:전표일자");
        return false;
      }
    }
  }
};
scwin.setCertiType = function (info) {
  //console.log("info  : ");
  //console.log(info);
  var colIndex = info.colIndex;
  var rowIndex = info.rowIndex;
  var returnInfo;
  //console.log("rowIndex : "+ rowIndex);
  var status = ds_master.getRowStatus(rowIndex);
  //console.log("status : "+ status);
  if (status == "C") {
    //console.log("C");
    returnInfo = {
      //id : "certiNo",
      inputType: "select"
      //options : {viewType: "icon", readOnly : "false"}
    };
  } else if (status == "R") {
    //console.log("R");
    returnInfo = {
      //id : "certiNo",
      inputType: "link"
      //options : {viewType: "icon", textAlign : "left", displayMode : "value"},
    };
  }
  return returnInfo;
};
scwin.setCertiType1 = function () {
  var info = {
    inputType: "link"
  };
  for (i = 0; i < ds_master.getRowCount(); i++) {
    gr_master.setCellInputType(i, "certiNo", info);
  }
};
scwin.setCertiType2 = function (idx) {
  var info = {
    inputType: "textImage"
    /*
    options : { 
        selectedData : "false", 
        viewType: "icon" 
    }, 
    itemSet : { 
        nodeset: "colorNode/vector", 
        label: "label/@value", 
        value: "value/@value" 
    } 
    */
  };
  //gr_master.setCellInputType(ds_master.getRowPosition(), "certiNo", info);
  gr_master.setCellInputType(idx, "certiNo", info);
  ds_master.setRowPosition(idx);
  gr_master.setFocusedCell(idx, 0, false);
  //alert(ds_master.getRowPosition());
};
scwin.addGridRow = function () {
  var idx = ds_master.getRowCount();
  ds_master.insertRow(idx);
  scwin.setCertiType2(idx);
  spa_cnt.setValue(ds_master.getRowCount());
};

//-------------------------------------------------------------------------
// 행 삭제
//-------------------------------------------------------------------------
scwin.f_deleteMaster = function () {
  //var chkCnt = 0;
  if (ds_master.getRowCount() == 0) {
    $c.win.alert($p, "세금계산서가없습니다.");
    return;
  }
  if (ds_master.getCellData(ds_master.getRowPosition(), "procYn") == "1") {
    $c.win.alert($p, "전표가 처리되어 삭제할 수 없습니다.");
    return;
  }
  let row = ds_master.getRowPosition();
  let rowCnt = ds_master.getRowCount();
  let slipDt = ds_master.getCellData(row, "slipDt");
  let slipNo = ds_master.getCellData(row, "slipNo");
  for (j = rowCnt - 1; j > -1; j--) {
    if (slipDt == ds_master.getCellData(j, "slipDt") && slipNo == ds_master.getCellData(j, "slipNo")) {
      let rowStatus = ds_master.getRowStatus(j);
      if (rowStatus == "C") {
        ds_master.removeRow(j);
      } else {
        ds_master.deleteRow(j);
        ds_master.setRowPosition(j);
        gr_master.setFocusedCell(j, 0);
      }
      //chkCnt++;
    }
  }

  // if(chkCnt > 0){
  //     ds_master.setRowPosition(ds_master.getRowCount()-1);
  //     gr_master.setFocusedCell(ds_master.getRowCount()-1, 0, false);
  // }

  //cfShowTotalRows(totalRows1,ds_master.CountRow);
  spa_cnt.setValue(ds_master.getRowCount());
};

//-------------------------------------------------------------------------
// 행 취소
//-------------------------------------------------------------------------
scwin.f_cancelMaster = function () {
  //var chkCnt = 0;
  if (ds_master.getRowCount() == 0) {
    $c.win.alert($p, "세금계산서가없습니다.");
    return;
  }
  let row = ds_master.getRowPosition();
  let rowCnt = ds_master.getRowCount();
  let slipDt = ds_master.getCellData(row, "slipDt");
  let slipNo = ds_master.getCellData(row, "slipNo");
  for (j = rowCnt - 1; j > -1; j--) {
    if (slipDt == ds_master.getCellData(j, "slipDt") && slipNo == ds_master.getCellData(j, "slipNo")) {
      let rowStatus = ds_master.getRowStatus(j);
      if (rowStatus == "C") {
        ds_master.removeRow(j);
      } else {
        ds_master.undoRow(j);
        ds_master.setRowPosition(j);
        gr_master.setFocusedCell(j, 0);
      }
      //chkCnt++;
    }
  }

  // if(chkCnt > 0){
  //     ds_master.setRowPosition(ds_master.getRowCount()-1);
  // }

  //cfShowTotalRows(totalRows1,ds_master.CountRow);
  spa_cnt.setValue(ds_master.getRowCount());
};
scwin.f_calculationAmt = function (row) {
  //console.log(ds_master.getCellData(row,"spplyAmt"));
  //console.log(ds_master.getCellData(row,"vat"));
  //console.log(parseInt(ds_master.getCellData(row,"spplyAmt")) + parseInt(ds_master.getCellData(row,"vat")));
  ds_master.setCellData(row, "sumAmt", parseInt(ds_master.getCellData(row, "spplyAmt")) + parseInt(ds_master.getCellData(row, "vat")));
};

//////////////// OBJECT EVENT START//////////////////

scwin.ds_master_onbeforerowpositionchange = function (info) {
  /*
  if(ds_master.NameValue(row,'certiNo')=='') { cfAlertMsg("필수입력 에러:거래명세서번호"); return false; }
  if(ds_master.NameValue(row,'spplyAmt')=='') { cfAlertMsg("필수입력 에러:공급가액"); return false; }
  //if(ds_master.NameValue(row,'vat')=='') { cfAlertMsg("필수입력 에러:부가세"); return false; }
  if(ds_master.NameValue(row,'sumAmt')=='') { cfAlertMsg("필수입력 에러:합계"); return false; }
  if(ds_master.NameValue(row,'spplyDt')=='') { cfAlertMsg("필수입력 에러:공급일자"); return false; }
  if(ds_master.NameValue(row,'slipDt')=='') { cfAlertMsg("필수입력 에러:전표일자"); return false; }
  */

  //console.log(info);
  var oldRowIndex = info.oldRowIndex;
  var newRowIndex = info.newRowIndex;
  scwin.chkGridValid(oldRowIndex, newRowIndex);
};
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  /*
  if (row < 1) {
      return;
  }
  */

  //var pchsCertiNo = ds_master.NameString(row,"pchsCertiNo");

  var colid = gr_master.getColumnID(columnIndex);
  if (ds_master.getRowStatus(ds_master.getRowPosition()) != "C") {
    switch (colid) {
      case "modCls":
      case "summary":
        gr_master.setCellReadOnly(rowIndex, columnIndex, false);
        break;
      case "spplyDt":
        var count = 0;
        for (var i = 0; i < ds_master.getRowCount(); i++) {
          if (ds_master.getCellData(rowIndex, "slipDt") == ds_master.getCellData(i, "slipDt") && ds_master.getCellData(rowIndex, "slipNo") == ds_master.getCellData(i, "slipNo")) {
            count++;
          }
        }
        if (count > 1) {
          //cfAlertMsg("통합된 세금계산서는 수정할 수 없습니다.");
          //ds_master.Undo(i);
          gr_master.setCellReadOnly(rowIndex, columnIndex, true);
        } else {
          gr_master.setCellReadOnly(rowIndex, columnIndex, false);
        }
        break;
      case "slipDt":
        if (ds_master.getCellData(rowIndex, "modCls") == "T") {
          gr_master.setCellReadOnly(rowIndex, columnIndex, false);
        } else {
          gr_master.setCellReadOnly(rowIndex, columnIndex, true);
        }
        break;
      //case "spplyAmt" :
      //case "vat" :
      //	gr_master.ColumnProp(colid,"Edit") = "Numeric";  //realNumeric
      //	break;
      default:
        gr_master.setCellReadOnly(rowIndex, columnIndex, true);
    }
  } else {
    switch (colid) {
      case "certiNo":
      // scwin.gr_master_oneditkeyup 이벤트로 대체
      //gr_master.ColumnProp(colid,"Edit") = "UPPER";
      //break;
      case "modCls":
      case "spplyDt":
      case "slipDt":
      case "summary":
        gr_master.setCellReadOnly(rowIndex, columnIndex, false);
        break;
      //case "spplyAmt" :
      //case "vat" :
      //	gr_master.ColumnProp(colid,"Edit") = "Numeric";  //realNumeric
      //	break;
      default:
        gr_master.setCellReadOnly(rowIndex, columnIndex, true);
    }
  }
  /*
  switch (colid) {
      case "spplyDt":
      case "slipDt" :
          this.UrlImages = CALENDAR_BTN;
          break;
      default :
          this.UrlImages = SEARCH_BTN;
          break;
  }
  */
};
scwin.gr_master_oneditkeyup = function (info) {
  const inputEl = event.target;
  //var oldValue = info.oldValue;
  var rtnValue = info.newValue;
  //console.log(info);
  var colId = info.colID;
  if (colId == "certiNo") {
    //console.log("existKoean : " +$c.str.existKorean(info.newValue));
    /*
    if($c.str.existKorean(info.newValue)){
         console.log("infoOldValue : " + oldValue);
         rtnValue = oldValue;
        console.log("changed value : "+ rtnValue);
    }
    */
    inputEl.value = rtnValue.toUpperCase();
  }
};
scwin.gr_master_ontextimageclick = function (rowIndex, columnIndex) {
  let colid = gr_master.getColumnID(columnIndex);
  switch (colid) {
    case "certiNo":
      let pAutoClostTF = "F";
      scwin.f_openBuyClntGridPopUp(ds_master, pAutoClostTF, colid, ["certiNo", "sellYm", "bilgClntNo", "bilgClntNm", "crn", "spplyAmt", "vat", "bilgLodeptCd", "confirmDt", "summary"]);

      //scwin.f_calculationAmt(rowIndex, colid);
      break;
  }
};
scwin.gr_master_oneditend = function (rowIndex, columnIndex, newData) {
  let colid = gr_master.getColumnID(columnIndex);
  switch (colid) {
    case "certiNo":
      let oldData = ds_master.getCellData(rowIndex, colid);
      if (newData == "" || oldData == newData) break;
      let pAutoClostTF = "T";
      scwin.f_openBuyClntGridPopUp(ds_master, pAutoClostTF, colid, ["certiNo", "sellYm", "bilgClntNo", "bilgClntNm", "crn", "spplyAmt", "vat", "bilgLodeptCd", "confirmDt", "summary"], newData);
      break;
  }
};
scwin.gr_master_onafteredit = function (rowIndex, columnIndex, value) {
  let colid = gr_master.getColumnID(columnIndex);
  switch (colid) {
    case "vat":
      scwin.f_calculationAmt(row, colid);
      break;
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_retrieve();
};
scwin.sbm_condition_submitdone = function (e) {
  var rowCnt = ds_master.getRowCount();
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
  spa_cnt.setValue(rowCnt);
  var slipNo = "";
  for (var i = 0; i < ds_master.getRowCount(); i++) {
    slipNo = ds_master.getCellData(i, "slipNo");
    if (slipNo == 0) {
      ds_master.setCellData(i, "slipNo", "");
    }
  }
  scwin.setCertiType1();
  if (rowCnt > 0) {
    ds_master.setRowPosition(0);
    gr_master.setFocusedCell(0, 0);
  }
};
scwin.btn_sum_onclick = function (e) {
  scwin.f_sumMaster();
};
scwin.btn_save1_onclick = function (e) {
  scwin.f_Save();
};
scwin.rowAddFn = function () {
  var chk = scwin.chkGridValid(ds_master.getRowPosition(), "0");
  if (chk != false) {
    scwin.addGridRow();
  }
};

//////////////// OBJECT EVENT END  //////////////////

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.udc_bilgClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_openPchsClntPopUp();
};
scwin.udc_bilgClntNo_onblurCodeEvent = function (e) {
  scwin.f_openPchsClntPopUp();
};
scwin.udc_bilgClntNo_onclickEvent = function (e) {
  scwin.f_openPchsClntPopUp();
};
scwin.sbm_save_submitdone = function (e) {
  //console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_retrieve();
  }
};
scwin.gr_master_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  var colid = gr_master.getColumnID(columnIndex);
  if (colid == "certiNo") {
    if (ds_master.getCellData(rowIndex, "certiNo") != "" && ds_master.getCellData(rowIndex, "debisSlipNo") == "") {
      scwin.f_certiNoDetail(rowIndex);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tb_searchCondition',class:'w2tb '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th '},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'거래명세서일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'confirmDtSt',refDataMap:'dma_condition',edFromId:'ed_confirmDtSt',edToId:'ed_confirmDtEnd',style:'',id:'udc_cal1',refEdDt:'confirmDtEnd',objTypeBtn:'data',validChkYn:'Y'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'매출년월 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:inputCalendar',A:{ref:'data:dma_condition.sellYm',style:'',id:'ica_sellYm',class:'form-control cal',calendarValueType:'yearMonth',displayFormat:'yyyy/MM'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'청구거래처 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{refDataCollection:'dma_condition',codeId:'ed_bilgClntNo',selectID:'retrieveClntInfo',popupID:'popupBilgClntNo',nameId:'ed_bilgClntNm',style:'',id:'udc_bilgClntNo',btnId:'btn_bilgClntNo',allowCharCode:'0-9,A-Z,a-z','ev:onviewchangeNameEvent':'scwin.udc_bilgClntNo_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_bilgClntNo_onblurCodeEvent',code:'bilgClntNo','ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9,A-Z,a-z',btnId:'btn_comm',codeId:'ed_commCd',id:'udc_comm',nameId:'ed_commNm',popupID:'',selectID:'retrieveDimtSellCertiList',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'전표일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'slipDtSt',refDataMap:'dma_condition',edFromId:'ed_slipDtSt',edToId:'ed_slipDtEnd',style:'',id:'udc_cal2',refEdDt:'slipDtEnd',objTypeBtn:'data',validChkYn:'Y'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'거래명세서번호 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',id:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{ref:'data:dma_condition.certiNo',style:'',id:'ed_certiNo',placeholder:'',class:'form-control w100','ev:onkeyup':'scwin.onkeyup',allowChar:'0-9,A-Z,a-z',maxlength:'10'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'적요 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:dma_condition.summary',style:'width: 230px;',id:'ed_summary',placeholder:'',class:'form-control '}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'처리여부 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',chooseOptionLabel:'전체',ref:'data:dma_condition.docuStat',chooseOption:'true',editType:'select',style:'',id:'lc_docuStat',class:'form-control w80',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_fieldClear_onclick',style:'',id:'btn_fieldClear',type:'button',class:'btn ico refresh'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_search_onclick',disabled:'',style:'',id:'btn_search',type:'button',class:'btn sch',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'세금계산서 목록',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"매입내역.xlsx","sheetName" : "매입내역", "type":"4+8+16"}',gridUpYn:'N',grp:'',style:'',gridID:'gr_master'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:oncellclick':'scwin.gr_master_oncellclick','ev:ontextimageclick':'scwin.gr_master_ontextimageclick','ev:oneditkeyup':'scwin.gr_master_oneditkeyup',setCellInputTypeCustom:'true',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_master',style:'',autoFit:'none',id:'gr_master','ev:onafteredit':'scwin.gr_master_onafteredit',visibleRowNum:'10',class:'wq_gvw',rowStatusVisible:'true',gridName:'매입내역','ev:oncelldblclick':'scwin.gr_master_oncelldblclick','ev:oneditend':'scwin.gr_master_oneditend',dataName:'매입내역',validFeatures:'ignoreStatus=no',validExp:'certiNo:거래명세서번호:yes:key,spplyAmt:공급가액:no:minNumber=0,vat:부가세:no:minNumber=0,sumAmt:합계:no:minNumber=0,spplyDt:공급일자:yes,slipDt:전표일자:yes'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column1',displayMode:'label',fixColumnWidth:'true',value:'선택'}},{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',id:'column17',value:'세금계산서<br/>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'데비스<br/>전표번호',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'거래명세서<br/>번호',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',id:'column11',value:'청구거래처<br/>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'청구거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column3',value:'처리<br/>여부',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column5',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'사업자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'공급가액',class:'col-type1',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'부가세',class:'col-type1',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'합계',class:'col-type1',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'매출년월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'거래명세서<br/>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'공급일자',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',id:'column41',value:'전표구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'전표일자',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column35',value:'적요',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'150',inputType:'text',id:'column33',value:'부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'150',inputType:'text',id:'column31',value:'프로그램id',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'항만안전관리<br/>여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'modCls',displayMode:'label',fixColumnWidth:'true',checkAlways:'true',trueValue:'T',valueType:'other',falseValue:'$blank'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'taxinvcNo',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',readOnly:'true',id:'debisSlipNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'custom',readOnly:'false',id:'certiNo',allowChar:'A-Za-z0-9',mandatory:'true',displayMode:'label',class:'linktype',maxLength:'12'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',readOnly:'true',id:'bilgClntNo',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',readOnly:'true',id:'bilgClntNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',readOnly:'true',id:'procYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',readOnly:'true',id:'crn',displayMode:'label',displayFormat:'###-##-#####'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',readOnly:'true',id:'crnNm',displayMode:'label'}},{T:1,N:'w2:column',A:{minNumber:'0',textAlign:'right',width:'100',displayFormat:'#,###',inputType:'text',readOnly:'true',id:'spplyAmt',mandatory:'true',displayMode:'label'}},{T:1,N:'w2:column',A:{minNumber:'0',textAlign:'right',width:'100',displayFormat:'#,###',inputType:'text',readOnly:'true',id:'vat',mandatory:'true',displayMode:'label'}},{T:1,N:'w2:column',A:{minNumber:'0',textAlign:'right',width:'100',displayFormat:'#,###',inputType:'text',readOnly:'true',id:'sumAmt',mandatory:'true',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',displayFormat:'####/##',inputType:'text',readOnly:'true',id:'sellYm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',displayFormat:'####/##/##',inputType:'text',readOnly:'true',id:'confirmDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'spplyDt',mandatory:'true',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',readOnly:'true',id:'slipClsCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'slipDt',mandatory:'true',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',readOnly:'true',id:'slipNo',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'170',inputType:'text',id:'summary',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'bilgLodeptCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',inputType:'text',id:'pgmId',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'acctYn',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'spplyAmt\')',textAlign:'right',width:'100',displayFormat:'#,###',inputType:'expression',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'vat\')',textAlign:'right',width:'100',displayFormat:'#,###',inputType:'expression',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'sumAmt\')',textAlign:'right',width:'100',displayFormat:'#,###',inputType:'expression',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'spa_cnt',label:'0',class:'num',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{rowDelFunction:'scwin.f_deleteMaster',cancelFunction:'scwin.f_cancelMaster',rowAddFunction:'scwin.rowAddFn',addFunction:'scwin.addGridRow',btnCancelYn:'Y',style:'',gridID:'gr_master',btnDelYn:'N'}}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_sum_onclick',style:'',id:'btn_sum',label:'저장',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'통합'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_save1_onclick',style:'',id:'btn_save1',label:'저장',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})