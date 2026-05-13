/*amd /ui/ac/fi/gnrlaccount/settmgnt/fi_204_02_02p.xml 18086 26eb5a27d9e7a45aace38a2971ca3ab6e25cc580a41c45a4093a9b17dfe3deff */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipDtSt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCdSt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtEnd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postYn',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCdEnd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'elecApprvInfoYn',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cancleApprvNoDel',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'dtClsCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_slipNo',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_txt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'checkYn',name:'checkYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'작성부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsum',name:'차변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csum',name:'대변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postAcctDeptNm',name:'회계부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_getMaxCloseYm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_search',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveSlipListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_txt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_txt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_delete',action:'/ac.fi.gnrlaccount.settmgnt.ReverseControlSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_txt","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_getMaxCloseYm_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 실물화전표 삭제
 * 메뉴경로 : 회계/재무회계/일반회계/결산관리/결산조정전표조회
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ac/fi/gnrlaccount/settmgnt/fi_204_02_02p.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-17
 * 수정이력  :
 *    - 2025-12-17      정승혜    최초작성
 *    - 2026-01-18      정승혜    기타수정
 *    - 2026-01-19      정승혜    submitdone 조건수정
 * 메모 : 부모페이지 fi_204_02_02b
 * 실물화 역전표발행 시 에러발생됨 -> asis 같은현상 
 * 보통 현업에서는 사번6자리로 아이디를 사용하고있음. 현재 inswave 계정이 7자리로 되어있어 오류가 발생한걸로 보입니다. 
 - Test ID정보 : 111973 / 1111
 * 조회조건 : 20110101~20111231
 */
scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin"); // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님
scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사  
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드 
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.isSubCompany = false;

//hidden
scwin.txtCoClsCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.f_Header();
  scwin.getMaxCloseYm();
};

//-------------------------------------------------------------------------
// 전월 마감여부 
//-------------------------------------------------------------------------
scwin.getMaxCloseYm = function () {
  $c.sbm.execute($p, sbm_tr_getMaxCloseYm);
};

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  dma_search2.set("coCd", scwin.vCoCd);
  ds_slipNo.insertRow();
  scwin.f_Setting();
};

//-------------------------------------------------------------------------
// 조회조건 셋팅 
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  dma_search.set("slipDtSt", scwin.strToDate.substring(0, 6) + "01");
  dma_search.set("slipDtEnd", scwin.strToDate);

  //ed_slipDtSt.setValue(scwin.strToDate.substring(0,6)+"01");
  //ed_slipDtEnd.setValue(scwin.strToDate); 
  //ed_slipDtSt.focus();
  lc_dtClsCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 재조회
//-------------------------------------------------------------------------
scwin.f_SearchClear = function () {
  $c.gus.cfInitObjects($p, searchTable);
  scwin.f_Setting();
};

//-------------------------------------------------------------------------
// 조회(거래목록)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_slipDtSt, ed_slipDtEnd]);
  if (!ret) {
    return false;
  }
  if (!(await $c.gus.cfIsAfterDate($p, ed_slipDtSt.getValue().trim(), ed_slipDtEnd.getValue().trim()))) {
    await $c.win.alert($p, MSG_CM_ERR_039);
    ed_slipDtSt.focus();
    return false;
  }
  dma_search.set("coCd", scwin.vCoCd);
  dma_search.set("slipKndCd", 'A10');
  dma_search.set("postYn", '1');
  $c.sbm.execute($p, sbm_tr_search);
};

//-------------------------------------------------------------------------
// 실물화전표 역전표 발행
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  if (ds_txt.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_056, "데이타"));
    return;
  }
  if ((await $c.win.confirm($p, "선택하신  실물화전표의 역전표발행 하시겠습니까?")) == true) {
    $c.sbm.execute($p, sbm_tr_delete);
  }
};

//-------------------------------------------------------------------------
// 상세
//-------------------------------------------------------------------------
scwin.f_Detail = function () {
  // 호출되는곳 없음
};

// 닫기
scwin.f_close = function () {
  $c.win.closePopup($p);
};

// 서브미션
scwin.sbm_tr_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_txt.getRowCount());
  if (ds_txt.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    ds_txt.setRowPosition(0);
    $c.gus.cfGoPrevPosition($p, gr_txt, 0);
    ds_slipNo.setCellData(0, "slipNo", ds_txt.getCellData(0, "slipNo"));
  }
};

// 서브미션
scwin.sbm_tr_delete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_004); // 성공적으로삭제하였습니다
  ds_txt.removeAll();
  scwin.f_Retrieve();
  //gr_txt.ColumnProp('checkYn','HeadCheck')="false";
};

// 서브미션
scwin.sbm_tr_getMaxCloseYm_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let thisYm = scwin.strToDate; // 오늘일자 가져오기
  //최소 미마감월이 당월이 아닐때
  if (ds_getMaxCloseYm.getCellData(0, "closeYm") != thisYm.substring(0, 6)) {
    let closeYm = ds_getMaxCloseYm.getCellData(0, "closeYm");
    let firstDay = closeYm.substring(0, 4) + closeYm.substring(4, 6) + "01"; // 1일
    let lastDay = closeYm.substring(0, 4) + closeYm.substring(4, 6) + new Date(closeYm.substring(0, 4), closeYm.substring(4, 2), 0).getDate(); // 마지막날
    ed_slipDtEnd.setValue(lastDay); //작성일자 셋팅
    ed_slipDtSt.setValue(firstDay);
  } else {
    let firstDay = thisYm.substring(0, 4) + thisYm.substring(4, 6) + "01"; //당월 1일
    let lastDay = thisYm.substring(0, 4) + thisYm.substring(4, 6) + new Date(thisYm.substring(0, 4), thisYm.substring(4, 2), 0).getDate(); //당월 마지막날
    ed_slipDtEnd.setValue(lastDay); //작성일자 셋팅
    ed_slipDtSt.setValue(firstDay);
  }
};
scwin.gr_txt_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo") {
    $c.gus.cfShowSlipInfo($p, ds_txt.getCellData(rowIndex, "slipNo"));
  }
};
scwin.gr_txt_onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    let row = gr_txt.getFocusedRowIndex();
    let col = gr_txt.getFocusedColumnIndex();
    if (row < ds_txt.getRowCount() - 1) {
      gr_txt.setFocusedCell(row + 1, 0);
    }
    return false;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'searchTable',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'req',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dtClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.dtClsCd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작성일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'slipDt'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'회계일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'postDt'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'regDt'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'slipDtSt',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar1',refEdDt:'slipDtEnd',edFromId:'ed_slipDtSt',edToId:'ed_slipDtEnd',mandatoryTo:'true',mandatoryFrom:'true',class:'req',titleTo:'작성일자To',titleFrom:'작성일자From'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_SearchClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_txt',id:'gr_txt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.gr_txt_oncellclick','ev:onkeydown':'scwin.gr_txt_onkeydown'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'작성일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'작성부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'전표종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'전표종류',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'차변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'대변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'회계일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'회계부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'작성자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'checkYn',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',readOnly:'false',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',style:';color:blue;',value:'',width:'100',class:'underline'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawAcctDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndCd',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dsum',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'csum',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'postDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'postAcctDeptNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'drawEmpNm',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button','ev:onclick':'scwin.f_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button','ev:onclick':'scwin.f_Delete',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실물화 역전표발행'}]}]}]}]}]}]}]})