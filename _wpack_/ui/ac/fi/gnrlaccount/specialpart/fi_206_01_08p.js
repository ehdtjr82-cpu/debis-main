/*amd /ui/ac/fi/gnrlaccount/specialpart/fi_206_01_08p.xml 14398 bae90f371bae1d8c3eadfb48102b2cc5b93e933668f5cb97459680bfa4198c11 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'postDtSt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postDtEnd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'speclCntHourCls',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'concernedCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'printStd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_concernedCd1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drAmt',name:'차변',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crAmt',name:'대변',dataType:'number'}}]},{T:1,N:'w2:data',A:{use:'false'},E:[{T:1,N:'w2:row',E:[{T:1,N:'gubun',E:[{T:4,cdata:'수익'}]},{T:1,N:'acctDeptNm',E:[{T:4,cdata:'50'}]},{T:1,N:'acctNm',E:[{T:4,cdata:'일반매출'}]},{T:1,N:'drAmt',E:[{T:4,cdata:'0'}]},{T:1,N:'crAmt',E:[{T:4,cdata:'145000'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.gnrlaccount.specialpart.RetrieveCustomerTransactionListCMD2.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_concernedCd1","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_concernedCd1","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 거래처거래내역 상세 조회
 * 메뉴경로 : 회계/재무회계/일반회계/특수거래처/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ac/fi/gnrlaccount/specialpart/fi_206_01_08p.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-10-01
 * 수정이력  :
 *    - 2025-10-01      정승혜    최초작성
 *    - 2025-11-25      정승혜    준수사항 적용
 *    - 2026-01-19      정승혜    submitdone 조건수정
 */

//-------------------------------------------------------------------------
// 화면로딩시	
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // getCodeList
  const codeOptions = [{
    grpCd: "FI060",
    compID: "lc_concernedCd"
  }, {
    grpCd: "FI059",
    compID: "lc_speclCntHourCls"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.gus.cfDisableObjects($p, [ed_crn, udc_fromToYearMon1, lc_speclCntHourCls, lc_concernedCd, lc_printStd, lc_speclCntHourCls]);
};
scwin.onUdcCompleted = function () {
  $c.util.setTimeout($p, function () {
    scwin.f_Header();
  }, {
    "delay": 200
  });
};
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "거래처거래내역 상세 조회");
};

//-------------------------------------------------------------------------
// 재조회
//-------------------------------------------------------------------------
scwin.f_SearchClear = function () {
  // 호출되는곳 없음
};

//-------------------------------------------------------------------------
// 조회조건 셋팅 
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  scwin.params = $c.data.getParameter($p);
  ed_postDtSt.setValue(scwin.params["postDtSt"]);
  ed_postDtEnd.setValue(scwin.params["postDtEnd"]);
  lc_speclCntHourCls.setValue(scwin.params["speclCntHourCls"]);
  lc_concernedCd.setValue(scwin.params["concernedCd"]);
  lc_printStd.setValue(scwin.params["printStd"]);
  ed_crn.setValue(scwin.params["crn"]);
  dma_search.set("coCd", scwin.params["coCd"]);
  dma_search.set("acctClsCd", scwin.params["acctClsCd"]);
  $c.util.setTimeout($p, function () {
    scwin.f_Retrieve();
  }, {
    "delay": 200
  });
};

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
  scwin.f_Setting();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function (e) {
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel1 = async function () {
  let confirm = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (confirm) {
    const options = {
      fileName: "특수관계자거래내역.xlsx",
      sheetName: "특수관계자거래내역"
    };
    $c.data.downloadGridViewExcel($p, gr_concernedCd1, options);
  }
};

//-------------------------------------------------------------------------
// function name : f_grdHeiht
// function desc : 그리드 높이 늘리기
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_grdHeiht = function (e) {};

//-------------------------------------------------------------------------
// function name : f_winClose
// function desc : Dialog box Close
//-------------------------------------------------------------------------
scwin.f_winClose = function (e) {
  $c.win.closePopup($p);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_concernedCd1.getRowCount());
  $c.gus.cfGoPrevPosition($p, gr_concernedCd1, 0);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'searchTable',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 20%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:40px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'회계연월',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToYearMon',A:{edFromId:'ed_postDtSt',edToId:'ed_postDtEnd',id:'udc_fromToYearMon1',refDataMap:'dma_search',refEdDt:'postDtEnd',refStDt:'postDtSt',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',style:'',allOption:'',id:'lc_speclCntHourCls',class:'form-control',direction:'auto',objType:'data',ref:'data:dma_search.speclCntHourCls',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'관계자명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',style:'',allOption:'',id:'lc_concernedCd',class:'form-control',direction:'auto',objType:'data',chooseOptionLabel:'전체',ref:'data:dma_search.concernedCd',visibleRowNum:'24'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'출력기준',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',style:'',allOption:'',id:'lc_printStd',class:'form-control',direction:'auto',objType:'data',ref:'data:dma_search.printStd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사업자번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사업자번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_crn',placeholder:'',class:'form-control w120',maxlength:'6'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'거래내역조회',class:'tit'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section2',style:'',gridDownFn:'scwin.f_Excel1',gridID:'gr_concernedCd1',btnPlusYn:'Y',btnUser:'Y',id:'udc_topGrd1',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox gvwfix'},E:[{T:1,N:'w2:gridView',A:{oddEvenColorDisplay:'true',rowNumVisible:'false',showSortableImage:'true',rowNumHeaderValue:'No',sortable:'true',defaultCellHeight:'24',rowNumWidth:'40',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_concernedCd1',evenRowBackgroundColor:'#F8FFF8',autoFit:'allColumn',id:'gr_concernedCd1',visibleRowNum:'10',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column2',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column1',value:'부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column3',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column5',value:'차변',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column7',value:'대변',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'gubun',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'200',inputType:'text',id:'acctDeptNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'200',inputType:'text',id:'acctNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'140',inputType:'text',id:'drAmt',class:'',displayMode:'label',displayFormat:'#,##0',readOnly:'true',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'140',inputType:'text',id:'crAmt',class:'',displayMode:'label',displayFormat:'#,##0',readOnly:'true',dataType:'number',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column12',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column11',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column10',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'140',inputType:'expression',style:'',id:'column9',value:'',displayMode:'label',expression:'sum(\'drAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'140',inputType:'expression',style:'',id:'column8',value:'',displayMode:'label',expression:'sum(\'crAmt\')',displayFormat:'#,##0',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'pop-btnbox'},E:[{T:1,N:'w2:button',A:{style:'',id:'',label:'닫기',class:'btn','ev:onclick':'scwin.f_winClose'}}]}]}]}]}]})