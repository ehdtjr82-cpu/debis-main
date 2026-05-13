/*amd /ui/ac/fm/collmoneymgnt/rcptmgnt/fm_502_03_00p.xml 47334 ce86b4d2c01d86997f924c1d3069415042081786ee81b1dafc5bedabbc5371a7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lc_collMoneyCntSht',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'label',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchAcctRecv'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNoD',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crnD',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromDate',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDate',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyFromDate',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyToDate',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyCntSht',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookNo',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntEmpNo',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gubun',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctRecvStsCd',name:'name16',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctRecvNo',name:'name17',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcptrNm',name:'name18',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billRecvKey',name:'name19',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collectionOfMoneyNumber',name:'name20',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payNo',name:'name21',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repClntNo',name:'name22',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgFromDate',name:'name23',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgToDate',name:'name24',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcptDca',name:'name25',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankCd',name:'name26',dataType:'text'}},{T:1,N:'w2:key',A:{id:'osidePkgCd',name:'name27',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnNo',name:'name28',dataType:'text'}},{T:1,N:'w2:key',A:{id:'profitGbn',name:'name29',dataType:'text'}},{T:1,N:'w2:key',A:{id:'branchCd',name:'name30',dataType:'text'}},{T:1,N:'w2:key',A:{id:'susRecvInitamtOutbrNo',name:'name31',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name32',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchStDate',name:'name33',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchEndDate',name:'name34',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvEmpNo',name:'name35',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_collMoney',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvKey',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accountItem',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtOutbrDt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptrNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmtCheck',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmtFcrc',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmtFcrcCheck',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubun',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvAcctCd',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remainAmt',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remainAmtFcrc',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvStsCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptDca',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvOutbrDt',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyIntendDt',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvTotAmt',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptPrcsDtm',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osidePkgCd',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnNo',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'changeDt',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyNo',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fm212Amt',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fm215Amt',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvStsCd',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipSeq',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMonCmpltChgDt',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMonCmpltYn',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchStDate',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchEndDate',name:'name51',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchCollMoney',action:'/ac.fm.collmoneymgnt.collmoneymgnt.RetrieveCollectionOfMoneyTargetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchAcctRecv","key":"IN_DS1"},{"id":"ds_collMoney","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_collMoney","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strFromDate;
scwin.strToDate;
scwin.memJson;
scwin.privAdmin;
scwin.empNo;
scwin.vLoginCoCd;
scwin.vLoginCoClsCd;
scwin.vUserHomeClsCd;
scwin.ds_parent; // 부모창에서 넘어온 Data Set
scwin.parent_acctDeptCd; // 부모창에서 넘어온 귀속부서
scwin.parent_fromDate; // 부모창에서 넘어온 검색시작일자
scwin.parent_toDate; // 부모창에서 넘어온 검색종료일자
scwin.parent_clsCd; // 가수금/선수금 조회 구분값 1:가수금/선수금, 2:가수금, 3:선수금
scwin.parent_bankbookNo; // 부모창에서 넘어온 통장번호
scwin.parent_fcrcYn; // 부모창에서 넘어온 외화여부
scwin.parent_sellClsCd; // 부모창에서 넘어온 매출구분(01:일반, 02:수출)

scwin.parent_clntNo; // 부모창에서 넘어온 거래처번호
scwin.parent_clntNm; // 부모창에서 넘어온 거래처명

scwin.udc_objNm;
scwin.popflag;
scwin.onpageload = function () {
  //전역변수값 셋팅함수.
  scwin.initSetVal();
};
scwin.initSetVal = function () {
  scwin.strFromDate = new Date().format("YYYYMMDD").substring(0, 6) + "01";
  scwin.strToDate = new Date().format("YYYYMMDD");
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.privAdmin = scwin.memJson.privAdmin;
  scwin.empNo = scwin.memJson.userId;
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사  
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
  scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드 

  scwin.ds_parent = $c.data.getParameter($p, "prov");
  scwin.parent_acctDeptCd = $c.data.getParameter($p, "acctDeptCd");
  scwin.parent_fromDate = $c.data.getParameter($p, "fromDate");
  scwin.parent_toDate = $c.data.getParameter($p, "toDate");
  scwin.parent_clsCd = $c.data.getParameter($p, "clsCd");
  scwin.parent_bankbookNo = $c.data.getParameter($p, "bankbookNo");
  scwin.parent_fcrcYn = $c.data.getParameter($p, "fcrcYn");
  scwin.parent_sellClsCd = $c.data.getParameter($p, "sellClsCd");
  scwin.parent_clntNo = $c.data.getParameter($p, "clntNo");
  scwin.parent_clntNm = $c.data.getParameter($p, "clntNm");

  // 부모창에서 거래처번호가 없을경우는 공백처리한다.
  if (scwin.parent_clntNo == undefined) {
    scwin.parent_clntNo = "";
  }
  // 부모창에서 거래처명이 없을경우는 공백처리한다.
  if (scwin.parent_clntNm == undefined) {
    scwin.parent_clntNm = "";
  }
  // 부모창에서 귀속부서가 없을경우는 공백처리한다.
  if (scwin.parent_acctDeptCd == undefined) {
    scwin.parent_acctDeptCd = "";
  }
  // 부모창에서 통장번호가 없을경우는 공백처리한다.
  if (scwin.parent_bankbookNo == undefined) {
    scwin.parent_bankbookNo = "";
  } else {}
};

//udc 컴포넌트 onload 완료시...
scwin.onUdcCompleted = function () {
  scwin.f_OnLoad();
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->거래처, 2:조회->수금귀속부서, 3:조회->통장번호
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (callObj, orgObjCd, orgObjNm, select_code, flag) {
  var cd;
  var nm;

  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  if (flag == "ALL") {
    cd = "";
    nm = "";
  } else {
    cd = orgObjCd.getValue();
    nm = orgObjNm.getValue();
  }
  scwin.udc_objNm = callObj.org_id;
  scwin.popflag = select_code;
  if (scwin.udc_objNm == "udc_clnt") {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
    ibx_ed_clntNo_h.setValue("");
    ibx_ed_clntNm_h.setValue("");
  } else if (scwin.udc_objNm == "udc_sbankbook") {
    ed_sbankbookCd.setValue("");
    ed_sbankbookNm.setValue("");
    ibx_ed_sbankbookCd_h.setValue("");
    ibx_ed_sbankbookNm_h.setValue("");
  } else if (scwin.udc_objNm == "udc_rcprt") {
    ibx_rcprtNm.setValue("");
    ibx_rcprtNm_h.setValue("");
  }
  switch (select_code) {
    // 조회조건용 입금자명(거래처명) PopUp 호출
    case '1':
      callObj.setSelectId("retrieveClntList2");
      var param = ",,," + scwin.vLoginCoCd;
      await callObj.cfCommonPopUp(scwin.udc_AllInOne_callBackFunc, cd, nm, "T", null, null, null, null, param, "450", "500", null, null);

      //f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      break;
    case '3':
      callObj.setSelectId("retrieveBankBookCdInfo");
      await callObj.cfCommonPopUp(scwin.udc_AllInOne_callBackFunc, cd, nm, "T", null, null, null, null, null, null, null, null, null); // 통장명

      //통장은 2번째에 통장명이 있기 때문에 1번째와 2번째의 위치를 변경해서 넘겨준다.
      /*
      var tempbankbookNm = rtnList[1];
      rtnList[1] = rtnList[2];
      rtnList[2] = tempbankbookNm;
      f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      */
      break;
    default:
      await $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};
scwin.udc_AllInOne_callBackFunc = function (rtnList) {
  let codeObj;
  let nameObj;
  let hiddenCd;
  let hiddenNm;
  if (scwin.udc_objNm == "udc_clnt") {
    codeObj = ed_clntNo;
    nameObj = ed_clntNm;
    hiddenCd = ibx_ed_clntNo_h;
    hiddenNm = ibx_ed_clntNm_h;
  } else if (scwin.udc_objNm == "udc_sbankbook") {
    codeObj = ed_sbankbookCd;
    nameObj = ed_sbankbookNm;
    hiddenCd = ibx_ed_sbankbookCd_h;
    hiddenNm = ibx_ed_sbankbookNm_h;
  } else if (scwin.udc_objNm == "udc_rcprt") {
    codeObj = "";
    nameObj = ibx_rcprtNm;
    hiddenCd = "";
    hiddenNm = ibx_rcprtNm_h;
  }
  if (scwin.popflag == "3") {
    var tempbankbookNm = rtnList[1];
    rtnList[1] = rtnList[2];
    rtnList[2] = tempbankbookNm;
  }
  scwin.f_resultPopUp(codeObj, nameObj, hiddenCd, hiddenNm, rtnList);
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = async function (callObj, orgObjCd, orgObjNm, select_code, flag) {
  let hiddenCd;
  let hiddenNm;
  if (callObj.org_id == "udc_clnt") {
    hiddenCd = ibx_ed_clntNo_h;
    hiddenNm = ibx_ed_clntNm_h;
  } else if (callObj.org_id == "udc_sbankbook") {
    hiddenCd = ibx_ed_sbankbookCd_h;
    hiddenNm = ibx_ed_sbankbookNm_h;
  }
  if (flag == "CD") {
    if (orgObjCd.getValue() == hiddenCd.getValue()) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == hiddenNm.getValue()) {
      return;
    } else {
      orgObjCd.setValue("");
      hiddenCd.setValue("");
    }
  }
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjNm.getValue().trim() != "" || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      await scwin.f_openPopUp(callObj, orgObjCd, orgObjNm, select_code, "NO");
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    hiddenCd.setValue("");
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopUp = function (orgObjCd, orgObjNm, hiddenCd, hiddenNm, rtnList) {
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    if (orgObjCd != "") {
      orgObjCd.setValue(rtnList[0]); // 코드값
    }
    orgObjNm.setValue(rtnList[1]); // 코드명

    if (hiddenCd != "") {
      hiddenCd.setValue(rtnList[0]); // HIDDEN 코드값
    }
    hiddenNm.setValue(rtnList[1]); // HIDDEN 코드명
  } else {
    if (orgObjCd != "") {
      orgObjCd.setValue("");
    }
    orgObjNm.setValue("");
    if (hiddenCd != "") {
      hiddenCd.setValue("");
    }
    hiddenNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  $c.gus.cfDisableKey($p);
  $c.gus.cfEnableObj($p, ed_clntNo, false);
  $c.gus.cfEnableObj($p, ed_clntNm, false);
  $c.gus.cfEnableObj($p, btn_clntBtn, false);

  //to-do
  //$c.gus.cfDisableObjects([ed_collMoneyToDate,img_collMoneyToDate]); 
  $c.gus.cfDisableObjects($p, [ed_collMoneyToDate]);
  if (scwin.parent_fromDate != undefined) {
    ed_collMoneyFromDate.setValue(scwin.parent_fromDate);
  } else {
    ed_collMoneyFromDate.setValue(scwin.strFromDate);
  }
  if (scwin.parent_toDate == "" || scwin.parent_toDate == undefined) {
    ed_collMoneyToDate.setValue(scwin.strToDate);
  } else {
    var year = scwin.parent_toDate.substr(0, 4);
    var month = scwin.parent_toDate.substr(4, 2);
    var dd = new Date(year, month, 0);
    var lastDay = dd.getDate(); //해당월의 마지막일자

    ed_collMoneyToDate.setValue(scwin.parent_toDate.substr(0, 6) + lastDay);
  }

  // 통장번호가 NULL이 아닐경우
  if (scwin.parent_bankbookNo != undefined) {
    ed_sbankbookCd.setValue(scwin.parent_bankbookNo);
    ibx_ed_sbankbookCd_h.setValue(scwin.parent_bankbookNo);
  }
  scwin.f_Reset();
  dma_searchAcctRecv.set("acctDeptCd", scwin.parent_acctDeptCd);

  // 부모창에서 넘어온 값이 (1:가수금/선수금 3:선수금) 일경우에만 거래처항목 활성화
  if (scwin.parent_clsCd == "1" || scwin.parent_clsCd == "3") {
    $c.gus.cfEnableObj($p, ed_clntNo, true);
    $c.gus.cfEnableObj($p, ed_clntNm, true);
    $c.gus.cfEnableObj($p, btn_clntBtn, true);
  }
  ds_lc_collMoneyCntSht.removeAll();

  // 넘어온 계정종류에 따라서 조회 조건을 다르게 세팅 한다.
  if (scwin.parent_clsCd == "3") {
    ds_lc_collMoneyCntSht.insertRow(0);
    ds_lc_collMoneyCntSht.setCellData(0, "code", "02");
    ds_lc_collMoneyCntSht.setCellData(0, "label", "선수금");
    ed_clntNo.setValue(scwin.parent_clntNo); //거래처번호(조회조건)
    ed_clntNm.setValue(scwin.parent_clntNm); //거래처명(조회조건)
  } else if (scwin.parent_clsCd == "1") {
    ds_lc_collMoneyCntSht.insertRow(0);
    ds_lc_collMoneyCntSht.setCellData(0, "code", "01");
    ds_lc_collMoneyCntSht.setCellData(0, "label", "가수금");
    ds_lc_collMoneyCntSht.insertRow(1);
    ds_lc_collMoneyCntSht.setCellData(1, "code", "02");
    ds_lc_collMoneyCntSht.setCellData(1, "label", "선수금");
  } else {
    ds_lc_collMoneyCntSht.insertRow(0);
    ds_lc_collMoneyCntSht.setCellData(0, "code", "01");
    ds_lc_collMoneyCntSht.setCellData(0, "label", "가수금");
  }
  lc_collMoneyCntSht.setSelectedIndex(0);

  // 그리드 포멧
  if (scwin.parent_fcrcYn == "Y") {
    scwin.f_GridFormatSetting(scwin.parent_sellClsCd);
  }
};

//-------------------------------------------------------------------------
// 그리드 포멧
//-------------------------------------------------------------------------
scwin.f_GridFormatSetting = function (flag) {
  if (flag == "01" || flag == "02") {
    gr_collMoney.setColumnVisible("setlAmtFcrc", false);
    gr_collMoney.setColumnVisible("remainAmtFcrc", true);
    for (var i = 0; i < ds_collMoney.getRowCount(); i++) {
      if (ds_collMoney.getCellData(i, "crcCd") == "KRW") {
        gr_collMoney.setReadOnly("cell", i, "remainAmt", false);
        gr_collMoney.setReadOnly("cell", i, "remainAmtFcrc", true);
      } else {
        gr_collMoney.setReadOnly("cell", i, "remainAmt", true);
        gr_collMoney.setReadOnly("cell", i, "remainAmtFcrc", false);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 초기화 시킬 내역들 정의
//-------------------------------------------------------------------------
scwin.f_Reset = function () {};

//-------------------------------------------------------------------------
// 수금수단 조회 
//-------------------------------------------------------------------------
scwin.f_Retrieve2 = async function () {
  if (!$c.gus.cfIsAfterDate($p, ed_collMoneyFromDate.getValue(), ed_collMoneyToDate.getValue())) {
    await $c.gus.cfAlertMsg($p, "입금일자 시작일자는 종료일자보다 이전 날짜 이어야 합니다.");
    ed_collMoneyToDate.focus();
    return;
  }

  // 조회 조건의 필수 입력 사항 체크
  let ret = await $c.gus.cfValidate($p, [ed_collMoneyFromDate, ed_collMoneyToDate, lc_collMoneyCntSht]);
  if (!ret) {
    return;
  }
  if (dma_searchAcctRecv.get("collMoneyCntSht") == "02" && dma_searchAcctRecv.get("clntNo") != "") {
    //선수금(02)계정이고 거래처번호가 있을시에만 구분값 T 셋팅.
    dma_searchAcctRecv.set("repClntNo", "T");
  } else {
    dma_searchAcctRecv.set("repClntNo", "");
  }
  dma_searchAcctRecv.set("coCd", scwin.vLoginCoCd);
  dma_searchAcctRecv.set("queryDeptSearchStDate", dma_searchAcctRecv.get("collMoneyFromDate"));
  dma_searchAcctRecv.set("queryDeptSearchEndDate", dma_searchAcctRecv.get("collMoneyToDate"));

  //submit 처리.
  let objSubmit = await $c.sbm.execute($p, sbm_searchCollMoney);
  if (objSubmit.responseJSON.resultDataSet[0].Msg == "SUCC") {
    await scwin.sbm_searchCollMoney_submitdone();
  }
};
scwin.sbm_searchCollMoney_submitdone = async function (e) {
  gr_totalRows2.setStyle("display", "");
  tbx_totalRows2.setValue(ds_collMoney.getRowCount());
  if (ds_collMoney.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  } else {
    // Header를 복사한다.
    if (scwin.ds_parent.getRowCount() <= 0) {
      $c.gus.cfCopyDataSetHeader($p, ds_collMoney, scwin.ds_parent);
    }
    for (var i = 0; i < scwin.ds_parent.getRowCount(); i++) {
      for (var j = 0; j < ds_collMoney.getRowCount(); j++) {
        if (scwin.ds_parent.getCellData(i, "billRecvKey") == ds_collMoney.getCellData(j, "billRecvKey")) {
          ds_collMoney.setCellData(j, "remainAmt", scwin.ds_parent.getCellData(i, "remainAmt"));
          ds_collMoney.setCellData(j, "remainAmtFcrc", scwin.ds_parent.getCellData(i, "remainAmtFcrc"));
          ds_collMoney.setCellData(j, "num", "T");
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// 저장 
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  var rowData;
  for (var i = 0; i < ds_collMoney.getRowCount(); i++) {
    if (Number(ds_collMoney.getCellData(i, "setlAmt")) < Number(ds_collMoney.getCellData(i, "remainAmt"))) {
      await $c.gus.cfAlertMsg($p, "정리금액이 잔액보다 큽니다. 금액을 확인하시기 바랍니다.");
      return;
    }
  }
  let rtn = await $c.win.confirm($p, "가수금/선수금을 저장하시겠습니까?");
  if (rtn) {
    scwin.ds_parent.removeAll();
    for (j = 0; j < ds_collMoney.getRowCount(); j++) {
      if (ds_collMoney.getCellData(j, "num") == "T") {
        if (ds_collMoney.getRowStatus(j) == "U") {
          /*
          rowData = ds_collMoney.ExportData(j,1,true);
          scwin.ds_parent.ImportData(rowData);
          */
          scwin.ds_parent.setRowJSON(j, ds_collMoney.getRowJSON(j), false);
        }
      }
    }
  }

  //window.close(); 
  let rt = [scwin.ds_parent];
  $c.win.closePopup($p, rt);
};

//-------------------------------------------------------------------------
// 체크박스 클릭시 잔액을 정리금액으로 복사한다.
//-------------------------------------------------------------------------
scwin.f_moveAmt = function (row) {
  if (ds_collMoney.getCellData(row, "num") == "T") {
    ds_collMoney.setCellData(row, "remainAmt", ds_collMoney.getCellData(row, "setlAmt"));
  } else {
    ds_collMoney.setCellData(row, "remainAmt", "0");
  }
};

//-------------------------------------------------------------------------
// 체크박스 클릭시 금액셋팅
//-------------------------------------------------------------------------
scwin.f_settingAmt = function (row) {
  if (ds_collMoney.getCellData(row, "num") == "T") {
    if (ds_collMoney.getCellData(row, "crcCd") == ACConstants.KRW) {
      ds_collMoney.setCellData(row, "remainAmt", ds_collMoney.getCellData(row, "setlAmt"));
    } else {
      ds_collMoney.setCellData(row, "remainAmtFcrc", ds_collMoney.getCellData(row, "amtFcrc"));
      ds_collMoney.setCellData(row, "remainAmt", ds_collMoney.getCellData(row, "setlAmt"));
    }
  } else {
    ds_collMoney.setCellData(row, "remainAmt", "0");
    ds_collMoney.setCellData(row, "remainAmtFcrc", "0");
  }
};

//계정 콤보박스 변경시 이벤트
scwin.lc_collMoneyCntSht_onchange = function (info) {
  //계정이 선수금일때만 거래처 활성화.
  if (lc_collMoneyCntSht.getValue() == "02") {
    $c.gus.cfEnableObj($p, ed_clntNo, true);
    $c.gus.cfEnableObj($p, ed_clntNm, true);
    $c.gus.cfEnableObj($p, btn_clntBtn, true);
  } else {
    $c.gus.cfEnableObj($p, ed_clntNo, false);
    $c.gus.cfEnableObj($p, ed_clntNm, false);
    $c.gus.cfEnableObj($p, btn_clntBtn, false);
    ed_clntNo.setValue(""); //거래처번호(조회조건)
    ed_clntNm.setValue(""); //거래처명(조회조건)
  }
};

//거래처 코드 focus out 시
scwin.udc_clnt_onblurCodeEvent = async function (e) {
  await scwin.f_CheckPopUp(udc_clnt, ed_clntNo, ed_clntNm, '1', 'CD');
};
//거래처 돋보기 버튼 클릭 시
scwin.udc_clnt_onclickEvent = async function (e) {
  await scwin.f_openPopUp(udc_clnt, ed_clntNo, ed_clntNm, '1', 'ALL');
};

//통장명 코드 focus out 시
scwin.udc_sbankbook_onblurCodeEvent = async function (e) {
  await scwin.f_CheckPopUp(udc_sbankbook, ed_sbankbookCd, ed_sbankbookNm, '3', 'CD');
};
//통장명 코드명 focus out 시
scwin.udc_sbankbook_onblurNameEvent = async function (e) {
  await scwin.f_CheckPopUp(udc_sbankbook, ed_sbankbookCd, ed_sbankbookNm, '3', 'NM');
};
//통장명 돋보기 버튼 클릭 시
scwin.udc_sbankbook_onclickEvent = async function (e) {
  await scwin.f_openPopUp(udc_sbankbook, ed_sbankbookCd, ed_sbankbookNm, '3', 'ALL');
};

//입금자명 돋보기 버튼 클릭 시
scwin.btn_rcprt_onclick = async function (e) {
  await scwin.f_openPopUp(udc_rcprt, '', ibx_rcprtNm, '1', 'ALL');
};
scwin.btn_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_table2, []);
};

//그리드 셀 클릭 시
scwin.gr_collMoney_oncellclick = function (rowIndex, columnIndex, columnId) {
  var Row = rowIndex;
  if (scwin.parent_fcrcYn != "Y") {
    // 외화는 타시스템에서 선택할수 없음.
    if (columnId == "num") {
      if (ds_collMoney.getCellData(Row, "crcCd") == ACConstants.USD) {
        ds_collMoney.setCellData(Row, "num", "F");
      } else {
        scwin.f_moveAmt(Row);
      }
    }

    // 외화일경우는 잔액입력 불가능
    if (ds_collMoney.getCellData(Row, "crcCd") == ACConstants.USD) {
      //gr_collMoney.ColumnProp("remainAmt","Edit") = "none";
      gr_collMoney.setReadOnly("cell", Row, "remainAmt", true);
    } else {
      //gr_collMoney.ColumnProp("remainAmt","Edit") = "any";
      gr_collMoney.setReadOnly("cell", Row, "remainAmt", false);
    }
  } else {
    if (columnId == "num") {
      scwin.f_settingAmt(Row); // 값 셋팅
    }
  }
};

//그리드 keydown 이벤트(as-is 는 OnKeyPress 임)
scwin.gr_collMoney_onkeydown = function (e) {
  if (scwin.parent_fcrcYn != "Y") {
    if (e.keyCode == 32) {
      // 외화는 타시스템에서 선택할수 없음.
      if (ds_collMoney.getCellData(ds_collMoney.getRowPosition(), "crcCd") == ACConstants.USD) {
        ds_collMoney.setCellData(ds_collMoney.getRowPosition(), "num", "F");
      } else {
        scwin.f_moveAmt(ds_collMoney.getRowPosition());
      }
    }

    // 외화일경우는 잔액입력 불가능
    if (ds_collMoney.getCellData(ds_collMoney.getRowPosition(), "crcCd") == ACConstants.USD) {
      //gr_collMoney.ColumnProp("remainAmt","Edit") = "none";
      gr_collMoney.setReadOnly("cell", ds_collMoney.getRowPosition(), "remainAmt", true);
    } else {
      //gr_collMoney.ColumnProp("remainAmt","Edit") = "any";
      gr_collMoney.setReadOnly("cell", ds_collMoney.getRowPosition(), "remainAmt", false);
    }
  }
};

//그리드 셀 수정후 이벤트
scwin.gr_collMoney_onafteredit = function (rowIndex, columnIndex, value) {
  var row = rowIndex;

  //colid == "num" 부분은 그리드 셀클릭이벤트에 들어감.
  /*
  if (scwin.parent_fcrcYn == "Y") {
  if (colid == "num") {
  f_settingAmt(row);	// 값 셋팅
  }
  if ( ds_collMoney.NameValue(row,"crcCd") != "<%=ACConstants.KRW%>" ) {
  if (colid == "remainAmtFcrc") {
  ds_collMoney.NameValue(row,"remainAmt") = Math.round(ds_collMoney.NameValue(row,"remainAmtFcrc") * ds_collMoney.NameValue(row,"exchRt"));
  }
  }
  }
  */

  if (scwin.parent_fcrcYn == "Y") {
    if (ds_collMoney.getCellData(row, "crcCd") != ACConstants.KRW) {
      //if (colid == "remainAmtFcrc") {
      if (columnIndex == 12) {
        ds_collMoney.setCellData(row, "remainAmt", Math.round(Number(ds_collMoney.getCellData(row, "remainAmtFcrc")) * Number(ds_collMoney.getCellData(row, "exchRt"))));
      }
    }
  }
};

//사용안함.
//그리드 헤더클릭 시
scwin.gr_collMoney_onheaderclick = function (headerId) {
  /*
  var i = 0;
  if ( headerId == "column12")
  {
  if ( bCheck == 1)
  {
  for ( i = 1 ; i <= ds_collMoney.CountRow ; i++)
  {
  if (parent_fcrcYn != "Y") {
  	if ( ds_collMoney.NameValue(i,"crcCd") == "<%=ACConstants.USD%>" ) {
  		ds_collMoney.NameValue(i,"num") = "F";
  	} else {
  		ds_collMoney.NameValue(i,"num") = "T";
  	}
  } else {
  	ds_collMoney.NameValue(i,"num") = "T";
  }
  }
  } else {
  for ( i = 1 ; i <= ds_collMoney.CountRow ; i++)
  {
  ds_collMoney.NameValue(i,"num") = "F";
  }
  }
  }
  */
};
scwin.ddd_onclick = function (e) {
  debugger;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_table2',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:60px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계정',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'minimal',chooseOption:'',class:' w110',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_collMoneyCntSht',ref:'data:dma_searchAcctRecv.collMoneyCntSht',renderType:'',style:'',submenuSize:'auto',allOption:'',mandatory:'true','ev:onchange':'scwin.lc_collMoneyCntSht_onchange',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_lc_collMoneyCntSht'},E:[{T:1,N:'xf:label',A:{ref:'label'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입금일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_group9',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{ref:'data:dma_searchAcctRecv.collMoneyFromDate',displayFormat:'yyyy/MM/dd',style:'width:90px;',id:'ed_collMoneyFromDate',placeholder:' ',class:'form-control cal',mandatory:'true',objType:'data',calendarValueType:'yearMonthDate',title:'입금일자'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'~',class:''}},{T:1,N:'w2:inputCalendar',A:{ref:'data:dma_searchAcctRecv.collMoneyToDate',displayFormat:'yyyy/MM/dd',style:'width:90px;',id:'ed_collMoneyToDate',placeholder:' ',class:'form-control cal',mandatory:'true',objType:'data',calendarValueType:'yearMonthDate'}}]},{T:1,N:'xf:group',A:{id:'grp_group8',style:'display:none;'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',objTypeTo:'data',mandatoryTo:'true',refDataMap:'',edFromId:'ed_collMoneyFromDate_h',edToId:'ed_collMoneyToDate_h',mandatoryFrom:'true',style:'',objTypeFrom:'data',id:'udc_collMoneyFromToDate',refEdDt:'',objTypeBtn:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'sch-box ',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_clnt',codeId:'ed_clntNo',nameId:'ed_clntNm',btnId:'btn_clntBtn',objTypeCode:'data',objTypeName:'data',validExpCode:'거래처번호:no:maxLength=5&number','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clnt_onclickEvent',code:'clntNo',refDataCollection:'dma_searchAcctRecv'}},{T:1,N:'xf:group',A:{id:'grp_group2',style:'display:none;'},E:[{T:1,N:'xf:input',A:{style:'',id:'',placeholder:'',class:' num'}},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn ico sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{style:'',id:'',placeholder:'',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통장명',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'sch-box ',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_sbankbook',codeId:'ed_sbankbookCd',nameId:'ed_sbankbookNm',btnId:'btn_sbankbook',objTypeCode:'data',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_sbankbook_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_sbankbook_onblurNameEvent','ev:onclickEvent':'scwin.udc_sbankbook_onclickEvent',validExpCode:'통장명:no:maxLength=5&number',refDataCollection:'dma_searchAcctRecv',code:'bankbookNo',allowCharCode:'0-9',maxlengthCode:'6'}},{T:1,N:'xf:group',A:{id:'grp_group3',style:'display:none;'},E:[{T:1,N:'xf:input',A:{style:'',id:'',placeholder:'',class:' num'}},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn ico sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{style:'',id:'',placeholder:'',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입금자명',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'sch-box col6',id:''},E:[{T:1,N:'xf:input',A:{style:'',id:'ibx_rcprtNm',placeholder:'',class:' num',ref:'data:dma_searchAcctRecv.rcptrNm',maxlength:'20'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_rcprt',type:'button',class:'btn ico sch','ev:onclick':'scwin.btn_rcprt_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'ddd',label:'수금수단(차변)',class:'tit','ev:onclick':'scwin.ddd_onclick'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{oddEvenColorDisplay:'true',rowNumVisible:'false',showSortableImage:'true',rowNumHeaderValue:'No',sortable:'true',defaultCellHeight:'24',rowNumWidth:'40',visibleRowNumFix:'false',checkAllType:'false',dataList:'data:ds_collMoney',evenRowBackgroundColor:'#F8FFF8',id:'gr_collMoney',visibleRowNum:'15',class:'wq_gvw','ev:oncellclick':'scwin.gr_collMoney_oncellclick','ev:onkeydown':'scwin.gr_collMoney_onkeydown','ev:onheaderclick':'scwin.gr_collMoney_onheaderclick',readOnly:'true','ev:onafteredit':'scwin.gr_collMoney_onafteredit',rowStatusVisible:'true',columnMove:'true',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column12',value:'선택',displayMode:'label',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'CheckBox검사용',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column2',value:'계정항목',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column1',value:'통장번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'통화코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'입금일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'입금인',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'금액(원)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'잔액(원)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'정리금액(원)',class:'col-type2',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'금액(외)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'정리금액(외)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'정리금액(외)',displayMode:'label',hidden:'true',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'환율',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'수금정산용Key값',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column59',value:'거래처번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column56',value:'수금구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'통장번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'어음상태코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'적요',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'60',inputType:'checkbox',id:'num',displayMode:'label',fixColumnWidth:'true',readOnly:'false',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'checkNum',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'accountItem',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'bankbookNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crcCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'susRecvInitamtOutbrDt',class:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rcptrNm',class:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'amt',class:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'setlAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'remainAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'false',dataType:'number',displayFormat:'#,##0',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'amtFcrc',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###.#0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'setlAmtFcrc',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###.#0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'remainAmtFcrc',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###.#0',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'exchRt',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###.##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'billRecvKey',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'gubun',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bankbookNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'billRecvAcctCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'summary',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column34',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column32',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column28',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'sum(\'amt\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column27',value:'',displayMode:'label',expression:'sum(\'setlAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label',expression:'sum(\'remainAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column25',value:'',displayMode:'label',dataType:'float',displayFormat:'#,###.#0',expression:'sum(\'amtFcrc\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column24',value:'',displayMode:'label',dataType:'float',displayFormat:'#,###.#0',expression:'sum(\'setlAmtFcrc\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column67',value:'',displayMode:'label',dataType:'float',displayFormat:'#,###.#0',expression:'sum(\'remainAmtFcrc\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',style:'',id:'column23',value:'',displayMode:'label',dataType:'float',displayFormat:'#,###.##0',expression:'sum(\'exchRt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'gr_totalRows2',class:'left',style:'display:none;'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows2',label:'0',class:'num',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn',id:'btn_save',label:'저장',style:'','ev:onclick':'scwin.f_Save'}}]}]},{T:1,N:'xf:group',A:{id:'grp_group4',style:'display:none;'},E:[{T:1,N:'xf:group',A:{id:'grp_clnt'},E:[{T:1,N:'xf:input',A:{style:'width:144px; height:21px; ',id:'ibx_ed_clntNo_h'}},{T:1,N:'xf:input',A:{style:'width:144px; height:21px; ',id:'ibx_ed_clntNm_h'}}]},{T:1,N:'xf:group',A:{id:'grp_sbankbook'},E:[{T:1,N:'xf:input',A:{style:'width:144px; height:21px; ',id:'ibx_ed_sbankbookCd_h'}},{T:1,N:'xf:input',A:{style:'width:144px; height:21px; ',id:'ibx_ed_sbankbookNm_h'}}]},{T:1,N:'xf:group',A:{id:'grp_rcprt'},E:[{T:1,N:'xf:input',A:{style:'width:144px; height:21px; ',id:'ibx_rcprtNm_h'}}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_rcprt',codeId:'',nameId:''}}]}]}]}]})