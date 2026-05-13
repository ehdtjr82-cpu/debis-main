/*amd /ui/ac/co/stdinfomgnt/co_100_06_01b.xml 23032 6fa98ba0e4cddd0eb4d1173056c1744dc13508e42449700d25c8160cf71c4f36 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_printType',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bookKndCd',name:'장부종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookEchSeq',name:'장부별순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtPosSeq',name:'장부순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtAcctNm',name:'장부출력용계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtAcctEngNm',name:'영문계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'leftRightClsCd',name:'좌우구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctColorCd',name:'계정색',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtYn',name:'발행여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'provAcctCd',name:'충당금계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'provAcctNm',name:'충당금계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subProvAcctCd',name:'보조충당금계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subProvAcctNm',name:'보조충당금계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'varFixedClsCd',name:'변고정비구분',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_printType'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bookKndCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_commonCO015',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_savePrintType',action:'/ac.co.stdinfomgnt.SavePrintFormCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_printType","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_savePrintType_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_printType',action:'/ac.co.stdinfomgnt.RetrievePrintFormListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_printType',target:'data:json,{"id":"ds_printType","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_printType_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/cm/fw/constants/DGlobalValue.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.isRetrieve = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FI010",
    compID: "lc_bookKndCd"
  }, {
    grpCd: "FI023",
    compID: "gr_printType:leftRightClsCd"
  }, {
    grpCd: "CO020",
    compID: "gr_printType:acctColorCd"
  }, {
    grpCd: "CO015",
    compID: "gr_printType:varFixedClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  let newRow = dlt_commonCodeCO015.insertRow();
  dlt_commonCodeCO015.setCellData(newRow, "cd", "3");
  dlt_commonCodeCO015.setCellData(newRow, "cdNm", '기타');
  dlt_commonCodeFI010.sort("cd", 0);
  lc_bookKndCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  //ds_printType.DataID = "/ac.co.stdinfomgnt.RetrievePrintFormListCMD.do?bookKndCd="+lc_bookKndCd.ValueOfIndex("code",lc_bookKndCd.Index);
  dma_printType.set("bookKndCd", lc_bookKndCd.getValue());
  $c.sbm.execute($p, sbm_printType);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_printType.getModifiedIndex().length == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, ["출력형태정보"]));
    return;
  }
  let ret = await $c.gus.cfValidate($p, [gr_printType]);
  if (ret) {
    if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
      $c.sbm.execute($p, sbm_savePrintType);
    }
  }
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_Add = async function () {
  if (scwin.isRetrieve) {
    let newRow = ds_printType.insertRow();
    let bookKndCd = ds_printType.getCellData(0, "bookKndCd");
    let addBookKndCd = ds_printType.getCellData(ds_printType.getRowPosition(), "bookKndCd");

    //조회결과가 없을 경우
    if (bookKndCd != "") {
      addBookKndCd = bookKndCd;
    } else {
      addBookKndCd = lc_bookKndCd.getValue();
    }
    ds_printType.setCellData(newRow, "bookKndCd", addBookKndCd);
    ds_printType.setCellData(newRow, "leftRightClsCd", '1');
    ds_printType.setCellData(newRow, "acctColorCd", '1');
    ds_printType.setCellData(newRow, "prtYn", DGlobalValue.TRUE);
    ds_printType.setCellData(newRow, "varFixedClsCd", '3');
    gr_printType.setFocusedCell(newRow, 2);
  }
};

//-------------------------------------------------------------------------
// 행 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = function () {
  let rowIdx = gr_printType.getAllFocusedRowIndex();
  let colIndex = gr_printType.getFocusedColumnIndex();
  let multiPosition = [];
  for (let i = 0; i < rowIdx.length; i++) {
    let rowStatus = ds_printType.getRowStatus(rowIdx[i]);
    if (rowStatus == "C") {
      ds_printType.removeRow(rowIdx[i]);
      for (let j = i; j < rowIdx.length; j++) {
        rowIdx[j] = rowIdx[j] - 1;
      }
    } else {
      ds_printType.deleteRow(rowIdx[i]);
      multiPosition.push({
        row: rowIdx[i],
        col: colIndex
      });
    }
  }
  if (multiPosition.length != 0) {
    gr_printType.setMultiFocus(multiPosition);
  }
};

//취소
scwin.f_Cancel = function () {
  let rows = gr_printType.getAllFocusedRowIndex();
  let focusedIndex = gr_printType.getAllFocusedIndex();
  rows.sort(function (a, b) {
    return a - b;
  });
  for (let i = rows.length - 1; i >= 0; i--) {
    $c.data.undoRow($p, ds_printType, rows[i]);
  }
  gr_printType.setMultiFocus(focusedIndex);
};

//-------------------------------------------------------------------------
// 계정코드팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (row, colid, sFlag) {
  let code = ds_printType.getCellData(row, colid);
  switch (colid) {
    case 'acctCd':
      await udc_mgntAcctCdInfo.cfCommonPopUp(scwin.acctCd_callBackFunc, code, ds_printType.getCellData(row, "acctNm"), sFlag, null, null, null, null, null, "410", null, null, null);
      break;
    case 'provAcctCd':
      await udc_mgntAcctCdInfo.cfCommonPopUp(scwin.provAcctCd_callBackFunc, code, ds_printType.getCellData(row, "provAcctNm"), sFlag, null, null, null, null, null, "410", null, null, null);
      break;
    case 'subProvAcctCd':
      await udc_mgntAcctCdInfo.cfCommonPopUp(scwin.subProvAcctCd_callBackFunc, code, ds_printType.getCellData(row, "subProvAcctNm"), sFlag, null, null, null, null, null, "410", null, null, null);
      break;
    default:
      return;
  }
};
scwin.acctCd_callBackFunc = async function (rtnList) {
  let row = gr_printType.getFocusedRowIndex();
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ds_printType.setCellData(row, "acctCd", rtnList[0]); //계정코드
    ds_printType.setCellData(row, "acctNm", rtnList[1]); //계정명
  } else {
    ds_printType.setCellData(row, "acctCd", ""); //계정코드
    ds_printType.setCellData(row, "acctNm", ""); //계정명
  }
};
scwin.provAcctCd_callBackFunc = async function (rtnList) {
  let row = gr_printType.getFocusedRowIndex();
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ds_printType.setCellData(row, "provAcctCd", rtnList[0]); //계정코드
    ds_printType.setCellData(row, "provAcctNm", rtnList[1]); //계정명
  } else {
    ds_printType.setCellData(row, "provAcctCd", ""); //계정코드
    ds_printType.setCellData(row, "provAcctNm", ""); //계정명
  }
};
scwin.subProvAcctCd_callBackFunc = async function (rtnList) {
  let row = gr_printType.getFocusedRowIndex();
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ds_printType.setCellData(row, "subProvAcctCd", rtnList[0]); //계정코드
    ds_printType.setCellData(row, "subProvAcctNm", rtnList[1]); //계정명
  } else {
    ds_printType.setCellData(row, "subProvAcctCd", ""); //계정코드
    ds_printType.setCellData(row, "subProvAcctNm", ""); //계정명
  }
};

//-------------------------------------------------------------------------
// 장부형식 자동생성 팝업
//-------------------------------------------------------------------------
scwin.f_PopUpAutoCreation = function () {
  let options = {};
  options.id = "autoCreatePopup";
  options.popupName = "출력형식자동생성";
  $c.win.openPopup($p, "/ui/ac/co/stdinfomgnt/co_100_06_02p.xml", options, {});
};

//-------------------------------------------------------------------------						
// 휴지통 처리						
//-------------------------------------------------------------------------	
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
};

//-------------------------------------------							
// 그리드 높이 늘리고 줄이기							
//-------------------------------------------							
scwin.f_grdHeiht = function (gridNm, size) {
  let strHeight = gridNm.style.height;
  let intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    gridNm.style.height = intHeight + "px";
  }
};

//-------------------------------------------							
// 그리드 데이터 엑셀로 다운							
//-------------------------------------------	
scwin.f_runExcel = async function () {
  let totCnt = ds_printType.getRowCount();
  let sheetTitle = "관리실적버전";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, gr_printType, {
        fileName: sheetTitle + ".xlsx",
        sheetName: sheetTitle
      });
    }
  } else {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_savePrintType_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    ds_printType.reform();
    scwin.f_Retrieve();
  }
};
scwin.sbm_printType_submitdone = async function (e) {
  scwin.isRetrieve = true;
  gr_printType.setFocusedCell(0, 2);
  totalRows.setValue(ds_printType.getRowCount());
  if (ds_printType.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
};
scwin.gr_printType_ontextimageclick = function (rowIndex, columnIndex) {
  let colId = gr_printType.getColumnID(columnIndex);
  scwin.f_openPopUp(rowIndex, colId, "F");
};
scwin.gr_printType_onviewchange = function (info) {
  let newData = info.newValue;
  let oldData = info.oldValue;
  let colId = info.colId;
  let row = info.rowIndex;
  if (colId == "provAcctCd" || colId == "subProvAcctCd" || colId == "acctCd") {
    if (!$c.gus.cfIsNull($p, newData)) {
      if (newData != oldData) {
        // 값이 변경되었을 때만 팝업 호출
        scwin.f_openPopUp(row, colId, "T");
      }
    } else {
      // 값이 비워졌을 때
      ds_printType.setCellData(row, colId, "");
      if (colId == "provAcctCd") {
        ds_printType.setCellData(row, "provAcctNm", "");
      } else if (colId == "subProvAcctCd") {
        ds_printType.setCellData(row, "subProvAcctNm", "");
      } else if (colId == "acctCd") {
        ds_printType.setCellData(row, "acctNm", "");
      }
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_search',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'장부종류',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'7'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{ref:'data:dma_printType.bookKndCd',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 200px;',allOption:'',id:'lc_bookKndCd',renderType:'',class:'form-control col2',direction:'auto',displayMode:'value delim label',title:'장부종류',visibleRowNum:'25'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_search',type:'button',class:'btn sch',escape:'false','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'출력행 등록현황',class:'tit'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',style:'',gridID:'gr_printType',id:'udc_topGrd',gridDownFn:'scwin.f_runExcel',gridDownUserAuth:'X',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',editModeEvent:'onclick',validExp:'acctCd:계정코드:yes:maxLength=7,prtPosSeq:장부순서:yes:maxLength=7:key,prtAcctNm:장부출력용 계정명:yes:maxLength=50,leftRightClsCd:좌우구분:yes:maxLength=1,acctColorCd:계정색:yes:maxLength=1',scrollByColumn:'false',validFeatures:'ignoreStatus=yes',checkReadOnlyOnPasteEnable:'',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_printType',style:'',columnMove:'true',autoFit:'allColumn',id:'gr_printType',visibleRowNum:'13',class:'wq_gvw','ev:ontextimageclick':'scwin.gr_printType_ontextimageclick','ev:onviewchange':'scwin.gr_printType_onviewchange',rowStatusVisible:'true',rowStatusWidth:'30',dataDragSelectAutoScroll:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bookKndCd',value:'장부종류코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bookEchSeq',value:'장부별순번',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'acctCd',value:'계정코드',class:'txt-red',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'acctNm',value:'계정명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'prtPosSeq',value:'장부순서',class:'txt-red',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'200',inputType:'text',id:'prtAcctNm',value:'장부출력용 계정명',class:'txt-red',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'prtAcctEngNm',value:'영문계정명',class:'txt-blue',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'leftRightClsCd',value:'좌우구분',class:'txt-red',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'acctColorCd',value:'계정색',class:'txt-red',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'prtYn',value:'발행여부',class:'txt-blue',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'provAcctCd',value:'충당금계정',class:'txt-blue',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'provAcctNm',value:'충당금계정명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'subProvAcctCd',value:'보조충당금계정',class:'txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'subProvAcctNm',value:'보조충당금 계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'varFixedClsCd',value:'변고정비구분',class:'txt-blue',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bookKndCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bookEchSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{editModeEvent:'onclick',removeBorderStyle:'false',width:'100',viewType:'default',inputType:'textImage',id:'acctCd',allowChar:'0-9',blockSelect:'false',displayMode:'label',maxLength:'7',editModeEventIcon:'onclick',mandatory:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'150',inputType:'text',readOnly:'true',id:'acctNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'prtPosSeq',allowChar:'0-9',blockSelect:'false',displayMode:'label',maxLength:'7',mandatory:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'200',inputType:'text',id:'prtAcctNm',blockSelect:'false',displayMode:'label',maxLength:'50',mandatory:'true',class:'ws-pre'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'150',inputType:'text',id:'prtAcctEngNm',blockSelect:'false',displayMode:'label',maxLength:'100'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'select',id:'leftRightClsCd',blockSelect:'false',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'select',id:'acctColorCd',blockSelect:'false',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'checkbox',id:'prtYn',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{editModeEvent:'onclick',removeBorderStyle:'false',width:'100',viewType:'default',inputType:'textImage',id:'provAcctCd',allowChar:'0-9',blockSelect:'false',displayMode:'label',editModeEventIcon:'onclick',maxLength:'7'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'120',inputType:'text',readOnly:'true',id:'provAcctNm',blockSelect:'false',displayMode:'label',maxLength:'8'}},{T:1,N:'w2:column',A:{editModeEvent:'onclick',width:'120',viewType:'default',inputType:'textImage',id:'subProvAcctCd',allowChar:'0-9',displayMode:'label',maxLength:'7',editModeEventIcon:'onclick'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'200',inputType:'text',readOnly:'true',id:'subProvAcctNm',displayMode:'label',maxLength:'8'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'varFixedClsCd',displayMode:'label'},E:[{T:1,N:'w2:choices'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{addFunction:'scwin.f_Add',btnCancelYn:'Y',style:'',gridID:'gr_printType',id:'udc_bottomGrdBtn1',rowDelUserAuth:'D',btnDelYn:'N',rowAddUserAuth:'C',rowAddFunction:'scwin.f_Add',rowDelFunction:'scwin.f_Delete',cancelFunction:'scwin.f_Cancel'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveMgntAcctCdInfo',codeId:'ed_mgntAcctCd',validTitle:'',nameId:'ed_mgntAcctNm',style:'width:%; height:px; ;visibility:hidden;',btnId:'btn_mgntAcct',id:'udc_mgntAcctCdInfo'}},{T:1,N:'xf:trigger',A:{userAuth:'C','ev:onclick':'scwin.f_PopUpAutoCreation',style:'',id:'btn_edit',label:'저장',type:'button',class:'btn white'},E:[{T:1,N:'xf:label',E:[{T:3,text:'자동생성'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'U','ev:onclick':'scwin.f_Save',style:'',id:'btn_save',label:'저장',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]})