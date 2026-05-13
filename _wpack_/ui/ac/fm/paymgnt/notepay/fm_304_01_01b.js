/*amd /ui/ac/fm/paymgnt/notepay/fm_304_01_01b.xml 29479 1e6b26e4ba545dedd8f0094c37a3b3e56f912809f5b6ea91fa556a4d01cc53ab */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankcd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCdNm',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_grid_draftCheckClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_draft','ev:onmodelchange':'scwin.dma_draft_onmodelchange'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'draftCheckClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'recDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'startNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cnt',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prefixStart',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftCheckNo',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'draftCheckClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prtBank',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'recDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'recStDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'recEndDt',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dueStDt',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dueEndDt',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftCheckNo',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftStsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dueSlipNo',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftCheckNoFrom',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftCheckNoTo',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_draft1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfDraftStsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftStsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'issueBankCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'issueBankNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recDt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtDt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'disuseDt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckAmt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueSlipNo',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueSlipSeq',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckDesc',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refDraftCheckNo',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cumulDraftAmt',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name29',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_bankcd_Retrieve',action:'/ac.fm.stdinfomgnt.RetrieveBankCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_bankcd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDraft',action:'/ac.fm.paymgnt.notepay.RetrieveDraftCheckContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_draft1","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_draft1","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_createDraft',action:'/ac.fm.paymgnt.notepay.RegistDraftCheckNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_draft","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteDraft',action:'/ac.fm.paymgnt.notepay.DeleteDraftCheckNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"deleted","id":"ds_draft1","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.comboRtnFlag01;
scwin.comboRtnFlag02;
scwin.interval01;
scwin.udc_objNm;
scwin.onpageload = function () {
  //전역변수값 셋팅함수.
  scwin.initSetVal();
  const codeOptions1 = [{
    grpCd: "FM012",
    compID: "lc_draft_check_cls_cd"
  },
  //구분 코드셋팅처리. 
  {
    grpCd: "FM013",
    compID: "gr_draft:draftStsCd"
  } //그리드의 상태 코드셋팅처리. 
  ];
  $c.data.setCommonCode($p, codeOptions1, scwin.commonCodeCallBack01);

  /* scwin.interval01 = setInterval(async function() {
       if(scwin.comboRtnFlag01 == true) {
           clearInterval(scwin.interval01);
           //초기화
          await scwin.initOnload();
       }
   }, 300);*/
};
scwin.initSetVal = function () {};

//udc 컴포넌트 onload 완료시...
scwin.onUdcCompleted = async function () {
  ed_srchbankCd.bind("onblur", function (e) {
    scwin.udc_srchBank_onblurCodeEvent();
  });
  ed_bankCd.bind("onblur", function (e) {
    scwin.udc_bank_onblurCodeEvent();
  });
};
scwin.commonCodeCallBack01 = function () {
  let ds_obj = $p.getComponentById(lc_draft_check_cls_cd.getDataListInfo().id);
  for (var i = 0; i < ds_obj.getRowCount(); i++) {
    ds_grid_draftCheckClsCd.insertRow(i);
    ds_grid_draftCheckClsCd.setCellData(i, "cd", ds_obj.getCellData(i, "cd"));
    ds_grid_draftCheckClsCd.setCellData(i, "cdNm", ds_obj.getCellData(i, "cdNm"));
  }
  ds_obj.setColumnFilter({
    type: 'regExp',
    colIndex: 'fltrCd1',
    key: /10/gi,
    condition: 'and'
  });
  scwin.comboRtnFlag01 = true;
  scwin.initOnload();
};
scwin.initOnload = async function () {
  await scwin.f_bankcd_Retrieve();
  $c.gus.cfDisableKeyData($p);
  ica_srchrecDt.focus();

  //구분 component 비활성화.
  if (lc_draft_check_cls_cd.getValue() == "") {
    lc_draft_check_cls_cd.setSelectedIndex(-1);
  }
  lc_draft_check_cls_cd.setDisabled(true);

  //수취일자 component 비활성화.
  ica_recDt.setDisabled(true);

  //수취은행 component 비활성화.
  ed_bankCd.setDisabled(true);
  btn_bank.setDisabled(true);
  ed_bankNm.setDisabled(true);

  //시작번호 component 비활성화.
  ed_prefix_start.setDisabled(true);
  ed_startNo.setDisabled(true);

  //매수 component 비활성화.
  ed_sheets.setDisabled(true);

  //종료번호 component 비활성화.
  ed_prefixend.setDisabled(true);
  ed_endNo.setDisabled(true);
};

//-------------------------------------------------------------------------
// 신규 : 신규입력화면으로 초기화한다.
//-------------------------------------------------------------------------
scwin.f_Create = async function () {
  $c.gus.cfTurnCreateFlag($p, true);
  ed_prefixend.setValue("");
  ed_bankNm.setValue("");
  lc_draft_check_cls_cd.setValue("01");
  lc_draft_check_cls_cd.setDisabled(false);
  ica_recDt.setValue(dma_condition.get("recStDt"));
  ed_endNo.setDisabled(true);
  ed_prefixend.setDisabled(true);
  ed_bankNm.setDisabled(true);
  ed_bankCd.setDisabled(false);
  btn_bank.setDisabled(false);
  ica_recDt.setDisabled(false);
  ed_prefix_start.setDisabled(false);
  ed_startNo.setDisabled(false);
  ed_sheets.setDisabled(false);
  ed_startNo.setValue("0");
  ed_sheets.setValue("0");
  ed_endNo.setValue("0");
  lc_draft_check_cls_cd.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  dma_condition.set("scClsCd", "2");

  //submit 처리.
  let objSubmit = await $c.sbm.execute($p, sbm_retrieveDraft);
  if (objSubmit.responseJSON.resultDataSet[0].Msg == "SUCC") {
    await scwin.sbm_retrieveDraft_submitdone();
  }
};
scwin.sbm_retrieveDraft_submitdone = async function (e) {
  tbx_totalRows.setValue(ds_draft1.getRowCount());
  if (ds_draft1.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }

  //$c.gus.cfDisableKeyData();
  await scwin.initOnload();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_bankcd_Retrieve = async function () {
  //submit 처리.
  let objSubmit = await $c.sbm.execute($p, sbm_bankcd_Retrieve);
  if (objSubmit.responseJSON.resultDataSet[0].Msg == "SUCC") {
    await scwin.sbm_bankcd_Retrieve_submitdone();
  }
};
scwin.sbm_bankcd_Retrieve_submitdone = async function (e) {};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (callObj, select_code, txtCode, txtName, sPopupCls) {
  var rtnList = null;
  var sCmdName = "";
  var code = txtCode.getValue();
  var name;
  if (txtName == null) {
    name = "";
  } else {
    name = txtName.getValue();
  }
  txtCode.setValue("");
  txtName.setValue("");
  scwin.udc_objNm = callObj.org_id;
  switch (select_code) {
    // 은행 PopUp 호출
    case '1':
      sCmdName = "retrieveBankInfo";
      callObj.setSelectId(sCmdName);
      await callObj.cfCommonPopUp(scwin.udc_AllInOne_callBackFunc, code, name, sPopupCls, null, null, null, null, null, null, null, null, null); // 차입기관
      break;
    // 차입번호 PopUp 호출
    case '2':
      sCmdName = "retrieveBorrLedgNoInfo";
      callObj.setSelectId(sCmdName);
      await callObj.cfCommonPopUp(scwin.udc_AllInOne_callBackFunc, code, name, sPopupCls, null, null, null, null, null, null, null, null, null); // 차입번호

      break;
  }
};
scwin.udc_AllInOne_callBackFunc = function (rtnList) {
  let codeObj;
  let nameObj;
  if (scwin.udc_objNm == "udc_srchBank") {
    codeObj = ed_srchbankCd;
    nameObj = ed_srchBankNm;
  } else if (scwin.udc_objNm == "udc_bank") {
    codeObj = ed_bankCd;
    nameObj = ed_bankNm;
  }
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    codeObj.setValue(rtnList[0]); // 코드

    if (nameObj != null) {
      nameObj.setValue(rtnList[1]); // 코드명
    }
    //codeObj.hidVal = rtnList[0]; // 코드
  } else {
    codeObj.setValue(""); // 코드
    nameObj.setValue(""); // 코드명
    //codeObj.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = async function (callObj, orgObjCd, orgObjNm, select_code) {
  /*
  if (orgObjCd.Text != orgObjCd.hidVal){
      orgObjNm.value = "";
  }
  */

  orgObjNm.setValue("");
  if (orgObjCd.getValue().trim() != "") {
    await scwin.f_openPopUp(callObj, select_code, orgObjCd, orgObjNm, 'T');
  } else {
    if (!orgObjNm == null) {
      orgObjNm.setValue("");
    }
    orgObjCd.setValue("");
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let ret1;
  let ret2;
  let ret3;
  let ret4;
  var msgStr = "";
  var bRtn = false;
  if (dma_draft.getModifiedIndex().length == 0) {
    await $c.win.alert($p, MSG_CM_ERR_001.replace("%1", "자료"));
  } else {
    ret1 = true;
    if (ed_startNo.getValue() == undefined || ed_startNo.getValue() == null || ed_startNo.getValue() == "") {
      ret1 = false;
      msgStr = "시작번호은(는) 필수 입력 항목입니다.";
    } else if (Number(ed_startNo.getValue()) == 0) {
      ret1 = false;
      msgStr = "시작번호은(는) 1 이상으로 입력하십시오.";
    }
    if (ret1) {
      ret2 = true;
      if (ed_sheets.getValue() == undefined || ed_sheets.getValue() == null || ed_sheets.getValue() == "") {
        ret2 = false;
        msgStr = "매수은(는) 필수 입력 항목입니다.";
      } else if (Number(ed_sheets.getValue()) == 0) {
        ret2 = false;
        msgStr = "매수은(는) 1 이상으로 입력하십시오.";
      }
      if (ret2) {
        ret3 = await $c.gus.cfValidate($p, [ed_bankCd]);
        if (ret3) {
          ret4 = await $c.gus.cfValidate($p, [ica_recDt]);
          if (ret4) {
            bRtn = true;
          }
        }
      } else {
        await $c.gus.cfAlertMsg($p, msgStr);
        ed_sheets.focus();
      }
    } else {
      await $c.gus.cfAlertMsg($p, msgStr);
      ed_startNo.focus();
    }
    if (bRtn) {
      let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
      if (confirmResult) {
        //submit 처리.
        let objSubmit = await $c.sbm.execute($p, sbm_createDraft);
        if (objSubmit.responseJSON.resultDataSet[0].Msg == "SUCC") {
          await scwin.sbm_createDraft_submitdone();
        }
      }
    }
  }
};
scwin.sbm_createDraft_submitdone = async function (e) {
  await $c.win.alert($p, MSG_CM_INF_001);
  ica_srchrecDt.setValue(dma_draft.get("recDt"));
  ed_srchbankCd.setValue(dma_draft.get("bankCd"));
  dma_draft.set("draftCheckClsCd", "");
  dma_draft.set("recDt", "");
  dma_draft.set("bankCd", "");
  dma_draft.set("startNo", "");
  dma_draft.set("cnt", "");
  dma_draft.set("endNo", "");
  dma_draft.set("prefixStart", "");
  dma_draft.set("draftCheckNo", "");
  await scwin.f_CheckPopUp(udc_srchBank, ed_srchbankCd, ed_srchBankNm, '1');
  await scwin.f_Create();
  await scwin.f_Retrieve();
  //cfDisableKeyData();
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  var nRow = 0;
  if (ds_draft1.getRowCount() <= 0) {
    await $c.win.alert($p, MSG_CM_WRN_004.replace("%1", "자료"));
  } else {
    for (nRow = 0; nRow < ds_draft1.getRowCount(); nRow++) {
      if (ds_draft1.getCellData(nRow, "draftStsCd") != "01") {
        await $c.win.alert($p, "상태가 수취가 아닐 경우는 삭제할 수 없습니다.");
        return false;
      }
    }
    let ret = await $c.gus.cfValidate($p, [gr_draft]);
    if (ret) {
      let rtn2 = await $c.win.confirm($p, MSG_CM_CRM_004);
      if (rtn2) {
        ds_draft1.removeAll();

        //submit 처리.
        let objSubmit = await $c.sbm.execute($p, sbm_deleteDraft);
        if (objSubmit.responseJSON.resultDataSet[0].Msg == "SUCC") {
          await scwin.sbm_deleteDraft_submitdone();
        }
      }
    }
  }
};
scwin.sbm_deleteDraft_submitdone = async function (e) {
  await $c.win.alert($p, MSG_CM_INF_004);
};

//수취은행 코드 focus out 시
scwin.udc_srchBank_onblurCodeEvent = async function (e) {
  await scwin.f_CheckPopUp(udc_srchBank, ed_srchbankCd, ed_srchBankNm, '1');
};

//수취은행 돋보기 버튼 클릭시
scwin.udc_srchBank_onclickEvent = async function (e) {
  await scwin.f_openPopUp(udc_srchBank, '1', ed_srchbankCd, ed_srchBankNm, 'T');
};

//수취은행 코드 focus out 시
scwin.udc_bank_onblurCodeEvent = async function (e) {
  await scwin.f_CheckPopUp(udc_bank, ed_bankCd, ed_bankNm, '1');
};

//수취은행 돋보기 버튼 클릭시
scwin.udc_bank_onclickEvent = async function (e) {
  await scwin.f_openPopUp(udc_bank, '1', ed_bankCd, ed_bankNm, 'F');
};
scwin.dma_draft_onmodelchange = function (info) {
  var nSheets = 0;
  var nStartno = 0;

  //매수 comp 이거나 시작번호 두번째 comp
  if (info.key == "cnt" || info.key == "startNo") {
    nSheets = Number(dma_draft.get("cnt"));
    if (nSheets > 0) {
      nSheets = nSheets - 1;
    }
    nStartno = Number(dma_draft.get("startNo"));
    ed_endNo.setValue($c.gus.cfGetLeftPad($p, nSheets + nStartno, 8, "0"));
  }
  //시작번호 첫번째 comp
  else if (info.key == "prefixStart") {
    ed_prefixend.setValue(dma_draft.get("prefixStart"));
  }
};
scwin.tbx_totalRows_onclick = function (e) {
  debugger;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수취일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_srchrecDt',style:'',displayFormat:'yyyy/MM/dd',ref:'data:dma_condition.recDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수취은행 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_srchbankCd',validTitle:'',nameId:'ed_srchBankNm',style:'',id:'udc_srchBank','ev:onblurCodeEvent':'scwin.udc_srchBank_onblurCodeEvent',btnId:'btn_srchbank','ev:onclickEvent':'scwin.udc_srchBank_onclickEvent',code:'prtBank',refDataCollection:'dma_condition',maxlengthCode:'6',allowCharCode:'0-9'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_draft1',focusMode:'row',id:'gr_draft',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'구분',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'수취일자',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'어음수표번호',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'수취은행',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'상태',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'발행일',width:'100',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'draftCheckClsCd',inputType:'select',removeBorderStyle:'false',width:'70',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_grid_draftCheckClsCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'recDt',inputType:'text',removeBorderStyle:'false',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'draftCheckNo',inputType:'text',removeBorderStyle:'false',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'issueBankNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'draftStsCd',inputType:'select',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prtDt',inputType:'text',style:'',value:'',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span','ev:onclick':'scwin.tbx_totalRows_onclick'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_draft_check_cls_cd',style:'width: 150px;',submenuSize:'fixed',mandatory:'true',displayMode:'label',emptyItem:'true',ref:'data:dma_draft.draftCheckClsCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수취일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_recDt',style:'',mandatory:'true',displayFormat:'yyyy/MM/dd',ref:'data:dma_draft.recDt',title:'수취일자'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수취은행',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_bankCd',nameId:'ed_bankNm',popupID:'',selectID:'',style:'',validTitle:'수취은행',mandatoryCode:'true',id:'udc_bank',btnId:'btn_bank',validExpCode:'수취은행:yes:length=6',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_bank_onclickEvent',code:'bankCd',refDataCollection:'dma_draft',maxlengthCode:'6',allowCharCode:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'시작번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_prefix_start',class:'',mandatory:'true',ref:'data:dma_draft.prefixStart'}},{T:1,N:'xf:input',A:{style:';text-align:right;',id:'ed_startNo',class:'',mandatory:'true',maxByteLength:'8',dataType:'number',ref:'data:dma_draft.startNo',title:'시작번호'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_sheets',style:';text-align:right;',mandatory:'true',maxByteLength:'5',dataType:'number',displayFormat:'#,###',ref:'data:dma_draft.cnt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'종료번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_prefixend',style:'width: 150px;'}},{T:1,N:'xf:input',A:{class:'',id:'ed_endNo',style:';text-align:right;',maxByteLength:'8',dataType:'number',ref:'data:dma_draft.endNo'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_new',style:'',type:'button','ev:onclick':'scwin.f_Create'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_del',style:'',type:'button','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})