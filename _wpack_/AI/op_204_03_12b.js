/*amd /AI/op_204_03_12b.xml 22492 60ad521c2ec8f8a27d707ce4f0fa3dfe1264f34190c21b5a2ecd5658608598a2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIntendDt',name:'작업예정일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slave',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'owhouseCd',name:'타창고코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'owhouseNm',name:'타창고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너',dataType:'text'}},{T:1,N:'w2:column',A:{id:'comm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlanYn',name:'작업계획여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'타창고코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'명칭',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'SHIFT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'owhouseEqKndCd',name:'중기종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'owhouseEqNrmCd',name:'중기규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'owhouseEqInputCnt',name:'대수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputPartyCnt',name:'투입반수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIntendDt',name:'작업예정일',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkplan.stvwrkplan.cmd.RetrieveOtherWarehouseStevedoringPlanVolumeAndWorkPlanCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_slave","key":"OUT_DS1"},{"id":"ds_master","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_slave","key":"OUT_DS1"},{"id":"ds_master","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkplan.stvwrkplan.cmd.SaveOtherWarehouseWorkPlanCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_master","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = "";
scwin.loUpperLobranCd = "";
scwin.hid_con_blckCd = "";
scwin.ed_FromDate = "";
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.loUpperLobranCd = $c.ses.getLoUpperLobranCd();
};
scwin.onUdcCompleted = function () {
  ica_FromDate.setValue(scwin.vCurDate);
  acb_lobran.setValue(scwin.loUpperLobranCd);
  acb_lobran.setFocus();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_ResetCon();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_save();
};
scwin.f_retrieve = async function () {
  dma_search.set("lobranCd", acb_lobran.getValue());
  dma_search.set("wrkPlCd", ed_wrkPlCd.getValue());
  dma_search.set("wrkIntendDt", ica_FromDate.getValue());
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  scwin.spa_totalRows1_update();
  scwin.spa_totalRows2_update();
  scwin.f_Alert();
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_save = async function () {
  if (ds_slave.getRowCount() == 0) return;
  if (ds_master.getRowCount() == 0) {
    await $c.win.alert($p, "저장할 자료가 없습니다");
    return;
  }
  if (!ds_master.isUpdated()) {
    await $c.win.alert($p, "변경된 사항이 없습니다");
    return;
  }
  let comp_var = "";
  let comp_var2 = "";
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "wrkPlCd") == "") {
      await $c.win.alert($p, " 타창고를 입력하십시오");
      return;
    }
    if (ds_master.getCellData(i, "shiftClsCd") == "") {
      await $c.win.alert($p, "SHIFT를 입력하십시오");
      return;
    }
    comp_var = ds_master.getCellData(i, "wrkPlCd") + ds_master.getCellData(i, "shiftClsCd");
    for (let j = 0; j < ds_master.getRowCount(); j++) {
      if (i != j) {
        comp_var2 = ds_master.getCellData(j, "wrkPlCd") + ds_master.getCellData(j, "shiftClsCd");
        if (comp_var == comp_var2) {
          await $c.win.alert($p, "타창고 SHIFT 작업계획이 중복되므로 다시 입력하십시오");
          return;
        }
      }
    }
    if (ds_master.getCellData(i, "owhouseEqKndCd") == "") {
      await $c.win.alert($p, "중기정보를 입력하십시오");
      return;
    }
    if (ds_master.getCellData(i, "owhouseEqInputCnt") == "") {
      await $c.win.alert($p, "대수를 입력하십시오");
      return;
    }
    if (ds_master.getCellData(i, "inputPartyCnt") == "") {
      await $c.win.alert($p, "투입반수를 입력하십시오");
      return;
    }
    if (ds_master.getRowStatus(i) == "C") {
      ds_master.setCellData(i, "wrkIntendDt", ica_FromDate.getValue());
    }
  }
  await $c.sbm.execute($p, sbm_save);
};
scwin.sbm_save_submitdone = async function (e) {
  scwin.f_retrieve();
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_openPopUp = async function (gbn) {
  let rtnList;
  let row = ds_master.getRowPosition();
  if (gbn == '1' || gbn == '3') {
    let wrkPlKnd = "3";
    let pWhere = "," + acb_lobran.getValue() + "," + wrkPlKnd;
    rtnList = await $c.gus.cfCommonPopUp($p, 'retrieveWrkPlInfo', gbn == '1' ? ed_wrkPlCd.getValue() : ds_master.getCellData(row, "wrkPlCd"), gbn == '1' ? txt_wrkPlNm.getValue() : ds_master.getCellData(row, "wrkPlNm"), 'F', null, null, null, null, pWhere, null, null, null, null);
    if (rtnList != null && rtnList[0] != 'N/A') {
      if (gbn == '1') {
        $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, txt_wrkPlNm);
      } else {
        let cnt = 0;
        for (let i = 0; i < ds_slave.getRowCount(); i++) {
          if (ds_slave.getCellData(i, "owhouseCd") == rtnList[0]) {
            cnt++;
          }
        }
        if (cnt == 0) {
          await $c.win.alert($p, "해당 타창고는 물량이 존재하지 않아 계획을 등록할 수 없습니다");
          return;
        }
        ds_master.setCellData(row, "wrkPlCd", rtnList[0]);
        ds_master.setCellData(row, "wrkPlNm", rtnList[1]);
      }
    } else {
      if (gbn == '1') {
        ed_wrkPlCd.setValue("");
        txt_wrkPlNm.setValue("");
      } else {
        ds_master.setCellData(row, "wrkPlCd", "");
        ds_master.setCellData(row, "wrkPlNm", "");
      }
    }
  }
  if (gbn == '2') {
    let pWhere = ",,";
    rtnList = await $c.gus.cfCommonPopUp($p, 'retrieveClntHeavyMachineryInfo', ds_master.getCellData(row, "owhouseEqKndCd"), ds_master.getCellData(row, "eqKndNm"), 'F', null, null, null, null, pWhere, null, null, null, null);
    if (rtnList != null && rtnList[0] != 'N/A') {
      ds_master.setCellData(row, "owhouseEqKndCd", rtnList[0]);
      ds_master.setCellData(row, "eqKndNm", rtnList[1]);
      ds_master.setCellData(row, "owhouseEqNrmCd", rtnList[2]);
      ds_master.setCellData(row, "eqNrmNm", rtnList[3]);
    }
  }
};
scwin.f_addRow = async function () {
  if (ds_slave.getRowCount() == 0) {
    await $c.win.alert($p, "작업물량이 존재하지 않아 계획을 등록할 수 없습니다 ");
    return;
  }
  ds_master.insertRow();
  let masterRow = ds_master.getRowPosition();
  let slaveRow = ds_slave.getRowPosition();
  ds_master.setCellData(masterRow, "wrkPlCd", ds_slave.getCellData(slaveRow, "owhouseCd"));
  ds_master.setCellData(masterRow, "wrkPlNm", ds_slave.getCellData(slaveRow, "owhouseNm"));
  grd_master.setFocusedCell(masterRow, "shiftClsCd");
  scwin.spa_totalRows2_update();
};
scwin.f_deleteRow = function () {
  ds_master.removeRow(ds_master.getRowPosition());
  scwin.spa_totalRows2_update();
};
scwin.f_cancelRow = function () {
  ds_master.undoRow(ds_master.getRowPosition());
  scwin.spa_totalRows2_update();
};
scwin.f_Alert = async function () {
  let mat_cnt = 0;
  let sla_cnt = 0;
  mat_cnt = ds_master.getRowCount();
  sla_cnt = ds_slave.getRowCount();
  if (mat_cnt == 0 && sla_cnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_052, ["타창고오더물량 및 타창고작업계획"]);
  } else if (mat_cnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_052, ["타창고작업계획"]);
  } else if (sla_cnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_052, ["타창고오더물량"]);
  }
};
scwin.f_ResetCon = function () {
  acb_lobran.setSelectedIndex(0);
  ed_wrkPlCd.setValue("");
  txt_wrkPlNm.setValue("");
  ica_FromDate.setValue(scwin.vCurDate);
  acb_lobran.setFocus();
};
scwin.f_toExcel1 = function () {
  $c.data.downloadGridViewExcel($p, grd_slave, {
    "fileName": "타창고오더물량현황.xlsx",
    "sheetName": "타창고오더물량현황"
  });
};
scwin.f_toExcel2 = function () {
  $c.data.downloadGridViewExcel($p, grd_master, {
    "fileName": "타창고작업계획.xlsx",
    "sheetName": "타창고작업계획"
  });
};
scwin.grd_master_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  if (ds_slave.getRowCount() == 0) return;
  if (columnId == "wrkPlCd" || columnId == "wrkPlNm") {
    scwin.f_openPopUp('3');
  }
  if (columnId == "owhouseEqKndCd") {
    scwin.f_openPopUp('2');
  }
};
scwin.grd_master_oneditend = function (rowIndex, columnIndex, columnId, oldValue, newValue) {
  if (ds_slave.getRowCount() == 0) return;
  if (columnId == "wrkPlCd" || columnId == "wrkPlNm") {
    if (ds_master.getCellData(rowIndex, "wrkPlCd") != "" && ds_master.getCellData(rowIndex, "wrkPlNm") == "") {
      scwin.f_openPopUp('3');
    }
  }
  if (columnId == "owhouseEqKndCd") {
    if (ds_master.getCellData(rowIndex, "owhouseEqKndCd") != "" && ds_master.getCellData(rowIndex, "eqKndNm") == "") {
      scwin.f_openPopUp('2');
    }
  }
};
scwin.grd_slave_oncellclick = function (rowIndex, columnIndex, columnId) {
  ds_master.filter(function (row) {
    let v_val = ds_slave.getCellData(ds_slave.getRowPosition(), "owhouseCd");
    if (ds_master.getCellData(row, "wrkPlCd") == v_val) {
      return true;
    } else {
      return false;
    }
  });
  scwin.spa_totalRows2_update();
};
scwin.ed_wrkPlCd_onblur = function (e) {
  if (ed_wrkPlCd.getValue().trim() == "") {
    txt_wrkPlNm.setValue("");
    return;
  }
  if (ed_wrkPlCd.getValue().trim() != "" && txt_wrkPlNm.getValue() == "") {
    scwin.f_openPopUp('1');
  }
};
scwin.ds_slave_onloadcompleted = function (e) {
  scwin.spa_totalRows1_update();
};
scwin.ds_master_onloadcompleted = function (e) {
  scwin.spa_totalRows2_update();
  scwin.f_Alert();
};
scwin.ds_slave_canrowposchange = async function (row) {
  if (ds_master.isUpdated()) {
    let chk = await $c.win.confirm($p, "변경사항이 있습니다. 진행하시겠습니까?");
    if (chk) {
      ds_master.undoAll();
      return true;
    } else {
      return false;
    }
  }
  return true;
};
scwin.spa_totalRows1_update = function () {
  let totalSpans = document.querySelectorAll("#grd_section1 .grid-total .num");
  if (totalSpans && totalSpans.length > 0) {
    let spanComp = WebSquare.util.getComponentById(totalSpans[0].id);
    if (spanComp) {
      spanComp.setValue(ds_slave.getRowCount());
    }
  }
};
scwin.spa_totalRows2_update = function () {
  let totalSpans = document.querySelectorAll("#grd_section2 .grid-total .num");
  if (totalSpans && totalSpans.length > 0) {
    let spanComp = WebSquare.util.getComponentById(totalSpans[0].id);
    if (spanComp) {
      spanComp.setValue(ds_master.getRowCount());
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobran',search:'start',style:'width:200px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_wrkPl',codeId:'ed_wrkPlCd',nameId:'txt_wrkPlNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업예정일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_FromDate',pickerType:'dynamic',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear','ev:onclick':'scwin.btn_fieldClear_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve','ev:onclick':'scwin.btn_retrieve_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'타창고 오더물량현황',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_slave',style:'',autoFit:'allColumn',id:'grd_slave',visibleRowNum:'15',class:'wq_gvw',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'owhouseNm',value:'타창고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrNo',value:'컨테이너',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'comm',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cbm',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkPlanYn',value:'작업계획여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'owhouseNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'comm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cbm',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkPlanYn',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'타창고 작업계획',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_master',style:'',autoFit:'allColumn',id:'grd_master',visibleRowNum:'15',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkIndictNo',value:'지시번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkPlCd',value:'타창고',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkPlNm',value:'명칭',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'shiftClsCd',value:'SHIFT',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'owhouseEqKndCd',value:'중기종류',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'eqKndNm',value:'종류명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqNrmNm',value:'규격',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'owhouseEqInputCnt',value:'대수',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inputPartyCnt',value:'투입반수',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkIndictNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'textImage',id:'wrkPlCd',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkPlNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'shiftClsCd',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'주간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'야간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'심야'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'M'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'owhouseEqKndCd',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'eqKndNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqNrmNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'owhouseEqInputCnt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inputPartyCnt',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save','ev:onclick':'scwin.btn_Save_onclick',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})