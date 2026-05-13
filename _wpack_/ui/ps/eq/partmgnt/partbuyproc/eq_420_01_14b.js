/*amd /ui/ps/eq/partmgnt/partbuyproc/eq_420_01_14b.xml 24130 0298e8b9a47905928d45d3626ea409d4db2ea6bde7dcf19c58b96c3f972fc491 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClsCd',name:'소속',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inYmFrom',name:'입고 시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inYmTo',name:'입고 종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inClsCd',name:'입고구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'거래처',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq420',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlNm',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAcctCd01',name:'부품',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAcctCd02',name:'타이어',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAcctCd03',name:'잡유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAcctCd04',name:'소모품',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ttlInAmt',name:'총공급가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ttlVatAmt',name:'총VAT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ttlAmt',name:'총금액',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_combo3',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'sysCd',name:'sysCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'queryId',name:'queryId'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param1',name:'param1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param2',name:'param2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param3',name:'param3'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_combo3',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'code'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'name'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ps.eq.partmgnt.partbuyproc.RetrieveMonthEachCustomerEachPartsInPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"IN_DS1"},{"id":"ds_eq420","key":"OUT_DS1"}',target:'data:json,{"id":"ds_eq420","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchCombo3',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_combo3',target:'data:json,{"id":"ds_combo3","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.vEqHomeClsCd = scwin.memJson.eqHomeClsCd; //정비소속구분코드
scwin.currDate = WebSquare.date.getFormattedDate(new Date(), "yyyyMM");
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "EQ017",
    compID: "lc_inClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {
  scwin.f_defaultValue();
};

// UDC 셋팅이 이후..
scwin.onUdcCompleted = function () {
  $c.gus.cfInitObjects($p, [ed_clntCdCond, ed_clntNmCond]);
  $c.gus.cfDisableObjects($p, [btn_clntCdCond, ed_clntCdCond, ed_clntNmCond]);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  //cfDisableObjects와 비슷한 형태로, 오브젝트의 값을 초기화시킨다.
  // cfInitObjects([ed_clntCd, txt_clntNm]);  	
  if ("" == scwin.vEqHomeClsCd) {} else {
    lc_homeClsCd.setValue(scwin.vEqHomeClsCd);
  }
  dma_search.set("inYmFrom", scwin.currDate);
  dma_search.set("inYmTo", scwin.currDate);
  scwin.f_RetrieveFixWrkPl(lc_homeClsCd.getValue());
  lc_homeClsCd.focus();
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
// function f_FieldClear()  {
// 	cfInitObjects(tb_eq420, null);
// }

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
// function f_Retrieve() {	  
scwin.f_Retrieve = async function () {
  // 필수입력항목 체크	  
  let ret = await $c.gus.cfValidate($p, [lc_homeClsCd, ica_inYmFrom, ica_inYmTo]);
  if (!ret) {
    return false;
  }

  //날짜 체크 start---------------------------------------
  var ls_stDt = ica_inYmFrom.getValue();
  var ls_endDt = ica_inYmTo.getValue();
  if (ls_stDt > ls_endDt) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ica_inYmFrom.focus();
    return;
  }
  //날짜 체크 end---------------------------------------		
  if (ls_stDt.substring(0, 4) != ls_endDt.substring(0, 4)) {
    //( 시작입고년월 != 종료입고년월 )
    await $c.win.alert($p, "[입고기간]에서 '입고 시작년도'와 '입고 종료년도'는 같은 년도 이어야 합니다.");
    return;
  }
  $c.sbm.execute($p, sbm_search);
};

//------------------------------------------------------------------------
// [작업장  콤보 조회] 소속 구분에 따른 작업장 리스트 콤보 변경 ( 조회조건 LuxCombo )
//------------------------------------------------------------------------
scwin.f_RetrieveFixWrkPl = function (homeClsCd) {
  dma_combo3.set("sysCd", "PsCommonEBC");
  dma_combo3.set("queryId", "retriveWrkplList");
  dma_combo3.set("param1", homeClsCd);
  $c.sbm.execute($p, sbm_searchCombo3);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  // var rtnList;  //공통POP-UP -> 요청화면 
  switch (disGubun) {
    case 1:
      // 거래처 팝업			
      // rtnList = cfCommonPopUp( 'retrieveFixClntList'	// XML상의 SELECT ID	
      await udc_clntCdCond.cfCommonPopUp(scwin.udc_clntCdCond_callback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );

      //거래처코드  거래처명
      break;
  }
};
scwin.udc_clntCdCond_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_clntCdCond.setValue(rtnList[0]);
      ed_clntCdCond.options.hidVal = rtnList[0];
      ed_clntNmCond.setValue(rtnList[1]);
    }
  } else {
    ed_clntCdCond.setValue("");
    ed_clntCdCond.options.hidVal = "";
    ed_clntNmCond.setValue("");
  }
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
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//------------------------------------------------------------------------
// 리포트 출력 버튼
//------------------------------------------------------------------------  
///var PGM_ID ="eq_420_01_14b.jsp";
scwin.f_OzReport = async function () {
  //필수입력항목 체크	  
  // if( !cfValidate([lc_homeClsCd, ica_inYmFrom, ica_inYmTo, lc_inClsCd]) ) return;
  let ret = await $c.gus.cfValidate($p, [lc_homeClsCd, ica_inYmFrom, ica_inYmTo, lc_inClsCd]);
  if (!ret) {
    return false;
  }

  //날짜 체크 start---------------------------------------
  var ls_stDt = ica_inYmFrom.getValue();
  var ls_endDt = ica_inYmTo.getValue();
  if (ls_stDt > ls_endDt) {
    await $c.win.alert($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ica_inYmFrom.focus();
    return;
  }
  //날짜 체크 end---------------------------------------		

  if (ls_stDt.substring(0, 4) != ls_endDt.substring(0, 4)) {
    //( 시작입고년월 != 종료입고년월 )
    await $c.win.alert($p, "[입고기간]에서 '입고 시작년도'와 '입고 종료년도'는 같은 년도 이어야 합니다.");
    return;
  }
  var data = {
    reportName: "/ps/eq/partmgnt/partbuyproc/eq_420_01_14.ozr",
    odiParam: {
      homeClsCd: lc_homeClsCd.getValue(),
      homeClsNm: lc_homeClsCd.getText(true),
      wrkPlCd: lc_fixWrkPlCd.getValue(),
      wrkPlNm: lc_fixWrkPlCd.getText(true),
      inYmFrom: ica_inYmFrom.getValue(),
      inYmTo: ica_inYmTo.getValue(),
      inClsCd: lc_inClsCd.getValue(),
      inClsNm: lc_inClsCd.getText(true),
      clntCd: ed_clntCdCond.getValue(),
      clntNm: ed_clntNmCond.getValue()
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      printcommand: true,
      zoom: 90 // 배율 설정
    },
    formParam: {}
  };
  scwin.openPopup(data);
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
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = function () {
  let sheetTitle = "월간 업체별 정비자재 입고현황";
  const options = {
    fileName: sheetTitle + ".xlsx",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_eq420, options);
};
scwin.sbm_search_submitdone = function (e) {
  var rowCnt = ds_eq420.getRowCount();
  spanTotal.setLabel(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  } else {
    gr_eq420.setFocusedCell(0, 0);
  }
};
scwin.udc_clntCdCond_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntCdCond, ed_clntNmCond, 1);
};
scwin.udc_clntCdCond_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntCdCond.getValue(), ed_clntNmCond.getValue(), 'F', 'F');
};
scwin.lc_homeClsCd_onchange = function (info) {
  var vhomeClsCd = info.newValue;
  scwin.f_RetrieveFixWrkPl(vhomeClsCd);
};
scwin.btn_search1_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1);
};
scwin.lc_inClsCd_onchange = function (info) {
  var value = info.newValue;
  if (value == "3") {
    $c.gus.cfEnableObjects($p, [btn_clntCdCond, ed_clntCdCond, ed_clntNmCond]);
  } else {
    // //거래처 Clear시키기
    $c.gus.cfInitObjects($p, [ed_clntCdCond, ed_clntNmCond]);
    $c.gus.cfDisableObjects($p, [btn_clntCdCond, ed_clntCdCond, ed_clntNmCond]);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'',submenuSize:'auto',ref:'data:dma_search.homeClsCd',title:'소속',mandatory:'true',objType:'data','ev:onchange':'scwin.lc_homeClsCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'LO'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고속'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'TR'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixWrkPlCd',style:'',submenuSize:'auto',ref:'data:dma_search.wrkPlCd',objType:'data',chooseOptionLabel:'전체',visibleRowNum:'15',sortOption:'value'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_combo3'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToYearMon',A:{id:'udc_inYm',refDataMap:'dma_search',refEdDt:'inYmTo',refStDt:'inYmFrom',style:' ',edFromId:'ica_inYmFrom',edToId:'ica_inYmTo',mandatoryFrom:'true',mandatoryTo:'true'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_inClsCd',style:'',submenuSize:'auto',ref:'data:dma_search.inClsCd',chooseOptionLabel:'전체','ev:onchange':'scwin.lc_inClsCd_onchange',objType:'data',mandatory:'true',title:'입고구분',sortOption:'value'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_clntCdCond',code:'clntCd',codeId:'ed_clntCdCond',editTypeName:'focus',id:'udc_clntCdCond',maxlengthCode:'6',maxlengthName:'30',name:'clntNm',nameId:'ed_clntNmCond',objTypeCode:'data',objTypeName:'data',onloadCallbackFunc:'',popupGridHeadTitle:'귀속코드,부서명',popupID:'',refDataCollection:'dma_search',selectID:'retrieveFixClntList',style:'',validExpCode:'거래처:yes','ev:onblurCodeEvent':'scwin.udc_clntCdCond_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntCdCond_onclickEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.btn_search1_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'월간 업체별 정비자재 입고현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_Excel',gridID:'gr_eq420',id:'udc_gr_eq420'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_eq420',id:'gr_eq420',style:'',visibleRowNum:'14',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'거래처',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'거래처명',width:'130',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'작업장코드',width:'80',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'작업장',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'입고계정코드',width:'340',colSpan:'4',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'총공급가액',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'총VAT',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'총금액',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'부품',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'타이어',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'잡유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'소모품',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'70',textAlign:'center',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'130',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlCd',inputType:'text',style:'',value:'',width:'80',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlNm',inputType:'text',style:'',value:'',width:'80',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inAcctCd01',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inAcctCd02',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inAcctCd03',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inAcctCd04',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ttlInAmt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ttlVatAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ttlAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spanTotal',label:'0',style:'',tagname:'span',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'[단위 : 원]',class:''}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.f_OzReport'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력'}]}]}]}]}]}]}]}]}]})