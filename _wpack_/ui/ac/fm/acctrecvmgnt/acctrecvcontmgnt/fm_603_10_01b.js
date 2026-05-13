/*amd /ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_10_01b.xml 51721 85ae487a483ab8965db86fe923a8977c82698792a1b8a55601a67937078c30ec */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchSusRecv'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromDate',name:'입금시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDate',name:'입금종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcptrNm',name:'입금자명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'susRecvInitamtAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gubun',name:'계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchStDate',name:'부서검색시 이용되는 기준날짜',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchEndDate',name:'부서검색시 이용되는 기준날짜',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_addSusRecv'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'susRecvInitamtOutbrNo',name:'발생번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iwrkDt',name:'작업일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_excelTemp'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'amt',name:'금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excelData',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액(원)',dataType:'number'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_susRecvList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtOutbrNo',name:'발생번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtOutbrDt',name:'입금일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptrNm',name:'입금자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'금액(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtClose',name:'잔액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'orgAmtClose',name:'정리;금액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtFcrcClose',name:'잔액(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'clear',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyIntendAcctDeptCd',name:'수금예정부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyIntendAcctDeptNm',name:'수금예정부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'통장번호(저장용)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtAcctCd',name:'가수금선수금계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col19',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtStsCd',name:'가수금선수금상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldSusRecvInitamtStsCd',name:'이전가수금선수금상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refSusRecvInitamtOutbrNo',name:'참조가수금선수금발생번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkClsCd',name:'작업구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iwrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iclntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iacctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iamt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'numCheck',name:'CheckBox검사용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo1',name:'가상계좌거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgAmtFcrcClose',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary2',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name59',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldSusRecvInitamtOutbrNo',name:'name72',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'name80',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchSusRecv',action:'/ac.fm.collmoneymgnt.rcptmgnt.RetrieveSuspenseReceivableListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchSusRecv","key":"IN_DS1"},{"id":"ds_susRecvList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_susRecvList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchSusRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveExcel',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_addSusRecv","key":"IN_DS2"},{"id":"dma_searchSusRecv","key":"IN_DS3"},{"id":"ds_excelData","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.tr_saveExcel_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.sDate = WebSquare.date.getCurrentServerDate();
scwin.strFromDate = scwin.sDate.substring(0, 6) + "01";
scwin.strToDate = scwin.sDate;
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.checkSearch = true;
scwin.checkRetrieveSave = "F";
scwin.vLoginCoCd = scwin.login.coCd; // 소속 자회사  
scwin.vLoginCoClsCd = scwin.login.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd; // 사용자소속구분코드 
scwin.isSubCompany = false;

//hidden
scwin.txtCoClsCd = "";
hid_susRecvInitAmtAcctCd = "";
scwin.isChecked = true;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  ed_FromDate.setValue(scwin.strFromDate);
  ed_ToDate.setValue(scwin.strToDate);
  ica_wrkDt.setValue(scwin.strToDate);
  $c.gus.cfDisableKey($p);
  ed_acctDeptNm.setDisabled(true);
  ed_bankbookNm.setDisabled(true);
  dma_searchSusRecv.set("susRecvInitamtAcctCd", ACConstants.ACCTCD_SUS_RECV);
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ed_FromDate.getValue() > ed_ToDate.getValue()) {
    await $c.win.alert($p, "조회 시작일자는 종료일자보다 이전 날짜 이어야 합니다.");
    ed_FromDate.focus();
    return;
  }
  dma_searchSusRecv.set("queryDeptSearchStDate", ed_FromDate.getValue());
  dma_searchSusRecv.set("queryDeptSearchEndDate", ed_ToDate.getValue());

  // 필수 조회조건 입력 여부 Check
  if (!(await $c.gus.cfValidate($p, [ed_coCd, ed_FromDate, ed_ToDate]))) {
    return;
  }

  // 가수금 계정만 조회 되도록 가수금계정코드를 넣는다.
  dma_searchSusRecv.set("susRecvInitamtAcctCd", ACConstants.ACCTCD_SUS_RECV);
  $c.sbm.execute($p, sbm_searchSusRecv);
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->수금귀속부서, 2:조회->등록자
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (select_code) {
  let param = "";
  let code = "";
  if (select_code == '1' || select_code == '2' || select_code == '3') {
    if (!(await $c.gus.cfValidate($p, [ed_coCd]))) {
      return;
    }
  }
  switch (select_code) {
    // 통장명 PopUp 호출
    case '1':
      ed_bankbookNm.setValue("");
      code = ed_bankbookNo.getValue();
      param = ",,,,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항
      udc_bankBookCdInfo.cfCommonPopUp(scwin.udc_bankBookCdInfo_callBackFunc, code, '', "T", null, null, null, null, param, null, null, null, null); // 통장명

      break;
    // 조회조건용 관리부서 PopUp 호출
    case '2':
      if (ed_acctDeptCd.readOnly == true || ed_acctDeptCd.ReadOnly == true) return;
      ed_acctDeptNm.setValue("");
      code = ed_acctDeptCd.getValue();
      param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",,,"; //자회사 회계시스템 추가사항
      udc_acctDeptCdInfo6.cfCommonPopUp(scwin.udc_acctDeptCdInfo6_callBackFunc, code, '', "T", null, null, null, null, param, "450", "500", null, null); // 귀속부서			

      break;

    // 조회조건용 입금자명(거래처명) PopUp 호출
    case '3':
      let name = "";
      param = ",,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항 
      udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, '', name, "T", null, null, null, null, param, "450", "500", null, null); // 귀속부서			

      break;
    default:
      await $c.win.alert($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_bankBookCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    ed_bankbookNo.setValue(rtnList[0]); // 통장번호
    ed_bankbookNm.setValue(rtnList[2]); // 통장명
    ed_bankbookNo.options.hidVal = rtnList[0];
  } else {
    ed_bankbookNo.setValue("");
    ed_bankbookNo.options.hidVal = "";
  }
};
scwin.udc_acctDeptCdInfo6_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    ed_acctDeptCd.setValue(rtnList[0]); // 관리부서코드
    ed_acctDeptNm.setValue(rtnList[1]); // 관리부서명
    ed_acctDeptCd.options.hidVal = rtnList[0];
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptCd.options.hidVal = "";
  }
};
scwin.udc_clntList_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    ed_rcptrNm.setValue(rtnList[1]); // 관리부서명
    ed_rcptrNm.options.hidVal = rtnList[0];
  } else {
    ed_rcptrNm.setValue("");
    ed_rcptrNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd.getValue() == orgObjCd.options.hidVal) {
    if (orgObjCd.getValue().trim() == "") {
      orgObjNm.setValue("");
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
      return;
    }
  }
  if (orgObjCd._wTagName.toUpperCase() == "INPUT") {
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code);
    } else {
      orgObjNm.setValue("");
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
  } else if (orgObjCd._wTagName.toUpperCase() == "OBJECT") {
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code);
    } else {
      orgObjNm.setValue("");
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
  }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_companyInfo.cfCommonPopUp(scwin.udc_companyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo("F");
};
scwin.udc_companyInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    ed_coCd.options.hidVal = rtnList[0];
    scwin.txtCoClsCd = rtnList[1];
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isChecked == true) {
    scwin.f_enableCompanyInfo();
  }
  scwin.isChecked = false;
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  }
};
scwin.udc_companyInfo_onviewchangeNameEvent = function (info) {
  ed_coCd.setValue("");
  if (ed_coNm.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  }
};
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_acctDeptCd, ed_acctDeptNm]); //  귀속부서      
  $c.gus.cfInitObjects($p, [ed_sclntNo, ed_sclntNm]); //거래처    
  $c.gus.cfInitObjects($p, [ed_mgntEmpNo, ed_mgntEmpNm]); //사원  
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 enable 처리 
//------------------------------------------------------------------------- 
scwin.f_enableCompanyInfo = function () {
  if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  }
};

//-------------------------------------------------------------------------                                                                                                                                                                                                                                               
// Dataset DEBUG                                                                                                                                                                                                                                                                                                          
//------------------------------------------------------------------------- 
// dataSetDebug = function(dataSet, isDebug){                                                                                                                                                                                                                                                                                  
//     if(isDebug == true){                                                                                                                                                                                                                                                                                                    
//         let obj = dataSet;                                                                                                                                                                                                                                                                                                    
//         let str = "[[[["+ obj.id+"]]]]]\n";                                                                                                                                                                                                                                                                                   
//         for (dsRow = 0; dsRow < obj.getRowCount(); dsRow++){                                                                                                                                                                                                                                                                 
//         for ( let dsCol = 1; dsCol <= obj.CountColumn; dsCol++ ){                                                                                                                                                                                                                                                           
//             str += "["+obj.ColumnId(dsCol)+"] "+obj.getCellData(dsRow, obj.ColumnId(dsCol))+", "                                                                                                                                                                                                                                
//         }                                                                                                                                                                                                                                                                                                                   
//         str += "\n\n";                                                                                                                                                                                                                                                                                                      
//         }                                                                                                                                                                                                                                                                                                                     
//         alert( str );                                                                                                                                                                                                                                                                                                         
//     }                                                                                                                                                                                                                                                                                                                       
// } 

//-------------------------------------------------------------------------
// 엑셀 Download
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_susRecvList.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let fileName = '원화채권정리';
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_susRecvList, {
      fileName: fileName + ".xlsx",
      sheetName: fileName
    });
  }
};

/* //drmFileSubmit명 고정
scwin.drmFileSubmit = function () {
	// let formObj = document.frm ; 
	scwin.f_Upload1();
}

// 엑셀 Upload
scwin.f_Upload1 = function () {
    $c.gus.cfProgressWinOpen();

    ds_excelTemp.removeAll();
    ds_excelData.removeAll();

    const options = {
        status: "C",
        delim: ",",
    };

    $c.data.uploadGridViewCSV("gr_Tmp_UpExcel", options)
        .then(function() {
            scwin.f_upload();
        })
        .catch(function() {
            $c.gus.cfProgressWinClose();
            await $c.win.alert("CSV 업로드 중 오류가 발생했습니다.");
        });
};
   
//-------------------------------------------------------------------------
// function name : f_upload
// function desc : Excel등록
//-------------------------------------------------------------------------
scwin.f_upload = function () {
    let rowCnt = ds_excelData.getRowCount()

    if (rowCnt == 0) {
        $c.gus.cfProgressWinClose();
        await $c.win.alert(MSG_CM_ERR_003);
        return;
    }

    ex_totalRows.setValue(rowCnt)

    $c.gus.cfProgressWinClose();
    $c.win.alert("업로드작업이 완료되었습니다.");
};
 */

//동일한 채권번호 있는지 체크 
scwin.f_acctRecvNoExistCheck = async function () {
  for (i = 0; i < ds_excelData.getRowCount(); i++) {
    for (j = 0; j < ds_excelData.getRowCount(); j++) {
      if (i != j && ds_excelData.getCellData(i, "acctRecvNo") == ds_excelData.getCellData(j, "acctRecvNo")) {
        await $c.win.alert($p, "동일한 채권번호가 존재합니다.  \n채권번호:" + ds_excelData.getCellData(i, "acctRecvNo"));
        return false;
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 수금등록 - 엑셀업로드 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //동일한 채권번호 있는지 체크 
  if (!(await scwin.f_acctRecvNoExistCheck())) {
    return;
  }
  // 필수 입력 여부 Check
  if (!(await $c.gus.cfValidate($p, [ica_wrkDt]))) {
    return;
  }
  // 필수 입력 여부 Check(부서 날짜 검색시 이용됨)
  if (!(await $c.gus.cfValidate($p, [ed_FromDate, ed_ToDate]))) {
    return;
  }
  if (ds_susRecvList.getRowCount() == 0) {
    await $c.win.alert($p, "처리할 내역이 존재하지 않습니다.");
    return;
  }
  if (ds_excelData.getRowCount() == 0) {
    await $c.win.alert($p, "처리할 업로드 내역이 존재하지 않습니다.");
    return;
  }

  //상단 그리드 체크
  let checkCount = 0;
  let selRow = 0;
  let selAmt = 0;
  let selAmtClose = 0;
  for (i = 0; i < ds_susRecvList.getRowCount(); i++) {
    if (ds_susRecvList.getCellData(i, "num") == "T") {
      selRow = i;
      checkCount++;
      selAmt = Number(ds_susRecvList.getCellData(i, "amt")); //선택한 행의 금액
      selAmtClose = Number(ds_susRecvList.getCellData(i, "amtClose")); //선택한 행의 잔액 
    }
  }
  if (checkCount == 0) {
    await $c.win.alert($p, "선택하신 사항이 없습니다.");
    return;
  } else if (checkCount > 1) {
    await $c.win.alert($p, "한개만 선택 하셔야 합니다.");
    return;
  }
  if (selAmtClose == 0) {
    await $c.win.alert($p, "선택한 채권의 잔액이 존재하지 않습니다.");
    return;
  }

  //하단 합계 체크
  let totalSum = 0;
  for (i = 0; i < ds_excelData.getRowCount(); i++) {
    totalSum += Number(ds_excelData.getCellData(i, "amt"));
  }
  if (Number(selAmtClose) < Number(totalSum)) {
    await $c.win.alert($p, "업로드된 채권금액의 합이 가수금 잔액보다 큽니다.");
    return;
  }
  dma_searchSusRecv.set("coClsCd", scwin.txtCoClsCd);
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    //저장하시겠습니까
    //수금등록시 선택된 수금정보관련 및 추가파라미터 셋팅
    dma_addSusRecv.set("iwrkDt", ica_wrkDt.getValue()); //작업일자
    dma_addSusRecv.set("coCd", ds_susRecvList.getCellData(selRow, "coCd"));
    dma_addSusRecv.set("susRecvInitamtOutbrNo", ds_susRecvList.getCellData(selRow, "susRecvInitamtOutbrNo"));
    //기타정보는 key값으로 재조회해서 처리함 
    //dma_addSusRecv.set("coClsCd", ds_susRecvList.getCellData(selRow, "coClsCd"));
    //dma_addSusRecv.set("crcCd", ds_susRecvList.getCellData(selRow, "crcCd")); 
    //dma_addSusRecv.set("exchRt", ds_susRecvList.getCellData(selRow, "exchRt"));  
    //dma_addSusRecv.set("susRecvInitamtOutbrDt", ds_susRecvList.getCellData(selRow, "susRecvInitamtOutbrDt"));
    //dma_addSusRecv.set("acctDeptCd", ds_susRecvList.getCellData(selRow, "acctDeptCd"));
    //dma_addSusRecv.set("amt", ds_susRecvList.getCellData(selRow, "amt")); 
    //dma_addSusRecv.set("summary", ds_susRecvList.getCellData(selRow, "summary")); 
    //dma_addSusRecv.set("susRecvInitamtAcctCd", ds_susRecvList.getCellData(selRow, "susRecvInitamtAcctCd"));//계정코드

    sbm_saveExcel.action = "/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RegistCollectionOfMoneyExcelUploadCMD.do";
    $c.sbm.execute($p, sbm_saveExcel);
  }
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------

scwin.tr_saveExcel_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001);
  ds_excelData.removeAll();
  scwin.f_Retrieve();
};
scwin.gr_susRecvList_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) {
    if (columnId == "num") {
      //체크박스 선택시
      if (ds_susRecvList.getCellData(rowIndex, columnId) == "T") {
        for (i = 0; i < ds_susRecvList.getRowCount(); i++) {
          if (rowIndex != i && ds_susRecvList.getCellData(i, "num") == "T") {
            await $c.win.alert($p, "가수금은 한건만 선택해주세요.");
            ds_susRecvList.setCellData(rowIndex, columnId, "F");
            return;
          }
        }
      }
    }
  }
};
scwin.udc_acctDeptCdInfo6_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '2');
};
scwin.udc_acctDeptCdInfo6_onclickEvent = function (e) {
  scwin.f_openPopUp('2');
};
scwin.udc_bankBookCdInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_bankbookNo, ed_bankbookNm, '1');
};
scwin.udc_bankBookCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('1');
};
scwin.udc_clntList_onclickEvent = function (e) {
  scwin.f_openPopUp('3');
};
scwin.sbm_searchSusRecv_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  // 그리드에서 원화만 조회되도록 하기
  ds_susRecvList.setColumnFilter({
    type: "row",
    colIndex: "crcCd",
    key: "KRW",
    condition: "and",
    exactMatch: true
  });

  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  let rowCnt = ds_susRecvList.getRowCount();
  totalRows.setValue(rowCnt);
  debugger;
  if (rowCnt == 0) {
    ;
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'회사코드',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',objTypeName:'data',mandatoryCode:'true',allowCharCode:'0-9',objTypeCode:'data',maxlengthCode:'3',validExpCode:'회사코드:yes',UpperFlagCode:'1',selectID:'retrieveDongbuGroupCompanyInfo',refDataCollection:'dma_searchSusRecv',code:'coCd',id:'udc_companyInfo',validTitle:'회사코드','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'입금일자 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'fromDate',refDataMap:'dma_searchSusRecv',style:'',id:'udc_cal',refEdDt:'toDate',edFromId:'ed_FromDate',edToId:'ed_ToDate',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data','ev:onBlur':'scwin.udc_cal_onBlur',titleFrom:'입금일자',titleTo:'입금일자'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'입금자명 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'}},{T:1,N:'w2:udc_comCode',A:{class:'',code:'rcptrNm',codeId:'ed_rcptrNm',maxlengthCode:'7',nameId:'',objTypeCode:'Data',objTypeName:'key',popupID:'',refDataCollection:'dma_searchSusRecv',selectID:'retrieveClntList',style:'',hideName:'true',id:'udc_clntList','ev:onclickEvent':'scwin.udc_clntList_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'귀속부서 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_acctDeptCd',mandatoryCode:'true',maxlengthCode:'5',objTypeName:'key',maxlengthName:'20',nameId:'ed_acctDeptNm',refDataCollection:'dma_searchSusRecv',code:'acctDeptCd',selectID:'retrieveAcctDeptCdInfo6',id:'udc_acctDeptCdInfo6','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo6_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCdInfo6_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'통장번호 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_bankbookNo',maxlengthCode:'7',objTypeCode:'Data',nameId:'ed_bankbookNm',objTypeName:'key',refDataCollection:'dma_searchSusRecv',code:'bankbookNo',selectID:'retrieveBankBookCdInfo',id:'udc_bankBookCdInfo','ev:onblurCodeEvent':'scwin.udc_bankBookCdInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bankBookCdInfo_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_search',type:'button',class:'btn_cm sch',escape:'false',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'가수금내역',class:'tit',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_susRecvList',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_susRecvList',focusMode:'cell',id:'gr_susRecvList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',columnMove:'true',dataDragSelect:'false',dataDragSelectAutoScroll:'true','ev:oncellclick':'scwin.gr_susRecvList_oncellclick',readOnly:'true',columnMoveWithFooter:'true',fixedColumn:'3',fixedColumnNoMove:'true',rowStatusVisible:'true',rowStatusWidth:'15'},E:[{T:1,N:'w2:caption',A:{id:'caption13',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'50',value:'선택',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'발생번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'입금일자'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'100',value:'귀속부서'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column29',value:'귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column27',value:'통장번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'입금자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'통화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'금액(원)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'금액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'잔액(원)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'정리금액(원)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'잔액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column15',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'수금예정부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column37',value:'수금예정부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column88',value:'통장번호(저장용)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column85',value:'가수금선수금계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column82',value:'통화코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',value:'환율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column76',value:'가수금선수금상태코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column73',value:'이전가수금선수금상태코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column70',value:'참조가수금선수금발생번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',value:'삭제여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'등록자ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'등록일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column112',value:'수정자ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column109',value:'수정일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column106',value:'작업구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column103',value:'작업일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column100',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column97',value:'귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column94',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column91',value:'CheckBox검사용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column33',value:'가상계좌거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column121',value:'회사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column115',value:'회사구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column118',value:'적요',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'num',inputType:'checkbox',removeBorderStyle:'false',width:'50',falseValue:'F',trueValue:'T',valueType:'other',defaultValue:'F',readOnly:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'susRecvInitamtOutbrNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'susRecvInitamtOutbrDt',inputType:'calendar',removeBorderStyle:'false',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctDeptCd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'acctDeptNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'bankbookNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rcptrNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crcCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'amt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'amtFcrc',displayMode:'label',dataType:'number',displayFormat:'#,##0',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'amtClose',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'orgAmtClose',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'amtFcrcClose',displayMode:'label',dataType:'number',displayFormat:'#,##0',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clear',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'collMoneyIntendAcctDeptCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'collMoneyIntendAcctDeptNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bankbookNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'susRecvInitamtAcctCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col19',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'exchRt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'susRecvInitamtStsCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'oldSusRecvInitamtStsCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'refSusRecvInitamtOutbrNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'delYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regId',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'regDtm',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'modId',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'modDtm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkClsCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'iwrkDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'iclntNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'iacctDeptCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'iamt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'numCheck',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'clntNo1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'coCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'coClsCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'summary',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column50',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column49',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column47',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column46',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM("amt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column57',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("amtFcrc")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column45',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM("amtClose")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column44',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM("orgAmtClose")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column60',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("amtFcrcClose")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column43',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column41',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column90',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column87',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column84',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column78',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column114',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column111',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column108',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column105',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column102',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column99',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column96',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column93',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column123',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column117',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column120',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'엑셀UPLOAD내역',class:'tit',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'작업일자',class:'req'}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_wrkDt',class:'',calendarValueType:'yearMonthDate',mandatory:'true',objType:'data',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',type:'button',class:'btn',objType:'bSave',userAuth:'C','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수금등록'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownYn:'N',gridID:'gr_Tmp_UpExcel',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_excelData',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_Tmp_UpExcel',visibleRowNum:'4',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',columnMove:'true',dataDragSelect:'false',dataDragSelectAutoScroll:'true',columnMoveWithFooter:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column12',value:'채권번호',blockSelect:'false',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column11',value:'금액(원)',blockSelect:'false',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'acctRecvNo',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',width:'70',inputType:'text',id:'amt',blockSelect:'false',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column14',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',style:'',id:'column13',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("amt")'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'ex_totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]}]}]})