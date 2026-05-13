/*amd /ui/ds/op/adjmbd/pchstrfmgnt/op_401_02_07b.xml 26258 4e7dc7da09095721ff4d6023a8382f2d62d332f0d421e4f3b45007c1fa8bfe99 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadFarePresentCondition',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'NO',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStnNm',name:'출발역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnNm',name:'도착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtc',name:'거리',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrNrmFullEmpty',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadApd',name:'KM;단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'volDcRt',name:'VOL;할인율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtcDcRt',name:'특별;할인율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xclsFare',name:'전용화차',dataType:'number'}},{T:1,N:'w2:column',A:{id:'onewayFare',name:'전용;편도화차',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rvFare',name:'예비화차',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prvtFare',name:'사유화차',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adminfrtcarFare',name:'공사화차',dataType:'number'}},{T:1,N:'w2:column',A:{id:'btFare',name:'저수요',dataType:'number'}},{T:1,N:'w2:column',A:{id:'btFareFix',name:'BT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStnHndlRate',name:'조작료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dptStnReHndlRate',name:'재조작',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dptStnCmpndCgshfRate',name:'구내;이적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnHndlRate',name:'조작료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'arvStnReHndlRate',name:'재조작',dataType:'number'}},{T:1,N:'w2:column',A:{id:'arvStnCmpndCgshfRate',name:'구내;이적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adminfrtcarTotFare',name:'공사화차;총운임',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_QueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dptStnCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStnNm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStnCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStnNm',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transNmCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transNmNm',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'name7',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.adjmbd.pchstrfmgnt.RetrieveDistanceEachRailroadFarePresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_QueryCondition","key":"IN_DS1"},{"id":"ds_RailroadFarePresentCondition","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RailroadFarePresentCondition","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_401_02_07b
// 이름     : 구간별철송임
// 작 성 자 : 최지수
// 작 업 일 : 2026-04-09
//==================================================================================================================
scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환

scwin.onpageload = function () {
  debugger;
  console.log("onpageload start");
  grp_totalCnt.setStyle("display", "none");
  total.setValue("");
  const codeOptions = [{
    grpCd: "OP147",
    compID: "acb_co_lc_srchCode1"
  }];
  $c.data.setCommonCode($p, codeOptions);
  console.log("after setCommonCode");
  ica_ed_srchFromDate.setValue(scwin.strCurDate);
  scwin.setDefaultTransNm();
};
scwin.setDefaultTransNm = function () {
  let tryCount = 0;
  const maxTry = 50;
  const timer = setInterval(function () {
    tryCount++;
    if (acb_co_lc_srchCode1.getItemCount && acb_co_lc_srchCode1.getItemCount() > 1) {
      acb_co_lc_srchCode1.setSelectedIndex(1);
      console.log("default transNmCd =", acb_co_lc_srchCode1.getValue());
      clearInterval(timer);
      return;
    }
    if (tryCount >= maxTry) {
      clearInterval(timer);
      console.log("운송명의 기본값 세팅 실패");
    }
  }, 200);
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
  ica_ed_srchFromDate.setValue(scwin.strCurDate);
  acb_co_lc_srchCode1.focus();
};

//-------------------------------------------------------------------------
// 공통팝업 오픈 여부 체크 및 호출
// AS-IS f_chkOpenCommonPopUp 대응
// disGubun : 1=출발역, 2=도착역
// isCode   : true=코드기준, false=이름기준
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (codeComp, nameComp, disGubun, isCode) {
  var codeVal = (codeComp.getValue() || "").trim();
  var nameVal = (nameComp.getValue() || "").trim();

  // 둘 다 비어있으면 초기화만
  if (codeVal === "" && nameVal === "") {
    codeComp.setValue("");
    nameComp.setValue("");
    return;
  }

  // 짝 필드 초기화
  if (isCode === false) {
    codeComp.setValue("");
  } else {
    nameComp.setValue("");
  }

  // 코드 기준 조회
  if (isCode === false) {
    scwin.f_openCommonPopUp(disGubun, "", nameVal, "T", "T");
  } else {
    scwin.f_openCommonPopUp(disGubun, codeVal, "", "T", "T");
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : AS-IS f_openCommonPopUp 대응
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  if (disGubun === 1) {
    udc_comCode_starttrain.cfCommonPopUp(scwin.udc_comCode_starttrain_callBackFunc, pCode, pName, pClose, null,
    // 검색 결과 컬럼 개수
    null,
    // Title 순서
    null,
    // 컬럼 폭
    null,
    // 숨김 컬럼
    null,
    // WHERE 조건
    null,
    // popup width
    null,
    // popup height
    null,
    // posY
    null,
    // posX
    null,
    // 중복체크여부
    pAllSearch, "출발역 작업장조회,작업장코드,작업장명");
  } else if (disGubun === 2) {
    udc_comCode_endtrain.cfCommonPopUp(scwin.udc_comCode_endtrain_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "도착역 작업장조회,작업장코드,작업장명");
  }
};

//출발역pop
scwin.udc_comCode_starttrain_onclickEvent = function (e) {
  // udc_comCode_starttrain.cfCommonPopUp(scwin.udc_comCode_starttrain_callBackFunc, ed_startTrainWorkPlaceCd.getValue(), ed_startTrainWorkPlaceNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  scwin.f_openCommonPopUp(1, ed_startTrainWorkPlaceCd.getValue(), ed_startTrainWorkPlaceNm.getValue(), "F", "T");
};

//출발pop callback
scwin.udc_comCode_starttrain_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_startTrainWorkPlaceCd, ed_startTrainWorkPlaceNm);
  console.log(ret);
};
scwin.udc_comCode_starttrain_onblurCodeEvent = function (e) {
  var codeVal = (ed_startTrainWorkPlaceCd.getValue() || "").trim();
  if (codeVal === "") {
    ed_startTrainWorkPlaceNm.setValue("");
    return;
  }
  scwin.f_chkOpenCommonPopUp(ed_startTrainWorkPlaceCd, ed_startTrainWorkPlaceNm, 1, true);
};
scwin.udc_comCode_starttrain_onviewchangeNameEvent = function (info) {
  var nameVal = (ed_startTrainWorkPlaceNm.getValue() || "").trim();
  if (nameVal === "") {
    ed_startTrainWorkPlaceCd.setValue("");
    return;
  }
  scwin.f_chkOpenCommonPopUp(ed_startTrainWorkPlaceCd, ed_startTrainWorkPlaceNm, 1, false);
};
scwin.udc_comCode_endtrain_onclickEvent = function (e) {
  // udc_comCode_endtrain.cfCommonPopUp(scwin.udc_comCode_endtrain_callBackFunc, ed_endTrainWorkPlaceCd.getValue(), ed_endTrainWorkPlaceNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  scwin.f_openCommonPopUp(2, ed_endTrainWorkPlaceCd.getValue(), ed_endTrainWorkPlaceNm.getValue(), "F", "T");
};

//도착pop callback
scwin.udc_comCode_endtrain_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_endTrainWorkPlaceCd, ed_endTrainWorkPlaceNm);
  console.log(ret);
};
scwin.udc_comCode_endtrain_onblurCodeEvent = function (e) {
  var codeVal = (ed_endTrainWorkPlaceCd.getValue() || "").trim();
  if (codeVal === "") {
    ed_endTrainWorkPlaceNm.setValue("");
    return;
  }
  scwin.f_chkOpenCommonPopUp(ed_endTrainWorkPlaceCd, ed_endTrainWorkPlaceNm, 2, true);
};
scwin.udc_comCode_endtrain_onviewchangeNameEvent = function (info) {
  var nameVal = (ed_endTrainWorkPlaceNm.getValue() || "").trim();
  if (nameVal === "") {
    ed_endTrainWorkPlaceCd.setValue("");
    return;
  }
  scwin.f_chkOpenCommonPopUp(ed_endTrainWorkPlaceCd, ed_endTrainWorkPlaceNm, 2, false);
};

//조회
scwin.btn_retrieve_onclick = function (e) {
  let raw = (ica_ed_srchFromDate.getValue() || "").trim();
  let pure = raw.replace(/\D/g, "");
  if (pure.length != 8) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_005, ["조회일자", "8"]);
    return;
  }

  //dataMap set
  dma_QueryCondition.set("dptStnCd", ed_startTrainWorkPlaceCd.getValue()); // 출발역
  dma_QueryCondition.set("arvStnCd", ed_endTrainWorkPlaceCd.getValue()); // 도착역
  dma_QueryCondition.set("transNmCd", acb_co_lc_srchCode1.getValue()); // 운송명의
  dma_QueryCondition.set("adptDt", ica_ed_srchFromDate.getValue()); // 적용일자

  $c.sbm.execute($p, sbm_retrieve);
};

//조회callback  
scwin.sbm_retrieve_submitdone = function () {
  let rowcnt = ds_RailroadFarePresentCondition.getRowCount();
  grp_totalCnt.setStyle("display", "");
  total.setValue(rowcnt);
  if (rowcnt === 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }

  // NO 컬럼에 행번호 세팅
  for (let i = 0; i < rowcnt; i++) {
    ds_RailroadFarePresentCondition.setCellData(i, "NO", String(i + 1));
  }

  // total 표시
  total.setValue(rowcnt);

  // 포커스
  gr_selfInoutList.setFocusedCell(0, 0);
};
scwin.gr_selfInoutList_onsort = function (e) {
  let rowcnt = ds_RailroadFarePresentCondition.getRowCount();
  for (let i = 0; i < rowcnt; i++) {
    ds_RailroadFarePresentCondition.setCellData(i, "NO", String(i + 1));
  }
};
scwin.btn_print_onclick = function (e) {
  $c.gus.cfAlertMsg($p, "현재 인쇄 표준 협의중.  아직 이용하지 못합니다. ");
};

//요율등록
scwin.btn_reg_onclick = async function (e) {
  let arrParam = new Array();
  arrParam[0] = ed_startTrainWorkPlaceCd.getValue();
  arrParam[1] = ed_startTrainWorkPlaceNm.getValue();
  arrParam[2] = ed_endTrainWorkPlaceCd.getValue();
  arrParam[3] = ed_endTrainWorkPlaceNm.getValue();
  arrParam[4] = acb_co_lc_srchCode1.getValue(); // 운송명의 코드

  //옵션 설정
  let options = {
    id: "regist",
    type: "",
    popupName: "요율등록",
    width: 1050,
    height: 703
  };
  await $c.win.openPopup($p, "/ui/ds/op/adjmbd/pchstrfmgnt/op_401_05_02b.xml", options, arrParam);
};

/**
 * method
 * @name f_runExcel
 * @description Excel
 * @param
 */
scwin.f_runExcel = async function () {
  if (gr_selfInoutList.getRowCount()) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, gr_selfInoutList, {
        fileName: '구간별철송임조회.xlsx',
        sheetName: '구간별철송임조회',
        type: "1",
        useDataFormat: "true"
      });
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.ica_ed_srchFromDate_onblur = function (e) {
  debugger;
  try {
    let val = ica_ed_srchFromDate.getValue();
    if (!val) return;
    let pure = String(val).replace(/\D/g, "");

    // 8자리 아니면 그냥 두고 오류 안 띄움
    if (pure.length !== 8) {
      console.log("[조회일자] blur 시 검증 안함:", val);
      return;
    }

    // 정상 날짜면 yyyy/MM/dd 형식으로 정리
    let yyyy = pure.substring(0, 4);
    let mm = pure.substring(4, 6);
    let dd = pure.substring(6, 8);
    ica_ed_srchFromDate.setValue(yyyy + "/" + mm + "/" + dd);
  } catch (e) {
    console.log("[조회일자 blur error]", e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'운송명의',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_co_lc_srchCode1',search:'start',style:'width:200px;',submenuSize:'auto',ref:'data:dma_QueryCondition.transNmCd',mandatory:'true',allOption:'',chooseOption:'',chooseOptionLabel:'전체',visibleRowNum:'10'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조회일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_ed_srchFromDate',pickerType:'dynamic',style:'',mandatory:'true',displayFormat:'yyyy/MM/dd','ev:onblur':'scwin.ica_ed_srchFromDate_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_startTrainWorkPlaceCd',nameId:'ed_startTrainWorkPlaceNm',id:'udc_comCode_starttrain','ev:onclickEvent':'scwin.udc_comCode_starttrain_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_starttrain_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_starttrain_onviewchangeNameEvent',selectID:'retrieveTrainWorkPlace',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_endTrainWorkPlaceCd',nameId:'ed_endTrainWorkPlaceNm',id:'udc_comCode_endtrain','ev:onclickEvent':'scwin.udc_comCode_endtrain_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_endtrain_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_endtrain_onviewchangeNameEvent',selectID:'retrieveTrainWorkPlace',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'구간별 철송임',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridID:'gr_selfInoutList',gridDownFn:'scwin.f_runExcel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_RailroadFarePresentCondition',id:'gr_selfInoutList',style:'',visibleRowNum:'20',visibleRowNumFix:'true',defaultCellHeight:'20',focusMode:'row',focusMove:'true',readOnly:'true',columnMove:'true','ev:onsort':'scwin.gr_selfInoutList_onsort'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:'height:20px !important;'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'NO',width:'50',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'구간',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'적용일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'거리',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'규격',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'KM<br/>단가',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'VOL<br/>할인율',width:'80',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'특별<br/>할인율',width:'80',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'전용화차',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'전용<br/>편도화차',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'예비화차',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'사유화차',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'공사화차',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',value:'저수요',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',value:'BT',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column23',value:'출발역',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column43',value:'도착역',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'공사화차<br/>총운임',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'height:20px !important;',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column68',value:'출발역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column67',value:'도착역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'조작료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'재조작',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'구내이적',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'조작료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'재조작',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'구내이적',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'NO',inputType:'text',width:'50',textAlign:'center',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptStnNm',inputType:'text',width:'80',textAlign:'left',style:'vertical-align: top;',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvStnNm',inputType:'text',width:'80',textAlign:'left',style:'vertical-align: top;',colMerge:'true',upperColumn:'dptStnNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'calendar',width:'100',displayFormat:'yyyy/MM/dd',style:'vertical-align: top;',upperColumn:'arvStnNm',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dtc',inputType:'text',width:'70',textAlign:'right',style:'vertical-align: top;',dataType:'number',colMerge:'true',upperColumn:'adptDt'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNrmFullEmpty',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'railroadApd',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'volDcRt',inputType:'text',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,##0',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prtcDcRt',inputType:'text',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,##0',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'xclsFare',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onewayFare',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rvFare',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'prvtFare',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'adminfrtcarFare',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'btFare',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'btFareFix',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptStnHndlRate',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptStnReHndlRate',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptStnCmpndCgshfRate',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvStnHndlRate',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvStnReHndlRate',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvStnCmpndCgshfRate',value:'',displayMode:'label',hidden:'true',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'adminfrtcarTotFare',value:'',displayMode:'label',textAlign:'right',hidden:'true',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'grp_totalCnt'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_reg',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_reg_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'요율등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_print',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_print_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]}]}]}]}]}]}]}]})