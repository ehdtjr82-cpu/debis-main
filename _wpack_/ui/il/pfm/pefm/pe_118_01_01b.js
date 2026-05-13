/*amd /ui/il/pfm/pefm/pe_118_01_01b.xml 39771 555123e2ab56a73fe5ee08141e3afff44f38af5d778fa61c1e88351a682be22d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ioClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seaair',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hblno',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblno',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'customer',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'consignee',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'notify',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'etaFrom',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'etaTo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'etdFrom',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'etdTo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blpic',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dept',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shipper',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntYn',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieve_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'Sea/Air',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioClsCd',name:'I/O',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblno',name:'House',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customer',name:'CUSTOMER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customernm',name:'CUSTOMER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipper',name:'SHIPPER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shippernm',name:'SHIPPER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etd',name:'ETD ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eta',name:'ETA',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pol',name:'POL ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pod',name:'POD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retrievalDoc',name:'첨부파일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dept',name:'DEPARTURE ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptnm',name:'DEPARTMENT ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntYn',name:'관리대상여부 ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pic',name:'B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picNm',name:'PIC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.pfm.pefm.RetrieveImportExportDocCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve", "key":"IN_DS1"}, {"id":"ds_retrieve_result", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieve_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  scwin.f_set("ONLOAD");
  lc_seaair.setValue("");
  lc_ioClsCd.setValue("");
};

//---------------------------------------------------------
// UDC
//---------------------------------------------------------    
scwin.onUdcCompleted = function () {
  today = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  ed_etaFrom.setValue(WebSquare.date.dateAdd(today, -2));
  ed_etaTo.setValue(today);
};

//---------------------------------------------------------
// 사용자 이벤트
//---------------------------------------------------------    
scwin.f_set = function (gubun) {
  switch (gubun) {
    case "ONLOAD":
      $c.gus.cfDisableKey($p);
      break;
    case "RETRIEVE":
      $c.gus.cfEnableAllBtn($p);
      break;
    case "DELETE":
      $c.gus.cfDisableBtn($p);
      break;
  }
};
scwin.f_Retrieve = function () {
  var startY = "";
  var startM = "";
  var startD = "";
  var endY = "";
  var endM = "";
  var endD = "";
  var startDate = "";
  var endDate = "";
  var betweenDay = "";

  // VALIDATE
  if (!$c.gus.cfValidate($p, [ed_etaFrom, ed_etaTo])) {
    //validExp 가 yes일때 check
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_etaFrom.getValue(), ed_etaTo.getValue())) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_048, new Array("ETA From", "ETA To")); //@은(는) 보다 작아야 합니다.
    ed_etaFrom.focus();
    return false;
  }
  startY = ed_etaFrom.getValue().substring(0, 4);
  startM = ed_etaFrom.getValue().substring(4, 6);
  startD = ed_etaFrom.getValue().substring(6, 8);
  endY = ed_etaTo.getValue().substring(0, 4);
  endM = ed_etaTo.getValue().substring(4, 6);
  endD = ed_etaTo.getValue().substring(6, 8);
  startDate = new Date(startY, startM - 1, startD);
  endDate = new Date(endY, endM - 1, endD);
  betweenDay = (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24;
  if (betweenDay > 61) {
    alert("ETA 조회기간을 두달 이내로 설정 해 주세요.");
    return;
  }

  // VALIDATE
  if (!$c.gus.cfValidate($p, [ed_etdFrom, ed_etdTo])) {
    //validExp 가 yes일때 check
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_etdFrom.getValue(), ed_etdTo.getValue())) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_048, new Array("ETD From", "ETD To")); //@은(는) 보다 작아야 합니다.
    ed_etdFrom.focus();
    return false;
  }
  startY = ed_etdFrom.getValue().substring(0, 4);
  startM = ed_etdFrom.getValue().substring(4, 6);
  startD = ed_etdFrom.getValue().substring(6, 8);
  endY = ed_etdTo.getValue().substring(0, 4);
  endM = ed_etdTo.getValue().substring(4, 6);
  endD = ed_etdTo.getValue().substring(6, 8);
  startDate = new Date(startY, startM - 1, startD);
  endDate = new Date(endY, endM - 1, endD);
  betweenDay = (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24;
  if (betweenDay > 61) {
    alert("ETD 조회기간을 두달 이내로 설정 해 주세요.");
    return;
  }
  if ("" == ed_etaFrom.getValue() && "" == ed_etaTo.getValue() && "" == ed_etdFrom.getValue() && "" == ed_etdTo.getValue()) {
    alert("ETA 또는 ETD를 입력하세요.");
    return;
  }

  // 		if(chb_retrievalYn.checked == true)	{
  // 			ds_retrieve.NameValue(1, "retrievalYn") = 1;
  // 		}else	{
  // 			ds_retrieve.NameValue(1, "retrievalYn") = 0;
  // 		}  		
  ds_retrieve.set("ioClsCd", lc_ioClsCd.getValue());
  ds_retrieve.set("seaair", lc_seaair.getValue());
  ds_retrieve.set("hblno", ed_blno.getValue());
  ds_retrieve.set("mblno", ed_mblno.getValue());
  ds_retrieve.set("customer", ed_customer.getValue());
  ds_retrieve.set("consignee", ed_consignee.getValue());
  ds_retrieve.set("notify", ed_notify.getValue());
  ds_retrieve.set("etaFrom", ed_etaFrom.getValue());
  ds_retrieve.set("etaTo", ed_etaTo.getValue());
  ds_retrieve.set("etdFrom", ed_etdFrom.getValue());
  ds_retrieve.set("etdTo", ed_etdTo.getValue());
  ds_retrieve.set("blpic", ed_blpic.getValue());
  ds_retrieve.set("dept", ed_dept.getValue());
  ds_retrieve.set("shipper", ed_shipper.getValue());
  ds_retrieve.set("mgntYn", lc_mgntYn.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_PopUp = function (disGubun, chgGubun) {
  switch (disGubun) {
    case "Customer":
      udc_customer.setSelectId("retrieveEngClntInfo"); // XML상의 SELECT ID	
      udc_customer.ilCommonPopUp(scwin.udc_customer_callBackFunc,
      // 콜백 함수                                                   							
      ed_customer.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      txt_customer.getValue(),
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
      udc_consignee.setSelectId("retrieveEngClntInfo"); // XML상의 SELECT ID   
      udc_consignee.ilCommonPopUp(scwin.udc_consignee_callBackFunc,
      // 콜백 함수                                            							
      ed_consignee.getValue().trim(),
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
      break;
    case "Notify":
      udc_notify.setSelectId("retrieveEngClntInfo"); // XML상의 SELECT ID      
      udc_notify.ilCommonPopUp(scwin.udc_notify_callBackFunc,
      // 콜백 함수                                           							
      ed_notify.getValue().trim(),
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
      break;
    case "Shipper":
      udc_shipper.setSelectId("retrieveEngClntInfo"); // XML상의 SELECT ID
      udc_shipper.ilCommonPopUp(scwin.udc_shipper_callBackFunc,
      // 콜백 함수
      ed_shipper.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      txt_shippernm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '10',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Shipper Code,Shipper Name,Address1,Address2,Address3,Address4,Tel,,,CRN',
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
      'Shipper search,Shipper Code,Shipper Name');
      break;
    case "B/L PIC":
      udc_blpic.setSelectId("retrieveEmpInfo"); // XML상의 SELECT ID
      udc_blpic.ilCommonPopUp(scwin.udc_blpic_callBackFunc,
      // 콜백 함수
      ed_blpic.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value
      txt_blpic.getValue(),
      // 화면에서의 ??? Name Element의	Value
      "T",
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      '4',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      "B/L PIC",
      // Title순서
      //'80,200,120,300',               // 보여주는 각 컬럼들의 폭
      '100,350',
      // 보여주는 각 컬럼들의 폭
      null,
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
      null); // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      break;
  }
};
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  if (gubun1 == "DEPT") {
    udc_dept.setSelectId("retrieveOpDeptCdInfo"); // XML상의 SELECT ID
    udc_dept.ilCommonPopUp(scwin.udc_dept_callBackFunc // 콜백 함수
    , ed_dept.getValue() // 화면에서의 ??? Code Element의 Value
    , txt_dept.getValue() // 화면에서의 ??? Name Element의 Value
    , pWinCloseTF // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
    , "2" // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
    , "Code, Name" // Title순서
    , "80, 230" // 보여주는 각 컬럼들의 폭
    , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는 컬럼 지정
    , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의 사용자 정의 폭
    , null // POP-UP뛰을때 우도우의 사용자 정의 높이
    , null // 윈도우 위치 Y좌표
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부 ("F")
    , pAllSearchTF // 전체검색허용여부 ("F")
    , "DEPT,Code,Name" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    , pNoDataCloseTF);
  }
};
scwin.udc_customer_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_customer, txt_customer);
};
scwin.udc_consignee_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_consignee, txt_consignee);
};
scwin.udc_notify_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_notify, txt_notify);
};
scwin.udc_shipper_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_shipper, txt_shippernm);
};
scwin.udc_blpic_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_blpic, txt_blpic);
};
scwin.udc_dept_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dept, txt_dept);
};
scwin.f_BeforePopUpEd2 = function (nmObj, cdObj, gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var cdObjVal = cdObj.getValue().trim();
  if (cdObjVal == "") {
    nmObj.setValue("");
  } else {
    nmObj.setValue("");
    var cd = nmObj;
    var nm = cdObj;
    if (gubun1 == "DEPT") {
      scwin.f_OpenCommonPopUp('DEPT', 'T', 'F', 'F');
    } else {
      scwin.f_PopUp(gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF, cd, nm);
    }
  }
};
scwin.excel = async function () {
  if (ds_retrieve_result.getTotalRow() == 0) return;
  cfrm = await $c.win.confirm($p, "수입서류 관리대장 목록을 EXCEL로 다운로드 받으시겠습니까?");
  if (!cfrm) return;
  $c.data.downloadGridViewExcel($p, gr_retrieve_result, {
    fileName: "수입서류 관리대장",
    sheetName: "수입서류 관리대장",
    hiddenVisible: true
  });
};
scwin.oneditkeyup = function (info, e) {
  this.setValue(e.target.value.toUpperCase());
};
//---------------------------------------------------------
// 컴포넌트 이벤트
//--------------------------------------------------------- 
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.gr_retrieve_result_ontextimageclick = async function (rowIndex, columnIndex) {
  var data = {
    "houseNo": ds_retrieve_result.getCellData(ds_retrieve_result.getRowPosition() || 0, "hblno")
  };
  //상세화면 호출
  var opts = {
    id: "smpPop",
    popupName: "첨부파일관리",
    modal: true,
    type: "browserPopup",
    width: 900,
    height: 650,
    title: "첨부파일관리"
  };
  var result = await $c.win.openPopup($p, "/ui/il/common/xml/ilCommonFilePopup.xml", opts, data);
  scwin.f_Retrieve();
};
scwin.udc_dept_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('DEPT', 'F', 'F', 'F');
};
scwin.udc_blpic_onclickEvent = function (e) {
  scwin.f_PopUp('B/L PIC', 'F');
};
scwin.udc_customer_onclickEvent = function (e) {
  scwin.f_PopUp('Customer', 'F');
};
scwin.udc_shipper_onclickEvent = function (e) {
  scwin.f_PopUp('Shipper', 'F');
};
scwin.udc_consignee_onclickEvent = function (e) {
  scwin.f_PopUp('Consignee', 'F');
};
scwin.udc_notify_onclickEvent = function (e) {
  scwin.f_PopUp('Notify', 'F');
};
scwin.udc_blpic_onviewchangeNameEvent = function (info) {
  if (ed_blpic.getValue() == '') {
    scwin.f_PopUp('B/L PIC', 'F');
  }
};
scwin.udc_shipper_onviewchangeNameEvent = function (info) {
  scwin.f_BeforePopUpEd2(ed_shipper, txt_shippernm, 'Shipper', 'T', 'F', 'F');
};
scwin.udc_customer_onviewchangeNameEvent = function (info) {
  scwin.f_BeforePopUpEd2(ed_customer, txt_customer, 'Customer', 'T', 'F', 'F');
};
scwin.udc_consignee_onviewchangeNameEvent = function (info) {
  scwin.f_BeforePopUpEd2(ed_consignee, txt_consignee, 'Consignee', 'T', 'F', 'F');
};
scwin.udc_notify_onviewchangeNameEvent = function (info) {
  scwin.f_BeforePopUpEd2(ed_notify, txt_notify, 'Notify', 'T', 'F', 'F');
};
scwin.udc_dept_onviewchangeNameEvent = function (info) {
  scwin.f_BeforePopUpEd2(ed_dept, txt_dept, 'DEPT', 'T', 'F', 'F');
};
scwin.btn_Clear_onclick = function (e) {
  lc_ioClsCd.setValue("");
  lc_seaair.setValue("");
  ed_blno.setValue("");
  ed_mblno.setValue("");
  ed_customer.setValue("");
  txt_customer.setValue("");
  ed_consignee.setValue("");
  txt_consignee.setValue("");
  ed_notify.setValue("");
  txt_notify.setValue("");
  ed_etaFrom.setValue("");
  ed_etaTo.setValue("");
  ed_etdFrom.setValue("");
  ed_etdTo.setValue("");
  ed_blpic.setValue("");
  txt_blpic.setValue("");
  ed_dept.setValue("");
  txt_dept.setValue("");
  ed_shipper.setValue("");
  txt_shippernm.setValue("");
  lc_mgntYn.setValue("");
};
scwin.sbm_retrieve_submitdone = function (e) {
  ed_totCnt.setValue(ds_retrieve_result.getTotalRow());
  ds_retrieve_result.sort("eta", 0);
};
scwin.udc_consignee_onblurCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = ed_consignee.getValue();
  if (strClntNo.length > 0) {
    txt_consignee.setValue("");
    scwin.f_PopUp('Consignee', 'T');
  } else {
    txt_consignee.setValue("");
  }
};
scwin.udc_shipper_onblurCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = ed_shipper.getValue();
  if (strClntNo.length > 0) {
    txt_shippernm.setValue("");
    scwin.f_PopUp('Shipper', 'T');
  } else {
    txt_shippernm.setValue("");
  }
};
scwin.udc_notify_onblurCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = ed_notify.getValue();
  if (strClntNo.length > 0) {
    txt_notify.setValue("");
    scwin.f_PopUp('Notify', 'T');
  } else {
    txt_notify.setValue("");
  }
};
scwin.udc_customer_onblurCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = ed_customer.getValue();
  if (strClntNo.length > 0) {
    txt_customer.setValue("");
    scwin.f_PopUp('Customer', 'T');
  } else {
    txt_customer.setValue("");
  }
};
scwin.udc_dept_onblurCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = ed_dept.getValue();
  if (strClntNo.length > 0) {
    txt_dept.setValue("");
    scwin.f_OpenCommonPopUp("DEPT", "T", "F", "F");
  } else {
    txt_dept.setValue("");
  }
};
scwin.udc_blpic_onblurCodeEvent = function (e) {
  scwin.f_PopUp('B/L PIC', 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Air/Sea',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_seaair',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'All'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Sea'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Export/Import',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_ioClsCd',search:'start',style:'width:180px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'All'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETA',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'ed_eta',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_etaFrom',edToId:'ed_etaTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House BL',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_blno',placeholder:'',style:'width:150px;',allowChar:'0-9|a-z|A-Z','ev:oneditkeyup':'scwin.oneditkeyup',maxlength:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L PIC',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_blpic',nameId:'txt_blpic',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_blpic','ev:onclickEvent':'scwin.udc_blpic_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_blpic_onviewchangeNameEvent',allowCharCode:'0-9',maxlengthCode:'7','ev:onblurCodeEvent':'scwin.udc_blpic_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETD',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'ed_etd',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_etdFrom',edToId:'ed_etdTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master BL',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mblno',placeholder:'',style:'width:150px;',allowChar:'0-9|a-z|A-Z','ev:oneditkeyup':'scwin.oneditkeyup',maxlength:'20'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Shipper',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_shipper',nameId:'txt_shippernm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_shipper','ev:onclickEvent':'scwin.udc_shipper_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_shipper_onviewchangeNameEvent',allowCharCode:'0-9',maxlengthCode:'6','ev:onblurCodeEvent':'scwin.udc_shipper_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_customer',nameId:'txt_customer',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_customer','ev:onclickEvent':'scwin.udc_customer_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_customer_onviewchangeNameEvent',allowCharCode:'0-9',maxlengthCode:'6','ev:onblurCodeEvent':'scwin.udc_customer_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consignee',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_consignee',nameId:'txt_consignee',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_consignee','ev:onclickEvent':'scwin.udc_consignee_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_consignee_onviewchangeNameEvent',allowCharCode:'0-9',maxlengthCode:'6','ev:onblurCodeEvent':'scwin.udc_consignee_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Notify',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_notify',nameId:'txt_notify',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_notify','ev:onclickEvent':'scwin.udc_notify_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_notify_onviewchangeNameEvent',allowCharCode:'0-9',maxlengthCode:'6','ev:onblurCodeEvent':'scwin.udc_notify_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Department',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_dept',nameId:'txt_dept',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_dept','ev:onclickEvent':'scwin.udc_dept_onclickEvent',btnId:'btn_dept','ev:onviewchangeNameEvent':'scwin.udc_dept_onviewchangeNameEvent',allowCharCode:'0-9|a-z|A-Z',UpperFlagCode:'1',maxlengthCode:'6','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리대상여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_mgntYn',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'All'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'YES'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'NO'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.btn_Clear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'선적서류 관리대장',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridUpYn:'N',gridID:'gr_retrieve_result',gridDownFn:'scwin.excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrieve_result',id:'gr_retrieve_result',style:'',visibleRowNum:'14',visibleRowNumFix:'true',fixedColumn:'6',autoFit:'allColumn','ev:ontextimageclick':'scwin.gr_retrieve_result_ontextimageclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'kcomcd',inputType:'text',width:'70',hidden:'true',value:'kcomcd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mhno',inputType:'text',width:'70',hidden:'true',value:'mhno'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'Sea/Air',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'I/O',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'Master B/L NO',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'House B/L NO',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'CUSTOMER_CD',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'CUSTOMER',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'SHIPPER_CD',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'SHIPPER',width:'140'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column35',value:'ETD',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column33',value:'ETA',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column31',value:'POL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column29',value:'POD',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'145',inputType:'text',id:'column27',value:'첨부파일',displayMode:'label',class:'txt-red',colSpan:'1',rowSpan:''}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',value:'DEPARTURE_CD',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'DEPARTMENT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column25',value:'관리대상여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column43',value:'B/L PIC',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column41',value:'PIC NAME',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'kcomcd',inputType:'text',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mhno',inputType:'text',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seaAirCls',inputType:'select',width:'80',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Sea'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'ioClsCd',inputType:'select',width:'80',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'mblno',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblno',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'customer',inputType:'text',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'customernm',inputType:'text',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shipper',inputType:'text',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shippernm',inputType:'text',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'etd',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'eta',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pol',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pod',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'retrievalDoc',displayMode:'label',viewType:'icon'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'dept',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'deptnm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'mgntYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'pic',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'picNm',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totCnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})