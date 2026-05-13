/*amd /ui/ac/fm/paymgnt/corcardadjm/fm_301_05_01b.xml 44617 e9b49a8cb34ff9b00371a54f8be34acff34a634975758662596623e2a5daab52 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'useDtSt',name:'사용일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useDtEnd',name:'사용일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cardAdjmPl',name:'카드정산처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cardAdjmPlNm',name:'카드정산처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stmtDd',name:'결제일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postYn',name:'가결구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payCls',name:'정리구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cardNo',name:'카드번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_corCardConform',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'카드사청구금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adjuAmt',name:'입금/환불금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookKndNm',name:'통장종류명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_corcard',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cardNo',name:'카드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNm',name:'카드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useEmpNo',name:'사용자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useEmpNm',name:'사용자사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useDt',name:'사용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userAcctDeptCd',name:'사용자귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userAcctDeptNm',name:'사용자귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'지급전표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payPostDt',name:'지급회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtDt',name:'결제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtAcctDeptCd',name:'결제귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardIssueClntNo',name:'카드발급거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'number'}},{T:1,N:'w2:column',A:{id:'setlClsCd',name:'정리구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkYn',name:'체크여부',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_corcard","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_corcard","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_corcard',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_corcard","key":"IN_DS1"},{"action":"modified","id":"ds_corCardConform","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_corcard_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_corcardCancel',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_corcard","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_corcardCancel_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_settle',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_corcard","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_settle_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_settleCancel',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_corcard","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_settleCancel_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onloadYn = "Y";
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  try {
    //공통코드 적용
    const codeOptions = [{
      grpCd: "FM078",
      compID: "lc_payCls,gr_corcard:setlClsCd"
    }];
    $c.data.setCommonCode($p, codeOptions);
  } catch (e) {
    console.log("onpageload :" + e);
  }
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  try {
    lc_payCls.addItem('-1', '전체', 0);
    $c.gus.cfDisableObjects($p, [ed_txt_bankbookNm, ed_txt_bankAcntNo, ed_txt_bankbookKndNm]);
    $c.gus.cfDisableBtn($p, [btn_Settle]); //$c.gus.cfDisableBtn([bSave]);
    // 미정리(처리시 온로드 후 문제가 발생하여 임의처리함)
    btn_Post.show("");
    btn_PostCancel.hide();
    btn_Settle.show("");
    btn_SettleCancel.hide();
    scwin.f_Setting();
  } catch (e) {
    console.log("ondataload :" + e);
  }
};

//-------------------------------------------------------------------------
// 재조회
//-------------------------------------------------------------------------
scwin.f_SearchClear = function () {
  try {
    $c.gus.cfInitObjects($p, searchTable);
    scwin.onloadYn = "N";
    scwin.f_Setting();
  } catch (e) {
    console.log("f_SearchClear :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회조건 셋팅
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  try {
    lc_postYn.setSelectedIndex(1);
    lc_payCls.setValue("1"); //lc_payCls.setSelectedIndex(1);

    ed_useDtSt.setValue($c.date.getServerDateTime($p, "yyyyMM") + "01");
    ed_useDtEnd.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
    ed_useDtSt.focus();
  } catch (e) {
    console.log("f_Setting :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    let ret = await $c.gus.cfValidate($p, [ed_useDtSt, ed_useDtEnd, ed_cardAdjmPl]);
    if (!ret) {
      return false;
    }
    if (!$c.gus.cfIsAfterDate($p, ed_useDtSt.getValue().trim(), ed_useDtEnd.getValue().trim())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      ed_useDtSt.focus();
      return false;
      ;
    }
    ds_corcard.removeAll(); //조회정보 초기화
    sbm_search.action = "/ac.fm.paymgnt.corcardadjm.RetrieveCorporationCardContentsCMD.do";
    $c.sbm.execute($p, sbm_search);
  } catch (e) {
    console.log("f_Retrieve : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_corcard.getRowCount()));
    if (ds_corcard.getRowCount() == 0) {
      $c.win.alert($p, MSG_CM_WRN_002);
    } else {
      $c.gus.cfGoPrevPosition($p, gr_corcard, 0); //첫번째 row 포지션이동
    }
    ds_corCardConform.removeAll();
    scwin.f_ds_corCardConformClear();
  } catch (e) {
    console.log("sbm_search_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    const options = {
      fileName: "법인카드정산조회.xlsx",
      //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      sheetName: "법인카드정산"
    };
    const infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_corcard, options, infoArr);
  }
};
scwin.udc_Bankbook_onblurCodeEvent = function (e) {
  scwin.f_checkPopIn(ed_txt_bankbookNo, ed_txt_bankAcntNo, ed_txt_bankbookKndNm, ed_txt_bankbookNm, '3');
};
scwin.udc_Bankbook_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'F');
};
scwin.udc_cardAdjmPl_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_cardAdjmPl, ed_txt_cardAdjmPlNm, '1');
};
scwin.udc_cardAdjmPl_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  try {
    if (strCd.getValue().trim() == strCd.hidVal) return;
    strNm.setValue("");
    strCd.hidVal = "";
    if (strCd.getValue().trim() != "") scwin.f_openPopUp(flag, 'T');
  } catch (e) {
    console.log("f_checkPopEd : " + e);
  }
};
scwin.f_checkPopIn = function (strCd, strNm, strNm1, strNm2, flag) {
  try {
    if (strCd.getValue().trim() == strCd.hidVal) return;
    strNm.setValue("");
    strNm1.setValue("");
    strNm2.setValue("");
    if (strCd.getValue().trim() != "") scwin.f_openPopUp(flag, 'T');
  } catch (e) {
    console.log("f_checkPopIn : " + e);
  }
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (flag, check) {
  try {
    let param = "";
    switch (flag) {
      // 카드정산조회 
      case '1':
        //rtnList = cfCommonPopUp('retrieveCardClntInfo',ed_cardAdjmPl.text.trim(),txt_cardAdjmPlNm.value,check,null,null,null,null,null,null,null,null,null);
        udc_cardAdjmPl.setSelectId('retrieveCardClntInfo');
        udc_cardAdjmPl.cfCommonPopUp(scwin.udc_cardAdjmPl_callBackFunc // 콜백 함수
        , ed_cardAdjmPl.getValue().trim() // 화면에서의 ??? Code Element의 Value
        , ed_txt_cardAdjmPlNm.getValue() // 화면에서의 ??? Name Element의 Value
        , check // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 통장 
      case '3':
        param = ",02";
        //rtnList = cfCommonPopUp('retrieveBankBookCdInfo',txt_bankbookNo.value,'',check,null,null,null,null,param,null,null,null,null); // 통장명
        udc_Bankbook.setSelectId('retrieveBankBookCdInfo');
        udc_Bankbook.cfCommonPopUp(scwin.udc_Bankbook_callBackFunc // 콜백 함수
        , ed_txt_bankbookNo.getValue() // 화면에서의 ??? Code Element의 Value
        , '' // 화면에서의 ??? Name Element의 Value
        , check // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      default:
        break;
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 카드정산처조회 콜백
//-------------------------------------------------------------------------
scwin.udc_cardAdjmPl_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        return;
      }
      ed_cardAdjmPl.setValue(rtnList[0]); // 코드
      ed_txt_cardAdjmPlNm.setValue(rtnList[1]); // 명
      ed_cardAdjmPl.hidVal = rtnList[0]; // 히든값
    } else {
      ed_cardAdjmPl.setValue("");
      ed_txt_cardAdjmPlNm.setValue("");
      ed_cardAdjmPl.hidVal = "";
    }
  } catch (e) {
    console.log("udc_cardAdjmPl_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 통장조회 콜백
//-------------------------------------------------------------------------
scwin.udc_Bankbook_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        return;
      }
      ed_txt_bankbookNo.setValue(rtnList[0]);
      ed_txt_bankAcntNo.setValue(rtnList[4]);
      ed_txt_bankbookKndNm.setValue(rtnList[8]);
      ed_txt_bankbookNm.setValue(rtnList[2]);
      ed_txt_bankbookNm.hidVal = rtnList[0];
    } else {
      ed_txt_bankbookNo.setValue("");
      ed_txt_bankAcntNo.setValue("");
      ed_txt_bankbookKndNm.setValue("");
      ed_txt_bankbookNm.setValue("");
      ed_txt_bankbookNm.hidVal = "";
    }
  } catch (e) {
    console.log("udc_Bankbook_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 헤더클릭
//-------------------------------------------------------------------------
scwin.gr_corcard_onheaderclick = function (headerId) {
  if (headerId == "checkYn") {
    scwin.f_checkAmt();
  }
};

//-------------------------------------------------------------------------
// 셀클릭
//-------------------------------------------------------------------------
scwin.gr_corcard_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "paySlipNo" && rowIndex >= 0) {
    $c.gus.cfShowSlipInfo($p, ds_corcard.getCellData(rowIndex, "paySlipNo"));
  } else if (columnId == "slipNo" && rowIndex >= 0) {
    $c.gus.cfShowSlipInfo($p, ds_corcard.getCellData(rowIndex, "slipNo"));
  } else if (columnId == "checkYn") {
    scwin.f_checkAmt();
  }
};

//-------------------------------------------------------------------------
// 클릭했을때 금액
//-------------------------------------------------------------------------
scwin.f_checkAmt = function () {
  try {
    let vSum = 0;
    for (i = 0; i < ds_corcard.getRowCount(); i++) {
      if (ds_corcard.getRowStatus(i) == "U") {
        vSum = vSum + Number(ds_corcard.getCellData(i, "amt"));
      }
    }
    gr_corcard.setFooterData("amtSum", vSum);
  } catch (e) {
    console.log("f_checkAmt : " + e);
  }
};

//-------------------------------------------------------------------------
// 정리구분 변경시
//-------------------------------------------------------------------------
scwin.f_PayCls = function () {
  try {
    // 미정리
    if (lc_payCls.getValue() == "1") {
      btn_Post.show("");
      btn_PostCancel.hide();
      btn_Settle.show("");
      btn_SettleCancel.hide();

      // 지급
    } else if (lc_payCls.getValue() == "2") {
      btn_Post.hide();
      btn_PostCancel.show("");
      btn_Settle.hide();
      btn_SettleCancel.hide();

      // 정리
    } else if (lc_payCls.getValue() == "3") {
      btn_Post.hide();
      btn_PostCancel.hide();
      btn_Settle.hide();
      btn_SettleCancel.show("");
    } else {
      btn_Post.hide();
      btn_PostCancel.hide();
      btn_Settle.hide();
      btn_SettleCancel.hide();
    }
  } catch (e) {
    console.log("f_PayCls : " + e);
  }
};

//-------------------------------------------------------------------------
// 확정
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  try {
    let ret = await $c.gus.cfValidate($p, [ed_slipDt, ed_bilgAmt]);
    if (!ret) {
      return false;
    }
    //notAllowed=0 처리 추가
    if (ed_bilgAmt.getValue() == "0") {
      //카드사청구금액
      await $c.gus.cfAlertMsg($p, "카드사청구금액은(는) 다음 문자가 올 수 없습니다. 0");
      ed_bilgAmt.focus();
      return false;
    }
    let ret2 = await $c.gus.cfValidate($p, [ed_txt_bankbookNo]);
    if (!ret2) {
      return false;
    }
    if (ds_corcard.getModifiedIndex().length == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["데이타"]);
      return false;
    }
    let tempAmt = 0;
    for (i = 0; i < ds_corcard.getRowCount(); i++) {
      if (ds_corcard.getRowStatus(i) == "U") {
        // 미정리 상태일때만 확정처리를 한다.
        if (ds_corcard.getCellData(i, "setlClsCd") == "2") {
          $c.gus.cfAlertMsg($p, "이미 확정처리 하셨습니다.");
          return false;
        }
        if (ds_corcard.getCellData(i, "setlClsCd") == "3") {
          $c.gus.cfAlertMsg($p, "이미 정리처리 하셨습니다.");
          return false;
        }
        // 회계처리가 안되었을경우
        if (ds_corcard.getCellData(i, "postDt") == "") {
          $c.gus.cfAlertMsg($p, "회계처리가 가결되어서 확정하실수 없습니다.");
          return false;
        }
        tempAmt = tempAmt + Number(ds_corcard.getCellData(i, "amt"));
      }
    } //for end
    // 정산하는 금액보다 청구금액이 크거나 같아야한다.
    if (ed_bilgAmt.getValue().trim() < tempAmt) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_048, Array("정산금액[" + tempAmt + "]", "카드사청구금액[" + ed_bilgAmt.getValue().trim() + "]"));
      return false;
    }
    if (await $c.win.confirm($p, "확정하시겠습니까?")) {
      ds_corCardConform.removeAll();
      ds_corCardConform.insertRow(0);
      ds_corCardConform.setCellData(0, "adjuAmt", tempAmt);

      //ASIS 데이터 바인드 bnd_ctrtList
      ds_corCardConform.setCellData(0, "slipDt", ed_slipDt.getValue());
      ds_corCardConform.setCellData(0, "bilgAmt", ed_bilgAmt.getValue());
      ds_corCardConform.setCellData(0, "bankbookNo", ed_txt_bankbookNo.getValue());
      ds_corCardConform.setCellData(0, "bankbookNm", ed_txt_bankbookNm.getValue());
      ds_corCardConform.setCellData(0, "bankAcntNo", ed_txt_bankAcntNo.getValue());
      ds_corCardConform.setCellData(0, "bankbookKndNm", ed_txt_bankbookKndNm.getValue());
      sbm_corcard.action = "/ac.fm.paymgnt.corcardadjm.ProcessCorporationCardAdjustmentCMD.do";
      $c.sbm.execute($p, sbm_corcard);
    }
  } catch (e) {
    console.log("f_Save : " + e);
  }
};

//-------------------------------------------------------------------------
// 확정콜백
//-------------------------------------------------------------------------
scwin.sbm_corcard_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.gus.cfAlertMsg($p, "성공적으로 처리되었습니다");
  ds_corcard.removeAll();
  ds_corCardConform.removeAll();
  scwin.f_ds_corCardConformClear();
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 정리
//-------------------------------------------------------------------------
scwin.f_Settle = async function () {
  try {
    if (ds_corcard.getModifiedIndex().length == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["데이타"]);
      return false;
    }
    for (i = 0; i < ds_corcard.getRowCount(); i++) {
      if (ds_corcard.getRowStatus(i) == "U") {
        // 미정리 상태일때만 확정처리를 한다.
        if (ds_corcard.getCellData(i, "setlClsCd") == "2") {
          $c.gus.cfAlertMsg($p, "이미 확정처리 하셨습니다.");
          return false;
        }
        if (ds_corcard.getCellData(i, "setlClsCd") == "3") {
          $c.gus.cfAlertMsg($p, "이미 정리처리 하셨습니다.");
          return false;
        }
        // 회계처리가 안되었을경우
        if (ds_corcard.getCellData(i, "postDt") == "") {
          $c.gus.cfAlertMsg($p, "회계처리가 가결되어서 정리하실수 없습니다.");
          return false;
        }
      }
    } //for end

    if (await $c.win.confirm($p, "정리하시겠습니까?")) {
      sbm_settle.action = "/ac.fm.paymgnt.corcardadjm.ProcessCorporationCardSettlementCMD.do";
      $c.sbm.execute($p, sbm_settle);
    }
  } catch (e) {
    console.log("f_Settle : " + e);
  }
};

//-------------------------------------------------------------------------
// 정리콜백
//-------------------------------------------------------------------------
scwin.sbm_settle_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.gus.cfAlertMsg($p, "성공적으로 처리되었습니다");
  ds_corcard.removeAll();
  ds_corCardConform.removeAll();
  scwin.f_ds_corCardConformClear();
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 확정 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = async function () {
  try {
    if (ds_corcard.getModifiedIndex().length == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["데이타"]);
      return false;
    }
    for (i = 0; i < ds_corcard.getRowCount(); i++) {
      if (ds_corcard.getRowStatus(i) == "U") {
        // 미정리 상태일때만 확정처리를 한다.
        if (ds_corcard.getCellData(i, "setlClsCd") == "1" || ds_corcard.getCellData(i, "setlClsCd") == "3") {
          $c.gus.cfAlertMsg($p, "미정리나 정리된건은 확정취소할 수 없습니다.");
          return false;
        }

        // 회계처리가 안되었을경우
        if (ds_corcard.getCellData(i, "postDt") == "") {
          $c.gus.cfAlertMsg($p, "회계처리가 가결되어서 취소 하실수 없습니다.");
          return false;
        }
      }
    } //for end

    if (await $c.win.confirm($p, "취소하시겠습니까?")) {
      sbm_corcardCancel.action = "/ac.fm.paymgnt.corcardadjm.ProcessCorporationCardAdjustmentCancelCMD.do";
      $c.sbm.execute($p, sbm_corcardCancel);
    }
  } catch (e) {
    console.log("f_Cancel : " + e);
  }
};

//-------------------------------------------------------------------------
// 확정 취소콜백
//-------------------------------------------------------------------------
scwin.sbm_corcardCancel_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.gus.cfAlertMsg($p, "성공적으로 처리되었습니다");
  ds_corcard.removeAll();
  ds_corCardConform.removeAll();
  scwin.f_ds_corCardConformClear();
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 정리 취소
//-------------------------------------------------------------------------
scwin.f_SettleCancel = async function () {
  try {
    if (ds_corcard.getModifiedIndex().length == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["데이타"]);
      return false;
    }
    for (i = 0; i < ds_corcard.getRowCount(); i++) {
      if (ds_corcard.getRowStatus(i) == "U") {
        // 미정리 상태일때만 확정처리를 한다.
        if (ds_corcard.getCellData(i, "setlClsCd") == "1" || ds_corcard.getCellData(i, "setlClsCd") == "2") {
          $c.gus.cfAlertMsg($p, "미정리나 확정된건은 정리취소할 수 없습니다.");
          return false;
        }

        // 회계처리가 안되었을경우
        if (ds_corcard.getCellData(i, "postDt") == "") {
          $c.gus.cfAlertMsg($p, "회계처리가 가결되어서 취소 하실수 없습니다.");
          return false;
        }

        // 회계처리가 안되었을경우
        if (ds_corcard.getCellData(i, "payPostDt") == "") {
          $c.gus.cfAlertMsg($p, "지급회계처리가 결재되어서 취소 하실수 없습니다.");
          return false;
        }
      }
    } //for end

    if (await $c.win.confirm($p, "취소하시겠습니까?")) {
      sbm_settleCancel.action = "/ac.fm.paymgnt.corcardadjm.ProcessCorporationCardSettlementCancelCMD.do";
      $c.sbm.execute($p, sbm_settleCancel);
    }
  } catch (e) {
    console.log("f_SettleCancel : " + e);
  }
};

//-------------------------------------------------------------------------
// 정리 취소콜백
//-------------------------------------------------------------------------
scwin.sbm_settleCancel_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.gus.cfAlertMsg($p, "성공적으로 처리되었습니다");
  ds_corcard.removeAll();
  ds_corCardConform.removeAll();
  scwin.f_ds_corCardConformClear();
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 정리 구분변경시
//-------------------------------------------------------------------------
scwin.lc_payCls_onviewchange = function (info) {
  scwin.f_PayCls();
};

//-------------------------------------------------------------------------
// TOBE추가 ds_corCardConform 화면입력정보 clear
//-------------------------------------------------------------------------
scwin.f_ds_corCardConformClear = function (info) {
  ed_slipDt.setValue("");
  ed_bilgAmt.setValue("");
  ed_txt_bankbookNo.setValue("");
  ed_txt_bankbookNm.setValue("");
  ed_txt_bankAcntNo.setValue("");
  ed_txt_bankbookKndNm.setValue("");
  gr_corcard.setFooterData("amtSum", 0);
};

//-------------------------------------------------------------------------
// 그리드 정리구분 데이터 포맷처리
//-------------------------------------------------------------------------
scwin.displayClsCd = function (data) {
  let rowList = dlt_commonCodeFM078.getMatchedJSON("cd", data);
  let clsCdNm = "";
  if (rowList.length > 0) {
    clsCdNm = rowList[0].cdNm;
  }
  return "[" + data + "]" + clsCdNm;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'searchTable',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사용일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_search',refEdDt:'useDtEnd',refStDt:'useDtSt',style:'',edFromId:'ed_useDtSt',mandatoryFrom:'true',mandatoryTo:'true',edToId:'ed_useDtEnd',objTypeFrom:'data',objTypeTo:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'카드정산처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_cardAdjmPl',validExpCode:'',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_txt_cardAdjmPlNm',id:'udc_cardAdjmPl',editTypeName:'select',maxlengthName:'50',refDataCollection:'ds_search',code:'cardAdjmPl',selectID:'retrieveCardClntInfo',validTitle:'카드정산처',name:'cardAdjmPlNm',mandatoryCode:'true',objTypeName:'data',objTypeCode:'data','ev:onblurCodeEvent':'scwin.udc_cardAdjmPl_onblurCodeEvent','ev:onclickEvent':'scwin.udc_cardAdjmPl_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결제일 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w80',id:'ed_stmtDd',style:'',allowChar:'0-9',maxlength:'2',objType:'data',title:'결제일',ref:'data:ds_search.stmtDd'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'가결구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_postYn',objType:'data',style:'width: 208px;',submenuSize:'auto',title:'가결구분',ref:'data:ds_search.postYn',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'결재'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가결'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정리구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_payCls',style:'',submenuSize:'auto',displayMode:'value delim label',ref:'data:ds_search.payCls','ev:onviewchange':'scwin.lc_payCls_onviewchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'카드번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cardNo',style:'width: 230px;',allowChar:'0-9',editFormat:'####-####-####-####',ref:'data:ds_search.cardNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_SearchClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrd',gridID:'gr_corcard',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_corcard',id:'gr_corcard',style:'',visibleRowNum:'11',visibleRowNumFix:'true',fixedColumn:'1',fixedColumnNoMove:'true',readOnly:'true',resize:'true',columnMove:'true',rowStatusVisible:'true','ev:onheaderclick':'scwin.gr_corcard_onheaderclick','ev:oncellclick':'scwin.gr_corcard_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'checkYn',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'카드사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'사용자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'사용일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'카드번호',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'귀속</br>부서',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'금액',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'지급</br>전표번호 ',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'회계일자',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'지급</br>회계일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'지급일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'정리구분',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'checkYn',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',valueType:'other',checkAlways:'true',readOnly:'false',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cardNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useEmpNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useDt',inputType:'text',style:'',value:'',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cardNo',inputType:'text',style:'',value:'',width:'140',displayFormat:'####-####-####-####'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userAcctDeptNm',inputType:'text',style:'',value:'',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'link',style:'',value:'',width:'100',textAlign:'center',class:'linktype'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'paySlipNo',inputType:'link',style:'',value:'',width:'100',textAlign:'center',class:'linktype'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'text',style:'',value:'',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payPostDt',value:'',displayMode:'label',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcsnDt',value:'',displayMode:'label',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'setlClsCd',value:'',displayMode:'label',displayFormatter:'scwin.displayClsCd'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',style:'',id:'amtSum',value:'0',displayMode:'label',inputType:'text',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_slipDt',style:'',displayFormat:'yyyy/MM/dd',ref:'',objType:'data',mandatory:'true',title:'지급일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'카드사청구금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_bilgAmt',style:'',objType:'data',mandatory:'true',allowChar:'0-9',displayFormat:'#,##0',dataType:'number',maxlength:'13',initValue:'0'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통장명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{objTypeCode:'data',popupID:'',code:'bankbookNo',maxlengthName:'20',mandatoryCode:'true',allowCharCode:'0-9',codeId:'ed_txt_bankbookNo',selectID:'retrieveBankBookCdInfo',validTitle:'통장명',editTypeName:'select',id:'udc_Bankbook',class:'',maxlengthCode:'5',editTypeCode:'select',validExpCode:'',UpperFlagCode:'1',readOnlyName:'true',mandatoryName:'false','ev:onclickEvent':'scwin.udc_Bankbook_onclickEvent',name:'bankAcntNo',nameId:'ed_txt_bankAcntNo',style:'width: 300px;','ev:onblurCodeEvent':'scwin.udc_Bankbook_onblurCodeEvent'}},{T:1,N:'xf:input',A:{style:'',id:'ed_txt_bankbookKndNm',class:' w150',ref:''}},{T:1,N:'xf:input',A:{style:'',id:'ed_txt_bankbookNm',class:' w150',ref:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_PostCancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Post',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_SettleCancel',style:'',type:'button','ev:onclick':'scwin.f_SettleCancel',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정리취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Settle',style:'',type:'button','ev:onclick':'scwin.f_Settle',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정리'}]}]}]}]}]}]}]}]}]})