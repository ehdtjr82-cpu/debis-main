/*amd /AI/op_101_03_02b.xml 17894 b913dbf2d8523e8db49d230eacea2d76ca2600a9bf7bbc5830b382bd99aee04b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dptWrkPlNm',name:'출발역작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발역작업장코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'oGDS_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dptWrkPlNm',name:'출발역작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발역작업장코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_railroadSchedule',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dptStnWrkPlCd',name:'출발역작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발역작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlCd',name:'도착역작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착역작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'runSeq',name:'운행순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dptHh',name:'출발시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'도착시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtc',name:'거리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frt',name:'임률',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_railroadSchedule',action:'/ds.op.rscconfirm.transrscconfirm.SaveRailroadScheduleCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_railroadSchedule","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_railroadSchedule_submitdone','ev:submiterror':'scwin.sbm_railroadSchedule_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveRailroadScheduleListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"oGDS_view_cond","key":"IN_DS1"},{"id":"ds_railroadSchedule","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_railroadSchedule","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  dma_view_cond.set("dptWrkPlNm", "");
  dma_view_cond.set("dptWrkPlCd", "");
  oGDS_view_cond.set("dptWrkPlNm", "");
  oGDS_view_cond.set("dptWrkPlCd", "");
  if (ds_railroadSchedule.getRowCount() == 0) {
    btn_addRow.setDisabled(true);
    btn_deleteRow.setDisabled(true);
  }
};
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableObjects($p, [ed_dptWrkPlCd, txt_dptWrkPlNm]);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_railroadScheduleExcel = function () {
  $c.data.downloadGridViewExcel($p, gr_railroadSchedule, {
    fileName: "철송스케줄등록.xlsx",
    sheetName: "철송스케줄등록"
  });
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.f_Save = async function () {
  if (ds_railroadSchedule.getUpdatedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return false;
  }
  let chkValidate = await $c.gus.cfValidate($p, [gr_railroadSchedule]);
  if (chkValidate && (await scwin.f_checkDistance())) {
    let chk = await $c.win.confirm($p, "저장하시겠습니까?");
    if (chk == true) {
      await $c.sbm.execute($p, sbm_railroadSchedule);
      scwin.f_Retrieve();
    }
  }
};
scwin.f_checkDistance = async function () {
  for (let i = 0; i < ds_railroadSchedule.getRowCount(); i++) {
    let rowStatus = ds_railroadSchedule.getRowStatus(i);
    if (rowStatus == "C" || rowStatus == "U") {
      if (ds_railroadSchedule.getCellData(i, "dtc") == 0) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, new Array("거리입력 값", " 0 "));
        gr_railroadSchedule.setFocusedCell(i, "dtc");
        return false;
      }
    }
  }
  return true;
};
scwin.f_changeDistance = function (pCode, pRowPos) {
  let pCompareCd;
  let pDistance;
  let pNoChange = 0;
  for (let i = 0; i < ds_railroadSchedule.getRowCount(); i++) {
    if (i == pRowPos) continue;
    pCompareCd = ds_railroadSchedule.getCellData(i, "dptStnWrkPlCd") + ds_railroadSchedule.getCellData(i, "arvStnWrkPlCd");
    pDistance = ds_railroadSchedule.getCellData(i, "dtc");
    if (pCode == pCompareCd) {
      ds_railroadSchedule.setCellData(pRowPos, "dtc", pDistance);
      return true;
    }
    pCompareCd = "";
    pDistance = "";
  }
  if (pNoChange == 0) ds_railroadSchedule.setCellData(pRowPos, "dtc", 0);
};
scwin.f_changeDistanceAll = function (row, colid) {
  let pCompareCd = "";
  let pDistance = "";
  let pCode = "";
  pCode = ds_railroadSchedule.getCellData(row, "dptStnWrkPlCd") + ds_railroadSchedule.getCellData(row, "arvStnWrkPlCd");
  pDistance = ds_railroadSchedule.getCellData(row, "dtc");
  for (let i = 0; i < ds_railroadSchedule.getRowCount(); i++) {
    if (i == row) continue;
    pCompareCd = ds_railroadSchedule.getCellData(i, "dptStnWrkPlCd") + ds_railroadSchedule.getCellData(i, "arvStnWrkPlCd");
    if (pCode == pCompareCd) {
      ds_railroadSchedule.setCellData(i, "dtc", pDistance);
    }
    pCompareCd = "";
  }
};
scwin.f_EditNone = function () {
  gr_railroadSchedule.setColumnProperty("dptWrkPlNm", "readOnly", true);
  gr_railroadSchedule.setColumnProperty("arvWrkPlNm", "readOnly", true);
};
scwin.f_EditTrue = function () {
  gr_railroadSchedule.setColumnProperty("dptWrkPlNm", "readOnly", false);
  gr_railroadSchedule.setColumnProperty("arvWrkPlNm", "readOnly", false);
};
scwin.btn_addRow_onclick = function (e) {
  scwin.f_addRow();
};
scwin.f_addRow = function () {
  $c.data.insertRow($p, ds_railroadSchedule);
  totalRows.setValue(ds_railroadSchedule.getTotalRow());
};
scwin.btn_deleteRow_onclick = function (e) {
  scwin.f_deleteRow();
};
scwin.f_deleteRow = function () {
  if (ds_railroadSchedule.getRowCount() > 0) {
    ds_railroadSchedule.removeRow(ds_railroadSchedule.getRowPosition());
    totalRows.setValue(ds_railroadSchedule.getTotalRow());
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList;
  switch (disGubun) {
    case 1:
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveTrainWorkPlace', pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      $c.gus.cfSetReturnValue($p, rtnList, ed_dptWrkPlCd, txt_dptWrkPlNm);
      if (rtnList == null) {
        ed_dptWrkPlCd.setValue("");
        txt_dptWrkPlNm.setValue("");
      }
      break;
  }
};
scwin.f_openPopUp = function (gubun, pWinCloseTF) {
  let pSelectID = "";
  let pCode = "";
  let pName = "";
  let pDummyCode = "";
  let pdummyName = "";
  let pCurPos;
  pSelectID = "retrieveTrainWorkPlace";
  pCurPos = ds_railroadSchedule.getRowPosition();
  if (gubun == "con") {
    pCode = ed_dptWrkPlCd.getValue();
    pName = txt_dptWrkPlNm.getValue();
  } else {
    pDummyCode = gubun + "StnWrkPlCd";
    pdummyName = gubun + "WrkPlNm";
    pCode = ds_railroadSchedule.getCellData(pCurPos, pDummyCode);
    pName = ds_railroadSchedule.getCellData(pCurPos, pdummyName);
  }
  if (pName == "") {
    pCode = "";
  }
  let rtnList = $c.gus.cfCommonPopUp($p, pSelectID, pCode, pName, pWinCloseTF, "5", null, "150,170", null, null, "440", "500", null, null);
  if (rtnList != null) {
    if (gubun == "con") {
      ed_dptWrkPlCd.setValue(rtnList[0]);
      txt_dptWrkPlNm.setValue(rtnList[1]);
    } else {
      if (rtnList[0] == "N/A") {
        ds_railroadSchedule.setCellData(pCurPos, pDummyCode, $c.gus.coMap.getValue(pDummyCode));
        ds_railroadSchedule.setCellData(pCurPos, pdummyName, $c.gus.coMap.getValue(pdummyName));
      } else {
        ds_railroadSchedule.setCellData(pCurPos, pDummyCode, rtnList[0]);
        ds_railroadSchedule.setCellData(pCurPos, pdummyName, rtnList[1]);
        if (ds_railroadSchedule.getCellData(pCurPos, "dptStnWrkPlCd") != "" && ds_railroadSchedule.getCellData(pCurPos, "arvStnWrkPlCd") != "") {
          scwin.f_changeDistance(ds_railroadSchedule.getCellData(pCurPos, "dptStnWrkPlCd") + ds_railroadSchedule.getCellData(pCurPos, "arvStnWrkPlCd"), pCurPos);
        }
      }
    }
  } else {
    if (gubun == "con") {
      ed_dptWrkPlCd.setValue("");
      txt_dptWrkPlNm.setValue("");
    } else {
      ds_railroadSchedule.setCellData(pCurPos, pDummyCode, "");
      ds_railroadSchedule.setCellData(pCurPos, pdummyName, "");
    }
  }
};
scwin.f_openPopUpBefore = function (row, nmColid, cdColid, olddata, gubun, pWinCloseTF) {
  let nmVal = ds_railroadSchedule.getCellData(row, nmColid);
  if (nmVal == "") {
    ds_railroadSchedule.setCellData(row, cdColid, "");
  } else {
    if (nmVal != olddata) {
      ds_railroadSchedule.setCellData(row, cdColid, "");
      scwin.f_openPopUp(gubun, pWinCloseTF);
    }
  }
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [txt_dptWrkPlNm, ed_dptWrkPlCd]);
};
scwin.btn_refresh_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.sbm_railroadSchedule_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  totalRows.setValue(ds_railroadSchedule.getTotalRow());
};
scwin.sbm_railroadSchedule_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  totalRows.setValue(ds_railroadSchedule.getTotalRow());
  if (ds_railroadSchedule.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  btn_addRow.setDisabled(false);
  btn_deleteRow.setDisabled(false);
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.gr_railroadSchedule_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "dptWrkPlNm") {
    scwin.f_openPopUp("dpt", "F");
  } else if (columnId == "arvWrkPlNm") {
    scwin.f_openPopUp("arv", "F");
  }
};
scwin.gr_railroadSchedule_oneditend = function (rowIndex, columnId, oldValue, newValue) {
  if (columnId == "dptWrkPlNm") {
    scwin.f_openPopUpBefore(rowIndex, "dptWrkPlNm", "dptStnWrkPlCd", oldValue, "dpt", "T");
  } else if (columnId == "arvWrkPlNm") {
    scwin.f_openPopUpBefore(rowIndex, "arvWrkPlNm", "arvStnWrkPlCd", oldValue, "arv", "T");
  }
  if (columnId == "dtc") scwin.f_changeDistanceAll(rowIndex, columnId);
};
scwin.gr_railroadSchedule_oncellclick = function (rowIndex, columnIndex, columnId) {
  // TODO: 원본 JSP OnClick 이벤트 내부 로직이 주석 처리되어 있어 빈 핸들러 유지
};
scwin.ds_railroadSchedule_onrowpositionchange = function (rowIndex, oldRowIndex) {
  if (ds_railroadSchedule.getRowStatus(rowIndex) == "C") {
    scwin.f_EditTrue();
  } else {
    scwin.f_EditNone();
  }
};
scwin.ed_dptWrkPlCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dptWrkPlCd, txt_dptWrkPlNm, 1, true);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'grp_content',style:''},E:[{T:1,N:'w2:wframe',A:{id:'wfm_header',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'grp_shbox',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'grp_shbox_inner',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'grp_search_tbl',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'grp_row1',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_lbl_dptWrkPl',label:'출발역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_dptWrkPl',popupID:'',selectID:'',codeId:'ed_dptWrkPlCd',validTitle:'',nameId:'txt_dptWrkPlNm',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'grp_btn_shbox',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve','ev:onclick':'scwin.btn_retrieve_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'grp_round_box',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'grp_title_wrap',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'grp_title'},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'tbx_title',label:'철송스케줄등록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'grp_top_btn'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_railroadSchedule',focusMode:'row',id:'gr_railroadSchedule',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dptStnWrkPlCd',inputType:'text',style:'',value:'출발역작업장코드',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',style:'',value:'출발역작업장',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvStnWrkPlCd',inputType:'text',style:'',value:'도착역작업장코드',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',style:'',value:'도착역작업장 ',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'runSeq',inputType:'text',style:'',value:'운행순번',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptHh',inputType:'text',style:'',value:'출발시간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvHh',inputType:'text',style:'',value:'도착시간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dtc',inputType:'text',style:'',value:'거리(㎞)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'frt',inputType:'text',style:'',value:'임률',width:'70',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dptStnWrkPlCd',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvStnWrkPlCd',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'runSeq',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptHh',inputType:'text',style:'',value:'',width:'100',allowChar:'0-9',maxLength:'4',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvHh',inputType:'text',style:'',value:'',width:'100',allowChar:'0-9',maxLength:'4',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dtc',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'frt',inputType:'text',style:'',value:'',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'grp_grid_bottom',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'grp_grid_left',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'grp_total'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_total_lbl',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_total_unit',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'grp_grid_right',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'Y',btnRowDelYn:'Y'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'grp_btnbox',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'grp_btnbox_right',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save','ev:onclick':'scwin.btn_save_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})