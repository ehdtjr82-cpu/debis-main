/*amd /ui/ac/fm/acctrecvmgnt/pooracctrecv/fm_602_04_01b.xml 53574 d83dd3bc0bcf51f7ad5873836620dadf60846a81f33bf3e5bd0fc59c63dac0f3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd2',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtSt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtEnd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo1',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm1',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn1',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'appDept',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsnCd',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchPoorAcctRecv'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'corRegNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntTrgtClntYn',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_judge'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_user'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovrAmt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtRegDt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtRsnCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_poorAcctRecv',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovrAmt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtRegDt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtRsnCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'judgeYn',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modYn',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_user',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_judge',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchPoorAcctRecv',action:'/ac.fm.acctrecvmgnt.pooracctrecv.RetrieveManagementCustomerTargetListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchPoorAcctRecv","key":"IN_DS1"},{"id":"ds_poorAcctRecv","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_poorAcctRecv","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_searchPoorAcctRecv_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_poorAcctRecv',action:'/ac.fm.acctrecvmgnt.pooracctrecv.UpdateManagementCustomerTargetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_poorAcctRecv","key":"IN_DS1"}',target:'',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_poorAcctRecv_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveMgntClnt',action:'/ac.fm.acctrecvmgnt.pooracctrecv.RetrieveMgntClntCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieveMgntClnt_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_judge',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_judge',target:'data:json,{"id":"ds_judge","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_user',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_user',target:'data:json,{"id":"ds_user","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.sysAdminYn = scwin.login.sysAdminYn;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.vLoginCoCd2 = "";
scwin.isSubCompany = false;

// hidden 컴포넌트
scwin.txtCoClsCd;
scwin.txtCoClsCd2;
scwin.argObject = "";
scwin.flag = "";
scwin.crn = "";
scwin.clntNo = "";
scwin.clntNm = "";
scwin.busiNm = "";
scwin.pos_groupCode = 0; // Grid의 저장시 위치로 이동하게 하는 전역변수
scwin.gRsnChangeYn = "0";
scwin.gJudgeYn = "0";
scwin.isFirst = true;
scwin.onpageload = function () {};
scwin.onUdcCompleted = async function () {
  const codeOptions = [{
    grpCd: "ZZ524",
    compID: "gr_poorAcctRecv:mgntTrgtRsnCd, acb_rsnCd"
  }];
  $c.data.setCommonCode($p, codeOptions);

  // scwin.f_Header();	
  // scwin.f_Header2();  // 관리거래처 조회조건

  // scwin.f_AppTabMenuTitle();
  scwin.f_Reset();
  acb_useYn.setSelectedIndex(0);
  ed_sclntNo.focus();
  scwin.f_retrieveJudge();
  scwin.f_retrieveUser();
  await scwin.f_setCompanyInfo();
  await scwin.f_setCompanyInfo2();
  var sLoginId = $c.data.getMemInfo($p, "empNo");
  for (var i = 0; i < ds_user.getTotalRow(); i++) {
    if (ds_user.getCellData(i, "col1") == sLoginId) {
      scwin.gJudgeYn = "1";
    }
  }
};
scwin.ondataload = function () {
  scwin.argObject = $c.data.getParameter($p);
  if (scwin.argObject != "" && scwin.argObject != undefined) {
    scwin.flag = scwin.argObject["flag"];
    scwin.crn = scwin.argObject["crn"];
    scwin.clntNo = scwin.argObject["clntNo"];
    scwin.clntNm = scwin.argObject["clntNm"];
    scwin.busiNm = scwin.argObject["busiNm"];
    if (scwin.flag == "Y") {
      ed_crn.setValue(scwin.crn);
      ed_sclntNo.setValue(scwin.clntNo);
      ed_sclntNm.setValue(scwin.clntNm);
      ed_crnNm.setValue(scwin.busiNm);

      // scwin.f_Retrieve();

      // setTimeout("f_Retrieve()", 1);  
      $p.setTimeout(function () {
        scwin.f_Retrieve();
      }, {
        "delay": 300
      });
    }
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->귀속부서, 2:조회->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag, flag2) {
  var rtnList = new Array();

  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  // if (orgObjCd.tagName.toUpperCase() == "INPUT" ) {
  //     if (flag == "ALL") {
  //         cd = "";
  //         nm = "";
  //     } else {
  //         cd = orgObjCd.value;
  //         nm = orgObjNm.value;
  //     }
  // } else {
  //     if (flag == "ALL") {
  //         cd = "";
  //         nm = "";
  //     } else {
  //         cd = orgObjCd.Text;
  //         nm = orgObjNm.Text;
  //     }
  // }

  var cd = "";
  var nm = "";
  if (orgObjCd != "") {
    cd = orgObjCd.getValue();
  }
  if (orgObjNm != "") {
    nm = orgObjNm.getValue();
  }
  switch (select_code) {
    // 조회조건용 거래처 PopUp 호출
    case '2':
      param = ",,," + ed_coCd.getValue();
      //	  		rtnList = cfCommonPopUp('retrieveClntList',cd,nm,"T",null,null,null,null,null,null,null,null,null); // 거래처
      if (flag2 == "1") {
        rtnList = udc_retrieveClntList.cfCommonPopUp(scwin.udc_retrieveClntList_callBackFunc, cd, nm, "T", null, null, null, null, param, null, null, null, null); // 거래처
      } else {
        rtnList = udc_retrieveClntList2.cfCommonPopUp(scwin.udc_retrieveClntList2_callBackFunc, cd, nm, "T", null, null, null, null, param, null, null, null, null); // 거래처
      }

      // f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      break;
    case '3':
      // 사업자번호
      if (flag2 == "1") {
        rtnList = udc_retrieveCrnInfo.cfCommonPopUp(scwin.udc_retrieveCrnInfo_callBackFunc, cd, nm, "T", null, null, null, null, null, null, null, null, null); //사업자번호
      } else {
        rtnList = udc_retrieveCrnInfo2.cfCommonPopUp(scwin.udc_retrieveCrnInfo2_callBackFunc, cd, nm, "T", null, null, null, null, null, null, null, null, null); //사업자번호
      }
      // f_resultPopUp(orgObjCd,orgObjNm,rtnList);
      break;
    case '4':
      param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      rtnList = udc_retrieveAcctDeptCdInfo6.cfCommonPopUp(scwin.udc_retrieveAcctDeptCdInfo6_callBackFunc, cd, nm, "T", null, null, null, null, param, null, null, null, null); // 귀속부서	        
      //          rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo',cd,nm,"T",null,null,null,null,null,null,null,null,null); //사업자번호
      // f_resultPopUp(orgObjCd,orgObjNm,rtnList);
      break;
    case '5':
      // 법인번호
      rtnList = udc_retrieveCorRegNo.cfCommonPopUp(scwin.udc_retrieveCorRegNo_callBackFunc, orgObjCd.getValue(), nm, "T", null, null, null, null, null, null, null, null, null); //법인번호
      // f_resultPopUp(orgObjCd,orgObjNm,rtnList);
      break;
    default:
      await $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopUp = function (orgObjCd, orgObjNm, rtnList) {
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    orgObjCd.setValue(rtnList[0]); // 코드값
    orgObjNm.setValue(rtnList[1]); // 코드명
    orgObjCd.options.hidVal = rtnList[0]; // HIDDEN 코드값
    orgObjNm.options.hidVal = rtnList[1]; // HIDDEN 코드명
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
    orgObjCd.options.hidVal = "";
    orgObjNm.options.hidVal = "";
  }
};
scwin.udc_retrieveClntList_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_sclntNo, ed_sclntNm, rtnList);
};
scwin.udc_retrieveClntList2_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_sclntNo1, ed_sclntNm1, rtnList);
};
scwin.udc_retrieveCrnInfo_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_crn, ed_crnNm, rtnList);
};
scwin.udc_retrieveCrnInfo2_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_crn1, ed_crnNm1, rtnList);
};
scwin.udc_retrieveAcctDeptCdInfo6_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_appAcctDeptCd, ed_appAcctDeptNm, rtnList);
};
scwin.udc_retrieveCorRegNo_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_corRegNo, ed_corRegNm, rtnList);
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag, flag2) {
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
    if (orgObjCd.getValue().trim() != "" || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO", flag2);
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = async function (e) {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  await scwin.f_PopUpCompanyInfo('T');
};
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  scwin.pWinClose = pWinCloseTF;
  await udc_companyInfo.cfCommonPopUpAsync(scwin.udc_coCd_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_coCd_callBackFunc = function (rtnList) {
  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    ed_coCd.options.hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분  
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isFirst == true) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
    scwin.isFirst = false;
  }
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 2
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo2 = async function (e) {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd2 = ACConstants.CO_CD_DONGBU;
    // scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd2.setValue(scwin.vLoginCoCd2);
  await scwin.f_PopUpCompanyInfo2('T');
  if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
    $c.gus.cfEnableObjects($p, [ed_coCd2, ed_coNm2, btn_company]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd2, ed_coNm2, btn_company]);
  }
};
scwin.f_PopUpCompanyInfo2 = async function (pWinCloseTF) {
  scwin.pWinClose = pWinCloseTF;
  await udc_companyInfo2.cfCommonPopUpAsync(scwin.udc_coCd2_callBackFunc, ed_coCd2.getValue(), ed_coNm2.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_coCd2_callBackFunc = function (rtnList) {
  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd2.setValue(rtnList[0]); // 코드
    ed_coNm2.setValue(rtnList[5]); // 회사명 
    ed_coCd2.options.hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd2 = rtnList[1]; // 회사구분  
  } else {
    ed_coCd2.setValue("");
    ed_coNm2.setValue("");
    ed_coCd2.options.hidVal = "";
    scwin.txtCoClsCd2 = "";
  }
  if (scwin.txtCoClsCd2 > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};

//-------------------------------------------------------------------------
// Tab Menu / URL 설정
//-------------------------------------------------------------------------
// function f_AppTabMenuTitle(){
//     for(i=0;i<tab_mxTab_page.length;i++){
//         lay_tab_mxTab_Title(i).innerHTML =  TAB_TITLE_LIST[i];
//         eval("document.all.iFrame" + i).src = TAB_URL_LIST[i]; 
//     }
//     // 첫번째 Tab Menu 활성화
//     cfViewTab(0);
// }

//-------------------------------------------------------------------------
// Tab Menu 선택시 처리
//-------------------------------------------------------------------------
// function f_selectTabMenu(idx){

//     if ( idx==0) {
//         iFrame0.ds_mgntCustTarget.DataID = "/ac.fm.acctrecvmgnt.pooracctrecv.RetrieveManagementCustomerHistoryCMD.do"+"?clntNo=" +ds_poorAcctRecv.NameValue(ds_poorAcctRecv.RowPosition,"clntNo");
//         iFrame0.ds_mgntCustTarget.Reset();
//     } else if (idx==1) {
//         iFrame1.ds_mgntCustMesure.DataID = "/ac.fm.acctrecvmgnt.pooracctrecv.RetrieveManagementCustomerMeasuresItemCMD.do"+"?clntNo=" +ds_poorAcctRecv.NameValue(ds_poorAcctRecv.RowPosition,"clntNo");
//         iFrame1.ds_mgntCustMesure.Reset();
//     }

//     cfViewTab(idx);

// }

//-------------------------------------------------------------------------
// 초기화 관련 변수 정의 함수
//-------------------------------------------------------------------------
scwin.f_Initial = function () {
  $c.gus.cfDisableKey($p);
};

//-------------------------------------------------------------------------
// 저장 완료후 화면 Reset시 사용하는 함수 
//-------------------------------------------------------------------------
scwin.f_Reset = function () {
  scwin.f_Initial();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return false;
  if (acb_useYn.getValue != "1") {
    if (ed_sclntNo.getValue().trim() == "" && ed_crn.getValue().trim() == "" && ed_corRegNo.getValue().trim() == "") {
      // 필수 조회조건 입력 여부(거래처명) Check
      if (!(await $c.gus.cfValidate($p, [ed_sclntNo]))) {
        return;
      }
    }
  }
  //거래처명 조회 막음
  dma_searchPoorAcctRecv.set("clntNm", "");
  dma_searchPoorAcctRecv.set("mgntTrgtClntYn", acb_useYn.getValue());
  $c.sbm.execute($p, sbm_searchPoorAcctRecv);
};

//-------------------------------------------------------------------------
//  관리거래처 리스트조회
//-------------------------------------------------------------------------
scwin.f_RetrieveMgntClnt = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_coCd2]))) return false;
  if ($c.gus.cfIsNull($p, ed_slipDtSt.getValue())) {
    await $c.win.alert($p, "작성일자From은 필수 입력 항목입니다.");
    return false;
  }
  if ($c.gus.cfIsNull($p, ed_slipDtEnd.getValue())) {
    await $c.win.alert($p, "작성일자To는 필수 입력 항목입니다.");
    return false;
  }
  dma_search.set("rsnCd", acb_rsnCd.getValue());
  $c.sbm.execute($p, sbm_retrieveMgntClnt);
};

//-------------------------------------------------------------------------
// 관리거래처 등록 수정  저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  // 변경된 사항이 없으면 저장할수 없음.
  if (ds_poorAcctRecv.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }
  for (var i = 0; i < ds_poorAcctRecv.getTotalRow(); i++) {
    if (ds_poorAcctRecv.getRowStatus(i) != "R" && ds_poorAcctRecv.getCellData(i, "modYn") == "T") {
      if (ds_poorAcctRecv.getCellData(i, "mgntTrgtClntYn") == "0") {
        await $c.gus.cfAlertMsg($p, "관리거래처 코드가 '아니오' 일때는 [등록]코드는 입력 할 수없습니다.");
      } else {
        await $c.gus.cfAlertMsg($p, "관리거래처 코드가 '예' 일때는 [해제]코드는 입력 할 수없습니다.");
      }
      return false;
    }
    ds_poorAcctRecv.setCellData(i, "judgeYn", scwin.gJudgeYn);
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_poorAcctRecv);
  }
};

//-------------------------------------------------------------------------
// 관리거래처 사유코드 중 '제외대상' 선택 가능 권한 조회
//-------------------------------------------------------------------------
scwin.f_retrieveJudge = function () {
  //심사권한 조회
  dma_judge.set("sysCd", "CommonEBC");
  dma_judge.set("queryId", "retrieveBorrowAcqKindInfo");
  dma_judge.set("param1", "ZZ524");
  $c.sbm.execute($p, sbm_judge);
};
scwin.f_retrieveUser = function () {
  //심사권한 조회
  dma_user.set("sysCd", "CommonEBC");
  dma_user.set("queryId", "retrieveBorrowAcqKindInfo");
  dma_user.set("param1", "FM092");
  $c.sbm.execute($p, sbm_user);
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel = async function () {
  var totCnt = ds_poorAcctRecv.getTotalRow();
  if (totCnt != 0) {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      let options = {
        fileName: "관리거래처 리스트",
        // + ".xls",
        sheetName: "관리거래처 리스트",
        type: 1,
        headerColor: "#eeeeee" //"#E8E8E8", //연한회색 #33CCCC
      };
      $c.data.downloadGridViewExcel($p, gr_poorAcctRecv, options, "");
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel2 = async function () {
  var totCnt = ds_out.getTotalRow();
  if (totCnt != 0) {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      let options = {
        fileName: "관리거래처 리스트",
        // + ".xls",
        sheetName: "관리거래처 리스트",
        type: 1,
        headerColor: "#eeeeee" //"#E8E8E8", //연한회색 #33CCCC
      };
      $c.data.downloadGridViewExcel($p, gr_out, options, "");
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_companyInfo2_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo2('F');
};
scwin.udc_companyInfo2_onblurCodeEvent = function (e) {
  ed_coNm2.setValue("");
  scwin.f_PopUpCompanyInfo2('T');
};
scwin.udc_retrieveClntList_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sclntNo, ed_sclntNm, '2', '', '1');
};
scwin.udc_retrieveClntList_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '2', 'CD', '1');
};
scwin.udc_retrieveClntList2_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sclntNo1, ed_sclntNm1, '2', '', '2');
};
scwin.udc_retrieveClntList2_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo1, ed_sclntNm1, '2', 'CD', '2');
};
scwin.udc_retrieveCorRegNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_corRegNo, '', '5', 'ALL');
};
scwin.udc_retrieveCorRegNo_onblurCodeEvent = function (e) {
  scwin.f_openPopUp(ed_corRegNo, '', '5', 'ALL');
};
scwin.udc_retrieveCrnInfo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_crn, ed_crnNm, '3', '', '1');
};
scwin.udc_retrieveCrnInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_crnNm, '3', 'CD', '1');
};
scwin.udc_retrieveCrnInfo2_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_crn1, ed_crnNm1, '3', '', '2');
};
scwin.udc_retrieveCrnInfo2_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn1, ed_crnNm1, '3', 'CD', '2');
};
scwin.udc_retrieveAcctDeptCdInfo6_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_appAcctDeptCd, ed_appAcctDeptNm, '4', 'ALL');
};
scwin.udc_retrieveAcctDeptCdInfo6_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_appAcctDeptCd, ed_appAcctDeptNm, '4', 'CD');
};
scwin.sbm_poorAcctRecv_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_searchPoorAcctRecv_submitdone = async function (e) {
  var rowCnt = ds_poorAcctRecv.getTotalRow();
  ed_totalRow.setValue(rowCnt);
  // 저장전의 위치로 이동시킨다.
  // $c.gus.cfGoPrevPosition(ds_poorAcctRecv, 0);

  if (rowCnt == 0) {
    //iFrame0.ds_mgntCustMesure.ClearData();
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    var row = 0;
    if (!$c.gus.cfIsNull($p, ds_poorAcctRecv.getRowPosition())) {
      row = ds_poorAcctRecv.getRowPosition();
    }
    var params = {
      clntNo: ds_poorAcctRecv.getCellData(row, "clntNo")
    };
    debugger;
    if (tabControl1.getSelectedTabIndex() == 0) {
      tabControl1.getWindow(0).scwin.params = params;
      tabControl1.getWindow(0).scwin.onpageload();
    } else if (tabControl1.getSelectedTabIndex() == 1) {
      tabControl1.getWindow(1).scwin.params = params;
      tabControl1.getWindow(1).scwin.onpageload();
    }
  }
};
scwin.sbm_retrieveMgntClnt_submitdone = async function (e) {
  var rowCnt = ds_out.getTotalRow();
  ed_totalRow2.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // "조회결과가 존재하지 않습니다."
  }
};
scwin.gr_poorAcctRecv_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId != "num") {
    var row = 0;
    if (!$c.gus.cfIsNull($p, ds_poorAcctRecv.getRowPosition())) {
      row = ds_poorAcctRecv.getRowPosition();
    }
    var params = {
      clntNo: ds_poorAcctRecv.getCellData(row, "clntNo")
    };
    if (tabControl1.getSelectedTabIndex() == 0) {
      tabControl1.getWindow(0).scwin.params = params;
      tabControl1.getWindow(0).scwin.onpageload();
    } else if (tabControl1.getSelectedTabIndex() == 1) {
      tabControl1.getWindow(1).scwin.params = params;
      tabControl1.getWindow(1).scwin.onpageload();
    }
  }
};
scwin.gr_poorAcctRecv_onviewchange = async function (info) {
  var colid = gr_poorAcctRecv.getColumnID(info.colIndex);
  var row = info.rowIndex;
  if (colid == "mgntTrgtClntYn" || colid == "mgntTrgtRsnCd") {
    if (!(ds_poorAcctRecv.getCellData(row, "mgntTrgtRsnCd") == null || ds_poorAcctRecv.getCellData(row, "mgntTrgtRsnCd") == "")) {
      for (var i = 0; i < ds_judge.getTotalRow(); i++) {
        if (ds_poorAcctRecv.getCellData(row, "mgntTrgtRsnCd") == ds_judge.getCellData(i, "col1")) {
          if (scwin.gJudgeYn == "0") {
            if (ds_poorAcctRecv.getCellData(row, "mgntTrgtClntYn") == "1" && ds_judge.getCellData(i, "col5") == "01" && ds_judge.getCellData(i, "col3") == "1" || ds_poorAcctRecv.getCellData(row, "mgntTrgtClntYn") == "0" && ds_judge.getCellData(i, "col5") == "02" && ds_judge.getCellData(i, "col3") == "1" || ds_poorAcctRecv.getOriginalCellData(row, "mgntTrgtRsnCd") == "09" && ds_judge.getCellData(i, "col5") == "02") {
              await $c.gus.cfAlertMsg($p, ds_judge.getCellData(i, "col2") + " 선택권한이 없습니다.");
              ds_poorAcctRecv.setCellData(row, "mgntTrgtRsnCd", ds_poorAcctRecv.getOriginalCellData(row, "mgntTrgtRsnCd"));
              return false;
            }
          }
        } else if (ds_poorAcctRecv.getCellData(row, "mgntTrgtRsnCd") == ds_judge.getCellData(i, "col1") && ds_judge.getCellData(i, "col3") == "2") {
          if (ds_poorAcctRecv.getCellData(row, "mgntTrgtClntYn") == "0" && ds_judge.getCellData(i, "col5") == "02") {
            await $c.gus.cfAlertMsg($p, "관리거래처 해제권한이 없습니다.");
            ds_poorAcctRecv.setCellData(row, "mgntTrgtClntYn", ds_poorAcctRecv.getOriginalCellData(row, "mgntTrgtClntYn"));
            return false;
          }
        }
        if (ds_poorAcctRecv.getCellData(row, "mgntTrgtRsnCd") == ds_judge.getCellData(i, "col1")) {
          if (ds_poorAcctRecv.getCellData(row, "mgntTrgtClntYn") == "0") {
            if (ds_judge.getCellData(i, "col5") == "01") {
              ds_poorAcctRecv.setCellData(row, "modYn", "T");
            } else {
              ds_poorAcctRecv.setCellData(row, "modYn", "F");
            }
          } else {
            if (ds_judge.getCellData(i, "col5") == "02") {
              ds_poorAcctRecv.setCellData(row, "modYn", "T");
            } else {
              ds_poorAcctRecv.setCellData(row, "modYn", "F");
            }
          }
          return;
        }
      }
    }
  }
};

// scwin.gr_poorAcctRecv_onbeforeedit = function (rowIndex, columnIndex, value) {
//     scwin.orgMgntTrgtRsnCd = 
//     scwin.orgMgntTrgtClntYn =
// };

scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_clear_onclick = function (e) {
  // $c.gus.cfInitObjects(table1, []);
  $c.gus.cfInitObjects($p, [ed_sclntNo, ed_sclntNm, ed_corRegNo, ed_crn, ed_crnNm, acb_useYn]);
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_search2_onclick = function (e) {
  scwin.f_RetrieveMgntClnt();
};
scwin.btn_clear2_onclick = function (e) {
  $c.gus.cfInitObjects($p, table2, []);
};
scwin.tabControl1_ontabclick = function (tabId, index) {
  var row = 0;
  if (!$c.gus.cfIsNull($p, ds_poorAcctRecv.getRowPosition())) {
    row = ds_poorAcctRecv.getRowPosition();
  }
  var params = {
    clntNo: ds_poorAcctRecv.getCellData(row, "clntNo")
  };
  if (tabControl1.getSelectedTabIndex() == 0) {
    tabControl1.getWindow(0).scwin.params = params;
    tabControl1.getWindow(0).scwin.onpageload();
  } else if (tabControl1.getSelectedTabIndex() == 1) {
    tabControl1.getWindow(1).scwin.params = params;
    tabControl1.getWindow(1).scwin.onpageload();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm',style:'',code:'coCd',refDataCollection:'dma_searchPoorAcctRecv',btnId:'btn_company',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',maxlengthName:'65',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntList',codeId:'ed_sclntNo',validTitle:'거래처명',nameId:'ed_sclntNm',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_retrieveClntList',mandatoryCode:'true',refDataCollection:'dma_searchPoorAcctRecv',code:'clntNo',name:'clntNm','ev:onclickEvent':'scwin.udc_retrieveClntList_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveClntList_onblurCodeEvent',objTypeName:'data',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'법인번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCorRegNo',codeId:'ed_corRegNo',validTitle:'',nameId:'ed_corRegNm',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'13',id:'udc_retrieveCorRegNo',mandatoryName:'true',mandatoryCode:'true',refDataCollection:'dma_searchPoorAcctRecv',code:'corRegNo',hideName:'true','ev:onclickEvent':'scwin.udc_retrieveCorRegNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveCorRegNo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCrnInfo',codeId:'ed_crn',validTitle:'',nameId:'ed_crnNm',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'13',id:'udc_retrieveCrnInfo',refDataCollection:'dma_searchPoorAcctRecv',maxlengthName:'50',code:'crn','ev:onclickEvent':'scwin.udc_retrieveCrnInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveCrnInfo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리거래처여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'acb_useYn',style:'width: 230px;',submenuSize:'auto',search:'start',allOption:'',chooseOption:'',ref:'',editModeEvent:'onclick'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'포함'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미포함'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_poorAcctRecv',gridUpYn:'N',gridDownFn:'scwin.f_runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_poorAcctRecv',style:'',autoFit:'allColumn',id:'gr_poorAcctRecv',visibleRowNum:'10',class:'wq_gvw','ev:oncellclick':'scwin.gr_poorAcctRecv_oncellclick',rowStatusVisible:'true','ev:onbeforeedit':' ','ev:onviewchange':'scwin.gr_poorAcctRecv_onviewchange'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'checkbox',style:'',id:'column1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column15',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column11',value:'청구귀속',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column9',value:'30일초과금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column3',value:'적용일자',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column5',value:'관리거래처여부',class:'txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column7',value:'사유코드',class:'txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',style:'',id:'column19',value:'권한',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'num',value:'',displayMode:'label',valueType:'other',falseValue:'F',trueValue:'T',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bilgAcctDeptCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'ovrAmt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mgntTrgtRegDt',value:'',displayMode:'label',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',style:'',id:'mgntTrgtClntYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',viewType:'icon',editModeEvent:'onclick'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'200',inputType:'select',style:'',id:'mgntTrgtRsnCd',value:'',displayMode:'label',viewType:'icon',editModeEvent:'onclick'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'judgeYn',value:'',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_Save',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'tabControl1',style:'','ev:ontabclick':'scwin.tabControl1_ontabclick'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'관리거래처 이력',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'관리거래처 조치사항',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content1',style:'',src:'/ui/ac/fm/acctrecvmgnt/pooracctrecv/fm_602_04_03b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content2',style:'',src:'/ui/ac/fm/acctrecvmgnt/pooracctrecv/fm_602_04_02b.xml'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'관리거래처 리스트',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_out',gridUpYn:'N',gridDownFn:'scwin.f_runExcel2'}}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table2',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'등록일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar1',refDataMap:'dma_search',refEdDt:'slipDtEnd',refStDt:'slipDtSt',style:'',edFromId:'ed_slipDtSt',edToId:'ed_slipDtEnd',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntList',codeId:'ed_sclntNo1',validTitle:'',nameId:'ed_sclntNm1',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_retrieveClntList2',mandatoryName:'true',mandatoryCode:'true',refDataCollection:'dma_search',code:'clntNo1',name:'clntNm1','ev:onclickEvent':'scwin.udc_retrieveClntList2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveClntList2_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCrnInfo',codeId:'ed_crn1',validTitle:'',nameId:'ed_crnNm1',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'10',id:'udc_retrieveCrnInfo2',refDataCollection:'dma_search',maxlengthName:'50',code:'crn1','ev:onclickEvent':'scwin.udc_retrieveCrnInfo2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveCrnInfo2_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd2',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm2',style:'',code:'coCd2',refDataCollection:'dma_search',btnId:'btn_company',id:'udc_companyInfo2',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',validExpCode:'회사코드:yes',maxlengthName:'65',objTypeName:'data',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드','ev:onclickEvent':'scwin.udc_companyInfo2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_companyInfo2_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사유코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'acb_rsnCd',style:'width: 230px;',submenuSize:'auto',search:'start',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo6',codeId:'ed_appAcctDeptCd',validTitle:'',nameId:'ed_appAcctDeptNm',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_retrieveAcctDeptCdInfo6',refDataCollection:'dma_search',maxlengthName:'50',code:'appDept','ev:onclickEvent':'scwin.udc_retrieveAcctDeptCdInfo6_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveAcctDeptCdInfo6_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear2',style:'',type:'button','ev:onclick':'scwin.btn_clear2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search2',style:'',type:'button','ev:onclick':'scwin.btn_search2_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_out',style:'',autoFit:'allColumn',id:'gr_out',visibleRowNum:'5',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column15',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column11',value:'청구귀속<br/>부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column21',value:'청구귀속<br/>부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column9',value:'30일<br/>초과금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column3',class:'',value:'관리거래처<br/>등록일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column5',class:'',value:'사유코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column7',class:'',value:'등록사유',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bilgAcctDeptCd',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'bilgAcctDeptNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'ovrAmt',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mgntTrgtRegDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mgntTrgtRsnCd',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'cdNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRow2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]}]}]}]})