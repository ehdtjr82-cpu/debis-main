/*amd /ui/ac/fi/stdinfomgnt/fi_100_01_02b.xml 19354 3873ecf76dac7b8605311be7499301381dcf07bbeb09851f32333f6fd87b9cb6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acctCd',name:'계정코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_account',saveRemovedData:'false','ev:onrowpositionchange':'scwin.ds_account_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_summary',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summaryPos',name:'열위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctSummaryCd',name:'적요위치명',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.stdinfomgnt.RetrieveAccountCodeNmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"GAUCE"}',target:'data:json,{"id":"ds_account", "key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDetail',action:'/ac.fi.stdinfomgnt.RetrieveAccountSummaryCMD.do',method:'post',mediatype:'application/json',target:'data:json,{"id":"ds_summary", "key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDetail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.stdinfomgnt.CUDAccountSummaryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_summary","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 계정적요등록
 * 메뉴경로 : 회계/재무회계/기준정보/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/fi/stdinfomgnt/fi_100_01_02b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-10-22
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항
 *    1. 그리드ID.setNoResultMessageVisible(false) 설정해줘야 그리드에 데이터없음 안보임
 *    2. ds_summary.deleteRow(row); 시 해당row커서 사라짐
 * 수정이력 :
 *    - 2025-10-22      배기원    최초작성
 */
scwin.f_SummaryRow = 0;

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_center.setNoResultMessageVisible(false);
  gr_region.setNoResultMessageVisible(false);
  dma_search.setEmptyValue();
  ds_account.reform();
  ds_account.removeAll();
  ds_summary.reform();
  ds_summary.removeAll();
  totalRows1.setValue("0");
  totalRows2.setValue("0");
  $c.gus.cfDisableBtn($p, [btn_add, btn_del, btn_cancel, btn_save]);
  scwin.f_SummaryRow = 0;
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: "FI036",
    compID: "gr_region:summaryPos"
  } //열위치
  //   , { grpCd: "FI006", compID: "gr_region:acctSummaryCd" }  //적요위치
  , {
    grpCd: "FI006",
    compID: ""
  } //적요위치
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};

/**
 * $c.data.setCommonCode 함수의 콜백함수
 */
scwin.callBackCommonCode = function () {
  let label = "";
  let value = "";
  for (let i = 0; i < dlt_commonCodeFI006.getRowCount(); i++) {
    value = dlt_commonCodeFI006.getCellData(i, "cd");
    label = dlt_commonCodeFI006.getCellData(i, "cdNm");
    dlt_commonCodeFI006.setCellData(i, "cdDesc", "[" + value + "]" + label);
  }
  dlt_commonCodeFI006.reform();
  scwin.setInit();
  ed_acctCd.focus();
};

/**
 * 조회
 */
scwin.f_Retrieve = function () {
  var acctCd = "";
  acctCd = ed_acctCd.getValue().trim();
  scwin.setInit();
  dma_search.set("acctCd", acctCd);
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_center.setNoResultMessageVisible(true);
  gr_region.setNoResultMessageVisible(true);
  let rowCnt = ds_account.getRowCount();
  totalRows1.setValue(rowCnt);
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    //조회된 결과 정렬(asis:<param name=SortExpr 참조)
    ds_account.sort("acctCd", 0);
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    } else {
      gr_center.setFocusedCell(0, 0);
      $c.gus.cfEnableObjects($p, [btn_add, btn_del, btn_cancel, btn_save]);
    }
    ed_acctCd.focus();
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 상세조회
 */
scwin.f_Summary = function (row) {
  // var condition = "?";
  // condition += "acctCd" + ds_account.getCellData(row, "acctCd");
  // ds_summary.DataID = "/ac.fi.stdinfomgnt.RetrieveAccountSummaryCMD.do" + condition;
  // ds_summary.undoAll();
  ds_summary.removeAll();
  totalRows2.setValue("0");
  $c.sbm.execute($p, sbm_retrieveDetail, {
    "acctCd": ds_account.getCellData(row, "acctCd")
  });
};
scwin.sbm_retrieveDetail_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_summary.getRowCount();
  totalRows2.setValue(rowCnt);
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    gr_region.setFocusedCell(0, 0);
  }
};
scwin.sbm_retrieveDetail_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 두번째 그리드추가 - 전표적요 적용
 */
scwin.f_AddRowRegion = async function () {
  var rowPosion = ds_account.getRowPosition();
  var totCnt = ds_summary.getRowCount();
  var checkPos = 0;
  checkPos = ds_summary.getCellData(totCnt == 0 ? 0 : totCnt - 1, 'summaryPos');
  if (totCnt == 0) {
    checkPos = 0;
  }
  if (checkPos > 5) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_048, ["열위치", "6"]);
    return;
  }
  var newRow = ds_summary.insertRow();
  ds_summary.setCellData(newRow, 'acctCd', ds_account.getCellData(rowPosion, 'acctCd'));
  ds_summary.setCellData(newRow, 'acctNm', ds_account.getCellData(rowPosion, 'acctNm'));
  ds_summary.setCellData(newRow, 'summaryPos', Number(checkPos) + 1);
  if (ds_summary.getCellData(newRow, 'summaryPos') == 0) {
    ds_summary.setCellData(newRow, 'summaryPos', 1);
  }
  //todo : asis 비/활성화 확인차(개발 후 주석 삭제)
  // cfEnableKeyData();
  // cfDisableBtn([ bUpdate]);

  $c.gus.cfEnableKeyData($p);
  gr_region.setFocusedCell(newRow, "acctSummaryCd", false);
};

/**
 * 행삭제
 */
scwin.btn_delete = function () {
  var row = ds_summary.getRowPosition();
  if (ds_summary.getRowStatus(row) == "C") {
    ds_summary.removeRow(row);
  } else {
    ds_summary.deleteRow(row);
    gr_region.setFocusedCell(row, 0);
  }
};

/**
 * 행취소
 */
scwin.btn_cancel = function (e) {
  $c.data.undoRow($p, ds_summary, "Y");
};

/**
 * 저장
 */
scwin.f_Save = async function () {
  // 적요위치명 중복체크
  var row = ds_summary.getRowPosition();
  var rowCount = ds_summary.getRowCount();

  //TODO:그리드 행삭제 시[ds_summary.deleteRow] 커서 사라지는 거 때문에 임시로 추가(나중에 삭제)
  if ($c.gus.cfIsNull($p, row)) {
    row = ds_summary.getDeletedIndex()[0];
  }

  // 적요위치명 중복체크
  // for(let i=0; i<ds_summary.getRowCount()-1; i++){
  //     for(let j=i+1; j<ds_summary.getRowCount(); j++) {
  //         if(ds_summary.getCellData(i,"acctSummaryCd") == ds_summary.getCellData(j,"acctSummaryCd")) {
  //             await $c.gus.cfAlertMsg(MSG_CM_ERR_032, ["적요위치명"]);
  //             return;	
  //         }	
  //     }	
  // }
  let validArry = [{
    id: "summaryPos",
    name: "열위치",
    mandatory: true,
    key: true
  }, {
    id: "acctSummaryCd",
    name: "적요위치명",
    mandatory: true,
    key: true
  }];
  ret = await $c.gus.cfValidateGrid($p, gr_region, null, null, validArry, "계정적요");
  if (!ret) {
    return false;
  }

  // if (ds_summary.IsUpdated == false) {
  if (ds_summary.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이타"]);
  } else if ($c.gus.cfIsNull($p, ds_summary.getCellData(row, "summaryPos"))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["열위치"]);
    return false;
  } else if ($c.gus.cfIsNull($p, ds_summary.getCellData(row, "acctSummaryCd"))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["적요위치명"]);
    return false;
  } else {
    let ret = await $c.gus.cfValidate($p, [gr_region]);
    if (!ret) {
      return false;
    } else {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        sbm_save.userData1 = "noError";
        $c.sbm.execute($p, sbm_save);
        scwin.f_SummaryRow = gr_center.getFocusedRowIndex();
      }
    }
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    // scwin.f_Retrieve();
    scwin.f_Summary(scwin.f_SummaryRow);
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 엑셀파일 다운로드
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
// scwin.f_Excel = function() {
//     if ($c.win.confirm("Excel로 다운로드 하시겠습니까?")) {
//         $c.data.downloadGridViewExcel(objGridName, "계정조회", "계정조회.xls", 8 + 16);
//     }
// };
/**
 * 엑셀파일 다운로드
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
// scwin.f_Excel1 = function() {
//     if ($c.win.confirm("Excel로 다운로드 하시겠습니까?")) {
//         $c.data.downloadGridViewExcel(objGridName, "계정적요", "계정적요조회.xls", 8 + 16);
//     }
// };

/**
 * 계정코드 엔터 이벤트
 */
scwin.ed_acctCd_onkeydown = function (e) {
  if (e.keyCode == "13") {
    scwin.f_Retrieve();
  }
};

/**
 * 그리드의 콤보박스 라벨설정
 * customFormatter 옵션
 * TODO : scwin.callBackCommonCode에서 작업한 dlt_commonCodeFI006 사용(selectbox 클릭 시 다 나오게 하기위해)
 */
scwin.formatComboLabel = function (value, label, item, data) {
  if ($c.gus.cfIsNull($p, value)) {
    return "";
  } else {
    return "[" + value + "]" + label;
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
scwin.ds_account_onrowpositionchange = function (info) {
  if (ds_account.getRowCount() < 1) {
    return;
  }
  let row = info.newRowIndex;
  scwin.f_Summary(row);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox w-auto',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_acctCd',style:'',ref:'','ev:onkeydown':'scwin.ed_acctCd_onkeydown',editType:'focus',editFormat:'#######'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계정',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"계정조회.xlsx", "sheetName":"계정조회", "type":"1" }',templateYn:'N',gridUpYn:'N',gridID:'gr_center',id:'udc_excel1',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_account',style:'',autoFit:'allColumn',id:'gr_center',class:'wq_gvw',readOnly:'true',focusMode:'row',visibleRowNum:'15',gridName:'계정'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column1',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column17',value:'계정명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계정적요',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',grdDownOpts:'{"fileName":"계정적요조회.xlsx", "sheetName":"계정적요", "type":"1" }',templateYn:'N',gridUpYn:'N',gridID:'gr_region',id:'udc_excel2',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{rowStatusVisible:'true',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_summary',style:'',readOnly:'true',autoFit:'lastColumn',id:'gr_region',class:'wq_gvw',rowStatusWidth:'20',visibleRowNum:'15',gridName:'계정적요'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column1',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column17',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column15',value:'열위치',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'적요위치명',class:'col-type1',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'180',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',viewType:'icon',inputType:'select',style:'',readOnly:'false',id:'summaryPos',value:'',class:'',displayMode:'label',mandatory:'true',key:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',emptyItem:'true',viewType:'icon',inputType:'select',style:'',readOnly:'false',id:'acctSummaryCd',value:'',displayMode:'label',class:'',mandatory:'true',allOption:'',chooseOption:'',key:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_commonCodeFI006'},E:[{T:1,N:'w2:label',A:{ref:'cdDesc'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn',gridID:'gr_region',rowAddUserAuth:'C',rowDelUserAuth:'D',btnDelYn:'N',btnCancelYn:'Y',btnRowAddObj:'btn_add',btnRowDelObj:'btn_del',btnCancelObj:'btn_cancel',rowDelFunction:'scwin.btn_delete',cancelFunctoion:'scwin.btn_cancel',rowAddFunction:'scwin.f_AddRowRegion',btnRowAddYn:'Y',btnRowDelYn:'Y',cancelFunction:'scwin.btn_cancel'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Save',id:'btn_save',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})