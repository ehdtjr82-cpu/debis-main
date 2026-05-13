/*amd /ui/cm/bc/rentloan/zz_900_03_01b.xml 37682 2f2e5566c87dc1d719b87038ffdfc6c9570ed6dc8dbe04a5a0a273bfd86d8e0c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'procYm',name:'처리년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mergeRentloanNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgAdjmNoYn',name:'청구정산번호유무',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNo',name:'계약등록자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyPayClsCd',name:'정산구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'uppermostBizDomCd',name:'최상위사업영역',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procYm',name:'procYm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanNo',name:'rentloanNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanSeq',name:'rentloanSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mergeRentloanNo',name:'mergeRentloanNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'acctDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'clntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'crn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPaySeq',name:'collMoneyPaySeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayClsCd',name:'collMoneyPayClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayCondCd',name:'collMoneyPayCondCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayAmt',name:'collMoneyPayAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayDt1',name:'collMoneyPayDt1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayDt2',name:'collMoneyPayDt2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayDt3',name:'collMoneyPayDt3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmNo',name:'bilgAdjmNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'slipNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStDt',name:'rsltsStDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsEndDt',name:'rsltsEndDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslYn',name:'vsslYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exceptYn',name:'exceptYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBilgClsCd',name:'payBilgClsCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_uppermostBizdom',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_uppermostBizdom'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_uppermostBizdom',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_uppermostBizdom","key":"IN_DS1"}',target:'data:json,{"id":"ds_uppermostBizdom","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_uppermostBizdom_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/cm.bc.rentloan.RetrieveRentLoanPaymentCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_list","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/cm.bc.rentloan.SaveRentLoanPaymentCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_list","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancel',action:'/cm.bc.rentloan.CancelRentLoanPaymentCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_list","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_cancel_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DGlobalValue.js',type:'text/javascript',scopeVariable:'D'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId;
scwin.userNm = scwin.memJson.userNm;
scwin.empNo = scwin.memJson.empNo;
scwin.sysAdminYn = scwin.memJson.sysAdminYn;
if (scwin.memJson.acctDeptCd == null) {
  scwin.acctDeptCd = "";
} else {
  scwin.acctDeptCd = scwin.memJson.acctDeptCd;
}
if (scwin.memJson.acctDeptNm == null) {
  scwin.acctDeptNm = "";
} else {
  scwin.acctDeptNm = scwin.memJson.acctDeptNm;
}
scwin.privAdmin = scwin.memJson.privAdmin; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님
scwin.strBasSdId = "/cm/bc/rentloan/zz_900_01_02b.jsp";
scwin.uppermostBizdomcd = ""; //최상위사업영역
scwin.sChk = 0; // 미선택 : 0, 미청구/정산번호 선택 : 1, 청구/정산번호 선택 : 2
scwin.currDate = WebSquare.date.getFormattedDate(new Date(), "yyyyMM");
scwin.onpageload = function () {
  scwin.f_FieldClear();
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveUppermostBizDomInfo",
    param1: scwin.empNo
  };
  dma_uppermostBizdom.setJSON(params);
  $c.sbm.execute($p, sbm_uppermostBizdom);

  //정산번호유무
  lc_bilgAdjmNoYn.addItem(D.ALL, "전체", 0);
  lc_bilgAdjmNoYn.addItem(D.FALSE, "아니오", 1);
  lc_bilgAdjmNoYn.addItem(D.TRUE, "예", 2);
  //<%=DGlobalValue.ALL%>^,<%=DGlobalValue.TRUE%>^예,<%=DGlobalValue.FALSE%>^아니오">
};
scwin.onUdcCompleted = function () {
  const codeOptions = [
  // { grpCd : "ZZ918", compID : "lc_collMoneyPayClsCd", opt : {'range': '1,1'}},
  {
    grpCd: "ZZ918",
    compID: "lc_collMoneyPayClsCd, gr_list:collMoneyPayClsCd",
    opt: {
      'range': '1,1'
    }
  }, {
    grpCd: "ZZ919",
    compID: "gr_list:collMoneyPayCondCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  ed_acctDeptCd.setValue(scwin.acctDeptCd);
  ed_acctDeptNm.setValue(scwin.acctDeptNm);
  ed_empNo.setValue(scwin.empNo);

  /**************************************/
  /** 여객임대차 적용 20130822 hurrah015 **/
  /**************************************/
  if (scwin.uppermostBizdomcd == "200") {
    lc_uppermostBizdomcd.setSelectedIndex(1);
  } else {
    lc_uppermostBizdomcd.setSelectedIndex(0);
  }
};
scwin.ondataload = function (e) {};
scwin.sbm_uppermostBizdom_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_uppermostBizdom.getCellAllData(0, "col1") != "" && ds_uppermostBizdom.getCellAllData(0, "col1") != null) {
      scwin.uppermostBizdomcd = ds_uppermostBizdom.getCellAllData(0, "col1");
    } else {
      scwin.uppermostBizdomcd = "252";
    }
    if (scwin.uppermostBizdomcd == "200") {
      lc_uppermostBizdomcd.setSelectedIndex(1);
    } else {
      lc_uppermostBizdomcd.setSelectedIndex(0);
    }
  } else {
    $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
  }
};

//-------------------------------------------------------------------------
// Dataset DEBUG
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// function name : f_HeaderCreate
// function desc : 데이터셋 헤더생성
// function Parameter : null
//-------------------------------------------------------------------------

// 귀속부서 reset
scwin.f_FieldClear1 = function () {
  $c.gus.cfInitObjects($p, [ed_acctDeptCd, ed_acctDeptNm]);
};

// 계약등록자 reset
scwin.f_FieldClear2 = function () {
  $c.gus.cfInitObjects($p, [ed_empNo, ed_empNm]);
};

//-------------------------------------------------------------------------
// function name : f_FieldClear
// function desc : 조회 필드 Clear
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// function name : f_SetSrchDefault
// function desc : 조회 기본값 설정
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  ica_procYm.setValue(scwin.currDate);
  // lc_bilgAdjmNoYn.setSelectedIndex(0);
  lc_bilgAdjmNoYn.setSelectedIndex(1);
  ica_procYm.focus();
};

//-------------------------------------------------------------------------
// function name : f_SearchPopUp
// function desc : 조회 팝업
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_SearchPopUp = function (flag, check, isCdYn) {
  let param = "";
  switch (flag) {
    case '1':
      // 부서
      udc_acctDeptCdInfo7.cfCommonPopUp(scwin.udc_acctDeptCdInfo7_callBackFunc, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '2':
      // 사번
      udc_acEmpInfo.cfCommonPopUp(scwin.udc_acEmpInfo_callBackFunc, ed_empNo.getValue(), ed_empNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.udc_acctDeptCdInfo7_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_acctDeptCd.setValue(rtnList[0]);
    ed_acctDeptNm.setValue(rtnList[1]);
  }
};
scwin.udc_acEmpInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_empNo.setValue(rtnList[0]);
    ed_empNm.setValue(rtnList[1]);
  }
};

// 계약등록자 클릭시
scwin.udc_acEmpInfo_onclickEvent = function (e) {
  scwin.f_SearchPopUp('2', 'T');
};

// 귀속부서 클릭시
scwin.udc_acctDeptCdInfo7_onclickEvent = function (e) {
  scwin.f_SearchPopUp('1', 'T');
};

//-------------------------------------------------------------------------
// function name : f_checkPopEd
// function desc : 팝업체크
// function Parameter : strCd : 코드, strNm : 코드명, flag : 플래그
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd == "ed_empNo") {
    ed_empNm.setValue("");
    if (ed_empNo.getValue().trim() != "") {
      scwin.f_SearchPopUp(flag, 'T');
    }
  } else if (strCd == "ed_acctDeptCd") {
    ed_acctDeptNm.setValue("");
    if (ed_acctDeptCd.getValue().trim() != "") {
      scwin.f_SearchPopUp(flag, 'T');
    }
  }
};
scwin.udc_acEmpInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd('ed_empNo', 'ed_empNm', '2');
};
scwin.udc_acctDeptCdInfo7_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd('ed_acctDeptCd', 'ed_acctDeptNm', '1');
};

//-------------------------------------------------------------------------
// function name : f_resultPopEd
// function desc : 팝업결과 셋팅
// function Parameter : strCd : 코드, strNm : 코드명, rtnList : 결과 리스트
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {};

//-------------------------------------------------------------------------
// function name : f_grdHeiht
// function desc : 그리드 높이 늘리기
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_grdHeiht = function (objGrd, size) {};

//-------------------------------------------------------------------------
// function name : f_downExcelSheet
// function desc : 엑셀다운
// function Parameter : objGrd : 그리드
//-------------------------------------------------------------------------
scwin.f_downExcelSheet = function (objGrd) {
  // var objGrd = eval(objGrd);
  // var objDs = eval(objGrd.DataID) ;
  // if (objDs.CountRow == 0) return;        
  // cfGridToExcel(objGrd, "임차_전차 지급내역", "임차_전차 지급내역", 4+8+16);
  let sheetTitle = "임차_전차 지급내역";
  const options = {
    fileName: sheetTitle + ".xlsx",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_list, options);
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await scwin.f_Validation())) {
    return;
  }
  dma_search.set("uppermostBizDomCd", lc_uppermostBizdomcd.getValue() == "0" ? "252" : "200");
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// function name : f_Validation
// function desc : 조회 조건 검증
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  let ret = await $c.gus.cfValidate($p, [ica_procYm]);
  if (!ret) {
    return false;
  }
  var txt = ed_mergeRentloanNo.getValue();
  if (txt.trim() != "") {
    if (txt.length < 12) {
      await $c.win.alert($p, "계약번호는 12자리 이상 넣어야 합니다.");
      ed_mergeRentloanNo.focus();
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 정산내역 저장 
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Save = async function (gb) {
  //변경한 데이터가 있는지 체크한다. 
  if (ds_list.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이타"]);
    return;
  }
  var nRow = gr_list.getCheckedIndex("chk").length;
  if (nRow == 0) {
    await $c.win.alert($p, "선택한 내역이 존재하지 않습니다.");
    return;
  }
  if (gb == 2) {
    for (var i = 0; i < ds_list.getRowCount(); i++) {
      if (ds_list.getCellData(i, "chk") == 1) {
        ds_list.setCellData(i, "exceptYn", 1);
      }
    }
  } else {
    for (var i = 0; i < ds_list.getRowCount(); i++) {
      if (ds_list.getCellData(i, "chk") == 1) {
        ds_list.setCellData(i, "exceptYn", 0);
      }
    }
  }
  if (gb == 1) {
    sMsg = "정산내역을 저장하시겠습니까?";
  } else {
    sMsg = "정산내역을 제외하시겠습니까?";
  }
  let confirm = await $c.win.confirm($p, sMsg);
  if (confirm) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// function name : f_Cancel
// function desc : 정산내역 삭제 
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Cancel = async function () {
  //변경한 데이터가 있는지 체크한다. 
  if (ds_list.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이타"]);
    return;
  }
  var nRow = gr_list.getCheckedIndex("chk").length;
  if (nRow == 0) {
    await $c.win.alert($p, "선택한 내역이 존재하지 않습니다.");
    return;
  }
  let confirm = await $c.win.confirm($p, "정산내역을 삭제하시겠습니까?");
  if (confirm) {
    $c.sbm.execute($p, sbm_cancel);
  }
};
scwin.sbm_search_submitdone = function (e) {
  let rowCnt = ds_list.getRowCount();
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (rowCnt == 0) {
      if ($c.gus.cfCheckCreateFlag($p) == true) {
        $c.gus.cfTurnCreateFlag($p, false);
      } else {
        $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      }
    } else {
      for (i = 0; i < rowCnt; i++) {
        if ("" == ds_list.getCellData(i, "slipNo")) {
          gr_list.setCellReadOnly(i, "chk", false);
        } else {
          gr_list.setCellReadOnly(i, "chk", true);
        }
      }
    }
  } else {
    $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
  }
  scwin.sChk = 0;
  totalRows.setValue(rowCnt);
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  ds_list.removeAll();
  scwin.f_Retrieve();
};
scwin.sbm_cancel_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_004); // 성공적으로 저장하였습니다
  ds_list.removeAll();
  scwin.f_Retrieve();
};
scwin.customSlipNo = function (data, formatData, rowIndex, colIndex) {
  if (data == "") {
    gr_list.setCellReadOnly(rowIndex, "chk", false);
  } else {
    gr_list.setCellReadOnly(rowIndex, "chk", true);
  }
  return data;
};
scwin.gr_list_oncelldblclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "rentloanNo" || columnId == "rentloanSeq") {
    let strPath = "/ui/cm/bc/rentloan/zz_900_01_02b.xml";
    let menuNm = "계약기본정보";
    let menuId = "zz_900_01_02b.xml";
    let paramObj = {
      mode: "MOD",
      cf: "3",
      rentloanNo: ds_list.getCellData(rowIndex, "rentloanNo"),
      rentloanSeq: ds_list.getCellData(rowIndex, "rentloanSeq")
    };
    $c.win.openMenu($p, menuNm, strPath, menuId, paramObj);
  }
  if (columnId == "slipNo") {
    if (ds_list.getCellAllData(rowIndex, "slipNo") != null && ds_list.getCellAllData(rowIndex, "slipNo") != "") {
      var slipNo = ds_list.getCellData(rowIndex, "slipNo");
      if (slipNo != "") {
        let rtnList = await $c.gus.cfShowSlipInfo($p, slipNo); // 전표내역조회
      }
    }
  }
};

/* for=gr_list event=OnClick(Row,Colid) */
scwin.gr_list_oncellclick = function (rowIndex, columnIndex, columnId) {
  let nRow = ds_list.getCellData(rowIndex, "chk");
  if (columnId == "chk") {
    if ("1" == nRow) {
      if (scwin.sChk == 0) {
        if ($c.gus.cfIsNull($p, ds_list.getCellData(rowIndex, "bilgAdjmNo")) && $c.gus.cfIsNull($p, ds_list.getCellData(rowIndex, "slipNo"))) {
          scwin.sChk = 1;
        }
        if (!$c.gus.cfIsNull($p, ds_list.getCellData(rowIndex, "bilgAdjmNo")) && $c.gus.cfIsNull($p, ds_list.getCellData(rowIndex, "slipNo"))) {
          scwin.sChk = 2;
        }
      }
      if (scwin.sChk == 1) {
        if (!$c.gus.cfIsNull($p, ds_list.getCellData(rowIndex, "bilgAdjmNo")) && $c.gus.cfIsNull($p, ds_list.getCellData(rowIndex, "slipNo"))) {
          $c.win.alert($p, "청구/정산번호 미생성된 내역과 생성된 내역은 함께 선택불가합니다.");
          ds_list.setCellData(rowIndex, "chk", 0);
        }
      } else if (scwin.sChk == 2) {
        if ($c.gus.cfIsNull($p, ds_list.getCellData(rowIndex, "bilgAdjmNo")) && $c.gus.cfIsNull($p, ds_list.getCellData(rowIndex, "slipNo"))) {
          $c.win.alert($p, "청구/정산번호 미생성된 내역과 생성된 내역은 함께 선택불가합니다.");
          ds_list.setCellData(rowIndex, "chk", 0);
        }
      }
    } else {
      let checkIdx = gr_list.getCheckedIndex("chk");
      if (checkIdx.length == 0) {
        scwin.sChk = 0;
      }
    }
  }
};
scwin.btn_except_onclick = function (e) {
  scwin.f_Save(2);
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save(1);
};
scwin.ed_mergeRentloanNo_onkeyup = function (e) {
  let input = e.target;
  let val = input.value;

  // 1️ 아무것도 없으면 종료
  if (!val) return;

  // 2️ 첫 글자는 영문만 허용, 소문자면 대문자로 자동변환
  let first = val.charAt(0).toUpperCase();
  if (!/[A-Z]/.test(first)) {
    // 첫 글자가 영문이 아니면 제거
    first = '';
  }

  // 3️ 나머지 글자는 숫자만 남김
  let rest = val.substring(1).replace(/[^0-9]/g, '');

  // 4️ 12자리 넘으면 '-' 추가
  if (rest.length > 11) {
    rest = rest.substring(0, 11) + '-' + rest.substring(11, 15);
  }

  // 5️ 전체 조합 및 길이 제한
  let formatted = (first + rest).substring(0, 16);

  // 6️ 결과 반영
  input.value = formatted;
};
scwin.gr_list_onheaderclick = function (headerId) {
  if ("hchk" == headerId) {
    for (let i = 0; i < ds_list.getRowCount(); i++) {
      if (!$c.gus.cfIsNull($p, ds_list.getCellData(i, "bilgAdjmNo")) && $c.gus.cfIsNull($p, ds_list.getCellData(i, "slipNo"))) {
        ds_list.setCellData(i, "chk", 0);
      }
    }
    let checkIdx = gr_list.getCheckedIndex("chk");
    if (checkIdx.length == 0) {
      scwin.sChk = 0;
    } else {
      scwin.sChk = 1;
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'width: 100px;',id:'ica_procYm',class:'',calendarValueType:'yearMonth',mandatory:'true',title:'지급년월',delimiter:'/',ref:'data:dma_search.procYm'}},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 150px;',allOption:'',id:'lc_uppermostBizdomcd',class:'',direction:'auto',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류사업'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'여객사업'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mergeRentloanNo',style:'width: 230px;',ref:'data:dma_search.mergeRentloanNo','ev:onkeyup':'scwin.ed_mergeRentloanNo_onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정산번호유무 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bilgAdjmNoYn',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.bilgAdjmNoYn'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',code:'acctDeptCd',codeId:'ed_acctDeptCd',id:'udc_acctDeptCdInfo7',maxlengthCode:'5',nameId:'ed_acctDeptNm',objTypeCode:'data',objTypeName:'data',popupID:'',popupTitle:'',refDataCollection:'dma_search',selectID:'retrieveAcctDeptCdInfo7',style:'','ev:onclickEvent':'scwin.udc_acctDeptCdInfo7_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo7_onblurCodeEvent'}},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약등록자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',code:'empNo',codeId:'ed_empNo','ev:onclickEvent':'scwin.udc_acEmpInfo_onclickEvent',id:'udc_acEmpInfo',maxlengthCode:'6',nameId:'ed_empNm',objTypeCode:'data',objTypeName:'data',popupID:'',popupTitle:'',refDataCollection:'dma_search',selectID:'retrieveAcEmpInfo',style:'','ev:onblurCodeEvent':'scwin.udc_acEmpInfo_onblurCodeEvent'}},{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정산구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_collMoneyPayClsCd',style:'width: 150px;',submenuSize:'fixed',sortMethod:'ascending',sortOption:'value',chooseOptionLabel:'전체',visibleRowNum:'20',ref:'data:dma_search.collMoneyPayClsCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Srch',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'임차[전차]지급내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',id:'udc_list',gridDownFn:'scwin.f_downExcelSheet',gridID:'gr_list'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_list',focusMode:'cell',id:'gr_list',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'12',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'30',readOnly:'true','ev:onblankclick':'scwin.gr_list_onblankclick','ev:oncellclick':'scwin.gr_list_oncellclick','ev:oncelldblclick':'scwin.gr_list_oncelldblclick',fixedColumn:'8',fixedColumnNoMove:'true','ev:onheaderclick':'scwin.gr_list_onheaderclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'hchk',inputType:'checkbox',width:'50',fixColumnWidth:'true',valueType:'other',falseValue:'F',trueValue:'T',checkboxLabel:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'계약번호',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'계약</br>순번',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'정산년월',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'정산구분',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'정산조건',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'정산일',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'정산금액',width:'130',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'귀속</br>부서',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column64',value:'귀속부서명',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column61',value:'거래처번호',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column58',value:'거래처명',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column49',value:'사업자등록번호',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'정산일자',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column76',value:'정산일',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'지급번호',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',value:'전표번호',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'계약번호',displayMode:'label',sortable:'true',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',value:'정산순번',displayMode:'label',hidden:'false',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanNo',inputType:'text',width:'120',style:'color:blue;',class:'underline',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanSeq',inputType:'text',width:'70',style:'color:blue;',class:'underline'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'procYm',inputType:'calendar',width:'100',dataType:'date',displayFormat:'yyyy/MM',calendarValueType:'yearMonth',applyFormat:'display'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyPayClsCd',inputType:'select',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyPayCondCd',inputType:'select',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyPayDt3',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyPayAmt',inputType:'text',width:'130',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'acctDeptNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'crn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyPayDt1',displayMode:'label',hidden:'true',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyPayDt2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgAdjmNo',displayMode:'label',style:'color:blue;',class:'underline'}},{T:1,N:'w2:column',A:{width:'100',inputType:'',id:'slipNo',displayMode:'label',style:'color:blue;',dataType:'text',class:'underline'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mergeRentloanNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyPaySeq',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column47',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'column41',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###',dataType:'number',expression:'sum(\'collMoneyPayAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column78',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column81',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_except',style:'',type:'button',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.btn_except_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지급내역제외'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_cancel',style:'',type:'button',objType:'ctrlBtn',userAuth:'D','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지급내역삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_save',style:'',type:'button',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지급내역저장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'info-list txt-red',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'2011년 1월 이전 지급 처리된 내역을 삭제해야 합니다. 체크박스 선택한 후 지급내역제외 버튼을 클릭하시면 삭제됩니다. ',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'해당 버튼은 2011년 1월 31일까지만 사용가능합니다.',style:'',tagname:'p'}}]}]}]}]}]}]})