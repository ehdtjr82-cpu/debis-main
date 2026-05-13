/*amd /ui/ps/eq/partmgnt/partbuyproc/eq_420_01_17b.xml 19341 e786931a4a3879a0a71a55b62198811436afc1682998ddac829a3fd300226c00 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq420',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partAmt',name:'부품',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tireAmt',name:'타이어',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etCoilAmt',name:'잡유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useUpAmt',name:'소모품',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplyAmt',name:'총공급가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplyAmtBfr',name:'전월금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgAmt',name:'증감액',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'inYmFrom',name:'입고시작년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inYmTo',name:'입고종료년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCdGubun',name:'대표작업장',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.partmgnt.partbuyproc.RetrieveWorkPlaceEachPartsBuyingPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_eq420","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eq420","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:'','ev:submitdone':'scwin.sbm_retrieve_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// UDC 로딩 완료 후
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  //초기화
  ica_inYmFrom.setValue($c.date.getServerDateTime($p, "yyyyMM"));
  ica_inYmTo.setValue($c.date.getServerDateTime($p, "yyyyMM"));
  ica_inYmFrom.focus();
  cbx_repWrkPlCd.setValue("1");
  cbx_printCheck.setValue("1");
  cbx_previewCheck.setValue("1");
  cbx_printCheck.hide();
  cbx_previewCheck.hide();
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_eq420, null);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //필수입력항목 체크	 
  let ret = await $c.gus.cfValidate($p, [ica_inYmFrom, ica_inYmTo]);
  if (!ret) {
    return false;
  }
  let ls_stDt = ica_inYmFrom.getValue();
  let ls_endDt = ica_inYmTo.getValue();
  if (ls_stDt > ls_endDt) {
    await $c.win.alert($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ica_inYmFrom.focus();
    return;
  }
  if (cbx_repWrkPlCd.getValue() == "1") {
    dma_search.set("wrkPlCdGubun", "0"); // 대표작업장으로 보기
  } else {
    dma_search.set("wrkPlCdGubun", "1"); // 개별작업장으로 보기
  }
  await $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 수량, 금액별로 소계구하기..
//-------------------------------------------------------------------------
scwin.f_SubSummary = function (row) {
  let tmpArr = new Array();
  for (let i = 0; i < 18; i++) {
    tmpArr[i] = 0;
  }
  for (let i = 0; i < row; i++) {
    if (ds_eq420.getCellData(i, "wrkPlNm") == "누계") {
      tmpArr[1] += Number(ds_eq420.getCellData(i, "partAmt"));
      tmpArr[3] += Number(ds_eq420.getCellData(i, "tireAmt"));
      tmpArr[5] += Number(ds_eq420.getCellData(i, "etCoilAmt"));
      tmpArr[7] += Number(ds_eq420.getCellData(i, "useUpAmt"));
      tmpArr[9] += Number(ds_eq420.getCellData(i, "supplyAmt"));
      tmpArr[11] += Number(ds_eq420.getCellData(i, "supplyAmtBfr"));
      tmpArr[13] += Number(ds_eq420.getCellData(i, "chgAmt"));
    } else {
      tmpArr[0] += Number(ds_eq420.getCellData(i, "partAmt"));
      tmpArr[2] += Number(ds_eq420.getCellData(i, "tireAmt"));
      tmpArr[4] += Number(ds_eq420.getCellData(i, "etCoilAmt"));
      tmpArr[6] += Number(ds_eq420.getCellData(i, "useUpAmt"));
      tmpArr[8] += Number(ds_eq420.getCellData(i, "supplyAmt"));
      tmpArr[10] += Number(ds_eq420.getCellData(i, "supplyAmtBfr"));
      tmpArr[12] += Number(ds_eq420.getCellData(i, "chgAmt"));
    }
  }
  ds_eq420.setCellData(row, "partAmt", tmpArr[0]);
  ds_eq420.setCellData(row + 1, "partAmt", tmpArr[1]);
  ds_eq420.setCellData(row, "tireAmt", tmpArr[2]);
  ds_eq420.setCellData(row + 1, "tireAmt", tmpArr[3]);
  ds_eq420.setCellData(row, "etCoilAmt", tmpArr[4]);
  ds_eq420.setCellData(row + 1, "etCoilAmt", tmpArr[5]);
  ds_eq420.setCellData(row, "useUpAmt", tmpArr[6]);
  ds_eq420.setCellData(row + 1, "useUpAmt", tmpArr[7]);
  ds_eq420.setCellData(row, "supplyAmt", tmpArr[8]);
  ds_eq420.setCellData(row + 1, "supplyAmt", tmpArr[9]);
  ds_eq420.setCellData(row, "supplyAmtBfr", tmpArr[10]);
  ds_eq420.setCellData(row + 1, "supplyAmtBfr", tmpArr[11]);
  ds_eq420.setCellData(row, "chgAmt", tmpArr[12]);
  ds_eq420.setCellData(row + 1, "chgAmt", tmpArr[13]);
  ds_eq420.modifyAllStatus("R");
};

//-------------------------------------------------------------------------      
// OnUserColor Event
//-------------------------------------------------------------------------      
scwin.lfn_Usercolor = function (row, eventid) {
  let wrkPlNm = ds_eq420.getCellData(row, "wrkPlNm");
  if (wrkPlNm == "당월합") return "#FFDDFF";else if (wrkPlNm == "누계합") return "#E1E1E1";
  return "";
};

// as-is에 코드는 있으나 사용하지 않음
//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
// scwin.f_chkOpenCommonPopUp = function(inObj, pairObj, disGubun, isCode) {
//     if (!$c.gus.cfCanOpenPopup(inObj, pairObj))
//         return;

//     $c.gus.cfClearPairObj(pairObj);

//     let pVal = $c.gus.cfGetValue(inObj);

//     if (isCode == null || isCode == true)
//        f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
//     else
//        f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
// };

//------------------------------------------------------------------------
// 리포트 출력 버튼
//------------------------------------------------------------------------  
scwin.f_OzReport = async function () {
  //필수입력항목 체크	  
  let ret = await $c.gus.cfValidate($p, [ica_inYmFrom, ica_inYmTo]);
  if (!ret) {
    return false;
  }
  let ls_stDt = ica_inYmFrom.getValue();
  let ls_endDt = ica_inYmTo.getValue();
  if (ls_stDt > ls_endDt) {
    await $c.win.alert($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ica_inYmFrom.focus();
    return;
  }
  let data = {
    odiName: "eq_420_01_17",
    reportName: "/ps/eq/partmgnt/partbuyproc/eq_420_01_17.ozr",
    odiParam: {
      inYmFrom: ica_inYmFrom.getValue().trim(),
      inYmTo: ica_inYmTo.getValue().trim()
    },
    viewerParam: {
      useprogressbar: false // 프로그레스바 쓸지 말지
    },
    formParam: {}
  };
  if (cbx_repWrkPlCd.getValue() == "1") {
    data.odiParam.wrkPlCdGubun = "0"; // 대표작업장으로 보기
  } else {
    data.odiParam.wrkPlCdGubun = "1"; // 개별작업장으로 보기
  }
  await scwin.openPopup(data);
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  //필수입력항목 체크	  
  // let ret = await $c.gus.cfValidate([ica_inYmFrom, ica_inYmTo]);
  // if (!ret) {
  //     return false;
  // }

  // let ls_stDt = ica_inYmFrom.getValue();
  // let ls_endDt = ica_inYmTo.getValue();
  // if (ls_stDt > ls_endDt) {
  //     await $c.win.alert(MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
  //     ica_inYmFrom.focus();
  //     return;
  // }

  // if (ls_stDt.substring(0, 4) != ls_endDt.substring(0, 4)) { //( 시작입고년월 != 종료입고년월 )
  //     await $c.win.alert("[입고기간]에서 '입고 시작년도'와 '입고 종료년도'는 같은 년도 이어야 합니다.");
  //     return;
  // }

  if (ds_eq420.getRowCount() > 0) {
    // gr_eq420.SetExcelTitle(0, "");
    // gr_eq420.SetExcelTitle(1, "value:작업장별 정비자재 입고 현황 조회;font-face:굴림체;font-size:24pt;font-color:black;font-bold;font-underline;bgcolor:#ffffff;align:center;line-color:white;line-width:0pt;skiprow:1;");
    // scwin.f_setqrynm("시작입고년월", ica_inYmFrom.getValue());
    // scwin.f_setqrynm("종료입고년월", ica_inYmTo.getValue());

    const options = {
      fileName: '작업장별정비자재입고현황.xlsx',
      sheetName: '작업장별정비자재입고현황'
    };
    $c.data.downloadGridViewExcel($p, gr_eq420, options);
  } else {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_018, ["[작업장별 정비자재 입고 현황 조회] 자료"], ["조회"])); //"@이(가) 존재하지 않습니다.\n먼저 @을(를) 하십시오.";
  }
};
scwin.f_setqrynm = function (tname, str) {
  let vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";
  gr_eq420.SetExcelTitle(1, "value:" + tname + " [" + str + "]" + vSearchOption);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_eq420.getRowCount();
  totalRows.setValue(rowCnt / 2);
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    ica_inYmFrom.focus();
    return;
  }
  if (rowCnt > 0) {
    let newRow1 = ds_eq420.insertRow();
    ds_eq420.setCellData(newRow1, "wrkPlNm", "당월합");
    gr_eq420.setRowBackgroundColor(newRow1, "#FFDDFF");
    let newRow2 = ds_eq420.insertRow();
    ds_eq420.setCellData(newRow2, "wrkPlNm", "누계합");
    gr_eq420.setRowBackgroundColor(newRow2, "#E1E1E1");
    scwin.f_SubSummary(rowCnt);
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_print_onclick = function (e) {
  scwin.f_OzReport();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'',src:'/cm/udc/fromToYearMon.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_eq420',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{refStDt:'inYmFrom',refDataMap:'dma_search',style:'width:%; height:px; ',id:'udc_fromToYearMon1',refEdDt:'inYmTo',edToId:'ica_inYmTo',edFromId:'ica_inYmFrom',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data',objTypeFrom:'data',objTypeTo:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_repWrkPlCd',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',title:'대표작업장'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대표작업장 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'outInfoNm',label:'작업장별 정비자재 입고 현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridUpYn:'N',gridID:'gr_eq420',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_eq420',id:'gr_eq420',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true',columnMove:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'작업장',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'작업장명',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'입고계정코드',width:'280',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column55',value:'총공급가액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'전월금액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column49',value:'증감액',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column46',value:'부품',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'타이어',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column62',value:'잡유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'소모품',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlCd',inputType:'text',width:'100',colMerge:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partAmt',inputType:'text',width:'70',readOnly:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right',textImageRenderType:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tireAmt',inputType:'text',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right',textImageRenderType:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etCoilAmt',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right',textImageRenderType:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'useUpAmt',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right',textImageRenderType:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'supplyAmt',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right',textImageRenderType:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'supplyAmtBfr',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right',textImageRenderType:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'chgAmt',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right',textImageRenderType:'right',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'[단위 : 원]',style:''}}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',falseValue:'0',id:'cbx_printCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',falseValue:'0',id:'cbx_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_print',type:'button',class:'btn',userAuth:'P','ev:onclick':'scwin.btn_print_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력'}]}]}]}]}]}]}]}]}]})