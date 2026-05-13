/*amd /ui/ps/eq/adjmmgnt/selladjmmgnt/eq_510_01_06b.xml 19329 eff59842c3ab16e24935af7404cc52fbcd88a409e0aa01a205781035c4d8e70b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adjmYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_work_list',saveRemovedData:'true','ev:ondataload':'scwin.ds_fix_work_list_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'planClsCd',name:'계획구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAcctCd',name:'출고계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planAmt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'budgetYm',name:'계획년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_wrkPlCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cmd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'strVal',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'intVal',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkPlCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ps.eq.adjmmgnt.selladjmmgnt.RetrieveCloseCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_fix_work_list","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_fix_work_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_wrkPlCd',action:'/ps.co.RetrievePsCboCmmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_wrkPlCd',target:'data:json,{"id":"ds_wrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Save',action:'/ps.eq.adjmmgnt.selladjmmgnt.RegistCloseCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"action":"modified","id":"ds_fix_work_list","key":"OUT_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Cancel',action:'/ps.eq.adjmmgnt.selladjmmgnt.CancelCloseCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"action":"modified","id":"ds_fix_work_list","key":"OUT_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Cancel_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 마감등록 (eq_510_01_06b)
// 작성자 : 송정희
// 최초작성일자 : 2026-01-07
//-------------------------------------------------------------------------
scwin.fromDate_YMD = ""; // 작업날짜
scwin.fromDate_YMD = WebSquare.date.getCurrentServerDate("yyyyMMdd");
scwin.G_eqHomeClsCd = "";
scwin.wframeParamData = {};
scwin.obj = {};

//-------------------------------------------------------------------------
// onpageload
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  console.log("PGM : 마감등록 (eq_510_01_06b)");
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "lc_homeClsCd",
    opt: {
      "range": "1,EQ"
    }
  },
  // 사업부문
  {
    grpCd: "EQ043",
    compID: "gr_work_pl:planClsCd"
  },
  // 계획구분 
  {
    grpCd: "EQ029",
    compID: "gr_work_pl:outAcctCd"
  } // 출고계정 
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommCode);
};
scwin.callBackCommCode = function () {
  console.log($c.data.getMemInfo($p));
  scwin.G_eqHomeClsCd = $c.data.getMemInfo($p, "eqHomeClsCd"); // 사용자소속구분코드   

  lc_homeClsCd.setValue(scwin.G_eqHomeClsCd);
  scwin.f_RetrieveSecond(lc_homeClsCd.getValue());
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  ed_wrkStDt.setValue(scwin.fromDate_YMD);
};

//-------------------------------------------------------------------------
// 대표정비작업장콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveSecond = function (param1) {
  dma_wrkPlCd.set("cmd", "retriveFixWrkList");
  dma_wrkPlCd.set("strVal", param1);
  dma_wrkPlCd.set("intVal", "");
  $c.sbm.execute($p, sbm_wrkPlCd);
};

//-------------------------------------------------------------------------
// 사업부문 클릭 이벤트
//-------------------------------------------------------------------------
scwin.lc_homeClsCd_onviewchange = function (info) {
  var luxIndex = lc_homeClsCd.getValue();
  // 작업장콤보 조회
  scwin.f_RetrieveSecond(luxIndex);
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_wrk, null);

  //ed_wrkStDt.setValue(scwin.fromDate_YMD); 

  if (scwin.G_eqHomeClsCd = "") {
    lc_homeClsCd.setValue("LO");
  } else {
    lc_homeClsCd.setValue(scwin.G_eqHomeClsCd);
  }
  scwin.f_RetrieveSecond("LO");
};

//-------------------------------------------------------------------------
// 조회조건Clear 버튼 클릭시
//-------------------------------------------------------------------------	
scwin.btn_Clear_onclick = function (e) {
  scwin.f_FieldClear();
};
//-------------------------------------------------------------------------
// 그리드 높이 늘리기
//-------------------------------------------------------------------------
scwin.f_grdHeiht = function (size) {
  objGrd = "gr_work_pl";
  var objGrd = eval(objGrd);
  var strHeight = objGrd.style.height;
  var intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    objGrd.style.height = intHeight + "px";
  }
};

//-------------------------------------------------------------------------
// 조회버튼 클릭 이벤트
//-------------------------------------------------------------------------
scwin.btn_Search_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [tb_wrk], null, true))) return;
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Delete]);
  dma_search.set("adjmYm", ed_wrkStDt.getValue());
  dma_search.set("fixWrkPlCd", lc_repWrkPlCd.getValue());
  $c.sbm.execute($p, sbm_master);
  scwin.setWframe();
};

//-------------------------------------------------------------------------
// iframe호출 (/cm/bc/comnmgnt/closemgnt/zz_640_03_01b.jsp)
//-------------------------------------------------------------------------  
scwin.setWframe = async function () {
  scwin.wframeParamData = {
    "closeYm": ed_wrkStDt.getValue(),
    "closeDd": "00",
    "wrkNo": "EQ01",
    "mgntNo": lc_repWrkPlCd.getValue()
  };
  scwin.obj = {
    "dataObject": {
      "type": "json",
      "name": "wframeParam",
      "data": scwin.wframeParamData
    }
  };
  var ret = await closeLogIframe.setSrc("/ui/cm/bc/comnmgnt/closemgnt/zz_640_03_01b.xml", scwin.obj);
  // SP5에서는 Promise 객체를 return하므로 await 키워드를 붙여야 setSrc호출 이후의 동작이 정상적인 순서로 동작하게 된다.
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_fix_work_list.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let gridColCount = 0;
  for (let i = 0; i < gr_work_pl.getTotalCol(); i++) {
    if (gr_work_pl.getColumnVisible(i) == true) {
      gridColCount++;
    }
  }
  let str = $c.gus.cfGetFormatStr($p, ed_wrkStDt.getValue(), "####-##");
  let str1 = $c.gus.cfGetFormatStr($p, ed_wrkStDt.getValue(), "######");
  let str2 = lc_homeClsCd.getValue();
  let str3 = lc_repWrkPlCd.getValue();
  let startRowIndex = 0;
  let infoArr = [{
    rowIndex: 0,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "마감등록",
    textAlign: "center",
    //정렬
    fontSize: 12,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "#ffffff" // 배경색
  }, {
    rowIndex: 2,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "마감년월 [" + str + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "#ffffff" // 배경색
  }, {
    rowIndex: 3,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "사업부문 [" + str2 + "], 대표정비작업장 [" + str3 + "] ",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "#ffffff" // 배경색
  }];
  const options = {
    fileName: "마감등록.xlsx",
    //    sheetName: "마감년월" + str1 + "_" + str2+ "_" + str3 ,
    sheetName: "마감등록",
    startRowIndex: 4,
    startColumnIndex: 0,
    type: 1
  };
  await $c.data.downloadGridViewExcel($p, gr_work_pl, options, infoArr);
};

//-------------------------------------------------------------------------
// 마감등록버튼 클릭시
//-------------------------------------------------------------------------
scwin.btn_Create_onclick = function (e) {
  scwin.f_Create();
};

//-------------------------------------------------------------------------
// 마감등록
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  $c.gus.cfDisableBtn($p, [btn_Create, btn_Delete]);
  $c.sbm.execute($p, sbm_Save);
};

//-------------------------------------------------------------------------
// 마감취소 버튼 클릭시
//-------------------------------------------------------------------------	
scwin.btn_Delete_onclick = function (e) {
  scwin.f_Delete();
};

//-------------------------------------------------------------------------
// 마감취소
//-------------------------------------------------------------------------	
scwin.f_Delete = function () {
  $c.gus.cfDisableBtn($p, [btn_Create, btn_Delete]);
  $c.sbm.execute($p, sbm_Cancel);
};

//-------------------------------------------------------------------------
// 마감내역 ondataload 이벤트
//-------------------------------------------------------------------------	
scwin.ds_fix_work_list_ondataload = function () {
  let rowCnt = ds_fix_work_list.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, "미마감 상태입니다.");
    return;
  }
  if (rowCnt == 0) {
    $c.gus.cfDisableBtn($p, [btn_Create, btn_Delete]);
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  }
  if (rowCnt > 0) {
    gr_work_pl.setFocusedCell(0, "planClsCd", true);
  }
};
scwin.sbm_Save_submitdone = async function (e) {
  $c.gus.cfEnableAllBtn($p);
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, '마감등록 되었습니다');
  scwin.f_Retrieve();
};
scwin.sbm_Cancel_submitdone = async function (e) {
  $c.gus.cfEnableAllBtn($p);
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, '마감취소 되었습니다.');
  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_wrk',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_wrkStDt',style:'',ref:'data:dma_search.adjmYm',validExp:'일자:yes:'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 100px',submenuSize:'fixed',ref:'data:dma_search.homeClsCd','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대표정비작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_repWrkPlCd',style:'width: 200px',submenuSize:'fixed',ref:'data:dma_search.fixWrkPlCd',sortMethod:'ascending',sortOption:'value',visibleRowNum:'10'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_wrkPlCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.btn_Clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.btn_Search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_work_pl',gridUpYn:'N',gridDownUserAuth:'X',btnPlusYn:'Y',grdDownOpts:'{"fileName": "마감등록.xlsx", "sheetName": "마감등록", "type":"1"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_fix_work_list',id:'gr_work_pl',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'계획구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'출고계정',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'금액',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'planClsCd',inputType:'select',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'outAcctCd',inputType:'select',style:'',value:'',width:'100',selectedData:'false',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'w2:wframe',A:{id:'closeLogIframe',src:'/ui/cm/bc/comnmgnt/closemgnt/zz_640_03_01b.xml',style:'',class:'row-gap-8'}},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',style:'',type:'button','ev:onclick':'scwin.btn_Create_onclick',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'마감등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'마감취소'}]}]}]}]}]}]}]}]}]})