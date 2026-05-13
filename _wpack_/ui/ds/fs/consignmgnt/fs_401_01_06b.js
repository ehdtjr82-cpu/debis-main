/*amd /ui/ds/fs/consignmgnt/fs_401_01_06b.xml 25923 c4f4f6e2023b0d5bad26dbee3b56367b7c80ad983a37a79efaf7ffe63fa949e2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_trusteeTaxInvoiceDTOList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'세금계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_consignmentCostQueryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ym',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'branCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'branCd2',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modId',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.consignmgnt.consignmgntcadjm.RetrieveTrusteeTaxInvoiceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_consignmentCostQueryConditionDTO","key":"IN_DS1"},{"id":"ds_trusteeTaxInvoiceDTOList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_trusteeTaxInvoiceDTOList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/* 
 화면 - $Id: fs_401_01_06b.xml$
 설명 - 수탁자 세금계산서 발행
 */
/*년월 setting*/
scwin.strCurYyMm = $c.date.getServerDateTime($p, "yyyyMM"); // 서버를 기준으로 현재 날짜 반환

//let memJson = $c.data.getMemInfo();
scwin.userId = $c.data.getMemInfo($p, "userId");
scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); //상위물류점소코드

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.f_SetDefaultData();
  $c.gus.cfDisableBtnOnly($p, [btn_Print]);
  // cfSetIMEModeActiveObjects([txt_lobranNm2]); // 지원안함
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  $c.sbm.execute($p, sbm_lobran); //점소

  rd_printFg.setValue("03");
  ed_ym.setValue(scwin.strCurYyMm);
  ed_ym.focus();
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};

//-------------------------------------------------------------------------
// 수탁자세금계산서 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = async function (e) {
  let check = await $c.gus.cfValidate($p, [ed_ym]);
  if (!check) return;

  //dataMap set
  dma_consignmentCostQueryConditionDTO.set("ym", ed_ym.getValue());
  dma_consignmentCostQueryConditionDTO.set("branCd", lc_lobran.getValue()); // 점소
  dma_consignmentCostQueryConditionDTO.set("branCd2", ed_lobranCd2.getValue()); // 점소2: 매입부서
  dma_consignmentCostQueryConditionDTO.set("modId", ed_modId.getValue()); // 거래처

  $c.sbm.execute($p, sbm_retrieve);
};
//조회callback
scwin.sbm_retrieve_submitdone = function () {
  // 그리드 첫째 행 index선택
  gr_trusteeTaxInvoiceDTOList.setFocusedCell(0, 0);
  let nCnt = ds_trusteeTaxInvoiceDTOList.getRowCount();
  total.setValue(nCnt);
  if (nCnt == 0) {
    $c.gus.cfDisableBtnOnly($p, [btn_Print]);
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  } else {
    $c.gus.cfEnableBtnOnly($p, [btn_Print]);
  }
};

//점소 combo callback
scwin.sbm_lobran_submitdone = function () {
  if (scwin.userId == "811160") {
    lc_lobran.setValue("");
  } else {
    lc_lobran.setValue(scwin.loUpperLobranCd);
  }
  lc_lobran.focus();
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 매입부서 팝업
      udc_comCode_lobran2.setSelectId('retrieveLobranInfo');
      udc_comCode_lobran2.cfCommonPopUp(scwin.udc_comCode_lobran2_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 3:
      // 청구담당자 팝업
      udc_comCode_mod.setSelectId('retrieveClntList');
      udc_comCode_mod.cfCommonPopUp(scwin.udc_comCode_mod_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.udc_comCode_lobran2_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(1, ed_lobranCd2.getValue(), ed_lobranNm2.getValue(), "F", "T");
};

//매입부서 callback
scwin.udc_comCode_lobran2_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lobranCd2, ed_lobranNm2);
};
scwin.udc_comCode_lobran2_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lobranCd2, ed_lobranNm2, 1);
};
scwin.udc_comCode_lobran2_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lobranNm2, ed_lobranCd2, 1, false);
};
scwin.udc_comCode_mod_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(3, ed_modId.getValue(), ed_empNm.getValue(), "F", "F");
};

//거래처 callback
scwin.udc_comCode_mod_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_modId, ed_empNm);
};
scwin.udc_comCode_mod_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_modId, ed_empNm, 3);
};
scwin.udc_comCode_mod_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_empNm, ed_modId, 3, false);
};

//grid header(check box) - 전체선택/전체취소
scwin.gr_trusteeTaxInvoiceDTOList_onheaderclick = function (headerId) {
  let i = 0;
  if (headerId == "chk") {
    if (bCheck == "1") {
      for (i = 0; i < ds_trusteeTaxInvoiceDTOList.getRowCount(); i++) {
        if (ds_trusteeTaxInvoiceDTOList.getCellData(i, "slipNo") != "") {
          ds_trusteeTaxInvoiceDTOList.setCellData(i, "chk", "T");
        } else {
          ds_trusteeTaxInvoiceDTOList.setCellData(i, "chk", "F");
        }
      }
    } else {
      for (i = 0; i < ds_trusteeTaxInvoiceDTOList.getRowCount(); i++) {
        ds_trusteeTaxInvoiceDTOList.setCellAllData(i, "chk", "F");
      }
    }
  }
};

//-------------------------------------------------------------------------
// 인쇄 (조건에 따라 출력물을 분기한다.)
// 발행(세금계산서,거래명세서,통합)
//-------------------------------------------------------------------------
scwin.btn_Print_onclick = function (e) {
  if (rd_printFg.getValue() == "01") {
    // 
    scwin.f_PrintPchsVatNo();
  } else if (rd_printFg.getValue() == "02") {
    scwin.f_PrintSlipNo();
  } else if (rd_printFg.getValue() == "03") {
    scwin.f_totalPrint();
  }
};

//-------------------------------------------------------------------------
// 세금계산서 출력
//-------------------------------------------------------------------------
scwin.f_PrintPchsVatNo = async function () {
  let param = "";
  let printCnt = 0;
  let chkArr = ds_trusteeTaxInvoiceDTOList.getMatchedIndex('chk', 'T');
  if (chkArr.length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["발행할 세금계산서"]); // @을(를) 선택하십시오.
    return;
  }
  for (i = 0; i < ds_trusteeTaxInvoiceDTOList.getRowCount(); i++) {
    if (ds_trusteeTaxInvoiceDTOList.getCellData(i, "chk") == "T") {
      param = param + "," + ds_trusteeTaxInvoiceDTOList.getCellData(i, "sellVatNo"); // 계산서번호
      printCnt++;
    }
  }
  let previewMode = chb_previewCheck.getValue() == "1"; // 미리보기 처리

  let data = {
    reportName: '/ac/fi/taxbiz/vatctrl/fi_401_01_09p.ozr',
    odiParam: {
      "pchsSellCls": param.substring(1)
    },
    viewerParam: {
      // OZ 뷰어에 대한 설정
      useprogressbar: false,
      zoom: 100
    },
    formParam: {
      // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
      odiName: 'fi_401_01_09p'
    }
  };
  if (previewMode) {
    let opts = {
      "type": "viewer",
      // viewer, print, download
      "printMode": "view"
    };
    await $c.ext.openOzReport($p, data, opts);
  } else {
    let opts = {
      "type": "print",
      "printMode": "silent"
    };
    $c.ext.printOzReport($p, data, opts);
  }
};

//-------------------------------------------------------------------------
// 거래명세서 출력(전표번호)
//-------------------------------------------------------------------------
scwin.f_PrintSlipNo = async function () {
  let param = "";
  let printCnt = 0;
  let chkArr = ds_trusteeTaxInvoiceDTOList.getMatchedIndex('chk', 'T');
  if (chkArr.length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["발행할 거래명세서"]); // @을(를) 선택하십시오.
    return;
  }
  for (i = 0; i < ds_trusteeTaxInvoiceDTOList.getRowCount(); i++) {
    if (ds_trusteeTaxInvoiceDTOList.getCellData(i, "chk") == "T") {
      param = param + "," + ds_trusteeTaxInvoiceDTOList.getCellData(i, "slipNo"); // 전표번호
      printCnt++;
    }
  }
  let previewMode = chb_previewCheck.getValue() == "1"; // 미리보기 처리

  let data = {
    reportName: '/ds/fs/adjm/fs_401_01_06p.ozr',
    odiParam: {
      slipNo: param.substring(1)
    },
    viewerParam: {
      // OZ 뷰어에 대한 설정
      useprogressbar: false,
      zoom: 100
    },
    formParam: {
      // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
      odiName: 'fs_401_01_06p'
    }
  };
  if (previewMode) {
    let opts = {
      "type": "viewer",
      // viewer, print, download
      "printMode": "view"
    };
    await $c.ext.openOzReport($p, data, opts);
  } else {
    let opts = {
      "type": "print",
      "printMode": "silent"
    };
    $c.ext.printOzReport($p, data, opts);
  }
};

//-------------------------------------------------------------------------
// 인쇄 (통합발행)
//-------------------------------------------------------------------------
scwin.f_totalPrint = async function () {
  isTotPrint = true;
  //$c.gus.OZStartBatch();

  await scwin.f_PrintSlipNo();
  await scwin.f_PrintPchsVatNo();
  isTotPrint = false;
  //$c.gus.OZExecuteBatch();
};

/**
 * @method
 * @name openOzPopup
 * @description 오즈리포트 화면을 띄운다
 * @param {string} data desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.openOzPopup = async function (data) {
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
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.f_RunExcel = async function () {
  let count = ds_trusteeTaxInvoiceDTOList.getRowCount();
  if (!(count > 0)) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  } else {
    // 확인창 없이 바로 다운로드 실행
    // 1. 그리드 객체 확인 (ID 문자열이 아닌 객체 자체를 할당)
    const gridObj = gr_trusteeTaxInvoiceDTOList;

    // 2. 시트명 및 파일명 설정
    let sheetName = "수탁자 세금계산서 발행";
    let fileName = sheetName + ".xlsx";

    // 그리드 전체 컬럼 수 (title 병합에 사용)
    let colCount = gridObj.getTotalCol();

    // 4. 추가 정보 설정 (필요 시 헤더 상단에 추가 행 삽입)
    const infoArr = [{
      rowIndex: 0,
      colIndex: 0,
      rowSpan: 1,
      colSpan: colCount,
      text: "수탁자 세금계산서 발행",
      textAlign: "center",
      fontSize: 12,
      fontName: "돋움체",
      color: "black",
      backgroundColor: "#ffffff",
      drawBorder: false
    }
    // 빈 행(skiprow)이 필요하면 rowIndex:1 항목 추가
    ];

    // startRowIndex로 그리드 데이터 시작 위치 조정
    const options = {
      fileName: fileName,
      sheetName: sheetName,
      startRowIndex: 2,
      // 0:title행, 1:빈행, 2부터 그리드 데이터
      startColumnIndex: 0,
      type: "1"
    };
    await $c.data.downloadGridViewExcel($p, gridObj, options, infoArr, 26);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_mainData',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'연월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_ym',style:'',mandatory:'true',displayFormat:'yyyy/MM',title:'연월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lobran',search:'start',style:'width:200px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lobranCd2',nameId:'ed_lobranNm2',id:'udc_comCode_lobran2',UpperFlagCode:'1',maxlengthCode:'4',mandatoryCode:'false',objTypeCode:'Data',selectID:'retrieveLobranInfo','ev:onclickEvent':'scwin.udc_comCode_lobran2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_lobran2_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_comCode_lobran2_onblurNameEvent',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_modId',nameId:'ed_empNm',id:'udc_comCode_mod',mandatoryCode:'false',UpperFlagCode:'1',maxlengthCode:'8',selectID:'retrieveClntList','ev:onclickEvent':'scwin.udc_comCode_mod_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_mod_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_comCode_mod_onblurNameEvent',allowCharCode:'a-zA-Z0-9'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_trusteeTaxInvoiceDTOList',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridDownFn:'scwin.f_RunExcel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_trusteeTaxInvoiceDTOList',id:'gr_trusteeTaxInvoiceDTOList',style:'',visibleRowNum:'15',visibleRowNumFix:'true',focusMode:'cell',readOnly:'true','ev:onheaderclick':'scwin.gr_trusteeTaxInvoiceDTOList_onheaderclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',value:'',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'거래처코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'거래처명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'세금계산서번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'공급가액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'공급일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'적요',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'전표번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true',readOnly:'false',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellVatNo',inputType:'text',width:'150',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,###,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,###,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,###,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyDt',inputType:'calendar',width:'100',textAlign:'center',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label',textAlign:'center',colMerge:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',expression:'SUM("spplyAmt")',displayFormat:'#,###,###,###,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',expression:'SUM("vatAmt")',displayFormat:'#,###,###,###,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',expression:'SUM("sumAmt")',displayFormat:'#,###,###,###,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'rd_printFg',renderType:'radiogroup',rows:'',class:'',cols:'',selectedIndex:'2'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세금계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래명세서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통합발생'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'0',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Print',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Print_onclick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]}]}]}]}]}]}]}]})