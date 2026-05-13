/*amd /ui/ps/eq/adjmmgnt/fixrslts/eq_530_01_07b.xml 19848 573540a8eef42a4939f23edc97c30659f2de59bceed369f6f584c54ecaef31ea */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lc_wrkPlCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_fee_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ym',name:'년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngModelCd',name:'형식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCnt',name:'대수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixFee',name:'실적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixFeePiece',name:'대당정비비',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fix_fee_re'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ymFrom',name:'년월From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ymTo',name:'년월To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_lc_wrkPlCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retriveWrkplList',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_lc_wrkPlCd',target:'data:json,{"id":"ds_lc_wrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retriveWrkplList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.adjmmgnt.fixrslts.RetrieveEngineEachFixfeeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_fix_fee_re","key":"IN_DS1"},{"id":"ds_fix_fee_list","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_fix_fee_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMM");
scwin.onpageload = async function () {
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "acb_homeClsCd",
    opt: {
      "range": "1,EQ"
    }
  }];
  await $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  acb_homeClsCd.setValue(scwin.memJson.eqHomeClsCd); // 정비소속구분코드
  scwin.retriveWrkplList();
};
scwin.retriveWrkplList = function () {
  const params = {
    sysCd: "PsCommonEBC",
    queryId: "retriveWrkplList",
    param1: acb_homeClsCd.getValue()
  };

  //데이터셋에 정보설정
  dma_lc_wrkPlCd.setJSON(params);
  $c.sbm.execute($p, sbm_retriveWrkplList);
};

//-------------------------------------------------------------------------
// UDC 로딩 완료 후
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ica_wrkStYm.setValue(scwin.strCurDate);
  ica_wrkEndYm.setValue(scwin.strCurDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [tb_wrk]);
  if (!ret) {
    return false;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_wrkStYm.getValue() + "01", ica_wrkEndYm.getValue() + "01")) {
    await $c.win.alert($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ica_wrkStYm.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_wrk, null);
  ica_wrkStYm.setValue(scwin.strCurDate);
  ica_wrkEndYm.setValue(scwin.strCurDate);

  // if(acb_homeClsCd.getSelectedIndex() == -1) {
  //     acb_homeClsCd.setSelectedIndex(0);
  // }

  acb_wrkPlCd.setValue(scwin.memJson.fixWrkPlCd); // 정비작업장코드
};

//-------------------------------------------------------------------------
// 그리드 높이를 조정 : 지정된 그리드의 Height 를 size 만큼 증감 시킨다.
//-------------------------------------------------------------------------
scwin.f_GrdHeight = function (gridNm, size) {
  let strHeight = gridNm.style.height;
  let intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    gridNm.style.height = intHeight + "px";
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let pWhere = "";
  switch (disGubun) {
    case 2:
      // 귀속부서 팝업			
      await udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, ed_acctDeptCd.getValue().trim(),
      // 화면에서의 Code Element의	Value
      ed_acctDeptNm.getValue(),
      // 화면에서의 Name Element의	Value
      pClose,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      null,
      // 검색 결과	컬럼의 보여주는	개수
      null,
      // Title순서	
      null,
      // 보여주는 각 컬럼들의 폭	
      null,
      // 컬럼중에서 숨기는	컬럼 지정	
      pWhere,
      // SQL절의 WHERE절에	원하는 조건을 선택함
      null,
      // POP-UP뛰을때 원도우의	사용자 정의	폭
      null,
      // POP-UP뛰을때 우도우의	사용자 정의	높이	
      null,
      // 윈도우 위치 Y좌표	
      null,
      // 윈도우 위치 X좌표
      null,
      // 중복체크여부	("F")
      "T",
      // 전체검색허용여부	("F")
      "귀속부서,부서코드,부서명" // POP-UP Window Title
      );
      break;
  }
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_acctDeptCd.setValue(rtnList[0]);
    ed_acctDeptNm.setValue(rtnList[1]);
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (!(ds_fix_fee_list.getRowCount() > 0)) {
    await $c.win.alert($p, "자료가 없습니다.");
    return;
  }
  let gridColCount = gr_work_pl.getTotalCol();
  let startRowIndex = 0;
  let homeClsCd = acb_homeClsCd.getText();
  if (homeClsCd == null) {
    homeClsCd = "";
  } else {
    homeClsCd = acb_homeClsCd.getText();
  }
  let infoArr = [{
    rowIndex: 0,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "엔진형식별정비비 조회",
    textAlign: "center",
    // 정렬
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
    text: "정비기간 [" + $c.gus.cfGetFormatStr($p, ica_wrkStYm.getValue(), "####/##") + " ~ " + $c.gus.cfGetFormatStr($p, ica_wrkEndYm.getValue(), "####/##") + "]",
    textAlign: "left",
    // 정렬
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
    text: "사업부문 [" + homeClsCd + "]",
    textAlign: "left",
    // 정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 4,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "정비작업장 [" + acb_wrkPlCd.getText() + "]",
    textAlign: "left",
    // 정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }];
  if (ed_acctDeptCd.getValue().trim() != "") {
    infoArr.push({
      rowIndex: 5,
      // 첫 번째 줄
      colIndex: 0,
      // 첫 번째 칸부터
      colSpan: gridColCount,
      // 그리드 전체 너비만큼 병합
      rowSpan: 1,
      text: "귀속부서 [" + ed_acctDeptCd.getValue() + "-" + ed_acctDeptNm.getValue() + "]",
      textAlign: "left",
      // 정렬
      fontSize: 10,
      drawBorder: false,
      // 테두리
      color: "black",
      // 글자색
      backgroundColor: "white" // 배경색
    });
    startRowIndex = 6;
  } else {
    startRowIndex = 5;
  }
  const options = {
    fileName: "엔진형식별정비비 조회.xlsx",
    sheetName: "엔진형식별정비비 조회",
    startRowIndex: startRowIndex,
    startColumnIndex: 0,
    columnMove: true,
    columnMoveWithFooter: true,
    type: 1
  };
  $c.data.downloadGridViewExcel($p, gr_work_pl, options, infoArr);
};
scwin.sbm_retrieve_submitdone = function (e) {
  totalRows.setValue(ds_fix_fee_list.getRowCount());
};
scwin.sbm_retriveWrkplList_submitdone = function (e) {
  acb_wrkPlCd.setValue(scwin.memJson.fixWrkPlCd); // 정비작업장코드

  if (acb_wrkPlCd.getSelectedIndex() == -1) {
    acb_wrkPlCd.setSelectedIndex(0);
  }
};
scwin.acb_homeClsCd_onchange = function (info) {
  scwin.retriveWrkplList();
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_acctDeptCd, ed_acctDeptNm, 2, false);
};
scwin.udc_acctDeptCdInfo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_acctDeptNm, ed_acctDeptCd, 2, false);
};
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'T');
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_wrk',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{id:'udc_fromToYearMon1',refDataMap:'dma_fix_fee_re',refEdDt:'ymTo',refStDt:'ymFrom',style:'',edFromId:'ica_wrkStYm',edToId:'ica_wrkEndYm',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_homeClsCd',search:'start',style:'width:150px;',submenuSize:'fixed','ev:onchange':'scwin.acb_homeClsCd_onchange',allOption:'',chooseOption:'',chooseOptionLabel:'$blank',ref:'',title:'사업부문',emptyItem:'true',displayMode:'value delim label'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정비작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_wrkPlCd',search:'start',style:'width:150px;',submenuSize:'fixed',ref:'data:dma_fix_fee_re.fixWrkPlCd',allOption:'',chooseOption:'',title:'정비작업장',displayMode:'value delim label',visibleRowNum:'25',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lc_wrkPlCd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo',codeId:'ed_acctDeptCd',validTitle:'귀속부서',nameId:'ed_acctDeptNm',style:'',code:'acctDeptCd',refDataCollection:'dma_fix_fee_re',btnId:'btn_acctDeptCd',id:'udc_acctDeptCdInfo',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'5',mandatoryCode:'false',mandatoryName:'false','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',gridID:'gr_work_pl',gridDownFn:'scwin.f_Excel',gridUpYn:'N',btnUser:'Y',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',columnMove:'true',dataList:'data:ds_fix_fee_list',id:'gr_work_pl',readOnly:'true',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',columnMoveWithFooter:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'년월',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'형식',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'대수',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'실적',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'대당정비비',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{dataType:'text',displayFormat:'####/##',displayMode:'label',id:'ym',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ngModelCd',inputType:'text',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'eqCnt',inputType:'text',width:'70',excelCellType:'number'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'fixFee',inputType:'text',textAlign:'right',width:'70',excelCellType:'number'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'fixFeePiece',inputType:'text',textAlign:'right',width:'120',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column48',inputType:'text',value:'합계',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum("eqCnt")',id:'column46',inputType:'expression',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum("fixFee")',id:'column45',inputType:'expression',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0[floor]',displayMode:'label',expression:'avg("fixFeePiece")',id:'column44',inputType:'expression',textAlign:'right',width:'120'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})