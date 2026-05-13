/*amd /ui/ac/co/rsltsmgnt/unsettledmgnt/co_402_02_02b.xml 29263 f453987556d949724afcf7c7f0b3b834629dd22eefd6466c755d63e22f34c707 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'ed_srchCloseYm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'ed_clntCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'ed_srchAcctDeptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctCd',name:'ed_mgntAcctCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sysCd',name:'ed_sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsSellClsCd',name:'rd_pchsSellClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'ed_odrNo',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_master',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptNm',name:'귀속부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rsltsDt',name:'발생일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqClntNm',name:'거래처'}},{T:1,N:'w2:column',A:{dataType:'number',id:'rsltsAmt',name:'미확정;금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntAcctCd',name:'계정코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctNm',name:'계정명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'opntAcctCd',name:'상대계정;코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'opntAcctNm',name:'상대계정명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'오더번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslNm',name:'모선'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commNm',name:'품명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bilgClntNm',name:'청구;거래처'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtClntNm',name:'계약;거래처'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lineClntNm',name:'Line;거래처'}},{T:1,N:'w2:column',A:{dataType:'text',id:'copCoClntNm',name:'헙력업체;거래처'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transCargoClsNm',name:'화물구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'eqNm',name:'장비'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lobranNm',name:'작업장'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portcnt',name:'항차'}},{T:1,N:'w2:column',A:{dataType:'text',id:'stdWrkPathNm',name:'기준작업;경로번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStpNm',name:'작업단계'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impExpDomesticClsNm',name:'수입수출;내수구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blNo',name:'BL NO.'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.co.rsltsmgnt.unsettledmgnt.RetrieveUnsettledContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : co_402_02_02b
// 이름     : 탭 : 미확정 거래내역
// 경로     : 회계/관리회계/실적관리/미확정관리/미확정거래내역조회
// 작 성 자 : 오영재
// 작 업 일 : 2025-11-14
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================
// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.loginAcctDeptCd = scwin.memJson.acctDeptCd;
scwin.loginAcctDeptNm = scwin.memJson.acctDeptNm;
scwin.checkUser = false;
scwin.planYr = "";
scwin.acctDeptCd = "";
scwin.ver = "";
scwin.clsCd = "";
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd;
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.isSubCompany = false;
scwin.privAdmin = scwin.memJson.privAdmin;
scwin.txtCoClsCd = "";
scwin.dateStr = "";
scwin.onpageload = function () {
  scwin.dateStr = $c.date.getServerDateTime($p, "yyyyMMdd");

  //hid_obj1, hid_obj2 = 오더번호
  if (scwin.vLoginCoCd != "000") {
    hid_obj1.visible(false);
    hid_obj2.visible(false);
  } else {
    hid_obj1.visible(true);
    hid_obj2.visible(true);
  }
  const codeOptions = [{
    grpCd: "FI019",
    compID: "rd_pchsSellClsCd"
  } // 매출입구분     
  ];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {};

// 타이밍이 complete에서 되다 말다 한다.
scwin.ondataload = function () {
  scwin.f_FieldClear();
  $c.gus.cfDisableKey($p);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, [ed_srchCloseYm]);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  $c.gus.cfInitHidVal($p, tbl_search);
  rd_pchsSellClsCd.setValue(1);
  //rd_pchsSellClsCd.setSelectedIndex(0);
  ed_srchCloseYm.setValue(scwin.dateStr.substring(0, 6));
  ed_srchCloseYm.focus();
};

//-------------------------------------------------------------------------
// 조회(미확정거래내역)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  ret = await $c.gus.cfValidate($p, [ed_srchCloseYm, ed_srchAcctDeptCd]);
  if (!ret) {
    return false;
  }

  /*
  if (ed_srchAcctDeptCd.getValue() != ed_srchAcctDeptCd.hidVal) {
      $c.win.alert(MSG_CM_ERR_038, ["부서"]);
      ed_srchAcctDeptCd.focus();
      return;
  }
  */

  dma_search.set("closeYm", ed_srchCloseYm.getValue());
  dma_search.set("clntCd", ed_clntCd.getValue());
  dma_search.set("acctDeptCd", ed_srchAcctDeptCd.getValue());
  dma_search.set("mgntAcctCd", ""); //계정코드
  dma_search.set("sysCd", "");
  dma_search.set("pchsSellClsCd", rd_pchsSellClsCd.getValue());
  dma_search.set("odrNo", ed_odrNo.getValue());
  console.log("dma_search => " + dma_search);
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회 후처리
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = function (e) {
  //alert('submited');
  ed_totalRows.setValue(ds_master.getRowCount());
  var rowCnt = ds_master.getRowCount();
  console.log();
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
  } else {
    gr_master.setFocusedCell(0, 0, false);
  }
};
scwin.btn_odrNo_onclick = function (e) {
  scwin.f_openPopUpOdrNo();
};

//-------------------------------------------------------------------------
// 오더번호검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openPopUpOdrNo = async function (e) {
  //var args = new Array();
  //args[0] = ""; //오더번호
  /** 
  var data = {};
  var rtnValues = window.showModalDialog('/ui/ds/sd/odrmgnt/odrreg/sd_402_01_26p.xml', args, 'dialogWidth:820px; dialogHeight:510px; status:No');
  if (rtnValues != null) {
  ed_odrNo.setValue( rtnValues[0] );  // 오더번호
  }
  */

  var data = {};
  //팝업 옵션 설정
  let options = {
    id: "taxPop",
    type: "",
    popupName: "오더번호조회",
    width: 1100,
    height: 650
  };

  //팝업 화면에 데이터 보내는 방법 1. json형태로 팝업화면에서 getParameter로 받기
  let args = {};

  //상세화면 호출
  let rtnValues = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_26p.xml", options, args);
  //alert(rtn);

  if (rtnValues != null) {
    //ed_odrNo.setValue( rtnValues[0] );  // 오더번호
    $c.gus.cfSetReturnValue($p, rtnValues, ed_odrNo);
  }
};
scwin.udc_srchAcctDeptCd_onclickEvent = function (e) {
  scwin.f_srchDeptPopUp('click');
};
scwin.f_srchDeptPopUp = async function (ev) {
  var closeTF = 'T';
  var allSearchTF = 'F';
  if (ev == 'click') {
    closeTF = 'F';
    allSearchTF = 'T';
  }
  /*
  var pWhere =  ",,,,,,,,,"+ ds_search.NameValue(1,"coCd"); 
  var rtnList = f_PopUp(ed_srchAcctDeptCd, txt_srchAcctDeptNm
  			, 'retrieveAcctDeptCdInfo', pWhere, '410');
  */
  var param = "," + scwin.vLoginCoCd + ",";
  udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_callBackFunc // 콜백 함수
  , ed_srchAcctDeptCd.getValue() // 화면에서의 ??? Code Element의 Value
  , ed_srchAcctDeptNm.getValue() // 화면에서의 ??? Name Element의 Value
  , closeTF // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , allSearchTF // 전체검색허용여부	("F")
  , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
  );
};
scwin.udc_srchAcctDeptCd_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_srchAcctDeptCd.setValue(rtnList[0]); // 코드
    ed_srchAcctDeptNm.setValue(rtnList[1]); // 회사명
  } else {
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 거래처 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_srchClntPopUp();
};
scwin.udc_clntNo_onblurNameEvent = function (e) {
  if (ed_clntCd.getValue().trim() != null) scwin.f_srchClntPopUp();
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  if (ed_clntNm.getValue().trim() != null) scwin.f_srchClntPopUp();
};
scwin.f_srchClntPopUp = async function (e) {
  var param = ",,," + scwin.vLoginCoCd;
  udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
  , ed_clntCd.getValue() // 화면에서의 ??? Code Element의 Value
  , ed_clntNm.getValue() // 화면에서의 ??? Name Element의 Value
  , "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , null // 전체검색허용여부	("F")
  , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
  );
};
scwin.udc_clntNo_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntCd.setValue(rtnList[0]); // 코드
    ed_clntNm.setValue(rtnList[1]); // 회사명
  } else {
    ed_clntCd.setValue("");
    ed_clntNm.setValue("");
  }
};
scwin.udc_srchAcctDeptCd_onblurCodeEvent = function (e) {
  if (scwin.f_IsPopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm)) {
    scwin.f_srchDeptPopUp();
  }
};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = function (inObj, ...pairObjs) {
  let inValue = $c.gus.cfGetValue($p, inObj);
  if (!inObj.options) inObj.options = {};
  let hidValue = inObj.options.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.options.hidVal = "";
    for (let i = 0; i < pairObjs.length; i++) {
      $c.gus.cfSetValue($p, pairObjs[i], "");
    }
    return false;
  }
  if (inValue == hidValue) return false;
  return true;
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.execute_sbm_search = function (e) {
  $c.sbm.execute($p, sbm_search);
};
scwin.f_Export = function (e) {
  if (ds_master.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let sheetTitle = "미확정거래내역_" + ed_srchCloseYm.getValue() + "_" + ed_srchAcctDeptNm.getValue() + "_" + rd_pchsSellClsCd.getText();
  const gridId = gr_master;
  const infoArr = [];
  const options = {
    fileName: sheetTitle + ".xlsx",
    // + ".xls",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gridId, options, infoArr);
};
scwin.ed_odrNo_onkeyup = function (e) {
  ed_odrNo.setValue(ed_odrNo.getValue().toUpperCase());
};
scwin.ed_odrNo_onblur = function (e) {
  ed_odrNo.setValue(ed_odrNo.getValue().toUpperCase());
};
scwin.ed_odrNo_onchange = function (info) {
  ed_odrNo.setValue(ed_odrNo.getValue().toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_search',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:75px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 12%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:55px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:50px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'마감년월',class:'req',ref:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'form-control cal',id:'ed_srchCloseYm',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM',editType:'focus',placeholder:' ',ref:'data:dma_search.closeYm',title:'마감년월'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_clntCd',class:'',code:'clntCd',codeId:'ed_clntCd',id:'udc_clntNo',maxlengthCode:'6',maxlengthName:'30',name:'clntNm',nameId:'ed_clntNm',objType:'data',objTypeCode:'data',objTypeName:'data',onloadCallbackFunc:'',popupID:'retrieveAcEmpInfopopup',popupTitle:'',selectID:'retrieveClntEmpNoList',style:'width: 250px;','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent',refDataCollection:'dma_search'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'부서 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_srchAcctDeptCd',code:'acctDeptCd',codeId:'ed_srchAcctDeptCd',id:'udc_srchAcctDeptCd',maxlengthCode:'5',maxlengthName:'30',name:'acctDeptNm',nameId:'ed_srchAcctDeptNm',objTypeCode:'data',objTypeName:'data',popupID:'retrieveAcctDeptCdInfo6popup',selectID:'retrieveAcctDeptCdInfo6',style:'','ev:onblurCodeEvent':'scwin.udc_srchAcctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent',refDataCollection:'dma_search',skipOnBlurCodeValueEmpty:'N',validTitle:'부서',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_pchsSellClsCd',ref:'data:dma_search.pchsSellClsCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data',mandatory:'false',title:'매입',value:'매출매입'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'hid_obj1',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'lbl_odrNo',label:'오더번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'hid_obj2',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'sch-box w150',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control num w120',id:'ed_odrNo',placeholder:'',style:';text-transform:uppercase;',objType:'Data',mandatory:'false',editType:'select',ref:'data:dma_search.odrNo',maxlength:'13',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_odrNo_onkeyup','ev:onblur':'scwin.ed_odrNo_onblur','ev:onchange':'scwin.ed_odrNo_onchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_odrNo',style:'',type:'button','ev:onclick':'scwin.btn_odrNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_reset_detail',type:'button',class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_search',type:'button',class:'btn sch',escape:'false',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'미확정거래 상세내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',style:'',gridDownUserAuth:'X',id:'udc_topGrd',gridID:'gr_master',gridDownFn:'scwin.f_Export',btnPlusYn:'Y',gridDownYn:'Y',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',fixedColumn:'4',dataList:'data:ds_master',scrollByColumn:'false',style:'',id:'gr_master',visibleRowNum:'6',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true',fixedColumnScrollHidden:'true',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'귀속부서',blockSelect:'false',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column11',value:'발생일자',blockSelect:'false',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column10',value:'거래처',blockSelect:'false',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'110',inputType:'text',id:'column9',value:'미확정금액',blockSelect:'false',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'상대계정<br/>코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'상대계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column41',value:'모선',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column39',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'청구<br/>거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'계약<br/>거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'Line<br/>거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'헙력업체<br/>거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'화물구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',value:'장비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',value:'항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'기준작업<br/>경로번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'작업단계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'수입수출<br/>내수구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'BL NO.',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'100',inputType:'text',id:'acctDeptNm',blockSelect:'false',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'rsltsDt',blockSelect:'false',displayMode:'label',dataType:'date',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'120',inputType:'text',id:'reqClntNm',blockSelect:'false',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',width:'110',inputType:'text',id:'rsltsAmt',blockSelect:'false',displayMode:'label',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mgntAcctCd',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',id:'acctNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'opntAcctCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',id:'opntAcctNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'80',inputType:'text',id:'vsslNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'80',inputType:'text',id:'commNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'bilgClntNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'ctrtClntNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'lineClntNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'copCoClntNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transCargoClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'80',inputType:'text',id:'eqNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'lobranNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'80',inputType:'text',id:'portcnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'stdWrkPathNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',style:'',id:'wrkStpNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'impExpDomesticClsNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'blNo',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'110',inputType:'expression',style:'',id:'column70',value:'',displayMode:'label',dataType:'number',expression:'sum(\'rsltsAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'ed_totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]})