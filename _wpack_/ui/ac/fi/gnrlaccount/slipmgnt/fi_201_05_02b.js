/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_05_02b.xml 20385 3815ad10fd4a8b1106fc9e59d7f91e9bb8b3e997227f8d8b1f84520f4ae3a140 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'useYm',name:'사용연월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_slip'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'calnDocDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCd',name:'전표귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptNm',name:'전표귀속부서명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_serviceList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'사용료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'지급상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYm',name:'useYm',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_search',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveInformationProcessServiceCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_serviceList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_serviceList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_delete',action:'/ac.fi.gnrlaccount.slipmgnt.DeleteInformationProcessServiceCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_serviceList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_save',action:'/ac.fi.gnrlaccount.slipmgnt.CreateInformationProcessServiceCostSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_serviceList","key":"IN_DS2"},{"id":"dma_slip","key":"OUT_DS1"},{"id":"dma_slip","key":"IN_DS1"}]',target:'data:json,{"id":"dma_slip","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 정보처리용역비자동기표
 * 메뉴경로 : 회계/재무회계/일반회계/전표관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ac/fi/gnrlaccount/slipmgnt/fi_201_05_02b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-17
 * 수정이력  :
 *    - 2025-12-17      정승혜    최초작성
 *    - 2026-01-14      정승혜    기타수정
 *    - 2026-01-19      정승혜    submitdone 조건수정
 * 메모 :
 * 조회조건 : 201001
 */
scwin.mDate = $c.date.getServerDateTime($p, "yyyyMM");
scwin.dDate = $c.date.getServerDateTime($p, "yyyyMMdd");

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FM017",
    compID: "gr_service:payStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_Header();
  scwin.f_HeaderSlip();
  ed_useYm.setValue(scwin.mDate);
  btn_Save.setDisabled(true);
  btn_bUpdate.setDisabled(true);
  ed_calnDocDt.setValue(scwin.dDate);
};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_HeaderSlip = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_useYm]);
  if (!ret) {
    return false;
  }
  $c.sbm.execute($p, sbm_tr_search);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_serviceList.getRowCount() == 0) {
    await $c.win.alert($p, "전표를 생성할 데이타가 없습니다.");
    return;
  }
  //체크
  if (!(await $c.gus.cfValidate($p, [ed_useYm, ed_slipAcctDeptCd, ed_calnDocDt]))) {
    return false;
  }
  if (!(await scwin.f_HiddenCheck(ed_slipAcctDeptCd, "작성부서"))) {
    return false;
  }
  if (ds_serviceList.getCellData(0, "slipNo") != "") {
    $c.win.alert($p, "이미 전표가 생성되었습니다");
    return;
  }
  let confirm = await $c.win.confirm($p, "전표을(를) 생성하시겠습니까?");
  if (confirm) {
    for (i = 0; i < ds_serviceList.getRowCount(); i++) {
      ds_serviceList.setCellData(i, "useYm", ed_useYm.getValue().trim());
    }
    $c.sbm.execute($p, sbm_tr_save);
  }
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  //체크
  if (!(await $c.gus.cfValidate($p, [ed_useYm]))) {
    return false;
  }
  if (ds_serviceList.getRowCount() == 0) {
    $c.win.alert($p, "삭제할 데이타가 없습니다.");
    return;
  }

  // 회계처리가 되었을때 체크
  for (i = 0; i < ds_serviceList.getRowCount(); i++) {
    if (ds_serviceList.getCellData(i, "payStsCd") == "20") {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_041, "전표번호[" + ds_serviceList.getCellData(i, "slipNo") + "]", "삭제를 "));
      return;
    }
  }
  dma_search.set("slipNo", ds_serviceList.getCellData(0, "slipNo"));
  if ((await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_008, "선택하신 전표"))) == true) {
    $c.sbm.execute($p, sbm_tr_delete);
  }
};
//-------------------------------------------------------------------------
// 히든값체크
//-------------------------------------------------------------------------
scwin.f_HiddenCheck = async function (str, msg) {
  if (str.getValue().trim() == "") {
    return true;
  }
  if (str.getValue().trim() != str.options.hidVal) {
    await $c.win.alert($p, MSG_CM_ERR_038, [msg]);
    str.focus();
    return false;
  } else {
    return true;
  }
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  let param = ",,0,,,0";
  rtnList = udc_acctDeptCdInfo2.cfCommonPopUp(scwin.udc_acctDeptCdInfo2_callBackFunc, ed_slipAcctDeptCd.getValue().trim(), ed_slipAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null, null);
};
scwin.udc_acctDeptCdInfo2_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_slipAcctDeptCd.setValue(rtnList[0]); // 코드
    ed_slipAcctDeptNm.setValue(rtnList[1]); // 명
    ed_slipAcctDeptCd.options.hidVal = rtnList[0]; // 히든값
  } else {
    ed_slipAcctDeptCd.setValue("");
    ed_slipAcctDeptNm.setValue("");
    ed_slipAcctDeptCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd.getValue().trim() == strCd.options.hidVal) {
    return;
  }
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") {
    scwin.f_openPopUp(flag, 'T');
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function () {
  //udc
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
// 엑셀다운 8+16
scwin.f_Excel = async function () {
  let confirm = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (confirm) {
    const options = {
      fileName: "정보처리용역비조회.xlsx",
      sheetName: "정보처리용역비",
      type: 1
    };
    await $c.data.downloadGridViewExcel($p, gr_service, options);
  }
};

// 서브미션
scwin.sbm_tr_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_serviceList.getRowCount());
  if (ds_serviceList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    let sort_options = {};
    sort_options.sortIndex = "acctDeptCd acctCd";
    sort_options.sortOrder = "1 1"; // 1: 오름차순
    ds_serviceList.multisort(sort_options);
    ds_serviceList.setRowPosition(0);
    gr_service.setFocusedCell(0, "acctDeptCd", false);
    $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_bUpdate]);
  }
};
scwin.udc_acctDeptCdInfo2_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};
scwin.gr_service_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo" && ds_serviceList.getCellData(rowIndex, "slipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_serviceList.getCellData(rowIndex, "slipNo"));
  }
};

// 서브미션
scwin.sbm_tr_delete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_004); // 성공적으로삭제하였습니다
  scwin.f_HeaderSlip();
  scwin.f_Retrieve();
};
scwin.udc_acctDeptCdInfo2_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, '1');
};
scwin.sbm_tr_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_serviceList.getCellData(0, "slipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_serviceList.getCellData(0, "slipNo"));
  }
  scwin.f_HeaderSlip();
  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사용연월',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_useYm',class:'form-control cal',calendarValueType:'yearMonth',mandatory:'true',objType:'data',validExp:'사용연월:yes:date=YYYYMM',displayFormat:'yyyy/MM',placeholder:' ',ref:'data:dma_search.useYm',pickerType:'dynamic',title:'사용연월'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'',type:'button',class:'btn_cm sch',escape:'false','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',style:'',gridID:'gr_service',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',dataList:'data:ds_serviceList',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_service',visibleRowNum:'12',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true','ev:oncellclick':'scwin.gr_service_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column11',value:'귀속부서',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column10',value:'귀속부서명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column9',value:'계정코드',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column8',value:'계정코드명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column7',value:'사용료',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column6',value:'전표번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column5',value:'지급번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column4',value:'지급상태',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'acctDeptCd',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'acctDeptNm',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'acctCd',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'acctNm',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',width:'70',displayFormat:'#,##0',inputType:'text',id:'amt',blockSelect:'false',displayMode:'label',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',style:';color:blue;',id:'slipNo',blockSelect:'false',displayMode:'label',class:'underline'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'payNo',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'select',id:'payStsCd',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column20',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column18',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'amt\')',textAlign:'right',width:'70',displayFormat:'#,##0',inputType:'expression',style:'',id:'column16',value:'',displayMode:'label',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column15',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column14',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox row-gap-8'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_prepay',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작성부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'5',objTypeCode:'data',popupID:'',UpperFlagCode:'1',validExpCode:'작성부서:yes:format=00000',mandatoryCode:'true',allowCharCode:'0-9',codeId:'ed_slipAcctDeptCd',selectID:'retrieveAcctDeptCdInfo2',objTypeName:'data',nameId:'ed_slipAcctDeptNm',style:'',class:'col6',id:'udc_acctDeptCdInfo2','ev:onclickEvent':'scwin.udc_acctDeptCdInfo2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo2_onblurCodeEvent',refDataCollection:'dma_slip',code:'slipAcctDeptCd',name:'slipAcctDeptNm',validTitle:'작성부서',btnId:'btn_slipAcctDeptCdst',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'세금계산서일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{validExp:'세금계산서일자:yes:date=YYYYMMDD',displayFormat:'yyyy/MM/dd',style:'',id:'ed_calnDocDt',class:'form-control cal',mandatory:'true',objType:'data',calendarValueType:'yearMonthDate',ref:'data:dma_slip.calnDocDt',title:'세금계산서일자'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:button',A:{userAuth:'U',style:'',id:'btn_Save',label:'전표생성',class:'btn white',objType:'bSave','ev:onclick':'scwin.f_Save'}},{T:1,N:'w2:button',A:{userAuth:'D',style:'',id:'btn_bUpdate',label:'삭제',class:'btn',objType:'bUpdate','ev:onclick':'scwin.f_Delete'}}]}]}]}]}]}]})