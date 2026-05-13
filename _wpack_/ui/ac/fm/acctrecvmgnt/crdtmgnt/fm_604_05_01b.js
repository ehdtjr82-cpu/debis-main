/*amd /ui/ac/fm/acctrecvmgnt/crdtmgnt/fm_604_05_01b.xml 28475 e4c2391f2a5ef89e033456eda07f3dfb94e0767bcb7de378e1fbad6822907188 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_pldgNoSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDept',name:'등록부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'등록자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_pldgNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'pldgNo',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDt',name:'등록부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDept',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDeptNm',name:'등록자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key5',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'busiNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pldgPattern',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crdtLimit',name:'여신한도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'jdgEstmtAmt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedCollatSetupAmt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deposit',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rdeposit',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'depositLimit',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tmnYn',name:'',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_pldgNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pldgNo',name:'담보번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDt',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDept',name:'등록부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'법인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgPattern',name:'담보유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jdgEstmtAmt',name:'감정평가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crdtLimit',name:'여신한도금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedCollatSetupAmt',name:'근저당설정액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deposit',name:'보증금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rdeposit',name:'질권금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'depositLimit',name:'보증한도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sdeposit',name:'매출채권;신용보험',dataType:'text'}},{T:1,N:'w2:column',A:{id:'edeposit',name:'기타담보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmnYn',name:'해지여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmnDt',name:'해지일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name27',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_pldgNoSearch","key":"IN_DS1"},{"id":"ds_pldgNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_pldgNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.pldgNo = "";
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FM090",
    compID: "gr_pldgNo:pldgPattern"
  }];
  $c.data.setCommonCode($p, codeOptions);
  tac_tabControl1.activateTab(0);
};
scwin.onUdcCompleted = async function () {};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->사업자번호 , 2:조회->등록부서, 3:조회->등록자
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  // let rtnList = new Array();

  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  // flag:SKIP일경우는 Tag에 대한 속성 검사를 하지 않는다.
  if (flag != "SKIP") {
    cd = orgObjCd.getValue();
    nm = orgObjNm.getValue();
  } else {
    cd = orgObjCd;
    nm = "";
  }
  switch (select_code) {
    // 조회조건용 사업자번호 PopUp 호출
    case '1':
      rtnList = udc_crnInfo.cfCommonPopUp(scwin.udc_crnInfo_callBackFunc, cd, nm, "T", null, null, null, null, null, null, null, null, null); // 사업자번호
      // scwin.f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      break;
    // 조회조건용 등록부서 PopUp 호출
    case '2':
      rtnList = udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, cd, nm, "T", null, null, null, null, ",,,0", "450", "500", null, null); // 귀속부서			
      // scwin.f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      break;
    // 조회조건용 등록자 PopUp 호출
    case '3':
      rtnList = udc_empDeptClntInfo.cfCommonPopUp(scwin.udc_empDeptClntInfo_callBackFunc, cd, nm, "T", null, null, null, null, ",,,0", "450", "500", null, null); // 등록자			
      // scwin.f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      break;
    default:
      await $c.win.alert($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_crnInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_crn.setValue(rtnList[0]);
    ed_busiNm.setValue(rtnList[1]);
    ed_crn.options.hidVal = rtnList[0];
    ed_busiNm.options.hidVal = rtnList[1];
  } else {
    ed_crn.setValue("");
    ed_busiNm.setValue("");
    ed_crn.options.hidVal = "";
    ed_busiNm.options.hidVal = "";
  }
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_regDept.setValue(rtnList[0]);
    ed_regDeptNm.setValue(rtnList[1]);
    ed_regDept.options.hidVal = rtnList[0];
    ed_regDeptNm.options.hidVal = rtnList[1];
  } else {
    ed_regDept.setValue("");
    ed_regDeptNm.setValue("");
    ed_regDept.options.hidVal = "";
    ed_regDeptNm.options.hidVal = "";
  }
};
scwin.udc_empDeptClntInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_reg.setValue(rtnList[0]);
    ed_regNm.setValue(rtnList[1]);
    ed_reg.options.hidVal = rtnList[0];
    ed_regNm.options.hidVal = rtnList[1];
  } else {
    ed_reg.setValue("");
    ed_regNm.setValue("");
    ed_reg.options.hidVal = "";
    ed_regNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.options.hidVal) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.options.hidVal) {
      return;
    } else {
      orgObjCd.setValue("");
    }
  }
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjNm.getValue().trim() != "" || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, table1, null);
  $c.gus.cfInitHidVal($p, table1);
  // ed_stdDt.setValue(dateStr); // 검색조건 - 현재일자

  // 초기 포커스 이동
  // ed_stdDt.focus();
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------

scwin.f_Retrieve = async function () {
  // if(! await $c.gus.cfValidate([ed_crn])){
  // return;
  // }
  sbm_retrieve.action = "/ac.fm.acctrecvmgnt.crdtmgnt.RetrievePledgeListCMD.do";
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, table1, null);
  //scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// 엑셀 Download
//-------------------------------------------------------------------------
scwin.f_Export = async function () {
  let fileName = '담보현황조회';
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_pldgNo, {
      fileName: fileName + ".xlsx",
      sheetName: fileName
    });
  }
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------

scwin.udc_crnInfo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_crn, ed_busiNm, '1', 'ALL');
};
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_regDept, ed_regDeptNm, '2', 'ALL');
};
scwin.udc_empDeptClntInfo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_reg, ed_regNm, '3', 'ALL');
};
scwin.udc_crnInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_busiNm, '1', 'CD');
};
scwin.udc_crnInfo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_busiNm, '1', 'NM');
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_regDept, ed_regDeptNm, '2', 'CD');
};
scwin.udc_acctDeptCdInfo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_regDept, ed_regDeptNm, '2', 'NM');
};
scwin.udc_empDeptClntInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_reg, ed_regNm, '3', 'CD');
};
scwin.udc_empDeptClntInfo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_reg, ed_regNm, '3', 'NM');
};
scwin.gr_pldgNo_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "pldgPattern") {
    scwin.pldgNo = ds_pldgNo.getCellData(rowIndex, "pldgNo");
    if (ds_pldgNo.getCellData(rowIndex, "pldgPattern") == "01") {
      await tac_tabControl1.setSelectedTabIndex(0);
      if (tac_tabControl1.getWindow(1).ds_GuarantyInsurance.getRowCount() > 0) {
        tac_tabControl1.getWindow(1).ds_GuarantyInsurance.removeAll();
      }
      if (tac_tabControl1.getWindow(2).ds_saleCreditInfo.getRowCount() > 0) {
        tac_tabControl1.getWindow(2).ds_saleCreditInfo.removeAll();
      }
      if (tac_tabControl1.getWindow(3).ds_etcCreditInfo.getRowCount() > 0) {
        tac_tabControl1.getWindow(3).ds_etcCreditInfo.removeAll();
      }
      // iFrame0.setPldgNo(ds_pldgNo.getCellData(columnIndex, "pldgNo"));
      // iFrame1.ds_GuarantyInsurance.deleteAll();
      // iFrame2.ds_saleCreditInfo.deleteAll();
      // iFrame3.ds_etcCreditInfo.deleteAll();
      tac_tabControl1.getWindow(0).scwin.setPldgNo(scwin.pldgNo);
    }
    if (ds_pldgNo.getCellData(rowIndex, "pldgPattern") == "02") {
      await tac_tabControl1.setSelectedTabIndex(1);
      if (tac_tabControl1.getWindow(0).ds_Realest.getRowCount() > 0) {
        tac_tabControl1.getWindow(0).ds_Realest.removeAll();
      }
      if (tac_tabControl1.getWindow(2).ds_saleCreditInfo.getRowCount() > 0) {
        tac_tabControl1.getWindow(2).ds_saleCreditInfo.removeAll();
      }
      if (tac_tabControl1.getWindow(3).ds_etcCreditInfo.getRowCount() > 0) {
        tac_tabControl1.getWindow(3).ds_etcCreditInfo.removeAll();
      }
      // tac_tabControl1.getWindow(1).ds_GuarantyInsurance.removeAll();
      // iFrame0.ds_Realest.deleteAll();
      // iFrame1.setPldgNo(ds_pldgNo.getCellData(columnIndex, "pldgNo"));
      // iFrame2.ds_saleCreditInfo.deleteAll();
      // iFrame3.ds_etcCreditInfo.deleteAll();

      // if(ds_pldgNo.getRowStatus(rowIndex) == 'C' | ds_pldgNo.getRowStatus(rowIndex) == 'U'){
      //     tac_tabControl1.getWindow(1).scwin.fn_Update();
      // }
      tac_tabControl1.getWindow(1).scwin.setPldgNo(scwin.pldgNo);
    }
    if (ds_pldgNo.getCellData(rowIndex, "pldgPattern") == "05") {
      await tac_tabControl1.setSelectedTabIndex(2);
      if (tac_tabControl1.getWindow(0).ds_Realest.getRowCount() > 0) {
        tac_tabControl1.getWindow(0).ds_Realest.removeAll();
      }
      if (tac_tabControl1.getWindow(1).ds_GuarantyInsurance.getRowCount() > 0) {
        tac_tabControl1.getWindow(1).ds_GuarantyInsurance.removeAll();
      }
      if (tac_tabControl1.getWindow(3).ds_etcCreditInfo.getRowCount() > 0) {
        tac_tabControl1.getWindow(3).ds_etcCreditInfo.removeAll();
      }
      // iFrame0.ds_Realest.deleteAll();
      // iFrame1.ds_GuarantyInsurance.deleteAll();
      // iFrame2.setPldgNo(ds_pldgNo.getCellData(columnIndex, "pldgNo"));
      // iFrame3.ds_etcCreditInfo.deleteAll();
      tac_tabControl1.getWindow(2).scwin.setPldgNo(scwin.pldgNo);
    }
    if (ds_pldgNo.getCellData(rowIndex, "pldgPattern") == "06") {
      await tac_tabControl1.setSelectedTabIndex(3);
      if (tac_tabControl1.getWindow(0).ds_Realest.getRowCount() > 0) {
        tac_tabControl1.getWindow(0).ds_Realest.removeAll();
      }
      if (tac_tabControl1.getWindow(1).ds_GuarantyInsurance.getRowCount() > 0) {
        tac_tabControl1.getWindow(1).ds_GuarantyInsurance.removeAll();
      }
      if (tac_tabControl1.getWindow(2).ds_saleCreditInfo.getRowCount() > 0) {
        tac_tabControl1.getWindow(2).ds_saleCreditInfo.removeAll();
      }
      // iFrame0.ds_Realest.deleteAll();
      // iFrame1.ds_GuarantyInsurance.deleteAll();
      // iFrame2.ds_saleCreditInfo.deleteAll();
      // iFrame3.setPldgNo(ds_pldgNo.getCellData(columnIndex, "pldgNo"));
      tac_tabControl1.getWindow(3).scwin.setPldgNo(scwin.pldgNo); // 수정필요
    }
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;

  // tac_tabControl1.getWindow(0).btnCreate.setDisabled(false);
  // tac_tabControl1.getWindow(0).btnUpdate.setDisabled(false);
  // tac_tabControl1.getWindow(0).btn_save.setDisabled(false);

  // tac_tabControl1.getWindow(1).btnCreate.setDisabled(false);
  // tac_tabControl1.getWindow(1).btnUpdate.setDisabled(false);
  // tac_tabControl1.getWindow(1).btn_save.setDisabled(false);

  // tac_tabControl1.getWindow(2).btnCreate.setDisabled(false);
  // tac_tabControl1.getWindow(2).btnUpdate.setDisabled(false);
  // tac_tabControl1.getWindow(2).btn_save.setDisabled(false);

  // tac_tabControl1.getWindow(3).btnCreate.setDisabled(false);
  // tac_tabControl1.getWindow(3).btnUpdate.setDisabled(false);
  // tac_tabControl1.getWindow(3).btn_save.setDisabled(false);

  gr_pldgNo.setFocusedCell(0, 0);
  let rowCnt = ds_pldgNo.getRowCount();
  totalRows.setValue(rowCnt);
  let pattern = ds_pldgNo.getCellData(0, "pldgPattern");
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
  }
  if (rowCnt != 0) {
    if (pattern != "") {
      if (pattern == "01") {
        scwin.pldgNo = ds_pldgNo.getCellData(0, "pldgNo");
        tac_tabControl1.setSelectedTabIndex(0);
        tac_tabControl1.getWindow(0).scwin.setPldgNo(scwin.pldgNo);
      } else if (pattern == "02") {
        scwin.pldgNo = ds_pldgNo.getCellData(0, "pldgNo");
        tac_tabControl1.setSelectedTabIndex(1);
        tac_tabControl1.getWindow(1).scwin.setPldgNo(scwin.pldgNo);
      } else if (pattern == "05") {
        scwin.pldgNo = ds_pldgNo.getCellData(0, "pldgNo");
        tac_tabControl1.setSelectedTabIndex(2);
        tac_tabControl1.getWindow(2).scwin.setPldgNo(scwin.pldgNo);
      } else if (pattern == "06") {
        scwin.pldgNo = ds_pldgNo.getCellData(0, "pldgNo");
        tac_tabControl1.setSelectedTabIndex(3);
        tac_tabControl1.getWindow(3).scwin.setPldgNo(scwin.pldgNo);
      }
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCrnInfo',codeId:'ed_crn',popupTitle:'',nameId:'ed_busiNm',style:'',mandatoryCode:'false',allowCharCode:'0-9',maxlengthCode:'13',validExpCode:'사업자번호:yes:maxLength=13&number',mandatoryName:'false',maxlengthName:'20',refDataCollection:'dma_pldgNoSearch',code:'crn',id:'udc_crnInfo','ev:onclickEvent':'scwin.udc_crnInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_crnInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_crnInfo_onblurNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_regDept',nameId:'ed_regDeptNm',popupID:'',popupTitle:'',selectID:'retrieveAcctDeptCdInfo',style:'',mandatoryCode:'false',mandatoryName:'false',allowCharCode:'0-9',maxlengthCode:'5',maxlengthName:'50',refDataCollection:'dma_pldgNoSearch',code:'regDept',id:'udc_acctDeptCdInfo','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCdInfo_onblurNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_reg',nameId:'ed_regNm',popupID:'',popupTitle:'',selectID:'retrieveEmpDeptClntInfo',style:'',maxlengthCode:'8',allowCharCode:'0-9',mandatoryName:'false',mandatoryCode:'false',refDataCollection:'dma_pldgNoSearch',id:'udc_empDeptClntInfo','ev:onclickEvent':'scwin.udc_empDeptClntInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_empDeptClntInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_empDeptClntInfo_onblurNameEvent',code:'regId',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_Export',gridID:'gr_pldgNo'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_pldgNo',style:'',autoFit:'allColumn',id:'gr_pldgNo',visibleRowNum:'10',class:'wq_gvw',columnMove:'true',readOnly:'true','ev:oncellclick':'scwin.gr_pldgNo_oncellclick',rowStatusVisible:'true',rowStatusWidth:'15',focusMode:'cell'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column1',value:'담보번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'등록일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'등록부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column11',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column9',value:'법인명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column3',value:'담보유형',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column5',value:'감정평가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column7',value:'여신한도금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column19',value:'근저당설정액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'보증금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'질권금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'보증한도',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'매출채권</br>신용보험',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'기타담보',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'해지여부',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'해지일자',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pldgNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'regDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regDept',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regDeptNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'busiNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'color: blue;text-decoration: underline;',id:'pldgPattern',value:'0',displayMode:'label',readOnly:'true',class:'underline'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'jdgEstmtAmt',value:'0',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'crdtLimit',value:'0',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'fixedCollatSetupAmt',value:'0',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'deposit',value:'0',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rdeposit',value:'0',displayMode:'label',dataType:'number',displayFormat:'#,##0',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'depositLimit',value:'0',displayMode:'label',dataType:'number',displayFormat:'#,##0',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sdeposit',value:'0',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'edeposit',value:'0',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'tmnYn',value:'0',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'tmnDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'tac_tabControl1',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'부동산',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'보증보험',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs3',label:'매출채권신용보험',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs4',label:'기타'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:'',src:'/ui/ac/fm/acctrecvmgnt/crdtmgnt/fm_604_05_02b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:'',src:'/ui/ac/fm/acctrecvmgnt/crdtmgnt/fm_604_05_03b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content3',style:'',src:'/ui/ac/fm/acctrecvmgnt/crdtmgnt/fm_604_05_06b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content4',src:'/ui/ac/fm/acctrecvmgnt/crdtmgnt/fm_604_05_07b.xml'}}]}]}]}]}]}]}]})