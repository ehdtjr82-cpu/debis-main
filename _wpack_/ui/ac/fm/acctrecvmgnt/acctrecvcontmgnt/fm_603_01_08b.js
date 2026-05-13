/*amd /ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_01_08b.xml 25656 58cd503e7d541c11a154511f6cac076831624ec9132bb5354a3580a9efe2652d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'stDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'endDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgAcctDeptCd',name:'bilgAcctDeptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtClsCd',name:'dtClsCd',dataType:'text',defaultValue:'1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_master_org',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'clsCd1',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clsCd2',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clsCd3',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'totalAmt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'normal30Amt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'normal60Amt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'normal61Amt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'normalAmt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ovr30Amt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ovr60Amt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ovr180Amt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ovr181Amt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ovrMgntAmt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ovrAmt',name:'name1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_master',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'clsCd1',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clsCd2',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clsCd3',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'totalAmt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'normal30Amt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'normal60Amt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'normal61Amt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'normalAmt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ovr30Amt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ovr60Amt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ovr180Amt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ovr181Amt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ovrMgntAmt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ovrAmt',name:'name1'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveDailyCollectionOfMoneyTabulationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fm_603_01_08b
// 이름     : 일일수금계획및실적(집계표)
// 경로     : 회계/자금관리/수금관리/수금계획/
// 작 성 자 : 오영재
// 작 업 일 : 2025-11-17
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================
scwin.dateStr = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.onpageload = async function () {
  const codeOptions = [{
    grpCd: "CO012",
    compID: "acb_unit"
  }];
  await $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// 금액 : 천원 세팅
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  acb_unit.setSelectedIndex(1);
};

//-------------------------------------------------------------------------
// 조회 후처리
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = function (e) {
  if (ds_master.getRowCount() > 0) {
    scwin.f_addData();

    //unit change 를 위한 복제
    ds_master_org.setJSON(ds_master.getAllJSON());
    ds_master.reform();
    //ds_master.ResetStatus();	
    //gr_master.ReDraw = "true";	

    ed_totalRows.setValue(ds_master.getRowCount());

    // 단위 계산
    scwin.f_changeUnit();
  }
};

//-------------------------------------------------------------------------
// 계획대비/채권잔액 Row 추가
//-------------------------------------------------------------------------
scwin.f_addData = function (e) {
  ds_master.insertRow(10); // 계획대비 현금
  ds_master.insertRow(11); // 계획대비 어음
  ds_master.insertRow(12); // 계획대비 상계
  ds_master.insertRow(13); // 계획대비 계
  ds_master.insertRow(14); // 당일 채권잔액
  scwin.f_setAmt(10, 6, 2);
  scwin.f_setAmt(11, 7, 3);
  scwin.f_setAmt(12, 8, 4);
  scwin.f_setAmt(13, 9, 5);
  scwin.f_setAmt(14, 1, 13);
};

//-------------------------------------------------------------------------
// 추가 Row Data Set : row1 = row2 - row3
//-------------------------------------------------------------------------
scwin.f_setAmt = function (row1, row2, row3) {
  ds_master.setCellData(row1, "totalAmt", ds_master.getCellData(row2, "totalAmt") - ds_master.getCellData(row3, "totalAmt"));
  ds_master.setCellData(row1, "normal30Amt", ds_master.getCellData(row2, "normal30Amt") - ds_master.getCellData(row3, "normal30Amt"));
  ds_master.setCellData(row1, "normal60Amt", ds_master.getCellData(row2, "normal60Amt") - ds_master.getCellData(row3, "normal60Amt"));
  ds_master.setCellData(row1, "normal61Amt", ds_master.getCellData(row2, "normal61Amt") - ds_master.getCellData(row3, "normal61Amt"));
  ds_master.setCellData(row1, "normalAmt", ds_master.getCellData(row2, "normalAmt") - ds_master.getCellData(row3, "normalAmt"));
  ds_master.setCellData(row1, "ovr30Amt", ds_master.getCellData(row2, "ovr30Amt") - ds_master.getCellData(row3, "ovr30Amt"));
  ds_master.setCellData(row1, "ovr60Amt", ds_master.getCellData(row2, "ovr60Amt") - ds_master.getCellData(row3, "ovr60Amt"));
  ds_master.setCellData(row1, "ovr180Amt", ds_master.getCellData(row2, "ovr180Amt") - ds_master.getCellData(row3, "ovr180Amt"));
  ds_master.setCellData(row1, "ovr181Amt", ds_master.getCellData(row2, "ovr181Amt") - ds_master.getCellData(row3, "ovr181Amt"));
  ds_master.setCellData(row1, "ovrMgntAmt", ds_master.getCellData(row2, "ovrMgntAmt") - ds_master.getCellData(row3, "ovrMgntAmt"));
  ds_master.setCellData(row1, "ovrAmt", ds_master.getCellData(row2, "ovrAmt") - ds_master.getCellData(row3, "ovrAmt"));
  switch (row1) {
    case 10:
      // 실적 현금
      ds_master.setCellData(row1, "clsCd1", "E.계획");
      ds_master.setCellData(row1, "clsCd2", "대비(D-C)");
      ds_master.setCellData(row1, "clsCd3", "현금");
      break;
    case 11:
      // 실적 어음
      ds_master.setCellData(row1, "clsCd1", "E.계획");
      ds_master.setCellData(row1, "clsCd2", "대비(D-C)");
      ds_master.setCellData(row1, "clsCd3", "어음");
      break;
    case 12:
      // 실적 상계
      ds_master.setCellData(row1, "clsCd1", "E.계획");
      ds_master.setCellData(row1, "clsCd2", "대비(D-C)");
      ds_master.setCellData(row1, "clsCd3", "상계");
      break;
    case 13:
      // 실적 계
      ds_master.setCellData(row1, "clsCd1", "E.계획");
      ds_master.setCellData(row1, "clsCd2", "대비(D-C)");
      ds_master.setCellData(row1, "clsCd3", "계");
      break;
    case 14:
      // 당일 잔액
      ds_master.setCellData(row1, "clsCd1", "F.당일");
      ds_master.setCellData(row1, "clsCd2", "채권잔액");
      ds_master.setCellData(row1, "clsCd3", "(B-D)");
      break;
  }
};
scwin.onUdcCompleted = function () {
  udc_acqDate.setInitDate(scwin.dateStr.substring(0, 6) + "01", scwin.dateStr);
  rd_dtClsCd.setValue(1); // 일자기준
  ed_stDt.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  let ret = await $c.gus.cfValidate($p, [ed_stDt, ed_endDt, ed_bilgAcctDeptCd]);
  if (!ret) {
    return;
  }
  if (ed_endDt.getValue().trim() < ed_stDt.getValue().trim()) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_045, ['기준일자']); //기간 체크
    ed_stDt.focus();
    return;
  }
  dma_search.set("stDt", ed_stDt.getValue());
  dma_search.set("endDt", ed_endDt.getValue());
  dma_search.set("bilgAcctDeptCd", ed_bilgAcctDeptCd.getValue());
  dma_search.set("dtClsCd", rd_dtClsCd.getValue());
  $c.sbm.execute($p, sbm_search);
};
scwin.udc_bilgAcctDeptCd_onclickEvent = function (e) {
  scwin.f_srchDeptPopUpBtn();
};
scwin.f_srchDeptPopUpBtn = function (e) {
  udc_bilgAcctDeptCd.cfCommonPopUp(scwin.udc_bilgAcctDeptCd_callBackFunc // 콜백 함수
  , ed_bilgAcctDeptCd.getValue() // 화면에서의 ??? Code Element의 Value
  , ed_bilgAcctDeptNm.getValue() // 화면에서의 ??? Name Element의 Value
  , "F" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , 'T' // 전체검색허용여부	("F")
  , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
  );
};
scwin.f_srchDeptPopUp = async function (e) {
  /*
  var param=","+ed_coCd.text+","+txtCoClsCd.value;
  var rtnList = f_PopUp(ed_srchAcctDeptCd, txt_srchAcctDeptNm
                      , "retrieveAcctDeptCdInfo6", param, "410");
  */

  udc_bilgAcctDeptCd.cfCommonPopUp(scwin.udc_bilgAcctDeptCd_callBackFunc // 콜백 함수
  , ed_bilgAcctDeptCd.getValue() // 화면에서의 ??? Code Element의 Value
  , ed_bilgAcctDeptNm.getValue() // 화면에서의 ??? Name Element의 Value
  , "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , null // 전체검색허용여부	("F")
  , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
  );
};
scwin.udc_bilgAcctDeptCd_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_bilgAcctDeptCd.setValue(rtnList[0]); // 코드
    ed_bilgAcctDeptNm.setValue(rtnList[1]); // 회사명
  } else {
    ed_bilgAcctDeptCd.setValue("");
    ed_bilgAcctDeptNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 그리드의 단위를 변경한다.
//-------------------------------------------------------------------------
scwin.f_changeUnit = function () {
  let unitValue = acb_unit.getValue();
  let unitAmt = 1;
  if (unitValue == "02") {
    unitAmt = 1000;
  } else if (unitValue == "03") {
    unitAmt = 1000000;
  } else if (unitValue == "04") {
    unitAmt = 100000000;
  }
  scwin.f_changeUnitAmt(unitAmt);
};

//-------------------------------------------------------------------------
// 그리드의 단위를 변경한다.
//-------------------------------------------------------------------------
scwin.f_changeUnitAmt = function (unitAmt) {
  if (!ds_master_org || ds_master_org.getRowCount() === 0) {
    return;
  }
  let calculatedData = ds_master_org.getAllJSON();
  const cols = ["totalAmt", "normal30Amt", "normal60Amt", "normal61Amt", "normalAmt", "ovr30Amt", "ovr60Amt", "ovr180Amt", "ovr181Amt", "ovrMgntAmt", "ovrAmt"];
  for (let i = 0; i < calculatedData.length; i++) {
    let rowData = calculatedData[i];
    for (const colId of cols) {
      if (rowData.hasOwnProperty(colId)) {
        let originalValue = parseFloat(rowData[colId] || 0);
        rowData[colId] = Math.round(originalValue / unitAmt);
      }
    }
  }
  ds_master.setJSON(calculatedData);
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.udc_bilgAcctDeptCd_onblurCodeEvent = function (e) {
  if (scwin.f_IsPopUp(ed_bilgAcctDeptCd, ed_bilgAcctDeptNm)) {
    scwin.f_srchDeptPopUp();
  }
};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = function (inObj) {
  let inValue = scwin.f_GetObjValue(inObj);
  let hidValue = inObj.options.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    for (let i = 0; i < scwin.f_IsPopUp.arguments.length; i++) {
      scwin.f_SetObjValue(scwin.f_IsPopUp.arguments[i], "");
    }
    return;
  }
  if (inValue == hidValue) return;
  return true;
};

//-------------------------------------------------------------------------
// Object 값 설정함수
//-------------------------------------------------------------------------
scwin.f_SetObjValue = function (inObj, val) {
  if (inObj._wTagName == "OBJECT") inObj.setValue(val);else inObj.setValue(val);
};

//-------------------------------------------------------------------------
// Object 값 반환함수
//-------------------------------------------------------------------------
scwin.f_GetObjValue = function (inObj) {
  return inObj._wTagName == "OBJECT" ? inObj.getValue().trim() : inObj.getValue().trim();
};
scwin.udc_bilgAcctDeptCd_onblurNameEvent = function (e) {};
scwin.acb_unit_onchange = function (info) {
  scwin.f_changeUnit();
};
scwin.f_Export = function (e) {
  if (ds_master.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let sheetTitle = "일일수금집계표_" + ed_stDt.getValue() + ' ~ ' + ed_endDt.getValue();
  const gridId = gr_master;
  const infoArr = [];
  const options = {
    fileName: sheetTitle + ".xlsx",
    // + ".xls",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gridId, options, infoArr);
};
scwin.FieldClear = function (e) {
  scwin.f_FieldClear();
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, table1);
  rd_dtClsCd.setValue(1);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_acqDate',refDataMap:'dma_search',refEdDt:'acqDtEndDt',refStDt:'acqDtStDt',style:'',edFromId:'ed_stDt',edToId:'ed_endDt',objTypeBtn:'data',objTypeFrom:'data',objTypeTo:'data',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'기준일자 시작일자',titleTo:'기준일자 종료일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_bilgAcctDeptCd',code:'acctDeptCd',codeId:'ed_bilgAcctDeptCd',id:'udc_bilgAcctDeptCd',maxlengthCode:'5',maxlengthName:'100',name:'acctDeptNm',nameId:'ed_bilgAcctDeptNm',objTypeCode:'data',objTypeName:'data',popupID:'retrieveAcctDeptCdInfo6popup',selectID:'retrieveAcctDeptCdInfo6',style:'','ev:onclickEvent':'scwin.udc_bilgAcctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bilgAcctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bilgAcctDeptCd_onblurNameEvent',mandatoryCode:'true',validTitle:'청구귀속부서'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일자기준 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_dtClsCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전월말'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'현재일'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_FieldClear',style:'',type:'button','ev:onclick':'scwin.FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'단위',class:'req'}},{T:1,N:'xf:select1',A:{id:'acb_unit',chooseOption:'false',style:'width:148px; height:21px; ',submenuSize:'auto',allOption:'false',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',sortOption:'value','ev:onchange':'scwin.acb_unit_onchange'}}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',btnPlusYn:'N',btnUser:'N',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_Export',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'cell',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'구분',width:'210',colSpan:'3',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'총채권',width:'70',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'정상채권',width:'420',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'초과채권',width:'720',colSpan:'6',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'30일이하',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'31일~60일',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'61일초과 ',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column41',value:'정상채권계',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'관리채권</br>1일~30일',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'480',inputType:'text',style:'',id:'column71',value:'부실채권',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column75',value:'초과채권계',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column72',value:'31일~60일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column68',value:'61일~180일 ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column60',value:'180일초과',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column64',value:'부실채권계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clsCd1',inputType:'text',style:'',value:'',width:'70',colMerge:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clsCd2',inputType:'text',style:'',value:'',width:'70',colMerge:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clsCd3',inputType:'text',style:'',value:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totalAmt',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'normal30Amt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'normal60Amt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'normal61Amt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'normalAmt',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ovr30Amt',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ovr60Amt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ovr180Amt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ovr181Amt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ovrMgntAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ovrAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})