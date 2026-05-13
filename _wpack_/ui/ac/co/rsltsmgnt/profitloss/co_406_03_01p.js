/*amd /ui/ac/co/rsltsmgnt/profitloss/co_406_03_01p.xml 22136 bac184236acb40b7a5b4a32bfb01722ee634f7addf213fc1af043e67d17df28f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_master'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'creatYmFrom',name:'반영할기간From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'creatYmTo',name:'반영할기간To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distAcctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distAcctDeptNm',name:'부서명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_giveDept',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'distYm',name:'배부년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptCd',name:'배부하는부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptNm',name:'배부하는부서명',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ac.co.rsltsmgnt.profitloss.CreateDistributionAutoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_master","key":"IN_DS1"}, {"id":"ds_giveDept","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_master_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 배부기준등록자동생성(손익보고)
 * 메뉴경로 : 회계/관리회계/실적관리/손익보고/배부기준등록(손익자료)
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/profitloss/co_406_03_01p.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-12-16
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항 :
 * 수정이력 :
 *    - 2025-12-16      배기원    최초작성
 */
//부모창에서 받은 파라메터
scwin.params;
scwin.f_commCdPopupRow = 0; //그리드 팝업 호출 시 ROW값
scwin.oldValue = ""; //그리드 팝업 호출 시 비교값

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {};

/**
 * 조회 데이터셋 헤더 생성
 * TOBE 사용안함
 */
scwin.f_Header = function () {
  // var GAUCE_DATASET_HEADER = "stdYm:STRING(6)"
  //     + ",distAcctDeptCd:STRING(5)"
  //     + ",distAcctDeptNm:STRING(50)"
  //     + ",creatYmFrom:STRING(6)"
  //     + ",creatYmTo:STRING(6)";

  // ds_master.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_master.insertRow();

  // GAUCE_DATASET_HEADER = "deptCd:STRING(5)"
  //     + ",deptNm:STRING(50)";
  // ds_giveDept.removeAll();
  // ds_giveDept.SetDataHeader(GAUCE_DATASET_HEADER);
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_giveDept.setNoResultMessageVisible(false);
  ds_giveDept.removeAll();
  totalRows.setValue("0");
  scwin.f_commCdPopupRow = 0; //그리드 팝업 호출 시 ROW값
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  $c.data.setPopupTitle($p, "배부기준 자동생성");
  scwin.setInit();
  scwin.f_Header();
  scwin.params = $c.data.getParameter($p);
  if (!$c.util.isEmpty($p, scwin.params["stdYm"])) {
    dma_master.set("stdYm", scwin.params["stdYm"]);
  }
  if (!$c.util.isEmpty($p, scwin.params["distAcctDeptCd"])) {
    dma_master.set("distAcctDeptCd", scwin.params["distAcctDeptCd"]);
  }
  if (!$c.util.isEmpty($p, scwin.params["distAcctDeptNm"])) {
    dma_master.set("distAcctDeptNm", scwin.params["distAcctDeptNm"]);
  }
  ica_stdYm.focus();
};

/**
 * 각 Argument에 따른 PopUp을 호출 한다.
 * 1:조회->거래처 , 2:Grid->직급코드
 * code변수는 각 항목별 검색요청 값이다.
 * TOBE : 2번 scwin.f_gridPop로 호출(UDC 사용)
 */
scwin.f_openPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  //asis 소스
  // var rtnList = new Array();

  // // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  // // flag:SKIP일경우는 Tag에 대한 속성 검사를 하지 않는다.
  // if (flag != "SKIP") {
  //     if (flag == "ALL") {
  //         cd = "";
  //         nm = "";
  //     } else {
  //         cd = orgObjCd.Text;
  //         nm = orgObjNm.Text;
  //     }
  // } else {
  //     cd = orgObjCd;
  //     nm = "";
  // }

  // switch (select_code) {
  //     // 조회조건용 수금부서 PopUp 호출
  //     case '1':
  //         var whereStr = ed_creatYmFrom.getValue().substring(0, 6) + "01,,,,givedept";
  //         rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo', cd, nm, "T", null, null, null, null, whereStr, null, null, null, null);
  //         scwin.f_resultPopUp(orgObjCd, orgObjNm, rtnList);
  //         break;
  //     case '2':
  //         var whereStr = ed_creatYmFrom.getValue().substring(0, 6) + "01,,,,givedept";
  //         rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo', cd, nm, "T", null, null, null, null, whereStr, null, null, null, null);
  //         return rtnList;
  //         break;
  //     default:
  //         $c.win.alert("잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
  //         break;
  // }
  switch (select_code) {
    //부서코드
    case '1':
      var param = ica_creatYmFrom.getValue().substring(0, 6) + "01,,,,givedept";
      udc_deptCd.cfCommonPopUp(scwin.udc_deptCd_callBackFunc, ed_deptCd.getValue(), ed_deptNm.getValue(), flag, null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;

    //그리드 부서코드서코드
    case '2':
      break;
    default:
      break;
  }
};

/**
 * 부서코드 팝업 callBack
 */
scwin.udc_deptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_deptCd.setValue(ret[0]); // 부서코드
    ed_deptNm.setValue(ret[1]); // 부서명
    ed_deptCd.hidVal = ret[0]; // 히든값
  } else {
    ed_deptCd.setValue(""); // 부서코드
    ed_deptNm.setValue(""); // 부서명
    ed_deptCd.hidVal = ""; // 히든값
  }
};

/**
 * 그리드 팝업호출
 */
scwin.f_GridPop = async function (colId, row, data, close) {
  scwin.f_commCdPopupRow = row;
  if (colId == "deptCd") {
    ds_giveDept.setCellData(row, "deptCd", "");
    ds_giveDept.setCellData(row, "deptNm", "");
    let param = ica_creatYmFrom.getValue().substring(0, 6) + "01,,,,givedept";
    udc_comCode_Grid.setSelectId("retrieveAcctDeptCdInfo");
    //조회조건 9번째, 전체검색허용여부 15번째
    await udc_comCode_Grid.cfCommonPopUp(scwin.udc_comCode_Grid_deptCd_callBackFunc, data, "", close, null, null, null, null, param, null, null, null, null, null, "F", null);
  }
};

/**
 * 부서코드(그리드팝업)
 */
scwin.udc_comCode_Grid_deptCd_callBackFunc = function (ret) {
  // let rowIdx = gr_giveDept.getFocusedRowIndex();
  let rowIdx = scwin.f_commCdPopupRow;
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ds_giveDept.setCellData(rowIdx, "deptCd", ret[0]); //부서코드
    ds_giveDept.setCellData(rowIdx, "deptNm", ret[1]); //부서명
  } else {
    ds_giveDept.setCellData(rowIdx, "deptCd", ""); //부서코드
    ds_giveDept.setCellData(rowIdx, "deptNm", ""); //부서명
  }
};

/**
 * PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
 * flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
 * TOBE 사용안함(UDC 사용)
 */
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.Text == orgObjCd.hidVal) {
      return;
    } else {
      orgObjNm.Text = "";
    }
  } else {
    if (orgObjNm.Text == orgObjNm.hidVal) {
      return;
    } else {
      orgObjCd.Text = "";
    }
  }
  if (orgObjCd.Text.trim() != "" || flag == "NM") {
    if (orgObjNm.Text.trim() != "" || flag == "CD") {
      orgObjCd.Text = orgObjCd.Text.trim();
      orgObjNm.Text = orgObjNm.Text.trim();
      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
    }
  } else {
    orgObjNm.Text = "";
    orgObjCd.Text = "";
    orgObjCd.hidVal = "";
  }
};

/**
 * 팝업결과
 * TOBE 사용안함(UDC 사용)
 */
scwin.f_resultPopUp = function (orgObjCd, orgObjNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    orgObjCd.Text = rtnList[0]; // 코드값
    orgObjNm.Text = rtnList[1]; // 코드명
    orgObjCd.hidVal = rtnList[0]; // HIDDEN 코드값
    orgObjNm.hidVal = rtnList[1]; // HIDDEN 코드명
  } else {
    orgObjCd.Text = "";
    orgObjNm.Text = "";
    orgObjCd.hidVal = "";
    orgObjNm.hidVal = "";
  }
};

/**
 * 생성
 */
scwin.f_Create = async function () {
  //생성조건 입력여부 및 형식 체크
  let ret = await $c.gus.cfValidate($p, [ica_stdYm, ica_creatYmFrom, ica_creatYmTo]);
  if (!ret) {
    return false;
  }

  // 추가된 행수 확인
  //if ( ds_giveDept.CountRow <= 0 ) {
  // cfAlertMsg("추가된 배부부서가 없습니다.");
  // return;
  //}

  // 추가된 행수 확인
  if (ds_giveDept.getRowCount() <= 0) {
    await $c.win.alert($p, "추가된 배부부서가 없습니다.모든 부서가 생성됩니다.");
  }

  //반영할 기간의 시작과 끝을 비교
  if (ica_creatYmFrom.getValue() > ica_creatYmTo.getValue()) {
    await $c.win.alert($p, "반영할 기간의 범위가 잘못되었습니다.");
    ica_creatYmFrom.focus();
    return;
  }
  if (await $c.win.confirm($p, "반영할 기간의 기존 자료는 삭제됩니다.<BR>계속하시겠습니까?")) {
    $c.sbm.execute($p, sbm_master);
  }
};
scwin.sbm_master_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    $c.gus.f_cfAlertMsg($p, MSG_CM_INF_001);
  }
};
scwin.sbm_master_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 첫번째  그리드추가 - 차수별,배부부서코드  적용
 */
scwin.f_AddRowRegion = function () {
  let row = ds_giveDept.insertRow();
  gr_giveDept.setFocusedCell(row, "deptCd", true);
  totalRows.setValue(ds_giveDept.getRowCount());
};

/**
 * 행삭제
 */
scwin.f_Delete = function () {
  let row = ds_giveDept.getRowPosition();
  if (ds_giveDept.getRowStatus(row) == "C") {
    ds_giveDept.removeRow(row);
  } else {
    ds_giveDept.deleteRow(row);
    gr_giveDept.setCellReadOnly(row, "deptCd", true);
    gr_giveDept.setFocusedCell(row, 0);
  }
  totalRows.setValue(ds_giveDept.getRowCount());
};

/**
 * 행취소
 */
scwin.f_Cancel = function () {
  let row = ds_giveDept.getRowPosition();
  if (ds_giveDept.getRowStatus(row) == "C") {
    ds_giveDept.removeRow(row);
  } else {
    ds_giveDept.undoRow(row);
  }
  gr_giveDept.setFocusedCell(row, 0);
  totalRows.setValue(ds_giveDept.getRowCount());
};

/**
 * 엑셀파일 다운로드
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
// scwin.f_GridToExcel = function (gr_groupCode, gridName) {
//     var dataSet = new Object();
//     dataSet = eval(gr_groupCode.DataId);
//     if (dataSet.getRowCount() <= 0) {
//         $c.win.alert(gridName + "가(이) 존재하지않습니다.");
//         return false
//     }
//     $c.data.downloadGridViewExcel(gr_groupCode, gridName, "C:\\" + gridName + ".xls", 4 + 8 + 16);
// };

/**
 * 닫기
 */
scwin.f_WinClose = function (e) {
  let rt = ["N/A"];
  $c.win.closePopup($p, rt);
};

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
 * 부서코드(조회) 팝업 호출
 */
scwin.udc_deptCd_onclickEvent = function (e) {
  if (ed_deptCd.hidVal != ed_deptCd.getValue()) {
    ed_deptNm.setValue("");
  }
  // scwin.f_openPopUp(ed_deptCd, ed_deptNm, "1", "ALL");
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_deptCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openPopUp(ed_deptCd, ed_deptNm, "1", close);
};
scwin.udc_deptCd_onviewchangeCodeEvent = function (info) {
  ed_deptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_deptCd.getValue())) {
    // scwin.f_openPopUp(ed_deptCd, ed_deptNm, "1", "ALL");
    scwin.f_openPopUp(ed_deptCd, ed_deptNm, "1", "T");
  }
};

/**
 * 반영할기간 onBlue 이벤트(시작)
 */
scwin.udc_fromToYearMon_onBlur = function () {
  if (!$c.date.isDate($p, ica_creatYmFrom.getValue() + "01")) {
    ica_creatYmFrom.setValue("");
    ica_creatYmFrom.focus();
  }
  if (!$c.gus.cfIsNull($p, ica_creatYmFrom.getValue())) {
    ica_creatYmTo.focus();
  }
};

/**
 * 반영할기간 onBlue 이벤트(종료)
 */
scwin.udc_fromToYearMon_onBlurTo = function (e) {
  if (!$c.date.isDate($p, ica_creatYmTo.getValue() + "01")) {
    ica_creatYmTo.setValue("");
    ica_creatYmTo.focus();
  }
  if (!$c.gus.cfIsNull($p, ica_creatYmFrom.getValue()) && !$c.gus.cfIsNull($p, ica_creatYmTo.getValue())) {
    ed_deptCd.focus();
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * 그리드 셀 클릭
 */
scwin.gr_giveDept_oncellclick = function (rowIndex, columnIndex, columnId) {
  let status = ds_giveDept.getRowStatus(rowIndex);
  let ret = false;
  if (status == "D") {
    ret = true;
  }
  gr_giveDept.setCellReadOnly(rowIndex, "deptCd", ret);
};

/**
 * 그리드 셀의 편집모드가 종료되어 포커스가 빠져나온 경우 이벤트 발생
 */
scwin.gr_giveDept_onafteredit = function (rowIndex, columnIndex, value) {
  let columnId = gr_giveDept.getColumnID(columnIndex);
  if (columnId == "deptCd") {
    if (!$c.gus.cfIsNull($p, value)) {
      scwin.f_GridPop(columnId, rowIndex, value, "T");
    } else if ($c.gus.cfIsNull($p, value)) {
      ds_giveDept.setCellData(rowIndex, "deptNm", "");
    }
  }
};

/**
 * 그리드 이미지셀 클릭 이벤트
*/
scwin.gr_giveDept_ontextimageclick = function (rowIndex, columnIndex) {
  let columnId = gr_giveDept.getColumnID(columnIndex);
  let data = ds_giveDept.getCellData(rowIndex, columnId);
  let status = ds_giveDept.getRowStatus(rowIndex);
  if (columnId == "deptCd") {
    if (status != "D") {
      scwin.f_GridPop(columnId, rowIndex, data, "F");
    }
  }
  return true;
};

/**
 * 그리드 셀의 편집모드로 들어가기 전에 발생
 * 변경전 값 가지고 있도록 처리
 */
scwin.gr_giveDept_onbeforeedit = function (rowIndex, columnIndex, value) {
  let columnId = gr_giveDept.getColumnID(columnIndex);
  if (columnId == "deptCd") {
    scwin.oldValue = value;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'w80',displayFormat:'yyyy/MM',id:'ica_stdYm',mandatory:'true',objType:'key',pickerType:'dynamic',ref:'data:dma_master.stdYm',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'생성기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{edFromId:'ica_creatYmFrom',edToId:'ica_creatYmTo',id:'udc_fromToYearMon',mandatoryFrom:'true',mandatoryTo:'true',refDataMap:'dma_master',refEdDt:'creatYmTo',refStDt:'creatYmFrom',style:'',titleFrom:'생성기간',titleTo:'생성기간'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기준부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_deptCd',code:'distAcctDeptCd',codeId:'ed_deptCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_deptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_deptCd_onviewchangeCodeEvent',id:'udc_deptCd',mandatoryCode:'',maxlengthCode:'5',maxlengthName:'30',name:'distAcctDeptNm',nameId:'ed_deptNm',objTypeCode:'data',objTypeName:'key',popupID:'popup_deptCd',refDataCollection:'dma_master',selectID:'retrieveAcctDeptCdInfo',style:'',validExpCode:'부서',validTitle:'부서'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'배부부서',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"배부부서.xlsx", "sheetName":"배부부서", "type":"1"}',gridID:'gr_giveDept',gridUpYn:'N',grp:'grd_section1',id:'udc_excel',style:'',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox gvwfix'},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_giveDept',focusMode:'cell',id:'gr_giveDept',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',enterKeyMove:'editRight',rowStatusVisible:'true',rowStatusWidth:'20',readOnly:'true','ev:onafteredit':'scwin.gr_giveDept_onafteredit','ev:oncellclick':'scwin.gr_giveDept_oncellclick','ev:ontextimageclick':'scwin.gr_giveDept_ontextimageclick','ev:onbeforeedit':'scwin.gr_giveDept_onbeforeedit',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'120',value:'배부부서'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'300',value:'부서명'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'deptCd',inputType:'textImage',removeBorderStyle:'false',width:'120',editFormat:'#####',dataType:'number',mandatory:'true',validateOnInput:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'deptNm',inputType:'text',removeBorderStyle:'false',width:'300',textAlign:'left',mandatory:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_comCode_Grid'}},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelObj:'btn_cancel',btnCancelYn:'Y',btnDelYn:'N',btnRowAddObj:'btn_rowAdd',btnRowDelObj:'btn_rowDel',btnRowDelYn:'Y',gridID:'gr_giveDept',rowAddFunction:'scwin.f_AddRowRegion',style:'',cancelFunction:'scwin.f_Cancel',rowDelFunction:'scwin.f_Delete',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Create',id:'btn_create',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_WinClose',id:'btn_close',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})