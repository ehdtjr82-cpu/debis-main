/*amd /ui/ac/fm/collmoneymgnt/collmoneymgnt/fm_501_01_05b.xml 39505 7d5241e01f4b7dccef56f02ed22f12bbee25a58d1624eb67c13fb9548a87264b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_excel',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'lowerClnt',name:'거래처 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lowerClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'repClnt',name:'대표거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_repClnt',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_repClnt_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'repClnt',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lowerClnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lowerClnt',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lowerClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClnt',name:'대표거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveRepClnt',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_lowerClnt","key":"OUT_DS1"}',target:'data:json,{"id":"ds_lowerClnt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveRepClnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'',method:'get',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_repClnt","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveRepClnt',action:'/ac.fm.collmoneymgnt.collmoneymgnt.SaveRepresentationCustomerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_repClnt","key":"IN_DS1"},{"id":"ds_lowerClnt","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveRepClnt_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'ACConstants',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//환경변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.vLoginCoCd = scwin.login.coCd; // 소속 자회사  
scwin.vLoginCoClsCd = scwin.login.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd; // 사용자소속구분코드 
scwin.isSubCompany = false;
scwin.txtCoClsCd = "";
scwin.isSearch = false;
scwin.isChecked = true;

//-------------------------------------------------------------------------                                                                                                                                                                                                                                               
// Dataset DEBUG   //사용안함
//-------------------------------------------------------------------------     

// function dataSetDebug(dataSet, isDebug){                                                                                                                                                                                                                                                                                  
// if(isDebug == true){                                                                                                                                                                                                                                                                                                    
//     let obj = dataSet;                                                                                                                                                                                                                                                                                                    
//     let str = "[[[["+ obj.id+"]]]]]\n";                                                                                                                                                                                                                                                                                   
//     for (let dsRow = 1; dsRow <= obj.CountRow; dsRow++ ){                                                                                                                                                                                                                                                                 
//     for ( let dsCol = 1; dsCol <= obj.CountColumn; dsCol++ ){                                                                                                                                                                                                                                                           
//         str += "["+obj.ColumnId(dsCol)+"] "+obj.NameValue(dsRow, obj.ColumnId(dsCol))+", "                                                                                                                                                                                                                                
//     }                                                                                                                                                                                                                                                                                                                   
//     str += "\n\n";                                                                                                                                                                                                                                                                                                      
//     }                                                                                                                                                                                                                                                                                                                     
//     alert( str );                                                                                                                                                                                                                                                                                                         
// }                                                                                                                                                                                                                                                                                                                       
// }    

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  gr_excel.hide();
};
scwin.onUdcCompleted = function () {
  udc_clntList1.hide();
  udc_clntList2.hide();
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 회계 거래처 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  scwin.isSearch = true;
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return;
  let condition = "";
  condition = "?" + "repClnt=" + ed_clntNo.getValue() + "&coCd=" + ed_coCd.getValue();
  sbm_Retrieve.action = "/ac.fm.collmoneymgnt.collmoneymgnt.RetrieveRepresentationCustomerListCMD.do" + condition;
  $c.sbm.execute($p, sbm_Retrieve);
};

//-------------------------------------------------------------------------
// 대표거래처 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveRepClnt = function (rowIndex) {
  sbm_RetrieveRepClnt.action = "/ac.fm.collmoneymgnt.collmoneymgnt.RetrieveLowerCustomerListCMD.do?repClnt=" + ds_repClnt.getCellData(rowIndex, "repClnt");
  $c.sbm.execute($p, sbm_RetrieveRepClnt);
};
scwin.gr_gridView1_oncellclick = function (rowIndex, columnIndex, columnId) {};

//-------------------------------------------------------------------------
// 대표거래처 신규
//-------------------------------------------------------------------------
scwin.f_AddRow1 = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return;
  // 대표거래처 필수항목 체크
  if (!(await $c.gus.cfValidate($p, [gr_repClnt]))) {
    return;
  }
  if (!scwin.isSearch) {
    return;
  }
  let rowIndex = ds_repClnt.insertRow();
  gr_repClnt.setFocusedCell(rowIndex, 0);
};

//-------------------------------------------------------------------------
// 하위거래처 신규
//-------------------------------------------------------------------------
scwin.f_AddRow2 = async function () {
  // 하위거래처 필수항목 체크
  if (!(await $c.gus.cfValidate($p, [gr_lowerClnt]))) {
    return;
  }
  let lowerClntRowPos = ds_lowerClnt.insertRow();
  ds_lowerClnt.setCellData(lowerClntRowPos, "repClnt", ds_repClnt.getCellData(ds_repClnt.getRowPosition(), "repClnt"));
  ds_lowerClnt.setCellData(lowerClntRowPos, "delYn", "0");
  let colIdx = gr_lowerClnt.getFocusedColumnIndex();
  gr_lowerClnt.setFocusedCell(lowerClntRowPos, colIdx);
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------

scwin.f_delMarked2 = function () {
  let rowPosition = ds_lowerClnt.getRowPosition();
  ds_lowerClnt.setCellData(rowPosition, "delYn", 1);
};

//-------------------------------------------------------------------------
// 일괄삭제
//-------------------------------------------------------------------------
scwin.f_AllDelMarked = function () {
  $c.data.undoAll($p, ds_lowerClnt);
  totalRow = ds_lowerClnt.getTotalRow();
  scwin.prevIdx = ds_lowerClnt.getRowPosition();
  let rowIndexArray = [];
  for (let i = 0; i < totalRow; i++) {
    rowIndexArray.push(i);
  }
  ds_lowerClnt.deleteRows(rowIndexArray);
  gr_lowerClnt.setFocusedCell(scwin.prevIdx, 0);
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_Undo1 = function () {
  $c.data.undoRow($p, ds_repClnt, 'Y');
};
scwin.f_Undo2 = function () {
  if (ds_lowerClnt.getRowStatus(ds_lowerClnt.getRowPosition())) {
    $c.data.undoRow($p, ds_lowerClnt, 'Y');
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다. 

  if (ds_repClnt.getModifiedIndex().length == 0 && ds_lowerClnt.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }

  // // 대표거래처 필수항목 체크
  // if(! await $c.gus.cfValidate([gr_repClnt])){
  // return;
  // }

  // // 하위거래처 필수항목 체크
  // if(! await $c.gus.cfValidate([gr_lowerClnt])){
  // return;
  // }

  // 저장시 삭제안된 같은 거래처가 있는지 체크, 20090908 하성훈	
  const total = ds_lowerClnt.getRowCount();
  for (let k = 0; k < total - 1; k++) {
    for (let i = k + 1; i < total; i++) {
      const statusK = ds_lowerClnt.getRowStatus(k);
      const statusI = ds_lowerClnt.getRowStatus(i);
      if (statusK !== "R" || statusI !== "R") {
        const delYnK = ds_lowerClnt.getCellData(k, "delYn");
        const delYnI = ds_lowerClnt.getCellData(i, "delYn");
        const lowerClntK = ds_lowerClnt.getCellData(k, "lowerClnt");
        const lowerClntI = ds_lowerClnt.getCellData(i, "lowerClnt");
        if (delYnK == 0 && delYnI == 0 && lowerClntK == lowerClntI) {
          await $c.win.alert($p, "삭제안된 중복된 거래처가 있습니다.");
          ds_lowerClnt.setRowPosition(k);
          return;
        }
      }
    }
  }

  // 저장확인 
  if ((await $c.win.confirm($p, "저장하시겠습니까?")) == true) {
    $c.sbm.execute($p, sbm_saveRepClnt);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->부서
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.udc_clntList_onclickEvent = function (e) {
  let clntNo = ed_clntNo.getValue();
  let clntNm = ed_clntNm.getValue();
  scwin.f_openPopUp(clntNo, clntNm);
};
scwin.f_openPopUp = async function (clntNo, clntNm) {
  let sCode = clntNo;
  let sName = clntNm;
  let param = ",,," + ed_coCd.getValue();
  udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, sCode, sName, "F", null, null, null, null, param, null, null, null, null, null, "T");
};
scwin.f_ClntChanged = function (clntNo, clntNm) {
  // 거래처코드 입력창을 지운다
  // clntNm.setValue("");

  // 거래처명를 가져온다.
  let sCode = clntNo.getValue().trim();
  let sName = clntNm.getValue().trim();
  let param = ",,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항 	
  //if( sName.length > 0)
  //{

  // 조회결과가 하나면 값을 리턴하고 아니면 조회창을 띄운다.
  udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, sCode, sName, "T", null, null, null, null, param, null, null, null, null, null, "T");

  // 조회 결과값을 셋팅한다.
  // $c.gus.cfSetReturnValue(aResult, ed_clntNo, ed_clntNm);	
  //}
};
scwin.f_ClntCdChanged = function (clntNo, clntNm) {
  // 거래처코드 입력창을 지운다
  clntNm.setValue("");

  // 거래처명를 가져온다.
  let sCode = clntNo.getValue().trim();
  let param = ",,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항 	
  if (sCode.length > 0) {
    // 조회결과가 하나면 값을 리턴하고 아니면 조회창을 띄운다.
    udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, sCode, '', "T", null, null, null, null, param, null, null, null, null, null, "T");

    // 조회 결과값을 셋팅한다.
    // $c.gus.cfSetReturnValue(aResult, ed_clntNo, ed_clntNm);	
  }
};
scwin.f_ClntNmChanged = function (clntNo, clntNm) {
  // 거래처코드 입력창을 지운다
  clntNo.setValue("");

  // 거래처명를 가져온다.
  let sName = clntNm.getValue().trim();
  let param = ",,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항 	
  if (sName.length > 0) {
    // 조회결과가 하나면 값을 리턴하고 아니면 조회창을 띄운다.
    udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, '', sName, "T", null, null, null, null, param, null, null, null, null, null, "T");

    // 조회 결과값을 셋팅한다.
    // $c.gus.cfSetReturnValue(aResult, ed_clntNo, ed_clntNm);
  }
};
scwin.udc_clntList_onviewchangeCodeEvent = function (info) {
  ed_clntNm.setValue("");
  if (ed_clntNo.getValue() != "") {
    scwin.f_ClntCdChanged(ed_clntNo, ed_clntNm);
  }
};
scwin.udc_clntList_onviewchangeNameEvent = function (info) {
  ed_clntNo.setValue("");
  if (ed_clntNm.getValue != "") {
    scwin.f_ClntNmChanged(ed_clntNo, ed_clntNm);
  }
};
scwin.udc_clntList_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntNo.setValue(rtnList[0]);
    ed_clntNm.setValue(rtnList[1]);
    ed_clntNo.options.hidVal = rtnList[0];
    ed_clntNm.options.hidVal = rtnList[1];
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
    ed_clntNo.options.hidVal = "";
    ed_clntNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// GRID거래처팝업( 대표거래처 )
//-------------------------------------------------------------------------

scwin.f_openClntPopUp = function () {
  let rtnList = new Array();
  let param = ",,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항 
  rtnList = udc_clntList1.cfCommonPopUp(scwin.udc_clntList1_callBackFunc, '', '', "T", null, null, null, "3,4,5,6,7,8,9,10", param, null, null, null, null, null, null, null); //  은행
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_clntList1_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    let repClntRowPosi = ds_repClnt.getRowPosition();
    ds_repClnt.setCellData(repClntRowPosi, "repClnt", rtnList[0]); //거래처코드
    ds_repClnt.setCellData(repClntRowPosi, "repClntNm", rtnList[1]); //거래처명
  }
};

//-------------------------------------------------------------------------
// GRID거래처팝업( 하위거래처 )
//-------------------------------------------------------------------------

scwin.f_openLowerClntPopUp = function () {
  let rtnList = new Array();
  let param = ",,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항 
  rtnList = udc_clntList2.cfCommonPopUp(scwin.udc_clntList2_callBackFunc, '', '', "T", null, null, null, "3,4,5,6,7,8,9,10", param, null, null, null, null, null, null, null); //  은행
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_clntList2_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    let repClntRowPosi = ds_lowerClnt.getRowPosition();
    ds_lowerClnt.setCellData(repClntRowPosi, "lowerClnt", rtnList[0]); //거래처코드
    ds_lowerClnt.setCellData(repClntRowPosi, "lowerClntNm", rtnList[1]); //거래처명
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
// 연결된 이벤트 존재하지 않음.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd.getValue() == orgObjCd.options.hidVal) {
    if (orgObjCd.getValue().trim() == "") {
      orgObjNm.setValue("");
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
    return;
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
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
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

//-------------------------------------------------------------------------
// 회사 변경시 이벤트 
//-------------------------------------------------------------------------

scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_clntNo, ed_clntNm]); //거래처     
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
// script
//-------------------------------------------------------------------------
scwin.sbm_saveRepClnt_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  } else {
    await $c.win.alert($p, MSG_CM_INF_001);
    scwin.f_RetrieveRepClnt(ds_repClnt.getRowPosition());
  }
};
scwin.sbm_Retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_repClnt.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
    ed_clntNo.forcus;
    totalRows.setValue(rowCnt);
    scwin.onUdcCompleted();
  } else {
    totalRows.setValue(rowCnt);
    gr_repClnt.setFocusedCell(0, 0, true);
    scwin.f_RetrieveRepClnt(0);
  }
};
scwin.sbm_RetrieveRepClnt_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_lowerClnt.getRowCount();
  totalRows2.setValue(rowCnt);
  gr_lowerClnt.setFocusedCell(0, 0, true);
};
scwin.gr_repClnt_ontextimageclick = function (rowIndex, columnIndex) {
  scwin.f_openClntPopUp();
};
scwin.gr_lowerClnt_ontextimageclick = function (rowIndex, columnIndex) {
  scwin.f_openLowerClntPopUp();
};
scwin.ds_repClnt_onrowpositionchange = function (info) {
  scwin.f_RetrieveRepClnt(info.newRowIndex);
};
scwin.upload = async function (e) {
  let options = {};
  if (excelUdc.getUpExt() == "1") {
    // csv
    options = {
      "header": 1,
      "type": "1",
      "startRowIndex": 0,
      "footerExist": 0,
      "fileName": "gridDataUpload.csv"
    };
  } else {
    // 엑셀
    options = {
      "headerExist": 1,
      "type": "1",
      "startRowIndex": 0,
      "footerExist": 0,
      "fileName": "gridDataUpload.xlsx"
    };
  }

  // $c.data.uploadGridViewExcel(gr_excel, options);
  excelUdc.uploadGridViewExcel(gr_excel, options);
};
scwin.gr_lowerClnt_onfilereadend = function (value) {
  ds_lowerClnt.setJSON([]);
  for (let i = 0; i < ds_excel.getRowCount(); i++) {
    let idx = ds_lowerClnt.insertRow();
    ds_lowerClnt.setCellData(idx, "seq", ds_excel.getCellData(i, "seq"));
    ds_lowerClnt.setCellData(idx, "lowerClnt", ds_excel.getCellData(i, "lowerClnt"));
    ds_lowerClnt.setCellData(idx, "lowerClntNm", ds_excel.getCellData(i, "lowerClntNm"));
    ds_lowerClnt.setCellData(idx, "delYn", ds_excel.getCellData(i, "delYn"));
    ds_lowerClnt.setCellData(idx, "repClnt", ds_excel.getCellData(i, "repClnt"));
    ds_lowerClnt.setCellData(idx, "crn", ds_excel.getCellData(i, "crn"));
  }
  totalRows2.setValue(ds_lowerClnt.getRowCount());
  ds_excel.setJSON([{}]);
  $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다.");
};
scwin.customBizNoFm = function (data, formattedData, rowIndex, colIndex) {
  if (!data) return "";
  let num = data;
  if (num.length === 0) return "";
  if (num.length > 12) {
    num = num.substring(0, 13);
  }
  if (num.length >= 5) {
    return num.substring(0, 3) + "-" + num.substring(3, 5) + "-" + num.substring(5, 10);
  } else if (num.length >= 3) {
    return num.substring(0, 3) + "-" + num.substring(3);
  }
  return num;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'회사코드',popupTitle:'',nameId:'ed_coNm',style:'',btnId:'btn_company',code:'coCd',id:'udc_companyInfo',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'3',objTypeCode:'data',UpperFlagCode:'1',validExpCode:'회사코드:yes',objTypeName:'data','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'',popupTitle:'',selectID:'retrieveClntList',style:'',validTitle:'',id:'udc_clntList','ev:onclickEvent':'scwin.udc_clntList_onclickEvent',mandatoryCode:'false',maxlengthCode:'6',maxlengthName:'50',mandatoryName:'false',allowCharCode:'0-9','ev:onviewchangeCodeEvent':'scwin.udc_clntList_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntList_onviewchangeNameEvent',code:'lowerClnt',name:'lowerClntNm'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'대표거래처 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_repClnt',id:'gr_repClnt',style:'',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'15',editModeEvent:'ondblclick','ev:ontextimageclick':'scwin.gr_repClnt_ontextimageclick',visibleRowNum:'14',focusMode:'cell',editModeEventIcon:'ondblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'거래처번호',width:'130',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'사업자번호',width:'130'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'repClnt',inputType:'textImage',style:'',value:'',width:'130',viewType:'icon',maxLength:'6',allowChar:'0-9',mandatory:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'repClntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',style:'',value:'',width:'130',maxLength:'13',applyFormat:'display',displayFormatter:'scwin.customBizNoFm'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',btnCancelYn:'Y',style:'',rowAddFunction:'scwin.f_AddRow1',gridID:'gr_repClnt',btnRowAddYn:'Y',btnRowDelYn:'N',rowDelFunction:'scwin.f_Undo1',rowAddUserAuth:'C',cancelUserAuth:'D'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'하위거래처 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_lowerClnt',gridDownYn:'N',gridUpFn:'scwin.upload',btnUser:'N',id:'excelUdc'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_lowerClnt',id:'gr_lowerClnt',style:'',visibleRowNumFix:'true',rowNumVisible:'false',rowStatusVisible:'true',rowStatusWidth:'15',editModeEvent:'ondblclick',editModeEventIcon:'ondblclick','ev:ontextimageclick':'scwin.gr_lowerClnt_ontextimageclick',visibleRowNum:'14',focusMode:'cell'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'거래처번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'사업자번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'삭제여부',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',value:'',displayMode:'label',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lowerClnt',inputType:'textImage',style:'',value:'',width:'130',viewType:'icon',mandatory:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lowerClntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',style:'',value:'',width:'130',maxLength:'13',displayFormatter:'scwin.customBizNoFm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'delYn',inputType:'select',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_excel',editModeEvent:'ondblclick',editModeEventIcon:'ondblclick','ev:onfilereadend':'scwin.gr_lowerClnt_onfilereadend',focusMode:'cell',id:'gr_excel',rowNumVisible:'false',style:'visibility: hidden;',visibleRowNum:'14',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'순번',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'거래처번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'삭제여부',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'대표거래처',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column20',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{defaultValue:'0',displayMode:'label',id:'seq',inputType:'text',readOnly:'true',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lowerClnt',inputType:'text',mandatory:'true',readOnly:'true',style:'',value:'',viewType:'icon',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lowerClntNm',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.customBizNoFm',displayMode:'label',id:'delYn',inputType:'text',maxLength:'13',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{allOption:'',chooseOption:'',displayMode:'label',id:'repClnt',inputType:'text',ref:'',style:'',value:'',width:'100'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'coCd',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',btnDelYn:'N',style:'',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddFunction:'scwin.f_AddRow2',gridID:'gr_lowerClnt',cancelFunction:'scwin.f_Undo2',rowDelFunction:'scwin.f_delMarked2',cancelUserAuth:'D',rowDelUserAuth:'D',delUserAuth:'D',rowAddUserAuth:'C'}},{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_trigger12',label:'삭제',style:'',type:'button','ev:onclick':'scwin.f_AllDelMarked',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄삭제'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',codeId:'',id:'udc_clntList1',mandatoryCode:'false',mandatoryName:'false',maxlengthCode:'6',maxlengthName:'50',nameId:'',popupID:'',popupTitle:'',selectID:'retrieveClntList',style:'visibility: hidden;',validTitle:''}},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',codeId:'',id:'udc_clntList2',mandatoryCode:'false',mandatoryName:'false',maxlengthCode:'6',maxlengthName:'50',nameId:'',popupID:'',popupTitle:'',selectID:'retrieveClntList',style:'visibility: hidden;',validTitle:''}}]}]}]}]}]})