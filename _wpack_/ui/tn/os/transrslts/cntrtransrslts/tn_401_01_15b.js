/*amd /ui/tn/os/transrslts/cntrtransrslts/tn_401_01_15b.xml 19146 b3790088e4d11d8029234630359dbd198d4570b7afbadbf3a07eeb3a754195fa */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'rsltDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'loBranchCd',name:'배차지사',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'소속지사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranNm',name:'소속지사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehCntPda',name:'스마트폰장착',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehCntNoPda',name:'스마트폰미착',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehTotCnt',name:'총대수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehPdaRate',name:'장착율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indictCntPda',name:'스마트폰지시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indictCntNoPda',name:'스마트미지시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indictTotCnt',name:'총건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indictPdaRate',name:'스마트폰활용율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnPda',name:'배차확인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnPdaRate',name:'확인률',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptRepo',name:'출발보고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptRepoRate',name:'출발보고율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvRepo',name:'도착보고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvRepoRate',name:'도착보고율',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.os.transrslts.cntrtransrslts.RetreiveVehclUsePrscondCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.vCurDate = $c.date.getServerDateTime($p);
  scwin.loUpperLobranCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "loUpperLobranCd")) ? "" : $c.data.getMemInfo($p, "loUpperLobranCd");

  //공통코드 조회
  const comboOptions = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "acb_srchLobranCd"
  }];
  $c.data.setGauceUtil($p, comboOptions);
  ica_endDt.setValue(scwin.vCurDate);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  console.log("scwin.f_fieldClear");
  $c.gus.cfInitObjects($p, tbl_search);
  ica_endDt.setValue(scwin.vCurDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  console.log("scwin.f_retrieve");
  let chkVal = await $c.gus.cfValidate($p, [tbl_search]);
  if (!chkVal) return;
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 스마트폰활용현황 상세화면 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_retrieveDetail = function (arg1, arg2) {
  var data = {
    assgnLobranCd: arg1,
    endDt: arg2
  };
  var opts = {
    id: "tn_401_01_15p",
    popupName: "스마트폰 활용현황 상세화면",
    type: "browserPopup",
    title: "스마트폰활용상세현황",
    width: 1200,
    height: 600,
    resizable: true
  };
  $c.win.openPopup($p, "/ui/tn/os/transrslts/cntrtransrslts/tn_401_01_15p.xml", opts, data);
};

//-------------------------------------------------------------------------
// Formatter > 강제 값 설정
//-------------------------------------------------------------------------
scwin.f_displayFormatter = function (data) {
  if (ds_master.getTotalRow() == 0) return "";else if (data == "NaN" || data == "0") return "0";else {
    if (WebSquare.util.isInteger(data)) data = data + ".00";else data = String($c.num.round($p, data, 3));
    let chk = data.split(".");
    if (chk[1].length == 3) data = chk[0] + "." + chk[1].substring(0, 2);
    return data;
  }
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_master.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
    return;
  }
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  console.log("scwin.btn_clear_onclick");
  scwin.f_fieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  console.log("scwin.btn_search_onclick");
  scwin.f_retrieve();
};

//그리드 더블 클릭 > 팝업 호출 
scwin.gr_master_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex < 0) return;
  if (columnId == "indictTotCnt") {
    scwin.f_retrieveDetail(ds_master.getCellData(rowIndex, "assgnLobranCd"), ica_endDt.getValue());
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_endDt',pickerType:'dynamic',style:'',ref:'data:dma_search.rsltDt',mandatory:'true',title:'실적일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차지사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_srchLobranCd',search:'start',style:'width:200px;',submenuSize:'auto',searchTarget:'value',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.loBranchCd',visibleRowNum:'20'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'차량운영 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_master',grdDownOpts:'{"fileName" : "스마트폰활용현황.xlsx", "sheetName" : "스마트폰활용현황", "type":"4+8+16", "useSubTotal":"true", "useSubTotalData" : "true"}',gridDownUserAuth:'X',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'15',visibleRowNumFix:'true',dataDragDrop:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true','ev:oncelldblclick':'scwin.gr_master_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'소속지사코드',width:'150',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'소속지사명',width:'100',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'장착현황',width:'350',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'배차지시현황',width:'280',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'490',inputType:'text',style:'',id:'column43',value:'응답현황',displayMode:'label',colSpan:'6',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column58',value:'스마트폰장착',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column57',value:'스마트폰미착',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column56',value:'총대수',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'장착율(%)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column54',value:'스마트폰지시',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column53',value:'스마트미지시',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'총건수',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column51',value:'스마트폰활용율',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'배차확인',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'확인률',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'출발보고',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'출발보고율',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'도착보고',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'도착보고율',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnLobranCd',inputType:'text',style:'',value:'',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnLobranNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehCntPda',inputType:'text',style:'',value:'',width:'120',dataType:'number',excelCellType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehCntNoPda',inputType:'text',style:'',value:'',width:'120',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehTotCnt',inputType:'text',style:'',value:'',width:'70',excelCellType:'number',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vehPdaRate',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0.#0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'indictCntPda',inputType:'text',style:'',value:'',width:'120',excelCellType:'number',dataType:'number',displayFormatter:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'indictCntNoPda',inputType:'text',style:'',value:'',width:'120',excelCellType:'number',displayFormatter:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'indictTotCnt',inputType:'link',style:'',value:'',width:'70',class:'linktype',excelCellType:'number',dataType:'number',displayFormatter:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'indictPdaRate',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,##0.#0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'returnPda',value:'',displayMode:'label',excelCellType:'number',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'returnPdaRate',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0.#0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptRepo',value:'',displayMode:'label',excelCellType:'number',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptRepoRate',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0.#0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvRepo',value:'',displayMode:'label',excelCellType:'number',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvRepoRate',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0.#0',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'vehCntPdaSum',value:'',displayMode:'label',expression:'sum(\'vehCntPda\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column31',value:'',displayMode:'label',expression:'sum(\'vehCntNoPda\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'vehTotCntSum',value:'',displayMode:'label',expression:'sum(\'vehTotCnt\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column71',value:'',displayMode:'label',expression:'Number(sum(\'vehCntPda\')/sum(\'vehTotCnt\')*100)',dataType:'number',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column34',value:'',displayMode:'label',expression:'sum(\'indictCntPda\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column35',value:'',displayMode:'label',expression:'sum(\'indictCntNoPda\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column36',value:'',displayMode:'label',expression:'sum(\'indictTotCnt\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column37',value:'',displayMode:'label',dataType:'number',expression:'Number(sum(\'indictCntPda\')/sum(\'indictTotCnt\')*100)',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column38',value:'',displayMode:'label',expression:'sum(\'returnPda\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column39',value:'',displayMode:'label',dataType:'number',expression:'Number(sum(\'returnPda\')/sum(\'indictCntPda\')*100)',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column40',value:'',displayMode:'label',expression:'sum(\'dptRepo\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',dataType:'number',expression:'Number(sum(\'dptRepo\')/sum(\'indictCntPda\')*100)',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',expression:'sum(\'arvRepo\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column43',value:'',displayMode:'label',dataType:'number',expression:'Number(sum(\'arvRepo\')/sum(\'indictCntPda\')*100)',displayFormat:'#,##0.#0',displayFormatter:'scwin.f_displayFormatter'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spn_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})