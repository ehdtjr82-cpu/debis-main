/*amd /ui/ac/fm/acctrecvmgnt/crdtmgnt/fm_604_06_02b.xml 38076 f2010a9f990c41aa78f25c84f0ea109c263ad49f3b58b96ae4bef0d7dd85ef0f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_finalCloseYM',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizdivCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_detailCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizdivCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_detail',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'발생전표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvOutbrDt',name:'발생일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'채권금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlAmt',name:'수금금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ramt',name:'잔액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyIntendDt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ramtFcrc',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name29',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_crdtLimitRemainAmtMgnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'법인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crdtLimit',name:'월여신한도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cumLimit',name:'누계한도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cumRemain',name:'누계잔액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'채권금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlAmt',name:'수금금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovrAmt',name:'수금일초과금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgAmt',name:'담보금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crdtLimitRemain',name:'여신한도잔액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cumLimitRemain',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'monthLimitRemain',name:'name23',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_getFinalCloseYM',action:'',method:'get',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_finalCloseYM","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_getFinalCloseYM_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCrdtMgnt',action:'/ac.fm.acctrecvmgnt.crdtmgnt.RetrieveCreditLimitAcctRecvAmtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_crdtLimitRemainAmtMgnt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_crdtLimitRemainAmtMgnt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCrdtMgnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCrdtMgntApply',action:'/ac.fm.acctrecvmgnt.crdtmgnt.RetrieveCreditLimitAcctRecvAmtDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_detailCondition","key":"IN_DS1"},{"id":"ds_detail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_detail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCrdtMgntApply_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_reSetCredit',action:'/ac.fm.acctrecvmgnt.crdtmgnt.ResetCreditRemainCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_condition","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_reSetCredit_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.g_sCurrDate = WebSquare.date.getCurrentServerDate();
scwin.crn = "";
scwin.busiNm = "";
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  if (scwin.crn != "" && scwin.crn.length > 0) {
    ed_crn.setValue(scwin.crn);
    ed_crnNm.setValue(scwin.busiNm);
    scwin.f_Retrieve();
  }
  scwin.f_getFinalCloseYearMonth();
};

//-------------------------------------------------------------------------
// 마감년월구하기
//-------------------------------------------------------------------------
scwin.f_getFinalCloseYearMonth = function () {
  // SELECT 절 
  let param1 = "DECODE(MIN(CLOSE_YM),SUBSTR(TO_CHAR(SYSDATE,'YYYYMMDD'),1,6), TO_CHAR(SYSDATE,'YYYYMMDD') , TO_CHAR(LAST_DAY(TO_DATE(MIN(CLOSE_YM),'YYYYMM')),'YYYYMMDD')) as COL1" + ",''	 	as COL2 " + ",'' 		as COL3 " + ",'' 		as COL4 " + ",'' 		as COL5 " + ",'' 		as COL6 " + ",''      as COL7 " + ",''      as COL8 " + ",''      as COL9 " + ",''      as COL10";

  // 대상테이블 	
  let param2 = " TB_ZZ419 ";

  // 조건절
  let param3 = " AND WRK_NO = 'FI01'" + " AND CLOSE_PRGS_STS_CD ='1'" + " AND CO_CD ='000'";
  // 정렬    
  let param4 = " COL1 ";
  sbm_getFinalCloseYM.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=dinymicQueryTest" + "&param1=" + param1 + "&param2=" + param2 + "&param3=" + param3 + "&param4=" + param4;
  $c.sbm.execute($p, sbm_getFinalCloseYM);
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
  } else {
    ed_crn.setValue(""); // 코드
    ed_crnNm.setValue(""); // 코드명
    ed_crn.options.hidVal = ""; // 코드
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
  // scwin.f_getFinalCloseYearMonth();
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
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
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
      scwin.f_TxnContents(0);
      for (let i = 0; i < rowCnt; i++) {
        let data = ds_crdtLimitRemainAmtMgnt.getCellData(i, "adptDt");
        if (data.length > 10) {
          ds_crdtLimitRemainAmtMgnt.setCellData(i, "adptDt", data.substring(0, 10).replace(/-/g, ""));
        }
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
    if (currentStatus !== "C") {
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
scwin.sbm_getFinalCloseYM_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_finalCloseYM.getRowCount() > 0) {
    ica_srchadptDt.setValue(ds_finalCloseYM.getCellData(0, 'col1'));
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'여신한도 잔액 현황(채권기준) ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_srchadptDt',style:'',displayFormat:'yyyy/MM/dd',ref:'data:dma_condition.adptDt','ev:onblur':'scwin.ica_srchadptDt_onblur',title:'적용일자',validateOnInput:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업자번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',code:'crn',codeId:'ed_crn','ev:onblurCodeEvent':'scwin.udc_creditLimitTargetCrnInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_creditLimitTargetCrnInfo_onclickEvent',id:'udc_creditLimitTargetCrnInfo',mandatoryCode:'true',maxlengthCode:'13',nameId:'ed_crnNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'dma_condition',selectID:'retrieveCreditLimitTargetCrnInfo',style:'',validTitle:'사업자번호',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(단위 : 원) ',style:''}},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcel',gridID:'gr_crdtLimitRemainAmtMgnt'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_crdtLimitRemainAmtMgnt',focusMode:'cell',id:'gr_crdtLimitRemainAmtMgnt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.gr_crdtLimitRemainAmtMgnt_oncellclick','ev:ontextimageclick':'scwin.gr_crdtLimitRemainAmtMgnt_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'적용일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'사업자번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'법인명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'월여신한도',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'누계한도',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'누계잔액',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'채권금액',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'수금금액',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'수금일초과금액',width:'130'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'담보금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column49',value:'여신한도잔액',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crdtLimit',inputType:'text',style:'',value:'',width:'120',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cumLimit',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cumRemain',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stlAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ovrAmt',inputType:'text',style:'',value:'',width:'130',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pldgAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'crdtLimitRemain',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column40',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column51',value:'',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcel1',gridID:'gr_detail'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_detail',focusMode:'cell',id:'gr_detail',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true',columnMove:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'사업자번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'채권번호',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'발생전표',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'발생일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'청구부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'채권금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'수금금액',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'잔액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'적요',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',style:'',value:'',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctRecvNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctRecvOutbrDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAcctDeptCd',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stlAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ramt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'summary',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM("amt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column40',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM("stlAmt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column51',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM("ramt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})