/*amd /ui/il/pfm/pefm/pe_116_01_01b.xml 44093 66446809940a2fdf0b75fafefa6923033b134a2a416ea5e1543605c797905be5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ioClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seaair',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hblno',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblno',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'customer',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'consignee',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'notify',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'etaFrom',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'etaTo',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dept',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'retrievalYn',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieve_result'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblno',name:'House B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'Sea/Air',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customer',name:'CUSTOMER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customernm',name:'customernm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'consignee',name:'consignee',dataType:'text'}},{T:1,N:'w2:column',A:{id:'notify',name:'notify',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etd',name:'etd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eta',name:'eta',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pol',name:'POL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pod',name:'POD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dept',name:'dept',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptnm',name:'deptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blType',name:'blType',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retrievalDoc',name:'retrievalDoc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retrievalDt',name:'retrievaldt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidanceFilePath',name:'evidanceFilePath',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidance',name:'evidance',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deliveryOrderFilePath',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deliveryOrder',name:'DELIVERY ORDER',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dataMap1'},E:[{T:1,N:'w2:keyInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/il.pfm.pefm.RetrieveImportDocCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"},{"id":"ds_retrieve_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieve_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.pfm.pefm.SaveImportDocCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_retrieve_result","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @method
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  //  debugger;
  scwin.paramData = $c.data.getParameter($p);
  //alert("globalVars");
  // 세션정보 가져오기
  const loginDTO = $c.data.getMemInfo($p);
  scwin.p_lobranCd = loginDTO.lobranCd ?? ''; // 귀속부서코드 
  scwin.p_lobranNm = loginDTO.lobranNm ?? ''; // 귀속부서 명

  const codeOptions = [
  //gr_retrieve_result
  {
    grpCd: "IL049",
    compID: "gr_retrieve_result:retrievalDoc"
  }];
  $c.data.setCommonCode($p, codeOptions);

  // 세션정보 가져오기
  scwin.p_hhio = scwin.paramData["hhio"];
  // 서버날짜 가져오기
  scwin.strCurDate = $c.date.getServerDateTime($p, 'yyyyMMdd');
  scwin.strPreDate = $c.date.addDate($p, scwin.strCurDate, -2);
  //   scwin.strPreDate = $c.date.addMonth(scwin.strCurDate, -2).substring(0, 6) + "01";
};
scwin.onpageload = function () {
  scwin.globalVars();
  scwin.f_OnLoad();
};
scwin.f_OnLoad = function () {
  //   scwin.f_setDSHeader( ds_retrieve, "1" );
  //f_setDSHeader( ds_houseblList, "2" );   
  scwin.f_set("ONLOAD");

  //    ed_etaFrom.setValue(scwin.strCurDate);
  //    ed_etaTo.setValue(scwin.strPreDate);

  lc_seaair.setValue("");
  lc_ioClsCd.setValue("I");
};
//---------------------------------------------------------
// function name : f_set
// function desc : 화면 open시 초기 데이타 setting
//---------------------------------------------------------
scwin.f_set = function (gubun) {
  switch (gubun) {
    case "ONLOAD":
      $c.gus.cfDisableKey($p);
      ds_retrieve.set("etaFrom", scwin.strPreDate);
      ds_retrieve.set("etaTo", scwin.strCurDate);
      //        ed_etaFrom.setValue(scwin.strCurDate);
      //        ed_etaTo.setValue(scwin.strPreDate);        
      break;
    case "RETRIEVE":
      $c.gus.cfcfcfEnableAllBtn($p);
      break;
    case "DELETE":
      $c.gus.cfDisableBtn($p);
      break;
  }
};
//---------------------------------------------------------
// 조회
//---------------------------------------------------------    
scwin.f_Retrieve = function () {
  // VALIDATE
  /*
      if(!$c.gus.cfValidate([ed_etaFrom, ed_etaTo])){  //validExp 가 yes일때 check
          return;
      }	
  */
  //debugger          
  if (!$c.gus.cfIsAfterDate($p, ed_etaFrom.getValue().trim(), ed_etaTo.getValue().trim())) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_048, new Array("ETA From", "ETA To")); //@은(는) 보다 작아야 합니다.
    //    udc_etaDate.Focus();
    return false;
  }
  if (chb_retrievalYn.getValue() == "1") {
    ds_retrieve.set('retrievalYn', "1");
  } else {
    ds_retrieve.set('retrievalYn', "0");
  }
  if (lc_seaair.getValue() == "S") {
    ds_retrieve.set('seaair', "S");
  } else if (lc_seaair.getValue() == "A") {
    ds_retrieve.set('seaair', "A");
  } else {
    ds_retrieve.set('seaair', "ALL");
  }
  $c.sbm.execute($p, sbm_Retrieve);
  //   tr_retrieve.post();  
};
//---------------------------------------------------------
// 저장
//---------------------------------------------------------    
scwin.f_Save = function () {
  if (ds_retrieve_result.getRowStatus(ds_retrieve_result.getRowPosition()) != 'U') {
    $c.win.alert($p, "변경된 내역이 없습니다.");
    return false;
  }
  for (var i = 0; i <= ds_retrieve_result.getRowCount(); i++) {
    if (ds_retrieve_result.getRowStatus(i) == 'U' || ds_retrieve_result.getRowStatus(i) == 'I') {
      if (ds_retrieve_result.getCellData(i, "retrievalDt") == "") {
        $c.win.alert($p, "회수일자는 필수 입력 사항입니다.");
        return false;
      }
      if (ds_retrieve_result.getCellData(i, "blType") == "") {
        $c.win.alert($p, "B/L Type은 필수 입력 사항입니다.");
        return false;
      }
      if (ds_retrieve_result.getCellData(i, "retrievalDoc") == "") {
        $c.win.alert($p, "회수서류 종류는 필수 입력 사항입니다.");
        return false;
      }
    }
  }
  $c.sbm.execute($p, sbm_save);
  //    if($c.win.confirm("저장하시겠습니까?")){	
  //   tr_save.post();  
  //    }
};
//-------------------------------------------------------------------------
// function name : f_Download
//-------------------------------------------------------------------------
scwin.f_Download = function (gubun) {
  var row = ds_retrieve_result.getRowPosition();
  //debugger;    
  if (row < 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["첨부파일 행"]);
    return;
  } else {
    switch (gubun) {
      case 1:
        var fileName = ds_retrieve_result.getCellData(ds_retrieve_result.getRowPosition(), "evidance");
        var filePath = ds_retrieve_result.getCellData(ds_retrieve_result.getRowPosition(), "evidanceFilePath");
        console.log("filePath - fileName " + filePath + " - " + fileName);
        if (filePath.trim().length == 0) {
          $c.gus.cfAlertMsg($p, "선택하신 " + row + "행에 파일이 등록되어 있지 않습니다.");
        } else {
          if (filePath.indexOf("/") > 0) {
            fileName += filePath.substring(filePath.indexOf("/"), filePath.indexOf("/") + 4);
            $c.gus.cfDownloadFile($p, fileName, filePath);
          }
        }
        break;
      case 2:
        var fileName = ds_retrieve_result.getCellData(ds_retrieve_result.getRowPosition(), "deliveryOrder");
        var filePath = ds_retrieve_result.getCellData(ds_retrieve_result.getRowPosition(), "deliveryOrderFilePath");
        if (filePath == "") {
          $c.gus.alert($p, "선택하신 " + row + "행에 파일이 등록되어 있지 않습니다.");
        } else {
          if (filePath.indexOf("/") > 0) {
            fileName += filePath.substring(filePath.indexOf("/"), filePath.indexOf("/"));
            $c.gus.cfDownloadFile($p, fileName, filePath);
          }
        }
        break;
    }
  }
};
//---------------------------------------------------------
// 조회 조건 지우기
//---------------------------------------------------------
scwin.f_FieldClear = function () {
  //    $c.gus.cfInitObjects(tb_retrieve,[lc_seaair,lc_ioClsCd,ed_etaFrom,ed_etaTo,ed_blno,ed_mblno,ed_cnd_ed_custCd,ed_cnd_txt_custNm,ed_consignee,txt_consignee,ed_notify,txt_notify,cnd_ed_dept,cnd_ed_deptnm]); // 조회조건의 테이블을 초기화. 
  $c.gus.cfInitObjects($p, tb_retrieve, null); // 조회조건의 테이블을 초기화. 
};
//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_PopUp = function (disGubun, chgGubun) {
  var rtnList = new Array();
  switch (disGubun) {
    case "Customer":
      udc_custCd.setSelectId('retrieveEngClntInfo');
      udc_custCd.ilCommonPopUp(scwin.udc_custCd_callBackFunc, ed_cnd_ed_custCd.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      ed_cnd_txt_custNm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '10',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Customer Code,Customer Name,Address1,Address2,Address3,Address4,Tel,,,CRN',
      // Title순서	                                                           
      '140,300,100,100,100,100,100,,,100',
      // 보여주는 각 컬럼들의 폭	                                               
      '8,9',
      // 컬럼중에서 숨기는	컬럼 지정	                                       
      null,
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
      '500',
      // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
      '500',
      // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
      null,
      // 윈도우 위치 Y좌표	                                                   
      null,
      // 윈도우 위치 X좌표                                                       
      null,
      // 중복체크여부	("F")                                                      
      "F",
      // 전체검색허용여부	("F")                                                  
      'Customer search,Customer Code,Customer Name');
      break;
    case "Consignee":
      udc_consignee.setSelectId('retrieveEngClntInfo');
      udc_consignee.ilCommonPopUp(scwin.udc_consignee_callBackFunc, ed_consignee.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      txt_consignee.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '10',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Consignee Code,Consignee Name,Address1,Address2,Address3,Address4,Tel,,,CRN',
      // Title순서	                                                           
      '140,300,100,100,100,100,100,,,100',
      // 보여주는 각 컬럼들의 폭	                                               
      '8,9',
      // 컬럼중에서 숨기는	컬럼 지정	                                       
      null,
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
      '500',
      // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
      '500',
      // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
      null,
      // 윈도우 위치 Y좌표	                                                   
      null,
      // 윈도우 위치 X좌표                                                       
      null,
      // 중복체크여부	("F")                                                      
      "F",
      // 전체검색허용여부	("F")                                                  
      'Consignee search,Consignee Code,Consignee Name');
      $c.gus.cfSetReturnValue($p, rtnList, ed_consignee, txt_consignee);
      break;
    case "Notify":
      udc_ntcd.setSelectId('retrieveEngClntInfo');
      udc_ntcd.ilCommonPopUp(scwin.callbackNotify, ed_notify.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      txt_notify.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '10',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Notify Code,Notify Name,Address1,Address2,Address3,Address4,Tel,,,CRN',
      // Title순서	                                                           
      '140,300,100,100,100,100,100,,,100',
      // 보여주는 각 컬럼들의 폭	                                               
      '8,9',
      // 컬럼중에서 숨기는	컬럼 지정	                                       
      null,
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
      '500',
      // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
      '500',
      // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
      null,
      // 윈도우 위치 Y좌표	                                                   
      null,
      // 윈도우 위치 X좌표                                                       
      null,
      // 중복체크여부	("F")                                                      
      "F",
      // 전체검색허용여부	("F")                                                  
      'Notify search,Notify Code,Notify Name');
      $c.gus.cfSetReturnValue($p, rtnList, ed_notify, txt_notify);
      break;
    case "DEPT":
      //retriveDepartmentCodeList
      udc_dept.setSelectId('retrieveEngClntInfo');
      udc_dept.ilCommonPopUp(scwin.udc_dept_callBackFunc, cnd_ed_dept.getValue().trim(), cnd_ed_deptnm.getValue(), chgGubun, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, "F", "DEPT,Code,Name");
      break;
  }
};
//---------------------------------------------------------
// 공통팝업 열기
//---------------------------------------------------------   
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var rtnList = new Array();
  switch (gubun1) {
    case "DEPT":
      udc_dept.setSelectId('retrieveOpDeptCdInfo');
      udc_dept.ilCommonPopUp(scwin.udc_dept_callBackFunc, cnd_ed_dept.getValue().trim(), cnd_ed_deptnm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "DEPT,Code,Name", pNoDataCloseTF);
      break;
  }
};
//---------------------------------------------------------
// 엑셀다운로드
//---------------------------------------------------------
scwin.f_downExcelSheet = function () {
  var vObjGrd;
  var sheetTitle;
  var cntRow = ds_retrieve_result.getRowCount();
  if (cntRow != 0) {
    //       cfrm = $c.gus.confirm("수입서류 관리대장 목록을 EXCEL로 다운로드 받으시겠습니까?");
    //debugger;            
    //            if(cfrm){
    const options = {
      fileName: "수입서류 관리대장.xlsx",
      sheetName: "수입서류 관리대장"
    };
    $c.data.downloadGridViewExcel($p, gr_retrieve_result, options);
    //           }
  } else {
    $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.  
  }
};
//-------------------------------------------------------------------------
// function	name : f_BeforePopUpEd2
// function	desc : 공통팝업 열기 전에 체크- TextBox onchange 이벤트	발생시
//					nmObj-코드명(text),	cdObj-코드(emedit),	gubun1
//-------------------------------------------------------------------------
scwin.f_BeforePopUpEd2 = function (nmObj, cdObj, gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var cdObjVal = cdObj.getValue().trim();
  if (cdObjVal == "") {
    nmObj.setValue("");
  } else {
    nmObj.setValue("");
    let cd = nmObj;
    let nm = cdObj;
    scwin.f_PopUp(gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF, cd, nm);
  }
};
//---------------------------------------------
// 조회결과처리
//--------------------------------------------
scwin.sbm_Retrieve_submitdone = function (e) {
  //debugger
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_retrieve_result.getRowCount() > 0) {
      totalRows.setValue(ds_retrieve_result.getRowCount());
    } else {
      $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다. 
      totalRows.setValue(0);
    }
  }
};
//------------------------------------------
// 저장결과처리
//------------------------------------------
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  } else {
    $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
  }
};
//-------------------------------------------------
// 저장 에러처리
//-------------------------------------------------
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
//------------------------------------------------
// 조회 버튼 클릭
//------------------------------------------------
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
//--------------------------------------------------
// 휴지통 버튼 클릭
//-------------------------------------------------
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
//-------------------------------------------------------------------------
// function name : f_fileSet 을 그리드 클릭이벤트에 반영
// function desc : 파일 첨부하기
//------------------------------------------------------------------------- 
scwin.gr_retrieve_result_oncellclick = function (rowIndex, columnIndex, columnId) {};

// Customer
scwin.udc_custCd_onblurCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = ed_cnd_ed_custCd.getValue().trim();

  // if (ed_cnd_ed_custCd.Modified) {
  if (strClntNo.length > 0) {
    scwin.f_PopUp('Customer', 'T');
  } else {
    ed_cnd_txt_custNm.setValue("");
  }
};
scwin.udc_custCd_onclickEvent = function (e) {
  scwin.f_PopUp('Customer', 'T');
};
scwin.udc_custCd_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('Customer', 'T');
};

// consignee
scwin.ed_consignee_onblurCodeEvent = function (e) {
  let strClntNo = "";
  strClntNo = ed_consignee.getValue().trim();
  if (strClntNo.length() > 0) {
    txt_consignee.setValue("");
    scwin.f_PopUp('Consignee', 'T');
  } else {
    txt_consignee.setValue("");
  }
};
// notify
scwin.ed_notify_onblurCodeEvent = function (e) {
  let strClntNo = "";
  strClntNo = ed_notify.getValue().trim();
  if (strClntNo.length() > 0) {
    txt_notify.setValue("");
    scwin.f_PopUp('Notify', 'T');
  } else {
    txt_notify.setValue("");
  }
};
scwin.gr_retrieve_result_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "evidance":
      scwin.f_Download(1);
      break;
    case "deliveryOrder":
      scwin.f_Download(2);
      break;
  }
};
// Customer
scwin.udc_custCd_onblurCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = ed_cnd_ed_custCd.getValue().trim();

  // if (ed_cnd_ed_custCd.Modified) {
  if (strClntNo.length > 0) {
    scwin.f_PopUp('Customer', 'T');
  } else {
    ed_cnd_txt_custNm.setValue("");
  }
};
scwin.udc_custCd_onclickEvent = function (e) {
  scwin.f_PopUp('Customer', 'T');
};
scwin.udc_custCd_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('Customer', 'T');
};
scwin.udc_ntcd_onblurCodeEvent = function (e) {
  scwin.f_PopUp('Notify', 'T');
};
scwin.udc_ntcd_onclickEvent = function (e) {
  scwin.f_PopUp('Notify', 'T');
};
scwin.udc_ntcd_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('Notify', 'T');
};
scwin.udc_custCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cnd_ed_custCd, ed_cnd_txt_custNm);
};
//------------------------
// Consignee callback
//------------------------
scwin.udc_consignee_callBackFunc = function (rtnList) {
  //   $c.gus.cfSetReturnValue(rtnList, ed_consignee,txt_consignee);
  $c.gus.cfSetReturnValue($p, rtnList, ed_consignee, txt_consignee);
};
//------------------------
// callbackNotify
//------------------------
scwin.callbackNotify = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_notify, txt_notify);
};
scwin.udc_dept_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_dept, cnd_ed_deptnm);
};
scwin.udc_consignee_onblurCodeEvent = function (e) {
  scwin.f_PopUp('Consignee', 'T');
};
scwin.udc_consignee_onclickEvent = function (e) {
  scwin.f_PopUp('Consignee', 'T');
};
scwin.udc_consignee_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('Consignee', 'T');
};
scwin.udc_dept_onblurCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = cnd_ed_dept.getValue().trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("DEPT", "T", "F", "F");
  } else {
    cnd_ed_deptnm.setValue("");
  }
};
scwin.udc_dept_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('DEPT', 'F', 'F', 'F');
};
scwin.udc_dept_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('DEPT', 'F', 'F', 'F');
};
//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "") {
      return;
    }
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명
    //strCd.hidVal = rtnList[0];  // 히든값
  } else {
    strCd.setValue("");
    strNm.setValue("");
    //strCd.hidVal = "";
  }
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.ed_blno_onblur = function (e) {
  var val = ed_blno.getValue();
  ed_blno.setValue(val.toUpperCase());
};
scwin.ed_blno_onkeydown = function (e) {
  var val = ed_blno.getValue();
  ed_blno.setValue(val.toUpperCase());
};
scwin.ed_mblno_onkeydown = function (e) {
  var val = ed_mblno.getValue();
  ed_mblno.setValue(val.toUpperCase());
};
scwin.chb_retrievalYn_onchange = function (info) {
  ds_retrieve.set('retrievalYn', chb_retrievalYn.getValue());
  //    alert("retrievalYn ["+ds_retrieve.get('retrievalYn')+"]");
};
scwin.ed_dept_onblur = function (e) {
  scwin.f_OpenCommonPopUp('DEPT', 'F', 'F', 'F');
};
scwin.gr_retrieve_result_ontextimageclick = async function (rowIndex, columnIndex) {
  let colid = $c.util.getComponent($p, this.id).getColumnID(columnIndex);
  //   let rtnList = new Array();
  //alert("colid ["+colid+"]"); 
  switch (colid) {
    case "retrievalDt":
      //      $c.gus.cfOpenCalendar(gr_retrieve_result, rowIndex, columnId);
      break;
    case "evidance":
      var paramObject = new Object();
      paramObject.rstdata = ds_retrieve_result.getAllJSON(); //ds_retrieve_result.getRowJSON(ds_retrieve_result.getRowPosition());
      paramObject.row = ds_retrieve_result.getRowPosition();
      paramObject.houseNo = ds_retrieve_result.getCellData(ds_retrieve_result.getRowPosition(), 'hblno');
      let win_url = "/ui/il/pfm/pefm/pe_116_01_01p.xml";
      let data = {};
      let opts = {
        id: "smpPop",
        popupName: "첨부 파일 등록",
        modal: true,
        type: "browserPopup",
        width: 870,
        height: 650,
        title: "첨부 파일 등록"
      };
      let rtnList = await $c.win.openPopup($p, win_url, opts, paramObject);
      //debugger;           
      //alert()
      if (rtnList) {
        //                   ds_retrieve_result.setJSON(rtnList.getAllJSON());
        var evidance = ds_retrieve_result.getCellData(ds_retrieve_result.getRowPosition(), 'hblno') + "_증빙";
        ds_retrieve_result.setCellData(ds_retrieve_result.getRowPosition(), 'evidanceFilePath', rtnList['filePath']);
        //       ds_retrieve_result.setCellData(ds_retrieve_result.getRowPosition(), 'evidance', rtnList['fileName']);
        ds_retrieve_result.setCellData(ds_retrieve_result.getRowPosition(), 'evidance', evidance);
        gr_retrieve_result.refresh();
      }
      break;
    case "deliveryOrder":
      var paramObject1 = new Object();
      paramObject1.ds_retrieve_result = ds_retrieve_result.getRowJSON(ds_retrieve_result.getRowPosition());
      paramObject1.rowPosition = ds_retrieve_result.getRowPosition();
      let win_url1 = "/ui/il/pfm/pefm/pe_116_01_01p.xml";
      let data1 = {};
      let opts1 = {
        id: "smpPop",
        popupName: "첨부 파일 등록",
        modal: true,
        type: "browserPopup",
        width: 870,
        height: 335,
        title: "첨부 파일 등록"
      };
      let rtnList1 = await $c.win.openPopup($p, win_url1, opts1, paramObject1);
      if (rtnList1) {
        var evidance = ds_retrieve_result.getCellData(ds_retrieve_result.getRowPosition(), 'hblno') + "_증빙";

        //   ds_retrieve_result.setRowJSON(ds_retrieve_result.getRowPosition(), rtnList1);
        ds_retrieve_result.setCellData(ds_retrieve_result.getRowPosition(), 'deliveryOrderFilePath', rtnList['filePath']);
        //        ds_retrieve_result.setCellData(ds_retrieve_result.getRowPosition(), 'deliveryOrder', rtnList['fileName']);
        ds_retrieve_result.setCellData(ds_retrieve_result.getRowPosition(), 'evidance', evidance);
        gr_retrieve_result.refresh();
      }
      break;
    default:
      break;
  }
};
scwin.ed_mblno_onblur = function (e) {
  var val = ed_mblno.getValue();
  ed_mblno.setValue(val.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tb_retrieve',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Air/Sea',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'','data-length':'1',displayMode:'value delim label',editType:'select','ev:onchange':'scwin.acb_cnd_lc_seaAir_onchange',id:'lc_seaair',objType:'data',ref:'data:ds_retrieve.seaAir',search:'start',style:'width:150px;',submenuSize:'auto',allowChar:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ALL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Sea'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Export/Import',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{chooseOption:'',chooseOptionLabel:'ALL',class:'','data-length':'1',displayMode:'value delim label',editType:'select',id:'lc_ioClsCd',objType:'data',ref:'data:ds_retrieve.ioClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETA',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'etaFrom',objTypeTo:'data',mandatoryTo:'true',refDataMap:'ds_retrieve',edFromId:'ed_etaFrom',edToId:'ed_etaTo',mandatoryFrom:'true',objTypeFrom:'data',style:'',id:'udc_etaDate',refEdDt:'etaTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_blno',style:'width: 150px;',displayFormat:'####################',ref:'data:ds_retrieve.hblno',ariaLabel:'',allowChar:'0-9a-zA-Z','ev:onblur':'scwin.ed_blno_onblur','ev:onkeydown':'scwin.ed_blno_onkeydown',maxlength:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mblno',style:'width: 150px;',displayFormat:'####################',ref:'data:ds_retrieve.mblno',ariaLabel:'',allowChar:'0-9a-zA-Z','ev:onkeypress':'','ev:onkeydown':'scwin.ed_mblno_onkeydown',maxlength:'20','ev:onblur':'scwin.ed_mblno_onblur','ev:onchange':''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{refDataCollection:'ds_retrieve','ev:onviewchangeNameEvent':'scwin.udc_custCd_onviewchangeNameEvent',code:'customer',popupID:'',btnId:'img_cscd','ev:onclickEvent':'scwin.udc_custCd_onclickEvent',codeId:'ed_cnd_ed_custCd',selectID:'',validTitle:'',nameId:'ed_cnd_txt_custNm',style:'',id:'udc_custCd','ev:onblurCodeEvent':'scwin.udc_custCd_onblurCodeEvent',allowCharCode:'0-9',UpperFlagCode:'0',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'0',id:'chb_retrievalYn',ref:'data:ds_retrieve.retrievalYn',renderType:'checkboxgroup',rows:'',selectedindex:'',style:'',value:'1',falseValue:'0','ev:oncheckboxclick':'scwin.chb_retrievalYn_oncheckboxclick','ev:onchange':'scwin.chb_retrievalYn_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'회수건만 조회'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consignee',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'0',allowCharCode:'0-9',btnId:'img_ntcd',code:'consignee',codeId:'ed_consignee','ev:onblurCodeEvent':'scwin.udc_consignee_onblurCodeEvent','ev:onclickEvent':'scwin.udc_consignee_onclickEvent','ev:onviewchangeCodeEvent':'','ev:onviewchangeNameEvent':'scwin.udc_consignee_onviewchangeNameEvent',hideName:'',id:'udc_consignee',nameId:'txt_consignee',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_retrieve',selectID:'consignee',style:'',validExpCode:'',maxlengthCode:'6'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Notify',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{objTypeCode:'data',refDataCollection:'ds_retrieve','ev:onviewchangeNameEvent':'scwin.udc_ntcd_onviewchangeNameEvent',code:'notify',popupID:'',UpperFlagCode:'0',validExpCode:'Notify:no','ev:onviewchangeCodeEvent':'',btnId:'img_ntcd',hideName:'','ev:onclickEvent':'scwin.udc_ntcd_onclickEvent',allowCharCode:'0-9',codeId:'ed_notify',selectID:'notify',objTypeName:'data',nameId:'txt_notify',style:'',id:'udc_ntcd','ev:onblurCodeEvent':'scwin.udc_ntcd_onblurCodeEvent',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Department',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'ed_dept',class:'w2tb_td','ev:onblur':'scwin.ed_dept_onblur'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{maxlengthCode:'6','ev:onviewchangeNameEvent':'scwin.udc_dept_onviewchangeNameEvent',popupID:'',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_dept_onclickEvent',allowCharCode:'0-9a-zA-Z',codeId:'cnd_ed_dept',selectID:'',validTitle:'',nameId:'cnd_ed_deptnm',style:'',id:'udc_dept','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent',refDataCollection:'ds_retrieve',code:'dept'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'수입서류 관리대장',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"수입서류관리대장","type":"4+8+16"}',gridID:'gr_retrieve_result',gridUpYn:'N',grp:'grd_section1',style:'',btnUser:'Y',gridDownYn:'Y',btnPlusYn:'Y',gridDownFn:'scwin.f_downExcelSheet'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_retrieve_result',focusMode:'row',id:'gr_retrieve_result',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncellclick':'','ev:oncelldblclick':'scwin.gr_retrieve_result_oncelldblclick','ev:ontextimageclick':'scwin.gr_retrieve_result_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'Sea/Air',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'Master B/L NO',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'House B/L NO',width:'115'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'CUSTOMER',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'ETD',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'ETA',width:'80'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column48',value:'POL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column46',value:'POD',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column40',value:'DEPARTURE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column42',value:'B/L TYPE',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column56',value:'회수서류',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',value:'회수일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'266',inputType:'text',id:'column52',value:'증빙',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'seaAirCls',inputType:'select',width:'70',ref:'ds_retrieve_result.seaAirCls',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Sea'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'mblno',inputType:'text',width:'130',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblno',inputType:'text',width:'115',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'customernm',inputType:'text',width:'140',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'etd',inputType:'text',width:'80',readOnly:'true',textAlign:'center',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eta',inputType:'text',width:'80',readOnly:'true',textAlign:'center',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'pol',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'pod',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'deptnm',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'140',inputType:'select',id:'blType',displayMode:'label',textAlign:'left',readOnly:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'AIR WAY BILL-TT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'AIR WAY BILL-TT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'AIR WAY BILL-LC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'AIR WAY BILL-LC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ORIGINAL B/L-TT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ORIGINAL B/L-TT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ORIGINAL B/L-LC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ORIGINAL B/L-LC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SURRENDER B/L'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SURRENDER B/L'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SEA WAY BILL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SEA WAY BILL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'선사 DIRECT건'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'선사 DIRECT건'}]}]}]}]},{T:1,N:'w2:column',A:{width:'160',inputType:'select',id:'retrievalDoc',displayMode:'label',textAlign:'left',readOnly:'false',allOption:'false',noResult:'useData',chooseOption:'false',selectedData:'false'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'retrievalDt',displayMode:'label',textAlign:'center',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'266',inputType:'textImage',id:'evidance',displayMode:'label',textAlign:'left',readOnly:'false'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})