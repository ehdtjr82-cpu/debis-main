/*amd /ui/il/acc/acetc/ac_306_01_03b.xml 37516 82bf5e3a305f6d2cd70e3e13c52e63998eb22e3dc6f8f9de48c77f8700404da7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_detailCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_crdtLimitRemainAmtMgnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'법인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crdtLimit',name:'월여신한도',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cumLimit',name:'누계한도',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cumRemain',name:'누계잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액(Invoice)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stlAmt',name:'수금금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unconfirmedAmt',name:'금액(Freight)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ovrAmt',name:'수금일초과금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pldgAmt',name:'담보금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crdtLimitRemain',name:'여신한도잔액',dataType:'number'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_detail',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bizdivNm',name:'사업명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClsCd',name:'계약구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClsCd',name:'정산구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmNo',name:'정산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsvNo',name:'예약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ovrAmt',name:'수금액초과액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramt',name:'당월채권금액',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCrdtMgnt',action:'/il.acc.acetc.RetrieveIlCreditLimitUnconfirmedCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_crdtLimitRemainAmtMgnt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_crdtLimitRemainAmtMgnt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCrdtMgnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCrdtMgntApply',action:'/ac.fm.acctrecvmgnt.crdtmgnt.RetrieveCreditLimitRemainAmtDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_detailCondition","key":"IN_DS1"},{"id":"ds_detail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_detail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCrdtMgntApply_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_reSetCredit',action:'/ac.fm.acctrecvmgnt.crdtmgnt.ResetCreditRemainCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_condition","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_reSetCredit_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 국제여신한도 잔액현황(미확정포함)
 * 메뉴경로 : 국제물류/Accounting/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/il/acc/acetc/ac_306_01_03b.jsp
 * 작 성 자 : 이진우
 * 작 업 일 : 2026-02-11
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항

 * 수정이력 :
 *    - 2026-02-11      이진우    최초작성
 */

//전역변수
scwin.g_sCurrDate = WebSquare.date.getCurrentServerDate();
scwin.crn = "";
scwin.busiNm = "";
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: "FM086",
    compID: "gr_detail:ctrtClsCd"
  }, {
    grpCd: "FM087",
    compID: "gr_detail:adjmClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  ed_srchadptDt.setValue(scwin.g_sCurrDate);
  dma_detailCondition.set("adptDt", scwin.g_sCurrDate);
  if (scwin.crn != "" && scwin.crn.length > 0) {
    ed_crn.setValue(scwin.crn);
    ed_crnNm.setValue(scwin.busiNm);
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sFlag) {
  try {
    let code = txtCode.getValue();
    let name = txtName.getValue();
    switch (select_code) {
      // 관리부서 PopUp 호출
      case '1':
        //rtnList = ilCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null); // 거래처
        udc_mgntAcctDeptCd.setSelectId('retrieveAcctDeptCdInfo');
        udc_mgntAcctDeptCd.ilCommonPopUp(scwin.udc_mgntAcctDeptCd_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        );
        break;
      // 여신대상사업자번호 PopUp 호출
      case '2':
        //rtnList = ilCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null,null,"F",null,null); // 여신대상사업자번호
        udc_crn.setSelectId('retrieveCreditCrnInfo');
        udc_crn.ilCommonPopUp(scwin.udc_crn_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null, 'T' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 여신한도조회 설정PopUp 호출
      case '3':
        //rtnList = ilCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null,null,"F",null,null); // 여신대상사업자번호+신용정보등록내역포함
        udc_crn.setSelectId('retrieveCreditLimitTargetCrnInfo');
        udc_crn.ilCommonPopUp(scwin.udc_crn_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null, 'F' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 귀속부서 PopUp 호출
      case '4':
        //rtnList = ilCommonPopUp('retrieveAcctDeptCdInfo9',ed_mgntAcctDeptCd.text.trim(),txt_mgntAcctDeptNm.value,sFlag,null,null,null,null,null,",,,,,,1","450","500",null,null); // 귀속부서
        udc_mgntAcctDeptCd.setSelectId('retrieveAcctDeptCdInfo'); //retrieveAcctDeptCdInfo9 없음
        udc_mgntAcctDeptCd.ilCommonPopUp(scwin.udc_mgntAcctDeptCd_callBackFunc, ed_mgntAcctDeptCd.getValue(), txt_mgntAcctDeptNm.getValue(), sFlag, null, null, null, null, null, ",,,,,,1", "450", "500", null, null); // 귀속부서
        break;
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_crn_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_crn.setValue(rtnList[0]); // 코드
    ed_crnNm.setValue(rtnList[1]); // 코드명
    ed_crn.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_crn.setValue(""); // 코드
    ed_crnNm.setValue(""); // 코드명
    ed_crn.options.hidVal = ""; // 코드
  }
};
scwin.udc_mgntAcctDeptCd_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_mgntAcctDeptCd.setValue(rtnList[0]); // 코드
    txt_mgntAcctDeptNm.setValue(rtnList[1]); // 코드명
    ed_mgntAcctDeptCd.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_mgntAcctDeptCd.setValue(""); // 코드
    txt_mgntAcctDeptNm.setValue(""); // 코드명
    ed_mgntAcctDeptCd.options.hidVal = ""; // 코드
  }
};

//-------------------------------------------------------------------------
// 귀속부서팝업
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (select_code, pCode, pName, Row, pClose) {
  // 선언부
  // let rtnList = null;  // 공통POP-UP -> 요청화면 
  // let RowPos = 0;
  // let addCol = new Array();
  // addCol[0] = "confGrd";
  // addCol[1] = "liablRt";
  // addCol[2] = "sellAmtIncrRt";
  // addCol[3] = "pldgAmt";

  let code = ds_crdtLimitRemainAmtMgnt.getCellData(Row, pCode);
  if (code == null || code == "") code = "";
  switch (select_code) {
    // 관리부서 PopUp 호출
    // case '1' :
    //     sCmdName = "retrieveAcctDeptCdInfo"
    //     rtnList = udc_acctDeptCdInfo.ilCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, "","",pClose,null,null,null,null,null,null,null,null,null); // 부서
    //     break;
    // 여신대상사업자번호 PopUp 호출
    // case '2' :
    //     sCmdName = "retrieveCreditCrnInfo"
    //     rtnList = udc_creditCrnInfo.ilCommonPopUp(scwin.udc_creditCrnInfo_callBackFunc, "","",pClose,null,null,null,null,null,null,null,null,null,null,null,null,null); // 여신대상사업자번호
    //     break;
    // 여신한도조회 설정PopUp 호출
    case '3':
      sCmdName = "retrieveCreditLimitTargetCrnInfo";
      udc_crn.ilCommonPopUp(scwin.udc_crn_callBackFunc, "", "", pClose, null, null, null, null, null, null, null, null, null, null, null, null, null); // 여신대상사업자번호
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ed_srchadptDt.getValue() == "") {
    $c.gus.cfAlertMsg($p, "적용일자은(는) 필수 입력 항목입니다.");
    ed_srchadptDt.focus();
    return;
  }
  if ($c.gus.cfValidate($p, [tbl_search])) {
    let temp = dma_condition.get("adptDt");
    dma_condition.set("adptDt", temp.trim());
    //dma_condition.UseChangeInfo = false;
    $c.sbm.execute($p, sbm_retrieveCrdtMgnt);
  }
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function (e) {
  if (ds_crdtLimitRemainAmtMgnt.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let fileName = '여신한도잔액';
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    //bodyWordwrap 줄바꿈여부
    await $c.data.downloadGridViewExcel($p, gr_crdtLimitRemainAmtMgnt, {
      fileName: fileName + ".xlsx",
      sheetName: fileName,
      "bodyWordwrap": "true",
      "type": "4+8+16"
    });
  }
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel1 = async function (e) {
  if (ds_detail.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let fileName = '여신한도잔액';
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_detail, {
      fileName: fileName + ".xlsx",
      sheetName: fileName,
      "bodyWordwrap": "true",
      "type": "4+8+16"
    });
  }
};

//-------------------------------------------------------------------------
// 조회(거래내역)
//-------------------------------------------------------------------------
scwin.f_TxnContents = function (row) {
  dma_detailCondition.set("crn", ds_crdtLimitRemainAmtMgnt.getCellData(row, "crn"));
  dma_detailCondition.set("adptDt", ds_crdtLimitRemainAmtMgnt.getCellData(row, "adptDt"));
  //dma_detailCondition.set("bizdivCd", ds_crdtLimitRemainAmtMgnt.getCellData(row, "bizdivCd"));

  $c.sbm.execute($p, sbm_retrieveCrdtMgntApply);
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcelDetail = async function (e) {
  if (ds_detail.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let fileName = '여신한도잔액';
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_detail, {
      fileName: fileName + ".xlsx",
      sheetName: fileName
    });
  }
};

//-------------------------------------------------------------------------
// 여신한도잔액 재설정
//-------------------------------------------------------------------------
scwin.f_ReSetCredit = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_crn]);
  if (!ret) return;
  let busiNm = ed_crnNm.getValue(); //ds_crdtLimitRemainAmtMgnt.nameValue(1,"busiNm");
  let crn = ed_crn.getValue(); //ds_crdtLimitRemainAmtMgnt.nameValue(1,"crn");
  let msg = busiNm + "에 대해 여신한도잔액 재설정하시겠습니까?";
  if (ds_crdtLimitRemainAmtMgnt.getRowCount() != 0) {
    if ((await $c.win.confirm($p, msg)) == true) {
      // 		  	  let temp = dma_condition.nameValue(1,"adptDt");
      // 	          dma_condition.nameValue(1,"adptDt")=temp.trim();

      dma_condition.set("crn", crn.trim());
      // dma_condition.setUseChangeInfo(false);
      $c.sbm.execute($p, sbm_reSetCredit);
    }
  } else {
    await $c.win.alert($p, "조회된 내역이 없습니다. 여신한도 조회 후 재설정 진행하시길 바랍니다.");
    return;
  }
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
scwin.sbm_reSetCredit_submitdone = async function (e) {
  await $c.win.alert($p, "여신한도 잔액 재설정이 완료되었습니다.");
  scwin.f_Retrieve();
};
scwin.sbm_retrieveCrdtMgnt_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  scwin.rowOld = -1;
  let rowCnt = ds_crdtLimitRemainAmtMgnt.getRowCount();
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
  } else {
    if (rowCnt == 0) {
      await $c.win.alert($p, "조회된 데이터가 없습니다");
    } else {
      totalRows1.setValue(rowCnt);
      //asis와 동일하게 수정(데이타 없을때 메세지 오픈 안되게 하기 위해)
      //scwin.f_TxnContents(0);
      for (let i = 0; i < rowCnt; i++) {
        let data = ds_crdtLimitRemainAmtMgnt.getCellData(i, "adptDt");
        if (data.length > 10) {
          ds_crdtLimitRemainAmtMgnt.setCellData(i, "adptDt", data.substring(0, 10).replace(/-/g, ""));
        }
      }
    }
  }
};
scwin.udc_crn_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_crn, ed_crnNm, 'F');
};
scwin.udc_crn_onblurCodeEvent = function (e) {
  if (ed_crn.getValue() != "") {
    scwin.f_openPopUp('2', ed_crn, ed_crnNm, 'T');
  } else {
    ed_crnNm.setValue("");
  }
};
scwin.gr_crdtLimitRemainAmtMgnt_ontextimageclick = function (rowIndex, columnIndex) {
  if (rowIndex == 1) {
    scwin.f_openCommonPopUp('3', "crn", "busiNm", row, 'F');
  }
};
scwin.gr_crdtLimitRemainAmtMgnt_oncellclick = function (rowIndex, columnIndex, columnId) {
  const currentStatus = ds_crdtLimitRemainAmtMgnt.getRowStatus(rowIndex);
  if (scwin.rowOld !== rowIndex) {
    if (currentStatus !== "C") {
      scwin.rowOld = rowIndex;
      scwin.f_TxnContents(rowIndex);
    }
  }
};
scwin.sbm_retrieveCrdtMgntApply_submitdone = async function (e) {
  let rowCnt = ds_detail.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다");
    totalRows2.setValue(0);
  } else {
    totalRows2.setValue(rowCnt);
  }
};
scwin.sbm_getFinalCloseYM_submitdone = function (e) {
  if (ds_finalCloseYM.getRowCount() > 0) {
    ica_srchadptDt.setValue(ds_finalCloseYM.getCellData(0, 'col1'));
  }
};
scwin.udc_mgntAcctDeptCd_onblurCodeEvent = function (e) {
  if (ed_mgntAcctDeptCd.getValue() != "") {
    // scwin.f_openPopUp('4',ed_mgntAcctDeptCd,txt_mgntAcctDeptNm,'T');
    scwin.f_openPopUp('1', ed_mgntAcctDeptCd, txt_mgntAcctDeptNm, 'T');
  } else {
    txt_mgntAcctDeptNm.setValue("");
  }
};
scwin.udc_mgntAcctDeptCd_onclickEvent = function (e) {
  //scwin.f_openPopUp('4', ed_mgntAcctDeptCd, txt_mgntAcctDeptNm, 'F');
  scwin.f_openPopUp('1', ed_mgntAcctDeptCd, txt_mgntAcctDeptNm, 'F');
};
scwin.udc_mgntAcctDeptCd_onviewchangeNameEvent = function (info) {
  //scwin.f_openPopUp('4',ed_mgntAcctDeptCd,txt_mgntAcctDeptNm,'T');
  //asis호출없어 막음
  //scwin.f_openPopUp('1',ed_mgntAcctDeptCd,txt_mgntAcctDeptNm,'T');
};
scwin.btn_clear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
};
scwin.btn_trigger18_onclick = function (e) {
  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'여신한도 잔액 현황(미확정포함) ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_srchadptDt',style:'',ref:'data:dma_condition.adptDt',title:'적용일자',displayFormat:'yyyy/MM/dd',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',selectID:'',codeId:'ed_crn',validTitle:'사업자번호',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'ed_crnNm',style:'width:%; height:px; ',code:'crn',refDataCollection:'dma_condition',btnId:'btn_crd',id:'udc_crn',allowCharCode:'0-9',maxlengthCode:'13',objTypeCode:'data',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent','ev:onclickEvent':'scwin.udc_crn_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',selectID:'',codeId:'ed_mgntAcctDeptCd',validTitle:'귀속부서',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'txt_mgntAcctDeptNm',style:'width:%; height:px; ',code:'mgntAcctDeptCd',refDataCollection:'dma_condition',btnId:'btn_mgntAcctDeptCd',id:'udc_mgntAcctDeptCd',allowCharCode:'0-9',maxlengthCode:'5','ev:onblurCodeEvent':'scwin.udc_mgntAcctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_mgntAcctDeptCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_mgntAcctDeptCd_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger18',style:'',type:'button','ev:onclick':'scwin.btn_trigger18_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_crdtLimitRemainAmtMgnt',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{dataList:'data:ds_crdtLimitRemainAmtMgnt',style:'',autoFit:'none',id:'gr_crdtLimitRemainAmtMgnt',class:'wq_gvw',visibleRowNum:'2',visibleRowNumFix:'true',readOnly:'true',scrollByColumn:'true',scrollByColumnAdaptive:'true',focusMode:'cell','ev:oncellclick':'scwin.gr_crdtLimitRemainAmtMgnt_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'적용일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column15',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'column13',value:'법인명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column11',value:'월여신한도',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column9',value:'누계한도',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column7',value:'누계잔액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column3',value:'금액(Invoice)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column5',value:'금액(Freight)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column27',value:'수금일초과금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column30',value:'담보금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column33',value:'여신한도잔액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'adptDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',maxLength:'10'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'busiNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'crdtLimit',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'cumLimit',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'cumRemain',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'130',inputType:'text',style:'',id:'amt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'130',inputType:'text',style:'',id:'unconfirmedAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'130',inputType:'text',style:'',id:'ovrAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'pldgAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'130',inputType:'text',style:'',id:'crdtLimitRemain',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'130',inputType:'text',style:'',id:'column20',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'130',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'130',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'column32',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'130',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'(단위 : 원)',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_detail',gridDownFn:'scwin.f_GridToExcel1',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{dataList:'data:ds_detail',style:'',autoFit:'none',id:'gr_detail',class:'wq_gvw',visibleRowNum:'8',visibleRowNumFix:'true',readOnly:'true',focusMode:'cell'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption6',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'191',inputType:'text',style:'',id:'column35',value:'사업명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'적용일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'183',inputType:'text',style:'',id:'column29',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'계약구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'계약번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column23',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'정산구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'정산번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'예약번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column55',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column52',value:'수금액초과액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column46',value:'당월채권금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'191',inputType:'text',style:'',id:'bizdivNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'adptDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'183',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ctrtClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ctrtNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'adjmClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'adjmNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rsvNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',style:'',id:'amt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'130',inputType:'text',style:'',id:'ovrAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'130',inputType:'text',style:'',id:'ramt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'191',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'183',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',dataType:'number',expression:'SUM("amt")',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'130',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',displayFormat:'#,##0',expression:'SUM("ovrAmt")',dataType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'130',inputType:'expression',style:'',id:'column48',value:'',displayMode:'label',displayFormat:'#,##0',expression:'SUM("ramt")',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'info-list blk',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'<span class="bold">이 화면은 국제 전용 여신한도 잔액 현황 조회 화면입니다.</span>',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호를 입력하지 않았을 때, 기본적으로 국제 귀속 전체 대상 거래처의 값을 조회합니다.',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대상거래처기준: 직전 2개월간 국제사업부 내 매출거래가 발생한 거래처 대상 적용일자 기준의 여신한도 현황 조회',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(부가세자료관리 > 계산서일자 직전 2개월~현재까지, 작성부서 00839 & 01185 & 01203 으로 \'매출\' 부가세내역 조회 시, 전표가 존재하는 사업자)',style:'',tagname:'p'}}]}]}]}]}]})