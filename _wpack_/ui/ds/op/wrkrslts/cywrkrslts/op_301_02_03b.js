/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_02_03b.xml 48077 0043348e07bac2883ac480a58c488f577110da69b63a02d060d306868b6ee00c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'pickuprgnCd',name:'pickUp 지역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gubun1',name:'구분1(상차예정일, 등록일자)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'상차요청일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'상차요청일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'admitClsCd',name:'승인구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfTransClntNo',name:'자가운송사',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'라인',dataType:'text'}},{T:1,N:'w2:key',A:{id:'doorRgnCd',name:'Door',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dpctClsCd',name:'DPCT YN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'적하목록관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'serCd',name:'서비스코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'logiYn',name:'SITC LOGI 여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrTypCd',name:'컨테이나타입',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_codeIn'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_srchPickupRgnCd',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_impExpClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_admitClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_cntrSizCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_cntrTypCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_onReqInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'admitClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'I/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onReqNo',name:'상차;요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransClntNo',name:'자가운송사번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransClntNm',name:'자가운송사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onIntendDd',name:'상차;예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blBkNo',name:'BL/Booking',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'Line',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntF20',name:'20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntF45',name:'40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demDt',name:'체선일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'실 화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorRgnNm',name:'Door지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorNm',name:'Door명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorDistrict',name:'Door권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startCd',name:'상차지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startNm',name:'상차지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jeRmk',name:'비고;(자가반출사유)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jeRmkNm',name:'비고;(자가반출사유)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'징수현황',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceFileYn',name:'첨부파일;여부(Y/N)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'당사;배정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'총중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrCnt',name:'컨테이너;갯수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnId',name:'오더확정자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnNm',name:'오더확정자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'middleClntNo',name:'포워더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'middleClntNm',name:'포워더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'middleClntPic',name:'포워더담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'middleClntCntctPl',name:'포워더연락처',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveOnRequestAdmissionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_srchCond","key":"IN_DS1"},{"id":"ds_onReqInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_onReqInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCodeCMD',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_codeIn',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCodeCMD_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.cywrkrslts.SaveOnRequestAdmissionClassificationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_onReqInfo","key":"IN_DS2"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.MSG_SD_INF_001 = "수출입 구분을 선택하십시오";
scwin.blNoTrans = "";
scwin.lineTrans = "";
scwin.srchImpExpClsYn = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.toDay = $p.getCurrentServerDate("yyyyMMdd");
  const codeOptions = [{
    grpCd: "OP206",
    compID: "acb_lc_srchPickupRgnCd"
  }, {
    grpCd: "SD061",
    compID: "acb_lc_srchImpExpCls"
  }, {
    grpCd: "OP179",
    compID: "acb_lc_srchAdmitClsCd,gr_onReqInfo:admitClsCd"
  }, {
    grpCd: "OP101",
    compID: "acb_lc_srchCntrSizCd"
  }, {
    grpCd: "OP102",
    compID: "acb_lc_srchCntrTypCd"
  }, {
    grpCd: "SD144",
    compID: "gr_onReqInfo:mcomAssgnClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.blNoTrans = scwin.params.blNo == null ? "" : scwin.params.blNo;
  scwin.lineTrans = scwin.params.line == null ? "" : scwin.params.line;
  // udc_fromToCalendar UDC 에 있는 setInitDate 호출
  udc_ed_srchDate.setInitDate(scwin.toDay, scwin.toDay);
  ed_srchBlBkNo.setValue(scwin.blNoTrans);
  if (!$c.gus.cfIsNull($p, scwin.blNoTrans)) {
    $p.setTimeout(function () {
      acb_lc_srchPickupRgnCd.setSelectedIndex(3);
      acb_lc_srchImpExpCls.setSelectedIndex(2);
    }, {
      "delay": 150
    });
    ed_LineCd.setValue(scwin.lineTrans);
    if (!$c.gus.cfIsNull($p, scwin.lineTrans) && scwin.lineTrans == "TSL") {
      scwin.udc_Line_onclickEvent();
      scwin.popup_blRetrieve();
    } else {
      scwin.srchImpExpClsYn = true;
      acb_lc_srchImpExpCls.setSelectedIndex(2);
      ed_srchBlBkNo.setValue(scwin.blNoTrans);
      scwin.btn_retrieve_onclick();
    }
  } else {
    acb_lc_srchPickupRgnCd.setSelectedIndex(1);
    acb_lc_srchImpExpCls.setSelectedIndex(0);
    ed_srchBlBkNo.setValue("");
  }
};

//-------------------------------------------------------------------------
// DataSet Code 콤보
//-------------------------------------------------------------------------
scwin.f_dataCode = function (grpCd) {
  dma_codeIn.set("grpCd", grpCd);
  $c.sbm.execute($p, sbm_retrieveCodeCMD);
};
scwin.sbm_retrieveCodeCMD_submitdone = function (e) {
  let requestBody = JSON.parse(e.requestBody).dma_codeIn.grpCd;
  if (requestBody == "OP206") {
    dlt_srchPickupRgnCd.setJSON(e.responseJSON.GAUCE);
    acb_lc_srchPickupRgnCd.setSelectedIndex(1);
    acb_lc_srchPickupRgnCd.focus();
  }
  if (requestBody == "SD061") {
    dlt_impExpClsCd.setJSON(e.responseJSON.GAUCE);

    //조회 타이밍 상 여기에서 제어함.. 차라리 lc_srchImpExpCls를 바꿔 주는 것이 나을듯 함. 쓸데없이 dataset으로 조회해오고 있음.
    if (scwin.blNoTrans != "") {
      if (ed_LineCd.getValue() == "TSL") {} else {
        acb_lc_srchImpExpCls.getValue("I");
        scwin.btn_retrieve_onclick();
      }
    } else {
      acb_lc_srchImpExpCls.setSelectedIndex(0);
    }
  }
  if (requestBody == "OP179") {
    dlt_admitClsCd.setJSON(e.responseJSON.GAUCE);
    acb_lc_srchAdmitClsCd.setSelectedIndex(0);
  }
  if (requestBody == "OP101") {
    dlt_cntrSizCd.setJSON(e.responseJSON.GAUCE);
    //acb_lc_srchAdmitClsCd.setSelectedIndex(0);
  }
  if (requestBody == "OP102") {
    dlt_cntrTypCd.setJSON(e.responseJSON.GAUCE);
    //acb_lc_srchAdmitClsCd.setSelectedIndex(0);
  }
};
scwin.udc_srchBlBkNo_onblurCodeEvent = function (e) {
  if (!$c.gus.cfIsNull($p, ed_LineCd.getValue()) && ed_LineCd.getValue() == "TSL") {
    scwin.popup_blRetrieve();
    if (!$c.gus.cfIsNull($p, ed_srchBlBkNo.getValue())) {
      scwin.udc_Line_onclickEvent();
    }
  }
};
scwin.udc_srchBlBkNo_onclickEvent = function (e) {
  scwin.udc_srchBlBkNo_openPopup();
};
scwin.udc_srchBlBkNo_openPopup = async function (e) {
  if (acb_lc_srchImpExpCls.getValue() == "") {
    $c.gus.cfAlertMsg($p, scwin.MSG_SD_INF_001);
    return;
  }
  var paramList = dma_srchCond.get("impExpClsCd") + "," + dma_srchCond.get("pickuprgnCd") + "," + dma_srchCond.get("stDt") + "," + dma_srchCond.get("endDt");
  if (acb_lc_srchImpExpCls.getValue() == "I") {
    udc_srchBlBkNo.setSelectId("retrieveBlNo");
  } else {
    udc_srchBlBkNo.setSelectId("retrieveBookingNo");
  }
  await udc_srchBlBkNo.cfCommonPopUp(scwin.udc_srchBlBkNo_callBackFunc, ed_srchBlBkNo.getValue(), "", "T", null, null, null, null, paramList, "300", null, null, null);
};
scwin.udc_srchBlBkNo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_srchBlBkNo.setValue(rtnList[0]);
  } else {
    ed_srchBlBkNo.setValue("");
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  acb_lc_srchPickupRgnCd.setSelectedIndex(0);
  acb_lc_srchImpExpCls.setSelectedIndex(0);
  ed_srchCntrNo.setValue("");
  acb_lc_srchCntrSizCd.setSelectedIndex(0);
  acb_lc_srchCntrTypCd.setSelectedIndex(0);
  acb_lc_srchAdmitClsCd.setSelectedIndex(0);
  $c.gus.cfInitObjects($p, [ed_srchBlBkNo, ed_srchCopCoCd, txt_srchCopCoNm, ed_srchOdrNo, ed_LineCd, txt_LineNm, ed_doorCd, txt_doorNm]); //2번째 인자는 초기화 제외 대상인듯?
};
scwin.btn_retrieve_onclick = async function (e) {
  if (acb_lc_gubun1.getValue() == "SRCH_DT" || acb_lc_gubun1.getValue() == "REG_DT") {
    let ret1 = await $c.gus.cfValidate($p, ed_srchFromDate.getValue());
    let ret2 = await $c.gus.cfValidate($p, ed_srchToDate.getValue());
    if (ret1 || ret2) {
      return;
    }
    var afterDate = $c.gus.cfIsAfterDate($p, ed_srchFromDate.getValue(), ed_srchToDate.getValue());
    if (!afterDate) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
      ed_srchFromDate.focus();
      return;
    }
  }
  if (ed_srchFromDate.getValue() == "" || ed_srchFromDate.getValue() == null) {
    await $c.win.alert($p, "상차요청등록 조회 시작일자은(는) 필수 입력 항목입니다.");
    return;
  }
  if (!scwin.srchImpExpClsYn) {
    scwin.srchImpExpClsYn = false;
    if (ed_srchBlBkNo.getValue() != "" && acb_lc_srchImpExpCls.getValue() == "") {
      $c.gus.cfAlertMsg($p, scwin.MSG_SD_INF_001);
      return;
    }
  }

  // let ret3 = await $c.gus.cfValidate([tb_srchCond]);
  // if( !ret3 ) {
  //     return;
  // }

  dma_srchCond.set("serCd", "LTB"); // 상차요청 승인현황 화면에서 조회 시 LTB서비스건 제외

  if (chb_logiYn.getValue() == "1") {
    dma_srchCond.set("logiYn", "Y");
  } else {
    dma_srchCond.set("logiYn", "N");
  }
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    totalRows.setValue(ds_onReqInfo.getRowCount());
    if (ds_onReqInfo.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
      return;
    }
    gr_onReqInfo.setColumnStyle("onReqNo", "color", "blue");
    gr_onReqInfo.setColumnStyle("onReqNo", "font-weight", "bold");
    gr_onReqInfo.setColumnStyle("onReqNo", "text-decoration", "underline");
  }
};
scwin.btn_save_onclick = async function (e) {
  if (ds_onReqInfo.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["상차 요청 승인 현황"]); //변경된 정보가 없습니다.
    return;
  }
  let ret = await $c.gus.cfValidate($p, [gr_onReqInfo]);
  if (!ret) {
    return;
  }

  // TODO : 아래 if문 로직 사용하는 곳 없음.
  if (ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "admitClsCd") == "O" || ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "admitClsCd") == "C") {
    scwin.pos_groupCode = ds_onReqInfo.getRowPosition();
  }
  let confirm = await $c.win.confirm($p, "저장하시겠습니까?");
  if (confirm) {
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  // 성공적으로 저장하였습니다
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.btn_retrieve_onclick();
};

//-------------------------------------------------------------------------
// 수입/수출 상차요청 승인 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_registOnReq_onclick = function (e) {
  let row = ds_onReqInfo.getRowPosition();
  param = {};
  param = {
    selfTransClntNo: ds_onReqInfo.getCellData(row, "selfTransClntNo"),
    onReqNo: ds_onReqInfo.getCellData(row, "onReqNo"),
    selfTransClntNm: ds_onReqInfo.getCellData(row, "selfTransClntNm"),
    lineCd: ds_onReqInfo.getCellData(row, "lineCd")
  };
  if (ds_onReqInfo.getCellData(row, "impExpClsCd") == "I") {
    $c.win.openMenu($p, "수입 상차요청 승인", "/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_04b.xml", "op_301_02_04b.xml", param);
  } else if (ds_onReqInfo.getCellData(row, "impExpClsCd") == "O") {
    $c.win.openMenu($p, "수출 상차요청 승인", "/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_05b.xml", "op_301_02_05b.xml", param);
  } else if (ds_onReqInfo.getCellData(row, "impExpClsCd") == "D") {
    $c.win.alert($p, "수출, 수입건만 가능합니다. ");
  }
};

/* !-- Grid DoubleClick Event -- */
scwin.gr_onReqInfo_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) {
    param = {};
    param = {
      selfTransClntNo: ds_onReqInfo.getCellData(rowIndex, "selfTransClntNo"),
      onReqNo: ds_onReqInfo.getCellData(rowIndex, "onReqNo"),
      selfTransClntNm: ds_onReqInfo.getCellData(rowIndex, "selfTransClntNm"),
      lineCd: ds_onReqInfo.getCellData(rowIndex, "lineCd")
    };
    if (columnId != "reqClntNm") {
      if (ds_onReqInfo.getCellData(rowIndex, "impExpClsCd") == "I") {
        if (ds_onReqInfo.getCellData(rowIndex, "lineCd") == "TSL") {
          param = {};
          param = {
            selfTransClntNo: ds_onReqInfo.getCellData(rowIndex, "selfTransClntNo"),
            onReqNo: ds_onReqInfo.getCellData(rowIndex, "onReqNo"),
            selfTransClntNm: ds_onReqInfo.getCellData(rowIndex, "selfTransClntNm"),
            lineCd: ds_onReqInfo.getCellData(rowIndex, "lineCd"),
            mrn: dma_srchCond.get("mrn"),
            msn: dma_srchCond.get("msn"),
            hsn: dma_srchCond.get("hsn"),
            blNo: dma_srchCond.get("blNo")
          };
          $c.win.openMenu($p, "수입 상차요청 승인", "/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_04b.xml", "op_301_02_04b.xml", param);
        } else {
          $c.win.openMenu($p, "수입 상차요청 승인", "/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_04b.xml", "op_301_02_04b.xml", param);
        }
      } else if (ds_onReqInfo.getCellData(rowIndex, "impExpClsCd") == "O") {
        param = {};
        param = {
          selfTransClntNo: ds_onReqInfo.getCellData(rowIndex, "selfTransClntNo"),
          onReqNo: ds_onReqInfo.getCellData(rowIndex, "onReqNo"),
          selfTransClntNm: ds_onReqInfo.getCellData(rowIndex, "selfTransClntNm"),
          lineCd: ds_onReqInfo.getCellData(rowIndex, "lineCd"),
          pickuprgnCd: dma_srchCond.get("pickuprgnCd")
        };
        $c.win.openMenu($p, "수출 상차요청 승인", "/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_05b.xml", "op_301_02_05b.xml", param);
      } else if (ds_onReqInfo.getCellData(rowIndex, "impExpClsCd") == "D") {
        param = {};
        param = {
          selfTransClntNo: ds_onReqInfo.getCellData(rowIndex, "selfTransClntNo"),
          onReqNo: ds_onReqInfo.getCellData(rowIndex, "onReqNo"),
          selfTransClntNm: ds_onReqInfo.getCellData(rowIndex, "selfTransClntNm"),
          lineCd: ds_onReqInfo.getCellData(rowIndex, "lineCd"),
          pickuprgnCd: dma_srchCond.get("pickuprgnCd")
        };
        $c.win.openMenu($p, "반납 하차요청 승인", "/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_25b.xml", "op_301_02_25b.xml", param);
      }
    } else {
      param = {};
      param = {
        selfTransClntNo: ds_onReqInfo.getCellData(rowIndex, "selfTransClntNo"),
        onReqNo: ds_onReqInfo.getCellData(rowIndex, "onReqNo"),
        selfTransClntNm: ds_onReqInfo.getCellData(rowIndex, "selfTransClntNm"),
        lineCd: ds_onReqInfo.getCellData(rowIndex, "lineCd"),
        reqClntNo: ds_onReqInfo.getCellData(rowIndex, "reqClntNo")
      };
      $c.win.openMenu($p, "화주별 자가운송사 현황", "/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_30b.xml", "op_301_02_30b.xml", param, {
        openAction: "exist"
      });
    }
  }
};
scwin.acb_lc_srchImpExpCls_onchange = function (info) {
  if (acb_lc_srchImpExpCls.getValue() == "D") {
    tr_onHireSrchCond.setStyle("display", "table-row"); //show();
  } else {
    ed_srchCntrNo.setValue("");
    acb_lc_srchCntrSizCd.setSelectedIndex(0);
    acb_lc_srchCntrTypCd.setSelectedIndex(0);
    tr_onHireSrchCond.setStyle("display", "none"); //hide();
  }
};
scwin.f_gridColumnData = function (impExpClsCd) {
  return $c.gus.decode($p, impExpClsCd, "I", "수입", "O", "수출", "D", "반납", "");
};

//-------------------------------------------------------------------------
// 자가운송사 UDC
//-------------------------------------------------------------------------
scwin.udc_srchCopCo_onblurCodeEvent = function (e) {
  scwin.udc_srchCopCo_openPopup();
};
scwin.udc_srchCopCo_onviewchangeNameEvent = function (info) {
  scwin.udc_srchCopCo_openPopup();
};
scwin.udc_srchCopCo_onclickEvent = function (e) {
  scwin.udc_srchCopCo_openPopup();
};
scwin.udc_srchCopCo_openPopup = function (e) {
  var pWhere = ",LOGISCLNT2";
  udc_srchCopCo.cfCommonPopUp(scwin.udc_srchCopCo_callBackFunc, ed_srchCopCoCd.getValue(), txt_srchCopCoNm.getValue(), "T", null, null, null, null, pWhere, null, null, null, null);
};
scwin.udc_srchCopCo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_srchCopCoCd.setValue(rtnList[0]); // 코드
    txt_srchCopCoNm.setValue(rtnList[1]); // 명
  } else {
    ed_srchCopCoCd.setValue(""); // 코드
    txt_srchCopCoNm.setValue(""); // 명
  }
};

//-------------------------------------------------------------------------
// Line UDC
//-------------------------------------------------------------------------
scwin.udc_Line_onblurCodeEvent = function (e) {
  scwin.udc_Line_openPopup();
};
scwin.udc_Line_onviewchangeNameEvent = function (info) {
  scwin.udc_Line_openPopup();
};
scwin.udc_Line_onclickEvent = function (e) {
  scwin.udc_Line_openPopup();
};
scwin.udc_Line_openPopup = function (e) {
  var pWhere = ",LOGISCLNT2";
  udc_Line.cfCommonPopUp(scwin.udc_Line_callBackFunc, ed_LineCd.getValue(), txt_LineNm.getValue(), "T", null, null, null, null, pWhere, null, null, null, null, null, "F", null, "F", null);
};
scwin.udc_Line_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_LineCd.setValue(rtnList[0]); // 코드
    txt_LineNm.setValue(rtnList[1]); // 명
  } else {
    ed_LineCd.setValue(""); // 코드
    txt_LineNm.setValue(""); // 명
  }
};

//-------------------------------------------------------------------------
// Door지역 UDC
//-------------------------------------------------------------------------
scwin.udc_door_onblurCodeEvent = function (e) {
  scwin.udc_door_openPopup();
};
scwin.udc_door_onviewchangeNameEvent = function (info) {
  scwin.udc_door_openPopup();
};
scwin.udc_door_onclickEvent = function (e) {
  scwin.udc_door_openPopup();
};
scwin.udc_door_openPopup = function (e) {
  var paramList = dma_srchCond.get("impExpClsCd") + "," + dma_srchCond.get("pickuprgnCd") + "," + dma_srchCond.get("stDt") + "," + dma_srchCond.get("endDt");
  udc_door.cfCommonPopUp(scwin.udc_door_callBackFunc, ed_doorCd.getValue(), txt_doorNm.getValue(), "T", null, null, null, null, paramList, null, null, null, null);
};
scwin.udc_door_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_doorCd.setValue(rtnList[0]); // 코드
    txt_doorNm.setValue(rtnList[1]); // 명
  } else {
    ed_doorCd.setValue(""); // 코드
    txt_doorNm.setValue(""); // 명
  }
};

//-------------------------------------------------------------------------
// BL조회 UDC
//-------------------------------------------------------------------------
scwin.popup_blRetrieve = async function (e) {
  var data = {
    arrParam0: ed_srchBlBkNo.getValue() //bl번호
    ,
    arrParam1: '' //본선관리번호
    ,
    arrParam2: '' //배정구분코드
    ,
    arrParam3: 'I' //수출입구분코드
    ,
    arrParam4: '0' //bulkYn : 0-컨테이너, 1-벌크
    ,
    arrParam5: ed_LineCd.getValue() //LINE 코드
    ,
    arrParam6: 'N' //TS 오더가 아닌경우로 세팅
    ,
    arrParam7: 'F' //다중선택 여부
    ,
    arrParam8: 'F' //TS 오더가 아닌경우로 세팅
    ,
    callbackFn: scwin.popup_blRetrieve_callBackFunc
  };
  var opts = {
    id: "smpPop",
    popupName: "BL조회",
    modal: true,
    type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    ,
    title: "Win pop" //Layer pop
    ,
    width: 900,
    height: 500
  };
  $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_29p.xml", opts, data);
};
scwin.popup_blRetrieve_callBackFunc = function (ret) {
  ed_mrn.setValue(ret[0]);
  ed_msn.setValue(ret[1]);
  ed_hsn.setValue(ret[2]);
  ed_srchBlBkNo.setValue(ret[3]);
  ed_LineCd.setValue(ret[4]);
  acb_lc_srchImpExpCls.setValue("I");
  scwin.btn_retrieve_onclick();
};
scwin.ed_srchCntrNo_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.ed_mrn_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'PickUp 지역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_srchPickupRgnCd',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_srchCond.pickuprgnCd',objType:'data',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_srchPickupRgnCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:' req',editType:'select',id:'acb_lc_gubun1',search:'start',style:'width: 100px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_srchCond.gubun1',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'등록일시'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'REG_DT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'상차예정일'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SRCH_DT'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_ed_srchDate',refDataMap:'dma_srchCond',refEdDt:'endDt',refStDt:'stDt',style:'',edFromId:'ed_srchFromDate',edToId:'ed_srchToDate',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수입/수출 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_srchImpExpCls',search:'start',style:'width:85px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_srchCond.impExpClsCd','ev:onchange':'scwin.acb_lc_srchImpExpCls_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_impExpClsCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DPCT여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_autoComplete5',search:'start',style:'width: 55px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_srchCond.dpctClsCd',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SITC LOGI',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_logiYn',ref:'',renderType:'native',rows:'',selectedindex:'-1',style:'',value:'1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_srchAdmitClsCd',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_srchCond.admitClsCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_admitClsCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L or BooKing No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{codeWidth:'205',btnId:'btn_srchBlBkNo',codeId:'ed_srchBlBkNo',id:'udc_srchBlBkNo',nameId:'',popupID:'',selectID:'retrieveBlNo',style:'',hideName:'true',refDataCollection:'dma_srchCond',code:'blNo',popupTitle:'B/L조회,B/L코드',popupGridHeadTitle:'B/L코드','ev:onblurCodeEvent':'scwin.udc_srchBlBkNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_srchBlBkNo_onclickEvent'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가 운송사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_srchCopCo',codeId:'ed_srchCopCoCd',nameId:'txt_srchCopCoNm',btnId:'btn_srchCopCo',selectID:'retrieveClntList',code:'selfTransClntNo',maxlengthCode:'6',refDataCollection:'dma_srchCond',objTypeCode:'Data',objTypeName:'Data',mandatoryName:'false',popupTitle:'거래처팝업,거래처코드,거래처명',popupGridHeadTitle:'거래처코드,거래처명,,,사업자번호,,거래처직원,주소,요율연결여부','ev:onblurCodeEvent':'scwin.udc_srchCopCo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_srchCopCo_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_srchCopCo_onclickEvent',popupGridHiddenColumn:'3,4,6,10',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_srchOdrNo',placeholder:'',style:'width:120px;',ref:'data:dma_srchCond.odrNo',objType:'data',mandatory:'false'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_LineCd',nameId:'txt_LineNm',id:'udc_Line',btnId:'btn_Line',selectID:'retrieveLineInfoList',maxlengthCode:'5',refDataCollection:'dma_srchCond',code:'lineCd',objTypeCode:'data',mandatoryCode:'false',mandatoryName:'false',objTypeName:'Data',popupTitle:'LINE조회,LINE코드,LINE명',popupGridHeadTitle:'LINE코드,LINE명,COL3,COL4,COL5','ev:onblurCodeEvent':'scwin.udc_Line_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_Line_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_Line_onclickEvent',popupGridHiddenColumn:'6,7,8,9,10',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Door지역 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_doorCd',nameId:'txt_doorNm',id:'udc_door',btnId:'btn_door',selectID:'retrieveDoor',maxlengthCode:'5',refDataCollection:'dma_srchCond',code:'doorRgnCd',objTypeCode:'data',mandatoryCode:'false',mandatoryName:'false',objTypeName:'Data',popupTitle:'Door조회,Door코드,Door지역명',popupGridHeadTitle:'Door코드,Door지역명,컬럼3','ev:onblurCodeEvent':'scwin.udc_door_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_door_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_door_onclickEvent',popupGridHiddenColumn:'4,5,6,7,8,9,10',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'tr_onHireSrchCond'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_srchCntrNo',placeholder:'',style:'width:120px;',ref:'data:dma_srchCond.cntrNo',maxlength:'11',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_srchCntrNo_onkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Size',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_srchCntrSizCd',search:'start',style:'width: 113px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_srchCond.cntrSizCd'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Type',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_srchCntrTypCd',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_srchCond.cntrTypCd'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상차 요청 승인 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'화물관리번호',class:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'width: 100px;',maxlength:'11',allowChar:'a-zA-Z0-9',ref:'data:dma_srchCond.mrn','ev:onkeyup':'scwin.ed_mrn_onkeyup'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'-',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_msn',placeholder:'',style:'width:50px;',initValue:'0',maxlength:'4',allowChar:'0-9',ref:'data:dma_srchCond.msn'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'-',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_hsn',placeholder:'',style:'width:50px;',initValue:'0',maxlength:'4',allowChar:'0-9',ref:'data:dma_srchCond.hsn'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridID:'gr_onReqInfo',id:'udc_topGrd',grdDownOpts:'{"fileName" : "상차요청승인현황.xlsx", "sheetName" : "상차요청승인현황", "type" : "1", "useStyle" : "true"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',visibleRowNum:'13',class:'wq_gvw',dataList:'data:ds_onReqInfo',id:'gr_onReqInfo',style:'',fixedColumn:'4',readOnly:'true','ev:oncelldblclick':'scwin.gr_onReqInfo_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'구분',width:'70',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'I/E',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'상차<br/>요청번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'자가운송사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'상차예정일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'등록일시',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'BL/Booking',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'Line',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'20',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'40',width:'50'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'체선일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'요청거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'청구거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'실 화주',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'Door지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'Door명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'Door권역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'상차지코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'상차지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column21',value:'비고<br/>(자가반출사유)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column23',value:'비고<br/>(자가반출사유)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'징수현황',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',value:'첨부파일<br/>여부(Y/N)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',value:'당사<br/>배정구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'총중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'컨테이너<br/>갯수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'요청거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'오더확정자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'오더확정자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'포워더',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'포워더',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',value:'포워더담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column47',displayMode:'label',value:'포워더연락처'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'admitClsCd',inputType:'select',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'text',width:'70',displayFormatter:'scwin.f_gridColumnData'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onReqNo',inputType:'text',width:'100',class:'',style:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selfTransClntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onIntendDd',inputType:'calendar',width:'100',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blBkNo',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntF20',inputType:'text',width:'50',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntF45',inputType:'text',width:'50',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'demDt',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'reqClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'realMchtClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorRgnNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorDistrict',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'startCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'startNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'jeRmk',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'jeRmkNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellUpr',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'evidenceFileYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'mcomAssgnClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totWt',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrCnt',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'reqClntNo',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrDcsnId',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrDcsnNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'middleClntNo',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'middleClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'middleClntPic',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'middleClntCntctPl',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_registOnReq',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_registOnReq_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수입/수출 상차요청 승인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})