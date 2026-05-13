/*amd /ui/ps/eq/fmsmgnt/fmsoilmgnt/eq_610_03_01b.xml 29518 c911838fb6352eeb53b57de07e1ab46b45fcf4d448d34e8d3a09bac82078dc41 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dummy',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdYm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsaleYn',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilOilStatCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilkndCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkClsCd',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveOilingSum',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdYm',name:'기준년월',dataType:''}},{T:1,N:'w2:column',A:{id:'oilStatNm',name:'주유소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilkndCd',name:'유종구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilBizClsCd',name:'유류사업구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'소속구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tbeginStockQty',name:'기초재고수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tbeginStockAmt',name:'기초재고금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inQty',name:'입고수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAmt',name:'입고금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outQty',name:'출고수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAmt',name:'출고금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saleAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tendStockQty',name:'기말재고수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tendStockAmt',name:'기말재고금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'beginUpr',name:'기초단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inUpr',name:'입고단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outUpr',name:'출고단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tendUpr',name:'기말단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saleUpr',name:'매출단가',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkClsCd',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveFmsOilStockListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_dummy","key":"IN_DS1"},{"id":"ds_retrieveOilingSum","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_retrieveOilingSum","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveOilStockSum',action:'/ps.eq.fmsmgnt.fmsoilmgnt.CreateOilStockMonthAggregationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_dummy","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveOilStockSum_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delOilStockSum',action:'/ps.eq.fmsmgnt.fmsoilmgnt.CancelOilStockMonthAggregationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_dummy","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delOilStockSum_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_confirm',action:'/ps.eq.fmsmgnt.fmsoilmgnt.ConfirmOilStockCloseYnCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cond","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_confirm_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/js/ps/pscommon.js',type:'text/javascript',scopeVariable:'pscommon'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_nm = "";

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  var codeOptions = [{
    grpCd: "TL105",
    compID: "lc_oilkndCd,gr_DrvWrkCrs:oilkndCd"
  }, {
    grpCd: "TL100",
    compID: "gr_DrvWrkCrs:oilBizClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  btn_Sav.setDisabled(false);
  btn_Del.setDisabled(false);
  lc_wrkClsCd.setSelectedIndex(0);
  lc_oilkndCd.setSelectedIndex(0);
  scwin.f_JobCloseYN();
  ica_standardYearMonth.focus();
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  var curDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  ica_standardYearMonth.setValue(curDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  if (ica_standardYearMonth.getValue().trim().length != 6) {
    await $c.win.alert($p, "기준일자는 필수입력 입니다.");
    ica_standardYearMonth.focus();
    return;
  }
  ds_dummy.removeAll();
  var json = {
    "stdYm": ica_standardYearMonth.getValue(),
    "dsaleYn": lc_dsaleYn.getValue(),
    "oilOilStatCd": ed_oilOilStatCd.getValue(),
    "wrkClsCd": lc_wrkClsCd.getValue(),
    "oilkndCd": lc_oilkndCd.getValue() // "01"
  };
  ds_dummy.setRowJSON(0, json);
  $c.sbm.execute($p, sbm_retrieve);
  setTimeout(function () {
    scwin.f_JobCloseYN();
  }, 100);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowCnt = ds_retrieveOilingSum.getRowCount();
    if (rowCnt == 0) {
      $c.win.alert($p, "조회된 데이터가 없습니다.");
      totalRows.setValue(0);
      btn_Sav.setDisabled(false);
      btn_Del.setDisabled(false);
      return;
    } else {
      totalRows.setValue(rowCnt);
      //scwin.wrkDate = ed_standardYearMonth.Text;
      //gr_DrvWrkCrs.ColumnProp('slipYn', 'HeadCheck') = "false";
      btn_Sav.setDisabled(false);
      btn_Del.setDisabled(false);
    }
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (cls) {
  var clsstr = "";
  if (ica_standardYearMonth.getValue().trim().length != 6) {
    await $c.win.alert($p, "기준년월은 필수입력입니다.");
    return;
  }
  if (cls == 1) {
    clsstr = "유류재고집계 생성";
  } else if (cls == 2) {
    clsstr = "유류재고집계 생성취소";
  }
  if (!(await $c.win.confirm($p, `${ica_standardYearMonth.getValue()}월에대한 ${clsstr} 하시겠습니까?`))) {
    return;
  }
  ds_dummy.removeAll();
  ds_dummy.insertRow(0);
  ds_dummy.setCellData(0, "stdYm", ica_standardYearMonth.getValue());
  if (cls == 1) {
    $c.sbm.execute($p, sbm_saveOilStockSum);
  } else if (cls == 2) {
    $c.sbm.execute($p, sbm_delOilStockSum);
  }
};
scwin.sbm_saveOilStockSum_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_012, ["유류재고"]);
    scwin.f_Retrieve();
  } else {
    ds_retrieveOilingSum.undoAll();
  }
};
scwin.sbm_delOilStockSum_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_013);
  } else {
    ds_retrieveOilingSum.undoAll();
  }
};

//-------------------------------------------------------------------------
// 확정여부 조회 
//-------------------------------------------------------------------------
scwin.f_JobCloseYN = async function () {
  var sCloseYM = "";
  sCloseYM = ica_standardYearMonth.getValue();
  var isClose = await udc_result.cfJobCloseYN("CUR", sCloseYM, "00", "EQ07", "00", "");
  if (isClose == "" || $c.gus.cfIsNull($p, isClose) || isClose == "DNF") {
    ed_closeYn.setValue("N");
  } else if (isClose == "1") {
    ed_closeYn.setValue("N");
  } else if (isClose == "2") {
    ed_closeYn.setValue("Y");
  }
};

//-------------------------------------------------------------------------
// 확정/취소 : C/D
// 확정 : 전 주유소에 대해 재고집계가 생성되어 있어야 한다.(미생성 주유소 ALERT)
// 취소 : 해당월 전표가 생성되어 있지 않아야 한다.
//-------------------------------------------------------------------------
scwin.f_Confirm = async function (cls) {
  await scwin.f_JobCloseYN(); // 확정여부 조회
  if (scwin.f_validChk(cls)) {
    var JobYn = "";
    if (cls == "C") {
      // 마감시 마감했는지 체크 : 마감후면 마감 불가(마감취소 후 확정 가능)
      JobYn = await udc_result.cfJobCloseYN("CUR", dma_cond.get("stdYm"), "00", "EQ07", "00", null, "N"); // 마감여부 체크(월)

      if (JobYn == "0" || JobYn == "2") {
        await $c.gus.cfAlertMsg($p, `${ica_standardYearMonth.getValue()}월 유류재고 확정작업을 이미 완료하였습니다. \n확정할 수 없습니다.`);
        return;
      }
    }

    //tobe 변경 : 서비스쪽에서 보내주고 있음. asis코드에 header값 wrkNo미존재 
    //dma_cond.set("wrkNo", "EQ07");	// 유류재고 확정코드
    dma_cond.set("wrkClsCd", cls); // 생성/취소구분(C/D)		

    if (await $c.win.confirm($p, `유류재고확정 ${scwin.g_nm}하시겠습니까?`)) {
      if (dma_cond.get("wrkClsCd") == "D" && ed_closeYn.getValue() == "N") {
        await $c.gus.cfAlertMsg($p, `${ica_standardYearMonth.getValue()}월 유류재고는 아직 확정작업이 완료 되지 않았습니다.`);
        return;
      }
      $c.sbm.execute($p, sbm_confirm);
    }
  }
};
scwin.sbm_confirm_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_012, ["유류확정/취소"]);
  }
  await scwin.f_JobCloseYN(); // 확정여부 조회
};

//-------------------------------------------------------------------------
// f_validChk()
//-------------------------------------------------------------------------
scwin.f_validChk = async function (cls) {
  if (ica_standardYearMonth.getValue().length != 6) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["기준년월"]);
    ica_standardYearMonth.focus();
    return false;
  }

  //tobe삭제 : g_cls 사용하는곳 미존재. 
  //g_cls = cls;

  if (cls == "C") {
    scwin.g_nm = "";
  } else if (cls == "D") {
    scwin.g_nm = "취소";
  }
  dma_cond.setEmptyValue();
  dma_cond.set("stdYm", ica_standardYearMonth.getValue());
  return true;
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = function () {
  var options = {
    fileName: "FMS유류재고집계.xlsx",
    sheetName: "FMS유류재고집계"
  };
  $c.data.downloadGridViewExcel($p, gr_DrvWrkCrs, options);
};
scwin.ica_standardYearMonth_onblur = function (e) {
  scwin.f_JobCloseYN();
};
scwin.udc_oilOilStat_onviewchangeNameEvent = async function (info) {
  await pscommon.RcfOilStatPop(ed_oilOilStatCd, ed_oilStatNm, 'NM', '전체', '전체');
};
scwin.udc_oilOilStat_onclickEvent = async function (e) {
  await pscommon.RcfOilStatPop(ed_oilOilStatCd, ed_oilStatNm, 'IMG', '전체', '전체');
};
scwin.btn_con_c_onclick = function (e) {
  scwin.f_Confirm('C');
};
scwin.btn_con_d_onclick = function (e) {
  scwin.f_Confirm('D');
};
scwin.btn_Sav_onclick = function (e) {
  scwin.f_Save(1);
};
scwin.btn_Del_onclick = function (e) {
  scwin.f_Save(2);
};

//-------------------------------------------------------------------------
// 기초단가,입고단가, 출고단가, 기말단가, 매출단가 계산
//-------------------------------------------------------------------------
scwin.cal = function (data1, data2) {
  var value1 = $c.num.parseInt($p, data1);
  var value2 = $c.num.parseInt($p, data2);
  var value = value1 / value2 || "";
  return value;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주유소코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_oilOilStatCd',validTitle:'주유소코드',nameId:'ed_oilStatNm',style:'',id:'udc_oilOilStat',btnId:'btn_estmtTrgtNm',objTypeCode:'data',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_oilOilStat_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_oilOilStat_onclickEvent',allowCharCode:'A-Za-z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_standardYearMonth',style:'',pickerType:'dynamic',mandatory:'true','ev:onblur':'scwin.ica_standardYearMonth_onblur',displayFormat:'yyyy/MM'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유종구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_oilkndCd',style:'width:80px;',submenuSize:'fixed',chooseOptionLabel:'전체',displayMode:'value delim label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직판여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dsaleYn',style:'width:80px;',submenuSize:'fixed',ref:'',displayMode:'value delim label',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'직판'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보관'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'재고구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'true',disabledClass:'w2selectbox_disabled',id:'lc_wrkClsCd',style:'width:120px;',submenuSize:'fixed',ref:'',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'결재기준'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래기준'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'FMS유류재고집계 목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',templateYn:'N',gridUpYn:'N',gridDownFn:'scwin.f_Excel',gridID:'gr_DrvWrkCrs'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_retrieveOilingSum',focusMode:'cell',id:'gr_DrvWrkCrs',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',columnMove:'true',dataDragSelect:'false',useCtrlKey:'false',useShiftKey:'false',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'column30',inputType:'text',style:'',value:'기준<br/>년월',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'column36',inputType:'text',style:'',value:'주유소명',width:'200'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'column28',inputType:'text',style:'',value:'유종</br>구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'유류사업</br>구분',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column67',inputType:'text',style:'',value:'소속</br>구분',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column64',inputType:'text',style:'',value:'기초재고</br>수량',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'column61',inputType:'text',style:'',value:'기초재고</br>금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column58',inputType:'text',style:'',value:'입고</br>수량',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column55',inputType:'text',style:'',value:'입고<br/>금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',style:'',value:'출고<br/>수량',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column52',inputType:'text',style:'',value:'출고<br/>금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column82',inputType:'text',style:'',value:'매출<br/>금액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column79',inputType:'text',style:'',value:'기말재고<br/>수량',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column70',inputType:'text',style:'',value:'기말재고<br/>금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column91',inputType:'text',style:'',value:'기초</br>단가',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column88',inputType:'text',style:'',value:'입고<br/>단가',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column85',inputType:'text',style:'',value:'출고<br/>단가',width:'120'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'column73',inputType:'text',style:'',value:'기말</br>단가',width:'70'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'column76',inputType:'text',style:'',value:'매출</br>단가',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stdYm',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilStatNm',inputType:'text',style:'',value:'',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilkndCd',inputType:'select',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilBizClsCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClsCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tbeginStockQty',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tbeginStockAmt',inputType:'text',style:'background-color: #D4E4E3',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inQty',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inAmt',inputType:'text',style:'background-color: #D4E4E3;',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outQty',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outAmt',inputType:'text',style:'background-color: #D4E4E3;',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'saleAmt',inputType:'text',style:'background-color: #BBDDFF;',value:'',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tendStockQty',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tendStockAmt',inputType:'text',style:'background-color: #D4E4E3;',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'beginUpr',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###[floor]',dataType:'number',expression:'scwin.cal(display(\'beginStockAmt\'),display(\'tbeginStockQty\'))'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inUpr',inputType:'expression',style:'',value:'',width:'120',textAlign:'right',displayFormat:'#,###[floor]',dataType:'number',expression:'scwin.cal(display(\'inAmt\'),display(\'inQty\'))'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outUpr',inputType:'expression',style:'',value:'',width:'120',displayFormat:'#,###[floor]',dataType:'number',expression:'scwin.cal(display(\'outAmt\'),display(\'outQty\'))',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tendUpr',inputType:'expression',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###[floor]',dataType:'number',expression:'scwin.cal(display(\'tendStockAmt\'),display(\'tendStockQty\'))'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'saleUpr',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###[floor]',dataType:'number',expression:'scwin.cal(display(\'saleAmt\'),display(\'outQty\'))'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column48',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column46',inputType:'text',style:'',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column40',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column69',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column66',inputType:'expression',style:'',value:'',width:'100',expression:'SUM("tbeginStockQty")',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column63',inputType:'expression',style:'',value:'',width:'100',expression:'SUM("tbeginStockAmt")',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column60',inputType:'expression',style:'',value:'',width:'100',expression:'SUM("inQty")',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column57',inputType:'expression',style:'',value:'',width:'100',expression:'SUM("inAmt")',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column51',inputType:'expression',style:'',value:'',width:'100',expression:'SUM("outQty")',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column54',inputType:'expression',style:'',value:'',width:'100',expression:'SUM("outAmt")',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column84',inputType:'expression',style:'',value:'',width:'120',expression:'SUM("saleAmt")',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column81',inputType:'expression',style:'',value:'',width:'100',expression:'SUM("tendStockQty")',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column72',inputType:'expression',style:'',value:'',width:'100',expression:'SUM("tendStockAmt")',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column93',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column90',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column87',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column75',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column78',inputType:'text',style:'',value:'',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'display:none;',id:'udc_result'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_con_c',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.btn_con_c_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유류재고 확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_con_d',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.btn_con_d_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유루재고 확정취소'}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'유류재고 확정여부 :',class:''}},{T:1,N:'xf:input',A:{id:'ed_closeYn',style:'width:30px;',class:'tac vam',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Sav',style:'',type:'button','ev:onclick':'scwin.btn_Sav_onclick',objType:'bSave',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Del',style:'',type:'button',objType:'bDelete','ev:onclick':'scwin.btn_Del_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성취소'}]}]}]}]}]}]}]}]}]})