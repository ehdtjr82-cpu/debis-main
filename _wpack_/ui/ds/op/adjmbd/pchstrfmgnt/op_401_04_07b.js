/*amd /ui/ds/op/adjmbd/pchstrfmgnt/op_401_04_07b.xml 39572 303d4a7efe64163f1e5b2fb9d20c9f34979c608b955b21d163f3856736c22a32 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text',length:'4'}},{T:1,N:'w2:key',A:{id:'trfClsCd',name:'요율구분코드',dataType:'text',length:'2'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'stDt',name:'시작일자',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text',length:'8'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text',length:'255'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',length:'70'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',length:'255'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text',length:'255'}},{T:1,N:'w2:column',A:{id:'trfClsCd',name:'요율구분코드',dataType:'text',length:'255'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'text',length:'255'}},{T:1,N:'w2:column',A:{id:'stDt',name:'시작일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'endDt',name:'종료일자',dataType:'text',length:'255'}},{T:1,N:'w2:column',A:{id:'endDt2',name:'#N/A',dataType:'text',length:'255'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'wrkStp',name:'작업단계',dataType:'text',length:'255'}},{T:1,N:'w2:column',A:{id:'upr',name:'단가',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'stvPayCmisRtClsCd',name:'하역지급수수료율구분코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'txnProcPattern',name:'거래처리유형',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_results1',repeatNode:'map',saveRemovedData:'true',style:'',rowNumData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'lobranCd',name:'물류점소코드',length:'4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNo',name:'거래처번호',length:'6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNm',name:'거래처명',length:'70'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commCd',name:'품명코드',length:'8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commNm',name:'품명',length:'100'}},{T:1,N:'w2:column',A:{dataType:'text',id:'trfClsCd',name:'요율구분코드',length:'2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'unitCd',name:'Unit 코드',length:'3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'stDt',name:'시작일자',length:'8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'endDt',name:'종료일자',length:'8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'endDt2',name:'#N/A',length:'8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtEndDt',name:'계약종료일자',length:'8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStp',name:'작업단계',length:'4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'upr',name:'단가',length:'15'}},{T:1,N:'w2:column',A:{id:'stvPayCmisRtClsCd',name:'하역지급수수료율구분코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'txnProcPattern',name:'거래처리유형',dataType:'text',length:'255'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.adjmbd.pchstrfmgnt.RetrieveEntrustStevedoringFixingBerthUseTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"},{"id":"ds_results1","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_results","key":"OUT_DS1"},{"id":"ds_results1","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ds.op.adjmbd.pchstrfmgnt.SaveEntrustStevedoringFixingBerthUseTariffCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',id:'sbm_save',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,{"id":"ds_results1","key":"IN_DS1"}',replace:'',target:'',style:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.btnFlag = ""; // 신규, 수정 구분자
  scwin.rowFlag = ""; // 등록, 수정 후 저장 안하고 다른 master row 선택 불가능 구분자
  scwin.pos_groupCode = 0; // 저장전 DataSet의 RowPosition을 저장 변수 
  scwin.gv_loabranCd = $c.data.getMemInfo($p, "loUpperLobranCd");
  scwin.curDate = $c.date.getServerDateTime($p);
  scwin.check = false;
  lc_lobranCd.setValue(scwin.gv_loabranCd);
  const codeOptions = [{
    grpCd: "OP202",
    compID: "lc_trfClsCd,gr_results:stvPayCmisRtClsCd"
  }, {
    grpCd: "LO102",
    compID: "gr_results1:unitCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  const comboOptions = [{
    method: "getLuxeComboData",
    param1: "LoBranEBC",
    param2: "retriveLoBranUpperList",
    compID: "lc_lobranCd"
  }, {
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveWrkStpCdCombo",
    compID: "gr_results1:wrkStp"
  }];
  $c.data.setGauceUtil($p, comboOptions);
  scwin.f_switchObjMode(1);
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  udc_fromToCalendar.setInitDate(scwin.curDate.substring(0, 6) + "01", scwin.curDate);
  ed_clntNo.focus();
};

//-------------------------------------------------------------------------
// 화면구성요소 제어(버튼 입력박스등등 disable, enable)
//-------------------------------------------------------------------------
scwin.f_switchObjMode = function (gubun) {
  switch (gubun) {
    case 1:
      //화면로딩
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_save]);
      $c.gus.cfDisableObjects($p, [udc_btGrdBtn, udc_btGrdBtn1]);
      break;
    case 2:
      //조회
      break;
    case 3:
      //신규
      break;
    case 4:
      //수정
      $c.gus.cfEnableBtnOnly($p, [btn_save]);
      $c.gus.cfEnableObjects($p, [udc_btGrdBtn, udc_btGrdBtn1]);
      break;
    case 5:
      //조회완료
      $c.gus.cfEnableBtnOnly($p, [btn_save]);
      $c.gus.cfEnableObjects($p, [udc_btGrdBtn, udc_btGrdBtn1]);
      break;
    case 6:
      //수정불가
      break;
    case 7:
      //행삭제, 취소
      break;
    case 8:
      //행추가
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [lc_lobranCd, lc_trfClsCd, ed_stDt, ed_ctrtEndDt]))) {
    return;
  }
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 협력업체 그리드 클릭 > 품목별 요율 filter
//-------------------------------------------------------------------------
scwin.f_result1Filter = function () {
  let rowObj = ds_results.getRowJSON(gr_results.getFocusedRowIndex());
  let condition = `stDt=='${rowObj.stDt}'&&ctrtEndDt=='${rowObj.ctrtEndDt}'&&clntNo=='${rowObj.clntNo}'&&stvPayCmisRtClsCd=='${rowObj.stvPayCmisRtClsCd}'`;
  ds_results1.clearFilter();
  $c.data.dataListFilter($p, "ds_results1", condition);
  if (ds_results1.getRowCount()) {
    gr_results1.setFocusedCell(0, gr_results1.getFocusedColumnIndex() ?? 0, false);
  }
};

//-------------------------------------------------------------------------
// 팝업호출
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopupText = async function (inObj, pairObj, disGubun) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);
  await scwin.f_openCommonPopUp(disGubun);
};
scwin.f_openCommonPopUp = async function (disGubun, row = -1, sWinCloseTF = "T") {
  // 선언부
  let pCode = "";
  let pName = "";
  switch (disGubun) {
    case 1:
      //협력업체조회
      pCode = ed_clntNo.getValue().replace(/\s*$/, '');
      pName = ed_copCoClntNm.getValue();
      rtnList = udc_clntNo.cfCommonPopUp(scwin.callBackClntNo, pCode, pName, sWinCloseTF, null, null, null, null, null, null, null, null, null, null, "F");
      break;
    case 3:
      //협력업체조회(grid)
      if (row < 0) {
        return;
      }
      bigyo = ds_results.getCellData(row, "clntNo").toUpperCase();
      if (bigyo != 'ZZZZZZ' && bigyo != " ") {
        pCode = ds_results.getCellData(row, "clntNo").replace(/\s*$/, '').toUpperCase();
        pName = ds_results.getCellData(row, "clntNm");
        ds_results.setCellData(row, "clntNo", "");
        ds_results.setCellData(row, "clntNm", "");
        udc_comCode.setSelectId('retrieveClntNoInfo');
        await udc_comCode.cfCommonPopUpAsync(rtnList => {
          if (rtnList != null && rtnList[0] != "N/A") {
            ds_results.setCellData(row, "clntNo", rtnList[0]);
            ds_results.setCellData(row, "clntNm", rtnList[1]);
          } else {
            ds_results.setCellData(row, "clntNo", "");
            ds_results.setCellData(row, "clntNm", "");
          }
        }, pCode, pName, sWinCloseTF, null, null, null, null, null, null, null, null, null);
      } else {
        if (bigyo == 'ZZZZZZ') {
          ds_results.setCellData(row, "clntNo", bigyo);
          ds_results.setCellData(row, "clntNm", "협정요율");
        } else if (bigyo == '') {
          ds_results.setCellData(row, "clntNo", "");
          ds_results.setCellData(row, "clntNm", "공통요율");
        } else {
          return null;
        }
      }
      break;
    case 4:
      //품명(grid)
      if (row < 0) {
        return;
      }
      pCode = ds_results1.getCellData(row, "commCd").replace(/\s*$/, '').toUpperCase();
      pName = ds_results1.getCellData(row, "commNm").replace(/\s*$/, '');
      ds_results1.setCellData(row, "commCd", ""); //품목코드
      ds_results1.setCellData(row, "commNm", ""); //품목
      param = "2,4,,," + ed_clntNo.getValue().replace(/\s*$/, '');
      udc_comCode.setSelectId('retrieveCommInfo');
      await udc_comCode.cfCommonPopUpAsync(rtnList => {
        if (rtnList != null && rtnList[0] != "N/A") {
          ds_results1.setCellData(row, "commCd", rtnList[0]); //품목코드
          ds_results1.setCellData(row, "commNm", rtnList[1]); //품목
        } else {
          ds_results1.setCellData(row, "commCd", ""); //품목코드
          ds_results1.setCellData(row, "commNm", ""); //품목
        }
      }, pCode, pName, sWinCloseTF, '3', '품목／품명코드,품목／품명,구분', '120,170,70', '4,5,6,7,8,9,10', param, '440', '500', null, null, null, 'T', '품목／품명,품목／품명코드,품목／품명');
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 CallBack
//-------------------------------------------------------------------------
scwin.callBackClntNo = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_clntNo.setValue(rtnList[0]);
    ed_copCoClntNm.setValue(rtnList[1]);
  } else {
    ed_clntNo.setValue("");
    ed_copCoClntNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  let row;
  if (ds_results.getRowCount() == 0) {
    row = ds_results.insertRow();
    ds_results.setCellData(row, "stDt", ed_stDt.getValue());
    ds_results.setCellData(row, "ctrtEndDt", ed_ctrtEndDt.getValue());
  } else {
    row = ds_results.getRowPosition() + 1;
    ds_results.insertRow(row);
  }
  gr_results.setFocusedCell(row, 0);
  let row1 = ds_results1.insertRow();
  gr_results1.setFocusedCell(row1, 0);
  ds_results1.setCellData(row1, "stDt", ds_results.getCellData(row, "stDt"));
  ds_results1.setCellData(row1, "ctrtEndDt", ds_results.getCellData(row, "ctrtEndDt"));
  ds_results1.setCellData(row1, "lobranCd", lc_lobranCd.getValue());
  ds_results1.setCellData(row1, "trfClsCd", lc_trfClsCd.getValue());
  ds_results1.setCellData(row1, "clntNo", ds_results.getCellData(row, "clntNo"));
  ds_results1.setCellData(row1, "clntNm", ds_results.getCellData(row, "clntNm"));
  ds_results1.setCellData(row1, "stvPayCmisRtClsCd", ds_results.getCellData(row, "stvPayCmisRtClsCd"));
  ds_results1.setCellData(row1, "upr", "0");
  ds_results1.setCellData(row1, "txnProcPattern", "C");
  scwin.gr_results_onrowindexchange(row, null, row1);
  //scwin.f_switchObjMode(8);        
};
scwin.f_AddRow1 = async function () {
  if (!(await $c.gus.cfValidate($p, [gr_results]))) {
    return;
  }
  let row = gr_results.getFocusedRowIndex();
  let data = ds_results.getRowJSON(row);
  let row1 = ds_results1.insertRow();
  ds_results1.setCellData(row1, "stDt", data.stDt);
  ds_results1.setCellData(row1, "ctrtEndDt", data.ctrtEndDt);
  ds_results1.setCellData(row1, "lobranCd", lc_lobranCd.getValue());
  ds_results1.setCellData(row1, "trfClsCd", lc_trfClsCd.getValue());
  ds_results1.setCellData(row1, "clntNo", data.clntNo);
  ds_results1.setCellData(row1, "clntNm", data.clntNm);
  ds_results1.setCellData(row1, "stvPayCmisRtClsCd", data.stvPayCmisRtClsCd);
  ds_results1.setCellData(row1, "upr", "0");
  ds_results1.setCellData(row1, "txnProcPattern", "C");
  gr_results1.setFocusedCell(row1, gr_results1.getFocusedColumnIndex() ?? 0, false);
};

//-------------------------------------------------------------------------
// 행삭제 
//-------------------------------------------------------------------------
scwin.f_DeleteRow = function () {
  let row1 = gr_results1.getFocusedRowIndex();
  if (row1 !== null && row1 >= 0) {
    ds_results1.setCellData(row1, "txnProcPattern", "D");
  }
  let row = gr_results.getFocusedRowIndex();
  let data = ds_results.getRowJSON(row);
  let matched = [];
  if ("" == data.stDt && "" == data.ctrtEndDt && "" == data.clntNo && "" == data.stvPayCmisRtClsCd) {
    matched.push(row1);
  } else {
    if (gr_results1.getRowCount()) {
      let allData = ds_results1.getAllFilteredJSON();
      for (let idx = 0; idx < allData.length; ++idx) {
        let rowObj = allData[idx];
        if (rowObj.stDt == data.stDt && rowObj.ctrtEndDt == data.ctrtEndDt && rowObj.clntNo == data.clntNo && rowObj.stvPayCmisRtClsCd == data.stvPayCmisRtClsCd) {
          matched.unshift(idx);
        }
      }
    }
  }
  for (let idx of matched) {
    if (ds_results1.getRowStatus(idx) == "C") {
      ds_results1.removeRow(idx);
    } else {
      ds_results1.deleteRow(idx);
    }
  }
  if (gr_results.getFocusedRowStatus() == "C") {
    ds_results.removeRow(row);
    if (row >= ds_results.getRowCount()) {
      row = ds_results.getRowCount() - 1;
    } else {
      scwin.gr_results_onrowindexchange(row);
    }
  } else {
    ds_results.deleteRow(row);
  }
  gr_results.setFocusedCell(row, gr_results.getFocusedColumnIndex() ?? 0, false);
  //scwin.f_switchObjMode(7);
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  let row = gr_results1.getFocusedRowIndex();
  if (gr_results1.getFocusedRowStatus() == "C") {
    ds_results1.removeRow(row);
  } else {
    ds_results1.undoRow(row);
  }
  row = gr_results.getFocusedRowIndex();
  if (gr_results.getFocusedRowStatus() == "C") {
    ds_results.removeRow(row);
  } else {
    ds_results.undoRow(row);
  }
  scwin.gr_results_onrowindexchange(row);
};

//-------------------------------------------------------------------------
// 저장 
//-------------------------------------------------------------------------
scwin.f_save = async function () {
  if (ds_results.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_001, ["임차료율"]);
    return;
  }
  // 검색조건 필수 입력 체크
  if (!(await $c.gus.cfValidate($p, [gr_results]))) {
    return;
  }
  if (!(await $c.gus.cfValidate($p, [gr_results1]))) {
    return;
  }
  if (ds_results1.getRowCount() == 0) {
    await $c.win.alert($p, "Detail Data를 입력하여 주세요");
    return;
  }
  if (await $c.win.confirm($p, "저장하시겠습니까?")) {
    scwin.pos_groupCode = ds_results.getRowPosition(); // 저장 전의 위치 저장
    $c.sbm.execute($p, sbm_save);
  }
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_search_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  }
  let rowCnt = ds_results.getRowCount();
  spn_results.setValue(rowCnt);
  spn_results1.setValue(ds_results1.getRowCount());
  $c.gus.cfGoPrevPosition($p, gr_results, scwin.pos_groupCode);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    scwin.f_switchObjMode(1);
    scwin.f_switchObjMode(5);
    return;
  }
  scwin.f_switchObjMode(4);
};

//저장 완료
scwin.sbm_save_submitdone = async function (e) {
  scwin.rowFlag = ""; // 사용여부 확인
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//조회영역 협력업체 찾기 버튼
scwin.udc_clntNo_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(1, -1, 'F');
};
scwin.udc_clntNo_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopupText(ed_clntNo, ed_copCoClntNm, 1);
};
scwin.udc_clntNo_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopupText(ed_copCoClntNm, ed_clntNo, 1);
};

//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};

//저장 버튼
scwin.btn_save_onclick = function (e) {
  scwin.f_save();
};

//협력업체 그리드 row 변경
scwin.gr_results_onrowindexchange = function (row, oldRow, focusRow = 0) {
  if (ds_results.getRowStatus(row) == "C") {
    //인서트인경우
    gr_results.setReadOnly("cell", row, "stDt", false);
    gr_results.setReadOnly("cell", row, "ctrtEndDt", false);
    gr_results.setReadOnly("cell", row, "stvPayCmisRtClsCd", false);
    gr_results.setReadOnly("cell", row, "clntNo", false);
    gr_results.setReadOnly("cell", row, "clntNm", false);
    gr_results.setEditModeEvent("onclick");
  } else {
    gr_results.setReadOnly("cell", row, "stDt", true);
    gr_results.setReadOnly("cell", row, "ctrtEndDt", false);
    gr_results.setReadOnly("cell", row, "stvPayCmisRtClsCd", true);
    gr_results.setReadOnly("cell", row, "clntNo", true);
    gr_results.setReadOnly("cell", row, "clntNm", true);
    gr_results.setEditModeEvent("ondblclick");
  }
  scwin.f_result1Filter();
  spn_results1.setValue(ds_results1.getRowCount());
  gr_results1.setFocusedCell(focusRow, 0);
  scwin.gr_results1_onrowindexchange(focusRow);
  //scwin.f_switchObjMode(8);
};

//협력업체 그리드 값 변경
scwin.gr_results_onviewchange = async function (info) {
  let row = info.rowIndex;
  let colId = info.colId;
  if (info.newValue != info.oldValue) {
    //인서트일때 왼쪽 데이터가 바뀌면 오른쪽 그리드에도 적용해야한다
    if (colId == "clntNo") {
      ds_results.setCellData(row, "clntNm", "");
      if (info.newValue == "") {
        ds_results.setCellData(row, colId, "");
      } else {
        await scwin.f_openCommonPopUp(3, row);
      }
    } else if (colId == "clntNm") {
      ds_results.setCellData(row, "clntNo", "");
      if (info.newValue == "") {
        ds_results.setCellData(row, colId, "");
      } else {
        await scwin.f_openCommonPopUp(3, row);
      }
    } else if (colId == "stDt" || colId == "ctrtEndDt") {
      let v_stDt = ds_results.getCellData(row, "stDt");
      let v_ctrtEndDt = ds_results.getCellData(row, "ctrtEndDt");
      if (v_stDt !== "" && v_ctrtEndDt !== "") {
        if (v_stDt.trim().length != 8 || v_ctrtEndDt.trim().length != 8 || !$c.gus.cfIsAfterDate($p, v_stDt, v_ctrtEndDt, false)) {
          gr_results.setEventPause("onviewchange", true);
          gr_results.setEventPause("oneditend", true);
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
          gr_results.setFocusedCell(row, colId, true);
          gr_results.setEventPause("onviewchange", false);
          gr_results.setEventPause("oneditend", false);
          return;
        }
      }
    }
    let rowJson = ds_results.getRowJSON(row);
    for (let i = 0; i < ds_results1.getAllFilteredJSON().length; i++) {
      ds_results1.setCellData(i, "stDt", rowJson.stDt);
      ds_results1.setCellData(i, "ctrtEndDt", rowJson.ctrtEndDt);
      ds_results1.setCellData(i, "clntNo", rowJson.clntNo);
      ds_results1.setCellData(i, "stvPayCmisRtClsCd", rowJson.stvPayCmisRtClsCd);
    }
  }
  scwin.f_result1Filter();
};
scwin.gr_results_oneditend = async function (row, col, value) {
  let colId = gr_results.getColumnID(col);
  let v_stDt = ds_results.getCellData(row, "stDt");
  let v_ctrtEndDt = ds_results.getCellData(row, "ctrtEndDt");
  switch (colId) {
    case "stDt":
      v_stDt = value;
      break;
    case "ctrtEndDt":
      v_ctrtEndDt = value;
      break;
    default:
      return;
  }
  if (v_stDt !== "" && v_ctrtEndDt !== "") {
    if (v_stDt.trim().length != 8 || v_ctrtEndDt.trim().length != 8 || !$c.gus.cfIsAfterDate($p, v_stDt, v_ctrtEndDt, false)) {
      gr_results.setEventPause("onviewchange", true);
      gr_results.setEventPause("oneditend", true);
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
      gr_results.setFocusedCell(row, colId, true);
      gr_results.setEventPause("onviewchange", false);
      gr_results.setEventPause("oneditend", false);
      return;
    }
  }
};

//협력업체정보 그리드 코드 클릭
scwin.gr_results_ontextimageclick = async function (row, col) {
  let colId = gr_results.getColumnID(col);
  if (colId == "clntNo") {
    await scwin.f_openCommonPopUp(3, row, 'F');
  }
};

//협력업체 그리드 더블클릭
scwin.gr_results1_oneditdblclick = async function (row, col, colid) {
  if (colid == "upr" && ds_results1.getCellData(row, "endDt2") != '') {
    await $c.win.alert($p, "계약 종료된 Data는 요율을 수정할 수 없습니다.");
  }
};

//품목별요율 그리드 row 변경
scwin.gr_results1_onrowindexchange = function (row, oldRow) {
  if (ds_results1.getRowStatus(row) == "C") {
    //인서트인경우
    gr_results1.setReadOnly("cell", row, "commCd", false);
    gr_results1.setReadOnly("cell", row, "commNm", false);
    gr_results1.setReadOnly("cell", row, "unitCd", false);
    gr_results1.setReadOnly("cell", row, "upr", false);
    gr_results1.setReadOnly("cell", row, "wrkStp", false);
    gr_results1.setEditModeEvent("onclick");
  } else {
    gr_results1.setReadOnly("cell", row, "commCd", true);
    gr_results1.setReadOnly("cell", row, "commNm", true);
    gr_results1.setReadOnly("cell", row, "unitCd", true);
    gr_results1.setReadOnly("cell", row, "wrkStp", true);
    if (ds_results1.getCellData(row, "endDt2") == "") {
      gr_results1.setReadOnly("cell", row, "upr", false);
    } else {
      gr_results1.setReadOnly("cell", row, "upr", true);
    }
    gr_results1.setEditModeEvent("ondblclick");
  }
};

//중기별임차요율 그리드 코드, 규격 클릭
scwin.gr_results1_ontextimageclick = async function (row, col) {
  let colId = gr_results1.getColumnID(col);
  if (colId == "commCd") {
    await scwin.f_openCommonPopUp(4, row, 'F');
  }
};

//품목별요율 그리드 값 변경
scwin.gr_results1_onviewchange = async function (info) {
  let row = info.rowIndex;
  let rowObj = ds_results1.getRowJSON(row);
  let colId = gr_results1.getColumnID(info.colIndex);
  let changeUpr = false;
  if (info.newValue != info.oldValue) {
    switch (colId) {
      case "commCd":
        ds_results1.setCellData(row, "commNm", "");
        if (info.newValue == "") {
          ds_results.setCellData(row, colId, "");
        } else {
          await scwin.f_openCommonPopUp(4, row);
        }
        break;
      case "commNm":
        ds_results1.setCellData(row, "commCd", "");
        if (info.newValue == "") {
          ds_results.setCellData(row, colId, "");
        } else {
          await scwin.f_openCommonPopUp(4, row);
        }
        break;
      case "upr":
        changeUpr = true;
        break;
    }
  }
  if (changeUpr && rowObj.endDt != '') {
    ds_results1.setCellData(row, "txnProcPattern", "U");
  }
  rowObj = ds_results.getRowJSON(gr_results.getFocusedRowIndex());
  ds_results1.setCellData(row, "stvPayCmisRtClsCd", rowObj.stvPayCmisRtClsCd);
  ds_results1.setCellData(row, "clntNo", rowObj.clntNo);
  ds_results1.setCellData(row, "stDt", rowObj.stDt);
  ds_results1.setCellData(row, "ctrtEndDt", rowObj.ctrtEndDt);
  ds_results1.setCellData(row, "stvPayCmisRtClsCd", rowObj.stvPayCmisRtClsCd);
  //scwin.f_result1Filter();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:35px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:200px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_lobranCd',ref:'data:dma_search.lobranCd',renderType:'',style:'width:200px;',submenuSize:'auto',mandatory:'true','data-length':'4',chooseOptionLabel:'전체',title:'점소',visibleRowNum:'10'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요율구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'lc_trfClsCd',style:'width:200px;height:21px;',submenuSize:'auto',search:'start',mandatory:'true',class:'',searchTarget:'value',ref:'data:dma_search.trfClsCd','data-length':'2',visibleRowNum:'10'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupClntNo',selectID:'retrieveClntNoInfo',codeId:'ed_clntNo',popupTitle:'',nameId:'ed_copCoClntNm',id:'udc_clntNo',mandatoryName:'false',mandatoryCode:'false',readOnlyName:'false',readOnlyCode:'false',btnId:'btn_clntNo',validExpCode:'협력업체:yes',refDataCollection:'dma_search',code:'clntNo','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent',maxlengthCode:'6',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용기준일자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'stDt',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar',refEdDt:'ctrtEndDt',edFromId:'ed_stDt',edToId:'ed_ctrtEndDt',mandatoryFrom:'true',mandatoryTo:'true',validExp:'적용기간:yes:date=YYYYMMDD'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'협력업체',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''}}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',autoFit:'allColumn',resize:'true','ev:onrowindexchange':'scwin.gr_results_onrowindexchange',rowStatusVisible:'true',editModeEvent:'ondblclick',viewChangeAfterEdit:'true','ev:onviewchange':'scwin.gr_results_onviewchange',gridName:'협력업체','ev:ontextimageclick':'scwin.gr_results_ontextimageclick',rowStatusWidth:'20','ev:oneditend':'scwin.gr_results_oneditend'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type1',displayMode:'label',id:'column1',inputType:'text',removeBorderStyle:'false',value:'시작일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column2',inputType:'text',removeBorderStyle:'false',value:'종료일자',width:'100',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column7',value:'요율구분',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column5',value:'협력업체',displayMode:'label',colSpan:'2',rowSpan:'',class:'col-type1',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column10',value:'코드',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column9',value:'명칭',displayMode:'label',class:'col-type1'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'stDt',inputType:'calendar',removeBorderStyle:'false',width:'100',mandatory:'true',calendarValueType:'yearMonthDate',maxLength:'8'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ctrtEndDt',inputType:'calendar',removeBorderStyle:'false',width:'100',mandatory:'true',maxLength:'8'}},{T:1,N:'w2:column',A:{width:'200',inputType:'select',style:'',id:'stvPayCmisRtClsCd',value:'',displayMode:'value delim label',mandatory:'true',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'clntNo',value:'',displayMode:'label',mandatory:'true',maxLength:'6',viewType:'default'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left',mandatory:'true',maxLength:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_results',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_btGrdBtn',gridID:'gr_results',rowAddFunction:'scwin.f_AddRow',btnCancelYn:'Y',btnDelYn:'N',rowDelFunction:'scwin.f_DeleteRow',cancelFunction:'scwin.f_Cancel'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'품목별 요율',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''}}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_results1',id:'gr_results1',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',autoFit:'allColumn',resize:'true',rowStatusVisible:'true',editModeEvent:'ondblclick','ev:onrowindexchange':'scwin.gr_results1_onrowindexchange','ev:onviewchange':'scwin.gr_results1_onviewchange',gridName:'품목별 요율',rowStatusWidth:'20','ev:oneditdblclick':'scwin.gr_results1_oneditdblclick','ev:ontextimageclick':'scwin.gr_results1_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type1',displayMode:'label',id:'column1',inputType:'text',removeBorderStyle:'false',value:'품목／품명',width:'200',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column14',value:'작업단계',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column11',value:'단위',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'요금',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column8',value:'구분',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column4',value:'코드',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column3',value:'명칭',displayMode:'label',class:'col-type1'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commCd',inputType:'textImage',removeBorderStyle:'false',width:'100',mandatory:'true',maxLength:'8',viewType:'default'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commNm',inputType:'text',removeBorderStyle:'false',width:'100',mandatory:'true',maxLength:'100'}},{T:1,N:'w2:column',A:{width:'150',inputType:'select',style:'',id:'wrkStp',value:'',displayMode:'value delim label',mandatory:'true',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'unitCd',value:'',displayMode:'value delim label',mandatory:'true',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'upr',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0.###',textAlign:'right',maxLength:'12.3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'txnProcPattern',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_results1',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_btGrdBtn1',gridID:'gr_results1',rowAddFunction:'scwin.f_AddRow1',btnDelYn:'N',btnCancelYn:'Y'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn',id:'btn_save',label:'저장',style:'',objType:'bSave','ev:onclick':'scwin.btn_save_onclick'}}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'',style:'width:%; height:px;display: none;',id:'udc_comCode'}}]}]}]}]}]})