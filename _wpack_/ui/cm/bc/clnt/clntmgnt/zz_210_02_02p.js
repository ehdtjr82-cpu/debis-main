/*amd /ui/cm/bc/clnt/clntmgnt/zz_210_02_02p.xml 21216 5e7dbc5eb45eb81c2c10b51456df916b205578f225c78b72f5d8befbc953e687 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_List1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellClntYn',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transIntcdBizYn',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntYn',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transBizYn',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptStDt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntDelYn',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtRsnNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntKndNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transYn',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntClsCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntKndCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntYn',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'histChgClsCd',name:'name24',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_List2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'histSeq',name:'이력순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'histChgClsCd',name:'이력변경구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntClsCd',name:'매입거래처구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'수정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일자',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_queryCondition',action:'/cm.bc.clnt.clntmgnt.RetrieveClntHistCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_List1","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_List1","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_queryCondition_submit','ev:submitdone':'scwin.sbm_queryCondition_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_queryConditionHistory',action:'/cm.bc.clnt.clntmgnt.RetrievePurchaseCustomerHistListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_List2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_List2","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_queryConditionHistory_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = async function () {};
scwin.onUdcCompleted = function () {
  console.log("----------- onUdcCompleted");
  scwin.clntNo = $c.data.getParameter($p, "clntNo");
  scwin.f_SetDefaultData();
  scwin.f_Retrieve();
  scwin.f_RetrieveHistory();
};

//-------------------------------------------------------------------------
// DataSet의 Header 정보 생성
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  var clntNo = scwin.clntNo;
  ds_condition.set('clntNo', clntNo);
};

//-------------------------------------------------------------------------
// 본선선석계획현황 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  await $c.sbm.execute($p, sbm_queryCondition); // tr_queryCondition.post();
};
scwin.f_RetrieveHistory = async function () {
  await $c.sbm.execute($p, sbm_queryConditionHistory); // tr_queryConditionHistory.post();
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------	
scwin.f_RunExcel = async function () {
  var gridId = ""; // 그리드ID
  var sheetName = ""; // 생성될 엑셀 파일의 쉬트명

  var countA = ds_List1.getTotalRow();
  if (!(countA > 0)) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  }
  gridId = "gr_List1";
  sheetName = "거래처이력목록";
  var gridName = $p.getComponentById(gridId);
  let confirmVal = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (confirmVal) {
    // gridName.SetExcelTitle(1, "value:" + sheetName + ";"  // 표시할 타이틀
    //     + "font-face:'돋움체';" // 폰트
    //     + "font-size:12pt;"    // 폰트 크기
    //     + "font-color:black;"  // 폰트 색깔
    //     + "bgcolor:#ffffff;"   // 배경 색깔
    //     + "align:center;"      // 정렬
    //     + "line-color:white;"  // 타이틀 부분 테두리선 색깔
    //     + "line-width:0pt;"    // 타이틀 테두리선 굵기
    //     + "skiprow:1;");       // 타이틀 다음 떼는 로우 수

    // cfGridToExcel(gridName, sheetName, fileName, 4 + 8 + 16);

    const grdObj = gridName;
    const infoArr = [{
      rowIndex: 0,
      // 첫 번째 줄
      colIndex: 0,
      // 첫 번째 칸부터
      colSpan: 13,
      // 그리드 전체 너비만큼 병합
      rowSpan: 1,
      text: "거래처이력목록",
      textAlign: "center",
      //정렬
      fontSize: 12,
      drawBorder: false,
      // 테두리
      color: "black",
      // 글자색
      backgroundColor: "white" // 배경색
    }];
    const options = {
      fileName: sheetName + ".xlsx",
      //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      sheetName: sheetName,
      "startRowIndex": 1
    };
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};
scwin.sbm_queryCondition_submit = function (e) {
  var clntNo = scwin.clntNo;
  ds_condition.set('clntNo', clntNo);
};

// for=ds_List1 event=OnLoadCompleted(rowCnt) 
scwin.sbm_queryCondition_submitdone = async function (e) {
  let rowCnt = ds_List1.getTotalRow();
  totalRowsGrid1.setValue(rowCnt);
  scwin.f_ApplyGrid1UserColor();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, "거래처 이력현황 조회결과가 없습니다.");
  }
};
scwin.GRID1_COLOR_TARGET_COLS = ["clntNm", "crn", "mgntTrgtClntYn", "mgntTrgtRsnNm", "clntKndNm", "bilgClntNo", "bilgClntNm", "clntYn", "transYn", "sellClntClsCd", "clntDelYn"];

// ASIS : scwin.gr_List1_OnUserColor = function (Row, eventid)
scwin.f_ApplyGrid1UserColor = function () {
  var rowCnt = ds_List1.getTotalRow();
  var cols = scwin.GRID1_COLOR_TARGET_COLS;
  for (var row = 0; row < rowCnt; row++) {
    for (var i = 0; i < cols.length; i++) {
      gr_List1.setCellColor(row, cols[i], "");
    }
  }
  for (var row = 1; row < rowCnt; row++) {
    for (var i = 0; i < cols.length; i++) {
      var colId = cols[i];
      var prevVal = ds_List1.getCellData(row - 1, colId);
      var currVal = ds_List1.getCellData(row, colId);
      if (prevVal != currVal) {
        gr_List1.setCellColor(row, colId, "blue");
      }
    }
  }
};
scwin.gr_List1_onsort = function () {
  scwin.f_ApplyGrid1UserColor();
};

// for=ds_List2 event=OnLoadCompleted(rowCnt)
scwin.sbm_queryConditionHistory_submitdone = async function (e) {
  let rowCnt = ds_List2.getTotalRow();
  totalRowsGrid2.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, "매입거래처 이력현황 조회결과가 없습니다.");
  }
};

// 관리대상 거래처여부
scwin.mgntTrgtClntYn = function (value) {
  switch (value) {
    case "0":
      return "아니오";
    case "1":
      return "예";
    default:
      return "";
  }
};
scwin.mgntTrgtRsnNm = function (value) {
  switch (value) {
    case "01":
      return "일반";
    case "02":
      return "관리";
    default:
      return "";
  }
};
scwin.sellClntClsCd = function (value) {
  switch (value) {
    case "01":
      return "선사";
    case "02":
      return "화주";
    default:
      return "";
  }
};
scwin.clntDelYn = function (value) {
  switch (value) {
    case "0":
      return "아니오";
    case "1":
      return "예";
    default:
      return "";
  }
};
scwin.btn_close_onclick = function (e) {
  window.close();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처이력현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_List1',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',btnUser:'Y',gridDownUserAuth:'X',gridDownFn:'scwin.f_RunExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_List1',focusMode:'row',id:'gr_List1',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',sortable:'true',readOnly:'true','ev:onsort':'scwin.gr_List1_onsort'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'수정자ID',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'수정일시',width:'130'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column41',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column35',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'관리대상</br>거래처여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column31',value:'관리대상사유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'거래처종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column27',value:'매출입구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'운송사업구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column23',value:'매출거래처구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column21',value:'거래처삭제여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column19',value:'청구거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column17',value:'청구거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column13',value:'적용시작일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column15',value:'이력변경구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column51',value:'거래처종류코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column49',value:'매출거래처여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column47',value:'매입거래처여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column43',value:'운송사업구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column45',value:'운송주선사업구분',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'regId',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'regDtm',inputType:'text',removeBorderStyle:'false',textAlign:'center',width:'130'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mgntTrgtClntYn',value:'',displayMode:'label',displayFormatter:'scwin.mgntTrgtClntYn',dataType:'text'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'mgntTrgtRsnNm',value:'',displayMode:'label',displayFormatter:'scwin.mgntTrgtRsnNm',dataType:'text'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntKndNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'transYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'sellClntClsCd',value:'',displayMode:'label',displayFormatter:'scwin.sellClntClsCd'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'clntDelYn',value:'',displayMode:'label',displayFormatter:'scwin.clntDelYn'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'bilgClntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'bilgClntNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'adptStDt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'histChgClsCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'clntKndCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'sellClntYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'pchsClntYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'transBizYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'transIntcdBizYn',value:'',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRowsGrid1',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매입거래처 이력현황',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grp_group2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_List2',focusMode:'row',id:'gr_List2',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',sortable:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'거래처번호',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'순번',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'이력순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column21',value:'이력변경구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column19',value:'매입거래처구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'수정자ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'수정일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'수정자ID ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'수정일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNo',inputType:'text',removeBorderStyle:'false',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'seq',inputType:'text',removeBorderStyle:'false',textAlign:'center',width:'70',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'histSeq',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'histChgClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'pchsClntClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regId',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regDtm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modId',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modDtm',value:'',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRowsGrid2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})