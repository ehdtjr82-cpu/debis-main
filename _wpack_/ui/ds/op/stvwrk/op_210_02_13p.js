/*amd /ui/ds/op/stvwrk/op_210_02_13p.xml 10567 399f583aa054624dc277928bf12c41bd8c4fe44ccab4299566168671a1ec2587 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_condition',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkValue',name:'체크값',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'조직코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkCheif',name:'관리자체크',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true','ev:ondataload':'scwin.ds_result_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'시프트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workDt',name:'일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkCnt',name:'개수',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/ds.op.stvwrk.RetrieveWrkReportDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_Retrieve_submit','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'scwin.sbm_Retrieve_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_210_02_13p 
// 이름     : 상용직근무실적상세팝업
// 경로     : 물류/하역(인천)/현황/상용직 근무실적
// 작 성 자 : 조성빈
// 작 업 일 : 2026-02-04
// 사용계정 : 내부
// 비고     :  ***
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.onpageload = function () {
  var args = $p.getAllParameter().paramData.data;
  var staffNo = args[0].trim();
  var checkValue = args[1];
  var wrkDt = args[2];
  var checkOccp = args[3];
  var checkChief = args[4];
  var workDetail = "";

  // alert("staffNo : " + staffNo + "\n" + "checkValue : " + checkValue + "\n" + "wrkDt : " + wrkDt + "\n" + "occpgrdCd : " + checkOccp + "\n" + "checkCheif : " + checkChief);

  if (checkValue == 1) {
    workDetail = "우천";
  } else if (checkValue == 2) {
    workDetail = "단독원치";
  } else if (checkValue == 3) {
    workDetail = "긴급동원";
  } else if (checkValue == 4) {
    workDetail = "GANG이동";
  }
  txt_title.setValue(workDetail);
  var rowIndex = ds_condition.insertRow();
  ds_condition.setRowPosition(rowIndex);
  ds_condition.setCellData(ds_condition.getRowPosition(), "staffNo", staffNo);
  ds_condition.setCellData(ds_condition.getRowPosition(), "checkValue", checkValue);
  ds_condition.setCellData(ds_condition.getRowPosition(), "wrkDt", wrkDt);
  ds_condition.setCellData(ds_condition.getRowPosition(), "occpgrdCd", checkOccp);
  ds_condition.setCellData(ds_condition.getRowPosition(), "checkCheif", checkChief);
  $c.sbm.execute($p, sbm_Retrieve);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {}, {
    "delay": 50
  });
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.sbm_Retrieve_submit = function (e) {};
scwin.sbm_Retrieve_submitdone = function (e) {
  var rowCnt = ds_result.getRowCount();
  txt_totalRows.setValue(rowCnt);
};
scwin.sbm_Retrieve_submiterror = function (e) {};
scwin.excelDown = function () {
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
    text: "상용직근무실적상세",
    textAlign: "center"
    // , fontSize    : "12pt"
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
    fileName: "상용직근무실적상세.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "상용직근무실적상세",
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
scwin.gridFormatter = function (data) {
  var value = "";
  if (data == "D") {
    value = "주간";
  } else if (data == "N") {
    value = "야간";
  }
  return value;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'txt_title',label:'',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',btnPlusYn:'N',btnUser:'N',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_result',gridDownFn:'scwin.excelDown',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_result',id:'gr_result',style:'',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'사번',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'성명',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'작업장',width:'180',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'시프트',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'일자',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'개수',width:'70',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNo',inputType:'text',style:'',value:'',width:'70',colMerge:'true',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNm',inputType:'text',style:'',value:'',width:'70',colMerge:'true',upperColumn:'staffNo',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',style:'',value:'',width:'180',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shiftClsCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true',displayFormatter:'scwin.gridFormatter',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workDt',inputType:'calendar',style:'',value:'',width:'70',dataType:'date',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkCnt',inputType:'text',style:'',value:'',width:'70',textAlign:'center',displayFormat:'#,###',dataType:'number',readOnly:'true',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column25',value:'',displayMode:'label',expression:'sum("wrkCnt")'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'txt_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})