/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_01_01p.xml 39206 f6aa570148b9f411525778393863b11081fe905b82b1a0fd57849e2705c4e98b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_acctCd',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'불가계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'계정명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_etcAmt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'etcAmt1',name:'기타금액1 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAmt2',name:'기타금액2 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAcctCd1',name:'기타금액1 계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAcctCd2',name:'기타금액2 계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAcctNm1',name:'기타금액1 계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAcctNm2',name:'기타금액2 계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcSummary1',name:'기타금액1 적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcSummary2',name:'기타금액2 적요',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_commonCode',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'sysCd',name:'sysCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'queryId',name:'queryId'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param1',name:'param1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param2',name:'param2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param3',name:'param3'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param4',name:'param4'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param5',name:'param5'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param6',name:'param6'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param7',name:'param7'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param8',name:'param8'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param9',name:'param9'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param10',name:'param10'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_acctCd',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_commonCode',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_acctCd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_201_01_01p
// 이름     : 경비전표입력 기타금액입력
// 경로     : 재무회계/일반회계/전표관리/
// 사용계정 : 내부
// 비고     : 
//
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//            회계/재무회계/일반회계/전표관리/경비전표입력(fi_201_01_01b.jsp)에서 호출
//              - 기타금액입력 버튼 클릭
//==================================================================================================================
// 로그인사용자 정보
scwin.vLoginCoCd = ""; // 소속 자회사 
scwin.vLoginCoClsCd = ""; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.privAdmin = ""; // 어드민권한
scwin.userId = ""; // 사용자ID
scwin.vCoCd = ""; // 회사코드
scwin.vCoClsCd = ""; // 소속회사종류 : 회계_회사구분('CO035' : 0:동부 EXPRESS)

scwin.acctDeptCd = ""; // 회계부서코드
scwin.acctDeptNm = ""; // 회계부서명

scwin.isSubCompany = false; // 자회사여부 : false 고정 (f_setCompanyInfo 호출안함)

//scwin.valueObject = $c.data  window.dialogArguments;

scwin.varCostClsCd = ""; // 비용구분 : 01^원가,02^판관비,03^원가+판관비
/*
<INPUT type="hidden" name="txt_costClsCd"      id="txt_costClsCd" >
<INPUT type="hidden" name="txt_bizDomCd"       id="txt_bizDomCd" > 
<INPUT type="hidden" name="txt_slipDt"         id="txt_slipDt" > 
<INPUT type="hidden" name="txt_evidClsCd"      id="txt_evidClsCd" >
<INPUT type="hidden" name="txt_acctClsCd1"      id="txt_acctClsCd1" >
<INPUT type="hidden" name="txt_acctClsCd2"      id="txt_acctClsCd2" > 
*/
scwin.txt_costClsCd = "";
scwin.txt_bizDomCd = "";
scwin.txt_slipDt = "";
scwin.txt_evidClsCd = "";
scwin.txt_acctClsCd1 = "";
scwin.txt_acctClsCd2 = "";
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
  scwin.vCoCd = coCd;
  scwin.vCoClsCd = coClsCd;
  scwin.userId = userId;
  scwin.vadminYn = privAdmin;
  scwin.userEmpNo = empNo;
  console.log("▶▶ vLoginCoCd : " + scwin.vLoginCoCd + "   loginCoClsCd : " + scwin.vLoginCoClsCd);
  console.log("▶▶ vCoCd      : " + scwin.vCoCd + "   vCoClsCd : " + scwin.vCoClsCd);
  console.log("▶▶ user_id    : " + scwin.user_id + "   userEmpNo : " + scwin.userEmpNo);
  console.log("▶▶ userHomeClsCd : " + scwin.vUserHomeClsCd + "   vadminYn : " + scwin.vadminYn);
  //console.log("▶▶ memJson : "+ JSON.stringify(memJson));
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");

  // 2025-10-14 : 작성일자 포커스 위치 이동
  $p.setTimeout(function () {
    scwin.pLoexSlipNo = $c.data.getParameter($p, "loexSlipNo") == null ? "" : $c.data.getParameter($p, "loexSlipNo");
    scwin.f_Header();

    // if(typeof(valueObject) != "undefined" && valueObject != null){
    if ($c.data != null) {
      // varCostClsCd	= valueObject.costClsCd;
      // txt_slipDt.value	= valueObject.slipDt;
      // txt_bizDomCd.value	= valueObject.bizDomCd;
      // txt_evidClsCd.value	= valueObject.evidClsCd;

      // ed_etcAmt1.text	= valueObject.etcAmt1;
      // ed_etcAmt2.text	= valueObject.etcAmt2;
      // ed_etcAcctCd1.text	= valueObject.etcAcctCd1;
      // ed_etcAcctCd2.text	= valueObject.etcAcctCd2;
      // txt_etcSummary1.value	= valueObject.etcSummary1;
      // txt_etcSummary2.value	= valueObject.etcSummary2;

      scwin.varCostClsCd = $c.data.getParameter($p, "costClsCd") == null ? "" : $c.data.getParameter($p, "costClsCd");
      scwin.txt_slipDt = $c.data.getParameter($p, "slipDt") == null ? "" : $c.data.getParameter($p, "slipDt");
      scwin.txt_bizDomCd = $c.data.getParameter($p, "bizDomCd") == null ? "" : $c.data.getParameter($p, "bizDomCd");
      scwin.txt_evidClsCd = $c.data.getParameter($p, "evidClsCd") == null ? "" : $c.data.getParameter($p, "evidClsCd");
      let etcAmt1 = $c.data.getParameter($p, "etcAmt1") == null ? "" : $c.data.getParameter($p, "etcAmt1");
      let etcAmt2 = $c.data.getParameter($p, "etcAmt2") == null ? "" : $c.data.getParameter($p, "etcAmt2");
      let etcAcctCd1 = $c.data.getParameter($p, "etcAcctCd1") == null ? "" : $c.data.getParameter($p, "etcAcctCd1");
      let etcAcctCd2 = $c.data.getParameter($p, "etcAcctCd2") == null ? "" : $c.data.getParameter($p, "etcAcctCd2");
      let etcSummary1 = $c.data.getParameter($p, "etcSummary1") == null ? "" : $c.data.getParameter($p, "etcSummary1");
      let etcSummary2 = $c.data.getParameter($p, "etcSummary2") == null ? "" : $c.data.getParameter($p, "etcSummary2");
      ed_etcAmt1.setValue(etcAmt1);
      ed_etcAmt2.setValue(etcAmt2);
      ed_etcAcctCd1.setValue(etcAcctCd1);
      ed_etcAcctCd2.setValue(etcAcctCd2);
      ed_etcSummary1.setValue(etcSummary1);
      ed_etcSummary2.setValue(etcSummary2);
      console.log("▶ varCostClsCd : " + scwin.varCostClsCd + "   txt_slipDt : " + scwin.txt_slipDt);
      console.log("▶ txt_bizDomCd : " + scwin.txt_bizDomCd + "   txt_evidClsCd : " + scwin.txt_evidClsCd);
    }

    //투입불가계정 조회
    scwin.getBannedAcctCd();
    $c.gus.cfDisableObjects($p, [ed_etcAcctNm1, ed_etcAcctNm2]);
    if (ed_etcAcctCd1.getValue() != "") {
      scwin.f_openPopUp('1', 'T');
    }
    if (ed_etcAcctCd2.getValue() != "") {
      scwin.f_openPopUp('2', 'T');
    }
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// function name : f_Header
// function desc : 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  // var ETC_AMT_HEADER    =     "etcAcctCd1:STRING(7)"                   // 기타금액1 계정
  //                          + ",etcAcctNm1:STRING(50)"                  // 기타금액1 계정이름
  //                          + ",etcAmt1:DECIMAL(13.0)"                  // 기타금액1 금액
  //                          + ",etcSummary1:STRING(100)"                // 기타금액1 적요
  //                          + ",etcAcctCd2:STRING(7)"                   // 기타금액2 계정
  //                          + ",etcAcctNm2:STRING(50)"                  // 기타금액2 계정이름
  //                          + ",etcAmt2:DECIMAL(13.0)"                  // 기타금액2 금액
  //                          + ",etcSummary2:STRING(100)"                // 기타금액2 적요
  //                          ;
  // ds_etcAmt.SetDataHeader(ETC_AMT_HEADER);
  // ds_etcAmt.AddRow();

  ds_etcAmt.insertRow();
  ds_etcAmt.setRowPosition(0);

  // 투입불가 계정 리스트
  // var ACCTCD_HEADER =       "col1:STRING(7),"
  //                         + "col2:STRING()";

  // ds_acctCd.SetDataHeader(ACCTCD_HEADER);
  // ds_acctCd.AddRow();
};

//-------------------------------------------------------------------------
// 투입불가계정 조회
//-------------------------------------------------------------------------
scwin.getBannedAcctCd = async function () {
  console.log("=== getBannedAcctCd (투입불가계정 조회)");

  //투입불가계정 조회
  // ds_acctCd.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" + "&queryId=retrieveExpenseAcctCdInfo&param10=N";
  // ds_acctCd.Reset();

  const strParam = {
    sysCd: "CommonEBC" // 시스템코드
    ,
    queryId: "retrieveExpenseAcctCdInfo" // 쿼리ID
    ,
    param1: "",
    param2: "",
    param10: "N" // CD
  };

  //데이터셋에 정보설정
  ds_commonCode.setJSON(strParam);
  await $c.sbm.execute($p, sbm_acctCd);
};

//-------------------------------------------------------------------------
// 투입불가계정 submitdone
//-------------------------------------------------------------------------
scwin.sbm_acctCd_submitdone = function (e) {
  console.log("▷ sbm_acctCd_submitdone (투입불가계정)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  if (e.responseJSON.GAUCE) {
    ds_acctCd.setJSON(e.responseJSON.GAUCE);
  }
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 기타계정1 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_etcAcctCd1_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};

//-------------------------------------------------------------------------
// 기타계정2 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_etcAcctCd2_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'F');
};

//-------------------------------------------------------------------------
// 팝업 @@
//   1:기타계정1,2:기타계정2
//-------------------------------------------------------------------------
// scwin.f_openPopUp = function(flag,check,isCdYn ) {
//     console.log("=== f_openPopUp ( flag[ "+flag+" ]  check[ "+check+" ]  isCdYn[ "+isCdYn+" ]  1:기타계정1,2:기타계정2)");

scwin.f_openPopUp = function (flag, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  check[ " + check + " ]  1:기타계정1,2:기타계정2)");
  var rtnList = new Array();
  switch (flag) {
    case '1':
      // 기타계정1

      // 비용구분 : 01^원가,02^판관비,03^원가+판관비
      if (scwin.varCostClsCd == "") {
        scwin.varCostClsCd = "04";
      }

      // 팝업파라미터 정의
      if (scwin.isSubCompany == false) {
        var param = "T" // 01. 추가 WHERE 조건절 PARAM3
        + "," + scwin.txt_slipDt.trim() // 02. 추가 WHERE 조건절 PARAM4   // 전표일자
        + "," // 03. 추가 WHERE 조건절 PARAM5
        + "," // 04. 추가 WHERE 조건절 PARAM6
        + "," // 05. 추가 WHERE 조건절 PARAM7
        + "," + scwin.varCostClsCd // 06. 추가 WHERE 조건절 PARAM8   // 비용구분코드
        + "," + scwin.txt_bizDomCd // 07. 추가 WHERE 조건절 PARAM9   // 사업영역코드
        + ",Y" // 08. 추가 WHERE 조건절 PARAM10  // 렌터카 고속일경우는 변고정비 다조회되도록 수정 - 08.04.21-신종민
        ;
      } else {
        var param = "T" // 01. 추가 WHERE 조건절 PARAM3
        + "," + scwin.txt_slipDt.trim() // 02. 추가 WHERE 조건절 PARAM4   // 전표일자
        + "," // 03. 추가 WHERE 조건절 PARAM5
        + "," // 04. 추가 WHERE 조건절 PARAM6
        + "," // 05. 추가 WHERE 조건절 PARAM7
        + "," + scwin.varCostClsCd // 06. 추가 WHERE 조건절 PARAM8   // 비용구분코드
        + "," + scwin.txt_bizDomCd // 07. 추가 WHERE 조건절 PARAM9   // 사업영역코드
        + "," // 08. 추가 WHERE 조건절 PARAM10  // 렌터카 고속일경우는 변고정비 다조회되도록 수정 - 08.04.21-신종민
        ;
      }
      console.log("  기타금액1popup  param [" + param + "]");

      // 증빙종류에 따라 계정코드 팝업의 쿼리가 틀리다.
      // 법인카드/ 개인카드 / 현금영수증의 경우 retrieveExpenseAcctCdInfo2 그 외는  retrieveExpenseAcctCdInfo를 사용한다.
      // 차이점 ? retrieveExpenseAcctCdInfo2 경우 계정코드관리의 매입세액공제여부 컬럼에 비대상 항목이 제외되어 출력이 되지 않는다.
      //          그외는 동일하다.
      // var pSqlId = "";

      switch (scwin.txt_evidClsCd) {
        case "40": //법인카드
        case "50": //개인카드
        case "60":
          //현금영수증
          // pSqlId = "retrieveExpenseAcctCdInfo";
          udc_etcAcctCd1.setSelectId("retrieveExpenseAcctCdInfo");
          break;
        default:
          // pSqlId = "retrieveExpenseAcctCdInfo";
          udc_etcAcctCd1.setSelectId("retrieveExpenseAcctCdInfo");
          break;
      }

      // rtnList = cfCommonPopUp(
      udc_etcAcctCd1.cfCommonPopUp(scwin.udc_etcAcctCd1_callBackFunc
      //   pSqlId                 // 01.pSelectID     XML상의 SELECT ID
      , ed_etcAcctCd1.getValue() // 02.pCode         Code Element의  Value
      , "" // 03.pName         Name Element의  Value
      , check // 04.pWinCloseTF   결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 05.pDispCnt      검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // 06.pTitle        Title순서
      , null // 07.pWidth        보여주는 각 컬럼들의 폭
      , null // 08.pHidden       컬럼중에서 숨기는    컬럼 지정
      , param // 09.pWhere        SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // 10.sFeatures     POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // 11.pExistTF      POP-UP뛰을때 우도우의   사용자 정의  높이
      , null // 12.pAllSearchTF  윈도우 위치 Y좌표
      , null // 13.pWtitleSearch
      );
      break;
    case '2':
      // 기타계정2

      // 비용구분 : 01^원가,02^판관비,03^원가+판관비
      if (scwin.varCostClsCd == "") {
        scwin.varCostClsCd = "04";
      }

      // 팝업파라미터 정의
      if (scwin.isSubCompany == false) {
        var param = "T" // 01. 추가 WHERE 조건절 PARAM3
        + "," + scwin.txt_slipDt.trim() // 02. 추가 WHERE 조건절 PARAM4   // 전표일자
        + "," // 03. 추가 WHERE 조건절 PARAM5
        + "," // 04. 추가 WHERE 조건절 PARAM6
        + "," // 05. 추가 WHERE 조건절 PARAM7
        + "," + scwin.varCostClsCd // 06. 추가 WHERE 조건절 PARAM8   // 비용구분코드
        + "," + scwin.txt_bizDomCd // 07. 추가 WHERE 조건절 PARAM9   // 사업영역코드
        + ",Y" // 08. 추가 WHERE 조건절 PARAM10  // 렌터카 고속일경우는 변고정비 다조회되도록 수정 - 08.04.21-신종민
        ;
      } else {
        var param = "T" // 01. 추가 WHERE 조건절 PARAM3
        + "," + scwin.txt_slipDt.trim() // 02. 추가 WHERE 조건절 PARAM4   // 전표일자
        + "," // 03. 추가 WHERE 조건절 PARAM5
        + "," // 04. 추가 WHERE 조건절 PARAM6
        + "," // 05. 추가 WHERE 조건절 PARAM7
        + "," + scwin.varCostClsCd // 06. 추가 WHERE 조건절 PARAM8   // 비용구분코드
        + "," + scwin.txt_bizDomCd // 07. 추가 WHERE 조건절 PARAM9   // 사업영역코드
        + "," // 08. 추가 WHERE 조건절 PARAM10  // 렌터카 고속일경우는 변고정비 다조회되도록 수정 - 08.04.21-신종민
        ;
      }
      console.log("  기타금액2popup  param [" + param + "]");

      // 증빙종류에 따라 계정코드 팝업의 쿼리가 틀리다.
      // 법인카드/ 개인카드 / 현금영수증의 경우 retrieveExpenseAcctCdInfo2 그 외는  retrieveExpenseAcctCdInfo를 사용한다.
      // 차이점 ? retrieveExpenseAcctCdInfo2 경우 계정코드관리의 매입세액공제여부 컬럼에 비대상 항목이 제외되어 출력이 되지 않는다.
      //          그외는 동일하다.
      // var pSqlId = "";

      switch (scwin.txt_evidClsCd) {
        case "40": //법인카드
        case "50": //개인카드
        case "60":
          //현금영수증
          // pSqlId = "retrieveExpenseAcctCdInfo";
          udc_etcAcctCd2.setSelectId("retrieveExpenseAcctCdInfo");
          break;
        default:
          // pSqlId = "retrieveExpenseAcctCdInfo";
          udc_etcAcctCd2.setSelectId("retrieveExpenseAcctCdInfo");
          break;
      }

      // rtnList = cfCommonPopUp(
      udc_etcAcctCd2.cfCommonPopUp(scwin.udc_etcAcctCd2_callBackFunc
      //   pSqlId                        // 01.pSelectID     XML상의 SELECT ID
      , ed_etcAcctCd2.getValue().trim() // 02.pCode         Code Element의  Value
      , "" // 03.pName         Name Element의  Value
      , check // 04.pWinCloseTF   결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 05.pDispCnt      검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // 06.pTitle        Title순서
      , null // 07.pWidth        보여주는 각 컬럼들의 폭
      , null // 08.pHidden       컬럼중에서 숨기는    컬럼 지정
      , param // 09.pWhere        SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // 10.sFeatures     POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // 11.pExistTF      POP-UP뛰을때 우도우의   사용자 정의  높이
      , null // 12.pAllSearchTF  윈도우 위치 Y좌표
      , null // 13.pWtitleSearch
      );
      break;
    default:
      break;
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //

//-------------------------------------------------------------------------
// udc_etcAcctCd1_callBackFunc (기타계정1 팝업 callBackFunc) (1)
//-------------------------------------------------------------------------
scwin.udc_etcAcctCd1_callBackFunc = function (rtnList) {
  console.log("▲ udc_etcAcctCd1_callBackFunc (기타계정1 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList == null) {
    // ed_etcAcctCd1.text      = "";
    // txt_etcAcctNm1.value    = "";
    // txt_acctClsCd1.value    = "";

    ed_etcAcctCd1.setValue("");
    ed_etcAcctNm1.setValue("");
    scwin.txt_acctClsCd1 = "";
  } else {
    //결과값이 없으면 RETURN
    if (rtnList[0] == "N/A") {
      return;
    }

    //결과값 바인드
    // ed_etcAcctCd1.text      = rtnList[0]; //계정코드
    // txt_etcAcctNm1.value    = rtnList[1]; //계정명
    // txt_acctClsCd1.value    = rtnList[2]; // 계정구분

    ed_etcAcctCd1.setValue(rtnList[0]); //계정코드
    ed_etcAcctNm1.setValue(rtnList[1]); //계정명
    scwin.txt_acctClsCd1 = rtnList[2]; // 계정구분

    // 결과값 가지고 왔을때 원)세금과공과-과징금(4203417), 판)세금과공과-과징금(5001917) 계정일 경우
    // 잡손실(6120220)계정으로 작성해 주시기 바랍니다. 라는 메시지 출력해 준다.

    if (ed_etcAcctCd1.getValue() == '4203417') {
      $c.win.alert($p, "원)세금과공과-과징금(4203417) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
      ed_etcAcctCd1.setValue("");
      ed_etcAcctNm1.setValue("");
      return;
    } else if (ed_etcAcctCd1.getValue() == '5001917') {
      $c.win.alert($p, "판)세금과공과-과징금(5001917) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
      ed_etcAcctCd1.setValue("");
      ed_etcAcctNm1.setValue("");
      return;
    }
  }
};

//-------------------------------------------------------------------------
// udc_etcAcctCd2_callBackFunc (기타계정2 팝업 callBackFunc) (2)
//-------------------------------------------------------------------------
scwin.udc_etcAcctCd2_callBackFunc = function (rtnList) {
  console.log("▲ udc_etcAcctCd2_callBackFunc (기타계정2 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList == null) {
    // ed_etcAcctCd2.text      = "";
    // txt_etcAcctNm2.value    = "";
    // txt_acctClsCd2.value    = "";

    ed_etcAcctCd2.setValue("");
    ed_etcAcctNm2.setValue("");
    scwin.txt_acctClsCd2 = "";
  } else {
    //결과값이 없으면 RETURN
    if (rtnList[0] == "N/A") {
      return;
    }

    //결과값 바인드
    // ed_etcAcctCd2.text      = rtnList[0]; //계정코드
    // txt_etcAcctNm2.value    = rtnList[1]; //계정명
    // txt_acctClsCd2.value    = rtnList[2]; // 계정구분

    ed_etcAcctCd2.setValue(rtnList[0]); //계정코드
    ed_etcAcctNm2.setValue(rtnList[1]); //계정명
    scwin.txt_acctClsCd2 = rtnList[2]; // 계정구분

    // 결과값 가지고 왔을때 원)세금과공과-과징금(4203417), 판)세금과공과-과징금(5001917) 계정일 경우
    // 잡손실(6120220)계정으로 작성해 주시기 바랍니다. 라는 메시지 출력해 준다.

    if (ed_etcAcctCd2.getValue() == '4203417') {
      $c.win.alert($p, "원)세금과공과-과징금(4203417) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
      ed_etcAcctCd2.setValue("");
      ed_etcAcctNm2.setValue("");
      return;
    } else if (ed_etcAcctCd2.getValue() == '5001917') {
      $c.win.alert($p, "판)세금과공과-과징금(5001917) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
      ed_etcAcctCd2.setValue("");
      ed_etcAcctNm2.setValue("");
      return;
    }
  }
};

//-------------------------------------------------------------------------
// 팝업체크 - 코드값 변경시 자동검색
//   flag : 팝업 플래그
//-------------------------------------------------------------------------
//   1:기타계정1,2:기타계정2
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  console.log("===== f_checkPopEd (팝업체크 - 코드값 변경시 자동검색)  srtCd[" + strCd.getValue() + "] strNm[" + strNm.getValue() + "] flag[" + flag + "]");
  if (strCd == "") {
    if (strNm.getValue().trim() != "") {
      scwin.f_openPopUp(flag, 'T');
    }
  } else {
    strNm.value = "";
    if (strCd.getValue().trim() != "") {
      scwin.f_openPopUp(flag, 'T');
    }
  }
};

// @@ ====== 저장 ============================================================================== //

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  console.log("=== f_Save (저장)");

  // if(ds_etcAmt.isUpdated==false){
  if (ds_etcAmt.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }

  // 기타금액1 입력시 계정,금액,적요 모두 입력
  if (ed_etcAmt1.getValue() != 0 || ed_etcAcctCd1.getValue() != "" || ed_etcSummary1.getValue() != "") {
    if (ed_etcAmt1.getValue() == 0) {
      await $c.win.alert($p, "기타금액1의 금액을 입력하세요");
      ed_etcAmt1.focus();
      return;
    } else if (ed_etcAcctCd1.getValue() == "") {
      await $c.win.alert($p, "기타금액1의 계정을 입력하세요");
      ed_etcAcctCd1.focus();
      return;
    } else if (ed_etcSummary1.getValue() == "") {
      await $c.win.alert($p, "기타금액1의 적요를 입력하세요");
      ed_etcSummary1.focus();
      return;
    }
  }

  // 기타금액2 입력시 계정,금액,적요 모두 입력
  if (ed_etcAmt2.getValue() != 0 || ed_etcAcctCd2.getValue() != "" || ed_etcSummary2.getValue() != "") {
    if (ed_etcAmt2.getValue() == 0) {
      await $c.win.alert($p, "기타금액2의 금액을 입력하세요");
      ed_etcAmt2.focus();
      return;
    } else if (ed_etcAcctCd2.getValue() == "") {
      await $c.win.alert($p, "기타금액2의 계정을 입력하세요");
      ed_etcAcctCd2.focus();
      return;
    } else if (ed_etcSummary2.getValue() == "") {
      await $c.win.alert($p, "기타금액2의 적요를 입력하세요");
      ed_etcSummary2.focus();
      return;
    }
  }

  /*
  // 기타금액1의 계정과 기타금액2의 계정이 같으면 안됨.
  if(ed_etcAcctCd1.text != "" && ed_etcAcctCd2.text != ""){
      if(ed_etcAcctCd1.text == ed_etcAcctCd2.text){
          alert("기타금액1의 계정과 기타금액2의 계정을 다르게 입력하세요.");
          ed_etcAcctCd2.Focus();
          return;
      }
  }
  */

  if (scwin.isSubCompany == false) {
    //자회사 여부
    // 투입불가 계정이 들어갔는지 체크.
    // for(j=1; j<=ds_acctCd.CountRow; j++){

    for (j = 0; j < ds_acctCd.getTotalRow(); j++) {
      // console.log("  ["+j+"] ds_acctCd ["+ds_acctCd.getCellData(j,"col1")+"]");

      // if(ds_etcAmt.NameValue(1,"etcAcctCd1") == ds_acctCd.NameValue(j,"col1")){
      if (ds_etcAmt.getCellData(0, "etcAcctCd1") == ds_acctCd.getCellData(j, "col1")) {
        await $c.win.alert($p, "기타금액1에 입력한 계정(" + ds_etcAmt.getCellData(0, "etcAcctCd1") + ")은 투입불가 계정입니다.");
        return;
      }
      if (ds_etcAmt.getCellData(0, "etcAcctCd2") == ds_acctCd.getCellData(j, "col1")) {
        await $c.win.alert($p, "기타금액2에 입력한 계정(" + ds_etcAmt.getCellData(0, "etcAcctCd2") + ")은 투입불가 계정입니다.");
        return;
      }
    }
  }
  if (scwin.txt_costClsCd.trim() == "01" && scwin.txt_acctClsCd1.trim() != "6" && ed_acctCd1.getValue() != "6120220") {
    // cfAlertMsg(MSG_CM_ERR_061,Array("원가부서","원가계정"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "원가부서", "원가계정"));
    ed_acctCd1.focus();
    return false;
  }
  if (scwin.txt_costClsCd == "02" && scwin.txt_acctClsCd1.trim() != "5" && ed_acctCd1.getValue() != "6120220") {
    // cfAlertMsg(MSG_CM_ERR_061,Array("판관비부서","비용계정"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "판관비부서", "비용계정"));
    ed_acctCd1.focus();
    return false;
  }
  if (scwin.txt_costClsCd == "03" && scwin.txt_acctClsCd1.trim() != "6" && scwin.txt_acctClsCd1.trim() != "5" && ed_acctCd1.getValue() != "6120220") {
    // cfAlertMsg(MSG_CM_ERR_055,Array("부서와 계정"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "부서와 계정"));
    ed_acctCd1.focus();
    return false;
  }
  if (scwin.txt_costClsCd.trim() == "01" && scwin.txt_acctClsCd2.trim() != "6" && ed_acctCd2.getValue() != "6120220") {
    // cfAlertMsg(MSG_CM_ERR_061,Array("원가부서","원가계정"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "원가부서", "원가계정"));
    ed_acctCd2.focus();
    return false;
  }
  if (scwin.txt_costClsCd == "02" && scwin.txt_acctClsCd2.trim() != "5" && ed_acctCd2.getValue() != "6120220") {
    // cfAlertMsg(MSG_CM_ERR_061,Array("판관비부서","비용계정"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "판관비부서", "비용계정"));
    ed_acctCd2.focus();
    return false;
  }
  if (scwin.txt_costClsCd == "03" && scwin.txt_acctClsCd2.trim() != "6" && scwin.txt_acctClsCd2.trim() != "5" && ed_acctCd2.getValue() != "6120220") {
    // cfAlertMsg(MSG_CM_ERR_055,Array("부서와 계정"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "부서와 계정"));
    ed_acctCd2.focus();
    return false;
  }

  // if(confirm(MSG_CM_CRM_001)==true){

  let rtn = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (rtn) {
    // 리턴 처리

    //입력된값 경비전표 화면으로 데이터 저장
    var arrRtnVal = new Array();

    // arrRtnVal.etcAmt1		= ed_etcAmt1.text;
    // arrRtnVal.etcAmt2		= ed_etcAmt2.text;
    // arrRtnVal.etcAcctCd1	= ed_etcAcctCd1.text;	     
    // arrRtnVal.etcAcctCd2	= ed_etcAcctCd2.text;  
    // arrRtnVal.etcAcctNm1	= txt_etcAcctNm1.value;   
    // arrRtnVal.etcAcctNm2	= txt_etcAcctNm2.value;     
    // arrRtnVal.etcSummary1	= txt_etcSummary1.value;      
    // arrRtnVal.etcSummary2	= txt_etcSummary2.value; 

    arrRtnVal.etcAcctCd1 = ed_etcAcctCd1.getValue();
    arrRtnVal.etcAcctNm1 = ed_etcAcctNm1.getValue();
    arrRtnVal.etcAmt1 = ed_etcAmt1.getValue();
    arrRtnVal.etcSummary1 = ed_etcSummary1.getValue();
    arrRtnVal.etcAcctCd2 = ed_etcAcctCd2.getValue();
    arrRtnVal.etcAcctNm2 = ed_etcAcctNm2.getValue();
    arrRtnVal.etcAmt2 = ed_etcAmt2.getValue();
    arrRtnVal.etcSummary2 = ed_etcSummary2.getValue();
    console.log("  --- arrRtnVal.etcAcctCd1 [" + arrRtnVal.etcAcctCd1 + "]");

    // arrRtnVal[0]    = ed_etcAcctCd1.getValue();
    // arrRtnVal[1]    = ed_etcAcctNm1.getValue();
    // arrRtnVal[2]    = ed_etcAmt1.getValue();
    // arrRtnVal[3]    = ed_etcSummary1.getValue();
    // arrRtnVal[4]    = ed_etcAcctCd2.getValue();
    // arrRtnVal[5]    = ed_etcAcctNm2.getValue();
    // arrRtnVal[6]    = ed_etcAmt2.getValue();
    // arrRtnVal[7]    = ed_etcSummary2.getValue();

    // window.returnValue = arrRtnVal;
    // window.close();

    let rt = [arrRtnVal.etcAcctCd1, arrRtnVal.etcAcctNm1, arrRtnVal.etcAmt1, arrRtnVal.etcSummary1, arrRtnVal.etcAcctCd2, arrRtnVal.etcAcctNm2, arrRtnVal.etcAmt2, arrRtnVal.etcSummary2];
    $c.win.closePopup($p, rt);
  }
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 기타계정1 focus out
//-------------------------------------------------------------------------
scwin.udc_etcAcctCd1_onblurCodeEvent = function (e) {
  /*
   language=JavaScript for="ed_etcAcctCd1" event=OnKillFocus()>
      txt_etcAcctNm1.value = "";
      f_checkPopEd(ed_etcAcctCd1,txt_etcAcctNm1,'1');
  */
  ed_etcAcctNm1.setValue("");
  scwin.f_checkPopEd(ed_etcAcctCd1, ed_etcAcctNm1, '1');
};

//-------------------------------------------------------------------------
// 기타계정2 focus out
//-------------------------------------------------------------------------
scwin.udc_etcAcctCd2_onblurCodeEvent = function (e) {
  /*
   language=JavaScript for="ed_etcAcctCd2" event=OnKillFocus()>
      txt_etcAcctNm2.value = "";
      f_checkPopEd(ed_etcAcctCd2,txt_etcAcctNm2,'2');
  */
  ed_etcAcctNm2.setValue("");
  scwin.f_checkPopEd(ed_etcAcctCd2, ed_etcAcctNm2, '2');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타금액1',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타금액1 계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveExpenseAcctCdInfopopup',style:'',codeId:'ed_etcAcctCd1',btnId:'btn_etcAcctCd1',nameId:'ed_etcAcctNm1',editTypeCode:'data',validExpCode:'기타금액1 계정:yes:format=0000000',allowCharCode:'0-9',maxlengthCode:'7',objTypeName:'data',selectID:'retrieveExpenseAcctCdInfo',id:'udc_etcAcctCd1','ev:onclickEvent':'scwin.udc_etcAcctCd1_onclickEvent',objType:'data',refDataCollection:'ds_etcAmt',code:'etcAcctCd1',name:'etcAcctNm1','ev:onblurCodeEvent':'scwin.udc_etcAcctCd1_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타금액1 금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control col5 tar',id:'ed_etcAmt1',placeholder:'',style:'',objType:'data',maxlength:'13',mandatory:'true',dataType:'number',ref:'data:ds_etcAmt.etcAmt1',displayFormat:'#,###',allowChar:'0-9',validateOnInput:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타금액1 적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control',id:'ed_etcSummary1',placeholder:'',style:'',maxlength:'100',objType:'data',mandatory:'true',maxByteLength:'100',ref:'data:ds_etcAmt.etcSummary1'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타금액2',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타금액2 계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveExpenseAcctCdInfopopup',style:'',codeId:'ed_etcAcctCd2',nameId:'ed_etcAcctNm2',btnId:'btn_etcAcctCd2',objTypeCode:'data',validExpCode:'기타금액2 계정코드:yes:format=0000000',objTypeName:'data',allowCharCode:'0-9',maxlengthCode:'7',mandatoryCode:'true',selectID:'retrieveExpenseAcctCdInfo',id:'udc_etcAcctCd2','ev:onclickEvent':'scwin.udc_etcAcctCd2_onclickEvent',objType:'data',code:'etcAcctCd2',name:'etcAcctNm2',refDataCollection:'ds_etcAmt','ev:onblurCodeEvent':'scwin.udc_etcAcctCd2_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타금액2 금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control col5 tar',id:'ed_etcAmt2',placeholder:'',style:'',objType:'data',mandatory:'true',maxlength:'13',dataType:'number',ref:'data:ds_etcAmt.etcAmt2',displayFormat:'#,###',allowChar:'0-9',validateOnInput:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타금액2 적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control',id:'ed_etcSummary2',placeholder:'',style:'',maxlength:'100',objType:'data',maxByteLength:'100',mandatory:'true',ref:'data:ds_etcAmt.etcSummary2'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'btn_save',style:'','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'w2:button',A:{class:'btn',id:'',label:'저장',style:''}}]}]}]}]}]})