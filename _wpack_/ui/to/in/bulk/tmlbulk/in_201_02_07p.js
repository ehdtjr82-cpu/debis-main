/*amd /ui/to/in/bulk/tmlbulk/in_201_02_07p.xml 12027 85866150ffb16dc2e5eb03324d9b3a7872e59f015979b1d8aa522dea0a031959 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_List1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rsltsDtHhmmss',name:'처리시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlAdmitckCd',name:'출입증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fulvehclWt',name:'만차중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mtvehclWt',name:'공차중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'실적중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkIndictNo',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_queryCondition',action:'/to.in.bulk.tmlbulk.RetrieveBulkVehclWrkRsltsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition", "key":"IN_DS1"}, {"id":"ds_List1", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_List1","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_queryCondition_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//---------------------------------------------------------
// 전역변수
//---------------------------------------------------------   
scwin.onpageload = function () {
  scwin.wrkIndictNo = $c.data.getParameter($p, "wrkIndictNo");
  ds_condition.set("wrkIndictNo", scwin.wrkIndictNo);
  scwin.f_Retrieve();
};

//---------------------------------------------------------
// UDC
//---------------------------------------------------------    
scwin.onUdcCompleted = function () {
  $c.data.setPopupTitle($p, "실적 상세 조회");
};

//---------------------------------------------------------
// 사용자 함수
//---------------------------------------------------------   
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_queryCondition);
};
scwin.f_RunExcel = async function () {
  if (ds_List1.getTotalRow() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  //  {"fileName":"상세실적목록.xls","sheetName":"상세 실적 목록", "type":"4+8+16"}
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 12,
    text: "상세 실적 목록",
    textAlign: "center"
    // , fontSize    : "12pt"
    ,
    fontName: "돋움체",
    color: "black",
    fontWeight: "",
    drawBorder: "false",
    borderColor: "",
    borderWidth: "",
    wordWrap: "true",
    bgColor: "#ffffff"
  }];
  if (cfrm) $c.data.downloadGridViewExcel($p, gr_List1, {
    fileName: "상세실적목록",
    sheetName: "상세 실적 목록",
    type: "4+8+16",
    startRowIndex: 2
  }, infoArr);
};
//---------------------------------------------------------
// 컴포넌트 이벤트
//---------------------------------------------------------   
scwin.sbm_queryCondition_submitdone = function (e) {
  if (ds_List1.getTotalRow() == 0) {
    $c.gus.cfAlertMsg($p, "조회결과가 없습니다.");
  }
  ed_totalRow.setValue(ds_List1.getTotalRow());
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'실적 상세 현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_List1',gridUpYn:'N',btnUser:'Y',gridDownFn:'scwin.f_RunExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix ',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_List1',id:'gr_List1',style:'',visibleRowNum:'13',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'처리시간',width:'170'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'출입증코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'화주코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'화주명',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'작업장코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column49',value:'작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column46',value:'선박코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column43',value:'선박명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column40',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'만차중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',value:'공차중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'실적중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',value:'본선관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'작업지시번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsDtHhmmss',inputType:'text',width:'170',displayFormat:'####/##/## ##:##:## ###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tmlAdmitckCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100',show:'false',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlCd',inputType:'text',width:'120',show:'false',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'wrkPlNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vsslCd',displayMode:'label',show:'false',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'vsslNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rsltsQty',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fulvehclWt',displayMode:'label',dataType:'number',displayFormat:'#,###.#0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mtvehclWt',displayMode:'label',dataType:'number',displayFormat:'#,###.#0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rsltsWt',displayMode:'label',dataType:'number',displayFormat:'#,###.#0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkIndictNo',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column42',displayMode:'label',value:'0',dataType:'number',displayFormat:'#,###',expression:'SUM(\'rsltsQty\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column39',displayMode:'label',value:'0.00',dataType:'number',displayFormat:'#,###.#0',expression:'SUM(\'fulvehclWt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column36',displayMode:'label',value:'0.00',dataType:'number',displayFormat:'#,###.#0',expression:'SUM(\'mtvehclWt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column33',displayMode:'label',value:'0.00',dataType:'number',displayFormat:'#,###.#0',expression:'SUM(\'rsltsWt\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})