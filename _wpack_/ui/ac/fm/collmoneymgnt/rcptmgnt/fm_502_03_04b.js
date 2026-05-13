/*amd /ui/ac/fm/collmoneymgnt/rcptmgnt/fm_502_03_04b.xml 22564 512071bc733800f8f0e0f0c0301dae3ebb5c3d999796bbfc613c61b815e4c8d0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_saveSusRecv'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkClsCd',name:'작업구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:key',A:{id:'loanCtrtNo',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_judge',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_judge',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_judge","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.strToDate = WebSquare.date.getCurrentServerDate();
scwin.login = $c.data.getMemInfo($p);
scwin.g_sUserId = scwin.login.empNo;
scwin.gJudgeYn = "0";
scwin.vLoginCoCd = scwin.login.coCd ?? "";
scwin.vLoginCoClsCd = scwin.login.coClsCd ?? "";
scwin.parentFrame = $c.win.getParent($p);

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  const param = [{
    method: "getLuxeComboData",
    param1: "SuspInitAmtEBC",
    param2: "retrieveSuspenseAccount",
    compID: "acb_acctCd"
  }];
  $c.data.setGauceUtil($p, param, scwin.ebcCallback);
  scwin.f_retrieveJudge();
  for (let i = 0; i < ds_judge.getRowCount(); i++) {
    if (scwin.g_sUserId == ds_judge.getCellData(i, "col1")) {
      scwin.gJudgeYn = "1";
      break;
    } else {
      scwin.gJudgeYn = "0";
    }
  }
  ed_amt.setValue("0");
  gr_loanCtrt.visible(false);
  // $c.gus.cfEnableObj(ed_rentloanCtrtNo, false);		
  $c.gus.cfEnableObj($p, ed_wholeEachCont, false);
  $c.gus.cfDisableObjects($p, [ed_amt]);
  udc_rcptAcctFilterCodeList.hide();
  udc_acctCdInfo.hide();
};
scwin.ebcCallback = function () {
  acb_acctCd.setSelectedIndex(-1);
};
//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 2:귀속부서, 3:거래처번호
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  let param = "";
  cd = orgObjCd.getValue();
  nm = orgObjNm.getValue();
  switch (select_code) {
    // 조회조건용 수금부서 PopUp 호출
    case '2':
      param = "," + $p.parent().ed_coCd.getValue() + "," + scwin.parentFrame.scwin.txtCoClsCd + ",0,,"; //자회사 회계시스템 추가사항
      udc_acctDeptCdInfo6.cfCommonPopUp(scwin.udc_acctDeptCdInfo6_callBackFunc, cd, nm, "T", null, null, null, null, param, "450", "500", null, null); // 귀속부서			
      break;
    // 조회조건용 거래처 PopUp 호출
    case '3':
      param = ",,," + $p.parent().ed_coCd.getValue(); //자회사 회계시스템 추가사항 
      udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, cd, nm, "T", null, null, null, null, param, null, null, null, null); // 거래처
      break;
    default:
      await $c.win.alert($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdInfo6_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_acctDeptCd.setValue(rtnList[0]); // 코드값
    ed_acctDeptNm.setValue(rtnList[1]); // 코드명
    ed_acctDeptCd.options.hidVal = rtnList[0]; // HIDDEN 코드값
    ed_acctDeptNm.options.hidVal = rtnList[1]; // HIDDEN 코드명
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
    ed_acctDeptCd.options.hidVal = "";
    ed_acctDeptNm.options.hidVal = "";
  }
};
scwin.udc_clntList_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntNo.setValue(rtnList[0]); // 코드값
    ed_clntNm.setValue(rtnList[1]); // 코드명
    ed_clntNo.options.hidVal = rtnList[0]; // HIDDEN 코드값
    ed_clntNm.options.hidVal = rtnList[1]; // HIDDEN 코드명
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
    ed_clntNo.options.hidVal = "";
    ed_clntNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 가수금 현금 반제권한 조회 
//-------------------------------------------------------------------------
scwin.f_retrieveJudge = function () {
  //가수금 현금 반제권한 조회
  sbm_judge.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" + "&queryId=retrieveBorrowAcqKindInfo&param1=FM097";
  $c.sbm.execute($p, sbm_judge);
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
// 가수금반제처리시 호출 되는 함수
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (acb_acctCd.getValue() == "1110413") {
    // 필수입력 여부 Check
    if (!(await $c.gus.cfValidate($p, [ica_wrkDt, acb_acctCd, ed_acctDeptCd]))) {
      return;
    }
  } else {
    // 필수입력 여부 Check
    // 계정코드에 따라 거래처관리 여부값에 따라서 필수 or 선택으로 변경
    if (hid_clntFltr.getValue() == '1') {
      if (!(await $c.gus.cfValidate($p, [ica_wrkDt, ed_clntNo, acb_acctCd, ed_acctDeptCd, ed_summary]))) {
        return;
      }
    } else {
      if (!(await $c.gus.cfValidate($p, [ica_wrkDt, acb_acctCd, ed_acctDeptCd, ed_summary]))) {
        return;
      }
    }
  }

  // alert(acb_acctCd.getValue());
  //현금 반제시에는 해당권한자만 입력가능  (2007.03.26-윤영훈 )
  if (acb_acctCd.getValue() == "1110110" && scwin.gJudgeYn == "0") {
    await $c.win.alert($p, "현금 반제 권한이 없습니다.");
    return;
  }

  //ACCTCD_RENT_GUARANTY
  //ACCTCD_LEASE_GUARANTY:보증금-임차보증금
  //ACCTCD_RENT_GUARANTY:수입보증금-부동산임대
  //ACCTCD_INCOME_LEASE_AMT:수입임대료
  //ACCTCD_REFUNDAMT_RENTLOAN:계정(미수금 - 임대차)
  if (acb_acctCd.getValue() == ACConstants.ACCTCD_LEASE_GUARANTY || acb_acctCd.getValue() == ACConstants.ACCTCD_RENT_GUARANTY || acb_acctCd.getValue() == ACConstants.ACCTCD_INCOME_LEASE_AMT || acb_acctCd.getValue() == ACConstants.ACCTCD_REFUNDAMT_RENTLOAN) {
    if (scwin.vLoginCoCd == "023" && acb_acctCd.getValue() == ACConstants.ACCTCD_REFUNDAMT_RENTLOAN) {
      //ACCTCD_REFUNDAMT_RENTLOAN:계정(미수금 - 임대차)이 미수금-기타 계정코드를 사용함으로 BIDC인경우 임/전차 계약번호 필수값 제외
    } else if (scwin.vLoginCoCd == "023" && acb_acctCd.getValue() == ACConstants.ACCTCD_LEASE_GUARANTY) {
      //ACCTCD_LEASE_GUARANTY:계정 보증금-임차보증금 BIDC인경우 임/전차 계약번호 필수값 제외    	  
    } else if (scwin.vLoginCoCd == "028" && acb_acctCd.getValue() == ACConstants.ACCTCD_RENT_GUARANTY) {
      //ACCTCD_RENT_GUARANTY:계정 수입보증금-부동산임대  한창인경우 임/전차 계약번호 필수값 제외    	
    } else {
      if (ed_rentloanCtrtNo.getValue().trim() == "") {
        await $c.win.alert($p, "임/전차 계약번호가 필수로 입력해야할 계정입니다.");
        return;
      }
    }
  }
  $p.parent().scwin.f_Save2();
};

//-------------------------------------------------------------------------
// function name : f_openCommonPopUp
// function desc : popup
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let vpCode = acb_acctCd.getValue();
  ed_wholeEachCont.setValue("");
  let pCtrtNo = ed_rentloanCtrtNo.getValue();
  switch (disGubun) {
    case 1:
      udc_rentloanList.cfCommonPopUp(scwin.udc_rentloanList_callBackFunc, vpCode, '', pClose, null, null, null, '2,7,8,9,10', '3', null, null, null, null, null, pAllSearch, null, null, null, pCtrtNo);
      // cfSetReturnValue(rtnList, ed_rentloanCtrtNo, hid_loanCtrtNm);
      break;
    case 2:
      rtnList1 = udc_rcptAcctFilterCodeList.cfCommonPopUp(scwin.udc_rcptAcctFilterCodeList_callBackFunc, vpCode, '', pClose, null, null, null, '5,6,7,8,9,10', '3', null, null, null, null, null, pAllSearch, null, null, null, pCtrtNo);
      // cfSetReturnValue(rtnList1, hid_acctFltr, ed_wholeEachCont);
      break;
    case 3:
      //가수금 반제처리시 거래처관리여부 체크를 위함.
      rtnList = udc_acctCdInfo.cfCommonPopUp(scwin.udc_acctCdInfo_callBackFunc, vpCode, '', pClose, null, null, null, '7,8,9,10', '3', null, null, null, null, null, pAllSearch, null, null, null, pCtrtNo);
      // cfSetReturnValue(rtnList, null, null);

      // hid_clntFltr.setValue(rtnList[5]);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 콜백함수
//-------------------------------------------------------------------------
scwin.udc_rentloanList_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_rentloanCtrtNo.setValue(rtnList[0]);
    hid_loanCtrtNm.setValue(rtnList[1]);
    ed_rentloanCtrtNo.options.hidVal = rtnList[0];
    hid_loanCtrtNm.options.hidVal = rtnList[1];
  } else {
    ed_rentloanCtrtNo.setValue("");
    hid_loanCtrtNm.setValue("");
    ed_rentloanCtrtNo.options.hidVal = "";
    hid_loanCtrtNm.options.hidVal = "";
  }
};
scwin.udc_rcptAcctFilterCodeList_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    hid_acctFltr.setValue(rtnList[0]);
    ed_wholeEachCont.setValue(rtnList[1]);
    hid_acctFltr.options.hidVal = rtnList[0];
    ed_wholeEachCont.options.hidVal = rtnList[1];
  } else {
    hid_acctFltr.setValue("");
    ed_wholeEachCont.setValue("");
    hid_acctFltr.options.hidVal = "";
    ed_wholeEachCont.options.hidVal = "";
  }
};
scwin.udc_acctCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    hid_clntFltr.setValue(rtnList[5]);
  } else {
    ed_wholeEachCont.setValue("");
  }
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdInfo6_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_acctDeptCd, ed_acctDeptNm, '2', 'ALL');
};
scwin.udc_acctDeptCdInfo6_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '2', 'CD');
};
scwin.udc_acctDeptCdInfo6_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '2', 'NM');
};
scwin.udc_clntList_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_clntNo, ed_clntNm, '3', 'ALL');
};
scwin.udc_clntList_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '3', 'CD');
};
scwin.udc_clntList_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '3', 'NM');
};
scwin.udc_rentloanList_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, '', hid_loanCtrtNm.getValue(), 'F', 'T');
};

// scwin.udc_rcptAcctFilterCodeList_onclickEvent = function (e) {
//     scwin.f_openCommonPopUp(2, acb_acctCd.getValue(), "", 'T', 'T');
// };

// scwin.udc_acctCdInfo_onclickEvent = function (e) {
//     scwin.f_openCommonPopUp(3, acb_acctCd.getValue(), "", 'T', 'T');
// };

scwin.ed_amt_onblur = function (e) {
  if (ed_amt.getValue() == "") {
    ed_amt.setValue(0);
  }
};
scwin.acb_acctCd_onviewchange = function (info) {
  //ACCTCD_LEASE_GUARANTY:보증금-임차보증금
  //ACCTCD_RENT_GUARANTY:수입보증금-부동산임대
  //ACCTCD_INCOME_LEASE_AMT:수입임대료
  //ACCTCD_REFUNDAMT_RENTLOAN:계정(미수금 - 임대차)
  if (acb_acctCd.getValue() == ACConstants.ACCTCD_LEASE_GUARANTY || acb_acctCd.getValue() == ACConstants.ACCTCD_RENT_GUARANTY || acb_acctCd.getValue() == ACConstants.ACCTCD_INCOME_LEASE_AMT || acb_acctCd.getValue() == ACConstants.ACCTCD_REFUNDAMT_RENTLOAN) {
    if (scwin.vLoginCoCd == "023" && acb_acctCd.getValue() == ACConstants.ACCTCD_REFUNDAMT_RENTLOAN) {
      //ACCTCD_REFUNDAMT_RENTLOAN:계정(미수금 - 임대차)이 미수금-기타 계정코드를 사용함으로 BIDC인경우 임/전차 계약번호 입력 안함
    } else if (scwin.vLoginCoCd == "023" && acb_acctCd.getValue() == ACConstants.ACCTCD_LEASE_GUARANTY) {
      //ACCTCD_LEASE_GUARANTY:계정 보증금-임차보증금 /BIDC인경우 임/전차 계약번호 필수값 제외
    } else if (scwin.vLoginCoCd == "028" && acb_acctCd.getValue() == ACConstants.ACCTCD_RENT_GUARANTY) {
      //ACCTCD_RENT_GUARANTY:계정 수입보증금-부동산임대  한창인경우 임/전차 계약번호 필수값 제외    	
    } else {
      // gr_loanCtrt.show();
      gr_loanCtrt.visible(true);
    }
  } else {
    gr_loanCtrt.visible(false);
    // gr_loanCtrt.hide();
  }

  // 계정 필터 코드 조회 하기
  if (hid_acctFltr.getValue() == '0' || hid_acctFltr.getValue() == '') {
    scwin.f_openCommonPopUp(2, acb_acctCd.getValue(), "", 'T', 'T');
  } else {
    scwin.f_openCommonPopUp(2, acb_acctCd.getValue(), "", 'F', 'F');
  }
  if (hid_acctFltr.getValue() == '1') {
    $c.gus.cfDisableObjects($p, [ed_summary, ed_clntNo, ed_clntNm]);
    $p.parent().scwin.f_check2();
  } else {
    $c.gus.cfEnableObjects($p, [ed_summary, ed_clntNo, ed_clntNm]);
  }

  //계정코드로 거래처관리여부 체크
  scwin.f_openCommonPopUp(3, acb_acctCd.getValue(), "", 'T', 'F');
  if (hid_clntFltr.getValue() == '0' || hid_clntFltr.getValue() == '') {
    ed_clntNm.setMandatory(false);
    // cfRefreshMandSign();
  } else {
    ed_clntNm.setMandatory(true);
    // cfRefreshMandSign();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 500px;'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkDt',style:'',displayFormat:'yyyy/MM/dd',mandatory:'true',objType:'data',ref:'data:dma_saveSusRecv.wrkDt',title:'작업일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계정코드 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-16'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_acctCd',search:'start',style:'width: 200px;',submenuSize:'fixed',mandatory:'true',visibleRowNum:'26',title:'계정코드',emptyItem:'true','ev:onviewchange':'scwin.acb_acctCd_onviewchange'}},{T:1,N:'xf:input',A:{style:'width:80px;',id:'ed_wholeEachCont',class:'',maxlength:'10'}}]},{T:1,N:'xf:group',A:{style:'',id:'divRentloanCtrtNo',class:'form-group'},E:[{T:1,N:'xf:group',A:{id:'gr_loanCtrt',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'임/전차 계약번호',class:''}},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_rentloanCtrtNo',nameId:'hid_loanCtrtNm',popupID:'',selectID:'retrieveRentloanList',style:'',validTitle:'',hideName:'true',id:'udc_rentloanList','ev:onclickEvent':'scwin.udc_rentloanList_onclickEvent',refDataCollection:'dma_saveSusRecv',code:'loanCtrtNo'}},{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.cfInitObjects([ed_rentloanCtrtNo])'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo6',codeId:'ed_acctDeptCd',validTitle:'귀속부서',nameId:'ed_acctDeptNm',style:'width: 300px;',mandatoryCode:'true',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'5',objTypeName:'data',maxlengthName:'50',id:'udc_acctDeptCdInfo6','ev:onclickEvent':'scwin.udc_acctDeptCdInfo6_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo6_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCdInfo6_onblurNameEvent',refDataCollection:'dma_saveSusRecv',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'',selectID:'retrieveClntList',style:'width: 300px;',validTitle:'거래처',objTypeCode:'data',mandatoryCode:'true',maxlengthCode:'6',allowCharCode:'0-9',objTypeName:'data',id:'udc_clntList','ev:onclickEvent':'scwin.udc_clntList_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntList_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clntList_onblurNameEvent',refDataCollection:'dma_saveSusRecv',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적요 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_summary',style:'width: 150px;',mandatory:'true',maxlength:'50',objType:'data',title:'적요'}},{T:1,N:'w2:udc_comCode',A:{codeId:'hid_acctFltr',nameId:'hid2',popupID:'',selectID:'retrieveRcptAcctFilterCodeList',style:'',validTitle:'',id:'udc_rcptAcctFilterCodeList',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'w2:udc_comCode',A:{codeId:'hid_clntFltr',nameId:'hid4',popupID:'',selectID:'retrieveAcctCdInfo',style:'',validTitle:'',id:'udc_acctCdInfo',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_amt',style:'width: 150px',mandatory:'true',maxlength:'13',dataType:'number',displayFormat:'#,##0','ev:onblur':'scwin.ed_amt_onblur',allowChar:'0-9',title:'금액'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bsave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'처리'}]}]}]}]}]}]}]})