/*amd /ui/ja/dn/workrslts/ja_400_01_01b.xml 21829 4604cd26494a31ffa3533ffac656904a7fed8dce9204ed457f2b96d0ab45cfc2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellClntNo',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNm',name:'명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입',dataType:'number'}},{T:1,N:'w2:column',A:{id:'profit',name:'손익',dataType:'number'}},{T:1,N:'w2:column',A:{id:'itemSellAmt1',name:'매출1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'itemSellAmt2',name:'매출2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'itemSellAmt3',name:'매출3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'itemSellAmt4',name:'매출4',dataType:'number'}},{T:1,N:'w2:column',A:{id:'itemPchsAmt1',name:'매입1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'itemPchsAmt2',name:'매입2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'itemPchsAmt3',name:'매입3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'itemPchsAmt4',name:'매입4',dataType:'number'}},{T:1,N:'w2:column',A:{id:'itemSellAmt1ColName',name:'매출1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'itemSellAmt2ColName',name:'매출2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'itemSellAmt3ColName',name:'매출3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'itemSellAmt4ColName',name:'매출4',dataType:'number'}},{T:1,N:'w2:column',A:{id:'itemPchsAmt1ColName',name:'매입1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'itemPchsAmt2ColName',name:'매입2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'itemPchsAmt3ColName',name:'매입3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'itemPchsAmt4ColName',name:'매입4',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellClntNo',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ja.dn.workrslts.RetrievePrflosRsltsPrscondCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submit':'scwin.sbm_retrieve_submit','ev:submiterror':'scwin.sbm_retrieve_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : ja_400_01_01b 
// 이름     : 손익 실적 현황
// 경로     : 물류/유통물류/실적관리/
// 작 성 자 : 조성빈
// 작 업 일 : 2026-01-15
// 사용계정 : 내부
// 비고     : 
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.sDate;
scwin.strCurDate;
scwin.strQryStDt;
scwin.onpageload = function () {
  scwin.sDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.strCurDate = scwin.sDate;
  scwin.strQryStDt = scwin.strCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    ica_dtFrom.setValue(scwin.strQryStDt);
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_portCondtionPart, null);
};

//조회
scwin.f_Retrieve = async function () {
  if (ica_dtFrom.getValue() == "") {
    await $c.win.alert($p, "년월은 필수조건 입니다.");
    ica_dtFrom.focus();
    return false;
  }
  $c.sbm.execute($p, sbm_retrieve);
};
//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// function name : f_openPopUp
// function desc : popup
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  var rtnList = new Array();
  switch (disGubun) {
    case 1:
      //거래처
      udc_clnt.setSelectId('retrieveSubsidaryClntList');
      udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , '150,170' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "소속거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};
scwin.f_setColName = function () {
  gr_out.setHeaderValue('header_itemSellAmt1', ds_out.getCellData(0, 'itemSellAmt1ColName')); // ds_out.ColumnValue(1,6);
  gr_out.setHeaderValue('header_itemSellAmt2', ds_out.getCellData(0, 'itemSellAmt2ColName')); // ds_out.ColumnValue(1,8);
  gr_out.setHeaderValue('header_itemSellAmt3', ds_out.getCellData(0, 'itemSellAmt3ColName')); // ds_out.ColumnValue(1,10);
  gr_out.setHeaderValue('header_itemSellAmt4', ds_out.getCellData(0, 'itemSellAmt4ColName')); // ds_out.ColumnValue(1,12);
  gr_out.setHeaderValue('header_itemPchsAmt1', ds_out.getCellData(0, 'itemPchsAmt1ColName')); // ds_out.ColumnValue(1,14);
  gr_out.setHeaderValue('header_itemPchsAmt2', ds_out.getCellData(0, 'itemPchsAmt2ColName')); // ds_out.ColumnValue(1,16);
  gr_out.setHeaderValue('header_itemPchsAmt3', ds_out.getCellData(0, 'itemPchsAmt3ColName')); // ds_out.ColumnValue(1,18);
  gr_out.setHeaderValue('header_itemPchsAmt4', ds_out.getCellData(0, 'itemPchsAmt4ColName')); // ds_out.ColumnValue(1,20);
};
scwin.udc_clnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
};
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_clnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 1);
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.excelDown = function () {
  // cfGridToExcel(gr_out, '손익 실적 현황', '손익 실적 현황.xls', 2+4+8+16);

  const infoArr = [];
  const options = {
    fileName: "손익 실적 현황.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "손익 실적 현황",
    // startRowIndex: 2,
    type: "1",
    // removeColumns: "0,21",
    // hiddenVisible : true,
    useSubTotal: "true",
    useSubTotalData: "true",
    oddRowBackgroundColor: "",
    // excel파일에서 그리드 body의 홀수줄의 배경색
    evenRowBackgroundColor: "#F5FFF5" // excel파일에서 그리드 body의 짝수줄의 배경색
  };
  $c.data.downloadGridViewExcel($p, gr_out, options, infoArr);
};
scwin.sbm_retrieve_submit = function (e) {
  ds_condition.set("adptYm", ica_dtFrom.getValue());
  ds_condition.set("sellClntNo", ed_clntNo.getValue());
};
scwin.sbm_retrieve_submitdone = function (e) {
  var rowcnt = ds_out.getRowCount();
  txt_totalRows.setValue(rowcnt);
  if (rowcnt > 0) {
    scwin.f_setColName();
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {};
scwin.udc_clnt_callBackFunc = function (ref) {
  if (ref != null) {
    $c.gus.cfSetReturnValue($p, ref, ed_clntNo, ed_clntNm);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_portCondtionPart',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_dtFrom',style:'',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_clntNo',validTitle:'',nameId:'ed_clntNm',style:'',id:'udc_clnt',maxlengthCode:'6',validExpCode:'거래처번호',maxlengthName:'100','ev:onviewchangeNameEvent':'scwin.udc_clnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_clnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'손익 실적 현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_out',id:'udc_topGrdBtn',gridDownFn:'scwin.excelDown',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'거래처',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column78',value:'요약',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',style:'',id:'column66',value:'매출구성',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'매입구성',width:'280',colSpan:'4',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column57',value:'코드',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column56',value:'명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column79',value:'매출',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'매입',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'손익',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'header_itemSellAmt1',value:'매출1',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'header_itemSellAmt2',value:'매출2',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'header_itemSellAmt3',value:'매출3',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'header_itemSellAmt4',value:'매출4',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'header_itemPchsAmt1',value:'매입1',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'header_itemPchsAmt2',value:'매입2',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'header_itemPchsAmt3',value:'매입3',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'header_itemPchsAmt4',value:'매입4 ',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sellClntNo',inputType:'text',style:'',value:'',width:'70',colMerge:'true',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellClntNm',inputType:'text',style:'',value:'',width:'70',colMerge:'true',upperColumn:'sellClntNo',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sellAmt',value:'',displayMode:'label',displayFormat:'#,###[floor]',dataType:'number',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsAmt',value:'',displayMode:'label',displayFormat:'#,###[floor]',dataType:'number',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'profit',value:'',displayMode:'label',displayFormat:'#,###[floor]',dataType:'number',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'itemSellAmt1',value:'',displayMode:'label',displayFormat:'#,###[floor]',dataType:'number',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'itemSellAmt2',value:'',displayMode:'label',displayFormat:'#,###[floor]',dataType:'number',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'itemSellAmt3',value:'',displayMode:'label',displayFormat:'#,###[floor]',dataType:'number',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'itemSellAmt4',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,###[floor]',dataType:'number',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'itemPchsAmt1',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,###[floor]',dataType:'number',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'itemPchsAmt2',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,###[floor]',dataType:'number',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'itemPchsAmt3',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,###[floor]',dataType:'number',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'itemPchsAmt4',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,###[floor]',dataType:'number',textAlign:'right',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column81',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'sum(\'sellAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'sum(\'pchsAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column73',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'sum(\'profit\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'sum(\'itemSellAmt1\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column65',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'sum(\'itemSellAmt2\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column61',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'sum(\'itemSellAmt3\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'sum(\'itemSellAmt4\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'sum(\'itemPchsAmt1\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column44',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'sum(\'itemPchsAmt2\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column43',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'sum(\'itemPchsAmt3\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'sum(\'itemPchsAmt4\')',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})