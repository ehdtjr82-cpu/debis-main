/*amd /ui/ac/fi/taxbiz/vatctrl/fi_100_01_50b.xml 42085 b4eb89949abc36dddfdc1baf5a039188e8f4832818468e730bdb39e698dbeb0d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'declarYr',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatQuartYyClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatDeclarAcctDeptCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatDeclarAcctDeptNm',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crnNm',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stYm',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endYm',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'submitDt',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ditVatDeclarDeptCd',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_evid',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',name:'부가세 신고부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellTaxnTaxinvcTaxnstnd',name:'매출과세세금계산서과표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellTaxnTaxinvcTaxamt',name:'매출과세세금계산서세액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellTaxnEtcTaxnstnd',name:'매출과세기타과표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellTaxnEtcTaxamt',name:'매출과세기타세액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellZerotaxTaxinvcTaxnstnd',name:'매출영세세금계산서과표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellZerotaxEtcTaxnstnd',name:'매출영세기타과표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnstnd',name:'과세표준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTaxnstnd',name:'매입과세표준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTaxnTaxamt',name:'매입과세세액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAgendaStnd',name:'매입의제표준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAgendaTaxamt',name:'매입의제매입세액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addTax',name:'가산세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductTaxAmt',name:'공제세액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subtractPmntTaxamt',name:'차감납부할세액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatQuartYyClsCd',name:'부가세분기구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ver',name:'버전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarYr',name:'신고년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'부가세 신고부서코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vatDeclare',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col11',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col12',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col13',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col14',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col15',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col16',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col17',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col18',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col19',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col20',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col21',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col22',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col23',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col24',name:'name24',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.vatdeclar.RetrieveTaxnStndFinalFileCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_evid","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_evid","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.taxbiz.vatdeclar.CreateTaxnStndDeclarationDataCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_evid","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_vatDeclare',action:'/ac.fi.taxbiz.vatdeclar.CreateTaxnStndDeclarationFileCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_vatDeclare_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_vatDeclare2',action:'/ac.fi.taxbiz.vatdeclar.CreateTaxnStndDeclarationFile2CMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_vatDeclare","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_vatDeclare","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_vatDeclare2_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 로그인사용자 정보
scwin.login = ""; // 로그인 정보를 가져온다.' 
scwin.privAdmin = ""; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님
scwin.g_sCurrDate = "";
scwin.vLoginCoCd = ""; // 소속 자회사  
scwin.vLoginCoClsCd = ""; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.isSubCompany = "";

//tobe추가
scwin.chk = "";

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.login = $c.data.getMemInfo($p);
  scwin.privAdmin = scwin.login.privAdmin;
  scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.vLoginCoCd = scwin.login.coCd || ""; // 소속 자회사  
  scwin.vLoginCoClsCd = scwin.login.coClsCd || ""; //회계_회사구분('CO035' : 0:동부 EXPRESS)
  scwin.vUserHomeClsCd = scwin.login.userHomeClsCd; // 사용자소속구분코드 
  scwin.isSubCompany = false;
  scwin.chk = true;
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_Setting();
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 조회조건 셋팅 
//------------------------------------------------------------------------- 
scwin.f_Setting = function () {
  //초기값 셋팅
  const codeOptions = [{
    grpCd: "FI013",
    compID: "lc_vatQuartYyClsCd",
    opt: {
      "range": "1,01"
    }
  } // 기간콤보
  ];
  $c.data.setCommonCode($p, codeOptions);
  lc_vatQuartYyClsCd.setSelectedIndex(0);
  ed_declarYr.setValue(scwin.g_sCurrDate.substring(0, 4));
  ed_vatDeclarAcctDeptCd.focus();
  ed_submitDt.setValue(scwin.g_sCurrDate);
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.chk = true;
  scwin.f_PopUpCompanyInfo('T');

  //tobe위치변경 : scwin.f_PopUpCompanyInfo 함수의 콜백함수 맨아래 작성.
  // if ('T' == '<%=privAdmin%>' || !isSubCompany) { // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
  //     cfEnableObjects([ed_coCd, txt_coNm, img_company]);
  // } else {
  //     cfDisableObjects([ed_coCd, txt_coNm, img_company]);
  // }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_coCd.cfCommonPopUp(scwin.f_PopUpCompanyInfoCallback, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 콜백
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfoCallback = function (rtnList) {
  // SET	 
  if (rtnList) {
    if (rtnList[0] == "N/A") return;
    if (ed_coCd.options.hidVal != rtnList[0]) scwin.f_initObj();
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    ed_coCd.options.hidVal = rtnList[0]; // 히든값
    edCoClsCd.setValue(rtnList[1]); // 회사구분    
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    edCoClsCd.setValue("");
  }
  if (edCoClsCd.getValue() > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.chk) {
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      $c.gus.cfEnableObjects($p, [udc_coCd]);
    } else {
      $c.gus.cfDisableObjects($p, [udc_coCd]);
    }
    scwin.chk = false;
  }
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (flag, check) {
  //부가세신고부서조회
  var param = ",,," + ed_coCd.getValue() + "," + edCoClsCd.getValue() + "," + ed_declarYr.getValue().substring(0, 4);
  await udc_vatDeclarAcctDeptCd.cfCommonPopUp(scwin.f_resultPopEd, ed_vatDeclarAcctDeptCd.getValue().trim(), ed_vatDeclarAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, "T", "부가세관리부서");
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (rtnList) {
  if (rtnList) {
    if (rtnList[0] == "N/A") return;
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
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [udc_vatDeclarAcctDeptCd, ed_vatDeclarCrn]); //  부가세 신고 부서  
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  await scwin.f_DateSetting();
  dma_search.set("vatQuartYyClsCd", lc_vatQuartYyClsCd.getValue());
  if ($c.gus.cfIsNull($p, ed_coCd.getValue())) {
    await $c.win.alert($p, "회사코드는 필수 입력 조회 조건입니다.");
    return;
  }

  //ds_search.UseChangeInfo = false;

  $c.sbm.execute($p, sbm_search);
};
scwin.sbm_search_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowCnt = ds_evid.getRowCount();
    totalRows.setValue(rowCnt);
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
  }
};

//-------------------------------------------------------------------------
// 날짜셋팅
//-------------------------------------------------------------------------
scwin.f_DateSetting = function () {
  //tobe추가
  if ($c.gus.cfIsNull($p, ed_declarYr.getValue())) return;
  var imsi_date = "";
  if (lc_vatQuartYyClsCd.getValue() == "1") {
    imsi_date = "0101";
  } else if (lc_vatQuartYyClsCd.getValue() == "2") {
    imsi_date = "0401";
  } else if (lc_vatQuartYyClsCd.getValue() == "3") {
    imsi_date = "0701";
  } else if (lc_vatQuartYyClsCd.getValue() == "4") {
    imsi_date = "1001";
  }
  imsi_date = ed_declarYr.getValue().trim() + imsi_date;
  ed_stYm.setValue(imsi_date);

  //ed_endYm.setValue(imsi_date.toDate().after(0,3,-1).format("YYYYMMDD");	
  var add3Month = $c.date.addMonth($p, imsi_date, 3);
  var addDay = $c.date.addDate($p, add3Month, -1);
  ed_endYm.setValue(addDay);
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장 
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  //변경한 데이터가 있는지 체크한다. 
  if (ds_evid.getModifiedIndex().length < 1) {
    //if(ds_evid.IsUpdated == false) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("데이타"));
    return;
  }

  //ds_evid.UseChangeInfo = false;

  if (await $c.win.confirm($p, "저장 하시겠습니까?")) {
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// function name : f_GridToExcel
// function desc : 엑셀저장
// function Parameter : gr_groupCode : 그리드명, gridName : 엑셀저장명
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_evid.getRowCount() <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_009, Array("데이타")); // 출력할 @이(가) 없습니다.
    return false;
  }
  var options = {
    fileName: "부가세조정내역.xlsx",
    sheetName: "부가세조정내역"
  };
  $c.data.downloadGridViewExcel($p, gr_evid, options);
};

//-------------------------------------------------------------------------
// 대상데이타생성
//-------------------------------------------------------------------------
scwin.f_CreateFile = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ed_declarYr, lc_vatQuartYyClsCd]))) {
    ed_declarYr.focus();
    return false;
  }
  scwin.f_DateSetting();

  //ds_search.UseChangeInfo = false;
  $c.sbm.execute($p, sbm_vatDeclare); //생성
};
scwin.sbm_vatDeclare_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_012, ["부가세신고최종자료"]); // @을(를)성공적으로 생성하였습니다
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 파일생성
//-------------------------------------------------------------------------
scwin.f_CreateFile2 = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ed_declarYr, lc_vatQuartYyClsCd]))) {
    ed_declarYr.focus();
    return false;
  }
  scwin.f_DateSetting();

  //ds_search.UseChangeInfo = false;
  $c.sbm.execute($p, sbm_vatDeclare2);
};
scwin.sbm_vatDeclare2_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowCnt = ds_vatDeclare.getRowCount();
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    } else {
      // 파일제목생성
      var title = "";
      title = `U${ds_vatDeclare.getRowJSON(0).col5}.V166`;
      // gr_vat3.ExportFile2(title,'',+9);

      const options = {
        fileName: title + ".txt",
        //[default : excel.csv] options.fileName 값이 없을 경우 default값 세팅
        type: "1",
        header: "0",
        delim: "\u200B"
      };
      await $c.data.downloadGridViewCSV($p, gr_vat3, options);

      // 생성후 조회
      scwin.f_Retrieve();
    }
  }
};
scwin.udc_coCd_onblurCode = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_coCd_onclick = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_vatDeclarAcctDeptCd_onclick = function (e) {
  ed_vatDeclarCrn.setValue("");
  scwin.f_openPopUp('', 'F');
};
scwin.udc_vatDeclarAcctDeptCd_onblurCode = function (e) {
  if (ed_vatDeclarAcctDeptCd.getValue().trim() == ed_vatDeclarAcctDeptCd.options.hidVal) return;
  ed_vatDeclarAcctDeptNm.setValue("");
  ed_vatDeclarCrn.setValue("");
  ed_vatDeclarAcctDeptCd.options.hidVal = "";
  if (!$c.gus.cfIsNull($p, ed_vatDeclarAcctDeptCd.getValue().trim())) scwin.f_openPopUp('', 'T');
};

//-------------------------------------------------------------------------
// 증빙일자가 변경될 경우 부가세귀속부서도 변경되도록 함.
// (부가세귀속부서이력관리에 따라 추가)
//-------------------------------------------------------------------------
scwin.ed_declarYr_onblur = function (e) {
  if ($c.gus.cfIsNull($p, ed_vatDeclarAcctDeptCd.getValue()) || ed_vatDeclarAcctDeptCd.getValue() == "") {
    ed_vatDeclarAcctDeptCd.options.hidVal = "";
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
    ed_vatDeclarCrn.setValue("");
  } else {
    scwin.f_openPopUp('', 'T');
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfoPopup',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'회사코드',nameId:'ed_coNm',style:'','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCode',id:'udc_coCd',validExpCode:'회사코드:yes',mandatoryCode:'true',mandatoryName:'true',UpperFlagCode:'1',btnId:'btn_company','ev:onclickEvent':'scwin.udc_coCd_onclick',refDataCollection:'dma_search',allowCharCode:'0-9',code:'coCd',objTypeCode:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_declarYr',style:'width: 70px;',maxlength:'4',ref:'data:dma_search.declarYr','ev:onblur':'scwin.ed_declarYr_onblur',allowChar:'0-9',title:'기간'}},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_vatQuartYyClsCd',style:'width: 100px;',submenuSize:'fixed',ref:'',displayMode:'value delim label'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세신고부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_vatDeclarAcctDeptCd',nameId:'ed_vatDeclarAcctDeptNm',popupID:'retrieveVatDeclarAcctDeptCdPopup',popupTitle:'',selectID:'retrieveVatDeclarAcctDeptCd',style:'',id:'udc_vatDeclarAcctDeptCd',code:'vatDeclarAcctDeptCd',refDataCollection:'dma_search',name:'vatDeclarAcctDeptNm',btnId:'btn_slipAcctDeptCdEnd','ev:onclickEvent':'scwin.udc_vatDeclarAcctDeptCd_onclick',validExpCode:'부가세신고부서:no:format=00000',objTypeCode:'data',maxlengthCode:'5',UpperFlagCode:'1',allowCharCode:'0-9','ev:onblurCodeEvent':'scwin.udc_vatDeclarAcctDeptCd_onblurCode',validTitle:'부가세관리부서','ev:onviewchangeCodeEvent':'scwin.udc_vatDeclarAcctDeptCd_onviewchangeCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'xf:input',A:{class:' w150',id:'ed_vatDeclarCrn',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'display: none;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'Y',btnUser:'Y',gridID:'gr_evid',gridDownUserAuth:'X',gridDownFn:'scwin.f_GridToExcel',id:'udc_topGrd'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_evid',id:'gr_evid',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',fixedRow:'0',fixedColumn:'1',fixedColumnNoMove:'true',readOnly:'false',dataDragSelect:'false',columnMove:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column61',value:'부가세<br/>신고부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column58',value:'매출과세세금계산서과표',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column55',value:'매출과세세금계산서세액',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column49',value:'매출과세기타과표',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column52',value:'매출과세기타세액',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column79',value:'매출영세세금계산서과표',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column76',value:'매출영세기타과표',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column73',value:'과세표준',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column67',value:'매입과세표준',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column70',value:'매입과세세액',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column82',value:'매입의제표준',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column85',value:'매입의제매입세액',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column109',value:'가산세',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column106',value:'공제세액',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column103',value:'차감납부할세액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column100',value:'부가세분기구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column97',value:'버전',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column94',value:'선택',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column91',value:'신고년도',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column88',value:'부가세<br/>신고부서코드',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vatDeclarAcctDeptNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'sellTaxnTaxinvcTaxnstnd',value:'',displayMode:'label',editType:'select',editModeEvent:'ondblclick',dataType:'number',displayFormat:'#,###',textAlign:'right',maxLength:'13',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'sellTaxnTaxinvcTaxamt',value:'',displayMode:'label',textAlign:'right',editType:'select',editModeEvent:'ondblclick',dataType:'number',displayFormat:'#,###',maxLength:'13',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'sellTaxnEtcTaxnstnd',value:'',displayMode:'label',editType:'select',editModeEvent:'ondblclick',dataType:'number',displayFormat:'#,###',textAlign:'right',maxLength:'13',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'sellTaxnEtcTaxamt',value:'',displayMode:'label',textAlign:'right',editType:'select',editModeEvent:'ondblclick',dataType:'number',displayFormat:'#,###',maxLength:'13',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'sellZerotaxTaxinvcTaxnstnd',value:'',displayMode:'label',editType:'select',editModeEvent:'ondblclick',dataType:'number',displayFormat:'#,###',textAlign:'right',maxLength:'13',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'sellZerotaxEtcTaxnstnd',value:'',displayMode:'label',editType:'select',editModeEvent:'ondblclick',dataType:'number',displayFormat:'#,###',textAlign:'right',maxLength:'13',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'taxnstnd',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'pchsTaxnstnd',value:'',displayMode:'label',editType:'select',editModeEvent:'ondblclick',dataType:'number',displayFormat:'#,###',textAlign:'right',maxLength:'13',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'pchsTaxnTaxamt',value:'',displayMode:'label',textAlign:'right',editType:'select',editModeEvent:'ondblclick',dataType:'number',displayFormat:'#,###',maxLength:'13',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'pchsAgendaStnd',value:'',displayMode:'label',editType:'select',editModeEvent:'ondblclick',dataType:'number',displayFormat:'#,###',textAlign:'right',maxLength:'13',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'pchsAgendaTaxamt',value:'',displayMode:'label',textAlign:'right',editType:'select',editModeEvent:'ondblclick',dataType:'number',displayFormat:'#,###',maxLength:'13',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'addTax',value:'',displayMode:'label',textAlign:'right',editType:'select',dataType:'number',displayFormat:'#,###',editModeEvent:'ondblclick',maxLength:'13',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'deductTaxAmt',value:'',displayMode:'label',textAlign:'right',editType:'select',editModeEvent:'ondblclick',dataType:'number',displayFormat:'#,###',maxLength:'13',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'subtractPmntTaxamt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'vatQuartYyClsCd',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ver',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'chk',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'declarYr',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'vatDeclarAcctDeptCd',value:'',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',expression:'SUM(\'sellTaxnTaxinvcTaxnstnd\')'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',expression:'SUM(\'sellTaxnTaxinvcTaxamt\')'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column51',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',expression:'SUM(\'sellTaxnEtcTaxnstnd\')'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',expression:'SUM(\'sellTaxnEtcTaxamt\')'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',style:'',id:'column81',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',expression:'SUM(\'sellZerotaxTaxinvcTaxnstnd\')'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column78',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',expression:'SUM(\'sellZerotaxEtcTaxnstnd\')'}},{T:1,N:'w2:column',A:{width:'180',inputType:'expression',style:'',id:'column75',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM(\'taxnstnd\')'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM(\'pchsTaxnstnd\')'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM(\'pchsTaxnTaxamt\')'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',style:'',id:'column84',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM(\'pchsAgendaStnd\')'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',style:'',id:'column87',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM(\'pchsAgendaTaxamt\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column111',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',expression:'SUM(\'addTax\')'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column108',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',expression:'SUM(\'deductTaxAmt\')'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column105',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',expression:'SUM(\'subtractPmntTaxamt\')'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column102',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Create',style:'',type:'button','ev:onclick':'scwin.f_CreateFile'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Save',type:'button',class:'btn','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white','ev:onclick':'scwin.f_CreateFile2',id:'btn_fileCreate',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파일생성'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'display: none;'},E:[{T:1,N:'xf:input',A:{style:'',id:'edCoClsCd',ref:'data:dma_search.coClsCd'}},{T:1,N:'xf:input',A:{id:'ed_stYm',ref:'data:dma_search.stYm',style:''}},{T:1,N:'xf:input',A:{id:'ed_endYm',ref:'data:dma_search.endYm',style:''}},{T:1,N:'xf:input',A:{id:'ed_submitDt',ref:'data:dma_search.submitDt',style:''}},{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_vatDeclare',defaultCellHeight:'20',id:'gr_vat3',style:'width:500px; height:150px; '},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column20',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column18',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column16',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column14',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column12',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column10',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column8',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column6',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'col1',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col2',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col3',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col4',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col5',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col6',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col7',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col8',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col9',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col10',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col11',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col12',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col13',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col14',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col15',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col16',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col17',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col18',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col19',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col20',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col21',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col22',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col23',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col24',inputType:'text',style:'',value:'',width:'70'}}]}]}]}]}]}]}]})