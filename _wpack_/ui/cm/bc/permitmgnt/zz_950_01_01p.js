/*amd /ui/cm/bc/permitmgnt/zz_950_01_01p.xml 9021 adeb49c3674934e9a5ffc25a39653817b75520fdb2a53702ae5faa649305737c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'apprCd',name:'인허가 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprNm',name:'인허가명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprTypeCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprNm',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/cm.bc.permitmgnt.RetrieveApprNmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 인허가명 조회
 * 메뉴경로 : 공통/총무업무/인허가 관리/인허가 등록/승인
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/permitmgnt/zz_950_01_01p.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-11-04
 * 수정이력  :
 *    - 2025-11-04      정승혜    최초작성
 *    - 2026-02-10      정승혜    기타수정
 * 메모 : 
 * 부모페이지 zz_950_01_01b
 * asis 엑셀다운 안됨
 */
scwin.memJson = $c.data.getMemInfo($p);
scwin.empNo = scwin.memJson.userId;
scwin.params = "";
scwin.g_closeTF = "";
scwin.apprTypeCd = "";
scwin.apprNm = "";
scwin.apprCd = "";
scwin.selectedRowIndex = 0;
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.g_closeTF = scwin.params["closeTF"] == null ? "T" : scwin.params["closeTF"];
  scwin.apprTypeCd = scwin.params["apprTypeCd"] == null ? "" : scwin.params["apprTypeCd"];
  scwin.apprNm = scwin.params["apprNm"] == null ? "" : scwin.params["apprNm"];
  scwin.apprCd = scwin.params["apprCd"] == null ? "" : scwin.params["apprCd"];
  scwin.f_createHeader();
  scwin.f_FieldClear();
  if (scwin.apprTypeCd != "") {
    dma_condition.set("apprTypeCd", scwin.apprTypeCd);
  }
  if (scwin.apprNm != "") {
    dma_condition.set("apprNm", scwin.apprNm);
  }
  if (scwin.apprCd != "") {
    dma_condition.set("apprCd", scwin.apprCd);
  }
  scwin.f_retrieve();
};
scwin.f_createHeader = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};
scwin.f_retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [tb_searchCondition]))) {
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

// 팝업 버튼에 의한 팝업호출 여부 리턴
scwin.f_isPopUpClicked = function () {
  // 호출되는곳 없음
};

// 팝업 여부 체크
scwin.f_canOpenPopUp = function () {
  // 호출되는곳 없음
};

// 팝업 검색결과가 한건일 경우 기본 처리방법
scwin.f_getDefaultAutoClose = function () {
  // 호출되는곳 없음
};

// Windows Close
scwin.f_WinClose = function () {
  $c.win.closePopup($p);
};

// 조회 필드 Clear
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition);
  scwin.f_SetSrchDefault();
};

// 조회 기본값 설정
scwin.f_SetSrchDefault = function () {
  // 함수내용없음
};
scwin.showHeader = function () {
  // 호출되는곳 없음
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_master.getRowCount());
  gr_master.setFocusedCell(0, "apprNm", false);
  if (ds_master.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다	
  } else if (ds_master.getRowCount() == 1 && scwin.g_closeTF == "T") {
    var rtnValues = new Array();
    rtnValues[0] = ds_master.getCellData(0, "apprCd"); // 인허가 코드
    rtnValues[1] = ds_master.getCellData(0, "apprNm"); // 인허가명
    $c.win.closePopup($p, rtnValues);
  }
};
scwin.gr_master_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  let rtnValues = new Array();
  rtnValues[0] = ds_master.getCellData(rowIndex, "apprCd"); // 인허가 코드
  rtnValues[1] = ds_master.getCellData(rowIndex, "apprNm"); // 인허가명

  $c.win.closePopup($p, rtnValues);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인허가명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_apprNm',style:'',ref:'data:dma_condition.apprNm',maxlength:'100'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'인허가명 조회',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_master',grdDownOpts:'{"fileName" : "인허가명조회.xlsx" , "sheetName" : "인허가명조회" , "type" : "1"}',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_master_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'인허가 코드',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'인허가명',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'apprCd',inputType:'text',removeBorderStyle:'false',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'apprNm',inputType:'text',removeBorderStyle:'false',textAlign:'left',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button','ev:onclick':'scwin.f_WinClose'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})