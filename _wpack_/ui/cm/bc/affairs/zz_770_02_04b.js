/*amd /ui/cm/bc/affairs/zz_770_02_04b.xml 14457 6451f7e57b6949e5cf751d249cd01fe8c3c3ab4847cb5451857debb19e98e2ad */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'postSeq',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_out'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'deptNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'jikgubNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'name',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fieldUnfmTop',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fieldUnfmBot',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'suzuki',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wntrJacket',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'remark',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postSeq',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_out_FillUse'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'deptNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'jikgubNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'name',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fieldUnfmTop',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fieldUnfmBot',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'suzuki',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wntrJacket',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'remark',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postSeq',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Tmp_FillUse'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'deptNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'jikgubNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'name',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fieldUnfmTop',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fieldUnfmBot',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'suzuki',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wntrJacket',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'remark',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postSeq',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'deptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jikgubNm',name:'직급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fieldUnfmTop',name:'현장복(상)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fieldUnfmBot',name:'현장복(하)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'suzuki',name:'스즈끼(신장)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wntrJacket',name:'동잠바',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remark',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postSeq',name:'name9',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/cm.bc.affairs.RetrieveExcelSheathListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cond","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_save',action:'/cm.bc.affairs.SaveExcelSheathListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_out","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : DPCT신청현황
 * 메뉴경로 : 공통/총무업무/피복관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/affairs/zz_770_02_04b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-11-10
 * 수정이력  :
 *    - 2025-11-10      정승혜    최초작성
 *    - 2026-03-16      정승혜    기타수정
 * 메모 :
 * 조회조건 : 201701
 */

//-------------------------------------------------------------------------
// 화면로딩시 Default 값 Setting
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.f_CreateSearchHeader();
  scwin.f_CondInit();
  const param = [{
    method: "getLuxeComboData",
    param1: "SheathMgntEBC",
    param2: "retrieveSheathPostSeqCd",
    compID: "lc_postSeq"
  }];
  $c.data.setGauceUtil($p, param);
};

//-------------------------------------------
// 조건 초기화
//-------------------------------------------
scwin.f_CondInit = function () {
  $c.gus.cfInitObjects($p, tbl_search);
};

//-------------------------------------------------------------------------
// 조회조건 헤더 
//-------------------------------------------------------------------------
scwin.f_CreateSearchHeader = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [lc_postSeq]);
  if (!ret) {
    return;
  }
  $c.sbm.execute($p, sbm_tr_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = function () {
  $c.sbm.execute($p, sbm_tr_save);
};

//-------------------------------------------
// 엑셀업로드 
//-------------------------------------------
scwin.f_UpLoad = async function () {
  if (ds_out.getModifiedIndex().length != 0) {
    let confirm = await $c.win.confirm($p, "변경사항이 반영되지 않았습니다. 계속 하시겠습니까?");
    if (!confirm) {
      return;
    }
  }
  ds_out.removeAll();
  ds_out.setJSON([]);
  let options = {};
  if (udc_out.getUpExt() == "1") {
    // csv
    options = {
      "header": 1,
      "type": "1",
      "startRowIndex": 0,
      "footerExist": 0,
      "fileName": "gridDataUpload.csv"
    };
  } else {
    // 엑셀
    options = {
      "headerExist": 1,
      "type": "1",
      "startRowIndex": 0,
      "footerExist": 0,
      "fileName": "gridDataUpload.xlsx"
    };
  }
  await udc_out.uploadGridViewExcel(gr_out, options);
};
scwin.gr_out_onfilereadend = async function (value) {
  let ret = await scwin.f_UpLoad_after();
  if (!ret) {
    console.log("오류발생");
    return;
  } else {
    await $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다.");
  }
};
scwin.f_UpLoad_after = function () {
  for (let i = 0; i < ds_out.getRowCount(); i++) {
    ds_out.setCellData(i, "postSeq", lc_postSeq.getValue());
    ds_out.modifyRowStatus(i, "C");
  }
  totalRows.setValue(ds_out.getRowCount());
  return true;
};

//-------------------------------------------------------------------------
// 파일 명 체크하는 로직(CSV)  
//-------------------------------------------------------------------------
scwin.f_CheckFileExt = function () {};
scwin.sbm_tr_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_out.getRowCount());
  if (ds_out.getRowCount() == "0") {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_tr_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
};
scwin.sbm_post_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
};

//업로드테스트
scwin.test = function () {
  ds_out.insertRow();
  const param = [{
    "deptNm": "DPCT운영팀",
    "jikgubNm": "장비직",
    "name": "김정술",
    "fieldUnfmTop": "100",
    "fieldUnfmBot": "32",
    "suzuki": "",
    "wntrJacket": "",
    "remark": "",
    "postSeq": "201301"
  }, {
    "deptNm": "DPCT운영팀",
    "jikgubNm": "장비직",
    "name": "박민",
    "fieldUnfmTop": "100",
    "fieldUnfmBot": "32",
    "suzuki": "",
    "wntrJacket": "",
    "remark": "",
    "postSeq": "201301"
  }];
  ds_out.setJSON(param);
  for (let i = 0; i < ds_out.getRowCount(); i++) {
    ds_out.modifyRowStatus(i, "C");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'게시차수',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150 req',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_postSeq',style:'',submenuSize:'auto',mandatory:'true',ref:'data:dma_cond.postSeq',visibleRowNum:'25'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_CondInit'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName" : "DPCT신청현황.xlsx" ,"type" : "1" }',gridID:'gr_out',btnUser:'N',gridUpYn:'Y',gridUpFn:'scwin.f_UpLoad',id:'udc_out',gridUpUserAuth:'U'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true','ev:onfilereadend':'scwin.gr_out_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column26',value:'부서명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'직급',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'성명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',style:'',id:'column23',value:'SIZE',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'비고',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'현장복(상)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'현장복(하)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'스즈끼(신장)',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'동잠바',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'deptNm',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'jikgubNm',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'name',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fieldUnfmTop',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fieldUnfmBot',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'suzuki',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wntrJacket',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'remark',inputType:'text',style:'',value:'',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''}},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})