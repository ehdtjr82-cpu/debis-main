/*amd /ui/tn/os/carrslts/carrslts/tn_405_01_01b.xml 23528 473326e49708d00538b6382d2b6514a52f9f41323b94c64ea406c95626c382bf */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true','ev:ondataload':'scwin.ds_results_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'SEAL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TYP',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'선적지;DOOR',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'DOOR;일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railDptDt',name:'철송;일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dirDt',name:'직송;일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'청구;금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입;금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pcostRate',name:'원가;율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transClsNm',name:'운송;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCls',name:'운송구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkLobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDt1',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDt2',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transCls',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pageNumber',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'quantityOfRows',name:'name7',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.os.carrslts.carrslts.RetrieveTransGravityListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_condition',target:'data:json,{"id":"ds_results","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
// Hidden 컴포넌트 선언
scwin.txt_quantityOfRows = "";
scwin.txt_pageNumber = "";

// 서버에서 받아올 session 정보 
scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); // 회원 점소 데이터
scwin.strCurrDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strFirstDate = scwin.strCurrDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.lobranCd = $c.data.getMemInfo($p, "lobranCd") == null ? "" : scwin.lobranCd;

// 호출 화면에서 받아올 파라미터
scwin.param = "";
scwin.wrkLobranCdv = "";
scwin.coClntNov = "";
scwin.type = "";

// 화면에서 사용되는 전역변수
scwin.quantityOfRows = "";
scwin.pageNumber = "";

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const param = [{
    compID: "lc_wrkLobranCd",
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"]
  }];
  $c.data.setGauceUtil($p, param);
};

//-------------------------------------------------------------------------
// 달력 UDC 기본값
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  udc_dptDt.setInitDate(scwin.strFirstDate, scwin.strCurrDate);
};
setTimeout(scwin.ondataload = function () {
  if (scwin.lobranCd == "" || scwin.lobranCd == undefined || scwin.lobranCd == null) {
    lc_wrkLobranCd.setValue(scwin.loUpperLobranCd);
  } else {
    lc_wrkLobranCd.setValue(scwin.lobranCd);
  }

  // lc_wrkLobranCd.setValue(scwin.loUpperLobranCd);
}, 200);

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = async function (e) {
  if (ica_dptDt1.getValue() == "" || ica_dptDt2.getValue() == "") {
    $c.win.alert($p, "출발일은 필수 입력 항목입니다.");
    return;
  }
  if (!(await $c.gus.cfIsAfterDate($p, ica_dptDt1.getValue(), ica_dptDt2.getValue()))) {
    $c.win.alert($p, MSG_CM_ERR_039);
    ica_dptDt1.focus();
    return;
  }
  spa_totalRows.setValue(0);
  dma_condition.set("dptDt1", ica_dptDt1.getValue());
  dma_condition.set("dptDt2", ica_dptDt2.getValue());
  dma_condition.set("wrkLobranCd", lc_wrkLobranCd.getValue());
  dma_condition.set("pageNumber", scwin.txt_pageNumber);
  dma_condition.set("quantityOfRows", scwin.txt_quantityOfRows);
  dma_condition.set("bilgClntNo", ed_bilgClntNo.getValue());
  dma_condition.set("transCls", lc_transCls.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 휴지통
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onClick = function (e) {
  $c.gus.cfInitObjects($p, tb_retrieve);
};

//-------------------------------------------------------------------------
// 청구거래처 code Killfocus
//-------------------------------------------------------------------------
scwin.udc_bilgClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, ed_bilgClntNm, 3);
  if (ed_bilgClntNo.getValue() == "") {
    dma_condition.set("bilgClntNo", "");
  }
};

//-------------------------------------------------------------------------
// 청구거래처 Name Killfocus
//-------------------------------------------------------------------------
scwin.udc_bilgClnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNm, ed_bilgClntNo, 3, true);
};

//-------------------------------------------------------------------------
// 청구거래처 Button Click
//-------------------------------------------------------------------------
scwin.udc_bilgClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_bilgClntNo.getValue(), ed_bilgClntNm.getValue(), "F", "F");
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  console.dir(inObj);
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  switch (disGubun) {
    case 3:
      // 청구거래처 팝업
      udc_bilgClnt.cfCommonPopUp(scwin.udc_bilgClnt_callBack, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
  }
};

//-------------------------------------------------------------------------
// 청구거래처 콜백
//-------------------------------------------------------------------------
scwin.udc_bilgClnt_callBack = function (rtnList) {
  if (rtnList != null) {
    dma_condition.set("bilgClntNo", rtnList[0]);
    $c.gus.cfSetReturnValue($p, rtnList, ed_bilgClntNo, ed_bilgClntNm); // 청구거래처코드, 청구거래처명      
  } else {
    dma_condition.set("bilgClntNo", "");
  }
};

//-------------------------------------------------------------------------
// 데이터셋 로드시
//-------------------------------------------------------------------------
scwin.ds_results_ondataload = function () {
  let rowCnt = ds_results.getTotalRow();
  if (rowCnt < 1) {
    spa_totalRows.setValue(0);
    $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  for (i = 0; i < ds_results.getTotalRow(); i++) {
    if (ds_results.getCellData(i, "transCls") == "1") {
      ds_results.setCellData(i, "transClsNm", "육송");
    } else if (ds_results.getCellData(i, "transCls") == "2") {
      ds_results.setCellData(i, "transClsNm", "직송");
    } else if (ds_results.getCellData(i, "transCls") == "3") {
      ds_results.setCellData(i, "transClsNm", "철송");
    }
  }
  spa_totalRows.setValue(rowCnt);
};

//-------------------------------------------------------------------------
// 그리드 EXCEL 출력
//-------------------------------------------------------------------------
scwin.gr_RunExcel = async function () {
  let options = {
    fileName: "기간별배차실적현황.xlsx",
    sheetName: "기간별배차실적현황"
  };
  let grdObj = gr_results;
  let infoArr = {};
  if (ds_results.getTotalRow() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_dptDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_dptDt1',edToId:'ica_dptDt2',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkLobranCd',style:'width: 150px;',submenuSize:'fixed',visibleRowNum:'20',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_bilgClntNo',nameId:'ed_bilgClntNm',id:'udc_bilgClnt',selectID:'retrieveClntList_tpro',btnId:'btn_bilgClnt',allowCharCode:'0-9',maxlengthCode:'6','ev:onblurCodeEvent':'scwin.udc_bilgClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_bilgClnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_bilgClnt_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_transCls',style:'width: 150px;',submenuSize:'fixed',ref:'',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'육송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'직송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'철송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 기간별배차실적현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_results',gridDownFn:'scwin.gr_RunExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',visibleRowNum:'12',visibleRowNumFix:'true',columnMove:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'오더번호',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'컨테이너',width:'320',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',width:'140',value:'청구거래처',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',width:'80',value:'작업지',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',width:'100',value:'선적지<br/>DOOR',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',width:'100',value:'DOOR<br/>일자',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',displayMode:'label',value:'철송일자',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',displayMode:'label',value:'직송일자',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',displayMode:'label',value:'청구금액',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',displayMode:'label',value:'매입금액',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column31',displayMode:'label',value:'원가율',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'운송<br/>구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column65',value:'운송<br/>구분',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true',hiddenCol:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column59',value:'번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column58',value:'SEAL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column57',value:'SIZ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column56',value:'TYP',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'110',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo',inputType:'text',width:'90',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDt',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'railDptDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dirDt',displayMode:'label',displayFormat:'####/##/##',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pcostRate',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'transClsNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'transCls',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column39',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("sellAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column36',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("pchsAmt")'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column33',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'info-box',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'info-ico ',escape:'false',id:'',label:'출발일자 : DOOR운송 실적의 출발일자',style:''}},{T:1,N:'w2:textbox',A:{class:'info-ico ',escape:'false',id:'',label:'운송구분',style:''}},{T:1,N:'w2:textbox',A:{class:'info-con',escape:'false',id:'',label:'1. 육송, 철송 구분시 철송 및 직송을 하기 위해 셔틀한 컨테이너는 육송에서 제외됨',style:''}},{T:1,N:'w2:textbox',A:{class:'info-con',escape:'false',id:'',label:'2. 직송 : 셔틀작업 후 지사간(의왕,광양,부산) 철송을 이용하지 않고 처리된 건',style:''}},{T:1,N:'w2:textbox',A:{class:'info-con',escape:'false',id:'',label:'3. 철송 : 셔틀작업 후 배차점소의 작업장에서 도착지로 철송 처리된 건',style:''}},{T:1,N:'w2:textbox',A:{class:'info-con',escape:'false',id:'',label:'4. 육송 : DOOR작업 후 DOOR 회수단계에서 도착지로 육송 처리된 건',style:''}}]}]}]}]}]}]})