/*amd /ui/cm/bc/clnt/clntmgnt/zz_210_05_01b.xml 45583 c4fc2cfffa27d997867aaea6134dc74d43588c77f83b4f0deee151754c8741dd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_customerD',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDt',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regSeq',name:'등록순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록아이디',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'내용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntStatCd',name:'거래처상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileNm',name:'첨부문서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tableClsCd',name:'테이블구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_customer',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_customer_onrowpositionchange','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'대표자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClsCd',name:'등록구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtFileNm',name:'첨부문서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtType',name:'매입계약서종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtFromDt',name:'계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'아이디',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_customer'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'corRegNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mcomPicEmpNo',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_customerD'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_customer',action:'/cm.bc.clnt.clntmgnt.RetrieveCustomerInfoListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_customer',target:'data:json,{"id":"ds_customer","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_customerD',action:'/cm.bc.clnt.clntmgnt.RetrieveCustomerDetailInfoListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_customerD',target:'data:json,{"id":"ds_customerD","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Save',action:'/cm.bc.clnt.clntmgnt.SaveCustomerDetailInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_customerD","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 거래처: 306197

// 참고화면
// zz_690_01_06b_2.xml
// zz_690_01_06p_2.xml

scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId;
scwin.userNm = scwin.memJson.userNm;

//------------------------------------------------------------------------------------------
// 버튼이벤트(초기화,조회후,신규,수정,저장,삭제) 선택에 따른. 입력항목,버튼상태 설정, Start
//------------------------------------------------------------------------------------------
scwin.f_EventInit = function () {
  // $c.gus.cfEnableObjects([btn_AddRow]);
  // $c.gus.cfEnableObjects([btn_CanRow]);
  // $c.gus.cfEnableObjects([btn_DelRow]);
  $c.gus.cfDisableObjects($p, [btn_save]);
};
scwin.f_EventSearch = function () {
  // $c.gus.cfEnableObjects([btn_AddRow]);
  // $c.gus.cfEnableObjects([btn_CanRow]);
  // $c.gus.cfEnableObjects([btn_DelRow]);
  udc_bttomGrdBtn.getChildren()[0].getChildren()[0].getChildren()[0].setDisabled(false);
  udc_bttomGrdBtn.getChildren()[0].getChildren()[0].getChildren()[1].setDisabled(false);
  udc_bttomGrdBtn.getChildren()[0].getChildren()[0].getChildren()[3].setDisabled(false);
  $c.gus.cfEnableObjects($p, [btn_save]);
};
scwin.onpageload = function () {};

// UDC에 값 세팅 방법
// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  scwin.f_EventInit();
  udc_bttomGrdBtn.getChildren()[0].getChildren()[0].getChildren()[0].setDisabled(true);
  udc_bttomGrdBtn.getChildren()[0].getChildren()[0].getChildren()[1].setDisabled(true);
  udc_bttomGrdBtn.getChildren()[0].getChildren()[0].getChildren()[3].setDisabled(true);
  // gr_customer.TitleHeight = "20";
  // gr_customerD.TitleHeight = "20";
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
};

//-------------------------------------------------------------------------
// 거래처 정보 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ed_corRegNo.getValue() == "" && ed_crn.getValue() == "" && txt_clntNo.getValue() == "" && mcomPicEmpNo.getValue() == "") {
    $c.win.alert($p, "법인번호, 사업자번호, 등록자, 거래처 중 하나의 조건을 반드시 입력 하십시오");
    return;
  }

  // var condition = "?";

  // condition += "&clsCd=" + lc_clsCd.getValue();
  // condition += "&bizClsCd=" + lc_bizClsCd.getValue();
  // condition += "&corRegNo=" + ed_corRegNo.getValue();
  // condition += "&crn=" + ed_crn.getValue();
  // condition += "&clntNo=" + txt_clntNo.getValue();
  // condition += "&mcomPicEmpNo=" + mcomPicEmpNo.getValue();

  // ds_customer.DataID = "/cm.bc.clnt.clntmgnt.RetrieveCustomerInfoListCMD.do" + condition;
  // ds_customer.Reset();

  // ds_customer -> dma_customer ds_customer를 그리드에 사용하고 있어 dma로 변경하였음
  dma_customer.set("clsCd", lc_clsCd.getValue());
  dma_customer.set("bizClsCd", lc_bizClsCd.getValue());
  dma_customer.set("corRegNo", ed_corRegNo.getValue());
  dma_customer.set("crn", ed_crn.getValue());
  dma_customer.set("clntNo", txt_clntNo.getValue());
  dma_customer.set("mcomPicEmpNo", mcomPicEmpNo.getValue());
  await scwin.submitExcute(sbm_customer);
};

//-------------------------------------------------------------------------
//거래처 이력 조회
//-------------------------------------------------------------------------
scwin.f_retrieveDetail = async function () {
  let dataVal = "";
  if (ds_customer.rowPosition != null) {
    dataVal = ds_customer.getCellData(ds_customer.rowPosition, "clntNo");
    dma_customerD.set("clntNo", dataVal);
    await scwin.submitExcute(sbm_customerD);
  }
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = function () {
  if (ds_customer.getTotalRow() == 0) {
    $c.win.alert($p, "조회된 거래처 전체 정보가 없습니다.");
    return;
  }
  let sheetTitle = "거래처 전체 정보";
  if (ds_customer.getTotalRow() > 0) {
    // cfGridToExcel(gr_customer, '거래처 전체 정보', 'C:\\거래처 전체 정보.xls', 1 + 4 + 8 + 16);
    const grdObj = gr_customer;
    const infoArr = [];
    const options = {
      fileName: sheetTitle + ".xlsx",
      //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      sheetName: sheetTitle
    };
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};

//-------------------------------------------------------------------------
// 엑셀 출력2
//-------------------------------------------------------------------------
scwin.f_Excel2 = function () {
  if (ds_customerD.getTotalRow() == 0) {
    $c.win.alert($p, "조회된 거래처 이력이 없습니다.");
    return;
  }
  let sheetTitle = "거래처 이력";
  if (ds_customerD.getTotalRow() > 0) {
    // cfGridToExcel(gr_customerD, '거래처 이력','C:\거래처 이력.xls', 1+4+8+16 );	 

    const grdObj = gr_customerD;
    const infoArr = [];
    const options = {
      fileName: "거래처 이력.xlsx",
      //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      sheetName: sheetTitle
    };
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};

// 담당자 (등록자) 돋보기 클릭 이벤트
scwin.udc_registerer_onclickEvent = function (e) {
  scwin.f_openEmpPopUp();
};

//-------------------------------------------------------------------------
// 담당자 팝업 (등록자?)
//-------------------------------------------------------------------------
scwin.f_openEmpPopUp = function () {
  var rtnList = new Array();
  rtnList = udc_registerer.cfCommonPopUp(scwin.udc_registerer_callBackFunc, mcomPicEmpNo.getValue(), empNm.getValue(), "T", null, null, "100,100,0,130", "3,5,6,7,8,9,10", null, null, null, null, null, null, null, null, null); //  사원코드
};

// 등록자 팝업 콜백함수
scwin.udc_registerer_callBackFunc = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return false;
    }
    mcomPicEmpNo.setValue(rtnList[0]); //담당자 번호
    empNm.setValue(rtnList[1]); //담당자 명
  } else {
    mcomPicEmpNo.setValue("");
    empNm.setValue("");
  }
};

// 거래처 팝업 돋보기 클릭 이벤트
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_openClntPopUp();
};

//-------------------------------------------------------------------------
// 거래처 팝업
//-------------------------------------------------------------------------
scwin.f_openClntPopUp = function () {
  var rtnList = new Array();
  rtnList = udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc, txt_clntNo.getValue(), txt_clntNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null); // 거래처
};

// 거래처 팝업 콜백함수
scwin.udc_clnt_callBackFunc = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return false;
    }
    txt_clntNo.setValue(rtnList[0]); //거래처번호
    txt_clntNm.setValue(rtnList[1]); //거래처명
  } else {
    txt_clntNo.setValue("");
    txt_clntNm.setValue("");
  }
};

// 거래처 코드 변경시 이벤트
scwin.udc_clnt_onviewchangeCodeEvent = function (info) {
  scwin.f_customerCdChk('Cd');
};

// 거래처명 변경시 이벤트
scwin.udc_clnt_onviewchangeNameEvent = function (info) {
  scwin.f_customerCdChk('Nm');
};

//-------------------------------------------------------------------------
// 거래처 밸류 체크
//-------------------------------------------------------------------------
scwin.f_customerCdChk = function (calVal) {
  var rtnList = new Array();
  var clntNo = txt_clntNo.getValue();
  var clntNm = txt_clntNm.getValue();
  if (calVal == 'Cd') {
    txt_clntNm.setValue("");
    if (clntNo.length > 0) {
      rtnList = udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc, clntNo, '', 'T', null, null, null, null, null, null, null, null, null);
      // 조회 결과값을 셋팅한다.	
      // cfSetReturnValue(rtnList, txt_clntNo, txt_clntNm);
    }
  } else if (calVal == 'Nm') {
    txt_clntNo.setValue("");
    if (clntNm.length > 0) {
      rtnList = udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc, '', clntNm, 'T', null, null, null, null, null, null, null, null, null);
      // 조회 결과값을 셋팅한다.	
      // cfSetReturnValue(rtnList, txt_clntNo, txt_clntNm);
    }
  }
};

// 사업자 번호 돋보기 클릭 이벤트
scwin.udc_bizNum_onclickEvent = function (e) {
  scwin.f_openCrnPopUp();
};

//-------------------------------------------------------------------------
// 사업자 번호 팝업
//-------------------------------------------------------------------------
scwin.f_openCrnPopUp = function () {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면             
  rtnList = udc_bizNum.cfCommonPopUp(
  //'retrieveCrnInfo'
  scwin.udc_bizNum_callBackFunc // 20121026 by kimseok 폐업된 사업자 번호도 조회가능하게 신규 쿼리 생성 
  , ed_crn.getValue(), txt_busiNm.getValue(), 'F', null, null, null, null, null, null, null, null, null);
  // cfSetReturnValue(rtnList, ed_crn, txt_busiNm);
};

// 사업자 번호 팝업 콜백함수
scwin.udc_bizNum_callBackFunc = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_crn, txt_busiNm);
};

//-------------------------------------------------------------------------
// function name : f_chkOpenPopUp
// function desc : 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
// function Parameter : inObj : 코드값, pairObj : 코드명, isCode : 코드구분(코드, 명칭)
//-------------------------------------------------------------------------
// 사업자 번호 밸류 체크 이벤트?
scwin.f_chkCrnPopUp = function (calVal) {
  var rtnList = new Array();
  var crnNo = ed_crn.getValue();
  var crnNm = txt_busiNm.getValue();
  if (calVal == 'Cd') {
    txt_busiNm.setValue("");
    if (crnNo.length > 0) {
      rtnList = cfCommonPopUp(scwin.udc_bizNum_callBackFunc, crnNo, '', 'F', null, null, null, null, null, null, null, null, null);
      // 조회 결과값을 셋팅한다.	
      // cfSetReturnValue(rtnList, ed_crn, txt_busiNm);
    }
  } else if (calVal == 'Nm') {
    ed_crn.setValue("");
    if (crnNm.length > 0) {
      rtnList = cfCommonPopUp(scwin.udc_bizNum_callBackFunc, '', crnNm, 'F', null, null, null, null, null, null, null, null, null);
      // 조회 결과값을 셋팅한다.	
      // cfSetReturnValue(rtnList, ed_crn, txt_busiNm);
    }
  }
};

// 사업자 코드 변경시 이벤트
scwin.udc_bizNum_onviewchangeCodeEvent = function (info) {
  scwin.f_chkCrnPopUp('Cd');
};

// 사업자명 변경시 이벤트
scwin.udc_bizNum_onviewchangeNameEvent = function (info) {
  scwin.f_chkCrnPopUp('Nm');
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_detailAddRow = function () {
  //setFileHeader();
  ds_customerD.insertRow();
  let customerDcnt = ds_customerD.getTotalRow();
  let clntNoVal = ds_customer.getCellData(gr_customer.getFocusedRowIndex(), "clntNo");
  ds_customerD.setCellData(customerDcnt - 1, "clntNo", clntNoVal);
  ds_customerD.setCellData(customerDcnt - 1, "regId", scwin.userId);
  ds_customerD.setCellData(customerDcnt - 1, "empNm", scwin.userNm);
  gr_customerD.setFocusedCell(customerDcnt - 1, gr_customer.getFocusedColumnIndex());
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_detailDelete = function (row) {
  debugger;
  row = gr_customerD.getFocusedRowIndex();
  if (ds_customerD.getCellData(row, "tableClsCd") == "B") {
    $c.win.alert($p, "거래처관리 화면에서 등록한 이력은 삭제할 수 없습니다.");
    return;
  }
  ;
  $c.data.deleteRow($p, gr_customerD);
};
scwin.f_cancel = async function () {
  let rowPos = ds_customerD.getRowPosition();
  // 행 신규 추가 2 / 이미 등록된 0
  let rowStatus = ds_customerD.getRowStatusValue(rowPos);
  let row = gr_customerD.getFocusedRowIndex();
  if (rowStatus == 2) {
    ds_customerD.removeRow(row);
    ds_customerD.deleteRow(row);
  } else {
    ds_customerD.undoRow(row);
  }
};

// as-is undo 를 함수로 만들어서 사용
scwin.f_Delete = async function () {
  let row = gr_customerD.getFocusedRowIndex();
  ds_customerD.removeRow(row);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  debugger;
  if (!ds_customerD.getModifiedIndex().length) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  let validVal = await $c.gus.cfValidate($p, [gr_customerD], null, true);
  if (!validVal) return;
  if (ds_customerD.getCellData(ds_customerD.rowPosition, "fileNm") != "") {
    if (ds_customerD.getCellData(ds_customerD.rowPosition, "filePath") == "") {
      $c.win.alert($p, "첨부문서를 등록 하세요");
      return;
    }
  }
  let messageStr = MSG_CM_CRM_001;
  let retVal = await $c.win.confirm($p, messageStr);
  if (retVal) {
    await scwin.submitExcute(sbm_Save);
  }
};

//-------------------------------------------------------------------------
// function desc :  파일 첨부하기
//-------------------------------------------------------------------------    
scwin.f_fileSet = async function () {
  debugger;
  var argObject = {};
  argObject.contractFileNm = ds_customerD.getCellData(ds_customerD.rowPosition, "fileNm");
  argObject.contractFilePath = ds_customerD.getCellData(ds_customerD.rowPosition, "filePath");

  // var argPath = "";
  // var dialSize = "";
  // argPath = "./zz_210_02_02p_1.xml";
  // dialSize = "dialogWidth:650px; dialogHeight:250px; status:no; scroll:yes";
  // var resultList = window.showModalDialog(argPath, argObject, dialSize);

  let v_url = "/ui/cm/bc/clnt/clntmgnt/zz_210_02_02p_1.xml";
  let opts = {
    id: "pupup",
    popupName: "첨부파일 등록",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 500,
    popupTitle: "거래처정보조회 계약서등록"
  };
  let resultList = await $c.win.openPopup($p, v_url, opts, argObject);
  if (resultList != null) {
    if (resultList[0] != "" && resultList[0] != "undefined") {
      ds_customerD.setCellData(ds_customerD.rowPosition, "fileNm", resultList[1]);
      ds_customerD.setCellData(ds_customerD.rowPosition, "filePath", resultList[0]);
    }
  }
};

// for="gr_customerD" event="OnPopup(row,colid,data)
scwin.fileNm_popup = function (row, colid) {
  if (ds_customerD.getCellData(row, "tableClsCd") != "B") {
    if (colid == "fileNm" && row >= 0) {
      scwin.f_fileSet();
    }
    // if (colid == "regDt") {
    //     cfOpenCalendar(gr_customerD, row, colid);
    // }
  }
};

//-------------------------------------------------------------------------
// function name : f_Download
//-------------------------------------------------------------------------
scwin.f_Download = async function (row) {
  if (row < 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["첨부파일 행"]);
    return;
  } else {
    var fileName = ds_customerD.getCellData(row, "fileNm");
    var filePath = ds_customerD.getCellData(row, "filePath");
    if (filePath.trim().length == 0) {
      await $c.win.alert($p, "선택하신 " + (row + 1) + "행에 파일이 등록되어 있지 않습니다.");
    } else {
      if (filePath.indexOf(".") > 0) {
        fileName += filePath.substring(filePath.indexOf("."), filePath.indexOf(".") + 4);
        await $c.gus.cfDownloadFile($p, fileName, filePath);
      }
    }
  }
};
scwin.sbm_Save_submitdone = async function (e) {
  debugger;
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

// 상단 그리드 조회 완료 이벤트
// for=ds_customer event=OnLoadCompleted(rowCnt)
scwin.sbm_customer_submitdone = async function (e) {
  let rowCnt = gr_customer.getTotalRow();
  totalRows.setValue(rowCnt);
  gr_customer.setFocusedCell(0, "clntNm", false);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    scwin.f_EventInit();
  } else {
    scwin.f_EventSearch();
  }
};

// for=ds_customerD event=OnLoadCompleted(rowCnt)
scwin.sbm_customerD_submitdone = async function (e) {
  let rowCnt = gr_customerD.getTotalRow();
  totalRows2.setValue(rowCnt);
  if (rowCnt > 0) {
    gr_customerD.setFocusedCell(0, 0);
    gr_customerD.setColumnStyle("fileNm", "text-decoration", "underline");
  }
};
scwin.ds_customer_onrowpositionchange = function (info) {
  if (ds_customer.getRowCount() == 0) {
    ds_customerD.removeAll();
    return;
  }
  // 거래처 이력 조회
  scwin.f_retrieveDetail();
};

// Grid를 Mouse로 Click할 때 발생
// for=gr_customerD event=OnClick(row,colid)
scwin.gr_customerD_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "regDt") {
    // gr_customerD.UrlImages = CALENDAR_BTN;
  } else {
    // gr_customerD.UrlImages = SEARCH_BTN;
  }
  if (ds_customerD.getCellData(rowIndex, "tableClsCd") != "B") {
    gr_customerD.setCellReadOnly(rowIndex, 'rmk', false);
    gr_customerD.setCellReadOnly(rowIndex, 'fileNm', false);
    gr_customerD.setCellReadOnly(rowIndex, 'clntStatCd', false);
    gr_customerD.setCellReadOnly(rowIndex, 'regDt', false);
  } else {
    gr_customerD.setCellReadOnly(rowIndex, 'rmk', true);
    gr_customerD.setCellReadOnly(rowIndex, 'fileNm', true);
    gr_customerD.setCellReadOnly(rowIndex, 'clntStatCd', true);
    gr_customerD.setCellReadOnly(rowIndex, 'regDt', true);
  }
};
scwin.gr_customerD_oncelldblclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "fileNm") {
    await scwin.f_Download(rowIndex);
  }
};

/**
 * @method 
 * @name dlt_onload 
 * @description DataList의 데이터가 전체적으로 변경(set)되는 경우 발생
 */
scwin.dlt_onload = function () {
  if (this.getRowPosition() == null && this.getRowCount() > 0) {
    this.setRowPosition(0);
    scwin.gridSetFocus(this, 'clntNo', 0, gr_customer, totalRows);
    scwin.gridSetFocus(this, 'rmk', 0, gr_customerD, totalRows2);
  }
  ;
};

/**
 * @method 
 * @name dlt_oninsertrow 
 * @description 새로운 행이 추가된 후에 발생 (여러 행이 동시에 추가되면 한번만 발생)
 */
scwin.dlt_oninsertrow = function (info) {
  if (Object.keys(info.insertedDataObj).length < 1) return;
  const rowIdx = Object.keys(info.insertedDataObj)[0] ?? 0;
  this.setRowPosition(rowIdx);
  scwin.gridSetFocus(this, 'clntNo', rowIdx, gr_customer, totalRows);
  scwin.gridSetFocus(this, 'rmk', rowIdx, gr_customerD, totalRows2);
};

/**
 * @method 
 * @name dlt_onremoverow 
 * @description 행이 제거된 후에 발생 (여러 행이 동시에 제거되면 한번만 발생)
 */
scwin.dlt_onremoverow = function (info) {
  debugger;
  if (Object.keys(info.removedDataObj).length < 1) return;
  const rowIdx = Number(Object.keys(info.removedDataObj)[0]) - 1;
  const clacIdx = rowIdx == -1 ? 0 : rowIdx;
  this.setRowPosition(clacIdx);
  scwin.gridSetFocus(this, 'clntNo', clacIdx, gr_customer, totalRows);
  scwin.gridSetFocus(this, 'rmk', clacIdx, gr_customerD, totalRows2);
};

/**
 * @method 
 * @name gridSetFocus 
 * @description dataList 이벤트 후 그리드 실제 포커스 처리
 */
scwin.gridSetFocus = function (dataList, defaultCol, rowIndex, targetGrid, targetRows) {
  if (dataList != targetGrid._dataList) return;
  const focusCol = targetGrid.getFocusedColumnID() ?? defaultCol;
  targetGrid.setFocusedCell(rowIndex, focusCol);
  targetRows.setValue(dataList.getRowCount());
};

/**
 * @method 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_customer:
      await scwin.sbm_customer_submitdone(e);
      break;
    case sbm_customerD:
      await scwin.sbm_customerD_submitdone(e);
      break;
    case sbm_Save:
      await scwin.sbm_Save_submitdone(e);
      break;
    default:
      break;
  }
};

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    if (e.responseJSON.resultDataSet[0].Code == -1) return;
    await scwin.submitdone(e);
  }
  ;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'true',disabledClass:'w2selectbox_disabled',id:'lc_clsCd',style:'width: 150px;',submenuSize:'fixed',ref:'',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국내'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'해외'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업영역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bizClsCd',style:'width: 230px;',submenuSize:'fixed',ref:'',displayMode:'value delim label',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하역'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보관'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3자물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'99'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_crn','ev:onclickEvent':'scwin.udc_bizNum_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_bizNum_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_bizNum_onviewchangeNameEvent',id:'udc_bizNum',nameId:'txt_busiNm',popupID:'',selectID:'retrieveCrnInfo3',style:'',validTitle:''}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'법인(주민)등록번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_corRegNo',style:'width: 150px;',maxlength:'13',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'mcomPicEmpNo','ev:onclickEvent':'scwin.udc_registerer_onclickEvent',id:'udc_registerer',nameId:'empNm',popupID:'',selectID:'retrieveEmpNoDeptInfo',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'txt_clntNo','ev:onclickEvent':'scwin.udc_clnt_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_clnt_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clnt_onviewchangeNameEvent',id:'udc_clnt',nameId:'txt_clntNm',popupID:'',selectID:'retrieveClntList',style:'',validTitle:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처 전체 정보 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_Excel',gridUpYn:'N',gridDownYn:'Y',gridID:'gr_customer'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_customer',focusMode:'row',id:'gr_customer',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'7',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'거래처</br>번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'거래처명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'대표자명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'400',inputType:'text',style:'',id:'column70',value:'사업장 주소(본사 소재지)',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column64',value:'등록자',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'등록구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'column55',value:'사유',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'첨부문서',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column49',value:'매입</br>계약서종류',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'계약</br>시작일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'계약</br>종료일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'아이디',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'우편번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'column68',value:'주소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column65',value:'사번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'이름',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'repstNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'zip',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'addr1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'regNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'regNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'ctrtClsCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'계약서 첨부'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'서면 미발급 동의서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타사유'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]}]}]},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ctrtFileNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'select',style:'',id:'ctrtType',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'갱신대상'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자동연장'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtFromDt',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtEndDt',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',style:'',value:'',width:'100',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column92',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column91',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column89',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column88',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column86',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column83',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처 이력 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownFn:'scwin.f_Excel2',gridUpYn:'N',gridID:'gr_customerD',btnPlusYn:'Y',gridDownYn:'Y',templateYn:'N',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_customerD',id:'gr_customerD',style:'',rowStatusVisible:'true',class:'wq_gvw',visibleRowNum:'7',autoFit:'allColumn','ev:oncelldblclick':'scwin.gr_customerD_oncelldblclick','ev:oncellclick':'scwin.gr_customerD_oncellclick',dataName:'거래처 이력',validFeatures:'ignoreStatus=yes',validExp:'regDt:등록일자:yes:date=YYYYMMDD&amp;length=8,rmk:내용:yes'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{id:'column13',inputType:'text',value:'거래처</br>번호',width:'100',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{id:'column12',inputType:'text',value:'거래처명',width:'70',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{id:'column11',inputType:'text',value:'등록일시',width:'70',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{id:'column10',inputType:'text',value:'등록순번',width:'70',rowSpan:'2',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{id:'column9',inputType:'text',value:'입력자',width:'140',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',id:'column58',value:'내용',rowSpan:'2'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',id:'column59',value:'거래처상태',rowSpan:'2'}},{T:1,N:'w2:column',A:{id:'column5',inputType:'text',value:'첨부문서',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{id:'column4',inputType:'text',value:'비고',width:'70',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{id:'column3',inputType:'text',value:'테이블구분',width:'70',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{id:'column2',inputType:'text',value:'파일경로',width:'70',rowSpan:'2',hidden:'true',hiddenCol:'true'}}]},{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{id:'column55',inputType:'text',value:'사번',width:'70'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',id:'column60',value:'이름'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{id:'clntNo',inputType:'text',width:'100',dataName:'거래처 이력',validExp:'regDt:등록일자:yes:date=YYYYMMDD&amp;length=8,rmk:내용:yes',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'clntNm',inputType:'text',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{id:'regDt',inputType:'calendar',width:'70',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{id:'regSeq',inputType:'text',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{id:'empNo',inputType:'text',width:'70',minWidth:'0',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'empNm',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'rmk',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'clntStatCd',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'불량'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'주의'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'관심'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'윤리경영 불이행'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'fileNm',inputType:'textImage',width:'100',imageClickFunction:'scwin.fileNm_popup'}},{T:1,N:'w2:column',A:{id:'delYn',inputType:'text',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{id:'tableClsCd',inputType:'text',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{id:'filePath',inputType:'text',width:'70',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{id:'column39',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{id:'column38',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'column37',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'column36',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'column35',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'column34',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'column33',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'column32',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'column31',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'column30',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'column29',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'column28',inputType:'text',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',gridID:'gr_customerD',btnRowAddObj:'btn_AddRow',btnRowDelObj:'btn_DelRow',btnCancelObj:'btn_CanRow',rowAddFunction:'scwin.f_detailAddRow',rowDelFunction:'scwin.f_detailDelete',id:'udc_bttomGrdBtn',cancelFunction:'scwin.f_cancel',cancelObjType:'data',rowAddObjType:'data',rowDelObjType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'C',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})