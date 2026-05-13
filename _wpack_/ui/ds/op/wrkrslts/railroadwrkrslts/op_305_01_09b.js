/*amd /ui/ds/op/wrkrslts/railroadwrkrslts/op_305_01_09b.xml 50085 dcb5fa498d112aff3fffc7cae630d332a18aafe46a72cd2d58b6e81f438cdc71 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dptDtFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDtTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transNmCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adminfrtcarYn',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadCostList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'sealNo',name:'봉인번호',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일자',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'dptStn',name:'출발역',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'arvStn',name:'도착역',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'adminfrtcarYn',name:'화차구분',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'trnNo',name:'열차번호',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'frtcarNo',name:'화차번호',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'transNmClntCd',name:'운송명의',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'transNmCd',name:'운송명의',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'cntrTypShowCd',name:'규격',dataType:'',defaultValue:'',encYN:'',ignoreStatus:''}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'Type',dataType:'',defaultValue:'',encYN:'',ignoreStatus:''}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'E/F',dataType:'',defaultValue:'',encYN:'',ignoreStatus:''}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'mchtNm',name:'화주명',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구처',dataType:'',defaultValue:'',encYN:'',ignoreStatus:'',importFormatter:'',length:''}},{T:1,N:'w2:column',A:{id:'sellTrans',name:'운송료(매출)',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pchsSum',name:'매입합계',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pchsTrans',name:'하불임',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'pchsTransR',name:'철송임',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'pchsOprR',name:'철송조작료',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pchsTestR',name:'철송검수비',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pchsKoreoR',name:'고려차량',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pchsJeOnoffR',name:'자가영업상차료',dataType:''}},{T:1,N:'w2:column',A:{id:'costRate',name:'원가율',dataType:'',defaultValue:'',encYN:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadCostSumList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'teu',name:'구분',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'teuCount',name:'갯수',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'sellTrans',name:'운송료(매출)',dataType:''}},{T:1,N:'w2:column',A:{id:'pchsTrans',name:'하불임',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'pchsTransR',name:'철송임',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'pchsOprR',name:'철송조작료',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pchsTestR',name:'철송검수비',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pchsKoreoR',name:'(주)고려차량',dataType:''}},{T:1,N:'w2:column',A:{id:'pchsJeOnoffR',name:'자가영업 상차료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSum',name:'매입합계',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'costRate',name:'원가율',dataType:'',defaultValue:'',encYN:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadCostClntList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count20',name:'20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count40',name:'40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teuCount',name:'TEU',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellTrans',name:'운송료(매출)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSum',name:'매입합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costRate',name:'원가율',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveSummary',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveRailroadCostSummaryListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Retrieve","key":"IN_DS1"},{"id":"ds_RailroadCostSumList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RailroadCostSumList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveSummary_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveRailroadCostListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Retrieve","key":"IN_DS1"},{"id":"ds_RailroadCostList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RailroadCostList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveClnt',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveRailroadCostSummaryClntListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Retrieve","key":"IN_DS1"},{"id":"ds_RailroadCostClntList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RailroadCostClntList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveClnt_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.dateStr = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.selectCol = "";

/** ***********************************************************************
 *  화면에서 기본 로딩시 발생하는 함수 START
 ************************************************************************ */
//-------------------------------------------------------------------------
// 화면 로딩시 호출 되는 함수
//------------------------------------------------------------------------- 
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP147",
    compID: "lc_transNmCd"
  } //반출입구분
  ];
  $c.data.setCommonCode($p, codeOptions);
  tab.setSelectedTabIndex(0);
};
//-------------------------------------------------------------------------
// 화면 에 UDC 컴포넌트가 모두 로딩 완료시 호출 되는 함수
//------------------------------------------------------------------------- 
scwin.onUdcCompleted = function () {
  //    udc_topGrdBtnClnt.hide();
  scwin.f_FieldClear();
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
  //현재날짜 셋팅
  ed_dptDtFrom.setValue(scwin.dateStr);
  ed_dptDtTo.setValue(scwin.dateStr);
  ed_dptWrkPlCd.setValue("");
  ed_dptStnNm.setValue("");
  ed_arvWrkPlCd.setValue("");
  ed_arvStnNm.setValue("");
  ed_bilgClntNo.setValue("");
  ed_bilgClntNm.setValue("");
};

/** ***********************************************************************
 *  화면에서 기본 로딩시 발생하는 함수 END
 ************************************************************************ */
scwin.f_selectTabMenu = function (idx = 0) {
  switch (idx) {
    case 0:
      // 컨테이너별
      //        	udc_topGrdBtnClnt.hide();
      //        	udc_topGrdBtnCnt.show();
      ds_RailroadCostList.removeAll();
      $c.sbm.execute($p, sbm_Retrieve);
      break;
    case 1:
      // 거래처별
      //			udc_topGrdBtnClnt.show();
      //			udc_topGrdBtnCnt.hide();
      ds_RailroadCostClntList.removeAll();
      $c.sbm.execute($p, sbm_RetrieveClnt);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //출발일자 validate 체크
  let ret = await $c.gus.cfValidate($p, [ed_dptDtFrom, ed_dptDtTo]);
  if (!ret) {
    return false;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_dptDtFrom.getValue(), ed_dptDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_dptDtFrom.focus();
    return;
  }
  $c.sbm.execute($p, sbm_RetrieveSummary);
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운 START
//-------------------------------------------
scwin.f_runExcel = async function (varGrNm) {
  const totCnt = ds_RailroadCostSumList.getRowCount();
  if (totCnt != 0) {
    cfrm = confirm("EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: "철송원가율요약.xlsx",
        sheetName: "철송원가율요약"
      };
      await $c.data.downloadGridViewExcel($p, gr_RailroadCostSumList, options);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.f_runExcelCost = async function () {
  if (ds_RailroadCostList.getRowCount() <= 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
    return false;
  }
  const options = {
    fileName: "컨테이너별.xlsx",
    sheetName: "컨테이너별"
  };
  await $c.data.downloadGridViewExcel($p, gr_RailroadCostList, options);
};
scwin.f_runExcelCostClnt = async function () {
  if (ds_RailroadCostClntList.getRowCount() <= 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
    return false;
  }
  const options = {
    fileName: "거래처별.xlsx",
    sheetName: "거래처별"
  };
  await $c.data.downloadGridViewExcel($p, gr_RailroadCostClntList, options);
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운 START
//-------------------------------------------

//요약
scwin.sbm_RetrieveSummary_submitdone = async function (e) {
  var rowcount = ds_RailroadCostSumList.getRowCount();
  for (i = 0; i < rowcount; i++) {
    let val = ds_RailroadCostSumList.getCellData(i, "costRate"); // 기존 값 읽기
    let newVal = Math.round(val * 100 * 10) / 10; // *100 하고 소수1자리 반올림
    ds_RailroadCostSumList.setCellData(i, "costRate", newVal); // 저장
  }
  totalRows1.setValue(rowcount);
  scwin.f_selectTabMenu(0);
  await tab.setActiveTab(0);
};

//컨테이너별
scwin.sbm_Retrieve_submitdone = function (e) {
  if (ds_RailroadCostList.getRowCount() < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  totalRows2.setValue(ds_RailroadCostList.getRowCount());
  var rowcount = ds_RailroadCostList.getRowCount();
  for (i = 0; i < rowcount; i++) {
    let val = ds_RailroadCostList.getCellData(i, "costRate"); // 기존 값 읽기
    let newVal = Math.round(val * 100 * 10) / 10; // *100 하고 소수1자리 반올림
    ds_RailroadCostList.setCellData(i, "costRate", newVal); // 저장
  }
};

//거래처별
scwin.sbm_RetrieveClnt_submitdone = function (e) {
  totalRows3.setValue(ds_RailroadCostClntList.getRowCount());
  var rowcount = ds_RailroadCostClntList.getRowCount();
  for (i = 0; i < rowcount; i++) {
    let val = ds_RailroadCostClntList.getCellData(i, "costRate"); // 기존 값 읽기
    let newVal = Math.round(val * 100 * 10) / 10; // *100 하고 소수1자리 반올림
    ds_RailroadCostClntList.setCellData(i, "costRate", newVal); // 저장
  }
};
scwin.gr_RailroadCostSumList_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.selectCol = columnId;
};

//-------------------------------------------------------------------------
// 출발역 UDC 이벤트 호출 되는 함수 START
//------------------------------------------------------------------------- 
scwin.udc_comCodeDpt_onclickEvent = function (e) {
  const code = ed_dptWrkPlCd.getValue();
  const name = ed_dptStnNm.getValue();
  udc_comCodeDpt.cfCommonPopUp(scwin.udc_comCodeDpt_callBackFunc, code, name, "T", null, null, null, null, null, null, null, null, null, null, null, "역명조회,작업장코드,작업장명");
};
scwin.udc_comCodeDpt_onblurCodeEvent = function (e) {
  if (ed_dptWrkPlCd.originalValue != ed_dptWrkPlCd.getValue()) {
    const code = ed_dptWrkPlCd.getValue();
    const name = ed_dptStnNm.getValue();
    ed_dptStnNm.setValue("");
    if (code != "") {
      udc_comCodeDpt.cfCommonPopUp(scwin.udc_comCodeDpt_callBackFunc, code, name, "T", null, null, null, null, null, null, null, null, null, null, null, "역명조회,작업장코드,작업장명");
    }
  }
};
scwin.udc_comCodeDpt_onblurNameEvent = function (info) {
  if (ed_dptStnNm.originalValue != ed_dptStnNm.getValue()) {
    const code = ed_dptWrkPlCd.getValue();
    const name = ed_dptStnNm.getValue();
    ed_dptWrkPlCd.setValue("");
    if (name != "") {
      udc_comCodeDpt.cfCommonPopUp(scwin.udc_comCodeDpt_callBackFunc, code, name, "T", null, null, null, null, null, null, null, null, null, null, null, "역명조회,작업장코드,작업장명");
    }
  }
};
scwin.udc_comCodeDpt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_dptWrkPlCd, ed_dptStnNm);
};
//-------------------------------------------------------------------------
// 출발역 UDC 이벤트 호출 되는 함수 END
//------------------------------------------------------------------------- 

//-------------------------------------------------------------------------
// 도착역 UDC 이벤트 호출 되는 함수 START
//------------------------------------------------------------------------- 

scwin.udc_comCodeArv_onclickEvent = function (e) {
  const code = ed_arvWrkPlCd.getValue();
  const name = ed_arvStnNm.getValue();
  udc_comCodeArv.cfCommonPopUp(scwin.udc_comCodeArv_callBackFunc, code, name, "T", null, null, null, null, null, null, null, null, null, null, null, "역명조회,작업장코드,작업장명");
};
scwin.udc_comCodeArv_onblurCodeEvent = function (e) {
  if (ed_arvWrkPlCd.originalValue != ed_arvWrkPlCd.getValue()) {
    const code = ed_arvWrkPlCd.getValue();
    const name = ed_arvStnNm.getValue();
    ed_arvStnNm.setValue("");
    if (code != "") {
      udc_comCodeArv.cfCommonPopUp(scwin.udc_comCodeArv_callBackFunc, code, name, "T", null, null, null, null, null, null, null, null, null, null, null, "역명조회,작업장코드,작업장명");
    }
  }
};
scwin.udc_comCodeArv_onblurNameEvent = function (info) {
  if (ed_arvStnNm.originalValue != ed_arvStnNm.getValue()) {
    const code = ed_arvWrkPlCd.getValue();
    const name = ed_arvStnNm.getValue();
    ed_arvWrkPlCd.setValue("");
    if (name != "") {
      udc_comCodeArv.cfCommonPopUp(scwin.udc_comCodeArv_callBackFunc, code, name, "T", null, null, null, null, null, null, null, null, null, null, null, "역명조회,작업장코드,작업장명");
    }
  }
};
scwin.udc_comCodeArv_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_arvWrkPlCd, ed_arvStnNm);
};

//-------------------------------------------------------------------------
// 도착역 UDC 이벤트 호출 되는 함수 END
//------------------------------------------------------------------------- 

//-------------------------------------------------------------------------
// 청구처 UDC 이벤트 호출 되는 함수 START
//------------------------------------------------------------------------- 
scwin.udc_comCodeBilgClnt_onclickEvent = function (e) {
  const code = ed_bilgClntNo.getValue();
  const name = ed_bilgClntNm.getValue();
  udc_comCodeBilgClnt["cfCommonPopUp"](scwin.udc_comCodeBilgClnt_callBackFunc, code, name, "T", null, null, null, null, null, null, null, null, null, null, null, "거래처,거래처코드,거래처명");
};
scwin.udc_comCodeBilgClnt_onblurCodeEvent = function (e) {
  if (ed_bilgClntNo.originalValue != ed_bilgClntNo.getValue()) {
    const code = ed_bilgClntNo.getValue();
    const name = ed_bilgClntNm.getValue();
    ed_bilgClntNm.setValue("");
    if (code != "") {
      udc_comCodeBilgClnt.cfCommonPopUp(scwin.udc_comCodeBilgClnt_callBackFunc, code, name, "T", null, null, null, null, null, null, null, null, null, null, null, "거래처,거래처코드,거래처명");
    }
  }
};
scwin.udc_comCodeBilgClnt_onblurNameEvent = function (info) {
  if (ed_bilgClntNm.originalValue != ed_bilgClntNm.getValue()) {
    const code = ed_bilgClntNo.getValue();
    const name = ed_bilgClntNm.getValue();
    ed_bilgClntNo.setValue("");
    if (name != "") {
      udc_comCodeBilgClnt.cfCommonPopUp(scwin.udc_comCodeBilgClnt_callBackFunc, code, name, "T", null, null, null, null, null, null, null, null, null, null, null, "거래처,거래처코드,거래처명");
    }
  }
};
scwin.udc_comCodeBilgClnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_bilgClntNo, ed_bilgClntNm);
};
scwin.udc_comCodeCallFunction = function (udcObject, strCallFunction, callbackFunction, ...params) {
  //if ( typeof 
};
//-------------------------------------------------------------------------
// 청구처 UDC 이벤트 호출 되는 함수 END
//------------------------------------------------------------------------- 

//-------------------------------------------------------------------------
// 철송원가율 TAB 클릭 이벤트
//------------------------------------------------------------------------- 
scwin.tab_ontabclick = function (tabId, index) {
  scwin.f_selectTabMenu(index);
};
scwin.f_display_costRate = function (e) {
  console.log(e);
};
scwin.f_excelFormat = function (v) {
  console.log(v);
};
scwin.f_subTitleExpression = function (sum_pchsSum, sum_sellTrans) {
  return sum_sellTrans == 0 ? 0 : Math.round(sum_pchsSum / sum_sellTrans * 100 * 10) / 10;
};
// Math.round( (SUM('pchsSum') / SUM('sellTrans')) * 100 * 10 ) / 10
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendarDpDt',refDataMap:'dma_Retrieve',refEdDt:'dptDtTo',refStDt:'dptDtFrom',style:'',edFromId:'ed_dptDtFrom',edToId:'ed_dptDtTo',mandatoryTo:'true',mandatoryFrom:'true',titleFrom:'출발일자 조회 시작일자',titleTo:'출발일자 조회 종료일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_dptWrkPlCd',objTypeCode:'Key',maxlengthCode:'6',UpperFlagCode:'1',nameId:'ed_dptStnNm',objTypeName:'data',id:'udc_comCodeDpt',refDataCollection:'dma_Retrieve',code:'dptWrkPlCd','ev:onclickEvent':'scwin.udc_comCodeDpt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeDpt_onblurCodeEvent',selectID:'retrieveTrainWorkPlace','ev:onblurNameEvent':'scwin.udc_comCodeDpt_onblurNameEvent',allowCharCode:'0-9a-zA-Z',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_arvWrkPlCd',id:'udc_comCodeArv',nameId:'ed_arvStnNm',objTypeCode:'Key',objTypeName:'data',maxlengthCode:'6',refDataCollection:'dma_Retrieve',code:'arvWrkPlCd','ev:onclickEvent':'scwin.udc_comCodeArv_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeArv_onblurCodeEvent',selectID:'retrieveTrainWorkPlace','ev:onblurNameEvent':'scwin.udc_comCodeArv_onblurNameEvent',UpperFlagCode:'1',allowCharCode:'0-9a-zA-Z',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_bilgClntNo',nameId:'ed_bilgClntNm',id:'udc_comCodeBilgClnt',objTypeCode:'data',objTypeName:'data',maxlengthCode:'6',refDataCollection:'dma_Retrieve',code:'bilgClntNo','ev:onclickEvent':'scwin.udc_comCodeBilgClnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeBilgClnt_onblurCodeEvent',selectID:'retrieveClntInfo',allowCharCode:'0-9a-zA-Z',UpperFlagCode:'1','ev:onblurNameEvent':'scwin.udc_comCodeBilgClnt_onblurNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송명의',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_transNmCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:dma_Retrieve.transNmCd'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화차구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_adminfrtcarYn',style:'width:150px;',submenuSize:'auto',ref:'data:dma_Retrieve.adminfrtcarYn'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사유'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저수요'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'요약',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownUserAuth:'X',gridDownFn:'scwin.f_runExcel',gridID:'gr_RailroadCostSumList',id:'udc_topGrdBtnRailroadCostSumList',btnPlusYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_RailroadCostSumList',id:'gr_RailroadCostSumList',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.gr_RailroadCostSumList_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'구분',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'갯수',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'운송료(매출)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'하불임',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'철송임',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'철송조작료',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'철송검수비',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',value:'(주)고려차량',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'자가영업 상차료',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'매입합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'원가율',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'teu',inputType:'text',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'teuCount',inputType:'text',width:'60',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellTrans',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsTrans',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsTransR',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsOprR',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsTestR',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsKoreoR',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsJeOnoffR',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSum',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'costRate',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0.#',excelCellType:'number',excelFormat:'#,##0.0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'철송원가율',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tabbox'},E:[{T:1,N:'w2:tabControl',A:{style:'',id:'tab',class:'wq_tab','ev:ontabclick':'scwin.tab_ontabclick'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs12',label:'컨테이너별',userAuth:'R'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs13',label:'거래처별',userAuth:'R'}},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'height: auto;',id:'content12'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridDownUserAuth:'X',id:'udc_topGrdBtnCnt',gridUpYn:'N',gridID:'gr_RailroadCostList',gridDownFn:'scwin.f_runExcelCost'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{class:'wq_gvw',dataList:'data:ds_RailroadCostList',id:'gr_RailroadCostList',readOnly:'true',rowNumHeaderValue:'No',rowNumWidth:'50',style:'',visibleRowNum:'7',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'114',displayMode:'label',inputType:'text',id:'column1',value:'컨테이너'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',inputType:'text',id:'column17',value:'봉인번호'}},{T:1,N:'w2:column',A:{width:'108',displayMode:'label',inputType:'text',id:'column15',value:'출발일자'}},{T:1,N:'w2:column',A:{width:'96',displayMode:'label',inputType:'text',id:'column13',value:'출발역'}},{T:1,N:'w2:column',A:{width:'96',displayMode:'label',inputType:'text',id:'column11',value:'도착역'}},{T:1,N:'w2:column',A:{width:'96',displayMode:'label',inputType:'text',id:'column104',value:'',hidden:'true'}},{T:1,N:'w2:column',A:{width:'78',displayMode:'label',inputType:'text',id:'column33',value:'화차구분'}},{T:1,N:'w2:column',A:{width:'78',displayMode:'label',inputType:'text',id:'column31',value:'열차번호'}},{T:1,N:'w2:column',A:{width:'78',displayMode:'label',inputType:'text',id:'column29',value:'화차번호'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',inputType:'text',id:'column27',value:'운송명의'}},{T:1,N:'w2:column',A:{width:'72',displayMode:'label',inputType:'text',id:'column25',value:'운송명의1',hidden:'true'}},{T:1,N:'w2:column',A:{width:'72',displayMode:'label',inputType:'text',id:'column23',value:'LINE'}},{T:1,N:'w2:column',A:{width:'60',displayMode:'label',inputType:'text',id:'column21',value:'규격'}},{T:1,N:'w2:column',A:{width:'60',displayMode:'label',inputType:'text',id:'column9',value:'Type'}},{T:1,N:'w2:column',A:{width:'50',displayMode:'label',inputType:'text',id:'column3',value:'E/F'}},{T:1,N:'w2:column',A:{width:'114',displayMode:'label',inputType:'text',id:'column5',value:'오더번호'}},{T:1,N:'w2:column',A:{width:'144',displayMode:'label',inputType:'text',id:'column7',value:'화주명'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',inputType:'text',id:'column19',value:'청구처'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',inputType:'text',id:'column51',value:'운송료<br/>(매출)'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',inputType:'text',id:'column49',value:'매입합계'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',inputType:'text',id:'column47',value:'하불임'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',inputType:'text',id:'column45',value:'철송임'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',inputType:'text',id:'column43',value:'철송<br/>조작료'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',inputType:'text',id:'column41',value:'철송<br/>검수비'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',inputType:'text',id:'column35',value:'고려차량'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',inputType:'text',id:'column37',value:'자가영업<br/>상차료'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',inputType:'text',id:'column39',value:'원가율'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'114',displayMode:'label',id:'cntrNo',inputType:'text'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',id:'sealNo',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'108',displayMode:'label',id:'dptDt',inputType:'text',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'96',displayMode:'label',id:'dptStn',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'96',displayMode:'label',id:'arvStn',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'96',displayMode:'label',id:'totSum',inputType:'expression',hidden:'true',expression:'\'99\'',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'78',displayMode:'label',id:'adminfrtcarYn',inputType:'text',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'78',displayMode:'label',id:'trnNo',inputType:'text',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'78',displayMode:'label',id:'frtcarNo',inputType:'text',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',id:'transNmClntCd',inputType:'text',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'72',displayMode:'label',id:'transNmCd',inputType:'text',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'72',displayMode:'label',id:'lineCd',inputType:'text',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'60',displayMode:'label',id:'cntrTypShowCd',inputType:'text'}},{T:1,N:'w2:column',A:{width:'60',displayMode:'label',id:'cntrTypCd',inputType:'text'}},{T:1,N:'w2:column',A:{width:'50',displayMode:'label',id:'fullEmptyClsCd',inputType:'text'}},{T:1,N:'w2:column',A:{width:'114',displayMode:'label',id:'odrNo',inputType:'text'}},{T:1,N:'w2:column',A:{width:'144',displayMode:'label',id:'mchtNm',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',id:'bilgClntNo',inputType:'text'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',id:'sellTrans',inputType:'text',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',id:'pchsSum',inputType:'text',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',id:'pchsTrans',inputType:'text',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',id:'pchsTransR',inputType:'text',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',id:'pchsOprR',inputType:'text',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',id:'pchsTestR',inputType:'text',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',id:'pchsKoreoR',inputType:'text',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',id:'pchsJeOnoffR',inputType:'text',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',displayMode:'label',id:'costRate',inputType:'text',textAlign:'right',dataType:'number',displayFormat:'#,##0.#',excelCellType:'number',excelFormat:'#,##0.0'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'trnNo',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'114',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',expression:'"총" + COUNT(\'cntrNo\') + "건"'}},{T:1,N:'w2:column',A:{width:'84',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'108',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'96',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'96',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'96',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'78',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'78',inputType:'expression',style:'',id:'column71',value:'',displayMode:'label',expression:'targetColValue()'}},{T:1,N:'w2:column',A:{width:'78',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'84',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'72',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'72',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'114',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'144',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'84',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'84',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'sellTrans\'   )',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',inputType:'expression',style:'',id:'column59',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'pchsSum\'     )',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',inputType:'expression',style:'',id:'column58',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'pchsTrans\'   )',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'pchsTransR\'  )',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',inputType:'expression',style:'',id:'column56',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'pchsOprR\'    )',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',inputType:'expression',style:'',id:'column55',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'pchsTestR\'   )',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'pchsKoreoR\'  )',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',inputType:'expression',style:'',id:'column53',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'pchsJeOnoffR\')',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',inputType:'expression',style:'',id:'subCostRate',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.#',expression:'scwin.f_subTitleExpression(SUM(\'pchsSum\'),SUM(\'sellTrans\'))',excelCellType:'number',excelFormat:'#,##0.0'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'totSum',style:'',id:'subTotal2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'114',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',expression:'"총" + COUNT(\'cntrNo\') + "건"'}},{T:1,N:'w2:column',A:{width:'84',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'108',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'96',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'96',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'96',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'78',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'78',inputType:'text',style:'',id:'column71',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'78',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'84',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'72',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'72',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'114',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'144',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'84',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'84',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'sellTrans\'   )',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',inputType:'expression',style:'',id:'column59',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'pchsSum\'     )',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',inputType:'expression',style:'',id:'column58',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'pchsTrans\'   )',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'pchsTransR\'  )',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',inputType:'expression',style:'',id:'column56',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'pchsOprR\'    )',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',inputType:'expression',style:'',id:'column55',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'pchsTestR\'   )',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'pchsKoreoR\'  )',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',inputType:'expression',style:'',id:'column53',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'pchsJeOnoffR\')',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'84',inputType:'expression',style:'',id:'subCostRate',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.#',expression:'SUM(\'sellTrans\') == 0 ? 0 : Math.round( (SUM(\'pchsSum\') / SUM(\'sellTrans\')) * 100 * 10 ) / 10',excelCellType:'number',excelFormat:'#,##0.0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content13'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_group5',style:'',gridDownUserAuth:'X',id:'udc_topGrdBtnClnt',gridUpYn:'N',gridID:'gr_RailroadCostClntList',gridDownFn:'scwin.f_runExcelCostClnt'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group5',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw',dataList:'data:ds_RailroadCostClntList',id:'gr_RailroadCostClntList',readOnly:'true',rowNumHeaderValue:'No',rowNumWidth:'50',visibleRowNum:'8',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'청구처',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'화주명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'20',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'40',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'TEU',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'운송료 (매출)',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'매입합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'원가율',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'count20',inputType:'text',width:'60',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'count40',inputType:'text',width:'60',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'teuCount',inputType:'text',width:'60',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellTrans',inputType:'text',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSum',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'costRate',inputType:'number',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###.#',excelCellType:'number',excelFormat:'#,##0.0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]}]})