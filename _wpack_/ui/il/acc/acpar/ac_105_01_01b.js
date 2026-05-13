/*amd /ui/il/acc/acpar/ac_105_01_01b.xml 40465 faadb022fe55a96fe3e7291790ecc915de1fce1dd3adb82f24969c86a1f86e6b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdt',name:'ETD/ETA',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rfno',name:'Invoice;No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpcd',name:'LOD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dscd',name:'DIS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbl',name:'Master',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hbl',name:'House',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pkg',name:'PAKAGE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wht',name:'WEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curr',name:'CURR',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debit',name:'DEBIT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoney',name:'수금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'credit',name:'CREDIT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMoney',name:'지급액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'newBalance',name:'BALANCE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'balance',name:'BALANCE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wonBalance',name:'BALANCE(W)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ptnInvno',name:'참조번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'seaAir',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ioGb',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upperYn',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dept',name:'name7',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.acc.acpar.RetrievePartnerStatementListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition", "key":"IN_DS1"}, {"id":"ds_results", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//해운 항공 구분
scwin.seaair;
//Import / Export 구분
scwin.iogb;
scwin.strCurDate;
scwin.strPreDate;
scwin.loginEmpNo;
scwin.hid_kcomcd = "DBEX";
//---------------------------------------------------------
// 전역변수
//---------------------------------------------------------   
scwin.onpageload = function () {};

//---------------------------------------------------------
// UDC
//---------------------------------------------------------    
scwin.onUdcCompleted = function () {
  //해운 항공 구분
  scwin.seaair = $c.data.getParameter($p, "seaair") == null ? "S" : $c.data.getParameter($p, "seaair");
  //Import / Export 구분
  scwin.iogb = $c.data.getParameter($p, "iogb") == null ? "O" : $c.data.getParameter($p, "iogb");
  today = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strCurDate = today;
  scwin.strPreDate = scwin.getLastDayFromString(today);
  scwin.f_DefaultValue();
  ed_from_dt.focus();
};
scwin.getLastDayFromString = function (yyyymmdd) {
  if (!yyyymmdd || yyyymmdd.length !== 8) return "";
  const year = Number(yyyymmdd.slice(0, 4));
  const month = Number(yyyymmdd.slice(4, 6));

  // 전달 말일 → month - 1 의 0일
  const lastDate = new Date(year, month - 1, 0);
  const y = lastDate.getFullYear();
  const m = String(lastDate.getMonth() + 1).padStart(2, '0');
  const d = String(lastDate.getDate()).padStart(2, '0');
  return `${y}${m}${d}`;
};

//---------------------------------------------------------
// 사용자 함수
//---------------------------------------------------------   
scwin.f_DefaultValue = function () {
  memJson = $c.data.getMemInfo($p);
  console.log("### onpageload :: " + JSON.stringify(memJson));
  // disbursement.style.display = "none";

  scwin.loginEmpNo = memJson.empNo;
  scwin.loginDeptCd = memJson.lobranCd;
  rd_rptgb.setValue("1");
  lc_seaair.setValue(scwin.seaair);
  lc_iogb.setValue(scwin.iogb);
  ed_from_dt.setValue(scwin.strPreDate);
  ed_to_dt.setValue(scwin.strCurDate);
  lc_iogb2.setValue(scwin.iogb);
  ed_from_dt2.setValue(scwin.strPreDate);
  ed_to_dt2.setValue(scwin.strCurDate);

  // 내부거래처 이외에는 user 정보로 read only
  if (memJson.userClsCd != '01') {
    ed_bilgClntNo.setValue(memJson.clntNo);
    txt_bilgClntNm.setValue(memJson.clntNm);
    $c.gus.cfDisableObjects($p, [ed_bilgClntNo, txt_bilgClntNm, img_bilgClntNo]);
    scwin.udc_clnt_onviewchangeCodeEvent();
  } else {
    $c.gus.cfEnableObjects($p, [ed_bilgClntNo, txt_bilgClntNm, img_bilgClntNo]);
  }

  /* TEST */
  // lc_seaair.setValue("");
  // lc_iogb.setValue("A");
  // ed_from_dt.setValue("20101227");
  // ed_to_dt.setValue("20111227");
  // ed_bilgClntNo.setValue("900030");
  // scwin.f_Retrieve();
  /********/
};
scwin.f_Retrieve = function () {
  ds_condition.set("seaAir", lc_seaair.getValue());
  ds_condition.set("ioGb", lc_iogb.getValue());
  ds_condition.set("fromDt", ed_from_dt.getValue());
  ds_condition.set("toDt", ed_to_dt.getValue());
  ds_condition.set("bilgClntNo", ed_bilgClntNo.getValue());
  if (chb_upperYn.checked) {
    ds_condition.set("upperYn", "Y");
  } else {
    ds_condition.set("upperYn", "N");
  }
  ds_condition.set("dept", ed_dept.getValue());
  if (!$c.gus.cfIsAfterDate($p, ed_from_dt.getValue(), ed_to_dt.getValue())) {
    $c.gus.cfAlertMsg($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ed_from_dt.focus();
    return;
  }

  // 검색조건 필수 입력 체크, 동일 날짜 포함 여부 체크                                                                                                                                                                                                                                                                    
  if (!$c.gus.cfValidate($p, [ed_from_dt, ed_to_dt])) {
    return;
  }
  if (ed_from_dt.getValue() == "" || ed_to_dt.getValue() == "") {
    $c.win.alert($p, "Billing Date는 필수 조회 조건 입니다.");
    return false;
  }
  if (ed_bilgClntNo.getValue() == "") {
    $c.win.alert($p, "Partner는 필수 조회 조건 입니다.");
    return false;
  }
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_PopUp = function (disGubun, chgGubun) {
  var rtnList = new Array();
  switch (disGubun) {
    case "bilgClntNo":
      //거래처 팝업(Customer)
      udc_clnt.setSelectId("retrieveEngClntInfo");
      udc_clnt.ilCommonPopUp(scwin.udc_clnt_callbackFunc,
      // XML상의 SELECT ID	                                                   							
      ed_bilgClntNo.getValue(),
      // 화면에서의 ??? Code Element의	Value                                  
      txt_bilgClntNm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '5',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Partner',
      // Title순서	                                                           
      '140,300',
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
      'F',
      // 전체검색허용여부	("F")                                                  
      'Partner Search,Partner Code,Partner Name');
      break;
    case "dept":
      udc_dept.setSelectId("retrieveOpDeptCdInfo");
      udc_dept.ilCommonPopUp(scwin.udc_dept_callbackFunc, ed_dept.getValue(), txt_deptnm.getValue(), "T", '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "Department,Code,Name", "F");
      break;
    case "Liner":
      udc_liner.setSelectId("retrieveEngClntInfo");
      udc_liner.ilCommonPopUp(scwin.udc_liner_callbackFunc,
      // XML상의 SELECT ID	                                                   							
      ed_linerCd.getValue(),
      // 화면에서의 ??? Code Element의	Value                                  
      txt_linerNm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '10',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Liner Code,Liner Name,Address1,Address2,Address3,Address4,Tel,,,CRN',
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
      'Liner search,Liner Code,Liner Name');
      break;
    case "port":
      udc_port.setSelectId("retrievePortInfo");
      udc_port.ilCommonPopUp(scwin.udc_port_callbackFunc, ed_portCd.getValue(), txt_portNm.getValue(), chgGubun, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "Port Code,Code,Name");
      break;
    case "Vessel":
      udc_vsl.setSelectId("retrieveOrdVsslInfo");
      udc_vsl.ilCommonPopUp(scwin.udc_vsl_callbackFunc, ed_vslcd.getValue(), txt_vsl.getValue(), chgGubun, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "Vessel,Code,Name");
      break;
    default:
      break;
  }
};
scwin.udc_clnt_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgClntNo, txt_bilgClntNm);
};
scwin.udc_dept_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dept, txt_deptnm);
};
scwin.udc_liner_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_linerCd, txt_linerNm);
};
scwin.udc_port_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_portCd, txt_portNm);
};
scwin.udc_vsl_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_vslcd, txt_vsl);
};
scwin.f_print = function () {
  emp_no = scwin.loginEmpNo;
  loginDeptCd = ed_dept.getValue();
  if (ed_dept.getValue() == "") {
    loginDeptCd = scwin.loginDeptCd;
  }
  var data = {
    reportName: "",
    odiParam: {},
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      printcommand: true,
      zoom: 90 // 배율 설정
    },
    formParam: {}
  };
  if (rd_rptgb.getValue() == "1") {
    data.reportName = "/il/acc/ac_105_01_01.ozr";
    data.odiParam.KCOMCD = scwin.hid_kcomcd;
    data.odiParam.IOGB = lc_iogb.getValue();
    data.odiParam.SEAAIR = lc_seaair.getValue();
    data.odiParam.FROM_DT = ed_from_dt.getValue();
    data.odiParam.TO_DT = ed_to_dt.getValue();
    data.odiParam.PNCD = ed_bilgClntNo.getValue();
    data.odiParam.DEPT = ed_dept.getValue();
    data.odiParam.EMP_NO = emp_no;
    data.odiParam.PRT_YN = chb_pre.getValue();
    data.odiParam.UPPER_YN = chb_upperYn.getValue() == "1" ? "Y" : "N";
    data.odiParam.LOGIN_DEPT_CD = loginDeptCd;
  } else if (rd_rptgb.getValue() == "2") {
    if (lc_iogb.getValue() == "S") {
      data.reportName = "/il/acc/ac_105_01_02_sea.ozr";
    } else {
      data.reportName = "/il/acc/ac_105_01_02.ozr";
    }
    data.odiParam.KCOMCD = scwin.hid_kcomcd;
    data.odiParam.IOGB = lc_iogb.getValue();
    data.odiParam.SEAAIR = lc_seaair.getValue();
    data.odiParam.FROM_DT = ed_from_dt.getValue();
    data.odiParam.TO_DT = ed_to_dt.getValue();
    data.odiParam.PNCD = ed_bilgClntNo.getValue();
    data.odiParam.DEPT = ed_dept.getValue();
    data.odiParam.PRT_YN = chb_pre.getValue();
    data.odiParam.UPPER_YN = chb_upperYn.getValue() == "1" ? "Y" : "N";
  } else if (rd_rptgb.getValue() == "3") {
    data.reportName = "/il/acc/ac_105_01_01z.ozr";
    data.odiParam.KCOMCD = scwin.hid_kcomcd;
    data.odiParam.IOGB = lc_iogb2.getValue();
    data.odiParam.FROM_DATE = ed_from_dt2.getValue();
    data.odiParam.TO_DATE = ed_to_dt2.getValue();
    data.odiParam.LINERCD = ed_linerCd.getValue();
    data.odiParam.LINERNM = txt_linerNm.getValue();
    data.odiParam.PORTCD = ed_portCd.getValue();
    data.odiParam.PORTNM = txt_portNm.getValue();
    data.odiParam.VESSELCD = ed_vslcd.getValue();
    data.odiParam.VESSEL = txt_vsl.getValue();
    data.odiParam.VOYAGE = txt_vyg.getValue();
  }
  console.log(JSON.stringify(data.odiParam, null, 4));
  // reportName: "/il/acc/ac_105_01_01.ozr",
  // odiParam: {
  //     KCOMCD : scwin.hid_kcomcd
  //     , IOGB : lc_iogb.getValue()
  //     , SEAAIR : lc_seaair.getValue()
  //     , FROM_DT : ed_from_dt.getValue()
  //     , TO_DT : ed_to_dt.getValue()
  //     , PNCD : ed_bilgClntNo.getValue()
  //     , DEPT : ed_dept.getValue()
  //     , EMP_NO : emp_no
  //     , PRT_YN : chb_pre.getValue()
  //     , UPPER_YN : chb_upperYn.getValue() == "1" ? "Y" : "N"
  //     , LOGIN_DEPT_CD : loginDeptCd
  // },
  // viewerParam: {
  //     useprogressbar: false, // 프로그레스바 쓸지 말지
  //     printcommand: true,
  //     zoom: 90, // 배율 설정
  // },
  // formParam: {

  // }
  scwin.openPopup(data);
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//---------------------------------------------------------
// 컴포넌트 이벤트
//---------------------------------------------------------   
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear1_onclick = function (e) {
  ed_bilgClntNo.setValue("");
  txt_bilgClntNm.setValue("");
  ed_dept.setValue("");
  txt_deptnm.setValue("");
  chb_upperYn.setValue("");
};
scwin.sbm_retrieve_submitdone = function (e) {
  rowcnt = ds_results.getTotalRow() || 0;
  if (rowcnt == 0) {
    $c.gus.cfAlertMsg($p, "Data not found.");
    ed_totalRow.setValue(0);
    return;
    // $c.gus.cfAlertMsg(MSG_CM_WRN_002);
  }
  ed_totalRow.setValue(rowcnt + 1); // subtotal 도 포함
  ds_results.sort('stdt', 0);
};
scwin.udc_clnt_onviewchangeCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = ed_bilgClntNo.getValue();
  if (strClntNo.length > 0) {
    txt_bilgClntNm.setValue("");
    scwin.f_PopUp('bilgClntNo', 'T');
  } else {
    txt_bilgClntNm.setValue("");
  }
};
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_PopUp('bilgClntNo', 'F');
};
scwin.udc_clnt_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('bilgClntNo', 'T');
};
scwin.udc_dept_onviewchangeCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = ed_dept.getValue();
  if (strClntNo.length > 0) {
    txt_deptnm.setValue("");
    scwin.f_PopUp('dept', 'T');
  } else {
    txt_deptnm.setValue("");
  }
};
scwin.udc_dept_onclickEvent = function (e) {
  scwin.f_PopUp('dept', 'F');
};
scwin.udc_dept_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('dept', 'T');
};
scwin.udc_liner_onviewchangeCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = ed_linerCd.getValue();
  if (strClntNo.length > 0) {
    txt_linerNm.setValue("");
    scwin.f_PopUp('Liner', 'T');
  } else {
    txt_linerNm.setValue("");
  }
};
scwin.udc_liner_onclickEvent = function (e) {
  scwin.f_PopUp('Liner', 'F');
};
scwin.udc_liner_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('Liner', 'T');
};
scwin.udc_port_onviewchangeCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = ed_portCd.getValue();
  if (strClntNo.length > 0) {
    txt_portNm.setValue("");
    scwin.f_PopUp('port', 'T');
  } else {
    txt_portNm.setValue("");
  }
};
scwin.udc_port_onclickEvent = function (e) {
  scwin.f_PopUp('port', 'F');
};
scwin.udc_port_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('port', 'T');
};
scwin.udc_vsl_onviewchangeCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = ed_vslcd.getValue();
  if (strClntNo.length > 0) {
    txt_vsl.setValue("");
    scwin.f_PopUp("Vessel", 'T');
  } else {
    txt_vsl.setValue("");
  }
};
scwin.udc_vsl_onclickEvent = function (e) {
  scwin.f_PopUp('Vessel', 'F');
};
scwin.udc_vsl_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('Vessel', 'F');
};
scwin.btn_print_onclick = function (e) {
  scwin.f_print();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Job Type ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{class:'',editType:'select',id:'lc_seaair',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Sea'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'All'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Export/Import',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{class:'',editType:'select',id:'lc_iogb',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Billing Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_dt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_from_dt',edToId:'ed_to_dt'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''}}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Print Option',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Partner',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_bilgClntNo',selectID:'',popupID:'',validTitle:'',nameId:'txt_bilgClntNm',style:'width:300px;',id:'udc_clnt',btnId:'img_bilgClntNo','ev:onclickEvent':'scwin.udc_clnt_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clnt_onviewchangeNameEvent',UpperFlagCode:'1',allowCharCode:'0-9|a-z|A-Z','ev:onblurCodeEvent':'scwin.udc_clnt_onviewchangeCodeEvent',maxlengthCode:'6',codeWidth:'50'}},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_upperYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상위거래처 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Department',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_dept',nameId:'txt_deptnm',popupID:'',selectID:'',style:'width:300px;',validTitle:'',id:'udc_dept','ev:onclickEvent':'scwin.udc_dept_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_dept_onviewchangeNameEvent',UpperFlagCode:'1',allowCharCode:'0-9|a-z|A-Z','ev:onblurCodeEvent':'scwin.udc_dept_onviewchangeCodeEvent',maxlengthCode:'6',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Report Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_rptgb',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Statement'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Inner part'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Disbursement'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear1',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox mt4',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Print Option',class:''}},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_pre',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Balance 0원 제외 여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_print_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Print'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Partner Statement',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridUpYn:'N',gridID:'gr_results',grdDownOpts:'{"fileName":"Partner Statement.xls","sheetName":"Partner Statement","type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_results',style:'',id:'gr_results',visibleRowNum:'15',class:'wq_gvw',autoFit:'allColumn',readOnly:'true',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column1',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'ETD/ETA',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'Invoice No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column13',value:'LOD',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column11',value:'DIS',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column9',value:'Master No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'House No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'PAKAGE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column7',value:'WEIGHT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column19',value:'CURR',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'DEBIT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'수금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'CREDIT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'지급액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'BALANCE',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'gubun',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stdt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rfno',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dpcd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dscd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'mbl',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hbl',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pkg',displayMode:'label',textAlign:'left',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'wht',displayMode:'label',textAlign:'left',dataType:'number',displayFormat:'#,###.############0[floor]',excelCellType:'number',excelFormat:'#,##0.0000000000000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'curr',displayMode:'label',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'debit',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#0',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoney',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#0',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'credit',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#0',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'payMoney',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#0',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'newBalance',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#0',excelCellType:'number',excelFormat:'#,##0.00'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'curr',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column73',value:'',displayMode:'label',expression:'SUM(\'pkg\')',dataType:'number',displayFormat:'#,###',textAlign:'left',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',expression:'SUM(\'wht\')',dataType:'number',displayFormat:'#,###.############0[floor]',textAlign:'left',excelFormat:'#,##0.0000000000000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'curr',value:'',displayMode:'label',expression:'targetColValue()',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column9',value:'',displayMode:'label',expression:'SUM(\'debit\')',dataType:'number',displayFormat:'#,###.#0',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',expression:'SUM(\'collMoney\')',dataType:'number',displayFormat:'#,###.#0',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column68',value:'',displayMode:'label',expression:'SUM(\'credit\')',dataType:'number',displayFormat:'#,###.#0',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column67',value:'',displayMode:'label',expression:'SUM(\'payMoney\')',dataType:'number',displayFormat:'#,###.#0',textAlign:'right',excelFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column66',value:'',displayMode:'label',expression:'SUM(\'newBalance\')',dataType:'number',displayFormat:'#,###.#0',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.00'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'disbursement',class:'mt16',style:'display : none;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Export/Import ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'lc_iogb2',class:'',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Date',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_dt2',refEdDt:'',edFromId:'ed_from_dt2',edToId:'ed_to_dt2'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_fieldClear2',type:'button',class:'btn ico refresh'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Liner',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_linerCd',selectID:'',popupID:'',validTitle:'',nameId:'txt_linerNm',style:'width: 250px;',id:'udc_liner','ev:onclickEvent':'scwin.udc_liner_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_liner_onviewchangeNameEvent','ev:onviewchangeCodeEvent':'scwin.udc_liner_onviewchangeCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Port Code',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_portCd',selectID:'',popupID:'',validTitle:'',nameId:'txt_portNm',style:'width: 250px;',id:'udc_port','ev:onclickEvent':'scwin.udc_port_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_port_onviewchangeNameEvent','ev:onviewchangeCodeEvent':'scwin.udc_port_onviewchangeCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'VSL/VOY ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_vslcd',selectID:'',popupID:'',validTitle:'',nameId:'txt_vsl',style:'width: 250px;',btnId:'img_PopUp4',id:'udc_vsl','ev:onclickEvent':'scwin.udc_vsl_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_vsl_onviewchangeNameEvent','ev:onviewchangeCodeEvent':'scwin.udc_vsl_onviewchangeCodeEvent'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_vyg',placeholder:'',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_print2',label:'저장',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Print'}]}]}]}]}]}]}]}]}]}]})