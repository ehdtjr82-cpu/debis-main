/*amd /ui/ac/fm/acctrecvmgnt/crdtmgnt/fm_604_06_01b.xml 35554 023a62eda370e05f397f54058da1712070aeb5a7e1ce4b3e29ce327cd278e3d1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizdivCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_detailCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizdivCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_detail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bizdivNm',name:'사업명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClsCd',name:'계약구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClsCd',name:'정산구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmNo',name:'정산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsvNo',name:'예약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovrAmt',name:'수금액초과액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ramt',name:'당월채권금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Amt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizdivCd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name17',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_crdtLimitRemainAmtMgnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'법인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crdtLimit',name:'월여신한도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cumLimit',name:'누계한도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cumRemain',name:'누계잔액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovrAmt',name:'수금일초과금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgAmt',name:'담보금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crdtLimitRemain',name:'여신한도잔액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cumLimitRemain',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'monthLimitRemain',name:'name12',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCrdtMgnt',action:'/ac.fm.acctrecvmgnt.crdtmgnt.RetrieveCreditLimitRemainAmtPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_crdtLimitRemainAmtMgnt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_crdtLimitRemainAmtMgnt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCrdtMgnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCrdtMgntApply',action:'/ac.fm.acctrecvmgnt.crdtmgnt.RetrieveCreditLimitRemainAmtDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_detailCondition","key":"IN_DS1"},{"id":"ds_detail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_detail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCrdtMgntApply_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_reSetCredit',action:'/ac.fm.acctrecvmgnt.crdtmgnt.ResetCreditRemainCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_condition","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_reSetCredit_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.g_sCurrDate = WebSquare.date.getCurrentServerDate();
scwin.crn = "";
scwin.busiNm = "";

// submission 전역변수
scwin.rowOld = -1;
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FM086",
    compID: "gr_detail:ctrtClsCd"
  }, {
    grpCd: "FM087",
    compID: "gr_detail:adjmClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  ica_srchadptDt.setValue(scwin.g_sCurrDate);
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
  // let rtnList = null;
  // let sCmdName = "";

  let code = "";
  let name = "";
  switch (select_code) {
    // 관리부서 PopUp 호출
    // case '1' :
    //     code = txtCode.getValue();
    //     name = txtName.getValue();
    //     sCmdName = "retrieveAcctDeptCdInfo"
    //     rtnList = udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, code,name,sFlag,null,null,null,null,null,null,null,null,null); // 거래처
    //     break;
    // 여신대상사업자번호 PopUp 호출
    // case '2' :
    //     code = txtCode.getValue();
    //     name = txtName.getValue();
    //     sCmdName = "retrieveCreditCrnInfo"
    //     rtnList = udc_creditCrnInfo.cfCommonPopUp(scwin.udc_creditCrnInfo_callBackFunc, code,name,sFlag,null,null,null,null,null,null,null,null,null,null,"F",null,null); // 여신대상사업자번호
    //     break;
    // 여신한도조회 설정PopUp 호출
    case '3':
      code = txtCode.getValue();
      name = txtName.getValue();
      sCmdName = "retrieveCreditLimitTargetCrnInfo";
      udc_creditLimitTargetCrnInfo.cfCommonPopUp(scwin.udc_creditLimitTargetCrnInfo_callBackFunc, code, name, sFlag, null, null, null, null, null, null, null, null, null, null, "F", null, null); // 여신대상사업자번호+신용정보등록내역포함
      break;
    // 사업구분조회 설정PopUp 호출
    // case '4' :
    //     code = txtCode.getValue();
    //     name = txtName.getValue();
    //     sCmdName = "retrieveBizdivCdInfo"
    //     rtnList = udc_bizdivCdInfo.cfCommonPopUp(scwin.udc_bizdivCdInfo_callBackFunc, code,name,sFlag,null,null,null,null,null,null,null,"T",null,null,"T",null,null); // 사업영역
    //     break;		 			 	
  }

  // if ( rtnList != null ) {
  //     if (rtnList[0] == "N/A") return;
  //     txtCode.setValue(rtnList[0]);	    // 코드
  //     txtName.setValue(rtnList[1]);	    // 코드명
  //     txtCode.options.hidVal = rtnList[0];	// 코드
  // } else {
  //     txtCode.setValue("");	    // 코드
  //     txtName.setValue("");	    // 코드명
  //     txtCode.options.hidVal = "";	// 코드
  // }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
// scwin.udc_acctDeptCdInfo_callBackFunc = function(rtnList) {
//     if ( rtnList != null ) {
//         if (rtnList[0] == "N/A") return;
//         txtCode.setValue(rtnList[0]);	    // 코드
//         txtName.setValue(rtnList[1]);	    // 코드명
//         txtCode.options.hidVal = rtnList[0];	// 코드
//     } else {
//         txtCode.setValue("");	    // 코드
//         txtName.setValue("");	    // 코드명
//         txtCode.options.hidVal = "";	// 코드
//     }
// };

// scwin.udc_creditCrnInfo_callBackFunc = function(rtnList) {
//     if ( rtnList != null ) {
//         if (rtnList[0] == "N/A") return;
//         txtCode.setValue(rtnList[0]);	    // 코드
//         txtName.setValue(rtnList[1]);	    // 코드명
//         txtCode.options.hidVal = rtnList[0];	// 코드
//     } else {
//         txtCode.setValue("");	    // 코드
//         txtName.setValue("");	    // 코드명
//         txtCode.options.hidVal = "";	// 코드
//     }
// };

scwin.udc_creditLimitTargetCrnInfo_callBackFunc = function (rtnList) {
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

// scwin.udc_bizdivCdInfo_callBackFunc = function(rtnList) {
//     if ( rtnList != null ) {
//         if (rtnList[0] == "N/A") return;
//         txtCode.setValue(rtnList[0]);	    // 코드
//         txtName.setValue(rtnList[1]);	    // 코드명
//         txtCode.options.hidVal = rtnList[0];	// 코드
//     } else {
//         txtCode.setValue("");	    // 코드
//         txtName.setValue("");	    // 코드명
//         txtCode.options.hidVal = "";	// 코드
//     }
// };

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd._wTagName.toUpperCase() == "INPUT") {
    if (orgObjCd.getValue() != orgObjCd.options.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
  } else if (orgObjCd._wTagName.toUpperCase() == "OBJECT") {
    if (orgObjCd.getValue() != orgObjCd.options.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
    }
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

  code = ds_crdtLimitRemainAmtMgnt.getCellData(Row, pCode);
  if (code == null || code == "") code = "";
  switch (select_code) {
    // 관리부서 PopUp 호출
    case '1':
      sCmdName = "retrieveAcctDeptCdInfo";
      rtnList = udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, "", "", pClose, null, null, null, null, null, null, null, null, null); // 부서
      break;
    // 여신대상사업자번호 PopUp 호출
    // case '2' :
    //     sCmdName = "retrieveCreditCrnInfo"
    //     rtnList = udc_creditCrnInfo.cfCommonPopUp(scwin.udc_creditCrnInfo_callBackFunc, "","",pClose,null,null,null,null,null,null,null,null,null,null,null,null,null); // 여신대상사업자번호
    //     break;
    // 여신한도조회 설정PopUp 호출
    case '3':
      sCmdName = "retrieveCreditLimitTargetCrnInfo";
      rtnList = udc_creditLimitTargetCrnInfo.cfCommonPopUp(scwin.udc_creditLimitTargetCrnInfo_callBackFunc, "", "", pClose, null, null, null, null, null, null, null, null, null, null, null, null, null); // 여신대상사업자번호
      break;
  }

  // if (select_code == '3'){
  //     RowPos = ds_crdtLimitRemainAmtMgnt.rowPosition
  //     for (i = 0; i < ds_crdtLimitRemainAmtMgnt.getRowCount(); i++){
  //         if (ds_crdtLimitRemainAmtMgnt.sysStatus(i) == 1 || ds_crdtLimitRemainAmtMgnt.sysStatus(i) == 3 ){
  //             if ( ( RowPos != i ) && ds_crdtLimitRemainAmtMgnt.getCellData(i, "crn") == rtnList[0] ){
  //                 alert(i+"열에서 같은 사업자번호가 존재하여 신청할 수 없습니다.")
  //                 return false
  //             }
  //         }
  //     }

  //     $c.gus.cfSetGridReturnValue(rtnList, ds_crdtLimitRemainAmtMgnt,Row,pCode,pName,addCol);	
  // } else {
  //     $c.gus.cfSetGridReturnValue(rtnList, ds_crdtLimitRemainAmtMgnt,Row,pCode,pName);		    
  // }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {};

// scwin.udc_creditCrnInfo_callBackFunc = function(rtnList) {

// };

scwin.udc_creditLimitTargetCrnInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_crn.setValue(rtnList[0]); // 코드
    ed_crnNm.setValue(rtnList[1]); // 코드명
    ed_crn.options.hidVal = rtnList[0]; // 코드
    dma_detailCondition.set("crn", rtnList[0]);
  } else {
    ed_crn.setValue(""); // 코드
    ed_crnNm.setValue(""); // 코드명
    ed_crn.options.hidVal = ""; // 코드
    dma_detailCondition.set("crn", "");
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ed_crn.getValue().trim() == "" && ica_srchadptDt.getValue().trim() == "") {
    await $c.win.alert($p, "사업자번호와  적용일자 둘중의 하나는 등록바랍니다.");
    return;
  }
  let ret = await $c.gus.cfValidate($p, [ed_crn]);
  if (!ret) return;

  // let temp = dma_condition.get("adptDt");
  // dma_condition.set("adptDt",temp.trim());
  // dma_condition.setUseChangeInfo(false);
  $c.sbm.execute($p, sbm_retrieveCrdtMgnt);
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  // $c.gus.cfInitObjects(table1,null);
  // ica_srchadptDt.setValue(scwin.g_sCurrDate);
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
    await $c.data.downloadGridViewExcel($p, gr_crdtLimitRemainAmtMgnt, {
      fileName: fileName + ".xlsx",
      sheetName: fileName
    });
  }
};

//-------------------------------------------------------------------------
// 조회(거래내역)
//-------------------------------------------------------------------------
scwin.f_TxnContents = function (row) {
  dma_detailCondition.set("crn", ds_crdtLimitRemainAmtMgnt.getCellData(row, "crn"));
  dma_detailCondition.set("adptDt", ds_crdtLimitRemainAmtMgnt.getCellData(row, "adptDt"));
  dma_detailCondition.set("bizdivCd", ds_crdtLimitRemainAmtMgnt.getCellData(row, "bizdivCd"));
  // ds_crdtLimitRemainAmtMgnt - "bizdivCd" 존재하지않음.
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
scwin.f_save = async function () {
  scwin.f_ReSetCredit();
};
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
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    scwin.rowOld = -1;
    return;
  }
  ;
  await $c.win.alert($p, "여신한도 잔액 재설정이 완료되었습니다.");
  scwin.f_Retrieve();
};
scwin.sbm_retrieveCrdtMgnt_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  scwin.rowOld = -1;
  let data = ica_srchadptDt.getValue();
  // $c.gus.cfCheckCreateFlag() undifinded
  let rowCnt = ds_crdtLimitRemainAmtMgnt.getRowCount();
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
  } else {
    if (rowCnt == 0) {
      $c.win.alert($p, "조회된 데이터가 없습니다");
      return;
    } else {
      totalRows1.setValue(rowCnt);
      for (i = 0; i < ds_crdtLimitRemainAmtMgnt.getRowCount(); i++) {
        ds_crdtLimitRemainAmtMgnt.setCellData(i, "adptDt", data);
      }
    }
  }
};
scwin.udc_creditLimitTargetCrnInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_crn, ed_crnNm, 'F');
};
scwin.udc_creditLimitTargetCrnInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_crnNm, '3');
};
scwin.gr_crdtLimitRemainAmtMgnt_ontextimageclick = function (rowIndex, columnIndex) {
  if (rowIndex == 1) {
    scwin.f_openCommonPopUp('3', "crn", "busiNm", row, 'F');
  }
};
scwin.gr_crdtLimitRemainAmtMgnt_oncellclick = function (rowIndex, columnIndex, columnId) {
  const currentStatus = ds_crdtLimitRemainAmtMgnt.getRowStatus(rowIndex);
  if (scwin.rowOld !== rowIndex) {
    if (currentStatus != "C") {
      scwin.rowOld = rowIndex;
      scwin.f_TxnContents(rowIndex);
    }
  }
};
scwin.sbm_retrieveCrdtMgntApply_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_detail.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다");
  } else {
    totalRows2.setValue(rowCnt);
  }
};
scwin.ica_srchadptDt_onblur = function (e) {
  dma_detailCondition.set("adptDt", ica_srchadptDt.getValue());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'여신한도 잔액 현황(오더기준)',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_srchadptDt',style:'',mandatory:'true',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:dma_condition.adptDt','ev:onblur':'scwin.ica_srchadptDt_onblur',title:'적용일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업자번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_crn',nameId:'ed_crnNm',popupID:'',selectID:'retrieveCreditLimitTargetCrnInfo',style:'',validTitle:'사업자번호',refDataCollection:'dma_condition',code:'crn',allowCharCode:'0-9',maxlengthCode:'13',objTypeCode:'data',objTypeName:'data',id:'udc_creditLimitTargetCrnInfo','ev:onclickEvent':'scwin.udc_creditLimitTargetCrnInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_creditLimitTargetCrnInfo_onblurCodeEvent',mandatoryCode:'true',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcel',gridID:'gr_crdtLimitRemainAmtMgnt'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_crdtLimitRemainAmtMgnt',focusMode:'cell',id:'gr_crdtLimitRemainAmtMgnt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'3',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_crdtLimitRemainAmtMgnt_ontextimageclick','ev:oncellclick':'scwin.gr_crdtLimitRemainAmtMgnt_oncellclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'적용일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'사업자번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'법인명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'월여신한도',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'누계한도',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'누계잔액',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'금액',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'수금일초과금액',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column55',inputType:'text',style:'',value:'담보금액',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',style:'',value:'여신한도잔액',width:'130',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'textImage',style:'',value:'',width:'120',maxLength:'10',viewType:'default',editModeEvent:'onclick',editModeEventIcon:'onclick'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crdtLimit',inputType:'text',style:'',textAlign:'right',value:'',width:'120',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cumLimit',inputType:'text',style:'',textAlign:'right',value:'',width:'100',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cumRemain',inputType:'text',style:'',textAlign:'right',value:'',width:'100',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',textAlign:'right',value:'',width:'100',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ovrAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'130',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pldgAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'100',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crdtLimitRemain',inputType:'text',style:'',textAlign:'right',value:'',width:'130',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column48',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column46',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',style:'',textAlign:'right',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'text',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column40',inputType:'text',style:'',textAlign:'right',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column57',inputType:'text',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column51',inputType:'text',style:'',textAlign:'right',value:'',width:'130'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(단위 : 원) ',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcelDetail',gridID:'gr_detail'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_detail',id:'gr_detail',style:'',visibleRowNum:'5',visibleRowNumFix:'true',columnMove:'true',dataDragSelect:'false',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'사업명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'적용일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'거래처',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'거래처명',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'계약구분',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'계약번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'오더번호',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'정산구분',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'정산번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'예약번호',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column52',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column49',value:'수금액초과액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column46',value:'당월채권금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bizdivNm',inputType:'text',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'calendar',width:'100',displayFormat:'yyyy/MM/dd',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'80',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'140',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtClsCd',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'140',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adjmClsCd',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adjmNo',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsvNo',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'amt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ovrAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ramt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column54',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM("amt")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column51',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM("ovrAmt")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM("ramt")'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'여신한도잔액 재설정'}]}]}]}]}]}]}]}]})