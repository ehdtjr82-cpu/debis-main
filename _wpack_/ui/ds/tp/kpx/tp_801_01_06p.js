/*amd /ui/ds/tp/kpx/tp_801_01_06p.xml 16122 064921cd25a158416ae067f6298c56ecb8e1ba5f1ac4f66aba19237219311b36 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'transWrkRsltsNo',name:'운송작업실적번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'etcAmt',name:'기타금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'등록자ID',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',defaultValue:'',length:'13'}},{T:1,N:'w2:column',A:{id:'etcAmt2',name:'기타금액2',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'etcAmt3',name:'기타금액3',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'transWrkRsltsNo',name:'운송작업실적번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text',defaultValue:'',length:'255'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/ncall.ds.tp.kpx.RetrieveKpxEtcAmtInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.ds.tp.kpx.SaveKpxEtcAmtInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_results","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.userId = $c.data.getMemInfo($p, "userId");
scwin.bilgClntNo = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  let params = $c.data.getParameter($p);
  if (!$c.util.isEmpty($p, params["transWrkRsltsNo"])) {
    // 작업지시번호
    ed_transWrkRsltsNo.setValue(params["transWrkRsltsNo"]);
  }
  if (!$c.util.isEmpty($p, params["clntNm"])) {
    // 거래처명
    ed_clntNm.setValue(params["clntNm"]);
  }
  if (!$c.util.isEmpty($p, params["rsltsStdDt"])) {
    // 실적일자
    ica_rsltsStdDt.setValue(params["rsltsStdDt"]);
  }
  if (!$c.util.isEmpty($p, params["vehclNo"])) {
    // 차량번호
    ed_vehclNo.setValue(params["vehclNo"]);
  }
  if (!$c.util.isEmpty($p, params["etcAmt"])) {
    // 현재 추가비용
    ed_etcAmt.setValue(params["etcAmt"]);
  }
  if (!$c.util.isEmpty($p, params["bilgClntNo"])) {
    scwin.bilgClntNo = params["bilgClntNo"];
  }

  // 테스트 데이터
  // ed_transWrkRsltsNo.setValue("L15011626425");
  // ica_rsltsStdDt.setValue("20150101");
  // ed_vehclNo.setValue("충남94qk4229");
  // ed_etcAmt.setValue("0");
  // scwin.bilgClntNo = "101112";

  // 입력 그리드 maxlength 설정
  scwin.f_SetGridColumnMaxLength(gr_results);

  // 자동 조회
  scwin.f_retrieve();
};

//-------------------------------------------------------------------------
// 입력 그리드 maxlength 설정
//-------------------------------------------------------------------------
scwin.f_SetGridColumnMaxLength = function (gridViewObj) {
  for (let i = 0; i < gridViewObj.getTotalCol(); i++) {
    let colNm = gridViewObj.getColumnID(i);
    let dataObj = $c.gus.object($p, gridViewObj.getDataList());
    let colInfo = dataObj.getColumnInfo(colNm);
    if (typeof colInfo != "undefined") {
      gridViewObj.setMaxLength(i, colInfo.length);
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------------------------------------
scwin.f_runExcel = async function () {
  let totCnt = ds_results.getRowCount();
  let sheetTitle = "배차상세";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        ,
        sheetName: sheetTitle //엑셀내 시트명 지정필요시
      };
      const infoArr = [];
      $c.data.downloadGridViewExcel($p, gr_results, options, infoArr);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = function () {
  $c.sbm.execute($p, sbm_Retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //저장 여부 확인    
  if (ds_results.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("추가금액"));
    return false;
  }
  let ret = await $c.win.confirm($p, "저장하시겠습니까?");
  if (ret) {
    ds_results.setCellData(0, "transWrkRsltsNo", ed_transWrkRsltsNo.getValue());
    ds_results.setCellData(0, "bilgClntNo", scwin.bilgClntNo);
    ds_results.setCellData(0, "rsltsStdDt", ica_rsltsStdDt.getValue());
    ds_results.setCellData(0, "vehclNo", ed_vehclNo.getValue());
    ds_results.setCellData(0, "regId", scwin.userId);
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.f_Close = function () {
  $c.win.closePopup($p);
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_Retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows.setValue(ds_results.getRowCount());
  if (ds_results.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.

  ds_results.modifyAllStatus("R"); // 재조회 하는 경우가 아니면 상태값 초기화 해야함
};

//-------------------------------------------------------------------------
// 그리드 셀 click
//-------------------------------------------------------------------------
scwin.gr_results_oncellclick = function (rowIndex, columnIndex, columnId) {
  if ((columnId == "etcAmt2" || columnId == "etcAmt3") && rowIndex == 0) {
    gr_results.setReadOnly("column", "etcAmt2", false);
    gr_results.setReadOnly("column", "etcAmt3", false);
  } else {
    gr_results.setReadOnly("column", "etcAmt2", true);
    gr_results.setReadOnly("column", "etcAmt3", true);
  }
};

//-------------------------------------------------------------------------
// 그리드 편집 종료
// ASIS : gr_results OnExit(row,colid,olddata)
//-------------------------------------------------------------------------
scwin.gr_results_oneditend = function (rowIndex, columnIndex, value) {
  if (columnIndex == 1 && value != 0) {
    // 1:etcAmt2
    for (i = 0; i < ds_results.getRowCount(); i++) {
      if (i != rowIndex) {
        ds_results.setCellData(i, "etcAmt2", 0);
        ds_results.setCellData(i, "etcAmt3", 0);
      } else {
        ds_results.setCellData(i, "etcAmt3", value);
      }
    }
  }
  ds_results.getCellData(rowIndex, "etcAmt2");
  if (columnIndex == 2 && ds_results.getCellData(rowIndex, "etcAmt2") == 0) {
    // 2:etcAmt3
    console.log("1." + ds_results.getCellData(rowIndex, "etcAmt3"));
    ds_results.setCellData(rowIndex, "etcAmt3", 0);
    console.log("2." + ds_results.getCellData(rowIndex, "etcAmt3"));
    //value = 0;
  }
};

//-------------------------------------------------------------------------
// 그리드 편집 종료
// ASIS : gr_results OnExit(row,colid,olddata) -> gr_results_oneditend 이벤트 사용하면 안됨(값변경 된후에 원래 값으로 다시 돌아옴)
//-------------------------------------------------------------------------
scwin.gr_results_onafteredit = function (rowIndex, columnIndex, value) {
  if (columnIndex == 1 && value != 0) {
    // 1:etcAmt2
    for (i = 0; i < ds_results.getRowCount(); i++) {
      if (i != rowIndex) {
        ds_results.setCellData(i, "etcAmt2", 0);
        ds_results.setCellData(i, "etcAmt3", 0);
      } else {
        ds_results.setCellData(i, "etcAmt3", value);
      }
    }
  }
  if (columnIndex == 2 && ds_results.getCellData(rowIndex, "etcAmt2") == 0) {
    // 2:etcAmt3
    ds_results.setCellData(rowIndex, "etcAmt3", 0);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업지시번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_transWrkRsltsNo',style:'',ref:'data:ds_condition.transWrkRsltsNo',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntNm',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실적일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_rsltsStdDt',style:'',calendarDisplayFormat:'yyyy/MM/dd',ref:'data:ds_condition.rsltsStdDt',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNo',style:'',ref:'data:ds_condition.vehclNo',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'현재 추가비용',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td br0',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_etcAmt',style:'',ref:'data:ds_condition.etcAmt',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td bl',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_runExcel',gridUpYn:'N',templateYn:'N',gridID:'gr_results',id:'udc_topGrdBtn'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_results',style:'',autoFit:'allColumn',id:'gr_results',visibleRowNum:'15',class:'wq_gvw','ev:oncellclick':'scwin.gr_results_oncellclick','ev:onafteredit':'scwin.gr_results_onafteredit'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column1',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column17',value:'매출추가비용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column15',value:'매입추가비용',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'odrNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'200',inputType:'text',id:'etcAmt2',displayMode:'label',allowChar:'0-9',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'200',inputType:'text',id:'etcAmt3',displayMode:'label',allowChar:'0-9',dataType:'number',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_Close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})