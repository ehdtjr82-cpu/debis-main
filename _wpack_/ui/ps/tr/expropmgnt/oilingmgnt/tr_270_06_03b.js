/*amd /ui/ps/tr/expropmgnt/oilingmgnt/tr_270_06_03b.xml 23175 274e407d34dfc6851f949c507d08de53389a50d3c21100457036da03c3d89d21 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_OilMonthAggregationDet',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipYn',name:'check',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsNm',name:'소속구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilingPurpsCd',name:'주유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outQty',name:'출고수량(L)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAmt',name:'출고금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockAcctDeptCd',name:'재고귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdYm',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilingPurpsNm',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_OilMonthAggregationQry'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'소속구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_OilMonthAggregationQry',action:'/ps.tr.expropmgnt.oilingmgnt.RetrieveMonthEachOilOutContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_OilMonthAggregationQry","key":"IN_DS1"},{"id":"ds_OilMonthAggregationDet","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_OilMonthAggregationDet","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_OilMonthAggregationQry_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveOilingContents',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_OilMonthAggregationDet","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveOilingContents_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.curDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.isGubun = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "acb_homeClsCd",
    opt: {
      "range": "2,TR"
    }
  }, {
    grpCd: "ZZ701",
    compID: "gr_OilMonthAggregation:oilingPurpsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  ica_stdYm.setValue($c.date.getServerDateTime($p, "yyyyMM"));
  btn_create.setDisabled(true);
  btn_cancel.setDisabled(true);
  acb_homeClsCd.setValue("LO");
  ica_stdYm.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ica_stdYm.getValue().trim().length !== 6) {
    await $c.win.alert($p, "기준년월은 필수 입력입니다.");
    ica_stdYm.focus();
    return;
  }
  if (acb_homeClsCd.getValue().length === 0) {
    await $c.win.alert($p, "소속구분은 필수선택입니다.");
    acb_homeClsCd.focus();
    return;
  }
  if (ed_acctDeptNm.getValue().trim().length === 0) {
    ed_acctDeptCd.setValue("");
  }
  $c.sbm.execute($p, sbm_OilMonthAggregationQry);
};

//-------------------------------------------------------------------------
//
//------------------------------------------------------------------------- 
scwin.f_Save = async function (cls) {
  if (ds_OilMonthAggregationDet.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 자료가 없습니다. 조회 후 선택하세요.");
    return;
  }
  let clsstr = "";
  let pathstr = "";

  // 체크박스 추가 작업에 따른 전표 생성 여부 판단하기 2006.11 박혜연 추가   
  let slipNo = "";
  let rtn = "";
  let stdYm = ica_stdYm.getValue().trim();
  let homeCd = "";

  // 전표생성시 유류재고 마감여부 확인 추가. 2009.04.10
  rtn = await udc_closeYn.cfJobCloseYN("CUR", stdYm, "00", "TR50", "00", "", "N");
  if (cls == 1) {
    if (rtn == "1" || rtn == "DNF") {
      await $c.win.alert($p, stdYm + "월 유류마감이 확정돼지 않았습니다. 구매팀 담당자에게 문의하세요.");
      return;
    }
  }
  homeCd = acb_homeClsCd.getValue();
  if (homeCd == "TR") {
    rtn = await udc_closeYn.cfJobCloseYN("CUR", stdYm, "00", "TR40", "TR", "");
  } else {
    rtn = await udc_closeYn.cfJobCloseYN("CUR", stdYm, "00", "TR40", "LO", "");
  }
  if (cls == 1) {
    scwin.isGubun = "생성";
    clsstr = "전표생성";
    if (rtn == "1" || rtn == "DNF") {
      pathstr = "/ps.tr.expropmgnt.oilingmgnt.CreateOilingOutSlipCMD.do";
    } else if (rtn == "0" || rtn == "2") {
      pathstr = "/ps.tr.expropmgnt.oilingmgnt.RegistOilingOutSlipCMD.do";
    }
  } else if (cls == 2) {
    scwin.isGubun = "취소";
    clsstr = "전표취소";
    let slipNoCn = 0;
    for (let j = 0; j < ds_OilMonthAggregationDet.getRowCount(); j++) {
      if (ds_OilMonthAggregationDet.getCellData(j, "slipYn") == 0) {
        if (ds_OilMonthAggregationDet.getCellData(j, "slipNo") > 0) {
          slipNoCn = slipNoCn + 1;
        }
      }
    }
    if (slipNoCn == 0) {
      pathstr = "/ps.tr.expropmgnt.oilingmgnt.CancelOilingOutSlipCreationCMD.do";
    } else {
      pathstr = "/ps.tr.expropmgnt.oilingmgnt.UpdateOilingOutSlipCreationCMD.do";
    }
  }
  for (let j = 0; j < ds_OilMonthAggregationDet.getRowCount(); j++) {
    if (ds_OilMonthAggregationDet.getCellData(j, "slipYn") == 1) {
      if (ds_OilMonthAggregationDet.getCellData(j, "slipNo") > 0 && cls == 1) {
        await $c.win.alert($p, j + 1 + "행은 이미 전표생성하였습니다. 전표취소후 재생성하실 수 있습니다.");
        return;
      }
      if (ds_OilMonthAggregationDet.getCellData(j, "slipNo") == 0 && cls == 2) {
        await $c.win.alert($p, j + 1 + "행은 전표를 생성하지 않았습니다. 전표취소하실 수 없습니다.");
        return;
      }
    }
  }
  let checkCount = 0;
  for (let i = 0; i < ds_OilMonthAggregationDet.getRowCount(); i++) {
    if (ds_OilMonthAggregationDet.getCellData(i, "slipYn") == 1) {
      checkCount += 1;
    }
  }
  if (checkCount == 0) {
    await $c.win.alert($p, "선택하신 자료가 없습니다. 먼저 정유사를 선택하십시오");
    return;
  }
  let confrim = await $c.win.confirm($p, clsstr + " 하시겠습니까?");
  if (!confrim) {
    return;
  }
  sbm_saveOilingContents.action = pathstr;
  $c.sbm.execute($p, sbm_saveOilingContents);
};

//-------------------------------------------------------------------------
// 회계전표발행
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  let param = "";
  let slipNo = ds_OilMonthAggregationDet.getCellData(ds_OilMonthAggregationDet.getCurrentRow(), "slipNo");
  if (slipNo !== "") {
    param = param + "," + slipNo;
  } else {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_056, ["데이타"]));
    return;
  }
  let data = {
    odiName: "fi_201_04_02p",
    reportName: "/ac/fi/gnrlaccount/slipmgnt/fi_201_04_02p.ozr",
    odiParam: {
      slipNo: param.substring(1)
    },
    viewerParam: {
      useprogressbar: true,
      // 프로그레스바 쓸지 말지
      zoom: 100 // 배율 설정
    },
    formParam: {}
  };
  scwin.openPopup(data);
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// Popup
//-------------------------------------------------------------------------
scwin.f_ofcPopUp = async function (ed_co, popbool) {
  let tmpcd = "";
  if (popbool === "T") {
    tmpcd = ed_co.getValue();
  }
  await udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, tmpcd, "", popbool, 2, null, null, null, null, null); // 귀속부서조회
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  // SET
  if (rtnList !== null) {
    if (rtnList[0] === "N/A") return;
    ed_acctDeptCd.setValue(rtnList[0]);
    ed_acctDeptNm.setValue(rtnList[1]);
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  ica_stdYm.focus();
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  let count = ds_OilMonthAggregationDet.getRowCount();
  if (!(count > 0)) return;
  acb_homeClsCd.setDisplayMode("label");
  let gridColCount = gr_OilMonthAggregation.getTotalCol();
  let startRowIndex = 0;
  let infoArr = [{
    rowIndex: 0,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "주유출고전표",
    textAlign: "center",
    //정렬
    fontSize: 12,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 2,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "기준년월 [" + $c.gus.cfGetFormatStr($p, ica_stdYm.getValue(), "####/##") + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 3,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "소속 [" + acb_homeClsCd.getText() + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }];
  if (ed_acctDeptCd.getValue().length !== 0) {
    infoArr.push({
      rowIndex: 4,
      // 첫 번째 줄
      colIndex: 0,
      // 첫 번째 칸부터
      colSpan: gridColCount,
      // 그리드 전체 너비만큼 병합
      rowSpan: 1,
      text: "귀속부서 [" + ed_acctDeptCd.getValue().trim() + "/" + ed_acctDeptNm.getValue().trim() + "]",
      textAlign: "left",
      //정렬
      fontSize: 10,
      drawBorder: false,
      // 테두리
      color: "black",
      // 글자색
      backgroundColor: "white" // 배경색
    });
    startRowIndex = 5;
  } else {
    startRowIndex = 4;
  }
  const options = {
    fileName: "주유출고전표.xlsx",
    sheetName: "주유출고전표",
    startRowIndex: startRowIndex,
    startColumnIndex: 0,
    columnMove: true,
    columnMoveWithFooter: true,
    type: 1
  };
  $c.data.downloadGridViewExcel($p, gr_OilMonthAggregation, options, infoArr);
  acb_homeClsCd.setDisplayMode("value delim label");
};
scwin.sbm_saveOilingContents_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, "주유출고전표를 성공적으로 " + scwin.isGubun + "하였습니다.");
    ds_OilMonthAggregationDet.reform();
    scwin.f_Retrieve();
  }
};
scwin.sbm_OilMonthAggregationQry_submitdone = async function (e) {
  let rowCnt = ds_OilMonthAggregationDet.getRowCount();
  totalRows.setValue(rowCnt);
  gr_OilMonthAggregation.setFocusedCell(0, 1);
  if (rowCnt === 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    btn_create.setDisabled(true);
    btn_cancel.setDisabled(true);
    ica_stdYm.focus();
    return;
  } else {
    btn_create.setDisabled(false);
    btn_cancel.setDisabled(false);
  }
};
scwin.gr_OilMonthAggregation_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId === "slipNo" && ds_OilMonthAggregationDet.getCellData(rowIndex, "slipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_OilMonthAggregationDet.getCellData(rowIndex, "slipNo"));
  }
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  scwin.f_ofcPopUp(ed_acctDeptCd, "T");
};
scwin.btn_create_onclick = function (e) {
  scwin.f_Save(1);
};
scwin.btn_cancel_onclick = function (e) {
  scwin.f_Save(2);
};
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_ofcPopUp(ed_acctDeptCd, 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_stdYm',style:'',objtype:'data',mandatory:'true',displayFormat:'yyyy/MM',editType:'select',ref:'data:dma_OilMonthAggregationQry.stdYm',title:'기준년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',id:'acb_homeClsCd',mandatory:'true',ref:'data:dma_OilMonthAggregationQry.homeClsCd',search:'start',style:'width:150px;',submenuSize:'fixed',title:'소속구분'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo',codeId:'ed_acctDeptCd',validTitle:'귀속부서',nameId:'ed_acctDeptNm',style:'',allowCharCode:'0-9',maxlengthCode:'5',editTypeCode:'select',readOnlyName:'true',id:'udc_acctDeptCdInfo','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent',refDataCollection:'dma_OilMonthAggregationQry',code:'acctDeptCd','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''}},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',gridID:'gr_OilMonthAggregation',gridUpYn:'N',btnUser:'Y',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_OilMonthAggregationDet',id:'gr_OilMonthAggregation',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',columnMove:'true','ev:oncellclick':'scwin.gr_OilMonthAggregation_oncellclick',rowStatusVisible:'true',rowStatusWidth:'20',columnMoveWithFooter:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'checkbox',width:'50',fixColumnWidth:'true',value:'check'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'소속구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'주유구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'귀속부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'출고수량(L)',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'출고금액',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column52',value:'재고귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'계정명',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'slipYn',inputType:'checkbox',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClsNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilingPurpsCd',inputType:'select',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outQty',inputType:'text',width:'120',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outAmt',inputType:'text',width:'100',displayFormat:'#,##0',dataType:'number',readOnly:'true',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',id:'slipNo',displayMode:'label',style:'',readOnly:'true',class:'linktype'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'stockAcctDeptCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctCd',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',width:'100',readOnly:'true',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'총합',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column44',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("outQty")',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column43',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("outAmt")',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_create',style:'',type:'button',objType:'bSave',userAuth:'C','ev:onclick':'scwin.btn_create_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancel',style:'',type:'button',userAuth:'U',objType:'bSave','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표취소'}]}]}]}]},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'width:%; height:px;visibility:hidden;display: none;',id:'udc_closeYn'}}]}]}]}]}]})