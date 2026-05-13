/*amd /ui/ds/lo/comntrfmgnt/lo_200_02_01b.xml 61013 af9c90c5afdfc985bad986fb67adfcc015af03d83e814445e94914c9b89a0442 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transtrf',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_transtrf_onbeforerowpositionchange','ev:onrowpositionchange':'scwin.ds_transtrf_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발권역코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transtrfList',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_transtrfList_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRateSeq',name:'운송료순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발권역코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'운송조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRate1',name:'#N/A',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'transRate2',name:'#N/A',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'transRate3',name:'#N/A',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'transRate4',name:'#N/A',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'transRate5',name:'#N/A',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'updateYn',name:'수정권한',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transCondCd',name:'운송조건',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_TmptranstrfList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'transCondCd',name:'운송조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRate1',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRate2',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRate3',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRate4',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRate5',name:'#N/A',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ExceltranstrfList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'transCondCd',name:'운송조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRate1',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRate2',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRate3',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRate4',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRate5',name:'#N/A',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comntrfmgnt.RetrieveTransTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_view_cond","key":"IN_DS1"},{"id":"ds_transtrf","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_transtrf","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comntrfmgnt.SaveTransTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_transtrfList","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDetail',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_transtrfList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_transtrfList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDetail_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/js/ds/dscommon.js',type:'text/javascript',scopeVariable:'dscommon'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//물류/공통(통합)/매출요율/운송/내륙운송요율관리

scwin.onpageload = function () {};
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
//scwin.MSG_LO_WRN_001 = "적용일자를 입력한 후 신규 운송요율을 생성하십시오.";
scwin.MSG_LO_CRM_001 = "변경된 고시요율이 존재합니다. \n저장하지 않은 데이타는 삭제됩니다. \n계속 진행하시겠습니까?";
scwin.MSG_LO_ERR_001 = "신규버튼을 클릭하셔서 출발지와 기점을 생성하십시오.";
scwin.MSG_LO_ERR_002 = "@행, @칼럼의 코드가 일치하지 않습니다.";
scwin.MSG_LO_INF_001 = "기본항구요율을 선택하십시오";
scwin.MSG_LO_INF_002 = "저장되지 않은 데이타가 있습니다. 저장후 별도 항구요율을 등록하시기 바랍니다.";
scwin.pos_rowSts = 0;
scwin.districtCdObj = null;
scwin.districtNmObj = null;
scwin.isUpdate = false;
scwin.isEditChk = false;

//scwin.arvDistrictCdArr = "";
scwin.arvDistrictNm = "";
scwin.gridCurCellId = "";

//-------------------------------------------------------------------------
// scwin.name : f_OnLoad
// scwin.desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.f_OnLoad = function () {
  scwin.f_defaultValue();
  //f_createHeader();

  //$c.gus.cfDisableObjects([btn_save,btn_excel,btn_add, btn_del, btn_cls]);

  $c.gus.cfDisableObjects($p, [btn_save, udc_addRow2]); //엑셀업로드 버튼?
};
scwin.onUdcCompleted = function () {
  scwin.f_OnLoad();
  const codeOptions = [{
    grpCd: "SD101",
    compID: "acb_transCondCd,gr_transtrfList:transCondCd"
  } // 운송조건
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// scwin.name : f_defaultValue
// scwin.desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  $c.gus.cfDisableKey($p);

  // 입력 Object 중 한글입력 항목의 IME Mode를 설정한다.
  //$c.gus.cfSetIMEModeActiveObjects([ed_cnd_dptDistrictNm, ed_arvDistrictNm, ed_dptDistrictNm]);

  ica_cnd_adptDt.focus();
};

//-------------------------------------------------------------------------
// scwin.name : f_Addrow
// scwin.desc : 그리드 칼럼 추가
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  if (ds_transtrf.getRowCount() < 1) {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_001);
    return;
  }
  if (!(await $c.gus.cfValidate($p, [dataField]))) {
    return;
  }
  if (ds_transtrfList.getRowCount() == 0) {
    var row = ds_transtrfList.insertRow();
    ds_transtrfList.setCellData(row, "adptDt", ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "adptDt"));
    ds_transtrfList.setCellData(row, "dptDistrictCd", ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "dptDistrictCd"));
    gr_transtrfList.setFocusedCell(row, "transCondCd", false);
  } else {
    $c.gus.cfCopyRecord($p, gr_transtrfList);
  }
};

//-------------------------------------------------------------------------
// scwin.name : f_Retrieve
// scwin.desc : 조회
//-------------------------------------------------------------------------

scwin.f_Retrieve = async function () {
  //ds_transtrfList.ClearData();
  ds_transtrfList.setJSON([]);
  if (!(await scwin.f_validChk())) {
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    var rowcnt = ds_transtrf.getRowCount();
    tbx_totalRows.setValue(rowcnt);
    if (rowcnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }
    let arrSort = gr_transtrf.getSortableStatus();
    // console.log("=======arrSort.length:"+arrSort.length);
    if (arrSort.length > 0) {
      for (var i = 0; i < arrSort.length; i++) {
        if (arrSort[i].colID == "adptDt" || arrSort[i].colID == "dptDistrictNm") {
          console.log("==============arrSort[" + i + "]" + arrSort[i].colID + ", sortOrder:" + arrSort[i].sortOrder);
          scwin.sortId = arrSort[i].colID;
          scwin.sortOrder = arrSort[i].sortOrder;
        }
      }
    } else {
      var options = {};
      options.sortIndex = "dptDistrictNm adptDt";
      options.sortOrder = "1 -1";
      ds_transtrf.multisort(options);
    }
    scwin.isEditChk = false;
    scwin.isUpdate = false;

    // gr_transtrf.setFocusedCell(0, "adptDt", false);
    // console.log("============scwin.pos_rowSts:"+scwin.pos_rowSts);
    $c.gus.cfGoPrevPosition($p, gr_transtrf, scwin.pos_rowSts);
    $c.gus.cfEnableObjects($p, [btn_edit, btn_new]);
  } catch (e) {
    console.log("sbm_retrieve_submitdone : " + e);
  }
};
scwin.sbm_retrieveDetail_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    var rowcnt = ds_transtrfList.getRowCount();
    tbx_totalRows2.setValue(rowcnt);
    gr_transtrfList.setFocusedCell(0, "transCondCd", false);
    gr_transtrf.setFocusedCell(ds_transtrf.getRowPosition(), scwin.gridCurCellId, false);
    gr_transtrfList.setReadOnly("grid", true);
    $c.gus.cfEnableObjects($p, [btn_new, btn_edit]);
    $c.gus.cfDisableObjects($p, [btn_save, udc_addRow2]);

    //gr_transtrfList.Editable = false;
    //cfEnableObjects([btn_new, btn_Edit]);
    //cfDisableObjects([btn_save,btn_excel, btn_add, btn_del, btn_cls])
  } catch (e) {
    console.log("sbm_retrieveDetail_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// scwin.name : f_validChk
// scwin.desc : 필수 조회 조건 check
//-------------------------------------------------------------------------
scwin.f_validChk = async function () {
  ica_cnd_adptDt.setValue(ica_cnd_adptDt.getValue().trim());

  //if (!$c.gus.cfValidateValue(ica_cnd_adptDt.getValue().trim(), "date=YYYYMMDD") && ica_cnd_adptDt.getValue().trim() != "") {
  if (!$c.date.isDate($p, ica_cnd_adptDt.getValue(), false) && ica_cnd_adptDt.getValue() != "") {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_001);
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// scwin.name : f_New
// scwin.desc : 신규
//-------------------------------------------------------------------------
scwin.rowPosFlg = false;
scwin.f_New = function () {
  scwin.rowPosFlg = true;
  ica_adptDt.setValue(scwin.strCurDate);
  ed_dptDistrictCd.setValue("");
  ed_dptDistrictNm.setValue("");
  /*	
  	if (!$c.gus.cfValidate(dataField)) {
  		return false;
  	}
  */
  // ds_transtrf.setRowPosition(row, true);

  var row = ds_transtrf.insertRow();
  gr_transtrf.setFocusedCell(row, "adptDt", false);
  // console.log("================row:"+row);
  ds_transtrf.setCellData(row, "dptDistrictCd", ed_dptDistrictCd.getValue().trim());
  ds_transtrf.setCellData(row, "dptDistrictNm", ed_dptDistrictNm.getValue().trim());
  ds_transtrf.setCellData(row, "adptDt", ica_adptDt.getValue().trim());
  $c.gus.cfEnableObjects($p, [btn_save, ica_adptDt, udc_dptDistrictCd, udc_addRow2]);
  $c.gus.cfDisableObjects($p, [btn_edit, btn_new]);
  ds_transtrfList.setJSON([]);
  scwin.isEditChk = true;
  //$c.gus.cfEnableObjects([btn_save,btn_excel,ica_adptDt,ed_dptDistrictCd, ed_dptDistrictNm,imgAdptDt,imgdptDistrictCdPop]);
  //ds_transtrfList.ClearData();
};

//-------------------------------------------------------------------------
// scwin.name : f_Edit
// scwin.desc : 수정
//-------------------------------------------------------------------------
scwin.f_Edit = function () {
  //gr_transtrfList.Editable = true;
  //$c.gus.cfEnableObjects([btn_save,btn_excel, btn_add, btn_del, btn_cls]);
  scwin.rowPosFlg = true;
  scwin.isEditChk = true;
  gr_transtrfList.setReadOnly("grid", false);
  $c.gus.cfEnableObjects($p, [btn_save, udc_addRow2]);
  $c.gus.cfDisableObjects($p, [btn_edit, btn_new]);
};

//-------------------------------------------------------------------------
// scwin.name : f_Save
// scwin.desc : 저장
//-------------------------------------------------------------------------

scwin.f_Save = async function () {
  scwin.pos_rowSts = ds_transtrf.getRowPosition();
  if (await scwin.f_ReqFieldChk()) {
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    scwin.rowPosFlg = false;
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    gr_transtrfList.setReadOnly("grid", true);
    scwin.isUpdate = true;
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// scwin.name : f_ReqFieldChk
// scwin.desc : 필수 입력항목 체크
//-------------------------------------------------------------------------
scwin.f_ReqFieldChk = async function () {
  //if (ds_transtrfList.isUpdated == false) {
  if (ds_transtrfList.getModifiedJSON().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["내륙운송요율"]); //변경된 정보가 없습니다.
    return false;
  }

  //var i=1;;

  for (var i = 0; i < ds_transtrfList.getRowCount(); i++) {
    //if(ds_transtrfList.getRowStatus(i) != 2) {
    if (ds_transtrfList.getRowStatus(i) != "D") {
      ds_transtrfList.setCellData(i, "updateYn", 1);
    }
  }
  if (!(await $c.gus.cfValidate($p, [dataField]))) {
    return;
  }
  if (!(await $c.gus.cfValidate($p, gr_transtrfList, null, true))) {
    return false;
  }

  /*
      //중복체크
      let validArry = [
          {id:"transCondCd", name: "운송조건",key:true}
          ,{id:"arvDistrictCd", name: "코드",key:true}
      ];
  
      let gridName = "내륙운송요율";
      if(!await $c.gus.cfValidateGrid(gr_transtrfList, null, null, validArry, gridName)){
          return false;
      }
  */

  return true;
};

//-------------------------------------------------------------------------
// scwin.name : f_openPopUp
// scwin.desc : popup
//-------------------------------------------------------------------------

scwin.f_openPopUp = function (codeObj, nameObj, pSelectId, pColTitle, pCndTitle, pDispCnt, pWidth, pWhere, pWinCloseTF) {
  pParamCd = codeObj.getValue();
  pParamNm = nameObj.getValue();
  var rtnList = new Array();
  var udcObj = null;
  if (codeObj == ed_cnd_dptDistrictCd) {
    udcObj = udc_cnd_dptDistrictCd;
  } else if (codeObj == ed_arvDistrictCd) {
    udcObj = udc_arvDistrictCd;
  } else if (codeObj == ed_dptDistrictCd) {
    udcObj = udc_dptDistrictCd;
  }
  if (udcObj == null) return;

  //rtnList = cfCommonPopUp(pSelectId,					//pSelectID	
  udcObj.setSelectId(pSelectId);
  rtnList = udcObj.cfCommonPopUp(scwin.udc_cnd_dptDistrictCdCallback,
  //pSelectID	
  pParamCd,
  //pCode
  pParamNm,
  //pName
  pWinCloseTF,
  //pWinCloseTF	
  pDispCnt,
  //pDispCnt
  pColTitle,
  //pTitle
  pWidth,
  //pWidth
  null,
  //pHidden	
  pWhere,
  //pWhere
  '440',
  //pW
  '500',
  //pH
  null,
  //pTop
  null,
  //pLeft
  null,
  //pExistTF
  'F',
  //pAllSearchTF
  pCndTitle); //pWtitleSearch

  scwin.districtCdObj = codeObj;
  scwin.districtNmObj = nameObj;

  /*
  cfSetReturnValue(rtnList, codeObj, nameObj);
  	//변경된 항구를 데이타셋에 반영
  if (ds_transtrf.getRowStatus(ds_transtrf.getRowPosition()) == 1 ) {
  	ds_transtrf.setCellData(ds_transtrf.getRowPosition(),"dptDistrictCd",ed_dptDistrictCd.getValue().trim());
  	ds_transtrf.setCellData(ds_transtrf.getRowPosition(),"dptDistrictNm",ed_dptDistrictNm.getValue().trim());
  	
  	for(i = 1; i <= ds_transtrfList.getRowCount(); i++) {
  		ds_transtrfList.setCellData(i,"adptDt",ds_transtrf.getCellData(ds_transtrf.getRowPosition(),"adptDt"));
  		ds_transtrfList.setCellData(i,"dptDistrictCd",ds_transtrf.getCellData(ds_transtrf.getRowPosition(),"dptDistrictCd"));
  	}
  }
     */
};

/*
//-------------------------------------------------------------------------
// scwin.name : f_chgField
// scwin.desc : 적용항구 변경
//-------------------------------------------------------------------------
scwin.f_chgField = function (){
	
	var i;
	
	//변경된 항구를 데이타셋에 반영dscommon
	if (ds_transtrf.getRowStatus(ds_transtrf.getRowPosition()) == 1 ) {
		ds_transtrf.setCellData(ds_transtrf.getRowPosition(),"dptDistrictCd",ed_dptDistrictCd.getValue().trim());
		
		for(i = 1; i <= ds_transtrfList.getRowCount(); i++) {
			ds_transtrfList.setCellData(ds_transtrfList.getRowPosition(),"adptDt",ds_transtrf.getCellData(ds_transtrf.getRowPosition(),"adptDt"));
			ds_transtrfList.setCellData(ds_transtrfList.getRowPosition(),"dptDistrictCd",ds_transtrf.getCellData(ds_transtrf.getRowPosition(),"dptDistrictCd"));
		}
	}
};
*/

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// scwin.name : f_upload
// scwin.desc : Excel등록
//-------------------------------------------------------------------------
scwin.f_upload = async function () {
  try {
    ds_ExceltranstrfList.setJSON([]);
    ds_transtrfList.setJSON([]);
    if (udc_excel2.getUpExt() == "1") {
      let options = {
        "fileName": "gridDataUpload.csv",
        "status": "C",
        "header": 1,
        "type": "1",
        "startRowIndex": 0,
        "footerExist": 0,
        "skipSpace": 1
      };
      await $c.data.uploadGridViewCSV($p, gr_TmptranstrfList, options);
    } else {
      let options = {
        "fileName": "gridDataUpload.xlsx",
        "status": "C",
        "headerExist": 1,
        "useMaxByteLength": ",",
        "type": "1",
        "startRowIndex": 0,
        "footerExist": "0"
      };
      await $c.data.uploadGridViewExcel($p, gr_TmptranstrfList, options);
    }
  } catch (e) {
    console.log("f_Import : " + e);
  }
  /*
  	inputF.getValue("");
  	
  	inputF.Open();
  
  	ds_ExceltranstrfList.DataId="";
  	ds_ExceltranstrfList.DataId="file://" + inputF.getValue();
  	
  	
  	if (inputF.getValue() == "") {
  		return;
  	}
  
  	ds_ExceltranstrfList.ClearData();
  	ds_transtrfList.ClearData();
  
  	ds_ExceltranstrfList.Reset();
  	
  	ds_TmptranstrfList.ImportData(ds_ExceltranstrfList.ExportData(1, ds_ExceltranstrfList.getRowCount(), true));
  	
  	var i=1;
  	for(i=1 ;i <= ds_TmptranstrfList.getRowCount(); i++) {
  		ds_transtrfList.AddRow();        
  		ds_transtrfList.setCellData(ds_transtrfList.getRowPosition(),"adptDt",ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "adptDt"));
  		ds_transtrfList.setCellData(ds_transtrfList.getRowPosition(),"dptDistrictCd",ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "dptDistrictCd"));
  		ds_transtrfList.setCellData(ds_transtrfList.getRowPosition(),"transCondCd",ds_TmptranstrfList.getCellData(i,"transCondCd"));	
  		
  		if (ds_TmptranstrfList.getCellData(i,"arvDistrictCd") != "") {
  			rtnList = cfCommonPopUp('retrieveDistrictList',	
  									ds_TmptranstrfList.getCellData(i,"arvDistrictCd"),	
  									"",	
  									"T",		
  									null,		
  									null,	
  									null,	
  									null,		
  									',,WDE',
  									'440',	
  									'500',	
  									null,		
  									null,
  									null,
  									null,
  									null,
  									"T");
  			
  			if (rtnList == 0 ) {
  				ds_transtrfList.setCellData(i,"arvDistrictCd","");
  				ds_transtrfList.setCellData(i,"arvDistrictNm","");
  				$c.gus.cfAlertMsg(scwin.MSG_LO_ERR_002,new Array(i,"도착지"));
  				ds_transtrfList.ClearData();
  				ds_TmptranstrfList.ClearData();
  				return;
  			} else {
  				$c.gus.cfSetGridReturnValue(rtnList, ds_transtrfList, i, "arvDistrictCd", "arvDistrictNm");
  			}
  		}	
  			
  		//ds_transtrfList.setCellData(ds_transtrfList.getRowPosition(),"arvDistrictCd", ds_TmptranstrfList.getCellData(i,"arvDistrictCd");
  		//ds_transtrfList.setCellData(ds_transtrfList.getRowPosition(),"arvDistrictNm", ds_TmptranstrfList.getCellData(i,"arvDistrictNm");
  		ds_transtrfList.setCellData(ds_transtrfList.getRowPosition(),"transRate1",ds_TmptranstrfList.getCellData(i,"transRate1"));
  		ds_transtrfList.setCellData(ds_transtrfList.getRowPosition(),"transRate2",ds_TmptranstrfList.getCellData(i,"transRate2"));
  		ds_transtrfList.setCellData(ds_transtrfList.getRowPosition(),"transRate3",ds_TmptranstrfList.getCellData(i,"transRate3"));
  		ds_transtrfList.setCellData(ds_transtrfList.getRowPosition(),"transRate4",ds_TmptranstrfList.getCellData(i,"transRate4"));
  		ds_transtrfList.setCellData(ds_transtrfList.getRowPosition(),"transRate5",ds_TmptranstrfList.getCellData(i,"transRate5"));
  		
  	}
  	
      ds_TmptranstrfList.setJSON([]);
  	//ds_TmptranstrfList.ClearData();
  	inputF.setValue(""); //찾아보기 버튼
      */
};

//-------------------------------------------------------------------------
// 엑셀 업로드 진행 후 
//-------------------------------------------------------------------------
scwin.gr_TmptranstrfList_onfilereadend = async function (value) {
  let row = 0;
  if (ds_TmptranstrfList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return false;
  } else {
    //setTimeout(2000);

    var v_transCondCd = "";
    for (let i = 0; i < ds_TmptranstrfList.getRowCount(); i++) {
      row = ds_transtrfList.insertRow();
      ds_transtrfList.setCellData(row, "adptDt", ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "adptDt"));
      ds_transtrfList.setCellData(row, "dptDistrictCd", ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "dptDistrictCd"));

      //console.log('transCondCd ==>' +ds_TmptranstrfList.getCellData(i,"transCondCd"));

      v_transCondCd = ds_TmptranstrfList.getCellData(i, "transCondCd");
      v_transCondCd = $c.gus.cfIsNull($p, v_transCondCd) ? "" : v_transCondCd.split(":")[0].trim();

      //console.log('v_transCondCd==>'+v_transCondCd);

      ds_transtrfList.setCellData(row, "transCondCd", v_transCondCd);
      ds_transtrfList.setCellData(row, "arvDistrictCd", ds_TmptranstrfList.getCellData(i, "arvDistrictCd"));

      /*
      if (ds_TmptranstrfList.getCellData(i,"arvDistrictCd") != "") {
          rtnList = cfCommonPopUp('retrieveDistrictList',	
                                  ds_TmptranstrfList.getCellData(i,"arvDistrictCd"),	
                                  "",	
                                  "T",		
                                  null,		
                                  null,	
                                  null,	
                                  null,		
                                  ',,WDE',
                                  '440',	
                                  '500',	
                                  null,		
                                  null,
                                  null,
                                  null,
                                  null,
                                  "T");
          
          if (rtnList == 0 ) {
              ds_transtrfList.setCellData(i,"arvDistrictCd","");
              ds_transtrfList.setCellData(i,"arvDistrictNm","");
              $c.gus.cfAlertMsg(scwin.MSG_LO_ERR_002,new Array(i,"도착지"));
              ds_transtrfList.ClearData();
              ds_TmptranstrfList.ClearData();
              return;
          } else {
              $c.gus.cfSetGridReturnValue(rtnList, ds_transtrfList, i, "arvDistrictCd", "arvDistrictNm");
          }
      }
      */
      scwin.arvDistrictNm = "";
      udc_comCodeGrid.setSelectId('retrieveDistrictList');
      await udc_comCodeGrid.cfCommonPopUpAsync(scwin.uploadCdCallback, ds_TmptranstrfList.getCellData(i, "arvDistrictCd"), "", "T", null, null, null, null, ',,WDE', '440', '500', null, null, null, null, null, "T");
      if ($c.gus.cfIsNull($p, scwin.arvDistrictNm)) {
        await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_002, new Array(i, "도착지"));
        ds_transtrfList.setJSON([]);
        ds_TmptranstrfList.setJSON([]);
        return;
      }
      ds_transtrfList.setCellData(row, "arvDistrictNm", scwin.arvDistrictNm);
      ds_transtrfList.setCellData(row, "transRate1", ds_TmptranstrfList.getCellData(i, "transRate1"));
      ds_transtrfList.setCellData(row, "transRate2", ds_TmptranstrfList.getCellData(i, "transRate2"));
      ds_transtrfList.setCellData(row, "transRate3", ds_TmptranstrfList.getCellData(i, "transRate3"));
      ds_transtrfList.setCellData(row, "transRate4", ds_TmptranstrfList.getCellData(i, "transRate4"));
      ds_transtrfList.setCellData(row, "transRate5", ds_TmptranstrfList.getCellData(i, "transRate5"));
    }
    tbx_totalRows2.setValue($c.gus.cfInsertComma($p, ds_transtrfList.getRowCount()));
    ds_TmptranstrfList.setJSON([]);
    await $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다.");
    if (ds_transtrfList.getRowCount() > 0) {
      gr_transtrfList.setFocusedCell(0, "transCondCd", false);
    }
  }
};
scwin.uploadCdCallback = function (rtnList) {
  //if (rtnList == 0 ) {
  if (rtnList == 0) {
    //ds_transtrfList.setCellData(i,"arvDistrictCd","");
    //ds_transtrfList.setCellData(i,"arvDistrictNm","");
    //$c.gus.cfAlertMsg(scwin.MSG_LO_ERR_002,new Array(i,"도착지"));
    //ds_transtrfList.ClearData();
    //ds_TmptranstrfList.ClearData();
    //return;
  } else {
    /*
    var obj = {
                 code : rtnList[0]
                ,name : rtnList[1]
             };
    scwin.arvDistrictCdArr.push(obj); 
    */

    scwin.arvDistrictNm = rtnList[1];
    //scwin.arvDistrictCdArr = scwin.arvDistrictCdArr+','+rtnList[0]+'^'+rtnList[1];
    //console.log('callback ~~'+scwin.arvDistrictCdArr);
    //$c.gus.cfSetGridReturnValue(rtnList, ds_transtrfList, i, "arvDistrictCd", "arvDistrictNm");
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_new_onclick = function (e) {
  scwin.f_New();
};
scwin.btn_edit_onclick = function (e) {
  scwin.f_Edit();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.f_chkField = function (chgValue1, chgValue2, disGubun) {
  var chgObj1 = eval(chgValue1);
  var chgObj2 = eval(chgValue2);
  if (chgObj1.getValue().trim() == "") {
    chgObj2.setValue("");
  } else {
    chgObj2.setValue("");
    //scwin.f_openPopUp(disGubun, "T");
    scwin.f_openPopUp(chgValue1, chgValue2, 'retrieveDistrictList', '도착지코드,도착지명', '도착지,도착지코드,도착지명', '2', '150,180', ',,WDE', 'F');
  }
};
scwin.udc_cnd_dptDistrictCd_onblurCodeEvent = function (e) {
  //dscommon.cf_chgField(ed_cnd_dptDistrictCd, ed_cnd_dptDistrictNm,'retrieveDistrictList','기점코드,기점명','기점,기점코드,기점명','2','150,180',',,WDE','cd','T');

  ed_cnd_dptDistrictNm.setValue("");
  scwin.f_openPopUp(ed_cnd_dptDistrictCd, ed_cnd_dptDistrictNm, 'retrieveDistrictList', '기점코드,기점명', '기점,기점코드,기점명', '2', '150,180', ',,WDE', 'T');
};
scwin.udc_cnd_dptDistrictCd_onblurNameEvent = function (e) {
  //dscommon.cf_chgField(ed_cnd_dptDistrictCd, ed_cnd_dptDistrictNm,'retrieveDistrictList','기점코드,기점명','기점,기점코드,기점명','2','150,180',',,WDE','nm','T');

  ed_cnd_dptDistrictCd.setValue("");
  scwin.f_openPopUp(ed_cnd_dptDistrictCd, ed_cnd_dptDistrictNm, 'retrieveDistrictList', '기점코드,기점명', '기점,기점코드,기점명', '2', '150,180', ',,WDE', 'T');
};
scwin.udc_cnd_dptDistrictCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_cnd_dptDistrictCd, ed_cnd_dptDistrictNm, 'retrieveDistrictList', '기점코드,기점명', '기점,기점코드,기점명', '2', '150,180', ',,WDE', 'F');
};
scwin.udc_arvDistrictCd_onblurCodeEvent = function (e) {
  //dscommon.cf_chgField(ed_arvDistrictCd, ed_arvDistrictNm,'retrieveDistrictList','기점코드,기점명','기점,기점코드,기점명','2','150,180',',,WDE','cd','T');
  ed_arvDistrictNm.setValue("");
  scwin.f_openPopUp(ed_arvDistrictCd, ed_arvDistrictNm, 'retrieveDistrictList', '도착지코드,도착지명', '도착지,도착지코드,도착지명', '2', '150,180', ',,WDE', 'T');
};
scwin.udc_arvDistrictCd_onblurNameEvent = function (e) {
  //dscommon.cf_chgField(ed_arvDistrictCd, ed_arvDistrictNm,'retrieveDistrictList','기점코드,기점명','기점,기점코드,기점명','2','150,180',',,WDE','nm','T');
  //scwin.f_chkField(ed_arvDistrictCd,ed_arvDistrictNm,2);

  ed_arvDistrictCd.setValue("");
  scwin.f_openPopUp(ed_arvDistrictCd, ed_arvDistrictNm, 'retrieveDistrictList', '도착지코드,도착지명', '도착지,도착지코드,도착지명', '2', '150,180', ',,WDE', 'T');
};
scwin.udc_arvDistrictCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_arvDistrictCd, ed_arvDistrictNm, 'retrieveDistrictList', '도착지코드,도착지명', '도착지,도착지코드,도착지명', '2', '150,180', ',,WDE', 'F');
};
scwin.udc_dptDistrictCd_onblurCodeEvent = function (e) {
  //dscommon.cf_chgField(ed_dptDistrictCd, ed_dptDistrictNm,'retrieveDistrictList','기점코드,기점명','기점,기점코드,기점명','2','150,180',',,WDE','cd','T');
  //scwin.f_chkField(ed_dptDistrictCd,ed_dptDistrictNm,2);

  ed_dptDistrictNm.setValue("");
  scwin.f_openPopUp(ed_dptDistrictCd, ed_dptDistrictNm, 'retrieveDistrictList', '기점코드,기점명', '기점,기점코드,기점명', '2', '150,180', ',,WDE', 'T');
};
scwin.udc_dptDistrictCd_onblurNameEvent = function (e) {
  //dscommon.cf_chgField(ed_dptDistrictCd, ed_dptDistrictNm,'retrieveDistrictList','기점코드,기점명','기점,기점코드,기점명','2','150,180',',,WDE','nm','T');
  //scwin.f_chkField(ed_dptDistrictCd,ed_dptDistrictNm,2);

  ed_dptDistrictCd.setValue("");
  scwin.f_openPopUp(ed_dptDistrictCd, ed_dptDistrictNm, 'retrieveDistrictList', '기점코드,기점명', '기점,기점코드,기점명', '2', '150,180', ',,WDE', 'T');
};
scwin.udc_dptDistrictCd_onclickEvent = function (e) {
  //scwin.f_openPopUp(ed_dptDistrictCd, ed_dptDistrictNm,'retrieveDistrictList','기점코드,기점명','기점,기점코드,기점명');
  scwin.f_openPopUp(ed_dptDistrictCd, ed_dptDistrictNm, 'retrieveDistrictList', '기점코드,기점명', '기점,기점코드,기점명', '2', '150,180', ',,WDE', 'F');
};
scwin.udc_cnd_dptDistrictCdCallback = function (rtnList) {
  //$c.gus.cfSetReturnValue(rtnList, codeObj, nameObj);
  $c.gus.cfSetReturnValue($p, rtnList, scwin.districtCdObj, scwin.districtNmObj);

  //변경된 항구를 데이타셋에 반영
  //if (ds_transtrf.getRowStatus(ds_transtrf.getRowPosition()) == 1 ) {
  if (ds_transtrf.getRowStatus(ds_transtrf.getRowPosition()) == "C") {
    ds_transtrf.setCellData(ds_transtrf.getRowPosition(), "dptDistrictCd", ed_dptDistrictCd.getValue().trim());
    ds_transtrf.setCellData(ds_transtrf.getRowPosition(), "dptDistrictNm", ed_dptDistrictNm.getValue().trim());
    for (i = 0; i < ds_transtrfList.getRowCount(); i++) {
      ds_transtrfList.setCellData(i, "adptDt", ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "adptDt"));
      ds_transtrfList.setCellData(i, "dptDistrictCd", ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "dptDistrictCd"));
    }
  }
};
scwin.udc_comCodeGridCallback = function (rtnList) {
  var row = ds_transtrfList.getRowPosition();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_transtrfList, row, "arvDistrictCd", "arvDistrictNm");
};
scwin.ds_transtrf_onbeforerowpositionchange = async function (info) {
  var row = info.newRowIndex;
  var oldRow = info.oldRowIndex;
  if ($c.util.isEmpty($p, info.oldRowIndex)) return;

  // console.log('ds_transtrf_onbeforerowpositionchange~:'+scwin.rowPosFlg+", scwin.isUpdate:"+scwin.isUpdate+", length:"+ds_transtrf.getModifiedJSON().length+", new:"+ds_transtrf.getRowStatus(row)+", old:"+ds_transtrf.getRowStatus(oldRow));

  if (ds_transtrf.getModifiedJSON().length > 0 && (ds_transtrf.getRowStatus(oldRow) == "C" || ds_transtrf.getRowStatus(oldRow) == "U") && scwin.rowPosFlg == true) {
    var blChk = await $c.win.confirm($p, scwin.MSG_LO_CRM_001);
    if (blChk == false) {
      ds_transtrf.setRowPosition(row, true); // Boolean:onrowpositionchange() 이벤트를 수행여부(false:수행, true:미수행)
      gr_transtrf.setFocusedCell(oldRow, "adptDt", false);
    } else {
      if (ds_transtrf.getRowStatus(oldRow) == "C") {
        ds_transtrf.removeRow(oldRow);
      } else {
        ds_transtrf.undoRow(oldRow);
      }
      ds_transtrf.setRowPosition(row, false);
    }
  }
  if (ds_transtrfList.getModifiedJSON().length > 0 && (ds_transtrf.getRowStatus(oldRow) == "C" || ds_transtrf.getRowStatus(oldRow) == "U") && scwin.rowPosFlg == true) {
    var blChk = await $c.win.confirm($p, scwin.MSG_LO_CRM_001);
    if (blChk == false) {
      ds_transtrf.setRowPosition(row, true); // Boolean:onrowpositionchange() 이벤트를 수행여부(false:수행, true:미수행)
      gr_transtrf.setFocusedCell(oldRow, "adptDt", false);
    } else {
      if (ds_transtrf.getRowStatus(oldRow) == "C") {
        ds_transtrf.removeRow(oldRow);
      } else {
        ds_transtrf.undoRow(oldRow);
      }
      ds_transtrf.setRowPosition(row, false);
    }
  }
};
scwin.ds_transtrf_onrowpositionchange = function (info) {
  // console.log("scwin.ds_transtrf_onrowpositionchange~~");
  var row = info.newRowIndex;
  var oldRow = info.oldRowIndex;
  scwin.isEditChk = false;
  // console.log("==========1ds_transtrf_onbeforerowpositionchange-row:"+row+", oldRow:"+oldRow+", getRowStatus:"+ds_transtrf.getRowStatus(row));

  //if (row != 0 && ds_transtrf.getRowStatus(row) != 1) {
  if (ds_transtrf.getRowStatus(row) != "C") {
    // console.log("==========2ds_transtrf_onbeforerowpositionchange-row:"+row+", getRowStatus:"+ds_transtrf.getRowStatus(row));
    //gr_transtrfList.Editable = true;

    //gr_transtrfList.setReadOnly("grid",false);
    $c.gus.cfDisableObjects($p, [ica_adptDt, udc_dptDistrictCd, ica_adptDt]);
    ica_adptDt.setValue(ds_transtrf.getCellData(row, "adptDt"));
    ed_dptDistrictCd.setValue(ds_transtrf.getCellData(row, "dptDistrictCd"));
    ed_dptDistrictNm.setValue(ds_transtrf.getCellData(row, "dptDistrictNm"));
    var jsonData = {
      adptDt: ds_transtrf.getCellData(row, "adptDt"),
      dptDistrictCd: ds_transtrf.getCellData(row, "dptDistrictCd")
    };
    var sbm_action = "/ds.lo.comntrfmgnt.RetrieveTransTariffDetailListCMD.do?adptDt=" + ds_transtrf.getCellData(row, "adptDt") + "&dptDistrictCd=" + ds_transtrf.getCellData(row, "dptDistrictCd");
    $c.sbm.setAction($p, sbm_retrieveDetail, sbm_action);
    $c.sbm.execute($p, sbm_retrieveDetail);
  } else {
    // console.log("==========3ds_transtrf_onbeforerowpositionchange-else:"+row+", getRowStatus:"+ds_transtrf.getRowStatus(row));
    //$c.gus.cfEnableObjects([ica_adptDt,ed_dptDistrictCd, ed_dptDistrictNm,imgAdptDt,imgdptDistrictCdPop]);
    $c.gus.cfEnableObjects($p, [ica_adptDt, udc_dptDistrictCd, ica_adptDt]);
    ds_transtrfList.setJSON([]);
  }
};
scwin.ds_transtrfList_onrowpositionchange = function (info) {
  // console.log("scwin.ds_transtrfList_onrowpositionchange~~");
  var row = info.rowIndex;
  $c.gus.cfPrepareHidVal($p, ds_transtrfList, row, ["dptDistrictCd", "dptDistrictNm"]);

  //if (row != 0 && ds_transtrfList.getRowStatus(row) != 0) {
  //gr_transtrfList.Editable = true;
  gr_transtrfList.setReadOnly("grid", false);
  //}

  //if (row != 0 && ds_transtrfList.getRowStatus(row) != 0) {
  //	gr_transtrfList.Editable = true;	
  //}
  if (scwin.isEditChk) {
    gr_transtrfList.setReadOnly("grid", false);
  } else {
    gr_transtrfList.setReadOnly("grid", true);
  }
};
scwin.gr_transtrfList_ontextimageclick = function (rowIndex, columnIndex) {
  var rtnList = new Array();
  var row = rowIndex;

  //rtnList = cfCommonPopUp('retrieveDistrictList',

  udc_comCodeGrid.setSelectId('retrieveDistrictList');
  rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridCallback, ds_transtrfList.getCellData(row, "arvDistrictCd"), ds_transtrfList.getCellData(row, "arvDistrictNm"), 'F',
  //pWinCloseTF	
  '2',
  //pDispCnt
  '도착지코드,도착지명',
  //pTitle
  '150,170',
  //pWidth
  null,
  //pHidden	
  ',,WDE',
  //pWhere
  '440',
  //pW
  '500',
  //pH
  null,
  //pTop
  null,
  //pLeft
  null,
  //pExistTF
  "F",
  //pAllSearchTF
  '도착지,도착지코드,도착지명'); //pWtitleSearch

  //cfSetGridReturnValue(rtnList, ds_transtrfList, row, "arvDistrictCd", "arvDistrictNm");
};
scwin.gr_transtrfList_onviewchange = function (info) {
  // console.log("scwin.gr_transtrfList_onviewchange~~");

  var rtnList = new Array();
  var row = info.rowIndex;
  var colid = info.colId;
  var olddata = info.oldValue;
  switch (colid) {
    case "arvDistrictNm":
      if (olddata == ds_transtrfList.getCellData(row, "arvDistrictNm")) {
        return;
      } else {
        if (ds_transtrfList.getCellData(row, "arvDistrictNm").trim() == "") {
          ds_transtrfList.setCellData(row, "arvDistrictCd", ""); //상위항구코드
          return;
        }
        ds_transtrfList.setCellData(row, "arvDistrictCd", ""); //품목코드
        var rtnList = new Array();
        udc_comCodeGrid.setSelectId('retrieveDistrictList');
        //rtnList = udc_comCodeGrid.cfCommonPopUp('retrieveDistrictList',	
        rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridCallback, ds_transtrfList.getCellData(row, "arvDistrictCd"), ds_transtrfList.getCellData(row, "arvDistrictNm"), 'T',
        //pWinCloseTF	
        '2',
        //pDispCnt
        '출발지코드,출발지명',
        //pTitle
        '150,170',
        //pWidth
        null,
        //pHidden	
        ',,WDE',
        //pWhere
        '440',
        //pW
        '500',
        //pH
        null,
        //pTop
        null,
        //pLeft
        null,
        //pExistTF
        "F",
        //pAllSearchTF
        '출발지,출발지코드,출발지명'); //pWtitleSearch

        //cfSetGridReturnValue(rtnList, ds_transtrfList, row, "arvDistrictCd", "arvDistrictNm");
        ds_transtrfList.setCellData(row, "arvDistrictCd", ""); //품목코드
        ds_transtrfList.setCellData(row, "arvDistrictNm", ""); //품목코드
      }
      break;
    case "arvDistrictCd":
      if (olddata == ds_transtrfList.getCellData(row, "arvDistrictCd")) {
        return;
      } else {
        if (ds_transtrfList.getCellData(row, "arvDistrictCd").trim() == "") {
          ds_transtrfList.setCellData(row, "arvDistrictNm", ""); //상위항구코드
          return;
        }
        ds_transtrfList.setCellData(row, "arvDistrictNm", ""); //품목코드
        var rtnList = new Array();

        //rtnList = udc_comCodeGrid.cfCommonPopUp('retrieveDistrictList',	
        udc_comCodeGrid.setSelectId('retrieveDistrictList');
        rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridCallback, ds_transtrfList.getCellData(row, "arvDistrictCd"), ds_transtrfList.getCellData(row, "arvDistrictNm"), 'T',
        //pWinCloseTF	
        '2',
        //pDispCnt
        '출발지코드,출발지명',
        //pTitle
        '150,170',
        //pWidth
        null,
        //pHidden	
        ',,WDE',
        //pWhere
        '440',
        //pW
        '500',
        //pH
        null,
        //pTop
        null,
        //pLeft
        null,
        //pExistTF
        "F",
        //pAllSearchTF
        '출발지,출발지코드,출발지명'); //pWtitleSearch

        //cfSetGridReturnValue(rtnList, ds_transtrfList, row, "arvDistrictCd", "arvDistrictNm");
        ds_transtrfList.setCellData(row, "arvDistrictCd", ""); //품목코드
        ds_transtrfList.setCellData(row, "arvDistrictNm", ""); //품목코드
      }
      break;
    default:
      break;
  }
};
scwin.ica_adptDt_onviewchange = function (info) {
  // console.log("scwin.ica_adptDt_onviewchange-rowPosFlg:"+scwin.rowPosFlg+", info.newValue:"+info.newValue+", ica_adptDt.hidVal:"+ica_adptDt.hidVal);
  // console.log(info);

  // if( !scwin.rowPosFlg ) {
  //if(ica_adptDt.Modified) {
  //if(info.oldValue != info.newValue) {
  /* if(ica_adptDt.hidVal != info.newValue) {
  //if (ds_transtrf.getRowStatus(ds_transtrf.getRowPosition()) == 1 ) {
  if (ds_transtrf.getRowStatus(ds_transtrf.getRowPosition()) == "C" ) {
  ds_transtrf.setCellData(ds_transtrf.getRowPosition(),"adptDt", ica_adptDt.getValue().trim());
  			for(var i = 0; i < ds_transtrfList.getRowCount(); i++) {
  ds_transtrfList.setCellData(ds_transtrfList.getRowPosition(),"adptDt",ds_transtrf.getCellData(ds_transtrf.getRowPosition(),"adptDt"));
  ds_transtrfList.setCellData(ds_transtrfList.getRowPosition(),"dptDistrictCd",ds_transtrf.getCellData(ds_transtrf.getRowPosition(),"dptDistrictCd"));
  }
  }
  } */
};
scwin.gr_transtrf_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.gridCurCellId = columnId;
};
scwin.gr_transtrf_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  var columnId = gr_transtrf.getColumnID(columnIndex);
  scwin.gridCurCellId = columnId;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_cnd_adptDt',pickerType:'dynamic',style:'',ref:'data:ds_view_cond.adptDt',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기점',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'dptDistrictCd',style:'',id:'udc_cnd_dptDistrictCd',btnId:'btn_cnd_dptDistrictCd',codeId:'ed_cnd_dptDistrictCd',nameId:'ed_cnd_dptDistrictNm',validTitle:'기점',UpperFlagCode:'1',maxlengthCode:'6',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_cnd_dptDistrictCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_cnd_dptDistrictCd_onclickEvent',refDataCollection:'ds_view_cond',code:'dptDistrictCd','ev:onviewchangeNameEvent':'scwin.udc_cnd_dptDistrictCd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착지',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'arvDistrictCd',style:'',btnId:'btn_arvDistrictCd',id:'udc_arvDistrictCd',codeId:'ed_arvDistrictCd',nameId:'ed_arvDistrictNm',validTitle:'도착지',maxlengthCode:'6',maxlengthName:'50',objTypeName:'data',UpperFlagCode:'1',objTypeCode:'data','ev:onblurCodeEvent':'scwin.udc_arvDistrictCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_arvDistrictCd_onclickEvent',refDataCollection:'ds_view_cond',code:'arvDistrictCd','ev:onviewchangeNameEvent':'scwin.udc_arvDistrictCd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송조건',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_transCondCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_view_cond.transCondCd',allOption:'',chooseOption:'true',chooseOptionLabel:'-전체-',objType:'data'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'dataField',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_adptDt',pickerType:'dynamic',style:'',mandatory:'true','ev:onviewchange':'scwin.ica_adptDt_onviewchange',objType:'data',title:'적용일자',ref:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기점',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width: 250px;',id:'udc_dptDistrictCd',codeId:'ed_dptDistrictCd',btnId:'btn_dptDistrictCd',nameId:'ed_dptDistrictNm',objTypeCode:'Data',objTypeName:'Data',maxlengthCode:'6',maxlengthName:'50',mandatoryName:'true',validTitle:'기점','ev:onblurCodeEvent':'scwin.udc_dptDistrictCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_dptDistrictCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_dptDistrictCd_onclickEvent',validExpCode:'기점',mandatoryCode:'true',validExpName:'기점'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox flex_no wfix',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 40%;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'기점',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_transtrf',gridUpYn:'N',grdDownOpts:'{"fileName":"기점.xlsx","sheetName":"기점","type":"2+4+8+16"}',gridDownUserAuth:'X',id:'udc_excel1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_transtrf',id:'gr_transtrf',style:'',visibleRowNum:'14',visibleRowNumFix:'true',readOnly:'true',fixedColumnNoMove:'true',rowStatusVisible:'true',keepDefaultColumnWidth:'true',columnMove:'false','ev:oncellclick':'scwin.gr_transtrf_oncellclick','ev:oncellindexchange':'scwin.gr_transtrf_oncellindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'적용일자',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'기점코드',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'기점',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'dptDistrictCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictNm',inputType:'text',textAlign:'left',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'내륙운송요율',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_transtrfList',gridUpUserAuth:'C',gridUpFn:'scwin.f_upload',grdDownOpts:'{"fileName":"내륙운송요율.xlsx","sheetName":"내륙운송요율","type":"2+4+8+16"}',gridDownUserAuth:'X',btnUser:'N',id:'udc_excel2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_transtrfList',id:'gr_transtrfList',style:'',visibleRowNum:'13',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_transtrfList_ontextimageclick','ev:onviewchange':'scwin.gr_transtrfList_onviewchange',fixedColumnNoMove:'true',keepDefaultColumnWidth:'true',dataName:'내륙운송요율',validFeatures:'ignoreStatus=no',validExp:'transCondCd::yes::key,arvDistrictCd::yes::key,arvDistrictNm::yes,transRate1:20(H):yes:minNumber=1,transRate2:20(L):yes:minNumber=1,transRate3:20(C):yes:minNumber=1,transRate4:40:yes:minNumber=1,                               transRate5:45:yes:minNumber=1',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'운송조건',width:'100',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'도착지',width:'140',colSpan:'2',rowSpan:'',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'20(H)',width:'70',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'20(L)',width:'70',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'20(C)',width:'70',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'40',width:'70',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'45',width:'70',colSpan:'',rowSpan:'2',class:'txt-red'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column29',value:'코드',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'명',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'transCondCd',inputType:'select',style:'',value:'',width:'100',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictCd',inputType:'text',style:'',value:'',width:'60',mandatory:'true',maxLength:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'textImage',style:'',value:'',width:'100',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transRate1',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',min:'1',maxLength:'15',allowChar:'0-9',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transRate2',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',min:'1',maxLength:'15',allowChar:'0-9',excelCellType:'number',checkcomboboxVisibleRowNum:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transRate3',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',min:'1',maxLength:'15',allowChar:'0-9',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transRate4',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',min:'1',maxLength:'15',allowChar:'0-9',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transRate5',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',min:'1',maxLength:'15',allowChar:'0-9',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_transtrfList',btnDelYn:'N',btnCancelYn:'Y',rowAddUserAuth:'C',id:'udc_addRow2',rowAddFunction:'scwin.f_AddRow',rowDelUserAuth:'D'}}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:'display:none'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_TmptranstrfList',id:'gr_TmptranstrfList',style:'',visibleRowNum:'13',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true','ev:onfilereadend':'scwin.gr_TmptranstrfList_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'운송조건',width:'100',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'도착지',width:'140',colSpan:'2',rowSpan:'',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'20(H)',width:'70',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'20(L)',width:'70',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'20(C)',width:'70',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'40',width:'70',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'45',width:'70',colSpan:'',rowSpan:'2',class:'txt-red'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'코드',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'명',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'transCondCd',inputType:'text',style:'',value:'',width:'100',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictCd',inputType:'text',style:'',value:'',width:'70',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transRate1',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',min:'1',maxLength:'10'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transRate2',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',min:'1',maxLength:'10'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transRate3',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',min:'1',maxLength:'10'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transRate4',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',min:'1',maxLength:'10'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transRate5',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',min:'1',maxLength:'10'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_new',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_new_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_edit',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_edit_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})