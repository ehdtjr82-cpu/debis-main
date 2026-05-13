/*amd /ui/ds/op/stvwrk/op_210_03_07p.xml 10465 4ec07d4645ab492f898516fae36962c096d8dc2be6ce3c2cb25174e54b4148a1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'occpgrdCd',name:'구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'품목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'작업일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true','ev:ondataload':'scwin.ds_result_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workDt',name:'일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'시프트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cumulateTeu',name:'name7',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/ds.op.stvwrk.RetrieveGroundWrkReportDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submit':'scwin.sbm_Retrieve_submit','ev:submiterror':'scwin.sbm_Retrieve_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_210_03_07p 
// 이름     : 상용직 육상작업집계상세내역
// 경로     : 물류/하역(인천)/현황/상용직 육상작업집계
// 작 성 자 : 조성빈
// 작 업 일 : 2026-01-29
// 사용계정 : 내부
// 비고     :  ***
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.onpageload = function () {
  scwin.strCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
  // scwin.strStartDate = DDate.getPrevDate(strCurrDate, 2);
  scwin.strStartDate = $c.date.addDate($p, scwin.strCurrDate, -2);
  scwin.strFirstDate = scwin.strCurrDate.substring(0, 6) + "01";
  scwin.cvsslMgntNo = $c.data.getParameter($p, "cvsslMgntNo") == null ? "" : $c.data.getParameter($p, "cvsslMgntNo");
  scwin.args = $p.getAllParameter().paramData.data;
  scwin.occpgrdCd = scwin.args[0].trim();
  scwin.rmk = scwin.args[1].trim();
  scwin.lobranCd = scwin.args[2].trim();
  scwin.wrkDt = scwin.args[3].trim();
  const codeOptions = [{
    grpCd: "OP117",
    compID: "gr_result:shiftClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.setCommonCodeCallBack);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {}, {
    "delay": 50
  });
};
scwin.setCommonCodeCallBack = function () {
  ds_condition.set("occpgrdCd", scwin.occpgrdCd);
  ds_condition.set("wrkPlCd", scwin.rmk);
  ds_condition.set("lobranCd", scwin.lobranCd);
  ds_condition.set("wrkDt", scwin.wrkDt);
  $c.sbm.execute($p, sbm_Retrieve);
};

//-------------------------------------------------------------------------
// Windows Close
//-------------------------------------------------------------------------
scwin.f_WinClose = function () {
  $c.win.closePopup($p);
};
scwin.sbm_Retrieve_submit = function (e) {};
scwin.sbm_Retrieve_submitdone = function (e) {
  var rowcnt = ds_result.getRowCount();
  txt_totalRows.setValue(rowcnt);
  ds_result.setRowPosition(0);
  gr_result.setFocusedCell(0, 0);
  var teuHab = 0;
  for (var i = 0; i < ds_result.getRowCount(); i++) {
    if (ds_result.getCellData(i, "cntrSizCd") == "20") {
      teuHab += 1;
    } else {
      teuHab += 2;
    }
    ds_result.setCellData(i, "cumulateTeu", teuHab);
  }
  ds_result.modifyAllStatus("R");
  for (var i = 0; i < ds_result.getRowCount(); i++) {
    if (ds_result.getCellData(i, "duplCnt") == 1) {} else {
      gr_result.setCellBackgroundColor(i, "shiftClsCd", "#FBCED4");
    }
  }
};
scwin.sbm_Retrieve_submiterror = function (e) {};
scwin.btn_close_onclick = function (e) {
  scwin.f_WinClose();
};
scwin.excelDown = function () {
  // f_gridToExcel(gr_result,'상용직 육상작업집계상세');
  // Title
  // argGrid.SetExcelTitle(0, "");
  // argGrid.SetExcelTitle(1,"value:" + argTitle + ";" // 표시할 타이틀
  //                       + "font-face:'돋움체';"      // 폰트
  //                       + "font-size:16pt;"         // 폰트 크기
  //                       + "font-color:black;"       // 폰트 색깔
  //                       + "bgcolor:#ffffff;"        // 배경 색깔
  //                       + "align:center;"           // 정렬
  //                       + "line-color:white;"       // 타이틀 부분 테두리선 색깔
  //                       + "line-width:0pt;"         // 타이틀 테두리선 굵기
  //                       + "skiprow:1;");            // 타이틀 다음 떼는 로우 수
  // cfGridToExcel(argGrid, argTitle, argTitle+".xls", 4+8+16);

  var argGridTotalCol = 0;
  for (var i = 0; i < gr_result.getTotalCol(); i++) {
    if (gr_result.getColumnVisible(i)) {
      argGridTotalCol++;
    }
  }
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: argGridTotalCol,
    text: "상용직 육상작업집계상세",
    textAlign: "center"
    // , fontSize    : "16pt"
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
  const options = {
    fileName: "상용직 육상작업집계상세.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "상용직 육상작업집계상세",
    type: "1",
    startRowIndex: 2
    // removeColumns: "0,21",
    // hiddenVisible : true,
    // useSubTotal :"true", 
    // useSubTotalData  : "true",
    // oddRowBackgroundColor  : "",                        // excel파일에서 그리드 body의 홀수줄의 배경색
    // evenRowBackgroundColor : "#F5FFF5"                  // excel파일에서 그리드 body의 짝수줄의 배경색
  };
  $c.data.downloadGridViewExcel($p, gr_result, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'N',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_result',gridDownFn:'scwin.excelDown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_result',id:'gr_result',style:'',visibleRowNum:'10',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'구분',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'품목',width:'200',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'성명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'시프트',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdNm',inputType:'text',style:'',value:'',width:'120',colMerge:'true',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',style:'',value:'',width:'200',colMerge:'true',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workDt',inputType:'calendar',style:'',value:'',width:'100',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNm',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shiftClsCd',inputType:'select',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:'',readOnly:'true'},E:[{T:1,N:'w2:choices'}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'txt_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})