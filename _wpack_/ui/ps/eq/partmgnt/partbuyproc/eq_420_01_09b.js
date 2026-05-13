/*amd /ui/ps/eq/partmgnt/partbuyproc/eq_420_01_09b.xml 28146 703e93fd7109c2b475c9ee2d8c9e441f0c335582a15b89c4861e5265bd8bacd0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_repFixWrkPl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClsCd',name:'소속',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inDtCls',name:'상태 XXX',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtFrom',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtTo',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'buyCls',name:'구매구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'status',name:'부품구매 "등록"관리',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_repFixWrkPl'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cmd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'strVal',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'intVal',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq420',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyNo',name:'구매번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inReqDt',name:'입고예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyClsCd',name:'구매구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplyUpr',name:'공급가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ttl',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsNm',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyReqDt',name:'구매요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inClsCd',name:'입고구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnCls',name:'과세대상구분',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.partmgnt.partbuyproc.RetrievePartsBuyingRequestManagementCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_eq420","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eq420","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_repFixWrkPl',action:'/ps.co.RetrievePsCboCmmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_repFixWrkPl',target:'data:json,{"id":"ds_repFixWrkPl","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_repFixWrkPl_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.btnList = ["btn_create", "btn_detail"];

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "EQ026",
    compID: "lc_buyCls,gr_eq420:buyClsCd"
  }, {
    grpCd: "EQ902",
    compID: "gr_eq420:stsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  const param = [{
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retriveHomeClsList",
    compID: "lc_homeClsCd"
  }, {
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retrievePartBuyStatus",
    compID: "lc_stsCd"
  }];
  $c.data.setGauceUtil($p, param, function () {
    lc_homeClsCd.setValue(scwin.memJson.eqHomeClsCd); // 정비소속구분코드
    if (scwin.memJson.eqHomeClsCd == "null") {
      lc_homeClsCd.setSelectedIndex(0);
    }
  });
};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  ica_dtFrom.setValue($c.date.getServerDateTime($p, "yyyyMM") + "01");
  ica_dtTo.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
};
scwin.ondataload = function () {
  ed_status.hide();
  dma_search.set("status", "register");
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  //cfDisableObjects와 비슷한 형태로, 오브젝트의 값을 초기화시킨다.
  $c.gus.cfInitObjects($p, [ed_clntNo, ed_clntNm]);
  $c.gus.cfDisableObjects($p, [btn_detail]);
  acb_inDtCls.setSelectedIndex(0);
  scwin.f_RetrieveRepFixWrkPl(lc_homeClsCd.getValue());
  lc_homeClsCd.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //필수입력항목 체크	  
  let ret = await $c.gus.cfValidate($p, [lc_homeClsCd, lc_fixWrkPlCd, acb_inDtCls, ica_dtFrom, ica_dtTo]);
  if (!ret) return;
  if (!$c.gus.cfIsAfterDate($p, ica_dtFrom.getValue(), ica_dtTo.getValue())) {
    await $c.win.alert($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ica_dtFrom.focus();
    return;
  }
  lc_fixWrkPlCd.setDisplayMode("label");
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = async function () {
  //팝업화면에, key값인  "정비작업장코드,구매번호,선입고여부" 를 넘겨준다.
  let valueObject = {};
  valueObject.create = true; //신규/상세 구분
  valueObject.fixWrkPlCd = lc_fixWrkPlCd.getValue(); //대표작업장코드
  lc_fixWrkPlCd.setDisplayMode("label");
  valueObject.fixWrkPlNm = lc_fixWrkPlCd.getText();
  lc_fixWrkPlCd.setDisplayMode("value delim label");
  //신규입력화면 호출 
  const options = {
    id: "eq_420_01_10p",
    popupName: "부품구매등록",
    width: 1240,
    height: 800
  };
  let result = await $c.win.openPopup($p, "/ui/ps/eq/partmgnt/partbuyproc/eq_420_01_10p.xml", options, valueObject);
  result = "RETRIEVE";

  //다시 조회함 
  if (result == "RETRIEVE") {
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 상세
//-------------------------------------------------------------------------
scwin.f_Detail = async function () {
  if (ds_eq420.getRowPosition() > -1) {
    //팝업화면에, key값인  "정비작업장코드,구매번호,선입고여부" 를 넘겨준다.
    let valueObject = {};
    valueObject.create = false; // 신규/상세 구분
    valueObject.fixWrkPlCd = ds_eq420.getCellData(ds_eq420.getRowPosition(), 'fixWrkPlCd'); //정비작업장코드
    valueObject.fixWrkPlNm = ds_eq420.getCellData(ds_eq420.getRowPosition(), 'fixWrkPlNm'); //정비작업장코드
    valueObject.buyNo = ds_eq420.getCellData(ds_eq420.getRowPosition(), 'buyNo'); //구매번호
    valueObject.buyReqDt = ds_eq420.getCellData(ds_eq420.getRowPosition(), 'buyReqDt'); //구매요청일자
    valueObject.clntNo = ds_eq420.getCellData(ds_eq420.getRowPosition(), 'clntNo'); //거래처코드
    valueObject.clntNm = ds_eq420.getCellData(ds_eq420.getRowPosition(), 'clntNm'); //거래처명
    valueObject.stsCd = ds_eq420.getCellData(ds_eq420.getRowPosition(), 'stsCd'); //상태	    
    valueObject.buyClsCd = ds_eq420.getCellData(ds_eq420.getRowPosition(), 'buyClsCd'); //구매구분
    valueObject.inClsCd = ds_eq420.getCellData(ds_eq420.getRowPosition(), 'inClsCd'); //입고구분
    valueObject.inReqDt = ds_eq420.getCellData(ds_eq420.getRowPosition(), 'inReqDt'); //입고예정일자
    valueObject.inDt = ds_eq420.getCellData(ds_eq420.getRowPosition(), 'inDt'); //입고일자
    valueObject.taxnCls = ds_eq420.getCellData(ds_eq420.getRowPosition(), 'taxnCls'); //과세대상구분

    //상세화면 호출 
    const options = {
      id: "eq_420_01_10p_detail",
      popupName: "부품구매등록",
      width: 1240,
      height: 800
    };
    let result = await $c.win.openPopup($p, "/ui/ps/eq/partmgnt/partbuyproc/eq_420_01_10p.xml", options, valueObject);
    result = "RETRIEVE";

    //다시 조회함 
    if (result == "RETRIEVE") {
      scwin.f_Retrieve();
    }
  } else {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_056, ["Row"]));
  }
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  ed_status.setValue("register");
};

//------------------------------------------------------------------------
// [작업장  콤보 조회] 소속 구분에 따른 작업장 리스트 콤보 변경 ( 조회조건 LuxCombo )
//------------------------------------------------------------------------
scwin.f_RetrieveRepFixWrkPl = function (homeClsCd) {
  const params = {
    cmd: "retriveFixWrkList",
    strVal: homeClsCd,
    intVal: ""
  };

  //데이터셋에 정보설정
  dma_repFixWrkPl.setJSON(params);
  $c.sbm.execute($p, sbm_repFixWrkPl);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 거래처 팝업			
      await udc_fixClntList.cfCommonPopUp(scwin.udc_fixClntList_callBack, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , ",3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};
scwin.udc_fixClntList_callBack = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
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

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  const options = {
    fileName: '부품구매목록.xlsx',
    sheetName: '부품구매목록',
    columnMove: true,
    columnMoveWithFooter: true
  };
  $c.data.downloadGridViewExcel($p, gr_eq420, options);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_eq420.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    //Objects Control
    $c.gus.cfEnableObjects($p, [btn_create]);
  } else {
    //Objects Control -- 조회건수가 있을때만 상세버튼 enable
    $c.gus.cfEnableObjects($p, scwin.btnList);
    gr_eq420.setFocusedCell(0, 1);
  }
  totalRows.setValue(rowCnt);
};
scwin.lc_homeClsCd_onchange = function (info) {
  let luxIndex = lc_homeClsCd.getValue();
  scwin.f_RetrieveRepFixWrkPl(luxIndex);
};
scwin.udc_fixClntList_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 1);
};
scwin.udc_fixClntList_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_create_onclick = function (e) {
  scwin.f_Create();
};
scwin.sbm_repFixWrkPl_submitdone = function (e) {
  lc_fixWrkPlCd.setValue(scwin.vFixWrkPlCd); // 정비작업장코드

  if (lc_fixWrkPlCd.getSelectedIndex() == -1) lc_fixWrkPlCd.setSelectedIndex(0);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_detail_onclick = async function (e) {
  if (ds_eq420.getRowPosition() != null) {
    scwin.f_Detail();
  } else {
    await $c.win.alert($p, "목록을 선택해주세요.");
  }
};
scwin.udc_fixClntList_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_homeCls',label:'소속 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width:150px;',submenuSize:'fixed',objType:'data',mandatory:'true',ref:'data:dma_search.homeClsCd','ev:onchange':'scwin.lc_homeClsCd_onchange',title:'소속'}},{T:1,N:'xf:input',A:{class:'',id:'ed_status',style:'',objType:'data',maxlength:'9',readOnly:'true',ref:'data:dma_search.status'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_fixWrkPl',label:'대표작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 150px;',allOption:'',id:'lc_fixWrkPlCd',class:'',direction:'auto',objType:'key',mandatory:'true',ref:'data:dma_search.wrkPlCd',title:'대표작업장',sortOption:'value',visibleRowNum:'25',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_repFixWrkPl'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'acb_inDtCls',search:'start',style:'width: 150px;',submenuSize:'fixed',objType:'key',mandatory:'true',allOption:'',chooseOption:'',ref:'data:dma_search.inDtCls',displayMode:'value delim label',title:'구매예정일자'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'구매예정일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'입고예정일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'입고일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'dtFrom',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar1',refEdDt:'dtTo',objTypeFrom:'key',mandatoryFrom:'true',edToId:'ica_dtTo',edFromId:'ica_dtFrom',objTypeTo:'key',mandatoryTo:'true',objTypeBtn:'data',class:'req'}}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구매구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_buyCls',style:'width: 150px;',submenuSize:'fixed',objType:'data',chooseOptionLabel:'전체',ref:'data:dma_search.buyCls',displayMode:'value delim label',title:'구매구분',visibleRowNum:'25'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_stsCd',style:'width: 150px;',submenuSize:'fixed',objType:'data',chooseOptionLabel:'전체',ref:'data:dma_search.stsCd',title:'상태'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveFixClntList',codeId:'ed_clntNo',validTitle:'거래처',nameId:'ed_clntNm',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',UpperFlagCode:'1',readOnlyCode:'false',objTypeName:'data',mandatoryName:'false',btnId:'btn_clnt',code:'clntCd',refDataCollection:'dma_search',id:'udc_fixClntList','ev:onblurCodeEvent':'scwin.udc_fixClntList_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_fixClntList_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_fixClntList_onclickEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'outInfoNm',label:'부품구매 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_eq420',gridDownFn:'scwin.f_Excel',gridUpYn:'N',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_eq420',id:'gr_eq420',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',columnMove:'true',readOnly:'true',columnMoveWithFooter:'true',fixedColumn:'5',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'작업장코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'작업장명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'구매번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'입고</br>예정일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'입고일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'구매구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'공급가',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column40',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column42',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column46',value:'상태',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlCd',inputType:'text',width:'120',colMerge:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlNm',inputType:'text',width:'100',colMerge:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'buyNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inReqDt',inputType:'text',width:'100',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inDt',inputType:'text',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'buyClsCd',inputType:'select',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'supplyUpr',inputType:'text',width:'100',dataType:'number',allowChar:'0-9',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',displayMode:'label',dataType:'number',allowChar:'0-9',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'ttl',displayMode:'label',expression:'Number(display("supplyUpr")) + Number(display("vatAmt"))',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'stsCd',displayMode:'value delim label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'stsNm',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column59',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column56',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column51',displayMode:'label',dataType:'number',expression:'sum("supplyUpr")',displayFormat:'#,##0',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column50',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("vatAmt")',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column49',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("ttl")',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column47',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_create',type:'button',class:'btn link white',userAuth:'C','ev:onclick':'scwin.btn_create_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_detail',type:'button',class:'btn link white',userAuth:'U','ev:onclick':'scwin.btn_detail_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상세'}]}]}]}]}]}]}]}]}]})