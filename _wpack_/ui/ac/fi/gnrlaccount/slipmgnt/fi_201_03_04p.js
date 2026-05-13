/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_03_04p.xml 37265 eba6b9bb0a8fda976b533addd0d82eb3e550ac4cde753397950a254bd50c7c61 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_settleTarget',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrDt',name:'입금일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrNo',name:'발생번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'ramt',name:'잔액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'외화금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'ramtFcrc',name:'외화잔액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntClntNo',name:'관리거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'settleClsCd',name:'정산구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crcCd',name:'통화코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_parent'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqAcctDeptCd',name:'요청귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqAcctDeptNm',name:'요청귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqEmpNo',name:'요청사번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqEmpNm',name:'요청사원명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'setlIntendDt',name:'정리예정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'setlAmt',name:'정리금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'setlAmtFcrc',name:'정리금액_외화',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postSetlAmt',name:'기정리금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postSetlAmtFcrc',name:'기정리외화금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'susPayClsCd',name:'가지급금구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcptAmt',name:'입금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcptAmtFcrc',name:'입금액(외화)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:key',A:{id:'setlDt',name:'정리일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rltSeq',name:'관련사건 저장순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'setlIntendAmt',name:'정리예정금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'setlIntendAmtFcrc',name:'정리예정외화금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'setlCompleteYn',name:'정리완료여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postYn',name:'회계처리여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNm',name:'작성자사원명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:key',A:{id:'setexchRt',name:'정리환율',dataType:'text'}},{T:1,N:'w2:key',A:{id:'amtFcrc',name:'외화금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_settleTargetRow'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stlOutbrDt',name:'정산입금일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stlSlipNo',name:'정산DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stlOutbrNo',name:'정산발생번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stlClntNo',name:'정산거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stlClntNm',name:'정산거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stlAcctDeptCd',name:'정산회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stlAcctDeptNm',name:'정산회계부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stlAcctCd',name:'정산계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stlAcctNm',name:'정산계정명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stlAmt',name:'정산금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stlRamt',name:'정산잔액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stlAmtFcrc',name:'정산외화금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stlRamtFcrc',name:'정산외화잔액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stlCrcCd',name:'정산통화코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stlExchRt',name:'정산환율',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveSettleTargetForJournalizeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_settleTarget","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_settleTarget","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_201_03_04p
// 이름     : 채권채무선수금조회(채권정리내역)
// 경로     : 재무회계/일반회계/전표관리/
// 사용계정 : 내부
// 비고     : 미리 조회해놓고 복사 버튼 누르면 보냄
//
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//        
//            회계/재무회계/일반회계/전표관리/차세대 매입전표 발행차세대 매입전표팝업(fi_201_01_12p.jsp)에서 호출
//            자회사 회계/재무회계/일반회계/전표관리/BIDC 매출입전표 발행BIDC 매출입전표팝업(fi_201_01_11p.jsp)에서 호출
//            회계/재무회계/일반회계/전표관리/대체전표입력(fi_201_03_01b.jsp)에서 호출
//==================================================================================================================
// 로그인사용자 정보
scwin.vLoginCoCd = ""; // 소속 자회사 
scwin.vLoginCoClsCd = ""; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.privAdmin = ""; // 어드민권한
scwin.userId = ""; // 사용자ID
scwin.vCoCd = ""; // 회사코드 
scwin.empNo = ""; // 사원번호

scwin.ds_parent = ""; // 가지급 내역
scwin.ds_parentHeader = ""; // 가지급 헤더
scwin.acctDeptCd = ""; // 신청부서코드
scwin.acctDeptNm = ""; // 신청부서명
scwin.mgntClntNo = ""; // 거래처코드
scwin.mgntClntNm = ""; // 거래처명
scwin.acctCd = ""; // 계정코드
scwin.acctNm = ""; // 계정명
scwin.settleClsCd = ""; // 정리대상구분코드(1:채권, 2:채무, 3:선수금)
scwin.crcCd = ""; // 통화코드
scwin.titleNm = "";
scwin.hid_settleClsCd = ""; // 정산구분코드(hidden)

scwin.flag = ""; // 팝업여부 (Y: 팝업)

scwin.onpageload = function () {
  console.log("====== onpageload ==================");

  // 회원정보를 json 데이터로 모두 받음
  let memJson = $c.data.getMemInfo($p);

  // 로그인 정보 추출
  let coCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd");
  let coClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd");
  let userHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드
  let userId = $c.data.getMemInfo($p, "userId");
  let privAdmin = $c.data.getMemInfo($p, "privAdmin");
  let empNo = $c.data.getMemInfo($p, "empNo");
  scwin.vLoginCoCd = coCd;
  scwin.vLoginCoClsCd = coClsCd;
  scwin.vUserHomeClsCd = userHomeClsCd;
  scwin.vCoCd = coCd; // 동일
  scwin.userId = userId;
  scwin.privAdmin = privAdmin;
  scwin.empNo = empNo;
  console.log("▶▶ vLoginCoCd : " + scwin.vLoginCoCd + "   loginCoClsCd : " + scwin.vLoginCoClsCd);
  console.log("▶▶ vCoCd      : " + scwin.vCoCd + "   empNo : " + scwin.empNo);
  console.log("▶▶ userHomeClsCd : " + scwin.vUserHomeClsCd + "   userId : " + scwin.userId + "   privAdmin : " + scwin.privAdmin);
  console.log("▶▶ memJson : " + JSON.stringify(memJson));

  //================ 모드 확인 =========================//
  //String flag 		= request.getParameter("flag");			//팝업여부(Y:팝업화면)
  scwin.flag = $c.data.getParameter($p, "flag") == null ? "" : $c.data.getParameter($p, "flag"); //팝업여부(Y:팝업화면)

  console.log("flag (팝업여부) [" + scwin.flag + "]");

  // 팝업모드일경우
  //if('<%=flag%>'=='Y'){
  if (scwin.flag == "Y") {
    //alert("f_OnLoad 전");
    // 부모페이지로 부터 파라미터를 받는다. 
    var valueObject = window.dialogArguments;
    /*
    		scwin.ds_parent       = valueObject.prov;         // 가지급 내역
    		scwin.ds_parentHeader = valueObject.provHeader;   // 가지급 헤더
    		scwin.acctDeptCd      = valueObject.acctDeptCd;   // 신청부서코드
    		scwin.acctDeptNm      = valueObject.acctDeptNm;   // 신청부서명
    		scwin.mgntClntNo      = valueObject.mgntClntNo;   // 거래처코드
    		scwin.mgntClntNm      = valueObject.mgntClntNm;   // 거래처명
    		scwin.acctCd          = valueObject.acctCd;       // 계정코드
    		scwin.acctNm          = valueObject.acctNm;       // 계정명
    		scwin.settleClsCd     = valueObject.settleClsCd;  // 정리대상구분코드(1:채권, 2:채무, 3:선수금)
    		scwin.crcCd           = valueObject.crcCd;        // 통화코드
    		scwin.titleNm          = "";
     */
    //var ds_par = $c.data.getParameter("prov");
    //console.log(" ds_par : "+ ds_par);

    //scwin.ds_parent = $c.data.getParameter("prov");
    scwin.acctDeptCd = $c.data.getParameter($p, "acctDeptCd") == null ? "" : $c.data.getParameter($p, "acctDeptCd");
    scwin.acctDeptNm = $c.data.getParameter($p, "acctDeptNm") == null ? "" : $c.data.getParameter($p, "acctDeptNm");
    scwin.mgntClntNo = $c.data.getParameter($p, "mgntClntNo") == null ? "" : $c.data.getParameter($p, "mgntClntNo");
    scwin.mgntClntNm = $c.data.getParameter($p, "mgntClntNm") == null ? "" : $c.data.getParameter($p, "mgntClntNm");
    scwin.acctCd = $c.data.getParameter($p, "acctCd") == null ? "" : $c.data.getParameter($p, "acctCd");
    scwin.acctNm = $c.data.getParameter($p, "acctNm") == null ? "" : $c.data.getParameter($p, "acctNm");
    scwin.settleClsCd = $c.data.getParameter($p, "settleClsCd") == null ? "" : $c.data.getParameter($p, "settleClsCd");
    scwin.crcCd = $c.data.getParameter($p, "crcCd") == null ? "" : $c.data.getParameter($p, "crcCd");
    console.log("▶ acctDeptCd : " + scwin.acctDeptCd + " mgntClntNo : " + scwin.mgntClntNo);
    console.log("▶ acctCd : " + scwin.acctCd + " acctNm : " + scwin.acctNm);
    console.log("▶ settleClsCd : " + scwin.settleClsCd + " crcCd : " + scwin.crcCd);
    var dcJSON = ds_parent.getJSON();
    console.log("  *** ds_parent : " + JSON.stringify(dcJSON));

    //alert(settleClsCd+" >>> "+titleNm);
  }

  // 공통코드 : onPageLoad 에 위치
  const codeOptions = [{
    grpCd: "ZZ006",
    compID: "lc_crcCd"
  } // 통화코드  <%= GauceUtil.getCodeList("ZZ006",GauceUtil.CODE) %>
  ];
  console.log(" codeOptions : " + JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);

  // 팝업 타이틀 변경
  scwin.popTitleCh();
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 팝업 타이틀 변경
//-------------------------------------------------------------------------
scwin.popTitleCh = function () {
  var titleNm = "";

  //switch(settleClsCd){
  switch (scwin.settleClsCd) {
    case "1":
      titleNm = "채권정리내역";
      break;
    case "2":
      titleNm = "채무정리내역";
      break;
    case "3":
      titleNm = "선수금정리내역";
      break;
    default:
      titleNm = "채권정리내역";
      break;
  }
  console.log(" titleNm [" + titleNm + "]");
  $c.data.setPopupTitle($p, titleNm);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");

  // 2025-10-14 : 작성일자 포커스 위치 이동
  $p.setTimeout(function () {
    //f_HeaderCreate();
    $c.gus.cfDisableObjects($p, [ed_mgntClntNo, ed_mgntClntNm, ed_acctDeptCd, ed_acctDeptNm, ed_acctCd, ed_acctNm, lc_crcCd]);

    // ed_acctDeptCd.Text 	  = acctDeptCd;
    // ed_acctCd.Text 		  = acctCd;
    // ed_mgntClntNo.Text 	  = mgntClntNo;
    // hid_settleClsCd.value = settleClsCd;
    // txt_mgntClntNm.value  = mgntClntNm;
    // txt_acctDeptNm.value  = acctDeptNm;
    // txt_acctNm.value      = acctNm;
    // lc_crcCd.BindColVal   = crcCd;

    ed_acctDeptCd.setValue(scwin.acctDeptCd); // 신청부서코드
    ed_acctCd.setValue(scwin.acctCd); // 계정코드
    ed_mgntClntNo.setValue(scwin.mgntClntNo); // 거래처코드
    scwin.hid_settleClsCd = scwin.settleClsCd; // 정리대상구분코드(1:채권, 2:채무, 3:선수금)
    ed_mgntClntNm.setValue(scwin.mgntClntNm); // 거래처명
    ed_acctDeptNm.setValue(scwin.acctDeptNm); // 신청부서명
    ed_acctNm.setValue(scwin.acctNm); // 계정명
    lc_crcCd.setValue(scwin.crcCd); // 통화코드

    //alert("lc_crcCd.BindColVal >>> "+lc_crcCd.BindColVal);

    scwin.f_Retrieve();
  }, {
    "delay": 50
  });
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  console.log("====== f_Retrieve ==================");

  //ds_condition.UseChangeInfo = false;

  //dataSetDebug(ds_condition, true);

  // 반드시 지정해야 함
  ds_condition.set("settleClsCd", scwin.settleClsCd);
  var dcJSON = ds_condition.getJSON();
  console.log("  *** ds_condition : " + JSON.stringify(dcJSON));

  //tr_retrieve.post();
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
//  조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  console.log("▷ sbm_search_submitdone ==================");
  /*
   language="JavaScript" for="tr_retrieve" event="OnSuccess()">   
  	if (cfCheckCreateFlag() == true) {
        cfTurnCreateFlag(false);
      }
      else {
  	  cfHideDSWaitMsg(gr_settleDetail)      
        if (ds_settleTarget.CountRow == 0){
          alert("조회된 데이터가 없습니다");
  	  }else{
    		cfShowTotalRows(totalRows,ds_settleTarget.CountRow)
  	  }
      }
  */

  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  var CountRow = ds_settleTarget.getTotalRow();
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
  } else {
    // $c.gus.cfHideDSWaitMsg(gr_settleDetail);   // 대기메시지 - 웹스 내장함수 사용

    if (CountRow == 0) {
      await $c.win.alert($p, "조회된 데이터가 없습니다");
    } else {
      //cfShowTotalRows(totalRows,ds_settleTarget.CountRow);
      ed_totalRows.setValue(CountRow);

      // 그리드 포커스
      gr_settleDetail.setFocusedCell(0, 0, false);
    }
  }
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 그리드 클릭
//-------------------------------------------------------------------------
scwin.gr_settleDetail_oncellclick = async function (rowIndex, columnIndex, columnId) {
  console.log("=== gr_settleDetail_oncellclick (그리드 클릭)");
  /*  <!-- 거래처팝업화면 호출, 전표번호클릭시 -->
  < language="javascript"  for=gr_settleDetail event=OnClick(Row,Colid)>
  	if (Colid == "clntNo" ) {		
  		if ( !(ds_settleTarget.NameValue(Row,Colid) == null &&  ds_settleTarget.NameValue(Row,Colid) == ""))
  		{
  			cfViewClntInfo(ds_settleTarget.NameValue(Row,Colid))
  		}
  	} else if (Colid == "slipNo") {
  		if (Row >0 && ds_settleTarget.NameValue(Row,"slipNo") != "") {
  			cfShowSlipInfo(ds_settleTarget.NameValue(Row,"slipNo"));		
  		}	
  	}
  */
  var Row = rowIndex;
  var Colid = columnId;
  if (Colid == "clntNo") {
    // 거래처번호
    if (!(ds_settleTarget.getCellData(Row, Colid) == null && ds_settleTarget.getCellData(Row, Colid) == "")) {
      // 거래처조회
      var rtnList = await $c.gus.cfViewClntInfo($p, ds_settleTarget.getCellData(Row, Colid));
      console.log(rtnList);
    }
  } else if (Colid == "slipNo") {
    // 전표번호
    if (ds_settleTarget.getCellData(Row, "slipNo") != "") {
      // Row > 0 조건은 제외 (웹스퀘어는 0부터 시작)
      var rtnList = await $c.gus.cfShowSlipInfo($p, ds_settleTarget.getCellData(Row, "slipNo")); // 전표내역조회
      console.log(rtnList);
    }
  }
};

//-------------------------------------------------------------------------
// 부모창으로 값을 리턴
//-------------------------------------------------------------------------
scwin.f_SelectStl = async function () {
  console.log("=== f_SelectStl (부모창으로 값 리턴)");
  var RowPosition = ds_settleTarget.getRowPosition();

  //if('<%=flag%>'=='Y'){
  if (scwin.flag == "Y") {
    var arrRtnVal = new Array();
    var dc = ds_settleTarget.getRowJSON(RowPosition);
    /*
            arrRtnVal.stlOutbrDt     = ds_settleTarget.NameValue(ds_settleTarget.RowPosition, "outbrDt" );
            arrRtnVal.stlSlipNo      = ds_settleTarget.NameValue(ds_settleTarget.RowPosition, "slipNo" );
            arrRtnVal.stlOutbrNo     = ds_settleTarget.NameValue(ds_settleTarget.RowPosition, "outbrNo" );
            arrRtnVal.stlClntNo      = ds_settleTarget.NameValue(ds_settleTarget.RowPosition, "clntNo" );
            arrRtnVal.stlClntNm      = ds_settleTarget.NameValue(ds_settleTarget.RowPosition, "clntNm" );
            arrRtnVal.stlAcctDeptCd  = ds_settleTarget.NameValue(ds_settleTarget.RowPosition, "acctDeptCd" );
            arrRtnVal.stlAcctDeptNm  = ds_settleTarget.NameValue(ds_settleTarget.RowPosition, "acctDeptNm" );
            arrRtnVal.stlAcctCd      = ds_settleTarget.NameValue(ds_settleTarget.RowPosition, "acctCd" );
            arrRtnVal.stlAcctNm      = ds_settleTarget.NameValue(ds_settleTarget.RowPosition, "acctNm" );
            arrRtnVal.stlAmt         = ds_settleTarget.NameValue(ds_settleTarget.RowPosition, "amt" );
            arrRtnVal.stlRamt        = ds_settleTarget.NameValue(ds_settleTarget.RowPosition, "ramt" );
            arrRtnVal.stlAmtFcrc     = ds_settleTarget.NameValue(ds_settleTarget.RowPosition, "amtFcrc" );
            arrRtnVal.stlRamtFcrc    = ds_settleTarget.NameValue(ds_settleTarget.RowPosition, "ramtFcrc" );
            arrRtnVal.stlCrcCd       = ds_settleTarget.NameValue(ds_settleTarget.RowPosition, "crcCd" );
            arrRtnVal.stlExchRt      = ds_settleTarget.NameValue(ds_settleTarget.RowPosition, "exchRt" );
     */
    // 2025-10-28 : 기존 컬럼 나열 방식을 ds 하나로 리턴.
    // 정산입금일자 : OUT_BR_DT 이므로 원래 stlOutbrDt 가 맞음
    dma_settleTargetRow.set("stlOutbrDt", ds_settleTarget.getCellData(RowPosition, "outbrDt")); // 정산입금일자 
    dma_settleTargetRow.set("stlSlipNo", ds_settleTarget.getCellData(RowPosition, "slipNo")); // 정산DEBIS전표번호
    dma_settleTargetRow.set("stlOutbrNo", ds_settleTarget.getCellData(RowPosition, "outbrNo")); // 정산발생번호
    dma_settleTargetRow.set("stlClntNo", ds_settleTarget.getCellData(RowPosition, "clntNo")); // 정산거래처번호
    dma_settleTargetRow.set("stlClntNm", ds_settleTarget.getCellData(RowPosition, "clntNm")); // 정산거래처명
    dma_settleTargetRow.set("stlAcctDeptCd", ds_settleTarget.getCellData(RowPosition, "acctDeptCd")); // 정산회계부서코드
    dma_settleTargetRow.set("stlAcctDeptNm", ds_settleTarget.getCellData(RowPosition, "acctDeptNm")); // 정산회계부서명
    dma_settleTargetRow.set("stlAcctCd", ds_settleTarget.getCellData(RowPosition, "acctCd")); // 정산계정코드
    dma_settleTargetRow.set("stlAcctNm", ds_settleTarget.getCellData(RowPosition, "acctNm")); // 정산계정명
    dma_settleTargetRow.set("stlAmt", ds_settleTarget.getCellData(RowPosition, "amt")); // 정산금액
    dma_settleTargetRow.set("stlRamt", ds_settleTarget.getCellData(RowPosition, "ramt")); // 정산잔액
    dma_settleTargetRow.set("stlAmtFcrc", ds_settleTarget.getCellData(RowPosition, "amtFcrc")); // 정산외화금액
    dma_settleTargetRow.set("stlRamtFcrc", ds_settleTarget.getCellData(RowPosition, "ramtFcrc")); // 정산외화잔액
    dma_settleTargetRow.set("stlCrcCd", ds_settleTarget.getCellData(RowPosition, "crcCd")); // 정산통화코드
    dma_settleTargetRow.set("stlExchRt", ds_settleTarget.getCellData(RowPosition, "exchRt")); // 정산환율

    console.log("  --- dma_settleTargetRow.getJSON [" + JSON.stringify(dma_settleTargetRow.getJSON()) + "]");

    // await $c.win.alert("  --- dma_settleTargetRow.getJSON ["+ JSON.stringify(dma_settleTargetRow.getJSON()) +"]");

    // JSON 값으로 보냄
    arrRtnVal.ds_return = dma_settleTargetRow.getJSON();

    //        window.returnValue = arrRtnVal ;
    //        window.close();
    let rt = [arrRtnVal.ds_return];
    $c.win.closePopup($p, rt);
  }
};

//-------------------------------------------------------------------------
// 닫기 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_Division_onclick = function (e) {
  $c.win.closePopup($p, ["N/A"]);
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// 엑셀 Download
//-------------------------------------------------------------------------
scwin.f_Export = async function () {
  if (gr_settleDetail.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }

  // if(ds_settleTarget.CountRow == 0) {
  // 	cfAlertMsg(MSG_CM_WRN_002);
  // 	return;
  // }

  // var sheetTitle;
  // var sheetTitle2;
  // //sheetTitle = "전표상세내역 (" + ed_closeYm.text + txt_acctDeptNm.value + ")";
  let sheetTitle = "전표상세내역 (" + ed_acctDeptNm.getValue() + ")";

  // gr_settleDetail.SetExcelTitle(0, "");
  // gr_settleDetail.SetExcelTitle(1, "value:"+sheetTitle+";"  // 표시할 타이틀
  // 							    + "font-face:'돋움체';" // 폰트
  // 							    + "font-size:18pt;"    // 폰트 크기
  // 							    + "font-color:black;"  // 폰트 색깔
  // 							    + "bgcolor:#ffffff;"   // 배경 색깔
  // 							    + "align:center;"      // 정렬
  // 							    + "line-color:white;"  // 타이틀 부분 테두리선 색깔
  // 							    + "line-width:0pt;"    // 타이틀 테두리선 굵기
  // 							    + "skiprow:1;");       // 타이틀 다음 떼는 로우 수

  // //fileName = '전표상세내역_' + txt_acctDeptNm.value + "_" + ed_closeYm.text;
  let fileName = '전표상세내역_' + ed_acctDeptNm.getValue(); // + "_" + ica_closeYm.getValue();

  // cfGridToExcel(gr_settleDetail,fileName,fileName,2+8+16);

  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    let options = {
      fileName: fileName + ".xlsx",
      sheetName: sheetTitle,
      startRowIndex: 2,
      // 내용 앞으로 몇 row 띄우는지...
      startColumnIndex: 0,
      bodyWordwrap: true,
      // 줄바꿈
      useSubTotal: true // 소계출력
      //hiddenVisible    : true    // 히든 컬럼 출력 : KYU_TEST : 2026-03-13 : 2 플래그 상관없이 개인화 모양으로 내림
    };
    const infoArr = [{
      rowIndex: 0,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 15 /* 병합할 컬럼갯수 */,
      text: sheetTitle,
      textAlign: "center",
      drawBorder: false,
      fontSize: "18px",
      fontName: "돋움체"
    }];
    $c.data.downloadGridViewExcel($p, gr_settleDetail, options, infoArr);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통화',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_crcCd',style:'',submenuSize:'auto',ref:'data:ds_condition.crcCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_group2',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_mgntClntNo',class:'form-control w80',ref:'data:ds_condition.mgntClntNo'}},{T:1,N:'xf:input',A:{style:'',id:'ed_mgntClntNm',class:'form-control w150'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group3',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w80',id:'ed_acctDeptCd',style:'',ref:'data:ds_condition.acctDeptCd'}},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_acctDeptNm',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group4',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w80',id:'ed_acctCd',style:'',ref:'data:ds_condition.acctCd'}},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_acctNm',style:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_gridMain',gridUpObjType:'X',gridDownFn:'scwin.f_Export',gridID:'gr_settleDetail',gridDownYn:'Y',btnUser:'Y',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_settleTarget',focusMode:'cell',id:'gr_settleDetail',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_settleDetail_oncellclick','ev:oncelldblclick':'scwin.f_SelectStl'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'발생번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'금액(원)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'잔액(원)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'외화금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'외화잔액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'통화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'환율',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outbrDt',value:'',displayMode:'label',readOnly:'true',dataType:'date',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:';color:blue;',id:'slipNo',value:'',displayMode:'label',class:'underline',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outbrNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'amt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ramt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'amtFcrc',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###.#0',readOnly:'true',excelFormat:' #,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ramtFcrc',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###.#0',dataType:'float',readOnly:'true',excelFormat:' #,##0.00'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crcCd',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'exchRt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###.#0',dataType:'float',readOnly:'true',excelFormat:' #,##0.00'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column48',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'amt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column47',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'ramt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'amtFcrc\')',displayFormat:'#,###.#0',excelFormat:' #,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'ramtFcrc\')',displayFormat:'#,###.#0',excelFormat:' #,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Division',style:'',type:'button','ev:onclick':'scwin.btn_Division_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Select',style:'',type:'button','ev:onclick':'scwin.f_SelectStl'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'적용'}]}]}]}]}]}]}]})