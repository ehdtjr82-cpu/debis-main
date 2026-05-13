/*amd /ui/ps/eq/partmgnt/partbuyproc/eq_420_01_11b.xml 22875 4c03ba31f24f9d0d0c0395b370cb29769882a1fbf5fe2c78d6b86c48047e582a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'retnDtFrom',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'retnDtTo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq420',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retnDt',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplyUpr',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ttl',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fixWrkPl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fixWrkPl'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:'PsCommonEBC'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:'retriveWrkplList'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.partmgnt.partbuyproc.RetrievePartsReturnCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_eq420","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_eq420","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_fixWrkPl',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_fixWrkPl',target:'data:json,{"id":"ds_fixWrkPl","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_fixWrkPl_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 로그인사용자 정보
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 

scwin.vLoginFixwrkPlCd = ""; //정비작업장코드

scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); //날짜형식입니다.

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // 회원정보를 json 데이터로 모두 받음
  var memJson = $c.data.getMemInfo($p);

  // 로그인 정보 추출
  var userHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드
  var wrkprcd = $c.data.getMemInfo($p, "fixWrkPlCd");
  scwin.vUserHomeClsCd = userHomeClsCd;
  scwin.vLoginFixwrkPlCd = wrkprcd;
  console.log("▶▶ memJson : " + JSON.stringify(memJson));
  scwin.params = $c.data.getParameter($p);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  //날짜 셋팅
  dma_search.set("retnDtFrom", scwin.vCurDate.substring(0, 6) + "01");
  dma_search.set("retnDtTo", scwin.vCurDate);

  //초기화
  scwin.f_defaultValue();
};
scwin.f_defaultValue = async function () {
  //공통코드
  var param = [{
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retriveHomeClsList",
    compID: "lc_homeClsCd"
  }];
  await $c.data.setGauceUtil($p, param);

  //cfDisableObjects와 비슷한 형태로, 오브젝트의 값을 초기화시킨다.
  $c.gus.cfInitObjects($p, [udc_clnt]);
  $c.gus.cfDisableObjects($p, [pu_detail]);
  lc_homeClsCd.setValue(scwin.vUserHomeClsCd); //정비소속구분코드

  if ($c.gus.cfIsNull($p, scwin.vUserHomeClsCd)) {
    lc_homeClsCd.setSelectedIndex(0);
  }
  scwin.f_RetrieveFixWrkPl(lc_homeClsCd.getValue());
  lc_homeClsCd.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  //필수입력항목 체크	  
  if (!(await $c.gus.cfValidate($p, [lc_homeClsCd, lc_fixWrkPlCd, ed_dtFrom, ed_dtTo]))) return;
  if (!$c.gus.cfIsAfterDate($p, ed_dtFrom.getValue(), ed_dtTo.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_dtFrom.focus();
    return;
  }

  //조회조건 셋팅
  dma_search.set("homeClsCd", lc_homeClsCd.getValue());
  dma_search.set("wrkPlCd", lc_fixWrkPlCd.getValue());
  dma_search.set("clntCd", ed_clntNo.getValue());

  //ds_search.UseChangeInfo="false";			  
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  $c.gus.cfDisableObjects($p, [pu_create, pu_detail]);
  var rowCnt = ds_eq420.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    $c.gus.cfEnableObjects($p, [pu_create]);
  } else {
    $c.gus.cfEnableObjects($p, [pu_create, pu_detail]);
    gr_eq420.setFocusedCell(0, 0); //tobe추가 : 조회후, 그리드 상단에 focus가 가 있음.
  }
  totalRows.setValue(rowCnt);
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = async function (e) {
  //팝업화면에, key값인  "정비작업장코드,구매번호,선입고여부" 를 넘겨준다.
  var valueObject = {};
  valueObject.create = true; //신규/상세 구분
  valueObject.fixWrkPlCd = lc_fixWrkPlCd.getValue(); //대표작업장코드

  //신규입력화면 호출 
  var options = {
    id: "eq_420_01_16p",
    popupName: "부품반품등록",
    width: 930,
    height: 600
  };
  var result = await $c.win.openPopup($p, "/ui/ps/eq/partmgnt/partbuyproc/eq_420_01_16p.xml", options, valueObject);
  result = "RETRIEVE";

  //다시 조회함 
  if (result == "RETRIEVE") {
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 상세
//-------------------------------------------------------------------------
scwin.f_Detail = async function (e) {
  var rowFocus = ds_eq420.getRowPosition();
  if (rowFocus > -1) {
    //팝업화면에, key값인  "정비작업장코드, 구매번호" 를 넘겨준다.
    let valueObject = {};
    valueObject.create = false; //신규/상세 구분

    valueObject.fixWrkPlCd = ds_eq420.getRowJSON(rowFocus).fixWrkPlCd; //정비작업장코드
    valueObject.buyNo = ds_eq420.getRowJSON(rowFocus).buyNo; //구매번호

    //상세화면 호출
    var options = {
      id: "eq_420_01_16p",
      popupName: "부품반품등록",
      width: 930,
      height: 600
    };
    var result = await $c.win.openPopup($p, "/ui/ps/eq/partmgnt/partbuyproc/eq_420_01_16p.xml", options, valueObject);
    result = "RETRIEVE";
    //다시 조회함 
    if (result == "RETRIEVE") {
      scwin.f_Retrieve();
    }
  } else {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_056, ["Row"]));
  }
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tb_eq420, null);
};

//------------------------------------------------------------------------
// [작업장  콤보 조회] 소속 구분에 따른 작업장 리스트 콤보 변경 ( 조회조건 LuxCombo )
//------------------------------------------------------------------------
scwin.f_RetrieveFixWrkPl = function (homeClsCd) {
  dma_fixWrkPl.set("param1", homeClsCd);
  $c.sbm.execute($p, sbm_fixWrkPl);
};
scwin.sbm_fixWrkPl_submitdone = function () {
  lc_fixWrkPlCd.setValue(scwin.vLoginFixwrkPlCd); //정비작업장코드
  if (lc_fixWrkPlCd.getSelectedIndex() == -1) lc_fixWrkPlCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  if (disGubun == "1") {
    //거래처 팝업
    await udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc, pCode,
    // 화면에서의 Code Element의	Value
    pName,
    // 화면에서의 Name Element의	Value
    pClose,
    // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    null,
    // 검색 결과	컬럼의 보여주는	개수
    null,
    // Title순서	
    null,
    // 보여주는 각 컬럼들의 폭	
    null,
    // 컬럼중에서 숨기는	컬럼 지정	
    null,
    // SQL절의 WHERE절에	원하는 조건을 선택함
    null,
    // POP-UP뛰을때 원도우의	사용자 정의	폭
    null,
    // POP-UP뛰을때 우도우의	사용자 정의	높이	
    null,
    // 윈도우 위치 Y좌표	
    null,
    // 윈도우 위치 X좌표
    null,
    // 중복체크여부	("F")
    pAllSearch,
    // 전체검색허용여부	("F")
    "거래처,거래처코드,거래처명" // POP-UP Window Title
    );
  }
};
scwin.udc_clnt_callBackFunc = function (rtnList) {
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
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if ($c.gus.cfIsNull($p, isCode) || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');

    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.excelDown = function () {
  var options = {
    fileName: "부품반품목록.xlsx",
    sheetName: "부품반품목록"
  };
  $c.data.downloadGridViewExcel($p, gr_eq420, options);
};

//-------------------------------------------------------------------------
// [소속 콤보] 정비소속에 해당하는 작업장 Setting
//-------------------------------------------------------------------------
scwin.lc_homeClsCd_onchange = function (info) {
  var lcIndex = lc_homeClsCd.getValue();
  scwin.f_RetrieveFixWrkPl(lcIndex);
};

//-------------------------------------------------------------------------
// (PopUp EVENT) 거래처코드 EMEdit Focus 이동시
//-------------------------------------------------------------------------
scwin.udc_clnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 1);
};
scwin.udc_clnt_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
};
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.ttl_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  var supplyUprV = $c.num.parseInt($p, ds_eq420.getRowJSON(rowIndex).supplyUpr);
  var vatAmtV = $c.num.parseInt($p, ds_eq420.getRowJSON(rowIndex).vatAmt);
  return $c.num.formatNumber($p, supplyUprV + vatAmtV);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_eq420',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 150px;',submenuSize:'fixed',mandatory:'true',ref:'',displayMode:'label','ev:onchange':'scwin.lc_homeClsCd_onchange'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixWrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'',mandatory:'true',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_fixWrkPl'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'반품일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'retnDtFrom',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar',refEdDt:'retnDtTo',edFromId:'ed_dtFrom',edToId:'ed_dtTo',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'key',objTypeTo:'key'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveFixClntListPopup',selectID:'retrieveFixClntList',codeId:'ed_clntNo',validTitle:'거래처',nameId:'ed_clntNm',style:'',UpperFlagCode:'1',maxlengthCode:'6',objTypeCode:'data',objTypeName:'data',id:'udc_clnt','ev:onviewchangeCodeEvent':'scwin.udc_clnt_onviewchangeCodeEvent',btnId:'btn_PopUp1','ev:onclickEvent':'scwin.udc_clnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent',allowCharCode:'0-9'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':' scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'부품반품 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridID:'gr_eq420',gridDownYn:'Y',gridDownFn:'scwin.excelDown',templateYn:'N',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_eq420',focusMode:'row',id:'gr_eq420',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'정비작업장',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'반품번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'반품일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'공급가',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'합계',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlCd',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'buyNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'retnDt',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'supplyUpr',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ttl',inputType:'expression',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,###',textAlign:'right',expression:'Number(display("supplyUpr")) + Number(display("vatAmt"))'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column43',value:'',displayMode:'label',expression:'SUM(\'supplyUpr\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',expression:'SUM(\'vatAmt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',expression:'SUM(\'ttl\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white link',id:'pu_create',style:'display:none',type:'button','ev:onclick':'scwin.f_Create'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white link',id:'pu_detail',style:'display:none',type:'button','ev:onclick':'scwin.f_Detail'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상세'}]}]}]}]}]}]}]}]}]})