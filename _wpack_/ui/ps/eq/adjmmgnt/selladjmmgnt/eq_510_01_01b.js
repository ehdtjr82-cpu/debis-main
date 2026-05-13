/*amd /ui/ps/eq/adjmmgnt/selladjmmgnt/eq_510_01_01b.xml 32153 3709c33422d35220befd875a6ee35009dd2078a6090acc18ab73252930f328fd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_wrkPlCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cmd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'strVal',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'intVal',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkPlCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fix_clnt_adjm_re'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adjmYm',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_clnt_adjm',saveRemovedData:'true','ev:ondataload':'scwin.ds_fix_clnt_adjm_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chkYn',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmYm',name:'정산년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkNo',name:'정비번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'정비거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'정비거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplyAmt',name:'공급가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'총금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postYn',name:'회계처리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wages',name:'공임',dataType:'number'}},{T:1,N:'w2:column',A:{id:'partAmt',name:'부품비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adjmStsCd',name:'정산상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name18',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acct_dept_adjm',saveRemovedData:'true','ev:ondataload':'scwin.ds_acct_dept_adjm_ondataload','ev:oncelldatachange':'scwin.ds_acct_dept_adjm_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplyAmt',name:'공급가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'총금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wages',name:'공임',dataType:'number'}},{T:1,N:'w2:column',A:{id:'partAmt',name:'부품비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_acct_dept_adjm_re'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adjmYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_wrkPlCd',action:'/ps.co.RetrievePsCboCmmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_wrkPlCd","key":"IN_DS1"}',target:'data:json,{"id":"ds_wrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_fix_clnt_adjm_re',action:'/ps.eq.adjmmgnt.selladjmmgnt.RetrieveOutordRepairexpenseCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_fix_clnt_adjm_re","key":"IN_DS1"},{"id":"ds_fix_clnt_adjm","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_fix_clnt_adjm","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_acct_dept_adjm_re',action:'/ps.eq.adjmmgnt.selladjmmgnt.RetrieveOutordRepairexpenseDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_acct_dept_adjm_re","key":"IN_DS1"},{"id":"ds_acct_dept_adjm","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_acct_dept_adjm","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RegistSlip',action:'/ps.eq.adjmmgnt.selladjmmgnt.RegistSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_fix_clnt_adjm","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RegistSlip_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_CancelSlip',action:'/ps.eq.adjmmgnt.selladjmmgnt.CancelSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_fix_clnt_adjm","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_CancelSlip_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 외주수선비 정산내역생성 (eq_510_01_01b)
// 작성자 : 송정희
// 최초작성일자 : 2026-01-07
//-------------------------------------------------------------------------
scwin.fromDate_YMD = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 작업날짜

scwin.memInfo = $c.data.getMemInfo($p);
scwin.G_userHomeClsCd = "";
scwin.G_fixWrkPlCd = "";
//-------------------------------------------------------------------------
// onpageload
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log(scwin.memInfo);
  scwin.G_userHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드   
  scwin.G_fixWrkPlCd = $c.data.getMemInfo($p, "fixWrkPlCd"); // 정비작업장코드

  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "lc_homeClsCd",
    opt: {
      "range": "1,EQ"
    }
  },
  // 사업부문 - 소속
  {
    grpCd: "EQ906",
    compID: "gr_fix_clnt_adjm:adjmStsCd"
  } // 정산상태
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};
scwin.callBackCommonCode = async function () {
  if ($c.gus.cfIsNull($p, scwin.G_userHomeClsCd)) {
    lc_homeClsCd.setValue("LO");
  } else {
    lc_homeClsCd.setValue(scwin.G_userHomeClsCd);
  }
  $c.gus.cfDisableBtn($p, [btn_Save, btn_Delete]);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  ed_adjmYm.setValue(scwin.fromDate_YMD);
};

//-------------------------------------------------------------------------
// 대표정비작업장콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveSecond = async function (param1) {
  dma_wrkPlCd.set("cmd", "retriveFixWrkList");
  dma_wrkPlCd.set("strVal", param1);
  dma_wrkPlCd.set("intVal", "");
  await $c.sbm.execute($p, sbm_wrkPlCd);
};
scwin.sbm_wrkPlCd_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  lc_wrkPlCd.setValue(scwin.G_fixWrkPlCd); //정비작업장코드
};

//-------------------------------------------------------------------------
// 소속구분 변경시 대표정비작업장콤보 조회
//-------------------------------------------------------------------------
scwin.lc_homeClsCd_onviewchange = function (info) {
  var luxIndex = lc_homeClsCd.getValue();
  // 작업장콤보 조회
  scwin.f_RetrieveSecond(luxIndex);
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = async function () {
  ed_adjmYm.setValue(scwin.fromDate_YMD);
  lc_homeClsCd.setValue(scwin.G_userHomeClsCd);
  ds_wrkPlCd.removeAll();
  $c.gus.cfDisableBtn($p, [btn_Save, btn_Delete]);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_adjmYm, lc_homeClsCd], null, true);
  if (!ret) return;
  dma_fix_clnt_adjm_re.set("adjmYm", ed_adjmYm.getValue());
  dma_fix_clnt_adjm_re.set("homeClsCd", lc_homeClsCd.getValue());
  dma_fix_clnt_adjm_re.set("fixWrkPlCd", lc_wrkPlCd.getValue());
  ds_acct_dept_adjm.removeAll();
  $c.sbm.execute($p, sbm_fix_clnt_adjm_re);
};

//-------------------------------------------------------------------------
// 상세 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve_detail = function (rowIndex) {
  //	var strPath = "/ps.eq.adjmmgnt.selladjmmgnt.RetrieveOutordRepairexpenseDetailCMD.do";

  if (ds_fix_clnt_adjm.getRowCount() > 0) {
    var d_row = rowIndex;
    var d_adjmYm = ds_fix_clnt_adjm.getCellData(d_row, "adjmYm");
    var d_clntNo = ds_fix_clnt_adjm.getCellData(d_row, "clntNo");
    var d_fixWrkPlCd = ds_fix_clnt_adjm.getCellData(d_row, "fixWrkPlCd");
    const params = {
      adjmYm: d_adjmYm,
      clntNo: d_clntNo,
      fixWrkPlCd: d_fixWrkPlCd
    };
    dma_acct_dept_adjm_re.setJSON(params);
  } else {
    const params = {
      adjmYm: "",
      clntNo: "",
      fixWrkPlCd: ""
    };
    dma_acct_dept_adjm_re.setJSON(params);
  }
  $c.sbm.execute($p, sbm_acct_dept_adjm_re);
};

//-------------------------------------------------------------------------
// 조회 버튼 클릭시
//-------------------------------------------------------------------------
scwin.btn_Search_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 정비거래처별 외주수선비 정산내역 ondataload 
//-------------------------------------------------------------------------
scwin.ds_fix_clnt_adjm_ondataload = function () {
  let rowCnt = ds_fix_clnt_adjm.getTotalRow();
  if (rowCnt == 0) {
    $c.gus.cfDisableBtn($p, [btn_Save, btn_Delete]);
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.win.alert($p, "데이터가 없습니다.");
    }
    return;
  }
  if (rowCnt > 0) {
    $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Delete]);
    totalRows.setValue(rowCnt);
    for (var i = 0; i < ds_fix_clnt_adjm.getRowCount(); i++) {
      if (ds_fix_clnt_adjm.getCellData(i, "slipNo") > 0) {
        gr_fix_clnt_adjm.setCellStyle(i, "slipNo", "text-decoration", "underline");
        gr_fix_clnt_adjm.setCellStyle(i, "slipNo", "cursor", "pointer");
        gr_fix_clnt_adjm.setCellColor(i, "slipNo", "blue");
      }
    }
    gr_fix_clnt_adjm.setFocusedCell(0, "clntNo", false);
    scwin.gr_fix_clnt_adjm_oncellclick(0, 0);
  }
};

//-------------------------------------------------------------------------
// 귀속부서별 외주수선비 정산내역  ondataload 
//-------------------------------------------------------------------------
scwin.ds_acct_dept_adjm_ondataload = function () {
  let rowCnt = ds_acct_dept_adjm.getTotalRow();
  if (rowCnt == 0) {
    $c.gus.cfDisableBtn($p, [btn_Save, btn_Delete]);
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  }
  if (rowCnt > 0) {
    totalRows1.setValue(rowCnt);
  }
};

//-------------------------------------------------------------------------
// 정비거래처별 외주수선비 정산내역 그리드 클릭시 oncellclick  
//-------------------------------------------------------------------------
scwin.gr_fix_clnt_adjm_oncellclick = function (rowIndex, columnIndex, columnId) {
  var lastDate = (ed_adjmYm.getValue().trim() + "01").toDate("YYYYMMDD").lastDate().format("YYYYMMDD");
  var Row = rowIndex;
  var Colid = columnId;
  if (Row >= 0 && Colid == "chkYn") {
    var fChk;
    fChk = ds_fix_clnt_adjm.getCellData(Row, "chkYn");
    ds_fix_clnt_adjm.getCellData(Row, "chkYn", fChk);
    if (ds_fix_clnt_adjm.getCellData(Row, "slipNo") == "" && fChk == 1) {
      ds_fix_clnt_adjm.setCellData(Row, "slipDt", lastDate);
      ds_fix_clnt_adjm.setCellData(Row, "taxinvcDt", lastDate);
    } else {
      ds_fix_clnt_adjm.setCellData(Row, "slipDt", ds_fix_clnt_adjm.getOriginalCellData(Row, "slipDt"));
      ds_fix_clnt_adjm.setCellData(Row, "taxinvcDt", ds_fix_clnt_adjm.getOriginalCellData(Row, "taxinvcDt"));
    }
  }
  if (Colid == "slipNo" && ds_fix_clnt_adjm.getCellData(Row, "slipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_fix_clnt_adjm.getCellData(Row, "slipNo"));
  }
  if (Colid == "chkYn" || Colid == "slipDt" || Colid == "taxinvcDt") {
    return; // Popup 필드나 checkBox를 선택
  }
  scwin.f_Retrieve_detail(Row);
};
scwin.gr_fix_clnt_adjm_onheaderclick = function (headerId) {
  if (headerId == "column30") {
    var vHeaderId = gr_fix_clnt_adjm.getHeaderValue(headerId);
    console.log("vHeaderId : " + vHeaderId);
    var lastDate = (ed_adjmYm.getValue().trim() + "01").toDate("YYYYMMDD").lastDate().format("YYYYMMDD");
    if (vHeaderId) {
      for (var i = 0; i <= ds_fix_clnt_adjm.getRowCount(); i++) {
        if (ds_fix_clnt_adjm.getCellData(i, "slipNo") == "") {
          ds_fix_clnt_adjm.setCellData(i, "slipDt", lastDate);
          ds_fix_clnt_adjm.setCellData(i, "taxinvcDt", lastDate);
        }
      }
    } else {
      for (var i = 0; i <= ds_fix_clnt_adjm.getRowCount(); i++) {
        if (ds_fix_clnt_adjm.getCellData(i, "slipNo") == "") {
          ds_fix_clnt_adjm.setCellData(i, "slipDt", "");
          ds_fix_clnt_adjm.setCellData(i, "taxinvcDt", "");
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// 전표생성 및 전표취소 
//-------------------------------------------------------------------------
scwin.f_Save = async function (action_type) {
  var fChk = false;
  if (ds_fix_clnt_adjm.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["외주수선비 정산내역"]);
    return;
  } else {
    for (row = 0; row < ds_fix_clnt_adjm.getRowCount(); row++) {
      if (ds_fix_clnt_adjm.getCellData(row, "chkYn") == "1") {
        fChk = true;
        if (action_type == "R") {
          if (ds_fix_clnt_adjm.getCellData(row, "slipNo") != "") {
            await $c.win.alert($p, "[" + (row + 1) + "] 번째는 이미 전표처리가 되었습니다.");
            return;
          }
          if (ds_fix_clnt_adjm.getCellData(row, "taxinvcDt") == "") {
            await $c.win.alert($p, "[" + (row + 1) + "] 번째는 세금계산서일자를 입력하세요.");
            gr_fix_clnt_adjm.setFocusedCell(row, "taxinvcDt", false);
            return;
          }
        }
        if (action_type == "C") {
          if (ds_fix_clnt_adjm.getCellData(row, "slipNo") == "") {
            await $c.win.alert($p, "[" + (row + 1) + "] 번째는 전표처리가 되지않습니다.");
            return;
          }
        }
      }
    }
    if (!fChk) {
      await $c.win.alert($p, "저장할 데이터가 없습니다.");
      return;
    }
    if (action_type == "R") {
      if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
        // 저장하시겠습니까?
        $c.sbm.execute($p, sbm_RegistSlip);
      }
    } else {
      if (action_type == "C") {
        if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
          // 저장하시겠습니까?
          $c.sbm.execute($p, sbm_CancelSlip);
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// 전표취소 버튼 클릭시
//-------------------------------------------------------------------------	
scwin.btn_Delete_onclick = function (e) {
  scwin.f_Save("C");
};

//-------------------------------------------------------------------------
// 전표생성 버튼 클릭시
//-------------------------------------------------------------------------	
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save("R");
};

//-------------------------------------------------------------------------
// 조회조건Clear 버튼 클릭시
//-------------------------------------------------------------------------	
scwin.btn_Clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.sbm_RegistSlip_submitdone = function (e) {
  scwin.f_Retrieve();
  if (e.responseJSON.resultDataSet[0].Code < 0) return;

  // $c.win.alert( "성공적으로 저장하였습니다" );
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

  $c.gus.cfEnableAllBtn($p);
};
scwin.sbm_CancelSlip_submitdone = function (e) {
  scwin.f_Retrieve();
  if (e.responseJSON.resultDataSet[0].Code < 0) return;

  // $c.win.alert( "외주수선비 정산 전표취소 되었습니다." );
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  $c.gus.cfEnableAllBtn($p);
};
scwin.ds_acct_dept_adjm_oncelldatachange = function (info) {
  var columnInfo = info.colID;
  var newValue = info.newValue;
  var rowIndex = info.rowIndex;
  if (columnInfo != "acctDeptNm" && $c.gus.cfIsNull($p, newValue)) {
    ds_acct_dept_adjm.setCellData(rowIndex, columnInfo, "0");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_work',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정산년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_adjmYm',style:'width: 100px;',ref:'data:dma_fix_clnt_adjm_re.adjmYm',displayFormat:'yyyy/MM',title:'정산년월',validExp:'정산년월:yes'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_fix_clnt_adjm_re.homeClsCd','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange',chooseOptionLabel:'',emptyItem:'true',validExp:'소속:yes'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlCd',style:'width: 200px;',submenuSize:'fixed',ref:'data:dma_fix_clnt_adjm_re.fixWrkPlCd',sortMethod:'ascending',sortOption:'value',chooseOption:'',chooseOptionLabel:' ',visibleRowNum:'15'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_wrkPlCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.btn_Clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.btn_Search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'정비거래처별 외주수선비 정산내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_fix_clnt_adjm',gridUpYn:'N',gridDownUserAuth:'X',grdDownOpts:'{"fileName": "정비거래처별외주수선비정산내역.xlsx", "sheetName": "정비거래처별외주수선비정산내역", "type":"1"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_fix_clnt_adjm',id:'gr_fix_clnt_adjm',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_fix_clnt_adjm_oncellclick','ev:onheaderclick':'scwin.gr_fix_clnt_adjm_onheaderclick',rowStatusVisible:'true',rowStatusWidth:'40'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'정비거래처',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'공급가',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column58',value:'총금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'전표일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'세금계산일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'정산상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'전표번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chkYn',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'140',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'supplyAmt',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,###',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,###',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'totAmt',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'slipDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'taxinvcDt',value:'',displayMode:'label',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'adjmStsCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column42',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',expression:'sum(\'supplyAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column40',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',expression:'sum(\'vat\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',expression:'sum(\'totAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'귀속부서별 외주수선비 정산내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_acct_dept_adjm',gridUpYn:'N',gridDownUserAuth:'X',grdDownOpts:'{"fileName": "귀속부서별외주수선비정산내역.xlsx", "sheetName": "귀속부서별외주수선비정산내역", "type":"1"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_acct_dept_adjm',id:'gr_acct_dept_adjm',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false',rowStatusVisible:'true',rowStatusWidth:'40'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'귀속부서',width:'350'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'공급가',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'부가세',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'총금액',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'supplyAmt',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,###',textAlign:'right',maxLength:'13'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,###',textAlign:'right',maxLength:'13'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totAmt',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,###',textAlign:'right',maxLength:'13'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column48',value:'총합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column47',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',expression:'sum(\'supplyAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',expression:'sum(\'vat\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',expression:'sum(\'totAmt\')',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick',objType:'bDelete',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표취소'}]}]}]}]}]}]}]}]}]})