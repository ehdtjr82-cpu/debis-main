/*amd /ui/ac/fi/taxbiz/vatctrl/fi_100_01_40p.xml 30753 23e08e1ed33e0ecac07d0e38af3b7e27d26dc028b075cd82ff26a2b9e13bc802 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'declarYr',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatQuartYyClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatDeclarAcctDeptCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatDeclarAcctDeptNm',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crnNm',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'evidClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stYm',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endYm',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'submitDt',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ditVatDeclarDeptCd',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsSellClsCd',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ver',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatDeclarDataSeq',name:'name16',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evid',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'declarYr',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatQuartYyClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSellClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarCrn',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnCrn',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnBusiNmCmpy',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtDebis',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDebis',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'numCntDebis',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarExceptYn',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtEsl',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatEsl',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'numCntEsl',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gapSpplyAmtDebis',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gapVat',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gapNumCnt',name:'name17',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.vatdeclar.RetrieveElectaxinvcComparisonCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_evid","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_evid","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.sysAdminYn = scwin.login.sysAdminYn;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.isSubCompany = false;
scwin.vEmpNo = $c.data.getMemInfo($p, "empNo");
scwin.isFirst = true;

// hidden 컴포넌트
scwin.txtCoClsCd;
scwin.txt_stYm;
scwin.txt_endYm;
scwin.txt_submitDt;
scwin.declarYr;
scwin.vatQuartYyClsCd;
scwin.txt_evidClsNm;
scwin.onpageload = function () {};
scwin.onUdcCompleted = async function () {
  const codeOptions = [{
    grpCd: "FI013",
    compID: "acb_vatQuartYyClsCd",
    opt: {
      "range": "1,01"
    }
  }, {
    grpCd: "FI019",
    compID: "acb_pchsSellClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);

  // scwin.f_Header();
  scwin.f_Setting();
  scwin.f_setCompanyInfo();
  //cfDisableObjects([lc_evidClsCd]);
  $c.gus.cfDisableObjects($p, [chk_filterYn]);
};

//-------------------------------------------------------------------------
// 조회조건 셋팅 
//------------------------------------------------------------------------- 
scwin.f_Setting = function () {
  acb_vatQuartYyClsCd.setSelectedIndex(0);
  acb_evidClsCd.setSelectedIndex(0);
  ed_declarYr.setValue(WebSquare.date.getCurrentServerDate().substring(0, 4));
  ed_vatDeclarAcctDeptCd.focus();
  scwin.txt_submitDt = WebSquare.date.getCurrentServerDate();
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function (e) {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  scwin.pWinClose = pWinCloseTF;
  var rtnList = udc_companyInfo.cfCommonPopUp(scwin.udc_coCd_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_coCd_callBackFunc = function (rtnList) {
  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (ed_coCd.options.hidVal != rtnList[0]) scwin.f_initObj();
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
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  ed_vatDeclarCrn.setValue("");
  var rtnList = new Array();
  // 부가세신고부서조회
  var param = ",,," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + "," + ed_declarYr.getValue().substring(0, 4);
  rtnList = udc_retrieveVatDeclar.cfCommonPopUp(scwin.udc_retrieveVatDeclar_callBack, ed_vatDeclarAcctDeptCd.getValue().trim(), ed_vatDeclarAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
};
scwin.udc_retrieveVatDeclar_callBack = function (rtnList) {
  scwin.f_resultPopEd(ed_vatDeclarAcctDeptCd, ed_vatDeclarAcctDeptNm, rtnList);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_vatDeclarAcctDeptCd.setValue(rtnList[2]); //부가세부서코드
    ed_vatDeclarAcctDeptNm.setValue(rtnList[3]); //부가세부서명
    ed_vatDeclarCrn.setValue(rtnList[5]); //부가세사업자번호
    ed_vatDeclarAcctDeptCd.options.hidVal = rtnList[2]; //히든값        
  } else {
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDseclarAcctDeptNm.setValue("");
    ed_vatDeclarCrn.setValue("");
    ed_vatDeclarAcctDeptCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명
    strCd.hidVal = rtnList[0]; // 히든값
  } else {
    strCd.setValue("");
    strNm.setValue("");
    strCd.options.hidVal = "";
  }
};
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_vatDeclarAcctDeptCd, ed_vatDeclarAcctDeptNm, ed_vatDeclarCrn]); //  부가세 신고 부서  
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  scwin.f_DateSetting();
  if (ed_coCd.getValue() == "") {
    $c.win.alert($p, "회사코드는 필수 입력 조회 조건입니다.");
    return;
  }
  if (!(await $c.gus.cfValidate($p, [ed_declarYr]))) return;

  // gr_evid.Redraw = "false";    
  // ds_search.UseChangeInfo = false;
  // tr_search.Action="/ac.fi.taxbiz.vatdeclar.RetrieveElectaxinvcComparisonCMD.do";

  dma_search.set("declarYr", ed_declarYr.getValue());
  dma_search.set("vatQuartYyClsCd", acb_vatQuartYyClsCd.getValue());
  dma_search.set("evidClsCd", acb_evidClsCd.getValue());
  dma_search.set("stYm", scwin.txt_stYm);
  dma_search.set("endYm", scwin.txt_endYm);
  dma_search.set("submitDt", scwin.txt_submitDt);
  dma_search.set("ditVatDeclarDeptCd", ed_vatDeclarAcctDeptCd.getValue());
  dma_search.set("pchsSellClsCd", acb_pchsSellClsCd.getValue());
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  $c.sbm.execute($p, sbm_search);
};
scwin.f_filter = function () {
  if (chk_filterYn.getValue() == "1") {
    ds_evid.setColumnFilter({
      type: 'regExp',
      colIndex: 'gapSpplyAmtDebisv',
      key: /^(?!0$).+/,
      condition: 'and'
    });
    ds_evid.setColumnFilter({
      type: 'regExp',
      colIndex: 'gapVat',
      key: /^(?!0$).+/,
      condition: 'and'
    });
    ed_totalRow.setValue(ds_evid.getFilteredColData().length);
  } else {
    // ds_evid.UseFilter = "false";
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 날짜셋팅
//-------------------------------------------------------------------------
scwin.f_DateSetting = function () {
  var imsi_date = "";
  if (acb_vatQuartYyClsCd.getValue() == "1") {
    imsi_date = "0101";
  } else if (acb_vatQuartYyClsCd.getValue() == "2") {
    imsi_date = "0401";
  } else if (acb_vatQuartYyClsCd.getValue() == "3") {
    imsi_date = "0701";
  } else if (acb_vatQuartYyClsCd.getValue() == "4") {
    imsi_date = "1001";
  }
  imsi_date = ed_declarYr.getValue().trim() + imsi_date;
  scwin.txt_stYm = imsi_date;
  scwin.txt_endYm = imsi_date.toDate().after(0, 3, -1).format("YYYYMMDD");
};

//-------------------------------------------------------------------------
// function name : f_GridToExcel
// function desc : 엑셀저장
// function Parameter : gr_groupCode : 그리드명, gridName : 엑셀저장명
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_evid.getTotalRow() <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_009, Array("데이타")); // 출력할 @이(가) 없습니다.
    return false;
  }
  var options = {
    fileName: "부가세조정내역",
    sheetName: "부가세조정내역"
  };
  $c.data.downloadGridViewExcel($p, gr_evid, options);
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_retrieveVatDeclar_onclickEvent = function (e) {
  scwin.f_openPopUp('', 'F');
};
scwin.udc_retrieveVatDeclar_onblurCodeEvent = function (e) {
  if (ed_vatDeclarAcctDeptCd.getValue().trim() == ed_vatDeclarAcctDeptCd.options.hidVal) return;
  ed_vatDeclarAcctDeptNm.setValue("");
  ed_vatDeclarCrn.setValue("");
  ed_vatDeclarAcctDeptCd.options.hidVal = "";
  if (ed_vatDeclarAcctDeptCd.getValue().trim() != "") scwin.f_openPopUp('', 'T');
};
scwin.ed_declarYr_onblur = function (e) {
  if (ed_vatDeclarAcctDeptCd.getValue() == null || ed_vatDeclarAcctDeptCd.getValue() == "") {
    ed_vatDeclarAcctDeptCd.options.hidVal = "";
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
    ed_vatDeclarCrn.setValue("");
  } else {
    scwin.f_openPopUp('', 'T');
  }
};
scwin.sbm_search_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    var rowCnt = ds_evid.getTotalRow();
    $c.gus.cfEnableObjects($p, [chk_filterYn]);
    ed_totalRow.setValue(rowCnt);
    if (chk_filterYn.getValue() == "1") {
      ds_evid.setColumnFilter({
        type: 'regExp',
        colIndex: 'gapSpplyAmtDebisv',
        key: /^(?!0$).+/,
        condition: 'and'
      });
      ds_evid.setColumnFilter({
        type: 'regExp',
        colIndex: 'gapVat',
        key: /^(?!0$).+/,
        condition: 'and'
      });
      ed_totalRow.setValue(ds_evid.getFilteredColData().length);
      if (ds_evid.getFilteredColData().length == 0) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      }
    }

    // cfHideDSWaitMsg(gr_evid);
    // cfShowTotalRows(totalRows, rowCnt);
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    } else {
      for (let i = 0; i < rowCnt; i++) {
        if (ds_evid.getCellData(i, "gapSpplyAmtDebis") != 0 || ds_evid.getCellData(i, "gapVat") != 0) {
          gr_evid.setRowBackgroundColor(i, "#fa8072");
        }
      }
      // gr_evid.setFocusedCell(0, 1)
    }
  }
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.pchsSellClsCdFormat = function (value) {
  if (value == "1") {
    return "매출";
  } else if (value == "2") {
    return "매입";
  }
};
scwin.chk_filterYn_onchange = function (info) {
  scwin.f_filter();
};
scwin.btn_search_onkeydown = function (e) {};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'group3',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm',style:'',code:'coCd',refDataCollection:'dma_search',btnId:'btn_company',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',validExpCode:'회사코드:yes',maxlengthName:'65',objTypeName:'data',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 89px;',id:'ed_declarYr',class:'',mandatory:'true',title:'기간',maxByteLength:'4',dataType:'number',validateOnInput:'true','ev:onblur':'scwin.ed_declarYr_onblur'}},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 100px;',allOption:'',id:'acb_vatQuartYyClsCd',class:'',direction:'auto',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_filterYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onchange':'scwin.chk_filterYn_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'금액 불일치항목 정렬'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세신고부서 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveVatDeclarAcctDeptCd',codeId:'ed_vatDeclarAcctDeptCd',validTitle:'',nameId:'ed_vatDeclarAcctDeptNm',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_retrieveVatDeclar',refDataCollection:'dma_search',maxlengthName:'50',code:'vatDeclarAcctDeptCd','ev:onclickEvent':'scwin.udc_retrieveVatDeclar_onclickEvent',name:'vatDeclarAcctDeptNm','ev:onblurCodeEvent':'scwin.udc_retrieveVatDeclar_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_vatDeclarCrn',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'증빙구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_evidClsCd',style:'width: 192px;',submenuSize:'fixed',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세금계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'30'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출/입',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_pchsSellClsCd',style:'width: 86px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick','ev:onkeydown':'scwin.btn_search_onkeydown',title:'기간'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_evid',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_evid',focusMode:'row',id:'gr_evid',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'신고<br/>년도',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'분기',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'매출<br/>매입',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'신고</br>사업자',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'거래처<br/>사업자',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'거래처명',width:'200',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column52',value:'거래처<br/>사업자구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'480',inputType:'text',style:'',id:'column49',value:'DEBIS',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'column37',value:'ESL',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'270',inputType:'text',style:'',id:'column55',value:'DEBIS - ESL',displayMode:'label',class:'',colSpan:'3',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column85',value:'DEBIS<br/>공급가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column84',value:'DEBIS<br/>부가세액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column83',value:'DEBIS<br/>매수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column82',value:'신고제외<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column81',value:'ESL<br/>공급가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column80',value:'ESL<br/>부가세액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column79',value:'ESL<br/>매수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column78',value:'공급가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column77',value:'부가세액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column76',value:'매수',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'declarYr',inputType:'text',style:'',value:'',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatQuartYyClsCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSellClsCd',inputType:'text',style:'',value:'',width:'80',readOnly:'true',textAlign:'left',displayFormatter:'scwin.pchsSellClsCdFormat'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarCrn',inputType:'text',style:'',value:'',width:'150',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txnCrn',inputType:'text',style:'',value:'',width:'150',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txnBusiNmCmpy',inputType:'text',style:'',value:'',width:'200',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'busiClsCd',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'spplyAmtDebis',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'vatDebis',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'numCntDebis',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'declarExceptYn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'spplyAmtEsl',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'vatEsl',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'numCntEsl',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'gapSpplyAmtDebis',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'gapVat',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'gapNumCnt',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column51',value:'',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,###',expression:'sum(\'spplyAmtDebis\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column48',value:'',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,###',expression:'sum(\'vatDebis\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,###',expression:'sum(\'numCntDebis\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column39',value:'',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,###',expression:'sum(\'spplyAmtEsl\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column33',value:'',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,###',expression:'sum(\'vatEsl\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column36',value:'',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,###',expression:'sum(\'numCntEsl\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,###',expression:'sum(\'gapSpplyAmtDebis\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,###',expression:'sum(\'gapVat\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column63',value:'',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,###',expression:'sum(\'gapNumCnt\')',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})