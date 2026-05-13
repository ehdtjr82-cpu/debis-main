/*amd /ui/ds/fs/consignmgnt/fs_401_01_10b.xml 20948 c7aa23183cb3fb839cfdc1b8693b03c432a900221b506045601b28b99bc71091 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'gubun',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtDtMm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'assgnLobranCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'posnClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'insrkndCd',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_consignment',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrStDt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrEndDt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrLimitAmt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ramt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retrvAmt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rate',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'name13',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.consignmgnt.consignmgntcadjm.RetrieveConsignmentEquipInsuranceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_consignment","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_consignment","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*년월 setting*/
scwin.strYm = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환

scwin.memJson = $c.data.getMemInfo($p);
scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); //상위물류점소코드
scwin.loUpperLobranNm = $c.data.getMemInfo($p, "loUpperLobranNm"); //상위물류점소 

if (scwin.loUpperLobranCd == null) scwin.loUpperLobranCd = "";

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.f_SetDefaultData();

  // 달력 버튼 포커스 방지
  setTimeout(function () {
    document.querySelectorAll('.w2inputCalendar_div_img button').forEach(function (btn) {
      btn.tabIndex = -1;
    });
  }, 0);

  //보험종류 공통코드 적용
  const codeOptions = [{
    grpCd: "OP107",
    compID: "lux_insrkndCd"
  } // 소속지사
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// function name : f_SetDefaultData
// function desc : Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  ed_ctrtDtMm.setValue(scwin.strYm); //기준월

  //소속지사 
  $c.sbm.execute($p, sbm_lobran);
};

//공통콤보 callback
scwin.sbm_lobran_submitdone = function () {
  // ds_lobran.insertRow(0);
  // ds_lobran.setCellData(0,"lobranCd" ,"");
  // ds_lobran.setCellData(0,"lobranNm" ,"전체");

  lc_lobran.setValue(scwin.loUpperLobranCd);
  lc_lobran.focus();
};

//-------------------------------------------------------------------------
// function name : f_InitObjects
// function desc : 검색조건 Field Clear함.
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = async function (e) {
  await $c.gus.cfInitObjects($p, tb_condition);
  scwin.f_SetDefaultData();
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = async function (e) {
  let chkValid = await $c.gus.cfValidate($p, [ed_ctrtDtMm]);
  if (!chkValid) return;

  //dataMap setting
  dma_queryCondition.set("gubun", rd_gubun.getValue()); // 조회구분
  dma_queryCondition.set("ctrtDtMm", ed_ctrtDtMm.getValue()); // 기준년월
  dma_queryCondition.set("assgnLobranCd", lc_lobran.getValue()); // 물류점소
  dma_queryCondition.set("posnClsCd", lc_posnClsCd.getValue()); // 업체구분
  dma_queryCondition.set("insrkndCd", lux_insrkndCd.getValue()); // 보험종류

  $c.sbm.execute($p, sbm_retrieve);
};

//조회callback처리
scwin.sbm_retrieve_submitdone = function () {
  let nRow = ds_consignment.getRowCount();
  if (nRow == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
  } else {
    total.setValue(nRow);
  }
};

//-------------------------------------------------------------------------
// GRID에서 선택된 오더 세부정보 확인 : 해당 오더유형별 페이지로 이동
//-------------------------------------------------------------------------
scwin.gr_consignment_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  var paramJson = {
    v_vehclNo: ds_consignment.getCellData(rowIndex, "vehclNo"),
    v_assgnLobranCd: ds_consignment.getCellData(rowIndex, "assgnLobranCd"),
    type: "retrieve"
  };
  $c.win.openMenu($p, "보험장비등록", "/ui/ds/op/rscconfirm/transrscconfirm/op_101_01_16b.xml", "op_101_01_16b.xml", paramJson, {
    openAction: "exist"
  });
};
scwin.excelDw_gr_consignment = async function () {
  if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
    let grdObj = gr_consignment;
    let options = {
      fileName: "위수탁(지입) 장비보험료 현황.xlsx",
      sheetName: "위수탁 장비보험내역",
      useDataFormat: "true",
      useStyle: "true"
    };
    let infoArr = {};
    // AS-IS: 조회 결과 없어도 엑셀 다운로드
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};
scwin.setInsrDate = function (value, formattedValue, rowIdx, colIdx) {
  // getCellData를 통해 실제 값을 가져옴
  var start = ds_consignment.getCellData(rowIdx, "insrStDt");
  var end = ds_consignment.getCellData(rowIdx, "insrEndDt");

  // 두 값이 모두 없을 경우 빈 값 처리
  if (!start && !end) return "";

  // 시작값이 있을 때만 "~"를 붙여서 반환
  return start ? start + " ~ " + end : end;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_gubun',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'0',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'월별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'M'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_ctrtDtMm',style:'',mandatory:'true',objType:'data',displayFormat:'yyyy/MM',title:'기준월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속지사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lobran',search:'start',style:'width: 200px;',submenuSize:'auto',ref:'',allOption:'',chooseOption:'true',visibleColumn:'15',chooseOptionLabel:'[]전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_posnClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'[]전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'위수탁'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'W'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지입차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보험종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lux_insrkndCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'[]종합보험전체',ref:''},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',templateYn:'N',style:'',gridID:'gr_consignment',id:'udc_topGrdBtn',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridDownFn:'scwin.excelDw_gr_consignment'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_consignment',id:'gr_consignment',style:'',focusMode:'cell',focusMove:'true',visibleRowNum:'18',readOnly:'true','ev:oncelldblclick':'scwin.gr_consignment_oncelldblclick',visibleRowNumFix:'true',fixedColumn:'13',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'소속<br/>지사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'차대번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'차량구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'차종',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'계약기간',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'총보험료',width:'100',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'청구보험료',width:'120',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'회수보험료',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'잔여청구보험료',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',value:'미회수보험료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'회수율(%)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column35',value:'배정물류점소코드',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',width:'100',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',colMerge:'true',class:'underline',style:';color:#0000FF;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drcrNo',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnClsCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndNm',inputType:'text',width:'70',textAlign:'left',colMerge:'true',style:';background-color:#FFFFFF;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'insrStDt',inputType:'text',width:'150',dataType:'text',customFormatter:'scwin.setInsrDate'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'insrLimitAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAmt',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ramt',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'retrvAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rate',displayMode:'label',textAlign:'right',displayFormat:'#,##0.0',dataType:'float',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'assgnLobranCd',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'lobranNm',id:'subTotal1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'expression',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column20',inputType:'text',width:'100',value:'소계'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'expression',width:'100',textAlign:'right',displayFormat:'#,##0',expression:'SUM(\'insrLimitAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'expression',width:'120',textAlign:'right',displayFormat:'#,##0',expression:'SUM(\'bilgAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'expression',width:'120',textAlign:'right',displayFormat:'#,##0',expression:'SUM(\'amt\')',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'expression',width:'120',textAlign:'right',displayFormat:'#,##0',expression:'SUM(\'ramt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column29',displayMode:'label',textAlign:'right',displayFormat:'#,##0',expression:'SUM(\'retrvAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column30',displayMode:'label',textAlign:'right',displayFormat:'#,##0.0[floor]',expression:'AVG(\'rate\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column31',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column47',value:'',displayMode:'label',textAlign:'right',expression:'SUM("insrLimitAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',textAlign:'right',expression:'SUM("bilgAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',textAlign:'right',expression:'SUM("amt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column44',value:'',displayMode:'label',textAlign:'right',expression:'SUM("ramt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column43',value:'',displayMode:'label',textAlign:'right',expression:'SUM("retrvAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right',expression:'AVG("rate")',displayFormat:'#,###.0[floor]',dataType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'total',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})