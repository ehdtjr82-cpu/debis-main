/*amd /ui/ac/co/rsltsmgnt/unsettledmgnt/co_402_02_03b.xml 31185 363ad363fe3064c75b262021790f31e961eae08919f4aba225173778b4b573f2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'ed_srchCloseYm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'ed_clntCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'ed_srchAcctDeptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctCd',name:'ed_mgntAcctCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sysCd',name:'ed_sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsSellClsCd',name:'rd_pchsSellClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'ed_odrNo',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_masterOrder',repeatNode:'map',saveRemovedData:'true',style:'','ev:ondataload':'scwin.ds_masterOrder_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'bizDomNm',name:'사업영역'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptNm',name:'귀속부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptCd',name:'귀속부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqClntNm',name:'거래처'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqClntNo',name:'거래처코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bilgClntNm',name:'청구거래처'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bilgClntNo',name:'청구거래처코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'오더번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntAcctCd',name:'계정코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctNm',name:'계정명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rsltsDt',name:'발생일자'}},{T:1,N:'w2:column',A:{dataType:'number',id:'amt',name:'미확정금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'level',name:'레벨',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userId',name:'오더등록자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userNm',name:'오더등록자명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blNo',name:'BL NO.'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.co.rsltsmgnt.unsettledmgnt.RetrieveUnsettledOrderContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_masterOrder","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_masterOrder","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : co_402_02_03b
// 이름     : 탭 : 미확정거래내역오더별소계
// 경로     : 회계/관리회계/실적관리/미확정관리/미확정거래내역조회
// 작 성 자 : 오영재
// 작 업 일 : 2025-11-17
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

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  console.log('scwin.f_FieldClear');
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
// CommonCode 세팅 후 초기화
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  scwin.f_FieldClear();
};

//-------------------------------------------------------------------------
// 조회(미확정거래내역소계)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  ret = await $c.gus.cfValidate($p, [ed_srchCloseYm, ed_srchAcctDeptCd]);
  if (!ret) {
    return;
  }
  if (ed_srchAcctDeptCd.getValue() != ed_srchAcctDeptCd.options.hidVal) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["부서"]);
    ed_srchAcctDeptCd.focus();
    return;
  }
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
  ed_totalRows.setValue(ds_masterOrder.getRowCount());
  /*
  ds_masterOrder.sort([
      { id: "odrNo", order: "asc" },
      { id: "mgntAcctCd", order: "asc" }
  ]);
  */
  var rowCnt = ds_masterOrder.getRowCount();
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
  } else {
    var options = {};
    options.sortIndex = "odrNo";
    options.sortOrder = "1";
    ds_masterOrder.multisort(options);
    gr_masterOrder.setFocusedCell(0, 0, false);
  }
};
scwin.btn_odrNo_onclick = function (e) {
  scwin.f_openPopUpOdrNo();
};

//-------------------------------------------------------------------------
// 오더번호검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openPopUpOdrNo = async function (e) {
  /**
     var args = new Array();
  args[0] = ""; //오더번호
  */
  var data = {};

  //var rtnValues = window.showModalDialog('/ui/ds/sd/odrmgnt/odrreg/sd_402_01_26p.xml', args, 'dialogWidth:820px; dialogHeight:510px; status:No');

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
    ed_srchAcctDeptCd.options.hidVal = rtnList[0];
  } else {
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptNm.setValue("");
    ed_srchAcctDeptCd.options.hidVal = "";
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

/*
<object id="ds_masterOrder" classid="<%=DGauceCLSID.DATASET%>">
  <param name=ViewDeletedRow  value=true>
   <param name=SubSumExpr          value="2:odrNo,1:mgntAcctCd">
  <param name=SortExpr          value="+odrNo +mgntAcctCd">
</object>

쿼리 후에 가우스 에서 정렬을 해준다... 웹스퀘어 에서도 같은 방식으로
 */
scwin.ds_masterOrder_ondataload = function () {};
scwin.execute_sbm_search = function (e) {
  $c.sbm.execute($p, sbm_search);
};

//소계컬럼에 targetColumnID 값 세팅
scwin.subtotalTargetColumnView = function (rowIndex, tci) {
  return ds_masterOrder.getCellData(rowIndex, tci);
};
scwin.f_Export = function (e) {
  if (ds_masterOrder.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let sheetTitle = "미확정거래내역소계_" + ed_srchCloseYm.getValue() + "_" + ed_srchAcctDeptNm.getValue() + "_" + rd_pchsSellClsCd.getText();
  const gridId = gr_masterOrder;
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'shbox sub',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 12%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:55px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'마감년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'form-control cal',id:'ed_srchCloseYm',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM',editType:'focus',placeholder:' ',ref:'data:dma_search.closeYm',title:'예산년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_clntCd',class:'w300',code:'clntCd',codeId:'ed_clntCd',id:'udc_clntNo',maxlengthCode:'6',maxlengthName:'30',name:'clntNm',nameId:'ed_clntNm',objType:'data',objTypeCode:'key',objTypeName:'key',onloadCallbackFunc:'',popupID:'retrieveAcEmpInfopopup',popupTitle:'',selectID:'retrieveClntEmpNoList',style:'','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent',refDataCollection:'dma_search'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_srchAcctDeptCd',code:'acctDeptCd',codeId:'ed_srchAcctDeptCd',id:'udc_srchAcctDeptCd',maxlengthCode:'5',maxlengthName:'30',name:'acctDeptNm',nameId:'ed_srchAcctDeptNm',objTypeCode:'data',objTypeName:'data',popupID:'retrieveAcctDeptCdInfo6popup',selectID:'retrieveAcctDeptCdInfo6',style:'','ev:onblurCodeEvent':'scwin.udc_srchAcctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent',refDataCollection:'dma_search',validTitle:'부서',mandatoryCode:'true',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_pchsSellClsCd',ref:'data:dma_search.pchsSellClsCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data',mandatory:'false',title:'매입',value:'매출매입'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_commonCodeFI019'},E:[{T:1,N:'xf:label',A:{ref:'cdNm'}},{T:1,N:'xf:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'hid_obj1',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lbl_odrNo',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'hid_obj2',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'sch-box w150',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control num w120',id:'ed_odrNo',placeholder:'',style:';text-transform:uppercase;',objType:'Data',maxlength:'13',editType:'select',ref:'data:dma_search.odrNo',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_odrNo_onkeyup','ev:onblur':'scwin.ed_odrNo_onblur','ev:onchange':'scwin.ed_odrNo_onchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_odrNo',style:'',type:'button','ev:onclick':'scwin.btn_odrNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'tab2_btn_reset',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'미확정거래 오더별소계',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',style:'',gridDownUserAuth:'X',gridID:'gr_masterOrder',id:'udc_topGrd',gridDownFn:'scwin.f_Export',btnPlusYn:'Y',gridDownYn:'Y',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_masterOrder',scrollByColumn:'false',style:'',id:'gr_masterOrder',visibleRowNum:'6',autoFit:'allColumn',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',autoFitMinWidth:'1700',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'사업영역',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column11',value:'귀속부서',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column10',value:'귀속부서코드',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column9',value:'거래처',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'거래처코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'청구거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',value:'청구거래처코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column13',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column35',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'발생일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column31',value:'미확정금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column157',value:'레벨',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column23',value:'오더등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'오더등록자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'BL NO.',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'100',inputType:'text',id:'bizDomNm',blockSelect:'false',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'100',inputType:'text',id:'acctDeptNm',blockSelect:'false',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'acctDeptCd',blockSelect:'false',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'150',inputType:'text',id:'reqClntNm',blockSelect:'false',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'reqClntNo',value:'',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',id:'bilgClntNm',value:'',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bilgClntNo',value:'',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'odrNo',value:'',displayMode:'label',colMerge:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mgntAcctCd',value:'',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rsltsDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate',dataType:'date'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'text',style:'',id:'amt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'level',value:'',displayMode:'label',hidden:'true',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'userId',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'userNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',style:'',id:'blNo',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'odrNo',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label',value:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column130',displayMode:'label',value:'계정별소계',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column131',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column132',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column133',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column134',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column135',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column136',displayMode:'label delim value'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'mgntAcctCd',displayMode:'label',expression:'scwin.subtotalTargetColumnView(this.rowIndex, \'mgntAcctCd\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column137',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column138',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column139',displayMode:'label',dataType:'number',expression:'sum(\'amt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column159',value:'1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column140',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column141',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column142',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row8'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column143',displayMode:'label',value:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column144',displayMode:'label',value:'오더별소계',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column145',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column146',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column147',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column148',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column149',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'sub_odrNo',displayMode:'value',expression:'targetColValue()',class:'',textAlign:'left'},E:[{T:1,N:'w2:displayFunction',E:[{T:4,cdata:'\n                                            return scwin.subtotalKey(item);\n                                        '}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column150',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column151',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column152',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column153',displayMode:'label',expression:'sum(\'amt\')',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column160',value:'2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column154',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column155',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column156',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'합계',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'amt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column161',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column38',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'ed_totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]})