/*amd /ui/ds/op/wrkrslts/yardwrkrslts/op_302_01_09b.xml 20598 41f37069b2538577971ee8e4ea5e92bd1e1d22246a54b4443f13c17fbfe443d8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ioClsCd',name:'입출고구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ioTermFrom',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ioTermTo',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ioWrkPlCd',name:'입출고작업장코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'ioWrkPlNm',name:'입출고작업장명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'inSelfClsCd',name:'inSelfClsCd',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'inIoDt',name:'inIoDt',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'inRsltsQty',name:'inRsltsQty',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'inRsltsWt',name:'inRsltsWt',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'inRsltsCbm',name:'inRsltsCbm',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'outSelfClsCd',name:'outSelfClsCd',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'outIoDt',name:'outIoDt',dataType:'text',defaultValue:'',length:'9'}},{T:1,N:'w2:column',A:{id:'outRsltsQty',name:'outRsltsQty',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'outRsltsWt',name:'outRsltsWt',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'outRsltsCbm',name:'outRsltsCbm',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'remainQty',name:'remainQty',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'remainWt',name:'remainWt',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'remainCbm',name:'remainCbm',dataType:'number',defaultValue:'0',length:'38'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveDailyInoutPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.onpageload = function () {};

/**
 * udc onload
 */
scwin.onUdcCompleted = function () {
  // 초기값 설정
  lc_ioClsCd.setValue("I");
  udc_fromToCalendar.setInitDate(scwin.strCurDate, scwin.strCurDate);

  // style
  ed_wrkPlCd.setStyle("text-transform", "uppercase");
};

/**
 * 새로고침
 */
scwin.f_FieldClear = function () {
  ds_retrieve.setEmptyValue();

  // 초기값 설정
  lc_ioClsCd.setValue("I");
  udc_fromToCalendar.setInitDate(scwin.strCurDate, scwin.strCurDate);
};

/**
 * 조회
 */
scwin.f_Retrieve = function (e) {
  const {
    wrkPlCd,
    wrkPlNm,
    ioTermFrom,
    ioTermTo
  } = ds_retrieve.getJSON();
  if ($c.util.isEmpty($p, wrkPlCd)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업장"]).then(() => {
      ed_wrkPlCd.focus();
    });
    return;
  }
  if ($c.util.isEmpty($p, wrkPlNm)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업장"]).then(() => {
      ed_wrkPlNm.focus();
    });
    return;
  }
  if ($c.util.isEmpty($p, ioTermFrom)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업일자"]).then(() => {
      ed_ioTermFrom.focus();
    });
    return;
  }
  if ($c.util.isEmpty($p, ioTermTo)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업일자"]).then(() => {
      ed_ioTermTo.focus();
    });
    return;
  }
  if (WebSquare.util.parseFloat(ioTermFrom) > WebSquare.util.parseFloat(ioTermTo)) {
    $c.win.alert($p, "시작일자가 종료일자 이전이여야 합니다.").then(() => {
      ed_ioTermFrom.focus();
    });
    return false;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

/**
 * 조회 callback
 */
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_results.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]); //alert("조회된 데이터가 없습니다.");
  }
  gr_results.setFocusedCell(0, "ioWrkPlCd");
  totalRows.setValue(ds_results.getRowCount());
};

/**
 * 작업장 팝업 클릭
 */
scwin.udc_comCode_onclickEvent = function (e) {
  scwin.f_PopUp(ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), "F", "F");
};

/**
 * 작업장 코드
 */
scwin.udc_comCode_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_wrkPlNm.setValue("");
    return;
  }
  if (oldValue != newValue) {
    scwin.f_PopUp(newValue, "", "T", "F");
  }
};

/**
 * 작업장 코드명
 */
scwin.udc_comCode_onviewchangeNameEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_wrkPlCd.setValue("");
    return;
  }
  if (oldValue != newValue) {
    scwin.f_PopUp("", newValue, "T", "F");
  }
};

/**
 * 작업장 udc 팝업 호출
 */
scwin.f_PopUp = function (pCode, pName, pOneResultShowYn, pSearchAll) {
  udc_comCode.cfCommonPopUp(scwin.udc_comCode_callback, pCode, pName, pOneResultShowYn // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , ",,,5" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , pSearchAll // 전체검색허용여부	("F")
  , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
  , null);
};

/**
 * 작업장 udc 팝업 호출
 */
scwin.udc_comCode_callback = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_wrkPlCd.setValue(ret[0]);
    ed_wrkPlNm.setValue(ret[1]);
  } else {
    ed_wrkPlCd.setValue("");
    ed_wrkPlNm.setValue("");
  }
};

/**
 * 출고일자 format
 */
scwin.format_outIoDt = function (val) {
  let outIoDt;
  if (val == "") {
    outIoDt = val;
  } else if (val == "OUT_TOTAL") {
    outIoDt = val;
  } else if ($c.num.isNumber($p, val)) {
    outIoDt = $c.date.formatDateTime($p, val, "yyyy/MM/dd");
  }
  return outIoDt;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tb_searchCondition',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',codeId:'ed_wrkPlCd',id:'udc_comCode',mandatoryCode:'true',maxlengthCode:'6',nameId:'ed_wrkPlNm',popupGridHeadTitle:'작업장코드,작업장명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupID:'',popupTitle:'장치장,장치코드,장치명',refDataCollection:'ds_retrieve',selectID:'retrieveWrkPlInfo',style:'',code:'wrkPlCd',name:'wrkPlNm','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCode_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_onviewchangeNameEvent',maxByteLengthName:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기준',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_ioClsCd',style:'width:150px;',submenuSize:'auto',ref:'data:ds_retrieve.ioClsCd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'입고일자기준'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'입출고일자기준'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'O'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입출고기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'ds_retrieve',refEdDt:'ioTermTo',refStDt:'ioTermFrom',style:'',edFromId:'ed_ioTermFrom',edToId:'ed_ioTermTo',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'작업일자',titleTo:'작업일자'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'일일 입출고 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_section1',style:'',gridID:'gr_results',gridUpYn:'N',templateYn:'N',grdDownOpts:'{"fileName":"일일입출고현황조회.xlsx", "sheetName":"일일입출고현황조회"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',gridName:'일일입출고현황조회'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'작업장코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'작업장명',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'품명코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'품명',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'모선관리번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'BL',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'입고자가구분',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'일고일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'입고수량',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'입고중량',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'입고CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column46',value:'출고자가구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'입출고차량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'출고일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'출고수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',value:'출고중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'출고CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',value:'잔여수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'잔여중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'잔여CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ioWrkPlCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ioWrkPlNm',inputType:'text',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'180',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inSelfClsCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inIoDt',inputType:'calendar',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inRsltsQty',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inRsltsWt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inRsltsCbm',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'outSelfClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'outIoDt',displayMode:'label',displayFormatter:'scwin.format_outIoDt'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'outRsltsQty',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'outRsltsWt',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'outRsltsCbm',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'remainQty',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'remainWt',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'remainCbm',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'ft_inRsltsQty',displayMode:'label',expression:'sum(\'inRsltsQty\')',textAlign:'right',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'ft_inRsltsWt',displayMode:'label',expression:'sum(\'inRsltsWt\')',textAlign:'right',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'ft_inRsltsCbm',displayMode:'label',expression:'sum(\'inRsltsCbm\')',textAlign:'right',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column48',displayMode:'label',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',displayMode:'label',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'ft_outRsltsQty',displayMode:'label',expression:'SUMIF(\'outRsltsQty\', \'!=OUT_TOTAL\', \'outIoDt\')',textAlign:'right',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'ft_outRsltsWt',displayMode:'label',expression:'SUMIF(\'outRsltsWt\', \'!=OUT_TOTAL\', \'outIoDt\')',textAlign:'right',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'ft_outRsltsCbm',displayMode:'label',expression:'SUMIF(\'outRsltsCbm\', \'!=OUT_TOTAL\', \'outIoDt\')',textAlign:'right',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'ft_remainQty',displayMode:'label',expression:'sum(\'remainQty\')',textAlign:'right',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'ft_remainWt',displayMode:'label',expression:'sum(\'remainWt\')',textAlign:'right',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'ft_remainCbm',displayMode:'label',expression:'sum(\'remainCbm\')',textAlign:'right',displayFormat:'#,###',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})