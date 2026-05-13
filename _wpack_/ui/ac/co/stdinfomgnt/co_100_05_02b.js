/*amd /ui/ac/co/stdinfomgnt/co_100_05_02b.xml 12600 9555efba693ad2d400e5fcee39e7e36f91462792273d86667740698d38c6516b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_version',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_version_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptYm',name:'년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ver',name:'버전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalVerYn',name:'마지막버전여부',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_version'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptYm',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_saveVersion',action:'/ac.co.stdinfomgnt.SaveVersionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_version","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveVersion_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.stdinfomgnt.RetrieveVersionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_version',target:'data:json,{"id":"ds_version","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.curRowPosition = 0;
scwin.curColPosition = 0;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  ica_srhAdptYm.focus();
  ica_srhAdptYm.setValue($c.date.getServerDateTime($p, "yyyyMM"));
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  const params = {
    adptYm: ica_srhAdptYm.getValue().trim()
  };

  //데이터셋에 정보설정
  dma_version.setJSON(params);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_version.getRowIndexByStatus('CUD').length <= 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, ["관리실적버전정보"]));
    return;
  }
  let count = 0;
  for (i = 0; i < ds_version.getRowCount(); i++) {
    //기존재하는 data 삭제 count
    if (ds_version.getRowStatus(i) == "D") {
      count++;
    }
  }
  if (count > 0) {
    await $c.win.alert($p, "기 존재하는 버전정보를 삭제할 수 없습니다.");
    return;
  }
  let ret = await $c.gus.cfValidate($p, [gr_version]);
  if (ret) {
    if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
      $c.sbm.execute($p, sbm_saveVersion);
    }
  }
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_Add = function () {
  let insRow = ds_version.insertRow();
  ds_version.setCellData(insRow, "adptYm", ica_srhAdptYm.getValue().trim());
  gr_version.setFocusedCell(insRow, 0);
};

//-------------------------------------------------------------------------						
// 휴지통 처리						
//-------------------------------------------------------------------------						
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  ica_srhAdptYm.setValue($c.date.getServerDateTime($p, "yyyyMM"));
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
  let totCnt = ds_version.getRowCount();
  let sheetTitle = "관리실적버전";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, gr_version, {
        fileName: sheetTitle + ".xlsx",
        sheetName: sheetTitle
      });
    }
  } else {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_saveVersion_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    ds_version.reform();
    scwin.curRowPosition = gr_version.getFocusedRowIndex();
    scwin.curColPosition = gr_version.getFocusedColumnIndex();
    await $c.win.alert($p, MSG_CM_INF_001);
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  totalRows.setValue(ds_version.getRowCount());
  gr_version.setFocusedCell(scwin.curRowPosition, scwin.curColPosition);
  if (ds_version.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
};

// 체크박스 control
scwin.ds_version_oncelldatachange = async function (info) {
  let row = info.rowIndex;
  let colId = info.colID;
  let count = 0;
  if (row >= 0 && colId == "finalVerYn" && info.newValue == "1") {
    for (i = 0; i < ds_version.getRowCount(); i++) {
      if (ds_version.getCellData(i, "finalVerYn") == "1" && ds_version.getCellData(i, "adptYr") == ds_version.getCellData(row, "adptYr")) {
        count++;
      }
    }
  }
  if (count > 1) {
    await $c.win.alert($p, "마지막버전여부는 동일한 년월에 하나만 선택할 수 있습니다.");
    ds_version.setCellData(row, "finalVerYn", 0);
  }
};

// 그리드 click
scwin.gr_version_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_version.getRowStatus(rowIndex) == "C") {
    // gr_version.ColumnProp("ver","Edit")="Numeric";
    gr_version.setColumnReadOnly("ver", false);
  } else {
    // gr_version.ColumnProp("adptYr","Edit")="None";
    gr_version.setColumnReadOnly("ver", true);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_search',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:40px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'년월',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'7'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_srhAdptYm',class:'form-control cal',calendarValueType:'yearMonth',validateOnInput:'true',displayFormat:'yyyy/MM',title:'년월',pickerType:'dynamic'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_search',type:'button',class:'btn sch',escape:'false',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'관리실적 버전현황',class:'tit'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',style:'',gridID:'gr_version',id:'udc_topGrd',gridDownUserAuth:'X',gridDownFn:'scwin.f_runExcel',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:oncellclick':'scwin.gr_version_oncellclick',scrollByColumnAdaptive:'false',editModeEvent:'onclick',validExp:'adptYm:년월:yes:date=YYYYMM:key,ver:버전:yes:number:key',scrollByColumn:'false',validFeatures:'ignoreStatus=no',checkReadOnlyOnPasteEnable:'',visibleRowNumFix:'true',dataList:'data:ds_version',style:'',columnMove:'true',autoFit:'allColumn',id:'gr_version',visibleRowNum:'15',class:'wq_gvw',rowStatusVisible:'true',rowStatusWidth:'10'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'adptYm',value:'년월',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'ver',value:'버전',class:'txt-red',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'200',inputType:'text',id:'finalVerYn',value:'마지막버전여부',class:'txt-blue',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'500',inputType:'text',id:'summary',value:'적요',class:'txt-blue',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',displayFormat:'####/##',inputType:'text',readOnly:'true',id:'adptYm',blockSelect:'false',displayMode:'label',maxLength:'6'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',dataType:'number',width:'100',validateOnInput:'true',inputType:'text',readOnly:'true',id:'ver',blockSelect:'false',displayMode:'label',maxLength:'3',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'200',inputType:'checkbox',id:'finalVerYn',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'500',inputType:'text',id:'summary',blockSelect:'false',displayMode:'label',maxLength:'50'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{addFunction:'scwin.f_Add',btnCancelYn:'Y',style:'',gridID:'gr_version',id:'udc_bottomGrdBtn2',rowDelUserAuth:'D',btnDelYn:'N',rowAddUserAuth:'C',rowAddFunction:'scwin.f_Add'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:button',A:{userAuth:'U',style:'',id:'btn_save',label:'저장',class:'btn','ev:onclick':'scwin.f_Save'}}]}]}]}]}]}]})