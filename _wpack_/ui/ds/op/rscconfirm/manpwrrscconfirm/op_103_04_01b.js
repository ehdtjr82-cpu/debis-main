/*amd /ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_04_01b.xml 49423 8755127eb869114603b0b260ecdf78a050e395478a1d3b8e8fadce7cad5f4c63 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attendBaseTm',name:'출근;기준시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkoutBaseTm',name:'퇴근;기준시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'baseWorkTm',name:'기준;근로시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'contiWkBaseTm',name:'연장근로;기준시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdBaseTm',name:'최소연장;보장시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'earlyBaseTm',name:'기준시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'earlyUseTm',name:'적용시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lunchBaseTm',name:'기준시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lunchTm',name:'적용시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lunchBaseStm',name:'출근시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lunchBaseEtm',name:'퇴근시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dinnerBaseTm',name:'기준시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dinnerTm',name:'적용시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dinnerBaseStm',name:'출근시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dinnerBaseEtm',name:'퇴근시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nightBaseStm',name:'시작기준시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nightBaseEtm',name:'종료적용시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nightBaseRstm',name:'재시작기준시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nightBaseRetm',name:'재종료기준시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bAllnhtBaseTm',name:'전일기준시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allnhtBaseTm',name:'당일기준시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allnhtTm',name:'기준적용시간',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'occpgrdCd',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.RetrieveAttendanceStandardCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.SaveAttendanceStandardCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("scwin.onpageload");
  scwin.gRow = "";
  scwin.sCmd = ""; //C:신규  U:수정  R:조회
  scwin.memInfo = $c.data.getMemInfo($p);
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Modify, btn_Save, btn_Cancel]);
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("scwin.onUdcCompleted");
  ed_sch_lodeptCd.setValue(scwin.memInfo.loUpperLobranCd);
  ed_sch_lodeptNm.setValue(scwin.memInfo.loUpperLobranNm);
  $c.gus.cfDisableObjects($p, [ed_lodeptCd, ed_lodeptNm, btn_lodeptCd, ed_occpgrdCd, ed_occpgrdNm, btn_occpgrdCd]);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
  ed_sch_lodeptCd.setValue(scwin.memInfo.loUpperLobranCd);
  ed_sch_lodeptNm.setValue(scwin.memInfo.loUpperLobranNm);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  if (ed_sch_lodeptCd.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["사업부서"]);
    return;
  }
  $c.gus.cfDisableKeyData($p);

  //버튼제어
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Save, btn_Cancel]);
  $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
  $c.gus.cfDisableObjects($p, [ed_lodeptCd, ed_lodeptNm, btn_lodeptCd, ed_occpgrdCd, ed_occpgrdNm, btn_occpgrdCd]);
  scwin.sCmd = "R";
  scwin.gRow = "0";
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 공통 팝업 호출
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
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      //조회조건의 부서
      udc_sch_lodeptCd.cfCommonPopUp(scwin.callBackDeptCdSrch, pCode, pName, pClose, null, null, null, null, null, null, null, null, null); // 부서
      break;
    case 2:
      //직급
      udc_sch_occpgrdCd.cfCommonPopUp(scwin.callBackOccpgrdSrch, pCode, pName, pClose, null, null, null, null, null, null, null, null, null); //직급
      break;
    case 3:
      //Detail의 부서
      udc_lodeptCd.cfCommonPopUp(scwin.callBackDeptCd, pCode, pName, pClose, null, null, null, null, null, null, null, null, null); // 부서
      break;
    case 4:
      //Detail의 직급
      udc_occpgrdCd.cfCommonPopUp(scwin.callBackOccpgrd, pCode, pName, pClose, null, null, null, null, null, null, null, null, null); //직급
      break;
    default:
      return;
  }
};
scwin.callBackDeptCdSrch = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_sch_lodeptCd, ed_sch_lodeptNm);
};
scwin.callBackOccpgrdSrch = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_sch_occpgrdCd, ed_sch_occpgrdNm);
};
scwin.callBackDeptCd = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lodeptCd, ed_lodeptNm);
};
scwin.callBackOccpgrd = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_occpgrdCd, ed_occpgrdNm);
};

//-------------------------------------------------------------------------
// 엑셀다운로드
//-------------------------------------------------------------------------
scwin.f_down = async function () {
  if (ds_master.getTotalRow() != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      let options = {
        fileName: "기능직근태기준정보.xlsx",
        sheetName: "기능직근태기준정보",
        type: "2+8+16"
      };
      $c.data.downloadGridViewExcel($p, gr_master, options);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  console.log("scwin.f_Create");
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Save, btn_Cancel]);
  $c.gus.cfEnableObjects($p, [ed_lodeptCd, ed_lodeptNm, btn_lodeptCd, ed_occpgrdCd, ed_occpgrdNm, btn_occpgrdCd]);
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Modify]);
  let insRow = ds_master.insertRow();
  ds_master.setRowJSON(insRow, {
    "baseWorkTm": "0",
    "contiWkBaseTm": "0",
    "extdBaseTm": "0",
    "earlyUseTm": "0",
    "lunchTm": "0",
    "dinnerTm": "0",
    "allnhtTm": "0"
  }, true);
  scwin.gr_master_oncellclick(insRow, 0);
  scwin.sCmd = "C";
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  console.log("scwin.f_Update");
  // disable 처리
  if (ds_master.getTotalRow() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
    return;
  }
  $c.gus.cfDisableKey($p);
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Save, btn_Cancel]);
  $c.gus.cfDisableObjects($p, [ed_lodeptCd, ed_lodeptNm, btn_lodeptCd, ed_occpgrdCd, ed_occpgrdNm, btn_occpgrdCd]);
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Modify]);
  scwin.sCmd = "U";
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  console.log("scwin.f_Save");
  //변경한 데이터가 있는지 체크한다. 
  if ($c.data.isModified($p, ds_master) == false) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["기능직근태기준정보"]);
    return;
  }
  if (ed_lodeptCd.getValue() == "" || ed_lodeptNm.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["사업부서"]);
    ed_lodeptCd.focus();
    return;
  }
  if (ed_occpgrdCd.getValue() == "" || ed_occpgrdNm.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["직급"]);
    ed_occpgrdCd.focus();
    return;
  }
  let rtn = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (rtn) {
    const param = {
      "IN_DS1": ds_master.getModifiedJSON()
    };
    $c.sbm.execute($p, sbm_save, param);
  } else {
    scwin.f_Cancel();
    return;
  }
  scwin.gRow = ds_master.getRowPosition();
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  console.log("scwin.f_Cancel");
  for (var idx = 0; idx < gr_master.getTotalRow(); idx++) {
    let sts = ds_master.getRowStatus(idx);
    if (sts == "C" || sts == "V") {
      ds_master.removeRow(idx);
    } else if (sts == "U") {
      ds_master.undoRow(idx);
    }
  }
  //ds_master.undoAll();
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Save, btn_Cancel]);
  $c.gus.cfDisableObjects($p, [ed_lodeptCd, ed_lodeptNm, btn_lodeptCd, ed_occpgrdCd, ed_occpgrdNm, btn_occpgrdCd]);
  $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
  }
  var rowCnt = ds_master.getTotalRow();
  txt_totalRow.setValue(rowCnt);
  scwin.gRow == 0 ? scwin.gr_master_oncellclick(0, 0) : $c.gus.cfGoPrevPosition($p, ds_master, scwin.gRow);
};

//저장
scwin.sbm_save_submitdone = function (e) {
  console.log("scwin.sbm_save_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001, [""]);
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Save, btn_Cancel]);
  $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
  scwin.f_Retrieve();
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//사업부서 찾기 버튼
scwin.udc_sch_lodeptCd_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(1, ed_sch_lodeptCd.getValue(), ed_sch_lodeptNm.getValue(), 'F', 'F');
};
scwin.udc_sch_lodeptCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_sch_lodeptCd, ed_sch_lodeptNm, 1);
};
scwin.udc_sch_lodeptCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_sch_lodeptNm, ed_sch_lodeptCd, 1, false);
};

//직급 찾기 버튼
scwin.udc_sch_occpgrdCd_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(2, ed_sch_occpgrdCd.getValue(), ed_sch_occpgrdNm.getValue(), 'F', 'F');
};
scwin.udc_sch_occpgrdCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_sch_occpgrdCd, ed_sch_occpgrdNm, 2);
};
scwin.udc_sch_occpgrdCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_sch_occpgrdNm, ed_sch_occpgrdCd, 2, false);
};

//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  console.log("scwin.btn_refresh_onclick");
  scwin.f_FieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  console.log("scwin.btn_search_onclick");
  scwin.f_Retrieve();
};

//그리드 클릭
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  gr_master.setFocusedCell(rowIndex, columnIndex);
};

//그리드 사업부서 찾기 버튼 
scwin.udc_lodeptCd_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(3, ed_lodeptCd.getValue(), ed_lodeptNm.getValue(), 'F', 'F');
};
scwin.udc_lodeptCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lodeptCd, ed_lodeptNm, 3);
};
scwin.udc_lodeptCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lodeptNm, ed_lodeptCd, 3, false);
};

//그리드 직급 찾기 버튼
scwin.udc_occpgrdCd_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(4, ed_occpgrdCd.getValue(), ed_occpgrdNm.getValue(), 'F', 'F');
};
scwin.udc_occpgrdCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_occpgrdCd, ed_occpgrdNm, 4);
};
scwin.udc_occpgrdCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_occpgrdNm, ed_occpgrdCd, 4, false);
};

//신규 버튼
scwin.btn_Create_onclick = function (e) {
  console.log("scwin.btn_Create_onclick");
  scwin.f_Create();
};

//수정 버튼
scwin.btn_Modify_onclick = function (e) {
  console.log("scwin.btn_Modify_onclick");
  scwin.f_Update();
};

//취소 버튼
scwin.btn_Cancel_onclick = function (e) {
  console.log("scwin.btn_Cancel_onclick");
  scwin.f_Cancel();
};

//저장 버튼
scwin.btn_Save_onclick = function (e) {
  console.log("scwin.btn_Save_onclick");
  scwin.f_Save();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupSchLodeptCd',selectID:'retrieveOpDeptCdInfo',codeId:'ed_sch_lodeptCd',popupTitle:'부서조회, 부서코드, 부서명',nameId:'ed_sch_lodeptNm',style:'',id:'udc_sch_lodeptCd',maxlengthCode:'4',UpperFlagCode:'1',readOnlyCode:'false',readOnlyName:'false',btnId:'btn_sch_lodeptCd',allowCharCode:'a-zA-Z0-9',validExpCode:'사업부서:yes','ev:onclickEvent':'scwin.udc_sch_lodeptCd_onclickEvent',refDataCollection:'dma_retrieve',code:'lobranCd',popupGridHeadTitle:'부서코드, 부서명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10','ev:onblurCodeEvent':'scwin.udc_sch_lodeptCd_onblurCodeEvent',mandatoryCode:'true','ev:onviewchangeNameEvent':'scwin.udc_sch_lodeptCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직급',style:''}},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'popupSchOccpgrdCd',selectID:'retrieveOccpgrd',codeId:'ed_sch_occpgrdCd',popupTitle:'직급코드조회, 직급코드, 직급명',nameId:'ed_sch_occpgrdNm',style:'',id:'udc_sch_occpgrdCd',mandatoryCode:'true',UpperFlagCode:'1',maxlengthCode:'4',readOnlyCode:'false',readOnlyName:'false',btnId:'btn_sch_occpgrdCd',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_sch_occpgrdCd_onclickEvent',popupGridHeadTitle:'직급코드, 직급명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',refDataCollection:'dma_retrieve',code:'occpgrdCd','ev:onblurCodeEvent':'scwin.udc_sch_occpgrdCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_sch_occpgrdCd_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',templateYn:'N',id:'grd_topGrd',gridID:'gr_master',gridDownFn:'scwin.f_down'}}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',rowStatusVisible:'true','ev:oncellclick':'scwin.gr_master_oncellclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'240',inputType:'text',style:'',id:'column40',value:'사업부서',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',style:'',id:'column46',value:'직급',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column2',inputType:'text',removeBorderStyle:'false',width:'120',value:'출근기준시간',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',removeBorderStyle:'false',width:'120',value:'퇴근기준시간',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'column52',value:'기준근로시간',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column8',inputType:'text',removeBorderStyle:'false',width:'140',value:'연장근로기준시간',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'140',value:'최소연장보장시간',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'200',value:'조기출근',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'400',value:'중식기준',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column16',inputType:'text',removeBorderStyle:'false',width:'370',value:'석식기준',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'330',inputType:'text',style:'',id:'column37',value:'야간근로기준',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column71',value:'철야연근기준',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'column49',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'column50',value:'명',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'column51',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'기준시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'적용시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'기준시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'적용시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'출근시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column22',value:'퇴근시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'기준시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column20',value:'적용시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'출근시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'퇴근시간',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'column55',value:'시작기준시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column63',value:'종료적용시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column60',value:'재시작기준시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column57',value:'재종료기준시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column72',value:'전일기준시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column66',value:'당일기준시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column69',value:'기준적용시간',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'lobranCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'lobranNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'occpgrdCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'occpgrdNm',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'attendBaseTm',inputType:'text',removeBorderStyle:'false',width:'130',displayFormat:'##:##',excelCellType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'chkoutBaseTm',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'##:##',excelCellType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'baseWorkTm',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'##:##',excelCellType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'contiWkBaseTm',inputType:'text',removeBorderStyle:'false',width:'170',displayFormat:'##:##',excelCellType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'extdBaseTm',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'##:##',excelCellType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'earlyBaseTm',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'earlyUseTm',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'##:##',excelCellType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'lunchBaseTm',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'lunchTm',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'##:##',excelCellType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'lunchBaseStm',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'lunchBaseEtm',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'dinnerBaseTm',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'dinnerTm',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'##:##',excelCellType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'dinnerBaseStm',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dinnerBaseEtm',value:'',displayMode:'label',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'nightBaseStm',value:'',displayMode:'label',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'nightBaseEtm',value:'',displayMode:'label',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'nightBaseRstm',value:'',displayMode:'label',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'nightBaseRetm',value:'',displayMode:'label',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bAllnhtBaseTm',value:'',displayMode:'label',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'allnhtBaseTm',value:'',displayMode:'label',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'allnhtTm',value:'',displayMode:'label',displayFormat:'##:##',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'txt_totalRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'근태기준정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',btnId:'btn_lodeptCd',class:'col5',code:'lobranCd',codeId:'ed_lodeptCd','ev:onclickEvent':'scwin.udc_lodeptCd_onclickEvent',id:'udc_lodeptCd',mandatoryName:'true',maxlengthCode:'4',name:'lobranNm',nameId:'ed_lodeptNm',objTypeCode:'data',objTypeName:'data',popupGridHeadTitle:'부서코드, 부서명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupID:'popupLodeptCd',popupTitle:'부서조회, 부서코드, 부서명',readOnlyCode:'false',readOnlyName:'false',refDataCollection:'ds_master',selectID:'retrieveOpDeptCdInfo',style:'width:250px;','ev:onblurCodeEvent':'scwin.udc_lodeptCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_lodeptCd_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'직급',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',btnId:'btn_occpgrdCd',class:'col5',code:'occpgrdCd',codeId:'ed_occpgrdCd','ev:onclickEvent':'scwin.udc_occpgrdCd_onclickEvent',id:'udc_occpgrdCd',mandatoryCode:'true',mandatoryName:'true',maxlengthCode:'2',name:'occpgrdNm',nameId:'ed_occpgrdNm',objTypeCode:'data',objTypeName:'key',popupGridHeadTitle:'직급코드, 직급명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupID:'popupOccpgrdCd',popupTitle:'직급코드조회, 직급코드, 직급명',readOnlyCode:'false',readOnlyName:'false',refDataCollection:'ds_master',selectID:'retrieveOccpgrd',style:'width:250px;','ev:onblurCodeEvent':'scwin.udc_occpgrdCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_occpgrdCd_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출근기준시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'퇴근기준시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준근로시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_attendBaseTm',placeholder:'      :       ',style:'',mandatory:'true',objType:'data',maxlength:'4',ref:'data:ds_master.attendBaseTm',displayFormat:'##:##'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_chkoutBaseTm',placeholder:'      :       ',style:'',objType:'data',maxlength:'4',mandatory:'true',displayFormat:'##:##',ref:'data:ds_master.chkoutBaseTm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_baseWorkTm',placeholder:'',style:'',objType:'data',mandatory:'true',maxlength:'13',displayFormat:'#,##0',ref:'data:ds_master.baseWorkTm',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조기출근기준시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조기출근적용시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'연장근로기준시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'최소연장보장시간',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_earlyBaseTm',placeholder:'      :       ',style:'',mandatory:'true',maxlength:'4',objType:'data',displayFormat:'##:##',ref:'data:ds_master.earlyBaseTm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_earlyUseTm',placeholder:'',style:'',maxlength:'13',objType:'data',displayFormat:'##:##',ref:'data:ds_master.earlyUseTm',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_contiWkBaseTm',placeholder:'',style:'',objType:'data',mandatory:'true',maxlength:'13',displayFormat:'#,##0',ref:'data:ds_master.contiWkBaseTm',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_extdBaseTm',placeholder:'',style:'',objType:'data',mandatory:'true',maxlength:'13',displayFormat:'#,##0',ref:'data:ds_master.extdBaseTm',dataType:'number'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'중식기준',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출근시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'퇴근시간',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_lunchBaseTm',placeholder:'      :       ',style:'',objType:'data',maxlength:'4',mandatory:'true',displayFormat:'##:##',ref:'data:ds_master.lunchBaseTm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_lunchTm',placeholder:'',style:'',mandatory:'true',maxlength:'13',objType:'data',displayFormat:'##:##',ref:'data:ds_master.lunchTm',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_lunchBaseStm',placeholder:'      :       ',style:'',maxlength:'4',mandatory:'true',objType:'data',displayFormat:'##:##',ref:'data:ds_master.lunchBaseStm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_lunchBaseEtm',placeholder:'      :       ',style:'',objType:'data',mandatory:'true',maxlength:'4',displayFormat:'##:##',ref:'data:ds_master.lunchBaseEtm'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'석식기준',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출근시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'퇴근시간',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_dinnerBaseTm',placeholder:'      :       ',style:'',objType:'data',mandatory:'true',maxlength:'4',displayFormat:'##:##',ref:'data:ds_master.dinnerBaseTm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_dinnerTm',placeholder:'',style:'',objType:'data',maxlength:'4',mandatory:'true',displayFormat:'#,##0',ref:'data:ds_master.dinnerTm',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_dinnerBaseStm',placeholder:'      :       ',style:'',maxlength:'4',mandatory:'true',objType:'data',displayFormat:'##:##',ref:'data:ds_master.dinnerBaseStm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_dinnerBaseEtm',placeholder:'      :       ',style:'',objType:'data',mandatory:'true',maxlength:'4',displayFormat:'##:##',ref:'data:ds_master.dinnerBaseEtm'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'야간근로기준',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'시작기준시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'종료적용시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'재시작기준시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'재종료기준시간',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_nightBaseStm',placeholder:'      :       ',style:'',objType:'data',maxlength:'4',mandatory:'true',displayFormat:'##:##',ref:'data:ds_master.nightBaseStm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_nightBaseEtm',placeholder:'      :       ',style:'',maxlength:'4',mandatory:'true',objType:'data',displayFormat:'#,##0',ref:'data:ds_master.nightBaseEtm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_nightBaseRstm',placeholder:'      :       ',style:'',displayFormat:'##:##',maxlength:'4',mandatory:'true',objType:'data',ref:'data:ds_master.nightBaseRstm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_nightBaseRetm',placeholder:'      :       ',style:'',objType:'data',maxlength:'4',mandatory:'true',displayFormat:'##:##',ref:'data:ds_master.nightBaseRetm'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'철야연근기준',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전일기준시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'당일기준시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기준적용시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_bAllnhtBaseTm',placeholder:'      :       ',style:'',mandatory:'true',maxlength:'4',displayFormat:'##:##',objType:'data',ref:'data:ds_master.bAllnhtBaseTm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_allnhtBaseTm',placeholder:'      :       ',style:'',objType:'data',maxlength:'4',mandatory:'true',displayFormat:'##:##',ref:'data:ds_master.allnhtBaseTm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control tac',id:'ed_allnhtTm',placeholder:'',style:'',objType:'data',maxlength:'13',ref:'data:ds_master.allnhtTm',displayFormat:'#,##0',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',type:'button',style:'',objType:'ctrlBtn','ev:onclick':'scwin.btn_Create_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Modify',type:'button',style:'',objType:'ctrlBtn','ev:onclick':'scwin.btn_Modify_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',type:'button',style:'',objType:'ctrlBtn','ev:onclick':'scwin.btn_Cancel_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',type:'button',style:'',ctrlBtn:'ctrlBtn','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})