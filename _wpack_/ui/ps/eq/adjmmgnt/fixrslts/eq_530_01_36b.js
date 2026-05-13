/*amd /ui/ps/eq/adjmmgnt/fixrslts/eq_530_01_36b.xml 27907 5a8eba09b096e63ca74a789b362105da370b67e348273df004d671a3079298ac */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_fee_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'outDt',name:'출고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkNo',name:'정비작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkUnitNo',name:'작업단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkUnitNm',name:'작업명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'travelDtc',name:'주행KM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upr',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_fix_fee_re'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ymFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ymTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'partCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lux_wrkPlCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_fix_fee_re","key":"IN_DS1"},{"id":"ds_fix_fee_list","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_fix_fee_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_lux_wrkPlCd',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lux_wrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_lux_wrkPlCd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수  
scwin.userInfo = $c.data.getMemInfo($p);
scwin.strCurDate = WebSquare.date.getCurrentServerDate();
scwin.curDate = scwin.strCurDate.substring(0, 6);

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "lc_homeClsCd",
    opt: {
      'range': '1,EQ'
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
  lc_homeClsCd.setSelectedIndex(-1);
};
scwin.onUdcCompleted = function () {
  ed_wrkStYm.setValue(scwin.curDate);
  ed_wrkEndYm.setValue(scwin.curDate);
  lc_homeClsCd.setValue(scwin.userInfo.eqHomeClsCd); // 정비소속구분코드

  scwin.f_sbm_ds_lux_wrkPlCd();
  ed_wrkStYm.focus();
};
scwin.ondataload = function (e) {
  scwin.f_sbm_ds_lux_wrkPlCd();
};

//-------------------------------------------------------------------------
// ds_lux_wrkPlCd submission
//-------------------------------------------------------------------------
scwin.f_sbm_ds_lux_wrkPlCd = function () {
  sbm_ds_lux_wrkPlCd.action = "/cm.zz.RetrieveComboCMD.do?sysCd=PsCommonEBC&queryId=retriveWrkplList&param1=" + lc_homeClsCd.getValue();
  $c.sbm.execute($p, sbm_ds_lux_wrkPlCd);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_wrkStYm, ed_wrkEndYm, lc_homeClsCd, lc_wrkPlCd, ed_partCd]))) return;
  if (ed_wrkStYm.getValue() > ed_wrkEndYm.getValue()) {
    $c.win.alert($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_wrkStDt.focus();
    return;
  }

  // dma_fix_work_re.setUseChangeInfo(false); // 조회조건

  let strPath = "/ps.eq.adjmmgnt.fixrslts.RetrieveVehiclesEachPartsUsePresentConditionCMD.do";
  sbm_retrieve.action = strPath;
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_wrk, null);
  lc_wrkPlCd.setValue(scwin.userInfo.fixWrkPlCd); // 정비작업장코드
  scwin.lc_homeClsCd_onviewchange();
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  let rtnList; //공통POP-UP -> 요청화면 
  let pWhere = "";
  switch (disGubun) {
    case 1:
      // 정비사 팝업			
      rtnList = udc_eqBasicListInfo.cfCommonPopUp(scwin.udc_eqBasicListInfo_callBackFunc, ed_eqCd.getValue().trim(), ed_vehclNo.getValue(), pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "장비,장비코드,차량번호");

      // cfSetReturnValue(rtnList, ed_eqCd,   ed_vehclNo);
      break;
    //사용안함
    case 2:
      // 거래처 팝업			
      rtnList = udc_fixClntList.cfCommonPopUp(scwin.udc_fixClntList_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "거래처,거래처코드,거래처명");

      // cfSetReturnValue(rtnList, ed_clntNo, ed_clntNm);  			
      break;
    case 3:
      // 부품 팝업			
      rtnList = udc_partInfo.cfCommonPopUp(scwin.udc_partInfo_callBackFunc, pCode, pName, pClose, null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearch, "부품,부품코드,부품명");

      // cfSetReturnValue(rtnList, ed_partCd, ed_partNm);
      break;
    case 4:
      // 귀속부서 팝업			
      rtnList = udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, ed_acctDeptCd.getValue().trim(), ed_acctDeptNm.getValue(), pClose, null, null, null, null, pWhere, null, null, null, null, null, "T", "귀속부서,부서코드,부서명");
      // cfSetReturnValue(rtnList, ed_acctDeptCd,   ed_acctDeptNm);
      break;
  }
};

// ======================
// 콜백 함수들
// ======================
scwin.udc_eqBasicListInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_eqCd.setValue(rtnList[0]);
    ed_vehclNo.setValue(rtnList[1]);
    ed_eqCd.options.hidVal = rtnList[0];
    ed_vehclNo.options.hidVal = rtnList[1];
  } else {
    ed_eqCd.setValue("");
    ed_vehclNo.setValue("");
    ed_eqCd.options.hidVal = "";
    ed_vehclNo.options.hidVal = "";
  }
};
scwin.udc_fixClntList_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntNo.setValue(rtnList[0]);
    ed_clntNm.setValue(rtnList[1]);
    ed_clntNo.options.hidVal = rtnList[0];
    ed_clntNm.options.hidVal = rtnList[1];
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
    ed_clntNo.options.hidVal = "";
    ed_clntNm.options.hidVal = "";
  }
};
scwin.udc_partInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_partCd.setValue(rtnList[0]);
    ed_partNm.setValue(rtnList[1]);
    ed_partCd.options.hidVal = rtnList[0];
    ed_partNm.options.hidVal = rtnList[1];
  } else {
    ed_partCd.setValue("");
    ed_partNm.setValue("");
    ed_partCd.options.hidVal = "";
    ed_partNm.options.hidVal = "";
  }
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_acctDeptCd.setValue(rtnList[0]);
    ed_acctDeptNm.setValue(rtnList[1]);
    ed_acctDeptCd.options.hidVal = rtnList[0];
    ed_acctDeptNm.options.hidVal = rtnList[1];
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
    ed_acctDeptCd.options.hidVal = "";
    ed_acctDeptNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  // $c.gus.cfClearPairObj(pairObj);
  pairObj.setValue("");

  // 검색어 세팅
  // let pVal = $c.gus.cfGetValue(inObj);
  let pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  let cntRow = ds_fix_fee_list.getRowCount();
  if (cntRow == 0) return;
  let startRowIndex = 5;
  let infoArr = [{
    rowIndex: 0,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 9,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "차량별 특정부품 사용현황",
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
    colSpan: 9,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "정비기간 [" + $c.gus.cfGetFormatStr($p, ed_wrkStYm.getValue(), "####/##") + " ~ " + $c.gus.cfGetFormatStr($p, ed_wrkEndYm.getValue(), "####/##") + "]",
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
    colSpan: 9,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "사업부문 [" + $c.win.getComboLabel($p, lc_homeClsCd) + "]",
    textAlign: "left",
    //정렬
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
    colSpan: 9,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "정비작업장 [" + $c.win.getComboLabel($p, lc_wrkPlCd) + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }];
  let lowIdx = 4;
  if (ed_partCd.getValue().length !== 0) {
    lowIdx = lowIdx + 1;
    infoArr.push({
      rowIndex: lowIdx,
      // 첫 번째 줄
      colIndex: 0,
      // 첫 번째 칸부터
      colSpan: 9,
      // 그리드 전체 너비만큼 병합
      rowSpan: 1,
      text: "부품 [" + ed_partCd.getValue().trim() + " - " + ed_partNm.getValue().trim() + "]",
      textAlign: "left",
      //정렬
      fontSize: 10,
      drawBorder: false,
      // 테두리
      color: "black",
      // 글자색
      backgroundColor: "white" // 배경색
    });
    startRowIndex = startRowIndex + 1;
  }
  if (ed_eqCd.getValue().length !== 0) {
    lowIdx = lowIdx + 1;
    infoArr.push({
      rowIndex: lowIdx,
      // 첫 번째 줄
      colIndex: 0,
      // 첫 번째 칸부터
      colSpan: 9,
      // 그리드 전체 너비만큼 병합
      rowSpan: 1,
      text: "장비 [" + ed_eqCd.getValue().trim() + " - " + ed_vehclNo.getValue().trim() + "]",
      textAlign: "left",
      //정렬
      fontSize: 10,
      drawBorder: false,
      // 테두리
      color: "black",
      // 글자색
      backgroundColor: "white" // 배경색
    });
    startRowIndex = startRowIndex + 1;
  }
  if (ed_acctDeptCd.getValue().length !== 0) {
    lowIdx = lowIdx + 1;
    infoArr.push({
      rowIndex: lowIdx,
      // 첫 번째 줄
      colIndex: 0,
      // 첫 번째 칸부터
      colSpan: 9,
      // 그리드 전체 너비만큼 병합
      rowSpan: 1,
      text: "귀속부서 [" + ed_acctDeptCd.getValue().trim() + " - " + ed_acctDeptNm.getValue().trim() + "]",
      textAlign: "left",
      //정렬
      fontSize: 10,
      drawBorder: false,
      // 테두리
      color: "black",
      // 글자색
      backgroundColor: "white" // 배경색
    });
    startRowIndex = startRowIndex + 1;
  }
  const options = {
    fileName: "차량별 특정부품 사용현황 조회.xlsx",
    sheetName: "차량별 특정부품 사용현황 조회",
    startRowIndex: startRowIndex,
    startColumnIndex: 0,
    type: 1
  };
  $c.data.downloadGridViewExcel($p, gr_work_pl, options, infoArr);
};

// scwin.f_Excel = async function () {	    
//     let cntRow = ds_fix_fee_list.getRowCount();
//     if(cntRow == 0)
//         return;

//     await $c.data.downloadGridViewExcel(gr_work_pl, { fileName: fileName + ".xlsx", sheetName: sheetTitle });
// };

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------

scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_fix_fee_list.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
    return;
  }
  ;
};
scwin.lc_homeClsCd_onviewchange = function (info) {
  scwin.f_sbm_ds_lux_wrkPlCd();
};
scwin.sbm_ds_lux_wrkPlCd_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_lux_wrkPlCd.sort("code", 0);
  lc_wrkPlCd.setSelectedIndex(0);
  lc_wrkPlCd.setValue(scwin.userInfo.fixWrkPlCd); // 정비작업장코드
};
scwin.udc_partInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_partCd.getValue(), ed_partNm.getValue(), 'F', 'T');
};
scwin.udc_partInfo_onblurCodeEvent = function (e) {
  if (ed_partCd.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_partCd, ed_partNm, 3);
  } else {
    ed_partNm.setValue("");
  }
};
scwin.udc_partInfo_onviewchangeNameEvent = function (info) {
  if (ed_partNm.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_partNm, ed_partCd, 3, false);
  } else {
    ed_partCd.setValue("");
  }
};
scwin.udc_eqBasicListInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_eqCd.getValue(), ed_vehclNo.getValue(), 'F', 'T');
};
scwin.udc_eqBasicListInfo_onblurCodeEvent = function (e) {
  if (ed_eqCd.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_eqCd, ed_vehclNo, 1, false);
  } else {
    ed_vehclNo.setValue("");
  }
};
scwin.udc_eqBasicListInfo_onviewchangeNameEvent = function (info) {
  if (ed_vehclNo.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_vehclNo, ed_eqCd, 1, false);
  } else {
    ed_eqCd.setValue("");
  }
};
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'T');
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  if (ed_acctDeptCd.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_acctDeptCd, ed_acctDeptNm, 4, false);
  } else {
    ed_acctDeptNm.setValue("");
  }
};
scwin.udc_acctDeptCdInfo_onviewchangeNameEvent = function (info) {
  if (ed_acctDeptNm.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_acctDeptNm, ed_acctDeptCd, 4, false);
  } else {
    ed_acctDeptCd.setValue("");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_wrk',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{id:'temp1',refDataMap:'ds_fix_fee_re',refEdDt:'ymTo',refStDt:'ymFrom',style:'',edFromId:'ed_wrkStYm',edToId:'ed_wrkEndYm',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 230px;',submenuSize:'fixed',mandatory:'true',ref:'data:ds_fix_fee_re.homeClsCd','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange',title:'사업부문',emptyItem:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정비작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlCd',style:'width: 230px;',submenuSize:'fixed',mandatory:'true',ref:'data:ds_fix_fee_re.fixWrkPlCd',title:'정비작업장',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_lux_wrkPlCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부품',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_partCd',nameId:'ed_partNm',popupID:'',selectID:'retrievePartInfo',style:'',validTitle:'부품',maxlengthCode:'15',objTypeName:'data',objTypeCode:'data',refDataCollection:'ds_fix_fee_re',code:'partCd',id:'udc_partInfo','ev:onclickEvent':'scwin.udc_partInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_partInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_partInfo_onviewchangeNameEvent',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_eqCd',nameId:'ed_vehclNo',popupID:'',selectID:'retrieveEqBasicListInfo',style:'',validTitle:'',objTypeName:'key',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'6',refDataCollection:'ds_fix_fee_re',code:'eqCd',id:'udc_eqBasicListInfo','ev:onclickEvent':'scwin.udc_eqBasicListInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_eqBasicListInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_eqBasicListInfo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'',allowCharCode:'0-9',maxlengthCode:'5',refDataCollection:'ds_fix_fee_re',code:'acctDeptCd',id:'udc_acctDeptCdInfo','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_Excel',gridID:'gr_work_pl'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_fix_fee_list',id:'gr_work_pl',style:'',visibleRowNum:'16',visibleRowNumFix:'true',columnMove:'true',dataDragSelectAutoScroll:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'출고일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'정비작업번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'귀속부서명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'작업단위코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'작업명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'주행KM',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'수량',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'단가',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'금액',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'outDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkNo',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkUnitNo',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkUnitNm',inputType:'text',style:'',value:'',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'travelDtc',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upr',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column34',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column32',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column31',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("travelDtc")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column30',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("qty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column29',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("upr")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column28',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("amt")',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})