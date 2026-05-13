/*amd /ui/ds/op/wrkrslts/railroadwrkrslts/op_305_01_04b.xml 35658 f097e19d53079c8429ad2ab3afadbe4f5980008559e540d308b44133e9361f84 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_lobran'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadAllocationOfCarsResults',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStn',name:'출발역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStn',name:'도착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sizFE',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nrm',name:'SIZE;TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'E/F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgMcht',name:'청구화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'DOOR지;(반입지)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transNm',name:'운송명의',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adminfrtcarYn',name:'화차구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarNo',name:'화차번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransExpireDt',name:'보세운송;만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDtm',name:'마감시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col18',name:'name18',dataType:'text',defaultValue:'1'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkDtFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transNmCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStnCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStnCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptLobranCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvLobranCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adminfrtcarYn',name:'name11',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"dma_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveRailroadAllocationOfCarsResultsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_RailroadAllocationOfCarsResults","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RailroadAllocationOfCarsResults","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
/** ***********************************************************************
 *  화면에서 기본 로딩시 발생하는 함수 START
 ************************************************************************ */
//-------------------------------------------------------------------------
// 화면 로딩시 호출 되는 함수
//------------------------------------------------------------------------- 
scwin.onpageload = function () {
  //공통코드 적용(조건 :운송몀의)
  const codeOptions = [{
    grpCd: "OP147",
    compID: "acb_lc_transNmCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  const param = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    compID: "acb_co_lc_dptLobranCd,acb_co_lc_arvLobranCd"
  }];
  $c.data.setGauceUtil($p, param);
};

//-------------------------------------------------------------------------
// 화면 에 UDC 컴포넌트가 모두 로딩 완료시 호출 되는 함수
//------------------------------------------------------------------------- 
scwin.onUdcCompleted = async function () {
  udc_fromToCalendar.setInitDate(scwin.strCurDate, scwin.strCurDate); //udc달력 형식
};
/** ***********************************************************************
 *  화면에서 기본 로딩시 발생하는 함수 END
 ************************************************************************ */

/** ***********************************************************************
 *  화면에서 호출되는 컴포넌트의 이벤트 관련 함수 정의  START 
 ************************************************************************ */

/** ***********************************************************************
 *  화면에서 호출되는 컴포넌트의 이벤트 관련 함수 정의  END 
 ************************************************************************ */

scwin.sbm_lobran_submitdone = function () {};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_retrieve, [em_wrkDtFrom, em_wrkDtTo]);
  //현재날짜 셋팅
  em_wrkDtFrom.setValue(scwin.strCurDate);
  em_wrkDtTo.setValue(scwin.strCurDate);
};

//조회
scwin.btn_retrieve_onclick = async function (e) {
  //출발예정일 validate 체크
  if (!$c.gus.cfValidate($p, em_wrkDtFrom) || !$c.gus.cfValidate($p, em_wrkDtTo)) {
    return;
  }
  ret = await $c.gus.cfValidate($p, [em_wrkDtFrom, em_wrkDtTo]);
  if (!ret) {
    return false;
  }
  if (!$c.gus.cfIsAfterDate($p, em_wrkDtFrom.getValue(), em_wrkDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    em_wrkDtFrom.focus();
    return;
  }

  //dataMap set
  dma_retrieve.set("wrkDtFrom", em_wrkDtFrom.getValue());
  dma_retrieve.set("wrkDtTo", em_wrkDtTo.getValue());
  dma_retrieve.set("lineCd", em_lineCd.getValue());
  dma_retrieve.set("transNmCd", acb_lc_transNmCd.getValue());
  dma_retrieve.set("odrNo", ed_odrNo.getValue());
  dma_retrieve.set("cntrNo", ed_cntrNo.getValue());
  dma_retrieve.set("dptStnCd", ed_dptStnCd.getValue());
  dma_retrieve.set("arvStnCd", ed_arvStnCd.getValue());
  dma_retrieve.set("dptLobranCd", acb_co_lc_dptLobranCd.getValue());
  dma_retrieve.set("arvLobranCd", acb_co_lc_arvLobranCd.getValue());
  dma_retrieve.set("adminfrtcarYn", acb_lc_adminfrtcarYn.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//조회callback
scwin.sbm_retrieve_submitdone = async function () {
  let nCnt = ds_RailroadAllocationOfCarsResults.getRowCount();
  if (nCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    ds_RailroadAllocationOfCarsResults.removeAll();
    return false;
  } else {
    gr_RailroadAllocationOfCarsResults.setFocusedCell(0, 0);
    total.setValue(nCnt);
  }

  //정렬add
  const col18 = "1";
  const sortJSONList = ds_RailroadAllocationOfCarsResults.getAllJSON().toSorted((a, b) => a["wrkDt"].localeCompare(b["wrkDt"]) || a["dptStn"].localeCompare(b["dptStn"]) || a["arvStn"].localeCompare(b["arvStn"]));
  ds_RailroadAllocationOfCarsResults.setJSON(sortJSONList.map(m => {
    return {
      ...m,
      col18
    };
  }));
  ds_RailroadAllocationOfCarsResults.reform();

  /*
      var options = {
          sortIndex : "wrkDt dptStn arvStn",
          sortOrder : "1 1 1"
      };
      ds_RailroadAllocationOfCarsResults.multisort( options );
  */
};

//-------------------------------------------------------------------------
// LINE UDC 이벤트 호출 되는 함수 START
//------------------------------------------------------------------------- 

scwin.udc_comCode_line_onclickEvent = async function (e) {
  const code = em_lineCd.getValue();
  const name = ed_lineNm.getValue();
  udc_comCode_line.cfCommonPopUp(scwin.udc_comCode_line_callBackFunc, code, name, "T", null, null, null, "3,4,5,6,7,8,9,10");
};
scwin.udc_comCode_line_onblurCodeEvent = function (e) {
  if (em_lineCd.originalValue != em_lineCd.getValue()) {
    const code = em_lineCd.getValue();
    const name = ed_lineNm.getValue();
    ed_lineNm.setValue("");
    if (code != "") {
      udc_comCode_line.cfCommonPopUp(scwin.udc_comCode_line_callBackFunc, code, name, "T", null, null, null, "3,4,5,6,7,8,9,10");
    }
  }
};
scwin.udc_comCode_line_onblurNameEvent = function (e) {
  if (ed_lineNm.originalValue != ed_lineNm.getValue()) {
    const code = em_lineCd.getValue();
    const name = ed_lineNm.getValue();
    em_lineCd.setValue("");
    if (name != "") {
      udc_comCode_line.cfCommonPopUp(scwin.udc_comCode_line_callBackFunc, code, name, "T", null, null, null, "3,4,5,6,7,8,9,10");
    }
  }
};
scwin.udc_comCode_line_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, em_lineCd, ed_lineNm);
};

//-------------------------------------------------------------------------
// LINE UDC 이벤트 호출 되는 함수 END
//------------------------------------------------------------------------- 

//-------------------------------------------------------------------------
// 출발역 UDC 이벤트 호출 되는 함수 START
//------------------------------------------------------------------------- 
scwin.udc_comCode_dptstn_onclickEvent = async function (e) {
  const code = ed_dptStnCd.getValue();
  const name = ed_dptStnNm.getValue();
  udc_comCode_dptstn.cfCommonPopUp(scwin.udc_comCode_dptstn_callBackFunc, code, name, "T", null, null, null, null, null, null, null, null, null, null, null, "역명조회,작업장코드,작업장명");
};
scwin.udc_comCode_dptstn_onblurCodeEvent = function (e) {
  if (ed_dptStnCd.originalValue != ed_dptStnCd.getValue()) {
    const code = ed_dptStnCd.getValue();
    const name = ed_dptStnNm.getValue();
    ed_dptStnNm.setValue("");
    if (code != "") {
      udc_comCode_dptstn.cfCommonPopUp(scwin.udc_comCode_dptstn_callBackFunc, code, name, "T", null, null, null, null, null, null, null, null, null, null, null, "역명조회,작업장코드,작업장명");
    }
  }
};
scwin.udc_comCode_dptstn_onblurNameEvent = function (e) {
  if (ed_dptStnNm.originalValue != ed_dptStnNm.getValue()) {
    const code = ed_dptStnCd.getValue();
    const name = ed_dptStnNm.getValue();
    ed_dptStnCd.setValue("");
    if (name != "") {
      udc_comCode_dptstn.cfCommonPopUp(scwin.udc_comCode_dptstn_callBackFunc, code, name, "T", null, null, null, null, null, null, null, null, null, null, null, "역명조회,작업장코드,작업장명");
    }
  }
};
scwin.udc_comCode_dptstn_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_dptStnCd, ed_dptStnNm);
};

//-------------------------------------------------------------------------
// 출발역 UDC 이벤트 호출 되는 함수 END
//------------------------------------------------------------------------- 

//-------------------------------------------------------------------------
// 도착역 UDC 이벤트 호출 되는 함수 START
//------------------------------------------------------------------------- 
//도착역POP
scwin.udc_comCode_arv_onclickEvent = async function (e) {
  const code = ed_arvStnCd.getValue();
  const name = ed_arvStnNm.getValue();
  udc_comCode_arv.cfCommonPopUp(scwin.udc_comCode_arv_callBackFunc, code, name, "T", null, null, null, null, null, null, null, null, null, null, null, "역명조회,작업장코드,작업장명");
};
scwin.udc_comCode_arv_onblurCodeEvent = function (e) {
  if (ed_arvStnCd.originalValue != ed_arvStnCd.getValue()) {
    const code = ed_arvStnCd.getValue();
    const name = ed_arvStnNm.getValue();
    ed_arvStnNm.setValue("");
    if (code != "") {
      udc_comCode_arv.cfCommonPopUp(scwin.udc_comCode_arv_callBackFunc, code, name, "T", null, null, null, null, null, null, null, null, null, null, null, "역명조회,작업장코드,작업장명");
    }
  }
};
scwin.udc_comCode_arv_onblurNameEvent = function (e) {
  if (ed_arvStnNm.originalValue != ed_arvStnNm.getValue()) {
    const code = ed_arvStnCd.getValue();
    const name = ed_arvStnNm.getValue();
    ed_arvStnCd.setValue("");
    if (name != "") {
      udc_comCode_arv.cfCommonPopUp(scwin.udc_comCode_arv_callBackFunc, code, name, "T", null, null, null, null, null, null, null, null, null, null, null, "역명조회,작업장코드,작업장명");
    }
  }
};
scwin.udc_comCode_arv_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_arvStnCd, ed_arvStnNm);
};

//-------------------------------------------------------------------------
// 도착역 UDC 이벤트 호출 되는 함수 END
//------------------------------------------------------------------------- 

//-----------------------------------------------------------------------------------
// gr_RailroadAllocationOfCarsResults 그리드에서 COLUMN 화차 구분  displayFormat 함수
//-----------------------------------------------------------------------------------
scwin.adminfrtcarYn = function (data) {
  return $c.gus.decode($p, data, "0", "사유", "1", "공사", "2", "저수요", "3", "전용");
};

//-------------------------------------------------------------------------------------------------------
// gr_RailroadAllocationOfCarsResults 그리드에서 subTotal의 작업일자, 출발역, 도착역 관련 값 분리 설정 
//-------------------------------------------------------------------------------------------------------
scwin.f_getValueWrkDt = function (value) {
  return $c.date.formatDate($p, value.split("^").at(0), 'date');
};
scwin.f_getValueDptStn = function (value) {
  return value.split("^").at(1);
};
scwin.f_getValueArvStn = function (value) {
  return value.split("^").at(2);
};
//---------------------------------------------------------------
// gr_RailroadAllocationOfCarsResults 그리드 TO EXCEL 다운로드
//---------------------------------------------------------------

scwin.f_GridToExcel = async function () {
  if (ds_RailroadAllocationOfCarsResults.getRowCount() <= 0) {
    $c.win.alert($p, "내역이 존재하지않습니다.");
    return false;
  }
  let fileName = '철송배차실적현황.xlsx';
  let sheetName = '철송배차실적현황';
  await $c.data.downloadGridViewExcel($p, gr_RailroadAllocationOfCarsResults, {
    fileName,
    sheetName
  });
};

//---------------------------------------------------------------
// 컨테이너 번호 입력시 소문자를 대문자로 변환.
//---------------------------------------------------------------
scwin.ed_cntrNo_onkeyup = function (e) {
  ed_cntrNo.setValue(ed_cntrNo.getValue().toUpperCase());
};
scwin.ed_odrNo_onkeyup = function (e) {
  ed_odrNo.setValue(ed_odrNo.getValue().toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_retrieve',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'em_wrkDtFrom',edToId:'em_wrkDtTo',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_co_lc_dptLobranCd',search:'start',style:'width:230px;',submenuSize:'auto',visibleRowNum:'20',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'전체',searchTarget:'both'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_co_lc_arvLobranCd',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'전체',visibleRowNum:'20',searchTarget:'both'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'em_lineCd',nameId:'ed_lineNm',id:'udc_comCode_line',objTypeCode:'data',maxlengthCode:'5',UpperFlagCode:'1',selectID:'retrieveLineInfoList','ev:onclickEvent':'scwin.udc_comCode_line_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_line_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_comCode_line_onblurNameEvent',allowCharCode:'0-9A-Za-z',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:120px;',maxlength:'13',mandatory:'false',allowChar:'0-9A-Za-z','ev:onkeyup':'scwin.ed_odrNo_onkeyup'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',style:'width:120px;',maxlength:'11',mandatory:'false',allowChar:'0-9A-Za-z','ev:onkeyup':'scwin.ed_cntrNo_onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_dptStnCd',nameId:'ed_dptStnNm',id:'udc_comCode_dptstn',UpperFlagCode:'1',maxlengthCode:'6',objTypeCode:'Key',selectID:'retrieveTrainWorkPlace','ev:onclickEvent':'scwin.udc_comCode_dptstn_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_dptstn_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_comCode_dptstn_onblurNameEvent',allowCharCode:'0-9A-Za-z',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_arvStnCd',nameId:'ed_arvStnNm',id:'udc_comCode_arv',maxlengthCode:'6',UpperFlagCode:'1',objTypeCode:'Key',selectID:'retrieveTrainWorkPlace','ev:onclickEvent':'scwin.udc_comCode_arv_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_arv_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_comCode_arv_onblurNameEvent',allowCharCode:'0-9A-Za-z',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송명의 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_transNmCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',visibleRowNum:'10'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화차구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_adminfrtcarYn',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사유'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'공사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'저수요'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'grd_section',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'철송배차 실적현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section',style:'',gridUpYn:'N',gridID:'gr_RailroadAllocationOfCarsResults',gridDownFn:'scwin.f_GridToExcel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw',dataList:'data:ds_RailroadAllocationOfCarsResults',id:'gr_RailroadAllocationOfCarsResults',style:'',visibleRowNum:'15',visibleRowNumFix:'true',focusMode:'row',focusMove:'true',readOnly:'true','ev:oncolumnindexchange':'scwin.gr_RailroadAllocationOfCarsResults_oncolumnindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',value:'작업일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'출발역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'도착역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column78',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column99',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column57',value:'SIZE<br/>F/E',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column56',value:'LINE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'컨테이너',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column54',value:'SIZE<br/>TYPE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column53',value:'E/F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'봉인번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column50',value:'청구화주',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'DOOR지<br/>(반입지)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',value:'운송명의',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'화차구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'화차번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'보세운송<br/>만기일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',value:'마감시간',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'calendar',width:'100',textAlign:'left',displayFormat:'yyyy/MM/dd',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptStn',inputType:'text',width:'100',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvStn',inputType:'text',width:'100',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subSum',inputType:'expression',width:'70',hidden:'true',expression:'display(\'wrkDt\') + \'^\' + display(\'dptStn\') + \'^\' + display(\'arvStn\')',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totSum',inputType:'expression',width:'70',hidden:'true',expression:'\'99\'',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sizFE',inputType:'text',width:'80',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'nrm',inputType:'text',width:'80',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgMcht',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transNm',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adminfrtcarYn',inputType:'text',width:'100',textAlign:'left',displayFormatter:'scwin.adminfrtcarYn'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'frtcarNo',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bondTransExpireDt',inputType:'calendar',width:'100',textAlign:'left',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeDtm',inputType:'text',width:'100',textAlign:'left'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'subSum',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',textAlign:'left',expression:'targetColValue()',displayFormatter:'scwin.f_getValueWrkDt'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column76',value:'',displayMode:'label',textAlign:'left',expression:'targetColValue()',displayFormatter:'scwin.f_getValueDptStn'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column75',value:'',displayMode:'label',textAlign:'left',expression:'targetColValue()',displayFormatter:'scwin.f_getValueArvStn'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',expression:'\'총\'+ COUNT(\'cntrNo\') +\'건\''}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',expression:'\'20E : \' + Number(sumif(\'col18\',\'==20E\',\'sizFE\')) + \'건\''}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column68',value:'',displayMode:'label',expression:'\'20F : \' + Number(sumif(\'col18\',\'==20F\',\'sizFE\')) + \'건\''}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column67',value:'',displayMode:'label',expression:'\'40E : \' + Number(sumif(\'col18\',\'==40E\',\'sizFE\')) + \'건\''}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column66',value:'',displayMode:'label',expression:'\'40F : \' + Number(sumif(\'col18\',\'==40F\',\'sizFE\')) + \'건\''}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column65',value:'',displayMode:'label',expression:'\'45E : \' + Number(sumif(\'col18\',\'==45E\',\'sizFE\')) + \'건\''}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column64',value:'',displayMode:'label',expression:'\'45F : \' + Number(sumif(\'col18\',\'==45F\',\'sizFE\')) + \'건\''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'totSum',style:'',id:'subTotal2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',textAlign:'left',expression:'\'합계\''}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column76',value:'',displayMode:'label',textAlign:'left',expression:'\'합계\''}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column75',value:'',displayMode:'label',textAlign:'left',expression:'\'합계\''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column91',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',expression:'\'총\'+ COUNT(\'cntrNo\') +\'건\''}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',expression:'\'20E : \' + Number(sumif(\'col18\',\'==20E\',\'sizFE\')) + \'건\''}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column68',value:'',displayMode:'label',expression:'\'20F : \' + Number(sumif(\'col18\',\'==20F\',\'sizFE\')) + \'건\''}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column67',value:'',displayMode:'label',expression:'\'40E : \' + Number(sumif(\'col18\',\'==40E\',\'sizFE\')) + \'건\''}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column66',value:'',displayMode:'label',expression:'\'40F : \' + Number(sumif(\'col18\',\'==40F\',\'sizFE\')) + \'건\''}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column65',value:'',displayMode:'label',expression:'\'45E : \' + Number(sumif(\'col18\',\'==45E\',\'sizFE\')) + \'건\''}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column64',value:'',displayMode:'label',expression:'\'45F : \' + Number(sumif(\'col18\',\'==45F\',\'sizFE\')) + \'건\''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})