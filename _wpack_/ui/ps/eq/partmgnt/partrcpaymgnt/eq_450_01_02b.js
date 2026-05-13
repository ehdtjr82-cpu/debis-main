/*amd /ui/ps/eq/partmgnt/partrcpaymgnt/eq_450_01_02b.xml 27986 36fac093cbc9a6529e6521d052ebe60ae484f71af1205db899d74676387444a1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stYm',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endYm',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'partCd',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq460',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dt',name:'일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlNm',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cls',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inClsCd',name:'입고 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upr',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fixWrkPl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_ds_fixWrkPl',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_fixWrkPl","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_fixWrkPl_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.partmgnt.partrcpaymgnt.RetrievePartsStockCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_eq460","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eq460","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수  
scwin.userInfo = $c.data.getMemInfo($p);
scwin.outDt = WebSquare.date.getCurrentServerDate().substring(0, 6);

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const param = [{
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retriveHomeClsList",
    compID: "lc_homeClsCd"
  }];
  $c.data.setGauceUtil($p, param);
  const codeOptions = [{
    grpCd: "EQ017",
    compID: "gr_eq460:inClsCd,lc_inClsCd"
  }
  // { grpCd : "ZZ205", compID : "lc_homeClsCd", opt : {'range': '1,EQ'}  },
  ];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  ed_stYm.setValue(scwin.outDt);
  ed_endYm.setValue(scwin.outDt);
  scwin.f_defaultValue();
};
scwin.ondataload = function (e) {
  let luxIndex = lc_homeClsCd.getValue();
  scwin.f_RetrieveFixWrkPl(luxIndex);
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  //cfDisableObjects와 비슷한 형태로, 오브젝트의 값을 초기화시킨다.
  $c.gus.cfInitObjects($p, [ed_partCd, ed_partNm, ed_clntNo, ed_clntNm1]);
  lc_homeClsCd.setValue(scwin.userInfo.eqHomeClsCd); //정비소속구분코드
  if (scwin.userInfo.getEqHomeClsCd == "") {
    lc_homeClsCd.setSelectedIndex(0);
  }
  scwin.f_RetrieveFixWrkPl(lc_homeClsCd.getValue());
  lc_inClsCd.setSelectedIndex(0); //입고구분:일반
  udc_fixClntList.setDisabled(true);
  $c.gus.cfEnableObj($p, ed_clntNo, false);
  $c.gus.cfEnableObj($p, ed_clntNm1, false);
  lc_homeClsCd.focus();
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_eq460, null);
  scwin.lc_homeClsCd_onviewchange();
  scwin.lc_inClsCd_onviewchange();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //필수입력항목 체크	  
  if (!(await $c.gus.cfValidate($p, [ed_stYm, ed_endYm, lc_homeClsCd, ed_partCd]))) return;

  //날짜 체크 start---------------------------------------
  let ls_stDt = ed_stYm.getValue();
  let ls_endDt = ed_endYm.getValue();
  if (ls_stDt > ls_endDt) {
    $c.win.alert($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_stYm.focus();
    return;
  }
  //날짜 체크 end---------------------------------------		

  if (ls_stDt < '200601') {
    $c.win.alert($p, "재고조회는 2006/01부터 조회하실 수 있습니다.");
    ed_stYm.setValue('200601');
  }

  // ds_search.setUseChangeInfo("false");
  $c.sbm.execute($p, sbm_retrieve);
};

//------------------------------------------------------------------------
// [작업장  콤보 조회] 소속 구분에 따른 작업장 리스트 콤보 변경 ( 조회조건 LuxCombo )
//------------------------------------------------------------------------
scwin.f_RetrieveFixWrkPl = function (homeClsCd) {
  sbm_ds_fixWrkPl.action = "/cm.zz.RetrieveComboCMD.do?sysCd=PsCommonEBC&queryId=retriveWrkplList&param1=" + homeClsCd;
  $c.sbm.execute($p, sbm_ds_fixWrkPl);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  let rtnList; //공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      // 부품 팝업			
      rtnList = udc_partInfo.cfCommonPopUp(scwin.udc_partInfo_callBackFunc, pCode, pName, pClose, null, null, null, '3,4,5,6,8,9,10', null, null, null, null, null, null, pAllSearch, "부품,부품코드,부품명");

      // cfSetReturnValue(rtnList, ed_partCd, ed_partNm);  			
      break;
    case 2:
      // 거래처 팝업			
      rtnList = udc_fixClntList.cfCommonPopUp(scwin.udc_fixClntList_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "거래처,거래처코드,거래처명");

      // cfSetReturnValue(rtnList, ed_clntNo, ed_clntNm1);  			
      break;
  }
};

// ======================
// 콜백 함수들
// ======================
scwin.udc_partInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_partCd.setValue(rtnList[0]);
    ed_partNm.setValue(rtnList[1]);
    ed_partCd.options.hidVal = rtnList[0];
    ed_partNm.options.hidVal = rtnList[1];
  } else {
    ed_partCd.setValue("");
    ed_partNm.setValue("");
    ed_partCd.options.hidVal = "";
    ed_partNm.options.hidVal = "";
  }
};
scwin.udc_fixClntList_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntNo.setValue(rtnList[0]);
    ed_clntNm1.setValue(rtnList[1]);
    ed_clntNo.options.hidVal = rtnList[0];
    ed_clntNm1.options.hidVal = rtnList[1];
  } else {
    ed_clntNo.setValue("");
    ed_clntNm1.setValue("");
    ed_clntNo.options.hidVal = "";
    ed_clntNm1.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  // $c.gus.cfClearPairObj(pairObj);
  pairObj.setValue("");

  // 검색어 세팅
  // let pVal = $c.gus.cfGetValue(inObj);
  let pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//------------------------------------------------------------------------
// script
//------------------------------------------------------------------------  
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  // cfShowTotalRows(totalRows, rowCnt);
  let rowCnt = ds_eq460.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
  ;
};
scwin.sbm_ds_fixWrkPl_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_fixWrkPl.sort("code", 0);
  lc_fixWrkPlCd.setSelectedIndex(0);
};
scwin.lc_homeClsCd_onviewchange = function (info) {
  let luxIndex = lc_homeClsCd.getValue();
  scwin.f_RetrieveFixWrkPl(luxIndex);
};
scwin.lc_inClsCd_onviewchange = function (info) {
  if (lc_inClsCd.getSelectedIndex() == 3) {
    udc_fixClntList.setDisabled(false);
    $c.gus.cfEnableObj($p, ed_clntNo, true);
    $c.gus.cfEnableObj($p, ed_clntNm1, true);
  } else {
    udc_fixClntList.setDisabled(true);
    $c.gus.cfEnableObj($p, ed_clntNo, false);
    $c.gus.cfEnableObj($p, ed_clntNm1, false);

    //거래처 Clear시키기
    ed_clntNo.setValue("");
    ed_clntNm1.setValue("");
  }
};
scwin.udc_fixClntList_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_clntNo.getValue(), ed_clntNm1.getValue(), 'F', 'F');
};
scwin.udc_fixClntList_onblurCodeEvent = function (e) {
  if (ed_clntNo.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm1, 2);
  } else {
    ed_clntNm1.setValue("");
  }
};
scwin.udc_fixClntList_onviewchangeNameEvent = function (info) {
  if (ed_clntNm1.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_clntNm1, ed_clntNo, 2, false);
  } else {
    ed_clntNo.setValue("");
  }
};
scwin.udc_partInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_partCd.getValue(), ed_partNm.getValue(), 'F', 'F');
};
scwin.udc_partInfo_onblurCodeEvent = function (e) {
  if (ed_partCd.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_partCd, ed_partNm, 1);
  } else {
    ed_partNm.setValue("");
  }
};
scwin.udc_partInfo_onviewchangeNameEvent = function (info) {
  if (ed_partNm.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_partNm, ed_partCd, 1, false);
  } else {
    ed_partCd.setValue("");
  }
};
scwin.f_toExcel1 = async function () {
  // let cntRow = ds_fix_work_list.getRowCount();
  // if(cntRow == 0)
  //     return;

  let fileName = '부품재고조회';
  let sheetTitle = "부품재고조회";
  await $c.data.downloadGridViewExcel($p, gr_eq460, {
    fileName: fileName + ".xlsx",
    sheetName: sheetTitle
  });
};
const KOR_TO_ENG = {
  "ㅂ": "q",
  "ㅈ": "w",
  "ㄷ": "e",
  "ㄱ": "r",
  "ㅅ": "t",
  "ㅛ": "y",
  "ㅕ": "u",
  "ㅑ": "i",
  "ㅐ": "o",
  "ㅔ": "p",
  "ㅁ": "a",
  "ㄴ": "s",
  "ㅇ": "d",
  "ㄹ": "f",
  "ㅎ": "g",
  "ㅗ": "h",
  "ㅓ": "j",
  "ㅏ": "k",
  "ㅣ": "l",
  "ㅋ": "z",
  "ㅌ": "x",
  "ㅊ": "c",
  "ㅍ": "v",
  "ㅠ": "b",
  "ㅜ": "n",
  "ㅡ": "m"
};
scwin.f_rentloan_keyup = function (e) {
  let input = e.target;
  let val = input.value;
  if (!val) return;

  // 2️ 첫 글자는 영문만 허용, 소문자면 대문자로 자동변환
  let first = val.charAt(0).toUpperCase();
  if (!/[A-Z]/.test(first)) {
    // 첫 글자가 영문이 아니면 제거
    //first = '';
    for (let ch of first) {
      first = '';
      first += KOR_TO_ENG[ch] || ch;
    }
  }

  // 3️ 나머지 글자는 숫자만 남김
  let rest = val.substring(1).replace(/[^0-9]/g, '');
  input.value = formatted;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_eq460',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 150px;',submenuSize:'fixed','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange',ref:'data:dma_search.homeClsCd',title:'소속'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixWrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.wrkPlCd',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_fixWrkPl'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입고구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_inClsCd',style:'width: 150px;',submenuSize:'fixed','ev:onviewchange':'scwin.lc_inClsCd_onviewchange',chooseOptionLabel:'전체',ref:'data:dma_search.inClsCd'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{code:'clntCd',codeId:'ed_clntNo',id:'udc_fixClntList',maxlengthCode:'6',nameId:'ed_clntNm1',popupID:'',refDataCollection:'dma_search',selectID:'retrieveFixClntList',style:'',validTitle:'',allowCharCode:'0-9',objTypeCode:'Data','ev:onclickEvent':'scwin.udc_fixClntList_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_fixClntList_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_fixClntList_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조회기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToYearMon',A:{id:'udc_fromToYearMon1',refDataMap:'dma_search',refEdDt:'endYm',refStDt:'stYm',style:'',edFromId:'ed_stYm',edToId:'ed_endYm',objTypeFrom:'data',objTypeTo:'data',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부품코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_partCd',nameId:'ed_partNm',popupID:'',selectID:'retrievePartInfo',style:'',validTitle:'부품코드',refDataCollection:'dma_search',mandatoryCode:'true',maxlengthCode:'15',code:'partCd',id:'udc_partInfo',objTypeName:'data','ev:onclickEvent':'scwin.udc_partInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_partInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_partInfo_onviewchangeNameEvent',allowCharCode:'a-zA-z0-9-',UpperFlagCode:'1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'부품재고 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_eq460',gridUpYn:'N',gridDownFn:'scwin.f_toExcel1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_eq460',focusMode:'cell',id:'gr_eq460',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',fixedColumnNoMove:'true',fixedColumn:'7'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'일자',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'작업장',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'작업장',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'구분',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'입고</br>구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'관리</br>번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'단가',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column49',value:'입고',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'출고',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'재고',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'차량번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'비고',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dt',inputType:'calendar',style:'',value:'',width:'70',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlCd',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlNm',inputType:'text',style:'',value:'',width:'100',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cls',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'inClsCd',value:'',displayMode:'label',colMerge:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'mgntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'upr',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'inQty',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outQty',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockQty',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vehclNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left',class:'ws-pre'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column66',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("inQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column65',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM("inAmt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column64',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("outQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column63',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM("outAmt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'[단위 : 원]',class:''}}]}]}]}]}]}]}]}]})