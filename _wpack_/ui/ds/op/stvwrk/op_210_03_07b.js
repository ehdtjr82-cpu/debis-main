/*amd /ui/ds/op/stvwrk/op_210_03_07b.xml 18592 854b41dd5326a5f394a0ec7f5cc6a914f75d62d51ee511dd436a019421dd30e0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ground',saveRemovedData:'true','ev:ondataload':'scwin.ds_ground_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumCnt',name:'개수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_combo1_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveGroundWrkReportCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_ground","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ground","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_retrieve_submit','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobranCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_combo1_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_210_03_07b 
// 이름     : 상용직 육상작업집계
// 경로     : 물류/하역(인천)/현황/
// 작 성 자 : 조성빈
// 작 업 일 : 2026-01-29
// 사용계정 : 내부
// 비고     :  ***
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.onpageload = async function () {
  scwin.lobranCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "lobranCd")) ? "" : $c.data.getMemInfo($p, "lobranCd"); // 물류 점소 코드
  scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환

  scwin.v_workClsCd = "";
  scwin.bOnPopUp = false;

  // var curdate = scwin.vCurDate;
  // var strDate = curdate; 
  // var year = strDate.substr(0,4);				
  // var month = strDate.substr(4,2)-1;
  // var day = strDate.substr(6,2);
  // var date = new Date(year, month, day);
  // var bfyday = new Date(Date.parse(date) - 2*1000 * 60 * 60 * 24);  //2days before
  // var bfday = new Date(Date.parse(date)   - 1000 * 60 * 60 * 24);  //  1day before
  // var tmday = new Date(Date.parse(date)  + 1000 * 60 * 60 * 24);  //after 1day
  // var atmday = new Date(Date.parse(date) + 2*1000 * 60 * 60 * 24);  //after 2days
  // var dd1 = bfyday.getDate().toString();
  // var dd2 = bfday.getDate().toString();
  // var dd3 = tmday.getDate().toString();
  // var dd4 = atmday.getDate().toString();
  // if(dd1 < 10){
  // 	dd1 = "0"+dd1;				
  // }
  // if(dd2 < 10){
  // 	dd2 = "0"+dd2;				
  // }
  // if(dd3 < 10){
  // 	dd3 = "0"+dd3;	
  // }			
  // if(dd4 < 10){
  // 	dd4 = "0"+dd4;				
  // }
  // gr_master.ColumnProp('a','Name')=dd1;
  // gr_master.ColumnProp('b','Name')=dd2;
  // gr_master.ColumnProp('c','Name')=curdate.substring(6,8);
  // gr_master.ColumnProp('d','Name')=dd3;
  // gr_master.ColumnProp('e','Name')=dd4;

  var bfyday = $c.date.addDate($p, scwin.vCurDate, -2).substring(6, 8);
  var bfday = $c.date.addDate($p, scwin.vCurDate, -1).substring(6, 8);
  var tmday = $c.date.addDate($p, scwin.vCurDate, 1).substring(6, 8);
  var atmday = $c.date.addDate($p, scwin.vCurDate, 2).substring(6, 8);
  gr_master.setHeaderValue("a", bfyday);
  gr_master.setHeaderValue("b", bfday);
  gr_master.setHeaderValue("c", scwin.vCurDate.substring(6, 8));
  gr_master.setHeaderValue("d", tmday);
  gr_master.setHeaderValue("e", atmday);
  ds_combo1_search.set("sysCd", "BerthNonUsableEBC");
  ds_combo1_search.set("queryId", "retriveLobranCodeList");
  var rs = await $c.sbm.execute($p, sbm_lobranCd);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_combo1.setJSON(rs.responseJSON.GAUCE);
    var options = {};
    options.sortIndex = "code";
    options.sortOrder = "1";
    ds_combo1.multisort(options);
    scwin.f_SetDefaultData();
    $p.setTimeout(function () {
      // acb_lobranCd.setValue("4AA");
      // ica_wrkDt.setValue("201704");
    }, {
      "delay": 50
    });
  }
  ;
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {}, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  ica_wrkDt.setValue(scwin.vCurDate);
  acb_lobranCd.setValue(scwin.lobranCd);
  acb_lobranCd.focus();
};

//-------------------------------------------------------------------------
// 상용직 육상작업집계조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 검색조건 필수 입력 체크
  if (!(await $c.gus.cfValidate($p, [acb_lobranCd, ica_wrkDt]))) {
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.excelDown = function () {
  // // Title
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
  // // 검색조건
  // //var vDay = "점소 : " + acb_lobranCd.ValueOfIndex("lobranNm",acb_lobranCd.Index) + " : "
  // //         + "작업일자 : " + ica_wrkDt.text + "~" + ed_wrkEndDt.text;
  // // var vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";
  // //argGrid.SetExcelTitle(1, "value:" + vDay.replace(/:/g,'|').replace(/;/g,'') + vSearchOption );
  // cfGridToExcel(argGrid, argTitle, argTitle+".xls", 4+8+16);

  var argGridTotalCol = 0;
  for (var i = 0; i < gr_master.getTotalCol(); i++) {
    if (gr_master.getColumnVisible(i)) {
      argGridTotalCol++;
    }
  }
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: argGridTotalCol,
    text: "상용직 육상작업집계",
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
    fileName: "상용직 육상작업집계.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "상용직 육상작업집계",
    type: "1",
    startRowIndex: 2
    // removeColumns: "0,21",
    // hiddenVisible : true,
    // useSubTotal :"true", 
    // useSubTotalData  : "true",
    // oddRowBackgroundColor  : "",                        // excel파일에서 그리드 body의 홀수줄의 배경색
    // evenRowBackgroundColor : "#F5FFF5"                  // excel파일에서 그리드 body의 짝수줄의 배경색
  };
  $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
};

//-------------------------------------------------------------------------
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};
scwin.f_openDetailPopup = function (row, colid) {
  var args = new Array();
  args[0] = ds_ground.getCellData(row, "occpgrdCd");
  args[1] = ds_ground.getCellData(row, "rmk");
  args[2] = acb_lobranCd.getValue();
  args[3] = ica_wrkDt.getValue();
  if (ds_ground.getCellData(row, "rmk") == "" && ds_ground.getCellData(row - 1, "occpgrdNm") != "합계") {
    args[0] = ds_ground.getCellData(row - 1, "occpgrdCd");
  }
  /*
         else if(ds_ground.NameValue(row,"rmk") == "" 	&& ds_ground.NameValue(row,"occpgrdNm") == "합계"){
             
         }
  */
  // window.showModalDialog('/ds/op/stvwrk/op_210_03_07p.jsp?paramTitle=상용직육상작업집계상세팝업',args,"dialogWidth:700px; dialogHeight:370px; status:No");	

  let win_url = "/ui/ds/op/stvwrk/op_210_03_07p.xml";
  let opts = {
    id: "detailPop",
    popupName: "상용직육상작업집계상세팝업",
    modal: true,
    type: "browserPopup",
    width: 1420,
    height: 546,
    title: "상용직육상작업집계상세팝업"
  };
  $c.win.openPopup($p, win_url, opts, args);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_retrieve_submit = function (e) {
  ds_condition.set("lobranCd", acb_lobranCd.getValue());
  ds_condition.set("wrkDt", ica_wrkDt.getValue());
};
scwin.sbm_retrieve_submitdone = function (e) {
  var rowCnt = ds_ground.getRowCount();
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  }
  txt_totalRows.setValue(rowCnt);
  gr_master.setColumnStyle("sumCnt", "text-decoration", "underline");
  gr_master.setColumnStyle("sumCnt", "cursor", "pointer");
};
scwin.sbm_retrieve_submiterror = function (e) {};
scwin.gr_master_oncelldblclick = function (row, columnIndex, colid) {
  if (colid == "sumCnt" && ds_ground.getCellData(row, "sumCnt") > 0) {
    scwin.f_openDetailPopup(row, colid);
  }
};
scwin.gr_master_onsubtotaldblclick = function (info) {
  // var sumCnt = 0;
  // for (var i = info.startRowIndex ; i <= info.endRowIndex; i++){
  //     sumCnt += parseInt(ds_ground.getCellData(i, "sumCnt"));
  // }
  // if (info.colID == "sub_sumCnt" && sumCnt > 0 ){
  // 	scwin.f_openDetailPopup(info.endRowIndex, info.colID);
  // }

  var args = new Array();
  args[0] = ds_ground.getCellData(info.startRowIndex, "occpgrdCd");
  args[1] = "";
  args[2] = acb_lobranCd.getValue();
  args[3] = ica_wrkDt.getValue();
  let win_url = "/ui/ds/op/stvwrk/op_210_03_07p.xml";
  let opts = {
    id: "detailPop",
    popupName: "상용직육상작업집계상세팝업",
    modal: true,
    type: "browserPopup",
    width: 840,
    height: 406,
    title: "상용직육상작업집계상세팝업"
  };
  $c.win.openPopup($p, win_url, opts, args);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req ',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:' w200',editType:'select',id:'acb_lobranCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',mandatory:'true',title:'점소'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo1'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ica_wrkDt',style:'',objType:'Data',mandatory:'true',title:'작업일자',displayFormat:'yyyy/MM'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상용직 육상작업집계',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_master',gridDownFn:'scwin.excelDown',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_ground',id:'gr_master',style:'','ev:oncelldblclick':'scwin.gr_master_oncelldblclick',visibleRowNum:'16',visibleRowNumFix:'true','ev:onsubtotaldblclick':'scwin.gr_master_onsubtotaldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'구분코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'품목',width:'500'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'개수',width:'100',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdCd',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdNm',inputType:'text',width:'100',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',width:'500',textAlign:'left',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumCnt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###[floor]',readOnly:'true',excelCellType:'number'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'occpgrdNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'500',inputType:'text',style:'',id:'column32',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'text-decoration : underline;cursor : pointer;',id:'sub_sumCnt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###[floor]',expression:'sum(\'sumCnt\')'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'500',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column27',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###[floor]',expression:'sum(\'sumCnt\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})