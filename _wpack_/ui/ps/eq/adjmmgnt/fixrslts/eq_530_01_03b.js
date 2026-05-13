/*amd /ui/ps/eq/adjmmgnt/fixrslts/eq_530_01_03b.xml 27563 590d300a8b380d521c5c0c108fe0b6fd660d2f740d47c15dc772a39a581173ee */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fix_work_list'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adjmYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'capExpdYn',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adjmKnd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkNo',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_work_list',saveRemovedData:'true','ev:ondataload':'scwin.ds_fix_work_list_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'대표작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkNo',name:'작업장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAcctCd',name:'출고계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmYm',name:'작업종료년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adjmKndCd',name:'정상종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlAccdCd',name:'정비작업장귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmStsCd',name:'정산상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_wrkPlCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cmd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'strVal',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'intVal',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkPLCd',saveRemovedData:'true','ev:ondataload':'scwin.ds_fixWrkPLCd_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_fix_work_list',action:'/ps.eq.adjmmgnt.selladjmmgnt.RetrieveStoredgoodsConsumptionSustitutionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_fix_work_list","key":"IN_DS1"},{"id":"ds_fix_work_list","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_fix_work_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Save',action:'/ps.eq.adjmmgnt.selladjmmgnt.RegistStoredgoodsSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_fix_work_list","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Save_submitdone',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Delete',action:'/ps.eq.adjmmgnt.selladjmmgnt.CancelStoredgoodsSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_fix_work_list","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_wrkPlCd',action:'/ps.co.RetrievePsCboCmmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_wrkPlCd","key":"IN_DS1"}',target:'data:json,{"id":"ds_wrkPLCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 저장품 부품비 정산 내역 (eq_530_01_03b)
// 작성자 : 송정희
// 최초작성일자 : 2026-01-13
//-------------------------------------------------------------------------
scwin.fromDate_YMD = ""; // 작업날짜
scwin.fromDate_YMD = WebSquare.date.getCurrentServerDate("yyyyMMdd");
scwin.G_eqHomeClsCd = "";
scwin.G_fixWrkPlCd = "";

//-------------------------------------------------------------------------
// onpageload
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("PGM : 저장품 부품비 정산 내역 (eq_530_01_03b)");
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "lc_homeClsCd",
    opt: {
      "range": "1,EQ"
    }
  },
  // 사업부문 - 소속정산
  {
    grpCd: "EQ029",
    compID: "gr_work_pl:outAcctCd"
  },
  // 출고계정
  {
    grpCd: "EQ906",
    compID: "gr_work_pl:adjmStsCd"
  } // 정산상태adjmKndCd
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};
scwin.callBackCommonCode = function () {
  console.log($c.data.getMemInfo($p));
  scwin.G_eqHomeClsCd = $c.data.getMemInfo($p, "eqHomeClsCd"); // 사용자소속구분  
  scwin.G_fixWrkPlCd = $c.data.getMemInfo($p, "fixWrkPlCd"); // 사용자대표정비작업장구분   

  lc_homeClsCd.setValue(scwin.G_eqHomeClsCd);
  if ($c.gus.cfIsNull($p, scwin.G_eqHomeClsCd)) {
    lc_homeClsCd.setSelectedIndex(0);
  }
  scwin.f_RetrieveSecond("LO");
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  ed_wrkStDt.setValue(scwin.fromDate_YMD);
  lc_wrkPlCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 대표정비작업장콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveSecond = function (param1) {
  console.log("param1 : " + param1);
  dma_wrkPlCd.set("cmd", "retriveFixWrkList");
  dma_wrkPlCd.set("strVal", param1);
  dma_wrkPlCd.set("intVal", "");
  $c.sbm.execute($p, sbm_wrkPlCd);
};

//-------------------------------------------------------------------------
// 작업장콤보 선택시
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
  lc_homeClsCd.setValue("");
  ed_wrkStDt.setValue(scwin.fromDate_YMD);
  scwin.f_RetrieveSecond("LO");
};

//-------------------------------------------------------------------------
// 조회조건 Clear
//-------------------------------------------------------------------------
scwin.btn_Clear_onclick = function (e) {
  scwin.f_FieldClear();
};

//-------------------------------------------------------------------------
// 조회버튼 클릭시
//-------------------------------------------------------------------------
scwin.btn_Search_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  if (!$c.gus.cfValidate($p, tb_wrk)) return;
  dma_fix_work_list.set("adjmYm", ed_wrkStDt.getValue());
  dma_fix_work_list.set("fixWrkPlCd", lc_wrkPlCd.getValue());
  dma_fix_work_list.set("homeClsCd", lc_homeClsCd.getValue());
  dma_fix_work_list.set("clntNo", ""); //거래처코드
  dma_fix_work_list.set("capExpdYn", ""); //자본적지출여부
  dma_fix_work_list.set("adjmKnd", ""); //정산종류
  dma_fix_work_list.set("fixWrkNo", ""); //정비작업번호

  $c.sbm.execute($p, sbm_fix_work_list);
  //var strPath = "/ps.eq.adjmmgnt.selladjmmgnt.RetrieveStoredgoodsConsumptionSustitutionCMD.do";    
};

//-------------------------------------------------------------------------
// 저장품 부품비 정산 내역 ondataload
//-------------------------------------------------------------------------
scwin.ds_fix_work_list_ondataload = function () {
  let rowCnt = ds_fix_work_list.getTotalRow();
  totalRows.setValue(rowCnt);
  gr_work_pl.setFocusedCell(0, 0);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    var t_slipDt = ds_fix_work_list.getCellData(0, "slipDt");
    ed_slipDt.setValue($c.gus.cfGetFormatStr($p, t_slipDt, "####/##/##"));
    if (ds_fix_work_list.getCellData(0, "slipNo") != "") {
      btn_Save.setDisabled(true);
      btn_Delete.setDisabled(false);
    } else {
      btn_Save.setDisabled(false);
      btn_Delete.setDisabled(true);
    }
    for (var i = 0; i < ds_fix_work_list.getRowCount(); i++) {
      ds_fix_work_list.setCellData(i, "fixWrkPlCd", lc_wrkPlCd.getValue());
      if (ds_fix_work_list.getCellData(i, "slipNo") > 0) {
        gr_work_pl.setCellStyle(i, "slipNo", "text-decoration", "underline");
        gr_work_pl.setCellStyle(i, "slipNo", "cursor", "pointer");
        gr_work_pl.setCellColor(i, "slipNo", "blue");
      }
      if ($c.gus.cfIsNull($p, ds_fix_work_list.getCellData(i, "slipNo"))) {
        ds_fix_work_list.setCellData(i, "adjmStsCd", "3");
      } else {
        ds_fix_work_list.setCellData(i, "adjmStsCd", "1");
      }
    }
  }
  if ($c.gus.cfIsNull($p, ds_fix_work_list.getCellData(0, "slipNo"))) {
    var startDt = ed_wrkStDt.getValue();
    var endDt = startDt + $c.date.getLastDateOfMonth($p, startDt);
    ed_slipDt.setValue(endDt);
  }
};

//-------------------------------------------------------------------------
//  전표생성
//-------------------------------------------------------------------------
scwin.f_create_slip = async function () {
  var fCreate = false;

  // 전표생성 확인 로직 추가 [외주수선비 정산내역생성 (eq_510_01_01b) 참조]
  for (i = 0; i < ds_fix_work_list.getRowCount(); i++) {
    ds_fix_work_list.setCellData(i, "slipDt", ed_slipDt.getValue());
    if (ds_fix_work_list.getCellData(i, "slipNo") == "") {
      fCreate = true;
    }
  }
  if (!fCreate) {
    await $c.win.alert($p, "생성할 데이터가 없습니다.");
    return;
  }
  $c.gus.cfDisableBtn($p, [btn_Save, btn_Delete]);
  $c.sbm.execute($p, sbm_Save);
};

//-------------------------------------------------------------------------
//  전표삭제 
//-------------------------------------------------------------------------
scwin.f_cancel_slip = async function () {
  var fCancel = false;
  for (i = 0; i < ds_fix_work_list.getRowCount(); i++) {
    if (ds_fix_work_list.getCellData(i, "slipNo") != "") {
      fCancel = true;
    }
  }
  if (!fCancel) {
    await $c.win.alert($p, "취소할 데이터가 없습니다.");
    return;
  }
  $c.gus.cfDisableBtn($p, [btn_Save, btn_Delete]);
  $c.sbm.execute($p, sbm_Delete);
};

//-------------------------------------------------------------------------
//  회계전표발행 
//-------------------------------------------------------------------------
scwin.f_OzReport = function (row) {
  var param = "";
  for (i = 0; i < ds_fix_work_list.getRowCount(); i++) {
    if (ds_fix_work_list.getCellData(i, "slipNo") != "") {
      param = param + "," + ds_fix_work_list.getCellData(i, "slipNo");
    }
  }
  let data = {
    reportName: "/ac/fi/gnrlaccount/slipmgnt/fi_201_04_02p.ozr",
    odiParam: {
      slipNo: param.substring(1) // 확인필요
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 100,
      // 배율 설정
      mode: "silent"
    },
    formParam: {}
  };
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = function () {
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
  let str = $c.gus.cfGetFormatStr($p, ed_wrkStDt.getValue(), "####/##");
  let str1 = $c.gus.cfGetFormatStr($p, ed_wrkStDt.getValue(), "######");
  let startRowIndex = 0;
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "저장품 부품비 정산 내역",
    textAlign: "center",
    fontSize: 12,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }, {
    rowIndex: 2,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "정산년월 [" + str + "]",
    textAlign: "left",
    fontSize: 10,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }];
  const options = {
    fileName: "저장품 부품비 정산 내역.xlsx",
    sheetName: "저장품 부품비 정산 내역",
    startRowIndex: 0,
    startColumnIndex: 0,
    type: 1
  };
  $c.data.downloadGridViewExcel($p, gr_work_pl, options, {});
};
scwin.gr_work_pl_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo" && ds_fix_work_list.getCellData(rowIndex, "slipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_fix_work_list.getCellData(rowIndex, "slipNo"));
  }
};
scwin.sbm_Save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    $c.gus.cfEnableAllBtn($p);
    return;
  }
  $c.win.alert($p, "전표생성 되었습니다");
  $c.gus.cfEnableAllBtn($p);
  scwin.f_Retrieve();
};
scwin.sbm_Delete_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    $c.gus.cfEnableAllBtn($p);
    return;
  }
  $c.win.alert($p, " 전표취소 되었습니다.");
  $c.gus.cfEnableAllBtn($p);
  scwin.f_Retrieve();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_create_slip();
};
scwin.btn_Delete_onclick = function (e) {
  scwin.f_cancel_slip();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_wrk',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정산년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_wrkStDt',style:'',ref:'data:dma_fix_work_list.adjmYm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 150px;',submenuSize:'fixed','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange',ref:'data:dma_fix_work_list.homeClsCd',emptyItem:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표정비작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_fix_work_list.fixWrkPlCd',sortMethod:'ascending',sortOption:'value',visibleRowNum:'10'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_wrkPLCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.btn_Clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.btn_Search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'전표일자',class:''}},{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_slipDt',class:'',readOnly:'true',displayFormat:'yyyy/MM/dd',dataType:'date'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_work_pl',gridUpYn:'N',gridDownUserAuth:'X',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_fix_work_list',id:'gr_work_pl',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_work_pl_oncellclick',rowStatusVisible:'true',rowStatusWidth:'40'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'h_fixWrkPlCd',inputType:'text',style:'',value:'대표작업장',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_acctDeptCd',inputType:'text',style:'',value:'귀속부서코드',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_fixWrkNo',inputType:'text',style:'',value:'작업장번호',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_acctDeptNm',inputType:'text',style:'',value:'귀속부서명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_outAcctCd',inputType:'text',style:'',value:'출고계정',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_clntNo',inputType:'text',style:'',value:'거래처코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_clntNm',inputType:'text',style:'',value:'거래처명',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_crn',inputType:'text',style:'',value:'사업자등록번호',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_adjmYm',inputType:'text',style:'',value:'작업종료년월',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'h_amt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'h_slipDt',value:'전표일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h_seq',value:'순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'h_adjmKndCd',value:'정산종류코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'h_wrkEndDt',value:'종료일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_adjmStsCd',value:'정산상태코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'h_slipNo',value:'전표번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlCd',inputType:'text',style:'',value:'',width:'120',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'130',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkNo',inputType:'text',style:'',value:'',width:'120',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outAcctCd',inputType:'select',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'120',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',style:'',value:'',width:'150',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adjmYm',inputType:'calendar',style:'',value:'',width:'130',displayFormat:'yyyy/MM',calendarValueType:'yearMonth',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'amt',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'slipDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'adjmKndCd',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'wrkEndDt',value:'',displayMode:'label',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',style:'',id:'adjmStsCd',value:'',displayMode:'value delim label',readOnly:'true',noDisabledOnReadOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'f_fixWrkPlCd',value:'',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'f_acctDeptCd',value:'',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'f_fixWrkNo',value:'',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'f_acctDeptNm',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'f_outAcctCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'f_clntNo',value:'',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'f_clntNm',value:'',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'f_crn',value:'',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'f_adjmYm',value:'',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'f_amt',value:'',displayMode:'label',expression:'sum(\'amt\')',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'f_slipDt',value:'',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',value:'',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'f_adjmKndCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'f_wrkEndDt',value:'',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'f_adjmStsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'f_slipNo',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표 생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표 취소'}]}]}]}]}]}]}]}]}]})