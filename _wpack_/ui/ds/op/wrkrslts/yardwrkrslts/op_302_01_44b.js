/*amd /ui/ds/op/wrkrslts/yardwrkrslts/op_302_01_44b.xml 18118 a8be0cb299ee7ffec021a9dac7eb82c740ac6f7cfebf24482bfac3ae9ac980cc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ioTermFrom',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ioTermTo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntCommCd',name:'화주품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'화주오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntOdrNo',name:'화주오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'작업단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsQty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'중량',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'smQty',name:'SM수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveMonthlyInOutCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.onpageload = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition);
};
scwin.onUdcCompleted = function () {
  ed_ioTermFrom.setValue(scwin.strCurDate);
  ed_ioTermTo.setValue(scwin.strCurDate);
};

//-------------------------------------------------------------------------
// 조회 조건 Reset
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition);
  ed_ioTermFrom.setValue(scwin.strCurDate);
  ed_ioTermTo.setValue(scwin.strCurDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let rtn = await $c.gus.cfValidate($p, [tb_searchCondition]);
  if (!rtn) {
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

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
// 팝업
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  if (disGubun == 1) {
    // 작업장
    // Select ID : retrieveWrkPlInfo
    udc_comCodeWrkpl.cfCommonPopUp(scwin.udc_comCodeWrkpl_callBackFunc, pCode // 화면에서의 ??? Code Element의    Value,
    , pName // 화면에서의 ??? Name Element의    Value,
    , pClose // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened) "T", //pClose
    , null // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서    
    , null // 보여주는 각 컬럼들의 폭  
    , null // 컬럼중에서 숨기는    컬럼 지정   
    , ',,,5' // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의    사용자 정의 폭
    , null // POP-UP뛰을때 우도우의    사용자 정의 높이    
    , null // 윈도우 위치 Y좌표    
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부 ("F") 
    , pAllSearch // 전체검색허용여부 ("F") "T", //pAllSearch
    , "작업장,작업장코드,작업장명" // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  } else if (disGubun == 2) {
    // 품명
    // Select ID : retrieveCommInfo
    udc_comCodeComm.cfCommonPopUp(scwin.udc_comCodeComm_callBackFunc, pCode, pName, pClose, null, null, null, null, "2,4,,,ZZZZ" // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
    , null, null, null, null, null, pAllSearch, null, "품명조회,품명코드,품명" // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
};

///////////////////////////////////////////// C O M P O N E N T   E V E N T /////////////////////////////////////////

///////////////////////////////////////////// U D C   E V E N T /////////////////////////////////////////

//작업장 클릭시 팝업
scwin.udc_comCodeWrkpl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), "F", "F");
};

// 작업장 팝업 콜백함수
scwin.udc_comCodeWrkpl_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_wrkPlCd, ed_wrkPlNm);
};

// 작업장 코드 FocusOut
scwin.udc_comCodeWrkpl_onblurCodeEvent = function () {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlNm, 1, true);
};

// 작업장명 onChange
scwin.udc_comCodeWrkpl_onviewchangeNameEvent = function () {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 1, false);
};

//품명 클릭시 팝업
scwin.udc_comCodeComm_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_con_commCd.getValue(), ed_con_commNm.getValue(), "T", "T");
};

// 품명 팝업 콜백함수
scwin.udc_comCodeComm_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_con_commCd, ed_con_commNm);
};

// 품명 코드 FocusOut
scwin.udc_comCodeComm_onblurCodeEvent = function () {
  scwin.f_chkOpenCommonPopUp(ed_con_commCd, ed_con_commNm, 2, true);
};

// 품명 Name onChange
scwin.udc_comCodeComm_onviewchangeNameEvent = function () {
  scwin.f_chkOpenCommonPopUp(ed_con_commNm, ed_con_commCd, 2, false);
};

///////////////////////////////////////////// S U B M I S S I O N    E V E N T /////////////////////////////////////////

//조회 DONE
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_results.getRowCount() == 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_002)); // 조회결과가 존재하지 않습니다.
  }
  totalRows.setValue(ds_results.getRowCount());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tb_searchCondition',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_comCodeWrkpl',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',selectID:'retrieveWrkPlInfo',refDataCollection:'dma_retrieve',code:'wrkPlCd',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',maxlengthCode:'6',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true',mandatoryName:'true','ev:onclickEvent':'scwin.udc_comCodeWrkpl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeWrkpl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeWrkpl_onviewchangeNameEvent',maxlengthName:'50',validTitle:'작업장'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입출고기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendarTerm',refDataMap:'dma_retrieve',refEdDt:'ioTermTo',refStDt:'ioTermFrom',style:'',edFromId:'ed_ioTermFrom',edToId:'ed_ioTermTo',objTypeFrom:'Data',objTypeTo:'Data',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_comCodeComm',codeId:'ed_con_commCd',nameId:'ed_con_commNm',selectID:'retrieveCommInfo',refDataCollection:'dma_retrieve',code:'commCd',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',maxlengthCode:'8',maxlengthName:'50',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_comCodeComm_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeComm_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeComm_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'월간 입출고 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',grdDownOpts:'{"fileName":"월간 입출고 현황.xlsx","sheetName": "월간 입출고 현황","type":"4+8+16"}',gridID:'gr_results',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',visibleRowNum:'16',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'작업장<br/>코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'작업장명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'화주<br/>품명코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'품명코드',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'품명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'작업장',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column41',value:'화주<br/>오더종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column39',value:'화주<br/>오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column37',value:'작업일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column35',value:'작업단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column33',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column31',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column29',value:'SM수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'105',inputType:'text',id:'column27',value:'등록일시',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntCommCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizLongCd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkPatternCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'clntOdrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkStDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'qtyUnitCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rsltsQty',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rsltsWt',displayMode:'label',textAlign:'right',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'smQty',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'105',inputType:'text',id:'regDtm',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column62',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column61',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column59',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column58',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column56',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column55',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column53',displayMode:'label',textAlign:'right',expression:'SUM(\'rsltsQty\') == null || SUM(\'rsltsQty\') === \'\' ? \'\' : SUM(\'rsltsQty\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column52',displayMode:'label',textAlign:'right',expression:'SUM(\'rsltsWt\') == null || SUM(\'rsltsWt\') === \'\' ? \'\' : SUM(\'rsltsWt\')',displayFormat:'#,##0.000',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column51',displayMode:'label',textAlign:'right',expression:'SUM(\'smQty\') == null || SUM(\'smQty\') === \'\' ? \'\' : SUM(\'smQty\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'105',inputType:'text',id:'column50',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})