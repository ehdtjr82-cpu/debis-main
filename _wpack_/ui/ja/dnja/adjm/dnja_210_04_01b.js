/*amd /ui/ja/dnja/adjm/dnja_210_04_01b.xml 41021 aa5392ceadc19736942fdba303fa7f00d75beef96daa73133a277d036a0bc07e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_slipList_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConKnd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'myModId',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'offsetNo',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvStsCd',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDocKndCd',name:'name13',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsNm',name:'확정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'원화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'합계금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'세금계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiCnt',name:'거래명세서건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtClsNm',name:'금액생성구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgPicNo',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'청구서유형명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetNo',name:'상대전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidRglClsCd',name:'증빙정상구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsNm',name:'부가세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'원화채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcrcAcctRecvNo',name:'외화채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipCloseYm',name:'회계마감월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxCloseYm',name:'세무마감월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cancelSpplyDt',name:'수정세금계산서 공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'slipKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'dcsnClsCd',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_slipList_retrieve',action:'/ja.dnja.adjm.RetrieveLogisticsDaeseongSlipListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_slipList_con","key":"IN_DS1"},{"id":"ds_slipList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_slipList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_slipList_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancelSlip_save',action:'/ja.dnja.adjm.CancelDaeseongSlipDecisionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_slipList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_cancelSlip_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sDate = $c.date.formatDateTime($p, new Date());
scwin.strCurDate = $c.date.getServerDateTime($p);
scwin.strPreDate = $c.date.getDateAddMonthDirection($p, scwin.strCurDate, 0, "F"); // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

// 세션정보
scwin.vCoCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd");
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //parent.tabFrame.f_FoldMenu(true);

  const codeOptions = [{
    grpCd: "FS500",
    compID: "acb_lc_dcsnClsCd"
  },
  // 확정구분
  {
    grpCd: "ZZ021",
    compID: "acb_lc_apprvStsCd",
    opt: {
      "range": "1,C"
    }
  },
  // 결재상태 - 1, "C"
  {
    grpCd: "ZZ022",
    compID: "acb_lc_apprvDocKndCd",
    opt: {
      "range": "1,01"
    }
  } // 결재요청구분 - 1 , "01"
  ];
  // $c.data.setCommonCode(codeOptions);
  $c.data.setCommonCode($p, codeOptions, scwin.commonCodeCallBack);
  btn_sort.hide();
};
scwin.commonCodeCallBack = function () {
  acb_lc_dcsnClsCd.addItem("전체", "", "", 0);
  acb_lc_dcsnClsCd.setSelectedIndex(0);
  acb_lc_apprvStsCd.addItem("전체", "", "", 0);
  acb_lc_apprvStsCd.setSelectedIndex(0);
  acb_lc_apprvDocKndCd.addItem("전체", "", "", 0);
  acb_lc_apprvDocKndCd.setSelectedIndex(0);
  ed_qryConDtFm.setValue(scwin.strPreDate);
  ed_qryConDtTo.setValue(scwin.strCurDate);
  acb_lc_dcsnClsCd.setValue("4");
  ed_bilgLodeptCd.setValue("8B9");
  txt_bilgLodeptNm.setValue("동원TLS");
  acb_lc_delYn.setValue("0");
  $c.gus.cfDisableObjects($p, [ed_bilgLodeptCd, txt_bilgLodeptNm]);
  $p.setTimeout(function () {}, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  udc_qryConDt.setInitDate(scwin.strPreDate, scwin.strCurDate);
};

//-------------------------------------------------------------------------
// 조회조건 Clear
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, [ed_bilgLodeptCd, txt_bilgLodeptNm, acb_lc_qryConKnd, ed_qryConDtFm, ed_qryConDtTo]);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = async function (e) {
  if (acb_lc_qryConKnd.getValue() == "전표번호") {
    let ret1 = await $c.gus.cfValidate($p, [ed_slipNo]);
    if (!ret1) {
      return;
    }
  } else {
    let ret2 = await $c.gus.cfValidate($p, [ed_bilgLodeptCd, ed_qryConDtFm, ed_qryConDtTo]);
    if (!ret2) {
      return;
    }
  }
  dma_slipList_con.set("bilgLodeptCd", ed_bilgLodeptCd.getValue());
  dma_slipList_con.set("bilgClntNo", ed_bilgClntNo.getValue());
  dma_slipList_con.set("qryConKnd", acb_lc_qryConKnd.getValue());
  dma_slipList_con.set("qryConDtFm", ed_qryConDtFm.getValue());
  dma_slipList_con.set("qryConDtTo", ed_qryConDtTo.getValue());
  dma_slipList_con.set("dcsnClsCd", acb_lc_dcsnClsCd.getValue());
  dma_slipList_con.set("slipKndCd", acb_lc_slipKndCd.getValue());
  dma_slipList_con.set("myModId", ed_modId.getValue());
  dma_slipList_con.set("delYn", acb_lc_delYn.getValue());
  dma_slipList_con.set("slipNo", ed_slipNo.getValue());
  dma_slipList_con.set("offsetNo", acb_lc_offsetNo.getValue());
  dma_slipList_con.set("apprvStsCd", acb_lc_apprvStsCd.getValue());
  dma_slipList_con.set("apprvDocKndCd", acb_lc_apprvDocKndCd.getValue());
  $c.sbm.execute($p, sbm_slipList_retrieve);
};
scwin.sbm_slipList_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    totalRows.setValue(ds_slipList.getRowCount());
    if (ds_slipList.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      ed_bilgLodeptCd.focus();
    } else {
      gr_slipList.setFocusedCell(0, 0);
    }
  }
};

//-------------------------------------------------------------------------
// 회계처리취소
//-------------------------------------------------------------------------
scwin.btn_cancle_onclick = async function (e) {
  var k = 0;
  for (var i = 0; i < ds_slipList.getRowCount(); i++) {
    if (ds_slipList.getCellData(i, "choice") == "T") {
      if (ds_slipList.getCellData(i, "slipKndCd") != 'K07' && ds_slipList.getCellData(i, "slipKndCd") != 'K08' && ds_slipList.getCellData(i, "slipKndCd") != 'K05') {
        $c.gus.cfAlertMsg($p, "전표종류가 매출,매입,대납금전표인 것만 취소할 수 있습니다.");
        ds_slipList.setRowPosition(i);
        gr_slipList.setFocusedCell(i, "choice");
        return;
      }
      if (ds_slipList.getCellData(i, "dcsnClsCd") != '4') {
        $c.gus.cfAlertMsg($p, "확정구분이 전표확정인 것만 취소할 수 있습니다.");
        ds_slipList.setRowPosition(i);
        gr_slipList.setFocusedCell(i, "choice");
        return;
      }
      if (ds_slipList.getCellData(i, "postDt").substring(0, 6) <= ica_ed_slipCloseYm.getValue()) {
        let confirm = await $c.win.confirm($p, "마감완료된 전표 이므로  역전표 생성 됩니다. 마감기간일 경우 마감이 완전히 끝났는지 확인하시고, 작업하십시요!");
        if (!confirm) {
          ds_slipList.setRowPosition(i);
          gr_slipList.setFocusedCell(i, "choice");
          return;
        }
      }
      if (!scwin.f_checkTaxCancelSpplyDt(ds_slipList.getCellData(i, "spplyDt"))) return;
      ds_slipList.setCellData(i, "cancelSpplyDt", ica_ed_cancelSpplyDt.getValue());
      k++;
    }
  }
  if (k < 1) {
    await $c.gus.cfAlertMsg($p, "취소하려는 전표가 선택되지 않았습니다.");
    return;
  }

  //ds_slipList.UseChangeInfo = "false"; //Server로 변경되지 않은 Data를 보내는 기능 여부 = false(변경된 데이터만 보내겟다)?
  $c.sbm.execute($p, sbm_cancelSlip_save);
};
scwin.sbm_cancelSlip_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (await $c.gus.cfAlertMsg($p, MSG_CM_INF_001)) {
      // scwin.btn_retrieve_onclick();
    }
  }
};

//-------------------------------------------------------------------------
// 세금계산서 취소 때 세무마감여부 CHECK
//-------------------------------------------------------------------------
scwin.f_checkTaxCancelSpplyDt = async function (spplyDt) {
  var taxCloseYm = ica_ed_taxCloseYm.getValue();
  var spplyYm = spplyDt.substring(0, 6);
  if (taxCloseYm >= spplyYm) {
    let confirm = await $c.win.confirm($p, "세무마감된 계산서를 취소할 경우에는 반드시 거래처에 수정세금계산서를 발행해야 합니다.(거래처와 합의 요함)\n\n세금계산서 및 전표를 취소하시겠습니까?");
    if (!confirm) return;
    if ($c.gus.cfIsNull($p, ica_ed_cancelSpplyDt.getValue())) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["[수정세금계산서 공급일자 ]"]); //@은(는) 필수 입력 항목입니다
      ica_ed_cancelSpplyDt.focus();
      return false;
    }
    let ret1 = await $c.gus.cfValidate($p, [ed_cancelSpplyDt]);
    if (!ret1) {
      ica_ed_cancelSpplyDt.focus();
      return;
    }
  }
  return true;
};
scwin.acb_lc_qryConKnd_onchange = function (info) {
  if (acb_lc_qryConKnd.getValue() == "전표번호") {
    udc_qryConDt.show('none');
    ed_slipNo.show('block');
  } else {
    udc_qryConDt.show('block');
    ed_slipNo.show('none');
  }
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
// 청구부서
scwin.btn_bilgLodeptCd_onblurCodeEvent = function (e) {
  // scwin.f_openCommonPopUp(1, ed_bilgLodeptCd.getValue(), txt_bilgLodeptNm.getValue(), 'T', 'T');
  scwin.f_CheckPopUp('CODE', 1, ed_bilgLodeptCd, txt_bilgLodeptNm, 'T', 'T');
};
scwin.udc_bilgLodeptCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp('NAME', 1, ed_bilgLodeptCd, txt_bilgLodeptNm, 'T', 'T');
};
scwin.btn_bilgLodeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgLodeptCd.getValue(), txt_bilgLodeptNm.getValue(), 'F', 'F');
};

// 거래처
scwin.udc_bilgClntNo_onblurCodeEvent = function (e) {
  // scwin.f_openCommonPopUp(2, ed_bilgClntNo.getValue(), txt_bilgClntNm.getValue(), 'T', 'T');
  scwin.f_CheckPopUp('CODE', 2, ed_bilgClntNo, txt_bilgClntNm, 'T', 'T');
};
scwin.udc_bilgClntNo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp('NAME', 2, ed_bilgClntNo, txt_bilgClntNm, 'T', 'T');
};
scwin.udc_bilgClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_bilgClntNo.getValue(), txt_bilgClntNm.getValue(), 'F', 'F');
};

// 청구담당자
scwin.udc_modId_onblurCodeEvent = function (e) {
  // scwin.f_openCommonPopUp(3, ed_modId.getValue(), txt_empNm.getValue(), 'T', 'T');
  scwin.f_CheckPopUp('CODE', 3, ed_modId, txt_empNm, 'T', 'T');
};
scwin.udc_modId_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp('NAME', 3, ed_modId, txt_empNm, 'T', 'T');
};
scwin.udc_modId_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_modId.getValue(), txt_empNm.getValue(), 'F', 'F');
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (type, disGubun, codeObj, nameObj, pClose, pAllSearch) {
  var codeVal = codeObj ? codeObj.getValue() : '';
  var nameVal = nameObj ? nameObj.getValue() : '';
  if (codeObj) codeObj.setValue("");
  if (nameVal) nameObj.setValue("");
  if (type == 'CODE') {
    if (codeVal != '') scwin.f_openCommonPopUp(disGubun, codeVal, '', pClose, pAllSearch);
  } else if (type == 'NAME') {
    if (nameVal != '') scwin.f_openCommonPopUp(disGubun, '', nameVal, pClose, pAllSearch);
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  var param = "," + scwin.vCoCd;
  switch (disGubun) {
    case 1:
      // 청구부서코드팝업
      udc_bilgLodeptCd.setSelectId('retrieveOpDeptCdInfo');
      udc_bilgLodeptCd.cfCommonPopUp(scwin.udc_bilgLodeptCd_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      // 거래처코드팝업
      param = ",,," + scwin.vCoCd;
      udc_bilgClntNo.setSelectId('retrieveClntList');
      udc_bilgClntNo.cfCommonPopUp(scwin.udc_bilgClntNo_callBackFunc, pCode, pName, 'T', null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    case 3:
      // 청구담당자코드 팝업
      udc_modId.setSelectId('retrieveEmpInfo');
      udc_modId.cfCommonPopUp(scwin.udc_modId_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};
scwin.udc_bilgLodeptCd_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    ed_bilgLodeptCd.setValue(rtnList[0]); //코드
    txt_bilgLodeptNm.setValue(rtnList[1]); //명
  }
};
scwin.udc_bilgClntNo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    ed_bilgClntNo.setValue(rtnList[0]); //코드
    txt_bilgClntNm.setValue(rtnList[1]); //명
  }
};
scwin.udc_modId_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    ed_modId.setValue(rtnList[0]); //코드
    txt_empNm.setValue(rtnList[1]); //명
  }
};
scwin.gr_slipList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo" && ds_slipList.getCellData(rowIndex, "slipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_slipList.getCellData(rowIndex, "slipNo"));
  }
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    const options = {
      fileName: "전표확정 조회 및 취소.xlsx",
      sheetName: "전표확정 조회 및 취소",
      startRowIndex: 0,
      startColumnIndex: 0,
      type: "1",
      useDataFormat: true
    };
    await $c.data.downloadGridViewExcel($p, gr_slipList, options);
  }
};
scwin.acb_lc_dcsnClsCd_onchange = function (info) {
  // console.log("scwin.acb_lc_dcsnClsCd_onchange");
};
scwin.acb_lc_dcsnClsCd_onbeforeselect = function (selectedIndex, index) {
  // console.log("====>scwin.acb_lc_dcsnClsCd_onbeforeselect:"+selectedIndex);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_bilgLodeptCd',nameId:'txt_bilgLodeptNm',mandatoryCode:'true',UpperFlagCode:'1',refDataCollection:'dma_slipList_con',code:'bilgLodeptCd','ev:onblurCodeEvent':'scwin.btn_bilgLodeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.btn_bilgLodeptCd_onclickEvent',btnId:'btn_bilgLodeptCd',id:'udc_bilgLodeptCd','ev:onblurNameEvent':'scwin.udc_bilgLodeptCd_onblurNameEvent',validTitle:'',validExpCode:'청구부서:yes'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'acb_lc_qryConKnd',search:'start',style:'width: 150px;',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'','ev:onchange':'scwin.acb_lc_qryConKnd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전표일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'전표일자'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회계처리일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'회계처리일자'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전표번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'전표번호'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_qryConDt',refDataMap:'dma_slipList_con',refEdDt:'qryConDtTo',refStDt:'qryConDtFm',style:'',edFromId:'ed_qryConDtFm',edToId:'ed_qryConDtTo'}},{T:1,N:'xf:input',A:{class:'',id:'ed_slipNo',placeholder:'',style:'width:150px; display:none',mandatory:'true',UpperFlag:'1',ref:'data:dma_slipList_con.slipNo',title:'전표번호'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_dcsnClsCd',search:'start',style:'width:150px;',submenuSize:'fixed',chooseOption:'',ref:'','ev:onchange':'scwin.acb_lc_dcsnClsCd_onchange','ev:onbeforeselect':'scwin.acb_lc_dcsnClsCd_onbeforeselect'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_slipKndCd',search:'start',style:'width:120px;',submenuSize:'fixed',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'대납'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'K05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'상계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'K06'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'K07'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'K08'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_bilgClntNo',nameId:'txt_bilgClntNm',btnId:'btn_bilgClntNo',id:'udc_bilgClntNo',UpperFlagCode:'1',refDataCollection:'dma_slipList_con',code:'bilgClntNo','ev:onblurCodeEvent':'scwin.udc_bilgClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent','ev:onblurNameEvent':'scwin.udc_bilgClntNo_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구담당자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_modId',nameId:'txt_empNm',btnId:'btn_modId',id:'udc_modId',UpperFlagCode:'1',refDataCollection:'dma_slipList_con',code:'myModId','ev:onblurCodeEvent':'scwin.udc_modId_onblurCodeEvent','ev:onclickEvent':'scwin.udc_modId_onclickEvent','ev:onblurNameEvent':'scwin.udc_modId_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'삭제여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_delYn',search:'start',style:'width:150px;',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'9'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정상'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상계전표여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_offsetNo',search:'start',style:'width:120px;',submenuSize:'fixed',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'No'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결재상태',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_apprvStsCd',search:'start',style:'width:120px;',submenuSize:'fixed',allOption:'',ref:''},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결재요청구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_apprvDocKndCd',search:'start',style:'width:230px;',submenuSize:'fixed',ref:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn align',id:'btn_sort',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정렬'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridID:'gr_slipList',btnUser:'Y',gridUpYn:'N',gridDownUserAuth:'X',gridDownFn:'scwin.f_Excel',btnPlusYn:'Y',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_slipList',id:'gr_slipList',style:'',visibleRowNum:'12',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_slipList_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',colSpan:'',rowSpan:'2',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'전표<br/>종류',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'확정<br/>구분',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'결재<br/>상태',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'전표번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'회계처리<br/>일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'거래처<br/>코드',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'거래처명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'사업자번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'금액',width:'140',colSpan:'2',rowSpan:'',sortLabel:'false',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'부가세',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',value:'합계금액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column61',value:'적요',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'세금계산서<br/>번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'공급일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'전표일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'거래명세서<br/>건수',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'금액생성<br/>구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column43',value:'담당자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'거래명세서<br/>번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'청구서유형명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column34',value:'상대전표번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'증빙정상구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column82',value:'부가세<br/>구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column79',value:'원화채권번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column73',value:'외화채권번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'청구부서<br/>코드',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column103',value:'원화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column102',value:'외화',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',width:'50',valueType:'other',falseValue:'F',trueValue:'T'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndNm',inputType:'text',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnClsNm',inputType:'text',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvStsCd',inputType:'text',width:'70',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100',class:'underline col-type2',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'calendar',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'80',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,###',readOnly:'true',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyAmtFcrc',displayMode:'label',textAlign:'right',displayFormat:'#,###.#0',readOnly:'true',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',readOnly:'true',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',readOnly:'true',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'summary',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellVatNo',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'spplyDt',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'slipDt',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'certiCnt',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'amtClsNm',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'bilgPicNo',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'certiNo',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'fmlaPatternCd',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offsetNo',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'evidRglClsCd',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'taxnClsNm',value:'',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctRecvNo',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'fcrcAcctRecvNo',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgLodeptCd',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'spplyAmt\')',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column72',displayMode:'label',textAlign:'right',displayFormat:'#,###.#0',expression:'sum(\'spplyAmtFcrc\')',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column69',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'vatAmt\')',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column66',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'totAmt\')',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회계마감월',ref:'',style:'',userData2:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_ed_slipCloseYm',pickerType:'dynamic',style:'',ref:'data:ds_slipList.slipCloseYm'}}]},{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세무마감월',ref:'',style:'',userData2:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_ed_taxCloseYm',pickerType:'dynamic',style:'',ref:'data:ds_slipList.taxCloseYm'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수정세금계산서 공급일자',ref:'',style:'',userData2:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_ed_cancelSpplyDt',pickerType:'dynamic',style:'',ref:'data:ds_slipList.cancelSpplyDt'}}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_cancle',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_cancle_onclick',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'회계처리취소'}]}]}]}]}]}]}]}]}]})