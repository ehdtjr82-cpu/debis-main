/*amd /ui/ac/fi/stdinfomgnt/fi_100_10_02b.xml 24092 76caeb8cdc114e18854eb3497c33a60a1afcdb594f8b9d64d2c91157bac18a0d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipKndCd',saveRemovedData:'false','ev:onrowpositionchange':'scwin.ds_slipKndCd_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_postProcess',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'컴포넌트명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'컴포넌트경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postProcess',name:'회계처리프로세스',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.stdinfomgnt.RetrieveSlipKindListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_slipKndCd","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_slipKndCd", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDetail',action:'/ac.fi.stdinfomgnt.RetrievePostingProcessListCMD.do',method:'post',mediatype:'application/json',target:'data:json,{"id":"ds_postProcess", "key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDetail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.stdinfomgnt.UpdatePostingProcessContentsInsertCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_postProcess","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 회계처리프로세스등록
 * 메뉴경로 : 회계/재무회계/기준정보/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/fi/stdinfomgnt/fi_100_10_02b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-11-06
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항
 *    1. 그리드ID.setNoResultMessageVisible(false) 설정해줘야 그리드에 데이터없음 안보임
 * 수정이력 :
 *    - 2025-11-06      배기원    최초작성
 */
scwin.f_commCdPopupRow = 0; //그리드 팝업 호출 시 ROW값
scwin.oldValue = ""; //그리드 팝업 호출 시 비교값

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  // var SEARCH_HEADER = "slipKndCd:STRING(3)"
  //     + ",slipKndNm:STRING(30)"
  //     + ",useYn:DECIMAL";

  // ds_search.SetDataHeader(SEARCH_HEADER);
  // ds_search.insertRow();

  // c_slipKndCd.focus();
  // $c.gus.cfDisableObjects([bSav, bAdd, bCancel]);
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_slipKndCd.setNoResultMessageVisible(false);
  gr_postProcess.setNoResultMessageVisible(false);
  ds_slipKndCd.reform();
  ds_slipKndCd.removeAll();
  ds_postProcess.reform();
  ds_postProcess.removeAll();
  totalRows1.setValue("0");
  totalRows2.setValue("0");
  $c.gus.cfDisableBtn($p, [btn_add, btn_cancel, btn_save]);
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  ed_slipKndCd.focus();
};

/**
 * 조회필드 CLEAR
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
  ed_slipKndCd.hidVal = "";
};

/**
 * 조회
 */
scwin.f_Retrieve = function (e) {
  // ds_search.UseChangeInfo = false
  // ds_search.setCellData(1, "useYn", "-1");
  // sbm_search.setAction = "/ac.fi.stdinfomgnt.RetrieveSlipKindListCMD.do";
  // cfDisableKeyData();
  // cfDisableBtn([bSave]);
  scwin.setInit();
  dma_search.set("useYn", "-1");
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_slipKndCd.setNoResultMessageVisible(true);
  gr_postProcess.setNoResultMessageVisible(true);
  let rowCnt = ds_slipKndCd.getRowCount();
  totalRows1.setValue(rowCnt);
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    //조회된 결과 정렬(asis:<param name=SortExpr 참조)
    ds_slipKndCd.sort("slipKndCd", 0);
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    } else {
      gr_slipKndCd.setFocusedCell(0, 0);
      $c.gus.cfEnableObjects($p, [btn_add, btn_cancel, btn_save]);
    }
    ed_slipKndCd.focus();
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 상세조회
 */
scwin.f_postProcess = function (row) {
  // var condition = "?";
  // condition += "slipKndCd" + ds_slipKndCd.getCellData(row, "slipKndCd");
  // ds_postProcess.DataID = "/ac.fi.stdinfomgnt.RetrievePostingProcessListCMD.do" + condition;
  // ds_postProcess.undoAll();
  ds_postProcess.removeAll();
  totalRows2.setValue("0");
  $c.sbm.execute($p, sbm_retrieveDetail, ds_slipKndCd.getRowJSON(row));
};
scwin.sbm_retrieveDetail_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_postProcess.getRowCount();
  totalRows2.setValue(rowCnt);
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    gr_postProcess.setFocusedCell(0, 2);
  }
};
scwin.sbm_retrieveDetail_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 두번째 그리드추가 -  적용
 */
scwin.f_AddRowRegion = function () {
  var rowPosion = ds_slipKndCd.getRowPosition();
  var newRow = ds_postProcess.insertRow();
  ds_postProcess.setCellData(newRow, 'slipKndCd', ds_slipKndCd.getCellData(rowPosion, 'slipKndCd'));
  ds_postProcess.setCellData(newRow, 'slipKndNm', ds_slipKndCd.getCellData(rowPosion, 'slipKndNm'));
  ds_postProcess.setCellData(newRow, 'useYn', "1");
  $c.gus.cfEnableKeyData($p);
  gr_postProcess.setFocusedCell(newRow, "cdNm", true);
};

/**
 * 행삭제
 */
scwin.btn_delete = function () {
  var row = ds_postProcess.getRowPosition();
  if (ds_postProcess.getRowStatus(row) == "C") {
    ds_postProcess.removeRow(row);
  } else {
    ds_postProcess.deleteRow(row);
  }
};

/**
 * 취소
 */
scwin.f_Cancel = function (e) {
  $c.data.undoRow($p, ds_postProcess, "N");
};

/**
 * 저장
 */
scwin.f_Save = async function () {
  // if (ds_postProcess.IsUpdated == false) {
  if (ds_postProcess.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이타"]);
  } else {
    let ret = await $c.gus.cfValidate($p, [gr_postProcess]);
    if (!ret) {
      return false;
    }
    //중복체크 추가
    let chkArry = [];
    for (let i = 0; i < ds_postProcess.getRowCount(); i++) {
      let cdNm = ds_postProcess.getCellData(i, "cdNm");
      if (chkArry.indexOf(cdNm) > -1) {
        await $c.gus.cfAlertMsg($p, "회계처리프로세스의 " + (i + 1) + "번째 데이터에서 컴포넌트명은(는) 중복될 수 없습니다.");
        return false;
      }
      chkArry.push(cdNm);
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      sbm_save.userData1 = "noError";
      $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 팝업호출
 */
scwin.f_openPopUp = function (flag, check) {
  //asis 소스
  // 전표종류
  // rtnList = cfCommonPopUp('retrieveSlipKndCd', c_slipKndCd.text.trim(), c_slipKndNm.value, check, null, null, null, null, null, null, null, null, null);
  // scwin.f_resultPopEd(c_slipKndCd, c_slipKndNm, rtnList);
  udc_slipKndCd.cfCommonPopUp(scwin.udc_slipKndCd_callBackFunc, ed_slipKndCd.getValue(), ed_slipKndNm.getValue(), check, null, null, null, null, null, null, null, null, null, null, null, null, null);
};

/**
 * 전표종류(조회용) 팝업 callBack
 */
scwin.udc_slipKndCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_slipKndCd.setValue(ret[0]); // 전표종류코드
    ed_slipKndNm.setValue(ret[1]); // 전표종류명
    ed_slipKndCd.hidVal = ret[0]; // 히든값
  } else {
    ed_slipKndCd.setValue(""); // 전표종류코드
    ed_slipKndNm.setValue(""); // 전표종류명
    ed_slipKndCd.hidVal = ""; // 히든값
  }
};

/**
 * 팝업호출
 * tobe에서 사용안함(UDC udc_callBackFunc 사용)
 */
// scwin.f_checkPopEd = function (strCd, strNm, flag) {
//     if (strCd.text.trim() == strCd.hidVal)
//         return;

//     strNm.value = "";
//     strCd.hidVal = "";
//     if (strCd.text.trim() != "") scwin.f_openPopUp(flag, 'T');
// };
/**
 * 팝업결과
 * tobe에서 사용안함(UDC udc_callBackFunc 사용)
 */
// scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
//     if (rtnList != null) {
//         if (rtnList[0] == "N/A") return;
//         strCd.Text = rtnList[0]; // 코드
//         strNm.value = rtnList[1]; // 명
//         strCd.hidVal = rtnList[0]; // 히든값
//     } else {
//         strCd.Text = "";
//         strNm.value = "";
//         strCd.hidVal = "";
//     }
// };

/**
 * 엑셀파일 다운로드
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
// scwin.f_Excel = function() {
//     if ($c.win.confirm("Excel로 다운로드 하시겠습니까?")) {
//         $c.data.downloadGridViewExcel(objGridName, "전표종류조회", "전표종류조회.xls", 8 + 16);
//     }
// };
/**
 * 엑셀파일 다운로드
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
// scwin.f_Excel1 = function() {
//     if ($c.win.confirm("Excel로 다운로드 하시겠습니까?")) {
//         $c.data.downloadGridViewExcel(objGridName, "회계처리프로세스조회", "회계처리프로세스조회.xls", 8 + 16);
//     }
// };

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
 * 전표종류(조회영역) 팝업 호출
 */
scwin.udc_slipKndCd_onclickEvent = function (e) {
  if (ed_slipKndCd.hidVal != ed_slipKndCd.getValue()) {
    ed_slipKndNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_slipKndCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openPopUp("1", close);
};
scwin.udc_slipKndCd_onblurCodeEvent = function (e) {
  if (ed_slipKndCd.hidVal == ed_slipKndCd.getValue()) {
    return;
  }
  ed_slipKndNm.setValue("");
  ed_slipKndCd.hidVal = "";
  if (!$c.gus.cfIsNull($p, ed_slipKndCd.getValue())) {
    scwin.f_openPopUp("1", "T");
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
scwin.ds_slipKndCd_onrowpositionchange = function (info) {
  scwin.f_postProcess(info.newRowIndex);
};

/**
 * 그리드 이미지셀 클릭 이벤트
 */
scwin.gr_postProcess_ontextimageclick = function (rowIndex, columnIndex) {
  let columnId = gr_postProcess.getColumnID(columnIndex);
  let data = ds_postProcess.getCellData(rowIndex, columnId);
  let status = ds_postProcess.getRowStatus(rowIndex);
  if (columnId == "cdNm") {
    if (status != "D") {
      scwin.f_GridPop(columnId, rowIndex, data, "F");
    }
  }
  return true;
};

/**
 * 그리드 셀의 편집모드가 종료되어 포커스가 빠져나온 경우 이벤트 발생
 */
scwin.gr_postProcess_onafteredit = function (rowIndex, columnIndex, value) {
  let columnId = gr_postProcess.getColumnID(columnIndex);
  if (columnId == "cdNm") {
    if (!$c.gus.cfIsNull($p, value) && value != scwin.oldValue) {
      scwin.f_GridPop(columnId, rowIndex, value, "F");
    } else if ($c.gus.cfIsNull($p, value)) {
      ds_postProcess.setCellData(rowIndex, "cdDesc", "");
      ds_postProcess.setCellData(rowIndex, "postProcess", "");
    }
  }
};

/**
 * 그리드 셀의 편집모드로 들어가기 전에 발생
 * 변경전 값 가지고 있도록 처리
 */
scwin.gr_postProcess_onbeforeedit = function (rowIndex, columnIndex, value) {
  let columnId = gr_postProcess.getColumnID(columnIndex);
  if (columnId == "cdNm") {
    scwin.oldValue = value;
  }
};

/**
 * 그리드 팝업호출
 */
scwin.f_GridPop = async function (colId, row, data, close) {
  scwin.f_commCdPopupRow = row;
  let sqlId = "";
  if (colId == "cdNm") {
    ds_postProcess.setCellData(row, "cdDesc", "");
    ds_postProcess.setCellData(row, "postProcess", "");
    let param = "FI037";
    udc_comCode_Grid.setSelectId("retrieveCommCdInfo");
    //조회조건 9번째, 전체검색허용여부 15번째
    await udc_comCode_Grid.cfCommonPopUp(scwin.udc_comCode_Grid_cdNm_callBackFunc
    // , data
    , "", "", close, null, null, null, null, param, null, null, null, null, null, "T", null);
  }
};

/**
 * 컴포넌트(그리드팝업)
 */
scwin.udc_comCode_Grid_cdNm_callBackFunc = function (ret) {
  let rowIdx = scwin.f_commCdPopupRow;
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ds_postProcess.setCellData(rowIdx, "postProcess", ret[0]); //회계처리프로세스
    ds_postProcess.setCellData(rowIdx, "cdNm", ret[1]); //컴포넌트명
    ds_postProcess.setCellData(rowIdx, "cdDesc", ret[3]); //컴포넌트경로
  } else {
    ds_postProcess.setCellData(rowIdx, "postProcess", ""); //회계처리프로세스
    //ds_postProcess.setCellData(rowIdx, "cdNm"       , "");      //컴포넌트명
    ds_postProcess.setCellData(rowIdx, "cdDesc", ""); //컴포넌트경로
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_slipKndCd',btnId:'btn_slipKndCd',codeId:'ed_slipKndCd',nameId:'ed_slipKndNm',popupID:'popup_slipKndCd',validTitle:'전표종류조회',selectID:'retrieveSlipKndCd',refDataCollection:'dma_search',code:'slipKndCd',name:'slipKndNm',maxlengthCode:'3',objTypeCode:'data',UpperFlagCode:'1',editTypeCode:'focus',maxlengthName:'30',objTypeName:'key','ev:onclickEvent':'scwin.udc_slipKndCd_onclickEvent',style:'','ev:onblurCodeEvent':'scwin.udc_slipKndCd_onblurCodeEvent',editTypeName:'focus',afterAllowCharCode:'0-9',allowCharCode:'a-zA-Z0-9',allowCharCodeLength:'1',beforeAllowCharCode:'A-Za-z'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width:30%'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'전표종류',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"전표종류조회.xlsx", "sheetName":"전표종류조회", "type":"1", "hiddenVisible":false}',gridID:'gr_slipKndCd',gridUpYn:'N',grp:'grd_section1',id:'udc_excel1',style:'',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_slipKndCd',style:'',autoFit:'allColumn',id:'gr_slipKndCd',class:'wq_gvw',visibleRowNumFix:'true',readOnly:'true',focusMode:'row',visibleRowNum:'16'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'전표종류코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column17',value:'전표종류명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'slipKndCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'slipKndNm',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'회계처리프로세스',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"회계처리프로세스조회.xlsx", "sheetName":"회계처리프로세스조회", "type":"1", "hiddenVisible":false}',gridID:'gr_postProcess',gridUpYn:'N',grp:'grd_section2',id:'udc_excel2',style:'',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_postProcess',id:'gr_postProcess',style:'',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'20',focusMode:'cell',visibleRowNum:'16',enterKeyMove:'editRight',keepDefaultColumnWidth:'true','ev:onafteredit':'scwin.gr_postProcess_onafteredit','ev:onbeforeedit':'scwin.gr_postProcess_onbeforeedit'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'전표종류코드',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'전표종류명',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'컴포넌트명',width:'160',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'컴포넌트경로',width:'400',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'사용여부',width:'100',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndCd',inputType:'text',width:'140',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndNm',inputType:'text',width:'160',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cdNm',inputType:'textImage',width:'160',textAlign:'left',readOnly:'true',imageClickFunction:'scwin.gr_postProcess_ontextimageclick',mandatory:'true',viewType:'icon'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cdDesc',inputType:'text',width:'400',textAlign:'left',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useYn',inputType:'select',width:'100',allOption:'',chooseOption:'',ref:'',viewType:'icon'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_comCode_Grid'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{gridID:'gr_postProcess',id:'udc_bottomGrdBtn',btnCancelYn:'Y',btnDelYn:'N',rowAddUserAuth:'C',btnRowDelYn:'N',style:'',btnRowAddObj:'btn_add',btnCancelObj:'btn_cancel',cancelFunctoion:'scwin.btn_cancel',rowAddFunction:'scwin.f_AddRowRegion',cancelFunction:'scwin.f_Cancel'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U',objType:'bSave','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})