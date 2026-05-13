/*amd /ui/ds/lo/comntrfmgnt/lo_200_03_01b.xml 26986 e67631d0af9e1a8486731ac6ceceed5953991708d632969b4ba262c9298cb1f4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bondList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strDdCnt',name:'보관일수',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'valmStrRateRt',name:'종가율',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'meraStrRate',name:'종량율',dataType:'text',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_up_bondList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'strDdCnt',name:'보관일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'valmStrRateRt',name:'종가보관료_비율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'meraStrRate',name:'종량보관료',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tmp_bondList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strDdCnt',name:'보관일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'valmStrRateRt',name:'종가보관료_비율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'meraStrRate',name:'종량보관료',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_adptDt',saveRemovedData:'true','ev:ondataload':'scwin.ds_adptDt_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'사용자명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comntrfmgnt.RetrieveBondedCargoStorageChargeListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"},{"id":"ds_bondList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_bondList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comntrfmgnt.SaveBondedCargoStorageChargeListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_bondList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//물류/공통(통합)/매출요율/보관/보세화물 보관요율관리
//-------------------------------------------------------------------------
// scwin.name : 
// scwin.desc : 전역변수 선언
//------------------------------------------------------------------------- 
scwin.MSG_LO_CRM_001 = "변경 사항이 존재합니다. 진행하시겠습니까?!";
scwin.hid_adpt_dt = "";
scwin.updGrdFlag = false;
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환

scwin.onpageload = function () {
  //wfm_smp.getWindow().scwin.cfn_getComboReload("01b"); //ds_adptDt 데이터 로드
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_OnLoad
// scwin.desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.f_OnLoad = function () {
  scwin.f_defaultValue();
};
scwin.onUdcCompleted = function () {
  scwin.f_OnLoad();
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_defaultValue
// scwin.desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  //적용일자 첫번째값 선택 
  //acb_adptDt.index = 0;

  //오늘날짜 세팅
  ica_adptDt.setValue(scwin.strCurDate);

  //버튼초기화 
  //$c.gus.cfDisableObjects([btn_save,btn_add,btn_del,btn_cls,ica_adptDt,imgAdptDt]);
  $c.gus.cfDisableObjects($p, [btn_save, btn_rowAdd, btn_rowDel, btn_cancel, ica_adptDt]);
  $c.gus.cfEnableObjects($p, [btn_edit, btn_new]);
  wfm_smp.getWindow().scwin.cfn_getComboReload("01b"); //ds_adptDt 데이터 로드

  acb_adptDt.focus();
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_Addrow
// scwin.desc : 행추가
//-------------------------------------------------------------------------
scwin.f_addrow = function () {
  if (ds_bondList.getRowCount() == 0) {
    var row = ds_bondList.insertRow();
    ds_bondList.setCellData(row, "adptDt", ica_adptDt.getValue());
    gr_bondList.setFocusedCell(row, "strDdCnt", true);
  } else {
    $c.gus.cfCopyRecord($p, gr_bondList);
    gr_bondList.setFocusedCell(ds_bondList.getRowCount() - 1, "strDdCnt", true);
  }
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_delete
// scwin.desc : 행삭제
//-------------------------------------------------------------------------
scwin.f_delete = function () {
  let pos = ds_bondList.getRowPosition();
  if (pos >= 0) {
    if ("C" == ds_bondList.getRowStatus(pos)) {
      ds_bondList.removeRow(pos);
      gr_bondList.setFocusedCell(pos - 1);
    } else {
      ds_bondList.undoRow(pos);
      ds_bondList.deleteRow(pos);
      gr_bondList.setFocusedCell(pos, 0);
    }
    tbx_totalRows.setValue(ds_bondList.getRowCount());
  }
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_undo
// scwin.desc : 취소
//-------------------------------------------------------------------------
scwin.f_undo = function () {
  $c.data.undoRow($p, ds_bondList);
  gr_bondList.setReadOnly("grid", true);
};
//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_validChk
// scwin.desc : 필수 조회 조건 check
//-------------------------------------------------------------------------
scwin.f_validChk = async function () {
  if (ds_bondList.getModifiedJSON().length > 0) {
    if (!(await $c.win.confirm($p, scwin.MSG_LO_CRM_001))) {
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_Retrieve
// scwin.desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  ds_bondList.setJSON([]);
  $c.sbm.execute($p, sbm_retrieve);
};

/*
//-------------------------------------------------------------------------
// scwin.name : scwin.f_runExcel
// scwin.desc : 엑셀저장
//-------------------------------------------------------------------------
scwin.f_runExcel = function () {
	$c.gus.cfGridToExcel(gr_bondList, "보세화물 보관요율관리", "보세화물 보관요율관리.xls", 2+4+8+16);
};
*/

//-------------------------------------------------------------------------
// scwin.name : scwin.f_upload
// scwin.desc : csv file UpLoad
//-------------------------------------------------------------------------
scwin.f_upload = async function () {
  try {
    ds_tmp_bondList.setJSON([]); //ds_tmp_bondList.removeAll();
    ds_bondList.setJSON([]);

    //ds_up_bondList.setJSON([]);
    /*
    let options = {
        "fileName" : "gridDataUpload.xlsx",
        "status" : "C",
        "headerExist" : 1,
        "useMaxByteLength" : ",",
        "type" : "1" ,
        "startRowIndex": 0,
        "footerExist": "0"
    };
     await $c.data.uploadGridViewExcel(gr_tmp_bondList, options);
    */

    let options = {
      "header": 0,
      // excel파일에서 그리드의 데이터에 header가 있는지 여부(1이면 header 존재 0이면 없음)
      "type": "1",
      // 1이면 엑셀 파일이 그리드의 보이는 결과로 만들어져있을때, 0이면 엑셀 파일이 그리드의 실제 데이터로 구성되어있을때
      "startRowIndex": 1,
      // excel파일에서 그리드의 데이터가 시작되는 행의 번호(헤더 포함)
      "footerExist": 0 // excel파일에서 그리드의 데이터에 footer가 있는지 여부(1이면 footer 존재 0이면 없음 기본값은 1 그리드에 footer가 없으면 적용되지 않음)
    };

    // ds_Tmp_FillUse 로 직접 받음 (ds_Org_FillUse 사용안함)
    await udc_gridMain.uploadGridViewExcel(gr_tmp_bondList, options);
  } catch (e) {
    console.log("f_Import : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀 업로드 진행 후 
//-------------------------------------------------------------------------
scwin.gr_tmp_bondList_onfilereadend = async function (value) {
  let row = 0;
  if (ds_tmp_bondList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return false;
  } else {
    //ASIS f_AddRowUploaded
    //ds_bondList.setJSON([]);

    for (let i = 0; i < ds_tmp_bondList.getRowCount(); i++) {
      row = ds_bondList.insertRow();
      ds_bondList.setCellData(row, "adptDt", ica_adptDt.getValue());
      ds_bondList.setCellData(row, "strDdCnt", ds_tmp_bondList.getCellData(i, "strDdCnt").trim());
      ds_bondList.setCellData(row, "valmStrRateRt", ds_tmp_bondList.getCellData(i, "valmStrRateRt").trim());
      ds_bondList.setCellData(row, "meraStrRate", ds_tmp_bondList.getCellData(i, "meraStrRate").trim());
    }
    $c.gus.cfEnableObjects($p, [btn_save, btn_rowAdd, btn_rowDel, btn_cancel, ica_adptDt]);
    $c.gus.cfDisableObjects($p, [btn_edit, btn_new]);
    gr_bondList.setReadOnly("grid", false);
    scwin.updGrdFlag = true;
    scwin.gr_bondList_onrowindexchange(0);
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_bondList.getRowCount()));
    gr_bondList.setMaxLength("strDdCnt", 4);
    await $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다.");
  }
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_New
// scwin.desc : 신규
//-------------------------------------------------------------------------
scwin.f_New = function () {
  //적용일자 초기화 세팅	
  ica_adptDt.setValue(scwin.strCurDate);
  ds_bondList.setJSON([]); //removeAll 하면 저장시 delete 상태인 데이터까지 같이 날라가서 기존데이터까지 삭제됨.
  scwin.updGrdFlag = true;

  //$c.gus.cfEnableObjects([btn_save,btn_add,btn_del,btn_cls,ica_adptDt, imgAdptDt]);
  $c.gus.cfEnableObjects($p, [btn_save, btn_rowAdd, btn_rowDel, btn_cancel, ica_adptDt]);
  $c.gus.cfDisableObjects($p, [btn_edit, btn_new]);
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_Edit
// scwin.desc : 수정
//-------------------------------------------------------------------------
scwin.f_Edit = function () {
  if (ds_bondList.getRowCount() > 0) {
    //gr_bondList.Editable = true;

    gr_bondList.setReadOnly("grid", false);
    scwin.updGrdFlag = true;
    //gr_bondList.setFocusedCell(0, "strDdCnt", false);
    scwin.gr_bondList_onrowindexchange(0);

    //$c.gus.cfEnableObjects([btn_save,btn_add,btn_del,btn_cls]);

    $c.gus.cfEnableObjects($p, [btn_save, btn_rowAdd, btn_rowDel, btn_cancel]);
    $c.gus.cfDisableObjects($p, [btn_edit, btn_new]);
  } else {
    $c.gus.cfAlertMsg($p, "조회 후 처리하시기 바랍니다.");
  }
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_Save
// scwin.desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (await scwin.f_ReqFieldChk()) {
    if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
      scwin.hid_adpt_dt = ica_adptDt.getValue();
      $c.sbm.execute($p, sbm_save);
    }
  }
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_ReqFieldChk
// scwin.desc : 필수 입력항목 체크
//-------------------------------------------------------------------------
scwin.f_ReqFieldChk = async function () {
  if (ds_bondList.getModifiedJSON().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["보세화물 보관요율"]); //"@은(는) 변경된 사항이 없습니다.";
    return false;
  }

  //적용일자
  if (!(await $c.gus.cfValidate($p, ica_adptDt, null, true))) {
    return false;
  }

  //적용일자 GRID에 세팅
  var edAdptDt = ica_adptDt.getValue().trim();
  for (i = 0; i < ds_bondList.getRowCount(); i++) {
    ds_bondList.setCellData(i, "adptDt", edAdptDt);
  }
  if (!(await $c.gus.cfValidate($p, [gr_bondList], null, true))) {
    return false;
  }

  /*
      var validArry = [
          {id:"strDdCnt", name: "보관일수", mandatory : true, key:true, minNumber:"0"}
          ,{id:"valmStrRateRt", name: "종가율", mandatory : true, minNumber:"0.0001"}
          ,{id:"meraStrRate", name: "보관일수", mandatory : true, minNumbe:"0.01"}
      ];
      let gridName = "보세화물 보관요율목록";
      if(!await $c.gus.cfValidateGrid(gr_bondList, null, null, validArry, gridName)){
          return false;
      }
  */

  return true;
};
scwin.sbm_retrieve_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    gr_bondList.setMaxLength("strDdCnt", 4);
    var rowcnt = ds_bondList.getRowCount();
    tbx_totalRows.setValue(rowcnt);
    if (rowcnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }
    scwin.updGrdFlag = false;
    gr_bondList.setFocusedCell(0, "strDdCnt", false);
    $c.gus.cfEnableObjects($p, [btn_new, btn_edit]);
    $c.gus.cfDisableObjects($p, [btn_save, btn_rowAdd, btn_rowDel, btn_cancel, ica_adptDt]);
    //$c.gus.cfGoPrevPosition(ds_basetrf, scwin.pos_groupCode);

    ica_adptDt.setValue(acb_adptDt.getValue());
  } catch (e) {
    console.log("sbm_retrieve_submitdone : " + e);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다 	

  ds_adptDt.setJSON([]);
  ds_bondList.setJSON([]);
  wfm_smp.getWindow().scwin.cfn_getComboReload("01b"); //ds_adptDt 데이터 로드
};
scwin.sbm_save_submiterror = function (e) {};
scwin.btn_refresh_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_Srch_onclick = async function (e) {
  if (!(await scwin.f_validChk())) {
    return;
  }
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
scwin.gr_bondList_onrowindexchange = function (rowIndex, oldRow) {
  console.log("scwin.gr_bondList_onrowindexchange~~");
  if (scwin.updGrdFlag) {
    //if (ds_bondList.getRowStatus(rowIndex) == 0 ) {
    if (ds_bondList.getRowStatus(rowIndex) == "R") {
      gr_bondList.setReadOnly("cell", rowIndex, "strDdCnt", true);
      gr_bondList.setReadOnly("cell", rowIndex, "valmStrRateRt", false);
      gr_bondList.setReadOnly("cell", rowIndex, "meraStrRate", false);
    } else {
      gr_bondList.setReadOnly("cell", rowIndex, "strDdCnt", false);
      gr_bondList.setReadOnly("cell", rowIndex, "valmStrRateRt", false);
      gr_bondList.setReadOnly("cell", rowIndex, "meraStrRate", false);
    }
  } else {
    gr_bondList.setReadOnly("grid", true);
  }
};
scwin.ds_adptDt_ondataload = function () {
  var adpt_dt = "";
  if (ds_adptDt.getRowCount() == 0) return false;
  if (!scwin.updGrdFlag) return false;

  //console.log("scwin.hid_adpt_dt ==>"+scwin.hid_adpt_dt);
  //console.log(ds_adptDt.getAllJSON());

  for (var i = 0; i < ds_adptDt.getRowCount(); i++) {
    if (!$c.gus.cfIsNull($p, scwin.hid_adpt_dt) && scwin.hid_adpt_dt == ds_adptDt.getCellData(i, "code")) {
      adpt_dt = ds_adptDt.getCellData(i, "code");
      break;
    }
  }
  if ("" == adpt_dt) {
    var obj = ds_adptDt;
    var str = "";
    var colId = "";
    var adpt_dt_index = 0;
    for (var i = 0; i < obj.getRowCount(); i++) {
      for (var j = 0; j < obj.getRowCount(); j++) {
        colId = obj.getColumnID(j);
        if (colId == "code") {
          if (obj.getCellData(i, colId) > scwin.hid_adpt_dt) {
            adpt_dt_index++;
          }
        }
      } //end for
    } //end for

    if (adpt_dt_index == 0) {
      acb_adptDt.setSelectedIndex(0);
    } else {
      acb_adptDt.setSelectedIndex(adpt_dt_index - 1);
    }
  } else {
    acb_adptDt.setValue(scwin.hid_adpt_dt);
  }

  //보세화물 보관요율 조회 
  scwin.f_Retrieve();
};
scwin.gr_bondList_onafteredit = function (row, columnIndex, value) {
  var colId = gr_bondList.getColumnID(columnIndex);
  if (colId == "strDdCnt") {
    if (value != "" && value.indexOf(".") > -1) {
      value = value.substring(0, value.indexOf("."));
      ds_bondList.setCellData(row, colId, value);
    }
  }
  if ($c.gus.cfIsNull($p, value)) {
    ds_bondList.setCellData(row, colId, "0");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_adptDt',search:'start',style:'width: 200px;',submenuSize:'fixed',ref:'data:ds_retrieve.adptDt',allOption:'',chooseOption:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_adptDt'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.btn_refresh_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Srch',style:'',type:'button','ev:onclick':'scwin.btn_Srch_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'적용일자',class:'req'}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_adptDt',class:'',calendarValueType:'yearMonthDate',objType:'data',validExp:'적용일자:yes:date=YYYYMMDD',mandatory:'true'}}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_bondList',grdDownOpts:'{"fileName":"보세화물 보관요율관리.xls","sheetName":"보세화물 보관요율관리","type":"2+4+8+16"}',gridDownUserAuth:'X',gridUpUserAuth:'X',gridUpFn:'scwin.f_upload',id:'udc_gridMain',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_bondList',focusMode:'cell',id:'gr_bondList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true',readOnly:'true','ev:onrowindexchange':'scwin.gr_bondList_onrowindexchange',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_bondList_onafteredit',dataName:'보세화물 보관요율목록',validFeatures:'ignoreStatus=no',validExp:'strDdCnt:보관일수:yes:minNumber=0:key,valmStrRateRt:종가율:yes:minNumber=0.0001,meraStrRate:종량율:yes:minNumber=0.01'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'보관일수',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'종가율',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'종량율',width:'100',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'strDdCnt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',min:'0',mandatory:'true',maxLength:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'valmStrRateRt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'float',displayFormat:'#,##0.###',mandatory:'true',maxLength:'3.3',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'meraStrRate',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'float',displayFormat:'#,##0.##',mandatory:'true',maxLength:'13.2',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnCancelObj:'btn_cancel',btnRowDelObj:'btn_rowDel',btnRowAddObj:'btn_rowAdd',btnDelYn:'N',btnRowDelYn:'Y',gridID:'gr_bondList',id:'udc_addRow',rowDelFunction:'scwin.f_delete',rowAddFunction:'scwin.f_addrow',rowDelUserAuth:'D',rowAddUserAuth:'C',rowAddObjType:'data',rowDelObjType:'data',cancelObjType:'data',cancelFunction:'scwin.f_undo'}}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:'display:none'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_tmp_bondList',focusMode:'row',id:'gr_tmp_bondList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true','ev:onfilereadend':'scwin.gr_tmp_bondList_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column230',inputType:'text',style:'',value:'보관일수',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column238',inputType:'text',style:'',value:'종가율',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column236',inputType:'text',style:'',value:'종량율',width:'100',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'strDdCnt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',min:'0',mandatory:'true',maxLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'valmStrRateRt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0.###',mandatory:'true',maxLength:'7'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'meraStrRate',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0.##',mandatory:'true',maxLength:'19'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_new',style:'',type:'button','ev:onclick':'scwin.btn_new_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'btn_edit',style:'',type:'button','ev:onclick':'scwin.btn_edit_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]},{T:1,N:'w2:wframe',A:{id:'wfm_smp',src:'/ui/ds/lo/comntrfmgnt/comboReload.xml',style:''}}]}]}]})