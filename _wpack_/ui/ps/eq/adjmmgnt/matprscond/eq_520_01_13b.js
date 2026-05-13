/*amd /ui/ps/eq/adjmmgnt/matprscond/eq_520_01_13b.xml 44791 86d2646d36f273974add1a6703bc780248ed6eea903c3d917a6a7e4557ae336d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClsCd',name:'소속',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inToDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inClsCd',name:'입고구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvStsCd',name:'결재상태',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq420',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_eq420_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chkYn',name:'체크박스',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlNm',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyNo',name:'검수번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unit',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partMakerNm',name:'제조사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acct',name:'입고계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'입고수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upr',name:'입고단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'입고금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cls',name:'입고 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curQty',name:'현재고 수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curAmt',name:'현재고 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buySeq',name:'구매순번',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_combo',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'sysCd',name:'sysCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'queryId',name:'queryId'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param1',name:'param1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param2',name:'param2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param3',name:'param3'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_combo',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'code'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'name'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_frmReqApprove'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprvDocKndCd',name:'apprvDocKndCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqUserId',name:'reqUserId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'epUserId',name:'epUserId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvTitle',name:'apprvTitle',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDtlInfo',name:'apprvDtlInfo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'partsList',name:'partsList',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifylines',name:'bmodifylines',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifybody',name:'bmodifybody',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifyattach',name:'bmodifyattach',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ps.eq.adjmmgnt.matprscond.RetrieveDayEachCustomerEachSelfInPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"IN_DS1"},{"id":"ds_eq420","key":"OUT_DS1"}',target:'data:json,{"id":"ds_eq420","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchCombo',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_combo',target:'data:json,{"id":"ds_combo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_frmReqApprove',action:'/ps.eq.adjmmgnt.RequestEquipmentPartsBuyApproveCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_frmReqApprove',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.vempNo = scwin.memJson.empNo; // 사원번호
scwin.vepId = scwin.memJson.epId; // 다이렉트 아이디
scwin.vEqHomeClsCd = scwin.memJson.eqHomeClsCd; //정비소속구분코드
scwin.currDate = WebSquare.date.getFormattedDate(new Date(), "yyyyMMdd");
scwin.userId = scwin.memJson.userId;
console.log(scwin.memJson);
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "EQ017",
    compID: "lc_inClsCd"
  }, {
    grpCd: "ZZ021",
    compID: "lc_apprvStsCd, gr_eq420:apprvStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  ica_inDt.setValue(scwin.currDate);
};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {
  lc_homeClsCd.setValue(scwin.vEqHomeClsCd);
  if ("" == scwin.vEqHomeClsCd) {
    lc_homeClsCd.setSelectedIndex(0);
  }
  dlt_commonCodeZZ021.insertJSON(dlt_commonCodeZZ021.getRowCount(), [{
    "cd": "06",
    "cdNm": "미승인"
  }]);
  scwin.f_RetrieveFixWrkPl(lc_homeClsCd.getValue());
  lc_inClsCd.setSelectedIndex(0);
  lc_homeClsCd.focus();
};

// UDC 셋팅이 이후..
scwin.onUdcCompleted = function () {
  $c.gus.cfInitObjects($p, [ed_clntCdCond, ed_clntNmCond]);
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
// function f_FieldClear = function() { 
// 	cfInitObjects(tb_eq420, null);
// }

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 필수입력항목 체크	  
  let ret = await $c.gus.cfValidate($p, [lc_homeClsCd, ica_inDt]);
  if (!ret) {
    return false;
  }
  dma_search.set("inToDt", ica_inDt.getValue());
  $c.sbm.execute($p, sbm_search);
};

//------------------------------------------------------------------------
// [작업장  콤보 조회] 소속 구분에 따른 작업장 리스트 콤보 변경 ( 조회조건 LuxCombo )
//------------------------------------------------------------------------
scwin.f_RetrieveFixWrkPl = function (homeClsCd) {
  // ds_fixWrkPl.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=PsCommonEBC&queryId=retriveWrkplList&param1="+homeClsCd;
  // ds_fixWrkPl.Reset();
  dma_combo.set("sysCd", "PsCommonEBC");
  dma_combo.set("queryId", "retriveWrkplList");
  dma_combo.set("param1", homeClsCd);
  $c.sbm.execute($p, sbm_searchCombo);
};
scwin.udc_clntCdCond_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntCdCond.getValue(), ed_clntNmCond.getValue(), 'T', 'T');
};
scwin.udc_clntCdCond_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntCdCond.getValue(), ed_clntNmCond.getValue(), 'T', 'T');
};
scwin.udc_clntCdCond_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_clntCdCond.setValue(rtnList[0]);
      ed_clntCdCond.options.hidVal = rtnList[0];
      ed_clntNmCond.setValue(rtnList[1]);
    }
  } else {
    ed_clntCdCond.setValue("");
    ed_clntCdCond.options.hidVal = "";
    ed_clntNmCond.setValue("");
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  // var rtnList;  //공통POP-UP -> 요청화면 
  switch (disGubun) {
    case 1:
      // 거래처 팝업			
      // rtnList = cfCommonPopUp('retrieveFixClntList'	// XML상의 SELECT ID
      await udc_clntCdCond.cfCommonPopUp(scwin.udc_clntCdCond_callback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정		
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode === null || isCode === true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  }
  // inObj가 코드명 필드일 경우 팝업
  else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//------------------------------------------------------------------------
// 리포트 출력 버튼
//------------------------------------------------------------------------  
///var PGM_ID ="eq_520_01_13b.jsp";
scwin.f_OzReport = async function () {
  // 필수입력항목 체크	  
  let ret = await $c.gus.cfValidate($p, [lc_homeClsCd, ica_inDt]);
  if (!ret) {
    return false;
  }
  var data = {
    reportName: "/ps/eq/adjmmgnt/matprscond/eq_520_01_13.ozr",
    odiParam: {
      homeClsCd: lc_homeClsCd.getValue(),
      homeClsNm: lc_homeClsCd.getText(true),
      wrkPlCd: lc_fixWrkPlCd.getValue(),
      wrkPlNm: lc_fixWrkPlCd.getText(true),
      inDt: ica_inDt.getValue(),
      inClsCd: lc_inClsCd.getValue(),
      inClsNm: lc_inClsCd.getText(true),
      clntCd: ed_clntCdCond.getValue(),
      clntNm: ed_clntNmCond.getValue(),
      inToDt: ica_inDt.getValue(),
      apprvStsCd: lc_apprvStsCd.getValue()
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      printcommand: true,
      zoom: 90 // 배율 설정
    },
    formParam: {}
  };
  scwin.openPopup(data);
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  // 필수입력항목 체크	  
  let ret = await $c.gus.cfValidate($p, [lc_homeClsCd, ica_inDt]);
  if (!ret) {
    return false;
  }
  var rowCnt = ds_eq420.getRowCount();
  if (rowCnt > 0) {
    let sheetTitle = "일별거래처별입고현황";
    const options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle
    };
    $c.data.downloadGridViewExcel($p, gr_eq420, options);
  } else {
    // cfAlertMsg(MSG_CM_WRN_018,['[월 업체별 정비자재 입고현황] 자료','[조회]']);
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_018, "[일별거래처별입고현황] 자료", "[조회]"));
  }
};

//-------------------------------------------------------------------------
// 전자결재를 위한 범칙금 리스트 정보와 건수, 총금액을 리턴한다
//-------------------------------------------------------------------------
scwin.f_getFineItemList = function () {
  // 리스트정보, 건수 그리고 총금액 속성을 가지는 오브젝트
  // var oResult = new Object();
  var oResult = {};
  oResult.itemList = '';
  oResult.itemSize = 0;
  oResult.itemTotal = 0;
  for (var i = 0; i < ds_eq420.getTotalRow(); i++) {
    var rowJson = ds_eq420.getRowJSON(i);
    if (rowJson.chkYn == "1") {
      if (oResult.itemList == "") oResult.itemList += rowJson.fixWrkPlCd + ":" + rowJson.buyNo + ":" + rowJson.buySeq;else oResult.itemList += "," + rowJson.fixWrkPlCd + ":" + rowJson.buyNo + ":" + rowJson.buySeq;
      oResult.itemSize += 1;
      oResult.itemTotal += ds_eq420.amt;
    }
  }
  return oResult;
};

//-------------------------------------------------------------------------
// 전자결재요청 Tray Component에서 EP 사용자 ID가져오기
//-------------------------------------------------------------------------	
scwin.f_getSSOInfo = function () {
  var EXIST_YN = 0;
  var epUserId = "";
  try {
    EXIST_YN = SSOCheck.IsExist("GROUP");
  } catch (exception) {
    EXIST_YN = 0;
  }
  if (EXIST_YN == 1) {
    SSO_LOGIN_YN = true;
    epUserId = SSOCheck.GetUID("GROUP"); // EP사용자ID	      
  }
  return epUserId;
};

//-------------------------------------------------------------------------
// 전자결재요청
//-------------------------------------------------------------------------
scwin.f_RequestElectronicApprove = async function () {
  try {
    let vReqApprvDocKndCd = "015"; // 결재문서종류 -- 정비부품입고내역
    let vReqUserId = scwin.userId; // 결재요청자 ID
    let vEpUsrId = scwin.vepId; //f_getSSOInfo();  				// EP사용자 ID
    let today = ica_inDt.getValue();
    let homeClsCd = "";
    let fixWrkPlCd = "";
    homeClsCd = lc_homeClsCd.getText().split(":")[1];
    fixWrkPlCd = lc_fixWrkPlCd.getText();
    if (fixWrkPlCd != "전체") {
      homeClsCd = "-" + homeClsCd + "(" + lc_fixWrkPlCd.getText(true) + ")";
    }
    let vReqApprvTitle = "정비부품입고내역-" + homeClsCd + "[" + today.substring(0, 4) + "년 " + today.substring(4, 6) + "월 " + today.substring(6, 8) + "일]"; //결재제목 
    let fineInfo = await scwin.f_getFineItemList();
    if (fineInfo.itemSize == 0) {
      await $c.gus.cfAlertMsg($p, "전자결재 대상을 선택해주십시오.");
      return false;
    }
    if (vEpUsrId == "") {
      //$c.gus.cfAlertMsg(" EP사용자 ID정보가 없습니다.");
      //return false;
    }
    let rtn = await $c.win.confirm($p, "전자결재 요청하시겠습니까?");
    if (!rtn) {
      return;
    }
    let cnt = 0;
    let amtSum = 0;
    let vatSum = 0;
    let partNm = "";
    let partCd = "";

    // 결재상세정보
    let vApprvDtlInfo = '<p><font face=굴림>1. 정비부품입고내역</font></p>';
    vApprvDtlInfo += '<table width=950 border=1>';
    vApprvDtlInfo += '<tr>';
    vApprvDtlInfo += '<td width=60  align=center><font size=2 face=굴림>작업장</font></td>';
    vApprvDtlInfo += '<td width=130 align=center><font size=2 face=굴림>거래처</font></td>';
    vApprvDtlInfo += '<td width=70  align=center><font size=2 face=굴림>검수번호</font></td>';
    vApprvDtlInfo += '<td width=120 align=center><font size=2 face=굴림>부품코드</font></td>';
    vApprvDtlInfo += '<td width=150 align=center><font size=2 face=굴림>부품명</font></td>';
    vApprvDtlInfo += '<td width=100 align=center><font size=2 face=굴림>장비모델</font></td>';
    vApprvDtlInfo += '<td width=30 align=right><font size=2 face=굴림>수량</font></td>';
    vApprvDtlInfo += '<td width=70 align=right><font size=2 face=굴림>단가</font></td>';
    vApprvDtlInfo += '<td width=80 align=right><font size=2 face=굴림>금액</font></td>';
    vApprvDtlInfo += '<td width=80 align=right><font size=2 face=굴림>부가세</font></td>';
    vApprvDtlInfo += '</tr>';
    for (let k = 0; k < ds_eq420.getRowCount(); k++) {
      // if( ds_eq420.getCellData(k, "chkYn") == "1" && ds_eq420.RowLevel(k) == 0 ) {
      if (ds_eq420.getCellData(k, "chkYn") == "1") {
        partNm = ds_eq420.getCellData(k, "partNm");
        partNm = partNm.replace("'", "");
        partNm = partNm.replace('"', "");
        partCd = ds_eq420.getCellData(k, "partCd");
        partCd = partCd.replace("'", "");
        partCd = partCd.replace('"', "");
        vApprvDtlInfo += '<tr>';
        vApprvDtlInfo += '<td align=center><font size=2 face=굴림>' + ds_eq420.getCellData(k, "fixWrkPlNm") + '</font></td>';
        vApprvDtlInfo += '<td align=left><font size=2 face=굴림>' + ds_eq420.getCellData(k, "clntNm") + '</font></td>';
        vApprvDtlInfo += '<td align=center><font size=2 face=굴림>' + ds_eq420.getCellData(k, "buyNo") + '</font></td>';
        vApprvDtlInfo += '<td align=center><font size=2 face=굴림>' + partCd + '</font></td>';
        vApprvDtlInfo += '<td align=left><font size=2 face=굴림>' + partNm + '</font></td>';
        vApprvDtlInfo += '<td align=left><font size=2 face=굴림>' + ds_eq420.getCellData(k, "eqModelNm") + '</font></td>';
        vApprvDtlInfo += '<td align=right><font size=2 face=굴림>' + $c.gus.cfInsertComma($p, ds_eq420.getCellData(k, "qty")) + '</font></td>';
        vApprvDtlInfo += '<td align=right><font size=2 face=굴림>' + $c.gus.cfInsertComma($p, ds_eq420.getCellData(k, "upr")) + '</font></td>';
        vApprvDtlInfo += '<td align=right><font size=2 face=굴림>' + $c.gus.cfInsertComma($p, ds_eq420.getCellData(k, "amt")) + '</font></td>';
        vApprvDtlInfo += '<td align=right><font size=2 face=굴림>' + $c.gus.cfInsertComma($p, ds_eq420.getCellData(k, "vat")) + '</font></td>';
        vApprvDtlInfo += '</tr>';
        cnt = cnt + 1;
        amtSum = amtSum + parseFloat(ds_eq420.getCellData(k, "amt"));
        vatSum = vatSum + parseFloat(ds_eq420.getCellData(k, "vat"));
      }
    }
    vApprvDtlInfo += '<tr>';
    vApprvDtlInfo += '<td align=center><font size=2 face=굴림>&nbsp;</font></td>';
    vApprvDtlInfo += '<td align=center><font bold size=2 face=굴림>' + '합계' + '</font></td>';
    vApprvDtlInfo += '<td align=center><font size=2 face=굴림>&nbsp;</font></td>';
    vApprvDtlInfo += '<td align=center><font bold size=2 face=굴림>' + cnt + ' 건</font></td>';
    vApprvDtlInfo += '<td align=left><font size=2 face=굴림>&nbsp;</font></td>';
    vApprvDtlInfo += '<td align=left><font size=2 face=굴림>&nbsp;</font></td>';
    vApprvDtlInfo += '<td align=right><font size=2 face=굴림>&nbsp;</font></td>';
    vApprvDtlInfo += '<td align=right><font size=2 face=굴림>&nbsp;</font></td>';
    vApprvDtlInfo += '<td align=right><font bold size=2 face=굴림>' + $c.gus.cfInsertComma($p, amtSum) + '</font></td>';
    vApprvDtlInfo += '<td align=right><font bold size=2 face=굴림>' + $c.gus.cfInsertComma($p, vatSum) + '</font></td>';
    vApprvDtlInfo += '</tr>';
    vApprvDtlInfo += '</table>';
    const params = {
      apprvDocKndCd: vReqApprvDocKndCd,
      //결재문서종류
      reqUserId: vReqUserId,
      //결재요청자
      epUserId: vEpUsrId,
      //EP사용자
      apprvTitle: vReqApprvTitle,
      //결재제목
      apprvDtlInfo: vApprvDtlInfo,
      //결재문서양식
      partsList: fineInfo.itemList,
      bmodifylines: "Y",
      // 문서정보 변경 가능 여부
      bmodifybody: "Y",
      // 문서 본문 수정 여부
      bmodifyattach: "Y" // 첨부파일 기능 활성화 여부
    };
    //데이터셋에 정보설정
    dma_frmReqApprove.setJSON(params);
    let url = "/ps.eq.adjmmgnt.RequestEquipmentPartsBuyApproveCMD.do";
    let targetName = "aprvPopup"; // 고정 이름(재사용)

    let data = dma_frmReqApprove.getJSON() || {};
    const form = document.createElement("form");
    form.method = "POST";
    form.action = url;
    form.target = targetName;

    // 팝업 차단 회피: 사용자 클릭 이벤트 안에서 실행되어야 함
    const win = window.open("", targetName); // about:blank 대신 빈 문자열로 재사용
    // 팝업이 막히면 win이 null일 수 있음
    if (!win) {
      // 여기서 그냥 location 이동하거나 alert 처리 등
      console.warn("Popup blocked");
    }
    Object.keys(data).forEach(key => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = (data[key] ?? "").toString();
      form.appendChild(input);
    });
    document.body.appendChild(form);
    console.log("POST keys:", Object.keys(data));
    console.log("epUserId:", data.epUserId);
    console.log("apprvDtlInfo length:", (data.apprvDtlInfo || "").length);
    console.log("apprvTitle:", data.apprvTitle);
    form.submit();
    document.body.removeChild(form);
  } catch (e) {
    console.log("f_aprv : " + e);
  }
};

//-------------------------------------------------------------------------
// 컴포넌트 이벤트
//-------------------------------------------------------------------------
scwin.btn_search1_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1);
};
scwin.lc_homeClsCd_onchange = function (info) {
  var value = info.newValue;
  // 대표정비작업장콤보 조회
  scwin.f_RetrieveFixWrkPl(value);
};
scwin.sbm_search_submitdone = function (e) {
  var rowCnt = ds_eq420.getRowCount();
  spanTotal.setLabel(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  } else {
    for (var k = 0; k < ds_eq420.getTotalRow(); k++) {
      if (ds_eq420.getCellData(k, "apprvStsCd") == "01" || ds_eq420.getCellData(k, "apprvStsCd") == "03") {
        gr_eq420.setCellReadOnly(k, "chkYn", false);
      } else {
        gr_eq420.setCellReadOnly(k, "chkYn", true);
      }
    }
    gr_eq420.setFocusedCell(0, 0);
  }
};
scwin.sbm_search_submiterror = function (e) {};
scwin.gr_eq420_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "chkYn") {
    var chkYn = "";
    var newChkYn = "";
    var fixWrkPlCd = "";
    var buyNo = "";
    chkYn = ds_eq420.getCellData(rowIndex, "chkYn");
    fixWrkPlCd = ds_eq420.getCellData(rowIndex, "fixWrkPlCd");
    buyNo = ds_eq420.getCellData(rowIndex, "buyNo");
    if (chkYn == 1) {
      newChkYn = 1;
    } else {
      newChkYn = 0;
    }
    for (var k = 0; k < ds_eq420.getTotalRow(); k++) {
      if (ds_eq420.getCellData(k, "apprvStsCd") == "01" || ds_eq420.getCellData(k, "apprvStsCd") == "03") {
        gr_eq420.setCellReadOnly(k, "chkYn", false);
      } else {
        gr_eq420.setCellReadOnly(k, "chkYn", true);
      }
      if (fixWrkPlCd == ds_eq420.getCellData(k, "fixWrkPlCd") && buyNo == ds_eq420.getCellData(k, "buyNo")) {
        ds_eq420.setCellData(k, "chkYn", newChkYn);
      }
    }
  }
};
scwin.ds_eq420_onrowpositionchange = function (info) {};
scwin.gr_eq420_onheaderclick = function (headerId) {
  if (headerId == "hchkYn") {
    var vheaderId = gr_eq420.getHeaderValue(headerId);
    for (var k = 0; k < ds_eq420.getTotalRow(); k++) {
      if ("01" == ds_eq420.getCellData(k, "apprvStsCd") && "03" == ds_eq420.getCellData(k, "apprvStsCd")) {
        ds_eq420.setCellData(k, "chkYn", vheaderId);
      }
    }
  }
};
scwin.udc_clntCdCond_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNmCond, ed_clntCdCond, 1, false);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 230px;',submenuSize:'auto',ref:'data:dma_search.homeClsCd',title:'소속',mandatory:'true',objType:'data','ev:onchange':'scwin.lc_homeClsCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'LO'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고속'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'TR'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixWrkPlCd',style:'',submenuSize:'auto',ref:'data:dma_search.wrkPlCd',objType:'data',chooseOptionLabel:'전체',visibleRowNum:'15'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_combo'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ica_inDt',style:'',ref:'data:dma_search.inDt',delimiter:'/',title:'입고일자',mandatory:'true',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입고구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_inClsCd',style:'',submenuSize:'auto',ref:'data:dma_search.inClsCd',objType:'data',chooseOptionLabel:'전체'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_clntCdCond',code:'clntCd',codeId:'ed_clntCdCond',editTypeName:'focus','ev:onblurCodeEvent':'scwin.udc_clntCdCond_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntCdCond_onclickEvent',id:'udc_clntCdCond',maxlengthCode:'6',maxlengthName:'30',nameId:'ed_clntNmCond',objTypeCode:'data',objTypeName:'data',onloadCallbackFunc:'',popupGridHeadTitle:'귀속코드,부서명',popupID:'',refDataCollection:'dma_search',selectID:'retrieveFixClntList',style:'',validExpCode:'거래처:yes','ev:onviewchangeNameEvent':'scwin.udc_clntCdCond_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결재상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_apprvStsCd',style:'',submenuSize:'auto',ref:'data:dma_search.apprvStsCd',objType:'data',chooseOptionLabel:'전체',visibleRowNum:'10'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.btn_search1_init_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'일별거래처별입고 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_Excel',id:'udc_gr_eq420',gridID:'gr_eq420',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_eq420',id:'gr_eq420',style:'',visibleRowNum:'13',visibleRowNumFix:'true',fixedColumn:'6',readOnly:'true',autoFitMinWidth:'1700','ev:oncellclick':'scwin.gr_eq420_oncellclick','ev:onheaderclick':'scwin.gr_eq420_onheaderclick','ev:onaftercolumnmove':'scwin.gr_eq420_onaftercolumnmove'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'hchkYn',inputType:'checkbox',style:'',value:'',width:'30',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'작업장코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'작업장',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'거래처',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'거래처명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'검수번호',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'부품코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'부품명',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'단위',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'장비모델명',width:'150'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column49',value:'제조사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column46',value:'결재상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'입고계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'입고수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'입고단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'입고금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'입고</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'현재고</br>수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'현재고</br>금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chkYn',inputType:'checkbox',style:'',value:'',width:'70',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlCd',inputType:'text',style:'',value:'',width:'120',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlNm',inputType:'text',style:'',value:'',width:'80',textAlign:'center',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'70',textAlign:'center',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'buyNo',inputType:'text',style:'',value:'',width:'90',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partCd',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partNm',inputType:'text',style:'',value:'',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unit',inputType:'text',style:'',value:'',width:'50',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'partMakerNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',style:'',id:'apprvStsCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'acct',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'qty',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'upr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'amt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vat',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cls',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'curQty',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'curAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'number'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'clntNo',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'30',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column78',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column67',value:'',displayMode:'label',displayFormat:'#,###,###,###',textAlign:'right',dataType:'number',expression:'sum(\'qty\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column66',value:'',displayMode:'label',displayFormat:'#,###,###,###',textAlign:'right',dataType:'number',expression:'sum(\'upr\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column65',value:'',displayMode:'label',displayFormat:'#,###,###,###',textAlign:'right',dataType:'number',expression:'sum(\'amt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column64',value:'',displayMode:'label',displayFormat:'#,###,###,###',textAlign:'right',dataType:'number',expression:'sum(\'vat\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column62',value:'',displayMode:'label',displayFormat:'#,###,###,###',textAlign:'right',dataType:'number',expression:'sum(\'curQty\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column61',value:'',displayMode:'label',displayFormat:'#,###,###,###',textAlign:'right',dataType:'number',expression:'sum(\'curAmt\')',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column28',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',displayFormat:'#,###,###,###',textAlign:'right',expression:'sum(\'qty\')',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column33',value:'',displayMode:'label',displayFormat:'#,###,###,###',textAlign:'right',expression:'sum(\'upr\')',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column36',value:'',displayMode:'label',displayFormat:'#,###,###,###',textAlign:'right',expression:'sum(\'amt\')',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column39',value:'',displayMode:'label',displayFormat:'#,###,###,###',textAlign:'right',expression:'sum(\'vat\')',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',displayFormat:'#,###,###,###',textAlign:'right',expression:'sum(\'curQty\')',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',displayFormat:'#,###,###,###',textAlign:'right',expression:'sum(\'curAmt\')',excelCellType:'number',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spanTotal',label:'0',style:'',tagname:'span',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'[단위 : 원]',class:''}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_approve',style:'',title:'엑셀 UP',type:'button',objType:'CtrlBtn',userAuth:'R','ev:onclick':'scwin.f_RequestElectronicApprove'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전자결재'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.f_OzReport'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력'}]}]}]}]}]}]}]}]}]})