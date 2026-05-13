/*amd /ui/ps/eq/fmsmgnt/fmsinterfacemgnt/eq_630_01_02b.xml 60834 4b5d0c445f2605c473fa0b676966386fda23b579abf0e3680ac98e875f26d537 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fmsInterface',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_fmsInterface_onbeforerowpositionchange','ev:onrowpositionchange':'scwin.ds_fmsInterface_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipKndCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoSlipYn',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modPsblYn',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrlSlipYn',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reversePsblYn',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reverseAutoSlipYn',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecStmtTrgtYn',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideClsCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndMm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndSeq',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardSndSeq',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnMm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClsCd',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commClsCd',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'name25',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vat',name:'name26',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'aaa',name:'name27',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'instmtMmCnt',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDd',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxClsCd',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'name47',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'qty',name:'name55',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'upr',name:'name56',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'constSite',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptClnt',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pcostAmt',name:'name59',dataType:'text',defaultValue:'0'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'osideClsCd',name:'name11',dataType:'text',defaultValue:'F'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ps.eq.fmsmgnt.fmsinterfacemgnt.RetrieveFmsInterfaceSelpchCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_fmsInterface","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_fmsInterface","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_slipKnd',action:'/ps.eq.fmsmgnt.fmsinterfacemgnt.SaveFmsInterfaceSelpchCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_fmsInterface","key":"IN_DS1" }]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.login = "";
scwin.g_sCurrDate = "";
scwin.savebool = false;

//tobe추가
scwin.grdvalid = false;
scwin.onpageload = function () {
  scwin.login = $c.data.getMemInfo($p);
  scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  const codeOptions = [{
    grpCd: "FI019",
    compID: "lc_selpchClsCdCond, gr_fmsInterface:selpchClsCd, lc_selpchClsCd"
  }, {
    grpCd: "TL106",
    compID: "lc_commClsCdCond, gr_fmsInterface:commClsCd,lc_commClsCd"
  }, {
    grpCd: "FM103",
    compID: "lc_instmtMmCnt"
  }, {
    grpCd: "ZZ522",
    compID: "lc_payDd"
  }, {
    grpCd: "TL406",
    compID: "lc_constSite"
  }, {
    grpCd: "TL405",
    compID: "lc_rcptClnt"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  if (scwin.login.acctDeptCd == "00806") {
    $c.data.setPopupTitle($p, "부품공기구매출입관리");
  } else {
    $c.data.setPopupTitle($p, "FMS정비직판매출입관리");
  }
  btn_Esc.setDisabled(true);
  $c.gus.cfDisableBtn($p, [btn_Sav]);
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableObjects($p, [img_popup1, img_popup2]);
  ed_stDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ed_endDt.setValue(scwin.g_sCurrDate);
  ed_stDt.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  //ds_search.UseChangeInfo = false
  //lc_acctCd.ResetData();

  if (lc_acctCd.getItemCount() != 9) {
    lc_acctCd.addItem("4204745", "원)AP", 7, true);
  }

  //조회조건
  dma_search.set("stDt", ed_stDt.getValue());
  dma_search.set("endDt", ed_endDt.getValue());
  dma_search.set("clntNo", ed_clntNoCond.getValue());
  dma_search.set("selpchClsCd", lc_selpchClsCdCond.getValue());
  dma_search.set("commClsCd", lc_commClsCdCond.getValue());
  var e = await $c.sbm.execute($p, sbm_search);
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    //조회성공시
    //for=ds_fmsInterface event=OnLoadCompleted(rowCnt)
    var rowCnt = ds_fmsInterface.getRowCount();
    totalRows.setValue(rowCnt);
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableBtn($p, [btn_Sav]);
    if (rowCnt == 0) {
      //DataSet Header를 설정하기 위해서 조회한 경우 
      if ((await $c.gus.cfCheckCreateFlag($p)) == true) {
        $c.gus.cfTurnCreateFlag($p, false);
      } else {
        await $c.win.alert($p, "조회된 데이터가 없습니다.");
      }
    } else {
      gr_fmsInterface.setFocusedCell(0, 0); //초기포커스
    }
  }
  ;
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_Sav]);

  //document.all.ModeState.value = "false";
  scwin.grdvalid = true; //gr_fmsInterface.Enable = "true";
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function (e) {
  //document.all.ModeState.value = "insOnLoad";

  ds_fmsInterface.insertRow(0);
  var curRow = gr_fmsInterface.getFocusedRowIndex() == -1 ? ds_fmsInterface.getRowCount() - 1 : gr_fmsInterface.getFocusedRowIndex();
  var curCol = gr_fmsInterface.getFocusedColumnIndex() || 0;
  gr_fmsInterface.setFocusedCell(curRow, curCol);
  $c.gus.cfEnableKeyData($p);
  btn_Esc.setDisabled(false);
  $c.gus.cfDisableBtn($p, [btn_Init, btn_Add, btn_Del]);
  $c.gus.cfEnableObjects($p, [img_popup1, img_popup2]);
  ds_fmsInterface.setCellData(gr_fmsInterface.getFocusedRowIndex(), "osideClsCd", "F");
  gr_fmsInterface.setGridReadOnly(true);
  lc_acctCd.deleteItem(7); //4204745^원)AP
  lc_acctCd.setValue(""); //tobe추가
  ica_postDt.focus();
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = async function (e) {
  scwin.btn = "update";
  if (ds_fmsInterface.getRowCount() == 0) {
    await $c.win.alert($p, "데이타를 조회 하신 후 선택하세요.");
    return;
  }
  var slipNo = "";
  slipNo = ds_fmsInterface.getCellData(gr_fmsInterface.getFocusedRowIndex() || 0, "slipNo");
  if (slipNo != "") {
    await $c.win.alert($p, "이미 전표를 생성하였으므로 수정하실 수 없습니다.");
    return;
  }
  //document.all.ModeState.value = "upTrue";
  scwin.savebool = false;
  $c.gus.cfDisableKey($p);
  btn_Esc.setDisabled(false);
  $c.gus.cfDisableBtn($p, [btn_Init, btn_Add, btn_Del]);
  $c.gus.cfEnableObjects($p, [img_popup1, img_popup2]);
  scwin.grdvalid = true; //scwin.grdvalid = false; //gr_fmsInterface.Enable = "false";
  lc_acctCd.deleteItem(7); //4204745^원)AP
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function (e) {
  if (ds_fmsInterface.getRowCount() == 0) {
    await $c.win.alert($p, "데이타를 조회 하신 후 선택하세요.");
    return;
  }
  var focusRow = gr_fmsInterface.getFocusedRowIndex() || 0;
  var focusCol = gr_fmsInterface.getFocusedColumnIndex() || 0;

  //tobe형식으로 변경
  //ds_fmsInterface.DeleteRow(ds_fmsInterface.RowPosition);
  if (ds_fmsInterface.getRowStatus(focusRow) == "C") {
    //추가된 행
    ds_fmsInterface.removeRow(focusRow);
  } else {
    ds_fmsInterface.deleteRow(focusRow);
    gr_fmsInterface.setFocusedCell(focusRow, focusCol);
  }
  scwin.savebool = false;
  //document.all.ModeState.value = "delTrue";
  $c.gus.cfDisableKeyData($p);
  btn_Esc.setDisabled(false);
  $c.gus.cfDisableBtn($p, [btn_Init, btn_Add]);
  $c.gus.cfDisableObjects($p, img_popup1, img_popup2);
  scwin.grdvalid = false; //gr_fmsInterface.Enable = "false";
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  if (ds_fmsInterface.getModifiedIndex().length < 1) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if ((await scwin.f_Validation()) == false) {
    return;
  }

  // 1. 할부개월수/지급일 확인 : 둘 모두 입력 혹은 둘 모두 미입력
  if (lc_instmtMmCnt.getValue() != "" && lc_payDd.getValue() == "") {
    await $c.win.alert($p, "할부개월수가 있는 경우 지급일을 입력하세요");
    lc_payDd.focus();
    return;
  } else if (lc_instmtMmCnt.getValue() == "" && lc_payDd.getValue() != "") {
    await $c.win.alert($p, "지급일이 있는 경우 할부개월수를 입력하세요");
    lc_instmtMmCnt.focus();
    return;
  }

  // 2. 금액/부가세 확인
  var sumAmt = 0;
  var amt = 0;
  var vat = 0;
  var totAmt = 0;
  sumAmt = ed_sumAmt.getValue();
  amt = ed_amt.getValue();
  vat = ed_vat.getValue();
  totAmt = $c.num.parseFloat($p, amt) + $c.num.parseFloat($p, vat);
  if (sumAmt != totAmt) {
    await $c.win.alert($p, "금액 및 부가세를 확인하세요.");
    ed_sumAmt.focus();
    return;
  }

  // 2.1 증빙이 기타인 경우 부가세 없음
  var evidClsCd = "";
  evidClsCd = lc_evidClsCd.getValue();
  if (evidClsCd == "99" && vat > 0) {
    await $c.win.alert($p, "증빙이 기타입니다. 부가세를 확인하세요.");
    ed_vat.focus();
    return;
  }

  // 3. 매출/매입에 따른 전표종류/계정코드 확인
  /*  매출입 : lc_selpchClsCd(1 매출, 2 매입)
  //  전표종류 : lc_slipKndCd(H24 FMS정비매출전표, H25 FMS정비매입전표)
  //  계정코드 : lc_acctCd("4101212 타이어매출, 4101214 부품매출, 4101216 기타매출, 4101220 상품매출-AP, 4204742 원)타이어, 4204743 원)부품, 4204744 원)기타), 4204745 원)상품매출원가-AP, 1120260 상품-AP
  //  매출(1) => 매출전표(H24), 매출계정(4101212 타이어매출, 4101214 부품매출, 4101216 기타매출, 4101220 상품매출-AP), 1120260 상품-AP 만 가능
  //  매입(2) => 매입전표(H25), 원가계정(4204742 원)타이어, 4204743 원)부품, 4204744 원)기타, 4204745 원)상품매출원가-AP ), 1120260 상품-AP 만 가능	*/
  var selpchClsCd = "";
  var slipKndCd = "";
  var acctCd = "";
  selpchClsCd = lc_selpchClsCd.getValue();
  slipKndCd = lc_slipKndCd.getValue();
  acctCd = lc_acctCd.getValue();
  if (selpchClsCd == "1") {
    if (slipKndCd == "H25") {
      await $c.win.alert($p, "매출입구분과 전표종류가 올바르지 않습니다.");
      lc_slipKndCd.focus();
      return;
    } else if (acctCd == "4204742" || acctCd == "4204743" || acctCd == "4204744" || acctCd == "4204745" || acctCd == "1120260") {
      await $c.win.alert($p, "매출인 경우 매출계정만 입력하실 수 있습니다..");
      lc_acctCd.focus();
      return;
    }
  }
  if (selpchClsCd == "2") {
    if (slipKndCd == "H24") {
      await $c.win.alert($p, "매출입구분과 전표종류가 올바르지 않습니다.");
      lc_slipKndCd.focus();
      return;
    } else if (acctCd == "4101212" || acctCd == "4101214" || acctCd == "4101216" || acctCd == "4101220") {
      await $c.win.alert($p, "매입인 경우 원가계정만 입력하실 수 있습니다.");
      lc_acctCd.focus();
      return;
    }
  }
  var validArry = [{
    id: "postDt",
    name: "매출입일자",
    mandatory: true
  }, {
    id: "clntNo",
    name: "거래처",
    mandatory: true
  }, {
    id: "selpchClsCd",
    name: "매출입구분",
    mandatory: true
  }, {
    id: "commClsCd",
    name: "상품구분",
    mandatory: true
  }, {
    id: "slipKndCd",
    name: "전표종류",
    mandatory: true
  }, {
    id: "evidClsCd",
    name: "증빙구분",
    mandatory: true
  }, {
    id: "acctDeptCd",
    name: "귀속부서",
    mandatory: true
  }, {
    id: "amt",
    name: "금액",
    mandatory: true,
    minNumber: 1
  }];
  if (scwin.grdvalid) {
    if (await $c.gus.cfValidateGrid($p, gr_fmsInterface, null, null, validArry, "정비직판매출입")) {
      //if (await $c.gus.cfValidate([gr_fmsInterface])) {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        scwin.savebool = true;
        var e = await $c.sbm.execute($p, sbm_slipKnd);
        if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
          //for=tr_slipKnd event=OnSuccess()
          await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
          $c.gus.cfDisableKeyData($p);
          $c.gus.cfDisableBtn($p, [btn_Sav]);
          //document.all.ModeState.value = "false";

          //tobe추가.
          if (ds_fmsInterface.getRowIndexByStatus("D")) {
            ds_fmsInterface.removeRows(ds_fmsInterface.getRowIndexByStatus("D"));
          } else {
            ds_fmsInterface.modifyAllStatus("R");
          }
        }
        btn_Esc.setDisabled(true);
        scwin.grdvalid = true; //gr_fmsInterface.Enable = "true";	
      }
    }
  } else {
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      scwin.savebool = true;
      var e = await $c.sbm.execute($p, sbm_slipKnd);
      if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
        //for=tr_slipKnd event=OnSuccess()
        await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
        $c.gus.cfDisableKeyData($p);
        $c.gus.cfDisableBtn($p, [btn_Sav]);
        //document.all.ModeState.value = "false";

        //tobe추가.
        if (ds_fmsInterface.getRowIndexByStatus("D")) {
          ds_fmsInterface.removeRows(ds_fmsInterface.getRowIndexByStatus("D"));
        } else {
          ds_fmsInterface.modifyAllStatus("R");
        }
      }
      btn_Esc.setDisabled(true);
      scwin.grdvalid = true; //gr_fmsInterface.Enable = "true";	
    }
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function (e) {
  //document.all.ModeState.value = "false";
  //document.all.upPartCd.value = "";
  $c.gus.cfDisableKeyData($p);
  btn_Esc.setDisabled(true);
  $c.gus.cfDisableBtn($p, [btn_Sav]);
  $c.gus.cfDisableObjects($p, img_popup1, img_popup2);
  //lc_acctCd.ResetData();
  lc_acctCd.setSelectedIndex(-1);

  //tobe변경 : tobe형식대로 변경
  //ds_fmsInterface.Undo(ds_fmsInterface.RowPosition);
  if (ds_fmsInterface.getRowStatus(gr_fmsInterface.getFocusedRowIndex() || 0) == "C") {
    ds_fmsInterface.removeRow(gr_fmsInterface.getFocusedRowIndex() || 0);
  } else {
    ds_fmsInterface.undoRow(gr_fmsInterface.getFocusedRowIndex() || 0);
  }
  scwin.grdvalid = true; //gr_fmsInterface.Enable = "true";
};

//-------------------------------------------------------------------------
// 밸리데이션체크
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  if (!(await $c.gus.cfValidate($p, [ica_postDt, ed_clntNo]))) {
    return false;
  } else {
    return true;
  }
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      //거래처코드
      udc_clntNoCond.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_clntNoCond, ed_clntNmCond);
      }, pCode, pName, 'T', null, null, null, null, null, null, null, null, null);
      break;
    case 2:
      //매출거래처
      udc_clnt.cfCommonPopUp(function (rtnList) {
        if (rtnList != null && rtnList[0] != "N/A") {
          ds_fmsInterface.setCellData(gr_fmsInterface.getFocusedRowIndex() || 0, 'clntNo', rtnList[0]);
          ds_fmsInterface.setCellData(gr_fmsInterface.getFocusedRowIndex() || 0, 'clntNm', rtnList[1]);
        }
      }, pCode, "", 'T', null, null, null, null, null, null, null, null, null);
      break;
    case 3:
      //상품귀속코드
      udc_acctDeptCd.cfCommonPopUp(function (rtnList) {
        if (rtnList != null && rtnList[0] != "N/A") {
          ds_fmsInterface.setCellData(gr_fmsInterface.getFocusedRowIndex() || 0, 'acctDeptCd', rtnList[0]);
          ds_fmsInterface.setCellData(gr_fmsInterface.getFocusedRowIndex() || 0, 'acctDeptNm', rtnList[1]);
        }
      }, pCode, "", 'T', null, null, null, null, null, null, null, null, null);
      break;
  }
};
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 getValue() Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  var options = {
    fileName: "FMS정비직판매출입목록.xlsx",
    sheetName: "FMS정비직판매출입목록",
    startRowIndex: 0,
    startColumnIndex: 0,
    type: 1,
    columnMove: true //그리드 컬럼이동시 이동된 상태로 다운로드 유무 ( "true"인경우 컬럼이동 순서대로 출력 )
  };
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    //cfGridToExcel(objGridName, "정비직판매출입","정비직판매출입",2+8+16);
    $c.data.downloadGridViewExcel($p, gr_fmsInterface, options);
  }
};

//클릭시
//for=ds_fmsInterface event=OnRowPosChanged(row)
scwin.ds_fmsInterface_onrowpositionchange = function (info) {
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_Sav]);
};

//그리드 로우를 변경하려고 할 경우 - 필수항목 체크-
//for=ds_fmsInterface event=CanRowPosChange(row)
scwin.ds_fmsInterface_onbeforerowpositionchange = async function (info) {
  var row = info.newRowIndex;
  //if (ds_fmsInterface.getRowStatus(row) == "C" || ds_fmsInterface.getRowStatus(row) == "U") {
  if (ds_fmsInterface.getRowStatus(row) == "U") {
    if (!(await scwin.f_Validation())) {
      return false;
    } else {
      return true;
    }
  }
};

//for=gr_oilUnitPrice event=OnExit(row,colid,olddata)
scwin.gr_fmsInterface_onafteredit = function (rowIndex, columnIndex, value) {
  var colid = gr_fmsInterface.getColumnID(columnIndex);
  if (colid == 'clntNo') {
    // 거래처코드
    udc_grclnt.cfCommonPopUp(function (rtnList) {
      if (rtnList != null && rtnList[0] != "N/A") {
        ds_fmsInterface.setCellData(rowIndex, 'clntNo', rtnList[0]);
        ds_fmsInterface.setCellData(rowIndex, 'clntNm', rtnList[1]);
      }
    }, ds_fmsInterface.getCellData(rowIndex, 'clntNo'), "", 'T', null, null, null, null, null, null, null, null, null);
  } else if (colid == 'clntNm') {
    // 거래처명
    udc_grclnt.cfCommonPopUp(function (rtnList) {
      if (rtnList != null && rtnList[0] != "N/A") {
        ds_fmsInterface.setCellData(rowIndex, 'clntNo', rtnList[0]);
        ds_fmsInterface.setCellData(rowIndex, 'clntNm', rtnList[1]);
      }
    }, "", ds_fmsInterface.getCellData(rowIndex, 'clntNm'), 'T', null, null, null, null, null, null, null, null, null);
  } else if (colid == 'acctDeptCd') {
    //상품귀속부서(재고귀속부서)코드
    udc_grAcctDept.cfCommonPopUp(function (rtnList) {
      if (rtnList != null && rtnList[0] != "N/A") {
        ds_fmsInterface.setCellData(rowIndex, 'acctDeptCd', rtnList[0]);
        ds_fmsInterface.setCellData(rowIndex, 'acctDeptNm', rtnList[1]);
      }
    }, ds_fmsInterface.getCellData(rowIndex, 'acctDeptCd'), "", 'T', null, null, null, null, null, null, null, null, null);
  } else if (colid == 'acctDeptCm') {
    //상품귀속부서(재고귀속부서)코드
    udc_grAcctDept.cfCommonPopUp(function (rtnList) {
      if (rtnList != null && rtnList[0] != "N/A") {
        ds_fmsInterface.setCellData(rowIndex, 'acctDeptCd', rtnList[0]);
        ds_fmsInterface.setCellData(rowIndex, 'acctDeptNm', rtnList[1]);
      }
    }, "", ds_fmsInterface.getCellData(rowIndex, 'acctDeptNm'), 'T', null, null, null, null, null, null, null, null, null);
  }
  return true;
};
scwin.ed_sumAmt_onblur = function (e) {
  var evidClsCd = "";
  evidClsCd = lc_evidClsCd.getValue();
  var sumAmt = 0;
  var amt = 0;
  var vat = 0;
  sumAmt = ed_sumAmt.getValue();
  if (evidClsCd == "10") {
    // 세금계산서 : VAT 계산
    amt = Math.round(sumAmt / 1.1);
    ed_amt.setValue(amt);
    ed_vat.setValue(sumAmt - amt);
  } else if (evidClsCd == "99") {
    // 기타 : VAT 없음
    ed_amt.setValue(sumAmt);
    ed_vat.setValue(0);
  }
};
scwin.ed_amt_onblur = function (e) {
  var evidClsCd = "";
  evidClsCd = lc_evidClsCd.getValue();
  var sumAmt = 0;
  var amt = 0;
  var vat = 0;
  sumAmt = ed_sumAmt.getValue();
  if (evidClsCd == "10") {
    // 세금계산서 : VAT 계산
    amt = ed_amt.getValue();
    vat = sumAmt - amt;
    ed_vat.setValue(vat);
  } else if (evidClsCd == "99") {
    // 기타 : VAT 없음
    ed_amt.setValue(sumAmt);
    ed_vat.setValue(0);
  }
};

//for=lc_evidClsCd event=OnSelChange()
scwin.lc_evidClsCd_onviewchange = function (info) {
  var evidClsCd = "";
  evidClsCd = lc_evidClsCd.getValue();
  var sumAmt = 0;
  var amt = 0;
  var vat = 0;
  sumAmt = ed_sumAmt.getValue();
  if (evidClsCd == "10") {
    // 세금계산서 : VAT 계산
    amt = Math.round(sumAmt / 1.1);
    ed_amt.setValue(amt);
    ed_vat.setValue(sumAmt - amt);
  } else if (evidClsCd == "99") {
    // 기타 : VAT 없음
    ed_amt.setValue(sumAmt);
    ed_vat.setValue(0);
  }
};
scwin.udc_clntNoCond_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNoCond.getValue(), ed_clntNmCond.getValue(), 'F', 'F');
};
scwin.udc_clnt_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
};
scwin.udc_clnt_onblurNameEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
};
scwin.udc_clntNoCond_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNmCond, ed_clntNoCond, 1, false);
};
scwin.udc_clntNoCond_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNoCond.getValue(), ed_clntNmCond.getValue(), 'F', 'F');
};
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar1',refEdDt:'',edFromId:'ed_stDt',edToId:'ed_endDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntEmpNoList',codeId:'ed_clntNoCond',validTitle:'',nameId:'ed_clntNmCond',style:'',id:'udc_clntNoCond',UpperFlagCode:'1','ev:onviewchangeNameEvent':'scwin.udc_clntNoCond_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_clntNoCond_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNoCond_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_selpchClsCdCond',style:'width: 100px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상품구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_commClsCdCond',style:'width: 100px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' FMS정비직판매출입 목록 ',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridUpYn:'N',gridID:'gr_fmsInterface',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_fmsInterface',focusMode:'row',id:'gr_fmsInterface',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true','ev:onafteredit':'scwin.gr_fmsInterface_onafteredit',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',value:'외부구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'전송월',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'전송순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column49',value:'카드전송순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'매출입</br>년월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'매출입</br>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'거래처',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'매출입</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'전표</br>종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column28',value:'계정</br>코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'증빙</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'상품</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'귀속부서',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'귀속</br>부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'공급가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'VAT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'할부</br>월수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'지급일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'설명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'영세구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column88',value:'전표일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'공급일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'전표적요',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'osideClsCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sndMm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sndSeq',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'cardSndSeq',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'txnMm',value:'',displayMode:'label',displayFormat:'####/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'postDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'selpchClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'slipKndCd',value:'',displayMode:'label',textAlign:'left',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정비직판매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'H24'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정비직판매입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'H25'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'acctCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'타이어매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4101212'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부품매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4101214'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4101216'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'원)타이어'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4204742'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'원)부품'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4204743'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'원)기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4204744'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'AP매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4101220'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'원)AP'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4204745'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'상품-AP'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1120260'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'evidClsCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'세금계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'30'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'법인카드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'40'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'개인카드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'50'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'현금영수증'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'60'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영수증'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'70'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'99'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영세율세금계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'20'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'commClsCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'amt',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vat',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sumAmt',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0',textAlign:'right',defaultValue:'0',emptyValue:'0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'instmtMmCnt',value:'',displayMode:'label',dataType:'number',displayFormat:'##개월'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payDd',value:'',displayMode:'label',dataType:'number',displayFormat:'##일'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'zeroTaxClsCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'spplyDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column20',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column63',value:'',displayMode:'label',expression:'sum(\'amt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',expression:'sum(\'vat\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',expression:'sum(\'sumAmt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_content',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출입일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_postDt',style:'',objType:'key',mandatory:'true',validExp:'매출입일자:yes:date=YYYYMMDD',title:'매출입일자',ref:'data:ds_fmsInterface.postDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'',selectID:'retrieveClntEmpNoList',style:'',validTitle:'거래처',id:'udc_clnt',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_clnt_onclickEvent',refDataCollection:'ds_fmsInterface',code:'clntNo',name:'clntNm',btnId:'img_popup1','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clnt_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출입구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_selpchClsCd',style:'width: 150px;',submenuSize:'fixed',title:'매출입구분',objType:'data',mandatory:'true',emptyItem:'true',ref:'data:ds_fmsInterface.selpchClsCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상품구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_commClsCd',style:'width: 150px;',submenuSize:'fixed',title:'상품구분',objType:'data',mandatory:'true',emptyItem:'true',ref:'data:ds_fmsInterface.commClsCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_slipKndCd',style:'width: 150px;',submenuSize:'fixed',title:'전표종류',ref:'data:ds_fmsInterface.slipKndCd',objType:'data',mandatory:'true',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS정비매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H24'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS정비매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H25'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_acctCd',style:'width: 150px;',submenuSize:'fixed',title:'계정코드',objType:'data',ref:'data:ds_fmsInterface.acctCd',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'타이어매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101212'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부품매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101214'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101216'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'AP매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101220'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)타이어'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204742'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)부품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204743'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204744'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)AP'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204745'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상품-AP'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120260'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'증빙구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_evidClsCd',style:'width: 150px;',submenuSize:'fixed',title:'증빙구분',objType:'data',mandatory:'true',ref:'data:ds_fmsInterface.evidClsCd',emptyItem:'true','ev:onviewchange':'scwin.lc_evidClsCd_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세금계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'99'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영세율세금계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'20'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'귀속부서',mandatoryCode:'true',id:'udc_acctDeptCd',objTypeCode:'data',objTypeName:'data',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',refDataCollection:'ds_fmsInterface',name:'acctDeptNm',code:'acctDeptCd',btnId:'img_popup2','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할부개월수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_instmtMmCnt',style:'width: 150px;',submenuSize:'fixed',objType:'data',ref:'data:ds_fmsInterface.instmtMmCnt',emptyItem:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_payDd',style:'width: 150px;',submenuSize:'fixed',objType:'data',ref:'data:ds_fmsInterface.payDd',emptyItem:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'금액/원가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_sumAmt',class:'tar',objType:'data',dataType:'float',maxlength:'18.2',applyFormat:'all',displayFormat:'#,##0.##',ref:'data:ds_fmsInterface.sumAmt','ev:onblur':'scwin.ed_sumAmt_onblur'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'/',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_pcostAmt',style:'width: 150px;',displayFormat:'#,##0.##',objType:'data',ref:'data:ds_fmsInterface.pcostAmt',maxlength:'18.2',applyFormat:'all',dataType:'float'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공급가/부가세',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_amt',style:'width: 150px;',objType:'data',maxlength:'18.2',dataType:'float',displayFormat:'#,##0.##',applyFormat:'all',ref:'data:ds_fmsInterface.amt','ev:onblur':'scwin.ed_amt_onblur'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'/',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_vat',style:'width: 150px;',objType:'data',maxlength:'18.2',dataType:'float',displayFormat:'#,##0.##',applyFormat:'all',ref:'data:ds_fmsInterface.vat'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_rmk',style:'',objType:'data',ref:'data:ds_fmsInterface.rmk'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_slipDt',style:'width: 150px;',objType:'key',displayFormat:'####/##/##',readOnly:'true',ref:'data:ds_fmsInterface.slipDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공급일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_spplyDt',style:'width: 150px;',displayFormat:'####/##/##',objType:'key',readOnly:'true',ref:'data:ds_fmsInterface.spplyDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_slipNo',style:'width: 150px;',readOnly:'true',objType:'key',ref:'data:ds_fmsInterface.slipNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표 적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_summary',style:'',readOnly:'true',objType:'key',ref:'data:ds_fmsInterface.summary'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수량/단가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_qty',style:'width: 150px;',objType:'data',maxlength:'18.2',applyFormat:'all',dataType:'float',ref:'data:ds_fmsInterface.qty',displayFormat:'#,###.##'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'/',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_upr',style:'width: 150px;',objType:'data',maxlength:'18.2',applyFormat:'all',dataType:'float',ref:'data:ds_fmsInterface.upr',displayFormat:'#,###.##'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'현장명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_constSite',style:'width: 150px;',submenuSize:'fixed',objType:'data',ref:'data:ds_fmsInterface.constSite',emptyItem:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인도처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_rcptClnt',style:'width: 150px;',submenuSize:'fixed',objType:'data',ref:'data:ds_fmsInterface.rcptClnt',emptyItem:'true'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_Init',type:'button',class:'btn','ev:onclick':'scwin.f_Create',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Add',type:'button',class:'btn','ev:onclick':'scwin.f_Update',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Esc',style:'',type:'button',objType:'bCancel','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Sav',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Del',style:'',type:'button','ev:onclick':'scwin.f_Delete',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'display:none;'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'gr_clntNo',selectID:'retrieveClntEmpNoList',popupID:'',UpperFlagCode:'1',validTitle:'',nameId:'gr_clntNm',style:'',id:'udc_grclnt'}},{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'6',objTypeCode:'data',popupID:'',UpperFlagCode:'1',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',allowCharCode:'a-zA-Z0-9',codeId:'gr_acctDeptCd',selectID:'retrieveAcctDeptCdInfo',validTitle:'귀속부서',objTypeName:'data',nameId:'gr_acctDeptNm','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent',style:'',id:'udc_grAcctDept','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent'}}]}]}]}]}]}]})