/*amd /ui/ps/eq/adjmmgnt/matprscond/eq_520_01_11b.xml 22398 10f9bcd8848ccaf313780f1e064fd56dadcba7956ecb9fcc8322989cac867104 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_RetrieveFixWrkPl'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text',defaultValue:'PsCommonEBC'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text',defaultValue:'retriveWrkplList'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RetrieveFixWrkPl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClsCd',name:'homeClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'wrkPlCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'catCd',name:'catCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'clntCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unit',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upr',name:'단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatInclu',name:'VAT포함',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ps.eq.adjmmgnt.matprscond.RetrieveCompanyEachPartsUnitPriceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveFixWrkPl',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_RetrieveFixWrkPl","key":"IN_DS1"},{"id":"ds_RetrieveFixWrkPl","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RetrieveFixWrkPl","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/cm/fw/constants/DGlobalValue.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 부품단가대장 (eq_520_01_11b)
// 작성자 : 송정희
// 최초작성일자 : 2026-10-11
//-------------------------------------------------------------------------
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
//scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;    // 사용자소속구분코드 
//scwin.vUserHomeClsCd= login.getUserHomeClsCd();        // 사용자소속구분코드

scwin.vLoginCoCd = "";
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드
scwin.vLoginCoClsCd = "";
scwin.vUserId = "";
scwin.vUserAuth = "";
scwin.isSubCompany = false;
scwin.onpageload = function () {
  console.log("PGM명 : 부품단가대장 (eq_520_01_11b)");

  //공통코드값
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "lc_homeClsCd",
    opt: {
      "range": "1,EQ"
    }
  },
  // 정비소속구분
  {
    grpCd: "EQ005",
    compID: "lc_catCd"
  } // 계통
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};
scwin.callBackCommonCode = function () {
  //초기화
  scwin.vLoginCoCd = $c.data.getMemInfo($p, "loginCoCd");
  scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드
  scwin.vLoginCoClsCd = $c.data.getMemInfo($p, "loginCoClsCd");
  scwin.vUserId = $c.data.getMemInfo($p, "userId");
  scwin.vUserAuth = $c.data.getMemInfo($p, "userAuth");
  console.log("scwin.vUserHomeClsCd : " + scwin.vUserHomeClsCd);
  scwin.f_defaultValue();
};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  //cfDisableObjects와 비슷한 형태로, 오브젝트의 값을 초기화시킨다.
  console.log("scwin.vUserHomeClsCd : " + scwin.vUserHomeClsCd);
  //  	scwin.cfInitObjects([ed_clntCd, ed_clntNm]);  

  lc_homeClsCd.setValue(scwin.vUserHomeClsCd); //정비소속구분코드
  if (scwin.vUserHomeClsCd == "null") {
    lc_homeClsCd.setSelectedIndex(0);
  }
  scwin.f_RetrieveFixWrkPl(lc_homeClsCd.getValue());
  lc_homeClsCd.focus();
};
//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_eq420, null);
};
scwin.btn_Clear_onclick = function (e) {
  scwin.f_FieldClear();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  //필수입력항목 체크	  
  if (!$c.gus.cfValidate($p, [lc_homeClsCd, lc_fixWrkPlCd])) return;
  dma_search.set("homeClsCd", lc_homeClsCd.getValue()); // 소속
  dma_search.set("wrkPlCd", lc_fixWrkPlCd.getValue()); // 작업장
  dma_search.set("catCd", lc_catCd.getValue()); // 계통
  dma_search.set("clntCd", ed_clntNo.getValue()); // 거래처

  $c.sbm.execute($p, sbm_master);
};
//------------------------------------------------------------------------
// [소속  콤보 조회] 소속 리스트 콤보 변경 ( 조회조건 LuxCombo )
//------------------------------------------------------------------------
scwin.f_RetrieveHomeCls = function () {
  dma_RetrieveHomeCls.set("sysCd", "PsCommonEBC");
  dma_RetrieveHomeCls.set("queryId", "retriveHomeClsList");
  $c.sbm.execute($p, sbm_RetrieveHomeCls);
};

//------------------------------------------------------------------------
// [작업장  콤보 조회] 소속 구분에 따른 작업장 리스트 콤보 변경 ( 조회조건 LuxCombo )
//------------------------------------------------------------------------
scwin.f_RetrieveFixWrkPl = function (homeClsCd) {
  console.log("f_RetrieveFixWrkPl - homeClsCd" + homeClsCd);
  dma_RetrieveFixWrkPl.set("sysCd", "PsCommonEBC");
  dma_RetrieveFixWrkPl.set("queryId", "retriveWrkplList");
  dma_RetrieveFixWrkPl.set("param1", homeClsCd);
  $c.sbm.execute($p, sbm_RetrieveFixWrkPl);
};
//------------------------------------------------------------------------
// 출력
//------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  //필수입력항목 체크	  
  if (!$c.gus.cfValidate($p, [lc_homeClsCd, lc_fixWrkPlCd])) return;
  var pHomeClsCd = lc_homeClsCd.getValue();
  var pHomeClsNm = lc_homeClsCd.getText(true);
  var pWrkPlCd = lc_fixWrkPlCd.getValue();
  var pWrkPlNm = lc_fixWrkPlCd.getText(true);
  var pCatCd = lc_catCd.getValue();
  var pCatNm = lc_catCd.getText(true);
  var pClntCd = ed_clntNo.getValue();
  var pClntNm = ed_clntNm.getValue();
  let data = {
    reportName: "/ps/eq/adjmmgnt/matprscond/eq_520_01_11.ozr",
    odiParam: {
      homeClsCd: pHomeClsCd,
      homeClsNm: pHomeClsNm,
      wrkPlCd: pWrkPlCd,
      wrkPlNm: pWrkPlNm,
      catCd: pCatCd,
      catNm: pCatNm,
      clntCd: pClntCd,
      clntNm: pClntNm
    },
    viewerParam: {
      useprogressbar: false // 프로그레스바 쓸지 말지
    },
    formParam: {}
  };
  await scwin.openPopup(data);

  //  쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  //	var odiParam = new ODIParam("eq_520_01_11");
  //	odiParam.add("homeClsCd", 	lc_homeClsCd.getValue());	//소속
  //	odiParam.add("homeClsNm", 	lc_homeClsCd.getValue());	//소속명		
  //	odiParam.add("wrkPlCd"	, 	lc_fixWrkPlCd.getValue());	//작업장
  //	odiParam.add("wrkPlNm"	, 	lc_fixWrkPlCd.getValue());		//작업장명
  //	odiParam.add("catCd"	, 	lc_catCd.getValue());		    //계통코드
  //	odiParam.add("catNm"	, 	lc_catCd.getValue());			//계통코드명		
  //	odiParam.add("clntCd"	, 	ed_clntNo.getValue().trim());	//거래처
  //	odiParam.add("clntNm"	, 	ed_clntNm.getValue());			//거래처명	

  //  리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  //	var formParam = new FormParam();
  //  formParam.add("form1","폼1");

  //  OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  //	var viewerParam = new ViewerParam();
  //	viewerParam.add("viewer.useprogressbar","false");	// 인쇄 진행 중 프로그레스바 표시
  //				iframe				viewer			OZR 경로 및 파일명								ODI파라미터	뷰어파라미터	폼파라미터	  
  //	$c.gus.cfOZReport("chb_printCheck", "chb_previewCheck", "/ps/eq/adjmmgnt/matprscond/eq_520_01_11.ozr", odiParam, viewerParam, formParam);
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};
//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 거래처 팝업		
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc, pCode, pName, pClose // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
      , pAllSearch // 전체검색허용여부	("F")
      , "거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
  }
};
scwin.udc_clntNo_callBackFunc = function (ret) {
  console.log("udc_clntNo_callBackFunc ret " + ret);
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_clntNo.setValue(ret[0]);
    ed_clntNm.setValue(ret[1]);
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
  }
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 1);
};
scwin.udc_clntNo_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'F');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'F');
};
scwin.btn_Search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_Print_onclick = function (e) {
  scwin.f_OzReport();
};
scwin.ds_master_ondataload = function () {
  let rowCnt = ds_master.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  }
  gr_master.setFocusedCell(0, "clntNo", true);
};
scwin.lc_homeClsCd_onchange = function (info) {
  scwin.f_RetrieveFixWrkPl(lc_homeClsCd.getValue());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_eq420',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 100px;',submenuSize:'fixed',ref:'data:dma_search.homeClsCd',sortOption:'value','ev:onchange':'scwin.lc_homeClsCd_onchange'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixWrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.wrkPlCd',sortOption:'value',visibleRowNum:'10'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_RetrieveFixWrkPl'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계통 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_catCd',style:'width: 150px;',submenuSize:'fixed',ref:'',sortOption:'value',visibleRowNum:'10',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'clntNoPopUp',selectID:'retrieveFixClntList',codeId:'ed_clntNo',validTitle:'',nameId:'ed_clntNm',style:'',btnId:'btn_clntNo',code:'clntNo',name:'clntNm',refDataCollection:'dma_search',id:'udc_clntNo','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',maxlengthCode:'6',allowCharCode:'0-9',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.btn_Clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.btn_Search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'업체별 부품단가 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_master',grdDownOpts:'{"fileName": "업체별부품단가목록.xlsx", "sheetName": "업체별부품단가목록", "type":"1"}',gridDownObjType:'X',id:'udc_topGrdBtn'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true',readOnly:'true',fixedColumn:'4',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'거래처',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'거래처명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'부품코드',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'부품명',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'단위',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'장비모델명',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'단가',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'VAT포함',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'적용일자',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'60',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'120',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partCd',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partNm',inputType:'text',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unit',inputType:'text',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelNm',inputType:'text',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upr',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatInclu',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'calendar',width:'100',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'[단위 : 원]',class:''}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Print',style:'',type:'button','ev:onclick':'scwin.btn_Print_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력'}]}]}]}]}]}]}]}]}]})