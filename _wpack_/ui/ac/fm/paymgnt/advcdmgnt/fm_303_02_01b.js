/*amd /ui/ac/fm/paymgnt/advcdmgnt/fm_303_02_01b.xml 32474 272bc1b3b2741ba1a421aea1e75d62383e26ee527fadbd5ad788a515d9d2ab1d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sts',name:'상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'조회구분코드(1:전도금신청,2:전도금승인)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtClsCd',name:'날짜구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'appDept',name:'신청부서',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_advanced',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'advcdNo',name:'전도금번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'appDt',name:'신청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'appAcctDeptCd',name:'신청귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'appAcctDeptNm',name:'신청귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'appAmt',name:'신청금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'admitAmt',name:'승인금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitSlipNo',name:'승인전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitBankbookNo',name:'승인통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdPayStsCd',name:'전도금지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payPossibleAmt',name:'지급가능금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payYn',name:'지급여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_advancedLimit',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'limitAmt',name:'한도금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'caryFwrdRamt',name:'이월잔액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'결제원금',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'useAmt',name:'사용금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'advcdRamt',name:'ADVCD_RAMT',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'reqPsblAmt',name:'REQ_PSBL_AMT',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'thisPayAmt',name:'THIS_PAY_AMT',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'요청금액',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_withdraw'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'txnDt',name:'일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnAmt',name:'금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieveAdvanced',action:'/ac.fm.paymgnt.advcdmgnt.RetrieveAdvancedPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_advancedLimit","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_advancedLimit","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveAdvanced_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fm.paymgnt.advcdmgnt.RetrieveAdvancedApplyContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_advanced","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_advanced","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_process',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_advanced","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_process_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.PAYMENTREQ = "01"; //지급요청  
scwin.PAYMENTADMIT = "02"; //지급승인  
scwin.PAYMENTCOMPLETE = "03"; //지급완료  
scwin.PAYMENTRFSL = "04"; //지급거부 

scwin.memJson = $c.data.getMemInfo($p);
scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.sAcctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
scwin.sAppDeptNm = $c.data.getMemInfo($p, "acctDeptNm");

//-------------------------------------------------------------------------
// hidden
//-------------------------------------------------------------------------
scwin.hid_appDept = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "FM034",
    compID: "lc_advcdPayStsCd,gr_advanced:advcdPayStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  $c.gus.cfEnableObj($p, ed_bankNm, true);
  $c.gus.cfEnableObj($p, ed_bankbookKndNm, true);
  ed_stDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ed_endDt.setValue(scwin.g_sCurrDate);
  lc_advcdPayStsCd.setValue(scwin.PAYMENTREQ);
  ed_admitDt.setValue(scwin.g_sCurrDate);
  lc_dtClsCd.setSelectedIndex(0);
  //btn_Cancel.setDisabled(true); //ASIS 버튼 활성화 로직 없음.
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    let ret = await $c.gus.cfValidate($p, [ed_stDt]);
    if (!ret) {
      return false;
    }
    let ret2 = await $c.gus.cfValidate($p, [ed_endDt]);
    if (!ret2) {
      return false;
    }
    if (ret && ret2) {
      ds_condition.set("scClsCd", 2);
      $c.sbm.execute($p, sbm_retrieve);
    }
  } catch (e) {
    console.log("f_Retrieve : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    if (ds_advanced.getRowCount() == 0) {
      $c.win.alert($p, "조회된 데이터가 없습니다");
      $c.gus.cfDisableBtn($p, [btn_Confirm]);
    } else {
      $c.gus.cfEnableAllBtn($p);
      ds_advanced.sort("appDt", 0); //SortExpr +appDt
      $c.gus.cfGoPrevPosition($p, gr_advanced, 0); //첫번째 row 포지션이동
      tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_advanced.getRowCount()));
    }
  } catch (e) {
    console.log("sbm_retrieve_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = function () {
  if (ds_advanced.getRowCount() <= 0) {
    $c.win.alert($p, "전도금승인내역이 존재하지않습니다.");
    return false;
  }
  const options = {
    fileName: "전도금승인내역.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: "전도금승인내역" //엑셀내 시트명 지정필요시
  };
  const infoArr = [];
  gr_advanced.setColumnVisible("payYn", false); //안보이기
  $c.data.downloadGridViewExcel($p, gr_advanced, options, infoArr);
  gr_advanced.setColumnVisible("payYn", true); //보이기
};

//-------------------------------------------------------------------------
// 부서코드
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_appDept, ed_appDeptNm);
};
//-------------------------------------------------------------------------
// 부서명
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {
  //scwin.f_openPopUpNm(ed_appDept, ed_appDeptNm,'T');
};
//-------------------------------------------------------------------------
// 부서찾기
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_appDept, ed_appDeptNm, 'F');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm) {
  try {
    if (orgObjCd.getValue() != orgObjCd.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(orgObjCd, orgObjNm, "T");
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
      orgObjCd.hidVal = "";
    }
  } catch (e) {
    console.log("f_CheckPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 부서코드팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (txtCode, txtName, sFlag) {
  try {
    let code = '';
    let name = '';
    let param = '';
    code = txtCode.getValue();
    name = txtName.getValue();
    if (txtCode.getValue() == txtCode.hidVal) return;

    /*
    rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo'
                    ,ed_Cd.Text.trim()
                    ,txt_Nm.value.trim()
                    ,sFlag,null,null,null,null,null,",1",null,null,null);
        */
    udc_acctDeptCd.setSelectId('retrieveAcctDeptCdInfo');
    udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc // 콜백 함수
    , code // 화면에서의  Code Element의 Value
    , name // 화면에서의  Name Element의 Value
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
    , null // 중복체크여부	("F")
    , null // 전체검색허용여부	("F")
    , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
    );
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 부서 PopUp 콜백
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        return;
      }
      ed_appDept.setValue(rtnList[0]); // 귀속코드
      ed_appDeptNm.setValue(rtnList[1]); // 귀속명
      ed_appDept.hidVal = rtnList[0];
    } else {
      ed_appDept.setValue("");
      ed_appDeptNm.setValue("");
      ed_appDept.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 통장조회코드입력
//-------------------------------------------------------------------------
scwin.udc_Bankbook_onblurCodeEvent = function (e) {
  ed_bankNm.setValue("");
  ed_bankbookKndNm.setValue("");
  if (ed_bankbookNo.getValue().trim() != "") {
    scwin.f_CheckBankbookPopup(ed_bankbookNo, ed_bankNm, ed_bankbookKndNm);
  }
};

//-------------------------------------------------------------------------
// 통장조회코드명입력 (readonly)
//-------------------------------------------------------------------------
scwin.udc_Bankbook_onblurNameEvent = function (e) {
  //f_BankBookPopUp('F')
};
//-------------------------------------------------------------------------
// 통장조회찾기
//-------------------------------------------------------------------------
scwin.udc_Bankbook_onclickEvent = function (e) {
  ed_bankNm.setValue("");
  ed_bankbookKndNm.setValue("");
  scwin.f_BankBookPopUp('F');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckBankbookPopup = function (orgObjCd, orgObjNm, orgObjNm2, orgObjNm3) {
  try {
    if (orgObjCd.getValue() != orgObjCd.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_BankBookPopUp('T');
    } else {
      orgObjCd.setValue("");
      orgObjNm.setValue("");
      orgObjNm2.setValue("");
      orgObjNm3.setValue("");
    }
  } catch (e) {
    console.log("f_CheckBankbookPopup : " + e);
  }
};

//-------------------------------------------------------------------------
// 통장조회 POPUP호출
//-------------------------------------------------------------------------
scwin.f_BankBookPopUp = async function (sFlag) {
  try {
    //rtnList = cfCommonPopUp('retrieveExpenseTransferInfo',ed_bankbookNo.Text,'',sFlag,null,null,null,null,null,null,null,null,null,null,null);
    udc_Bankbook.setSelectId('retrieveExpenseTransferInfo');
    udc_Bankbook.cfCommonPopUp(scwin.udc_Bankbook_callBackFunc // 콜백 함수
    , ed_bankbookNo.getValue() // 화면에서의  Code Element의 Value
    , '' // 화면에서의  Name Element의 Value
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
    , null // 중복체크여부	("F")
    , null // 전체검색허용여부	("F")
    , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
    );
  } catch (e) {
    console.log("f_BankBookPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 통장조회 POPUP 콜백
//-------------------------------------------------------------------------
scwin.udc_Bankbook_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;

    // SET	 
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return false;
      ed_bankbookNo.setValue(rtnList[0]); //통장번호
      ed_bankNm.setValue(rtnList[2]); //통장명
      ed_bankbookKndNm.setValue(rtnList[8]); //통장종류코드
      ed_bankbookNo.hidVal = rtnList[0];
    } else {
      if (rtnList[0] == "N/A") return false;
      ed_bankbookNo.setValue(""); //통장번호
      ed_bankNm.setValue(""); //통장명
      ed_bankbookKndNm.setValue(""); //통장종류코드
      ed_bankbookNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_Bankbook_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 그리드 셀 클릭시
//------------------------------------------------------------------------
scwin.gr_advanced_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "admitSlipNo" && rowIndex >= 0) {
    if (!(ds_advanced.getCellData(rowIndex, "admitSlipNo") == null || ds_advanced.getCellData(rowIndex, "admitSlipNo") == "")) {
      $c.gus.cfShowSlipInfo($p, ds_advanced.getCellData(rowIndex, "admitSlipNo"));
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 row 변경시
//------------------------------------------------------------------------
scwin.gr_advanced_onrowindexchange = function (rowIndex, oldRow) {
  try {
    if (ds_advanced.getCellData(rowIndex, "advcdPayStsCd") != scwin.PAYMENTREQ) {
      gr_ramtConfirm.setReadOnly("cell", rowIndex, "admitAmt", true); //readOnly
    } else {
      gr_ramtConfirm.setReadOnly("cell", rowIndex, "admitAmt", false); //None
    }
  } catch (e) {
    console.log("gr_advanced_onrowindexchange : " + e);
  }
};
//-------------------------------------------------------------------------
// 승인
//------------------------------------------------------------------------
scwin.f_Confirm = async function (rowIndex, oldRow) {
  try {
    let nTxnAmt = 0;
    let i = 0;
    if (ds_advanced.getModifiedIndex().length == 0) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "자료"));
      return false;
    }
    let ret = await $c.gus.cfValidate($p, [ed_bankbookNo]);
    if (!ret) {
      return false;
    }
    let ret2 = await $c.gus.cfValidate($p, [ed_admitDt]);
    if (!ret2) {
      return false;
    }
    for (i = 0; i < ds_advanced.getRowCount(); i++) {
      if (ds_advanced.getRowStatus(i) != "R" && ds_advanced.getCellData(i, "payYn") == 1) {
        if (ds_advanced.getCellData(i, "advcdPayStsCd") != scwin.PAYMENTREQ) {
          $c.win.alert($p, "지급요청인건만 승인할 수 있습니다.");
          return false;
        }
        if (ds_advanced.getCellData(i, "admitAmt") <= 0) {
          $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_057, "지급액", "0"));
          return false;
        }
      }
    }
    if (await $c.win.confirm($p, "승인 하시겠습니까?")) {
      for (i = 0; i < ds_advanced.getRowCount(); i++) {
        if (ds_advanced.getRowStatus(i) != "R" && ds_advanced.getCellData(i, "payYn") == 1) {
          ds_advanced.setCellData(i, "admitBankbookNo", ds_withdraw.get("bankbookNo"));
          ds_advanced.setCellData(i, "admitDt", ed_admitDt.getValue().trim());
        }
      }
      sbm_process.action = "/ac.fm.paymgnt.advcdmgnt.ConfirmAdvancedPaymentCMD.do";
      $c.sbm.execute($p, sbm_process);
    }
  } catch (e) {
    console.log("f_Confirm : " + e);
  }
};

//-------------------------------------------------------------------------
// 승인콜백
//------------------------------------------------------------------------
scwin.sbm_process_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'',allOption:'false',id:'lc_advcdPayStsCd',class:' w150',direction:'auto',ref:'data:ds_condition.sts',objType:'data',displayMode:'value delim label',chooseOption:'true',chooseOptionLabel:'전체'}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dtClsCd',style:'',submenuSize:'auto',displayMode:'value delim label',ref:'data:ds_condition.dtClsCd',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신청일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지급일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_condition',refEdDt:'endDt',refStDt:'stDt',style:'',edFromId:'ed_stDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',edToId:'ed_endDt',titleFrom:'신청일자',titleTo:'신청일자'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_appDept',maxlengthCode:'5',allowCharCode:'0-9',objTypeCode:'data',nameId:'ed_appDeptNm',objTypeName:'data',code:'appDept',name:'',selectID:'retrieveAcctDeptCdInfo',id:'udc_acctDeptCd',validTitle:'신청부서','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrd',gridID:'gr_advanced',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_advanced',id:'gr_advanced',style:'',visibleRowNum:'13',visibleRowNumFix:'true',readOnly:'true',resize:'true',columnMove:'true','ev:oncellclick':'scwin.gr_advanced_oncellclick','ev:onrowindexchange':'scwin.gr_advanced_onrowindexchange',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'payYn',inputType:'checkbox',style:'',value:'',width:'50',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'부서코드',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'신청부서',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'신청번호',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'신청일자',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'지급일자',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'신청금액',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'admitAmt',inputType:'text',style:'',value:'지급액',width:'100',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'상태',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'전표번호',width:'100',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'payYn',inputType:'checkbox',style:'',value:' ',width:'50',textAlign:'center',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'appAcctDeptCd',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'appAcctDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'appDt',inputType:'text',style:'',value:'',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'admitDt',inputType:'text',style:'',value:'',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'appAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'100',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'admitAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',readOnly:'false',dataType:'number',allowChar:'0-9',maxLength:'13'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdPayStsCd',inputType:'select',style:'',value:'',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'admitSlipNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center',class:'underline txt-blue'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'expression',expression:'sum(\'appAmt\')',style:'',textAlign:'right',value:'',width:'100',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'expression',expression:'sum(\'admitAmt\')',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_admitDt',style:'',mandatory:'true',displayFormat:'yyyy/MM/dd',title:'지급일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급통장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{objTypeCode:'data',refDataCollection:'ds_withdraw',popupID:'',code:'bankbookNo',maxlengthName:'20',mandatoryCode:'true',allowCharCode:'0-9',codeId:'ed_bankbookNo',selectID:'retrieveExpenseTransferInfo',validTitle:'통장번호',editTypeName:'select','ev:onblurNameEvent':'scwin.udc_Bankbook_onblurNameEvent',id:'udc_Bankbook',class:'',maxlengthCode:'5',editTypeCode:'select',validExpCode:'',UpperFlagCode:'1',readOnlyName:'true',mandatoryName:'false','ev:onclickEvent':'scwin.udc_Bankbook_onclickEvent',nameId:'ed_bankNm',style:'width: 300px;','ev:onblurCodeEvent':'scwin.udc_Bankbook_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',btnId:'btn_Bankbook'}},{T:1,N:'xf:input',A:{ref:'data:ds_bankBook.bankbookNm',style:'width:150px;',readOnly:'true',id:'ed_bankbookKndNm',placeholder:'',allowChar:'a-zA-Z0-9',class:'',objType:'key'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Confirm',label:'승인',style:'',type:'button',objType:'bCreate','ev:onclick':'scwin.f_Confirm'},E:[{T:1,N:'xf:label',E:[{T:3,text:'승인'}]}]}]}]}]}]}]}]}]})