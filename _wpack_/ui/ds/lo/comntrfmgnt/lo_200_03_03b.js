/*amd /ui/ds/lo/comntrfmgnt/lo_200_03_03b.xml 36232 3eb529c9fb754d95dc4cdeb40578f86c6f89fdc96d93f8adaf4f56e070069b84 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieveDetail'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_basetrf',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_basetrf_onbeforerowpositionchange','ev:onrowpositionchange':'scwin.ds_basetrf_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_basetrfList',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_basetrfList_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'comnTrfSeq',name:'공통요율순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidCommNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'famtFratClsCd',name:'정액정률구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'comnTrf',name:'적용금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comntrfmgnt.RetrieveStorageOrthersTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"},{"id":"ds_basetrf","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_basetrf","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDetail',action:'/ds.lo.comntrfmgnt.RetrieveStorageOrthersTariffDetailListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieveDetail","key":"IN_DS1"},{"id":"ds_basetrfList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_basetrfList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDetail_submitdone','ev:submiterror':'scwin.sbm_retrieveDetail_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comntrfmgnt.SaveStorageCommonTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_basetrfList","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//물류/공통(통합)/매출요율/보관/보관기타요율관리

scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// scwin.name : 
// scwin.desc : 전역변수 선언
//------------------------------------------------------------------------- 
scwin.pos_groupCode = 0;
scwin.MSG_LO_CRM_001 = "변경 사항이 존재합니다. 진행하시겠습니까?";
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.hid_selpchItemCd = "";
scwin.hid_adptDt = "";
scwin.updFlag = false;

//-------------------------------------------------------------------------
// scwin.name : scwin.f_OnLoad
// scwin.desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.f_OnLoad = function () {
  //console.log("scwin.f_OnLoad11~~~");
  scwin.f_defaultValue();
  //scwin.f_createHeader();	

  ica_adptDt.setValue(scwin.strCurDate);
};
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "SellpurchaseItemEBC",
    param2: "retrieveSellpurchaseItemCombo",
    param3: ["22"],
    compID: "acb_cnd_selpchItemCd,acb_selpchItemCd"
  }];
  $c.data.setGauceUtil($p, codeOptions);
  scwin.f_OnLoad();
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_defaultValue
// scwin.desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  //항목 첫번째값 선택 
  //acb_cnd_selpchItemCd.Index = 0;

  //오늘날짜 세팅
  //ica_cnd_adptDt.setValue(scwin.strCurDate);

  //버튼초기화 
  //$c.gus.cfDisableObjects([btn_save,btn_add,btn_del,btn_cls, acb_selpchItemCd, ica_adptDt, imgAdptDt]);
  $c.gus.cfDisableObjects($p, [btn_save, udc_addRow2, acb_selpchItemCd, ica_adptDt]);
  $c.gus.cfEnableObjects($p, [btn_edit, btn_new]);

  //항목 Focus
  acb_cnd_selpchItemCd.focus();
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_Addrow
// scwin.desc : 행추가
//-------------------------------------------------------------------------
scwin.f_addrow = function () {
  //console.log("scwin.f_addrow~~~");
  if (ds_basetrfList.getRowCount() == 0) {
    var row = ds_basetrfList.insertRow();
    ds_basetrfList.setCellData(row, "selpchItemCd", acb_selpchItemCd.getValue());
    ds_basetrfList.setCellData(row, "adptDt", ica_adptDt.getValue());
    ds_basetrfList.setCellData(row, "famtFratClsCd", "FM"); //정액정율구분코드(정액)
    ds_basetrfList.setCellData(row, "crcCd", "KRW"); //통화코드
    gr_basetrfList.setFocusedCell(row, "commNm", false);
  } else {
    var row = ds_basetrfList.getRowCount();
    $c.gus.cfCopyRecord($p, gr_basetrfList);
    ds_basetrfList.setCellData(row, "comnTrfSeq", 0);
    gr_basetrfList.setFocusedCell(row, "commNm", false);
    //ds_basetrfList.setRowPosition(row);
  }
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_undo
// scwin.desc : 취소
//-------------------------------------------------------------------------
scwin.f_undo = function () {
  var row = ds_basetrfList.getRowPosition();
  if (ds_basetrfList.getRowStatus(row) == "C") {
    ds_basetrfList.removeRow(row);
    if (row > 0) {
      gr_basetrfList.setFocusedCell(row - 1, "commNm", false);
    } else {
      gr_basetrfList.setFocusedCell(row, "commNm", false);
    }
  } else {
    ds_basetrfList.undoRow(row);
  }
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
  //if(ds_basetrfList.isUpdated == true){
  if (ds_basetrfList.getModifiedJSON().length > 0 && !scwin.updFlag) {
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
  if (!(await scwin.f_validChk())) {
    return;
  }

  //ds_basetrfList.clearData();
  ds_basetrfList.setJSON([]);
  //ds_retrieve.setEmptyValue();

  ds_retrieve.set("selpchItemCd", acb_cnd_selpchItemCd.getValue());
  ds_retrieve.set("adptDt", ica_cnd_adptDt.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_RetrieveDetail
// scwin.desc : 상세조회
//-------------------------------------------------------------------------
scwin.f_RetrieveDetail = function () {
  ds_retrieveDetail.setEmptyValue();
  ds_retrieveDetail.set("selpchItemCd", ds_basetrf.getCellData(ds_basetrf.getRowPosition(), "selpchItemCd")); //항목
  ds_retrieveDetail.set("adptDt", ds_basetrf.getCellData(ds_basetrf.getRowPosition(), "adptDt")); //적용일자

  $c.sbm.execute($p, sbm_retrieveDetail);
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_New
// scwin.desc : 신규
//-------------------------------------------------------------------------
scwin.f_New = function () {
  //적용일자 초기화 세팅	
  //acb_selpchItemCd.Index = 0;
  ica_adptDt.setValue(scwin.strCurDate);
  ds_basetrfList.setJSON([]);
  gr_basetrfList.setReadOnly("grid", false);
  //gr_basetrfList.Editable = true;

  $c.gus.cfEnableObjects($p, [btn_save, udc_addRow2, acb_selpchItemCd, ica_adptDt]);
  $c.gus.cfDisableObjects($p, [btn_edit, btn_new]);

  //작업점소 Focus
  acb_selpchItemCd.focus();
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_Edit
// scwin.desc : 수정
//-------------------------------------------------------------------------
scwin.f_Edit = function () {
  if (ds_basetrfList.getRowCount() > 0) {
    //gr_basetrfList.Editable = true;
    //$c.gus.cfEnableObjects([btn_save,btn_add,btn_del,btn_cls]);

    gr_basetrfList.setReadOnly("grid", false);
    $c.gus.cfEnableObjects($p, [btn_save, udc_addRow2]);
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
      //저장하기전 조회조건값 확인
      scwin.hid_selpchItemCd = acb_selpchItemCd.getValue();
      scwin.hid_adptDt = ica_adptDt.getValue();
      scwin.pos_groupCode = ds_basetrf.getRowPosition();
      sbm_save.userData1 = "noError";
      $c.sbm.execute($p, sbm_save);
    }
  }
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_ReqFieldChk
// scwin.desc : 필수 입력항목 체크
//-------------------------------------------------------------------------
scwin.f_ReqFieldChk = async function () {
  //if(ds_basetrfList.IsUpdated==false){
  if (ds_basetrfList.getModifiedJSON().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["보관기타요율"]); //"@은(는) 변경된 사항이 없습니다.";
    return false;
  }

  //항목
  if (!(await $c.gus.cfValidate($p, acb_selpchItemCd))) {
    return false;
  }

  //적용일자
  if (!(await $c.gus.cfValidate($p, ica_adptDt))) {
    return false;
  }
  /*
      //TODO : ASIS주석되어 있지만, 저장 시 오류(필수값 체크 필요)
      let ret = await $c.gus.cfValidate([gr_basetrfList]);
  	if (!ret) {	    	
    		return false;
  	}
  */
  for (i = 0; i < ds_basetrfList.getRowCount(); i++) {
    var commCd = ds_basetrfList.getCellData(i, "commCd");
    var lobranCd = ds_basetrfList.getCellData(i, "lobranCd");
    /*	
    for(j = i+1; j < ds_basetrfList.getRowCount(); j++) {			
    	if( commCd == ds_basetrfList.getCellData(j,"commCd") && (!$c.gus.cfIsNull(lobranCd) && lobranCd == ds_basetrfList.getCellData(j,"lobranCd")) ){
    	    await $c.gus.cfAlertMsg("보관기타요율상세목록의 "+j+"번째 데이터에서 품목, 물류점소은(는) 중복될 수 없습니다.");
    	    return false;
    	}
    }
             */
    for (j = 0; j < ds_basetrfList.getRowCount(); j++) {
      if (i != j && commCd == ds_basetrfList.getCellData(j, "commCd") && lobranCd == ds_basetrfList.getCellData(j, "lobranCd")) {
        await $c.gus.cfAlertMsg($p, "보관기타요율상세목록의 " + (j + 1) + "번째 데이터에서 품목, 물류점소은(는) 중복될 수 없습니다.");
        return false;
      }
    }
  }

  //항목, 적용일자 GRID에 세팅
  var selpchItemCd = acb_selpchItemCd.getValue();
  var edAdptDt = ica_adptDt.getValue();
  var lobranCd = "";
  for (i = 0; i < ds_basetrfList.getRowCount(); i++) {
    //Insert:1,  Delete :2, Update:3
    //if( ds_basetrfList.getRowStatus(i) == 1 ){
    if (ds_basetrfList.getRowStatus(i) == "C") {
      ds_basetrfList.setCellData(i, "selpchItemCd", selpchItemCd);
      ds_basetrfList.setCellData(i, "adptDt", edAdptDt);
      lobranCd = ds_basetrfList.getCellData(i, "lobranCd");
      /*
      //TODO : 작업ID[T-3909] 물류점소 빈값인 경우 4BB:의왕지점으로 강제세팅
      if($c.gus.cfIsNull(lobranCd)) {
      ds_basetrfList.setCellData(i,"lobranCd", "4BB");
      ds_basetrfList.setCellData(i,"lobranNm", "의왕지점");
      }
      */
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 그리드에서 입력된 코드정보로  팝업조회 - 품목
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = function (disGubun, row, pClose) {
  // 선언부
  var rtnList;
  var pCode = "";
  var pName = "";
  switch (disGubun) {
    case 1:
      //품목           
      pName = ds_basetrfList.getCellData(row, "commNm"); // 품명코드								
      //rtnList = udc_comCodeGrid.cfCommonPopUp('retrieveCommInfo'	    // XML상의 SELECT ID	
      udc_comCodeGrid.setSelectId('retrieveCommInfo');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridCallback1, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '3' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , '품목코드,품목명' // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , '2,3,3' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , 'F' // 전체검색허용여부	("F")
      , '품목조회,품목코드,품목명' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      //단위      
      pCode = ds_basetrfList.getCellData(row, "unitCd");
      udc_comCodeGrid.setSelectId('retrieveCommCdInfo');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridCallback2, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '7' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , 'LO102,,' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , 'F' // 전체검색허용여부	("F")
      , '공통코드조회,코드,코드명' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      //작업점소			
      pName = ds_basetrfList.getCellData(row, "lobranNm"); // 작업점소
      //rtnList = udc_comCodeGrid.cfCommonPopUp('retrieveLogisDeptInfo'	// XML상의 SELECT ID	
      udc_comCodeGrid.setSelectId('retrieveLogisDeptInfo');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridCallback3, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , '작업점소코드,작업점소명' // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , 'A,B,' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , 'F' // 전체검색허용여부	("F")
      , '작업점소조회,작업점소코드,작업점소명' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};
scwin.udc_comCodeGridCallback1 = function (rtnList) {
  var row = ds_basetrfList.getRowPosition();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_basetrfList, row, "commCd", "commNm");
};
scwin.udc_comCodeGridCallback2 = function (rtnList) {
  var row = ds_basetrfList.getRowPosition();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_basetrfList, row, "unitCd", "unitNm");
};
scwin.udc_comCodeGridCallback3 = function (rtnList) {
  var row = ds_basetrfList.getRowPosition();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_basetrfList, row, "lobranCd", "lobranNm");
};
scwin.sbm_retrieve_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    var rowcnt = ds_basetrf.getRowCount();
    tbx_totalRows.setValue(rowcnt);
    if (rowcnt == 0) {
      acb_selpchItemCd.setValue(acb_cnd_selpchItemCd.getValue());
      ica_adptDt.setValue(ica_cnd_adptDt.getValue());

      //조건절 disabled
      //$c.gus.cfDisableObjects([btn_save,btn_add,btn_del,btn_cls, acb_selpchItemCd, ica_adptDt, imgAdptDt]);
      $c.gus.cfDisableObjects($p, [btn_save, udc_addRow2, acb_selpchItemCd, ica_adptDt]);
      $c.gus.cfEnableObjects($p, [btn_new, btn_edit]);
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      tbx_totalRows2.setValue(rowcnt);
      return;
    }
    gr_basetrfList.setReadOnly("grid", true);
    gr_basetrf.setFocusedCell(0, "selpchItemNm", false);
    scwin.updFlag = false;
  } catch (e) {
    console.log("sbm_retrieve_submitdone : " + e);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {};
scwin.sbm_retrieveDetail_submitdone = function (e) {
  var rowcnt = ds_basetrfList.getRowCount();
  tbx_totalRows2.setValue(rowcnt);
  gr_basetrfList.setFocusedCell(0, "commNm", false);
  //gr_basetrf.focus();
};
scwin.sbm_retrieveDetail_submiterror = function (e) {};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  //ds_basetrf.reform();
  //ds_basetrfList.reform();
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다 		    
  //저장조건값을 조회조건값으로 세팅한다.    
  acb_cnd_selpchItemCd.setValue(scwin.hid_selpchItemCd);
  ica_cnd_adptDt.setValue(scwin.hid_adptDt);
  scwin.updFlag = true;
  //조회
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {};
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
scwin.ds_basetrf_onbeforerowpositionchange = async function (info) {
  //if(ds_basetrfList.isUpdated == true){
  if (ds_basetrfList.getModifiedJSON().length > 0) {
    return await $c.win.confirm($p, scwin.MSG_LO_CRM_001);
  }
  return true;
};
scwin.ds_basetrf_onrowpositionchange = function (info) {
  console.log("scwin.ds_basetrf_onrowpositionchange~~");
  //console.log(info);
  var row = info.newRowIndex;
  //if (row != 0 && ds_basetrf.getRowStatus(row) != 1) {
  //if (row != 0 && ds_basetrf.getRowStatus(row) != "C") {

  //조건절 disabled
  acb_selpchItemCd.setValue(ds_basetrf.getCellData(ds_basetrf.getRowPosition(), "selpchItemCd")); //항목
  ica_adptDt.setValue(ds_basetrf.getCellData(ds_basetrf.getRowPosition(), "adptDt")); //적용일자

  //$c.gus.cfDisableObjects([btn_save,btn_add,btn_del,btn_cls, acb_selpchItemCd, ica_adptDt, imgAdptDt]);

  $c.gus.cfDisableObjects($p, [btn_save, udc_addRow2, acb_selpchItemCd, ica_adptDt]);
  $c.gus.cfEnableObjects($p, [btn_new, btn_edit]);

  //선택된 행에 해당하는 상세내역 조회 	
  scwin.f_RetrieveDetail();
  //}
};
scwin.ds_basetrfList_onrowpositionchange = function (info) {
  var row = info.rowIndex;
  $c.gus.cfPrepareHidVal($p, ds_basetrfList, row, ["commCd", "commNm", "unitCd", "lobranCd", "lobranNm"]);
  if (ds_basetrfList.getRowStatus(row) == "C" || ds_basetrfList.getRowStatus(row) == "U") {
    gr_basetrfList.setRowReadOnly(row, false);
  } else {
    gr_basetrfList.setRowReadOnly(row, true);
  }
};
scwin.gr_basetrfList_ontextimageclick = function (rowIndex, columnIndex) {
  var row = rowIndex;
  var colid = gr_basetrfList.getColumnID(columnIndex);
  switch (colid) {
    case "commNm":
      scwin.f_openCommPopUpGrid(1, row, 'F');
      break;
    case "unitCd":
      scwin.f_openCommPopUpGrid(2, row, 'F');
      break;
    case "lobranNm":
      scwin.f_openCommPopUpGrid(3, row, 'F');
      break;
  }
};
scwin.gr_basetrfList_onviewchange = function (info) {
  console.log("gr_basetrfList_onviewchange~~");
  //console.log(info);

  var row = info.rowIndex;
  var Colid = info.colId;
  var olddata = info.oldValue;
  //if (row > 0 && ds_basetrfList.getRowCount() >= row){
  //if (row > 0 && ds_basetrfList.getRowCount() >= row){
  switch (Colid) {
    case "commNm":
      if (ds_basetrfList.getCellData(row, Colid) != "" && ds_basetrfList.getCellData(row, Colid) != olddata) {
        ds_basetrfList.setCellData(row, "commCd", "");
        scwin.f_openCommPopUpGrid(1, row, 'T');
      } else if (ds_basetrfList.getCellData(row, Colid) == "") {
        ds_basetrfList.setCellData(row, "commCd", "");
        ds_basetrfList.setCellData(row, "commNm", "");
      }
      break;
    case "unitCd":
      if (ds_basetrfList.getCellData(row, Colid) != "" && ds_basetrfList.getCellData(row, Colid) != olddata) {
        scwin.f_openCommPopUpGrid(2, row, 'T');
      } else if (ds_basetrfList.getCellData(row, Colid) == "") {
        ds_basetrfList.setCellData(row, "unitCd", "");
      }
      break;
    case "lobranNm":
      if (ds_basetrfList.getCellData(row, Colid) != "" && ds_basetrfList.getCellData(row, Colid) != olddata) {
        ds_basetrfList.setCellData(row, "lobranCd", "");
        scwin.f_openCommPopUpGrid(3, row, 'T');
      } else if (ds_basetrfList.getCellData(row, Colid) == "") {
        ds_basetrfList.setCellData(row, "lobranCd", "");
        ds_basetrfList.setCellData(row, "lobranNm", "");
      }
      break;
  }
  //}
};

/**
 * 입력이 가능한 컬럼에서 포커스가 빠져나가는 시점에 본 속성에 정의한 함수를 실행
 * 빈값인 경우 0으로 설정
 */
scwin.validatorNumber = function (val) {
  if ($c.gus.cfIsNull($p, val)) {
    return "0";
  }
  return val;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cnd_selpchItemCd',search:'start',style:'width:200px;',submenuSize:'auto',ref:'data:ds_retrieve.selpchItemCd',allOption:'',chooseOption:'true',chooseOptionLabel:'-전체-'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_cnd_adptDt',pickerType:'dynamic',style:'',ref:'data:ds_retrieve.adptDt',objType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'항목',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_selpchItemCd',search:'start',style:'width:200px;',submenuSize:'auto',ref:'data:ds_retrieveDetail.selpchItemCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_adptDt',pickerType:'dynamic',style:'',ref:'data:ds_retrieveDetail.adptDt',objType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox flex_no wfix',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 40%;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'보관기타요율목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_basetrf',grdDownOpts:'{"sheetName" : "보관기타요율목록", "fileName":"보관기타요율목록.xlsx","type":"2+4+8+16","hiddenVisible":"true"}',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_basetrf',id:'gr_basetrf',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column21',inputType:'text',style:'',value:'항목코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'항목',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'적용일자',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',style:'',value:'',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',textAlign:'left',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'text',width:'100',displayFormat:'####/##/##'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'보관기타요율상세목록',style:'',tagname:'h3',gridName:'보관기타요율상세목록'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_basetrfList',grdDownOpts:'{"sheetName" : "보관기타요율상세목록", "fileName":"보관기타요율상세목록.xlsx","type":"2+4+8+16","hiddenVisible":"true"}',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_basetrfList',id:'gr_basetrfList',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_basetrfList_ontextimageclick','ev:onviewchange':'scwin.gr_basetrfList_onviewchange',readOnly:'true',enterKeyMove:'right',rowStatusVisible:'true',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'column1',inputType:'text',value:'품목코드',width:'190'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column19',value:'품목',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column17',inputType:'text',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column15',inputType:'text',value:'적용금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'물류점소코드',width:'160'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column11',inputType:'text',value:'물류점소',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'단위명',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'190',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'textImage',style:'',id:'commNm',value:'',displayMode:'label',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'textImage',width:'70',textAlign:'left',mandatory:'true',maxLength:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'comnTrf',inputType:'text',textAlign:'right',width:'100',displayFormat:'#,##0.##',dataType:'float',mandatory:'true',validator:'scwin.validatorNumber',maxLength:'13.2',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranCd',inputType:'text',width:'160',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'textImage',textAlign:'left',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitNm',inputType:'text',width:'100',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_basetrfList',btnDelYn:'N',btnCancelYn:'Y',id:'udc_addRow2',rowAddFunction:'scwin.f_addrow',cancelFunction:'scwin.f_undo',rowAddUserAuth:'C',rowDelUserAuth:'D',cancelObjType:'data',rowAddObjType:'data',rowDelObjType:'data'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_new',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_new_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_edit',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_edit_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})