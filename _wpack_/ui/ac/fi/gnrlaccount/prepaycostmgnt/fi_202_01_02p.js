/*amd /ui/ac/fi/gnrlaccount/prepaycostmgnt/fi_202_01_02p.xml 33370 29283bfb43239801563abab50f9b86b12740c4967fa8049d960260b1e9fda1c3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'opntAcctCdSt',name:'상대계정코드From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'opntAcctCdEnd',name:'상대계정코드To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prepayTermStDtSt',name:'선급기간시작일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prepayTermStDtEnd',name:'선급기간시작일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prepayTermEndDtSt',name:'선급기간종료일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prepayTermEndDtEnd',name:'선급기간종료일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prepayCostStsCd',name:'선급비용상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prepayCostNo',name:'선급비용번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postYn',name:'',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_prepaycontents',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm',name:'마감연월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisMmPrepayCost',name:'당월선급비용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisYyPrepayCost',name:'당기선급비용',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_prepay',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prepayTermEndDt',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmnSlipNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costAmt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueSlipNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalAdptYm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipSeq',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmnDt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refundAmt',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ramt',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prepayCostAcctCd',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawDt',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prepayCostNo',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmis',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prepayTermStDt',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prepayCostStsCd',name:'name30',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_search',action:'/ac.fi.gnrlaccount.prepaycostmgnt.RetrievePrepayCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_prepay","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_prepay","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_save',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_slipNo","key":"OUT_DS1"},{"id":"ds_prepay","key":"IN_DS1"}]',target:'data:json,{"id":"ds_slipNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_prepaycontents',action:'',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_prepaycontents_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 상세내역조회/기간연장
 * 메뉴경로 : 회계/재무회계/일반회계/선급비용관리/선급비용조회/연장/해지
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ac/fi/gnrlaccount/prepaycostmgnt/fi_202_01_02p.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-15
 * 수정이력  :
 *    - 2025-12-15      정승혜    최초작성
 *    - 2026-01-22      정승혜    기타수정
 * 메모 :
 * flag==1 "기간연장" | flag==2 "해지" | flag==3 "상세내역조회"
 * asis 적요 내용 수정시 저장안됨
 * 부모페이지 fi_202_01_01b
 * 조회조건 : 
 * 계정- 5001350~5001350 / 20100101~20101231 / 회계처리-전체
 */

scwin.title = "";
scwin.str = "";
scwin.valueObject = "";

//hidden
scwin.txt_ramt = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // getCodeList
  const codeOptions = [{
    grpCd: "FI020",
    compID: "lc_prepayCostStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.params = $c.data.getParameter($p);
  scwin.title = scwin.params["str_title"];
  scwin.str = scwin.params["str"];
  scwin.valueObject = scwin.params["valueObject"];
  if (scwin.valueObject.flag == "2") {} else {
    trCostAmt.hide();
  }
};
scwin.ondataload = function () {
  scwin.f_Header();
  scwin.f_Retrieve();
  scwin.f_Setting();
  scwin.f_setAmt();

  // disable 처리
  $c.gus.cfDisableObjects($p, [ed_prepayTermEndDt, ed_tmnDt, udc_clntList]);
  //$c.gus.cfDisableKeyData();
  $c.gus.cfDisableObjects($p, [topTable, middleTable, rightTable]);
  $c.gus.cfDisableObjects($p, [lc_prepayCostStsCd]);
  $c.gus.cfDisableBtn($p, [btn_save]);
  //btn_save.setDisabled(true);
};
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, scwin.title);
};

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  if (typeof scwin.valueObject != "undefined" && scwin.valueObject != null) {
    let prepayCostNo = scwin.valueObject.prepayCostNo;
    if (prepayCostNo != null) {
      dma_search.set("prepayCostNo", prepayCostNo);
      dma_search.set("postYn", -1);
      $c.sbm.execute($p, sbm_tr_search);
    }
  }
};

//-------------------------------------------------------------------------
// 기간연장,해지 화면 setting
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  // 기간연장
  if (scwin.valueObject.flag == "1") {
    txt_prepayTermEndNmame.addClass("req");
    txt_summary.addClass("req");
    btn_update.show();
    btn_save.show();

    // 기간연장
  } else if (scwin.valueObject.flag == "2") {
    txt_tmnDt.addClass("req");
    txt_refundAmt.addClass("req");
    txt_cmis.addClass("req");
    txt_summary.addClass("req");
    btn_update.show();
    btn_save.show();

    // 상세내역
  } else if (scwin.valueObject.flag == "3") {
    btn_update.hide();
    btn_save.hide();
    $c.gus.cfDisableObjects($p, [ed_prepayTermEndDt, ed_tmnDt, udc_clntList]);
  }
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = async function () {
  // 기간연장 및 해지처리는 상태가 대기, 진행인 경우만 가능하다
  if (ds_prepay.getCellData(0, "prepayCostStsCd") != 10 && ds_prepay.getCellData(0, "prepayCostStsCd") != 20) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_041, "상태가 해지나 만기", "기간연장 및 해지처리를 "));
    return;
  }

  // 기간연장일경우
  if (scwin.valueObject.flag == "1") {
    $c.gus.cfEnableObjects($p, [ed_prepayTermEndDt]);
    ed_prepayTermEndDt.focus();
  }
  // 해지처리일경우
  else if (scwin.valueObject.flag == "2") {
    if (ed_clntNo.getValue == "") {
      $c.gus.cfEnableObjects($p, [ed_tmnDt, ed_refundAmt, ed_cmis, ed_clntNo, ed_clntNm]);
      ed_clntNo.focus();
    } else {
      $c.gus.cfEnableObjects($p, [ed_tmnDt, ed_refundAmt, ed_cmis]);
    }
  }
  $c.gus.cfEnableObj($p, ed_summary, true);
  $c.gus.cfDisableBtn($p, [btn_update]);
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
  //btn_save.setDisabled(false);
  //btn_update.setDisabled(true);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_prepay.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  let valCheck = await scwin.f_Validation();
  if (!valCheck) {
    return;
  } else {
    let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirm) {
      ds_prepay.setCellData(0, "ramt", scwin.txt_ramt);
      if (scwin.valueObject.flag == "1") {
        sbm_tr_save.action = "/ac.fi.gnrlaccount.prepaycostmgnt.ProcessExpirationExtendCMD.do";
      } else if (scwin.valueObject.flag == "2") {
        sbm_tr_save.action = "/ac.fi.gnrlaccount.prepaycostmgnt.ProcessTerminationCMD.do";
      }
      $c.sbm.execute($p, sbm_tr_save);
    }
  }
};

//-------------------------------------------------------------------------
// 체크
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  if (scwin.valueObject.flag == "2") {
    ed_cmis.setMandatory(true);
    ed_tmnDt.setMandatory(true);
    let valid = await $c.gus.cfValidate($p, [ed_prepayTermEndDt, ed_tmnDt, ed_refundAmt, ed_cmis, ed_summary]);
    if (await !valid) {
      return false;
    }
  } else {
    let valid = await $c.gus.cfValidate($p, [ed_prepayTermEndDt, ed_refundAmt, ed_summary]);
    if (await !valid) {
      return false;
    }
  }
  debugger;
  if (scwin.valueObject.flag == "1") {
    if (!$c.gus.cfIsAfterDate($p, ed_prepayTermStDt.getValue().trim(), ed_prepayTermEndDt.getValue().trim())) {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_057, "종료일자", "시작일자"));
      ed_prepayTermEndDt.focus();
      return false;
    }
  } else if (scwin.valueObject.flag == "2") {
    if (!(await $c.gus.cfIsAfterDate($p, ed_prepayTermStDt.getValue().trim(), ed_tmnDt.getValue().trim()))) {
      if (ed_tmnDt.getValue().trim() != "") {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_057, "해지일자", "시작일자"));
        ed_tmnDt.focus();
        return false;
      }
    }
    if (ed_costAmt.getValue() < 0) {
      await $c.win.alert($p, "차액은 0보다 작을수 없습니다");
      ed_refundAmt.focus();
      return false;
    }
    if (ed_clntNm.getValue == "") {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_WRN_018, "거래처", "거래처를 등록"));
      scwin.f_openPopUp('4', 'F');
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 선급비용발생잔액,비용대체금액 셋팅
//-------------------------------------------------------------------------
scwin.f_setAmt = function () {
  //선급비용발생잔액: 선급비용발생금액 - 전기대체액 
  //비용대체금액: 선급비용발생잔액 - 환급액 - 해지수수료

  //flag==2 해지처리
  if (scwin.valueObject.flag == "2") {
    scwin.txt_ramt = ed_amt.getValue() - ed_befYyPrepayCost.getValue() - ed_thisYyPrepayCost.getValue();
    let startStatus = ds_prepay.getRowStatus(0);
    ed_costAmt.setValue(scwin.txt_ramt - ed_refundAmt.getValue() - ed_cmis.getValue());
    if (startStatus == 'R') {
      ds_prepay.modifyRowStatus(0, 'R');
    }
  }
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  let rtnList = new Array();
  switch (flag) {
    case '4':
      // 거래처
      let param = ",,,000";
      rtnList = udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, ed_clntNo.getValue().trim(), ed_clntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.udc_clntList_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_clntNo.setValue(rtnList[0]); // 코드
    ed_clntNm.setValue(rtnList[1]); // 명
    ed_clntNo.options.hidVal = rtnList[0]; // 히든값
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
    ed_clntNo.options.hidVal = "";
  }
};
scwin.udc_clntList_onclickEvent = function (e) {
  scwin.f_openPopUp('4', 'F');
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function () {
  //udc
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd.getValue().trim() == strCd.options.hidVal) {
    return;
  }
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") {
    scwin.f_openPopUp(flag, 'T');
  }
};
scwin.f_Close = function () {
  $c.win.closePopup($p);
};

// 서브미션
scwin.sbm_tr_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_prepay.getRowCount() > 0) {
    ds_prepay.setRowPosition(0);
    let condition = "?";
    condition += "prepayCostNo=" + ds_prepay.getCellData(0, "prepayCostNo");
    sbm_ds_prepaycontents.action = "/ac.fi.gnrlaccount.prepaycostmgnt.RetrieveDetailContentsCMD.do" + condition;
    $c.sbm.execute($p, sbm_ds_prepaycontents);
  }
};

// 서브미션
scwin.sbm_tr_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfDisableObjects($p, [ed_prepayTermEndDt, ed_tmnDt, ed_refundAmt, ed_cmis, ed_clntNo, ed_clntNm, ed_summary]);
  if (ds_slipNo.getCellData(0, "slipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_slipNo.getCellData(0, "slipNo"));
  }
  scwin.f_Header();
  scwin.f_Retrieve();
  scwin.f_setAmt();
  $c.gus.cfDisableObjects($p, [ed_prepayTermEndDt, ed_tmnDt, udc_clntList]);
  $c.gus.cfDisableKeyData($p);
  if (scwin.valueObject.flag == "1") {
    $c.gus.cfDisableBtn($p, [btn_save]);
    $c.gus.cfEnableBtnOnly($p, [btn_update]);
    //btn_save.setDisabled(true);
    //btn_update.setDisabled(false);
  } else if (scwin.valueObject.flag == "2") {
    $c.gus.cfDisableBtn($p, [btn_save, btn_update]);
    //btn_save.setDisabled(true);
    //btn_update.setDisabled(true);
  }
};

// 서브미션
scwin.sbm_ds_prepaycontents_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_prepaycontents.setJSON(e.responseJSON.GAUCE);
  totalRows.setValue(ds_prepaycontents.getRowCount());
  if (ds_prepaycontents.getRowCount() > 0) {
    ds_prepaycontents.setRowPosition(0);
    $c.gus.cfGoPrevPosition($p, gr_prepaycontents, 0);
    ed_thisMmPrepayCost.setValue(ds_prepaycontents.getCellData(ds_prepaycontents.getRowCount() - 1, "thisMmPrepayCost"));
    ed_thisYyPrepayCost.setValue(ds_prepaycontents.getCellData(ds_prepaycontents.getRowCount() - 1, "thisYyPrepayCost"));
    ed_befYyPrepayCost.setValue(ds_prepaycontents.getCellData(ds_prepaycontents.getRowCount() - 1, "befYyPrepayCost"));
    scwin.f_setAmt();
  }
};
scwin.ed_refundAmt_onblur = function (e) {
  scwin.f_setAmt();
};
scwin.ed_cmis_onblur = function (e) {
  scwin.f_setAmt();
};
scwin.udc_clntList_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_clntNo, ed_clntNm, '4');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'topTable',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_opntAcctCd',class:'',maxlength:'7',allowChar:'0-9',ref:'data:ds_prepay.opntAcctCd',objType:'data'}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_opntAcctNm',class:'',maxlength:'28',ref:'data:ds_prepay.opntAcctNm',objType:'data'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_acctDeptCd',style:'width: 100px;',maxlength:'7',allowChar:'0-9',ref:'data:ds_prepay.acctDeptCd',objType:'data'}},{T:1,N:'xf:input',A:{class:'',id:'ed_acctDeptNm',style:'width: 150px;',maxlength:'28',ref:'data:ds_prepay.acctDeptNm',objType:'data'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntList',codeId:'ed_clntNo',validTitle:'',nameId:'ed_clntNm',style:'',maxlengthCode:'6',allowCharCode:'0-9',id:'udc_clntList',refDataCollection:'ds_prepay',code:'clntNo',name:'clntNm','ev:onclickEvent':'scwin.udc_clntList_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntList_onblurCodeEvent',objTypeCode:'data',objTypeName:'data',btnId:'btn_clntNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_amt',style:'width: 150px;',ref:'data:ds_prepay.amt',dataType:'number',displayFormat:'#,##0',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'시작일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_prepayTermStDt',style:'',ref:'data:ds_prepay.prepayTermStDt',displayFormat:'yyyy/MM/dd',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_prepayTermEndNmame',label:'종료일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_prepayTermEndDt',style:'',ref:'data:ds_prepay.prepayTermEndDt',displayFormat:'yyyy/MM/dd',objType:'data',title:'종료일자'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_slipNo',style:'width: 150px;',ref:'data:ds_prepay.slipNo',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회계일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_postDt',style:'',ref:'data:ds_prepay.postDt',displayFormat:'yyyy/MM/dd',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_prepayCostStsCd',style:'width: 100px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:ds_prepay.prepayCostStsCd',objType:'data'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최종적용연월',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_finalAdptYm',style:'',ref:'data:ds_prepay.finalAdptYm',displayFormat:'yyyy/MM',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당월대체액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_thisMmPrepayCost',style:'width: 150px;',ref:'data:ds_prepay.thisMmPrepayCost',displayFormat:'#,##0',dataType:'number',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당기대체액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_thisYyPrepayCost',style:'width: 150px;',ref:'data:ds_prepay.thisYyPrepayCost',displayFormat:'#,##0',dataType:'number',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전기대체액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_befYyPrepayCost',style:'width: 150px;',ref:'data:ds_prepay.befYyPrepayCost',displayFormat:'#,##0',dataType:'number',initValue:'0',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'middleTable',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'txt_summary',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_summary',style:'',ref:'data:ds_prepay.summary',objType:'data',maxlength:'100',maxByteLength:'100',title:'적요'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_prepaycontents',id:'gr_prepaycontents',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'마감연월',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'당월선급비용',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'당기선급비용',width:'120',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'closeYm',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'####/##',dataType:'text'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'thisMmPrepayCost',inputType:'text',removeBorderStyle:'false',width:'120',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'thisYyPrepayCost',inputType:'text',removeBorderStyle:'false',width:'120',dataType:'number',displayFormat:'#,##0',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column14',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column13',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'rightTable',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'txt_tmnDt',label:'해지일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_tmnDt',style:'',ref:'data:ds_prepay.tmnDt',displayFormat:'yyyy/MM/dd',objType:'data',title:'해지일자'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'txt_refundAmt',label:'환급액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_refundAmt',style:'width: 150px;',ref:'data:ds_prepay.refundAmt',displayFormat:'#,##0','ev:onblur':'scwin.ed_refundAmt_onblur',objType:'data',maxlength:'13',allowChar:'0-9',dataType:'number',title:'환급액'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'txt_cmis',label:'해지수수료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_cmis',style:'width: 150px;',ref:'data:ds_prepay.cmis','ev:onblur':'scwin.ed_cmis_onblur',objType:'data',allowChar:'0-9',maxlength:'13',displayFormat:'#,##0',dataType:'number',title:'해지수수료'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'trCostAmt'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',id:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_costAmt',style:'width: 150px;',ref:'data:ds_prepay.costAmt',objType:'data',displayFormat:'#,##0',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'해지전표번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_tmnSlipNo',style:'width: 150px;',ref:'data:ds_prepay.tmnSlipNo',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'만기전표번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_dueSlipNo',style:'width: 150px;',ref:'data:ds_prepay.dueSlipNo',objType:'data'}}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_Close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_update',style:'',type:'button','ev:onclick':'scwin.f_Update',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})