/*amd /ui/cm/bc/affairs/zz_770_01_01b.xml 71048 0a7e548136212623dc9850e0c08863342eacdf09a1d8b99b67e046d53f816072 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'regiNum',name:'등기번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delivery',name:'처리방법',dataType:'text'}},{T:1,N:'w2:key',A:{id:'addressee',name:'수신인',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toRegiDate',name:'조회종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromRegiDate',name:'조회시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sender',name:'발신인',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptName',name:'부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gita',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_register',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'regiDate',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regiNum',name:'등기번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sender',name:'발신인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addressee',name:'수신인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptName',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delivery',name:'전달방식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addresseeEmpNo',name:'수취인사번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gita',name:'종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gita2',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'affairsGubun',name:'총무업무구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_ManagerYn',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col1',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'filPath',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_XLS',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'regiDate',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regiNum',name:'등기번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sender',name:'발신인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addressee',name:'수신인(수취인)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptName',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptCd',name:'지점구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delivery',name:'처리방법',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addresseeEmpNo',name:'수취인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gita',name:'종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gita2',name:'이상유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'affairsGubun',name:'총무업무구분',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveRegister',action:'/cm.bc.affairs.RetrieveRegisteredMailInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},   {"id":"ds_register","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_register","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveRegister_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/cm.bc.affairs.SaveRegisteredMailInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_register,"key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ManagerYn',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_ManagerYn","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ManagerYn_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMM") + "01"; // 20251201
  scwin.strLastDate = $c.date.getLastDateOfMonth($p, scwin.strFromDate); // 31
  scwin.strToDate = scwin.strFromDate.substring(0, 6) + scwin.strLastDate; // 20251231 
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.userId = scwin.memJson.userId;
  scwin.userNm = scwin.memJson.userNm;
  // scwin.sysAdminYn = scwin.memJson.privAdmin; // 서버 데이터, 기본값 'F'

  scwin.empNo = scwin.memJson.empNo;
  scwin.f_retrieveManagerYn();
  ed_fromRegiDate.setValue(scwin.strFromDate);
  ed_toRegiDate.setValue(scwin.strToDate);
  // lc_gita.BindColVal = "01";
  lc_gita.setValue("01");
  //ed_delivery.Index = 0; // 사업자구분

  // 테스트 데이터
  // ed_fromRegiDate.setValue("20250101");
  // ed_toRegiDate.setValue("20250103");
};
scwin.f_retrieveManagerYn = function () {
  //등기 관리자여부  조회/
  sbm_ManagerYn.action = "/cm.zz.RetrieveCommonPopupCMD.do?" + "sysCd=CommonEBC" + "&queryId=retrieveCommCdInfo" + "&param1=" + "&param2=" + scwin.userId + "&param3=ZZ771";
  $c.sbm.execute($p, sbm_ManagerYn);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  // ds_condition.UseChangeInfo = false; // 뭔지 모름
  $c.sbm.execute($p, sbm_retrieveRegister);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_register.getModifiedIndex().length == false) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  let validVal = await $c.gus.cfValidate($p, [gr_register]);
  if (!validVal) return;
  let messageStr = MSG_CM_CRM_001; // 저장하시겠습니까? 

  let ret = await $c.win.confirm($p, messageStr);
  if (ret) {
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  $c.sbm.execute($p, sbm_retrieveRegister);
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function (e) {
  $c.gus.cfInitObjects($p, [txt_regiNum, txt_sender, ed_fromRegiDate, ed_toRegiDate, txt_deptName, txt_addressee, txt_delivery]);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  ds_register.insertRow();
  let rowPos = ds_register.getTotalRow() - 1;
  gr_register.setFocusedCell(rowPos, "regiNum", false);
  ds_register.setCellData(ds_register.rowPosition, "regiDate", WebSquare.date.getCurrentServerDate());
  ds_register.setCellData(ds_register.rowPosition, "affairsGubun", '01');
  let totalCnt = ds_register.getTotalRow();
  totalRows.setValue(totalCnt);
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_deleteRow = function () {
  var currentCol = gr_register.getFocusedColumnIndex();
  var currentRow = ds_register.getRowPosition();
  if (ds_register.getRowStatus(currentRow) == 'C') {
    ds_register.removeRow(currentRow);
    gr_register.setFocusedCell(currentRow - 1, currentCol);
    return;
  }
  ;
  ds_register.deleteRow(currentRow);
  gr_register.setFocusedCell(currentRow, currentCol);
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  let currentRow = ds_register.rowPosition;
  $c.data.undoRow($p, ds_register);
  let totalCnt = ds_register.getTotalRow();
  totalRows.setValue(totalCnt);
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = function (gr_groupCode, gridName) {
  // gr_groupCode, gridName

  // 클릭시 아래와 같이 값을 넣어주어야되는거같음.
  gr_groupCode = gr_register;
  gridName = '등기수취인등록';
  if (ds_register.getTotalRow() <= 0) {
    $c.win.alert($p, "내역이 존재하지않습니다.");
    return false;
  }
  const grdObj = gr_groupCode;
  const infoArr = [];
  const options = {
    fileName: gridName,
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "등기수취인등록"
  };
  $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
};

//drmFileSubmit명 고정
scwin.drmFileSubmit = function () {
  var formObj = document.frm;
  cfDrmUploadFile(formObj, fileUploadGDS, "scwin.f_Upload"); // fileUpload udc 로 대체... ???? to-do
};

// 엑셀 Upload
scwin.f_Upload = function () {
  ds_register.removeAll();
  ds_XLS.removeAll();
  // ds_XLS.DataId = fileUploadGDS.setValue(0, "filePath"); // ???

  $c.sbm.execute($p, sbm_XLS);
  scwin.resetForm('frm'); // to-do ????
  $c.gus.cfProgressWinOpen($p);
  window.setTimeout("scwin.f_Import()", 1000); //시간 // to-do ????
};

//-------------------------------------------------------------------------
// 엑셀 파일 업로드
//-------------------------------------------------------------------------
scwin.f_Import = function () {
  var i = 0;
  if (ds_XLS.getRowCount() == 0) {
    $c.gus.cfProgressWinClose($p);
    $c.win.alert($p, MSG_CM_ERR_003); // ??
    return;
  }
  for (i = 0; i < ds_XLS.getTotalRow(); i++) {
    ds_register.insertRow(i); // 
    let gitaVal;
    switch (ds_XLS.getCellData(i, "gita")) {
      case "등기":
        gitaVal = "01";
        break;
      case "우편물":
        gitaVal = "02";
        break;
      default:
        break;
    }
    let deptCdVal;
    switch (ds_XLS.getCellData(i, "deptCd")) {
      case "본사":
        deptCdVal = "01";
        break;
      case "본사(국제물류사무실)":
        deptCdVal = "02";
        break;
      case "부산지사(사무실)":
        deptCdVal = "03";
        break;
      case "부산지사(중앙동사옥)":
        deptCdVal = "04";
        break;
      case "인천지사(북항사무실)":
        deptCdVal = "05";
        break;
      case "인천(항동사무실)":
        deptCdVal = "06";
        break;
      case "인천(항동보세창고)":
        deptCdVal = "07";
        break;
      case "인천(8부두)":
        deptCdVal = "08";
        break;
      case "전남지사(사무실)":
        deptCdVal = "09";
        break;
      case "전남(광주CD)":
        deptCdVal = "10";
        break;
      case "당진평택지사":
        deptCdVal = "11";
        break;
      case "중부지사(사무실)":
        deptCdVal = "12";
        break;
      case "중부(ICD)":
        deptCdVal = "13";
        break;
      case "전북(군산CD)":
        deptCdVal = "14";
        break;
      case "영남지사(사무실)":
        deptCdVal = "15";
        break;
      case "영남(부두운영센터)":
        deptCdVal = "16";
        break;
      case "포항지점":
        deptCdVal = "17";
        break;
      case "대구지점":
        deptCdVal = "18";
        break;
      case "경기지사":
        deptCdVal = "19";
        break;
      case "동해지사(사무실)":
        deptCdVal = "20";
        break;
      case "동해(동부메탈운송사무실)":
        deptCdVal = "21";
        break;
      default:
        break;
    }
    let rowData = {};
    let xlsData = ds_XLS.getRowJSON(i);
    rowData = {
      "gita": gitaVal,
      "deptCd": deptCdVal,
      "regiDate": ds_XLS.getCellData(i, "regiDate").replace(/-/gi, "").replace(/\//g, ""),
      "regiNum": ds_XLS.getCellData(i, "regiNum").trim().replace(/-/gi, "").substring(0, 13),
      "sender": xlsData["sender"],
      "addresseeEmpNo": xlsData["addresseeEmpNo"],
      "addressee": xlsData["addressee"],
      "deptName": xlsData["deptName"],
      "delivery": xlsData["delivery"],
      "gita2": xlsData["gita2"],
      "affairsGubun": "01"
    };
    ds_register.setRowJSON(i, rowData, true);
  }
  $c.gus.cfProgressWinClose($p);
  $c.win.alert($p, "업로드작업이 완료되었습니다.");
  let totalRow = ds_register.getTotalRow();
  totalRows.setValue(totalRow);
  ds_XLS.removeAll();
};

// 종류 autocomplete를 바꿀때 grid의 header의 값이 변경됨
scwin.lc_gita_onchange = function (info) {
  let headerVal;
  switch (info.newValue) {
    case "01":
      headerVal = "등기번호";
      break;
    case "02":
      headerVal = "구분(우편/소포)";
      break;
    default:
      break;
  }
  gr_register.setHeaderValue("regiNumHeader", headerVal);
};
scwin.cfAttach_1765160179649 = function () {
  var scripts_1765160179649 = new Array();
  var MAX_SIZE_1765160179649 = 80;
  var seq = scripts_1765160179649.length;
  if (scwin.f_CheckFileExt("CSV", cfGetFileName_1765160179649(seq)) == false) {
    $c.win.alert($p, "파일이 CSV인 것만 Import가 가능합니다.\n엑셀 파일을 CSV로 변환 하시어 Import하시기 바랍니다.");
    return;
  }
  scwin.drmFileSubmit();
};
scwin.f_CheckFileExt = function (ext, path) {
  ext = ext.toUpperCase();
  path = path.toUpperCase();
  elen = ext.length;
  flen = path.length;
  return ext == path.substring(flen - elen, flen);
};
scwin.cfInitItemList_1765160179649 = function () {
  var seq = scripts_1765160179649.length;
  for (var inx = 0; inx < seq; inx++) {
    scripts_1765160179649[inx].status = false;
    document.getElementById('DYNAMIC_FILE_ITEM_1765160179649' + '_' + (inx + 1)).innerHTML = '';
  }
};
scwin.cfGetFileName_1765160179649 = function (seq) {
  return document.getElementById('DYNAMIC_FILE' + '_' + (seq + 1)).value;
};
scwin.resetForm = function (formId) {
  var form = document.getElementById(formId);
  form.reset(); // 폼 내 모든 입력 요소 초기화 // ???
};

/*  Netscape/Mozilla에서 insertAdjacentHTML을 emulation하는 스크립트 
 *  참고 사이트 http://forums.mozilla.or.kr/viewtopic.php?t=678, http://www.faqts.com/knowledge_base/view.phtml/aid/5756
**/
// to-do
if (typeof HTMLElement != "undefined" && !HTMLElement.prototype.insertAdjacentElement) {
  HTMLElement.prototype.insertAdjacentElement = function (where, parsedNode) {
    switch (where) {
      case 'beforeBegin':
        this.parentNode.insertBefore(parsedNode, this);
        break;
      case 'afterBegin':
        this.insertBefore(parsedNode, this.firstChild);
        break;
      case 'beforeEnd':
        this.appendChild(parsedNode);
        break;
      case 'afterEnd':
        if (this.nextSibling) this.parentNode.insertBefore(parsedNode, this.nextSibling);else this.parentNode.appendChild(parsedNode);
        break;
    }
  };
  HTMLElement.prototype.insertAdjacentHTML = function (where, htmlStr) {
    var r = this.ownerDocument.createRange();
    r.setStartBefore(this);
    var parsedHTML = r.createContextualFragment(htmlStr);
    this.insertAdjacentElement(where, parsedHTML);
  };
  HTMLElement.prototype.insertAdjacentText = function (where, txtStr) {
    var parsedText = document.createTextNode(txtStr);
    this.insertAdjacentElement(where, parsedText);
  };
}

// G A U C E   C O M P O N E N T' S   E V E N T S  
scwin.sbm_retrieveRegister_submitdone = function (e) {
  let totalCnt = gr_register.getTotalRow();
  totalRows.setValue(totalCnt);
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
  } else {
    let totalCnt = gr_register.getTotalRow();
    totalRows.setValue(totalCnt);
    if (totalCnt == 0) {
      $c.win.alert($p, "조회된 데이터가 없습니다");
    }
  }
};

// 템플릿 다운로드 버튼
scwin.btn_tempDown_onclick = async function (e) {
  if (await $c.win.confirm($p, "Excel 양식을 다운로드 하시겠습니까?")) {
    const excelTitle = "등기수취인등록_템플릿";
    const options = {
      fileName: `${excelTitle}.xlsx`,
      sheetName: excelTitle,
      bodyWordwrap: true,
      useStyle: false
      // evenRowBackgroundColor : "#f5fff5",
      // useStyle : "true",
      // useFooter : "false"
    };

    // let infoArr = [
    //     {
    //         rowIndex: 2,             // 첫 번째 줄
    //         colIndex: 0,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "등기",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 2,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "본사",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 2,             // 첫 번째 줄
    //         colIndex: 2,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "20130329",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 2,             // 첫 번째 줄
    //         colIndex: 3,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: 1230000000000,
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 2,             // 첫 번째 줄
    //         colIndex: 4,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "김길동",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 2,             // 첫 번째 줄
    //         colIndex: 5,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "홍길동",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 2,             // 첫 번째 줄
    //         colIndex: 6,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "홍길동",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 2,             // 첫 번째 줄
    //         colIndex: 7,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "재경",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 2,             // 첫 번째 줄
    //         colIndex: 8,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "직접전달",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 2,             // 첫 번째 줄
    //         colIndex: 9,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "유",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 4,             // 첫 번째 줄
    //         colIndex: 0,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "등기",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 4,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "인천",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 4,             // 첫 번째 줄
    //         colIndex: 2,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "20130329",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 4,             // 첫 번째 줄
    //         colIndex: 3,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: Number(1230000000000),
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 4,             // 첫 번째 줄
    //         colIndex: 4,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "김길동",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 4,             // 첫 번째 줄
    //         colIndex: 5,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "홍길동",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 4,             // 첫 번째 줄
    //         colIndex: 6,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "홍길동",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 4,             // 첫 번째 줄
    //         colIndex: 7,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "재경",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 4,             // 첫 번째 줄
    //         colIndex: 8,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "우편발송",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 4,             // 첫 번째 줄
    //         colIndex: 9,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "유",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 6,             // 첫 번째 줄
    //         colIndex: 0,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "우편물",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 6,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "부산",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 6,             // 첫 번째 줄
    //         colIndex: 2,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "20130329",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 6,             // 첫 번째 줄
    //         colIndex: 3,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "소포",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 6,             // 첫 번째 줄
    //         colIndex: 4,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "김길동",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 6,             // 첫 번째 줄
    //         colIndex: 5,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "홍길동",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 6,             // 첫 번째 줄
    //         colIndex: 6,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "홍길동",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 6,             // 첫 번째 줄
    //         colIndex: 7,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "재경",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 6,             // 첫 번째 줄
    //         colIndex: 8,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "행랑발송",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 6,             // 첫 번째 줄
    //         colIndex: 9,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "무",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 8,             // 첫 번째 줄
    //         colIndex: 0,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "우편물",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 8,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "인천천",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 8,             // 첫 번째 줄
    //         colIndex: 2,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "20130329",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 8,             // 첫 번째 줄
    //         colIndex: 3,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "우편편",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 8,             // 첫 번째 줄
    //         colIndex: 4,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "김길동",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 8,             // 첫 번째 줄
    //         colIndex: 5,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "홍길동",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 8,             // 첫 번째 줄
    //         colIndex: 6,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "홍길동",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 8,             // 첫 번째 줄
    //         colIndex: 7,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "재경",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 8,             // 첫 번째 줄
    //         colIndex: 8,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "행랑발송",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 8,             // 첫 번째 줄
    //         colIndex: 9,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "무",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 12,             // 첫 번째 줄
    //         colIndex: 0,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "작성 시 유의사항",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 16,             // 첫 번째 줄
    //         colIndex: 0,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 6,
    //         text: "1. 종류, 구분의 셀은 다음 중 선택하여 정확하게 입력 바랍니다.",
    //         textAlign: "center",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 18,             // 첫 번째 줄
    //         colIndex: 0,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 4,
    //         text: "   종류 입력 - 등기, 우편물 중 선택",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 20,             // 첫 번째 줄
    //         colIndex: 0,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 4,
    //         text: "   구분 입력- 아래 리스트 중 선택",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 22,             // 첫 번째 줄
    //         colIndex: 0,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 4,
    //         text: "   구분 입력- 아래 리스트 중 선택",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 23,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 1,
    //         text: "본사",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 24,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "본사(국제물류사무실)",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 25,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "부산지사(사무실)",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 26,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "부산지사(중앙동사옥)",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 27,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "인천지사(북항사무실)",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 28,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "인천(항동사무실)",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 29,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "인천(항동보세창고)",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 30,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "인천(8부두)",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 31,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "전남지사(사무실)",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 32,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "전남(광주CD)",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 33,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "당진평택지사",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 34,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "중부지사(사무실)",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 35,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "중부(ICD)",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 36,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "전북(군산CD)",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 37,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "영남지사(사무실)",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 38,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "영남(부두운영센터)",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 39,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "포항지점",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 40,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "대구지점",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 41,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "경기지사",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 42,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "동해지사(사무실)",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 43,             // 첫 번째 줄
    //         colIndex: 1,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 2,
    //         text: "동해(동부메탈운송사무실)",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 45,             // 첫 번째 줄
    //         colIndex: 0,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 5,
    //         text: "2. 등기번호의 셀서식을 숫자로 변경 저장후 작성바랍니다.",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 47,             // 첫 번째 줄
    //         colIndex: 0,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 5,
    //         text: "(우편물인 경우 등기번호열에 소포, 우편 중 선택하여 입력) ",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    //     {
    //         rowIndex: 49,             // 첫 번째 줄
    //         colIndex: 0,             // 첫 번째 칸부터
    //         rowSpan: 1,
    //         colSpan: 5,
    //         text: "3. 작성 시 유의사항 설명 부분은 삭제 후 업로드 하시기 바랍니다.",
    //         textAlign: "left",     //정렬
    //         fontSize: 12,
    //         color: "black",          // 글자색
    //         backgroundColor: "white" // 배경색
    //     },
    // ]

    const baseStyle = {
      rowSpan: 1,
      colSpan: 1,
      fontSize: 12,
      color: "black",
      backgroundColor: "white"
    };
    const makeCell = (rowIndex, colIndex, text, options = {}) => ({
      rowIndex,
      colIndex,
      text,
      ...baseStyle,
      ...options
    });
    const makeCenterCell = (rowIndex, colIndex, text, options = {}) => makeCell(rowIndex, colIndex, text, {
      textAlign: "center",
      ...options
    });
    const makeLeftCell = (rowIndex, colIndex, text, options = {}) => makeCell(rowIndex, colIndex, text, {
      textAlign: "left",
      ...options
    });
    const makeRow = (rowIndex, values) => values.map((text, colIndex) => makeCenterCell(rowIndex, colIndex, text));
    const sampleRows = [{
      rowIndex: 2,
      values: ["등기", "본사", "20130329", "1230000000000", "김길동", "홍길동", "홍길동", "재경", "직접전달", "유"]
    }, {
      rowIndex: 4,
      values: ["등기", "인천", "20130329", "1230000000000", "김길동", "홍길동", "홍길동", "재경", "우편발송", "유"]
    }, {
      rowIndex: 6,
      values: ["우편물", "부산", "20130329", "소포", "김길동", "홍길동", "홍길동", "재경", "행랑발송", "무"]
    }, {
      rowIndex: 8,
      values: ["우편물", "인천천", "20130329", "우편편", "김길동", "홍길동", "홍길동", "재경", "행랑발송", "무"]
    }];
    const divisionGuideList = [{
      rowIndex: 23,
      text: "본사",
      colSpan: 1
    }, {
      rowIndex: 24,
      text: "본사(국제물류사무실)",
      colSpan: 2
    }, {
      rowIndex: 25,
      text: "부산지사(사무실)",
      colSpan: 2
    }, {
      rowIndex: 26,
      text: "부산지사(중앙동사옥)",
      colSpan: 2
    }, {
      rowIndex: 27,
      text: "인천지사(북항사무실)",
      colSpan: 2
    }, {
      rowIndex: 28,
      text: "인천(항동사무실)",
      colSpan: 2
    }, {
      rowIndex: 29,
      text: "인천(항동보세창고)",
      colSpan: 2
    }, {
      rowIndex: 30,
      text: "인천(8부두)",
      colSpan: 2
    }, {
      rowIndex: 31,
      text: "전남지사(사무실)",
      colSpan: 2
    }, {
      rowIndex: 32,
      text: "전남(광주CD)",
      colSpan: 2
    }, {
      rowIndex: 33,
      text: "당진평택지사",
      colSpan: 2
    }, {
      rowIndex: 34,
      text: "중부지사(사무실)",
      colSpan: 2
    }, {
      rowIndex: 35,
      text: "중부(ICD)",
      colSpan: 2
    }, {
      rowIndex: 36,
      text: "전북(군산CD)",
      colSpan: 2
    }, {
      rowIndex: 37,
      text: "영남지사(사무실)",
      colSpan: 2
    }, {
      rowIndex: 38,
      text: "영남(부두운영센터)",
      colSpan: 2
    }, {
      rowIndex: 39,
      text: "포항지점",
      colSpan: 2
    }, {
      rowIndex: 40,
      text: "대구지점",
      colSpan: 2
    }, {
      rowIndex: 41,
      text: "경기지사",
      colSpan: 2
    }, {
      rowIndex: 42,
      text: "동해지사(사무실)",
      colSpan: 2
    }, {
      rowIndex: 43,
      text: "동해(동부메탈운송사무실)",
      colSpan: 2
    }];
    let infoArr = [...sampleRows.flatMap(({
      rowIndex,
      values
    }) => makeRow(rowIndex, values)), makeCenterCell(12, 0, "작성 시 유의사항", {
      colSpan: 2
    }), makeCenterCell(16, 0, "1. 종류, 구분의 셀은 다음 중 선택하여 정확하게 입력 바랍니다.", {
      colSpan: 6
    }), makeLeftCell(18, 0, "   종류 입력 - 등기, 우편물 중 선택", {
      colSpan: 4
    }), makeLeftCell(20, 0, "   구분 입력- 아래 리스트 중 선택", {
      colSpan: 4
    }), makeLeftCell(22, 0, "   구분 입력- 아래 리스트 중 선택", {
      colSpan: 4
    }), ...divisionGuideList.map(({
      rowIndex,
      text,
      colSpan
    }) => makeLeftCell(rowIndex, 1, text, {
      colSpan
    })), makeLeftCell(45, 0, "2. 등기번호의 셀서식을 숫자로 변경 저장후 작성바랍니다.", {
      colSpan: 5
    }), makeLeftCell(47, 0, "(우편물인 경우 등기번호열에 소포, 우편 중 선택하여 입력)", {
      colSpan: 5
    }), makeLeftCell(49, 0, "3. 작성 시 유의사항 설명 부분은 삭제 후 업로드 하시기 바랍니다.", {
      colSpan: 5
    })];

    // 다운로드
    await $c.data.downloadGridViewExcel($p, gr_register, options, infoArr);
  }
};
scwin.f_ExcelUp = async function () {
  if (udc_grd.getUpExt() == "1") {
    // xlsx, csv 선택값
    var options = {
      type: 1
    };
    await $c.data.uploadGridViewCSV($p, gr_register, options); // CSV를 선택하였을 경우
  } else {
    var options = {
      //startRowIndex: 2,
      type: 1
    };
    await $c.data.uploadGridViewExcel($p, gr_register, options); // XLSX를 선택하였을 경우
  }
};
scwin.gr_register_onfilereadend = function (value) {
  ds_register.modifyAllStatus("C");
  totalRows.setValue(ds_register.getRowCount());
  if (ds_register.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  } else {
    $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다.");
  }
};
scwin.sbm_ManagerYn_submitdone = function (e) {
  let firstData = ds_ManagerYn.getRowJSON(0);
  if ($c.gus.cfIsNull($p, firstData["col2"])) {
    buttonArea.hide();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_gita',style:'width:150px;',submenuSize:'auto',ref:'data:ds_condition.gita',displayMode:'label','ev:onchange':'scwin.lc_gita_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'우편물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등기번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'input_text',id:'txt_regiNum',placeholder:'',style:'width:150px;',ref:'data:ds_condition.regiNum'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발신인 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_sender',placeholder:'',style:'width:150px;',ref:'data:ds_condition.sender'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_condition',refEdDt:'toRegiDate',refStDt:'fromRegiDate',style:'',edFromId:'ed_fromRegiDate',edToId:'ed_toRegiDate',mandatoryFrom:'true',mandatoryTo:'true'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_deptCd',style:'width:150px;',submenuSize:'auto',ref:'data:ds_condition.deptCd',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'본사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'본사(국제물류사무실)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부산지사(사무실)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부산지사(중앙동사옥)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인천지사(북항사무실)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인천(항동사무실)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인천(항동보세창고)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인천(8부두)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전남지사(사무실)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'09'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전남(광주CD)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당진평택지사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중부지사(사무실)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'12'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중부(ICD)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'13'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전북(군산CD)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'14'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영남지사(사무실)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'15'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영남(부두운영센터)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'16'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'포항지점'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'17'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대구지점'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'18'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'경기지사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'19'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'동해지사(사무실)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'동해(동부메탈운송사무실)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'21'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_deptName',placeholder:'',style:'width:150px;',ref:'data:ds_condition.deptName'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수신인 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_addressee',placeholder:'',style:'width:150px;',ref:'data:ds_condition.addressee'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전달방식 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'lc_delivery',chooseOption:'',style:'width: 150px;display: none;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'직접전달'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행낭발송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'우편발송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]}]}]},{T:1,N:'xf:input',A:{id:'txt_delivery',style:'width:208px;',maxlength:'20',ref:'data:ds_condition.delivery'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_InitObjects()'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn template',id:'btn_tempDown',style:'',title:'템플릿 다운로드',type:'button','ev:onclick':'scwin.btn_tempDown_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'템플릿 다운로드'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',gridUpYn:'Y',btnPlusYn:'Y',btnUser:'Y',gridDownFn:'scwin.f_GridToExcel',templateYn:'N',gridID:'gr_register',gridUpFn:'scwin.f_ExcelUp',id:'udc_grd'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_register',id:'gr_register',style:'',visibleRowNum:'16',visibleRowNumFix:'true',readOnly:'false',sortable:'true',columnMove:'true',columnMoveWithFooter:'true','ev:onfilereadend':'scwin.gr_register_onfilereadend',rowStatusVisible:'true',gridName:'등기수취인',keyMoveEditMode:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'종류',width:'80',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'구분',width:'125',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'등록일자',width:'80',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regiNumHeader',inputType:'text',value:'등기번호',width:'115'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'발신인',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'수취인',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'수신인',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'부서명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'전달방식',width:'90'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',value:'이상유무',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'총무업무구분',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'gita',inputType:'select',width:'80',textAlign:'center',class:'',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'등기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'우편물'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'deptCd',inputType:'select',width:'125',textAlign:'center',allOption:'',chooseOption:'',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'본사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'본사(국제물류사무실)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부산지사(사무실)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부산지사(중앙동사옥)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천지사(북항사무실)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천(항동사무실)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천(항동보세창고)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천(8부두)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전남지사(사무실)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'09'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전남(광주CD)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'당진평택지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'중부지사(사무실)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'12'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'중부(ICD)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'13'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전북(군산CD)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'14'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영남지사(사무실)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'15'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영남(부두운영센터)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'16'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'포항지점'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'17'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'대구지점'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'18'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'경기지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'19'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'동해지사(사무실)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'동해(동부메탈운송사무실)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'21'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'regiDate',inputType:'calendar',width:'80',textAlign:'center',mandatory:'true',isData:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regiNum',inputType:'text',width:'115',textAlign:'center',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sender',inputType:'text',width:'120',textAlign:'center',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'addresseeEmpNo',inputType:'text',width:'80',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'addressee',inputType:'text',width:'80',textAlign:'center',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deptName',inputType:'text',width:'80',textAlign:'center',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'delivery',inputType:'text',width:'90',textAlign:'center',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'gita2',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'affairsGubun',displayMode:'label',textAlign:'center',hidden:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'등기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'명함명패'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'화환'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]}]}]}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column35',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'125',inputType:'text',id:'column34',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'115',inputType:'text',id:'column32',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'right',id:'buttonArea',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelObj:'bCancel',btnDelObj:'bDel',btnRowAddObj:'bAdd',btnRowAddYn:'Y',cancelFunction:'scwin.f_Cancel',cancelObjType:'ctrlBtn',gridID:'gr_register',id:'udc_bottomGrdBtn1',rowAddFunction:'scwin.f_AddRow',rowAddObjType:'ctrlBtn',style:'',btnRowDelYn:'Y',btnCancelYn:'Y',btnDelYn:'N',rowDelFunction:'scwin.f_deleteRow'}},{T:1,N:'xf:trigger',A:{style:'width:50px; height:23px;',id:'btn_save',type:'button',class:'button_save','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]}]}]})