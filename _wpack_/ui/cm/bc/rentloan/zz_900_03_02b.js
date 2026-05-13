/*amd /ui/cm/bc/rentloan/zz_900_03_02b.xml 40126 d7024eda5bb59409b5f94bf94efa5241ba8a64e12a1cda943bfcb16dd26bc410 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'procYm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mergeRentloanNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgAdjmNoYn',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyPayClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'uppermostBizDomCd',name:'최상위사업영역',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'check',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanSeq',name:'계약순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procYm',name:'청구년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayClsCd',name:'청구구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayCondCd',name:'청구조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayDt3',name:'청구일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayAmt',name:'청구금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmNo',name:'청구번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayDt1',name:'청구일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayDt2',name:'청구일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mergeRentloanNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPaySeq',name:'청구순번',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_uppermostBizdom_param'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',E:[{T:1,N:'sysCd'},{T:1,N:'queryId'}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_uppermostBizdom',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_ds_uppermostBizdom',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_uppermostBizdom_param","key":"IN_DS1"}',target:'data:json,{"id":"ds_uppermostBizdom","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_uppermostBizdom_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_search',action:'/cm.bc.rentloan.RetrieveRentLoanBillingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_list","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_save',action:'/cm.bc.rentloan.SaveRentLoanBillingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_list","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_cancel',action:'/cm.bc.rentloan.CancelRentLoanBillingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_list","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_cancel_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 임대[전대] 청구화면
 * 메뉴경로 : 공통/총무업무/임대차관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/rentloan/zz_900_03_02b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-11-14
 * 수정이력  :
 *    - 2025-11-14      정승혜    최초작성
 *    - 2026-01-18      정승혜    기타수정
 *    - 2026-01-19      정승혜    submitdone 조건수정
 * 메모 : 전표번호 있는 데이터 없음(slipNo)
 * 조회조건 : 계약번호-D20250321001, 지급년월-202511
 * 
 */
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strBasSdId = "/ui/cm/bc/rentloan/zz_900_01_02b.xml";
scwin.memJson = $c.data.getMemInfo($p);
scwin.regId = scwin.memJson.userId;
scwin.sysAdminYn = scwin.memJson.sysAdminYn;
scwin.empNo = scwin.memJson.empNo;
scwin.acctDeptCd = "";
if (scwin.memJson.acctDeptCd == null) {
  scwin.acctDeptCd = "";
} else {
  scwin.acctDeptCd = scwin.memJson.acctDeptCd;
}
scwin.acctDeptNm = "";
if (scwin.memJson.acctDeptNm == null) {
  scwin.acctDeptNm = "";
} else {
  scwin.acctDeptNm = scwin.memJson.acctDeptNm;
}
scwin.privAdmin = scwin.memJson.privAdmin;
scwin.uppermostBizdomcd = ""; //최상위사업영역

scwin.sChk = 0; // 미선택 : 0, 미청구/정산번호 선택 : 1, 청구/정산번호 선택 : 2

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ918",
    compID: "gr_list:collMoneyPayClsCd, lc_collMoneyPayClsCd",
    opt: {
      'range': '2,1'
    }
  }, {
    grpCd: "ZZ919",
    compID: "gr_list:collMoneyPayCondCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_HeaderCreate();
  scwin.f_FieldClear();

  //로그인한 사번으로 최상위사업영역을 가져오는 데이타셋 실행
  scwin.f_uppermostBizdom();

  //물류사업,여객사업만 나오게 세팅
  //lc_uppermostBizdomcd.setVisibleRowNum(2)
};
scwin.onUdcCompleted = function () {
  ed_acctDeptCd.setValue(scwin.acctDeptCd);
  ed_acctDeptNm.setValue(scwin.acctDeptNm);
};
scwin.ondataload = function () {
  let dltStr = "dlt_commonCodeZZ918";
  let dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
  $c.data.dataListFilter($p, dlt, "fltrCd2 == '1'");
};

//-------------------------------------------------------------------------
// function name : f_HeaderCreate
// function desc : 데이터셋 헤더생성
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_HeaderCreate = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
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
scwin.f_SetSrchDefault = function () {
  ed_procYm.setValue(scwin.strCurDate.substring(0, 6));
  lc_bilgAdjmNoYn.setValue(0);
  ed_procYm.focus();
};

//-------------------------------------------------------------------------
// function name : f_SearchPopUp
// function desc : 조회 팝업
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_SearchPopUp = function (flag, check) {
  let param = "";
  switch (flag) {
    case '1':
      udc_acctDeptCdInfo7.cfCommonPopUp(scwin.udc_acctDeptCdInfo7_callBackFunc, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '2':
      udc_acEmpInfo.cfCommonPopUp(scwin.udc_acEmpInfo_callBackFunc, ed_empNo.getValue(), ed_empNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, 'F');
      break;
    default:
      break;
  }
};
scwin.udc_acctDeptCdInfo7_onclickEvent = function (e) {
  scwin.f_SearchPopUp('1', 'F');
};
scwin.udc_acEmpInfo_onclickEvent = function (e) {
  scwin.f_SearchPopUp('2', 'F');
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

//-------------------------------------------------------------------------
// function name : f_checkPopEd
// function desc : 팝업체크
// function Parameter : strCd : 코드, strNm : 코드명, flag : 플래그
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  strNm.setValue("");
  if (strCd.getValue() != "") {
    scwin.f_SearchPopUp(flag, 'T');
  }
};

//-------------------------------------------------------------------------
// function name : f_resultPopEd
// function desc : 팝업결과 셋팅
// function Parameter : strCd : 코드, strNm : 코드명, rtnList : 결과 리스트
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function () {
  // callBackFunc 함수
};

//-------------------------------------------------------------------------
// function name : f_grdHeiht
// function desc : 그리드 높이 늘리기
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_grdHeiht = function () {};

// 엑셀다운 4+8+16
scwin.f_downExcelSheet = function () {
  if (ds_list.getRowCount() == 0) {
    return;
  }
  let sheetTitle = "임대_전대 청구내역";
  $c.data.downloadGridViewExcel($p, gr_list, {
    fileName: sheetTitle + ".xlsx",
    sheetName: sheetTitle,
    type: 1,
    colMerge: true,
    colMergeTextAlign: "top"
  });
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let val = await scwin.f_Validation();
  if (!val) {
    return;
  }

  //let biz = dma_search.get("uppermostBizDomCd");
  let biz = lc_uppermostBizdomcd.getValue();
  if (biz == 0) {
    biz = "252";
  } else {
    biz = "200";
  }
  dma_search.set("uppermostBizDomCd", biz);
  $c.sbm.execute($p, sbm_tr_search);
};

//-------------------------------------------------------------------------
// function name : f_Validation
// function desc : 조회 조건 검증
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_procYm]);
  if (!ret) {
    return false;
  }
  let txt = ed_mergeRentloanNo.getValue();
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
  if (ds_list.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_001, "데이타"));
    return;
  }
  let nRow = 0;
  for (let i = 0; i < ds_list.getRowCount(); i++) {
    if (ds_list.getCellData(i, "chk") == 1) {
      nRow++;
    }
  }
  if (nRow == 0) {
    await $c.win.alert($p, "선택한 내역이 존재하지 않습니다.");
    return;
  }
  if (gb == 2) {
    //제외일때는 체크된건 exceptYn 을 1 로 변경
    for (let i = 0; i <= ds_list.getRowCount(); i++) {
      if (ds_list.getCellData(i, "chk") == 1) {
        ds_list.setCellData(i, "exceptYn", 1);
      }
    }
  } else {
    //내역저장일때는 체크된건 exceptYn 을 0 으로 변경
    for (let i = 0; i <= ds_list.getRowCount(); i++) {
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
    $c.sbm.execute($p, sbm_tr_save);
  }
};
scwin.btn_except_onclick = function (e) {
  scwin.f_Save(2);
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save(1);
};

//-------------------------------------------------------------------------
// function name : f_Cancel
// function desc : 정산내역 삭제 
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Cancel = async function () {
  if (ds_list.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_001, "데이타"));
    return;
  }
  let nRow = 0;
  for (let i = 0; i < ds_list.getRowCount(); i++) {
    if (ds_list.getCellData(i, "chk") == 1) {
      nRow++;
    }
  }
  if (nRow == 0) {
    await $c.win.alert($p, "선택한 내역이 존재하지 않습니다.");
    return;
  }
  let confirm = await $c.win.confirm($p, "정산내역을 삭제하시겠습니까?");
  if (confirm) {
    $c.sbm.execute($p, sbm_tr_cancel);
  }
};

//-------------------------------------------------------------------------
// Dataset DEBUG
//-------------------------------------------------------------------------
scwin.dataSetDebug = function () {};

// Edit={decode(slipNo, "", "true", "false")}
// customFormatter 적용안됨
scwin.chkDisplayFm = function (rowIndex) {
  let tempNo = ds_list.getCellData(rowIndex, "slipNo");
  if (tempNo == "") {
    gr_list.setReadOnly("cell", rowIndex, "chk", false);
  } else {
    gr_list.setReadOnly("cell", rowIndex, "chk", true);
  }
};

// 귀속부서 reset
scwin.f_FieldClear1 = function () {
  $c.gus.cfInitObjects($p, [ed_acctDeptCd, ed_acctDeptNm]);
};

// 계약등록자 reset
scwin.f_FieldClear2 = function () {
  $c.gus.cfInitObjects($p, [ed_empNo, ed_empNm]);
};

// 조회 서브미션
scwin.sbm_tr_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_list.getRowCount());
  if (ds_list.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  $c.gus.cfGoPrevPosition($p, gr_list, 0);
  for (let i = 0; i < ds_list.getRowCount(); i++) {
    scwin.chkDisplayFm(i);
  }
  let biz = dma_search.get("uppermostBizDomCd");
  if (biz == "252") {
    biz = "0";
  } else {
    biz = "1";
  }
  dma_search.set("uppermostBizDomCd", biz);
};

// 저장 서브미션
scwin.sbm_tr_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

// 삭제 서브미션 결과
scwin.sbm_tr_cancel_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
  scwin.f_Retrieve();
};

// 최상위사업영역 서브미션
scwin.sbm_ds_uppermostBizdom_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_uppermostBizdom.getCellData(0, "col1") != "" && ds_uppermostBizdom.getCellData(0, "col1") != null) {
    scwin.uppermostBizdomcd = ds_uppermostBizdom.getCellData(0, "col1");
  } else {
    scwin.uppermostBizdomcd = "252";
  }
  if (scwin.uppermostBizdomcd == "200") {
    lc_uppermostBizdomcd.setValue(1);
  } else {
    lc_uppermostBizdomcd.setValue(0);
  }
};
scwin.f_uppermostBizdom = function () {
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveUppermostBizDomInfo",
    param1: scwin.memJson.empNo
  };
  dma_uppermostBizdom_param.setJSON(params);
  $c.sbm.execute($p, sbm_ds_uppermostBizdom);
};
scwin.gr_list_oncelldblclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "rentloanNo" || columnId == "rentloanSeq") {
    let strPath = "/ui/cm/bc/rentloan/zz_900_01_02b.xml";
    let menuNm = "계약기본정보";
    //let menuId = "zz_900_01_02b.xml";

    data = {};
    data.mode = "MOD";
    data.cf = "4";
    data.rentloanNo = ds_list.getCellData(rowIndex, "rentloanNo");
    data.rentloanSeq = ds_list.getCellData(rowIndex, "rentloanSeq");
    let rentloan = ds_list.getCellData(rowIndex, "rentloanNo") + ds_list.getCellData(rowIndex, "rentloanSeq");
    $c.win.openMenu($p, menuNm, strPath, strPath.substring(strPath.lastIndexOf("/") + 1).replace(/.xml/g, ""), data, {
      menuCode: rentloan,
      menuCode2: "new"
    });
  }
  if (columnId == "slipNo") {
    if (ds_list.getCellData(rowIndex, "slipNo") != null && ds_list.getCellData(rowIndex, "slipNo") != "") {
      let slipNo = ds_list.getCellData(rowIndex, "slipNo");
      if (slipNo != "") {
        let rtnList = await $c.gus.cfShowSlipInfo($p, slipNo); // 전표내역조회
      }
    }
  }
};

/* for=gr_list event=OnClick(Row,Colid) */
scwin.gr_list_oncellclick = async function (rowIndex, columnIndex, columnId) {
  let nRow = ds_list.getCellData(rowIndex, "chk");
  let chk = scwin.sChk;
  if (columnId == "chk") {
    // 체크선택시
    if (nRow == 0) {
      scwin.sChk = 0;
      // 미선택
    } else {
      // 선택
      if ($c.gus.cfIsNull($p, ds_list.getCellData(rowIndex, "bilgAdjmNo"))) {
        scwin.sChk = 1;
      } else {
        scwin.sChk = 2;
      }
    }
    if (chk == 0) {
      return;
    } else {
      if (chk == 1) {
        if (scwin.sChk == 2) {
          await $c.win.alert($p, "청구/정산번호 미생성된 내역과 생성된 내역은 함께 선택불가합니다.");
          for (i = 0; i <= ds_list.getRowCount(); i++) {
            if (ds_list.getCellData(i, "bilgAdjmNo") == ds_list.getCellData(rowIndex, "bilgAdjmNo")) {
              ds_list.setCellData(i, "chk", 0);
            }
          }
          scwin.sChk = 1;
          return;
        }
      } else if (chk == 2) {
        if (scwin.sChk == 1) {
          await $c.win.alert($p, "청구/정산번호 미생성된 내역과 생성된 내역은 함께 선택불가합니다.");
          ds_list.setCellData(rowIndex, "chk", 0);
          scwin.sChk = 2;
          return;
        }
      } else {
        return;
      }
    }
  }
};

/* const KOR_TO_ENG = {
    "ㅂ":"q","ㅈ":"w","ㄷ":"e","ㄱ":"r","ㅅ":"t",
    "ㅛ":"y","ㅕ":"u","ㅑ":"i","ㅐ":"o","ㅔ":"p",

    "ㅁ":"a","ㄴ":"s","ㅇ":"d","ㄹ":"f","ㅎ":"g",
    "ㅗ":"h","ㅓ":"j","ㅏ":"k","ㅣ":"l",

    "ㅋ":"z","ㅌ":"x","ㅊ":"c","ㅍ":"v","ㅠ":"b",
    "ㅜ":"n","ㅡ":"m"
}; */

scwin.f_rentloan_keyup = function (e) {
  let input = e.target;
  let val = input.value;

  // 1️ 아무것도 없으면 종료
  if (!val) return;

  // 2️ 첫 글자는 영문만 허용, 소문자면 대문자로 자동변환
  let first = val.charAt(0).toUpperCase();
  if (!/[A-Z]/.test(first)) {
    // 첫 글자가 영문이 아니면 제거
    first = '';
    //for (let ch of first) {
    //    first = ''
    //    first += KOR_TO_ENG[ch] || ch;
    //}
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
scwin.f_rentloan_click = function (e) {
  let input = e.target;
  let val = input.value;

  // 1️ 아무것도 없으면 종료
  if (!val) return;

  // 2️ 첫 글자는 영문만 허용, 소문자면 대문자로 자동변환
  let first = val.charAt(0).toUpperCase();
  if (!/[A-Z]/.test(first)) {
    // 첫 글자가 영문이 아니면 제거
    first = '';
    //for (let ch of first) {
    //    first = ''
    //    first += KOR_TO_ENG[ch] || ch;
    //}
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
scwin.f_displayFm = function (e) {
  let val = e;
  let first = val.charAt(0).toUpperCase();
  if (!/[A-Z]/.test(first)) {
    // 첫 글자가 영문이 아니면 제거
    first = '';
    //for (let ch of first) {
    //    first = ''
    //    first += KOR_TO_ENG[ch] || ch;
    //}
  }
  let rest = val.substring(1).replace(/[^0-9]/g, '');
  if (rest.length > 11) {
    rest = rest.substring(0, 11) + '-' + rest.substring(11, 15);
  }
  let formatted = (first + rest).substring(0, 16);
  return formatted;
};
scwin.udc_acctDeptCdInfo7_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_acctDeptCd, ed_acctDeptNm, '1');
};
scwin.udc_acEmpInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_empNo, ed_empNm, '2');
};
scwin.lc_uppermostBizdomcd_onchange = function (info) {
  if (lc_uppermostBizdomcd.getValue() == 0) {
    dma_search.set("uppermostBizDomCd", 0);
  } else if (lc_uppermostBizdomcd.getValue() == 1) {
    dma_search.set("uppermostBizDomCd", 1);
  } else if (lc_uppermostBizdomcd.getValue() == 252) {
    dma_search.set("uppermostBizDomCd", 252);
  } else if (lc_uppermostBizdomcd.getValue() == 200) {
    dma_search.set("uppermostBizDomCd", 200);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_procYm',class:' cal',calendarValueType:'yearMonth',displayFormat:'yyyy/MM',ref:'data:dma_search.procYm',mandatory:'true',title:'지급년월',objType:'data'}},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 132px;',allOption:'',id:'lc_uppermostBizdomcd',class:'',direction:'auto',ref:'','ev:onchange':'scwin.lc_uppermostBizdomcd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류사업'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'여객사업'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mergeRentloanNo',style:'width: 230px;',ref:'data:dma_search.mergeRentloanNo','ev:onclick':'scwin.f_rentloan_click(event)','ev:onkeyup':'scwin.f_rentloan_keyup(event)',displayFormatter:'scwin.f_displayFm',objType:'key',allowChar:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구번호유무 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bilgAdjmNoYn',style:'width: 150px;',submenuSize:'auto',ref:'data:dma_search.bilgAdjmNoYn',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니요'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'retrieveAcctDeptCdInfo7',codeId:'ed_acctDeptCd',popupID:'',popupTitle:'',nameId:'ed_acctDeptNm',style:'',maxlengthCode:'5',allowCharCode:'0-9',id:'udc_acctDeptCdInfo7',code:'acctDeptCd',refDataCollection:'dma_search',objTypeName:'data',objTypeCode:'data','ev:onclickEvent':'scwin.udc_acctDeptCdInfo7_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo7_onblurCodeEvent'}},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약등록자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_empNo',nameId:'ed_empNm',popupID:'',popupTitle:'',selectID:'retrieveAcEmpInfo',style:'',maxlengthCode:'6',allowCharCode:'0-9',refDataCollection:'dma_search',code:'empNo',id:'udc_acEmpInfo',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_acEmpInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acEmpInfo_onblurCodeEvent'}},{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정산구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_collMoneyPayClsCd',style:'width: 150px;',submenuSize:'auto',chooseOptionLabel:'전체',ref:'data:dma_search.collMoneyPayClsCd',visibleRowNum:'20'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Srch',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'임대[전대]청구내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_list',gridUpYn:'N',gridDownFn:'scwin.f_downExcelSheet',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_list',id:'gr_list',style:'',visibleRowNum:'12',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_list_oncelldblclick',rowStatusVisible:'true',rowStatusWidth:'20','ev:oncellclick':'scwin.gr_list_oncellclick',fixedColumn:'8',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'계약번호',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'계약</br>순번',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'청구년월',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'청구구분',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'청구조건',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'청구일',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'청구금액',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'귀속</br>부서',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'귀속부서명',width:'200',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'거래처번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'거래처명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column37',value:'사업자등록번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'청구번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column34',value:'전표번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'청구일자',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'청구일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'계약번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'청구순번',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanNo',inputType:'text',style:';color:blue;',value:'',width:'100',colMerge:'true',class:'underline'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanSeq',inputType:'text',style:';color:blue;',value:'',width:'70',class:'underline'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'procYm',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyPayClsCd',inputType:'select',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyPayCondCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyPayDt3',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyPayAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'crn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:';color:blue;',id:'bilgAdjmNo',value:'',displayMode:'label',class:'underline'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'collMoneyPayDt1',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'collMoneyPayDt2',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mergeRentloanNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'collMoneyPaySeq',value:'',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column23',value:'',displayMode:'label',textAlign:'right',expression:'SUM("collMoneyPayAmt")',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_except',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.btn_except_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'청구내역제외'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'청구내역삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'청구내역저장'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'info-list txt-red'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'2011년 1월 이전 청구 처리된 내역을 삭제해야 합니다. 체크박스 선택한 후 청구내역제외 버튼을 클릭하시면 삭제됩니다. ',class:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'해당 버튼은 2011년 1월 31일까지만 사용가능합니다.',class:'',tagname:'p'}}]}]}]}]}]}]})