/*amd /ui/cm/bc/affairs/zz_770_02_05b.xml 21204 ce05f32c9704da1ec94963cd60fa3c0383f0d10a0c97326ac694e8af73a8423f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'postSeqCond',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ckuseYn2',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_out'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sortSeq',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'itemNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dressType',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'topbotDiv',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seasonDiv',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'unitPrice',name:'',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sortSeq',name:'출력순서',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'itemNo',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'회사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dressType',name:'복장종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'topbotDiv',name:'상하구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seasonDiv',name:'동하복구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitPrice',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/cm.bc.affairs.RetrieveSheathCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cond","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_save',action:'/cm.bc.affairs.RegistSheathCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_out","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 품목관리
 * 메뉴경로 : 공통/총무업무/피복관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/affairs/zz_770_02_05b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-11-13
 * 수정이력  :
 *    - 2025-11-13      정승혜    최초작성
 *    - 2026-01-28      정승혜    기타수정
 * 메모 :
 * 조회조건 : 
 * 
 */
scwin.isStarted = false;

//-----------------------------------------------------------------------------
// 화면로딩시 
//-----------------------------------------------------------------------------
scwin.onpageload = function () {
  const param = [{
    method: "getGridComboByUpperCd",
    param1: "DRESS",
    param2: "TOPBOT",
    param3: false,
    compID: "gr_out:topbotDiv"
  }, {
    method: "getGridComboByUpperCd",
    param1: "DRESS",
    param2: "SEASON",
    param3: false,
    compID: "gr_out:seasonDiv"
  }];
  $c.data.setGauceUtil($p, param);
};
scwin.ondataload = function () {
  $c.util.setTimeout($p, function () {
    lc_ckuseYn2.setValue(1);
    scwin.f_DsHeaderSet();
  }, {
    "delay": 200
  });
};
scwin.f_DsHeaderSet = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
  $c.gus.cfDisableObjects($p, [ed_sortSeq, ed_itemNo, lc_cdNmAbbr, ed_dressType, lc_topbotDiv, lc_seasonDiv, ed_unitPrice, lc_useYn]);
  //$c.sbm.execute(sbm_tr_retrieve);
  scwin.f_Retrieve();
};

//-----------------------------------------------------------------------------
// 조회
//-----------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.gus.cfDisableObjects($p, [ed_sortSeq, ed_itemNo, lc_cdNmAbbr, ed_dressType, lc_topbotDiv, lc_seasonDiv, ed_unitPrice, lc_useYn]);
  if (scwin.isStarted == false) {
    dma_cond.set("ckuseYn2", "");
  }
  $c.sbm.execute($p, sbm_tr_retrieve);
};

//-----------------------------------------------------------------------------
//수정 
//-----------------------------------------------------------------------------
scwin.f_update = function () {
  $c.gus.cfDisableObjects($p, [bCreate, bUpdate]);
  $c.gus.cfEnableObjects($p, [ed_sortSeq, ed_unitPrice, lc_useYn]);
};

//-----------------------------------------------------------------------------
//저장 
//-----------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_out.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, "변경된 정보가 없습니다.");
  }
  let ret = await $c.gus.cfValidate($p, [gr_out]);
  if (!ret) {
    return;
  }
  ret = await scwin.f_ValueChk();
  if (ret) {
    if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
      $c.sbm.execute($p, sbm_tr_save);
    }
  } else {
    return;
  }
};

//-----------------------------------------------------------------------------
// 저장시 필수 값 체크 
//-----------------------------------------------------------------------------
scwin.f_ValueChk = async function () {
  if (ed_sortSeq.getValue() == "") {
    await $c.win.alert($p, "출력순서는 필수항목입니다.");
    return false;
  }
  if (ed_itemNo.getValue() == "") {
    await $c.win.alert($p, "복장종류코드는 필수항목입니다.");
    return false;
  }
  if (ed_dressType.getValue() == "") {
    await $c.win.alert($p, "복장종류는 필수항목입니다.");
    return false;
  }
  if (lc_topbotDiv.getValue() == "") {
    await $c.win.alert($p, "상하의 구분은 필수항목입니다.");
    return false;
  }
  if (lc_seasonDiv.getValue() == "") {
    await $c.win.alert($p, "동하복 구분은 필수항목입니다.");
    return false;
  }
  if (ed_unitPrice.getValue() == "") {
    await $c.win.alert($p, "단가는 필수항목입니다.");
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  $c.gus.cfEnableObjects($p, [ed_sortSeq, ed_itemNo, lc_cdNmAbbr, ed_dressType, lc_topbotDiv, lc_seasonDiv, ed_unitPrice, lc_useYn]);
  $c.gus.cfDisableObjects($p, [bCreate, bUpdate]);
  let row = ds_out.insertRow();
  ds_out.setCellData(row, "unitPrice", 0);
  ds_out.setCellData(row, "useYn", 0);
  $c.gus.cfGoPrevPosition($p, gr_out, row);
  ed_sortSeq.focus();
};

//-------------------------------------------------------------------------
// 취소버튼 클릭시 조회시의 상태로 변경한다.
//-------------------------------------------------------------------------
scwin.f_Delete = function () {
  $c.sbm.execute($p, sbm_tr_retrieve);
  $c.gus.cfDisableObjects($p, [ed_sortSeq, ed_itemNo, lc_cdNmAbbr, ed_dressType, lc_topbotDiv, lc_seasonDiv, ed_unitPrice, lc_useYn]);
};

// 조회 서브미션
scwin.sbm_tr_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_out.getRowCount());

  // 조회한후에 첫번째 row 포커스하여 오른쪽 group 데이터 조회
  $c.gus.cfGoPrevPosition($p, gr_out, 0);
  if (ds_out.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  $c.gus.cfEnableObjects($p, [bCreate, bUpdate, bDelete]);
  if (scwin.isStarted == false) {
    dma_cond.set("ckuseYn2", "1");
    scwin.isStarted = true;
  }
};

// 저장 서브미션
scwin.sbm_tr_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, "정상적으로 반영 되었습니다.");
  scwin.f_Retrieve();
};

// 엑셀다운 2+4+8+16
scwin.f_Excel = async function () {
  let sheetTitle = "게시차수List";
  $c.data.downloadGridViewExcel($p, gr_out, {
    fileName: sheetTitle + ".xlsx",
    sheetName: sheetTitle,
    type: 1
  });
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'lc_ckuseYn2',style:'width:148px; height:21px; ',submenuSize:'auto',search:'start',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_cond.ckuseYn2',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'품목List',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_out',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{class:'gvwbox',id:'grd_section1'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',style:'',visibleRowNum:'16',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'20',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column28',value:'출력</br>순서',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'코드',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'회사',width:'70'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column27',value:'복장</br>종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'상하</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column23',value:'동하복</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'사용</br>여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sortSeq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'itemNo',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cdNmAbbr',inputType:'select',style:'',value:'',width:'70',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'렌터카'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고속'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'dressType',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',style:'',id:'topbotDiv',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',style:'',id:'seasonDiv',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'',style:'',id:'unitPrice',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'useYn',value:'',displayMode:'label',allOption:'',chooseOption:'true',chooseOptionLabel:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'품목등록',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출력순서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_sortSeq',style:'',ref:'data:ds_out.sortSeq'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'복장종류코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w150',id:'ed_itemNo',style:'',ref:'data:ds_out.itemNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_cdNmAbbr',style:'',submenuSize:'auto',chooseOptionLabel:'선택',ref:'data:ds_out.cdNmAbbr',displayMode:'label',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고속'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'D'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'복장종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_dressType',style:'',ref:'data:ds_out.dressType'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상하의 구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_topbotDiv',style:'',submenuSize:'auto',chooseOptionLabel:'선택',ref:'data:ds_out.topbotDiv',displayMode:'label',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상의'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하의'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일체형'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동하복 구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_seasonDiv',style:'',submenuSize:'auto',chooseOptionLabel:'선택',ref:'data:ds_out.seasonDiv',displayMode:'label',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하복'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'동복'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'W'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'단가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_unitPrice',style:'',ref:'data:ds_out.unitPrice'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용 여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_useYn',style:'',submenuSize:'auto',chooseOptionLabel:'선택',ref:'data:ds_out.useYn',displayMode:'label',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'bCreate',style:'',type:'button','ev:onclick':'scwin.f_Create'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'bUpdate',style:'',type:'button','ev:onclick':'scwin.f_update'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'bDelete',style:'',type:'button','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})