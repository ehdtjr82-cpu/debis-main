/*amd /ui/ac/fi/taxbiz/vatctrl/fi_100_01_30p.xml 60474 a4631479ef305ccff0ef71c010472bcdc55a3a221474b41982b87157a9de1749 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'declarYr',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatQuartYyClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatDeclarAcctDeptCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatDeclarAcctDeptNm',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crnNm',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'evidClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stYm',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endYm',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'submitDt',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ditVatDeclarDeptCd',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsSellClsCd',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ver',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatDeclarDataSeq',name:'name16',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vatDeclare',saveRemovedData:'true','ev:ondataload':'scwin.ds_vatDeclare_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'flag',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarCrn',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarDataSeq',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnCrn',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcondNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'biztypeNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroFormat',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainWholesale',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainSleeve',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'num',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxOfficeCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag1',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag2',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag3',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minusPlus',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumSeq',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumCnt',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumMinusPlus',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumSpplyAmt',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumSeq1',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumCnt1',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumMinusPlus1',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumSpplyAmt1',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col1',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col11',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col12',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col13',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col14',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col15',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col16',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col17',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col18',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col19',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col20',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col21',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col22',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col23',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col24',name:'name53',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evid',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarYr',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSellClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarCrn',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnCrn',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnBusiNmCmpy',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcondNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'biztypeNm',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'numSpplyAmt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'numVatAmt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'numCnt',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col17',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatQuartYyClsCd',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'version',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarDataSeq',name:'name20',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.vatdeclar.RetrieveCtrlFinalValueAddedTaxMonthCumDataCtrtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_evid","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_evid","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_search_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.taxbiz.vatdeclar.CreateCtrlFinalValueAddedTaxMonthCumDataCtrtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_evid","key":"IN_DS1"}',target:'',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_save_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_vatDeclare',action:'/ac.fi.taxbiz.vatdeclar.CreateValueAddedTaxDeclarationFileCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"IN_DS1"}',target:'',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_vatDeclare_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_vatDeclare2',action:'/ac.fi.taxbiz.vatdeclar.CreateValueAddedTaxDeclarationFile2CMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_vatDeclare","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_vatDeclare","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.sysAdminYn = scwin.login.sysAdminYn;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.vLoginCoCd2 = "";
scwin.isSubCompany = false;
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
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: "FI013",
    compID: "acb_vatQuartYyClsCd",
    opt: {
      "range": "1,01"
    }
  } // 기간콤보
  , {
    grpCd: "FI083",
    compID: "acb_evidClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);

  // f_Header();
  scwin.f_Setting();
  scwin.f_setCompanyInfo();
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
  dma_search.set("ver", "0");
  dma_search.set("vatDeclarDataSeq", "0");
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
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
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
  // 부가세신고부서조회
  ed_vatDeclarCrn.setValue("");
  var param = ",,," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + "," + ed_declarYr.getValue().substring(0, 4);
  udc_retrieveVatDeclar.cfCommonPopUp(scwin.udc_retrieveVatDeclar_callBack, ed_vatDeclarAcctDeptCd.getValue().trim(), ed_vatDeclarAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
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
    ed_vatDeclarAcctDeptNm.setValue("");
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
    strCd.options.hidVal = rtnList[0]; // 히든값
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
    await $c.win.alert($p, "회사코드는 필수 입력 조회 조건입니다.");
    return;
  }
  dma_search.set("declarYr", ed_declarYr.getValue());
  dma_search.set("vatQuartYyClsCd", acb_vatQuartYyClsCd.getValue());
  dma_search.set("evidClsCd", acb_evidClsCd.getValue());
  dma_search.set("stYm", scwin.txt_stYm);
  dma_search.set("endYm", scwin.txt_endYm);
  dma_search.set("submitDt", scwin.txt_submitDt);
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  dma_search.set("ditVatDeclarDeptCd", ed_vatDeclarAcctDeptCd.getValue());
  $c.sbm.execute($p, sbm_search);
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
// function name : f_Save
// function desc : 저장 
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다. 
  if (ds_evid.getModifiedIndex().length <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("데이타"));
    return;
  }
  var nRow = ds_evid.getMatchedIndex("chk", "1").length;
  if (nRow == 0) {
    await $c.win.alert($p, "선택한 내역이 존재하지 않습니다.");
    return;
  }
  for (var i = 0; i < ds_evid.getTotalRow(); i++) {
    if (ds_evid.getCellData(i, "chk") == "1") {
      if (ds_evid.getCellData(i, "spplyAmt") == "" && ds_master.getCellData(i, "spplyAmt") != "0") {
        await $c.win.alert($p, "선택한 " + i + 1 + "번째 행의 공급금액을(를) 입력하십시요");
        // ds_evid.RowPosition = i;
        gr_evid.setFocusedCell(i, "spplyAmt", true);
        return;
      }
      if (ds_evid.getCellData(i, "vatAmt") == "" && ds_master.getCellData(i, "vatAmt") != "0") {
        await $c.win.alert($p, "선택한 " + i + 1 + "번째 행의 부가세을(를) 입력하십시요");
        // ds_evid.RowPosition = i;		
        gr_evid.setFocusedCell(i, "vatAmt", true);
        return;
      }
      if (ds_evid.getCellData(i, "cnt") == "" && ds_master.getCellData(i, "cnt") != "0") {
        await $c.win.alert($p, "선택한 " + i + 1 + "번째 행의 매수을(를) 입력하십시요");
        // ds_evid.RowPosition = i;	
        gr_evid.setFocusedCell(i, "cnt", true);
        return;
      }
    }
  }
  // ds_evid.UseChangeInfo = false;
  if ((await $c.win.confirm($p, "저장 하시겠습니까?")) == true) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// function name : f_GridToExcel
// function desc : 엑셀저장
// function Parameter : gr_groupCode : 그리드명, gridName : 엑셀저장명
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function (gr_groupCode, gridName) {
  if (ds_evid.getTotalRow() <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_009, Array("데이타")); // 출력할 @이(가) 없습니다.
    return false;
  }
  var options = {
    fileName: "부가세조정내역.xlsx",
    sheetName: "부가세조정내역",
    type: 1,
    columnMove: true //그리드 컬럼이동시 이동된 상태로 다운로드 유무 ( "true"인경우 컬럼이동 순서대로 출력 )
    //evenRowBackgroundColor : "#f5fff5"//excel파일에서 그리드 body의 짝수줄의 배경색
  };
  $c.data.downloadGridViewExcel($p, gr_evid, options);
};

//-------------------------------------------------------------------------
// 대상데이타생성
//-------------------------------------------------------------------------
scwin.f_CreateFile = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_declarYr, acb_vatQuartYyClsCd]))) return false;
  scwin.f_DateSetting();
  dma_search.set("declarYr", ed_declarYr.getValue());
  dma_search.set("vatQuartYyClsCd", acb_vatQuartYyClsCd.getValue());
  dma_search.set("evidClsCd", acb_evidClsCd.getValue());
  dma_search.set("stYm", scwin.txt_stYm);
  dma_search.set("endYm", scwin.txt_endYm);
  dma_search.set("submitDt", scwin.txt_submitDt);
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  dma_search.set("ditVatDeclarDeptCd", ed_vatDeclarAcctDeptCd.getValue());
  $c.sbm.execute($p, sbm_vatDeclare);
};

//-------------------------------------------------------------------------
// 파일생성(매출)
//-------------------------------------------------------------------------
scwin.f_CreateFile2 = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_declarYr, acb_vatQuartYyClsCd]))) return false;
  if (ed_vatDeclarAcctDeptCd.getValue() == "") {
    await $c.win.alert($p, "파일생성시 부가세신고부서는 필수 입력 조건입니다.");
    return;
  }
  scwin.f_DateSetting();
  dma_search.set("pchsSellClsCd", "1"); //매출

  dma_search.set("declarYr", ed_declarYr.getValue());
  dma_search.set("vatQuartYyClsCd", acb_vatQuartYyClsCd.getValue());
  dma_search.set("evidClsCd", acb_evidClsCd.getValue());
  dma_search.set("stYm", scwin.txt_stYm);
  dma_search.set("endYm", scwin.txt_endYm);
  dma_search.set("submitDt", scwin.txt_submitDt);
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  dma_search.set("ditVatDeclarDeptCd", ed_vatDeclarAcctDeptCd.getValue());
  $c.sbm.execute($p, sbm_vatDeclare2);
};

//-------------------------------------------------------------------------
// 파일생성(매입)
//-------------------------------------------------------------------------
scwin.f_CreateFile3 = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_declarYr, acb_vatQuartYyClsCd]))) return false;
  if (ed_vatDeclarAcctDeptCd.getValue() == "") {
    await $c.win.alert($p, "파일생성시 부가세신고부서는 필수 입력 조건입니다.");
    return;
  }
  scwin.f_DateSetting();
  dma_search.set("pchsSellClsCd", "2"); //매입		

  dma_search.set("declarYr", ed_declarYr.getValue());
  dma_search.set("vatQuartYyClsCd", acb_vatQuartYyClsCd.getValue());
  dma_search.set("evidClsCd", acb_evidClsCd.getValue());
  dma_search.set("stYm", scwin.txt_stYm);
  dma_search.set("endYm", scwin.txt_endYm);
  dma_search.set("submitDt", scwin.txt_submitDt);
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  dma_search.set("ditVatDeclarDeptCd", ed_vatDeclarAcctDeptCd.getValue());
  $c.sbm.execute($p, sbm_vatDeclare2);
};

//-------------------------------------------------------------------------
// 파일생성(전체)
//-------------------------------------------------------------------------
scwin.f_CreateFile4 = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_declarYr, acb_vatQuartYyClsCd]))) return false;
  if (ed_vatDeclarAcctDeptCd.getValue() == "") {
    await $c.win.alert($p, "파일생성시 부가세신고부서는 필수 입력 조건입니다.");
    return;
  }
  scwin.f_DateSetting();
  dma_search.set("pchsSellClsCd", ""); //전체					

  dma_search.set("declarYr", ed_declarYr.getValue());
  dma_search.set("vatQuartYyClsCd", acb_vatQuartYyClsCd.getValue());
  dma_search.set("evidClsCd", acb_evidClsCd.getValue());
  dma_search.set("stYm", scwin.txt_stYm);
  dma_search.set("endYm", scwin.txt_endYm);
  dma_search.set("submitDt", scwin.txt_submitDt);
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  dma_search.set("ditVatDeclarDeptCd", ed_vatDeclarAcctDeptCd.getValue());
  $c.sbm.execute($p, sbm_vatDeclare2);
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo("F");
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_retrieveCrnInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('', 'F');
};
scwin.udc_retrieveCrnInfo_onblurCodeEvent = function (e) {
  if (ed_vatDeclarAcctDeptCd.getValue().trim() == ed_vatDeclarAcctDeptCd.options.hidVal) return;
  ed_vatDeclarAcctDeptNm.setValue("");
  ed_vatDeclarCrn.setValue("");
  ed_vatDeclarAcctDeptCd.options.hidVal = "";
  if (ed_vatDeclarAcctDeptCd.getValue().trim() != "") scwin.f_openPopUp('', 'T');
};
scwin.sbm_search_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowCnt = ds_evid.getTotalRow();
    ed_totalRow.setValue(rowCnt);
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
  }
};
scwin.ed_declarYr_onblur = function (e) {
  if (ed_vatDeclarAcctDeptCd.getValue() == null || ed_vatDeclarAcctDeptCd.getValue() == "") {
    ed_vatDeclarAcctDeptCd.options.hidVal = '';
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
    ed_vatDeclarCrn.setValue("");
  } else {
    scwin.f_openPopUp('', 'T');
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  }
};
scwin.sbm_vatDeclare_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_012, ["부가세신고최종자료"]); // @을(를)성공적으로 생성하였습니다
    scwin.f_Retrieve();
  }
};
scwin.ds_vatDeclare_ondataload = async function () {
  var ditCrn = ACConstants.DIT_CRN;
  var ditCrnNew = ACConstants.DIT_CRN_NEW;
  var rowCnt = ds_vatDeclare.getTotalRow();
  var grid = "";
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    // 파일제목생성
    //K1231212.345
    var title = "";
    if (acb_evidClsCd.getValue() == "10") {
      if (ed_vatDeclarCrn.getValue() == "") {
        if (scwin.declarYr < "2011") {
          title = "K" + ditCrn.substring(0, 7) + "." + ditCrn.substring(7);
        } else {
          title = "K" + ditCrnNew.substring(0, 7) + "." + ditCrnNew.substring(7);
        }
      } else {
        title = "K" + ed_vatDeclarCrn.getValue().substring(0, 7) + "." + ed_vatDeclarCrn.getValue().substring(7);
      }
      grid = gr_vat;
      // gr_vat.ExportFile2(title, '', +9);
    } else if (acb_evidClsCd.getValue() == '30') {
      title = "H" + ds_vatDeclare.getCellData(0, 'seq').substring(0, 7) + "." + ds_vatDeclare.getCellData(0, 'seq').substring(7);
      grid = gr_vat1;
      // gr_vat1.ExportFile2(title,'',+9);
    } else if (acb_evidClsCd.getValue() == '40') {
      title = "J" + ds_vatDeclare.getCellData(0, 'col5').substring(0, 7) + "." + ds_vatDeclare.getCellData(0, 'col5').substring(7);
      grid = gr_vat2;
      // gr_vat2.ExportFile2(title, '', +9);
    } else if (acb_evidClsCd.getValue() == '50') {
      title = "J" + ds_vatDeclare.getCellData(0, 'col5').substring(0, 7) + "." + ds_vatDeclare.getCellData(0, 'col5').substring(7);
      grid = gr_vat2;
      // gr_vat2.ExportFile2(title, '', +9);
    } else if (acb_evidClsCd.getValue() == '80') {
      title = "U" + ds_vatDeclare.getCellData(0, 'col5') + ".V166";
      grid = gr_vat3;
      // gr_vat3.ExportFile2(title, '', +9);
    }
    const options = {
      fileName: title + ".txt",
      //[default : excel.csv] options.fileName 값이 없을 경우 default값 세팅
      type: "1",
      header: "0"
      // delim: "\u200B"
    };
    await $c.data.downloadGridViewCSV($p, grid, options);

    // 생성후 조회
    scwin.f_Retrieve();
  }
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_Create_onclick = function (e) {
  scwin.f_CreateFile();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_Create2_onclick = function (e) {
  scwin.f_CreateFile2();
};
scwin.btn_Create3_onclick = function (e) {
  scwin.f_CreateFile3();
};
scwin.btn_Create4_onclick = function (e) {
  scwin.f_CreateFile4();
};
scwin.evidClsNmFormat = function (data, formatData, rowIdx, colIdx) {
  var value = ds_evid.getCellData(rowIdx, "evidClsCd");
  if (value == "10") {
    return "세금계산서";
  } else if (value == "30") {
    return "계산서";
  } else if (value == "40") {
    return "법인카드";
  } else if (value == "50") {
    return "개인카드";
  } else if (value == "80") {
    return "납부세액";
  }
};
scwin.pchsSellClsCdFormat = function (value) {
  if (value == ACConstants.SELL) {
    return "매출";
  } else if (value == ACConstants.PCHS) {
    return "매입";
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm',style:'',code:'coCd',refDataCollection:'dma_search',btnId:'btn_company',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',maxlengthName:'65',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 80px;',id:'ed_declarYr',class:'',maxlength:'4',dataType:'number',mandatory:'true',title:'기간','ev:onblur':'scwin.ed_declarYr_onblur'}},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 110px;',allOption:'false',id:'acb_vatQuartYyClsCd',class:'',direction:'auto'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세신고부서 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveVatDeclarAcctDeptCd',codeId:'ed_vatDeclarAcctDeptCd',validTitle:'부가세신고부서',nameId:'ed_vatDeclarAcctDeptNm',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_retrieveVatDeclar',refDataCollection:'dma_search',maxlengthName:'50',code:'vatDeclarAcctDeptCd','ev:onclickEvent':'scwin.udc_retrieveCrnInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveCrnInfo_onblurCodeEvent',name:'vatDeclarAcctDeptNm',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_vatDeclarCrn',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'증빙구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_evidClsCd',style:'width: 193px;',submenuSize:'fixed',sortOption:'value',sortMethod:'ascending'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_evid',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_evid',id:'gr_evid',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'12',visibleRowNumFix:'true',rowStatusVisible:'true',fixedColumnNoMove:'true',fixedColumn:'1'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'선택',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'신고년도',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'계산서일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'부가세</br>신고부서코드',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'부가세</br>신고부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'매출입</br>구분',width:'100'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column52',value:'증빙구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'증빙구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column46',value:'신고사업자</br>등록번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column43',value:'거래사업자</br>등록번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'거래사업자</br>상호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'업태명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'종목명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'공급가액',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'부가세',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'매수',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'신고년도',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column70',value:'부가세분기구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'버전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column67',value:'부가세신고자료순번',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'70',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarYr',inputType:'text',style:'',value:'',width:'100',readOnly:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyDt',inputType:'text',style:'',value:'',width:'120',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd',colMerge:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatDeclarAcctDeptCd',inputType:'text',style:'',value:'',width:'130',readOnly:'true',colMerge:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatDeclarAcctDeptNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'left',colMerge:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSellClsCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true',colMerge:'true',excelCellType:'text',displayFormatter:'scwin.pchsSellClsCdFormat'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'evidClsCd',value:'',displayMode:'label',readOnly:'true',hidden:'true',colMerge:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'evidClsNm',value:'',displayMode:'label',readOnly:'true',colMerge:'true',excelCellType:'text',customFormatter:'scwin.evidClsNmFormat',upperColumn:'pchsSellClsCd'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'declarCrn',value:'',displayMode:'label',readOnly:'true',colMerge:'true',excelCellType:'text',upperColumn:'pchsSellClsCd'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'txnCrn',value:'',displayMode:'label',readOnly:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'txnBusiNmCmpy',value:'',displayMode:'label',readOnly:'true',textAlign:'left',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bizcondNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'biztypeNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'numSpplyAmt',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###',excelCellType:'number',maxLength:'13'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'numVatAmt',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###',excelCellType:'number',maxLength:'13'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'numCnt',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###',excelCellType:'number',maxLength:'7'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col17',value:'',displayMode:'label',hidden:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'vatQuartYyClsCd',value:'',displayMode:'label',hidden:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'version',value:'',displayMode:'label',hidden:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'vatDeclarDataSeq',value:'',displayMode:'label',hidden:'true',excelCellType:'text'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column36',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',expression:'sum(\'numSpplyAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',expression:'sum(\'numVatAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',expression:'sum(\'numCnt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_vatDeclare',id:'gr_vat',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: : 300px',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column16',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column14',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column12',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column11',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column10',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column9',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column8',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column7',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column6',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column1',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'flag',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'declarCrn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vatDeclarDataSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'txnCrn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'busiNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bizcondNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'biztypeNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'zeroFormat',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'spplyAmt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vatAmt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'mainWholesale',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'mainSleeve',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'num',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'taxOfficeCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rmk',displayMode:'label'}}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_vatDeclare',id:'gr_vat1',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column20',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column18',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column16',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column14',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column12',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column11',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column10',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column9',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column8',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column7',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column6',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column1',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'flag',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'flag1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'flag2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'flag3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'taxOfficeCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'declarCrn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'txnCrn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'busiNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bizcondNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'biztypeNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'zeroFormat',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'minusPlus',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'spplyAmt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sumSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sumCnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sumMinusPlus',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sumSpplyAmt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sumSeq1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sumCnt1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sumMinusPlus1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sumSpplyAmt1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rmk',displayMode:'label'}}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_vatDeclare',id:'gr_vat2',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column20',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column18',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column16',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column14',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column12',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column11',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col4',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col5',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col6',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col7',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col8',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col9',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col10',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col11',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col12',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col13',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col14',displayMode:'label'}}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_vatDeclare',id:'gr_vat3',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column20',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column18',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column16',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column14',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column12',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column11',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column20',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column18',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column16',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column14',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column12',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column11',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col4',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col5',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col6',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col7',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col8',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col9',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col10',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col11',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col12',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col13',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col14',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col15',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col16',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col17',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col18',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col19',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col24',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'info-list txt-black'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'생성: 최초 E세로 데이터와 DEBIS 데이터를 기준으로 데이터 생성함, ※ 저장: 생성된 데이터에 수정된 값을 저장 ',class:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'저장: 생성된 데이터에 수정된 값을 저장',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'파일생성: 최종 자료 파일로 출력 ',class:'',tagname:'p'}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_Create',type:'button',class:'btn','ev:onclick':'scwin.btn_Create_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Save',type:'button',class:'btn','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Create2',type:'button',class:'btn','ev:onclick':'scwin.btn_Create2_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출file생성'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Create3',type:'button',class:'btn','ev:onclick':'scwin.btn_Create3_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입file생성'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Create4',type:'button',class:'btn','ev:onclick':'scwin.btn_Create4_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체file생성'}]}]}]}]}]}]}]}]}]})