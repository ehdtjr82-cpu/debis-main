/*amd /ui/ds/fs/consignmgnt/fs_401_01_11b.xml 19475 7cacabeb1ad42d2a6385b5a61da2416157caadeafefb461f9af3bf6cf4bf1377 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_consignment',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranNm',name:'소속;지사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrNo',name:'차대번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'차량구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'차종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrStDt',name:'계약기간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrEndDt',name:'계약기간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrLimitAmt',name:'총보험료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구보험료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'회수보험료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ramt',name:'잔여청구보험료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retrvAmt',name:'미회수보험료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rate',name:'회수율(%)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'배정물류점소코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'gubun',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtDtMm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'assgnLobranCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'posnClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'insrkndCd',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.consignmgnt.consignmgntcadjm.RetrieveEquipmentInsuranceChargeBillingRetrievalCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_consignment","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_consignment","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*년월 setting*/
scwin.strCurMon = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환

scwin.memJson = $c.data.getMemInfo($p);
scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); //상위물류점소코드
scwin.loUpperLobranNm = $c.data.getMemInfo($p, "loUpperLobranNm"); //상위물류점소 

if (scwin.loUpperLobranCd == null) scwin.loUpperLobranCd = "";
scwin.onpageload = function () {
  //공통코드 적용()
  const codeOptions = [{
    grpCd: "OP107",
    compID: "lux_insrkndCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_SetDefaultData();

  // 달력 버튼 포커스 방지
  setTimeout(function () {
    document.querySelectorAll('.w2inputCalendar_div_img button').forEach(function (btn) {
      btn.tabIndex = -1;
    });
  }, 0);
};
scwin.sbm_lobran_submitdone = function () {
  lc_lobran.setValue(scwin.loUpperLobranCd);
  lc_lobran.focus();
};

//-------------------------------------------------------------------------
// function name : f_InitObjects
// function desc : 검색조건 Field Clear함.
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = async function (e) {
  await $c.gus.cfInitObjects($p, tb_Conditon);
  scwin.f_SetDefaultData();
};

//-------------------------------------------------------------------------
// function name : f_SetDefaultData
// function desc : Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  // 소속지사
  $c.sbm.execute($p, sbm_lobran);
  ed_ctrtDtMm.setValue(scwin.strCurMon);
};

//조회
scwin.btn_retrieve_onclick = async function (e) {
  //필수입력항목 체크
  let chkValid = await $c.gus.cfValidate($p, [ed_ctrtDtMm]);
  if (!chkValid) return;

  //dataMap setting    
  dma_queryCondition.set("ctrtDtMm", ed_ctrtDtMm.getValue());
  dma_queryCondition.set("assgnLobranCd", lc_lobran.getValue());
  dma_queryCondition.set("posnClsCd", lc_posnClsCd.getValue());
  dma_queryCondition.set("insrkndCd", lux_insrkndCd.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//조회callback
scwin.sbm_retrieve_submitdone = async function () {
  let rowcnt = ds_consignment.getRowCount();
  if (rowcnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    gr_consignment.setFocusedCell(0, 0);
    total.setValue(rowcnt);
  }

  /*기간처리 decode*/
  for (i = 0; i < ds_consignment.getRowCount(); i++) {
    let nStDt = ds_consignment.getCellData(i, "insrStDt");
    let nEnDt = ds_consignment.getCellData(i, "insrEndDt");
    if (nStDt == "") {
      ds_consignment.setCellData(i, "insrStDt", "");
    } else {
      ds_consignment.setCellData(i, "insrStDt", nStDt + "~" + nEnDt);
    }
  }
};

//grid dbclick..
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
      fileName: "위수탁 장비보험내역.xlsx",
      sheetName: "위수탁 장비보험내역",
      useDataFormat: "true",
      useStyle: "true"
    };
    let infoArr = {};
    // AS-IS: 조회 결과 없어도 엑셀 다운로드
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_Conditon',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_ctrtDtMm',pickerType:'dynamic',style:'',mandatory:'true',displayFormat:'yyyy/MM',title:'기준월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속지사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lobran',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'[]전체',ref:'',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_posnClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'[]전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'위수탁'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'W'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지입차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보험종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lux_insrkndCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'[]종합보험전체',ref:''},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'excelDw_gr_consignment',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridID:'gr_consignment'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_consignment',id:'gr_consignment',style:'',visibleRowNum:'15',visibleRowNumFix:'true',focusMode:'cell',focusMove:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_consignment_oncelldblclick',columnMove:'false',fixedColumn:'13'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'소속<br/>지사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'차대번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'차량구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'차종',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'계약기간',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'총보험료',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'청구보험료',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'회수보험료',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'잔여청구보험료',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column52',value:'미회수보험료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'회수율(%)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column46',value:'배정물류점소코드',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',width:'100',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',colMerge:'true',class:'underline',style:';color:#0000FF;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drcrNo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnClsCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndNm',inputType:'text',width:'70',textAlign:'left',colMerge:'true',style:';background-color:#FFFFFF;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'insrStDt',inputType:'text',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'insrLimitAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ramt',inputType:'text',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'retrvAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rate',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'assgnLobranCd',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'lobranNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'lobranNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column61',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM(\'insrLimitAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM(\'bilgAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column59',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM(\'amt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column58',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM(\'ramt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM(\'retrvAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column56',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'AVG(\'rate\')',displayFormat:'#,##0.0[floor]'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'insrLimitAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'bilgAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'amt\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'ramt\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column54',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'retrvAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column51',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.0[floor]',expression:'AVG(\'rate\')'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column48',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})