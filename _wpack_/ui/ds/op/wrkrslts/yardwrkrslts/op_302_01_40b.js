/*amd /ui/ds/op/wrkrslts/yardwrkrslts/op_302_01_40b.xml 19298 9edddf736eeae52a17a30a559d61f77c5f9cd31f49402fe3f09c4a3f47a17a51 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'strDt',name:'반출시작일자1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrOutDeclarInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'',dataType:''}},{T:1,N:'w2:column',A:{id:'mrn',name:'',dataType:''}},{T:1,N:'w2:column',A:{id:'msn',name:'',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hsn',name:'',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crryinoutDeclarNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutPatternCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutPatternNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'divsCrryinoutClsCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'divsCrryinoutClsNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crryinoutBasisNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'divsCrryinoutDeg',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ntcPlNmCmpy',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'',dataType:''}},{T:1,N:'w2:column',A:{id:'inCrryinoutCnt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inCrryinoutWt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outCrryinoutCnt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outrryinoutWt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutCnt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crryinoutWt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'',dataType:''}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDtm',name:'',dataType:''}},{T:1,N:'w2:column',A:{id:'replyStsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'replyStsNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubun',name:'',dataType:''}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveBondzoneCrryoutStockListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cntrOutDeclarInfo","key":"OUT_DS1"},{"id":"dma_condition","key":"IN_DS1"}]',target:'data:json,{"id":"ds_cntrOutDeclarInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.toDay = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.addRowYn = "F";
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let chkwrkplcd = ed_wrkPlCd.getValue();
  if ($c.gus.cfIsNull($p, chkwrkplcd)) {
    await $c.win.alert($p, "작업장 코드는 필수 입력 항목입니다.");
    ed_wrkPlCd.focus();
    return;
  }
  // 검색조건 필수 입력 체크
  if (!$c.gus.cfValidate($p, [tb_searchCondition])) {
    return;
  }
  $c.sbm.execute($p, sbm_Retrieve);
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition, null);
  ed_strDt.setValue(scwin.toDay);
};
scwin.onUdcCompleted = function () {
  ed_strDt.setValue(scwin.toDay);
  ed_wrkPlCd.focus();
};

///////////////////////////////////////////// S U B M I S S I O N    E V E N T /////////////////////////////////////////
scwin.sbm_Retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    //$c.gus.cfShowError(sbm_Retrieve);
    return;
  }
  if (ds_cntrOutDeclarInfo.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
  totalRows.setValue(ds_cntrOutDeclarInfo.getRowCount());
};
scwin.udc_comCode_onblurCodeEvent = function (e) {
  if (ed_wrkPlCd.getValue() === "") {
    ed_wrkPlNm.setValue("");
  } else {
    udc_comCode.cfCommonPopUp(scwin.udc_comCode_callBackFunc, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), "T" // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
    , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서
    , null // 보여주는 각 컬럼들의 폭
    , null // 컬럼중에서 숨기는 컬럼 지정
    , "F" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의 사용자 정의 폭
    , null // POP-UP뛰을때 원도우의 사용자 정의 높이
    , null // 윈도우 위치 Y좌표
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부 ("F")
    , "T" // 전체검색허용여부 ("F")
    , "작업장,작업장코드,작업장명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
};
scwin.udc_comCode_onclickEvent = function (e) {
  udc_comCode.cfCommonPopUp(scwin.udc_comCode_callBackFunc, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), "F" // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , "F" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  , null // POP-UP뛰을때 원도우의 사용자 정의 높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부 ("F")
  , "T" // 전체검색허용여부 ("F")
  , "작업장,작업장코드,작업장명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};
scwin.udc_comCode_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_wrkPlCd, ed_wrkPlNm);
};
scwin.udc_comCode_onviewchangeNameEvent = function (info) {
  if (ed_wrkPlNm.getValue() === "") {
    ed_wrkPlCd.setValue("");
  } else {
    udc_comCode.cfCommonPopUp(scwin.udc_comCode_callBackFunc, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), "T" // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
    , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서
    , null // 보여주는 각 컬럼들의 폭
    , null // 컬럼중에서 숨기는 컬럼 지정
    , "F" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의 사용자 정의 폭
    , null // POP-UP뛰을때 원도우의 사용자 정의 높이
    , null // 윈도우 위치 Y좌표
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부 ("F")
    , "T" // 전체검색허용여부 ("F")
    , "작업장,작업장코드,작업장명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
};

//{"fileName":"수입화물재고현황(반출기준)","type":"4+8+16"}
scwin.f_Excel = function () {
  const options = {
    fileName: "수입화물재고현황(반출기준).xlsx",
    sheetName: "수입화물재고현황(반출기준)",
    type: "4+8+16"
  };
  $c.data.downloadGridViewExcel($p, gr_cntrOutDeclarInfo, options);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tb_searchCondition',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',popupID:'',popupTitle:'',selectID:'retrieveWrkPlInfo',style:'',id:'udc_comCode',mandatoryCode:'true',btnId:'btn_wrkPlCd',refDataCollection:'dma_condition',code:'wrkPlCd',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',UpperFlagCode:'1',objTypeName:'Data','ev:onblurCodeEvent':'scwin.udc_comCode_onblurCodeEvent','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_strDt',style:'',ref:'data:dma_condition.strDt'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'수입화물재고현황(반출기준)',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',userAuth:'R',gridUpYn:'N',gridID:'gr_cntrOutDeclarInfo',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_cntrOutDeclarInfo',id:'gr_cntrOutDeclarInfo',style:'',visibleRowNum:'17',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'MRN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'MSN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'HSN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column49',value:'신고번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column47',value:'반입유형코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column45',value:'반입유형',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column43',value:'분할구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'분할구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'반입일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'B/L번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'반입근거번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'차수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'화주명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column29',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'반입수량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'반입중량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'반출수량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'반출중량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'재고수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'재고중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'모선명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'입항일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'구분일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column61',value:'비고',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkPlCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mrn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'msn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'hsn',value:'',displayMode:'label',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'crryinoutDeclarNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'crryinoutPatternCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'crryinoutPatternNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'divsCrryinoutClsCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'divsCrryinoutClsNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'crryinoutDtm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'blNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'crryinoutBasisNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'divsCrryinoutDeg',value:'',displayMode:'label',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ntcPlNmCmpy',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'commNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inCrryinoutCnt',value:'',displayMode:'label',hidden:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inCrryinoutWt',value:'',displayMode:'label',hidden:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outCrryinoutCnt',value:'',displayMode:'label',hidden:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outrryinoutWt',value:'',displayMode:'label',hidden:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crryinoutCnt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crryinoutWt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vsslNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arrvlportDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rcvDtm',value:'',displayMode:'label',displayFormat:'##/##/##/##:##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'replyStsCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'replyStsNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'gubun',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''}}]}]}]}]}]}]}]})