/*amd /ui/il/airout/aobl/ar_103_01_02b.xml 29086 3f4d8ed6d1de9fbd8b7d64cfc200fee62699aecb9f0b39fc19d197fc73717782 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ondtFrom',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ondtTo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fltno',name:'선명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shcd',name:'Shipper 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shnm1',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cncd',name:'CONSIGNEE 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cnnm1',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'Consol No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dpcd',name:'출발지',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dpnm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dstn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dsnm1',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpid',name:'입력자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpdt',name:'입력일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shipgb',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_MasterSearchList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ondt',name:'상차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltno',name:'선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shcd',name:'Shipper 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cncd',name:'CONSIGNEE 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frpc',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'otpc',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsnm1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'voidgb',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'입력일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipgb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exdt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rate',name:'RATE',dataType:'number'}},{T:1,N:'w2:column',A:{id:'exrate',name:'환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cucd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ontm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'avdt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'avtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpcd',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dstn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'issueYn',name:'발급여부',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.airout.aobl.RetrieveAirMasterBlListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_MasterSearchList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_MasterSearchList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : Master B/L Search
 * 메뉴경로 : 국제물류/Air/Air Export
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/il/airout/aobl/ar_103_01_02b.jsp
 * 작 성 자 : 박원
 * 작 업 일 : 2026-03-05
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항

 * 수정이력 :
 *    - 2026-03-05      박원      최초작성
 *    - 2026-04-03      이진우    T-6140 결함 조치
 *    - 2026-04-09      이진우    T-6524 결함 조치
 */
scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
scwin.strPreDate = $c.date.addMonth($p, scwin.vCurDate, -1);
scwin.MSG_LO_WRN_001 = "@ 에 등록 되어 있어 삭제 불가능 합니다.";
scwin.MSG_LO_WRN_002 = "잘못된 Master Number 입니다";
scwin.iogb = "";
scwin.hid_kcomcd = "DBEX";
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.userId = memJson.userId;
  scwin.params = $c.data.getParameter($p);
  if ($c.util.isEmpty($p, scwin.params.iogb)) {
    // "", null, undefined를 모두 체크
    scwin.iogb = scwin.params.menuInfo.menuParam.iogb;
    console.log("menu::");
  } else {
    scwin.iogb = scwin.params.iogb;
    console.log("화면::");
  }
  console.log("scwin.iogb::", scwin.iogb);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_DefaultValue();
  }, {
    "delay": 100
  });
};

//-------------------------------------------------------------------------
// function name : f_DefaultValue
// function desc : 화면 open시 초기  데이타 setting
//-------------------------------------------------------------------------
scwin.f_DefaultValue = function () {
  cnd_lc_iogb.setValue(scwin.iogb);
  cnd_ica_stdtFrom.setValue(scwin.strPreDate);
  cnd_ica_stdtTo.setValue(scwin.vCurDate);
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  cnd_lc_iogb.focus();
};

//-------------------------------------------------------------------------
// 날짜설정
//-------------------------------------------------------------------------
scwin.f_SetDate = function (pSetType, pDayCnt) {
  //유형 1:현재일, 2:이전일, 3:이후일

  var vReturnDate = "";
  if (pSetType == "1") {
    //vReturnDate = new Date().format("YYYYMMDD");
    vReturnDate = scwin.vCurDate;
  } else if (pSetType == "2") {
    //vReturnDate = new Date().before(0, 0, pDayCnt).format("YYYYMMDD");
    vReturnDate = WebSquare.date.dateAdd(scwin.vCurDate, -1);
  } else if (pSetType == "3") {
    //vReturnDate = new Date().after(0, 0, pDayCnt).format("YYYYMMDD");
    vReturnDate = WebSquare.date.dateAdd(scwin.vCurDate, 1);
  }
  return vReturnDate;
};

//-------------------------------------------------------------------------
//ilpopupdefine 열기
//-------------------------------------------------------------------------
scwin.f_PopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var rtnList = new Array();
  switch (disGubun) {
    case "Shipper":
      //거래처 팝업(Search Shipper)
      udc_shcd.ilCommonPopUp(scwin.callbackRetrieveEngClntInfo1, cnd_ed_shcd.getValue().trim(), cnd_ed_shnm.getValue(), pWinCloseTF, '6', 'Shipper', '140,300', null, null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);

      //cfSetReturnValue(rtnList, cnd_ed_shcd, cnd_ed_shnm);
      break;
    case "Consignee":
      //Search Consignee
      udc_cncd.ilCommonPopUp(scwin.callbackRetrieveEngClntInfo2, cnd_ed_cncd.getValue().trim(), cnd_ed_cnnm.getValue(), pWinCloseTF, '6', 'Consignee', '140,300', null, null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);

      //cfSetReturnValue(rtnList, cnd_ed_cncd, cnd_ed_cnnm);
      break;
    case "Departure":
      //Search Departure
      udc_dpcd.ilCommonPopUp(scwin.callbackRetrieveAirPortCode1, cnd_ed_dpcd.getValue().trim(), cnd_ed_dpnm.getValue(), pWinCloseTF, '2', 'Port Code, Port Name', '140,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, 'Departure Search, Port Code, Port Name', pNoDataCloseTF);

      //cfSetReturnValue(rtnList, cnd_ed_dpcd, cnd_txt_dpnm);
      break;
    case "Destination":
      //Search Departure
      udc_dscd.ilCommonPopUp(scwin.callbackRetrieveAirPortCode2, cnd_ed_dscd.getValue().trim(), cnd_ed_dsnm.getValue(), pWinCloseTF, '2', 'Port Code, Port Name', '140,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, 'Departure Search, Port Code, Port Name', pNoDataCloseTF);

      //cfSetReturnValue(rtnList, cnd_ed_dscd, cnd_txt_dsnm);
      break;
    default:
      break;
  }
};
scwin.callbackRetrieveEngClntInfo1 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_shcd, cnd_ed_shnm);
};
scwin.callbackRetrieveEngClntInfo2 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_cncd, cnd_ed_cnnm);
};
scwin.callbackRetrieveAirPortCode1 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_dpcd, cnd_ed_dpnm);
};
scwin.callbackRetrieveAirPortCode2 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_dscd, cnd_ed_dsnm);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  dma_search.set("kcomcd", scwin.hid_kcomcd); //대표거래처 코드

  if (cnd_ica_stdtFrom.getValue().trim() == '' || cnd_ica_stdtTo.getValue().trim() == '') {
    //$c.win.alert(E_MSG_CM_ERR_002, Array("ONBOARD"));
    $c.win.alert($p, "ONBOARD is mandatory.");
    cnd_ica_stdtFrom.focus();
    return false;
  }
  var chk = await $c.gus.cfIsAfterDate($p, cnd_ica_stdtFrom.getValue(), cnd_ica_stdtTo.getValue());
  if (!chk) {
    $c.win.alert($p, E_MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    cnd_ica_stdtFrom.focus();
    return false;
  }
  if (cnd_chk_shipgb.getValue() == "T") {
    dma_search.set("shipgb", "D");
  } else {
    dma_search.set("shipgb", "");
  }
  //alert(cnd_chk_shipgb.value+":"+ds_search.NameValue(1,"shipgb") );
  //tr_retrieve.post();		
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_MasterDetail = function () {
  /*
  var condition = "?";
  var row = ds_MasterSearchList.RowPosition;
  var strExpertDetailUrl = "/il/airout/aobl/ar_103_01_01b.jsp";
  var strImportDetailUrl = "/il/airinb/aibl/ar_202_01_01b.jsp";
  
   if(row > 0){
      //선택된 오더 정보 : 오더번호 / 화물구분
      var v_kmcom = ds_MasterSearchList.NameValue(row, "kcomcd"); //hid_kcomcd.value;
      var v_blno 	= ds_MasterSearchList.NameValue(row, "blno");
      
      condition += "kcomcd=" + v_kmcom + "&blno=" + v_blno;
      if(cnd_lc_iogb.BindColVal == "O"){
          cfTabMenuUpdate(strExpertDetailUrl+condition,"Export Master B/L");
      } else {
          cfTabMenuUpdate(strImportDetailUrl+condition,"Import Master B/L");
      }
  } else {
      cfAlertMsg(E_MSG_CM_ERR_056);
      return;
  }
  */

  //var condition = "?";
  var row = ds_MasterSearchList.getRowPosition();
  var strExpertDetailUrl = "/ui/il/airout/aobl/ar_103_01_01b.xml";
  var strImportDetailUrl = "/ui/il/airinb/aibl/ar_202_01_01b.xml";
  if (row > -1) {
    //선택된 오더 정보 : 오더번호 / 화물구분
    var v_kmcom = ds_MasterSearchList.getCellData(row, "kcomcd");
    var v_blno = ds_MasterSearchList.getCellData(row, "blno");
    var param = {
      kcomcd: v_kmcom,
      blno: v_blno
    };

    // console.log("param::", param);
    // console.log("cnd_lc_iogb.getValue::",cnd_lc_iogb.getValue());

    //condition += "kcomcd=" + v_kmcom + "&srno=" + v_srno;
    if (cnd_lc_iogb.getValue() == "O") {
      //cfTabMenuUpdate(strExpertDetailUrl+condition,"Export Customer Booking");
      $c.win.openMenu($p, "Export Master B/L", strExpertDetailUrl, "ar_103_01_01b.jsp", param, {
        openAction: "exist"
      });
    } else {
      //cfTabMenuUpdate(strImportDetailUrl+condition,"Import Customer Booking");
      $c.win.openMenu($p, "Import Master B/L", strImportDetailUrl, "ar_202_01_01b.jsp", param, {
        openAction: "exist"
      });
    }
  } else {
    $c.win.alert($p, E_MSG_CM_ERR_056);
    //$c.win.alert("Nothing has been selected.");
    return;
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_MasterSearchList.getRowCount() == 0) {
    //$c.win.alert(E_MSG_CM_ERR_003);	//해당되는 자료가 존재하지 않습니다.
    //await $c.win.alert("No data found./Could not find any relevant data.");
    cnd_ica_stdtFrom.focus();
  } else {
    //processFlag = "Exist";
  }
  spa_cnt.setValue(ds_MasterSearchList.getRowCount());
};
scwin.udc_shcd_onclickEvent = function (e) {
  scwin.f_PopUp('Shipper', 'F', 'F', 'F');
};
scwin.udc_shcd_onblurCodeEvent = function (e) {
  var strClntNo = cnd_ed_shcd.getValue().trim();

  //if (cnd_ed_shcd.Modified ) {
  if (strClntNo.length > 0) {
    cnd_ed_shnm.setValue("");
    scwin.f_PopUp("Shipper", "T", "F", "F");
  } else {
    cnd_ed_shnm.setValue("");
  }
  //}
};
scwin.udc_shcd_onviewchangeNameEvent = function (info) {};
scwin.udc_cncd_onclickEvent = function (e) {
  scwin.f_PopUp('Consignee', 'F', 'F', 'F');
};
scwin.udc_cncd_onviewchangeCodeEvent = function (info) {
  var strClntNo = cnd_ed_cncd.getValue().trim();

  //if (cnd_ed_cncd.Modified ) {
  if (strClntNo.length > 0) {
    cnd_ed_cnnm.setValue("");
    scwin.f_PopUp("Consignee", "T", "F", "F");
  } else {
    cnd_ed_cnnm.setValue("");
  }
  //}
};
scwin.udc_cncd_onviewchangeNameEvent = function (info) {};
scwin.udc_dpcd_onclickEvent = function (e) {
  scwin.f_PopUp('Departure', 'F', 'F', 'F');
};
scwin.udc_dpcd_onblurCodeEvent = function (e) {
  var strClntNo = cnd_ed_dpcd.getValue().trim();

  //if (cnd_ed_dpcd.Modified ) {
  if (strClntNo.length > 0) {
    cnd_ed_dpnm.setValue("");
    scwin.f_PopUp("Departure", "T", "F", "F");
  } else {
    cnd_ed_dpnm.setValue("");
  }
  //}
};
scwin.udc_dpcd_onviewchangeNameEvent = function (info) {};
scwin.udc_dscd_onclickEvent = function (e) {
  scwin.f_PopUp('Destination', 'F', 'F', 'F');
};
scwin.udc_dscd_onblurCodeEvent = function (e) {
  var strClntNo = cnd_ed_dscd.getValue().trim();

  //if (cnd_ed_dscd.Modified ) {
  if (strClntNo.length > 0) {
    cnd_ed_dsnm.setValue("");
    scwin.f_PopUp("Destination", "T", "F", "F");
  } else {
    cnd_ed_dsnm.setValue("");
  }
  //}
};
scwin.udc_dscd_onviewchangeNameEvent = function (info) {};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.gr_masterList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_MasterDetail();
};

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Export/Import',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_iogb',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_search.iogb'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Onboard Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'dma_search',refEdDt:'ondtTo',refStDt:'ondtFrom',style:'',edFromId:'cnd_ica_stdtFrom',edToId:'cnd_ica_stdtTo',titleFrom:'Onboard',titleTo:'Onboard',mandatoryFrom:'true',mandatoryTo:'true',validChkYn:'Y'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_blno',placeholder:'',style:'width:230px;',displayFormat:'###-#################',maxlength:'20',ref:'data:dma_search.blno',allowChar:'0-9.A-Z,a-z','ev:onkeyup':'scwin.onkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Regist User',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{allowChar:'0-9.A-Z,a-z',class:'',id:'input3',placeholder:'',ref:'data:dma_search.inpid',style:'width:120px;',maxlength:'8','ev:onkeyup':'scwin.onkeyup'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Flight No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_input2',placeholder:'',style:'width:120px;',maxlength:'6',displayFormat:'######',ref:'data:dma_search.fltno',allowChar:'0-9.A-Z,a-z','ev:onkeyup':'scwin.onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Shipper',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',maxlengthCode:'8',codeId:'cnd_ed_shcd',btnId:'cnd_btn_shcd',id:'udc_shcd',nameId:'cnd_ed_shnm',selectID:'retrieveEngClntInfo','ev:onclickEvent':'scwin.udc_shcd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_shcd_onviewchangeNameEvent',allowCharCode:'0-9.A-Z,a-z',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_shcd_onblurCodeEvent',refDataCollection:'dma_search',code:'shcd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consignee',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'cnd_ed_cncd',btnId:'cnd_btn_cncd',id:'udc_cncd',nameId:'cnd_ed_cnnm',selectID:'retrieveEngClntInfo','ev:onclickEvent':'scwin.udc_cncd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_cncd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_cncd_onviewchangeNameEvent',allowCharCode:'0-9',maxlengthCode:'18',refDataCollection:'dma_search',code:'cncd'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Regist Date',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'cnd_ica_userdt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',ref:'data:dma_search.inpdt',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consol No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_mhno',placeholder:'',style:'width:120px;',ref:'data:dma_search.mhno',allowChar:'0-9.A-Z,a-z','ev:onkeyup':'scwin.onkeyup',maxlength:'16'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Departure',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'cnd_ed_dpcd',btnId:'cnd_btn_dpcd',id:'udc_dpcd',nameId:'cnd_ed_dpnm',selectID:'retrieveAirPortCode','ev:onclickEvent':'scwin.udc_dpcd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_dpcd_onviewchangeNameEvent',allowCharCode:'0-9.A-Z,a-z',UpperFlagCode:'1',maxlengthCode:'3','ev:onblurCodeEvent':'scwin.udc_dpcd_onblurCodeEvent',refDataCollection:'dma_search',code:'dpcd'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Destination',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'cnd_ed_dscd',btnId:'cnd_btn_dscd',id:'udc_dscd',nameId:'cnd_ed_dsnm',selectID:'retrieveAirPortCode','ev:onclickEvent':'scwin.udc_dscd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_dscd_onviewchangeNameEvent',allowCharCode:'0-9.A-Z,a-z',UpperFlagCode:'1',maxlengthCode:'3','ev:onblurCodeEvent':'scwin.udc_dscd_onblurCodeEvent',code:'dstn',refDataCollection:'dma_search'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Direct Master B/L',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',falseValue:'F',id:'cnd_chk_shipgb',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'T'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Master B/L List',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_masterList',grdDownOpts:'{"fileName":"Master BL List.xlsx","sheetName" : "Master BL List", "type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_MasterSearchList',id:'gr_masterList',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_masterList_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'Master B/L No',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Onboard',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'FLT No',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'Shipper',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'Consignee',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'F P/C',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'O P/C',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'Departure',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'Destination',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'Void',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'Regist User',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'Regist Date',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'ISSUE',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'blno',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ondt',inputType:'calendar',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fltno',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shnm1',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnnm1',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'frpc',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'otpc',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dpnm',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dsnm1',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'voidgb',inputType:'select',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Void'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inpid',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'inpdt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'issueYn',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Approved'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Not Approved'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})