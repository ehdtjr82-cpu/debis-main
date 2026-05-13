/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_01_67b.xml 33106 c0a3392249655f316a43956bcb9c1e1778390d5acca35ee435dcc7d3bd4e364e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizLongCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchWrkStDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchWrkEndDt',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Present',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salePlCoNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salePlCoNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrNo',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commClssNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntCommCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkQty',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smQty',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smQty1',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkWt',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd1',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd2',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideCdNm',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplZip',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioDt',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfVehclNo',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransYn',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt2',name:'name34',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveBoralTransportCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Query","key":"IN_DS1"},{"id":"ds_Present","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_Present","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 세션정보 가져오기
scwin.sUserId = "";
scwin.sUserClsCd = "";
scwin.sClntNo = "";
scwin.sClntNm = "";
scwin.sLobranCd = "";
scwin.strlobranCd = "";
scwin.strlobranNm = "";
scwin.strFromDate = ""; // 현재년월일을 구한다.
scwin.strToDate = ""; // 현재일자를 구한다.
scwin.strDate = "";
scwin.wrkPlCd = "999"; // 작업장코드

scwin.onpageload = function () {
  scwin.sUserId = $c.data.getMemInfo($p, "userId");
  scwin.sUserClsCd = $c.data.getMemInfo($p, "userClsCd");
  scwin.sClntNo = $c.data.getMemInfo($p, "clntNo");
  scwin.sClntNm = $c.data.getMemInfo($p, "clntNm");
  scwin.sLobranCd = $c.data.getMemInfo($p, "lobranCd");
  scwin.strlobranCd = $c.data.getMemInfo($p, "strlobranCd");
  scwin.strlobranNm = $c.data.getMemInfo($p, "strlobranNm");
  scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMMdd").substring(0, 8); // 현재년월일을 구한다.
  scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.
  scwin.strDate = scwin.strFromDate + scwin.strToDate;
};
scwin.onUdcCompleted = function () {
  ed_bilgLodeptCd.setValue(scwin.strlobranCd);
  ed_bilgLodeptNm.setValue(scwin.strlobranNm);
  ed_srchWrkStDt.setValue(scwin.strToDate);
  ed_srchWrkEndDt.setValue(scwin.strToDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //    if (!$c.gus.cfValidate(ed_srchWrkStDt) || !$c.gus.cfValidate(ed_srchWrkEndDt)) {
  //      return;
  //    }

  if (!(await $c.gus.cfValidate($p, [ed_srchWrkStDt, ed_srchWrkEndDt]))) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_srchWrkStDt.getValue(), ed_srchWrkEndDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_srchWrkStDt.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// GRID에서 선택된 오더요청처리 : 해당 오더요청처리 페이지로 이동
//-------------------------------------------------------------------------
//조회조건 초기화
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_mainData, [udc_comCodeBilgLodept, udc_comCodeBizLong]);
  ed_srchWrkStDt.setValue(scwin.strFromDate);
  ed_srchWrkEndDt.setValue(scwin.strToDate);
  ed_bilgLodeptCd.focus();
};

//-------------------------------------------------------------------------
// 보관요율 생성popup 호출
//-------------------------------------------------------------------------
scwin.f_ratePopup = async function () {
  let data = {
    param1: "보관요율 팝업"
  };
  let opts = {
    id: "popUp",
    popupName: "크나우프보관요율등록(마감용)",
    modal: true,
    type: "browserPopup",
    width: 980,
    height: 680,
    title: "보관요율 팝업"
  };
  await $c.win.openPopup($p, "/ui/ds/op/wrkrslts/transwrkrslts/op_304_01_67p.xml", opts, data);
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel = async function (varGrNm) {
  var totCnt = ds_Present.getRowCount();
  var sheetTitle = "크나우프보관료조회";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle,
        sheetName: sheetTitle
      };
      $c.data.downloadGridViewExcel($p, gr_InIntendInformation, options);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_retrieve_submitdone = function (e) {
  var totalCnt = ds_Present.getRowCount();
  if (totalCnt == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  totalrows.setValue(ds_Present.getRowCount());
};
scwin.udc_comCodeBilgLodept_onclickEvent = function (e) {
  scwin.bulgLodept("F");
};
scwin.bulgLodept = function (sVal) {
  udc_comCodeBilgLodept.cfCommonPopUp(scwin.udc_comCodeBilgLodept_callBackFunc, ed_bilgLodeptCd.getValue() // 화면에서의 ??? Code Element의	Value
  , ed_bilgLodeptNm.getValue() // 화면에서의 ??? Name Element의	Value
  , sVal // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서	
  , null // 보여주는 각 컬럼들의 폭	
  , null // 컬럼중에서 숨기는	컬럼 지정	
  , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , "F" // 전체검색허용여부	("F")
  , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};
scwin.udc_comCodeBilgLodept_callBackFunc = function (ret) {
  // console.log(ret); 
  $c.gus.cfSetReturnValue($p, ret, ed_bilgLodeptCd, ed_bilgLodeptNm);
};
scwin.udc_comCodeBilgLodept_onblurCodeEvent = function (e) {
  if (ed_bilgLodeptCd.getValue() === "") {
    ed_bilgLodeptNm.setValue("");
  } else {
    scwin.bulgLodept("T");
  }
};
scwin.udc_comCodeBilgLodept_onviewchangeNameEvent = function (info) {
  if (ed_bilgLodeptNm.getValue() === "") {
    ed_bilgLodeptCd.setValue("");
  }
};
scwin.udc_comCodeBizLong_onclickEvent = function (e) {
  scwin.udc_OpenPopup("F");
};
scwin.udc_OpenPopup = function (sVal) {
  udc_comCodeBizLong.cfCommonPopUp(scwin.udc_comCodeBizLong_callBackFunc, ed_bizLongCd.getValue() // 화면에서의 ??? Code Element의	Value
  , ed_bizLongNm.getValue() // 화면에서의 ??? Name Element의	Value
  , sVal // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서	
  , null // 보여주는 각 컬럼들의 폭	
  , null // 컬럼중에서 숨기는	컬럼 지정	
  , ",BIZ,999" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , "F" // 전체검색허용여부	("F")
  , "사업장,사업장코드,사업장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};
scwin.udc_comCodeBizLong_callBackFunc = function (ret) {
  // console.log(ret); 
  $c.gus.cfSetReturnValue($p, ret, ed_bizLongCd, ed_bizLongNm);
};
scwin.udc_comCodeBizLong_onblurCodeEvent = function (e) {
  if (ed_bizLongCd.getValue() === "") {
    ed_bizLongNm.setValue("");
  } else {
    scwin.udc_OpenPopup("T");
  }
};
scwin.udc_comCodeBizLong_onviewchangeNameEvent = function (info) {
  if (ed_bizLongNm.getValue() === "") {
    ed_bizLongCd.setValue("");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출물류부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveOpDeptCdInfo',codeId:'ed_bilgLodeptCd',validTitle:'',nameId:'ed_bilgLodeptNm',style:'',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',id:'udc_comCodeBilgLodept',maxlengthCode:'4',refDataCollection:'dma_Query',code:'bilgLodeptCd','ev:onclickEvent':'scwin.udc_comCodeBilgLodept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeBilgLodept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeBilgLodept_onviewchangeNameEvent',progressBarSwitch:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_bizLongCd',nameId:'ed_bizLongNm',popupID:'',selectID:'retrieveEdiMapping',style:'',validTitle:'',objTypeCode:'data',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',id:'udc_comCodeBizLong',refDataCollection:'dma_Query',code:'bizLongCd','ev:onclickEvent':'scwin.udc_comCodeBizLong_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeBizLong_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeBizLong_onviewchangeNameEvent',progressBarSwitch:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'srchWrkStDt',refDataMap:'dma_Query',style:'',id:'udc_fromToCalendar3',refEdDt:'srchWrkEndDt',edFromId:'ed_srchWrkStDt',edToId:'ed_srchWrkEndDt',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'작업 조회 시작일자',titleTo:'작업 조회 종료일자',validChkYn:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'크나우프 보관료조회 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',templateYn:'N',gridID:'gr_InIntendInformation',btnUser:'Y',btnPlusYn:'Y',gridDownYn:'Y',gridDownFn:'scwin.f_runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_Present',focusMode:'row',id:'gr_InIntendInformation',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',fixedColumn:'7',readOnly:'true',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'창고명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'공장코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'사업장',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'판매처번호',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'거래처명',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'크나우프오더번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'오더종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'품목명',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'품번',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column91',value:'품명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column88',value:'작업수량',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'작업단위',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'SM수량 ',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'SM단위',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'작업중량',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'중량단위',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'권역',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'권역1',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'권역2',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'우편명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'우편번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'매출단가',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'매출금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column49',value:'부가세금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column115',value:'오더일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column112',value:'입출고일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column109',value:'차량번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column106',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column103',value:'오더순서',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column100',value:'작업지시번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column94',value:'자가운송여부',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',style:'',value:'',width:'100',textAlign:'center',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizLongCd',inputType:'text',style:'',value:'',width:'100',textAlign:'center',colMerge:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizLongNm',inputType:'text',style:'',value:'',width:'100',textAlign:'center',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmndNo',inputType:'text',style:'',value:'',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'salePlCoNm',inputType:'text',style:'',value:'',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtOdrNo',inputType:'text',style:'',value:'',width:'150',textAlign:'center',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPatternCd',inputType:'text',style:'',value:'',width:'100',textAlign:'center',colMerge:'true',upperColumn:'mchtOdrNo'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commClssNm',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntCommCd',inputType:'text',style:'',value:'',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commNm',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkQty',value:'',displayMode:'label',textAlign:'center',displayFormat:'#,###.0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'qtyUnitCd',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'smQty',value:'',displayMode:'label',textAlign:'center',displayFormat:'#,##0.0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'smQty1',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkWt',value:'',displayMode:'label',textAlign:'center',displayFormat:'#,##0.000',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'unitCd',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvWrkPlCd',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arvWrkPlCd1',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arvWrkPlCd2',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'osideCdNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tplZip',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellUpr',value:'',displayMode:'label',textAlign:'center',displayFormat:'#,##0.00',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmt',value:'',displayMode:'label',textAlign:'center',displayFormat:'#,##0.00',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vatAmt2',value:'',displayMode:'label',textAlign:'center',displayFormat:'#,##0.00',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrDt',value:'',displayMode:'label',textAlign:'center',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ioDt',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'selfVehclNo',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'odrNo',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sellSeq',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'transWrkIndictNo',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'selfTransYn',value:'',displayMode:'label',textAlign:'center'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'wrkPlNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column148',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column147',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column146',value:'',displayMode:'label',expression:'targetColValue()'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column145',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column144',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column143',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'',style:'',id:'column142',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column141',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column140',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column139',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column138',value:'',displayMode:'label',expression:'SUM(\'wrkQty\')',displayFormat:'#,###.0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column137',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column136',value:'',displayMode:'label',expression:'SUM(\'smQty\')',displayFormat:'#,##0.0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column135',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column134',value:'',displayMode:'label',expression:'SUM(\'wrkWt\')',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column133',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column132',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column131',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column130',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column129',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column128',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column127',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column126',value:'',displayMode:'label',expression:'SUM(\'sellAmt\')',dataType:'number',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column125',value:'',displayMode:'label',expression:'SUM(\'vatAmt2\')',displayFormat:'#,##0.00',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column124',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column123',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column122',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column121',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column120',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column119',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column118',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column90',value:'0.0',displayMode:'label',displayFormat:'#,###.0',expression:'SUM(\'wrkQty\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column84',value:'0',displayMode:'label',displayFormat:'#,##0.0',expression:'SUM(\'smQty\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column78',value:'0.000',displayMode:'label',displayFormat:'#,##0.000',expression:'SUM(\'wrkWt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00',expression:'SUM(\'sellAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column51',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'vatAmt2\')',displayFormat:'#,##0.00',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column117',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column114',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column111',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column108',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column102',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'tr_grid1_ttrows',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalrows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_ManifestList',style:'',type:'button','ev:onclick':'scwin.f_ratePopup'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보관요율'}]}]}]}]}]}]}]}]}]})