/*amd /ui/il/seaout/sobk/se_103_01_01b.xml 49997 2ff109f0ddb1b8c97a525e37020c28aad0e4d82442aa747f211d67b62a2c1fec */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'bkEtdFrom',name:'ETD From',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'bkEtdTo',name:'ETD To',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'bkNo',name:'부킹번호',dataType:'text',length:'16'}},{T:1,N:'w2:key',A:{id:'blNo',name:'B/L번호',dataType:'text',length:'20'}},{T:1,N:'w2:key',A:{id:'vslCd',name:'VESSEL CODE',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'vslNm',name:'VESSEL NAME',dataType:'text',length:'25'}},{T:1,N:'w2:key',A:{id:'voy',name:'VOY',dataType:'text',length:'11'}},{T:1,N:'w2:key',A:{id:'custCd',name:'거래처코드',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'custNm',name:'거래처명',dataType:'text',length:'50'}},{T:1,N:'w2:key',A:{id:'disCd',name:'DISCHARGE CODE',dataType:'text',length:'5'}},{T:1,N:'w2:key',A:{id:'disNm',name:'DISCHARGE NAME',dataType:'text',length:'30'}},{T:1,N:'w2:key',A:{id:'facCd',name:'Shipper Name',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'facNm',name:'Email',dataType:'text',length:'50'}},{T:1,N:'w2:key',A:{id:'lodCd',name:'기등록',dataType:'text',length:'5'}},{T:1,N:'w2:key',A:{id:'lodNm',name:'적재항',dataType:'text',length:'30'}},{T:1,N:'w2:key',A:{id:'bkbltype',name:'TYPE',dataType:'text',length:'1'}},{T:1,N:'w2:key',A:{id:'bkArea',name:'AREA',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'bkAreanm',name:'AREA NAME',dataType:'text',length:'50'}},{T:1,N:'w2:key',A:{id:'itemCd',name:'항목코드',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'itemNm',name:'항목명',dataType:'text',length:'50'}},{T:1,N:'w2:key',A:{id:'salesCd',name:'영업사원',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'salesNm',name:'영업사원명',dataType:'text',length:'20'}},{T:1,N:'w2:key',A:{id:'inpid',name:'입력자ID',dataType:'text',length:'50'}},{T:1,N:'w2:key',A:{id:'type',name:'Receipt Type',dataType:'text',length:'1'}},{T:1,N:'w2:key',A:{id:'flag',name:'플래그',dataType:'text',length:'1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bookingList',saveRemovedData:'true','ev:ondataload':'scwin.ds_bookingList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'bkNo',name:'부킹번호',dataType:'text',defaultValue:'',length:'16'}},{T:1,N:'w2:column',A:{id:'carrierBkNo',name:'선사부킹번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'hhblno',name:'HOUSE B/L NO',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'hhmblno',name:'MASTER B/L NO',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'bkEtd',name:'#N/A',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'bkEta',name:'#N/A',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'lodNm',name:'적재항',dataType:'text',defaultValue:'',length:'35'}},{T:1,N:'w2:column',A:{id:'disNm',name:'DISCHARGE NAME',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'custNm',name:'거래처명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'facNm',name:'출하공장명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'itemNm',name:'항목명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'wgt',name:'MT',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'hhgwgt',name:'#N/A',dataType:'number',defaultValue:'0',length:'12'}},{T:1,N:'w2:column',A:{id:'hwgt',name:'#N/A',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'bkIo',name:'#N/A',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'bkbltype',name:'TYPE',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'custMan',name:'#N/A',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'mblCount',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'reDt',name:'#N/A',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'vslCd',name:'VESSEL CODE',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'vslNm',name:'VESSEL NAME',dataType:'text',defaultValue:'',length:'25'}},{T:1,N:'w2:column',A:{id:'cnttype1',name:'#N/A',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'cnttype2',name:'#N/A',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'cnttype3',name:'#N/A',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'cnttype4',name:'#N/A',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'cntqty1',name:'#N/A',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'cntqty2',name:'#N/A',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'cntqty3',name:'#N/A',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'cntqty4',name:'#N/A',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'orgWgt',name:'#N/A',dataType:'number',defaultValue:'0',length:'16'}},{T:1,N:'w2:column',A:{id:'liner',name:'예상선사코드',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'linernm',name:'선사명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'remark1',name:'비고1',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'remark2',name:'비고2',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'remark3',name:'#N/A',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'creadyDt',name:'#N/A',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'refNo',name:'PALLETIZING 번호',dataType:'text',defaultValue:'',length:'2000'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.seaout.sobk.RetrieveSeaExportBookingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"},{"id":"ds_bookingList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_bookingList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strPreDate = $c.date.addDate($p, scwin.strCurDate, -2);
scwin.loginClntNo = $c.data.getMemInfo($p, "clntNo") ?? "";
scwin.loginClntNm = $c.data.getMemInfo($p, "clntNm") ?? ""; //거래처명
scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd") ?? ""; // 사용자 구분코드

scwin.menuParam = $c.data.getParameter($p).menuInfo.menuParam;
scwin.v_hhio = scwin.menuParam.hhio ?? "";

//<!-- House BL조회 확인   -->
scwin.hd_kcomcd = "DBEX";
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  // f_setDSHeader(ds_retrieve, "1");
  // f_setDSHeader(ds_bookingList, "2");
  scwin.f_set("ONLOAD");
  scwin.f_DefaultValue();
  lc_iogb.setValue(scwin.v_hhio == "" ? "O" : scwin.v_hhio);

  // TEST DATA
  //ed_cnd_ed_bkEtdFrom.setValue("20160419");
  //ed_cnd_ed_bkEtdTo.setValue("20160419");
};

//---------------------------------------------------------
// function name : f_set
// function desc : 화면 open시 초기 데이타 setting
//---------------------------------------------------------
scwin.f_set = function (gubun) {
  switch (gubun) {
    case "ONLOAD":
      $c.gus.cfDisableKey($p);
      ed_cnd_ed_bkEtdFrom.setValue(scwin.strPreDate);
      ed_cnd_ed_bkEtdTo.setValue(scwin.strCurDate);
      rd_cnd_rd_bkbltype.setValue("");
      ed_cnd_ed_bkNo.focus();
      break;
    case "RETRIEVE":
      $c.gus.cfEnableAllBtn($p);
      break;
    case "DELETE":
      $c.gus.cfDisableBtn($p);
      break;
  }
};

//-------------------------------------------------------------------------
// function name : f_DefaultValue
// function desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_DefaultValue = function () {
  lc_iogb.setValue("O");
  lc_flag.setValue("0");
};

//---------------------------------------------------------
// 조회 조건 지우기
//---------------------------------------------------------
scwin.f_FieldClear = function (e) {
  //$c.gus.cfInitObjects([grp_searchCondition]); // 조회조건의 테이블을 초기화.

  lc_iogb.setValue(scwin.v_hhio == "" ? "O" : scwin.v_hhio);
  lc_flag.setValue("0");
  ed_cnd_ed_bkNo.setValue("");
  ed_cnd_ed_blNo.setValue("");
  ed_cnd_ed_vslCd.setValue("");
  ed_cnd_txt_vslNm.setValue("");
  ed_cnd_ed_voy.setValue("");
  ed_cnd_ed_custCd.setValue("");
  ed_cnd_txt_custNm.setValue("");
  ed_cnd_ed_lodCd.setValue("");
  ed_cnd_txt_lodNm.setValue("");
  ed_cnd_ed_disCd.setValue("");
  ed_cnd_txt_disNm.setValue("");
  ed_cnd_ed_factCd.setValue("");
  ed_cnd_txt_FacNm.setValue("");
  ed_cnd_ed_salesCd.setValue("");
  ed_cnd_txt_salesNm.setValue("");
  ed_cnd_ed_itemCd.setValue("");
  ed_cnd_txt_itemNm.setValue("");
  ed_cnd_ed_inpid.setValue("");
  rd_cnd_rd_bkbltype.setValue("");
  ed_cnd_ed_liner.setValue("");
  ed_cnd_txt_linerNm.setValue("");
  ed_cnd_ed_deptCd.setValue("");
  ed_cnd_txt_deptNm.setValue("");
  ed_mccntno.setValue("");
  scwin.f_set("ONLOAD");
};

//---------------------------------------------------------
// 조회
//---------------------------------------------------------    
scwin.f_Retrieve = async function (e) {
  let rtn = await scwin.f_validate();
  if (rtn == true) {
    ds_retrieve.set("kcomcd", scwin.hd_kcomcd);
    $c.sbm.execute($p, sbm_retrieve);
  }
};

//---------------------------------------------------------
// function name : f_validate
// function desc : 
//---------------------------------------------------------
scwin.f_validate = async function () {
  // VALIDATE
  let rtn = await $c.gus.cfValidate($p, [ed_cnd_ed_bkEtdFrom, ed_cnd_ed_bkEtdTo]);
  if (rtn == false) {
    //validExp 가 yes일때 check
    return false;
  }
  if (ed_cnd_ed_bkEtdFrom.getValue() == "") {
    await $c.win.alert($p, $c.data.getMessage($p, "E_MSG_CM_ERR_002", ["ETD From"])); //@는 필수입력항목입니다.
    ed_cnd_ed_bkEtdFrom.focus();
    return false;
  }
  if (ed_cnd_ed_bkEtdTo.getValue() == "") {
    await $c.win.alert($p, $c.data.getMessage($p, "E_MSG_CM_ERR_002", ["ETD To"])); //@는 필수입력항목입니다.
    ed_cnd_ed_bkEtdTo.focus();
    return false;
  }

  // 날짜 범위 확인
  let dateRtn = $c.gus.cfIsAfterDate($p, ed_cnd_ed_bkEtdFrom.getValue(), ed_cnd_ed_bkEtdTo.getValue());
  if (dateRtn == false) {
    await $c.win.alert($p, $c.data.getMessage($p, "E_MSG_CM_ERR_048", ["ETD From", "ETD To"])); //@은(는) 보다 작아야 합니다.
    ed_cnd_ed_bkEtdFrom.focus();
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_PopUp = function (disGubun, chgGubun) {
  switch (disGubun) {
    case "Customer":
      udc_custCd.setSelectId('retrieveEngClntInfo');
      udc_custCd.ilCommonPopUp(scwin.udc_custCd_callBackFunc, ed_cnd_ed_custCd.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      "",
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
    case "Liner":
      // Liner	
      udc_liner.setSelectId('retrieveEngClntInfo');
      udc_liner.ilCommonPopUp(scwin.udc_liner_callBackFunc, ed_cnd_ed_liner.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      ed_cnd_txt_linerNm.getValue(),
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
  }
};

//---------------------------------------------------------
// 공통팝업 열기
//---------------------------------------------------------   
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  switch (gubun1) {
    case "Vessel":
      udc_vslCd.setSelectId('retrieveOrdVsslInfo');
      udc_vslCd.ilCommonPopUp(scwin.udc_vslCd_callBackFunc, ed_cnd_ed_vslCd.getValue().trim(), "", pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Vessel,Code,Name", pNoDataCloseTF);
      break;
    case "Discharge":
      udc_disCd.setSelectId('retrievePortInfo');
      udc_disCd.ilCommonPopUp(scwin.udc_disCd_callBackFunc, ed_cnd_ed_disCd.getValue().trim(), "", pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Discharge,Code,Name", pNoDataCloseTF);
      break;
    case "Factory":
      udc_factCd.setSelectId('retrievePortInfo');
      udc_factCd.ilCommonPopUp(scwin.udc_factCd_callBackFunc, ed_cnd_ed_factCd.getValue().trim(), "", pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Factory,Code,Name", pNoDataCloseTF);
      break;
    case "Loading":
      udc_lodCd.setSelectId('retrievePortInfo');
      udc_lodCd.ilCommonPopUp(scwin.udc_lodCd_callBackFunc, ed_cnd_ed_lodCd.getValue().trim(), "", pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Loading,Code,Name", pNoDataCloseTF);
      break;
    case "Item":
      udc_itemCd.setSelectId('retrieveCommGoodsInfo');
      udc_itemCd.ilCommonPopUp(scwin.udc_itemCd_callBackFunc, ed_cnd_ed_itemCd.getValue().trim(), "", pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Item,Code,Name", pNoDataCloseTF);
      break;
    case "Salesman":
      udc_salesCd.setSelectId('retrieveEmpInfo');
      udc_salesCd.ilCommonPopUp(scwin.udc_salesCd_callBackFunc, ed_cnd_ed_salesCd.getValue().trim(), ed_cnd_txt_salesNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Salesman,Code,Name", pNoDataCloseTF);
      break;
    case "DEPT":
      udc_deptCd.setSelectId('retrieveOpDeptCdInfo');
      udc_deptCd.ilCommonPopUp(scwin.udc_deptCd_callBackFunc, ed_cnd_ed_deptCd.getValue().trim(), ed_cnd_txt_deptNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "DEPT,Code,Name", pNoDataCloseTF);
      break;
  }
};

//---------------------------------------------------------
// 엑셀다운로드
//---------------------------------------------------------
scwin.f_downExcelSheet = async function () {
  let cntRow = ds_bookingList.getRowCount();
  let rdBkType = rd_cnd_rd_bkbltype.getValue();
  let bktypeName = "";
  switch (rdBkType) {
    case "C":
      bktypeName = "컨테이너";
      break;
    case "B":
      bktypeName = "벌크";
      break;
  }
  if (cntRow != "0") {
    let cfrm = await $c.win.confirm($p, bktypeName + " Booking List를 EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm == true) {
      let sheetTitle = "Booking List"; // '/'있으면 저da장안됨.
      let options = {
        fileName: sheetTitle + "_" + scwin.strCurDate + ".xlsx",
        sheetName: sheetTitle,
        numberToText: true
      };
      const infoArr = [];
      $c.data.downloadGridViewExcel($p, gr_bookingList, options, infoArr);
    }
  } else {
    $c.win.alert($p, E_MSG_CM_WRN_002);
  }
};

//---------------------------------------------------------
// 조회
//---------------------------------------------------------    
scwin.f_ReDrawGrid = function () {
  // Type에 따른 조회항목 변경 
  if (rd_cnd_rd_bkbltype.getValue() == "C") {
    gr_bookingList.setColumnVisible("wgt", false);
    gr_bookingList.setColumnVisible("hhgwgt", false);
    gr_bookingList.setColumnVisible("hwgt", false);
    gr_bookingList.setColumnVisible("custMan", true);
    gr_bookingList.setColumnVisible("reDt", true);
    gr_bookingList.setColumnVisible("vslNm", true);
    gr_bookingList.setColumnVisible("cnttype1", true);
    gr_bookingList.setColumnVisible("cntqty1", true);
    gr_bookingList.setColumnVisible("cnttype2", true);
    gr_bookingList.setColumnVisible("cntqty2", true);
    gr_bookingList.setColumnVisible("cnttype3", true);
    gr_bookingList.setColumnVisible("cntqty3", true);
    gr_bookingList.setColumnVisible("cnttype4", true);
    gr_bookingList.setColumnVisible("cntqty4", true);
    gr_bookingList.setColumnVisible("orgWgt", true);
    gr_bookingList.setColumnVisible("mblCount", true);
    gr_bookingList.setColumnVisible("remark1", true);
  } else {
    gr_bookingList.setColumnVisible("wgt", true);
    gr_bookingList.setColumnVisible("hhgwgt", true);
    gr_bookingList.setColumnVisible("hwgt", true);
    gr_bookingList.setColumnVisible("custMan", false);
    gr_bookingList.setColumnVisible("reDt", false);
    gr_bookingList.setColumnVisible("vslNm", false);
    gr_bookingList.setColumnVisible("cnttype1", false);
    gr_bookingList.setColumnVisible("cntqty1", false);
    gr_bookingList.setColumnVisible("cnttype2", false);
    gr_bookingList.setColumnVisible("cntqty2", false);
    gr_bookingList.setColumnVisible("cnttype3", false);
    gr_bookingList.setColumnVisible("cntqty3", false);
    gr_bookingList.setColumnVisible("cnttype4", false);
    gr_bookingList.setColumnVisible("cntqty4", false);
    gr_bookingList.setColumnVisible("orgWgt", false);
    gr_bookingList.setColumnVisible("mblCount", false);
    gr_bookingList.setColumnVisible("remark1", false);
  }
};

// 조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    // 그리드 조회건수 초기화
    let cnt = ds_bookingList.getRowCount();
    tbx_totalRows.setValue(cnt); // 조회된 건수를 매출입항목Grid 하단에 표시한다.		

    if (cnt > 0) {
      scwin.f_set("RETRIEVE");
      scwin.f_ReDrawGrid();
    } else {
      $c.win.alert($p, E_MSG_CM_WRN_002);
    }
  }
};

// bookingList가 조회되었을때.
scwin.ds_bookingList_ondataload = function () {};

// Vessel
scwin.udc_vslCd_onblurCodeEvent = function (e) {
  let strClntNo = (ed_cnd_ed_vslCd.getValue() ?? "").trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("Vessel", "T", "F", "F");
  } else {
    ed_cnd_txt_vslNm.setValue("");
  }
};
scwin.udc_vslCd_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('Vessel', 'T', 'F', 'F');
};
scwin.udc_vslCd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Vessel', 'F', 'F', 'F');
};
scwin.udc_vslCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cnd_ed_vslCd, "");
};

// Customer
scwin.udc_custCd_onblurCodeEvent = function (e) {
  let strClntNo = (ed_cnd_ed_custCd.getValue() ?? "").trim();
  if (strClntNo.length > 0) {
    scwin.f_PopUp('Customer', 'T');
  } else {
    ed_cnd_txt_custNm.setValue("");
  }
};
scwin.udc_custCd_onclickEvent = function (e) {
  scwin.f_PopUp('Customer', 'F');
};
scwin.udc_custCd_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('Customer', 'T');
};
scwin.udc_custCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cnd_ed_custCd, "");
};

// Loading
scwin.udc_lodCd_onblurCodeEvent = function (e) {
  let strClntNo = (ed_cnd_ed_lodCd.getValue() ?? "").trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("Loading", "T", "F", "F");
  } else {
    ed_cnd_txt_lodNm.setValue("");
  }
};
scwin.udc_lodCd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Loading', 'F', 'F', 'F');
};
scwin.udc_lodCd_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('Loading', 'T', 'F', 'F');
};
scwin.udc_lodCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cnd_ed_lodCd, "");
};

// Discharge
scwin.udc_disCd_onblurCodeEvent = function (e) {
  let strClntNo = (ed_cnd_ed_disCd.getValue() ?? "").trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("Discharge", "T", "F", "F");
  } else {
    ed_cnd_txt_disNm.setValue("");
  }
};
scwin.udc_disCd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Discharge', 'F', 'F', 'F');
};
scwin.udc_disCd_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('Discharge', 'T', 'F', 'F');
};
scwin.udc_disCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cnd_ed_disCd, "");
};

// Factory
scwin.udc_factCd_onblurCodeEvent = function (e) {
  let strClntNo = (ed_cnd_ed_factCd.getValue() ?? "").trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("Factory", "T", "F", "F");
  } else {
    ed_cnd_txt_FacNm.setValue("");
  }
};
scwin.udc_factCd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Factory', 'F', 'F', 'F');
};
scwin.udc_factCd_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('Factory', 'T', 'F', 'F');
};
scwin.udc_factCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cnd_ed_factCd, "");
};

// Salesman
scwin.udc_salesCd_onblurCodeEvent = function (e) {
  let strClntNo = (ed_cnd_ed_salesCd.getValue() ?? "").trim();
  if (strClntNo.length > 0) {
    ed_cnd_txt_salesNm.setValue("");
    scwin.f_OpenCommonPopUp("Salesman", "T", "F", "F");
  } else {
    ed_cnd_txt_salesNm.setValue("");
  }
};
scwin.udc_salesCd_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('Salesman', 'F', 'F', 'F');
};
scwin.udc_salesCd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Salesman', 'F', 'F', 'F');
};
scwin.udc_salesCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cnd_ed_salesCd, ed_cnd_txt_salesNm);
};

// Item 
scwin.udc_itemCd_onblurCodeEvent = function (e) {
  let strClntNo = (ed_cnd_ed_itemCd.getValue() ?? "").trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("Item", "T", "F", "F");
  } else {
    ed_cnd_txt_itemNm.setValue("");
  }
};
scwin.udc_itemCd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Item', 'F', 'F', 'F');
};
scwin.udc_itemCd_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('Item', 'T', 'F', 'F');
};
scwin.udc_itemCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cnd_ed_itemCd, "");
};

// Carrier
scwin.udc_liner_onblurCodeEvent = function (e) {
  let strClntNo = (ed_cnd_ed_liner.getValue() ?? "").trim();
  if (strClntNo.length > 0) {
    scwin.f_PopUp('Liner', 'T');
  } else {
    ed_cnd_txt_linerNm.setValue("");
  }
};
scwin.udc_liner_onclickEvent = function (e) {
  scwin.f_PopUp('Liner', 'T');
};
scwin.udc_liner_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('Liner', 'F');
};
scwin.udc_liner_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cnd_ed_liner, "");
};

// Department
scwin.udc_deptCd_onblurCodeEvent = function (e) {
  let strClntNo = (ed_cnd_ed_deptCd.getValue() ?? "").trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("DEPT", "T", "F", "F");
  } else {
    ed_cnd_txt_deptNm.setValue("");
  }
};
scwin.udc_deptCd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('DEPT', 'F', 'F', 'F');
};
scwin.udc_deptCd_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('DEPT', 'T', 'F', 'F');
};
scwin.udc_deptCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cnd_ed_deptCd, ed_cnd_txt_deptNm);
};

// 검색시
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

// 그리드 더블클릭시 화면 이동
scwin.gr_bookingList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex < 0) {
    return;
  }
  let bkIo = ds_bookingList.getCellData(rowIndex, "bkIo");
  let bkNo = ds_bookingList.getCellData(rowIndex, "bkNo");
  let menuNm = "";
  let url = "";
  let pgmId = "";
  let paramObj = {
    linkcheck: "1",
    kcomcd: scwin.hd_kcomcd,
    bkno: bkNo
  };
  let option = {
    "openAction": "exist"
  };
  if (bkIo == "O") {
    //outBound
    let bkbltype = ds_bookingList.getCellData(rowIndex, "bkbltype");
    if (bkbltype == "C") {
      // Container
      menuNm = "Container Booking";
      url = "/ui/il/seaout/sobk/se_101_01_01b.xml";
      pgmId = "se_101_01_01b.xml";
    } else {
      //Bulk
      menuNm = "Bulk Booking";
      url = "/ui/il/seaout/sobk/se_102_01_01b.xml";
      pgmId = "se_102_01_01b.xml";
    }
  } else {
    menuNm = "Import Booking";
    url = "/ui/il/seainb/sibk/se_210_01_01b.xml";
    pgmId = "se_210_01_01b.xml";
  }
  $c.win.openMenu($p, menuNm, url, pgmId, paramObj, option);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'grp_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_iogb',search:'start',style:'width:90px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_retrieve.type',mandatory:'true',displayMode:'value delim label','data-length':'1',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:110px;',id:'lc_flag',class:'',ref:'data:ds_retrieve.flag',mandatory:'true',displayMode:'value delim label','data-length':'1',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ETD/ETA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ResultDate'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refDataMap:'ds_retrieve',refEdDt:'bkEtdTo',refStDt:'bkEtdFrom',style:'',edFromId:'ed_cnd_ed_bkEtdFrom',edToId:'ed_cnd_ed_bkEtdTo',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Booking No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cnd_ed_bkNo',placeholder:'',style:'width:230px;',objType:'data',ref:'data:ds_retrieve.bkNo','data-length':'16',maxByteLength:'16'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cnd_ed_blNo',placeholder:'',style:'width:230px;',objType:'data',ref:'data:ds_retrieve.blNo','data-length':'20',maxByteLength:'20'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Vessel',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_cnd_ed_vslCd',nameId:'ed_cnd_txt_vslNm',id:'udc_vslCd',objTypeCode:'data',objTypeName:'data',maxlengthName:'50','ev:onclickEvent':'scwin.udc_vslCd_onclickEvent',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_vslCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_vslCd_onviewchangeNameEvent',refDataCollection:'ds_retrieve',code:'vslCd',name:'vslNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Voyage',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cnd_ed_voy',placeholder:'',style:'width:230px;',objType:'data',ref:'data:ds_retrieve.voy','data-length':'11',maxByteLength:'11'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_cnd_ed_custCd',nameId:'ed_cnd_txt_custNm',id:'udc_custCd',objTypeCode:'data',objTypeName:'data',maxlengthName:'50',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_custCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_custCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_custCd_onviewchangeNameEvent',refDataCollection:'ds_retrieve',name:'custNm',code:'custCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Loading',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_cnd_ed_lodCd',nameId:'ed_cnd_txt_lodNm',id:'udc_lodCd',objTypeCode:'data',objTypeName:'data',maxlengthName:'50',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_lodCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_lodCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_lodCd_onviewchangeNameEvent',refDataCollection:'ds_retrieve',name:'lodNm',code:'lodCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Discharge',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_cnd_ed_disCd',nameId:'ed_cnd_txt_disNm',id:'udc_disCd',objTypeCode:'data',objTypeName:'data',maxlengthName:'50',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_disCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_disCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_disCd_onviewchangeNameEvent',refDataCollection:'ds_retrieve',name:'disNm',code:'disCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Factory',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_cnd_ed_factCd',nameId:'ed_cnd_txt_FacNm',id:'udc_factCd',objTypeCode:'data',objTypeName:'data',maxlengthName:'50',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_factCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_factCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_factCd_onviewchangeNameEvent',refDataCollection:'ds_retrieve',name:'facNm',code:'facCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Salesman',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_cnd_ed_salesCd',nameId:'ed_cnd_txt_salesNm',id:'udc_salesCd',objTypeCode:'data',objTypeName:'data',maxlengthName:'50',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_salesCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_salesCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_salesCd_onclickEvent',refDataCollection:'ds_retrieve',code:'salesCd',name:'salesNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Item',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_cnd_ed_itemCd',nameId:'ed_cnd_txt_itemNm',id:'udc_itemCd',objTypeCode:'data',objTypeName:'data',maxlengthName:'50',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_itemCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_itemCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_itemCd_onviewchangeNameEvent',refDataCollection:'ds_retrieve',code:'itemCd',name:'itemNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Operator',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cnd_ed_inpid',placeholder:'',style:'width:230px;',objType:'data',ref:'data:ds_retrieve.inpid','data-length':'50',maxByteLength:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Type',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_cnd_rd_bkbltype',ref:'data:ds_retrieve.bkbltype',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','data-length':'1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Container'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Bulk'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'All'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Carrier',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_cnd_ed_liner',nameId:'ed_cnd_txt_linerNm',id:'udc_liner',objTypeCode:'data',objTypeName:'data',maxlengthName:'50',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_liner_onblurCodeEvent','ev:onclickEvent':'scwin.udc_liner_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_liner_onviewchangeNameEvent',refDataCollection:'ds_retrieve',code:'liner',name:'linerNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Department',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_cnd_ed_deptCd',nameId:'ed_cnd_txt_deptNm',id:'udc_deptCd',objTypeCode:'data',objTypeName:'data',maxlengthName:'50',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_deptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_deptCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_deptCd_onviewchangeNameEvent',refDataCollection:'ds_retrieve',code:'deptCd',name:'deptNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Container No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_mccntno',placeholder:'',style:'width:230px;',maxlength:'11'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Clear'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Booking List',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_bookingList',gridDownUserAuth:'X',style:'',btnPlusYn:'Y',btnUser:'N',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_downExcelSheet'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_bookingList',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_bookingList',id:'gr_bookingList',style:'',visibleRowNum:'9',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_bookingList_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'Booking<br/>No',width:'90',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'B/L<br/>No',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'M/BL<br/>No',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'Ref. No',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'ETD',width:'80',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'ETA',width:'80',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'Loading',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'Discharge<br/>port',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'Customer',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'Carrier',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'작업지<br/>(Factory)',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column41',value:'Item',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'Weight(kg)',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'DCSN W',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'UNSETTLED W',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column33',value:'PIC',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'작업<br/>일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'Vessel',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label',value:'CNTR 수량',colSpan:'8',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',displayMode:'label',rowSpan:'2',value:'GROSS WT',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',displayMode:'label',rowSpan:'2',value:'BL건수',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column88',value:'REMARK',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',displayMode:'label',rowSpan:'2',value:'Result<br/>Date'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',value:'CNTR<br/>TYPE1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column47',value:'QTY1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column86',value:'CNTR<br/>TYPE2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column83',value:'QTY2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column80',value:'CNTR<br/>TYPE3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column77',value:'QTY3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column74',value:'CNTR<br/>TYPE4',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column71',value:'QTY4',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bkNo',inputType:'text',width:'90',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hhblno',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hhmblno',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'refNo',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bkEtd',inputType:'calendar',width:'80',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bkEta',inputType:'calendar',width:'80',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lodNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'disNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'custNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'linernm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'facNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'itemNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wgt',displayMode:'label',textAlign:'right',displayFormat:'#,###.###',readOnly:'true',dataType:'bigDecimal',excelFormat:'#,##0.##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'hhgwgt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###.###',dataType:'float',excelCellType:'bigDecimal',excelFormat:'#,##0.##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'hwgt',displayMode:'label',textAlign:'right',displayFormat:'#,###.###',readOnly:'true',dataType:'bigDecimal',excelFormat:'#,##0.##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'custMan',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'calendar',id:'reDt',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vslNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cnttype1',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntqty1',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cnttype2',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntqty2',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cnttype3',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntqty3',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cnttype4',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntqty4',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'orgWgt',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,###.###',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mblCount',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'remark1',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'calendar',id:'creadyDt',displayMode:'label',textAlign:'center',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})