/*amd /ui/ds/lo/comntrfmgnt/lo_200_01_06b.xml 50448 9e9b37f1908d1a03f08348aa9130fa7fcf6bde5efda9236cd5bd953554f02bc3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieveDetail'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portDistrictCd',name:'항구권역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portDistrictNm',name:'항구권역명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_basetrfList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'comnTrfSeq',name:'공통요율순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptStdSelpchItemCd',name:'적용대상',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portDistrictCd',name:'항구권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidCommNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'famtFratClsCd',name:'정액정률구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'comnTrf',name:'공통요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'comnTrfRt',name:'공통요율_비율',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portDistrictCd',name:'항구권역코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_basetrf',repeatNode:'map',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_basetrf_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portDistrictCd',name:'항구권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portDistrictNm',name:'항구권역명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comntrfmgnt.RetrieveAgreementAnnouncementTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"},{"id":"ds_basetrf","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_basetrf","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDetail',action:'/ds.lo.comntrfmgnt.RetrieveAgreementAnnouncementTariffDetailListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieveDetail","key":"IN_DS1"},{"id":"ds_basetrfList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_basetrfList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDetail_submitdone','ev:submiterror':'scwin.sbm_retrieveDetail_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comntrfmgnt.SaveCommonTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_basetrfList","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//물류/공통(통합)/매출요율/하역/협정고시요율관리

//-------------------------------------------------------------------------
// scwin.name : 
// scwin.desc : 전역변수 선언
//------------------------------------------------------------------------- 
scwin.pos_groupCode = 0;
scwin.searchFlag = 0;
scwin.MSG_LO_CRM_001 = "변경 사항이 존재합니다. 진행하시겠습니까?";
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.hid_portDistrictCd = "";
scwin.hid_portDistrictNm = "";
scwin.hid_adptDt = "";
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_OnLoad
// scwin.desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.f_OnLoad = function () {
  scwin.f_defaultValue();
  //scwin.f_createHeader();
  ica_adptDt.setValue(scwin.strCurDate);
};
scwin.onUdcCompleted = function () {
  /*
      const codeOptions = [
          { grpCd: 'ZZ208', compID: 'gr_basetrfList:eqNrmCd' }
          ,{ grpCd: 'ZZ006', compID: 'gr_basetrfList:crcCd' }
      ];
  
      $c.data.setCommonCode(codeOptions, scwin.f_OnLoad);
  */

  const codeOptions1 = [{
    method: "getLuxeComboData",
    param1: "SellpurchaseItemEBC",
    param2: "retrieveSellpurchaseItemCombo",
    param3: ["03", "1"],
    compID: "gr_basetrfList:selpchItemCd"
  }, {
    method: "getLuxeComboData",
    param1: "SellpurchaseItemEBC",
    param2: "retrieveSellpurchaseItemCombo",
    param3: ["01", "1"],
    compID: "gr_basetrfList:adptStdSelpchItemCd"
  }]; //공통에서 처리 중

  $c.data.setGauceUtil($p, codeOptions1, scwin.f_OnLoad);
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_defaultValue
// scwin.desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  //오늘날짜 세팅
  //ica_cnd_adptDt.getValue() = "<%=strCurDate%>";

  //입력필드 영문
  //$c.gus.cfSetIMEModeActiveObjects([ed_cnd_portDistrictNm]);

  //버튼초기화 
  //$c.gus.cfDisableObjects([btn_save,btn_add,btn_del,btn_cls, ed_portDistrictCd,ed_portDistrictNm,ed_portDistrictNm,imgPort, ica_adptDt, imgAdptDt]);
  $c.gus.cfDisableObjects($p, [btn_save, btn_add, btn_del, btn_cls, udc_portDistrictCd, ica_adptDt]);
  $c.gus.cfEnableObjects($p, [btn_edit, btn_new]);

  //항목 Focus
  ed_cnd_portDistrictCd.focus();
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_Addrow
// scwin.desc : 행추가
//-------------------------------------------------------------------------
scwin.f_addrow = function () {
  if (ds_basetrfList.getRowCount() == 0) {
    var row = ds_basetrfList.insertRow();
    ds_basetrfList.setCellData(row, "adptDt", ica_adptDt.getValue().trim());
    ds_basetrfList.setCellData(row, "portDistrictCd", ed_portDistrictCd.getValue().trim());
    ds_basetrfList.setCellData(row, "CrcCd", "KRW");
    ds_basetrfList.setCellData(row, "comnTrfRt", 0);
    ds_basetrfList.setCellData(row, "comnTrf", 0);
    gr_basetrfList.setFocusedCell(row, "selpchItemCd", false);
    //ds_basetrfList.setRowPosition(row);
  } else {
    $c.gus.cfCopyRecord($p, gr_basetrfList);
    //console.log('copy 후 카운트~~'+ds_basetrfList.getRowCount());
    ds_basetrfList.setCellData(ds_basetrfList.getRowCount() - 1, "comnTrfSeq", 0);
    //ds_basetrfList.setRowPosition(ds_basetrfList.getRowCount()-1);
    gr_basetrfList.setFocusedCell(ds_basetrfList.getRowCount() - 1, "selpchItemCd", false);
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
  console.log('scwin.f_validChk~');
  console.log(ds_basetrfList.getModifiedJSON());
  //if(ds_basetrfList.isUpdated == true){
  if (ds_basetrfList.getModifiedJSON().length > 0) {
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
scwin.f_Retrieve = function () {
  /*		
  	if (!scwin.f_validChk()) {
          //oldRowIndex
  		return false;
  	}
      ds_basetrfList.clearData();
      ds_retrieve.clearData();
  	ds_retrieve.AddRow();	
  	ds_retrieve.NameValue(1,"portDistrictCd") = ed_cnd_portDistrictCd.getValue().trim();
  	ds_retrieve.NameValue(1,"adptDt"        ) = ica_cnd_adptDt.getValue().trim();
  
  	tr_retrieve.Action = "/ds.lo.comntrfmgnt.RetrieveEquipmentChargeListCMD.do";
      tr_retrieve.Post();    
  */

  ds_basetrfList.setJSON([]);
  ds_retrieve.setEmptyValue();
  ds_retrieve.set("portDistrictCd", ed_cnd_portDistrictCd.getValue().trim());
  ds_retrieve.set("adptDt", ica_cnd_adptDt.getValue().trim());
  ica_adptDt.setValue(ica_cnd_adptDt.getValue().trim());
  $c.sbm.execute($p, sbm_retrieve);

  //	tr_retrieve.Action = "/ds.lo.comntrfmgnt.RetrieveAgreementAnnouncementTariffListCMD.do";
  // tr_retrieve.Post();            
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_RetrieveDetail
// scwin.desc : 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveDetail = function () {
  /*
  	//선택된 행에 해당하는 상세내역 조회 	
      ds_retrieveDetail.clearData();
  	ds_retrieveDetail.AddRow();
  	ds_retrieveDetail.NameValue(1,"portDistrictCd") = ds_basetrf.NameValue(ds_basetrf.getRowPosition(),"portDistrictCd");
  	ds_retrieveDetail.NameValue(1,"adptDt"        ) = ds_basetrf.NameValue(ds_basetrf.getRowPosition(),"adptDt"        );
  
  	tr_retrieveDetail.Action ="/ds.lo.comntrfmgnt.RetrieveAgreementAnnouncementTariffDetailListCMD.do";
  	tr_retrieveDetail.post();
  */

  ds_retrieveDetail.setEmptyValue();
  ds_retrieveDetail.set("portDistrictCd", ds_basetrf.getCellData(ds_basetrf.getRowPosition(), "portDistrictCd"));
  ds_retrieveDetail.set("adptDt", ds_basetrf.getCellData(ds_basetrf.getRowPosition(), "adptDt"));
  $c.sbm.execute($p, sbm_retrieveDetail);
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_New
// scwin.desc : 신규
//-------------------------------------------------------------------------
scwin.f_New = function () {
  //적용일자 초기화 세팅	
  ed_portDistrictCd.setValue("");
  ed_portDistrictNm.setValue("");
  ica_adptDt.setValue(scwin.strCurDate);
  ds_basetrfList.removeAll();
  gr_basetrfList.setReadOnly("grid", false);

  //gr_basetrfList.Editable = true;

  //입력필드 영문
  //$c.gus.cfSetIMEModeActiveObjects([ed_portDistrictNm]);

  //$c.gus.cfEnableObjects([btn_save,btn_add,btn_del,btn_cls, ed_portDistrictCd,ed_portDistrictNm,imgPort, ica_adptDt,imgAdptDt]);
  $c.gus.cfEnableObjects($p, [btn_save, btn_add, btn_del, btn_cls, udc_portDistrictCd, ica_adptDt]);
  $c.gus.cfDisableObjects($p, [btn_edit, btn_new]);

  //항구권역에 Focus
  ed_portDistrictCd.focus();
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_Edit
// scwin.desc : 수정
//-------------------------------------------------------------------------
scwin.f_Edit = function () {
  if (ds_basetrfList.getRowCount() > 0) {
    //gr_basetrfList.Editable = true;
    gr_basetrfList.setReadOnly("grid", false);
    gr_basetrfList.setReadOnly("column", "selpchItemCd", true);
    $c.gus.cfEnableObjects($p, [btn_save, btn_add, btn_del, btn_cls]);
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
      scwin.f_CreateDs();

      //저장하기전 조회조건값 확인
      scwin.hid_portDistrictCd = ed_portDistrictCd.getValue().trim();
      scwin.hid_portDistrictNm = ed_portDistrictNm.getValue().trim();
      scwin.hid_adptDt = ica_adptDt.getValue().trim();
      scwin.pos_groupCode = ds_basetrf.getRowPosition();
      $c.sbm.execute($p, sbm_save);

      //tr_save.Action = "/ds.lo.comntrfmgnt.SaveCommonTariffListCMD.do";			    
      //tr_save.Post();
    }
  }
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_ReqFieldChk
// scwin.desc : 필수 입력항목 체크
//-------------------------------------------------------------------------
scwin.f_ReqFieldChk = async function () {
  //if(ds_basetrfList.IsUpdated==false){
  if (ds_basetrfList.getRowCount() < 1 || ds_basetrfList.getModifiedJSON().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["협정고시요율"]); //"@은(는) 변경된 사항이 없습니다.";
    return false;
  }

  //항목
  if (!(await $c.gus.cfValidate($p, ed_portDistrictCd))) {
    return false;
  }

  //적용일자
  if (!(await $c.gus.cfValidate($p, ica_adptDt))) {
    return false;
  }
  if (ed_portDistrictCd.getValue() == '') {
    await $c.win.alert($p, '항구권역은 필수 입력 항목입니다.');
    return false;
  }
  ;
  if (ica_adptDt.getValue() == '') {
    await $c.win.alert($p, '적용일자는 필수 입력 항목입니다.');
    return false;
  }
  ;
  var validArry = [{
    id: "selpchItemCd",
    name: "항목",
    mandatory: true
  }, {
    id: "adptStdSelpchItemCd",
    name: "적용대상",
    mandatory: true
  }, {
    id: "unitCd",
    name: "단위",
    mandatory: true
  }];
  let gridName = "협정고시요율상세목록";
  if (!(await $c.gus.cfValidateGrid($p, gr_basetrfList, null, null, validArry, gridName))) {
    return false;
  } else {
    //if (!await $c.gus.cfValidate([gr_basetrfList])) {	    	
    //return false;
    //}else
    // 적용율(%)또는 적용금액 둘중 하나는 필수 입력사항이다.
    var comnTrfRt = 0;
    var comnTrf = 0;
    for (i = 0; i < ds_basetrfList.getRowCount(); i++) {
      //Insert:1,  Delete :2, Update:3, 
      //if( ds_basetrfList.getRowStatus(i) == 1 || ds_basetrfList.getRowStatus(i) == 3){
      if (ds_basetrfList.getRowStatus(i) == "C" || ds_basetrfList.getRowStatus(i) == "U") {
        comnTrfRt = $c.gus.cfIsNull($p, ds_basetrfList.getCellData(i, "comnTrfRt")) ? 0 : ds_basetrfList.getCellData(i, "comnTrfRt");
        comnTrf = $c.gus.cfIsNull($p, ds_basetrfList.getCellData(i, "comnTrf")) ? 0 : ds_basetrfList.getCellData(i, "comnTrf");
        if (comnTrf == 0 && comnTrfRt == 0) {
          await $c.gus.cfAlertMsg($p, "협정고시요율상세목록의 " + (i + 1) + "번째 데이터에서 적용율(%)또는 적용금액은(는) 필수 입력 항목입니다.");

          //ds_basetrfList.ClearAllMark();				   
          //ds_basetrfList.setRowPosition(i);
          //gr_basetrfList.SetColumn("comnTrfRt");
          //gr_basetrfList.focus();

          //gr_basetrfList.setFocusedCell(i, "comnTrfRt", false);

          return false;
        }
      }
    }
  }

  //selpchItemCd
  //adptStdSelpchItemCd
  //commNm
  var v_selpchItemCd;
  var v_adptStdSelpchItemCd;
  var v_commNm;
  var cnt = 0;
  for (i = 0; i < ds_basetrfList.getRowCount(); i++) {
    v_selpchItemCd = ds_basetrfList.getCellData(i, "selpchItemCd");
    v_adptStdSelpchItemCd = ds_basetrfList.getCellData(i, "adptStdSelpchItemCd");
    v_commNm = ds_basetrfList.getCellData(i, "commNm");
    console.log(cnt++);
    for (j = 0; j < ds_basetrfList.getRowCount(); j++) {
      if (i != j && v_selpchItemCd == ds_basetrfList.getCellData(j, "selpchItemCd") && v_adptStdSelpchItemCd == ds_basetrfList.getCellData(j, "adptStdSelpchItemCd") && v_commNm == ds_basetrfList.getCellData(j, "commNm")) {
        $c.win.alert($p, "협정고시요율상세목록의 " + (j + 1) + "번째 데이터에서 항목, 적용대상, 품목은(는) 중복될 수 없습니다.");
        return false;
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_CreateDs
// scwin.desc : 그리드DataId의 dataset을 서버로 넘길 dataset으로 변경
//-------------------------------------------------------------------------
scwin.f_CreateDs = function () {
  //적용일자 GRID에 세팅
  var edAdptDt = ica_adptDt.getValue().trim();
  for (i = 0; i < ds_basetrfList.getRowCount(); i++) {
    //Insert:1,  Delete :2, Update:3, 
    //if( ds_basetrfList.getRowStatus(i) == 1 || ds_basetrfList.getRowStatus(i) == 3){
    if (ds_basetrfList.getRowStatus(i) == 'C' || ds_basetrfList.getRowStatus(i) == 'U') {
      ds_basetrfList.setCellData(i, "adptDt", edAdptDt);
      if (ds_basetrfList.getCellData(i, "comnTrf") == "0" && ds_basetrfList.getCellData(i, "comnTrfRt") != "0") {
        ds_basetrfList.setCellData(i, "famtFratClsCd", "FR");
      } else if (ds_basetrfList.getCellData(i, "comnTrf") != "0" && ds_basetrfList.getCellData(i, "comnTrfRt") == "0") {
        ds_basetrfList.setCellData(i, "famtFratClsCd", "FM");
      }
    } //end if			
  } //end for
};

/*
//-------------------------------------------------------------------------
// scwin.name : scwin.f_runExcel
// scwin.desc : 엑셀저장
//-------------------------------------------------------------------------
scwin.f_runExcel = function (disGubun) {
	
	switch (disGubun)
  	{	
  		case 1:
 		    cfGridToExcel(gr_basetrf, "협정고시요율목록", "협정고시요율목록.xls", 2+4+8+16);				
			break;		
  		case 2:
 		    cfGridToExcel(gr_basetrfList, "협정고시요율상세목록", "협정고시요율상세목록.xls", 2+4+8+16);
  		    break;
  	}
};
*/
//-------------------------------------------------------------------------
// scwin.name : scwin.f_runExcel
// scwin.desc : 엑셀저장
//-------------------------------------------------------------------------
/*
scwin.f_runExcel = function () {
console.log('scwin.f_runExcel~~');
    var sheetTitle = "협정고시요율상세목록";
    const options = {
        fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        , sheetName: sheetTitle //엑셀내 시트명 지정필요시
    };

    const infoArr = [];
    $c.data.downloadGridViewExcel(gr_basetrfList, options, infoArr);
};
*/

//-------------------------------------------------------------------------
// scwin.name : scwin.f_openCommonPopUp
// scwin.desc : popup
// 임시로 광역권(WDE)로 세팅 -> 추후에 항구권으로 수정할것 (2005.12.7)
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  var rtnList = new Array();
  switch (disGubun) {
    //항구권역 조회	    
    case 1:
      //rtnList = udc_cnd_portDistrictCd.cfCommonPopUp('retrieveDistrictList'	// XML상의 SELECT ID
      udc_cnd_portDistrictCd.setSelectId('retrieveDistrictList');
      rtnList = udc_cnd_portDistrictCd.cfCommonPopUp(scwin.udc_cnd_portDistrictCdCallback // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , ',,PCD' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , '항구권역조회,권역코드,권역명' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );

      //cfSetReturnValue(rtnList, ed_cnd_portDistrictCd, ed_cnd_portDistrictNm);
      break;
    case 2:
      //rtnList = udc_portDistrictCd.cfCommonPopUp('retrieveDistrictList'	// XML상의 SELECT ID	
      udc_portDistrictCd.setSelectId('retrieveDistrictList');
      rtnList = udc_portDistrictCd.cfCommonPopUp(scwin.udc_portDistrictCdCallback // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , ',,PCD' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , '항구권역조회,권역코드,권역명' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );

      //cfSetReturnValue(rtnList, ed_portDistrictCd, ed_portDistrictNm);

      //for(i = 1; i <= ds_basetrfList.CountRow; i++) {
      //	ds_basetrfList.NameValue(i,"portDistrictCd") = rtnList[0];
      //}	

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

//-------------------------------------------------------------------------
// 그리드에서 입력된 코드정보로  팝업조회 - 작업장, 품목
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = function (disGubun, row, pClose) {
  // 선언부
  var rtnList;
  var pCode = "";
  var pName = "";
  switch (disGubun) {
    case 1:
      //품목           
      pName = ds_basetrfList.getCellData(row, "commNm");
      //rtnList = cfCommonPopUp('retrieveCommInfo'	    // XML상의 SELECT ID	
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
      //cfSetGridReturnValue(rtnList, ds_basetrfList, row, "commCd", "commNm");
      break;
    case 2:
      //단위      
      pCode = ds_basetrfList.getCellData(row, "unitCd");
      //rtnList = cfCommonPopUp('retrieveCommCdInfo'	// XML상의 SELECT ID	
      udc_comCodeGrid.setSelectId('retrieveCommCdInfo');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridCallback2 // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
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
      //cfSetGridReturnValue(rtnList, ds_basetrfList, row, "unitCd", "unitNm");
      break;
    default:
      break;
  }
};
scwin.udc_cnd_portDistrictCdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cnd_portDistrictCd, ed_cnd_portDistrictNm);
};
scwin.udc_portDistrictCdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_portDistrictCd, ed_portDistrictNm);
  for (i = 0; i < ds_basetrfList.getRowCount(); i++) {
    ds_basetrfList.setCellData(i, "portDistrictCd", rtnList[0]);
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
scwin.sbm_retrieve_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    var rowcnt = ds_basetrf.getRowCount();
    tbx_totalRows.setValue(rowcnt);
    if (rowcnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }
    gr_basetrf.setFocusedCell(0, "portDistrictNm", false);
    $c.gus.cfEnableObjects($p, [btn_new, btn_edit]);
    $c.gus.cfDisableObjects($p, [btn_save, btn_add, btn_del, btn_cls, udc_portDistrictCd, ica_adptDt]);
    //$c.gus.cfGoPrevPosition(ds_basetrf, scwin.pos_groupCode);
  } catch (e) {
    console.log("sbm_retrieve_submitdone_submitdone : " + e);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {};
scwin.sbm_retrieveDetail_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    var rowcnt = ds_basetrfList.getRowCount();
    tbx_totalRows2.setValue(rowcnt);
    if (rowcnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }
    gr_basetrfList.setReadOnly("grid", true);
    gr_basetrfList.setFocusedCell(0, "selpchItemCd", false);
    gr_basetrf.setFocusedCell(ds_basetrf.getRowPosition(), gr_basetrf.getFocusedColumnID(), false);
  } catch (e) {
    console.log("sbm_retrieveDetail_submitdone : " + e);
  }
};
scwin.sbm_retrieveDetail_submiterror = function (e) {};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다 	

  //저장조건값을 조회조건값으로 세팅한다.    
  ed_cnd_portDistrictCd.setValue(scwin.hid_portDistrictCd);
  ed_cnd_portDistrictNm.setValue(scwin.hid_portDistrictNm);
  ica_cnd_adptDt.setValue(scwin.hid_adptDt);

  //조회
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {};
scwin.btn_refresh_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  if (!scwin.f_validChk()) {
    //oldRowIndex
    return false;
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
scwin.gr_basetrf_onrowindexchange = function (rowIndex, oldRow) {
  //if (row != 0 && ds_basetrf.RowStatus(row) != 1) {
  if (ds_basetrf.getRowStatus(rowIndex) != "C") {
    //조건절 disabled
    ed_portDistrictCd.setValue(ds_basetrf.getCellData(ds_basetrf.getRowPosition(), "portDistrictCd"));
    ed_portDistrictNm.setValue(ds_basetrf.getCellData(ds_basetrf.getRowPosition(), "portDistrictNm"));
    ica_adptDt.setValue(ds_basetrf.getCellData(ds_basetrf.getRowPosition(), "adptDt"));

    //$c.gus.cfDisableObjects([btn_save,btn_add,btn_del,btn_cls, ed_portDistrictCd,ed_portDistrictNm,imgPort, ica_adptDt, imgAdptDt]);
    $c.gus.cfDisableObjects($p, [btn_save, btn_add, btn_del, btn_cls, udc_portDistrictCd, ica_adptDt]);
    $c.gus.cfEnableObjects($p, [btn_new, btn_edit]);

    //상세조회
    scwin.f_RetrieveDetail();
  }
  gr_basetrfList.setReadOnly('grid', true);
};
scwin.gr_basetrfList_onrowindexchange = function (rowIndex, oldRow) {
  console.log('scwin.gr_basetrfList_onrowindexchange~~');

  //if (ds_basetrfList.RowStatus(row) == 0 ) {
  //	gr_basetrfList.ColumnProp('selpchItemCd'       , 'Edit')  = "None";
  //	gr_basetrfList.ColumnProp('adptStdSelpchItemCd', 'Edit')  = "Any";
  //	gr_basetrfList.ColumnProp('commNm'             , 'Edit')  = "Any";
  //	gr_basetrfList.ColumnProp('unitCd'             , 'Edit')  = "Any";
  //	gr_basetrfList.ColumnProp('comnTrfRt'          , 'Edit')  = "Any";
  //	gr_basetrfList.ColumnProp('comnTrf'            , 'Edit')  = "Any";
  //} else {
  //	gr_basetrfList.ColumnProp('selpchItemCd'       , 'Edit')  = "Any";
  //	gr_basetrfList.ColumnProp('adptStdSelpchItemCd', 'Edit')  = "Any";
  //	gr_basetrfList.ColumnProp('commNm'             , 'Edit')  = "Any";
  //	gr_basetrfList.ColumnProp('unitCd'             , 'Edit')  = "Any";
  //	gr_basetrfList.ColumnProp('comnTrfRt'          , 'Edit')  = "Any";
  //	gr_basetrfList.ColumnProp('comnTrf'            , 'Edit')  = "Any";	
  //}
  //cfPrepareHidVal(ds_basetrfList, row, ["commCd", "commNm", "unitCd"]);

  if (gr_basetrfList.getReadOnly("grid")) {
    return false;
  }
  $c.gus.cfPrepareHidVal($p, ds_basetrfList, rowIndex, ["commCd", "commNm", "unitCd"]);
  console.log('sta~~' + ds_basetrfList.getRowStatus(rowIndex));
  if (ds_basetrfList.getRowStatus(rowIndex) == "R") {
    gr_basetrfList.setReadOnly("cell", rowIndex, "selpchItemCd", true);
  } else {
    gr_basetrfList.setReadOnly("cell", rowIndex, "selpchItemCd", false);
  }
  gr_basetrfList.setReadOnly("cell", rowIndex, "adptStdSelpchItemCd", false);
  gr_basetrfList.setReadOnly("cell", rowIndex, "commNm", false);
  gr_basetrfList.setReadOnly("cell", rowIndex, "unitCd", false);
  gr_basetrfList.setReadOnly("cell", rowIndex, "comnTrf", true);
  gr_basetrfList.setReadOnly("cell", rowIndex, "comnTrfRt", true);
  scwin.f_setComnTrfValue();
  /*
      if (ds_basetrfList.getCellData(rowIndex,"comnTrfRt") == "0" ) {
          gr_basetrfList.setReadOnly("cell", rowIndex, "comnTrf", false);
      } else {
          gr_basetrfList.setReadOnly("cell", rowIndex, "comnTrf", true);
      }
  
      if (ds_basetrfList.getCellData(rowIndex,"comnTrf") == "0" ) {
          gr_basetrfList.setReadOnly("cell", rowIndex, "comnTrfRt", false);
      } else {
          gr_basetrfList.setReadOnly("cell", rowIndex, "comnTrfRt", true);
      }
      */
};
scwin.gr_basetrfList_ontextimageclick = function (rowIndex, columnIndex) {
  var colid = gr_basetrfList.getColumnID(columnIndex);
  switch (colid) {
    case "commNm":
      scwin.f_openCommPopUpGrid(1, rowIndex, 'F');
      break;
    case "unitCd":
      scwin.f_openCommPopUpGrid(2, rowIndex, 'F');
      break;
  }
};
scwin.gr_basetrfList_onviewchange = function (info) {
  //    console.log('scwin.gr_basetrfList_onviewchange~~');
  //   console.log(info);
  /*
  {
      "oldValue": "48757",
      "newValue": "11",
      "rowIndex": 8,
      "colIndex": 6,
      "colId": "comnTrf"
  }
  */
  var Colid = info.colId;
  var rowIndex = info.rowIndex;
  var olddata = info.oldValue;
  //if (rowIndex > 0 && ds_basetrfList.getRowCount() >= rowIndex){
  switch (Colid) {
    case "commNm":
      if (ds_basetrfList.getCellData(rowIndex, Colid) != "" && ds_basetrfList.getCellData(rowIndex, Colid) != olddata) {
        ds_basetrfList.setCellData(rowIndex, "commCd", "");
        scwin.f_openCommPopUpGrid(1, rowIndex, 'T');
      } else if (ds_basetrfList.getCellData(rowIndex, Colid) == "") {
        ds_basetrfList.setCellData(rowIndex, "commCd", "");
        ds_basetrfList.setCellData(rowIndex, "commNm", "");
      }
      break;
    case "unitCd":
      if (ds_basetrfList.getCellData(rowIndex, Colid) != "" && ds_basetrfList.getCellData(rowIndex, Colid) != olddata) {
        scwin.f_openCommPopUpGrid(2, rowIndex, 'T');
      } else if (ds_basetrfList.getCellData(rowIndex, Colid) == "") {
        ds_basetrfList.setCellData(rowIndex, "unitCd", "");
      }
      break;
    case "comnTrf":
      /*
      if (ds_basetrfList.getCellData(rowIndex,"comnTrf") == "0" ) {
              gr_basetrfList.setReadOnly("cell", rowIndex, "comnTrfRt", false);
      } else {
              gr_basetrfList.setReadOnly("cell", rowIndex, "comnTrfRt", true);
      }
      */
      scwin.f_setComnTrfValue(rowIndex);
      break;
    case "comnTrfRt":
      /*
      if (ds_basetrfList.getCellData(rowIndex,"comnTrfRt") == "0" ) {
              gr_basetrfList.setReadOnly("cell", rowIndex, "comnTrf", false);
      } else {
              gr_basetrfList.setReadOnly("cell", rowIndex, "comnTrf", true);
      }
      */
      scwin.f_setComnTrfValue(rowIndex);
      break;
    default:
      break;
  }
  //}
};
scwin.gr_basetrfList_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_setComnTrfValue(rowIndex);
};
scwin.gr_basetrfList_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  scwin.f_setComnTrfValue();
};
scwin.f_setComnTrfValue = function (rowIndex) {
  if (gr_basetrfList.getReadOnly("grid")) {
    return false;
  }
  if ((ds_basetrfList.getCellData(rowIndex, "comnTrf") == "0" || ds_basetrfList.getCellData(rowIndex, "comnTrf") == "") && (ds_basetrfList.getCellData(rowIndex, "comnTrfRt") == "0" || ds_basetrfList.getCellData(rowIndex, "comnTrfRt") == "")) {
    gr_basetrfList.setReadOnly("cell", rowIndex, "comnTrfRt", false);
    gr_basetrfList.setReadOnly("cell", rowIndex, "comnTrf", false);
  } else {
    if (ds_basetrfList.getCellData(rowIndex, "comnTrf") == "0" || ds_basetrfList.getCellData(rowIndex, "comnTrf") == "") {
      gr_basetrfList.setReadOnly("cell", rowIndex, "comnTrfRt", false);
    } else {
      gr_basetrfList.setReadOnly("cell", rowIndex, "comnTrfRt", true);
    }
    if (ds_basetrfList.getCellData(rowIndex, "comnTrfRt") == "0" || ds_basetrfList.getCellData(rowIndex, "comnTrfRt") == "") {
      gr_basetrfList.setReadOnly("cell", rowIndex, "comnTrf", false);
    } else {
      gr_basetrfList.setReadOnly("cell", rowIndex, "comnTrf", true);
    }
  }
};
scwin.udc_cnd_portDistrictCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_cnd_portDistrictCd, ed_cnd_portDistrictNm, 1);
};
scwin.udc_cnd_portDistrictCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_cnd_portDistrictNm, ed_cnd_portDistrictCd, 1, false);
};
scwin.udc_cnd_portDistrictCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_cnd_portDistrictCd.getValue(), ed_cnd_portDistrictNm.getValue(), 'F', 'F');
};
scwin.udc_portDistrictCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_portDistrictCd, ed_portDistrictNm, 2);
};
scwin.udc_portDistrictCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_portDistrictNm, ed_portDistrictCd, 2, false);
};
scwin.udc_portDistrictCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_portDistrictCd.getValue(), ed_portDistrictNm.getValue(), 'F', 'F');
};
scwin.ds_basetrf_onbeforerowpositionchange = async function (info) {
  //console.log('ds_basetrf_onbeforerowpositionchange~~~');
  //oldRowIndex
  //console.log(info);
  //console.log("oldRowIndex~~~"+info.oldRowIndex);

  let row = info.newRowIndex;
  let oldRow = info.oldRowIndex;
  if (row < 0) return;
  if (ds_basetrfList.getModifiedIndex().length > 0) {
    let ret = await $c.win.confirm($p, MSG_CM_CRM_005);
    if (!ret) {
      if ($c.gus.cfIsNull($p, oldRow)) oldRow = 0;
      ds_basetrf.setEventPause("", true);
      gr_basetrf.setFocusedCell(oldRow, 0, false);
      ds_basetrf.setEventPause("", false);
      return;
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:65px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:65px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항구권역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{class:'col8',popupID:'',style:'',id:'udc_cnd_portDistrictCd',codeId:'ed_cnd_portDistrictCd',nameId:'ed_cnd_portDistrictNm',objTypeCode:'Data',objTypeName:'Data',mandatoryCode:'true',mandatoryName:'false',maxlengthCode:'3',maxlengthName:'50',readOnlyCode:'false',readOnlyName:'false',btnId:'btn_cnd_portDistrictCd',validTitle:'항구권역','ev:onblurCodeEvent':'scwin.udc_cnd_portDistrictCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_cnd_portDistrictCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_cnd_portDistrictCd_onclickEvent',UpperFlagCode:'1',allowCharCode:'A-Za-z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_cnd_adptDt',style:'',objType:'data',mandatory:'false',displayFormat:'yyyy/MM/dd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.btn_refresh_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'항구권역',style:'',tagname:'span'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_portDistrictCd',nameId:'ed_portDistrictNm',id:'udc_portDistrictCd',mandatoryCode:'true',mandatoryName:'false',objTypeCode:'Data',objTypeName:'Data',readOnlyCode:'fasle',btnId:'btn_portDistrictCd',validTitle:'항구권역','ev:onclickEvent':'scwin.udc_portDistrictCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_portDistrictCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_portDistrictCd_onblurNameEvent',UpperFlagCode:'1',allowCharCode:'A-Za-z0-9',maxlengthCode:'3'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용일자 ',style:'',tagname:'span'}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_adptDt',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM/dd'}}]}]}]},{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 400px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'협정고시요율목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_basetrf',grdDownOpts:'{"fileName":"협정고시요율목록.xlsx","sheetName": "협정고시요율목록","type":"2+4+8+16"}',gridUpYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_basetrf',id:'gr_basetrf',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true','ev:onrowindexchange':'scwin.gr_basetrf_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'항구권역',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'적용일자',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'portDistrictNm',inputType:'text',removeBorderStyle:'false',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'adptDt',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'####/##/##'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'협정고시요율상세목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_basetrfList',gridUpYn:'N',grdDownOpts:'{"fileName":"협정고시요율상세목록.xlsx","sheetName": "협정고시요율상세목록","type":"2+4+8+16"}',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_basetrfList',id:'gr_basetrfList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true','ev:onrowindexchange':'scwin.gr_basetrfList_onrowindexchange',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_basetrfList_ontextimageclick','ev:onviewchange':'scwin.gr_basetrfList_onviewchange','ev:oncellclick':'scwin.gr_basetrfList_oncellclick','ev:oncellindexchange':'scwin.gr_basetrfList_oncellindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type1',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'항목',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type1',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'적용대상',width:'100'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',style:'',id:'column22',value:'품목코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type2',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'품목',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type1',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column21',inputType:'text',style:'',value:'적용율(%)',width:'100'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column19',inputType:'text',style:'',value:'적용금액',width:'100'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',style:'',id:'column24',value:'단위명',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'value delim label',id:'selpchItemCd',inputType:'select',removeBorderStyle:'false',textAlign:'left',width:'100',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'value delim label',id:'adptStdSelpchItemCd',inputType:'select',removeBorderStyle:'false',width:'100',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',style:'',id:'commCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commNm',inputType:'textImage',removeBorderStyle:'false',textAlign:'left',width:'100',maxLength:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'unitCd',inputType:'textImage',removeBorderStyle:'false',textAlign:'right',width:'70',mandatory:'true',maxLength:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'comnTrfRt',inputType:'text',style:'',textAlign:'right',value:'',width:'100',displayFormat:'#,##0.##',dataType:'float',excelCellType:'number',maxLength:'3.2',excelFormat:'#,##0.##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'comnTrf',inputType:'text',style:'',textAlign:'right',value:'',width:'100',displayFormat:'#,##0.##',dataType:'float',excelCellType:'number',maxLength:'13.2',excelFormat:'#,##0.##'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',style:'',id:'unitNm',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_basetrfList',btnDelYn:'N',btnCancelYn:'Y',btnRowAddObj:'btn_add',btnRowDelObj:'btn_del',btnCancelObj:'btn_cls',rowDelUserAuth:'D',rowAddUserAuth:'C',delObjType:'data',rowAddObjType:'data',rowDelObjType:'data',cancelObjType:'data',rowAddFunction:'scwin.f_addrow'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_new',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_new_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_edit',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_edit_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_gridTariff',codeId:'',id:'udc_comCodeGrid',nameId:'',objTypeCode:'data',popupID:'gridTariffPopup',selectID:'',style:'display: none;'}}]}]}]})