/*amd /ui/ps/tr/expropmgnt/oilingmgnt/tr_270_05_04b.xml 42884 69da12aa1722c312932163a70600bbd52b53cbe427eba64d0114b4fc74538319 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieveOilingSum'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'standYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilStatClsCd',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveOilingSum',saveRemovedData:'true','ev:ondataload':'scwin.ds_retrieveOilingSum_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdYm',name:'년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'소속구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatClntNo',name:'주유소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatNm',name:'주유소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatClsCd',name:'주유소구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tbeginStockQty',name:'기초수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tbeginStockAmt',name:'기초금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inQty',name:'입고수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inAmt',name:'입고금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outQty',name:'출고수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outAmt',name:'출고금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tendStockQty',name:'기말수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tendStockAmt',name:'기말금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'createYn',name:'생성여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipYn',name:'전표여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inSlipNo',name:'입고전표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outSlipNo',name:'출고전표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmisSlipNo',name:'수수료전표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'beginUpr',name:'기초단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inUpr',name:'입고단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outUpr',name:'출고단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tendUpr',name:'기말단가',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dummy',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdYm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatClntNo',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cond',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdYm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkClsCd',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveOilingSum',action:'/ps.tr.expropmgnt.oilingmgnt.RetrieveOilStockAggregationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieveOilingSum","key":"IN_DS1"},{"id":"ds_retrieveOilingSum","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieveOilingSum","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveOilingSum_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_dummy',action:'',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_confirm',action:'/ps.tr.expropmgnt.oilingmgnt.ConfirmOilStockCloseYnCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_cond","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_confirm_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveOilingSum',action:'/ps.tr.expropmgnt.oilingmgnt.CreateOilStockMonthAggregationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_dummy","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveOilingSum_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delOilingSum',action:'/ps.tr.expropmgnt.oilingmgnt.CancelOilStockMonthAggregationCreationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_dummy","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delOilingSum_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 유류재고집계생성 (tr_270_05_04b)
// 작성자 : 송정희
// 최초작성일자 : 2026-01-16
// 전표여부 disabled -> enable 변경필요
//-------------------------------------------------------------------------
scwin.fromDate_YMD = ""; // 작업날짜
scwin.fromDate_YMD = WebSquare.date.getCurrentServerDate("yyyyMMdd");

//-------------------------------------------------------------------------
// onpageload
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.fnonload();
};
scwin.fnonload = function () {
  ed_standardYearMonth.setValue(scwin.fromDate_YMD);
  ed_standardYearMonth.focus();
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "gr_retrieveOilingSum:homeClsCd"
  },
  // 소속구분
  {
    grpCd: "ZZ503",
    compID: "lc_oilStatClsCd, gr_retrieveOilingSum:oilStatClsCd"
  } // 주유소구분
  ];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_JobCloseYN();
  chk_previewCheck.setValue(1);
  gr_retrieveOilingSum.setColumnReadOnly(0, false);
};

//-------------------------------------------------------------------------
// 확정여부 조회
//-------------------------------------------------------------------------
scwin.f_JobCloseYN = async function () {
  var sCloseYM = "";
  sCloseYM = ed_standardYearMonth.getValue();
  var isClose = await udc_check.cfJobCloseYN("CUR", sCloseYM, "00", "TR50", "00");
  // cfJobCloseYN(pReqKind, pCloseYM, pCloseDD, pWorkNo, pMgntNo, pRtnKind, pDualChkYN, pCoCd) 
  //  ▶요청구분 : [CUR] ▶작업번호 : [TR50] ▶마감주기 : [] ▶마감년월 : [202601] ▶관리번호 : [00] ▶마감일 : [00] ========================== 마감주기-유효값 ========================== (Y) 00 / (H) 1~2 / (Q) 1~4 (M) 00 / (W) 1~5 / (D) 01~31         
  if (isClose == "" || isClose == null || isClose == "DNF") {
    ed_closeYn.setValue("N");
  } else if (isClose == "1") {
    ed_closeYn.setValue("N");
  } else if (isClose == "2") {
    ed_closeYn.setValue("Y");
  }
};
scwin.btn_Clear_onclick = function (e) {
  ed_standardYearMonth.setValue(scwin.fromDate_YMD);
  lc_oilStatClsCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  if (ed_standardYearMonth.getValue().trim().length != 6) {
    $c.gus.cfAlertMsg($p, "기준일자는 필수입력 입니다.");
    ed_standardYearMonth.focus();
    return;
  }
  dma_retrieveOilingSum.set("standYm", ed_standardYearMonth.getValue());
  dma_retrieveOilingSum.set("oilStatClsCd", lc_oilStatClsCd.getValue());
  $c.sbm.execute($p, sbm_retrieveOilingSum);
};
scwin.sbm_retrieveOilingSum_submitdone = function (e) {
  scwin.f_JobCloseYN();
};
scwin.btn_Search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.ds_retrieveOilingSum_ondataload = function () {
  let rowCnt = ds_retrieveOilingSum.getTotalRow();
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
    totalRows.setValue(rowCnt);
    let t_tbeginStockAmt = 0; //기초금액
    let t_tbeginStockQty = 0; //기초수량
    let t_inAmt = 0; //입고금액
    let t_inQty = 0; //입고수량
    let t_outAmt = 0; //출고금액
    let t_outQty = 0; //출고수량
    let t_tendStockAmt = 0; //기말금액
    let t_tendStockQty = 0; //기말수량

    let t_beginUpr = 0;
    let t_inUpr = 0;
    let t_outUpr = 0;
    let t_tendUpr = 0;

    //column style 지정
    for (var i = 0; i < ds_retrieveOilingSum.getRowCount(); i++) {
      t_tbeginStockAmt = ds_retrieveOilingSum.getCellData(i, "tbeginStockAmt"); //기초금액
      t_tbeginStockQty = ds_retrieveOilingSum.getCellData(i, "tbeginStockQty"); //기초수량
      t_inAmt = ds_retrieveOilingSum.getCellData(i, "inAmt"); //입고금액
      t_inQty = ds_retrieveOilingSum.getCellData(i, "inQty"); //입고수량
      t_outAmt = ds_retrieveOilingSum.getCellData(i, "outAmt"); //출고금액
      t_outQty = ds_retrieveOilingSum.getCellData(i, "outQty"); //출고수량
      t_tendStockAmt = ds_retrieveOilingSum.getCellData(i, "tendStockAmt"); //기말금액
      t_tendStockQty = ds_retrieveOilingSum.getCellData(i, "tendStockQty"); //기말수량

      // 기초단가 {tbeginStockAmt/tbeginStockQty}
      if (t_tbeginStockQty == 0) {
        t_beginUpr = "";
      } else {
        t_beginUpr = t_tbeginStockAmt / t_tbeginStockQty;
      }
      ds_retrieveOilingSum.setCellData(i, "beginUpr", t_beginUpr);

      // 입고단가 {inAmt/inQty} 
      if (t_inQty == 0) {
        t_inUpr = "";
      } else {
        t_inUpr = t_inAmt / t_inQty;
      }
      ds_retrieveOilingSum.setCellData(i, "inUpr", t_inUpr);

      // 출고단가 {outAmt/outQty}
      if (t_outQty == 0) {
        t_outUpr = "";
      } else {
        t_outUpr = t_outAmt / t_outQty;
      }
      ds_retrieveOilingSum.setCellData(i, "outUpr", t_outUpr);

      // 기말단가 {tendStockAmt/tendStockQty}
      if (t_tendStockQty == 0) {
        t_tendUpr = "";
      } else {
        t_tendUpr = t_tendStockAmt / t_tendStockQty;
      }
      ds_retrieveOilingSum.setCellData(i, "tendUpr", t_tendUpr);
    }
    gr_retrieveOilingSum.setFocusedCell(0, "clntNo", false);
  }
};
scwin.f_beginUpr = function (upr) {
  return upr;
};
//-------------------------------------------------------------------------
// 확정/취소 : C/D
// 확정 : 전 주유소에 대해 재고집계가 생성되어 있어야 한다.(미생성 주유소 $c.gus.cfAlertMsg)
// 취소 : 해당월 전표가 생성되어 있지 않아야 한다.(입고,출고,직매주유소,보관주유소,운송료)
//-------------------------------------------------------------------------
scwin.f_Confirm = async function (cls) {
  scwin.f_JobCloseYN(); // 확정여부 조회
  if (scwin.f_validChk(cls) == true) {
    var JobYn = "";
    if (cls == "C") {
      // 마감시 마감했는지 체크 : 마감후면 마감 불가(마감취소 후 확정 가능)
      JobYn = await udc_check.cfJobCloseYN("CUR", ds_cond.getCellData(0, "stdYm"), "00", "TR50", "00", null, "N"); // 마감여부 체크(월)
      if (JobYn == "0" || JobYn == "2") {
        $c.gus.cfAlertMsg($p, ed_standardYearMonth.getValue() + "월 유류재고 확정작업을 이미 완료하였습니다. \n확정할 수 없습니다.");
        return;
      }
    }
    ds_cond.setCellData(0, "wrkNo", "TR50"); // 유류재고 확정코드
    ds_cond.setCellData(0, "wrkClsCd", cls); // 생성/취소구분(C/D)

    var g_cls = cls;
    var g_nm = "";
    if (cls == "C") {
      g_nm = "";
    } else if (cls == "D") {
      g_nm = "취소";
    }
    let confirm = await $c.win.confirm($p, "유류재고확정 " + g_nm + "하시겠습니까?");
    if (confirm) {
      $c.sbm.execute($p, sbm_confirm);
    }
  }
};
scwin.sbm_confirm_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_012, ['유류확정/취소']);
    scwin.f_JobCloseYN(); // 확정여부 조회
  }
};

//-------------------------------------------------------------------------
// f_validChk()
//-------------------------------------------------------------------------
scwin.f_validChk = function (cls) {
  if (ed_standardYearMonth.getValue().length != 6) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['기준년월']);
    ed_standardYearMonth.focus();
    return false;
  }
  var g_cls = cls;
  var g_nm = "";
  if (cls == "C") {
    g_nm = "";
  } else if (cls == "D") {
    g_nm = "취소";
  }
  ds_cond.removeAll();
  ds_cond.insertRow();
  ds_cond.setCellData(0, "stdYm", ed_standardYearMonth.getValue());
  return true;
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (cls) {
  var clsstr = "";
  var pathstr = "";
  if (ed_standardYearMonth.getValue().trim().length != 6) {
    $c.win.$c.gus.cfAlertMsg("기준년월은 필수입력입니다.");
    return;
  }
  if (ds_retrieveOilingSum.getRowCount() == 0) {
    $c.win.$c.gus.cfAlertMsg("조회된 자료가 없습니다. 조회 후 선택하세요.");
    return;
  }

  // 집계 취소 시 확정여부 확인
  if (cls == 2) {
    var JobYn = "";
    JobYn = await udc_check.cfJobCloseYN("CUR", ed_standardYearMonth.getValue().trim(), "00", "TR50", "00", null, "N"); // 마감여부 체크(월)
    if (JobYn == "0" || JobYn == "2") {
      await $c.gus.cfAlertMsg($p, ed_standardYearMonth.getValue() + "월 유류재고 확정작업을 이미 완료하였습니다. \n집계생성취소할 수 없습니다.");
      return;
    }
  }
  if (cls == 1) {
    clsstr = "유류재고집계 생성";
    pathstr = "/ps.tr.expropmgnt.oilingmgnt.CreateOilStockMonthAggregationCMD.do";
  } else if (cls == 2) {
    clsstr = "유류재고집계 생성취소";
    pathstr = "/ps.tr.expropmgnt.oilingmgnt.CancelOilStockMonthAggregationCreationCMD.do";
  }
  if (scwin.f_CloseCheck(cls) == false) {
    return;
  }
  if (await scwin.f_ValidCheck(cls)) {
    let confirm = await $c.win.confirm($p, "선택한 주유소에 대해 " + clsstr + " 하시겠습니까?");
    if (confirm) {
      if (cls == 1) {
        sbm_saveOilingSum.action = pathstr;
        $c.sbm.execute($p, sbm_saveOilingSum);
      } else if (cls == 2) {
        sbm_delOilingSum.action = pathstr;
        $c.sbm.execute($p, sbm_delOilingSum);
      }
    }
  } else {
    return;
  }
};

// 유류재고집계 생성
scwin.sbm_saveOilingSum_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_012, ['유류재고']);
    scwin.f_Retrieve();
  }
};

// 유류재고집계 생성취소
scwin.sbm_delOilingSum_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_013);
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 그리드 선택사항 마감여부 체크 (cls 1:생성,2:취소 )
//-------------------------------------------------------------------------
scwin.f_CloseCheck = async function (cls) {
  var stdYm = ed_standardYearMonth.getValue().trim();
  var rtn = "";
  var msg = "";
  if (cls == 1) {
    msg = "재고집계생성";
  } else if (cls == 2) {
    msg = "재고집계생성취소";
  }

  // 1.정유사 입고전표 생성여부 체크
  rtn = await udc_check.cfJobCloseYN("CUR", stdYm, "00", "TR39", "00", "", "N");
  if (rtn != "1" && rtn != "DNF") {
    $c.win.$c.gus.cfAlertMsg("정유사 입고전표가 생성되었으므로 " + msg + "을(를) 하실 수 없습니다.");
    return false;
  }

  // 2.주유소 출고전표 생성여부 체크
  rtn = await udc_check.cfJobCloseYN("CUR", stdYm, "00", "TR40", "00", "", "N");
  if (rtn != "1" && rtn != "DNF") {
    $c.win.$c.gus.cfAlertMsg("주유소 출고전표가 생성되었으므로 " + msg + "을(를) 하실 수 없습니다.");
    return false;
  }
  if (cls == 1) {
    return true;
  }

  // 선택행 값 체크
  var oilStatClntNo = "";
  var oilStatNm = "";
  var oilStatClsCd = ""; // 01:자가, 02:보관, 03:직매
  for (var i = 0; i < ds_retrieveOilingSum.getRowCount(); i++) {
    var slipYn = ds_retrieveOilingSum.getCellData(i, "slipYn");
    if (slipYn == 1) {
      oilStatClntNo = ds_retrieveOilingSum.getCellData(i, "oilStatClntNo");
      oilStatNm = ds_retrieveOilingSum.getCellData(i, "oilStatNm");
      oilStatClsCd = ds_retrieveOilingSum.getCellData(i, "oilStatClsCd");
      /**/
      if (oilStatClsCd == "01" || oilStatClsCd == "02") {
        // 1.정유사 입고전표 생성여부 체크
        rtn = await udc_check.cfJobCloseYN("CUR", stdYm, "00", "TR39", "00", "", "N");
        if (rtn != "1" && rtn != "DNF") {
          $c.win.$c.gus.cfAlertMsg("정유사 입고전표가 생성되었으므로 " + msg + "을(를) 하실 수 없습니다.");
          return false;
        }

        // 2.주유소 출고전표 생성여부 체크(물류, 고속 각각 체크)
        rtn = await udc_check.cfJobCloseYN("CUR", stdYm, "00", "TR40", "TR", "", "N");
        if (rtn != "1" && rtn != "DNF") {
          $c.win.$c.gus.cfAlertMsg("주유소 출고전표가 생성되었으므로 " + msg + "을(를) 하실 수 없습니다.");
          return false;
        }
        rtn = await udc_check.cfJobCloseYN("CUR", stdYm, "00", "TR40", "LO", "", "N");
        if (rtn != "1" && rtn != "DNF") {
          $c.win.$c.gus.cfAlertMsg("주유소 출고전표가 생성되었으므로 " + msg + "을(를) 하실 수 없습니다.");
          return false;
        }
      } /**/

      if (cls == 2) {
        if (oilStatClsCd == "03") {
          // 3. 직매주유소 매입전표 생성여부 체크
          rtn = await udc_check.cfJobCloseYN("CUR", stdYm, "00", "TR41", oilStatClntNo, "", "N");
          if (rtn != "1" && rtn != "DNF") {
            $c.win.$c.gus.cfAlertMsg(i + 1 + "행 " + oilStatNm + "에 대한 직매주유소 매입전표가 생성되었으므로" + msg + "하실 수 없습니다.");
            return false;
          }
        }
        if (oilStatClsCd == "02") {
          // 4. 보관주유소 주입수수료전표 생성여부 체크
          rtn = await udc_check.cfJobCloseYN("CUR", stdYm, "00", "TR42", oilStatClntNo, "", "N");
          if (rtn != "1" && rtn != "DNF") {
            $c.win.$c.gus.cfAlertMsg(i + 1 + "행 " + oilStatNm + "에 대한 보관주유소 주입수수료전표가 생성되었으므로" + msg + "하실 수 없습니다.");
            return false;
          }
        }
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 그리드 선택사항 체크 (cls 1:생성,2:취소 )
//-------------------------------------------------------------------------
scwin.f_ValidCheck = function (cls) {
  var slipYn = 0;
  var slipTot = 0;
  var createYn = "";
  var addBool = false;
  ds_dummy.removeAll();

  // 선택행 값 체크
  for (var i = 0; i < ds_retrieveOilingSum.getRowCount(); i++) {
    addBool = true;
    slipYn = ds_retrieveOilingSum.getCellData(i, "slipYn");
    if (slipYn == 1) {
      createYn = ds_retrieveOilingSum.getCellData(i, "createYn");
      if (createYn == "Y" && cls == 1) {
        // 생성여부와 버튼명 체크1
        $c.gus.cfAlertMsg($p, i + 1 + "번째 행은 이미 집계생성하였습니다. 집계생성하지 않은 주유소만 생성하실 수 있습니다.");
        return false;
      }
      if (createYn == "N" && cls == 2) {
        // 생성여부와 버튼명 체크2
        $c.gus.cfAlertMsg($p, i + 1 + "번째 행은 아직 집계생성하지 않았습니다. 집계생성한 주유소만 취소하실 수 있습니다.");
        return false;
      }
      if (ds_dummy.getRowCount() > 0) {
        for (var j = 0; j < ds_dummy.getRowCount(); j++) {
          if (ds_dummy.getCellData(j, "oilStatClntNo") == ds_retrieveOilingSum.getCellData(i, "oilStatClntNo")) {
            addBool = false;
          }
        }
      }
      if (addBool == true) {
        var vRow = ds_dummy.insertRow();
        ds_dummy.setCellData(vRow, "stdYm", ds_retrieveOilingSum.getCellData(i, "stdYm"));
        ds_dummy.setCellData(vRow, "oilStatClntNo", ds_retrieveOilingSum.getCellData(i, "oilStatClntNo"));
        slipTot += 1;
      }
    }
  }
  if (slipTot == 0) {
    // 선택한 행수 체크
    $c.gus.cfAlertMsg($p, "선택하신 자료가 없습니다. 먼저 행을 선택하십시요");
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 생성 버튼
//-------------------------------------------------------------------------
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save(1);
};

//-------------------------------------------------------------------------
// 생성취소 버튼
//-------------------------------------------------------------------------
scwin.btn_Delete_onclick = function (e) {
  scwin.f_Save(2);
};

//-------------------------------------------------------------------------
// 유류재고 확정 버튼
//-------------------------------------------------------------------------
scwin.btn_Confirm_C_onclick = function (e) {
  scwin.f_Confirm('C');
};

//-------------------------------------------------------------------------
// 유류재고 확정취소 버튼
//-------------------------------------------------------------------------
scwin.btn_Confirm_D_onclick = function (e) {
  scwin.f_Confirm('D');
};

//-------------------------------------------------------------------------
// 유류재고 확인서 버튼
//-------------------------------------------------------------------------
scwin.btn_print_onclick = function (e) {
  scwin.f_OzReport();
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_retrieveOilingSum.getRowCount() == 0) {
    // $c.gus.cfAlertMsg(MSG_CM_WRN_002);
    return;
  }
  let gridColCount = 0;
  for (let i = 0; i < gr_retrieveOilingSum.getTotalCol(); i++) {
    if (gr_retrieveOilingSum.getColumnVisible(i) == true) {
      gridColCount++;
    }
  }
  let str = $c.gus.cfGetFormatStr($p, ed_standardYearMonth.getValue(), "####/##");
  let startRowIndex = 0;
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "유류재고 집계",
    textAlign: "center",
    fontface: "돋움체",
    fontSize: 12,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }, {
    rowIndex: 2,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "기준년월 [" + str + "]",
    textAlign: "left",
    fontSize: 10,
    fontface: "굴림체",
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }];
  const options = {
    fileName: "유류재고 집계.xlsx",
    sheetName: "유류재고 집계",
    startRowIndex: 3,
    startColumnIndex: 0,
    type: 1
  };
  await $c.data.downloadGridViewExcel($p, gr_retrieveOilingSum, options, infoArr);
};

//-------------------------------------------------------------------------
// 유류재고확인서 발행
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  if (ds_retrieveOilingSum.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  }
  var cnt = 0;
  for (var i = 0; i < ds_retrieveOilingSum.getRowCount(); i++) {
    if (ds_retrieveOilingSum.getCellData(i, "slipYn") == "1") {
      cnt++;
    }
  }
  if (cnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["목록"]); // 선택된 @이(가) 없습니다.
    return;
  }
  var stdYm = "";
  var clntNo = "";
  var vMode = "";
  scwin.isTotPrint = true;

  //OZStartBatch();
  for (var i = 0; i < ds_retrieveOilingSum.getRowCount(); i++) {
    if (ds_retrieveOilingSum.getCellData(i, "slipYn") == "1") {
      stdYm = ed_standardYearMonth.getValue();
      clntNo = ds_retrieveOilingSum.getCellData(i, "oilStatClntNo");
      if (chk_previewCheck.getValue() == "1") {
        // 미리보기 체크된 경우

        let data = {
          odiName: "tr_270_05_04b",
          reportName: "/ps/tr/expropmgnt/oilingmgnt/tr_270_05_04b.ozr",
          odiParam: {
            stdYm: stdYm,
            clntNo: clntNo
          },
          viewerParam: {
            useprogressbar: true,
            // 프로그레스바 쓸지 말지
            zoom: 100,
            // 배율 설정
            mode: "view",
            copies: 1
          },
          formParam: {}
        };
        let opts = {
          id: "ozReportPopup",
          popupName: "오즈 리포트",
          modal: true,
          type: "browserPopup",
          width: 800,
          height: 1100,
          title: "오즈 리포트"
        };
        await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
      } else {
        let data = {
          odiName: "tr_270_05_04b",
          reportName: "/ps/tr/expropmgnt/oilingmgnt/tr_270_05_04b.ozr",
          odiParam: {
            stdYm: stdYm,
            clntNo: clntNo
          },
          viewerParam: {
            useprogressbar: true,
            viewer: 100,
            zoom: 130 // 배율 설정
          },
          formParam: {
            odiName: "tr_270_05_04b"
          }
        };
        let opts = {
          type: "download" // viewer, print, download
        };
        let saveOptions = {};
        $c.ext.downloadOzReport($p, data, opts);
      }
    }
  }
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};
scwin.gr_retrieveOilingSum_oncellclick = function (rowIndex, columnIndex, columnId) {
  var row = rowIndex;
  var colid = columnId;
  if (colid == "slipYn") {
    var chkYn = "";
    var newChkYn = "";
    var oilStatClntNo = "";
    chkYn = ds_retrieveOilingSum.getCellData(row, "slipYn");
    oilStatClntNo = ds_retrieveOilingSum.getCellData(row, "oilStatClntNo");
    if (chkYn == 1) {
      newChkYn = 1;
    } else {
      newChkYn = 0;
    }
    for (var k = 0; k < ds_retrieveOilingSum.getRowCount(); k++) {
      if (oilStatClntNo == ds_retrieveOilingSum.getCellData(k, "oilStatClntNo")) {
        ds_retrieveOilingSum.setCellData(k, "slipYn", newChkYn);
      }
    }
  } else if (colid == "inSlipNo" && ds_retrieveOilingSum.getCellData(row, "inSlipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_retrieveOilingSum.getCellData(row, "inSlipNo"));
  } else if (colid == "outSlipNo" && ds_retrieveOilingSum.getCellData(row, "outSlipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_retrieveOilingSum.getCellData(row, "outSlipNo"));
  } else if (colid == "cmisSlipNo" && ds_retrieveOilingSum.getCellData(row, "cmisSlipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_retrieveOilingSum.getCellData(row, "cmisSlipNo"));
  }
};
scwin.gr_retrieveOilingSum_onheaderclick = function (headerId) {
  var cr = ds_retrieveOilingSum.getRowCount();
  var Colid = headerId;
  var bCheck = "";
  console.log(" Colid : " + Colid);
  if (cr > 0) {
    if (Colid == "slipYn_h") {
      for (var i = 1; i <= cr; i++) {
        //          ds_retrieveOilingSum.setCellData(i,"slipYn", bCheck);
      }
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'true',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준 년/월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_standardYearMonth',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주유소구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_oilStatClsCd',style:'width: 200px;',submenuSize:'fixed',sortMethod:'ascending',sortOption:'value',chooseOptionLabel:'전체'}}]}]}]},{T:1,N:'w2:udc_comChkRes',A:{codeId:'',id:'udc_check',nameId:'',selectID:'',style:'width:%; height:px; ;visibility:hidden;'}}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.btn_Clear_onclick',id:'btn_Clear',style:'display:none',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.btn_Search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_retrieveOilingSum',gridUpYn:'N',gridDownUserAuth:'X',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_retrieveOilingSum',id:'gr_retrieveOilingSum',style:'',visibleRowNum:'14',visibleRowNumFix:'true',autoFit:'allColumn','ev:oncellclick':'scwin.gr_retrieveOilingSum_oncellclick',readOnly:'true','ev:onheaderclick':'scwin.gr_retrieveOilingSum_onheaderclick',fixedColumn:'5',fixedColumnNoMove:'true',columnMove:'true',autoFitMinWidth:'0',defaultCellHeight:'30'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'20',inputType:'checkbox',id:'slipYn_h',displayMode:'label',value:'check'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'소속</br>구분',width:'45'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'주유소명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'주유소</br>구분',width:'60'}},{T:1,N:'w2:column',A:{width:'45',inputType:'text',id:'column64',value:'생성</br>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'기초</br>수량',width:'65',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'기초</br>금액',width:'90',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'입고</br>수량',width:'65',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'입고</br>금액',width:'90',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'65',inputType:'text',id:'column76',value:'출고</br>수량',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column73',value:'출고</br>금액',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'65',inputType:'text',id:'column70',value:'기말</br>수량',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column67',value:'기말</br>금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column58',value:'입고</br>전표',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column55',value:'출고</br>전표',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column49',value:'수수료</br>전표',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'65',inputType:'text',id:'column52',value:'기초</br>단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'65',inputType:'text',id:'column82',value:'입고</br>단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'65',inputType:'text',id:'column79',value:'출고</br>단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'65',inputType:'text',id:'column85',value:'기말</br>단가',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'20',inputType:'checkbox',id:'slipYn',displayMode:'label',textAlign:'center',trueValue:'1',falseValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClsCd',inputType:'select',width:'45'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilStatNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilStatClsCd',inputType:'select',width:'60'}},{T:1,N:'w2:column',A:{width:'45',inputType:'text',id:'createYn',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tbeginStockQty',inputType:'text',width:'65',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tbeginStockAmt',inputType:'text',width:'90',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inQty',inputType:'text',width:'65',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inAmt',inputType:'text',width:'90',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'65',inputType:'text',id:'outQty',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'outAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'65',inputType:'text',id:'tendStockQty',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'tendStockAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'link',id:'inSlipNo',displayMode:'label',textAlign:'center',class:'linktype',max:'0'}},{T:1,N:'w2:column',A:{width:'90',inputType:'link',id:'outSlipNo',displayMode:'label',textAlign:'center',class:'linktype'}},{T:1,N:'w2:column',A:{width:'90',inputType:'link',id:'cmisSlipNo',displayMode:'label',textAlign:'center',class:'linktype'}},{T:1,N:'w2:column',A:{width:'65',inputType:'text',id:'beginUpr',displayMode:'value',textAlign:'right',displayFormat:'#,###[floor]',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'65',inputType:'text',id:'inUpr',displayMode:'value',displayFormat:'#,###[floor]',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'65',inputType:'text',id:'outUpr',displayMode:'label',textAlign:'right',displayFormat:'#,###[floor]',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'65',inputType:'text',id:'tendUpr',displayMode:'label',displayFormat:'#,###[floor]',textAlign:'right',dataType:'number',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'330',inputType:'text',id:'column63',displayMode:'label',textAlign:'center',colSpan:'4',value:'총합'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column66',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',id:'column43',displayMode:'label',displayFormat:'#,###',textAlign:'right',expression:'sum(\'tbeginStockQty\')'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column42',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'tbeginStockAmt\')'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',id:'column41',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'inQty\')'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column40',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'inAmt\')'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',id:'column78',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'outQty\')'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column75',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'outAmt\')'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',id:'column72',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'tendStockQty\')'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column69',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'tendStockAmt\')'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column60',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column57',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column51',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column54',displayMode:'label',textAlign:'right',expression:'sum(\'beginUpr\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column84',displayMode:'label',textAlign:'right',expression:'sum(\'inUpr\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column81',displayMode:'label',textAlign:'right',expression:'sum(\'outUpr\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column87',displayMode:'label',expression:'sum(\'tendUpr\')',textAlign:'right',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print',style:'',type:'button','ev:onclick':'scwin.btn_print_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유류재고 확인서'}]}]},{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',value:'1',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'유류재고 확정여부 ',class:''}},{T:1,N:'xf:input',A:{style:'width: 50px;',id:'ed_closeYn',class:'tac',readOnly:'true'}}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Confirm_C',style:'',type:'button','ev:onclick':'scwin.btn_Confirm_C_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유류재고 확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Confirm_D',style:'',type:'button','ev:onclick':'scwin.btn_Confirm_D_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유류재고 확정취소'}]}]}]}]}]}]}]}]}]})