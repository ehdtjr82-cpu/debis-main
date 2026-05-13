/*amd /ui/cm/bc/affairs/zz_770_02_01b.xml 21749 1f42e754c367a1833b06c13033c000bf276596d52fb5c779e79efcc1eef8daa9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYear1',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdYear2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postSeqCond',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_out'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'postSeq',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postPrdFrm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postPrdTo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'givePrdTo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYn',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'postSeq',name:'게시차수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postNm',name:'게시명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postPrdFrm',name:'게시기간;FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postPrdTo',name:'게시기간;TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'givePrdTo',name:'지급기한',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYn',name:'마감;여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outDtl',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_outDtl_onbeforerowpositionchange','ev:onrowpositionchange':'scwin.ds_outDtl_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'구;분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postSeq',name:'게시차수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dressType',name:'복장;종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'topbotDiv',name:'상하;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seasonDiv',name:'동하복;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitPrice',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemNo',name:'품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coDiv',name:'회사',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/cm.bc.affairs.RetrieveSheathPostSeqCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cond","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieveDtl',action:'/cm.bc.affairs.RetrieveSheathPostSeqDtlCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cond","key":"IN_DS1"},{"id":"ds_outDtl","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_outDtl","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none;','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieveDtl_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'smb_tr_save',action:'/cm.bc.affairs.RegistSheathPostSeqCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_out","key":"IN_DS1"},{"action":"modified","id":"ds_outDtl","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.smb_tr_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 게시차수
 * 메뉴경로 : 공통/총무업무/피복관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/affairs/zz_770_02_01b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-11-10
 * 수정이력  :
 *    - 2025-11-10      정승혜    최초작성
 *    - 2026-03-16      정승혜    기타수정
 * 메모 :
 * 조회조건 : 20200101~20201231
 */

scwin.sDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.stdYear = scwin.sDate.substring(0, 4);
scwin.rowPosCh = "";

//-----------------------------------------------------------------------------
// 화면로딩시 
//-----------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "IL019",
    compID: "gr_out:closeYn "
  }];
  $c.data.setCommonCode($p, codeOptions);
  const param = [{
    method: "getGridComboByUpperCd",
    param1: "DRESS",
    param2: "TYPE",
    param3: false,
    compID: "gr_outDtl:dressType"
  }, {
    method: "getGridComboByUpperCd",
    param1: "DRESS",
    param2: "TOPBOT",
    param3: false,
    compID: "gr_outDtl:topbotDiv"
  }, {
    method: "getGridComboByUpperCd",
    param1: "DRESS",
    param2: "SEASON",
    param3: false,
    compID: "gr_outDtl:seasonDiv"
  }];
  $c.data.setGauceUtil($p, param);
  scwin.f_DsHeaderSet();
  $c.gus.cfInitObjects($p, tb_search);
};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  ed_stdYear1.setValue(scwin.stdYear + "0101");
  ed_stdYear2.setValue(scwin.stdYear + "1231");
};
scwin.f_DsHeaderSet = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-----------------------------------------------------------------------------
// 조회
//-----------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  scwin.rowPosCh = "1";

  // 시작, 종료일자 체크
  if (ed_stdYear1.getValue() == "" || ed_stdYear2.getValue() == "") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "게시차수기간"));
    ed_stdYear1.focus();
    return;
  }

  //시작일자가 종료일자 이전인지 check
  if (!(await $c.gus.cfIsAfterDate($p, ed_stdYear1.getValue(), ed_stdYear2.getValue()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_stdYear1.focus();
    return;
  }
  $c.sbm.execute($p, sbm_tr_retrieve);
  //scwin.f_RetrieveDtl(); -> sbm_tr_retrieve_submitdone 으로 옮김
};

//-----------------------------------------------------------------------------
// 품목 조회 
//-----------------------------------------------------------------------------
scwin.f_RetrieveDtl = function () {
  let rowIndex = ds_out.getRowPosition();
  dma_cond.set("postSeqCond", ds_out.getCellData(rowIndex, "postSeq"));
  $c.sbm.execute($p, sbm_tr_retrieveDtl);
};

//-----------------------------------------------------------------------------
//저장 
//-----------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_out.getModifiedIndex().length == 0 && ds_outDtl.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, "변경된 정보가 없습니다.");
    return;
  }
  let ret = await $c.gus.cfValidate($p, [gr_out]);
  if (!ret) {
    return;
  }
  let ret2 = await scwin.f_ValueChk();
  if (!ret2) {
    return;
  } else {
    let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirm) {
      $c.sbm.execute($p, smb_tr_save);
    }
  }
};

//-----------------------------------------------------------------------------
// 저장시 필수 값 체크 
//-----------------------------------------------------------------------------
scwin.f_ValueChk = async function () {
  let stdYear = "<%=stdYear%>";
  let postSeq = "";
  let postSeqYear = "";
  let postSeqMidNo = "";
  let posetSeqEndNo = "";
  for (let i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getRowStatus(i) == "C") {
      postSeq = ds_out.getCellData(i, "postSeq");
      postSeqYear = postSeq.substring(0, 4);
      postSeqMidNo = postSeq.substring(4, 5);
      posetSeqEndNo = postSeq.substring(5, 6);
      if (postSeqYear != stdYear) {
        //alert("게시차수 중 앞의 4자리는 현재년도와 동일해야 합니다.");
        //return false;
      }
      if (postSeqMidNo != "0") {
        await $c.win.alert($p, "게시차수 중 앞의 5번째 자리는 0과 같아야 합니다.");
        return false;
      }
      if (posetSeqEndNo == "0") {
        await $c.win.alert($p, "게시차수 중 마직막 자리는 1~9 사이의 숫자여야 합니다.");
        return false;
      }
    }
  }
  return true;
};

//-----------------------------------------------------------------------------
// 게시차수 행추가.
//-----------------------------------------------------------------------------
scwin.f_DsOutAddRow = function () {
  let row = ds_out.insertRow();
  ds_out.setCellData(row, "closeYn", "N");
  gr_out.setFocusedCell(row, 0, false);
  scwin.f_RetrieveDtl();
};
scwin.f_CondInit = function () {
  ed_stdYear1.setValue(scwin.stdYear + "0101");
  ed_stdYear2.setValue(scwin.stdYear + "1231");
};
scwin.sbm_tr_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_out.getRowCount());
  if (ds_out.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  gr_out.setFocusedCell(0, "postSeq", false);
  ds_out.setRowPosition(0);
  scwin.f_RetrieveDtl();
};
scwin.sbm_tr_retrieveDtl_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows2.setValue(ds_outDtl.getRowCount());
  dma_cond.set("postSeqCond", ds_out.getCellData(ds_out.getRowPosition(), "postSeq"));
  gr_outDtl.setFocusedCell(0, "chk", false);
  if (ds_outDtl.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  scwin.rowPosCh = "2";
};
scwin.smb_tr_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, "정상적으로 반영 되었습니다.");
  scwin.f_Retrieve();
};
scwin.gr_outDtl_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "chk") {
    if (ds_outDtl.getCellData(rowIndex, "chk") == "T") {
      ds_outDtl.setCellData(rowIndex, "postSeq", ds_out.getCellData(ds_out.getRowPosition(), "postSeq"));
    }
  }
};
scwin.gr_out_onrowindexchange = function (rowIndex, oldRow) {
  dma_cond.set("postSeqCond", ds_out.getCellData(ds_out.getRowPosition(), "postSeq"));
  let dsOutSts = ds_out.getRowStatus(rowIndex);
  if (dsOutSts == "C") {
    gr_out.setReadOnly("cell", rowIndex, "postSeq", false);
  } else {
    gr_out.setReadOnly("cell", rowIndex, "postSeq", true);
  }
  if (scwin.rowPosCh != "1") {
    scwin.f_RetrieveDtl();
  }
};

// 엑셀다운 2+4+8+16
scwin.cfGridToExcel = function () {
  const options = {
    fileName: "게시차수List.xlsx",
    sheetName: "게시차수List",
    type: 1
  };
  $c.data.downloadGridViewExcel($p, gr_out, options);
  gr_out, '게시차수List', '게시차수List.xls';
};
scwin.gr_out_onafteredit = function (rowIndex, columnIndex, value) {
  let colId = gr_out.getColumnID(columnIndex);
  let postSeq = "";
  let postSeqChar = "";
  let postSeqYChar = "";
  if (colId == "postSeq") {
    postSeq = ds_out.getCellData(rowIndex, "postSeq");
    postSeqChar = postSeq.substring(4, 6);
    postSeqYChar = postSeq.substring(0, 4);
    if (postSeqChar == "01") {
      ds_out.setCellData(rowIndex, "postPrdFrm", postSeqYChar + "0201");
      ds_out.setCellData(rowIndex, "postPrdTo", postSeqYChar + "0228");
      ds_out.setCellData(rowIndex, "givePrdTo", postSeqYChar + "0501");
    } else if (postSeqChar == "02") {
      ds_out.setCellData(rowIndex, "postPrdFrm", postSeqYChar + "0701");
      ds_out.setCellData(rowIndex, "postPrdTo", postSeqYChar + "0731");
      ds_out.setCellData(rowIndex, "givePrdTo", postSeqYChar + "1001");
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'게시차수기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'stdYear1',refDataMap:'dma_cond',style:'',id:'udc_fromToCalendar1',refEdDt:'stdYear2',edFromId:'ed_stdYear1',edToId:'ed_stdYear2',mandatoryFrom:'true',mandatoryTo:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_CondInit'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'게시차수List ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_out',gridDownFn:'scwin.cfGridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'true',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',style:'',visibleRowNum:'15',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'20','ev:oncellclick':'scwin.gr_out_oncellclick','ev:onrowindexchange':'scwin.gr_out_onrowindexchange','ev:onafteredit':'scwin.gr_out_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'게시차수',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'게시명',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column15',inputType:'text',value:'게시기간 FROM',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'게시기간 TO',width:'150',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'지급기한',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column11',inputType:'text',value:'마감여부',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'postSeq',inputType:'text',width:'100',maxLength:'6'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postPrdFrm',inputType:'calendar',width:'150',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postPrdTo',inputType:'calendar',width:'150',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'givePrdTo',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeYn',inputType:'select',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnRowDelYn:'Y',btnCancelYn:'N',style:'',btnRowAddYn:'Y',btnDelYn:'N',id:'udc_grdBottomBtn',gridID:'gr_out',rowAddFunction:'scwin.f_DsOutAddRow'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'품목List ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridDownYn:'N',gridID:'gr_outDtl'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_outDtl',id:'gr_outDtl',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_outDtl_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'게시차수',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'복장종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'상하구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'동하복구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'단가',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'품목코드',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'회사',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'70',trueValue:'T',valueType:'other',falseValue:'F',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postSeq',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dressType',inputType:'select',style:'',value:'',width:'100',readOnly:'true',selectedData:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'topbotDiv',inputType:'select',style:'',value:'',width:'70',readOnly:'true',selectedData:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seasonDiv',inputType:'select',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitPrice',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'itemNo',inputType:'text',style:'',value:'',width:'70',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coDiv',inputType:'select',style:'',value:'',width:'70',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'렌터카'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고속'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})