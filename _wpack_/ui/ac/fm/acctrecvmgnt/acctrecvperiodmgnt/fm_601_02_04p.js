/*amd /ui/ac/fm/acctrecvmgnt/acctrecvperiodmgnt/fm_601_02_04p.xml 20056 61d1fd1d26f9be75032cdf539e319de83c427c79e9d86fc0a902a18ed1feec8c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdCls',name:'기준구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyAcctDept',name:'수금귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgAcctDept',name:'수금귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCls',name:'거래처구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCls',name:'조회구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctrecvperiod',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptCd',name:'수금귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saleAcctDeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPersNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thismonth',name:'컬럼헤더명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'beforemonth',name:'컬럼헤더명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'beforemonth2',name:'컬럼헤더명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'beforemonth3',name:'컬럼헤더명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'beforemonth4',name:'컬럼헤더명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'beforemonth5',name:'컬럼헤더명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'beforemonth6',name:'컬럼헤더명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'beforemonth7',name:'컬럼헤더명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'beforemonth8',name:'컬럼헤더명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'beforemonth9',name:'컬럼헤더명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'beforemonth10',name:'컬럼헤더명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'beforemonth11',name:'컬럼헤더명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'beforemonth12',name:'컬럼헤더명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'beforemonthunder',name:'컬럼헤더명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'culmulative',name:'누계',dataType:'number'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieveAcctRecvMgnt',action:'/ac.fm.acctrecvmgnt.acctrecvperiodmgnt.RetrieveAcctrecvperiodDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_acctrecvperiod","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_acctrecvperiod","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveAcctRecvMgnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.params = "";
scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd");
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.stdYm = scwin.params.stdYm;
  scwin.clntNo = scwin.params.clntNo;
  if (scwin.clntNo == null) scwin.clntNo = "";
  scwin.collMoneyAcctDept = scwin.params.collMoneyAcctDept;
  if (scwin.collMoneyAcctDept == null) scwin.collMoneyAcctDept = "";
  scwin.bilgAcctDept = scwin.params.bilgAcctDept;
  if (scwin.bilgAcctDept == null) scwin.bilgAcctDept = "";
  ed_stdYm.setValue(scwin.stdYm);
  ds_condition.set("clntNo", scwin.clntNo);
  ds_condition.set("collMoneyAcctDept", scwin.collMoneyAcctDept);
  ds_condition.set("bilgAcctDept", scwin.bilgAcctDept);
  $c.gus.cfDisableObjects($p, [ed_stdYm]);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    let ret = await $c.gus.cfValidate($p, [ed_stdYm]);
    if (!ret) {
      return false;
    }
    let sDate = ed_stdYm.getValue() + "01";
    gr_acctrecvperiod.setHeaderValue("thismonth", sDate.toDate().after(0, 0, 0).format("YYYY년MM월"));
    gr_acctrecvperiod.setHeaderValue("beforemonth", sDate.toDate().after(0, -1, 0).format("YYYY년MM월"));
    gr_acctrecvperiod.setHeaderValue("beforemonth2", sDate.toDate().after(0, -2, 0).format("YYYY년MM월"));
    gr_acctrecvperiod.setHeaderValue("beforemonth3", sDate.toDate().after(0, -3, 0).format("YYYY년MM월"));
    gr_acctrecvperiod.setHeaderValue("beforemonth4", sDate.toDate().after(0, -4, 0).format("YYYY년MM월"));
    gr_acctrecvperiod.setHeaderValue("beforemonth5", sDate.toDate().after(0, -5, 0).format("YYYY년MM월"));
    gr_acctrecvperiod.setHeaderValue("beforemonth6", sDate.toDate().after(0, -6, 0).format("YYYY년MM월"));
    gr_acctrecvperiod.setHeaderValue("beforemonth7", sDate.toDate().after(0, -7, 0).format("YYYY년MM월"));
    gr_acctrecvperiod.setHeaderValue("beforemonth8", sDate.toDate().after(0, -8, 0).format("YYYY년MM월"));
    gr_acctrecvperiod.setHeaderValue("beforemonth9", sDate.toDate().after(0, -9, 0).format("YYYY년MM월"));
    gr_acctrecvperiod.setHeaderValue("beforemonth10", sDate.toDate().after(0, -10, 0).format("YYYY년MM월"));
    gr_acctrecvperiod.setHeaderValue("beforemonth11", sDate.toDate().after(0, -11, 0).format("YYYY년MM월"));
    gr_acctrecvperiod.setHeaderValue("beforemonth12", sDate.toDate().after(0, -12, 0).format("YYYY년MM월"));
    gr_acctrecvperiod.setHeaderValue("beforemonthunder", sDate.toDate().after(0, -13, 0).format("YYYY년MM월"));
    ds_condition.set("stdCls", 2);
    $c.sbm.execute($p, sbm_retrieveAcctRecvMgnt);
  } catch (e) {
    console.log("f_Retrieve " + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieveAcctRecvMgnt_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_acctrecvperiod.getRowCount()));
    if (ds_acctrecvperiod.getRowCount() == 0) {
      $c.win.alert($p, "조회된 데이터가 없습니다");
    } else {
      var options = {};
      options.sortIndex = "collMoneyAcctDeptCd crn clntNm";
      options.sortOrder = "1 1 1";
      ds_acctrecvperiod.multisort(options); //SortExpr +collMoneyAcctDeptCd +crn +clntNm
      $c.gus.cfGoPrevPosition($p, gr_acctrecvperiod, 0); //첫번째 row 포지션이동
    }
  } catch (e) {
    console.log("sbm_retrieveAcctRecvMgnt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = function () {
  try {
    let gridName = "";
    if (ds_acctrecvperiod.getRowCount() <= 0) {
      $c.win.alert($p, "월령상세내역이 존재하지않습니다.");
      return false;
    }
    gridName = "월령상세조회";
    const options = {
      fileName: gridName + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      ,
      sheetName: gridName //엑셀내 시트명 지정필요시
    };
    const infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_acctrecvperiod, options, infoArr);
  } catch (e) {
    console.log("f_GridToExcel : " + e);
  }
};

//-------------------------------------------------------------------------
// 닫기
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};

//-------------------------------------------------------------------------
// 거래처팝업화면 호출
//-------------------------------------------------------------------------
scwin.gr_acctrecvperiod_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "clntNo") {
    if (!(ds_acctrecvperiod.getCellData(rowIndex, columnId) == null && ds_acctrecvperiod.getCellData(rowIndex, columnId) == "")) {
      $c.gus.cfViewClntInfo($p, ds_acctrecvperiod.getCellData(rowIndex, columnId));
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_stdYm',displayFormat:'yyyy/MM',mandatory:'true',style:'',ref:'data:ds_condition.stdYm'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_acctrecvperiod',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcel',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_acctrecvperiod',visibleRowNum:'15',id:'gr_acctrecvperiod',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',fixedColumn:'7',readOnly:'true',resize:'true',columnMove:'true',fixedColumnNoMove:'true','ev:oncellclick':'scwin.gr_acctrecvperiod_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'청구부서',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column29',value:'청구부서명',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column27',value:'사업자번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column25',value:'거래처번호',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column23',value:'거래처명',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'매출부서',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'부서명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'계정코드',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'계정명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column17',value:'구분',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonthunder',value:'컬럼헤더명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth12',value:'컬럼헤더명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth11',value:'컬럼헤더명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth10',value:'컬럼헤더명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth9',value:'컬럼헤더명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth8',value:'컬럼헤더명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth7',value:'컬럼헤더명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth6',value:'컬럼헤더명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth5',value:'컬럼헤더명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth4',value:'컬럼헤더명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth3',value:'컬럼헤더명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth2',value:'컬럼헤더명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth',value:'컬럼헤더명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'thismonth',value:'컬럼헤더명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column49',value:'누계',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'전화번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'담당자명',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyAcctDeptCd',displayMode:'label',textAlign:'center',fixColumnWidth:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'acctDeptNm',displayMode:'label',textAlign:'center',fixColumnWidth:'true',colMerge:'true',upperColumn:'collMoneyAcctDeptCd'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'crn',displayMode:'label',textAlign:'center',fixColumnWidth:'true',colMerge:'true',upperColumn:'acctDeptNm'}},{T:1,N:'w2:column',A:{width:'110',inputType:'link',id:'clntNo',displayMode:'label',textAlign:'center',class:'linktype',fixColumnWidth:'true',colMerge:'true',upperColumn:'crn'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left',fixColumnWidth:'true',colMerge:'true',upperColumn:'clntNo'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAcctDeptCd',displayMode:'label',textAlign:'center',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'saleAcctDeptNm',displayMode:'label',textAlign:'left',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctCd',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'stsCd',displayMode:'label',textAlign:'center',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'발생'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'잔액'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'99'}]}]}]}]},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonthunder',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth12',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth11',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth10',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth9',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth8',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth7',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth6',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth5',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth4',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth3',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'beforemonth2',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'beforemonth',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'thismonth',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'culmulative',displayMode:'label',textAlign:'right',displayFormat:'#,##0',expression:'Number(display(\'thismonth\'))+Number(display(\'beforemonth2\'))+Number(display(\'beforemonthunder\'))'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntTelNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntPersNm',displayMode:'label',textAlign:'left'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})