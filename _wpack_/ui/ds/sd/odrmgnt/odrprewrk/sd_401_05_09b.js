/*amd /ui/ds/sd/odrmgnt/odrprewrk/sd_401_05_09b.xml 24104 c0ed3134cd922e9fad901f8f4f245780b99f8ea846586f1d0811fe6c70b5e804 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobran',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptBondZoneCd',name:'출발보세구역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'viaBondZoneCd',name:'경유보세구역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvBondZoneCd',name:'도착지보세구역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transPrdDtFrom',name:'운송기한일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transPrdDtTo',name:'운송기한일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_BondedTransList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'transPrdDt',name:'운송기한일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarNo',name:'신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarDt',name:'신고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarSeq',name:'신고순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvBondZoneCd',name:'도착지보세구역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvBondZoneNm',name:'도착지보세구역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo2',name:'주문번호2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutCls',name:'반출/반입 구분(1/2)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarHh',name:'배차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nearMoveItem',name:'최근이동사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendBondZoneCd',name:'발송보세구역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendBondZoneNm',name:'발송보세구역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'viaBondZoneCd',name:'경유보세구역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'viaBondZoneNm',name:'경유보세구역명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_condition',action:'/ds.sd.odrmgnt.odrprewrk.RetrieveBondedTransListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_BondedTransList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_BondedTransList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_condition_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("scwin.onpageload");
  scwin.memInfo = $c.data.getMemInfo($p);
  scwin.loUpperLobranCd = $c.gus.cfIsNull($p, scwin.memInfo.loUpperLobranCd) ? "" : scwin.memInfo.loUpperLobranCd;
  scwin.f_default();
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("scwin.onUdcCompleted");
  var dateStr = $c.date.getServerDateTime($p);
  var firstDate = $c.date.addDate($p, dateStr, 7);
  udc_fromToCalendar.setInitDate(dateStr, firstDate);
};

//-------------------------------------------------------------------------
// 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_default = function () {
  //ds_joblevel.DataID = "/ds.co.RetreiveLoBranCMD.do"; 
  scwin.f_srchCMD("/ds.co.RetreiveLoBranCMD.do", "ds_lobran");
  lc_lobran.setNodeSet("data:ds_lobran", "lobranNm", "lobranCd");
  lc_lobran.changeChooseOption("", "전체");
  lc_lobran.focus();
};
scwin.f_srchCMD = function (url, dsName) {
  //submission 동적 생성 
  let sbmOption = {
    id: dsName,
    action: url,
    isProcessMsg: false
  };
  $c.sbm.executeDynamic($p, sbmOption).then(e => {
    console.log("c.sbm.executeDynamic f_srchCMD");
    if (e.responseJSON.resultDataSet[0].Code < 0) return;

    //dataList 동적 생성 
    const dcoptions = {
      baseNode: "list",
      repeatNode: "map",
      saveRemovedData: "true"
    };
    let dsKeys = Object.keys(e.responseJSON.GAUCE[0]);
    let dsId = [],
      dsType = [];
    for (var i = 0; i < dsKeys.length; i++) {
      dsId.push(dsKeys[i]);
      dsType.push("text");
    }
    $c.data.createDataList($p, dsName, dsId, dsType, dcoptions);
    $c.util.getComponent($p, dsName).setJSON(e.responseJSON.GAUCE);
  });
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  console.log("scwin.f_fieldClear");
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.onUdcCompleted();
  ed_transPrdDtFrom.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_qeryList = async function () {
  if (ed_transPrdDtFrom.getValue() > ed_transPrdDtTo.getValue()) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_transPrdDtTo.focus();
    return;
  } else {
    let chkVal = await $c.gus.cfValidate($p, [tbl_search]);
    if (chkVal) $c.sbm.execute($p, sbm_condition);
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      //출발보세구역
      udc_dptBondZoneCd.cfCommonPopUp(scwin.callBackDptZone, pCode, pName, pClose, '5', null, '150,170', null, null, null, null, null, null, null, pAllSearch, "보세구역,보세구역코드,보세구역명");
      break;
    case 2:
      //경유보세구역
      udc_viaBondZoneCd.cfCommonPopUp(scwin.callBackViaZone, pCode, pName, pClose, '5', null, '150,170', null, null, null, null, null, null, null, pAllSearch, "보세구역,보세구역코드,보세구역명");
      break;
    case 3:
      //도착보세구역
      udc_arvBondZoneCd.cfCommonPopUp(scwin.callBackArvZone, pCode, pName, pClose, '5', null, '150,170', null, null, null, null, null, null, null, pAllSearch, "보세구역,보세구역코드,보세구역명");
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
//출발보세구역
scwin.callBackDptZone = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dptBondZoneCd, ed_dptBondZoneNm);
};

//경유보세구역
scwin.callBackViaZone = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_viaBondZoneCd, ed_viaBondZoneNm);
};

//도착보세구역
scwin.callBackArvZone = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_arvBondZoneCd, ed_arvBondZoneNm);
};

//-------------------------------------------------------------------------
// 엑셀 다운 
//-------------------------------------------------------------------------
scwin.f_down = function () {
  debugger;
  let options = {
    "fileName": "보세운송LIST조회.xlsx",
    "sheetName": "보세운송LIST조회",
    "startRowIndex": 3,
    "startColumnIndex": 0,
    "type": "1"
  };
  var vDay = "점소 | " + lc_lobran.getValue() + " | " + "보세구역 |  | " + "보세구역 | " + ed_dptBondZoneNm.getValue() + " | " + "운송기한일자 | " + ed_transPrdDtFrom.getValue() + " ~ " + ed_transPrdDtTo.getValue();
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 14,
    text: options.sheetName,
    textAlign: "center",
    fontSize: 16,
    color: "black",
    backgroundColor: "white",
    drawBorder: false
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 1,
    text: vDay,
    textAlign: "left",
    fontSize: 10,
    color: "black",
    backgroundColor: "white",
    drawBorder: false
  }];
  $c.data.downloadGridViewExcel($p, gr_BondedTransList, options, infoArr);
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_condition_submitdone = function (e) {
  console.log("scwin.sbm_condition_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_BondedTransList.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, "[보세운송LIST조회] " + MSG_CM_ERR_003);
  } else {
    gr_BondedTransList.setFocusedCell(0, 0);
  }
};
/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//출발보세구역 udc 관련 이벤트 
scwin.udc_dptBondZoneCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_dptBondZoneCd.getValue(), ed_dptBondZoneNm.getValue(), 'F', 'F');
};
scwin.udc_dptBondZoneCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dptBondZoneCd, ed_dptBondZoneNm, 1);
};
scwin.udc_dptBondZoneCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_dptBondZoneNm, ed_dptBondZoneCd, 1, false);
};

//경유보세구역 udc 관련 이벤트 
scwin.udc_viaBondZoneCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_viaBondZoneCd.getValue(), ed_viaBondZoneNm.getValue(), 'F', 'F');
};
scwin.udc_viaBondZoneCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_viaBondZoneCd, ed_viaBondZoneNm, 2);
};
scwin.udc_viaBondZoneCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_viaBondZoneNm, ed_viaBondZoneCd, 2, false);
};

//도착보세구역 udc 관련 이벤트 
scwin.udc_arvBondZoneCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_arvBondZoneCd.getValue(), ed_arvBondZoneNm.getValue(), 'F', 'F');
};
scwin.udc_arvBondZoneCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_arvBondZoneCd, ed_arvBondZoneNm, 3);
};
scwin.udc_arvBondZoneCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_arvBondZoneNm, ed_arvBondZoneCd, 3, false);
};

//조회조건 clear 버튼
scwin.btn_fieldClear_onclick = function (e) {
  console.log("scwin.btn_fieldClear_onclick");
  scwin.f_fieldClear();
};

//조회 버튼
scwin.btn_retrieve_onclick = function (e) {
  console.log("scwin.btn_retrieve_onclick");
  scwin.f_qeryList();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_lobran',style:'width: 150px',submenuSize:'fixed',ref:'data:dma_condition.lobran'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발보세구역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupDptBondZoneCd',style:'',codeId:'ed_dptBondZoneCd',btnId:'btn_dptBondZoneCd',id:'udc_dptBondZoneCd',nameId:'ed_dptBondZoneNm',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z',objTypeCode:'data',validExpCode:'보세구역:no',objTypeName:'data',maxlengthName:'50',selectID:'retrieveBondZoneRound',refDataCollection:'dma_condition',code:'dptBondZoneCd','ev:onclickEvent':'scwin.udc_dptBondZoneCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dptBondZoneCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_dptBondZoneCd_onviewchangeNameEvent',maxlengthCode:'8',skipOnBlurNameValueEmpty:'Y'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'경유보세구역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupViaBondZoneCd',style:'',codeId:'ed_viaBondZoneCd',btnId:'btn_viaBondZoneCd',id:'udc_viaBondZoneCd',nameId:'ed_viaBondZoneNm',objTypeCode:'data',objTypeName:'data',validExpCode:'보세구역:no',maxlengthName:'50',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z',selectID:'retrieveBondZoneRound',refDataCollection:'dma_condition',code:'viaBondZoneCd','ev:onclickEvent':'scwin.udc_viaBondZoneCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_viaBondZoneCd_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_viaBondZoneCd_onblurCodeEvent',maxlengthCode:'8',skipOnBlurNameValueEmpty:'Y'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착보세구역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupArvBondZoneCd',style:'',codeId:'ed_arvBondZoneCd',btnId:'btn_arvBondZoneCd',id:'udc_arvBondZoneCd',nameId:'ed_arvBondZoneNm',objTypeCode:'data',objTypeName:'data',validExpCode:'보세구역:no',maxlengthName:'50',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z',selectID:'retrieveBondZoneRound',refDataCollection:'dma_condition',code:'arvBondZoneCd','ev:onclickEvent':'scwin.udc_arvBondZoneCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_arvBondZoneCd_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_arvBondZoneCd_onblurCodeEvent',maxlengthCode:'8',skipOnBlurNameValueEmpty:'Y'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_cntrNo',placeholder:'',style:'',objType:'data',validExp:'컨테이너번호:no',allowChar:'0-9A-Z',maxlength:'11',ref:'data:dma_condition.cntrNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'운송기한일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'dma_condition',refEdDt:'transPrdDtTo',refStDt:'transPrdDtFrom',style:'',edFromId:'ed_transPrdDtFrom',edToId:'ed_transPrdDtTo',validExp:'운송기한일자:yes:date=YYYYMMDD',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'보세운송LIST조회',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridUpYn:'N',templateYn:'N',gridID:'gr_BondedTransList',gridDownUserAuth:'X',gridDownFn:'scwin.f_down'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_BondedTransList',focusMode:'row',id:'gr_BondedTransList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',autoFit:'allColumn',autoFitMinWidth:'1700',resize:'true',dataDragDrop:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'운송기한일'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'120',value:'컨테이너번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'90',value:'MRN'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'MSN',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'HSN',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'신고번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'신고일자',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column25',value:'출발지 보세구역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column33',value:'경유지 보세구역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column31',value:'도착지 보세구역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'270',inputType:'text',style:'',id:'column29',value:'최근이동사항',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'비고',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'transPrdDt',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntrNo',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mrn',inputType:'text',removeBorderStyle:'false',width:'90',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'msn',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hsn',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarNo',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarDt',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'declarSeq',value:'',displayMode:'label',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'sendBondZoneNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'viaBondZoneNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'arvBondZoneNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'270',inputType:'text',style:'',id:'nearMoveItem',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})