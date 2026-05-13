/*amd /ui/ac/fm/paymgnt/advcdmgnt/fm_303_01_03_n01b.xml 64733 2dbd6da65b9a807f85081e2048441aca51e71de3046102e942ea7e2ff33ab85f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'mgntDtClsCd',name:'날짜구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntStDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntSlipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntEmpClsCd',name:'사용자구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntEmpNo',name:'사용자사원번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntEmpNm',name:'사용자명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntClntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAdvcdPrgStsCd',name:'결재상태',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_List1',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_List1_onrowpositionchange','ev:onbeforerowpositionchange':'scwin.ds_List1_onbeforerowpositionchange','ev:oncelldatachange':'scwin.ds_List1_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdGrpCd',name:'그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdPrgStsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdPrgStsNm',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표;작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자;사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'전표;작성자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'거래처;번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'입금은행;코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'입금은행',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'입금계좌',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqAmt',name:'전도금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태;코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsNm',name:'결재상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdPayDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계;처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqId',name:'신청자;사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqNm',name:'신청자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속;부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'작성;귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL;Number',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요;(현대상선;B/L NO)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitAmt',name:'승인금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNo',name:'결재자;사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNm',name:'결재자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commFeeAmt',name:'수수료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitId',name:'승인자;사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitNm',name:'승인자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnId',name:'반려자;사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnNm',name:'반려자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitCancelId',name:'승인취소;사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitCancelNm',name:'승인;취소자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'excelGrpYn',name:'excelGrpYn',dataType:'text',defaultValue:'1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_copy',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdGrpCd',name:'그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdPrgStsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdPrgStsNm',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표;작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자;사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'전표;작성자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'거래처;번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'입금은행;코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'입금은행',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'입금계좌',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqAmt',name:'전도금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태;코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsNm',name:'결재상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdPayDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계;처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqId',name:'신청자;사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqNm',name:'신청자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속;부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'작성;귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL;Number',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요;(현대상선;B/L NO)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitAmt',name:'승인금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNo',name:'결재자;사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNm',name:'결재자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commFeeAmt',name:'수수료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitId',name:'승인자;사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitNm',name:'승인자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnId',name:'반려자;사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnNm',name:'반려자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitCancelId',name:'승인취소;사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitCancelNm',name:'승인;취소자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieveSlipNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawAcctDeptCd',name:'작성부서',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_List2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'excelGrpYn',name:'name1',dataType:'text'}}]},{T:1,N:'w2:data',E:[{T:1,N:'w2:row'}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fm.paymgnt.advcdmgnt.RetrieveAdvancedPaymentListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search", "key":"IN_DS1"}, {"id":"ds_List1", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_List1","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_grpSave',action:'/ac.fm.paymgnt.advcdmgnt.SaveGrpAdvancedPaymentListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_List1", "key":"IN_DS1"},{"id":"ds_List2", "key":"IN_DS2"}]',target:'data:json,{}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_grpSave_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_grpCancel',action:'/ac.fm.paymgnt.advcdmgnt.CancelGrpAdvancedPaymentListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_List1", "key":"IN_DS1"}]',target:'data:json,{}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_grpCancel_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fm.paymgnt.advcdmgnt.SaveAdvancedPaymentCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_List1", "key":"IN_DS1"}]',target:'data:json,{}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_request',action:'/ac.fm.paymgnt.advcdmgnt.SaveAdvancedPaymentListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_List1", "key":"IN_DS1"}]',target:'data:json,{}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_request_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancel',action:'/ac.fm.paymgnt.advcdmgnt.CancelAdvancedPaymentListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_List1", "key":"IN_DS1"}]',target:'data:json,{}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_cancel_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSlipNo',action:'/ds.fs.adjm.pchsadjmdcsn.RetrieveSlipInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieveSlipNo", "key":"IN_DS1"}, {"id":"ds_retrieveSlipNo", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieveSlipNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveSlipNo_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//---------------------------------------------------------
// 전역변수
//---------------------------------------------------------   

scwin.sChk = 0; // 미선택 : 0, 요청가능건 선택 : 1, 요청불가 건 선택 : 2
scwin.chkRow = 0;
scwin.chkSave = 0;
scwin.sSelectChk = "0";
scwin.vRetrieveSlipNo = "";
scwin.oldRow = -1;
scwin.onpageload = function () {
  scwin.vRetrieveSlipNo = $c.data.getParameter($p, "slipNo") || $p.parent().scwin.slipNo;
  const codeOptions = [{
    grpCd: "FM118",
    compID: "lc_mgntAdvcdPrgStsCd,lc_advcdPrgStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.setInit);

  // $c.gus.cfCopyDataSet(ds_advcdPrgStsCd, ds_mgntAdvcdPrgStsCd, "");

  $c.gus.cfInitObjects($p, tbl_inputData);
  $c.gus.cfDisableObjects($p, [tbl_inputData, btn_Save]);
};

//---------------------------------------------------------
// UDC
//---------------------------------------------------------    
scwin.onUdcCompleted = function () {
  scwin.f_SetSrchDefault();
  ed_mgntAcctDeptCd.setValue("01185");
  scwin.f_checkPopEd(ed_mgntAcctDeptCd, txt_mgntAcctDeptNm, '1');
  ed_advcdReqAmt.setValue("0"); // 전도금
  ed_commFeeAmt.setValue("0"); // 수수료

  // 전표번호 넘어오면 일자, 작성부서 먼저 조회
  if (!$c.util.isEmpty($p, scwin.vRetrieveSlipNo)) {
    ds_retrieveSlipNo.set("slipNo", scwin.vRetrieveSlipNo);
    $c.sbm.execute($p, sbm_retrieveSlipNo);
  }
};

//---------------------------------------------------------
// 사용자 함수
//---------------------------------------------------------   
scwin.setInit = function () {
  lc_mgntAdvcdPrgStsCd.addItem("전체", "", null, 0);
  lc_mgntAdvcdPrgStsCd.addItem("승인대기", "99", null);
  lc_mgntAdvcdPrgStsCd.setSelectedIndex(0);
  lc_advcdPrgStsCd.addItem("전체", "", null, 0);
  lc_advcdPrgStsCd.addItem("승인대기", "99", null);
  lc_advcdPrgStsCd.setSelectedIndex(0);
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
};
scwin.f_SetSrchDefault = function () {
  today = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  lc_mgntDtClsCd.setSelectedIndex(0); // 일자구분
  ed_mgntStDt.setValue(today.substr(0, 6) + "01"); // 시작일자
  ed_mgntEndDt.setValue(today); // 종료일자
  lc_mgntEmpClsCd.setSelectedIndex(0); // 사용자구분
  ed_mgntStDt.focus();
};
scwin.f_Retrieve = function () {
  if (!scwin.f_Validation("Search")) {
    return;
  }
  $c.sbm.execute($p, sbm_search);
};
scwin.f_Validation = function (sType) {
  var nRow = gr_List1.getFocusedRowIndex();
  var nChkRow = gr_List1.getCheckedIndex("chk").length;
  if (sType == "Search") {
    // if (!$c.gus.cfValidate([ed_mgntStDt])) {
    //     return false;
    // }
    // if (!$c.gus.cfValidate([ed_mgntEndDt])) {
    //     return false;
    // }
    // if (!$c.gus.cfValidate([ed_mgntAcctDeptCd])) {
    //     return false;
    // }
    if (ed_mgntStDt.getValue() == "" || ed_mgntEndDt.getValue() == "") {
      $c.win.alert($p, "신청일자은(는) 필수 입력 항목입니다.");
      return false;
    }
    if (ed_mgntAcctDeptCd.getValue() == "") {
      $c.win.alert($p, "귀속부서은(는) 필수 입력 항목입니다.");
      return false;
    }
  } else if (sType == "grpSave") {
    if (nChkRow == 0) {
      $c.win.alert($p, "선택한 행이 존재하지 않습니다.");
      return false;
    }
  } else if (sType == "grpCancel") {
    if (nChkRow == 0) {
      $c.win.alert($p, "선택한 행이 존재하지 않습니다.");
      return false;
    }
  } else if (sType == "Save") {
    // TODO :: 
    // if (ds_List1.IsUpdated == false) {
    //     cfAlertMsg(MSG_CM_ERR_001, Array("데이타"));
    //     return;
    // }
    // 입금은행
    if ($c.gus.cfIsNull($p, ds_List1.getCellData(nRow, "bankCd"))) {
      $c.win.alert($p, "입금은행을(를) 입력하십시요");
      // gr_List1.SetColumn("bankCd");
      ed_bankCd.focus();
      return false;
    }
    // 계좌번호
    if ($c.gus.cfIsNull($p, ds_List1.getCellData(nRow, "bankAcntNo"))) {
      $c.win.alert($p, "계좌번호을(를) 입력하십시요");
      gr_List1.SetColumn("bankAcntNo");
      txt_bankAcntNo.focus();
      return false;
    }
    // 전도금
    if ($c.gus.cfIsNull($p, ds_List1.getCellData(nRow, "advcdReqAmt"))) {
      $c.win.alert($p, "전도금을(를) 입력하십시요");
      gr_List1.SetColumn("advcdReqAmt");
      ed_advcdReqAmt.focus();
      return false;
    }
  } else if (sType == "Request") {
    if (nChkRow == 0) {
      $c.win.alert($p, "선택한 행이 존재하지 않습니다.");
      return false;
    }
    // if (ds_List1.IsUpdated == false) {
    //     cfAlertMsg(MSG_CM_ERR_001, Array("데이타"));
    //     return;
    // }
    for (var i = 0; i < ds_List1.getTotalRow(); i++) {
      if (ds_List1.getCellData(i, "chk") == "1") {
        // 입금은행
        if ($c.gus.cfIsNull($p, ds_List1.getCellData(i, "bankCd"))) {
          //	                    $c.win.alert(i + "번째 행의 입금은행을(를) 입력하십시요");
          $c.win.alert($p, "입금은행을(를) 입력하십시요");
          // ds_List1.RowPosition = i;
          // gr_List1.SetColumn("bankCd");
          //						ed_bankCd.focus();
          return false;
        }

        // 계좌번호
        if ($c.gus.cfIsNull($p, ds_List1.getCellData(i, "bankAcntNo"))) {
          //	                    $c.win.alert(i + "번째 행의 계좌번호을(를) 입력하십시요");
          $c.win.alert($p, "계좌번호을(를) 입력하십시요");
          // ds_List1.RowPosition = i;
          // gr_List1.SetColumn("bankAcntNo");
          //						txt_bankAcntNo.focus();
          return false;
        }

        // 전도금
        if ($c.gus.cfIsNull($p, ds_List1.getCellData(i, "advcdReqAmt"))) {
          //	                    $c.win.alert(i + "번째 행의 전도금을(를) 입력하십시요");
          $c.win.alert($p, "전도금을(를) 입력하십시요");
          // ds_List1.RowPosition = i;
          // gr_List1.SetColumn("advcdReqAmt");
          //						ed_advcdReqAmt.focus();
          return false;
        }

        // 지급일자
        //					if ($c.gus.cfIsNull(ds_List1.getCellData(i, "advcdPayDt"))) {
        //	                    $c.win.alert(i + "번째 행의 지급일자을(를) 입력하십시요");
        //			            ds_List1.RowPosition = i;		
        //			            gr_List1.SetColumn("advcdPayDt");
        //						ed_advcdPayDt.focus();
        //						return false;
        //					}
      }
    }
  } else if (sType == "Cancel") {
    if (nChkRow == 0) {
      $c.win.alert($p, "선택한 행이 존재하지 않습니다.");
      return false;
    }
  } else {
    return false;
  }
  return true;
};
scwin.chk = function (d, fd, r, c) {
  if (d == "04") {
    gr_List1.setCellColor(r, "advcdPrgStsNm", "red");
  } else {
    gr_List1.setCellDisabled(r, "chk", false);
    gr_List1.setCellColor(r, "advcdPrgStsNm", "#0000FF");
    if (gr_List1.dataList.getCellData(r, "advcdPrgStsNm") == "승인대기") gr_List1.setCellColor(r, "advcdPrgStsNm", "#000000");
  }
  return d;
};
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  strNm.setValue("");
  if (strCd.getValue() != "") scwin.f_SearchPopUp(flag, 'T');
};
scwin.f_SearchPopUp = function (flag, check) {
  switch (flag) {
    case '1':
      // 부서
      //param = '';
      var param_yy = ed_mgntStDt.getValue();
      udc_dept.setSelectId("retrieveAcctDeptCdInfo9");
      udc_dept.cfCommonPopUp(scwin.udc_dept_callbackFunc, ed_mgntAcctDeptCd.getValue(), txt_mgntAcctDeptNm.getValue(), check, null, null, null, null, param_yy, ",,,,,,1", "450", "500", null, null); // 귀속부서

      break;
    case '2':
      // 사번
      param = '';
      udc_emp.setSelectId("retrieveAcEmpInfo");
      udc_emp.cfCommonPopUp(scwin.udc_emp_callbackFunc, ed_mgntEmpNo.getValue(), txt_mgntEmpNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;

    // 계약거래처
    case '3':
      udc_clnt.setSelectId("retrieveClntList");
      udc_clnt.cfCommonPopUp(scwin.udc_clnt_callbackFunc, ed_mgntClntNo.getValue(), txt_mgntClntNm.getValue(), check, null, null, null, null, null, null, null, null, null);
      break;
    // 입금은행
    case '4':
      udc_bank.setSelectId("retrieveBankCdInfo");
      udc_bank.ilCommonPopUp(scwin.udc_bank_callbackFunc, ed_bankCd.getValue(), txt_bankNm.getValue(), check, null, null, null, null, null, null, null, null, null);
      break;
  }
};
scwin.udc_dept_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_mgntAcctDeptCd, txt_mgntAcctDeptNm, null);
};
scwin.udc_emp_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_mgntEmpNo, txt_mgntEmpNm, null);
};
scwin.udc_clnt_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_mgntClntNo, txt_mgntClntNm, null);
};
scwin.udc_bank_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bankCd, txt_bankNm, null);
};
scwin.f_confrimPopup = function (str) {
  window.name = "parentFrom";
  window.open('/ui/ac/fm/paymgnt/advcdmgnt/fm_303_01_0123p.xml', 'commonPop', "width=350, height=150, left=800, top=500");
};
scwin.f_Update = async function () {
  var nRow = gr_List1.getCheckedIndex("chk").length;
  var idx = gr_List1.getFocusedRowIndex();
  if (gr_List1.getFocusedRowIndex() > -1) {
    // 상태가 요청(02), 승인(04)이면 수정 불가능
    if (ds_List1.getCellData(idx, "advcdPrgStsCd") == "02" || ds_List1.getCellData(idx, "advcdPrgStsCd") == "04") {
      $c.win.alert($p, "요청/승인 상태에서는 수정이 불가능합니다.");
      return;
    }
  }
  var chkAdvcdGrpCd = "";
  var chkGrpRow = "0";
  if (nRow > 0) {
    if ("0" == ds_List1.getCellData(idx, "chk")) {
      if ((await $c.win.confirm($p, "건별 수정 가능하므로 선택한 건이 모두 취소됩니다.\n계속 진행하시겠습니까?")) == true) {
        for (var i = 0; i < ds_List1.getTotalRow(); i++) {
          ds_List1.setCellData(i, "chk", "0");
        }
      } else {
        return;
      }
    } else {
      for (var i = 0; i < ds_List1.getTotalRow(); i++) {
        if (ds_List1.getCellData(i, "chk") == "1") {
          if (ds_List1.getCellData(i, "advcdPrgStsCd") == "02" || ds_List1.getCellData(i, "advcdPrgStsCd") == "04") {
            $c.win.alert($p, "요청/승인 상태에서는 수정이 불가능합니다.");
            return;
          }
          if (chkGrpRow != "0") {
            if ("" == ds_List1.getCellData(i, "advcdGrpCd") || chkAdvcdGrpCd != ds_List1.getCellData(i, "advcdGrpCd")) {
              if ((await $c.win.confirm($p, "건별 수정 가능하므로 선택한 건이 모두 취소됩니다.\n계속 진행하시겠습니까?")) == true) {
                for (var i = 0; i < ds_List1.getTotalRow(); i++) {
                  ds_List1.setCellData(i, "chk", "0");
                }
              } else {
                return;
              }
            }
          }
          chkGrpRow = i;
          chkAdvcdGrpCd = ds_List1.getCellData(i, "advcdGrpCd");
        }
      }
    }
  }
  $c.gus.cfEnableObjects($p, [ed_bankCd, txt_bankNm, txt_bankAcntNo, img_bankCd, ed_advcdReqAmt, ed_commFeeAmt, txt_summary]);
  $c.gus.cfDisableBtn($p, [btn_Update]);
  $c.gus.cfEnableObjects($p, [btn_Save]);

  //focus 설정
  ed_bankCd.focus();
};
scwin.f_GrpSave = async function () {
  let opts = {
    id: "parentFrom",
    popupName: "그룹생성",
    modal: true,
    type: "browserPopup",
    width: 400,
    height: 200,
    title: "그룹생성"
  };
  rtn = await $c.win.openPopup($p, "/ui/ac/fm/paymgnt/advcdmgnt/fm_303_01_0123p.xml", opts, {});
  if (rtn) {
    scwin.f_grp(rtn);
  }
};
scwin.f_grp = function (v) {
  ds_List2.removeAll();
  ds_List2.insertRow();
  if (v == 1) {
    ds_List2.setCellData(0, "excelGrpYn", 1);
    $c.sbm.execute($p, sbm_grpSave);
  } else if (v == 2) {
    ds_List2.setCellData(0, "excelGrpYn", 0);
    $c.sbm.execute($p, sbm_grpSave);
  }
};
scwin.f_GrpCancel = async function () {
  if (!scwin.f_Validation("grpCancel")) {
    return;
  }
  if ((await $c.win.confirm($p, "그룹 해제 시 업로드 된 파일이 모두 삭제됩니다. 선택한 전도금을 그룹해제 하시겠습니까?")) == true) {
    $c.sbm.execute($p, sbm_grpCancel);
  }
};
scwin.f_save = async function () {
  if (!scwin.f_Validation("Save")) {
    return;
  }
  if ((await $c.win.confirm($p, "선택한 전도금을 저장하시겠습니까?")) == true) {
    scwin.chkSave = 1;
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.f_Request = async function () {
  if (!scwin.f_Validation("Request")) {
    return;
  }
  if ((await $c.win.confirm($p, "선택한 전도금을 요청 처리하시겠습니까?")) == true) {
    $c.sbm.execute($p, sbm_request);
  }
};
scwin.f_Cancel = async function () {
  if (!scwin.f_Validation("Cancel")) {
    return;
  }
  if ((await $c.win.confirm($p, "선택한 전도금을 요청취소 처리하시겠습니까?")) == true) {
    $c.sbm.execute($p, sbm_cancel);
  }
};
scwin.f_setFileUpDownFrame = async function (sAdvcdGrpCd, sSeq, sAdvcdPrgStsCd) {
  var data = {
    "advcdGrpCd": sAdvcdGrpCd,
    "seq": sSeq,
    "advcdPrgStsCd": sAdvcdPrgStsCd
  };
  var obj = {
    "dataObject": {
      "type": "json",
      "name": "wframeParam",
      "data": data
    }
  };
  await wfm_fileUpdown.setSrc("/ui/ac/fm/paymgnt/advcdmgnt/fm_303_01_03p.xml", obj);
  wfm_fileUpdown.getAllChildren()[4].hide();
  wfm_fileUpdown.getAllChildren()[26].hide();
  //$w.getComponentById("wfm_fileUpdown").setSize(800, 600);
  //wfm_fileUpdown.setSize("100%");
};
//---------------------------------------------------------
// 컴포넌트 이벤트
//---------------------------------------------------------   
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  ds_search.setEmptyValue();
  scwin.f_SetSrchDefault(); //조회 기본값 설정
};
scwin.btn_GrpSave_onclick = function (e) {
  scwin.f_GrpSave();
};
scwin.btn_GrpCancel_onclick = function (e) {
  scwin.f_GrpCancel();
};
scwin.btn_Update_onclick = function (e) {
  scwin.f_Update();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_save();
};
scwin.btn_Request_onclick = function (e) {
  scwin.f_Request();
};
scwin.btn_RequestCancel_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.gr_List1_oncellclick = async function (rowIndex, columnIndex, columnId) {
  let row = rowIndex;
  if (columnId == "chk") {
    let reqAmt = 0;
    let feeAmt = 0;
    let nRow = gr_List1.getCheckedIndex("chk").length;

    // 체크박스 선택 시 전표번호가 있으면 동일한 전표번호는 모두 선택되게 변경    
    if (!$c.gus.cfIsNull($p, ds_List1.getCellData(row, "advcdGrpCd"))) {
      let vChk = ds_List1.getCellData(row, "chk");
      if (columnId == "chk" && scwin.sSelectChk == "0") {
        scwin.sSelectChk = "1";
        for (var i = 0; i < ds_List1.getTotalRow(); i++) {
          if (ds_List1.getCellData(i, "advcdGrpCd") == ds_List1.getCellData(row, "advcdGrpCd")) {
            ds_List1.setCellData(i, "chk", vChk);
          }
        }
        scwin.sSelectChk = "0";
      }
    }
    var Chk = scwin.sChk;
    if (columnId == "chk") {
      if (ds_List1.getCellData(row, "chk") == "1") {
        if (scwin.chkRow != "0") {
          if ("" == ds_List1.getCellData(row, "advcdGrpCd") || ds_List1.getCellData(row, "advcdGrpCd") != ds_List1.getCellData(scwin.chkRow, "advcdGrpCd")) {
            chkRows = gr_List1.getCheckedIndex("chk");
            flag = false;
            flag2 = false;
            for (var i = 0; i < chkRows.length; i++) {
              // 은행코드가 동일여부
              if (ds_List1.getCellData(chkRows[i], "bankCd") != ds_List1.getCellData(scwin.chkRow, "bankCd")) {
                await $c.win.alert($p, "동일한 입금은행건만 선택 가능합니다.");
                ds_List1.setCellData(chkRows[i], "chk", "0");
                flag = true;
                continue;
              }
              // 입금계좌가 동일여부
              if (!flag && ds_List1.getCellData(chkRows[i], "bankAcntNo") != ds_List1.getCellData(scwin.chkRow, "bankAcntNo")) {
                await $c.win.alert($p, "동일한 입금계좌건만 선택 가능합니다.");
                ds_List1.setCellData(chkRows[i], "chk", "0");
                flag2 = true;
                continue;
              }
            }
            if (flag || flag2) return;
          }
        }
        scwin.chkRow = row;
      } else {
        scwin.chkRow = 0;
      }
      if (nRow == 0) {
        scwin.sChk = 0; //미선택
        scwin.chkRow = 0;
      } else {
        if (ds_List1.getCellData(row, "advcdPrgStsCd") == "01" || ds_List1.getCellData(row, "advcdPrgStsCd") == "03" || ds_List1.getCellData(row, "advcdPrgStsCd") == "05" || ds_List1.getCellData(row, "advcdPrgStsCd") == "06") {
          scwin.sChk = 1; // 요청가능건 선택
        } else {
          scwin.sChk = 2; // 요청불가능건 선택
        }
      }
      if (Chk == 0) {
        return;
      } else {
        if (Chk == 1) {
          if (scwin.sChk == 2) {
            $c.win.alert($p, "요청가능 건과 요청불가능한건은 함께 선택불가합니다.");
            ds_List1.setCellData(row, "chk", "0");
            scwin.sChk = 1;
            return;
          }
        } else if (Chk == 2) {
          if (scwin.sChk == 1) {
            $c.win.alert($p, "요청가능 건과 요청불가능한건은 함께 선택불가합니다.");
            ds_List1.setCellData(row, "chk", "0");
            scwin.sChk = 2;
            return;
          }
        } else {
          return;
        }
      }

      //		for (i=1;ds_List1.CountRow;i++) {
      //			if (ds_List1.NameValue(i, "chk") == "1") {
      //				ed_advcdReqAmt.text = Number(ed_advcdReqAmt.text) + Number(ds_List1.NameValue(i, "advcdReqAmt"));
      //			}
      //		}
    }
    for (var i = 0; i < ds_List1.getTotalRow(); i++) {
      if (ds_List1.getCellData(i, "chk") == "1") {
        reqAmt += Number(ds_List1.getCellData(i, "advcdReqAmt"));
        feeAmt += Number(ds_List1.getCellData(i, "commFeeAmt"));
      }
    }
    ed_advcdReqSumAmt.setValue(reqAmt); // 전도금
    ed_commFeeSumAmt.setValue(feeAmt); // 수수료
    ds_List1.modifyAllStatus("R");
    return;
  }
  if (columnId == "slipNo" && row > -1 && !$c.gus.cfIsNull($p, ds_List1.getCellData(row, "slipNo"))) {
    $c.gus.cfShowSlipInfo($p, ds_List1.getCellData(row, "slipNo"));
    return;
  }
};
scwin.fn_CanRowPosChange = function (row) {};
scwin.udc_dept_onclickEvent = function (e) {
  scwin.f_SearchPopUp('1', 'F');
};
scwin.udc_emp_onclickEvent = function (e) {
  scwin.f_SearchPopUp('2', 'F');
};
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_SearchPopUp('3', 'F');
};
scwin.udc_bank_onclickEvent = function (e) {
  scwin.f_SearchPopUp('4', 'F');
};
scwin.udc_dept_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_mgntAcctDeptCd, txt_mgntAcctDeptNm, '1');
};
scwin.udc_emp_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_mgntEmpNo, txt_mgntEmpNm, '2');
};
scwin.udc_clnt_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_mgntClntNo, txt_mgntClntNm, '3');
};
scwin.udc_bank_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_bankCd, txt_bankNm, '4');
};
scwin.ds_List1_onrowpositionchange = async function (info) {
  scwin.oldRow = info.oldRowIndex;
  row = info.newRowIndex;
  colId = gr_List1.getFocusedColumnID();
  ds_copy.setJSON(ds_List1.getAllJSON());
  // if (row == 0) return;

  var advcdGrpCd = ds_List1.getCellData(row, "advcdGrpCd");
  var advcdPrgStsCd = ds_List1.getCellData(row, "advcdPrgStsCd");
  scwin.f_setFileUpDownFrame(advcdGrpCd, 1, advcdPrgStsCd); // 첨부파일
};
scwin.sbm_search_submitdone = function (e) {
  // $c.win.cfHideDSWaitMsg(gr_List1);
  // cfShowTotalRows(ds_List1_totalRows, rowCnt);
  rowCnt = ds_List1.getTotalRow();
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
  } else {
    // 데이터 복사
    ed_totalRows.setValue(ds_List1.getTotalRow());
    // cfCopyDataSet(ds_List1, ds_copy, "");
    gr_List1.setFocusedCell(0, 0);
    var advcdGrpCd = ds_List1.getCellData(0, "advcdGrpCd");
    var advcdPrgStsCd = ds_List1.getCellData(0, "advcdPrgStsCd");
    var houseBo = ds_List1.getCellData(row, "blNo");
    scwin.f_setFileUpDownFrame(advcdGrpCd, 1, advcdPrgStsCd, houseBo); // 첨부파일
  }
  scwin.sChk = 0;
  scwin.chkRow = 0;
  scwin.chkSave = 0;
  ed_advcdReqSumAmt.setValue("0"); // 전도금
  ed_commFeeSumAmt.setValue("0"); // 수수료
  $c.gus.cfDisableObjects($p, [btn_Save]);

  // 상태: "요청", 결재상태: "최종승인"인 경우, "승인대기" 상태로 변경
  for (var i = 0; i < ds_List1.getTotalRow(); i++) {
    if (ds_List1.getCellData(i, "advcdPrgStsCd") == "02" && ds_List1.getCellData(i, "apprvStsCd") == "05") {
      ds_List1.setCellData(i, "advcdPrgStsNm", "승인대기");
      // ds_List1.ResetStatus();
    }
    d = ds_List1.getCellData(i, "advcdPrgStsCd");
    if (d == "04") {
      gr_List1.setCellColor(i, "advcdPrgStsNm", "#FF0000");
    } else {
      gr_List1.setCellDisabled(i, "chk", false);
      gr_List1.setCellColor(i, "advcdPrgStsNm", "#0000FF");
      if (gr_List1.dataList.getCellData(i, "advcdPrgStsNm") == "승인대기") gr_List1.setCellColor(i, "advcdPrgStsNm", "#000000");
    }
  }
  ds_List1.modifyAllStatus("R");
};
scwin.sbm_grpSave_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_002); // 성공적으로 등록하였습니다.
  scwin.f_Retrieve();
};
scwin.sbm_grpCancel_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, "성공적으로 해제되었습니다."); // 성공적으로 해제하였습니다.
  scwin.f_Retrieve();
};
scwin.sbm_save_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_002); // 성공적으로 등록하였습니다.
  scwin.f_Retrieve();
};
scwin.sbm_request_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_002); // 성공적으로 등록하였습니다.
  scwin.f_Retrieve();
};
scwin.sbm_cancel_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, "성공적으로 취소되었습니다.");
  scwin.f_Retrieve();
};
scwin.btn_fieldClear1_onclick = function (e) {
  $c.gus.cfInitObjects($p, [ed_mgntAcctDeptCd, txt_mgntAcctDeptNm]);
};
scwin.btn_fieldClear2_onclick = function (e) {
  $c.gus.cfInitObjects($p, [ed_mgntEmpNo, txt_mgntEmpNm]);
};
scwin.btn_fieldClear3_onclick = function (e) {
  $c.gus.cfInitObjects($p, [ed_mgntClntNo, txt_mgntClntNm]);
};
scwin.btn_fieldClear4_onclick = function (e) {};
scwin.sbm_retrieveSlipNo_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  slipDt = e.responseJSON.OUT_DS1[0].slipDt;
  if (slipDt == "") return;
  ed_mgntStDt.setValue(slipDt);
  ed_mgntEndDt.setValue(slipDt);
  ed_mgntSlipNo.setValue(scwin.vRetrieveSlipNo);
  scwin.f_Retrieve();
};
scwin.ds_List1_onbeforerowpositionchange = async function (info) {
  let row = info.oldRowIndex;
  if (scwin.chkSave == 0) {
    if (ds_List1.getCellData(row, "advcdGrpCd") != ds_List1.getOriginalCellData(row, "advcdGrpCd") || ds_List1.getCellData(row, "advcdPrgStsCd") != ds_List1.getOriginalCellData(row, "advcdPrgStsCd") || ds_List1.getCellData(row, "bankCd") != ds_List1.getOriginalCellData(row, "bankCd") || ds_List1.getCellData(row, "bankNm") != ds_List1.getOriginalCellData(row, "bankNm") || ds_List1.getCellData(row, "bankAcntNo") != ds_List1.getOriginalCellData(row, "bankAcntNo") || ds_List1.getCellData(row, "advcdReqAmt") != ds_List1.getOriginalCellData(row, "advcdReqAmt") || ds_List1.getCellData(row, "commFeeAmt") != ds_List1.getOriginalCellData(row, "commFeeAmt") || ds_List1.getCellData(row, "summary") != ds_List1.getOriginalCellData(row, "summary")) {
      if ((await $c.win.confirm($p, MSG_CM_CRM_005)) == true) {
        ds_List1.undoAll();
        ds_List1.modifyAllStatus("R");
        // gr_List1.setScrollTop(gr_List1.getFocusedRowIndex());
        scwin.sChk = 0;
        scwin.chkRow = 0;
        scwin.chkSave = 0;
        ed_advcdReqSumAmt.setValue("0"); // 전도금
        ed_commFeeSumAmt.setValue("0"); // 수수료
        $c.gus.cfDisableObjects($p, [ed_bankCd, txt_bankNm, txt_bankAcntNo, img_bankCd, ed_advcdReqAmt, ed_commFeeAmt, txt_summary]);
        $c.gus.cfEnableObjects($p, [btn_Update]);
        $c.gus.cfDisableObjects($p, [btn_Save]);
        return true;
      } else {
        gr_List1.setFocusedCell(row, "advcdGrpCd");
        $c.gus.cfDisableObjects($p, [btn_Update]);
        $c.gus.cfEnableObjects($p, [btn_Save]);
        return false;
      }
    } else {
      $c.gus.cfDisableObjects($p, [ed_bankCd, txt_bankNm, txt_bankAcntNo, img_bankCd, ed_advcdReqAmt, ed_commFeeAmt, txt_summary]);
      $c.gus.cfEnableObjects($p, [btn_Update]);
      $c.gus.cfDisableObjects($p, [btn_Save]);
      return true;
    }
  }
};
scwin.ds_List1_oncelldatachange = function (info) {
  let colId = info.colID;
  if (colId == "bankCd") {
    for (var i = 0; i < ds_List1.getTotalRow(); i++) {
      if (ds_List1.getCellData(i, "chk") == "1") {
        ds_List1.setCellData(i, "bankCd", ds_List1.getCellData(row, "bankCd"));
      }
    }
  } else if (colId == "bankNm") {
    for (var i = 0; i < ds_List1.getTotalRow(); i++) {
      if (ds_List1.getCellData(i, "chk") == "1") {
        ds_List1.setCellData(i, "bankNm", ds_List1.getCellData(row, "bankNm"));
      }
    }
  } else if (colId == "bankAcntNo") {
    for (var i = 0; i < ds_List1.getTotalRow(); i++) {
      if (ds_List1.getCellData(i, "chk") == "1") {
        ds_List1.setCellData(i, "bankAcntNo", ds_List1.getCellData(row, "bankAcntNo"));
      }
    }
  }
};
scwin.gr_List1_onheaderclick = function (headerId) {
  let arrMatched = ds_List1.getMatchedIndex("chk", "1");
  let nFocusRow = arrMatched.length > 0 ? arrMatched[0] : "0";
  gr_List1.setFocusedCell(nFocusRow, "chk");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'lc_mgntDtClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_search.mgntDtClsCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'작성일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회계일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지급일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_mgntDt',refDataMap:'ds_search',refEdDt:'mgntEndDt',refStDt:'mgntStDt',style:'',edFromId:'ed_mgntStDt',edToId:'ed_mgntEndDt',class:'',mandatoryFrom:'Y',mandatoryTo:'Y'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'',codeId:'ed_mgntAcctDeptCd',popupID:'',validTitle:'',nameId:'txt_mgntAcctDeptNm',style:'width:%; height:px; ',btnId:'img_acctDeptCd',id:'udc_dept',refDataCollection:'ds_search',code:'mgntAcctDeptCd',name:'mgntAcctDeptNm','ev:onclickEvent':'scwin.udc_dept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent',allowCharCode:'0-9'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_fieldClear1',type:'button',class:'btn ico refresh','ev:onclick':'scwin.btn_fieldClear1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'휴지통'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mgntSlipNo',placeholder:'',style:'width:150px;',ref:'data:ds_search.mgntSlipNo',allowChar:'0-9',validateOnInput:'true'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_mgntEmpClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_search.mgntEmpClsCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전표작성자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'신청자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'승인자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_mgntEmpNo',selectID:'',popupID:'',validTitle:'',nameId:'txt_mgntEmpNm',style:'width:%; height:px; ',btnId:'img_mgntEmpNo',id:'udc_emp',refDataCollection:'ds_search',code:'mgntEmpNo',name:'mgntEmpNm','ev:onclickEvent':'scwin.udc_emp_onclickEvent','ev:onblurCodeEvent':'scwin.udc_emp_onblurCodeEvent',allowCharCode:'0-9'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_fieldClear2',type:'button',class:'btn ico refresh','ev:onclick':'scwin.btn_fieldClear2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'휴지통'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_mgntClntNo',selectID:'',popupID:'',validTitle:'',nameId:'txt_mgntClntNm',style:'width:%; height:px; ',btnId:'img_clntNo',id:'udc_clnt',refDataCollection:'ds_search',code:'mgntClntNo',name:'mgntClntNm','ev:onclickEvent':'scwin.udc_clnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent',allowCharCode:'0-9'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_fieldClear3',type:'button',class:'btn ico refresh','ev:onclick':'scwin.btn_fieldClear3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'휴지통'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_mgntAdvcdPrgStsCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_search.mgntAdvcdPrgStsCd',visibleRowNum:'10'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전도금관리내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridUpYn:'N',gridID:'gr_List1',grdDownOpts:'{"fileName":"전도금요청내역","sheetName":"전도금요청내역","type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_List1',id:'gr_List1',style:'',visibleRowNum:'5',visibleRowNumFix:'true',fixedColumn:'4','ev:oncellclick':'scwin.gr_List1_oncellclick',readOnly:'true','ev:onheaderclick':'scwin.gr_List1_onheaderclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'40',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'그룹번호',width:'130',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'상태',width:'0',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'상태',width:'80',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'전표정보',width:'280',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column29',value:'거래처<br/>번호',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column27',value:'거래처명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'입금은행<br/>코드',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column23',value:'입금은행',displayMode:'label',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column21',value:'입금계좌',displayMode:'label',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'전도금',width:'100',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column91',value:'결재상태<br/>코드',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column88',value:'결재상태',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column85',value:'지급일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column82',value:'회계<br/>처리일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column79',value:'신청자<br/>사원번호',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column76',value:'신청자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column73',value:'작성귀속<br/>부서코드',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column70',value:'작성<br/>귀속부서',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'BL<br/>Number',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column64',value:'적요<br/>(현대상선 B/L NO)',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'승인금액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column58',value:'결재자<br/>사원번호',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column55',value:'결재자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'수수료',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column49',value:'승인자<br/>사원번호',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column46',value:'승인자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column115',value:'반려자<br/>사원번호',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column112',value:'반려자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column109',value:'승인취소<br/>사원번호',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column106',value:'승인<br/>취소자',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column41',value:'전표<br/>작성일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column40',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',value:'작성자<br/>사원번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column38',value:'전표<br/>작성자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'40',disabled:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdGrpCd',inputType:'text',width:'130',displayFormat:'########-###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdPrgStsCd',inputType:'text',width:'0',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdPrgStsNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'text',width:'90',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'link',width:'90',style:'',class:'link'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawEmpNo',inputType:'text',width:'70',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawEmpNm',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mgntClntNo',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'mgntClntNm',displayMode:'label',textAlign:'left',class:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bankCd',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'bankNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'bankAcntNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdReqAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'apprvStsCd',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'apprvStsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'advcdPayDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'postDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'advcdReqId',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'advcdReqNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'drawAcctDeptCd',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'drawAcctDeptNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'summary',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'admitAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'apprvEmpNo',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'apprvEmpNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commFeeAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'admitId',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'admitNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'returnId',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'returnNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'admitCancelId',displayMode:'label',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'admitCancelNm',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'text',style:'',id:'column151',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column150',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',style:'',id:'column149',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column148',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column147',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column146',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column145',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column144',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column143',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column142',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column141',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column140',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column139',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column138',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column137',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column136',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column135',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column134',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column133',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column132',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column131',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column130',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column129',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column128',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column127',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column126',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column125',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column124',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column123',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column122',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column121',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column120',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column119',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column118',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전도금관리',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_inputData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'그룹번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_advcdGrpCd',placeholder:'',style:'width:150px;',ref:'data:ds_List1.advcdGrpCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_advcdPrgStsCd',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'10',ref:'data:ds_List1.advcdPrgStsCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입금은행',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_bankCd',nameId:'txt_bankNm',popupID:'',selectID:'',style:'',validTitle:'',btnId:'img_bankCd',id:'udc_bank','ev:onclickEvent':'scwin.udc_bank_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bank_onblurCodeEvent',code:'bankCd',name:'bankNm',refDataCollection:'ds_List1',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입금계좌',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_bankAcntNo',placeholder:'',style:'width:150px;',ref:'data:ds_List1.bankAcntNo',allowChar:'0-9',validateOnInput:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전도금',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_advcdReqAmt',placeholder:'',style:'width:150px;text-align:right;',dataType:'number',displayFormat:'#,###',ref:'data:ds_List1.advcdReqAmt',allowChar:'0-9',validateOnInput:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수수료',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_commFeeAmt',placeholder:'',style:'width:150px;text-align:right;',dataType:'number',displayFormat:'#,###',ref:'data:ds_List1.commFeeAmt',allowChar:'0-9',validateOnInput:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'받는 분 통장 표시 (미기재시 동원로엑스로 송금)',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_summary',placeholder:'',style:'width:250px;',ref:'data:ds_List1.summary'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전도금(합계)',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_advcdReqSumAmt',placeholder:'',style:'width:150px;text-align:right;',dataType:'number',displayFormat:'#,###'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수수료(합계)',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_commFeeSumAmt',placeholder:'',style:'width:150px;text-align:right;',dataType:'number',displayFormat:'#,###'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox no-border',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:wframe',A:{id:'wfm_fileUpdown',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_GrpSave',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_GrpSave_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'그룹생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_GrpCancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_GrpCancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'그룹해제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Update',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Request',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Request_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'요청'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_RequestCancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_RequestCancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'요청취소'}]}]}]}]}]}]}]}]})