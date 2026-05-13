/*amd /AI/op_304_09_01b.xml 18299 b513a68f000fa71c521cf824a7d797b965759302be942140561b7a1234806e4f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'searchDate',name:'기준일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'searchDate2',name:'기준일자2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'searchDeptCd',name:'지사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'searchItemCd',name:'매출구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upr',name:'보관료생성단가',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'사용자ID',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemNm',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellVol',name:'VOL',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveBoralSalesCostCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_out","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_create',action:'/ds.op.wrkrslts.transwrkrslts.CreateBoralSalesCostCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_out","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_create_submitdone','ev:submiterror':'scwin.sbm_create_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_update',action:'/ds.op.wrkrslts.transwrkrslts.UpdateBoralSalesCostCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_out","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_update_submitdone','ev:submiterror':'scwin.sbm_update_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sUserId = "";
scwin.sDate = "";
scwin.sLobranCd = "";
scwin.onpageload = async function () {
  scwin.sUserId = $c.ses.getUserId();
  scwin.sLobranCd = $c.ses.getLoUpperLobranCd() == null ? "" : $c.ses.getLoUpperLobranCd();
  let vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  let prevDate = $c.date.addDate($p, vCurDate, -10);
  scwin.sDate = prevDate.substring(0, 6);
  ds_search.set("userId", scwin.sUserId);
  ica_searchDate.setValue(scwin.sDate);
  acb_searchDeptCd.setValue(scwin.sLobranCd);
  acb_searchDeptCd.setSelectedIndex(0);
  acb_searchItemCd.setSelectedIndex(0);
  if (scwin.sUserId == "herekjs" || acb_searchDeptCd.getValue() == "7CC") {
    btn_createJIPopup.setStyle("visibility", "visible");
  } else {
    btn_createJIPopup.setStyle("visibility", "hidden");
  }
};
scwin.dataSetDebug = async function (dataList, isDebug) {
  if (isDebug == true) {
    let obj = dataList;
    let str = "[[[[" + obj.getID() + "]]]]]\n";
    let colInfos = obj.getColumnIDs();
    for (let dsRow = 0; dsRow < obj.getRowCount(); dsRow++) {
      for (let dsCol = 0; dsCol < colInfos.length; dsCol++) {
        str += "[" + colInfos[dsCol] + "] " + obj.getCellData(dsRow, colInfos[dsCol]) + ", ";
      }
      str += "\n\n";
    }
    await $c.win.alert($p, str);
  }
};
scwin.f_lc_changed = function (value) {
  let deptCd = acb_searchDeptCd.getValue();
  if (deptCd == "5BB") {
    txt_upr.setValue("24.88");
  } else if (deptCd == "6AA") {
    txt_upr.setValue("22");
  } else if (deptCd == "7CC") {
    txt_upr.setValue("19.5");
  } else {
    txt_upr.setValue("");
  }
};
scwin.f_Retrieve = async function () {
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_runExcel = async function (varGrNm) {
  let totCnt = ds_out.getRowCount();
  let sheetTitle = "크나우프 보관료관리";
  if (totCnt != 0) {
    $c.data.downloadGridViewExcel($p, varGrNm, {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle
    });
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_srchCond);
};
scwin.f_createJIPopup = async function () {
  let deptCd = acb_searchDeptCd.getValue();
  if (deptCd != "7CC") {
    return;
  }
  let obj = {
    title: "자가보관료생성 팝업",
    deptCd: acb_searchDeptCd.getValue(),
    upr: txt_upr.getValue(),
    userId: scwin.sUserId
  };
  await $c.win.openPopup($p, "/ui/ds/op/wrkrslts/transwrkrslts/op_304_09_01p.xml", {
    width: 530,
    height: 550,
    modal: true,
    data: obj
  });
};
scwin.f_create = async function () {
  let deptNm = acb_searchDeptCd.getText() + "지점 ";
  let ItemNm = acb_searchItemCd.getText();
  let countRow = ds_out.getRowCount();
  let sellUpr = txt_upr.getValue();
  if (ItemNm != "출고상차료" || countRow < 0) {
    await $c.win.alert($p, "출고상차료로 조회해주세요");
    return;
  }
  if (sellUpr < 1) {
    await $c.win.alert($p, "보관료 생성단가를 입력 해 주세요 ");
    txt_upr.setFocus();
    return;
  }
  let chk = await $c.win.confirm($p, "조회된 " + deptNm + " 출고상차료를 기반으로 \n" + ds_out.getRowCount() + "건의 기본보관료를 생성 하시겠습니까?");
  if (chk) {
    await $c.sbm.execute($p, sbm_create);
  }
};
scwin.f_delete = async function () {
  let colVal = acb_searchItemCd.getValue();
  let text = acb_searchItemCd.getText();
  let deptNm = acb_searchDeptCd.getText() + "지점 ";
  if (colVal == "0049") {
    let chk = await $c.win.confirm($p, deptNm + text + "를 0으로 변경 하시겠습니까?");
    if (!chk) return;
    await $c.sbm.execute($p, sbm_update);
  } else if (colVal == "0029") {
    let chk = await $c.win.confirm($p, deptNm + text + "를 삭제 하시겠습니까?");
    if (!chk) return;
    await $c.sbm.execute($p, sbm_update);
  } else {
    await $c.win.alert($p, "??");
  }
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_createJIPopup_onclick = function (e) {
  scwin.f_createJIPopup();
};
scwin.btn_create_onclick = function (e) {
  scwin.f_create();
};
scwin.btn_delete_onclick = function (e) {
  scwin.f_delete();
};
scwin.acb_searchDeptCd_onchange = function (e) {
  scwin.f_lc_changed("acb_searchDeptCd");
};
scwin.sbm_retrieve_submitdone = function (e) {};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_create_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
};
scwin.sbm_create_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_update_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_update_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_out_onloadcompleted = async function (e) {
  let rowCnt = ds_out.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  spa_totalRow.setValue(ds_out.getRowCount());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_searchDate',style:'',ref:'data:ds_search.searchDate',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_searchDeptCd',search:'start',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_search.searchDeptCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_searchItemCd',search:'start',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_search.searchItemCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'크나우프 매출항목 조회 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_out',focusMode:'row',id:'gr_out',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'text',style:'',value:'실적일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',style:'',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellSeq',inputType:'text',style:'',value:'순서',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemCd',inputType:'text',style:'',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemNm',inputType:'text',style:'',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUpr',inputType:'text',style:'',value:'요율',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',style:'',value:'매출금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatAmt',inputType:'text',style:'',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',style:'',value:'품목',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commNm',value:'품목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'qty',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wt',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sellVol',value:'VOL',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellSeq',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemNm',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUpr',inputType:'text',style:'',value:'',width:'70',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'qty',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sellVol',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'sellAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'vatAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column63',value:'',displayMode:'label',expression:'sum(\'qty\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',expression:'sum(\'wt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',expression:'sum(\'sellVol\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_createJIPopup',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자가보관료'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'보관료 생성단가',class:''}},{T:1,N:'xf:input',A:{style:'width: 100px;',id:'txt_upr',class:'',ref:'data:ds_search.upr'}}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_create',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})