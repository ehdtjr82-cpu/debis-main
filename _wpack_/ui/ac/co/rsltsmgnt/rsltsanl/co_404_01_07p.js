/*amd /ui/ac/co/rsltsmgnt/rsltsanl/co_404_01_07p.xml 15946 4f4deb9459bc32d9dc2e7277da66198a13fdc12b3ac3441190ac75127199a551 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromDate',name:'fromDate',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ver',name:'ver',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'cargoClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'commCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'vsslCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'variableFixedClsCd',name:'variableFixedClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'displayClsCd',name:'displayClsCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'관리계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctNm',name:'관리계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'고객코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'고객명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'variableCost',name:'변동비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fixedCost',name:'고정비',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveCharacterEachResultsDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 특성별실적상세조회_물류 (co_404_01_07p)
// 작성자 : 송정희
// 최초작성일자 : 2026-11-14
//-------------------------------------------------------------------------
scwin.fromDate_YyMm = ""; // 작업날짜
scwin.fromDate_YyMm = WebSquare.date.getCurrentServerDate("yyyyMM");
scwin.p_variableFixedClsCd = "";
scwin.p_fromDate = "";
scwin.p_displayClsCd = "";
scwin.p_acctDeptCd = "";
scwin.p_clntNo = "";
scwin.p_clntNm = "";
scwin.p_ver = "";
scwin.p_cargoClsCd = "";
scwin.p_cargoClsNm = "";
scwin.p_commCd = "";
scwin.p_commNm = "";
scwin.p_vesselCd = "";
scwin.p_vesselNm = "";
scwin.p_moneyClsCd = "";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.p_variableFixedClsCd = scwin.params["variableFixedClsCd"];
  scwin.p_fromDate = scwin.params["fromDate"];
  scwin.p_displayClsCd = scwin.params["displayClsCd"];
  scwin.p_acctDeptCd = scwin.params["acctDeptCd"];
  scwin.p_clntNo = scwin.params["clntNo"];
  scwin.p_clntNm = scwin.params["clntNm"];
  scwin.p_ver = scwin.params["ver"];
  scwin.p_cargoClsCd = scwin.params["cargoClsCd"];
  scwin.p_cargoClsNm = scwin.params["cargoClsNm"];
  scwin.p_commCd = scwin.params["commCd"];
  scwin.p_commNm = scwin.params["commNm"];
  scwin.p_vesselCd = scwin.params["vsslCd"];
  scwin.p_vesselNm = scwin.params["vsslNm"];
  scwin.p_moneyClsCd = scwin.params["moneyClsCd"];
  ed_sclntNo.setValue(scwin.p_clntNo);
  ed_sclntNm.setValue(scwin.p_clntNm);
  ed_scargoClsNm.setValue(scwin.p_cargoClsNm);
  ed_svesselNm.setValue(scwin.p_vesselNm);
  ed_scommNm.setValue(scwin.p_scommNm);
  $c.gus.cfDisableObjects($p, [ed_sclntNo, ed_sclntNm, ed_scargoClsNm, ed_svesselNm, ed_scommNm]);
  scwin.f_Retrieve();
};
//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  dma_search.set("fromDate", scwin.p_fromDate);
  dma_search.set("acctDeptCd", scwin.p_acctDeptCd);
  dma_search.set("clntNo", scwin.p_clntNo);
  dma_search.set("ver", scwin.p_ver);
  dma_search.set("variableFixedClsCd", scwin.p_variableFixedClsCd); // 변동비 고정비 구분값    

  // 테스트용 임시 데이터
  //    dma_search.set("fromDate", "20250201"); 
  //    dma_search.set("acctDeptCd", "00049");
  //    dma_search.set("ver", "002");
  //    dma_search.set("variableFixedClsCd", "1"); // 변동비 고정비 구분값

  dma_search.set("displayClsCd", "01"); // 물류조회
  dma_search.set("cargoClsCd", scwin.p_cargoClsCd); // 화물구분
  dma_search.set("commCd", scwin.p_commCd); // 품명코드
  dma_search.set("vsslCd", scwin.p_vesselCd); // 선박코드

  $c.sbm.execute($p, sbm_master);
};

//-------------------------------------------------------------------------
// 부모화면에서 고정비/변동비 클릭한 내역의 금액만 Display한다.
//-------------------------------------------------------------------------
scwin.f_Display = function () {
  // 변동비 고정비 선택구분 1:변동비, 2:고정비
  if (scwin.p_variableFixedClsCd == "1") {
    gr_master.setColumnVisible("variableCost", "true");
    gr_master.setColumnVisible("fixedCost", "false");
  } else if (scwin.p_variableFixedClsCd == "2") {
    gr_master.setColumnVisible("variableCost", "false");
    gr_master.setColumnVisible("fixedCost", "true");
  }
};

//-------------------------------------------------------------------------
// 그리드의 단위를 변경한다.
//-------------------------------------------------------------------------
scwin.f_ChangeMoney = function () {
  scwin.cunit = 1;
  if (scwin.p_moneyClsCd == "02") {
    scwin.cunit = 1000;
  }
  if (scwin.p_moneyClsCd == "03") {
    scwin.cunit = 1000000;
  }
  if (scwin.p_moneyClsCd == "04") {
    scwin.cunit = 100000000;
  }
  scwin.f_changeUnitAmt(scwin.cunit);
};

//------------------------------------------------------------------------
// 그리드 컬럼의 금액단위를 정한다.
//------------------------------------------------------------------------
scwin.f_changeUnitAmt = function (unitAmt) {
  scwin.ds_master_rcnt = ds_master.getRowCount();
  console.log("ds_master_rcnt : " + scwin.ds_master_rcnt);
  if (scwin.ds_master_rcnt == 0) {
    return;
  }
  scwin.t_gridUnitAmt = 0;
  const cols_co4040107p = ["variableCost", "fixedCost"];
  for (scwin.i = 0; scwin.i < scwin.ds_master_rcnt; scwin.i++) {
    for (scwin.j = 0; scwin.j < cols_co4040107p.length; scwin.j++) {
      if ($c.gus.cfIsNull($p, ds_master.getCellData(scwin.i, cols_co4040107p[scwin.j])) || !$c.num.isNumber($p, ds_master.getCellData(scwin.i, cols_co4040107p[scwin.j]))) {
        ds_master.setCellData(scwin.i, cols_co4040107p[scwin.j], 0);
      } else {
        scwin.t_gridUnitAmt = $c.num.round($p, $c.num.parseInt($p, ds_master.getCellData(scwin.i, cols_co4040107p[scwin.j])) / unitAmt, 0);
        console.log("scwin.t_gridUnitAmt - " + scwin.t_gridUnitAmt);
        if (isNaN(scwin.t_gridUnitAmt)) {
          scwin.t_gridUnitAmt = 0;
        }
        ds_master.setCellData(scwin.i, cols_co4040107p[scwin.j], scwin.t_gridUnitAmt);
      }
    }
  }
};
scwin.ds_master_ondataload = function () {
  var rowCnt = ds_master.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  }
  if (rowCnt > 0) {
    scwin.f_ChangeMoney();
  }
};
scwin.btn_Close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'고객 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_sclntNo',style:'width: 100px;',readOnly:'true'}},{T:1,N:'xf:input',A:{id:'ed_sclntNm',style:'width: 150px;',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_svesselNm',style:'width: 150px;',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_scargoClsNm',style:'width: 150px;',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_scommNm',style:'width: 150px;',readOnly:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'false',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'관리계정코드',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'관리계정명',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'품명코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'품명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'고객코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'고객명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column18',value:'선박코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'선박명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'변동비',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'고정비',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mgntAcctCd',inputType:'text',removeBorderStyle:'false',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mgntAcctNm',inputType:'text',removeBorderStyle:'false',textAlign:'left',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'commCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqClntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vsslCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vsslNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'variableCost',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fixedCost',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column14',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column13',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column20',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column35',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',expression:'sum(\'variableCost\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column38',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',expression:'sum(\'fixedCost\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Close',style:'',type:'button','ev:onclick':'scwin.btn_Close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})