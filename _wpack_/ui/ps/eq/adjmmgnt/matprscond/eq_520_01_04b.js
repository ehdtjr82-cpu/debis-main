/*amd /ui/ps/eq/adjmmgnt/matprscond/eq_520_01_04b.xml 21049 8ee6b156afd7eb0fad18482651d069a177ef9842e5f3cc00c0151cdca536a62f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endYm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq420',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDt',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAmt',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.adjmmgnt.matprscond.RetrieveMonthEachCompanyEachFixMaterialInPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_eq420","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eq420","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'로딩중...','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/** 
 * 참고사항
 * 1. 피벗 컴포넌트가 subTotal 기능이 없어 스크립트로 만들어주었으나, 
 *    grandTotalDisplayType : both로 하면 하단 합계부분이 subTotal값도 다 합계가 되어 grandTotalDisplayType : vertical 후 하단합계 밑에 따로 그려줌.
 * 2. 1번과 같이 할 경우, 피벗 컴포넌트로 하면 자동 정렬이라 맨 밑에 라벨명이 "합계"로 들어 갈 수 없음. 현재 "흽계"로 설정.
 * 2. 피벗 컴포넌트 특성상 정상이나 헤더 부분이 asis와 상이.
 * 3. 그리드로 만들경우, 동적으로 그리드 컬럼을 그릴 수가 없어 처음에 대략 100개 정도 컬럼을 그리고 만들어야하는데 그렇게 해도 되는건지 의문.
 * 4. 3번과 같이 할경우, 날짜 데이터가 100개 이상인것은 그릴수 없어 또다시 디자인 탭에서 컬럼 수를 추가해서 그려줘야함.
 */

scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMM"); //날짜형식입니다.

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  //초기값 셋팅
  em_stYm.setValue(scwin.vCurDate);
  em_endYm.setValue(scwin.vCurDate);
  em_stYm.focus();
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  // dma_search.setEmptyValue();
  $c.gus.cfInitObjects($p, tb_eq420, null);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  //필수입력항목 체크
  if (em_stYm.getValue().length != 6) {
    await $c.win.alert($p, "입고년월은 필수입력 입니다.");
    em_stYm.focus();
    return;
  }
  if (em_endYm.getValue().length != 6) {
    await $c.win.alert($p, "입고년월은 필수입력 입니다.");
    em_endYm.focus();
    return;
  }
  if (em_endYm.getValue() < em_stYm.getValue()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_045, ['입고년월']); //기간 체크
    em_stYm.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  var rowCnt = ds_eq420.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    //건수 조회
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  } else {
    scwin.f_pivotCreate();

    //건수 조회
    totalRows.setValue(ds_master.getRowCount());
  }
};

//-------------------------------------------------------------------------
// subtotal 합계 추가 (피봇컴퍼넌트 자체로는 안되서 함수 만들어서 그려줌)
//-------------------------------------------------------------------------
scwin.f_pivotCreate = function () {
  try {
    ds_master.removeAll();
  } catch (e) {}
  var rowCnt = ds_eq420.getRowCount();
  var gridHeader = "";
  var gridBody = "";
  var gridFooter = "";
  if (rowCnt <= 0) {
    return;
  }
  var inDtDistinctArr = ds_eq420.getColumnDistinctDataArray("inDt");
  if (!inDtDistinctArr || inDtDistinctArr.length === 0) {
    return;
  }
  var columnInfo = ["clntNo", "clntNm", "fixWrkPlCd", "fixWrkPlNm", "subTotalYn"];
  var typeInfo = ["text", "text", "text", "text", "text"];
  var amountColumnIds = [];
  var grandTotals = {
    totalInAmt: 0
  };
  for (var k = 0; k < inDtDistinctArr.length; k++) {
    var amountColumnId = "inDt" + inDtDistinctArr[k].replace("/", "");
    amountColumnIds.push(amountColumnId);
    columnInfo.push(amountColumnId);
    typeInfo.push("number");
    grandTotals[amountColumnId] = 0;
  }
  columnInfo.push("totalInAmt");
  typeInfo.push("number");
  $c.data.createDataList($p, "ds_master", columnInfo, typeInfo);
  ds_eq420.multisort({
    sortIndex: "clntNm fixWrkPlNm",
    sortOrder: "1 1"
  });
  var detailMap = {};
  var detailOrder = [];
  var groupTotals = {};
  for (var i = 0; i < rowCnt; i++) {
    var clntNm = ds_eq420.getCellData(i, "clntNm");
    var clntNo = ds_eq420.getCellData(i, "clntNo");
    var fixWrkPlCd = ds_eq420.getCellData(i, "fixWrkPlCd");
    var fixWrkPlNm = ds_eq420.getCellData(i, "fixWrkPlNm");
    var inAmt = Number(ds_eq420.getCellData(i, "inAmt")) || 0;
    var amountKey = "inDt" + ds_eq420.getCellData(i, "inDt").replace("/", "");
    var detailKey = clntNo + "|" + fixWrkPlCd;
    if (!detailMap[detailKey]) {
      detailMap[detailKey] = {
        clntNo: clntNo,
        clntNm: clntNm,
        fixWrkPlCd: fixWrkPlCd,
        fixWrkPlNm: fixWrkPlNm,
        subTotalYn: "N",
        totalInAmt: 0
      };
      for (var detailIdx = 0; detailIdx < amountColumnIds.length; detailIdx++) {
        detailMap[detailKey][amountColumnIds[detailIdx]] = 0;
      }
      detailOrder.push(detailKey);
    }
    detailMap[detailKey][amountKey] = Number(detailMap[detailKey][amountKey]) + inAmt;
    detailMap[detailKey].totalInAmt = Number(detailMap[detailKey].totalInAmt) + inAmt;
    if (!groupTotals[clntNm]) {
      groupTotals[clntNm] = {
        totalInAmt: 0
      };
      for (var groupIdx = 0; groupIdx < amountColumnIds.length; groupIdx++) {
        groupTotals[clntNm][amountColumnIds[groupIdx]] = 0;
      }
    }
    groupTotals[clntNm][amountKey] = Number(groupTotals[clntNm][amountKey]) + inAmt;
    groupTotals[clntNm].totalInAmt = Number(groupTotals[clntNm].totalInAmt) + inAmt;
    grandTotals[amountKey] = Number(grandTotals[amountKey]) + inAmt;
    grandTotals.totalInAmt = Number(grandTotals.totalInAmt) + inAmt;
  }
  var setMasterRowData = function (rowIndex, rowData) {
    ds_master.setCellData(rowIndex, "clntNo", rowData.clntNo || "");
    ds_master.setCellData(rowIndex, "clntNm", rowData.clntNm || "");
    ds_master.setCellData(rowIndex, "fixWrkPlCd", rowData.fixWrkPlCd || "");
    ds_master.setCellData(rowIndex, "fixWrkPlNm", rowData.fixWrkPlNm || "");
    ds_master.setCellData(rowIndex, "subTotalYn", rowData.subTotalYn || "N");
    for (var dataIdx = 0; dataIdx < amountColumnIds.length; dataIdx++) {
      var columnId = amountColumnIds[dataIdx];
      ds_master.setCellData(rowIndex, columnId, Number(rowData[columnId]) || 0);
    }
    ds_master.setCellData(rowIndex, "totalInAmt", Number(rowData.totalInAmt) || 0);
  };
  var appendSubtotalRow = function (groupName) {
    var subtotalData = {
      clntNo: "",
      clntNm: groupName + " ",
      fixWrkPlCd: "",
      fixWrkPlNm: "합계",
      subTotalYn: "Y",
      totalInAmt: Number(groupTotals[groupName].totalInAmt) || 0
    };
    for (var subtotalIdx = 0; subtotalIdx < amountColumnIds.length; subtotalIdx++) {
      var subtotalColumnId = amountColumnIds[subtotalIdx];
      subtotalData[subtotalColumnId] = Number(groupTotals[groupName][subtotalColumnId]) || 0;
    }
    var subtotalRowIndex = ds_master.getRowCount();
    ds_master.insertRow();
    setMasterRowData(subtotalRowIndex, subtotalData);
  };
  var currentGroupName = "";
  for (var orderIdx = 0; orderIdx < detailOrder.length; orderIdx++) {
    var detailData = detailMap[detailOrder[orderIdx]];
    if (currentGroupName !== "" && currentGroupName !== detailData.clntNm) {
      appendSubtotalRow(currentGroupName);
    }
    var detailRowIndex = ds_master.getRowCount();
    ds_master.insertRow();
    setMasterRowData(detailRowIndex, detailData);
    currentGroupName = detailData.clntNm;
  }
  if (currentGroupName !== "") {
    appendSubtotalRow(currentGroupName);
  }
  for (var j = 0; j < inDtDistinctArr.length; j++) {
    var amountId = amountColumnIds[j];
    gridHeader += '<w2:column width="120" inputType="text" id="column15' + amountId + '" value="' + inDtDistinctArr[j] + '" blockSelect="false" displayMode="label"></w2:column>\n';
    gridBody += '<w2:column textAlign="right" dataType="number" width="120" displayFormat="#,##0" inputType="text" id="' + amountId + '" blockSelect="false" displayMode="label"></w2:column>\n';
    gridFooter += '<w2:column textAlign="right" dataType="number" width="120" displayFormat="#,##0" inputType="text" id="footer_' + amountId + '" value="' + grandTotals[amountId] + '" displayMode="label" style="background-color:#e7f4df;font-weight:bold;color:#23445a;"></w2:column>\n';
  }
  var gridStr = '<w2:gridView xmlns="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:w2="http://www.inswave.com/websquare" xmlns:xf="http://www.w3.org/2002/xforms"\n' + '         mergeCol="clntNm" visibleRowNumFix="true" dataList="data:ds_master" style="height:600px;" readOnly="true" autoFit="allColumn" id="gr_master" visibleRowNum="15" class="wq_gvw" checkReadOnlyOnPasteEnable="">\n' + '        <w2:caption id="caption11" value="this is a grid caption."></w2:caption>\n' + '        <w2:header id="header2">\n' + '            <w2:row id="row3">\n' + '                <w2:column width="60" inputType="text" id="column11" value="" blockSelect="false" displayMode="label" hidden="true"></w2:column>\n' + '                <w2:column width="150" inputType="text" id="column12" value="거래처명" blockSelect="false" displayMode="label"></w2:column>\n' + '                <w2:column width="90" inputType="text" id="column13" value="" blockSelect="false" displayMode="label" hidden="true"></w2:column>\n' + '                <w2:column width="100" inputType="text" id="column14" value="작업장명" blockSelect="false" displayMode="label"></w2:column>\n' + gridHeader + '                <w2:column width="120" inputType="text" id="column99" value="합계" blockSelect="false" displayMode="label"></w2:column>\n' + '            </w2:row>\n' + '        </w2:header>\n' + '        <w2:gBody id="gBody2">\n' + '            <w2:row id="row4">\n' + '                <w2:column textAlign="center" width="60" inputType="text" readOnly="true" id="clntNo" blockSelect="false" displayMode="label" hidden="true"></w2:column>\n' + '                <w2:column textAlign="left" width="150" inputType="text" id="clntNm" blockSelect="false" displayMode="label" colMerge="true"></w2:column>\n' + '                <w2:column textAlign="center" width="90" inputType="text" readOnly="true" id="fixWrkPlCd" blockSelect="false" displayMode="label" hidden="true"></w2:column>\n' + '                <w2:column textAlign="center" width="100" inputType="text" id="fixWrkPlNm" blockSelect="false" displayMode="label"></w2:column>\n' + gridBody + '                <w2:column textAlign="right" dataType="number" width="120" displayFormat="#,##0" inputType="text" id="totalInAmt" blockSelect="false" displayMode="label"></w2:column>\n' + '            </w2:row>\n' + '        </w2:gBody>\n' + '        <w2:footer id="footer1">\n' + '            <w2:row id="footerRow1">\n' + '                <w2:column width="60" inputType="text" id="column201" value="" displayMode="label" style="background-color:#e7f4df;font-weight:bold;color:#23445a;"></w2:column>\n' + '                <w2:column width="150" inputType="text" id="column202" value="합계" displayMode="label" style="background-color:#e7f4df;font-weight:bold;color:#23445a;"></w2:column>\n' + '                <w2:column width="90" inputType="text" id="column203" value="" displayMode="label" style="background-color:#e7f4df;font-weight:bold;color:#23445a;"></w2:column>\n' + '                <w2:column width="100" inputType="text" id="column204" value="" displayMode="label" style="background-color:#e7f4df;font-weight:bold;color:#23445a;"></w2:column>\n' + gridFooter + '                <w2:column textAlign="right" dataType="number" width="120" displayFormat="#,##0" inputType="text" id="column299" value="' + grandTotals.totalInAmt + '" displayMode="label" style="background-color:#e7f4df;font-weight:bold;color:#23445a;"></w2:column>\n' + '            </w2:row>\n' + '        </w2:footer>\n' + '    </w2:gridView>\n';
  gr_master.setGridStyle(WebSquare.xml.parse(gridStr, true));
  scwin.applySubtotalRowStyle(amountColumnIds);
};
scwin.applySubtotalRowStyle = function (amountColumnIds) {
  const styleColumnIds = ["clntNm", "fixWrkPlNm"].concat(amountColumnIds || []).concat(["totalInAmt"]);
  for (var rowIdx = 0; rowIdx < ds_master.getRowCount(); rowIdx++) {
    if (ds_master.getCellData(rowIdx, "subTotalYn") !== "Y") {
      continue;
    }
    for (var colIdx = 0; colIdx < styleColumnIds.length; colIdx++) {
      var columnId = styleColumnIds[colIdx];
      gr_master.setCellStyle(rowIdx, columnId, "background-color", "#eaf3ff");
      gr_master.setCellStyle(rowIdx, columnId, "font-weight", "bold");
      gr_master.setCellStyle(rowIdx, columnId, "color", "#243b63");
    }
  }
};

//-------------------------------------------------------------------------
// 엑셀다운로드
//-------------------------------------------------------------------------
scwin.f_Export = async function () {
  const options = {
    fileName: "년간업체별정비자재입고현황.xlsx",
    sheetName: "년간업체별정비자재입고현황",
    colMerge: true
  };
  $c.data.downloadGridViewExcel($p, gr_master, options, {});
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'',src:'/cm/udc/fromToYearMon.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_eq420',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{id:'udc_fromToYearMon1',refDataMap:'dma_search',refEdDt:'endYm',refStDt:'stYm',style:'',edFromId:'em_stYm',edToId:'em_endYm'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'년간업체별 정비자재 입고 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'[단위 : 원]',style:''}},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridUpYn:'N',templateYn:'N',gridID:'gr_master',btnUser:'N',gridDownFn:'scwin.f_Export'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',dataList:'data:ds_eq420',style:'max-height:600px;',autoFit:'allColumn',id:'gr_master',visibleRowNum:'15',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',mergeCol:'clntNm'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',label:'this is a grid caption.',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'column30',label:'거래처',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column38',label:'거래처명',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',id:'column36',label:'작업장코드',value:'작업장코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',label:'작업장명',value:'작업장명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',label:'',value:'입고년월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column57',label:'합계',value:'합계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'fixWrkPlCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fixWrkPlNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inAmt',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'inAmt\')',width:'70',inputType:'expression',id:'Sum',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{inputType:'text',id:'column47',label:'합계',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'inAmt\')',width:'100',inputType:'expression',id:'column56',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'inAmt\')',width:'70',inputType:'expression',id:'column60',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'}}]}]}]}]}]}]})