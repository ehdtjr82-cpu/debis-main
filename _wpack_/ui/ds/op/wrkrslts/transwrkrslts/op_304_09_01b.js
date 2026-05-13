/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_09_01b.xml 21823 bb39c0770aa857b9dc9945929b3e8f4f769be9f7bc8936fc0a38bf0ce85b6041 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'searchDate',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'searchDate2',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'searchDeptCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'searchItemCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upr',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true','ev:ondataload':'scwin.ds_out_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemNm',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVol',name:'VOL',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveBoralSalesCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_create',action:'/ds.op.wrkrslts.transwrkrslts.CreateBoralSalesCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_create_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_update',action:'/ds.op.wrkrslts.transwrkrslts.UpdateBoralSalesCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_update_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sUserId = "";
scwin.sLobranCd = "";
scwin.date = ""; // 현재년월일을 구한다.

// 10일 전 날짜
scwin.strCurDate = ""; // 현재년월일을 구한다.
scwin.curDate = "";
//scwin.curDate.setDate(scwin.curDate.getDate() - 10);
scwin.yyyy = "";
scwin.mm = "";
scwin.dd = "";
scwin.sDate = "";
scwin.onpageload = function () {
  //lc_searchDeptCd.setValue(scwin.sLobranCd);

  scwin.sUserId = $c.data.getMemInfo($p, "userId");
  scwin.sLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd");
  scwin.date = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재년월일을 구한다.

  // 10일 전 날짜
  scwin.strCurDate = scwin.date.substring(0, 8); // 현재년월일을 구한다.
  scwin.curDate = new Date(scwin.strCurDate.substr(0, 4), parseInt(scwin.strCurDate.substr(4, 2)) - 1, scwin.strCurDate.substr(6, 2));
  scwin.curDate.setDate(scwin.curDate.getDate() - 10);
  scwin.yyyy = scwin.curDate.getFullYear();
  scwin.mm = String(scwin.curDate.getMonth() + 1).padStart(2, '0');
  scwin.dd = String(scwin.curDate.getDate()).padStart(2, '0');
  scwin.sDate = scwin.yyyy + scwin.mm + scwin.dd;
  dma_search.set("userId", scwin.sUserId);
  if (scwin.sUserId == "herekjs" || lc_searchDeptCd.getValue("7CC")) {
    btn_createJIPopup.show("");
  } else {
    btn_createJIPopup.hide();
  }
  scwin.f_lc_changed();
};
scwin.onUdcCompleted = function () {
  ed_searchDate.setValue(scwin.sDate);
};
scwin.f_lc_changed = function () {
  var deptCd = lc_searchDeptCd.getValue();
  if (deptCd == "5BB") {
    ed_upr.setValue("24.88");
  } else if (deptCd == "6AA") {
    ed_upr.setValue("22");
  } else if (deptCd == "7CC") {
    //대구
    ed_upr.setValue("19.5");
  } else {
    ed_upr.setValue("");
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_searchDate]);
  if (!ret) {
    return false;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_srchCond);
};

//-------------------------------------------------------------------------
// 자가보관료 생성popup 호출
//-------------------------------------------------------------------------
scwin.f_createJIPopup = async function () {
  var deptCd = lc_searchDeptCd.getValue();
  if (deptCd != "7CC") {
    return;
  }
  let data = {
    param1: "자가보관료생성 팝업",
    param2: lc_searchDeptCd.getValue(),
    param3: ed_upr.getValue(),
    param4: scwin.sUserId
  };
  let opts = {
    id: "popUp",
    popupName: "자가보관료생성 팝업",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "자가보관료생성 팝업"
  };
  await $c.win.openPopup($p, "/ui/ds/op/wrkrslts/transwrkrslts/op_304_09_01p.xml", opts, data);
};

//-------------------------------------------------------------------------
// GRID에서 선택된 오더요청처리 : 해당 오더요청처리 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_delete = async function () {
  debugger;
  var colVal = acb_searchItemCd.getValue();
  var text = acb_searchItemCd.getValue();
  var deptNm = lc_searchDeptCd.getValue() + "지점 ";
  if (colVal == "0049") {
    //출고상차료를 삭제하는경우 update upr = 0
    if (!(await $c.win.confirm($p, deptNm + text + "를 0으로 변경 하시겠습니까?"))) return;
    $c.sbm.execute($p, sbm_update);
  } else if (colVal == "0029") {
    //기본보관료를 삭제하는경우-경기지사 update del_yn = 1
    if (!(await $c.win.confirm($p, deptNm + text + "를 삭제 하시겠습니까?"))) return;
    $c.sbm.execute($p, sbm_update);
  } else {
    $c.win.alert($p, "??");
  }
};

//-------------------------------------------------------------------------
// 출고상차료를 기반으로 기본보관료 생성
//-------------------------------------------------------------------------
scwin.f_create = async function () {
  var deptNm = lc_searchDeptCd.getValue() + "지점 ";
  var itemNm = acb_searchItemCd.getValue();
  var countRow = ds_out.getRowCount();
  var sellUpr = $c.num.parseFloat($p, ed_upr.getValue(), 0);
  if (itemNm != "0049" || countRow < 0) {
    $c.win.alert($p, "출고상차료로 조회해주세요");
    return;
  }
  if (sellUpr < 1) {
    $c.win.alert($p, "보관료 생성단가를 입력 해 주세요 ");
    ed_upr.focus();
    return;
  }
  if (await $c.win.confirm($p, "조회된 " + deptNm + " 출고상차료를 기반으로 \n" + ds_out.getRowCount() + "건의 기본보관료를 생성 하시겠습니까?")) {
    $c.sbm.execute($p, sbm_create);
  }
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel = async function (varGrNm) {
  var totCnt = ds_out.getRowCount();
  var sheetTitle = "크나우프 보관료관리";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle,
        sheetName: sheetTitle
      };
      $c.data.downloadGridViewExcel($p, gr_out, options);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_retrieve_submitdone = function (e) {
  var totalCnt = ds_out.getRowCount();
  if (totalCnt == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  totalRows.setValue(totalCnt);
};
scwin.sbm_create_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
};
scwin.sbm_update_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_004); //성공적으로 삭제하였습니다.
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.lc_searchDeptCd_onchange = function (info) {
  scwin.f_lc_changed();
};
scwin.ds_out_ondataload = function () {
  var totalCnt = ds_out.getRowCount();
  totalRows.setValue(totalCnt);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_srchCond',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_searchDate',style:'',mandatory:'true',ref:'data:dma_search.searchDate',dateValidCheck:'true',dateValidSet:'true',title:'기준일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_searchDeptCd',search:'start',style:'width: 150px;',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'data:dma_search.searchDeptCd','ev:onchange':'scwin.lc_searchDeptCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'대구'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'7CC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부산'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전북'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5BB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'경기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4HH'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_searchItemCd',search:'start',style:'width: 150px;',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'data:dma_search.searchItemCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'출고상차료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0049'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기본보관료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0029'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'크나우프 매출항목 조회 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_runExcel',gridUpYn:'N',btnUser:'Y',gridDownYn:'Y',templateYn:'N',btnPlusYn:'Y',gridID:'gr_out'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_out',focusMode:'row',id:'gr_out',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'실적일자',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'오더번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'순서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'요율',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'매출금액',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'부가세',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'품목',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column64',value:'품목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column55',value:'VOL',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'text',style:'',value:'',width:'150',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellSeq',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemCd',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUpr',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0.00',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',style:'',value:'',width:'150',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatAmt',inputType:'text',style:'',value:'',width:'150',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'commNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'qty',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wt',value:'',displayMode:'label',displayFormat:'#,##0.000',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'sellVol',value:'',displayMode:'label',displayFormat:'#,##0.000',dataType:'number',textAlign:'right',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'sellAmt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'vatAmt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column63',value:'',displayMode:'label',expression:'SUM(\'qty\')',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',expression:'SUM(\'wt\')',displayFormat:'#,##0.000',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',expression:'SUM(\'sellVol\')',displayFormat:'#,##0.000',dataType:'number',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_createJIPopup',style:'',type:'button','ev:onclick':'scwin.f_createJIPopup'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자가보관료'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'보관료 생성단가',class:''}},{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_upr',class:'',objType:'key',ref:'data:dma_search.upr',dataType:'number'}}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_create',style:'',type:'button','ev:onclick':'scwin.f_create'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.f_delete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})