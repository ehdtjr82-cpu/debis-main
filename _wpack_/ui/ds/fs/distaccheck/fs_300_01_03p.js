/*amd /ui/ds/fs/distaccheck/fs_300_01_03p.xml 15198 fa9b172e71518fe81415352c5e81e5c7b7e9936a975ccf03666e0c283b35c034 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'retrieveDate',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctNm',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellLodeptCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellLodeptNm',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNm',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'headcomCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'newCtrtYr',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upperClntNo',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upperClntNm',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtEmpNm',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomNm',name:'name16',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'name17',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoType',name:'name18',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCdCtrt',name:'name19',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'name20',dataType:'text'}},{T:1,N:'w2:key',A:{id:'opntDeptCd',name:'name21',dataType:'text'}},{T:1,N:'w2:key',A:{id:'opntDeptNm',name:'name22',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upperDeptCd',name:'name23',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upperDeptNm',name:'name24',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrYn',name:'name25',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name26',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true','ev:ondataload':'scwin.ds_result_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellTotAmt',name:'매출합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsTotAmt',name:'매입합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'확정매출',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'확정매입',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unSellAmtThis',name:'미확정 매출',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unPchsAmtThis',name:'미확정 매입',dataType:'number'}},{T:1,N:'w2:column',A:{id:'innerSellAmt',name:'내부매출',dataType:'number'}},{T:1,N:'w2:column',A:{id:'innerPchsAmt',name:'내부매입',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.distaccheck.distributionMgnt.RetrieveDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Retrieve","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve_done','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.dDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.retrieveDate = scwin.dDate.substring(0, 6); // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.memJson = $c.data.getMemInfo($p);
scwin.userClsCd = $c.data.getMemInfo($p, "userId"); // 사용자구분코드

scwin.arrParent = "";
scwin.retrieveDate = "";
scwin.acctDeptCd = "";
scwin.bilgClntNo = "";
scwin.acctCd = "";
scwin.acctNm = "";
scwin.sellLodeptCd = "";
scwin.sellLodeptNm = "";
scwin.ctrtNo = "";
scwin.bilgClntNm = "";
scwin.headcomCd = "";
scwin.coClsCd = "";
scwin.newCtrtYr = "";
scwin.upperClntNo = "";
scwin.upperClntNm = "";
scwin.ctrtEmpNm = "";
scwin.bizDomNm = "";
scwin.cargoClsCd = "";
scwin.cargoType = "";
scwin.acctDeptCdCtrt = "";
scwin.acctDeptNm = "";
scwin.opntDeptCd = "";
scwin.opntDeptNm = "";
scwin.upperDeptCd = "";
scwin.upperDeptNm = "";
scwin.cntrYn = "";
scwin.crn = "";

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.arrParent = $p.getAllParameter().paramData.data;
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  dma_Retrieve.set("retrieveDate", scwin.arrParent[0]);
  dma_Retrieve.set("acctDeptCd", scwin.arrParent[1]);
  dma_Retrieve.set("bilgClntNo", scwin.arrParent[2]);
  dma_Retrieve.set("acctCd", scwin.arrParent[3]);
  dma_Retrieve.set("acctNm", scwin.arrParent[4]);
  dma_Retrieve.set("sellLodeptCd", scwin.arrParent[5]);
  dma_Retrieve.set("sellLodeptNm", scwin.arrParent[6]);
  dma_Retrieve.set("ctrtNo", scwin.arrParent[7]);
  dma_Retrieve.set("bilgClntNm", scwin.arrParent[8]);
  dma_Retrieve.set("headcomCd", scwin.arrParent[9]);
  dma_Retrieve.set("coClsCd", scwin.arrParent[10]);
  dma_Retrieve.set("newCtrtYr", scwin.arrParent[11]);
  dma_Retrieve.set("upperClntNo", scwin.arrParent[12]);
  dma_Retrieve.set("upperClntNm", scwin.arrParent[13]);
  dma_Retrieve.set("ctrtEmpNm", scwin.arrParent[14]);
  dma_Retrieve.set("bizDomNm", scwin.arrParent[15]);
  dma_Retrieve.set("cargoClsCd", scwin.arrParent[16]);
  dma_Retrieve.set("cargoType", scwin.arrParent[17]);
  dma_Retrieve.set("acctDeptCdCtrt", scwin.arrParent[18]);
  dma_Retrieve.set("acctDeptNm", scwin.arrParent[19]);
  dma_Retrieve.set("opntDeptCd", scwin.arrParent[20]);
  ``;
  dma_Retrieve.set("opntDeptNm", scwin.arrParent[21]);
  dma_Retrieve.set("upperDeptCd", scwin.arrParent[22]);
  dma_Retrieve.set("upperDeptNm", scwin.arrParent[23]);
  dma_Retrieve.set("cntrYn", scwin.arrParent[24]);
  dma_Retrieve.set("crn", scwin.arrParent[25]);
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.ds_result_ondataload = function () {
  let nRow = ds_result.getRowCount();
  if (nRow == 0) {
    $c.win.alert($p, "조회결과가 존재하지 않습니다.");
    return;
  }

  //조회 완료 후 총 검색 수 하단 노출
  spa_totalRows.setValue(nRow);
};
scwin.sbm_Retrieve_done = function (e) {};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.runExcel = async function () {
  let options = {
    fileName: "거래처별손익실적집계.xlsx",
    sheetName: "거래처별손익실적집계"
  };
  let grdObj = gr_result;
  let infoArr = {};
  if (ds_result.getTotalRow() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처별 손익실적 집계현황-상세',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_result',gridDownFn:'scwin.runExcel',btnUser:'Y',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_result',focusMode:'row',id:'gr_result',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',resize:'true',columnMove:'true',editModeEvent:'onclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'청구거래처'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'150',value:'청구거래처명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'오더번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'100',value:'매출합계'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'매입합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'확정매출',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'확정매입',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'미확정매출',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'미확정매입',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'내부매출',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'내부매입',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bilgClntNo',inputType:'text',removeBorderStyle:'false',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bilgClntNm',inputType:'text',removeBorderStyle:'false',width:'150',textAlign:'left',colMerge:'true',upperColumn:'bilgClntNo'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'sellTotAmt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsTotAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unSellAmtThis',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'unPchsAmtThis',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'innerSellAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'innerPchsAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'요약',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column31',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("sellTotAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column30',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("pchsTotAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column29',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("sellAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column28',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("pchsAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column27',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("unSellAmtThis")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column37',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("unPchsAmtThis")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("innerSellAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column25',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("innerPchsAmt")'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:';visibility:hidden;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})