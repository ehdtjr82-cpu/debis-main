/*amd /ui/ac/fm/paymgnt/advcdmgnt/fm_303_01_01b.xml 37213 cb7e6518715e9f8852e6aef28fd06e7d55355a63dbf12b693c37c0188602de4f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'조회구분코드(1:전도금신청,2:전도금승인)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtClsCd',name:'날짜구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'appDept',name:'신청부서',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'조회구분코드(1:전도금신청,2:전도금승인)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtClsCd',name:'날짜구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'appDept',name:'신청부서',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_advanced',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_advanced_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'advcdNo',name:'전도금번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'appDt',name:'신청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'appAcctDeptCd',name:'신청귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'appAcctDeptNm',name:'신청귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'appAmt',name:'신청금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'admitAmt',name:'승인금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitSlipNo',name:'승인전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitBankbookNo',name:'승인통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdPayStsCd',name:'전도금지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payPossibleAmt',name:'지급가능금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payYn',name:'지급여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_advancedLimit',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'limitAmt',name:'한도금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'caryFwrdRamt',name:'이월잔액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'결제원금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useAmt',name:'사용금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdRamt',name:'ADVCD_RAMT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPsblAmt',name:'REQ_PSBL_AMT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisPayAmt',name:'THIS_PAY_AMT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'요청금액',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveAdvancedLimit',action:'/ac.fm.paymgnt.advcdmgnt.RetrieveAdvancedPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition2","key":"IN_DS1"},{"id":"ds_advancedLimit","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_advancedLimit","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveAdvancedLimit_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveAdvanced',action:'/ac.fm.paymgnt.advcdmgnt.RetrieveAdvancedApplyContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_advanced","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_advanced","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveAdvanced_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveAdvanced',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_advanced","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveAdvanced_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.PAYMENTREQ = "01"; //지급요청  
scwin.PAYMENTADMIT = "02"; //지급승인  
scwin.PAYMENTCOMPLETE = "03"; //지급완료  
scwin.PAYMENTRFSL = "04"; //지급거부  

scwin.memJson = $c.data.getMemInfo($p);
scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.sAcctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
scwin.sAppDeptNm = $c.data.getMemInfo($p, "acctDeptNm");

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "FM034",
    compID: "gr_advanced:advcdPayStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
//-------------------------------------------------------------------------
// TOBE scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ed_stDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ed_endDt.setValue(scwin.g_sCurrDate);
  ed_appDept.setValue(scwin.sAcctDeptCd);
  ed_txt_appDeptNm.setValue(scwin.sAppDeptNm);
  ed_appAcctDeptCd.setValue(scwin.sAcctDeptCd);
  ed_txt_appAcctDeptNm.setValue(scwin.sAppDeptNm);
  scwin.f_disable(); // 수정불가

  scwin.f_LimitRetrieve();
};

//-------------------------------------------------------------------------
// 한도조회
//-------------------------------------------------------------------------
scwin.f_LimitRetrieve = function () {
  const params = {
    stDt: scwin.g_sCurrDate.substring(0, 6) + "01",
    endDt: scwin.g_sCurrDate.toDate().lastDate().format("YYYYMMDD"),
    appDept: ed_appDept.getValue()
  };

  //데이터셋에 정보설정
  ds_condition2.setJSON(params);
  $c.sbm.execute($p, sbm_retrieveAdvancedLimit);
};

//-------------------------------------------------------------------------
// 한도조회 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieveAdvancedLimit_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

  if (ds_advancedLimit.getRowCount() == 0) {
    ed_limitAmt.setValue(0);
    ed_reqAmt.setValue(0);
  } else {
    //한도금액, 요청가능금액 한도조회정보에 맞춰서 설정
    ds_advancedLimit.sort("advcdNo", 0); //[0,1,2] 정렬 옵션 (0: 오름차순, 1: 내림차순, 2: 정렬 취소)
    ed_limitAmt.setValue(ds_advancedLimit.getCellData(0, "limitAmt"));
    ed_reqAmt.setValue(ds_advancedLimit.getCellData(0, "reqAmt"));
  }
};

//-------------------------------------------------------------------------
// 데이타셋 enable 처리
//-------------------------------------------------------------------------
scwin.f_Enable = function (e) {
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableObjects($p, [ed_advcdNo, ed_txt_appAcctDeptNm, ed_admitAmt, ed_txt_appDeptNm]); //
  $c.gus.cfEnableObjects($p, [ed_appDt, ed_appAcctDeptCd, btn_appAcctDeptCd]); //
};

//-------------------------------------------------------------------------
// 데이타셋 disable 처리
//-------------------------------------------------------------------------
scwin.f_disable = function (e) {
  $c.gus.cfDisableKeyData($p);
  //$c.gus.cfDisableObjects([ed_limitAmt,ed_reqAmt,img_calendar,img_appAcctDeptCd]);//TODO 달력찾기, 부서찾기 클릭불가되도록 확인필요
  $c.gus.cfDisableObjects($p, [ed_limitAmt, ed_reqAmt, ed_appDt, btn_appAcctDeptCd]); //
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!$c.gus.cfIsAfterDate($p, ed_stDt.getValue(), ed_endDt.getValue())) {
    $c.win.alert($p, MSG_CM_ERR_039);
    return false;
    ;
  }
  let ret = await $c.gus.cfValidate($p, [ed_stDt, ed_appDept]);
  if (!ret) {
    return false;
  }
  let ret2 = await $c.gus.cfValidate($p, [ed_endDt]);
  if (!ret2) {
    return false;
  }
  if (ret && ret2) {
    const params = {
      scClsCd: 1,
      dtClsCd: 1
    };
    //데이터셋에 정보설정
    ds_condition.setJSON(params);
    ds_advanced.removeAll(); //데이터초기화
    $c.sbm.execute($p, sbm_retrieveAdvanced);
  }
};

//-------------------------------------------------------------------------
// 조회 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieveAdvanced_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

  tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_advanced.getRowCount()));
  if (ds_advanced.getRowCount() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
    $c.gus.cfDisableKeyData($p);
    scwin.f_disable();
    return false;
  } else {
    ds_advanced.sort("advcdNo", 0); //[0,1,2] 정렬 옵션 (0: 오름차순, 1: 내림차순, 2: 정렬 취소)
    $c.gus.cfGoPrevPosition($p, gr_advanced, 0);
    scwin.f_LimitRetrieve();
  }
};

//-------------------------------------------------------------------------
// 그리드 인덱스 정보가 변경시 
//-------------------------------------------------------------------------
scwin.gr_advanced_onrowindexchange = function (rowIndex, oldRow) {
  ds_advanced.setRowPosition(rowIndex);
  if (ds_advanced.getCellData(rowIndex, "advcdPayStsCd") != scwin.PAYMENTREQ) {
    if (!(ds_advanced.getCellData(rowIndex, "advcdPayStsCd") == null || ds_advanced.getCellData(rowIndex, "advcdPayStsCd") == "")) {
      scwin.f_disable();
    } else {
      scwin.f_Enable();
    }
  } else {
    scwin.f_Enable();
    scwin.sAcctDeptCd = ds_advanced.getCellData(rowIndex, "appAcctDeptCd");
    scwin.f_LimitRetrieve();
  }
};
//-------------------------------------------------------------------------
// 입력
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  try {
    let i = 0;
    let count = 0;
    //let ret = await $c.gus.cfValidate([gr_advanced]); TOBE 처리대체
    if (ds_advanced.getRowCount() > 0) {
      for (i = 0; i < ds_advanced.getRowCount(); i++) {
        count = count + 1;
        if (ds_advanced.getRowStatus(i) == "C") {
          if (ds_advanced.getCellData(i, "appAmt") == "0") {
            await $c.gus.cfAlertMsg($p, "전도금신청의 " + count + "번째 데이터에서 신청금액은(는)  1이상으로 입력하십시오.");
            ds_advanced.setRowPosition(i);
            $c.gus.cfGoPrevPosition($p, gr_advanced, i); // row 포지션이동
            return false;
          }
        }
      }
    }
    let row = $c.data.insertRow($p, $p.getComponentById("gr_advanced"));
    ds_advanced.setCellData(row, "appDt", scwin.g_sCurrDate);
    ds_advanced.setCellData(row, "appAcctDeptCd", scwin.sAcctDeptCd);
    ds_advanced.setCellData(row, "appAcctDeptNm", scwin.sAppDeptNm);
    ds_advanced.setCellData(row, "appAmt", 0);
    ds_advanced.setRowPosition(row);
    $c.gus.cfGoPrevPosition($p, gr_advanced, row); //포커스이동
    scwin.f_Enable();
  } catch (e) {
    console.log("f_AddRow : " + e);
  }
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = async function () {
  let sAdvcdPayStsCd = ds_advanced.getCellData(ds_advanced.getRowPosition(), "advcdPayStsCd");
  if (!(sAdvcdPayStsCd == null || sAdvcdPayStsCd == "")) {
    if (ds_advanced.getCellData(ds_advanced.getRowPosition(), "advcdPayStsCd") != scwin.PAYMENTREQ) {
      await $c.win.alert($p, "상태가 지급요청일 경우에만 삭제할 수 있습니다.");
      return false;
    } else {
      //추가등록정보는 삭제, 나머지는 상태값 삭제가 됨
      if (ds_advanced.getRowStatus(ds_advanced.getRowPosition()) == "C") {
        ds_advanced.removeRow(ds_advanced.getRowPosition());
      } else {
        let delRow1 = ds_advanced.getRowPosition();
        ds_advanced.deleteRow(ds_advanced.getRowPosition());
        $c.gus.cfGoPrevPosition($p, gr_advanced, delRow1);
      }
    }
  } else {
    //추가등록정보는 삭제, 나머지는 상태값 삭제가 됨
    if (ds_advanced.getRowStatus(ds_advanced.getRowPosition()) == "C") {
      ds_advanced.removeRow(ds_advanced.getRowPosition());
    } else {
      let delRow2 = ds_advanced.getRowPosition();
      ds_advanced.deleteRow(ds_advanced.getRowPosition());
      $c.gus.cfGoPrevPosition($p, gr_advanced, delRow2);
    }
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_UndoAll = function () {
  if (ds_advanced.getRowStatus(ds_advanced.getRowPosition()) == "C") {
    ds_advanced.removeRow(ds_advanced.getRowPosition());
  } else {
    $c.data.undoRow($p, ds_advanced, "Y");
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_advanced.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return false;
  } else {
    // 필수 입력 항목 중 빈 내용이 있다면
    let ret = await $c.gus.cfValidate($p, [ed_appAcctDeptCd, ed_appDt, ed_appAmt]);
    if (!ret) {
      return false;
    }
    if (ds_advanced.getRowStatus(ds_advanced.getRowPosition()) != "D") {
      let sAdvcdPayStsCd = ds_advanced.getCellData(ds_advanced.getRowPosition(), "advcdPayStsCd");
      if (!(sAdvcdPayStsCd == null || sAdvcdPayStsCd == "")) {
        if (ds_advanced.getCellData(ds_advanced.getRowPosition(), "advcdPayStsCd") != scwin.PAYMENTREQ) {
          await $c.win.alert($p, "상태가 지급요청일 경우에만 수정할 수 있습니다.");
          return false;
        }
      }
      if (ds_advanced.getCellData(ds_advanced.getRowPosition(), "appAmt") == null || ds_advanced.getCellData(ds_advanced.getRowPosition(), "appAmt") == 0) {
        await $c.win.alert($p, "신청금액은(는) 1 이상으로 입력하십시오."); //TOBE 메시지처리문구 상이하여 변경함. 
        //await $c.win.alert($c.data.getMessage(MSG_CM_ERR_057,"지급액", "0"));
        return false;
      }
      //TOBE parseInt추가
      if (parseInt(ed_reqAmt.getValue()) < parseInt(ds_advanced.getCellData(ds_advanced.getRowPosition(), "appAmt"))) {
        await $c.win.alert($p, "신청금액이 요청가능금액을 초과할 수 없습니다.");
        return false;
      }
    }
    let i = 0;
    for (i = 0; i < ds_advanced.getRowCount(); i++) {
      if (ds_advanced.getRowStatus(i) != "R" && ds_advanced.getRowStatus(i) != "D") {
        if (ds_advanced.getCellData(i, "appAmt") == "0") {
          await $c.gus.cfAlertMsg($p, "신청금액은(는)  1이상으로 입력하십시오.");
          ed_appAmt.focus();
          return false;
        }
      }
    }
    let ret2 = await $c.gus.cfValidate($p, [ed_appAmt]);
    let ret3 = await $c.gus.cfValidate($p, [ed_appDt]);
    if (ret2 && ret3) {
      if (await $c.win.confirm($p, "저장하시겠습니까?")) {
        sbm_saveAdvanced.action = "/ac.fm.paymgnt.advcdmgnt.SaveAdvancedApplyCMD.do";
        $c.sbm.execute($p, sbm_saveAdvanced);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 저장콜백
//-------------------------------------------------------------------------
scwin.sbm_saveAdvanced_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 신청일자 입력정보 체크
//-------------------------------------------------------------------------
scwin.ed_appDt_onblur = function (e) {
  if (ds_advanced.getRowStatus(ds_advanced.getRowPosition()) == "C") {
    if (ds_advanced.getCellData(ds_advanced.getRowPosition(), "appDt") < scwin.g_sCurrDate) {
      $c.win.alert($p, "신청일자는 현재일 이전일수 없습니다.");
      if (ds_advanced.getOriginalCellData(ds_advanced.getRowPosition(), "appDt") > scwin.g_sCurrDate) {
        ed_appDt.setValue(ds_advanced.getOriginalCellData(ds_advanced.getRowPosition(), "appDt"));
      } else {
        ed_appDt.setValue(scwin.g_sCurrDate);
      }
      return false;
    }
  }
};

//-------------------------------------------------------------------------
// 데이터셋 정보 변경시 ASIS : for=ds_advanced event=OnColumnChanged
//-------------------------------------------------------------------------
scwin.ds_advanced_oncelldatachange = async function (info) {
  try {
    let colid = info.colID;
    let row = info.rowIndex;
    if (colid == "appAmt") {
      if (ds_advanced.getCellData(row, colid) == null || ds_advanced.getCellData(row, colid) == 0) {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_057, "지급액", "0"));
        let i = 0;
        for (i = ds_advanced.getRowCount(); i >= 0; --i) {
          //상태가 신규인경우 데이터를 지우고 아닌경우 이전데이터로 돌아간다.
          if (ds_advanced.getRowStatus(i) == "C") {
            ds_advanced.removeRow(i);
          } else {
            ds_advanced.undoRow(i); //ds_advanced.UndoAll();
          }
        }
        return false;
      }
    }
  } catch (e) {
    console.log("ds_billRecvDue_oncelldatachange" + e);
  }
};

//-------------------------------------------------------------------------
// 부서코드
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_appDept, ed_txt_appDeptNm, '1', 'S');
};

//-------------------------------------------------------------------------
// 부서코드찾기
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_appDept, ed_txt_appDeptNm, 'F', 'S');
};

//-------------------------------------------------------------------------
// 부서코드(입력/수정)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdIn_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_appAcctDeptCd, ed_txt_appAcctDeptNm, '1', 'I');
};

//-------------------------------------------------------------------------
// 부서코드찾기(입력/수정)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdIn_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_appAcctDeptCd, ed_txt_appAcctDeptNm, 'F', 'I');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// TODO flag값으로 조회정보, 입력정보를 구분한다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  try {
    if (orgObjCd.getValue() != orgObjCd.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, "T", flag);
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
      orgObjCd.hidVal = "";
    }
  } catch (e) {
    console.log("f_CheckPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (select_code, txtCode, txtName, sPopupCls, flag) {
  try {
    let code = '';
    let name = '';
    let param = '';
    let callBackFuncInf = "";
    code = txtCode.getValue();
    if (txtName == null) {
      name = "";
    } else {
      name = txtName.getValue();
    }
    switch (select_code) {
      // 부서 PopUp 호출
      case '1':
        udc_acctDeptCd.setSelectId('retrieveAcctDeptCdInfo');
        //rtnList = cfCommonPopUp(sCmdName,code,name,sPopupCls,null,null,null,null,null,null,null,null,null,null,null,null,null); // 관리부서
        if (flag == "S") {
          //조회부 팝업 (콜백이 변수처리 되지않아 if로 분기)
          udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc // 콜백 함수
          , code // 화면에서의  Code Element의 Value
          , name // 화면에서의  Name Element의 Value
          , sPopupCls // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
          , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
          , null // Title순서
          , null // 보여주는 각 컬럼들의 폭
          , null // 컬럼중에서 숨기는 컬럼 지정
          , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
          , null // POP-UP뛰을때 원도우의 사용자 정의 폭
          , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
          , null // 윈도우 위치 Y좌표
          , null // 윈도우 위치 X좌표
          , null // 중복체크여부	("F")
          , null // 전체검색허용여부	("F")
          , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
          );
          break;
        } else if (flag == "I") {
          //입력부팝업    
          udc_acctDeptCdIn.setSelectId('retrieveAcctDeptCdInfo');
          udc_acctDeptCdIn.cfCommonPopUp(scwin.udc_acctDeptCdIn_callBackFunc // 콜백 함수
          , code // 화면에서의  Code Element의 Value
          , name // 화면에서의  Name Element의 Value
          , sPopupCls // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
          , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
          , null // Title순서
          , null // 보여주는 각 컬럼들의 폭
          , null // 컬럼중에서 숨기는 컬럼 지정
          , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
          , null // POP-UP뛰을때 원도우의 사용자 정의 폭
          , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
          , null // 윈도우 위치 Y좌표
          , null // 윈도우 위치 X좌표
          , null // 중복체크여부	("F")
          , null // 전체검색허용여부	("F")
          , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
          );
          break;
        }
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 부서 PopUp 콜백 (조회부)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_appDept.setValue(rtnList[0]); // 코드값
      ed_txt_appDeptNm.setValue(rtnList[1]); // 코드명
      ed_appDept.hidVal = rtnList[0]; // HIDDEN 코드값
    } else {
      ed_appDept.setValue("");
      ed_txt_appDeptNm.setValue("");
      ed_appDept.hidVal = "";
    }
  } catch (e) {
    console.log("udc_acctDeptCd_callBackFunc " + e);
  }
};

//-------------------------------------------------------------------------
// 부서 PopUp 콜백 (입력부)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdIn_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_appAcctDeptCd.setValue(rtnList[0]); // 코드값
      ed_txt_appAcctDeptNm.setValue(rtnList[1]); // 코드명
      ed_appAcctDeptCd.hidVal = rtnList[0]; // HIDDEN 코드값
      scwin.f_LimitRetrieve();
    } else {
      ed_appAcctDeptCd.setValue("");
      ed_txt_appAcctDeptNm.setValue("");
      ed_appAcctDeptCd.hidVal = "";
    }
  } catch (e) {
    console.log("udc_acctDeptCd_callBackFunc " + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_appDept',nameId:'ed_txt_appDeptNm',maxlengthCode:'5',allowCharCode:'0-9',code:'appDept',selectID:'retrieveAcctDeptCdInfo',id:'udc_acctDeptCd',validTitle:'신청부서','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',mandatoryName:'true',mandatoryCode:'true',refDataCollection:'ds_condition',btnId:'btn_appAcctDeptCdS',objTypeName:'data',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'stDt',refDataMap:'ds_condition',style:'',id:'udc_fromToCalendar1',refEdDt:'endDt',mandatoryFrom:'true',edFromId:'ed_stDt',edToId:'ed_endDt',titleFrom:'신청일자',titleTo:'신청일자',mandatoryTo:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_group1',style:'',gridUpYn:'N',id:'udc_topGrd',gridID:'gr_advanced',gridDownFn:'scwin.f_Excel',gridDownYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_advanced',id:'gr_advanced',style:'',visibleRowNum:'15',visibleRowNumFix:'true',resize:'true',columnMove:'true',sortable:'true',readOnly:'true','ev:onrowindexchange':'scwin.gr_advanced_onrowindexchange',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'신청번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'신청일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'진행상태',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'신청금액',width:'100',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'appDt',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdPayStsCd',inputType:'select',style:'',value:'',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'appAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddFunction:'scwin.f_AddRow',cancelFunctoion:'scwin.f_UndoAll',btnDelYn:'N',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',id:'udc_gridAddDel',cancelFunction:'scwin.f_UndoAll',rowDelFunction:'scwin.f_DeleteRow'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_advcdNo',style:'width:150px;',title:'신청번호',allowChar:'0-9',maxlength:'10',objType:'data',ref:'data:ds_advanced.advcdNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_appAcctDeptCd',nameId:'ed_txt_appAcctDeptNm',maxlengthCode:'5',allowCharCode:'0-9',code:'appAcctDeptCd',selectID:'retrieveAcctDeptCdInfo',id:'udc_acctDeptCdIn',validTitle:'신청부서','ev:onblurCodeEvent':'scwin.udc_acctDeptCdIn_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCdIn_onclickEvent',mandatoryName:'true',mandatoryCode:'true',maxlengthName:'20',refDataCollection:'ds_advanced',name:'appAcctDeptNm',objTypeCode:'data',objTypeName:'data',btnId:'btn_appAcctDeptCd',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_appDt',style:'',objType:'data',mandatory:'true',title:'신청일자','ev:onblur':'scwin.ed_appDt_onblur',ref:'data:ds_advanced.appDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_appAmt',style:'width:150px;',objType:'data',mandatory:'true',title:'신청금액',minNumber:'1',maxlength:'13',allowChar:'0-9',ref:'data:ds_advanced.appAmt',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_admitAmt',style:'width:150px;',objType:'data',allowChar:'0-9',displayFormat:'#,##0',dataType:'number',ref:'data:ds_advanced.admitAmt',title:'승인금액'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'한도금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_limitAmt',style:'width:250px;',mandatory:'true',title:'한도금액',minNumber:'1',maxlength:'13',allowChar:'0-9',displayFormat:'#,###',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청가능금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'ed_reqAmt',style:'width:250px;',mandatory:'true',title:'요청가능금액',minNumber:'1',maxlength:'13',allowChar:'0-9',displayFormat:'#,###',dataType:'number'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger3',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})