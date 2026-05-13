/*amd /ui/ds/op/wrkrslts/cfsexprslts/op_309_02_03p.xml 45662 6067712dcaf65049146c65cc89096409a13fe13d46c4e1b0868aa0e3a16c6eae */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'completeDt',name:'완료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stockClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inMgntNo',name:'입고관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mctNm',name:'실화주',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_results_onrowpositionchange','ev:oncelldatachange':'scwin.ds_results_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stockMgntNo',name:'재고관리번호',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'inStdDt',name:'입고기준일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'stockClntNo',name:'재고거래처번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'stockClntNm',name:'재고거래처명',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'cfsLineCd',name:'CFSLINE코드',dataType:'text',defaultValue:'',length:'5'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'cfsMchtNm',name:'CFS화주명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'lblock',name:'LBLOCK',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'cfsUnitCd',name:'CFS단위코드',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'bondTransDeclarYn',name:'보세운송신고여부',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'재고',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'재고중량',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'stockCbm',name:'재고CBM',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'selcYn',name:'선택여부',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'wrkQty',name:'작업수량',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'wrkWt',name:'작업중량',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'wrkCbm',name:'작업CBM',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'ioNo',name:'입출고번호',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'cfsInMgntNo',name:'CFS입고관리번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'rsltsRton',name:'RTON',dataType:'number',defaultValue:'0',length:'18'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.cfsexprslts.RetrieveCfsGoodsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.params = "";
scwin.vWrkDptPlCd = "";
scwin.vWrkDptPlNm = "";
scwin.vWrkStDt = "";
scwin.vBilgClntNo = "";
scwin.dateStrMonth = $c.date.getServerDateTime($p, "yyyyMM");
scwin.dateStrDay = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.arrRtnVal = new Array(); // Return Value

scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.
scwin.strPreDate = $c.date.addDate($p, scwin.strCurDate, -5); // 현재일자 -5

scwin.clickTimer = null; // 클릭 타이머 변수

//-------------------------------------------------------------------------
// 페이지로드
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  if (!$c.util.isEmpty($p, scwin.params["vWrkDptPlCd"])) {
    //작업장코드
    scwin.vWrkDptPlCd = scwin.params["vWrkDptPlCd"];
  }
  if (!$c.util.isEmpty($p, scwin.params["vWrkDptPlNm"])) {
    //작업장명
    scwin.vWrkDptPlNm = scwin.params["vWrkDptPlNm"];
  }
  if (!$c.util.isEmpty($p, scwin.params["vWrkStDt"])) {
    //작업일 
    scwin.vWrkStDt = scwin.params["vWrkStDt"];
  }
  if (!$c.util.isEmpty($p, scwin.params["vBilgClntNo"])) {
    //청구거래처 
    scwin.vBilgClntNo = scwin.params["vBilgClntNo"];
  }
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("onUdcCompleted");
  $p.setTimeout(function () {
    scwin.f_createSearchHeader();
    scwin.f_EventInit();
    scwin.f_FieldClear(); //UDC 로드가 늦게되서 주석으로 막음(밑에 로직에서 해당 기능 수행됨)

    ed_stockClntNo.setValue(scwin.vBilgClntNo);
    ed_wrkPlCd.setDisabled(true);
    ed_wrkPlNm.setDisabled(true);
    scwin.f_Retrieve();
    ed_stDt.focus();

    //테스트 데이터
    // ds_search.set("stDt", "20000101");
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// function name : f_createSearchHeader
// function desc : 조회조건 Header정보 Setting
//-------------------------------------------------------------------------
scwin.f_createSearchHeader = function () {
  ds_search.set("stDt", scwin.strPreDate);
  ds_search.set("completeDt", scwin.strCurDate);
  ds_search.set("wrkPlCd", "");
  ds_search.set("lineCd", "");
  ds_search.set("stockClntNo", "");
  ds_search.set("inMgntNo", "");
  ds_search.set("mctNm", "");
  ds_search.set("commCd", "");
};

//-------------------------------------------------------------------------
// 버튼 감추기
//-------------------------------------------------------------------------
scwin.f_EventInit = function () {
  $c.gus.cfDisableBtnOnly($p, [btn_Clpadd, btn_Cancel]);
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_retrieve, null);
  ds_search.set("stDt", scwin.strPreDate);
  ds_search.set("completeDt", scwin.strCurDate);
  ed_wrkPlCd.setValue(scwin.vWrkDptPlCd);
  ed_wrkPlNm.setValue(scwin.vWrkDptPlNm);
  ed_stDt.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  var sEd_stDt = ed_stDt.getValue();
  var sEd_completeDt = ed_completeDt.getValue();

  //if (!cfValidateValue(ed_stDt, "minNumber=19000101")) {
  if (sEd_stDt < "19000101") {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_003, "작업일자From")); //을(를) 입력하십시오.

    ed_stDt.setValue("");
    ed_stDt.focus();
    return;
  }

  //if (!$c.gus.cfValidateValue(ed_completeDt, "minNumber=19000101")) {
  if (sEd_completeDt < "19000101") {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_003, "작업일자To")); //을(를) 입력하십시오.

    ed_completeDt.setValue("");
    ed_completeDt.focus();
    return;
  }
  if (sEd_stDt > sEd_completeDt) {
    $c.win.alert($p, MSG_CM_ERR_039); //시작일자를 종료일자 이전으로 선택[입력]하여주십시요.
    ds_search.set("stDt", scwin.dateStrDay);
    ds_search.set("completeDt", scwin.dateStrDay);
    ed_stDt.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 2:
      // LINE
      udc_lineCd.cfCommonPopUp(scwin.udc_lineCd_callBackFunc // XML상의 SELECT ID
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
      , "LINE,LINE코드,LINE명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // 청구처
      udc_stockClntNo.cfCommonPopUp(scwin.udc_stockClntNo_callBackFunc // XML상의 SELECT ID
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
      , "청구 거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      // 품목
      udc_commCd.cfCommonPopUp(scwin.udc_commCd_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , "2,4,,,,C1" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "품목／품명,품목／품명코드,품목／품명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;

    /* ASIS 사용되지 않는것 같음
    case 8:
        //작업장코드
        rtnList = cfCommonPopUp('retrieveWrkPlInfo' // XML상의 SELECT ID
            , pCode // 화면에서의 ??? Code Element의 Value
            , pName // 화면에서의 ??? Name Element의 Value
            , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
            , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
            , null // Title순서
            , null // 보여주는 각 컬럼들의 폭
            , null // 컬럼중에서 숨기는 컬럼 지정
            , 'F' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
            , null // POP-UP뛰을때 원도우의 사용자 정의 폭
            , null // POP-UP뛰을때 우도우의 사용자 정의 높이
            , null // 윈도우 위치 Y좌표
            , null // 윈도우 위치 X좌표
            , null // 중복체크여부 ("F")
            , pAllSearch // 전체검색허용여부 ("F")
            , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        );
         //$c.gus.cfSetReturnValue(rtnList, ed_wrkPlCd, ed_wrkPlNm);
        break;
    */
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
// LINE UDC START
//-------------------------------------------------------------------------
scwin.udc_lineCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_lineCd.getValue(), ed_lineNm.getValue(), 'F', 'F');
};
scwin.udc_lineCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, ed_lineNm, 2, true);
};
scwin.udc_lineCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lineNm, ed_lineCd, 2, false);
};
scwin.udc_lineCd_callBackFunc = function (ref) {
  $c.gus.cfSetReturnValue($p, ref, ed_lineCd, ed_lineNm);
};
//-------------------------------------------------------------------------
// LINE UDC START
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 청구처 UDC START
//-------------------------------------------------------------------------
scwin.udc_stockClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_stockClntNo.getValue(), ed_stockClntNm.getValue(), 'F', 'F');
};
scwin.udc_stockClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_stockClntNo, ed_stockClntNm, 3, true);
};
scwin.udc_stockClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_stockClntNm, ed_stockClntNo, 3, false);
};
scwin.udc_stockClntNo_callBackFunc = function (ref) {
  $c.gus.cfSetReturnValue($p, ref, ed_stockClntNo, ed_stockClntNm);
};
//-------------------------------------------------------------------------
// 청구처 UDC START
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 품목 UDC START
//-------------------------------------------------------------------------
scwin.udc_commCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_commCd.getValue(), ed_commNm.getValue(), 'F', 'F');
};
scwin.udc_commCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_commCd, ed_commNm, 4, true);
};
scwin.udc_commCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_commNm, ed_commCd, 4, false);
};
scwin.udc_commCd_callBackFunc = function (ref) {
  $c.gus.cfSetReturnValue($p, ref, ed_commCd, ed_commNm);
};
//-------------------------------------------------------------------------
// 품목 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 그리드 visibility 
//-------------------------------------------------------------------------
scwin.f_Visibility = function (row) {
  if (ds_results.getCellData(row, "selcYn") == 1) {
    gr_results.setReadOnly("column", "ioNo", true);
    gr_results.setReadOnly("column", "stockMgntNo", true);
    gr_results.setReadOnly("column", "cfsInMgntNo", true);
    gr_results.setReadOnly("column", "commNm", true);
    gr_results.setReadOnly("column", "inStdDt", true);
    gr_results.setReadOnly("column", "stockClntNm", true);
    gr_results.setReadOnly("column", "lineNm", true);
    gr_results.setReadOnly("column", "cfsMchtNm", true);
    gr_results.setReadOnly("column", "lblock", true);
    gr_results.setReadOnly("column", "cfsUnitCd", true);
    gr_results.setReadOnly("column", "stockQty", true);
    gr_results.setReadOnly("column", "stockWt", true);
    gr_results.setReadOnly("column", "stockCbm", true);
    gr_results.setReadOnly("column", "blNo", true);
    gr_results.setReadOnly("column", "wrkQty", false);
    gr_results.setReadOnly("column", "wrkWt", false);
    gr_results.setReadOnly("column", "wrkCbm", false);
  } else {
    gr_results.setReadOnly("column", "ioNo", true);
    gr_results.setReadOnly("column", "stockMgntNo", true);
    gr_results.setReadOnly("column", "cfsInMgntNo", true);
    gr_results.setReadOnly("column", "commNm", true);
    gr_results.setReadOnly("column", "inStdDt", true);
    gr_results.setReadOnly("column", "stockClntNm", true);
    gr_results.setReadOnly("column", "lineNm", true);
    gr_results.setReadOnly("column", "cfsMchtNm", true);
    gr_results.setReadOnly("column", "lblock", true);
    gr_results.setReadOnly("column", "cfsUnitCd", true);
    gr_results.setReadOnly("column", "stockQty", true);
    gr_results.setReadOnly("column", "stockWt", true);
    gr_results.setReadOnly("column", "stockCbm", true);
    gr_results.setReadOnly("column", "blNo", true);
    gr_results.setReadOnly("column", "wrkQty", true);
    gr_results.setReadOnly("column", "wrkWt", true);
    gr_results.setReadOnly("column", "wrkCbm", true);
  }
};
scwin.f_WinClose = function () {
  scwin.arrRtnVal[0] = "N/A";
  $c.win.closePopup($p, scwin.arrRtnVal);
};
scwin.f_close = function () {
  $c.win.closePopup($p);
};
scwin.f_rtnValue = function () {
  var cnt = 0;
  var arrColVal;
  var i = 0;
  var selcYn = 0;
  for (i = 0; i < ds_results.getRowCount(); i++) {
    selcYn = ds_results.getCellData(i, "selcYn");
    if (selcYn == 1) {
      if (ds_results.getCellData(i, "stockQty") == ds_results.getCellData(i, "wrkQty")) {
        if (ds_results.getCellData(i, "stockWt") != ds_results.getCellData(i, "wrkWt") || ds_results.getCellData(i, "stockCbm") != ds_results.getCellData(i, "wrkCbm")) {
          $c.win.alert($p, i + "행의 재고중량 또는 재고용적이 남아있습니다");
          return;
        }
      }
    }
  }
  for (i = 0; i < ds_results.getRowCount(); i++) {
    selcYn = ds_results.getCellData(i, "selcYn");
    if (selcYn == 1) {
      arrColVal = new Array();
      arrColVal[0] = ds_results.getCellData(i, "ioNo");
      arrColVal[1] = ds_results.getCellData(i, "commCd");
      arrColVal[2] = ds_results.getCellData(i, "commNm");
      arrColVal[3] = ds_results.getCellData(i, "inStdDt");
      arrColVal[4] = ds_results.getCellData(i, "stockClntNo");
      arrColVal[5] = ds_results.getCellData(i, "stockClntNm");
      arrColVal[6] = ds_results.getCellData(i, "lineNm");
      arrColVal[7] = ds_results.getCellData(i, "cfsMchtNm");
      arrColVal[8] = ds_results.getCellData(i, "lblock");
      arrColVal[9] = ds_results.getCellData(i, "cfsUnitCd");
      arrColVal[10] = ds_results.getCellData(i, "wrkQty");
      arrColVal[11] = ds_results.getCellData(i, "wrkWt");
      arrColVal[12] = ds_results.getCellData(i, "wrkCbm");
      arrColVal[13] = ed_wrkPlCd.getValue();
      arrColVal[14] = ds_results.getCellData(i, "stockMgntNo");
      arrColVal[15] = ds_results.getCellData(i, "rsltsRton");
      scwin.arrRtnVal[cnt] = arrColVal;
      cnt++;
    }
  }
  $c.win.closePopup($p, scwin.arrRtnVal);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_results.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
  } else {
    $c.gus.cfEnableBtnOnly($p, [btn_Clpadd, btn_Cancel]);
  }

  //카운터
  tbx_totalRows.setValue(ds_results.getRowCount());

  //ds_search.UserStatus(1) = 1;
};
scwin.ds_results_onrowpositionchange = function (info) {
  console.log("ds_results_onrowpositionchange");
  //그리드 활성화 여부
  scwin.f_Visibility(ds_results.getRowPosition());
};
scwin.ds_results_oncelldatachange = function (info) {
  console.log("ds_results_oncelldatachange");
  let row = info.rowIndex;
  if (row == -1) return;
  var v_qty = 0;
  var v_wt = 0;
  var v_cbm = 0;
  var v_ratio = 0;
  if (info.colID == "wrkQty") {
    if (ds_results.getCellData(info.rowIndex, "selcYn") == 1) {
      if (ds_results.getCellData(info.rowIndex, "wrkQty") == 0) {
        $c.win.alert($p, "작업수량은 0보다 커야합니다");
        ds_results.setCellData(info.rowIndex, "wrkQty", ds_results.getCellData(row, "stockQty"));
        return;
      }
      if (ds_results.getCellData(row, "wrkQty") > ds_results.getCellData(row, "stockQty")) {
        $c.win.alert($p, "작업수량은 재고수량보다 클 수 없습니다");
        ds_results.setCellData(row, "wrkQty", ds_results.getCellData(row, "stockQty"));
        return;
      }

      //수량변경 비율만큼 중량,CBM도 셋팅한다. (마지막출고일경우(재고불량=작업물량)엔 중량,용적이 남지않도록..)
      v_ratio = ds_results.getCellData(row, "wrkQty") / ds_results.getCellData(row, "stockQty");
      ds_results.setCellData(row, "wrkWt", ds_results.getCellData(row, "stockWt") * v_ratio);
      ds_results.setCellData(row, "wrkCbm", ds_results.getCellData(row, "stockCbm") * v_ratio);
    }
    for (i = 0; i < ds_results.getRowCount(); i++) {
      if (ds_results.getCellData(i, "selcYn") == 1) {
        v_qty = parseInt(v_qty) + parseInt(ds_results.getCellData(i, "wrkQty"));
      }
    }

    //tbx_qty.setValue($c.gus.cfInsertComma(Math.roundf(v_qty, 3)));
    tbx_qty.setValue($c.gus.cfInsertComma($p, v_qty));
  } else if (info.colID == "wrkWt") {
    if (ds_results.getCellData(row, "selcYn") == 1) {
      v_ratio = ds_results.getCellData(row, "wrkQty") / ds_results.getCellData(row, "stockQty");
      if (ds_results.getCellData(row, "wrkWt") == 0) {
        $c.win.alert($p, "작업중량은 0보다 커야합니다");
        ds_results.setCellData(row, "wrkWt", ds_results.getCellData(row, "stockWt") * v_ratio);
        return;
      }
      if (ds_results.getCellData(row, "wrkWt") > ds_results.getCellData(row, "stockWt")) {
        $c.win.alert($p, "작업중량은 재고중량보다 클 수 없습니다");
        ds_results.setCellData(row, "wrkWt", ds_results.getCellData(row, "stockWt") * v_ratio);
        return;
      }
    }
    for (i = 0; i < ds_results.getRowCount(); i++) {
      if (ds_results.getCellData(i, "selcYn") == 1) {
        v_wt = parseFloat(v_wt) + parseFloat(ds_results.getCellData(i, "wrkWt"));
      }
    }

    //tbx_grossWt.setValue($c.gus.cfInsertComma(Math.roundf(v_wt, 3)));
    tbx_grossWt.setValue($c.gus.cfInsertComma($p, $c.num.ceil($p, v_wt, 1)));
  } else if (info.colID == "wrkCbm") {
    if (ds_results.getCellData(row, "selcYn") == 1) {
      v_ratio = ds_results.getCellData(row, "wrkQty") / ds_results.getCellData(row, "stockQty");
      if (ds_results.getCellData(row, "wrkCbm") == 0) {
        $c.win.alert($p, "작업용적은 0보다 커야합니다");
        ds_results.setCellData(row, "wrkCbm", ds_results.getCellData(row, "stockCbm") * v_ratio);
        return;
      }
      if (ds_results.getCellData(row, "wrkCbm") > ds_results.getCellData(row, "stockCbm")) {
        $c.win.alert($p, "작업용적은 재고용적보다 클 수 없습니다.");
        ds_results.setCellData(row, "wrkCbm", ds_results.getCellData(row, "stockCbm") * v_ratio);
        return;
      }
    }
    for (i = 0; i < ds_results.getRowCount(); i++) {
      if (ds_results.getCellData(i, "selcYn") == 1) {
        v_cbm = parseFloat(v_cbm) + parseFloat(ds_results.getCellData(i, "wrkCbm"));
      }
    }

    //tbx_cbm.setValue($c.gus.cfInsertComma(Math.roundf(v_cbm, 3)));
    tbx_cbm.setValue($c.gus.cfInsertComma($p, $c.num.floor($p, v_cbm, 3)));
  }
  scwin.f_Visibility(row);
};
scwin.gr_results_oncellclick = function (rowIndex, columnIndex, columnId) {
  // 클릭 이벤트 처리
  if (scwin.clickTimer) {
    $p.clearTimeout(scwin.clickTimer); // 기존 타이머 제거
  }
  scwin.clickTimer = $p.setTimeout(function () {
    console.log("셀 클릭 이벤트 발생");
    // 클릭 이벤트 로직 실행

    if (columnId == "selcYn" && ds_results.getCellData(rowIndex, "selcYn") == 1) {
      if (ds_results.getCellData(rowIndex, "bondTransDeclarYn") == 0 && ds_results.getCellData(rowIndex, "blNo") != "") {
        //황창기 이거 주석처리 풀어야함 풀었음
        $c.win.alert($p, "세관신고가 되지않은 Data는 선택 할 수 없습니다");
        ds_results.setCellData(rowIndex, "selcYn", 0);
        return;
      } else {
        //if(ds_results.getCellData(rowIndex, "selcYn")== 1){
        //그리드 활성화 여부
        //scwin.f_Visibility(rowIndex);
        //}
        if (ds_results.getCellData(rowIndex, "inStdDt") > scwin.vWrkStDt) {
          $c.win.alert($p, "CLP 작업일 보다 입고일이 클 수 없습니다.\nCLP작업일:" + scwin.vWrkStDt);
          ds_results.setCellData(rowIndex, "selcYn", 0);
          return;
        }
      }

      //남아있는 재고물량을 작업물량으로 기본셋팅.
      ds_results.setCellData(rowIndex, "wrkQty", ds_results.getCellData(rowIndex, "stockQty"));
      ds_results.setCellData(rowIndex, "wrkWt", ds_results.getCellData(rowIndex, "stockWt"));
      ds_results.setCellData(rowIndex, "wrkCbm", ds_results.getCellData(rowIndex, "stockCbm"));
    } else {
      ds_results.setCellData(rowIndex, "wrkQty", 0);
      ds_results.setCellData(rowIndex, "wrkWt", 0);
      ds_results.setCellData(rowIndex, "wrkCbm", 0);
    }
    scwin.f_Visibility(rowIndex);
    scwin.clickTimer = null; // 타이머 초기화
  }, 300); // 더블 클릭과 구분하기 위해 300ms 대기
};
scwin.gr_results_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  // 더블 클릭 이벤트 처리
  if (scwin.clickTimer) {
    $p.clearTimeout(scwin.clickTimer); // 클릭 타이머 제거
    scwin.clickTimer = null; // 타이머 초기화
  }
  console.log("셀 더블 클릭 이벤트 발생");

  // 더블 클릭 이벤트 로직 실행
  if (ds_results.getCellData(rowIndex, "bondTransDeclarYn") == 0 && ds_results.getCellData(rowIndex, "blNo") != "") {
    //황창기 이거 테스트끈나고 풀어야함
    //alert("세관신고가 되지않은 Data는 선택 할 수 없습니다");
    //ds_results.setCellData(rowIndex, "selcYn", 0);
    //return;
  } else {
    if (ds_results.getCellData(rowIndex, "inStdDt") > scwin.vWrkStDt) {
      $c.win.alert($p, "CLP 작업일 보다 입고일이 클 수 없습니다.<br/>CLP작업일:" + scwin.vWrkStDt);
      ds_results.setCellData(rowIndex, "selcYn", 0);
      return;
    }
  }
  //남아있는 재고물량을 작업물량으로 기본셋팅.
  ds_results.setCellData(rowIndex, "wrkQty", ds_results.getCellData(rowIndex, "stockQty"));
  ds_results.setCellData(rowIndex, "wrkWt", ds_results.getCellData(rowIndex, "stockWt"));
  ds_results.setCellData(rowIndex, "wrkCbm", ds_results.getCellData(rowIndex, "stockCbm"));
  scwin.f_Visibility(rowIndex);
  ds_results.setCellData(rowIndex, "selcYn", 1);
  scwin.f_rtnValue();
};
scwin.bondTransDeclarYnExp = function (data) {
  return $c.gus.decode($p, data, "0", "N", "Y");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width: 60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:45px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:45px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_inDt',refDataMap:'ds_search',refEdDt:'completeDt',refStDt:'stDt',style:'',edFromId:'ed_stDt',edToId:'ed_completeDt',mandatoryFrom:'true',mandatoryTo:'true',minNumber:'19000101'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_wrkPlCd',placeholder:'',style:'width: 85px;',objType:'Data',editType:'select',allowChar:'A-Z0-9',maxlength:'5',mandatory:'true',ref:'data:ds_search.wrkPlCd'}},{T:1,N:'xf:input',A:{class:'',id:'ed_wrkPlNm',placeholder:'',style:'width: 150px;',objType:'Data',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_lineCd',id:'udc_lineCd',nameId:'ed_lineNm',btnId:'btn_lineCd',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'5',objTypeCode:'data',UpperFlagCode:'1',objTypeName:'data',refDataCollection:'ds_search',code:'lineCd','ev:onclickEvent':'scwin.udc_lineCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lineCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_lineCd_onviewchangeNameEvent',selectID:'retrieveLineInfoList'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_stockClntNo',nameId:'ed_stockClntNm',btnId:'btn_stockClntNo',id:'udc_stockClntNo',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',objTypeCode:'data',maxlengthCode:'6',UpperFlagCode:'1',objTypeName:'data',refDataCollection:'ds_search',code:'stockClntNo','ev:onclickEvent':'scwin.udc_stockClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_stockClntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_stockClntNo_onviewchangeNameEvent',selectID:'retrieveClntList'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_commCd',nameId:'ed_commNm',btnId:'btn_commCd',id:'udc_commCd',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'12',objTypeCode:'data',UpperFlagCode:'1',objTypeName:'data',refDataCollection:'ds_search',code:'commCd',selectID:'retrieveCommInfo','ev:onclickEvent':'scwin.udc_commCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_commCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_commCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입고관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_inMgntNo',placeholder:'',style:'width:150px;',maxlength:'15',editType:'select',allowChar:'a-zA-Z0-9',objType:'data',ref:'data:ds_search.inMgntNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실화주',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_mchtNm',placeholder:'',style:'width:150px;',ref:'data:ds_search.mctNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'CFS 품목조회',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_results',id:'udc_topGrdBtn',grdDownOpts:'{"fileName":"CFS품목조회.xlsx","sheetName":"CFS품목조회","type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_results_oncellclick','ev:oncelldblclick':'scwin.gr_results_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'입고번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'120',value:'입고관리번호'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'재고관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'100',value:'입고일자'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'품명코드',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'품명',width:'120'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column46',value:'청구거래처코드',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'청구거래처명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'포장<br/>단위',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'재고<br/>수량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'재고<br/>중량(kg)',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',value:'재고<br/>용적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',value:'RTON',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'작업<br/>수량',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'작업<br/>중량(kg)',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',value:'작업<br/>용적',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'LINE코드',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column23',value:'LINE명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column25',value:'실화주명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column27',value:'BL번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',value:'신고<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'BLOCK',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'selcYn',inputType:'checkbox',removeBorderStyle:'false',width:'50',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ioNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cfsInMgntNo',inputType:'text',removeBorderStyle:'false',width:'120'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockMgntNo',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'inStdDt',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commCd',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockClntNo',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockClntNm',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cfsUnitCd',inputType:'text',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockQty',inputType:'text',width:'70',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockWt',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###.#0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'stockCbm',displayMode:'label',textAlign:'right',displayFormat:'#,###.##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rsltsRton',displayMode:'label',textAlign:'right',displayFormat:'#,###.##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkQty',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkWt',displayMode:'label',textAlign:'right',displayFormat:'#,###.#0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkCbm',displayMode:'label',textAlign:'right',displayFormat:'#,###.##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cfsLineCd',value:'',displayMode:'label',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'lineNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'cfsMchtNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'blNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bondTransDeclarYn',displayMode:'label',customFormatter:'scwin.bondTransDeclarYnExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lblock',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120.00px;'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th br1'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업수량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_qty',label:'',ref:'',style:'',userData2:'',dataType:'number',displayFormat:'###,##0'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업중량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_grossWt',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업용적',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_cbm',label:'',ref:'',style:'',userData2:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Clpadd',style:'',type:'button',objType:'bSave',userAuth:'C','ev:onclick':'scwin.f_rtnValue'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CLP추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',style:'',type:'button','ev:onclick':'scwin.f_WinClose'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]})