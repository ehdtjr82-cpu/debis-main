/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_07_01b.xml 34539 76953f7688a9b0f0f74161e7a23873f1c275a36baf7d31442632caa159d17f2d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_carCls',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true','ev:ondataload':'scwin.ds_results_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'no1',name:'날짜금액식별번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'영업넘버',dataType:'text'}},{T:1,N:'w2:column',A:{id:'idCard',name:'ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d01',name:'1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d02',name:'2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d03',name:'3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d04',name:'4',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d05',name:'5',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d06',name:'6',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d07',name:'7',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d08',name:'8',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d09',name:'9',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d10',name:'10',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d11',name:'11',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d12',name:'12',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d13',name:'13',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d14',name:'14',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d15',name:'15',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d16',name:'16',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d17',name:'17',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d18',name:'18',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d19',name:'19',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d20',name:'20',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d21',name:'21',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d22',name:'22',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d23',name:'23',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d24',name:'24',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d25',name:'25',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d26',name:'26',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d27',name:'27',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d28',name:'28',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d29',name:'29',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d30',name:'30',dataType:'number'}},{T:1,N:'w2:column',A:{id:'d31',name:'31',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkLobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDt1',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDt2',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'carCls',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_carCls'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text',defaultValue:'OP148'}},{T:1,N:'w2:key',A:{id:'fltrCd1',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_carCls',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_carCls',target:'data:json,{"id":"ds_carCls","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.ds.op.wrkrslts.transwrkrslts.RetrieveVehclRunPrscondCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_condition',target:'data:json,{"id":"ds_results","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
scwin.vCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate);
scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); // 회원 점소 데이터
scwin.lobranCd = "";
scwin.wrkLobranCdv = "";
scwin.coClntNov = "";
scwin.type = "";
scwin.param = "";

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // 호출화면에서 넘어오는 파라미터 재정의
  scwin.param = $c.data.getParameter($p);
  scwin.lobranCd = scwin.param.lobranCd;
  scwin.wrkLobranCdv = scwin.param.wrkLobranCdv;
  scwin.coClntNov = scwin.param.coClntNov;
  scwin.type = scwin.param.type;
  const param = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: [1],
    compID: "lc_wrkLobranCd"
  }];
  $c.data.setGauceUtil($p, param);
  scwin.udcOnCompleted();
};

//-------------------------------------------------------------------------
// 기초 점소 세팅, 데이터는 넘어오는데 현재 set이 안됨
//-------------------------------------------------------------------------
setTimeout(scwin.ondataload = function () {
  if (scwin.lobranCd == "" || scwin.lobranCd == undefined) {
    lc_wrkLobranCd.setValue(scwin.loUpperLobranCd);
  } else {
    lc_wrkLobranCd.setValue(scwin.lobranCd);
  }
  dma_carCls.set("fltrCd1", lc_wrkLobranCd.getValue());
  $c.sbm.execute($p, sbm_carCls);
  if (lc_wrkLobranCd.getValue() == "6AA") {
    lc_carCls.setValue("001");
  } else {
    lc_carCls.setValue("003");
  }
  acb_cargoClsCd.setSelectedIndex(0);
  ds_results.setRowPosition(0);
}, 200);

//-------------------------------------------------------------------------
// UDC 기본값 세팅
//-------------------------------------------------------------------------
scwin.udcOnCompleted = function () {
  udc_dptDt.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = async function (e) {
  if (ica_dptDt1.getValue() == "") {
    $c.win.alert($p, "시작일자는 필수 입력 항목입니다.");
    return;
  }
  if (!(await $c.gus.cfIsAfterDate($p, ica_dptDt1.getValue(), ica_dptDt2.getValue()))) {
    $c.win.alert($p, MSG_CM_ERR_039);
    ica_dptDt1.focus();
    return;
  }

  //2개의 월이 겹치는것 체크 할 것! 일단 통과
  let strDate1 = ica_dptDt1.getValue();
  let strDate2 = ica_dptDt2.getValue();
  if (strDate1.substr(4, 2) != strDate2.substr(4, 2)) {
    $c.win.alert($p, "시작월과 종료월이 다릅니다. 1개월 단위로 조회가 가능합니다.");
    return;
  }
  dma_condition.set("dptDt1", ica_dptDt1.getValue());
  dma_condition.set("dptDt2", ica_dptDt2.getValue());
  dma_condition.set("wrkLobranCd", lc_wrkLobranCd.getValue());
  dma_condition.set("clntNo", ed_clntNo.getValue());
  dma_condition.set("carCls", lc_carCls.getValue());
  dma_condition.set("cargoClsCd", acb_cargoClsCd.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 차량추가 버튼 클릭시 f_addVehcle
//-------------------------------------------------------------------------
scwin.btn_addVehcle_onClick = async function (e) {
  let args = new Array();
  args[0] = lc_wrkLobranCd.getValue(); //배차점
  args[1] = lc_carCls.getValue(); //차량구분
  args[2] = acb_cargoClsCd.getValue(); //화물구분

  // 팝업 옵션 설정
  let options = {
    id: "taxPop",
    // type: "broswerPopup",
    popupName: "차량운행현황 - 차량등록",
    width: 1100,
    height: 650
  };

  //상세화면 호출
  let rtn = await $c.win.openPopup($p, "/ui/ds/op/wrkrslts/transwrkrslts/op_304_07_02p.xml", options, args);
  if (rtn != null) {}
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onClick = function (e) {
  $c.gus.cfInitObjects($p, tb_retrieve, [lc_wrkLobranCd, ica_dptDt1, ica_dptDt2]);
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.runExcel = async function () {
  let options = {
    fileName: "차량운행현황" + "(" + lc_carCls.getText(true) + ")",
    sheetName: "차량운행현황.xlsx"
  };
  let infoArr = [];
  if (ds_results.getTotalRow() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, gr_results, options, infoArr);
    }
  }
};

//-------------------------------------------------------------------------
// 점소 변경
//-------------------------------------------------------------------------
scwin.lc_wrkLobranCd_Change = function (info) {
  dma_carCls.set("fltrCd1", lc_wrkLobranCd.getValue());
  $c.sbm.execute($p, sbm_carCls);
};

//-------------------------------------------------------------------------
// 차량구분 변경
//-------------------------------------------------------------------------
scwin.lc_carCls_Change = function (info) {
  if (lc_carCls.getValue() == "B01") {
    //본선인경우 ID CARD 사라짐
    gr_results.setColumnVisible("idCard", false);
  } else {
    gr_results.setColumnVisible("idCard", true);
    // gr_results.mergeCells("bycol")
  }
  if (acb_cargoClsCd.getValue() != "C") {
    gr_results.setColumnVisible("idCard", false);
  }

  //거래처코드 세팅
  ed_clntNo.setValue(ds_carCls.getCellData(lc_carCls.getSelectedIndex(), "fltrCd2"));
  ds_results.removeAll();
  spa_totalRows.setValue(0);
};

//-------------------------------------------------------------------------
// To 날짜 기본세팅
//-------------------------------------------------------------------------
scwin.udc_dptDt_onBlurFrom = function (e) {
  let strDate = ica_dptDt1.getValue();
  let last = strDate.substring(0, 6);
  let lastDate = $c.date.getLastDateOfMonth($p, last);
  udc_dptDt.setInitDate(strDate, last + lastDate);
};

// //-------------------------------------------------------------------------
// // To 날짜 기본세팅
// //-------------------------------------------------------------------------
// scwin.udc_dptDt_onBlurTo = function (e) {
//     let strDate = ica_dptDt1.getValue();
//     let last = strDate.substring(0,6);

//     let lastDate = $c.date.getLastDateOfMonth(last);

//     udc_dptDt.setInitDate(strDate, last+lastDate);
// };

//-------------------------------------------------------------------------
// 데이터 로드 완료시
//-------------------------------------------------------------------------
scwin.ds_results_ondataload = function () {
  let rowCnt = ds_results.getRowCount();
  if (rowCnt == 0) {
    spa_totalRows.setValue(0);
    $c.win.alert($p, MSG_CM_WRN_002);
  }
  for (i = 0; i < ds_results.getRowCount(); i++) {
    if (ds_results.getCellData(i, "no1") == "02") {
      gr_results.setCellDisplayFormat(i, "d01", "#,##0");
      gr_results.setCellDisplayFormat(i, "d02", "#,##0");
      gr_results.setCellDisplayFormat(i, "d03", "#,##0");
      gr_results.setCellDisplayFormat(i, "d04", "#,##0");
      gr_results.setCellDisplayFormat(i, "d05", "#,##0");
      gr_results.setCellDisplayFormat(i, "d06", "#,##0");
      gr_results.setCellDisplayFormat(i, "d07", "#,##0");
      gr_results.setCellDisplayFormat(i, "d08", "#,##0");
      gr_results.setCellDisplayFormat(i, "d09", "#,##0");
      gr_results.setCellDisplayFormat(i, "d10", "#,##0");
      gr_results.setCellDisplayFormat(i, "d11", "#,##0");
      gr_results.setCellDisplayFormat(i, "d12", "#,##0");
      gr_results.setCellDisplayFormat(i, "d13", "#,##0");
      gr_results.setCellDisplayFormat(i, "d14", "#,##0");
      gr_results.setCellDisplayFormat(i, "d15", "#,##0");
      gr_results.setCellDisplayFormat(i, "d16", "#,##0");
      gr_results.setCellDisplayFormat(i, "d17", "#,##0");
      gr_results.setCellDisplayFormat(i, "d18", "#,##0");
      gr_results.setCellDisplayFormat(i, "d19", "#,##0");
      gr_results.setCellDisplayFormat(i, "d20", "#,##0");
      gr_results.setCellDisplayFormat(i, "d21", "#,##0");
      gr_results.setCellDisplayFormat(i, "d22", "#,##0");
      gr_results.setCellDisplayFormat(i, "d23", "#,##0");
      gr_results.setCellDisplayFormat(i, "d24", "#,##0");
      gr_results.setCellDisplayFormat(i, "d25", "#,##0");
      gr_results.setCellDisplayFormat(i, "d26", "#,##0");
      gr_results.setCellDisplayFormat(i, "d27", "#,##0");
      gr_results.setCellDisplayFormat(i, "d28", "#,##0");
      gr_results.setCellDisplayFormat(i, "d29", "#,##0");
      gr_results.setCellDisplayFormat(i, "d30", "#,##0");
      gr_results.setCellDisplayFormat(i, "d31", "#,##0");
      let d01 = Number(ds_results.getCellData(i, "d01"));
      let d02 = Number(ds_results.getCellData(i, "d02"));
      let d03 = Number(ds_results.getCellData(i, "d03"));
      let d04 = Number(ds_results.getCellData(i, "d04"));
      let d05 = Number(ds_results.getCellData(i, "d05"));
      let d06 = Number(ds_results.getCellData(i, "d06"));
      let d07 = Number(ds_results.getCellData(i, "d07"));
      let d08 = Number(ds_results.getCellData(i, "d08"));
      let d09 = Number(ds_results.getCellData(i, "d09"));
      let d10 = Number(ds_results.getCellData(i, "d10"));
      let d11 = Number(ds_results.getCellData(i, "d11"));
      let d12 = Number(ds_results.getCellData(i, "d12"));
      let d13 = Number(ds_results.getCellData(i, "d13"));
      let d14 = Number(ds_results.getCellData(i, "d14"));
      let d15 = Number(ds_results.getCellData(i, "d15"));
      let d16 = Number(ds_results.getCellData(i, "d16"));
      let d17 = Number(ds_results.getCellData(i, "d17"));
      let d18 = Number(ds_results.getCellData(i, "d18"));
      let d19 = Number(ds_results.getCellData(i, "d19"));
      let d20 = Number(ds_results.getCellData(i, "d20"));
      let d21 = Number(ds_results.getCellData(i, "d21"));
      let d22 = Number(ds_results.getCellData(i, "d22"));
      let d23 = Number(ds_results.getCellData(i, "d23"));
      let d24 = Number(ds_results.getCellData(i, "d24"));
      let d25 = Number(ds_results.getCellData(i, "d25"));
      let d26 = Number(ds_results.getCellData(i, "d26"));
      let d27 = Number(ds_results.getCellData(i, "d27"));
      let d28 = Number(ds_results.getCellData(i, "d28"));
      let d29 = Number(ds_results.getCellData(i, "d29"));
      let d30 = Number(ds_results.getCellData(i, "d30"));
      let d31 = Number(ds_results.getCellData(i, "d31"));
      let result = d01 + d02 + d03 + d04 + d05 + d06 + d07 + d08 + d09 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21 + d22 + d23 + d24 + d25 + d26 + d27 + d28 + d29 + d30 + d31;
      ds_results.setCellData(i, "sumAmt", result);
      gr_results.setCellDisplayFormat(i, "sumAmt", "#,##0");
    }
  }
  spa_totalRows.setValue(rowCnt / 2);
};

//-------------------------------------------------------------------------
// 그리드 합계 customFormat
//-------------------------------------------------------------------------
scwin.grid_customFormat = function (data, formattedData, rowIndex, colIndex) {
  let d01 = Number(ds_results.getCellData(rowIndex, "d01"));
  let d02 = Number(ds_results.getCellData(rowIndex, "d02"));
  let d03 = Number(ds_results.getCellData(rowIndex, "d03"));
  let d04 = Number(ds_results.getCellData(rowIndex, "d04"));
  let d05 = Number(ds_results.getCellData(rowIndex, "d05"));
  let d06 = Number(ds_results.getCellData(rowIndex, "d06"));
  let d07 = Number(ds_results.getCellData(rowIndex, "d07"));
  let d08 = Number(ds_results.getCellData(rowIndex, "d08"));
  let d09 = Number(ds_results.getCellData(rowIndex, "d09"));
  let d10 = Number(ds_results.getCellData(rowIndex, "d10"));
  let d11 = Number(ds_results.getCellData(rowIndex, "d11"));
  let d12 = Number(ds_results.getCellData(rowIndex, "d12"));
  let d13 = Number(ds_results.getCellData(rowIndex, "d13"));
  let d14 = Number(ds_results.getCellData(rowIndex, "d14"));
  let d15 = Number(ds_results.getCellData(rowIndex, "d15"));
  let d16 = Number(ds_results.getCellData(rowIndex, "d16"));
  let d17 = Number(ds_results.getCellData(rowIndex, "d17"));
  let d18 = Number(ds_results.getCellData(rowIndex, "d18"));
  let d19 = Number(ds_results.getCellData(rowIndex, "d19"));
  let d20 = Number(ds_results.getCellData(rowIndex, "d20"));
  let d21 = Number(ds_results.getCellData(rowIndex, "d21"));
  let d22 = Number(ds_results.getCellData(rowIndex, "d22"));
  let d23 = Number(ds_results.getCellData(rowIndex, "d23"));
  let d24 = Number(ds_results.getCellData(rowIndex, "d24"));
  let d25 = Number(ds_results.getCellData(rowIndex, "d25"));
  let d26 = Number(ds_results.getCellData(rowIndex, "d26"));
  let d27 = Number(ds_results.getCellData(rowIndex, "d27"));
  let d28 = Number(ds_results.getCellData(rowIndex, "d28"));
  let d29 = Number(ds_results.getCellData(rowIndex, "d29"));
  let d30 = Number(ds_results.getCellData(rowIndex, "d30"));
  let d31 = Number(ds_results.getCellData(rowIndex, "d31"));
  let result = d01 + d02 + d03 + d04 + d05 + d06 + d07 + d08 + d09 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21 + d22 + d23 + d24 + d25 + d26 + d27 + d28 + d29 + d30 + d31;
  if (ds_results.getCellData(rowIndex, "no1") == "02") {
    return result;
  } else {
    return "";
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkLobranCd',style:'width: 150px;',submenuSize:'fixed',objType:'data','ev:onviewchange':'scwin.lc_wrkLobranCd_Change',visibleRowNum:'20',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_dptDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_dptDt1',edToId:'ica_dptDt2',mandatoryFrom:'true',mandatoryTo:'true','ev:onBlur':'scwin.calendar_Blur','ev:onBlurFrom':'scwin.udc_dptDt_onBlurFrom','ev:onBlurTo':'scwin.udc_dptDt_onBlurTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_carCls',style:'width: 150px;',submenuSize:'fixed',ref:'',sortOption:'label','ev:onchange':'scwin.lc_carCls_Change'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_carCls'},E:[{T:1,N:'xf:label',A:{ref:'cdNm'}},{T:1,N:'xf:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cargoClsCd',search:'start',style:'width: 150px;',submenuSize:'fixed',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'6',allowCharCode:'0-9',selectID:'',codeId:'ed_clntNo',popupID:'',validTitle:'',nameId:'ed_clntNm',style:'width:%; height:px; ;visibility:hidden;',id:'udc_clnt'}},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:';visibility:;',type:'button','ev:onclick':'scwin.btn_fieldClear_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:';visibility:;',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'차량운행현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_results',id:'udc_excel',gridUpYn:'N',gridDownFn:'scwin.runExcel',btnUser:'Y',gridDownYn:'Y',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',visibleRowNum:'15',visibleRowNumFix:'true',columnMove:'true',readOnly:'true',setCellInputTypeCustom:'true',fixedColumn:'4'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'날짜금액<br/>식별번호',width:'100',colSpan:'',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'차량정보',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'합계',width:'100',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'일수',width:'2790',colSpan:'31',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column89',value:'영업넘버',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column88',value:'ID',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column87',value:'연락처',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column85',value:'1',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column84',value:'2',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column83',value:'3',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column82',value:'4',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column81',value:'5',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column80',value:'6',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column79',value:'7',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column78',value:'8',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column77',value:'9',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column76',value:'10',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column75',value:'11',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column74',value:'12',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column73',value:'13',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column72',value:'14',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column71',value:'15',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column70',value:'16',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column69',value:'17',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column68',value:'18',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column67',value:'19',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column66',value:'20',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column65',value:'21',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column64',value:'22',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column63',value:'23',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column62',value:'24',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column61',value:'25',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column107',value:'26',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column104',value:'27',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column101',value:'28',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column98',value:'29',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column92',value:'30',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column95',value:'31',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'no1',inputType:'text',style:'',value:'',width:'100',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'idCard',inputType:'text',style:'',value:'',width:'70',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mpNo',inputType:'text',style:'',value:'',width:'100',displayFormat:'###-####-####',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumAmt',inputType:'custom',style:'',value:'',width:'100',textAlign:'right',customFormatter:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'d01',inputType:'custom',style:'',value:'',width:'90',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'d02',inputType:'custom',style:'',value:'',width:'90',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'d03',inputType:'custom',style:'',value:'',width:'90',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'d04',inputType:'custom',style:'',value:'',width:'90',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'d05',inputType:'custom',style:'',value:'',width:'90',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d06',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d07',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d08',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d09',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d10',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d11',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d12',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d13',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d14',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d15',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d16',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d17',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d18',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d19',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d20',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d21',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d22',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d23',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d24',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d25',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d26',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d27',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d28',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d29',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d30',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'custom',style:'',id:'d31',value:'',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'list-box',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt-dot  txt-blue',escape:'false',id:'',label:'차량구분 추가 문의는 IT전략팀에 문의주세요.(공통코드:OP148)',style:''}}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_addVehcle',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_addVehcle_onClick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'차량추가'}]}]}]}]}]}]}]}]}]})