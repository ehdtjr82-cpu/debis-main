/*amd /ui/tn/cs/membermgnt/tn_101_01_04b.xml 22579 92d6260a349caa358cfd54b35994cef214ddc0e6f1542aca9fe1b39ed3e3a3af */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'startDt',name:'출발일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'appDt',name:'신청일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_commList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'appDt',name:'신청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hawjuCnt',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sunsaCnt',name:'선사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fowordCnt',name:'포워드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bpCnt',name:'주선운송사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carCnt',name:'일반차주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totCnt',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hawjuCntAdmit',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sunsaCntAdmit',name:'선사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fowordCntAdmit',name:'포워드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bpCntAdmit',name:'주선운송사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carCntAdmit',name:'일반차주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAdmit',name:'합계',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_runResultDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mbrClsNm',name:'사업자구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbrNm',name:'회원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiAddr',name:'사업자주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrYn',name:'컨테이너여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkYn',name:'벌크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitYn',name:'승인여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.cs.membermgnt.RetrieveMeberEntryAppAggrCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_commList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_commList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDetail',action:'/ncall.tn.cs.membermgnt.RetrieveMeberEntryAppAggrDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_runResultDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_runResultDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDetail_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const comboOptions = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "acb_lobranCd"
  }];
  $c.data.setGauceUtil($p, comboOptions);
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.wrkYm = $c.date.getServerDateTime($p);
  udc_fromToCalendar.setInitDate(scwin.wrkYm, scwin.wrkYm);
  $c.data.setPopupTitle($p, "회원승인현황");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  let chkVal = await $c.gus.cfValidate($p, [tbl_search]);
  if (!chkVal) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_startDt.getValue(), ed_startDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_startDt.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// Formatter
//-------------------------------------------------------------------------
scwin.f_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  if ($c.gus.cfIsNull($p, data)) return;
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  if (columnId == "lobranNm") {
    gr_commList.setCellColor(rowIndex, columnId, $c.gus.decode($p, data, "미승인", "red", "black"));
  } else if (columnId == "cntrYn") {
    data = $c.gus.decode($p, data.trim(), "0", "N", "1", "Y", "");
  } else if (columnId == "bulkYn") {
    data = $c.gus.decode($p, data.trim(), "0", "N", "1", "Y", "");
  }
  return data;
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_commList.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
};

//상세조회 완료
scwin.sbm_retrieveDetail_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_runResultDetail.getTotalRow();
  spn_totalRowDtl.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  } else {
    gr_runResultDetail.setFocusedCell(0, 0);
  }
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  console.log("scwin.btn_clear_onclick");
  scwin.f_fieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  console.log("scwin.btn_search_onclick");
  scwin.f_retrieve();
};

//회원가입신청집계 그리드 클릭 > 상세 조회
scwin.gr_commList_oncellclick = function (rowIndex, columnIndex, columnId) {
  dma_search.set("lobranCd", ds_commList.getCellData(rowIndex, "lobranCd"));
  dma_search.set("appDt", ds_commList.getCellData(rowIndex, "appDt"));
  $c.sbm.execute($p, sbm_retrieveDetail);
};

//회원가입신청상세 그리드 더블클릭 > 메뉴 이동
scwin.gr_runResultDetail_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId != "busiNm") return;
  let paramObj = {
    appDt: ds_commList.getCellData(ds_commList.getRowPosition(), "appDt"),
    busiNm: ds_runResultDetail.getCellData(rowIndex, "busiNm"),
    admitYn: ds_runResultDetail.getCellData(rowIndex, "admitYn")
  };
  $c.win.openMenu($p, "회원승인", "/ui/tn/cs/membermgnt/tn_101_01_02b.xml", "tn_101_01_02b.jsp", paramObj);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'승인점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobranCd',search:'start',style:'width:200px;',submenuSize:'auto',mandatory:'true',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.lobranCd',visibleRowNum:'20',searchTarget:'value',title:'승인점소'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'dma_search',refEdDt:'endDt',refStDt:'startDt',style:'',edFromId:'ed_startDt',edToId:'ed_endDt',mandatoryFrom:'true',mandatoryTo:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'회원가입신청 집계',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',gridID:'gr_commList',gridUpYn:'N',templateYn:'N',grdDownOpts:'{"fileName":"회원가입신청집계", "type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_commList',style:'',autoFit:'allColumn',id:'gr_commList',visibleRowNum:'12',class:'wq_gvw',readOnly:'true','ev:oncellclick':'scwin.gr_commList_oncellclick',focusMode:'row'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'신청일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'490',inputType:'text',id:'column17',value:'신청',displayMode:'label',colSpan:'7',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'630',inputType:'text',id:'column5',value:'승인',displayMode:'label',colSpan:'9',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',value:'화주',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column38',value:'선사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column37',value:'포워드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',value:'주선운송사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'일반차주',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'',style:'',id:'column62',value:'합계계산',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column33',value:'점소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column32',value:'점소코드',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'화주',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column58',value:'선사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column54',value:'포워드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column50',value:'주선운송사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',value:'일반차주',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'합계계산',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'합계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'appDt',displayMode:'label',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'hawjuCnt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sunsaCnt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'fowordCnt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bpCnt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'carCnt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'sumCnt',value:'',displayMode:'label',expression:'Number(display(\'hawjuCnt\'))+Number(display(\'sunsaCnt\'))+Number(display(\'fowordCnt\'))+Number(display(\'bpCnt\'))+Number(display(\'carCnt\'))',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totCnt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'lobranNm',displayMode:'label',textAlign:'left',customFormatter:'scwin.f_customFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lobranCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'hawjuCntAdmit',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sunsaCntAdmit',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'fowordCntAdmit',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bpCntAdmit',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'carCntAdmit',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'sumAdmit',value:'',displayMode:'label',expression:'Number(display(\'hawjuCntAdmit\'))+Number(display(\'sunsaCntAdmit\'))+Number(display(\'fowordCntAdmit\'))+Number(display(\'bpCntAdmit\'))+Number(display(\'carCntAdmit\'))',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totAdmit',displayMode:'label',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column29',displayMode:'label',textAlign:'right',expression:'sum(\'hawjuCnt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column28',displayMode:'label',textAlign:'right',expression:'sum(\'sunsaCnt\')'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column27',displayMode:'label',textAlign:'right',expression:'sum(\'fowordCnt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',expression:'sum(\'bpCnt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',expression:'sum(\'carCnt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',expression:'sum(\'sumCnt\')'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',expression:'sum(\'hawjuCntAdmit\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column60',displayMode:'label',textAlign:'right',expression:'sum(\'sunsaCntAdmit\')'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column56',displayMode:'label',textAlign:'right',expression:'sum(\'fowordCntAdmit\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column52',displayMode:'label',textAlign:'right',expression:'sum(\'bpCntAdmit\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column44',displayMode:'label',textAlign:'right',expression:'sum(\'carCntAdmit\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',expression:'sum(\'sumAdmit\')'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spn_totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'회원가입신청 상세',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownUserAuth:'X',gridID:'gr_runResultDetail',templateYn:'N',gridUpYn:'N',grdDownOpts:'{"fileName":"회원가입신청상세", "type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_runResultDetail',id:'gr_runResultDetail',style:'',visibleRowNum:'7',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_runResultDetail_oncelldblclick',focusMode:'row'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'사업자구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'회원명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'사업자등록번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'전화번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'사업자명',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'사업자주소',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'컨테이너여부',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'벌크여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'승인여부',width:'100',hidden:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'mbrClsNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mbrNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'telNo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNm',inputType:'link',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiAddr',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrYn',inputType:'text',width:'120',customFormatter:'scwin.f_customFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bulkYn',inputType:'text',width:'100',customFormatter:'scwin.f_customFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'admitYn',inputType:'text',width:'100',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spn_totalRowDtl',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})