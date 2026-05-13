/*amd /ui/ds/op/stvwrk/op_210_02_17b.xml 17625 f833202a10c6faf5859427ba5d0543ca2b19f37589ccda5a95a6bf12eda7fb86 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lodeptCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vacaDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vacaMonth',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlClsCd',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lodeptCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lodeptNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vacaRsnCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vacaRsnNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vacaStDt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vacaEndDt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remainVacaCnt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vacaCnt',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'monthVacaCnt',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalVacaCnt',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'entDt',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'wrkPlClsCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveTempVacationListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Query","key":"IN_DS1"},{"id":"ds_emp","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_emp","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회 중입니다...','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_co_ds_combo1',action:'/cm.zz.RetrieveComboCMD.do?sysCd=BerthNonUsableEBC&queryId=retriveLobranCodeList',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"co_ds_combo1","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_co_ds_combo1_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.loginDTO = $c.data.getMemInfo($p);

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  $c.sbm.execute($p, sbm_co_ds_combo1);
  ed_vacaMonth.setValue($c.date.getServerDateTime($p, "yyyyMM"));
};
scwin.sbm_co_ds_combo1_submitdone = function (e) {
  lc_lobranCd.setValue(scwin.loginDTO.lobranCd);
  lc_lobranCd.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ed_vacaMonth.getValue() == "") {
    await $c.win.alert($p, "휴무월을 입력하세요");
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_mainData); //공통부재

  ed_vacaMonth.setValue($c.date.getServerDateTime($p, "yyyyMM"));
  lc_lobranCd.setValue(scwin.loginDTO.lobranCd);
  lc_lobranCd.focus();
};

//-------------------------------------------------------------------------
// List 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_toExcel1 = function () {
  let options = {
    fileName: "상용직연차현황" + ".xlsx",
    sheetName: "상용직연차현황"
  };
  $c.data.downloadGridViewExcel($p, gr_emp, options);
};

//-------------------------------------------------------------------------
// 연차등록 화면 조회
//-------------------------------------------------------------------------
scwin.f_detail = function (row, colid) {
  let rowJson = ds_emp.getRowJSON(row);
  let vacaMonth = ed_vacaMonth.getValue();
  let staffNo = rowJson.staffNo;
  let staffNm = rowJson.staffNm;
  let lobranCd = lc_lobranCd.getValue();
  let url = "/ui/ds/op/stvwrk/op_210_03_03b.xml";
  let param = {
    pop_flag: "Detail",
    staffNo: staffNo,
    staffNm: staffNm,
    vacaMonth: vacaMonth,
    lobranCd: lobranCd
  };
  $c.win.openMenu($p, "상용칙 연차등록", url, "op_210_03_03b.xml", param, {});
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_emp.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  totalRows.setValue(ds_emp.getRowCount());
};
scwin.gr_emp_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  // 상세내역 팝업 조회
  if (columnId == "monthVacaCnt") {
    if (ds_emp.getCellData(rowIndex, columnId) != 0) {
      scwin.f_detail(rowIndex, columnId);
    }
  }
};
scwin.gr_emp_onsubtotaldblclick = function (info) {
  /* if (info.colID == "column43") {
      let value = $c.num.parseInt(info.element.innerText, 0);
       if (value != 0) {
          scwin.f_detail(-1, "subTotal");
      }
  } */
};
scwin.customFormatter = function (data, formattedData, rowIndex, colIndex) {
  let colId = this.getColumnID(colIndex);
  if (colId == "wrkPlClsCd") {
    return $c.gus.decode($p, data, "01", "내항", "02", "북항", "기타");
  } else if (colId == "monthVacaCnt") {
    if (data != "0") {
      gr_emp.setCellClass(rowIndex, colId, "linktype");
    }
    return data;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_mainData',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:40px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:200px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:45px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:200px;'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lobranCd',search:'none',style:'width:200px;',submenuSize:'auto',ref:'data:dma_Query.lobranCd',allOption:'',chooseOption:'',visibleRowNum:'11',sortOption:'value',validExp:'점소:yes',objType:'key',selectedData:'false',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조회월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_vacaMonth',style:'',objType:'data',validExp:'기간(To):yes:date=YYYYMM',mandatory:'true',displayFormat:'yyyy/MM',ref:'data:dma_Query.vacaMonth'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_wrkPlClsCd',search:'none',style:'width:150px;',submenuSize:'auto',ref:'data:dma_Query.wrkPlClsCd',displayModeSync:'label',allOption:'',chooseOption:'',sortOption:'value',emptyItem:'true',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'내항'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'북항'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'연차내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownUserAuth:'X',gridDownYn:'Y',gridID:'gr_emp',btnPlusYn:'Y',templateYn:'N',id:'udc_top',gridDownFn:'scwin.f_toExcel1',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_emp',id:'gr_emp',style:'',visibleRowNum:'15',visibleRowNumFix:'true',dataName:'상용직 연차내역',validExp:'staffNo:인원번호:yes',validFeatures:'ignoreStatus=no',columnMove:'true',sortable:'true',readOnly:'true',editModeEvent:'onclick',editModeEventIcon:'onclick','ev:oncelldblclick':'scwin.gr_emp_oncelldblclick',columnMoveWithFooter:'true','ev:onsubtotaldblclick':'scwin.gr_emp_onsubtotaldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'80',value:'소속'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'80',value:'구분'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'인원번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'90',value:'성명'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'입사일자',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'총연차',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'사용연차(당월)',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'사용연차(연간)',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'잔여연차',width:'110'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkPlClsCd',inputType:'text',removeBorderStyle:'false',width:'80',colMerge:'true',textAlign:'center',customFormatter:'scwin.customFormatter'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'occpgrdNm',inputType:'text',removeBorderStyle:'false',width:'80',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'staffNo',inputType:'',removeBorderStyle:'false',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'staffNm',inputType:'',removeBorderStyle:'false',width:'90',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'entDt',inputType:'text',width:'110',displayFormat:'####/##/##',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totalVacaCnt',inputType:'text',width:'110',textAlign:'center',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'monthVacaCnt',inputType:'text',width:'120',textAlign:'center',customFormatter:'scwin.customFormatter',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vacaCnt',inputType:'',width:'120',textAlign:'center',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'remainVacaCnt',inputType:'text',width:'110',textAlign:'center',dataType:'number'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'wrkPlClsCd',style:'',id:'subTotal2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column49',value:'계',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column48',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column46',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column45',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column44',value:'',textAlign:'center',dataType:'number',expression:'SUM("totalVacaCnt")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column43',value:'',textAlign:'center',dataType:'number',expression:'SUM("monthVacaCnt")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column42',value:'',textAlign:'center',dataType:'number',expression:'SUM("vacaCnt")'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',dataType:'number',expression:'SUM(\'remainVacaCnt\')',textAlign:'center'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column31',value:'합계',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column30',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column28',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column27',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',id:'column26',displayMode:'label',textAlign:'center',expression:'SUM(\'totalVacaCnt\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column25',displayMode:'label',textAlign:'center',expression:'SUM(\'monthVacaCnt\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column24',displayMode:'label',textAlign:'center',expression:'SUM(\'vacaCnt\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',id:'column23',displayMode:'label',textAlign:'center',expression:'SUM(\'remainVacaCnt\')',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})